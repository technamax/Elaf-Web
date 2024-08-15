import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Typography
} from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery
} from 'api/store/Apis/termsAndConditionsApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const AssignTermsAndConditions = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTerms, setSelectedTerms] = React.useState([]);

  const [formData, setFormData] = useState({
    assignId: 0,
    vedorId: '',
    categoryId: '',
    assignTermsDetails: [selectedTerms],

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  const options = [
    {
      value: 'Yes',
      label: 'Yes'
    },
    {
      value: 'No',
      label: 'No'
    }
  ];
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      assignId: initialData?.assignId || 0,
      categoryId: initialData?.categoryId || '',
      categoryId: initialData?.categoryId || '',

      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: lookupData } = useGetLookUpListQuery();
  // const { data: termsConditionsData, refetch } = useGetSubMenuListQuery();
  const { data: categoriesData } = useGetCategoriesListQuery();
  const { data: termsConditionsData, refetch: refetchTermsConditionsData } =
    useGetTermsConditionsListQuery(formData.categoryId, {
      skip: !formData.categoryId // Skip the query if no collection is selected
    });
  const [categories, setCategories] = useState([]);

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);
    }
  }, [lookupData]);

  useEffect(() => {
    if (termsConditionsData) {
      setInitialRows(
        termsConditionsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [termsConditionsData]);
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

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/TermsConditions/SaveAssignTerms',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        assignId: 0,
        vedorId: '',
        categoryId: '',
        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));

      // refetch();
      setIsEdit(false);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'termCondDesc',
      headerName: 'Term and Condition Description',
      flex: 1
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1
    }
  ];

  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const apiRef = useGridApiRef();

  const handleRowSelectionModelChange = React.useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
      const tcIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['tcId'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values

      const designs = tcIds.map((tcId) => ({
        assignDetId: 0,
        assignedId: 0,
        tcId: tcId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedBy: user.empId,
        lastUpdatedOn: new Date().toISOString()
      }));

      setSelectedTerms(designs);
    },
    [apiRef]
  );

  useEffect(() => {
    setFormData({ ...formData, assignTermsDetails: selectedTerms });
  }, [selectedTerms]);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  console.log('selectedTerms:', selectedTerms);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Assign Terms and Conditions "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Vendors"
              // defaultValue=""
              size="small"
              name="vedorId"
              value={formData.vedorId}
              onChange={handleChange}
              required
              // error={!!formErrors.vendorId}
              // helperText={formErrors.vendorId}
            >
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
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
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Enabled ?"
              name="enabled"
              value={formData.enabled}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} mt={2}>
            <Typography variant="h4">Terms And Conditions:</Typography>{' '}
          </Grid>
          <Grid item xs={12}>
            {/* <ReuseableDataGrid
                initialRows={initialRows}
                iColumns={columns}
                disableDelete={true}
                setInitialData={setInitialData}
                setIsEdit={setIsEdit}
                checkboxSelection={true}
                onRowSelectionModelChange={handleRowSelectionModelChange}
                rowSelectionModel={rowSelectionModel}
              /> */}
            <div style={{ width: '100%' }}>
              <DataGrid
                rows={initialRows}
                columns={columns}
                apiRef={apiRef}
                checkboxSelection
                onRowSelectionModelChange={handleRowSelectionModelChange}
                rowSelectionModel={rowSelectionModel}
              />
            </div>
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>{' '}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Assigned Terms And Conditions "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={2}
          width="Inherit"
          // sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              disableDelete={true}
              setInitialData={setInitialData}
              setIsEdit={setIsEdit}
            />
          </Grid>
        </Grid>{' '}
      </Card>
    </Box>
  );
};

export default AssignTermsAndConditions;
