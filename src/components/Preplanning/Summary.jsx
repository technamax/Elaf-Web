import { useState, useEffect } from 'react';
import {
  useGetPrePlanningByPlanningHeaderIdQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetDyeingPrintingListByBatchNoQuery,
  useGetEmbroideryListByBatchNoQuery,
  useGetSchffiliListByBatchNoQuery,
  useGetAdditionalProcessListByBatchNoQuery
} from 'api/store/Apis/prePlanningHeaderApi';
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
  IconButton,
  inputLabelClasses,
  Chip
} from '@mui/material';
import StatusChip from '../StatusChip';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import Schiffli from './../../views/Planning/Schiffli';
import AdditionalProcess from './../../views/Planning/AdditionalProcess';

export const PrePlannningDetails = ({ planningHeaderId }) => {
  const { data: prePlanningList, refetch: refetchPrePlanningList } =
    useGetPrePlanningByPlanningHeaderIdQuery(planningHeaderId, {
      skip: !planningHeaderId
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (prePlanningList) {
      // setIsLoading(false);

      setInitialRows(
        prePlanningList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [prePlanningList, refetchPrePlanningList]);

  console.log('initialRows', initialRows);

  const totalFabric = initialRows
    .reduce((sum, row) => sum + (row.totalFabric ?? 0), 0)
    .toFixed(2);

  const localizedTotalFabric = parseFloat(totalFabric).toLocaleString();
  console.log('localizedTotalFabric', localizedTotalFabric);

  // Calculate the overall total sum
  const total = initialRows
    .reduce((sum, row) => sum + (row.total ?? 0), 0)
    .toFixed(2);

  const localizedTotal = parseFloat(total).toLocaleString();

  // Add custom total fabric row
  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      label: 'Total Fabric',
      totalFabric: localizedTotalFabric,
      total: localizedTotal
    }
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
      field: 'id',
      headerName: 'Sr#',
      ...baseColumnOptions,
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_SUMMARY') {
          return 10;
        }
        return undefined;
      },
      valueGetter: (value, row) => {
        if (row.id === 'TOTAL_SUMMARY') {
          // console.log('row', row.label);

          return row.label;
        }
        return value;
      },
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? 'black' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      )
    },
    {
      field: 'componentName',
      headerName: 'Component',

      ...baseColumnOptions
    },
    {
      field: 'planningProcessTypeName',
      headerName: 'Process Type',

      ...baseColumnOptions,
      renderCell: (params) => {
        return <StatusChip label={params.value} status="primaryDark" />;
      }
    },
    {
      field: 'color',
      headerName: 'Color',
      ...baseColumnOptions
    },
    {
      field: 'cuttingSize',
      headerName: 'Cutting Size',
      // flex: 1,
      ...baseColumnOptions
    },
    {
      field: 'fabric',
      headerName: 'Fabrication',
      ...baseColumnOptions
    },
    {
      field: 'noOfHeadName',
      headerName: 'No. Of Heads',
      ...baseColumnOptions
    },
    {
      field: 'operatingMachineName',
      headerName: 'Operating Machine',
      ...baseColumnOptions
    },
    {
      field: 'repeats',
      headerName: 'Repeats',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      ...baseColumnOptions
    },
    {
      field: 'repeatSize',
      headerName: 'Repeat Size',
      valueGetter: (params) => {
        return params.toLocaleString();
      },
      ...baseColumnOptions
    },
    {
      field: 'totalFabric',
      headerName: 'Total Fabric',
      valueGetter: (params) => params.toLocaleString(),
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      ),
      ...baseColumnOptions
    },
    {
      field: 'uom',
      headerName: 'UOM',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 2 : undefined),
      valueGetter: (value, row) =>
        row.id === 'TOTAL_SUMMARY' ? 'OverAll Total' : value,
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? 'black' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      ),
      ...baseColumnOptions
    },
    {
      field: 'shrinkage',
      headerName: 'Shrinkage %'
    },
    {
      field: 'wastage',
      headerName: 'Wastage %'
    },
    {
      field: 'total',
      headerName: 'Total',
      valueGetter: (params) => params.toLocaleString(),
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 2 : undefined),
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      ),
      ...baseColumnOptions
    }
  ];
  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="PrePlanningList"
    />
  );
};

export const FabricationDetails = ({ planningHeaderId }) => {
  const { data: fabricRequisitionData, refetch: refetchFabricRequisitionData } =
    useGetFabricRequisitionListByBatchNoQuery(planningHeaderId, {
      skip: !planningHeaderId // Skip the query if no collection is selected
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (fabricRequisitionData) {
      setInitialRows(
        fabricRequisitionData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      // refetchBatches();
    }
  }, [fabricRequisitionData, refetchFabricRequisitionData]);

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
      id: 'TOTAL_SUMMARY',
      label: 'Total Summary',
      total: localizedTotal,
      totalInclGst: localizedTotalIncGst
    }
  ];

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_SUMMARY') {
          return 7;
        }
        return undefined;
      },
      valueGetter: (value, row) => {
        if (row.id === 'TOTAL_SUMMARY') {
          // console.log('row', row.label);
          return row.label;
        }
        return value;
      },
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? 'black' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      )
    },
    {
      field: 'designNo',
      headerName: 'Design'
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
      headerName: 'UOM',
      renderCell: (params) => {
        return <StatusChip label={params.value} status="primaryDark" />;
      }
    },
    {
      field: 'total',
      headerName: 'Total',

      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      )
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price'
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
      renderCell: (params) => (
        <div
          style={{
            color: params.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : undefined,
            fontWeight: params.row.id === 'TOTAL_SUMMARY' ? 'bold' : undefined
          }}
        >
          {params.value}
        </div>
      ),
      colSpan: (value, row) => {
        if (row.id === 'TOTAL_SUMMARY') {
          return 2;
        }
        return undefined;
      }
    }
  ];

  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="Fabrication Requistion List"
    />
  );
};

export const DyeingnDetails = ({ planningHeaderId }) => {
  const { data: dyeingPrintingData, refetch: refetchDyeingPrintingData } =
    useGetDyeingPrintingListByBatchNoQuery(planningHeaderId, {
      skip: !planningHeaderId
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (dyeingPrintingData) {
      setInitialRows(
        dyeingPrintingData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [dyeingPrintingData, refetchDyeingPrintingData]);

  const [totalAvailableQty, setTotalAvailableQty] = useState(0);
  const [totalAssignedQty, setTotalAssignedQty] = useState(0);
  useEffect(() => {
    const totalAvailableQty = initialRows
      .reduce((sum, row) => sum + (row.availableQty ?? 0), 0)
      .toFixed(2);
    const totalAssignedQty = initialRows
      .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
      .toFixed(2);

    setTotalAvailableQty(parseFloat(totalAvailableQty).toLocaleString());
    setTotalAssignedQty(parseFloat(totalAssignedQty).toLocaleString());
  }, [initialRows]);

  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      componentName: 'Total Summary',
      availableQty: totalAvailableQty,
      assignedQty: totalAssignedQty
    }
  ];
  const baseColumnOptions = {
    sortable: false,
    pinnable: false,
    hideable: false
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      ...baseColumnOptions,
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'fabricName',
      headerName: 'Fabric',
      ...baseColumnOptions
    },
    {
      field: 'colorName',
      headerName: 'Color',
      ...baseColumnOptions,
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 2 : undefined)
    },
    {
      field: 'processType',
      headerName: 'Process Type',
      ...baseColumnOptions,

      renderCell: (params) => {
        const chipColor =
          params.value === 'Dyeing'
            ? 'primary.dark'
            : params.value === 'Printing'
              ? 'success.dark'
              : // : params.value === 'Inches' ? 'success.dark'
                'default';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    {
      field: 'uom',
      headerName: ' UOM',
      ...baseColumnOptions
    },
    {
      field: 'poPcs',
      headerName: ' PO PCS.',
      ...baseColumnOptions
    },
    {
      field: 'availableQty',
      headerName: 'Available Quantitity',
      ...baseColumnOptions,

      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'assignedQty',
      headerName: 'Assigned Qty',
      ...baseColumnOptions,

      valueGetter: (params) => {
        return params.toLocaleString();
      },
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    }
  ];

  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="Dyeing&PrintingList"
    />
  );
};

export const EmbroideryDetails = ({ planningHeaderId }) => {
  const { data: embroideryList, refetch: refetchEmbroideryList } =
    useGetEmbroideryListByBatchNoQuery(planningHeaderId, {
      skip: !planningHeaderId
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (embroideryList) {
      setInitialRows(
        embroideryList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [embroideryList, refetchEmbroideryList]);

  const [totalAvailableQty, setTotalAvailableQty] = useState(0);
  const [totalAssignedQty, setTotalAssignedQty] = useState(0);
  const [totalPcsSum, setTotalPcsSum] = useState(0);
  const [totalRequiredPcs, setTotalRequiredPcs] = useState(0);
  useEffect(() => {
    const totalAvailableQty = initialRows
      .reduce((sum, row) => sum + (row.availableQty ?? 0), 0)
      .toFixed(2);
    const totalAssignedQty = initialRows
      .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
      .toFixed(2);
    const pcsSum = initialRows
      .reduce((sum, row) => sum + (row.totalPcs ?? 0), 0)
      .toFixed(2);
    const totalRequiredPcs = initialRows
      .reduce((sum, row) => sum + (row.requiredPcs ?? 0), 0)
      .toFixed(2);

    setTotalAvailableQty(parseFloat(totalAvailableQty).toLocaleString());
    setTotalAssignedQty(parseFloat(totalAssignedQty).toLocaleString());
    setTotalPcsSum(parseFloat(pcsSum).toLocaleString());
    setTotalRequiredPcs(parseFloat(totalRequiredPcs).toLocaleString());
  }, [initialRows]);

  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      availableQty: totalAvailableQty,
      assignedQty: totalAssignedQty,
      totalPcs: totalPcsSum,
      requiredPcs: totalRequiredPcs
    }
  ];
  const baseColumnOptions = {
    sortable: false,
    pinnable: false,
    hideable: false
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      ...baseColumnOptions,
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'designNo',
      headerName: 'Design',
      ...baseColumnOptions,
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 3 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    { field: 'batchNo', headerName: 'Batch No.' },
    {
      field: 'componentName',
      headerName: 'Component ',
      renderCell: (params) => {
        const chipColor = 'primary.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    { field: 'fabricName', headerName: 'Fabric ' },
    { field: 'poPcs', headerName: 'Po Pcs' },
    { field: 'colourName', headerName: 'Color' },
    { field: 'noOfHeadsName', headerName: 'No. Of Heads' },
    { field: 'repeats', headerName: 'Repeats' },
    { field: 'cuttingSize', headerName: 'Cutting Size' },
    { field: 'itemsPerRepeat', headerName: 'Items Per Repeat' },
    {
      field: 'availableQty',
      headerName: 'Available Qty',
      ...baseColumnOptions,

      valueGetter: (params) => {
        return params.toLocaleString();
      },
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'assignedQty',
      headerName: 'Assigned Qty',
      ...baseColumnOptions,

      valueGetter: (params) => {
        return params;
      },
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'totalPcs',
      headerName: 'Total Pcs',
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'requiredPcs',
      headerName: 'Assigned Pcs',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    }
  ];

  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="EmbroideryList"
    />
  );
};

export const SchiffliDetails = ({ planningHeaderId }) => {
  const { data: schiffliList, refetch: refetchSchiffliList } =
    useGetSchffiliListByBatchNoQuery(planningHeaderId, {
      skip: !planningHeaderId // Skip the query if no collection is selected
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (schiffliList) {
      setInitialRows(
        schiffliList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [schiffliList, refetchSchiffliList]);

  const [totalAmountSum, setTotalAmountSum] = useState(0);
  const [totalEmbroiderySum, setTotalEmbroiderySum] = useState(0);
  const [totalPcsSum, setTotalPcsSum] = useState(0);

  useEffect(() => {
    const amountSum = initialRows
      .reduce((sum, row) => sum + (row.totalAmount ?? 0), 0)
      .toFixed(2);
    const embroiderySum = initialRows
      .reduce((sum, row) => sum + (row.totalEmbroidry ?? 0), 0)
      .toFixed(2);
    const pcsSum = initialRows
      .reduce((sum, row) => sum + (row.totalPcs ?? 0), 0)
      .toFixed(2);

    setTotalAmountSum(parseFloat(amountSum).toLocaleString());
    setTotalEmbroiderySum(parseFloat(embroiderySum).toLocaleString());
    setTotalPcsSum(parseFloat(pcsSum).toLocaleString());
  }, [initialRows]);

  const footerRow = {
    id: 'TOTAL_SUMMARY',
    fabricName: 'Total Summary',
    totalAmount: totalAmountSum,
    totalEmbroidry: totalEmbroiderySum,
    totalPcs: totalPcsSum
  };

  const rows = [...initialRows, footerRow];

  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 3 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'fabricName',
      headerName: 'Fabric',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 2 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'componentName',
      headerName: 'Component',
      renderCell: (params) => {
        const chipColor = 'primary.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
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
      headerName: 'Stiches Per Yard'
    },
    {
      field: 'noOfItemPerThaan',
      headerName: 'Item Per Thaan'
    },
    {
      field: 'totalEmbroidry',
      headerName: 'Total Embroidry',
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'amountPerYard',
      headerName: 'Amount Per Yard'
    },

    {
      field: 'totalPcs',
      headerName: 'Total Pcs',
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
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
      headerName: 'Laser Cut Pcs.'
    }
  ];

  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="Schffili List"
    />
  );
};

export const AdditionalProcessDetails = ({ planningHeaderId }) => {
  const { data: additionalProcessList, refetch: refetchAdditionalProcessList } =
    useGetAdditionalProcessListByBatchNoQuery(planningHeaderId, {
      skip: !planningHeaderId
    });
  const [initialRows, setInitialRows] = useState([]);

  useEffect(() => {
    if (additionalProcessList) {
      setInitialRows(
        additionalProcessList.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [additionalProcessList, refetchAdditionalProcessList]);

  const [totalAssignedQty, setTotalAssignedQty] = useState(0);
  useEffect(() => {
    const totalAssignedQty = initialRows
      .reduce((sum, row) => sum + (row.assignedQty ?? 0), 0)
      .toFixed(2);

    setTotalAssignedQty(parseFloat(totalAssignedQty).toLocaleString());
  }, [initialRows]);

  const rows = [
    ...initialRows,
    {
      id: 'TOTAL_SUMMARY',
      assignedQty: totalAssignedQty
    }
  ];
  const columns = [
    {
      field: 'id',
      headerName: 'Sr#',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 4 : undefined),

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Total Summary
          </span>
        ) : (
          params.value
        )
    },
    {
      field: 'designNo',
      headerName: 'Design'
    },
    {
      field: 'batchNo',
      headerName: 'Batch'
    },
    {
      field: 'componentName',
      headerName: 'Component',
      renderCell: (params) => {
        const chipColor = 'primary.dark';

        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : chipColor,
              color:
                chipColor === 'primary' || chipColor === 'default'
                  ? undefined
                  : 'white'
            }}
            color={
              chipColor === 'primary'
                ? 'primary'
                : chipColor === 'default'
                  ? 'default'
                  : undefined
            }
          />
        );
      }
    },
    {
      field: 'fabricName',
      headerName: 'Fabric'
    },

    {
      field: 'colorName',
      headerName: 'Color'
    },
    {
      field: 'processTypeName',
      headerName: 'Process Type'
    },
    {
      field: 'pcsPerComponent',
      headerName: 'Pcs Per Component'
    },
    {
      field: 'assignedQty',
      headerName: 'Assigned Quantity',
      colSpan: (value, row) => (row.id === 'TOTAL_SUMMARY' ? 3 : undefined),

      valueGetter: (params) => {
        return params;
      },

      renderCell: (params) =>
        params.row.id === 'TOTAL_SUMMARY' ? (
          <span style={{ color: '#a11f23', fontWeight: 'bold' }}>
            {params.value}
          </span>
        ) : (
          params.value
        )
    }
  ];

  return (
    <ReuseableDataGrid
      iColumns={columns}
      initialRows={rows}
      hideAction
      fileName="AdditionalProcess"
    />
  );
};
