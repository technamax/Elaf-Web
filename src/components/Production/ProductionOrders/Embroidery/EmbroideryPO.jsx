import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
  ButtonGroup,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SSRSReport from 'views/DetailedReports/Reports';
import MainCard from 'ui-component/cards/MainCard';

import { Card, CardHeader, Avatar } from '@mui/material';
import '../../../../assets/scss/style.scss';
import { useNavigate } from 'react-router-dom';
import StatusChip from '../../../StatusChip';
import { useGetEmboideryComponentsByDesignIdQuery } from 'api/store/Apis/poApi';
import {
  useGetProductionBatchForProcessingQuery,
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPoHeaderListQuery,
  useDyeingPoAssignTermDetailsByPoIdQuery,
  useGetDyeingPoHeaderbyProductionIdAndStatusQuery,
  useGetProductionBatchDetailsByProductionidQuery
} from 'api/store/Apis/productionApi';
import {
  useGetWareHouseLocationsQuery,
  useGetLookUpListQuery
} from 'api/store/Apis/lookupApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { useSnackbar } from 'notistack';
// import AssignTerms from './AssignTerms';
import AssignTerms from '../Dyeing/AssignTerms';
import POView from '../Dyeing/POView';
// import POView from './POView';
//////
import * as React from 'react';
import { useUser } from 'context/User';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { style, width } from '@mui/system';
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

const EmbroideryPO = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [fabrics, setFabrics] = useState([]);
  const { user } = useUser();
  // const [initialData, setInitialData] = useState([]);
  // const [isEdit, setIsEdit] = useState(false);
  const [savedRowIds, setSavedRowIds] = useState(new Set());

  const [formData, setFormData] = useState({
    poId: 0,
    productionId: '',
    planningHeaderId: '',
    issuanceDate: new Date().toISOString().slice(0, 10),
    expectedReturnDate: '',
    processTypeId: '',
    // fabricId: '',
    // pxQty: 0,
    vendorId: '',
    // shrinkage: '',
    // wastage: '',
    // rate: 0,
    // tax: 0,
    locationId: '',
    remarks: '',

    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const [initialRows, setInitialRows] = useState([]);
  const [componentsList, setComponentsLists] = useState([]);
  const [fabricsList, setFabricsList] = useState([]);
  const [designsList, setDesignsList] = useState([]);
  const [vendorsList, setVendorsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const { data: poHeaderData, refetch: refetchPoHeaderData } =
    useGetDyeingPoHeaderbyProductionIdAndStatusQuery(
      { productionId: formData.productionId, status: 7 },
      {
        skip: !formData.productionId // Skip the query if no collection is selected
      }
    );
  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
  const { data: dyeingPoData, refetch: refetchDyeingPoData } =
    useGetDyeingPoHeaderListQuery();
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();
  const { data: componentsData, refetch: refetchComponentsData } =
    useGetEmboideryComponentsByDesignIdQuery(formData.planningHeaderId, {
      skip: !formData.planningHeaderId // Skip the query if no collection is selected
    });
  const { data: designsData, refetch: refetchDesignsData } =
    useGetProductionBatchDetailsByProductionidQuery(formData.productionId, {
      skip: !formData.productionId // Skip the query if no collection is selected
    });
  const { data: vendorsData, refetch: refetchVendorsData } =
    useGetVendorsByFabricIDQuery(formData.fabricId, {
      skip: !formData.fabricId // Skip the query if no collection is selected
    });
  const { data: columnsData, refetch: refetchcolumnsData } =
    useGetProductionPODesignByFabricAndProductionIdQuery(
      { fabricId: formData.fabricId, productionId: formData.productionId },
      {
        skip: !formData.fabricId || !formData.productionId // Skip the query if no collection is selected
      }
    );
  const { data: lookUpData, refetch: refetchlookUpData } =
    useGetLookUpListQuery();
  // const { data: subMenuData, refetch } = useGetSubMenuListQuery();
  const [productions, setProductions] = useState([]);
  const [processTypes, setProcessTypes] = useState([]);
  useEffect(() => {
    if (lookUpData) {
      setProcessTypes(
        lookUpData.result[0].productionProcessList
          .filter((item) => item.lookUpId === 1225 || item.lookUpId === 1226)
          .map((row, index) => ({
            id: index,
            ...row
          }))
      );
      console.log('lookUpData.result[0]', lookUpData.result[0]);
      setVendorsList(
        lookUpData.result[0].vendorList.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [lookUpData]);
  useEffect(() => {
    if (poHeaderData) {
      refetchPoHeaderData();
      setInitialRows(
        poHeaderData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [poHeaderData, refetchPoHeaderData]);
  useEffect(() => {
    if (designsData) {
      setDesignsList(
        designsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [designsData, refetchDesignsData]);
  useEffect(() => {
    if (componentsData) {
      setComponentsLists(
        componentsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [componentsData, refetchComponentsData]);
  useEffect(() => {
    if (columnsData) {
      setFabrics(
        columnsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [columnsData, refetchcolumnsData]);
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
  useEffect(() => {
    if (locationsData) {
      setLocationsList(
        locationsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [locationsData]);
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

  const Quantity = fabrics
    .reduce((sum, row) => sum + (row.availableQty ?? 0), 0)
    .toFixed(2);
  const assignedQuantity = fabrics
    .reduce((sum, row) => sum + (row.quantity ?? 0), 0)
    .toFixed(2);
  const pQuantity = fabrics
    .reduce((sum, row) => sum + (row.prevoiusPoQty ?? 0), 0)
    .toFixed(2);
  // useEffect(() => {
  //   setFormData((prevFormData) => ({
  //     ...formData,
  //     overallQty: Quantity
  //     // remainingQuantity:
  //     //   (prevFormData.overallQty - assignedQuantity).toFixed(2) || 0
  //   }));
  // }, [setFabrics, fabrics]);
  // useEffect(() => {
  //   setFormData((prevFormData) => ({
  //     ...formData,
  //     overallQty: Quantity,
  //     remainingQuantity:
  //       (prevFormData.overallQty - pQuantity - assignedQuantity).toFixed(2) || 0
  //   }));
  // }, [setFabrics, fabrics]);
  console.log('initialRows', initialRows);
  console.log('poHeaderData', poHeaderData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === 'vendorId') {
    //   const selectedvendor = vendorsList.find(
    //     (collection) => collection.vendorId === parseInt(value)
    //   );

    //   setFormData({
    //     ...formData,
    //     vendorId: value,
    //     shrinkage: selectedvendor ? selectedvendor.shrinkage : '',
    //     wastage: selectedvendor ? selectedvendor.wastage : ''
    //   });
    // } else if (name === 'fabricId') {
    //   const selectedFabric = fabricsList.find(
    //     (collection) => collection.fabricId === parseInt(value)
    //   );

    //   setFormData({
    //     ...formData,
    //     fabricId: value,
    //     pxQty: selectedFabric ? selectedFabric.pxQty : 0,
    //     vendorId: '',
    //     shrinkage: '',
    //     wastage: ''
    //   });
    // } else {
    setFormData({ ...formData, [name]: value });
    // }
  };

  const handleSave = async () => {
    // if (rowSelectionModel.length === 0) {
    //   // Show a snackbar warning if no rows are selected
    //   enqueueSnackbar('Please select at least one row before saving!', {
    //     variant: 'warning',
    //     autoHideDuration: 5000
    //   });
    //   return;
    // }

    console.log('formData', formData);
    try {
      // Make the API call
      const response = await axios.post(
        'http://100.42.177.77:83/api/PO/SaveEmbroideryPO',
        { ...formData }
      );

      console.log('Save response:', response.data);
      // refetchDyeingPoData();
      // refetchPoHeaderData();
      // Check for success
      if (response.data.success) {
        // Show a success snackbar if the save operation was successful
        enqueueSnackbar('Data saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });
        // setSavedRowIds((prev) => new Set([...prev, ...rowSelectionModel]));

        // Reset formData and related states
        setFormData({
          // poId: 0,
          // productionId: '',
          ...formData,
          issuanceDate: '',
          expectedReturnDate: '',
          // fabricId: '',
          processTypeId: '',
          vendorId: '',
          // shrinkage: '',
          // wastage: '',
          locationId: '',
          appId: user.appId,
          createdOn: new Date().toISOString(),
          createdBy: user.empId,
          lastUpdatedOn: new Date().toISOString(),
          lastUpdatedBy: user.empId
        });
        // setFabrics([]);
        // refetchDyeingPoData();
        // refetchPoHeaderData();
        // setRowSelectionModel([]);
        // refetchcolumnsData();
        // setIsEdit(false);
      } else {
        // Show an error snackbar if the save operation was not successful
        enqueueSnackbar(`Save failed: ${response.data.message}`, {
          variant: 'error',
          autoHideDuration: 5000
        });
      }
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Failed to save data. Please try again.', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  console.log('formData', formData);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [vId, setVId] = React.useState(false);

  const handleClickOpen = async (data) => {
    setVId(data);
    setOpen(true);
  };
  const handleClickOpen2 = async (data) => {
    setOpen2(true);
    setVId(data);
  };
  console.log('terms condition', vId);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleIssuanceClick = (rowData) => {
    navigate('/Production/Issuance', { state: { data: rowData, tab: 1 } });
  };
  const [open3, setOpen3] = React.useState(false);

  const [iss, setIss] = React.useState(false);
  const handleClickOpen3 = async (data) => {
    setIss(data);
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'poIdName',
      headerName: 'PO ID'
    },
    {
      field: 'collectionName',
      headerName: 'Collection Name'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric Name'
    },
    {
      field: 'vendorName',
      headerName: 'Vendor'
    },
    {
      field: 'createdOn',
      headerName: 'PO Date',
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
        return <StatusChip label={params.row.statusName} status="Pending" />;
      }
    },
    {
      field: 'Actions',
      headerName: 'Actions',

      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ButtonGroup variant="text" size="small">
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen(params.row)}
            >
              Assign Terms
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen2(params.row)}
            >
              View
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleIssuanceClick(params.row)}
            >
              Issuance
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => handleClickOpen3(params.row)}
            >
              PO Report
            </Button>
          </ButtonGroup>
        </div>
      )
    }
  ];
  useEffect(() => {
    setFabrics(
      fabrics.map((fabric) => ({
        ...fabric,
        rate: formData.rate,
        tax: formData.tax,
        totalBeforeTax: formData.rate * fabric.quantity,
        totalAfterTax:
          formData.rate * fabric.quantity +
          formData.rate * fabric.quantity * (formData.tax / 100)
      }))
    );
  }, [formData.rate, formData.tax]);
  // const handleCellEdit = React.useCallback(
  //   (params) => {
  //     const { id, field, value } = params;
  //     console.log('Editing cell:', params); // Debugging line

  //     setFabrics((prevRows) =>
  //       prevRows.map((row) => {
  //         if (row.id === id) {
  //           const updatedRow = {
  //             ...row,
  //             [field]: value,
  //             poId: 0,
  //             poDetId: 0,
  //             appId: user.appId,
  //             createdOn: new Date().toISOString(),
  //             createdBy: user.empId,
  //             lastUpdatedOn: new Date().toISOString(),
  //             lastUpdatedBy: user.empId
  //           };
  //           if (field === 'quantity') {
  //             updatedRow.totalBeforeTax = updatedRow.rate * updatedRow.quantity;
  //             updatedRow.totalAfterTax =
  //               updatedRow.totalBeforeTax +
  //               updatedRow.totalBeforeTax * (updatedRow.tax / 100);
  //           }

  //           if (field === 'quantity' && value > 0) {
  //             setRowSelectionModel((prevSelectionModel) => {
  //               if (!prevSelectionModel.includes(id)) {
  //                 return [...prevSelectionModel, id]; // Add the row ID to the selection model
  //               }
  //               return prevSelectionModel;
  //             });
  //           }
  //           if (field === 'quantity' && (value === '' || value === 0)) {
  //             setRowSelectionModel((prevSelectionModel) =>
  //               prevSelectionModel.filter((selectedId) => selectedId !== id)
  //             );
  //           }

  //           return updatedRow;
  //         }
  //         return row;
  //       })
  //     );
  //   },
  //   [setFabrics, user.appId, user.empId, formData.rate]
  // );

  // const designsColumns = [
  //   {
  //     field: 'id',

  //     headerName: 'Sr#'
  //   },
  //   {
  //     field: 'designNo',
  //     headerName: 'Design'
  //   },
  //   {
  //     field: 'colorName',
  //     headerName: 'Color'
  //   },
  //   {
  //     field: 'availableQty',
  //     headerName: 'Planned Qty',
  //     valueGetter: (params) => {
  //       return params.toLocaleString();
  //     },
  //     renderCell: (params) => {
  //       return (
  //         <StatusChip
  //           label={params.row.availableQty.toLocaleString()}
  //           status="Inspected"
  //         />
  //       );
  //     }
  //   },
  //   {
  //     field: 'prevoiusPoQty',
  //     headerName: 'Prevoius PO.Qty',
  //     valueGetter: (params) => {
  //       return params.toLocaleString();
  //     },
  //     renderCell: (params) => {
  //       return (
  //         <StatusChip
  //           label={params.row.prevoiusPoQty.toLocaleString()}
  //           status="Received"
  //         />
  //       );
  //     }
  //   },
  //   {
  //     field: 'remaining',
  //     headerName: 'Remaining Qty',
  //     valueGetter: (params, row) => {
  //       const remainingQty = row.availableQty - row.prevoiusPoQty;
  //       return remainingQty.toLocaleString();
  //     },
  //     renderCell: (params) => {
  //       const remainingQty = params.row.availableQty - params.row.prevoiusPoQty;
  //       // const chipColor = remainingQty < 0 ? '#FF0000' : '#00FF00'; // Red for negative, green otherwise

  //       return (
  //         <Chip
  //           label={remainingQty.toLocaleString()}
  //           sx={{
  //             backgroundColor: '#FF0000', // Set to red
  //             color: '#FFFFFF' // White text for visibility
  //           }}
  //         />
  //       );
  //     }
  //   },

  //   {
  //     field: 'quantity',
  //     headerName: 'Assigned Qty',
  //     // flex: 1,
  //     // width: 'auto',

  //     renderCell: (params) => (
  //       <SmallTextField
  //         variant="outlined"
  //         size="small"
  //         // fullWidth
  //         sx={{ mt: 1, width: '50px' }}
  //         value={params.row.quantity || ''}
  //         onChange={(event) =>
  //           handleCellEdit({
  //             id: params.id,
  //             field: 'quantity',
  //             value: Number(event.target.value)
  //           })
  //         }
  //         type="number"
  //         InputProps={{
  //           style: { fontSize: '0.875rem' }
  //         }}
  //       />
  //     )
  //   },
  //   {
  //     field: 'totalBeforeTax',
  //     headerName: 'Total',
  //     renderCell: (params) => {
  //       const totalBeforeTax = params.row.totalBeforeTax || 0;
  //       const formattedTotalBeforeTax = totalBeforeTax.toLocaleString();
  //       return (
  //         <SmallTextField
  //           variant="outlined"
  //           size="small"
  //           sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
  //           value={formattedTotalBeforeTax} // Display formatted total
  //           onChange={(event) => {
  //             // Remove thousand separators before converting to number
  //             const numericValue = Number(event.target.value.replace(/,/g, ''));
  //             handleCellEdit({
  //               id: params.id,
  //               field: 'totalBeforeTax',
  //               value: numericValue
  //             });
  //           }}
  //           type="text" // Use text type for formatted display
  //           InputProps={{
  //             style: { fontSize: '0.875rem' } // Ensure the font size is suitable
  //           }}
  //         />
  //       );
  //     }
  //   },
  //   {
  //     field: 'totalAfterTax',
  //     headerName: 'Total After Tax',
  //     renderCell: (params) => {
  //       const totalAfterTax = params.row.totalAfterTax || 0;
  //       const formattedTotalAfterTax = totalAfterTax.toLocaleString();
  //       return (
  //         <SmallTextField
  //           variant="outlined"
  //           size="small"
  //           sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
  //           value={formattedTotalAfterTax} // Display formatted total
  //           onChange={(event) => {
  //             // Remove thousand separators before converting to number
  //             const numericValue = Number(event.target.value.replace(/,/g, ''));
  //             handleCellEdit({
  //               id: params.id,
  //               field: 'totalAfterTax',
  //               value: numericValue
  //             });
  //           }}
  //           type="text" // Use text type for formatted display
  //           InputProps={{
  //             style: { fontSize: '0.875rem' } // Ensure the font size is suitable
  //           }}
  //         />
  //       );
  //     }
  //   }
  // ];

  // // const fetchData = React.useCallback(() => {
  // //   apiRef.current.autosizeColumns({
  // //     includeHeaders: true,
  // //     includeOutliers: true
  // //   });
  // // }, [apiRef]);
  // const fetchData = () => {
  //   apiRef.current.autosizeColumns({
  //     includeHeaders: true,
  //     includeOutliers: true
  //   });
  // };
  // React.useEffect(() => {
  //   fetchData();
  // });
  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    setComponentsLists((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          const updatedRow = {
            ...row,
            [field]: value,
            // quantity: row.itpQuantity,
            // productName: row.fabricName,
            poDetId: 0,
            poId: 0,
            appId: user.appId,
            createdOn: new Date().toISOString(),
            createdBy: user.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: user.empId
          };

          // Recalculate the amount when rate or quantity is updated
          if (
            field === 'rate' ||
            field === 'stitches'
            // field === 'gradeCPQty' ||
            // field === 'others1Qty'
          ) {
            updatedRow.total = updatedRow.rate * updatedRow.stitches;
            // (updatedRow.gradeCPQty || 0) +
            // (updatedRow.others1Qty || 0);
          }
          return updatedRow;
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setFormData({
      ...formData,
      embroideryPoDetailsList: componentsList
    });
  }, [componentsList, setComponentsLists]);
  console.log('formData', formData);
  console.log('componentsList', componentsList);

  const componentsColumns = [
    {
      field: 'id',
      headerName: 'Sr#'
    },
    {
      field: 'componentName',
      headerName: 'Component'
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },
    {
      field: 'colourName',
      headerName: 'Color'
    },
    {
      field: 'totalPcs',
      headerName: 'Total PCS',
      valueGetter: (params) => {
        return params.toLocaleString();
      }
    },

    {
      field: 'repeats',
      headerName: 'Repeats'
    },
    {
      field: 'noOfHeadsName',
      headerName: 'No Of Headers'
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size'
    },
    {
      field: 'itemsPerRepeat',
      headerName: 'items PerRepeat'
    },
    // {
    //   field: 'lastReceivedQty',
    //   headerName: 'Overall Received',
    //   valueGetter: (params, row) => {
    //     return (params - row.shortageQty).toLocaleString();
    //   }
    // },
    // {
    //   field: 'remaining',
    //   headerName: 'Remaining',
    //   valueGetter: (params, row) => {
    //     return (
    //       row.issuanceQuantity -
    //       (row.lastReceivedQty - row.shortageQty)
    //     ).toLocaleString();
    //   }
    // },
    {
      field: 'stitches',
      headerName: 'Stitches',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          // disabled
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.stitches || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'stitches',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'rate',
      headerName: 'Rate',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.rate || 0}
          defaultValue={10}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'rate',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'total',
      headerName: 'Total Amount',
      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '50px' }} // Adjust width and height as needed
          value={params.row.total || 0}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'total',
              value: Number(event.target.value)
            })
          }
          type="number"
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
  // const [selectedDesigns, setSelectedDesigns] = useState([]);

  // const handleRowSelectionModelChange = React.useCallback(
  //   (newRowSelectionModel) => {
  //     setRowSelectionModel(newRowSelectionModel);

  //     const selectedDesigns = newRowSelectionModel
  //       .map((id) => {
  //         const rowData = apiRef.current.getRow(id);
  //         console.log('rowData', rowData);
  //         return rowData
  //           ? {
  //               ...rowData
  //             }
  //           : null;
  //       })
  //       .filter((row) => row !== null); // Filter out any null values

  //     console.log('selectedDesigns', selectedDesigns);
  //     setSelectedDesigns(selectedDesigns);
  //   },
  //   [apiRef]
  // );

  // useEffect(() => {
  //   // Filter the fabrics to include only the selected rows
  //   const selectedFabrics = fabrics.filter((fabric) =>
  //     rowSelectionModel.includes(fabric.id)
  //   );

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     dyeingPoDetailsList: selectedFabrics
  //   }));
  // }, [fabrics, rowSelectionModel]);

  // console.log('fabrics', fabrics);
  // React.useEffect(() => {
  //   if (apiRef.current) {
  //     console.log('API ref is ready:', apiRef.current);
  //   }
  // }, [apiRef]);

  // console.log('selectedDesigns:', selectedDesigns);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Embroidery Production Order"
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
              label="Design"
              name="planningHeaderId"
              value={formData.planningHeaderId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {designsList.map((option) => (
                <MenuItem
                  key={option.planningHeaderId}
                  value={option.planningHeaderId}
                >
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Process Type"
              name="processTypeId"
              value={formData.processTypeId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {processTypes.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="PO Date"
              name="issuanceDate"
              value={formData.issuanceDate}
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
              type="date"
              label="Expected Return"
              name="expectedReturnDate"
              value={formData.expectedReturnDate}
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
          {/* <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Fabric"
              name="fabricId"
              value={formData.fabricId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))}
            </TextField>
          </Grid> */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Vendor"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {vendorsList.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="Shrinkage"
              fullWidth
              size="small"
              name="shrinkage"
              disabled
              onChange={handleChange}
              value={formData.shrinkage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid> */}
          {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="Wastage"
              fullWidth
              size="small"
              name="wastage"
              disabled
              onChange={handleChange}
              value={formData.wastage}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid> */}
          {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="Rate"
              type="number"
              fullWidth
              size="small"
              name="rate"
              onChange={handleChange}
              value={formData.rate}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid> */}
          {/* <Grid item xs={12} md={1.5}>
            <TextField
              label="Tax"
              fullWidth
              type="number"
              size="small"
              name="tax"
              onChange={handleChange}
              value={formData.tax}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid> */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Location"
              name="locationId"
              value={formData.locationId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {locationsList.map((option) => (
                <MenuItem key={option.locationId} value={option.locationId}>
                  {option.section +
                    '.' +
                    option.aisle +
                    '.' +
                    option.rack +
                    '.' +
                    option.bin}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Remarks"
              fullWidth
              size="small"
              name="remarks"
              onChange={handleChange}
              value={formData.remarks}
              required
              // disabled={isEdit}
              // error={!!formErrors.collectionName}
              // helperText={formErrors.collectionName}
            />
          </Grid>
          {/* <Grid item xs={12} textAlign="right">
            <Typography
              variant="overline"
              sx={{ display: 'block', fontWeight: 'bold', fontSize: 15 }}
            >
              Assign Quantity{' '}
              <Chip
                label={formData.pxQty?.toLocaleString()}
                sx={{
                  backgroundColor: '#008000', // Assigned Qty color
                  color: '#FFFFFF' // White text
                }}
              />
              | planned Quantity{' '}
              <Chip
                label={Number(formData.overallQty)?.toLocaleString()}
                sx={{
                  backgroundColor: '#0000FF', // Planned Qty color
                  color: '#FFFFFF' // White text
                }}
              />{' '}
              | Remaining Quantity{' '}
              <Chip
                label={formData.remainingQuantity?.toLocaleString()}
                sx={{
                  backgroundColor: '#FF0000', // Set to red
                  color: '#FFFFFF' // White text for visibility
                }}
              />
            </Typography>
          </Grid> */}
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={componentsList}
                columns={componentsColumns}
                apiRef={apiRef}
                disableRowSelectionOnClick
                // checkboxSelection
                // onRowSelectionModelChange={handleRowSelectionModelChange}
                // rowSelectionModel={rowSelectionModel}
              />
              {/* <DataGrid
                rows={fabrics}
                columns={designsColumns}
                pageSize={10} // Adjust based on your needs
                apiRef={apiRef}
                disableRowSelectionOnClick
                checkboxSelection
                isRowSelectable={(params) =>
                  params.row.prevoiusPoQty < params.row.availableQty &&
                  params.row.prevoiusPoQty !== params.row.availableQty
                }
                onRowSelectionModelChange={handleRowSelectionModelChange}
                rowSelectionModel={rowSelectionModel}
              /> */}
            </div>
          </Grid>

          <Grid item xs={12} textAlign="right">
            <Button
              variant="contained"
              size="small"
              onClick={handleSave}
              // disabled={fabrics.every(
              //   (item) => item.prevoiusPoQty >= item.availableQty
              // )}
            >
              Save
            </Button>
          </Grid>
        </Grid>{' '}
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="Assign TCs & Issuance"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={2}
          width="Inherit"
          // sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12}>
            <ReuseableDataGrid
              initialRows={initialRows}
              iColumns={columns}
              pageSize={10} // Adjust based on your needs
              // setInitialData={setInitialData}
              hideAction
            />
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
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
                  {'Assign Terms  And Conditions'}
                </Typography>
                <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                {/* <Grid
                  container
                  spacing={2}
                  width="Inherit"
                  // sx={{ paddingY: 2, paddingX: 2 }}
                >
                  <Grid item xs={12}>
                    <ReuseableDataGrid
                      initialRows={vId}
                      iColumns={tcColumns}
                      // setInitialData={setInitialData}
                      hideAction
                    />
                  </Grid>
                </Grid> */}
                <AssignTerms vId={vId} handleClose={handleClose} />
              </DialogContent>
            </Dialog>
            <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="xl">
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
                  {'View Production Order'}
                </Typography>
                <IconButton onClick={handleClose2} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <POView vId={vId} />
              </DialogContent>
            </Dialog>
            <Dialog open={open3} onClose={handleClose3} fullWidth maxWidth="xl">
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
                  {'Inspection'}
                </Typography>
                <IconButton onClick={handleClose3} sx={{ color: '#ffffff' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <SSRSReport rId={20} PO={{ ParamPoIdName: iss.poIdName }} />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>{' '}
      </Card>
    </Box>
  );
};

export default EmbroideryPO;
