import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

export default function AddUsers(onSaveSuccess) {
  const options = [
    {
      value: 'yes',
      label: 'yes'
    },
    {
      value: 'no',
      label: 'no'
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    empId: '',
    password: '',
    isActive: '',
    appId: ''
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/Users/SaveUsers',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        firstName: '',
        lastName: '',
        userName: '',
        empId: '',
        password: '',
        isActive: '',
        appId: ''
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
          {/* grid-1*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="First Name"
              name="firstName"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-1 ends */}

          {/* grid-2*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Last Name"
              name="Last Name"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-2 ends */}

          {/* grid-3*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="User Name"
              name="User Name"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-3 ends */}

          {/* grid-4*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Id"
              name="Id"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-4 ends */}

          {/* grid-5*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Password"
              name="Password"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-5 ends */}

          {/* grid-6*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="is Active"
              name="is Active"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-6 ends */}

          {/* grid-7*/}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="Emp Id"
              name="Emp Id"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-7 ends */}

          {/* grid-8 */}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-select-option"
              select
              label="Enabled"
              defaultValue="yes"
              // helperText="Select Menu"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleChange}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* grid-8 ends */}

          {/* grid-9 */}
          <Grid item md={4} width="inherit" paddingX={1}>
            <TextField
              id="outlined-required"
              label="App Id"
              name="App Id"
              size="small"
              required
              onChange={handleChange}
            />
          </Grid>
          {/* grid-9 ends */}

          {/* grid-button */}
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
          {/* grid-button ends */}
        </Grid>
      </Box>
    </div>
  );
}
