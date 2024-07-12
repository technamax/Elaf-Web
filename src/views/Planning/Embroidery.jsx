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
  InputLabel,
  Select,
  OutlinedInput,
  Box,
  ButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton
} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import embroidery from '../../assets/images/planningicons/embroidery.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DyeingPrintingAssignVendor from 'components/DyeingPrintingAssignVendor';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import EmbroideryAssignVendor from 'components/EmbroideryAssignVendor';

import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetEmbroideryListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetComponentsByBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetFabricByComponentsAndBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainCard from 'ui-component/cards/MainCard';
import loadingGif from '../../assets/images/loading1.svg';
import { useUser } from 'context/User';
import '../../assets/scss/style.scss';

const Embroidery = () => {
  const theme = useTheme();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const { enqueueSnackbar } = useSnackbar();
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading

  const [formData, setFormData] = useState({
    embroideryId: 0,
    designId: '',
    batchNo: '',
    planningHeaderId: '',
    componentId: '',
    fabricId: '',
    vendorId: '',
    poPcs: '', // coming from getcollectionapi
    baseColorId: '', // coming from getcollectionapi
    baseColorName: '',
    colorId: '', //from dying screen coming from fabricAPi
    availableQty: '',
    noOfHead: '',
    repeats: '',
    cuttingSize: '',
    itemsPerRepeat: '',
    totalPcs: '', //repeat*itemsPerRepeat
    totalAmount: '', //
    threadStiches: '',
    threadRate: '',
    threadAmount: '',
    tillaStiches: '',
    tilaRate: '',
    tilaAmount: '',
    sequence: '',
    sequenceRate: '',
    sequenceAmount: '',
    isSolving: false,
    solvingLayers: 0,
    solvingInMeters: '',
    solvingRate: 0,
    solvingAmount: '',
    // additional:  '',
    threadAdditional: [],

    costPerComponent: '', //
    // costPerComponent:  '', //
    createdBy: user.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });

  useEffect(() => {
    setFormData({
      embroideryId: initialData?.embroideryId || 0,
      designId: initialData?.designId || '',
      batchNo: initialData?.batchNo || '',
      planningHeaderId: initialData?.planningHeaderId || '',
      componentId: initialData?.componentId || '',
      fabricId: initialData?.fabricId || '',
      vendorId: initialData?.vendorId || '',
      poPcs: initialData?.poPcs || '', // coming from getcollectionapi
      baseColorId: initialData?.baseColorId || '', // coming from getcollectionapi
      baseColorName: initialData?.baseColorName || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      availableQty: initialData?.availableQty || '',
      noOfHead: initialData?.noOfHead || '',
      repeats: initialData?.repeats || '',
      cuttingSize: initialData?.cuttingSize || '',
      itemsPerRepeat: initialData?.itemsPerRepeat || '',
      totalPcs: initialData?.totalPcs || '', //repeat*itemsPerRepeat
      totalAmount: initialData?.totalAmount || '', //
      threadStiches: initialData?.threadStiches || '',
      threadRate: initialData?.threadRate || '',
      threadAmount: initialData?.threadAmount || '',
      tillaStiches: initialData?.tillaStiches || '',
      tilaRate: initialData?.tilaRate || '',
      tilaAmount: initialData?.tilaAmount || '',
      sequence: initialData?.sequence || '',
      sequenceRate: initialData?.sequenceRate || '',
      sequenceAmount: initialData?.sequenceAmount || '',
      isSolving: initialData?.isSolving || false,
      solvingLayers: initialData?.solvingLayers || 0,
      solvingInMeters: initialData?.solvingInMeters || '',
      solvingRate: initialData?.solvingRate || 0,
      solvingAmount: initialData?.solvingAmount || '',
      threadAdditional: initialData?.threadAdditional || [],
      costPerComponent: initialData?.costPerComponent || '', //
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const additionals = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
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

  const { data: embroideryList, refetch: refetchEmbroideryList } =
    useGetEmbroideryListByBatchNoQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  const { data: componentsByBatch } = useGetComponentsByBatchNoQuery(
    formData.planningHeaderId,
    {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    }
  );
  console.log('formData.planningHeaderId', formData.planningHeaderId);
  console.log('collectionData', collectionData);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [heads, setHeads] = useState([]);
  const [colors, setColors] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [components, setComponents] = useState([]);

  console.log('batchList', batchList);
  console.log('formData', formData);

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
      setColors(fabricData.result);
      // refetchBatches();
    }
  }, [colorData]);
  useEffect(() => {
    if (componentsByBatch) {
      setComponents(componentsByBatch.result);
    }
  }, [componentsByBatch]);
  useEffect(() => {
    if (embroideryList) {
      setIsLoading(false);

      setInitialRows(
        embroideryList.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [embroideryList, refetchEmbroideryList]);
  console.log('embroideryList', embroideryList);
  console.log('initialRows', initialRows);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);
      setHeads(data.noOfHeadsList);
    }
  }, [lookupData]);

  const collectionList = collectionData?.result || [];

  useEffect(() => {
    const calculateTotalPcs = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const itemsPerRepeat = parseFloat(formData.itemsPerRepeat) || 0;
      return (repeats * itemsPerRepeat).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs()
    }));
    const calculateThread = () => {
      const stitches = parseFloat(formData.threadStiches) || 0;
      const rate = parseFloat(formData.threadRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      threadAmount: calculateThread()
    }));
    const calculateTilla = () => {
      const stitches = parseFloat(formData.tillaStiches) || 0;
      const rate = parseFloat(formData.tilaRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      tilaAmount: calculateTilla()
    }));
    const calculateSequence = () => {
      const stitches = parseFloat(formData.sequence) || 0;
      const rate = parseFloat(formData.sequenceRate) || 0;
      const heads = parseFloat(formData.noOfHead) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      sequenceAmount: calculateSequence()
    }));
    const calculateInMeters = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const noOfHead = parseFloat(formData.noOfHead) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return (((repeats * noOfHead * 13) / 39.37) * layers).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingInMeters: calculateInMeters()
    }));
    const calculateSolvingAmount = () => {
      const solvingInMeters = parseFloat(formData.solvingInMeters) || 0;
      const solvingRate = parseFloat(formData.solvingRate) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return (solvingInMeters * solvingRate).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingAmount: calculateSolvingAmount()
    }));
    const calculateTotalAmount = () => {
      const thread = parseFloat(formData.threadAmount) || 0;
      const tilla = parseFloat(formData.tilaAmount) || 0;
      const sequence = parseFloat(formData.sequenceAmount) || 0;
      const solving = parseFloat(formData.solvingAmount) || 0;
      return (thread + tilla + sequence + solving).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalAmount() || 0
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const totalPcs = parseFloat(formData.totalPcs) || 0;

      return (totalAmount / totalPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent() || 0
    }));
  }, [
    formData.threadAmount,
    formData.totalAmount,
    formData.sequenceAmount,
    formData.solvingAmount,
    formData.repeats,
    formData.tilaAmount,
    formData.itemsPerRepeat,
    formData.threadRate,
    formData.threadStiches,
    formData.noOfHead,
    formData.tilaRate,
    formData.tillaStiches,
    formData.sequenceRate,
    formData.sequence,
    formData.solvingLayers,
    formData.solvingInMeters,
    formData.solvingRate
  ]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setSelectedCollectionId(value);
      setLoading(true);
      setInitialRows([]);
      setIsLoading(true);
      setFormData({
        ...formData,
        collectionId: value,
        designId: '',
        batchNo: '',
        planningHeaderId: '',
        componentId: '',
        fabricId: '',
        vendorId: '',
        poPcs: '', // coming from getcollectionapi
        baseColorId: '', // coming from getcollectionapi
        baseColorName: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        noOfHead: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        // additional:  '',
        threadAdditional: [],

        costPerComponent: '' //
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

        batchNo: '',
        planningHeaderId: '',
        componentId: '',
        fabricId: '',
        vendorId: '',
        poPcs: '', // coming from getcollectionapi
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        noOfHead: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        // additional:  '',
        threadAdditional: [],

        costPerComponent: '' //
      });
    } else if (name === 'colorId') {
      const selectedcolor = colors.find((color) => color.colorId === value);
      setFormData({
        ...formData,
        colorId: value,
        availableQty: selectedcolor ? selectedcolor.total : '',
        cuttingSize: selectedcolor ? selectedcolor.cuttingSize : '',
        repeats: selectedcolor ? selectedcolor.repeats : '',
        noOfHead: selectedcolor ? selectedcolor.noOfHeads : ''
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : '',
        componentId: '',
        fabricId: '',
        vendorId: '',
        // baseColorId: '', // coming from getcollectionapi
        // baseColorName: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        noOfHead: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        // additional:  '',
        threadAdditional: [],

        costPerComponent: '' //
      });

      setAccordionExpanded(true);
      setLoading(false);
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };
  const [formErrors, setFormErrors] = useState({});

  const handleSave = async () => {
    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }

    try {
      const response = await axios.post(
        'https://gecxc.com:449/api/Embroidery/SaveEmbroidery',
        {
          ...formData,
          threadAdditional: formData.threadAdditional.join(', ')
        }
      );

      console.log('Save response:', response.data);

      if (!response.data.success) {
        enqueueSnackbar(
          `${response.data.message}!`,

          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar('Embroidery saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }

      // fetchEmbroidery();
      // setInitialData({});
      // setAccordionExpanded(false);
      setFormData((prevFormData) => ({
        embroideryId: 0,
        designId: prevFormData.designId,
        batchNo: prevFormData.batchNo,
        planningHeaderId: prevFormData.planningHeaderId,
        componentId: '',
        fabricId: '',
        vendorId: '',
        poPcs: prevFormData.poPcs, // coming from getcollectionapi
        baseColorId: prevFormData.baseColorId, // coming from getcollectionapi
        baseColorName: prevFormData.baseColorName,
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        noOfHead: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        threadAdditional: [],
        costPerComponent: '', //
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      refetchEmbroideryList();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Embroidery not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  // const validateForm = () => {
  //   const errors = {};
  //   if (!formData.fabricId) {
  //     errors.fabricId = 'fabricId is required';
  //   }
  //   if (!formData.colorId) {
  //     errors.colorId = 'colorId is required';
  //   }
  //   if (!formData.vendorId) {
  //     errors.vendorId = 'vendorId is required';
  //   }
  //   if (!formData.componentId) {
  //     errors.componentId = 'componentId is required';
  //   }
  //   if (!formData.noOfHead) {
  //     errors.noOfHead = 'noOfHead is required';
  //   }
  //   if (!formData.itemsPerRepeat) {
  //     errors.itemsPerRepeat = 'itemsPerRepeat is required';
  //   }
  //   if (!formData.threadStiches) {
  //     errors.threadStiches = 'threadStiches is required';
  //   }
  //   if (!formData.threadRate) {
  //     errors.threadRate = 'threadRate is required';
  //   }
  //   if (!formData.tillaStiches) {
  //     errors.tillaStiches = 'tillaStiches is required';
  //   }
  //   if (!formData.tilaRate) {
  //     errors.tilaRate = 'tilaRate is required';
  //   }
  //   if (!formData.sequence) {
  //     errors.sequence = 'sequence is required';
  //   }
  //   if (!formData.sequenceRate) {
  //     errors.sequenceRate = 'sequenceRate is required';
  //   }
  //   return errors;
  // };
  console.log('initialRows', initialRows);

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
    { field: 'designNo', headerName: 'Design' },
    { field: 'batchNo', headerName: 'Batch No.' },
    { field: 'componentName', headerName: 'Component ' },
    { field: 'fabricName', headerName: 'Fabric ' },
    { field: 'vendorId', headerName: 'Vendor' },
    { field: 'poPcs', headerName: 'Po Pcs' },
    // { field: 'baseColorName', headerName: 'Base Color' },
    { field: 'colourName', headerName: 'Color' },
    { field: 'noOfHeadsName', headerName: 'No. Of Heads' },
    { field: 'repeats', headerName: 'Repeats' },
    // { field: 'assignedRepeats', headerName: 'Assigned Repeats' },
    { field: 'cuttingSize', headerName: 'Cutting Size' },
    { field: 'itemsPerRepeat', headerName: 'Items Per Repeat' },
    { field: 'availableQty', headerName: 'Available Qty' },
    { field: 'assignedQty', headerName: 'Assigned Qty' },
    { field: 'totalPcs', headerName: 'Total Pcs' },
    { field: 'requiredPcs', headerName: 'Assigned Pcs' },
    // { field: 'threadStiches', headerName: 'Thread Stitches' },
    // { field: 'threadRate', headerName: 'Thread Rate' },
    // { field: 'threadAmount', headerName: 'Thread Amount' },
    // { field: 'tillaStiches', headerName: 'Tilla Stitches' },
    // { field: 'tilaRate', headerName: 'Tilla Rate' },
    // { field: 'tilaAmount', headerName: 'Tilla Amount' },
    // { field: 'sequence', headerName: 'sequence' },
    // { field: 'sequenceRate', headerName: 'Sequence Rate' },
    // { field: 'sequenceAmount', headerName: 'Sequence Amount' },
    // { field: 'isSolving', headerName: 'Is Solving' },
    // { field: 'solvingLayers', headerName: 'Solving Layers' },
    // { field: 'solvingInMeters', headerName: 'Solving In Meters' },
    // { field: 'solvingRate', headerName: 'Solving Rate' },
    // { field: 'solvingAmount', headerName: 'Solving Amount' },
    // { field: 'threadAdditional', headerName: 'ThreadAdditional' },
    // { field: 'costPerComponent', headerName: 'Cost Per Component' }
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
  const deleteApi = `https://gecxc.com:449/api/Embroidery/DeleteEmbroideryById?embroideryId=`;

  return (
    <>
      {/* <div className="CardHeader"> */}
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={
            <Avatar src={embroidery} sx={{ background: 'transparent' }} />
          }
          title="Embroidery  "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          {' '}
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
                ...(formData.repeatsInMtr !== '' && {
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
              required
              error={!!formErrors.componentId}
              helperText={formErrors.componentId}
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
              required
              error={!!formErrors.fabricId}
              helperText={formErrors.fabricId}
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
              required
              error={!!formErrors.vendorId}
              helperText={formErrors.vendorId}
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
              required
              error={!!formErrors.colorId}
              helperText={formErrors.colorId}
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
              label="Available Quantity"
              fullWidth
              size="small"
              name="availableQty"
              type="number"
              value={formData.availableQty}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
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
              label="Repeats"
              type="number"
              fullWidth
              size="small"
              name="repeats"
              value={formData.repeats}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              sx={(theme) => ({
                ...(formData.repeats !== '' && {
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
              fullWidth
              select
              label="Heads"
              defaultValue=""
              size="small"
              name="noOfHead"
              value={formData.noOfHead}
              onChange={handleChange}
              required
              error={!!formErrors.noOfHead}
              helperText={formErrors.noOfHead}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              sx={(theme) => ({
                ...(formData.noOfHead !== '' && {
                  '.css-9ngl8c-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                    {
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
              {heads.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Cutting Size"
              fullWidth
              size="small"
              name="cuttingSize"
              type="number"
              value={formData.cuttingSize}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              sx={(theme) => ({
                ...(formData.cuttingSize !== '' && {
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
              label="itemsPerRepeat"
              fullWidth
              type="number"
              size="small"
              name="itemsPerRepeat"
              value={formData.itemsPerRepeat}
              onChange={handleChange}
              required
              error={!!formErrors.itemsPerRepeat}
              helperText={formErrors.itemsPerRepeat}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              sx={(theme) => ({
                ...(formData.itemsPerRepeat !== '' && {
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
              label="total Pcs."
              fullWidth
              size="small"
              type="number"
              name="totalPcs"
              value={formData.totalPcs}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4.5} textAlign="right" sx={{ mt: 2 }}>
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Card>
      <Grid item xs={12} md={12}>
        <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      </Grid>

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
          title="View Embroidery "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>{' '}
        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid sx={{ marginTop: 2 }} item xs={12}>
            {' '}
            {/* {loading ? (
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
            ) : ( */}
            <ReuseableDataGrid
              iColumns={columns}
              initialRows={initialRows}
              setInitialData={setInitialData}
              deleteApi={deleteApi}
              deleteBy="embroideryId"
              refetch={refetchEmbroideryList}
              setAccordionExpanded={setAccordionExpanded}
              fileName="Embroidery List"
              isLoading={isLoading}
            />
            {/* )} */}
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
                  {'Assign Vendors '}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <EmbroideryAssignVendor
                  initialFormData={initialFormData}
                  setInitialFormData={setInitialFormData}
                  refetchDyeingPrintingData={refetchEmbroideryList}
                  handleClickOpen={handleClickOpen}
                />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Card>
      {/* </Card> */}
      {/* </div> */}
    </>
  );
};

export default Embroidery;
