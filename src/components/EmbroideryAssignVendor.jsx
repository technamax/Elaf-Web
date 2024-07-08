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
import { useGetEmbroideryDetailsListByEmbroideryIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import { useTheme } from '@mui/material/styles';

import axios from 'axios';

const EmbroideryAssignVendor = ({
  initialFormData,
  setAdditionalProcessData,
  refetchDyeingPrintingData,
  handleClickOpen
}) => {
  const theme = useTheme();

  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);
  const totalRepeats = initialRows
    .reduce((sum, row) => sum + (row.repeats ?? 0), 0)
    .toFixed(2);
  console.log('totalRepeats', totalRepeats);

  const [formData, setFormData] = useState({
    embroideryIdDet: 0,
    embroideryId: initialFormData.embroideryId || 0,
    designId: initialFormData.designId || '',
    batchNo: initialFormData.batchNo || '',
    planningHeaderId: initialFormData.planningHeaderId || 0,
    componentId: initialFormData.componentId || '',
    componentName: initialFormData.componentName || '',
    fabricId: initialFormData.fabricId || '',
    fabricName: initialFormData.fabricName || '',
    // colourName: initialFormData.colorName || '',
    vendorId: '', /////////////checkapi
    colorId: initialFormData.colorId || '',
    colourName: initialFormData.colourName || '',
    availableQty: initialFormData.availableQty || '',
    assignedQty: '',
    remainingQty: initialFormData.availableQty - Quantity || '',
    noOfHead: initialFormData.noOfHead || '',
    noOfHeadsName: initialFormData.noOfHeadsName || '',
    repeats: initialFormData.repeats || '',
    assignedRepeats: '',
    remainingRepeats: initialFormData.repeats - totalRepeats || '',

    cuttingSize: initialFormData.cuttingSize || '',
    itemsPerRepeat: initialFormData.itemsPerRepeat || '',
    poPcs: initialFormData.poPcs || '',

    totalPcs: '', //repeat*itemsPerRepeat
    totalAmount: '', //
    threadStiches: '',
    threadRate: '',
    threadAmount: '',
    tillaStiches: '',
    tilaRate: '',
    tilaAmount: '',
    sequence: '',
    sequenceRate: '',
    sequenceAmount: '',
    isSolving: false,
    solvingLayers: 0,
    solvingInMeters: '',
    solvingRate: 0,
    solvingAmount: '',
    // additional:  '',
    additional: [],

    costPerComponent: '', //

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const additionals = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  useEffect(() => {
    setFormData({
      ...formData,
      remainingQty: initialFormData.availableQty - Quantity || '',
      remainingRepeats: initialFormData.repeats - totalRepeats || ''
    });
  }, [initialRows]);
  const { data: lookupData } = useGetLookUpListQuery();
  const { data: embroideryDetails, refetch: refetchEmbroideryDetails } =
    useGetEmbroideryDetailsListByEmbroideryIdQuery(formData.embroideryId, {
      skip: !formData.embroideryId // Skip the query if no collection is selected
    });
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);
  useEffect(() => {
    if (embroideryDetails) {
      setInitialRows(
        embroideryDetails.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [embroideryDetails, refetchEmbroideryDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  useEffect(() => {
    const calculateTotalPcs = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const itemsPerRepeat = parseFloat(formData.itemsPerRepeat) || 0;
      return (repeats * itemsPerRepeat).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs()
    }));
    const calculateThread = () => {
      const stitches = parseFloat(formData.threadStiches) || 0;
      const rate = parseFloat(formData.threadRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      threadAmount: calculateThread()
    }));
    const calculateTilla = () => {
      const stitches = parseFloat(formData.tillaStiches) || 0;
      const rate = parseFloat(formData.tilaRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      tilaAmount: calculateTilla()
    }));
    const calculateSequence = () => {
      const stitches = parseFloat(formData.sequence) || 0;
      const rate = parseFloat(formData.sequenceRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      sequenceAmount: calculateSequence()
    }));
    const calculateInMeters = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const noOfHead = parseFloat(formData.noOfHead) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return (((repeats * noOfHead * 13) / 39.37) * layers).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingInMeters: calculateInMeters()
    }));
    const calculateSolvingAmount = () => {
      const solvingInMeters = parseFloat(formData.solvingInMeters) || 0;
      const solvingRate = parseFloat(formData.solvingRate) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return (solvingInMeters * solvingRate).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingAmount: calculateSolvingAmount()
    }));
    const calculateTotalAmount = () => {
      const thread = parseFloat(formData.threadAmount) || 0;
      const tilla = parseFloat(formData.tilaAmount) || 0;
      const sequence = parseFloat(formData.sequenceAmount) || 0;
      const solving = parseFloat(formData.solvingAmount) || 0;
      return (thread + tilla + sequence + solving).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalAmount() || 0
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const totalPcs = parseFloat(formData.totalPcs) || 0;

      return (totalAmount / totalPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent() || 0
    }));
  }, [
    formData.threadAmount,
    formData.totalAmount,
    formData.sequenceAmount,
    formData.solvingAmount,
    formData.repeats,
    formData.tilaAmount,
    formData.itemsPerRepeat,
    formData.threadRate,
    formData.threadStiches,
    formData.noOfHead,
    formData.tilaRate,
    formData.tillaStiches,
    formData.sequenceRate,
    formData.sequence,
    formData.solvingLayers,
    formData.solvingInMeters,
    formData.solvingRate
  ]);
  console.log('formData', formData);
  const handleSave = async () => {
    console.log(formData);
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/Embroidery/SaveEmbroideryDetails',
        {
          ...formData,
          additional: formData.additional.join(', ')
        }
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        ...prevFormData,
        // remainingQty:
        //   prevFormData.remainingQty - prevFormData.assignedQty,
        embroideryIdDet: 0,
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        // additional:  '',
        additional: [],

        costPerComponent: '', //

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchEmbroideryDetails();
      refetchDyeingPrintingData();

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

    // {
    //   field: 'processType',
    //   headerName: 'Process Type',
    //   flex: 1
    // },
    // {
    //   field: 'availableQty',
    //   headerName: 'Total Available Qty',
    //   flex: 1
    // },
    {
      field: 'assignedQty',
      headerName: 'Assigned Quantity',
      flex: 1
    },
    {
      field: 'assignedRepeats',
      headerName: 'Assigned repeats',
      flex: 1
    },
    { field: 'additional', headerName: 'ThreadAdditional' },
    { field: 'threadStiches', headerName: 'Thread Stitches' },
    { field: 'threadRate', headerName: 'Thread Rate' },
    { field: 'threadAmount', headerName: 'Thread Amount' },
    { field: 'tillaStiches', headerName: 'Tilla Stitches' },
    { field: 'tilaRate', headerName: 'Tilla Rate' },
    { field: 'tilaAmount', headerName: 'Tilla Amount' },
    { field: 'sequence', headerName: 'sequence' },
    { field: 'sequenceRate', headerName: 'Sequence Rate' },
    { field: 'sequenceAmount', headerName: 'Sequence Amount' },
    { field: 'isSolving', headerName: 'Is Solving' },
    { field: 'solvingLayers', headerName: 'Solving Layers' },
    { field: 'solvingInMeters', headerName: 'Solving In Meters' },
    { field: 'solvingRate', headerName: 'Solving Rate' },
    { field: 'solvingAmount', headerName: 'Solving Amount' },
    { field: 'totalPcs', headerName: 'Total Pcs' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'costPerComponent', headerName: 'Cost Per Component' }
  ];

  const deleteApi = `https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?embroideryIdDet=`;
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
            label="Fabric"
            name="fabricName"
            value={formData.fabricName}
            onChange={handleChange}
            size="small"
            disabled
          >
            {/* {collectionList.map((option) => (
              <MenuItem key={option.collectionId} value={option.collectionId}>
                {option.collectionName}
              </MenuItem>
            ))} */}
          </TextField>{' '}
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Component"
            name="componentName"
            value={formData.componentName}
            onChange={handleChange}
            size="small"
            disabled
          >
            {/* {designList.map((option) => (
              <MenuItem key={option.designId} value={option.designId}>
                {option.designNo}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Color"
            name="colourName"
            value={formData.colourName}
            onChange={handleChange}
            size="small"
            disabled
          >
            {/* {batchList.map((option) => (
              <MenuItem key={option.batchNo} value={option.batchNo}>
                {option.batchNo}
              </MenuItem>
            ))} */}
          </TextField>{' '}
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="PO Pcs"
            name="poPcs"
            value={formData.poPcs}
            onChange={handleChange}
            size="small"
            disabled
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
            // select
            label="noOfHead"
            size="small"
            name="noOfHeadsName"
            value={formData.noOfHeadsName}
            onChange={handleChange}
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Cutting Size"
            size="small"
            name="cuttingSize"
            value={formData.cuttingSize}
            onChange={handleChange}
            disabled
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Items Per Repeat"
            size="small"
            name="itemsPerRepeat"
            value={formData.itemsPerRepeat}
            onChange={handleChange}
            disabled
          ></TextField>
        </Grid>

        <Grid item xs={12} md={1.5}>
          <TextField
            label="Total AvailableQty"
            fullWidth
            size="small"
            name="availableQty"
            value={formData.availableQty}
            // type="number"
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Remaining Qty"
            fullWidth
            size="small"
            name="remainingQty"
            value={formData.remainingQty}
            // type="number"
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Repeats"
            fullWidth
            size="small"
            name="repeats"
            value={formData.repeats}
            // type="number"
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Remaining Repeats"
            fullWidth
            size="small"
            name="remainingRepeats"
            value={formData.remainingRepeats}
            // type="number"
            onChange={handleChange}
            disabled
          />
        </Grid>
      </Grid>
      <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />
      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Vendors"
            // defaultValue=""
            size="small"
            name="vendorId"
            value={formData.vendorId}
            onChange={handleChange}
          >
            {vendors.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Assigned Qty"
            fullWidth
            size="small"
            type="number"
            name="assignedQty"
            value={formData.assignedQty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Assigned Repeeats"
            fullWidth
            size="small"
            type="number"
            name="assignedRepeats"
            value={formData.assignedRepeats}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="total Pcs."
            fullWidth
            size="small"
            type="number"
            name="totalPcs"
            value={formData.totalPcs}
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
            value={formData.totalAmount}
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

        <Grid item xs={12} md={4.5}>
          <TextField
            select
            label="Additional"
            value={formData.additional}
            name="additional"
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
                style={getStyles(name, formData.additional, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </TextField>
          {/* </FormControl> */}
        </Grid>
        <Grid item xs={12} md={1.5}>
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
        <Grid item xs={12} md={6}></Grid>

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
      </Grid>
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
            deleteBy="embroideryIdDet"
            refetch={refetchEmbroideryDetails}
            disableEdit={true}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmbroideryAssignVendor;
