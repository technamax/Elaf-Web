import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function AddAdditionalServices() {
    const options = [
        {
          value: 'Card Printing',
          label: 'Card Printing',
        },
        {
          value: 'Additional Service',
          label: 'Additional Service',
        },
    ];
    const option2 = [
        {
          value: 'Elaf PVC Zipper Bag',
          label: 'Elaf PVC Zipper Bag',
        },
        {
          value: 'No',
          label: 'No',
        },
    ];
    const option1 = [
        {
          value: 'Mudassir Hussain Packaging Service',
          label: 'Mudassir Hussain Packaging Service',
        },
        {
          value: 'No',
          label: 'No',
        },
    ];
    return (
      
                       <Grid container spacing={2} width="Inherit">

                     <Grid item md={12} width="inherit" paddingX={1}>

                    <Typography variant="h3" gutterBottom>
     Additional Services
      </Typography>
                    </Grid>

                     {/* grid-1 */}
                     <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Service Type"
                            defaultValue="Card Printing"
                            helperText="Service Type"
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

                     {/* grid-2 starts */}

                    <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Service List"
                            defaultValue="Elaf PVC Zipper Bag"
                            helperText="Service List"
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
                    {/* grid-2 ends */}

 {/* grid-3 starts */}

 <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Vendor Name"
                            defaultValue="Mudassir Hussain Packaging Service"
                            helperText="Service List"
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
                    {/* grid-3 ends */}

{/* grid-4*/}
<Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="PO PC's"
                            name="PO PC's"
                            size="small"
                            disabled
                        />
                    </Grid>
                    {/* grid-4 ends */}

                       {/* grid-5*/}
                       <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Qty"
                            name="Qty"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-5 ends */}

                    
                         {/* grid-6*/}
                         <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="UOM"
                            name="UOM"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-6 ends */}

                    
                         {/* grid-7*/}
                         <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Rate"
                            name="Rate"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-7 ends */}

                    
                         {/* grid-8*/}
                         <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Total Amount"
                            name="Total Amount"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-8 ends */}

                    
                         {/* grid-9*/}
                         <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Cost per Piece"
                            name="Cost per Piece"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-9 ends */}


                    {/* grid-button */}
                    <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
                     
                            <Button variant="contained" color="primary" size="small"  >
                                Add
                            </Button>
                       
                    </Grid>
                    </Grid>
             
    );
}