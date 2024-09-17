import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useGetReceivingDetailsForInspectionQuery } from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { getValue } from '@mui/system';
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

const DyeingInspection = ({ rData, handleClose, refetch }) => {
  const [formData, setFormData] = useState({ inspectionId: 0, ...rData });
  const apiRef = useGridApiRef();

  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [receiveDetails, setReceiveDetails] = useState([]);
  const { data: receiveDetailsData, refetch: refetchReceiveDetailsData } =
    useGetReceivingDetailsForInspectionQuery(rData.receivingId, {
      skip: !rData.receivingId
    });

  useEffect(() => {
    if (receiveDetailsData?.result === null) {
      setReceiveDetails([]);
      return;
    }
    if (receiveDetailsData) {
      setReceiveDetails(
        receiveDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [receiveDetailsData, refetchReceiveDetailsData]);

  console.log('rData', rData);

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setReceiveDetails((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const expectedQty = (
            (row.issuanceQuantity * 100) /
            (100 + row.shrinkage + row.wastage)
          ).toFixed(2);

          const shortStock = Math.max(
            row.receivedQty -
              ((row.gradeAQty || 0) +
                (row.gradeBQty || 0) +
                (row.gradeCPQty || 0) +
                (row.others1Qty || 0)),
            0
          );
          const updatedRow = {
            ...row,
            [field]: value,
            // quantity: row.itpQuantity,
            // productName: row.fabricName,
            inspectionId: 0,
            inspectiondetId: 0,
            expectedQty: Number(expectedQty), // Add expectedQty to the row
            shortStock: Number(shortStock),
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          // Recalculate the amount when rate or quantity is updated
          // if (field === 'rate' || field === 'quantity') {
          //   updatedRow.amount = updatedRow.rate * updatedRow.quantity;
          // }

          // // Optionally, update amountAfterTax if it's a function of amount and tax
          // if (field === 'tax' || field === 'rate' || field === 'quantity') {
          //   updatedRow.amountAfterTax =
          //     updatedRow.amount + updatedRow.amount * (updatedRow.tax / 100);
          // }

          return updatedRow;
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setFormData({
      ...formData,
      inspectionTransactionsDetailsModelList: receiveDetails
    });
  }, [receiveDetails, setReceiveDetails]);
  console.log('formData', formData);
  console.log('receiveDetails', receiveDetails);

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
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Quantity Issued',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'receivedQty',
      headerName: 'Received',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'expectedQty',
      headerName: 'Expected',
      valueGetter: (value, row) => {
        return (
          ((row.issuanceQuantity * 100) / (100 + row.shrinkage + row.wastage))
            // .toFixed(2)
            .toLocaleString()
        );
      }
    },
    {
      field: 'recA',
      headerName: 'Rec. GradeA',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'recB',
      headerName: 'Rec. GradeB ',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'recCp',
      headerName: 'Rec. GradeCP',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'recOthers1',
      headerName: 'Rec. Others',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
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
      field: 'shortStock',
      headerName: 'Short Stock',
      valueGetter: (value, row) => {
        const expected = row.expectedQty;
        const received = row.receivedQty;
        const shortStock =
          row.receivedQty -
          ((row.gradeAQty || 0) +
            (row.gradeBQty || 0) +
            (row.gradeCPQty || 0) +
            (row.others1Qty || 0));
        if (shortStock > 0) {
          return shortStock.toLocaleString();
        } else {
          return 0;
        }
      }
    },
    {
      field: 'remarks',
      headerName: 'Remarks',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.remarks || ''}
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
  const handleSave = async () => {
    for (let detail of receiveDetails) {
      if (
        detail.receivedQty <
        (detail.gradeAQty || 0) +
          (detail.gradeBQty || 0) +
          (detail.gradeCPQty || 0) +
          (detail.others1Qty || 0)
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
    }
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/Receiving/SaveInspection',
        formData
      );
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
      refetch();
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
            label="IGP Number"
            name="igpNumber"
            value={rData.igpNumber}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="Process Type"
            name="processTypename"
            value={rData.processTypename}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            // select
            label="Vendor"
            name="vendorId"
            value={rData.vendorName}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            // type="date"
            label="IGP Creation Date "
            name="igpDate"
            value={new Date(rData.igpDate).toLocaleDateString('en-GB', {
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
              rows={receiveDetails}
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
            onClick={handleSave}
            // disabled={iss.status === 9}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DyeingInspection;
