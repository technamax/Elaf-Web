import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Typography,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  useGetReceivingHeaderQuery,
  useGetInspectionHeaderQuery
} from 'api/store/Apis/productionApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { getValue } from '@mui/system';
import SSRSReport from 'views/DetailedReports/Reports';
import StatusChip from 'components/StatusChip';
const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const InspectionView = ({ formData, refetch }) => {
  // const [formData, setFormData] = useState({ inspectionId: 0, ...rData });
  const apiRef = useGridApiRef();

  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [receiveDetails, setReceiveDetails] = useState([]);
  const { data: receivingData, refetch: refetchReceivingData } =
    useGetInspectionHeaderQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });

  useEffect(() => {
    if (receivingData?.result === null) {
      setReceiveDetails([]);
      return;
    }
    if (receivingData) {
      setReceiveDetails(
        receivingData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [receivingData, refetchReceivingData]);

  // console.log('rData', rData)
  const [open, setOpen] = React.useState(false);

  const [iss, setIss] = React.useState(false);
  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log('iss', iss);
  const receivingColumns = [
    { field: 'id', headerName: 'Sr #' },
    { field: 'collectionName', headerName: 'Collection Name' },
    { field: 'poName', headerName: 'PO' },
    // {
    //   field: 'ogpNumber',
    //   headerName: 'OGP Number',
    //   renderCell: (params) => {
    //     <span style={{ fontWeight: 'bolder' }}>{params.value}</span>;
    //   }
    // },
    { field: 'igpNumber', headerName: 'IGP Number' },
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
      }
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
      }
    },

    {
      field: 'receivedQty',
      headerName: 'Received',
      valueGetter: (params) => {
        if (params) {
          return Number(params.toFixed(2)).toLocaleString();
        } else {
          return '0';
        }
      }
    },
    { field: 'processTypename', headerName: 'Process Type' },
    // {
    //   field: 'statusName',
    //   headerName: 'Status',
    //   renderCell: (params) => {
    //     const chipColor = 'primary.dark';
    //     if (params.value === null) {
    //       return;
    //     } else {
    //       return (
    //         <Chip
    //           label={params.value}
    //           sx={{
    //             backgroundColor:
    //               chipColor === 'primary' || chipColor === 'default'
    //                 ? undefined
    //                 : chipColor,
    //             color:
    //               chipColor === 'primary' || chipColor === 'default'
    //                 ? undefined
    //                 : 'white'
    //           }}
    //           color={
    //             chipColor === 'primary'
    //               ? 'primary'
    //               : chipColor === 'default'
    //                 ? 'default'
    //                 : undefined
    //           }
    //         />
    //       );
    //     }
    //   }
    // },
    {
      field: 'statusName',
      headerName: 'Status',
      renderCell: (params) => {
        return <StatusChip label={params.value} status={params.value} />;
      }
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small" sx={{ mt: 1 }}>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.status === 4}
            >
              Inspection
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              View
            </Button> */}
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
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        // avatar={
        // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
        // }
        title="Completed Inspections"
        titleTypographyProps={{ style: { color: 'white' } }}
      ></CardHeader>
      <Grid
        container
        spacing={1}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        {/* <Grid item xs={12}>
          <Typography variant="h3">Completed Inspections</Typography>
        </Grid> */}
        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={receiveDetails}
            iColumns={receivingColumns}
            // height
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
                paddingY: '4px',
                mb: 2.5
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
                {'Inspection'}
              </Typography>
              <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
              <SSRSReport
                rId={17}
                inspection={{ ParamInspectionId: iss.inspectionId }}
              />
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InspectionView;
