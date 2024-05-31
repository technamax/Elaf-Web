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
    createdBy: 0
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
  const [vendors, setVendor] = useState([]);

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
      fetchFabricColorData(value); // Fetch data from API when batchNo changes
    } else if (name === 'fabricId') {
      const selectedFabric = Fabrications.find(
        (fabric) => fabric.fabricId === value
      );
      setFormData({
        ...formData,
        fabricId: value,
        OutputQty: selectedFabric ? selectedFabric.total : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchFabricColorData = async (batchNo) => {
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/DyeingPrinting/GetFabricColorFromPrePlanningByBatchNo?batchNo=${batchNo}`
      );
      const data = response.data.result; // Directly access the result array
      console.log('Dyeing Color Data', data);

      // Format colors for Autocomplete
      const colorOptions = data.map((item) => ({
        label: item.color,
        value: item.colorId
      }));

      // Assume the first item in the result array to set initial values
      const firstItem = data[0] || {};

      setFormData((prevFormData) => ({
        ...prevFormData,
        fabricId: firstItem.fabricId || '',
        ColorId: firstItem.colorId || '',
        TotalIncludingGst: firstItem.total || '',
        color: firstItem.color || ''
      }));
      setColors(colorOptions); // Update the colors state with the fetched data
    } catch (error) {
      console.error('Error fetching fabric color data:', error);
    }
  };

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
      value: 'Vol',
      label: 'D 1'
    },
    {
      value: 'Vol',
      label: 'D 2'
    },
    {
      value: 'Vol',
      label: 'D 3'
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
              {design.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
            <TextField label="Po PC's" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="UOM" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Qty" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Shrinkage%" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Wastage%" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Output Qty" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Rate/UOM"
              fullWidth
              size="small"
              name="RatePerUOM"
              value={formData.RatePerUOM}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="GST" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total Incl GST"
              fullWidth
              size="small"
              name="TotalIncludingGst"
              value={formData.TotalIncludingGst}
              onChange={handleChange}
            />
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
              value={formData.TotalExclGst}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Unit P: T/Po PC's" fullWidth size="small" />
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
