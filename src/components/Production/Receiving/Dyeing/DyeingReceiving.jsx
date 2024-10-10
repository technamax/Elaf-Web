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
// import StatusChip from '../../../../components/StatusChip';
import '../../../../assets/scss/style.scss';
import ReceivingDetails from './ReceivingDetails';
import {
  useGetDyeingPoListQuery,
  useGetIssuanceListQuery,
  useViewReceivingsQuery,
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
import StatusChip from '../../../../components/StatusChip';
//////
import * as React from 'react';
import { useUser } from 'context/User';

const DyeingReceiving = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
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
  const [issId, setIssId] = useState(null);
  // const [issuanceList, setIssuanceList] = useState([]);
  const [receivingList, setReceivingList] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);

  // Hook to fetch the data, and it's controlled by triggerSearch state
  // const { data, error, isLoading, refetch } = useGetDyeingPoListQuery();
  const { data, error, isLoading, refetch } =
    useGetDyeingPoHeaderByProductionIdQuery(formData.productionId, {
      skip: !formData.productionId
    });
  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
  // const { data: issuanceData, refetch: refetchIssuanceData } =
  //   useGetIssuanceListQuery(formData.poId, {
  //     skip: !formData.poId // Skip the query if no collection is selected
  //   });
  const { data: receivingData, refetch: refetchReceivingData } =
    useViewReceivingsQuery(
      { issuanceId: issId, processTypename: 'Dyeing' },
      {
        skip: !issId // Skip the query if no collection is selected
      }
    );
  console.log('receivingData', receivingData);
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
      setPolist(
        data.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [data, refetch]);
  useEffect(() => {
    if (receivingData) {
      setReceivingList(
        receivingData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [receivingData, refetchReceivingData]);

  console.log('issId', issId);
  // useEffect(() => {
  //   if (issuanceData) {
  //     setIssuanceList(
  //       issuanceData.result.map((row, index) => ({
  //         id: index,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [issuanceData, refetchIssuanceData]);

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
  // const handleSearch = () => {
  //   if (formData.issuanceId) {
  //     // Set the state to trigger the query
  //     setTriggerSearch(true);
  //     console.log(`Triggering search for issuanceId: ${formData.issuanceId}`);
  //   }
  //   // if (data) {
  //   //   setInitialRows(
  //   //     data.result.map((row, index) => ({
  //   //       id: index + 1,
  //   //       ...row
  //   //     }))
  //   //   );
  //   // }
  // };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  // const handleSearch = async () => {
  //   console.log('formData', formData);
  //   try {
  //     // Make the API call
  //     const response = await axios.get(
  //       `http://100.42.177.77:81/api/Receiving/GetIssuanceByPoIdAndOGPNumber?poId=${formData.poId}&issuanceId=${formData.issuanceId}`
  //     );
  //     console.log('Save response:', response.data);

  //     if (!response.data.success) {
  //       enqueueSnackbar(`${response.data.message} !`, {
  //         variant: 'error',
  //         autoHideDuration: 5000
  //       });
  //       console.log('response.message', response.data.message);
  //     } else {
  //       enqueueSnackbar(`${response.data.message} !`, {
  //         variant: 'success',
  //         autoHideDuration: 5000
  //       });
  //       setInitialRows(
  //         response.data.result.map((row, index) => ({
  //           id: index + 1,
  //           ...row
  //         }))
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     enqueueSnackbar('FAILED: Unable to start Process', {
  //       variant: 'error',
  //       autoHideDuration: 5000
  //     });
  //   }
  // };
  const fetchData = async () => {
    try {
      // Make the API call
      const response = await axios.get(
        `http://100.42.177.77:81/api/Receiving/GetIssuanceByPoIdAndOGPNumber?poId=${formData.poId}`
      );
      console.log('Save response:', response.data);

      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'success',
          autoHideDuration: 5000
        });
        setInitialRows(
          response.data.result.map((row, index) => ({
            id: index + 1,
            ...row
          }))
        );
      }
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to start Process', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  useEffect(() => {
    fetchData(); // Call the async function inside the effect

    // Optional cleanup if necessary
    return () => {
      // No async logic here
    };
  }, [formData.poId]);

  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [iss, setIss] = React.useState(false);

  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setIss(data);
  };
  const handleClickOpen3 = async (data) => {
    setOpen3(true);
    setIss(data);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  const handleClose3 = () => {
    // setShowUpperDiv(true);
    setOpen3(false);
  };
  const handleViews = async (data) => {
    setIssId(data.issuanceId);
    refetchReceivingData();
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'issuanceId',
      headerName: 'Issuance#'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Total',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => {
        return (
          <Chip
            label={params.value.toLocaleString()}
            sx={{
              backgroundColor: 'primary.dark',
              color: 'white'
            }}
          />
        );
      }
    },
    {
      field: 'dispatchedQuantity',
      headerName: 'Dispatched',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.dispatchedQuantity.toLocaleString()}
            status="Issued"
          />
        );
      }
    },
    {
      field: 'receivedQty',
      headerName: 'Received',
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.receivedQty.toLocaleString()}
            status="Received"
          />
        );
      }
    },
    {
      field: 'issuanceDate',
      headerName: 'Issuance Date',
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
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small" sx={{ mt: 1 }}>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={
                params.row.status !== 9 ||
                params.row.dispatchedQuantity === params.row.receivedQty
              }
            >
              Generate IGP
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleViews(params.row)}
            >
              View Receivings
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              Receiving Report
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];
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
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.receivedQty.toLocaleString()}
            status="Received"
          />
        );
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
              onClick={() => handleClickOpen3(params.row)}
            >
              IGP
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
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Pending Receivables"
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
          {/* <Grid item xs={12}>
            <Typography variant="h3">Issuances</Typography>
          </Grid> */}
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              onRowDoubleClick={(params) => setIssId(params.row.issuanceId)}
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
                  {'View Receiving Details'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <ReceivingDetails
                  iss={iss}
                  handleClose={handleClose}
                  refetchIssuanceData={fetchData}
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
                <SSRSReport
                  rId={16}
                  receiving={{ paramIssuanceId: iss.issuanceId }}
                />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
      <Card variant="outlined" sx={{ marginTop: 2 }}>
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="View Receivings"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          {/* <Grid item xs={12}>
            <Typography variant="h3"></Typography>
          </Grid> */}
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={receivingList}
              iColumns={receivingColumns}
              hideAction
            />
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
                  {'Create OGP'}
                </Typography>
                <IconButton onClick={handleClose3} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <SSRSReport
                  rId={14}
                  igpReport={{ ParamIGPNumber: iss.igpNumber }}
                />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default DyeingReceiving;
