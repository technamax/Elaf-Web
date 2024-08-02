import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

const columns = [
  { field: 'fabricName', headerName: 'Fabric Name', flex: 1 },
  { field: 'uomName', headerName: 'Uom Name', flex: 1 },
  { field: 'assignQty', headerName: 'Assign Qty', flex: 1 },
  { field: 'rate', headerName: 'Rate', flex: 1 },
  { field: 'tax', headerName: 'Tax', flex: 1 },
  { field: 'totalBeforeTax', headerName: 'Total Before Tax', flex: 1 },
  { field: 'totalAfterTax', headerName: 'Total After Tax', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 }
];

const rows = [
  {
    id: 1,
    fabricName: 'Lawn-80x80/102x88-62',
    uomName: 'Meters',
    assignQty: 4000,
    rate: 10,
    tax: 10,
    totalBeforeTax: 40000,
    totalAfterTax: 44000,
    status: 'Draft'
  },
  {
    id: 2,
    fabricName: 'Bambar Chiffon',
    uomName: 'Meters',
    assignQty: 10,
    rate: 10,
    tax: 10,
    totalBeforeTax: 100,
    totalAfterTax: 110,
    status: 'Draft'
  },
  {
    id: 3,
    fabricName: 'Shamooz Silk',
    uomName: 'Meters',
    assignQty: 10,
    rate: 10,
    tax: 10,
    totalBeforeTax: 100,
    totalAfterTax: 110,
    status: 'Draft'
  },
  {
    id: 4,
    fabricName: 'Cambric 60x40/90x70',
    uomName: 'Meters',
    assignQty: 199,
    rate: 10,
    tax: 10,
    totalBeforeTax: 1990,
    totalAfterTax: 2189,
    status: 'Draft'
  }
];

const IssuanceView = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Issuance View</DialogTitle>
        <DialogContent>
          <DataGrid rows={rows} columns={columns} autoHeight />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default IssuanceView;
