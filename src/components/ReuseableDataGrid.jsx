// import React from 'react';
// import {
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   FormControl,
//   Typography,
//   Divider,
//   FormControlLabel,
//   Checkbox,
//   ButtonGroup,
//   Box,
//   IconButton,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary
// } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import axios from 'axios';

// const ReuseableDataGrid = ({
//   iColumns,
//   initialRows,
//   setInitialData,
//   deleteApi,
//   deleteBy,
//   refetch,
//   setAccordionExpanded
// }) => {
//   const handleEdit = (row) => {
//     setAccordionExpanded(true);
//     setInitialData(row);
//   };

//   // console.log('initialData', initialData);
//   const handleDelete = async (id) => {
//     console.log('deleteby', id);
//     try {
//       await axios.delete(`${deleteApi}${id}`);
//       // refetchEmbroideryList();
//       refetch();
//       console.log('deleted');
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//     // Handle delete logic
//   };

//   const columns = [
//     ...iColumns,
//     {
//       field: 'Action',
//       headerName: 'Actions',

//       renderCell: (params) => (
//         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//           <ButtonGroup size="small" variant="text">
//             <IconButton
//               aria-label="Edit"
//               // color="primary"
//               onClick={() => handleEdit(params.row)}
//             >
//               <EditIcon />
//             </IconButton>
//             <IconButton
//               aria-label="delete"
//               color="primary"
//               // onClick={() => handleDelete(params.row.schiffiliId)}
//               onClick={() => handleDelete(params.row[deleteBy])}
//               // onClick={() => console.log('DELETEBY', params.row[deleteBy])}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </ButtonGroup>
//         </div>
//       )
//     }
//   ];
//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: 'inherit',
//         '& .actions': {
//           color: 'text.secondary'
//         },
//         '& .textPrimary': {
//           color: 'text.primary'
//         }
//       }}
//     >
//       <DataGrid
//         // {...data}
//         rows={initialRows}
//         columns={columns}
//         rowLength={100}
//         sx={{
//           boxShadow: 2,
//           border: 2,
//           borderColor: 'primary.light',
//           '& .MuiDataGrid-cell:hover': {
//             color: 'primary.main'
//           }
//         }}
//       />
//     </Box>
//   );
// };

// export default ReuseableDataGrid;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

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
}) => {
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
    setAccordionExpanded(true);
    setInitialData(row);
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

  return (
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
