import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

export default function AddRole(onSaveSuccess) {
  const options = [
    {
      value: 'yes',
      label: 'Yes'
    },
    {
      value: 'no',
      label: 'No'
    }
  ];

  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    enabled: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        'http://100.42.177.77:8091/api/Role/SaveRole',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        roleName: '',
        description: '',
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
          {/* grid-1 */}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Role Name"
              name="roleName"
              size="small"
              value={formData.roleName}
              onChange={handleChange}
              required
            />
          </Grid>
          {/* grid-1 ends */}

          {/* grid-2 */}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Description"
              name="description"
              size="small"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          {/* grid-2 ends */}

          {/* grid-4 */}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-select-option"
              select
              label="Enabled"
              defaultValue="yes"
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
          {/* grid-4 ends */}

          {/* grid-5 */}
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
          {/* grid-5 ends */}
        </Grid>
      </Box>
    </div>
  );
}
