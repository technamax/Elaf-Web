import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useGetIssuanceDetailByPoIdQuery } from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';

const DyeingIssuanceView = ({ iss, handleClose, refetchIssuanceData }) => {
  const [formData, setFormData] = useState({
    poId: 0,
    dispatchedQuantity: 0,
    dispatchFrom: 0,
    destination: 0,
    isRejectedOGP: 'N',
    remarks: ''
  });
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [issuanceDetails, setIssuanceDetails] = useState([]);
  const { data: issuanceDetailsData, refetch: refetchIssuanceDetailsData } =
    useGetIssuanceDetailByPoIdQuery(
      { poId: iss.poId, issuanceId: iss.issuanceId },
      {
        skip: !iss.poId || !iss.issuanceId
      }
    );

  useEffect(() => {
    if (issuanceDetailsData?.result === null) {
      setIssuanceDetails([]);
      return;
    }
    if (issuanceDetailsData) {
      setIssuanceDetails(
        issuanceDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [issuanceDetailsData, refetchIssuanceDetailsData]);

  console.log('iss', iss);
  console.log('formData', formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const columns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },

    // {
    //   field: 'baseColor',
    //   headerName: 'Base Color'
    // },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Issuance Quantity',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'vendorName',
      headerName: 'Fabric'
    }
  ];
  const handleOgp = async () => {
    setFormData({
      ...formData,
      issuanceId: iss.issuanceId,
      processTypeId: iss.processTypeId,
      createdBy: iss.createdBy
    });
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/Issuance/GenerateOGP`,
        formData
      );
      refetchIssuanceData();
      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'success',
          autoHideDuration: 5000
        });
      }
      // refetchAssignedTermsData();
      console.log('Save response:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to start Process', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
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
            value={iss.collectionName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="Process Type"
            name="productionId"
            value={iss.processTypeName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            // type="date"
            label="Issuance Date"
            name="issuanceDate"
            value={new Date(iss.issuanceDate).toLocaleDateString('en-GB', {
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
            label="ExpectedReturn Date"
            name="expectedReturnDate"
            value={new Date(iss.expectedReturnDate).toLocaleDateString(
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
            label="Vendor"
            name="vendorId"
            value={iss.vendorName}
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
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            // select
            label="Issuance Quantity"
            name="issuanceQuantity"
            value={iss.issuanceQuantity}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // disabled
            // select
            type="Number"
            label="DispatchedQuantity"
            name="dispatchedQuantity"
            value={formData.dispatchedQuantity}
            onChange={handleChange}
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
            initialRows={issuanceDetails}
            iColumns={columns}
            hideAction
          />
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleOgp}
            disabled={iss.status === 9}
          >
            Generate OGP
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DyeingIssuanceView;
