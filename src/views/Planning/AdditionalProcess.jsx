import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  Box,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetAdditionalProcessListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetComponentsByBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetFabricByComponentsAndBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import schiffli from '../../assets/images/planningicons/schiffli.png';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AssignVendorFormTable from 'components/assignVendorFormTable';
import { useSnackbar } from 'notistack';

//////
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { useUser } from 'context/User';
///////

const AdditionalProcess = ({ initialValues }) => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(true);

  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    additionalProcessId: 0,
    designId: '',
    planningHeaderId: 0,
    batchNo: '',
    componentId: '',
    colorId: '',
    fabricId: '',
    // vendorId: '', /////////////checkapi
    uomId: '',
    baseColorName: '',
    poPcs: '',
    pcsPerComponent: '',
    processTypeId: '',
    // quantity: '',
    // ratePerPcs: 0,
    // totalAmount: 0,
    // costPerComponent: '',

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });
  console.log('initialData', initialData);
  useEffect(() => {
    setFormData({
      ...formData,
      additionalProcessId: initialData?.additionalProcessId || 0,
      // designId: initialData?.designId || '',
      // planningHeaderId: initialData?.planningHeaderId || 0,
      // batchNo: initialData?.batchNo || '',
      componentId: initialData?.componentId || '',
      fabricId: initialData?.fabricId || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      // poPcs: initialData?.poPcs || '',
      // baseColorName: initialData?.baseColorName || '',
      pcsPerComponent: initialData?.pcsPerComponent || '',
      uomId: initialData?.uomId || '',
      processTypeId: initialData?.processTypeId || '',
      // quantity: initialData?.quantity || '',
      // ratePerPcs: initialData?.ratePerPcs || 0,
      // totalAmount: initialData?.totalAmount || 0,
      // costPerComponent: initialData?.costPerComponent || '',

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');

  useEffect(() => {
    setSelectedCollectionId(initialValues.collectionId);
    // setFormData({
    //   ...formData,
    //   designId: initialValues?.designId || '',
    //   planningHeaderId: initialValues?.planningHeaderId || '',
    //   batchNo: initialValues?.batchNo || ''
    // });
  }, []);

  const { data: lookupData } = useGetLookUpListQuery();
  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });
  const { data: batchData, refetch: refetchBatches } =
    useGetPrePlanningHeaderByDesignIdQuery(formData.designId, {
      skip: !formData.designId // Skip the query if no collection is selected
    });
  const { data: fabricData } = useGetFabricByComponentsAndBatchNoQuery(
    {
      batchNo: formData.planningHeaderId,
      componentId: formData.componentId
    },
    {
      skip: !formData.planningHeaderId || !formData.componentId
    }
  );
  const { data: colorData } =
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery(
      {
        batchNo: formData.planningHeaderId,
        componentId: formData.componentId,
        fabricId: formData.fabricId
      },
      {
        skip:
          !formData.planningHeaderId ||
          !formData.componentId ||
          !formData.fabricId
      }
    );

  const { data: additionalProcessList, refetch: refetchAdditionalProcessList } =
    useGetAdditionalProcessListByBatchNoQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  const { data: componentsByBatch } = useGetComponentsByBatchNoQuery(
    formData.planningHeaderId,
    {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    }
  );
  console.log('lookupData', lookupData);
  console.log('collectionData', collectionData);
  console.log('colorData', colorData);

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [processList, setProcessList] = useState([]);

  const [operatingMachineList, setOperatingMachineList] = useState([]);
  const [workingHeadList, setWorkingHeadList] = useState([]);

  const [colors, setColors] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [components, setComponents] = useState([]);
  console.log('batchData', batchData);

  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    if (collectionData) {
      setCollectionList(collectionData.result);
    }
  }, [collectionData]);
  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      // refetch();
    }
  }, [designData]);
  useEffect(() => {
    if (batchData) {
      setBatchList(batchData.result);
      // refetchBatches();
    }
  }, [batchData]);
  useEffect(() => {
    if (fabricData) {
      setFabrications(fabricData.result);
      // refetchBatches();
    }
  }, [fabricData]);
  useEffect(() => {
    if (colorData) {
      setColors(colorData.result);
      // refetchBatches();
    }
  }, [colorData]);
  useEffect(() => {
    if (componentsByBatch) {
      setComponents(componentsByBatch.result);
    }
  }, [componentsByBatch]);
  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setUoms(data.uomList);
      setProcessList(data.processList);
    }
  }, [lookupData]);
  useEffect(() => {
    if (additionalProcessList) {
      setIsLoading(false);

      setInitialRows(
        additionalProcessList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [additionalProcessList, refetchAdditionalProcessList]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);

      setOperatingMachineList(data.operatingMachineList);
      setWorkingHeadList(data.workingHeadList);
    }
  }, [lookupData]);

  console.log('initialRows', initialRows);

  // const collectionList = collectionData?.result || [];
  useEffect(() => {
    if (formData.productionStatus === 3) {
      enqueueSnackbar(
        'Production Staus is completed. Select other Collection!',
        {
          variant: 'warning',
          autoHideDuration: 5000
        }
      );
    }
  }, [formData.productionStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setSelectedCollectionId(value);
      setInitialRows([]);
      setIsLoading(true);
      setFormData({
        ...formData,
        collectionId: value,
        designId: '',
        planningHeaderId: 0,
        productionStatus: selectedCollection
          ? selectedCollection.productionStatus
          : '',
        batchNo: '',
        componentId: '',
        colorId: '',
        fabricId: '',
        uomId: '',
        baseColorName: '',
        poPcs: '',
        pcsPerComponent: '',
        processTypeId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId

        // poPcs: selectedCollection ? selectedCollection.poPcs : ''
      });
    } else if (name === 'designId') {
      const selectedDesign = designList.find(
        (design) => design.designId === parseInt(value)
      );
      setInitialRows([]);
      setIsLoading(true);
      setFormData({
        ...formData,
        designId: value,
        baseColorId: selectedDesign ? selectedDesign.colorId : '',
        baseColorName: selectedDesign ? selectedDesign.colorName : '',
        planningHeaderId: 0,
        batchNo: '',
        componentId: '',
        colorId: '',
        fabricId: '',
        uomId: '',
        poPcs: '',
        pcsPerComponent: '',
        processTypeId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : '',
        componentId: '',
        colorId: '',
        fabricId: '',
        uomId: '',
        pcsPerComponent: '',
        processTypeId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      });
      setAccordionExpanded(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log('colors', colors);

  const handleSave = async () => {
    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/AdditionalProcess/SaveAdditionalProcess',
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
        enqueueSnackbar('Process saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      setFormData((prevFormData) => ({
        additionalProcessId: 0,
        designId: prevFormData.designId,
        planningHeaderId: prevFormData.planningHeaderId,
        batchNo: prevFormData.batchNo,
        baseColorName: prevFormData.baseColorName,
        poPcs: prevFormData.poPcs,
        componentId: '',
        colorId: '',
        fabricId: '',
        uomId: '',
        // baseColorName: '',
        pcsPerComponent: '',
        processTypeId: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));

      refetchAdditionalProcessList();

      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Process not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  console.log('formData', formData);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [additionalProcessData, setAdditionalProcessData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (data) => {
    setAdditionalProcessData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAdditionalProcessData({});
    refetchAdditionalProcessList();
    // setDeleteId(null);
  };

  const [totalAssignedQty, setTotalAssignedQty] = useState(0);
  useEffect(() => {
    const totalAssignedQty = initialRows
      .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
      .toFixed(2);

    setTotalAssignedQty(parseFloat(totalAssignedQty).toLocaleString());
  }, [initialRows]);

  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      // componentName: 'Total Summary',
      // availableQty: totalAvailableQty,
      assignedQty: totalAssignedQty
      // totalPcs: totalPcsSum,
      // requiredPcs: totalRequiredPcs
    }
  ];
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      // editable: true,
      // flex: 1,
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'batchNo',
      headerName: 'Batch'
    },
    {
      field: 'componentName',
      headerName: 'Component',
      renderCell: (params) => {
        const chipColor = 'primary.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },

    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'processTypeName',
      headerName: 'Process Type'
    },
    {
      field: 'pcsPerComponent',
      headerName: 'Pcs Per Component'
    },
    {
      field: 'assignedQty',
      headerName: 'Assigned Quantity',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 3 : undefined),

      valueGetter: (params) => {
        return params;
      },

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },

    {
      field: 'AddVendor',
      headerName: 'Add Vendor',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            <PersonAddAlt1OutlinedIcon />
          </IconButton>
        </div>
      )
    }
  ];
  const deleteApi = `http://100.42.177.77:83/api/AdditionalProcess/DeleteAdditionalProcess?adId=`;

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<Avatar src={schiffli} sx={{ background: 'transparent' }} />}
          title="Additional Process "
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
              label="Select Collection"
              name="collectionId"
              value={selectedCollectionId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {collectionList.map((option) => (
                <MenuItem key={option.collectionId} value={option.collectionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>{' '}
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Design"
              name="designId"
              value={formData.designId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {designList.map((option) => (
                <MenuItem key={option.designId} value={option.designId}>
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Batch No."
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {batchList.map((option) => (
                <MenuItem key={option.batchNo} value={option.batchNo}>
                  {option.batchNo}
                </MenuItem>
              ))}
            </TextField>{' '}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Base Color"
              fullWidth
              size="small"
              name="baseColorName"
              value={formData.baseColorName}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.baseColorName !== '' && {
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
          <Grid item xs={12} md={12}>
            <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />{' '}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Components"
              name="componentId"
              value={formData.componentId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {components.map((option) => (
                <MenuItem key={option.componentId} value={option.componentId}>
                  {option.componentName}
                </MenuItem>
              ))}
            </TextField>{' '}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Fabric"
              defaultValue=""
              size="small"
              name="fabricId"
              value={formData.fabricId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {Fabrications.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabric}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Vendors"
                  defaultValue=""
                  size="small"
                  name="vendorId"
                  value={formData.vendorId}
                  onChange={handleChange}
                >
                  {vendors.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Color"
              size="small"
              name="colorId"
              value={formData.colorId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {colors.map((option) => (
                <MenuItem key={option.colorId} value={option.colorId}>
                  {option.color}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Po Pcs"
              fullWidth
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.poPcs !== '' && {
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
              label="Pcs. Per Component"
              fullWidth
              size="small"
              name="pcsPerComponent"
              value={formData.pcsPerComponent}
              // type="number"
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
              fullWidth
              select
              label="UOM"
              type="number"
              defaultValue={140}
              size="small"
              name="uomId"
              value={formData.uomId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              // error={!!formErrors.uomId}
              // helperText={formErrors.uomId}
              // required
              // disabled={formData.isSchiffili} // Disable when isSchiffili is checked
            >
              {uoms.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Process Type"
              // defaultValue=""
              size="small"
              name="processTypeId"
              value={formData.processTypeId}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {processList.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 0 }}>
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              disabled={formData.productionStatus === 3}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

      {/* <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<AddOutlinedIcon />}
          title="Add Additional Process "
          titleTypographyProps={{ style: { color: 'white' } }}
          action={
            <IconButton onClick={handleAccordionToggle} sx={{ mt: '-18px' }}>
              <ExpandMoreIcon style={{ color: 'white' }} />
            </IconButton>
          }
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        ></CardHeader>{' '}
        <Accordion
          expanded={accordionExpanded}
          onChange={handleAccordionToggle}
          sx={{}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ display: 'none' }} // Hide this since we're using the icon in the CardHeader
          ></AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              spacing={2}
              width="Inherit"
              sx={{ paddingY: 2, paddingX: 2 }}
            ></Grid>
          </AccordionDetails>
        </Accordion>
      </Card> */}
      {/* <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} /> */}
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Additional Process "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid sx={{ marginTop: 2 }} item xs={12}>
            <ReuseableDataGrid
              iColumns={columns}
              initialRows={rows}
              disableDelete={formData.productionStatus === 3}
              disableEdit={formData.productionStatus === 3}
              setInitialData={setInitialData}
              deleteApi={deleteApi}
              deleteBy="additionalProcessId"
              refetch={refetchAdditionalProcessList}
              setAccordionExpanded={setAccordionExpanded}
              fileName="AdditionalProcess"
              isLoading={isLoading}
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
                  {'Additional Process > Assign Vendors '}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <AssignVendorFormTable
                  additionalProcessData={additionalProcessData}
                  productionStatus={formData.productionStatus}
                  setAdditionalProcessData={setAdditionalProcessData}
                  refetchAdditionalProcessList={refetchAdditionalProcessList}
                  handleClickOpen={handleClickOpen}
                />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AdditionalProcess;
