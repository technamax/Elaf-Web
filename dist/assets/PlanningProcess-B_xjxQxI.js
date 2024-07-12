import {
  j as e,
  _ as ot,
  r as st,
  i as nt,
  u as Me,
  b as Pe,
  a5 as rt,
  B as Ce,
  G as t,
  D as de,
  S as Je,
  c as Oe,
  a6 as lt,
  T as ye,
  a7 as Ne,
  a8 as Ae,
  a9 as ze,
  aa as We,
  ab as Re,
  ac as it,
  ad as He,
  C as pe,
  d as me,
  ae as we,
  af as dt,
  ag as ct,
  ah as ut,
  ai as pt,
  aj as mt,
  ak as ht,
  al as gt,
  am as bt
} from './index-C7VmP1sn.js';
import { r as s } from './vendor-BXCbSo2_.js';
import { B as ie, a as he, I as Se } from './axios-sajpI7HX.js';
import {
  d as Ze,
  c as Fe,
  A as Ke,
  e as De,
  f as $e,
  S as It,
  a as xt,
  b as ft,
  F as Ct
} from './Fabrication-UiTqKGuK.js';
import {
  R as ke,
  d as Le,
  D as Qe,
  a as Ue,
  b as qe,
  c as Ee
} from './ReuseableDataGrid-D6nBr4pK.js';
import { d as Ge } from './Close-D_kvijF0.js';
import { d as Ye } from './PersonAddAlt1Outlined-DIBwwKNd.js';
import { T as l, P as yt } from './TextField-47SmC6NA.js';
import { M as A } from './Skeleton-BTBpQPPV.js';
import { A as Te, F as _e, C as et } from './ExcelExport-DggV9N9r.js';
import './dayjs.min-DO4_1a-m.js';
let Ve = !1;
const Pt = s.forwardRef(function (_, W) {
  return (
    Ve ||
      (console.warn(
        [
          'MUI: The Autocomplete component was moved from the lab to the core.',
          '',
          "You should use `import { Autocomplete } from '@mui/material'`",
          "or `import Autocomplete from '@mui/material/Autocomplete'`"
        ].join(`
`)
      ),
      (Ve = !0)),
    e.jsx(Te, ot({ ref: W }, _))
  );
});
var Xe = {},
  vt = nt;
Object.defineProperty(Xe, '__esModule', { value: !0 });
var tt = (Xe.default = void 0),
  jt = vt(st()),
  Mt = e;
tt = Xe.default = (0, jt.default)(
  (0, Mt.jsx)('path', {
    d: 'M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11h-9v-9h9zm-4.5-1L13 16h2v-3h3v3h2z'
  }),
  'SendAndArchive'
);
const kt =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVR4nO2WzU4UQRSFe14CgoiMKPIqolEiIQq+gEFgFPHnFVyILI3GnQIbxxhG3IkaYxT8iUZFoxuDbokoIaNE/czNnE6KSjdT07Yb40kqqa6qW+dW3XNvdRT9R4MAHgD3640Dh/MkHQTOqMWIv9PGydOBUeCsWoz4O208PwdcxCz1xoGBKG8Abc5JPwBrataP0fY3iLcCk8C6SF4DV4HzatZf1Ny6vrfkRd4PrABV4BywE9huKpc2rA0ARaATGAe+yebgn5IfB34BD0XQCzwlHU+AA1r7CPgJlLKS94n8GtAM3CIcFaAJKGuPviwxX9XJjfxlCtGMyJLwQrbzwNeGNEFNRFVdZdrJb2ttAbizyU10SBNXQslbgR8SnMXcxagEOGyxdmxs3ZDmxjybHmWKZUdriAOnZWhqf+ZtVgyw3+HZPAZ2qX8yxIGbwCudxsdwgH3JszERtqtOVEIc+ARMKbc3xNy79r1a+xHodsYtDec8W6sl01YxQxxYVfzdWM4krDPiGEveXMHLjhMqUGshDlQTHLDNCg06MJvgwJcQB96lhMBSrddZ1y0nloDdXkbc9WwPKQSLIQ7M6rGxGuBjKMB+JEGE24A3tnfUgIo7E+p+1jTsUn8wxIEWFaJxKdrFmBwrJRSiEc2d8mz2AxPas6WuAwbgkspncZNaPyexWbuXsuaGbuQ7cDEKBbVHZEVParMeliRUPLW7eK4XcUF7NQU7YAD26NrKciLtJtJObuTXtce+KAuAI9pgXq9aj0SVhgXFvEN9y4Cjmci9kvtZmpjQw9KuOhH/kvUr1bq0xmK+bLZRHqB2nZd1Gyinp5yfUuu/1ZyRX7CfmlzIXUgLx6SH93o3ltUv6z8hf+LoX8ZvSFCuNiG5hzcAAAAASUVORK5CYII=',
  St = ({
    initialFormData: d,
    setAdditionalProcessData: _,
    refetchDyeingPrintingData: W,
    handleClickOpen: r
  }) => {
    const { user: a } = Me(),
      [p, i] = s.useState([]),
      u = p.reduce((C, f) => C + (f.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', u);
    const [o, k] = s.useState({
      dpIdDet: 0,
      dpId: d.dpId || 0,
      designId: d.designId || '',
      batchNo: d.batchNo || '',
      planningHeaderId: d.planningHeaderId || 0,
      fabricId: d.fabricId || '',
      colorId: d.colorId || '',
      colorName: d.colorName || '',
      vendorId: '',
      processType: d.processType || '',
      availableQty: d.availableQty || '',
      remainingQty: d.availableQty - u || '',
      shrinkage: '',
      wastage: '',
      uomId: d.uomId || '',
      uom: d.uom || '',
      poPcs: d.poPcs || '',
      assignedQty: '',
      rate: '',
      unitRatePerPo: 0,
      totalExcGst: 0,
      gst: '',
      TotalIncludingGst: '',
      createdOn: new Date().toISOString(),
      createdBy: a.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: a.empId
    });
    s.useEffect(() => {
      k({ ...o, remainingQty: d.availableQty - u || '' });
    }, [p]);
    const { data: R } = Pe(),
      { data: c, refetch: F } = rt(o.dpId, { skip: !o.dpId }),
      [O, G] = s.useState([]);
    s.useEffect(() => {
      if (R) {
        const C = R.result[0];
        G(C.vendorList);
      }
    }, [R]),
      s.useEffect(() => {
        c && i(c.result.map((C, f) => ({ id: f, ...C })));
      }, [c, F]),
      console.log('initialRows', p);
    const y = (C) => {
      const { name: f, value: I } = C.target;
      k({ ...o, [f]: I });
    };
    s.useEffect(() => {
      const C = () => {
          const te = parseFloat(o.availableQty) || 0,
            re = parseFloat(o.shrinkage) || 0,
            ge = parseFloat(o.wastage) || 0;
          return ((te * (100 - (re + ge))) / 100).toFixed(2);
        },
        f = () => {
          const te = parseFloat(o.assignedQty) || 0,
            re = parseFloat(o.rate) || 0;
          return (te * re).toFixed(2);
        },
        I = (te, re) => (te * (1 + re / 100)).toFixed(2),
        B = C(),
        H = f(),
        x = parseFloat(o.gst) || 0,
        M = I(H, x),
        E = parseFloat(o.poPcs) || 0,
        oe = E ? M / E : 0;
      k((te) => ({
        ...te,
        outputQty: B,
        totalExcGst: H,
        TotalIncludingGst: M,
        unitRatePerPo: oe.toFixed(2)
      }));
    }, [
      o.availableQty,
      o.shrinkage,
      o.wastage,
      o.rate,
      o.gst,
      o.poPcs,
      o.unitRatePerPo
    ]),
      console.log('formData', o);
    const q = async () => {
        console.log(o);
        try {
          const C = await he.post(
            'https://gecxc.com:4041/api/DyeingPrinting/SaveDyeingPrintingDetails',
            o
          );
          console.log('Save response:', C.data),
            k((f) => ({
              ...f,
              dpIdDet: 0,
              vendorId: '',
              availableQty: d.availableQty || '',
              shrinkage: '',
              wastage: '',
              assignedQty: '',
              rate: '',
              unitRatePerPo: 0,
              totalExcGst: 0,
              gst: '',
              TotalIncludingGst: '',
              createdOn: new Date().toISOString(),
              createdBy: a.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: a.empId
            })),
            F(),
            W();
        } catch (C) {
          console.error('Error saving data:', C);
        }
      },
      K = [
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        { field: 'assignedQty', headerName: 'Assigned Quantity', flex: 1 },
        { field: 'rate', headerName: 'Rate', flex: 1 },
        { field: 'totalExcGst', headerName: 'Total Excl Gst.', flex: 1 },
        { field: 'gst', headerName: 'Gst.', flex: 1 },
        {
          field: 'totalIncludingGst',
          headerName: 'TotalIncludingGst',
          flex: 1
        },
        { field: 'unitRatePerPo', headerName: 'unitRatePerPo.', flex: 1 }
      ];
    return e.jsxs(Ce, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Fabric',
                  name: 'fabricName',
                  value: o.fabricName,
                  onChange: y,
                  size: 'small',
                  disabled: !0
                }),
                ' '
              ]
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Process Type',
                name: 'processType',
                value: o.processType,
                onChange: y,
                size: 'small',
                disabled: !0
              })
            }),
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Color',
                  name: 'colorName',
                  value: o.colorName,
                  onChange: y,
                  size: 'small',
                  disabled: !0
                }),
                ' '
              ]
            }),
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'UOM',
                  name: 'uom',
                  value: o.uom,
                  onChange: y,
                  size: 'small',
                  disabled: !0
                }),
                ' '
              ]
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'PO Pcs',
                size: 'small',
                name: 'poPcs',
                value: o.poPcs,
                onChange: y,
                disabled: !0
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Total AvailableQty',
                fullWidth: !0,
                size: 'small',
                name: 'availableQty',
                value: o.availableQty,
                onChange: y,
                disabled: !0
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Remaining Qty',
                fullWidth: !0,
                size: 'small',
                name: 'remainingQty',
                value: o.remainingQty,
                onChange: y,
                disabled: !0
              })
            })
          ]
        }),
        e.jsx(de, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: o.vendorId,
                onChange: y,
                children: O.map((C) =>
                  e.jsx(
                    A,
                    { value: C.lookUpId, children: C.lookUpName },
                    C.lookUpId
                  )
                )
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Assign Quantity',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'assignedQty',
                value: o.assignedQty,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Rate Per uom',
                type: 'number',
                fullWidth: !0,
                size: 'small',
                name: 'rate',
                value: o.rate,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Shrinkage',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'shrinkage',
                value: o.shrinkage,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Wastage',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'wastage',
                value: o.wastage,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Output Qty',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'outputQty',
                value: o.outputQty,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Total Excl. Gst',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'totalExcGst',
                value: o.totalExcGst,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'GST',
                fullWidth: !0,
                size: 'small',
                name: 'gst',
                value: o.gst,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Total Including Gst',
                fullWidth: !0,
                size: 'small',
                name: 'TotalIncludingGst',
                value: o.TotalIncludingGst,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'UnitRate Per PO.',
                fullWidth: !0,
                size: 'small',
                name: 'unitRatePerPo',
                value: o.unitRatePerPo,
                onChange: y
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(ie, {
                variant: 'contained',
                size: 'small',
                onClick: q,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(t, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsx(t, {
            sx: { marginTop: 2 },
            item: !0,
            xs: 12,
            children: e.jsx(ke, {
              iColumns: K,
              initialRows: p,
              deleteApi:
                'https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingDetailByDetId?dpIdDet=',
              deleteBy: 'dpIdDet',
              refetch: F,
              disableEdit: !0
            })
          })
        })
      ]
    });
  },
  Ot = ({
    initialFormData: d,
    setAdditionalProcessData: _,
    refetchDyeingPrintingData: W,
    handleClickOpen: r
  }) => {
    const a = Je(),
      { enqueueSnackbar: p } = Oe(),
      { user: i } = Me(),
      [u, o] = s.useState([]),
      k = u.reduce((v, z) => v + (z.assignedQty ?? 0), 0).toFixed(2);
    console.log('Quantity', k);
    const R = u.reduce((v, z) => v + (z.requiredPcs ?? 0), 0).toFixed(2);
    console.log('totalRepeats', R);
    const [c, F] = s.useState({
        embroideryIdDet: 0,
        embroideryId: d.embroideryId || 0,
        designId: d.designId || '',
        batchNo: d.batchNo || '',
        planningHeaderId: d.planningHeaderId || 0,
        componentId: d.componentId || '',
        componentName: d.componentName || '',
        fabricId: d.fabricId || '',
        fabricName: d.fabricName || '',
        vendorId: '',
        colorId: d.colorId || '',
        colourName: d.colourName || '',
        availableQty: d.availableQty || '',
        assignedQty: '',
        remainingQty: (d.availableQty - k).toFixed(2) || 0,
        noOfHead: d.noOfHead || '',
        noOfHeadsName: d.noOfHeadsName || '',
        repeats: d.repeats || '',
        assignedRepeats: '',
        remainingRepeats: d.repeats - R || '',
        cuttingSize: d.cuttingSize || '',
        itemsPerRepeat: d.itemsPerRepeat || '',
        poPcs: d.poPcs || '',
        totalPcs: d.totalPcs || '',
        remainingPcs: (d.totalPcs - R).toFixed(2) || 0,
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
        createdBy: i.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: i.empId
      }),
      O = ['Boring', 'Pooni', 'Laser', 'Doori', 'Dissolving'];
    function G(v, z, Z) {
      return {
        fontWeight:
          z.indexOf(v) === -1
            ? Z.typography.fontWeightRegular
            : Z.typography.fontWeightMedium
      };
    }
    s.useEffect(() => {
      F({
        ...c,
        remainingQty: d.availableQty - k || 0,
        remainingPcs: d.totalPcs - R || 0
      });
    }, [u]);
    const { data: y } = Pe(),
      { data: q, refetch: K } = lt(c.embroideryId, { skip: !c.embroideryId }),
      [J, C] = s.useState([]);
    s.useEffect(() => {
      if (y) {
        const v = y.result[0];
        C(v.vendorList);
      }
    }, [y]),
      s.useEffect(() => {
        q && o(q.result.map((v, z) => ({ id: z, ...v })));
      }, [q, K]),
      console.log('initialRows', u);
    const f = (v) => {
        const { name: z, value: Z } = v.target;
        F({ ...c, [z]: Z });
      },
      I = (v) => {
        const { name: z, checked: Z } = v.target;
        F((ce) => ({ ...ce, [z]: Z }));
      };
    console.log('formData', c);
    const [B, H] = s.useState(null),
      [x, M] = s.useState(c);
    s.useEffect(() => {
      const v = setTimeout(() => {
        M(c);
      }, 50);
      return () => {
        clearTimeout(v);
      };
    }, [c]),
      s.useEffect(() => {
        const v = () => {
            const V = parseFloat(x.repeats) || 0,
              Y = parseFloat(x.itemsPerRepeat) || 0;
            return (V * Y).toFixed(2);
          },
          z = () => {
            const V = parseFloat(x.threadStiches) || 0,
              Y = parseFloat(x.threadRate) || 0,
              L = parseFloat(x.noOfHead) || 0,
              N = parseFloat(x.repeats) || 0;
            return ((V / 1e3) * (Y * N * L)).toFixed(2);
          },
          Z = () => {
            const V = parseFloat(x.tillaStiches) || 0,
              Y = parseFloat(x.tilaRate) || 0,
              L = parseFloat(x.noOfHead) || 0,
              N = parseFloat(x.repeats) || 0;
            return ((V / 1e3) * (Y * N * L)).toFixed(2);
          },
          ce = () => {
            const V = parseFloat(x.sequence) || 0,
              Y = parseFloat(x.sequenceRate) || 0,
              L = parseFloat(x.noOfHead) || 0,
              N = parseFloat(x.repeats) || 0;
            return ((V / 1e3) * (Y * N * L)).toFixed(2);
          },
          ue = () => {
            const V = parseFloat(x.repeats) || 0,
              Y = parseFloat(x.noOfHead) || 0,
              L = parseFloat(x.solvingLayers) || 0;
            return (((V * Y * 13) / 39.37) * L).toFixed(2);
          },
          be = () => {
            const V = parseFloat(x.solvingInMeters) || 0,
              Y = parseFloat(x.solvingRate) || 0;
            return (V * Y).toFixed(2);
          },
          ee = () => {
            const V = parseFloat(x.threadAmount) || 0,
              Y = parseFloat(x.tilaAmount) || 0,
              L = parseFloat(x.sequenceAmount) || 0,
              N = parseFloat(x.solvingAmount) || 0;
            return V + Y + L + N;
          },
          ae = () => {
            const V = parseFloat(x.totalAmount) || 0,
              Y = parseFloat(x.totalPcs) || 0;
            return V / Y;
          };
        F((V) => ({
          ...V,
          totalPcs: v(),
          threadAmount: z(),
          tilaAmount: Z(),
          sequenceAmount: ce(),
          solvingInMeters: ue(),
          solvingAmount: be(),
          totalAmount: ee(),
          costPerComponent: ae()
        }));
      }, [
        x.threadAmount,
        x.totalAmount,
        x.sequenceAmount,
        x.solvingAmount,
        x.repeats,
        x.tilaAmount,
        x.itemsPerRepeat,
        x.threadRate,
        x.threadStiches,
        x.noOfHead,
        x.tilaRate,
        x.tillaStiches,
        x.sequenceRate,
        x.sequence,
        x.solvingLayers,
        x.solvingInMeters,
        x.solvingRate
      ]),
      s.useEffect(() => {
        if (B === 'assignedQty') {
          const v = () => {
            const z = parseFloat(x.assignedQty) || 0,
              Z = parseFloat(x.availableQty) || 0,
              ce = parseFloat(x.totalPcs) || 0;
            return Math.round(z * (ce / Z));
          };
          F((z) => ({ ...z, requiredPcs: v() }));
        } else if (B === 'requiredPcs') {
          const v = () => {
            const z = parseFloat(x.requiredPcs) || 0,
              Z = parseFloat(x.availableQty) || 0,
              ce = parseFloat(x.totalPcs) || 0;
            return Math.round((z * Z) / ce);
          };
          F((z) => ({ ...z, assignedQty: v() }));
        }
      }, [x.assignedQty, x.requiredPcs, B]);
    const E = (v) => {
        const z = v.target.value;
        H('assignedQty'), F((Z) => ({ ...Z, assignedQty: z }));
      },
      oe = (v) => {
        const z = v.target.value;
        H('requiredPcs'), F((Z) => ({ ...Z, requiredPcs: z }));
      },
      te = async () => {
        if ((console.log(c), c.totalAmount === 0 && c.costPerComponent === 0)) {
          p('Please Thread, Tilla or Sequnce values ', {
            variant: 'error',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const v = await he.post(
            'https://gecxc.com:4041/api/Embroidery/SaveEmbroideryDetails',
            { ...c, additional: c.additional.join(', ') }
          );
          console.log('Save response:', v.data),
            F((z) => ({
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
              costPerComponent: 0,
              createdOn: new Date().toISOString(),
              createdBy: i.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: i.empId
            })),
            K(),
            W(),
            setAccordionExpanded(!1);
        } catch (v) {
          console.error('Error saving data:', v);
        }
      },
      re = [
        { field: 'vendorName', headerName: 'Vendor' },
        { field: 'assignedQty', headerName: 'Assigned Quantity' },
        { field: 'requiredPcs', headerName: 'Required Pcs' },
        { field: 'additional', headerName: 'ThreadAdditional' },
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
        { field: 'totalPcs', headerName: 'Total Pcs' },
        { field: 'totalAmount', headerName: 'Total Amount' },
        { field: 'costPerComponent', headerName: 'Cost Per Component' }
      ];
    return e.jsxs(Ce, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Fabric',
                  name: 'fabricName',
                  value: c.fabricName,
                  onChange: f,
                  size: 'small',
                  disabled: !0,
                  sx: (v) => ({
                    ...(c.fabricName !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Component',
                name: 'componentName',
                value: c.componentName,
                onChange: f,
                size: 'small',
                disabled: !0,
                sx: (v) => ({
                  ...(c.componentName !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Color',
                  name: 'colourName',
                  value: c.colourName,
                  onChange: f,
                  size: 'small',
                  disabled: !0,
                  sx: (v) => ({
                    ...(c.colourName !== '' && {
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
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'PO Pcs',
                  name: 'poPcs',
                  value: c.poPcs,
                  onChange: f,
                  size: 'small',
                  disabled: !0,
                  sx: (v) => ({
                    ...(c.poPcs !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'noOfHead',
                size: 'small',
                name: 'noOfHeadsName',
                value: c.noOfHeadsName,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.noOfHeadsName !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Cutting Size',
                size: 'small',
                name: 'cuttingSize',
                value: c.cuttingSize,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.cuttingSize !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Items Per Repeat',
                size: 'small',
                name: 'itemsPerRepeat',
                value: c.itemsPerRepeat,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.itemsPerRepeat !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Total AvailableQty',
                fullWidth: !0,
                size: 'small',
                name: 'availableQty',
                value: c.availableQty,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.availableQty !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Remaining Qty',
                fullWidth: !0,
                size: 'small',
                name: 'remainingQty',
                value: c.remainingQty,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.remainingQty !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Repeats',
                fullWidth: !0,
                size: 'small',
                name: 'repeats',
                value: c.repeats,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.repeats !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Total Pcs',
                fullWidth: !0,
                size: 'small',
                name: 'totalPcs',
                value: c.totalPcs,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.totalPcs !== '' && {
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
                    { borderColor: 'gray' },
                  '& .MuiInputLabel-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.87)'
                  }
                }),
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'remainingPcs',
                fullWidth: !0,
                size: 'small',
                name: 'remainingPcs',
                value: c.remainingPcs,
                onChange: f,
                disabled: !0,
                sx: (v) => ({
                  ...(c.remainingPcs !== '' && {
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
        e.jsx(de, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: c.vendorId,
                onChange: f,
                disabled: !c.remainingPcs && !c.remainingQty,
                InputLabelProps: { sx: { color: 'black' } },
                children: J.map((v) =>
                  e.jsx(
                    A,
                    { value: v.lookUpId, children: v.lookUpName },
                    v.lookUpId
                  )
                )
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Assigned Qty',
                fullWidth: !0,
                size: 'small',
                type: 'number',
                name: 'assignedQty',
                value: c.assignedQty,
                onChange: E,
                disabled: !c.remainingPcs && !c.remainingQty,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Required Pcs',
                fullWidth: !0,
                disabled: !c.remainingPcs && !c.remainingQty,
                size: 'small',
                type: 'number',
                name: 'requiredPcs',
                value: c.requiredPcs,
                onChange: oe,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Total Amount',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                disabled: !c.remainingPcs && !c.remainingQty,
                name: 'totalAmount',
                value: c.totalAmount,
                onChange: f,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Cost Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'costPerComponent',
                value: c.costPerComponent,
                onChange: f,
                disabled: !c.remainingPcs && !c.remainingQty,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 4.5,
              children: e.jsx(l, {
                select: !0,
                label: 'Additional',
                value: c.additional,
                name: 'additional',
                size: 'small',
                onChange: f,
                fullWidth: !0,
                disabled: !c.remainingPcs && !c.remainingQty,
                InputLabelProps: { sx: { color: 'black' } },
                SelectProps: { multiple: !0 },
                children: O.map((v) =>
                  e.jsx(
                    A,
                    { value: v, style: G(v, c.additional, a), children: v },
                    v
                  )
                )
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(_e, {
                control: e.jsx(et, {
                  checked: c.isSolving,
                  onChange: I,
                  disabled: !c.remainingPcs && !c.remainingQty,
                  name: 'isSolving'
                }),
                label: 'isSolving'
              })
            }),
            e.jsx(t, { item: !0, xs: 12, md: 6 }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 6,
              children: e.jsxs(t, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                children: [
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 12,
                    children: e.jsx(ye, {
                      variant: 'h5',
                      gutterBottom: !0,
                      children: 'Thread'
                    })
                  }),
                  ' ',
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Stitches',
                      fullWidth: !0,
                      size: 'small',
                      type: 'number',
                      name: 'threadStiches',
                      value: c.threadStiches,
                      onChange: f,
                      required: !0,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Rate',
                      type: 'number',
                      fullWidth: !0,
                      size: 'small',
                      name: 'threadRate',
                      value: c.threadRate,
                      onChange: f,
                      required: !0,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Amount',
                      fullWidth: !0,
                      size: 'small',
                      type: 'number',
                      name: 'threadAmount',
                      value: c.threadAmount,
                      onChange: f,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  })
                ]
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 6,
              children: e.jsxs(t, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                children: [
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 12,
                    children: e.jsx(ye, {
                      variant: 'h5',
                      gutterBottom: !0,
                      children: 'Tilla'
                    })
                  }),
                  ' ',
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Stitches',
                      fullWidth: !0,
                      size: 'small',
                      type: 'number',
                      name: 'tillaStiches',
                      value: c.tillaStiches,
                      onChange: f,
                      required: !0,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Rate',
                      fullWidth: !0,
                      size: 'small',
                      type: 'number',
                      name: 'tilaRate',
                      value: c.tilaRate,
                      onChange: f,
                      required: !0,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    children: e.jsx(l, {
                      label: 'Amount',
                      fullWidth: !0,
                      size: 'small',
                      name: 'tilaAmount',
                      value: c.tilaAmount,
                      onChange: f,
                      disabled: !c.remainingPcs && !c.remainingQty,
                      InputLabelProps: { sx: { color: 'black' } }
                    })
                  })
                ]
              })
            }),
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 6,
              children: [
                e.jsxs(t, {
                  container: !0,
                  spacing: 1,
                  width: 'Inherit',
                  children: [
                    e.jsx(t, {
                      item: !0,
                      xs: 12,
                      md: 12,
                      children: e.jsx(ye, {
                        variant: 'h5',
                        gutterBottom: !0,
                        children: 'Sequence'
                      })
                    }),
                    ' ',
                    e.jsx(t, {
                      item: !0,
                      xs: 12,
                      md: 4,
                      children: e.jsx(l, {
                        label: 'Sequence',
                        fullWidth: !0,
                        size: 'small',
                        name: 'sequence',
                        type: 'number',
                        value: c.sequence,
                        onChange: f,
                        disabled: !c.remainingPcs && !c.remainingQty,
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } }
                      })
                    }),
                    e.jsx(t, {
                      item: !0,
                      xs: 12,
                      md: 4,
                      children: e.jsx(l, {
                        label: 'Rate',
                        fullWidth: !0,
                        type: 'number',
                        size: 'small',
                        name: 'sequenceRate',
                        value: c.sequenceRate,
                        onChange: f,
                        required: !0,
                        disabled: !c.remainingPcs && !c.remainingQty,
                        InputLabelProps: { sx: { color: 'black' } }
                      })
                    }),
                    e.jsx(t, {
                      item: !0,
                      xs: 12,
                      md: 4,
                      children: e.jsx(l, {
                        label: 'Amount',
                        fullWidth: !0,
                        size: 'small',
                        name: 'sequenceAmount',
                        value: c.sequenceAmount,
                        onChange: f,
                        disabled: !c.remainingPcs && !c.remainingQty,
                        InputLabelProps: { sx: { color: 'black' } }
                      })
                    })
                  ]
                }),
                ' '
              ]
            }),
            c.isSolving
              ? e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsxs(t, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    children: [
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        children: e.jsx(ye, {
                          variant: 'h5',
                          gutterBottom: !0,
                          children: 'Solving'
                        })
                      }),
                      ' ',
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          label: 'Layers',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'solvingLayers',
                          value: c.solvingLayers,
                          onChange: f,
                          disabled: !c.remainingPcs && !c.remainingQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          label: 'Meters',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'solvingInMeters',
                          value: c.solvingInMeters,
                          disabled: !c.remainingPcs && !c.remainingQty,
                          onChange: f,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          label: 'Rate',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'solvingRate',
                          value: c.solvingRate,
                          onChange: f,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          label: 'Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'solvingAmount',
                          value: c.solvingAmount,
                          disabled: !c.remainingPcs && !c.remainingQty,
                          onChange: f,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      })
                    ]
                  })
                })
              : null,
            e.jsx(t, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(ie, {
                variant: 'contained',
                size: 'small',
                onClick: te,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(de, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx(t, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsx(t, {
            sx: { marginTop: 2 },
            item: !0,
            xs: 12,
            children: e.jsx(ke, {
              iColumns: re,
              initialRows: u,
              deleteApi:
                'https://gecxc.com:4041/api/Embroidery/DeleteEmbroideryDetailsByDetId?embroideryDetId=',
              deleteBy: 'embroideryIdDet',
              refetch: K,
              disableEdit: !0
            })
          })
        })
      ]
    });
  },
  Nt = () => {
    Je();
    const { user: d } = Me(),
      [_, W] = s.useState(!0),
      { enqueueSnackbar: r } = Oe(),
      [a, p] = s.useState([]),
      [i, u] = s.useState(!1),
      [o, k] = s.useState({
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
        costPerComponent: '',
        createdBy: d.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    s.useEffect(() => {
      k({
        embroideryId: (a == null ? void 0 : a.embroideryId) || 0,
        designId: (a == null ? void 0 : a.designId) || '',
        batchNo: (a == null ? void 0 : a.batchNo) || '',
        planningHeaderId: (a == null ? void 0 : a.planningHeaderId) || '',
        componentId: (a == null ? void 0 : a.componentId) || '',
        fabricId: (a == null ? void 0 : a.fabricId) || '',
        vendorId: (a == null ? void 0 : a.vendorId) || '',
        poPcs: (a == null ? void 0 : a.poPcs) || '',
        baseColorId: (a == null ? void 0 : a.baseColorId) || '',
        baseColorName: (a == null ? void 0 : a.baseColorName) || '',
        colorId: (a == null ? void 0 : a.colorId) || '',
        availableQty: (a == null ? void 0 : a.availableQty) || '',
        noOfHead: (a == null ? void 0 : a.noOfHead) || '',
        repeats: (a == null ? void 0 : a.repeats) || '',
        cuttingSize: (a == null ? void 0 : a.cuttingSize) || '',
        itemsPerRepeat: (a == null ? void 0 : a.itemsPerRepeat) || '',
        totalPcs: (a == null ? void 0 : a.totalPcs) || '',
        totalAmount: (a == null ? void 0 : a.totalAmount) || '',
        threadStiches: (a == null ? void 0 : a.threadStiches) || '',
        threadRate: (a == null ? void 0 : a.threadRate) || '',
        threadAmount: (a == null ? void 0 : a.threadAmount) || '',
        tillaStiches: (a == null ? void 0 : a.tillaStiches) || '',
        tilaRate: (a == null ? void 0 : a.tilaRate) || '',
        tilaAmount: (a == null ? void 0 : a.tilaAmount) || '',
        sequence: (a == null ? void 0 : a.sequence) || '',
        sequenceRate: (a == null ? void 0 : a.sequenceRate) || '',
        sequenceAmount: (a == null ? void 0 : a.sequenceAmount) || '',
        isSolving: (a == null ? void 0 : a.isSolving) || !1,
        solvingLayers: (a == null ? void 0 : a.solvingLayers) || 0,
        solvingInMeters: (a == null ? void 0 : a.solvingInMeters) || '',
        solvingRate: (a == null ? void 0 : a.solvingRate) || 0,
        solvingAmount: (a == null ? void 0 : a.solvingAmount) || '',
        threadAdditional: (a == null ? void 0 : a.threadAdditional) || [],
        costPerComponent: (a == null ? void 0 : a.costPerComponent) || '',
        createdOn:
          (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
        createdBy: (a == null ? void 0 : a.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [a]);
    const { data: R } = Ne(),
      [c, F] = s.useState(''),
      { data: O } = Pe(),
      { data: G, refetch: y } = Ae(c, { skip: !c }),
      { data: q, refetch: K } = ze(o.designId, { skip: !o.designId }),
      { data: J } = We(
        { batchNo: o.planningHeaderId, componentId: o.componentId },
        { skip: !o.planningHeaderId || !o.componentId }
      ),
      { data: C } = Re(
        {
          batchNo: o.planningHeaderId,
          componentId: o.componentId,
          fabricId: o.fabricId
        },
        { skip: !o.planningHeaderId || !o.componentId || !o.fabricId }
      ),
      { data: f, refetch: I } = it(o.planningHeaderId, {
        skip: !o.planningHeaderId
      }),
      { data: B } = He(o.planningHeaderId, { skip: !o.planningHeaderId });
    console.log('formData.planningHeaderId', o.planningHeaderId),
      console.log('collectionData', R);
    const [H, x] = s.useState(!1),
      [M, E] = s.useState([]),
      [oe, te] = s.useState([]),
      [re, ge] = s.useState([]),
      [v, z] = s.useState([]),
      [Z, ce] = s.useState([]),
      [ue, be] = s.useState([]),
      [ee, ae] = s.useState([]),
      [V, Y] = s.useState([]);
    console.log('batchList', oe),
      console.log('formData', o),
      s.useEffect(() => {
        G && E(G.result);
      }, [G]),
      s.useEffect(() => {
        q && te(q.result);
      }, [q]),
      s.useEffect(() => {
        J && ge(J.result);
      }, [J]),
      s.useEffect(() => {
        C && be(J.result);
      }, [C]),
      s.useEffect(() => {
        B && Y(B.result);
      }, [B]),
      s.useEffect(() => {
        f && (W(!1), ae(f.result.map((b, m) => ({ id: m, ...b }))));
      }, [f, I]),
      console.log('embroideryList', f),
      console.log('initialRows', ee),
      s.useEffect(() => {
        if (O) {
          const b = O.result[0];
          z(b.vendorList), ce(b.noOfHeadsList);
        }
      }, [O]);
    const L = (R == null ? void 0 : R.result) || [];
    s.useEffect(() => {
      const b = () => {
        const w = parseFloat(o.repeats) || 0,
          le = parseFloat(o.itemsPerRepeat) || 0;
        return (w * le).toFixed(2);
      };
      k((w) => ({ ...w, totalPcs: b() }));
      const m = () => {
        const w = parseFloat(o.threadStiches) || 0,
          le = parseFloat(o.threadRate) || 0,
          fe = parseFloat(o.noOfHead) || 0,
          je = parseFloat(o.repeats) || 0;
        return ((w / 1e3) * (le * je * fe)).toFixed(2);
      };
      k((w) => ({ ...w, threadAmount: m() }));
      const P = () => {
        const w = parseFloat(o.tillaStiches) || 0,
          le = parseFloat(o.tilaRate) || 0,
          fe = parseFloat(o.noOfHead) || 0,
          je = parseFloat(o.repeats) || 0;
        return ((w / 1e3) * (le * je * fe)).toFixed(2);
      };
      k((w) => ({ ...w, tilaAmount: P() }));
      const n = () => {
        const w = parseFloat(o.sequence) || 0,
          le = parseFloat(o.sequenceRate) || 0,
          fe = parseFloat(o.noOfHead) || 0,
          je = parseFloat(o.repeats) || 0;
        return ((w / 1e3) * (le * je * fe)).toFixed(2);
      };
      k((w) => ({ ...w, sequenceAmount: n() }));
      const g = () => {
        const w = parseFloat(o.repeats) || 0,
          le = parseFloat(o.noOfHead) || 0,
          fe = parseFloat(o.solvingLayers) || 0;
        return (((w * le * 13) / 39.37) * fe).toFixed(2);
      };
      k((w) => ({ ...w, solvingInMeters: g() }));
      const T = () => {
        const w = parseFloat(o.solvingInMeters) || 0,
          le = parseFloat(o.solvingRate) || 0;
        return parseFloat(o.solvingLayers), (w * le).toFixed(2);
      };
      k((w) => ({ ...w, solvingAmount: T() }));
      const X = () => {
        const w = parseFloat(o.threadAmount) || 0,
          le = parseFloat(o.tilaAmount) || 0,
          fe = parseFloat(o.sequenceAmount) || 0,
          je = parseFloat(o.solvingAmount) || 0;
        return (w + le + fe + je).toFixed(2);
      };
      k((w) => ({ ...w, totalAmount: X() || 0 }));
      const $ = () => {
        const w = parseFloat(o.totalAmount) || 0,
          le = parseFloat(o.totalPcs) || 0;
        return (w / le).toFixed(2);
      };
      k((w) => ({ ...w, costPerComponent: $() || 0 }));
    }, [
      o.threadAmount,
      o.totalAmount,
      o.sequenceAmount,
      o.solvingAmount,
      o.repeats,
      o.tilaAmount,
      o.itemsPerRepeat,
      o.threadRate,
      o.threadStiches,
      o.noOfHead,
      o.tilaRate,
      o.tillaStiches,
      o.sequenceRate,
      o.sequence,
      o.solvingLayers,
      o.solvingInMeters,
      o.solvingRate
    ]);
    const N = (b) => {
        const { name: m, value: P } = b.target;
        if (m === 'collectionId')
          L.find((n) => n.collectionId === parseInt(P)),
            F(P),
            u(!0),
            ae([]),
            W(!0),
            k({
              ...o,
              collectionId: P,
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
              costPerComponent: ''
            });
        else if (m === 'designId') {
          const n = M.find((g) => g.designId === parseInt(P));
          ae([]),
            W(!0),
            k({
              ...o,
              designId: P,
              baseColorId: n ? n.colorId : '',
              baseColorName: n ? n.colorName : '',
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
              threadAdditional: [],
              costPerComponent: ''
            });
        } else if (m === 'colorId') {
          const n = ue.find((g) => g.colorId === P);
          k({
            ...o,
            colorId: P,
            availableQty: n ? n.total : '',
            cuttingSize: n ? n.cuttingSize : '',
            repeats: n ? n.repeats : '',
            noOfHead: n ? n.noOfHeads : ''
          });
        } else if (m === 'batchNo') {
          const n = oe.find((g) => g.batchNo === P);
          k({
            ...o,
            batchNo: P,
            planningHeaderId: n ? n.planningHeaderId : '',
            poPcs: n ? n.poPcs : '',
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
            threadAdditional: [],
            costPerComponent: ''
          }),
            x(!0),
            u(!1);
        } else k({ ...o, [m]: P }), Ie((n) => ({ ...n, [m]: '' }));
      },
      [se, Ie] = s.useState({}),
      ne = async () => {
        try {
          const b = await he.post(
            'https://gecxc.com:4041/api/Embroidery/SaveEmbroidery',
            { ...o, threadAdditional: o.threadAdditional.join(', ') }
          );
          console.log('Save response:', b.data),
            b.data.success
              ? r('Fabrication saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (r(`${b.data.message}!`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', b.data.message)),
            k((m) => ({
              embroideryId: 0,
              designId: m.designId,
              batchNo: m.batchNo,
              planningHeaderId: m.planningHeaderId,
              componentId: '',
              fabricId: '',
              vendorId: '',
              poPcs: m.poPcs,
              baseColorId: m.baseColorId,
              baseColorName: m.baseColorName,
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
              costPerComponent: '',
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId
            })),
            I();
        } catch (b) {
          console.error('Error saving data:', b),
            r('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('initialRows', ee);
    const [Q, U] = s.useState({}),
      [xe, ve] = s.useState(!1),
      j = (b) => {
        U(b), ve(!0);
      },
      S = () => {
        ve(!1), U({}), refetchDyeingPrintingData();
      },
      D = [
        { field: 'designNo', headerName: 'Design' },
        { field: 'batchNo', headerName: 'Batch No.' },
        { field: 'componentName', headerName: 'Component ' },
        { field: 'fabricName', headerName: 'Fabric ' },
        { field: 'vendorId', headerName: 'Vendor' },
        { field: 'poPcs', headerName: 'Po Pcs' },
        { field: 'colourName', headerName: 'Color' },
        { field: 'noOfHeadsName', headerName: 'No. Of Heads' },
        { field: 'repeats', headerName: 'Repeats' },
        { field: 'cuttingSize', headerName: 'Cutting Size' },
        { field: 'itemsPerRepeat', headerName: 'Items Per Repeat' },
        { field: 'availableQty', headerName: 'Available Qty' },
        { field: 'assignedQty', headerName: 'Assigned Qty' },
        { field: 'totalPcs', headerName: 'Total Pcs' },
        { field: 'requiredPcs', headerName: 'Required Pcs' },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (b) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(Se, {
                color: 'primary',
                onClick: () => j(b.row),
                children: e.jsx(Ye, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(we, { src: kt, sx: { background: 'transparent' } }),
              title: 'Embroidery  ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(t, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                ' ',
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: c,
                      onChange: N,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: L.map((b) =>
                        e.jsx(
                          A,
                          { value: b.collectionId, children: b.collectionName },
                          b.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: o.designId,
                    onChange: N,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: M.map((b) =>
                      e.jsx(
                        A,
                        { value: b.designId, children: b.designNo },
                        b.designId
                      )
                    )
                  })
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: o.batchNo,
                      onChange: N,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: oe.map((b) =>
                        e.jsx(
                          A,
                          { value: b.batchNo, children: b.batchNo },
                          b.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: o.baseColorName,
                    onChange: N,
                    disabled: !0,
                    sx: (b) => ({
                      ...(o.repeatsInMtr !== '' && {
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
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(de, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: o.componentId,
                      onChange: N,
                      size: 'small',
                      required: !0,
                      error: !!se.componentId,
                      helperText: se.componentId,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: V.map((b) =>
                        e.jsx(
                          A,
                          { value: b.componentId, children: b.componentName },
                          b.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: o.fabricId,
                    onChange: N,
                    required: !0,
                    error: !!se.fabricId,
                    helperText: se.fabricId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: re.map((b) =>
                      e.jsx(
                        A,
                        { value: b.fabricId, children: b.fabric },
                        b.fabricId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: o.colorId,
                    onChange: N,
                    required: !0,
                    error: !!se.colorId,
                    helperText: se.colorId,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ue.map((b) =>
                      e.jsx(
                        A,
                        { value: b.colorId, children: b.color },
                        b.colorId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: o.poPcs,
                    onChange: N,
                    disabled: !0,
                    sx: (b) => ({
                      ...(o.poPcs !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Available Quantity',
                    fullWidth: !0,
                    size: 'small',
                    name: 'availableQty',
                    type: 'number',
                    value: o.availableQty,
                    onChange: N,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (b) => ({
                      ...(o.availableQty !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Repeats',
                    type: 'number',
                    fullWidth: !0,
                    size: 'small',
                    name: 'repeats',
                    value: o.repeats,
                    onChange: N,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (b) => ({
                      ...(o.repeats !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Heads',
                    defaultValue: '',
                    size: 'small',
                    name: 'noOfHead',
                    value: o.noOfHead,
                    onChange: N,
                    required: !0,
                    error: !!se.noOfHead,
                    helperText: se.noOfHead,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (b) => ({
                      ...(o.noOfHead !== '' && {
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
                    children: Z.map((b) =>
                      e.jsx(
                        A,
                        { value: b.lookUpId, children: b.lookUpName },
                        b.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Cutting Size',
                    fullWidth: !0,
                    size: 'small',
                    name: 'cuttingSize',
                    type: 'number',
                    value: o.cuttingSize,
                    onChange: N,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (b) => ({
                      ...(o.cuttingSize !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'itemsPerRepeat',
                    fullWidth: !0,
                    type: 'number',
                    size: 'small',
                    name: 'itemsPerRepeat',
                    value: o.itemsPerRepeat,
                    onChange: N,
                    required: !0,
                    error: !!se.itemsPerRepeat,
                    helperText: se.itemsPerRepeat,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (b) => ({
                      ...(o.itemsPerRepeat !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'total Pcs.',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'totalPcs',
                    value: o.totalPcs,
                    onChange: N
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 4.5,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(ie, {
                    variant: 'contained',
                    size: 'small',
                    onClick: ne,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(t, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(de, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          })
        }),
        e.jsx(t, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(de, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Le, {}),
              title: 'View Embroidery ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(t, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(t, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  ' ',
                  e.jsx(ke, {
                    iColumns: D,
                    initialRows: ee,
                    setInitialData: p,
                    deleteApi:
                      'https://gecxc.com:4041/api/Embroidery/DeleteEmbroideryById?embroideryId=',
                    deleteBy: 'embroideryId',
                    refetch: I,
                    setAccordionExpanded: x,
                    fileName: 'Embroidery List',
                    isLoading: _
                  }),
                  e.jsxs(Qe, {
                    open: xe,
                    onClose: S,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(Ue, {
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
                          e.jsx(ye, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Assign Vendors '
                          }),
                          e.jsx(Se, {
                            onClick: S,
                            sx: { color: '#ffffff' },
                            children: e.jsx(Ge, {})
                          })
                        ]
                      }),
                      e.jsxs(qe, {
                        children: [
                          e.jsx(Ee, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Ot, {
                            initialFormData: Q,
                            setInitialFormData: U,
                            refetchDyeingPrintingData: I,
                            handleClickOpen: j
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
  At = Nt,
  Lt = () => {
    const { user: d } = Me();
    console.log('user', d);
    const [_, W] = s.useState(!0),
      [r, a] = s.useState([]),
      [p, i] = s.useState([]),
      [u, o] = s.useState({
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
        planningProcessTypeId: '',
        total: '',
        appId: 1,
        createdOn: new Date().toISOString(),
        createdBy: d.empId,
        lastUpdatedBy: d.empId,
        lastUpdatedOn: new Date().toISOString(),
        isSchiffili: !1,
        repeatsInMtr: ''
      });
    console.log('formData', u),
      s.useEffect(() => {
        o({
          ...u,
          processType: (r == null ? void 0 : r.processType) || 'MultiHead',
          planningId: (r == null ? void 0 : r.planningId) || 0,
          baseColorId: (r == null ? void 0 : r.baseColorId) || '',
          componentId: (r == null ? void 0 : r.componentId) || '',
          cuttingSize: (r == null ? void 0 : r.cuttingSize) || '',
          colorId: (r == null ? void 0 : r.colorId) || '',
          fabricId: (r == null ? void 0 : r.fabricId) || '',
          noOfHeads: (r == null ? void 0 : r.noOfHeads) || 0,
          operatingMachineId: (r == null ? void 0 : r.operatingMachineId) || 0,
          repeats: (r == null ? void 0 : r.repeats) || '',
          repeatSize: (r == null ? void 0 : r.repeatSize) || '',
          uomId: (r == null ? void 0 : r.uomId) || '',
          totalFabric: (r == null ? void 0 : r.totalFabric) || '',
          shrinkage: (r == null ? void 0 : r.shrinkage) || '',
          wastage: (r == null ? void 0 : r.wastage) || '',
          total: (r == null ? void 0 : r.total) || '',
          appId: 1,
          createdOn:
            (r == null ? void 0 : r.createdOn) || new Date().toISOString(),
          createdBy: (r == null ? void 0 : r.createdBy) || d.empId,
          lastUpdatedBy: d.empId,
          lastUpdatedOn: new Date().toISOString(),
          repeatsInMtr: (r == null ? void 0 : r.repeatsInMtr) || ''
        });
      }, [r]);
    const { data: k } = Ne(),
      [R, c] = s.useState(''),
      { data: F, refetch: O } = Ae(R, { skip: !R }),
      { data: G, refetch: y } = dt(u.planningHeaderId, {
        skip: !u.planningHeaderId
      }),
      { data: q } = Pe(),
      [K, J] = s.useState([]),
      { enqueueSnackbar: C } = Oe();
    console.log('lookupData', q),
      s.useEffect(() => {
        F && (J(F.result), O());
      }, [F]),
      s.useEffect(() => {
        G && (W(!1), i(G.result.map((n, g) => ({ id: g, ...n }))));
      }, [G, y]),
      console.log('designList', K),
      console.log('collectionData', k);
    const f = (k == null ? void 0 : k.result) || [],
      [I, B] = s.useState(!1),
      [H, x] = s.useState([]),
      [M, E] = s.useState([]),
      [oe, te] = s.useState([]),
      [re, ge] = s.useState([]),
      [v, z] = s.useState([]),
      [Z, ce] = s.useState([]),
      [ue, be] = s.useState([]),
      [ee, ae] = s.useState([]);
    console.log('components:', oe),
      console.log('Fabrications:', re),
      console.log('colors:', v),
      console.log('uoms:', Z),
      console.log('heads:', ue),
      console.log('lookupData', q),
      s.useEffect(() => {
        if (q) {
          const n = q.result[0];
          te(n.componentList),
            z(n.colorList),
            ge(n.fabricList),
            be(n.noOfHeadsList),
            ce(n.uomList),
            x(n.planningTypeProcessList),
            E(n.operatingMachineList);
        }
      }, [q]),
      s.useEffect(() => {
        const n = async (g) => {
          try {
            const T = await he.get(
              `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningHeaderByDesignId?designId=${g}`
            );
            console.log(T.data), ae(T.data.result);
          } catch (T) {
            console.error('Error fetching pre-planning lookup data:', T);
          }
        };
        u.designId && n(u.designId);
      }, [u.designId, u.planningHeaderId]),
      s.useEffect(() => {
        const n = () => {
          const $ = parseFloat(u.repeats) || 0,
            w = parseFloat(u.repeatSize) || 0,
            le = ($ * w).toFixed(2);
          return parseFloat(le).toLocaleString();
        };
        o(($) => ({ ...$, totalFabric: n() }));
        const g = () => {
          const w =
              (typeof u.totalFabric == 'string'
                ? parseFloat(u.totalFabric.replace(/,/g, ''))
                : u.totalFabric) || 0,
            le = parseFloat(u.shrinkage) || 0,
            fe = parseFloat(u.wastage) || 0,
            je = ((w * (100 + (le + fe))) / 100).toFixed(2);
          return parseFloat(je).toLocaleString();
        };
        o(($) => ({ ...$, total: g() }));
        const T = () => (
          parseFloat(u.repeats),
          (0.9144 * (parseFloat(u.repeatSize) || 0)).toFixed(2)
        );
        o(($) => ({ ...$, repeatsInMtr: T() }));
        const X = () => {
          const $ = parseFloat(u.repeats) || 0;
          return ((parseFloat(u.repeatsInMtr) || 0) * $).toFixed(2);
        };
        o(($) => ({ ...$, totalFabric: $.isSchiffili ? X() : n() }));
      }, [
        u.repeats,
        u.repeatSize,
        u.totalFabric,
        u.shrinkage,
        u.wastage,
        u.repeatsInMtr,
        u.isSchiffili
      ]);
    const [V, Y] = s.useState(!1);
    s.useState(!1);
    const L = (n) => {
        const { name: g, value: T } = n.target;
        if (g === 'collectionId') {
          const X = f.find(($) => $.collectionId === parseInt(T));
          B(!0),
            i([]),
            W(!0),
            c(T),
            o({
              ...u,
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
              collectionId: T,
              noOfDesigns: X ? X.noOfDesigns : '',
              noOfColors: X ? X.noOfColors : ''
            });
        } else if (g === 'designId') {
          const X = K.find(($) => $.designId === parseInt(T));
          i([]),
            W(!0),
            o({
              ...u,
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
              designId: T,
              baseColorId: X ? X.colorId : '',
              baseColorName: X ? X.colorName : ''
            });
        } else if (g === 'batchNo') {
          const X = ee.find(($) => $.batchNo === T);
          o({
            ...u,
            componentId: '',
            processType: 'MultiHead',
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
            batchNo: T,
            planningHeaderId: X ? X.planningHeaderId : ''
          }),
            Y(!0),
            B(!1);
        } else if (g === 'planningProcessTypeId') {
          const X = H.find(($) => $.planningProcessTypeId === T);
          o({
            ...u,
            planningProcessTypeId: T,
            planningProcessTypeName: X ? X.lookUpName : '',
            noOfHeads: 0,
            operatingMachineId: 0
          }),
            Y(!0),
            B(!1);
        } else o({ ...u, [g]: T });
      },
      [N, se] = s.useState({}),
      Ie = async () => {
        const n = ne();
        if (Object.keys(n).length > 0) {
          se(n);
          return;
        }
        try {
          const g = {
              ...u,
              totalFabric: parseFloat(u.totalFabric.replace(/,/g, '')),
              total: parseFloat(u.total.replace(/,/g, ''))
            },
            T = await he.post(
              'https://gecxc.com:4041/api/PrePlanning/SavePrePlanning',
              g
            );
          console.log('Data saved successfully:', T.data),
            console.log('Save response:', T.data),
            T.data.success
              ? C('Fabrication saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (C(`${T.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', T.data.message)),
            o((X) => ({
              processType: 'MultiHead',
              planningId: 0,
              collectionId: X.collectionId,
              designId: X.designId,
              batchNo: X.batchNo,
              planningHeaderId: X.planningHeaderId,
              baseColorId: X.baseColorId,
              baseColorName: X.baseColorName,
              noOfDesigns: X.noOfDesigns,
              noOfColors: X.noOfColors,
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
              appId: 1,
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId,
              isSchiffili: !1,
              repeatsInMtr: ''
            })),
            y();
        } catch (g) {
          console.error('Error saving data:', g),
            C('Pre Planning not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      ne = () => {
        const n = {};
        return (
          u.componentId || (n.componentId = 'componentId is required'),
          u.colorId || (n.colorId = 'colorId is required'),
          u.fabricId || (n.fabricId = 'fabricId is required'),
          u.cuttingSize || (n.cuttingSize = 'cuttingSize is required'),
          u.repeats || (n.repeats = 'repeats is required'),
          u.repeatSize || (n.repeatSize = 'repeatSize is required'),
          u.uomId || (n.uomId = 'uomId is required'),
          u.shrinkage || (n.shrinkage = 'shrinkage is required'),
          u.wastage || (n.wastage = 'wastage is required'),
          n
        );
      };
    console.log('initialRows', p);
    const Q = p.reduce((n, g) => n + (g.totalFabric ?? 0), 0).toFixed(2),
      U = parseFloat(Q).toLocaleString();
    console.log('localizedTotalFabric', U);
    const xe = p.reduce((n, g) => n + (g.total ?? 0), 0).toFixed(2),
      ve = parseFloat(xe).toLocaleString(),
      j = [
        ...p,
        { id: 'TOTAL_FABRIC', label: 'Total Fabric', totalFabric: U, total: ve }
      ],
      S = { sortable: !1, pinnable: !1, hideable: !1 };
    console.log('rows', j);
    const D = [
        {
          field: 'componentName',
          headerName: 'Component',
          ...S,
          colSpan: (n, g) => {
            if (g.id === 'TOTAL_FABRIC') return 9;
          },
          valueGetter: (n, g) => (g.id === 'TOTAL_FABRIC' ? g.label : n)
        },
        { field: 'planningProcessTypeName', headerName: 'Process Type', ...S },
        { field: 'color', headerName: 'Color', ...S },
        { field: 'cuttingSize', headerName: 'Cutting Size', ...S },
        { field: 'fabric', headerName: 'Fabrication', ...S },
        { field: 'noOfHeadName', headerName: 'No. Of Heads', ...S },
        {
          field: 'operatingMachineName',
          headerName: 'Operating Machine',
          ...S
        },
        {
          field: 'repeats',
          headerName: 'Repeats',
          valueGetter: (n) => n.toLocaleString(),
          ...S
        },
        {
          field: 'repeatSize',
          headerName: 'Repeat Size',
          valueGetter: (n) => n.toLocaleString(),
          ...S
        },
        {
          field: 'totalFabric',
          headerName: 'Total Fabric',
          valueGetter: (n) => n.toLocaleString(),
          ...S
        },
        {
          field: 'uom',
          headerName: 'UOM',
          colSpan: (n, g) => {
            if (g.id === 'TOTAL_FABRIC') return 2;
          },
          valueGetter: (n, g) => (g.id === 'TOTAL_FABRIC' ? 'OverAll Total' : n)
        },
        { field: 'shrinkage', headerName: 'Shrinkage %' },
        { field: 'wastage', headerName: 'Wastage %' },
        {
          field: 'total',
          headerName: 'Total',
          valueGetter: (n) => n.toLocaleString(),
          colSpan: (n, g) => {
            if (g.id === 'TOTAL_FABRIC') return 2;
          }
        }
      ],
      h = u.planningProcessTypeId === 198;
    console.log('formData', u);
    const b = ({ row: n, field: g }) =>
      n.id === 'TOTAL_FABRIC' && (g === 'componentName' || g === 'uom')
        ? 'bold'
        : '';
    console.log('batchList:', ee);
    const m =
        'https://gecxc.com:4041/api/PrePlanning/DeletePreplanningByPlanningId?PlanningId=',
      P = (n, g) => {
        Y(!V);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'CardHeader',
          children: e.jsxs(pe, {
            variant: 'outlined',
            children: [
              e.jsx(me, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(tt, {}),
                title: 'Pre Planning',
                titleTypographyProps: { style: { color: 'white' } },
                children: ' '
              }),
              e.jsxs(t, {
                container: !0,
                spacing: 2,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  e.jsxs(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: [
                      e.jsx(l, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Select Collection',
                        name: 'collectionId',
                        value: u.collectionId,
                        onChange: L,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: f.map((n) =>
                          e.jsx(
                            A,
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
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Design',
                      name: 'designId',
                      value: u.designId,
                      onChange: L,
                      size: 'small',
                      required: !0,
                      InputLabelProps: { sx: { color: 'black' } },
                      children: K.map((n) =>
                        e.jsx(
                          A,
                          { value: n.designId, children: n.designNo },
                          n.designId
                        )
                      )
                    })
                  }),
                  e.jsxs(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: [
                      e.jsx(l, {
                        fullWidth: !0,
                        select: !0,
                        label: 'Batch No.',
                        name: 'batchNo',
                        value: u.batchNo,
                        onChange: L,
                        size: 'small',
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } },
                        children: ee.map((n) =>
                          e.jsx(
                            A,
                            { value: n.batchNo, children: n.batchNo },
                            n.batchNo
                          )
                        )
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: e.jsx(l, {
                      label: 'No of Design',
                      fullWidth: !0,
                      size: 'small',
                      focused: !0,
                      name: 'noOfDesigns',
                      value: u.noOfDesigns,
                      onChange: L,
                      disabled: !0,
                      sx: (n) => ({
                        ...(u.noOfDesigns !== '' && {
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
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: e.jsx(l, {
                      label: 'No of Color',
                      fullWidth: !0,
                      size: 'small',
                      name: 'noOfColors',
                      value: u.noOfColors,
                      onChange: L,
                      disabled: !0,
                      sx: (n) => ({
                        ...(u.noOfColors !== '' && {
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
                  e.jsx(t, {
                    item: !0,
                    xs: 12,
                    md: 2,
                    children: e.jsx(l, {
                      label: 'Base Color',
                      fullWidth: !0,
                      size: 'small',
                      name: 'baseColorName',
                      value: u.baseColorName,
                      onChange: L,
                      disabled: !0,
                      sx: (n) => ({
                        ...(u.baseColorName !== '' && {
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
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'MainCard',
              avatar: e.jsx(Ze, {}),
              title: 'Add Pre Planning',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Se, {
                onClick: P,
                sx: { mt: '-18px' },
                children: e.jsx(Fe, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            e.jsxs(Ke, {
              expanded: V,
              onChange: P,
              sx: {},
              children: [
                e.jsx(De, {
                  expandIcon: e.jsx(Fe, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx($e, {
                  children: e.jsxs(t, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsxs(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          e.jsx(l, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Process Type',
                            name: 'planningProcessTypeId',
                            value: u.planningProcessTypeId,
                            onChange: L,
                            size: 'small',
                            required: !0,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: H.map((n) =>
                              e.jsx(
                                A,
                                { value: n.lookUpId, children: n.lookUpName },
                                n.lookUpId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Te, {
                          fullWidth: !0,
                          options: oe,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            oe.find((n) => n.lookUpId === u.componentId) ||
                            null,
                          onChange: (n, g) => {
                            L({
                              target: {
                                name: 'componentId',
                                value: g ? g.lookUpId : ''
                              }
                            });
                          },
                          renderOption: (n, g) => {
                            const { lookUpName: T } = g;
                            return e.jsx('span', { ...n, children: T });
                          },
                          renderInput: (n) =>
                            e.jsx(l, {
                              ...n,
                              label: 'Select Component',
                              size: 'small',
                              name: 'componentId',
                              value: u.componentId,
                              required: !0,
                              error: !!N.componentId,
                              helperText: N.componentId,
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
                      e.jsxs(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: [
                          ' ',
                          e.jsx(Te, {
                            fullWidth: !0,
                            options: v,
                            getOptionLabel: (n) => n.lookUpName,
                            value:
                              v.find((n) => n.lookUpId === u.colorId) || null,
                            onChange: (n, g) => {
                              L({
                                target: {
                                  name: 'colorId',
                                  value: g ? g.lookUpId : ''
                                }
                              });
                            },
                            renderInput: (n) =>
                              e.jsx(l, {
                                ...n,
                                label: 'Color',
                                size: 'small',
                                value: u.colorId,
                                name: 'colorId',
                                required: !0,
                                error: !!N.colorId,
                                helperText: N.colorId,
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
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          size: 'small',
                          name: 'cuttingSize',
                          type: 'number',
                          value: u.cuttingSize,
                          onChange: L,
                          required: !0,
                          error: !!N.cuttingSize,
                          helperText: N.cuttingSize,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(Te, {
                          fullWidth: !0,
                          options: re,
                          getOptionLabel: (n) => n.lookUpName,
                          value:
                            re.find((n) => n.lookUpId === u.fabricId) || null,
                          onChange: (n, g) => {
                            L({
                              target: {
                                name: 'fabricId',
                                value: g ? g.lookUpId : ''
                              }
                            });
                          },
                          renderInput: (n) =>
                            e.jsx(l, {
                              ...n,
                              label: 'Fabrication',
                              size: 'small',
                              name: 'fabricId',
                              value: u.fabricId,
                              required: !0,
                              error: !!N.fabricId,
                              helperText: N.fabricId,
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
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: h
                          ? e.jsx(l, {
                              fullWidth: !0,
                              select: !0,
                              label: 'Operating Machine',
                              size: 'small',
                              name: 'operatingMachineId',
                              value: u.operatingMachineId,
                              onChange: L,
                              required: !0,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: M.map((n) =>
                                e.jsx(
                                  A,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                          : e.jsx(l, {
                              fullWidth: !0,
                              select: !0,
                              label: 'No of Heads',
                              size: 'small',
                              name: 'noOfHeads',
                              value: u.noOfHeads,
                              onChange: L,
                              required: !0,
                              InputLabelProps: { sx: { color: 'black' } },
                              children: ue.map((n) =>
                                e.jsx(
                                  A,
                                  { value: n.lookUpId, children: n.lookUpName },
                                  n.lookUpId
                                )
                              )
                            })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Repeats',
                          fullWidth: !0,
                          size: 'small',
                          name: 'repeats',
                          type: 'number',
                          value: u.repeats,
                          onChange: L,
                          error: !!N.repeats,
                          helperText: N.repeats,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Repeat Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'repeatSize',
                          value: u.repeatSize,
                          onChange: L,
                          error: !!N.repeatSize,
                          helperText: N.repeatSize,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Total Fabric',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalFabric',
                          value: u.totalFabric,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'UOM',
                          type: 'number',
                          defaultValue: '',
                          size: 'small',
                          name: 'uomId',
                          value: h ? 139 : u.uomId,
                          onChange: L,
                          error: !!N.uomId,
                          helperText: N.uomId,
                          required: !0,
                          disabled: u.isSchiffili,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: Z.map((n) =>
                            e.jsx(
                              A,
                              { value: n.lookUpId, children: n.lookUpName },
                              n.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Shrinkage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'shrinkage',
                          value: u.shrinkage,
                          onChange: L,
                          error: !!N.shrinkage,
                          helperText: N.shrinkage,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Wastage %',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'wastage',
                          value: u.wastage,
                          onChange: L,
                          error: !!N.wastage,
                          helperText: N.wastage,
                          required: !0,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: e.jsx(l, {
                          label: 'Total',
                          fullWidth: !0,
                          size: 'small',
                          name: 'total',
                          value: u.total,
                          onChange: L,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        children: e.jsx(t, {
                          container: !0,
                          spacing: 1,
                          width: 'Inherit',
                          children: e.jsx(t, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: e.jsx(l, {
                              label: 'repeat in mtr',
                              fullWidth: !0,
                              size: 'small',
                              name: 'repeatsInMtr',
                              disabled: !0,
                              value: u.repeatsInMtr,
                              onChange: L,
                              sx: (n) => ({
                                ...(u.repeatsInMtr !== '' && {
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
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        children: e.jsx(ie, {
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
        e.jsx(t, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(de, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'MainCard',
              avatar: e.jsx(Le, {}),
              title: 'View',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(t, {
              sx: { paddingY: 1, paddingX: 1 },
              children: e.jsx(t, {
                sx: {},
                item: !0,
                xs: 12,
                children: e.jsx(ke, {
                  iColumns: D,
                  initialRows: j,
                  setInitialData: a,
                  deleteApi: m,
                  deleteBy: 'planningId',
                  refetch: y,
                  getCellClassName: b,
                  setAccordionExpanded: Y,
                  fileName: 'PrePlanningList',
                  isLoading: _
                })
              })
            })
          ]
        })
      ]
    });
  },
  Bt = Lt,
  Tt = '/assets/roller-ezgif.com-instagif-CY-x4C-U.gif',
  Ft = () => {
    const { user: d } = Me();
    console.log('user', d);
    const [_, W] = s.useState(!0),
      [r, a] = s.useState([]),
      [p, i] = s.useState({
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
    s.useEffect(() => {
      i({
        ...p,
        dpId: r.dpId || 0,
        fabricId: (r == null ? void 0 : r.fabricId) || '',
        colorId: (r == null ? void 0 : r.colorId) || '',
        color: (r == null ? void 0 : r.color) || '',
        processType: (r == null ? void 0 : r.processType) || '',
        availableQty: (r == null ? void 0 : r.availableQty) || '',
        Shrinkage: (r == null ? void 0 : r.shrinkage) || '',
        Wastage: (r == null ? void 0 : r.wastage) || '',
        outputQty: (r == null ? void 0 : r.outputQty) || 0,
        UOM: (r == null ? void 0 : r.uom) || 0,
        uomId: (r == null ? void 0 : r.uomId) || '',
        poPcs: (r == null ? void 0 : r.poPcs) || 0,
        createdOn:
          (r == null ? void 0 : r.createdOn) || new Date().toISOString(),
        createdBy: (r == null ? void 0 : r.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [r]);
    const { enqueueSnackbar: u } = Oe(),
      [o, k] = s.useState(!1);
    console.log('Dyeing form data to send', p);
    const { data: R } = Ne(),
      [c, F] = s.useState(''),
      { data: O } = Pe(),
      { data: G, refetch: y } = Ae(c, { skip: !c }),
      { data: q, refetch: K } = ze(p.designId, { skip: !p.designId }),
      { data: J } = ct(
        { batchNo: p.planningHeaderId, processType: 'Fabrication' },
        { skip: !p.planningHeaderId }
      ),
      { data: C } = ut(
        { fabricId: p.fabricId, planningHeaderId: p.planningHeaderId },
        { skip: !p.fabricId || !p.planningHeaderId }
      ),
      { data: f, refetch: I } = pt(p.planningHeaderId, {
        skip: !p.planningHeaderId
      }),
      [B, H] = s.useState([]),
      [x, M] = s.useState([]),
      [E, oe] = s.useState([]),
      [te, re] = s.useState([]),
      [ge, v] = s.useState([]),
      [z, Z] = s.useState([]);
    s.useState([]);
    const [ce, ue] = s.useState(!1);
    console.log('batchList', x),
      console.log('formData', p),
      s.useEffect(() => {
        G && H(G.result);
      }, [G]),
      s.useEffect(() => {
        q && M(q.result);
      }, [q]),
      s.useEffect(() => {
        J && oe(J.result);
      }, [J]),
      s.useEffect(() => {
        C && Z(C.result);
      }, [C]),
      s.useEffect(() => {
        f && (W(!1), v(f.result.map((j, S) => ({ id: S, ...j }))));
      }, [f, I]),
      s.useEffect(() => {
        if (O) {
          const j = O.result[0];
          re(j.uomList);
        }
      }, [O]);
    const be = (R == null ? void 0 : R.result) || [],
      ee = (j) => {
        const { name: S, value: D } = j.target;
        if (S === 'collectionId')
          be.find((h) => h.collectionId === parseInt(D)),
            F(D),
            k(!0),
            v([]),
            W(!0),
            i({
              ...p,
              collectionId: D,
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
        else if (S === 'designId') {
          const h = B.find((b) => b.designId === parseInt(D));
          v([]),
            W(!0),
            i({
              ...p,
              designId: D,
              baseColorId: h ? h.colorId : '',
              baseColorName: h ? h.colorName : '',
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
        } else if (S === 'batchNo') {
          const h = x.find((b) => b.batchNo === D);
          i({
            ...p,
            batchNo: D,
            planningHeaderId: h ? h.planningHeaderId : '',
            poPcs: h ? h.poPcs : '',
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
            ue(!0),
            k(!1);
        } else if (S === 'fabricId')
          E.find((h) => h.fabricId === D),
            console.log('Selected Fabric:', E),
            i({ ...p, fabricId: D });
        else if (S === 'ColorId') {
          const h = z.find((b) => b.colorId === D.colorId);
          i({
            ...p,
            ColorId: D.colorId,
            color: h.color,
            availableQty: h.total,
            UOM: h.uom,
            Shrinkage: h.shrinkage,
            Wastage: h.wastage
          });
        } else
          S === 'processType'
            ? i({ ...p, processType: D })
            : S === 'vendorId'
              ? i({ ...p, vendorId: D })
              : (i({ ...p, [S]: D }), V((h) => ({ ...h, [S]: '' })));
      };
    s.useEffect(() => {
      const j = () => {
          const P = parseFloat(p.availableQty) || 0,
            n = parseFloat(p.Shrinkage) || 0,
            g = parseFloat(p.Wastage) || 0;
          return ((P * (100 - (n + g))) / 100).toFixed(2);
        },
        S = () => {
          const P = parseFloat(p.availableQty) || 0,
            n = parseFloat(p.RatePerUOM) || 0;
          return (P * n).toFixed(2);
        },
        D = (P, n) => (P * (1 + n / 100)).toFixed(2),
        h = j(),
        b = S(),
        m = parseFloat(p.GST) || 0;
      D(b, m), parseFloat(p.poPcs), i((P) => ({ ...P, outputQty: h }));
    }, [
      p.availableQty,
      p.Shrinkage,
      p.Wastage,
      p.RatePerUOM,
      p.GST,
      p.poPcs,
      p.UnitRatePerPo
    ]);
    const [ae, V] = s.useState({}),
      Y = async () => {
        try {
          const j = await he.post(
            'https://gecxc.com:4041/api/DyeingPrinting/SaveDyeingPrinting',
            p
          );
          console.log('Save response:', j.data),
            j.data.success
              ? u('Fabrication saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (u(`${j.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', j.data.message)),
            i((S) => ({
              designId: S.designId,
              planningHeaderId: S.planningHeaderId,
              batchNo: S.batchNo,
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
              poPcs: S.poPcs,
              baseColorName: '',
              createdOn: new Date().toISOString(),
              createdBy: d.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: d.empId
            })),
            I();
        } catch (j) {
          console.error('Error saving data:', j),
            u('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      L = [
        { value: 'Dyeing', label: 'Dyeing' },
        { value: 'Printing', label: 'Printing' }
      ],
      [N, se] = s.useState({}),
      [Ie, ne] = s.useState(!1),
      Q = (j) => {
        se(j), ne(!0);
      },
      U = () => {
        ne(!1), se({}), I();
      },
      xe = [
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'processType', headerName: 'Process Type' },
        { field: 'uom', headerName: ' UOM' },
        { field: 'poPcs', headerName: ' PO PCS.' },
        { field: 'availableQty', headerName: 'Available Quantitity' },
        { field: 'assignedQty', headerName: 'Assigned Qty' },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (j) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(Se, {
                color: 'primary',
                onClick: () => Q(j.row),
                children: e.jsx(Ye, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(we, { src: Tt, sx: { background: 'transparent' } }),
              title: 'Add Dyeing and Printing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(t, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: c,
                      onChange: ee,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: be.map((j) =>
                        e.jsx(
                          A,
                          { value: j.collectionId, children: j.collectionName },
                          j.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: p.designId,
                    onChange: ee,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: B.map((j) =>
                      e.jsx(
                        A,
                        { value: j.designId, children: j.designNo },
                        j.designId
                      )
                    )
                  })
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: p.batchNo,
                      onChange: ee,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: x.map((j) =>
                        e.jsx(
                          A,
                          { value: j.batchNo, children: j.batchNo },
                          j.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: p.baseColorName,
                    onChange: ee,
                    disabled: !0,
                    sx: (j) => ({
                      ...(p.repeatsInMtr !== '' && {
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
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(de, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: p.fabricId,
                    onChange: ee,
                    error: !!ae.fabricId,
                    helperText: ae.fabricId,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((j) =>
                      e.jsx(
                        A,
                        { value: j.fabricId, children: j.fabric },
                        j.fabricId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(Pt, {
                    fullWidth: !0,
                    options: z,
                    getOptionLabel: (j) => j.color || '',
                    renderInput: (j) =>
                      e.jsx(l, {
                        ...j,
                        label: 'Color',
                        name: 'colorId',
                        size: 'small',
                        error: !!ae.colorId,
                        helperText: ae.colorId,
                        required: !0,
                        InputLabelProps: { sx: { color: 'black' } }
                      }),
                    value: z.find((j) => j.colorId === p.colorId) || null,
                    onChange: (j, S) => {
                      i((D) => ({
                        ...D,
                        colorId: S ? S.colorId : '',
                        color: S ? S.color : '',
                        availableQty: S ? S.total : '',
                        UOM: S ? S.uom : '',
                        uomId: S ? S.uomId : '',
                        Shrinkage: S ? S.shrinkage : '',
                        Wastage: S ? S.wastage : ''
                      }));
                    }
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processType',
                    value: p.processType,
                    onChange: ee,
                    error: !!ae.processType,
                    helperText: ae.processType,
                    required: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: L.map((j) =>
                      e.jsx(A, { value: j.value, children: j.label }, j.value)
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: p.poPcs,
                    onChange: ee,
                    disabled: !0,
                    sx: (j) => ({
                      ...(p.poPcs !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'UOM',
                    fullWidth: !0,
                    size: 'small',
                    name: 'UOM',
                    value: p.UOM,
                    onChange: ee,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'availableQty',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'availableQty',
                    value: p.availableQty,
                    onChange: ee,
                    disabled: !0,
                    sx: (j) => ({
                      ...(p.availableQty !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 9,
                  sx: { marginTop: 2 },
                  textAlign: 'right',
                  children: e.jsx(ie, {
                    variant: 'contained',
                    color: 'primary',
                    size: 'small',
                    onClick: Y,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(de, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        ' ',
        e.jsx(t, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(de, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Le, {}),
              title: 'View Dyeing ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            ' ',
            e.jsx(t, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(t, {
                item: !0,
                xs: 12,
                md: 12,
                paddingTop: 1,
                children: [
                  e.jsx(ke, {
                    iColumns: xe,
                    initialRows: ge,
                    setInitialData: a,
                    deleteApi:
                      'https://gecxc.com:4041/api/DyeingPrinting/DeleteDyeingPrintingById?DPId=',
                    deleteBy: 'dpId',
                    refetch: I,
                    setAccordionExpanded: ue,
                    fileName: 'Dyeing&PrintingList',
                    isLoading: _
                  }),
                  e.jsxs(Qe, {
                    open: Ie,
                    onClose: U,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(Ue, {
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
                          e.jsx(ye, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Assign Vendors '
                          }),
                          e.jsx(Se, {
                            onClick: U,
                            sx: { color: '#ffffff' },
                            children: e.jsx(Ge, {})
                          })
                        ]
                      }),
                      e.jsxs(qe, {
                        children: [
                          e.jsx(Ee, { id: 'alert-dialog-slide-description' }),
                          e.jsx(St, {
                            initialFormData: N,
                            setInitialFormData: se,
                            refetchDyeingPrintingData: I,
                            handleClickOpen: Q
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
  zt = Ft,
  at =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nNXXaciVVRAH8Kv1Jtoi5psFZZYUtoimhUVlaJHZghK2UBFCtGkbZdgiBG1GHyowaaEdWogWElvMFjJpw4oWwrJsVetDtNNevxjeuXW8PPe991rvh/5w4TznnDkzZ87Mf+bWav8H4Dgcgc9wfcPanViFidioL5Rvj2/wIqbgCyzA3XgKH+BI/+DWijMGpYEjO1U+FH8Uh++Jj6yPNzG5YW5wccYxWItF6anwWP9OjJiE7/FuYcCTeDnHjQYsLWR3w8cYi/OxP57AzE49cSGewzgswfJ0/0u4HwfgWYyq3w5deBXH4wXchHU4GgvbVdwPR+EVPI1NMCDesviFos3SqIiTaSl7BW5Pw5/Ho3gYl2Nuu8G3NG+8X85tgcMxCxfhLBxWf/N08bJU+h52xRrciGdwdj7bsFbKx+fbnZTfe+cNflGNX/EQJqQ3Pi+MPgN3pAd/x8GtlO+BT/I2A1P4T+0hMuYdzC/Om56XCW/NyOCt5gs9Lo5oPxBD8u07xesZK5vjtjRqXKEj0vGEZgYsxGXYOKO8U/yE3ZN0PsSVuCHOLHTsgxVVykdmgAzKAGuFryvmLsDVBXnF+w9OCt+60BXcMarRgBA8D91Jvc2URrqNSZkJ+f1dUvRbDfu/wqbpiXmFrluCIUvlke+rsS3OaaJ8WUmxhewO+LYXT52KneLWhcx167EhRtQ3JKNVYUqTuAkmfDBStoncI7kvMmvLHAcdTywPORT35rjqbdfWySPzfDF+wAPF/Hb4skJ2Xa6HzL45fiwCvTRgJq7NvK/CmcXeuQ1rpxdrF1fIBvn0z5ScXuXFGk7Md4nbVeGUYu8lDWvnFmtzKmR/C+JpZcA03JXjqoBaWfD9VplGkqjq890VvUJgTfHuezUzYMdgsBxHRavCpAaZoQ3fQblVWJLrK0suaDSgXwbakCSTKkQp7WoiP6AX5pyVJPd3GjYzYgFmZzT/2OSwVdkLblOU7PuauF4+Z3fGxqWtDBiblawrWbE3hIFv4OcW++Ylta9uqyHVU3rnpNBr/h2WZ1WMrLmmpfJABEnW7uD44dlybwjCk8OyWX0/YqvWLvSUy3jTXbIt77QsL8q+YnReZnTbyuvA1OTuqZkhMyoqXSNWRH+Y8sem8sm1DYWehvLtjPrhObdzZspVuDnL7GnBI4XMPUlQIzZYeR3ZGc1ObzyeFW981viByRtjsttdnO3cyRF8tf8Serj8oPhjmu11tNqfZnpFzz8fh/TJn9O+xl9lMwg6mBWmPgAAAABJRU5ErkJggg==',
  wt = () => {
    const { user: d } = Me(),
      { enqueueSnackbar: _ } = Oe(),
      [W, r] = s.useState(!0),
      [a, p] = s.useState([]),
      [i, u] = s.useState({
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
    s.useEffect(() => {
      u({
        ...i,
        schiffiliId: a.schiffiliId || 0,
        designId: (a == null ? void 0 : a.designId) || '',
        planningHeaderId: (a == null ? void 0 : a.planningHeaderId) || 0,
        batchNo: (a == null ? void 0 : a.batchNo) || '',
        componentId: (a == null ? void 0 : a.componentId) || '',
        poPcs: (a == null ? void 0 : a.poPcs) || '',
        fabricId: (a == null ? void 0 : a.fabricId) || '',
        vendorId: (a == null ? void 0 : a.vendorId) || '',
        colorId: (a == null ? void 0 : a.colorId) || '',
        availableQty: (a == null ? void 0 : a.availableQty) || '',
        thaanQty: (a == null ? void 0 : a.thaanQty) || 0,
        operatingMachineId: (a == null ? void 0 : a.operatingMachineId) || 0,
        operatingMachine: (a == null ? void 0 : a.operatingMachineName) || '',
        workingHeadId: (a == null ? void 0 : a.workingHeadId) || 0,
        cuttingSize: (a == null ? void 0 : a.cuttingSize) || '',
        rate: (a == null ? void 0 : a.rate) || '',
        costPerComponent: (a == null ? void 0 : a.costPerComponent) || '',
        totalEmbroidry: (a == null ? void 0 : a.totalEmbroidry) || 0,
        noOfItemPerThaan: (a == null ? void 0 : a.noOfItemPerThaan) || 0,
        noOfStichesPerYard: (a == null ? void 0 : a.noOfStichesPerYard) || 0,
        amountPerYard: (a == null ? void 0 : a.amountPerYard) || 0,
        totalPcs: (a == null ? void 0 : a.totalPcs) || 0,
        laserCut: !!(
          (a != null && a.laserCutRate) ||
          (a != null && a.pcsForLaserCut)
        ),
        laserCutRate: (a == null ? void 0 : a.laserCutRate) || 0,
        pcsForLaserCut: (a == null ? void 0 : a.pcsForLaserCut) || 0,
        totalAmount: (a == null ? void 0 : a.totalAmount) || 0,
        createdOn:
          (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
        createdBy: (a == null ? void 0 : a.createdBy) || d.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: d.empId
      });
    }, [a]);
    const [o, k] = s.useState(!1),
      R = (h, b) => {
        k(!o);
      },
      [c, F] = s.useState(!1),
      { data: O } = Ne(),
      [G, y] = s.useState(''),
      { data: q } = Pe(),
      { data: K, refetch: J } = Ae(G, { skip: !G }),
      { data: C, refetch: f } = ze(i.designId, { skip: !i.designId }),
      { data: I } = We(
        { batchNo: i.planningHeaderId, componentId: i.componentId },
        { skip: !i.planningHeaderId || !i.componentId }
      ),
      { data: B } = Re(
        {
          batchNo: i.planningHeaderId,
          componentId: i.componentId,
          fabricId: i.fabricId
        },
        { skip: !i.planningHeaderId || !i.componentId || !i.fabricId }
      ),
      { data: H, refetch: x } = mt(i.planningHeaderId, {
        skip: !i.planningHeaderId
      }),
      { data: M } = He(i.planningHeaderId, { skip: !i.planningHeaderId });
    console.log('formData.planningHeaderId', i.planningHeaderId),
      console.log('collectionData', O),
      console.log('schiffliList', H);
    const [E, oe] = s.useState([]),
      [te, re] = s.useState([]),
      [ge, v] = s.useState([]),
      [z, Z] = s.useState([]),
      [ce, ue] = s.useState([]),
      [be, ee] = s.useState([]),
      [ae, V] = s.useState([]),
      [Y, L] = s.useState([]),
      [N, se] = s.useState([]);
    s.useEffect(() => {
      K && oe(K.result);
    }, [K]),
      s.useEffect(() => {
        C && re(C.result);
      }, [C]),
      s.useEffect(() => {
        I && v(I.result);
      }, [I]),
      s.useEffect(() => {
        B && V(I.result);
      }, [B]),
      s.useEffect(() => {
        M && se(M.result);
      }, [M]),
      s.useEffect(() => {
        H && (r(!1), L(H.result.map((h, b) => ({ id: b, ...h }))));
      }, [H, x]),
      s.useEffect(() => {
        if (q) {
          const h = q.result[0];
          Z(h.vendorList), ue(h.operatingMachineList), ee(h.workingHeadList);
        }
      }, [q]),
      console.log('initialRows', Y);
    const Ie = (O == null ? void 0 : O.result) || [];
    s.useEffect(() => {
      const h = () => {
        const g = parseFloat(i.thaanQty) || 0,
          T = parseFloat(i.operatingMachine) || 0;
        return (g * T).toFixed(2);
      };
      u((g) => ({ ...g, totalEmbroidry: h() }));
      const b = () => {
        const g = parseFloat(i.thaanQty) || 0,
          T = parseFloat(i.noOfStichesPerYard) || 0;
        return (g * T).toFixed(2);
      };
      u((g) => ({ ...g, totalPcs: b() }));
      const m = () => {
        const g = parseFloat(i.noOfStichesPerYard) || 0,
          T = parseFloat(i.rate) || 0;
        return ((g / 1e3) * T).toFixed(2);
      };
      u((g) => ({ ...g, amountPerYard: m() }));
      const P = () => {
        const g = parseFloat(i.totalAmount) || 0,
          T = parseFloat(i.totalPcs) || 0;
        return (g / T).toFixed(2);
      };
      u((g) => ({ ...g, costPerComponent: P() }));
      const n = () => {
        const g = parseFloat(i.amountPerYard) || 0,
          T = parseFloat(i.totalEmbroidry) || 0,
          X = parseFloat(i.laserCutRate) || 0,
          $ = parseFloat(i.pcsForLaserCut) || 0;
        return (g * T + $ * X).toFixed(2);
      };
      u((g) => ({ ...g, totalAmount: n() }));
    }, [
      i.thaanQty,
      i.operatingMachine,
      i.noOfStichesPerYard,
      i.rate,
      i.totalAmount,
      i.totalPcs,
      i.amountPerYard,
      i.totalEmbroidry,
      i.laserCutRate,
      i.pcsForLaserCut
    ]);
    const ne = (h) => {
        const { name: b, checked: m } = h.target;
        u((P) => ({ ...P, [b]: m }));
      },
      Q = (h) => {
        const { name: b, value: m } = h.target;
        if (b === 'collectionId')
          Ie.find((P) => P.collectionId === parseInt(m)),
            y(m),
            F(!0),
            L([]),
            r(!0),
            u({
              ...i,
              collectionId: m,
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
        else if (b === 'designId') {
          const P = E.find((n) => n.designId === parseInt(m));
          L([]),
            r(!0),
            u({
              ...i,
              designId: m,
              baseColorId: P ? P.colorId : '',
              baseColorName: P ? P.colorName : '',
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
        } else if (b === 'batchNo') {
          const P = te.find((n) => n.batchNo === m);
          u({
            ...i,
            batchNo: m,
            planningHeaderId: P ? P.planningHeaderId : '',
            poPcs: P ? P.poPcs : '',
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
            k(!0),
            F(!1);
        } else if (b === 'colorId') {
          const P = ae.find((n) => n.colorId === m);
          u({
            ...i,
            colorId: m,
            availableQty: P ? P.total : '',
            cuttingSize: P ? P.cuttingSize : '',
            repeats: P ? P.repeats : ''
          });
        } else if (b === 'operatingMachineId') {
          const P = ce.find((n) => n.lookUpId === m);
          u({
            ...i,
            operatingMachineId: m,
            operatingMachine: P ? P.lookUpName : ''
          });
        } else u({ ...i, [b]: m });
      };
    console.log('colors', ae);
    const [U, xe] = s.useState({}),
      ve = async () => {
        const h = j();
        if (Object.keys(h).length > 0) {
          xe(h);
          return;
        }
        try {
          const b = await he.post(
            'https://gecxc.com:4041/api/Schiffli/SaveSchiffili',
            i
          );
          console.log('Save response:', b.data),
            b.data.success
              ? _('Fabrication saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (_(`${b.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', b.data.message)),
            u((m) => ({
              designId: m.designId,
              planningHeaderId: m.planningHeaderId,
              batchNo: m.batchNo,
              baseColorName: m.baseColorName,
              schiffiliId: 0,
              componentId: '',
              poPcs: m.poPcs,
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
            x();
        } catch (b) {
          console.error('Error saving data:', b),
            _('Dyeing not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      j = () => {
        const h = {};
        return (
          i.fabricId || (h.fabricId = 'fabricId is required'),
          i.colorId || (h.colorId = 'colorId is required'),
          i.vendorId || (h.vendorId = 'vendorId is required'),
          i.componentId || (h.componentId = 'componentId is required'),
          i.thaanQty || (h.thaanQty = 'thaanQty is required'),
          i.workingHeadId || (h.workingHeadId = 'workingHeadId is required'),
          i.rate || (h.rate = 'rate is required'),
          i.operatingMachineId ||
            (h.operatingMachineId = 'operatingMachineId is required'),
          i.noOfStichesPerYard ||
            (h.noOfStichesPerYard = 'noOfStichesPerYard is required'),
          i.noOfItemPerThaan ||
            (h.noOfItemPerThaan = 'noOfItemPerThaan is required'),
          h
        );
      };
    console.log('formData', i);
    const S = [
      { field: 'componentName', headerName: 'Component' },
      { field: 'fabricName', headerName: 'Fabric' },
      { field: 'vendorName', headerName: 'Vendor' },
      { field: 'colourName', headerName: 'Color' },
      { field: 'thaanQty', headerName: 'Thaan Quantity' },
      { field: 'availableQty', headerName: 'Available Quantitity' },
      { field: 'operatingMachineName', headerName: 'Operating Machine' },
      { field: 'noOfHeadsName', headerName: 'Working Head' },
      { field: 'cuttingSize', headerName: 'Cutting Size' },
      { field: 'rate', headerName: 'Rate' },
      { field: 'noOfStichesPerYard', headerName: 'No. Of Stiches Per Yard' },
      { field: 'noOfItemPerThaan', headerName: 'No. Of Item Per Thaan' },
      { field: 'totalEmbroidry', headerName: 'Total Embroidry' },
      { field: 'amountPerYard', headerName: 'Amount Per Yard' },
      { field: 'totalPcs', headerName: 'Total Pcs' },
      { field: 'totalAmount', headerName: 'Total Amount' },
      { field: 'costPerComponent', headerName: 'Cost Per Component' },
      { field: 'laserCutRate', headerName: 'LaserCut Rate' },
      { field: 'pcsForLaserCut', headerName: 'Pcs.For Laser Cut' }
    ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(we, { src: at, sx: { background: 'transparent' } }),
              title: 'Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(t, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: G,
                      onChange: Q,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Ie.map((h) =>
                        e.jsx(
                          A,
                          { value: h.collectionId, children: h.collectionName },
                          h.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: i.designId,
                    onChange: Q,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((h) =>
                      e.jsx(
                        A,
                        { value: h.designId, children: h.designNo },
                        h.designId
                      )
                    )
                  })
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: i.batchNo,
                      onChange: Q,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: te.map((h) =>
                        e.jsx(
                          A,
                          { value: h.batchNo, children: h.batchNo },
                          h.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: i.baseColorName,
                    disabled: !0,
                    InputLabelProps: { sx: { color: 'black' } },
                    sx: (h) => ({
                      ...(i.baseColorName !== '' && {
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
        e.jsx(de, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Ze, {}),
              title: 'Add Schiffli ',
              titleTypographyProps: { style: { color: 'white' } },
              action: e.jsx(Se, {
                onClick: R,
                sx: { mt: '-18px' },
                children: e.jsx(Fe, { style: { color: 'white' } })
              }),
              sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            }),
            ' ',
            e.jsxs(Ke, {
              expanded: o,
              onChange: R,
              sx: {},
              children: [
                e.jsx(De, {
                  expandIcon: e.jsx(Fe, {}),
                  'aria-controls': 'panel1-content',
                  id: 'panel1-header',
                  sx: { display: 'none' }
                }),
                e.jsx($e, {
                  children: e.jsxs(t, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsxs(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: [
                          e.jsx(l, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Components',
                            name: 'componentId',
                            value: i.componentId,
                            onChange: Q,
                            size: 'small',
                            required: !0,
                            error: !!U.componentId,
                            helperText: U.componentId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: N.map((h) =>
                              e.jsx(
                                A,
                                {
                                  value: h.componentId,
                                  children: h.componentName
                                },
                                h.componentId
                              )
                            )
                          }),
                          ' '
                        ]
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Fabric',
                          defaultValue: '',
                          size: 'small',
                          name: 'fabricId',
                          value: i.fabricId,
                          onChange: Q,
                          required: !0,
                          error: !!U.fabricId,
                          helperText: U.fabricId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ge.map((h) =>
                            e.jsx(
                              A,
                              { value: h.fabricId, children: h.fabric },
                              h.fabricId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Vendors',
                          defaultValue: '',
                          size: 'small',
                          name: 'vendorId',
                          value: i.vendorId,
                          onChange: Q,
                          required: !0,
                          error: !!U.vendorId,
                          helperText: U.vendorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: z.map((h) =>
                            e.jsx(
                              A,
                              { value: h.lookUpId, children: h.lookUpName },
                              h.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Color',
                          size: 'small',
                          name: 'colorId',
                          value: i.colorId,
                          onChange: Q,
                          required: !0,
                          error: !!U.colorId,
                          helperText: U.colorId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ae.map((h) =>
                            e.jsx(
                              A,
                              { value: h.colorId, children: h.color },
                              h.colorId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Po Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: i.poPcs,
                          disabled: !0,
                          onChange: Q,
                          sx: (h) => ({
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
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Available Quantity',
                          fullWidth: !0,
                          size: 'small',
                          name: 'availableQty',
                          value: i.availableQty,
                          onChange: Q,
                          sx: (h) => ({
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
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Thaan Quantity',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'thaanQty',
                          value: i.thaanQty,
                          onChange: Q,
                          required: !0,
                          error: !!U.thaanQty,
                          helperText: U.thaanQty,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'operatingMachineId',
                          defaultValue: '',
                          size: 'small',
                          name: 'operatingMachineId',
                          value: i.operatingMachineId,
                          onChange: Q,
                          required: !0,
                          error: !!U.operatingMachineId,
                          helperText: U.operatingMachineId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: ce.map((h) =>
                            e.jsx(
                              A,
                              { value: h.lookUpId, children: h.lookUpName },
                              h.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          select: !0,
                          label: 'workingHeadId',
                          defaultValue: '',
                          size: 'small',
                          name: 'workingHeadId',
                          value: i.workingHeadId,
                          onChange: Q,
                          required: !0,
                          error: !!U.workingHeadId,
                          helperText: U.workingHeadId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: be.map((h) =>
                            e.jsx(
                              A,
                              { value: h.lookUpId, children: h.lookUpName },
                              h.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Cutting Size',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'cuttingSize',
                          value: i.cuttingSize,
                          onChange: Q,
                          sx: (h) => ({
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
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Rate',
                          type: 'number',
                          fullWidth: !0,
                          size: 'small',
                          name: 'rate',
                          value: i.rate,
                          onChange: Q,
                          required: !0,
                          error: !!U.rate,
                          helperText: U.rate,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'No. Of Stiches Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'noOfStichesPerYard',
                          value: i.noOfStichesPerYard,
                          onChange: Q,
                          required: !0,
                          error: !!U.noOfStichesPerYard,
                          helperText: U.noOfStichesPerYard,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'No. Of Items Per Thaan',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'noOfItemPerThaan',
                          value: i.noOfItemPerThaan,
                          onChange: Q,
                          required: !0,
                          error: !!U.noOfItemPerThaan,
                          helperText: U.noOfItemPerThaan,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Total Embroidry',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalEmbroidry',
                          type: 'number',
                          value: i.totalEmbroidry,
                          onChange: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Amount Per Yard',
                          fullWidth: !0,
                          type: 'number',
                          size: 'small',
                          name: 'amountPerYard',
                          value: i.amountPerYard,
                          onChange: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Total Pcs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'totalPcs',
                          value: i.totalPcs,
                          onChange: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Cost Per Component',
                          fullWidth: !0,
                          size: 'small',
                          name: 'costPerComponent',
                          value: i.costPerComponent,
                          onChange: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(l, {
                          label: 'Total Amount',
                          fullWidth: !0,
                          size: 'small',
                          type: 'number',
                          name: 'totalAmount',
                          value: i.totalAmount,
                          onChange: Q,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        md: 1.5,
                        children: e.jsx(_e, {
                          control: e.jsx(et, {
                            checked: i.laserCut,
                            onChange: ne,
                            name: 'laserCut'
                          }),
                          label: 'Laser Cut'
                        })
                      }),
                      i.laserCut
                        ? e.jsx(t, {
                            item: !0,
                            xs: 12,
                            md: 4.5,
                            children: e.jsxs(t, {
                              container: !0,
                              spacing: 1,
                              width: 'Inherit',
                              children: [
                                e.jsx(t, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(l, {
                                    label: 'Laser Cut Rate',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'laserCutRate',
                                    value: i.laserCutRate,
                                    onChange: Q,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                }),
                                e.jsx(t, {
                                  item: !0,
                                  xs: 12,
                                  md: 6,
                                  children: e.jsx(l, {
                                    label: 'Pcs For LaserCut',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'pcsForLaserCut',
                                    value: i.pcsForLaserCut,
                                    onChange: Q,
                                    InputLabelProps: { sx: { color: 'black' } }
                                  })
                                })
                              ]
                            })
                          })
                        : null,
                      e.jsx(t, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        sx: { mt: 2 },
                        children: e.jsx(ie, {
                          variant: 'contained',
                          size: 'small',
                          onClick: ve,
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
        e.jsx(t, {
          item: !0,
          xs: 12,
          md: 12,
          children: e.jsx(de, {
            sx: { height: 1, width: '100%', marginTop: 1, marginBottom: 0 }
          })
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Le, {}),
              title: 'View Schiffli ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(t, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsx(t, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: e.jsx(ke, {
                  iColumns: S,
                  initialRows: Y,
                  setInitialData: p,
                  deleteApi:
                    'https://gecxc.com:4041/api/Schiffli/DeleteSchiffiById?schiffiId=',
                  deleteBy: 'schiffiliId',
                  refetch: x,
                  setAccordionExpanded: k,
                  fileName: 'Schffili List',
                  isLoading: W
                })
              })
            })
          ]
        })
      ]
    });
  },
  Wt = wt,
  Rt = ({
    additionalProcessData: d,
    setAdditionalProcessData: _,
    refetchAdditionalProcessList: W,
    handleClickOpen: r
  }) => {
    const { user: a } = Me(),
      [p, i] = s.useState([]),
      u = p.reduce((C, f) => C + (f.quantity ?? 0), 0).toFixed(2);
    console.log('Quantity', u);
    const [o, k] = s.useState({
      additionalProcessDetId: 0,
      additionalProcessId: d.additionalProcessId || 0,
      designId: d.designNo || '',
      planningHeaderId: d.planningHeaderId || 0,
      batchNo: d.batchNo || '',
      componentName: d.componentName || '',
      componentId: d.componentId || '',
      colorName: d.colorName || '',
      colorId: d.colorId || '',
      fabricName: d.fabricName || '',
      fabricId: d.fabricId || '',
      uomId: d.uomId || '',
      uom: d.uom || '',
      vendorId: '',
      pcsPerComponent: d.pcsPerComponent || '',
      remainingPcsPerComponent: d.pcsPerComponent - u || '',
      processTypeName: d.processTypeName || '',
      processTypeId: d.processTypeId || '',
      quantity: '',
      ratePerPcs: 0,
      totalAmount: 0,
      costPerComponent: '',
      createdOn: new Date().toISOString(),
      createdBy: a.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: a.empId
    });
    s.useEffect(() => {
      k({ ...o, remainingPcsPerComponent: d.pcsPerComponent - u || '' });
    }, [p]);
    const { data: R } = Pe(),
      { data: c, refetch: F } = ht(o.additionalProcessId, {
        skip: !o.additionalProcessId
      }),
      [O, G] = s.useState([]);
    s.useEffect(() => {
      if (R) {
        const C = R.result[0];
        G(C.vendorList);
      }
    }, [R]),
      s.useEffect(() => {
        c && i(c.result.map((C, f) => ({ id: f, ...C })));
      }, [c, F]),
      console.log('initialRows', p);
    const y = (C) => {
      const { name: f, value: I } = C.target;
      k({ ...o, [f]: I });
    };
    s.useEffect(() => {
      const C = () => {
        const I = parseFloat(o.quantity) || 0,
          B = parseFloat(o.ratePerPcs) || 0;
        return (I * B).toFixed(2);
      };
      k((I) => ({ ...I, totalAmount: C() }));
      const f = () => {
        const I = parseFloat(o.totalAmount) || 0,
          B = parseFloat(o.poPcs) || 0;
        return (I / B).toFixed(2);
      };
      k((I) => ({ ...I, costPerComponent: f() }));
    }, [o.quantity, o.ratePerPcs, o.totalAmount]);
    const q = async () => {
        console.log(o);
        try {
          const C = await he.post(
            'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcessDetails',
            o
          );
          console.log('Save response:', C.data),
            F(),
            k((f) => ({
              ...f,
              vendorId: '',
              pcsPerComponent: d.pcsPerComponent || '',
              quantity: '',
              ratePerPcs: 0,
              totalAmount: 0,
              costPerComponent: '',
              createdOn: new Date().toISOString(),
              createdBy: a.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: a.empId
            })),
            W(),
            setAccordionExpanded(!1);
        } catch (C) {
          console.error('Error saving data:', C);
        }
      },
      K = [
        { field: 'vendorName', headerName: 'Vendor', flex: 2 },
        { field: 'processType', headerName: 'Process Type', flex: 1 },
        {
          field: 'pcsPerComponent',
          headerName: ' Pcs. Per Component',
          flex: 1
        },
        { field: 'quantity', headerName: 'Quantitity', flex: 1 },
        { field: 'ratePerPcs', headerName: 'Rate Per Pcs.', flex: 1 },
        { field: 'totalAmount', headerName: 'Total Amount', flex: 1 }
      ];
    return e.jsxs(Ce, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'Inherit'
      },
      children: [
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Select Design',
                name: 'designId',
                value: o.designId,
                onChange: y,
                size: 'small',
                disabled: !0,
                sx: (C) => ({
                  ...(o.designId !== '' && {
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
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Batch No.',
                  name: 'batchNo',
                  value: o.batchNo,
                  onChange: y,
                  size: 'small',
                  disabled: !0,
                  sx: (C) => ({
                    ...(o.batchNo !== '' && {
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
            e.jsxs(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                e.jsx(l, {
                  fullWidth: !0,
                  label: 'Components',
                  name: 'componentName',
                  value: o.componentName,
                  onChange: y,
                  size: 'small',
                  disabled: !0,
                  sx: (C) => ({
                    ...(o.componentName !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Select Fabric',
                defaultValue: '',
                size: 'small',
                name: 'fabricName',
                value: o.fabricName,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.fabricName !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Color',
                size: 'small',
                name: 'colorName',
                value: o.colorName,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.colorName !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                label: 'Process Type',
                defaultValue: '',
                size: 'small',
                name: 'processTypeName',
                value: o.processTypeName,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.processTypeName !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'pcsPerComponent',
                value: o.pcsPerComponent,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.pcsPerComponent !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(l, {
                label: 'Remaining Pcs. Per Component',
                fullWidth: !0,
                size: 'small',
                name: 'remainingPcsPerComponent',
                value: o.remainingPcsPerComponent,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.remainingPcsPerComponent !== '' && {
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
        e.jsx(de, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                fullWidth: !0,
                select: !0,
                label: 'Vendors',
                size: 'small',
                name: 'vendorId',
                value: o.vendorId,
                onChange: y,
                InputLabelProps: { sx: { color: 'black' } },
                children: O.map((C) =>
                  e.jsx(
                    A,
                    { value: C.lookUpId, children: C.lookUpName },
                    C.lookUpId
                  )
                )
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Quantity',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'quantity',
                value: o.quantity,
                onChange: y,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Rate Per Pcs',
                type: 'number',
                fullWidth: !0,
                size: 'small',
                name: 'ratePerPcs',
                value: o.ratePerPcs,
                onChange: y,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'Total Amount',
                fullWidth: !0,
                type: 'number',
                size: 'small',
                name: 'totalAmount',
                value: o.totalAmount,
                onChange: y,
                InputLabelProps: { sx: { color: 'black' } }
              })
            }),
            e.jsx(t, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(l, {
                label: 'UOM',
                fullWidth: !0,
                size: 'small',
                name: 'uom',
                value: o.uom,
                onChange: y,
                disabled: !0,
                sx: (C) => ({
                  ...(o.uom !== '' && {
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
            e.jsx(t, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(ie, {
                variant: 'contained',
                size: 'small',
                onClick: q,
                children: 'Save'
              })
            })
          ]
        }),
        e.jsx(de, { color: '#921e22', sx: { height: 2, width: '100%' } }),
        e.jsx(t, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsx(t, {
            sx: { marginTop: 2 },
            item: !0,
            xs: 12,
            children: e.jsx(ke, {
              iColumns: K,
              initialRows: p,
              deleteApi:
                'https://gecxc.com:4041/api/AdditionalProcess/DeleteAdditionalProcessDetails?apdId=',
              deleteBy: 'additionalProcessDetId',
              refetch: F,
              disableEdit: !0
            })
          })
        })
      ]
    });
  },
  Ht = () => {
    const { user: d } = Me(),
      [_, W] = s.useState(!0),
      [r, a] = s.useState([]),
      [p, i] = s.useState({
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
    console.log('initialData', r),
      s.useEffect(() => {
        i({
          additionalProcessId:
            (r == null ? void 0 : r.additionalProcessId) || 0,
          designId: (r == null ? void 0 : r.designId) || '',
          planningHeaderId: (r == null ? void 0 : r.planningHeaderId) || 0,
          batchNo: (r == null ? void 0 : r.batchNo) || '',
          componentId: (r == null ? void 0 : r.componentId) || '',
          fabricId: (r == null ? void 0 : r.fabricId) || '',
          colorId: (r == null ? void 0 : r.colorId) || '',
          poPcs: (r == null ? void 0 : r.poPcs) || '',
          baseColorName: (r == null ? void 0 : r.baseColorName) || '',
          pcsPerComponent: (r == null ? void 0 : r.pcsPerComponent) || '',
          uomId: (r == null ? void 0 : r.uomId) || '',
          processTypeId: (r == null ? void 0 : r.processTypeId) || '',
          createdOn:
            (r == null ? void 0 : r.createdOn) || new Date().toISOString(),
          createdBy: (r == null ? void 0 : r.createdBy) || d.empId,
          lastUpdatedOn: new Date().toISOString(),
          LastUpdatedBy: d.empId
        });
      }, [r]);
    const [u, o] = s.useState(!1),
      { data: k } = Ne(),
      [R, c] = s.useState(''),
      { data: F } = Pe(),
      { data: O, refetch: G } = Ae(R, { skip: !R }),
      { data: y, refetch: q } = ze(p.designId, { skip: !p.designId }),
      { data: K } = We(
        { batchNo: p.planningHeaderId, componentId: p.componentId },
        { skip: !p.planningHeaderId || !p.componentId }
      ),
      { data: J } = Re(
        {
          batchNo: p.planningHeaderId,
          componentId: p.componentId,
          fabricId: p.fabricId
        },
        { skip: !p.planningHeaderId || !p.componentId || !p.fabricId }
      ),
      { data: C, refetch: f } = gt(p.planningHeaderId, {
        skip: !p.planningHeaderId
      }),
      { data: I } = He(p.planningHeaderId, { skip: !p.planningHeaderId });
    console.log('lookupData', F),
      console.log('collectionData', k),
      console.log('colorData', J);
    const [B, H] = s.useState([]),
      [x, M] = s.useState([]),
      [E, oe] = s.useState([]),
      [te, re] = s.useState([]),
      [ge, v] = s.useState([]),
      [z, Z] = s.useState([]),
      [ce, ue] = s.useState([]),
      [be, ee] = s.useState([]),
      [ae, V] = s.useState([]),
      [Y, L] = s.useState([]),
      [N, se] = s.useState([]);
    console.log('batchData', y),
      s.useEffect(() => {
        O && H(O.result);
      }, [O]),
      s.useEffect(() => {
        y && M(y.result);
      }, [y]),
      s.useEffect(() => {
        K && oe(K.result);
      }, [K]),
      s.useEffect(() => {
        J && V(J.result);
      }, [J]),
      s.useEffect(() => {
        I && se(I.result);
      }, [I]),
      s.useEffect(() => {
        if (F) {
          const m = F.result[0];
          v(m.uomList), Z(m.processList);
        }
      }, [F]),
      s.useEffect(() => {
        C && (W(!1), L(C.result.map((m, P) => ({ id: P, ...m }))));
      }, [C, f]),
      s.useEffect(() => {
        if (F) {
          const m = F.result[0];
          re(m.vendorList), ue(m.operatingMachineList), ee(m.workingHeadList);
        }
      }, [F]),
      console.log('initialRows', Y);
    const Ie = (k == null ? void 0 : k.result) || [],
      ne = (m) => {
        const { name: P, value: n } = m.target;
        if (P === 'collectionId')
          Ie.find((g) => g.collectionId === parseInt(n)),
            c(n),
            L([]),
            W(!0),
            i({
              ...p,
              collectionId: n,
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
        else if (P === 'designId') {
          const g = B.find((T) => T.designId === parseInt(n));
          L([]),
            W(!0),
            i({
              ...p,
              designId: n,
              baseColorId: g ? g.colorId : '',
              baseColorName: g ? g.colorName : '',
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
        } else if (P === 'batchNo') {
          const g = x.find((T) => T.batchNo === n);
          i({
            ...p,
            batchNo: n,
            planningHeaderId: g ? g.planningHeaderId : '',
            poPcs: g ? g.poPcs : '',
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
            o(!0);
        } else i({ ...p, [P]: n });
      };
    console.log('colors', ae);
    const Q = async () => {
      console.log('formData', p);
      try {
        const m = await he.post(
          'https://gecxc.com:4041/api/AdditionalProcess/SaveAdditionalProcess',
          p
        );
        console.log('Save response:', m.data),
          i((P) => ({
            additionalProcessId: 0,
            designId: P.designId,
            planningHeaderId: P.planningHeaderId,
            batchNo: P.batchNo,
            baseColorName: P.baseColorName,
            poPcs: P.poPcs,
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
          f();
      } catch (m) {
        console.error('Error saving data:', m);
      }
    };
    console.log('formData', p),
      s.forwardRef(function (P, n) {
        return e.jsx(bt, { direction: 'up', ref: n, ...P });
      });
    const [U, xe] = s.useState({}),
      [ve, j] = s.useState(!1),
      S = (m) => {
        xe(m), j(!0);
      },
      D = () => {
        j(!1), xe({}), f();
      },
      h = [
        { field: 'designNo', headerName: 'Design' },
        { field: 'batchNo', headerName: 'Batch' },
        { field: 'componentName', headerName: 'Component' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'processTypeName', headerName: 'Process Type' },
        { field: 'pcsPerComponent', headerName: 'Pcs Per Component' },
        { field: 'assignedQty', headerName: 'Assigned Quantity' },
        {
          field: 'AddVendor',
          headerName: 'Add Vendor',
          renderCell: (m) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(Se, {
                color: 'primary',
                onClick: () => S(m.row),
                children: e.jsx(Ye, {})
              })
            })
        }
      ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(we, { src: at, sx: { background: 'transparent' } }),
              title: 'Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(t, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Collection',
                      name: 'collectionId',
                      value: R,
                      onChange: ne,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: Ie.map((m) =>
                        e.jsx(
                          A,
                          { value: m.collectionId, children: m.collectionName },
                          m.collectionId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Design',
                    name: 'designId',
                    value: p.designId,
                    onChange: ne,
                    size: 'small',
                    InputLabelProps: { sx: { color: 'black' } },
                    children: B.map((m) =>
                      e.jsx(
                        A,
                        { value: m.designId, children: m.designNo },
                        m.designId
                      )
                    )
                  })
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Batch No.',
                      name: 'batchNo',
                      value: p.batchNo,
                      onChange: ne,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: x.map((m) =>
                        e.jsx(
                          A,
                          { value: m.batchNo, children: m.batchNo },
                          m.batchNo
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    label: 'Base Color',
                    fullWidth: !0,
                    size: 'small',
                    name: 'baseColorName',
                    value: p.baseColorName,
                    onChange: ne,
                    disabled: !0,
                    sx: (m) => ({
                      ...(p.baseColorName !== '' && {
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
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 12,
                  children: [
                    e.jsx(de, {
                      color: '#921e22',
                      sx: { height: 2, width: '100%' }
                    }),
                    ' '
                  ]
                }),
                e.jsxs(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: [
                    e.jsx(l, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Components',
                      name: 'componentId',
                      value: p.componentId,
                      onChange: ne,
                      size: 'small',
                      InputLabelProps: { sx: { color: 'black' } },
                      children: N.map((m) =>
                        e.jsx(
                          A,
                          { value: m.componentId, children: m.componentName },
                          m.componentId
                        )
                      )
                    }),
                    ' '
                  ]
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Select Fabric',
                    defaultValue: '',
                    size: 'small',
                    name: 'fabricId',
                    value: p.fabricId,
                    onChange: ne,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: E.map((m) =>
                      e.jsx(
                        A,
                        { value: m.fabricId, children: m.fabric },
                        m.fabricId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Color',
                    size: 'small',
                    name: 'colorId',
                    value: p.colorId,
                    onChange: ne,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ae.map((m) =>
                      e.jsx(
                        A,
                        { value: m.colorId, children: m.color },
                        m.colorId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Po Pcs',
                    fullWidth: !0,
                    size: 'small',
                    name: 'poPcs',
                    value: p.poPcs,
                    onChange: ne,
                    disabled: !0,
                    sx: (m) => ({
                      ...(p.poPcs !== '' && {
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
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 1.5,
                  children: e.jsx(l, {
                    label: 'Pcs. Per Component',
                    fullWidth: !0,
                    size: 'small',
                    name: 'pcsPerComponent',
                    value: p.pcsPerComponent,
                    onChange: ne,
                    InputLabelProps: { sx: { color: 'black' } }
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'UOM',
                    type: 'number',
                    defaultValue: 140,
                    size: 'small',
                    name: 'uomId',
                    value: p.uomId,
                    onChange: ne,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: ge.map((m) =>
                      e.jsx(
                        A,
                        { value: m.lookUpId, children: m.lookUpName },
                        m.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(l, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    size: 'small',
                    name: 'processTypeId',
                    value: p.processTypeId,
                    onChange: ne,
                    InputLabelProps: { sx: { color: 'black' } },
                    children: z.map((m) =>
                      e.jsx(
                        A,
                        { value: m.lookUpId, children: m.lookUpName },
                        m.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(t, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 0 },
                  children: e.jsx(ie, {
                    variant: 'contained',
                    size: 'small',
                    onClick: Q,
                    children: 'Save'
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(de, {
          color: '#cc8587',
          sx: { height: 1, width: '100%', mt: 2 }
        }),
        e.jsxs(pe, {
          variant: 'outlined',
          children: [
            e.jsx(me, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(Le, {}),
              title: 'View Additional Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(t, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(t, {
                sx: { marginTop: 2 },
                item: !0,
                xs: 12,
                children: [
                  e.jsx(ke, {
                    iColumns: h,
                    initialRows: Y,
                    setInitialData: a,
                    deleteApi:
                      'https://gecxc.com:4041/api/AdditionalProcess/DeleteAdditionalProcess?adId=',
                    deleteBy: 'additionalProcessId',
                    refetch: f,
                    setAccordionExpanded: o,
                    fileName: 'AdditionalProcess',
                    isLoading: _
                  }),
                  e.jsxs(Qe, {
                    open: ve,
                    onClose: D,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(Ue, {
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
                          e.jsx(ye, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Assign Vendors '
                          }),
                          e.jsx(Se, {
                            onClick: D,
                            sx: { color: '#ffffff' },
                            children: e.jsx(Ge, {})
                          })
                        ]
                      }),
                      e.jsxs(qe, {
                        children: [
                          e.jsx(Ee, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Rt, {
                            additionalProcessData: U,
                            setAdditionalProcessData: xe,
                            refetchAdditionalProcessList: f,
                            handleClickOpen: S
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
  Qt = Ht;
function Ut({}) {
  const [d, _] = s.useState(!0),
    { data: W } = Pe(),
    [r, a] = s.useState([]),
    [p, i] = s.useState([]),
    [u, o] = s.useState([]),
    [k, R] = s.useState([]),
    [c, F] = s.useState([]);
  Me(),
    s.useEffect(() => {
      W &&
        (o(W.result[0].vendorList),
        i(W.result[0].serviceList),
        a(W.result[0].serviceTypeList),
        F(W.result[0].uomList));
    }, [W]);
  const [O, G] = s.useState({
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
    }),
    y = async (I) => {
      const { name: B, value: H } = I.target;
      if (
        (console.log(`Updating ${B} to ${H}`),
        G({ ...O, [B]: H }),
        B === 'collectionId')
      ) {
        const x = k.find((M) => M.collectionId === H);
        x && G((M) => ({ ...M, poPcs: x.poPcs }));
      }
    };
  s.useEffect(() => {
    const I = () => {
      const H = parseFloat(O.qty) || 0,
        x = parseFloat(O.rate) || 0;
      return (H * x).toFixed(2);
    };
    G((H) => ({ ...H, totalAmount: I() }));
    const B = () => {
      const H = parseFloat(O.poPcs) || 0,
        x = parseFloat(O.totalAmount) || 0;
      return (H / x).toFixed(2);
    };
    G((H) => ({ ...H, costperPiece: B() }));
  }, [O.qty, O.rate, O.totalAmount, O.costperPiece]);
  const q = async () => {
    try {
      const I = await he.post(
        'https://gecxc.com:4041/api/AdditionalServices/SaveAdditionalServices',
        O
      );
      console.log('Form data saved:', I.data),
        G({
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
    } catch (I) {
      console.error('Error saving data:', I);
    }
  };
  s.useEffect(() => {
    (async () => {
      try {
        const B = await he.get(
          'https://gecxc.com:4041/api/CollectionRegistration/GetCollectionList?appId=1'
        );
        console.log('GetCollectionFromPlanningHeader', B), R(B.data.result);
      } catch (B) {
        console.error('Error fetching design options:', B);
      }
    })();
  }, []);
  const [K, J] = s.useState([]),
    C = s.useCallback(async () => {
      try {
        const I = await he.get(
          `https://gecxc.com:4041/api/AdditionalServices/GetAdditionalServicesListByCollectionId?collectionId=${O.collectionId}`
        );
        Array.isArray(I.data.result)
          ? (_(!1), J(I.data.result.map((B, H) => ({ id: H, ...B }))))
          : (console.error(
              'API returned unexpected data format:',
              I.data.result
            ),
            J([]));
      } catch (I) {
        console.error('Error fetching data:', I), J([]);
      }
    }, [O.collectionId]);
  s.useEffect(() => {
    C();
  }, [C]);
  const f = [
    { field: 'collectionName', headerName: 'Collection Name', flex: 1 },
    { field: 'serviceType', headerName: 'Service Type', flex: 1 },
    { field: 'serviceListName', headerName: 'Service List Name', flex: 1 },
    { field: 'vendor', headerName: 'Vendor', flex: 1 },
    { field: 'poPcs', headerName: 'PO Pieces' },
    { field: 'qty', headerName: 'Quantity' },
    { field: 'uom', headerName: 'UOM' },
    { field: 'rate', headerName: 'Rate' },
    { field: 'totalAmount', headerName: 'Total Amount' },
    { field: 'costperPiece', headerName: 'Cost per Piece' }
  ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(pe, {
        variant: 'outlined',
        children: [
          e.jsx(me, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsxs(t, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(t, {
                item: !0,
                xs: 12,
                md: 4,
                children: e.jsx(l, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Select Collection',
                  name: 'collectionId',
                  value: O.collectionId,
                  onChange: y,
                  size: 'small',
                  InputLabelProps: { sx: { color: 'black' } },
                  children:
                    k.length > 0
                      ? k.map((I) =>
                          e.jsx(
                            A,
                            {
                              id: 'collectionId',
                              value: I.collectionId,
                              children: I.collectionName
                            },
                            I.collectionId
                          )
                        )
                      : e.jsx(A, {
                          disabled: !0,
                          children: 'No Collections Available'
                        })
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service Type',
                  name: 'serviceTypeId',
                  value: O.serviceTypeId,
                  onChange: y,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: r.map((I) =>
                    e.jsx(
                      A,
                      { value: I.lookUpId, children: I.lookUpName },
                      I.lookUpId
                    )
                  )
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 4,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-select-option',
                  select: !0,
                  label: 'Service List Id',
                  name: 'serviceListId',
                  value: O.serviceListId,
                  onChange: y,
                  variant: 'outlined',
                  size: 'small',
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: p.map((I) =>
                    e.jsx(
                      A,
                      { value: I.lookUpId, children: I.lookUpName },
                      I.lookUpId
                    )
                  )
                })
              }),
              e.jsx(t, {
                item: !0,
                xs: 12,
                md: 4,
                children: e.jsx(l, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Vendor Name',
                  size: 'small',
                  name: 'vendorId',
                  value: O.vendorId,
                  onChange: y,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: u.map((I) =>
                    e.jsx(
                      A,
                      { value: I.lookUpId, children: I.lookUpName },
                      I.lookUpId
                    )
                  )
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-required',
                  label: "PO PC's",
                  name: 'poPcs',
                  value: O.poPcs,
                  onChange: y,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  disabled: !0,
                  sx: (I) => ({
                    ...(O.poPcs !== '' && {
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
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-required',
                  label: 'Qty',
                  name: 'qty',
                  value: O.qty,
                  onChange: y,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  fullWidth: !0,
                  select: !0,
                  label: 'UOM',
                  defaultValue: '',
                  size: 'small',
                  name: 'uomId',
                  value: O.uomId,
                  onChange: y,
                  InputLabelProps: { sx: { color: 'black' } },
                  children: c.map((I) =>
                    e.jsx(
                      A,
                      { value: I.lookUpId, children: I.lookUpName },
                      I.lookUpId
                    )
                  )
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-required',
                  label: 'Rate',
                  name: 'rate',
                  value: O.rate,
                  onChange: y,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-required',
                  label: 'Total Amount',
                  name: 'totalAmount',
                  value: O.totalAmount,
                  onChange: y,
                  type: 'number',
                  size: 'small',
                  fullWidth: !0,
                  required: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 2,
                width: 'inherit',
                paddingX: 1,
                children: e.jsx(l, {
                  id: 'outlined-required',
                  label: 'Cost per Piece',
                  name: 'costperPiece',
                  value: O.costperPiece,
                  onChange: y,
                  type: 'number',
                  size: 'small',
                  required: !0,
                  fullWidth: !0,
                  InputLabelProps: { sx: { color: 'black' } }
                })
              }),
              e.jsx(t, {
                item: !0,
                md: 12,
                width: 'inherit',
                paddingX: 1,
                textAlign: 'right',
                children: e.jsx(ie, {
                  variant: 'contained',
                  color: 'primary',
                  size: 'small',
                  onClick: q,
                  children: 'Save'
                })
              })
            ]
          })
        ]
      }),
      e.jsx(de, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      e.jsxs(pe, {
        variant: 'outlined',
        children: [
          e.jsx(me, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'View Additional Services',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsx(ke, { iColumns: f, initialRows: K, isLoading: d })
        ]
      })
    ]
  });
}
const Be = [
  'Pre Planning',
  'Fabrication',
  'Dyeing/Printing  ',
  'Embroidery ',
  'Schiffli',
  'Additional Process',
  'Additional Services'
];
function _t() {
  const [d, _] = s.useState(0),
    [W, r] = s.useState(new Set()),
    [a, p] = s.useState(null),
    [i, u] = s.useState([]),
    { enqueueSnackbar: o } = Oe(),
    { data: k, refetch: R } = Pe(),
    c = (M) => {
      p(M.currentTarget);
    },
    F = () => {
      p(null);
    },
    O = !!a,
    G = O ? 'simple-popover' : void 0,
    y = (M) => M === 1,
    q = (M) => W.has(M),
    K = () => {
      let M = W;
      q(d) && ((M = new Set(M.values())), M.delete(d)), _((E) => E + 1), r(M);
    },
    J = () => {
      _((M) => M - 1);
    },
    C = () => {
      if (!y(d)) throw new Error("You can't skip a step that isn't optional.");
      _((M) => M + 1),
        r((M) => {
          const E = new Set(M.values());
          return E.add(d), E;
        });
    },
    f = () => {
      _(0);
    },
    [I, B] = s.useState({
      lookUpId: '',
      lookUpName: '',
      lookUpDomain: '',
      lookUpCategory: '',
      enabled: '',
      createdOn: new Date().toISOString()
    }),
    H = async () => {
      if (!I.lookUpDomain || !I.lookUpName) {
        o('Please fill in all required fields.', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const M = await he.get(
          `https://gecxc.com:4041/api/Common/SaveLookUp?lookupDomain=${I.lookUpDomain}&LookUpName=${I.lookUpName}&appId=1`
        );
        return (
          console.log('Form data saved:', M.data),
          o('Lookup saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
          B({
            lookUpId: '',
            lookUpName: '',
            lookUpDomain: '',
            lookUpCategory: '',
            enabled: '',
            createdOn: new Date().toISOString()
          }),
          R(),
          M.data
        );
      } catch (M) {
        throw (
          (console.error('Error saving data:', M),
          o('Error saving data. Please try again.', {
            variant: 'error',
            autoHideDuration: 5e3
          }),
          M)
        );
      }
    },
    x = (M) => {
      B({ ...I, [M.target.name]: M.target.value });
    };
  return (
    s.useEffect(() => {
      (async () => {
        try {
          const E = await he.get(
            'https://gecxc.com:4041/api/Common/GetLookUpDomains?appId=1'
          );
          console.log('LookupData', E), u(E.data.result);
        } catch (E) {
          console.error('Error fetching design options:', E);
        }
      })();
    }, []),
    e.jsxs(Ce, {
      sx: { width: '100%' },
      children: [
        e.jsxs(t, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          children: [
            e.jsx(t, {
              item: !0,
              sm: 6,
              children: e.jsx(ye, {
                variant: 'h2',
                gutterBottom: !0,
                children: 'Planning Process'
              })
            }),
            e.jsxs(t, {
              item: !0,
              sm: 6,
              textAlign: 'right',
              children: [
                e.jsx(ie, {
                  'aria-describedby': G,
                  variant: 'outlined',
                  size: 'small',
                  onClick: c,
                  children: '+Lookup'
                }),
                e.jsx(yt, {
                  id: 'mouse-over-popover',
                  open: O,
                  anchorEl: a,
                  onClose: F,
                  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                  transformOrigin: { vertical: 'top', horizontal: 'right' },
                  sx: {
                    '.MuiPopover-paper': { width: '300px', padding: '16px' }
                  },
                  children: e.jsxs(t, {
                    container: !0,
                    spacing: 3,
                    width: 'Inherit',
                    children: [
                      e.jsx(t, {
                        item: !0,
                        sm: 12,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          id: 'outlined-select-currency',
                          select: !0,
                          label: 'Select Lookup',
                          size: 'small',
                          value: I.lookUpDomain,
                          name: 'lookUpDomain',
                          onChange: x,
                          children: i.map((M) =>
                            e.jsx(
                              A,
                              {
                                value: M.lookUpDomain,
                                children: M.lookUpDomain
                              },
                              M.lookUpDomain
                            )
                          )
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        sm: 12,
                        children: e.jsx(l, {
                          fullWidth: !0,
                          label: 'Add Lookup Description',
                          value: I.lookUpName,
                          onChange: x,
                          name: 'lookUpName',
                          size: 'small'
                        })
                      }),
                      e.jsx(t, {
                        item: !0,
                        sm: 3,
                        textAlign: 'right',
                        children: e.jsx(ie, {
                          variant: 'contained',
                          size: 'small',
                          onClick: H,
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
        e.jsx(It, {
          activeStep: d,
          children: Be.map((M, E) => {
            const oe = {},
              te = {};
            return (
              y(E) &&
                (te.optional = e.jsx(ye, {
                  variant: 'caption',
                  children: 'Optional'
                })),
              q(E) && (oe.completed = !1),
              e.jsx(
                xt,
                {
                  ...oe,
                  children: e.jsxs(ft, {
                    ...te,
                    onClick: () => _(E),
                    style: { cursor: 'pointer' },
                    children: [' ', M]
                  })
                },
                M
              )
            );
          })
        }),
        e.jsxs(Ce, {
          sx: { display: 'flex', flexDirection: 'row', pt: 2 },
          children: [
            e.jsx(ie, {
              color: 'inherit',
              disabled: d === 0,
              onClick: J,
              sx: { mr: 1 },
              children: 'Back'
            }),
            e.jsx(Ce, { sx: { flex: '1 1 auto' } }),
            y(d) &&
              e.jsx(ie, {
                color: 'inherit',
                onClick: C,
                sx: { mr: 1 },
                children: 'Skip'
              }),
            e.jsx(ie, {
              onClick: K,
              children: d === Be.length - 1 ? 'Finish' : 'Next'
            })
          ]
        }),
        d === Be.length
          ? e.jsxs(s.Fragment, {
              children: [
                e.jsx(ye, {
                  sx: { mt: 2, mb: 1 },
                  children: "All steps completed - you're finished"
                }),
                e.jsxs(Ce, {
                  sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                  children: [
                    e.jsx(Ce, { sx: { flex: '1 1 auto' } }),
                    e.jsx(ie, { onClick: f, children: 'Reset' })
                  ]
                })
              ]
            })
          : e.jsxs(s.Fragment, {
              children: [
                d === 0 && e.jsx(Bt, {}),
                d === 1 && e.jsx(Ct, {}),
                d === 2 && e.jsx(zt, {}),
                d === 3 && e.jsx(At, {}),
                d === 4 && e.jsx(Wt, {}),
                d === 5 && e.jsx(Qt, {}),
                d === 6 && e.jsx(Ut, {}),
                e.jsxs(Ce, {
                  sx: { display: 'flex', flexDirection: 'row', pt: 2 },
                  children: [
                    e.jsx(ie, {
                      color: 'inherit',
                      disabled: d === 0,
                      onClick: J,
                      sx: { mr: 1 },
                      children: 'Back'
                    }),
                    e.jsx(Ce, { sx: { flex: '1 1 auto' } }),
                    y(d) &&
                      e.jsx(ie, {
                        color: 'inherit',
                        onClick: C,
                        sx: { mr: 1 },
                        children: 'Skip'
                      }),
                    e.jsx(ie, {
                      onClick: K,
                      children: d === Be.length - 1 ? 'Finish' : 'Next'
                    })
                  ]
                })
              ]
            })
      ]
    })
  );
}
export { _t as default };