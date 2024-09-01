import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../../assets/scss/style.scss';

import {
  useGetProductionBatchForProcessingQuery,
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPoHeaderListQuery
} from 'api/store/Apis/productionApi';
import {
  useGetWareHouseLocationsQuery,
  useGetLookUpListQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import AssignTerms from './AssignTerms';
import POView from './POView';
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

const DyeingPO = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { enqueueSnackbar } = useSnackbar();

  const [fabrics, setFabrics] = useState([]);
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    poId: 0,
    productionId: '',
    issuanceDate: '',
    expectedReturnDate: '',
    processTypeId: 1223,
    fabricId: '',
    vendorId: '',
    shrinkage: '',
    wastage: '',
    locationId: '',

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

  const [initialRows, setInitialRows] = useState([]);
  const [fabricsList, setFabricsList] = useState([]);
  const [vendorsList, setVendorsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
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
      setFabrics(
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
    if (name === 'vendorId') {
      const selectedvendor = vendorsList.find(
        (collection) => collection.vendorId === parseInt(value)
      );

      setFormData({
        ...formData,
        vendorId: value,
        shrinkage: selectedvendor ? selectedvendor.shrinkage : '',
        wastage: selectedvendor ? selectedvendor.wastage : ''
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
        'http://100.42.177.77:83/api/PO/SavePOHeader',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        poId: 0,
        productionId: '',
        issuanceDate: '',
        expectedReturnDate: '',
        fabricId: '',
        processTypeId: 1223,
        vendorId: '',
        shrinkage: '',
        wastage: '',
        locationId: '',

        appId: user.appId,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      setFabrics([]);
      setRowSelectionModel([]);
      // refetchFabricsData();
      setIsEdit(false);
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [vId, setVId] = React.useState(false);

  const handleClickOpen = async (data) => {
    // setInitialFormData(data);
    // try {
    //   const response = await axios.get(
    //     `http://100.42.177.77:83/api/TermsConditions/GetTermsByVendorId?vendorId=${data.vendorId}`
    //   );
    //   if (!response.data.success) {
    //     enqueueSnackbar(`${response.data.message} !`, {
    //       variant: 'error',
    //       autoHideDuration: 5000
    //     });
    //     console.log('response.message', response.data.message);
    //     return;
    //   }
    setVId(data);
    //     response.data.result.map((row, index) => ({
    //       id: index + 1,
    //       ...row
    //     }))
    //   );
    // } catch (error) {
    //   console.error('Error fetching ITP:', error);
    // }
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setVId(data);
  };
  console.log('terms condition', vId);
  const handleClose = () => {
    // setShowUpperDiv(true);
    setOpen(false);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'poId',
      headerName: 'PO ID'
      // flex: 1
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'createdOn',
      headerName: 'PO Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'issuanceDate',
      headerName: 'Issuance Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'expectedReturnDate',
      headerName: 'Expected Return Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'fabricCount',
      headerName: 'Fabrics'
    },
    {
      field: 'statusName',
      headerName: 'Status'
    },
    {
      field: 'Actions',
      headerName: 'Actions',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              Assign Terms
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              View
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];

  const handleCellEdit = React.useCallback(
    (params) => {
      const { id, field, value } = params;
      console.log('Editing cell:', params); // Debugging line

      setFabrics((prevRows) =>
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
            if (field === 'rate' || field === 'quantity') {
              updatedRow.totalBeforeTax = updatedRow.rate * updatedRow.quantity;
            }

            // Optionally, update totalAfterTax if it's a function of totalBeforeTax and tax
            if (field === 'tax' || field === 'rate' || field === 'quantity') {
              updatedRow.totalAfterTax =
                updatedRow.totalBeforeTax +
                updatedRow.totalBeforeTax * (updatedRow.tax / 100);
            }

            return updatedRow;
          }
          return row;
        })
      );
    },
    [setFabrics, user.appId, user.empId]
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
      field: 'color',
      headerName: 'Color'
    },
    {
      field: 'total',
      headerName: 'Planned Qty'
    },
    {
      field: 'quantity',
      headerName: 'Assigned Qty',
      // flex: 1,
      // width: 'auto',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.quantity || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'quantity',
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
      field: 'rate',
      headerName: 'Rate',
      // width: 'auto',

      // flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.rate || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'rate',
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
      field: 'tax',
      headerName: 'Tax',
      // width: 'auto',

      // flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.tax || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'tax',
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
      field: 'totalBeforeTax',
      headerName: 'Total',
      // width: 'auto',

      // flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.totalBeforeTax || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'totalBeforeTax',
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
      field: 'totalAfterTax',
      headerName: 'Total After Tax',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.totalAfterTax || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'totalAfterTax',
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
    const selectedFabrics = fabrics.filter((fabric) =>
      rowSelectionModel.includes(fabric.id)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      dyeingPoDetailsList: selectedFabrics
    }));
  }, [fabrics, rowSelectionModel]);

  console.log('fabrics', fabrics);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  console.log('selectedDesigns:', selectedDesigns);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Dyeing Production Order"
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
              name="productionId"
              value={formData.productionId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.productionId} value={option.productionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Issuance Date"
              name="issuanceDate"
              value={formData.issuanceDate}
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
              type="date"
              label="Planning Date"
              name="expectedReturnDate"
              value={formData.expectedReturnDate}
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
              select
              label="Select Fabric"
              name="fabricId"
              value={formData.fabricId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Vendor"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {vendorsList.map((option) => (
                <MenuItem key={option.vendorId} value={option.vendorId}>
                  {option.vendorName}
                </MenuItem>
              ))}
            </TextField>
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
              select
              label="Select Location"
              name="locationId"
              value={formData.locationId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {locationsList.map((option) => (
                <MenuItem key={option.locationId} value={option.locationId}>
                  {option.section +
                    '.' +
                    option.aisle +
                    '.' +
                    option.rack +
                    '.' +
                    option.bin}
                </MenuItem>
              ))}
            </TextField>
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
          title="Assign TCs & Issuance"
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
              setInitialData={setInitialData}
              hideAction
            />
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
              <DialogTitle
                sx={{
                  backgroundColor: '#A11F23',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingX: '24px',
                  paddingY: '4px'
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="#ffffff"
                  gutterBottom
                  fontSize={20}
                  fontWeight={2}
                  fontStyle={'normal'}
                >
                  {'Assign Terms  And Conditions'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <Grid
                  container
                  spacing={2}
                  width="Inherit"
                  // sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={vId}
                      iColumns={tcColumns}
                      // setInitialData={setInitialData}
                      hideAction
                    />
                  </Grid>
                </Grid> */}
                <AssignTerms vId={vId} />
              </DialogContent>
            </Dialog>
            <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="xl">
              <DialogTitle
                sx={{
                  backgroundColor: '#A11F23',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingX: '24px',
                  paddingY: '4px'
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="#ffffff"
                  gutterBottom
                  fontSize={20}
                  fontWeight={2}
                  fontStyle={'normal'}
                >
                  {'View Production Order'}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <POView vId={vId} />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>{' '}
      </Card>
    </Box>
  );
};

export default DyeingPO;
