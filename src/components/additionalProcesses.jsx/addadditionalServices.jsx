import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function AddAdditionalServices(onSaveSuccess) {
    const options = [
        {//
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


    const [formData, setFormData] = useState({
        serviceTypeId: '',
        serviceListId: '',
        vendorId: '',
        poPcs: '',
        qty: '',
        uomId: '',
        rate: '',
        totalAmount: '',
        quantity: '',
        ratePerPcs: '',
        totalAmount: '',
        costperPiece: '',
        uom: '',
        vendor: null,
        serviceType: null,
        serviceListName: null,
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
            'https://gecxc.com:4041/api/AdditionalServices/SaveAdditionalServices',
            formData
          );
          console.log('Form data saved:', response.data);
          setFormData({
            serviceTypeId: '',
            serviceListId: '',
            vendorId: '',
            poPcs: '',
            qty: '',
            uomId: '',
            rate: '',
            totalAmount: '',
            quantity: '',
            ratePerPcs: '',
            totalAmount: '',
            costperPiece: '',
            uom: '',
            vendor: null,
            serviceType: null,
            serviceListName: null,
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
     Additional Services
      </Typography>
                    </Grid>

                     {/* grid-1 */}
                     <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-select-option"
                            select
                            label="Service Type"
                            name="serviceTypeId"
                            value={formData.serviceTypeId}
                            onChange={handleChange}
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
                            label="Service List Id"
                            name="serviceListId"
                            value={formData.serviceList}
                            onChange={handleChange}
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
                            name="vendorId"
                            value={formData.vendorId}
                            onChange={handleChange}
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
                            name="poPcs"
                            value={formData.poPcs}
                            onChange={handleChange}
                            type="number"
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
                            name="qty"
                            value={formData.qty}
                            onChange={handleChange}
                            type="number"
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
                            name="uomId"
                            value={formData.uomId}
                            onChange={handleChange}
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
                            name="rate"
                            value={formData.rate}
                            onChange={handleChange}
                            type="number"
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
                            name="totalAmount"
                            value={formData.totalAmount}
                            onChange={handleChange}
                            type="number"
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
                            name="costperPiece"
                            value={formData.costperPiece}
                            onChange={handleChange}
                            type="number"
                            size="small"
                            required
                        />
                    </Grid>
                    {/* grid-9 ends */}

                    
                         {/* grid-10*/}
                         {/* <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="UOM"
                            name="uom"
                            value={formData.uom}
                            onChange={handleChange}
                            type="number"
                            size="small"
                            required
                        />
                    </Grid> */}
                    {/* grid-10 ends */}

                                              {/* grid-11*/}
                                            {/* <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Vendor"
                            name="vendor"
                            value={formData.vendor}
                            onChange={handleChange}
                            type="number"
                            size="small"
                            required
                        />
                    </Grid> */}
                    {/* grid-11 ends */}

                    {/* grid-12*/}
                    {/* <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Service Type"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            type="number"
                            size="small"
                            required
                        />
                    </Grid> */}
                    {/* grid-12 ends */}

                    
                    {/* grid-13*/}
                    {/* <Grid item md={4} width="inherit" paddingX={1}>
                        <TextField
                            id="outlined-required"
                            label="Service List Name"
                            name="serviceListName"
                            value={formData.serviceListName}
                            onChange={handleChange}
                            type="number"
                            size="small"
                            required
                        />
                    </Grid> */}
                    {/* grid-13 ends */}

                    {/* grid-button */}
                    <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
                     
                            <Button variant="contained" color="primary" size="small"  >
                                Add
                            </Button>
                       
                    </Grid>
                    </Grid>
             
    );
}