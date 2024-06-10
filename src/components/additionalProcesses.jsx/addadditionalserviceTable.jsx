import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
export default function AdditionalServiceTable() {
  const [rows, setRows] = useState([]);


  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/AdditionalServices/GetdditionalServicesListByServiceTypeId?serviceTypeId=1`
      );

    
      const dataWithId = response.data.result.map((row, index) => ({
        id: index, 
        ...row,
      }));

      setRows(dataWithId); // Set the fetched data to the rows state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [fetchData]);


  const columns = [
    { field: "serviceTypeId", headerName: "Service Type", width: 150 },
    { field: "serviceList", headerName: "Service List", width:200 },
    { field: "vendorId", headerName: "Vendor", minWidth: 120 },
    { field: "qty", headerName: "Qty", minWidth: 120 },
    { field: "uom", headerName: "UOM", minWidth: 120 },
    { field: "rate", headerName: "Rate", minWidth: 120 },
    { field: "totalAmount", headerName: "Total Amount", minWidth: 120 },
    { field: "uomId", headerName: "UOM Id", minWidth: 120 },
    { field: "quantity", headerName: "quantity", minWidth: 120 },
    { field: "ratePerPcs", headerName: "rate Per Pcs", minWidth: 120 },
    { field: "costperPiece", headerName: "cost per Piece", minWidth: 120 },
    { field: "vendor", headerName: "Vendor", minWidth: 120 },
    { field: "serviceType", headerName: "Service Type", minWidth: 120 },
    { field: "serviceListName", headerName: "Service List Name", minWidth: 120 }

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

