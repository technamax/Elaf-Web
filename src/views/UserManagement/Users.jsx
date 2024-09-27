import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CloseIcon from '@mui/icons-material/Close';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetUsersListQuery } from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { useUser } from 'context/User';
import AssignUserRole from 'components/Users/AssignUserRole';

export default function Users() {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  console.log('initialData', initialData);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    Id: 0,
    empId: 0,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    isActive: '',

    appId: user.appId,
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
      Id: initialData?.id || 0,
      empId: initialData?.empId || 0,
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      userName: initialData?.userName || '',
      password: initialData?.password || '',
      isActive: initialData?.isActive || '',
      appId: initialData?.appId || user.appId,
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

  const { data: usersData, refetch } = useGetUsersListQuery();

  useEffect(() => {
    if (usersData) {
      setInitialRows(
        usersData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [usersData, refetch]);

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
        'http://100.42.177.77:83/api/Users/SaveUsers',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        Id: 0,
        empId: 0,
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        isActive: '',

        appId: user.appId,
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
  const [userData, setUserData] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (data) => {
    setUserData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setAdditionalProcessData({});
    // refetchAdditionalProcessList();
    // setDeleteId(null);
  };
  const columns = [
    {
      field: 'empId',
      headerName: 'Employee Id',
      flex: 1
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1
    },
    {
      field: 'userName',
      headerName: 'User Name',
      flex: 1
    },
    {
      field: 'password',
      headerName: 'Password',
      flex: 1
    },
    {
      field: 'isActive',
      headerName: 'Is Active',
      flex: 1
    },
    {
      field: 'AssignRole',
      headerName: 'Assign Role',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            <PersonAddAlt1OutlinedIcon />
          </IconButton>
        </div>
      )
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
            title="Add User "
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
                label="Employee ID"
                fullWidth
                size="small"
                type="number"
                name="empId"
                onChange={handleChange}
                value={formData.empId}
                required
                disabled={isEdit}
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="First Name"
                fullWidth
                size="small"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Last Name"
                fullWidth
                size="small"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="User Name"
                fullWidth
                size="small"
                name="userName"
                onChange={handleChange}
                value={formData.userName}
                required
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Password"
                fullWidth
                size="small"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
                // error={!!formErrors.collectionName}
                // helperText={formErrors.collectionName}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Is Active"
                name="isActive"
                value={formData.isActive}
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
            title="View Users "
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
              <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
                <DialogTitle
                  sx={{
                    backgroundColor: '#A11F23',
                    color: '#ffffff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="h6" component="div" color="#ffffff">
                    {'Assign Role '}
                  </Typography>
                  <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                  <AssignUserRole
                    userData={userData}
                    // setUserData={setUserData}
                    refetchUsers={refetch}
                    // handleClickOpen={handleClickOpen}
                  />
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>{' '}
        </Card>
      </Box>
    </MainCard>
  );
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// import React from 'react';
// import Divider from '@mui/material/Divider';
// import AddUsers from 'components/Users/addUsers';
// import AddUsersTable from 'components/Users/addusersTable';

// export default function Application(fetchData) {
//   return (
//     <>
//       <AddUsers />
//       <Divider />
//       <AddUsersTable
//       fetchData={fetchData}

//       />
//     </>
//   );
// }
