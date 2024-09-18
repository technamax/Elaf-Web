import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Button, MenuItem } from '@mui/material';
import {
  useGetIssuanceDetailByPoIdQuery,
  useGetInspectionForGRNDetailbyInspectionIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetLookUpListQuery,
  useGetDriverInfoQuery,
  useGetTruckInfoQuery
} from 'api/store/Apis/lookupApi';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';

const ReceiveGRN = ({ iss, handleClose, refetchData }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    poId: iss.poId,
    issuanceId: iss.issuanceId,
    processTypeId: iss.processTypeId,
    dispatchedQuantity: '',
    dispatchFrom: '',
    destination: '',
    isRejectedOGP: 'N',
    remarks: '',
    truckId: '',
    driverId: '',
    createdBy: user.empId
  });
  const { enqueueSnackbar } = useSnackbar();
  const [GRNList, setGRNList] = useState([]);
  const [destinantionsList, setDestinantionsList] = useState([]);
  const [dispatchFromList, setDispatchFromList] = useState([]);
  const [driversList, setDriversList] = useState([]);
  const [trucksList, setTrucksList] = useState([]);
  const { data: GRNDetaiData, refetch: refetchGRNDetaiData } =
    useGetInspectionForGRNDetailbyInspectionIdQuery(iss.inspectionId, {
      skip: !iss.inspectionId
    });
  const { data: lookupData, refetch: refetchLookupData } =
    useGetLookUpListQuery();
  const { data: driversData, refetch: refetchDriversData } =
    useGetDriverInfoQuery();
  const { data: trucksData, refetch: refetchTrucksData } =
    useGetTruckInfoQuery();

  useEffect(() => {
    if (GRNDetaiData?.result === null) {
      setGRNList([]);
      return;
    }
    if (GRNDetaiData) {
      setGRNList(
        GRNDetaiData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [GRNDetaiData, refetchGRNDetaiData]);
  useEffect(() => {
    if (driversData) {
      setDriversList(
        driversData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [driversData, refetchDriversData]);
  useEffect(() => {
    if (trucksData) {
      setTrucksList(
        trucksData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [trucksData, refetchTrucksData]);
  useEffect(() => {
    if (lookupData) {
      setDestinantionsList(
        lookupData.result[0].destination.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      setDispatchFromList(
        lookupData.result[0].dispatchFrom.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [lookupData]);

  console.log('iss', iss);
  console.log('formData', formData);
  console.log('GRNList', GRNList);
  console.log('dispatchFromList', dispatchFromList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const calRows = GRNList.map((row) => ({
    ...row,
    grnId: 0,
    grnItemId: 0,
    total: row.gradeAQty * row.rate,
    bGradetotal: row.gradeBQty * row.rate * row.bGradeRate
  }));
  console.log('calRows', calRows);
  const columns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },

    // {
    //   field: 'baseColor',
    //   headerName: 'Base Color'
    // },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'gradeAQty',
      headerName: 'Grade A'
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'total',
      headerName: 'Total'
    },
    {
      field: 'gradeBQty',
      headerName: 'Grade B'
    },
    {
      field: 'bGradeRate',
      headerName: 'BGrade Rate',
      valueGetter: (params, row) => {
        return params * row.rate;
      }
    },
    {
      field: 'bGradetotal',
      headerName: 'BGradeTotal'
    },
    {
      field: 'gradeCPQty',
      headerName: 'GradeCP'
    }
  ];
  const handleSave = async () => {
    try {
      const response = await axios.post(
        `http://100.42.177.77:83/api/Issuance/GenerateOGP`,
        formData
      );
      refetchData();
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
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            label="Production"
            name="productionId"
            value={iss.collectionName}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            // select
            label="PO"
            name="poName"
            value={iss.poName}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          >
            {/* {vendorsList.map((option) => (
                <MenuItem key={option.vendorId} value={option.vendorId}>
                  {option.vendorName}
                </MenuItem>
              ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            label="Issuance"
            name="issuanceId"
            value={iss.issuanceId}
            size="small"
          ></TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            // select
            label="IGP"
            name="igpNumber"
            value={iss.igpNumber}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={1.5}>
          <TextField
            fullWidth
            disabled
            // select
            label="Proces Type"
            name="processTypeName"
            value={iss.processTypeName}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            disabled
            // select
            label="Vendor"
            name="vendorName"
            value={iss.vendorName}
            // onChange={handleChange}
            size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
      >
        {/* <Grid item xs={12}>
          <Typography variant="h2">Details</Typography>
        </Grid> */}

        <Grid item xs={12}>
          <ReuseableDataGrid
            initialRows={calRows}
            iColumns={columns}
            hideAction
          />
        </Grid>
        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleSave}
            disabled={iss.status === 9}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReceiveGRN;
