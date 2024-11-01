import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function AddRoleTable() {
  const [rows, setRows] = useState([]);

  // GetRoleById

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:86/api/Role/GetRoleById?id=1`
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

  // GetRoleList

  // const [rows, setRows] = useState([]);
  const fetchData2 = useCallback(async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get(
        'http://100.42.177.77:86/api/Role/GetRoleList?appId=1'
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

  useEffect(() => {
    fetchData2(); // Fetch data when the component mounts
  }, [fetchData2]);

  //DeleteRoleById

  // const [rows, setRows] = useState([]);
  const fetchData3 = useCallback(async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get(
        'http://100.42.177.77:86/api/Role/DeleteRoleById?id=1'
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

  useEffect(() => {
    fetchData3(); // Fetch data when the component mounts
  }, [fetchData3]);

  const columns = [
    { field: 'roleName', headerName: 'Role Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
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
