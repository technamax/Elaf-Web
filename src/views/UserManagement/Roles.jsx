import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetRoleListQuery } from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

export default function Application() {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    roleId: 0,
    roleName: '',
    description: '',
    defaultUrl: '',
    enabled: '',

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
      roleId: initialData?.roleId || 0,
      roleName: initialData?.roleName || '',
      description: initialData?.description || '',
      defaultUrl: initialData?.defaultUrl || '',
      enabled: initialData?.enabled || '',
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

  const { data: rolesData, refetch } = useGetRoleListQuery();

  useEffect(() => {
    if (rolesData) {
      setInitialRows(
        rolesData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [rolesData, refetch]);

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
        'http://100.42.177.77:83/api/Role/SaveRole',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        roleId: 0,
        roleName: '',
        description: '',
        defaultUrl: '',
        enabled: '',
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
      field: 'roleName',
      headerName: 'Role',
      flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1
    },
    {
      field: 'defaultUrl',
      headerName: 'Default URL',
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
        <Card variant="outlined">
          <CardHeader
            className="css-4rfrnx-MuiCardHeader-root"
            // avatar={
            // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
            // }
            title="Add Role "
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
                label="Role Name"
                fullWidth
                size="small"
                name="roleName"
                onChange={handleChange}
                value={formData.roleName}
                required
                disabled={isEdit}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Description"
                fullWidth
                size="small"
                name="description"
                onChange={handleChange}
                value={formData.description}
                required
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Default URL"
                fullWidth
                size="small"
                name="defaultUrl"
                onChange={handleChange}
                value={formData.defaultUrl}
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
            title="View Roles "
            titleTypographyProps={{ style: { color: 'white' } }}
          ></CardHeader>
          <Grid
            container
            spacing={2}
            width="Inherit"
            sx={{ paddingY: 2, paddingX: 2 }}
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
    </MainCard>
  );
}
