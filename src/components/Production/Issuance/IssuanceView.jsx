import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  ButtonGroup,
  Dialog,
  Typography,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import MainCard from 'ui-component/cards/MainCard';
import StatusChip from '../../../components/StatusChip';
import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../assets/scss/style.scss';

import {
  useGetSubMenuListQuery,
  useGetMainMenuListQuery
} from 'api/store/Apis/userManagementApi';
import {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery
} from 'api/store/Apis/termsAndConditionsApi';
import {
  useGetLookUpListQuery,
  useGetStatusLookUpQuery
} from 'api/store/Apis/lookupApi';
import {
  useGetProductionProcessListQuery,
  useGetProductionProcessByProductionIdQuery,
  useGetProductionFabricDetailListQuery
} from 'api/store/Apis/productionApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const IssuanceView = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [initialFormData, setInitialFormData] = useState({});

  const [formData, setFormData] = useState({
    productionId: 0,
    processType: '',
    status: initialFormData?.statusId,
    collectionName: initialFormData?.collectionName || 0,
    processTypeName: initialFormData?.processTypeName || '',
    startDate:
      new Date(initialFormData?.startDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      }) || null,
    statusName: initialFormData?.statusName || '',
    productionHeaderId: initialFormData?.productionHeaderId || ''
    // appId: user.appId,
    // createdOn: new Date().toISOString(),
    // createdBy: user.empId,
    // lastUpdatedOn: new Date().toISOString(),
    // LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      ...formData,
      collectionName: initialFormData?.collectionName || 0,
      processTypeName: initialFormData?.processTypeName || '',
      startDate:
        new Date(initialFormData?.startDate).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        }) || null,
      statusName: initialFormData?.statusName || '',
      productionHeaderId: initialFormData?.productionHeaderId || ''
    });
  }, [initialFormData, setInitialFormData]);
  // const options = [
  //   {
  //     value: 'Yes',
  //     label: 'Yes'
  //   },
  //   {
  //     value: 'No',
  //     label: 'No'
  //   }
  // ];
  // console.log('initialData', initialData);

  const [initialRows, setInitialRows] = useState([]);
  // const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  // const handleAccordionToggle = (event, isExpanded) => {
  //   setAccordionExpanded(!accordionExpanded);
  // };
  const { data: productionProcessData, refetch: refetchProductionProcessData } =
    useGetProductionProcessByProductionIdQuery(
      { productionId: formData.productionId, status: formData.status },
      {
        skip: !formData.productionId || !formData.status
        // skip: !formData.status
      }
    );
  // const { data: categoriesData, refetch: refetchCategoriesdata } =
  //   useGetCategoriesListQuery();
  const { data: lookUpData } = useGetLookUpListQuery();
  const { data: lookUpStatusData } = useGetStatusLookUpQuery();
  const { data: fabricDetailData, refetch: refetchFabricDetailData } =
    useGetProductionFabricDetailListQuery(
      {
        productionHeaderId: formData.productionHeaderId,
        status: formData.status
      },
      {
        skip: !formData.productionHeaderId || !formData.status // Skip the query if no collection is selected
      }
    );
  const { data: productionData, refetch: refetchProductionData } =
    useGetProductionProcessListQuery();

  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  // const [categories, setCategories] = useState([]);
  const [viewRows, setViewRows] = useState([]);
  const [processesList, setProcessesList] = useState([]);
  const [productionList, setProductionList] = useState([]);

  console.log('processesList', processesList);
  // useEffect(() => {
  //   if (lookUpStatusData) {
  //     setProcessesList(lookUpStatusData.result);
  //   }
  // }, [lookUpStatusData]);
  useEffect(() => {
    if (lookUpStatusData) {
      const filteredProcesses = lookUpStatusData.result.filter(
        (process) => process.statusId === 2
      );
      setProcessesList(filteredProcesses);
    }
  }, [lookUpStatusData]);

  useEffect(() => {
    if (fabricDetailData) {
      setViewRows(
        fabricDetailData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [fabricDetailData, refetchFabricDetailData]);
  // useEffect(() => {
  //   if (productionData) {
  //     setProductionList(
  //       productionData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [productionData, refetchProductionData]);
  useEffect(() => {
    if (productionData) {
      // Create a Set to track seen collection names
      const seenCollectionNames = new Set();

      // Filter productionData.result to remove duplicates
      const uniqueProductionList = productionData.result
        .filter((row) => {
          if (seenCollectionNames.has(row.collectionName)) {
            return false;
          }
          seenCollectionNames.add(row.collectionName);
          return true;
        })
        .map((row, index) => ({
          id: index + 1,
          ...row
        }));

      setProductionList(uniqueProductionList);
    }
  }, [productionData, refetchProductionData]);

  useEffect(() => {
    if (productionProcessData) {
      setInitialRows(
        productionProcessData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [productionProcessData, refetchProductionProcessData]);
  // useEffect(() => {
  //   if (categoriesData) {
  //     setCategories(
  //       categoriesData.result.map((row, index) => ({
  //         id: index,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [categoriesData, refetchCategoriesdata]);

  console.log('initialRows', initialRows);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log('formData', formData);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (data) => {
    setInitialFormData(data);
    setOpen(true);
  };
  const handleClose = () => {
    // setShowUpperDiv(true);
    setOpen(false);
    setInitialFormData({});
    // refetchDyeingPrintingData();

    // setDeleteId(null);
  };
  const handleIssuance = () => {
    console.log('handleIssuance: route to dyeingIssuance');
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'collectionName',
      headerName: 'Production Batch'
    },
    {
      field: 'processTypeName',
      headerName: 'Process Type'
    },
    {
      field: 'orderNumber',
      headerName: 'Order Number'
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    // {
    //   field: 'completedDate',
    //   headerName: 'Completed Date'
    // },
    {
      field: 'statusName',
      headerName: 'Status',
      renderCell: (params) => {
        return <StatusChip label={params.row.statusName} status="In Process" />;
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => handleClickOpen(params.row)}>View</Button>
          {/* <Button onClick={handleIssuance}>Issuance</Button> */}
        </ButtonGroup>
      ),
      sortable: false,
      filterable: false
    }
  ];
  const viewColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'assignQty',
      headerName: 'PX Assigned Qty',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    }
    // {
    //   field: 'rate',
    //   headerName: 'Rate'
    // },
    // {
    //   field: 'tax',
    //   headerName: 'Tax'
    // },
    // {
    //   field: 'totalBeforeTax',
    //   headerName: 'Total Before Tax'
    // },
    // {
    //   field: 'totalAfterTax',
    //   headerName: 'Total After Tax'
    // }
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="View Production Process "
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
              {productionList.map((option) => (
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
              label="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {processesList.map((option) => (
                <MenuItem key={option.statusId} value={option.statusId}>
                  {option.statusDesc}
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
                  {'Issuance View'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <DyeingPrintingAssignVendor
                  initialFormData={initialFormData}
                  setInitialFormData={setInitialFormData}
                  // refetchDyeingPrintingData={refetchDyeingPrintingData}
                  handleClickOpen={handleClickOpen}
                  // showUpperDiv={showUpperDiv}
                /> */}
                <Grid
                  container
                  spacing={1}
                  width="Inherit"
                  sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Issuance"
                      fullWidth
                      size="small"
                      name="collectionName"
                      onChange={handleChange}
                      value={formData.collectionName}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="ProcessType"
                      fullWidth
                      size="small"
                      name="processTypeName"
                      onChange={handleChange}
                      value={formData.processTypeName}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      size="small"
                      // type="date"
                      label="Start Date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      fullWidth
                      disabled
                      // error={!!formErrors.launchDate}
                      // helperText={formErrors.launchDate}
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          // set the color of the label when not shrinked
                          color: 'black'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Status"
                      fullWidth
                      size="small"
                      name="statusName"
                      onChange={handleChange}
                      value={formData.statusName}
                      required
                      disabled
                      // error={!!formErrors.collectionName}
                      // helperText={formErrors.collectionName}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={viewRows}
                      iColumns={viewColumns}
                      hideAction
                    />
                  </Grid>
                </Grid>{' '}
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
    </Box>
  );
};

export default IssuanceView;
