import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, TextField, MenuItem, Box, Button } from '@mui/material';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import {
  useGetCategoriesListQuery,
  useGetTermsByVendorIdQuery
} from 'api/store/Apis/termsAndConditionsApi';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { useUser } from 'context/User';

const AssignTerms = ({ vId }) => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { user } = useUser();
  const [categories, setCategories] = useState([]);
  const [tcs, setTcs] = useState([]);
  const [formData, setFormData] = useState({
    categoryId: 0,
    vendorId: vId.vendorId,
    poId: vId.poId
  });

  const { data: categoriesData } = useGetCategoriesListQuery();
  const { data: columnsData, refetch: refetchcolumnsData } =
    useGetTermsByVendorIdQuery(
      { vId: vId.vendorId, categoryId: formData.categoryId },
      {
        skip: !vId || !formData.categoryId // Skip the query if no collection is selected
      }
    );

  useEffect(() => {
    if (categoriesData) {
      setCategories(
        categoriesData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [categoriesData]);
  console.log('columnsData', columnsData);
  useEffect(() => {
    if (columnsData?.result === null) {
      setTcs([]);
      return;
    }

    if (columnsData?.result) {
      // if (columnsData) {
      setTcs(
        columnsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [columnsData, refetchcolumnsData]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'termCondDesc',
      headerName: 'Terms and Conditions',
      flex: 1
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

  const [selectedDesigns, setSelectedDesigns] = useState([]);

  const handleRowSelectionModelChange = React.useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);

      const selectedDesigns = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData
            ? {
                ...rowData,
                vendorPoId: 0,
                poId: 0,
                appId: user.appId,
                createdOn: new Date().toISOString(),
                createdBy: user.empId,
                lastUpdatedOn: new Date().toISOString(),
                lastUpdatedBy: user.empId
              }
            : null;
        })
        .filter((row) => row !== null); // Filter out any null values

      console.log('selectedDesigns', selectedDesigns);
      setSelectedDesigns(selectedDesigns);
    },
    [apiRef]
  );

  useEffect(() => {
    // Filter the tcs to include only the selected rows
    const selectedFabrics = tcs.filter((fabric) =>
      rowSelectionModel.includes(fabric.id)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      vendorPoAssignTermsList: selectedDesigns
    }));
  }, [tcs, rowSelectionModel]);

  console.log('formData', formData);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  console.log('selectedDesigns:', selectedDesigns);
  const handleSave = async () => {
    console.log('formData', formData);
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/PO/AssignTermToDyeingPo',
        formData
      );

      console.log('Save response:', response.data);

      // setFormData((prevFormData) => ({
      //   poId: 0,
      //   productionId: '',
      //   issuanceDate: '',
      //   expectedReturnDate: '',
      //   fabricId: '',
      //   processTypeId: 1223,
      //   vendorId: '',
      //   shrinkage: '',
      //   wastage: '',
      //   locationId: '',

      //   appId: user.appId,
      //   createdOn: new Date().toISOString(),
      //   createdBy: user.empId,
      //   lastUpdatedOn: new Date().toISOString(),
      //   LastUpdatedBy: user.empId
      // }));
      // setFabrics([]);
      // setRowSelectionModel([]);
      // // refetchFabricsData();
      // setIsEdit(false);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <Box
      noValidate
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        mt: 2,
        width: 'Inherit'
      }}
    >
      <Grid
        container
        spacing={2}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Vendor"
            name="vendorId"
            value={vId.vendorName}
            // onChange={handleChange}
            disabled
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            select
            label="Category"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {categories.map((option) => (
              <MenuItem key={option.categoryId} value={option.categoryId}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={tcs}
              columns={columns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              checkboxSelection
              onRowSelectionModelChange={handleRowSelectionModelChange}
              rowSelectionModel={rowSelectionModel}
            />
          </div>
          {/* <ReuseableDataGrid
            initialRows={tcs}
            iColumns={columns}
            // setInitialData={setInitialData}
            hideAction
          /> */}
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button variant="contained" size="small" onClick={handleSave}>
            Assign Terms
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssignTerms;
