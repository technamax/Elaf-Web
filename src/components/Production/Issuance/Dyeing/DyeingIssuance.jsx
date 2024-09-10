import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import '../../../../assets/scss/style.scss';
import SSRSReport from '../../../../views/DetailedReports/Reports';
import {
  useGetDyeingPoHeaderListQuery,
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPODetailsPoIdQuery,
  useGetProductionFabricDetailByProductionIdandStatusQuery,
  useGetIssuanceByPoIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetWareHouseLocationsQuery,
  useGetLookUpListQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import DyeingIssuanceView from './DyeingIssuanceView';
//////
import * as React from 'react';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
// import EmbroideryIssuance from './../../../../views/Production/EmbroideryIssuance';

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

const DyeingIssuance = ({ rowData }) => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const [poDetails, setPoDetails] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [savedRows, setSavedRows] = useState([]); // New state for tracking saved rows

  const Quantity = poDetails
    .reduce((sum, row) => sum + (row.quantity ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);
  const totalAssign = poDetails
    .reduce((sum, row) => sum + (row.issuanceQuantity ?? 0), 0)
    .toFixed(2);
  console.log('quantities', quantities);
  const [formData, setFormData] = useState({
    issuanceId: 0,
    poId: rowData?.poId || 0,
    productionId: rowData?.productionId || '',
    issuanceDate: rowData?.issuanceDate || null,
    expectedReturnDate: rowData?.expectedReturnDate || '',
    processTypeId: 1223,
    fabricId: rowData?.fabricId || '',
    fabricName: rowData?.fabricName || '',
    vendorId: rowData?.vendorId || '',
    vendorName: rowData?.vendorName || '',
    shrinkage: rowData?.shrinkage || '',
    wastage: rowData?.wastage || '',
    locationId: rowData?.locationId || '',
    fullLocation: rowData?.fullLocation || '',

    poQuantity: 0,
    assignQuantity: 0,
    stockReceived: 0,
    remainingQuantity: 0,

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      // poId: rowData?.poId || 0,
      poQuantity: Quantity || 0,
      productionHeaderId: quantities.productionHeaderId || 0,
      assignQuantity: quantities.itpQuantity || 0,
      stockReceived: quantities.stockReceived || 0,
      remainingQuantity: prevFormData.stockReceived - totalAssign || 0
    }));
  }, [rowData, poDetails, quantities]);

  const [fabricsList, setFabricsList] = useState([]);
  const [vendorsList, setVendorsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [issuanceList, setIssuanceList] = useState([]);

  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetDyeingPoHeaderListQuery();
  const { data: poDetailsData, refetch: refetchPoDetailsData } =
    useGetDyeingPODetailsPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  const { data: issuanceData, refetch: refetchIssuanceData } =
    useGetIssuanceByPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  const { data: dyeingPoData, refetch: refetchDyeingPoData } =
    useGetDyeingPoHeaderListQuery();
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();
  const { data: fabricsData, refetch: refetchFabricsData } =
    useGetFabricForProductionByProductionIdQuery(formData.productionId, {
      skip: !formData.productionId // Skip the query if no collection is selected
    });
  const { data: vendorsData, refetch: refetchVendorsData } =
    useGetVendorsByFabricIDQuery(formData.fabricId, {
      skip: !formData.fabricId // Skip the query if no collection is selected
    });
  const { data: quantityData, refetch: refetchquantityData } =
    useGetProductionFabricDetailByProductionIdandStatusQuery(
      { productionId: formData.productionId, fabricId: formData.fabricId },
      {
        skip: !formData.fabricId || !formData.productionId // Skip the query if no collection is selected
      }
    );
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (poDetailsData?.result === null) {
      setPoDetails([]);
      return;
    }
    if (poDetailsData) {
      setPoDetails(
        poDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poDetailsData, refetchPoDetailsData]);
  useEffect(() => {
    if (dyeingPoData) {
      setInitialRows(
        dyeingPoData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [dyeingPoData, refetchDyeingPoData]);
  useEffect(() => {
    if (issuanceData) {
      setIssuanceList(
        issuanceData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [issuanceData, refetchIssuanceData]);
  useEffect(() => {
    if (fabricsData) {
      setFabricsList(
        fabricsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [fabricsData, refetchFabricsData]);
  useEffect(() => {
    if (quantityData) {
      setQuantities(
        quantityData.result[0]
        // .map((row, index) => ({
        //   id: index + 1,
        //   ...row
        // }))
      );
    }
  }, [quantityData, refetchquantityData]);
  useEffect(() => {
    if (vendorsData) {
      setVendorsList(
        vendorsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [vendorsData, refetchVendorsData]);
  useEffect(() => {
    if (locationsData) {
      setLocationsList(
        locationsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [locationsData]);
  useEffect(() => {
    if (productionBatchData) {
      setProductions(
        productionBatchData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [productionBatchData, refetchProductionBatchData]);

  console.log('quantities', quantities);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'poId') {
      const selectedPO = productions.find((po) => po.poId === parseInt(value));

      setFormData({
        ...formData,
        poId: value,
        shrinkage: selectedPO ? selectedPO.shrinkage : '',
        productionId: selectedPO ? selectedPO.productionId : '',
        issuanceDate: selectedPO ? selectedPO.issuanceDate : null,
        expectedReturnDate: selectedPO ? selectedPO.expectedReturnDate : '',
        fabricId: selectedPO ? selectedPO.fabricId : '',
        vendorId: selectedPO ? selectedPO.vendorId : '',
        locationId: selectedPO ? selectedPO.locationId : '',
        fullLocation: selectedPO ? selectedPO.fullLocation : '',
        fabricName: selectedPO ? selectedPO.fabricName : '',
        vendorName: selectedPO ? selectedPO.vendorName : '',
        wastage: selectedPO ? selectedPO.wastage : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    // if (
    //   !formData.issuanceTransactionDetails ||
    //   formData.issuanceTransactionDetails.length === 0
    // ) {
    //   enqueueSnackbar('Please select at least one row before saving.', {
    //     variant: 'warning'
    //   });
    //   return;
    // }

    if (rowSelectionModel.length !== poDetails.length) {
      enqueueSnackbar('Please select all rows before saving.', {
        variant: 'warning'
      });
      return;
    }

    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/Issuance/IssuanceToVendor',
        formData
      );

      console.log('Save response:', response.data);
      enqueueSnackbar('Data saved successfully!', { variant: 'success' });
      setSavedRows((prev) => [...prev, ...formData.issuanceTransactionDetails]);
      refetchIssuanceData();
    } catch (error) {
      console.error('Error saving data:', error);

      // Show error snackbar
      enqueueSnackbar('Error saving data!', { variant: 'error' });
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
      field: 'description',
      headerName: 'Description',
      flex: 1
    },

    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
    }
  ];
  console.log('productions', productions);

  const handleCellEdit = React.useCallback(
    (params) => {
      const { id, field, value } = params;
      console.log('Editing cell:', params); // Debugging line

      setPoDetails((prevRows) =>
        prevRows.map((row) => {
          if (row.id === id) {
            const updatedRow = {
              ...row,
              [field]: value,
              issuanceId: 0,
              issuanceDetId: 0,
              appId: user.appId,
              createdOn: new Date().toISOString(),
              createdBy: user.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: user.empId
            };

            // Recalculate the totalBeforeTax when rate or quantity is updated
            // if (field === 'rate' || field === 'quantity') {
            //   updatedRow.totalBeforeTax = updatedRow.rate * updatedRow.quantity;
            // }

            // // Optionally, update totalAfterTax if it's a function of totalBeforeTax and tax
            // if (field === 'tax' || field === 'rate' || field === 'quantity') {
            //   updatedRow.totalAfterTax =
            //     updatedRow.totalBeforeTax +
            //     updatedRow.totalBeforeTax * (updatedRow.tax / 100);
            // }

            return updatedRow;
          }
          return row;
        })
      );
    },
    [setPoDetails, user.appId, user.empId]
  );
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      // poId: rowData?.poId || 0,
      // poQuantity: Quantity || 0,
      // assignQuantity: quantities.itpQuantity || 0,
      // stockReceived: quantities.stockReceived || 0,
      remainingQuantity: prevFormData.stockReceived - totalAssign || 0
    }));
  }, [handleCellEdit]);
  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    // {
    //   field: 'total',
    //   headerName: 'Planned Qty'
    // },
    {
      field: 'quantity',
      headerName: 'Total Qty',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Issuance Qty',
      // flex: 1,
      // width: 'auto',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.issuanceQuantity || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'issuanceQuantity',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    }
  ];

  const fetchData = () => {
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      includeOutliers: true
    });
  };
  React.useEffect(() => {
    fetchData();
  });

  const [selectedDesigns, setSelectedDesigns] = useState([]);

  const handleRowSelectionModelChange = React.useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);

      const selectedDesigns = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData
            ? {
                ...rowData
              }
            : null;
        })
        .filter((row) => row !== null); // Filter out any null values

      console.log('selectedDesigns', selectedDesigns);
      setSelectedDesigns(selectedDesigns);
    },
    [apiRef]
  );

  useEffect(() => {
    // Filter the fabrics to include only the selected rows
    const selectedFabrics = poDetails.filter((fabric) =>
      rowSelectionModel.includes(fabric.id)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      issuanceTransactionDetails: selectedFabrics
    }));
  }, [poDetails, rowSelectionModel]);

  const isRowSelectable = (params) => {
    return !savedRows.some((row) => row.id === params.id);
  };

  console.log('poDetails', poDetails);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [iss, setIss] = React.useState(false);

  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setIss(data);
  };
  // console.log('terms condition', vId);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  // const handleIssuanceClick = (rowData) => {
  //   navigate('/Production/Issuance', { state: { data: rowData, tab: 1 } });
  // };
  const formatNumber = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    return new Intl.NumberFormat().format(value);
  };

  const printOgp = (ogpData) => {
    const newWindow = window.open('', '', 'width=800,height=600');
    const doc = newWindow.document;

    doc.write(`
      <html>
        <head>
          <title>Outward Gate Pass</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px; border: 1px solid black; text-align: left; }
            .header { margin-bottom: 20px; }
            .header td { border: none; padding: 5px 0; }
          </style>
        </head>
        <body>
          <h2>Elaf</h2>
          <h3>OUTWARD GATE PASS</h3>
  
          <table class="header">
            <tr>
              <td><strong>OGP #:</strong> ${ogpData.vIssuanceTransaction.ogpNumber}</td>
              <td><strong>Process:</strong> ${ogpData.vIssuanceTransaction.processTypeName}</td>
            </tr>
            <tr>
              <td><strong>OGP Date:</strong> ${new Date(ogpData.vIssuanceTransaction.ogpDate).toLocaleDateString()}</td>
              <td><strong>Stage:</strong> Work in Process</td>
            </tr>
            <tr>
              <td><strong>Vendor Name:</strong> ${ogpData.vIssuanceTransaction.vendorName}</td>
              <td><strong>Vendor Contact:</strong> TBD</td>
            </tr>
            <tr>
              <td><strong>Purpose:</strong> Dyeing</td>
              <td></td>
            </tr>
          </table>
  
          <table>
            <thead>
              <tr>
                <th>PO #</th>
                <th>Description</th>
                <th>Design #</th>
                <th>UOM</th>
                <th>Qty Required</th>
                <th>Shrinkage</th>
                <th>Total Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${ogpData.vIssuanceTransactionDetailsList
                .map(
                  (item) => `
                <tr>
                  <td>${item.poId}</td>
                  <td>${item.fabricName}</td>
                  <td>${item.fabricCount}</td>
                  <td>${item.uomName}</td>
                  <td>${item.issuanceQuantity}</td>
                  <td>-</td>
                  <td>${item.issuanceQuantity}</td>
                  <td>${item.rate}</td>
                  <td>${item.totalAfterTax}</td>
                </tr>
              `
                )
                .join('')}
            </tbody>
          </table>
        </body>
      </html>
    `);

    doc.close();
    newWindow.print();
  };

  const handlePrintOgp = async (rowData) => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/Issuance/GetOutwardGatePassByIssuanceId`,
        {
          params: { issuanceId: rowData.issuanceId }
        }
      );

      if (response.data.success) {
        const ogpData = response.data.result;
        // Call the function to print the data
        printOgp(ogpData);
      } else {
        console.error('Failed to fetch OGP data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching OGP data:', error);
    }
  };

  const issuanceColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'issuanceId',
      headerName: 'Issuance'
      // flex: 1
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Issuance'
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
      field: 'expectedReturnDate',
      headerName: 'Expected Return Date',
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
      field: 'fabricCount',
      headerName: 'Fabrics'
    },
    {
      field: 'statusName',
      headerName: 'Status'
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              View Details
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              OGP
            </Button>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handlePrintOgp(params.row)}
            >
              Print OGP
            </Button> */}
          </ButtonGroup>
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
          title="Dyeing Issuance"
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
              fullWidth
              select
              label="Production"
              name="poId"
              value={formData.poId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.poId} value={option.poId}>
                  {option.poIdName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              // type="date"
              label="Issuance Date"
              name="issuanceDate"
              value={
                !formData.issuanceDate
                  ? null
                  : new Date(formData.issuanceDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      }
                    )
              }
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
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              // type="date"
              label="Planning Date"
              name="expectedReturnDate"
              value={
                !formData.issuanceDate
                  ? null
                  : new Date(formData.expectedReturnDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      }
                    )
              }
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.expectedReturnDate}
              // helperText={formErrors.expectedReturnDate}
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
              // select
              label="Select Fabric"
              name="fabricName"
              value={formData.fabricName}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {/* {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Vendor"
              fullWidth
              size="small"
              name="vendorName"
              onChange={handleChange}
              value={formData.vendorName}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Shrinkage"
              fullWidth
              size="small"
              name="shrinkage"
              onChange={handleChange}
              value={formData.shrinkage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Wastage"
              fullWidth
              size="small"
              name="wastage"
              onChange={handleChange}
              value={formData.wastage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Select Location"
              name="fullLocation"
              value={formData.fullLocation}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="PO Quantity"
              name="poQuantity"
              value={formatNumber(formData.poQuantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Total Quantity"
              name="assignQuantity"
              value={formatNumber(formData.assignQuantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Available Quantity"
              name="stockReceived"
              value={formatNumber(formData.stockReceived)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Remaining Quantity"
              name="remainingQuantity"
              value={formatNumber(formData.remainingQuantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={poDetails}
              columns={designsColumns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              checkboxSelection
              isRowSelectable={isRowSelectable} // Disable saved rows
              onRowSelectionModelChange={handleRowSelectionModelChange}
              rowSelectionModel={rowSelectionModel}
            />
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Issuance"
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
              initialRows={issuanceList}
              iColumns={issuanceColumns}
              hideAction
              refetchIssuanceData={refetchIssuanceData}
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
                  {'View Issuance Details'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <DyeingIssuanceView
                  iss={iss}
                  handleClose={handleClose}
                  refetchIssuanceData={refetchIssuanceData}
                />
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
                  paddingY: '4px',
                  mb: 2.5
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
                  {'Create OGP'}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <DyeingIssuanceView
                  iss={iss}
                  handleClose={handleClose}
                  refetchIssuanceData={refetchIssuanceData}
                /> */}
                <SSRSReport rId={13} paramIssuanceId={iss.issuanceId} />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default DyeingIssuance;