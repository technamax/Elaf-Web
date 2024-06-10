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
  Divider,
  Autocomplete,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import { useGetCollectionFromPlanningHeaderQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';
// import Card from '@mui/material/Card';
import { Card, CardHeader, Avatar } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import loadingGif from '../../assets/images/loadingGif.gif';
// import CardHeader from '@mui/material/CardHeader';
import '../../assets/scss/style.scss';
const PrePlanning = () => {
  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });

  const [designList, setDesignList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      refetch();
    }
  }, [designData]);
  console.log('designList', designList);
  console.log('collectionData', collectionData);

  const collectionList = collectionData?.result || [];
  // const designList = designData?.result || [];
  const [loading, setLoading] = useState(false); // State for loading

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
  const [initialRows, setInitialRows] = useState([]);

  const [formData, setFormData] = useState({
    collectionId: '',
    baseColorId: '', // not in api
    baseColorName: '', // not in api
    noOfDesigns: '', // not in apis
    noOfColors: '', // not in api
    planningHeaderId: '',
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
        const data = response.data.result[0];
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
        setBatchList(response.data.result);
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };

    const GetPrePlanningByPlanningHeaderId = async (id) => {
      // setLoading(true);
      try {
        const response = await axios.get(
          `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningByPlanningHeaderId?planningHeaderId=${id}`
        );
        console.log('GetPrePlanningByPlanningHeaderI', response.data.result);
        setInitialRows(
          response.data.result.map((item, index) => ({ ...item, id: index }))
        );
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };
    if (formData.designId) {
      GetPrePlanningHeaderByDesignId(formData.designId);
    }
    if (formData.designId) {
      GetPrePlanningByPlanningHeaderId(formData.planningHeaderId);
    }
    // setLoading(false);
  }, [formData.designId, formData.planningHeaderId]);

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
      return (totalFabric * (100 + (shrinkage + wastage))) / 100;
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
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const [expanded, setExpanded] = useState(false);

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
      setAccordionExpanded(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  // console.log('noOfDesigns', formData.noOfDesigns); colorId

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/PrePlanning/SavePrePlanning',
        {
          designId: parseInt(formData.designId),
          planningHeaderId: parseInt(formData.planningHeaderId),
          componentId: parseInt(formData.componentId),
          colorId: parseInt(formData.colorId),
          batchNo: formData.batchNo,
          baseColorId: parseInt(formData.baseColorId),
          cuttingSize: parseFloat(formData.cuttingSize),
          fabricId: parseInt(formData.fabricId),
          noOfHeads: parseInt(formData.noOfHeads),
          repeats: parseFloat(formData.repeats),
          repeatSize: parseFloat(formData.repeatSize),
          uomId: parseInt(formData.uomId),
          totalFabric: parseFloat(formData.totalFabric),
          shrinkage: parseFloat(formData.shrinkage),
          wastage: parseFloat(formData.wastage),
          total: parseFloat(formData.total),
          appId: formData.appId,
          createdOn: formData.createdOn,
          createdBy: formData.createdBy,
          lastUpdatedBy: formData.lastUpdatedBy,
          lastUpdatedOn: formData.lastUpdatedOn
        }
      );
      console.log('Data saved successfully:', response.data);
      enqueueSnackbar('Pre Planning saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });
      setFormData({
        collectionId: formData.collectionId,
        designId: formData.designId,
        batchNo: formData.batchNo,
        baseColorName: formData.baseColorName,
        planningHeaderId: formData.planningHeaderId,
        noOfDesigns: formData.noOfDesigns,
        noOfColors: formData.noOfColors,
        // Clear other fields
        componentId: '',
        cuttingSize: '',
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

      // Fetch the latest data
      const newRowsResponse = await axios.get(
        `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningByPlanningHeaderId?planningHeaderId=${formData.planningHeaderId}`
      );
      setInitialRows(
        newRowsResponse.data.result.map((item, index) => ({
          ...item,
          id: index
        }))
      );

      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Pre Planning not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
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
        const total = (totalFabric * (100 + (shrinkage + wastage))) / 100;

        console.log('totalFabric', totalFabric);
        return { ...row, total };
      }
    }
  ];
  console.log('batchList:', batchList);
  const editAPi = `https://gecxc.com:4041/api/PrePlanning/SavePrePlanning`;
  const deleteApi = `https://gecxc.com:4041/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=`;
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(isExpanded); // Toggle accordion state based on the icon click
  };
  return (
    <>
      <div className="CardHeader">
        <Card variant="outlined">
          <CardHeader
            className="css-4rfrnx-MuiCardHeader-root"
            avatar={<SendAndArchiveIcon />}
            title="Pre Planning"
            titleTypographyProps={{ style: { color: 'white' } }}
          >
            {' '}
          </CardHeader>
          <Grid
            container
            spacing={2}
            width="Inherit"
            sx={{ paddingY: 2, paddingX: 2 }}
          >
            <Grid item xs={12} md={2}>
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
                  <MenuItem
                    key={option.collectionId}
                    value={option.collectionId}
                  >
                    {option.collectionName}
                  </MenuItem>
                ))}
              </TextField>{' '}
            </Grid>
            <Grid item xs={12} md={2}>
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
            <Grid item xs={12} md={2}>
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
            <Grid item xs={12} md={2}>
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
            <Grid item xs={12} md={2}>
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

            <Grid item xs={12} md={2}>
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
          </Grid>
        </Card>
      </div>

      {/* <MainCard className="MainCard"> */}
      {/* <div className="CardHeader"> */}
      <Card variant="outlined">
        <CardHeader
          className="MainCard"
          avatar={<AddOutlinedIcon />}
          title="Add Pre Planning"
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
          >
            {/* <Typography variant="h6" gutterBottom>
              Add Planning Fields
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              spacing={2}
              width="Inherit"
              sx={{ paddingY: 2, paddingX: 2 }}
            >
              {/* <FormControl> */}
              {/* <Grid container spacing={2} width="Inherit"> */}
              <Grid item xs={12} md={2}>
                {/* <TextField
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
              </TextField> */}
                <Autocomplete
                  fullWidth
                  options={components}
                  getOptionLabel={(option) => option.lookUpName}
                  value={
                    components.find(
                      (component) => component.lookUpId === formData.componentId
                    ) || null
                  }
                  onChange={(event, newValue) => {
                    handleChange({
                      target: {
                        name: 'componentId',
                        value: newValue ? newValue.lookUpId : ''
                      }
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Component"
                      size="small"
                      name="componentId"
                      value={formData.componentId}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                {/* <TextField
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
              </TextField> */}{' '}
                <Autocomplete
                  fullWidth
                  options={colors}
                  getOptionLabel={(option) => option.lookUpName}
                  value={
                    colors.find(
                      (color) => color.lookUpId === formData.colorId
                    ) || null
                  }
                  onChange={(event, newValue) => {
                    handleChange({
                      target: {
                        name: 'colorId',
                        value: newValue ? newValue.lookUpId : ''
                      }
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Color"
                      size="small"
                      value={formData.colorId}
                      name="colorId"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Cutting Size"
                  fullWidth
                  size="small"
                  name="cuttingSize"
                  type="number"
                  value={formData.cuttingSize}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                {/* <TextField
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
              </TextField> */}
                <Autocomplete
                  fullWidth
                  options={Fabrications}
                  getOptionLabel={(option) => option.lookUpName}
                  value={
                    Fabrications.find(
                      (fabric) => fabric.lookUpId === formData.fabricId
                    ) || null
                  }
                  onChange={(event, newValue) => {
                    handleChange({
                      target: {
                        name: 'fabricId',
                        value: newValue ? newValue.lookUpId : ''
                      }
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Fabrication"
                      size="small"
                      name="fabricId"
                      value={formData.fabricId}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={2}>
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
              <Grid item xs={12} md={2}>
                <TextField
                  label="Repeats"
                  fullWidth
                  size="small"
                  name="repeats"
                  type="number"
                  value={formData.repeats}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Repeat Size"
                  fullWidth
                  type="number"
                  size="small"
                  name="repeatSize"
                  value={formData.repeatSize}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Total Fabric"
                  fullWidth
                  size="small"
                  name="totalFabric"
                  value={formData.totalFabric}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  select
                  label="UOM"
                  type="number"
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
              <Grid item xs={12} md={2}>
                <TextField
                  label="Shrinkage %"
                  fullWidth
                  size="small"
                  type="number"
                  name="shrinkage"
                  value={formData.shrinkage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Wastage %"
                  fullWidth
                  size="small"
                  type="number"
                  name="wastage"
                  value={formData.wastage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Total"
                  fullWidth
                  type="number"
                  size="small"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
              {/* </FormControl> */}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>
      {/* </MainCard> */}
      <Grid item xs={12} md={12}>
        <Divider
          // color="#cc8587"
          sx={{ height: 1, width: '100%', marginTop: 1, marginBottom: 0 }}
        />
      </Grid>

      {/* <Grid container spacing={2} width="Inherit"> */}
      <Card variant="outlined">
        <CardHeader
          className="MainCard"
          avatar={<VisibilityOutlinedIcon />}
          title="View"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid sx={{ paddingY: 1, paddingX: 1 }}>
          <Grid sx={{}} item xs={12}>
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center'
                  // height: '100vh'
                  top: '40%',
                  position: 'absolute',
                  left: '45%'
                }}
              >
                <img
                  src={loadingGif}
                  alt="Loading"
                  style={{
                    width: 300
                    // height: 300
                    // opacity: 0.8
                  }}
                />
              </div>
            ) : (
              <EditAbleDataGrid
                ncolumns={columns}
                initialRows={initialRows}
                formData={formData}
                editAPi={editAPi}
                deleteApi={deleteApi}
                deleteBy="planningId"
                disableAddRecord={true}
              />
            )}
          </Grid>
        </Grid>
      </Card>

      {/* </MainCard> */}
    </>
  );
};

export default PrePlanning;
