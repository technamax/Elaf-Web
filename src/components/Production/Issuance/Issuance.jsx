import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  FormControl,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

import {
  useGetProductionProcessListQuery,
  useGetFabricForProductionByCollectionIdQuery,
  useGetStockReceivingByProductionHeaderIdQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';

const Issuance = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [initialFormData, setInitialFormData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itps, setItps] = useState([]);
  const [responseData, setResponseData] = useState([]);
  console.log('responseData', responseData);

  const [formData, setFormData] = useState({
    productionId: 0,
    productionHeaderId: 0,
    // collectionId: '',
    processTypeId: '',
    ITPId: '',
    status: 7,
    startDate: new Date().toISOString(),
    // appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  const [addForm, setAddForm] = useState({
    issuanceNo: initialFormData.issuanceNo || 0,
    issuanceName: initialFormData.issuanceName || '',
    barcode: initialFormData.barcode || '',
    itpQuantity: responseData.itpQuantity || '',
    requiredQuantity: initialFormData.quantity || '',
    uom: responseData.uomName || '',
    issuanceDate: initialFormData.issuanceDate || '',
    fabricName: initialFormData.fabricName || '',
    rate: responseData.rate || '',
    tax: responseData.tax || '',
    amount: responseData.amount || '',
    amountAfterTax: '',
    remarks: '',

    // appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  useEffect(() => {
    setAddForm({
      // stockDetId: 0,
      stockId: initialFormData.stockId || 0,
      itpDetId: responseData.itpDetId,
      issuanceNo: initialFormData.issuanceNo || 0,
      issuanceName: initialFormData.issuanceName || '',
      barcode: initialFormData.barcode || '',
      quantity: responseData.itpQuantity || '',
      requiredQuantity: initialFormData.quantity || '',
      uom: responseData.uomName || '',
      uomId: responseData.uomId || '',
      issuanceDate: initialFormData.issuanceDate || '',
      productName: initialFormData.fabricName || '',
      fabricId: initialFormData.fabricId || '',
      rate: responseData.rate || '',
      tax: responseData.tax || '',
      amount: responseData.amount || '',
      amountAfterTax: '',
      remarks: '',

      // appId: user.appId,
      createdOn: new Date().toISOString(),
      createdBy: user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialFormData, responseData]);
  console.log('addForm:', addForm);

  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: lookupData } = useGetLookUpListQuery();
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      setProcessType(data.productionProcessList);
      setVendor(data.vendorList);
    }
  }, [lookupData]);
  const [fabric, setFabric] = useState([]);

  const { data: fabricData } = useGetFabricForProductionByCollectionIdQuery(
    formData.collectionId,
    {
      skip: !formData.collectionId // Skip the query if no collection is selected
    }
  );
  const { data: stockData } = useGetStockReceivingByProductionHeaderIdQuery(
    formData.productionHeaderId,
    {
      skip: !formData.productionHeaderId // Skip the query if no collection is selected
    }
  );
  useEffect(() => {
    if (fabricData) {
      const data = fabricData.result;

      setFabric(data);
    }
  }, [fabricData]);

  const { data: ProductionProcessList } = useGetProductionProcessListQuery();
  const [productioncollectionList, setProductionCollectionList] = useState([]);
  useEffect(() => {
    if (ProductionProcessList) {
      const data = ProductionProcessList.result[0];

      setProductionCollectionList(
        ProductionProcessList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [ProductionProcessList]);
  useEffect(() => {
    if (stockData) {
      setInitialRows(
        stockData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [stockData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productionId') {
      const selectedCollection = productioncollectionList.find(
        (collection) => collection.productionId === parseInt(value)
      );
      setFormData({
        ...formData,
        productionId: value,
        productionHeaderId: selectedCollection
          ? selectedCollection.productionHeaderId
          : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
      setAddForm({ ...addForm, [name]: value });
    }
  };
  console.log('formData', formData);
  console.log('productioncollectionList', productioncollectionList);

  useEffect(() => {
    const calculateAmount = () => {
      const rate = parseFloat(addForm.rate) || 0;
      const itpQuantity = parseFloat(addForm.quantity) || 0;

      return (rate * itpQuantity).toFixed(2);
    };

    const calculateTotalWithGst = (totalExclGst, gst) => {
      return (totalExclGst * (1 + gst / 100)).toFixed(2);
    };

    const outputQty = calculateAmount();
    // const totalExclGst = calculateTotalExclGst();
    const gst = parseFloat(addForm.tax) || 0;
    const totalIncludingGst = calculateTotalWithGst(outputQty, gst);
    // const poPcs = parseFloat(formData.poPcs) || 0;
    // const unitRatePerPo = poPcs ? totalIncludingGst / poPcs : 0;

    setAddForm((prevData) => ({
      ...prevData,
      amount: outputQty,
      amountAfterTax: totalIncludingGst
      // TotalExclGst: totalExclGst,
      // TotalIncludingGst: totalIncludingGst,
      // UnitRatePerPo: unitRatePerPo.toFixed(2)
    }));
  }, [addForm.rate, addForm.itpQuantity, addForm.tax]);

  // const handleFetchITP = async () => {};
  const handleFetchITP = async () => {
    try {
      const response = await axios.get(
        'http://100.42.177.77:83/api/StockReceiving/FetchItpByAppIdList?appId=1'
      );

      setItps(
        response.data.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    } catch (error) {
      console.error('Error fetching ITP:', error);
    }
  };
  const handleStart = async () => {
    // console.log('stockData', stockData);
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/Production/StartFabricReceivingProcess',
        formData
      );
      console.log('Save response:', response.data);
      setInitialRows(
        response.data.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      // refetchDyeingPrintingData();
      // setAccordionExpanded(false);
    } catch (error) {
      // Handle error (e.g., show an error message)

      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to start Process', {
        variant: 'error',
        autoHideDuration: 5000
      });
      // Handle error (e.g., show an error message)
    }
  };
  console.log('itps', itps);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = async (data) => {
    setInitialFormData(data);
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/ITP/GetITPDetailsByITPId?itpId=${data.itpId}`
      );

      setResponseData(
        response.data.result[0]
        // .map((row, index) => ({
        //   id: index + 1,
        //   ...row
        // }))
      );
    } catch (error) {
      console.error('Error fetching ITP:', error);
    }
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
      field: 'fabricName',
      headerName: 'Fabric Name'
      // flex: 1
    },

    {
      field: 'barcode',
      headerName: 'Barcode'
      // flex: 1
    },
    {
      field: 'uomName',
      headerName: 'UOM'
      // flex: 1
    },
    {
      field: 'quantity',
      headerName: 'Required Quantity'
      // flex: 1
    },
    // {
    //   field: 'issuanceDate',
    //   headerName: 'Issuance Date',
    //   valueGetter: (params) => {
    //     const date = new Date(params);
    //     return date.toLocaleDateString('en-GB', {
    //       day: 'numeric',
    //       month: 'short',
    //       year: '2-digit'
    //     });
    //   }
    //   // flex: 1
    // },

    {
      field: 'View',
      headerName: 'View Details',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/*  <ButtonGroup variant="text" size="small"> */}
          <IconButton
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            <MoveToInboxIcon />
          </IconButton>
          {/* <IconButton
            color="primary"
            onClick={() => handleClickOpen2(params.row)}
          >
            <VisibilityOutlinedIcon />
          </IconButton> */}
          {/* </ButtonGroup> */}
        </div>
      )
    }
  ];
  const handleSave = async () => {
    console.log('addForm', addForm);
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/ITP/SaveStockReceiving',
        addForm
      );
      console.log('Save response:', response.data);
      // setInitialRows(
      //   response.data.result.map((row, index) => ({
      //     id: index + 1,
      //     ...row
      //   }))
      // );
      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      // refetchDyeingPrintingData();
      // setAccordionExpanded(false);
    } catch (error) {
      // Handle error (e.g., show an error message)

      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to save', {
        variant: 'error',
        autoHideDuration: 5000
      });
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Card variant="outlined">
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        avatar={<VisibilityOutlinedIcon />}
        title="Issuance"
        titleTypographyProps={{ style: { color: 'white' } }}
      ></CardHeader>
      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} textAlign="right" sx={{ mt: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleFetchITP}
            color="success"
          >
            Fetch ITP
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Production"
            fullWidth
            select
            size="small"
            name="productionId"
            onChange={handleChange}
            value={formData.productionId}
            required
            disabled={isEdit}
            InputLabelProps={{
              shrink: true,
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
                // fontWeight: 'bold' // Use fontWeight to set the font to bold
              }
            }}
            // error={!!formErrors.collectionName}
            // helperText={formErrors.collectionName}
          >
            {productioncollectionList.map((option) => (
              <MenuItem key={option.id} value={option.productionId}>
                {option.collectionName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Select Process"
            name="processTypeId"
            value={formData.processTypeId}
            onChange={handleChange}
            size="small"
            InputLabelProps={{
              shrink: true,
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {processType.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            type="date"
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            // error={!!formErrors.planningDate}
            // helperText={formErrors.planningDate}
            InputLabelProps={{
              shrink: true,
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Select ITP"
            name="ITPId"
            value={formData.ITPId}
            onChange={handleChange}
            size="small"
            InputLabelProps={{
              shrink: true,
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {itps.map((option) => (
              <MenuItem key={option.id} value={option.itpId}>
                {option.collectionName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button variant="contained" size="small" onClick={handleStart}>
            start Process
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={initialRows}
            iColumns={columns}
            // disableDelete={true}
            // setInitialData={setInitialData}
            // setIsEdit={setIsEdit}
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
                    value={addForm.issuanceNo}
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
                    value={addForm.issuanceName}
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
                    value={addForm.issuanceDate}
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
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Fabric Name"
                    fullWidth
                    size="small"
                    name="productName"
                    onChange={handleChange}
                    value={addForm.productName}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Barcode"
                    fullWidth
                    size="small"
                    name="barcode"
                    onChange={handleChange}
                    value={addForm.barcode}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Required Quantity"
                    fullWidth
                    size="small"
                    name="requiredQuantity"
                    onChange={handleChange}
                    value={addForm.requiredQuantity}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="ITP Quantity"
                    fullWidth
                    size="small"
                    name="quantity"
                    onChange={handleChange}
                    value={addForm.quantity}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="UOM"
                    fullWidth
                    size="small"
                    name="uom"
                    onChange={handleChange}
                    value={addForm.uom}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Rate"
                    fullWidth
                    size="small"
                    name="rate"
                    onChange={handleChange}
                    value={addForm.rate}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="TAX"
                    fullWidth
                    size="small"
                    name="tax"
                    onChange={handleChange}
                    value={addForm.tax}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Amount"
                    fullWidth
                    size="small"
                    name="amount"
                    onChange={handleChange}
                    value={addForm.amount}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Amount After Tax"
                    fullWidth
                    size="small"
                    name="amountAfterTax"
                    onChange={handleChange}
                    value={addForm.amountAfterTax}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Remarks"
                    fullWidth
                    size="small"
                    name="remarks"
                    onChange={handleChange}
                    value={addForm.remarks}
                    required
                    // error={!!formErrors.collectionName}
                    // helperText={formErrors.collectionName}
                  />
                </Grid>
                <Grid item xs={9} textAlign="right" sx={{ mt: 2 }}>
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>
                {/* <Grid item xs={12}>
                  <ReuseableDataGrid
                    initialRows={fabricDetails}
                    iColumns={fabricColumns}
                    hideAction
                  />
                </Grid> */}
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Issuance;
