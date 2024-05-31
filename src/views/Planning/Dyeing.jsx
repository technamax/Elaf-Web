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
  colors
} from '@mui/material';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import { color } from 'framer-motion';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';

// ==============================|| SAMPLE PAGE ||============================== //

const Dyeing = () => {
  // const initialRows = [
  //   {
  //     id: 1,
  //     name: 'Dyeing',
  //     age: 25,
  //     joinDate: new Date('2024-05-25'),
  //     role: 'developer'
  //   }
  // ];

  const [formData, setFormData] = useState({
    DPId: '',
    DesignId: '',
    BatchNo: '',
    FabricId: '',
    ColorId: '',
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
    // appId: 1,
    createdBy: 0
    // createdOn: new Date().toISOString(),
    // lastUpdatedBy: 0,
    // lastUpdatedOn: new Date().toISOString()
  });

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
  const { data: fabricData } = useGetFabricFromPrePlanningByBatchNoQuery(
    formData.batchNo,
    {
      skip: !formData.batchNo // Skip the query if no collection is selected
    }
  );
  const { data: fabricRequisitionData, refetch: refetchFabricRequisitionData } =
    useGetFabricRequisitionListByBatchNoQuery(formData.batchNo, {
      skip: !formData.batchNo // Skip the query if no collection is selected
    });
  console.log('fabricRequisitionData', fabricRequisitionData);

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [initialRows, setInitialRows] = useState([]);

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
    if (fabricRequisitionData) {
      setInitialRows(
        fabricRequisitionData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [fabricRequisitionData]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setUoms(data.uomList);
    }
  }, [lookupData]);

  console.log('designList', designList);
  console.log('selectedCollectionId', selectedCollectionId);
  console.log('batchList', batchList);
  console.log('uom', uoms);
  console.log('Fabrications', Fabrications);
  console.log('initialRows', initialRows);

  const collectionList = collectionData?.result || [];
  console.log('collectionList', collectionList);

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
    } else if (name === 'fabricId') {
      const selectedFabric = Fabrications.find(
        (fabric) => fabric.fabricId === value
      );
      setFormData({
        ...formData,
        fabricId: value,
        quantity: selectedFabric ? selectedFabric.total : ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
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

  // const handleSave = () => {
  // };
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
  const fQuality = [
    {
      value: '1',
      label: 'Red'
    },
    { value: '2', label: 'Blue' },
    {
      value: '3',
      label: 'Green'
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
          {/* <Grid item xs={12} md={3}>
            <TextField
              label="Base Color"
              fullWidth
              size="small"
              name="baseColorName"
              value={formData.baseColorName}
              onChange={handleChange}
              disabled
            />
          </Grid> */}
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
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Color "
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Vendor Name "
              //   defaultValue="EUR"
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Process Type "
              //   defaultValue="EUR"
              //   helperText="Fabric Quality"
              size="small"
            >
              {fQuality.map((option) => (
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
            <TextField label="Rate/UOM" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="GST" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Total Incl GST" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="GST Amount" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField label="Total:Including Gst" fullWidth size="small" />
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
