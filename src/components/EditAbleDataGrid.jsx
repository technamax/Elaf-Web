/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import { TextField } from '@mui/material';

export default function FullFeaturedCrudGrid({ initialRows, ncolumns }) {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const roles = ['Market', 'Finance', 'Development'];
  console.log(initialRows);
  console.log(rows);
  //   const initialRows = [
  //     {
  //       id: 1,
  //       name: 'jhon',
  //       age: 25,
  //       joinDate: new Date('2024-05-25'),
  //       role: 'developer'
  //     },
  //     {
  //       id: 2,
  //       name: 'jhon',
  //       age: 25,
  //       joinDate: new Date('2024-05-25'),
  //       role: 'developer'
  //     },
  //     {
  //       id: 3,
  //       name: 'jhon',
  //       age: 25,
  //       joinDate: new Date('2024-05-25'),
  //       role: 'developer'
  //     },
  //     {
  //       id: 4,
  //       name: 'jhon',
  //       age: 25,
  //       joinDate: new Date('2024-05-25'),
  //       role: 'developer'
  //     },
  //     {
  //       id: 5,
  //       name: 'jhon',
  //       age: 25,
  //       joinDate: new Date('2024-05-25'),
  //       role: 'developer'
  //     }
  //   ];
  //   console.log(initialRows.length);

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = initialRows.length + 1;
      setRows((oldRows) => [
        ...oldRows,
        { id, name: '', age: '', isNew: true }
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

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

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  console.log([...ncolumns]);
  const columns = [
    //   { field: 'name', headerName: 'Name', width: 180, editable: true },
    //   {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 80,
    //     align: 'left',
    //     headerAlign: 'left',
    //     editable: true
    //   },
    //   {
    //     field: 'joinDate',
    //     headerName: 'Join date',
    //     type: 'date',
    //     width: 180,
    //     editable: true
    //   },
    //   {
    //     field: 'role',
    //     headerName: 'Department',
    //     width: 220,
    //     editable: true,
    //     type: 'singleSelect',
    //     valueOptions: ['Market', 'Finance', 'Development']
    //   },
    ...ncolumns,

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              sx={{
                color: 'error.dark'
              }}
            />
          ];
        }
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            sx={{
              color: 'secondary.dark'
            }}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            sx={{
              color: 'error.dark'
            }}
          />
        ];
      }
    }
  ];
  console.log(columns);
  return (
    <Box
      sx={{
        height: 500,
        width: 'Inherit',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
      />
    </Box>
  );
}
