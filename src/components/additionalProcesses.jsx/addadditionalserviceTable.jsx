import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function AdditionalServiceTable({
  fetchData,
  additionalServiceId
}) {
  const [rows, setRows] = useState([]);

  const fetchDataInternal = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://gecxc.com:449/api/AdditionalServices/GetAdditionalServicesListByAdditionalServiceId?additionalServiceId=1`
      );
      const dataWithId = response.data.result.map((row, index) => ({
        id: index,
        ...row
      }));

      setRows(dataWithId); // Set the fetched data to the rows state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [additionalServiceId]);

  useEffect(() => {
    fetchDataInternal();
  }, [fetchDataInternal]);

  const columns = [
    { field: 'additionalServiceId', headerName: 'Additional Service ID' },
    { field: 'serviceTypeId', headerName: 'Service Type ID' },
    { field: 'serviceListId', headerName: 'Service List ID' },
    { field: 'vendorId', headerName: 'Vendor ID' },
    { field: 'collectionId', headerName: 'Collection ID' },
    { field: 'collectionName', headerName: 'Collection Name' },
    { field: 'poPcs', headerName: 'PO Pieces' },
    { field: 'qty', headerName: 'Quantity' },
    { field: 'uomId', headerName: 'UOM ID' },
    { field: 'rate', headerName: 'Rate' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'costperPiece', headerName: 'Cost per Piece' },
    { field: 'createdBy', headerName: 'Created By' },
    { field: 'createdOn', headerName: 'Created On' },
    { field: 'lastUpdatedBy', headerName: 'Last Updated By' },
    { field: 'lastUpdatedOn', headerName: 'Last Updated On' },
    { field: 'uom', headerName: 'UOM' },
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
