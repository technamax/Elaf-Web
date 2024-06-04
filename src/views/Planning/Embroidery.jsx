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
  Box
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

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

import MainCard from 'ui-component/cards/MainCard';

const Embroidery = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    designId: '',
    batchNo: '',
    componentId: '',
    fabricId: '',
    vendorId: '',
    poPcs: '', // coming from getcollectionapi
    baseColorId: '', // coming from getcollectionapi
    baseColorName: '',
    colorId: '', //from dying screen coming from fabricAPi
    availableQty: '',
    noOfHeads: '',
    repeats: '',
    cuttingSize: '',
    itemsPerRepeat: '',
    totalPcs: '', //repeat*itemsPerRepeat
    totalAmount: '', //
    threadStitches: '',
    threadRate: '',
    threadAmount: '',
    tillaStitches: '',
    tillaRate: '',
    tillaAmount: '',
    sequence: '',
    sequenceRate: '',
    sequenceAmount: '',
    isSolving: false,
    solvingLayers: '',
    solvingInMeters: '',
    solvingRate: '',
    solvingAmount: '',
    // additional: '',
    threadAdditional: [],

    costPerComponent: '', //
    // costPerComponent: '', //
    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });
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
      batchNo: formData.batchNo,
      componentId: formData.componentId
    },
    {
      skip: !formData.batchNo || !formData.componentId
    }
  );
  const { data: colorData } =
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery(
      {
        batchNo: formData.batchNo,
        componentId: formData.componentId,
        fabricId: formData.fabricId
      },
      {
        skip: !formData.batchNo || !formData.componentId || !formData.fabricId
      }
    );

  const { data: embroideryList, refetch: refetchEmbroideryList } =
    useGetEmbroideryListByBatchNoQuery(formData.batchNo, {
      skip: !formData.batchNo // Skip the query if no collection is selected
    });
  const { data: componentsByBatch } = useGetComponentsByBatchNoQuery(
    formData.batchNo,
    {
      skip: !formData.batchNo // Skip the query if no collection is selected
    }
  );

  console.log('colorData', colorData);
  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [heads, setHeads] = useState([]);
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
    if (embroideryList) {
      setInitialRows(
        embroideryList.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [embroideryList]);

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
      return repeats * itemsPerRepeat;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs()
    }));
    const calculateThread = () => {
      const stitches = parseFloat(formData.threadStitches) || 0;
      const rate = parseFloat(formData.threadRate) || 0;
      const heads = parseFloat(formData.noOfHeads) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return (stitches / 1000) * (rate * repeats * heads);
    };

    setFormData((prevData) => ({
      ...prevData,
      threadAmount: calculateThread()
    }));
    const calculateTilla = () => {
      const stitches = parseFloat(formData.tillaStitches) || 0;
      const rate = parseFloat(formData.tillaRate) || 0;
      const heads = parseFloat(formData.noOfHeads) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return (stitches / 1000) * (rate * repeats * heads);
    };

    setFormData((prevData) => ({
      ...prevData,
      tillaAmount: calculateTilla()
    }));
    const calculateSequence = () => {
      const stitches = parseFloat(formData.sequence) || 0;
      const rate = parseFloat(formData.sequenceRate) || 0;
      const heads = parseFloat(formData.noOfHeads) || 0;
      const repeats = parseFloat(formData.repeats) || 0;
      return (stitches / 1000) * (rate * repeats * heads);
    };

    setFormData((prevData) => ({
      ...prevData,
      sequenceAmount: calculateSequence()
    }));
    const calculateInMeters = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const noOfHeads = parseFloat(formData.noOfHeads) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return ((repeats * noOfHeads * 13) / 39.37) * layers;
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingInMeters: calculateInMeters()
    }));
    const calculateSolvingAmount = () => {
      const solvingInMeters = parseFloat(formData.solvingInMeters) || 0;
      const solvingRate = parseFloat(formData.solvingRate) || 0;
      const layers = parseFloat(formData.solvingLayers) || 0;
      return solvingInMeters * solvingRate;
    };

    setFormData((prevData) => ({
      ...prevData,
      solvingAmount: calculateSolvingAmount()
    }));
    const calculateTotalAmount = () => {
      const thread = parseFloat(formData.threadAmount) || 0;
      const tilla = parseFloat(formData.tillaAmount) || 0;
      const sequence = parseFloat(formData.sequenceAmount) || 0;
      const solving = parseFloat(formData.solvingAmount) || 0;
      return thread + tilla + sequence + solving;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalAmount()
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const totalPcs = parseFloat(formData.totalPcs) || 0;

      return totalAmount / totalPcs;
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent()
    }));
  }, [
    formData.threadAmount,
    formData.totalAmount,
    formData.sequenceAmount,
    formData.solvingAmount,
    formData.repeats,
    formData.tillaAmount,
    formData.itemsPerRepeat,
    formData.threadRate,
    formData.threadStitches,
    formData.noOfHeads,
    formData.tillaRate,
    formData.tillaStitches,
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
      setFormData({
        ...formData,
        collectionId: value,

        poPcs: selectedCollection ? selectedCollection.poPcs : ''
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
    } else if (name === 'colorId') {
      const selectedcolor = colors.find((color) => color.colorId === value);
      setFormData({
        ...formData,
        colorId: value,
        availableQty: selectedcolor ? selectedcolor.total : '',
        cuttingSize: selectedcolor ? selectedcolor.cuttingSize : '',
        repeats: selectedcolor ? selectedcolor.repeats : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/Embroidery/SaveEmbroidery',
        {
          ...formData,
          threadAdditional: formData.threadAdditional.join(', ')
        }
      );

      console.log('Save response:', response.data);

      setFormData({
        designId: '',
        batchNo: '',
        componentId: '',
        fabricId: '',
        vendorId: '',
        poPcs: '', // coming from getcollectionapi
        baseColorId: '', // coming from getcollectionapi
        baseColorName: '',
        colorId: '', //from dying screen coming from fabricAPi
        availableQty: '',
        noOfHeads: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '', //repeat*itemsPerRepeat
        totalAmount: '', //
        threadStitches: '',
        threadRate: '',
        threadAmount: '',
        tillaStitches: '',
        tillaRate: '',
        tillaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: false,
        solvingLayers: '',
        solvingInMeters: '',
        solvingRate: '',
        solvingAmount: '',
        // additional: '',
        threadAdditional: [],

        costPerComponent: '', //
        // costPerComponent: '', //
        createdOn: new Date().toISOString(),
        createdBy: 0,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: 0
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  console.log('initialRows', initialRows);
  const handleEdit = () => {
    //
  };
  const handleDelete = () => {
    //
  };
  const columns = [
    { field: 'designId', headerName: 'Design Id', flex: 1 },
    { field: 'batchNo', headerName: 'Batch No.', flex: 1 },
    { field: 'componentId', headerName: 'componentId', flex: 1 },
    { field: 'fabricId', headerName: 'fabricId', flex: 1 },
    {
      field: 'vendorId',
      headerName: 'vendorId',
      flex: 1
    },
    {
      field: 'poPcs',
      headerName: 'Po Pcs',
      flex: 1
    },
    { field: 'baseColorName', headerName: 'Base Color', flex: 1 },
    { field: 'colorId', headerName: 'color', flex: 1 },
    { field: 'availableQty', headerName: 'availableQty', flex: 1 },
    { field: 'noOfHeads', headerName: 'No. Of Heads', flex: 1 },
    { field: 'repeats', headerName: 'Repeats', flex: 1 },
    { field: 'cuttingSize', headerName: 'cutting Size', flex: 1 },
    { field: 'itemsPerRepeat', headerName: 'Items Per Repeat', flex: 1 },
    { field: 'totalPcs', headerName: 'Total Pcs', flex: 1 },
    { field: 'threadStitches', headerName: 'Thread Stitches', flex: 1 },
    { field: 'threadRate', headerName: 'Thread Rate', flex: 1 },
    { field: 'threadAmount', headerName: 'Thread Amount', flex: 1 },
    { field: 'tillaStitches', headerName: 'Tilla Stitches', flex: 1 },
    { field: 'tillaRate', headerName: 'Tilla Rate', flex: 1 },
    { field: 'tillaAmount', headerName: 'Tilla Amount', flex: 1 },
    { field: 'threadAmount', headerName: 'Thread Amount', flex: 1 },
    { field: 'sequence', headerName: 'sequence', flex: 1 },
    { field: 'sequenceRate', headerName: 'Sequence Rate', flex: 1 },
    { field: 'sequenceAmount', headerName: 'Sequence Amount' },
    { field: 'isSolving', headerName: 'Is Solving', flex: 1 },
    { field: 'solvingLayers', headerName: 'Solving Layers', flex: 1 },
    { field: 'solvingInMeters', headerName: 'Solving In Meters', flex: 1 },
    { field: 'solvingRate', headerName: 'Solving Rate', flex: 1 },
    { field: 'solvingAmount', headerName: 'Solving Amount', flex: 1 },
    { field: 'threadAdditional', headerName: 'ThreadAdditional' },
    { field: 'costPerComponent', headerName: 'Cost Per Component', flex: 1 },

    {
      field: 'Action',
      minWidth: 200,
      headerName: 'Actions',

      width: 220,

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup
            size="small"
            variant="text"
            aria-label="Basic button group"
          >
            <Button variant="contained" size="small" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="contained" size="small" onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];

  return (
    <MainCard
      style={{
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      }}
    >
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item xs={9} md={9}>
            <Typography variant="h3" gutterBottom>
              Embroidery
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
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

          <Grid item xs={12} md={12}>
            <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
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
              label="Po Pcs"
              fullWidth
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
            />
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
              label="Available Quantity"
              fullWidth
              size="small"
              name="availableQty"
              value={formData.availableQty}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Repeats"
              fullWidth
              size="small"
              name="repeats"
              value={formData.repeats}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Heads"
              defaultValue=""
              size="small"
              name="noOfHeads"
              value={formData.noOfHeads}
              onChange={handleChange}
            >
              {heads.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Cutting Size"
              fullWidth
              size="small"
              name="cuttingSize"
              value={formData.cuttingSize}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="itemsPerRepeat"
              fullWidth
              size="small"
              name="itemsPerRepeat"
              value={formData.itemsPerRepeat}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="total Pcs."
              fullWidth
              size="small"
              name="totalPcs"
              value={formData.totalPcs}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Total Amount"
              fullWidth
              size="small"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Cost Per Component"
              fullWidth
              size="small"
              name="costPerComponent"
              value={formData.costPerComponent}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isSolving}
                  onChange={handleCheckboxChange}
                  name="isSolving"
                />
              }
              label="isSolving"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Additional</InputLabel>
              <Select
                multiple
                value={formData.threadAdditional}
                name="threadAdditional"
                onChange={handleChange}
                input={<OutlinedInput label="Additional" />}
                fullWidth
                // MenuProps={MenuProps}
              >
                {additionals.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, formData.threadAdditional, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Thread
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Stitches"
                  fullWidth
                  size="small"
                  name="threadStitches"
                  value={formData.threadStitches}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  name="threadRate"
                  value={formData.threadRate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  name="threadAmount"
                  value={formData.threadAmount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Tilla
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Stitches"
                  fullWidth
                  size="small"
                  name="tillaStitches"
                  value={formData.tillaStitches}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  name="tillaRate"
                  value={formData.tillaRate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  name="tillaAmount"
                  value={formData.tillaAmount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Sequence
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Sequence"
                  fullWidth
                  size="small"
                  name="sequence"
                  value={formData.sequence}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  name="sequenceRate"
                  value={formData.sequenceRate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  name="sequenceAmount"
                  value={formData.sequenceAmount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          {formData.isSolving ? (
            <Grid item xs={12} md={6}>
              <Grid container spacing={1} width="Inherit">
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" gutterBottom>
                    Solving
                  </Typography>
                </Grid>{' '}
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Layers"
                    fullWidth
                    size="small"
                    name="solvingLayers"
                    value={formData.solvingLayers}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Meters"
                    fullWidth
                    size="small"
                    name="solvingInMeters"
                    value={formData.solvingInMeters}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Rate"
                    fullWidth
                    size="small"
                    name="solvingRate"
                    value={formData.solvingRate}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Amount"
                    fullWidth
                    size="small"
                    name="solvingAmount"
                    value={formData.solvingAmount}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </FormControl>
      <Grid container spacing={2} width="Inherit">
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <Box sx={{ height: 300, width: '100%' }}>
            <DataGrid
              // {...data}
              rows={initialRows}
              columns={columns}
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
            // editAPi={editAPi}
            // refetch={refetchFabricRequisitionData}
            // deleteApi={deleteApi}
            // deleteBy="fabricationId"
            disableAddRecord={true}
          /> */}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Embroidery;
