import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function AddAdditionalProcess() {
    const options = [
        {
          value: 'D# 01-A',
          label: 'D# 01-A',
        },
        {
          value: 'D# 01-A',
          label: 'D# 01-A',
        },
    ];
    const option1 = [
        {
          value: 'D# 01-A-MM-Y',
          label: 'D# 01-A-MM-Y',
        },
        {
          value: 'No',
          label: 'No',
        },
    ];
    const option2 = [
        {
          value: 'Front',
          label: 'Front',
        },
        {
          value: 'Back',
          label: 'Back',
        },
    ];

    const option3 = [
        {
          value: 'Lawn 102/88',
          label: 'Lawn 102/88',
        },
        {
          value: 'Lawn 99/88',
          label: 'Lawn 99/88',
        },
    ];

    const option4 = [
        {
          value: 'Khuram',
          label: 'Khuram',
        },
        {
          value: 'Ramia',
          label: 'Ramia',
        },
    ];

    const option5 = [
        {
          value: 'Auto Fetch',
          label: 'Auto Fetch',
        },
        {
          value: 'No',
          label: 'No',
        },
    ];

    const option6 = [
        {
          value: 'Black',
          label: 'Black',
        },
        {
          value: 'Red',
          label: 'Red',
        },
    ];

    const option7 = [
        {
          value: 'Hand Work',
          label: 'Hand Work',
        },
        {
          value: 'Patch Work',
          label: 'Patch Work',
        },
    ];
    return (
      
             
        <Grid container spacing={2} width="Inherit">

        <Grid item md={12} width="inherit" paddingX={1}>

       <Typography variant="h3" gutterBottom>
Additional Process
</Typography>
       </Grid>

                     {/* grid-1 */}
                     <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Select Design"
                            defaultValue="D# 01-A"
                            helperText="Design"
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
                    {/* grid-1 ends */}

                     {/* grid-2 */}
                     <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Select Batch#"
                            defaultValue="D# 01-A-MM-Y"
                            helperText="Design"
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
                    {/* grid-2 ends */}

                       {/* grid-3 */}
                       <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Components"
                            defaultValue="Front"
                            helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option2.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-3 ends */}

 {/* grid-4 */}
 <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Fabric"
                            defaultValue="Lawn 102/88"
                            helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option3.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-4 ends */}


 {/* grid-5 */}
 <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Vendor Name"
                            defaultValue="Haneef"
                            // helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option4.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-5 ends */}

                     {/* grid-6 */}
 <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Select Design Color"
                            defaultValue="Auto Fetch"
                            // helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option5.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-6 ends */}

                  
                    {/* grid-7 */}
 <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label=" Color"
                            defaultValue="Black"
                            // helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                        >
                            {option6.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-7 ends */}

                          {/* grid-8 */}
 <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label=" Process Type"
                            defaultValue="Hand Work"
                            // helperText="Design"
                            variant="outlined"
                            size="small"
                            fullWidth
                            
                        >
                            {option7.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {/* grid-8 ends */}

                     {/* grid-9*/}
                     <Grid item md={1.5} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Pcs per component"
                            name="Pcs per component"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-9 ends */}
                    
                      

                       {/* grid-10*/}
                       <Grid item md={1.5} width="inherit" paddingX={1} >
                        <TextField 
                            id="outlined-required"
                            label="PO PC'S"
                            name="PO PC'S"
                            size="small"
                            disabled

                        />
                    </Grid>
                    {/* grid-10 ends */}


                      {/* grid-11*/}
                      <Grid item md={1.5} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label=" Quantity"
                            name="Quantity"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-11 ends */}

                      {/* grid-12*/}
                      <Grid item md={1.5} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Rate"
                            name="Rate"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-12 ends */}

                      {/* grid-13*/}
                      <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Cost per Component"
                            name="Cost per Component"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-13 ends */}

                      {/* grid-14*/}
                      <Grid item md={3} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Total Amount"
                            name="Total Amount"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-14 ends */}


                    {/* grid-button */}
                    <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
                     
                            <Button variant="contained" color="primary" size="small"  >
                                Add
                            </Button>
                       
                    </Grid>
                    {/* grid-button ends */}
                </Grid>
    );
}

