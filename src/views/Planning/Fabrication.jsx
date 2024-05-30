/* eslint-disable prettier/prettier */
// material-ui
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
<<<<<<< HEAD
// import { useState } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Elogo from '../../assets/images/ELogo.png';
=======
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

>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import { color } from 'framer-motion';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';

// ==============================|| SAMPLE PAGE ||============================== //

const Fabrication = () => {
<<<<<<< HEAD
  const initialRows = [
    {
      id: 1,
      name: 'Fabrication',
      age: 25,
      joinDate: new Date('2024-05-25'),
      role: 'developer'
    }
  ];

  const columns = [
    { field: 'name', headerName: 'Name', editable: true, flex: 2 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
=======
  const [formData, setFormData] = useState({
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
    gst: '', //// not in api
    totalInclGst: '', ///// not in api total*gst
    createdOn: '2024-05-29T09:56:23.916Z',
    createdBy: 0,
    lastUpdatedOn: '2024-05-29T09:56:23.916Z',
    LastUpdatedBy: 0
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

  // const initialRows = [
  //   {
  //     id: 1,
  //     fabricationId: 1,
  //     designId: 1,
  //     batchNo: 'D-01-5-24-1',
  //     baseColorId: 74,
  //     fabricId: 9,
  //     poPcs: 0,
  //     quantity: 7.0,
  //     rate: 0.0,
  //     uomId: 138,
  //     total: 0.0,
  //     unitPrice: 0.0,
  //     createdOn: '2024-05-23T07:07:11.547',
  //     createdBy: 0,
  //     lastUpdatedOn: '2024-05-23T07:07:11.547',
  //     lastUpdatedBy: 0,
  //     baseColorName: 'STEEL GREY',
  //     fabricName: 'Bambar Chiffon ',
  //     orderNumber: null,
  //     designNo: 'Design-01-A',
  //     collectionId: 26
  //   }
  // ];

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
      return total * gst;
    };

    setFormData((prevData) => ({
      ...prevData,
      totalInclGst: calculateTotalWithGst()
    }));
    const calculateUnitPrice = () => {
      const total = parseFloat(formData.total) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;
      return total / poPcs;
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
    // {
    //   field: 'OrderNumber ',
    //   headerName: 'Component',
    //   editable: true,
    //   flex: 1,
    //   type: 'singleSelect',
    //   valueOptions: components.map((collection) => ({
    //     value: collection.lookUpId,
    //     label: collection.lookUpName
    //   }))
    // },
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
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
      flex: 1,
      editable: true
    },
    {
<<<<<<< HEAD
      field: 'role',
      headerName: 'Department',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development']
=======
      field: 'quantity',
      headerName: 'quantity',
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
      headerName: 'total',
      flex: 1,
      editable: true
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      flex: 1,
      editable: true
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
      editable: true
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
    }

    // {
    //   field: 'totalFabric',
    //   headerName: 'Total Fabric',
    //   flex: 1,
    //   editable: true,

    //   valueSetter: (params, row) => {
    //     const repeats = row.repeats ?? 0;
    //     const repeatSize = row.repeatSize ?? 0;
    //     const totalFabric = repeats * repeatSize;
    //     console.log('totalFabric', totalFabric);
    //     return { ...row, totalFabric };
    //   }
    // },
  ];

<<<<<<< HEAD
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
=======
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
      refetchFabricRequisitionData();
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle the error if needed
    }
  };

  console.log('formData', formData);
  const editAPi = `https://gecxc.com:4041/api/Fabrication/SaveFabrication`;
  const deleteApi = ``;
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23'
      }}
    >
      {/* <img src={Elogo} a width="100%" /> */}
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
<<<<<<< HEAD
              Fabrication
=======
              Fabric Requisition
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small" color="error">
              Save
            </Button>
          </Grid>
<<<<<<< HEAD
          <Grid item sm={6}>
=======
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
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select Design"
              defaultValue=""
              //   helperText="Please Select Collection"
              size="small"
            >
              {design.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
<<<<<<< HEAD
          <Grid item sm={6}>
=======
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
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Fabric "
              defaultValue="EUR"
              //   helperText="Fabric Quality"
              size="small"
            >
<<<<<<< HEAD
              {fQuality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
=======
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
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabric}
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
                </MenuItem>
              ))}
            </TextField>
          </Grid>
<<<<<<< HEAD
          <Grid item sm={2}>
            <TextField label="Po PCs " fullWidth size="small" />
=======
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
              label="Po Pcs"
              fullWidth
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
            />
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
          </Grid>
          <Grid item sm={2}>
            <TextField label="Quantity " fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Uom" fullWidth size="small" />
          </Grid>
<<<<<<< HEAD
          <Grid item sm={2}>
            <TextField label="Rate/Uom" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Total(Qty*Rate)" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Unit Price Total/PoPcs" fullWidth size="small" />
=======

          <Grid item xs={12} md={3}>
            <TextField
              label="Total"
              fullWidth
              size="small"
              name="total"
              value={formData.total}
              onChange={handleChange}
            />
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
          </Grid>
          <Grid item sm={8}></Grid>
          <Grid item sm={2}>
            <TextField label="GST" fullWidth size="small" />
          </Grid>
          <Grid item sm={2}>
            <TextField label="Total Incl GST" fullWidth size="small" />
          </Grid>
          <Divider></Divider>
          <Grid item sm={12} paddingTop={1}>
            <EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="GST"
              fullWidth
              size="small"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total Inc GSt."
              fullWidth
              size="small"
              name="totalInclGst"
              value={formData.totalInclGst}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </FormControl>
<<<<<<< HEAD
=======
      <Grid container spacing={2} width="Inherit">
        <Grid sx={{ marginTop: 2 }} item xs={12}>
          <EditAbleDataGrid
            ncolumns={columns}
            initialRows={initialRows}
            formData={formData}
            editAPi={editAPi}
            // deleteApi={deleteApi}
            // deleteBy="planningId"
            // disableAddRecord={true}
          />
        </Grid>
      </Grid>
>>>>>>> 6f0089e3e6a1cee96730bc41f1ba0cb084cdf4de
    </MainCard>
  );
};

export default Fabrication;
