import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import StatusChip from '../../../../components/StatusChip';
import CloseIcon from '@mui/icons-material/Close';
import { useGetIssuanceOGPByIdQuery } from 'api/store/Apis/productionApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
// import StatusChip from 'components/StatusChip';
import SSRSReport from '../../../../views/DetailedReports/Reports';

const OGPView = ({ po, handleClose, refetchIssuanceData, issId }) => {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    poId: po || 0,
    issuanceId: issId || ''
    // processTypeId: iss?.processTypeId || 0,
    // dispatchedQuantity: '',
    // dispatchFrom: '',
    // destination: '',
    // isRejectedOGP: 'N',
    // remarks: '',
    // createdBy: user.empId
  });
  const { enqueueSnackbar } = useSnackbar();
  const [issuanceDetails, setIssuanceDetails] = useState([]);
  // const [destinantionsList, setDestinantionsList] = useState([]);
  // const [dispatchFromList, setDispatchFromList] = useState([]);
  const { data: issuanceDetailsData, refetch: refetchIssuanceDetailsData } =
    useGetIssuanceOGPByIdQuery(
      { poId: formData?.poId, issuanceId: formData?.issuanceId },
      {
        skip: !formData?.poId || !formData?.issuanceId
      }
    );
  // const { data: lookupData, refetch: refetchLookupData } =
  //   useGetLookUpListQuery();

  useEffect(() => {
    if (issuanceDetailsData?.result === null) {
      setIssuanceDetails([]);
      return;
    }
    if (issuanceDetailsData) {
      setIssuanceDetails(
        issuanceDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [issuanceDetailsData, refetchIssuanceDetailsData]);
  // useEffect(() => {
  //   if (lookupData) {
  //     setDestinantionsList(
  //       lookupData.result[0].destination.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //     setDispatchFromList(
  //       lookupData.result[0].dispatchFrom.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [lookupData, refetchIssuanceDetailsData]);

  // console.log('iss', iss);
  console.log('formData', formData);
  // console.log('destinantionsList', destinantionsList);
  // console.log('dispatchFromList', dispatchFromList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [iss, setIss] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setIss(data);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'ogpNumber',
      headerName: 'OGP'
      // flex: 1
    },
    {
      field: 'issuanceId',
      headerName: 'Issuance'
      // flex: 1
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'isRejectedOGP',
      headerName: 'IsRejected'
    },
    {
      field: 'createdByName',
      headerName: 'Created By'
    },
    {
      field: 'dispatchedQuantity',
      headerName: 'Dispatch',
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
      field: 'issuanceDate',
      headerName: 'Issued On',
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
    // {
    //   field: 'fabricCount',
    //   headerName: 'Fabrics'
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <ButtonGroup variant="text" size="small" sx={{ marginTop: 1 }}>
            {/* <Button
            size="small"
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            Generate OGP
          </Button> */}
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              OGP
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];
  const handleOgp = async () => {
    try {
      const response = await axios.post(
        `http://100.42.177.77:81/api/Issuance/GenerateOGP`,
        formData
      );
      refetchIssuanceData();
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
      }
      // refetchAssignedTermsData();
      console.log('Save response:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('FAILED: Unable to start Process', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  return (
    <div>
      <Grid
        container
        spacing={1}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        {/* <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // disabled
            // select
            label="Issuance Id"
            name="issuanceId"
            value={formData.issuanceId}
            onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid> */}
        {/* <Grid item xs={2} sx={{ mt: 0.5 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleOgp}
            // disabled={iss.status === 9}
          >
            Generate OGP
          </Button>
        </Grid> */}
        <Grid item xs={12} textAlign="">
          <Typography
            variant="subtitle2"
            sx={{ display: 'block', fontWeight: 'bold', fontSize: 15 }}
          >
            Issuance ID : {issuanceDetails[0]?.issuanceId || 0} | Issuance
            Quantity :{' '}
            {issuanceDetails[0]?.issuanceQuantity.toLocaleString() || 0} Meters
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        // spacing={2}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={issuanceDetails}
            iColumns={columns}
            hideAction
          />
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
                rId={iss.isRejectedOGP === 'Y' ? 19 : 13}
                ogpView={{
                  paramIssuanceId: iss.issuanceId,
                  ogpNumber: iss.ogpNumber
                }}
                paramRejectionId={iss.rejectionId}
                // paramIssuanceId={iss.issuanceId}
                // ogpNumber={iss.ogpNumber}
              />
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
};

export default OGPView;
