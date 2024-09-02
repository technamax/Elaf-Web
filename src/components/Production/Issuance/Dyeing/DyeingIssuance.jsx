import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  FormControl
} from '@mui/material';
import '../../../../assets/scss/style.scss';

import {
  useGetDyeingPoHeaderListQuery,
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPODetailsPoIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetWareHouseLocationsQuery,
  useGetLookUpListQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

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

const DyeingIssuance = ({ rowData }) => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    poId: rowData?.poId || 0,
    productionId: '',
    issuanceDate: null,
    expectedReturnDate: '',
    processTypeId: 1223,
    fabricId: '',
    fabricName: '',
    vendorId: '',
    vendorName: '',
    shrinkage: '',
    wastage: '',
    locationId: '',
    fullLocation: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({ ...formData, poId: rowData?.poId || 0 });
  }, [rowData]);
  const [initialRows, setInitialRows] = useState([]);
  const [poDetails, setPoDetails] = useState([]);
  const [fabricsList, setFabricsList] = useState([]);
  const [vendorsList, setVendorsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [dyeingDetails, setDyeingDetails] = useState([]);

  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetDyeingPoHeaderListQuery();
  const { data: poDetailsData, refetch: refetchPoDetailsData } =
    useGetDyeingPODetailsPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  const { data: dyeingPoData, refetch: refetchDyeingPoData } =
    useGetDyeingPoHeaderListQuery();
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();
  const { data: fabricsData, refetch: refetchFabricsData } =
    useGetFabricForProductionByProductionIdQuery(formData.productionId, {
      skip: !formData.productionId // Skip the query if no collection is selected
    });
  const { data: vendorsData, refetch: refetchVendorsData } =
    useGetVendorsByFabricIDQuery(formData.fabricId, {
      skip: !formData.fabricId // Skip the query if no collection is selected
    });
  const { data: columnsData, refetch: refetchcolumnsData } =
    useGetProductionPODesignByFabricAndProductionIdQuery(
      { fabricId: formData.fabricId, productionId: formData.productionId },
      {
        skip: !formData.fabricId || !formData.productionId // Skip the query if no collection is selected
      }
    );
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (poDetailsData?.result === null) {
      setPoDetails([]);
      return;
    }
    if (poDetailsData) {
      setPoDetails(
        poDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poDetailsData, refetchPoDetailsData]);
  useEffect(() => {
    if (dyeingPoData) {
      setInitialRows(
        dyeingPoData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [dyeingPoData, refetchDyeingPoData]);
  useEffect(() => {
    if (fabricsData) {
      setFabricsList(
        fabricsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [fabricsData, refetchFabricsData]);
  useEffect(() => {
    if (columnsData) {
      setDyeingDetails(
        columnsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [columnsData, refetchcolumnsData]);
  useEffect(() => {
    if (vendorsData) {
      setVendorsList(
        vendorsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [vendorsData, refetchVendorsData]);
  useEffect(() => {
    if (locationsData) {
      setLocationsList(
        locationsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [locationsData]);
  useEffect(() => {
    if (productionBatchData) {
      setProductions(
        productionBatchData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [productionBatchData, refetchProductionBatchData]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'poId') {
      const selectedPO = productions.find((po) => po.poId === parseInt(value));

      setFormData({
        ...formData,
        poId: value,
        shrinkage: selectedPO ? selectedPO.shrinkage : '',
        productionId: selectedPO ? selectedPO.productionId : '',
        issuanceDate: selectedPO ? selectedPO.issuanceDate : null,
        expectedReturnDate: selectedPO ? selectedPO.expectedReturnDate : '',
        fabricId: selectedPO ? selectedPO.fabricId : '',
        vendorId: selectedPO ? selectedPO.vendorId : '',
        locationId: selectedPO ? selectedPO.locationId : '',
        fullLocation: selectedPO ? selectedPO.fullLocation : '',
        fabricName: selectedPO ? selectedPO.fabricName : '',
        vendorName: selectedPO ? selectedPO.vendorName : '',
        wastage: selectedPO ? selectedPO.wastage : ''
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
        'http://100.42.177.77:83/api/TermsConditions/SaveCategory',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        categoryId: 0,
        description: '',
        enabled: '',

        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      refetch();
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
      field: 'description',
      headerName: 'Description',
      flex: 1
    },

    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
    }
  ];
  console.log('productions', productions);

  const handleCellEdit = React.useCallback(
    (params) => {
      const { id, field, value } = params;
      console.log('Editing cell:', params); // Debugging line

      setPoDetails((prevRows) =>
        prevRows.map((row) => {
          if (row.id === id) {
            const updatedRow = {
              ...row,
              [field]: value,
              poId: 0,
              poDetId: 0,
              appId: user.appId,
              createdOn: new Date().toISOString(),
              createdBy: user.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: user.empId
            };

            // Recalculate the totalBeforeTax when rate or quantity is updated
            // if (field === 'rate' || field === 'quantity') {
            //   updatedRow.totalBeforeTax = updatedRow.rate * updatedRow.quantity;
            // }

            // // Optionally, update totalAfterTax if it's a function of totalBeforeTax and tax
            // if (field === 'tax' || field === 'rate' || field === 'quantity') {
            //   updatedRow.totalAfterTax =
            //     updatedRow.totalBeforeTax +
            //     updatedRow.totalBeforeTax * (updatedRow.tax / 100);
            // }

            return updatedRow;
          }
          return row;
        })
      );
    },
    [setPoDetails, user.appId, user.empId]
  );

  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'baseColor',
      headerName: 'Color'
    },
    {
      field: 'total',
      headerName: 'Planned Qty'
    },
    {
      field: 'quantity',
      headerName: 'Assigned Qty'
    },
    {
      field: 'issuance',
      headerName: 'Issuance Qty',
      // flex: 1,
      // width: 'auto',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.issuance || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'issuance',
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
                ...rowData
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
    // Filter the fabrics to include only the selected rows
    const selectedFabrics = poDetails.filter((fabric) =>
      rowSelectionModel.includes(fabric.id)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      dyeingPoDetailsList: selectedFabrics
    }));
  }, [poDetails, rowSelectionModel]);

  console.log('poDetails', poDetails);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Dyeing Issuance"
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
              label="Production"
              name="poId"
              value={formData.poId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.poId} value={option.poId}>
                  {option.poIdName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              // type="date"
              label="Issuance Date"
              name="issuanceDate"
              value={
                !formData.issuanceDate
                  ? null
                  : new Date(formData.issuanceDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      }
                    )
              }
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
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              // type="date"
              label="Planning Date"
              name="expectedReturnDate"
              value={
                !formData.issuanceDate
                  ? null
                  : new Date(formData.expectedReturnDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      }
                    )
              }
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.expectedReturnDate}
              // helperText={formErrors.expectedReturnDate}
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
              fullWidth
              // select
              label="Select Fabric"
              name="fabricName"
              value={formData.fabricName}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {/* {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Vendor"
              fullWidth
              size="small"
              name="vendorName"
              onChange={handleChange}
              value={formData.vendorName}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Shrinkage"
              fullWidth
              size="small"
              name="shrinkage"
              onChange={handleChange}
              value={formData.shrinkage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Wastage"
              fullWidth
              size="small"
              name="wastage"
              onChange={handleChange}
              value={formData.wastage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Select Location"
              name="fullLocation"
              value={formData.fullLocation}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {/* {locationsList.map((option) => (
                <MenuItem key={option.locationId} value={option.locationId}>
                  {option.section +
                    '.' +
                    option.aisle +
                    '.' +
                    option.rack +
                    '.' +
                    option.bin}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={poDetails}
              columns={designsColumns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              checkboxSelection
              onRowSelectionModelChange={handleRowSelectionModelChange}
              rowSelectionModel={rowSelectionModel}
            />
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Issuance Details"
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
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default DyeingIssuance;
