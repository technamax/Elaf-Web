// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';

// export default function AddMainMenu({ onSaveSuccess }) {

//   const option1 = [
//     { value: 'Yes', label: 'Yes' },
//     { value: 'No', label: 'No' },
//   ];

//   const [formData, setFormData] = useState({

//     mainMenuDesc: '',
//     orderNo: '',
//     enabled: '',
//     createdBy: 0,
//     createdOn: new Date().toISOString(),
//     appId: 1,
//     icon: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         'http://100.42.177.77:83/api/Menu/SaveMainMenu',
//         formData
//       );
//       console.log('Form data saved:', response.data);
//       setFormData({

//         mainMenuDesc: '',
//         orderNo: '',
//         enabled: '',
//         createdBy: 0,
//         createdOn: new Date().toISOString(),
//         appId: 1,
//         icon: ''
//       });
//       if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <div>
//       <Box m={3} pt={3}
//         component="form"
//         sx={{ '& .MuiTextField-root': { m: 1, width: 'inherit' } }}
//         noValidate
//         autoComplete="off"
//       >
//         <Grid container>

//           {/* grid-1 */}
//           {/* <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Main Menu Id"
//               name="mainMenuId "
//               size="small"
//               value={formData.mainMenuId}
//               onChange={handleChange}
//             />
//           </Grid> */}
//           {/* grid-1 ends */}

//           {/* grid-2 */}
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Main Menu Description"
//               name="mainMenuDesc"
//               size="small"
//               value={formData.mainMenuDesc}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           {/* grid-2 ends */}

//           {/* grid-3 */}
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Order No."
//               name="orderNo"
//               size="small"
//               value={formData.orderNo}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           {/* grid-3 ends */}

//           {/* grid-4 */}
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-select-option"
//               select
//               label="Enabled"
//               name="enabled"
//               value={formData.enabled}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//             >
//               {option1.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           {/* grid-4 ends */}

//           {/* grid-5 */}
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="app Id"
//               name="appId"
//               size="small"
//               value={formData.appId}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           {/* grid-5 ends */}

//           {/* grid-6 */}
//           <Grid item md={3} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="icon"
//               name="icon"
//               size="small"
//               value={formData.icon}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           {/* grid-6 ends */}

//           {/* grid-button */}
//           <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
//             <Button variant="contained" color="primary" size="small" onClick={handleSave}>
//               Save
//             </Button>
//           </Grid>
//           {/* grid-button ends */}
//         </Grid>
//       </Box>
//     </div>
//   );
// }
