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
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';

import {
  useGetProductionProcessListQuery,
  useGetFabricForProductionByCollectionIdQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useUser } from 'context/User';

const Issuance = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    productionId: 0,
    collectionId: '',
    processType: '',
    fabricId: '',
    shrinkage: '',
    wastage: '',
    requiredStock: '',
    avaliableStock: '',
    // AssignQty: '',
    vendorName: '',
    issuanceDate: new Date().toISOString(),
    returnDate: new Date().toISOString(),
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  console.log('Form Data:', formData);

  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: lookupData } = useGetLookUpListQuery();
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      setProcessType(data.productionProcessList);
      setVendor(data.vendorList);
    }
  }, [lookupData]);
  const [fabric, setFabric] = useState([]);

  const { data: fabricData } = useGetFabricForProductionByCollectionIdQuery(
    formData.collectionId,
    {
      skip: !formData.collectionId // Skip the query if no collection is selected
    }
  );
  useEffect(() => {
    if (fabricData) {
      const data = fabricData.result;

      setFabric(data);
    }
  }, [fabricData]);

  const { data: ProductionProcessList } = useGetProductionProcessListQuery();
  const [productioncollectionList, setProductionCollectionList] = useState([]);
  useEffect(() => {
    if (ProductionProcessList) {
      const data = ProductionProcessList.result[0];

      setProductionCollectionList(
        ProductionProcessList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [ProductionProcessList]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      setFormData({
        ...formData,
        collectionId: value
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'FabricId'
    // },
    {
      field: 'sr',
      headerName: 'Sr#',
      flex: 1
    },
    {
      field: 'designName',
      headerName: 'Design Name',
      flex: 1
    },
    {
      field: 'color',
      headerName: 'Color',
      flex: 1
    },
    // {
    //   field: 'plannedQty',
    //   headerName: 'Planned Quantity',
    //   flex: 1
    // },
    {
      field: 'quantity',
      headerName: 'Planned Quantity',
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: 'AssignQty',
      headerName: 'Assign Quantity',
      flex: 1,

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
      field: 'rate',
      headerName: 'Rate ',
      flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          sx={{ mt: 1, width: 100 }} // Adjust width and height as needed
          value={params.row.rate || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'rate',
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
      field: 'AssignQty',
      headerName: 'Assign Quantity',
      flex: 1,

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
      headerName: 'BX Quantity',
      flex: 1
    },

    {
      field: 'uomName',
      headerName: 'UOM',
      flex: 1
    }
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        avatar={<VisibilityOutlinedIcon />}
        title="Issuance"
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
            {productioncollectionList.map((option) => (
              <MenuItem key={option.id} value={option.collectionId}>
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
            fullWidth
            select
            label="Select Vendor"
            name="vendorName"
            value={formData.vendorName}
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
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Select Fabric"
            name="fabricId"
            value={formData.fabricId}
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
            {fabric.map((option) => (
              <MenuItem key={option.fabricId} value={option.fabricId}>
                {option.fabricName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            type="date"
            label="Issuance Date"
            name="issuanceDate"
            value={formData.issuanceDate}
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
            label="Return Date"
            name="returnDate"
            value={formData.returnDate}
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
            label="Shrinkage"
            name="shrinkage"
            value={formData.shrinkage}
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
            label="Wastage"
            name="wastage"
            value={formData.wastage}
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
            label="Required Stock"
            name="requiredStock"
            value={formData.requiredStock}
            onChange={handleChange}
            fullWidth
            disabled
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
            label="Avaliable Stock"
            name="avaliableStock"
            value={formData.avaliableStock}
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
      </Grid>
    </Card>
  );
};

export default Issuance;
