import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import {
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Grid,
  TextField,
  Box,
  Tab
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { SnackbarProvider, useSnackbar } from 'notistack';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { width } from '@mui/system';
import { WidthFull } from '@mui/icons-material';
// import { GetCollectionList } from 'api/apis';

// ==============================|| SAMPLE PAGE ||============================== //

const NewCollection = () => {
  const { data, error, isLoading, refetch } = useGetCollectionListQuery();
  const { data: lookupData } = useGetLookUpListQuery();
  const [brands, setBrands] = useState([]);
  const [seasons, setSeasons] = useState([]);

  const [formData, setFormData] = useState({
    collectionName: '',
    brandId: '',
    seasonId: '',
    volume: '',
    planningDate: '',
    launchDate: '',
    isReapetCollection: '',
    noOfDesigns: '',
    noOfColors: '',
    poPcs: '',
    appId: 1, // change after login api fetchdata
    createdBy: 0,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: 0,
    lastUpdatedOn: new Date().toISOString()
  });
  const [totalPcs, setTotalPcs] = useState('');
  console.log('formData', formData);
  console.log('lookupData', lookupData);

  ///////////////tabs
  const [value, setValue] = useState('1');
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setBrands(data.brandList);
      setSeasons(data.seasonList);
    }
    refetch();
  }, [lookupData]);
  console.log('brands', brands);
  console.log('seasons', seasons);

  useEffect(() => {
    setTotalPcs(formData.noOfColors * formData.poPcs);
  }, [formData.noOfColors, formData.poPcs]);

  // const fetchData = useCallback(async () => {
  //   try {
  //     const data = await GetCollectionList();

  //     const rowsWithId = data.map((row, index) => ({
  //       ...row,
  //       id: index + 1,
  //       planningDate: new Date(row.planningDate),
  //       launchDate: new Date(row.launchDate)
  //     }));

  //     setCollectionList(rowsWithId);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }, []);

  useEffect(() => {
    // fetchData();
    if (data) {
      const rowsWithId = data.result.map((row, index) => ({
        ...row,
        id: index + 1,
        planningDate: new Date(row.planningDate),
        launchDate: new Date(row.launchDate)
      }));
      setCollectionList(rowsWithId);
    }
    refetch();
  }, [data]);

  const initialRows = collectionList;

  const columns = [
    {
      field: 'collectionName',
      headerName: 'Collection',
      editable: true,
      flex: 2
    },
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
      valueGetter: (params) => (params ? new Date(params) : null),
      valueFormatter: (params) => {
        const date = params;
        if (!date) return '';
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'launchDate',
      headerName: 'Launch Date',
      type: 'date',
      flex: 1,
      editable: true,
      valueGetter: (params) => (params ? new Date(params) : null),
      valueFormatter: (params) => {
        const date = params;
        if (!date) return '';
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'isReapetCollection',
      headerName: 'Repeat',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['No', 'Yes']
    },
    {
      field: 'noOfColors',
      headerName: 'No. Of Colors',
      editable: true,
      flex: 1
    },
    {
      field: 'noOfDesigns',
      headerName: 'No Of Designs',
      editable: true,
      flex: 1
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
      const response = await axios.post(
        'https://gecxc.com:4041/API/CollectionRegistration/SaveCollection',
        formData
      );
      enqueueSnackbar('Collection saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      console.log('Form data saved:', response.data);
      setFormData({
        collectionName: '',
        brandId: '',
        seasonId: '',
        volume: '',
        planningDate: '',
        launchDate: '',
        isReapetCollection: '',
        noOfDesigns: '',
        noOfColors: '',
        poPcs: ''
      });
      // fetchData();
      refetch();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const deleteApi =
    'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  const editAPi =
    'https://gecxc.com:4041/API/CollectionRegistration/SaveCollection';

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
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChangeTabs}
              aria-label="lab API tabs example"
            >
              <Tab
                icon={<AddCircleIcon />}
                label="Add Collection"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<SearchIcon />}
                label="Search Collection"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <FormControl>
              <Grid container spacing={2} width="inherit">
                <Grid item xs={9} md={9}>
                  <Typography variant="h3" gutterBottom>
                    Create New Collection
                  </Typography>
                </Grid>
                <Grid item xs={3} textAlign="right">
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>

                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Season Name"
                    name="seasonId"
                    value={formData.seasonId}
                    onChange={handleChange}
                    size="small"
                  >
                    {seasons.map((option) => (
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
                    label="Brand Name"
                    name="brandId"
                    value={formData.brandId}
                    onChange={handleChange}
                    size="small"
                  >
                    {brands.map((option) => (
                      <MenuItem key={option.lookUpId} value={option.lookUpId}>
                        {option.lookUpName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Collection Name"
                    fullWidth
                    size="small"
                    name="collectionName"
                    onChange={handleChange}
                    value={formData.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    size="small"
                  >
                    {volume.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
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

                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="Repeat Collection?"
                    name="isReapetCollection"
                    value={formData.isReapetCollection}
                    onChange={handleChange}
                    size="small"
                  >
                    {enabled.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="No. of Colors/Articles"
                    fullWidth
                    size="small"
                    name="noOfColors"
                    onChange={handleChange}
                    value={formData.noOfColors}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="No. of Designs"
                    fullWidth
                    size="small"
                    name="noOfDesigns"
                    onChange={handleChange}
                    value={formData.noOfDesigns}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Po. Pieces"
                    fullWidth
                    size="small"
                    name="poPcs"
                    onChange={handleChange}
                    value={formData.poPcs}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Total Pieces"
                    fullWidth
                    size="small"
                    name="totalPcs"
                    // onChange={handleChange}
                    value={totalPcs}
                    disabled
                  />
                </Grid>
                <Grid item sm={12}>
                  <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
                </Grid>
              </Grid>
            </FormControl>
            <Grid container spacing={2} width="inherit" paddingTop={2}>
              <Grid item xs={12}>
                <EditAbleDataGrid
                  initialRows={initialRows}
                  ncolumns={columns}
                  // fetchData={fetchData}
                  formData={formData}
                  deleteApi={deleteApi}
                  deleteBy="collectionId"
                  editAPi={editAPi}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2} width="inherit">
              <Grid item xs={9} md={9}>
                <Typography variant="h3" gutterBottom>
                  Search Collection
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Search
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  type="date"
                  label="Date From"
                  name="planningDate"
                  value={formData.planningDate}
                  onChange={handleChange}
                  fullWidth
                  focused
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  type="date"
                  label="Date to"
                  name="launchDate"
                  value={formData.launchDate}
                  onChange={handleChange}
                  fullWidth
                  focused
                />
              </Grid>

              <Grid item sm={12}>
                <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} width="inherit" paddingTop={2}>
              <Grid item xs={12}>
                <EditAbleDataGrid
                  initialRows={initialRows}
                  ncolumns={columns}
                  formData={formData}
                  // deleteApi={deleteApi}
                  // deleteBy="collectionId"
                  // editAPi={editAPi}
                  disableAddRecord={true}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default NewCollection;
