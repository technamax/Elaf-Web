import {
  c as Pe,
  u as pe,
  x as bt,
  ar as lt,
  a2 as It,
  j as e,
  B as ie,
  G as s,
  ah as St,
  T as E,
  s as nt,
  as as it,
  b as dt,
  at as ct,
  J as ut,
  p as ft,
  au as mt,
  av as ht,
  aw as xt,
  C as De,
  d as we,
  e as J,
  D as pt,
  ax as Ct,
  ay as Dt,
  az as wt,
  aa as Nt,
  M as Pt
} from './index-CzwspkkF.js';
import { r, R as Ce } from './vendor-BXCbSo2_.js';
import { d as Tt } from './AddCircleOutlineOutlined-BaHny51-.js';
import { d as Se } from './AssignmentOutlined-BFpRNIkb.js';
import {
  u as Ue,
  D as qe,
  R as xe,
  a as Z,
  b as ee,
  c as te,
  d as ae,
  B as He
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { B as W, a as Ne, I as re } from './axios-lonJZgKi.js';
import { d as se } from './Close-BQBfEc69.js';
import Ge from './Reports-CL7Yzt2u.js';
import { S as le } from './StatusChip-C_oGlGq1.js';
import { d as gt } from './VisibilityOutlined-D9xuAg3y.js';
import { T as m } from './TextField-Djr8gt34.js';
import { M as $ } from './MenuItem-ZWEe2ZC6.js';
import './Receive-Dy1jfxAA.js';
import { T as kt, a as Ft, b as me, c as he } from './TabPanel-Cg-Z_Qr2.js';
import './Skeleton-DdLL8d67.js';
const yt = ({ vId: d, handleClose: b }) => {
    const [j, g] = r.useState([]),
      [B, x] = r.useState([]),
      v = Ue(),
      { enqueueSnackbar: u } = Pe(),
      { user: z } = pe(),
      [C, l] = r.useState([]),
      [I, U] = r.useState([]),
      [A, n] = r.useState({
        categoryId: 0,
        vendorId: d.vendorId,
        poId: d.poId
      }),
      { data: N } = bt(),
      { refetch: q } = lt(d.poId, { skip: !d.poId }),
      { data: k, refetch: M } = It(
        { vId: d.vendorId, categoryId: A.categoryId },
        { skip: !d || !A.categoryId }
      );
    r.useEffect(() => {
      N && l(N.result.map((h, w) => ({ id: w + 1, ...h })));
    }, [N]),
      console.log('columnsData', k),
      r.useEffect(() => {
        if ((k == null ? void 0 : k.result) === null) {
          U([]);
          return;
        }
        k != null &&
          k.result &&
          U(
            k.result
              .filter((h) => !B.some((w) => w.id === h.id))
              .map((h, w) => ({ id: w + 1, ...h }))
          );
      }, [k, B, M]);
    const Y = (h) => {
        const { name: w, value: L } = h.target;
        n({ ...A, [w]: L });
      },
      f = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'termCondDesc', headerName: 'Terms and Conditions', flex: 1 }
      ],
      S = () => {
        v.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    Ce.useEffect(() => {
      S();
    });
    const [o, y] = r.useState([]),
      F = Ce.useCallback(
        (h) => {
          g(h);
          const w = h
            .map((L) => {
              const _ = v.current.getRow(L);
              return (
                console.log('rowData', _),
                _
                  ? {
                      ..._,
                      vendorPoId: 0,
                      poId: 0,
                      appId: z.appId,
                      createdOn: new Date().toISOString(),
                      createdBy: z.empId,
                      lastUpdatedOn: new Date().toISOString(),
                      lastUpdatedBy: z.empId
                    }
                  : null
              );
            })
            .filter((L) => L !== null);
          console.log('selectedDesigns', w), y(w);
        },
        [v]
      );
    r.useEffect(() => {
      I.filter((h) => j.includes(h.id)),
        n((h) => ({ ...h, vendorPoAssignTermsList: o }));
    }, [I, j]),
      console.log('formData', A),
      Ce.useEffect(() => {
        v.current && console.log('API ref is ready:', v.current);
      }, [v]),
      console.log('selectedDesigns:', o);
    const Q = async () => {
      if (o.length === 0) {
        u('No terms are selected. Please select at least one term.', {
          variant: 'warning',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const h = await Ne.post(
          'http://100.42.177.77:81/api/PO/AssignTermToDyeingPo',
          A
        );
        h.data.success
          ? (u(`${h.data.message} !`, {
              variant: 'success',
              autoHideDuration: 5e3
            }),
            x((w) => [...w, ...o]))
          : u(`${h.data.message} !`, {
              variant: 'error',
              autoHideDuration: 5e3
            }),
          q(),
          b();
      } catch (h) {
        console.error('Error saving data:', h),
          u('FAILED: Unable to start Process', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    return e.jsx(ie, {
      noValidate: !0,
      component: 'form',
      sx: {
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        mt: 2,
        width: 'Inherit'
      },
      children: e.jsxs(s, {
        container: !0,
        spacing: 2,
        width: 'Inherit',
        children: [
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(m, {
              fullWidth: !0,
              label: 'Vendor',
              name: 'vendorId',
              value: d.vendorName,
              disabled: !0,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(m, {
              fullWidth: !0,
              select: !0,
              label: 'Category',
              name: 'categoryId',
              value: A.categoryId,
              onChange: Y,
              size: 'small',
              children: C.map((h) =>
                e.jsx(
                  $,
                  { value: h.categoryId, children: h.description },
                  h.categoryId
                )
              )
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx('div', {
              style: { height: 400, width: '100%' },
              children: e.jsx(qe, {
                rows: I,
                columns: f,
                apiRef: v,
                disableRowSelectionOnClick: !0,
                checkboxSelection: !0,
                onRowSelectionModelChange: F,
                rowSelectionModel: j
              })
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            textAlign: 'right',
            sx: { mt: 2 },
            children: e.jsx(W, {
              variant: 'contained',
              size: 'small',
              onClick: Q,
              children: 'Assign Terms'
            })
          })
        ]
      })
    });
  },
  jt = ({ vId: d }) => {
    const [b, j] = r.useState([]),
      [g, B] = r.useState([]),
      { data: x, refetch: v } = St(d.poId, { skip: !d.poId }),
      { data: u, refetch: z } = lt(d.poId, { skip: !d.poId });
    r.useEffect(() => {
      if ((x == null ? void 0 : x.result) === null) {
        j([]);
        return;
      }
      x && j(x.result.map((f, S) => ({ id: S + 1, ...f })));
    }, [x, v]),
      r.useEffect(() => {
        if ((u == null ? void 0 : u.result) === null) {
          B([]);
          return;
        }
        if (u) {
          const f = u.result.reduce(
            (S, o) =>
              S.find((F) => F.termCondDesc === o.termCondDesc)
                ? S
                : S.concat([o]),
            []
          );
          B(f.map((S, o) => ({ id: o + 1, ...S })));
        }
      }, [u, z]),
      console.log('vId', d);
    const [C, l] = r.useState(0),
      [I, U] = r.useState(0),
      [A, n] = r.useState(0),
      [N, q] = r.useState(0);
    r.useEffect(() => {
      const f = b.reduce((F, Q) => F + (Q.planningQty ?? 0), 0).toFixed(2),
        S = b.reduce((F, Q) => F + (Q.quantity ?? 0), 0).toFixed(2),
        o = b.reduce((F, Q) => F + (Q.totalBeforeTax ?? 0), 0).toFixed(2),
        y = b.reduce((F, Q) => F + (Q.totalAfterTax ?? 0), 0).toFixed(2);
      l(parseFloat(f).toLocaleString()),
        U(parseFloat(S).toLocaleString()),
        n(parseFloat(o).toLocaleString()),
        q(parseFloat(y).toLocaleString());
    }, [b]);
    const k = [
        ...b,
        {
          id: 'TOTAL_SUMMARY',
          planningQty: C,
          quantity: I,
          totalBeforeTax: A,
          totalAfterTax: N
        }
      ],
      M = [
        {
          field: 'id',
          headerName: 'Sr#',
          colSpan: (f, S) => (S.id === 'TOTAL_SUMMARY' ? 4 : void 0),
          renderCell: (f) =>
            f.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: 'black', fontWeight: 'bold' },
                  children: 'Total Summary'
                })
              : f.value
        },
        { field: 'designNo', headerName: 'Design' },
        { field: 'baseColor', headerName: 'Base Color' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'vendorName', headerName: 'Vendor' },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'planningQty',
          headerName: 'Planned Qty',
          renderCell: (f) =>
            f.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: f.value
                })
              : f.value.toLocaleString()
        },
        {
          field: 'quantity',
          headerName: 'Assigned Qty',
          renderCell: (f) =>
            f.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: f.value
                })
              : f.value.toLocaleString()
        },
        { field: 'rate', headerName: 'Rate' },
        { field: 'tax', headerName: 'Tax' },
        {
          field: 'totalBeforeTax',
          headerName: 'Total',
          valueGetter: (f) => f.toLocaleString(),
          renderCell: (f) =>
            f.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: f.value
                })
              : f.value
        },
        {
          field: 'totalAfterTax',
          headerName: 'Total After Tax',
          valueGetter: (f) => f.toLocaleString(),
          renderCell: (f) =>
            f.row.id === 'TOTAL_SUMMARY'
              ? e.jsx('span', {
                  style: { color: '#a11f23', fontWeight: 'bold' },
                  children: f.value
                })
              : f.value
        }
      ],
      Y = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'termCondDesc', headerName: 'Terms and Conditions' }
      ];
    return (
      console.log('assignedTerms', g),
      e.jsxs('div', {
        children: [
          e.jsxs(s, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Production',
                  name: 'productionId',
                  value: d.collectionName,
                  size: 'small'
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Process Type',
                  name: 'productionId',
                  value: d.processTypeName,
                  size: 'small'
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  size: 'small',
                  label: 'Issuance Date',
                  name: 'issuanceDate',
                  value: new Date(d.issuanceDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                  }),
                  fullWidth: !0,
                  disabled: !0,
                  InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  size: 'small',
                  label: 'Planning Date',
                  name: 'expectedReturnDate',
                  value: new Date(d.expectedReturnDate).toLocaleDateString(
                    'en-GB',
                    { day: 'numeric', month: 'short', year: '2-digit' }
                  ),
                  fullWidth: !0,
                  disabled: !0,
                  InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Fabric',
                  name: 'fabricId',
                  value: d.fabricName,
                  size: 'small'
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Vendor',
                  name: 'vendorId',
                  value: d.vendorName,
                  size: 'small'
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 1.5,
                children: e.jsx(m, {
                  label: 'Shrinkage',
                  fullWidth: !0,
                  disabled: !0,
                  size: 'small',
                  name: 'shrinkage',
                  value: d.shrinkage,
                  required: !0
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 1.5,
                children: e.jsx(m, {
                  label: 'Wastage',
                  fullWidth: !0,
                  disabled: !0,
                  size: 'small',
                  name: 'wastage',
                  value: d.wastage,
                  required: !0
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Location',
                  name: 'locationId',
                  value: d.fullLocation,
                  size: 'small'
                })
              })
            ]
          }),
          e.jsxs(s, {
            container: !0,
            spacing: 2,
            width: 'Inherit',
            children: [
              e.jsx(s, {
                item: !0,
                xs: 12,
                children: e.jsx(E, { variant: 'h2', children: 'Details' })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                children: e.jsx(xe, {
                  initialRows: k,
                  iColumns: M,
                  hideAction: !0,
                  pageSize: 10
                })
              })
            ]
          }),
          e.jsxs(s, {
            container: !0,
            spacing: 2,
            width: 'Inherit',
            children: [
              e.jsx(s, {
                item: !0,
                xs: 12,
                children: e.jsx(E, {
                  variant: 'h2',
                  children: 'Terms and Conditions'
                })
              }),
              e.jsx(s, {
                item: !0,
                xs: 12,
                children: e.jsx(xe, {
                  initialRows: g,
                  iColumns: Y,
                  hideAction: !0,
                  pageSize: 10
                })
              })
            ]
          })
        ]
      })
    );
  },
  st = nt(m)(({ theme: d }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  Ot = () => {
    var D, V, fe;
    const [d, b] = r.useState([]),
      j = Ue(),
      { enqueueSnackbar: g } = Pe(),
      B = it(),
      [x, v] = r.useState([]),
      { user: u } = pe(),
      [z, C] = r.useState([]),
      [l, I] = r.useState(!1),
      [U, A] = r.useState(new Set()),
      [n, N] = r.useState({
        poId: 0,
        productionId: '',
        issuanceDate: new Date().toISOString().slice(0, 10),
        expectedReturnDate: '',
        processTypeId: '',
        fabricId: '',
        pxQty: 0,
        vendorId: '',
        shrinkage: '',
        wastage: '',
        rate: 0,
        tax: 0,
        locationId: '',
        remarks: '',
        appId: u.appId,
        createdOn: new Date().toISOString(),
        createdBy: u.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: u.empId
      }),
      [q, k] = r.useState([]),
      [M, Y] = r.useState([]),
      [f, S] = r.useState([]),
      [o, y] = r.useState([]),
      { data: F, refetch: Q } = dt(),
      { data: h, refetch: w } = ct(
        { productionId: n.productionId, status: 7 },
        { skip: !n.productionId }
      ),
      { data: L, refetch: _ } = ut(),
      { data: X, refetch: Te } = ft(),
      { data: p, refetch: G } = mt(n.productionId, { skip: !n.productionId }),
      { data: ne, refetch: Me } = ht(n.fabricId, { skip: !n.fabricId }),
      { data: de, refetch: ke } = xt(
        { fabricId: n.fabricId, productionId: n.productionId },
        { skip: !n.fabricId || !n.productionId }
      ),
      [Ve, H] = r.useState([]);
    r.useEffect(() => {
      F &&
        H(
          F.result[0].productionProcessList
            .filter((t) => t.lookUpId === 1223 || t.lookUpId === 1224)
            .map((t, i) => ({ id: i, ...t }))
        );
    }, [F]);
    const [Ye, $e] = r.useState([]);
    r.useEffect(() => {
      h && k(h.result.map((t, i) => ({ id: i + 1, ...t })));
    }, [h, w]),
      r.useEffect(() => {
        p && Y(p.result.map((t, i) => ({ id: i + 1, ...t })));
      }, [p, G]),
      r.useEffect(() => {
        de && v(de.result.map((t, i) => ({ id: i + 1, ...t })));
      }, [de, ke]),
      r.useEffect(() => {
        ne && S(ne.result.map((t, i) => ({ id: i + 1, ...t })));
      }, [ne, Me]),
      r.useEffect(() => {
        X && y(X.result.map((t, i) => ({ id: i + 1, ...t })));
      }, [X]),
      r.useEffect(() => {
        L && $e(L.result.map((t, i) => ({ id: i, ...t })));
      }, [L, _]);
    const ge = x.reduce((t, i) => t + (i.availableQty ?? 0), 0).toFixed(2),
      Xe = x.reduce((t, i) => t + (i.quantity ?? 0), 0).toFixed(2),
      Fe = x.reduce((t, i) => t + (i.prevoiusPoQty ?? 0), 0).toFixed(2);
    r.useEffect(() => {
      N((t) => ({ ...n, overallQty: ge }));
    }, [v, x]),
      r.useEffect(() => {
        N((t) => ({
          ...n,
          overallQty: ge,
          remainingQuantity: (t.overallQty - Fe - Xe).toFixed(2) || 0
        }));
      }, [v, x]),
      console.log('initialRows', q),
      console.log('poHeaderData', h);
    const R = (t) => {
        const { name: i, value: T } = t.target;
        if (i === 'vendorId') {
          const O = f.find((K) => K.vendorId === parseInt(T));
          N({
            ...n,
            vendorId: T,
            shrinkage: O ? O.shrinkage : '',
            wastage: O ? O.wastage : ''
          });
        } else if (i === 'fabricId') {
          const O = M.find((K) => K.fabricId === parseInt(T));
          N({
            ...n,
            fabricId: T,
            pxQty: O ? O.pxQty : 0,
            vendorId: '',
            shrinkage: '',
            wastage: ''
          });
        } else N({ ...n, [i]: T });
      },
      Oe = async () => {
        if (d.length === 0) {
          g('Please select at least one row before saving!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
          return;
        }
        console.log('formData', n);
        try {
          const t = await Ne.post(
            'http://100.42.177.77:81/api/PO/SavePOHeader',
            { ...n }
          );
          console.log('Save response:', t.data),
            t.data.success
              ? (g('Data saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                }),
                A((i) => new Set([...i, ...d])),
                N({
                  ...n,
                  issuanceDate: '',
                  expectedReturnDate: '',
                  fabricId: '',
                  processTypeId: '',
                  vendorId: '',
                  shrinkage: '',
                  wastage: '',
                  locationId: '',
                  appId: u.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: u.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: u.empId
                }),
                v([]),
                w(),
                b([]),
                ke(),
                I(!1))
              : g(`Save failed: ${t.data.message}`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                });
        } catch (t) {
          console.error('Error saving data:', t),
            g('Failed to save data. Please try again.', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('formData', n);
    const [_e, Qe] = r.useState(!1),
      [ye, je] = r.useState(!1),
      [ve, Ae] = r.useState(!1),
      Le = async (t) => {
        Ae(t), Qe(!0);
      },
      Ke = async (t) => {
        je(!0), Ae(t);
      };
    console.log('terms condition', ve);
    const be = () => {
        Qe(!1);
      },
      ze = () => {
        je(!1);
      },
      Re = (t) => {
        B('/Production/Issuance', { state: { data: t, tab: 1 } });
      },
      [Je, ce] = r.useState(!1),
      [Ze, et] = r.useState(!1),
      tt = async (t) => {
        et(t), ce(!0);
      },
      Be = () => {
        ce(!1);
      },
      at = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'poIdName', headerName: 'PO ID' },
        { field: 'collectionName', headerName: 'Collection Name' },
        {
          field: 'processTypeName',
          headerName: 'Process',
          renderCell: (t) =>
            e.jsx(J, {
              label: t.row.processTypeName,
              sx: { backgroundColor: '#1e88e5', color: '#FFFFFF' }
            })
        },
        { field: 'fabricName', headerName: 'Fabric Name' },
        { field: 'vendorName', headerName: 'Vendor' },
        {
          field: 'createdOn',
          headerName: 'PO Date',
          valueGetter: (t) =>
            new Date(t).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'issuanceDate',
          headerName: 'Issuance Date',
          valueGetter: (t) =>
            new Date(t).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'expectedReturnDate',
          headerName: 'Expected Return Date',
          valueGetter: (t) =>
            new Date(t).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'fabricCount', headerName: 'Fabrics' },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (t) =>
            e.jsx(le, { label: t.row.statusName, status: 'Pending' })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (t) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(He, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => Le(t.row),
                    children: 'Assign Terms'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => Ke(t.row),
                    children: 'View'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => Re(t.row),
                    children: 'Issuance'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => tt(t.row),
                    children: 'PO Report'
                  })
                ]
              })
            })
        }
      ];
    r.useEffect(() => {
      v(
        x.map((t) => ({
          ...t,
          rate: n.rate,
          tax: n.tax,
          totalBeforeTax: n.rate * t.quantity,
          totalAfterTax:
            n.rate * t.quantity + n.rate * t.quantity * (n.tax / 100)
        }))
      );
    }, [n.rate, n.tax]);
    const ue = r.useCallback(
        (t) => {
          const { id: i, field: T, value: O } = t;
          console.log('Editing cell:', t),
            v((K) =>
              K.map((rt) => {
                if (rt.id === i) {
                  const oe = {
                    ...rt,
                    [T]: O,
                    poId: 0,
                    poDetId: 0,
                    appId: u.appId,
                    createdOn: new Date().toISOString(),
                    createdBy: u.empId,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: u.empId
                  };
                  return (
                    T === 'quantity' &&
                      ((oe.totalBeforeTax = oe.rate * oe.quantity),
                      (oe.totalAfterTax =
                        oe.totalBeforeTax +
                        oe.totalBeforeTax * (oe.tax / 100))),
                    T === 'quantity' &&
                      O > 0 &&
                      b((Ie) => (Ie.includes(i) ? Ie : [...Ie, i])),
                    T === 'quantity' &&
                      (O === '' || O === 0) &&
                      b((Ie) => Ie.filter((vt) => vt !== i)),
                    oe
                  );
                }
                return rt;
              })
            );
        },
        [v, u.appId, u.empId, n.rate]
      ),
      We = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        {
          field: 'availableQty',
          headerName: 'Planned Qty',
          valueGetter: (t) => t.toLocaleString(),
          renderCell: (t) =>
            e.jsx(le, {
              label: t.row.availableQty.toLocaleString(),
              status: 'Inspected'
            })
        },
        {
          field: 'prevoiusPoQty',
          headerName: 'Prevoius PO.Qty',
          valueGetter: (t) => t.toLocaleString(),
          renderCell: (t) =>
            e.jsx(le, {
              label: t.row.prevoiusPoQty.toLocaleString(),
              status: 'Received'
            })
        },
        {
          field: 'remaining',
          headerName: 'Remaining Qty',
          valueGetter: (t, i) =>
            (i.availableQty - i.prevoiusPoQty).toLocaleString(),
          renderCell: (t) => {
            const i = t.row.availableQty - t.row.prevoiusPoQty;
            return e.jsx(J, {
              label: i.toLocaleString(),
              sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
            });
          }
        },
        {
          field: 'quantity',
          headerName: 'Assigned Qty',
          renderCell: (t) =>
            e.jsx(st, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.quantity || '',
              onChange: (i) =>
                ue({
                  id: t.id,
                  field: 'quantity',
                  value: Number(i.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'totalBeforeTax',
          headerName: 'Total',
          renderCell: (t) => {
            const T = (t.row.totalBeforeTax || 0).toLocaleString();
            return e.jsx(st, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: T,
              onChange: (O) => {
                const K = Number(O.target.value.replace(/,/g, ''));
                ue({ id: t.id, field: 'totalBeforeTax', value: K });
              },
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        },
        {
          field: 'totalAfterTax',
          headerName: 'Total After Tax',
          renderCell: (t) => {
            const T = (t.row.totalAfterTax || 0).toLocaleString();
            return e.jsx(st, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: T,
              onChange: (O) => {
                const K = Number(O.target.value.replace(/,/g, ''));
                ue({ id: t.id, field: 'totalAfterTax', value: K });
              },
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        }
      ],
      Ee = () => {
        j.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    r.useEffect(() => {
      Ee();
    });
    const [a, c] = r.useState([]),
      P = r.useCallback(
        (t) => {
          b(t);
          const i = t
            .map((T) => {
              const O = j.current.getRow(T);
              return console.log('rowData', O), O ? { ...O } : null;
            })
            .filter((T) => T !== null);
          console.log('selectedDesigns', i), c(i);
        },
        [j]
      );
    return (
      r.useEffect(() => {
        const t = x.filter((i) => d.includes(i.id));
        N((i) => ({ ...i, dyeingPoDetailsList: t }));
      }, [x, d]),
      console.log('fabrics', x),
      r.useEffect(() => {
        j.current && console.log('API ref is ready:', j.current);
      }, [j]),
      console.log('selectedDesigns:', a),
      e.jsxs(ie, {
        sx: { width: '100%', typography: 'body1' },
        children: [
          e.jsxs(De, {
            variant: 'outlined',
            children: [
              e.jsx(we, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                title: 'Dyeing Production Order',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              e.jsxs(s, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Production',
                      name: 'productionId',
                      value: n.productionId,
                      onChange: R,
                      size: 'small',
                      children: Ye.map((t) =>
                        e.jsx(
                          $,
                          { value: t.productionId, children: t.collectionName },
                          t.productionId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Process Type',
                      name: 'processTypeId',
                      value: n.processTypeId,
                      onChange: R,
                      size: 'small',
                      children: Ve.map((t) =>
                        e.jsx(
                          $,
                          { value: t.lookUpId, children: t.lookUpName },
                          t.lookUpId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'PO Date',
                      name: 'issuanceDate',
                      value: n.issuanceDate,
                      onChange: R,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'Expected Return',
                      name: 'expectedReturnDate',
                      value: n.expectedReturnDate,
                      onChange: R,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Fabric',
                      name: 'fabricId',
                      value: n.fabricId,
                      onChange: R,
                      size: 'small',
                      children: M.map((t) =>
                        e.jsx(
                          $,
                          { value: t.fabricId, children: t.fabricName },
                          t.fabricId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Vendor',
                      name: 'vendorId',
                      value: n.vendorId,
                      onChange: R,
                      size: 'small',
                      children: f.map((t) =>
                        e.jsx(
                          $,
                          { value: t.vendorId, children: t.vendorName },
                          t.vendorId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Shrinkage',
                      fullWidth: !0,
                      size: 'small',
                      name: 'shrinkage',
                      disabled: !0,
                      onChange: R,
                      value: n.shrinkage,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Wastage',
                      fullWidth: !0,
                      size: 'small',
                      name: 'wastage',
                      disabled: !0,
                      onChange: R,
                      value: n.wastage,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Rate',
                      type: 'number',
                      fullWidth: !0,
                      size: 'small',
                      name: 'rate',
                      onChange: R,
                      value: n.rate,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Tax',
                      fullWidth: !0,
                      type: 'number',
                      size: 'small',
                      name: 'tax',
                      onChange: R,
                      value: n.tax,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Location',
                      name: 'locationId',
                      value: n.locationId,
                      onChange: R,
                      size: 'small',
                      children: o.map((t) =>
                        e.jsx(
                          $,
                          {
                            value: t.locationId,
                            children:
                              t.section +
                              '.' +
                              t.aisle +
                              '.' +
                              t.rack +
                              '.' +
                              t.bin
                          },
                          t.locationId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      label: 'Remarks',
                      fullWidth: !0,
                      size: 'small',
                      name: 'remarks',
                      onChange: R,
                      value: n.remarks,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    children: e.jsxs(E, {
                      variant: 'overline',
                      sx: {
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: 15
                      },
                      children: [
                        'Assign Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (D = n.pxQty) == null ? void 0 : D.toLocaleString(),
                          sx: { backgroundColor: '#008000', color: '#FFFFFF' }
                        }),
                        '| planned Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (V = Number(n.overallQty)) == null
                              ? void 0
                              : V.toLocaleString(),
                          sx: { backgroundColor: '#0000FF', color: '#FFFFFF' }
                        }),
                        ' ',
                        '| Remaining Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (fe = n.remainingQuantity) == null
                              ? void 0
                              : fe.toLocaleString(),
                          sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
                        })
                      ]
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    children: e.jsx('div', {
                      style: { height: 'auto', width: '100%' },
                      children: e.jsx(qe, {
                        rows: x,
                        columns: We,
                        pageSize: 10,
                        apiRef: j,
                        disableRowSelectionOnClick: !0,
                        checkboxSelection: !0,
                        isRowSelectable: (t) =>
                          t.row.prevoiusPoQty < t.row.availableQty &&
                          t.row.prevoiusPoQty !== t.row.availableQty,
                        onRowSelectionModelChange: P,
                        rowSelectionModel: d
                      })
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    children: e.jsx(W, {
                      variant: 'contained',
                      size: 'small',
                      onClick: Oe,
                      disabled: x.every(
                        (t) => t.prevoiusPoQty >= t.availableQty
                      ),
                      children: 'Save'
                    })
                  })
                ]
              }),
              ' '
            ]
          }),
          e.jsx(pt, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          }),
          e.jsxs(De, {
            variant: 'outlined',
            children: [
              e.jsx(we, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(gt, {}),
                title: 'Assign TCs & Issuance',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              e.jsx(s, {
                container: !0,
                spacing: 2,
                width: 'Inherit',
                children: e.jsxs(s, {
                  item: !0,
                  xs: 12,
                  children: [
                    e.jsx(xe, {
                      initialRows: q,
                      iColumns: at,
                      pageSize: 10,
                      setInitialData: C,
                      hideAction: !0
                    }),
                    e.jsxs(Z, {
                      open: _e,
                      onClose: be,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
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
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'Assign Terms  And Conditions'
                            }),
                            e.jsx(re, {
                              onClick: be,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(yt, { vId: ve, handleClose: be })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(Z, {
                      open: ye,
                      onClose: ze,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
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
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'View Production Order'
                            }),
                            e.jsx(re, {
                              onClick: ze,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(jt, { vId: ve })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(Z, {
                      open: Je,
                      onClose: Be,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
                          sx: {
                            backgroundColor: '#A11F23',
                            color: '#ffffff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingX: '24px',
                            paddingY: '4px',
                            mb: 2.5
                          },
                          children: [
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'Inspection'
                            }),
                            e.jsx(re, {
                              onClick: Be,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(Ge, {
                              rId: 20,
                              PO: { ParamPoIdName: Ze.poIdName }
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),
              ' '
            ]
          })
        ]
      })
    );
  },
  Qt = nt(m)(({ theme: d }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  At = ({ rData: d, handleClose: b, refetch: j, shortage: g }) => {
    var S;
    const [B, x] = r.useState({ ...d }),
      v = Ue(),
      { enqueueSnackbar: u } = Pe(),
      { user: z } = pe(),
      [C, l] = r.useState([]),
      { data: I, refetch: U } = Ct(d.poId, { skip: !d.poId });
    r.useEffect(() => {
      if ((I == null ? void 0 : I.result) === null) {
        l([]);
        return;
      }
      I &&
        l(
          I.result.map((o, y) => ({
            id: y + 1,
            ...o,
            dnId: 0,
            remarks: '',
            total: o.rate * o.shortFall,
            appId: z.appId,
            createdOn: new Date().toISOString(),
            createdBy: z.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: z.empId
          }))
        );
    }, [I, U]),
      console.log('rData', d);
    const A = (o) => {
      const { id: y, field: F, value: Q } = o;
      console.log('Editing cell:', o),
        l((h) =>
          h.map((w) =>
            w.id === y
              ? {
                  ...w,
                  [F]: Q,
                  dnId: 0,
                  appId: z.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: z.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: z.empId
                }
              : w
          )
        );
    };
    Ce.useEffect(() => {
      x({ ...C[0] });
    }, [C, l]),
      console.log('formData', B),
      console.log('debitNote', C),
      console.log('shortage', g);
    const n = async (o) => {
        console.log('rowadata', o);
        try {
          const y = await Ne.post(
            'http://100.42.177.77:81/api/PO/SaveDebitNote',
            o
          );
          y.data.success
            ? u(`${y.data.message} !`, {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (u(`${y.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', y.data.message)),
            U(),
            j(),
            console.log('Save response:', y.data);
        } catch (y) {
          console.error('Error saving data:', y),
            u('FAILED: Unable to start Process', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      N = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'shortFall',
          headerName: 'Quantity',
          valueGetter: (o) => (o ? Number(o.toFixed(2)).toLocaleString() : '0')
        },
        { field: 'rate', headerName: 'Rate' },
        {
          field: 'total',
          headerName: 'Total',
          renderCell: (o) =>
            Number((o.row.rate * o.row.shortFall).toFixed(2)).toLocaleString()
        },
        {
          field: 'remarks',
          headerName: 'Remarks',
          renderCell: (o) =>
            e.jsx(Qt, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: o.row.remarks || '',
              onKeyDown: (y) => {
                console.log('Key down: ', y.key), y.stopPropagation();
              },
              onChange: (y) =>
                A({ id: o.id, field: 'remarks', value: y.target.value }),
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (o) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(He, {
                variant: 'text',
                size: 'small',
                sx: { mt: 1 },
                children: e.jsx(W, {
                  size: 'small',
                  color: 'primary',
                  onClick: () => n(o.row),
                  disabled: o.row.dnExist === 1,
                  children: 'Debit Note'
                })
              })
            })
        }
      ],
      q = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'fabricName', headerName: 'Fabric' },
        {
          field: 'expectedQty',
          headerName: 'Expected',
          valueGetter: (o) => (o ? Number(o.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'receivedQty',
          headerName: 'Received',
          valueGetter: (o) => (o ? Number(o.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'grnaQty',
          headerName: 'Grade A',
          valueGetter: (o) => (o ? o.toLocaleString() : '0')
        },
        {
          field: 'short',
          headerName: 'ShortFall',
          valueGetter: (o, y) =>
            y
              ? Number(y.expectedQty - y.grnaQty.toFixed(2)).toLocaleString()
              : '0'
        }
      ],
      [k, M] = r.useState(null);
    r.useEffect(() => {
      M(C.some((o) => o.dnExist === 0));
    }, [I, U, C]);
    const Y = () => {
      v.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
    };
    Ce.useEffect(() => {
      Y();
    }),
      console.log(
        'db.dnExist',
        (S = C[0]) == null ? void 0 : S.dnExist,
        'disable:',
        k
      );
    const f = async () => {
      try {
        const o = await Ne.post(
          `http://100.42.177.77:81/api/PO/ClosePO?poId=${d.poId}`
        );
        o.data.success
          ? u(`${o.data.message} !`, {
              variant: 'success',
              autoHideDuration: 5e3
            })
          : (u(`${o.data.message} !`, {
              variant: 'error',
              autoHideDuration: 5e3
            }),
            console.log('response.message', o.data.message)),
          j(),
          console.log('Save response:', o.data);
      } catch (o) {
        console.error('Error saving data:', o),
          u('FAILED: Unable to start Process', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    return e.jsx('div', {
      children: e.jsxs(s, {
        container: !0,
        spacing: 1,
        width: 'Inherit',
        sx: { paddingY: 2, paddingX: 2 },
        children: [
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(m, {
              fullWidth: !0,
              disabled: !0,
              label: 'Production',
              name: 'production',
              value: d.collectionName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(m, {
              fullWidth: !0,
              disabled: !0,
              label: 'PO #',
              name: 'poIdName',
              value: d.poIdName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(m, {
              fullWidth: !0,
              disabled: !0,
              label: 'Vendor',
              name: 'vendorId',
              value: d.vendorName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 3,
            textAlign: 'left',
            sx: { mt: 0.5 },
            children: e.jsx(W, {
              variant: 'contained',
              size: 'small',
              onClick: f,
              disabled: k,
              children: 'CLose'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx(E, { variant: 'h2', children: 'ShortFall' })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx(xe, { initialRows: g, iColumns: q, hideAction: !0 })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx(E, { variant: 'h2', children: 'Details' })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx(ie, {
              sx: {
                height: 'auto',
                width: 'inherit',
                '& .actions': { color: 'text.secondary' },
                '& .textPrimary': { color: 'text.primary' },
                '& .bold': { fontWeight: 600 }
              },
              children: e.jsx(qe, {
                rows: C,
                columns: N,
                apiRef: v,
                disableRowSelectionOnClick: !0
              })
            })
          })
        ]
      })
    });
  },
  Lt = () => {
    Pe();
    const { user: d } = pe(),
      [b, j] = r.useState({
        issuanceId: '',
        poId: '',
        processTypeId: '',
        ogpNumber: '',
        appId: d.appId,
        createdOn: new Date().toISOString(),
        createdBy: d.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: d.empId
      }),
      [g, B] = r.useState([]),
      [x, v] = r.useState([]),
      [u, z] = r.useState([]),
      [C, l] = r.useState(!1),
      { data: I, refetch: U } = dt(),
      { data: A, refetch: n } = Dt(b.processTypeId, { skip: !b.processTypeId }),
      { data: N, refetch: q } = wt(C.poId, { skip: !(C != null && C.poId) }),
      [k, M] = r.useState([]);
    r.useEffect(() => {
      I &&
        M(I.result[0].productionProcessList.map((p, G) => ({ id: G, ...p })));
    }, [I]),
      r.useEffect(() => {
        N && z(N.result.map((p, G) => ({ id: G + 1, ...p })));
      }, [N, q]),
      r.useEffect(() => {
        A && B(A.result.map((p, G) => ({ id: G + 1, ...p })));
      }, [A, n]),
      console.log('polist', x),
      console.log('iss', C),
      console.log('shortfall', u),
      console.log('initialRows', g);
    const Y = (p) => {
      const { name: G, value: ne } = p.target;
      j({ ...b, [G]: ne });
    };
    console.log('formData', b);
    const [f, S] = r.useState(!1),
      [o, y] = r.useState(!1),
      F = async (p) => {
        l(p), S(!0);
      },
      Q = () => {
        S(!1);
      },
      h = () => {
        y(!1);
      },
      [w, L] = r.useState(!1),
      _ = async (p) => {
        l(p), L(!0);
      },
      X = () => {
        L(!1);
      },
      Te = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'poIdName', headerName: 'PO#' },
        { field: 'collectionName', headerName: 'Production' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'vendorName', headerName: 'Vendor' },
        {
          field: 'issuanceDate',
          headerName: 'PO Date',
          valueGetter: (p) =>
            new Date(p).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'expectedReturnDate',
          headerName: 'Expected Return',
          valueGetter: (p) =>
            new Date(p).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'processTypeName', headerName: 'Process' },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (p) => e.jsx(le, { label: p.value, status: p.value })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (p) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(He, {
                variant: 'text',
                size: 'small',
                sx: { mt: 1 },
                children: [
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => F(p.row),
                    disabled: p.row.status === 3,
                    children: 'PO Close'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => _(p.row),
                    children: 'PO Report'
                  })
                ]
              })
            })
        }
      ];
    return e.jsx(ie, {
      sx: { width: '100%', typography: 'body1' },
      children: e.jsxs(De, {
        variant: 'outlined',
        children: [
          e.jsx(we, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'PO Summary',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsxs(s, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(s, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(m, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Process Type',
                  name: 'processTypeId',
                  value: b.processTypeId,
                  onChange: Y,
                  size: 'small',
                  children: k.map((p) =>
                    e.jsx(
                      $,
                      { value: p.lookUpId, children: p.lookUpName },
                      p.lookUpId
                    )
                  )
                })
              }),
              e.jsxs(s, {
                item: !0,
                xs: 12,
                children: [
                  e.jsx(xe, { initialRows: g, iColumns: Te, hideAction: !0 }),
                  e.jsxs(Z, {
                    open: f,
                    onClose: Q,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ee, {
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
                          e.jsx(E, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'PO Close'
                          }),
                          e.jsx(re, {
                            onClick: Q,
                            sx: { color: '#ffffff' },
                            children: e.jsx(se, {})
                          })
                        ]
                      }),
                      e.jsxs(te, {
                        children: [
                          e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                          e.jsx(At, {
                            rData: C,
                            handleClose: Q,
                            refetch: n,
                            shortage: u
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(Z, {
                    open: o,
                    onClose: h,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ee, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px',
                          mb: 2.5
                        },
                        children: [
                          e.jsx(E, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Create OGP'
                          }),
                          e.jsx(re, {
                            onClick: h,
                            sx: { color: '#ffffff' },
                            children: e.jsx(se, {})
                          })
                        ]
                      }),
                      e.jsxs(te, {
                        children: [
                          e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Ge, { rId: 14, OGPNumber: C.igpNumber })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(Z, {
                    open: w,
                    onClose: X,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ee, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingX: '24px',
                          paddingY: '4px',
                          mb: 2.5
                        },
                        children: [
                          e.jsx(E, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'PO Report'
                          }),
                          e.jsx(re, {
                            onClick: X,
                            sx: { color: '#ffffff' },
                            children: e.jsx(se, {})
                          })
                        ]
                      }),
                      e.jsxs(te, {
                        children: [
                          e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Ge, {
                            rId: 21,
                            POSummary: { dsPoList: C.poId }
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  },
  ot = nt(m)(({ theme: d }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  zt = () => {
    var ue, We, Ee;
    const [d, b] = r.useState([]),
      j = Ue(),
      { enqueueSnackbar: g } = Pe(),
      B = it(),
      [x, v] = r.useState([]),
      { user: u } = pe(),
      [z, C] = r.useState(new Set()),
      [l, I] = r.useState({
        poId: 0,
        productionId: '',
        issuanceDate: new Date().toISOString().slice(0, 10),
        expectedReturnDate: '',
        processTypeId: 1224,
        fabricId: '',
        pxQty: 0,
        vendorId: '',
        shrinkage: '',
        wastage: '',
        rate: 0,
        tax: 0,
        locationId: '',
        remarks: '',
        appId: u.appId,
        createdOn: new Date().toISOString(),
        createdBy: u.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: u.empId
      }),
      [U, A] = r.useState([]),
      [n, N] = r.useState([]),
      [q, k] = r.useState([]),
      [M, Y] = r.useState([]),
      { data: f, refetch: S } = ct(
        { productionId: l.productionId, status: 7 },
        { skip: !l.productionId }
      ),
      { data: o, refetch: y } = ut(),
      { data: F, refetch: Q } = Nt(),
      { data: h, refetch: w } = ft(),
      { data: L, refetch: _ } = mt(l.productionId, { skip: !l.productionId }),
      { data: X, refetch: Te } = ht(l.fabricId, { skip: !l.fabricId }),
      { data: p, refetch: G } = xt(
        { fabricId: l.fabricId, productionId: l.productionId },
        { skip: !l.fabricId || !l.productionId }
      ),
      [ne, Me] = r.useState([]);
    r.useEffect(() => {
      f && (S(), A(f.result.map((a, c) => ({ id: c + 1, ...a }))));
    }, [f, S]),
      r.useEffect(() => {
        L && N(L.result.map((a, c) => ({ id: c + 1, ...a })));
      }, [L, _]),
      r.useEffect(() => {
        p && v(p.result.map((a, c) => ({ id: c + 1, ...a })));
      }, [p, G]),
      r.useEffect(() => {
        X && k(X.result.map((a, c) => ({ id: c + 1, ...a })));
      }, [X, Te]),
      r.useEffect(() => {
        h && Y(h.result.map((a, c) => ({ id: c + 1, ...a })));
      }, [h]),
      r.useEffect(() => {
        o && Me(o.result.map((a, c) => ({ id: c, ...a })));
      }, [o, y]);
    const de = x.reduce((a, c) => a + (c.availableQty ?? 0), 0).toFixed(2),
      ke = x.reduce((a, c) => a + (c.quantity ?? 0), 0).toFixed(2),
      Ve = x.reduce((a, c) => a + (c.prevoiusPoQty ?? 0), 0).toFixed(2);
    r.useEffect(() => {
      I((a) => ({ ...l, overallQty: de }));
    }, [v, x]),
      r.useEffect(() => {
        I((a) => ({
          ...l,
          overallQty: de,
          remainingQuantity: (a.overallQty - Ve - ke).toFixed(2) || 0
        }));
      }, [v, x]),
      console.log('initialRows', U),
      console.log('poHeaderData', f);
    const H = (a) => {
        const { name: c, value: P } = a.target;
        if (c === 'vendorId') {
          const D = q.find((V) => V.vendorId === parseInt(P));
          I({
            ...l,
            vendorId: P,
            shrinkage: D ? D.shrinkage : '',
            wastage: D ? D.wastage : ''
          });
        } else if (c === 'fabricId') {
          const D = n.find((V) => V.fabricId === parseInt(P));
          I({
            ...l,
            fabricId: P,
            pxQty: D ? D.pxQty : 0,
            vendorId: '',
            shrinkage: '',
            wastage: ''
          });
        } else I({ ...l, [c]: P });
      },
      Ye = async () => {
        if (d.length === 0) {
          g('Please select at least one row before saving!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
          return;
        }
        console.log('formData', l);
        try {
          const a = await Ne.post(
            'http://100.42.177.77:81/api/PO/SavePOHeader',
            { ...l }
          );
          console.log('Save response:', a.data),
            Q(),
            S(),
            a.data.success
              ? (g('Data saved successfully!', {
                  variant: 'success',
                  autoHideDuration: 5e3
                }),
                C((c) => new Set([...c, ...d])),
                I({
                  ...l,
                  issuanceDate: '',
                  expectedReturnDate: '',
                  fabricId: '',
                  processTypeId: 1223,
                  vendorId: '',
                  shrinkage: '',
                  wastage: '',
                  locationId: '',
                  appId: u.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: u.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: u.empId
                }),
                v([]),
                Q(),
                S(),
                b([]),
                G(),
                setIsEdit(!1))
              : g(`Save failed: ${a.data.message}`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                });
        } catch (a) {
          console.error('Error saving data:', a),
            g('Failed to save data. Please try again.', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('formData', l);
    const [$e, ge] = r.useState(!1),
      [Xe, Fe] = r.useState(!1),
      [R, Oe] = r.useState(!1),
      _e = async (a) => {
        Oe(a), ge(!0);
      },
      Qe = async (a) => {
        Fe(!0), Oe(a);
      };
    console.log('terms condition', R);
    const ye = () => {
        ge(!1);
      },
      je = () => {
        Fe(!1);
      },
      ve = (a) => {
        B('/Production/Issuance', { state: { data: a, tab: 1 } });
      },
      [Ae, Le] = r.useState(!1),
      [Ke, be] = r.useState(!1),
      ze = async (a) => {
        be(a), Le(!0);
      },
      Re = () => {
        Le(!1);
      },
      Je = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'poIdName', headerName: 'PO ID' },
        { field: 'collectionName', headerName: 'Collection Name' },
        { field: 'fabricName', headerName: 'Fabric Name' },
        { field: 'vendorName', headerName: 'Vendor' },
        {
          field: 'createdOn',
          headerName: 'PO Date',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'issuanceDate',
          headerName: 'Issuance Date',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'expectedReturnDate',
          headerName: 'Expected Return Date',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'fabricCount', headerName: 'Fabrics' },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (a) =>
            e.jsx(le, { label: a.row.statusName, status: 'Pending' })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (a) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(He, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => _e(a.row),
                    children: 'Assign Terms'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => Qe(a.row),
                    children: 'View'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => ve(a.row),
                    children: 'Issuance'
                  }),
                  e.jsx(W, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => ze(a.row),
                    children: 'PO Report'
                  })
                ]
              })
            })
        }
      ];
    r.useEffect(() => {
      v(
        x.map((a) => ({
          ...a,
          rate: l.rate,
          tax: l.tax,
          totalBeforeTax: l.rate * a.quantity,
          totalAfterTax:
            l.rate * a.quantity + l.rate * a.quantity * (l.tax / 100)
        }))
      );
    }, [l.rate, l.tax]);
    const ce = r.useCallback(
        (a) => {
          const { id: c, field: P, value: D } = a;
          console.log('Editing cell:', a),
            v((V) =>
              V.map((fe) => {
                if (fe.id === c) {
                  const t = {
                    ...fe,
                    [P]: D,
                    poId: 0,
                    poDetId: 0,
                    appId: u.appId,
                    createdOn: new Date().toISOString(),
                    createdBy: u.empId,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: u.empId
                  };
                  return (
                    P === 'quantity' &&
                      ((t.totalBeforeTax = t.rate * t.quantity),
                      (t.totalAfterTax =
                        t.totalBeforeTax + t.totalBeforeTax * (t.tax / 100))),
                    P === 'quantity' &&
                      D > 0 &&
                      b((i) => (i.includes(c) ? i : [...i, c])),
                    P === 'quantity' &&
                      (D === '' || D === 0) &&
                      b((i) => i.filter((T) => T !== c)),
                    t
                  );
                }
                return fe;
              })
            );
        },
        [v, u.appId, u.empId, l.rate]
      ),
      Ze = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        {
          field: 'availableQty',
          headerName: 'Planned Qty',
          valueGetter: (a) => a.toLocaleString(),
          renderCell: (a) =>
            e.jsx(le, {
              label: a.row.availableQty.toLocaleString(),
              status: 'Inspected'
            })
        },
        {
          field: 'prevoiusPoQty',
          headerName: 'Prevoius PO.Qty',
          valueGetter: (a) => a.toLocaleString(),
          renderCell: (a) =>
            e.jsx(le, {
              label: a.row.prevoiusPoQty.toLocaleString(),
              status: 'Received'
            })
        },
        {
          field: 'remaining',
          headerName: 'Remaining Qty',
          valueGetter: (a, c) =>
            (c.availableQty - c.prevoiusPoQty).toLocaleString(),
          renderCell: (a) => {
            const c = a.row.availableQty - a.row.prevoiusPoQty;
            return e.jsx(J, {
              label: c.toLocaleString(),
              sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
            });
          }
        },
        {
          field: 'quantity',
          headerName: 'Assigned Qty',
          renderCell: (a) =>
            e.jsx(ot, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: a.row.quantity || '',
              onChange: (c) =>
                ce({
                  id: a.id,
                  field: 'quantity',
                  value: Number(c.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'totalBeforeTax',
          headerName: 'Total',
          renderCell: (a) => {
            const P = (a.row.totalBeforeTax || 0).toLocaleString();
            return e.jsx(ot, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: P,
              onChange: (D) => {
                const V = Number(D.target.value.replace(/,/g, ''));
                ce({ id: a.id, field: 'totalBeforeTax', value: V });
              },
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        },
        {
          field: 'totalAfterTax',
          headerName: 'Total After Tax',
          renderCell: (a) => {
            const P = (a.row.totalAfterTax || 0).toLocaleString();
            return e.jsx(ot, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: P,
              onChange: (D) => {
                const V = Number(D.target.value.replace(/,/g, ''));
                ce({ id: a.id, field: 'totalAfterTax', value: V });
              },
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        }
      ],
      et = () => {
        j.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    r.useEffect(() => {
      et();
    });
    const [tt, Be] = r.useState([]),
      at = r.useCallback(
        (a) => {
          b(a);
          const c = a
            .map((P) => {
              const D = j.current.getRow(P);
              return console.log('rowData', D), D ? { ...D } : null;
            })
            .filter((P) => P !== null);
          console.log('selectedDesigns', c), Be(c);
        },
        [j]
      );
    return (
      r.useEffect(() => {
        const a = x.filter((c) => d.includes(c.id));
        I((c) => ({ ...c, dyeingPoDetailsList: a }));
      }, [x, d]),
      console.log('fabrics', x),
      r.useEffect(() => {
        j.current && console.log('API ref is ready:', j.current);
      }, [j]),
      console.log('selectedDesigns:', tt),
      e.jsxs(ie, {
        sx: { width: '100%', typography: 'body1' },
        children: [
          e.jsxs(De, {
            variant: 'outlined',
            children: [
              e.jsx(we, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                title: 'Printing Production Order',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              e.jsxs(s, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Production',
                      name: 'productionId',
                      value: l.productionId,
                      onChange: H,
                      size: 'small',
                      children: ne.map((a) =>
                        e.jsx(
                          $,
                          { value: a.productionId, children: a.collectionName },
                          a.productionId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'PO Date',
                      name: 'issuanceDate',
                      value: l.issuanceDate,
                      onChange: H,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'Expected Return',
                      name: 'expectedReturnDate',
                      value: l.expectedReturnDate,
                      onChange: H,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Fabric',
                      name: 'fabricId',
                      value: l.fabricId,
                      onChange: H,
                      size: 'small',
                      children: n.map((a) =>
                        e.jsx(
                          $,
                          { value: a.fabricId, children: a.fabricName },
                          a.fabricId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Vendor',
                      name: 'vendorId',
                      value: l.vendorId,
                      onChange: H,
                      size: 'small',
                      children: q.map((a) =>
                        e.jsx(
                          $,
                          { value: a.vendorId, children: a.vendorName },
                          a.vendorId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Shrinkage',
                      fullWidth: !0,
                      size: 'small',
                      name: 'shrinkage',
                      disabled: !0,
                      onChange: H,
                      value: l.shrinkage,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Wastage',
                      fullWidth: !0,
                      size: 'small',
                      name: 'wastage',
                      disabled: !0,
                      onChange: H,
                      value: l.wastage,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Rate',
                      type: 'number',
                      fullWidth: !0,
                      size: 'small',
                      name: 'rate',
                      onChange: H,
                      value: l.rate,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 1.5,
                    children: e.jsx(m, {
                      label: 'Tax',
                      fullWidth: !0,
                      type: 'number',
                      size: 'small',
                      name: 'tax',
                      onChange: H,
                      value: l.tax,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Select Location',
                      name: 'locationId',
                      value: l.locationId,
                      onChange: H,
                      size: 'small',
                      children: M.map((a) =>
                        e.jsx(
                          $,
                          {
                            value: a.locationId,
                            children:
                              a.section +
                              '.' +
                              a.aisle +
                              '.' +
                              a.rack +
                              '.' +
                              a.bin
                          },
                          a.locationId
                        )
                      )
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(m, {
                      label: 'Remarks',
                      fullWidth: !0,
                      size: 'small',
                      name: 'remarks',
                      onChange: H,
                      value: l.remarks,
                      required: !0
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    children: e.jsxs(E, {
                      variant: 'overline',
                      sx: {
                        display: 'block',
                        fontWeight: 'bold',
                        fontSize: 15
                      },
                      children: [
                        'Assign Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (ue = l.pxQty) == null
                              ? void 0
                              : ue.toLocaleString(),
                          sx: { backgroundColor: '#008000', color: '#FFFFFF' }
                        }),
                        '| planned Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (We = Number(l.overallQty)) == null
                              ? void 0
                              : We.toLocaleString(),
                          sx: { backgroundColor: '#0000FF', color: '#FFFFFF' }
                        }),
                        ' ',
                        '| Remaining Quantity',
                        ' ',
                        e.jsx(J, {
                          label:
                            (Ee = l.remainingQuantity) == null
                              ? void 0
                              : Ee.toLocaleString(),
                          sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
                        })
                      ]
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    children: e.jsx('div', {
                      style: { height: 400, width: '100%' },
                      children: e.jsx(qe, {
                        rows: x,
                        columns: Ze,
                        pageSize: 10,
                        apiRef: j,
                        disableRowSelectionOnClick: !0,
                        checkboxSelection: !0,
                        isRowSelectable: (a) =>
                          a.row.prevoiusPoQty < a.row.availableQty &&
                          a.row.prevoiusPoQty !== a.row.availableQty,
                        onRowSelectionModelChange: at,
                        rowSelectionModel: d
                      })
                    })
                  }),
                  e.jsx(s, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    children: e.jsx(W, {
                      variant: 'contained',
                      size: 'small',
                      onClick: Ye,
                      disabled: x.every(
                        (a) => a.prevoiusPoQty >= a.availableQty
                      ),
                      children: 'Save'
                    })
                  })
                ]
              }),
              ' '
            ]
          }),
          e.jsx(pt, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          }),
          e.jsxs(De, {
            variant: 'outlined',
            children: [
              e.jsx(we, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(gt, {}),
                title: 'Assign TCs & Issuance',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              e.jsx(s, {
                container: !0,
                spacing: 2,
                width: 'Inherit',
                children: e.jsxs(s, {
                  item: !0,
                  xs: 12,
                  children: [
                    e.jsx(xe, {
                      initialRows: U,
                      iColumns: Je,
                      pageSize: 10,
                      hideAction: !0
                    }),
                    e.jsxs(Z, {
                      open: $e,
                      onClose: ye,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
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
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'Assign Terms  And Conditions'
                            }),
                            e.jsx(re, {
                              onClick: ye,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(yt, { vId: R, handleClose: ye })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(Z, {
                      open: Xe,
                      onClose: je,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
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
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'View Production Order'
                            }),
                            e.jsx(re, {
                              onClick: je,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(jt, { vId: R })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(Z, {
                      open: Ae,
                      onClose: Re,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(ee, {
                          sx: {
                            backgroundColor: '#A11F23',
                            color: '#ffffff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingX: '24px',
                            paddingY: '4px',
                            mb: 2.5
                          },
                          children: [
                            e.jsx(E, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'Inspection'
                            }),
                            e.jsx(re, {
                              onClick: Re,
                              sx: { color: '#ffffff' },
                              children: e.jsx(se, {})
                            })
                          ]
                        }),
                        e.jsxs(te, {
                          children: [
                            e.jsx(ae, { id: 'alert-dialog-slide-description' }),
                            e.jsx(Ge, {
                              rId: 20,
                              PO: { ParamPoIdName: Ke.poIdName }
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),
              ' '
            ]
          })
        ]
      })
    );
  },
  Jt = () => {
    pe();
    const [d, b] = r.useState('1'),
      j = (g, B) => {
        b(B);
      };
    return e.jsx(Pt, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(ie, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(kt, {
          value: d,
          children: [
            e.jsx(ie, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(Ft, {
                onChange: j,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(me, {
                    icon: e.jsx(Tt, {}),
                    label: 'Dyeing PO',
                    value: '1',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(me, {
                    icon: e.jsx(Se, {}),
                    label: 'Printing PO',
                    value: '2',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(me, {
                    icon: e.jsx(Se, {}),
                    label: 'Schiffili PO',
                    value: '3',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(me, {
                    icon: e.jsx(Se, {}),
                    label: 'Additional Process PO',
                    value: '4',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(me, {
                    icon: e.jsx(Se, {}),
                    label: 'Additional Services PO',
                    value: '5',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(me, {
                    icon: e.jsx(Se, {}),
                    label: 'Summary',
                    value: '6',
                    sx: (g) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${g.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsx(he, { value: '1', children: e.jsx(Ot, {}) }),
            e.jsx(he, { value: '2', children: e.jsx(zt, {}) }),
            e.jsx(he, { value: '3' }),
            e.jsx(he, { value: '4' }),
            e.jsx(he, { value: '5' }),
            e.jsx(he, { value: '6', children: e.jsx(Lt, {}) })
          ]
        })
      })
    });
  };
export { Jt as default };
