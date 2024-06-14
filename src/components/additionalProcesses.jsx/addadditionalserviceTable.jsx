import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState, useEffect, useCallback } from 'react';
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
        ...row
      }));

      setRows(dataWithId); // Set the fetched data to the rows state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [fetchData]);

  const columns = [
    { field: 'serviceTypeId', headerName: 'Service Type' },
    { field: 'serviceList', headerName: 'Service List' },
    { field: 'vendorId', headerName: 'Vendor' },
    { field: 'qty', headerName: 'Qty' },
    { field: 'uom', headerName: 'UOM' },
    { field: 'rate', headerName: 'Rate' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'uomId', headerName: 'UOM Id' },
    { field: 'quantity', headerName: 'quantity' },
    { field: 'ratePerPcs', headerName: 'rate Per Pcs' },
    { field: 'costperPiece', headerName: 'cost per Piece' },
    { field: 'vendor', headerName: 'Vendor' },
    { field: 'serviceType', headerName: 'Service Type' },
    { field: 'serviceListName', headerName: 'Service List Name' }
  ];

  return (
    <div style={{ height: 'auto', width: '100%' }}>
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
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large'
        }}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  );
}
