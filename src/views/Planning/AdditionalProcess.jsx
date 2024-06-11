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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';
import { AlignHorizontalCenter } from '@mui/icons-material';

const AdditionalProcess = () => {
  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    additionalProcessId: 0,
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
    ratePerPcs: '',
    costPerComponent: '',
    totalAmount: '',
    processType: '',
    uomId: '',
    pcsPerComponent: '',
    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });
  useEffect(() => {
    setFormData({
      additionalProcessId: initialData.additionalProcessId || 0,
      designId: initialData?.designId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      batchNo: initialData?.batchNo || '',
      componentId: initialData?.componentId || '',
      poPcs: initialData?.poPcs || '',
      baseColorName: initialData?.baseColorName || '',
      fabricId: initialData?.fabricId || '',
      vendorId: initialData?.vendorId || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      availableQty: initialData?.availableQty || '',
      ratePerPcs: initialData?.ratePerPcs || '',
      costPerComponent: initialData?.costPerComponent || '',
      pcsPerComponent: initialData?.pcsPerComponent || 0,
      totalAmount: initialData?.totalAmount || 0,
      reatedOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || 0,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: 0
    });
  }, [initialData]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(isExpanded);
  };

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

  // useEffect(() => {
  //   const calculateTotalEmbroidey = () => {
  //     const thaanQty = parseFloat(formData.thaanQty) || 0;
  //     const operatingMachine = parseFloat(formData.operatingMachine) || 0;
  //     return thaanQty * operatingMachine;
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     totalEmbroidry: calculateTotalEmbroidey()
  //   }));
  //   const calculateTotalPcs = () => {
  //     const thaanQty = parseFloat(formData.thaanQty) || 0;
  //     const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;

  //     return thaanQty * noOfStichesPerYard;
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     totalPcs: calculateTotalPcs()
  //   }));
  //   const calculateAmountPerYard = () => {
  //     const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;
  //     const rate = parseFloat(formData.rate) || 0;

  //     return (noOfStichesPerYard / 1000) * rate;
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     amountPerYard: calculateAmountPerYard()
  //   }));
  //   const calculateCostPerComponent = () => {
  //     const totalAmount = parseFloat(formData.totalAmount) || 0;
  //     const totalPcs = parseFloat(formData.totalPcs) || 0;

  //     return totalAmount / totalPcs;
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     costPerComponent: calculateCostPerComponent()
  //   }));
  //   const calculateTotalamount = () => {
  //     const amountPerYard = parseFloat(formData.amountPerYard) || 0;
  //     const totalEmbroidry = parseFloat(formData.totalEmbroidry) || 0;
  //     const laserCutRate = parseFloat(formData.laserCutRate) || 0;
  //     const pcsForLaserCut = parseFloat(formData.pcsForLaserCut) || 0;
  //     return amountPerYard * totalEmbroidry + pcsForLaserCut * laserCutRate;
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     totalAmount: calculateTotalamount()
  //   }));
  // }, [
  //   formData.thaanQty,
  //   formData.operatingMachine,
  //   formData.noOfStichesPerYard,
  //   formData.rate,
  //   formData.totalAmount,
  //   formData.totalPcs,
  //   formData.amountPerYard,
  //   formData.totalEmbroidry,
  //   formData.laserCutRate,
  //   formData.pcsForLaserCut
  // ]);

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
      setAccordionExpanded(true);
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

  const handleSave = async () => {
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcess',
        formData
      );

      // Handle the response if needed
      console.log('Save response:', response.data);

      // Clear the form after successful save
      // refetchFabricRequisitionData();

      // Assuming designId, planningHeaderId, and batchNo are part of the formData state
      setFormData((prevFormData) => ({
        designId: prevFormData.designId,
        planningHeaderId: prevFormData.planningHeaderId,
        batchNo: prevFormData.batchNo,
        baseColorName: prevFormData.baseColorName,
        additionalProcessId: 0,
        // componentId: '',
        poPcs: '',
        fabricId: '',
        vendorId: '',
        colorId: '', // from dying screen coming from fabricAPI
        availableQty: '',
        ratePerPcs: '',
        costPerComponent: '',
        uomId: 0,
        pcsPerComponent: 0,

        totalAmount: '',
        createdOn: new Date().toISOString(),
        createdBy: 0,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: 0
      }));

      refetchSchiffliList();

      // setInitialData((prevFormData) => ({
      //   designId: prevFormData.designId,
      //   planningHeaderId: prevFormData.planningHeaderId,
      //   batchNo: prevFormData.batchNo,
      //   baseColorName: prevFormData.baseColorName,
      //   schiffiliId: 0,
      //   componentId: '',
      //   poPcs: '',
      //   fabricId: '',
      //   vendorId: '',
      //   colorId: '', // from dying screen coming from fabricAPI
      //   availableQty: '',
      //   thaanQty: 0,
      //   operatingMachineId: 0,
      //   operatingMachine: '',
      //   workingHeadId: 0,
      //   cuttingSize: '',
      //   rate: '',
      //   costPerComponent: '',
      //   totalEmbroidry: 0,
      //   noOfItemPerThaan: 0,
      //   noOfStichesPerYard: 0,
      //   amountPerYard: 0,
      //   totalPcs: 0,
      //   laserCut: false,
      //   laserCutRate: 0,
      //   pcsForLaserCut: 0,
      //   totalAmount: 0,
      //   createdOn: new Date().toISOString(),
      //   createdBy: 0,
      //   lastUpdatedOn: new Date().toISOString(),
      //   LastUpdatedBy: 0
      // }));
      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  console.log('formData', formData);

  const handleEdit = (row) => {
    // Convert the comma-separated string to an array
    setInitialData(row);
    // const threadAdditionalArray = row.threadAdditional
    //   ? row.threadAdditional.split(',').map((item) => item.trim())
    //   : [];

    // setInitialData({
    //   ...row,
    //   threadAdditional: threadAdditionalArray
    // });
  };

  console.log('initialData', initialData);
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://gecxc.com:4041/api/Schiffli/DeleteSchiffiById?schiffiId=${id}`
      );
      // refetchEmbroideryList();
      refetchSchiffliList();
      console.log('deleted');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    // Handle delete logic
  };
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
      headerName: 'No. Of Stiches Per Yard'
    },
    {
      field: 'noOfItemPerThaan',
      headerName: 'No. Of Item Per Thaan'
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
      headerName: 'Pcs.For Laser Cut'
    },
    {
      field: 'Action',
      headerName: 'Actions',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup size="small" variant="text">
            {/* <Button
              variant="contained"
              size="small"
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </Button> */}
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
              onClick={() => handleDelete(params.row.schiffiliId)}
            >
              <DeleteIcon />
            </IconButton>
            {/* <Button
              variant="contained"
              size="small"
              onClick={() => handleDelete(params.row.schiffiliId)}
            >
              Delete
            </Button> */}
          </ButtonGroup>
        </div>
      )
    }
  ];

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<Avatar src={dyeing} sx={{ background: 'transparent' }} />}
          title="Additional Process "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

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
              fullWidth
              select
              label="Components"
              name="componentId"
              value={formData.componentId}
              onChange={handleChange}
              size="small"
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
              label="Base Color"
              fullWidth
              size="small"
              name="baseColorName"
              value={formData.baseColorName}
              onChange={handleChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<Avatar src={dyeing} sx={{ background: 'transparent' }} />}
          title="Add Additional Process "
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
                >
                  {colors.map((option) => (
                    <MenuItem key={option.colorId} value={option.colorId}>
                      {option.color}
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
              <Grid item xs={12} md={1.5}>
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
                  label=" Quantity"
                  fullWidth
                  size="small"
                  name="availableQty"
                  value={formData.availableQty}
                  // type="number"
                  onChange={handleChange}
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
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* </Grid> */}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<Avatar src={dyeing} sx={{ background: 'transparent' }} />}
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

export default AdditionalProcess;
