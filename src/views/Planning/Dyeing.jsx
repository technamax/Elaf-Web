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
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

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
// project imports
import MainCard from 'ui-component/cards/MainCard';

const Dyeing = () => {
  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    dpId: 0,
    designId: '',
    batchNo: '',
    planningHeaderId: '',
    fabricId: '',
    colorId: '',
    color: '',
    vendorId: '',
    processType: '',
    AvailableQty: '',
    Shrinkage: '',
    Wastage: '',
    OutputQty: '',
    UOM: '',
    uomId: '',
    RatePerUOM: '',
    UnitRatePerPo: '',
    TotalExclGst: '',
    GST: '0',
    // GSTAmount: '',
    TotalIncludingGst: '',
    createdBy: 0,
    poPcs: '',
    baseColorName: ''
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
      vendorId: initialData?.vendorId || '',
      processType: initialData?.processType || '',
      AvailableQty: initialData?.availableQty || '',
      Shrinkage: initialData?.shrinkage || '',
      Wastage: initialData?.wastage || '',
      OutputQty: initialData?.outputQty || 0,
      UOM: initialData?.uom || 0,
      uomId: initialData?.uomId || '',
      RatePerUOM: initialData?.ratePerUOM || 0,
      UnitRatePerPo: initialData?.unitRatePerPo || '',
      TotalExclGst: initialData?.totalExclGst || '',
      GST: initialData?.gst || '',
      TotalIncludingGst: initialData?.totalIncludingGst || '',
      createdBy: initialData?.createdBy || 0,
      poPcs: initialData?.poPcs || 0,
      baseColorName: initialData?.baseColorName || 0
    });
  }, [initialData]);
  const { enqueueSnackbar } = useSnackbar();

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
    formData.planningHeaderId,
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
    setAccordionExpanded(isExpanded);
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
  useEffect(() => {
    if (lookupData) {
      setVendors(lookupData.result[0].vendorList);
    }
  }, [fabricData]);
  console.log(vendors);
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
      setFormData({
        ...formData,
        collectionId: value
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
        baseColorName: selectedDesign ? selectedDesign.colorName : ''
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : ''
      });
      // Fetch data from API when batchNo changes
    } else if (name === 'fabricId') {
      const selectedFabric = Fabrications.find(
        (fabric) => fabric.fabricId === value
      );
      console.log('Selected Fabric:', Fabrications); // Add this line to check selected fabric
      setFormData({
        ...formData,
        fabricId: value
        // OutputQty: selectedFabric ? selectedFabric.total : ''
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
        AvailableQty: selectedColor.total,
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
    }
  };

  // const fetchFabricColorData = async (fabricId) => {
  //   try {
  //     const response = await axios.get(
  //       `https://gecxc.com:4041/api/DyeingPrinting/GetFabricColorFromPrePlanningByFabricId?fabricId=${fabricId}`
  //     );
  //     const data = response.data.result;
  //     console.log('Dyeing Color Data', data);

  //     if (data.length > 0) {
  //       const fabricInfo = data[0]; // Assuming only one fabric info is returned

  //       // Update form data with fabric info
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         Shrinkage: fabricInfo.shrinkage.toFixed(2), // Assuming shrinkage is returned as a decimal
  //         Wastage: fabricInfo.wastage.toFixed(2), // Assuming wastage is returned as a decimal
  //         UOM: fabricInfo.uom,
  //         AvailableQty: fabricInfo.total.toString() // Convert total to string to set in TextField
  //         // Assuming uomId is not needed in the form
  //       }));
  //     }

  //     const colorOptions = data.map((item) => ({
  //       label: item.color,
  //       value: item.colorId
  //     }));

  //     setColors(colorOptions);
  //     // Assuming the first color is automatically selected
  //     if (colorOptions.length > 0) {
  //       const firstColor = colorOptions[0];
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         ColorId: firstColor.value,
  //         color: firstColor.label
  //       }));
  //       setAccordionExpanded(true);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching fabric color data:', error);
  //   }
  // };
  useEffect(() => {
    const calculateOutputQty = () => {
      const AvailableQty = parseFloat(formData.AvailableQty) || 0;
      const shrinkage = parseFloat(formData.Shrinkage) || 0;
      const wastage = parseFloat(formData.Wastage) || 0;
      return (AvailableQty * (100 - (shrinkage + wastage))) / 100;
    };

    const calculateTotalExclGst = () => {
      const quantity = parseFloat(formData.AvailableQty) || 0;
      const rate = parseFloat(formData.RatePerUOM) || 0;
      return quantity * rate;
    };

    const calculateTotalWithGst = (totalExclGst, gst) => {
      return totalExclGst * (1 + gst / 100);
    };

    const outputQty = calculateOutputQty();
    const totalExclGst = calculateTotalExclGst();
    const gst = parseFloat(formData.GST) || 0;
    const totalIncludingGst = calculateTotalWithGst(totalExclGst, gst);
    const poPcs = parseFloat(formData.poPcs) || 0;
    const unitRatePerPo = poPcs ? totalIncludingGst / poPcs : 0;

    setFormData((prevData) => ({
      ...prevData,
      OutputQty: outputQty,
      TotalExclGst: totalExclGst.toFixed(2),
      TotalIncludingGst: totalIncludingGst.toFixed(2),
      UnitRatePerPo: unitRatePerPo.toFixed(2)
    }));
  }, [
    formData.AvailableQty,
    formData.Shrinkage,
    formData.Wastage,
    formData.RatePerUOM,
    formData.GST,
    formData.poPcs,
    formData.UnitRatePerPo
  ]);

  const handleSave = async () => {
    // Validate required fields
    if (!formData.designId || !formData.batchNo) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/DyeingPrinting/SaveDyeingPrinting',
        formData
      );

      if (response.status === 200) {
        console.log('Data saved successfully:', response.data);
        enqueueSnackbar('Dyeing saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
        setFormData((prevFormData) => ({
          designId: prevFormData.designId,
          planningHeaderId: prevFormData.planningHeaderId,
          batchNo: prevFormData.batchNo,
          dpId: 0,
          fabricId: '',
          colorId: '',
          color: '',
          vendorId: '',
          processType: '',
          AvailableQty: '',
          Shrinkage: '',
          Wastage: '',
          OutputQty: '',
          UOM: '',
          uomId: '',
          RatePerUOM: '',
          UnitRatePerPo: '',
          TotalExclGst: '',
          GST: '0',
          // GSTAmount: '',
          TotalIncludingGst: '',
          createdBy: 0,
          poPcs: '',
          baseColorName: ''
          // planningHeaderId: ''
        }));
        refetchDyeingPrintingData();
        setInitialData((prevFormData) => ({
          designId: prevFormData.designId,
          planningHeaderId: prevFormData.planningHeaderId,
          batchNo: prevFormData.batchNo,
          dpId: 0,
          fabricId: '',
          colorId: '',
          color: '',
          vendorId: '',
          processType: '',
          AvailableQty: '',
          Shrinkage: '',
          Wastage: '',
          OutputQty: '',
          UOM: '',
          uomId: '',
          RatePerUOM: '',
          UnitRatePerPo: '',
          TotalExclGst: '',
          GST: '0',
          // GSTAmount: '',
          TotalIncludingGst: '',
          createdBy: 0,
          poPcs: '',
          baseColorName: ''
          // planningHeaderId: ''
        }));
        // Handle success (e.g., show a success message or reset the form)
      } else {
        console.error('Failed to save data:', response.data);
        enqueueSnackbar('Dyeing not saved successfully!', {
          variant: 'error',
          autoHideDuration: 5000
        });
        // Handle error (e.g., show an error message)
      }
      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error (e.g., show an error message)
    }
  };

  // const handleAutocompleteChange = (event, newValue, name) => {
  //   setFormData({
  //     ...formData,
  //     [name]: newValue ? newValue.value : ''
  //   });
  // };
  const design = [
    {
      value: 'D',
      label: 'Dyeing'
    },
    {
      value: 'P',
      label: 'Printing'
    }
  ];
  const handleEdit = (row) => {
    setInitialData(row);
  };

  console.log('initialData', initialData);
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=${id}`
      );

      refetchDyeingPrintingData();
      console.log('deleted');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    // Handle delete logic
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
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },

    {
      field: 'processType',
      headerName: 'Process Type'
    },
    {
      field: 'uom',
      headerName: 'uom'
    },
    {
      field: 'availableQty',
      headerName: 'Available Quantitity'
    },
    {
      field: 'shrinkage',
      headerName: 'Shrinkage'
    },
    {
      field: 'wastage',
      headerName: 'Wastage'
    },
    {
      field: 'outputQty',
      headerName: 'Output Qty'
    },
    {
      field: 'ratePerUOM',
      headerName: 'Rate'
    },
    {
      field: 'totalExclGst',
      headerName: 'Total Excl. Gst'
    },
    {
      field: 'gst',
      headerName: 'GST'
    },
    {
      field: 'totalIncludingGst',
      headerName: 'Total Including GST'
    },
    {
      field: 'unitRatePerPo',
      headerName: 'UnitRate Per Po.'
    },

    {
      field: 'Action',
      headerName: 'Actions',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup size="small" variant="text">
            <IconButton
              aria-label="Edit"
              // color="primary"
              onClick={() => handleEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => handleDelete(params.row.dpId)}
            >
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )
    }
  ];

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
          avatar={<Avatar src={dyeing} sx={{ background: 'transparent' }} />}
          title="Dyeing "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={2}
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
                  AvailableQty: newValue ? newValue.total : '',
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
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<AddOutlinedIcon />}
          title="Add Dyeing "
          titleTypographyProps={{ style: { color: 'white' } }}
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
          ></AccordionSummary>
          <AccordionDetails>
            {/* <FormControl> */}
            <Grid
              container
              spacing={2}
              width="Inherit"
              sx={{ paddingY: 2, paddingX: 2 }}
            >
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Vendor Name"
                  size="small"
                  name="vendorId"
                  value={formData.vendorId}
                  onChange={handleChange} // Change handleChange to handleAutocompleteChange
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
                  fullWidth
                  select
                  label="Process Type"
                  size="small"
                  name="processType"
                  value={formData.processType}
                  onChange={handleChange} // Change handleChange to handleAutocompleteChange
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
                  label="AvailableQty"
                  fullWidth
                  size="small"
                  type="number"
                  name="AvailableQty"
                  value={formData.AvailableQty}
                  onChange={handleChange}
                  // focused
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
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
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Output Qty"
                  fullWidth
                  size="small"
                  name="OutputQty"
                  type="number"
                  value={formData.OutputQty}
                  onChange={handleChange}
                  // focused
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  type="number"
                  name="RatePerUOM"
                  value={formData.RatePerUOM}
                  onChange={handleChange}
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
                />{' '}
              </Grid>

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
              <Grid item xs={12} md={1.5}>
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
              </Grid>
              <Grid item xs={12} md={12} textAlign="right">
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
          </AccordionDetails>
        </Accordion>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

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
            <Box
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
            </Box>
            {/* <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} /> */}
          </Grid>
        </Grid>
      </Card>
      {/* </div> */}
    </>
  );
};

export default Dyeing;
