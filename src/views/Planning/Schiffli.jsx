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
  Checkbox
} from '@mui/material';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetEmbroideryListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetComponentsByBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetFabricByComponentsAndBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';

const Schiffli = () => {
  const [formData, setFormData] = useState({
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

    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });
  console.log('formData', formData);
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
    if (embroideryList) {
      setInitialRows(
        embroideryList.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [embroideryList, refetchEmbroideryList]);

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
  // console.log('initialRows', initialRows);
  // console.log('components', components);

  const collectionList = collectionData?.result || [];
  // console.log('collectionList', collectionList);

  useEffect(() => {
    const calculateTotalEmbroidey = () => {
      const thaanQty = parseFloat(formData.thaanQty) || 0;
      const operatingMachine = parseFloat(formData.operatingMachine) || 0;
      return thaanQty * operatingMachine;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalEmbroidry: calculateTotalEmbroidey()
    }));
    const calculateTotalPcs = () => {
      const thaanQty = parseFloat(formData.thaanQty) || 0;
      const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;

      return thaanQty * noOfStichesPerYard;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs()
    }));
    const calculateAmountPerYard = () => {
      const noOfStichesPerYard = parseFloat(formData.noOfStichesPerYard) || 0;
      const rate = parseFloat(formData.rate) || 0;

      return (noOfStichesPerYard / 1000) * rate;
    };

    setFormData((prevData) => ({
      ...prevData,
      amountPerYard: calculateAmountPerYard()
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
    const calculateTotalamount = () => {
      const amountPerYard = parseFloat(formData.amountPerYard) || 0;
      const totalEmbroidry = parseFloat(formData.totalEmbroidry) || 0;
      const laserCutRate = parseFloat(formData.laserCutRate) || 0;
      const pcsForLaserCut = parseFloat(formData.pcsForLaserCut) || 0;
      return amountPerYard * totalEmbroidry + pcsForLaserCut * laserCutRate;
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
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : ''
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

  const columns = [
    {
      field: 'designId',
      headerName: 'Design',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: designList.map((collection) => ({
        value: collection.designId,
        label: collection.designNo
      }))
    },
    {
      field: 'poPcs',
      headerName: 'PO. Pieces',
      flex: 1,
      editable: true
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
      editable: true
    },
    {
      field: 'rate',
      headerName: 'Rate',
      editable: true,
      flex: 1
    },
    {
      field: 'vendorId',
      headerName: 'Vendor',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: vendors.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'total',
      headerName: 'Total',
      flex: 1,
      editable: true,
      // valueGetter: (params, row) => {
      //   const quantity = parseFloat(row.quantity) || 0;
      //   const rate = parseFloat(row.rate) || 0;
      //   return quantity * rate;
      // }
      valueSetter: (params, row) => {
        const quantity = row.quantity ?? 0;
        const rate = row.rate ?? 0;
        const total = quantity * rate;
        console.log('total', total);
        return { ...row, total };
      }
      // valueSetter: (params, row) => {
      //   console.log('row', row);
      //   const quantity = row.quantity || 0;
      //   const rate = row.rate || 0;
      //   return quantity * rate;
      // }
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      flex: 1,
      editable: true,
      // valueGetter: (params, row) => {
      //   const total = parseFloat(row.total) || 0;
      //   const poPcs = parseFloat(row.poPcs) || 0;
      //   return total / poPcs;
      // }
      valueSetter: (params, row) => {
        const total = row.total ?? 0;
        const poPcs = row.poPcs ?? 0;
        const unitPrice = total / poPcs;
        console.log('unitPrice', unitPrice);
        return { ...row, unitPrice };
      }
      // valueSetter: (params, row) => {
      //   const total = row.total || 0;
      //   const poPcs = row.poPcs || 0;
      //   return total / poPcs;
      // }
    },
    {
      field: 'gst',
      headerName: 'GST',
      flex: 1,
      editable: true
    },
    {
      field: 'totalInclGst',
      headerName: 'Total Inc. GST',
      flex: 1,
      editable: true,
      // valueGetter: (params, row) => {
      //   console.log(row);
      //   const total = parseFloat(row.total) || 0;
      //   const gst = parseFloat(row.gst) || 0;
      //   return total * (1 + gst / 100);
      // }
      valueSetter: (params, row) => {
        const total = row.total ?? 0;
        const gst = row.gst ?? 0;
        const totalInclGst = total * (1 + gst / 100);
        console.log('totalInclGst', totalInclGst);
        return { ...row, totalInclGst };
      }
    }
  ];

  const handleSave = async () => {
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/Fabrication/SaveFabrication',
        formData
      );

      // Handle the response if needed
      console.log('Save response:', response.data);

      // Clear the form after successful save
      // refetchFabricRequisitionData();
      setFormData({
        designId: '',
        batchNo: '',
        baseColorId: '',
        baseColorName: '',
        fabricId: '',
        poPcs: '',
        quantity: '',
        rate: '',
        uomId: 'string',
        total: '',
        unitPrice: '',
        gst: '',
        totalInclGst: '',
        createdOn: '2024-05-29T09:56:23.916Z',
        createdBy: 0,
        lastUpdatedOn: '2024-05-29T09:56:23.916Z',
        LastUpdatedBy: 0
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  console.log('formData', formData);
  // const editAPi = https://gecxc.com:4041/api/Fabrication/SaveFabrication;
  // const deleteApi = https://gecxc.com:4041/api/Fabrication/DeleteFabricByFabricId?fabricationId=;
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
              Schiffli
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
              label="Thaan Quantity"
              fullWidth
              size="small"
              name="thaanQty"
              value={formData.thaanQty}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="operatingMachineId"
              defaultValue=""
              size="small"
              name="operatingMachineId"
              value={formData.operatingMachineId}
              onChange={handleChange}
            >
              {operatingMachineList.map((option) => (
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
              label="workingHeadId"
              defaultValue=""
              size="small"
              name="workingHeadId"
              value={formData.workingHeadId}
              onChange={handleChange}
            >
              {workingHeadList.map((option) => (
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
              label="Rate"
              fullWidth
              size="small"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="No. Of Stiches Per Yard"
              fullWidth
              size="small"
              name="noOfStichesPerYard"
              value={formData.noOfStichesPerYard}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="No. Of Items Per Thaan"
              fullWidth
              size="small"
              name="noOfItemPerThaan"
              value={formData.noOfItemPerThaan}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Total Embroidry"
              fullWidth
              size="small"
              name="totalEmbroidry"
              value={formData.totalEmbroidry}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Amount Per Yard"
              fullWidth
              size="small"
              name="amountPerYard"
              value={formData.amountPerYard}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Total Pcs"
              fullWidth
              size="small"
              name="totalPcs"
              value={formData.totalPcs}
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
            <Grid item xs={12} md={6}>
              <Grid container spacing={1} width="Inherit">
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Laser Cut Rate"
                    fullWidth
                    size="small"
                    name="laserCutRate"
                    value={formData.laserCutRate}
                    onChange={handleChange}
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
                  />
                </Grid>
              </Grid>
            </Grid>
          ) : null}
          {/* <Grid item xs={12} md={12}>
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
                  label="Stitches"
                  fullWidth
                  size="small"
                  name="sequenceStitches"
                  value={formData.sequenceStitches}
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
          ) : null} */}
        </Grid>
      </FormControl>
      <Grid container spacing={2} width="Inherit">
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <EditAbleDataGrid
            ncolumns={columns}
            initialRows={initialRows}
            formData={formData}
            // editAPi={editAPi}
            // refetch={refetchFabricRequisitionData}
            // deleteApi={deleteApi}
            // deleteBy="fabricationId"
            disableAddRecord={true}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Schiffli;
