import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, MenuItem, Divider, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
// import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetShrinkageWastageListQuery } from 'api/store/Apis/lookupApi';

import {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery
} from 'api/store/Apis/termsAndConditionsApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { style, width } from '@mui/system';
const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const ShrinkageWastageConfiguration = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    configurationId: 0,
    vendorId: 0,
    startDate: '',
    endDate: null,
    shrinkage: '',
    wastage: '',
    remarks: '',
    entityName: '',
    configurationType: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  const options = [
    {
      value: 'Vendor',
      label: 'Vendor'
    },
    {
      value: 'Fabric',
      label: 'Fabric'
    }
  ];
  // console.log('initialData', initialData);
  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    setFormData({
      configurationId: initialData?.configurationId || 0,
      vendorId: initialData?.vendorId || 0,
      startDate: initialData?.startDate
        ? formatDate(initialData.startDate)
        : '',
      endDate: initialData?.endDate ? formatDate(initialData.endDate) : null,
      shrinkage: initialData?.shrinkage || '',
      wastage: initialData?.wastage || '',
      remarks: initialData?.remarks || '',
      configurationType: initialData?.configurationType || '',
      entityName: initialData?.entityName || '',

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
  const { data: shrinkageWastageData, refetch: refetchShrinkageWastageData } =
    useGetShrinkageWastageListQuery(formData.vendorId, {
      skip: !formData.vendorId
    });
  const { data: termsConditionsData, refetch: refetchTermsConditionsData } =
    useGetTermsConditionsListQuery(formData.categoryId, {
      skip: !formData.categoryId // Skip the query if no collection is selected
    });
  const { data: lookupData } = useGetLookUpListQuery();
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [categories, setCategories] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [fabrics, setFabrics] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);
      setFabrics(
        data.fabricList.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [lookupData]);

  useEffect(() => {
    if (shrinkageWastageData) {
      setInitialRows(
        shrinkageWastageData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [shrinkageWastageData, refetchShrinkageWastageData]);
  // useEffect(() => {
  //   if (categoriesData) {
  //     setCategories(
  //       categoriesData.result.map((row, index) => ({
  //         id: index,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [categoriesData, refetchCategoriesdata]);

  useEffect(() => {
    if (formData.configurationType === 'Vendor') {
      setCategories(vendors);
    }
    if (formData.configurationType === 'Fabric') {
      setCategories(fabrics);
    }
  }, [formData.configurationType]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'vendorId') {
      const selectedCollection = categories.find(
        (collection) => collection.lookUpId === parseInt(value)
      );

      setFormData({
        ...formData,
        vendorId: value,
        entityName: selectedCollection ? selectedCollection.lookUpName : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:81/api/Configurations/SaveShrinkageWastageConfiguration',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        configurationId: 0,
        vendorId: 0,
        entityName: '',
        startDate: '',
        endDate: null,
        shrinkage: '',
        wastage: '',
        remarks: '',
        configurationType: '',

        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));

      refetchShrinkageWastageData();
      setIsEdit(false);
      setCategories([]);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);
  console.log('vendors', vendors);
  console.log('fabrics', fabrics);
  console.log('categories', categories);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'configurationType',
      headerName: 'Configuration Type'
      // flex: 1
    },
    {
      field: 'fabricName',
      headerName: 'Name'
      // flex: 1
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      valueGetter: (params) => {
        if (params === null) {
          return;
        } else {
          const date = new Date(params);
          return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          });
        }
      }
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      valueGetter: (params) => {
        if (!params) {
          return;
        } else {
          const date = new Date(params);
          return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          });
        }
      }
    },
    {
      field: 'shrinkage',
      headerName: 'Shrinkage %'
    },
    {
      field: 'wastage',
      headerName: 'Wastage %'
    },
    {
      field: 'remarks',
      headerName: 'Remarks'
    }
  ];
  console.log('fabrics', fabrics);

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    if (field === 'wastage') {
      setFabrics((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, wastage: value } : row
        )
      );
    } else if (field === 'shrikage') {
      setFabrics((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, shrikage: value } : row
        )
      );
    }
  };
  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'lookUpName',
      // flex: 1,

      headerName: 'Fabric'
    },
    {
      field: 'wastage',
      headerName: 'Wastage',
      // flex: 1,
      width: 'auto',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.wastage || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'wastage',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'shrikage',
      headerName: 'Shrinkage',
      width: 'auto',

      // flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.shrikage || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'shrikage',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    }
  ];
  // const fetchData = React.useCallback(() => {
  //   apiRef.current.autosizeColumns({
  //     includeHeaders: true,
  //     includeOutliers: true
  //   });
  // }, [apiRef]);
  const fetchData = () => {
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      includeOutliers: true
    });
  };
  React.useEffect(() => {
    fetchData();
  });

  const [shrinkages, setShrinkages] = useState([]);
  const [wastages, setWastages] = useState([]);
  const [fabricIds, setFabricIds] = useState([]);
  const handleRowSelectionModelChange = useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
      const designsIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['shrikage'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values
      const poPcsLists = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['wastage'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values
      const fabricsIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['lookUpId'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null);
      console.log('poPcsLists', poPcsLists);
      setShrinkages(designsIds);
      setWastages(poPcsLists);
      setFabricIds(fabricsIds);
    },
    [apiRef]
  );
  useEffect(() => {
    const updatedShrinkages = rowSelectionModel.map((id) => {
      const rowData = apiRef.current.getRow(id);
      return rowData && rowData['shrikage'] !== undefined
        ? rowData['shrikage']
        : 0;
    });

    const updatedWastages = rowSelectionModel.map((id) => {
      const rowData = apiRef.current.getRow(id);
      return rowData && rowData['wastage'] !== undefined
        ? rowData['wastage']
        : 0;
    });

    setShrinkages(updatedShrinkages);
    setWastages(updatedWastages);
    setFormData((prevData) => ({
      ...prevData,
      shrinkage: updatedShrinkages,
      wastage: updatedWastages
    }));
  }, [fabrics, rowSelectionModel]);

  useEffect(() => {
    setFormData({
      ...formData,
      fabricId: fabricIds,
      shrinkage: shrinkages,
      wastage: wastages
    });
  }, [shrinkages, wastages]);
  useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  const deleteApi = `http://100.42.177.77:81/api/Configurations/DeleteShrinkageWastageConfigurationById?configurationId=`;
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Shrinkage & Wastage Configurations"
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
              label="Configuration Type"
              name="configurationType"
              value={formData.configurationType}
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
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label={
                formData.configurationType === 'Vendor'
                  ? 'Vendor'
                  : formData.configurationType === 'Fabric'
                    ? 'Fabric'
                    : 'Select'
              }
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              size="small"
              disabled={formData.configurationType === 'Fabric'}
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {categories.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Start Date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.planningDate}
              // helperText={formErrors.planningDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.launchDate}
              // helperText={formErrors.launchDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <TextField
              label="Shrinkage"
              fullWidth
              size="small"
              name="shrinkage"
              value={formData.shrinkage}
              onChange={handleChange}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />{' '}
          </Grid> */}
          {/* <Grid item xs={12} md={3}>
            <TextField
              label="Wastage"
              fullWidth
              size="small"
              name="wastage"
              value={formData.wastage}
              onChange={handleChange}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />{' '}
          </Grid> */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Remarks"
              fullWidth
              size="small"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={fabrics}
                columns={designsColumns}
                apiRef={apiRef}
                disableRowSelectionOnClick
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
          title="View Shrinkage wastage"
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
              // height={300}
              // disableDelete={true}
              setInitialData={setInitialData}
              setIsEdit={setIsEdit}
              deleteApi={deleteApi}
              deleteBy="configurationId"
              refetch={refetchShrinkageWastageData}
            />
          </Grid>
        </Grid>{' '}
      </Card>
    </Box>
  );
};

export default ShrinkageWastageConfiguration;
