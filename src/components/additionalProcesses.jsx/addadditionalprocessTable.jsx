import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
export default function AdditionalProcessTable() {
  const [rows, setRows] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:86/api/AdditionalProcess/GetAdditionalProcessListByBatchNo?batchNo=1`
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
    { field: 'designId', headerName: 'design Id', width: 150 },
    { field: 'batchNo', headerName: 'batch No', width: 200 },
    { field: 'componentId', headerName: 'component Id', minWidth: 120 },
    { field: 'fabricId', headerName: 'fabric Id', minWidth: 120 },
    { field: 'colourId', headerName: 'colour Id', minWidth: 120 },
    {
      field: 'costPerComponent',
      headerName: 'cost Per omponent',
      minWidth: 120
    },
    { field: 'baseColor', headerName: 'base Color', minWidth: 120 },
    { field: 'processTypeId', headerName: 'process Type Id', minWidth: 120 },
    { field: 'quantity', headerName: 'quantity', minWidth: 120 },
    { field: 'ratePerPcs', headerName: 'rate Per Pcs', minWidth: 120 },
    { field: 'totalAmount', headerName: 'total Amount', minWidth: 120 },
    { field: 'uomId', headerName: 'uom Id', minWidth: 120 },
    { field: 'pcsPerComponent', headerName: 'pcs Per Component', minWidth: 120 }
  ];

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        fetchData={fetchData}
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
