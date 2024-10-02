import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button, MenuItem } from '@mui/material';
import {
  useGetIssuanceDetailByPoIdQuery,
  useGetRejectionDetailsByIssuanceIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetLookUpListQuery,
  useGetDriverInfoQuery,
  useGetTruckInfoQuery
} from 'api/store/Apis/lookupApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import StatusChip from '../../../../components/StatusChip';
const DyeingIssuanceView = ({ iss, handleClose, refetchData, isRejected }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    poId: iss.poId,
    issuanceId: iss.issuanceId,
    rejectionId: iss.rejectionId || null,
    processTypeId: iss.processTypeId || 1223,
    dispatchedQuantity: '',
    dispatchFrom: '',
    destination: '',
    isRejectedOGP: isRejected ? 'Y' : 'N',
    remarks: '',
    truckId: '',
    driverId: '',
    createdBy: user.empId
  });
  const { enqueueSnackbar } = useSnackbar();
  const [issuanceDetails, setIssuanceDetails] = useState([]);
  const [destinantionsList, setDestinantionsList] = useState([]);
  const [dispatchFromList, setDispatchFromList] = useState([]);
  const [driversList, setDriversList] = useState([]);
  const [trucksList, setTrucksList] = useState([]);
  const { data: issuanceDetailsData, refetch: refetchIssuanceDetailsData } =
    useGetIssuanceDetailByPoIdQuery(
      { poId: iss.poId, issuanceId: iss.issuanceId },
      {
        skip: !iss.poId || !iss.issuanceId
      }
    );
  const { data: rejectionDetailsData, refetch: refetchRejectionDetailsData } =
    useGetRejectionDetailsByIssuanceIdQuery(iss.issuanceId, {
      skip: !iss.issuanceId
    });
  const { data: lookupData, refetch: refetchLookupData } =
    useGetLookUpListQuery();
  const { data: driversData, refetch: refetchDriversData } =
    useGetDriverInfoQuery();
  const { data: trucksData, refetch: refetchTrucksData } =
    useGetTruckInfoQuery();
  console.log('rejectionDetailsData', rejectionDetailsData);
  useEffect(() => {
    if (isRejected) {
      if (rejectionDetailsData?.result === null) {
        setIssuanceDetails([]);
        return;
      }
      if (rejectionDetailsData) {
        setIssuanceDetails(
          rejectionDetailsData.result.map((row, index) => ({
            id: index + 1,
            ...row
          }))
        );
      }
    } else {
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
    }
  }, [
    issuanceDetailsData,
    refetchIssuanceDetailsData,
    rejectionDetailsData,
    refetchRejectionDetailsData
  ]);
  useEffect(() => {
    if (driversData) {
      setDriversList(
        driversData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [driversData, refetchDriversData]);
  useEffect(() => {
    if (trucksData) {
      setTrucksList(
        trucksData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [trucksData, refetchTrucksData]);
  useEffect(() => {
    if (lookupData) {
      setDestinantionsList(
        lookupData.result[0].destination.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      setDispatchFromList(
        lookupData.result[0].dispatchFrom.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [lookupData, refetchIssuanceDetailsData]);

  console.log('iss', iss);
  console.log('formData', formData);
  console.log('issuanceDetails', issuanceDetails);
  console.log('dispatchFromList', dispatchFromList);

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

    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'rejectedQty',
      headerName: 'Rejected Quantity',
      renderCell: (params) => {
        return (
          <StatusChip label={params.value.toLocaleString()} status="Rejected" />
        );
      }

      // valueGetter: (params) => {
      //   return params.toLocaleString();
      // }
    }
    // {
    //   field: 'rate',
    //   headerName: 'Rate'
    // },
    // {
    //   field: 'uomName',
    //   headerName: 'UOM'
    // }
    // {
    //   field: 'vendorName',
    //   headerName: 'Fabric'
    // }
  ];
  const handleOgp = async () => {
    if (
      formData.dispatchedQuantity >
      iss.issuanceQuantity - iss.dispatchedQuantity
    ) {
      enqueueSnackbar(
        'Error: DisPatched quantity cannot be greater than issuance quantity!',
        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
      return; // Stop further execution
    }

    try {
      const response = await axios.post(
        `http://100.42.177.77:8091/api/Issuance/GenerateOGP`,
        formData
      );
      refetchData();
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
        <Grid item xs={12} md={1.5}>
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
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            label="Process Type"
            name="processTypeName"
            value={iss.processTypeName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            type={!iss.issuanceDate ? 'Date' : null}
            // type="date"
            label="Issuance Date"
            name="issuanceDate"
            value={
              iss.issuanceDate
                ? new Date(iss.issuanceDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                  })
                : formData.issuanceDate
            }
            // onChange={handleChange}
            fullWidth
            disabled={iss.issuanceDate}
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
            type={!iss.issuanceDate ? 'Date' : null}
            label="ExpectedReturn Date"
            name="expectedReturnDate"
            value={
              iss.expectedReturnDate
                ? new Date(iss.expectedReturnDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                  })
                : formData.expectedReturnDate
            }
            // onChange={handleChange}
            fullWidth
            disabled={iss.expectedReturnDate}
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
            select
            label="Dispatch From"
            name="dispatchFrom"
            value={formData.dispatchFrom}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {dispatchFromList.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {destinantionsList.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Drivers"
            name="driverId"
            value={formData.driverId}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {driversList.map((option) => (
              <MenuItem key={option.driverId} value={option.driverId}>
                {option.driverName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Trucks"
            name="truckId"
            value={formData.truckId}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {trucksList.map((option) => (
              <MenuItem key={option.truckId} value={option.truckId}>
                {option.truckNumber}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // disabled
            // select
            label="Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>

        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            // select
            label="Issuance Quantity"
            name="issuanceQuantity"
            value={
              iss.issuanceQuantity?.toLocaleString() ||
              iss.rejectedQty?.toLocaleString()
            }
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            // select
            label="Remaining Quantity"
            name="issuanceQuantity"
            value={iss.issuanceQuantity - iss.dispatchedQuantity}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
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
            // disabled={iss.status === 9}
          >
            Generate OGP
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DyeingIssuanceView;
