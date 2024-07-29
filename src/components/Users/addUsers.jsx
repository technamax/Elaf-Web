// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';

// export default function AddUsers({ onSaveSuccess }) {
//   const options = [
//     {
//       value: 'yes',
//       label: 'yes'
//     },
//     {
//       value: 'no',
//       label: 'no'
//     }
//   ];

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     userName: '',
//     empId: '',
//     password: '',
//     isActive: 'yes', // default value
//     appId: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     const dataToSend = {
//       ...formData,
//       isActive: formData.isActive === 'yes'
//     };

//     console.log(dataToSend);
//     try {
//       const response = await axios.post(
//         'https://gecxc.com:449/api/Users/SaveUsers',
//         dataToSend
//       );
//       console.log('Form data saved:', response.data);
//       setFormData({
//         firstName: '',
//         lastName: '',
//         userName: '',
//         empId: '',
//         password: '',
//         isActive: 'yes',
//         appId: ''
//       });
//       setErrors({});
//       if (onSaveSuccess) onSaveSuccess(); // Call the success handler to refresh data
//     } catch (error) {
//       console.error('Error saving data:', error);
//       if (error.response && error.response.data) {
//         setErrors(error.response.data.errors);
//       }
//     }
//   };

//   return (
//     <div>
//       <Box
//         m={3}
//         pt={4}
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: 'inherit' }
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Grid container>
//           {/* grid-1 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="First Name"
//               name="firstName"
//               size="small"
//               required
//               value={formData.firstName}
//               onChange={handleChange}
//               error={!!errors.firstName}
//               helperText={errors.firstName && errors.firstName[0]}
//             />
//           </Grid>
//           {/* grid-1 ends */}

//           {/* grid-2 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Last Name"
//               name="lastName"
//               size="small"
//               required
//               value={formData.lastName}
//               onChange={handleChange}
//               error={!!errors.lastName}
//               helperText={errors.lastName && errors.lastName[0]}
//             />
//           </Grid>
//           {/* grid-2 ends */}

//           {/* grid-3 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="User Name"
//               name="userName"
//               size="small"
//               required
//               value={formData.userName}
//               onChange={handleChange}
//               error={!!errors.userName}
//               helperText={errors.userName && errors.userName[0]}
//             />
//           </Grid>
//           {/* grid-3 ends */}

//           {/* grid-4 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Emp Id"
//               name="empId"
//               size="small"
//               required
//               value={formData.empId}
//               onChange={handleChange}
//               error={!!errors.empId}
//               helperText={errors.empId && errors.empId[0]}
//             />
//           </Grid>
//           {/* grid-4 ends */}

//           {/* grid-5 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="Password"
//               name="password"
//               size="small"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password && errors.password[0]}
//             />
//           </Grid>
//           {/* grid-5 ends */}

//           {/* grid-6 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-select-option"
//               select
//               label="is Active"
//               name="isActive"
//               size="small"
//               required
//               value={formData.isActive}
//               onChange={handleChange}
//               error={!!errors.isActive}
//               helperText={errors.isActive && errors.isActive[0]}
//             >
//               {options.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           {/* grid-6 ends */}

//           {/* grid-7 */}
//           <Grid item md={4} width="inherit" paddingX={1}>
//             <TextField
//               id="outlined-required"
//               label="App Id"
//               name="appId"
//               size="small"
//               required
//               value={formData.appId}
//               onChange={handleChange}
//               error={!!errors.appId}
//               helperText={errors.appId && errors.appId[0]}
//             />
//           </Grid>
//           {/* grid-7 ends */}

//           {/* grid-button */}
//           <Grid item md={12} width="inherit" paddingX={1} textAlign="right">
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={handleSave}
//             >
//               Save
//             </Button>
//           </Grid>
//           {/* grid-button ends */}
//         </Grid>
//       </Box>
//     </div>
//   );
// }
