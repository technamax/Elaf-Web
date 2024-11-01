import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  FormControl
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import '../../assets/scss/style.scss';

// import { useGetMainMenuListQuery } from 'api/store/Apis/userManagementApi';
import { useGetCategoriesListQuery } from 'api/store/Apis/termsAndConditionsApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AddTermsAndConditions from 'components/Production/TermsAndConditions/AddTermsAndConditions';
import AssignTermsAndConditions from 'components/Production/TermsAndConditions/AssignTermsAndConditions';
// import SubMenu from './SubMenu';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const TermsandConditions = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    categoryId: 0,
    description: '',
    enabled: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  const options = [
    {
      value: 'Yes',
      label: 'Yes'
    },
    {
      value: 'No',
      label: 'No'
    }
  ];
  const [value, setValue] = useState('1');
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      categoryId: initialData?.categoryId || 0,
      description: initialData?.description || '',
      enabled: initialData?.enabled || '',
      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: categoriesData, refetch } = useGetCategoriesListQuery();

  useEffect(() => {
    if (categoriesData) {
      setInitialRows(
        categoriesData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [categoriesData, refetch]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:86/api/TermsConditions/SaveCategory',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        categoryId: 0,
        description: '',
        enabled: '',

        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      refetch();
      setIsEdit(false);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1
    },

    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
    }
  ];

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
                icon={<CategoryOutlinedIcon />}
                label="Add Categories"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AddCircleOutlineOutlinedIcon />}
                label="Add Terms and Conditions"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Assign Terms and Conditions"
                value="3"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                // avatar={
                // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                // }
                title="Add Categories "
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={1}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={9}>
                  <TextField
                    label="Description"
                    fullWidth
                    size="small"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    required
                    // disabled={isEdit}
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    select
                    label="enabled"
                    name="enabled"
                    value={formData.enabled}
                    onChange={handleChange}
                    size="small"
                    // error={!!formErrors.brandId}
                    // helperText={formErrors.brandId}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>
              </Grid>{' '}
            </Card>
            <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                avatar={<VisibilityOutlinedIcon />}
                title="View Categories"
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={2}
                width="Inherit"
                // sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12}>
                  <ReuseableDataGrid
                    initialRows={initialRows}
                    iColumns={columns}
                    disableDelete={true}
                    setInitialData={setInitialData}
                    setIsEdit={setIsEdit}
                  />
                </Grid>
              </Grid>
            </Card>
          </TabPanel>
          <TabPanel value="2">
            <AddTermsAndConditions />
          </TabPanel>
          <TabPanel value="3">
            <AssignTermsAndConditions />
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default TermsandConditions;
