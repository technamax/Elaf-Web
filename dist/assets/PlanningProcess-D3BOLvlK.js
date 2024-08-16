import {
  j as e,
  _ as vt,
  r as Mt,
  n as Pt,
  u as Fe,
  c as Qe,
  b as Re,
  af as St,
  B as Ae,
  G as o,
  T as ge,
  D as ie,
  a2 as De,
  ag as jt,
  ah as Ye,
  ai as Xe,
  aj as _e,
  ak as $e,
  al as et,
  am as kt,
  an as tt,
  C as xe,
  d as ye,
  ao as Ke,
  e as qe,
  ap as Ot,
  aq as At,
  ar as Nt,
  as as Lt,
  at as wt,
  au as Tt,
  av as Bt,
  aw as Ft,
  ax as Qt,
  M as Rt
} from './index-Ck0MIkUq.js';
import { r as a } from './vendor-BXCbSo2_.js';
import { B as he, a as ve, I as Be } from './axios-CgIVMX8t.js';
import {
  d as pt,
  c as Ze,
  A as mt,
  e as ht,
  f as gt,
  S as Wt,
  a as zt,
  b as Ut,
  F as Ht
} from './Fabrication-Bwy62yIh.js';
import { d as Ee } from './VisibilityOutlined-Ds6HNaPA.js';
import {
  A as Je,
  R as Ue,
  F as bt,
  C as It,
  D as ot,
  a as at,
  b as nt,
  c as rt,
  B as ft,
  u as qt,
  g as dt,
  d as Ge
} from './ReuseableDataGrid-CdgPKZaX.js';
import { d as st } from './Close-DJFnbESS.js';
import { d as lt } from './PersonAddAlt1Outlined-BNyL5czE.js';
import { T as i, P as Et } from './TextField-BujPyVEk.js';
import { M as B } from './Skeleton-DFEmEML1.js';
import './dayjs.min-DO4_1a-m.js';
let ct = !1;
const Gt = a.forwardRef(function (S, V) {
  return (
    ct ||
      (console.warn(
        [
          'MUI: The Autocomplete component was moved from the lab to the core.',
          '',
          "You should use `import { Autocomplete } from '@mui/material'`",
          "or `import Autocomplete from '@mui/material/Autocomplete'`"
        ].join(`
`)
      ),
      (ct = !0)),
    e.jsx(Je, vt({ ref: V }, S))
  );
});
var it = {},
  Yt = Pt;
Object.defineProperty(it, '__esModule', { value: !0 });
var xt = (it.default = void 0),
  Xt = Yt(Mt()),
  _t = e;
xt = it.default = (0, Xt.default)(
  (0, _t.jsx)('path', {
    d: 'M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11h-9v-9h9zm-4.5-1L13 16h2v-3h3v3h2z'
  }),
  'SendAndArchive'
);
const Vt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO2WzU4UQRSFe14CgoiMKPIqolEiIQq+gEFgFPHnFVyILI3GnQIbxxhG3IkaYxT8iUZFoxuDbokoIaNE/czNnE6KSjdT07Yb40kqqa6qW+dW3XNvdRT9R4MAHgD3640Dh/MkHQTOqMWIv9PGydOBUeCsWoz4O208PwdcxCz1xoGBKG8Abc5JPwBrataP0fY3iLcCk8C6SF4DV4HzatZf1Ny6vrfkRd4PrABV4BywE9huKpc2rA0ARaATGAe+yebgn5IfB34BD0XQCzwlHU+AA1r7CPgJlLKS94n8GtAM3CIcFaAJKGuPviwxX9XJjfxlCtGMyJLwQrbzwNeGNEFNRFVdZdrJb2ttAbizyU10SBNXQslbgR8SnMXcxagEOGyxdmxs3ZDmxjybHmWKZUdriAOnZWhqf+ZtVgyw3+HZPAZ2qX8yxIGbwCudxsdwgH3JszERtqtOVEIc+ARMKbc3xNy79r1a+xHodsYtDec8W6sl01YxQxxYVfzdWM4krDPiGEveXMHLjhMqUGshDlQTHLDNCg06MJvgwJcQB96lhMBSrddZ1y0nloDdXkbc9WwPKQSLIQ7M6rGxGuBjKMB+JEGE24A3tnfUgIo7E+p+1jTsUn8wxIEWFaJxKdrFmBwrJRSiEc2d8mz2AxPas6WuAwbgkspncZNaPyexWbuXsuaGbuQ7cDEKBbVHZEVParMeliRUPLW7eK4XcUF7NQU7YAD26NrKciLtJtJObuTXtce+KAuAI9pgXq9aj0SVhgXFvEN9y4Cjmci9kvtZmpjQw9KuOhH/kvUr1bq0xmK+bLZRHqB2nZd1Gyinp5yfUuu/1ZyRX7CfmlzIXUgLx6SH93o3ltUv6z8hf+LoX8ZvSFCuNiG5hzcAAAAASUVORK5CYII=',
  Jt = ({
    initialFormData: h,
    setAdditionalProcessData: S,
    refetchDyeingPrintingData: V,
    handleClickOpen: te,
    showUpperDiv: C
  }) => {
    const { user: t } = Fe(),
      [v, l] = a.useState([]),
      [g, r] = a.useState([]),
      { enqueueSnackbar: y } = Qe(),
      [E, p] = a.useState({}),
      P = v.reduce((c, O) => c + (O.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', P);
    const [m, z] = a.useState({
      dpIdDet: 0,
      dpId: h.dpId || 0,
      designId: h.designId || '',
      batchNo: h.batchNo || '',
      planningHeaderId: h.planningHeaderId || 0,
      fabricId: h.fabricId || '',
      fabricName: h.fabricName || '',
      colorId: h.colorId || '',
      colorName: h.colorName || '',
      uomId: h.uomId || '',
      uom: h.uom || '',
      poPcs: h.poPcs || '',
      vendorId: '',
      processType: h.processType || '',
      availableQty: h.availableQty || '',
      remainingQty: h.availableQty - P || '',
      shrinkage: h.allowedWastage || '',
      wastage: h.allowedWastage || '',
      assignedQty: '',
      rate: '',
      unitRatePerPo: 0,
      totalExcGst: 0,
      gst: '',
      TotalIncludingGst: '',
      createdOn: new Date().toISOString(),
      createdBy: t.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: t.empId
    });
    a.useEffect(() => {
      z((c) => ({
        ...m,
        dpIdDet: g.dpIdDet || 0,
        dpId: g.dpId || 0,
        designId: (g == null ? void 0 : g.designId) || '',
        planningHeaderId: (g == null ? void 0 : g.planningHeaderId) || 0,
        batchNo: (g == null ? void 0 : g.batchNo) || '',
        vendorId: (g == null ? void 0 : g.vendorId) || '',
        shrinkage: (g == null ? void 0 : g.shrinkage) || '',
        wastage: (g == null ? void 0 : g.wastage) || '',
        outputQty: (g == null ? void 0 : g.outputQty) || 0,
        remainingQty:
          c.remainingQty + (g == null ? void 0 : g.assignedQty) || '',
        assignedQty: (g == null ? void 0 : g.assignedQty) || '',
        rate: (g == null ? void 0 : g.rate) || 0,
        unitRatePerPo: (g == null ? void 0 : g.unitRatePerPo) || '',
        totalExcGst: (g == null ? void 0 : g.totalExcGst) || '',
        gst: (g == null ? void 0 : g.gst) || 0,
        TotalIncludingGst: (g == null ? void 0 : g.totalIncludingGst) || '',
        createdOn:
          (g == null ? void 0 : g.createdOn) || new Date().toISOString(),
        createdBy: (g == null ? void 0 : g.createdBy) || t.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: t.empId
      }));
    }, [g]),
      a.useEffect(() => {
        z({
          ...m,
          remainingQty: h.availableQty - P >= 0 ? h.availableQty - P : ''
        });
      }, [v, h.availableQty, P]);
    const { data: u } = Re(),
      { data: F, refetch: D } = St(m.dpId, { skip: !m.dpId }),
      [Z, W] = a.useState([]);
    a.useEffect(() => {
      if (u) {
        const c = u.result[0];
        W(c.vendorList);
      }
    }, [u]),
      a.useEffect(() => {
        F && l(F.result.map((c, O) => ({ id: O + 1, ...c })));
      }, [F, D]),
      console.log('initialRows', v);
    const U = (c) => {
      const { name: O, value: x } = c.target;
      z({ ...m, [O]: x }),
        z((q) => {
          const f = { ...q, [O]: x };
          if (O === 'assignedQty' || O === 'remainingQty') {
            const de = f.assignedQty,
              ne = f.remainingQty;
            de > ne
              ? p((le) => ({
                  ...le,
                  assignedQty:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : p((le) => ({ ...le, assignedQty: '' }));
          }
          return f;
        });
    };
    a.useEffect(() => {
      const c = () => {
          const ce = parseFloat(m.assignedQty) || 0,
            me = parseFloat(m.shrinkage) || 0,
            Ce = parseFloat(m.wastage) || 0,
            M = me + Ce;
          return ((ce * 100) / (100 + M)).toFixed(2);
        },
        O = () => {
          const ce = parseFloat(m.assignedQty) || 0,
            me = parseFloat(m.rate) || 0;
          return (ce * me).toFixed(2);
        },
        x = (ce, me) => (ce * (1 + me / 100)).toFixed(2),
        q = c(),
        f = O(),
        de = parseFloat(m.gst) || 0,
        ne = x(f, de),
        le = parseFloat(m.poPcs) || 0,
        fe = le ? ne / le : 0;
      z((ce) => ({
        ...ce,
        outputQty: q,
        totalExcGst: f,
        TotalIncludingGst: ne,
        unitRatePerPo: fe.toFixed(2)
      }));
    }, [
      m.availableQty,
      m.assignedQty,
      m.shrinkage,
      m.wastage,
      m.rate,
      m.gst,
      m.poPcs,
      m.unitRatePerPo
    ]),
      console.log('formData', m);
    const Y = async () => {
        console.log(m);
        try {
          if (m.assignedQty > m.remainingQty) {
            y(
              'Assigned quantity can not be greater then Remaining Quantity !',
              { variant: 'error', autoHideDuration: 5e3 }
            );
            return;
          }
          const c = await ve.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrintingDetails',
            m
          );
          console.log('Save response:', c.data),
            z((O) => ({
              ...O,
              dpIdDet: 0,
              vendorId: '',
              availableQty: h.availableQty || '',
              shrinkage: '',
              wastage: '',
              assignedQty: '',
              rate: '',
              unitRatePerPo: 0,
              totalExcGst: 0,
              gst: '',
              TotalIncludingGst: '',
              remainingQty: h.availableQty - P || '',
              createdOn: new Date().toISOString(),
              createdBy: t.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: t.empId
            })),
            D(),
            V();
        } catch (c) {
          console.error('Error saving data:', c);
        }
      },
      J = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        {
          field: 'assignedQty',
          headerName: 'Assigned Quantity',
          valueGetter: (c) => c.toLocaleString()
        },
        { field: 'rate', headerName: 'Rate', flex: 1 },
        {
          field: 'totalExcGst',
          headerName: 'Total Excl Gst.',
          valueGetter: (c) => c.toLocaleString()
        },
        { field: 'gst', headerName: 'Gst.', flex: 1 },
        {
          field: 'totalIncludingGst',
          headerName: 'TotalIncludingGst',
          valueGetter: (c) => c.toLocaleString()
        },
        { field: 'outputQty', headerName: 'Output Qty', flex: 1 }
      ];
    return e.jsxs(Ae, {
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
          hidden: !C,
          children: [
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: e.jsx(ge, {
                    variant: 'h4',
                    gutterBottom: !0,
                    children: 'Assign Vendor'
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: m.fabricName,
                      onChange: U,
                      size: 'small',
                      disabled: !0,
                      sx: (c) => ({
                        ...(m.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'Process Type',
                    name: 'processType',
                    value: m.processType,
                    onChange: U,
                    size: 'small',
                    disabled: !0,
                    sx: (c) => ({
                      ...(m.availableQty !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colorName',
                      value: m.colorName,
                      onChange: U,
                      size: 'small',
                      disabled: !0,
                      sx: (c) => ({
                        ...(m.availableQty !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'UOM',
                      name: 'uom',
                      value: m.uom,
                      onChange: U,
                      size: 'small',
                      disabled: !0,
                      sx: (c) => ({
                        ...(m.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'PO Pcs',
                    size: 'small',
                    name: 'poPcs',
                    value: m.poPcs,
                    onChange: U,
                    disabled: !0,
                    sx: (c) => ({
                      ...(m.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Total AvailableQty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: m.availableQty,
                    onChange: U,
                    disabled: !0,
                    sx: (c) => ({
                      ...(m.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: m.remainingQty,
                    onChange: U,
                    disabled: !0,
                    sx: (c) => ({
                      ...(m.availableQty !== '' && {
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
            e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: m.vendorId,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: Z.map((c) =>
                      e.jsx(
                        B,
                        { value: c.lookUpId, children: c.lookUpName },
                        c.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Assign Quantity',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'assignedQty',
                    value: m.assignedQty,
                    onChange: U,
                    disabled: !m.remainingQty,
                    error: !!E.assignedQty,
                    helperText: E.assignedQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Rate Per uom',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'rate',
                    value: m.rate,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Shrinkage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'shrinkage',
                    value: m.shrinkage,
                    onChange: U,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Wastage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'wastage',
                    value: m.wastage,
                    onChange: U,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Output Qty',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'outputQty',
                    value: m.outputQty,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Total Excl. Gst',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'totalExcGst',
                    value: m.totalExcGst,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'GST',
                    fullWidth: !0,
                    size: 'small',
                    name: 'gst',
                    value: m.gst,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Total Including Gst',
                    fullWidth: !0,
                    size: 'small',
                    name: 'TotalIncludingGst',
                    value: m.TotalIncludingGst,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'UnitRate Per PO.',
                    fullWidth: !0,
                    size: 'small',
                    name: 'unitRatePerPo',
                    value: m.unitRatePerPo,
                    onChange: U,
                    disabled: !m.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(he, {
                    variant: 'contained',
                    size: 'small',
                    onClick: Y,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(o, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 12,
              children: e.jsx(ge, {
                variant: 'h4',
                gutterBottom: !0,
                children: 'View Vendor'
              })
            }),
            e.jsx(o, {
              sx: { marginTop: 2 },
              item: !0,
              xs: 12,
              children: e.jsx(Ue, {
                iColumns: J,
                initialRows: v,
                setInitialData: r,
                deleteApi:
                  'http://100.42.177.77:81/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?dpIdDet=',
                deleteBy: 'dpIdDet',
                refetch: D
              })
            })
          ]
        })
      ]
    });
  },
  Zt = ({
    initialFormData: h,
    setAdditionalProcessData: S,
    refetchDyeingPrintingData: V,
    handleClickOpen: te,
    showUpperDiv: C
  }) => {
    const t = De(),
      { enqueueSnackbar: v } = Qe(),
      [l, g] = a.useState({}),
      { user: r } = Fe(),
      [y, E] = a.useState([]),
      [p, P] = a.useState([]),
      m = y.reduce((M, H) => M + (H.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', m);
    const z = y.reduce((M, H) => M + (H.requiredPcs ?? 0), 0).toFixed(2);
    console.log('totalRepeats', z);
    const [u, F] = a.useState({
      embroideryIdDet: 0,
      embroideryId: h.embroideryId || 0,
      designId: h.designId || '',
      batchNo: h.batchNo || '',
      planningHeaderId: h.planningHeaderId || 0,
      componentId: h.componentId || '',
      componentName: h.componentName || '',
      fabricId: h.fabricId || '',
      fabricName: h.fabricName || '',
      vendorId: '',
      colorId: h.colorId || '',
      colourName: h.colourName || '',
      availableQty: h.availableQty || '',
      assignedQty: 0,
      remainingQty: (h.availableQty - m).toFixed(2) || 0,
      remainingRepeats: h.repeats - z || '',
      noOfHead: h.noOfHead || '',
      noOfHeadsName: h.noOfHeadsName || '',
      repeats: h.repeats || '',
      assignedRepeats: '',
      cuttingSize: h.cuttingSize || '',
      itemsPerRepeat: h.itemsPerRepeat || '',
      poPcs: h.poPcs || '',
      totalPcs: h.totalPcs || '',
      remainingPcs: (h.totalPcs - z).toFixed(2) || 0,
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
      createdBy: r.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: r.empId
    });
    a.useEffect(() => {
      F((M) => ({
        ...u,
        embroideryIdDet: p.embroideryIdDet || 0,
        embroideryId: p.embroideryId || 0,
        vendorId: (p == null ? void 0 : p.vendorId) || '',
        assignedQty: (p == null ? void 0 : p.assignedQty) || 0,
        requiredPcs: (p == null ? void 0 : p.requiredPcs) || 0,
        remainingQty:
          M.remainingQty + (p == null ? void 0 : p.assignedQty) || 0,
        remainingPcs:
          M.remainingPcs + (p == null ? void 0 : p.requiredPcs) || 0,
        totalAmount: (p == null ? void 0 : p.totalAmount) || 0,
        threadStiches: (p == null ? void 0 : p.threadStiches) || 0,
        threadRate: (p == null ? void 0 : p.threadRate) || 0,
        threadAmount: (p == null ? void 0 : p.threadAmount) || 0,
        tillaStiches: (p == null ? void 0 : p.tillaStiches) || 0,
        tilaRate: (p == null ? void 0 : p.tilaRate) || 0,
        tilaAmount: (p == null ? void 0 : p.tilaAmount) || 0,
        sequence: (p == null ? void 0 : p.sequence) || 0,
        sequenceRate: (p == null ? void 0 : p.sequenceRate) || 0,
        sequenceAmount: (p == null ? void 0 : p.sequenceAmount) || 0,
        isSolving: (p == null ? void 0 : p.isSolving) || !1,
        solvingLayers: (p == null ? void 0 : p.solvingLayers) || 0,
        solvingInMeters: (p == null ? void 0 : p.solvingInMeters) || 0,
        solvingRate: (p == null ? void 0 : p.solvingRate) || 0,
        solvingAmount: (p == null ? void 0 : p.solvingAmount) || 0,
        additional: (p == null ? void 0 : p.additional) || 0,
        costPerComponent: (p == null ? void 0 : p.costPerComponent) || 0,
        createdOn:
          (p == null ? void 0 : p.createdOn) || new Date().toISOString(),
        createdBy: (p == null ? void 0 : p.createdBy) || r.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: r.empId
      }));
    }, [p]);
    const D = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
    function Z(M, H, T) {
      return {
        fontWeight:
          H.indexOf(M) === -1
            ? T.typography.fontWeightRegular
            : T.typography.fontWeightMedium
      };
    }
    a.useEffect(() => {
      F({
        ...u,
        remainingQty: (h.availableQty - m).toFixed(2) || 0,
        remainingPcs: h.totalPcs - z || 0
      });
    }, [y]);
    const { data: W } = Re(),
      { data: U, refetch: Y } = jt(u.embroideryId, { skip: !u.embroideryId }),
      [J, w] = a.useState([]);
    a.useEffect(() => {
      if (W) {
        const M = W.result[0];
        w(M.vendorList);
      }
    }, [W]),
      a.useEffect(() => {
        U && E(U.result.map((M, H) => ({ id: H + 1, ...M })));
      }, [U, Y]),
      console.log('initialRows', y);
    const c = (M) => {
        const { name: H, value: T } = M.target;
        F({ ...u, [H]: T });
      },
      O = (M) => {
        const { name: H, checked: T } = M.target;
        F((X) => ({ ...X, [H]: T }));
      };
    console.log('formData', u);
    const [x, q] = a.useState(null),
      [f, de] = a.useState(u);
    a.useEffect(() => {
      const M = setTimeout(() => {
        de(u);
      }, 10);
      return () => {
        clearTimeout(M);
      };
    }, [u]);
    const ne = (M) => new Intl.NumberFormat('en-US').format(M);
    a.useEffect(() => {
      const M = () => {
          const L = parseFloat(f.repeats) || 0,
            A = parseFloat(f.itemsPerRepeat) || 0;
          return (L * A).toFixed(2);
        },
        H = () => {
          const L = parseFloat(f.threadStiches) || 0,
            A = parseFloat(f.threadRate) || 0,
            re = parseFloat(f.noOfHeadsName) || 0,
            be = parseFloat(f.repeats) || 0;
          return ((L / 1e3) * (A * be * re)).toFixed(2);
        },
        T = () => {
          const L = parseFloat(f.tillaStiches) || 0,
            A = parseFloat(f.tilaRate) || 0,
            re = parseFloat(f.noOfHeadsName) || 0,
            be = parseFloat(f.repeats) || 0;
          return ((L / 1e3) * (A * be * re)).toFixed(2);
        },
        X = () => {
          const L = parseFloat(f.sequence) || 0,
            A = parseFloat(f.sequenceRate) || 0,
            re = parseFloat(f.noOfHeadsName) || 0,
            be = parseFloat(f.repeats) || 0;
          return ((L / 1e3) * (A * be * re)).toFixed(2);
        },
        oe = () => {
          const L = parseFloat(f.repeats) || 0,
            A = parseFloat(f.noOfHeadsName) || 0,
            re = parseFloat(f.solvingLayers) || 0;
          return (((L * A * 13) / 39.37) * re).toFixed(2);
        },
        $ = () => {
          const L = parseFloat(f.solvingInMeters) || 0,
            A = parseFloat(f.solvingRate) || 0;
          return (L * A).toFixed(2);
        },
        ue = () => {
          const L = parseFloat(f.threadAmount) || 0,
            A = parseFloat(f.tilaAmount) || 0,
            re = parseFloat(f.sequenceAmount) || 0,
            be = parseFloat(f.solvingAmount) || 0;
          return (L + A + re + be).toFixed(2);
        },
        _ = () => {
          const L = parseFloat(String(f.totalAmount).replace(/,/g, '')) || 0,
            A = parseFloat(f.requiredPcs) || 0;
          return (L / A).toFixed(2);
        },
        j = ue(),
        Q = _();
      H(),
        F((L) => ({
          ...L,
          totalPcs: M(),
          threadAmount: H(),
          tilaAmount: T(),
          sequenceAmount: X(),
          solvingInMeters: oe(),
          solvingAmount: $(),
          totalAmount: ne(j),
          costPerComponent: ne(Q)
        }));
    }, [
      f.threadAmount,
      f.totalAmount,
      f.sequenceAmount,
      f.solvingAmount,
      f.repeats,
      f.tilaAmount,
      f.itemsPerRepeat,
      f.threadRate,
      f.threadStiches,
      f.noOfHeadsName,
      f.tilaRate,
      f.tillaStiches,
      f.sequenceRate,
      f.sequence,
      f.solvingLayers,
      f.solvingInMeters,
      f.solvingRate,
      f.requiredPcs
    ]),
      a.useEffect(() => {
        if (x === 'assignedQty') {
          const M = () => {
            const H = parseFloat(f.assignedQty) || 0,
              T = parseFloat(f.availableQty) || 0,
              X = parseFloat(f.totalPcs) || 0;
            return Math.round(H * (X / T));
          };
          F((H) => ({ ...H, requiredPcs: M() }));
        } else if (x === 'requiredPcs') {
          const M = () => {
            const H = parseFloat(f.requiredPcs) || 0,
              T = parseFloat(f.availableQty) || 0,
              X = parseFloat(f.totalPcs) || 0;
            return ((H * T) / X).toFixed(2);
          };
          F((H) => ({ ...H, assignedQty: M() }));
        }
      }, [f.assignedQty, f.requiredPcs, x]);
    const le = (M) => {
        const H = M.target.value,
          T = M.target.name;
        q('assignedQty'),
          F((X) => ({ ...X, assignedQty: H })),
          F((X) => {
            const oe = { ...X, [T]: H };
            if (T === 'assignedQty' || T === 'remainingQty') {
              const $ = parseFloat(oe.assignedQty),
                ue = parseFloat(oe.remainingQty);
              $ > ue
                ? g((_) => ({
                    ..._,
                    assignedQty:
                      'Assigned Quantity cannot be greater than Remaining Quantity'
                  }))
                : g((_) => ({ ..._, assignedQty: '' }));
            }
            return oe;
          });
      },
      fe = (M) => {
        const H = M.target.value,
          T = M.target.name;
        q('requiredPcs'),
          F((X) => ({ ...X, requiredPcs: H })),
          F((X) => {
            const oe = { ...X, [T]: H };
            if (T === 'requiredPcs' || T === 'remainingPcs') {
              const $ = parseFloat(oe.requiredPcs),
                ue = parseFloat(oe.remainingPcs);
              $ > ue
                ? (console.log(),
                  g((_) => ({
                    ..._,
                    requiredPcs:
                      'Required Pcs cannot be greater than Remaining Pcs'
                  })))
                : g((_) => ({ ..._, requiredPcs: '' }));
            }
            return oe;
          });
      },
      ce = async () => {
        if ((console.log(u), u.totalAmount == 0 || u.costPerComponent == 0)) {
          v(
            'Please Enter Thread, Tilla or Sequnce values , Total Amount cannot be zero',
            { variant: 'error', autoHideDuration: 5e3 }
          );
          return;
        }
        if (parseFloat(u.assignedQty) > parseFloat(u.remainingQty)) {
          v('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        if (parseFloat(u.requiredPcs) > parseFloat(u.remainingPcs)) {
          v('Required Pcs can not be greater then Remaining Pcs !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const M = await ve.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroideryDetails',
            { ...u, additional: u.additional.join(', ') }
          );
          M.data.success
            ? v('Embroidery saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (v(`${M.data.message}!`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', M.data.message)),
            console.log('Save response:', M.data),
            F((H) => ({
              ...H,
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
              remainingQty: (h.availableQty - m).toFixed(2) || 0,
              remainingRepeats: h.repeats - z || '',
              costPerComponent: 0,
              createdOn: new Date().toISOString(),
              createdBy: r.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: r.empId
            })),
            Y(),
            V();
        } catch (M) {
          console.error('Error saving data:', M),
            v('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      me = [
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
    return e.jsxs(Ae, {
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
          hidden: !C,
          children: [
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: e.jsx(ge, {
                    variant: 'h4',
                    gutterBottom: !0,
                    children: 'Assign Vendor'
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: u.fabricName,
                      onChange: c,
                      size: 'small',
                      disabled: !0,
                      sx: (M) => ({
                        ...(u.fabricName !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'Component',
                    name: 'componentName',
                    value: u.componentName,
                    onChange: c,
                    size: 'small',
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.componentName !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colourName',
                      value: u.colourName,
                      onChange: c,
                      size: 'small',
                      disabled: !0,
                      sx: (M) => ({
                        ...(u.colourName !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      label: 'PO Pcs',
                      name: 'poPcs',
                      value: u.poPcs,
                      onChange: c,
                      size: 'small',
                      disabled: !0,
                      sx: (M) => ({
                        ...(u.poPcs !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'Heads',
                    size: 'small',
                    name: 'noOfHeadsName',
                    value: u.noOfHeadsName,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.noOfHeadsName !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'Cutting Size',
                    size: 'small',
                    name: 'cuttingSize',
                    value: u.cuttingSize,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.cuttingSize !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    label: 'Items Per Repeat',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: u.itemsPerRepeat,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.itemsPerRepeat !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Total Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: u.availableQty,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: u.remainingQty,
                    type: 'number',
                    error: !!l.remainingQty,
                    helperText: l.remainingQty,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.remainingQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Repeats',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: u.repeats,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.repeats !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Total Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'totalPcs',
                    value: u.totalPcs,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.totalPcs !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Remaining Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingPcs',
                    value: u.remainingPcs,
                    onChange: c,
                    disabled: !0,
                    sx: (M) => ({
                      ...(u.remainingPcs !== '' && {
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
            e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: u.vendorId,
                    onChange: c,
                    disabled: !u.remainingPcs && !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: J.map((M) =>
                      e.jsx(
                        B,
                        { value: M.lookUpId, children: M.lookUpName },
                        M.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    label: 'Assigned Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'assignedQty',
                    value: u.assignedQty,
                    onChange: le,
                    error: !!l.assignedQty,
                    helperText: l.assignedQty,
                    disabled: !u.remainingPcs && !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    label: 'Required Pcs',
                    fullWidth: !0,
                    disabled: !u.remainingPcs && !u.remainingQty,
                    size: 'small',
                    type: 'number',
                    name: 'requiredPcs',
                    value: u.requiredPcs,
                    error: !!l.requiredPcs,
                    helperText: l.requiredPcs,
                    onChange: fe,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(i, {
                    select: !0,
                    label: 'Additional',
                    value: u.additional,
                    name: 'additional',
                    size: 'small',
                    onChange: c,
                    fullWidth: !0,
                    disabled: !u.remainingPcs && !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    SelectProps: { multiple: !0 },
                    children: D.map((M) =>
                      e.jsx(
                        B,
                        { value: M, style: Z(M, u.additional, t), children: M },
                        M
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1,
                  children: e.jsx(bt, {
                    control: e.jsx(It, {
                      checked: u.isSolving,
                      onChange: O,
                      disabled: !u.remainingPcs && !u.remainingQty,
                      name: 'isSolving'
                    }),
                    label: 'isSolving'
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsxs(o, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ge, {
                          variant: 'h5',
                          gutterBottom: !0,
                          children: 'Thread'
                        })
                      }),
                      ' ',
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadStiches',
                          value: u.threadStiches,
                          onChange: c,
                          required: !0,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'threadRate',
                          value: u.threadRate,
                          onChange: c,
                          required: !0,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadAmount',
                          value: u.threadAmount,
                          onChange: c,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      })
                    ]
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsxs(o, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ge, {
                          variant: 'h5',
                          gutterBottom: !0,
                          children: 'Tilla'
                        })
                      }),
                      ' ',
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tillaStiches',
                          value: u.tillaStiches,
                          onChange: c,
                          required: !0,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Rate',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tilaRate',
                          value: u.tilaRate,
                          onChange: c,
                          required: !0,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(i, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          name: 'tilaAmount',
                          value: u.tilaAmount,
                          onChange: c,
                          disabled: !u.remainingPcs && !u.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      })
                    ]
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: [
                    e.jsxs(o, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      children: [
                        e.jsx(o, {
                          item: !0,
                          xs: 12,
                          md: 12,
                          children: e.jsx(ge, {
                            variant: 'h5',
                            gutterBottom: !0,
                            children: 'Sequence'
                          })
                        }),
                        ' ',
                        e.jsx(o, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(i, {
                            label: 'Sequence',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequence',
                            type: 'number',
                            value: u.sequence,
                            onChange: c,
                            disabled: !u.remainingPcs && !u.remainingQty,
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(o, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(i, {
                            label: 'Rate',
                            fullWidth: !0,
                            type: 'number',
                            size: 'small',
                            name: 'sequenceRate',
                            value: u.sequenceRate,
                            onChange: c,
                            required: !0,
                            disabled: !u.remainingPcs && !u.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(o, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(i, {
                            label: 'Amount',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequenceAmount',
                            value: u.sequenceAmount,
                            onChange: c,
                            disabled: !u.remainingPcs && !u.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                }),
                u.isSolving
                  ? e.jsx(o, {
                      item: !0,
                      xs: 12,
                      md: 6,
                      children: e.jsxs(o, {
                        container: !0,
                        spacing: 1,
                        width: 'Inherit',
                        children: [
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 12,
                            children: e.jsx(ge, {
                              variant: 'h5',
                              gutterBottom: !0,
                              children: 'Solving'
                            })
                          }),
                          ' ',
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(i, {
                              label: 'Layers',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingLayers',
                              value: u.solvingLayers,
                              onChange: c,
                              disabled: !u.remainingPcs && !u.remainingQty,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(i, {
                              label: 'Meters',
                              type: 'number',
                              fullWidth: !0,
                              size: 'small',
                              name: 'solvingInMeters',
                              value: u.solvingInMeters,
                              disabled: !u.remainingPcs && !u.remainingQty,
                              onChange: c,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(i, {
                              label: 'Rate',
                              fullWidth: !0,
                              type: 'number',
                              size: 'small',
                              name: 'solvingRate',
                              value: u.solvingRate,
                              onChange: c,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(i, {
                              label: 'Amount',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingAmount',
                              value: u.solvingAmount,
                              disabled: !u.remainingPcs && !u.remainingQty,
                              onChange: c,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          })
                        ]
                      })
                    })
                  : null,
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  sx: { mt: 4 },
                  children: e.jsx(i, {
                    label: 'Total Amount',
                    fullWidth: !0,
                    size: 'small',
                    disabled: !u.remainingPcs && !u.remainingQty,
                    name: 'totalAmount',
                    value: u.totalAmount,
                    onChange: c,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  sx: { mt: 4 },
                  children: e.jsx(i, {
                    label: 'Cost Per Component',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'costPerComponent',
                    value: u.costPerComponent,
                    onChange: c,
                    disabled: !u.remainingPcs && !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(he, {
                    variant: 'contained',
                    size: 'small',
                    onClick: ce,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx('div', {
          children: e.jsxs(o, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(o, {
                item: !0,
                xs: 12,
                md: 12,
                children: e.jsx(ge, {
                  variant: 'h4',
                  gutterBottom: !0,
                  children: 'View Vendor'
                })
              }),
              e.jsx(o, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: e.jsx(Ue, {
                  iColumns: me,
                  initialRows: y,
                  setInitialData: P,
                  deleteApi:
                    'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryDetailsByDetId?embroideryDetId=',
                  deleteBy: 'embroideryIdDet',
                  refetch: Y
                })
              })
            ]
          })
        })
      ]
    });
  },
  Kt = ({ initialValues: h }) => {
    De();
    const { user: S } = Fe(),
      [V, te] = a.useState(!0),
      { enqueueSnackbar: C } = Qe(),
      [t, v] = a.useState([]),
      [l, g] = a.useState(!1),
      [r, y] = a.useState({
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
        createdBy: S.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    a.useEffect(() => {
      y({
        ...r,
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
        createdBy: (t == null ? void 0 : t.createdBy) || S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    }, [t]);
    const { data: E } = Ye(),
      [p, P] = a.useState('');
    a.useEffect(() => {
      P(h.collectionId);
    }, []);
    const { data: m } = Re(),
      { data: z, refetch: u } = Xe(p, { skip: !p }),
      { data: F, refetch: D } = _e(r.designId, { skip: !r.designId }),
      { data: Z, refetch: W } = $e(
        { batchNo: r.planningHeaderId, componentId: r.componentId },
        { skip: !r.planningHeaderId || !r.componentId }
      ),
      { data: U } = et(
        {
          batchNo: r.planningHeaderId,
          componentId: r.componentId,
          fabricId: r.fabricId
        },
        { skip: !r.planningHeaderId || !r.componentId || !r.fabricId }
      ),
      { data: Y, refetch: J } = kt(r.planningHeaderId, {
        skip: !r.planningHeaderId
      }),
      { data: w } = tt(r.planningHeaderId, { skip: !r.planningHeaderId });
    console.log('formData.planningHeaderId', r.planningHeaderId),
      console.log('collectionData', E);
    const [c, O] = a.useState(!1),
      [x, q] = a.useState([]),
      [f, de] = a.useState([]),
      [ne, le] = a.useState([]),
      [fe, ce] = a.useState([]),
      [me, Ce] = a.useState([]),
      [M, H] = a.useState([]),
      [T, X] = a.useState([]),
      [oe, $] = a.useState([]);
    console.log('batchList', f),
      console.log('formData', r),
      a.useEffect(() => {
        z && q(z.result);
      }, [z]),
      a.useEffect(() => {
        F && de(F.result);
      }, [F]),
      a.useEffect(() => {
        Z && (W(), le(Z.result));
      }, [Z, W]),
      a.useEffect(() => {
        U && H(Z.result);
      }, [U]),
      a.useEffect(() => {
        w && $(w.result);
      }, [w]),
      a.useEffect(() => {
        Y && (te(!1), X(Y.result.map((I, G) => ({ id: G + 1, ...I }))));
      }, [Y, J]),
      console.log('embroideryList', Y),
      console.log('initialRows', T),
      a.useEffect(() => {
        if (m) {
          const I = m.result[0];
          ce(I.vendorList), Ce(I.noOfHeadsList);
        }
      }, [m]);
    const ue = (E == null ? void 0 : E.result) || [];
    a.useEffect(() => {
      const I = () => {
        const ae = parseFloat(r.repeats) || 0,
          Pe = parseFloat(r.itemsPerRepeat) || 0;
        return (ae * Pe).toFixed(2);
      };
      y((ae) => ({ ...ae, totalPcs: I() }));
      const G = () => {
        const ae = parseFloat(r.threadStiches) || 0,
          Pe = parseFloat(r.threadRate) || 0,
          ze = parseFloat(r.noOfHead) || 0,
          He = parseFloat(r.repeats) || 0;
        return ((ae / 1e3) * (Pe * He * ze)).toFixed(2);
      };
      y((ae) => ({ ...ae, threadAmount: G() }));
      const pe = () => {
        const ae = parseFloat(r.tillaStiches) || 0,
          Pe = parseFloat(r.tilaRate) || 0,
          ze = parseFloat(r.noOfHead) || 0,
          He = parseFloat(r.repeats) || 0;
        return ((ae / 1e3) * (Pe * He * ze)).toFixed(2);
      };
      y((ae) => ({ ...ae, tilaAmount: pe() }));
      const K = () => {
        const ae = parseFloat(r.sequence) || 0,
          Pe = parseFloat(r.sequenceRate) || 0,
          ze = parseFloat(r.noOfHead) || 0,
          He = parseFloat(r.repeats) || 0;
        return ((ae / 1e3) * (Pe * He * ze)).toFixed(2);
      };
      y((ae) => ({ ...ae, sequenceAmount: K() }));
      const Ie = () => {
        const ae = parseFloat(r.repeats) || 0,
          Pe = parseFloat(r.noOfHead) || 0,
          ze = parseFloat(r.solvingLayers) || 0;
        return (((ae * Pe * 13) / 39.37) * ze).toFixed(2);
      };
      y((ae) => ({ ...ae, solvingInMeters: Ie() }));
      const Oe = () => {
        const ae = parseFloat(r.solvingInMeters) || 0,
          Pe = parseFloat(r.solvingRate) || 0;
        return parseFloat(r.solvingLayers), (ae * Pe).toFixed(2);
      };
      y((ae) => ({ ...ae, solvingAmount: Oe() }));
      const Ct = () => {
        const ae = parseFloat(r.threadAmount) || 0,
          Pe = parseFloat(r.tilaAmount) || 0,
          ze = parseFloat(r.sequenceAmount) || 0,
          He = parseFloat(r.solvingAmount) || 0;
        return (ae + Pe + ze + He).toFixed(2);
      };
      y((ae) => ({ ...ae, totalAmount: Ct() || 0 }));
    }, [
      r.threadAmount,
      r.totalAmount,
      r.sequenceAmount,
      r.solvingAmount,
      r.repeats,
      r.tilaAmount,
      r.itemsPerRepeat,
      r.threadRate,
      r.threadStiches,
      r.noOfHead,
      r.tilaRate,
      r.tillaStiches,
      r.sequenceRate,
      r.sequence,
      r.solvingLayers,
      r.solvingInMeters,
      r.solvingRate
    ]);
    const _ = (I) => {
        const { name: G, value: pe } = I.target;
        if (G === 'collectionId')
          ue.find((K) => K.collectionId === parseInt(pe)),
            P(pe),
            g(!0),
            X([]),
            te(!0),
            y({
              ...r,
              collectionId: pe,
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
              threadAdditional: []
            });
        else if (G === 'designId') {
          const K = x.find((Ie) => Ie.designId === parseInt(pe));
          X([]),
            te(!0),
            y({
              ...r,
              designId: pe,
              baseColorId: K ? K.colorId : '',
              baseColorName: K ? K.colorName : '',
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
        } else if (G === 'colorId') {
          const K = M.find((Ie) => Ie.colorId === pe);
          y({
            ...r,
            colorId: pe,
            availableQty: K ? K.total : '',
            cuttingSize: K ? K.cuttingSize : '',
            repeats: K ? K.repeats : '',
            noOfHead: K ? K.noOfHeads : ''
          });
        } else if (G === 'batchNo') {
          const K = f.find((Ie) => Ie.batchNo === pe);
          y({
            ...r,
            batchNo: pe,
            planningHeaderId: K ? K.planningHeaderId : '',
            poPcs: K ? K.poPcs : '',
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
            O(!0),
            g(!1);
        } else y({ ...r, [G]: pe }), Q((K) => ({ ...K, [G]: '' }));
      },
      [j, Q] = a.useState({}),
      L = async () => {
        try {
          const I = await ve.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroidery',
            { ...r, threadAdditional: r.threadAdditional.join(', ') }
          );
          console.log('Save response:', I.data),
            I.data.success
              ? C('Embroidery saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (C(`${I.data.message}!`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', I.data.message)),
            y((G) => ({
              embroideryId: 0,
              designId: G.designId,
              batchNo: G.batchNo,
              planningHeaderId: G.planningHeaderId,
              componentId: '',
              fabricId: '',
              vendorId: '',
              poPcs: G.poPcs,
              baseColorId: G.baseColorId,
              baseColorName: G.baseColorName,
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
              createdBy: S.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: S.empId
            })),
            J();
        } catch (I) {
          console.error('Error saving data:', I),
            C('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('initialRows', T);
    const [A, re] = a.useState({}),
      [be, Me] = a.useState(!1),
      je = (I) => {
        re(I), Me(!0);
      },
      [ke, Se] = a.useState(!0),
      Ne = (I) => {
        re(I), Me(!0), Se(!1);
      },
      Le = () => {
        Se(!0), Me(!1), re({}), refetchDyeingPrintingData();
      };
    console.log('show div', ke);
    const [we, ee] = a.useState(0),
      [We, Te] = a.useState(0),
      [d, s] = a.useState(0),
      [k, n] = a.useState(0);
    a.useEffect(() => {
      const I = T.reduce((Ie, Oe) => Ie + (Oe.availableQty ?? 0), 0).toFixed(2),
        G = T.reduce((Ie, Oe) => Ie + (Oe.assignedQty ?? 0), 0).toFixed(2),
        pe = T.reduce((Ie, Oe) => Ie + (Oe.totalPcs ?? 0), 0).toFixed(2),
        K = T.reduce((Ie, Oe) => Ie + (Oe.requiredPcs ?? 0), 0).toFixed(2);
      ee(parseFloat(I).toLocaleString()),
        Te(parseFloat(G).toLocaleString()),
        s(parseFloat(pe).toLocaleString()),
        n(parseFloat(K).toLocaleString());
    }, [T]);
    const b = [
        ...T,
        {
          id: 'TOTAL_SUMMARY',
          availableQty: we,
          assignedQty: We,
          totalPcs: d,
          requiredPcs: k
        }
      ],
      R = { sortable: !1, pinnable: !1, hideable: !1 },
      N = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...R,
          colSpan: (I, G) => (G.id === 'TOTAL_SUMMARY' ? 4 : void 0),
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
          ...R,
          colSpan: (I, G) => (G.id === 'TOTAL_SUMMARY' ? 3 : void 0),
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
            e.jsx(qe, {
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
          ...R,
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
          ...R,
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
          colSpan: (I, G) => (G.id === 'TOTAL_SUMMARY' ? 4 : void 0),
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
              children: e.jsxs(ft, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Be, {
                    color: 'primary',
                    onClick: () => je(I.row),
                    children: e.jsx(lt, {})
                  }),
                  e.jsx(Be, {
                    color: 'primary',
                    onClick: () => Ne(I.row),
                    children: e.jsx(Ee, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ke, { src: Vt, sx: { background: 'transparent' } }),
              title: 'Embroidery  ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                ' ',
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: p,
                      onChange: _,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: ue.map((I) =>
                        e.jsx(
                          B,
                          { value: I.collectionId, children: I.collectionName },
                          I.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: r.designId,
                    onChange: _,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: x.map((I) =>
                      e.jsx(
                        B,
                        { value: I.designId, children: I.designNo },
                        I.designId
                      )
                    )
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: r.batchNo,
                      onChange: _,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: f.map((I) =>
                        e.jsx(
                          B,
                          { value: I.batchNo, children: I.batchNo },
                          I.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: r.baseColorName,
                    onChange: _,
                    disabled: !0,
                    sx: (I) => ({
                      ...(r.repeatsInMtr !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(ie, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: r.componentId,
                      onChange: _,
                      size: 'small',
                      required: !0,
                      error: !!j.componentId,
                      helperText: j.componentId,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: oe.map((I) =>
                        e.jsx(
                          B,
                          { value: I.componentId, children: I.componentName },
                          I.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: r.fabricId,
                    onChange: _,
                    required: !0,
                    error: !!j.fabricId,
                    helperText: j.fabricId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ne.map((I) =>
                      e.jsx(
                        B,
                        { value: I.fabricId, children: I.fabric },
                        I.fabricId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: r.colorId,
                    onChange: _,
                    required: !0,
                    error: !!j.colorId,
                    helperText: j.colorId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: M.map((I) =>
                      e.jsx(
                        B,
                        { value: I.colorId, children: I.color },
                        I.colorId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: r.poPcs,
                    onChange: _,
                    disabled: !0,
                    sx: (I) => ({
                      ...(r.poPcs !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Available Quantity',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    type: 'number',
                    value: r.availableQty,
                    onChange: _,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(r.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Repeats',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: r.repeats,
                    onChange: _,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(r.repeats !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Heads',
                    defaultValue: '',
                    size: 'small',
                    name: 'noOfHead',
                    value: r.noOfHead,
                    onChange: _,
                    required: !0,
                    error: !!j.noOfHead,
                    helperText: j.noOfHead,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(r.noOfHead !== '' && {
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
                    children: me.map((I) =>
                      e.jsx(
                        B,
                        { value: I.lookUpId, children: I.lookUpName },
                        I.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Cutting Size',
                    fullWidth: !0,
                    size: 'small',
                    name: 'cuttingSize',
                    type: 'number',
                    value: r.cuttingSize,
                    onChange: _,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(r.cuttingSize !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Items Per Repeat',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: r.itemsPerRepeat,
                    onChange: _,
                    required: !0,
                    error: !!j.itemsPerRepeat,
                    helperText: j.itemsPerRepeat,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (I) => ({
                      ...(r.itemsPerRepeat !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Total Pcs.',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'totalPcs',
                    value: r.totalPcs,
                    onChange: _
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 4.5,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(he, {
                    variant: 'contained',
                    size: 'small',
                    onClick: L,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(o, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(ie, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          })
        }),
        e.jsx(o, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(ie, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ee, {}),
              title: 'View Embroidery ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(o, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(o, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  ' ',
                  e.jsx(Ue, {
                    iColumns: N,
                    initialRows: b,
                    setInitialData: v,
                    deleteApi:
                      'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryById?embroideryId=',
                    deleteBy: 'embroideryId',
                    refetch: J,
                    setAccordionExpanded: O,
                    fileName: 'Embroidery List',
                    isLoading: V
                  }),
                  e.jsxs(ot, {
                    open: be,
                    onClose: Le,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(at, {
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
                          e.jsx(ge, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: ' Embroidery > Assign Vendors '
                          }),
                          e.jsx(Be, {
                            onClick: Le,
                            sx: { color: '#ffffff' },
                            children: e.jsx(st, {})
                          })
                        ]
                      }),
                      e.jsxs(nt, {
                        children: [
                          e.jsx(rt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Zt, {
                            initialFormData: A,
                            setInitialFormData: re,
                            refetchDyeingPrintingData: J,
                            handleClickOpen: je,
                            showUpperDiv: ke
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
  Dt = Kt,
  $t = ({ setInitialValues: h, initialValues: S }) => {
    const { user: V } = Fe();
    console.log('user', V);
    const [te, C] = a.useState(!0),
      [t, v] = a.useState([]),
      [l, g] = a.useState([]),
      [r, y] = a.useState({
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
        repeats: '',
        repeatSize: '',
        uomId: '',
        totalFabric: '',
        shrinkage: '',
        wastage: '',
        poPcs: '',
        planningProcessTypeId: '',
        total: '',
        appId: 1,
        createdOn: new Date().toISOString(),
        createdBy: V.empId,
        lastUpdatedBy: V.empId,
        lastUpdatedOn: new Date().toISOString(),
        isSchiffili: !1,
        repeatsInMtr: ''
      });
    console.log('formData', r),
      a.useEffect(() => {
        y({
          ...r,
          processType: (t == null ? void 0 : t.processType) || 'MultiHead',
          planningId: (t == null ? void 0 : t.planningId) || 0,
          baseColorId: (t == null ? void 0 : t.baseColorId) || '',
          componentId: (t == null ? void 0 : t.componentId) || '',
          cuttingSize: (t == null ? void 0 : t.cuttingSize) || '',
          colorId: (t == null ? void 0 : t.colorId) || '',
          fabricId: (t == null ? void 0 : t.fabricId) || '',
          noOfHeads: (t == null ? void 0 : t.noOfHeads) || 0,
          operatingMachineId: (t == null ? void 0 : t.operatingMachineId) || 0,
          repeats: (t == null ? void 0 : t.repeats) || '',
          repeatSize: (t == null ? void 0 : t.repeatSize) || '',
          uomId: (t == null ? void 0 : t.uomId) || '',
          totalFabric: (t == null ? void 0 : t.totalFabric) || '',
          shrinkage: (t == null ? void 0 : t.shrinkage) || '',
          wastage: (t == null ? void 0 : t.wastage) || '',
          total: (t == null ? void 0 : t.total) || '',
          appId: 1,
          createdOn:
            (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
          createdBy: (t == null ? void 0 : t.createdBy) || V.empId,
          lastUpdatedBy: V.empId,
          lastUpdatedOn: new Date().toISOString(),
          repeatsInMtr: (t == null ? void 0 : t.repeatsInMtr) || ''
        });
      }, [t]);
    const { data: E } = Ye(),
      [p, P] = a.useState(''),
      { data: m, refetch: z } = Xe(p, { skip: !p }),
      { data: u, refetch: F } = Ot(r.planningHeaderId, {
        skip: !r.planningHeaderId
      }),
      { data: D } = Re(),
      [Z, W] = a.useState([]),
      { enqueueSnackbar: U } = Qe();
    console.log('lookupData', D);
    const [Y, J] = a.useState([]);
    a.useEffect(() => {
      E && J(E.result);
    }, [E]),
      a.useEffect(() => {
        m && (W(m.result), z());
      }, [m]),
      a.useEffect(() => {
        u && (C(!1), g(u.result.map((n, b) => ({ id: b + 1, ...n }))));
      }, [u, F]),
      console.log('designList', Z),
      console.log('collectionData', E);
    const [w, c] = a.useState(!1),
      [O, x] = a.useState([]),
      [q, f] = a.useState([]),
      [de, ne] = a.useState([]),
      [le, fe] = a.useState([]),
      [ce, me] = a.useState([]),
      [Ce, M] = a.useState([]),
      [H, T] = a.useState([]),
      [X, oe] = a.useState([]);
    console.log('components:', de),
      console.log('Fabrications:', le),
      console.log('colors:', ce),
      console.log('uoms:', Ce),
      console.log('heads:', H),
      console.log('lookupData', D),
      a.useEffect(() => {
        if (D) {
          const n = D.result[0];
          ne(n.componentList),
            me(n.colorList),
            fe(n.fabricList),
            T(n.noOfHeadsList),
            M(n.uomList),
            x(n.planningTypeProcessList),
            f(n.operatingMachineList);
        }
      }, [D]),
      a.useEffect(() => {
        const n = async (b) => {
          try {
            const R = await ve.get(
              `http://100.42.177.77:81/api/PrePlanning/GetPrePlanningHeaderByDesignId?designId=${b}`
            );
            console.log(R.data), oe(R.data.result);
          } catch (R) {
            console.error('Error fetching pre-planning lookup data:', R);
          }
        };
        r.designId && n(r.designId);
      }, [r.designId, r.planningHeaderId]);
    const $ = r.planningProcessTypeId === 212;
    console.log('initialValues', S),
      console.log('selectedCollectionId', p),
      a.useEffect(() => {
        P((S == null ? void 0 : S.collectionId) || ''),
          y({
            ...r,
            designId: (S == null ? void 0 : S.designId) || '',
            planningHeaderId: (S == null ? void 0 : S.planningHeaderId) || '',
            batchNo: (S == null ? void 0 : S.batchNo) || ''
          });
      }, [S]),
      a.useEffect(() => {
        const n = () => {
            const G = parseFloat(r.poPcs) || 0,
              pe = parseFloat(r.cuttingSize) || 0,
              K = (G * pe).toFixed(2);
            return parseFloat(K).toLocaleString();
          },
          b = () => {
            const G = parseFloat(r.repeats) || 0,
              pe = parseFloat(r.repeatSize) || 0,
              K = (G * pe).toFixed(2);
            return parseFloat(K).toLocaleString();
          },
          R = (G) => {
            const pe = G || 0,
              K = parseFloat(r.shrinkage) || 0,
              Ie = parseFloat(r.wastage) || 0,
              Oe = ((pe * (100 + (K + Ie))) / 100).toFixed(2);
            return parseFloat(Oe).toLocaleString();
          },
          N = () => (0.9144 * (parseFloat(r.repeatSize) || 0)).toFixed(2),
          se = () => {
            const G = parseFloat(r.repeats) || 0;
            return ((parseFloat(r.repeatsInMtr) || 0) * G).toFixed(2);
          };
        let I = 0;
        $
          ? (I = parseFloat(n().replace(/,/g, '')) || 0)
          : (I = parseFloat(b().replace(/,/g, '')) || 0),
          y((G) => ({
            ...G,
            totalFabric: I.toLocaleString(),
            total: R(I),
            repeatsInMtr: N()
          })),
          !$ && r.isSchiffili && y((G) => ({ ...G, totalFabric: se() }));
      }, [
        r.poPcs,
        r.cuttingSize,
        r.repeats,
        r.repeatSize,
        r.totalFabric,
        r.shrinkage,
        r.wastage,
        r.repeatsInMtr,
        r.isSchiffili,
        $
      ]);
    const [ue, _] = a.useState(!1);
    a.useState(!1);
    const j = (n) => {
        const { name: b, value: R } = n.target;
        if (b === 'collectionId') {
          const N = Y.find((se) => se.collectionId === parseInt(R));
          c(!0),
            g([]),
            C(!0),
            P(R),
            y({
              ...r,
              processType: 'MultiHead',
              componentId: '',
              cuttingSize: '',
              colorId: '',
              fabricId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: '',
              repeatSize: '',
              uomId: '',
              totalFabric: '',
              shrinkage: '',
              wastage: '',
              total: '',
              collectionId: R,
              noOfDesigns: N ? N.noOfDesigns : '',
              noOfColors: N ? N.noOfColors : ''
            });
        } else if (b === 'designId') {
          const N = Z.find((se) => se.designId === parseInt(R));
          g([]),
            C(!0),
            y({
              ...r,
              processType: 'MultiHead',
              componentId: '',
              cuttingSize: '',
              colorId: '',
              fabricId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: '',
              repeatSize: '',
              uomId: '',
              totalFabric: '',
              shrinkage: '',
              wastage: '',
              total: '',
              designId: R,
              baseColorId: N ? N.colorId : '',
              baseColorName: N ? N.colorName : ''
            });
        } else if (b === 'batchNo') {
          const N = X.find((se) => se.batchNo === R);
          y({
            ...r,
            componentId: '',
            processType: 'MultiHead',
            poPcs: N ? N.poPcs : '',
            cuttingSize: '',
            colorId: '',
            fabricId: '',
            noOfHeads: 0,
            operatingMachineId: 0,
            repeats: '',
            repeatSize: '',
            uomId: '',
            totalFabric: '',
            shrinkage: '',
            wastage: '',
            total: '',
            batchNo: R,
            planningHeaderId: N ? N.planningHeaderId : ''
          }),
            _(!0),
            c(!1);
        } else if (b === 'planningProcessTypeId') {
          const N = O.find((se) => se.planningProcessTypeId === R);
          y({
            ...r,
            planningProcessTypeId: R,
            planningProcessTypeName: N ? N.lookUpName : '',
            noOfHeads: 0,
            operatingMachineId: 0
          }),
            _(!0),
            c(!1);
        } else y({ ...r, [b]: R });
      },
      [Q, L] = a.useState({}),
      [A, re] = a.useState(!1),
      be = () => {
        re(!A);
      },
      Me = async () => {
        const n = je();
        if (Object.keys(n).length > 0) {
          L(n);
          return;
        }
        try {
          const b = {
              ...r,
              totalFabric: parseFloat(r.totalFabric.replace(/,/g, '')),
              total: parseFloat(r.total.replace(/,/g, ''))
            },
            R = await ve.post(
              'http://100.42.177.77:81/api/PrePlanning/SavePrePlanning',
              b
            );
          console.log('Data saved successfully:', R.data),
            console.log('Save response:', R.data),
            R.data.success
              ? R.data.success &&
                U('PrePlanning saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (U(`${R.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', R.data.message)),
            y((N) => ({
              processType: 'MultiHead',
              planningId: 0,
              collectionId: N.collectionId,
              designId: N.designId,
              batchNo: N.batchNo,
              planningHeaderId: N.planningHeaderId,
              baseColorId: N.baseColorId,
              baseColorName: N.baseColorName,
              noOfDesigns: N.noOfDesigns,
              noOfColors: N.noOfColors,
              poPcs: N.poPcs,
              fabricId: N.fabricId,
              shrinkage: N.shrinkage,
              wastage: N.wastage,
              componentId: '',
              cuttingSize: '',
              colorId: '',
              noOfHeads: 0,
              operatingMachineId: 0,
              repeats: '',
              repeatSize: '',
              uomId: '',
              totalFabric: '',
              total: '',
              appId: 1,
              createdOn: new Date().toISOString(),
              createdBy: V.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: V.empId,
              isSchiffili: !1,
              repeatsInMtr: ''
            })),
            F();
        } catch (b) {
          console.error('Error saving data:', b),
            U('Pre Planning not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      je = () => {
        const n = {};
        return (
          r.componentId || (n.componentId = 'componentId is required'),
          r.colorId || (n.colorId = 'colorId is required'),
          r.fabricId || (n.fabricId = 'fabricId is required'),
          r.cuttingSize || (n.cuttingSize = 'cuttingSize is required'),
          r.uomId || (n.uomId = 'uomId is required'),
          r.shrinkage || (n.shrinkage = 'shrinkage is required'),
          r.wastage || (n.wastage = 'wastage is required'),
          n
        );
      };
    console.log('initialRows', l);
    const ke = l.reduce((n, b) => n + (b.totalFabric ?? 0), 0).toFixed(2),
      Se = parseFloat(ke).toLocaleString();
    console.log('localizedTotalFabric', Se);
    const Ne = l.reduce((n, b) => n + (b.total ?? 0), 0).toFixed(2),
      Le = parseFloat(Ne).toLocaleString(),
      we = [
        ...l,
        {
          id: 'TOTAL_SUMMARY',
          label: 'Total Fabric',
          totalFabric: Se,
          total: Le
        }
      ],
      ee = { sortable: !1, pinnable: !1, hideable: !1 };
    console.log('rows', we);
    const We = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...ee,
          colSpan: (n, b) => {
            if (b.id === 'TOTAL_SUMMARY') return 10;
          },
          valueGetter: (n, b) => (b.id === 'TOTAL_SUMMARY' ? b.label : n),
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            })
        },
        { field: 'componentName', headerName: 'Component', ...ee },
        {
          field: 'planningProcessTypeName',
          headerName: 'Process Type',
          ...ee,
          renderCell: (n) => {
            const b =
              n.value === 'MultiHead'
                ? 'primary.dark'
                : n.value === 'Schiffili'
                  ? 'primary'
                  : n.value === 'Dyeing'
                    ? 'success.dark'
                    : 'default';
            return e.jsx(qe, {
              label: n.value,
              sx: {
                backgroundColor:
                  b === 'primary' || b === 'default' ? void 0 : b,
                color: b === 'primary' || b === 'default' ? void 0 : 'white'
              },
              color:
                b === 'primary'
                  ? 'primary'
                  : b === 'default'
                    ? 'default'
                    : void 0
            });
          }
        },
        { field: 'color', headerName: 'Color', ...ee },
        { field: 'cuttingSize', headerName: 'Cutting Size', ...ee },
        { field: 'fabric', headerName: 'Fabrication', ...ee },
        { field: 'noOfHeadName', headerName: 'No. Of Heads', ...ee },
        {
          field: 'operatingMachineName',
          headerName: 'Operating Machine',
          ...ee
        },
        {
          field: 'repeats',
          headerName: 'Repeats',
          valueGetter: (n) => n.toLocaleString(),
          ...ee
        },
        {
          field: 'repeatSize',
          headerName: 'Repeat Size',
          valueGetter: (n) => n.toLocaleString(),
          ...ee
        },
        {
          field: 'totalFabric',
          headerName: 'Total Fabric',
          valueGetter: (n) => n.toLocaleString(),
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            }),
          ...ee
        },
        {
          field: 'uom',
          headerName: 'UOM',
          colSpan: (n, b) => (b.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          valueGetter: (n, b) =>
            b.id === 'TOTAL_SUMMARY' ? 'OverAll Total' : n,
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            }),
          ...ee
        },
        { field: 'shrinkage', headerName: 'Shrinkage %' },
        { field: 'wastage', headerName: 'Wastage %' },
        {
          field: 'total',
          headerName: 'Total',
          valueGetter: (n) => n.toLocaleString(),
          colSpan: (n, b) => (b.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            }),
          ...ee
        }
      ],
      Te = r.planningProcessTypeId === 198;
    a.useEffect(() => {
      Te && y({ ...r, uomId: 139 });
    }, [Te]),
      console.log('formData', r);
    const d = ({ row: n, field: b }) =>
      n.id === 'TOTAL_SUMMARY' && (b === 'componentName' || b === 'uom')
        ? 'bold'
        : '';
    console.log('batchList:', X);
    const s =
        'http://100.42.177.77:81/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=',
      k = (n, b) => {
        _(!ue);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'CardHeader',
          children: e.jsxs(xe, {
            variant: 'outlined',
            children: [
              e.jsx(ye, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(xt, {}),
                title: 'Pre Planning',
                titleTypographyProps: { style: { color: 'white' } },
                children: ' '
              }),
              e.jsxs(o, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  e.jsxs(o, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: [
                      e.jsx(i, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Collection',
                        name: 'collectionId',
                        value: p,
                        onChange: j,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: Y.map((n) =>
                          e.jsx(
                            B,
                            {
                              value: n.collectionId,
                              children: n.collectionName
                            },
                            n.collectionId
                          )
                        )
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Design',
                      name: 'designId',
                      value: r.designId,
                      onChange: j,
                      size: 'small',
                      required: !0,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Z.map((n) =>
                        e.jsx(
                          B,
                          { value: n.designId, children: n.designNo },
                          n.designId
                        )
                      )
                    })
                  }),
                  e.jsxs(o, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: [
                      e.jsx(i, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Batch No.',
                        name: 'batchNo',
                        value: r.batchNo,
                        onChange: j,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: X.map((n) =>
                          e.jsx(
                            B,
                            { value: n.batchNo, children: n.batchNo },
                            n.batchNo
                          )
                        )
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(i, {
                      label: 'Po Pcs',
                      fullWidth: !0,
                      size: 'small',
                      name: 'poPcs',
                      value: r.poPcs,
                      onChange: j,
                      disabled: !0,
                      sx: (n) => ({
                        ...(r.poPcs !== '' && {
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
                  e.jsx(o, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(i, {
                      label: 'Base Color',
                      fullWidth: !0,
                      size: 'small',
                      name: 'baseColorName',
                      value: r.baseColorName,
                      onChange: j,
                      disabled: !0,
                      sx: (n) => ({
                        ...(r.baseColorName !== '' && {
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
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'MainCard',
              avatar: e.jsx(pt, {}),
              title: 'Add Pre Planning',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Be, {
                onClick: k,
                sx: { mt: '-18px' },
                children: e.jsx(Ze, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            e.jsxs(mt, {
              expanded: ue,
              onChange: k,
              sx: {},
              children: [
                e.jsx(ht, {
                  expandIcon: e.jsx(Ze, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(gt, {
                  children: e.jsxs(o, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Je, {
                          fullWidth: !0,
                          options: le,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            le.find((n) => n.lookUpId === r.fabricId) || null,
                          onChange: (n, b) => {
                            j({
                              target: {
                                name: 'fabricId',
                                value: b ? b.lookUpId : ''
                              }
                            });
                          },
                          renderInput: (n) =>
                            e.jsx(i, {
                              ...n,
                              label: 'Fabrication',
                              size: 'small',
                              name: 'fabricId',
                              value: r.fabricId,
                              required: !0,
                              error: !!Q.fabricId,
                              helperText: Q.fabricId,
                              disabled: A,
                              InputLabelProps: { sx: { color: 'black' } },
                              sx: { '& input': { backgroundColor: 'white' } }
                            }),
                          PaperComponent: ({ children: n }) =>
                            e.jsx('div', {
                              style: { backgroundColor: 'white' },
                              children: n
                            })
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Shrinkage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'shrinkage',
                          value: r.shrinkage,
                          onChange: j,
                          error: !!Q.shrinkage,
                          helperText: Q.shrinkage,
                          required: !0,
                          disabled: A,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Wastage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'wastage',
                          value: r.wastage,
                          onChange: j,
                          error: !!Q.wastage,
                          helperText: Q.wastage,
                          required: !0,
                          disabled: A,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(he, {
                          variant: 'contained',
                          size: 'small',
                          onClick: be,
                          children: A || A ? 'Unlock' : 'Lock'
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ie, {
                          color: '#cc8587',
                          sx: { height: 2, width: '100%' }
                        })
                      }),
                      e.jsxs(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Process Type',
                            name: 'planningProcessTypeId',
                            value: r.planningProcessTypeId,
                            onChange: j,
                            size: 'small',
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: O.map((n) =>
                              e.jsx(
                                B,
                                { value: n.lookUpId, children: n.lookUpName },
                                n.lookUpId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Je, {
                          fullWidth: !0,
                          options: de,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            de.find((n) => n.lookUpId === r.componentId) ||
                            null,
                          onChange: (n, b) => {
                            j({
                              target: {
                                name: 'componentId',
                                value: b ? b.lookUpId : ''
                              }
                            });
                          },
                          renderOption: (n, b) => {
                            const { lookUpName: R } = b;
                            return e.jsx('span', { ...n, children: R });
                          },
                          renderInput: (n) =>
                            e.jsx(i, {
                              ...n,
                              label: 'Select Component',
                              size: 'small',
                              name: 'componentId',
                              value: r.componentId,
                              required: !0,
                              error: !!Q.componentId,
                              helperText: Q.componentId,
                              InputLabelProps: { sx: { color: 'black' } },
                              sx: { '& input': { backgroundColor: 'white' } }
                            }),
                          PaperComponent: ({ children: n }) =>
                            e.jsx('div', {
                              style: { backgroundColor: 'white' },
                              children: n
                            })
                        })
                      }),
                      e.jsxs(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          ' ',
                          e.jsx(Je, {
                            fullWidth: !0,
                            options: ce,
                            getOptionLabel: (n) => n.lookUpName,
                            value:
                              ce.find((n) => n.lookUpId === r.colorId) || null,
                            onChange: (n, b) => {
                              j({
                                target: {
                                  name: 'colorId',
                                  value: b ? b.lookUpId : ''
                                }
                              });
                            },
                            renderInput: (n) =>
                              e.jsx(i, {
                                ...n,
                                label: 'Color',
                                size: 'small',
                                value: r.colorId,
                                name: 'colorId',
                                required: !0,
                                error: !!Q.colorId,
                                helperText: Q.colorId,
                                InputLabelProps: { sx: { color: 'black' } },
                                sx: { '& input': { backgroundColor: 'white' } }
                              }),
                            PaperComponent: ({ children: n }) =>
                              e.jsx('div', {
                                style: { backgroundColor: 'white' },
                                children: n
                              })
                          })
                        ]
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          size: 'small',
                          name: 'cuttingSize',
                          type: 'number',
                          value: r.cuttingSize,
                          onChange: j,
                          required: !0,
                          error: !!Q.cuttingSize,
                          helperText: Q.cuttingSize,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: Te
                          ? e.jsx(i, {
                              fullWidth: !0,
                              select: !0,
                              label: 'Operating Machine',
                              size: 'small',
                              name: 'operatingMachineId',
                              value: r.operatingMachineId,
                              onChange: j,
                              required: !0,
                              disabled: $,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: q.map((n) =>
                                e.jsx(
                                  B,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                          : e.jsx(i, {
                              fullWidth: !0,
                              select: !0,
                              label: 'No of Heads',
                              size: 'small',
                              name: 'noOfHeads',
                              value: r.noOfHeads,
                              onChange: j,
                              required: !0,
                              disabled: $,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: H.map((n) =>
                                e.jsx(
                                  B,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Repeat Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'repeatSize',
                          value: r.repeatSize,
                          onChange: j,
                          disabled: $,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'No. of Repeats',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeats',
                          type: 'number',
                          value: r.repeats,
                          onChange: j,
                          required: !0,
                          disabled: $,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Total Fabric',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalFabric',
                          value: r.totalFabric,
                          onChange: j,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'UOM',
                          type: 'number',
                          defaultValue: '',
                          size: 'small',
                          name: 'uomId',
                          value: r.uomId,
                          onChange: j,
                          error: !!Q.uomId,
                          helperText: Q.uomId,
                          required: !0,
                          disabled: Te,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: Ce.map((n) =>
                            e.jsx(
                              B,
                              { value: n.lookUpId, children: n.lookUpName },
                              n.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Repeats in Meter',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeatsInMtr',
                          disabled: !0,
                          value: r.repeatsInMtr,
                          onChange: j,
                          sx: (n) => ({
                            ...(r.repeatsInMtr !== '' && {
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
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(i, {
                          label: 'Total',
                          fullWidth: !0,
                          size: 'small',
                          name: 'total',
                          value: r.total,
                          onChange: j,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: e.jsx(o, {
                          container: !0,
                          spacing: 1,
                          width: 'Inherit'
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        children: e.jsx(he, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Me,
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
        e.jsx(o, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(ie, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'MainCard',
              avatar: e.jsx(Ee, {}),
              title: 'View',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(o, {
              sx: { paddingY: 1, paddingX: 1 },
              children: e.jsx(o, {
                sx: {},
                item: !0,
                xs: 12,
                children: e.jsx(Ue, {
                  iColumns: We,
                  initialRows: we,
                  setInitialData: v,
                  deleteApi: s,
                  deleteBy: 'planningId',
                  refetch: F,
                  getCellClassName: d,
                  setAccordionExpanded: _,
                  fileName: 'PrePlanningList',
                  isLoading: te
                })
              })
            })
          ]
        })
      ]
    });
  },
  eo = $t,
  to = '/assets/roller-ezgif.com-instagif-CY-x4C-U.gif',
  oo = ({ initialValues: h }) => {
    const { user: S } = Fe();
    console.log('user', S);
    const [V, te] = a.useState(!0),
      [C, t] = a.useState([]),
      [v, l] = a.useState({
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
        createdBy: S.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    a.useEffect(() => {
      l({
        ...v,
        dpId: C.dpId || 0,
        fabricId: (C == null ? void 0 : C.fabricId) || '',
        colorId: (C == null ? void 0 : C.colorId) || '',
        color: (C == null ? void 0 : C.color) || '',
        processType: (C == null ? void 0 : C.processType) || '',
        availableQty: (C == null ? void 0 : C.availableQty) || '',
        Shrinkage: (C == null ? void 0 : C.shrinkage) || '',
        Wastage: (C == null ? void 0 : C.wastage) || '',
        outputQty: (C == null ? void 0 : C.outputQty) || 0,
        UOM: (C == null ? void 0 : C.uom) || 0,
        uomId: (C == null ? void 0 : C.uomId) || '',
        poPcs: (C == null ? void 0 : C.poPcs) || 0,
        createdOn:
          (C == null ? void 0 : C.createdOn) || new Date().toISOString(),
        createdBy: (C == null ? void 0 : C.createdBy) || S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    }, [C]);
    const { enqueueSnackbar: g } = Qe(),
      [r, y] = a.useState(!1);
    console.log('Dyeing form data to send', v);
    const { data: E } = Ye(),
      [p, P] = a.useState('');
    a.useEffect(() => {
      P(h.collectionId);
    }, []);
    const { data: m } = Re(),
      { data: z, refetch: u } = Xe(p, { skip: !p }),
      { data: F, refetch: D } = _e(v.designId, { skip: !v.designId }),
      { data: Z } = At(
        { batchNo: v.planningHeaderId, processType: 'Fabrication' },
        { skip: !v.planningHeaderId }
      ),
      { data: W } = Nt(
        { fabricId: v.fabricId, planningHeaderId: v.planningHeaderId },
        { skip: !v.fabricId || !v.planningHeaderId }
      ),
      { data: U, refetch: Y } = Lt(v.planningHeaderId, {
        skip: !v.planningHeaderId
      }),
      [J, w] = a.useState([]),
      [c, O] = a.useState([]),
      [x, q] = a.useState([]),
      [f, de] = a.useState([]),
      [ne, le] = a.useState([]),
      [fe, ce] = a.useState([]);
    a.useState([]);
    const [me, Ce] = a.useState(!1);
    console.log('batchList', c),
      console.log('formData', v),
      a.useEffect(() => {
        z && w(z.result);
      }, [z]),
      a.useEffect(() => {
        F && O(F.result);
      }, [F]),
      a.useEffect(() => {
        Z && q(Z.result);
      }, [Z]),
      a.useEffect(() => {
        W && ce(W.result);
      }, [W]),
      a.useEffect(() => {
        U && (te(!1), le(U.result.map((d, s) => ({ id: s + 1, ...d }))));
      }, [U, Y]),
      a.useEffect(() => {
        if (m) {
          const d = m.result[0];
          de(d.uomList);
        }
      }, [m]);
    const [M, H] = a.useState([]);
    a.useEffect(() => {
      E && H(E.result);
    }, [E]);
    const T = (d) => {
      const { name: s, value: k } = d.target;
      if (s === 'collectionId')
        M.find((n) => n.collectionId === parseInt(k)),
          P(k),
          y(!0),
          le([]),
          te(!0),
          l({
            ...v,
            collectionId: k,
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
            baseColorName: ''
          });
      else if (s === 'designId') {
        const n = J.find((b) => b.designId === parseInt(k));
        le([]),
          te(!0),
          l({
            ...v,
            designId: k,
            baseColorId: n ? n.colorId : '',
            baseColorName: n ? n.colorName : '',
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
      } else if (s === 'batchNo') {
        const n = c.find((b) => b.batchNo === k);
        l({
          ...v,
          batchNo: k,
          planningHeaderId: n ? n.planningHeaderId : '',
          poPcs: n ? n.poPcs : '',
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
          Ce(!0),
          y(!1);
      } else if (s === 'fabricId')
        x.find((n) => n.fabricId === k),
          console.log('Selected Fabric:', x),
          l({ ...v, fabricId: k });
      else if (s === 'ColorId') {
        const n = fe.find((b) => b.colorId === k.colorId);
        l({
          ...v,
          ColorId: k.colorId,
          color: n.color,
          availableQty: n.total,
          UOM: n.uom,
          Shrinkage: n.shrinkage,
          Wastage: n.wastage
        });
      } else
        s === 'processType'
          ? l({ ...v, processType: k })
          : s === 'vendorId'
            ? l({ ...v, vendorId: k })
            : (l({ ...v, [s]: k }), oe((n) => ({ ...n, [s]: '' })));
    };
    a.useEffect(() => {
      const d = () => {
          const N = parseFloat(v.availableQty) || 0,
            se = parseFloat(v.Shrinkage) || 0,
            I = parseFloat(v.Wastage) || 0;
          return ((N * (100 - (se + I))) / 100).toFixed(2);
        },
        s = () => {
          const N = parseFloat(v.availableQty) || 0,
            se = parseFloat(v.RatePerUOM) || 0;
          return (N * se).toFixed(2);
        },
        k = (N, se) => (N * (1 + se / 100)).toFixed(2),
        n = d(),
        b = s(),
        R = parseFloat(v.GST) || 0;
      k(b, R), parseFloat(v.poPcs), l((N) => ({ ...N, outputQty: n }));
    }, [
      v.availableQty,
      v.Shrinkage,
      v.Wastage,
      v.RatePerUOM,
      v.GST,
      v.poPcs,
      v.UnitRatePerPo
    ]);
    const [X, oe] = a.useState({}),
      $ = async () => {
        try {
          const d = await ve.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrinting',
            v
          );
          console.log('Save response:', d.data),
            d.data.success
              ? g('Dyeing saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (g(`${d.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', d.data.message)),
            l((s) => ({
              designId: s.designId,
              planningHeaderId: s.planningHeaderId,
              batchNo: s.batchNo,
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
              poPcs: s.poPcs,
              baseColorName: '',
              createdOn: new Date().toISOString(),
              createdBy: S.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: S.empId
            })),
            Y();
        } catch (d) {
          console.error('Error saving data:', d),
            g('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      ue = [
        { value: 'Dyeing', label: 'Dyeing' },
        { value: 'Printing', label: 'Printing' }
      ],
      [_, j] = a.useState(!0),
      [Q, L] = a.useState({}),
      [A, re] = a.useState(!1),
      be = (d) => {
        L(d), re(!0);
      },
      Me = (d) => {
        L(d), re(!0), j(!1);
      },
      je = () => {
        j(!0), re(!1), L({}), Y();
      },
      [ke, Se] = a.useState(0),
      [Ne, Le] = a.useState(0);
    a.useEffect(() => {
      const d = ne.reduce((k, n) => k + (n.availableQty ?? 0), 0).toFixed(2),
        s = ne.reduce((k, n) => k + (n.assignedQty ?? 0), 0).toFixed(2);
      Se(parseFloat(d).toLocaleString()), Le(parseFloat(s).toLocaleString());
    }, [ne]);
    const we = [
        ...ne,
        {
          id: 'TOTAL_SUMMARY',
          componentName: 'Total Summary',
          availableQty: ke,
          assignedQty: Ne
        }
      ],
      ee = { sortable: !1, pinnable: !1, hideable: !1 },
      We = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...ee,
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : d.value
        },
        { field: 'fabricName', headerName: 'Fabric', ...ee },
        {
          field: 'colorName',
          headerName: 'Color',
          ...ee,
          colSpan: (d, s) => (s.id === 'TOTAL_SUMMARY' ? 2 : void 0)
        },
        {
          field: 'processType',
          headerName: 'Process Type',
          ...ee,
          renderCell: (d) => {
            const s =
              d.value === 'Dyeing'
                ? 'primary.dark'
                : d.value === 'Printing'
                  ? 'success.dark'
                  : 'default';
            return e.jsx(qe, {
              label: d.value,
              sx: {
                backgroundColor:
                  s === 'primary' || s === 'default' ? void 0 : s,
                color: s === 'primary' || s === 'default' ? void 0 : 'white'
              },
              color:
                s === 'primary'
                  ? 'primary'
                  : s === 'default'
                    ? 'default'
                    : void 0
            });
          }
        },
        { field: 'uom', headerName: ' UOM', ...ee },
        { field: 'poPcs', headerName: ' PO PCS.', ...ee },
        {
          field: 'availableQty',
          headerName: 'Available Quantitity',
          ...ee,
          valueGetter: (d) => d.toLocaleString(),
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        {
          field: 'assignedQty',
          headerName: 'Assigned Qty',
          ...ee,
          valueGetter: (d) => d.toLocaleString(),
          colSpan: (d, s) => (s.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          ...ee,
          renderCell: (d) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(ft, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Be, {
                    color: 'primary',
                    onClick: () => be(d.row),
                    children: e.jsx(lt, {})
                  }),
                  e.jsx(Be, {
                    color: 'primary',
                    onClick: () => Me(d.row),
                    children: e.jsx(Ee, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ke, { src: to, sx: { background: 'transparent' } }),
              title: 'Add Dyeing and Printing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: p,
                      onChange: T,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: M.map((d) =>
                        e.jsx(
                          B,
                          { value: d.collectionId, children: d.collectionName },
                          d.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: v.designId,
                    onChange: T,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: J.map((d) =>
                      e.jsx(
                        B,
                        { value: d.designId, children: d.designNo },
                        d.designId
                      )
                    )
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: v.batchNo,
                      onChange: T,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: c.map((d) =>
                        e.jsx(
                          B,
                          { value: d.batchNo, children: d.batchNo },
                          d.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: v.baseColorName,
                    onChange: T,
                    disabled: !0,
                    sx: (d) => ({
                      ...(v.repeatsInMtr !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(ie, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: v.fabricId,
                    onChange: T,
                    error: !!X.fabricId,
                    helperText: X.fabricId,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: x.map((d) =>
                      e.jsx(
                        B,
                        { value: d.fabricId, children: d.fabric },
                        d.fabricId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(Gt, {
                    fullWidth: !0,
                    options: fe,
                    getOptionLabel: (d) => d.color || '',
                    renderInput: (d) =>
                      e.jsx(i, {
                        ...d,
                        label: 'Color',
                        name: 'colorId',
                        size: 'small',
                        error: !!X.colorId,
                        helperText: X.colorId,
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        sx: { '& input': { backgroundColor: 'white' } }
                      }),
                    PaperComponent: ({ children: d }) =>
                      e.jsx('div', {
                        style: {
                          backgroundColor: 'white',
                          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)'
                        },
                        children: d
                      }),
                    value: fe.find((d) => d.colorId === v.colorId) || null,
                    onChange: (d, s) => {
                      l((k) => ({
                        ...k,
                        colorId: s ? s.colorId : '',
                        color: s ? s.color : '',
                        availableQty: s ? s.total : '',
                        UOM: s ? s.uom : '',
                        uomId: s ? s.uomId : '',
                        Shrinkage: s ? s.shrinkage : '',
                        Wastage: s ? s.wastage : ''
                      }));
                    }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processType',
                    value: v.processType,
                    onChange: T,
                    error: !!X.processType,
                    helperText: X.processType,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ue.map((d) =>
                      e.jsx(B, { value: d.value, children: d.label }, d.value)
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: v.poPcs,
                    onChange: T,
                    disabled: !0,
                    sx: (d) => ({
                      ...(v.poPcs !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'UOM',
                    fullWidth: !0,
                    size: 'small',
                    name: 'UOM',
                    value: v.UOM,
                    onChange: T,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'availableQty',
                    value: v.availableQty,
                    onChange: T,
                    disabled: !0,
                    sx: (d) => ({
                      ...(v.availableQty !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 9,
                  sx: { marginTop: 2 },
                  textAlign: 'right',
                  children: e.jsx(he, {
                    variant: 'contained',
                    color: 'primary',
                    size: 'small',
                    onClick: $,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(ie, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        ' ',
        e.jsx(o, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(ie, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ee, {}),
              title: 'View Dyeing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(o, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(o, {
                item: !0,
                xs: 12,
                md: 12,
                paddingTop: 1,
                children: [
                  e.jsx(Ue, {
                    iColumns: We,
                    initialRows: we,
                    setInitialData: t,
                    deleteApi:
                      'http://100.42.177.77:81/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=',
                    deleteBy: 'dpId',
                    refetch: Y,
                    setAccordionExpanded: Ce,
                    fileName: 'Dyeing&PrintingList',
                    isLoading: V
                  }),
                  e.jsxs(ot, {
                    open: A,
                    onClose: je,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(at, {
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
                          e.jsx(ge, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Dyeing and Printing > Assign Vendors '
                          }),
                          e.jsx(Be, {
                            onClick: je,
                            sx: { color: '#ffffff' },
                            children: e.jsx(st, {})
                          })
                        ]
                      }),
                      e.jsxs(nt, {
                        children: [
                          e.jsx(rt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Jt, {
                            initialFormData: Q,
                            setInitialFormData: L,
                            refetchDyeingPrintingData: Y,
                            handleClickOpen: be,
                            showUpperDiv: _
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
  ao = oo,
  yt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nNXXaciVVRAH8Kv1Jtoi5psFZZYUtoimhUVlaJHZghK2UBFCtGkbZdgiBG1GHyowaaEdWogWElvMFjJpw4oWwrJsVetDtNNevxjeuXW8PPe991rvh/5w4TznnDkzZ87Mf+bWav8H4Dgcgc9wfcPanViFidioL5Rvj2/wIqbgCyzA3XgKH+BI/+DWijMGpYEjO1U+FH8Uh++Jj6yPNzG5YW5wccYxWItF6anwWP9OjJiE7/FuYcCTeDnHjQYsLWR3w8cYi/OxP57AzE49cSGewzgswfJ0/0u4HwfgWYyq3w5deBXH4wXchHU4GgvbVdwPR+EVPI1NMCDesviFos3SqIiTaSl7BW5Pw5/Ho3gYl2Nuu8G3NG+8X85tgcMxCxfhLBxWf/N08bJU+h52xRrciGdwdj7bsFbKx+fbnZTfe+cNflGNX/EQJqQ3Pi+MPgN3pAd/x8GtlO+BT/I2A1P4T+0hMuYdzC/Om56XCW/NyOCt5gs9Lo5oPxBD8u07xesZK5vjtjRqXKEj0vGEZgYsxGXYOKO8U/yE3ZN0PsSVuCHOLHTsgxVVykdmgAzKAGuFryvmLsDVBXnF+w9OCt+60BXcMarRgBA8D91Jvc2URrqNSZkJ+f1dUvRbDfu/wqbpiXmFrluCIUvlke+rsS3OaaJ8WUmxhewO+LYXT52KneLWhcx167EhRtQ3JKNVYUqTuAkmfDBStoncI7kvMmvLHAcdTywPORT35rjqbdfWySPzfDF+wAPF/Hb4skJ2Xa6HzL45fiwCvTRgJq7NvK/CmcXeuQ1rpxdrF1fIBvn0z5ScXuXFGk7Md4nbVeGUYu8lDWvnFmtzKmR/C+JpZcA03JXjqoBaWfD9VplGkqjq890VvUJgTfHuezUzYMdgsBxHRavCpAaZoQ3fQblVWJLrK0suaDSgXwbakCSTKkQp7WoiP6AX5pyVJPd3GjYzYgFmZzT/2OSwVdkLblOU7PuauF4+Z3fGxqWtDBiblawrWbE3hIFv4OcW++Ylta9uqyHVU3rnpNBr/h2WZ1WMrLmmpfJABEnW7uD44dlybwjCk8OyWX0/YqvWLvSUy3jTXbIt77QsL8q+YnReZnTbyuvA1OTuqZkhMyoqXSNWRH+Y8sem8sm1DYWehvLtjPrhObdzZspVuDnL7GnBI4XMPUlQIzZYeR3ZGc1ObzyeFW981viByRtjsttdnO3cyRF8tf8Serj8oPhjmu11tNqfZnpFzz8fh/TJn9O+xl9lMwg6mBWmPgAAAABJRU5ErkJggg==',
  no = ({ initialValues: h }) => {
    const { user: S } = Fe(),
      { enqueueSnackbar: V } = Qe(),
      [te, C] = a.useState(!0),
      [t, v] = a.useState([]),
      [l, g] = a.useState({
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
        createdBy: S.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    a.useEffect(() => {
      g({
        ...l,
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
        createdBy: (t == null ? void 0 : t.createdBy) || S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    }, [t]);
    const [r, y] = a.useState(!1),
      E = (s, k) => {
        y(!r);
      },
      [p, P] = a.useState(!1),
      { data: m } = Ye(),
      [z, u] = a.useState('');
    a.useEffect(() => {
      u(h.collectionId);
    }, []);
    const { data: F } = Re(),
      { data: D, refetch: Z } = Xe(z, { skip: !z }),
      { data: W, refetch: U } = _e(l.designId, { skip: !l.designId }),
      { data: Y } = $e(
        { batchNo: l.planningHeaderId, componentId: l.componentId },
        { skip: !l.planningHeaderId || !l.componentId }
      ),
      { data: J } = et(
        {
          batchNo: l.planningHeaderId,
          componentId: l.componentId,
          fabricId: l.fabricId
        },
        { skip: !l.planningHeaderId || !l.componentId || !l.fabricId }
      ),
      { data: w, refetch: c } = wt(l.planningHeaderId, {
        skip: !l.planningHeaderId
      }),
      { data: O } = tt(l.planningHeaderId, { skip: !l.planningHeaderId });
    console.log('formData.planningHeaderId', l.planningHeaderId),
      console.log('collectionData', m),
      console.log('schiffliList', w);
    const [x, q] = a.useState([]),
      [f, de] = a.useState([]),
      [ne, le] = a.useState([]),
      [fe, ce] = a.useState([]),
      [me, Ce] = a.useState([]),
      [M, H] = a.useState([]),
      [T, X] = a.useState([]),
      [oe, $] = a.useState([]),
      [ue, _] = a.useState([]);
    a.useEffect(() => {
      D && q(D.result);
    }, [D]),
      a.useEffect(() => {
        W && de(W.result);
      }, [W]),
      a.useEffect(() => {
        Y && le(Y.result);
      }, [Y]),
      a.useEffect(() => {
        J && X(Y.result);
      }, [J]),
      a.useEffect(() => {
        O && _(O.result);
      }, [O]),
      a.useEffect(() => {
        w && (C(!1), $(w.result.map((s, k) => ({ id: k + 1, ...s }))));
      }, [w, c]),
      a.useEffect(() => {
        if (F) {
          const s = F.result[0];
          ce(s.vendorList), Ce(s.operatingMachineList), H(s.workingHeadList);
        }
      }, [F]),
      console.log('initialRows', oe);
    const j = (m == null ? void 0 : m.result) || [];
    a.useEffect(() => {
      const s = () => {
        const N = parseFloat(l.thaanQty) || 0,
          se = parseFloat(l.operatingMachine) || 0;
        return (N * se).toFixed(2);
      };
      g((N) => ({ ...N, totalEmbroidry: s() }));
      const k = () => {
        const N = parseFloat(l.thaanQty) || 0,
          se = parseFloat(l.noOfItemPerThaan) || 0;
        return (N * se).toFixed(2);
      };
      g((N) => ({ ...N, totalPcs: k() }));
      const n = () => {
        const N = parseFloat(l.noOfStichesPerYard) || 0,
          se = parseFloat(l.rate) || 0;
        return ((N / 1e3) * se).toFixed(2);
      };
      g((N) => ({ ...N, amountPerYard: n() }));
      const b = () => {
        const N = parseFloat(l.totalAmount) || 0,
          se = parseFloat(l.totalPcs) || 0;
        return (N / se).toFixed(2);
      };
      g((N) => ({ ...N, costPerComponent: b() }));
      const R = () => {
        const N = parseFloat(l.amountPerYard) || 0,
          se = parseFloat(l.totalEmbroidry) || 0,
          I = parseFloat(l.laserCutRate) || 0,
          G = parseFloat(l.pcsForLaserCut) || 0;
        return (N * se + G * I).toFixed(2);
      };
      g((N) => ({ ...N, totalAmount: R() }));
    }, [
      l.thaanQty,
      l.operatingMachine,
      l.noOfStichesPerYard,
      l.rate,
      l.totalAmount,
      l.totalPcs,
      l.amountPerYard,
      l.totalEmbroidry,
      l.laserCutRate,
      l.pcsForLaserCut
    ]);
    const Q = (s) => {
        const { name: k, checked: n } = s.target;
        g((b) => ({ ...b, [k]: n }));
      },
      L = (s) => {
        const { name: k, value: n } = s.target;
        if (k === 'collectionId')
          j.find((b) => b.collectionId === parseInt(n)),
            u(n),
            P(!0),
            $([]),
            C(!0),
            g({
              ...l,
              collectionId: n,
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
              totalAmount: 0
            });
        else if (k === 'designId') {
          const b = x.find((R) => R.designId === parseInt(n));
          $([]),
            C(!0),
            g({
              ...l,
              designId: n,
              baseColorId: b ? b.colorId : '',
              baseColorName: b ? b.colorName : '',
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
        } else if (k === 'batchNo') {
          const b = f.find((R) => R.batchNo === n);
          g({
            ...l,
            batchNo: n,
            planningHeaderId: b ? b.planningHeaderId : '',
            poPcs: b ? b.poPcs : '',
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
            y(!0),
            P(!1);
        } else if (k === 'colorId') {
          const b = T.find((R) => R.colorId === n);
          g({
            ...l,
            colorId: n,
            availableQty: b ? b.total : '',
            cuttingSize: b ? b.cuttingSize : '',
            repeats: b ? b.repeats : ''
          });
        } else if (k === 'operatingMachineId') {
          const b = me.find((R) => R.lookUpId === n);
          g({
            ...l,
            operatingMachineId: n,
            operatingMachine: b ? b.lookUpName : ''
          });
        } else g({ ...l, [k]: n });
      };
    console.log('colors', T);
    const [A, re] = a.useState({}),
      be = async () => {
        const s = Me();
        if (Object.keys(s).length > 0) {
          re(s);
          return;
        }
        try {
          const k = await ve.post(
            'http://100.42.177.77:81/api/Schiffli/SaveSchiffili',
            l
          );
          console.log('Save response:', k.data),
            k.data.success
              ? V('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (V(`${k.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', k.data.message)),
            g((n) => ({
              designId: n.designId,
              planningHeaderId: n.planningHeaderId,
              batchNo: n.batchNo,
              baseColorName: n.baseColorName,
              schiffiliId: 0,
              componentId: '',
              poPcs: n.poPcs,
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
              createdBy: S.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: S.empId
            })),
            c();
        } catch (k) {
          console.error('Error saving data:', k),
            V('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      Me = () => {
        const s = {};
        return (
          l.fabricId || (s.fabricId = 'fabricId is required'),
          l.colorId || (s.colorId = 'colorId is required'),
          l.vendorId || (s.vendorId = 'vendorId is required'),
          l.componentId || (s.componentId = 'componentId is required'),
          l.thaanQty || (s.thaanQty = 'thaanQty is required'),
          l.workingHeadId || (s.workingHeadId = 'workingHeadId is required'),
          l.rate || (s.rate = 'rate is required'),
          l.operatingMachineId ||
            (s.operatingMachineId = 'operatingMachineId is required'),
          l.noOfStichesPerYard ||
            (s.noOfStichesPerYard = 'noOfStichesPerYard is required'),
          l.noOfItemPerThaan ||
            (s.noOfItemPerThaan = 'noOfItemPerThaan is required'),
          s
        );
      };
    console.log('formData', l);
    const [je, ke] = a.useState(0),
      [Se, Ne] = a.useState(0),
      [Le, we] = a.useState(0);
    a.useEffect(() => {
      const s = oe.reduce((b, R) => b + (R.totalAmount ?? 0), 0).toFixed(2),
        k = oe.reduce((b, R) => b + (R.totalEmbroidry ?? 0), 0).toFixed(2),
        n = oe.reduce((b, R) => b + (R.totalPcs ?? 0), 0).toFixed(2);
      ke(parseFloat(s).toLocaleString()),
        Ne(parseFloat(k).toLocaleString()),
        we(parseFloat(n).toLocaleString());
    }, [oe]);
    const ee = {
        id: 'TOTAL_SUMMARY',
        fabricName: 'Total Summary',
        totalAmount: je,
        totalEmbroidry: Se,
        totalPcs: Le
      },
      We = [...oe, ee],
      Te = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (s, k) => (k.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          renderCell: (s) =>
            s.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : s.value
        },
        {
          field: 'fabricName',
          headerName: 'Fabric',
          colSpan: (s, k) => (k.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (s) =>
            s.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : s.value
        },
        {
          field: 'componentName',
          headerName: 'Component',
          renderCell: (s) =>
            e.jsx(qe, {
              label: s.value,
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
          renderCell: (s) =>
            s.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: s.value
                })
              : s.value
        },
        { field: 'amountPerYard', headerName: 'Amount Per Yard' },
        {
          field: 'totalPcs',
          headerName: 'Total Pcs',
          renderCell: (s) =>
            s.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: s.value
                })
              : s.value
        },
        {
          field: 'totalAmount',
          headerName: 'Total Amount',
          renderCell: (s) =>
            s.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: s.value
                })
              : s.value
        },
        { field: 'costPerComponent', headerName: 'Cost Per Component' },
        { field: 'laserCutRate', headerName: 'LaserCut Rate' },
        { field: 'pcsForLaserCut', headerName: 'Laser Cut Pcs.' }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ke, { src: yt, sx: { background: 'transparent' } }),
              title: 'Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: z,
                      onChange: L,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: j.map((s) =>
                        e.jsx(
                          B,
                          { value: s.collectionId, children: s.collectionName },
                          s.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: l.designId,
                    onChange: L,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: x.map((s) =>
                      e.jsx(
                        B,
                        { value: s.designId, children: s.designNo },
                        s.designId
                      )
                    )
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: l.batchNo,
                      onChange: L,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: f.map((s) =>
                        e.jsx(
                          B,
                          { value: s.batchNo, children: s.batchNo },
                          s.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: l.baseColorName,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (s) => ({
                      ...(l.baseColorName !== '' && {
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
        e.jsx(ie, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(pt, {}),
              title: 'Add Schiffli ',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Be, {
                onClick: E,
                sx: { mt: '-18px' },
                children: e.jsx(Ze, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            ' ',
            e.jsxs(mt, {
              expanded: r,
              onChange: E,
              sx: {},
              children: [
                e.jsx(ht, {
                  expandIcon: e.jsx(Ze, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(gt, {
                  children: e.jsxs(o, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsxs(o, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: [
                          e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Components',
                            name: 'componentId',
                            value: l.componentId,
                            onChange: L,
                            size: 'small',
                            required: !0,
                            error: !!A.componentId,
                            helperText: A.componentId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: ue.map((s) =>
                              e.jsx(
                                B,
                                {
                                  value: s.componentId,
                                  children: s.componentName
                                },
                                s.componentId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Fabric',
                          defaultValue: '',
                          size: 'small',
                          name: 'fabricId',
                          value: l.fabricId,
                          onChange: L,
                          required: !0,
                          error: !!A.fabricId,
                          helperText: A.fabricId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ne.map((s) =>
                            e.jsx(
                              B,
                              { value: s.fabricId, children: s.fabric },
                              s.fabricId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Vendors',
                          defaultValue: '',
                          size: 'small',
                          name: 'vendorId',
                          value: l.vendorId,
                          onChange: L,
                          required: !0,
                          error: !!A.vendorId,
                          helperText: A.vendorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: fe.map((s) =>
                            e.jsx(
                              B,
                              { value: s.lookUpId, children: s.lookUpName },
                              s.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Color',
                          size: 'small',
                          name: 'colorId',
                          value: l.colorId,
                          onChange: L,
                          required: !0,
                          error: !!A.colorId,
                          helperText: A.colorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: T.map((s) =>
                            e.jsx(
                              B,
                              { value: s.colorId, children: s.color },
                              s.colorId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Po Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: l.poPcs,
                          disabled: !0,
                          onChange: L,
                          sx: (s) => ({
                            ...(l.poPcs !== '' && {
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
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Available Quantity',
                          fullWidth: !0,
                          size: 'small',
                          name: 'availableQty',
                          value: l.availableQty,
                          onChange: L,
                          sx: (s) => ({
                            ...(l.availableQty !== '' && {
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
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Thaan Quantity',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'thaanQty',
                          value: l.thaanQty,
                          onChange: L,
                          required: !0,
                          error: !!A.thaanQty,
                          helperText: A.thaanQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Operating Machine',
                          defaultValue: '',
                          size: 'small',
                          name: 'operatingMachineId',
                          value: l.operatingMachineId,
                          onChange: L,
                          required: !0,
                          error: !!A.operatingMachineId,
                          helperText: A.operatingMachineId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: me.map((s) =>
                            e.jsx(
                              B,
                              { value: s.lookUpId, children: s.lookUpName },
                              s.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Working Head',
                          defaultValue: '',
                          size: 'small',
                          name: 'workingHeadId',
                          value: l.workingHeadId,
                          onChange: L,
                          required: !0,
                          error: !!A.workingHeadId,
                          helperText: A.workingHeadId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: M.map((s) =>
                            e.jsx(
                              B,
                              { value: s.lookUpId, children: s.lookUpName },
                              s.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'cuttingSize',
                          value: l.cuttingSize,
                          onChange: L,
                          sx: (s) => ({
                            ...(l.cuttingSize !== '' && {
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
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'rate',
                          value: l.rate,
                          onChange: L,
                          required: !0,
                          error: !!A.rate,
                          helperText: A.rate,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Stiches Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'noOfStichesPerYard',
                          value: l.noOfStichesPerYard,
                          onChange: L,
                          required: !0,
                          error: !!A.noOfStichesPerYard,
                          helperText: A.noOfStichesPerYard,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Items Per Thaan',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'noOfItemPerThaan',
                          value: l.noOfItemPerThaan,
                          onChange: L,
                          required: !0,
                          error: !!A.noOfItemPerThaan,
                          helperText: A.noOfItemPerThaan,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Total Embroidry',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalEmbroidry',
                          type: 'number',
                          value: l.totalEmbroidry,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Amount Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'amountPerYard',
                          value: l.amountPerYard,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Total Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalPcs',
                          value: l.totalPcs,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Cost Per Component',
                          fullWidth: !0,
                          size: 'small',
                          name: 'costPerComponent',
                          value: l.costPerComponent,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(i, {
                          label: 'Total Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'totalAmount',
                          value: l.totalAmount,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(bt, {
                          control: e.jsx(It, {
                            checked: l.laserCut,
                            onChange: Q,
                            name: 'laserCut'
                          }),
                          label: 'Laser Cut'
                        })
                      }),
                      l.laserCut
                        ? e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 4.5,
                            children: e.jsxs(o, {
                              container: !0,
                              spacing: 1,
                              width: 'Inherit',
                              children: [
                                e.jsx(o, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(i, {
                                    label: 'Laser Cut Rate',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'laserCutRate',
                                    value: l.laserCutRate,
                                    onChange: L,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                }),
                                e.jsx(o, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(i, {
                                    label: 'Pcs For LaserCut',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'pcsForLaserCut',
                                    value: l.pcsForLaserCut,
                                    onChange: L,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                })
                              ]
                            })
                          })
                        : null,
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        sx: { mt: 2 },
                        children: e.jsx(he, {
                          variant: 'contained',
                          size: 'small',
                          onClick: be,
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
        e.jsx(o, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(ie, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ee, {}),
              title: 'View Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(o, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsx(o, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: e.jsx(Ue, {
                  iColumns: Te,
                  initialRows: We,
                  setInitialData: v,
                  deleteApi:
                    'http://100.42.177.77:81/api/Schiffli/DeleteSchiffiById?schiffiId=',
                  deleteBy: 'schiffiliId',
                  refetch: c,
                  setAccordionExpanded: y,
                  fileName: 'Schffili List',
                  isLoading: te
                })
              })
            })
          ]
        })
      ]
    });
  },
  ro = no,
  so = ({
    additionalProcessData: h,
    setAdditionalProcessData: S,
    refetchAdditionalProcessList: V,
    handleClickOpen: te
  }) => {
    const { user: C } = Fe(),
      [t, v] = a.useState([]),
      { enqueueSnackbar: l } = Qe(),
      [g, r] = a.useState({}),
      [y, E] = a.useState([]),
      p = t.reduce((w, c) => w + (c.quantity ?? 0), 0).toFixed(2);
    console.log('Quantity', p);
    const [P, m] = a.useState({
      additionalProcessDetId: 0,
      additionalProcessId: h.additionalProcessId || 0,
      designId: h.designNo || '',
      planningHeaderId: h.planningHeaderId || 0,
      batchNo: h.batchNo || '',
      componentName: h.componentName || '',
      componentId: h.componentId || '',
      colorName: h.colorName || '',
      colorId: h.colorId || '',
      fabricName: h.fabricName || '',
      fabricId: h.fabricId || '',
      uomId: h.uomId || '',
      uom: h.uom || '',
      vendorId: '',
      pcsPerComponent: h.pcsPerComponent || '',
      remainingPcsPerComponent: h.pcsPerComponent - p || '',
      processTypeName: h.processTypeName || '',
      processTypeId: h.processTypeId || '',
      quantity: '',
      ratePerPcs: 0,
      totalAmount: 0,
      costPerComponent: '',
      createdOn: new Date().toISOString(),
      createdBy: C.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: C.empId
    });
    a.useEffect(() => {
      m((w) => ({
        ...w,
        additionalProcessDetId: y.additionalProcessDetId || 0,
        vendorId: (y == null ? void 0 : y.vendorId) || '',
        quantity: (y == null ? void 0 : y.quantity) || '',
        ratePerPcs: (y == null ? void 0 : y.ratePerPcs) || '',
        remainingPcsPerComponent:
          w.remainingPcsPerComponent + (y == null ? void 0 : y.quantity) || '',
        totalAmount: (y == null ? void 0 : y.totalAmount) || '',
        costPerComponent: (y == null ? void 0 : y.costPerComponent) || 0,
        createdOn:
          (y == null ? void 0 : y.createdOn) || new Date().toISOString(),
        createdBy: (y == null ? void 0 : y.createdBy) || C.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: C.empId
      }));
    }, [y]),
      a.useEffect(() => {
        m({
          ...P,
          remainingPcsPerComponent:
            h.pcsPerComponent - p >= 0 ? h.pcsPerComponent - p : ''
        });
      }, [t, h.pcsPerComponent, p]);
    const { data: z } = Re(),
      { data: u, refetch: F } = Tt(P.additionalProcessId, {
        skip: !P.additionalProcessId
      }),
      [D, Z] = a.useState([]);
    a.useEffect(() => {
      if (z) {
        const w = z.result[0];
        Z(w.vendorList);
      }
    }, [z]),
      a.useEffect(() => {
        u && v(u.result.map((w, c) => ({ id: c + 1, ...w })));
      }, [u, F]),
      console.log('initialRows', t);
    const W = (w) => {
      const { name: c, value: O } = w.target;
      m({ ...P, [c]: O }),
        m((x) => {
          const q = { ...x, [c]: O };
          if (c === 'quantity' || c === 'remainingPcsPerComponent') {
            const f = q.quantity,
              de = q.remainingPcsPerComponent;
            f > de
              ? r((ne) => ({
                  ...ne,
                  quantity:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : r((ne) => ({ ...ne, quantity: '' }));
          }
          return q;
        });
    };
    a.useEffect(() => {
      const w = () => {
        const O = parseFloat(P.quantity) || 0,
          x = parseFloat(P.ratePerPcs) || 0;
        return (O * x).toFixed(2);
      };
      m((O) => ({ ...O, totalAmount: w() }));
      const c = () => {
        const O = parseFloat(P.totalAmount) || 0,
          x = parseFloat(P.poPcs) || 0;
        return (O / x).toFixed(2);
      };
      m((O) => ({ ...O, costPerComponent: c() }));
    }, [P.quantity, P.ratePerPcs, P.totalAmount]);
    const U = async () => {
        if ((console.log(P), P.quantity > P.remainingPcsPerComponent)) {
          l('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const w = await ve.post(
            'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcessDetails',
            P
          );
          console.log('Save response:', w.data),
            w.data.success
              ? l('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (l(`${w.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', w.data.message)),
            F(),
            m((c) => ({
              ...c,
              vendorId: '',
              pcsPerComponent: h.pcsPerComponent || '',
              quantity: '',
              ratePerPcs: 0,
              totalAmount: 0,
              costPerComponent: '',
              remainingPcsPerComponent: h.pcsPerComponent - p || '',
              createdOn: new Date().toISOString(),
              createdBy: C.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: C.empId
            })),
            V();
        } catch (w) {
          console.error('Error saving data:', w),
            l('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      Y = [
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
    return e.jsxs(Ae, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs(o, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                fullWidth: !0,
                label: 'Select Design',
                name: 'designId',
                value: P.designId,
                onChange: W,
                size: 'small',
                disabled: !0,
                sx: (w) => ({
                  ...(P.designId !== '' && {
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
            e.jsxs(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(i, {
                  fullWidth: !0,
                  label: 'Batch No.',
                  name: 'batchNo',
                  value: P.batchNo,
                  onChange: W,
                  size: 'small',
                  disabled: !0,
                  sx: (w) => ({
                    ...(P.batchNo !== '' && {
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
            e.jsxs(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(i, {
                  fullWidth: !0,
                  label: 'Components',
                  name: 'componentName',
                  value: P.componentName,
                  onChange: W,
                  size: 'small',
                  disabled: !0,
                  sx: (w) => ({
                    ...(P.componentName !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                fullWidth: !0,
                label: 'Select Fabric',
                defaultValue: '',
                size: 'small',
                name: 'fabricName',
                value: P.fabricName,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.fabricName !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                fullWidth: !0,
                label: 'Color',
                size: 'small',
                name: 'colorName',
                value: P.colorName,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.colorName !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                fullWidth: !0,
                label: 'Process Type',
                defaultValue: '',
                size: 'small',
                name: 'processTypeName',
                value: P.processTypeName,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.processTypeName !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(i, {
                label: 'Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'pcsPerComponent',
                value: P.pcsPerComponent,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.pcsPerComponent !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(i, {
                label: 'Remaining Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'remainingPcsPerComponent',
                value: P.remainingPcsPerComponent,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.remainingPcsPerComponent !== '' && {
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
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                label: 'UOM',
                fullWidth: !0,
                size: 'small',
                name: 'uom',
                value: P.uom,
                onChange: W,
                disabled: !0,
                sx: (w) => ({
                  ...(P.uom !== '' && {
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
        e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(o, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: P.vendorId,
                onChange: W,
                disabled: !P.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } },
                children: D.map((w) =>
                  e.jsx(
                    B,
                    { value: w.lookUpId, children: w.lookUpName },
                    w.lookUpId
                  )
                )
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                label: 'Quantity',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'quantity',
                value: P.quantity,
                onChange: W,
                disabled: !P.remainingPcsPerComponent,
                error: !!g.quantity,
                helperText: g.quantity,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                label: 'Rate Per Pcs',
                type: 'number',
                fullWidth: !0,
                size: 'small',
                name: 'ratePerPcs',
                value: P.ratePerPcs,
                onChange: W,
                disabled: !P.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(i, {
                label: 'Total Amount',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'totalAmount',
                value: P.totalAmount,
                onChange: W,
                disabled: !P.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(he, {
                variant: 'contained',
                size: 'small',
                onClick: U,
                disabled: !P.remainingPcsPerComponent,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(ie, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx(o, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsx(o, {
            sx: { marginTop: 2 },
            item: !0,
            xs: 12,
            children: e.jsx(Ue, {
              iColumns: Y,
              initialRows: t,
              setInitialData: E,
              deleteApi:
                'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=',
              deleteBy: 'additionalProcessDetId',
              refetch: F
            })
          })
        })
      ]
    });
  },
  lo = ({ initialValues: h }) => {
    const { user: S } = Fe(),
      { enqueueSnackbar: V } = Qe(),
      [te, C] = a.useState(!0),
      [t, v] = a.useState([]),
      [l, g] = a.useState({
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
        createdBy: S.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: S.empId
      });
    console.log('initialData', t),
      a.useEffect(() => {
        g({
          ...l,
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
          createdBy: (t == null ? void 0 : t.createdBy) || S.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: S.empId
        });
      }, [t]);
    const [r, y] = a.useState(!1),
      { data: E } = Ye(),
      [p, P] = a.useState('');
    a.useEffect(() => {
      P(h.collectionId);
    }, []);
    const { data: m } = Re(),
      { data: z, refetch: u } = Xe(p, { skip: !p }),
      { data: F, refetch: D } = _e(l.designId, { skip: !l.designId }),
      { data: Z } = $e(
        { batchNo: l.planningHeaderId, componentId: l.componentId },
        { skip: !l.planningHeaderId || !l.componentId }
      ),
      { data: W } = et(
        {
          batchNo: l.planningHeaderId,
          componentId: l.componentId,
          fabricId: l.fabricId
        },
        { skip: !l.planningHeaderId || !l.componentId || !l.fabricId }
      ),
      { data: U, refetch: Y } = Bt(l.planningHeaderId, {
        skip: !l.planningHeaderId
      }),
      { data: J } = tt(l.planningHeaderId, { skip: !l.planningHeaderId });
    console.log('lookupData', m),
      console.log('collectionData', E),
      console.log('colorData', W);
    const [w, c] = a.useState([]),
      [O, x] = a.useState([]),
      [q, f] = a.useState([]),
      [de, ne] = a.useState([]),
      [le, fe] = a.useState([]),
      [ce, me] = a.useState([]),
      [Ce, M] = a.useState([]),
      [H, T] = a.useState([]),
      [X, oe] = a.useState([]),
      [$, ue] = a.useState([]),
      [_, j] = a.useState([]);
    console.log('batchData', F);
    const [Q, L] = a.useState([]);
    a.useEffect(() => {
      E && L(E.result);
    }, [E]),
      a.useEffect(() => {
        z && c(z.result);
      }, [z]),
      a.useEffect(() => {
        F && x(F.result);
      }, [F]),
      a.useEffect(() => {
        Z && f(Z.result);
      }, [Z]),
      a.useEffect(() => {
        W && oe(W.result);
      }, [W]),
      a.useEffect(() => {
        J && j(J.result);
      }, [J]),
      a.useEffect(() => {
        if (m) {
          const d = m.result[0];
          fe(d.uomList), me(d.processList);
        }
      }, [m]),
      a.useEffect(() => {
        U && (C(!1), ue(U.result.map((d, s) => ({ id: s + 1, ...d }))));
      }, [U, Y]),
      a.useEffect(() => {
        if (m) {
          const d = m.result[0];
          ne(d.vendorList), M(d.operatingMachineList), T(d.workingHeadList);
        }
      }, [m]),
      console.log('initialRows', $);
    const A = (d) => {
      const { name: s, value: k } = d.target;
      if (s === 'collectionId')
        Q.find((n) => n.collectionId === parseInt(k)),
          P(k),
          ue([]),
          C(!0),
          g({
            ...l,
            collectionId: k,
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
            createdBy: S.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: S.empId
          });
      else if (s === 'designId') {
        const n = w.find((b) => b.designId === parseInt(k));
        ue([]),
          C(!0),
          g({
            ...l,
            designId: k,
            baseColorId: n ? n.colorId : '',
            baseColorName: n ? n.colorName : '',
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
            createdBy: S.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: S.empId
          });
      } else if (s === 'batchNo') {
        const n = O.find((b) => b.batchNo === k);
        g({
          ...l,
          batchNo: k,
          planningHeaderId: n ? n.planningHeaderId : '',
          poPcs: n ? n.poPcs : '',
          componentId: '',
          colorId: '',
          fabricId: '',
          uomId: '',
          pcsPerComponent: '',
          processTypeId: '',
          createdOn: new Date().toISOString(),
          createdBy: S.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: S.empId
        }),
          y(!0);
      } else g({ ...l, [s]: k });
    };
    console.log('colors', X);
    const re = async () => {
      console.log('formData', l);
      try {
        const d = await ve.post(
          'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcess',
          l
        );
        console.log('Save response:', d.data),
          d.data.success
            ? V('Process saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (V(`${d.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', d.data.message)),
          g((s) => ({
            additionalProcessId: 0,
            designId: s.designId,
            planningHeaderId: s.planningHeaderId,
            batchNo: s.batchNo,
            baseColorName: s.baseColorName,
            poPcs: s.poPcs,
            componentId: '',
            colorId: '',
            fabricId: '',
            uomId: '',
            pcsPerComponent: '',
            processTypeId: '',
            createdOn: new Date().toISOString(),
            createdBy: S.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: S.empId
          })),
          Y();
      } catch (d) {
        console.error('Error saving data:', d),
          V('Process not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    console.log('formData', l),
      a.forwardRef(function (s, k) {
        return e.jsx(Ft, { direction: 'up', ref: k, ...s });
      });
    const [be, Me] = a.useState({}),
      [je, ke] = a.useState(!1),
      Se = (d) => {
        Me(d), ke(!0);
      },
      Ne = () => {
        ke(!1), Me({}), Y();
      },
      [Le, we] = a.useState(0);
    a.useEffect(() => {
      const d = $.reduce((s, k) => s + (k.assignedQty ?? 0), 0).toFixed(2);
      we(parseFloat(d).toLocaleString());
    }, [$]);
    const ee = [...$, { id: 'TOTAL_SUMMARY', assignedQty: Le }],
      We = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (d, s) => (s.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : d.value
        },
        { field: 'designNo', headerName: 'Design' },
        { field: 'batchNo', headerName: 'Batch' },
        {
          field: 'componentName',
          headerName: 'Component',
          renderCell: (d) =>
            e.jsx(qe, {
              label: d.value,
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
          colSpan: (d, s) => (s.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          valueGetter: (d) => d,
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (d) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(Be, {
                color: 'primary',
                onClick: () => Se(d.row),
                children: e.jsx(lt, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ke, { src: yt, sx: { background: 'transparent' } }),
              title: 'Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: p,
                      onChange: A,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Q.map((d) =>
                        e.jsx(
                          B,
                          { value: d.collectionId, children: d.collectionName },
                          d.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: l.designId,
                    onChange: A,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: w.map((d) =>
                      e.jsx(
                        B,
                        { value: d.designId, children: d.designNo },
                        d.designId
                      )
                    )
                  })
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: l.batchNo,
                      onChange: A,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: O.map((d) =>
                        e.jsx(
                          B,
                          { value: d.batchNo, children: d.batchNo },
                          d.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: l.baseColorName,
                    onChange: A,
                    disabled: !0,
                    sx: (d) => ({
                      ...(l.baseColorName !== '' && {
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
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(ie, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(i, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: l.componentId,
                      onChange: A,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: _.map((d) =>
                        e.jsx(
                          B,
                          { value: d.componentId, children: d.componentName },
                          d.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: l.fabricId,
                    onChange: A,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: q.map((d) =>
                      e.jsx(
                        B,
                        { value: d.fabricId, children: d.fabric },
                        d.fabricId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: l.colorId,
                    onChange: A,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: X.map((d) =>
                      e.jsx(
                        B,
                        { value: d.colorId, children: d.color },
                        d.colorId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: l.poPcs,
                    onChange: A,
                    disabled: !0,
                    sx: (d) => ({
                      ...(l.poPcs !== '' && {
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
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(i, {
                    label: 'Pcs. Per Component',
                    fullWidth: !0,
                    size: 'small',
                    name: 'pcsPerComponent',
                    value: l.pcsPerComponent,
                    onChange: A,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'UOM',
                    type: 'number',
                    defaultValue: 140,
                    size: 'small',
                    name: 'uomId',
                    value: l.uomId,
                    onChange: A,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: le.map((d) =>
                      e.jsx(
                        B,
                        { value: d.lookUpId, children: d.lookUpName },
                        d.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processTypeId',
                    value: l.processTypeId,
                    onChange: A,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ce.map((d) =>
                      e.jsx(
                        B,
                        { value: d.lookUpId, children: d.lookUpName },
                        d.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 0 },
                  children: e.jsx(he, {
                    variant: 'contained',
                    size: 'small',
                    onClick: re,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(ie, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ee, {}),
              title: 'View Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(o, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(o, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  e.jsx(Ue, {
                    iColumns: We,
                    initialRows: ee,
                    setInitialData: v,
                    deleteApi:
                      'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcess?adId=',
                    deleteBy: 'additionalProcessId',
                    refetch: Y,
                    setAccordionExpanded: y,
                    fileName: 'AdditionalProcess',
                    isLoading: te
                  }),
                  e.jsxs(ot, {
                    open: je,
                    onClose: Ne,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(at, {
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
                          e.jsx(ge, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Additional Process > Assign Vendors '
                          }),
                          e.jsx(Be, {
                            onClick: Ne,
                            sx: { color: '#ffffff' },
                            children: e.jsx(st, {})
                          })
                        ]
                      }),
                      e.jsxs(nt, {
                        children: [
                          e.jsx(rt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(so, {
                            additionalProcessData: be,
                            setAdditionalProcessData: Me,
                            refetchAdditionalProcessList: Y,
                            handleClickOpen: Se
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
  io = lo;
function co({ initialValues: h }) {
  const [S, V] = a.useState(!0),
    { data: te } = Re(),
    [C, t] = a.useState([]),
    [v, l] = a.useState([]),
    [g, r] = a.useState([]),
    [y, E] = a.useState([]),
    [p, P] = a.useState([]);
  Fe(),
    a.useEffect(() => {
      te &&
        (r(te.result[0].vendorList),
        l(te.result[0].serviceList),
        t(te.result[0].serviceTypeList),
        P(te.result[0].uomList));
    }, [te]);
  const [m, z] = a.useState({
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
    costperPiece: '',
    uom: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });
  a.useEffect(() => {
    z({ ...m, collectionId: (h == null ? void 0 : h.collectionId) || '' });
  }, [z]);
  const u = async (c) => {
    const { name: O, value: x } = c.target;
    if (
      (console.log(`Updating ${O} to ${x}`),
      z({ ...m, [O]: x }),
      O === 'collectionId')
    ) {
      const q = y.find((f) => f.collectionId === x);
      q && z((f) => ({ ...f, poPcs: q.poPcs }));
    }
  };
  a.useEffect(() => {
    const c = () => {
      const x = parseFloat(m.qty) || 0,
        q = parseFloat(m.rate) || 0;
      return (x * q).toFixed(2);
    };
    z((x) => ({ ...x, totalAmount: c() }));
    const O = () => {
      const x = parseFloat(m.poPcs) || 0,
        q = parseFloat(m.totalAmount) || 0;
      return (x / q).toFixed(2);
    };
    z((x) => ({ ...x, costperPiece: O() }));
  }, [m.qty, m.rate, m.totalAmount, m.costperPiece]);
  const F = async () => {
    try {
      const c = await ve.post(
        'http://100.42.177.77:81/api/AdditionalServices/SaveAdditionalServices',
        m
      );
      console.log('Form data saved:', c.data),
        z({
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
    } catch (c) {
      console.error('Error saving data:', c);
    }
  };
  a.useEffect(() => {
    (async () => {
      try {
        const O = await ve.get(
          'http://100.42.177.77:81/api/CollectionRegistration/GetCollectionList?appId=1'
        );
        console.log('GetCollectionFromPlanningHeader', O), E(O.data.result);
      } catch (O) {
        console.error('Error fetching design options:', O);
      }
    })();
  }, []);
  const [D, Z] = a.useState([]),
    W = a.useCallback(async () => {
      try {
        const c = await ve.get(
          `http://100.42.177.77:81/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${m.collectionId}`
        );
        Array.isArray(c.data.result)
          ? (V(!1), Z(c.data.result.map((O, x) => ({ id: x + 1, ...O }))))
          : (console.error(
              'API returned unexpected data format:',
              c.data.result
            ),
            Z([]));
      } catch (c) {
        console.error('Error fetching data:', c), Z([]);
      }
    }, [m.collectionId]);
  a.useEffect(() => {
    W();
  }, [W]);
  const [U, Y] = a.useState(0);
  a.useEffect(() => {
    const c = D.reduce((O, x) => O + (x.totalAmount ?? 0), 0).toFixed(2);
    Y(parseFloat(c).toLocaleString());
  }, [D]);
  const J = [...D, { id: 'TOTAL_SUMMARY', totalAmount: U }],
    w = [
      {
        field: 'id',
        headerName: 'Sr#',
        colSpan: (c, O) => (O.id === 'TOTAL_SUMMARY' ? 4 : void 0),
        renderCell: (c) =>
          c.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: 'black', fontWeight: 'bold' },
                children: 'Total Summary'
              })
            : c.value
      },
      { field: 'collectionName', headerName: 'Collection Name' },
      {
        field: 'serviceType',
        headerName: 'Service Type',
        renderCell: (c) =>
          e.jsx(qe, {
            label: c.value,
            sx: { backgroundColor: 'primary.dark', color: 'white' },
            color: void 0
          })
      },
      {
        field: 'serviceListName',
        headerName: 'Service List Name',
        renderCell: (c) =>
          e.jsx(qe, {
            label: c.value,
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
        renderCell: (c) =>
          c.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: '#a11f23', fontWeight: 'bold' },
                children: c.value
              })
            : c.value
      },
      { field: 'costperPiece', headerName: 'Cost per Piece' }
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(xe, {
        variant: 'outlined',
        children: [
          e.jsx(ye, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsxs(o, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(o, {
                item: !0,
                xs: 12,
                md: 4,
                children: e.jsx(i, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Select Collection',
                  name: 'collectionId',
                  value: m.collectionId,
                  onChange: u,
                  size: 'small',
                  InputLabelProps: { sx: { color: 'black' } },
                  children:
                    y.length > 0
                      ? y.map((c) =>
                          e.jsx(
                            B,
                            {
                              id: 'collectionId',
                              value: c.collectionId,
                              children: c.collectionName
                            },
                            c.collectionId
                          )
                        )
                      : e.jsx(B, {
                          disabled: !0,
                          children: 'No Collections Available'
                        })
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service Type',
                  name: 'serviceTypeId',
                  value: m.serviceTypeId,
                  onChange: u,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: C.map((c) =>
                    e.jsx(
                      B,
                      { value: c.lookUpId, children: c.lookUpName },
                      c.lookUpId
                    )
                  )
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service List Id',
                  name: 'serviceListId',
                  value: m.serviceListId,
                  onChange: u,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: v.map((c) =>
                    e.jsx(
                      B,
                      { value: c.lookUpId, children: c.lookUpName },
                      c.lookUpId
                    )
                  )
                })
              }),
              e.jsx(o, {
                item: !0,
                xs: 12,
                md: 4,
                children: e.jsx(i, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Vendor Name',
                  size: 'small',
                  name: 'vendorId',
                  value: m.vendorId,
                  onChange: u,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: g.map((c) =>
                    e.jsx(
                      B,
                      { value: c.lookUpId, children: c.lookUpName },
                      c.lookUpId
                    )
                  )
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-required',
                  label: "PO PC's",
                  name: 'poPcs',
                  value: m.poPcs,
                  onChange: u,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  disabled: !0,
                  sx: (c) => ({
                    ...(m.poPcs !== '' && {
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
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-required',
                  label: 'Qty',
                  name: 'qty',
                  value: m.qty,
                  onChange: u,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  fullWidth: !0,
                  select: !0,
                  label: 'UOM',
                  defaultValue: '',
                  size: 'small',
                  name: 'uomId',
                  value: m.uomId,
                  onChange: u,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: p.map((c) =>
                    e.jsx(
                      B,
                      { value: c.lookUpId, children: c.lookUpName },
                      c.lookUpId
                    )
                  )
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-required',
                  label: 'Rate',
                  name: 'rate',
                  value: m.rate,
                  onChange: u,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-required',
                  label: 'Total Amount',
                  name: 'totalAmount',
                  value: m.totalAmount,
                  onChange: u,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(i, {
                  id: 'outlined-required',
                  label: 'Cost per Piece',
                  name: 'costperPiece',
                  value: m.costperPiece,
                  onChange: u,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(o, {
                item: !0,
                md: 12,
                width: 'inherit',
                paddingX: 1,
                textAlign: 'right',
                children: e.jsx(he, {
                  variant: 'contained',
                  color: 'primary',
                  size: 'small',
                  onClick: F,
                  children: 'Save'
                })
              })
            ]
          })
        ]
      }),
      e.jsx(ie, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      e.jsxs(xe, {
        variant: 'outlined',
        children: [
          e.jsx(ye, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'View Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsx(Ue, { iColumns: w, initialRows: J, isLoading: S })
        ]
      })
    ]
  });
}
Qt(Rt)(({ theme: h }) => ({
  backgroundColor: h.palette.primary.main,
  color: h.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${h.palette.grey[400]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${h.palette.grey[400]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));
const uo = ({
    initialValues: h,
    setActiveStep: S,
    collectionId: V,
    setInitialValues: te
  }) => {
    var T, X, oe, $, ue, _;
    Fe(), Qe(), a.useState([]);
    const { data: C } = Ye(),
      [t, v] = a.useState(null),
      [l, g] = a.useState(!1);
    De();
    const [r, y] = a.useState(V || ''),
      E = (j) => {
        H.current &&
          H.current.autosizeColumns &&
          H.current.autosizeColumns({
            includeOutliers: !0,
            includeHeaders: !0
          });
      },
      [p, P] = a.useState({ designId: '', planningHeaderId: 0, batchNo: '' });
    a.useEffect(() => {
      te({
        collectionId: (p == null ? void 0 : p.collectionId) || '',
        designId: (p == null ? void 0 : p.designId) || '',
        planningHeaderId: (p == null ? void 0 : p.planningHeaderId) || '',
        batchNo: (p == null ? void 0 : p.batchNo) || ''
      });
    }, [p.collectionId, p.designId, p == null ? void 0 : p.batchNo]);
    const { data: m, refetch: z } = Xe(r, { skip: !r }),
      { data: u, refetch: F } = _e(p.designId, { skip: !p.designId }),
      [D, Z] = a.useState([]),
      [W, U] = a.useState([]),
      [Y, J] = a.useState([]);
    a.useEffect(() => {
      C && J(C.result);
    }, [C]),
      a.useEffect(() => {
        m && Z(m.result);
      }, [m]),
      a.useEffect(() => {
        u && U(u.result);
      }, [u]);
    const w = (j) => {
      const { name: Q, value: L } = j.target;
      if (
        (console.log(`handleChange called with name: ${Q}, value: ${L}`),
        Q === 'collectionId')
      )
        y(L),
          P({
            ...p,
            collectionId: L,
            designId: '',
            planningHeaderId: 0,
            batchNo: ''
          });
      else if (Q === 'designId') P({ ...p, designId: L, planningHeaderId: 0 });
      else if (Q === 'batchNo') {
        const A = W.find((re) => re.batchNo === L);
        P({ ...p, batchNo: L, planningHeaderId: A ? A.planningHeaderId : '' }),
          A && c(A.planningHeaderId);
      } else P({ ...p, [Q]: L });
    };
    console.log('Selected collection ID:', r),
      console.log('Form data:', p),
      console.log('Design list:', D),
      console.log('Batch list:', W);
    const c = async (j) => {
      g(!0);
      try {
        const Q = await ve.get(
          `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${j}`
        );
        Q.data.success ? v(Q.data.result) : console.error(Q.data.message);
      } catch (Q) {
        console.error('Failed to fetch summary data', Q);
      } finally {
        g(!1);
      }
    };
    console.log(t);
    const O = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'planningProcessTypeName', headerName: 'Process Type' },
        { field: 'componentsCount', headerName: 'Components Count' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        { field: 'totalFabricSum', headerName: 'Total Fabric Sum' },
        {
          field: 'totalFabricRequiredSum',
          headerName: 'Total Fabric Required Sum'
        }
      ],
      x = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        { field: 'totalExcGst', headerName: 'Total Excluding GST' },
        { field: 'totalIncGst', headerName: 'Total Including GST' }
      ],
      q = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'processType', headerName: 'Process Type' },
        { field: 'assignedQtySum', headerName: 'Assigned Qty Sum' },
        { field: 'availableQtySum', headerName: 'Available Qty Sum' },
        { field: 'colorCount', headerName: 'Color Count' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        { field: 'outputQtySum', headerName: 'Output Qty Sum' },
        { field: 'totalIncGst', headerName: 'Total Including GST' }
      ],
      f = [
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
        { field: 'totalAmountSum', headerName: 'Total Amount Sum', width: 150 }
      ],
      de = [
        {
          field: 'availableQtySum',
          headerName: 'Available Qty Sum',
          width: 150
        },
        { field: 'totalPcsSum', headerName: 'Total Pcs Sum', width: 150 },
        { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
        { field: 'componentCount', headerName: 'Component Count', width: 150 }
      ],
      ne = [
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
      le =
        ((T = t == null ? void 0 : t.prePlanningList) == null
          ? void 0
          : T.map((j, Q) => ({ id: Q, ...j }))) || [],
      fe =
        ((X = t == null ? void 0 : t.fabricationList) == null
          ? void 0
          : X.map((j, Q) => ({ id: Q, ...j }))) || [],
      ce =
        ((oe = t == null ? void 0 : t.dyeingPrintingList) == null
          ? void 0
          : oe.map((j, Q) => ({ id: Q, ...j }))) || [],
      me =
        (($ = t == null ? void 0 : t.embroideryList) == null
          ? void 0
          : $.map((j, Q) => ({ id: Q, ...j }))) || [],
      Ce =
        ((ue = t == null ? void 0 : t.schiffiliList) == null
          ? void 0
          : ue.map((j, Q) => ({ id: Q, ...j }))) || [],
      M =
        ((_ = t == null ? void 0 : t.additionalProcessList) == null
          ? void 0
          : _.map((j, Q) => ({ id: Q, ...j }))) || [],
      H = qt();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Summary',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(o, {
              container: !0,
              spacing: 1,
              width: 'inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Collection',
                    name: 'collectionId',
                    value: r,
                    onChange: w,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: Y.map((j) =>
                      e.jsx(
                        B,
                        { value: j.collectionId, children: j.collectionName },
                        j.collectionId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: p.designId,
                    onChange: w,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: D.map((j) =>
                      e.jsx(
                        B,
                        { value: j.designId, children: j.designNo },
                        j.designId
                      )
                    )
                  })
                }),
                e.jsx(o, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Batch No.',
                    name: 'batchNo',
                    value: p.batchNo,
                    onChange: w,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: W.map((j) =>
                      e.jsx(
                        B,
                        { value: j.batchNo, children: j.batchNo },
                        j.batchNo
                      )
                    )
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(o, { item: !0, xs: 12, md: 12, mb: 1 }),
        e.jsxs(xe, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Summary Details',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(o, {
              container: !0,
              spacing: 1,
              width: 'inherit',
              sx: { paddingY: 1, paddingX: 1 },
              children: e.jsx(o, {
                item: !0,
                xs: 12,
                md: 12,
                paddingTop: 1,
                children: l
                  ? e.jsx(Ae, {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      children: e.jsx(dt, {})
                    })
                  : t
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(0),
                            children: 'Pre Planning'
                          }),
                          e.jsx(Ge, {
                            rows: le,
                            columns: O,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            onStateChange: E,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                          e.jsx(ie, {
                            color: '#921e22',
                            sx: { height: 3, width: '100%', mb: 1 }
                          }),
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(1),
                            children: 'Fabrication'
                          }),
                          e.jsx(Ge, {
                            rows: fe,
                            columns: x,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                          e.jsx(ie, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mt: 1, mb: 1 }
                          }),
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(2),
                            children: 'Dyeing'
                          }),
                          e.jsx(Ge, {
                            rows: ce,
                            columns: q,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                          e.jsx(ie, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(3),
                            children: 'Embroidery'
                          }),
                          e.jsx(Ge, {
                            rows: me,
                            columns: f,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                          e.jsx(ie, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(4),
                            children: 'Schiffli'
                          }),
                          e.jsx(Ge, {
                            rows: Ce,
                            columns: de,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                          e.jsx(ie, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(ge, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => S(5),
                            children: 'Additional Process'
                          }),
                          e.jsx(Ge, {
                            rows: M,
                            columns: ne,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            sx: {
                              '--DataGrid-rowBorderColor': 'rgb(255 255 255)',
                              '& .css-1kyxv1r-MuiDataGrid-root': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-container--top [role=row]': {
                                color: 'white',
                                backgroundColor: '#323232'
                              },
                              '& .MuiDataGrid-columnSeparator': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-iconButtonContainer': {
                                color: 'white'
                              },
                              '& .MuiDataGrid-sortIcon': { color: 'white' },
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
                    : e.jsx(dt, {})
              })
            })
          ]
        })
      ]
    });
  },
  ut = uo,
  Ve = [
    'Pre Planning',
    'Fabrication',
    'Dyeing/Printing  ',
    'Embroidery ',
    'Schiffli',
    'Additional Process',
    'Additional Services',
    'Summary'
  ];
function Mo() {
  const [h, S] = a.useState(0),
    [V, te] = a.useState(new Set()),
    [C, t] = a.useState(null),
    [v, l] = a.useState([]),
    { enqueueSnackbar: g } = Qe(),
    { data: r, refetch: y } = Re(),
    [E, p] = a.useState({});
  console.log('initialValues', E);
  const P = (x) => {
      t(x.currentTarget);
    },
    m = () => {
      t(null);
    },
    z = !!C,
    u = z ? 'simple-popover' : void 0,
    F = (x) => x === 1,
    D = (x) => V.has(x),
    Z = () => {
      let x = V;
      D(h) && ((x = new Set(x.values())), x.delete(h)), S((q) => q + 1), te(x);
    },
    W = () => {
      S((x) => x - 1);
    },
    U = () => {
      if (!F(h)) throw new Error("You can't skip a step that isn't optional.");
      S((x) => x + 1),
        te((x) => {
          const q = new Set(x.values());
          return q.add(h), q;
        });
    },
    Y = () => {
      S(0);
    },
    [J, w] = a.useState({
      lookUpId: '',
      lookUpName: '',
      lookUpDomain: '',
      lookUpCategory: '',
      enabled: '',
      createdOn: new Date().toISOString()
    }),
    c = async () => {
      if (!J.lookUpDomain || !J.lookUpName) {
        g('Please fill in all required fields.', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const x = await ve.get(
          `http://100.42.177.77:81/api/Common/SaveLookUp?lookupDomain=${J.lookUpDomain}&LookUpName=${J.lookUpName}&appId=1`
        );
        return (
          console.log('Form data saved:', x.data),
          g('Lookup saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
          w({
            lookUpId: '',
            lookUpName: '',
            lookUpDomain: '',
            lookUpCategory: '',
            enabled: '',
            createdOn: new Date().toISOString()
          }),
          y(),
          x.data
        );
      } catch (x) {
        throw (
          (console.error('Error saving data:', x),
          g('Error saving data. Please try again.', {
            variant: 'error',
            autoHideDuration: 5e3
          }),
          x)
        );
      }
    },
    O = (x) => {
      w({ ...J, [x.target.name]: x.target.value });
    };
  return (
    a.useEffect(() => {
      (async () => {
        try {
          const q = await ve.get(
            'http://100.42.177.77:81/api/Common/GetLookUpDomains?appId=1'
          );
          console.log('LookupData', q), l(q.data.result);
        } catch (q) {
          console.error('Error fetching design options:', q);
        }
      })();
    }, []),
    e.jsxs(Ae, {
      sx: { width: '100%' },
      children: [
        e.jsxs(o, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          children: [
            e.jsx(o, {
              item: !0,
              sm: 6,
              children: e.jsx(ge, {
                variant: 'h2',
                gutterBottom: !0,
                children: 'Planning Process'
              })
            }),
            e.jsxs(o, {
              item: !0,
              sm: 6,
              textAlign: 'right',
              children: [
                e.jsx(he, {
                  'aria-describedby': u,
                  variant: 'outlined',
                  size: 'small',
                  onClick: P,
                  children: '+Lookup'
                }),
                e.jsx(Et, {
                  id: 'mouse-over-popover',
                  open: z,
                  anchorEl: C,
                  onClose: m,
                  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                  transformOrigin: { vertical: 'top', horizontal: 'right' },
                  sx: {
                    '.MuiPopover-paper': { width: '300px', padding: '16px' }
                  },
                  children: e.jsxs(o, {
                    container: !0,
                    spacing: 3,
                    width: 'Inherit',
                    children: [
                      e.jsx(o, {
                        item: !0,
                        sm: 12,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          id: 'outlined-select-currency',
                          select: !0,
                          label: 'Select Lookup',
                          size: 'small',
                          value: J.lookUpDomain,
                          name: 'lookUpDomain',
                          onChange: O,
                          children: v.map((x) =>
                            e.jsx(
                              B,
                              {
                                value: x.lookUpDomain,
                                children: x.lookUpDomain
                              },
                              x.lookUpDomain
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        sm: 12,
                        children: e.jsx(i, {
                          fullWidth: !0,
                          label: 'Add Lookup Description',
                          value: J.lookUpName,
                          onChange: O,
                          name: 'lookUpName',
                          size: 'small'
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        sm: 3,
                        textAlign: 'right',
                        children: e.jsx(he, {
                          variant: 'contained',
                          size: 'small',
                          onClick: c,
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
        e.jsx(Wt, {
          activeStep: h,
          children: Ve.map((x, q) => {
            const f = {},
              de = {};
            return (
              F(q) && (de.optional = e.jsx(ge, { variant: 'caption' })),
              D(q) && (f.completed = !1),
              e.jsx(
                zt,
                {
                  ...f,
                  children: e.jsxs(Ut, {
                    ...de,
                    onClick: () => S(q),
                    style: { cursor: 'pointer' },
                    children: [' ', x]
                  })
                },
                x
              )
            );
          })
        }),
        e.jsxs(Ae, {
          sx: { display: 'flex', flexDirection: 'row', pt: 2 },
          children: [
            e.jsx(he, {
              color: 'inherit',
              disabled: h === 0,
              onClick: W,
              sx: { mr: 1 },
              children: 'Back'
            }),
            e.jsx(Ae, { sx: { flex: '1 1 auto' } }),
            F(h) &&
              e.jsx(he, {
                color: 'inherit',
                onClick: U,
                sx: { mr: 1 },
                children: 'Skip'
              }),
            e.jsx(he, {
              onClick: Z,
              children: h === Ve.length - 1 ? 'Finish' : 'Next'
            })
          ]
        }),
        h === Ve.length
          ? e.jsxs(a.Fragment, {
              children: [
                e.jsx(ut, { setActiveStep: S }),
                e.jsxs(Ae, {
                  sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                  children: [
                    e.jsx(Ae, { sx: { flex: '1 1 auto' } }),
                    e.jsx(he, { onClick: Y, children: 'Reset' })
                  ]
                })
              ]
            })
          : e.jsxs(a.Fragment, {
              children: [
                h === 0 && e.jsx(eo, { setInitialValues: p, initialValues: E }),
                h === 1 && e.jsx(Ht, { setInitialValues: p, initialValues: E }),
                h === 2 && e.jsx(ao, { initialValues: E }),
                h === 3 && e.jsx(Dt, { initialValues: E }),
                h === 4 && e.jsx(ro, { initialValues: E }),
                h === 5 && e.jsx(io, { initialValues: E }),
                h === 6 && e.jsx(co, { initialValues: E }),
                h === 7 &&
                  e.jsx(ut, {
                    setActiveStep: S,
                    setInitialValues: p,
                    initialValues: E
                  }),
                e.jsxs(Ae, {
                  sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                  children: [
                    e.jsx(he, {
                      color: 'inherit',
                      disabled: h === 0,
                      onClick: W,
                      sx: { mr: 1 },
                      children: 'Back'
                    }),
                    e.jsx(Ae, { sx: { flex: '1 1 auto' } }),
                    F(h) &&
                      e.jsx(he, {
                        color: 'inherit',
                        onClick: U,
                        sx: { mr: 1 },
                        children: 'Skip'
                      }),
                    e.jsx(he, {
                      onClick: Z,
                      children: h === Ve.length - 1 ? 'Finish' : 'Next'
                    })
                  ]
                })
              ]
            })
      ]
    })
  );
}
export { Mo as default };
