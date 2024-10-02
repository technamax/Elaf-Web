import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Divider,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography
} from '@mui/material';
import ReuseableDataGrid from './ReuseableDataGrid';
import { useSnackbar } from 'notistack';

import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { useGetEmbroideryDetailsListByEmbroideryIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useUser } from 'context/User';
import { useTheme } from '@mui/material/styles';

import axios from 'axios';
import { number } from 'prop-types';

const EmbroideryAssignVendor = ({
  initialFormData,
  setAdditionalProcessData,
  refetchDyeingPrintingData,
  handleClickOpen,
  showUpperDiv,
  productionStatus
}) => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [formErrors, setFormErrors] = useState({});

  const { user } = useUser();
  const [initialRows, setInitialRows] = useState([]);
  const [initialData, setInitialData] = useState([]);

  const Quantity = initialRows
    .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);
  const totalRepeats = initialRows
    .reduce((sum, row) => sum + (row.requiredPcs ?? 0), 0)
    .toFixed(2);
  console.log('totalRepeats', totalRepeats);

  const [formData, setFormData] = useState({
    embroideryIdDet: 0,
    embroideryId: initialFormData.embroideryId || 0,
    designId: initialFormData.designId || '',
    batchNo: initialFormData.batchNo || '',
    planningHeaderId: initialFormData.planningHeaderId || 0,
    componentId: initialFormData.componentId || '',
    componentName: initialFormData.componentName || '',
    fabricId: initialFormData.fabricId || '',
    fabricName: initialFormData.fabricName || '',
    // colourName: initialFormData.colorName || '',
    vendorId: '', /////////////checkapi
    colorId: initialFormData.colorId || '',
    colourName: initialFormData.colourName || '',
    availableQty: initialFormData.availableQty || '',
    assignedQty: 0,
    remainingQty: (initialFormData.availableQty - Quantity).toFixed(2) || 0,
    remainingRepeats: initialFormData.repeats - totalRepeats || '',
    noOfHead: initialFormData.noOfHead || '',
    noOfHeadsName: initialFormData.noOfHeadsName || '',
    repeats: initialFormData.repeats || '',
    assignedRepeats: '',

    cuttingSize: initialFormData.cuttingSize || '',
    itemsPerRepeat: initialFormData.itemsPerRepeat || '',
    poPcs: initialFormData.poPcs || '',

    totalPcs: initialFormData.totalPcs || '', //repeat*itemsPerRepeat
    remainingPcs: (initialFormData.totalPcs - totalRepeats).toFixed(2) || 0, //repeat*itemsPerRepeat
    requiredPcs: 0, //repeat*itemsPerRepeat
    totalAmount: 0, //
    threadStiches: 0,
    threadRate: 0,
    threadAmount: 0,
    tillaStiches: 0,
    tilaRate: 0,
    tilaAmount: 0,
    sequence: 0,
    sequenceRate: 0,
    sequenceAmount: 0,
    isSolving: false,
    solvingLayers: 0,
    solvingInMeters: 0,
    solvingRate: 0,
    solvingAmount: 0,
    // additional:  '',
    additional: [],

    costPerComponent: 0, //

    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData,
      embroideryIdDet: initialData.embroideryIdDet || 0,
      embroideryId: initialData.embroideryId || 0,
      vendorId: initialData?.vendorId || '',
      assignedQty: initialData?.assignedQty || 0,
      requiredPcs: initialData?.requiredPcs || 0,
      // outputQty: initialData?.outputQty || 0,
      remainingQty: prevFormData.remainingQty + initialData?.assignedQty || 0,
      remainingPcs: prevFormData.remainingPcs + initialData?.requiredPcs || 0,
      totalAmount: initialData?.totalAmount || 0,
      threadStiches: initialData?.threadStiches || 0,
      threadRate: initialData?.threadRate || 0,
      threadAmount: initialData?.threadAmount || 0,
      tillaStiches: initialData?.tillaStiches || 0,
      tilaRate: initialData?.tilaRate || 0,
      tilaAmount: initialData?.tilaAmount || 0,
      sequence: initialData?.sequence || 0,
      sequenceRate: initialData?.sequenceRate || 0,
      sequenceAmount: initialData?.sequenceAmount || 0,
      isSolving: initialData?.isSolving || false,
      solvingLayers: initialData?.solvingLayers || 0,
      solvingInMeters: initialData?.solvingInMeters || 0,
      solvingRate: initialData?.solvingRate || 0,
      solvingAmount: initialData?.solvingAmount || 0,
      additional: initialData?.additional || 0,
      costPerComponent: initialData?.costPerComponent || 0,

      createdOn: initialData?.createdOn || new Date().toISOString(),
      createdBy: initialData?.createdBy || user.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: user.empId
    }));
  }, [initialData]);

  const additionals = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  useEffect(() => {
    setFormData({
      ...formData,
      remainingQty: (initialFormData.availableQty - Quantity).toFixed(2) || 0,
      remainingPcs: initialFormData.totalPcs - totalRepeats || 0
    });
  }, [initialRows]);
  const { data: lookupData } = useGetLookUpListQuery();
  const { data: embroideryDetails, refetch: refetchEmbroideryDetails } =
    useGetEmbroideryDetailsListByEmbroideryIdQuery(formData.embroideryId, {
      skip: !formData.embroideryId // Skip the query if no collection is selected
    });
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // fetchData();
    if (lookupData) {
      const data = lookupData.result[0];
      setVendors(data.vendorList);
    }
  }, [lookupData]);
  useEffect(() => {
    if (embroideryDetails) {
      setInitialRows(
        embroideryDetails.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [embroideryDetails, refetchEmbroideryDetails]);
  console.log('initialRows', initialRows);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  // useEffect(() => {
  //   const calculateTotalPcs = () => {
  //     const repeats = parseFloat(formData.repeats) || 0;
  //     const itemsPerRepeat = parseFloat(formData.itemsPerRepeat) || 0;
  //     return (repeats * itemsPerRepeat).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     totalPcs: calculateTotalPcs()
  //   }));
  //   const calculateThread = () => {
  //     const stitches = parseFloat(formData.threadStiches) || 0;
  //     const rate = parseFloat(formData.threadRate) || 0;
  //     const heads = parseFloat(formData.noOfHead) || 0;
  //     const repeats = parseFloat(formData.repeats) || 0;
  //     return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     threadAmount: calculateThread()
  //   }));
  //   const calculateTilla = () => {
  //     const stitches = parseFloat(formData.tillaStiches) || 0;
  //     const rate = parseFloat(formData.tilaRate) || 0;
  //     const heads = parseFloat(formData.noOfHead) || 0;
  //     const repeats = parseFloat(formData.repeats) || 0;
  //     return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     tilaAmount: calculateTilla()
  //   }));
  //   const calculateSequence = () => {
  //     const stitches = parseFloat(formData.sequence) || 0;
  //     const rate = parseFloat(formData.sequenceRate) || 0;
  //     const heads = parseFloat(formData.noOfHead) || 0;
  //     const repeats = parseFloat(formData.repeats) || 0;
  //     return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     sequenceAmount: calculateSequence()
  //   }));
  //   const calculateInMeters = () => {
  //     const repeats = parseFloat(formData.repeats) || 0;
  //     const noOfHead = parseFloat(formData.noOfHead) || 0;
  //     const layers = parseFloat(formData.solvingLayers) || 0;
  //     return (((repeats * noOfHead * 13) / 39.37) * layers).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     solvingInMeters: calculateInMeters()
  //   }));
  //   const calculateSolvingAmount = () => {
  //     const solvingInMeters = parseFloat(formData.solvingInMeters) || 0;
  //     const solvingRate = parseFloat(formData.solvingRate) || 0;
  //     const layers = parseFloat(formData.solvingLayers) || 0;
  //     return (solvingInMeters * solvingRate).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     solvingAmount: calculateSolvingAmount()
  //   }));
  //   const calculateTotalAmount = () => {
  //     const thread = parseFloat(formData.threadAmount) || 0;
  //     const tilla = parseFloat(formData.tilaAmount) || 0;
  //     const sequence = parseFloat(formData.sequenceAmount) || 0;
  //     const solving = parseFloat(formData.solvingAmount) || 0;
  //     return (thread + tilla + sequence + solving).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     totalAmount: calculateTotalAmount() || 0
  //   }));
  //   const calculateCostPerComponent = () => {
  //     const totalAmount = parseFloat(formData.totalAmount) || 0;
  //     const totalPcs = parseFloat(formData.totalPcs) || 0;

  //     return (totalAmount / totalPcs).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     costPerComponent: calculateCostPerComponent() || 0
  //   }));

  //   const calculateAssignQuantity = () => {
  //     const requiredPcs = parseFloat(formData.requiredPcs) || 0;
  //     const availableQty = parseFloat(formData.availableQty) || 0;
  //     const totalPcs = parseFloat(formData.totalPcs) || 0;

  //     return ((requiredPcs * availableQty) / totalPcs).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     assignedQty: calculateAssignQuantity() || 0
  //   }));

  //   const calculateRequiredPcs = () => {
  //     const assignedQty = parseFloat(formData.assignedQty) || 0;
  //     const availableQty = parseFloat(formData.availableQty) || 0;
  //     const totalPcs = parseFloat(formData.totalPcs) || 0;

  //     return (assignedQty * (totalPcs / availableQty)).toFixed(2);
  //   };

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     requiredPcs: calculateRequiredPcs() || 0
  //   }));
  // }, [
  //   formData.assignedQty,
  //   formData.threadAmount,
  //   formData.totalAmount,
  //   formData.sequenceAmount,
  //   formData.solvingAmount,
  //   formData.repeats,
  //   formData.tilaAmount,
  //   formData.itemsPerRepeat,
  //   formData.threadRate,
  //   formData.threadStiches,
  //   formData.noOfHead,
  //   formData.tilaRate,
  //   formData.tillaStiches,
  //   formData.sequenceRate,
  //   formData.sequence,
  //   formData.solvingLayers,
  //   formData.solvingInMeters,
  //   formData.solvingRate
  // ]);
  console.log('formData', formData);

  const [lastUpdatedField, setLastUpdatedField] = useState(null);
  const [debouncedFormData, setDebouncedFormData] = useState(formData);
  // const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFormData(formData);
    }, 10);

    return () => {
      clearTimeout(handler);
    };
  }, [formData]);
  const formatNumberWithCommas = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  };

  useEffect(() => {
    const calculateTotalPcs = () => {
      const repeats = parseFloat(debouncedFormData.repeats) || 0;
      const itemsPerRepeat = parseFloat(debouncedFormData.itemsPerRepeat) || 0;
      return (repeats * itemsPerRepeat).toFixed(2);
    };

    const calculateThread = () => {
      const stitches = parseFloat(debouncedFormData.threadStiches) || 0;
      const rate = parseFloat(debouncedFormData.threadRate) || 0;
      const heads = parseFloat(debouncedFormData.noOfHeadsName) || 0;
      const repeats = parseFloat(debouncedFormData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    const calculateTilla = () => {
      const stitches = parseFloat(debouncedFormData.tillaStiches) || 0;
      const rate = parseFloat(debouncedFormData.tilaRate) || 0;
      const heads = parseFloat(debouncedFormData.noOfHeadsName) || 0;
      const repeats = parseFloat(debouncedFormData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    const calculateSequence = () => {
      const stitches = parseFloat(debouncedFormData.sequence) || 0;
      const rate = parseFloat(debouncedFormData.sequenceRate) || 0;
      const heads = parseFloat(debouncedFormData.noOfHeadsName) || 0;
      const repeats = parseFloat(debouncedFormData.repeats) || 0;
      return ((stitches / 1000) * (rate * repeats * heads)).toFixed(2);
    };

    const calculateInMeters = () => {
      const repeats = parseFloat(debouncedFormData.repeats) || 0;
      const noOfHead = parseFloat(debouncedFormData.noOfHeadsName) || 0;
      const layers = parseFloat(debouncedFormData.solvingLayers) || 0;
      return (((repeats * noOfHead * 13) / 39.37) * layers).toFixed(2);
    };

    const calculateSolvingAmount = () => {
      const solvingInMeters =
        parseFloat(debouncedFormData.solvingInMeters) || 0;
      const solvingRate = parseFloat(debouncedFormData.solvingRate) || 0;
      return (solvingInMeters * solvingRate).toFixed(2);
    };

    const calculateTotalAmount = () => {
      const thread = parseFloat(debouncedFormData.threadAmount) || 0;
      const tilla = parseFloat(debouncedFormData.tilaAmount) || 0;
      const sequence = parseFloat(debouncedFormData.sequenceAmount) || 0;
      const solving = parseFloat(debouncedFormData.solvingAmount) || 0;
      return (thread + tilla + sequence + solving).toFixed(2);
    };

    const calculateCostPerComponent = () => {
      const totalAmount = parseFloat(debouncedFormData.totalAmount) || 0;

      const requiredPcs = parseFloat(debouncedFormData.requiredPcs) || 0;
      return (totalAmount / requiredPcs).toFixed(2);
    };
    const totalAmount = calculateTotalAmount();
    const costPerComponent = calculateCostPerComponent();
    const threadAmount = calculateThread();
    setFormData((prevData) => ({
      ...prevData,
      totalPcs: calculateTotalPcs(),
      threadAmount: calculateThread(),
      tilaAmount: calculateTilla(),
      sequenceAmount: calculateSequence(),
      solvingInMeters: calculateInMeters(),
      solvingAmount: calculateSolvingAmount(),
      totalAmount: calculateTotalAmount(),
      // formatNumberWithCommas(totalAmount),

      costPerComponent: calculateCostPerComponent()

      // formatNumberWithCommas(costPerComponent)
    }));
  }, [
    debouncedFormData.threadAmount,
    debouncedFormData.totalAmount,
    debouncedFormData.sequenceAmount,
    debouncedFormData.solvingAmount,
    debouncedFormData.repeats,
    debouncedFormData.tilaAmount,
    debouncedFormData.itemsPerRepeat,
    debouncedFormData.threadRate,
    debouncedFormData.threadStiches,
    debouncedFormData.noOfHeadsName,
    debouncedFormData.tilaRate,
    debouncedFormData.tillaStiches,
    debouncedFormData.sequenceRate,
    debouncedFormData.sequence,
    debouncedFormData.solvingLayers,
    debouncedFormData.solvingInMeters,
    debouncedFormData.solvingRate,
    debouncedFormData.requiredPcs
  ]);

  useEffect(() => {
    if (lastUpdatedField === 'assignedQty') {
      const calculateRequiredPcs = () => {
        const assignedQty = parseFloat(debouncedFormData.assignedQty) || 0;
        const availableQty = parseFloat(debouncedFormData.availableQty) || 0;
        const totalPcs = parseFloat(debouncedFormData.totalPcs) || 0;
        return Math.round(assignedQty * (totalPcs / availableQty));
        // return (assignedQty * (totalPcs / availableQty)).toFixed(2);
      };

      setFormData((prevData) => ({
        ...prevData,
        requiredPcs: calculateRequiredPcs()
      }));
    } else if (lastUpdatedField === 'requiredPcs') {
      const calculateAssignQuantity = () => {
        const requiredPcs = parseFloat(debouncedFormData.requiredPcs) || 0;
        const availableQty = parseFloat(debouncedFormData.availableQty) || 0;
        const totalPcs = parseFloat(debouncedFormData.totalPcs) || 0;
        return ((requiredPcs * availableQty) / totalPcs).toFixed(2);
        // return Math.round((requiredPcs * availableQty) / totalPcs);
      };

      setFormData((prevData) => ({
        ...prevData,
        assignedQty: calculateAssignQuantity()
      }));
    }
  }, [
    debouncedFormData.assignedQty,
    debouncedFormData.requiredPcs,
    lastUpdatedField
  ]);

  const handleAssignedQtyChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLastUpdatedField('assignedQty');
    setFormData((prevData) => ({
      ...prevData,
      assignedQty: value
    }));
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };

      if (name === 'assignedQty' || name === 'remainingQty') {
        const assignedQty = parseFloat(updatedFormData.assignedQty);
        const remainingQty = parseFloat(updatedFormData.remainingQty);

        if (assignedQty > remainingQty) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            assignedQty:
              'Assigned Quantity cannot be greater than Remaining Quantity'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            assignedQty: ''
          }));
        }
      }
      return updatedFormData;
    });
  };

  const handleRequiredPcsChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLastUpdatedField('requiredPcs');
    setFormData((prevData) => ({
      ...prevData,
      requiredPcs: value
    }));
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };

      if (name === 'requiredPcs' || name === 'remainingPcs') {
        const requiredPcs = parseFloat(updatedFormData.requiredPcs);
        const remainingPcs = parseFloat(updatedFormData.remainingPcs);

        if (requiredPcs > remainingPcs) {
          console.log();
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            requiredPcs: 'Required Pcs cannot be greater than Remaining Pcs'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            requiredPcs: ''
          }));
        }
      }

      return updatedFormData;
    });
  };

  // const validateForm = () => {
  //   const errors = {};
  //   if (!formData.assignedQty) {
  //     errors.assignedQty = 'Assigned Qty cannot be greater than Remaining Qty ';
  //   }
  //   // if (!formData.clientAddress.trim()) {
  //   //   errors.clientAddress = 'Client Address is required';
  //   // }
  //   return errors;
  // };

  const handleSave = async () => {
    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }

    console.log(formData);
    if (formData.totalAmount == 0 || formData.costPerComponent == 0) {
      // Show Snackbar for duplicate entry
      enqueueSnackbar(
        'Please Enter Thread, Tilla or Sequnce values , Total Amount cannot be zero',
        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
      return; // Exit without saving
    }
    if (parseFloat(formData.assignedQty) > parseFloat(formData.remainingQty)) {
      enqueueSnackbar(
        `Assigned quantity can not be greater then Remaining Quantity !`,

        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
      return;
    }
    if (parseFloat(formData.requiredPcs) > parseFloat(formData.remainingPcs)) {
      enqueueSnackbar(
        `Required Pcs can not be greater then Remaining Pcs !`,

        {
          variant: 'error',
          autoHideDuration: 5000
        }
      );
      return;
    }
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:8091/api/Embroidery/SaveEmbroideryDetails',
        {
          ...formData,
          additional: formData.additional.join(', ')
        }
      );
      if (!response.data.success) {
        enqueueSnackbar(
          `${response.data.message}!`,

          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        console.log('response.message', response.data.message);
      } else {
        enqueueSnackbar('Embroidery saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
      }
      console.log('Save response:', response.data);

      setFormData((prevFormData) => ({
        ...prevFormData,
        //   prevFormData.remainingQty - prevFormData.assignedQty,
        vendorId: '',
        embroideryIdDet: 0,
        totalPcs: 0, //repeat*itemsPerRepeat
        totalAmount: 0, //
        threadStiches: 0,
        threadRate: 0,
        threadAmount: 0,
        tillaStiches: 0,
        tilaRate: 0,
        tilaAmount: 0,
        sequence: 0,
        sequenceRate: 0,
        sequenceAmount: 0,
        isSolving: false,
        solvingLayers: 0,
        solvingInMeters: 0,
        solvingRate: 0,
        solvingAmount: 0,
        // additional:  '',
        additional: [],
        requiredPcs: 0,
        assignedQty: 0,
        remainingQty: (initialFormData.availableQty - Quantity).toFixed(2) || 0,
        remainingRepeats: initialFormData.repeats - totalRepeats || '',

        costPerComponent: 0, //

        createdOn: new Date().toISOString(),
        createdBy: user.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: user.empId
      }));
      refetchEmbroideryDetails();
      refetchDyeingPrintingData();

      // handleClickOpen();

      // setAccordionExpanded(false);
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Embroidery not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // editable: true,
      // flex: 1,
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },

    // {
    //   field: 'processType',
    //   headerName: 'Process Type',
    //   flex: 1
    // },
    // {
    //   field: 'availableQty',
    //   headerName: 'Total Available Qty',
    //   flex: 1
    // },
    {
      field: 'assignedQty',
      headerName: 'Assigned Quantity'
    },
    {
      field: 'requiredPcs',
      headerName: 'Required Pcs'
    },
    // {
    //   field: 'assignedRepeats',
    //   headerName: 'Assigned repeats',
    //   flex: 1
    // },
    { field: 'additional', headerName: 'Additional' },
    { field: 'threadStiches', headerName: 'Thread Stitches' },
    { field: 'threadRate', headerName: 'Thread Rate' },
    { field: 'threadAmount', headerName: 'Thread Amount' },
    { field: 'tillaStiches', headerName: 'Tilla Stitches' },
    { field: 'tilaRate', headerName: 'Tilla Rate' },
    { field: 'tilaAmount', headerName: 'Tilla Amount' },
    { field: 'sequence', headerName: 'sequence' },
    { field: 'sequenceRate', headerName: 'Sequence Rate' },
    { field: 'sequenceAmount', headerName: 'Sequence Amount' },
    { field: 'isSolving', headerName: 'Is Solving' },
    { field: 'solvingLayers', headerName: 'Solving Layers' },
    { field: 'solvingInMeters', headerName: 'Solving In Meters' },
    { field: 'solvingRate', headerName: 'Solving Rate' },
    { field: 'solvingAmount', headerName: 'Solving Amount' },
    // { field: 'totalPcs', headerName: 'Total Pcs' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'costPerComponent', headerName: 'Cost Per Component' }
  ];
  // const [showUpperDiv, setShowUpperDiv] = useState(true); // State variable to control visibility

  const deleteApi = `http://100.42.177.77:8091/api/Embroidery/DeleteEmbroideryDetailsByDetId?embroideryDetId=`;
  return (
    <Box
      noValidate
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      }}
    >
      <div hidden={!showUpperDiv}>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h4" gutterBottom>
              Assign Vendor
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Fabric"
              name="fabricName"
              value={formData.fabricName}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.fabricName !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {/* {collectionList.map((option) => (
              <MenuItem key={option.collectionId} value={option.collectionId}>
                {option.collectionName}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Component"
              name="componentName"
              value={formData.componentName}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.componentName !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {/* {designList.map((option) => (
              <MenuItem key={option.designId} value={option.designId}>
                {option.designNo}
              </MenuItem>
            ))} */}
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Color"
              name="colourName"
              value={formData.colourName}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.colourName !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {/* {batchList.map((option) => (
              <MenuItem key={option.batchNo} value={option.batchNo}>
                {option.batchNo}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="PO Pcs"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
              size="small"
              disabled
              sx={(theme) => ({
                ...(formData.poPcs !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {/* {components.map((option) => (
              <MenuItem key={option.componentId} value={option.componentId}>
                {option.componentName}
              </MenuItem>
            ))} */}
            </TextField>{' '}
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Heads"
              size="small"
              name="noOfHeadsName"
              value={formData.noOfHeadsName}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.noOfHeadsName !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Cutting Size"
              size="small"
              name="cuttingSize"
              value={formData.cuttingSize}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.cuttingSize !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Items Per Repeat"
              size="small"
              name="itemsPerRepeat"
              value={formData.itemsPerRepeat}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.itemsPerRepeat !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            ></TextField>
          </Grid>

          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total Available Qty"
              fullWidth
              size="small"
              name="availableQty"
              value={formData.availableQty}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.availableQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Remaining Qty"
              fullWidth
              size="small"
              name="remainingQty"
              value={formData.remainingQty}
              type="number"
              error={!!formErrors.remainingQty}
              helperText={formErrors.remainingQty}
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.remainingQty !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Repeats"
              fullWidth
              size="small"
              name="repeats"
              value={formData.repeats}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.repeats !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Total Pcs"
              fullWidth
              size="small"
              name="totalPcs"
              value={formData.totalPcs}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.totalPcs !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Remaining Pcs"
              fullWidth
              size="small"
              name="remainingPcs"
              value={formData.remainingPcs}
              // type="number"
              onChange={handleChange}
              disabled
              sx={(theme) => ({
                ...(formData.remainingPcs !== '' && {
                  '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                    backgroundColor: `#c9c9c9 !important`
                  }
                }),
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'black' // Adjust text color here
                },
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#f9f9f9' // Adjust background color here
                },
                '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'gray' // Adjust border color here
                  },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                }
              })}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
        </Grid>
        <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              select
              label="Vendors"
              // defaultValue=""
              size="small"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              disabled={!formData.remainingPcs && !formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            >
              {vendors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Assigned Qty"
              fullWidth
              size="small"
              type="number"
              name="assignedQty"
              value={formData.assignedQty}
              onChange={handleAssignedQtyChange}
              error={!!formErrors.assignedQty}
              helperText={formErrors.assignedQty}
              disabled={!formData.remainingPcs && !formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Required Pcs"
              fullWidth
              disabled={!formData.remainingPcs && !formData.remainingQty}
              size="small"
              type="number"
              name="requiredPcs"
              value={formData.requiredPcs}
              error={!!formErrors.requiredPcs}
              helperText={formErrors.requiredPcs}
              onChange={handleRequiredPcsChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          {/* <Grid item xs={12} md={1.5}>
          <TextField
            label="total Pcs."
            fullWidth
            size="small"
            type="number"
            name="totalPcs"
            value={formData.totalPcs}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'black'
              }
            }}
          />
        </Grid> */}

          <Grid item xs={12} md={4}>
            <TextField
              select
              label="Additional"
              value={formData.additional}
              name="additional"
              size="small"
              onChange={handleChange}
              fullWidth
              disabled={!formData.remainingPcs && !formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
              SelectProps={{
                multiple: true
              }}
            >
              {additionals.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, formData.additional, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </TextField>
            {/* </FormControl> */}
          </Grid>
          <Grid item xs={12} md={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isSolving}
                  onChange={handleCheckboxChange}
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  name="isSolving"
                />
              }
              label="isSolving"
            />
          </Grid>
          {/* <Grid item xs={12} md={6}></Grid> */}

          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Thread
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Stitches"
                  fullWidth
                  size="small"
                  type="number"
                  name="threadStiches"
                  value={formData.threadStiches}
                  onChange={handleChange}
                  required
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.threadStiches}
                  // helperText={formErrors.threadStiches}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  type="number"
                  fullWidth
                  size="small"
                  name="threadRate"
                  value={formData.threadRate}
                  onChange={handleChange}
                  required
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.threadRate}
                  // helperText={formErrors.threadRate}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  type="number"
                  name="threadAmount"
                  value={formData.threadAmount}
                  onChange={handleChange}
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* ) : null} */}
          {/* {formData.isSolving ? ( */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Tilla
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Stitches"
                  fullWidth
                  size="small"
                  type="number"
                  name="tillaStiches"
                  value={formData.tillaStiches}
                  onChange={handleChange}
                  required
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.tillaStiches}
                  // helperText={formErrors.tillaStiches}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  fullWidth
                  size="small"
                  type="number"
                  name="tilaRate"
                  value={formData.tilaRate}
                  onChange={handleChange}
                  required
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.tilaRate}
                  // helperText={formErrors.tilaRate}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  name="tilaAmount"
                  value={formData.tilaAmount}
                  onChange={handleChange}
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* ) : null} */}
          {/* {formData.isSolving ? ( */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} width="Inherit">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Sequence
                </Typography>
              </Grid>{' '}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Sequence"
                  fullWidth
                  size="small"
                  name="sequence"
                  type="number"
                  value={formData.sequence}
                  onChange={handleChange}
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  required
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.sequence}
                  // helperText={formErrors.sequence}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rate"
                  fullWidth
                  type="number"
                  size="small"
                  name="sequenceRate"
                  value={formData.sequenceRate}
                  onChange={handleChange}
                  required
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                  // error={!!formErrors.sequenceRate}
                  // helperText={formErrors.sequenceRate}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Amount"
                  fullWidth
                  size="small"
                  name="sequenceAmount"
                  value={formData.sequenceAmount}
                  onChange={handleChange}
                  disabled={!formData.remainingPcs && !formData.remainingQty}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: 'black'
                    }
                  }}
                />
              </Grid>
            </Grid>{' '}
          </Grid>
          {/* ) : null} */}
          {formData.isSolving ? (
            <Grid item xs={12} md={6}>
              <Grid container spacing={1} width="Inherit">
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" gutterBottom>
                    Solving
                  </Typography>
                </Grid>{' '}
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Layers"
                    fullWidth
                    size="small"
                    type="number"
                    name="solvingLayers"
                    value={formData.solvingLayers}
                    onChange={handleChange}
                    disabled={!formData.remainingPcs && !formData.remainingQty}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Meters"
                    type="number"
                    fullWidth
                    size="small"
                    name="solvingInMeters"
                    value={formData.solvingInMeters}
                    disabled={!formData.remainingPcs && !formData.remainingQty}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Rate"
                    fullWidth
                    type="number"
                    size="small"
                    name="solvingRate"
                    value={formData.solvingRate}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Amount"
                    fullWidth
                    size="small"
                    type="number"
                    name="solvingAmount"
                    value={formData.solvingAmount}
                    disabled={!formData.remainingPcs && !formData.remainingQty}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ) : null}

          <Grid item xs={12} md={3} sx={{ mt: 4 }}>
            <TextField
              label="Total Amount"
              fullWidth
              // type="number"
              // type="text"
              size="small"
              // disabled={!formData.remainingPcs && !formData.remainingQty}
              disabled
              name="totalAmount"
              value={formatNumberWithCommas(formData.totalAmount)}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 4 }}>
            <TextField
              label="Cost Per Component"
              fullWidth
              // type="number"
              size="small"
              name="costPerComponent"
              value={formatNumberWithCommas(formData.costPerComponent)}
              onChange={handleChange}
              disabled
              // disabled={!formData.remainingPcs && !formData.remainingQty}
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign="right" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              disabled={productionStatus === 3}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>

      <Divider color="#921e22" sx={{ height: 2, width: '100%' }} />
      <div>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h4" gutterBottom>
              View Vendor
            </Typography>
          </Grid>
          <Grid sx={{ marginTop: 2 }} item xs={12}>
            <ReuseableDataGrid
              iColumns={columns}
              initialRows={initialRows}
              disableDelete={productionStatus === 3}
              disableEdit={productionStatus === 3}
              setInitialData={setInitialData}
              deleteApi={deleteApi}
              deleteBy="embroideryIdDet"
              refetch={refetchEmbroideryDetails}
              // disableEdit={true}
              // setAccordionExpanded={setAccordionExpanded}
              // fileName="Schffili List"
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default EmbroideryAssignVendor;
