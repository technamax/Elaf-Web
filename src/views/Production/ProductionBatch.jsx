import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  FormControl
} from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';

import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetMainMenuListQuery } from 'api/store/Apis/userManagementApi';
import {
  useGetCollectionListFromPlanningHeaderQuery,
  useGetDesignListFromCompletedCollectionIdQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AddTermsAndConditions from 'components/Production/TermsAndConditions/AddTermsAndConditions';
import AssignTermsAndConditions from 'components/Production/TermsAndConditions/AssignTermsAndConditions';
// import SubMenu from './SubMenu';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const ProductionBatch = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedDesigns, setSelectedDesigns] = React.useState([]);

  const [formData, setFormData] = useState({
    productionId: 0,
    collectionId: '',
    orderNumber: '',
    launchDate: '',
    status: '',
    remarks: '',
    productionBatchDetails: [selectedDesigns],

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  console.log('formData', formData);
  const options = [
    {
      value: 'Yes',
      label: 'Yes'
    },
    {
      value: 'No',
      label: 'No'
    }
  ];
  const [value, setValue] = useState('1');
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      productionId: initialData?.productionId || 0,
      collectionId: initialData?.collectionId || '',
      orderNumber: initialData?.orderNumber || '',
      launchDate: initialData?.launchDate || '',
      status: initialData?.status || '',
      remarks: initialData?.remarks || '',
      // productionBatchDetails: initialData?.productionBatchDetails || [],

      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: collectionData, refetch } =
    useGetCollectionListFromPlanningHeaderQuery();
  const { data: designData, refetch: refetchDesignData } =
    useGetDesignListFromCompletedCollectionIdQuery(formData.collectionId, {
      skip: !formData.collectionId // Skip the query if no collection is selected
    });

  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    if (collectionData) {
      setCollectionList(
        collectionData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [collectionData, refetch]);
  useEffect(() => {
    if (designData) {
      setInitialRows(
        designData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [designData, refetchDesignData]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );

      setFormData({
        ...formData,
        collectionId: value,
        orderNumber: selectedCollection ? selectedCollection.orderNumber : '',
        status: selectedCollection ? selectedCollection.batchStatus : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:449/api/Production/SaveProductionBatchHeader',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        productionId: 0,
        collectionId: '',
        orderNumber: '',
        launchDate: '',
        status: '',
        remarks: '',
        // productionBatchDetails: [],

        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      // refetch();
      // setIsEdit(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'orderNumber',
      headerName: 'Order Number'
      // flex: 1
    },
    {
      field: 'designNo',
      headerName: 'Design No.'
      // flex: 1
    },
    {
      field: 'designerName',
      headerName: 'DesignerName'
      // flex: 1
    },
    {
      field: 'poPcs',
      headerName: 'PO Pcs..'
      // flex: 1
    },
    {
      field: 'planningDate',
      headerName: 'Date Of Planning',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
      // flex: 1
    },
    {
      field: 'colorName',
      headerName: 'Color'
      // flex: 1
    }
  ];
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const apiRef = useGridApiRef();

  const handleRowSelectionModelChange = React.useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
      const planningHeaderIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['planningHeaderId'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values

      const designs = planningHeaderIds.map((planningHeaderId) => ({
        prodctionDetId: 0,
        productionId: 0,
        planningHeaderId: planningHeaderId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedBy: user.empId,
        lastUpdatedOn: new Date().toISOString()
      }));

      setSelectedDesigns(designs);
    },
    [apiRef]
  );

  useEffect(() => {
    setFormData({ ...formData, productionBatchDetails: selectedDesigns });
  }, [selectedDesigns]);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  console.log('selectedDesigns:', selectedDesigns);
  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        // backgroundColor: '#eef2f6',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      }}
    >
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
        <Card variant="outlined">
          <CardHeader
            className="css-4rfrnx-MuiCardHeader-root"
            // avatar={
            // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
            // }
            title="Production Batch"
            titleTypographyProps={{ style: { color: 'white' } }}
          ></CardHeader>
          <Grid
            container
            spacing={1}
            width="Inherit"
            sx={{ paddingY: 2, paddingX: 2 }}
          >
            <Grid item xs={12} md={4}>
              <TextField
                label="Collection"
                fullWidth
                select
                size="small"
                name="collectionId"
                onChange={handleChange}
                value={formData.collectionId}
                required
                disabled={isEdit}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              >
                {collectionList.map((option) => (
                  <MenuItem
                    key={option.collectionId}
                    value={option.collectionId}
                  >
                    {option.collectionName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Order Number"
                fullWidth
                size="small"
                name="orderNumber"
                onChange={handleChange}
                value={formData.orderNumber}
                required
                disabled={isEdit}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                size="small"
                type="date"
                label="Launch Date"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
                fullWidth
                // error={!!formErrors.launchDate}
                // helperText={formErrors.launchDate}
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    // set the color of the label when not shrinked
                    color: 'black'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                label="Remarks"
                fullWidth
                size="small"
                name="remarks"
                onChange={handleChange}
                value={formData.remarks}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
                InputLabelProps={{
                  sx: {
                    color: 'black'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Status"
                fullWidth
                size="small"
                name="status"
                onChange={handleChange}
                value={formData.status}
                required
                disabled={isEdit}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <ReuseableDataGrid
                initialRows={initialRows}
                iColumns={columns}
                disableDelete={true}
                setInitialData={setInitialData}
                setIsEdit={setIsEdit}
                checkboxSelection={true}
                onRowSelectionModelChange={handleRowSelectionModelChange}
                rowSelectionModel={rowSelectionModel}
              /> */}
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={initialRows}
                  columns={columns}
                  apiRef={apiRef}
                  checkboxSelection
                  onRowSelectionModelChange={handleRowSelectionModelChange}
                  rowSelectionModel={rowSelectionModel}
                />
              </div>
            </Grid>

            <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
              <Button variant="contained" size="small" onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Grid>{' '}
        </Card>
        <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
        {/* <Card variant="outlined">
          <CardHeader
            className="css-4rfrnx-MuiCardHeader-root"
            avatar={<VisibilityOutlinedIcon />}
            title="View Categories"
            titleTypographyProps={{ style: { color: 'white' } }}
          ></CardHeader> */}
        <Grid
          container
          spacing={2}
          width="Inherit"
          // sx={{ paddingY: 2, paddingX: 2 }}
        ></Grid>
        {/* </Card> */}
      </Box>
    </MainCard>
  );
};

export default ProductionBatch;
