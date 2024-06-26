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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton
} from '@mui/material';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';

// import dyeing1 from '../../assets/images/planningicons/dyeing1.png';
import { SnackbarProvider, useSnackbar } from 'notistack';

import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { Card, CardHeader, Avatar } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import fabric from '../../assets/images/planningicons/fabric.png';
import '../../assets/scss/style.scss';
import loadingGif from '../../assets/images/loading1.svg';
import { useUser } from 'context/User';

const Fabrication = () => {
  const { user } = useUser();
  const [formErrors, setFormErrors] = useState({});

  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    fabricationId: 0,
    designId: '',
    planningHeaderId: '',
    batchNo: '',
    baseColorId: '',
    baseColorName: '',
    fabricId: '',
    poPcs: '',
    quantity: '',
    rate: '',
    uomId: '',
    total: '',
    unitPrice: '0',
    gst: '', //// not in api
    totalInclGst: '', ///// not in api total*gst
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  useEffect(() => {
    setFormData({
      fabricationId: initialData.fabricationId || 0,
      designId: initialData.designId || '',
      planningHeaderId: initialData.planningHeaderId || '',
      batchNo: initialData.batchNo || '',
      baseColorId: initialData.baseColorId || '',
      baseColorName: initialData.baseColorName || '',
      fabricId: initialData.fabricId || '',
      poPcs: initialData.poPcs || '',
      quantity: initialData.quantity || '',
      rate: initialData.rate || '',
      uomId: initialData.uomId || '',
      total: initialData.total || '',
      unitPrice: initialData.unitPrice || '0',
      gst: initialData.gst || '', //// not in api
      totalInclGst: initialData.totalInclGst || '', ///// not in api total*gst
      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    });
  }, [initialData]);
  const { enqueueSnackbar } = useSnackbar();
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };
  const [loading, setLoading] = useState(false); // State for loading

  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  console.log(collectionData);
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
    formData.planningHeaderId,
    {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    }
  );
  const { data: fabricRequisitionData, refetch: refetchFabricRequisitionData } =
    useGetFabricRequisitionListByBatchNoQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  console.log('fabricRequisitionData', fabricRequisitionData);

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  console.log('planningHeaderId', formData.planningHeaderId);
  console.log('Fabrications', Fabrications);
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
  }, [fabricRequisitionData, refetchFabricRequisitionData]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setUoms(data.uomList);
    }
  }, [lookupData]);

  // console.log('designList', designList);
  // console.log('selectedCollectionId', selectedCollectionId);
  // console.log('batchList', batchList);
  // console.log('uom', uoms);
  // console.log('Fabrications', Fabrications);
  // console.log('initialRows', initialRows);

  const collectionList = collectionData?.result || [];
  // console.log('collectionList', collectionList);
  useEffect(() => {
    const calculateTotal = () => {
      const quantity = parseFloat(formData.quantity) || 0;
      const rate = parseFloat(formData.rate) || 0;
      return (quantity * rate).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      total: calculateTotal()
    }));
    const calculateTotalWithGst = () => {
      const total = parseFloat(formData.total) || 0;
      const gst = parseFloat(formData.gst) || 0;
      return (total * (1 + gst / 100)).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalInclGst: calculateTotalWithGst()
    }));
    const calculateUnitPrice = () => {
      const total = parseFloat(formData.total) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;
      const unitPrice = (total / poPcs).toFixed(2);
      return isNaN(unitPrice) ? 0 : unitPrice;
    };

    setFormData((prevData) => ({
      ...prevData,
      unitPrice: calculateUnitPrice()
    }));
  }, [formData.quantity, formData.rate, formData.total, formData.gst]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setSelectedCollectionId(value);
      setLoading(true);

      setFormData({
        ...formData,
        designId: '',
        baseColorId: '',
        planningHeaderId: '',
        batchNo: '',
        fabricId: '',
        poPcs: '',
        quantity: '',
        rate: '',
        uomId: '',
        total: '',
        unitPrice: '0',
        gst: '', //// not in api
        totalInclGst: '',
        collectionId: value

        // poPcs: selectedCollection ? selectedCollection.poPcs : ''
      });
    } else if (name === 'designId') {
      const selectedDesign = designList.find(
        (design) => design.designId === parseInt(value)
      );
      setFormData({
        ...formData,

        planningHeaderId: '',
        batchNo: '',
        fabricId: '',
        poPcs: '',
        quantity: '',
        rate: '',
        uomId: '',
        total: '',
        unitPrice: '0',
        gst: '', //// not in api
        totalInclGst: '',
        designId: value,
        baseColorId: selectedDesign ? selectedDesign.colorId : '',
        baseColorName: selectedDesign ? selectedDesign.colorName : ''
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        fabricId: '',
        // poPcs: '',
        quantity: '',
        rate: '',
        uomId: '',
        total: '',
        unitPrice: '0',
        gst: '', //// not in api
        totalInclGst: '',
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : ''
      });
      setAccordionExpanded(true);
      setLoading(false);
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

  const overallTotal = initialRows
    .reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0)
    .toFixed(2);

  const localizedTotal = parseFloat(overallTotal).toLocaleString();

  // Calculate the overall total sum including GST
  const overallTotalIncGst = initialRows
    .reduce((sum, row) => sum + (parseFloat(row.totalInclGst) || 0), 0)
    .toFixed(2);

  const localizedTotalIncGst = parseFloat(overallTotalIncGst).toLocaleString();
  console.log('overallTotal', overallTotal);
  console.log('overallTotalIncGst', overallTotalIncGst);
  console.log('localizedTotal', localizedTotal);
  console.log('localizedTotalIncGst', localizedTotalIncGst);

  // Add custom overallTotalIncGst fabric row
  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_FABRIC',
      label: 'Total',
      total: localizedTotal,
      totalInclGst: localizedTotalIncGst
    }
  ];

  const columns = [
    {
      field: 'designNo',
      headerName: 'Design',
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          return 6;
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
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'poPcs',
      headerName: 'PO. Pieces'
    },
    {
      field: 'quantity',
      headerName: 'Quantity'
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'uomName',
      headerName: 'UOM'
    },
    {
      field: 'total',
      headerName: 'Total',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          return 2;
        }
        return undefined;
      },
      valueGetter: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          // console.log('row', row.label);
          return 'Total Including GST';
        }
        return value;
      }
    },
    {
      field: 'gst',
      headerName: 'GST'
    },
    {
      field: 'totalInclGst',
      headerName: 'Total Inc. GST',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_FABRIC') {
          return 2;
        }
        return undefined;
      }
    }
  ];

  const handleSave = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/Fabrication/SaveFabrication',
        formData
      );

      // Handle the response if needed
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

      // Clear the form after successful save
      setFormData((prevFormData) => ({
        designId: prevFormData.designId,
        batchNo: prevFormData.batchNo,
        planningHeaderId: prevFormData.planningHeaderId,
        fabricationId: 0,
        baseColorId: prevFormData.baseColorId,
        baseColorName: prevFormData.baseColorName,
        fabricId: '',
        poPcs: prevFormData.poPcs,
        quantity: '',
        rate: '',
        uomId: '',
        total: '',
        unitPrice: '0',
        gst: '', //// not in api
        totalInclGst: '', ///// not in api total*gst
        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: user.empId
      }));

      refetchFabricRequisitionData();
      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Fabrication not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.fabricId) {
      errors.fabricId = 'fabricId is required';
    }
    if (!formData.gst) {
      errors.gst = 'gst is required';
    }

    if (!formData.uomId) {
      errors.uomId = 'uomId is required';
    }

    if (!formData.rate) {
      errors.rate = 'rate is required';
    }
    return errors;
  };

  console.log('formData', formData);
  const editAPi = `https://gecxc.com:4041/api/Fabrication/SaveFabrication`;
  const deleteApi = `https://gecxc.com:4041/api/Fabrication/DeleteFabricByFabricId?fabricationId=`;
  return (
    <>
      <div className="CardHeader">
        {/* <FormControl> */}
        <Card variant="outlined">
          <CardHeader
            // sx={{ paddingY: 4, marginTop: -1 }}
            className="css-4rfrnx-MuiCardHeader-root"
            avatar={
              <Avatar
                src={fabric}
                sx={{
                  background: 'transparent'
                  // marginTop: -1
                }}
              />
            }
            title="Fabric Requisition"
            titleTypographyProps={{ style: { color: 'white' } }}
          ></CardHeader>
          <Grid
            container
            spacing={2}
            width="Inherit"
            sx={{
              paddingY: 2,
              paddingX: 2
              // backgroundColor: '#e0e0e0'
            }}
          >
            {/* <Grid item xs={3} textAlign="right">
              <Button variant="contained" size="small" onClick={handleSave}>
                Save
              </Button>
            </Grid> */}
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Select Collection"
                name="collectionId"
                value={selectedCollectionId}
                onChange={handleChange}
                size="small"
                required
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

            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Select Design"
                name="designId"
                value={formData.designId}
                onChange={handleChange}
                size="small"
                required
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
                required
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
        {/* </FormControl> */}
        {/* <Grid item xs={12} md={12}>
          <Divider color="#cc8587" sx={{ height: 2, width: '100%' }} />
        </Grid> */}
      </div>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<AddOutlinedIcon />}
          title="Add Fabric Requisition"
          titleTypographyProps={{ style: { color: 'white' } }}
          action={
            <IconButton onClick={handleAccordionToggle} sx={{ mt: '-18px' }}>
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
                  required
                  error={!!formErrors.fabricId}
                  helperText={formErrors.fabricId}
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
                  label="UOM"
                  defaultValue=""
                  size="small"
                  name="uomId"
                  value={formData.uomId}
                  onChange={handleChange}
                  required
                  error={!!formErrors.uomId}
                  helperText={formErrors.uomId}
                >
                  {uoms.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Po Pcs"
                  fullWidth
                  type="number"
                  size="small"
                  name="poPcs"
                  value={formData.poPcs}
                  onChange={handleChange}
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Quantity"
                  fullWidth
                  size="small"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  // required
                  // error={!!formErrors.quantity}
                  // helperText={formErrors.quantity}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  type="number"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  required
                  error={!!formErrors.rate}
                  helperText={formErrors.rate}
                />
              </Grid>

              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Total"
                  fullWidth
                  size="small"
                  type="number"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Unit Price"
                  fullWidth
                  size="small"
                  name="unitPrice"
                  value={formData.unitPrice}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="GST"
                  fullWidth
                  size="small"
                  type="number"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  required
                  error={!!formErrors.gst}
                  helperText={formErrors.gst}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Total Inc GST."
                  fullWidth
                  size="small"
                  type="number"
                  name="totalInclGst"
                  value={formData.totalInclGst}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} textAlign="right">
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>
      <Grid item xs={12} md={12}>
        <Divider
          // color="#cc8587"
          sx={{ height: 1, width: '100%', marginTop: 1, marginBottom: 0 }}
        />
      </Grid>

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid sx={{ marginTop: 2 }} item xs={12}>
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
              <ReuseableDataGrid
                iColumns={columns}
                initialRows={rows}
                setInitialData={setInitialData}
                deleteApi={deleteApi}
                deleteBy="fabricationId"
                refetch={refetchFabricRequisitionData}
                setAccordionExpanded={setAccordionExpanded}
                fileName="Fabrication Requistion List"
              />
            )}
            {/* <EditAbleDataGrid
              ncolumns={columns}
              initialRows={initialRows}
              formData={formData}
              editAPi={editAPi}
              refetch={refetchFabricRequisitionData}
              deleteApi={deleteApi}
              deleteBy="fabricationId"
              disableAddRecord={true}
            /> */}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Fabrication;
