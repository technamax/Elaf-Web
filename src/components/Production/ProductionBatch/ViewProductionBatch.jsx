import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const ViewProductionBatch = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    // tcId: 0,
    // categoryId: '',
    // termCondDesc: '',
    // enabled: '',
    fromDate: '',
    toDate: ''

    // appId: user.appId,
    // createdOn: new Date().toISOString(),
    // createdBy: user.empId,
    // lastUpdatedOn: new Date().toISOString(),
    // LastUpdatedBy: user.empId
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
  // useEffect(() => {
  //   setFormData({
  //     tcId: initialData?.tcId || 0,
  //     categoryId: initialData?.categoryId || '',
  //     termCondDesc: initialData?.termCondDesc || '',
  //     enabled: initialData?.enabled || '',

  //     appId: initialData?.appId || user.appId,
  //     createdOn: initialData?.createdOn || new Date().toISOString(),
  //     createdBy: initialData?.createdBy || user.empId,
  //     lastUpdatedOn: new Date().toISOString(),
  //     LastUpdatedBy: user.empId
  //   });
  // }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  // const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  // const handleAccordionToggle = (event, isExpanded) => {
  //   setAccordionExpanded(!accordionExpanded);
  // };

  const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const { data: mainMenuData } = useGetMainMenuListQuery();
  const [mainMenus, setMainMenus] = useState([]);

  useEffect(() => {
    if (subMenuData) {
      setInitialRows(
        subMenuData.result.map((row, index) => ({
          id: index + 1,
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
        'https://gecxc.com:449/api/TermsConditions/SaveTermsConditions',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        tcId: 0,
        categoryId: '',
        termCondDesc: '',
        enabled: '',
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

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'productionId',
      headerName: 'Production Id'
      // flex: 1
    },

    {
      field: 'collectionName',
      headerName: 'Collection Name'
      // flex: 1
    },
    {
      field: 'brandName',
      headerName: 'Brand Name'
      // flex: 1
    },
    {
      field: 'seasonName',
      headerName: 'Season Name'
      // flex: 1
    },
    {
      field: 'launchDate',
      headerName: 'Launch Date'
      // flex: 1
    },
    {
      field: 'remarks',
      headerName: 'Remarks'
      // flex: 1
    },
    {
      field: 'status',
      headerName: 'Status'
      // flex: 1
    },
    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
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
          title="View Production Batches"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              type="date"
              label="From Date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.launchDate}
              // helperText={formErrors.launchDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              type="date"
              label="To Date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.launchDate}
              // helperText={formErrors.launchDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Search
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              // disableDelete={true}
              // setInitialData={setInitialData}
              setIsEdit={setIsEdit}
              hideAction={true}
            />
          </Grid>
        </Grid>{' '}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      {/* <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Terms And Conditions "
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
      </Card> */}
    </Box>
  );
};

export default ViewProductionBatch;
