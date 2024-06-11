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
  AccordionSummary
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
import fabric from '../../assets/images/planningicons/fabric.png';
// import dyeing1 from '../../assets/images/planningicons/dyeing1.png';
import { SnackbarProvider, useSnackbar } from 'notistack';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardHeader, Avatar } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import '../../assets/scss/style.scss';

const Fabrication = () => {
  const [formData, setFormData] = useState({
    designId: '',
    planningHeaderId: '',
    batchNo: '',
    baseColorId: '',
    baseColorName: '',
    fabricId: '',
    poPcs: '',
    quantity: '',
    rate: '',
    uomId: 'string',
    total: '',
    unitPrice: '0',
    gst: '', //// not in api
    totalInclGst: '', ///// not in api total*gst
    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });
  const { enqueueSnackbar } = useSnackbar();
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(isExpanded);
  };

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
      return quantity * rate;
    };

    setFormData((prevData) => ({
      ...prevData,
      total: calculateTotal()
    }));
    const calculateTotalWithGst = () => {
      const total = parseFloat(formData.total) || 0;
      const gst = parseFloat(formData.gst) || 0;
      return total * (1 + gst / 100);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalInclGst: calculateTotalWithGst()
    }));
    const calculateUnitPrice = () => {
      const total = parseFloat(formData.total) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;
      const unitPrice = total / poPcs;
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
      setFormData({
        ...formData,
        collectionId: value

        // poPcs: selectedCollection ? selectedCollection.poPcs : ''
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
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : '',
        poPcs: selectedBatch ? selectedBatch.poPcs : ''
      });
      setAccordionExpanded(true);
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
      field: 'fabricId',
      headerName: 'Fabric',
      editable: true,
      flex: 2,
      type: 'singleSelect',
      valueOptions: Fabrications.map((option) => ({
        value: option.fabricId,
        label: option.fabric
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
        // console.log('total', total);
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
        // console.log('unitPrice', unitPrice);
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
        // console.log('totalInclGst', totalInclGst);
        return { ...row, totalInclGst };
      }
    }
  ];

  // const columns = [
  //   // {
  //   //   field: 'OrderNumber ',
  //   //   headerName: 'Component',
  //   //   editable: true,
  //   //   flex: 1,
  //   //   type: 'singleSelect',
  //   //   valueOptions: components.map((collection) => ({
  //   //     value: collection.lookUpId,
  //   //     label: collection.lookUpName
  //   //   }))
  //   // },
  //   {
  //     field: 'designId',
  //     headerName: 'Design',
  //     editable: true,
  //     flex: 1,
  //     type: 'singleSelect',
  //     valueOptions: designList.map((collection) => ({
  //       value: collection.designId,
  //       label: collection.designNo
  //     }))
  //   },
  //   {
  //     field: 'poPcs',
  //     headerName: 'PO. Pieces',
  //     flex: 1,
  //     editable: true
  //   },
  //   {
  //     field: 'quantity',
  //     headerName: 'quantity',
  //     flex: 1,
  //     editable: true
  //   },
  //   {
  //     field: 'rate',
  //     headerName: 'Rate',
  //     editable: true,
  //     flex: 1
  //   },
  //   {
  //     field: 'uomId',
  //     headerName: 'UOM',
  //     editable: true,
  //     flex: 1,
  //     type: 'singleSelect',
  //     valueOptions: uoms.map((collection) => ({
  //       value: collection.lookUpId,
  //       label: collection.lookUpName
  //     }))
  //   },

  //   {
  //     field: 'total',
  //     headerName: 'total',
  //     flex: 1,
  //     editable: true
  //   },
  //   {
  //     field: 'unitPrice',
  //     headerName: 'Unit Price',
  //     flex: 1,
  //     editable: true
  //   },
  //   {
  //     field: 'gst',
  //     headerName: 'GST',
  //     flex: 1,
  //     editable: true
  //   },
  //   {
  //     field: 'totalInclGst',
  //     headerName: 'Total Inc. GST',
  //     flex: 1,
  //     editable: true
  //   }

  //   // {
  //   //   field: 'totalFabric',
  //   //   headerName: 'Total Fabric',
  //   //   flex: 1,
  //   //   editable: true,

  //   //   valueSetter: (params, row) => {
  //   //     const repeats = row.repeats ?? 0;
  //   //     const repeatSize = row.repeatSize ?? 0;
  //   //     const totalFabric = repeats * repeatSize;
  //   //     console.log('totalFabric', totalFabric);
  //   //     return { ...row, totalFabric };
  //   //   }
  //   // },
  // ];

  const handleSave = async () => {
    try {
      // Make the API call
      const response = await axios.post(
        'https://gecxc.com:4041/api/Fabrication/SaveFabrication',
        formData
      );
      refetchFabricRequisitionData();

      // Handle the response if needed
      console.log('Save response:', response.data);
      enqueueSnackbar('Fabrication saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      // Clear the form after successful save
      setFormData({
        designId: formData.designId,
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
      refetchFabricRequisitionData();
      setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Fabrication not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
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
            className="css-4rfrnx-MuiCardHeader-root"
            avatar={<Avatar src={fabric} sx={{ background: 'transparent' }} />}
            title="Fabric Requisition"
            titleTypographyProps={{ style: { color: 'white' } }}
          ></CardHeader>
          <Grid
            container
            spacing={2}
            width="Inherit"
            sx={{ paddingY: 2, paddingX: 2 }}
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
                >
                  {Fabrications.map((option) => (
                    <MenuItem key={option.fabricId} value={option.fabricId}>
                      {option.fabric}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={2}>
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

              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Po Pcs"
                  fullWidth
                  type="number"
                  size="small"
                  name="poPcs"
                  value={formData.poPcs}
                  onChange={handleChange}
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
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="Total Inc GSt."
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
          sx={{ height: 1, width: '100%', marginTop: 1, marginBottom: 1 }}
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
            <EditAbleDataGrid
              ncolumns={columns}
              initialRows={initialRows}
              formData={formData}
              editAPi={editAPi}
              refetch={refetchFabricRequisitionData}
              deleteApi={deleteApi}
              deleteBy="fabricationId"
              disableAddRecord={true}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Fabrication;
