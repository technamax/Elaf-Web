import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  Typography,
  Box,
  Paper,
  Checkbox
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const rows = [
  {
    id: 1,
    fabric: 'Cotton',
    weight: '250 GSM',
    color: 'White',
    price: '$5/m',
    components: [
      { component: 'Organic Cotton', percentage: 80 },
      { component: 'Synthetic Fiber', percentage: 20 }
    ]
  },
  {
    id: 2,
    fabric: 'Polyester',
    weight: '300 GSM',
    color: 'Blue',
    price: '$7/m',
    components: [{ component: 'Polyester Fiber', percentage: 100 }]
  },
  {
    id: 3,
    fabric: 'Wool Blend',
    weight: '350 GSM',
    color: 'Grey',
    price: '$10/m',
    components: [
      { component: 'Wool', percentage: 60 },
      { component: 'Acrylic', percentage: 40 }
    ]
  },
  {
    id: 4,
    fabric: 'Silk',
    weight: '200 GSM',
    color: 'Red',
    price: '$15/m',
    components: [{ component: 'Silk', percentage: 100 }]
  }
];

const CollapsibleDataGrid = () => {
  const [openRows, setOpenRows] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (id) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>Fabric</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price per meter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow selected={isRowSelected(row.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isRowSelected(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => toggleRow(row.id)}
                  >
                    {openRows[row.id] ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{row.fabric}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.color}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse in={openRows[row.id]} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Typography variant="h6" gutterBottom component="div">
                        Components
                      </Typography>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Component</TableCell>
                            <TableCell align="right">Percentage (%)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.components.map((component, index) => (
                            <TableRow key={index}>
                              <TableCell>{component.component}</TableCell>
                              <TableCell align="right">
                                {component.percentage}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleDataGrid;
