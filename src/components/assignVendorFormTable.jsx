import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Box, Divider, MenuItem } from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';

const AssignVendorFormTable = ({ additionalProcessData }) => {
  const [formData, setFormData] = useState({
    additionalProcessId: additionalProcessData.additionalProcessId || 0,
    designId: additionalProcessData.designId || '',
    planningHeaderId: additionalProcessData.planningHeaderId || 0,
    batchNo: additionalProcessData.batchNo || '',
    componentId: additionalProcessData.componentId || '',
    colorId: additionalProcessData.colorId || '',
    fabricId: additionalProcessData.fabricId || '',
    vendorId: '', /////////////checkapi
    baseColorName: additionalProcessData.baseColorName || '',
    poPcs: additionalProcessData.poPcs || '',
    pcsPerComponent: '',
    remainingPcsPerComponent: '',
    processTypeId: '',
    quantity: '',
    ratePerPcs: 0,
    totalAmount: 0,
    costPerComponent: '',

    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });
  const { data: lookupData } = useGetLookUpListQuery();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log(formData);
  };
  const initialRows = [
    {
      id: 1,
      additionalProcessId: 0,
      designId: 321,
      planningHeaderId: 34,
      batchNo: '3453',
      componentId: '345',
      colorId: 345,
      fabricId: '345',
      vendorId: 'gefg', /////////////checkapi
      baseColorName: 'g4cgd',
      poPcs: 'dfgdf',
      pcsPerComponent: 345,
      processTypeId: 'dfg',
      quantity: 'dfg',
      ratePerPcs: 40,
      totalAmount: 40,
      costPerComponent: '453',

      createdOn: new Date().toISOString(),
      createdBy: 0,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: 0
    }
  ];
  const columns = [
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },

    {
      field: 'processTypeId',
      headerName: 'process Type'
    },
    {
      field: 'pcsPerComponent',
      headerName: ' Pcs. Per Component'
    },
    {
      field: 'quantity',
      headerName: 'Quantitity'
    },
    {
      field: 'ratePerPcs',
      headerName: 'Rate Per Pcs.'
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount'
    },
    {
      field: 'costPerComponent',
      headerName: 'Cost Per Component'
    }
  ];

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
            label="Select Collection"
            name="collectionId"
            value={formData.selectedCollectionId}
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
            label="Select Design"
            name="designId"
            value={formData.designId}
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
            label="Batch No."
            name="batchNo"
            value={formData.batchNo}
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
            label="Components"
            name="componentId"
            value={formData.componentId}
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
            label="Base Color"
            fullWidth
            size="small"
            name="baseColorName"
            value={formData.baseColorName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Select Fabric"
            defaultValue=""
            size="small"
            name="fabricId"
            value={formData.fabricId}
            onChange={handleChange}
            disabled
          >
            {/* {Fabrications.map((option) => (
                    <MenuItem key={option.fabricId} value={option.fabricId}>
                      {option.fabric}
                    </MenuItem>
                  ))} */}
          </TextField>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Color"
            size="small"
            name="colorId"
            value={formData.colorId}
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
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Process Type"
            defaultValue=""
            size="small"
            name="processTypeId"
            value={formData.processTypeId}
            onChange={handleChange}
            disabled
          >
            {/* {operatingMachineList.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Po Pcs"
            fullWidth
            size="small"
            name="poPcs"
            value={formData.poPcs}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Pcs. Per Component"
            fullWidth
            size="small"
            name="pcsPerComponent"
            value={formData.pcsPerComponent}
            // type="number"
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Remaining Pcs. Per Component"
            fullWidth
            size="small"
            name="remainingPcsPerComponent"
            value={formData.remainingPcsPerComponent}
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
            label="Quantity"
            fullWidth
            type="number"
            size="small"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Rate Per Pcs"
            type="number"
            fullWidth
            size="small"
            name="ratePerPcs"
            value={formData.ratePerPcs}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
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
            size="small"
            type="number"
            name="costPerComponent"
            value={formData.costPerComponent}
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
            // deleteApi={deleteApi}
            // deleteBy="schiffiliId"
            // refetch={refetchSchiffliList}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssignVendorFormTable;
