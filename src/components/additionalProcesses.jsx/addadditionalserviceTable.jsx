import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";

export default function AdditionalServiceTable() {
  const [rows, setRows] = useState([]);



  const columns = [
    { field: "Service Type", headerName: "Service Type", width: 150 },
    { field: "Service List", headerName: "Service List", width:200 },
    { field: "Vendor", headerName: "Vendor", minWidth: 120 },
    { field: "Qty", headerName: "Qty", minWidth: 120 },
    { field: "UOM", headerName: "UOM", minWidth: 120 },
    { field: "Rate", headerName: "Rate", minWidth: 120 },
    { field: "Total Amount", headerName: "Total Amount", minWidth: 120 }
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

