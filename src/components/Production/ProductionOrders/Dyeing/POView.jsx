import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import {
  useGetDyeingPODetailsPoIdQuery,
  useDyeingPoAssignTermDetailsByPoIdQuery
} from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

const POView = ({ vId }) => {
  const [poDetails, setPoDetails] = useState([]);
  const [assignedTerms, setAssignedTerms] = useState([]);
  const { data: poDetailsData, refetch: refetchPoDetailsData } =
    useGetDyeingPODetailsPoIdQuery(vId.poId, {
      skip: !vId.poId // Skip the query if no collection is selected
    });
  const { data: assignedTermsData, refetch: refetchAssignedTermsData } =
    useDyeingPoAssignTermDetailsByPoIdQuery(vId.poId, {
      skip: !vId.poId // Skip the query if no collection is selected
    });

  useEffect(() => {
    if (poDetailsData?.success === false) {
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
    if (poDetailsData?.success === false) {
      setAssignedTerms([]);
      return;
    }
    if (poDetailsData) {
      setAssignedTerms(
        assignedTermsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [assignedTermsData, refetchAssignedTermsData]);
  console.log('vId', vId);

  const columns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'baseColor',
      headerName: 'Color'
    },
    {
      field: 'total',
      headerName: 'Planned Qty'
    },
    {
      field: 'quantity',
      headerName: 'Assigned Qty'
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'tax',
      headerName: 'Tax'
    },
    {
      field: 'totalBeforeTax',
      headerName: 'Total'
    },
    {
      field: 'totalAfterTax',
      headerName: 'Total After Tax'
    }
  ];

  const termsColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'termCondDesc',
      headerName: 'Terms and Conditions'
    },
    {
      field: 'processType',
      headerName: 'Process Type'
    }
  ];
  return (
    <div>
      <Grid
        container
        spacing={1}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="Production"
            name="productionId"
            value={vId.collectionName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="Process Type"
            name="productionId"
            value={vId.processTypeName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            // type="date"
            label="Issuance Date"
            name="issuanceDate"
            value={new Date(vId.issuanceDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })}
            // onChange={handleChange}
            fullWidth
            disabled
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
            value={new Date(vId.expectedReturnDate).toLocaleDateString(
              'en-GB',
              {
                day: 'numeric',
                month: 'short',
                year: '2-digit'
              }
            )}
            // onChange={handleChange}
            fullWidth
            disabled
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
            disabled
            // select
            label="Fabric"
            name="fabricId"
            value={vId.fabricName}
            // onChange={handleChange}
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
            fullWidth
            disabled
            // select
            label="Vendor"
            name="vendorId"
            value={vId.vendorName}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {/* {vendorsList.map((option) => (
                <MenuItem key={option.vendorId} value={option.vendorId}>
                  {option.vendorName}
                </MenuItem>
              ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Shrinkage"
            fullWidth
            disabled
            size="small"
            name="shrinkage"
            // onChange={handleChange}
            value={vId.shrinkage}
            required
            // disabled={isEdit}
            // error={!!formErrors.collectionName}
            // helperText={formErrors.collectionName}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            label="Wastage"
            fullWidth
            disabled
            size="small"
            name="wastage"
            // onChange={handleChange}
            value={vId.wastage}
            required
            // disabled={isEdit}
            // error={!!formErrors.collectionName}
            // helperText={formErrors.collectionName}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            // select
            label="Location"
            name="locationId"
            value={vId.fullLocation}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12}>
          <Typography variant="h2">Details</Typography>
        </Grid>

        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={poDetails}
            iColumns={columns}
            hideAction
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12}>
          <Typography variant="h2">Terms and Conditions</Typography>
        </Grid>
        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={assignedTerms}
            iColumns={termsColumns}
            hideAction
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default POView;
