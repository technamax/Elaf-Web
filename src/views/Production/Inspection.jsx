import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Card,
  CardHeader,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import '../../assets/scss/style.scss';
const Inspection = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    issuanceId: '',
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  const [initialRows, setInitialRows] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = async () => {
    if (formData.issuanceId) {
      try {
        const response = await axios.get(
          `http://100.42.177.77:83/api/Receiving/GetReceivingHeader`,
          {
            params: {
              issuanceId: formData.issuanceId,
              status: 7 // assuming you want to use a fixed status of 7
            }
          }
        );

        // Log the API response data
        console.log('API response:', response.data);

        // Extract the result array from the response data
        const resultArray = response.data.result;

        // Check if the result is an array
        if (Array.isArray(resultArray)) {
          // Add id field to each row
          const dataWithIds = resultArray.map((row) => ({
            ...row,
            id: row.receivingId // Ensure unique id for each row
          }));

          // Set the response data to state
          setInitialRows(dataWithIds);

          enqueueSnackbar('Data fetched successfully!', { variant: 'success' });
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        enqueueSnackbar('Failed to fetch data!', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Please enter an issuance ID!', { variant: 'warning' });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClickOpen = async (data) => {
    // setIss(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: 'receivingId', headerName: 'Receiving ID', width: 90 },
    { field: 'igpNumber', headerName: 'IGP Number', width: 90 },
    {
      field: 'igpDate',
      headerName: 'IGP Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      },
      width: 120
    },

    {
      field: 'receivingDate',
      headerName: 'Receiving Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      },
      width: 120
    },
    // { field: 'ogpNumber', headerName: 'OGP Number', width: 120 },
    // { field: 'vendorName', headerName: 'Vendor Name', width: 180 },
    { field: 'collectionName', headerName: 'Collection Name', width: 200 },
    { field: 'poName', headerName: 'PO Name', width: 180 },
    { field: 'processTypename', headerName: 'Process Type', width: 150 },
    { field: 'statusName', headerName: 'Status', width: 120 },
    {
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small" sx={{ mt: 1 }}>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              Inspection
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Inspection"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={3}>
            <TextField
              label="Enter Issuance Number"
              type="number"
              fullWidth
              size="small"
              name="issuanceId"
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              value={formData.issuanceId}
              required
            />
          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 0.5 }}>
            <Button variant="contained" size="small" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              hideAction
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
              <DialogTitle
                sx={{
                  backgroundColor: '#A11F23',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingX: '24px',
                  paddingY: '4px'
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="#ffffff"
                  gutterBottom
                  fontSize={20}
                  fontWeight={2}
                  fontStyle={'normal'}
                >
                  {'Start Inspection'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <ReceivingDetails
                  iss={iss}
                  handleClose={handleClose}
                  refetchIssuanceData={refetch}
                  // refetchIssuanceData={refetchIssuanceData}
                /> */}
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
export default Inspection;
