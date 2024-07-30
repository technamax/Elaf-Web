import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  FormControl,
  CircularProgress,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import '../../assets/scss/style.scss';
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';

import { useGetMainMenuListQuery } from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AddTermsAndConditions from 'components/Production/TermsAndConditions/AddTermsAndConditions';
import AssignTermsAndConditions from 'components/Production/TermsAndConditions/AssignTermsAndConditions';
// import SubMenu from './SubMenu';
import { useGetCollectionListFromPlanningHeaderQuery } from 'api/store/Apis/productionApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const ProductionProcess = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    productionId: 0,
    collectionId: '',
    processType: '',
    AssignQty: '',
    startDate: new Date().toISOString(),
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  console.log('Form Data:', formData); // Debugging line

  const [value, setValue] = useState('1');
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      // categoryId: initialData?.categoryId || 0,
      // description: initialData?.description || '',
      // enabled: initialData?.enabled || '',
      // appId: initialData?.appId || user.appId,
      // createdOn: initialData?.createdOn || new Date().toISOString(),
      // createdBy: initialData?.createdBy || user.empId,
      // lastUpdatedOn: new Date().toISOString(),
      // lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  // const { data: mainMenuData, refetch } = useGetMainMenuListQuery();

  // useEffect(() => {
  //   if (mainMenuData) {
  //     setInitialRows(
  //       mainMenuData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [mainMenuData, refetch]);

  const { data: lookupData } = useGetLookUpListQuery();
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      setProcessType(data.productionProcessList);
    }
  }, [lookupData]);
  const { data: collectionData, refetch } =
    useGetCollectionListFromPlanningHeaderQuery();

  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await axios.get(
          'https://gecxc.com:449/api/Production/GetProductionBatchForProcessing?appId=1'
        );
        if (response.data.success) {
          setCollectionList(
            response.data.result.map((row, index) => ({
              id: index + 1,
              ...row
            }))
          );
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('Failed to fetch collection data', error);
      }
    };

    fetchCollectionData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );

      setFormData({
        ...formData,
        collectionId: value,
        productionId: selectedCollection ? selectedCollection.productionId : '',
        status: selectedCollection ? selectedCollection.status : ''
      });
      GetFabricForProductionByCollectionId(1, value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const GetFabricForProductionByCollectionId = async (appId, collectionId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gecxc.com:449/api/Production/GetFabricForProductionByCollectionId?appId=${appId}&collectionid=${collectionId}`
      );
      //in 449 url this api doesnt exist
      if (response.data.success) {
        // Add id property to each row
        const rowsWithId = response.data.result.map((row, index) => ({
          ...row,
          id: row.fabricId,
          sr: index + 1 // Add serial number
        }));
        setInitialRows(rowsWithId);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Failed to fetch fabric for production data', error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(initialRows);

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    if (field === 'AssignQty') {
      setInitialRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, AssignQty: value } : row
        )
      );
    }
  };
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'FabricId'
    // },
    {
      field: 'sr',
      headerName: 'Sr#'
    },
    {
      field: 'collectionName',
      headerName: 'Collection Name'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric Name'
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'AssignQty',
      headerName: 'Assign Quantity',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          sx={{ mt: 1, width: 100 }} // Adjust width and height as needed
          value={params.row.AssignQty || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'AssignQty',
              value: event.target.value
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'bxQuantity',
      headerName: 'BX Quantity'
    },

    {
      field: 'uomName',
      headerName: 'UOM'
    }
  ];
  console.log('Selected Rows:', selectedRows); // Debugging line

  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);
    console.log('New Selection:', newSelection); // Debugging line
  };

  const handleSave = async () => {
    try {
      console.log('FormData:', formData); // Debugging line
      console.log('Selected Rows:', selectedRows); // Debugging line
      console.log('Initial Rows:', initialRows); // Debugging line

      const selectedRowsData = initialRows.filter((row) =>
        selectedRows.includes(row.id)
      );

      const productionDetails = selectedRowsData.map((row) => ({
        productionHeaderDetId: 0,
        productionHeaderId: formData.productionId || 0,
        fabricId: row.fabricId,
        totalQuantity: row.quantity || 0,
        assignQty: row.AssignQty || '0',
        status: formData.status || 'Draft',
        uomId: row.uomId || 0,
        createdBy: formData.createdBy || 0,
        createdOn: formData.createdOn || new Date().toISOString(),
        lastUpdatedBy: formData.lastUpdatedBy || 0,
        lastUpdatedOn: formData.lastUpdatedOn || new Date().toISOString(),
        rate: row.rate || 0,
        tax: row.tax || 0,
        totalBeforeTax: row.totalBeforeTax || 0,
        totalAfterTax: row.totalAfterTax || 0
      }));

      const payload = {
        productionHeaderId: formData.productionId || 0,
        productionId: formData.productionId || 0,
        processTypeId: formData.processType || 0,
        status: 'Ready',
        startDate: formData.startDate || new Date().toISOString(),
        createdOn: formData.createdOn || new Date().toISOString(),
        createdBy: formData.createdBy || 0,
        lastUpdatedOn: formData.lastUpdatedOn || new Date().toISOString(),
        lastUpdatedBy: formData.lastUpdatedBy || 0,
        productionDetails
      };

      console.log('Payload:', payload); // Debugging line

      const response = await axios.post(
        'https://gecxc.com:449/api/Production/StartProductionProcess',
        payload
      );

      if (response.data.success) {
        alert('Production process started successfully!');
        console.log('API saved successfully');
        console.log('Response:', response);
        // Optionally, reset form and state here
      } else {
        console.error(response.data.message);
        alert('Failed to start production process');
      }
    } catch (error) {
      console.error('Error starting production process', error);
      alert('An error occurred while starting the production process');
    }
  };
  const apiRef = useGridApiRef();

  const handleStateChange = (params) => {
    if (apiRef.current && apiRef.current.autosizeColumns) {
      apiRef.current.autosizeColumns({
        // columns: autoSizeColumns,
        includeOutliers: true,
        includeHeaders: true
      });
    }
  };

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
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChangeTabs}
              aria-label="lab API tabs example"
            >
              <Tab
                icon={<CategoryOutlinedIcon />}
                label="Production Process"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AddCircleOutlineOutlinedIcon />}
                label="Issuance/Po"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Issuance Details/OGP"
                value="3"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                // avatar={
                // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                // }
                title="Production Process "
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={1}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={3}>
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
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                        // fontWeight: 'bold' // Use fontWeight to set the font to bold
                      }
                    }}
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

                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Select Process"
                    name="processType"
                    value={formData.processType}
                    onChange={handleChange}
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                    // error={!!formErrors.brandId}
                    // helperText={formErrors.brandId}
                  >
                    {processType.map((option) => (
                      <MenuItem key={option.lookUpId} value={option.lookUpId}>
                        {option.lookUpName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} md={3}>
                  <TextField
                    size="small"
                    type="date"
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    fullWidth
                    // error={!!formErrors.planningDate}
                    // helperText={formErrors.planningDate}
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={3} textAlign="right" sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleSave}
                    color="success"
                  >
                    Start Process
                  </Button>
                </Grid>
                <Grid item xs={12} mt={1}>
                  <DataGrid
                    rows={initialRows}
                    checkboxSelection
                    columns={columns}
                    disableDelete={true}
                    getRowId={(row) => row.id}
                    disableRowSelectionOnClick
                    autosizeOnMount
                    apiRef={apiRef}
                    onStateChange={handleStateChange}
                    onRowSelectionModelChange={(newSelectionModel) =>
                      handleRowSelection(newSelectionModel)
                    }
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
                </Grid>
              </Grid>
            </Card>
            <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                avatar={<VisibilityOutlinedIcon />}
                title="View Production Process"
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={2}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={3}>
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
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                        // fontWeight: 'bold' // Use fontWeight to set the font to bold
                      }
                    }}
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
                <Grid item xs={12} mt={2}>
                  {/* <DataGrid
                    rows={initialRows}
                    checkboxSelection
                    columns={columns}
                    disableDelete={true}
                    getRowId={(row) => row.id}
                    disableRowSelectionOnClick
                    autosizeOnMount
                    apiRef={apiRef}
                    onStateChange={handleStateChange}
                    onRowSelectionModelChange={(newSelectionModel) =>
                      handleRowSelection(newSelectionModel)
                    }
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
                  /> */}
                </Grid>
              </Grid>
            </Card>
          </TabPanel>
          <TabPanel value="2">
            <AddTermsAndConditions />
          </TabPanel>
          <TabPanel value="3">
            <AssignTermsAndConditions />
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default ProductionProcess;
