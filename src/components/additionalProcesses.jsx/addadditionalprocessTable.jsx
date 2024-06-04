import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";

export default function AdditionalProcessTable() {
  const [rows, setRows] = useState([]);

  

  const columns = [
    { field: "Order No.", headerName: "Order No", width: 150 },
    { field: "Design", headerName: "Design", width:200 },
    { field: "Design Color", headerName: "Design Color", minWidth: 120 },
    { field: "Component", headerName: "Component", minWidth: 120 },
    { field: "Fabric", headerName: "Fabric", minWidth: 120 },
    { field: "Vendor Name", headerName: "Vendor Name", minWidth: 120 },
    { field: "Process", headerName: "Process", minWidth: 120 },
    { field: "Color", headerName: "Color", minWidth: 120 },
    { field: "Po Pcs", headerName: "Po Pcs", minWidth: 120 },
    { field: "Qty", headerName: "Qty", minWidth: 120 },
    { field: "Rate", headerName: "Rate", minWidth: 120 },
    { field: "Cost per Component", headerName: "Cost per Component", minWidth: 120 },
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

