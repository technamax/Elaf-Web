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
  Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import {
  useGetProductionBatchInProcessQuery,
  useGetDesignListFromCompletedCollectionIdQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DyeingPrintingAssignVendor from 'components/DyeingPrintingAssignVendor';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//////
import * as React from 'react';
import { useUser } from 'context/User';

const ViewProductionBatch = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [initialFormData, setInitialFormData] = useState({});

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    // tcId: 0,
    // categoryId: '',
    // termCondDesc: '',
    // enabled: '',
    fromDate: '',
    toDate: '',
    collectionId: '',
    productionId: initialFormData?.productionId || 0,
    collectionId: initialFormData?.collectionId || '',
    orderNumber: initialFormData?.orderNumber || '',
    launchDate: initialFormData?.launchDate || '',
    status: initialFormData?.status || '',
    remarks: initialFormData?.remarks || ''

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

  const { data: collectionData, refetch } =
    useGetProductionBatchInProcessQuery();
  const { data: designData, refetch: refetchDesignData } =
    useGetDesignListFromCompletedCollectionIdQuery(formData.collectionId, {
      skip: !formData.collectionId // Skip the query if no collection is selected
    });

  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    if (collectionData) {
      setCollectionList(
        collectionData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [collectionData, refetch]);
  useEffect(() => {
    if (collectionData) {
      setInitialRows(
        collectionData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [collectionData, refetchDesignData]);
  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );

      setFormData({
        ...formData,
        collectionId: value,
        orderNumber: selectedCollection ? selectedCollection.orderNumber : ''
        // status: selectedCollection ? selectedCollection.batchStatus : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (data) => {
    setInitialFormData(data);
    setOpen(true);
  };
  const handleClose = () => {
    // setShowUpperDiv(true);
    setOpen(false);
    setInitialFormData({});
    // refetchDyeingPrintingData();

    // setDeleteId(null);
  };

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
      headerName: 'Launch Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
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
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            <VisibilityOutlinedIcon />
          </IconButton>
        </div>
      )
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
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              // disableDelete={true}
              // setInitialData={setInitialData}
              setIsEdit={setIsEdit}
              hideAction={true}
            />
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
              <DialogTitle
                sx={{
                  backgroundColor: '#A11F23',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingX: '24px',
                  paddingY: '4px'
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="#ffffff"
                  gutterBottom
                  fontSize={20}
                  fontWeight={2}
                  fontStyle={'normal'}
                >
                  {'View Details'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <DyeingPrintingAssignVendor
                  initialFormData={initialFormData}
                  setInitialFormData={setInitialFormData}
                  // refetchDyeingPrintingData={refetchDyeingPrintingData}
                  handleClickOpen={handleClickOpen}
                  // showUpperDiv={showUpperDiv}
                /> */}
                <Grid
                  container
                  spacing={1}
                  width="Inherit"
                  sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Collection"
                      fullWidth
                      select
                      size="small"
                      name="collectionId"
                      onChange={handleChange}
                      value={formData.collectionId}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    >
                      {/* {collectionList.map((option) => (
                      <MenuItem
                        key={option.collectionId}
                        value={option.collectionId}
                      >
                        {option.collectionName}
                      </MenuItem>
                    ))} */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Order Number"
                      fullWidth
                      size="small"
                      name="orderNumber"
                      onChange={handleChange}
                      value={formData.orderNumber}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      size="small"
                      type="date"
                      label="Launch Date"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleChange}
                      fullWidth
                      disabled
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
                  <Grid item xs={12} md={8}>
                    <TextField
                      label="Remarks"
                      fullWidth
                      size="small"
                      name="remarks"
                      onChange={handleChange}
                      value={formData.remarks}
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                      InputLabelProps={{
                        sx: {
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Status"
                      fullWidth
                      size="small"
                      name="status"
                      onChange={handleChange}
                      value={formData.status}
                      // defaultValue="InProcess"
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={initialRows}
                      iColumns={columns}
                      // disableDelete={true}
                      // setInitialData={setInitialData}
                      // setIsEdit={setIsEdit}
                      // checkboxSelection={true}
                      // onRowSelectionModelChange={handleRowSelectionModelChange}
                      // rowSelectionModel={rowSelectionModel}
                    />
                    {/* <div style={{ height: 400, width: '100%' }}>
                      <DataGrid
                        rows={initialRows}
                        columns={columns}
                        // apiRef={apiRef}
                        // checkboxSelection
                        // onRowSelectionModelChange={handleRowSelectionModelChange}
                        // rowSelectionModel={rowSelectionModel}
                      />
                    </div> */}
                  </Grid>
                </Grid>{' '}
              </DialogContent>
            </Dialog>
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
