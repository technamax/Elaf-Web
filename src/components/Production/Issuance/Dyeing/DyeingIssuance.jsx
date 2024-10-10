import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Chip
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CloseIcon from '@mui/icons-material/Close';
import StatusChip from 'components/StatusChip';
import '../../../../assets/scss/style.scss';
import SSRSReport from '../../../../views/DetailedReports/Reports';
import {
  useGetDyeingPoHeaderListbyPoIdQuery,
  useGetDyeingPoHeaderListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetDyeingPoHeaderByProductionIdQuery,
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPODetailsPoIdQuery,
  useGetProductionFabricDetailByProductionIdandStatusQuery,
  useGetIssuanceByPoIdQuery,
  useGetIssuanceOGPByIdQuery
} from 'api/store/Apis/productionApi';
import {
  useGetWareHouseLocationsQuery,
  useGetLookUpListQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import DyeingIssuanceView from './DyeingIssuanceView';
import OGPView from './OGPView';
//////
import * as React from 'react';
import { useUser } from 'context/User';
import { useSnackbar } from 'notistack';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
// import EmbroideryIssuance from './../../../../views/Production/EmbroideryIssuance';

const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const DyeingIssuance = ({ rowData }) => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useUser();
  // const [initialRows, setInitialRows] = useState([]);
  const [poDetails, setPoDetails] = useState([]);
  // const [quantities, setQuantities] = useState([]);
  const [savedRows, setSavedRows] = useState([]); // New state for tracking saved rows

  const Quantity = poDetails
    .reduce((sum, row) => sum + (row.quantity ?? 0), 0)
    .toFixed(2);
  console.log('Quantity', Quantity);
  const totalAssign = poDetails
    .reduce((sum, row) => sum + (row.issuanceQuantity ?? 0), 0)
    .toFixed(2);
  // console.log('quantities', quantities);
  const [formData, setFormData] = useState({
    issuanceId: 0,
    poId: rowData?.poId || 0,
    productionId: rowData?.productionId || '',
    issuanceDate: '',
    expectedReturnDate: rowData?.expectedReturnDate || '',
    processTypeId: '',
    processTypeName: '',
    fabricId: rowData?.fabricId || '',
    fabricName: rowData?.fabricName || '',
    vendorId: rowData?.vendorId || '',
    vendorName: rowData?.vendorName || '',
    shrinkage: rowData?.shrinkage || '',
    wastage: rowData?.wastage || '',
    locationId: rowData?.locationId || '',
    fullLocation: rowData?.fullLocation || '',

    poQuantity: 0,
    assignQuantity: 0,
    stockReceived: 0,
    remainingQuantity: 0,
    quantity: 0,
    balance: 0,
    remarks: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  // const [fabricsList, setFabricsList] = useState([]);
  // const [vendorsList, setVendorsList] = useState([]);
  // const [locationsList, setLocationsList] = useState([]);
  const [issuanceList, setIssuanceList] = useState([]);
  // const [issuanceOGPList, setIssuanceOGPList] = useState([]);
  const [value, setValue] = useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    console.log('value', value);
  };

  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
  // const { data: dyeingPOData, refetch: refetchDyeingPOData } =
  //   useGetDyeingPoHeaderListQuery();
  const { data: dyeingPOData, refetch: refetchDyeingPOData } =
    useGetDyeingPoHeaderByProductionIdQuery(formData.productionId, {
      skip: !formData.productionId
    });
  const { data: poHeaderData, refetch: refetchPoHeaderData } =
    useGetDyeingPoHeaderListbyPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  const { data: poDetailsData, refetch: refetchPoDetailsData } =
    useGetDyeingPODetailsPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  const { data: issuanceData, refetch: refetchIssuanceData } =
    useGetIssuanceByPoIdQuery(formData.poId, {
      skip: !formData.poId // Skip the query if no collection is selected
    });
  // const { data: dyeingPoData, refetch: refetchDyeingPoData } =
  //   useGetDyeingPoHeaderListQuery();
  // const { data: locationsData, refetch: refetchLocationsData } =
  //   useGetWareHouseLocationsQuery();
  // const { data: fabricsData, refetch: refetchFabricsData } =
  //   useGetFabricForProductionByProductionIdQuery(formData.productionId, {
  //     skip: !formData.productionId // Skip the query if no collection is selected
  //   });
  // const { data: vendorsData, refetch: refetchVendorsData } =
  //   useGetVendorsByFabricIDQuery(formData.fabricId, {
  //     skip: !formData.fabricId // Skip the query if no collection is selected
  //   });
  // const { data: quantityData, refetch: refetchquantityData } =
  //   useGetProductionFabricDetailByProductionIdandStatusQuery(
  //     { productionId: formData.productionId, fabricId: formData.fabricId },
  //     {
  //       skip: !formData.fabricId || !formData.productionId // Skip the query if no collection is selected
  //     }
  //   );
  // const { data: issuanceOGPData, refetch: refetchIssuanceOGPData } =
  //   useGetIssuanceOGPByIdQuery(
  //     { poId: formData.poId, issuanceId: formData.issuanceId },
  //     {
  //       skip: !formData.poId || !formData.issuanceId // Skip the query if no collection is selected
  //     }
  //   );
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      // poId: rowData?.poId || 0,
      // poQuantity: Quantity || 0,
      // productionHeaderId: quantities.productionHeaderId || 0,
      // assignQuantity: quantities.itpQuantity || 0,
      // stockReceived: quantities.stockReceived || 0,
      // balance: prevFormData.quantity - totalAssign || 0,
      remainingQuantity: prevFormData.quantity - prevFormData.issuanceQty || 0
    }));
  }, [rowData, poDetails, poHeaderData]);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      balance: prevFormData.remainingQuantity - totalAssign || 0
    }));
  }, [rowData, poDetails, poHeaderData, formData.remainingQuantity]);

  const [dyeingPOs, setDyeingPOs] = useState([]);
  useEffect(() => {
    if (poHeaderData) {
      setFormData({
        ...formData,
        shrinkage: poHeaderData.result[0].shrinkage,
        // productionId: poHeaderData.result[0].productionId,
        productionHeaderId: poHeaderData.result[0].productionHeaderId,
        // issuanceDate: poHeaderData.result[0].issuanceDate,
        expectedReturnDate: poHeaderData.result[0].expectedReturnDate,
        fabricId: poHeaderData.result[0].fabricId,
        vendorId: poHeaderData.result[0].vendorId,
        locationId: poHeaderData.result[0].locationId,
        fullLocation: poHeaderData.result[0].fullLocation,
        fabricName: poHeaderData.result[0].fabricName,
        vendorName: poHeaderData.result[0].vendorName,
        wastage: poHeaderData.result[0].wastage,
        issuanceQty: poHeaderData.result[0].issuanceQty,
        stockInHandQty: poHeaderData.result[0].stockInHandQty,
        quantity: poHeaderData.result[0].quantity
      });
      // setIssuanceOGPList(
      //   poHeaderData.result.map((row, index) => ({
      //     id: index + 1,
      //     ...row
      //   }))
      // );
    }
  }, [poHeaderData, refetchPoHeaderData]);
  const [productions, setProductions] = useState([]);
  useEffect(() => {
    if (productionBatchData) {
      setProductions(
        productionBatchData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [productionBatchData, refetchProductionBatchData]);

  useEffect(() => {
    if (poDetailsData?.result === null) {
      setPoDetails([]);
      return;
    }
    if (poDetailsData) {
      setPoDetails(
        poDetailsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poDetailsData, refetchPoDetailsData]);
  // useEffect(() => {
  //   if (dyeingPoData) {
  //     setInitialRows(
  //       dyeingPoData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [dyeingPoData, refetchDyeingPoData]);
  useEffect(() => {
    if (issuanceData) {
      setIssuanceList(
        issuanceData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [issuanceData, refetchIssuanceData]);
  // useEffect(() => {
  //   if (fabricsData) {
  //     setFabricsList(
  //       fabricsData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [fabricsData, refetchFabricsData]);
  // useEffect(() => {
  //   if (quantityData) {
  //     setQuantities(
  //       quantityData.result[0]
  //       // .map((row, index) => ({
  //       //   id: index + 1,
  //       //   ...row
  //       // }))
  //     );
  //   }
  // }, [quantityData, refetchquantityData]);
  // useEffect(() => {
  //   if (vendorsData) {
  //     setVendorsList(
  //       vendorsData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [vendorsData, refetchVendorsData]);
  // useEffect(() => {
  //   if (locationsData) {
  //     setLocationsList(
  //       locationsData.result.map((row, index) => ({
  //         id: index + 1,
  //         ...row
  //       }))
  //     );
  //   }
  // }, [locationsData]);
  useEffect(() => {
    if (dyeingPOData) {
      setDyeingPOs(
        dyeingPOData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [dyeingPOData, refetchDyeingPOData]);

  // console.log('quantities', quantities);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'poId') {
      const selectedPO = dyeingPOs.find((po) => po.poId === parseInt(value));

      setFormData({
        ...formData,
        poId: value,
        shrinkage: selectedPO ? selectedPO.shrinkage : '',
        processTypeId: selectedPO ? selectedPO.processTypeId : '',
        processTypeName: selectedPO ? selectedPO.processTypeName : '',
        // issuanceDate: selectedPO ? selectedPO.issuanceDate : null,
        expectedReturnDate: selectedPO ? selectedPO.expectedReturnDate : '',
        fabricId: selectedPO ? selectedPO.fabricId : '',
        vendorId: selectedPO ? selectedPO.vendorId : '',
        locationId: selectedPO ? selectedPO.locationId : '',
        fullLocation: selectedPO ? selectedPO.fullLocation : '',
        fabricName: selectedPO ? selectedPO.fabricName : '',
        vendorName: selectedPO ? selectedPO.vendorName : '',
        wastage: selectedPO ? selectedPO.wastage : ''
      });
    } else if (name === 'productionId') {
      const selectedPO = dyeingPOs.find(
        (po) => po.productionId === parseInt(value)
      );
      setPoDetails([]);
      setFormData({
        ...formData,
        productionId: value,
        poId: ''
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleDisabled = () => {
    let disabled = false;
    for (let po of poDetails) {
      if (po.quantity >= po.assignQuantity) {
        disabled = true;
      }
    }
    return disabled;
    // if (poDetailsData) {
    //   const disabled = poDetails.every((po) => po.quantity >= po.assignQuantity);
    //   return !disabled;
    // } else {
    //   return false;
    // }
  };
  console.log('handleDisabled', handleDisabled());
  const handleSave = async () => {
    // if (
    //   !formData.issuanceTransactionDetails ||
    //   formData.issuanceTransactionDetails.length === 0
    // ) {
    //   enqueueSnackbar('Please select at least one row before saving.', {
    //     variant: 'warning'
    //   });
    //   return;
    // }

    // if (rowSelectionModel.length !== poDetails.length) {
    //   enqueueSnackbar('Please select all rows before saving.', {
    //     variant: 'warning'
    //   });
    //   return;
    // }
    if (rowSelectionModel.length === 0) {
      // Show a snackbar warning if no rows are selected
      enqueueSnackbar('Please select at least one row before saving!', {
        variant: 'warning',
        autoHideDuration: 5000
      });
      return;
    }

    for (let po of poDetails) {
      if (po.issuanceQuantity > po.remaining) {
        enqueueSnackbar(
          'Error:Iissuance quantity cannot be greater than remaining quantity!',
          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
        return; // Stop further execution
      }
    }

    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:81/api/Issuance/IssuanceToVendor',
        formData
      );

      console.log('Save response:', response.data);
      enqueueSnackbar('Data saved successfully!', { variant: 'success' });
      setSavedRows((prev) => [...prev, ...formData.issuanceTransactionDetails]);
      refetchIssuanceData();
      refetchPoDetailsData();
    } catch (error) {
      console.error('Error saving data:', error);

      // Show error snackbar
      enqueueSnackbar('Error saving data!', { variant: 'error' });
    }
  };
  console.log('formData', formData);

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
      // flex: 1
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1
    },

    {
      field: 'enabled',
      headerName: 'Enabled'
      // flex: 1
    }
  ];
  console.log('dyeingPOs', dyeingPOs);

  // const handleCellEdit = React.useCallback(
  //   (params) => {
  //     const { id, field, value } = params;
  //     console.log('Editing cell:', params); // Debugging line

  //     setPoDetails((prevRows) =>
  //       prevRows.map((row) => {
  //         if (row.id === id) {
  //           const remaining = row.quantity - row.assignQuantity;
  //           const updatedRow = {
  //             ...row,
  //             [field]: value,
  //             issuanceId: 0,
  //             issuanceDetId: 0,
  //             remaining: Number(remaining),
  //             appId: user.appId,
  //             createdOn: new Date().toISOString(),
  //             createdBy: user.empId,
  //             lastUpdatedOn: new Date().toISOString(),
  //             lastUpdatedBy: user.empId
  //           };

  //           // Recalculate the totalBeforeTax when rate or quantity is updated
  //           // if (field === 'rate' || field === 'quantity') {
  //           //   updatedRow.totalBeforeTax = updatedRow.rate * updatedRow.quantity;
  //           // }

  //           // // Optionally, update totalAfterTax if it's a function of totalBeforeTax and tax
  //           // if (field === 'tax' || field === 'rate' || field === 'quantity') {
  //           //   updatedRow.totalAfterTax =
  //           //     updatedRow.totalBeforeTax +
  //           //     updatedRow.totalBeforeTax * (updatedRow.tax / 100);
  //           // }

  //           return updatedRow;
  //         }
  //         return row;
  //       })
  //     );
  //   },
  //   [setPoDetails, user.appId, user.empId]
  // );
  const handleCellEdit = React.useCallback(
    (params) => {
      const { id, field, value } = params;

      setPoDetails((prevRows) =>
        prevRows.map((row) => {
          if (row.id === id) {
            const remaining = row.quantity - row.assignQuantity;
            const updatedRow = {
              ...row,
              [field]: value,
              issuanceId: 0,
              issuanceDetId: 0,
              remaining: Number(remaining),
              appId: user.appId,
              createdOn: new Date().toISOString(),
              createdBy: user.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: user.empId
            };

            // Auto-select the row if a value is entered in the text field
            if (field === 'issuanceQuantity' && value > 0) {
              setRowSelectionModel((prevSelectionModel) => {
                if (!prevSelectionModel.includes(id)) {
                  return [...prevSelectionModel, id]; // Add the row ID to the selection model
                }
                return prevSelectionModel;
              });
            }

            return updatedRow;
          }
          return row;
        })
      );
    },
    [setPoDetails, setRowSelectionModel, user.appId, user.empId]
  );

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...formData
      // poId: rowData?.poId || 0,
      // poQuantity: Quantity || 0,
      // assignQuantity: quantities.itpQuantity || 0,
      // stockReceived: quantities.stockReceived || 0,
      // remainingQuantity: prevFormData.stockReceived - totalAssign || 0
    }));
  }, [handleCellEdit]);
  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'colorName',
      headerName: 'Color'
    },
    // {
    //   field: 'total',
    //   headerName: 'Planned Qty'
    // },
    {
      field: 'quantity',
      headerName: 'Total Qty',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.quantity.toLocaleString()}
            status="Completed"
          />
        );
      }
    },
    {
      field: 'assignQuantity',
      headerName: 'Assigned Quantity',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.quantity.toLocaleString()}
            status="Issued"
          />
        );
      }
    },
    // {
    //   field: 'remaining',
    //   headerName: 'Remaining',
    //   valueGetter: (params, row) => {
    //     return row.quantity - row.assignQuantity;
    //   }
    // },
    {
      field: 'remaining',
      headerName: 'Remaining Qty',
      valueGetter: (params, row) => {
        const remainingQty = row.quantity - row.assignQuantity;
        return remainingQty.toLocaleString();
      },
      renderCell: (params) => {
        const remainingQty = params.row.quantity - params.row.assignQuantity;
        // const chipColor = remainingQty < 0 ? '#FF0000' : '#33CCCC'; // Red for negative, green otherwise

        return (
          <Chip
            label={remainingQty.toLocaleString()}
            sx={{
              backgroundColor: '#FF0000', // Set to red
              color: '#FFFFFF' // White text for visibility
            }}
          />
        );
      }
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Issuance Qty',
      // flex: 1,
      // width: 'auto',

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.issuanceQuantity || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'issuanceQuantity',
              value: Number(event.target.value)
            })
          }
          type="number"
          disabled={params.row.quantity === params.row.assignQuantity}
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    }
  ];

  const fetchData = () => {
    apiRef.current.autosizeColumns({
      includeHeaders: true,
      includeOutliers: true
    });
  };
  React.useEffect(() => {
    fetchData();
  });

  const [selectedDesigns, setSelectedDesigns] = useState([]);

  const handleRowSelectionModelChange = React.useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);

      const selectedDesigns = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData
            ? {
                ...rowData
              }
            : null;
        })
        .filter((row) => row !== null); // Filter out any null values

      console.log('selectedDesigns', selectedDesigns);
      setSelectedDesigns(selectedDesigns);
    },
    [apiRef]
  );

  useEffect(() => {
    // Filter the fabrics to include only the selected rows
    const selectedFabrics = poDetails.filter((fabric) =>
      rowSelectionModel.includes(fabric.id)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      issuanceTransactionDetails: selectedFabrics
    }));
  }, [poDetails, rowSelectionModel]);

  const isRowSelectable = (params) => {
    return !savedRows.some((row) => row.id === params.id);
  };

  console.log('poDetails', poDetails);
  React.useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [iss, setIss] = React.useState(false);

  const handleClickOpen = async (data) => {
    setIss(data);
    setOpen(true);
  };
  // console.log('terms condition', vId);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setIss(data);
  };
  const handleClose2 = () => {
    // setShowUpperDiv(true);
    setOpen2(false);
  };
  // const handleIssuanceClick = (rowData) => {
  //   navigate('/Production/Issuance', { state: { data: rowData, tab: 1 } });
  // };
  const formatNumber = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    return new Intl.NumberFormat().format(value);
  };

  const handlePrintOgp = async (rowData) => {
    try {
      const response = await axios.get(
        `http://100.42.177.77:81/api/Issuance/GetOutwardGatePassByIssuanceId`,
        {
          params: { issuanceId: rowData.issuanceId }
        }
      );

      if (response.data.success) {
        const ogpData = response.data.result;
        // Call the function to print the data
        printOgp(ogpData);
      } else {
        console.error('Failed to fetch OGP data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching OGP data:', error);
    }
  };
  const [issId, setIssId] = useState(null);
  const handleViewOGP = (data) => {
    setValue('2');
    setIssId(data.issuanceId);
  };
  const issuanceColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'issuanceId',
      headerName: 'Issuance'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'issuanceQuantity',
      headerName: 'Issuance',
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.issuanceQuantity.toLocaleString()}
            status="Received"
          />
        );
      }
    },
    {
      field: 'dispatchedQuantity',
      headerName: 'Dispatch',
      renderCell: (params) => {
        return (
          <StatusChip
            label={params.row.dispatchedQuantity.toLocaleString()}
            status="Issued"
          />
        );
      }
    },
    // {
    //   field: 'remingingQuantity',
    //   headerName: 'Remaining',
    //   valueGetter: (params, row) => {
    //     return row.issuanceQuantity - row.dispatchedQuantity;
    //   }
    // },
    {
      field: 'remaining',
      headerName: 'Remaining Qty',
      valueGetter: (params, row) => {
        const remainingQty = row.issuanceQuantity - row.dispatchedQuantity;
        return remainingQty.toLocaleString();
      },
      renderCell: (params) => {
        const remainingQty =
          params.row.issuanceQuantity - params.row.dispatchedQuantity;
        // const chipColor = remainingQty < 0 ? '#FF0000' : '#33CCCC'; // Red for negative, green otherwise

        return (
          <Chip
            label={remainingQty.toLocaleString()}
            sx={{
              backgroundColor: '#FF0000', // Set to red
              color: '#FFFFFF' // White text for visibility
            }}
          />
        );
      }
    },
    {
      field: 'issuanceDate',
      headerName: 'Issuance Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'expectedReturnDate',
      headerName: 'Expected Return Date',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'fabricCount',
      headerName: 'Fabrics'
    },
    {
      field: 'statusName',
      headerName: 'Status',
      renderCell: (params) => {
        return <StatusChip label={params.value} status={params.value} />;
      }
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <ButtonGroup variant="text" size="small" sx={{ marginTop: 1 }}>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
              disabled={
                params.row.issuanceQuantity <= params.row.dispatchedQuantity
              }
            >
              Generate OGP
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleViewOGP(params.row)}
            >
              View OGP
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              View Issuance
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Dyeing Issuance"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Production"
              name="productionId"
              value={formData.productionId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.productionId} value={option.productionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="PO#"
              name="poId"
              value={formData.poId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {dyeingPOs.map((option) => (
                <MenuItem key={option.poId} value={option.poId}>
                  {option.poIdName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Issuance Date"
              // disabled
              name="issuanceDate"
              value={
                formData.issuanceDate
                // !formData.issuanceDate
                //   ? null
                //   : new Date(formData.issuanceDate).toLocaleDateString(
                //       'en-GB',
                //       {
                //         day: 'numeric',
                //         month: 'short',
                //         year: '2-digit'
                //       }
                //     )
              }
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.launchDate}
              // helperText={formErrors.launchDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              disabled
              // type="date"
              label="Expected Return"
              name="expectedReturnDate"
              value={
                !formData.expectedReturnDate
                  ? null
                  : new Date(formData.expectedReturnDate).toLocaleDateString(
                      'en-GB',
                      {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      }
                    )
              }
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.expectedReturnDate}
              // helperText={formErrors.expectedReturnDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              disabled
              // select
              label="Process"
              name="processTypeName"
              value={formData.processTypeName}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {/* {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              disabled
              // select
              label="Select Fabric"
              name="fabricName"
              value={formData.fabricName}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {/* {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Vendor"
              disabled
              fullWidth
              size="small"
              name="vendorName"
              onChange={handleChange}
              value={formData.vendorName}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Shrinkage"
              fullWidth
              disabled
              size="small"
              name="shrinkage"
              onChange={handleChange}
              value={formData.shrinkage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <TextField
              label="Wastage"
              fullWidth
              disabled
              size="small"
              name="wastage"
              onChange={handleChange}
              value={formData.wastage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              disabled
              // select
              label="Select Location"
              name="fullLocation"
              value={formData.fullLocation}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="PO Quantity"
              name="quantity"
              value={formatNumber(formData.quantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Issued Quantity"
              name="issuanceQty"
              value={formatNumber(formData.issuanceQty)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Remaining Quantity"
              name="remainingQuantity"
              value={formatNumber(formData.remainingQuantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid> */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Remaining Quantity"
              name="remainingQuantity"
              value={formatNumber(formData.remainingQuantity)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              // select
              label="Stock In HAnd"
              name="stockInHandQty"
              value={formatNumber(formData.stockInHandQty)}
              onChange={handleChange}
              size="small"
              disabled
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            ></TextField>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label="Remarks"
              fullWidth
              size="small"
              multiline
              maxRows={3}
              name="remarks"
              onChange={handleChange}
              value={formData.remarks}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Typography
              variant="overline"
              sx={{ display: 'block', fontWeight: 'bold', fontSize: 15 }}
            >
              Balance : {formData.balance?.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={poDetails}
              columns={designsColumns}
              apiRef={apiRef}
              disableRowSelectionOnClick
              checkboxSelection
              isRowSelectable={
                (params) => params.row.quantity !== params.row.assignQuantity
                // params.row.quantity > params.row.assignQuantity
              }
              // isRowSelectable={isRowSelectable} // Disable saved rows
              onRowSelectionModelChange={handleRowSelectionModelChange}
              rowSelectionModel={rowSelectionModel}
            />
          </Grid>

          <Grid item xs={12} textAlign="right">
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              // disabled={handleDisabled()}
              disabled={poDetails.every(
                (po) => po.quantity <= po.assignQuantity
              )}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="View Issuance"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <MainCard
          style={{
            borderWidth: 1,
            borderStyle: 'dotted',
            borderColor: '#a11f23',
            // backgroundColor: '#eef2f6',
            width: 'auto',
            maxHeight: { xs: '80vh', md: 'auto' },
            overflow: 'auto'
          }}
        >
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChangeTabs}>
                  <Tab
                    icon={<CategoryOutlinedIcon />}
                    label="Issuance"
                    value="1"
                    sx={(theme) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${theme.palette.primary.main} !important`
                      }
                    })}
                  />
                  <Tab
                    icon={<AssignmentOutlinedIcon />}
                    label="OGP"
                    value="2"
                    sx={(theme) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${theme.palette.primary.main} !important`
                      }
                    })}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid
                  container
                  spacing={2}
                  width="Inherit"
                  // sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={issuanceList}
                      iColumns={issuanceColumns}
                      hideAction
                      height
                      refetchIssuanceData={refetchIssuanceData}
                    />
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      fullWidth
                      maxWidth="xl"
                    >
                      <DialogTitle
                        sx={{
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px'
                        }}
                      >
                        <Typography
                          variant="h4"
                          component="div"
                          color="#ffffff"
                          gutterBottom
                          fontSize={20}
                          fontWeight={2}
                          fontStyle={'normal'}
                        >
                          {'Generate OGP'}
                        </Typography>
                        <IconButton
                          onClick={handleClose}
                          sx={{ color: '#ffffff' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                        <DyeingIssuanceView
                          iss={iss}
                          handleClose={handleClose}
                          refetchData={refetchIssuanceData}
                        />
                      </DialogContent>
                    </Dialog>
                    <Dialog
                      open={open2}
                      onClose={handleClose2}
                      fullWidth
                      maxWidth="xl"
                    >
                      <DialogTitle
                        sx={{
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px',
                          mb: 2.5
                        }}
                      >
                        <Typography
                          variant="h4"
                          component="div"
                          color="#ffffff"
                          gutterBottom
                          fontSize={20}
                          fontWeight={2}
                          fontStyle={'normal'}
                        >
                          {'Issuance Report'}
                        </Typography>
                        <IconButton
                          onClick={handleClose2}
                          sx={{ color: '#ffffff' }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>

                        <SSRSReport
                          rId={15}
                          DyeingIssuance={{ paramIssuanceId: iss.issuanceId }}
                        />
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <OGPView po={formData.poId} issId={issId} />
              </TabPanel>
            </TabContext>
          </Box>
        </MainCard>
      </Card>
    </Box>
  );
};

export default DyeingIssuance;
