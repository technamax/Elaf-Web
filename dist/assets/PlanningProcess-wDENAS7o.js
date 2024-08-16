import {
  j as e,
  _ as Tr,
  r as Br,
  o as Fr,
  u as Qe,
  c as ze,
  b as _e,
  aO as Rr,
  B as we,
  G as r,
  T as fe,
  D as pe,
  a7 as it,
  aP as Qr,
  aq as $e,
  ar as Ke,
  as as Je,
  aQ as dt,
  aR as ct,
  aS as zr,
  aT as ut,
  C as ve,
  d as ye,
  av as ot,
  e as Ge,
  aU as _r,
  at as Wr,
  aV as Ur,
  aW as Hr,
  aX as qr,
  aY as Er,
  aZ as Gr,
  a_ as Yr,
  aM as Vr,
  M as $r
} from './index-a8gvI6HS.js';
import { r as a, g as Kr } from './vendor-BXCbSo2_.js';
import { B as be, a as Ce, I as Re } from './axios-BAxkGnGK.js';
import {
  d as Tt,
  c as tt,
  A as Bt,
  e as Ft,
  f as Rt,
  S as Xr,
  a as Jr,
  b as Zr,
  F as Dr
} from './Fabrication-C9-J768B.js';
import { d as Ye } from './VisibilityOutlined-7xGDXOA6.js';
import {
  A as et,
  R as qe,
  F as Qt,
  C as zt,
  a as pt,
  b as mt,
  c as ht,
  d as gt,
  B as _t,
  u as ea,
  g as Ct,
  D as Ve
} from './ReuseableDataGrid-Bo304H0A.js';
import { d as bt } from './Close-j8pmpgIQ.js';
import { d as ft } from './PersonAddAlt1Outlined-D0NkfuVB.js';
import { T as c, P as Mt } from './TextField-CsNxJIZ0.js';
import { M as R } from './Skeleton-C1EQF4m0.js';
import './dayjs.min-DO4_1a-m.js';
let Pt = !1;
const ta = a.forwardRef(function (i, C) {
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
    e.jsx(et, Tr({ ref: C }, i))
  );
});
var It = {},
  ra = Fr;
Object.defineProperty(It, '__esModule', { value: !0 });
var Wt = (It.default = void 0),
  aa = ra(Br()),
  oa = e;
Wt = It.default = (0, aa.default)(
  (0, oa.jsx)('path', {
    d: 'M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11h-9v-9h9zm-4.5-1L13 16h2v-3h3v3h2z'
  }),
  'SendAndArchive'
);
const na =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO2WzU4UQRSFe14CgoiMKPIqolEiIQq+gEFgFPHnFVyILI3GnQIbxxhG3IkaYxT8iUZFoxuDbokoIaNE/czNnE6KSjdT07Yb40kqqa6qW+dW3XNvdRT9R4MAHgD3640Dh/MkHQTOqMWIv9PGydOBUeCsWoz4O208PwdcxCz1xoGBKG8Abc5JPwBrataP0fY3iLcCk8C6SF4DV4HzatZf1Ny6vrfkRd4PrABV4BywE9huKpc2rA0ARaATGAe+yebgn5IfB34BD0XQCzwlHU+AA1r7CPgJlLKS94n8GtAM3CIcFaAJKGuPviwxX9XJjfxlCtGMyJLwQrbzwNeGNEFNRFVdZdrJb2ttAbizyU10SBNXQslbgR8SnMXcxagEOGyxdmxs3ZDmxjybHmWKZUdriAOnZWhqf+ZtVgyw3+HZPAZ2qX8yxIGbwCudxsdwgH3JszERtqtOVEIc+ARMKbc3xNy79r1a+xHodsYtDec8W6sl01YxQxxYVfzdWM4krDPiGEveXMHLjhMqUGshDlQTHLDNCg06MJvgwJcQB96lhMBSrddZ1y0nloDdXkbc9WwPKQSLIQ7M6rGxGuBjKMB+JEGE24A3tnfUgIo7E+p+1jTsUn8wxIEWFaJxKdrFmBwrJRSiEc2d8mz2AxPas6WuAwbgkspncZNaPyexWbuXsuaGbuQ7cDEKBbVHZEVParMeliRUPLW7eK4XcUF7NQU7YAD26NrKciLtJtJObuTXtce+KAuAI9pgXq9aj0SVhgXFvEN9y4Cjmci9kvtZmpjQw9KuOhH/kvUr1bq0xmK+bLZRHqB2nZd1Gyinp5yfUuu/1ZyRX7CfmlzIXUgLx6SH93o3ltUv6z8hf+LoX8ZvSFCuNiG5hzcAAAAASUVORK5CYII=',
  sa = ({
    initialFormData: o,
    setAdditionalProcessData: i,
    refetchDyeingPrintingData: C,
    handleClickOpen: S,
    showUpperDiv: b
  }) => {
    const { user: t } = Qe(),
      [I, l] = a.useState([]),
      [f, s] = a.useState([]),
      { enqueueSnackbar: P } = ze(),
      [Q, m] = a.useState({}),
      M = I.reduce((y, q) => y + (q.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', M);
    const [u, U] = a.useState({
      dpIdDet: 0,
      dpId: o.dpId || 0,
      designId: o.designId || '',
      batchNo: o.batchNo || '',
      planningHeaderId: o.planningHeaderId || 0,
      fabricId: o.fabricId || '',
      fabricName: o.fabricName || '',
      colorId: o.colorId || '',
      colorName: o.colorName || '',
      uomId: o.uomId || '',
      uom: o.uom || '',
      poPcs: o.poPcs || '',
      vendorId: '',
      processType: o.processType || '',
      availableQty: o.availableQty || '',
      remainingQty: o.availableQty - M || '',
      shrinkage: o.allowedWastage || '',
      wastage: o.allowedWastage || '',
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
      U((y) => ({
        ...u,
        dpIdDet: f.dpIdDet || 0,
        dpId: f.dpId || 0,
        designId: (f == null ? void 0 : f.designId) || '',
        planningHeaderId: (f == null ? void 0 : f.planningHeaderId) || 0,
        batchNo: (f == null ? void 0 : f.batchNo) || '',
        vendorId: (f == null ? void 0 : f.vendorId) || '',
        shrinkage: (f == null ? void 0 : f.shrinkage) || '',
        wastage: (f == null ? void 0 : f.wastage) || '',
        outputQty: (f == null ? void 0 : f.outputQty) || 0,
        remainingQty:
          y.remainingQty + (f == null ? void 0 : f.assignedQty) || '',
        assignedQty: (f == null ? void 0 : f.assignedQty) || '',
        rate: (f == null ? void 0 : f.rate) || 0,
        unitRatePerPo: (f == null ? void 0 : f.unitRatePerPo) || '',
        totalExcGst: (f == null ? void 0 : f.totalExcGst) || '',
        gst: (f == null ? void 0 : f.gst) || 0,
        TotalIncludingGst: (f == null ? void 0 : f.totalIncludingGst) || '',
        createdOn:
          (f == null ? void 0 : f.createdOn) || new Date().toISOString(),
        createdBy: (f == null ? void 0 : f.createdBy) || t.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: t.empId
      }));
    }, [f]),
      a.useEffect(() => {
        U({
          ...u,
          remainingQty: o.availableQty - M >= 0 ? o.availableQty - M : ''
        });
      }, [I, o.availableQty, M]);
    const { data: h } = _e(),
      { data: k, refetch: D } = Rr(u.dpId, { skip: !u.dpId }),
      [X, G] = a.useState([]);
    a.useEffect(() => {
      if (h) {
        const y = h.result[0];
        G(y.vendorList);
      }
    }, [h]),
      a.useEffect(() => {
        k && l(k.result.map((y, q) => ({ id: q + 1, ...y })));
      }, [k, D]),
      console.log('initialRows', I);
    const H = (y) => {
      const { name: q, value: ee } = y.target;
      U({ ...u, [q]: ee }),
        U((ue) => {
          const g = { ...ue, [q]: ee };
          if (q === 'assignedQty' || q === 'remainingQty') {
            const E = g.assignedQty,
              Y = g.remainingQty;
            E > Y
              ? m((te) => ({
                  ...te,
                  assignedQty:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : m((te) => ({ ...te, assignedQty: '' }));
          }
          return g;
        });
    };
    a.useEffect(() => {
      const y = () => {
          const ie = parseFloat(u.assignedQty) || 0,
            N = parseFloat(u.shrinkage) || 0,
            Z = parseFloat(u.wastage) || 0,
            j = N + Z;
          return ((ie * 100) / (100 + j)).toFixed(2);
        },
        q = () => {
          const ie = parseFloat(u.assignedQty) || 0,
            N = parseFloat(u.rate) || 0;
          return (ie * N).toFixed(2);
        },
        ee = (ie, N) => (ie * (1 + N / 100)).toFixed(2),
        ue = y(),
        g = q(),
        E = parseFloat(u.gst) || 0,
        Y = ee(g, E),
        te = parseFloat(u.poPcs) || 0,
        me = te ? Y / te : 0;
      U((ie) => ({
        ...ie,
        outputQty: ue,
        totalExcGst: g,
        TotalIncludingGst: Y,
        unitRatePerPo: me.toFixed(2)
      }));
    }, [
      u.availableQty,
      u.assignedQty,
      u.shrinkage,
      u.wastage,
      u.rate,
      u.gst,
      u.poPcs,
      u.unitRatePerPo
    ]),
      console.log('formData', u);
    const V = async () => {
        console.log(u);
        try {
          if (u.assignedQty > u.remainingQty) {
            P(
              'Assigned quantity can not be greater then Remaining Quantity !',
              { variant: 'error', autoHideDuration: 5e3 }
            );
            return;
          }
          const y = await Ce.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrintingDetails',
            u
          );
          console.log('Save response:', y.data),
            U((q) => ({
              ...q,
              dpIdDet: 0,
              vendorId: '',
              availableQty: o.availableQty || '',
              shrinkage: '',
              wastage: '',
              assignedQty: '',
              rate: '',
              unitRatePerPo: 0,
              totalExcGst: 0,
              gst: '',
              TotalIncludingGst: '',
              remainingQty: o.availableQty - M || '',
              createdOn: new Date().toISOString(),
              createdBy: t.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: t.empId
            })),
            D(),
            C();
        } catch (y) {
          console.error('Error saving data:', y);
        }
      },
      ae = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        {
          field: 'assignedQty',
          headerName: 'Assigned Quantity',
          valueGetter: (y) => y.toLocaleString()
        },
        { field: 'rate', headerName: 'Rate', flex: 1 },
        {
          field: 'totalExcGst',
          headerName: 'Total Excl Gst.',
          valueGetter: (y) => y.toLocaleString()
        },
        { field: 'gst', headerName: 'Gst.', flex: 1 },
        {
          field: 'totalIncludingGst',
          headerName: 'TotalIncludingGst',
          valueGetter: (y) => y.toLocaleString()
        },
        { field: 'outputQty', headerName: 'Output Qty', flex: 1 }
      ];
    return e.jsxs(we, {
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
          hidden: !b,
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
                  children: e.jsx(fe, {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: u.fabricName,
                      onChange: H,
                      size: 'small',
                      disabled: !0,
                      sx: (y) => ({
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
                      })
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'Process Type',
                    name: 'processType',
                    value: u.processType,
                    onChange: H,
                    size: 'small',
                    disabled: !0,
                    sx: (y) => ({
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
                    })
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colorName',
                      value: u.colorName,
                      onChange: H,
                      size: 'small',
                      disabled: !0,
                      sx: (y) => ({
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
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'UOM',
                      name: 'uom',
                      value: u.uom,
                      onChange: H,
                      size: 'small',
                      disabled: !0,
                      sx: (y) => ({
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
                      })
                    }),
                    ' '
                  ]
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'PO Pcs',
                    size: 'small',
                    name: 'poPcs',
                    value: u.poPcs,
                    onChange: H,
                    disabled: !0,
                    sx: (y) => ({
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
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Total AvailableQty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: u.availableQty,
                    onChange: H,
                    disabled: !0,
                    sx: (y) => ({
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
                    })
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: u.remainingQty,
                    onChange: H,
                    disabled: !0,
                    sx: (y) => ({
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
                    })
                  })
                })
              ]
            }),
            e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: u.vendorId,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: X.map((y) =>
                      e.jsx(
                        R,
                        { value: y.lookUpId, children: y.lookUpName },
                        y.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Assign Quantity',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'assignedQty',
                    value: u.assignedQty,
                    onChange: H,
                    disabled: !u.remainingQty,
                    error: !!Q.assignedQty,
                    helperText: Q.assignedQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Rate Per uom',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'rate',
                    value: u.rate,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Shrinkage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'shrinkage',
                    value: u.shrinkage,
                    onChange: H,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Wastage',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'wastage',
                    value: u.wastage,
                    onChange: H,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Output Qty',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'outputQty',
                    value: u.outputQty,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Total Excl. Gst',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'totalExcGst',
                    value: u.totalExcGst,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'GST',
                    fullWidth: !0,
                    size: 'small',
                    name: 'gst',
                    value: u.gst,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Total Including Gst',
                    fullWidth: !0,
                    size: 'small',
                    name: 'TotalIncludingGst',
                    value: u.TotalIncludingGst,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'UnitRate Per PO.',
                    fullWidth: !0,
                    size: 'small',
                    name: 'unitRatePerPo',
                    value: u.unitRatePerPo,
                    onChange: H,
                    disabled: !u.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(be, {
                    variant: 'contained',
                    size: 'small',
                    onClick: V,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
              children: e.jsx(fe, {
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
                iColumns: ae,
                initialRows: I,
                setInitialData: s,
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
  la = ({
    initialFormData: o,
    setAdditionalProcessData: i,
    refetchDyeingPrintingData: C,
    handleClickOpen: S,
    showUpperDiv: b
  }) => {
    const t = it(),
      { enqueueSnackbar: I } = ze(),
      [l, f] = a.useState({}),
      { user: s } = Qe(),
      [P, Q] = a.useState([]),
      [m, M] = a.useState([]),
      u = P.reduce((j, z) => j + (z.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', u);
    const U = P.reduce((j, z) => j + (z.requiredPcs ?? 0), 0).toFixed(2);
    console.log('totalRepeats', U);
    const [h, k] = a.useState({
      embroideryIdDet: 0,
      embroideryId: o.embroideryId || 0,
      designId: o.designId || '',
      batchNo: o.batchNo || '',
      planningHeaderId: o.planningHeaderId || 0,
      componentId: o.componentId || '',
      componentName: o.componentName || '',
      fabricId: o.fabricId || '',
      fabricName: o.fabricName || '',
      vendorId: '',
      colorId: o.colorId || '',
      colourName: o.colourName || '',
      availableQty: o.availableQty || '',
      assignedQty: 0,
      remainingQty: (o.availableQty - u).toFixed(2) || 0,
      remainingRepeats: o.repeats - U || '',
      noOfHead: o.noOfHead || '',
      noOfHeadsName: o.noOfHeadsName || '',
      repeats: o.repeats || '',
      assignedRepeats: '',
      cuttingSize: o.cuttingSize || '',
      itemsPerRepeat: o.itemsPerRepeat || '',
      poPcs: o.poPcs || '',
      totalPcs: o.totalPcs || '',
      remainingPcs: (o.totalPcs - U).toFixed(2) || 0,
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
      createdBy: s.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: s.empId
    });
    a.useEffect(() => {
      k((j) => ({
        ...h,
        embroideryIdDet: m.embroideryIdDet || 0,
        embroideryId: m.embroideryId || 0,
        vendorId: (m == null ? void 0 : m.vendorId) || '',
        assignedQty: (m == null ? void 0 : m.assignedQty) || 0,
        requiredPcs: (m == null ? void 0 : m.requiredPcs) || 0,
        remainingQty:
          j.remainingQty + (m == null ? void 0 : m.assignedQty) || 0,
        remainingPcs:
          j.remainingPcs + (m == null ? void 0 : m.requiredPcs) || 0,
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
        createdBy: (m == null ? void 0 : m.createdBy) || s.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: s.empId
      }));
    }, [m]);
    const D = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
    function X(j, z, F) {
      return {
        fontWeight:
          z.indexOf(j) === -1
            ? F.typography.fontWeightRegular
            : F.typography.fontWeightMedium
      };
    }
    a.useEffect(() => {
      k({
        ...h,
        remainingQty: (o.availableQty - u).toFixed(2) || 0,
        remainingPcs: o.totalPcs - U || 0
      });
    }, [P]);
    const { data: G } = _e(),
      { data: H, refetch: V } = Qr(h.embroideryId, { skip: !h.embroideryId }),
      [ae, B] = a.useState([]);
    a.useEffect(() => {
      if (G) {
        const j = G.result[0];
        B(j.vendorList);
      }
    }, [G]),
      a.useEffect(() => {
        H && Q(H.result.map((j, z) => ({ id: z + 1, ...j })));
      }, [H, V]),
      console.log('initialRows', P);
    const y = (j) => {
        const { name: z, value: F } = j.target;
        k({ ...h, [z]: F });
      },
      q = (j) => {
        const { name: z, checked: F } = j.target;
        k((K) => ({ ...K, [z]: F }));
      };
    console.log('formData', h);
    const [ee, ue] = a.useState(null),
      [g, E] = a.useState(h);
    a.useEffect(() => {
      const j = setTimeout(() => {
        E(h);
      }, 10);
      return () => {
        clearTimeout(j);
      };
    }, [h]);
    const Y = (j) => new Intl.NumberFormat('en-US').format(j);
    a.useEffect(() => {
      const j = () => {
          const T = parseFloat(g.repeats) || 0,
            w = parseFloat(g.itemsPerRepeat) || 0;
          return (T * w).toFixed(2);
        },
        z = () => {
          const T = parseFloat(g.threadStiches) || 0,
            w = parseFloat(g.threadRate) || 0,
            de = parseFloat(g.noOfHeadsName) || 0,
            Ie = parseFloat(g.repeats) || 0;
          return ((T / 1e3) * (w * Ie * de)).toFixed(2);
        },
        F = () => {
          const T = parseFloat(g.tillaStiches) || 0,
            w = parseFloat(g.tilaRate) || 0,
            de = parseFloat(g.noOfHeadsName) || 0,
            Ie = parseFloat(g.repeats) || 0;
          return ((T / 1e3) * (w * Ie * de)).toFixed(2);
        },
        K = () => {
          const T = parseFloat(g.sequence) || 0,
            w = parseFloat(g.sequenceRate) || 0,
            de = parseFloat(g.noOfHeadsName) || 0,
            Ie = parseFloat(g.repeats) || 0;
          return ((T / 1e3) * (w * Ie * de)).toFixed(2);
        },
        se = () => {
          const T = parseFloat(g.repeats) || 0,
            w = parseFloat(g.noOfHeadsName) || 0,
            de = parseFloat(g.solvingLayers) || 0;
          return (((T * w * 13) / 39.37) * de).toFixed(2);
        },
        oe = () => {
          const T = parseFloat(g.solvingInMeters) || 0,
            w = parseFloat(g.solvingRate) || 0;
          return (T * w).toFixed(2);
        },
        he = () => {
          const T = parseFloat(g.threadAmount) || 0,
            w = parseFloat(g.tilaAmount) || 0,
            de = parseFloat(g.sequenceAmount) || 0,
            Ie = parseFloat(g.solvingAmount) || 0;
          return (T + w + de + Ie).toFixed(2);
        },
        J = () => {
          const T = parseFloat(String(g.totalAmount).replace(/,/g, '')) || 0,
            w = parseFloat(g.requiredPcs) || 0;
          return (T / w).toFixed(2);
        },
        O = he(),
        _ = J();
      z(),
        k((T) => ({
          ...T,
          totalPcs: j(),
          threadAmount: z(),
          tilaAmount: F(),
          sequenceAmount: K(),
          solvingInMeters: se(),
          solvingAmount: oe(),
          totalAmount: Y(O),
          costPerComponent: Y(_)
        }));
    }, [
      g.threadAmount,
      g.totalAmount,
      g.sequenceAmount,
      g.solvingAmount,
      g.repeats,
      g.tilaAmount,
      g.itemsPerRepeat,
      g.threadRate,
      g.threadStiches,
      g.noOfHeadsName,
      g.tilaRate,
      g.tillaStiches,
      g.sequenceRate,
      g.sequence,
      g.solvingLayers,
      g.solvingInMeters,
      g.solvingRate,
      g.requiredPcs
    ]),
      a.useEffect(() => {
        if (ee === 'assignedQty') {
          const j = () => {
            const z = parseFloat(g.assignedQty) || 0,
              F = parseFloat(g.availableQty) || 0,
              K = parseFloat(g.totalPcs) || 0;
            return Math.round(z * (K / F));
          };
          k((z) => ({ ...z, requiredPcs: j() }));
        } else if (ee === 'requiredPcs') {
          const j = () => {
            const z = parseFloat(g.requiredPcs) || 0,
              F = parseFloat(g.availableQty) || 0,
              K = parseFloat(g.totalPcs) || 0;
            return ((z * F) / K).toFixed(2);
          };
          k((z) => ({ ...z, assignedQty: j() }));
        }
      }, [g.assignedQty, g.requiredPcs, ee]);
    const te = (j) => {
        const z = j.target.value,
          F = j.target.name;
        ue('assignedQty'),
          k((K) => ({ ...K, assignedQty: z })),
          k((K) => {
            const se = { ...K, [F]: z };
            if (F === 'assignedQty' || F === 'remainingQty') {
              const oe = parseFloat(se.assignedQty),
                he = parseFloat(se.remainingQty);
              oe > he
                ? f((J) => ({
                    ...J,
                    assignedQty:
                      'Assigned Quantity cannot be greater than Remaining Quantity'
                  }))
                : f((J) => ({ ...J, assignedQty: '' }));
            }
            return se;
          });
      },
      me = (j) => {
        const z = j.target.value,
          F = j.target.name;
        ue('requiredPcs'),
          k((K) => ({ ...K, requiredPcs: z })),
          k((K) => {
            const se = { ...K, [F]: z };
            if (F === 'requiredPcs' || F === 'remainingPcs') {
              const oe = parseFloat(se.requiredPcs),
                he = parseFloat(se.remainingPcs);
              oe > he
                ? (console.log(),
                  f((J) => ({
                    ...J,
                    requiredPcs:
                      'Required Pcs cannot be greater than Remaining Pcs'
                  })))
                : f((J) => ({ ...J, requiredPcs: '' }));
            }
            return se;
          });
      },
      ie = async () => {
        if ((console.log(h), h.totalAmount == 0 || h.costPerComponent == 0)) {
          I(
            'Please Enter Thread, Tilla or Sequnce values , Total Amount cannot be zero',
            { variant: 'error', autoHideDuration: 5e3 }
          );
          return;
        }
        if (parseFloat(h.assignedQty) > parseFloat(h.remainingQty)) {
          I('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        if (parseFloat(h.requiredPcs) > parseFloat(h.remainingPcs)) {
          I('Required Pcs can not be greater then Remaining Pcs !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const j = await Ce.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroideryDetails',
            { ...h, additional: h.additional.join(', ') }
          );
          j.data.success
            ? I('Embroidery saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (I(`${j.data.message}!`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', j.data.message)),
            console.log('Save response:', j.data),
            k((z) => ({
              ...z,
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
              remainingQty: (o.availableQty - u).toFixed(2) || 0,
              remainingRepeats: o.repeats - U || '',
              costPerComponent: 0,
              createdOn: new Date().toISOString(),
              createdBy: s.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: s.empId
            })),
            V(),
            C();
        } catch (j) {
          console.error('Error saving data:', j),
            I('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      N = [
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
    return e.jsxs(we, {
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
          hidden: !b,
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
                  children: e.jsx(fe, {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'Fabric',
                      name: 'fabricName',
                      value: h.fabricName,
                      onChange: y,
                      size: 'small',
                      disabled: !0,
                      sx: (j) => ({
                        ...(h.fabricName !== '' && {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'Component',
                    name: 'componentName',
                    value: h.componentName,
                    onChange: y,
                    size: 'small',
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.componentName !== '' && {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'Color',
                      name: 'colourName',
                      value: h.colourName,
                      onChange: y,
                      size: 'small',
                      disabled: !0,
                      sx: (j) => ({
                        ...(h.colourName !== '' && {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      label: 'PO Pcs',
                      name: 'poPcs',
                      value: h.poPcs,
                      onChange: y,
                      size: 'small',
                      disabled: !0,
                      sx: (j) => ({
                        ...(h.poPcs !== '' && {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'Heads',
                    size: 'small',
                    name: 'noOfHeadsName',
                    value: h.noOfHeadsName,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.noOfHeadsName !== '' && {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'Cutting Size',
                    size: 'small',
                    name: 'cuttingSize',
                    value: h.cuttingSize,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.cuttingSize !== '' && {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    label: 'Items Per Repeat',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: h.itemsPerRepeat,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.itemsPerRepeat !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Total Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    value: h.availableQty,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.availableQty !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Remaining Qty',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingQty',
                    value: h.remainingQty,
                    type: 'number',
                    error: !!l.remainingQty,
                    helperText: l.remainingQty,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.remainingQty !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Repeats',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: h.repeats,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.repeats !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Total Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'totalPcs',
                    value: h.totalPcs,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.totalPcs !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Remaining Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'remainingPcs',
                    value: h.remainingPcs,
                    onChange: y,
                    disabled: !0,
                    sx: (j) => ({
                      ...(h.remainingPcs !== '' && {
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
            e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Vendors',
                    size: 'small',
                    name: 'vendorId',
                    value: h.vendorId,
                    onChange: y,
                    disabled: !h.remainingPcs && !h.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ae.map((j) =>
                      e.jsx(
                        R,
                        { value: j.lookUpId, children: j.lookUpName },
                        j.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(c, {
                    label: 'Assigned Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'assignedQty',
                    value: h.assignedQty,
                    onChange: te,
                    error: !!l.assignedQty,
                    helperText: l.assignedQty,
                    disabled: !h.remainingPcs && !h.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(c, {
                    label: 'Required Pcs',
                    fullWidth: !0,
                    disabled: !h.remainingPcs && !h.remainingQty,
                    size: 'small',
                    type: 'number',
                    name: 'requiredPcs',
                    value: h.requiredPcs,
                    error: !!l.requiredPcs,
                    helperText: l.requiredPcs,
                    onChange: me,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(c, {
                    select: !0,
                    label: 'Additional',
                    value: h.additional,
                    name: 'additional',
                    size: 'small',
                    onChange: y,
                    fullWidth: !0,
                    disabled: !h.remainingPcs && !h.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } },
                    SelectProps: { multiple: !0 },
                    children: D.map((j) =>
                      e.jsx(
                        R,
                        { value: j, style: X(j, h.additional, t), children: j },
                        j
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1,
                  children: e.jsx(Qt, {
                    control: e.jsx(zt, {
                      checked: h.isSolving,
                      onChange: q,
                      disabled: !h.remainingPcs && !h.remainingQty,
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
                        children: e.jsx(fe, {
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
                        children: e.jsx(c, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadStiches',
                          value: h.threadStiches,
                          onChange: y,
                          required: !0,
                          disabled: !h.remainingPcs && !h.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'threadRate',
                          value: h.threadRate,
                          onChange: y,
                          required: !0,
                          disabled: !h.remainingPcs && !h.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'threadAmount',
                          value: h.threadAmount,
                          onChange: y,
                          disabled: !h.remainingPcs && !h.remainingQty,
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
                        children: e.jsx(fe, {
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
                        children: e.jsx(c, {
                          label: 'Stitches',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tillaStiches',
                          value: h.tillaStiches,
                          onChange: y,
                          required: !0,
                          disabled: !h.remainingPcs && !h.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Rate',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'tilaRate',
                          value: h.tilaRate,
                          onChange: y,
                          required: !0,
                          disabled: !h.remainingPcs && !h.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          name: 'tilaAmount',
                          value: h.tilaAmount,
                          onChange: y,
                          disabled: !h.remainingPcs && !h.remainingQty,
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
                          children: e.jsx(fe, {
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
                          children: e.jsx(c, {
                            label: 'Sequence',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequence',
                            type: 'number',
                            value: h.sequence,
                            onChange: y,
                            disabled: !h.remainingPcs && !h.remainingQty,
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(c, {
                            label: 'Rate',
                            fullWidth: !0,
                            type: 'number',
                            size: 'small',
                            name: 'sequenceRate',
                            value: h.sequenceRate,
                            onChange: y,
                            required: !0,
                            disabled: !h.remainingPcs && !h.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(c, {
                            label: 'Amount',
                            fullWidth: !0,
                            size: 'small',
                            name: 'sequenceAmount',
                            value: h.sequenceAmount,
                            onChange: y,
                            disabled: !h.remainingPcs && !h.remainingQty,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                }),
                h.isSolving
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
                            children: e.jsx(fe, {
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
                            children: e.jsx(c, {
                              label: 'Layers',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingLayers',
                              value: h.solvingLayers,
                              onChange: y,
                              disabled: !h.remainingPcs && !h.remainingQty,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(c, {
                              label: 'Meters',
                              type: 'number',
                              fullWidth: !0,
                              size: 'small',
                              name: 'solvingInMeters',
                              value: h.solvingInMeters,
                              disabled: !h.remainingPcs && !h.remainingQty,
                              onChange: y,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(c, {
                              label: 'Rate',
                              fullWidth: !0,
                              type: 'number',
                              size: 'small',
                              name: 'solvingRate',
                              value: h.solvingRate,
                              onChange: y,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(r, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(c, {
                              label: 'Amount',
                              fullWidth: !0,
                              size: 'small',
                              type: 'number',
                              name: 'solvingAmount',
                              value: h.solvingAmount,
                              disabled: !h.remainingPcs && !h.remainingQty,
                              onChange: y,
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
                  children: e.jsx(c, {
                    label: 'Total Amount',
                    fullWidth: !0,
                    size: 'small',
                    disabled: !h.remainingPcs && !h.remainingQty,
                    name: 'totalAmount',
                    value: h.totalAmount,
                    onChange: y,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  sx: { mt: 4 },
                  children: e.jsx(c, {
                    label: 'Cost Per Component',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'costPerComponent',
                    value: h.costPerComponent,
                    onChange: y,
                    disabled: !h.remainingPcs && !h.remainingQty,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(be, {
                    variant: 'contained',
                    size: 'small',
                    onClick: ie,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
                children: e.jsx(fe, {
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
                  iColumns: N,
                  initialRows: P,
                  setInitialData: M,
                  deleteApi:
                    'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryDetailsByDetId?embroideryDetId=',
                  deleteBy: 'embroideryIdDet',
                  refetch: V
                })
              })
            ]
          })
        })
      ]
    });
  },
  ia = ({ initialValues: o }) => {
    it();
    const { user: i } = Qe(),
      [C, S] = a.useState(!0),
      { enqueueSnackbar: b } = ze(),
      [t, I] = a.useState([]),
      [l, f] = a.useState(!1),
      [s, P] = a.useState({
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
        createdBy: i.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    a.useEffect(() => {
      P({
        ...s,
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
        createdBy: (t == null ? void 0 : t.createdBy) || i.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    }, [t]);
    const { data: Q } = $e(),
      [m, M] = a.useState('');
    a.useEffect(() => {
      M(o.collectionId);
    }, []);
    const { data: u } = _e(),
      { data: U, refetch: h } = Ke(m, { skip: !m }),
      { data: k, refetch: D } = Je(s.designId, { skip: !s.designId }),
      { data: X, refetch: G } = dt(
        { batchNo: s.planningHeaderId, componentId: s.componentId },
        { skip: !s.planningHeaderId || !s.componentId }
      ),
      { data: H } = ct(
        {
          batchNo: s.planningHeaderId,
          componentId: s.componentId,
          fabricId: s.fabricId
        },
        { skip: !s.planningHeaderId || !s.componentId || !s.fabricId }
      ),
      { data: V, refetch: ae } = zr(s.planningHeaderId, {
        skip: !s.planningHeaderId
      }),
      { data: B } = ut(s.planningHeaderId, { skip: !s.planningHeaderId });
    console.log('formData.planningHeaderId', s.planningHeaderId),
      console.log('collectionData', Q);
    const [y, q] = a.useState(!1),
      [ee, ue] = a.useState([]),
      [g, E] = a.useState([]),
      [Y, te] = a.useState([]),
      [me, ie] = a.useState([]),
      [N, Z] = a.useState([]),
      [j, z] = a.useState([]),
      [F, K] = a.useState([]),
      [se, oe] = a.useState([]);
    console.log('batchList', g),
      console.log('formData', s),
      a.useEffect(() => {
        U && ue(U.result);
      }, [U]),
      a.useEffect(() => {
        k && E(k.result);
      }, [k]),
      a.useEffect(() => {
        X && (G(), te(X.result));
      }, [X, G]),
      a.useEffect(() => {
        H && z(X.result);
      }, [H]),
      a.useEffect(() => {
        B && oe(B.result);
      }, [B]),
      a.useEffect(() => {
        V && (S(!1), K(V.result.map((v, $) => ({ id: $ + 1, ...v }))));
      }, [V, ae]),
      console.log('embroideryList', V),
      console.log('initialRows', F),
      a.useEffect(() => {
        if (u) {
          const v = u.result[0];
          ie(v.vendorList), Z(v.noOfHeadsList);
        }
      }, [u]);
    const he = (Q == null ? void 0 : Q.result) || [];
    a.useEffect(() => {
      const v = () => {
        const le = parseFloat(s.repeats) || 0,
          Pe = parseFloat(s.itemsPerRepeat) || 0;
        return (le * Pe).toFixed(2);
      };
      P((le) => ({ ...le, totalPcs: v() }));
      const $ = () => {
        const le = parseFloat(s.threadStiches) || 0,
          Pe = parseFloat(s.threadRate) || 0,
          Ue = parseFloat(s.noOfHead) || 0,
          Ee = parseFloat(s.repeats) || 0;
        return ((le / 1e3) * (Pe * Ee * Ue)).toFixed(2);
      };
      P((le) => ({ ...le, threadAmount: $() }));
      const ge = () => {
        const le = parseFloat(s.tillaStiches) || 0,
          Pe = parseFloat(s.tilaRate) || 0,
          Ue = parseFloat(s.noOfHead) || 0,
          Ee = parseFloat(s.repeats) || 0;
        return ((le / 1e3) * (Pe * Ee * Ue)).toFixed(2);
      };
      P((le) => ({ ...le, tilaAmount: ge() }));
      const re = () => {
        const le = parseFloat(s.sequence) || 0,
          Pe = parseFloat(s.sequenceRate) || 0,
          Ue = parseFloat(s.noOfHead) || 0,
          Ee = parseFloat(s.repeats) || 0;
        return ((le / 1e3) * (Pe * Ee * Ue)).toFixed(2);
      };
      P((le) => ({ ...le, sequenceAmount: re() }));
      const xe = () => {
        const le = parseFloat(s.repeats) || 0,
          Pe = parseFloat(s.noOfHead) || 0,
          Ue = parseFloat(s.solvingLayers) || 0;
        return (((le * Pe * 13) / 39.37) * Ue).toFixed(2);
      };
      P((le) => ({ ...le, solvingInMeters: xe() }));
      const Ne = () => {
        const le = parseFloat(s.solvingInMeters) || 0,
          Pe = parseFloat(s.solvingRate) || 0;
        return parseFloat(s.solvingLayers), (le * Pe).toFixed(2);
      };
      P((le) => ({ ...le, solvingAmount: Ne() }));
      const Lr = () => {
        const le = parseFloat(s.threadAmount) || 0,
          Pe = parseFloat(s.tilaAmount) || 0,
          Ue = parseFloat(s.sequenceAmount) || 0,
          Ee = parseFloat(s.solvingAmount) || 0;
        return (le + Pe + Ue + Ee).toFixed(2);
      };
      P((le) => ({ ...le, totalAmount: Lr() || 0 }));
    }, [
      s.threadAmount,
      s.totalAmount,
      s.sequenceAmount,
      s.solvingAmount,
      s.repeats,
      s.tilaAmount,
      s.itemsPerRepeat,
      s.threadRate,
      s.threadStiches,
      s.noOfHead,
      s.tilaRate,
      s.tillaStiches,
      s.sequenceRate,
      s.sequence,
      s.solvingLayers,
      s.solvingInMeters,
      s.solvingRate
    ]);
    const J = (v) => {
        const { name: $, value: ge } = v.target;
        if ($ === 'collectionId')
          he.find((re) => re.collectionId === parseInt(ge)),
            M(ge),
            f(!0),
            K([]),
            S(!0),
            P({
              ...s,
              collectionId: ge,
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
        else if ($ === 'designId') {
          const re = ee.find((xe) => xe.designId === parseInt(ge));
          K([]),
            S(!0),
            P({
              ...s,
              designId: ge,
              baseColorId: re ? re.colorId : '',
              baseColorName: re ? re.colorName : '',
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
          const re = j.find((xe) => xe.colorId === ge);
          P({
            ...s,
            colorId: ge,
            availableQty: re ? re.total : '',
            cuttingSize: re ? re.cuttingSize : '',
            repeats: re ? re.repeats : '',
            noOfHead: re ? re.noOfHeads : ''
          });
        } else if ($ === 'batchNo') {
          const re = g.find((xe) => xe.batchNo === ge);
          P({
            ...s,
            batchNo: ge,
            planningHeaderId: re ? re.planningHeaderId : '',
            poPcs: re ? re.poPcs : '',
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
            q(!0),
            f(!1);
        } else P({ ...s, [$]: ge }), _((re) => ({ ...re, [$]: '' }));
      },
      [O, _] = a.useState({}),
      T = async () => {
        try {
          const v = await Ce.post(
            'http://100.42.177.77:81/api/Embroidery/SaveEmbroidery',
            { ...s, threadAdditional: s.threadAdditional.join(', ') }
          );
          console.log('Save response:', v.data),
            v.data.success
              ? b('Embroidery saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (b(`${v.data.message}!`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', v.data.message)),
            P(($) => ({
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
              createdBy: i.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: i.empId
            })),
            ae();
        } catch (v) {
          console.error('Error saving data:', v),
            b('Embroidery not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('initialRows', F);
    const [w, de] = a.useState({}),
      [Ie, Me] = a.useState(!1),
      Oe = (v) => {
        de(v), Me(!0);
      },
      [Ae, Se] = a.useState(!0),
      Le = (v) => {
        de(v), Me(!0), Se(!1);
      },
      Te = () => {
        Se(!0), Me(!1), de({}), refetchDyeingPrintingData();
      };
    console.log('show div', Ae);
    const [Be, ne] = a.useState(0),
      [We, Fe] = a.useState(0),
      [p, d] = a.useState(0),
      [A, n] = a.useState(0);
    a.useEffect(() => {
      const v = F.reduce((xe, Ne) => xe + (Ne.availableQty ?? 0), 0).toFixed(2),
        $ = F.reduce((xe, Ne) => xe + (Ne.assignedQty ?? 0), 0).toFixed(2),
        ge = F.reduce((xe, Ne) => xe + (Ne.totalPcs ?? 0), 0).toFixed(2),
        re = F.reduce((xe, Ne) => xe + (Ne.requiredPcs ?? 0), 0).toFixed(2);
      ne(parseFloat(v).toLocaleString()),
        Fe(parseFloat($).toLocaleString()),
        d(parseFloat(ge).toLocaleString()),
        n(parseFloat(re).toLocaleString());
    }, [F]);
    const x = [
        ...F,
        {
          id: 'TOTAL_SUMMARY',
          availableQty: Be,
          assignedQty: We,
          totalPcs: p,
          requiredPcs: A
        }
      ],
      W = { sortable: !1, pinnable: !1, hideable: !1 },
      L = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...W,
          colSpan: (v, $) => ($.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : v.value
        },
        {
          field: 'designNo',
          headerName: 'Design',
          ...W,
          colSpan: (v, $) => ($.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : v.value
        },
        { field: 'batchNo', headerName: 'Batch No.' },
        {
          field: 'componentName',
          headerName: 'Component ',
          renderCell: (v) =>
            e.jsx(Ge, {
              label: v.value,
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
          ...W,
          valueGetter: (v) => v.toLocaleString(),
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: v.value
                })
              : v.value
        },
        {
          field: 'assignedQty',
          headerName: 'Assigned Qty',
          ...W,
          valueGetter: (v) => v,
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: v.value
                })
              : v.value
        },
        {
          field: 'totalPcs',
          headerName: 'Total Pcs',
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: v.value
                })
              : v.value
        },
        {
          field: 'requiredPcs',
          headerName: 'Assigned Pcs',
          colSpan: (v, $) => ($.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (v) =>
            v.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: v.value
                })
              : v.value
        },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (v) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(_t, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Re, {
                    color: 'primary',
                    onClick: () => Oe(v.row),
                    children: e.jsx(ft, {})
                  }),
                  e.jsx(Re, {
                    color: 'primary',
                    onClick: () => Le(v.row),
                    children: e.jsx(Ye, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(ot, { src: na, sx: { background: 'transparent' } }),
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: m,
                      onChange: J,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: he.map((v) =>
                        e.jsx(
                          R,
                          { value: v.collectionId, children: v.collectionName },
                          v.collectionId
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: s.designId,
                    onChange: J,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ee.map((v) =>
                      e.jsx(
                        R,
                        { value: v.designId, children: v.designNo },
                        v.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: s.batchNo,
                      onChange: J,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: g.map((v) =>
                        e.jsx(
                          R,
                          { value: v.batchNo, children: v.batchNo },
                          v.batchNo
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
                  children: e.jsx(c, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: s.baseColorName,
                    onChange: J,
                    disabled: !0,
                    sx: (v) => ({
                      ...(s.repeatsInMtr !== '' && {
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
                    e.jsx(pe, {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: s.componentId,
                      onChange: J,
                      size: 'small',
                      required: !0,
                      error: !!O.componentId,
                      helperText: O.componentId,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: se.map((v) =>
                        e.jsx(
                          R,
                          { value: v.componentId, children: v.componentName },
                          v.componentId
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: s.fabricId,
                    onChange: J,
                    required: !0,
                    error: !!O.fabricId,
                    helperText: O.fabricId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: Y.map((v) =>
                      e.jsx(
                        R,
                        { value: v.fabricId, children: v.fabric },
                        v.fabricId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: s.colorId,
                    onChange: J,
                    required: !0,
                    error: !!O.colorId,
                    helperText: O.colorId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: j.map((v) =>
                      e.jsx(
                        R,
                        { value: v.colorId, children: v.color },
                        v.colorId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: s.poPcs,
                    onChange: J,
                    disabled: !0,
                    sx: (v) => ({
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
                  children: e.jsx(c, {
                    label: 'Available Quantity',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    type: 'number',
                    value: s.availableQty,
                    onChange: J,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (v) => ({
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
                  children: e.jsx(c, {
                    label: 'Repeats',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: s.repeats,
                    onChange: J,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (v) => ({
                      ...(s.repeats !== '' && {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Heads',
                    defaultValue: '',
                    size: 'small',
                    name: 'noOfHead',
                    value: s.noOfHead,
                    onChange: J,
                    required: !0,
                    error: !!O.noOfHead,
                    helperText: O.noOfHead,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (v) => ({
                      ...(s.noOfHead !== '' && {
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
                    children: N.map((v) =>
                      e.jsx(
                        R,
                        { value: v.lookUpId, children: v.lookUpName },
                        v.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Cutting Size',
                    fullWidth: !0,
                    size: 'small',
                    name: 'cuttingSize',
                    type: 'number',
                    value: s.cuttingSize,
                    onChange: J,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (v) => ({
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
                  children: e.jsx(c, {
                    label: 'Items Per Repeat',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: s.itemsPerRepeat,
                    onChange: J,
                    required: !0,
                    error: !!O.itemsPerRepeat,
                    helperText: O.itemsPerRepeat,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (v) => ({
                      ...(s.itemsPerRepeat !== '' && {
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
                  children: e.jsx(c, {
                    label: 'Total Pcs.',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'totalPcs',
                    value: s.totalPcs,
                    onChange: J
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4.5,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(be, {
                    variant: 'contained',
                    size: 'small',
                    onClick: T,
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
          children: e.jsx(pe, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          })
        }),
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(pe, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(ve, {
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
                    iColumns: L,
                    initialRows: x,
                    setInitialData: I,
                    deleteApi:
                      'http://100.42.177.77:81/api/Embroidery/DeleteEmbroideryById?embroideryId=',
                    deleteBy: 'embroideryId',
                    refetch: ae,
                    setAccordionExpanded: q,
                    fileName: 'Embroidery List',
                    isLoading: C
                  }),
                  e.jsxs(pt, {
                    open: Ie,
                    onClose: Te,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(mt, {
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
                          e.jsx(fe, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: ' Embroidery > Assign Vendors '
                          }),
                          e.jsx(Re, {
                            onClick: Te,
                            sx: { color: '#ffffff' },
                            children: e.jsx(bt, {})
                          })
                        ]
                      }),
                      e.jsxs(ht, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(la, {
                            initialFormData: w,
                            setInitialFormData: de,
                            refetchDyeingPrintingData: ae,
                            handleClickOpen: Oe,
                            showUpperDiv: Ae
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
  da = ia,
  ca = ({ setInitialValues: o, initialValues: i }) => {
    const { user: C } = Qe();
    console.log('user', C);
    const [S, b] = a.useState(!0),
      [t, I] = a.useState([]),
      [l, f] = a.useState([]),
      [s, P] = a.useState({
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
        createdBy: C.empId,
        lastUpdatedBy: C.empId,
        lastUpdatedOn: new Date().toISOString(),
        isSchiffili: !1,
        repeatsInMtr: ''
      });
    console.log('formData', s),
      a.useEffect(() => {
        P({
          ...s,
          processType: (t == null ? void 0 : t.processType) || 'MultiHead',
          planningId: (t == null ? void 0 : t.planningId) || 0,
          baseColorId: (t == null ? void 0 : t.baseColorId) || '',
          componentId: (t == null ? void 0 : t.componentId) || '',
          cuttingSize: (t == null ? void 0 : t.cuttingSize) || '',
          colorId: (t == null ? void 0 : t.colorId) || '',
          fabricId: (t == null ? void 0 : t.fabricId) || '',
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
          createdBy: (t == null ? void 0 : t.createdBy) || C.empId,
          lastUpdatedBy: C.empId,
          lastUpdatedOn: new Date().toISOString(),
          repeatsInMtr: (t == null ? void 0 : t.repeatsInMtr) || ''
        });
      }, [t]);
    const { data: Q } = $e(),
      [m, M] = a.useState(''),
      { data: u, refetch: U } = Ke(m, { skip: !m }),
      { data: h, refetch: k } = _r(s.planningHeaderId, {
        skip: !s.planningHeaderId
      }),
      { data: D } = _e(),
      [X, G] = a.useState([]),
      { enqueueSnackbar: H } = ze();
    console.log('lookupData', D);
    const [V, ae] = a.useState([]);
    a.useEffect(() => {
      Q && ae(Q.result);
    }, [Q]),
      a.useEffect(() => {
        u && (G(u.result), U());
      }, [u]),
      a.useEffect(() => {
        h && (b(!1), f(h.result.map((n, x) => ({ id: x + 1, ...n }))));
      }, [h, k]),
      console.log('designList', X),
      console.log('collectionData', Q);
    const [B, y] = a.useState(!1),
      [q, ee] = a.useState([]),
      [ue, g] = a.useState([]),
      [E, Y] = a.useState([]),
      [te, me] = a.useState([]),
      [ie, N] = a.useState([]),
      [Z, j] = a.useState([]),
      [z, F] = a.useState([]),
      [K, se] = a.useState([]);
    console.log('components:', E),
      console.log('Fabrications:', te),
      console.log('colors:', ie),
      console.log('uoms:', Z),
      console.log('heads:', z),
      console.log('lookupData', D),
      a.useEffect(() => {
        if (D) {
          const n = D.result[0];
          Y(n.componentList),
            N(n.colorList),
            me(n.fabricList),
            F(n.noOfHeadsList),
            j(n.uomList),
            ee(n.planningTypeProcessList),
            g(n.operatingMachineList);
        }
      }, [D]),
      a.useEffect(() => {
        const n = async (x) => {
          try {
            const W = await Ce.get(
              `http://100.42.177.77:81/api/PrePlanning/GetPrePlanningHeaderByDesignId?designId=${x}`
            );
            console.log(W.data), se(W.data.result);
          } catch (W) {
            console.error('Error fetching pre-planning lookup data:', W);
          }
        };
        s.designId && n(s.designId);
      }, [s.designId, s.planningHeaderId]);
    const oe =
      s.planningProcessTypeId === 204 || s.planningProcessTypeId === 1210;
    console.log('initialValues', i),
      console.log('selectedCollectionId', m),
      a.useEffect(() => {
        M((i == null ? void 0 : i.collectionId) || ''),
          P({
            ...s,
            designId: (i == null ? void 0 : i.designId) || '',
            planningHeaderId: (i == null ? void 0 : i.planningHeaderId) || '',
            batchNo: (i == null ? void 0 : i.batchNo) || ''
          });
      }, [i]),
      a.useEffect(() => {
        const n = () => {
            const $ = parseFloat(s.poPcs) || 0,
              ge = parseFloat(s.cuttingSize) || 0,
              re = ($ * ge).toFixed(2);
            return parseFloat(re).toLocaleString();
          },
          x = () => {
            const $ = parseFloat(s.repeats) || 0,
              ge = parseFloat(s.repeatSize) || 0,
              re = ($ * ge).toFixed(2);
            return parseFloat(re).toLocaleString();
          },
          W = ($) => {
            const ge = $ || 0,
              re = parseFloat(s.shrinkage) || 0,
              xe = parseFloat(s.wastage) || 0,
              Ne = ((ge * (100 + (re + xe))) / 100).toFixed(2);
            return parseFloat(Ne).toLocaleString();
          },
          L = () => (0.9144 * (parseFloat(s.repeatSize) || 0)).toFixed(2),
          ce = () => {
            const $ = parseFloat(s.repeats) || 0;
            return ((parseFloat(s.repeatsInMtr) || 0) * $).toFixed(2);
          };
        let v = 0;
        oe
          ? (v = parseFloat(n().replace(/,/g, '')) || 0)
          : (v = parseFloat(x().replace(/,/g, '')) || 0),
          P(($) => ({
            ...$,
            totalFabric: v.toLocaleString(),
            total: W(v),
            repeatsInMtr: L()
          })),
          !oe && s.isSchiffili && P(($) => ({ ...$, totalFabric: ce() }));
      }, [
        s.poPcs,
        s.cuttingSize,
        s.repeats,
        s.repeatSize,
        s.totalFabric,
        s.shrinkage,
        s.wastage,
        s.repeatsInMtr,
        s.isSchiffili,
        oe
      ]);
    const [he, J] = a.useState(!1);
    a.useState(!1);
    const O = (n) => {
        const { name: x, value: W } = n.target;
        if (x === 'collectionId') {
          const L = V.find((ce) => ce.collectionId === parseInt(W));
          y(!0),
            f([]),
            b(!0),
            M(W),
            P({
              ...s,
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
              collectionId: W,
              noOfDesigns: L ? L.noOfDesigns : '',
              noOfColors: L ? L.noOfColors : ''
            });
        } else if (x === 'designId') {
          const L = X.find((ce) => ce.designId === parseInt(W));
          f([]),
            b(!0),
            P({
              ...s,
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
              designId: W,
              baseColorId: L ? L.colorId : '',
              baseColorName: L ? L.colorName : ''
            });
        } else if (x === 'batchNo') {
          const L = K.find((ce) => ce.batchNo === W);
          P({
            ...s,
            componentId: '',
            processType: 'MultiHead',
            poPcs: L ? L.poPcs : '',
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
            batchNo: W,
            planningHeaderId: L ? L.planningHeaderId : ''
          }),
            J(!0),
            y(!1);
        } else if (x === 'planningProcessTypeId') {
          const L = q.find((ce) => ce.lookUpId === W);
          console.log('selectedProcess', L),
            P({
              ...s,
              planningProcessTypeId: W,
              planningProcessTypeName: L ? L.lookUpName : '',
              noOfHeads: 0,
              operatingMachineId: 0
            }),
            J(!0),
            y(!1);
        } else P({ ...s, [x]: W });
      },
      [_, T] = a.useState({}),
      [w, de] = a.useState(!1),
      Ie = () => {
        de(!w);
      },
      Me = async () => {
        const n = Oe();
        if (Object.keys(n).length > 0) {
          T(n);
          return;
        }
        try {
          const x = {
              ...s,
              totalFabric: parseFloat(s.totalFabric.replace(/,/g, '')),
              total: parseFloat(s.total.replace(/,/g, ''))
            },
            W = await Ce.post(
              'http://100.42.177.77:81/api/PrePlanning/SavePrePlanning',
              x
            );
          console.log('Data saved successfully:', W.data),
            console.log('Save response:', W.data),
            W.data.success
              ? W.data.success &&
                H('PrePlanning saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (H(`${W.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', W.data.message)),
            P((L) => ({
              processType: 'MultiHead',
              planningId: 0,
              collectionId: L.collectionId,
              designId: L.designId,
              batchNo: L.batchNo,
              planningHeaderId: L.planningHeaderId,
              baseColorId: L.baseColorId,
              baseColorName: L.baseColorName,
              noOfDesigns: L.noOfDesigns,
              noOfColors: L.noOfColors,
              poPcs: L.poPcs,
              fabricId: L.fabricId,
              shrinkage: L.shrinkage,
              wastage: L.wastage,
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
              createdBy: C.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: C.empId,
              isSchiffili: !1,
              repeatsInMtr: ''
            })),
            k();
        } catch (x) {
          console.error('Error saving data:', x),
            H('Pre Planning not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      Oe = () => {
        const n = {};
        return (
          s.componentId || (n.componentId = 'componentId is required'),
          s.colorId || (n.colorId = 'colorId is required'),
          s.fabricId || (n.fabricId = 'fabricId is required'),
          s.cuttingSize || (n.cuttingSize = 'cuttingSize is required'),
          s.uomId || (n.uomId = 'uomId is required'),
          s.shrinkage || (n.shrinkage = 'shrinkage is required'),
          s.wastage || (n.wastage = 'wastage is required'),
          n
        );
      };
    console.log('initialRows', l);
    const Ae = l.reduce((n, x) => n + (x.totalFabric ?? 0), 0).toFixed(2),
      Se = parseFloat(Ae).toLocaleString();
    console.log('localizedTotalFabric', Se);
    const Le = l.reduce((n, x) => n + (x.total ?? 0), 0).toFixed(2),
      Te = parseFloat(Le).toLocaleString(),
      Be = [
        ...l,
        {
          id: 'TOTAL_SUMMARY',
          label: 'Total Fabric',
          totalFabric: Se,
          total: Te
        }
      ],
      ne = { sortable: !1, pinnable: !1, hideable: !1 };
    console.log('rows', Be);
    const We = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...ne,
          colSpan: (n, x) => {
            if (x.id === 'TOTAL_SUMMARY') return 10;
          },
          valueGetter: (n, x) => (x.id === 'TOTAL_SUMMARY' ? x.label : n),
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            })
        },
        { field: 'componentName', headerName: 'Component', ...ne },
        {
          field: 'planningProcessTypeName',
          headerName: 'Process Type',
          ...ne,
          renderCell: (n) => {
            const x =
              n.value === 'MultiHead'
                ? 'primary.dark'
                : n.value === 'Schiffili'
                  ? 'primary'
                  : n.value === 'Dyeing'
                    ? 'success.dark'
                    : n.value === 'Printing'
                      ? 'warning.dark'
                      : 'default';
            return e.jsx(Ge, {
              label: n.value,
              sx: {
                backgroundColor:
                  x === 'primary' || x === 'default' ? void 0 : x,
                color: x === 'primary' || x === 'default' ? void 0 : 'white'
              },
              color:
                x === 'primary'
                  ? 'primary'
                  : x === 'default'
                    ? 'default'
                    : void 0
            });
          }
        },
        { field: 'color', headerName: 'Color', ...ne },
        { field: 'cuttingSize', headerName: 'Cutting Size', ...ne },
        { field: 'fabric', headerName: 'Fabrication', ...ne },
        { field: 'noOfHeadName', headerName: 'No. Of Heads', ...ne },
        {
          field: 'operatingMachineName',
          headerName: 'Operating Machine',
          ...ne
        },
        {
          field: 'repeats',
          headerName: 'Repeats',
          valueGetter: (n) => n.toLocaleString(),
          ...ne
        },
        {
          field: 'repeatSize',
          headerName: 'Repeat Size',
          valueGetter: (n) => n.toLocaleString(),
          ...ne
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
          ...ne
        },
        {
          field: 'uom',
          headerName: 'UOM',
          colSpan: (n, x) => (x.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          valueGetter: (n, x) =>
            x.id === 'TOTAL_SUMMARY' ? 'OverAll Total' : n,
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? 'black' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            }),
          ...ne
        },
        { field: 'shrinkage', headerName: 'Shrinkage %' },
        { field: 'wastage', headerName: 'Wastage %' },
        {
          field: 'total',
          headerName: 'Total',
          valueGetter: (n) => n.toLocaleString(),
          colSpan: (n, x) => (x.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (n) =>
            e.jsx('div', {
              style: {
                color: n.row.id === 'TOTAL_SUMMARY' ? '#a11f23' : void 0,
                fontWeight: n.row.id === 'TOTAL_SUMMARY' ? 'bold' : void 0
              },
              children: n.value
            }),
          ...ne
        }
      ],
      Fe = s.planningProcessTypeId === 198;
    a.useEffect(() => {
      Fe && P({ ...s, uomId: 139 });
    }, [Fe]),
      console.log('formData', s);
    const p = ({ row: n, field: x }) =>
      n.id === 'TOTAL_SUMMARY' && (x === 'componentName' || x === 'uom')
        ? 'bold'
        : '';
    console.log('batchList:', K);
    const d =
        'http://100.42.177.77:81/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=',
      A = (n, x) => {
        J(!he);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'CardHeader',
          children: e.jsxs(ve, {
            variant: 'outlined',
            children: [
              e.jsx(ye, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(Wt, {}),
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
                      e.jsx(c, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Collection',
                        name: 'collectionId',
                        value: m,
                        onChange: O,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: V.map((n) =>
                          e.jsx(
                            R,
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
                  e.jsx(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Design',
                      name: 'designId',
                      value: s.designId,
                      onChange: O,
                      size: 'small',
                      required: !0,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: X.map((n) =>
                        e.jsx(
                          R,
                          { value: n.designId, children: n.designNo },
                          n.designId
                        )
                      )
                    })
                  }),
                  e.jsxs(r, {
                    item: !0,
                    xs: 12,
                    md: 2.4,
                    children: [
                      e.jsx(c, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Batch No.',
                        name: 'batchNo',
                        value: s.batchNo,
                        onChange: O,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: K.map((n) =>
                          e.jsx(
                            R,
                            { value: n.batchNo, children: n.batchNo },
                            n.batchNo
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
                    children: e.jsx(c, {
                      label: 'Po Pcs',
                      fullWidth: !0,
                      size: 'small',
                      name: 'poPcs',
                      value: s.poPcs,
                      onChange: O,
                      disabled: !0,
                      sx: (n) => ({
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
                    children: e.jsx(c, {
                      label: 'Base Color',
                      fullWidth: !0,
                      size: 'small',
                      name: 'baseColorName',
                      value: s.baseColorName,
                      onChange: O,
                      disabled: !0,
                      sx: (n) => ({
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
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'MainCard',
              avatar: e.jsx(Tt, {}),
              title: 'Add Pre Planning',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Re, {
                onClick: A,
                sx: { mt: '-18px' },
                children: e.jsx(tt, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            e.jsxs(Bt, {
              expanded: he,
              onChange: A,
              sx: {},
              children: [
                e.jsx(Ft, {
                  expandIcon: e.jsx(tt, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(Rt, {
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(et, {
                          fullWidth: !0,
                          options: te,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            te.find((n) => n.lookUpId === s.fabricId) || null,
                          onChange: (n, x) => {
                            O({
                              target: {
                                name: 'fabricId',
                                value: x ? x.lookUpId : ''
                              }
                            });
                          },
                          renderInput: (n) =>
                            e.jsx(c, {
                              ...n,
                              label: 'Fabrication',
                              size: 'small',
                              name: 'fabricId',
                              value: s.fabricId,
                              required: !0,
                              error: !!_.fabricId,
                              helperText: _.fabricId,
                              disabled: w,
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
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Shrinkage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'shrinkage',
                          value: s.shrinkage,
                          onChange: O,
                          error: !!_.shrinkage,
                          helperText: _.shrinkage,
                          required: !0,
                          disabled: w,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Wastage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'wastage',
                          value: s.wastage,
                          onChange: O,
                          error: !!_.wastage,
                          helperText: _.wastage,
                          required: !0,
                          disabled: w,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(be, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Ie,
                          children: w || w ? 'Unlock' : 'Lock'
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(pe, {
                          color: '#cc8587',
                          sx: { height: 2, width: '100%' }
                        })
                      }),
                      e.jsxs(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          e.jsx(c, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Process Type',
                            name: 'planningProcessTypeId',
                            value: s.planningProcessTypeId,
                            onChange: O,
                            size: 'small',
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: q.map((n) =>
                              e.jsx(
                                R,
                                { value: n.lookUpId, children: n.lookUpName },
                                n.lookUpId
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
                        children: e.jsx(et, {
                          fullWidth: !0,
                          options: E,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            E.find((n) => n.lookUpId === s.componentId) || null,
                          onChange: (n, x) => {
                            O({
                              target: {
                                name: 'componentId',
                                value: x ? x.lookUpId : ''
                              }
                            });
                          },
                          renderOption: (n, x) => {
                            const { lookUpName: W } = x;
                            return e.jsx('span', { ...n, children: W });
                          },
                          renderInput: (n) =>
                            e.jsx(c, {
                              ...n,
                              label: 'Select Component',
                              size: 'small',
                              name: 'componentId',
                              value: s.componentId,
                              required: !0,
                              error: !!_.componentId,
                              helperText: _.componentId,
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
                      e.jsxs(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          ' ',
                          e.jsx(et, {
                            fullWidth: !0,
                            options: ie,
                            getOptionLabel: (n) => n.lookUpName,
                            value:
                              ie.find((n) => n.lookUpId === s.colorId) || null,
                            onChange: (n, x) => {
                              O({
                                target: {
                                  name: 'colorId',
                                  value: x ? x.lookUpId : ''
                                }
                              });
                            },
                            renderInput: (n) =>
                              e.jsx(c, {
                                ...n,
                                label: 'Color',
                                size: 'small',
                                value: s.colorId,
                                name: 'colorId',
                                required: !0,
                                error: !!_.colorId,
                                helperText: _.colorId,
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
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          size: 'small',
                          name: 'cuttingSize',
                          type: 'number',
                          value: s.cuttingSize,
                          onChange: O,
                          required: !0,
                          error: !!_.cuttingSize,
                          helperText: _.cuttingSize,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: Fe
                          ? e.jsx(c, {
                              fullWidth: !0,
                              select: !0,
                              label: 'Operating Machine',
                              size: 'small',
                              name: 'operatingMachineId',
                              value: s.operatingMachineId,
                              onChange: O,
                              required: !0,
                              disabled: oe,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: ue.map((n) =>
                                e.jsx(
                                  R,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                          : e.jsx(c, {
                              fullWidth: !0,
                              select: !0,
                              label: 'No of Heads',
                              size: 'small',
                              name: 'noOfHeads',
                              value: s.noOfHeads,
                              onChange: O,
                              required: !0,
                              disabled: oe,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: z.map((n) =>
                                e.jsx(
                                  R,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Repeat Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'repeatSize',
                          value: s.repeatSize,
                          onChange: O,
                          disabled: oe,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'No. of Repeats',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeats',
                          type: 'number',
                          value: s.repeats,
                          onChange: O,
                          required: !0,
                          disabled: oe,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Total Fabric',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalFabric',
                          value: s.totalFabric,
                          onChange: O,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'UOM',
                          type: 'number',
                          defaultValue: '',
                          size: 'small',
                          name: 'uomId',
                          value: s.uomId,
                          onChange: O,
                          error: !!_.uomId,
                          helperText: _.uomId,
                          required: !0,
                          disabled: Fe,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: Z.map((n) =>
                            e.jsx(
                              R,
                              { value: n.lookUpId, children: n.lookUpName },
                              n.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(c, {
                          label: 'Repeats in Meter',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeatsInMtr',
                          disabled: !0,
                          value: s.repeatsInMtr,
                          onChange: O,
                          sx: (n) => ({
                            ...(s.repeatsInMtr !== '' && {
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
                        children: e.jsx(c, {
                          label: 'Total',
                          fullWidth: !0,
                          size: 'small',
                          name: 'total',
                          value: s.total,
                          onChange: O,
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
                        children: e.jsx(be, {
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
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(pe, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(ve, {
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
                  iColumns: We,
                  initialRows: Be,
                  setInitialData: I,
                  deleteApi: d,
                  deleteBy: 'planningId',
                  refetch: k,
                  getCellClassName: p,
                  setAccordionExpanded: J,
                  fileName: 'PrePlanningList',
                  isLoading: S
                })
              })
            })
          ]
        })
      ]
    });
  },
  ua = ca,
  pa = '/assets/roller-ezgif.com-instagif-CY-x4C-U.gif',
  ma = ({ initialValues: o }) => {
    const { user: i } = Qe();
    console.log('user', i);
    const [C, S] = a.useState(!0),
      [b, t] = a.useState([]),
      [I, l] = a.useState({
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
        createdBy: i.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    a.useEffect(() => {
      l({
        ...I,
        dpId: b.dpId || 0,
        fabricId: (b == null ? void 0 : b.fabricId) || '',
        colorId: (b == null ? void 0 : b.colorId) || '',
        color: (b == null ? void 0 : b.color) || '',
        processType: (b == null ? void 0 : b.processType) || '',
        availableQty: (b == null ? void 0 : b.availableQty) || '',
        Shrinkage: (b == null ? void 0 : b.shrinkage) || '',
        Wastage: (b == null ? void 0 : b.wastage) || '',
        outputQty: (b == null ? void 0 : b.outputQty) || 0,
        UOM: (b == null ? void 0 : b.uom) || 0,
        uomId: (b == null ? void 0 : b.uomId) || '',
        poPcs: (b == null ? void 0 : b.poPcs) || 0,
        createdOn:
          (b == null ? void 0 : b.createdOn) || new Date().toISOString(),
        createdBy: (b == null ? void 0 : b.createdBy) || i.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    }, [b]);
    const { enqueueSnackbar: f } = ze(),
      [s, P] = a.useState(!1);
    console.log('Dyeing form data to send', I);
    const { data: Q } = $e(),
      [m, M] = a.useState('');
    a.useEffect(() => {
      M(o.collectionId);
    }, []);
    const { data: u } = _e(),
      { data: U, refetch: h } = Ke(m, { skip: !m }),
      { data: k, refetch: D } = Je(I.designId, { skip: !I.designId }),
      { data: X } = Wr(
        { batchNo: I.planningHeaderId, processType: 'Fabrication' },
        { skip: !I.planningHeaderId }
      ),
      { data: G } = Ur(
        { fabricId: I.fabricId, planningHeaderId: I.planningHeaderId },
        { skip: !I.fabricId || !I.planningHeaderId }
      ),
      { data: H, refetch: V } = Hr(I.planningHeaderId, {
        skip: !I.planningHeaderId
      }),
      [ae, B] = a.useState([]),
      [y, q] = a.useState([]),
      [ee, ue] = a.useState([]),
      [g, E] = a.useState([]),
      [Y, te] = a.useState([]),
      [me, ie] = a.useState([]);
    a.useState([]);
    const [N, Z] = a.useState(!1);
    console.log('batchList', y),
      console.log('formData', I),
      a.useEffect(() => {
        U && B(U.result);
      }, [U]),
      a.useEffect(() => {
        k && q(k.result);
      }, [k]),
      a.useEffect(() => {
        X && ue(X.result);
      }, [X]),
      a.useEffect(() => {
        G && ie(G.result);
      }, [G]),
      a.useEffect(() => {
        H && (S(!1), te(H.result.map((p, d) => ({ id: d + 1, ...p }))));
      }, [H, V]),
      a.useEffect(() => {
        if (u) {
          const p = u.result[0];
          E(p.uomList);
        }
      }, [u]);
    const [j, z] = a.useState([]);
    a.useEffect(() => {
      Q && z(Q.result);
    }, [Q]);
    const F = (p) => {
      const { name: d, value: A } = p.target;
      if (d === 'collectionId')
        j.find((n) => n.collectionId === parseInt(A)),
          M(A),
          P(!0),
          te([]),
          S(!0),
          l({
            ...I,
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
            poPcs: '',
            baseColorName: ''
          });
      else if (d === 'designId') {
        const n = ae.find((x) => x.designId === parseInt(A));
        te([]),
          S(!0),
          l({
            ...I,
            designId: A,
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
      } else if (d === 'batchNo') {
        const n = y.find((x) => x.batchNo === A);
        l({
          ...I,
          batchNo: A,
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
          Z(!0),
          P(!1);
      } else if (d === 'fabricId')
        ee.find((n) => n.fabricId === A),
          console.log('Selected Fabric:', ee),
          l({ ...I, fabricId: A });
      else if (d === 'ColorId') {
        const n = me.find((x) => x.colorId === A.colorId);
        l({
          ...I,
          ColorId: A.colorId,
          color: n.color,
          availableQty: n.total,
          UOM: n.uom,
          Shrinkage: n.shrinkage,
          Wastage: n.wastage
        });
      } else
        d === 'processType'
          ? l({ ...I, processType: A })
          : d === 'vendorId'
            ? l({ ...I, vendorId: A })
            : (l({ ...I, [d]: A }), se((n) => ({ ...n, [d]: '' })));
    };
    a.useEffect(() => {
      const p = () => {
          const L = parseFloat(I.availableQty) || 0,
            ce = parseFloat(I.Shrinkage) || 0,
            v = parseFloat(I.Wastage) || 0;
          return ((L * (100 - (ce + v))) / 100).toFixed(2);
        },
        d = () => {
          const L = parseFloat(I.availableQty) || 0,
            ce = parseFloat(I.RatePerUOM) || 0;
          return (L * ce).toFixed(2);
        },
        A = (L, ce) => (L * (1 + ce / 100)).toFixed(2),
        n = p(),
        x = d(),
        W = parseFloat(I.GST) || 0;
      A(x, W), parseFloat(I.poPcs), l((L) => ({ ...L, outputQty: n }));
    }, [
      I.availableQty,
      I.Shrinkage,
      I.Wastage,
      I.RatePerUOM,
      I.GST,
      I.poPcs,
      I.UnitRatePerPo
    ]);
    const [K, se] = a.useState({}),
      oe = async () => {
        try {
          const p = await Ce.post(
            'http://100.42.177.77:81/api/DyeingPrinting/SaveDyeingPrinting',
            I
          );
          console.log('Save response:', p.data),
            p.data.success
              ? f('Dyeing saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (f(`${p.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', p.data.message)),
            l((d) => ({
              designId: d.designId,
              planningHeaderId: d.planningHeaderId,
              batchNo: d.batchNo,
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
              poPcs: d.poPcs,
              baseColorName: '',
              createdOn: new Date().toISOString(),
              createdBy: i.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: i.empId
            })),
            V();
        } catch (p) {
          console.error('Error saving data:', p),
            f('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      he = [
        { value: 'Dyeing', label: 'Dyeing' },
        { value: 'Printing', label: 'Printing' }
      ],
      [J, O] = a.useState(!0),
      [_, T] = a.useState({}),
      [w, de] = a.useState(!1),
      Ie = (p) => {
        T(p), de(!0);
      },
      Me = (p) => {
        T(p), de(!0), O(!1);
      },
      Oe = () => {
        O(!0), de(!1), T({}), V();
      },
      [Ae, Se] = a.useState(0),
      [Le, Te] = a.useState(0);
    a.useEffect(() => {
      const p = Y.reduce((A, n) => A + (n.availableQty ?? 0), 0).toFixed(2),
        d = Y.reduce((A, n) => A + (n.assignedQty ?? 0), 0).toFixed(2);
      Se(parseFloat(p).toLocaleString()), Te(parseFloat(d).toLocaleString());
    }, [Y]);
    const Be = [
        ...Y,
        {
          id: 'TOTAL_SUMMARY',
          componentName: 'Total Summary',
          availableQty: Ae,
          assignedQty: Le
        }
      ],
      ne = { sortable: !1, pinnable: !1, hideable: !1 },
      We = [
        {
          field: 'id',
          headerName: 'Sr#',
          ...ne,
          renderCell: (p) =>
            p.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : p.value
        },
        { field: 'fabricName', headerName: 'Fabric', ...ne },
        {
          field: 'colorName',
          headerName: 'Color',
          ...ne,
          colSpan: (p, d) => (d.id === 'TOTAL_SUMMARY' ? 2 : void 0)
        },
        {
          field: 'processType',
          headerName: 'Process Type',
          ...ne,
          renderCell: (p) => {
            const d =
              p.value === 'Dyeing'
                ? 'primary.dark'
                : p.value === 'Printing'
                  ? 'success.dark'
                  : 'default';
            return e.jsx(Ge, {
              label: p.value,
              sx: {
                backgroundColor:
                  d === 'primary' || d === 'default' ? void 0 : d,
                color: d === 'primary' || d === 'default' ? void 0 : 'white'
              },
              color:
                d === 'primary'
                  ? 'primary'
                  : d === 'default'
                    ? 'default'
                    : void 0
            });
          }
        },
        { field: 'uom', headerName: ' UOM', ...ne },
        { field: 'poPcs', headerName: ' PO PCS.', ...ne },
        {
          field: 'availableQty',
          headerName: 'Available Quantitity',
          ...ne,
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
          ...ne,
          valueGetter: (p) => p.toLocaleString(),
          colSpan: (p, d) => (d.id === 'TOTAL_SUMMARY' ? 4 : void 0),
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
          ...ne,
          renderCell: (p) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(_t, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(Re, {
                    color: 'primary',
                    onClick: () => Ie(p.row),
                    children: e.jsx(ft, {})
                  }),
                  e.jsx(Re, {
                    color: 'primary',
                    onClick: () => Me(p.row),
                    children: e.jsx(Ye, {})
                  })
                ]
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(ot, { src: pa, sx: { background: 'transparent' } }),
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: m,
                      onChange: F,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: j.map((p) =>
                        e.jsx(
                          R,
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: I.designId,
                    onChange: F,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ae.map((p) =>
                      e.jsx(
                        R,
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: I.batchNo,
                      onChange: F,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: y.map((p) =>
                        e.jsx(
                          R,
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
                  children: e.jsx(c, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: I.baseColorName,
                    onChange: F,
                    disabled: !0,
                    sx: (p) => ({
                      ...(I.repeatsInMtr !== '' && {
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
                    e.jsx(pe, {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: I.fabricId,
                    onChange: F,
                    error: !!K.fabricId,
                    helperText: K.fabricId,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ee.map((p) =>
                      e.jsx(
                        R,
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
                  children: e.jsx(ta, {
                    fullWidth: !0,
                    options: me,
                    getOptionLabel: (p) => p.color || '',
                    renderInput: (p) =>
                      e.jsx(c, {
                        ...p,
                        label: 'Color',
                        name: 'colorId',
                        size: 'small',
                        error: !!K.colorId,
                        helperText: K.colorId,
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
                    value: me.find((p) => p.colorId === I.colorId) || null,
                    onChange: (p, d) => {
                      l((A) => ({
                        ...A,
                        colorId: d ? d.colorId : '',
                        color: d ? d.color : '',
                        availableQty: d ? d.total : '',
                        UOM: d ? d.uom : '',
                        uomId: d ? d.uomId : '',
                        Shrinkage: d ? d.shrinkage : '',
                        Wastage: d ? d.wastage : ''
                      }));
                    }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processType',
                    value: I.processType,
                    onChange: F,
                    error: !!K.processType,
                    helperText: K.processType,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: he.map((p) =>
                      e.jsx(R, { value: p.value, children: p.label }, p.value)
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: I.poPcs,
                    onChange: F,
                    disabled: !0,
                    sx: (p) => ({
                      ...(I.poPcs !== '' && {
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
                  children: e.jsx(c, {
                    label: 'UOM',
                    fullWidth: !0,
                    size: 'small',
                    name: 'UOM',
                    value: I.UOM,
                    onChange: F,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Available Qty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'availableQty',
                    value: I.availableQty,
                    onChange: F,
                    disabled: !0,
                    sx: (p) => ({
                      ...(I.availableQty !== '' && {
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
                  children: e.jsx(be, {
                    variant: 'contained',
                    color: 'primary',
                    size: 'small',
                    onClick: oe,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(pe, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        ' ',
        e.jsx(r, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(pe, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(ve, {
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
                    iColumns: We,
                    initialRows: Be,
                    setInitialData: t,
                    deleteApi:
                      'http://100.42.177.77:81/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=',
                    deleteBy: 'dpId',
                    refetch: V,
                    setAccordionExpanded: Z,
                    fileName: 'Dyeing&PrintingList',
                    isLoading: C
                  }),
                  e.jsxs(pt, {
                    open: w,
                    onClose: Oe,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(mt, {
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
                          e.jsx(fe, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Dyeing and Printing > Assign Vendors '
                          }),
                          e.jsx(Re, {
                            onClick: Oe,
                            sx: { color: '#ffffff' },
                            children: e.jsx(bt, {})
                          })
                        ]
                      }),
                      e.jsxs(ht, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(sa, {
                            initialFormData: _,
                            setInitialFormData: T,
                            refetchDyeingPrintingData: V,
                            handleClickOpen: Ie,
                            showUpperDiv: J
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
  ha = ma,
  Ut =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nNXXaciVVRAH8Kv1Jtoi5psFZZYUtoimhUVlaJHZghK2UBFCtGkbZdgiBG1GHyowaaEdWogWElvMFjJpw4oWwrJsVetDtNNevxjeuXW8PPe991rvh/5w4TznnDkzZ87Mf+bWav8H4Dgcgc9wfcPanViFidioL5Rvj2/wIqbgCyzA3XgKH+BI/+DWijMGpYEjO1U+FH8Uh++Jj6yPNzG5YW5wccYxWItF6anwWP9OjJiE7/FuYcCTeDnHjQYsLWR3w8cYi/OxP57AzE49cSGewzgswfJ0/0u4HwfgWYyq3w5deBXH4wXchHU4GgvbVdwPR+EVPI1NMCDesviFos3SqIiTaSl7BW5Pw5/Ho3gYl2Nuu8G3NG+8X85tgcMxCxfhLBxWf/N08bJU+h52xRrciGdwdj7bsFbKx+fbnZTfe+cNflGNX/EQJqQ3Pi+MPgN3pAd/x8GtlO+BT/I2A1P4T+0hMuYdzC/Om56XCW/NyOCt5gs9Lo5oPxBD8u07xesZK5vjtjRqXKEj0vGEZgYsxGXYOKO8U/yE3ZN0PsSVuCHOLHTsgxVVykdmgAzKAGuFryvmLsDVBXnF+w9OCt+60BXcMarRgBA8D91Jvc2URrqNSZkJ+f1dUvRbDfu/wqbpiXmFrluCIUvlke+rsS3OaaJ8WUmxhewO+LYXT52KneLWhcx167EhRtQ3JKNVYUqTuAkmfDBStoncI7kvMmvLHAcdTywPORT35rjqbdfWySPzfDF+wAPF/Hb4skJ2Xa6HzL45fiwCvTRgJq7NvK/CmcXeuQ1rpxdrF1fIBvn0z5ScXuXFGk7Md4nbVeGUYu8lDWvnFmtzKmR/C+JpZcA03JXjqoBaWfD9VplGkqjq890VvUJgTfHuezUzYMdgsBxHRavCpAaZoQ3fQblVWJLrK0suaDSgXwbakCSTKkQp7WoiP6AX5pyVJPd3GjYzYgFmZzT/2OSwVdkLblOU7PuauF4+Z3fGxqWtDBiblawrWbE3hIFv4OcW++Ylta9uqyHVU3rnpNBr/h2WZ1WMrLmmpfJABEnW7uD44dlybwjCk8OyWX0/YqvWLvSUy3jTXbIt77QsL8q+YnReZnTbyuvA1OTuqZkhMyoqXSNWRH+Y8sem8sm1DYWehvLtjPrhObdzZspVuDnL7GnBI4XMPUlQIzZYeR3ZGc1ObzyeFW981viByRtjsttdnO3cyRF8tf8Serj8oPhjmu11tNqfZnpFzz8fh/TJn9O+xl9lMwg6mBWmPgAAAABJRU5ErkJggg==',
  ga = ({ initialValues: o }) => {
    const { user: i } = Qe(),
      { enqueueSnackbar: C } = ze(),
      [S, b] = a.useState(!0),
      [t, I] = a.useState([]),
      [l, f] = a.useState({
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
        createdBy: i.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    a.useEffect(() => {
      f({
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
        createdBy: (t == null ? void 0 : t.createdBy) || i.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: i.empId
      });
    }, [t]);
    const [s, P] = a.useState(!1),
      Q = (d, A) => {
        P(!s);
      },
      [m, M] = a.useState(!1),
      { data: u } = $e(),
      [U, h] = a.useState('');
    a.useEffect(() => {
      h(o.collectionId);
    }, []);
    const { data: k } = _e(),
      { data: D, refetch: X } = Ke(U, { skip: !U }),
      { data: G, refetch: H } = Je(l.designId, { skip: !l.designId }),
      { data: V } = dt(
        { batchNo: l.planningHeaderId, componentId: l.componentId },
        { skip: !l.planningHeaderId || !l.componentId }
      ),
      { data: ae } = ct(
        {
          batchNo: l.planningHeaderId,
          componentId: l.componentId,
          fabricId: l.fabricId
        },
        { skip: !l.planningHeaderId || !l.componentId || !l.fabricId }
      ),
      { data: B, refetch: y } = qr(l.planningHeaderId, {
        skip: !l.planningHeaderId
      }),
      { data: q } = ut(l.planningHeaderId, { skip: !l.planningHeaderId });
    console.log('formData.planningHeaderId', l.planningHeaderId),
      console.log('collectionData', u),
      console.log('schiffliList', B);
    const [ee, ue] = a.useState([]),
      [g, E] = a.useState([]),
      [Y, te] = a.useState([]),
      [me, ie] = a.useState([]),
      [N, Z] = a.useState([]),
      [j, z] = a.useState([]),
      [F, K] = a.useState([]),
      [se, oe] = a.useState([]),
      [he, J] = a.useState([]);
    a.useEffect(() => {
      D && ue(D.result);
    }, [D]),
      a.useEffect(() => {
        G && E(G.result);
      }, [G]),
      a.useEffect(() => {
        V && te(V.result);
      }, [V]),
      a.useEffect(() => {
        ae && K(V.result);
      }, [ae]),
      a.useEffect(() => {
        q && J(q.result);
      }, [q]),
      a.useEffect(() => {
        B && (b(!1), oe(B.result.map((d, A) => ({ id: A + 1, ...d }))));
      }, [B, y]),
      a.useEffect(() => {
        if (k) {
          const d = k.result[0];
          ie(d.vendorList), Z(d.operatingMachineList), z(d.workingHeadList);
        }
      }, [k]),
      console.log('initialRows', se);
    const O = (u == null ? void 0 : u.result) || [];
    a.useEffect(() => {
      const d = () => {
        const L = parseFloat(l.thaanQty) || 0,
          ce = parseFloat(l.operatingMachine) || 0;
        return (L * ce).toFixed(2);
      };
      f((L) => ({ ...L, totalEmbroidry: d() }));
      const A = () => {
        const L = parseFloat(l.thaanQty) || 0,
          ce = parseFloat(l.noOfItemPerThaan) || 0;
        return (L * ce).toFixed(2);
      };
      f((L) => ({ ...L, totalPcs: A() }));
      const n = () => {
        const L = parseFloat(l.noOfStichesPerYard) || 0,
          ce = parseFloat(l.rate) || 0;
        return ((L / 1e3) * ce).toFixed(2);
      };
      f((L) => ({ ...L, amountPerYard: n() }));
      const x = () => {
        const L = parseFloat(l.totalAmount) || 0,
          ce = parseFloat(l.totalPcs) || 0;
        return (L / ce).toFixed(2);
      };
      f((L) => ({ ...L, costPerComponent: x() }));
      const W = () => {
        const L = parseFloat(l.amountPerYard) || 0,
          ce = parseFloat(l.totalEmbroidry) || 0,
          v = parseFloat(l.laserCutRate) || 0,
          $ = parseFloat(l.pcsForLaserCut) || 0;
        return (L * ce + $ * v).toFixed(2);
      };
      f((L) => ({ ...L, totalAmount: W() }));
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
    const _ = (d) => {
        const { name: A, checked: n } = d.target;
        f((x) => ({ ...x, [A]: n }));
      },
      T = (d) => {
        const { name: A, value: n } = d.target;
        if (A === 'collectionId')
          O.find((x) => x.collectionId === parseInt(n)),
            h(n),
            M(!0),
            oe([]),
            b(!0),
            f({
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
        else if (A === 'designId') {
          const x = ee.find((W) => W.designId === parseInt(n));
          oe([]),
            b(!0),
            f({
              ...l,
              designId: n,
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
          const x = g.find((W) => W.batchNo === n);
          f({
            ...l,
            batchNo: n,
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
            P(!0),
            M(!1);
        } else if (A === 'colorId') {
          const x = F.find((W) => W.colorId === n);
          f({
            ...l,
            colorId: n,
            availableQty: x ? x.total : '',
            cuttingSize: x ? x.cuttingSize : '',
            repeats: x ? x.repeats : ''
          });
        } else if (A === 'operatingMachineId') {
          const x = N.find((W) => W.lookUpId === n);
          f({
            ...l,
            operatingMachineId: n,
            operatingMachine: x ? x.lookUpName : ''
          });
        } else f({ ...l, [A]: n });
      };
    console.log('colors', F);
    const [w, de] = a.useState({}),
      Ie = async () => {
        const d = Me();
        if (Object.keys(d).length > 0) {
          de(d);
          return;
        }
        try {
          const A = await Ce.post(
            'http://100.42.177.77:81/api/Schiffli/SaveSchiffili',
            l
          );
          console.log('Save response:', A.data),
            A.data.success
              ? C('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (C(`${A.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', A.data.message)),
            f((n) => ({
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
              createdBy: i.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: i.empId
            })),
            y();
        } catch (A) {
          console.error('Error saving data:', A),
            C('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      Me = () => {
        const d = {};
        return (
          l.fabricId || (d.fabricId = 'fabricId is required'),
          l.colorId || (d.colorId = 'colorId is required'),
          l.vendorId || (d.vendorId = 'vendorId is required'),
          l.componentId || (d.componentId = 'componentId is required'),
          l.thaanQty || (d.thaanQty = 'thaanQty is required'),
          l.workingHeadId || (d.workingHeadId = 'workingHeadId is required'),
          l.rate || (d.rate = 'rate is required'),
          l.operatingMachineId ||
            (d.operatingMachineId = 'operatingMachineId is required'),
          l.noOfStichesPerYard ||
            (d.noOfStichesPerYard = 'noOfStichesPerYard is required'),
          l.noOfItemPerThaan ||
            (d.noOfItemPerThaan = 'noOfItemPerThaan is required'),
          d
        );
      };
    console.log('formData', l);
    const [Oe, Ae] = a.useState(0),
      [Se, Le] = a.useState(0),
      [Te, Be] = a.useState(0);
    a.useEffect(() => {
      const d = se.reduce((x, W) => x + (W.totalAmount ?? 0), 0).toFixed(2),
        A = se.reduce((x, W) => x + (W.totalEmbroidry ?? 0), 0).toFixed(2),
        n = se.reduce((x, W) => x + (W.totalPcs ?? 0), 0).toFixed(2);
      Ae(parseFloat(d).toLocaleString()),
        Le(parseFloat(A).toLocaleString()),
        Be(parseFloat(n).toLocaleString());
    }, [se]);
    const ne = {
        id: 'TOTAL_SUMMARY',
        fabricName: 'Total Summary',
        totalAmount: Oe,
        totalEmbroidry: Se,
        totalPcs: Te
      },
      We = [...se, ne],
      Fe = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (d, A) => (A.id === 'TOTAL_SUMMARY' ? 3 : void 0),
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : d.value
        },
        {
          field: 'fabricName',
          headerName: 'Fabric',
          colSpan: (d, A) => (A.id === 'TOTAL_SUMMARY' ? 2 : void 0),
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : d.value
        },
        {
          field: 'componentName',
          headerName: 'Component',
          renderCell: (d) =>
            e.jsx(Ge, {
              label: d.value,
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
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        { field: 'amountPerYard', headerName: 'Amount Per Yard' },
        {
          field: 'totalPcs',
          headerName: 'Total Pcs',
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        {
          field: 'totalAmount',
          headerName: 'Total Amount',
          renderCell: (d) =>
            d.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: d.value
                })
              : d.value
        },
        { field: 'costPerComponent', headerName: 'Cost Per Component' },
        { field: 'laserCutRate', headerName: 'LaserCut Rate' },
        { field: 'pcsForLaserCut', headerName: 'Laser Cut Pcs.' }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(ot, { src: Ut, sx: { background: 'transparent' } }),
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: U,
                      onChange: T,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: O.map((d) =>
                        e.jsx(
                          R,
                          { value: d.collectionId, children: d.collectionName },
                          d.collectionId
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: l.designId,
                    onChange: T,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ee.map((d) =>
                      e.jsx(
                        R,
                        { value: d.designId, children: d.designNo },
                        d.designId
                      )
                    )
                  })
                }),
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: l.batchNo,
                      onChange: T,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: g.map((d) =>
                        e.jsx(
                          R,
                          { value: d.batchNo, children: d.batchNo },
                          d.batchNo
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
                  children: e.jsx(c, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: l.baseColorName,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } },
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
                    })
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(pe, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Tt, {}),
              title: 'Add Schiffli ',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Re, {
                onClick: Q,
                sx: { mt: '-18px' },
                children: e.jsx(tt, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            ' ',
            e.jsxs(Bt, {
              expanded: s,
              onChange: Q,
              sx: {},
              children: [
                e.jsx(Ft, {
                  expandIcon: e.jsx(tt, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx(Rt, {
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
                          e.jsx(c, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Components',
                            name: 'componentId',
                            value: l.componentId,
                            onChange: T,
                            size: 'small',
                            required: !0,
                            error: !!w.componentId,
                            helperText: w.componentId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: he.map((d) =>
                              e.jsx(
                                R,
                                {
                                  value: d.componentId,
                                  children: d.componentName
                                },
                                d.componentId
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
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Fabric',
                          defaultValue: '',
                          size: 'small',
                          name: 'fabricId',
                          value: l.fabricId,
                          onChange: T,
                          required: !0,
                          error: !!w.fabricId,
                          helperText: w.fabricId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: Y.map((d) =>
                            e.jsx(
                              R,
                              { value: d.fabricId, children: d.fabric },
                              d.fabricId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Vendors',
                          defaultValue: '',
                          size: 'small',
                          name: 'vendorId',
                          value: l.vendorId,
                          onChange: T,
                          required: !0,
                          error: !!w.vendorId,
                          helperText: w.vendorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: me.map((d) =>
                            e.jsx(
                              R,
                              { value: d.lookUpId, children: d.lookUpName },
                              d.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Color',
                          size: 'small',
                          name: 'colorId',
                          value: l.colorId,
                          onChange: T,
                          required: !0,
                          error: !!w.colorId,
                          helperText: w.colorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: F.map((d) =>
                            e.jsx(
                              R,
                              { value: d.colorId, children: d.color },
                              d.colorId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Po Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: l.poPcs,
                          disabled: !0,
                          onChange: T,
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
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Available Quantity',
                          fullWidth: !0,
                          size: 'small',
                          name: 'availableQty',
                          value: l.availableQty,
                          onChange: T,
                          sx: (d) => ({
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
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Thaan Quantity',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'thaanQty',
                          value: l.thaanQty,
                          onChange: T,
                          required: !0,
                          error: !!w.thaanQty,
                          helperText: w.thaanQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Operating Machine',
                          defaultValue: '',
                          size: 'small',
                          name: 'operatingMachineId',
                          value: l.operatingMachineId,
                          onChange: T,
                          required: !0,
                          error: !!w.operatingMachineId,
                          helperText: w.operatingMachineId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: N.map((d) =>
                            e.jsx(
                              R,
                              { value: d.lookUpId, children: d.lookUpName },
                              d.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Working Head',
                          defaultValue: '',
                          size: 'small',
                          name: 'workingHeadId',
                          value: l.workingHeadId,
                          onChange: T,
                          required: !0,
                          error: !!w.workingHeadId,
                          helperText: w.workingHeadId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: j.map((d) =>
                            e.jsx(
                              R,
                              { value: d.lookUpId, children: d.lookUpName },
                              d.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'cuttingSize',
                          value: l.cuttingSize,
                          onChange: T,
                          sx: (d) => ({
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
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'rate',
                          value: l.rate,
                          onChange: T,
                          required: !0,
                          error: !!w.rate,
                          helperText: w.rate,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Stiches Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'noOfStichesPerYard',
                          value: l.noOfStichesPerYard,
                          onChange: T,
                          required: !0,
                          error: !!w.noOfStichesPerYard,
                          helperText: w.noOfStichesPerYard,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Items Per Thaan',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'noOfItemPerThaan',
                          value: l.noOfItemPerThaan,
                          onChange: T,
                          required: !0,
                          error: !!w.noOfItemPerThaan,
                          helperText: w.noOfItemPerThaan,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Total Embroidry',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalEmbroidry',
                          type: 'number',
                          value: l.totalEmbroidry,
                          onChange: T,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Amount Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'amountPerYard',
                          value: l.amountPerYard,
                          onChange: T,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Total Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalPcs',
                          value: l.totalPcs,
                          onChange: T,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Cost Per Component',
                          fullWidth: !0,
                          size: 'small',
                          name: 'costPerComponent',
                          value: l.costPerComponent,
                          onChange: T,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(c, {
                          label: 'Total Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'totalAmount',
                          value: l.totalAmount,
                          onChange: T,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(Qt, {
                          control: e.jsx(zt, {
                            checked: l.laserCut,
                            onChange: _,
                            name: 'laserCut'
                          }),
                          label: 'Laser Cut'
                        })
                      }),
                      l.laserCut
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
                                  children: e.jsx(c, {
                                    label: 'Laser Cut Rate',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'laserCutRate',
                                    value: l.laserCutRate,
                                    onChange: T,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                }),
                                e.jsx(r, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(c, {
                                    label: 'Pcs For LaserCut',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'pcsForLaserCut',
                                    value: l.pcsForLaserCut,
                                    onChange: T,
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
                        children: e.jsx(be, {
                          variant: 'contained',
                          size: 'small',
                          onClick: Ie,
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
          children: e.jsx(pe, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(ve, {
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
                  iColumns: Fe,
                  initialRows: We,
                  setInitialData: I,
                  deleteApi:
                    'http://100.42.177.77:81/api/Schiffli/DeleteSchiffiById?schiffiId=',
                  deleteBy: 'schiffiliId',
                  refetch: y,
                  setAccordionExpanded: P,
                  fileName: 'Schffili List',
                  isLoading: S
                })
              })
            })
          ]
        })
      ]
    });
  },
  ba = ga,
  fa = ({
    additionalProcessData: o,
    setAdditionalProcessData: i,
    refetchAdditionalProcessList: C,
    handleClickOpen: S
  }) => {
    const { user: b } = Qe(),
      [t, I] = a.useState([]),
      { enqueueSnackbar: l } = ze(),
      [f, s] = a.useState({}),
      [P, Q] = a.useState([]),
      m = t.reduce((B, y) => B + (y.quantity ?? 0), 0).toFixed(2);
    console.log('Quantity', m);
    const [M, u] = a.useState({
      additionalProcessDetId: 0,
      additionalProcessId: o.additionalProcessId || 0,
      designId: o.designNo || '',
      planningHeaderId: o.planningHeaderId || 0,
      batchNo: o.batchNo || '',
      componentName: o.componentName || '',
      componentId: o.componentId || '',
      colorName: o.colorName || '',
      colorId: o.colorId || '',
      fabricName: o.fabricName || '',
      fabricId: o.fabricId || '',
      uomId: o.uomId || '',
      uom: o.uom || '',
      vendorId: '',
      pcsPerComponent: o.pcsPerComponent || '',
      remainingPcsPerComponent: o.pcsPerComponent - m || '',
      processTypeName: o.processTypeName || '',
      processTypeId: o.processTypeId || '',
      quantity: '',
      ratePerPcs: 0,
      totalAmount: 0,
      costPerComponent: '',
      createdOn: new Date().toISOString(),
      createdBy: b.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: b.empId
    });
    a.useEffect(() => {
      u((B) => ({
        ...B,
        additionalProcessDetId: P.additionalProcessDetId || 0,
        vendorId: (P == null ? void 0 : P.vendorId) || '',
        quantity: (P == null ? void 0 : P.quantity) || '',
        ratePerPcs: (P == null ? void 0 : P.ratePerPcs) || '',
        remainingPcsPerComponent:
          B.remainingPcsPerComponent + (P == null ? void 0 : P.quantity) || '',
        totalAmount: (P == null ? void 0 : P.totalAmount) || '',
        costPerComponent: (P == null ? void 0 : P.costPerComponent) || 0,
        createdOn:
          (P == null ? void 0 : P.createdOn) || new Date().toISOString(),
        createdBy: (P == null ? void 0 : P.createdBy) || b.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: b.empId
      }));
    }, [P]),
      a.useEffect(() => {
        u({
          ...M,
          remainingPcsPerComponent:
            o.pcsPerComponent - m >= 0 ? o.pcsPerComponent - m : ''
        });
      }, [t, o.pcsPerComponent, m]);
    const { data: U } = _e(),
      { data: h, refetch: k } = Er(M.additionalProcessId, {
        skip: !M.additionalProcessId
      }),
      [D, X] = a.useState([]);
    a.useEffect(() => {
      if (U) {
        const B = U.result[0];
        X(B.vendorList);
      }
    }, [U]),
      a.useEffect(() => {
        h && I(h.result.map((B, y) => ({ id: y + 1, ...B })));
      }, [h, k]),
      console.log('initialRows', t);
    const G = (B) => {
      const { name: y, value: q } = B.target;
      u({ ...M, [y]: q }),
        u((ee) => {
          const ue = { ...ee, [y]: q };
          if (y === 'quantity' || y === 'remainingPcsPerComponent') {
            const g = ue.quantity,
              E = ue.remainingPcsPerComponent;
            g > E
              ? s((Y) => ({
                  ...Y,
                  quantity:
                    'Assigned Quantity cannot be greater than Remaining Quantity'
                }))
              : s((Y) => ({ ...Y, quantity: '' }));
          }
          return ue;
        });
    };
    a.useEffect(() => {
      const B = () => {
        const q = parseFloat(M.quantity) || 0,
          ee = parseFloat(M.ratePerPcs) || 0;
        return (q * ee).toFixed(2);
      };
      u((q) => ({ ...q, totalAmount: B() }));
      const y = () => {
        const q = parseFloat(M.totalAmount) || 0,
          ee = parseFloat(M.poPcs) || 0;
        return (q / ee).toFixed(2);
      };
      u((q) => ({ ...q, costPerComponent: y() }));
    }, [M.quantity, M.ratePerPcs, M.totalAmount]);
    const H = async () => {
        if ((console.log(M), M.quantity > M.remainingPcsPerComponent)) {
          l('Assigned quantity can not be greater then Remaining Quantity !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const B = await Ce.post(
            'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcessDetails',
            M
          );
          console.log('Save response:', B.data),
            B.data.success
              ? l('Schiffili saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (l(`${B.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', B.data.message)),
            k(),
            u((y) => ({
              ...y,
              vendorId: '',
              pcsPerComponent: o.pcsPerComponent || '',
              quantity: '',
              ratePerPcs: 0,
              totalAmount: 0,
              costPerComponent: '',
              remainingPcsPerComponent: o.pcsPerComponent - m || '',
              createdOn: new Date().toISOString(),
              createdBy: b.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: b.empId
            })),
            C();
        } catch (B) {
          console.error('Error saving data:', B),
            l('Schiffili not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      V = [
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
    return e.jsxs(we, {
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
              children: e.jsx(c, {
                fullWidth: !0,
                label: 'Select Design',
                name: 'designId',
                value: M.designId,
                onChange: G,
                size: 'small',
                disabled: !0,
                sx: (B) => ({
                  ...(M.designId !== '' && {
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
                e.jsx(c, {
                  fullWidth: !0,
                  label: 'Batch No.',
                  name: 'batchNo',
                  value: M.batchNo,
                  onChange: G,
                  size: 'small',
                  disabled: !0,
                  sx: (B) => ({
                    ...(M.batchNo !== '' && {
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
                e.jsx(c, {
                  fullWidth: !0,
                  label: 'Components',
                  name: 'componentName',
                  value: M.componentName,
                  onChange: G,
                  size: 'small',
                  disabled: !0,
                  sx: (B) => ({
                    ...(M.componentName !== '' && {
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
              children: e.jsx(c, {
                fullWidth: !0,
                label: 'Select Fabric',
                defaultValue: '',
                size: 'small',
                name: 'fabricName',
                value: M.fabricName,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.fabricName !== '' && {
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
              children: e.jsx(c, {
                fullWidth: !0,
                label: 'Color',
                size: 'small',
                name: 'colorName',
                value: M.colorName,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.colorName !== '' && {
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
              children: e.jsx(c, {
                fullWidth: !0,
                label: 'Process Type',
                defaultValue: '',
                size: 'small',
                name: 'processTypeName',
                value: M.processTypeName,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.processTypeName !== '' && {
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
              children: e.jsx(c, {
                label: 'Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'pcsPerComponent',
                value: M.pcsPerComponent,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.pcsPerComponent !== '' && {
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
              children: e.jsx(c, {
                label: 'Remaining Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'remainingPcsPerComponent',
                value: M.remainingPcsPerComponent,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.remainingPcsPerComponent !== '' && {
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
              children: e.jsx(c, {
                label: 'UOM',
                fullWidth: !0,
                size: 'small',
                name: 'uom',
                value: M.uom,
                onChange: G,
                disabled: !0,
                sx: (B) => ({
                  ...(M.uom !== '' && {
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
        e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
              children: e.jsx(c, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: M.vendorId,
                onChange: G,
                disabled: !M.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } },
                children: D.map((B) =>
                  e.jsx(
                    R,
                    { value: B.lookUpId, children: B.lookUpName },
                    B.lookUpId
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(c, {
                label: 'Quantity',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'quantity',
                value: M.quantity,
                onChange: G,
                disabled: !M.remainingPcsPerComponent,
                error: !!f.quantity,
                helperText: f.quantity,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(c, {
                label: 'Rate Per Pcs',
                type: 'number',
                fullWidth: !0,
                size: 'small',
                name: 'ratePerPcs',
                value: M.ratePerPcs,
                onChange: G,
                disabled: !M.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(c, {
                label: 'Total Amount',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'totalAmount',
                value: M.totalAmount,
                onChange: G,
                disabled: !M.remainingPcsPerComponent,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(be, {
                variant: 'contained',
                size: 'small',
                onClick: H,
                disabled: !M.remainingPcsPerComponent,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(pe, { color: '#921e22', sx: { height: 2, width: '100%' } }),
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
              iColumns: V,
              initialRows: t,
              setInitialData: Q,
              deleteApi:
                'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=',
              deleteBy: 'additionalProcessDetId',
              refetch: k
            })
          })
        })
      ]
    });
  },
  Ia = ({ initialValues: o }) => {
    const { user: i } = Qe(),
      { enqueueSnackbar: C } = ze(),
      [S, b] = a.useState(!0),
      [t, I] = a.useState([]),
      [l, f] = a.useState({
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
        createdBy: i.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: i.empId
      });
    console.log('initialData', t),
      a.useEffect(() => {
        f({
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
          createdBy: (t == null ? void 0 : t.createdBy) || i.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: i.empId
        });
      }, [t]);
    const [s, P] = a.useState(!1),
      { data: Q } = $e(),
      [m, M] = a.useState('');
    a.useEffect(() => {
      M(o.collectionId);
    }, []);
    const { data: u } = _e(),
      { data: U, refetch: h } = Ke(m, { skip: !m }),
      { data: k, refetch: D } = Je(l.designId, { skip: !l.designId }),
      { data: X } = dt(
        { batchNo: l.planningHeaderId, componentId: l.componentId },
        { skip: !l.planningHeaderId || !l.componentId }
      ),
      { data: G } = ct(
        {
          batchNo: l.planningHeaderId,
          componentId: l.componentId,
          fabricId: l.fabricId
        },
        { skip: !l.planningHeaderId || !l.componentId || !l.fabricId }
      ),
      { data: H, refetch: V } = Gr(l.planningHeaderId, {
        skip: !l.planningHeaderId
      }),
      { data: ae } = ut(l.planningHeaderId, { skip: !l.planningHeaderId });
    console.log('lookupData', u),
      console.log('collectionData', Q),
      console.log('colorData', G);
    const [B, y] = a.useState([]),
      [q, ee] = a.useState([]),
      [ue, g] = a.useState([]),
      [E, Y] = a.useState([]),
      [te, me] = a.useState([]),
      [ie, N] = a.useState([]),
      [Z, j] = a.useState([]),
      [z, F] = a.useState([]),
      [K, se] = a.useState([]),
      [oe, he] = a.useState([]),
      [J, O] = a.useState([]);
    console.log('batchData', k);
    const [_, T] = a.useState([]);
    a.useEffect(() => {
      Q && T(Q.result);
    }, [Q]),
      a.useEffect(() => {
        U && y(U.result);
      }, [U]),
      a.useEffect(() => {
        k && ee(k.result);
      }, [k]),
      a.useEffect(() => {
        X && g(X.result);
      }, [X]),
      a.useEffect(() => {
        G && se(G.result);
      }, [G]),
      a.useEffect(() => {
        ae && O(ae.result);
      }, [ae]),
      a.useEffect(() => {
        if (u) {
          const p = u.result[0];
          me(p.uomList), N(p.processList);
        }
      }, [u]),
      a.useEffect(() => {
        H && (b(!1), he(H.result.map((p, d) => ({ id: d + 1, ...p }))));
      }, [H, V]),
      a.useEffect(() => {
        if (u) {
          const p = u.result[0];
          Y(p.vendorList), j(p.operatingMachineList), F(p.workingHeadList);
        }
      }, [u]),
      console.log('initialRows', oe);
    const w = (p) => {
      const { name: d, value: A } = p.target;
      if (d === 'collectionId')
        _.find((n) => n.collectionId === parseInt(A)),
          M(A),
          he([]),
          b(!0),
          f({
            ...l,
            collectionId: A,
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
            createdBy: i.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: i.empId
          });
      else if (d === 'designId') {
        const n = B.find((x) => x.designId === parseInt(A));
        he([]),
          b(!0),
          f({
            ...l,
            designId: A,
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
            createdBy: i.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: i.empId
          });
      } else if (d === 'batchNo') {
        const n = q.find((x) => x.batchNo === A);
        f({
          ...l,
          batchNo: A,
          planningHeaderId: n ? n.planningHeaderId : '',
          poPcs: n ? n.poPcs : '',
          componentId: '',
          colorId: '',
          fabricId: '',
          uomId: '',
          pcsPerComponent: '',
          processTypeId: '',
          createdOn: new Date().toISOString(),
          createdBy: i.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: i.empId
        }),
          P(!0);
      } else f({ ...l, [d]: A });
    };
    console.log('colors', K);
    const de = async () => {
      console.log('formData', l);
      try {
        const p = await Ce.post(
          'http://100.42.177.77:81/api/AdditionalProcess/SaveAdditionalProcess',
          l
        );
        console.log('Save response:', p.data),
          p.data.success
            ? C('Process saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (C(`${p.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', p.data.message)),
          f((d) => ({
            additionalProcessId: 0,
            designId: d.designId,
            planningHeaderId: d.planningHeaderId,
            batchNo: d.batchNo,
            baseColorName: d.baseColorName,
            poPcs: d.poPcs,
            componentId: '',
            colorId: '',
            fabricId: '',
            uomId: '',
            pcsPerComponent: '',
            processTypeId: '',
            createdOn: new Date().toISOString(),
            createdBy: i.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: i.empId
          })),
          V();
      } catch (p) {
        console.error('Error saving data:', p),
          C('Process not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    console.log('formData', l),
      a.forwardRef(function (d, A) {
        return e.jsx(Yr, { direction: 'up', ref: A, ...d });
      });
    const [Ie, Me] = a.useState({}),
      [Oe, Ae] = a.useState(!1),
      Se = (p) => {
        Me(p), Ae(!0);
      },
      Le = () => {
        Ae(!1), Me({}), V();
      },
      [Te, Be] = a.useState(0);
    a.useEffect(() => {
      const p = oe.reduce((d, A) => d + (A.assignedQty ?? 0), 0).toFixed(2);
      Be(parseFloat(p).toLocaleString());
    }, [oe]);
    const ne = [...oe, { id: 'TOTAL_SUMMARY', assignedQty: Te }],
      We = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (p, d) => (d.id === 'TOTAL_SUMMARY' ? 4 : void 0),
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
            e.jsx(Ge, {
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
          colSpan: (p, d) => (d.id === 'TOTAL_SUMMARY' ? 3 : void 0),
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
              children: e.jsx(Re, {
                color: 'primary',
                onClick: () => Se(p.row),
                children: e.jsx(ft, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(ot, { src: Ut, sx: { background: 'transparent' } }),
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: m,
                      onChange: w,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: _.map((p) =>
                        e.jsx(
                          R,
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: l.designId,
                    onChange: w,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: B.map((p) =>
                      e.jsx(
                        R,
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: l.batchNo,
                      onChange: w,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: q.map((p) =>
                        e.jsx(
                          R,
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
                  children: e.jsx(c, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: l.baseColorName,
                    onChange: w,
                    disabled: !0,
                    sx: (p) => ({
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
                e.jsxs(r, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(pe, {
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
                    e.jsx(c, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: l.componentId,
                      onChange: w,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: J.map((p) =>
                        e.jsx(
                          R,
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: l.fabricId,
                    onChange: w,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ue.map((p) =>
                      e.jsx(
                        R,
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: l.colorId,
                    onChange: w,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: K.map((p) =>
                      e.jsx(
                        R,
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
                  children: e.jsx(c, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: l.poPcs,
                    onChange: w,
                    disabled: !0,
                    sx: (p) => ({
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
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(c, {
                    label: 'Pcs. Per Component',
                    fullWidth: !0,
                    size: 'small',
                    name: 'pcsPerComponent',
                    value: l.pcsPerComponent,
                    onChange: w,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'UOM',
                    type: 'number',
                    defaultValue: 140,
                    size: 'small',
                    name: 'uomId',
                    value: l.uomId,
                    onChange: w,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: te.map((p) =>
                      e.jsx(
                        R,
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processTypeId',
                    value: l.processTypeId,
                    onChange: w,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ie.map((p) =>
                      e.jsx(
                        R,
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
                  children: e.jsx(be, {
                    variant: 'contained',
                    size: 'small',
                    onClick: de,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(pe, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(ve, {
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
                    iColumns: We,
                    initialRows: ne,
                    setInitialData: I,
                    deleteApi:
                      'http://100.42.177.77:81/api/AdditionalProcess/DeleteAdditionalProcess?adId=',
                    deleteBy: 'additionalProcessId',
                    refetch: V,
                    setAccordionExpanded: P,
                    fileName: 'AdditionalProcess',
                    isLoading: S
                  }),
                  e.jsxs(pt, {
                    open: Oe,
                    onClose: Le,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(mt, {
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
                          e.jsx(fe, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Additional Process > Assign Vendors '
                          }),
                          e.jsx(Re, {
                            onClick: Le,
                            sx: { color: '#ffffff' },
                            children: e.jsx(bt, {})
                          })
                        ]
                      }),
                      e.jsxs(ht, {
                        children: [
                          e.jsx(gt, { id: 'alert-dialog-slide-description' }),
                          e.jsx(fa, {
                            additionalProcessData: Ie,
                            setAdditionalProcessData: Me,
                            refetchAdditionalProcessList: V,
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
  xa = Ia;
function va({ initialValues: o }) {
  const [i, C] = a.useState(!0),
    { data: S } = _e(),
    [b, t] = a.useState([]),
    [I, l] = a.useState([]),
    [f, s] = a.useState([]),
    [P, Q] = a.useState([]),
    [m, M] = a.useState([]),
    [u, U] = a.useState([]),
    { user: h } = Qe();
  a.useEffect(() => {
    S &&
      (s(S.result[0].vendorList),
      l(S.result[0].serviceList),
      t(S.result[0].serviceTypeList),
      M(S.result[0].uomList));
  }, [S]);
  const [k, D] = a.useState({
    additionalServiceId: 0,
    collectionId: '',
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
  a.useEffect(() => {
    D({
      ...k,
      additionalServiceId: u.additionalServiceId || 0,
      collectionId: (u == null ? void 0 : u.collectionId) || '',
      serviceTypeId: (u == null ? void 0 : u.serviceTypeId) || '',
      serviceListId: (u == null ? void 0 : u.serviceListId) || '',
      vendorId: (u == null ? void 0 : u.vendorId) || '',
      qty: (u == null ? void 0 : u.qty) || '',
      uomId: (u == null ? void 0 : u.uomId) || '',
      rate: (u == null ? void 0 : u.rate) || '',
      totalAmount: (u == null ? void 0 : u.totalAmount) || 0,
      UOM: (u == null ? void 0 : u.uom) || 0,
      uom: (u == null ? void 0 : u.uom) || '',
      createdOn: (u == null ? void 0 : u.createdOn) || new Date().toISOString(),
      createdBy: (u == null ? void 0 : u.createdBy) || h.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: h.empId
    });
  }, [u]),
    a.useEffect(() => {
      D({ ...k, collectionId: (o == null ? void 0 : o.collectionId) || '' });
    }, [D]);
  const X = async (g) => {
    const { name: E, value: Y } = g.target;
    if (
      (console.log(`Updating ${E} to ${Y}`),
      D({ ...k, [E]: Y }),
      E === 'collectionId')
    ) {
      const te = P.find((me) => me.collectionId === Y);
      te && D((me) => ({ ...me, poPcs: te.poPcs }));
    }
  };
  a.useEffect(() => {
    const g = () => {
      const Y = parseFloat(k.qty) || 0,
        te = parseFloat(k.rate) || 0;
      return (Y * te).toFixed(2);
    };
    D((Y) => ({ ...Y, totalAmount: g() }));
    const E = () => {
      const Y = parseFloat(k.poPcs) || 0,
        te = parseFloat(k.totalAmount) || 0;
      return (Y / te).toFixed(2);
    };
    D((Y) => ({ ...Y, costperPiece: E() }));
  }, [k.qty, k.rate, k.totalAmount, k.costperPiece]);
  const G = async () => {
    try {
      const g = await Ce.post(
        'http://100.42.177.77:81/api/AdditionalServices/SaveAdditionalServices',
        k
      );
      console.log('Form data saved:', g.data),
        D({
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
    } catch (g) {
      console.error('Error saving data:', g);
    }
  };
  a.useEffect(() => {
    (async () => {
      try {
        const E = await Ce.get(
          'http://100.42.177.77:81/api/CollectionRegistration/GetCollectionList?appId=1'
        );
        console.log('GetCollectionFromPlanningHeader', E), Q(E.data.result);
      } catch (E) {
        console.error('Error fetching design options:', E);
      }
    })();
  }, []);
  const [H, V] = a.useState([]),
    ae = a.useCallback(async () => {
      try {
        const g = await Ce.get(
          `http://100.42.177.77:81/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${k.collectionId}`
        );
        Array.isArray(g.data.result)
          ? (C(!1), V(g.data.result.map((E, Y) => ({ id: Y + 1, ...E }))))
          : (console.error(
              'API returned unexpected data format:',
              g.data.result
            ),
            V([]));
      } catch (g) {
        console.error('Error fetching data:', g), V([]);
      }
    }, [k.collectionId]);
  a.useEffect(() => {
    ae();
  }, [ae]);
  const [B, y] = a.useState(0);
  a.useEffect(() => {
    const g = H.reduce((E, Y) => E + (Y.totalAmount ?? 0), 0).toFixed(2);
    y(parseFloat(g).toLocaleString());
  }, [H]);
  const q = [...H, { id: 'TOTAL_SUMMARY', totalAmount: B }],
    ee = [
      {
        field: 'id',
        headerName: 'Sr#',
        colSpan: (g, E) => (E.id === 'TOTAL_SUMMARY' ? 4 : void 0),
        renderCell: (g) =>
          g.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: 'black', fontWeight: 'bold' },
                children: 'Total Summary'
              })
            : g.value
      },
      { field: 'collectionName', headerName: 'Collection Name' },
      {
        field: 'serviceType',
        headerName: 'Service Type',
        renderCell: (g) =>
          e.jsx(Ge, {
            label: g.value,
            sx: { backgroundColor: 'primary.dark', color: 'white' },
            color: void 0
          })
      },
      {
        field: 'serviceListName',
        headerName: 'Service List Name',
        renderCell: (g) =>
          e.jsx(Ge, {
            label: g.value,
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
        colSpan: (g, E) => (E.id === 'TOTAL_SUMMARY' ? 3 : void 0),
        renderCell: (g) =>
          g.row.id === 'TOTAL_SUMMARY'
            ? e.jsx('span', {
                style: { color: '#a11f23', fontWeight: 'bold' },
                children: g.value
              })
            : g.value
      },
      { field: 'costperPiece', headerName: 'Cost per Piece' }
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(ve, {
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
                md: 4,
                children: e.jsx(c, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Select Collection',
                  name: 'collectionId',
                  value: k.collectionId,
                  onChange: X,
                  size: 'small',
                  InputLabelProps: { sx: { color: 'black' } },
                  children:
                    P.length > 0
                      ? P.map((g) =>
                          e.jsx(
                            R,
                            {
                              id: 'collectionId',
                              value: g.collectionId,
                              children: g.collectionName
                            },
                            g.collectionId
                          )
                        )
                      : e.jsx(R, {
                          disabled: !0,
                          children: 'No Collections Available'
                        })
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service Type',
                  name: 'serviceTypeId',
                  value: k.serviceTypeId,
                  onChange: X,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: b.map((g) =>
                    e.jsx(
                      R,
                      { value: g.lookUpId, children: g.lookUpName },
                      g.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service List Id',
                  name: 'serviceListId',
                  value: k.serviceListId,
                  onChange: X,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: I.map((g) =>
                    e.jsx(
                      R,
                      { value: g.lookUpId, children: g.lookUpName },
                      g.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                xs: 12,
                md: 4,
                children: e.jsx(c, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Vendor Name',
                  size: 'small',
                  name: 'vendorId',
                  value: k.vendorId,
                  onChange: X,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: f.map((g) =>
                    e.jsx(
                      R,
                      { value: g.lookUpId, children: g.lookUpName },
                      g.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-required',
                  label: "PO PC's",
                  name: 'poPcs',
                  value: k.poPcs,
                  onChange: X,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  disabled: !0,
                  sx: (g) => ({
                    ...(k.poPcs !== '' && {
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
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-required',
                  label: 'Qty',
                  name: 'qty',
                  value: k.qty,
                  onChange: X,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  fullWidth: !0,
                  select: !0,
                  label: 'UOM',
                  defaultValue: '',
                  size: 'small',
                  name: 'uomId',
                  value: k.uomId,
                  onChange: X,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: m.map((g) =>
                    e.jsx(
                      R,
                      { value: g.lookUpId, children: g.lookUpName },
                      g.lookUpId
                    )
                  )
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-required',
                  label: 'Rate',
                  name: 'rate',
                  value: k.rate,
                  onChange: X,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-required',
                  label: 'Total Amount',
                  name: 'totalAmount',
                  value: k.totalAmount,
                  onChange: X,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(r, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(c, {
                  id: 'outlined-required',
                  label: 'Cost per Piece',
                  name: 'costperPiece',
                  value: k.costperPiece,
                  onChange: X,
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
                children: e.jsx(be, {
                  variant: 'contained',
                  color: 'primary',
                  size: 'small',
                  onClick: G,
                  children: 'Save'
                })
              })
            ]
          })
        ]
      }),
      e.jsx(pe, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      e.jsxs(ve, {
        variant: 'outlined',
        children: [
          e.jsx(ye, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'View Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsx(qe, {
            iColumns: ee,
            initialRows: q,
            isLoading: i,
            setInitialData: U,
            deleteApi:
              'http://100.42.177.77:81/api/AdditionalServices/DeleteAdditionalProcess?servicesId=',
            refetch: ae,
            deleteBy: 'additionalServiceId'
          })
        ]
      })
    ]
  });
}
Vr($r)(({ theme: o }) => ({
  backgroundColor: o.palette.primary.main,
  color: o.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${o.palette.grey[400]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${o.palette.grey[400]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));
const ya = ({
    initialValues: o,
    setActiveStep: i,
    collectionId: C,
    setInitialValues: S
  }) => {
    var F, K, se, oe, he, J;
    Qe(), ze(), a.useState([]);
    const { data: b } = $e(),
      [t, I] = a.useState(null),
      [l, f] = a.useState(!1);
    it();
    const [s, P] = a.useState(C || ''),
      Q = (O) => {
        z.current &&
          z.current.autosizeColumns &&
          z.current.autosizeColumns({
            includeOutliers: !0,
            includeHeaders: !0
          });
      },
      [m, M] = a.useState({ designId: '', planningHeaderId: 0, batchNo: '' });
    a.useEffect(() => {
      S({
        collectionId: (m == null ? void 0 : m.collectionId) || '',
        designId: (m == null ? void 0 : m.designId) || '',
        planningHeaderId: (m == null ? void 0 : m.planningHeaderId) || '',
        batchNo: (m == null ? void 0 : m.batchNo) || ''
      });
    }, [m.collectionId, m.designId, m == null ? void 0 : m.batchNo]);
    const { data: u, refetch: U } = Ke(s, { skip: !s }),
      { data: h, refetch: k } = Je(m.designId, { skip: !m.designId }),
      [D, X] = a.useState([]),
      [G, H] = a.useState([]),
      [V, ae] = a.useState([]);
    a.useEffect(() => {
      b && ae(b.result);
    }, [b]),
      a.useEffect(() => {
        u && X(u.result);
      }, [u]),
      a.useEffect(() => {
        h && H(h.result);
      }, [h]);
    const B = (O) => {
      const { name: _, value: T } = O.target;
      if (
        (console.log(`handleChange called with name: ${_}, value: ${T}`),
        _ === 'collectionId')
      )
        P(T),
          M({
            ...m,
            collectionId: T,
            designId: '',
            planningHeaderId: 0,
            batchNo: ''
          });
      else if (_ === 'designId') M({ ...m, designId: T, planningHeaderId: 0 });
      else if (_ === 'batchNo') {
        const w = G.find((de) => de.batchNo === T);
        M({ ...m, batchNo: T, planningHeaderId: w ? w.planningHeaderId : '' }),
          w && y(w.planningHeaderId);
      } else M({ ...m, [_]: T });
    };
    console.log('Selected collection ID:', s),
      console.log('Form data:', m),
      console.log('Design list:', D),
      console.log('Batch list:', G);
    const y = async (O) => {
      f(!0);
      try {
        const _ = await Ce.get(
          `http://100.42.177.77:81/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${O}`
        );
        _.data.success ? I(_.data.result) : console.error(_.data.message);
      } catch (_) {
        console.error('Failed to fetch summary data', _);
      } finally {
        f(!1);
      }
    };
    console.log(t);
    const q = [
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
      ee = [
        { field: 'designNo', headerName: 'Design No' },
        { field: 'batchNo', headerName: 'Batch No' },
        { field: 'fabricCount', headerName: 'Fabric Count' },
        { field: 'totalExcGst', headerName: 'Total Excluding GST' },
        { field: 'totalIncGst', headerName: 'Total Including GST' }
      ],
      ue = [
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
      g = [
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
      E = [
        {
          field: 'availableQtySum',
          headerName: 'Available Qty Sum',
          width: 150
        },
        { field: 'totalPcsSum', headerName: 'Total Pcs Sum', width: 150 },
        { field: 'fabricCount', headerName: 'Fabric Count', width: 150 },
        { field: 'componentCount', headerName: 'Component Count', width: 150 }
      ],
      Y = [
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
      te =
        ((F = t == null ? void 0 : t.prePlanningList) == null
          ? void 0
          : F.map((O, _) => ({ id: _, ...O }))) || [],
      me =
        ((K = t == null ? void 0 : t.fabricationList) == null
          ? void 0
          : K.map((O, _) => ({ id: _, ...O }))) || [],
      ie =
        ((se = t == null ? void 0 : t.dyeingPrintingList) == null
          ? void 0
          : se.map((O, _) => ({ id: _, ...O }))) || [],
      N =
        ((oe = t == null ? void 0 : t.embroideryList) == null
          ? void 0
          : oe.map((O, _) => ({ id: _, ...O }))) || [],
      Z =
        ((he = t == null ? void 0 : t.schiffiliList) == null
          ? void 0
          : he.map((O, _) => ({ id: _, ...O }))) || [],
      j =
        ((J = t == null ? void 0 : t.additionalProcessList) == null
          ? void 0
          : J.map((O, _) => ({ id: _, ...O }))) || [],
      z = ea();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ve, {
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
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Collection',
                    name: 'collectionId',
                    value: s,
                    onChange: B,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: V.map((O) =>
                      e.jsx(
                        R,
                        { value: O.collectionId, children: O.collectionName },
                        O.collectionId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: m.designId,
                    onChange: B,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: D.map((O) =>
                      e.jsx(
                        R,
                        { value: O.designId, children: O.designNo },
                        O.designId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 4,
                  children: e.jsx(c, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Batch No.',
                    name: 'batchNo',
                    value: m.batchNo,
                    onChange: B,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: G.map((O) =>
                      e.jsx(
                        R,
                        { value: O.batchNo, children: O.batchNo },
                        O.batchNo
                      )
                    )
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(r, { item: !0, xs: 12, md: 12, mb: 1 }),
        e.jsxs(ve, {
          variant: 'outlined',
          children: [
            e.jsx(ye, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Summary Details',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              container: !0,
              spacing: 1,
              width: 'inherit',
              sx: { paddingY: 1, paddingX: 1 },
              children: e.jsx(r, {
                item: !0,
                xs: 12,
                md: 12,
                paddingTop: 1,
                children: l
                  ? e.jsx(we, {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      children: e.jsx(Ct, {})
                    })
                  : t
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(0),
                            children: 'Pre Planning'
                          }),
                          e.jsx(Ve, {
                            rows: te,
                            columns: q,
                            pageSize: 5,
                            rowsPerPageOptions: [5],
                            autoHeight: !0,
                            hideFooter: !0,
                            onStateChange: Q,
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
                          e.jsx(pe, {
                            color: '#921e22',
                            sx: { height: 3, width: '100%', mb: 1 }
                          }),
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(1),
                            children: 'Fabrication'
                          }),
                          e.jsx(Ve, {
                            rows: me,
                            columns: ee,
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
                          e.jsx(pe, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mt: 1, mb: 1 }
                          }),
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(2),
                            children: 'Dyeing'
                          }),
                          e.jsx(Ve, {
                            rows: ie,
                            columns: ue,
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
                          e.jsx(pe, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(3),
                            children: 'Embroidery'
                          }),
                          e.jsx(Ve, {
                            rows: N,
                            columns: g,
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
                          e.jsx(pe, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(4),
                            children: 'Schiffli'
                          }),
                          e.jsx(Ve, {
                            rows: Z,
                            columns: E,
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
                          e.jsx(pe, {
                            color: '#921e22',
                            sx: { height: 2, width: '100%', mb: 1 }
                          }),
                          e.jsx(fe, {
                            variant: 'h3',
                            gutterBottom: !0,
                            sx: {
                              color: '#9f1d22',
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' }
                            },
                            onClick: () => i(5),
                            children: 'Additional Process'
                          }),
                          e.jsx(Ve, {
                            rows: j,
                            columns: Y,
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
                    : e.jsx(Ct, {})
              })
            })
          ]
        })
      ]
    });
  },
  St = ya;
var Ca = {
    boolean: !1,
    function: !0,
    object: !0,
    number: !1,
    string: !1,
    undefined: !1
  },
  xt = Ca,
  Ma = xt;
function Pa(o) {
  return !!(o && Ma[typeof o]);
}
var nt = Pa,
  Sa = Object.prototype,
  ja = Sa.toString,
  ka = RegExp(
    '^' +
      String(ja)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') +
      '$'
  ),
  st = ka,
  Oa = xt,
  Aa = Object.prototype,
  Na = Aa.hasOwnProperty,
  wa = function (o) {
    var i,
      C = o,
      S = [];
    if (!C || !Oa[typeof o]) return S;
    for (i in C) Na.call(C, i) && S.push(i);
    return S;
  },
  La = wa,
  Ta = nt,
  Ba = st,
  Fa = La,
  rt = Ba.test((rt = Object.keys)) && rt,
  Ra = rt
    ? function (o) {
        return Ta(o) ? rt(o) : [];
      }
    : Fa,
  Ht = Ra;
function Qa() {}
var za = Qa,
  qt = nt,
  _a = st,
  at = _a.test((at = Object.create)) && at;
function Et(o, i) {
  return qt(o) ? at(o) : {};
}
at ||
  (Et = (function () {
    function o() {}
    return function (i) {
      if (qt(i)) {
        o.prototype = i;
        var C = new o();
        o.prototype = null;
      }
      return C || window.Object();
    };
  })());
var Gt = Et,
  Wa = za,
  Ua = st,
  jt = { configurable: !1, enumerable: !1, value: null, writable: !1 },
  kt = (function () {
    try {
      var o = {},
        i = Ua.test((i = Object.defineProperty)) && i,
        C = i(o, o, o) && i;
    } catch {}
    return C;
  })(),
  Ha = kt
    ? function (o, i) {
        (jt.value = i), kt(o, '__bindData__', jt);
      }
    : Wa,
  vt = Ha,
  qa = Gt,
  Ea = nt,
  Ga = vt,
  Ya = [],
  Va = Ya.push;
function $a(o) {
  var i = o[0],
    C = o[2],
    S = o[4];
  function b() {
    if (C) {
      var t = C.slice();
      Va.apply(t, arguments);
    }
    if (this instanceof b) {
      var I = qa(i.prototype),
        l = i.apply(I, t || arguments);
      return Ea(l) ? l : I;
    }
    return i.apply(S, t || arguments);
  }
  return Ga(b, o), b;
}
var Ka = $a;
function Xa(o, i, C) {
  i || (i = 0), typeof C > 'u' && (C = o ? o.length : 0);
  for (var S = -1, b = C - i || 0, t = Array(b < 0 ? 0 : b); ++S < b; )
    t[S] = o[i + S];
  return t;
}
var Yt = Xa,
  Ja = Gt,
  Za = nt,
  Da = vt,
  eo = Yt,
  to = [],
  Ot = to.push;
function Vt(o) {
  var i = o[0],
    C = o[1],
    S = o[2],
    b = o[3],
    t = o[4],
    I = o[5],
    l = C & 1,
    f = C & 2,
    s = C & 4,
    P = C & 8,
    Q = i;
  function m() {
    var M = l ? t : this;
    if (S) {
      var u = S.slice();
      Ot.apply(u, arguments);
    }
    if (
      (b || s) &&
      (u || (u = eo(arguments)), b && Ot.apply(u, b), s && u.length < I)
    )
      return (C |= 16), Vt([i, P ? C : C & -4, u, null, t, I]);
    if ((u || (u = arguments), f && (i = M[Q]), this instanceof m)) {
      M = Ja(i.prototype);
      var U = i.apply(M, u);
      return Za(U) ? U : M;
    }
    return i.apply(M, u);
  }
  return Da(m, o), m;
}
var ro = Vt;
function ao(o) {
  return typeof o == 'function';
}
var oo = ao,
  no = Ka,
  so = ro,
  lo = oo,
  io = [],
  At = io.push;
function $t(o, i, C, S, b, t) {
  var I = i & 1,
    l = i & 2,
    f = i & 4,
    s = i & 16,
    P = i & 32;
  if (!l && !lo(o)) throw new TypeError();
  s && !C.length && ((i &= -17), (s = C = !1)),
    P && !S.length && ((i &= -33), (P = S = !1));
  var Q = o && o.__bindData__;
  if (Q && Q !== !0)
    return (
      (Q = Q.slice()),
      I && !(Q[1] & 1) && (Q[4] = b),
      !I && Q[1] & 1 && (i |= 8),
      f && !(Q[1] & 4) && (Q[5] = t),
      s && At.apply(Q[2] || (Q[2] = []), C),
      P && At.apply(Q[3] || (Q[3] = []), S),
      (Q[1] |= i),
      $t.apply(null, Q)
    );
  var m = i == 1 || i === 17 ? no : so;
  return m([o, i, C, S, b, t]);
}
var co = $t,
  Nt = co,
  uo = Yt;
function po(o, i) {
  return arguments.length > 2
    ? Nt(o, 17, uo(arguments, 2), null, i)
    : Nt(o, 1, null, null, i);
}
var mo = po;
function ho(o) {
  return o;
}
var go = ho,
  bo = st,
  fo = /\bthis\b/,
  yt = {};
yt.funcDecomp =
  !bo.test(window.WinRTError) &&
  fo.test(function () {
    return this;
  });
yt.funcNames = typeof Function.name == 'string';
var Io = yt,
  xo = mo,
  vo = go,
  yo = vt,
  lt = Io,
  Co = /^\s*function[ \n\r\t]+\w/,
  Mo = /\bthis\b/,
  Po = Function.prototype.toString;
function So(o, i, C) {
  if (typeof o != 'function') return vo;
  if (typeof i > 'u' || !('prototype' in o)) return o;
  var S = o.__bindData__;
  if (
    typeof S > 'u' &&
    (lt.funcNames && (S = !o.name), (S = S || !lt.funcDecomp), !S)
  ) {
    var b = Po.call(o);
    lt.funcNames || (S = !Co.test(b)), S || ((S = Mo.test(b)), yo(o, S));
  }
  if (S === !1 || (S !== !0 && S[1] & 1)) return o;
  switch (C) {
    case 1:
      return function (t) {
        return o.call(i, t);
      };
    case 2:
      return function (t, I) {
        return o.call(i, t, I);
      };
    case 3:
      return function (t, I, l) {
        return o.call(i, t, I, l);
      };
    case 4:
      return function (t, I, l, f) {
        return o.call(i, t, I, l, f);
      };
  }
  return xo(o, i);
}
var Kt = So,
  jo = Kt,
  ko = Ht,
  wt = xt,
  Oo = function (o, i, C) {
    var S,
      b = o,
      t = b;
    if (!b || !wt[typeof b]) return t;
    i = i && typeof C > 'u' ? i : jo(i, C, 3);
    for (var I = -1, l = wt[typeof b] && ko(b), f = l ? l.length : 0; ++I < f; )
      if (((S = l[I]), i(b[S], S, o) === !1)) return t;
    return t;
  },
  Ao = Oo,
  No = Kt,
  wo = Ao;
function Lo(o, i, C) {
  var S = -1,
    b = o ? o.length : 0;
  if (((i = i && typeof C > 'u' ? i : No(i, C, 3)), typeof b == 'number'))
    for (; ++S < b && i(o[S], S, o) !== !1; );
  else wo(o, i);
  return o;
}
var To = Lo,
  Xt,
  Jt;
Xt = {
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
var Bo = {
    metric: Xt,
    imperial: Jt,
    _anchors: {
      metric: { unit: 'm', ratio: 3.28084 },
      imperial: { unit: 'ft', ratio: 1 / 3.28084 }
    }
  },
  Zt,
  Dt;
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
Dt = {
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
var Fo = {
    metric: Zt,
    imperial: Dt,
    _anchors: {
      metric: { unit: 'm2', ratio: 10.7639 },
      imperial: { unit: 'ft2', ratio: 1 / 10.7639 }
    }
  },
  er,
  tr;
er = {
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
tr = {
  oz: { name: { singular: 'Ounce', plural: 'Ounces' }, to_anchor: 1 / 16 },
  lb: { name: { singular: 'Pound', plural: 'Pounds' }, to_anchor: 1 },
  t: { name: { singular: 'Ton', plural: 'Tons' }, to_anchor: 2e3 }
};
var Ro = {
    metric: er,
    imperial: tr,
    _anchors: {
      metric: { unit: 'g', ratio: 1 / 453.592 },
      imperial: { unit: 'lb', ratio: 453.592 }
    }
  },
  rr,
  ar;
rr = {
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
ar = {
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
var Qo = {
    metric: rr,
    imperial: ar,
    _anchors: {
      metric: { unit: 'l', ratio: 33.8140226 },
      imperial: { unit: 'fl-oz', ratio: 1 / 33.8140226 }
    }
  },
  or;
or = {
  ea: { name: { singular: 'Each', plural: 'Each' }, to_anchor: 1 },
  dz: { name: { singular: 'Dozen', plural: 'Dozens' }, to_anchor: 12 }
};
var zo = {
    metric: or,
    imperial: {},
    _anchors: { metric: { unit: 'ea', ratio: 1 } }
  },
  nr,
  sr;
nr = {
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
sr = {
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
var _o = {
    metric: nr,
    imperial: sr,
    _anchors: {
      metric: {
        unit: 'C',
        transform: function (o) {
          return o / (5 / 9) + 32;
        }
      },
      imperial: {
        unit: 'F',
        transform: function (o) {
          return (o - 32) * (5 / 9);
        }
      }
    }
  },
  lr,
  Lt = 365.25;
lr = {
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
    to_anchor: (60 * 60 * 24 * Lt) / 12
  },
  year: {
    name: { singular: 'Year', plural: 'Years' },
    to_anchor: 60 * 60 * 24 * Lt
  }
};
var Wo = { metric: lr, _anchors: { metric: { unit: 's', ratio: 1 } } },
  ir,
  dr;
ir = {
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
dr = {
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
var Uo = {
    bits: ir,
    bytes: dr,
    _anchors: {
      bits: { unit: 'b', ratio: 1 / 8 },
      bytes: { unit: 'B', ratio: 8 }
    }
  },
  cr;
cr = {
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
var Ho = {
    metric: cr,
    imperial: {},
    _anchors: { metric: { unit: 'ppm', ratio: 1e-6 } }
  },
  ur,
  pr;
ur = {
  'm/s': {
    name: { singular: 'Metre per second', plural: 'Metres per second' },
    to_anchor: 3.6
  },
  'km/h': {
    name: { singular: 'Kilometre per hour', plural: 'Kilometres per hour' },
    to_anchor: 1
  }
};
pr = {
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
var qo = {
    metric: ur,
    imperial: pr,
    _anchors: {
      metric: { unit: 'km/h', ratio: 1 / 1.609344 },
      imperial: { unit: 'm/h', ratio: 1.609344 }
    }
  },
  mr,
  hr;
mr = {
  'min/km': {
    name: { singular: 'Minute per kilometre', plural: 'Minutes per kilometre' },
    to_anchor: 0.06
  },
  's/m': {
    name: { singular: 'Second per metre', plural: 'Seconds per metre' },
    to_anchor: 1
  }
};
hr = {
  'min/mi': {
    name: { singular: 'Minute per mile', plural: 'Minutes per mile' },
    to_anchor: 0.0113636
  },
  's/ft': {
    name: { singular: 'Second per foot', plural: 'Seconds per foot' },
    to_anchor: 1
  }
};
var Eo = {
    metric: mr,
    imperial: hr,
    _anchors: {
      metric: { unit: 's/m', ratio: 0.3048 },
      imperial: { unit: 's/ft', ratio: 1 / 0.3048 }
    }
  },
  gr,
  br;
gr = {
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
br = {
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
var Go = {
    metric: gr,
    imperial: br,
    _anchors: {
      metric: { unit: 'kPa', ratio: 0.00014503768078 },
      imperial: { unit: 'psi', ratio: 1 / 0.00014503768078 }
    }
  },
  fr;
fr = {
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
var Yo = { metric: fr, _anchors: { metric: { unit: 'A', ratio: 1 } } },
  Ir;
Ir = {
  V: { name: { singular: 'Volt', plural: 'Volts' }, to_anchor: 1 },
  mV: {
    name: { singular: 'Millivolt', plural: 'Millivolts' },
    to_anchor: 0.001
  },
  kV: { name: { singular: 'Kilovolt', plural: 'Kilovolts' }, to_anchor: 1e3 }
};
var Vo = { metric: Ir, _anchors: { metric: { unit: 'V', ratio: 1 } } },
  xr;
xr = {
  W: { name: { singular: 'Watt', plural: 'Watts' }, to_anchor: 1 },
  mW: {
    name: { singular: 'Milliwatt', plural: 'Milliwatts' },
    to_anchor: 0.001
  },
  kW: { name: { singular: 'Kilowatt', plural: 'Kilowatts' }, to_anchor: 1e3 },
  MW: { name: { singular: 'Megawatt', plural: 'Megawatts' }, to_anchor: 1e6 },
  GW: { name: { singular: 'Gigawatt', plural: 'Gigawatts' }, to_anchor: 1e9 }
};
var $o = { metric: xr, _anchors: { metric: { unit: 'W', ratio: 1 } } },
  vr;
vr = {
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
var Ko = { metric: vr, _anchors: { metric: { unit: 'VAR', ratio: 1 } } },
  yr;
yr = {
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
var Xo = { metric: yr, _anchors: { metric: { unit: 'VA', ratio: 1 } } },
  Cr;
Cr = {
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
var Jo = { metric: Cr, _anchors: { metric: { unit: 'J', ratio: 1 } } },
  Mr;
Mr = {
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
var Zo = { metric: Mr, _anchors: { metric: { unit: 'VARh', ratio: 1 } } },
  Pr,
  Sr;
Pr = {
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
Sr = {
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
var Do = {
    metric: Pr,
    imperial: Sr,
    _anchors: {
      metric: { unit: 'l/s', ratio: 33.8140227 },
      imperial: { unit: 'fl-oz/s', ratio: 1 / 33.8140227 }
    }
  },
  jr,
  kr;
jr = { lx: { name: { singular: 'Lux', plural: 'Lux' }, to_anchor: 1 } };
kr = {
  'ft-cd': {
    name: { singular: 'Foot-candle', plural: 'Foot-candles' },
    to_anchor: 1
  }
};
var en = {
    metric: jr,
    imperial: kr,
    _anchors: {
      metric: { unit: 'lx', ratio: 1 / 10.76391 },
      imperial: { unit: 'ft-cd', ratio: 10.76391 }
    }
  },
  Or;
Or = {
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
var tn = { metric: Or, _anchors: { frequency: { unit: 'hz', ratio: 1 } } },
  Ar;
Ar = {
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
var rn = { metric: Ar, _anchors: { metric: { unit: 'deg', ratio: 1 } } },
  Nr,
  Xe = Ht,
  je = To,
  He = {
    length: Bo,
    area: Fo,
    mass: Ro,
    volume: Qo,
    each: zo,
    temperature: _o,
    time: Wo,
    digital: Uo,
    partsPer: Ho,
    speed: qo,
    pace: Eo,
    pressure: Go,
    current: Yo,
    voltage: Vo,
    power: $o,
    reactivePower: Ko,
    apparentPower: Xo,
    energy: Jo,
    reactiveEnergy: Zo,
    volumeFlowRate: Do,
    illuminance: en,
    frequency: tn,
    angle: rn
  },
  ke;
ke = function (o, i) {
  i ? (this.val = o / i) : (this.val = o);
};
ke.prototype.from = function (o) {
  if (this.destination) throw new Error('.from must be called before .to');
  return (
    (this.origin = this.getUnit(o)),
    this.origin || this.throwUnsupportedUnitError(o),
    this
  );
};
ke.prototype.to = function (o) {
  if (!this.origin) throw new Error('.to must be called after .from');
  this.destination = this.getUnit(o);
  var i, C;
  if (
    (this.destination || this.throwUnsupportedUnitError(o),
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
    (i = this.val * this.origin.unit.to_anchor),
    this.origin.unit.anchor_shift && (i -= this.origin.unit.anchor_shift),
    this.origin.system != this.destination.system &&
      ((C = He[this.origin.measure]._anchors[this.origin.system].transform),
      typeof C == 'function'
        ? (i = C(i))
        : (i *= He[this.origin.measure]._anchors[this.origin.system].ratio)),
    this.destination.unit.anchor_shift &&
      (i += this.destination.unit.anchor_shift),
    i / this.destination.unit.to_anchor
  );
};
ke.prototype.toBest = function (i) {
  if (!this.origin) throw new Error('.toBest must be called after .from');
  var i = Object.assign({ exclude: [], cutOffNumber: 1 }, i),
    C;
  return (
    je(
      this.possibilities(),
      function (S) {
        var b = this.describe(S),
          t = i.exclude.indexOf(S) === -1;
        if (t && b.system === this.origin.system) {
          var I = this.to(S);
          (!C || (I >= i.cutOffNumber && I < C.val)) &&
            (C = { val: I, unit: S, singular: b.singular, plural: b.plural });
        }
      }.bind(this)
    ),
    C
  );
};
ke.prototype.getUnit = function (o) {
  var i;
  return (
    je(He, function (C, S) {
      if (
        (je(C, function (b, t) {
          if (
            t == '_anchors' ||
            (je(b, function (I, l) {
              if (l == o)
                return (i = { abbr: o, measure: S, system: t, unit: I }), !1;
            }),
            i)
          )
            return !1;
        }),
        i)
      )
        return !1;
    }),
    i
  );
};
var wr = function (o) {
  return {
    abbr: o.abbr,
    measure: o.measure,
    system: o.system,
    singular: o.unit.name.singular,
    plural: o.unit.name.plural
  };
};
ke.prototype.describe = function (o) {
  var i = ke.prototype.getUnit(o),
    C = null;
  try {
    C = wr(i);
  } catch {
    this.throwUnsupportedUnitError(o);
  }
  return C;
};
ke.prototype.list = function (o) {
  var i = [];
  return (
    je(He, function (C, S) {
      (o && o !== S) ||
        je(C, function (b, t) {
          if (t == '_anchors') return !1;
          je(b, function (I, l) {
            i = i.concat(wr({ abbr: l, measure: S, system: t, unit: I }));
          });
        });
    }),
    i
  );
};
ke.prototype.throwUnsupportedUnitError = function (o) {
  var i = [];
  throw (
    (je(He, function (C, S) {
      je(C, function (b, t) {
        if (t == '_anchors') return !1;
        i = i.concat(Xe(b));
      });
    }),
    new Error('Unsupported unit ' + o + ', use one of: ' + i.join(', ')))
  );
};
ke.prototype.possibilities = function (o) {
  var i = [];
  return (
    !this.origin && !o
      ? je(Xe(He), function (C) {
          je(He[C], function (S, b) {
            if (b == '_anchors') return !1;
            i = i.concat(Xe(S));
          });
        })
      : ((o = o || this.origin.measure),
        je(He[o], function (C, S) {
          if (S == '_anchors') return !1;
          i = i.concat(Xe(C));
        })),
    i
  );
};
ke.prototype.measures = function () {
  return Xe(He);
};
Nr = function (o) {
  return new ke(o);
};
var an = Nr;
const Ze = Kr(an),
  De = [
    'Pre Planning',
    'Fabrication',
    'Dyeing/Printing  ',
    'Embroidery ',
    'Schiffli',
    'Additional Process',
    'Additional Services',
    'Summary'
  ];
function bn() {
  const [o, i] = a.useState(0),
    [C, S] = a.useState(new Set()),
    [b, t] = a.useState(null),
    [I, l] = a.useState(null),
    [f, s] = a.useState([]),
    { enqueueSnackbar: P } = ze(),
    { data: Q, refetch: m } = _e(),
    [M, u] = a.useState({}),
    [U, h] = a.useState({
      lookUpId: '',
      lookUpName: '',
      lookUpDomain: '',
      lookUpCategory: '',
      enabled: '',
      createdOn: new Date().toISOString()
    }),
    [k, D] = a.useState({
      fromUnit: 'm',
      toUnit: 'cm',
      inputValue: '',
      outputValue: ''
    }),
    X = (N) => {
      t(N.currentTarget);
    },
    G = (N) => {
      l(N.currentTarget);
    },
    H = () => {
      t(null),
        l(null),
        D({ fromUnit: 'm', toUnit: 'cm', inputValue: '', outputValue: '' });
    },
    V = (N) => N === 1,
    ae = (N) => C.has(N),
    B = () => {
      let N = C;
      ae(o) && ((N = new Set(N.values())), N.delete(o)), i((Z) => Z + 1), S(N);
    },
    y = () => {
      i((N) => N - 1);
    },
    q = () => {
      if (!V(o)) throw new Error("You can't skip a step that isn't optional.");
      i((N) => N + 1),
        S((N) => {
          const Z = new Set(N.values());
          return Z.add(o), Z;
        });
    },
    ee = () => {
      i(0);
    };
  a.useEffect(() => {
    (async () => {
      try {
        const Z = await Ce.get(
          'http://100.42.177.77:81/api/Common/GetLookUpDomains?appId=1'
        );
        console.log('LookupData', Z), s(Z.data.result);
      } catch (Z) {
        console.error('Error fetching design options:', Z);
      }
    })();
  }, []);
  const ue = async () => {
      if (!U.lookUpDomain || !U.lookUpName) {
        P('Please fill in all required fields.', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const N = await Ce.get(
          `http://100.42.177.77:81/api/Common/SaveLookUp?lookupDomain=${U.lookUpDomain}&LookUpName=${U.lookUpName}&appId=1`
        );
        return (
          P('Lookup saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
          h({
            lookUpId: '',
            lookUpName: '',
            lookUpDomain: '',
            lookUpCategory: '',
            enabled: '',
            createdOn: new Date().toISOString()
          }),
          m(),
          N.data
        );
      } catch (N) {
        throw (
          (P('Error saving data. Please try again.', {
            variant: 'error',
            autoHideDuration: 5e3
          }),
          N)
        );
      }
    },
    g = (N) => {
      h({ ...U, [N.target.name]: N.target.value });
    },
    E = (N) => {
      const { name: Z, value: j } = N.target;
      D((z) => {
        const F = { ...z, [Z]: j };
        return (
          (Z === 'inputValue' ? 'L2R' : 'R2L') === 'L2R'
            ? (F.outputValue = Ze(j).from(F.fromUnit).to(F.toUnit))
            : (F.inputValue = Ze(j).from(F.toUnit).to(F.fromUnit)),
          F
        );
      });
    };
  a.useEffect(() => {
    (async () => {
      try {
        const Z = await Ce.get(
          'http://100.42.177.77:81/api/Common/GetLookUpDomains?appId=1'
        );
        s(Z.data.result);
      } catch (Z) {
        console.error('Error fetching design options:', Z);
      }
    })();
  }, []);
  const Y = !!b,
    te = !!I,
    me = Y ? 'simple-popover' : void 0,
    ie = te ? 'convert-popover' : void 0;
  return e.jsxs(we, {
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
            children: e.jsx(fe, {
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
              e.jsx(be, {
                'aria-describedby': me,
                variant: 'outlined',
                size: 'small',
                onClick: X,
                sx: { marginRight: '8px' },
                children: '+Lookup'
              }),
              e.jsx(be, {
                'aria-describedby': ie,
                variant: 'outlined',
                size: 'small',
                onClick: G,
                children: 'Convertor'
              }),
              e.jsx(Mt, {
                id: ie,
                open: te,
                anchorEl: I,
                onClose: H,
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
                      children: e.jsx(c, {
                        fullWidth: !0,
                        select: !0,
                        label: 'From',
                        size: 'small',
                        name: 'fromUnit',
                        value: k.fromUnit,
                        onChange: E,
                        children: Ze()
                          .possibilities('length')
                          .map((N) => e.jsx(R, { value: N, children: N }, N))
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 6,
                      children: e.jsx(c, {
                        fullWidth: !0,
                        select: !0,
                        label: 'To',
                        size: 'small',
                        name: 'toUnit',
                        value: k.toUnit,
                        onChange: E,
                        children: Ze()
                          .possibilities('length')
                          .map((N) => e.jsx(R, { value: N, children: N }, N))
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(c, {
                        fullWidth: !0,
                        label: k.fromUnit,
                        size: 'small',
                        name: 'inputValue',
                        value: k.inputValue,
                        onChange: E,
                        type: 'number'
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(c, {
                        fullWidth: !0,
                        label: k.toUnit,
                        size: 'small',
                        name: 'outputValue',
                        value: k.outputValue,
                        onChange: E,
                        type: 'number'
                      })
                    })
                  ]
                })
              }),
              e.jsx(Mt, {
                id: 'mouse-over-popover',
                open: Y,
                anchorEl: b,
                onClose: H,
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
                      children: e.jsx(c, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Lookup',
                        size: 'small',
                        value: U.lookUpDomain,
                        name: 'lookUpDomain',
                        onChange: g,
                        children: f.map((N) =>
                          e.jsx(
                            R,
                            { value: N.lookUpDomain, children: N.lookUpDomain },
                            N.lookUpDomain
                          )
                        )
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 12,
                      children: e.jsx(c, {
                        fullWidth: !0,
                        label: 'Add Lookup Description',
                        value: U.lookUpName,
                        onChange: g,
                        name: 'lookUpName',
                        size: 'small'
                      })
                    }),
                    e.jsx(r, {
                      item: !0,
                      sm: 3,
                      textAlign: 'right',
                      children: e.jsx(be, {
                        variant: 'contained',
                        size: 'small',
                        onClick: ue,
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
      e.jsx(Xr, {
        activeStep: o,
        children: De.map((N, Z) => {
          const j = {},
            z = {};
          return (
            V(Z) && (z.optional = e.jsx(fe, { variant: 'caption' })),
            ae(Z) && (j.completed = !1),
            e.jsx(
              Jr,
              {
                ...j,
                children: e.jsxs(Zr, {
                  ...z,
                  onClick: () => i(Z),
                  style: { cursor: 'pointer' },
                  children: [' ', N]
                })
              },
              N
            )
          );
        })
      }),
      e.jsxs(we, {
        sx: { display: 'flex', flexDirection: 'row', pt: 2 },
        children: [
          e.jsx(be, {
            color: 'inherit',
            disabled: o === 0,
            onClick: y,
            sx: { mr: 1 },
            children: 'Back'
          }),
          e.jsx(we, { sx: { flex: '1 1 auto' } }),
          V(o) &&
            e.jsx(be, {
              color: 'inherit',
              onClick: q,
              sx: { mr: 1 },
              children: 'Skip'
            }),
          e.jsx(be, {
            onClick: B,
            children: o === De.length - 1 ? 'Finish' : 'Next'
          })
        ]
      }),
      o === De.length
        ? e.jsxs(a.Fragment, {
            children: [
              e.jsx(St, { setActiveStep: i }),
              e.jsxs(we, {
                sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                children: [
                  e.jsx(we, { sx: { flex: '1 1 auto' } }),
                  e.jsx(be, { onClick: ee, children: 'Reset' })
                ]
              })
            ]
          })
        : e.jsxs(a.Fragment, {
            children: [
              o === 0 && e.jsx(ua, { setInitialValues: u, initialValues: M }),
              o === 1 && e.jsx(Dr, { setInitialValues: u, initialValues: M }),
              o === 2 && e.jsx(ha, { initialValues: M }),
              o === 3 && e.jsx(da, { initialValues: M }),
              o === 4 && e.jsx(ba, { initialValues: M }),
              o === 5 && e.jsx(xa, { initialValues: M }),
              o === 6 && e.jsx(va, { initialValues: M }),
              o === 7 &&
                e.jsx(St, {
                  setActiveStep: i,
                  setInitialValues: u,
                  initialValues: M
                }),
              e.jsxs(we, {
                sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                children: [
                  e.jsx(be, {
                    color: 'inherit',
                    disabled: o === 0,
                    onClick: y,
                    sx: { mr: 1 },
                    children: 'Back'
                  }),
                  e.jsx(we, { sx: { flex: '1 1 auto' } }),
                  V(o) &&
                    e.jsx(be, {
                      color: 'inherit',
                      onClick: q,
                      sx: { mr: 1 },
                      children: 'Skip'
                    }),
                  e.jsx(be, {
                    onClick: B,
                    children: o === De.length - 1 ? 'Finish' : 'Next'
                  })
                ]
              })
            ]
          })
    ]
  });
}
export { bn as default };
