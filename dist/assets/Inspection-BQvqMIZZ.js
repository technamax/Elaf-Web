import {
  s as ue,
  c as ae,
  u as re,
  a3 as he,
  a4 as Qe,
  a5 as me,
  j as e,
  G as d,
  T as G,
  e as be,
  B as E,
  C as pe,
  d as fe,
  L as Ce,
  I as De,
  J as Ge,
  a6 as Pe,
  M as ke
} from './index-CzwspkkF.js';
import { r as s, R as M } from './vendor-BXCbSo2_.js';
import { d as Re } from './CategoryOutlined-CACb1ZLu.js';
import { d as W } from './AssignmentOutlined-BFpRNIkb.js';
import { d as q } from './Close-BQBfEc69.js';
import './ReceivingDetails-CDLbn-lM.js';
import {
  u as xe,
  D as Be,
  R as H,
  a as _,
  b as K,
  c as J,
  d as Z,
  B as ge
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { S as ee } from './StatusChip-C_oGlGq1.js';
import { B as $, a as we, I as te } from './axios-lonJZgKi.js';
import './Receive-Dy1jfxAA.js';
import { T as I } from './TextField-Djr8gt34.js';
import Ae from './Reports-CL7Yzt2u.js';
import { T as Te, a as Le, b as w, c as C } from './TabPanel-Cg-Z_Qr2.js';
import { M as ce } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
const D = ue(I)(({ theme: n }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  ze = ({ rData: n, handleClose: A, refetch: y }) => {
    const [m, p] = s.useState({ inspectionId: 0, ...n }),
      S = xe(),
      { enqueueSnackbar: f } = ae(),
      { user: v } = re(),
      [h, o] = s.useState([]),
      { data: P, refetch: N } = he(
        { poId: m.poId, processTypename: 'Dyeing', status: 4 },
        { skip: !m.poId }
      ),
      { data: x, refetch: i } = Qe(n.receivingId, { skip: !n.receivingId }),
      { data: k, refetch: ie } = me(n.poId, { skip: !n.poId });
    s.useEffect(() => {
      if ((x == null ? void 0 : x.result) === null) {
        o([]);
        return;
      }
      x &&
        o(
          x.result.map((t, r) => ({
            id: r + 1,
            ...t,
            gradeAQty: 0,
            gradeBQty: 0,
            gradeCPQty: 0,
            others1Qty: 0,
            rejectedQty: 0,
            remarks: ''
          }))
        );
    }, [x, i]),
      console.log('rData', n);
    const j = (t) => {
      const { id: r, field: l, value: z } = t;
      console.log('Editing cell:', t),
        o((U) =>
          U.map((c) => {
            if (c.id === r) {
              const B = (
                  (c.issuanceQuantity * 100) /
                  (100 + c.shrinkage + c.wastage)
                ).toFixed(2),
                F = Math.max(
                  c.receivedQty -
                    ((c.gradeAQty || 0) +
                      (c.gradeBQty || 0) +
                      (c.gradeCPQty || 0) +
                      (c.rejectedQty || 0) +
                      (c.others1Qty || 0)),
                  0
                ),
                g = {
                  ...c,
                  [l]: z,
                  inspectionId: 0,
                  inspectiondetId: 0,
                  expectedQty: Number(B),
                  shortageQty: F,
                  appId: v.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: v.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: v.empId
                };
              return (
                (l === 'gradeAQty' ||
                  l === 'gradeBQty' ||
                  l === 'gradeCPQty' ||
                  l === 'rejectedQty' ||
                  l === 'others1Qty') &&
                  (g.shortageQty = Math.max(
                    g.receivedQty -
                      ((g.gradeAQty || 0) +
                        (g.gradeBQty || 0) +
                        (g.gradeCPQty || 0) +
                        (g.rejectedQty || 0) +
                        (g.others1Qty || 0)),
                    0
                  )),
                g
              );
            }
            return c;
          })
        );
    };
    M.useEffect(() => {
      p({ ...m, inspectionTransactionsDetailsModelList: h });
    }, [h, o]),
      console.log('formData', m),
      console.log('receiveDetails', h);
    const Q = h.reduce((t, r) => t + (r.gradeAQty ?? 0), 0).toFixed(2);
    console.log('Quantity', Q);
    const V = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'fabricName', headerName: 'Fabric' },
        {
          field: 'issuanceQuantity',
          headerName: 'Quantity Issued',
          valueGetter: (t) => (t ? Number(t.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'expectedQty',
          headerName: 'Expected',
          valueGetter: (t, r) =>
            Number(
              (
                (r.issuanceQuantity * 100) /
                (100 + r.shrinkage + r.wastage)
              ).toFixed(2)
            ).toLocaleString()
        },
        {
          field: 'receivedQty',
          headerName: 'Received',
          valueGetter: (t) => (t ? Number(t.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'gradeAQty',
          headerName: 'Grade A',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.gradeAQty || 0,
              onChange: (r) =>
                j({
                  id: t.id,
                  field: 'gradeAQty',
                  value: Number(r.target.value)
                }),
              type: 'number',
              error: t.row.gradeAQty > t.row.recA,
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'gradeBQty',
          headerName: 'Grade B',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.gradeBQty || 0,
              onChange: (r) =>
                j({
                  id: t.id,
                  field: 'gradeBQty',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'gradeCPQty',
          headerName: 'Cut Pc',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.gradeCPQty || 0,
              onChange: (r) =>
                j({
                  id: t.id,
                  field: 'gradeCPQty',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'others1Qty',
          headerName: 'Others',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.others1Qty || 0,
              onChange: (r) =>
                j({
                  id: t.id,
                  field: 'others1Qty',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'shortageQty',
          headerName: 'Short Stock',
          valueGetter: (t, r) => {
            r.expectedQty, r.receivedQty;
            const l =
              r.receivedQty -
              ((r.gradeAQty || 0) +
                (r.gradeBQty || 0) +
                (r.gradeCPQty || 0) +
                (r.rejectedQty || 0) +
                (r.others1Qty || 0));
            return l > 0 ? l.toLocaleString() : 0;
          },
          valueSetter: (t, r) => {
            r.expectedQty, r.receivedQty;
            const l =
              r.receivedQty -
              ((r.gradeAQty || 0) +
                (r.gradeBQty || 0) +
                (r.gradeCPQty || 0) +
                (r.rejectedQty || 0) +
                (r.others1Qty || 0));
            return l > 0 ? l.toLocaleString() : 0;
          }
        },
        {
          field: 'rejectedQty',
          headerName: 'Rejected',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.rejectedQty || 0,
              onChange: (r) =>
                j({
                  id: t.id,
                  field: 'rejectedQty',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'remarks',
          headerName: 'Remarks',
          renderCell: (t) =>
            e.jsx(D, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: t.row.remarks || '',
              onKeyDown: (r) => {
                console.log('Key down: ', r.key), r.stopPropagation();
              },
              onChange: (r) =>
                j({ id: t.id, field: 'remarks', value: r.target.value }),
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        }
      ],
      R = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'fabricName', headerName: 'Fabric' },
        {
          field: 'issuanceQuantity',
          headerName: 'Quantity Issued',
          valueGetter: (t) => (t ? Number(t.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'receivedQty',
          headerName: 'Received',
          valueGetter: (t) => (t ? Number(t.toFixed(2)).toLocaleString() : '0')
        },
        {
          field: 'expectedQty',
          headerName: 'Expected',
          valueGetter: (t, r) =>
            Number(
              (
                (r.issuanceQuantity * 100) /
                (100 + r.shrinkage + r.wastage)
              ).toFixed(2)
            ).toLocaleString()
        },
        {
          field: 'recA',
          headerName: 'Grade A',
          valueGetter: (t) => (t ? t.toLocaleString() : '0')
        },
        {
          field: 'recB',
          headerName: 'Grade B ',
          valueGetter: (t) => (t ? t.toLocaleString() : '0')
        },
        {
          field: 'recCp',
          headerName: 'Grade CP',
          valueGetter: (t) => (t ? t.toLocaleString() : '0')
        },
        {
          field: 'recOthers1',
          headerName: 'Others',
          valueGetter: (t) => (t ? t.toLocaleString() : '0')
        }
      ],
      T = () => {
        S.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    M.useEffect(() => {
      T();
    });
    const L = async () => {
      for (let t of h)
        if (
          t.receivedQty <
          (t.gradeAQty || 0) +
            (t.gradeBQty || 0) +
            (t.gradeCPQty || 0) +
            (t.rejectedQty || 0) +
            (t.others1Qty || 0)
        ) {
          f(
            'Error: Received quantity cannot be greater than issuance quantity!',
            { variant: 'error', autoHideDuration: 5e3 }
          );
          return;
        }
      try {
        const t = await we.post(
          'http://100.42.177.77:81/api/Receiving/SaveInspection',
          m
        );
        t.data.success
          ? f(`${t.data.message} !`, {
              variant: 'success',
              autoHideDuration: 5e3
            })
          : (f(`${t.data.message} !`, {
              variant: 'error',
              autoHideDuration: 5e3
            }),
            console.log('response.message', t.data.message)),
          y(),
          ie(),
          N(),
          console.log('Save response:', t.data),
          A();
      } catch (t) {
        console.error('Error saving data:', t),
          f('FAILED: Unable to start Process', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    return e.jsxs('div', {
      children: [
        e.jsxs(d, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(d, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(I, {
                fullWidth: !0,
                disabled: !0,
                label: 'IGP Number',
                name: 'igpNumber',
                value: n.igpNumber,
                size: 'small'
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(I, {
                fullWidth: !0,
                disabled: !0,
                label: 'Process Type',
                name: 'processTypename',
                value: n.processTypename,
                size: 'small'
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(I, {
                fullWidth: !0,
                disabled: !0,
                label: 'Vendor',
                name: 'vendorId',
                value: n.vendorName,
                size: 'small'
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(I, {
                size: 'small',
                label: 'IGP Creation Date ',
                name: 'igpDate',
                value: new Date(n.igpDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: '2-digit'
                }),
                fullWidth: !0,
                disabled: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              children: e.jsxs(G, {
                variant: 'subtitle1',
                sx: { display: 'block', fontWeight: 'bold', fontSize: 15 },
                children: [
                  'GradeA Sum',
                  ' ',
                  e.jsx(be, {
                    label: Q.toLocaleString(),
                    sx: { backgroundColor: '#90caf9', color: '#FFFFFF' }
                  })
                ]
              })
            })
          ]
        }),
        e.jsxs(d, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          children: [
            e.jsx(d, {
              item: !0,
              xs: 12,
              children: e.jsx(G, { variant: 'h2', children: 'Details' })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              children: e.jsx(E, {
                sx: {
                  height: 'auto',
                  width: 'inherit',
                  '& .actions': { color: 'text.secondary' },
                  '& .textPrimary': { color: 'text.primary' },
                  '& .bold': { fontWeight: 600 }
                },
                children: e.jsx(Be, {
                  rows: h,
                  columns: V,
                  apiRef: S,
                  disableRowSelectionOnClick: !0
                })
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx($, {
                variant: 'contained',
                size: 'small',
                onClick: L,
                children: 'Save'
              })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              children: e.jsx(G, { variant: 'h2', children: 'Received' })
            }),
            e.jsx(d, {
              item: !0,
              xs: 12,
              children: e.jsx(H, {
                initialRows: h,
                iColumns: R,
                hideAction: !0
              })
            })
          ]
        })
      ]
    });
  };
ue(I)(({ theme: n }) => ({
  '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
  width: 'auto',
  height: 'auto',
  minWidth: '100px',
  minHeight: '30px'
}));
const Fe = ({ formData: n, refetch: A }) => {
    xe(), ae(), re();
    const [y, m] = s.useState([]),
      { data: p, refetch: S } = me(n.poId, { skip: !n.poId });
    s.useEffect(() => {
      if ((p == null ? void 0 : p.result) === null) {
        m([]);
        return;
      }
      p && m(p.result.map((i, k) => ({ id: k + 1, ...i })));
    }, [p, S]);
    const [f, v] = M.useState(!1),
      [h, o] = M.useState(!1),
      P = async (i) => {
        o(i), v(!0);
      },
      N = () => {
        v(!1);
      };
    console.log('iss', h);
    const x = [
      { field: 'id', headerName: 'Sr #' },
      { field: 'collectionName', headerName: 'Collection Name' },
      { field: 'poName', headerName: 'PO' },
      { field: 'igpNumber', headerName: 'IGP Number' },
      {
        field: 'igpDate',
        headerName: 'IGP Date',
        valueGetter: (i) =>
          new Date(i).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      {
        field: 'inspectionDate',
        headerName: 'Receiving Date',
        valueGetter: (i) =>
          new Date(i).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      {
        field: 'receivedQty',
        headerName: 'Received',
        valueGetter: (i) => (i ? Number(i.toFixed(2)).toLocaleString() : '0')
      },
      { field: 'processTypeName', headerName: 'Process Type' },
      {
        field: 'statusName',
        headerName: 'Status',
        renderCell: (i) => e.jsx(ee, { label: i.value, status: i.value })
      },
      {
        field: 'Actions',
        headerName: 'Actions',
        renderCell: (i) =>
          e.jsx('div', {
            style: { display: 'flex', justifyContent: 'space-around' },
            children: e.jsx(ge, {
              variant: 'text',
              size: 'small',
              sx: { mt: 1 },
              children: e.jsx($, {
                size: 'small',
                color: 'primary',
                onClick: () => P(i.row),
                children: 'Inspection'
              })
            })
          })
      }
    ];
    return e.jsxs(pe, {
      variant: 'outlined',
      sx: { marginTop: 2 },
      children: [
        e.jsx(fe, {
          className: 'css-4rfrnx-MuiCardHeader-root',
          title: 'Completed Inspections',
          titleTypographyProps: { style: { color: 'white' } }
        }),
        e.jsx(d, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: e.jsxs(d, {
            item: !0,
            xs: 12,
            children: [
              e.jsx(H, { initialRows: y, iColumns: x, hideAction: !0 }),
              e.jsxs(_, {
                open: f,
                onClose: N,
                fullWidth: !0,
                maxWidth: 'xl',
                children: [
                  e.jsxs(K, {
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
                      e.jsx(G, {
                        variant: 'h4',
                        component: 'div',
                        color: '#ffffff',
                        gutterBottom: !0,
                        fontSize: 20,
                        fontWeight: 2,
                        fontStyle: 'normal',
                        children: 'Inspection'
                      }),
                      e.jsx(te, {
                        onClick: N,
                        sx: { color: '#ffffff' },
                        children: e.jsx(q, {})
                      })
                    ]
                  }),
                  e.jsxs(J, {
                    children: [
                      e.jsx(Z, { id: 'alert-dialog-slide-description' }),
                      e.jsx(Ae, {
                        rId: 17,
                        inspection: { ParamInspectionId: h.inspectionId }
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  },
  et = () => {
    var oe, de, le;
    const n = Ce(),
      A = (oe = n.state) == null ? void 0 : oe.data,
      y =
        (le = (de = n.state) == null ? void 0 : de.tab) == null
          ? void 0
          : le.toString();
    console.log('rowData', A), console.log('tab', y);
    const [m, p] = s.useState('1'),
      S = (a, u) => {
        p(u), console.log('value', m);
      };
    s.useEffect(() => {
      y && p(y);
    }, [y]),
      ae();
    const { user: f } = re();
    s.useState([]);
    const [v, h] = s.useState(!1),
      [o, P] = s.useState({
        issuanceId: '',
        poId: '',
        processTypeName: '',
        productionId: '',
        appId: f.appId,
        createdOn: new Date().toISOString(),
        createdBy: f.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: f.empId
      }),
      [N, x] = s.useState([]),
      {
        data: i,
        error: k,
        isLoading: ie,
        refetch: j
      } = De(o.productionId, { skip: !o.productionId }),
      { data: Q, refetch: V } = Ge(),
      { data: R, refetch: T } = he(
        { poId: o.poId, status: 8, processTypename: o.processTypeName },
        { skip: !o.poId || !o.processTypeName }
      ),
      [L, t] = s.useState([]);
    s.useState(!1), console.log('initialRows', L);
    const [r, l] = s.useState([]);
    s.useEffect(() => {
      R && t(R.result.map((a, u) => ({ id: u + 1, ...a })));
    }, [R, T]),
      s.useEffect(() => {
        Q && l(Q.result.map((a, u) => ({ id: u, ...a })));
      }, [Q, V]),
      s.useEffect(() => {
        i && x(i.result.map((a, u) => ({ id: u + 1, ...a })));
      }, [i, j]);
    const z = (a) => {
        const { name: u, value: Y } = a.target;
        if (u === 'poId') {
          const O = N.find((Se) => Se.poId === parseInt(Y));
          P({
            ...o,
            poId: Y,
            processTypeName: O ? O.processTypeName : '',
            issuanceId: O ? O.issuanceId : ''
          });
        } else P({ ...o, [u]: Y });
      },
      [U, c] = s.useState(!1),
      [B, F] = s.useState({}),
      [g, se] = s.useState({}),
      { data: b, refetch: ye } = Pe(B.receivingId, { skip: !B.receivingId });
    s.useEffect(() => {
      if ((b == null ? void 0 : b.result) === null) {
        se([]);
        return;
      }
      b && se(b.result.map((a, u) => ({ id: u + 1, ...a })));
    }, [b, ye]);
    const ve = async (a) => {
        F(a), h(!0);
      },
      je = async (a) => {
        F(a);
      },
      X = () => {
        h(!1);
      },
      ne = () => {
        c(!1);
      },
      Ie = [
        { field: 'id', headerName: 'Sr #' },
        { field: 'collectionName', headerName: 'Collection Name' },
        { field: 'poName', headerName: 'PO' },
        { field: 'igpNumber', headerName: 'IGP Number' },
        {
          field: 'igpDate',
          headerName: 'IGP Date',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'receivingDate',
          headerName: 'Receiving Date',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'receivedQty',
          headerName: 'Received',
          renderCell: (a) =>
            e.jsx(ee, { label: a.row.receivedQty, status: 'Received' })
        },
        { field: 'processTypename', headerName: 'Process Type' },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (a) => e.jsx(ee, { label: a.value, status: a.value })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (a) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(ge, {
                variant: 'text',
                size: 'small',
                sx: { mt: 1 },
                children: [
                  e.jsx($, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => ve(a.row),
                    disabled: a.row.status === 4,
                    children: 'Inspection'
                  }),
                  e.jsx($, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => je(a.row),
                    children: 'View'
                  })
                ]
              })
            })
        }
      ],
      Ne = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'fabricName', headerName: 'Fabric' },
        {
          field: 'issuanceQuantity',
          headerName: 'Quantity Issued',
          valueGetter: (a) => a.toLocaleString()
        },
        {
          field: 'receivedQty',
          headerName: 'Received',
          valueGetter: (a) => a.toLocaleString()
        },
        {
          field: 'gradeAQty',
          headerName: 'Grade A',
          valueGetter: (a) => a.toLocaleString()
        },
        {
          field: 'gradeBQty',
          headerName: 'Grade B',
          valueGetter: (a) => (a ? a.toLocaleString() : '0')
        },
        {
          field: 'gradeCPQty',
          headerName: 'Cut Pc',
          valueGetter: (a) => (a ? a.toLocaleString() : '0')
        },
        {
          field: 'others1Qty',
          headerName: 'Others',
          valueGetter: (a) => (a ? a.toLocaleString() : '0')
        },
        {
          field: 'shortStock',
          headerName: 'Short Stock',
          valueGetter: (a) => (a ? a.toLocaleString() : '0')
        },
        { field: 'remarks', headerName: 'Remarks' },
        { field: 'statusName', headerName: 'Status' }
      ];
    return e.jsx(ke, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(E, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(Te, {
          value: m,
          children: [
            e.jsx(E, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(Le, {
                onChange: S,
                children: [
                  e.jsx(w, {
                    icon: e.jsx(Re, {}),
                    label: 'Dyeing Inspection',
                    value: '1',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(w, {
                    icon: e.jsx(W, {}),
                    label: 'Embroidery Inspection',
                    value: '2',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(w, {
                    icon: e.jsx(W, {}),
                    label: 'Schiffili Inspection',
                    value: '3',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(w, {
                    icon: e.jsx(W, {}),
                    label: 'Additional Process Inspection',
                    value: '4',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(w, {
                    icon: e.jsx(W, {}),
                    label: 'Additional Services Inspection',
                    value: '5',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsx(C, {
              value: '1',
              children: e.jsxs(E, {
                sx: { width: '100%', typography: 'body1' },
                children: [
                  e.jsxs(pe, {
                    variant: 'outlined',
                    children: [
                      e.jsx(fe, {
                        className: 'css-4rfrnx-MuiCardHeader-root',
                        title: 'Pending Inspections',
                        titleTypographyProps: { style: { color: 'white' } }
                      }),
                      e.jsxs(d, {
                        container: !0,
                        spacing: 1,
                        width: 'Inherit',
                        sx: { paddingY: 2, paddingX: 2 },
                        children: [
                          e.jsx(d, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(I, {
                              fullWidth: !0,
                              select: !0,
                              label: 'Production',
                              name: 'productionId',
                              value: o.productionId,
                              onChange: z,
                              size: 'small',
                              children: r.map((a) =>
                                e.jsx(
                                  ce,
                                  {
                                    value: a.productionId,
                                    children: a.collectionName
                                  },
                                  a.productionId
                                )
                              )
                            })
                          }),
                          e.jsx(d, {
                            item: !0,
                            xs: 12,
                            md: 3,
                            children: e.jsx(I, {
                              fullWidth: !0,
                              select: !0,
                              label: 'PO#',
                              name: 'poId',
                              value: o.poId,
                              onChange: z,
                              size: 'small',
                              children: N.map((a) =>
                                e.jsx(
                                  ce,
                                  { value: a.poId, children: a.poIdName },
                                  a.poId
                                )
                              )
                            })
                          }),
                          e.jsxs(d, {
                            item: !0,
                            xs: 12,
                            children: [
                              e.jsx(H, {
                                initialRows: L,
                                iColumns: Ie,
                                height: !0,
                                hideAction: !0
                              }),
                              e.jsxs(_, {
                                open: v,
                                onClose: X,
                                fullWidth: !0,
                                maxWidth: 'xl',
                                children: [
                                  e.jsxs(K, {
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
                                      e.jsx(G, {
                                        variant: 'h4',
                                        component: 'div',
                                        color: '#ffffff',
                                        gutterBottom: !0,
                                        fontSize: 20,
                                        fontWeight: 2,
                                        fontStyle: 'normal',
                                        children: 'Start Inspection'
                                      }),
                                      e.jsx(te, {
                                        onClick: X,
                                        sx: { color: '#ffffff' },
                                        children: e.jsx(q, {})
                                      })
                                    ]
                                  }),
                                  e.jsxs(J, {
                                    children: [
                                      e.jsx(Z, {
                                        id: 'alert-dialog-slide-description'
                                      }),
                                      e.jsx(ze, {
                                        rData: B,
                                        handleClose: X,
                                        refetch: T
                                      })
                                    ]
                                  })
                                ]
                              }),
                              e.jsxs(_, {
                                open: U,
                                onClose: ne,
                                fullWidth: !0,
                                maxWidth: 'xl',
                                children: [
                                  e.jsxs(K, {
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
                                      e.jsx(G, {
                                        variant: 'h4',
                                        component: 'div',
                                        color: '#ffffff',
                                        gutterBottom: !0,
                                        fontSize: 20,
                                        fontWeight: 2,
                                        fontStyle: 'normal',
                                        children: 'View Inspection'
                                      }),
                                      e.jsx(te, {
                                        onClick: ne,
                                        sx: { color: '#ffffff' },
                                        children: e.jsx(q, {})
                                      })
                                    ]
                                  }),
                                  e.jsxs(J, {
                                    children: [
                                      e.jsx(Z, {
                                        id: 'alert-dialog-slide-description'
                                      }),
                                      e.jsx(H, {
                                        initialRows: g,
                                        iColumns: Ne,
                                        hideAction: !0
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
                  }),
                  e.jsx(Fe, { formData: o })
                ]
              })
            }),
            e.jsx(C, { value: '2' }),
            e.jsx(C, { value: '3' }),
            e.jsx(C, { value: '4' }),
            e.jsx(C, { value: '5' }),
            e.jsx(C, { value: '6' })
          ]
        })
      })
    });
  };
export { et as default };
