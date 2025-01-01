import {
  Grid,
  TextField,
  Box,
  Card,
  CardHeader,
  MenuItem
} from '@mui/material';
import React from 'react';
const EmbroideryIssuance = () => {

  const production = [
    "Elaf-52",
    "Elaf-53",
  ]

  const formData = {
  }

  const onChange = (e) => {
    const { name, value } = e.target;
  }

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
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Select Production Batch"
              variant="outlined"
              size='small'
              name='productionBatch'
              value="Elaf-52"
            >
              {
                production.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))
              }
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Select PO"
              variant="outlined"
              size='small'
              name='po'
              value="Elaf-52"
            >
              {
                production.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))
              }
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              label="Design"
              variant="outlined"
              size='small'
              name='design'
              value="Elaf-52"
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Issuance Date"
              type="date"
              fullWidth
              variant="outlined"
              size='small'
              name='issuanceDate'
              value="2021-09-01"
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Expected Return Date"
              type="date"
              fullWidth
              variant="outlined"
              size='small'
              name='returnDate'
              value={new Date().toISOString().slice(0, 10)}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Select Vendor"
              fullWidth
              variant="outlined"
              size='small'
              name='vendor'
              value="Elaf-52"
            >
              {
                production.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))
              }
            </TextField>
        </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default EmbroideryIssuance;
