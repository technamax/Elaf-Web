/* eslint-disable prettier/prettier */
// material-ui
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  colors
} from '@mui/material';
import { useState } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import { color } from 'framer-motion';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';

// ==============================|| SAMPLE PAGE ||============================== //

const Dyeing = () => {
  const initialRows = [
    {
      id: 1,
      name: 'Dyeing',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    }
  ];
  const [formData, setFormData] = useState({
    DPId: '',
    DesignId: '',
    BatchNo: '',
    FabricId: '',
    ColorId: '',
    VendorId: '',
    ProcessType: '',
    AvailableQty: '',
    Shrinkage: '',
    Wastage: '',
    OutputQty: '',
    UOM: '',
    RatePerUOM: '',
    UnitRatePerPo: '',
    TotalExclGst: '',
    GST: '',
    GSTAmount: '',
    TotalIncludingGst: '',
    // appId: 1,
    createdBy: 0
    // createdOn: new Date().toISOString(),
    // lastUpdatedBy: 0,
    // lastUpdatedOn: new Date().toISOString()
  });
  const columns = [
    { field: 'name', headerName: 'Order Number', editable: true, flex: 2 },
    {
      field: 'DesignId',
      headerName: 'Design',
      type: 'number',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'FabricId',
      headerName: 'Fabric',
      type: 'date',
      flex: 1,
      editable: true
    },
    {
      field: 'ProcessType',
      headerName: 'Process',
      flex: 1,
      editable: true
    },
    {
      field: 'ColorId',
      headerName: 'Color',
      flex: 1,
      editable: true
    },
    {
      field: 'role',
      headerName: 'Po Pcs',
      flex: 1,
      editable: true
    },
    {
      field: 'AvailableQty',
      headerName: 'Qty',
      flex: 1,
      editable: true
    },
    {
      field: 'UOM',
      headerName: 'UOM',
      flex: 1,
      editable: true
    },
    {
      field: 'RatePerUOM',
      headerName: 'Rate',
      flex: 1,
      editable: true
    },
    {
      field: 'UnitRatePerPo',
      headerName: 'Unit Price',
      flex: 1,
      editable: true
    },
    {
      field: 'TotalIncludingGst',
      headerName: 'Total W/ GST',
      flex: 1,
      editable: true
    }
  ];

  // const handleSave = () => {
  // };
  const design = [
    {
      value: 'Vol',
      label: 'D 1'
    },
    {
      value: 'Vol',
      label: 'D 2'
    },
    {
      value: 'Vol',
      label: 'D 3'
    }
  ];
  const fQuality = [
    {
      value: '1',
      label: 'Red'
    },
    { value: '2', label: 'Blue' },
    {
      value: '3',
      label: 'Green'
    }
  ];
  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      }}
    >
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item xs={9} md={9}>
            <Typography variant="h3" gutterBottom>
              Dyeing/Printing
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} textAlign="right">
            <Button variant="contained" size="small" color="error">
              Save
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select Design"
              defaultValue=""
              //   helperText="Please Select Collection"
              size="small"
            >
              {design.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Fabric "
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Color "
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Vendor Name "
              //   defaultValue="EUR"
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Process Type "
              //   defaultValue="EUR"
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Po PC's" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="UOM" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Qty" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Shrinkage%" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Wastage%" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Output Qty" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Rate/UOM" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="GST" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Total Incl GST" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="GST Amount" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Total:Including Gst" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Unit P: T/Po PC's" fullWidth size="small" />
          </Grid>
          <Divider color="#cc8587" sx={{ height: 2, width: '100%', mt: 2 }} />
          <Grid item xs={12} md={12} paddingTop={1}>
            <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default Dyeing;
