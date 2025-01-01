// import React, { useState } from 'react';
// import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import { FormControlLabel, Switch } from '@mui/material';

// const EditableDataGrid = ({ columns, rows, setRows, processRowUpdate }) => {
//   const [rowModesModel, setRowModesModel] = useState({});
//   console.log("Modes", rowModesModel);

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View, ignoreModifications: true } });
//   };

//   // const handleDeleteClick = (id) => () => {
//   //   setRows(rows.filter((row) => row.id !== id));
//   // };


//   return (
//     <DataGrid
//       columns={[
//         ...columns,
//         {
//           field: 'actions',
//           headerName: 'Actions',
//           type: 'actions',
//           width: 100,
//           cellClassName: 'actions',
//           getActions: ({ id }) => {
//             const isInEditMode = rowModesModel[id]?.mode === 'edit';

//             if (isInEditMode) {
//               return [
//                 <GridActionsCellItem icon={<SaveIcon />} label="Save" sx={{ color: 'primary.main' }} onClick={handleSaveClick(id)} />,
//                 <GridActionsCellItem icon={<CancelIcon />} label="Cancel" onClick={handleCancelClick(id)} color="inherit" />
//               ];
//             }

//             return [
//               <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={handleEditClick(id)} color="inherit" />,
//               // <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
//             ];
//           }
//         }
//       ]}
//       rows={rows}
//       rowModesModel={rowModesModel}
//       onRowModesModelChange={handleRowModesModelChange}
//       onRowEditStop={handleRowEditStop}
//       processRowUpdate={processRowUpdate}
//       onProcessRowUpdateError={(error) => console.log("Row Update Error", error)}
//       editMode="row"
//       checkboxSelection
//       onSelectionModelChange={(ids) => {
//         const selectedIDs = new Set(ids);
//         const selectedRowData = rows.filter((row) =>
//           selectedIDs.has(row.id.toString())
//         );
//         console.log(selectedRowData);
//       }}
//     />
//   );
// };

// export default EditableDataGrid;


import React, { useState, useEffect } from 'react';
import { GridRowModes, DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { FormControlLabel, Switch } from '@mui/material';

const EditableDataGrid = ({ columns, rows, setRows, processRowUpdate, handleSelectoinModelChange }) => {
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    console.log("Rows in EditableDataGrid:", rows);
  }, [rows]);

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View, ignoreModifications: true } });
  };

  return (
    <DataGrid
      columns={[
        ...columns,
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 100,
          cellClassName: 'actions',
          getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === 'edit';

            if (isInEditMode) {
              return [
                <GridActionsCellItem icon={<SaveIcon />} label="Save" sx={{ color: 'primary.main' }} onClick={handleSaveClick(id)} />,
                <GridActionsCellItem icon={<CancelIcon />} label="Cancel" onClick={handleCancelClick(id)} color="inherit" />
              ];
            }

            return [
              <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={handleEditClick(id)} color="inherit" />,
              // <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />
            ];
          }
        }
      ]}
      rows={rows}
      rowModesModel={rowModesModel}
      onRowModesModelChange={handleRowModesModelChange}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={(error) => console.log("Row Update Error", error)}
      editMode="row"
      checkboxSelection
      onRowSelectionModelChange={handleSelectoinModelChange}
    />
  );
};

export default EditableDataGrid;
