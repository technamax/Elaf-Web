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
  IconButton,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import '../../../../assets/scss/style.scss';
// import ReceivingDetails from './ReceivingDetails';
import {
  useGetDyeingPoHeaderListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetIssuanceListQuery,
  useGetReceivingHeaderQuery,
  useGetInspectionForGRNHeaderQuery,
  useGetPOSummaryByProcessTypeIdQuery,
  usePOShortfallDetailsQuery
} from 'api/store/Apis/productionApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
// import SSRSReport from '../../../../../views/DetailedReports/Reports';
import SSRSReport from '../../../../views/DetailedReports/Reports';
// import ReceiveGRN from './ReceiveGRN';
import StatusChip from '../../../StatusChip';
//////
import * as React from 'react';
import { useUser } from 'context/User';
import POClose from './POClose';

const POSummary = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [formData, setFormData] = useState({
    issuanceId: '',
    poId: '',
    processTypeId: '',
    ogpNumber: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const [initialRows, setInitialRows] = useState([]);
  const [polist, setPolist] = useState([]);
  const [shortfall, setShortfall] = useState([]);
  const [iss, setIss] = React.useState(false);

  // const { data, error, isLoading, refetch } = useGetInspectionForGRNHeaderQuery(
  //   formData.poId,
  //   {
  //     skip: !formData.poId // Skip the query if no collection is selected
  //   }
  // );
  const { data: lookUpData, refetch: refetchlookUpData } =
    useGetLookUpListQuery();

  const { data: poData, refetch: refetchPoData } =
    useGetPOSummaryByProcessTypeIdQuery(formData.processTypeId, {
      skip: !formData.processTypeId
    });
  const { data: shortfallData, refetch: refetchShortfallData } =
    usePOShortfallDetailsQuery(iss.poId, {
      skip: !iss?.poId
    });

  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (lookUpData) {
      setProductions(
        lookUpData.result[0].productionProcessList.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [lookUpData]);

  useEffect(() => {
    if (shortfallData) {
      setShortfall(
        shortfallData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [shortfallData, refetchShortfallData]);
  useEffect(() => {
    if (poData) {
      setInitialRows(
        poData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poData, refetchPoData]);

  console.log('polist', polist);
  console.log('iss', iss);
  console.log('shortfall', shortfall);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setIss(data);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleViews = async (data) => {
    // setIssId(data.issuanceId);
    setIss(data);
  };
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = async (data) => {
    setIss(data);
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'poIdName',
      headerName: 'PO#'
    },
    {
      field: 'collectionName',
      headerName: 'Production'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'issuanceDate',
      headerName: 'PO Date',
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
      field: 'expectedReturnDate',
      headerName: 'Expected Return',
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
      field: 'processTypeName',
      headerName: 'Process'
    },
    // {
    //   field: 'expectedReturnDate',
    //   headerName: 'Expected Return Date',
    //   valueGetter: (params) => {
    //     const date = new Date(params);
    //     return date.toLocaleDateString('en-GB', {
    //       day: 'numeric',
    //       month: 'short',
    //       year: '2-digit'
    //     });
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
              disabled={params.row.status === 3}
            >
              Receive
            </Button> */}
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              IGP
            </Button> */}
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.status === 3}
            >
              PO Close
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen3(params.row)}
            >
              PO Report
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
          title="PO Summary"
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
              fullWidth
              select
              label="Process Type"
              name="processTypeId"
              value={formData.processTypeId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* 
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="PO#"
              name="poId"
              value={formData.poId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {polist.map((option) => (
                <MenuItem key={option.poId} value={option.poId}>
                  {option.poIdName}
                </MenuItem>
              ))}
            </TextField>
          </Grid> */}
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              // onRowDoubleClick={(params) => setIssId(params.row.issuanceId)}
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
                  {'PO Close'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <POClose
                  rData={iss}
                  handleClose={handleClose}
                  refetch={refetchPoData}
                  shortage={shortfall}
                  // refetchIssuanceData={refetchIssuanceData}
                />
              </DialogContent>
            </Dialog>
            <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="xl">
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
                  {'Create OGP'}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <SSRSReport rId={14} OGPNumber={iss.igpNumber} />
              </DialogContent>
            </Dialog>
            <Dialog open={open3} onClose={handleClose3} fullWidth maxWidth="xl">
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
                  {'PO Report'}
                </Typography>
                <IconButton onClick={handleClose3} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <SSRSReport rId={21} POSummary={{ dsPoList: iss.poId }} />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default POSummary;
