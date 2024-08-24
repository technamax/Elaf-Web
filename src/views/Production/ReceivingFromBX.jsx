import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  ButtonGroup,
  MenuItem,
  Divider,
  Box,
  IconButton,
  Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
// import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import {
  useGetProductionBatchInProcessQuery,
  useGetProductionBatchDetailsByProductionidQuery,
  useGetBxStockHeaderListQuery,
  useGetBxStockHeaderDetailListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetPrePlanningFabricFromCollectionIdQuery,
  useGetProductionProcessListQuery,
  useGetVBxStockReceivingListQuery,
  useGetITPListByStatusQuery,
  useGetDesignListFromCompletedCollectionIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetLookUpListQuery,
  useGetStatusLookUpQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
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
import { useSnackbar } from 'notistack';

const ReceivingFromBX = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [initialFormData, setInitialFormData] = useState({});
  console.log('initialFormData', initialFormData);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    issuanceNo: initialFormData?.issuanceNo || 0,
    status: '',
    issuanceName: initialFormData?.issuanceName || '',
    issuanceDate:
      new Date(initialFormData?.issuanceDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      }) || null,
    collectionId: initialFormData?.collectionId || '',
    productionId: initialFormData?.productionId || ''
    // appId: user.appId,
    // createdOn: new Date().toISOString(),
    // createdBy: user.empId,
    // lastUpdatedOn: new Date().toISOString(),
    // LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      ...formData,
      issuanceNo: initialFormData?.issuanceNo || 0,
      issuanceName: initialFormData?.issuanceName || '',
      issuanceDate:
        new Date(initialFormData?.issuanceDate).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        }) || null,
      collectionId: initialFormData?.collectionId || '',
      productionId: initialFormData?.productionId || ''
    });
  }, [initialFormData, setInitialFormData]);
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

  const [initialRows, setInitialRows] = useState([]);
  const [batchDetailsRows, setBatchDetailsRows] = useState([]);

  const { data: stockData, refetch: refetchStockData } =
    useGetBxStockHeaderListQuery();
  const { data: stockDetailsData, refetch: refetchStockDetailsData } =
    useGetBxStockHeaderDetailListQuery();

  const { data: collectionData, refetch } =
    useGetProductionBatchForProcessingQuery();
  const { data: productionData, refetch: refetchProductionData } =
    useGetProductionProcessListQuery();

  const { data: bxStockData, refetch: refetchBxStockData } =
    useGetVBxStockReceivingListQuery(formData.productionId, {
      skip: !formData.productionId // Skip the query if no collection is selected
    });
  const { data: fabricData, refetch: refetchFabricData } =
    useGetPrePlanningFabricFromCollectionIdQuery(formData.collectionId, {
      skip: !formData.collectionId
    });
  const { data: itpData, refetch: refetchITPData } = useGetITPListByStatusQuery(
    formData.status,
    {
      skip: !formData.status
    }
  );
  const { data: statusData } = useGetStatusLookUpQuery();

  const [collectionList, setCollectionList] = useState([]);
  const [productionList, setProductionList] = useState([]);
  const [bxStockList, setBxStockList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [fabricDetails, setfabricDetails] = useState([]);
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
    if (itpData) {
      setInitialRows(
        itpData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [itpData, refetch]);
  useEffect(() => {
    if (statusData) {
      setStatusList(
        statusData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [statusData]);
  useEffect(() => {
    if (productionData) {
      setProductionList(
        productionData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [productionData, refetchProductionData]);
  useEffect(() => {
    if (bxStockData) {
      // refetchBxStockData();
      setBxStockList(
        bxStockData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [bxStockData, formData.productionId]);
  useEffect(() => {
    if (fabricData) {
      setfabricDetails(
        fabricData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [fabricData, refetch]);
  useEffect(() => {
    if (stockData) {
      setInitialRows(
        stockData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [stockData, refetchStockData]);
  useEffect(() => {
    if (stockDetailsData) {
      setBatchDetailsRows(
        stockDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
    const details = batchDetailsRows.map((det) => ({
      stockDetId: 0,
      stockId: 0,
      barcode: det.barcode,
      productName: det.productName,
      quantity: det.quantity,
      uom: det.uom,
      remarks: det.remarks
    }));
    setFormData({ ...formData, bxStockReceivingDetails: details });
  }, [stockDetailsData, refetchStockDetailsData, formData.collectionId]);
  console.log('initialRows', initialRows);
  console.log('fabricDetails', fabricDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );

      setFormData({
        ...formData,
        collectionId: value,
        productionId: selectedCollection ? selectedCollection.productionId : ''
        // orderNumber: selectedCollection ? selectedCollection.orderNumber : ''
        // status: selectedCollection ? selectedCollection.batchStatus : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFetch = async () => {
    console.log('stockData', stockData);
    refetchStockData();

    if (stockData) {
      setInitialRows(
        stockData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  };
  const handleSave = async () => {
    console.log('stockData', stockData);
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/BxStockReceiving/SaveBxStockReceiving',
        formData
      );
      console.log('Save response:', response.data);

      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar('Dyeing saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      // refetchDyeingPrintingData();
      // setAccordionExpanded(false);
    } catch (error) {
      // Handle error (e.g., show an error message)

      console.error('Error saving data:', error);
      enqueueSnackbar('Dyeing not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
      // Handle error (e.g., show an error message)
    }
  };

  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen = (data) => {
    setInitialFormData(data);
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setInitialFormData(data);
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/ITP/GetITPDetailsByITPId?itpId=${data.itpId}`
      );

      setBxStockList(
        response.data.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    } catch (error) {
      console.error('Error fetching ITP:', error);
    }
    setOpen2(true);
    // setFormData({ ...formData, productionId: '' });
  };
  const handleClose = () => {
    // setShowUpperDiv(true);
    setOpen(false);
    setInitialFormData({});
    // refetchDyeingPrintingData();

    // setDeleteId(null);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
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
      field: 'issuanceNo',
      headerName: 'Issuance No'
      // flex: 1
    },

    {
      field: 'issuanceName',
      headerName: 'Issuance Name'
      // flex: 1
    },
    {
      field: 'noOfItems',
      headerName: 'No. Of Items'
      // flex: 1
    },
    {
      field: 'status',
      headerName: 'Status'
      // flex: 1
    },
    {
      field: 'issuanceDate',
      headerName: 'Issuance Date',
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
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* <ButtonGroup variant="text" size="small"> */}
          {/* <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              <MoveToInboxIcon />
            </IconButton> */}
          <IconButton
            color="primary"
            onClick={() => handleClickOpen2(params.row)}
          >
            <VisibilityOutlinedIcon />
          </IconButton>
          {/* </ButtonGroup> */}
        </div>
      )
    }
  ];
  const detailsColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'barcode',
      headerName: 'Barcode'
      // flex: 1
    },

    {
      field: 'designNo',
      headerName: 'Design'
      // flex: 1
    },
    {
      field: 'productName',
      headerName: 'Product Name'
      // flex: 1
    },
    {
      field: 'quantity',
      headerName: 'Quantity'
      // flex: 1
    },
    {
      field: 'uom',
      headerName: 'uom'
      // flex: 1
    },
    {
      field: 'remarks',
      headerName: 'remarks'
      // flex: 1
    }
  ];
  const fabricColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'fabric',
      headerName: 'Fabric Name'
      // flex: 1
    },

    {
      field: 'total',
      headerName: 'Quantity from Planning'
      // flex: 1
    }
  ];
  const bxStockColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'barcode',
      headerName: 'Barcode'
      // flex: 1
    },

    {
      field: 'productName',
      headerName: 'Product Name'
      // flex: 1
    },
    {
      field: 'itpQuantity',
      headerName: 'Quantity'
      // flex: 1
    },
    {
      field: 'uomName',
      headerName: 'UOM'
      // flex: 1
    },
    {
      field: 'remarks',
      headerName: 'Remarks'
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
          title="Stock Receiving"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleFetch}>
              Fetch
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Status"
              fullWidth
              size="small"
              name="status"
              onChange={handleChange}
              value={formData.status}
              required
              select
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            >
              {statusList.map((option) => (
                <MenuItem key={option.statusId} value={option.statusId}>
                  {option.statusDesc}
                </MenuItem>
              ))}
            </TextField>
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
                      label="Issuance No"
                      fullWidth
                      size="small"
                      name="issuanceNo"
                      onChange={handleChange}
                      value={formData.issuanceNo}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Issuance Name"
                      fullWidth
                      size="small"
                      name="issuanceName"
                      onChange={handleChange}
                      value={formData.issuanceName}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      size="small"
                      // type="date"
                      label="Issuance Date"
                      name="issuanceDate"
                      value={formData.issuanceDate}
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

                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={batchDetailsRows}
                      iColumns={detailsColumns}
                      hideAction
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Collection"
                      fullWidth
                      size="small"
                      name="collectionId"
                      onChange={handleChange}
                      value={formData.collectionId}
                      required
                      select
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
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
                  <Grid item xs={9} textAlign="right" sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={fabricDetails}
                      iColumns={fabricColumns}
                      hideAction
                    />
                  </Grid>
                </Grid>{' '}
              </DialogContent>
            </Dialog>
            <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="xl">
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
                  {'Receiving View'}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>

                <Grid
                  container
                  spacing={1}
                  width="Inherit"
                  sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Production"
                      fullWidth
                      size="small"
                      name="productionId"
                      onChange={handleChange}
                      value={formData.productionId}
                      required
                      select
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    >
                      {productionList.map((option) => (
                        <MenuItem
                          key={option.productionId}
                          value={option.productionId}
                        >
                          {option.collectionName}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      size="small"
                      // type="date"
                      label="Issuance Date"
                      name="issuanceDate"
                      value={formData.issuanceDate}
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
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Receiving Date"
                      fullWidth
                      size="small"
                      name="issuanceName"
                      onChange={handleChange}
                      value={formData.issuanceName}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={bxStockList}
                      iColumns={bxStockColumns}
                      hideAction
                    />
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>{' '}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
    </Box>
  );
};

export default ReceivingFromBX;
