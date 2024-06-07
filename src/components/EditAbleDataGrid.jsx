import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes
} from '@mui/x-data-grid';
import axios from 'axios';
import dayjs from 'dayjs';

import { TextField, Grid } from '@mui/material';

export default function FullFeaturedCrudGrid({
  initialRows,
  ncolumns,
  // fetchData,
  formData,
  deleteApi,
  disableDelete,
  deleteBy,
  editAPi,
  disableEdit,
  disableAddRecord,
  refetch
}) {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  // console.log(initialRows);
  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = rows.length + 1;
      const newRow = {
        id,
        ...formData,
        isNew: true
      };

      setRows((oldRows) => [...oldRows, newRow]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'collectionName' }
      }));
    };

    return (
      <GridToolbarContainer>
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleClick}
          disab
        >
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

  // const handleDeleteClick = (id) => async () => {
  //   const rowToDelete = rows.find((row) => row.id === id);
  //   try {
  //     // await axios.delete(`${deleteApi}${rowToDelete.collectionId}`);
  //     await axios.delete(`${deleteApi}${rowToDelete.deleteBy}`);
  //     setRows(rows.filter((row) => row.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting data:', error);
  //   }
  // };
  const handleDeleteClick = (id) => async () => {
    const rowToDelete = rows.find((row) => row.id === id);
    const deleteId = rowToDelete[deleteBy]; // Access the dynamic deleteBy ID
    try {
      await axios.delete(`${deleteApi}${deleteId}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
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

  const processRowUpdate = async (newRow, oldRow) => {
    console.log('newRow', newRow);
    try {
      const { id, ...formattedRow } = newRow;
      console.log('formattedRow', formattedRow);

      // Format date fields if necessary
      // const formattedDates = {
      //   planningDate: formattedRow.planningDate
      //     ? dayjs(formattedRow.planningDate).format('YYYY-MM-DD')
      //     : null,
      //   launchDate: formattedRow.launchDate
      //     ? dayjs(formattedRow.launchDate).format('YYYY-MM-DD')
      //     : null
      // };
      // const formattedData = { ...formattedRow, ...formattedDates };

      // const response = await axios.post(editAPi, formattedData);
      const response = await axios.post(editAPi, formattedRow);

      const responseData = { ...response.data.result, id: newRow.id };
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === newRow.id ? responseData : row))
      );
      console.log('response.data:', response.data);

      return responseData; // Return the updated row
      refetch();
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; // Propagate the error for error handling
    }
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleSaveClick = (id) => async () => {
    setRowModesModel((prevModel) => ({
      ...prevModel,
      [id]: { mode: GridRowModes.View }
    }));
    // refetch();
  };

  const columns = [
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
              sx={{ color: 'primary.main' }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              sx={{ color: 'error.dark' }}
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
            sx={{ color: 'secondary.dark' }}
            disabled={disableEdit}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            sx={{ color: 'error.dark' }}
            disabled={disableDelete}
          />
        ];
      }
    }
  ];
  const handleCellDoubleClick = (params, event) => {
    event.defaultMuiPrevented = true;
  };

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
        slots={{ toolbar: !disableAddRecord ? EditToolbar : null }}
        slotProps={{ toolbar: { setRows, setRowModesModel } }}
        getRowId={(row) => row.id}
        onCellDoubleClick={handleCellDoubleClick}
      />
    </Box>
  );
}
