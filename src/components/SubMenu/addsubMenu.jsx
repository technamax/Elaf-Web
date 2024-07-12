import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

export default function AddSubMenu({ onSaveSuccess }) {
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

  const [formData, setFormData] = useState({
    subMenuDesc: '',
    link: '',
    icon: '',
    orderNo: 0,
    enabled: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/Menu/SaveSubMenu',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        subMenuDesc: '',
        link: '',
        icon: '',
        orderNo: 0,
        enabled: ''
      });
      if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <Box
        m={3}
        pt={4}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 'inherit' }
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container>
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Sub Menu Description"
              name="subMenuDesc"
              value={formData.subMenuDesc}
              onChange={handleChange}
              size="small"
              required
            />
          </Grid>

          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-select-option"
              select
              label="Enabled"
              helperText="Please select an option"
              variant="outlined"
              size="small"
              name="enabled"
              value={formData.enabled}
              onChange={handleChange}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Order No."
              name="orderNo"
              size="small"
              value={formData.orderNo}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Link"
              name="link"
              size="small"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Icon"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              size="small"
              required
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
      </Box>
    </div>
  );
}
