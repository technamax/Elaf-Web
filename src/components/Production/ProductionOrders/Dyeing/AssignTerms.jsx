import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, TextField, MenuItem, Box } from '@mui/material';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import {
  useGetCategoriesListQuery,
  useGetTermsByVendorIdQuery
} from 'api/store/Apis/termsAndConditionsApi';

const AssignTerms = ({ vId }) => {
  const [categories, setCategories] = useState([]);
  const [tcs, setTcs] = useState([]);
  const [formData, setFormData] = useState({ categoryId: 0 });

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
          id: index,
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
          id: index,
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
      headerName: 'termCondDesc'
    },
    {
      field: 'description',
      headerName: 'Description'
    }
  ];
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
          <ReuseableDataGrid
            initialRows={tcs}
            iColumns={columns}
            // setInitialData={setInitialData}
            hideAction
          />
        </Grid>
      </Grid>{' '}
    </Box>
  );
};

export default AssignTerms;
