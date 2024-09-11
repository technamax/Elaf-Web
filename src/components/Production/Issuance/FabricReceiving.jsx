import { useState, useEffect, useCallback } from 'react';
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
  DialogContentText,
  ButtonGroup
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import {
//   DataGrid,
//   GridToolbarContainer,
//   useGridApiRef
// } from '@mui/x-data-grid';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

import {
  useGetProductionProcessListQuery,
  useGetFabricForProductionByCollectionIdQuery,
  useGetStockReceivingByProductionHeaderIdQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';

import Receive from './Receive';
import * as React from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { style, width } from '@mui/system';
const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const FabricReceiving = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [initialFormData, setInitialFormData] = useState([]);
  const [fabrics, setFabrics] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
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
    processTypeId: 1222,
    itpId: '',
    status: 2,
    startDate: new Date().toISOString(),
    appId: user.appId,
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
  const { data: stockData, refetch: refetchStockData } =
    useGetStockReceivingByProductionHeaderIdQuery(formData.productionHeaderId, {
      skip: !formData.productionHeaderId // Skip the query if no collection is selected
    });
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
  }, [stockData, refetchStockData, formData.productionHeaderId]);
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
    } else if (name === 'itpId') {
      const selectedItp = itps.find(
        (collection) => collection.itpId === parseInt(value)
      );
      setFormData({
        ...formData,
        itpId: value,
        noOfItems: selectedItp ? selectedItp.noOfItems : '',
        issuanceDate: selectedItp ? selectedItp.issuanceDate : '',
        issuanceName: selectedItp ? selectedItp.issuanceName : ''
        // status: selectedItp ? selectedItp.status : ''
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
        'http://100.42.177.77:81/api/StockReceiving/FetchItpByAppIdList?appId=1'
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
        'http://100.42.177.77:81/api/StockReceiving/SaveStockReceivingHeader',
        formData
      );
      console.log('Save response:', response.data);
      refetchStockData();
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
  const [open2, setOpen2] = React.useState(false);
  const [stockId, setStockId] = React.useState(null);
  const [stockView, setStockView] = React.useState(null);

  const handleClickOpen = async (data) => {
    setInitialFormData(data);
    setStockId(data.stockId);
    try {
      const response = await axios.get(
        `http://100.42.177.77:81/api/Production/GetProductionFabricDetailByProductionHeaderId?productionHeaderId=${data.productionHeaderId}&status=2`
      );

      setFabrics(
        response.data.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    } catch (error) {
      console.error('Error fetching ITP:', error);
    }
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    console.log('rowdata', data);
    try {
      const response = await axios.get(
        `http://100.42.177.77:81/api/StockReceiving/GetStockByStatusList?productionId=${data.productionId}&status=8`
      );
      console.log('response', response);
      const result = response.data.result;
      console.log('API Data Result:', result); // Log to check the data structure

      setStockView(
        result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    } catch (error) {
      console.error('Error fetching ITP:', error);
    }
    setOpen2(true);
  };

  console.log('stockView', stockView);
  const handleClose = () => {
    setOpen(false);
    setInitialFormData({});
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'collectionName',
      headerName: 'Production'
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
    },
    {
      field: 'issuanceName',
      headerName: 'ITP'
    },
    {
      field: 'statusDesc',
      headerName: 'Status'
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
              disabled={params.row.statusId === 8}
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

  const viewColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'barcode',
      headerName: 'Barcode'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },

    {
      field: 'quantity',
      headerName: 'Quantity Received',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'rate',
      headerName: 'Rate',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'tax',
      headerName: 'Tax'
    },
    {
      field: 'amount',
      headerName: 'Amount',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },

    {
      field: 'amountAfterTax',
      headerName: 'Amount After Tax',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    }
  ];

  // const handleSave = async () => {
  //   console.log('addForm', addForm);
  //   try {
  //     const response = await axios.post(
  //       'http://100.42.177.77:81/api/ITP/SaveStockReceiving',
  //       addForm
  //     );
  //     console.log('Save response:', response.data);
  //     // setInitialRows(
  //     //   response.data.result.map((row, index) => ({
  //     //     id: index + 1,
  //     //     ...row
  //     //   }))
  //     // );
  //     if (!response.data.success) {
  //       enqueueSnackbar(`${response.data.message} !`, {
  //         variant: 'error',
  //         autoHideDuration: 5000
  //       });
  //       console.log('response.message', response.data.message);
  //     } else {
  //       enqueueSnackbar(`${response.data.message} !`, {
  //         variant: 'success',
  //         autoHideDuration: 5000
  //       });
  //     }

  //     // refetchDyeingPrintingData();
  //     // setAccordionExpanded(false);
  //   } catch (error) {
  //     // Handle error (e.g., show an error message)

  //     console.error('Error saving data:', error);
  //     enqueueSnackbar('FAILED: Unable to save', {
  //       variant: 'error',
  //       autoHideDuration: 5000
  //     });
  //     // Handle error (e.g., show an error message)
  //   }
  // };

  return (
    <Card variant="outlined">
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        avatar={<VisibilityOutlinedIcon />}
        title="Fabric Receiving from ITP"
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
        {/* <Grid item xs={12} md={3}>
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
        </Grid> */}
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
            name="itpId"
            value={formData.itpId}
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
                {'Save Details'}
              </Typography>
              <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
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
                <Grid item xs={12}>
                  <Receive
                    fabrics={fabrics}
                    setFabrics={setFabrics}
                    stockId={stockId}
                    handleClose={handleClose}
                    refetchStockData={refetchStockData}
                  />
                </Grid>
              </Grid>
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
                {'View Stock Receiving Details'}
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
                <Grid item xs={12}>
                  <ReuseableDataGrid
                    initialRows={stockView}
                    iColumns={viewColumns}
                    hideAction
                  />
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FabricReceiving;
