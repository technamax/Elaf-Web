/* eslint-disable prettier/prettier */
// material-ui
import { Grid, TextField, Button, MenuItem, FormControl, Typography, Divider } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import EditAbleDataGrid from 'components/EditAbleDataGrid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { GetCollectionList } from 'api/apis';

// ==============================|| SAMPLE PAGE ||============================== //

const NewCollection = () => {
  const [formData, setFormData] = useState({
    collectionName: '',
    volume: '',
    planningDate: '',
    launchDate: '',
    isReapetCollection: '',
    createdBy: 0,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: 0,
    lastUpdatedOn: new Date().toISOString()
  });
  console.log('formData', formData);
  const [collectionList, setCollectionList] = useState([]);

  const fetchData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const initialRows = collectionList;

  const columns = [
    { field: 'collectionName', headerName: 'Collection', editable: true, flex: 2 },
    {
      field: 'volume',
      headerName: 'Volume',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Volume 1', 'Volume 2', 'Volume 3', 'Volume 4', 'Volume 5']
    },
    {
      field: 'planningDate',
      headerName: 'Planning Date',
      type: 'date',
      flex: 1,
      editable: true,
      valueGetter: (params) => (params ? new Date(params) : null) // Ensure date is parsed correctly
    },
    {
      field: 'launchDate',
      headerName: 'Launch Date',
      type: 'date',
      flex: 1,
      editable: true,
      valueGetter: (params) => (params ? new Date(params) : null) // Ensure date is parsed correctly
    },
    {
      field: 'isReapetCollection',
      headerName: 'Repeat',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['No', 'Yes']
    }
  ];

  const volume = [
    { value: 'Volume 1', label: 'Volume 1' },
    { value: 'Volume 2', label: 'Volume 2' },
    { value: 'Volume 3', label: 'Volume 3' },
    { value: 'Volume 4', label: 'Volume 4' },
    { value: 'Volume 5', label: 'Volume 5' }
  ];

  const enabled = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post('https://gecxc.com:4041/API/CollectionRegistration/SaveCollection', formData);
      console.log('Form data saved:', response.data);
      setFormData({
        collectionName: '',
        volume: '',
        planningDate: '',
        launchDate: '',
        isReapetCollection: ''
      });
      fetchData();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const deleteApi = 'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  const editAPi = 'https://gecxc.com:4041/API/CollectionRegistration/SaveCollection';

  return (
    <MainCard>
      <FormControl>
        <Grid container spacing={2} width="inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Create New Collection
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item sm={8}>
            <TextField
              label="Collection Name"
              fullWidth
              size="small"
              name="collectionName"
              value={formData.collectionName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Volume"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
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
          <Grid item sm={4}>
            <TextField
              size="small"
              type="date"
              label="Planning Date"
              name="planningDate"
              value={formData.planningDate}
              onChange={handleChange}
              fullWidth
              focused
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              size="small"
              type="date"
              label="Launch Date"
              name="launchDate"
              value={formData.launchDate}
              onChange={handleChange}
              fullWidth
              focused
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Repeat Collection?"
              name="isReapetCollection"
              value={formData.isReapetCollection}
              onChange={handleChange}
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
            <EditAbleDataGrid
              initialRows={initialRows}
              ncolumns={columns}
              fetchData={fetchData}
              formData={formData}
              deleteApi={deleteApi}
              editAPi={editAPi}
            />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default NewCollection;
