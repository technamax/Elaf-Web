import { useState, useEffect } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Card,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetPrePlanningHeaderByDesignIdQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetAdditionalProcessListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { useGetPlanningDashboardByYearQuery } from '../../api/store/Apis/dashboardApi';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.grey[400]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.grey[400]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

const Summary = (initialValues) => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [initialData, setInitialData] = useState([]);
  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [summaryData, setSummaryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const [formData, setFormData] = useState({
    designId: '',
    planningHeaderId: 0,
    batchNo: ''
  });

  useEffect(() => {
    setSelectedCollectionId(initialValues.collectionId);
  }, [initialValues]);

  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });

  const { data: batchData, refetch: refetchBatches } =
    useGetPrePlanningHeaderByDesignIdQuery(formData.designId, {
      skip: !formData.designId // Skip the query if no design is selected
    });

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    if (collectionData) {
      setCollectionList(collectionData.result);
    }
  }, [collectionData]);

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
    }
  }, [designData]);

  useEffect(() => {
    if (batchData) {
      setBatchList(batchData.result);
    }
  }, [batchData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(`handleChange called with name: ${name}, value: ${value}`);

    if (name === 'collectionId') {
      setSelectedCollectionId(value);
      setFormData({
        ...formData,
        collectionId: value,
        designId: '',
        planningHeaderId: 0,
        batchNo: ''
      });
    } else if (name === 'designId') {
      setFormData({
        ...formData,
        designId: value,
        planningHeaderId: 0
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : ''
      });

      if (selectedBatch) {
        fetchSummaryData(selectedBatch.planningHeaderId);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log('Selected collection ID:', selectedCollectionId);
  console.log('Form data:', formData);
  console.log('Design list:', designList);
  console.log('Batch list:', batchList);

  const fetchSummaryData = async (planningHeaderId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${planningHeaderId}`
      );
      if (response.data.success) {
        setSummaryData(response.data.result);
        console.log(summaryData);
      } else {
        enqueueSnackbar(response.data.message, { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('Failed to fetch summary data', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(summaryData);

  const columnsPrePlanningList = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'planningProcessTypeName', headerName: 'Process Type' },
    { field: 'componentsCount', headerName: 'Components Count' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    { field: 'totalFabricSum', headerName: 'Total Fabric Sum' },
    { field: 'totalFabricRequiredSum', headerName: 'Total Fabric Required Sum' }
  ];

  const columnsFabricationList = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    { field: 'totalExcGst', headerName: 'Total Excluding GST' },
    { field: 'totalIncGst', headerName: 'Total Including GST' }
  ];

  const columnsDyeingPrintingList = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'processType', headerName: 'Process Type' },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum' },
    { field: 'availableQtySum', headerName: 'Available Qty Sum' },
    { field: 'colorCount', headerName: 'Color Count' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    { field: 'outputQtySum', headerName: 'Output Qty Sum' },
    { field: 'totalIncGst', headerName: 'Total Including GST' }
  ];

  const columnsEmbroideryList = [
    { field: 'designNo', headerName: 'Design No', width: 150 },
    { field: 'batchNo', headerName: 'Batch No', width: 150 },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 },
    { field: 'availableQtySum', headerName: 'Available Qty Sum', width: 150 },
    { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
    { field: 'componentCount', headerName: 'Component Count', width: 150 },
    { field: 'requiredPcsSum', headerName: 'Required Pcs Sum', width: 150 },
    { field: 'totalAmountSum', headerName: 'Total Amount Sum', width: 150 }
  ];

  const columnsAdditionalProcessList = [
    { field: 'designNo', headerName: 'Design No', width: 150 },
    { field: 'batchNo', headerName: 'Batch No', width: 150 },
    { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
    { field: 'pcsPerComponent', headerName: 'Pcs Per Component', width: 150 },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 }
  ];

  const rowHeight = 52; // Assume each row has a height of 52px
  const minHeight = 300; // Minimum height to ensure some rows are always visible

  const maxHeight = 500; // Maximum height for the grid
  const prePlanningList = summaryData?.prePlanningList || [];
  const calculatedHeight = Math.max(
    minHeight,
    Math.min(prePlanningList.length * rowHeight, maxHeight)
  );

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Summary"
          titleTypographyProps={{ style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={1}
          width="inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={selectedCollectionId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {collectionList.map((option) => (
                <MenuItem key={option.collectionId} value={option.collectionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Design"
              name="designId"
              value={formData.designId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {designList.map((option) => (
                <MenuItem key={option.designId} value={option.designId}>
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Batch No."
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {batchList.map((option) => (
                <MenuItem key={option.batchNo} value={option.batchNo}>
                  {option.batchNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Card>

      <Grid item xs={12} md={12} mb={1}></Grid>

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Summary Details"
          titleTypographyProps={{ style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={1}
          width="inherit"
          sx={{ paddingY: 1, paddingX: 1 }}
        >
          <Grid item xs={12} md={12} paddingTop={1}>
            {summaryData && (
              <>
                <Typography variant="h3" gutterBottom>
                  Pre Planning
                </Typography>
                <ReuseableDataGrid
                  iColumns={columnsPrePlanningList}
                  initialRows={
                    summaryData.prePlanningList?.map((row, index) => ({
                      ...row,
                      id: index
                    })) || []
                  }
                  setInitialData={setInitialData}
                  isLoading={isLoading}
                  height={calculatedHeight}
                />
                <Divider
                  color="#921e22"
                  sx={{ height: 2, width: '100%', mb: 1 }}
                />
                <Typography variant="h3" gutterBottom>
                  Fabrication
                </Typography>

                <ReuseableDataGrid
                  iColumns={columnsFabricationList}
                  initialRows={
                    summaryData.fabricationList?.map((row, index) => ({
                      ...row,
                      id: index
                    })) || []
                  }
                  setInitialData={setInitialData}
                  isLoading={isLoading}
                  height={calculatedHeight}
                />
                <Divider
                  color="#921e22"
                  sx={{ height: 2, width: '100%', mt: 1, mb: 1 }}
                />
                <Typography variant="h3" gutterBottom>
                  Dyeing
                </Typography>

                <ReuseableDataGrid
                  iColumns={columnsDyeingPrintingList}
                  initialRows={
                    summaryData.dyeingPrintingList?.map((row, index) => ({
                      ...row,
                      id: index
                    })) || []
                  }
                  setInitialData={setInitialData}
                  isLoading={isLoading}
                  height={calculatedHeight}
                />
                <Divider
                  color="#921e22"
                  sx={{ height: 2, width: '100%', mb: 1 }}
                />
                <Typography variant="h3" gutterBottom>
                  Embroidery
                </Typography>

                <ReuseableDataGrid
                  iColumns={columnsEmbroideryList}
                  initialRows={
                    summaryData.embroideryList?.map((row, index) => ({
                      ...row,
                      id: index
                    })) || []
                  }
                  setInitialData={setInitialData}
                  isLoading={isLoading}
                  height={calculatedHeight}
                />
                <Divider
                  color="#921e22"
                  sx={{ height: 2, width: '100%', mb: 1 }}
                />
                <Typography variant="h3" gutterBottom>
                  Additional Process
                </Typography>

                <ReuseableDataGrid
                  iColumns={columnsAdditionalProcessList}
                  initialRows={
                    summaryData.additionalProcessList?.map((row, index) => ({
                      ...row,
                      id: index
                    })) || []
                  }
                  setInitialData={setInitialData}
                  isLoading={isLoading}
                  height={calculatedHeight}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Summary;
