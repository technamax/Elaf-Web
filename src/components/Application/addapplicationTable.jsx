// import React, { useState, useEffect, useCallback } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import axios from 'axios';

// export default function AddApplicationTable() {
//   const [rows, setRows] = useState([]);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         `https://gecxc.com:449/api/ApplicationConfig/GetApplicationList`
//       );

//       const dataWithId = response.data.result.map((row, index) => ({
//         id: index,
//         ...row,
//       }));

//       setRows(dataWithId); // Set the fetched data to the rows state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts
//   }, [fetchData]);

//   const columns = [
//     { field: "appName", headerName: "App Name", width: 150 },
//     { field: "startDate", headerName: "Start Date", width: 300 },
//     { field: "endDate", headerName: "End Date", width: 300 },
//     { field: "enabled", headerName: "Enabled", minWidth: 120 },
//     { field: "action", headerName: "Action", minWidth: 120 }
//   ];

//   return (
//     <div style={{ height: "auto", width: "100%" }}>
//       <DataGrid
//         rows={rows} // Pass the state holding rows to DataGrid
//         columns={columns}
//         fetchData={fetchData}
//         autoHeight
//         getRowId={(row) => row.id} // Specify the row id
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
