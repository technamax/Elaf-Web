import {
  j as e,
  _ as Ba,
  A as Fa,
  E as Ra,
  u as We,
  c as ze,
  b as _e,
  bi as za,
  B as Re,
  G as r,
  T as ve,
  D as he,
  aE as ct,
  bj as Qa,
  aW as $e,
  aX as Xe,
  aY as ot,
  bk as ut,
  bl as pt,
  bm as Wa,
  bn as mt,
  C as Me,
  d as ye,
  a$ as rt,
  e as Ve,
  bo as _a,
  aZ as Ua,
  bp as Ha,
  bq as qa,
  br as Ea,
  bs as Ga,
  bt as Ya,
  bu as Va,
  bv as Bt,
  bg as $a,
  M as Ka,
  bw as Xa
} from './index-CzwspkkF.js';
import { r as o, g as Da } from './vendor-BXCbSo2_.js';
import { B as ge, a as Ce, I as Qe } from './axios-lonJZgKi.js';
import {
  d as Ft,
  c as et,
  A as Rt,
  e as zt,
  f as Qt,
  S as Ja,
  a as Za,
  b as eo,
  F as to
} from './Fabrication-Dh1xOLcd.js';
import { d as Ye } from './VisibilityOutlined-D9xuAg3y.js';
import {
  A as Ze,
  R as qe,
  F as Wt,
  C as _t,
  a as nt,
  b as ht,
  c as st,
  d as gt,
  B as bt,
  u as ao,
  D as Ge,
  g as Mt,
  h as oo
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { d as ft } from './Close-BQBfEc69.js';
import { d as It } from './PersonAddAlt1Outlined-CtPtpl_k.js';
import { T as u, P as St } from './TextField-Djr8gt34.js';
import { M as _ } from './MenuItem-ZWEe2ZC6.js';
import { S as ro } from './StatusChip-C_oGlGq1.js';
import './dayjs.min-DO4_1a-m.js';
import './Skeleton-DdLL8d67.js';
let Pt = !1;
const no = o.forwardRef(function (d, v) {
  return (
    Pt ||
      (console.warn(
        [
          'MUI: The Autocomplete component was moved from the lab to the core.',
          '',
          "You should use `import { Autocomplete } from '@mui/material'`",
          "or `import Autocomplete from '@mui/material/Autocomplete'`"
        ].join(`
`)
      ),
      (Pt = !0)),
    e.jsx(Ze, Ba({ ref: v }, d))
  );
});
var xt = {},
  so = Ra;
Object.defineProperty(xt, '__esModule', { value: !0 });
var Ut = (xt.default = void 0),
  lo = so(Fa()),
  io = e;
Ut = xt.default = (0, lo.default)(
  (0, io.jsx)('path', {
    d: 'M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11h-9v-9h9zm-4.5-1L13 16h2v-3h3v3h2z'
  }),
  'SendAndArchive'
);
const co =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO2WzU4UQRSFe14CgoiMKPIqolEiIQq+gEFgFPHnFVyILI3GnQIbxxhG3IkaYxT8iUZFoxuDbokoIaNE/czNnE6KSjdT07Yb40kqqa6qW+dW3XNvdRT9R4MAHgD3640Dh/MkHQTOqMWIv9PGydOBUeCsWoz4O208PwdcxCz1xoGBKG8Abc5JPwBrataP0fY3iLcCk8C6SF4DV4HzatZf1Ny6vrfkRd4PrABV4BywE9huKpc2rA0ARaATGAe+yebgn5IfB34BD0XQCzwlHU+AA1r7CPgJlLKS94n8GtAM3CIcFaAJKGuPviwxX9XJjfxlCtGMyJLwQrbzwNeGNEFNRFVdZdrJb2ttAbizyU10SBNXQslbgR8SnMXcxagEOGyxdmxs3ZDmxjybHmWKZUdriAOnZWhqf+ZtVgyw3+HZPAZ2qX8yxIGbwCudxsdwgH3JszERtqtOVEIc+ARMKbc3xNy79r1a+xHodsYtDec8W6sl01YxQxxYVfzdWM4krDPiGEveXMHLjhMqUGshDlQTHLDNCg06MJvgwJcQB96lhMBSrddZ1y0nloDdXkbc9WwPKQSLIQ7M6rGxGuBjKMB+JEGE24A3tnfUgIo7E+p+1jTsUn8wxIEWFaJxKdrFmBwrJRSiEc2d8mz2AxPas6WuAwbgkspncZNaPyexWbuXsuaGbuQ7cDEKBbVHZEVParMeliRUPLW7eK4XcUF7NQU7YAD26NrKciLtJtJObuTXtce+KAuAI9pgXq9aj0SVhgXFvEN9y4Cjmci9kvtZmpjQw9KuOhH/kvUr1bq0xmK+bLZRHqB2nZd1Gyinp5yfUuu/1ZyRX7CfmlzIXUgLx6SH93o3ltUv6z8hf+LoX8ZvSFCuNiG5hzcAAAAASUVORK5CYII=',
  uo = ({
    initialFormData: n,
    setAdditionalProcessData: d,
    refetchDyeingPrintingData: v,
    handleClickOpen: j,
    showUpperDiv: h,
    productionStatus: t
  }) => {
    const { user: b } = We(),
      [s, B] = o.useState([]),
      [a, L] = o.useState([]),
      { enqueueSnackbar: k } = ze(),
      [X, m] = o.useState({}),
      y = s.reduce((f, E) => f + (E.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', y);
    const [g, J] = o.useState({
      dpIdDet: 0,
      dpId: n.dpId || 0,
      designId: n.designId || '',
      batchNo: n.batchNo || '',
      planningHeaderId: n.planningHeaderId || 0,
      fabricId: n.fabricId || '',
      fabricName: n.fabricName || '',
      colorId: n.colorId || '',
      colorName: n.colorName || '',
      uomId: n.uomId || '',
      uom: n.uom || '',
      poPcs: n.poPcs || '',
      vendorId: '',
      processType: n.processType || '',
      availableQty: n.availableQty || '',
      remainingQty: n.availableQty - y || '',
      shrinkage: n.allowedWastage || '',
      wastage: n.allowedWastage || '',
      assignedQty: '',
      rate: '',
      unitRatePerPo: 0,
      totalExcGst: 0,
      gst: 0,
      TotalIncludingGst: '',
      createdOn: new Date().toISOString(),
      createdBy: b.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: b.empId
    });
    o.useEffect(() => {
      J((f) => ({
        ...g,
        dpIdDet: a.dpIdDet || 0,
        dpId: a.dpId || 0,
        designId: (a == null ? void 0 : a.designId) || '',
        planningHeaderId: (a == null ? void 0 : a.planningHeaderId) || 0,
        batchNo: (a == null ? void 0 : a.batchNo) || '',
        vendorId: (a == null ? void 0 : a.vendorId) || '',
        shrinkage: (a == null ? void 0 : a.shrinkage) || '',
        wastage: (a == null ? void 0 : a.wastage) || '',
        outputQty: (a == null ? void 0 : a.outputQty) || 0,
        remainingQty:
          f.remainingQty + (a == null ? void 0 : a.assignedQty) || '',
        assignedQty: (a == null ? void 0 : a.assignedQty) || '',
        rate: (a == null ? void 0 : a.rate) || 0,
        unitRatePerPo: (a == null ? void 0 : a.unitRatePerPo) || '',
        totalExcGst: (a == null ? void 0 : a.totalExcGst) || '',
        gst: (a == null ? void 0 : a.gst) || 0,
        TotalIncludingGst: (a == null ? void 0 : a.totalIncludingGst) || '',
        createdOn:
          (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
        createdBy: (a == null ? void 0 : a.createdBy) || b.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: b.empId
      }));
    }, [a]),
      o.useEffect(() => {
        J({
          ...g,
          remainingQty: n.availableQty - y >= 0 ? n.availableQty - y : ''
        });
      }, [s, n.availableQty, y]);
    const { data: i } = _e(),
      { data: V, refetch: Z } = za(g.dpId, { skip: !g.dpId }),
      [T, W] = o.useState([]);
    o.useEffect(() => {
      if (i) {
        const f = i.result[0];
        W(f.vendorList);
      }
    }, [i]),
      o.useEffect(() => {
        V && B(V.result.map((f, E) => ({ id: E + 1, ...f })));
      }, [V, Z]),
      console.log('initialRows', s);
    const R = (f) => {
      const { name: E, value: re } = f.target;
      J({ ...g, [E]: re }),
        J((ie) => {
          const S = { ...ie, [E]: re };
          if (E === 'assignedQty' || E === 'remainingQty') {
            const ce = S.assignedQty,
              ne = S.remainingQty;
            ce > ne
              ? m((pe) => ({
                  ...pe,
                  assignedQty:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : m((pe) => ({ ...pe, assignedQty: '' }));
          }
          return S;
        });
    };
    o.useEffect(() => {
      const f = () => {
          const M = parseFloat(g.assignedQty) || 0,
            F = parseFloat(g.shrinkage) || 0,
            ae = parseFloat(g.wastage) || 0,
            P = F + ae;
          return ((M * 100) / (100 + P)).toFixed(2);
        },
        E = () => {
          const M = parseFloat(g.assignedQty) || 0,
            F = parseFloat(g.rate) || 0;
          return (M * F).toFixed(2);
        },
        re = (M, F) => (M * (1 + F / 100)).toFixed(2),
        ie = f(),
        S = E(),
        ce = parseFloat(g.gst) || 0,
        ne = re(S, ce),
        pe = parseFloat(g.poPcs) || 0,
        O = pe ? ne / pe : 0;
      J((M) => ({
        ...M,
        outputQty: ie,
        totalExcGst: S,
        TotalIncludingGst: ne,
        unitRatePerPo: O.toFixed(2)
      }));
    }, [
      g.availableQty,
      g.assignedQty,
      g.shrinkage,
      g.wastage,
      g.rate,
      g.gst,
      g.poPcs,
      g.unitRatePerPo
    ]),
      console.log('formData', g);
    const ee = async () => {
        console.log(g);
        try {
          if (g.assignedQty > g.remainingQty) {
            k(
              'Assigned quantity can not be greater then Remaining Quantity !',
              { variant: 'error', autoHideDuration: 5e3 }
            );
            return;
          }
          const f = await Ce.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrintingDetails',
            g
          );
          console.log('Save response:', f.data),
            J((E) => ({
              ...E,
              dpIdDet: 0,
              vendorId: '',
              availableQty: n.availableQty || '',
              shrinkage: '',
              wastage: '',
              assignedQty: '',
              rate: '',
              unitRatePerPo: 0,
              totalExcGst: 0,
              gst: 0,
              TotalIncludingGst: '',
              remainingQty: n.availableQty - y || '',
              createdOn: new Date().toISOString(),
              createdBy: b.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: b.empId
            })),
            Z(),
            v();
        } catch (f) {
          console.error('Error saving data:', f);
        }
      },
      D = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        {
          field: 'assignedQty',
          headerName: 'Assigned Quantity',
          valueGetter: (f) => f.toLocaleString()
        },
        { field: 'rate', headerName: 'Rate', flex: 1 },
        {
          field: 'totalExcGst',
          headerName: 'Total Excl Gst.',
          valueGetter: (f) => f.toLocaleString()
        },
        { field: 'gst', headerName: 'Gst.', flex: 1 },
        {
          field: 'totalIncludingGst',
          headerName: 'TotalIncludingGst',
          valueGetter: (f) => f.toLocaleString()
        },
        { field: 'outputQty', headerName: 'Output Qty', flex: 1 }
      ];
    return e.jsxs(Re, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs('div', {
          hidden: !h,
          children: [
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: e.jsx(ve, {
                    variant: 'h4',
                    gutterBottom: !0,
                    children: 'Assign Vendor'
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: g.fabricName,
                      onChange: R,
                      size: 'small',
                      disabled: !0,
                      sx: (f) => ({
                        ...(g.availableQty !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      })
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'Process Type',
                    name: 'processType',
                    value: g.processType,
                    onChange: R,
                    size: 'small',
                    disabled: !0,
                    sx: (f) => ({
                      ...(g.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colorName',
                      value: g.colorName,
                      onChange: R,
                      size: 'small',
                      disabled: !0,
                      sx: (f) => ({
                        ...(g.availableQty !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      })
                    }),
                    ' '
                  ]
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'UOM',
                      name: 'uom',
                      value: g.uom,
                      onChange: R,
                      size: 'small',
                      disabled: !0,
                      sx: (f) => ({
                        ...(g.availableQty !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      })
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'PO Pcs',
                    size: 'small',
                    name: 'poPcs',
                    value: g.poPcs,
                    onChange: R,
                    disabled: !0,
                    sx: (f) => ({
                      ...(g.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Total AvailableQty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: g.availableQty,
                    onChange: R,
                    disabled: !0,
                    sx: (f) => ({
                      ...(g.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: g.remainingQty,
                    onChange: R,
                    disabled: !0,
                    sx: (f) => ({
                      ...(g.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                })
              ]
            }),
            e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: g.vendorId,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: T.map((f) =>
                      e.jsx(
                        _,
                        { value: f.lookUpId, children: f.lookUpName },
                        f.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Assign Quantity',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'assignedQty',
                    value: g.assignedQty,
                    onChange: R,
                    disabled: !g.remainingQty,
                    error: !!X.assignedQty,
                    helperText: X.assignedQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Rate Per uom',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'rate',
                    value: g.rate,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Shrinkage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'shrinkage',
                    value: g.shrinkage,
                    onChange: R,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Wastage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'wastage',
                    value: g.wastage,
                    onChange: R,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Output Qty',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'outputQty',
                    value: g.outputQty,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Total Excl. Gst',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'totalExcGst',
                    value: g.totalExcGst,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'GST',
                    fullWidth: !0,
                    size: 'small',
                    name: 'gst',
                    value: g.gst,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Total Including Gst',
                    fullWidth: !0,
                    size: 'small',
                    name: 'TotalIncludingGst',
                    value: g.TotalIncludingGst,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'UnitRate Per PO.',
                    fullWidth: !0,
                    size: 'small',
                    name: 'unitRatePerPo',
                    value: g.unitRatePerPo,
                    onChange: R,
                    disabled: !g.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(ge, {
                    variant: 'contained',
                    size: 'small',
                    onClick: ee,
                    disabled: t === 3,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(r, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 12,
              children: e.jsx(ve, {
                variant: 'h4',
                gutterBottom: !0,
                children: 'View Vendor'
              })
            }),
            e.jsx(r, {
              sx: { marginTop: 2 },
              item: !0,
              xs: 12,
              children: e.jsx(qe, {
                iColumns: D,
                initialRows: s,
                disableDelete: t === 3,
                disableEdit: t === 3,
                setInitialData: L,
                deleteApi:
                  'http://100.42.177.77:81/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?dpIdDet=',
                deleteBy: 'dpIdDet',
                refetch: Z
              })
            })
          ]
        })
      ]
    });
  },
  po = ({
    initialFormData: n,
    setAdditionalProcessData: d,
    refetchDyeingPrintingData: v,
    handleClickOpen: j,
    showUpperDiv: h,
    productionStatus: t
  }) => {
    const b = ct(),
      { enqueueSnackbar: s } = ze(),
      [B, a] = o.useState({}),
      { user: L } = We(),
      [k, X] = o.useState([]),
      [m, y] = o.useState([]),
      g = k.reduce((P, N) => P + (N.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', g);
    const J = k.reduce((P, N) => P + (N.requiredPcs ?? 0), 0).toFixed(2);
    console.log('totalRepeats', J);
    const [i, V] = o.useState({
      embroideryIdDet: 0,
      embroideryId: n.embroideryId || 0,
      designId: n.designId || '',
      batchNo: n.batchNo || '',
      planningHeaderId: n.planningHeaderId || 0,
      componentId: n.componentId || '',
      componentName: n.componentName || '',
      fabricId: n.fabricId || '',
      fabricName: n.fabricName || '',
      vendorId: '',
      colorId: n.colorId || '',
      colourName: n.colourName || '',
      availableQty: n.availableQty || '',
      assignedQty: 0,
      remainingQty: (n.availableQty - g).toFixed(2) || 0,
      remainingRepeats: n.repeats - J || '',
      noOfHead: n.noOfHead || '',
      noOfHeadsName: n.noOfHeadsName || '',
      repeats: n.repeats || '',
      assignedRepeats: '',
      cuttingSize: n.cuttingSize || '',
      itemsPerRepeat: n.itemsPerRepeat || '',
      poPcs: n.poPcs || '',
      totalPcs: n.totalPcs || '',
      remainingPcs: (n.totalPcs - J).toFixed(2) || 0,
      requiredPcs: 0,
      totalAmount: 0,
      threadStiches: 0,
      threadRate: 0,
      threadAmount: 0,
      tillaStiches: 0,
      tilaRate: 0,
      tilaAmount: 0,
      sequence: 0,
      sequenceRate: 0,
      sequenceAmount: 0,
      isSolving: !1,
      solvingLayers: 0,
      solvingInMeters: 0,
      solvingRate: 0,
      solvingAmount: 0,
      additional: [],
      costPerComponent: 0,
      createdOn: new Date().toISOString(),
      createdBy: L.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: L.empId
    });
    o.useEffect(() => {
      V((P) => ({
        ...i,
        embroideryIdDet: m.embroideryIdDet || 0,
        embroideryId: m.embroideryId || 0,
        vendorId: (m == null ? void 0 : m.vendorId) || '',
        assignedQty: (m == null ? void 0 : m.assignedQty) || 0,
        requiredPcs: (m == null ? void 0 : m.requiredPcs) || 0,
        remainingQty:
          P.remainingQty + (m == null ? void 0 : m.assignedQty) || 0,
        remainingPcs:
          P.remainingPcs + (m == null ? void 0 : m.requiredPcs) || 0,
        totalAmount: (m == null ? void 0 : m.totalAmount) || 0,
        threadStiches: (m == null ? void 0 : m.threadStiches) || 0,
        threadRate: (m == null ? void 0 : m.threadRate) || 0,
        threadAmount: (m == null ? void 0 : m.threadAmount) || 0,
        tillaStiches: (m == null ? void 0 : m.tillaStiches) || 0,
        tilaRate: (m == null ? void 0 : m.tilaRate) || 0,
        tilaAmount: (m == null ? void 0 : m.tilaAmount) || 0,
        sequence: (m == null ? void 0 : m.sequence) || 0,
        sequenceRate: (m == null ? void 0 : m.sequenceRate) || 0,
        sequenceAmount: (m == null ? void 0 : m.sequenceAmount) || 0,
        isSolving: (m == null ? void 0 : m.isSolving) || !1,
        solvingLayers: (m == null ? void 0 : m.solvingLayers) || 0,
        solvingInMeters: (m == null ? void 0 : m.solvingInMeters) || 0,
        solvingRate: (m == null ? void 0 : m.solvingRate) || 0,
        solvingAmount: (m == null ? void 0 : m.solvingAmount) || 0,
        additional: (m == null ? void 0 : m.additional) || 0,
        costPerComponent: (m == null ? void 0 : m.costPerComponent) || 0,
        createdOn:
          (m == null ? void 0 : m.createdOn) || new Date().toISOString(),
        createdBy: (m == null ? void 0 : m.createdBy) || L.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: L.empId
      }));
    }, [m]);
    const Z = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
    function T(P, N, G) {
      return {
        fontWeight:
          N.indexOf(P) === -1
            ? G.typography.fontWeightRegular
            : G.typography.fontWeightMedium
      };
    }
    o.useEffect(() => {
      V({
        ...i,
        remainingQty: (n.availableQty - g).toFixed(2) || 0,
        remainingPcs: n.totalPcs - J || 0
      });
    }, [k]);
    const { data: W } = _e(),
      { data: R, refetch: ee } = Qa(i.embroideryId, { skip: !i.embroideryId }),
      [D, z] = o.useState([]);
    o.useEffect(() => {
      if (W) {
        const P = W.result[0];
        z(P.vendorList);
      }
    }, [W]),
      o.useEffect(() => {
        R && X(R.result.map((P, N) => ({ id: N + 1, ...P })));
      }, [R, ee]),
      console.log('initialRows', k);
    const f = (P) => {
        const { name: N, value: G } = P.target;
        V({ ...i, [N]: G });
      },
      E = (P) => {
        const { name: N, checked: G } = P.target;
        V((se) => ({ ...se, [N]: G }));
      };
    console.log('formData', i);
    const [re, ie] = o.useState(null),
      [S, ce] = o.useState(i);
    o.useEffect(() => {
      const P = setTimeout(() => {
        ce(i);
      }, 10);
      return () => {
        clearTimeout(P);
      };
    }, [i]);
    const ne = (P) => new Intl.NumberFormat('en-US').format(P);
    o.useEffect(() => {
      const P = () => {
          const Y = parseFloat(S.repeats) || 0,
            H = parseFloat(S.itemsPerRepeat) || 0;
          return (Y * H).toFixed(2);
        },
        N = () => {
          const Y = parseFloat(S.threadStiches) || 0,
            H = parseFloat(S.threadRate) || 0,
            Q = parseFloat(S.noOfHeadsName) || 0,
            me = parseFloat(S.repeats) || 0;
          return ((Y / 1e3) * (H * me * Q)).toFixed(2);
        },
        G = () => {
          const Y = parseFloat(S.tillaStiches) || 0,
            H = parseFloat(S.tilaRate) || 0,
            Q = parseFloat(S.noOfHeadsName) || 0,
            me = parseFloat(S.repeats) || 0;
          return ((Y / 1e3) * (H * me * Q)).toFixed(2);
        },
        se = () => {
          const Y = parseFloat(S.sequence) || 0,
            H = parseFloat(S.sequenceRate) || 0,
            Q = parseFloat(S.noOfHeadsName) || 0,
            me = parseFloat(S.repeats) || 0;
          return ((Y / 1e3) * (H * me * Q)).toFixed(2);
        },
        le = () => {
          const Y = parseFloat(S.repeats) || 0,
            H = parseFloat(S.noOfHeadsName) || 0,
            Q = parseFloat(S.solvingLayers) || 0;
          return (((Y * H * 13) / 39.37) * Q).toFixed(2);
        },
        be = () => {
          const Y = parseFloat(S.solvingInMeters) || 0,
            H = parseFloat(S.solvingRate) || 0;
          return (Y * H).toFixed(2);
        },
        te = () => {
          const Y = parseFloat(S.threadAmount) || 0,
            H = parseFloat(S.tilaAmount) || 0,
            Q = parseFloat(S.sequenceAmount) || 0,
            me = parseFloat(S.solvingAmount) || 0;
          return (Y + H + Q + me).toFixed(2);
        },
        U = () => {
          const Y = parseFloat(S.totalAmount) || 0,
            H = parseFloat(S.requiredPcs) || 0;
          return (Y / H).toFixed(2);
        };
      te(),
        U(),
        N(),
        V((Y) => ({
          ...Y,
          totalPcs: P(),
          threadAmount: N(),
          tilaAmount: G(),
          sequenceAmount: se(),
          solvingInMeters: le(),
          solvingAmount: be(),
          totalAmount: te(),
          costPerComponent: U()
        }));
    }, [
      S.threadAmount,
      S.totalAmount,
      S.sequenceAmount,
      S.solvingAmount,
      S.repeats,
      S.tilaAmount,
      S.itemsPerRepeat,
      S.threadRate,
      S.threadStiches,
      S.noOfHeadsName,
      S.tilaRate,
      S.tillaStiches,
      S.sequenceRate,
      S.sequence,
      S.solvingLayers,
      S.solvingInMeters,
      S.solvingRate,
      S.requiredPcs
    ]),
      o.useEffect(() => {
        if (re === 'assignedQty') {
          const P = () => {
            const N = parseFloat(S.assignedQty) || 0,
              G = parseFloat(S.availableQty) || 0,
              se = parseFloat(S.totalPcs) || 0;
            return Math.round(N * (se / G));
          };
          V((N) => ({ ...N, requiredPcs: P() }));
        } else if (re === 'requiredPcs') {
          const P = () => {
            const N = parseFloat(S.requiredPcs) || 0,
              G = parseFloat(S.availableQty) || 0,
              se = parseFloat(S.totalPcs) || 0;
            return ((N * G) / se).toFixed(2);
          };
          V((N) => ({ ...N, assignedQty: P() }));
        }
      }, [S.assignedQty, S.requiredPcs, re]);
    const pe = (P) => {
        const N = P.target.value,
          G = P.target.name;
        ie('assignedQty'),
          V((se) => ({ ...se, assignedQty: N })),
          V((se) => {
            const le = { ...se, [G]: N };
            if (G === 'assignedQty' || G === 'remainingQty') {
              const be = parseFloat(le.assignedQty),
                te = parseFloat(le.remainingQty);
              be > te
                ? a((U) => ({
                    ...U,
                    assignedQty:
                      'Assigned Quantity cannot be greater than Remaining Quantity'
                  }))
                : a((U) => ({ ...U, assignedQty: '' }));
            }
            return le;
          });
      },
      O = (P) => {
        const N = P.target.value,
          G = P.target.name;
        ie('requiredPcs'),
          V((se) => ({ ...se, requiredPcs: N })),
          V((se) => {
            const le = { ...se, [G]: N };
            if (G === 'requiredPcs' || G === 'remainingPcs') {
              const be = parseFloat(le.requiredPcs),
                te = parseFloat(le.remainingPcs);
              be > te
                ? (console.log(),
                  a((U) => ({
                    ...U,
                    requiredPcs:
                      'Required Pcs cannot be greater than Remaining Pcs'
                  })))
                : a((U) => ({ ...U, requiredPcs: '' }));
            }
            return le;
          });
      },
      M = async () => {
        if ((console.log(i), i.totalAmount == 0 || i.costPerComponent == 0)) {
          s(
            'Please Enter Thread, Tilla or Sequnce values , Total Amount cannot be zero',
            { variant: 'error', autoHideDuration: 5e3 }
          );
          return;
        }
        if (parseFloat(i.assignedQty) > parseFloat(i.remainingQty)) {
          s('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        if (parseFloat(i.requiredPcs) > parseFloat(i.remainingPcs)) {
          s('Required Pcs can not be greater then Remaining Pcs !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const P = await Ce.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroideryDetails',
            { ...i, additional: i.additional.join(', ') }
          );
          P.data.success
            ? s('Embroidery saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (s(`${P.data.message}!`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', P.data.message)),
            console.log('Save response:', P.data),
            V((N) => ({
              ...N,
              vendorId: '',
              embroideryIdDet: 0,
              totalPcs: 0,
              totalAmount: 0,
              threadStiches: 0,
              threadRate: 0,
              threadAmount: 0,
              tillaStiches: 0,
              tilaRate: 0,
              tilaAmount: 0,
              sequence: 0,
              sequenceRate: 0,
              sequenceAmount: 0,
              isSolving: !1,
              solvingLayers: 0,
              solvingInMeters: 0,
              solvingRate: 0,
              solvingAmount: 0,
              additional: [],
              requiredPcs: 0,
              assignedQty: 0,
              remainingQty: (n.availableQty - g).toFixed(2) || 0,
              remainingRepeats: n.repeats - J || '',
              costPerComponent: 0,
              createdOn: new Date().toISOString(),
              createdBy: L.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: L.empId
            })),
            ee(),
            v();
        } catch (P) {
          console.error('Error saving data:', P),
            s('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      F = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'vendorName', headerName: 'Vendor' },
        { field: 'assignedQty', headerName: 'Assigned Quantity' },
        { field: 'requiredPcs', headerName: 'Required Pcs' },
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
        { field: 'totalAmount', headerName: 'Total Amount' },
        { field: 'costPerComponent', headerName: 'Cost Per Component' }
      ];
    return e.jsxs(Re, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs('div', {
          hidden: !h,
          children: [
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: e.jsx(ve, {
                    variant: 'h4',
                    gutterBottom: !0,
                    children: 'Assign Vendor'
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: i.fabricName,
                      onChange: f,
                      size: 'small',
                      disabled: !0,
                      sx: (P) => ({
                        ...(i.fabricName !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      }),
                      InputLabelProps: { sx: { color: 'black' } }
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'Component',
                    name: 'componentName',
                    value: i.componentName,
                    onChange: f,
                    size: 'small',
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.componentName !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colourName',
                      value: i.colourName,
                      onChange: f,
                      size: 'small',
                      disabled: !0,
                      sx: (P) => ({
                        ...(i.colourName !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      }),
                      InputLabelProps: { sx: { color: 'black' } }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      label: 'PO Pcs',
                      name: 'poPcs',
                      value: i.poPcs,
                      onChange: f,
                      size: 'small',
                      disabled: !0,
                      sx: (P) => ({
                        ...(i.poPcs !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      }),
                      InputLabelProps: { sx: { color: 'black' } }
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'Heads',
                    size: 'small',
                    name: 'noOfHeadsName',
                    value: i.noOfHeadsName,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.noOfHeadsName !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'Cutting Size',
                    size: 'small',
                    name: 'cuttingSize',
                    value: i.cuttingSize,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.cuttingSize !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    label: 'Items Per Repeat',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: i.itemsPerRepeat,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.itemsPerRepeat !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Total Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: i.availableQty,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: i.remainingQty,
                    type: 'number',
                    error: !!B.remainingQty,
                    helperText: B.remainingQty,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.remainingQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Repeats',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: i.repeats,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.repeats !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Total Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'totalPcs',
                    value: i.totalPcs,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.totalPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Remaining Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingPcs',
                    value: i.remainingPcs,
                    onChange: f,
                    disabled: !0,
                    sx: (P) => ({
                      ...(i.remainingPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                })
              ]
            }),
            e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: i.vendorId,
                    onChange: f,
                    disabled: !i.remainingPcs && !i.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: D.map((P) =>
                      e.jsx(
                        _,
                        { value: P.lookUpId, children: P.lookUpName },
                        P.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(u, {
                    label: 'Assigned Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'assignedQty',
                    value: i.assignedQty,
                    onChange: pe,
                    error: !!B.assignedQty,
                    helperText: B.assignedQty,
                    disabled: !i.remainingPcs && !i.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(u, {
                    label: 'Required Pcs',
                    fullWidth: !0,
                    disabled: !i.remainingPcs && !i.remainingQty,
                    size: 'small',
                    type: 'number',
                    name: 'requiredPcs',
                    value: i.requiredPcs,
                    error: !!B.requiredPcs,
                    helperText: B.requiredPcs,
                    onChange: O,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(u, {
                    select: !0,
                    label: 'Additional',
                    value: i.additional,
                    name: 'additional',
                    size: 'small',
                    onChange: f,
                    fullWidth: !0,
                    disabled: !i.remainingPcs && !i.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    SelectProps: { multiple: !0 },
                    children: Z.map((P) =>
                      e.jsx(
                        _,
                        { value: P, style: T(P, i.additional, b), children: P },
                        P
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1,
                  children: e.jsx(Wt, {
                    control: e.jsx(_t, {
                      checked: i.isSolving,
                      onChange: E,
                      disabled: !i.remainingPcs && !i.remainingQty,
                      name: 'isSolving'
                    }),
                    label: 'isSolving'
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ve, {
                          variant: 'h5',
                          gutterBottom: !0,
                          children: 'Thread'
                        })
                      }),
                      ' ',
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadStiches',
                          value: i.threadStiches,
                          onChange: f,
                          required: !0,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'threadRate',
                          value: i.threadRate,
                          onChange: f,
                          required: !0,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadAmount',
                          value: i.threadAmount,
                          onChange: f,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      })
                    ]
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ve, {
                          variant: 'h5',
                          gutterBottom: !0,
                          children: 'Tilla'
                        })
                      }),
                      ' ',
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tillaStiches',
                          value: i.tillaStiches,
                          onChange: f,
                          required: !0,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Rate',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tilaRate',
                          value: i.tilaRate,
                          onChange: f,
                          required: !0,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(u, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          name: 'tilaAmount',
                          value: i.tilaAmount,
                          onChange: f,
                          disabled: !i.remainingPcs && !i.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      })
                    ]
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: [
                    e.jsxs(r, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      children: [
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 12,
                          children: e.jsx(ve, {
                            variant: 'h5',
                            gutterBottom: !0,
                            children: 'Sequence'
                          })
                        }),
                        ' ',
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(u, {
                            label: 'Sequence',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequence',
                            type: 'number',
                            value: i.sequence,
                            onChange: f,
                            disabled: !i.remainingPcs && !i.remainingQty,
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(u, {
                            label: 'Rate',
                            fullWidth: !0,
                            type: 'number',
                            size: 'small',
                            name: 'sequenceRate',
                            value: i.sequenceRate,
                            onChange: f,
                            required: !0,
                            disabled: !i.remainingPcs && !i.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(u, {
                            label: 'Amount',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequenceAmount',
                            value: i.sequenceAmount,
                            onChange: f,
                            disabled: !i.remainingPcs && !i.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                }),
                i.isSolving
                  ? e.jsx(r, {
                      item: !0,
                      xs: 12,
                      md: 6,
                      children: e.jsxs(r, {
                        container: !0,
                        spacing: 1,
                        width: 'Inherit',
                        children: [
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 12,
                            children: e.jsx(ve, {
                              variant: 'h5',
                              gutterBottom: !0,
                              children: 'Solving'
                            })
                          }),
                          ' ',
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(u, {
                              label: 'Layers',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingLayers',
                              value: i.solvingLayers,
                              onChange: f,
                              disabled: !i.remainingPcs && !i.remainingQty,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(u, {
                              label: 'Meters',
                              type: 'number',
                              fullWidth: !0,
                              size: 'small',
                              name: 'solvingInMeters',
                              value: i.solvingInMeters,
                              disabled: !i.remainingPcs && !i.remainingQty,
                              onChange: f,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(u, {
                              label: 'Rate',
                              fullWidth: !0,
                              type: 'number',
                              size: 'small',
                              name: 'solvingRate',
                              value: i.solvingRate,
                              onChange: f,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(u, {
                              label: 'Amount',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingAmount',
                              value: i.solvingAmount,
                              disabled: !i.remainingPcs && !i.remainingQty,
                              onChange: f,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          })
                        ]
                      })
                    })
                  : null,
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  sx: { mt: 4 },
                  children: e.jsx(u, {
                    label: 'Total Amount',
                    fullWidth: !0,
                    size: 'small',
                    disabled: !0,
                    name: 'totalAmount',
                    value: ne(i.totalAmount),
                    onChange: f,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  sx: { mt: 4 },
                  children: e.jsx(u, {
                    label: 'Cost Per Component',
                    fullWidth: !0,
                    size: 'small',
                    name: 'costPerComponent',
                    value: ne(i.costPerComponent),
                    onChange: f,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(ge, {
                    variant: 'contained',
                    size: 'small',
                    onClick: M,
                    disabled: t === 3,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx('div', {
          children: e.jsxs(r, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(r, {
                item: !0,
                xs: 12,
                md: 12,
                children: e.jsx(ve, {
                  variant: 'h4',
                  gutterBottom: !0,
                  children: 'View Vendor'
                })
              }),
              e.jsx(r, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: e.jsx(qe, {
                  iColumns: F,
                  initialRows: k,
                  disableDelete: t === 3,
                  disableEdit: t === 3,
                  setInitialData: y,
                  deleteApi:
                    'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryDetailsByDetId?embroideryDetId=',
                  deleteBy: 'embroideryIdDet',
                  refetch: ee
                })
              })
            ]
          })
        })
      ]
    });
  },
  mo = ({ initialValues: n }) => {
    ct();
    const { user: d } = We(),
      [v, j] = o.useState(!0),
      { enqueueSnackbar: h } = ze(),
      [t, b] = o.useState([]),
      [s, B] = o.useState(!1),
      [a, L] = o.useState({
        embroideryId: 0,
        designId: '',
        batchNo: '',
        planningHeaderId: '',
        componentId: '',
        fabricId: '',
        vendorId: '',
        poPcs: '',
        baseColorId: '',
        baseColorName: '',
        colorId: '',
        availableQty: '',
        noOfHead: '',
        repeats: '',
        cuttingSize: '',
        itemsPerRepeat: '',
        totalPcs: '',
        totalAmount: '',
        threadStiches: '',
        threadRate: '',
        threadAmount: '',
        tillaStiches: '',
        tilaRate: '',
        tilaAmount: '',
        sequence: '',
        sequenceRate: '',
        sequenceAmount: '',
        isSolving: !1,
        solvingLayers: 0,
        solvingInMeters: '',
        solvingRate: 0,
        solvingAmount: '',
        threadAdditional: [],
        createdBy: d.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    o.useEffect(() => {
      L({
        ...a,
        embroideryId: (t == null ? void 0 : t.embroideryId) || 0,
        componentId: (t == null ? void 0 : t.componentId) || '',
        fabricId: (t == null ? void 0 : t.fabricId) || '',
        vendorId: (t == null ? void 0 : t.vendorId) || '',
        poPcs: (t == null ? void 0 : t.poPcs) || '',
        colorId: (t == null ? void 0 : t.colorId) || '',
        availableQty: (t == null ? void 0 : t.availableQty) || '',
        noOfHead: (t == null ? void 0 : t.noOfHead) || '',
        repeats: (t == null ? void 0 : t.repeats) || '',
        cuttingSize: (t == null ? void 0 : t.cuttingSize) || '',
        itemsPerRepeat: (t == null ? void 0 : t.itemsPerRepeat) || '',
        totalPcs: (t == null ? void 0 : t.totalPcs) || '',
        totalAmount: (t == null ? void 0 : t.totalAmount) || '',
        threadStiches: (t == null ? void 0 : t.threadStiches) || '',
        threadRate: (t == null ? void 0 : t.threadRate) || '',
        threadAmount: (t == null ? void 0 : t.threadAmount) || '',
        tillaStiches: (t == null ? void 0 : t.tillaStiches) || '',
        tilaRate: (t == null ? void 0 : t.tilaRate) || '',
        tilaAmount: (t == null ? void 0 : t.tilaAmount) || '',
        sequence: (t == null ? void 0 : t.sequence) || '',
        sequenceRate: (t == null ? void 0 : t.sequenceRate) || '',
        sequenceAmount: (t == null ? void 0 : t.sequenceAmount) || '',
        isSolving: (t == null ? void 0 : t.isSolving) || !1,
        solvingLayers: (t == null ? void 0 : t.solvingLayers) || 0,
        solvingInMeters: (t == null ? void 0 : t.solvingInMeters) || '',
        solvingRate: (t == null ? void 0 : t.solvingRate) || 0,
        solvingAmount: (t == null ? void 0 : t.solvingAmount) || '',
        threadAdditional: (t == null ? void 0 : t.threadAdditional) || [],
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [t]);
    const { data: k } = $e(),
      [X, m] = o.useState('');
    o.useEffect(() => {
      m(n.collectionId);
    }, []);
    const { data: y } = _e(),
      { data: g, refetch: J } = Xe(X, { skip: !X }),
      { data: i, refetch: V } = ot(a.designId, { skip: !a.designId }),
      { data: Z, refetch: T } = ut(
        { batchNo: a.planningHeaderId, componentId: a.componentId },
        { skip: !a.planningHeaderId || !a.componentId }
      ),
      { data: W } = pt(
        {
          batchNo: a.planningHeaderId,
          componentId: a.componentId,
          fabricId: a.fabricId
        },
        { skip: !a.planningHeaderId || !a.componentId || !a.fabricId }
      ),
      { data: R, refetch: ee } = Wa(a.planningHeaderId, {
        skip: !a.planningHeaderId
      }),
      { data: D } = mt(a.planningHeaderId, { skip: !a.planningHeaderId });
    console.log('formData.planningHeaderId', a.planningHeaderId),
      console.log('collectionData', k);
    const [z, f] = o.useState(!1),
      [E, re] = o.useState([]),
      [ie, S] = o.useState([]),
      [ce, ne] = o.useState([]),
      [pe, O] = o.useState([]),
      [M, F] = o.useState([]),
      [ae, P] = o.useState([]),
      [N, G] = o.useState([]),
      [se, le] = o.useState([]);
    console.log('batchList', ie),
      console.log('formData', a),
      o.useEffect(() => {
        g && re(g.result);
      }, [g]),
      o.useEffect(() => {
        i && S(i.result);
      }, [i]),
      o.useEffect(() => {
        Z && (T(), ne(Z.result));
      }, [Z, T]),
      o.useEffect(() => {
        W && P(Z.result);
      }, [W]),
      o.useEffect(() => {
        D && le(D.result);
      }, [D]),
      o.useEffect(() => {
        R && (j(!1), G(R.result.map((I, $) => ({ id: $ + 1, ...I }))));
      }, [R, ee]),
      console.log('embroideryList', R),
      console.log('initialRows', N),
      o.useEffect(() => {
        if (y) {
          const I = y.result[0];
          O(I.vendorList), F(I.noOfHeadsList);
        }
      }, [y]);
    const be = (k == null ? void 0 : k.result) || [];
    o.useEffect(() => {
      const I = () => {
        const de = parseFloat(a.repeats) || 0,
          Le = parseFloat(a.itemsPerRepeat) || 0;
        return (de * Le).toFixed(2);
      };
      L((de) => ({ ...de, totalPcs: I() }));
      const $ = () => {
        const de = parseFloat(a.threadStiches) || 0,
          Le = parseFloat(a.threadRate) || 0,
          Ue = parseFloat(a.noOfHead) || 0,
          Ee = parseFloat(a.repeats) || 0;
        return ((de / 1e3) * (Le * Ee * Ue)).toFixed(2);
      };
      L((de) => ({ ...de, threadAmount: $() }));
      const Ie = () => {
        const de = parseFloat(a.tillaStiches) || 0,
          Le = parseFloat(a.tilaRate) || 0,
          Ue = parseFloat(a.noOfHead) || 0,
          Ee = parseFloat(a.repeats) || 0;
        return ((de / 1e3) * (Le * Ee * Ue)).toFixed(2);
      };
      L((de) => ({ ...de, tilaAmount: Ie() }));
      const oe = () => {
        const de = parseFloat(a.sequence) || 0,
          Le = parseFloat(a.sequenceRate) || 0,
          Ue = parseFloat(a.noOfHead) || 0,
          Ee = parseFloat(a.repeats) || 0;
        return ((de / 1e3) * (Le * Ee * Ue)).toFixed(2);
      };
      L((de) => ({ ...de, sequenceAmount: oe() }));
      const xe = () => {
        const de = parseFloat(a.repeats) || 0,
          Le = parseFloat(a.noOfHead) || 0,
          Ue = parseFloat(a.solvingLayers) || 0;
        return (((de * Le * 13) / 39.37) * Ue).toFixed(2);
      };
      L((de) => ({ ...de, solvingInMeters: xe() }));
      const Fe = () => {
        const de = parseFloat(a.solvingInMeters) || 0,
          Le = parseFloat(a.solvingRate) || 0;
        return parseFloat(a.solvingLayers), (de * Le).toFixed(2);
      };
      L((de) => ({ ...de, solvingAmount: Fe() }));
      const Ta = () => {
        const de = parseFloat(a.threadAmount) || 0,
          Le = parseFloat(a.tilaAmount) || 0,
          Ue = parseFloat(a.sequenceAmount) || 0,
          Ee = parseFloat(a.solvingAmount) || 0;
        return (de + Le + Ue + Ee).toFixed(2);
      };
      L((de) => ({ ...de, totalAmount: Ta() || 0 }));
    }, [
      a.threadAmount,
      a.totalAmount,
      a.sequenceAmount,
      a.solvingAmount,
      a.repeats,
      a.tilaAmount,
      a.itemsPerRepeat,
      a.threadRate,
      a.threadStiches,
      a.noOfHead,
      a.tilaRate,
      a.tillaStiches,
      a.sequenceRate,
      a.sequence,
      a.solvingLayers,
      a.solvingInMeters,
      a.solvingRate
    ]),
      o.useEffect(() => {
        a.productionStatus === 3 &&
          h('Production Staus is completed. Select other Collection!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
      }, [a.productionStatus]);
    const te = (I) => {
        const { name: $, value: Ie } = I.target;
        if ($ === 'collectionId') {
          const oe = be.find((xe) => xe.collectionId === parseInt(Ie));
          m(Ie),
            B(!0),
            G([]),
            j(!0),
            L({
              ...a,
              collectionId: Ie,
              designId: '',
              batchNo: '',
              planningHeaderId: '',
              componentId: '',
              fabricId: '',
              vendorId: '',
              poPcs: '',
              baseColorId: '',
              baseColorName: '',
              colorId: '',
              availableQty: '',
              noOfHead: '',
              repeats: '',
              cuttingSize: '',
              itemsPerRepeat: '',
              totalPcs: '',
              totalAmount: '',
              threadStiches: '',
              productionStatus: oe ? oe.productionStatus : '',
              threadRate: '',
              threadAmount: '',
              tillaStiches: '',
              tilaRate: '',
              tilaAmount: '',
              sequence: '',
              sequenceRate: '',
              sequenceAmount: '',
              isSolving: !1,
              solvingLayers: 0,
              solvingInMeters: '',
              solvingRate: 0,
              solvingAmount: '',
              threadAdditional: []
            });
        } else if ($ === 'designId') {
          const oe = E.find((xe) => xe.designId === parseInt(Ie));
          G([]),
            j(!0),
            L({
              ...a,
              designId: Ie,
              baseColorId: oe ? oe.colorId : '',
              baseColorName: oe ? oe.colorName : '',
              batchNo: '',
              planningHeaderId: '',
              componentId: '',
              fabricId: '',
              vendorId: '',
              poPcs: '',
              colorId: '',
              availableQty: '',
              noOfHead: '',
              repeats: '',
              cuttingSize: '',
              itemsPerRepeat: '',
              totalPcs: '',
              totalAmount: '',
              threadStiches: '',
              threadRate: '',
              threadAmount: '',
              tillaStiches: '',
              tilaRate: '',
              tilaAmount: '',
              sequence: '',
              sequenceRate: '',
              sequenceAmount: '',
              isSolving: !1,
              solvingLayers: 0,
              solvingInMeters: '',
              solvingRate: 0,
              solvingAmount: '',
              threadAdditional: []
            });
        } else if ($ === 'colorId') {
          const oe = ae.find((xe) => xe.colorId === Ie);
          L({
            ...a,
            colorId: Ie,
            availableQty: oe ? oe.total : '',
            cuttingSize: oe ? oe.cuttingSize : '',
            repeats: oe ? oe.repeats : '',
            noOfHead: oe ? oe.noOfHeads : ''
          });
        } else if ($ === 'batchNo') {
          const oe = ie.find((xe) => xe.batchNo === Ie);
          L({
            ...a,
            batchNo: Ie,
            planningHeaderId: oe ? oe.planningHeaderId : '',
            poPcs: oe ? oe.poPcs : '',
            componentId: '',
            fabricId: '',
            vendorId: '',
            colorId: '',
            availableQty: '',
            noOfHead: '',
            repeats: '',
            cuttingSize: '',
            itemsPerRepeat: '',
            totalPcs: '',
            totalAmount: '',
            threadStiches: '',
            threadRate: '',
            threadAmount: '',
            tillaStiches: '',
            tilaRate: '',
            tilaAmount: '',
            sequence: '',
            sequenceRate: '',
            sequenceAmount: '',
            isSolving: !1,
            solvingLayers: 0,
            solvingInMeters: '',
            solvingRate: 0,
            solvingAmount: '',
            threadAdditional: []
          }),
            f(!0),
            B(!1);
        } else L({ ...a, [$]: Ie }), Y((oe) => ({ ...oe, [$]: '' }));
      },
      [U, Y] = o.useState({}),
      H = async () => {
        try {
          const I = await Ce.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroidery',
            { ...a, threadAdditional: a.threadAdditional.join(', ') }
          );
          console.log('Save response:', I.data),
            I.data.success
              ? h('Embroidery saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (h(`${I.data.message}!`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', I.data.message)),
            L(($) => ({
              embroideryId: 0,
              designId: $.designId,
              batchNo: $.batchNo,
              planningHeaderId: $.planningHeaderId,
              componentId: '',
              fabricId: '',
              vendorId: '',
              poPcs: $.poPcs,
              baseColorId: $.baseColorId,
              baseColorName: $.baseColorName,
              colorId: '',
              availableQty: '',
              noOfHead: '',
              repeats: '',
              cuttingSize: '',
              itemsPerRepeat: '',
              totalPcs: '',
              totalAmount: '',
              threadStiches: '',
              threadRate: '',
              threadAmount: '',
              tillaStiches: '',
              tilaRate: '',
              tilaAmount: '',
              sequence: '',
              sequenceRate: '',
              sequenceAmount: '',
              isSolving: !1,
              solvingLayers: 0,
              solvingInMeters: '',
              solvingRate: 0,
              solvingAmount: '',
              threadAdditional: [],
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId
            })),
            ee();
        } catch (I) {
          console.error('Error saving data:', I),
            h('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('initialRows', N);
    const [Q, me] = o.useState({}),
      [Se, Pe] = o.useState(!1),
      ke = (I) => {
        me(I), Pe(!0);
      },
      [Oe, je] = o.useState(!0),
      Ae = (I) => {
        me(I), Pe(!0), je(!1);
      },
      Ne = () => {
        je(!0), Pe(!1), me({}), refetchDyeingPrintingData();
      };
    console.log('show div', Oe);
    const [we, C] = o.useState(0),
      [K, fe] = o.useState(0),
      [p, c] = o.useState(0),
      [A, l] = o.useState(0);
    o.useEffect(() => {
      const I = N.reduce((xe, Fe) => xe + (Fe.availableQty ?? 0), 0).toFixed(2),
        $ = N.reduce((xe, Fe) => xe + (Fe.assignedQty ?? 0), 0).toFixed(2),
        Ie = N.reduce((xe, Fe) => xe + (Fe.totalPcs ?? 0), 0).toFixed(2),
        oe = N.reduce((xe, Fe) => xe + (Fe.requiredPcs ?? 0), 0).toFixed(2);
      C(parseFloat(I).toLocaleString()),
        fe(parseFloat($).toLocaleString()),
        c(parseFloat(Ie).toLocaleString()),
        l(parseFloat(oe).toLocaleString());
    }, [N]);
    const x = [
        ...N,
        {
          id: 'TOTAL_SUMMARY',
          availableQty: we,
          assignedQty: K,
          totalPcs: p,
          requiredPcs: A
        }
      ],
      q = { sortable: !1, pinnable: !1, hideable: !1 },
      w = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...q,
          colSpan: (I, $) => ($.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : I.value
        },
        {
          field: 'designNo',
          headerName: 'Design',
          ...q,
          colSpan: (I, $) => ($.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : I.value
        },
        { field: 'batchNo', headerName: 'Batch No.' },
        {
          field: 'componentName',
          headerName: 'Component ',
          renderCell: (I) =>
            e.jsx(Ve, {
              label: I.value,
              sx: { backgroundColor: 'primary.dark', color: 'white' },
              color: void 0
            })
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
          ...q,
          valueGetter: (I) => I.toLocaleString(),
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: I.value
                })
              : I.value
        },
        {
          field: 'assignedQty',
          headerName: 'Assigned Qty',
          ...q,
          valueGetter: (I) => I,
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: I.value
                })
              : I.value
        },
        {
          field: 'totalPcs',
          headerName: 'Total Pcs',
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: I.value
                })
              : I.value
        },
        {
          field: 'requiredPcs',
          headerName: 'Assigned Pcs',
          colSpan: (I, $) => ($.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (I) =>
            I.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: I.value
                })
              : I.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (I) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(bt, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Qe, {
                    color: 'primary',
                    onClick: () => ke(I.row),
                    children: e.jsx(It, {})
                  }),
                  e.jsx(Qe, {
                    color: 'primary',
                    onClick: () => Ae(I.row),
                    children: e.jsx(Ye, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(rt, { src: co, sx: { background: 'transparent' } }),
              title: 'Embroidery  ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                ' ',
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: X,
                      onChange: te,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: be.map((I) =>
                        e.jsx(
                          _,
                          { value: I.collectionId, children: I.collectionName },
                          I.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: a.designId,
                    onChange: te,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((I) =>
                      e.jsx(
                        _,
                        { value: I.designId, children: I.designNo },
                        I.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: a.batchNo,
                      onChange: te,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: ie.map((I) =>
                        e.jsx(
                          _,
                          { value: I.batchNo, children: I.batchNo },
                          I.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: a.baseColorName,
                    onChange: te,
                    disabled: !0,
                    sx: (I) => ({
                      ...(a.repeatsInMtr !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(he, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: a.componentId,
                      onChange: te,
                      size: 'small',
                      required: !0,
                      error: !!U.componentId,
                      helperText: U.componentId,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: se.map((I) =>
                        e.jsx(
                          _,
                          { value: I.componentId, children: I.componentName },
                          I.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: a.fabricId,
                    onChange: te,
                    required: !0,
                    error: !!U.fabricId,
                    helperText: U.fabricId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ce.map((I) =>
                      e.jsx(
                        _,
                        { value: I.fabricId, children: I.fabric },
                        I.fabricId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: a.colorId,
                    onChange: te,
                    required: !0,
                    error: !!U.colorId,
                    helperText: U.colorId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ae.map((I) =>
                      e.jsx(
                        _,
                        { value: I.colorId, children: I.color },
                        I.colorId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: a.poPcs,
                    onChange: te,
                    disabled: !0,
                    sx: (I) => ({
                      ...(a.poPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Available Quantity',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    type: 'number',
                    value: a.availableQty,
                    onChange: te,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(a.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Repeats',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: a.repeats,
                    onChange: te,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(a.repeats !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Heads',
                    defaultValue: '',
                    size: 'small',
                    name: 'noOfHead',
                    value: a.noOfHead,
                    onChange: te,
                    required: !0,
                    error: !!U.noOfHead,
                    helperText: U.noOfHead,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(a.noOfHead !== '' && {
                        '.css-9ngl8c-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    children: M.map((I) =>
                      e.jsx(
                        _,
                        { value: I.lookUpId, children: I.lookUpName },
                        I.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Cutting Size',
                    fullWidth: !0,
                    size: 'small',
                    name: 'cuttingSize',
                    type: 'number',
                    value: a.cuttingSize,
                    onChange: te,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(a.cuttingSize !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Items Per Repeat',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: a.itemsPerRepeat,
                    onChange: te,
                    required: !0,
                    error: !!U.itemsPerRepeat,
                    helperText: U.itemsPerRepeat,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(a.itemsPerRepeat !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Total Pcs.',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'totalPcs',
                    value: a.totalPcs,
                    onChange: te
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4.5,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(ge, {
                    variant: 'contained',
                    size: 'small',
                    disabled: a.productionStatus === 3,
                    onClick: H,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(he, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          })
        }),
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(he, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ye, {}),
              title: 'View Embroidery ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(r, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  ' ',
                  e.jsx(qe, {
                    iColumns: w,
                    initialRows: x,
                    disableDelete: a.productionStatus === 3,
                    disableEdit: a.productionStatus === 3,
                    setInitialData: b,
                    deleteApi:
                      'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryById?embroideryId=',
                    deleteBy: 'embroideryId',
                    refetch: ee,
                    setAccordionExpanded: f,
                    fileName: 'Embroidery List',
                    isLoading: v
                  }),
                  e.jsxs(nt, {
                    open: Se,
                    onClose: Ne,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ht, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px'
                        },
                        children: [
                          e.jsx(ve, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: ' Embroidery > Assign Vendors '
                          }),
                          e.jsx(Qe, {
                            onClick: Ne,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ft, {})
                          })
                        ]
                      }),
                      e.jsxs(st, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(po, {
                            initialFormData: Q,
                            productionStatus: a.productionStatus,
                            setInitialFormData: me,
                            refetchDyeingPrintingData: ee,
                            handleClickOpen: ke,
                            showUpperDiv: Oe
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  },
  ho = mo,
  go = ({ setInitialValues: n, initialValues: d }) => {
    const { user: v } = We();
    console.log('user', v);
    const [j, h] = o.useState(!0),
      [t, b] = o.useState([]),
      [s, B] = o.useState([]),
      [a, L] = o.useState({
        processType: 'MultiHead',
        planningId: 0,
        collectionId: '',
        baseColorId: '',
        baseColorName: '',
        noOfDesigns: '',
        noOfColors: '',
        planningHeaderId: '',
        designId: '',
        batchNo: '',
        componentId: '',
        cuttingSize: '',
        colorId: '',
        fabricId: '',
        noOfHeads: 0,
        operatingMachineId: 0,
        planningProcessTypeName: '',
        repeats: 0,
        repeatSize: 0,
        uomId: '',
        totalFabric: '',
        shrinkage: '',
        wastage: '',
        poPcs: '',
        planningProcessTypeId: '',
        total: '',
        appId: 1,
        createdOn: new Date().toISOString(),
        createdBy: v.empId,
        lastUpdatedBy: v.empId,
        lastUpdatedOn: new Date().toISOString(),
        isSchiffili: !1,
        repeatsInMtr: ''
      });
    console.log('formData', a),
      console.log('initialData', t),
      o.useEffect(() => {
        L({
          ...a,
          processType: (t == null ? void 0 : t.processType) || 'MultiHead',
          planningId: (t == null ? void 0 : t.planningId) || 0,
          baseColorId: (t == null ? void 0 : t.baseColorId) || '',
          componentId: (t == null ? void 0 : t.componentId) || '',
          cuttingSize: (t == null ? void 0 : t.cuttingSize) || '',
          colorId: (t == null ? void 0 : t.colorId) || '',
          fabricId: (t == null ? void 0 : t.fabricId) || '',
          planningProcessTypeId:
            (t == null ? void 0 : t.planningProcessTypeId) || '',
          planningProcessTypeName:
            (t == null ? void 0 : t.planningProcessTypeName) || '',
          noOfHeads: (t == null ? void 0 : t.noOfHeads) || 0,
          operatingMachineId: (t == null ? void 0 : t.operatingMachineId) || 0,
          repeats: (t == null ? void 0 : t.repeats) || 0,
          repeatSize: (t == null ? void 0 : t.repeatSize) || 0,
          uomId: (t == null ? void 0 : t.uomId) || '',
          totalFabric: (t == null ? void 0 : t.totalFabric) || '',
          shrinkage: (t == null ? void 0 : t.shrinkage) || '',
          wastage: (t == null ? void 0 : t.wastage) || '',
          total: (t == null ? void 0 : t.total) || '',
          appId: 1,
          createdOn:
            (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
          createdBy: (t == null ? void 0 : t.createdBy) || v.empId,
          lastUpdatedBy: v.empId,
          lastUpdatedOn: new Date().toISOString(),
          repeatsInMtr: (t == null ? void 0 : t.repeatsInMtr) || ''
        });
      }, [t]);
    const { data: k } = $e(),
      [X, m] = o.useState(''),
      { data: y, refetch: g } = Xe(X, { skip: !X }),
      { data: J, refetch: i } = _a(a.planningHeaderId, {
        skip: !a.planningHeaderId
      }),
      { data: V } = _e(),
      [Z, T] = o.useState([]),
      { enqueueSnackbar: W } = ze();
    console.log('lookupData', V);
    const [R, ee] = o.useState([]);
    o.useEffect(() => {
      k && ee(k.result);
    }, [k]),
      o.useEffect(() => {
        y && (T(y.result), g());
      }, [y]),
      o.useEffect(() => {
        J && (h(!1), B(J.result.map((l, x) => ({ id: x + 1, ...l }))));
      }, [J, i]),
      console.log('designList', Z),
      console.log('collectionData', k);
    const [D, z] = o.useState(!1),
      [f, E] = o.useState([]),
      [re, ie] = o.useState([]),
      [S, ce] = o.useState([]),
      [ne, pe] = o.useState([]),
      [O, M] = o.useState([]),
      [F, ae] = o.useState([]),
      [P, N] = o.useState([]),
      [G, se] = o.useState([]);
    console.log('components:', S),
      console.log('Fabrications:', ne),
      console.log('colors:', O),
      console.log('uoms:', F),
      console.log('heads:', P),
      console.log('lookupData', V),
      o.useEffect(() => {
        if (V) {
          const l = V.result[0];
          ce(l.componentList),
            M(l.colorList),
            pe(l.fabricList),
            N(l.noOfHeadsList),
            ae(l.uomList),
            E(l.planningTypeProcessList),
            ie(l.operatingMachineList);
        }
      }, [V]),
      o.useEffect(() => {
        const l = async (x) => {
          try {
            const q = await Ce.get(
              `http://100.42.177.77:81/api/PrePlanning/GetPrePlanningHeaderByDesignId?designId=${x}`
            );
            console.log(q.data), se(q.data.result);
          } catch (q) {
            console.error('Error fetching pre-planning lookup data:', q);
          }
        };
        a.designId && l(a.designId);
      }, [a.designId, a.planningHeaderId]);
    const le =
      a.planningProcessTypeId === 212 || a.planningProcessTypeId === 1219;
    console.log('initialValues', d),
      console.log('selectedCollectionId', X),
      o.useEffect(() => {
        m((d == null ? void 0 : d.collectionId) || ''),
          L({
            ...a,
            designId: (d == null ? void 0 : d.designId) || '',
            planningHeaderId: (d == null ? void 0 : d.planningHeaderId) || '',
            batchNo: (d == null ? void 0 : d.batchNo) || ''
          });
      }, [d]),
      o.useEffect(() => {
        const l = () => {
            const $ = parseFloat(a.poPcs) || 0,
              Ie = parseFloat(a.cuttingSize) || 0,
              oe = ($ * Ie).toFixed(2);
            return parseFloat(oe).toLocaleString();
          },
          x = () => {
            const $ = parseFloat(a.repeats) || 0,
              Ie = parseFloat(a.repeatSize) || 0,
              oe = ($ * Ie).toFixed(2);
            return parseFloat(oe).toLocaleString();
          },
          q = ($) => {
            const Ie = $ || 0,
              oe = parseFloat(a.shrinkage) || 0,
              xe = parseFloat(a.wastage) || 0,
              Fe = ((Ie * (100 + (oe + xe))) / 100).toFixed(2);
            return parseFloat(Fe).toLocaleString();
          },
          w = () => (0.9144 * (parseFloat(a.repeatSize) || 0)).toFixed(2),
          ue = () => {
            const $ = parseFloat(a.repeats) || 0;
            return ((parseFloat(a.repeatsInMtr) || 0) * $).toFixed(2);
          };
        let I = 0;
        le
          ? (I = parseFloat(l().replace(/,/g, '')) || 0)
          : (I = parseFloat(x().replace(/,/g, '')) || 0),
          L(($) => ({
            ...$,
            totalFabric: I.toLocaleString(),
            total: q(I),
            repeatsInMtr: w()
          })),
          !le && a.isSchiffili && L(($) => ({ ...$, totalFabric: ue() }));
      }, [
        a.poPcs,
        a.cuttingSize,
        a.repeats,
        a.repeatSize,
        a.totalFabric,
        a.shrinkage,
        a.wastage,
        a.repeatsInMtr,
        a.isSchiffili,
        le
      ]);
    const [be, te] = o.useState(!1);
    o.useState(!1),
      o.useEffect(() => {
        a.productionStatus === 3 &&
          W('Production Staus is completed. Select other Collection!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
      }, [a.productionStatus]);
    const U = (l) => {
        const { name: x, value: q } = l.target;
        if (x === 'collectionId') {
          const w = R.find((ue) => ue.collectionId === parseInt(q));
          z(!0),
            B([]),
            h(!0),
            m(q),
            L({
              ...a,
              processType: 'MultiHead',
              componentId: '',
              cuttingSize: '',
              colorId: '',
              fabricId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: 0,
              repeatSize: 0,
              uomId: '',
              totalFabric: '',
              shrinkage: '',
              wastage: '',
              total: '',
              collectionId: q,
              noOfDesigns: w ? w.noOfDesigns : '',
              productionStatus: w ? w.productionStatus : '',
              noOfColors: w ? w.noOfColors : ''
            });
        } else if (x === 'designId') {
          const w = Z.find((ue) => ue.designId === parseInt(q));
          B([]),
            h(!0),
            L({
              ...a,
              processType: 'MultiHead',
              componentId: '',
              cuttingSize: '',
              colorId: '',
              fabricId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: 0,
              repeatSize: 0,
              uomId: '',
              totalFabric: '',
              shrinkage: '',
              wastage: '',
              total: '',
              designId: q,
              baseColorId: w ? w.colorId : '',
              baseColorName: w ? w.colorName : ''
            });
        } else if (x === 'batchNo') {
          const w = G.find((ue) => ue.batchNo === q);
          L({
            ...a,
            componentId: '',
            processType: 'MultiHead',
            poPcs: w ? w.poPcs : '',
            cuttingSize: '',
            colorId: '',
            fabricId: '',
            noOfHeads: 0,
            operatingMachineId: 0,
            repeats: 0,
            repeatSize: 0,
            uomId: '',
            totalFabric: '',
            shrinkage: '',
            wastage: '',
            total: '',
            batchNo: q,
            planningHeaderId: w ? w.planningHeaderId : ''
          }),
            te(!0),
            z(!1);
        } else if (x === 'planningProcessTypeId') {
          const w = f.find((ue) => ue.lookUpId === q);
          console.log('selectedProcess', w),
            L({
              ...a,
              planningProcessTypeId: q,
              planningProcessTypeName: w ? w.lookUpName : '',
              noOfHeads: 0,
              operatingMachineId: 0
            }),
            te(!0),
            z(!1);
        } else L({ ...a, [x]: q });
      },
      [Y, H] = o.useState({}),
      [Q, me] = o.useState(!1),
      Se = () => {
        me(!Q);
      },
      Pe = async () => {
        const l = ke();
        if (Object.keys(l).length > 0) {
          H(l);
          return;
        }
        try {
          const x = {
              ...a,
              totalFabric: parseFloat(a.totalFabric.replace(/,/g, '')),
              total: parseFloat(a.total.replace(/,/g, ''))
            },
            q = await Ce.post(
              'http://100.42.177.77:81/api/PrePlanning/SavePrePlanning',
              x
            );
          console.log('Data saved successfully:', q.data),
            console.log('Save response:', q.data),
            q.data.success
              ? q.data.success &&
                W('PrePlanning saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (W(`${q.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', q.data.message)),
            L((w) => ({
              processType: 'MultiHead',
              planningId: 0,
              collectionId: w.collectionId,
              designId: w.designId,
              batchNo: w.batchNo,
              planningHeaderId: w.planningHeaderId,
              baseColorId: w.baseColorId,
              baseColorName: w.baseColorName,
              noOfDesigns: w.noOfDesigns,
              noOfColors: w.noOfColors,
              poPcs: w.poPcs,
              fabricId: w.fabricId,
              shrinkage: w.shrinkage,
              wastage: w.wastage,
              componentId: '',
              cuttingSize: '',
              colorId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: 0,
              repeatSize: 0,
              uomId: '',
              totalFabric: '',
              total: '',
              appId: 1,
              createdOn: new Date().toISOString(),
              createdBy: v.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: v.empId,
              isSchiffili: !1,
              repeatsInMtr: ''
            })),
            i();
        } catch (x) {
          console.error('Error saving data:', x),
            W('Pre Planning not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      ke = () => {
        const l = {};
        return (
          a.componentId || (l.componentId = 'componentId is required'),
          a.colorId || (l.colorId = 'colorId is required'),
          a.fabricId || (l.fabricId = 'fabricId is required'),
          a.cuttingSize || (l.cuttingSize = 'cuttingSize is required'),
          a.uomId || (l.uomId = 'uomId is required'),
          a.shrinkage || (l.shrinkage = 'shrinkage is required'),
          a.wastage || (l.wastage = 'wastage is required'),
          l
        );
      };
    console.log('initialRows', s);
    const Oe = s.reduce((l, x) => l + (x.totalFabric ?? 0), 0).toFixed(2),
      je = parseFloat(Oe).toLocaleString();
    console.log('localizedTotalFabric', je);
    const Ae = s.reduce((l, x) => l + (x.total ?? 0), 0).toFixed(2),
      Ne = parseFloat(Ae).toLocaleString(),
      we = [
        ...s,
        {
          id: 'TOTAL_SUMMARY',
          label: 'Total Fabric',
          totalFabric: je,
          total: Ne
        }
      ],
      C = { sortable: !1, pinnable: !1, hideable: !1 };
    console.log('rows', we);
    const K = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...C,
          colSpan: (l, x) => {
            if (x.id === 'TOTAL_SUMMARY') return 10;
          },
          valueGetter: (l, x) => (x.id === 'TOTAL_SUMMARY' ? x.label : l),
          renderCell: (l) =>
            e.jsx('div', {
              style: {
                color: l.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: l.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: l.value
            })
        },
        { field: 'componentName', headerName: 'Component', ...C },
        {
          field: 'planningProcessTypeName',
          headerName: 'Process Type',
          ...C,
          renderCell: (l) =>
            e.jsx(ro, { label: l.value, status: 'primaryDark' })
        },
        { field: 'color', headerName: 'Color', ...C },
        { field: 'cuttingSize', headerName: 'Cutting Size', ...C },
        { field: 'fabric', headerName: 'Fabrication', ...C },
        { field: 'noOfHeadName', headerName: 'No. Of Heads', ...C },
        {
          field: 'operatingMachineName',
          headerName: 'Operating Machine',
          ...C
        },
        {
          field: 'repeats',
          headerName: 'Repeats',
          valueGetter: (l) => l.toLocaleString(),
          ...C
        },
        {
          field: 'repeatSize',
          headerName: 'Repeat Size',
          valueGetter: (l) => l.toLocaleString(),
          ...C
        },
        {
          field: 'totalFabric',
          headerName: 'Total Fabric',
          valueGetter: (l) => l.toLocaleString(),
          renderCell: (l) =>
            e.jsx('div', {
              style: {
                color: l.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : void 0,
                fontWeight: l.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: l.value
            }),
          ...C
        },
        {
          field: 'uom',
          headerName: 'UOM',
          colSpan: (l, x) => (x.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          valueGetter: (l, x) =>
            x.id === 'TOTAL_SUMMARY' ? 'OverAll Total' : l,
          renderCell: (l) =>
            e.jsx('div', {
              style: {
                color: l.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: l.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: l.value
            }),
          ...C
        },
        { field: 'shrinkage', headerName: 'Shrinkage %' },
        { field: 'wastage', headerName: 'Wastage %' },
        {
          field: 'total',
          headerName: 'Total',
          valueGetter: (l) => l.toLocaleString(),
          colSpan: (l, x) => (x.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (l) =>
            e.jsx('div', {
              style: {
                color: l.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : void 0,
                fontWeight: l.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: l.value
            }),
          ...C
        }
      ],
      fe = a.planningProcessTypeId === 198;
    o.useEffect(() => {
      fe && L({ ...a, uomId: 139 });
    }, [fe]),
      console.log('formData', a);
    const p = ({ row: l, field: x }) =>
      l.id === 'TOTAL_SUMMARY' && (x === 'componentName' || x === 'uom')
        ? 'bold'
        : '';
    console.log('batchList:', G);
    const c =
        'http://100.42.177.77:81/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=',
      A = (l, x) => {
        te(!be);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'CardHeader',
          children: e.jsxs(Me, {
            variant: 'outlined',
            children: [
              e.jsx(ye, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(Ut, {}),
                title: 'Pre Planning',
                titleTypographyProps: { style: { color: 'white' } },
                children: ' '
              }),
              e.jsxs(r, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  e.jsxs(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: [
                      e.jsx(u, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Collection',
                        name: 'collectionId',
                        value: X,
                        onChange: U,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: R.map((l) =>
                          e.jsx(
                            _,
                            {
                              value: l.collectionId,
                              children: l.collectionName
                            },
                            l.collectionId
                          )
                        )
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Design',
                      name: 'designId',
                      value: a.designId,
                      onChange: U,
                      size: 'small',
                      required: !0,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Z.map((l) =>
                        e.jsx(
                          _,
                          { value: l.designId, children: l.designNo },
                          l.designId
                        )
                      )
                    })
                  }),
                  e.jsxs(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: [
                      e.jsx(u, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Batch No.',
                        name: 'batchNo',
                        value: a.batchNo,
                        onChange: U,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: G.map((l) =>
                          e.jsx(
                            _,
                            { value: l.batchNo, children: l.batchNo },
                            l.batchNo
                          )
                        )
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(u, {
                      label: 'Po Pcs',
                      fullWidth: !0,
                      size: 'small',
                      name: 'poPcs',
                      value: a.poPcs,
                      onChange: U,
                      disabled: !0,
                      sx: (l) => ({
                        ...(a.poPcs !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      })
                    })
                  }),
                  e.jsx(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(u, {
                      label: 'Base Color',
                      fullWidth: !0,
                      size: 'small',
                      name: 'baseColorName',
                      value: a.baseColorName,
                      onChange: U,
                      disabled: !0,
                      sx: (l) => ({
                        ...(a.baseColorName !== '' && {
                          '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                            { backgroundColor: '#c9c9c9 !important' }
                        }),
                        '& .MuiInputBase-input.Mui-disabled': {
                          WebkitTextFillColor: 'black'
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#f9f9f9'
                        },
                        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'gray' },
                        '& .MuiInputLabel-root.Mui-disabled': {
                          color: 'rgba(0, 0, 0, 0.87)'
                        }
                      })
                    })
                  })
                ]
              })
            ]
          })
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'MainCard',
              avatar: e.jsx(Ft, {}),
              title: 'Add Pre Planning',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Qe, {
                onClick: A,
                sx: { mt: '-18px' },
                children: e.jsx(et, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            e.jsxs(Rt, {
              expanded: be,
              onChange: A,
              sx: {},
              children: [
                e.jsx(zt, {
                  expandIcon: e.jsx(et, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(Qt, {
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Ze, {
                          fullWidth: !0,
                          disabled: Q,
                          options: ne,
                          getOptionLabel: (l) => l.lookUpName,
                          value:
                            ne.find((l) => l.lookUpId === a.fabricId) || null,
                          onChange: (l, x) => {
                            U({
                              target: {
                                name: 'fabricId',
                                value: x ? x.lookUpId : ''
                              }
                            });
                          },
                          renderInput: (l) =>
                            e.jsx(u, {
                              ...l,
                              label: 'Fabrication',
                              size: 'small',
                              name: 'fabricId',
                              value: a.fabricId,
                              required: !0,
                              error: !!Y.fabricId,
                              helperText: Y.fabricId,
                              disabled: Q,
                              InputLabelProps: { sx: { color: 'black' } },
                              sx: { '& input': { backgroundColor: 'white' } }
                            }),
                          PaperComponent: ({ children: l }) =>
                            e.jsx('div', {
                              style: { backgroundColor: 'white' },
                              children: l
                            })
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Shrinkage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'shrinkage',
                          value: a.shrinkage,
                          onChange: U,
                          error: !!Y.shrinkage,
                          helperText: Y.shrinkage,
                          required: !0,
                          disabled: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Wastage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'wastage',
                          value: a.wastage,
                          onChange: U,
                          error: !!Y.wastage,
                          helperText: Y.wastage,
                          required: !0,
                          disabled: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'UOM',
                          type: 'number',
                          defaultValue: '',
                          size: 'small',
                          name: 'uomId',
                          value: a.uomId,
                          onChange: U,
                          error: !!Y.uomId,
                          helperText: Y.uomId,
                          required: !0,
                          disabled: fe || Q,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: F.map((l) =>
                            e.jsx(
                              _,
                              { value: l.lookUpId, children: l.lookUpName },
                              l.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(ge, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Se,
                          children: Q || Q ? 'Unlock' : 'Lock'
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(he, {
                          color: '#cc8587',
                          sx: { height: 2, width: '100%' }
                        })
                      }),
                      e.jsxs(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          e.jsx(u, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Process Type',
                            name: 'planningProcessTypeId',
                            value: a.planningProcessTypeId,
                            onChange: U,
                            size: 'small',
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: f.map((l) =>
                              e.jsx(
                                _,
                                { value: l.lookUpId, children: l.lookUpName },
                                l.lookUpId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Ze, {
                          fullWidth: !0,
                          options: S,
                          getOptionLabel: (l) => l.lookUpName,
                          value:
                            S.find((l) => l.lookUpId === a.componentId) || null,
                          onChange: (l, x) => {
                            U({
                              target: {
                                name: 'componentId',
                                value: x ? x.lookUpId : ''
                              }
                            });
                          },
                          renderOption: (l, x) => {
                            const { lookUpName: q } = x;
                            return e.jsx('span', { ...l, children: q });
                          },
                          renderInput: (l) =>
                            e.jsx(u, {
                              ...l,
                              label: 'Select Component',
                              size: 'small',
                              name: 'componentId',
                              value: a.componentId,
                              required: !0,
                              error: !!Y.componentId,
                              helperText: Y.componentId,
                              InputLabelProps: { sx: { color: 'black' } },
                              sx: { '& input': { backgroundColor: 'white' } }
                            }),
                          PaperComponent: ({ children: l }) =>
                            e.jsx('div', {
                              style: { backgroundColor: 'white' },
                              children: l
                            })
                        })
                      }),
                      e.jsxs(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          ' ',
                          e.jsx(Ze, {
                            fullWidth: !0,
                            options: O,
                            getOptionLabel: (l) => l.lookUpName,
                            value:
                              O.find((l) => l.lookUpId === a.colorId) || null,
                            onChange: (l, x) => {
                              U({
                                target: {
                                  name: 'colorId',
                                  value: x ? x.lookUpId : ''
                                }
                              });
                            },
                            renderInput: (l) =>
                              e.jsx(u, {
                                ...l,
                                label: 'Color',
                                size: 'small',
                                value: a.colorId,
                                name: 'colorId',
                                required: !0,
                                error: !!Y.colorId,
                                helperText: Y.colorId,
                                InputLabelProps: { sx: { color: 'black' } },
                                sx: { '& input': { backgroundColor: 'white' } }
                              }),
                            PaperComponent: ({ children: l }) =>
                              e.jsx('div', {
                                style: { backgroundColor: 'white' },
                                children: l
                              })
                          })
                        ]
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          size: 'small',
                          name: 'cuttingSize',
                          type: 'number',
                          value: a.cuttingSize,
                          onChange: U,
                          required: !0,
                          error: !!Y.cuttingSize,
                          helperText: Y.cuttingSize,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: fe
                          ? e.jsx(u, {
                              fullWidth: !0,
                              select: !0,
                              label: 'Operating Machine',
                              size: 'small',
                              name: 'operatingMachineId',
                              value: a.operatingMachineId,
                              onChange: U,
                              required: !0,
                              disabled: le,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: re.map((l) =>
                                e.jsx(
                                  _,
                                  { value: l.lookUpId, children: l.lookUpName },
                                  l.lookUpId
                                )
                              )
                            })
                          : e.jsx(u, {
                              fullWidth: !0,
                              select: !0,
                              label: 'No of Heads',
                              size: 'small',
                              name: 'noOfHeads',
                              value: a.noOfHeads,
                              onChange: U,
                              required: !0,
                              disabled: le,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: P.map((l) =>
                                e.jsx(
                                  _,
                                  { value: l.lookUpId, children: l.lookUpName },
                                  l.lookUpId
                                )
                              )
                            })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Repeat Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'repeatSize',
                          value: a.repeatSize,
                          onChange: U,
                          disabled: le,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'No. of Repeats',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeats',
                          type: 'number',
                          value: a.repeats,
                          onChange: U,
                          required: !0,
                          disabled: le,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Total Fabric',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalFabric',
                          value: a.totalFabric,
                          onChange: U,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Repeats in Meter',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeatsInMtr',
                          disabled: !0,
                          value: a.repeatsInMtr,
                          onChange: U,
                          sx: (l) => ({
                            ...(a.repeatsInMtr !== '' && {
                              '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                                { backgroundColor: '#c9c9c9 !important' }
                            }),
                            '& .MuiInputBase-input.Mui-disabled': {
                              WebkitTextFillColor: 'black'
                            },
                            '& .MuiInputBase-root.Mui-disabled': {
                              backgroundColor: '#f9f9f9'
                            },
                            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                              { borderColor: 'gray' },
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          })
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(u, {
                          label: 'Total',
                          fullWidth: !0,
                          size: 'small',
                          name: 'total',
                          value: a.total,
                          onChange: U,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: e.jsx(r, {
                          container: !0,
                          spacing: 1,
                          width: 'Inherit'
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        children: e.jsx(ge, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Pe,
                          disabled: a.productionStatus === 3,
                          children: 'Save'
                        })
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(he, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'MainCard',
              avatar: e.jsx(Ye, {}),
              title: 'View',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              sx: { paddingY: 1, paddingX: 1 },
              children: e.jsx(r, {
                sx: {},
                item: !0,
                xs: 12,
                children: e.jsx(qe, {
                  iColumns: K,
                  initialRows: we,
                  disableDelete: a.productionStatus === 3,
                  disableEdit: a.productionStatus === 3,
                  setInitialData: b,
                  deleteApi: c,
                  deleteBy: 'planningId',
                  refetch: i,
                  getCellClassName: p,
                  setAccordionExpanded: te,
                  fileName: 'PrePlanningList',
                  isLoading: j
                })
              })
            })
          ]
        })
      ]
    });
  },
  bo = go,
  fo = '/assets/roller-ezgif.com-instagif-CY-x4C-U.gif',
  Io = ({ initialValues: n }) => {
    const { user: d } = We();
    console.log('user', d);
    const [v, j] = o.useState(!0),
      [h, t] = o.useState([]),
      [b, s] = o.useState({
        dpId: 0,
        designId: '',
        batchNo: '',
        planningHeaderId: '',
        fabricId: '',
        colorId: '',
        color: '',
        processType: '',
        availableQty: '',
        Shrinkage: '',
        Wastage: '',
        outputQty: '',
        UOM: '',
        uomId: '',
        poPcs: '',
        baseColorName: '',
        createdBy: d.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    o.useEffect(() => {
      s({
        ...b,
        dpId: h.dpId || 0,
        fabricId: (h == null ? void 0 : h.fabricId) || '',
        colorId: (h == null ? void 0 : h.colorId) || '',
        color: (h == null ? void 0 : h.color) || '',
        processType: (h == null ? void 0 : h.processType) || '',
        availableQty: (h == null ? void 0 : h.availableQty) || '',
        Shrinkage: (h == null ? void 0 : h.shrinkage) || '',
        Wastage: (h == null ? void 0 : h.wastage) || '',
        outputQty: (h == null ? void 0 : h.outputQty) || 0,
        UOM: (h == null ? void 0 : h.uom) || 0,
        uomId: (h == null ? void 0 : h.uomId) || '',
        poPcs: (h == null ? void 0 : h.poPcs) || 0,
        createdOn:
          (h == null ? void 0 : h.createdOn) || new Date().toISOString(),
        createdBy: (h == null ? void 0 : h.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [h]);
    const { enqueueSnackbar: B } = ze(),
      [a, L] = o.useState(!1);
    console.log('Dyeing form data to send', b);
    const { data: k } = $e(),
      [X, m] = o.useState('');
    o.useEffect(() => {
      m(n.collectionId);
    }, []);
    const { data: y } = _e(),
      { data: g, refetch: J } = Xe(X, { skip: !X }),
      { data: i, refetch: V } = ot(b.designId, { skip: !b.designId }),
      { data: Z } = Ua(
        { batchNo: b.planningHeaderId, processType: 'Fabrication' },
        { skip: !b.planningHeaderId }
      ),
      { data: T } = Ha(
        { fabricId: b.fabricId, planningHeaderId: b.planningHeaderId },
        { skip: !b.fabricId || !b.planningHeaderId }
      ),
      { data: W, refetch: R } = qa(b.planningHeaderId, {
        skip: !b.planningHeaderId
      }),
      [ee, D] = o.useState([]),
      [z, f] = o.useState([]),
      [E, re] = o.useState([]),
      [ie, S] = o.useState([]),
      [ce, ne] = o.useState([]),
      [pe, O] = o.useState([]);
    o.useState([]);
    const [M, F] = o.useState(!1);
    console.log('batchList', z),
      console.log('formData', b),
      o.useEffect(() => {
        g && D(g.result);
      }, [g]),
      o.useEffect(() => {
        i && f(i.result);
      }, [i]),
      o.useEffect(() => {
        Z && re(Z.result);
      }, [Z]),
      o.useEffect(() => {
        T && O(T.result);
      }, [T]),
      o.useEffect(() => {
        W && (j(!1), ne(W.result.map((p, c) => ({ id: c + 1, ...p }))));
      }, [W, R]),
      o.useEffect(() => {
        if (y) {
          const p = y.result[0];
          S(p.uomList);
        }
      }, [y]);
    const [ae, P] = o.useState([]);
    o.useEffect(() => {
      k && P(k.result);
    }, [k]),
      o.useEffect(() => {
        b.productionStatus === 3 &&
          B('Production Staus is completed. Select other Collection!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
      }, [b.productionStatus]);
    const N = (p) => {
      const { name: c, value: A } = p.target;
      if (c === 'collectionId') {
        const l = ae.find((x) => x.collectionId === parseInt(A));
        m(A),
          L(!0),
          ne([]),
          j(!0),
          s({
            ...b,
            collectionId: A,
            designId: '',
            batchNo: '',
            planningHeaderId: '',
            fabricId: '',
            colorId: '',
            color: '',
            processType: '',
            availableQty: '',
            Shrinkage: '',
            Wastage: '',
            outputQty: '',
            UOM: '',
            uomId: '',
            productionStatus: l ? l.productionStatus : '',
            poPcs: '',
            baseColorName: ''
          });
      } else if (c === 'designId') {
        const l = ee.find((x) => x.designId === parseInt(A));
        ne([]),
          j(!0),
          s({
            ...b,
            designId: A,
            baseColorId: l ? l.colorId : '',
            baseColorName: l ? l.colorName : '',
            batchNo: '',
            planningHeaderId: '',
            fabricId: '',
            colorId: '',
            color: '',
            processType: '',
            availableQty: '',
            Shrinkage: '',
            Wastage: '',
            outputQty: '',
            UOM: '',
            uomId: '',
            poPcs: ''
          });
      } else if (c === 'batchNo') {
        const l = z.find((x) => x.batchNo === A);
        s({
          ...b,
          batchNo: A,
          planningHeaderId: l ? l.planningHeaderId : '',
          poPcs: l ? l.poPcs : '',
          fabricId: '',
          colorId: '',
          color: '',
          processType: '',
          availableQty: '',
          Shrinkage: '',
          Wastage: '',
          outputQty: '',
          UOM: '',
          uomId: ''
        }),
          F(!0),
          L(!1);
      } else if (c === 'fabricId')
        E.find((l) => l.fabricId === A),
          console.log('Selected Fabric:', E),
          s({ ...b, fabricId: A });
      else if (c === 'ColorId') {
        const l = pe.find((x) => x.colorId === A.colorId);
        s({
          ...b,
          ColorId: A.colorId,
          color: l.color,
          availableQty: l.total,
          UOM: l.uom,
          Shrinkage: l.shrinkage,
          Wastage: l.wastage
        });
      } else
        c === 'processType'
          ? s({ ...b, processType: A })
          : c === 'vendorId'
            ? s({ ...b, vendorId: A })
            : (s({ ...b, [c]: A }), se((l) => ({ ...l, [c]: '' })));
    };
    o.useEffect(() => {
      const p = () => {
          const w = parseFloat(b.availableQty) || 0,
            ue = parseFloat(b.Shrinkage) || 0,
            I = parseFloat(b.Wastage) || 0;
          return ((w * (100 - (ue + I))) / 100).toFixed(2);
        },
        c = () => {
          const w = parseFloat(b.availableQty) || 0,
            ue = parseFloat(b.RatePerUOM) || 0;
          return (w * ue).toFixed(2);
        },
        A = (w, ue) => (w * (1 + ue / 100)).toFixed(2),
        l = p(),
        x = c(),
        q = parseFloat(b.GST) || 0;
      A(x, q), parseFloat(b.poPcs), s((w) => ({ ...w, outputQty: l }));
    }, [
      b.availableQty,
      b.Shrinkage,
      b.Wastage,
      b.RatePerUOM,
      b.GST,
      b.poPcs,
      b.UnitRatePerPo
    ]);
    const [G, se] = o.useState({}),
      le = async () => {
        try {
          const p = await Ce.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrinting',
            b
          );
          console.log('Save response:', p.data),
            p.data.success
              ? B('Dyeing saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (B(`${p.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', p.data.message)),
            s((c) => ({
              designId: c.designId,
              planningHeaderId: c.planningHeaderId,
              batchNo: c.batchNo,
              dpId: 0,
              fabricId: '',
              colorId: '',
              color: '',
              processType: '',
              availableQty: '',
              Shrinkage: '',
              Wastage: '',
              outputQty: '',
              UOM: '',
              uomId: '',
              poPcs: c.poPcs,
              baseColorName: '',
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId
            })),
            R();
        } catch (p) {
          console.error('Error saving data:', p),
            B('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      be = [
        { value: 'Dyeing', label: 'Dyeing' },
        { value: 'Printing', label: 'Printing' }
      ],
      [te, U] = o.useState(!0),
      [Y, H] = o.useState({}),
      [Q, me] = o.useState(!1),
      Se = (p) => {
        H(p), me(!0);
      },
      Pe = (p) => {
        H(p), me(!0), U(!1);
      },
      ke = () => {
        U(!0), me(!1), H({}), R();
      },
      [Oe, je] = o.useState(0),
      [Ae, Ne] = o.useState(0);
    o.useEffect(() => {
      const p = ce.reduce((A, l) => A + (l.availableQty ?? 0), 0).toFixed(2),
        c = ce.reduce((A, l) => A + (l.assignedQty ?? 0), 0).toFixed(2);
      je(parseFloat(p).toLocaleString()), Ne(parseFloat(c).toLocaleString());
    }, [ce]);
    const we = [
        ...ce,
        {
          id: 'TOTAL_SUMMARY',
          componentName: 'Total Summary',
          availableQty: Oe,
          assignedQty: Ae
        }
      ],
      C = { sortable: !1, pinnable: !1, hideable: !1 },
      K = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...C,
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : p.value
        },
        { field: 'fabricName', headerName: 'Fabric', ...C },
        {
          field: 'colorName',
          headerName: 'Color',
          ...C,
          colSpan: (p, c) => (c.id === 'TOTAL_SUMMARY' ? 2 : void 0)
        },
        {
          field: 'processType',
          headerName: 'Process Type',
          ...C,
          renderCell: (p) => {
            const c =
              p.value === 'Dyeing'
                ? 'primary.dark'
                : p.value === 'Printing'
                  ? 'success.dark'
                  : 'default';
            return e.jsx(Ve, {
              label: p.value,
              sx: {
                backgroundColor:
                  c === 'primary' || c === 'default' ? void 0 : c,
                color: c === 'primary' || c === 'default' ? void 0 : 'white'
              },
              color:
                c === 'primary'
                  ? 'primary'
                  : c === 'default'
                    ? 'default'
                    : void 0
            });
          }
        },
        { field: 'uom', headerName: ' UOM', ...C },
        { field: 'poPcs', headerName: ' PO PCS.', ...C },
        {
          field: 'availableQty',
          headerName: 'Available Quantitity',
          ...C,
          valueGetter: (p) => p.toLocaleString(),
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: p.value
                })
              : p.value
        },
        {
          field: 'assignedQty',
          headerName: 'Assigned Qty',
          ...C,
          valueGetter: (p) => p.toLocaleString(),
          colSpan: (p, c) => (c.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: p.value
                })
              : p.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          ...C,
          renderCell: (p) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(bt, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Qe, {
                    color: 'primary',
                    onClick: () => Se(p.row),
                    children: e.jsx(It, {})
                  }),
                  e.jsx(Qe, {
                    color: 'primary',
                    onClick: () => Pe(p.row),
                    children: e.jsx(Ye, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(rt, { src: fo, sx: { background: 'transparent' } }),
              title: 'Add Dyeing and Printing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: X,
                      onChange: N,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: ae.map((p) =>
                        e.jsx(
                          _,
                          { value: p.collectionId, children: p.collectionName },
                          p.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: b.designId,
                    onChange: N,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ee.map((p) =>
                      e.jsx(
                        _,
                        { value: p.designId, children: p.designNo },
                        p.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: b.batchNo,
                      onChange: N,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: z.map((p) =>
                        e.jsx(
                          _,
                          { value: p.batchNo, children: p.batchNo },
                          p.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: b.baseColorName,
                    onChange: N,
                    disabled: !0,
                    sx: (p) => ({
                      ...(b.repeatsInMtr !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                ' ',
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(he, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: b.fabricId,
                    onChange: N,
                    error: !!G.fabricId,
                    helperText: G.fabricId,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((p) =>
                      e.jsx(
                        _,
                        { value: p.fabricId, children: p.fabric },
                        p.fabricId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(no, {
                    fullWidth: !0,
                    options: pe,
                    getOptionLabel: (p) => p.color || '',
                    renderInput: (p) =>
                      e.jsx(u, {
                        ...p,
                        label: 'Color',
                        name: 'colorId',
                        size: 'small',
                        error: !!G.colorId,
                        helperText: G.colorId,
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        sx: { '& input': { backgroundColor: 'white' } }
                      }),
                    PaperComponent: ({ children: p }) =>
                      e.jsx('div', {
                        style: {
                          backgroundColor: 'white',
                          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)'
                        },
                        children: p
                      }),
                    value: pe.find((p) => p.colorId === b.colorId) || null,
                    onChange: (p, c) => {
                      s((A) => ({
                        ...A,
                        colorId: c ? c.colorId : '',
                        color: c ? c.color : '',
                        availableQty: c ? c.total : '',
                        UOM: c ? c.uom : '',
                        uomId: c ? c.uomId : '',
                        Shrinkage: c ? c.shrinkage : '',
                        Wastage: c ? c.wastage : ''
                      }));
                    }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processType',
                    value: b.processType,
                    onChange: N,
                    error: !!G.processType,
                    helperText: G.processType,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: be.map((p) =>
                      e.jsx(_, { value: p.value, children: p.label }, p.value)
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: b.poPcs,
                    onChange: N,
                    disabled: !0,
                    sx: (p) => ({
                      ...(b.poPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'UOM',
                    fullWidth: !0,
                    size: 'small',
                    name: 'UOM',
                    value: b.UOM,
                    onChange: N,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'availableQty',
                    value: b.availableQty,
                    onChange: N,
                    disabled: !0,
                    sx: (p) => ({
                      ...(b.availableQty !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        { borderColor: 'gray' },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 9,
                  sx: { marginTop: 2 },
                  textAlign: 'right',
                  children: e.jsx(ge, {
                    variant: 'contained',
                    color: 'primary',
                    size: 'small',
                    disabled: b.productionStatus === 3,
                    onClick: le,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(he, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        ' ',
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(he, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ye, {}),
              title: 'View Dyeing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(r, {
                item: !0,
                xs: 12,
                md: 12,
                paddingTop: 1,
                children: [
                  e.jsx(qe, {
                    iColumns: K,
                    initialRows: we,
                    disableDelete: b.productionStatus === 3,
                    disableEdit: b.productionStatus === 3,
                    setInitialData: t,
                    deleteApi:
                      'http://100.42.177.77:81/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=',
                    deleteBy: 'dpId',
                    refetch: R,
                    setAccordionExpanded: F,
                    fileName: 'Dyeing&PrintingList',
                    isLoading: v
                  }),
                  e.jsxs(nt, {
                    open: Q,
                    onClose: ke,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ht, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px'
                        },
                        children: [
                          e.jsx(ve, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Dyeing and Printing > Assign Vendors '
                          }),
                          e.jsx(Qe, {
                            onClick: ke,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ft, {})
                          })
                        ]
                      }),
                      e.jsxs(st, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(uo, {
                            initialFormData: Y,
                            productionStatus: b.productionStatus,
                            setInitialFormData: H,
                            refetchDyeingPrintingData: R,
                            handleClickOpen: Se,
                            showUpperDiv: te
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  },
  xo = Io,
  Ht =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nNXXaciVVRAH8Kv1Jtoi5psFZZYUtoimhUVlaJHZghK2UBFCtGkbZdgiBG1GHyowaaEdWogWElvMFjJpw4oWwrJsVetDtNNevxjeuXW8PPe991rvh/5w4TznnDkzZ87Mf+bWav8H4Dgcgc9wfcPanViFidioL5Rvj2/wIqbgCyzA3XgKH+BI/+DWijMGpYEjO1U+FH8Uh++Jj6yPNzG5YW5wccYxWItF6anwWP9OjJiE7/FuYcCTeDnHjQYsLWR3w8cYi/OxP57AzE49cSGewzgswfJ0/0u4HwfgWYyq3w5deBXH4wXchHU4GgvbVdwPR+EVPI1NMCDesviFos3SqIiTaSl7BW5Pw5/Ho3gYl2Nuu8G3NG+8X85tgcMxCxfhLBxWf/N08bJU+h52xRrciGdwdj7bsFbKx+fbnZTfe+cNflGNX/EQJqQ3Pi+MPgN3pAd/x8GtlO+BT/I2A1P4T+0hMuYdzC/Om56XCW/NyOCt5gs9Lo5oPxBD8u07xesZK5vjtjRqXKEj0vGEZgYsxGXYOKO8U/yE3ZN0PsSVuCHOLHTsgxVVykdmgAzKAGuFryvmLsDVBXnF+w9OCt+60BXcMarRgBA8D91Jvc2URrqNSZkJ+f1dUvRbDfu/wqbpiXmFrluCIUvlke+rsS3OaaJ8WUmxhewO+LYXT52KneLWhcx167EhRtQ3JKNVYUqTuAkmfDBStoncI7kvMmvLHAcdTywPORT35rjqbdfWySPzfDF+wAPF/Hb4skJ2Xa6HzL45fiwCvTRgJq7NvK/CmcXeuQ1rpxdrF1fIBvn0z5ScXuXFGk7Md4nbVeGUYu8lDWvnFmtzKmR/C+JpZcA03JXjqoBaWfD9VplGkqjq890VvUJgTfHuezUzYMdgsBxHRavCpAaZoQ3fQblVWJLrK0suaDSgXwbakCSTKkQp7WoiP6AX5pyVJPd3GjYzYgFmZzT/2OSwVdkLblOU7PuauF4+Z3fGxqWtDBiblawrWbE3hIFv4OcW++Ylta9uqyHVU3rnpNBr/h2WZ1WMrLmmpfJABEnW7uD44dlybwjCk8OyWX0/YqvWLvSUy3jTXbIt77QsL8q+YnReZnTbyuvA1OTuqZkhMyoqXSNWRH+Y8sem8sm1DYWehvLtjPrhObdzZspVuDnL7GnBI4XMPUlQIzZYeR3ZGc1ObzyeFW981viByRtjsttdnO3cyRF8tf8Serj8oPhjmu11tNqfZnpFzz8fh/TJn9O+xl9lMwg6mBWmPgAAAABJRU5ErkJggg==',
  vo = ({ initialValues: n }) => {
    const { user: d } = We(),
      { enqueueSnackbar: v } = ze(),
      [j, h] = o.useState(!0),
      [t, b] = o.useState([]),
      [s, B] = o.useState({
        schiffiliId: 0,
        designId: '',
        planningHeaderId: 0,
        batchNo: '',
        componentId: '',
        poPcs: '',
        baseColorName: '',
        fabricId: '',
        vendorId: '',
        colorId: '',
        availableQty: '',
        thaanQty: 0,
        operatingMachineId: 0,
        operatingMachine: '',
        workingHeadId: 0,
        cuttingSize: '',
        rate: '',
        costPerComponent: '',
        totalEmbroidry: 0,
        noOfItemPerThaan: 0,
        noOfStichesPerYard: 0,
        amountPerYard: 0,
        totalPcs: 0,
        laserCut: !1,
        laserCutRate: 0,
        pcsForLaserCut: 0,
        totalAmount: 0,
        createdBy: d.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    o.useEffect(() => {
      B({
        ...s,
        schiffiliId: t.schiffiliId || 0,
        componentId: (t == null ? void 0 : t.componentId) || '',
        poPcs: (t == null ? void 0 : t.poPcs) || '',
        fabricId: (t == null ? void 0 : t.fabricId) || '',
        vendorId: (t == null ? void 0 : t.vendorId) || '',
        colorId: (t == null ? void 0 : t.colorId) || '',
        availableQty: (t == null ? void 0 : t.availableQty) || '',
        thaanQty: (t == null ? void 0 : t.thaanQty) || 0,
        operatingMachineId: (t == null ? void 0 : t.operatingMachineId) || 0,
        operatingMachine: (t == null ? void 0 : t.operatingMachineName) || '',
        workingHeadId: (t == null ? void 0 : t.workingHeadId) || 0,
        cuttingSize: (t == null ? void 0 : t.cuttingSize) || '',
        rate: (t == null ? void 0 : t.rate) || '',
        costPerComponent: (t == null ? void 0 : t.costPerComponent) || '',
        totalEmbroidry: (t == null ? void 0 : t.totalEmbroidry) || 0,
        noOfItemPerThaan: (t == null ? void 0 : t.noOfItemPerThaan) || 0,
        noOfStichesPerYard: (t == null ? void 0 : t.noOfStichesPerYard) || 0,
        amountPerYard: (t == null ? void 0 : t.amountPerYard) || 0,
        totalPcs: (t == null ? void 0 : t.totalPcs) || 0,
        laserCut: !!(
          (t != null && t.laserCutRate) ||
          (t != null && t.pcsForLaserCut)
        ),
        laserCutRate: (t == null ? void 0 : t.laserCutRate) || 0,
        pcsForLaserCut: (t == null ? void 0 : t.pcsForLaserCut) || 0,
        totalAmount: (t == null ? void 0 : t.totalAmount) || 0,
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [t]);
    const [a, L] = o.useState(!1),
      k = (c, A) => {
        L(!a);
      },
      [X, m] = o.useState(!1),
      { data: y } = $e(),
      [g, J] = o.useState('');
    o.useEffect(() => {
      J(n.collectionId);
    }, []);
    const { data: i } = _e(),
      { data: V, refetch: Z } = Xe(g, { skip: !g }),
      { data: T, refetch: W } = ot(s.designId, { skip: !s.designId }),
      { data: R } = ut(
        { batchNo: s.planningHeaderId, componentId: s.componentId },
        { skip: !s.planningHeaderId || !s.componentId }
      ),
      { data: ee } = pt(
        {
          batchNo: s.planningHeaderId,
          componentId: s.componentId,
          fabricId: s.fabricId
        },
        { skip: !s.planningHeaderId || !s.componentId || !s.fabricId }
      ),
      { data: D, refetch: z } = Ea(s.planningHeaderId, {
        skip: !s.planningHeaderId
      }),
      { data: f } = mt(s.planningHeaderId, { skip: !s.planningHeaderId });
    console.log('formData.planningHeaderId', s.planningHeaderId),
      console.log('collectionData', y),
      console.log('schiffliList', D);
    const [E, re] = o.useState([]),
      [ie, S] = o.useState([]),
      [ce, ne] = o.useState([]),
      [pe, O] = o.useState([]),
      [M, F] = o.useState([]),
      [ae, P] = o.useState([]),
      [N, G] = o.useState([]),
      [se, le] = o.useState([]),
      [be, te] = o.useState([]);
    o.useEffect(() => {
      V && re(V.result);
    }, [V]),
      o.useEffect(() => {
        T && S(T.result);
      }, [T]),
      o.useEffect(() => {
        R && ne(R.result);
      }, [R]),
      o.useEffect(() => {
        ee && G(R.result);
      }, [ee]),
      o.useEffect(() => {
        f && te(f.result);
      }, [f]),
      o.useEffect(() => {
        D && (h(!1), le(D.result.map((c, A) => ({ id: A + 1, ...c }))));
      }, [D, z]),
      o.useEffect(() => {
        if (i) {
          const c = i.result[0];
          O(c.vendorList), F(c.operatingMachineList), P(c.workingHeadList);
        }
      }, [i]),
      console.log('initialRows', se);
    const U = (y == null ? void 0 : y.result) || [];
    o.useEffect(() => {
      const c = () => {
        const w = parseFloat(s.thaanQty) || 0,
          ue = parseFloat(s.operatingMachine) || 0;
        return (w * ue).toFixed(2);
      };
      B((w) => ({ ...w, totalEmbroidry: c() }));
      const A = () => {
        const w = parseFloat(s.thaanQty) || 0,
          ue = parseFloat(s.noOfItemPerThaan) || 0;
        return (w * ue).toFixed(2);
      };
      B((w) => ({ ...w, totalPcs: A() }));
      const l = () => {
        const w = parseFloat(s.noOfStichesPerYard) || 0,
          ue = parseFloat(s.rate) || 0;
        return ((w / 1e3) * ue).toFixed(2);
      };
      B((w) => ({ ...w, amountPerYard: l() }));
      const x = () => {
        const w = parseFloat(s.totalAmount) || 0,
          ue = parseFloat(s.totalPcs) || 0;
        return (w / ue).toFixed(2);
      };
      B((w) => ({ ...w, costPerComponent: x() }));
      const q = () => {
        const w = parseFloat(s.amountPerYard) || 0,
          ue = parseFloat(s.totalEmbroidry) || 0,
          I = parseFloat(s.laserCutRate) || 0,
          $ = parseFloat(s.pcsForLaserCut) || 0;
        return (w * ue + $ * I).toFixed(2);
      };
      B((w) => ({ ...w, totalAmount: q() }));
    }, [
      s.thaanQty,
      s.operatingMachine,
      s.noOfStichesPerYard,
      s.rate,
      s.totalAmount,
      s.totalPcs,
      s.amountPerYard,
      s.totalEmbroidry,
      s.laserCutRate,
      s.pcsForLaserCut
    ]);
    const Y = (c) => {
      const { name: A, checked: l } = c.target;
      B((x) => ({ ...x, [A]: l }));
    };
    o.useEffect(() => {
      s.productionStatus === 3 &&
        v('Production Staus is completed. Select other Collection!', {
          variant: 'warning',
          autoHideDuration: 5e3
        });
    }, [s.productionStatus]);
    const H = (c) => {
      const { name: A, value: l } = c.target;
      if (A === 'collectionId') {
        const x = U.find((q) => q.collectionId === parseInt(l));
        J(l),
          m(!0),
          le([]),
          h(!0),
          B({
            ...s,
            collectionId: l,
            designId: '',
            planningHeaderId: 0,
            productionStatus: x ? x.productionStatus : '',
            batchNo: '',
            componentId: '',
            poPcs: '',
            baseColorName: '',
            fabricId: '',
            vendorId: '',
            colorId: '',
            availableQty: '',
            thaanQty: 0,
            operatingMachineId: 0,
            operatingMachine: '',
            workingHeadId: 0,
            cuttingSize: '',
            rate: '',
            costPerComponent: '',
            totalEmbroidry: 0,
            noOfItemPerThaan: 0,
            noOfStichesPerYard: 0,
            amountPerYard: 0,
            totalPcs: 0,
            laserCut: !1,
            laserCutRate: 0,
            pcsForLaserCut: 0,
            totalAmount: 0
          });
      } else if (A === 'designId') {
        const x = E.find((q) => q.designId === parseInt(l));
        le([]),
          h(!0),
          B({
            ...s,
            designId: l,
            baseColorId: x ? x.colorId : '',
            baseColorName: x ? x.colorName : '',
            planningHeaderId: 0,
            batchNo: '',
            componentId: '',
            poPcs: '',
            fabricId: '',
            vendorId: '',
            colorId: '',
            availableQty: '',
            thaanQty: 0,
            operatingMachineId: 0,
            operatingMachine: '',
            workingHeadId: 0,
            cuttingSize: '',
            rate: '',
            costPerComponent: '',
            totalEmbroidry: 0,
            noOfItemPerThaan: 0,
            noOfStichesPerYard: 0,
            amountPerYard: 0,
            totalPcs: 0,
            laserCut: !1,
            laserCutRate: 0,
            pcsForLaserCut: 0,
            totalAmount: 0
          });
      } else if (A === 'batchNo') {
        const x = ie.find((q) => q.batchNo === l);
        B({
          ...s,
          batchNo: l,
          planningHeaderId: x ? x.planningHeaderId : '',
          poPcs: x ? x.poPcs : '',
          componentId: '',
          fabricId: '',
          vendorId: '',
          colorId: '',
          availableQty: '',
          thaanQty: 0,
          operatingMachineId: 0,
          operatingMachine: '',
          workingHeadId: 0,
          cuttingSize: '',
          rate: '',
          costPerComponent: '',
          totalEmbroidry: 0,
          noOfItemPerThaan: 0,
          noOfStichesPerYard: 0,
          amountPerYard: 0,
          totalPcs: 0,
          laserCut: !1,
          laserCutRate: 0,
          pcsForLaserCut: 0,
          totalAmount: 0
        }),
          L(!0),
          m(!1);
      } else if (A === 'colorId') {
        const x = N.find((q) => q.colorId === l);
        B({
          ...s,
          colorId: l,
          availableQty: x ? x.total : '',
          cuttingSize: x ? x.cuttingSize : '',
          repeats: x ? x.repeats : ''
        });
      } else if (A === 'operatingMachineId') {
        const x = M.find((q) => q.lookUpId === l);
        B({
          ...s,
          operatingMachineId: l,
          operatingMachine: x ? x.lookUpName : ''
        });
      } else B({ ...s, [A]: l });
    };
    console.log('colors', N);
    const [Q, me] = o.useState({}),
      Se = async () => {
        const c = Pe();
        if (Object.keys(c).length > 0) {
          me(c);
          return;
        }
        try {
          const A = await Ce.post(
            'http://100.42.177.77:81/api/Schiffli/SaveSchiffili',
            s
          );
          console.log('Save response:', A.data),
            A.data.success
              ? v('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (v(`${A.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', A.data.message)),
            B((l) => ({
              designId: l.designId,
              planningHeaderId: l.planningHeaderId,
              batchNo: l.batchNo,
              baseColorName: l.baseColorName,
              schiffiliId: 0,
              componentId: '',
              poPcs: l.poPcs,
              fabricId: '',
              vendorId: '',
              colorId: '',
              availableQty: '',
              thaanQty: 0,
              operatingMachineId: 0,
              operatingMachine: '',
              workingHeadId: 0,
              cuttingSize: '',
              rate: '',
              costPerComponent: '',
              totalEmbroidry: 0,
              noOfItemPerThaan: 0,
              noOfStichesPerYard: 0,
              amountPerYard: 0,
              totalPcs: 0,
              laserCut: !1,
              laserCutRate: 0,
              pcsForLaserCut: 0,
              totalAmount: 0,
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId
            })),
            z();
        } catch (A) {
          console.error('Error saving data:', A),
            v('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      Pe = () => {
        const c = {};
        return (
          s.fabricId || (c.fabricId = 'fabricId is required'),
          s.colorId || (c.colorId = 'colorId is required'),
          s.vendorId || (c.vendorId = 'vendorId is required'),
          s.componentId || (c.componentId = 'componentId is required'),
          s.thaanQty || (c.thaanQty = 'thaanQty is required'),
          s.workingHeadId || (c.workingHeadId = 'workingHeadId is required'),
          s.rate || (c.rate = 'rate is required'),
          s.operatingMachineId ||
            (c.operatingMachineId = 'operatingMachineId is required'),
          s.noOfStichesPerYard ||
            (c.noOfStichesPerYard = 'noOfStichesPerYard is required'),
          s.noOfItemPerThaan ||
            (c.noOfItemPerThaan = 'noOfItemPerThaan is required'),
          c
        );
      };
    console.log('formData', s);
    const [ke, Oe] = o.useState(0),
      [je, Ae] = o.useState(0),
      [Ne, we] = o.useState(0);
    o.useEffect(() => {
      const c = se.reduce((x, q) => x + (q.totalAmount ?? 0), 0).toFixed(2),
        A = se.reduce((x, q) => x + (q.totalEmbroidry ?? 0), 0).toFixed(2),
        l = se.reduce((x, q) => x + (q.totalPcs ?? 0), 0).toFixed(2);
      Oe(parseFloat(c).toLocaleString()),
        Ae(parseFloat(A).toLocaleString()),
        we(parseFloat(l).toLocaleString());
    }, [se]);
    const C = {
        id: 'TOTAL_SUMMARY',
        fabricName: 'Total Summary',
        totalAmount: ke,
        totalEmbroidry: je,
        totalPcs: Ne
      },
      K = [...se, C],
      fe = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (c, A) => (A.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          renderCell: (c) =>
            c.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : c.value
        },
        {
          field: 'fabricName',
          headerName: 'Fabric',
          colSpan: (c, A) => (A.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (c) =>
            c.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : c.value
        },
        {
          field: 'componentName',
          headerName: 'Component',
          renderCell: (c) =>
            e.jsx(Ve, {
              label: c.value,
              sx: { backgroundColor: 'primary.dark', color: 'white' },
              color: void 0
            })
        },
        { field: 'vendorName', headerName: 'Vendor' },
        { field: 'colourName', headerName: 'Color' },
        { field: 'thaanQty', headerName: 'Thaan Quantity' },
        { field: 'availableQty', headerName: 'Available Quantitity' },
        { field: 'operatingMachineName', headerName: 'Operating Machine' },
        { field: 'noOfHeadsName', headerName: 'Working Head' },
        { field: 'cuttingSize', headerName: 'Cutting Size' },
        { field: 'rate', headerName: 'Rate' },
        { field: 'noOfStichesPerYard', headerName: 'Stiches Per Yard' },
        { field: 'noOfItemPerThaan', headerName: 'Item Per Thaan' },
        {
          field: 'totalEmbroidry',
          headerName: 'Total Embroidry',
          renderCell: (c) =>
            c.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: c.value
                })
              : c.value
        },
        { field: 'amountPerYard', headerName: 'Amount Per Yard' },
        {
          field: 'totalPcs',
          headerName: 'Total Pcs',
          renderCell: (c) =>
            c.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: c.value
                })
              : c.value
        },
        {
          field: 'totalAmount',
          headerName: 'Total Amount',
          renderCell: (c) =>
            c.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: c.value
                })
              : c.value
        },
        { field: 'costPerComponent', headerName: 'Cost Per Component' },
        { field: 'laserCutRate', headerName: 'LaserCut Rate' },
        { field: 'pcsForLaserCut', headerName: 'Laser Cut Pcs.' }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(rt, { src: Ht, sx: { background: 'transparent' } }),
              title: 'Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: g,
                      onChange: H,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: U.map((c) =>
                        e.jsx(
                          _,
                          { value: c.collectionId, children: c.collectionName },
                          c.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: s.designId,
                    onChange: H,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((c) =>
                      e.jsx(
                        _,
                        { value: c.designId, children: c.designNo },
                        c.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: s.batchNo,
                      onChange: H,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: ie.map((c) =>
                        e.jsx(
                          _,
                          { value: c.batchNo, children: c.batchNo },
                          c.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: s.baseColorName,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (c) => ({
                      ...(s.baseColorName !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        {},
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    })
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(he, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ft, {}),
              title: 'Add Schiffli ',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Qe, {
                onClick: k,
                sx: { mt: '-18px' },
                children: e.jsx(et, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            ' ',
            e.jsxs(Rt, {
              expanded: a,
              onChange: k,
              sx: {},
              children: [
                e.jsx(zt, {
                  expandIcon: e.jsx(et, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(Qt, {
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsxs(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: [
                          e.jsx(u, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Components',
                            name: 'componentId',
                            value: s.componentId,
                            onChange: H,
                            size: 'small',
                            required: !0,
                            error: !!Q.componentId,
                            helperText: Q.componentId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: be.map((c) =>
                              e.jsx(
                                _,
                                {
                                  value: c.componentId,
                                  children: c.componentName
                                },
                                c.componentId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Fabric',
                          defaultValue: '',
                          size: 'small',
                          name: 'fabricId',
                          value: s.fabricId,
                          onChange: H,
                          required: !0,
                          error: !!Q.fabricId,
                          helperText: Q.fabricId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ce.map((c) =>
                            e.jsx(
                              _,
                              { value: c.fabricId, children: c.fabric },
                              c.fabricId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Vendors',
                          defaultValue: '',
                          size: 'small',
                          name: 'vendorId',
                          value: s.vendorId,
                          onChange: H,
                          required: !0,
                          error: !!Q.vendorId,
                          helperText: Q.vendorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: pe.map((c) =>
                            e.jsx(
                              _,
                              { value: c.lookUpId, children: c.lookUpName },
                              c.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Color',
                          size: 'small',
                          name: 'colorId',
                          value: s.colorId,
                          onChange: H,
                          required: !0,
                          error: !!Q.colorId,
                          helperText: Q.colorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: N.map((c) =>
                            e.jsx(
                              _,
                              { value: c.colorId, children: c.color },
                              c.colorId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Po Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: s.poPcs,
                          disabled: !0,
                          onChange: H,
                          sx: (c) => ({
                            ...(s.poPcs !== '' && {
                              '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                                { backgroundColor: '#c9c9c9 !important' }
                            }),
                            '& .MuiInputBase-input.Mui-disabled': {
                              WebkitTextFillColor: 'black'
                            },
                            '& .MuiInputBase-root.Mui-disabled': {
                              backgroundColor: '#f9f9f9'
                            },
                            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Available Quantity',
                          fullWidth: !0,
                          size: 'small',
                          name: 'availableQty',
                          value: s.availableQty,
                          onChange: H,
                          sx: (c) => ({
                            ...(s.availableQty !== '' && {
                              '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                                { backgroundColor: '#c9c9c9 !important' }
                            }),
                            '& .MuiInputBase-input.Mui-disabled': {
                              WebkitTextFillColor: 'black'
                            },
                            '& .MuiInputBase-root.Mui-disabled': {
                              backgroundColor: '#f9f9f9'
                            },
                            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Thaan Quantity',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'thaanQty',
                          value: s.thaanQty,
                          onChange: H,
                          required: !0,
                          error: !!Q.thaanQty,
                          helperText: Q.thaanQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Operating Machine',
                          defaultValue: '',
                          size: 'small',
                          name: 'operatingMachineId',
                          value: s.operatingMachineId,
                          onChange: H,
                          required: !0,
                          error: !!Q.operatingMachineId,
                          helperText: Q.operatingMachineId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: M.map((c) =>
                            e.jsx(
                              _,
                              { value: c.lookUpId, children: c.lookUpName },
                              c.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Working Head',
                          defaultValue: '',
                          size: 'small',
                          name: 'workingHeadId',
                          value: s.workingHeadId,
                          onChange: H,
                          required: !0,
                          error: !!Q.workingHeadId,
                          helperText: Q.workingHeadId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ae.map((c) =>
                            e.jsx(
                              _,
                              { value: c.lookUpId, children: c.lookUpName },
                              c.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'cuttingSize',
                          value: s.cuttingSize,
                          onChange: H,
                          sx: (c) => ({
                            ...(s.cuttingSize !== '' && {
                              '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                                { backgroundColor: '#c9c9c9 !important' }
                            }),
                            '& .MuiInputBase-input.Mui-disabled': {
                              WebkitTextFillColor: 'black'
                            },
                            '& .MuiInputBase-root.Mui-disabled': {
                              backgroundColor: '#f9f9f9'
                            },
                            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'rate',
                          value: s.rate,
                          onChange: H,
                          required: !0,
                          error: !!Q.rate,
                          helperText: Q.rate,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Stiches Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'noOfStichesPerYard',
                          value: s.noOfStichesPerYard,
                          onChange: H,
                          required: !0,
                          error: !!Q.noOfStichesPerYard,
                          helperText: Q.noOfStichesPerYard,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Items Per Thaan',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'noOfItemPerThaan',
                          value: s.noOfItemPerThaan,
                          onChange: H,
                          required: !0,
                          error: !!Q.noOfItemPerThaan,
                          helperText: Q.noOfItemPerThaan,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Total Embroidry',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalEmbroidry',
                          type: 'number',
                          value: s.totalEmbroidry,
                          onChange: H,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Amount Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'amountPerYard',
                          value: s.amountPerYard,
                          onChange: H,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Total Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalPcs',
                          value: s.totalPcs,
                          onChange: H,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Cost Per Component',
                          fullWidth: !0,
                          size: 'small',
                          name: 'costPerComponent',
                          value: s.costPerComponent,
                          onChange: H,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(u, {
                          label: 'Total Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'totalAmount',
                          value: s.totalAmount,
                          onChange: H,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(Wt, {
                          control: e.jsx(_t, {
                            checked: s.laserCut,
                            onChange: Y,
                            name: 'laserCut'
                          }),
                          label: 'Laser Cut'
                        })
                      }),
                      s.laserCut
                        ? e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 4.5,
                            children: e.jsxs(r, {
                              container: !0,
                              spacing: 1,
                              width: 'Inherit',
                              children: [
                                e.jsx(r, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(u, {
                                    label: 'Laser Cut Rate',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'laserCutRate',
                                    value: s.laserCutRate,
                                    onChange: H,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                }),
                                e.jsx(r, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(u, {
                                    label: 'Pcs For LaserCut',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'pcsForLaserCut',
                                    value: s.pcsForLaserCut,
                                    onChange: H,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                })
                              ]
                            })
                          })
                        : null,
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        sx: { mt: 2 },
                        children: e.jsx(ge, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Se,
                          disabled: s.productionStatus === 3,
                          children: 'Save'
                        })
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(he, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ye, {}),
              title: 'View Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsx(r, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: e.jsx(qe, {
                  iColumns: fe,
                  initialRows: K,
                  disableDelete: s.productionStatus === 3,
                  disableEdit: s.productionStatus === 3,
                  setInitialData: b,
                  deleteApi:
                    'http://100.42.177.77:81/api/Schiffli/DeleteSchiffiById?schiffiId=',
                  deleteBy: 'schiffiliId',
                  refetch: z,
                  setAccordionExpanded: L,
                  fileName: 'Schffili List',
                  isLoading: j
                })
              })
            })
          ]
        })
      ]
    });
  },
  yo = vo,
  Co = ({
    additionalProcessData: n,
    setAdditionalProcessData: d,
    refetchAdditionalProcessList: v,
    handleClickOpen: j,
    productionStatus: h
  }) => {
    const { user: t } = We(),
      [b, s] = o.useState([]),
      { enqueueSnackbar: B } = ze(),
      [a, L] = o.useState({}),
      [k, X] = o.useState([]),
      m = b.reduce((z, f) => z + (f.quantity ?? 0), 0).toFixed(2);
    console.log('Quantity', m);
    const [y, g] = o.useState({
      additionalProcessDetId: 0,
      additionalProcessId: n.additionalProcessId || 0,
      designId: n.designNo || '',
      planningHeaderId: n.planningHeaderId || 0,
      batchNo: n.batchNo || '',
      componentName: n.componentName || '',
      componentId: n.componentId || '',
      colorName: n.colorName || '',
      colorId: n.colorId || '',
      fabricName: n.fabricName || '',
      fabricId: n.fabricId || '',
      uomId: n.uomId || '',
      uom: n.uom || '',
      vendorId: '',
      pcsPerComponent: n.pcsPerComponent || '',
      remainingPcsPerComponent: n.pcsPerComponent - m || '',
      processTypeName: n.processTypeName || '',
      processTypeId: n.processTypeId || '',
      quantity: '',
      ratePerPcs: 0,
      totalAmount: 0,
      costPerComponent: '',
      createdOn: new Date().toISOString(),
      createdBy: t.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: t.empId
    });
    o.useEffect(() => {
      g((z) => ({
        ...z,
        additionalProcessDetId: k.additionalProcessDetId || 0,
        vendorId: (k == null ? void 0 : k.vendorId) || '',
        quantity: (k == null ? void 0 : k.quantity) || '',
        ratePerPcs: (k == null ? void 0 : k.ratePerPcs) || '',
        remainingPcsPerComponent:
          z.remainingPcsPerComponent + (k == null ? void 0 : k.quantity) || '',
        totalAmount: (k == null ? void 0 : k.totalAmount) || '',
        costPerComponent: (k == null ? void 0 : k.costPerComponent) || 0,
        createdOn:
          (k == null ? void 0 : k.createdOn) || new Date().toISOString(),
        createdBy: (k == null ? void 0 : k.createdBy) || t.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: t.empId
      }));
    }, [k]),
      o.useEffect(() => {
        g({
          ...y,
          remainingPcsPerComponent:
            n.pcsPerComponent - m >= 0 ? n.pcsPerComponent - m : ''
        });
      }, [b, n.pcsPerComponent, m]);
    const { data: J } = _e(),
      { data: i, refetch: V } = Ga(y.additionalProcessId, {
        skip: !y.additionalProcessId
      }),
      [Z, T] = o.useState([]);
    o.useEffect(() => {
      if (J) {
        const z = J.result[0];
        T(z.vendorList);
      }
    }, [J]),
      o.useEffect(() => {
        i && s(i.result.map((z, f) => ({ id: f + 1, ...z })));
      }, [i, V]),
      console.log('initialRows', b);
    const W = (z) => {
      const { name: f, value: E } = z.target;
      g({ ...y, [f]: E }),
        g((re) => {
          const ie = { ...re, [f]: E };
          if (f === 'quantity' || f === 'remainingPcsPerComponent') {
            const S = ie.quantity,
              ce = ie.remainingPcsPerComponent;
            S > ce
              ? L((ne) => ({
                  ...ne,
                  quantity:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : L((ne) => ({ ...ne, quantity: '' }));
          }
          return ie;
        });
    };
    o.useEffect(() => {
      const z = () => {
        const E = parseFloat(y.quantity) || 0,
          re = parseFloat(y.ratePerPcs) || 0;
        return (E * re).toFixed(2);
      };
      g((E) => ({ ...E, totalAmount: z() }));
      const f = () => {
        const E = parseFloat(y.totalAmount) || 0,
          re = parseFloat(y.poPcs) || 0;
        return (E / re).toFixed(2);
      };
      g((E) => ({ ...E, costPerComponent: f() }));
    }, [y.quantity, y.ratePerPcs, y.totalAmount]);
    const R = async () => {
        if ((console.log(y), y.quantity > y.remainingPcsPerComponent)) {
          B('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const z = await Ce.post(
            'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcessDetails',
            y
          );
          console.log('Save response:', z.data),
            z.data.success
              ? B('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (B(`${z.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', z.data.message)),
            V(),
            g((f) => ({
              ...f,
              vendorId: '',
              pcsPerComponent: n.pcsPerComponent || '',
              quantity: '',
              ratePerPcs: 0,
              totalAmount: 0,
              costPerComponent: '',
              remainingPcsPerComponent: n.pcsPerComponent - m || '',
              createdOn: new Date().toISOString(),
              createdBy: t.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: t.empId
            })),
            v();
        } catch (z) {
          console.error('Error saving data:', z),
            B('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      ee = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        { field: 'processType', headerName: 'Process Type', flex: 2 },
        {
          field: 'pcsPerComponent',
          headerName: ' Pcs. Per Component',
          flex: 1
        },
        { field: 'quantity', headerName: 'Quantitity', flex: 1 },
        { field: 'ratePerPcs', headerName: 'Rate Per Pcs.', flex: 1 },
        { field: 'totalAmount', headerName: 'Total Amount', flex: 1 }
      ];
    return e.jsxs(Re, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs(r, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                fullWidth: !0,
                label: 'Select Design',
                name: 'designId',
                value: y.designId,
                onChange: W,
                size: 'small',
                disabled: !0,
                sx: (z) => ({
                  ...(y.designId !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsxs(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(u, {
                  fullWidth: !0,
                  label: 'Batch No.',
                  name: 'batchNo',
                  value: y.batchNo,
                  onChange: W,
                  size: 'small',
                  disabled: !0,
                  sx: (z) => ({
                    ...(y.batchNo !== '' && {
                      '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                        backgroundColor: '#c9c9c9 !important'
                      }
                    }),
                    '& .MuiInputBase-input.Mui-disabled': {
                      WebkitTextFillColor: 'black'
                    },
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#f9f9f9'
                    },
                    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                      {},
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: 'rgba(0, 0, 0, 0.87)'
                    }
                  }),
                  InputLabelProps: { sx: { color: 'black' } }
                }),
                ' '
              ]
            }),
            e.jsxs(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(u, {
                  fullWidth: !0,
                  label: 'Components',
                  name: 'componentName',
                  value: y.componentName,
                  onChange: W,
                  size: 'small',
                  disabled: !0,
                  sx: (z) => ({
                    ...(y.componentName !== '' && {
                      '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                        backgroundColor: '#c9c9c9 !important'
                      }
                    }),
                    '& .MuiInputBase-input.Mui-disabled': {
                      WebkitTextFillColor: 'black'
                    },
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#f9f9f9'
                    },
                    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                      {},
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: 'rgba(0, 0, 0, 0.87)'
                    }
                  }),
                  InputLabelProps: { sx: { color: 'black' } }
                }),
                ' '
              ]
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                fullWidth: !0,
                label: 'Select Fabric',
                defaultValue: '',
                size: 'small',
                name: 'fabricName',
                value: y.fabricName,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.fabricName !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                fullWidth: !0,
                label: 'Color',
                size: 'small',
                name: 'colorName',
                value: y.colorName,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.colorName !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                fullWidth: !0,
                label: 'Process Type',
                defaultValue: '',
                size: 'small',
                name: 'processTypeName',
                value: y.processTypeName,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.processTypeName !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(u, {
                label: 'Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'pcsPerComponent',
                value: y.pcsPerComponent,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.pcsPerComponent !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(u, {
                label: 'Remaining Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'remainingPcsPerComponent',
                value: y.remainingPcsPerComponent,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.remainingPcsPerComponent !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                label: 'UOM',
                fullWidth: !0,
                size: 'small',
                name: 'uom',
                value: y.uom,
                onChange: W,
                disabled: !0,
                sx: (z) => ({
                  ...(y.uom !== '' && {
                    '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                      backgroundColor: '#c9c9c9 !important'
                    }
                  }),
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'black'
                  },
                  '& .MuiInputBase-root.Mui-disabled': {
                    backgroundColor: '#f9f9f9'
                  },
                  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                    {},
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            })
          ]
        }),
        e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(r, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: y.vendorId,
                onChange: W,
                disabled: !y.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } },
                children: Z.map((z) =>
                  e.jsx(
                    _,
                    { value: z.lookUpId, children: z.lookUpName },
                    z.lookUpId
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                label: 'Quantity',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'quantity',
                value: y.quantity,
                onChange: W,
                disabled: !y.remainingPcsPerComponent,
                error: !!a.quantity,
                helperText: a.quantity,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                label: 'Rate Per Pcs',
                type: 'number',
                fullWidth: !0,
                size: 'small',
                name: 'ratePerPcs',
                value: y.ratePerPcs,
                onChange: W,
                disabled: !y.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(u, {
                label: 'Total Amount',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'totalAmount',
                value: y.totalAmount,
                onChange: W,
                disabled: !y.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(ge, {
                variant: 'contained',
                size: 'small',
                onClick: R,
                disabled: !y.remainingPcsPerComponent || h === 3,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(he, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx(r, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsx(r, {
            sx: { marginTop: 2 },
            item: !0,
            xs: 12,
            children: e.jsx(qe, {
              iColumns: ee,
              initialRows: b,
              disableDelete: h === 3,
              disableEdit: h === 3,
              setInitialData: X,
              deleteApi:
                'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=',
              deleteBy: 'additionalProcessDetId',
              refetch: V
            })
          })
        })
      ]
    });
  },
  Mo = ({ initialValues: n }) => {
    const { user: d } = We(),
      { enqueueSnackbar: v } = ze(),
      [j, h] = o.useState(!0),
      [t, b] = o.useState([]),
      [s, B] = o.useState({
        additionalProcessId: 0,
        designId: '',
        planningHeaderId: 0,
        batchNo: '',
        componentId: '',
        colorId: '',
        fabricId: '',
        uomId: '',
        baseColorName: '',
        poPcs: '',
        pcsPerComponent: '',
        processTypeId: '',
        createdOn: new Date().toISOString(),
        createdBy: d.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: d.empId
      });
    console.log('initialData', t),
      o.useEffect(() => {
        B({
          ...s,
          additionalProcessId:
            (t == null ? void 0 : t.additionalProcessId) || 0,
          componentId: (t == null ? void 0 : t.componentId) || '',
          fabricId: (t == null ? void 0 : t.fabricId) || '',
          colorId: (t == null ? void 0 : t.colorId) || '',
          pcsPerComponent: (t == null ? void 0 : t.pcsPerComponent) || '',
          uomId: (t == null ? void 0 : t.uomId) || '',
          processTypeId: (t == null ? void 0 : t.processTypeId) || '',
          createdOn:
            (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
          createdBy: (t == null ? void 0 : t.createdBy) || d.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: d.empId
        });
      }, [t]);
    const [a, L] = o.useState(!1),
      { data: k } = $e(),
      [X, m] = o.useState('');
    o.useEffect(() => {
      m(n.collectionId);
    }, []);
    const { data: y } = _e(),
      { data: g, refetch: J } = Xe(X, { skip: !X }),
      { data: i, refetch: V } = ot(s.designId, { skip: !s.designId }),
      { data: Z } = ut(
        { batchNo: s.planningHeaderId, componentId: s.componentId },
        { skip: !s.planningHeaderId || !s.componentId }
      ),
      { data: T } = pt(
        {
          batchNo: s.planningHeaderId,
          componentId: s.componentId,
          fabricId: s.fabricId
        },
        { skip: !s.planningHeaderId || !s.componentId || !s.fabricId }
      ),
      { data: W, refetch: R } = Ya(s.planningHeaderId, {
        skip: !s.planningHeaderId
      }),
      { data: ee } = mt(s.planningHeaderId, { skip: !s.planningHeaderId });
    console.log('lookupData', y),
      console.log('collectionData', k),
      console.log('colorData', T);
    const [D, z] = o.useState([]),
      [f, E] = o.useState([]),
      [re, ie] = o.useState([]),
      [S, ce] = o.useState([]),
      [ne, pe] = o.useState([]),
      [O, M] = o.useState([]),
      [F, ae] = o.useState([]),
      [P, N] = o.useState([]),
      [G, se] = o.useState([]),
      [le, be] = o.useState([]),
      [te, U] = o.useState([]);
    console.log('batchData', i);
    const [Y, H] = o.useState([]);
    o.useEffect(() => {
      k && H(k.result);
    }, [k]),
      o.useEffect(() => {
        g && z(g.result);
      }, [g]),
      o.useEffect(() => {
        i && E(i.result);
      }, [i]),
      o.useEffect(() => {
        Z && ie(Z.result);
      }, [Z]),
      o.useEffect(() => {
        T && se(T.result);
      }, [T]),
      o.useEffect(() => {
        ee && U(ee.result);
      }, [ee]),
      o.useEffect(() => {
        if (y) {
          const p = y.result[0];
          pe(p.uomList), M(p.processList);
        }
      }, [y]),
      o.useEffect(() => {
        W && (h(!1), be(W.result.map((p, c) => ({ id: c + 1, ...p }))));
      }, [W, R]),
      o.useEffect(() => {
        if (y) {
          const p = y.result[0];
          ce(p.vendorList), ae(p.operatingMachineList), N(p.workingHeadList);
        }
      }, [y]),
      console.log('initialRows', le),
      o.useEffect(() => {
        s.productionStatus === 3 &&
          v('Production Staus is completed. Select other Collection!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
      }, [s.productionStatus]);
    const Q = (p) => {
      const { name: c, value: A } = p.target;
      if (c === 'collectionId') {
        const l = Y.find((x) => x.collectionId === parseInt(A));
        m(A),
          be([]),
          h(!0),
          B({
            ...s,
            collectionId: A,
            designId: '',
            planningHeaderId: 0,
            productionStatus: l ? l.productionStatus : '',
            batchNo: '',
            componentId: '',
            colorId: '',
            fabricId: '',
            uomId: '',
            baseColorName: '',
            poPcs: '',
            pcsPerComponent: '',
            processTypeId: '',
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          });
      } else if (c === 'designId') {
        const l = D.find((x) => x.designId === parseInt(A));
        be([]),
          h(!0),
          B({
            ...s,
            designId: A,
            baseColorId: l ? l.colorId : '',
            baseColorName: l ? l.colorName : '',
            planningHeaderId: 0,
            batchNo: '',
            componentId: '',
            colorId: '',
            fabricId: '',
            uomId: '',
            poPcs: '',
            pcsPerComponent: '',
            processTypeId: '',
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          });
      } else if (c === 'batchNo') {
        const l = f.find((x) => x.batchNo === A);
        B({
          ...s,
          batchNo: A,
          planningHeaderId: l ? l.planningHeaderId : '',
          poPcs: l ? l.poPcs : '',
          componentId: '',
          colorId: '',
          fabricId: '',
          uomId: '',
          pcsPerComponent: '',
          processTypeId: '',
          createdOn: new Date().toISOString(),
          createdBy: d.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: d.empId
        }),
          L(!0);
      } else B({ ...s, [c]: A });
    };
    console.log('colors', G);
    const me = async () => {
      console.log('formData', s);
      try {
        const p = await Ce.post(
          'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcess',
          s
        );
        console.log('Save response:', p.data),
          p.data.success
            ? v('Process saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (v(`${p.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', p.data.message)),
          B((c) => ({
            additionalProcessId: 0,
            designId: c.designId,
            planningHeaderId: c.planningHeaderId,
            batchNo: c.batchNo,
            baseColorName: c.baseColorName,
            poPcs: c.poPcs,
            componentId: '',
            colorId: '',
            fabricId: '',
            uomId: '',
            pcsPerComponent: '',
            processTypeId: '',
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          })),
          R();
      } catch (p) {
        console.error('Error saving data:', p),
          v('Process not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    console.log('formData', s),
      o.forwardRef(function (c, A) {
        return e.jsx(Va, { direction: 'up', ref: A, ...c });
      });
    const [Se, Pe] = o.useState({}),
      [ke, Oe] = o.useState(!1),
      je = (p) => {
        Pe(p), Oe(!0);
      },
      Ae = () => {
        Oe(!1), Pe({}), R();
      },
      [Ne, we] = o.useState(0);
    o.useEffect(() => {
      const p = le.reduce((c, A) => c + (A.assignedQty ?? 0), 0).toFixed(2);
      we(parseFloat(p).toLocaleString());
    }, [le]);
    const C = [...le, { id: 'TOTAL_SUMMARY', assignedQty: Ne }],
      K = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (p, c) => (c.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : p.value
        },
        { field: 'designNo', headerName: 'Design' },
        { field: 'batchNo', headerName: 'Batch' },
        {
          field: 'componentName',
          headerName: 'Component',
          renderCell: (p) =>
            e.jsx(Ve, {
              label: p.value,
              sx: { backgroundColor: 'primary.dark', color: 'white' },
              color: void 0
            })
        },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'processTypeName', headerName: 'Process Type' },
        { field: 'pcsPerComponent', headerName: 'Pcs Per Component' },
        {
          field: 'assignedQty',
          headerName: 'Assigned Quantity',
          colSpan: (p, c) => (c.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          valueGetter: (p) => p,
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: p.value
                })
              : p.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (p) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(Qe, {
                color: 'primary',
                onClick: () => je(p.row),
                children: e.jsx(It, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(rt, { src: Ht, sx: { background: 'transparent' } }),
              title: 'Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: X,
                      onChange: Q,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Y.map((p) =>
                        e.jsx(
                          _,
                          { value: p.collectionId, children: p.collectionName },
                          p.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: s.designId,
                    onChange: Q,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: D.map((p) =>
                      e.jsx(
                        _,
                        { value: p.designId, children: p.designNo },
                        p.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: s.batchNo,
                      onChange: Q,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: f.map((p) =>
                        e.jsx(
                          _,
                          { value: p.batchNo, children: p.batchNo },
                          p.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: s.baseColorName,
                    onChange: Q,
                    disabled: !0,
                    sx: (p) => ({
                      ...(s.baseColorName !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        {},
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(he, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(u, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: s.componentId,
                      onChange: Q,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: te.map((p) =>
                        e.jsx(
                          _,
                          { value: p.componentId, children: p.componentName },
                          p.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: s.fabricId,
                    onChange: Q,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: re.map((p) =>
                      e.jsx(
                        _,
                        { value: p.fabricId, children: p.fabric },
                        p.fabricId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: s.colorId,
                    onChange: Q,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: G.map((p) =>
                      e.jsx(
                        _,
                        { value: p.colorId, children: p.color },
                        p.colorId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: s.poPcs,
                    onChange: Q,
                    disabled: !0,
                    sx: (p) => ({
                      ...(s.poPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          { backgroundColor: '#c9c9c9 !important' }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black'
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9'
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        {},
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)'
                      }
                    }),
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(u, {
                    label: 'Pcs. Per Component',
                    fullWidth: !0,
                    size: 'small',
                    name: 'pcsPerComponent',
                    value: s.pcsPerComponent,
                    onChange: Q,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'UOM',
                    type: 'number',
                    defaultValue: 140,
                    size: 'small',
                    name: 'uomId',
                    value: s.uomId,
                    onChange: Q,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ne.map((p) =>
                      e.jsx(
                        _,
                        { value: p.lookUpId, children: p.lookUpName },
                        p.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processTypeId',
                    value: s.processTypeId,
                    onChange: Q,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: O.map((p) =>
                      e.jsx(
                        _,
                        { value: p.lookUpId, children: p.lookUpName },
                        p.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 0 },
                  children: e.jsx(ge, {
                    variant: 'contained',
                    size: 'small',
                    onClick: me,
                    disabled: s.productionStatus === 3,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(he, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ye, {}),
              title: 'View Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(r, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  e.jsx(qe, {
                    iColumns: K,
                    initialRows: C,
                    disableDelete: s.productionStatus === 3,
                    disableEdit: s.productionStatus === 3,
                    setInitialData: b,
                    deleteApi:
                      'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcess?adId=',
                    deleteBy: 'additionalProcessId',
                    refetch: R,
                    setAccordionExpanded: L,
                    fileName: 'AdditionalProcess',
                    isLoading: j
                  }),
                  e.jsxs(nt, {
                    open: ke,
                    onClose: Ae,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ht, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px'
                        },
                        children: [
                          e.jsx(ve, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Additional Process > Assign Vendors '
                          }),
                          e.jsx(Qe, {
                            onClick: Ae,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ft, {})
                          })
                        ]
                      }),
                      e.jsxs(st, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Co, {
                            additionalProcessData: Se,
                            productionStatus: s.productionStatus,
                            setAdditionalProcessData: Pe,
                            refetchAdditionalProcessList: R,
                            handleClickOpen: je
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  },
  So = Mo;
function Po({ initialValues: n }) {
  const [d, v] = o.useState(!0),
    { enqueueSnackbar: j } = ze(),
    { data: h } = _e(),
    [t, b] = o.useState([]),
    [s, B] = o.useState([]),
    [a, L] = o.useState([]),
    [k, X] = o.useState([]),
    [m, y] = o.useState([]),
    [g, J] = o.useState([]),
    [i, V] = o.useState([]),
    { user: Z } = We();
  o.useEffect(() => {
    h &&
      (X(h.result[0].vendorList),
      L(h.result[0].serviceList),
      b(h.result[0].serviceTypeList),
      J(h.result[0].uomList));
  }, [h]);
  const [T, W] = o.useState({
    additionalServiceId: 0,
    collectionId: '',
    batchNo: '',
    serviceTypeId: '',
    serviceListId: '',
    vendorId: '',
    poPcs: '',
    qty: '',
    uomId: '',
    rate: '',
    totalAmount: '',
    costperPiece: '',
    uom: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });
  o.useEffect(() => {
    W({
      ...T,
      additionalServiceId: i.additionalServiceId || 0,
      collectionId: (i == null ? void 0 : i.collectionId) || '',
      serviceTypeId: (i == null ? void 0 : i.serviceTypeId) || '',
      serviceListId: (i == null ? void 0 : i.serviceListId) || '',
      vendorId: (i == null ? void 0 : i.vendorId) || '',
      qty: (i == null ? void 0 : i.qty) || '',
      uomId: (i == null ? void 0 : i.uomId) || '',
      rate: (i == null ? void 0 : i.rate) || '',
      totalAmount: (i == null ? void 0 : i.totalAmount) || 0,
      UOM: (i == null ? void 0 : i.uom) || 0,
      uom: (i == null ? void 0 : i.uom) || '',
      createdOn: (i == null ? void 0 : i.createdOn) || new Date().toISOString(),
      createdBy: (i == null ? void 0 : i.createdBy) || Z.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: Z.empId
    });
  }, [i]);
  const { data: R, refetch: ee } = Bt(T.collectionId, {
    skip: !T.collectionId
  });
  o.useEffect(() => {
    W({ ...T, collectionId: (n == null ? void 0 : n.collectionId) || '' });
  }, [W]),
    o.useEffect(() => {
      R && B(R);
    }, [R, ee]),
    o.useEffect(() => {
      T.productionStatus === 3 &&
        j('Production Staus is completed. Select other Collection!', {
          variant: 'warning',
          autoHideDuration: 5e3
        });
    }, [T.productionStatus]);
  const D = async (O) => {
    const { name: M, value: F } = O.target;
    if (
      (console.log(`Updating ${M} to ${F}`),
      W({ ...T, [M]: F }),
      M === 'collectionId')
    ) {
      const ae = m.find((P) => P.collectionId === F);
      W({
        ...T,
        collectionId: F,
        productionStatus: ae ? ae.productionStatus : '',
        poPcs: ''
      });
    } else if (M === 'batchNo') {
      const ae = s.find((P) => P.distinctId === F);
      W({
        ...T,
        batchNo: F,
        poPcs: ae ? ae.poPcsSum : '',
        createdOn: new Date().toISOString(),
        createdBy: Z.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: Z.empId
      }),
        setAccordionExpanded(!0);
    }
  };
  o.useEffect(() => {
    const O = () => {
      const F = parseFloat(T.qty) || 0,
        ae = parseFloat(T.rate) || 0;
      return (F * ae).toFixed(2);
    };
    W((F) => ({ ...F, totalAmount: O() }));
    const M = () => {
      const F = parseFloat(T.poPcs) || 0,
        ae = parseFloat(T.totalAmount) || 0;
      return (F / ae).toFixed(2);
    };
    W((F) => ({ ...F, costperPiece: M() }));
  }, [T.qty, T.rate, T.totalAmount, T.costperPiece]);
  const z = async () => {
    try {
      const O = await Ce.post(
        'http://100.42.177.77:81/api/AdditionalServices/SaveAdditionalServices',
        T
      );
      console.log('Form data saved:', O.data),
        W({
          additionalServiceId: 0,
          collectionId: '',
          serviceTypeId: '',
          serviceListId: '',
          vendorId: '',
          poPcs: '',
          qty: '',
          uomId: 'string',
          rate: '',
          totalAmount: '',
          costperPiece: ''
        }),
        onSaveSuccess && onSaveSuccess();
    } catch (O) {
      console.error('Error saving data:', O);
    }
  };
  o.useEffect(() => {
    (async () => {
      try {
        const M = await Ce.get(
          'http://100.42.177.77:81/api/PrePlanning/GetCollectionListFromPlanningHeader'
        );
        console.log('GetCollectionFromPlanningHeader', M), y(M.data.result);
      } catch (M) {
        console.error('Error fetching design options:', M);
      }
    })();
  }, []);
  const [f, E] = o.useState([]),
    re = o.useCallback(async () => {
      try {
        const O = await Ce.get(
          `http://100.42.177.77:81/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${T.collectionId}`
        );
        Array.isArray(O.data.result)
          ? (v(!1), E(O.data.result.map((M, F) => ({ id: F + 1, ...M }))))
          : (console.error(
              'API returned unexpected data format:',
              O.data.result
            ),
            E([]));
      } catch (O) {
        console.error('Error fetching data:', O), E([]);
      }
    }, [T.collectionId]);
  o.useEffect(() => {
    re();
  }, [re]);
  const [ie, S] = o.useState(0);
  o.useEffect(() => {
    const O = f.reduce((M, F) => M + (F.totalAmount ?? 0), 0).toFixed(2);
    S(parseFloat(O).toLocaleString());
  }, [f]);
  const ce = [...f, { id: 'TOTAL_SUMMARY', totalAmount: ie }],
    ne = [
      {
        field: 'id',
        headerName: 'Sr#',
        colSpan: (O, M) => (M.id === 'TOTAL_SUMMARY' ? 4 : void 0),
        renderCell: (O) =>
          O.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: 'black', fontWeight: 'bold' },
                children: 'Total Summary'
              })
            : O.value
      },
      { field: 'collectionName', headerName: 'Collection Name' },
      {
        field: 'serviceType',
        headerName: 'Service Type',
        renderCell: (O) =>
          e.jsx(Ve, {
            label: O.value,
            sx: { backgroundColor: 'primary.dark', color: 'white' },
            color: void 0
          })
      },
      {
        field: 'serviceListName',
        headerName: 'Service List Name',
        renderCell: (O) =>
          e.jsx(Ve, {
            label: O.value,
            sx: { backgroundColor: 'success.dark', color: 'white' },
            color: void 0
          })
      },
      { field: 'vendor', headerName: 'Vendor' },
      { field: 'poPcs', headerName: 'PO Pieces' },
      { field: 'qty', headerName: 'Quantity' },
      { field: 'uom', headerName: 'UOM' },
      { field: 'rate', headerName: 'Rate' },
      {
        field: 'totalAmount',
        headerName: 'Total Amount',
        colSpan: (O, M) => (M.id === 'TOTAL_SUMMARY' ? 3 : void 0),
        renderCell: (O) =>
          O.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: '#a11f23', fontWeight: 'bold' },
                children: O.value
              })
            : O.value
      },
      { field: 'costperPiece', headerName: 'Cost per Piece' }
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(Me, {
        variant: 'outlined',
        children: [
          e.jsx(ye, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsxs(r, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(r, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(u, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Select Collection',
                  name: 'collectionId',
                  value: T.collectionId,
                  onChange: D,
                  size: 'small',
                  InputLabelProps: { sx: { color: 'black' } },
                  children:
                    m.length > 0
                      ? m.map((O) =>
                          e.jsx(
                            _,
                            {
                              id: 'collectionId',
                              value: O.collectionId,
                              children: O.collectionName
                            },
                            O.collectionId
                          )
                        )
                      : e.jsx(_, {
                          disabled: !0,
                          children: 'No Collections Available'
                        })
                })
              }),
              e.jsxs(r, {
                item: !0,
                xs: 12,
                md: 3,
                children: [
                  e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Batch No.',
                    name: 'batchNo',
                    value: T.batchNo,
                    onChange: D,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: s.map((O) =>
                      e.jsx(
                        _,
                        { value: O.distinctId, children: O.distinctId },
                        O.distinctId
                      )
                    )
                  }),
                  ' '
                ]
              }),
              e.jsx(r, {
                item: !0,
                md: 3,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service Type',
                  name: 'serviceTypeId',
                  value: T.serviceTypeId,
                  onChange: D,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: t.map((O) =>
                    e.jsx(
                      _,
                      { value: O.lookUpId, children: O.lookUpName },
                      O.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 3,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service List Id',
                  name: 'serviceListId',
                  value: T.serviceListId,
                  onChange: D,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: a.map((O) =>
                    e.jsx(
                      _,
                      { value: O.lookUpId, children: O.lookUpName },
                      O.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(u, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Vendor Name',
                  size: 'small',
                  name: 'vendorId',
                  value: T.vendorId,
                  onChange: D,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: k.map((O) =>
                    e.jsx(
                      _,
                      { value: O.lookUpId, children: O.lookUpName },
                      O.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-required',
                  label: "PO PC's",
                  name: 'poPcs',
                  value: T.poPcs,
                  onChange: D,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  disabled: !0,
                  sx: (O) => ({
                    ...(T.poPcs !== '' && {
                      '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input': {
                        backgroundColor: '#c9c9c9 !important'
                      }
                    }),
                    '& .MuiInputBase-input.Mui-disabled': {
                      WebkitTextFillColor: 'black'
                    },
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#f9f9f9'
                    },
                    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                      {},
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: 'rgba(0, 0, 0, 0.87)'
                    }
                  }),
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-required',
                  label: 'Qty',
                  name: 'qty',
                  value: T.qty,
                  onChange: D,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  fullWidth: !0,
                  select: !0,
                  label: 'UOM',
                  defaultValue: '',
                  size: 'small',
                  name: 'uomId',
                  value: T.uomId,
                  onChange: D,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: g.map((O) =>
                    e.jsx(
                      _,
                      { value: O.lookUpId, children: O.lookUpName },
                      O.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-required',
                  label: 'Rate',
                  name: 'rate',
                  value: T.rate,
                  onChange: D,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-required',
                  label: 'Total Amount',
                  name: 'totalAmount',
                  value: T.totalAmount,
                  onChange: D,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 1.5,
                width: 'inherit',
                children: e.jsx(u, {
                  id: 'outlined-required',
                  label: 'Cost per Piece',
                  name: 'costperPiece',
                  value: T.costperPiece,
                  onChange: D,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 12,
                width: 'inherit',
                paddingX: 1,
                textAlign: 'right',
                children: e.jsx(ge, {
                  variant: 'contained',
                  color: 'primary',
                  size: 'small',
                  disabled: T.productionStatus === 3,
                  onClick: z,
                  children: 'Save'
                })
              })
            ]
          })
        ]
      }),
      e.jsx(he, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      e.jsxs(Me, {
        variant: 'outlined',
        children: [
          e.jsx(ye, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'View Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsx(qe, {
            iColumns: ne,
            initialRows: ce,
            disableDelete: T.productionStatus === 3,
            disableEdit: T.productionStatus === 3,
            isLoading: d,
            setInitialData: V,
            deleteApi:
              'http://100.42.177.77:81/api/AdditionalServices/DeleteAdditionalProcess?servicesId=',
            refetch: re,
            deleteBy: 'additionalServiceId'
          })
        ]
      })
    ]
  });
}
$a(Ka)(({ theme: n }) => ({
  backgroundColor: n.palette.primary.main,
  color: n.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${n.palette.grey[400]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${n.palette.grey[400]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));
const jo = ({
    initialValues: n,
    setActiveStep: d,
    collectionId: v,
    setInitialValues: j
  }) => {
    var ke, Oe, je, Ae, Ne, we;
    const { user: h } = We(),
      { enqueueSnackbar: t } = ze();
    o.useState([]);
    const { data: b } = $e(),
      [s, B] = o.useState(null),
      [a, L] = o.useState(!1);
    ct();
    const [k, X] = o.useState(!1),
      [m, y] = o.useState(v || ''),
      [g, J] = o.useState({
        designId: '',
        planningHeaderId: '',
        batchNo: '',
        distinctId: '',
        collectionBatchId: '',
        collectionId: m || ''
      }),
      i = (C) => {
        Se.current &&
          Se.current.autosizeColumns &&
          Se.current.autosizeColumns({
            includeOutliers: !0,
            includeHeaders: !0
          });
      },
      [V, Z] = o.useState([]),
      T = (C) => {
        Z(C), console.log('New Selection:', C);
      },
      { data: W, refetch: R } = Bt(m, { skip: !m }),
      [ee, D] = o.useState([]),
      [z, f] = o.useState([]),
      [E, re] = o.useState([]);
    console.log('distinctData', W),
      o.useEffect(() => {
        b && re(b.result);
      }, [b]),
      o.useEffect(() => {
        W && (console.log('Distinct Data:', W.result), f(W || []));
      }, [W]);
    const ie = (C) => {
        const { name: K, value: fe } = C.target;
        if (
          (console.log(`handleChange called with name: ${K}, value: ${fe}`),
          K === 'collectionId')
        )
          y(fe), J({ ...g, collectionId: fe, collectionBatchId: '' }), R(v);
        else if (K === 'collectionBatchId')
          J({
            ...g,
            collectionBatchId: fe,
            planningHeaderId: g.planningHeaderId
          });
        else {
          const p = { ...g, [K]: fe };
          J(p);
        }
      },
      { data: S, refetch: ce } = Xa(
        {
          collectionId: g.collectionId,
          collectionBatchId: g.collectionBatchId
        },
        { skip: !g.collectionId || !g.collectionBatchId }
      );
    o.useEffect(() => {
      S && S.length > 0 && D(S);
    }, [S]),
      console.log('Selected collection ID:', m),
      console.log('distinctCollectionList data:', z);
    const ne = async (C) => {
      L(!0);
      try {
        console.log('Fetching Summary Data for ID:', C);
        const K = await Ce.get(
          `http://100.42.177.77:81/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${C}`
        );
        K.data.success ? B(K.data.result) : console.error(K.data.message);
      } catch (K) {
        console.error('Failed to fetch summary data', K);
      } finally {
        L(!1);
      }
    };
    console.log('formData', g);
    const pe = (C) => {
        console.log('Selected PlanningHeaderId:', C), ne(C), X(!0);
      },
      O = () => {
        X(!1);
      },
      M = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'planningProcessTypeName', headerName: 'Process Type' },
        { field: 'componentsCount', headerName: 'Components Count' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        {
          field: 'totalFabricSum',
          headerName: 'Total Fabric Sum',
          valueGetter: (C) => C.toLocaleString()
        },
        {
          field: 'totalFabricRequiredSum',
          headerName: 'Total Fabric Required Sum',
          valueGetter: (C) => C.toLocaleString()
        }
      ],
      F = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        {
          field: 'totalExcGst',
          headerName: 'Total Excluding GST',
          valueGetter: (C) => C.toLocaleString()
        },
        {
          field: 'totalIncGst',
          headerName: 'Total Including GST',
          valueGetter: (C) => C.toLocaleString()
        }
      ],
      ae = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'processType', headerName: 'Process Type' },
        { field: 'assignedQtySum', headerName: 'Assigned Qty Sum' },
        {
          field: 'availableQtySum',
          headerName: 'Available Qty Sum',
          valueGetter: (C) => C.toLocaleString()
        },
        { field: 'colorCount', headerName: 'Color Count' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        { field: 'outputQtySum', headerName: 'Output Qty Sum' },
        {
          field: 'totalIncGst',
          headerName: 'Total Including GST',
          valueGetter: (C) => C.toLocaleString()
        }
      ],
      P = [
        { field: 'designNo', headerName: 'Design No', width: 150 },
        { field: 'batchNo', headerName: 'Batch No', width: 150 },
        { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 },
        {
          field: 'availableQtySum',
          headerName: 'Available Qty Sum',
          width: 150
        },
        { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
        { field: 'componentCount', headerName: 'Component Count', width: 150 },
        { field: 'requiredPcsSum', headerName: 'Required Pcs Sum', width: 150 },
        {
          field: 'totalAmountSum',
          headerName: 'Total Amount Sum',
          valueGetter: (C) => C.toLocaleString(),
          width: 150
        }
      ],
      N = [
        {
          field: 'availableQtySum',
          headerName: 'Available Qty Sum',
          valueGetter: (C) => C.toLocaleString(),
          width: 150
        },
        { field: 'totalPcsSum', headerName: 'Total Pcs Sum', width: 150 },
        { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
        { field: 'componentCount', headerName: 'Component Count', width: 150 }
      ],
      G = [
        { field: 'designNo', headerName: 'Design No', width: 150 },
        { field: 'batchNo', headerName: 'Batch No', width: 150 },
        { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
        {
          field: 'pcsPerComponent',
          headerName: 'Pcs Per Component',
          width: 150
        },
        { field: 'assignedQtySum', headerName: 'Assigned Qty Sum', width: 150 }
      ],
      se = [
        { field: 'collectionName', headerName: 'Collection Name' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'designNo', headerName: 'Design No' },
        { field: 'orderNumber', headerName: 'Order Number' },
        { field: 'designerName', headerName: 'Designer Name' },
        { field: 'colorName', headerName: 'Color Name' },
        { field: 'poPcs', headerName: 'PO Pieces' },
        { field: 'batchStatusName', headerName: 'Batch Status' },
        {
          field: 'planningDate',
          headerName: 'Planning Date',
          valueGetter: (C) =>
            new Date(C).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'action',
          headerName: 'Action',
          renderCell: (C) =>
            e.jsx(bt, {
              variant: 'outlined',
              size: 'small',
              'aria-label': 'outlined primary button group',
              children: e.jsx(ge, {
                onClick: () => pe(C.row.planningHeaderId),
                children: 'View'
              })
            }),
          sortable: !1,
          filterable: !1
        }
      ],
      [le, be] = o.useState([]);
    o.useEffect(() => {
      const C =
        (ee == null
          ? void 0
          : ee.map((K, fe) => ({ id: K.planningHeaderId || fe, ...K }))) || [];
      be(C);
    }, [ee]);
    const te =
        ((ke = s == null ? void 0 : s.prePlanningList) == null
          ? void 0
          : ke.map((C, K) => ({ id: K, ...C }))) || [],
      U =
        ((Oe = s == null ? void 0 : s.fabricationList) == null
          ? void 0
          : Oe.map((C, K) => ({ id: K, ...C }))) || [],
      Y =
        ((je = s == null ? void 0 : s.dyeingPrintingList) == null
          ? void 0
          : je.map((C, K) => ({ id: K, ...C }))) || [],
      H =
        ((Ae = s == null ? void 0 : s.embroideryList) == null
          ? void 0
          : Ae.map((C, K) => ({ id: K, ...C }))) || [],
      Q =
        ((Ne = s == null ? void 0 : s.schiffiliList) == null
          ? void 0
          : Ne.map((C, K) => ({ id: K, ...C }))) || [],
      me =
        ((we = s == null ? void 0 : s.additionalProcessList) == null
          ? void 0
          : we.map((C, K) => ({ id: K, ...C }))) || [],
      Se = ao(),
      Pe = async () => {
        if (V.length === 0) {
          t('No rows selected', { variant: 'warning' });
          return;
        }
        const C = V,
          K = {
            planningHeaderId: C,
            collectionBatchId: g.collectionBatchId,
            createdBy: h.empId,
            batchStatus: 3
          };
        try {
          (
            await Ce.post(
              'http://100.42.177.77:81/api/PrePlanning/FinalizePrePlanningBatch',
              K
            )
          ).data === !0
            ? (t('Pre Planning Finalized successfully', { variant: 'success' }),
              console.log('requestbody', K),
              be((p) => p.filter((c) => !C.includes(c.id))))
            : t('Failed to save data', { variant: 'error' });
        } catch (fe) {
          console.error('Failed to save data', fe),
            t('Failed to save data', { variant: 'error' });
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Summary',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Collection',
                    name: 'collectionId',
                    value: g.collectionId,
                    onChange: ie,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((C) =>
                      e.jsx(
                        _,
                        { value: C.collectionId, children: C.collectionName },
                        C.collectionId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(u, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Collection Batch',
                    name: 'collectionBatchId',
                    value: g.collectionBatchId,
                    onChange: ie,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children:
                      z.length > 0
                        ? z.map((C) =>
                            e.jsx(
                              _,
                              {
                                value: C.collectionBatchId,
                                children: C.distinctId
                              },
                              C.collectionBatchId
                            )
                          )
                        : e.jsx(_, {
                            disabled: !0,
                            children: 'No batches available'
                          })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 4,
                  textAlign: 'right',
                  sx: { mt: 1 },
                  children: e.jsx(ge, {
                    variant: 'contained',
                    size: 'small',
                    onClick: Pe,
                    color: 'success',
                    children: 'Finalize'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(r, { item: !0, xs: 12, md: 12, mb: 1 }),
        e.jsxs(Me, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Summary Details',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'inherit',
              sx: { paddingY: 1, paddingX: 1 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  paddingTop: 1,
                  children: e.jsx(Ge, {
                    rows: le,
                    columns: se,
                    checkboxSelection: !0,
                    getRowId: (C) => C.id,
                    disableRowSelectionOnClick: !0,
                    isRowSelectable: (C) => C.row.statusId !== 3,
                    autosizeOnMount: !0,
                    apiRef: Se,
                    onStateChange: i,
                    onRowSelectionModelChange: (C) => T(C)
                  })
                }),
                e.jsxs(nt, {
                  open: k,
                  onClose: O,
                  maxWidth: 'lg',
                  fullWidth: !0,
                  children: [
                    e.jsx(ye, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Summary Details',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsx(st, {
                      children: a
                        ? e.jsx(Re, {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            children: e.jsx(Mt, {})
                          })
                        : s
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(0),
                                  children: 'Pre Planning'
                                }),
                                e.jsx(Ge, {
                                  rows: te,
                                  columns: M,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  onStateChange: i,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                }),
                                e.jsx(he, {
                                  color: '#921e22',
                                  sx: { height: 3, width: '100%', mb: 1 }
                                }),
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(1),
                                  children: 'Fabrication'
                                }),
                                e.jsx(Ge, {
                                  rows: U,
                                  columns: F,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                }),
                                e.jsx(he, {
                                  color: '#921e22',
                                  sx: { height: 2, width: '100%', mt: 1, mb: 1 }
                                }),
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(2),
                                  children: 'Dyeing'
                                }),
                                e.jsx(Ge, {
                                  rows: Y,
                                  columns: ae,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                }),
                                e.jsx(he, {
                                  color: '#921e22',
                                  sx: { height: 2, width: '100%', mb: 1 }
                                }),
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(3),
                                  children: 'Embroidery'
                                }),
                                e.jsx(Ge, {
                                  rows: H,
                                  columns: P,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                }),
                                e.jsx(he, {
                                  color: '#921e22',
                                  sx: { height: 2, width: '100%', mb: 1 }
                                }),
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(4),
                                  children: 'Schiffli'
                                }),
                                e.jsx(Ge, {
                                  rows: Q,
                                  columns: N,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                }),
                                e.jsx(he, {
                                  color: '#921e22',
                                  sx: { height: 2, width: '100%', mb: 1 }
                                }),
                                e.jsx(ve, {
                                  variant: 'h3',
                                  gutterBottom: !0,
                                  sx: {
                                    color: '#9f1d22',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' }
                                  },
                                  onClick: () => d(5),
                                  children: 'Additional Process'
                                }),
                                e.jsx(Ge, {
                                  rows: me,
                                  columns: G,
                                  pageSize: 5,
                                  rowsPerPageOptions: [5],
                                  autoHeight: !0,
                                  hideFooter: !0,
                                  sx: {
                                    '--DataGrid-rowBorderColor':
                                      'rgb(255 255 255)',
                                    '& .css-1kyxv1r-MuiDataGrid-root': {
                                      color: 'white',
                                      backgroundColor: '#323232'
                                    },
                                    '& .MuiDataGrid-container--top [role=row]':
                                      {
                                        color: 'white',
                                        backgroundColor: '#323232'
                                      },
                                    '& .MuiDataGrid-columnSeparator': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-iconButtonContainer': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-sortIcon': {
                                      color: 'white'
                                    },
                                    '& .css-ptiqhd-MuiSvgIcon-root ': {
                                      color: 'white'
                                    },
                                    '& .MuiDataGrid-row': {
                                      '&.total-summary-row': {
                                        backgroundColor: 'darkgray'
                                      }
                                    }
                                  }
                                })
                              ]
                            })
                          : e.jsx(Mt, {})
                    }),
                    e.jsx(oo, {
                      children: e.jsx(ge, { onClick: O, children: 'Close' })
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  },
  jt = jo;
var ko = {
    boolean: !1,
    function: !0,
    object: !0,
    number: !1,
    string: !1,
    undefined: !1
  },
  vt = ko,
  Oo = vt;
function Ao(n) {
  return !!(n && Oo[typeof n]);
}
var lt = Ao,
  No = Object.prototype,
  wo = No.toString,
  Lo = RegExp(
    '^' +
      String(wo)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') +
      '$'
  ),
  it = Lo,
  To = vt,
  Bo = Object.prototype,
  Fo = Bo.hasOwnProperty,
  Ro = function (n) {
    var d,
      v = n,
      j = [];
    if (!v || !To[typeof n]) return j;
    for (d in v) Fo.call(v, d) && j.push(d);
    return j;
  },
  zo = Ro,
  Qo = lt,
  Wo = it,
  _o = zo,
  tt = Wo.test((tt = Object.keys)) && tt,
  Uo = tt
    ? function (n) {
        return Qo(n) ? tt(n) : [];
      }
    : _o,
  qt = Uo;
function Ho() {}
var qo = Ho,
  Et = lt,
  Eo = it,
  at = Eo.test((at = Object.create)) && at;
function Gt(n, d) {
  return Et(n) ? at(n) : {};
}
at ||
  (Gt = (function () {
    function n() {}
    return function (d) {
      if (Et(d)) {
        n.prototype = d;
        var v = new n();
        n.prototype = null;
      }
      return v || window.Object();
    };
  })());
var Yt = Gt,
  Go = qo,
  Yo = it,
  kt = { configurable: !1, enumerable: !1, value: null, writable: !1 },
  Ot = (function () {
    try {
      var n = {},
        d = Yo.test((d = Object.defineProperty)) && d,
        v = d(n, n, n) && d;
    } catch {}
    return v;
  })(),
  Vo = Ot
    ? function (n, d) {
        (kt.value = d), Ot(n, '__bindData__', kt);
      }
    : Go,
  yt = Vo,
  $o = Yt,
  Ko = lt,
  Xo = yt,
  Do = [],
  Jo = Do.push;
function Zo(n) {
  var d = n[0],
    v = n[2],
    j = n[4];
  function h() {
    if (v) {
      var t = v.slice();
      Jo.apply(t, arguments);
    }
    if (this instanceof h) {
      var b = $o(d.prototype),
        s = d.apply(b, t || arguments);
      return Ko(s) ? s : b;
    }
    return d.apply(j, t || arguments);
  }
  return Xo(h, n), h;
}
var er = Zo;
function tr(n, d, v) {
  d || (d = 0), typeof v > 'u' && (v = n ? n.length : 0);
  for (var j = -1, h = v - d || 0, t = Array(h < 0 ? 0 : h); ++j < h; )
    t[j] = n[d + j];
  return t;
}
var Vt = tr,
  ar = Yt,
  or = lt,
  rr = yt,
  nr = Vt,
  sr = [],
  At = sr.push;
function $t(n) {
  var d = n[0],
    v = n[1],
    j = n[2],
    h = n[3],
    t = n[4],
    b = n[5],
    s = v & 1,
    B = v & 2,
    a = v & 4,
    L = v & 8,
    k = d;
  function X() {
    var m = s ? t : this;
    if (j) {
      var y = j.slice();
      At.apply(y, arguments);
    }
    if (
      (h || a) &&
      (y || (y = nr(arguments)), h && At.apply(y, h), a && y.length < b)
    )
      return (v |= 16), $t([d, L ? v : v & -4, y, null, t, b]);
    if ((y || (y = arguments), B && (d = m[k]), this instanceof X)) {
      m = ar(d.prototype);
      var g = d.apply(m, y);
      return or(g) ? g : m;
    }
    return d.apply(m, y);
  }
  return rr(X, n), X;
}
var lr = $t;
function ir(n) {
  return typeof n == 'function';
}
var dr = ir,
  cr = er,
  ur = lr,
  pr = dr,
  mr = [],
  Nt = mr.push;
function Kt(n, d, v, j, h, t) {
  var b = d & 1,
    s = d & 2,
    B = d & 4,
    a = d & 16,
    L = d & 32;
  if (!s && !pr(n)) throw new TypeError();
  a && !v.length && ((d &= -17), (a = v = !1)),
    L && !j.length && ((d &= -33), (L = j = !1));
  var k = n && n.__bindData__;
  if (k && k !== !0)
    return (
      (k = k.slice()),
      b && !(k[1] & 1) && (k[4] = h),
      !b && k[1] & 1 && (d |= 8),
      B && !(k[1] & 4) && (k[5] = t),
      a && Nt.apply(k[2] || (k[2] = []), v),
      L && Nt.apply(k[3] || (k[3] = []), j),
      (k[1] |= d),
      Kt.apply(null, k)
    );
  var X = d == 1 || d === 17 ? cr : ur;
  return X([n, d, v, j, h, t]);
}
var hr = Kt,
  wt = hr,
  gr = Vt;
function br(n, d) {
  return arguments.length > 2
    ? wt(n, 17, gr(arguments, 2), null, d)
    : wt(n, 1, null, null, d);
}
var fr = br;
function Ir(n) {
  return n;
}
var xr = Ir,
  vr = it,
  yr = /\bthis\b/,
  Ct = {};
Ct.funcDecomp =
  !vr.test(window.WinRTError) &&
  yr.test(function () {
    return this;
  });
Ct.funcNames = typeof Function.name == 'string';
var Cr = Ct,
  Mr = fr,
  Sr = xr,
  Pr = yt,
  dt = Cr,
  jr = /^\s*function[ \n\r\t]+\w/,
  kr = /\bthis\b/,
  Or = Function.prototype.toString;
function Ar(n, d, v) {
  if (typeof n != 'function') return Sr;
  if (typeof d > 'u' || !('prototype' in n)) return n;
  var j = n.__bindData__;
  if (
    typeof j > 'u' &&
    (dt.funcNames && (j = !n.name), (j = j || !dt.funcDecomp), !j)
  ) {
    var h = Or.call(n);
    dt.funcNames || (j = !jr.test(h)), j || ((j = kr.test(h)), Pr(n, j));
  }
  if (j === !1 || (j !== !0 && j[1] & 1)) return n;
  switch (v) {
    case 1:
      return function (t) {
        return n.call(d, t);
      };
    case 2:
      return function (t, b) {
        return n.call(d, t, b);
      };
    case 3:
      return function (t, b, s) {
        return n.call(d, t, b, s);
      };
    case 4:
      return function (t, b, s, B) {
        return n.call(d, t, b, s, B);
      };
  }
  return Mr(n, d);
}
var Xt = Ar,
  Nr = Xt,
  wr = qt,
  Lt = vt,
  Lr = function (n, d, v) {
    var j,
      h = n,
      t = h;
    if (!h || !Lt[typeof h]) return t;
    d = d && typeof v > 'u' ? d : Nr(d, v, 3);
    for (var b = -1, s = Lt[typeof h] && wr(h), B = s ? s.length : 0; ++b < B; )
      if (((j = s[b]), d(h[j], j, n) === !1)) return t;
    return t;
  },
  Tr = Lr,
  Br = Xt,
  Fr = Tr;
function Rr(n, d, v) {
  var j = -1,
    h = n ? n.length : 0;
  if (((d = d && typeof v > 'u' ? d : Br(d, v, 3)), typeof h == 'number'))
    for (; ++j < h && d(n[j], j, n) !== !1; );
  else Fr(n, d);
  return n;
}
var zr = Rr,
  Dt,
  Jt;
Dt = {
  mm: {
    name: { singular: 'Millimeter', plural: 'Millimeters' },
    to_anchor: 1 / 1e3
  },
  cm: {
    name: { singular: 'Centimeter', plural: 'Centimeters' },
    to_anchor: 1 / 100
  },
  m: { name: { singular: 'Meter', plural: 'Meters' }, to_anchor: 1 },
  km: { name: { singular: 'Kilometer', plural: 'Kilometers' }, to_anchor: 1e3 }
};
Jt = {
  in: { name: { singular: 'Inch', plural: 'Inches' }, to_anchor: 1 / 12 },
  yd: { name: { singular: 'Yard', plural: 'Yards' }, to_anchor: 3 },
  'ft-us': {
    name: { singular: 'US Survey Foot', plural: 'US Survey Feet' },
    to_anchor: 1.000002
  },
  ft: { name: { singular: 'Foot', plural: 'Feet' }, to_anchor: 1 },
  mi: { name: { singular: 'Mile', plural: 'Miles' }, to_anchor: 5280 }
};
var Qr = {
    metric: Dt,
    imperial: Jt,
    _anchors: {
      metric: { unit: 'm', ratio: 3.28084 },
      imperial: { unit: 'ft', ratio: 1 / 3.28084 }
    }
  },
  Zt,
  ea;
Zt = {
  mm2: {
    name: { singular: 'Square Millimeter', plural: 'Square Millimeters' },
    to_anchor: 1 / 1e6
  },
  cm2: {
    name: { singular: 'Centimeter', plural: 'Centimeters' },
    to_anchor: 1 / 1e4
  },
  m2: {
    name: { singular: 'Square Meter', plural: 'Square Meters' },
    to_anchor: 1
  },
  ha: { name: { singular: 'Hectare', plural: 'Hectares' }, to_anchor: 1e4 },
  km2: {
    name: { singular: 'Square Kilometer', plural: 'Square Kilometers' },
    to_anchor: 1e6
  }
};
ea = {
  in2: {
    name: { singular: 'Square Inch', plural: 'Square Inches' },
    to_anchor: 1 / 144
  },
  yd2: {
    name: { singular: 'Square Yard', plural: 'Square Yards' },
    to_anchor: 9
  },
  ft2: {
    name: { singular: 'Square Foot', plural: 'Square Feet' },
    to_anchor: 1
  },
  ac: { name: { singular: 'Acre', plural: 'Acres' }, to_anchor: 43560 },
  mi2: {
    name: { singular: 'Square Mile', plural: 'Square Miles' },
    to_anchor: 27878400
  }
};
var Wr = {
    metric: Zt,
    imperial: ea,
    _anchors: {
      metric: { unit: 'm2', ratio: 10.7639 },
      imperial: { unit: 'ft2', ratio: 1 / 10.7639 }
    }
  },
  ta,
  aa;
ta = {
  mcg: {
    name: { singular: 'Microgram', plural: 'Micrograms' },
    to_anchor: 1 / 1e6
  },
  mg: {
    name: { singular: 'Milligram', plural: 'Milligrams' },
    to_anchor: 1 / 1e3
  },
  g: { name: { singular: 'Gram', plural: 'Grams' }, to_anchor: 1 },
  kg: { name: { singular: 'Kilogram', plural: 'Kilograms' }, to_anchor: 1e3 },
  mt: {
    name: { singular: 'Metric Tonne', plural: 'Metric Tonnes' },
    to_anchor: 1e6
  }
};
aa = {
  oz: { name: { singular: 'Ounce', plural: 'Ounces' }, to_anchor: 1 / 16 },
  lb: { name: { singular: 'Pound', plural: 'Pounds' }, to_anchor: 1 },
  t: { name: { singular: 'Ton', plural: 'Tons' }, to_anchor: 2e3 }
};
var _r = {
    metric: ta,
    imperial: aa,
    _anchors: {
      metric: { unit: 'g', ratio: 1 / 453.592 },
      imperial: { unit: 'lb', ratio: 453.592 }
    }
  },
  oa,
  ra;
oa = {
  mm3: {
    name: { singular: 'Cubic Millimeter', plural: 'Cubic Millimeters' },
    to_anchor: 1 / 1e6
  },
  cm3: {
    name: { singular: 'Cubic Centimeter', plural: 'Cubic Centimeters' },
    to_anchor: 1 / 1e3
  },
  ml: {
    name: { singular: 'Millilitre', plural: 'Millilitres' },
    to_anchor: 1 / 1e3
  },
  cl: {
    name: { singular: 'Centilitre', plural: 'Centilitres' },
    to_anchor: 1 / 100
  },
  dl: {
    name: { singular: 'Decilitre', plural: 'Decilitres' },
    to_anchor: 1 / 10
  },
  l: { name: { singular: 'Litre', plural: 'Litres' }, to_anchor: 1 },
  kl: { name: { singular: 'Kilolitre', plural: 'Kilolitres' }, to_anchor: 1e3 },
  m3: {
    name: { singular: 'Cubic meter', plural: 'Cubic meters' },
    to_anchor: 1e3
  },
  km3: {
    name: { singular: 'Cubic kilometer', plural: 'Cubic kilometers' },
    to_anchor: 1e12
  },
  krm: {
    name: { singular: 'Matsked', plural: 'Matskedar' },
    to_anchor: 1 / 1e3
  },
  tsk: { name: { singular: 'Tesked', plural: 'Teskedar' }, to_anchor: 5 / 1e3 },
  msk: {
    name: { singular: 'Matsked', plural: 'Matskedar' },
    to_anchor: 15 / 1e3
  },
  kkp: {
    name: { singular: 'Kaffekopp', plural: 'Kaffekoppar' },
    to_anchor: 150 / 1e3
  },
  glas: { name: { singular: 'Glas', plural: 'Glas' }, to_anchor: 200 / 1e3 },
  kanna: { name: { singular: 'Kanna', plural: 'Kannor' }, to_anchor: 2.617 }
};
ra = {
  tsp: {
    name: { singular: 'Teaspoon', plural: 'Teaspoons' },
    to_anchor: 1 / 6
  },
  Tbs: {
    name: { singular: 'Tablespoon', plural: 'Tablespoons' },
    to_anchor: 1 / 2
  },
  in3: {
    name: { singular: 'Cubic inch', plural: 'Cubic inches' },
    to_anchor: 0.55411
  },
  'fl-oz': {
    name: { singular: 'Fluid Ounce', plural: 'Fluid Ounces' },
    to_anchor: 1
  },
  cup: { name: { singular: 'Cup', plural: 'Cups' }, to_anchor: 8 },
  pnt: { name: { singular: 'Pint', plural: 'Pints' }, to_anchor: 16 },
  qt: { name: { singular: 'Quart', plural: 'Quarts' }, to_anchor: 32 },
  gal: { name: { singular: 'Gallon', plural: 'Gallons' }, to_anchor: 128 },
  ft3: {
    name: { singular: 'Cubic foot', plural: 'Cubic feet' },
    to_anchor: 957.506
  },
  yd3: {
    name: { singular: 'Cubic yard', plural: 'Cubic yards' },
    to_anchor: 25852.7
  }
};
var Ur = {
    metric: oa,
    imperial: ra,
    _anchors: {
      metric: { unit: 'l', ratio: 33.8140226 },
      imperial: { unit: 'fl-oz', ratio: 1 / 33.8140226 }
    }
  },
  na;
na = {
  ea: { name: { singular: 'Each', plural: 'Each' }, to_anchor: 1 },
  dz: { name: { singular: 'Dozen', plural: 'Dozens' }, to_anchor: 12 }
};
var Hr = {
    metric: na,
    imperial: {},
    _anchors: { metric: { unit: 'ea', ratio: 1 } }
  },
  sa,
  la;
sa = {
  C: {
    name: { singular: 'degree Celsius', plural: 'degrees Celsius' },
    to_anchor: 1,
    anchor_shift: 0
  },
  K: {
    name: { singular: 'degree Kelvin', plural: 'degrees Kelvin' },
    to_anchor: 1,
    anchor_shift: 273.15
  }
};
la = {
  F: {
    name: { singular: 'degree Fahrenheit', plural: 'degrees Fahrenheit' },
    to_anchor: 1
  },
  R: {
    name: { singular: 'degree Rankine', plural: 'degrees Rankine' },
    to_anchor: 1,
    anchor_shift: 459.67
  }
};
var qr = {
    metric: sa,
    imperial: la,
    _anchors: {
      metric: {
        unit: 'C',
        transform: function (n) {
          return n / (5 / 9) + 32;
        }
      },
      imperial: {
        unit: 'F',
        transform: function (n) {
          return (n - 32) * (5 / 9);
        }
      }
    }
  },
  ia,
  Tt = 365.25;
ia = {
  ns: {
    name: { singular: 'Nanosecond', plural: 'Nanoseconds' },
    to_anchor: 1 / 1e9
  },
  mu: {
    name: { singular: 'Microsecond', plural: 'Microseconds' },
    to_anchor: 1 / 1e6
  },
  ms: {
    name: { singular: 'Millisecond', plural: 'Milliseconds' },
    to_anchor: 1 / 1e3
  },
  s: { name: { singular: 'Second', plural: 'Seconds' }, to_anchor: 1 },
  min: { name: { singular: 'Minute', plural: 'Minutes' }, to_anchor: 60 },
  h: { name: { singular: 'Hour', plural: 'Hours' }, to_anchor: 60 * 60 },
  d: { name: { singular: 'Day', plural: 'Days' }, to_anchor: 60 * 60 * 24 },
  week: {
    name: { singular: 'Week', plural: 'Weeks' },
    to_anchor: 60 * 60 * 24 * 7
  },
  month: {
    name: { singular: 'Month', plural: 'Months' },
    to_anchor: (60 * 60 * 24 * Tt) / 12
  },
  year: {
    name: { singular: 'Year', plural: 'Years' },
    to_anchor: 60 * 60 * 24 * Tt
  }
};
var Er = { metric: ia, _anchors: { metric: { unit: 's', ratio: 1 } } },
  da,
  ca;
da = {
  b: { name: { singular: 'Bit', plural: 'Bits' }, to_anchor: 1 },
  Kb: { name: { singular: 'Kilobit', plural: 'Kilobits' }, to_anchor: 1024 },
  Mb: { name: { singular: 'Megabit', plural: 'Megabits' }, to_anchor: 1048576 },
  Gb: {
    name: { singular: 'Gigabit', plural: 'Gigabits' },
    to_anchor: 1073741824
  },
  Tb: {
    name: { singular: 'Terabit', plural: 'Terabits' },
    to_anchor: 1099511627776
  }
};
ca = {
  B: { name: { singular: 'Byte', plural: 'Bytes' }, to_anchor: 1 },
  KB: { name: { singular: 'Kilobyte', plural: 'Kilobytes' }, to_anchor: 1024 },
  MB: {
    name: { singular: 'Megabyte', plural: 'Megabytes' },
    to_anchor: 1048576
  },
  GB: {
    name: { singular: 'Gigabyte', plural: 'Gigabytes' },
    to_anchor: 1073741824
  },
  TB: {
    name: { singular: 'Terabyte', plural: 'Terabytes' },
    to_anchor: 1099511627776
  }
};
var Gr = {
    bits: da,
    bytes: ca,
    _anchors: {
      bits: { unit: 'b', ratio: 1 / 8 },
      bytes: { unit: 'B', ratio: 8 }
    }
  },
  ua;
ua = {
  ppm: {
    name: { singular: 'Part-per Million', plural: 'Parts-per Million' },
    to_anchor: 1
  },
  ppb: {
    name: { singular: 'Part-per Billion', plural: 'Parts-per Billion' },
    to_anchor: 0.001
  },
  ppt: {
    name: { singular: 'Part-per Trillion', plural: 'Parts-per Trillion' },
    to_anchor: 1e-6
  },
  ppq: {
    name: { singular: 'Part-per Quadrillion', plural: 'Parts-per Quadrillion' },
    to_anchor: 1e-9
  }
};
var Yr = {
    metric: ua,
    imperial: {},
    _anchors: { metric: { unit: 'ppm', ratio: 1e-6 } }
  },
  pa,
  ma;
pa = {
  'm/s': {
    name: { singular: 'Metre per second', plural: 'Metres per second' },
    to_anchor: 3.6
  },
  'km/h': {
    name: { singular: 'Kilometre per hour', plural: 'Kilometres per hour' },
    to_anchor: 1
  }
};
ma = {
  'm/h': {
    name: { singular: 'Mile per hour', plural: 'Miles per hour' },
    to_anchor: 1
  },
  knot: { name: { singular: 'Knot', plural: 'Knots' }, to_anchor: 1.150779 },
  'ft/s': {
    name: { singular: 'Foot per second', plural: 'Feet per second' },
    to_anchor: 0.681818
  }
};
var Vr = {
    metric: pa,
    imperial: ma,
    _anchors: {
      metric: { unit: 'km/h', ratio: 1 / 1.609344 },
      imperial: { unit: 'm/h', ratio: 1.609344 }
    }
  },
  ha,
  ga;
ha = {
  'min/km': {
    name: { singular: 'Minute per kilometre', plural: 'Minutes per kilometre' },
    to_anchor: 0.06
  },
  's/m': {
    name: { singular: 'Second per metre', plural: 'Seconds per metre' },
    to_anchor: 1
  }
};
ga = {
  'min/mi': {
    name: { singular: 'Minute per mile', plural: 'Minutes per mile' },
    to_anchor: 0.0113636
  },
  's/ft': {
    name: { singular: 'Second per foot', plural: 'Seconds per foot' },
    to_anchor: 1
  }
};
var $r = {
    metric: ha,
    imperial: ga,
    _anchors: {
      metric: { unit: 's/m', ratio: 0.3048 },
      imperial: { unit: 's/ft', ratio: 1 / 0.3048 }
    }
  },
  ba,
  fa;
ba = {
  Pa: { name: { singular: 'pascal', plural: 'pascals' }, to_anchor: 1 / 1e3 },
  kPa: {
    name: { singular: 'kilopascal', plural: 'kilopascals' },
    to_anchor: 1
  },
  MPa: {
    name: { singular: 'megapascal', plural: 'megapascals' },
    to_anchor: 1e3
  },
  hPa: {
    name: { singular: 'hectopascal', plural: 'hectopascals' },
    to_anchor: 1 / 10
  },
  bar: { name: { singular: 'bar', plural: 'bar' }, to_anchor: 100 },
  torr: { name: { singular: 'torr', plural: 'torr' }, to_anchor: 101325 / 76e4 }
};
fa = {
  psi: {
    name: {
      singular: 'pound per square inch',
      plural: 'pounds per square inch'
    },
    to_anchor: 1 / 1e3
  },
  ksi: {
    name: {
      singular: 'kilopound per square inch',
      plural: 'kilopound per square inch'
    },
    to_anchor: 1
  }
};
var Kr = {
    metric: ba,
    imperial: fa,
    _anchors: {
      metric: { unit: 'kPa', ratio: 0.00014503768078 },
      imperial: { unit: 'psi', ratio: 1 / 0.00014503768078 }
    }
  },
  Ia;
Ia = {
  A: { name: { singular: 'Ampere', plural: 'Amperes' }, to_anchor: 1 },
  mA: {
    name: { singular: 'Milliampere', plural: 'Milliamperes' },
    to_anchor: 0.001
  },
  kA: {
    name: { singular: 'Kiloampere', plural: 'Kiloamperes' },
    to_anchor: 1e3
  }
};
var Xr = { metric: Ia, _anchors: { metric: { unit: 'A', ratio: 1 } } },
  xa;
xa = {
  V: { name: { singular: 'Volt', plural: 'Volts' }, to_anchor: 1 },
  mV: {
    name: { singular: 'Millivolt', plural: 'Millivolts' },
    to_anchor: 0.001
  },
  kV: { name: { singular: 'Kilovolt', plural: 'Kilovolts' }, to_anchor: 1e3 }
};
var Dr = { metric: xa, _anchors: { metric: { unit: 'V', ratio: 1 } } },
  va;
va = {
  W: { name: { singular: 'Watt', plural: 'Watts' }, to_anchor: 1 },
  mW: {
    name: { singular: 'Milliwatt', plural: 'Milliwatts' },
    to_anchor: 0.001
  },
  kW: { name: { singular: 'Kilowatt', plural: 'Kilowatts' }, to_anchor: 1e3 },
  MW: { name: { singular: 'Megawatt', plural: 'Megawatts' }, to_anchor: 1e6 },
  GW: { name: { singular: 'Gigawatt', plural: 'Gigawatts' }, to_anchor: 1e9 }
};
var Jr = { metric: va, _anchors: { metric: { unit: 'W', ratio: 1 } } },
  ya;
ya = {
  VAR: {
    name: { singular: 'Volt-Ampere Reactive', plural: 'Volt-Amperes Reactive' },
    to_anchor: 1
  },
  mVAR: {
    name: {
      singular: 'Millivolt-Ampere Reactive',
      plural: 'Millivolt-Amperes Reactive'
    },
    to_anchor: 0.001
  },
  kVAR: {
    name: {
      singular: 'Kilovolt-Ampere Reactive',
      plural: 'Kilovolt-Amperes Reactive'
    },
    to_anchor: 1e3
  },
  MVAR: {
    name: {
      singular: 'Megavolt-Ampere Reactive',
      plural: 'Megavolt-Amperes Reactive'
    },
    to_anchor: 1e6
  },
  GVAR: {
    name: {
      singular: 'Gigavolt-Ampere Reactive',
      plural: 'Gigavolt-Amperes Reactive'
    },
    to_anchor: 1e9
  }
};
var Zr = { metric: ya, _anchors: { metric: { unit: 'VAR', ratio: 1 } } },
  Ca;
Ca = {
  VA: {
    name: { singular: 'Volt-Ampere', plural: 'Volt-Amperes' },
    to_anchor: 1
  },
  mVA: {
    name: { singular: 'Millivolt-Ampere', plural: 'Millivolt-Amperes' },
    to_anchor: 0.001
  },
  kVA: {
    name: { singular: 'Kilovolt-Ampere', plural: 'Kilovolt-Amperes' },
    to_anchor: 1e3
  },
  MVA: {
    name: { singular: 'Megavolt-Ampere', plural: 'Megavolt-Amperes' },
    to_anchor: 1e6
  },
  GVA: {
    name: { singular: 'Gigavolt-Ampere', plural: 'Gigavolt-Amperes' },
    to_anchor: 1e9
  }
};
var en = { metric: Ca, _anchors: { metric: { unit: 'VA', ratio: 1 } } },
  Ma;
Ma = {
  Wh: {
    name: { singular: 'Watt-hour', plural: 'Watt-hours' },
    to_anchor: 3600
  },
  mWh: {
    name: { singular: 'Milliwatt-hour', plural: 'Milliwatt-hours' },
    to_anchor: 3.6
  },
  kWh: {
    name: { singular: 'Kilowatt-hour', plural: 'Kilowatt-hours' },
    to_anchor: 36e5
  },
  MWh: {
    name: { singular: 'Megawatt-hour', plural: 'Megawatt-hours' },
    to_anchor: 36e8
  },
  GWh: {
    name: { singular: 'Gigawatt-hour', plural: 'Gigawatt-hours' },
    to_anchor: 36e11
  },
  J: { name: { singular: 'Joule', plural: 'Joules' }, to_anchor: 1 },
  kJ: { name: { singular: 'Kilojoule', plural: 'Kilojoules' }, to_anchor: 1e3 }
};
var tn = { metric: Ma, _anchors: { metric: { unit: 'J', ratio: 1 } } },
  Sa;
Sa = {
  VARh: {
    name: {
      singular: 'Volt-Ampere Reactive Hour',
      plural: 'Volt-Amperes Reactive Hour'
    },
    to_anchor: 1
  },
  mVARh: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour',
      plural: 'Millivolt-Amperes Reactive Hour'
    },
    to_anchor: 0.001
  },
  kVARh: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour',
      plural: 'Kilovolt-Amperes Reactive Hour'
    },
    to_anchor: 1e3
  },
  MVARh: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour',
      plural: 'Megavolt-Amperes Reactive Hour'
    },
    to_anchor: 1e6
  },
  GVARh: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour',
      plural: 'Gigavolt-Amperes Reactive Hour'
    },
    to_anchor: 1e9
  }
};
var an = { metric: Sa, _anchors: { metric: { unit: 'VARh', ratio: 1 } } },
  Pa,
  ja;
Pa = {
  'mm3/s': {
    name: {
      singular: 'Cubic Millimeter per second',
      plural: 'Cubic Millimeters per second'
    },
    to_anchor: 1 / 1e6
  },
  'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second',
      plural: 'Cubic Centimeters per second'
    },
    to_anchor: 1 / 1e3
  },
  'ml/s': {
    name: {
      singular: 'Millilitre per second',
      plural: 'Millilitres per second'
    },
    to_anchor: 1 / 1e3
  },
  'cl/s': {
    name: {
      singular: 'Centilitre per second',
      plural: 'Centilitres per second'
    },
    to_anchor: 1 / 100
  },
  'dl/s': {
    name: { singular: 'Decilitre per second', plural: 'Decilitres per second' },
    to_anchor: 1 / 10
  },
  'l/s': {
    name: { singular: 'Litre per second', plural: 'Litres per second' },
    to_anchor: 1
  },
  'l/min': {
    name: { singular: 'Litre per minute', plural: 'Litres per minute' },
    to_anchor: 1 / 60
  },
  'l/h': {
    name: { singular: 'Litre per hour', plural: 'Litres per hour' },
    to_anchor: 1 / 3600
  },
  'kl/s': {
    name: { singular: 'Kilolitre per second', plural: 'Kilolitres per second' },
    to_anchor: 1e3
  },
  'kl/min': {
    name: { singular: 'Kilolitre per minute', plural: 'Kilolitres per minute' },
    to_anchor: 50 / 3
  },
  'kl/h': {
    name: { singular: 'Kilolitre per hour', plural: 'Kilolitres per hour' },
    to_anchor: 5 / 18
  },
  'm3/s': {
    name: {
      singular: 'Cubic meter per second',
      plural: 'Cubic meters per second'
    },
    to_anchor: 1e3
  },
  'm3/min': {
    name: {
      singular: 'Cubic meter per minute',
      plural: 'Cubic meters per minute'
    },
    to_anchor: 50 / 3
  },
  'm3/h': {
    name: { singular: 'Cubic meter per hour', plural: 'Cubic meters per hour' },
    to_anchor: 5 / 18
  },
  'km3/s': {
    name: {
      singular: 'Cubic kilometer per second',
      plural: 'Cubic kilometers per second'
    },
    to_anchor: 1e12
  }
};
ja = {
  'tsp/s': {
    name: { singular: 'Teaspoon per second', plural: 'Teaspoons per second' },
    to_anchor: 1 / 6
  },
  'Tbs/s': {
    name: {
      singular: 'Tablespoon per second',
      plural: 'Tablespoons per second'
    },
    to_anchor: 1 / 2
  },
  'in3/s': {
    name: {
      singular: 'Cubic inch per second',
      plural: 'Cubic inches per second'
    },
    to_anchor: 0.55411
  },
  'in3/min': {
    name: {
      singular: 'Cubic inch per minute',
      plural: 'Cubic inches per minute'
    },
    to_anchor: 0.55411 / 60
  },
  'in3/h': {
    name: { singular: 'Cubic inch per hour', plural: 'Cubic inches per hour' },
    to_anchor: 0.55411 / 3600
  },
  'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second',
      plural: 'Fluid Ounces per second'
    },
    to_anchor: 1
  },
  'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute',
      plural: 'Fluid Ounces per minute'
    },
    to_anchor: 1 / 60
  },
  'fl-oz/h': {
    name: { singular: 'Fluid Ounce per hour', plural: 'Fluid Ounces per hour' },
    to_anchor: 1 / 3600
  },
  'cup/s': {
    name: { singular: 'Cup per second', plural: 'Cups per second' },
    to_anchor: 8
  },
  'pnt/s': {
    name: { singular: 'Pint per second', plural: 'Pints per second' },
    to_anchor: 16
  },
  'pnt/min': {
    name: { singular: 'Pint per minute', plural: 'Pints per minute' },
    to_anchor: 4 / 15
  },
  'pnt/h': {
    name: { singular: 'Pint per hour', plural: 'Pints per hour' },
    to_anchor: 1 / 225
  },
  'qt/s': {
    name: { singular: 'Quart per second', plural: 'Quarts per second' },
    to_anchor: 32
  },
  'gal/s': {
    name: { singular: 'Gallon per second', plural: 'Gallons per second' },
    to_anchor: 128
  },
  'gal/min': {
    name: { singular: 'Gallon per minute', plural: 'Gallons per minute' },
    to_anchor: 32 / 15
  },
  'gal/h': {
    name: { singular: 'Gallon per hour', plural: 'Gallons per hour' },
    to_anchor: 8 / 225
  },
  'ft3/s': {
    name: {
      singular: 'Cubic foot per second',
      plural: 'Cubic feet per second'
    },
    to_anchor: 957.506
  },
  'ft3/min': {
    name: {
      singular: 'Cubic foot per minute',
      plural: 'Cubic feet per minute'
    },
    to_anchor: 957.506 / 60
  },
  'ft3/h': {
    name: { singular: 'Cubic foot per hour', plural: 'Cubic feet per hour' },
    to_anchor: 957.506 / 3600
  },
  'yd3/s': {
    name: {
      singular: 'Cubic yard per second',
      plural: 'Cubic yards per second'
    },
    to_anchor: 25852.7
  },
  'yd3/min': {
    name: {
      singular: 'Cubic yard per minute',
      plural: 'Cubic yards per minute'
    },
    to_anchor: 25852.7 / 60
  },
  'yd3/h': {
    name: { singular: 'Cubic yard per hour', plural: 'Cubic yards per hour' },
    to_anchor: 25852.7 / 3600
  }
};
var on = {
    metric: Pa,
    imperial: ja,
    _anchors: {
      metric: { unit: 'l/s', ratio: 33.8140227 },
      imperial: { unit: 'fl-oz/s', ratio: 1 / 33.8140227 }
    }
  },
  ka,
  Oa;
ka = { lx: { name: { singular: 'Lux', plural: 'Lux' }, to_anchor: 1 } };
Oa = {
  'ft-cd': {
    name: { singular: 'Foot-candle', plural: 'Foot-candles' },
    to_anchor: 1
  }
};
var rn = {
    metric: ka,
    imperial: Oa,
    _anchors: {
      metric: { unit: 'lx', ratio: 1 / 10.76391 },
      imperial: { unit: 'ft-cd', ratio: 10.76391 }
    }
  },
  Aa;
Aa = {
  mHz: {
    name: { singular: 'millihertz', plural: 'millihertz' },
    to_anchor: 1 / 1e3
  },
  Hz: { name: { singular: 'hertz', plural: 'hertz' }, to_anchor: 1 },
  kHz: { name: { singular: 'kilohertz', plural: 'kilohertz' }, to_anchor: 1e3 },
  MHz: {
    name: { singular: 'megahertz', plural: 'megahertz' },
    to_anchor: 1e3 * 1e3
  },
  GHz: {
    name: { singular: 'gigahertz', plural: 'gigahertz' },
    to_anchor: 1e3 * 1e3 * 1e3
  },
  THz: {
    name: { singular: 'terahertz', plural: 'terahertz' },
    to_anchor: 1e3 * 1e3 * 1e3 * 1e3
  },
  rpm: {
    name: { singular: 'rotation per minute', plural: 'rotations per minute' },
    to_anchor: 1 / 60
  },
  'deg/s': {
    name: { singular: 'degree per second', plural: 'degrees per second' },
    to_anchor: 1 / 360
  },
  'rad/s': {
    name: { singular: 'radian per second', plural: 'radians per second' },
    to_anchor: 1 / (Math.PI * 2)
  }
};
var nn = { metric: Aa, _anchors: { frequency: { unit: 'hz', ratio: 1 } } },
  Na;
Na = {
  rad: {
    name: { singular: 'radian', plural: 'radians' },
    to_anchor: 180 / Math.PI
  },
  deg: { name: { singular: 'degree', plural: 'degrees' }, to_anchor: 1 },
  grad: {
    name: { singular: 'gradian', plural: 'gradians' },
    to_anchor: 9 / 10
  },
  arcmin: {
    name: { singular: 'arcminute', plural: 'arcminutes' },
    to_anchor: 1 / 60
  },
  arcsec: {
    name: { singular: 'arcsecond', plural: 'arcseconds' },
    to_anchor: 1 / 3600
  }
};
var sn = { metric: Na, _anchors: { metric: { unit: 'deg', ratio: 1 } } },
  wa,
  Ke = qt,
  Te = zr,
  He = {
    length: Qr,
    area: Wr,
    mass: _r,
    volume: Ur,
    each: Hr,
    temperature: qr,
    time: Er,
    digital: Gr,
    partsPer: Yr,
    speed: Vr,
    pace: $r,
    pressure: Kr,
    current: Xr,
    voltage: Dr,
    power: Jr,
    reactivePower: Zr,
    apparentPower: en,
    energy: tn,
    reactiveEnergy: an,
    volumeFlowRate: on,
    illuminance: rn,
    frequency: nn,
    angle: sn
  },
  Be;
Be = function (n, d) {
  d ? (this.val = n / d) : (this.val = n);
};
Be.prototype.from = function (n) {
  if (this.destination) throw new Error('.from must be called before .to');
  return (
    (this.origin = this.getUnit(n)),
    this.origin || this.throwUnsupportedUnitError(n),
    this
  );
};
Be.prototype.to = function (n) {
  if (!this.origin) throw new Error('.to must be called after .from');
  this.destination = this.getUnit(n);
  var d, v;
  if (
    (this.destination || this.throwUnsupportedUnitError(n),
    this.origin.abbr === this.destination.abbr)
  )
    return this.val;
  if (this.destination.measure != this.origin.measure)
    throw new Error(
      'Cannot convert incompatible measures of ' +
        this.destination.measure +
        ' and ' +
        this.origin.measure
    );
  return (
    (d = this.val * this.origin.unit.to_anchor),
    this.origin.unit.anchor_shift && (d -= this.origin.unit.anchor_shift),
    this.origin.system != this.destination.system &&
      ((v = He[this.origin.measure]._anchors[this.origin.system].transform),
      typeof v == 'function'
        ? (d = v(d))
        : (d *= He[this.origin.measure]._anchors[this.origin.system].ratio)),
    this.destination.unit.anchor_shift &&
      (d += this.destination.unit.anchor_shift),
    d / this.destination.unit.to_anchor
  );
};
Be.prototype.toBest = function (d) {
  if (!this.origin) throw new Error('.toBest must be called after .from');
  var d = Object.assign({ exclude: [], cutOffNumber: 1 }, d),
    v;
  return (
    Te(
      this.possibilities(),
      function (j) {
        var h = this.describe(j),
          t = d.exclude.indexOf(j) === -1;
        if (t && h.system === this.origin.system) {
          var b = this.to(j);
          (!v || (b >= d.cutOffNumber && b < v.val)) &&
            (v = { val: b, unit: j, singular: h.singular, plural: h.plural });
        }
      }.bind(this)
    ),
    v
  );
};
Be.prototype.getUnit = function (n) {
  var d;
  return (
    Te(He, function (v, j) {
      if (
        (Te(v, function (h, t) {
          if (
            t == '_anchors' ||
            (Te(h, function (b, s) {
              if (s == n)
                return (d = { abbr: n, measure: j, system: t, unit: b }), !1;
            }),
            d)
          )
            return !1;
        }),
        d)
      )
        return !1;
    }),
    d
  );
};
var La = function (n) {
  return {
    abbr: n.abbr,
    measure: n.measure,
    system: n.system,
    singular: n.unit.name.singular,
    plural: n.unit.name.plural
  };
};
Be.prototype.describe = function (n) {
  var d = Be.prototype.getUnit(n),
    v = null;
  try {
    v = La(d);
  } catch {
    this.throwUnsupportedUnitError(n);
  }
  return v;
};
Be.prototype.list = function (n) {
  var d = [];
  return (
    Te(He, function (v, j) {
      (n && n !== j) ||
        Te(v, function (h, t) {
          if (t == '_anchors') return !1;
          Te(h, function (b, s) {
            d = d.concat(La({ abbr: s, measure: j, system: t, unit: b }));
          });
        });
    }),
    d
  );
};
Be.prototype.throwUnsupportedUnitError = function (n) {
  var d = [];
  throw (
    (Te(He, function (v, j) {
      Te(v, function (h, t) {
        if (t == '_anchors') return !1;
        d = d.concat(Ke(h));
      });
    }),
    new Error('Unsupported unit ' + n + ', use one of: ' + d.join(', ')))
  );
};
Be.prototype.possibilities = function (n) {
  var d = [];
  return (
    !this.origin && !n
      ? Te(Ke(He), function (v) {
          Te(He[v], function (j, h) {
            if (h == '_anchors') return !1;
            d = d.concat(Ke(j));
          });
        })
      : ((n = n || this.origin.measure),
        Te(He[n], function (v, j) {
          if (j == '_anchors') return !1;
          d = d.concat(Ke(v));
        })),
    d
  );
};
Be.prototype.measures = function () {
  return Ke(He);
};
wa = function (n) {
  return new Be(n);
};
var ln = wa;
const De = Da(ln),
  Je = [
    'Pre Planning',
    'Fabrication',
    'Dyeing/Printing  ',
    'Embroidery ',
    'Schiffli',
    'Additional Process',
    'Additional Services',
    'Summary'
  ];
function Cn() {
  const [n, d] = o.useState(0),
    [v, j] = o.useState(new Set()),
    [h, t] = o.useState(null),
    [b, s] = o.useState(null),
    [B, a] = o.useState([]),
    { enqueueSnackbar: L } = ze(),
    { data: k, refetch: X } = _e(),
    [m, y] = o.useState({}),
    [g, J] = o.useState({
      lookUpId: '',
      lookUpName: '',
      lookUpDomain: '',
      lookUpCategory: '',
      enabled: '',
      createdOn: new Date().toISOString()
    }),
    [i, V] = o.useState({
      fromUnit: 'm',
      toUnit: 'cm',
      inputValue: '',
      outputValue: ''
    }),
    Z = (M) => {
      t(M.currentTarget);
    },
    T = (M) => {
      s(M.currentTarget);
    },
    W = () => {
      t(null),
        s(null),
        V({ fromUnit: 'm', toUnit: 'cm', inputValue: '', outputValue: '' });
    },
    R = (M) => M === 1,
    ee = (M) => v.has(M),
    D = () => {
      let M = v;
      ee(n) && ((M = new Set(M.values())), M.delete(n)), d((F) => F + 1), j(M);
    },
    z = () => {
      d((M) => M - 1);
    },
    f = () => {
      if (!R(n)) throw new Error("You can't skip a step that isn't optional.");
      d((M) => M + 1),
        j((M) => {
          const F = new Set(M.values());
          return F.add(n), F;
        });
    },
    E = () => {
      d(0);
    };
  o.useEffect(() => {
    (async () => {
      try {
        const F = await Ce.get(
          'http://100.42.177.77:81/api/Common/GetLookUpDomains?appId=1'
        );
        console.log('LookupData', F), a(F.data.result);
      } catch (F) {
        console.error('Error fetching design options:', F);
      }
    })();
  }, []);
  const re = async () => {
      if (!g.lookUpDomain || !g.lookUpName) {
        L('Please fill in all required fields.', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const M = await Ce.get(
          `http://100.42.177.77:81/api/Common/SaveLookUp?lookupDomain=${g.lookUpDomain}&LookUpName=${g.lookUpName}&appId=1`
        );
        return (
          L('Lookup saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
          J({
            lookUpId: '',
            lookUpName: '',
            lookUpDomain: '',
            lookUpCategory: '',
            enabled: '',
            createdOn: new Date().toISOString()
          }),
          X(),
          M.data
        );
      } catch (M) {
        throw (
          (L('Error saving data. Please try again.', {
            variant: 'error',
            autoHideDuration: 5e3
          }),
          M)
        );
      }
    },
    ie = (M) => {
      J({ ...g, [M.target.name]: M.target.value });
    },
    S = (M) => {
      const { name: F, value: ae } = M.target;
      V((P) => {
        const N = { ...P, [F]: ae };
        return (
          (F === 'inputValue' ? 'L2R' : 'R2L') === 'L2R'
            ? (N.outputValue = De(ae).from(N.fromUnit).to(N.toUnit))
            : (N.inputValue = De(ae).from(N.toUnit).to(N.fromUnit)),
          N
        );
      });
    };
  o.useEffect(() => {
    (async () => {
      try {
        const F = await Ce.get(
          'http://100.42.177.77:81/api/Common/GetLookUpDomains?appId=1'
        );
        a(F.data.result);
      } catch (F) {
        console.error('Error fetching design options:', F);
      }
    })();
  }, []);
  const ce = !!h,
    ne = !!b,
    pe = ce ? 'simple-popover' : void 0,
    O = ne ? 'convert-popover' : void 0;
  return e.jsxs(Re, {
    sx: { width: '100%' },
    children: [
      e.jsxs(r, {
        container: !0,
        spacing: 1,
        width: 'Inherit',
        children: [
          e.jsx(r, {
            item: !0,
            sm: 6,
            children: e.jsx(ve, {
              variant: 'h2',
              gutterBottom: !0,
              children: 'Planning Process'
            })
          }),
          e.jsxs(r, {
            item: !0,
            sm: 6,
            textAlign: 'right',
            children: [
              e.jsx(ge, {
                'aria-describedby': pe,
                variant: 'outlined',
                size: 'small',
                onClick: Z,
                sx: { marginRight: '8px' },
                children: '+Lookup'
              }),
              e.jsx(ge, {
                'aria-describedby': O,
                variant: 'outlined',
                size: 'small',
                onClick: T,
                children: 'Convertor'
              }),
              e.jsx(St, {
                id: O,
                open: ne,
                anchorEl: b,
                onClose: W,
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
                sx: {
                  '.MuiPopover-paper': { width: '300px', padding: '16px' }
                },
                children: e.jsxs(r, {
                  container: !0,
                  spacing: 2,
                  children: [
                    e.jsx(r, {
                      item: !0,
                      sm: 6,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        select: !0,
                        label: 'From',
                        size: 'small',
                        name: 'fromUnit',
                        value: i.fromUnit,
                        onChange: S,
                        children: De()
                          .possibilities('length')
                          .map((M) => e.jsx(_, { value: M, children: M }, M))
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 6,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        select: !0,
                        label: 'To',
                        size: 'small',
                        name: 'toUnit',
                        value: i.toUnit,
                        onChange: S,
                        children: De()
                          .possibilities('length')
                          .map((M) => e.jsx(_, { value: M, children: M }, M))
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        label: i.fromUnit,
                        size: 'small',
                        name: 'inputValue',
                        value: i.inputValue,
                        onChange: S,
                        type: 'number'
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        label: i.toUnit,
                        size: 'small',
                        name: 'outputValue',
                        value: i.outputValue,
                        onChange: S,
                        type: 'number'
                      })
                    })
                  ]
                })
              }),
              e.jsx(St, {
                id: 'mouse-over-popover',
                open: ce,
                anchorEl: h,
                onClose: W,
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                transformOrigin: { vertical: 'top', horizontal: 'right' },
                sx: {
                  '.MuiPopover-paper': { width: '300px', padding: '16px' }
                },
                children: e.jsxs(r, {
                  container: !0,
                  spacing: 3,
                  width: 'Inherit',
                  children: [
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Lookup',
                        size: 'small',
                        value: g.lookUpDomain,
                        name: 'lookUpDomain',
                        onChange: ie,
                        children: B.map((M) =>
                          e.jsx(
                            _,
                            { value: M.lookUpDomain, children: M.lookUpDomain },
                            M.lookUpDomain
                          )
                        )
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(u, {
                        fullWidth: !0,
                        label: 'Add Lookup Description',
                        value: g.lookUpName,
                        onChange: ie,
                        name: 'lookUpName',
                        size: 'small'
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 3,
                      textAlign: 'right',
                      children: e.jsx(ge, {
                        variant: 'contained',
                        size: 'small',
                        onClick: re,
                        children: 'Save'
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      e.jsx(Ja, {
        activeStep: n,
        children: Je.map((M, F) => {
          const ae = {},
            P = {};
          return (
            R(F) && (P.optional = e.jsx(ve, { variant: 'caption' })),
            ee(F) && (ae.completed = !1),
            e.jsx(
              Za,
              {
                ...ae,
                children: e.jsxs(eo, {
                  ...P,
                  onClick: () => d(F),
                  style: { cursor: 'pointer' },
                  children: [' ', M]
                })
              },
              M
            )
          );
        })
      }),
      e.jsxs(Re, {
        sx: { display: 'flex', flexDirection: 'row', pt: 2 },
        children: [
          e.jsx(ge, {
            color: 'inherit',
            disabled: n === 0,
            onClick: z,
            sx: { mr: 1 },
            children: 'Back'
          }),
          e.jsx(Re, { sx: { flex: '1 1 auto' } }),
          R(n) &&
            e.jsx(ge, {
              color: 'inherit',
              onClick: f,
              sx: { mr: 1 },
              children: 'Skip'
            }),
          e.jsx(ge, {
            onClick: D,
            children: n === Je.length - 1 ? 'Finish' : 'Next'
          })
        ]
      }),
      n === Je.length
        ? e.jsxs(o.Fragment, {
            children: [
              e.jsx(jt, { setActiveStep: d }),
              e.jsxs(Re, {
                sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                children: [
                  e.jsx(Re, { sx: { flex: '1 1 auto' } }),
                  e.jsx(ge, { onClick: E, children: 'Reset' })
                ]
              })
            ]
          })
        : e.jsxs(o.Fragment, {
            children: [
              n === 0 && e.jsx(bo, { setInitialValues: y, initialValues: m }),
              n === 1 && e.jsx(to, { setInitialValues: y, initialValues: m }),
              n === 2 && e.jsx(xo, { initialValues: m }),
              n === 3 && e.jsx(ho, { initialValues: m }),
              n === 4 && e.jsx(yo, { initialValues: m }),
              n === 5 && e.jsx(So, { initialValues: m }),
              n === 6 && e.jsx(Po, { initialValues: m }),
              n === 7 &&
                e.jsx(jt, {
                  setActiveStep: d,
                  setInitialValues: y,
                  initialValues: m
                }),
              e.jsxs(Re, {
                sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                children: [
                  e.jsx(ge, {
                    color: 'inherit',
                    disabled: n === 0,
                    onClick: z,
                    sx: { mr: 1 },
                    children: 'Back'
                  }),
                  e.jsx(Re, { sx: { flex: '1 1 auto' } }),
                  R(n) &&
                    e.jsx(ge, {
                      color: 'inherit',
                      onClick: f,
                      sx: { mr: 1 },
                      children: 'Skip'
                    }),
                  e.jsx(ge, {
                    onClick: D,
                    children: n === Je.length - 1 ? 'Finish' : 'Next'
                  })
                ]
              })
            ]
          })
    ]
  });
}
export { Cn as default };
