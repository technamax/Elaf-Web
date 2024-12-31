import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Box,
  Divider,
  MenuItem,
  Card,
  CardHeader
} from '@mui/material';
import ReuseableDataGrid from '../ReuseableDataGrid';
import MainCard from 'ui-component/cards/MainCard';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import {
  useGetRoleListQuery,
  useGetAssignedRolesByEmpIdQuery
} from 'api/store/Apis/userManagementApi';
// import { useGetAdditionalProcessDetailsByAdditionalProcessIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import axios from 'axios';

const AssignVendorFormTable = ({
  userData,
  setAdditionalProcessData,
  refetchUsers,
  handleClickOpen
}) => {
  console.log('userData', userData);
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    userRoleId: 0,
    userName: userData.userName,
    roleId: '',
    // roleName: '',
    startDate: '',
    endDate: '',
    empId: userData.empId,
    isMainRole: '',
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
      userRoleId: initialData?.userRoleId || 0,
      userName: userData.userName,
      roleId: initialData?.roleId || '',
      // roleName: initialData?.roleName || '',
      startDate: initialData?.startDate || '',
      endDate: initialData?.endDate || '',
      empId: userData.empId,
      isMainRole: initialData?.isMainRole || '',
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
  const { data: assignedRoles, refetch: refetchAssignedRoles } =
    useGetAssignedRolesByEmpIdQuery(formData.empId, {
      skip: !formData.empId // Skip the query if no collection is selected
    });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (rolesData) {
      setRoles(
        rolesData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [rolesData, refetch]);
  useEffect(() => {
    if (assignedRoles) {
      setInitialRows(
        assignedRoles.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [assignedRoles, refetch]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    console.log('formData', formData);
    setLoading(true);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/Users/AssignUserRole',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        userRoleId: 0,
        userName: prevFormData.userName,
        roleId: '',
        // roleName: '',
        startDate: '',
        endDate: '',
        empId: prevFormData.empId,
        isMainRole: '',
        enabled: '',

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchAssignedRoles();
      refetch();
      setIsEdit(false);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
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
      field: 'userName',
      headerName: 'User Name',
      flex: 1
    },
    {
      field: 'roleName',
      headerName: 'Role',
      flex: 1
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
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
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
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
      field: 'isMainRole',
      headerName: 'isMAinRole',
      flex: 1
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      flex: 1
    }
  ];

  const fileName = `assignedUserRoles${new Date().toISOString()}`;

  return (
    // <MainCard
    //   style={{
    //     borderWidth: 1,
    //     borderStyle: 'dotted',
    //     borderColor: '#a11f23',
    //     // backgroundColor: '#eef2f6',
    //     width: 'auto',
    //     maxHeight: { xs: '80vh', md: 'auto' },
    //     overflow: 'auto'
    //   }}
    // >
    <Box sx={{ width: '100%', typography: 'body1', paddingTop: 2 }}>
      <Card variant="outlined">
        {/* <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Assign Role "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader> */}
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={2}>
            <TextField
              label="User Name"
              fullWidth
              size="small"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              required
              disabled
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              select
              label="Role"
              name="roleId"
              value={formData.roleId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {roles.map((option) => (
                <MenuItem key={option.roleId} value={option.roleId}>
                  {option.roleName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              size="small"
              type="date"
              label="Start Date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              fullWidth
              focused
              // error={!!formErrors.planningDate}
              // helperText={formErrors.planningDate}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              size="small"
              type="date"
              label="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              fullWidth
              focused
              // error={!!formErrors.planningDate}
              // helperText={formErrors.planningDate}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              select
              label="Is Main Role"
              name="isMainRole"
              value={formData.isMainRole}
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

          <Grid item xs={12} textAlign="right" sx={{}}>
            {/* <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button> */}
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress sx={{ color: '#ffffff' }} size={24} />
              ) : (
                'Save'
              )}
            </Button>
          </Grid>
        </Grid>{' '}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View User Roles "
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
              fileName={fileName}
            />
          </Grid>
        </Grid>{' '}
      </Card>
    </Box>
    // </MainCard>
  );
};

export default AssignVendorFormTable;
