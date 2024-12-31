import React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';

const OutwardGatePass = React.forwardRef(({ ogpData }, ref) => {
  return (
    <div ref={ref} style={{ padding: '20px', width: '100%' }}>
      <Typography variant="h6" align="center">
        AL HAREEM TEXTILE
      </Typography>
      <Typography variant="h6" align="center">
        OUTWARD GATE PASS
      </Typography>

      <Box mt={2}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography>OGP #</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{ogpData?.ogpNumber}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>PROCESS</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{ogpData?.processTypeName}</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>OGP DATE</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {new Date(ogpData?.ogpDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>STAGE</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>WORK IN PROCESS</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>VENDOR NAME</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{ogpData?.vendorName}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>VENDOR CONTACT</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Contact Info Here</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography>PURPOSE</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography>Purpose details here</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid
        container
        spacing={1}
        style={{ border: '1px solid black', padding: '8px' }}
      >
        <Grid item xs={1}>
          <Typography>PO #</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>DESCRIPTION</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>DESIGN #</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>UOM</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>QTY REQUIRED</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>SHRINKAGE</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>TOTAL QTY</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>RATE</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>AMOUNT</Typography>
        </Grid>
      </Grid>

      {ogpData?.vIssuanceTransactionDetailsList.map((detail, index) => (
        <Grid
          container
          spacing={1}
          key={index}
          style={{ borderBottom: '1px solid black', padding: '8px' }}
        >
          <Grid item xs={1}>
            <Typography>{detail.poId}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{detail.fabricName}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.designNumber}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.uomName}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{detail.issuanceQuantity}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.shrinkage || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.totalQty || 'N/A'}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.rate}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{detail.totalAfterTax}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
});

export default OutwardGatePass;
