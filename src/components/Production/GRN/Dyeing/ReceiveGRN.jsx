import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Chip,
  Stack,
  Paper,
  Card,
  Box
} from '@mui/material';
import {
  useGetIssuanceDetailByPoIdQuery,
  useGetInspectionForGRNDetailbyInspectionIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetLookUpListQuery,
  useGetDriverInfoQuery,
  useGetTruckInfoQuery
} from 'api/store/Apis/lookupApi';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import StatusChip from '../../../../components/StatusChip';

import { styled } from '@mui/material/styles';
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

const ReceiveGRN = ({ iss, handleClose, refetchData }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    grnHeader: {
      grnId: 0,
      grnNumber: '',
      ...iss,
      createdBy: user.empId,
      remarks: '',
      totalQuantity: iss.gradeAQty,
      totalValue: iss.gradeAQty * iss.rate
    }
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
    setFormData((prevState) => ({
      ...prevState,
      grnHeader: {
        ...prevState.grnHeader,
        [name]: value // Update the field in grnHeader
      }
    }));
  };

  const calRows = GRNList.map((row) => {
    const sumGradeBAndCP = row.sumGradeBAndCP ?? 0;
    const wastageOnSumGradeBAndCP = row.wastageOnSumGradeBAndCP ?? 0;
    const allowedBCP = sumGradeBAndCP * wastageOnSumGradeBAndCP;
    const wasted = sumGradeBAndCP - allowedBCP;
    const rejected =
      row.sumGradeBAndCP -
      row.sumGradeBAndCP * row.wastageOnSumGradeBAndCP +
      row.rejectedQty;

    return {
      ...row,
      grnId: 0,
      grnItemId: 0,
      total: (row.gradeAQty ?? 0) * (row.rate ?? 0),
      acceptedQty: row.gradeAQty,
      grnaQty: row.gradeAQty,
      grnbQty: row.gradeBQty,
      grncpQty: row.gradeCPQty,
      // rejectedQty: rejected,
      bGradetotal:
        (row.gradeBQty ?? 0) * (row.rate ?? 0) * (row.bGradeRate ?? 0),
      sumGradeBAndCP: sumGradeBAndCP,
      wastageOnSumGradeBAndCP: wastageOnSumGradeBAndCP,
      allowedBCP: allowedBCP,
      wasted: wasted
    };
  });

  console.log('calRows', calRows);

  useEffect(() => {
    setFormData({ ...formData, grnDetailsList: [...calRows] });
  }, [GRNList]);
  const gradeASum = calRows
    .reduce((sum, row) => sum + (row.gradeAQty ?? 0), 0)
    .toFixed(2);
  const overallTotal = calRows
    .reduce((sum, row) => sum + (row.total ?? 0), 0)
    .toFixed(2);
  const bGradeSum = calRows
    .reduce((sum, row) => sum + (row.gradeBQty ?? 0), 0)
    .toFixed(2);
  const cpGradeSum = calRows
    .reduce((sum, row) => sum + (row.gradeCPQty ?? 0), 0)
    .toFixed(2);
  // const rejectedSum = calRows
  //   .reduce((sum, row) => sum + (row.rejectedQty ?? 0), 0)
  //   .toFixed(2);
  const rejectedSum = calRows
    .reduce((sum, row) => sum + (row.rejectedQty ?? 0) + (row.wasted ?? 0), 0)
    .toFixed(2);

  const shortageSum = calRows
    .reduce((sum, row) => sum + (row.shortageQty ?? 0), 0)
    .toFixed(2);
  const bGradeTotal = calRows
    .reduce((sum, row) => sum + (row.bGradetotal ?? 0), 0)
    .toFixed(2);
  useEffect(() => {
    setFormData({
      ...formData,
      grnDetailsList: [...calRows],
      gradeASum: gradeASum,
      overallTotal: overallTotal,
      bGradeSum: bGradeSum,
      cpGradeSum: cpGradeSum,
      rejectedSum: rejectedSum,
      bGradeTotal: bGradeTotal,
      shortageSum: shortageSum
    });
  }, [GRNList, setGRNList]);
  console.log('formData', formData);
  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    setGRNList((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const updatedRow = {
            ...row,
            [field]: value
          };
          if (field === 'bGradeRate') {
            updatedRow.bGradetotal =
              updatedRow.gradeBQty * updatedRow.bGradeRate;
          }
          return updatedRow;
        }
        return row;
      })
    );
  };

  // React.useEffect(() => {
  //   setFormData({
  //     ...formData,
  //     productionDetails: initialRows
  //   });
  // }, [GRNList, setGRNList]);
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
      field: 'assignQuantity',
      headerName: 'PO Qty',
      renderCell: (params) => {
        return (
          params.row.assignQuantity *
          (1 - params.row.shrinkage / 100) *
          (1 - params.row.wastage / 100)
        ).toFixed(2);
      }
    },
    {
      field: 'gradeAQty',
      headerName: 'Grade A',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="darkgreen" />;
      }
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'total',
      headerName: 'Total',
      renderCell: (params) => {
        return params.row.total.toLocaleString();
      }
    },
    {
      field: 'gradeBQty',
      headerName: 'Grade B',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="green" />;
      }
    },
    {
      field: 'bGradeRate',
      headerName: 'BGrade Rate',
      valueGetter: (params, row) => {
        return params * row.rate;
      },
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          // value={params.row.bGradeRate || ''}
          defaultValue={params.row.rate * params.row.bGradeRate || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'bGradeRate',
              value: Number(event.target.value)
            })
          }
          type="number"
          // disabled={params.row.quantity === params.row.assignQuantity}
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'bGradetotal',
      headerName: 'BGradeTotal',
      renderCell: (params) => {
        return params.row.bGradetotal.toLocaleString();
      }
    },
    {
      field: 'gradeCPQty',
      headerName: 'GradeCP',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="lightgreen" />;
      }
    },
    {
      field: 'sumGradeBAndCP',
      headerName: 'Sum B+CP'
    },
    // {
    //   field: 'wastageOnSumGradeBAndCP',
    //   headerName: 'wastageOnSumGradeBAndCP'
    // },
    {
      field: 'allowedBCP',
      headerName: 'Allowed B+CP',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="pastelgreen" />;
      }
    },
    {
      field: 'wasted',
      headerName: 'Wasted',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="Amberyellow" />;
      }
    },

    {
      field: 'rejectedQty',
      headerName: 'Rejected',
      renderCell: (params) => {
        // const chipColor = 'error.dark';
        // if (params.value === 0) {
        //   return;
        // } else {
        return (
          // <Chip
          //   label={params.value}
          //   sx={{
          //     backgroundColor:
          //       chipColor === 'primary' || chipColor === 'default'
          //         ? undefined
          //         : chipColor,
          //     color:
          //       chipColor === 'primary' || chipColor === 'default'
          //         ? undefined
          //         : 'white'
          //   }}
          //   color={
          //     chipColor === 'primary'
          //       ? 'primary'
          //       : chipColor === 'default'
          //         ? 'default'
          //         : undefined
          //   }
          // />
          <Chip
            label={params.value.toLocaleString()}
            sx={{
              backgroundColor: '#FF0000', // Set to red
              color: '#FFFFFF' // White text for visibility
            }}
          />
        );
        // }
      }
    },
    {
      field: 'remarks',
      headerName: 'Remarks'
    },
    {
      field: 'shortageQty',
      headerName: 'Shortage'
    }
  ];
  console.log('grnlist', { grn: formData.grnDetailsList });
  console.log('updated rejectedQty', {
    ...formData,
    grnDetailsList: formData.grnDetailsList?.map((row) => ({
      ...row,
      rejectedQty:
        row.sumGradeBAndCP -
        row.sumGradeBAndCP * row.wastageOnSumGradeBAndCP +
        row.rejectedQty
    }))
  });
  const handleSave = async () => {
    try {
      const response = await axios.post(
        `http://100.42.177.77:83/api/GRN/SaveGRN`,
        {
          ...formData,
          grnDetailsList: formData.grnDetailsList.map((row) => ({
            ...row,
            rejectedQty:
              row.sumGradeBAndCP -
              row.sumGradeBAndCP * row.wastageOnSumGradeBAndCP +
              row.rejectedQty
          }))
        }
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
        <Grid item xs={12} md={3}>
          <TextField
            label="Remarks"
            fullWidth
            size="small"
            name="remarks"
            onChange={handleChange}
            value={formData.grnHeader.remarks}
            required
            // disabled={isEdit}
            // error={!!formErrors.collectionName}
            // helperText={formErrors.collectionName}
          />
        </Grid>
      </Grid>
      {/* // */}
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
        <Grid item xs={12} textAlign="right">
          <Button
            variant="contained"
            size="small"
            onClick={handleSave}
            disabled={iss.status === 9}
          >
            Save
          </Button>
        </Grid>
        {/* ////////////////////// */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            height: '100%', // Ensure it takes full height of the parent
            flexDirection: 'row', // Horizontal alignment
            marginTop: 2 // Add some space from the button above
          }}
        >
          <Paper
            elevation={12}
            sx={{
              width: '30%', // Set to a fixed percentage for consistent sizing
              height: 'auto', // Changed to auto for better flexibility
              padding: 2, // Set consistent padding
              bgcolor: '#ffffff' // Light background color
            }}
          >
            {/* Grid container for overall layout */}
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* OverAll Total */}
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  OverAll Total :
                  <Chip
                    label={Number(formData.overallTotal)?.toLocaleString()}
                    size="small"
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>

              {/* Grade B Total */}
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Grade B Total :
                  <Chip
                    size="small"
                    label={Number(formData.bGradeTotal)?.toLocaleString()}
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={12}
            sx={{
              width: '30%', // Set to a fixed percentage for consistent sizing
              height: 'auto', // Changed to auto for better flexibility
              padding: 2, // Set consistent padding
              bgcolor: '#ffffff' // Light background color
            }}
          >
            {/* Grid container for overall layout */}
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* Grade A Quantity */}
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Grade A Quantity :
                  <Chip
                    label={formData.gradeASum?.toLocaleString()}
                    size="small"
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>

              {/* Shortage Quantity */}
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Shortage Quantity :
                  <Chip
                    size="small"
                    label={Number(formData.shortageSum)?.toLocaleString()}
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={12}
            sx={{
              width: '30%', // Set to a fixed percentage for consistent sizing
              height: 'auto', // Changed to auto for better flexibility
              padding: 2, // Set consistent padding
              bgcolor: '#ffffff' // Light background color
            }}
          >
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Grade B Quantity :
                  <Chip
                    label={formData.bGradeSum?.toLocaleString()}
                    size="small"
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>

              {/* Grade Cp Quantity */}
              <Grid item xs={12}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Grade Cp Quantity :
                  <Chip
                    size="small"
                    label={formData.cpGradeSum?.toLocaleString()}
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignItems: 'center', // Center items horizontally
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  Rejected Quantity :
                  <Chip
                    size="small"
                    label={formData.rejectedSum?.toLocaleString()}
                    sx={{
                      backgroundColor: '#0000FF',
                      color: '#FFFFFF',
                      fontSize: 12,
                      padding: '0 4px',
                      height: '24px',
                      marginTop: '4px'
                    }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
};

export default ReceiveGRN;
