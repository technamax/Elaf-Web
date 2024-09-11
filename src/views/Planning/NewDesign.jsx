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
  Tab,
  Card,
  CardHeader,
  IconButton
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useUser } from 'context/User';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

const NewDesign = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const { data: collectionData } = useGetCollectionListQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } = useGetDesignListByCollectionIdQuery(
    selectedCollectionId,
    {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    }
  );
  const { enqueueSnackbar } = useSnackbar();

  const [initialRows, setInitialRows] = useState([]);
  const [colors, setColors] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [value, setValue] = useState('1');
  const [duplicateError, setDuplicateError] = useState(false); // State to track duplicate design number error
  const { data: lookupData } = useGetLookUpListQuery();
  console.log('designers', designers);
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setDesigners(data.designerList);
    }
  }, [lookupData]);

  console.log('lookupData', lookupData.result[0]);

  useEffect(() => {
    if (designData) {
      setIsLoading(false);
      setInitialRows(
        designData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      refetch();
    }
  }, [designData]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get(
          ' http://100.42.177.77:81/api/Common/GetLookUpByDomain?lookupDomain=COLOURS'
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
    designId: 0,
    collectionId: '',
    designNo: '',
    designerName: '',
    designerid: '',

    poPcs: '',
    dateOfPlanning: '',
    colorId: '',
    appId: user.appId,
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
      designId: initialData?.designId || 0,
      collectionId: initialData?.collectionId || '',
      designNo: initialData?.designNo || 0,
      designerName: initialData?.designerName || '',
      poPcs: initialData?.poPcs || '',
      dateOfPlanning: initialData?.dateOfPlanning
        ? formatDate(initialData.dateOfPlanning)
        : '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);

  // useEffect(() => {
  //   setFormData({
  //     designId: initialData?.designId || 0,
  //     collectionId: initialData?.collectionId || '',
  //     designNo: initialData?.designNo || 0,
  //     designerName: initialData?.designerName || '',
  //     poPcs: initialData?.poPcs || '',
  //     dateOfPlanning:
  //       new Date(initialData.dateOfPlanning).toISOString().split('T')[0] || '',
  //     // dateOfPlanning: initialData?.dateOfPlanning || '',
  //     colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
  //     appId: initialData?.appId || user.appId,

  //     createdOn: initialData?.createdOn || new Date().toISOString(),
  //     createdBy: initialData?.createdBy || user.empId,
  //     lastUpdatedOn: new Date().toISOString(),
  //     LastUpdatedBy: user.empId
  //   });
  // }, [initialData]);
  console.log('initialData', initialData);
  console.log('formData', formData);
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

  // const initialRows = initialRows.map((design, index) => ({
  //   id: index + 1,
  //   ...design
  // }));
  console.log('initialRows', initialRows);
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // editable: true,
      // flex: 1,
    },
    {
      field: 'collectionName',
      headerName: 'Collection Name',
      editable: true
      // flex: 2,
      // type: 'singleSelect',
      // valueOptions: collectionList.map((collection) => ({
      //   value: collection.collectionId,
      //   label: collection.collectionName
      // }))
    },
    {
      field: 'designNo',
      headerName: 'Design No'
      // flex: 1,
      // editable: true
    },
    {
      field: 'designerName',
      headerName: 'Designer Name'
      // flex: 1,
      // editable: true
    },
    {
      field: 'poPcs',
      headerName: 'Po PCs'
      // flex: 1
      // editable: true
    },
    {
      field: 'dateOfPlanning',
      headerName: 'Date of Planning',
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
      field: 'colorName',
      headerName: 'Color'
      // flex: 1,
      // editable: true,
      // type: 'singleSelect',
      // valueOptions: colors.map((collection) => ({
      //   value: collection.lookUpId,
      //   label: collection.lookUpName
      // }))
    }
  ];
  const handlesearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };
  const handleSave = async () => {
    console.log(formData);
    // Check if the design number already exists
    const isDuplicate = initialRows.some(
      (design) => design.designNo === formData.designNo
    );

    if (isDuplicate && formData.designId === 0) {
      // Show Snackbar for duplicate entry
      enqueueSnackbar('Design number already exists!', {
        variant: 'error',
        autoHideDuration: 5000
      });
      return; // Exit without saving
    }
    try {
      const response = await axios.post(
        'http://100.42.177.77:81/api/DesignRegistration/SaveDesign',
        formData
      );
      enqueueSnackbar('Design saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      console.log('Form data saved:', response.data);
      // setInitialRows([...initialRows, response.data]);
      setFormData({
        ...formData,
        // collectionId: '',
        designId: 0,
        designNo: '',
        designerName: '',
        poPcs: '',
        dateOfPlanning: '',
        colorId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
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
  console.log('searchData', searchData);
  const deleteApi = `http://100.42.177.77:81/api/DesignRegistration/DeleteDesignById?designId=`;
  // const editAPi = 'http://100.42.177.77:81/api/DesignRegistration/SaveDesign';
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:81/api/DesignRegistration/GetDesignListByDateOfPlanning?appId=1&startDate=${searchData.searchPlanningDateFrom}&endDate=${searchData.searchPlanningDateTo}`
      );
      enqueueSnackbar('Design Search successfully!', {
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
      enqueueSnackbar('Design Search Failed!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
    //search api call
  };
  const handleReset = () => {
    setFormData({
      designId: 0,
      collectionId: '',
      designNo: '',
      designerName: '',
      poPcs: '',
      dateOfPlanning: '',
      colorId: '',
      appId: user.appId,
      createdBy: user.empId,
      createdOn: new Date().toISOString(),
      lastUpdatedBy: user.empId,
      lastUpdatedOn: new Date().toISOString()
    });
    setInitialRows([]);
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
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                // avatar={
                // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                // }
                title="Add Design "
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
                    Create New Design
                  </Typography>
                </Grid> */}
                {/* <Grid item xs={3} md={3} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid> */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    select
                    label="Select Collection"
                    name="collectionId"
                    value={formData.collectionId}
                    onChange={handleChange}
                    size="small"
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
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
                    disabled={!formData.collectionId} // Disable if collectionId is not selected
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12} md={4}>
                  <TextField
                    label="Designer Name"
                    fullWidth
                    size="small"
                    name="designerName"
                    value={formData.designerName}
                    onChange={handleChange}
                    disabled={!formData.collectionId} // Disable if collectionId is not selected
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid> */}
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    select
                    label="Designer Name"
                    size="small"
                    name="designerName"
                    value={formData.designerName}
                    onChange={handleChange}
                    disabled={!formData.collectionId}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  >
                    {designers.map((option) => (
                      <MenuItem key={option.lookUpId} value={option.lookUpName}>
                        {option.lookUpName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    size="small"
                    type="date"
                    label="Planning Date"
                    // placeholder="dd-mm-yyyy"
                    name="dateOfPlanning"
                    value={formData.dateOfPlanning}
                    onChange={handleChange}
                    fullWidth
                    // focused
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                    // disabled={!formData.collectionId}
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
                    sx={(theme) => ({
                      ...(formData.poPcs !== '' && {
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
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    select
                    label="Color"
                    size="small"
                    name="colorId"
                    value={formData.colorId}
                    onChange={handleChange}
                    disabled={!formData.collectionId}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  >
                    {colors.map((option) => (
                      <MenuItem key={option.lookUpId} value={option.lookUpId}>
                        {option.lookUpName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>{' '}
                </Grid>
              </Grid>
              {/* </FormControl> */}
            </Card>
            <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                avatar={<VisibilityOutlinedIcon />}
                title="View Designs "
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={2}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={12}>
                  <ReuseableDataGrid
                    iColumns={columns}
                    initialRows={initialRows}
                    setInitialData={setInitialData}
                    deleteApi={deleteApi}
                    deleteBy="designId"
                    refetch={refetch}
                    // setAccordionExpanded={setAccordionExpanded}
                    fileName="DesignList"
                    isLoading={isLoading}
                  />
                  {/* <EditAbleDataGrid
                    initialRows={initialRows}
                    ncolumns={columns}
                    formData={formData}
                    editAPi={editAPi}
                    deleteApi={deleteApi}
                    deleteBy="designId"
                    refetch={refetch}
                  /> */}
                </Grid>
              </Grid>
            </Card>
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
                  name="searchPlanningDateFrom"
                  value={searchData.searchPlanningDateFrom}
                  onChange={handlesearchChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
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
                  InputLabelProps={{
                    shrink: true,
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

export default NewDesign;
