import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Box,
  Card,
  CardHeader,
  MenuItem,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button
} from '@mui/material';
// import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import { useUser } from 'context/User';
import {
  useGetCentralizedPOHeaderListForIssuanceQuery,
  useGetEmbroideryPOListforIssuanceByProductionIdQuery,
  useGetEmbroideryDesignListforIssuanceByPoIdQuery,
  useGetEmbroideryPODetailsByPlanningHeaderIdQuery
} from 'api/store/Apis/embrioderyPOApi';
import {
  useGetLookUpListQuery,
  useGetWareHouseLocationsQuery
} from 'api/store/Apis/lookupApi';
import { useSnackbar } from 'notistack';
import ReusableTable from './ReusableTable';

function Row(props) {
  const headCells = [
    { id: 'id', numeric: false, label: 'Sr#' },
    { id: 'componentName', numeric: false, label: 'Component' },
    { id: 'fabricName', numeric: false, label: 'Fabric' },
    { id: 'colorName', numeric: true, label: 'Color' },
    { id: 'totalPcs', numeric: true, label: 'Total Pcs' },
    { id: 'availableQty', numeric: true, label: 'Total Quantity' },
    { id: 'repeats', numeric: true, label: 'PO Repeats' },
    { id: 'assignRpt', numeric: true, label: 'Assign Repeats' }, // Removed trailing space
    { id: 'noOfHeadName', numeric: true, label: 'No Of Head' },
    { id: 'cuttingSize', numeric: true, label: 'Cutting Size' },
    { id: 'itemsPerRepeat', numeric: true, label: 'Items Per Repeat' }
  ];
  const { row, data, setSelectedRows } = props;
  const [open, setOpen] = React.useState(false);
  console.log('issuanceTransactionDesignDetails', data);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fabricName}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Components
              </Typography>
              {/* <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>vendorName</TableCell>
                    <TableCell>issuanceDate</TableCell>
                    <TableCell align="right">receivedQty</TableCell>
                    <TableCell align="right">transactionType</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.vendorName}
                      </TableCell>
                      <TableCell>{historyRow.issuanceDate}</TableCell>
                      <TableCell align="right">
                        {historyRow.receivedQty}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.transactionType}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
              <ReusableTable
                setSelectedRows={setSelectedRows}
                rows={data}
                headCells={headCells}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const EmbroideryIssuance = () => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  console.log('selectedRows', selectedRows);
  const [formData, setFormData] = useState({
    issuanceId: 0,
    productionId: '',
    poId: '',
    planningHeaderId: '',
    productionHeaderId: '',
    processTypeId: 1225,
    issuanceDate: new Date().toISOString().slice(0, 10),
    expectedReturnDate: '',
    vendorId: '',
    fabricId: null,
    remarks: '',
    locationId: '',
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const { data: poHeaders } =
    useGetCentralizedPOHeaderListForIssuanceQuery(1225);
  const { data: lookUpData, refetch: refetchlookUpData } =
    useGetLookUpListQuery();
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();
  const { data: poData, refetch: refetchPoData } =
    useGetEmbroideryPOListforIssuanceByProductionIdQuery(
      { productionId: formData.productionId, processTypeId: 1225 },
      {
        skip: !formData.productionId
      }
    );
  const { data: designData, refetch: refetchDesignData } =
    useGetEmbroideryDesignListforIssuanceByPoIdQuery(
      { poId: formData.poId, processTypeId: 1225 },
      {
        skip: !formData.poId
      }
    );
  const { data: poDetailsData, refetch: refetchPoDetailsData } =
    useGetEmbroideryPODetailsByPlanningHeaderIdQuery(
      { planningHeaderId: formData.planningHeaderId, processTypeId: 1225 },
      { skip: !formData.planningHeaderId }
    );

  console.log('poDetailsData', poDetailsData);
  useEffect(() => {
    if (poDetailsData) {
      setResult(
        Object.values(
          (poDetailsData?.result || []).reduce((acc, curr) => {
            if (!acc[curr.fabricName]) {
              acc[curr.fabricName] = {
                fabricName: curr.fabricName,
                issuanceTransactionDesignDetails: []
              };
            }
            acc[curr.fabricName].issuanceTransactionDesignDetails.push(curr);
            return acc;
          }, {})
        )
      );
    }
  }, [poDetailsData, refetchPoDetailsData]);
  // const result = Object.values(
  //   (poDetailsData?.result || []).reduce((acc, curr) => {
  //     if (!acc[curr.fabricName]) {
  //       acc[curr.fabricName] = {
  //         fabricName: curr.fabricName,
  //         issuanceTransactionDesignDetails: []
  //       };
  //     }
  //     acc[curr.fabricName].issuanceTransactionDesignDetails.push(curr);
  //     return acc;
  //   }, {})
  // );

  console.log('result', result);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors((prev) => ({ ...prev, [name]: '' }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the selected field is 'poId', set the corresponding 'productionHeaderId'
    if (name === 'poId') {
      const selectedPo = poData?.result?.find((po) => po.poId === value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        productionHeaderId: selectedPo ? selectedPo.productionHeaderId : '' // Set the productionHeaderId based on selected poId
      }));
    } else {
      // For other fields, just update the form data as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }

    // Clear the errors for the field being edited
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateFields = () => {
    let isValid = true;
    const errors = { startDate: '', endDate: '', alertTypes: '' };

    if (!formData.firstName) {
      errors.firstName = 'This field is required';
      isValid = false;
    }
    if (!formData.userName) {
      errors.userName = 'This field is required';
      isValid = false;
    }
    if (!formData.passwordHash) {
      errors.passwordHash = 'This field is required';
      isValid = false;
    }
    if (!formData.isActive) {
      errors.isActive = 'This field is required';
      isValid = false;
    }
    if (formData.userCompaniesList.length === 0) {
      errors.userCompaniesList = 'This field is required';
      isValid = false;
    }

    setErrors(errors);

    // setTimeout(() => {
    //   setErrorMessages({ startDate: '', endDate: '', alertTypes: '' });
    // }, 3000);
    return isValid;
  };
  const handleSave = async () => {
    // if (rowSelectionModel.length === 0) {
    //   // Show a snackbar warning if no rows are selected
    //   enqueueSnackbar('Please select at least one row before saving!', {
    //     variant: 'warning',
    //     autoHideDuration: 5000
    //   });
    //   return;
    // }

    console.log('formData', {
      ...formData,
      IssuanceTransactionDesignDetails: selectedRows.map((row) => ({
        ...row,
        issuanceDesignDetId: 0,
        plannedRpt: row.repeats
      }))
    });
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/Issuance/SaveIssuance',
        {
          ...formData,
          IssuanceTransactionDesignDetails: selectedRows.map((row) => ({
            ...row,
            issuanceDesignDetId: 0,
            plannedRpt: row.repeats
          }))
        }
      );

      console.log('Save response:', response.data);
      // refetchDyeingPoData();
      // refetchPoHeaderData();
      // Check for success
      if (response.data.success) {
        // Show a success snackbar if the save operation was successful
        enqueueSnackbar('Data saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
        // setSavedRowIds((prev) => new Set([...prev, ...rowSelectionModel]));

        // Reset formData and related states
        setFormData({
          // poId: 0,
          // productionId: '',
          ...formData,
          issuanceDate: '',
          expectedReturnDate: '',
          // fabricId: '',
          processTypeId: '',
          vendorId: '',
          // shrinkage: '',
          // wastage: '',
          locationId: '',
          appId: user.appId,
          createdOn: new Date().toISOString(),
          createdBy: user.empId,
          lastUpdatedOn: new Date().toISOString(),
          lastUpdatedBy: user.empId
        });
        // setFabrics([]);
        // refetchDyeingPoData();
        // refetchPoHeaderData();
        // setRowSelectionModel([]);
        // refetchcolumnsData();
        // setIsEdit(false);
      } else {
        // Show an error snackbar if the save operation was not successful
        enqueueSnackbar(`Save failed: ${response.data.message}`, {
          variant: 'error',
          autoHideDuration: 5000
        });
      }
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Failed to save data. Please try again.', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Embroidery Issuance"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Select Production"
              variant="outlined"
              name="productionId"
              value={formData.productionId}
              onChange={handleChange}
              size="small"
            >
              {poHeaders?.result?.map((option) => (
                <MenuItem key={option.productionId} value={option.productionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Select PO"
              variant="outlined"
              name="poId"
              value={formData.poId}
              onChange={handleChange}
              size="small"
            >
              {poData?.result?.map((option) => (
                <MenuItem key={option.poId} value={option.poId}>
                  {option.poId}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Select Design"
              variant="outlined"
              name="planningHeaderId"
              value={formData.planningHeaderId}
              onChange={handleChange}
              size="small"
            >
              {designData?.result?.map((option) => (
                <MenuItem
                  key={option.planningHeaderId}
                  value={option.planningHeaderId}
                >
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              type="date"
              label="Issuance Date"
              name="issuanceDate"
              value={formData.issuanceDate}
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
              label="Expected Return"
              name="expectedReturnDate"
              value={formData.expectedReturnDate}
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
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Select Vendor"
              variant="outlined"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              size="small"
            >
              {lookUpData?.result[0].vendorList?.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Location"
              name="locationId"
              value={formData.locationId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {locationsData?.result.map((option) => (
                <MenuItem key={option.locationId} value={option.locationId}>
                  {option.section +
                    '.' +
                    option.aisle +
                    '.' +
                    option.rack +
                    '.' +
                    option.bin}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              // select
              label="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" onClick={handleSave} color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ paddingY: 2 }}>
          <Grid item xs={12}>
            <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Fabric</TableCell>
                    {/* <TableCell>id</TableCell>
                    <TableCell>sacele</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(Array.isArray(result)
                    ? result.map((row, index) => ({ id: index + 1, ...row }))
                    : []
                  ).map((row) => (
                    <Row
                      key={row.fabricName} // Ensure `fabricName` is unique for the key
                      row={row}
                      setSelectedRows={setSelectedRows}
                      data={row.issuanceTransactionDesignDetails.map(
                        (row, index) => ({ id: index + 1, ...row })
                      )} // Use row's property here
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default EmbroideryIssuance;
