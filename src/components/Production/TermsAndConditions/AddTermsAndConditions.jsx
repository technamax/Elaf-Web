import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery
} from 'api/store/Apis/termsAndConditionsApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const AddTermsAndConditions = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    tcId: 0,
    categoryId: '',
    termCondDesc: '',
    enabled: '',

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
      tcId: initialData?.tcId || 0,
      categoryId: initialData?.categoryId || '',
      termCondDesc: initialData?.termCondDesc || '',
      enabled: initialData?.enabled || '',

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

  const { data: categoriesData, refetch: refetchCategoriesdata } =
    useGetCategoriesListQuery();
  const { data: termsConditionsData, refetch: refetchTermsConditionsData } =
    useGetTermsConditionsListQuery(formData.categoryId, {
      skip: !formData.categoryId // Skip the query if no collection is selected
    });
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (termsConditionsData) {
      setInitialRows(
        termsConditionsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [termsConditionsData, refetchTermsConditionsData]);
  useEffect(() => {
    if (categoriesData) {
      setCategories(
        categoriesData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [categoriesData, refetchCategoriesdata]);

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
        'http://100.42.177.77:83/api/TermsConditions/SaveTermsConditions',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        tcId: 0,
        categoryId: prevFormData.categoryId,
        termCondDesc: '',
        enabled: '',
        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));

      refetchTermsConditionsData();
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
      // flex: 1
    },
    {
      field: 'termCondDesc',
      headerName: 'Term and Condition',
      flex: 1
    },

    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
    }
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Add Terms and Conditions "
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
          <Grid item xs={12} md={6}>
            <TextField
              label="Term and condition"
              fullWidth
              size="small"
              name="termCondDesc"
              onChange={handleChange}
              value={formData.termCondDesc}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Enabled"
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
          title="View Terms And Conditions "
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

export default AddTermsAndConditions;
