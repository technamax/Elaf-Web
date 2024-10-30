import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  ButtonGroup,
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
import FabricReceiving from 'components/Production/Issuance/FabricReceiving';
// import SubMenu from './SubMenu';
import {
  useGetCollectionListFromPlanningHeaderQuery,
  useGetProductionProcessListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetProductionProcessByProductionIdQuery,
  useGetProductionBatchlistQuery
  // useGetStatusLookUpQuery
} from 'api/store/Apis/productionApi';
// import {useGetLookUpStatusQuery}
import {
  useGetLookUpListQuery,
  useGetStatusLookUpQuery
} from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';

//////
import * as React from 'react';
import { useUser } from 'context/User';
import IssuanceView from 'components/Production/Issuance/IssuanceView';

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

const FabricationSelectionIssuance = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const apiRef = useGridApiRef();

  const [formData, setFormData] = useState({
    productionId: 0,
    collectionId: '',
    // viewCollectionId: '',
    processTypeId: '',
    // AssignQty: '',
    status: '',
    startDate: new Date().toISOString().slice(0, 10),
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
    // ViewStatus: ''
  });
  console.log('Form Data:', formData); // Debugging line

  const [value, setValue] = useState('1');
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('initialData', initialData);
  // useEffect(() => {
  //   setFormData({
  //         });
  // }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  // const [selectedRows, setSelectedRows] = useState([]);

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
  const { data: statusData } = useGetStatusLookUpQuery();
  const [statusLookup, setStatusLookup] = useState([]);
  useEffect(() => {
    if (statusData) {
      // Ensure statusData.result[0] is an array
      const data = Array.isArray(statusData.result[0])
        ? statusData.result[0]
        : statusData.result; // Assuming statusData.result itself is an array

      setStatusLookup(data);
    }
  }, [statusData]);

  const { data: lookupData } = useGetLookUpListQuery();
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      const filteredProcessType = data.productionProcessList.filter(
        (process) => process.lookUpName === 'Fabrication'
      );

      setProcessType(filteredProcessType);
    }
  }, [lookupData]);
  useEffect(() => {
    if (processType[0]) {
      setFormData({
        ...formData,
        processTypeId: processType[0].lookUpId
      });
      setAccordionExpanded(true);
    }
  }, [processType]);
  // const { data: collectionData, refetch } =
  //   useGetCollectionListFromPlanningHeaderQuery();

  const [collectionList, setCollectionList] = useState([]);
  const {
    data: ProductionProceccBatchList,
    refetch: refetchProductionProceccBatchList
  } = useGetProductionBatchlistQuery();
  // const {
  //   data: ProductionProceccBatchList,
  //   refetch: refetchProductionProceccBatchList
  // } = useGetProductionBatchForProcessingQuery();

  useEffect(() => {
    if (ProductionProceccBatchList) {
      const data = ProductionProceccBatchList.result[0];

      setCollectionList(
        ProductionProceccBatchList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      // if (data && data.productionId) {
      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     productionId: data.productionId
      //   }));
      // }
    }
  }, [ProductionProceccBatchList, refetchProductionProceccBatchList]);
  //For View Collection dropdown
  const { data: ProductionProcessList, refetch: refetchProductionProcessList } =
    useGetProductionProcessListQuery();
  // const [productioncollectionList, setProductionCollectionList] = useState([]);
  // useEffect(() => {
  //   if (ProductionProcessList) {
  //     const data = ProductionProcessList.result[0];

  //     setProductionCollectionList(
  //       ProductionProcessList.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [ProductionProcessList, refetchProductionProcessList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.productionId === parseInt(value)
      );

      setFormData({
        ...formData,
        productionId: value,
        collectionId: selectedCollection ? selectedCollection.collectionId : '',
        status: selectedCollection ? selectedCollection.status : ''
      });
      // GetFabricForProductionByCollectionId(1, selectedCollection.productionId);
      // } else if (name === 'viewCollectionId') {
      //   const selectedViewCollection = productioncollectionList.find(
      //     (collection) => collection.collectionId === parseInt(value)
      //   );

      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     viewCollectionId: value,
      //     ViewStatus: selectedViewCollection ? selectedViewCollection.status : '',
      //     productionId: selectedViewCollection
      //       ? selectedViewCollection.productionId
      //       : ''
      //   }));

      //   // Trigger refetch after setting the form data, ensuring it has the latest values
      //   refetchViewData();
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const GetFabricForProductionByCollectionId = async (appId, productionId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/Production/GetFabricForProductionByCollectionId?appId=${appId}&productionId=${productionId}`
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
  useEffect(() => {
    GetFabricForProductionByCollectionId(1, formData.productionId);
  }, [formData.productionId]);
  //View Datagrid
  const [initialRowsView, setInitialRowsView] = useState([]);

  const { data: viewData, refetch: refetchViewData } =
    useGetProductionProcessByProductionIdQuery(
      {
        productionId: formData.productionId,
        // ViewStatus: formData.ViewStatus,
        status: formData.ViewStatus // Ensure the correct key is used here
      },
      {
        skip: !formData.productionId || !formData.ViewStatus
      }
    );

  useEffect(() => {
    if (viewData) {
      setInitialRowsView(
        viewData.result.map((row, index) => ({
          ...row,
          id: row.productionHeaderId,
          sr: index + 1 // Add serial number
        }))
      );
    }
  }, [viewData, refetchViewData]);
  console.log(initialRowsView);

  // const handleCellEdit = (params) => {
  //   const { id, field, value } = params;
  //   console.log('Editing cell:', params); // Debugging line

  //   if (field === 'AssignQty') {
  //     setInitialRows((prevRows) =>
  //       prevRows.map((row) =>
  //         row.id === id ? { ...row, AssignQty: value } : row
  //       )
  //     );
  //   }
  // };
  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setInitialRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const updatedRow = {
            ...row,
            [field]: value,
            // quantity: row.itpQuantity,
            // productName: row.fabricName,
            productionHeaderId: 0,
            productionHeaderDetId: 0,
            // expectedQty: Number(expectedQty), // Add expectedQty to the row
            // shortageQty: Number(shortageQty),
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          return updatedRow;
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setFormData({
      ...formData,
      productionDetails: initialRows
    });
  }, [initialRows, setInitialRows]);
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'FabricId'
    // },
    {
      field: 'sr',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'collectionName',
      headerName: 'Collection Name'
      // flex: 2
    },
    {
      field: 'fabricName',
      headerName: 'Fabric Name'
      // flex: 2
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      // flex: 1,
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'assignQty',
      headerName: 'Assign Quantity',
      // flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          sx={{ mt: 1, width: 50 }} // Adjust width and height as needed
          value={params.row.assignQty || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'assignQty',
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
    // {
    //   field: 'bxQuantity',
    //   headerName: 'BX Quantity',
    //   // flex: 1,
    //   valueGetter: (params) => {
    //     return params.toLocaleString();
    //   }
    // },

    {
      field: 'uomName',
      headerName: 'UOM'
      // flex: 1
    }
  ];

  // const fetchData = () => {
  //   apiRef.current.autosizeColumns({
  //     includeHeaders: true,
  //     includeOutliers: true
  //   });
  // };
  // React.useEffect(() => {
  //   fetchData();
  // });
  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  console.log('FormData:', formData); // Debugging line
  // console.log('Selected Rows:', selectedRows); // Debugging line
  console.log('Initial Rows:', initialRows); // Debugging line

  const handleSave = async () => {
    for (let detail of initialRows) {
      if (!detail.assignQty) {
        enqueueSnackbar('Error: Enter assign quantity!', {
          variant: 'error',
          autoHideDuration: 5000
        });
        return; // Stop further execution
      }
    }

    try {
      console.log('FormData:', formData); // Debugging line
      // console.log('Selected Rows:', selectedRows); // Debugging line
      console.log('Initial Rows:', initialRows); // Debugging line

      const response = await axios.post(
        'http://100.42.177.77:83/api/Production/StartProductionProcess',
        formData
      );

      if (response.data.success) {
        enqueueSnackbar('Production process started successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
        console.log('API saved successfully');
        console.log('Response:', response);
        setInitialRows([]);
        setFormData({
          productionId: 0,
          collectionId: '',
          // viewCollectionId: '',
          processTypeId: '',
          // AssignQty: '',
          status: '',
          startDate: new Date().toISOString(),
          appId: user.appId,
          createdOn: new Date().toISOString(),
          createdBy: user.empId,
          lastUpdatedOn: new Date().toISOString(),
          lastUpdatedBy: user.empId
        });
        // setSavedRowIds((prevSavedRowIds) => [
        //   ...prevSavedRowIds,
        //   ...selectedRows
        // ]);

        refetchProductionProcessList();
      } else {
        console.error(response.data.message);
        enqueueSnackbar('Failed to start production process', {
          variant: 'error',
          autoHideDuration: 5000
        });
      }
    } catch (error) {
      console.error('Error starting production process', error);
      enqueueSnackbar(
        'An error occurred while starting the production process',
        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
    }
  };

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
                label="Production Process Fabrication"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AddCircleOutlineOutlinedIcon />}
                label="Fabric Receving"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              {/* <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Issuance Details/OGP"
                value="3"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                // avatar={
                // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                // }
                title="Fabric Requisitions"
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
                    name="productionId"
                    onChange={handleChange}
                    value={formData.productionId}
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
                        key={option.productionId}
                        value={option.productionId}
                      >
                        {option.collectionName}-{option.productionId}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Select Process"
                    name="processTypeId"
                    value={formData.processTypeId}
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
                    label="Requisation Date"
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
                    Save
                  </Button>
                </Grid>
                <Grid item xs={12} mt={1}>
                  <DataGrid
                    rows={initialRows}
                    // rows={initialRows.filter(
                    //   (row) => !savedRowIds.includes(row.id)
                    // )}
                    // checkboxSelection
                    columns={columns}
                    // disableDelete={true}
                    getRowId={(row) => row.id}
                    disableRowSelectionOnClick
                    // autosizeOnMount
                    apiRef={apiRef}
                    onStateChange={handleStateChange}
                    // onRowSelectionModelChange={(newSelectionModel) =>
                    //   handleRowSelection(newSelectionModel)
                    // }
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
            <IssuanceView />
          </TabPanel>
          <TabPanel value="2">
            <FabricReceiving />
          </TabPanel>
          {/* <TabPanel value="3">
            <IssuanceView />
          </TabPanel> */}
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default FabricationSelectionIssuance;
