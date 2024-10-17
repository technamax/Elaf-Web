import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Chip,
  ButtonGroup
} from '@mui/material';
import {
  useGetDebitNoteInfoByPoIdQuery,
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

const POClose = ({ rData, handleClose, refetch, shortage }) => {
  const [formData, setFormData] = useState({ ...rData });
  const apiRef = useGridApiRef();

  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [debitNote, setDebitNote] = useState([]);
  // const { data: receivingData, refetch: refetchReceivingData } =
  //   useGetReceivingHeaderQuery(
  //     { poId: formData.poId, processTypename: 'Dyeing', status: 4 },
  //     {
  //       skip: !formData.poId // Skip the query if no collection is selected
  //     }
  //   );
  const { data: debitNoteData, refetch: refetchDebitNoteData } =
    useGetDebitNoteInfoByPoIdQuery(rData.poId, {
      skip: !rData.poId
    });
  // const { data: inspectionData, refetch: refetchInspectionData } =
  //   useGetInspectionHeaderQuery(rData.poId, {
  //     skip: !rData.poId // Skip the query if no collection is selected
  //   });

  useEffect(() => {
    if (debitNoteData?.result === null) {
      setDebitNote([]);
      return;
    }
    if (debitNoteData) {
      setDebitNote(
        debitNoteData.result.map((row, index) => ({
          id: index + 1,
          ...row,
          dnId: 0,
          remarks: '',
          total: row.rate * row.shortFall,
          appId: user.appId,
          createdOn: new Date().toISOString(),
          createdBy: user.empId,
          lastUpdatedOn: new Date().toISOString(),
          lastUpdatedBy: user.empId
          // gradeBQty: 0,
          // gradeCPQty: 0,
          // others1Qty: 0,
          // rejectedQty: 0,
          // remarks: ''
        }))
      );
    }
  }, [debitNoteData, refetchDebitNoteData]);

  console.log('rData', rData);

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setDebitNote((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          // const total =
          //   (row.rate *  row.shortFall)

          // const shortageQty = Math.max(
          //   row.receivedQty -
          //     ((row.rate || 0) +
          //       (row.gradeBQty || 0) +
          //       (row.gradeCPQty || 0) +
          //       (row.rejectedQty || 0) +
          //       (row.others1Qty || 0)),
          //   0
          // );
          const updatedRow = {
            ...row,
            [field]: value,
            // quantity: row.itpQuantity,
            // productName: row.fabricName,
            dnId: 0,
            // inspectiondetId: 0,
            // expectedQty: Number(expectedQty), // Add expectedQty to the row
            // shortageQty: shortageQty,
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          // // Recalculate the amount when rate or quantity is updated
          // if (
          //   field === 'rate' ||
          //   field === 'gradeBQty' ||
          //   field === 'gradeCPQty' ||
          //   field === 'rejectedQty' ||
          //   field === 'others1Qty'
          // ) {
          //   updatedRow.shortageQty = Math.max(
          //     updatedRow.receivedQty -
          //       ((updatedRow.rate || 0) +
          //         (updatedRow.gradeBQty || 0) +
          //         (updatedRow.gradeCPQty || 0) +
          //         (updatedRow.rejectedQty || 0) +
          //         (updatedRow.others1Qty || 0)),
          //     0
          //   );
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
      ...debitNote[0]
      // inspectionTransactionsDetailsModelList: debitNote
    });
  }, [debitNote, setDebitNote]);
  console.log('formData', formData);
  console.log('debitNote', debitNote);
  // const Quantity = debitNote
  //   .reduce((sum, row) => sum + (row.rate ?? 0), 0)
  //   .toFixed(2);
  console.log('shortage', shortage);
  const handleSave = async (data) => {
    console.log('rowadata', data);
    // for (let detail of debitNote) {
    //   if (
    //     detail.receivedQty <
    //     (detail.rate || 0) +
    //       (detail.gradeBQty || 0) +
    //       (detail.gradeCPQty || 0) +
    //       (detail.rejectedQty || 0) +
    //       (detail.others1Qty || 0)
    //   ) {
    //     enqueueSnackbar(
    //       'Error: Received quantity cannot be greater than issuance quantity!',
    //       {
    //         variant: 'error',
    //         autoHideDuration: 5000
    //       }
    //     );
    //     return; // Stop further execution
    //   }
    // }
    try {
      const response = await axios.post(
        'http://100.42.177.77:81/api/PO/SaveDebitNote',
        data
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
      refetchDebitNoteData();
      refetch();
      // refetchInspectionData();
      // refetchReceivingData();
      console.log('Save response:', response.data);
      // handleClose();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to start Process', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
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
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'shortFall',
      headerName: 'Quantity',
      valueGetter: (params) => {
        if (params) {
          return Number(params.toFixed(2)).toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'total',
      headerName: 'Total',
      renderCell: (params) => {
        return Number(
          (params.row.rate * params.row.shortFall).toFixed(2)
        ).toLocaleString();
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
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small" sx={{ mt: 1 }}>
            <Button
              size="small"
              color="primary"
              onClick={() => handleSave(params.row)}
              disabled={params.row.dnExist === 1}
            >
              Debit Note
            </Button>
          </ButtonGroup>
        </div>
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
      field: 'expectedQty',
      headerName: 'Expected',
      valueGetter: (params) => {
        if (params) {
          return Number(params.toFixed(2)).toLocaleString();
          // return params.row.expectedQty;
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
      field: 'grnaQty',
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
      field: 'short',
      headerName: 'ShortFall',
      valueGetter: (params, row) => {
        // console.log('rowparams', row);
        if (row) {
          return Number(
            row.expectedQty - row.grnaQty.toFixed(2)
          ).toLocaleString();
        } else {
          return '0';
        }
      }
    }
  ];
  const [disable, setDisable] = useState(null);
  useEffect(() => {
    setDisable(debitNote.some((db) => db.dnExist === 0));
  }, [debitNoteData, refetchDebitNoteData, debitNote]);
  const fetchData = () => {
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      includeOutliers: true
    });
  };
  React.useEffect(() => {
    fetchData();
  });
  console.log('db.dnExist', debitNote[0]?.dnExist, 'disable:', disable);
  const handleClosePO = async () => {
    try {
      const response = await axios.post(
        `http://100.42.177.77:81/api/PO/ClosePO?poId=${rData.poId}`
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
      // refetchInspectionData();
      // refetchReceivingData();
      console.log('Save response:', response.data);
      // handleClose();
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
            name="production"
            value={rData.collectionName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="PO #"
            name="poIdName"
            value={rData.poIdName}
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
        <Grid item xs={3} textAlign="left" sx={{ mt: 0.5 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleClosePO}
            disabled={disable}
          >
            CLose
          </Button>
        </Grid>
        {/* <Grid item xs={12} md={3}>
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
              rows={debitNote}
              columns={columns}
              apiRef={apiRef}
              disableRowSelectionOnClick
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
        </Grid> */}
        <Grid item xs={12}>
          <Typography variant="h2">ShortFall</Typography>
        </Grid>

        <Grid item xs={12}>
          {/* <div style={{ height: 400, width: '100%' }}> */}
          <ReuseableDataGrid
            initialRows={shortage}
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
              rows={debitNote}
              columns={columns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              // checkboxSelection
              // onRowSelectionModelChange={handleRowSelectionModelChange}
              // rowSelectionModel={rowSelectionModel}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default POClose;
