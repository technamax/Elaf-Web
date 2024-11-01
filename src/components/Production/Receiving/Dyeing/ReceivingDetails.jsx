import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button, MenuItem } from '@mui/material';
import { useGetPendingReceivingByIssuanceIdQuery } from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useGetWareHouseLocationsQuery } from 'api/store/Apis/lookupApi';

const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const ReceivingDetails = ({ iss, handleClose, refetchIssuanceData }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    receivingId: 0,
    locationId: '',
    createdBy: user.empId,
    ...iss
  });
  const apiRef = useGridApiRef();

  const { enqueueSnackbar } = useSnackbar();
  const [issuanceDetails, setIssuanceDetails] = useState([]);
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();
  const { data: issuanceDetailsData, refetch: refetchIssuanceDetailsData } =
    useGetPendingReceivingByIssuanceIdQuery(iss.issuanceId, {
      skip: !iss.issuanceId
    });

  const [locationsList, setLocationsList] = useState([]);
  useEffect(() => {
    if (locationsData) {
      setLocationsList(
        locationsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [locationsData]);

  useEffect(() => {
    if (issuanceDetailsData?.result === null) {
      setIssuanceDetails([]);
      return;
    }
    if (issuanceDetailsData) {
      // setIssuanceDetails(
      //   issuanceDetailsData.result
      //     .filter((row) => row.lastReceivedQty < row.dispatchedQuantity)
      //     .map((row, index) => ({
      //       id: index + 1,
      //       receivedQty: 0,
      //       ...row
      //     }))
      // );
      setIssuanceDetails(
        issuanceDetailsData.result.map((row, index) => ({
          id: index + 1,
          receivedQty: 0,
          ...row
        }))
      );
    }
  }, [issuanceDetailsData, refetchIssuanceDetailsData]);

  console.log('iss', iss);
  console.log('issuanceDetailsData', issuanceDetailsData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setIssuanceDetails((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const updatedRow = {
            ...row,
            [field]: value,
            // quantity: row.itpQuantity,
            // productName: row.fabricName,
            receivingId: 0,
            receivingDetId: 0,
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          // Recalculate the amount when rate or quantity is updated
          if (
            field === 'gradeAQty' ||
            field === 'gradeBQty' ||
            field === 'gradeCPQty' ||
            field === 'others1Qty'
          ) {
            updatedRow.receivedQty =
              (updatedRow.gradeAQty || 0) +
              (updatedRow.gradeBQty || 0) +
              (updatedRow.gradeCPQty || 0) +
              (updatedRow.others1Qty || 0);
          }
          return updatedRow;
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setFormData({
      ...formData,
      receivingTransactionsDetailsModelList: issuanceDetails
    });
  }, [issuanceDetails, setIssuanceDetails]);
  console.log('formData', formData);
  console.log('issuanceDetails', issuanceDetails);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Quantity',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },

    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'lastReceivedQty',
      headerName: 'Overall Received',
      valueGetter: (params, row) => {
        return (params - row.shortageQty).toLocaleString();
      }
    },
    {
      field: 'remaining',
      headerName: 'Remaining',
      valueGetter: (params, row) => {
        return (
          row.issuanceQuantity -
          (row.lastReceivedQty - row.shortageQty)
        ).toLocaleString();
      }
    },
    {
      field: 'receivedQty',
      headerName: 'Received qty',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          disabled
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={
            (params.row.gradeAQty || 0) +
            (params.row.gradeBQty || 0) +
            (params.row.gradeCPQty || 0) +
            (params.row.others1Qty || 0)
          }
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'receivedQty',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'gradeAQty',
      headerName: 'Grade A',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.gradeAQty || 0}
          defaultValue={10}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'gradeAQty',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'gradeBQty',
      headerName: 'Grade B',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.gradeBQty || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'gradeBQty',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'gradeCPQty',
      headerName: 'Cut Pc',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.gradeCPQty || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'gradeCPQty',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'others1Qty',
      headerName: 'Others',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.others1Qty || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'others1Qty',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'remarks',
      headerName: 'Remarks',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.remarks || ''}
          onKeyDown={(event) => {
            // console.log('Key down: ', event.key);
            event.stopPropagation();
          }}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'remarks',
              value: event.target.value
            })
          }
          // type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    }
  ];

  const fetchData = () => {
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      includeOutliers: true
    });
  };
  React.useEffect(() => {
    fetchData();
  });
  const [disable, setdisable] = useState(false);
  useEffect(() => {
    // for (let detail of issuanceDetails) {
    //   if (detail.issuanceQuantity === detail.lastReceivedQty) {
    //     setdisable(true);
    //     // enqueueSnackbar(
    //     //   'Error: Received quantity cannot be greater than issuance quantity!',
    //     //   {
    //     //     variant: 'error',
    //     //     autoHideDuration: 5000
    //     //   }
    //     // );
    //   }
    // }
    setdisable(
      issuanceDetails.every(
        (detail) => detail.issuanceQuantity === detail.lastReceivedQty
      )
    );
  }, [issuanceDetails, setIssuanceDetails]);
  console.log('newpayload', {
    ...formData,
    receivingTransactionsDetailsModelList: issuanceDetails.filter(
      (detail) => detail.receivedQty !== 0
    )
  });
  const handleIGP = async () => {
    for (let detail of issuanceDetails) {
      if (
        detail.receivedQty > detail.issuanceQuantity ||
        detail.issuanceQuantity === detail.lastReceivedQty
      ) {
        enqueueSnackbar(
          'Error: Received quantity cannot be greater than issuance quantity!',
          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        return; // Stop further execution
      }
      // else if (
      //   detail.dispatchedQuantity <
      //   (detail.gradeAQty || 0) +
      //     (detail.gradeBQty || 0) +
      //     (detail.gradeCPQty || 0) +
      //     (detail.others1Qty || 0)
      // ) {
      //   enqueueSnackbar(
      //     'Error: Received quantity cannot be greater than issuance quantity!',
      //     {
      //       variant: 'error',
      //       autoHideDuration: 5000
      //     }
      //   );
      //   return; // Stop further execution
      // }
    }
    try {
      const response = await axios.post(
        'http://100.42.177.77:86/api/Receiving/SaveReceiving',
        {
          ...formData,
          receivingTransactionsDetailsModelList: issuanceDetails.filter(
            (detail) => detail.receivedQty !== 0
          )
        }
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
      refetchIssuanceDetailsData();
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
          </TextField>{' '}
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            // select
            label="Dispatched"
            name="dispatchedQuantity"
            value={iss.dispatchedQuantity.toLocaleString()}
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
            select
            label="Select Location"
            name="locationId"
            value={formData.locationId}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {locationsList.map((option) => (
              <MenuItem key={option.locationId} value={option.locationId}>
                {option.section +
                  '.' +
                  option.aisle +
                  '.' +
                  option.rack +
                  '.' +
                  option.bin}
              </MenuItem>
            ))}
          </TextField>
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
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={issuanceDetails}
              columns={columns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              // checkboxSelection
              // onRowSelectionModelChange={handleRowSelectionModelChange}
              // rowSelectionModel={rowSelectionModel}
            />
          </div>
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleIGP}
            disabled={disable}
            // disabled={iss.status === 9}
          >
            Generate IGP
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReceivingDetails;
