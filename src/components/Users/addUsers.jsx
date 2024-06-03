import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

export default function AddUsers() {
    const options = [
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 'User',
          label: 'User',
        },
    ];
    const option1 = [
        {
          value: 'Yes',
          label: 'Yes',
        },
        {
          value: 'No',
          label: 'No',
        },
    ];
    return (
        <div>
            <Box  m={3} pt={4}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: 'inherit' },
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
                            name="First Name"
                            size="small"
                            required
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
                        />
                    </Grid>
                    {/* grid-7 ends */}

                       {/* grid-8 */}
                       <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Main Menu"
                            defaultValue="Admin"
                            helperText="Select Menu"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-9 ends */}

                    {/* grid-10 */}
                    <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Enabled"
                            defaultValue="yes"
                            helperText="Please select an option"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option1.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-10 ends */}

                      


                    {/* grid-button */}
                    <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
                     
                            <Button variant="contained" color="primary" size="small"  >
                                Save
                            </Button>
                       
                    </Grid>
                    {/* grid-button ends */}
                </Grid>
            </Box>
        </div>
    );
}

