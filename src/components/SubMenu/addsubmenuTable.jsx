import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function AddSubMenuTable() {
  const [rows, setRows] = useState([]);

  // Define fetchData inside the component
  const fetchData = useCallback(async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get(
        'http://100.42.177.77:83/api/Menu/GetSubMenuList'
      );
      console.log('Data fetched:', response.data);

      const dataWithId = response.data.result.map((row, index) => ({
        id: index,
        ...row
      }));
      console.log('Data with ID:', dataWithId);

      setRows(dataWithId); // Set the fetched data to the rows state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    {
      field: 'subMenuDesc',
      headerName: 'Sub Menu Description',
      width: 200,
      flex: 1
    },
    { field: 'link', headerName: 'Link', minWidth: 120 },
    { field: 'icon', headerName: 'Icon', minWidth: 120 },
    { field: 'orderNo', headerName: 'Order No.', minWidth: 120 },
    { field: 'enabled', headerName: 'Enabled', minWidth: 120 },
    { field: 'createdBy', headerName: 'Created By', minWidth: 120 },
    { field: 'createdOn', headerName: 'Created On', minWidth: 120 }
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
