import { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import {} from '@mui/material';
import '../../assets/scss/style.scss';
import DyeingReceiving from 'components/Production/Receiving/Dyeing/DyeingReceiving';
// import EmbroideryReceiving from 'components/Production/Receiving/Embroidery/EmbroideryReceiving';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {
  useGetInspectionDetailsQuery,
  useGetDyeingPoListQuery,
  useGetDyeingPoHeaderByProductionIdQuery,
  useGetProductionBatchForProcessingQuery,
  useGetReceivingHeaderQuery
} from 'api/store/Apis/productionApi';
// import { useUser } from 'context/User';
import DyeingInspection from '../../components/Production/Inspection/Dyeing/DyeingInspection';
import StatusChip from '../../components/StatusChip';
import {
  Grid,
  Chip,
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
import InspectionView from 'components/Production/Inspection/Dyeing/InspectionView';

import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';

const Inspection = () => {
  const location = useLocation();
  const rowData = location.state?.data;
  const tab = location.state?.tab?.toString(); // Convert tab to string

  console.log('rowData', rowData);
  console.log('tab', tab);

  const [value, setValue] = useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    console.log('value', value);
  };

  useEffect(() => {
    if (tab) {
      setValue(tab);
    }
  }, [tab]);
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    issuanceId: '',
    poId: '',
    productionId: '',
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  const [polist, setPolist] = useState([]);
  // const { data, error, isLoading, refetch } = useGetDyeingPoListQuery();
  const { data, error, isLoading, refetch } =
    useGetDyeingPoHeaderByProductionIdQuery(formData.productionId, {
      skip: !formData.productionId // Skip the query if no collection is selected
    });
  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
  const { data: receivingData, refetch: refetchReceivingData } =
    useGetReceivingHeaderQuery(
      { poId: formData.poId, status: 8, processTypename: 'Dyeing' },
      {
        skip: !formData.poId
      }
    );
  const [initialRows, setInitialRows] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);
  console.log('initialRows', initialRows);
  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (receivingData) {
      setInitialRows(
        receivingData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [receivingData, refetchReceivingData]);
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

  const [open2, setOpen2] = React.useState(false);
  const [rData, setRData] = useState({});
  const [inpectionDetails, setInpectionDetails] = useState({});
  const {
    data: insepectionDetailsData,
    refetch: refetchInspectionDetailsData
  } = useGetInspectionDetailsQuery(rData.receivingId, {
    skip: !rData.receivingId
  });
  useEffect(() => {
    if (insepectionDetailsData?.result === null) {
      setInpectionDetails([]);
      return;
    }
    if (insepectionDetailsData) {
      setInpectionDetails(
        insepectionDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [insepectionDetailsData, refetchInspectionDetailsData]);

  const handleClickOpen = async (data) => {
    setRData(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setRData(data);
    refetchInspectionDetailsData();
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  const columns = [
    { field: 'id', headerName: 'Sr #' },
    { field: 'collectionName', headerName: 'Collection Name' },
    { field: 'poName', headerName: 'PO' },
    // {
    //   field: 'ogpNumber',
    //   headerName: 'OGP Number'
    //   // renderCell: (params) => {
    //   //   <span style={{ fontWeight: 'bolder' }}>{params.value}</span>;
    //   // }
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
        return <StatusChip label={params.row.receivedQty} status="Received" />;
      }
    },
    { field: 'processTypename', headerName: 'Process Type' },

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
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={params.row.status === 4}
            >
              Inspection
            </Button>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              View
            </Button> */}
          </ButtonGroup>
        </div>
      )
    }
  ];
  const inspectionColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Quantity Issued',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'receivedQty',
      headerName: 'Received',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    // {
    //   field: 'expectedQty',
    //   headerName: 'Expected'
    // },
    {
      field: 'gradeAQty',
      headerName: 'Grade A',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'gradeBQty',
      headerName: 'Grade B',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'gradeCPQty',
      headerName: 'Cut Pc',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'others1Qty',
      headerName: 'Others',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'shortStock',
      headerName: 'Short Stock',
      valueGetter: (params) => {
        if (params) {
          return params.toLocaleString();
        } else {
          return '0';
        }
      }
    },
    {
      field: 'remarks',
      headerName: 'Remarks'
    },
    {
      field: 'statusName',
      headerName: 'Status'
    }
  ];

  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        // backgroundColor: '#eef2f6',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      }}
    >
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChangeTabs}>
              <Tab
                icon={<CategoryOutlinedIcon />}
                label="Dyeing Inspection"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Embroidery Inspection"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Schiffili Inspection"
                value="3"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Additional Process Inspection"
                value="4"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<AssignmentOutlinedIcon />}
                label="Additional Services Inspection"
                value="5"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <Card variant="outlined">
                <CardHeader
                  className="css-4rfrnx-MuiCardHeader-root"
                  title="Pending Inspections"
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
                        <MenuItem
                          key={option.productionId}
                          value={option.productionId}
                        >
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
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={initialRows}
                      iColumns={columns}
                      hideAction
                    />

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      fullWidth
                      maxWidth="xl"
                    >
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
                        <IconButton
                          onClick={handleClose}
                          sx={{ color: '#ffffff' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                        <DyeingInspection
                          rData={rData}
                          handleClose={handleClose}
                          refetch={refetchReceivingData}
                          // refetchIssuanceData={refetchIssuanceData}
                        />
                      </DialogContent>
                    </Dialog>
                    <Dialog
                      open={open2}
                      onClose={handleClose2}
                      fullWidth
                      maxWidth="xl"
                    >
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
                          {'View Inspection'}
                        </Typography>
                        <IconButton
                          onClick={handleClose2}
                          sx={{ color: '#ffffff' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                        <ReuseableDataGrid
                          initialRows={inpectionDetails}
                          iColumns={inspectionColumns}
                          hideAction
                        />
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Grid>
              </Card>
              <InspectionView formData={formData} />
            </Box>
            {/* <DyeingReceiving rowData={rowData} /> */}
          </TabPanel>
          <TabPanel value="2">{/* <EmbroideryReceiving /> */}</TabPanel>
          <TabPanel value="3">{/* <AssignTermsAndConditions /> */}</TabPanel>
          <TabPanel value="4">{/* <AssignTermsAndConditions /> */}</TabPanel>
          <TabPanel value="5">{/* <AssignTermsAndConditions /> */}</TabPanel>
          <TabPanel value="6">{/* <AssignTermsAndConditions /> */}</TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default Inspection;
