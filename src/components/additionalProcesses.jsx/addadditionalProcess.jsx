
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import axios from 'axios';



export default function AddAdditionalProcess(onSaveSuccess) {
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


    const [formData, setFormData] = useState({
        designId: '',
        batchNo: '',
        componentId: '',
        fabricId: '',
        colourId: '',
        costPerComponent: '',
        baseColor: '',
        processTypeId: '',
        quantity: '',
        ratePerPcs: '',
        totalAmount: '',
        uomId: '',
        pcsPerComponent: '',
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
            'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcess',
            formData
          );
          console.log('Form data saved:', response.data);
          setFormData({
            designId: '',
            batchNo: '',
            componentId: '',
            fabricId: '',
            colourId: '',
            costPerComponent: '',
            baseColor: '',
            processTypeId: '',
            quantity: '',
            ratePerPcs: '',
            totalAmount: '',
            uomId: '',
            pcsPerComponent: '',
          });
          if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    

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
                            name="designId"
                            value={formData.designId}
                            onChange={handleChange}
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
                            name="batchNo"
                            value={formData.batchNo}
                            onChange={handleChange}
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
                            name="componentId"
                            value={formData.componentId}
                            onChange={handleChange}
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
                            // name="componentId"
                            // value={formData.componentId}
                            onChange={handleChange}
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
                            // defaultValue="Haneef"    
                            onChange={handleChange}
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
                            name="baseColor"
                            value={formData.baseColor}
                            onChange={handleChange}
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
                            name="colourId"
                            value={formData.colourId}
                            onChange={handleChange}
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
                            name="processTypeId"
                            value={formData.processTypeId}
                            onChange={handleChange}
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
                            name="pcsPerComponent"
                            type="number"
                            value={formData.pcsPerComponent}
                            onChange={handleChange}
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
                            type="number"
                            onChange={handleChange}
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
                            name="quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
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
                            name="ratePerPcs"
                            type="number"
                            value={formData.ratePerPcs}
                            onChange={handleChange}
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
                            name="costPerComponent"
                            type="number"
                            value={formData.costPerComponent}
                            onChange={handleChange}
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
                            name="totalAmount"
                            type="number"
                            value={formData.totalAmount}
                            onChange={handleChange}
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-14 ends */}


                    {/* grid-button */}
                    <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
                     
                            <Button variant="contained" color="primary" size="small" onClick={handleSave} >
                                Add
                            </Button>
                       
                    </Grid>
                    {/* grid-button ends */}
                </Grid>
    );
}

