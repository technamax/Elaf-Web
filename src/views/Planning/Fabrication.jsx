import { useState, useEffect } from 'react';
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
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import { useGetCollectionFromPlanningHeaderQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';

const Fabrication = () => {
  const [formData, setFormData] = useState({
    designId: '',
    batchNo: '',
    baseColorId: '',
    fabricId: '',
    poPcs: '',
    quantity: '',
    rate: '',
    uom: 'string',
    ratePerUom: '',
    total: '',
    unitPrice: '',
    createdOn: '2024-05-29T09:56:23.916Z',
    createdBy: 0,
    lastUpdatedOn: '2024-05-29T09:56:23.916Z',
    LastUpdatedBy: 0
  });

  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });
  const { data: batchData, refetch: refetchBatches } =
    useGetPrePlanningHeaderByDesignIdQuery(formData.designId, {
      skip: !formData.designId // Skip the query if no collection is selected
    });

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      refetch();
    }
  }, [designData]);
  useEffect(() => {
    if (batchData) {
      setBatchList(batchData.result);
      refetchBatches();
    }
  }, [batchData]);
  console.log('designList', designList);
  console.log('selectedCollectionId', selectedCollectionId);
  console.log('batchList', batchList);

  const collectionList = collectionData?.result || [];

  const [components, setComponents] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [colors, setColors] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [heads, setHeads] = useState([]);
  // const [batchList, setBatchList] = useState([]);

  const initialRows = [
    {
      id: 1,
      name: 'Fabrication',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    }
  ];

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
        noOfDesigns: selectedCollection ? selectedCollection.noOfDesigns : '',
        noOfColors: selectedCollection ? selectedCollection.noOfColors : ''
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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const columns = [
    {
      field: 'componentId',
      headerName: 'Component',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: components.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'colorId',
      headerName: 'Color',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: colors.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size',
      flex: 1,
      editable: true
    },
    {
      field: 'fabricId',
      headerName: 'Fabrication',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: Fabrications.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'noOfHeads',
      headerName: 'No. Of Heads',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: heads.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'repeats',
      headerName: 'Repeats',
      flex: 1,
      editable: true
    },
    {
      field: 'repeatSize',
      headerName: 'Repeat Size',
      flex: 1,
      editable: true
    },

    {
      field: 'totalFabric',
      headerName: 'Total Fabric',
      flex: 1,
      editable: true,

      valueSetter: (params, row) => {
        const repeats = row.repeats ?? 0;
        const repeatSize = row.repeatSize ?? 0;
        const totalFabric = repeats * repeatSize;
        console.log('totalFabric', totalFabric);
        return { ...row, totalFabric };
      }
    },

    {
      field: 'uomId',
      headerName: 'UOM',
      editable: true,
      flex: 1,
      type: 'singleSelect',
      valueOptions: uoms.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    },
    {
      field: 'shrinkage',
      headerName: 'Shrinkage',
      flex: 1,
      editable: true
    },
    {
      field: 'wastage',
      headerName: 'Wastage',
      flex: 1,
      editable: true
    },
    {
      field: 'total',
      headerName: 'Total',
      flex: 1,
      editable: true,
      valueSetter: (params, row) => {
        const shrinkage = row.shrinkage ?? 0;
        const wastage = row.wastage ?? 0;
        const totalFabric = row.totalFabric ?? 0;
        const total = (totalFabric * (100 - (shrinkage + wastage))) / 100;

        console.log('totalFabric', totalFabric);
        return { ...row, total };
      }
    }
  ];

  const handleSave = () => {
    //
  };
  console.log('formData', formData);
  const editAPi = ``;
  const deleteApi = ``;
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
              Pre Planning
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
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

          <Grid item xs={12} md={4}>
            <TextField
              label="No of Design"
              fullWidth
              size="small"
              name="noOfDesigns"
              value={formData.noOfDesigns}
              onChange={handleChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="No of Color"
              fullWidth
              size="small"
              name="noOfColors"
              value={formData.noOfColors}
              onChange={handleChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
              select
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Quantity"
              fullWidth
              size="small"
              name="quantity"
              value={formData.quantity}
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
              fullWidth
              select
              label="UOM"
              defaultValue=""
              size="small"
              name="uomId"
              value={formData.uomId}
              onChange={handleChange}
            >
              {uoms.map((option) => (
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
              label="Rate/UOM"
              defaultValue=""
              size="small"
              name="ratePerUom"
              value={formData.ratePerUom}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Total"
              fullWidth
              size="small"
              name="total"
              value={formData.total}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Unit Price"
              fullWidth
              size="small"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </FormControl>
      <Grid container spacing={2} width="Inherit">
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <EditAbleDataGrid
            ncolumns={columns}
            initialRows={initialRows}
            formData={formData}
            editAPi={editAPi}
            deleteApi={deleteApi}
            deleteBy="planningId"
            disableAddRecord={true}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Fabrication;
