/* eslint-disable prettier/prettier */
// material-ui
import { Grid, TextField, Button, MenuItem, FormControl, Typography, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import EditAbleDataGrid from 'components/EditAbleDataGrid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';
import { GetCollectionList } from 'api/apis';
// ==============================|| SAMPLE PAGE ||============================== //

const NewCollection = () => {
  const [collectionList, setCollectionList] = useState([]);

  const fetchData = async () => {
    try {
      const data = await GetCollectionList();

      const rowsWithId = data.map((row, index) => ({
        ...row,
        id: index + 1,
        planningDate: new Date(row.planningDate),
        launchDate: new Date(row.launchDate)
      }));

      setCollectionList(rowsWithId);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    // setLoading(false);
  };

  useEffect(() => {
    // setLoading(true);
    fetchData();
  }, []);
  console.log(collectionList);
  const initialRows = collectionList;
  console.log(initialRows);
  //   {
  //     id: 1,
  //     name: 'jhon',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   },
  //   {
  //     id: 2,
  //     name: 'jhon',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   },
  //   {
  //     id: 3,
  //     name: 'jhon',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   },
  //   {
  //     id: 4,
  //     name: 'jhon',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   },
  //   {
  //     id: 5,
  //     name: 'jhon',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   }
  // ];

  const columns = [
    { field: 'collectionName', headerName: 'Collection', editable: true, flex: 2 },
    // {
    //   field: 'volume',
    //   headerName: 'Volume',
    //   type: 'number',
    //   flex: 1,
    //   align: 'left',
    //   headerAlign: 'left',
    //   editable: true
    // },
    {
      field: 'volume',
      headerName: 'volume',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Volume 1', 'Volume 2', 'Volume 3', 'Volume4', 'Volume 5']
    },
    {
      field: 'planningDate',
      headerName: 'Planning Date',
      type: 'date',
      flex: 1,
      editable: true
      // valueGetter: (params) => {
      //   const date = new Date(params);
      //   return date.toLocaleDateString('en-GB', {
      //     day: 'numeric',
      //     month: 'short',
      //     year: '2-digit'
      //   });
      // }
    },
    {
      field: 'launchDate',
      headerName: 'Launch Date',
      type: 'date',
      flex: 1,
      editable: true
      // valueGetter: (params) => {
      //   const date = new Date(params);
      //   return date.toLocaleDateString('en-GB', {
      //     day: 'numeric',
      //     month: 'short',
      //     year: '2-digit'
      //   });
      // }
    },
    {
      field: 'isReapetCollection',
      headerName: 'repeat',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['No', 'Yes']
    }
  ];

  // const handleSave = () => {
  // };
  const volume = [
    {
      value: 'Volume 1',
      label: 'Volume 1'
    },
    {
      value: 'Volume 2',
      label: 'Volume 2'
    },
    {
      value: 'Volume 3',
      label: 'Volume 3'
    },
    {
      value: 'Volume 4',
      label: 'Volume 4'
    },
    {
      value: 'Volume 5',
      label: 'Volume 5'
    }
  ];
  const enabled = [
    {
      value: 'Y',
      label: 'Yes'
    },
    { value: 'N', label: 'No' }
  ];
  return (
    <MainCard>
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Create New Collection
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small">
              Save
            </Button>
          </Grid>
          <Grid item sm={3}>
            <TextField label="Collection Order #" fullWidth size="small" />
          </Grid>
          <Grid item sm={9}>
            <TextField label="Collection Name" fullWidth size="small" />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Volume"
              defaultValue="Vol"
              helperText="Please select volume"
              size="small"
            >
              {volume.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={3}>
            <TextField size="small" type="date" label="Planning Date" name="planningDate" fullWidth focused />
          </Grid>
          <Grid item sm={3}>
            <TextField size="small" type="date" label="Launch Date" name="launchDate" fullWidth focused />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Repeat Collection?"
              defaultValue=""
              helperText="Please select"
              size="small"
            >
              {enabled.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Divider />

          <Grid item sm={12} paddingTop={1}>
            <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default NewCollection;
