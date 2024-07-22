import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Box, Divider, MenuItem } from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetAdditionalProcessDetailsByAdditionalProcessIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const AssignVendorFormTable = ({
  additionalProcessData,
  setAdditionalProcessData,
  refetchAdditionalProcessList,
  handleClickOpen
}) => {
  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [formErrors, setFormErrors] = useState({});

  const [initialData, setInitialData] = useState([]);

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.quantity ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);

  const [formData, setFormData] = useState({
    additionalProcessDetId: 0,
    additionalProcessId: additionalProcessData.additionalProcessId || 0,
    designId: additionalProcessData.designNo || '',
    planningHeaderId: additionalProcessData.planningHeaderId || 0,
    batchNo: additionalProcessData.batchNo || '',
    componentName: additionalProcessData.componentName || '',
    componentId: additionalProcessData.componentId || '',
    colorName: additionalProcessData.colorName || '',
    colorId: additionalProcessData.colorId || '',
    fabricName: additionalProcessData.fabricName || '',
    fabricId: additionalProcessData.fabricId || '',
    uomId: additionalProcessData.uomId || '',
    uom: additionalProcessData.uom || '',

    vendorId: '', /////////////checkapi
    // baseColorName: additionalProcessData.baseColorName || '',
    // poPcs: additionalProcessData.poPcs || '',
    pcsPerComponent: additionalProcessData.pcsPerComponent || '',
    remainingPcsPerComponent:
      additionalProcessData.pcsPerComponent - Quantity || '',
    processTypeName: additionalProcessData.processTypeName || '',
    processTypeId: additionalProcessData.processTypeId || '',
    quantity: '',
    ratePerPcs: 0,
    totalAmount: 0,
    costPerComponent: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      additionalProcessDetId: initialData.additionalProcessDetId || 0,
      vendorId: initialData?.vendorId || '',
      quantity: initialData?.quantity || '',
      ratePerPcs: initialData?.ratePerPcs || '',
      remainingPcsPerComponent:
        prevFormData.remainingPcsPerComponent + initialData?.quantity || '',
      totalAmount: initialData?.totalAmount || '',
      costPerComponent: initialData?.costPerComponent || 0,

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    }));
  }, [initialData]);
  useEffect(() => {
    setFormData({
      ...formData,
      remainingPcsPerComponent:
        additionalProcessData.pcsPerComponent - Quantity || ''
    });
  }, [initialRows]);
  const { data: lookupData } = useGetLookUpListQuery();
  const {
    data: additionalProcessDetails,
    refetch: refetchAdditionalProcessDetails
  } = useGetAdditionalProcessDetailsByAdditionalProcessIdQuery(
    formData.additionalProcessId,
    {
      skip: !formData.additionalProcessId // Skip the query if no collection is selected
    }
  );
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);
  useEffect(() => {
    if (additionalProcessDetails) {
      setInitialRows(
        additionalProcessDetails.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [additionalProcessDetails, refetchAdditionalProcessDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };

      if (name === 'quantity' || name === 'remainingPcsPerComponent') {
        const quantity = updatedFormData.quantity;
        const remainingPcsPerComponent =
          updatedFormData.remainingPcsPerComponent;

        if (quantity > remainingPcsPerComponent) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            quantity:
              'Assigned Quantity cannot be greater than Remaining Quantity'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            quantity: ''
          }));
        }
      }

      return updatedFormData;
    });
  };
  useEffect(() => {
    const calculateTotalamount = () => {
      const quantity = parseFloat(formData.quantity) || 0;
      const ratePerPcs = parseFloat(formData.ratePerPcs) || 0;

      return (quantity * ratePerPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalamount()
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;

      return (totalAmount / poPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent()
    }));
  }, [
    formData.quantity,
    formData.ratePerPcs,
    formData.totalAmount
    // formData.poPcs
    // formData.poPcs,
    // formData.pcsPerComponent
  ]);

  const handleSave = async () => {
    console.log(formData);

    if (formData.quantity > formData.remainingPcsPerComponent) {
      enqueueSnackbar(
        `Assigned quantity can not be greater then Remaining Quantity !`,

        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
      return;
    }

    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcessDetails',
        formData
      );

      console.log('Save response:', response.data);
      if (!response.data.success) {
        enqueueSnackbar(`${response.data.message} !`, {
          variant: 'error',
          autoHideDuration: 5000
        });
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar('Schiffili saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }
      refetchAdditionalProcessDetails();

      setFormData((prevFormData) => ({
        ...prevFormData,
        // remainingPcsPerComponent:
        //   prevFormData.remainingPcsPerComponent - prevFormData.quantity,
        vendorId: '', /////////////checkapi

        pcsPerComponent: additionalProcessData.pcsPerComponent || '',

        quantity: '',
        ratePerPcs: 0,
        totalAmount: 0,
        costPerComponent: '',
        remainingPcsPerComponent:
          additionalProcessData.pcsPerComponent - Quantity || '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchAdditionalProcessList();

      // handleClickOpen();

      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Schiffili not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  const columns = [
    {
      field: 'vendorName',
      headerName: 'Vendor',
      flex: 2
    },

    {
      field: 'processType',
      headerName: 'Process Type',
      flex: 2
    },
    {
      field: 'pcsPerComponent',
      headerName: ' Pcs. Per Component',
      flex: 1
    },
    {
      field: 'quantity',
      headerName: 'Quantitity',
      flex: 1
    },
    {
      field: 'ratePerPcs',
      headerName: 'Rate Per Pcs.',
      flex: 1
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      flex: 1
    }
  ];

  const deleteApi = `https://gecxc.com:4041/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=`;
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
      <Grid
        container
        spacing={1}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        {/* <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Select Collection"
            name="collectionId"
            value={formData.selectedCollectionId}
            onChange={handleChange}
            size="small"
            disabled
            sx={(theme) => ({
              ...(formData.selectedCollectionId !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          >
            {/* {collectionList.map((option) => (
              <MenuItem key={option.collectionId} value={option.collectionId}>
                {option.collectionName}
              </MenuItem>
            ))} */}
        {/* </TextField> */}
        {/* </Grid> */}

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Select Design"
            name="designId"
            value={formData.designId}
            onChange={handleChange}
            size="small"
            disabled
            sx={(theme) => ({
              ...(formData.designId !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
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
            label="Batch No."
            name="batchNo"
            value={formData.batchNo}
            onChange={handleChange}
            size="small"
            disabled
            sx={(theme) => ({
              ...(formData.batchNo !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
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
            label="Components"
            name="componentName"
            value={formData.componentName}
            onChange={handleChange}
            size="small"
            disabled
            sx={(theme) => ({
              ...(formData.componentName !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
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
            label="Select Fabric"
            defaultValue=""
            size="small"
            name="fabricName"
            value={formData.fabricName}
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.fabricName !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          >
            {/* {Fabrications.map((option) => (
                    <MenuItem key={option.fabricId} value={option.fabricId}>
                      {option.fabric}
                    </MenuItem>
                  ))} */}
          </TextField>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Color"
            size="small"
            name="colorName"
            value={formData.colorName}
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.colorName !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          >
            {/* {colors.map((option) => (
              <MenuItem key={option.colorId} value={option.colorId}>
                {option.color}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            // select
            label="Process Type"
            defaultValue=""
            size="small"
            name="processTypeName"
            value={formData.processTypeName}
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.processTypeName !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          >
            {/* {operatingMachineList.map((option) => (
              <MenuItem key={option.lookUpId} value={option.lookUpId}>
                {option.lookUpName}
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
            label="Pcs. Per Component"
            fullWidth
            size="small"
            name="pcsPerComponent"
            value={formData.pcsPerComponent}
            // type="number"
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.pcsPerComponent !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
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
            label="Remaining Pcs. Per Component"
            fullWidth
            size="small"
            name="remainingPcsPerComponent"
            value={formData.remainingPcsPerComponent}
            // type="number"
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.remainingPcsPerComponent !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
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
            label="UOM"
            fullWidth
            size="small"
            // type="number"
            name="uom"
            value={formData.uom}
            onChange={handleChange}
            disabled
            sx={(theme) => ({
              ...(formData.uom !== '' && {
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
                  // borderColor: 'gray' // Adjust border color here
                },
              '& .MuiInputLabel-root.Mui-disabled': {
                color: 'rgba(0, 0, 0, 0.87)' // Darker label color
              }
            })}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
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
            label="Quantity"
            fullWidth
            type="number"
            size="small"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            error={!!formErrors.quantity}
            helperText={formErrors.quantity}
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
            label="Rate Per Pcs"
            type="number"
            fullWidth
            size="small"
            name="ratePerPcs"
            value={formData.ratePerPcs}
            onChange={handleChange}
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
            label="Total Amount"
            fullWidth
            type="number"
            size="small"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          />
        </Grid>

        <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
          <Button variant="contained" size="small" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
      <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />

      <Grid
        container
        spacing={2}
        width="Inherit"
        sx={{ paddingY: 2, paddingX: 2 }}
      >
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <ReuseableDataGrid
            iColumns={columns}
            initialRows={initialRows}
            setInitialData={setInitialData}
            deleteApi={deleteApi}
            deleteBy="additionalProcessDetId"
            refetch={refetchAdditionalProcessDetails}
            // disableEdit={true}
            // setAccordionExpanded={setAccordionExpanded}
            // fileName="Schffili List"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssignVendorFormTable;
