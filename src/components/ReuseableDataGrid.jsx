import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonGroup, Box, IconButton } from '@mui/material';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import ExcelExport from './ExcelExport';
import loadingGif from '../assets/images/loading1.svg';

import axios from 'axios';

const ReuseableDataGrid = ({
  iColumns,
  initialRows,
  setInitialData,
  deleteApi,
  deleteBy,
  refetch,
  setAccordionExpanded,
  getCellClassName,
  fileName
  // loadingGif
}) => {
  console.log('type of initial rows', typeof initialRows.length);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);

  function EditToolbar() {
    // const handleClick = () => {
    //   setAccordionExpanded(true);
    // };

    return (
      <GridToolbarContainer sx={{ justifyContent: 'end' }}>
        {/* <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleClick}
          // disabled={disableAddRecord}
          disab
        >
          Add record
        </Button> */}
        <ExcelExport data={initialRows} fileName={fileName} />
      </GridToolbarContainer>
    );
  }

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleEdit = (row) => {
    console.log('row.embroideryId', row.embroideryId);
    if (row.embroideryId) {
      const threadAdditionalArray = row.threadAdditional
        ? row.threadAdditional.split(',').map((item) => item.trim())
        : [];

      setInitialData({
        ...row,
        threadAdditional: threadAdditionalArray
      });
    } else {
      setAccordionExpanded(true);
      setInitialData(row);
    }
  };

  const handleDelete = async () => {
    console.log('deleteby', deleteId);
    try {
      await axios.delete(`${deleteApi}${deleteId}`);
      refetch();
      console.log('deleted');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    handleClose();
  };

  const columns = [
    ...iColumns,
    {
      field: 'Action',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup size="small" variant="text">
            <IconButton
              aria-label="Edit"
              onClick={() => handleEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => handleClickOpen(params.row[deleteBy])}
            >
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

  return initialRows.length === 0 ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src={loadingGif}
        alt="Loading"
        style={{
          width: 200,
          height: 200
        }}
      />
    </div>
  ) : (
    <Box
      sx={{
        height: 500,
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
        rows={initialRows}
        columns={columns}
        rowLength={100}
        getCellClassName={getCellClassName}
        slots={{ toolbar: EditToolbar }}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main'
          }
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReuseableDataGrid;
