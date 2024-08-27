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
// import '../../assets/scss/style.scss';
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
  useGetProductionFabricDetailByProductionHeaderIdQuery
  // useGetStatusLookUpQuery
} from 'api/store/Apis/productionApi';
// import {useGetLookUpStatusQuery}
import {
  useGetLookUpListQuery,
  useGetStatusLookUpQuery
} from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';

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

const DyeingProductionOrder = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [vendor, setvendor] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    productionId: 0,
    productionHeaderId: '',
    collectionId: '',
    viewCollectionId: '',
    processType: '',
    vendor: '',
    fabric: '',
    AssignQty: '',
    status: '',
    startDate: new Date().toISOString(),
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId,
    ViewStatus: '',
    Location: '',
    shrinkage: '',
    wastage: ''
  });
  console.log('Form Data:', formData); // Debugging line

  const [value, setValue] = useState('1');
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('initialData', initialData);

  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

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
  ///////////////////////////////////////////////////////
  const { data: lookupData } = useGetLookUpListQuery();
  console.log(lookupData);
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      const filteredProcessType = data.productionProcessList.filter(
        (process) => process.lookUpName === 'Dyeing'
      );
      setvendor(data.vendorList);
      setProcessType(filteredProcessType);
    }
  }, [lookupData]);

  const [FabricList, setFabricList] = useState([]);
  const { data: fabricData, refetch: refetchfabricData } =
    useGetProductionFabricDetailByProductionHeaderIdQuery(
      formData.productionHeaderId,
      formData.status
    );
  console.log('Fabricdata', fabricData);
  useEffect(() => {
    if (fabricData) {
      setFabricList(
        fabricData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [fabricData]);

  useEffect(() => {
    if (formData.productionHeaderId && formData.status) {
      refetchfabricData();
    }
  }, [formData.productionHeaderId, formData.status, refetchfabricData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [name]: value });
  };

  //   const handleCellEdit = (params) => {
  //     const { id, field, value } = params;
  //     console.log('Editing cell:', params); // Debugging line

  //     if (field === 'AssignQty') {
  //       setInitialRows((prevRows) =>
  //         prevRows.map((row) =>
  //           row.id === id ? { ...row, AssignQty: value } : row
  //         )
  //       );
  //     }
  //   };

  //   const columns = [
  //     // {
  //     //   field: 'id',
  //     //   headerName: 'FabricId'
  //     // },
  //     {
  //       field: 'sr',
  //       headerName: 'Sr#',
  //       flex: 1
  //     },
  //     {
  //       field: 'collectionName',
  //       headerName: 'Collection Name',
  //       flex: 1
  //     },
  //     {
  //       field: 'fabricName',
  //       headerName: 'Fabric Name',
  //       flex: 1
  //     },
  //     {
  //       field: 'quantity',
  //       headerName: 'Quantity',
  //       flex: 1,
  //       renderCell: (params) => (
  //         <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
  //           {params.value}
  //         </Typography>
  //       )
  //     },
  //     {
  //       field: 'AssignQty',
  //       headerName: 'Assign Quantity',
  //       flex: 1,

  //       renderCell: (params) => (
  //         <SmallTextField
  //           variant="outlined"
  //           size="small"
  //           sx={{ mt: 1, width: 100 }} // Adjust width and height as needed
  //           value={params.row.AssignQty || ''}
  //           onChange={(event) =>
  //             handleCellEdit({
  //               id: params.id,
  //               field: 'AssignQty',
  //               value: event.target.value
  //             })
  //           }
  //           type="number"
  //           InputProps={{
  //             style: { fontSize: '0.875rem' } // Ensure the font size is suitable
  //           }}
  //         />
  //       )
  //     },
  //     {
  //       field: 'bxQuantity',
  //       headerName: 'BX Quantity',
  //       flex: 1
  //     },

  //     {
  //       field: 'uomName',
  //       headerName: 'UOM',
  //       flex: 1
  //     }
  //   ];

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);
    console.log('New Selection:', newSelection); // Debugging line
  };

  // const handleSave = async () => {
  //   try {
  //     const payload = {
  //       productionHeaderId: formData.productionId || 0,
  //       productionId: formData.productionId || 0,
  //       processTypeId: formData.processType || 0,
  //       status: formData.status,
  //       startDate: formData.startDate || new Date().toISOString(),
  //       createdOn: formData.createdOn || new Date().toISOString(),
  //       createdBy: formData.createdBy || 0,
  //       lastUpdatedOn: formData.lastUpdatedOn || new Date().toISOString(),
  //       lastUpdatedBy: formData.lastUpdatedBy || 0,
  //       productionDetails
  //     };
  //     if (response.data.success) {
  //       alert('Production process started successfully!');
  //       console.log('API saved successfully');
  //       console.log('Response:', response);
  //       refetchProductionProcessList();
  //       // Optionally, reset form and state here
  //     } else {
  //       console.error(response.data.message);
  //       alert('Failed to start production process');
  //     }
  //   } catch (error) {
  //     console.error('Error starting production process', error);
  //     alert('An error occurred while starting the production process');
  //   }
  // };

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
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Production Process > Dyeing"
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
            ></TextField>
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
              label="Issuance Date"
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

          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Expected Return Date"
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

          <Grid item xs={12} md={3}>
            <TextField
              label="Fabric"
              fullWidth
              select
              size="small"
              name="fabric"
              onChange={handleChange}
              value={formData.fabric}
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
              {FabricList.map((option) => (
                <MenuItem
                  key={option.productionHeaderDetId}
                  value={option.fabricId}
                >
                  {option.fabricName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Vendor"
              name="vendor"
              value={formData.vendor}
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
              {vendor.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={1.5}>
            <TextField
              fullWidth
              select
              label="Shrinkage "
              name="shrinkage"
              value={formData.shrinkage}
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
            ></TextField>
          </Grid>

          <Grid item xs={12} md={1.5}>
            <TextField
              fullWidth
              select
              label="Wastage "
              name="wastage"
              value={formData.wastage}
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
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Location "
              name="Location"
              value={formData.Location}
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
            ></TextField>
          </Grid>

          <Grid item xs={3} textAlign="right" sx={{ mt: 1 }}>
            <Button
              variant="contained"
              size="small"
              //   onClick={handleSave}
              color="success"
            >
              Start Process
            </Button>
          </Grid>
          {/* <Grid item xs={12} mt={1}>
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
          </Grid> */}
        </Grid>
      </Card>
    </>
  );
};
export default DyeingProductionOrder;
