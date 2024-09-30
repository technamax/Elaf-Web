import * as React from 'react';
import { useCallback, useEffect, useState, useRef } from 'react';

import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonGroup, Box, IconButton, Typography } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ExcelExport from './ExcelExport';
import loadingGif from '../assets/images/loading1.svg';
import { useSnackbar } from 'notistack';

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
  fileName,
  disableEdit,
  disableDelete,
  setIsEdit,
  autoSizeColumns,
  isLoading,
  height,
  checkboxSelection,
  onRowSelectionModelChange,
  hideAction,
  onRowDoubleClick
  // Make sure to pass checkboxSelection
}) => {
  const apiRef = useGridApiRef();
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const componentRef = React.useRef();

  function EditToolbar() {
    return (
      <GridToolbarContainer sx={{ justifyContent: 'end' }}>
        <ExcelExport data={initialRows} fileName={fileName} />
        <ReactToPrint
          trigger={() => (
            <IconButton aria-label="print">
              <PrintIcon />
            </IconButton>
          )}
          content={() => componentRef.current}
          pageStyle="@page { margin-top: 1in; margin-bottom: 1in; }"
        />
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
    window.scrollTo({ top: 100, behavior: 'smooth' });
    if (row.embroideryIdDet) {
      const additionalArray = row.additional
        ? row.additional.split(',').map((item) => item.trim())
        : [];

      setInitialData({
        ...row,
        additional: additionalArray
      });
    } else {
      if (setAccordionExpanded) {
        setAccordionExpanded(true);
      }
      if (setIsEdit) {
        setIsEdit(true);
      }
      setInitialData(row);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${deleteApi}${deleteId}`);
      if (!response.data.success) {
        enqueueSnackbar(
          `${response.data.message} !`,

          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
      }
      if (response.data.success) {
        enqueueSnackbar(
          `${response.data.message} !`,

          {
            variant: 'success',
            autoHideDuration: 5000
          }
        );
      }
      refetch();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    handleClose();
  };

  const columns = [
    ...iColumns,
    !hideAction
      ? {
          field: 'Action',
          headerName: 'Actions',
          renderCell: (params) => (
            <div style={{ display: 'flex' }}>
              <ButtonGroup size="small" variant="text">
                {/* {!disableEdit && ( */}
                <IconButton
                  aria-label="Edit"
                  onClick={() => handleEdit(params.row)}
                  disabled={disableEdit}
                >
                  <EditIcon />
                </IconButton>
                {/* )} */}
                {/* {!disableDelete && ( */}
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() => handleClickOpen(params.row[deleteBy])}
                  disabled={disableDelete}
                >
                  <DeleteIcon />
                </IconButton>
                {/* )} */}
              </ButtonGroup>
            </div>
          )
        }
      : null
  ].filter(Boolean);

  // const handleStateChange = (params) => {
  //   if (apiRef.current && apiRef.current.autosizeColumns) {
  //     apiRef.current.autosizeColumns({
  //       // columns: autoSizeColumns,
  //       includeOutliers: true,
  //       includeHeaders: true
  //     });
  //   }
  // };

  const handleStateChange = useCallback(() => {
    if (apiRef.current && apiRef.current.autosizeColumns) {
      apiRef.current.autosizeColumns({
        includeOutliers: true,
        includeHeaders: true
      });
    }
  }, [apiRef]);

  useEffect(() => {
    handleStateChange();
  }, [handleStateChange, initialRows]);

  const getRowStyle = (params) => {
    if (params.id === 'TOTAL_SUMMARY') {
      return {
        backgroundColor: 'darkgray'
      };
    }
    return {};
  };

  return (
    <Box
      sx={{
        height: 'auto', // Let the box adjust based on content
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
        apiRef={apiRef}
        ref={componentRef}
        autosizeOnMount
        autoPageSize
        onRowDoubleClick={onRowDoubleClick}
        checkboxSelection={checkboxSelection}
        getCellClassName={getCellClassName}
        onRowSelectionModelChange={onRowSelectionModelChange}
        onStateChange={handleStateChange}
        autoHeight={false} // Disable autoHeight to let the grid control height
        slots={{ toolbar: EditToolbar }}
        sx={{
          height: height ? 'auto' : 600, // Ensure a fixed height so that DataGrid can scroll within
          '& .MuiDataGrid-root': {
            overflow: 'auto' // Enable scroll only for DataGrid
          },
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
          '& .css-ptiqhd-MuiSvgIcon-root': {
            color: 'white'
          },
          '& .MuiDataGrid-row': {
            '&.total-summary-row': {
              backgroundColor: 'darkgray'
            }
          }
        }}
        getRowClassName={(params) =>
          params.id === 'TOTAL_SUMMARY' ? 'total-summary-row' : ''
        }
      />

      {/* Dialog for delete confirmation */}
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

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// import * as React from 'react';
// import ReactToPrint from 'react-to-print';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { ButtonGroup, Box, IconButton, Typography } from '@mui/material';
// import {
//   DataGrid,
//   GridToolbarContainer,
//   useGridApiRef
// } from '@mui/x-data-grid';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import ExcelExport from './ExcelExport';
// import loadingGif from '../assets/images/loading1.svg';

// import axios from 'axios';

// const ReuseableDataGrid = ({
//   iColumns,
//   initialRows,
//   setInitialData,
//   deleteApi,
//   deleteBy,
//   refetch,
//   setAccordionExpanded,
//   getCellClassName,
//   fileName,
//   disableEdit,
//   disableDelete,
//   setIsEdit,
//   autoSizeColumns,
//   isLoading,
//   height
// }) => {
//   const apiRef = useGridApiRef();
//   const [open, setOpen] = React.useState(false);
//   const [deleteId, setDeleteId] = React.useState(null);
//   const componentRef = React.useRef();

//   function EditToolbar() {
//     return (
//       <GridToolbarContainer sx={{ justifyContent: 'end' }}>
//         <ExcelExport data={initialRows} fileName={fileName} />
//       </GridToolbarContainer>
//     );
//   }

//   const handleClickOpen = (id) => {
//     setDeleteId(id);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setDeleteId(null);
//   };

//   const handleEdit = (row) => {
//     window.scrollTo({ top: 100, behavior: 'smooth' });
//     if (row.embroideryIdDet) {
//       const additionalArray = row.additional
//         ? row.additional.split(',').map((item) => item.trim())
//         : [];

//       setInitialData({
//         ...row,
//         additional: additionalArray
//       });
//     } else {
//       if (setAccordionExpanded) {
//         setAccordionExpanded(true);
//       }
//       if (setIsEdit) {
//         setIsEdit(true);
//       }
//       setInitialData(row);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`${deleteApi}${deleteId}`);
//       refetch();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//     handleClose();
//   };

//   const columns = [
//     ...iColumns,
//     {
//       field: 'Action',
//       headerName: 'Actions',
//       renderCell: (params) => (
//         <div style={{ display: 'flex' }}>
//           <ButtonGroup size="small" variant="text">
//             {disableEdit ? null : (
//               <IconButton
//                 aria-label="Edit"
//                 onClick={() => handleEdit(params.row)}
//               >
//                 <EditIcon />
//               </IconButton>
//             )}
//             {disableDelete ? null : (
//               <IconButton
//                 aria-label="delete"
//                 color="primary"
//                 onClick={() => handleClickOpen(params.row[deleteBy])}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             )}
//           </ButtonGroup>
//         </div>
//       )
//     }
//   ];

//   const handleStateChange = (params) => {
//     if (apiRef.current && apiRef.current.autosizeColumns) {
//       apiRef.current.autosizeColumns({
//         // columns: autoSizeColumns,
//         includeOutliers: true,
//         includeHeaders: true
//       });
//     }
//   };

//   const getRowStyle = (params) => {
//     if (params.id === 'TOTAL_SUMMARY') {
//       return {
//         backgroundColor: 'darkgray'
//       };
//     }
//     return {};
//   };

//   return (
//     <Box
//       sx={{
//         height: height ? height : 500,
//         width: 'inherit',
//         '& .actions': {
//           color: 'text.secondary'
//         },
//         '& .textPrimary': {
//           color: 'text.primary'
//         },
//         '& .bold': {
//           fontWeight: 600
//         }
//       }}
//     >
//       <DataGrid
//         rows={initialRows}
//         columns={columns}
//         // rowLength={100}
//         apiRef={apiRef}
//         autosizeOnMount
//         getCellClassName={getCellClassName}
//         onStateChange={handleStateChange}
//         slots={{ toolbar: EditToolbar }}
//         sx={{
//           '--DataGrid-rowBorderColor': 'rgb(255 255 255)',

//           '& .MuiDataGrid-row': {
//             '&.total-summary-row': {
//               backgroundColor: 'darkgray'
//             }
//           }
//         }}
//         getRowClassName={(params) =>
//           params.id === 'TOTAL_SUMMARY' ? 'total-summary-row' : ''
//         }
//       />
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{'Confirm Delete'}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this item?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleDelete} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
//   // );
// };

// export default ReuseableDataGrid;
