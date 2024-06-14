import React from 'react';
import { Grid, TextField, Button, Box } from '@mui/material';

const assignVendorFormTable = ({ additionalProcessData }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log(formData);
  };
  return (
    <Box
      noValidate
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'fit-content'
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
            select
            label="Select Collection"
            name="collectionId"
            value={selectedCollectionId}
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
            select
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
            select
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
            select
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
      </Grid>
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
            select
            label="Color"
            size="small"
            name="colorId"
            value={formData.colorId}
            onChange={handleChange}
            disabled
          >
            {colors.map((option) => (
              <MenuItem key={option.colorId} value={option.colorId}>
                {option.color}
              </MenuItem>
            ))}
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
            {/* {vendors.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))} */}
          </TextField>
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
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Process Type"
            defaultValue=""
            size="small"
            name="processTypeId"
            value={formData.processTypeId}
            onChange={handleChange}
          >
            {operatingMachineList.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={1.5}>
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
        <Grid item xs={12} md={1.5}>
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

        <Grid item xs={12} md={1.5}>
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
    </Box>
  );
};

export default assignVendorFormTable;
