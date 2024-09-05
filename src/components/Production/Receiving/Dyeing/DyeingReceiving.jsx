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

import '../../../../assets/scss/style.scss';

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
    // categoryId: '',
    // termCondDesc: '',
    // enabled: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  const options = [
    {
      value: 'Yes',
      label: 'Yes'
    },
    {
      value: 'No',
      label: 'No'
    }
  ];
  // console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      issuanceId: initialData?.issuanceId || '',
      // categoryId: initialData?.categoryId || '',
      // termCondDesc: initialData?.termCondDesc || '',
      // enabled: initialData?.enabled || '',

      appId: initialData?.appId || user.appId,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [initialRows, setInitialRows] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion

  // const { data: categoriesData, refetch: refetchCategoriesdata } =
  //   useGetCategoriesListQuery();
  // const { data: termsConditionsData, refetch: refetchTermsConditionsData } =
  //   useGetTermsConditionsListQuery(formData.categoryId, {
  //     skip: !formData.categoryId // Skip the query if no collection is selected
  //   });
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   if (termsConditionsData) {
  //     setInitialRows(
  //       termsConditionsData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [termsConditionsData, refetchTermsConditionsData]);
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

  const handleSearch = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.get(
        `http://100.42.177.77:83/api/Receiving/GetIssuanceByIssuanceIdAndStatus?issuanceId=${formData.issuanceId}&status=9`
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
  console.log('formData', formData);

  const [open, setOpen] = React.useState(false);
  const [iss, setIss] = React.useState(false);

  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'issuanceId',
      headerName: 'issuance#'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Total'
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
      headerName: 'Expected Return Date',
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
      field: 'fabricCount',
      headerName: 'Fabrics'
    },
    {
      field: 'statusName',
      headerName: 'Status'
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
              View Details
            </Button>
            {/* <Button
              size="small"
              color="primary"
              onClick={() => handlePrintOgp(params.row)}
            >
              Print OGP
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
          title="Receiving"
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
              label="Enter Issuance ID"
              type="number"
              fullWidth
              size="small"
              name="issuanceId"
              onChange={handleChange}
              value={formData.issuanceId}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Enabled"
              name="enabled"
              value={formData.enabled}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid> */}

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
                  {'View Details'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <DyeingIssuanceView
                  iss={iss}
                  handleClose={handleClose}
                  refetchIssuanceData={refetchIssuanceData}
                /> */}
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default DyeingReceiving;
