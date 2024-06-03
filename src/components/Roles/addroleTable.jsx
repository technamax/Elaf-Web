import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";

export default function AddRoleTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Example data fetching
    const fetchData = async () => {
      // This is where you would fetch data from an API or other source
      const data = [
        { id: 1, "Role Name": "Admin", Description: "Administrator Role", enabled: "Yes", action: "Edit" },
        { id: 2, "Role Name": "User", Description: "User Role", enabled: "No", action: "Edit" },
        // Add more rows as needed
      ];
      setRows(data);
    };

    fetchData();
  }, []);

  const columns = [
    { field: "Role Name", headerName: "Role Name", width: 150 },
    { field: "Description", headerName: "Description", width: 300 },
    { field: "enabled", headerName: "Enabled", minWidth: 120 },
    { field: "action", headerName: "Action", minWidth: 120 }
  ];

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={[10, 15]}
        localeText={{
          toolbarDensity: "Size",
          toolbarDensityLabel: "Size",
          toolbarDensityCompact: "Small",
          toolbarDensityStandard: "Medium",
          toolbarDensityComfortable: "Large"
        }}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  );
}

