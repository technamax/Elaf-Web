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
  useGetDesignListFromCompletedCollectionIdQuery
} from 'api/store/Apis/productionApi';
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

const ReceivingFromBX = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [initialFormData, setInitialFormData] = useState({});
  console.log('initialFormData', initialFormData);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    issuanceNo: initialFormData?.issuanceNo || 0,
    issuanceName: initialFormData?.issuanceName || '',
    issuanceDate: initialFormData?.issuanceDate || ''
    // appId: user.appId,
    // createdOn: new Date().toISOString(),
    // createdBy: user.empId,
    // lastUpdatedOn: new Date().toISOString(),
    // LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      issuanceNo: initialFormData?.issuanceNo || 0,
      issuanceName: initialFormData?.issuanceName || '',
      issuanceDate: initialFormData?.issuanceDate || ''
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

  const {
    data: productionBatchDetailsData,
    refetch: refetchProductionBatchDetailsData
  } = useGetProductionBatchDetailsByProductionidQuery(formData.productionId, {
    skip: !formData.productionId // Skip the query if no collection is selected
  });

  const [collectionList, setCollectionList] = useState([]);

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
  }, [stockDetailsData, refetchStockDetailsData]);
  console.log('initialRows', initialRows);
  console.log('batchDetailsRows', batchDetailsRows);

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

  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen = (data) => {
    setInitialFormData(data);
    setOpen(true);
  };
  const handleClickOpen2 = (data) => {
    setInitialFormData(data);
    setOpen2(true);
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
          <ButtonGroup variant="text" size="small">
            <IconButton
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              <MoveToInboxIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              <VisibilityOutlinedIcon />
            </IconButton>
          </ButtonGroup>
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

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="StockReceiving"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Fetch
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
                  {'2 > View det '}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <DyeingPrintingAssignVendor
                  initialFormData={initialFormData}
                  setInitialFormData={setInitialFormData}
                  refetchDyeingPrintingData={refetchDyeingPrintingData}
                  handleClickOpen={handleClickOpen}
                  showUpperDiv={showUpperDiv}
                /> */}
                <div>view 2</div>
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

export default ReceivingFromBX;
