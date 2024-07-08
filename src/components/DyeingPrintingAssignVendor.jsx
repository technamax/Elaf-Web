import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Box, Divider, MenuItem } from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetDyeingPrintingDetailsByDpIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import axios from 'axios';

const DyeingPrintingAssignVendor = ({
  initialFormData,
  setAdditionalProcessData,
  refetchDyeingPrintingData,
  handleClickOpen
}) => {
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);

  const [formData, setFormData] = useState({
    dpIdDet: 0,
    dpId: initialFormData.dpId || 0,
    designId: initialFormData.designId || '',
    batchNo: initialFormData.batchNo || '',
    planningHeaderId: initialFormData.planningHeaderId || 0,
    fabricId: initialFormData.fabricId || '',
    colorId: initialFormData.colorId || '',
    colorName: initialFormData.colorName || '',
    vendorId: '', /////////////checkapi
    processType: initialFormData.processType || '',
    availableQty: initialFormData.availableQty || '',
    remainingQty: initialFormData.availableQty - Quantity || '',
    shrinkage: '',
    wastage: '',
    uomId: initialFormData.uomId || '',
    uom: initialFormData.uom || '',
    poPcs: initialFormData.poPcs || '',

    // baseColorName: initialFormData.baseColorName || '',
    // poPcs: initialFormData.poPcs || '',
    // availableQty: initialFormData.availableQty || '',
    // remainingQty:
    //   initialFormData.availableQty - Quantity || '',
    // processTypeId: initialFormData.processTypeId || '',
    assignedQty: '',

    rate: '',
    unitRatePerPo: 0,
    totalExcGst: 0,
    gst: '',
    // GSTAmount: '',
    TotalIncludingGst: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      ...formData,
      remainingQty: initialFormData.availableQty - Quantity || ''
    });
  }, [initialRows]);
  const { data: lookupData } = useGetLookUpListQuery();
  const { data: dyeingPrintingDetails, refetch: refetchDyeingPrintingDetails } =
    useGetDyeingPrintingDetailsByDpIdQuery(formData.dpId, {
      skip: !formData.dpId // Skip the query if no collection is selected
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
    if (dyeingPrintingDetails) {
      setInitialRows(
        dyeingPrintingDetails.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [dyeingPrintingDetails, refetchDyeingPrintingDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const calculateOutputQty = () => {
      const availableQty = parseFloat(formData.availableQty) || 0;
      const shrinkage = parseFloat(formData.shrinkage) || 0;
      const wastage = parseFloat(formData.wastage) || 0;
      return ((availableQty * (100 - (shrinkage + wastage))) / 100).toFixed(2);
    };

    const calculateTotalExclGst = () => {
      const quantity = parseFloat(formData.assignedQty) || 0;
      const rate = parseFloat(formData.rate) || 0;
      return (quantity * rate).toFixed(2);
    };

    const calculateTotalWithGst = (totalExcGst, gst) => {
      return (totalExcGst * (1 + gst / 100)).toFixed(2);
    };

    const outputQty = calculateOutputQty();
    const totalExcGst = calculateTotalExclGst();
    const gst = parseFloat(formData.gst) || 0;
    const totalIncludingGst = calculateTotalWithGst(totalExcGst, gst);
    const poPcs = parseFloat(formData.poPcs) || 0;
    const unitRatePerPo = poPcs ? totalIncludingGst / poPcs : 0;

    setFormData((prevData) => ({
      ...prevData,
      outputQty: outputQty,
      totalExcGst: totalExcGst,
      TotalIncludingGst: totalIncludingGst,
      unitRatePerPo: unitRatePerPo.toFixed(2)
    }));
  }, [
    formData.availableQty,
    formData.shrinkage,
    formData.wastage,
    formData.rate,
    formData.gst,
    formData.poPcs,
    formData.unitRatePerPo
  ]);
  console.log('formData', formData);
  const handleSave = async () => {
    console.log(formData);
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/DyeingPrinting/SaveDyeingPrintingDetails',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        ...prevFormData,
        // remainingQty:
        //   prevFormData.remainingQty - prevFormData.assignedQty,
        dpIdDet: 0,
        vendorId: '', /////////////checkapi

        availableQty: initialFormData.availableQty || '',
        shrinkage: '',
        wastage: '',
        assignedQty: '',
        rate: '',
        unitRatePerPo: 0,
        totalExcGst: 0,
        gst: '',
        // GSTAmount: '',
        TotalIncludingGst: '',

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchDyeingPrintingDetails();
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
      field: 'rate',
      headerName: 'Rate',
      flex: 1
    },
    {
      field: 'totalExcGst',
      headerName: 'Total Excl Gst.',
      flex: 1
    },
    {
      field: 'gst',
      headerName: 'Gst.',
      flex: 1
    },
    {
      field: 'totalIncludingGst',
      headerName: 'TotalIncludingGst',
      flex: 1
    },
    {
      field: 'unitRatePerPo',
      headerName: 'unitRatePerPo.',
      flex: 1
    }
  ];

  const deleteApi = `https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?dpIdDet=`;
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
            label="Process Type"
            name="processType"
            value={formData.processType}
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
            name="colorName"
            value={formData.colorName}
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
            label="UOM"
            name="uom"
            value={formData.uom}
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
        {/* <Grid item xs={12} md={3}> */}
        {/* <TextField
            label="Base Color"
            fullWidth
            size="small"
            name="baseColorName"
            value={formData.baseColorName}
            onChange={handleChange}
            disabled
          />
        </Grid> */}
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="PO Pcs"
            size="small"
            name="poPcs"
            value={formData.poPcs}
            onChange={handleChange}
            disabled
          >
            {/* {colors.map((option) => (
              <MenuItem key={option.colorId} value={option.colorId}>
                {option.color}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>

        {/* <Grid item xs={12} md={1.5}>
          <TextField
            label="Po Pcs"
            fullWidth
            size="small"
            name="poPcs"
            value={formData.poPcs}
            onChange={handleChange}
            disabled
          />
        </Grid> */}
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

        <Grid item xs={12} md={3}>
          <TextField
            label="Assign Quantity"
            fullWidth
            type="number"
            size="small"
            name="assignedQty"
            value={formData.assignedQty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Rate Per uom"
            type="number"
            fullWidth
            size="small"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Shrinkage"
            fullWidth
            type="number"
            size="small"
            name="shrinkage"
            value={formData.shrinkage}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Wastage"
            fullWidth
            type="number"
            size="small"
            name="wastage"
            value={formData.wastage}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Output Qty"
            fullWidth
            type="number"
            size="small"
            name="outputQty"
            value={formData.outputQty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Total Excl. Gst"
            fullWidth
            type="number"
            size="small"
            name="totalExcGst"
            value={formData.totalExcGst}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            label="GST"
            fullWidth
            size="small"
            // type="number"
            name="gst"
            value={formData.gst}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Total Including Gst"
            fullWidth
            size="small"
            // type="number"
            name="TotalIncludingGst"
            value={formData.TotalIncludingGst}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="UnitRate Per PO."
            fullWidth
            size="small"
            // type="number"
            name="unitRatePerPo"
            value={formData.unitRatePerPo}
            onChange={handleChange}
          />
        </Grid>

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
            deleteBy="dpIdDet"
            refetch={refetchDyeingPrintingDetails}
            disableEdit={true}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DyeingPrintingAssignVendor;