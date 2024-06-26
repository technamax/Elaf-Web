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
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetMainMenuListQuery } from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import SubMenu from './SubMenu';

//////
import * as React from 'react';
import { useUser } from 'context/User';

export default function Application() {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    mainMenuId: 0,
    appId: user.appId,
    mainMenuDesc: '',
    orderNo: '',
    enabled: '',
    icon: '',

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
      mainMenuId: initialData?.mainMenuId || 0,
      appId: initialData?.appId || user.appId,
      mainMenuDesc: initialData?.mainMenuDesc || '',
      orderNo: initialData?.orderNo || '',
      enabled: initialData?.enabled || '',
      icon: initialData?.icon || '',
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

  const { data: mainMenuData, refetch } = useGetMainMenuListQuery();

  useEffect(() => {
    if (mainMenuData) {
      setInitialRows(
        mainMenuData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [mainMenuData, refetch]);

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
        'https://gecxc.com:4041/api/Menu/SaveMainMenu',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        mainMenuId: 0,
        mainMenuDesc: '',
        orderNo: '',
        enabled: '',
        icon: '',

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
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });
  // const [additionalProcessData, setAdditionalProcessData] = useState({});
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = (data) => {
  //   setAdditionalProcessData(data);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   setAdditionalProcessData({});
  //   refetchAdditionalProcessList();
  //   // setDeleteId(null);
  // };

  const columns = [
    {
      field: 'mainMenuDesc',
      headerName: 'MainMenu',
      flex: 1
    },
    {
      field: 'orderNo',
      headerName: 'Order No.',
      flex: 1
    },
    {
      field: 'icon',
      headerName: 'icon',
      flex: 1
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      flex: 1
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
                icon={<MenuIcon />}
                label="Add Main Menu"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<MenuOpenIcon />}
                label="Add Sub Menus"
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
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                // avatar={
                // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
                // }
                title="Add Main Menu "
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={1}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={3}>
                  <TextField
                    label="MainMenu Description"
                    fullWidth
                    size="small"
                    name="mainMenuDesc"
                    onChange={handleChange}
                    value={formData.mainMenuDesc}
                    required
                    disabled={isEdit}
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Order No."
                    fullWidth
                    size="small"
                    name="orderNo"
                    onChange={handleChange}
                    value={formData.orderNo}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Icon"
                    fullWidth
                    size="small"
                    name="icon"
                    onChange={handleChange}
                    value={formData.icon}
                    required
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
                title="View Main Menus "
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
            <SubMenu />
            {/* <Grid container spacing={2} width="inherit">
              <Grid item xs={9} md={9}>
                <Typography variant="h3" gutterBottom>
                  Search Collection
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
                  focused
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
                />
              </Grid> */}

            {/* <Grid item sm={12}>
                <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
              </Grid> */}
            {/* </Grid> */}

            {/* <Grid container spacing={2} width="inherit" paddingTop={2}>
              <Grid item xs={12}>
                <EditAbleDataGrid
                  initialRows={searchResult}
                  ncolumns={columns}
                  formData={formData}
                  // deleteApi={deleteApi}
                  // deleteBy="collectionId"
                  // editAPi={editAPi}
                  disableAddRecord={true}
                />
              </Grid>
            </Grid> */}
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
}
