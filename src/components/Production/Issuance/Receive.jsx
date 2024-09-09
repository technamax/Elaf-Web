import * as React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { TextField, Grid, Button } from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { style, width } from '@mui/system';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';

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

const Receive = ({
  fabrics,
  setFabrics,
  stockId,
  handleClose,
  refetchStockData
}) => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [formData, setFormData] = React.useState({ stockId: stockId });
  console.log('receiveFormData', formData);
  const [formErrors, setFormErrors] = useState({});

  const apiRef = useGridApiRef();

  const fFabrics = fabrics.filter((row) => row.itpQuantity > 0);
  console.log('fabrics', fabrics);
  console.log('fFabrics', fFabrics);

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setFabrics((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const updatedRow = {
            ...row,
            [field]: value,
            quantity: row.itpQuantity,
            productName: row.fabricName,
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          // Recalculate the amount when rate or quantity is updated
          if (field === 'rate' || field === 'quantity') {
            updatedRow.amount = updatedRow.rate * updatedRow.quantity;
          }

          // Optionally, update amountAfterTax if it's a function of amount and tax
          if (field === 'tax' || field === 'rate' || field === 'quantity') {
            updatedRow.amountAfterTax =
              updatedRow.amount + updatedRow.amount * (updatedRow.tax / 100);
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
      stockReceivingDetails: fabrics.filter((row) => row.itpQuantity > 0)
    });
  }, [fabrics, setFabrics]);
  console.log('fabrics', fabrics);

  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'barcode',
      headerName: 'Barcode'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'assignQty',
      headerName: 'Assigned Qty',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'itpQuantity',
      headerName: 'itp Qty Received',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'quantity',
      headerName: 'add qty',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          disabled
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.itpQuantity || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'quantity',
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
      field: 'rate',
      headerName: 'Rate',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.rate || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'rate',
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
      field: 'tax',
      headerName: 'Tax',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.tax || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'tax',
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
      field: 'amount',
      headerName: 'Amount',
      renderCell: (params) => {
        const amount = params.row.rate * params.row.quantity || 0;
        const formattedAmount = amount.toLocaleString();
        return (
          <SmallTextField
            variant="outlined"
            size="small"
            sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
            value={formattedAmount} // Display formatted amount
            type="text" // Use text type for formatted display
            InputProps={{
              style: { fontSize: '0.875rem' } // Ensure the font size is suitable
            }}
          />
        );
      }
    },
    {
      field: 'amountAfterTax',
      headerName: 'Amount After Tax',
      renderCell: (params) => {
        const amountAfterTax = params.row.amountAfterTax || 0;
        const formattedAmountAfterTax = amountAfterTax.toLocaleString();
        return (
          <SmallTextField
            variant="outlined"
            size="small"
            sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
            value={formattedAmountAfterTax} // Display formatted amount
            onChange={(event) => {
              const numericValue = Number(event.target.value.replace(/,/g, ''));
              handleCellEdit({
                id: params.id,
                field: 'amountAfterTax',
                value: numericValue
              });
            }}
            type="text"
            InputProps={{
              style: { fontSize: '0.875rem' } // Ensure the font size is suitable
            }}
          />
        );
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
    const missingRates = fFabrics.some(
      (row) => row.rate === undefined || row.rate === 0
    );

    if (missingRates) {
      enqueueSnackbar('Please enter rate for all fabrics before saving!', {
        variant: 'warning',
        autoHideDuration: 5000
      });
      return;
    }
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/StockReceiving/SaveStockReceivingDetails',
        formData
      );
      console.log('Save response:', response.data);

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
      refetchStockData();
      handleClose();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to save', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  return (
    <Grid
      container
      spacing={1}
      width="Inherit"
      sx={{ paddingY: 2, paddingX: 2 }}
    >
      <Grid item xs={12}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={fFabrics}
            columns={designsColumns}
            pageSize={10}
            apiRef={apiRef}
            disableRowSelectionOnClick
          />
        </div>
      </Grid>
      <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
        <Button variant="contained" size="small" onClick={handleSave}>
          Receive
        </Button>
      </Grid>{' '}
    </Grid>
  );
};

export default Receive;
