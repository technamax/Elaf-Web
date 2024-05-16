/* eslint-disable prettier/prettier */
// material-ui
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider
} from '@mui/material';
// import { useState } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import EditAbleDataGrid from 'components/EditAbleDataGrid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';

// ==============================|| SAMPLE PAGE ||============================== //

const Fabrication = () => {
  const initialRows = [
    {
      id: 1,
      name: 'jhon',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    },
    {
      id: 2,
      name: 'jhon',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    },
    {
      id: 3,
      name: 'jhon',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    },
    {
      id: 4,
      name: 'jhon',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    },
    {
      id: 5,
      name: 'jhon',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    }
  ];

  const columns = [
    { field: 'name', headerName: 'Name', editable: true, flex: 2 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      flex: 1,
      editable: true
    },
    {
      field: 'role',
      headerName: 'Department',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development']
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
    <MainCard>
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Fabrication
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small">
              Save
            </Button>
          </Grid>
          <Grid item sm={6}>
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
          <Grid item sm={6}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Fabric "
              defaultValue="EUR"
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
          <Grid item sm={2}>
            <TextField label="Po PCs " fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Quantity " fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Uom" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Rate/Uom" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Total(Qty*Rate)" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Unit Price Total/PoPcs" fullWidth size="small" />
          </Grid>
          <Divider></Divider>
          <Grid item sm={12} paddingTop={1}>
            <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default Fabrication;
