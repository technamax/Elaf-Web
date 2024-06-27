import React, { useState, useEffect, useCallback } from 'react';
import AddAdditionalServices from 'components/additionalProcesses.jsx/addadditionalServices';
import Divider from '@mui/material/Divider';
import AdditionalServiceTable from 'components/additionalProcesses.jsx/addadditionalserviceTable';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardHeader, Avatar } from '@mui/material';
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

export default function AdditionalServices({}) {
  const { data: lookupData } = useGetLookUpListQuery();
  const [serviceType, setServiceType] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);
  const [uoms, setUoms] = useState([]);
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
    serviceTypeId: '',
    serviceListId: '',
    vendorId: '',
    poPcs: '',
    qty: '',
    uomId: 'string',
    rate: '',
    totalAmount: '',
    costperPiece: '',
    uom: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setFormData({ ...formData, [name]: value });

    if (name === 'collectionId') {
      const selectedCollection = plannedCollection.find(
        (collection) => collection.collectionId === value
      );
      if (selectedCollection) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          poPcs: selectedCollection.poPcs
        }));
      }
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalServices/SaveAdditionalServices',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
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
          'https://gecxc.com:4041/api/CollectionRegistration/GetCollectionList?appId=1'
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
        `https://gecxc.com:4041/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${formData.collectionId}`
      );

      // Assuming response.data.result should always be an array
      if (Array.isArray(response.data.result)) {
        setInitialRows(
          response.data.result.map((row, index) => ({
            id: index,
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

  const columns = [
    // { field: 'additionalServiceId', headerName: 'Additional Service ID' },
    // { field: 'serviceTypeId', headerName: 'Service Type ID' },
    // { field: 'serviceListId', headerName: 'Service List ID' },
    // { field: 'vendorId', headerName: 'Vendor ID' },
    // { field: 'collectionId', headerName: 'Collection ID' },
    { field: 'collectionName', headerName: 'Collection Name', flex: 1 },
    { field: 'serviceType', headerName: 'Service Type', flex: 1 },
    { field: 'serviceListName', headerName: 'Service List Name', flex: 1 },
    { field: 'vendor', headerName: 'Vendor', flex: 1 },

    { field: 'poPcs', headerName: 'PO Pieces' },
    { field: 'qty', headerName: 'Quantity' },
    { field: 'uom', headerName: 'UOM' },
    { field: 'rate', headerName: 'Rate' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'costperPiece', headerName: 'Cost per Piece' }
    // { field: 'createdBy', headerName: 'Created By' },
    // { field: 'createdOn', headerName: 'Created On' }
    // { field: 'lastUpdatedBy', headerName: 'Last Updated By' },
    // { field: 'lastUpdatedOn', headerName: 'Last Updated On' },
  ];

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
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={formData.collectionId}
              onChange={handleChange}
              size="small"
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
          <Grid item md={4} width="inherit" paddingX={1}>
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
            >
              {serviceType.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4} width="inherit" paddingX={1}>
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
            >
              {serviceList.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Vendor Name"
              size="small"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
            >
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
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
            />
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
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
            />
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
            <TextField
              fullWidth
              select
              label="UOM"
              defaultValue=""
              size="small"
              name="uomId"
              value={formData.uomId}
              onChange={handleChange}
            >
              {uoms.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
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
            />
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
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
            />
          </Grid>
          <Grid item md={2} width="inherit" paddingX={1}>
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
            />
          </Grid>
          <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              size="small"
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
          initialRows={initialRows}
          // setInitialData={setInitialData}
          // deleteApi={deleteApi}
          // deleteBy="additionalProcessId"
        />
      </Card>
      {/* </div> */}
    </>
  );
}
