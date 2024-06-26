import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

export default function SubMenu() {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    subMenuId: 0,
    subMenuDesc: '',
    orderNo: '',
    enabled: '',
    link: '',
    icon: '',
    mainMenuId: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
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
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      subMenuId: initialData?.subMenuId || 0,
      subMenuDesc: initialData?.subMenuDesc || '',
      orderNo: initialData?.orderNo || '',
      enabled: initialData?.enabled || '',
      link: initialData?.link || '',
      icon: initialData?.icon || '',
      mainMenuId: initialData?.mainMenuId || '',

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const { data: mainMenuData } = useGetMainMenuListQuery();
  const [mainMenus, setMainMenus] = useState([]);

  useEffect(() => {
    if (subMenuData) {
      setInitialRows(
        subMenuData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [subMenuData, refetch]);
  useEffect(() => {
    if (mainMenuData) {
      setMainMenus(
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
        'https://gecxc.com:4041/api/Menu/SaveSubMenu',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        subMenuId: 0,
        subMenuDesc: '',
        orderNo: '',
        enabled: '',
        link: '',
        icon: '',
        mainMenuId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
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
      field: 'mainMenuId',
      headerName: 'Main Menu',
      flex: 1
    },
    {
      field: 'subMenuDesc',
      headerName: 'Sub Menu',
      flex: 1
    },
    {
      field: 'orderNo',
      headerName: 'Order No.',
      flex: 1
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      flex: 1
    },
    {
      field: 'link',
      headerName: 'Link',
      flex: 1
    },
    {
      field: 'icon',
      headerName: 'Icon',
      flex: 1
    }
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Add Sub Menus "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              select
              label="Main Menu"
              name="mainMenuId"
              value={formData.mainMenuId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {mainMenus.map((option) => (
                <MenuItem key={option.mainMenuId} value={option.mainMenuId}>
                  {option.mainMenuDesc}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Sub Menu"
              fullWidth
              size="small"
              name="subMenuDesc"
              onChange={handleChange}
              value={formData.subMenuDesc}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              select
              label="Enabled"
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
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={2}>
            <TextField
              label="Link"
              fullWidth
              size="small"
              name="link"
              onChange={handleChange}
              value={formData.link}
              required
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
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
          title="View Sub Menus "
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
        </Grid>{' '}
      </Card>
    </Box>
  );
}
