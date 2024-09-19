import React, { useState, useEffect, useCallback } from 'react';
import AddAdditionalServices from 'components/additionalProcesses.jsx/addadditionalServices';
import Divider from '@mui/material/Divider';
import AdditionalServiceTable from 'components/additionalProcesses.jsx/addadditionalserviceTable';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardHeader, Avatar, Chip } from '@mui/material';
import '../../assets/scss/style.scss';
import { useUser } from 'context/User';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useGetDistinctCollectionsQuery } from 'api/store/Apis/prePlanningHeaderApi';

export default function AdditionalServices({ initialValues }) {
  const [isLoading, setIsLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const { data: lookupData } = useGetLookUpListQuery();
  const [serviceType, setServiceType] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [initialData, setInitialData] = useState([]);

  const { user } = useUser();
  useEffect(() => {
    if (lookupData) {
      setVendors(lookupData.result[0].vendorList);
      setServiceList(lookupData.result[0].serviceList);
      setServiceType(lookupData.result[0].serviceTypeList);
      setUoms(lookupData.result[0].uomList);
    }
  }, [lookupData]);
  const [formData, setFormData] = useState({
    additionalServiceId: 0,
    collectionId: '',
    batchNo: '',
    serviceTypeId: '',
    serviceListId: '',
    vendorId: '',
    poPcs: '',
    qty: '',
    uomId: '',
    rate: '',
    totalAmount: '',
    costperPiece: '',
    uom: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });
  useEffect(() => {
    setFormData({
      ...formData,
      additionalServiceId: initialData.additionalServiceId || 0,
      collectionId: initialData?.collectionId || '',
      serviceTypeId: initialData?.serviceTypeId || '', //from dying screen coming from fabricAPi
      serviceListId: initialData?.serviceListId || '', //from dying screen coming from fabricAPi
      vendorId: initialData?.vendorId || '',
      // poPcs: initialData?.poPcs || '',
      qty: initialData?.qty || '',
      uomId: initialData?.uomId || '',
      rate: initialData?.rate || '',
      totalAmount: initialData?.totalAmount || 0,
      UOM: initialData?.uom || 0,
      uom: initialData?.uom || '',

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const { data: batchData, refetch: refetchBatches } =
    useGetDistinctCollectionsQuery(formData.collectionId, {
      skip: !formData.collectionId // Skip the query if no collection is selected
    });
  useEffect(() => {
    // setSelectedCollectionId(initialValues.collectionId);
    setFormData({
      ...formData,
      collectionId: initialValues?.collectionId || ''
      // planningHeaderId: initialValues?.planningHeaderId || '',
      // batchNo: initialValues?.batchNo || ''
    });
  }, [setFormData]);
  useEffect(() => {
    if (batchData) {
      setBatchList(batchData);
      // refetchBatches();
    }
  }, [batchData, refetchBatches]);
  useEffect(() => {
    if (formData.productionStatus === 3) {
      enqueueSnackbar(
        'Production Staus is completed. Select other Collection!',
        {
          variant: 'warning',
          autoHideDuration: 5000
        }
      );
    }
  }, [formData.productionStatus]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setFormData({ ...formData, [name]: value });

    if (name === 'collectionId') {
      const selectedCollection = plannedCollection.find(
        (collection) => collection.collectionId === value
      );
      setFormData({
        ...formData,
        collectionId: value,

        productionStatus: selectedCollection
          ? selectedCollection.productionStatus
          : '',
        poPcs: ''
      });
      // if (selectedCollection) {
      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     poPcs: selectedCollection.poPcs,
      //     productionStatus: selectedCollection
      //       ? selectedCollection.productionStatus
      //       : ''
      //   }));
      // }
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find(
        (batch) => batch.distinctId === value
      );
      setFormData({
        ...formData,
        batchNo: value,
        // planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcsSum : '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      });
      setAccordionExpanded(true);
    }
  };
  useEffect(() => {
    const calculateTotal = () => {
      const qty = parseFloat(formData.qty) || 0;
      const rate = parseFloat(formData.rate) || 0;
      return (qty * rate).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotal()
    }));
    const calculateCost = () => {
      const poPcs = parseFloat(formData.poPcs) || 0;
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      return (poPcs / totalAmount).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costperPiece: calculateCost()
    }));
  }, [
    formData.qty,
    formData.rate,
    formData.totalAmount,
    formData.costperPiece
  ]);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/AdditionalServices/SaveAdditionalServices',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        // ...formData,
        additionalServiceId: 0,

        collectionId: '',
        serviceTypeId: '', // Reset to the passed serviceTypeId
        serviceListId: '',
        vendorId: '',
        poPcs: '',
        qty: '',
        uomId: 'string',
        rate: '',
        totalAmount: '',
        costperPiece: ''
      });
      if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  useEffect(() => {
    const getCollectionFromPlanningHeader = async () => {
      try {
        const response = await axios.get(
          'http://100.42.177.77:83/api/PrePlanning/GetCollectionListFromPlanningHeader'
        );
        console.log('GetCollectionFromPlanningHeader', response);
        setPlannedCollection(response.data.result);
      } catch (error) {
        console.error('Error fetching design options:', error);
      }
    };
    getCollectionFromPlanningHeader();
  }, []);
  const [initialRows, setInitialRows] = useState([]);

  const fetchDataInternal = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:83/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${formData.collectionId}`
      );

      // Assuming response.data.result should always be an array
      if (Array.isArray(response.data.result)) {
        setIsLoading(false);
        setInitialRows(
          response.data.result.map((row, index) => ({
            id: index + 1,
            ...row
          }))
        );
      } else {
        // Handle case where response.data.result is not an array
        console.error(
          'API returned unexpected data format:',
          response.data.result
        );
        // Default to empty array or handle as needed
        setInitialRows([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state if needed
      setInitialRows([]);
    }
  }, [formData.collectionId]);

  useEffect(() => {
    fetchDataInternal();
  }, [fetchDataInternal]);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const totalAmount = initialRows
      .reduce((sum, row) => sum + (row.totalAmount ?? 0), 0)
      .toFixed(2);

    setTotalAmount(parseFloat(totalAmount).toLocaleString());
  }, [initialRows]);

  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      // componentName: 'Total Summary',
      // availableQty: totalAvailableQty,
      totalAmount: totalAmount
      // totalPcs: totalPcsSum,
      // requiredPcs: totalRequiredPcs
    }
  ];

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      // editable: true,
      // flex: 1,
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'collectionName',
      headerName: 'Collection Name'
    },
    {
      field: 'serviceType',
      headerName: 'Service Type',
      renderCell: (params) => {
        const chipColor = 'primary.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    {
      field: 'serviceListName',
      headerName: 'Service List Name',
      renderCell: (params) => {
        const chipColor = 'success.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    { field: 'vendor', headerName: 'Vendor' },

    { field: 'poPcs', headerName: 'PO Pieces' },
    { field: 'qty', headerName: 'Quantity' },
    { field: 'uom', headerName: 'UOM' },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 3 : undefined),
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    { field: 'costperPiece', headerName: 'Cost per Piece' }
    // { field: 'createdBy', headerName: 'Created By' },
    // { field: 'createdOn', headerName: 'Created On' }
    // { field: 'lastUpdatedBy', headerName: 'Last Updated By' },
    // { field: 'lastUpdatedOn', headerName: 'Last Updated On' },
  ];
  const deleteApi = `http://100.42.177.77:83/api/AdditionalServices/DeleteAdditionalProcess?servicesId=`;
  return (
    <>
      {/* <div className="CardHeader"> */}
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<AddOutlinedIcon />}
          title="Additional Services"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        {/* <AddAdditionalServices
            onCollectionChange={(id) => fetchDataInternal(id)}
          />{' '} */}
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
              label="Select Collection"
              name="collectionId"
              value={formData.collectionId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {plannedCollection.length > 0 ? (
                plannedCollection.map((option) => (
                  <MenuItem
                    id="collectionId"
                    key={option.collectionId}
                    value={option.collectionId}
                  >
                    {option.collectionName}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No Collections Available</MenuItem>
              )}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Batch No."
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {batchList.map((option) => (
                <MenuItem key={option.distinctId} value={option.distinctId}>
                  {option.distinctId}
                </MenuItem>
              ))}
            </TextField>{' '}
          </Grid>
          <Grid item md={3} width="inherit">
            <TextField
              id="outlined-select-option"
              select
              label="Service Type"
              name="serviceTypeId"
              value={formData.serviceTypeId}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {serviceType.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={3} width="inherit">
            <TextField
              id="outlined-select-option"
              select
              label="Service List Id"
              name="serviceListId"
              value={formData.serviceListId}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {serviceList.map((option) => (
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
              label="Vendor Name"
              size="small"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              id="outlined-required"
              label="PO PC's"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
              type="number"
              size="small"
              fullWidth
              disabled
              sx={(theme) => ({
                ...(formData.poPcs !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    // borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              id="outlined-required"
              label="Qty"
              name="qty"
              value={formData.qty}
              onChange={handleChange}
              type="number"
              size="small"
              required
              fullWidth
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              fullWidth
              select
              label="UOM"
              defaultValue=""
              size="small"
              name="uomId"
              value={formData.uomId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {uoms.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              id="outlined-required"
              label="Rate"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              type="number"
              size="small"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              id="outlined-required"
              label="Total Amount"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              type="number"
              size="small"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item md={1.5} width="inherit">
            <TextField
              id="outlined-required"
              label="Cost per Piece"
              name="costperPiece"
              value={formData.costperPiece}
              onChange={handleChange}
              type="number"
              size="small"
              required
              fullWidth
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={formData.productionStatus === 3}
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<AddOutlinedIcon />}
          title="View Additional Services"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        {/* <DataGrid
            rows={initialRows}
            columns={columns}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[10, 15]}
            localeText={{
              toolbarDensity: 'Size',
              toolbarDensityLabel: 'Size',
              toolbarDensityCompact: 'Small',
              toolbarDensityStandard: 'Medium',
              toolbarDensityComfortable: 'Large'
            }}
            components={{
              Toolbar: GridToolbar
            }}
          /> */}
        <ReuseableDataGrid
          iColumns={columns}
          initialRows={rows}
          isLoading={isLoading}
          setInitialData={setInitialData}
          deleteApi={deleteApi}
          refetch={fetchDataInternal}
          deleteBy="additionalServiceId"
        />
      </Card>
      {/* </div> */}
    </>
  );
}
