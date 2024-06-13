/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  Autocomplete,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton
} from '@mui/material';

import { useGetCollectionFromPlanningHeaderQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningByPlanningHeaderIdQuery } from 'api/store/Apis/prePlanningHeaderApi';

import { Card, CardHeader, Avatar } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import '../../assets/scss/style.scss';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import loadingGif from '../../assets/images/loading1.svg';
import { useUser } from 'context/User';

const PrePlanning = () => {
  const { user } = useUser();
  console.log('user', user);
  const [initialData, setInitialData] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  const [formData, setFormData] = useState({
    planningId: 0,
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
    createdBy: user.empId,
    lastUpdatedBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    isSchiffili: false,
    repeatsInMtr: ''
  });
  console.log('formData', formData);

  useEffect(() => {
    setFormData({
      planningId: initialData?.planningId || 0,
      collectionId: initialData?.collectionId || '',
      baseColorId: initialData?.baseColorId || '', // not in api
      baseColorName: initialData?.baseColorName || '', // not in api
      noOfDesigns: initialData?.noOfDesigns || '', // not in apis
      noOfColors: initialData?.noOfColors || '', // not in api
      planningHeaderId: initialData?.planningHeaderId || '',
      designId: initialData?.designId || '',
      batchNo: initialData?.batchNo || '',
      componentId: initialData?.componentId || '',
      cuttingSize: initialData?.cuttingSize || '', // not in api
      colorId: initialData?.colorId || '',
      fabricId: initialData?.fabricId || '',
      noOfHeads: initialData?.noOfHeads || '',
      repeats: initialData?.repeats || '',
      repeatSize: initialData?.repeatSize || '',
      uomId: initialData?.uomId || '',
      totalFabric: initialData?.totalFabric || '',
      shrinkage: initialData?.shrinkage || '',
      wastage: initialData?.wastage || '',
      total: initialData?.total || '',
      appId: 1,
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedBy: user.empId,
      lastUpdatedOn: new Date().toISOString(),
      isSchiffili: initialData?.isSchiffili || false,
      repeatsInMtr: initialData?.repeatsInMtr || ''
    });
  }, [initialData]);

  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });

  const { data: prePlanningList, refetch: refetchPrePlanningList } =
    useGetPrePlanningByPlanningHeaderIdQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  const [designList, setDesignList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      refetch();
    }
  }, [designData]);
  useEffect(() => {
    if (prePlanningList) {
      setInitialRows(
        prePlanningList.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [prePlanningList, refetchPrePlanningList]);
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

    // const GetPrePlanningByPlanningHeaderId = async (id) => {
    //   // setLoading(true);
    //   try {
    //     const response = await axios.get(
    //       `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningByPlanningHeaderId?planningHeaderId=${id}`
    //     );
    //     console.log('GetPrePlanningByPlanningHeaderI', response.data.result);
    //     setInitialRows(
    //       response.data.result.map((item, index) => ({ ...item, id: index }))
    //     );
    //   } catch (error) {
    //     console.error('Error fetching pre-planning lookup data:', error);
    //   }
    // };
    if (formData.designId) {
      GetPrePlanningHeaderByDesignId(formData.designId);
    }
    // if (formData.designId) {
    //   GetPrePlanningByPlanningHeaderId(formData.planningHeaderId);
    // }
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

    const calculateSizeinMeter = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const repeatSize = parseFloat(formData.repeatSize) || 0;
      return 0.9144 * repeatSize;
    };

    setFormData((prevData) => ({
      ...prevData,
      repeatsInMtr: calculateSizeinMeter()
    }));
    const calculateSizeinMeterChecked = () => {
      const repeats = parseFloat(formData.repeats) || 0;
      const repeatsInMtr = parseFloat(formData.repeatsInMtr) || 0;
      return repeatsInMtr * repeats;
    };
    setFormData((prevData) => ({
      ...prevData,
      totalFabric: prevData.isSchiffili
        ? calculateSizeinMeterChecked()
        : calculateTotalFabric(prevData)
    }));
  }, [
    formData.repeats,
    formData.repeatSize,
    formData.totalFabric,
    formData.shrinkage,
    formData.wastage,
    formData.repeatsInMtr,
    formData.isSchiffili
  ]);
  const calculateTotalFabric = (data) => {
    const repeats = parseFloat(data.repeats) || 0;
    const repeatSize = parseFloat(data.repeatSize) || 0;
    return repeats * repeatSize;
  };
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setLoading(true);

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
      setLoading(false);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  // console.log('noOfDesigns', formData.noOfDesigns); colorId

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/PrePlanning/SavePrePlanning',
        formData
      );
      console.log('Data saved successfully:', response.data);
      console.log('Save response:', response.data);
      if (!response.data.success) {
        enqueueSnackbar(
          `${response.data.message} !`,

          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar('Fabrication saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }
      // enqueueSnackbar('Pre Planning saved successfully!', {
      //   variant: 'success',
      //   autoHideDuration: 5000
      // });
      setFormData((prevFormData) => ({
        planningId: 0,
        collectionId: prevFormData.collectionId,
        designId: prevFormData.designId,
        batchNo: prevFormData.batchNo,
        planningHeaderId: prevFormData.planningHeaderId,
        baseColorId: prevFormData.baseColorId, // not in api
        baseColorName: prevFormData.baseColorName, // not in api
        noOfDesigns: prevFormData.noOfDesigns, // not in apis
        noOfColors: prevFormData.noOfColors, // not in api
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
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId,
        isSchiffili: false,
        repeatsInMtr: ''
      }));

      refetchPrePlanningList();

      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Pre Planning not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,

      [name]: checked,
      uomId: checked ? 139 : prevState.uomId // Set uomId to meters if checked
    }));
  };

  console.log('initialRows', initialRows);
  const totalFabric = initialRows
    .reduce((sum, row) => sum + (row.totalFabric ?? 0), 0)
    .toFixed(2);

  // Calculate the overall total sum
  const total = initialRows
    .reduce((sum, row) => sum + (row.total ?? 0), 0)
    .toFixed(2);

  // Add custom total fabric row
  const rows = [
    ...initialRows,
    { id: 'TOTAL_FABRIC', label: 'Total Fabric', totalFabric, total }
  ];

  // Base column options
  const baseColumnOptions = {
    sortable: false,
    pinnable: false,
    hideable: false
  };

  console.log('rows', rows);
  const columns = [
    {
      field: 'componentName',
      headerName: 'Component',

      ...baseColumnOptions,

      colSpan: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          return 7;
        }
        return undefined;
      },
      valueGetter: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          // console.log('row', row.label);
          return row.label;
        }
        return value;
      }
    },
    {
      field: 'color',
      headerName: 'Color',
      // editable: true,
      // flex: 1,
      ...baseColumnOptions
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size',
      // flex: 1,
      ...baseColumnOptions
      // editable: true/
    },
    {
      field: 'fabric',
      headerName: 'Fabrication',
      // editable: true,
      ...baseColumnOptions
    },
    {
      field: 'noOfHeadName',
      headerName: 'No. Of Heads',
      // editable: true,
      ...baseColumnOptions
    },
    {
      field: 'repeats',
      headerName: 'Repeats',
      ...baseColumnOptions
      // flex: 1,
      // editable: true
    },
    {
      field: 'repeatSize',
      headerName: 'Repeat Size',
      ...baseColumnOptions
      // flex: 1,
      // editable: true
    },
    {
      field: 'totalFabric',
      headerName: 'Total Fabric',
      ...baseColumnOptions
    },
    {
      field: 'uom',
      headerName: 'UOM',

      colSpan: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          return 3;
        }
        return undefined;
      },
      valueGetter: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          // console.log('row', row.label);
          return 'OverAll Total';
        }
        return value;
      }
    },
    {
      field: 'shrinkage',
      headerName: 'Shrinkage %'
      // flex: 1
      // editable: true
    },
    {
      field: 'wastage',
      headerName: 'Wastage %'
      // flex: 1
      // editable: true
    },
    {
      field: 'total',
      headerName: 'Total'
    }
  ];

  const getCellClassName = ({ row, field }) => {
    if (row.id === 'TOTAL_FABRIC') {
      if (field === 'componentName' || field === 'uom') {
        // console.log(`Applying bold class to row ${row.id} and field ${field}`); // Debugging log
        return 'bold';
      }
    }
    return '';
  };
  console.log('batchList:', batchList);

  const deleteApi = `https://gecxc.com:4041/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=`;
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded); // Toggle accordion state based on the icon click
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
          action={
            <IconButton onClick={handleAccordionToggle}>
              <ExpandMoreIcon style={{ color: 'white' }} />
            </IconButton>
          }
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        ></CardHeader>
        <Accordion
          expanded={accordionExpanded}
          onChange={handleAccordionToggle}
          sx={{}}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          ></AccordionSummary> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ display: 'none' }} // Hide this since we're using the icon in the CardHeader
          ></AccordionSummary>
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
                  disabled={formData.isSchiffili} // Disable when isSchiffili is checked
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
              <Grid item xs={12} md={2} textAlign="right">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.isSchiffili}
                      onChange={handleCheckboxChange}
                      name="isSchiffili"
                    />
                  }
                  label="Is Schiffli"
                />
              </Grid>
              {formData.isSchiffili ? (
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1} width="Inherit">
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="repeat in mtr"
                        fullWidth
                        size="small"
                        name="repeatsInMtr"
                        disabled
                        value={formData.repeatsInMtr}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
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
            ) : (
              // <Box
              //   sx={{
              //     height: 500,
              //     width: 'inherit',
              //     '& .actions': {
              //       color: 'text.secondary'
              //     },
              //     '& .textPrimary': {
              //       color: 'text.primary'
              //     },
              //     '& .bold': {
              //       fontWeight: 600
              //     }
              //   }}
              // >
              //   <DataGrid
              //     // {...data}
              //     rows={rows}
              //     columns={columns}
              //     rowLength={100}
              //     getCellClassName={getCellClassName}
              //     sx={{
              //       boxShadow: 2,
              //       border: 2,
              //       borderColor: 'primary.light',
              //       '& .MuiDataGrid-cell:hover': {
              //         color: 'primary.main'
              //       }
              //     }}
              //   />{' '}
              // </Box>
              <ReuseableDataGrid
                iColumns={columns}
                initialRows={rows}
                setInitialData={setInitialData}
                deleteApi={deleteApi}
                deleteBy="planningId"
                refetch={refetchPrePlanningList}
                getCellClassName={getCellClassName}
                setAccordionExpanded={setAccordionExpanded}
                fileName="PrePlanningList"
              />
              // <EditAbleDataGrid
              //   ncolumns={columns}
              //   initialRows={rows}
              //   formData={formData}
              //   editAPi={editAPi}
              //   deleteApi={deleteApi}
              //   deleteBy="planningId"
              //   disableAddRecord={true}
              //   getCellClassName={getCellClassName}
              // />
            )}
          </Grid>
        </Grid>
      </Card>

      {/* </MainCard> */}
    </>
  );
};

export default PrePlanning;
