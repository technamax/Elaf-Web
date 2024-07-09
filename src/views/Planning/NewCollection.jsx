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
  Tab,
  Card,
  CardHeader,
  IconButton
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
import { useUser } from 'context/User';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

// ==============================|| SAMPLE PAGE ||============================== //

const NewCollection = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);

  const { data, error, isLoading, refetch } = useGetCollectionListQuery();
  const { data: lookupData } = useGetLookUpListQuery();
  const [brands, setBrands] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [searchData, setSearchData] = useState({
    searchPlanningDateFrom: '',
    searchPlanningDateTo: ''
  });
  const [isDateRangeValid, setIsDateRangeValid] = useState(true);
  useEffect(() => {
    // Validate date range whenever searchData changes
    const { searchPlanningDateFrom, searchPlanningDateTo } = searchData;
    if (
      searchPlanningDateFrom &&
      searchPlanningDateTo &&
      new Date(searchPlanningDateTo) < new Date(searchPlanningDateFrom)
    ) {
      setIsDateRangeValid(false);
    } else {
      setIsDateRangeValid(true);
    }
  }, [searchData]);

  const [formData, setFormData] = useState({
    collectionId: 0,
    collectionName: '',
    brandId: '',
    seasonId: '',
    volume: '',
    planningDate: '',
    launchDate: '',
    isRepeatCollection: 'No',
    noOfDesigns: '',
    noOfColors: '',
    poPcs: '',
    appId: 1, // change after login api fetchdata
    createdBy: user.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: user.empId,
    lastUpdatedOn: new Date().toISOString()
  });

  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    setFormData({
      collectionId: initialData?.collectionId || 0,
      collectionName: initialData?.collectionName || '',
      brandId: initialData?.brandId || 0,
      seasonId: initialData?.seasonId || '',
      volume: initialData?.volume || '',
      planningDate: initialData?.planningDate
        ? formatDate(initialData.planningDate)
        : '',
      launchDate: initialData?.launchDate
        ? formatDate(initialData.launchDate)
        : '',
      isRepeatCollection: initialData?.isRepeatCollection || '',
      noOfDesigns: initialData?.noOfDesigns || '',
      noOfColors: initialData?.noOfColors || '',
      poPcs: initialData?.poPcs || '',
      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [totalPcs, setTotalPcs] = useState('');
  console.log('formData', formData);
  console.log('lookupData', lookupData);

  ///////////////tabs
  const [value, setValue] = useState('1');
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const [formErrors, setFormErrors] = useState({});

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
      headerName: 'Collection'
      // editable: true,
      // flex: 2
    },
    {
      field: 'brandId',
      headerName: 'Brand'
      // editable: true,
      // flex: 1,
      // type: 'singleSelect',
      // valueOptions: brands.map((collection) => ({
      //   value: collection.lookUpId,
      //   label: collection.lookUpName
      // }))
    },
    {
      field: 'seasonId',
      headerName: 'Season'
      // editable: true,
      // flex: 1,
      // type: 'singleSelect',
      // valueOptions: seasons.map((collection) => ({
      //   value: collection.lookUpId,
      //   label: collection.lookUpName
      // }))
    },
    {
      field: 'volume',
      headerName: 'Volume'
      // flex: 1,
      // editable: true,
      // type: 'singleSelect',
      // valueOptions: ['Volume 1', 'Volume 2', 'Volume 3', 'Volume 4', 'Volume 5']
    },
    {
      field: 'planningDate',
      headerName: 'Planning Date',
      valueGetter: (params) => {
        const date = new Date(params);
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
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'isRepeatCollection',
      headerName: 'Repeat'
    },
    {
      field: 'noOfColors',
      headerName: 'No. Of Colors'
      // editable: true,
      // flex: 1
    },
    {
      field: 'noOfDesigns',
      headerName: 'No Of Designs'
      // editable: true,
      // flex: 1
    },
    {
      field: 'poPcs',
      headerName: 'Po Pcs'
      // editable: true,
      // flex: 1
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
  const handlesearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };
  // const handlesearchChange = (e) => {
  //   const { name, value } = e.target;

  //   setSearchData((prevState) => {
  //     const newState = { ...prevState, [name]: value };

  //     // Validate date range
  //     if (
  //       name === 'searchPlanningDateTo' &&
  //       newState.searchPlanningDateFrom &&
  //       new Date(value) < new Date(newState.searchPlanningDateFrom)
  //     ) {
  //       enqueueSnackbar('Date To cannot be earlier than Date From', {
  //         variant: 'error',
  //         autoHideDuration: 5000
  //       });
  //       return prevState;
  //     }

  //     if (
  //       name === 'searchPlanningDateFrom' &&
  //       newState.searchPlanningDateTo &&
  //       new Date(newState.searchPlanningDateTo) < new Date(value)
  //     ) {
  //       enqueueSnackbar('Date To cannot be earlier than Date From', {
  //         variant: 'error',
  //         autoHideDuration: 5000
  //       });
  //       return prevState;
  //     }

  //     return newState;
  //   });
  // };

  const validateForm = () => {
    const errors = {};
    if (!formData.collectionName.trim()) {
      errors.collectionName = 'collectionName is required';
    }
    if (!formData.seasonId) {
      errors.seasonId = 'seasonId  is required';
    }
    if (!formData.brandId) {
      errors.brandId = 'brandId  is required';
    }
    if (!formData.planningDate) {
      errors.planningDate = 'planningDate  is required';
    }
    if (!formData.launchDate) {
      errors.launchDate = 'launchDate  is required';
    }
    if (!formData.noOfDesigns) {
      errors.noOfDesigns = 'noOfDesigns  is required';
    }
    if (!formData.noOfColors) {
      errors.noOfColors = 'noOfColors  is required';
    }
    if (!formData.poPcs) {
      errors.poPcs = 'poPcs  is required';
    }
    return errors;
  };

  const handleSave = async () => {
    console.log(formData);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

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
        collectionId: 0,
        collectionName: '',
        brandId: '',
        seasonId: '',
        volume: '',
        planningDate: '',
        launchDate: '',
        isRepeatCollection: '',
        noOfDesigns: '',
        noOfColors: '',
        poPcs: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      });
      // fetchData();
      refetch();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Collection not saved !', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/API/CollectionRegistration/GetCollectionListByPlanningDate?startDate=${searchData.searchPlanningDateFrom}&endDate=${searchData.searchPlanningDateTo}&appId=1`
      );
      enqueueSnackbar('Collection Search successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      console.log('Response Data:', response.data);
      setSearchResult(
        response.data.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Collection Search Failed!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  console.log('searchData', searchData);
  const deleteApi =
    'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  // const editAPi =
  //   'https://gecxc.com:4041/API/CollectionRegistration/SaveCollection';
  const handleReset = () => {
    setFormData({
      collectionId: 0,
      collectionName: '',
      brandId: '',
      seasonId: '',
      volume: '',
      planningDate: '',
      launchDate: '',
      isRepeatCollection: '',
      noOfDesigns: '',
      noOfColors: '',
      poPcs: '',
      createdOn: new Date().toISOString(),
      createdBy: user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
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
              <Card variant="outlined">
                <CardHeader
                  className="css-4rfrnx-MuiCardHeader-root"
                  // avatar={
                  // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                  // }
                  title="Add Collection "
                  titleTypographyProps={{ style: { color: 'white' } }}
                  action={
                    <IconButton
                      aria-label="reset"
                      sx={{ color: 'white', mt: -2 }} // Use sx to style the color
                      onClick={() => handleReset()}
                    >
                      <LoopOutlinedIcon />
                    </IconButton>
                  }
                ></CardHeader>
                <Grid
                  container
                  spacing={1}
                  width="Inherit"
                  sx={{ paddingY: 2, paddingX: 2 }}
                >
                  {/* <Grid item xs={9} md={9}>
                    <Typography variant="h3" gutterBottom>
                      Create New Collection
                    </Typography>
                  </Grid> */}

                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      select
                      label="* Season Name"
                      name="seasonId"
                      value={formData.seasonId}
                      onChange={handleChange}
                      size="small"
                      error={!!formErrors.seasonId}
                      helperText={formErrors.seasonId}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
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
                      error={!!formErrors.brandId}
                      helperText={formErrors.brandId}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
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
                      label="* Collection Name"
                      fullWidth
                      size="small"
                      name="collectionName"
                      onChange={handleChange}
                      value={formData.collectionName}
                      error={!!formErrors.collectionName}
                      helperText={formErrors.collectionName}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
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
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
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
                      error={!!formErrors.planningDate}
                      helperText={formErrors.planningDate}
                      InputLabelProps={{
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
                      label="Launch Date"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleChange}
                      fullWidth
                      focused
                      error={!!formErrors.launchDate}
                      helperText={formErrors.launchDate}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      select
                      label="Repeat Collection?"
                      name="isRepeatCollection"
                      defaultValue="No"
                      value={formData.isRepeatCollection}
                      onChange={handleChange}
                      size="small"
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
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
                      type="number"
                      onChange={handleChange}
                      value={formData.noOfColors}
                      error={!!formErrors.noOfColors}
                      helperText={formErrors.noOfColors}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="No. of Designs"
                      fullWidth
                      size="small"
                      name="noOfDesigns"
                      type="number"
                      onChange={handleChange}
                      value={formData.noOfDesigns}
                      error={!!formErrors.noOfDesigns}
                      helperText={formErrors.noOfDesigns}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Po. Pieces"
                      fullWidth
                      size="small"
                      name="poPcs"
                      type="number"
                      onChange={handleChange}
                      value={formData.poPcs}
                      error={!!formErrors.poPcs}
                      helperText={formErrors.poPcs}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Total Pieces"
                      fullWidth
                      size="small"
                      name="totalPcs"
                      type="number"
                      // onChange={handleChange}
                      value={totalPcs}
                      disabled
                      sx={(theme) => ({
                        ...(formData.totalPcs !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            {
                              backgroundColor: `#c9c9c9 !important`
                            }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black' // Adjust text color here
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9' // Adjust background color here
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          {
                            // borderColor: 'gray' // Adjust border color here
                          },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                        }
                      })}
                      InputLabelProps={{
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </Grid>
                  {/* <Grid item sm={12}>
                    <Divider
                      color="#cc8587"
                      sx={{ height: 2, width: '100%' }}
                    />
                  </Grid> */}
                </Grid>{' '}
              </Card>
            </FormControl>
            <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                avatar={<VisibilityOutlinedIcon />}
                title="View Collections "
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={2}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                {/* <Grid container spacing={2} width="inherit" paddingTop={2}> */}
                <Grid item xs={12}>
                  <ReuseableDataGrid
                    initialRows={initialRows}
                    iColumns={columns}
                    setInitialData={setInitialData}
                    // fetchData={fetchData}
                    formData={formData}
                    deleteApi={deleteApi}
                    deleteBy="collectionId"
                    refetch={refetch}
                    // editAPi={editAPi}
                    fileName="collectionList"
                  />
                </Grid>
              </Grid>{' '}
            </Card>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2} width="inherit">
              <Grid item xs={9} md={9}>
                <Typography variant="h3" gutterBottom>
                  Search Collection
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign="right">
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleSearch}
                  disabled={!isDateRangeValid}
                >
                  Search
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  type="date"
                  label="Date From"
                  name="searchPlanningDateFrom"
                  value={searchData.searchPlanningDateFrom}
                  onChange={handlesearchChange}
                  fullWidth
                  focused
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="small"
                  type="date"
                  label="Date to"
                  name="searchPlanningDateTo"
                  value={searchData.searchPlanningDateTo}
                  onChange={handlesearchChange}
                  fullWidth
                  focused
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                />
              </Grid>

              <Grid item sm={12}>
                <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} width="inherit" paddingTop={2}>
              <Grid item xs={12}>
                <ReuseableDataGrid
                  initialRows={searchResult}
                  iColumns={columns}
                  disableEdit
                  disableDelete
                  // formData={formData}
                  // deleteApi={deleteApi}
                  // deleteBy="collectionId"
                  // editAPi={editAPi}
                  // disableAddRecord={true}
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
