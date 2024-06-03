import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

export default function AddRole() {
    const options = [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
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
                    {/* grid-1 */}
                    <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Role Name"
                            name="Role Name"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-1 ends */}

                      {/* grid-2 */}
                      <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Description"
                            name="Description"
                            size="small"
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
                     
                            <Button variant="contained" color="primary" size="small"  >
                                Save
                            </Button>
                       
                    </Grid>
                    {/* grid-5 ends */}
                </Grid>
            </Box>
        </div>
    );
}

