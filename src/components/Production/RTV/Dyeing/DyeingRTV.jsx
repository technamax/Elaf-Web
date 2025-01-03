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
import StatusChip from '../../../../components/StatusChip';
import '../../../../assets/scss/style.scss';
// import ReceivingDetails from './ReceivingDetails';
import {
  useGetDyeingPoListQuery,
  useGetIssuanceListQuery,
  useGetReceivingHeaderQuery,
  useGetRejectionByPoIdQuery,
  useGetDyeingPoHeaderListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetDyeingPoHeaderByProductionIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery
} from 'api/store/Apis/termsAndConditionsApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import SSRSReport from '../../../../views/DetailedReports/Reports';
// import RTVOgp from './RTVOgp';
import DyeingIssuanceView from 'components/Production/Issuance/Dyeing/DyeingIssuanceView';
import ViewRTV from './ViewRTV';
//////
import * as React from 'react';
import { useUser } from 'context/User';

const DyeingRTV = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [formData, setFormData] = useState({
    issuanceId: '',
    poId: '',
    productionId: '',
    ogpNumber: '',
    // termCondDesc: '',
    // enabled: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const [initialRows, setInitialRows] = useState([]);
  const [polist, setPolist] = useState([]);
  const [issId, setIssId] = useState([]);
  // const [issuanceList, setIssuanceList] = useState([]);
  // const [receivingList, setReceivingList] = useState([]);
  // const [triggerSearch, setTriggerSearch] = useState(false);

  // Hook to fetch the data, and it's controlled by triggerSearch state
  const { data, error, isLoading, refetch } = useGetRejectionByPoIdQuery(
    formData.poId,
    {
      skip: !formData.poId // Skip the query if no collection is selected
    }
  );
  const { data: poData, refetch: refetchPoData } =
    useGetDyeingPoHeaderListQuery(formData.productionId, {
      skip: !formData.productionId
    });
  // const { data: poData, refetch: refetchPoData } =
  //   useGetDyeingPoHeaderListQuery();
  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();

  // const { data: issuanceData, refetch: refetchIssuanceData } =
  //   useGetIssuanceListQuery(formData.poId, {
  //     skip: !formData.poId // Skip the query if no collection is selected
  //   });
  // const { data: receivingData, refetch: refetchReceivingData } =
  //   useGetReceivingHeaderQuery(
  //     { issuanceId: issId, processTypename: 'Dyeing' },
  //     {
  //       skip: !issId // Skip the query if no collection is selected
  //     }
  //   );
  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (productionBatchData) {
      setProductions(
        productionBatchData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [productionBatchData, refetchProductionBatchData]);

  useEffect(() => {
    if (data) {
      setInitialRows(
        data.result
          .filter(
            (row) =>
              row.rejectionStatus === 5 && row.isRejectedOgpExists === 'N'
          )
          .map((row, index) => ({
            id: index + 1,
            ...row
          }))
      );
    }
  }, [data, refetch]);
  useEffect(() => {
    if (poData) {
      setPolist(
        poData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poData, refetchPoData]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'poId') {
      const selectedPO = polist.find(
        (collection) => collection.poId === parseInt(value)
      );

      setFormData({
        ...formData,
        poId: value,
        issuanceId: selectedPO ? selectedPO.issuanceId : ''
        // ogpNumber: selectedPO ? selectedPO.ogpNumber : '',
        // issuanceName: selectedPO
        //   ? `ISS-${selectedPO.issuanceId}-${selectedPO.issuanceQuantity}`
        //   : ''
        // wastage: selectedPO ? selectedPO.wastage : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [iss, setIss] = React.useState(false);

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
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  const handleViews = async (data) => {
    setIssId(data.issuanceId);
  };
  const columns = [
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
      field: 'wastedQty',
      headerName: 'Wasted',
      renderCell: (params) => {
        return <StatusChip label={params.row.wastedQty} status="Rejected" />;
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
    },
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
              OGP
            </Button>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              IGP
            </Button> */}
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handleViews(params.row)}
            >
              POST
            </Button> */}
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
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Return To Vendor"
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
              label="Production"
              name="productionId"
              value={formData.productionId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.productionId} value={option.productionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
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
          </Grid>

          {/* <Grid item xs={12} md={3} sx={{ mt: 0.5 }}>
            <Button variant="contained" size="small" onClick={handleSearch}>
              Search
            </Button>
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
                  {'Rejection OGP'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <DyeingIssuanceView
                  iss={iss}
                  handleClose={handleClose}
                  refetchData={refetch}
                  isRejected
                  // refetchIssuanceData={refetchIssuanceData}
                />
              </DialogContent>
            </Dialog>
            {/* <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="xl">
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
                {/* <SSRSReport rId={14} OGPNumber={iss.igpNumber} /> */}
            {/* </DialogContent> */}
            {/* </Dialog> */}
          </Grid>
        </Grid>
      </Card>
      <ViewRTV formData={formData} />
    </Box>
  );
};

export default DyeingRTV;
