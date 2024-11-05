import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Chip,
  Stack
} from '@mui/material';
import {
  useGetReceivingDetailsForInspectionQuery,
  useGetReceivingHeaderQuery,
  useGetInspectionHeaderQuery
} from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { getValue } from '@mui/system';
import Receive from './../../Issuance/Receive';

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
  const { data: receivingData, refetch: refetchReceivingData } =
    useGetReceivingHeaderQuery(
      { poId: formData.poId, processTypename: 'Dyeing', status: 4 },
      {
        skip: !formData.poId // Skip the query if no collection is selected
      }
    );
  const { data: receiveDetailsData, refetch: refetchReceiveDetailsData } =
    useGetReceivingDetailsForInspectionQuery(rData.receivingId, {
      skip: !rData.receivingId
    });
  const { data: inspectionData, refetch: refetchInspectionData } =
    useGetInspectionHeaderQuery(rData.poId, {
      skip: !rData.poId // Skip the query if no collection is selected
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
          ...row,
          gradeAQty: 0,
          gradeBQty: 0,
          gradeCPQty: 0,
          others1Qty: 0,
          rejectedQty: 0,
          remarks: ''
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
          // const expectedQty = (
          //   (row.issuanceQuantity * 100) /
          //   (100 + row.shrinkage + row.wastage)
          // ).toFixed(2);
          const expectedQty = (
            row.issuanceQuantity *
            (1 - row.shrinkage / 100) *
            (1 - row.wastage / 100)
          ).toFixed(2);
          // (
          // (row.issuanceQuantity * (100 - row.shrinkage)) /
          // (100 + row.wastage)
          // ).toFixed(2);

          const shortageQty = Math.max(
            row.receivedQty -
              ((row.gradeAQty || 0) +
                (row.gradeBQty || 0) +
                (row.gradeCPQty || 0) +
                (row.rejectedQty || 0) +
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
            shortageQty: shortageQty,
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
            field === 'rejectedQty' ||
            field === 'others1Qty'
          ) {
            updatedRow.shortageQty = Math.max(
              updatedRow.receivedQty -
                ((updatedRow.gradeAQty || 0) +
                  (updatedRow.gradeBQty || 0) +
                  (updatedRow.gradeCPQty || 0) +
                  (updatedRow.rejectedQty || 0) +
                  (updatedRow.others1Qty || 0)),
              0
            );
          }

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
  const Quantity = receiveDetails
    .reduce((sum, row) => sum + (row.gradeAQty ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);
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
          return Number(params.toFixed(2)).toLocaleString();
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
          Number(
            (
              row.issuanceQuantity *
              (1 - row.shrinkage / 100) *
              (1 - row.wastage / 100)
            ).toFixed(2)
          )
            // .toFixed(2)
            .toLocaleString()
        );
      }
    },
    {
      field: 'receivedQty',
      headerName: 'Received',
      valueGetter: (params) => {
        if (params) {
          return Number(params.toFixed(2)).toLocaleString();
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
          error={params.row.gradeAQty > params.row.recA}
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
      field: 'shortageQty',
      headerName: 'Short Stock',
      valueGetter: (value, row) => {
        const expected = row.expectedQty;
        const received = row.receivedQty;
        const shortageQty =
          row.receivedQty -
          ((row.gradeAQty || 0) +
            (row.gradeBQty || 0) +
            (row.gradeCPQty || 0) +
            (row.rejectedQty || 0) +
            (row.others1Qty || 0));
        if (shortageQty > 0) {
          return shortageQty.toLocaleString();
        } else {
          return 0;
        }
      },
      valueSetter: (value, row) => {
        const expected = row.expectedQty;
        const received = row.receivedQty;
        const shortageQty =
          row.receivedQty -
          ((row.gradeAQty || 0) +
            (row.gradeBQty || 0) +
            (row.gradeCPQty || 0) +
            (row.rejectedQty || 0) +
            (row.others1Qty || 0));
        if (shortageQty > 0) {
          return shortageQty.toLocaleString();
        } else {
          return 0;
        }
      }
    },
    {
      field: 'rejectedQty',
      headerName: 'Rejected',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.rejectedQty || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'rejectedQty',
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
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.remarks || ''}
          onKeyDown={(event) => {
            console.log('Key down: ', event.key);
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
  const columnsView = [
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
          return Number(params.toFixed(2)).toLocaleString();
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
          return Number(params.toFixed(2)).toLocaleString();
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
          Number(
            (
              row.issuanceQuantity *
              (1 - row.shrinkage / 100) *
              (1 - row.wastage / 100)
            ).toFixed(2)
          )
            // .toFixed(2)
            .toLocaleString()
        );
      }
    },
    {
      field: 'recA',
      headerName: 'Grade A',
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
      headerName: 'Grade B ',
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
      headerName: 'Grade CP',
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
      headerName: 'Others',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
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
          (detail.rejectedQty || 0) +
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
      refetchInspectionData();
      refetchReceivingData();
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
        <Grid item xs={12} textAlign="right">
          <Typography
            variant="subtitle1"
            sx={{ display: 'block', fontWeight: 'bold', fontSize: 15 }}
          >
            GradeA Sum{' '}
            <Chip
              label={Quantity.toLocaleString()}
              sx={{
                backgroundColor: '#90caf9', // Assigned Qty color
                color: '#FFFFFF' // White text
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', fontSize: 15 }}
            >
              Shrinkage: {receiveDetails[0]?.shrinkage ?? 'N/A'}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', fontSize: 15 }}
            >
              Wastage: {receiveDetails[0]?.wastage ?? 'N/A'}
            </Typography>
          </Stack>
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
          <Box
            sx={{
              height: 'auto',
              // maxHeight: 500,
              // overflow: 'auto',
              width: 'inherit',
              '& .actions': {
                color: 'text.secondary'
              },
              '& .textPrimary': {
                color: 'text.primary'
              },
              '& .bold': {
                fontWeight: 600
              }
            }}
          >
            <DataGrid
              rows={receiveDetails}
              columns={columns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              sx={{
                // overflow: 'auto', // Ensure scrolling is not affected by styles
                '& .MuiDataGrid-root': {
                  overflow: 'auto'
                },

                /////////////////
                '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                '& .css-1kyxv1r-MuiDataGrid-root': {
                  color: 'white',
                  backgroundColor: '#323232'
                },
                '& .MuiDataGrid-container--top [role=row]': {
                  color: 'white',
                  backgroundColor: '#323232'
                },
                '& .MuiDataGrid-columnSeparator': {
                  color: 'white'
                },
                '& .MuiDataGrid-iconButtonContainer': {
                  color: 'white'
                },
                '& .MuiDataGrid-sortIcon': {
                  color: 'white'
                },
                '& .css-ptiqhd-MuiSvgIcon-root ': { color: 'white' },
                '& .MuiDataGrid-row': {
                  '&.total-summary-row': {
                    backgroundColor: 'darkgray'
                  }
                }
              }}
              // checkboxSelection
              // onRowSelectionModelChange={handleRowSelectionModelChange}
              // rowSelectionModel={rowSelectionModel}
            />
          </Box>
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
        <Grid item xs={12}>
          <Typography variant="h2">Received</Typography>
        </Grid>

        <Grid item xs={12}>
          {/* <div style={{ height: 400, width: '100%' }}> */}
          <ReuseableDataGrid
            initialRows={receiveDetails}
            iColumns={columnsView}
            hideAction
            // apiRef={apiRef}
            // disableRowSelectionOnClick
            // checkboxSelection
            // onRowSelectionModelChange={handleRowSelectionModelChange}
            // rowSelectionModel={rowSelectionModel}
          />
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default DyeingInspection;
