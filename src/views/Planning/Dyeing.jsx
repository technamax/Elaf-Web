/* eslint-disable prettier/prettier */
// material-ui
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonGroup,
  IconButton
} from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';

import Autocomplete from '@mui/lab/Autocomplete';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetDyeingPrintingListByBatchNoQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import {
  useGetDesignFromPlanningHeaderByCollectionIdQuery,
  useGetFabricColorFromPrePlanningByFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import { SnackbarProvider, useSnackbar } from 'notistack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { Card, CardHeader, Avatar } from '@mui/material';
import dyeing from '../../assets/images/planningicons/dyeing.png';
import dye from '../../assets/images/planningicons/dye.png';
// project imports
import roller from '../../assets/images/roller-ezgif.com-instagif.gif';
import MainCard from 'ui-component/cards/MainCard';
import loadingGif from '../../assets/images/loading1.svg';
import { useUser } from 'context/User';
import '../../assets/scss/style.scss';
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DyeingPrintingAssignVendor from 'components/DyeingPrintingAssignVendor';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

const Dyeing = () => {
  const { user } = useUser();
  console.log('user', user);

  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    dpId: 0,
    designId: '',
    batchNo: '',
    planningHeaderId: '',
    fabricId: '',
    colorId: '',
    color: '',
    // vendorId: '',
    processType: '',
    availableQty: '',
    Shrinkage: '',
    Wastage: '',
    outputQty: '',
    UOM: '',
    uomId: '',
    // RatePerUOM: '',
    // UnitRatePerPo: '',
    // TotalExclGst: '',
    // GST: '0',
    // // GSTAmount: '',
    // TotalIncludingGst: '',
    // createdBy: 0,
    poPcs: '',
    baseColorName: '',
    createdBy: user.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
    // fabricId: ''
  });
  useEffect(() => {
    setFormData({
      dpId: initialData.dpId || 0,
      designId: initialData?.designId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      batchNo: initialData?.batchNo || '',
      fabricId: initialData?.fabricId || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      color: initialData?.color || '', //from dying screen coming from fabricAPi
      // vendorId: initialData?.vendorId || '',
      processType: initialData?.processType || '',
      availableQty: initialData?.availableQty || '',
      Shrinkage: initialData?.shrinkage || '',
      Wastage: initialData?.wastage || '',
      outputQty: initialData?.outputQty || 0,
      UOM: initialData?.uom || 0,
      uomId: initialData?.uomId || '',
      // RatePerUOM: initialData?.ratePerUOM || 0,
      // UnitRatePerPo: initialData?.unitRatePerPo || '',
      // TotalExclGst: initialData?.totalExclGst || '',
      // GST: initialData?.gst || '',
      // TotalIncludingGst: initialData?.totalIncludingGst || '',
      // createdBy: initialData?.createdBy || 0,
      poPcs: initialData?.poPcs || 0,
      baseColorName: initialData?.baseColorName || 0,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false); // State for loading

  console.log('Dyeing form data to send', formData);
  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: lookupData } = useGetLookUpListQuery();
  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId
    });
  const { data: batchData, refetch: refetchBatches } =
    useGetPrePlanningHeaderByDesignIdQuery(formData.designId, {
      skip: !formData.designId
    });
  const { data: fabricData } = useGetFabricFromPrePlanningByBatchNoQuery(
    { batchNo: formData.planningHeaderId, processType: 'Fabrication' },
    {
      skip: !formData.planningHeaderId
    }
  );
  const { data: colorData } = useGetFabricColorFromPrePlanningByFabricIdQuery(
    {
      fabricId: formData.fabricId,
      planningHeaderId: formData.planningHeaderId
    },
    {
      skip: !formData.fabricId || !formData.planningHeaderId
    }
  );
  const { data: dyeingPrintingData, refetch: refetchDyeingPrintingData } =
    useGetDyeingPrintingListByBatchNoQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId
    });

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [colors, setColors] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  console.log('batchList', batchList);
  console.log('formData', formData);
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
    }
  }, [designData]);

  useEffect(() => {
    if (batchData) {
      setBatchList(batchData.result);
    }
  }, [batchData]);

  useEffect(() => {
    if (fabricData) {
      setFabrications(fabricData.result);
    }
  }, [fabricData]);
  useEffect(() => {
    if (colorData) {
      setColors(colorData.result);
    }
  }, [colorData]);
  // useEffect(() => {
  //   if (lookupData) {
  //     setVendors(lookupData.result[0].vendorList);
  //   }
  // }, [fabricData]);
  // console.log(vendors);
  useEffect(() => {
    if (dyeingPrintingData) {
      setInitialRows(
        dyeingPrintingData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [dyeingPrintingData, refetchDyeingPrintingData]);

  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];
      setUoms(data.uomList);
    }
  }, [lookupData]);

  const collectionList = collectionData?.result || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setSelectedCollectionId(value);
      setLoading(true);

      setFormData({
        ...formData,
        collectionId: value,
        designId: '',
        batchNo: '',
        planningHeaderId: '',
        fabricId: '',
        colorId: '',
        color: '',
        // vendorId: '',
        processType: '',
        availableQty: '',
        Shrinkage: '',
        Wastage: '',
        outputQty: '',
        UOM: '',
        uomId: '',
        // RatePerUOM: '',
        // UnitRatePerPo: '',
        // TotalExclGst: '',
        // GST: '0',
        // // GSTAmount: '',
        // TotalIncludingGst: '',
        // createdBy: 0,
        poPcs: '',
        baseColorName: ''
        // poPcs: selectedCollection ? selectedCollection.poPcs : ''
      });
    } else if (name === 'designId') {
      const selectedDesign = designList.find(
        (design) => design.designId === parseInt(value)
      );
      setFormData({
        ...formData,
        designId: value,
        baseColorId: selectedDesign ? selectedDesign.colorId : '',
        baseColorName: selectedDesign ? selectedDesign.colorName : '',
        // designId: '',
        batchNo: '',
        planningHeaderId: '',
        fabricId: '',
        colorId: '',
        color: '',
        // vendorId: '',
        processType: '',
        availableQty: '',
        Shrinkage: '',
        Wastage: '',
        outputQty: '',
        UOM: '',
        uomId: '',
        // RatePerUOM: '',
        // UnitRatePerPo: '',
        // TotalExclGst: '',
        // GST: '0',
        // // GSTAmount: '',
        // TotalIncludingGst: '',
        // createdBy: 0,
        poPcs: ''
        // baseColorName: '',
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : '',
        fabricId: '',
        colorId: '',
        color: '',
        // vendorId: '',
        processType: '',
        availableQty: '',
        Shrinkage: '',
        Wastage: '',
        outputQty: '',
        UOM: '',
        uomId: ''
        // RatePerUOM: '',
        // UnitRatePerPo: '',
        // TotalExclGst: '',
        // GST: '0',
        // // GSTAmount: '',
        // TotalIncludingGst: ''
      });
      setAccordionExpanded(true);
      setLoading(false);

      // Fetch data from API when batchNo changes
    } else if (name === 'fabricId') {
      const selectedFabric = Fabrications.find(
        (fabric) => fabric.fabricId === value
      );
      console.log('Selected Fabric:', Fabrications); // Add this line to check selected fabric
      setFormData({
        ...formData,
        fabricId: value
        // outputQty: selectedFabric ? selectedFabric.total : ''
      });
      // fetchFabricColorData(value); // Pass formData.fabricId instead of value
      // setAccordionExpanded(true);
    } else if (name === 'ColorId') {
      const selectedColor = colors.find(
        (color) => color.colorId === value.colorId
      );
      setFormData({
        ...formData,
        ColorId: value.colorId,
        color: selectedColor.color,
        availableQty: selectedColor.total,
        UOM: selectedColor.uom,
        Shrinkage: selectedColor.shrinkage,
        Wastage: selectedColor.wastage
      });
    } else if (name === 'processType') {
      // Update formData for processType
      setFormData({
        ...formData,
        processType: value
      });
    } else if (name === 'vendorId') {
      // Update formData for vendorId
      setFormData({
        ...formData,
        vendorId: value
      });
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  useEffect(() => {
    const calculateOutputQty = () => {
      const availableQty = parseFloat(formData.availableQty) || 0;
      const shrinkage = parseFloat(formData.Shrinkage) || 0;
      const wastage = parseFloat(formData.Wastage) || 0;
      return ((availableQty * (100 - (shrinkage + wastage))) / 100).toFixed(2);
    };

    const calculateTotalExclGst = () => {
      const quantity = parseFloat(formData.availableQty) || 0;
      const rate = parseFloat(formData.RatePerUOM) || 0;
      return (quantity * rate).toFixed(2);
    };

    const calculateTotalWithGst = (totalExclGst, gst) => {
      return (totalExclGst * (1 + gst / 100)).toFixed(2);
    };

    const outputQty = calculateOutputQty();
    const totalExclGst = calculateTotalExclGst();
    const gst = parseFloat(formData.GST) || 0;
    const totalIncludingGst = calculateTotalWithGst(totalExclGst, gst);
    const poPcs = parseFloat(formData.poPcs) || 0;
    const unitRatePerPo = poPcs ? totalIncludingGst / poPcs : 0;

    setFormData((prevData) => ({
      ...prevData,
      outputQty: outputQty
      // TotalExclGst: totalExclGst,
      // TotalIncludingGst: totalIncludingGst,
      // UnitRatePerPo: unitRatePerPo.toFixed(2)
    }));
  }, [
    formData.availableQty,
    formData.Shrinkage,
    formData.Wastage,
    formData.RatePerUOM,
    formData.GST,
    formData.poPcs,
    formData.UnitRatePerPo
  ]);
  const [formErrors, setFormErrors] = useState({});

  const handleSave = async () => {
    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }

    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/DyeingPrinting/SaveDyeingPrinting',
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
        enqueueSnackbar('Fabrication saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      setFormData((prevFormData) => ({
        designId: prevFormData.designId,
        planningHeaderId: prevFormData.planningHeaderId,
        batchNo: prevFormData.batchNo,
        dpId: 0,
        fabricId: '',
        colorId: '',
        color: '',
        // vendorId: '',
        processType: '',
        availableQty: '',
        Shrinkage: '',
        Wastage: '',
        outputQty: '',
        UOM: '',
        uomId: '',
        // RatePerUOM: '',
        // UnitRatePerPo: '',
        // TotalExclGst: '',
        // GST: '0',
        // // GSTAmount: '',
        // TotalIncludingGst: '',
        // createdBy: 0,
        poPcs: prevFormData.poPcs,
        baseColorName: '',
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
        // planningHeaderId: ''
      }));
      refetchDyeingPrintingData();
      // setAccordionExpanded(false);
    } catch (error) {
      // Handle error (e.g., show an error message)

      console.error('Error saving data:', error);
      enqueueSnackbar('Dyeing not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
      // Handle error (e.g., show an error message)
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.fabricId) {
      errors.fabricId = 'fabricId is required';
    }
    if (!formData.colorId) {
      errors.colorId = 'colorId is required';
    }
    // if (!formData.vendorId) {
    //   errors.vendorId = 'vendorId is required';
    // }
    if (!formData.processType) {
      errors.processType = 'processType is required';
    }
    // if (!formData.GST) {
    //   errors.GST = 'GST is required';
    // }
    // if (!formData.RatePerUOM) {
    //   errors.RatePerUOM = 'RatePerUOM is required';
    // }
    return errors;
  };

  const design = [
    {
      value: 'Dyeing',
      label: 'Dyeing'
    },
    {
      value: 'Printing',
      label: 'Printing'
    }
  ];

  const [initialFormData, setInitialFormData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (data) => {
    setInitialFormData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInitialFormData({});
    refetchDyeingPrintingData();
    // setDeleteId(null);
  };

  const columns = [
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    // {
    //   field: 'vendorName',
    //   headerName: 'Vendor'
    // },

    {
      field: 'processType',
      headerName: 'Process Type'
    },
    {
      field: 'uom',
      headerName: ' UOM'
    },
    {
      field: 'poPcs',
      headerName: ' PO PCS.'
    },
    {
      field: 'availableQty',
      headerName: 'Available Quantitity'
    },
    // {
    //   field: 'shrinkage',
    //   headerName: 'Shrinkage'
    // },
    // {
    //   field: 'wastage',
    //   headerName: 'Wastage'
    // },
    {
      field: 'assignedQty',
      headerName: 'Assigned Qty'
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
    // {
    //   field: 'ratePerUOM',
    //   headerName: 'Rate'
    // },
    // {
    //   field: 'totalExclGst',
    //   headerName: 'Total Excl. Gst'
    // },
    // {
    //   field: 'gst',
    //   headerName: 'GST'
    // },
    // {
    //   field: 'totalIncludingGst',
    //   headerName: 'Total Including GST'
    // },
    // {
    //   field: 'unitRatePerPo',
    //   headerName: 'UnitRate Per Po.'
    // }

    // {
    //   field: 'Action',
    //   headerName: 'Actions',

    //   renderCell: (params) => (
    //     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    //       <ButtonGroup size="small" variant="text">
    //         <IconButton
    //           aria-label="Edit"
    //           // color="primary"
    //           onClick={() => handleEdit(params.row)}
    //         >
    //           <EditIcon />
    //         </IconButton>
    //         <IconButton
    //           aria-label="delete"
    //           color="primary"
    //           onClick={() => handleDelete(params.row.dpId)}
    //         >
    //           <DeleteIcon />
    //         </IconButton>
    //       </ButtonGroup>
    //     </div>
    //   )
    // }
  ];
  const deleteApi = `https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=`;

  return (
    // <MainCard
    //   style={{
    //     borderWidth: 1,
    //     borderStyle: 'dotted',
    //     borderColor: '#a11f23',
    //     width: 'auto',
    //     maxHeight: { xs: '80vh', md: 'auto' },
    //     overflow: 'auto'
    //   }}
    // >
    <>
      {/* <div className="CardHeader"> */}
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<Avatar src={roller} sx={{ background: 'transparent' }} />}
          title="Add Dyeing and Printing "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          {/* <Grid item xs={12} md={12}>
            <Typography variant="h3" gutterBottom>
            Dyeing/Printing
            </Typography>
          </Grid> */}

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={selectedCollectionId}
              onChange={handleChange}
              size="small"
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
            />
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
              error={!!formErrors.fabricId}
              helperText={formErrors.fabricId}
              required
            >
              {Fabrications.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabric}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* <TextField
              fullWidth
              select
              label="Select Color"
              // defaultValue=""
              size="small"
              name="ColorId"
              value={formData.ColorId}
              onChange={handleChange}
            >
              {colors.map((option) => (
                <MenuItem key={option.colorId} value={option.colorId}>
                  {option.color}
                </MenuItem>
              ))}
            </TextField> */}
            <Autocomplete
              fullWidth
              options={colors}
              getOptionLabel={(option) => option.color || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Color"
                  name="colorId"
                  size="small"
                  error={!!formErrors.colorId}
                  helperText={formErrors.colorId}
                  required
                  // value={formData.color}
                />
              )}
              value={
                colors.find((color) => color.colorId === formData.colorId) ||
                null
              }
              onChange={(event, newValue) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  colorId: newValue ? newValue.colorId : '',
                  color: newValue ? newValue.color : '',
                  availableQty: newValue ? newValue.total : '',
                  UOM: newValue ? newValue.uom : '',
                  uomId: newValue ? newValue.uomId : '',
                  Shrinkage: newValue ? newValue.shrinkage : '',
                  Wastage: newValue ? newValue.wastage : ''
                }));
              }}
            />
            {/* <Autocomplete
              fullWidth
              options={colors}
              getOptionLabel={(option) => option.color}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Color"
                  name="ColorId"
                  size="small"
                />
              )}
              value={
                colors.find((color) => color.colorId === formData.ColorId) ||
                null
              }
              onChange={handleChange}
            /> */}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Process Type"
              size="small"
              name="processType"
              value={formData.processType}
              onChange={handleChange}
              error={!!formErrors.processType}
              helperText={formErrors.processType}
              required
            >
              {design.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Po Pcs"
              fullWidth
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="UOM"
              fullWidth
              size="small"
              name="UOM"
              value={formData.UOM}
              // focused
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="availableQty"
              fullWidth
              size="small"
              type="number"
              name="availableQty"
              value={formData.availableQty}
              onChange={handleChange}
              // focused
            />
          </Grid>
          {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="Shrinkage%"
              type="number"
              fullWidth
              size="small"
              name="Shrinkage"
              value={formData.Shrinkage}
              onChange={handleChange}
              // focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Wastage%"
              fullWidth
              size="small"
              type="number"
              name="Wastage"
              value={formData.Wastage}
              onChange={handleChange}
              // focused
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Output Qty"
              fullWidth
              size="small"
              name="outputQty"
              type="number"
              value={formData.outputQty}
              onChange={handleChange}
              // focused
            />
          </Grid> */}
          <Grid item xs={12} md={9} sx={{ marginTop: 2 }} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSave}
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
          title="Add Dyeing "
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
        ></CardHeader>
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
            {/* <FormControl> */}
      {/* <Grid
              container
              spacing={1}
              width="Inherit"
              sx={{ paddingY: 2, paddingX: 2 }}
            > */}{' '}
      {/* <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Vendor Name"
                  size="small"
                  name="vendorId"
                  value={formData.vendorId}
                  onChange={handleChange} // Change handleChange to handleAutocompleteChange
                  error={!!formErrors.vendorId}
                  helperText={formErrors.vendorId}
                  required
                >
                  {vendors.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}
      {/* <Grid item xs={12} md={1.5}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  type="number"
                  name="RatePerUOM"
                  value={formData.RatePerUOM}
                  onChange={handleChange}
                  error={!!formErrors.RatePerUOM}
                  helperText={formErrors.RatePerUOM}
                  required
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Total Excluding GST"
                  type="number"
                  fullWidth
                  size="small"
                  name="TotalExclGst"
                  value={formData.TotalExclGst}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="GST"
                  fullWidth
                  type="number"
                  size="small"
                  name="GST"
                  value={formData.GST}
                  onChange={handleChange}
                  error={!!formErrors.GST}
                  helperText={formErrors.GST}
                  required
                />{' '}
              </Grid> */}
      {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="GST Amount"
              fullWidth
              size="small"
              name="GSTAmount"
              value={formData.GSTAmount}
              onChange={handleChange}
            />
          </Grid> */}
      {/* <Grid item xs={12} md={1.5}>
                <TextField
                  label="Total:Including Gst"
                  fullWidth
                  size="small"
                  name="TotalExclGst"
                  value={formData.TotalIncludingGst}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Unit P: T/Po PC's"
                  fullWidth
                  size="small"
                  name="UnitRatePerPo"
                  value={formData.UnitRatePerPo}
                  onChange={handleChange}
                />
              </Grid> */}
      {/* </Grid>
          </AccordionDetails>
        </Accordion>
      </Card> */}
      <Grid item xs={12} md={12}>
        <Divider
          // color="#cc8587"
          sx={{ height: 1, width: '100%', marginTop: 1, marginBottom: 0 }}
        />
      </Grid>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Dyeing "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>{' '}
        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={12} paddingTop={1}>
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={loadingGif}
                  alt="Loading"
                  style={{
                    width: 200,
                    height: 200
                    // opacity: 0.8
                  }}
                />
              </div>
            ) : (
              <ReuseableDataGrid
                iColumns={columns}
                initialRows={initialRows}
                setInitialData={setInitialData}
                deleteApi={deleteApi}
                deleteBy="dpId"
                refetch={refetchDyeingPrintingData}
                setAccordionExpanded={setAccordionExpanded}
                fileName="Dyeing&PrintingList"
              />
            )}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
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
                  {'Assign Vendors '}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <DyeingPrintingAssignVendor
                  initialFormData={initialFormData}
                  setInitialFormData={setInitialFormData}
                  refetchDyeingPrintingData={refetchDyeingPrintingData}
                  handleClickOpen={handleClickOpen}
                />
              </DialogContent>
            </Dialog>

            {/* <Box
              sx={{
                height: 500,
                width: 'inherit',
                '& .actions': {
                  color: 'text.secondary'
                },
                '& .textPrimary': {
                  color: 'text.primary'
                }
              }}
            >
              <DataGrid
                // {...data}
                rows={initialRows}
                columns={columns}
                rowLength={100}
                sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: 'primary.light',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main'
                  }
                }}
              />
            </Box> */}
            {/* <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} /> */}
          </Grid>
        </Grid>
      </Card>
      {/* </div> */}
    </>
  );
};

export default Dyeing;
