import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Divider,
  MenuItem,
  Typography
} from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetDyeingPrintingDetailsByDpIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';

import axios from 'axios';

const DyeingPrintingAssignVendor = ({
  initialFormData,
  setAdditionalProcessData,
  refetchDyeingPrintingData,
  handleClickOpen,
  showUpperDiv,
  productionStatus
}) => {
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [formErrors, setFormErrors] = useState({});

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);

  const [formData, setFormData] = useState({
    dpIdDet: 0,
    dpId: initialFormData.dpId || 0,
    designId: initialFormData.designId || '',
    batchNo: initialFormData.batchNo || '',
    planningHeaderId: initialFormData.planningHeaderId || 0,
    fabricId: initialFormData.fabricId || '',
    fabricName: initialFormData.fabricName || '',
    colorId: initialFormData.colorId || '',
    colorName: initialFormData.colorName || '',
    uomId: initialFormData.uomId || '',
    uom: initialFormData.uom || '',
    poPcs: initialFormData.poPcs || '',
    vendorId: '', /////////////checkapi
    processType: initialFormData.processType || '',
    availableQty: initialFormData.availableQty || '',
    remainingQty: initialFormData.availableQty - Quantity || '',
    shrinkage: initialFormData.allowedWastage || '',
    wastage: initialFormData.allowedWastage || '',

    assignedQty: '',

    rate: '',
    unitRatePerPo: 0,
    totalExcGst: 0,
    gst: '',
    // GSTAmount: '',
    TotalIncludingGst: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      dpIdDet: initialData.dpIdDet || 0,
      dpId: initialData.dpId || 0,
      designId: initialData?.designId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      batchNo: initialData?.batchNo || '',
      // fabricId: initialData?.fabricId || '',
      // colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      // colorName: initialData?.colorName || '', //from dying screen coming from fabricAPi
      vendorId: initialData?.vendorId || '',
      // processType: initialData?.processType || '',
      // availableQty: initialData?.availableQty || '',
      shrinkage: initialData?.shrinkage || '',
      wastage: initialData?.wastage || '',
      outputQty: initialData?.outputQty || 0,
      remainingQty: prevFormData.remainingQty + initialData?.assignedQty || '',

      // uom: initialData?.uom || 0,
      // uomId: initialData?.uomId || '',
      // poPcs: initialData?.poPcs || 0,
      assignedQty: initialData?.assignedQty || '',

      rate: initialData?.rate || 0,
      unitRatePerPo: initialData?.unitRatePerPo || '',
      totalExcGst: initialData?.totalExcGst || '',
      gst: initialData?.gst || 0,
      TotalIncludingGst: initialData?.totalIncludingGst || '',
      // createdBy: initialData?.createdBy || 0,
      // baseColorName: initialData?.baseColorName || 0,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    }));
  }, [initialData]);
  useEffect(() => {
    setFormData({
      ...formData,
      remainingQty:
        initialFormData.availableQty - Quantity >= 0
          ? initialFormData.availableQty - Quantity
          : ''
    });
  }, [initialRows, initialFormData.availableQty, Quantity]);

  const { data: lookupData } = useGetLookUpListQuery();
  const { data: dyeingPrintingDetails, refetch: refetchDyeingPrintingDetails } =
    useGetDyeingPrintingDetailsByDpIdQuery(formData.dpId, {
      skip: !formData.dpId // Skip the query if no collection is selected
    });
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);
  useEffect(() => {
    if (dyeingPrintingDetails) {
      setInitialRows(
        dyeingPrintingDetails.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [dyeingPrintingDetails, refetchDyeingPrintingDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };

      if (name === 'assignedQty' || name === 'remainingQty') {
        const assignedQty = updatedFormData.assignedQty;
        const remainingQty = updatedFormData.remainingQty;

        if (assignedQty > remainingQty) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            assignedQty:
              'Assigned Quantity cannot be greater than Remaining Quantity'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            assignedQty: ''
          }));
        }
      }

      return updatedFormData;
    });
  };
  useEffect(() => {
    const calculateOutputQty = () => {
      const assignedQty = parseFloat(formData.assignedQty) || 0;
      const shrinkage = parseFloat(formData.shrinkage) || 0;
      const wastage = parseFloat(formData.wastage) || 0;
      const shrikageWastage = shrinkage + wastage;

      return ((assignedQty * 100) / (100 + shrikageWastage)).toFixed(2);
    };

    const calculateTotalExclGst = () => {
      const quantity = parseFloat(formData.assignedQty) || 0;
      const rate = parseFloat(formData.rate) || 0;
      return (quantity * rate).toFixed(2);
    };

    const calculateTotalWithGst = (totalExcGst, gst) => {
      return (totalExcGst * (1 + gst / 100)).toFixed(2);
    };

    const outputQty = calculateOutputQty();
    const totalExcGst = calculateTotalExclGst();
    const gst = parseFloat(formData.gst) || 0;
    const totalIncludingGst = calculateTotalWithGst(totalExcGst, gst);
    const poPcs = parseFloat(formData.poPcs) || 0;
    const unitRatePerPo = poPcs ? totalIncludingGst / poPcs : 0;

    setFormData((prevData) => ({
      ...prevData,
      outputQty: outputQty,
      totalExcGst: totalExcGst,
      TotalIncludingGst: totalIncludingGst,
      unitRatePerPo: unitRatePerPo.toFixed(2)
    }));
  }, [
    formData.availableQty,
    formData.assignedQty,
    formData.shrinkage,
    formData.wastage,
    formData.rate,
    formData.gst,
    formData.poPcs,
    formData.unitRatePerPo
  ]);
  console.log('formData', formData);
  const handleSave = async () => {
    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }
    console.log(formData);

    try {
      // Make the API call
      if (formData.assignedQty > formData.remainingQty) {
        enqueueSnackbar(
          `Assigned quantity can not be greater then Remaining Quantity !`,

          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        return;
      }
      const response = await axios.post(
        'http://100.42.177.77:83/api/DyeingPrinting/SaveDyeingPrintingDetails',
        formData
      );

      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        ...prevFormData,
        // remainingQty:
        //   prevFormData.remainingQty - prevFormData.assignedQty,
        dpIdDet: 0,
        vendorId: '', /////////////checkapi

        availableQty: initialFormData.availableQty || '',
        shrinkage: '',
        wastage: '',
        assignedQty: '',
        rate: '',
        unitRatePerPo: 0,
        totalExcGst: 0,
        gst: '',
        // GSTAmount: '',
        TotalIncludingGst: '',
        remainingQty: initialFormData.availableQty - Quantity || '',

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchDyeingPrintingDetails();
      refetchDyeingPrintingData();

      // handleClickOpen();

      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // editable: true,
      // flex: 1,
    },
    {
      field: 'vendorName',
      headerName: 'Vendor',
      flex: 2
    },

    // {
    //   field: 'processType',
    //   headerName: 'Process Type',
    //   flex: 1
    // },
    // {
    //   field: 'availableQty',
    //   headerName: 'Total Available Qty',
    //   flex: 1
    // },
    {
      field: 'assignedQty',
      headerName: 'Assigned Quantity',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'rate',
      headerName: 'Rate',
      flex: 1
    },
    {
      field: 'totalExcGst',
      headerName: 'Total Excl Gst.',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'gst',
      headerName: 'Gst.',
      flex: 1
    },
    {
      field: 'totalIncludingGst',
      headerName: 'TotalIncludingGst',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'outputQty',
      headerName: 'Output Qty',
      flex: 1
    }
    // {
    //   field: 'unitRatePerPo',
    //   headerName: 'unitRatePerPo.',
    //   flex: 1
    // }
  ];

  const deleteApi = `http://100.42.177.77:83/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?dpIdDet=`;
  return (
    <Box
      noValidate
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      }}
    >
      <div hidden={!showUpperDiv}>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h4" gutterBottom>
              Assign Vendor
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Fabric"
              name="fabricName"
              value={formData.fabricName}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            >
              {/* {collectionList.map((option) => (
              <MenuItem key={option.collectionId} value={option.collectionId}>
                {option.collectionName}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Process Type"
              name="processType"
              value={formData.processType}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            >
              {/* {designList.map((option) => (
              <MenuItem key={option.designId} value={option.designId}>
                {option.designNo}
              </MenuItem>
            ))} */}
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Color"
              name="colorName"
              value={formData.colorName}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            >
              {/* {batchList.map((option) => (
              <MenuItem key={option.batchNo} value={option.batchNo}>
                {option.batchNo}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="UOM"
              name="uom"
              value={formData.uom}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            >
              {/* {components.map((option) => (
              <MenuItem key={option.componentId} value={option.componentId}>
                {option.componentName}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>
          {/* <Grid item xs={12} md={3}> */}
          {/* <TextField
            label="Base Color"
            fullWidth
            size="small"
            name="baseColorName"
            value={formData.baseColorName}
            onChange={handleChange}
            disabled
          />
        </Grid> */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="PO Pcs"
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            >
              {/* {colors.map((option) => (
              <MenuItem key={option.colorId} value={option.colorId}>
                {option.color}
              </MenuItem>
            ))} */}
            </TextField>
          </Grid>

          {/* <Grid item xs={12} md={1.5}>
          <TextField
            label="Po Pcs"
            fullWidth
            size="small"
            name="poPcs"
            value={formData.poPcs}
            onChange={handleChange}
            disabled
          />
        </Grid> */}
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total AvailableQty"
              fullWidth
              size="small"
              name="availableQty"
              value={formData.availableQty}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Remaining Qty"
              fullWidth
              size="small"
              name="remainingQty"
              value={formData.remainingQty}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
            />
          </Grid>
        </Grid>
        <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />
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
              label="Vendors"
              // defaultValue=""
              size="small"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Assign Quantity"
              fullWidth
              type="number"
              size="small"
              name="assignedQty"
              value={formData.assignedQty}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              error={!!formErrors.assignedQty}
              helperText={formErrors.assignedQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Rate Per uom"
              type="number"
              fullWidth
              size="small"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Shrinkage"
              fullWidth
              type="number"
              size="small"
              name="shrinkage"
              value={formData.shrinkage}
              onChange={handleChange}
              disabled
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Wastage"
              fullWidth
              type="number"
              size="small"
              name="wastage"
              value={formData.wastage}
              onChange={handleChange}
              disabled
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Output Qty"
              fullWidth
              type="number"
              size="small"
              name="outputQty"
              value={formData.outputQty}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Total Excl. Gst"
              fullWidth
              type="number"
              size="small"
              name="totalExcGst"
              value={formData.totalExcGst}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="GST"
              fullWidth
              size="small"
              // type="number"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Total Including Gst"
              fullWidth
              size="small"
              // type="number"
              name="TotalIncludingGst"
              value={formData.TotalIncludingGst}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="UnitRate Per PO."
              fullWidth
              size="small"
              // type="number"
              name="unitRatePerPo"
              value={formData.unitRatePerPo}
              onChange={handleChange}
              disabled={!formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              disabled={productionStatus === 3}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
      <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />

      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
            View Vendor
          </Typography>
        </Grid>

        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <ReuseableDataGrid
            iColumns={columns}
            initialRows={initialRows}
            disableDelete={productionStatus === 3}
            disableEdit={productionStatus === 3}
            setInitialData={setInitialData}
            deleteApi={deleteApi}
            deleteBy="dpIdDet"
            refetch={refetchDyeingPrintingDetails}
            // disableEdit={true}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DyeingPrintingAssignVendor;
