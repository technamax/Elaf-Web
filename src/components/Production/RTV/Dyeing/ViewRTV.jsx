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
  useGetRejectionByPoIdQuery
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

const ViewRTV = ({ formData }) => {
  // const [formData, setFormData] = useState({ inspectionId: 0, ...rData });
  const apiRef = useGridApiRef();

  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const { data, error, isLoading, refetch } = useGetRejectionByPoIdQuery(
    formData.poId,
    {
      skip: !formData.poId // Skip the query if no collection is selected
    }
  );

  useEffect(() => {
    if (data) {
      setInitialRows(
        data.result
          .filter((row) => row.isRejectedOgpExists === 'Y')
          .map((row, index) => ({
            id: index + 1,
            ...row
          }))
      );
    }
  }, [data, refetch]);

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
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'rtvNo',
      headerName: 'RTV#'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    // {
    //   field: 'receivedQty',
    //   headerName: 'Received',
    //   renderCell: (params) => {
    //     return <StatusChip label={params.row.receivedQty} status="Received" />;
    //   }
    // },
    {
      field: 'rejectedQty',
      headerName: 'Rejected',
      renderCell: (params) => {
        return <StatusChip label={params.row.rejectedQty} status="Rejected" />;
      }
    },
    {
      field: 'rejectionReason',
      headerName: 'Reason'
    },
    {
      field: 'rejectionDate',
      headerName: 'Rejected On',
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
      field: 'rejectionStatusName',
      headerName: 'Status',
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.rejectionStatusName}
            status="Completed"
          />
        );
      }
      // renderCell: (params) => {
      //   const chipColor = 'primary.dark';

      //   return (
      //     <Chip
      //       label={params.value}
      //       sx={{
      //         backgroundColor:
      //           chipColor === 'primary' || chipColor === 'default'
      //             ? undefined
      //             : chipColor,
      //         color:
      //           chipColor === 'primary' || chipColor === 'default'
      //             ? undefined
      //             : 'white'
      //       }}
      //       color={
      //         chipColor === 'primary'
      //           ? 'primary'
      //           : chipColor === 'default'
      //             ? 'default'
      //             : undefined
      //       }
      //     />
      //   );
      // }
    }
    // {
    //   field: 'Actions',
    //   headerName: 'Actions',
    //   renderCell: (params) => (
    //     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    //       <ButtonGroup variant="text" size="small" sx={{ mt: 1 }}>
    //         {/* <Button
    //           size="small"
    //           color="primary"
    //           onClick={() => handleClickOpen(params.row)}
    //         >
    //           RTV
    //         </Button> */}
    //         {/* <Button
    //           size="small"
    //           color="primary"
    //           onClick={() => handleClickOpen2(params.row)}
    //         >
    //           IGP
    //         </Button> */}
    //         <Button
    //           size="small"
    //           color="primary"
    //           onClick={() => handleViews(params.row)}
    //         >
    //           repo
    //         </Button>
    //       </ButtonGroup>
    //     </div>
    //   )
    // }
  ];

  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardHeader
        className="css-4rfrnx-MuiCardHeader-root"
        // avatar={
        // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
        // }
        title="View Completed RTV"
        titleTypographyProps={{ style: { color: 'white' } }}
      ></CardHeader>
      <Grid
        container
        spacing={1}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={initialRows}
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
              {/* <SSRSReport
                rId={17}
                inspection={{ ParamInspectionId: iss.inspectionId }}
              /> */}
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ViewRTV;
