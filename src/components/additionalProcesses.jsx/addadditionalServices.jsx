import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import '../../assets/scss/style.scss';

export default function AddAdditionalServices({ onSaveSuccess }) {
  const { data: lookupData } = useGetLookUpListQuery();
  const [serviceType, setServiceType] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);

  useEffect(() => {
    if (lookupData) {
      setVendors(lookupData.result[0].vendorList);
      setServiceList(lookupData.result[0].serviceList);
      setServiceType(lookupData.result[0].serviceTypeList);
    }
  }, [lookupData]);

  const [formData, setFormData] = useState({
    collectionId: '',
    serviceTypeId: '',
    serviceListId: '',
    vendorId: '',
    poPcs: '',
    qty: '',
    uomId: '',
    rate: '',
    totalAmount: '',
    ratePerPcs: '',
    costperPiece: '',
    uom: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
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
    console.log(formData);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalServices/SaveAdditionalServices',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        collectionId: '',
        serviceTypeId: '',
        serviceListId: '',
        vendorId: '',
        poPcs: '',
        qty: '',
        uomId: '',
        rate: '',
        quantity: '',
        ratePerPcs: '',
        totalAmount: '',
        costperPiece: '',
        uom: '',
        vendor: null,
        serviceListName: null
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
                id="ddlCollection"
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
          id="outlined-required"
          label="UOM"
          name="uomId"
          value={formData.uomId}
          onChange={handleChange}
          size="small"
          required
          fullWidth
        />
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
