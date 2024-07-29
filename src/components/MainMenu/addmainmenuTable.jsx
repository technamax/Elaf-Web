// import React, { useState, useEffect, useCallback } from 'react';
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import axios from 'axios';

// export default function AddMainMenuTable() {
//   const [rows, setRows] = useState([]);

//   const fetchData = useCallback(async () => {
//     try {
//       console.log("Fetching data...");
//       const response = await axios.get('https://gecxc.com:449/api/Menu/GetMainMenuById?id=1');
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

// // GetMainMenuList

// // const [rows, setRows] = useState([]);
// const fetchData2 = useCallback(async () => {
//     try {
//       console.log("Fetching data...");
//       const response = await axios.get('https://gecxc.com:449/api/Menu/GetMainMenuList');
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
//     fetchData2(); // Fetch data when the component mounts
//   }, [fetchData2]);

//   const columns = [
//     { field: "mainMenuId", headerName: "Main Menu Id", width: 150 },
//     { field: "mainMenuDesc", headerName: "Main Menu Desc", width: 200 },
//     { field: "orderNo", headerName: "Order No", minWidth: 120 },
//     { field: "enabled", headerName: "Enabled", minWidth: 120 },
//     { field: "CreatedBy", headerName: "Created By", minWidth: 120 },
//     { field: "CreatedOn", headerName: "Created On", minWidth: 120 },
//     { field: "appId", headerName: "app Id", minWidth: 120 },
//     { field: "icon", headerName: "icon", minWidth: 120 }
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
