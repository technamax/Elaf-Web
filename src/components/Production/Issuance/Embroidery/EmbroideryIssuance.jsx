import {
  Grid,
  TextField,
  Box,
  Card,
  CardHeader,
  MenuItem
} from '@mui/material';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

const EmbroideryIssuance = () => {
  const { enqueueSnackbar } = useSnackbar();

  const production = ['Elaf-52', 'Elaf-53'];
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Select Production Batch"
              variant="outlined"
              size="small"
              name="productionBatch"
              value="Elaf-52"
            >
              {production.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Select PO"
              variant="outlined"
              size="small"
              name="po"
              value="Elaf-52"
            >
              {production.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Design"
              variant="outlined"
              size="small"
              name="design"
              value="Elaf-52"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Issuance Date"
              type="date"
              fullWidth
              variant="outlined"
              size="small"
              name="issuanceDate"
              value="2021-09-01"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Expected Return Date"
              type="date"
              fullWidth
              variant="outlined"
              size="small"
              name="returnDate"
              value={new Date().toISOString().slice(0, 10)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Select Vendor"
              fullWidth
              variant="outlined"
              size="small"
              name="vendor"
              value="Elaf-52"
            >
              {production.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default EmbroideryIssuance;
