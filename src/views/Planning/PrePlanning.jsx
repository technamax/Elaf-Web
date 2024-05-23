/* eslint-disable prettier/prettier */
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
import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';

const PrePlanning = () => {
  const { data: collectionData } = useGetCollectionListQuery();
  const { data: designData } = useGetDesignListQuery();

  const collectionList = collectionData || [];
  const designList = designData || [];

  const [components, setComponents] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [colors, setColors] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [heads, setHeads] = useState([]);
  const [batchList, setBatchList] = useState([]);
  // console.log('components:', components);
  // console.log('Fabrications:', Fabrications);
  // console.log('colors:', colors);
  // console.log('uoms:', uoms);
  // console.log('heads:', heads);

  const [formData, setFormData] = useState({
    collectionId: '',
    baseColorId: '', // not in api
    baseColorName: '', // not in api
    noOfDesigns: '', // not in apis
    noOfColors: '', // not in api
    designId: '',
    batchNo: '',
    componentId: '',
    cuttingSize: '', // not in api
    colorId: '',
    fabricId: '',
    noOfHeads: '',
    repeats: '',
    repeatSize: '',
    uomId: '',
    totalFabric: '',
    shrinkage: '',
    wastage: '',
    total: '',
    appId: 1,
    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedBy: 0,
    lastUpdatedOn: new Date().toISOString()
  });

  useEffect(() => {
    const fetchPrePlanningLookUp = async () => {
      try {
        const response = await axios.get(
          'https://gecxc.com:4041/API/Common/GetPrePlanningLookUp?appID=1'
        );
        const data = response.data[0];
        setComponents(data.componentList);
        setColors(data.colorList);
        setFabrications(data.fabricList);
        setHeads(data.noOfHeadsList);
        setUoms(data.uom);
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };

    fetchPrePlanningLookUp();
  }, []);

  useEffect(() => {
    const GetPrePlanningHeaderByDesignId = async (id) => {
      try {
        const response = await axios.get(
          `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningHeaderByDesignId?designId=${id}`
        );
        console.log(response.data);
        setBatchList(response.data);
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };

    GetPrePlanningHeaderByDesignId(formData.designId);
  }, [formData.designId]);
  console.log('batchList', batchList);

  useEffect(() => {
    const calculateTotalFabric = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const repeatSize = parseFloat(formData.repeatSize) || 0;
      return repeats * repeatSize;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalFabric: calculateTotalFabric()
    }));
    const calculateTotal = () => {
      const totalFabric = parseFloat(formData.totalFabric) || 0;
      const shrinkage = parseFloat(formData.shrinkage) || 0;
      const wastage = parseFloat(formData.wastage) || 0;
      return (totalFabric * (100 - (shrinkage + wastage))) / 100;
    };

    setFormData((prevData) => ({
      ...prevData,
      total: calculateTotal()
    }));
  }, [
    formData.repeats,
    formData.repeatSize,
    formData.totalFabric,
    formData.shrinkage,
    formData.wastage
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  // console.log('noOfDesigns', formData.noOfDesigns); colorId

  const initialRows = [];

  const columns = [
    {
      field: 'collectionId',
      headerName: 'Collection ID',
      editable: true,
      flex: 2,
      type: 'singleSelect',
      valueOptions: collectionList.map((collection) => ({
        value: collection.collectionId,
        label: collection.collectionName
      }))
    },
    {
      field: 'designNo',
      headerName: 'Design No',
      flex: 1,
      editable: true
    },
    {
      field: 'designerName',
      headerName: 'Designer Name',
      flex: 1,
      editable: true
    },
    {
      field: 'poPcs',
      headerName: 'Po PCs',
      flex: 1,
      editable: true
    },
    {
      field: 'dateOfPlanning',
      headerName: 'Date of Planning',
      type: 'date',
      flex: 1,
      editable: true,
      valueGetter: (params) => (params ? new Date(params) : null) // Ensure date is parsed correctly
    },
    {
      field: 'colorId',
      headerName: 'Color',
      flex: 1,
      editable: true,
      type: 'singleSelect'
      // valueOptions: colors.map((color) => ({
      //   value: color.value,
      //   label: color.label
      // }))
    }
  ];
  console.log('designList:', designList);
  const handleSave = () => {
    console.log(formData);
  };

  return (
    <MainCard
      style={{
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#a11f23'
      }}
    >
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Pre Planning
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={formData.collectionId}
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

          <Grid item sm={4}>
            <TextField
              label="No of Design"
              fullWidth
              size="small"
              name="noOfDesigns"
              value={formData.noOfDesigns}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="No of Color"
              fullWidth
              size="small"
              name="noOfColors"
              value={formData.noOfColors}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
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
                  {option.designerName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="Base Color"
              fullWidth
              size="small"
              name="baseColorName"
              value={formData.baseColorName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
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
                <MenuItem
                  key={option.planningHeaderId}
                  value={option.planningHeaderId}
                >
                  {option.batchNo}
                </MenuItem>
              ))}
            </TextField>{' '}
          </Grid>

          <Grid item sm={12}>
            <Divider></Divider>
          </Grid>

          <Grid item sm={3}>
            <TextField
              fullWidth
              select
              label="Select Component"
              defaultValue=""
              size="small"
              name="componentId"
              value={formData.componentId}
              onChange={handleChange}
            >
              {components.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Color"
              fullWidth
              select
              size="small"
              name="colorId"
              value={formData.colorId}
              onChange={handleChange}
            >
              {colors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Cutting Size"
              fullWidth
              size="small"
              name="cuttingSize"
              value={formData.cuttingSize}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              fullWidth
              select
              label="Fabrication"
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
          <Grid item sm={3}>
            <TextField
              fullWidth
              select
              label="No of Heads"
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
          <Grid item sm={3}>
            <TextField
              label="Repeats"
              fullWidth
              size="small"
              name="repeats"
              value={formData.repeats}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Repeat Size"
              fullWidth
              size="small"
              name="repeatSize"
              value={formData.repeatSize}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Total Fabric"
              fullWidth
              size="small"
              name="totalFabric"
              value={formData.totalFabric}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
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
          <Grid item sm={3}>
            <TextField
              label="Shrinkage %"
              fullWidth
              size="small"
              name="shrinkage"
              value={formData.shrinkage}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Wastage %"
              fullWidth
              size="small"
              name="wastage"
              value={formData.wastage}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              label="Total"
              fullWidth
              size="small"
              name="total"
              value={formData.total}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </FormControl>
      <EditAbleDataGrid ncolumns={columns} initialRows={initialRows} />
    </MainCard>
  );
};

export default PrePlanning;
