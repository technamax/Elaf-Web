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
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  Box,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetSchffiliListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetPrePlanningHeaderByDesignIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetComponentsByBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useGetFabricByComponentsAndBatchNoQuery } from 'api/store/Apis/prePlanningHeaderApi';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import schiffli from '../../assets/images/planningicons/schiffli.png';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AssignVendorFormTable from 'components/assignVendorFormTable';

//////
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
///////

const AdditionalProcess = () => {
  const [initialData, setInitialData] = useState([]);
  const [formData, setFormData] = useState({
    additionalProcessId: 0,
    designId: '',
    planningHeaderId: 0,
    batchNo: '',
    componentId: '',
    colorId: '',
    fabricId: '',
    vendorId: '', /////////////checkapi
    baseColorName: '',
    poPcs: '',
    pcsPerComponent: '',
    processTypeId: '',
    quantity: '',
    ratePerPcs: 0,
    totalAmount: 0,
    costPerComponent: '',

    createdOn: new Date().toISOString(),
    createdBy: 0,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: 0
  });

  useEffect(() => {
    setFormData({
      additionalProcessId: initialData?.additionalProcessId || 0,
      designId: initialData?.designId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      batchNo: initialData?.batchNo || '',
      componentId: initialData?.componentId || '',
      vendorId: initialData?.vendorId || '',
      fabricId: initialData?.fabricId || '',
      colorId: initialData?.colorId || '', //from dying screen coming from fabricAPi
      poPcs: initialData?.poPcs || '',
      baseColorName: initialData?.baseColorName || '',
      pcsPerComponent: initialData?.baseColorName || '',
      processTypeId: initialData?.processTypeId || '',
      quantity: initialData?.quantity || '',
      ratePerPcs: initialData?.ratePerPcs || 0,
      totalAmount: initialData?.totalAmount || 0,
      costPerComponent: initialData?.costPerComponent || '',

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || 0,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: 0
    });
  }, [initialData]);
  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

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
  const { data: fabricData } = useGetFabricByComponentsAndBatchNoQuery(
    {
      batchNo: formData.planningHeaderId,
      componentId: formData.componentId
    },
    {
      skip: !formData.planningHeaderId || !formData.componentId
    }
  );
  const { data: colorData } =
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery(
      {
        batchNo: formData.planningHeaderId,
        componentId: formData.componentId,
        fabricId: formData.fabricId
      },
      {
        skip:
          !formData.planningHeaderId ||
          !formData.componentId ||
          !formData.fabricId
      }
    );

  const { data: schiffliList, refetch: refetchSchiffliList } =
    useGetSchffiliListByBatchNoQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  const { data: componentsByBatch } = useGetComponentsByBatchNoQuery(
    formData.planningHeaderId,
    {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    }
  );
  console.log('formData.planningHeaderId', formData.planningHeaderId);
  console.log('collectionData', collectionData);
  console.log('schiffliList', schiffliList);

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [Fabrications, setFabrications] = useState([]);
  const [vendors, setVendors] = useState([]);

  const [operatingMachineList, setOperatingMachineList] = useState([]);
  const [workingHeadList, setWorkingHeadList] = useState([]);

  const [colors, setColors] = useState([]);
  // const [initialRows, setInitialRows] = useState([]);
  const [components, setComponents] = useState([]);
  console.log('batchData', batchData);
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
    if (colorData) {
      setColors(fabricData.result);
      // refetchBatches();
    }
  }, [colorData]);
  useEffect(() => {
    if (componentsByBatch) {
      setComponents(componentsByBatch.result);
    }
  }, [componentsByBatch]);
  // useEffect(() => {
  //   if (schiffliList) {
  //     setInitialRows(
  //       schiffliList.result.map((row, index) => ({
  //         id: index,
  //         ...row
  //       }))
  //     );
  //     // refetchBatches();
  //   }
  // }, [schiffliList, refetchSchiffliList]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];

      setVendors(data.vendorList);

      setOperatingMachineList(data.operatingMachineList);
      setWorkingHeadList(data.workingHeadList);
    }
  }, [lookupData]);
  const initialRows = [
    {
      id: 1,
      additionalProcessId: 0,
      designId: 321,
      planningHeaderId: 34,
      batchNo: '3453',
      componentId: '345',
      colorId: 345,
      fabricId: '345',
      vendorId: 'gefg', /////////////checkapi
      baseColorName: 'g4cgd',
      poPcs: 'dfgdf',
      pcsPerComponent: 345,
      processTypeId: 'dfg',
      quantity: 'dfg',
      ratePerPcs: 40,
      totalAmount: 40,
      costPerComponent: '453',

      createdOn: new Date().toISOString(),
      createdBy: 0,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: 0
    }
  ];

  console.log('initialRows', initialRows);
  // console.log('components', components);

  const collectionList = collectionData?.result || [];
  // console.log('collectionList', collectionList);
  const iniPcsPerComponent = formData.pcsPerComponent;
  useEffect(() => {
    const calculatePcsPerComponent = () => {
      const quantity = parseFloat(formData.quantity) || 0;

      return iniPcsPerComponent - quantity;
    };

    setFormData((prevData) => ({
      ...prevData,
      pcsPerComponent: calculatePcsPerComponent()
    }));
    const calculateTotalamount = () => {
      const quantity = parseFloat(formData.quantity) || 0;
      const ratePerPcs = parseFloat(formData.ratePerPcs) || 0;

      return (quantity * ratePerPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      totalAmount: calculateTotalamount()
    }));
    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(formData.totalAmount) || 0;
      const poPcs = parseFloat(formData.poPcs) || 0;

      return (totalAmount / poPcs).toFixed(2);
    };

    setFormData((prevData) => ({
      ...prevData,
      costPerComponent: calculateCostPerComponent()
    }));
  }, [
    formData.quantity,
    formData.ratePerPcs,
    formData.totalAmount,
    formData.poPcs
    // formData.poPcs,
    // formData.pcsPerComponent
  ]);

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: checked
  //   }));
  // };
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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log('colors', colors);

  const handleSave = async () => {
    console.log('formData', formData);
    // try {
    //   // Make the API call
    //   const response = await axios.post(
    //     'https://gecxc.com:4041/api/Schiffli/SaveSchiffili',
    //     formData
    //   );

    //   console.log('Save response:', response.data);

    //   // setFormData((prevFormData) => ({
    //   //   additionalProcessId: 0,
    //   //   designId: prevFormData.designId,
    //   //   planningHeaderId: prevFormData.planningHeaderId,
    //   //   batchNo: prevFormData.batchNo,
    //   //   baseColorName: prevFormData.baseColorName,
    //   //   componentId: '',
    //   //   colorId: '',
    //   //   fabricId: '',
    //   //   vendorId: '', /////////////checkapi
    //   //   // baseColorName: '',
    //   //   poPcs: prevFormData.poPcs,
    //   //   pcsPerComponent: '',
    //   //   processTypeId: '',
    //   //   quantity: '',
    //   //   ratePerPcs: 0,
    //   //   totalAmount: 0,
    //   //   costPerComponent: '',

    //   //   createdOn: new Date().toISOString(),
    //   //   createdBy: 0,
    //   //   lastUpdatedOn: new Date().toISOString(),
    //   //   LastUpdatedBy: 0
    //   // }));

    //   // refetchSchiffliList();

    //   setAccordionExpanded(false);
    // } catch (error) {
    //   console.error('Error saving data:', error);
    // }
  };
  console.log('formData', formData);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [additionalProcessData, setAdditionalProcessData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (id) => {
    setAdditionalProcessData(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAdditionalProcessData({});
    // setDeleteId(null);
  };

  const columns = [
    {
      field: 'componentName',
      headerName: 'Component'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },

    {
      field: 'colourName',
      headerName: 'Color'
    },
    {
      field: 'thaanQty',
      headerName: 'Thaan Quantity'
    },
    {
      field: 'availableQty',
      headerName: 'Available Quantitity'
    },
    {
      field: 'operatingMachineName',
      headerName: 'Operating Machine'
    },
    {
      field: 'noOfHeadsName',
      headerName: 'Working Head'
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size'
    },
    {
      field: 'rate',
      headerName: 'Rate'
    },
    {
      field: 'noOfStichesPerYard',
      headerName: 'No. Of Stiches Per Yard'
    },
    {
      field: 'noOfItemPerThaan',
      headerName: 'No. Of Item Per Thaan'
    },
    {
      field: 'totalEmbroidry',
      headerName: 'Total Embroidry'
    },
    {
      field: 'amountPerYard',
      headerName: 'Amount Per Yard'
    },

    {
      field: 'totalPcs',
      headerName: 'Total Pcs'
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount'
    },
    {
      field: 'costPerComponent',
      headerName: 'Cost Per Component'
    },
    {
      field: 'laserCutRate',
      headerName: 'LaserCut Rate'
    },
    {
      field: 'pcsForLaserCut',
      headerName: 'Pcs.For Laser Cut'
    },
    {
      field: 'AddVendor',
      headerName: 'Add Vendor',
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="primary"
            onClick={() => handleClickOpen(params.row)}
          >
            <PersonAddAlt1OutlinedIcon />
          </IconButton>
        </div>
      )
    }
  ];
  const deleteApi = `https://gecxc.com:4041/api/Schiffli/DeleteSchiffiById?schiffiId=`;

  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<Avatar src={schiffli} sx={{ background: 'transparent' }} />}
          title="Additional Process "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

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
              label="Components"
              name="componentId"
              value={formData.componentId}
              onChange={handleChange}
              size="small"
            >
              {components.map((option) => (
                <MenuItem key={option.componentId} value={option.componentId}>
                  {option.componentName}
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
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<AddOutlinedIcon />}
          title="Add Additional Process "
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
        ></CardHeader>{' '}
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
                >
                  {Fabrications.map((option) => (
                    <MenuItem key={option.fabricId} value={option.fabricId}>
                      {option.fabric}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Vendors"
                  defaultValue=""
                  size="small"
                  name="vendorId"
                  value={formData.vendorId}
                  onChange={handleChange}
                >
                  {vendors.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid> */}

              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Color"
                  size="small"
                  name="colorId"
                  value={formData.colorId}
                  onChange={handleChange}
                >
                  {colors.map((option) => (
                    <MenuItem key={option.colorId} value={option.colorId}>
                      {option.color}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Po Pcs"
                  fullWidth
                  size="small"
                  name="poPcs"
                  value={formData.poPcs}
                  onChange={handleChange}
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Pcs. Per Component"
                  fullWidth
                  size="small"
                  name="pcsPerComponent"
                  value={formData.pcsPerComponent}
                  // type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Process Type"
                  defaultValue=""
                  size="small"
                  name="processTypeId"
                  value={formData.processTypeId}
                  onChange={handleChange}
                >
                  {operatingMachineList.map((option) => (
                    <MenuItem key={option.lookUpId} value={option.lookUpId}>
                      {option.lookUpName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* <Grid item xs={12} md={1.5}>
                <TextField
                  label="Quantity"
                  fullWidth
                  type="number"
                  size="small"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Rate Per Pcs"
                  type="number"
                  fullWidth
                  size="small"
                  name="ratePerPcs"
                  value={formData.ratePerPcs}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Total Amount"
                  fullWidth
                  type="number"
                  size="small"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={1.5}>
                <TextField
                  label="Cost Per Component"
                  fullWidth
                  size="small"
                  type="number"
                  name="costPerComponent"
                  value={formData.costPerComponent}
                  onChange={handleChange}
                />
              </Grid> */}

              <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
                <Button variant="contained" size="small" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Additional Process "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid sx={{ marginTop: 2 }} item xs={12}>
            <ReuseableDataGrid
              iColumns={columns}
              initialRows={initialRows}
              setInitialData={setInitialData}
              deleteApi={deleteApi}
              deleteBy="additionalProcessId"
              refetch={refetchSchiffliList}
              setAccordionExpanded={setAccordionExpanded}
              fileName="AdditionalProcess"
            />
            <Dialog
              open={open}
              onClose={handleClose}
              // aria-labelledby="alert-dialog-title"
              // aria-describedby="alert-dialog-description"
              fullWidth
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Googlehelp apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
                <AssignVendorFormTable
                  additionalProcessData={additionalProcessData}
                />
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions> */}
            </Dialog>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AdditionalProcess;
