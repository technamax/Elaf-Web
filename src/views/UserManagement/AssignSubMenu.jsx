import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Divider,
  Box
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery,
  useGetRoleListQuery,
  useGetSubMenuRoleByRoleIdQuery,
  useGetSubMenuByRoleIdQuery
} from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
//////
import * as React from 'react';
import { useUser } from 'context/User';

export default function AssignSubMenu() {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    subMenuRoleId: 0,
    roleId: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  useEffect(() => {
    setFormData({
      subMenuRoleId: initialData?.subMenuRoleId || 0,
      roleId: initialData?.roleId || '',

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

  const { data: subMenuRoleData, refetch: refetchsubMenuRoleData } =
    useGetSubMenuRoleByRoleIdQuery(formData.roleId, {
      skip: !formData.roleId
    });
  const { data: subMenuData, refetch: refetchSubMenuData } =
    useGetSubMenuByRoleIdQuery(formData.roleId, {
      skip: !formData.roleId
    });

  const { data: rolesData, refetch } = useGetRoleListQuery();
  const [roles, setRoles] = useState([]);
  const [subMenus, setSubMenus] = useState([]);

  useEffect(() => {
    if (subMenuData) {
      setSubMenus(
        subMenuData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [subMenuData, refetchSubMenuData]);

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
    if (subMenuRoleData) {
      setInitialRows(
        subMenuRoleData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [subMenuRoleData, refetchsubMenuRoleData]);

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
        'http://100.42.177.77:86/api/Users/SaveSubMenuRole',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        roleId: prevFormData.roleId,
        subMenuRoleId: 0,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchsubMenuRoleData();
      refetchSubMenuData();
      setRowSelectionModel([]);
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

  const columns = [
    {
      field: 'subMenuId',
      headerName: 'SubMenu',
      flex: 0.5
    },
    {
      field: 'subMenuDesc',
      headerName: 'Sub Menu',
      flex: 1
    },
    {
      field: 'link',
      headerName: 'Link',
      flex: 2
    },
    {
      field: 'icon',
      headerName: 'Icon',
      flex: 2
    },
    {
      field: 'mainMenuId',
      headerName: 'MainMenu',
      flex: 0.5
    },
    {
      field: 'mainMenuDesc',
      headerName: 'Main Menu',
      flex: 1
    },
    {
      field: 'orderNo',
      headerName: 'Order No.',
      flex: 0.5
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      flex: 0.5
    }
  ];
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);
  const handleRowSelectionModelChange = useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
      const designsIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['subMenuId'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values
      // const poPcsLists = newRowSelectionModel
      //   .map((id) => {
      //     const rowData = apiRef.current.getRow(id);
      //     console.log('rowData', rowData);
      //     return rowData ? rowData['poPcs'] : null; // Adjust the field name to match your data
      //   })
      //   .filter((id) => id !== null); // Filter out any null values
      // console.log('poPcsLists', poPcsLists);

      setSelectedSubMenu(designsIds);
    },
    [apiRef]
  );

  useEffect(() => {
    setFormData({
      ...formData,
      SubMenuIdList: selectedSubMenu
      // poPcsList: pcsList
    });
  }, [selectedSubMenu]);
  useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

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
              label="Roles"
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
          {/* <Grid item xs={12} md={2}>
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
          </Grid> */}
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={initialRows}
                columns={columns}
                apiRef={apiRef}
                disableRowSelectionOnClick
                checkboxSelection
                onRowSelectionModelChange={handleRowSelectionModelChange}
                rowSelectionModel={rowSelectionModel}
              />
            </div>
          </Grid>
          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
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
              initialRows={subMenus}
              iColumns={columns}
              hideAction
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
