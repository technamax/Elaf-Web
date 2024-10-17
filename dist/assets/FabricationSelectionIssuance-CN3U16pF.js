import {
  A as Ne,
  E as Ce,
  j as e,
  s as Ie,
  c as ge,
  u as de,
  an as Pe,
  ao as le,
  C as ue,
  d as pe,
  G as c,
  T as _,
  ap as ye,
  o as Se,
  aq as ke,
  B as se,
  D as je,
  b as Te,
  J as Le,
  M as Re
} from './index-CzwspkkF.js';
import { r as o } from './vendor-BXCbSo2_.js';
import { B as Y, I as V, a as z } from './axios-lonJZgKi.js';
import { d as Be } from './AddCircleOutlineOutlined-BaHny51-.js';
import { d as Oe } from './CategoryOutlined-CACb1ZLu.js';
import {
  u as be,
  R as J,
  a as oe,
  b as re,
  c as ie,
  d as ne,
  B as ve,
  D as He
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { d as ce } from './Close-BQBfEc69.js';
import { S as we } from './StatusChip-C_oGlGq1.js';
import { d as he } from './VisibilityOutlined-D9xuAg3y.js';
import { R as Ge } from './Receive-Dy1jfxAA.js';
import { T as y } from './TextField-Djr8gt34.js';
import { M as W } from './MenuItem-ZWEe2ZC6.js';
import { T as Ae, a as Ee, b as fe, c as xe } from './TabPanel-Cg-Z_Qr2.js';
import './Skeleton-DdLL8d67.js';
var me = {},
  ze = Ce;
Object.defineProperty(me, '__esModule', { value: !0 });
var De = (me.default = void 0),
  We = ze(Ne()),
  Fe = e;
De = me.default = (0, We.default)(
  (0, Fe.jsx)('path', {
    d: 'M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z'
  }),
  'MoveToInbox'
);
Ie(y)(({ theme: s }) => ({
  '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
  width: 'auto',
  height: 'auto',
  minWidth: '100px',
  minHeight: '30px'
}));
const Me = () => {
    const { enqueueSnackbar: s } = ge(),
      { user: S } = de(),
      [r, L] = o.useState([]),
      [G, F] = o.useState([]);
    o.useState([]), be();
    const [C, R] = o.useState(!1);
    o.useState([]), o.useState(!1);
    const [j, u] = o.useState([]),
      [d, A] = o.useState([]);
    console.log('responseData', d);
    const [f, B] = o.useState({
        productionId: 0,
        productionHeaderId: 0,
        processTypeId: 1222,
        itpId: '',
        status: 2,
        startDate: new Date().toISOString(),
        appId: S.appId,
        createdOn: new Date().toISOString(),
        createdBy: S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      }),
      [h, b] = o.useState({
        issuanceNo: r.issuanceNo || 0,
        issuanceName: r.issuanceName || '',
        barcode: r.barcode || '',
        itpQuantity: d.itpQuantity || '',
        requiredQuantity: r.quantity || '',
        uom: d.uomName || '',
        issuanceDate: r.issuanceDate || '',
        fabricName: r.fabricName || '',
        rate: d.rate || '',
        tax: d.tax || '',
        amount: d.amount || '',
        amountAfterTax: '',
        remarks: '',
        createdOn: new Date().toISOString(),
        createdBy: S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    o.useEffect(() => {
      b({
        stockId: r.stockId || 0,
        itpDetId: d.itpDetId,
        issuanceNo: r.issuanceNo || 0,
        issuanceName: r.issuanceName || '',
        barcode: r.barcode || '',
        quantity: d.itpQuantity || '',
        requiredQuantity: r.quantity || '',
        uom: d.uomName || '',
        uomId: d.uomId || '',
        issuanceDate: r.issuanceDate || '',
        productName: r.fabricName || '',
        fabricId: r.fabricId || '',
        rate: d.rate || '',
        tax: d.tax || '',
        amount: d.amount || '',
        amountAfterTax: '',
        remarks: '',
        createdOn: new Date().toISOString(),
        createdBy: S.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: S.empId
      });
    }, [r, d]),
      console.log('addForm:', h);
    const [D, M] = o.useState([]);
    o.useState([]), o.useState(!1);
    const { data: O, refetch: g } = Pe(f.productionHeaderId, {
        skip: !f.productionHeaderId
      }),
      { data: N } = le(),
      [P, k] = o.useState([]);
    o.useEffect(() => {
      N && (N.result[0], k(N.result.map((t, n) => ({ id: n + 1, ...t }))));
    }, [N]),
      o.useEffect(() => {
        O && M(O.result.map((t, n) => ({ id: n + 1, ...t })));
      }, [O, g, f.productionHeaderId]);
    const T = (t) => {
      const { name: n, value: p } = t.target;
      if (n === 'productionId') {
        const I = P.find((H) => H.productionId === parseInt(p));
        B({
          ...f,
          productionId: p,
          productionHeaderId: I ? I.productionHeaderId : ''
        });
      } else if (n === 'itpId') {
        const I = j.find((H) => H.itpId === parseInt(p));
        B({
          ...f,
          itpId: p,
          noOfItems: I ? I.noOfItems : '',
          issuanceDate: I ? I.issuanceDate : '',
          issuanceName: I ? I.issuanceName : ''
        });
      } else B({ ...f, [n]: p }), b({ ...h, [n]: p });
    };
    console.log('formData', f),
      console.log('productioncollectionList', P),
      o.useEffect(() => {
        const t = () => {
            const q = parseFloat(h.rate) || 0,
              ae = parseFloat(h.quantity) || 0;
            return (q * ae).toFixed(2);
          },
          n = (q, ae) => (q * (1 + ae / 100)).toFixed(2),
          p = t(),
          I = parseFloat(h.tax) || 0,
          H = n(p, I);
        b((q) => ({ ...q, amount: p, amountAfterTax: H }));
      }, [h.rate, h.itpQuantity, h.tax]);
    const $ = async () => {
        try {
          const t = await z.get(
            'http://100.42.177.77:81/api/StockReceiving/FetchItpByAppIdList?appId=1'
          );
          u(t.data.result.map((n, p) => ({ id: p + 1, ...n })));
        } catch (t) {
          console.error('Error fetching ITP:', t);
        }
      },
      Q = async () => {
        try {
          const t = await z.post(
            'http://100.42.177.77:81/api/StockReceiving/SaveStockReceivingHeader',
            f
          );
          console.log('Save response:', t.data),
            g(),
            M(t.data.result.map((n, p) => ({ id: p + 1, ...n }))),
            t.data.success
              ? s(`${t.data.message} !`, {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (s(`${t.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', t.data.message));
        } catch (t) {
          console.error('Error saving data:', t),
            s('FAILED: Unable to start Process', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('itps', j);
    const [i, x] = o.useState(!1),
      [v, E] = o.useState(!1),
      [U, K] = o.useState(null),
      [X, Z] = o.useState(null),
      ee = async (t) => {
        L(t), K(t.stockId);
        try {
          const n = await z.get(
            `http://100.42.177.77:81/api/Production/GetProductionFabricDetailByProductionHeaderId?productionHeaderId=${t.productionHeaderId}&status=2`
          );
          F(n.data.result.map((p, I) => ({ id: I + 1, ...p })));
        } catch (n) {
          console.error('Error fetching ITP:', n);
        }
        x(!0);
      },
      te = async (t) => {
        console.log('rowdata', t);
        try {
          const n = await z.get(
            `http://100.42.177.77:81/api/StockReceiving/GetStockByStatusList?productionId=${t.productionId}&status=8`
          );
          console.log('response', n);
          const p = n.data.result;
          console.log('API Data Result:', p),
            Z(p.map((I, H) => ({ id: H + 1, ...I })));
        } catch (n) {
          console.error('Error fetching ITP:', n);
        }
        E(!0);
      };
    console.log('stockView', X);
    const a = () => {
        x(!1), L({});
      },
      l = () => {
        E(!1);
      },
      m = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'collectionName', headerName: 'Production' },
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
        { field: 'issuanceName', headerName: 'ITP' },
        {
          field: 'statusDesc',
          headerName: 'Status',
          renderCell: (t) =>
            e.jsx(we, { label: t.row.statusDesc, status: 'Received' })
        },
        {
          field: 'View',
          headerName: 'View Details',
          renderCell: (t) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(ve, {
                variant: 'text',
                size: 'small',
                children: [
                  e.jsx(V, {
                    color: 'primary',
                    onClick: () => ee(t.row),
                    disabled: t.row.statusId === 8,
                    children: e.jsx(De, {})
                  }),
                  e.jsx(V, {
                    color: 'primary',
                    onClick: () => te(t.row),
                    children: e.jsx(he, {})
                  })
                ]
              })
            })
        }
      ],
      w = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'barcode', headerName: 'Barcode' },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'quantity',
          headerName: 'Quantity Received',
          valueGetter: (t) => t.toLocaleString()
        },
        {
          field: 'rate',
          headerName: 'Rate',
          valueGetter: (t) => t.toLocaleString()
        },
        { field: 'tax', headerName: 'Tax' },
        {
          field: 'amount',
          headerName: 'Amount',
          valueGetter: (t) => t.toLocaleString()
        },
        {
          field: 'amountAfterTax',
          headerName: 'Amount After Tax',
          valueGetter: (t) => t.toLocaleString()
        }
      ];
    return e.jsxs(ue, {
      variant: 'outlined',
      children: [
        e.jsx(pe, {
          className: 'css-4rfrnx-MuiCardHeader-root',
          avatar: e.jsx(he, {}),
          title: 'Fabric Receiving from ITP',
          titleTypographyProps: { style: { color: 'white' } }
        }),
        e.jsxs(c, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(c, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 1 },
              children: e.jsx(Y, {
                variant: 'contained',
                size: 'small',
                onClick: $,
                color: 'success',
                children: 'Fetch ITP'
              })
            }),
            e.jsx(c, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(y, {
                label: 'Production',
                fullWidth: !0,
                select: !0,
                size: 'small',
                name: 'productionId',
                onChange: T,
                value: f.productionId,
                required: !0,
                disabled: C,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: P.map((t) =>
                  e.jsx(
                    W,
                    { value: t.productionId, children: t.collectionName },
                    t.id
                  )
                )
              })
            }),
            e.jsx(c, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(y, {
                size: 'small',
                type: 'date',
                label: 'Start Date',
                name: 'startDate',
                value: f.startDate,
                onChange: T,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(c, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(y, {
                fullWidth: !0,
                select: !0,
                label: 'Issuance Name',
                name: 'itpId',
                value: f.itpId,
                onChange: T,
                size: 'small',
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: j.map((t) =>
                  e.jsx(W, { value: t.itpId, children: t.issuanceName }, t.id)
                )
              })
            }),
            e.jsx(c, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: e.jsx(Y, {
                variant: 'contained',
                size: 'small',
                onClick: Q,
                children: 'start Process'
              })
            }),
            e.jsxs(c, {
              item: !0,
              xs: 12,
              children: [
                e.jsx(J, { initialRows: D, iColumns: m, hideAction: !0 }),
                e.jsxs(oe, {
                  open: i,
                  onClose: a,
                  fullWidth: !0,
                  maxWidth: 'xl',
                  children: [
                    e.jsxs(re, {
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
                        e.jsx(_, {
                          variant: 'h4',
                          component: 'div',
                          color: '#ffffff',
                          gutterBottom: !0,
                          fontSize: 20,
                          fontWeight: 2,
                          fontStyle: 'normal',
                          children: 'Save Details'
                        }),
                        e.jsx(V, {
                          onClick: a,
                          sx: { color: '#ffffff' },
                          children: e.jsx(ce, {})
                        })
                      ]
                    }),
                    e.jsxs(ie, {
                      children: [
                        e.jsx(ne, { id: 'alert-dialog-slide-description' }),
                        e.jsx(c, {
                          container: !0,
                          spacing: 1,
                          width: 'Inherit',
                          sx: { paddingY: 2, paddingX: 2 },
                          children: e.jsx(c, {
                            item: !0,
                            xs: 12,
                            children: e.jsx(Ge, {
                              fabrics: G,
                              setFabrics: F,
                              stockId: U,
                              handleClose: a,
                              initialFormData: r,
                              refetchStockData: g
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(oe, {
                  open: v,
                  onClose: l,
                  fullWidth: !0,
                  maxWidth: 'xl',
                  children: [
                    e.jsxs(re, {
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
                        e.jsx(_, {
                          variant: 'h4',
                          component: 'div',
                          color: '#ffffff',
                          gutterBottom: !0,
                          fontSize: 20,
                          fontWeight: 2,
                          fontStyle: 'normal',
                          children: 'View Stock Receiving Details'
                        }),
                        e.jsx(V, {
                          onClick: l,
                          sx: { color: '#ffffff' },
                          children: e.jsx(ce, {})
                        })
                      ]
                    }),
                    e.jsxs(ie, {
                      children: [
                        e.jsx(ne, { id: 'alert-dialog-slide-description' }),
                        e.jsx(c, {
                          container: !0,
                          spacing: 1,
                          width: 'Inherit',
                          sx: { paddingY: 2, paddingX: 2 },
                          children: e.jsx(c, {
                            item: !0,
                            xs: 12,
                            children: e.jsx(J, {
                              initialRows: X,
                              iColumns: w,
                              hideAction: !0
                            })
                          })
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
    });
  },
  Qe = () => {
    de();
    const [s, S] = o.useState({}),
      [r, L] = o.useState({
        productionId: 0,
        processType: '',
        status: s == null ? void 0 : s.statusId,
        collectionName: (s == null ? void 0 : s.collectionName) || 0,
        processTypeName: (s == null ? void 0 : s.processTypeName) || '',
        startDate:
          new Date(s == null ? void 0 : s.startDate).toLocaleDateString(
            'en-GB',
            { day: 'numeric', month: 'short', year: '2-digit' }
          ) || null,
        statusName: (s == null ? void 0 : s.statusName) || '',
        productionHeaderId: (s == null ? void 0 : s.productionHeaderId) || ''
      });
    o.useEffect(() => {
      L({
        ...r,
        collectionName: (s == null ? void 0 : s.collectionName) || 0,
        processTypeName: (s == null ? void 0 : s.processTypeName) || '',
        startDate:
          new Date(s == null ? void 0 : s.startDate).toLocaleDateString(
            'en-GB',
            { day: 'numeric', month: 'short', year: '2-digit' }
          ) || null,
        statusName: (s == null ? void 0 : s.statusName) || '',
        productionHeaderId: (s == null ? void 0 : s.productionHeaderId) || ''
      });
    }, [s, S]);
    const [G, F] = o.useState([]),
      { data: C, refetch: R } = ye(
        { productionId: r.productionId, status: r.status },
        { skip: !r.productionId || !r.status }
      ),
      { data: j } = Se(),
      { data: u, refetch: d } = ke(
        { productionHeaderId: r.productionHeaderId, status: r.status },
        { skip: !r.productionHeaderId || !r.status }
      ),
      { data: A, refetch: f } = le(),
      [B, h] = o.useState([]),
      [b, D] = o.useState([]),
      [M, O] = o.useState([]);
    console.log('processesList', b),
      o.useEffect(() => {
        if (j) {
          const i = j.result.filter((x) => x.statusId === 2);
          D(i);
        }
      }, [j]),
      o.useEffect(() => {
        u && h(u.result.map((i, x) => ({ id: x + 1, ...i })));
      }, [u, d]),
      o.useEffect(() => {
        if (A) {
          const i = new Set(),
            x = A.result
              .filter((v) =>
                i.has(v.collectionName) ? !1 : (i.add(v.collectionName), !0)
              )
              .map((v, E) => ({ id: E + 1, ...v }));
          O(x);
        }
      }, [A, f]),
      o.useEffect(() => {
        C && F(C.result.map((i, x) => ({ id: x + 1, ...i })));
      }, [C, R]),
      console.log('initialRows', G);
    const g = (i) => {
      const { name: x, value: v } = i.target;
      L({ ...r, [x]: v });
    };
    console.log('formData', r);
    const [N, P] = o.useState(!1),
      k = (i) => {
        S(i), P(!0);
      },
      T = () => {
        P(!1), S({});
      },
      $ = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'collectionName', headerName: 'Production Batch' },
        { field: 'processTypeName', headerName: 'Process Type' },
        { field: 'orderNumber', headerName: 'Order Number' },
        {
          field: 'startDate',
          headerName: 'Start Date',
          valueGetter: (i) =>
            new Date(i).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (i) =>
            e.jsx(we, { label: i.row.statusName, status: 'In Process' })
        },
        {
          field: 'action',
          headerName: 'Action',
          flex: 1,
          renderCell: (i) =>
            e.jsx(ve, {
              variant: 'outlined',
              size: 'small',
              'aria-label': 'outlined primary button group',
              children: e.jsx(Y, { onClick: () => k(i.row), children: 'View' })
            }),
          sortable: !1,
          filterable: !1
        }
      ],
      Q = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'assignQty',
          headerName: 'PX Assigned Qty',
          valueGetter: (i) => i.toLocaleString()
        }
      ];
    return e.jsxs(se, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(ue, {
          variant: 'outlined',
          children: [
            e.jsx(pe, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'View Production Process ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsxs(c, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(c, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(y, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Production',
                    name: 'productionId',
                    value: r.productionId,
                    onChange: g,
                    size: 'small',
                    children: M.map((i) =>
                      e.jsx(
                        W,
                        { value: i.productionId, children: i.collectionName },
                        i.productionId
                      )
                    )
                  })
                }),
                e.jsx(c, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(y, {
                    fullWidth: !0,
                    select: !0,
                    label: 'status',
                    name: 'status',
                    value: r.status,
                    onChange: g,
                    size: 'small',
                    children: b.map((i) =>
                      e.jsx(
                        W,
                        { value: i.statusId, children: i.statusDesc },
                        i.statusId
                      )
                    )
                  })
                }),
                e.jsxs(c, {
                  item: !0,
                  xs: 12,
                  children: [
                    e.jsx(J, { initialRows: G, iColumns: $, hideAction: !0 }),
                    e.jsxs(oe, {
                      open: N,
                      onClose: T,
                      fullWidth: !0,
                      maxWidth: 'xl',
                      children: [
                        e.jsxs(re, {
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
                            e.jsx(_, {
                              variant: 'h4',
                              component: 'div',
                              color: '#ffffff',
                              gutterBottom: !0,
                              fontSize: 20,
                              fontWeight: 2,
                              fontStyle: 'normal',
                              children: 'Issuance View'
                            }),
                            e.jsx(V, {
                              onClick: T,
                              sx: { color: '#ffffff' },
                              children: e.jsx(ce, {})
                            })
                          ]
                        }),
                        e.jsxs(ie, {
                          children: [
                            e.jsx(ne, { id: 'alert-dialog-slide-description' }),
                            e.jsxs(c, {
                              container: !0,
                              spacing: 1,
                              width: 'Inherit',
                              sx: { paddingY: 2, paddingX: 2 },
                              children: [
                                e.jsx(c, {
                                  item: !0,
                                  xs: 12,
                                  md: 3,
                                  children: e.jsx(y, {
                                    label: 'Issuance',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'collectionName',
                                    onChange: g,
                                    value: r.collectionName,
                                    required: !0,
                                    disabled: !0
                                  })
                                }),
                                e.jsx(c, {
                                  item: !0,
                                  xs: 12,
                                  md: 3,
                                  children: e.jsx(y, {
                                    label: 'ProcessType',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'processTypeName',
                                    onChange: g,
                                    value: r.processTypeName,
                                    required: !0,
                                    disabled: !0
                                  })
                                }),
                                e.jsx(c, {
                                  item: !0,
                                  xs: 12,
                                  md: 3,
                                  children: e.jsx(y, {
                                    size: 'small',
                                    label: 'Start Date',
                                    name: 'startDate',
                                    value: r.startDate,
                                    onChange: g,
                                    fullWidth: !0,
                                    disabled: !0,
                                    InputLabelProps: {
                                      shrink: !0,
                                      sx: { color: 'black' }
                                    }
                                  })
                                }),
                                e.jsx(c, {
                                  item: !0,
                                  xs: 12,
                                  md: 3,
                                  children: e.jsx(y, {
                                    label: 'Status',
                                    fullWidth: !0,
                                    size: 'small',
                                    name: 'statusName',
                                    onChange: g,
                                    value: r.statusName,
                                    required: !0,
                                    disabled: !0
                                  })
                                }),
                                e.jsx(c, {
                                  item: !0,
                                  xs: 12,
                                  children: e.jsx(J, {
                                    initialRows: B,
                                    iColumns: Q,
                                    hideAction: !0
                                  })
                                })
                              ]
                            }),
                            ' '
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
        e.jsx(je, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } })
      ]
    });
  },
  Ue = Ie(y)(({ theme: s }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  rt = () => {
    const { user: s } = de();
    o.useState([]);
    const [S, r] = o.useState(!1),
      [L, G] = o.useState([]),
      [F, C] = o.useState(!1),
      { enqueueSnackbar: R } = ge(),
      j = be(),
      [u, d] = o.useState({
        productionId: 0,
        collectionId: '',
        processTypeId: '',
        status: '',
        startDate: new Date().toISOString(),
        appId: s.appId,
        createdOn: new Date().toISOString(),
        createdBy: s.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: s.empId
      });
    console.log('Form Data:', u);
    const [A, f] = o.useState('1'),
      B = (a, l) => {
        f(l);
      },
      [h, b] = o.useState([]);
    o.useState(!1);
    const { data: D } = Se(),
      [M, O] = o.useState([]);
    o.useEffect(() => {
      if (D) {
        const a = Array.isArray(D.result[0]) ? D.result[0] : D.result;
        O(a);
      }
    }, [D]);
    const { data: g } = Te();
    o.useEffect(() => {
      if (g) {
        const l = g.result[0].productionProcessList.filter(
          (m) => m.lookUpName === 'Fabrication'
        );
        G(l);
      }
    }, [g]);
    const [N, P] = o.useState([]),
      { data: k, refetch: T } = Le();
    o.useEffect(() => {
      if (k) {
        const a = k.result[0];
        P(k.result.map((l, m) => ({ id: m + 1, ...l }))),
          a &&
            a.productionId &&
            d((l) => ({ ...l, productionId: a.productionId }));
      }
    }, [k, T]);
    const { data: $, refetch: Q } = le(),
      i = (a) => {
        const { name: l, value: m } = a.target;
        if (l === 'collectionId') {
          const w = N.find((t) => t.collectionId === parseInt(m));
          d({
            ...u,
            collectionId: m,
            productionId: w ? w.productionId : '',
            status: w ? w.status : ''
          }),
            x(1, m);
        } else d({ ...u, [l]: m });
      },
      x = async (a, l) => {
        C(!0);
        try {
          const m = await z.get(
            `http://100.42.177.77:81/api/Production/GetFabricForProductionByCollectionId?appId=${a}&collectionid=${l}`
          );
          if (m.data.success) {
            const w = m.data.result.map((t, n) => ({
              ...t,
              id: t.fabricId,
              sr: n + 1
            }));
            b(w);
          } else console.error(m.data.message);
        } catch (m) {
          console.error('Failed to fetch fabric for production data', m);
        } finally {
          C(!1);
        }
      },
      [v, E] = o.useState([]),
      { data: U, refetch: K } = ye(
        { productionId: u.productionId, status: u.ViewStatus },
        { skip: !u.productionId || !u.ViewStatus }
      );
    o.useEffect(() => {
      U &&
        E(
          U.result.map((a, l) => ({
            ...a,
            id: a.productionHeaderId,
            sr: l + 1
          }))
        );
    }, [U, K]),
      console.log(v);
    const X = (a) => {
      const { id: l, field: m, value: w } = a;
      console.log('Editing cell:', a),
        b((t) =>
          t.map((n) =>
            n.id === l
              ? {
                  ...n,
                  [m]: w,
                  productionHeaderId: 0,
                  productionHeaderDetId: 0,
                  appId: s.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: s.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: s.empId
                }
              : n
          )
        );
    };
    o.useEffect(() => {
      d({ ...u, productionDetails: h });
    }, [h, b]);
    const Z = [
      { field: 'sr', headerName: 'Sr#' },
      { field: 'collectionName', headerName: 'Collection Name' },
      { field: 'fabricName', headerName: 'Fabric Name' },
      {
        field: 'quantity',
        headerName: 'Quantity',
        valueGetter: (a) => a.toLocaleString(),
        renderCell: (a) =>
          e.jsx(_, { sx: { fontWeight: 'bold', mt: 2 }, children: a.value })
      },
      {
        field: 'assignQty',
        headerName: 'Assign Quantity',
        renderCell: (a) =>
          e.jsx(Ue, {
            variant: 'outlined',
            size: 'small',
            sx: { mt: 1, width: 50 },
            value: a.row.assignQty || '',
            onChange: (l) =>
              X({ id: a.id, field: 'assignQty', value: l.target.value }),
            type: 'number',
            InputProps: { style: { fontSize: '0.875rem' } }
          })
      },
      { field: 'uomName', headerName: 'UOM' }
    ];
    console.log('FormData:', u), console.log('Initial Rows:', h);
    const ee = async () => {
        for (let a of h)
          if (!a.assignQty) {
            R('Error: Enter assign quantity!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
            return;
          }
        try {
          console.log('FormData:', u), console.log('Initial Rows:', h);
          const a = await z.post(
            'http://100.42.177.77:81/api/Production/StartProductionProcess',
            u
          );
          a.data.success
            ? (R('Production process started successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              }),
              console.log('API saved successfully'),
              console.log('Response:', a),
              b([]),
              d({
                productionId: 0,
                collectionId: '',
                processTypeId: '',
                status: '',
                startDate: new Date().toISOString(),
                appId: s.appId,
                createdOn: new Date().toISOString(),
                createdBy: s.empId,
                lastUpdatedOn: new Date().toISOString(),
                lastUpdatedBy: s.empId
              }),
              Q())
            : (console.error(a.data.message),
              R('Failed to start production process', {
                variant: 'error',
                autoHideDuration: 5e3
              }));
        } catch (a) {
          console.error('Error starting production process', a),
            R('An error occurred while starting the production process', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      },
      te = (a) => {
        j.current &&
          j.current.autosizeColumns &&
          j.current.autosizeColumns({
            includeOutliers: !0,
            includeHeaders: !0
          });
      };
    return e.jsx(Re, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(se, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(Ae, {
          value: A,
          children: [
            e.jsx(se, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(Ee, {
                onChange: B,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(fe, {
                    icon: e.jsx(Oe, {}),
                    label: 'Production Process Fabrication',
                    value: '1',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(fe, {
                    icon: e.jsx(Be, {}),
                    label: 'Fabric Receving',
                    value: '2',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsxs(xe, {
              value: '1',
              children: [
                e.jsxs(ue, {
                  variant: 'outlined',
                  children: [
                    e.jsx(pe, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Fabric Requisitions',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsxs(c, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        e.jsx(c, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(y, {
                            label: 'Collection',
                            fullWidth: !0,
                            select: !0,
                            size: 'small',
                            name: 'collectionId',
                            onChange: i,
                            value: u.collectionId,
                            required: !0,
                            disabled: S,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: N.map((a) =>
                              e.jsx(
                                W,
                                {
                                  value: a.collectionId,
                                  children: a.collectionName
                                },
                                a.collectionId
                              )
                            )
                          })
                        }),
                        e.jsx(c, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(y, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Select Process',
                            name: 'processTypeId',
                            value: u.processTypeId,
                            onChange: i,
                            size: 'small',
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: L.map((a) =>
                              e.jsx(
                                W,
                                { value: a.lookUpId, children: a.lookUpName },
                                a.lookUpId
                              )
                            )
                          })
                        }),
                        e.jsx(c, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(y, {
                            size: 'small',
                            type: 'date',
                            label: 'Start Date',
                            name: 'startDate',
                            value: u.startDate,
                            onChange: i,
                            fullWidth: !0,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            }
                          })
                        }),
                        e.jsx(c, {
                          item: !0,
                          xs: 3,
                          textAlign: 'right',
                          sx: { mt: 1 },
                          children: e.jsx(Y, {
                            variant: 'contained',
                            size: 'small',
                            onClick: ee,
                            color: 'success',
                            children: 'Start Process'
                          })
                        }),
                        e.jsx(c, {
                          item: !0,
                          xs: 12,
                          mt: 1,
                          children: e.jsx(He, {
                            rows: h,
                            columns: Z,
                            getRowId: (a) => a.id,
                            disableRowSelectionOnClick: !0,
                            apiRef: j,
                            onStateChange: te,
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
                        })
                      ]
                    })
                  ]
                }),
                e.jsx(je, {
                  color: '#cc8587',
                  sx: { height: 1, width: '100%', mt: 2 }
                }),
                e.jsx(Qe, {})
              ]
            }),
            e.jsx(xe, { value: '2', children: e.jsx(Me, {}) })
          ]
        })
      })
    });
  };
export { rt as default };
