import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Collapse, Typography, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const CollapsibleDataGrid = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const rows = [
    { id: 1, name: 'Product A', category: 'Category 1', stock: 120 },
    { id: 2, name: 'Product B', category: 'Category 2', stock: 80 },
    { id: 3, name: 'Product C', category: 'Category 1', stock: 50 }
  ];

  const columns = [
    {
      field: 'expand',
      headerName: '',
      sortable: false,
      width: 50,
      renderCell: (params) => (
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() =>
            setExpandedRow(expandedRow === params.id ? null : params.id)
          }
        >
          {expandedRow === params.id ? (
            <KeyboardArrowUp />
          ) : (
            <KeyboardArrowDown />
          )}
        </IconButton>
      )
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'stock', headerName: 'Stock', width: 100 }
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight
        getRowHeight={(params) => (expandedRow === params.id ? 100 : 'auto')}
        components={{
          Row: (props) => (
            <div>
              <props.Row {...props} />
              {expandedRow === props.row.id && (
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: '#f9f9f9',
                      borderBottom: '1px solid #e0e0e0'
                    }}
                  >
                    <Typography variant="body2">
                      Detailed information about {props.row.name}.
                    </Typography>
                  </Box>
                </Collapse>
              )}
            </div>
          )
        }}
      />
    </Box>
  );
};

export default CollapsibleDataGrid;
