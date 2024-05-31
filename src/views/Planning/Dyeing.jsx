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
  Divider
} from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const Dyeing = () => {
  const [formData, setFormData] = useState({
    DPId: '',
    DesignId: '',
    BatchNo: '',
    FabricId: '',
    ColorId: '',
    color: '',
    VendorId: '',
    ProcessType: '',
    AvailableQty: '',
    Shrinkage: '',
    Wastage: '',
    OutputQty: '',
    UOM: '',
    RatePerUOM: '',
    UnitRatePerPo: '',
    TotalExclGst: '',
    GST: '',
    GSTAmount: '',
    TotalIncludingGst: '',
    createdBy: 0,
    poPcs: ''
  });

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
    formData.batchNo,
    {
      skip: !formData.batchNo
    }
  );
  const { data: fabricRequisitionData, refetch: refetchFabricRequisitionData } =
    useGetFabricRequisitionListByBatchNoQuery(formData.batchNo, {
      skip: !formData.batchNo
    });

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [colors, setColors] = useState([]);
  const [vendors, setVendors] = useState([]);

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
    if (lookupData) {
      setVendors(lookupData.result[0].vendorList);
    }
  }, [fabricData]);
  console.log(vendors);
  useEffect(() => {
    if (fabricRequisitionData) {
      setInitialRows(
        fabricRequisitionData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [fabricRequisitionData]);

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
      // Fetch data from API when batchNo changes
    } else if (name === 'fabricId') {
      const selectedFabric = Fabrications.find(
        (fabric) => fabric.fabricId === value
      );
      console.log('Selected Fabric:', Fabrications); // Add this line to check selected fabric
      setFormData({
        ...formData,
        fabricId: value,
        OutputQty: selectedFabric ? selectedFabric.total : ''
      });
      fetchFabricColorData(value); // Pass formData.fabricId instead of value
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchFabricColorData = async (fabricId) => {
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/DyeingPrinting/GetFabricColorFromPrePlanningByFabricId?fabricId=${fabricId}`
      );
      const data = response.data.result;
      console.log('Dyeing Color Data', data);

      if (data.length > 0) {
        const fabricInfo = data[0]; // Assuming only one fabric info is returned

        // Update form data with fabric info
        setFormData((prevFormData) => ({
          ...prevFormData,
          Shrinkage: fabricInfo.shrinkage.toFixed(2), // Assuming shrinkage is returned as a decimal
          Wastage: fabricInfo.wastage.toFixed(2), // Assuming wastage is returned as a decimal
          UOM: fabricInfo.uom,
          AvailableQty: fabricInfo.total.toString() // Convert total to string to set in TextField
          // Assuming uomId is not needed in the form
        }));
      }

      const colorOptions = data.map((item) => ({
        label: item.color,
        value: item.colorId
      }));

      setColors(colorOptions);
      // Assuming the first color is automatically selected
      if (colorOptions.length > 0) {
        const firstColor = colorOptions[0];
        setFormData((prevFormData) => ({
          ...prevFormData,
          ColorId: firstColor.value,
          color: firstColor.label
        }));
      }
    } catch (error) {
      console.error('Error fetching fabric color data:', error);
    }
  };
  useEffect(() => {
    const calculateTotal = () => {
      const AvailableQty = parseFloat(formData.AvailableQty) || 0;
      const shrinkage = parseFloat(formData.Shrinkage) || 0;
      const wastage = parseFloat(formData.Wastage) || 0;
      return (AvailableQty * (100 - (shrinkage + wastage))) / 100;
    };

    setFormData((prevData) => ({
      ...prevData,
      OutputQty: calculateTotal()
    }));
  }, []);

  const columns = [
    { field: 'name', headerName: 'Order Number', editable: true, flex: 2 },
    {
      field: 'DesignId',
      headerName: 'Design',
      type: 'number',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'FabricId',
      headerName: 'Fabric',
      type: 'date',
      flex: 1,
      editable: true
    },
    {
      field: 'ProcessType',
      headerName: 'Process',
      flex: 1,
      editable: true
    },
    {
      field: 'ColorId',
      headerName: 'Color',
      flex: 1,
      editable: true
    },
    {
      field: 'role',
      headerName: 'Po Pcs',
      flex: 1,
      editable: true
    },
    {
      field: 'AvailableQty',
      headerName: 'Qty',
      flex: 1,
      editable: true
    },
    {
      field: 'UOM',
      headerName: 'UOM',
      flex: 1,
      editable: true
    },
    {
      field: 'RatePerUOM',
      headerName: 'Rate',
      flex: 1,
      editable: true
    },
    {
      field: 'UnitRatePerPo',
      headerName: 'Unit Price',
      flex: 1,
      editable: true
    },
    {
      field: 'TotalIncludingGst',
      headerName: 'Total W/ GST',
      flex: 1,
      editable: true
    }
  ];

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

  return (
    <MainCard
      style={{
        borderWidth: 1,
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
              Dyeing/Printing
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} textAlign="right">
            <Button variant="contained" size="small" color="error">
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
            <Autocomplete
              fullWidth
              options={colors}
              getOptionLabel={(option) => option.label || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Color"
                  name="ColorId"
                  size="small"
                />
              )}
              value={
                colors.find((color) => color.value === formData.ColorId) || null
              }
              onChange={(event, newValue) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  ColorId: newValue ? newValue.value : ''
                }));
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth select label="Vendor Name " size="small">
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              // label="Base Color"
              fullWidth
              size="small"
              name="baseColorName"
              value={formData.baseColorName}
              onChange={handleChange}
              disabled
              focused
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth select label="Process Type " size="small">
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
              focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="AvailableQty"
              fullWidth
              size="small"
              name="AvailableQty"
              value={formData.AvailableQty}
              focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Shrinkage%"
              fullWidth
              size="small"
              name="Shrinkage"
              value={formData.Shrinkage}
              focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Wastage%"
              fullWidth
              size="small"
              name="Wastage"
              value={formData.Wastage}
              focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Output Qty"
              fullWidth
              size="small"
              name="OutputQty"
              value={formData.OutputQty}
              focused
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Rate"
              fullWidth
              size="small"
              name="RatePerUOM"
              value={formData.RatePerUOM}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total Excluding GST"
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
              size="small"
              name="GST"
              value={formData.GST}
              onChange={handleChange}
            />{' '}
          </Grid>

          <Grid item xs={12} md={1.5}>
            <TextField
              label="GST Amount"
              fullWidth
              size="small"
              name="GSTAmount"
              value={formData.GSTAmount}
              onChange={handleChange}
            />
          </Grid>
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
          <Divider color="#cc8587" sx={{ height: 2, width: '100%', mt: 2 }} />
          <Grid item xs={12} md={12} paddingTop={1}>
            <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default Dyeing;
