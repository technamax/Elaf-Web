import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Divider,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography
} from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetAdditionalProcessDetailsByAdditionalProcessIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

const EmbroideryAssignVendor = ({ handleClickOpen }) => {
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const theme = useTheme();

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.quantity ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);

  const [formData, setFormData] = useState({
    totalPcs: '',
    totalAmount: '',
    costPerComponent: '',
    isSolving: false,
    threadAdditional: [], // Initialize as an array
    threadStiches: '',
    threadRate: '',
    threadAmount: '',
    tillaStiches: '',
    tilaRate: '',
    tilaAmount: '',
    sequence: '',
    sequenceRate: '',
    sequenceAmount: '',
    solvingLayers: '',
    solvingInMeters: '',
    solvingRate: '',
    solvingAmount: ''
  });
  //   useEffect(() => {
  //     setFormData({
  //       ...formData,
  //       remainingPcsPerComponent:
  //         additionalProcessData.pcsPerComponent - Quantity || ''
  //     });
  //   }, [initialRows]);
  const { data: lookupData } = useGetLookUpListQuery();
  //   const {
  //     data: additionalProcessDetails,
  //     refetch: refetchAdditionalProcessDetails
  //   } = useGetAdditionalProcessDetailsByAdditionalProcessIdQuery(
  //     formData.additionalProcessId,
  //     {
  //       skip: !formData.additionalProcessId // Skip the query if no collection is selected
  //     }
  //   );
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);
  //   useEffect(() => {
  //     if (additionalProcessDetails) {
  //       setInitialRows(
  //         additionalProcessDetails.result.map((row, index) => ({
  //           id: index,
  //           ...row
  //         }))
  //       );
  //     }
  //   }, [additionalProcessDetails, refetchAdditionalProcessDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const calculateTotalamount = () => {
      const quantity = parseFloat(formData.quantity) || 0;
      const ratePerPcs = parseFloat(formData.ratePerPcs) || 0;

      return (quantity * ratePerPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalamount()
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;

      return (totalAmount / poPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent()
    }));
  }, [
    formData.quantity,
    formData.ratePerPcs,
    formData.totalAmount
    // formData.poPcs
    // formData.poPcs,
    // formData.pcsPerComponent
  ]);

  const handleSave = async () => {
    console.log(formData);
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcessDetails',
        formData
      );

      console.log('Save response:', response.data);
      refetchAdditionalProcessDetails();

      setFormData((prevFormData) => ({
        ...prevFormData,
        // remainingPcsPerComponent:
        //   prevFormData.remainingPcsPerComponent - prevFormData.quantity,
        vendorId: '', /////////////checkapi

        // pcsPerComponent: additionalProcessData.pcsPerComponent || '',

        quantity: '',
        ratePerPcs: 0,
        totalAmount: 0,
        costPerComponent: '',

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchAdditionalProcessList();

      // handleClickOpen();

      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const columns = [
    {
      field: 'vendorName',
      headerName: 'Vendor',
      flex: 2
    },

    {
      field: 'processType',
      headerName: 'Process Type',
      flex: 1
    },
    {
      field: 'pcsPerComponent',
      headerName: ' Pcs. Per Component',
      flex: 1
    },
    {
      field: 'quantity',
      headerName: 'Quantitity',
      flex: 1
    },
    {
      field: 'ratePerPcs',
      headerName: 'Rate Per Pcs.',
      flex: 1
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      flex: 1
    }
  ];
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };
  const additionals = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
  function getStyles(name, selectedValues, theme) {
    return {
      fontWeight:
        selectedValues.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  //   const handleClickOpen = (data) => {
  //     setAdditionalProcessData(data);
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
    setAdditionalProcessData({});
    // refetchAdditionalProcessList();
    // setDeleteId(null);
  };
  const deleteApi = `https://gecxc.com:4041/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=`;
  return (
    <Box
      noValidate
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      }}
    >
      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Fabric"
            defaultValue=""
            size="small"
            name="fabricId"
            //   value={formData.fabricId}
            onChange={handleChange}
          >
            {/* {Fabrications.map((option) => (
                    <MenuItem key={option.fabricId} value={option.fabricId}>
                      {option.fabric}
                    </MenuItem>
                  ))} */}
          </TextField>
        </Grid>{' '}
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Components"
            name="componentId"
            //   value={formData.componentId}
            onChange={handleChange}
            size="small"
            required
            //   error={!!formErrors.componentId}
            //   helperText={formErrors.componentId}
          >
            {/* {components.map((option) => (
                <MenuItem key={option.componentId} value={option.componentId}>
                  {option.componentName}
                </MenuItem>
              ))} */}
          </TextField>{' '}
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            //   select
            label="Color"
            size="small"
            name="colorId"
            //   value={formData.colorId}
            onChange={handleChange}
            required
            //   error={!!formErrors.colorId}
            //   helperText={formErrors.colorId}
          >
            {/* {colors.map((option) => (
                <MenuItem key={option.colorId} value={option.colorId}>
                  {option.color}
                </MenuItem>
              ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Po Pcs"
            fullWidth
            size="small"
            name="poPcs"
            //   value={formData.poPcs}
            onChange={handleChange}
            focused
            // disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Available Quantity"
            fullWidth
            size="small"
            name="availableQty"
            type="number"
            //   value={formData.availableQty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Remaining Quantity"
            fullWidth
            size="small"
            name="remainingQty"
            type="number"
            //   value={formData.availableQty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Repeats"
            type="number"
            fullWidth
            size="small"
            name="repeats"
            //   value={formData.repeats}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Remaining Repeats"
            type="number"
            fullWidth
            size="small"
            name="remainingRepeats"
            //   value={formData.repeats}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            //   select
            label="Heads"
            defaultValue=""
            size="small"
            name="noOfHead"
            //   value={formData.noOfHead}
            onChange={handleChange}
            required
            //   error={!!formErrors.noOfHead}
            //   helperText={formErrors.noOfHead}
          >
            {/* {heads.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Cutting Size"
            fullWidth
            size="small"
            name="cuttingSize"
            type="number"
            //   value={formData.cuttingSize}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="itemsPerRepeat"
            fullWidth
            type="number"
            size="small"
            name="itemsPerRepeat"
            //   value={formData.itemsPerRepeat}
            onChange={handleChange}
            required
            focused
            //   error={!!formErrors.itemsPerRepeat}
            //   helperText={formErrors.itemsPerRepeat}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            //   select
            label="Vendors"
            defaultValue=""
            size="small"
            name="vendorId"
            //   value={formData.vendorId}
            onChange={handleChange}
            required
            //   error={!!formErrors.vendorId}
            //   helperText={formErrors.vendorId}
          >
            {/* {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="AssignQty"
            fullWidth
            size="small"
            type="number"
            name="AssignQty"
            // value={formData.totalPcs}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="AssignRepeats"
            fullWidth
            size="small"
            type="number"
            name="AssignRepeats"
            // value={formData.totalPcs}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            label="Additional"
            value={formData.threadAdditional}
            name="threadAdditional"
            size="small"
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true
            }}
          >
            {additionals.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, formData.threadAdditional, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Total Pcs"
            fullWidth
            type="number"
            size="small"
            name="totalPcs"
            // value={formData.totalAmount}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Total Amount"
            fullWidth
            type="number"
            size="small"
            name="totalAmount"
            // value={formData.totalAmount}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Cost Per Component"
            fullWidth
            // type="number"
            size="small"
            name="costPerComponent"
            value={formData.costPerComponent}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isSolving}
                onChange={handleCheckboxChange}
                name="isSolving"
              />
            }
            label="isSolving"
          />
        </Grid>
        {/* {formData.isSolving ? ( */}
        {/* <FormControl fullWidth> */}
        {/* <Select
                  multiple
                  labelId="thread-additional-label"
                  value={formData.threadAdditional}
                  name="threadAdditional"
                  size="small"
                  label="Additional"
                  // focused
                  onChange={handleChange}
                  // input={<OutlinedInput label="Additional" />}
                  fullWidth
                  // MenuProps={MenuProps}
                >
                  {additionals.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, formData.threadAdditional, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select> */}
        {/* ) : null} */}
        {/* <Grid item xs={12} md={4}></Grid> */}
        {/* <Divider
                color="#cc8587"
                sx={{ height: 1, width: '100%', mt: 2 }}
              /> */}
        {/* {formData.isSolving ? ( */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} width="Inherit">
            <Grid item xs={12} md={12}>
              <Typography variant="h5" gutterBottom>
                Thread
              </Typography>
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <TextField
                label="Stitches"
                fullWidth
                size="small"
                type="number"
                name="threadStiches"
                value={formData.threadStiches}
                onChange={handleChange}
                required
                // error={!!formErrors.threadStiches}
                // helperText={formErrors.threadStiches}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Rate"
                type="number"
                fullWidth
                size="small"
                name="threadRate"
                value={formData.threadRate}
                onChange={handleChange}
                required
                // error={!!formErrors.threadRate}
                // helperText={formErrors.threadRate}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Amount"
                fullWidth
                size="small"
                type="number"
                name="threadAmount"
                value={formData.threadAmount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* ) : null} */}
        {/* {formData.isSolving ? ( */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} width="Inherit">
            <Grid item xs={12} md={12}>
              <Typography variant="h5" gutterBottom>
                Tilla
              </Typography>
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <TextField
                label="Stitches"
                fullWidth
                size="small"
                type="number"
                name="tillaStiches"
                value={formData.tillaStiches}
                onChange={handleChange}
                required
                // error={!!formErrors.tillaStiches}
                // helperText={formErrors.tillaStiches}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Rate"
                fullWidth
                size="small"
                type="number"
                name="tilaRate"
                value={formData.tilaRate}
                onChange={handleChange}
                required
                // error={!!formErrors.tilaRate}
                // helperText={formErrors.tilaRate}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Amount"
                fullWidth
                size="small"
                name="tilaAmount"
                value={formData.tilaAmount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* ) : null} */}
        {/* {formData.isSolving ? ( */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} width="Inherit">
            <Grid item xs={12} md={12}>
              <Typography variant="h5" gutterBottom>
                Sequence
              </Typography>
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <TextField
                label="Sequence"
                fullWidth
                size="small"
                name="sequence"
                type="number"
                value={formData.sequence}
                onChange={handleChange}
                required
                // error={!!formErrors.sequence}
                // helperText={formErrors.sequence}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Rate"
                fullWidth
                type="number"
                size="small"
                name="sequenceRate"
                value={formData.sequenceRate}
                onChange={handleChange}
                required
                // error={!!formErrors.sequenceRate}
                // helperText={formErrors.sequenceRate}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Amount"
                fullWidth
                size="small"
                name="sequenceAmount"
                value={formData.sequenceAmount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>{' '}
        </Grid>
        {/* ) : null} */}
        {formData.isSolving ? (
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Solving
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={3}>
                <TextField
                  label="Layers"
                  fullWidth
                  size="small"
                  type="number"
                  name="solvingLayers"
                  value={formData.solvingLayers}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Meters"
                  type="number"
                  fullWidth
                  size="small"
                  name="solvingInMeters"
                  value={formData.solvingInMeters}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Rate"
                  fullWidth
                  type="number"
                  size="small"
                  name="solvingRate"
                  value={formData.solvingRate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  type="number"
                  name="solvingAmount"
                  value={formData.solvingAmount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : null}
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button variant="contained" size="small" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>{' '}
      <Divider color="#cc8587" sx={{ height: 2, width: '100%', mt: 2 }} />
      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <ReuseableDataGrid
            iColumns={columns}
            initialRows={initialRows}
            // setInitialData={setInitialData}
            deleteApi={deleteApi}
            // deleteBy="additionalProcessDetId"
            // refetch={refetchAdditionalProcessDetails}
            // disableEdit={true}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmbroideryAssignVendor;
