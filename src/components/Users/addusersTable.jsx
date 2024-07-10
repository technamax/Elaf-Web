// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import React, { useState, useEffect, useCallback } from "react";
// import axios from 'axios';

// export default function AddUsersTable() {
//   const [rows, setRows] = useState([]);

//   // GetUserMenuByEmpId
//    // Define fetchData inside the component
//    const fetchData = useCallback(async () => {
//     try {
//       console.log("Fetching data...");
//       const response = await axios.get('https://gecxc.com:449/api/Users/GetUserMenuByEmpId?empId=1');
//       console.log("Data fetched:", response.data);

//       const dataWithId = response.data.result.map((row, index) => ({
//         id: index,
//         ...row,
//       }));
//       console.log("Data with ID:", dataWithId);

//       setRows(dataWithId); // Set the fetched data to the rows state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts
//   }, [fetchData]);

//   // GetGetUserSubMenuByEmpId

// // const [rows, setRows] = useState([]);
// const fetchData2 = useCallback(async () => {
//   try {
//     console.log("Fetching data...");
//     const response = await axios.get('https://gecxc.com:449/api/Users/GetUserSubMenuByEmpId?empId=1');
//     console.log("Data fetched:", response.data);

//     const dataWithId = response.data.result.map((row, index) => ({
//       id: index,
//       ...row,
//     }));
//     console.log("Data with ID:", dataWithId);

//     setRows(dataWithId); // Set the fetched data to the rows state
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }, []);

// useEffect(() => {
//   fetchData2(); // Fetch data when the component mounts
// }, [fetchData2]);

// // GetUsersList

// const fetchData3 = useCallback(async () => {
//   try {
//     console.log("Fetching data...");
//     const response = await axios.get('https://gecxc.com:449/api/Users/GetUsersList');
//     console.log("Data fetched:", response.data);

//     const dataWithId = response.data.result.map((row, index) => ({
//       id: index,
//       ...row,
//     }));
//     console.log("Data with ID:", dataWithId);

//     setRows(dataWithId); // Set the fetched data to the rows state
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }, []);

// useEffect(() => {
//   fetchData3(); // Fetch data when the component mounts
// }, [fetchData3]);

//   const columns = [
//     { field: "firstName", headerName: "First Name", width: 150 },
//     { field: "lastName", headerName: "Last Name", width:200 },
//     { field: "userName", headerName: "User Name", minWidth: 120 },
//     { field: "empId", headerName: " Emp Id", minWidth: 120 },
//     { field: "password", headerName: "Password", minWidth: 120 },
//     { field: "isActive", headerName: "is Active", minWidth: 120 },
//     { field: "appId", headerName: "App Id", minWidth: 120 },

//   ];

//   return (
//     <div style={{ height: "auto", width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         autoHeight
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 }
//           }
//         }}
//         pageSizeOptions={[10, 15]}
//         localeText={{
//           toolbarDensity: "Size",
//           toolbarDensityLabel: "Size",
//           toolbarDensityCompact: "Small",
//           toolbarDensityStandard: "Medium",
//           toolbarDensityComfortable: "Large"
//         }}
//         components={{
//           Toolbar: GridToolbar
//         }}
//       />
//     </div>
//   );
// }
