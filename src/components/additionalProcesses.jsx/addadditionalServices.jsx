import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import '../../assets/scss/style.scss';

export default function AddAdditionalServices({
  onSaveSuccess,
  serviceTypeId
}) {
  const { data: lookupData } = useGetLookUpListQuery();
  const [serviceType, setServiceType] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);
  const [uoms, setUoms] = useState([]);

  useEffect(() => {
    if (lookupData) {
      setVendors(lookupData.result[0].vendorList);
      setServiceList(lookupData.result[0].serviceList);
      setServiceType(lookupData.result[0].serviceTypeList);
      setUoms(lookupData.result[0].uomList);
    }
  }, [lookupData]);

  const [formData, setFormData] = useState({
    collectionId: '',
    serviceTypeId: '', // Ensure this is a number or string
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

  // "collectionId":42,
  // "serviceTypeId": 0,
  // "serviceListId": 0,
  // "vendorId": 0,
  // "poPcs": 0,
  // "qty": 0,
  // "uomId": 0,
  // "rate": 0,
  // "totalAmount": 0,
  // "costperPiece": 0,
  // "createdBy": 0,
  // "createdOn": "2024-06-10T05:33:54.791Z",
  // "lastUpdatedBy": 0,
  // "lastUpdatedOn": "2024-06-10T05:33:54.791Z"

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
    const formDataToSend = { ...formData, serviceTypeId }; // Use passed serviceTypeId
    console.log(formDataToSend);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalServices/SaveAdditionalServices',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        collectionId: '',
        serviceTypeId: serviceTypeId || '', // Reset to the passed serviceTypeId
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

  return (
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
  );
}
