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
  AccordionSummary
} from '@mui/material';
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
  useGetSchffiliListByBatchNoQuery,
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
import loadingGif from '../../assets/images/loading1.svg';
import { useUser } from 'context/User';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Schiffli = () => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);

  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    schiffiliId: 0,
    designId: '',
    planningHeaderId: 0,
    batchNo: '',
    componentId: '',
    poPcs: '',
    baseColorName: '',
    fabricId: '',
    vendorId: '',
    colorId: '', //from dying screen coming from fabricAPi
    availableQty: '',
    thaanQty: 0,
    operatingMachineId: 0,
    operatingMachine: '',
    workingHeadId: 0,
    cuttingSize: '',
    rate: '',
    costPerComponent: '',
    totalEmbroidry: 0,
    noOfItemPerThaan: 0,
    noOfStichesPerYard: 0,
    amountPerYard: 0,
    totalPcs: 0,
    laserCut: false,
    laserCutRate: 0,
    pcsForLaserCut: 0,
    totalAmount: 0,

    createdBy: user.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      ...formData,
      schiffiliId: initialData.schiffiliId || 0,
      designId: initialData?.designId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      batchNo: initialData?.batchNo || '',
      componentId: initialData?.componentId || '',
      poPcs: initialData?.poPcs || '',
      // baseColorName: initialData?.baseColorName || '',
      fabricId: initialData?.fabricId || '',
      vendorId: initialData?.vendorId || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      availableQty: initialData?.availableQty || '',
      thaanQty: initialData?.thaanQty || 0,
      operatingMachineId: initialData?.operatingMachineId || 0,
      operatingMachine: initialData?.operatingMachineName || '',
      workingHeadId: initialData?.workingHeadId || 0,
      cuttingSize: initialData?.cuttingSize || '',
      rate: initialData?.rate || '',
      costPerComponent: initialData?.costPerComponent || '',
      totalEmbroidry: initialData?.totalEmbroidry || 0,
      noOfItemPerThaan: initialData?.noOfItemPerThaan || 0,
      noOfStichesPerYard: initialData?.noOfStichesPerYard || 0,
      amountPerYard: initialData?.amountPerYard || 0,
      totalPcs: initialData?.totalPcs || 0,
      laserCut:
        initialData?.laserCutRate || initialData?.pcsForLaserCut ? true : false,
      laserCutRate: initialData?.laserCutRate || 0,
      pcsForLaserCut: initialData?.pcsForLaserCut || 0,
      totalAmount: initialData?.totalAmount || 0,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };
  const [loading, setLoading] = useState(false); // State for loading

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

  const { data: schiffliList, refetch: refetchSchiffliList } =
    useGetSchffiliListByBatchNoQuery(formData.planningHeaderId, {
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
  console.log('schiffliList', schiffliList);

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [vendors, setVendors] = useState([]);

  const [operatingMachineList, setOperatingMachineList] = useState([]);
  const [workingHeadList, setWorkingHeadList] = useState([]);

  const [colors, setColors] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [components, setComponents] = useState([]);

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
    if (schiffliList) {
      setIsLoading(false);

      setInitialRows(
        schiffliList.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [schiffliList, refetchSchiffliList]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);

      setOperatingMachineList(data.operatingMachineList);
      setWorkingHeadList(data.workingHeadList);
    }
  }, [lookupData]);

  // console.log('designList', designList);
  // console.log('selectedCollectionId', selectedCollectionId);
  // console.log('batchList', batchList);
  // console.log('uom', uoms);
  // console.log('Fabrications', Fabrications);
  console.log('initialRows', initialRows);
  // console.log('components', components);

  const collectionList = collectionData?.result || [];
  // console.log('collectionList', collectionList);

  useEffect(() => {
    const calculateTotalEmbroidey = () => {
      const thaanQty = parseFloat(formData.thaanQty) || 0;
      const operatingMachine = parseFloat(formData.operatingMachine) || 0;
      return (thaanQty * operatingMachine).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalEmbroidry: calculateTotalEmbroidey()
    }));
    const calculateTotalPcs = () => {
      const thaanQty = parseFloat(formData.thaanQty) || 0;
      const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;

      return (thaanQty * noOfStichesPerYard).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs()
    }));
    const calculateAmountPerYard = () => {
      const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;
      const rate = parseFloat(formData.rate) || 0;

      return ((noOfStichesPerYard / 1000) * rate).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      amountPerYard: calculateAmountPerYard()
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const totalPcs = parseFloat(formData.totalPcs) || 0;

      return (totalAmount / totalPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent()
    }));
    const calculateTotalamount = () => {
      const amountPerYard = parseFloat(formData.amountPerYard) || 0;
      const totalEmbroidry = parseFloat(formData.totalEmbroidry) || 0;
      const laserCutRate = parseFloat(formData.laserCutRate) || 0;
      const pcsForLaserCut = parseFloat(formData.pcsForLaserCut) || 0;
      return (
        amountPerYard * totalEmbroidry +
        pcsForLaserCut * laserCutRate
      ).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalamount()
    }));
  }, [
    formData.thaanQty,
    formData.operatingMachine,
    formData.noOfStichesPerYard,
    formData.rate,
    formData.totalAmount,
    formData.totalPcs,
    formData.amountPerYard,
    formData.totalEmbroidry,
    formData.laserCutRate,
    formData.pcsForLaserCut
  ]);

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: checked
  //   }));
  // };
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
        planningHeaderId: 0,
        batchNo: '',
        componentId: '',
        poPcs: '',
        baseColorName: '',
        fabricId: '',
        vendorId: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        thaanQty: 0,
        operatingMachineId: 0,
        operatingMachine: '',
        workingHeadId: 0,
        cuttingSize: '',
        rate: '',
        costPerComponent: '',
        totalEmbroidry: 0,
        noOfItemPerThaan: 0,
        noOfStichesPerYard: 0,
        amountPerYard: 0,
        totalPcs: 0,
        laserCut: false,
        laserCutRate: 0,
        pcsForLaserCut: 0,
        totalAmount: 0

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
        poPcs: '',
        fabricId: '',
        vendorId: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        thaanQty: 0,
        operatingMachineId: 0,
        operatingMachine: '',
        workingHeadId: 0,
        cuttingSize: '',
        rate: '',
        costPerComponent: '',
        totalEmbroidry: 0,
        noOfItemPerThaan: 0,
        noOfStichesPerYard: 0,
        amountPerYard: 0,
        totalPcs: 0,
        laserCut: false,
        laserCutRate: 0,
        pcsForLaserCut: 0,
        totalAmount: 0
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : '',

        componentId: '',
        // baseColorName: '',
        fabricId: '',
        vendorId: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        thaanQty: 0,
        operatingMachineId: 0,
        operatingMachine: '',
        workingHeadId: 0,
        cuttingSize: '',
        rate: '',
        costPerComponent: '',
        totalEmbroidry: 0,
        noOfItemPerThaan: 0,
        noOfStichesPerYard: 0,
        amountPerYard: 0,
        totalPcs: 0,
        laserCut: false,
        laserCutRate: 0,
        pcsForLaserCut: 0,
        totalAmount: 0
      });
      setAccordionExpanded(true);
      setLoading(false);
    } else if (name === 'colorId') {
      const selectedcolor = colors.find((color) => color.colorId === value);
      setFormData({
        ...formData,
        colorId: value,
        availableQty: selectedcolor ? selectedcolor.total : '',
        cuttingSize: selectedcolor ? selectedcolor.cuttingSize : '',
        repeats: selectedcolor ? selectedcolor.repeats : ''
      });
    } else if (name === 'operatingMachineId') {
      const selectedMachine = operatingMachineList.find(
        (machine) => machine.lookUpId === value
      );
      setFormData({
        ...formData,
        operatingMachineId: value,
        operatingMachine: selectedMachine ? selectedMachine.lookUpName : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log('colors', colors);
  const [formErrors, setFormErrors] = useState({});

  const handleSave = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:449/api/Schiffli/SaveSchiffili',
        formData
      );

      // Handle the response if needed
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

      // Assuming designId, planningHeaderId, and batchNo are part of the formData state
      setFormData((prevFormData) => ({
        designId: prevFormData.designId,
        planningHeaderId: prevFormData.planningHeaderId,
        batchNo: prevFormData.batchNo,
        baseColorName: prevFormData.baseColorName,
        schiffiliId: 0,
        componentId: '',
        poPcs: prevFormData.poPcs,
        fabricId: '',
        vendorId: '',
        colorId: '', // from dying screen coming from fabricAPI
        availableQty: '',
        thaanQty: 0,
        operatingMachineId: 0,
        operatingMachine: '',
        workingHeadId: 0,
        cuttingSize: '',
        rate: '',
        costPerComponent: '',
        totalEmbroidry: 0,
        noOfItemPerThaan: 0,
        noOfStichesPerYard: 0,
        amountPerYard: 0,
        totalPcs: 0,
        laserCut: false,
        laserCutRate: 0,
        pcsForLaserCut: 0,
        totalAmount: 0,
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      refetchSchiffliList();

      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Schiffili not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
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
    if (!formData.vendorId) {
      errors.vendorId = 'vendorId is required';
    }
    if (!formData.componentId) {
      errors.componentId = 'componentId is required';
    }
    if (!formData.thaanQty) {
      errors.thaanQty = 'thaanQty is required';
    }
    if (!formData.workingHeadId) {
      errors.workingHeadId = 'workingHeadId is required';
    }
    if (!formData.rate) {
      errors.rate = 'rate is required';
    }
    if (!formData.operatingMachineId) {
      errors.operatingMachineId = 'operatingMachineId is required';
    }
    if (!formData.noOfStichesPerYard) {
      errors.noOfStichesPerYard = 'noOfStichesPerYard is required';
    }
    if (!formData.noOfItemPerThaan) {
      errors.noOfItemPerThaan = 'noOfItemPerThaan is required';
    }
    // if (!formData.sequence) {
    //   errors.sequence = 'sequence is required';
    // }
    // if (!formData.sequenceRate) {
    //   errors.sequenceRate = 'sequenceRate is required';
    // }
    return errors;
  };
  console.log('formData', formData);

  const columns = [
    {
      field: 'componentName',
      headerName: 'Component'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },

    {
      field: 'colourName',
      headerName: 'Color'
    },
    {
      field: 'thaanQty',
      headerName: 'Thaan Quantity'
    },
    {
      field: 'availableQty',
      headerName: 'Available Quantitity'
    },
    {
      field: 'operatingMachineName',
      headerName: 'Operating Machine'
    },
    {
      field: 'noOfHeadsName',
      headerName: 'Working Head'
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size'
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'noOfStichesPerYard',
      headerName: 'Stiches Per Yard'
    },
    {
      field: 'noOfItemPerThaan',
      headerName: 'Item Per Thaan'
    },
    {
      field: 'totalEmbroidry',
      headerName: 'Total Embroidry'
    },
    {
      field: 'amountPerYard',
      headerName: 'Amount Per Yard'
    },

    {
      field: 'totalPcs',
      headerName: 'Total Pcs'
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount'
    },
    {
      field: 'costPerComponent',
      headerName: 'Cost Per Component'
    },
    {
      field: 'laserCutRate',
      headerName: 'LaserCut Rate'
    },
    {
      field: 'pcsForLaserCut',
      headerName: 'Laser Cut Pcs.'
    }
  ];
  const deleteApi = `https://gecxc.com:449/api/Schiffli/DeleteSchiffiById?schiffiId=`;

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<Avatar src={schiffli} sx={{ background: 'transparent' }} />}
          title="Schiffli "
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
              // onChange={handleChange}
              disabled
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
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
            />
          </Grid>
          {/* <Grid item xs={12} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid> */}
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<AddOutlinedIcon />}
          title="Add Schiffli "
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
              spacing={1}
              width="Inherit"
              sx={{ paddingY: 2, paddingX: 2 }}
            >
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
                    <MenuItem
                      key={option.componentId}
                      value={option.componentId}
                    >
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
              <Grid item xs={12} md={3}>
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
                  disabled
                  onChange={handleChange}
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
                  label="Available Quantity"
                  fullWidth
                  size="small"
                  name="availableQty"
                  value={formData.availableQty}
                  // type="number"
                  onChange={handleChange}
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
                  label="Thaan Quantity"
                  fullWidth
                  type="number"
                  size="small"
                  name="thaanQty"
                  value={formData.thaanQty}
                  onChange={handleChange}
                  required
                  error={!!formErrors.thaanQty}
                  helperText={formErrors.thaanQty}
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
                  fullWidth
                  select
                  label="Operating Machine"
                  defaultValue=""
                  size="small"
                  name="operatingMachineId"
                  value={formData.operatingMachineId}
                  onChange={handleChange}
                  required
                  error={!!formErrors.operatingMachineId}
                  helperText={formErrors.operatingMachineId}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                >
                  {operatingMachineList.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  fullWidth
                  select
                  label="Working Head"
                  defaultValue=""
                  size="small"
                  name="workingHeadId"
                  value={formData.workingHeadId}
                  onChange={handleChange}
                  required
                  error={!!formErrors.workingHeadId}
                  helperText={formErrors.workingHeadId}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                >
                  {workingHeadList.map((option) => (
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
                  type="number"
                  size="small"
                  name="cuttingSize"
                  value={formData.cuttingSize}
                  onChange={handleChange}
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
                  label="Rate"
                  type="number"
                  fullWidth
                  size="small"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  required
                  error={!!formErrors.rate}
                  helperText={formErrors.rate}
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
                  label="No. Of Stiches Per Yard"
                  fullWidth
                  type="number"
                  size="small"
                  name="noOfStichesPerYard"
                  value={formData.noOfStichesPerYard}
                  onChange={handleChange}
                  required
                  error={!!formErrors.noOfStichesPerYard}
                  helperText={formErrors.noOfStichesPerYard}
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
                  label="No. Of Items Per Thaan"
                  fullWidth
                  size="small"
                  type="number"
                  name="noOfItemPerThaan"
                  value={formData.noOfItemPerThaan}
                  onChange={handleChange}
                  required
                  error={!!formErrors.noOfItemPerThaan}
                  helperText={formErrors.noOfItemPerThaan}
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
                  label="Total Embroidry"
                  fullWidth
                  size="small"
                  name="totalEmbroidry"
                  type="number"
                  value={formData.totalEmbroidry}
                  onChange={handleChange}
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
                  label="Amount Per Yard"
                  fullWidth
                  type="number"
                  size="small"
                  name="amountPerYard"
                  value={formData.amountPerYard}
                  onChange={handleChange}
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
                  label="Total Pcs"
                  fullWidth
                  size="small"
                  name="totalPcs"
                  value={formData.totalPcs}
                  onChange={handleChange}
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
                  label="Cost Per Component"
                  fullWidth
                  size="small"
                  name="costPerComponent"
                  value={formData.costPerComponent}
                  onChange={handleChange}
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
                  label="Total Amount"
                  fullWidth
                  size="small"
                  type="number"
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
              <Grid item xs={12} md={1.5}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.laserCut}
                      onChange={handleCheckboxChange}
                      name="laserCut"
                    />
                  }
                  label="Laser Cut"
                />
              </Grid>

              {formData.laserCut ? (
                <Grid item xs={12} md={4.5}>
                  <Grid container spacing={1} width="Inherit">
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Laser Cut Rate"
                        fullWidth
                        size="small"
                        name="laserCutRate"
                        value={formData.laserCutRate}
                        onChange={handleChange}
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: 'black'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Pcs For LaserCut"
                        fullWidth
                        size="small"
                        name="pcsForLaserCut"
                        value={formData.pcsForLaserCut}
                        onChange={handleChange}
                        InputLabelProps={{
                          sx: {
                            // set the color of the label when not shrinked
                            color: 'black'
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
              <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* </Grid> */}
      </Card>
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
          title="View Schiffli "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid sx={{ marginTop: 2 }} item xs={12}>
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
              deleteBy="schiffiliId"
              refetch={refetchSchiffliList}
              setAccordionExpanded={setAccordionExpanded}
              fileName="Schffili List"
              isLoading={isLoading}
            />
            {/* )} */}
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
            {/* <EditAbleDataGrid
            ncolumns={columns}
            initialRows={initialRows}
            formData={formData}
            editAPi={editAPi}
            refetch={refetchSchiffliList}
            // deleteApi={deleteApi}
            // deleteBy="fabricationId"
            disableAddRecord={true}
          /> */}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Schiffli;
