// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';

// export default function AddApplication({ onSaveSuccess }) {
//   const options = [
//     {
//       value: 'yes',
//       label: 'yes',
//     },
//     {
//       value: 'no',
//       label: 'no',
//     },
//   ];

//   const [formData, setFormData] = useState({
//     appName: '',
//     startDate: '',
//     endDate: '',
//     enabled: '',
//     createdBy: 0,
//     createdOn: new Date().toISOString()
//   });

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         'http://100.42.177.77:81/api/ApplicationConfig/SaveApplication',
//         formData
//       );
//       console.log('Form data saved:', response.data);
//       setFormData({
//         appName: '',
//         startDate: '',
//         endDate: '',
//         enabled: ''
//       });
//       if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <div>
//       <Box m={3} pt={4}
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: 'inherit' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Grid container>
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               fullWidth
//               label="App name"
//               name="appName"
//               value={formData.appName}
//               onChange={handleChange}
//               size="small"
//             />
//           </Grid>
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               size="small"
//               type="date"
//               label="Start Date"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               fullWidth
//               focused
//             />
//           </Grid>
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               size="small"
//               type="date"
//               label="End Date"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               fullWidth
//               focused
//             />
//           </Grid>
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-select-option"
//               select
//               label="Enabled"
//               name="enabled"
//               defaultValue="yes"
//               helperText="Please select an option"
//               variant="outlined"
//               value={formData.enabled}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//             >
//               {options.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
//             <Button variant="contained" color="primary" size="small" onClick={handleSave}>
//               Save
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }
