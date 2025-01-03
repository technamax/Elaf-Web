import { useState, useEffect } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Card,
  IconButton,
  CardHeader,
  Divider,
  Typography,
  CircularProgress,
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardActions
} from '@mui/material';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetPrePlanningHeaderByDesignIdQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetAdditionalProcessListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import {
  useGetDesignFromPlanningHeaderByCollectionIdQuery,
  useGetDistinctCollectionsQuery,
  useGetSummaryByCollectionQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';
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

import {
  PrePlannningDetails,
  FabricationDetails,
  DyeingnDetails,
  EmbroideryDetails,
  SchiffliDetails,
  AdditionalProcessDetails
} from 'components/Preplanning/Summary';
// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import '../../assets/scss/style.scss';
import '../../App.css';
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

const Summary = ({
  initialValues,
  setActiveStep,
  collectionId,
  setInitialValues
}) => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [initialData, setInitialData] = useState([]);
  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [summaryData, setSummaryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = useState(false); // State for modal open/close

  const [selectedCollectionId, setSelectedCollectionId] = useState(
    collectionId || ''
  );
  const [formData, setFormData] = useState({
    designId: '',
    planningHeaderId: '',
    batchNo: '',
    distinctId: '',
    collectionBatchId: '',
    collectionId: selectedCollectionId || ''
  });

  const handleStateChange = (params) => {
    if (apiRef.current && apiRef.current.autosizeColumns) {
      apiRef.current.autosizeColumns({
        // columns: autoSizeColumns,
        includeOutliers: true,
        includeHeaders: true
      });
    }
  };
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);
    console.log('New Selection:', newSelection); // Debugging line
  };

  const { data: distinctData, refetch: refetchDistinctData } =
    useGetDistinctCollectionsQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip fetching if no collectionId
    });

  const [summaryHeaderList, setSummaryHeaderList] = useState([]);
  const [distinctCollectionList, setDistinctCollectionList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);
  console.log('distinctData', distinctData);
  useEffect(() => {
    if (collectionData) {
      setCollectionList(collectionData.result);
    }
  }, [collectionData]);

  useEffect(() => {
    if (distinctData) {
      console.log('Distinct Data:', distinctData.result); // Debugging
      setDistinctCollectionList(distinctData || []); // Ensure it's always an array
    }
  }, [distinctData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(`handleChange called with name: ${name}, value: ${value}`);

    if (name === 'collectionId') {
      setSelectedCollectionId(value);
      setFormData({
        ...formData,
        collectionId: value,
        collectionBatchId: '' // Reset batch ID when collection changes
      });
      refetchDistinctData(collectionId);
    } else if (name === 'collectionBatchId') {
      setFormData({
        ...formData,
        collectionBatchId: value,
        planningHeaderId: formData.planningHeaderId
      });
    } else {
      const updatedFormData = { ...formData, [name]: value };
      setFormData(updatedFormData);
    }
  };
  const { data: summaryHeader, refetch: refetchSummaryHeader } =
    useGetSummaryByCollectionQuery(
      {
        collectionId: formData.collectionId,
        collectionBatchId: formData.collectionBatchId
      },
      {
        skip: !formData.collectionId || !formData.collectionBatchId // Skip query if either ID is missing
      }
    );
  useEffect(() => {
    if (summaryHeader && summaryHeader.length > 0) {
      setSummaryHeaderList(summaryHeader);
    }
  }, [summaryHeader]);
  console.log('Selected collection ID:', selectedCollectionId);
  console.log('distinctCollectionList data:', distinctCollectionList);

  const fetchSummaryData = async (planningHeaderId) => {
    setIsLoading(true);
    try {
      console.log('Fetching Summary Data for ID:', planningHeaderId); // Log to verify the ID

      const response = await axios.get(
        `http://100.42.177.77:83/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${planningHeaderId}`
      );
      if (response.data.success) {
        setSummaryData(response.data.result);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Failed to fetch summary data', error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('formData', formData);

  const handleOpen = (data) => {
    console.log('Selected rowdata:', data);
    fetchSummaryData(data.planningHeaderId);
    setOpen(true);
    setInitialData(data);
    // You can call fetchSummaryData(planningHeaderId) if needed
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const [planningHeaderId, setPlanningHeaderId] = useState(null);
  const [dialog, setDialog] = useState(null);
  const handleClickOpen2 = async (data, dg) => {
    console.log('rowdata', data);
    setPlanningHeaderId(data.planningHeaderId);
    setDialog(dg);
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const prePlanningColumns = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'planningProcessTypeName', headerName: 'Process Type' },
    { field: 'componentsCount', headerName: 'Components Count' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    {
      field: 'totalFabricSum',
      headerName: 'Total Fabric Sum',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'totalFabricRequiredSum',
      headerName: 'Total Fabric Required Sum',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 1)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

  const fabricationColumns = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    {
      field: 'totalExcGst',
      headerName: 'Total Excluding GST',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'totalIncGst',
      headerName: 'Total Including GST',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 2)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

  const dyeingPrintingColumns = [
    { field: 'designNo', headerName: 'Design No' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'processType', headerName: 'Process Type' },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum' },
    {
      field: 'availableQtySum',
      headerName: 'Available Qty Sum',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    { field: 'colorCount', headerName: 'Color Count' },
    { field: 'fabricCount', headerName: 'Fabric Count' },
    { field: 'outputQtySum', headerName: 'Output Qty Sum' },
    {
      field: 'totalIncGst',
      headerName: 'Total Including GST',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 3)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

  const embroideryColumns = [
    { field: 'designNo', headerName: 'Design No', width: 150 },
    { field: 'batchNo', headerName: 'Batch No', width: 150 },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 },
    { field: 'availableQtySum', headerName: 'Available Qty Sum', width: 150 },
    { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
    { field: 'componentCount', headerName: 'Component Count', width: 150 },
    { field: 'requiredPcsSum', headerName: 'Required Pcs Sum', width: 150 },
    {
      field: 'totalAmountSum',
      headerName: 'Total Amount Sum',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      width: 150
    },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 4)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];
  const schiffiliColumns = [
    {
      field: 'availableQtySum',
      headerName: 'Available Qty Sum',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      width: 150
    },
    { field: 'totalPcsSum', headerName: 'Total Pcs Sum', width: 150 },
    { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
    { field: 'componentCount', headerName: 'Component Count', width: 150 },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 5)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];
  const additionalProcessColumns = [
    { field: 'designNo', headerName: 'Design No', width: 150 },
    { field: 'batchNo', headerName: 'Batch No', width: 150 },
    { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
    { field: 'pcsPerComponent', headerName: 'Pcs Per Component', width: 150 },
    { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 },
    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.statusId === 8}
            >
              <MoveToInboxIcon />
            </IconButton> */}
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row, 6)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

  const summaryHeaderColumn = [
    // { field: 'planningHeaderId', headerName: 'ID' },
    { field: 'collectionName', headerName: 'Collection Name' },
    { field: 'batchNo', headerName: 'Batch No' },
    { field: 'designNo', headerName: 'Design No' },
    { field: 'orderNumber', headerName: 'Order Number' },
    { field: 'designerName', headerName: 'Designer Name' },
    { field: 'colorName', headerName: 'Color Name' },
    { field: 'poPcs', headerName: 'PO Pieces' },
    // { field: 'batchStatus', headerName: 'Batch Status' },
    { field: 'batchStatusName', headerName: 'Batch Status' },

    {
      field: 'planningDate',
      headerName: 'Planning Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'action',
      headerName: 'Action',

      renderCell: (params) => (
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => handleOpen(params.row)}>View</Button>
        </ButtonGroup>
      ),
      sortable: false,
      filterable: false
    }
  ];
  const [summaryHeaderRows, setSummaryHeaderRows] = useState([]);
  useEffect(() => {
    // Assuming summaryHeaderList is updated from an API or some data source
    const updatedRows =
      summaryHeaderList?.map((item, index) => ({
        id: item.planningHeaderId || index, // Ensure each row has a unique ID
        ...item
      })) || [];
    setSummaryHeaderRows(updatedRows);
  }, [summaryHeaderList]);

  // const summaryHeaderRows =
  //   summaryHeaderList?.map((item, index) => ({
  //     id: item.planningHeaderId || index, // Use a unique identifier if available
  //     ...item
  //   })) || [];

  const prePlanningRows =
    summaryData?.prePlanningList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];

  const fabricationRows =
    summaryData?.fabricationList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];

  const dyeingPrintingRows =
    summaryData?.dyeingPrintingList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];
  const embroideryRows =
    summaryData?.embroideryList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];

  const schiffiliRows =
    summaryData?.schiffiliList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];

  const additionalProcessRows =
    summaryData?.additionalProcessList?.map((item, index) => ({
      id: index,
      ...item
    })) || [];
  const CustomFooter = () => <div />;
  const apiRef = useGridApiRef();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (selectedRows.length === 0) {
      enqueueSnackbar('No rows selected', { variant: 'warning' });
      return;
    }

    const planningHeaderIds = selectedRows;
    const requestBody = {
      planningHeaderId: planningHeaderIds,
      collectionBatchId: formData.collectionBatchId,
      createdBy: user.empId,
      batchStatus: 3
    };
    setLoading(true);
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/PrePlanning/FinalizePrePlanningBatch',
        requestBody
      );

      if (response.data === true) {
        enqueueSnackbar('Pre Planning Finalized successfully', {
          variant: 'success'
        });
        console.log('requestbody', requestBody);

        setSummaryHeaderRows((prevRows) =>
          prevRows.filter((row) => !planningHeaderIds.includes(row.id))
        );
      } else {
        enqueueSnackbar('Failed to save data', { variant: 'error' });
      }
    } catch (error) {
      console.error('Failed to save data', error);
      enqueueSnackbar('Failed to save data', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };
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
              value={formData.collectionId}
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
              label="Select Collection Batch"
              name="collectionBatchId"
              value={formData.collectionBatchId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {distinctCollectionList.length > 0 ? (
                distinctCollectionList.map((option) => (
                  <MenuItem
                    key={option.collectionBatchId}
                    value={option.collectionBatchId}
                  >
                    {option.distinctId}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No batches available</MenuItem>
              )}
            </TextField>
          </Grid>
          <Grid item xs={4} textAlign="right" sx={{ mt: 1 }}>
            {/* <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              color="success"
            >
              Finalize
            </Button> */}

            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              color="success"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress sx={{ color: '#ffffff' }} size={24} />
              ) : (
                'Finalize'
              )}
            </Button>
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
            <DataGrid
              rows={summaryHeaderRows}
              columns={summaryHeaderColumn}
              checkboxSelection
              getRowId={(row) => row.id} // Ensure each row has a unique ID
              disableRowSelectionOnClick
              isRowSelectable={(params) => params.row.statusId !== 3}
              autosizeOnMount
              apiRef={apiRef}
              onStateChange={handleStateChange}
              onRowSelectionModelChange={(newSelectionModel) =>
                handleRowSelection(newSelectionModel)
              }
            />
          </Grid>

          <Dialog open={open} onClose={handleClose} maxWidth="xxl" fullWidth>
            {/* <DialogTitle>Details</DialogTitle> */}
            <CardHeader
              className="css-4rfrnx-MuiCardHeader-root"
              title="Summary Details"
              titleTypographyProps={{ style: { color: 'white' } }}
            />
            <DialogContent sx={{ paddingY: '0px' }}>
              {isLoading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <CircularProgress />
                </Box>
              ) : summaryData ? (
                <>
                  {' '}
                  <Grid
                    container
                    spacing={1}
                    width="Inherit"
                    sx={{
                      paddingY: 2,
                      position: 'sticky',
                      top: 0,
                      zIndex: 10,
                      backgroundColor: '#E0E0E0'
                    }}
                  >
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Collection Name"
                        fullWidth
                        size="small"
                        name="collectionName"
                        value={initialData.collectionName}
                        // onChange={handleChange}
                        disabled
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: 'black'
                          }
                        }}
                        sx={(theme) => ({
                          ...(formData.baseColorName !== '' && {
                            '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                              {
                                backgroundColor: `#c9c9c9 !important`
                              }
                          }),
                          '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: 'black' // Adjust text color here
                          },
                          '& .MuiInputBase-root.Mui-disabled': {
                            backgroundColor: '#f9f9f9' // Adjust background color here
                          },
                          '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                            {
                              // borderColor: 'gray' // Adjust border color here
                            },
                          '& .MuiInputLabel-root.Mui-disabled': {
                            color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Design"
                        fullWidth
                        size="small"
                        name="designNo"
                        value={initialData.designNo}
                        // onChange={handleChange}
                        disabled
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: 'black'
                          }
                        }}
                        sx={(theme) => ({
                          ...(formData.baseColorName !== '' && {
                            '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                              {
                                backgroundColor: `#c9c9c9 !important`
                              }
                          }),
                          '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: 'black' // Adjust text color here
                          },
                          '& .MuiInputBase-root.Mui-disabled': {
                            backgroundColor: '#f9f9f9' // Adjust background color here
                          },
                          '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                            {
                              // borderColor: 'gray' // Adjust border color here
                            },
                          '& .MuiInputLabel-root.Mui-disabled': {
                            color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                          }
                        })}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Batch"
                        fullWidth
                        size="small"
                        name="batchNo"
                        value={initialData.batchNo}
                        // onChange={handleChange}
                        disabled
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: 'black'
                          }
                        }}
                        sx={(theme) => ({
                          ...(formData.baseColorName !== '' && {
                            '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                              {
                                backgroundColor: `#c9c9c9 !important`
                              }
                          }),
                          '& .MuiInputBase-input.Mui-disabled': {
                            WebkitTextFillColor: 'black' // Adjust text color here
                          },
                          '& .MuiInputBase-root.Mui-disabled': {
                            backgroundColor: '#f9f9f9' // Adjust background color here
                          },
                          '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                            {
                              // borderColor: 'gray' // Adjust border color here
                            },
                          '& .MuiInputLabel-root.Mui-disabled': {
                            color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                          }
                        })}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      marginTop: '10px',
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(0)} // Navigate to the corresponding step
                  >
                    Pre Planning
                  </Typography>
                  <DataGrid
                    // classes={{ columnHeaders: 'custom-header' }}
                    rows={prePlanningRows}
                    columns={prePlanningColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    onStateChange={handleStateChange}
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                  <Dialog
                    open={open2}
                    onClose={handleClose2}
                    fullWidth
                    maxWidth="xl"
                  >
                    <DialogTitle
                      sx={{
                        backgroundColor: '#A11F23',
                        color: '#ffffff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingX: '24px',
                        paddingY: '4px'
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="div"
                        color="#ffffff"
                        gutterBottom
                        fontSize={20}
                        fontWeight={2}
                        fontStyle={'normal'}
                      >
                        {'PrePlanning Details'}
                      </Typography>
                      <IconButton
                        onClick={handleClose2}
                        sx={{ color: '#ffffff' }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </DialogTitle>
                    <DialogContent>
                      {/* <DialogContentText id="alert-dialog-slide-description"></DialogContentText> */}
                      <Grid
                        container
                        spacing={1}
                        width="Inherit"
                        sx={{ paddingY: 2, paddingX: 2 }}
                      >
                        <Grid item xs={12}>
                          {dialog === 1 ? (
                            <PrePlannningDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : dialog === 2 ? (
                            <FabricationDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : dialog === 3 ? (
                            <DyeingnDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : dialog === 4 ? (
                            <EmbroideryDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : dialog === 5 ? (
                            <SchiffliDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : dialog === 6 ? (
                            <AdditionalProcessDetails
                              planningHeaderId={planningHeaderId}
                            />
                          ) : null}
                        </Grid>
                      </Grid>
                    </DialogContent>
                  </Dialog>
                  <Divider
                    color="#921e22"
                    sx={{ height: 3, width: '100%', mb: 1 }}
                  />
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(1)} // Navigate to the corresponding step
                  >
                    Fabrication
                  </Typography>
                  <DataGrid
                    rows={fabricationRows}
                    columns={fabricationColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                  <Divider
                    color="#921e22"
                    sx={{ height: 2, width: '100%', mt: 1, mb: 1 }}
                  />
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(2)} // Navigate to the corresponding step
                  >
                    Dyeing
                  </Typography>
                  <DataGrid
                    rows={dyeingPrintingRows}
                    columns={dyeingPrintingColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                  <Divider
                    color="#921e22"
                    sx={{ height: 2, width: '100%', mb: 1 }}
                  />
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(3)} // Navigate to the corresponding step
                  >
                    Embroidery
                  </Typography>
                  <DataGrid
                    rows={embroideryRows}
                    columns={embroideryColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                  <Divider
                    color="#921e22"
                    sx={{ height: 2, width: '100%', mb: 1 }}
                  />
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(4)} // Navigate to the corresponding step
                  >
                    Schiffli
                  </Typography>
                  <DataGrid
                    rows={schiffiliRows}
                    columns={schiffiliColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                  <Divider
                    color="#921e22"
                    sx={{ height: 2, width: '100%', mb: 1 }}
                  />
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      color: '#9f1d22',
                      // textAlign: 'center',
                      cursor: 'pointer', // To indicate it's clickable
                      '&:hover': {
                        textDecoration: 'underline' // Optional: Add an underline on hover to indicate it's clickable
                      }
                    }}
                    onClick={() => setActiveStep(5)} // Navigate to the corresponding step
                  >
                    Additional Process
                  </Typography>
                  <DataGrid
                    rows={additionalProcessRows}
                    columns={additionalProcessColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                    hideFooter
                    sx={{
                      '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                      '& .css-1kyxv1r-MuiDataGrid-root': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-container--top [role=row]': {
                        color: 'white',
                        backgroundColor: '#323232'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-sortIcon': {
                        color: 'white'
                      },
                      '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                      '& .MuiDataGrid-row': {
                        '&.total-summary-row': {
                          backgroundColor: 'darkgray'
                        }
                      }
                    }}
                  />
                </>
              ) : (
                <CircularProgress />
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Card>
    </>
  );
};

export default Summary;
