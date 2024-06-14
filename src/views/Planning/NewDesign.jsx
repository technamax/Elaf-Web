import { useState, useEffect } from 'react';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack';

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
import MainCard from 'ui-component/cards/MainCard';
import { useUser } from 'context/User';

const NewDesign = () => {
  const { user } = useUser();

  const { data: collectionData } = useGetCollectionListQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } = useGetDesignListByCollectionIdQuery(
    selectedCollectionId,
    {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    }
  );
  const { enqueueSnackbar } = useSnackbar();
  const [formErrors, setFormErrors] = useState({});

  const [designList, setDesignList] = useState([]);
  const [colors, setColors] = useState([]);
  const [value, setValue] = useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      refetch();
    }
  }, [designData]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get(
          ' https://gecxc.com:4041/api/Common/GetLookUpByDomain?lookupDomain=COLOURS'
        );
        const data = response.data.result;

        setColors(data);
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };

    fetchColors();
  }, []);

  const collectionList = collectionData?.result || [];

  const [formData, setFormData] = useState({
    collectionId: '',
    designNo: '',
    designerName: '',
    poPcs: '',
    dateOfPlanning: '',
    colorId: '',
    appId: 1,
    createdBy: user.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: user.empId,
    lastUpdatedOn: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setSelectedCollectionId(value);
      setFormData({
        ...formData,
        collectionId: value,
        poPcs: selectedCollection ? selectedCollection.poPcs : '',
        designNo: '',
        designerName: '',

        dateOfPlanning: '',
        colorId: ''
      });
    } else setFormData({ ...formData, [name]: value });
  };

  const initialRows = designList.map((design, index) => ({
    id: index + 1,
    designId: design.designId,
    collectionId: design.collectionId,
    designNo: design.designNo,
    designerName: design.designerName,
    poPcs: design.poPcs,
    dateOfPlanning: design.dateOfPlanning,
    colorId: design.colorId,
    appId: design.appId,
    createdBy: design.createdBy,
    createdOn: design.createdOn,
    lastUpdatedBy: design.lastUpdatedBy,
    lastUpdatedOn: design.lastUpdatedOn
  }));
  console.log('initialRows', initialRows);
  const columns = [
    {
      field: 'collectionId',
      headerName: 'Collection ID',
      editable: true,
      flex: 2,
      type: 'singleSelect',
      valueOptions: collectionList.map((collection) => ({
        value: collection.collectionId,
        label: collection.collectionName
      }))
    },
    {
      field: 'designNo',
      headerName: 'Design No',
      flex: 1,
      editable: true
    },
    {
      field: 'designerName',
      headerName: 'Designer Name',
      flex: 1,
      editable: true
    },
    {
      field: 'poPcs',
      headerName: 'Po PCs',
      flex: 1,
      editable: true
    },
    {
      field: 'dateOfPlanning',
      headerName: 'Date of Planning',
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
      field: 'colorId',
      headerName: 'Color',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: colors.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    }
  ];

  const handleSave = async () => {
    console.log(formData);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        'https://gecxc.com:4041/API/DesignRegistration/SaveDesign',
        formData
      );
      enqueueSnackbar('Design saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      console.log('Form data saved:', response.data);
      setDesignList([...designList, response.data]);
      setFormData({
        collectionId: '',
        designNo: '',
        designerName: '',
        poPcs: '',
        dateOfPlanning: '',
        colorId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      });
      refetch();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Design not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.collectionId) {
      errors.collectionId = 'collectionId is required';
    }
    if (!formData.designNo) {
      errors.designNo = 'designNo is required';
    }
    if (!formData.dateOfPlanning) {
      errors.dateOfPlanning = 'dateOfPlanning is required';
    }
    if (!formData.colorId) {
      errors.colorId = 'colorId is required';
    }
    return errors;
  };

  const deleteApi =
    'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  const editAPi = 'https://gecxc.com:4041/API/DesignRegistration/SaveDesign';
  const handleSearch = () => {
    //search api call
  };

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
            <TabList onChange={handleChangeTabs}>
              <Tab
                icon={<AddCircleIcon />}
                label="Add Design"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<SearchIcon />}
                label="Search Design"
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
            {/* <FormControl> */}
            <Grid container spacing={2} width="Inherit">
              <Grid item xs={9} md={9}>
                <Typography variant="h3" gutterBottom>
                  Create New Design
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Select Collection"
                  name="collectionId"
                  value={formData.collectionId}
                  onChange={handleChange}
                  size="small"
                  required
                  error={!!formErrors.collectionId}
                  helperText={formErrors.collectionId}
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
              <Grid item xs={12} md={4}>
                <TextField
                  label="Design No."
                  name="designNo"
                  fullWidth
                  size="small"
                  value={formData.designNo}
                  onChange={handleChange}
                  error={!!formErrors.designNo}
                  helperText={formErrors.designNo}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Designer Name"
                  fullWidth
                  size="small"
                  name="designerName"
                  value={formData.designerName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  size="small"
                  type="date"
                  label="Planning Date"
                  name="dateOfPlanning"
                  value={formData.dateOfPlanning}
                  error={!!formErrors.dateOfPlanning}
                  helperText={formErrors.dateOfPlanning}
                  onChange={handleChange}
                  fullWidth
                  focused
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Po PCs"
                  fullWidth
                  size="small"
                  name="poPcs"
                  type="number"
                  value={formData.poPcs}
                  disabled
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  select
                  label="Color"
                  size="small"
                  name="colorId"
                  value={formData.colorId}
                  onChange={handleChange}
                  error={!!formErrors.colorId}
                  helperText={formErrors.colorId}
                  required
                >
                  {colors.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            {/* </FormControl> */}
            <Divider />
            <Grid container spacing={2} width="inherit" paddingTop={2}>
              <Grid item xs={12} md={12}>
                <EditAbleDataGrid
                  initialRows={initialRows}
                  ncolumns={columns}
                  formData={formData}
                  editAPi={editAPi}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2} width="inherit">
              <Grid item xs={9} md={9}>
                <Typography variant="h3" gutterBottom>
                  Search Design
                </Typography>
              </Grid>
              <Grid item xs={3} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSearch}>
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
                  initialRows={[]}
                  ncolumns={columns}
                  formData={formData}
                  editAPi={editAPi}
                  disableAddRecord={true}
                  // disableEdit={true}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default NewDesign;
