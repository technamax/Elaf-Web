import {
  r as se,
  o as te,
  j as e,
  u as ae,
  c as ie,
  z as ne,
  A as oe,
  x as le,
  E as re,
  F as ce,
  B as de,
  C as ue,
  d as fe,
  G as n,
  T as W,
  D as me
} from './index-a8gvI6HS.js';
import { r as o } from './vendor-BXCbSo2_.js';
import { B as q, I as m, a as he } from './axios-BAxkGnGK.js';
import { d as xe } from './VisibilityOutlined-7xGDXOA6.js';
import {
  R as h,
  a as E,
  b as H,
  c as P,
  d as G,
  B as pe
} from './ReuseableDataGrid-Bo304H0A.js';
import { d as A } from './Close-j8pmpgIQ.js';
import { T as c } from './TextField-CsNxJIZ0.js';
import { M as T } from './Skeleton-C1EQF4m0.js';
var N = {},
  ge = te;
Object.defineProperty(N, '__esModule', { value: !0 });
var L = (N.default = void 0),
  je = ge(se()),
  Ie = e;
L = N.default = (0, je.default)(
  (0, Ie.jsx)('path', {
    d: 'M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z'
  }),
  'MoveToInbox'
);
const Re = () => {
  ae(), o.useState([]);
  const { enqueueSnackbar: x } = ie(),
    [t, d] = o.useState({});
  console.log('initialFormData', t);
  const [ve, _] = o.useState(!1),
    [i, f] = o.useState({
      issuanceNo: (t == null ? void 0 : t.issuanceNo) || 0,
      issuanceName: (t == null ? void 0 : t.issuanceName) || '',
      issuanceDate: (t == null ? void 0 : t.issuanceDate) || null,
      collectionId: (t == null ? void 0 : t.collectionId) || ''
    });
  o.useEffect(() => {
    f({
      ...i,
      issuanceNo: (t == null ? void 0 : t.issuanceNo) || 0,
      issuanceName: (t == null ? void 0 : t.issuanceName) || '',
      issuanceDate: (t == null ? void 0 : t.issuanceDate) || null,
      collectionId: (t == null ? void 0 : t.collectionId) || ''
    });
  }, [t, d]);
  const [C, b] = o.useState([]),
    [D, M] = o.useState([]),
    { data: l, refetch: y } = ne(),
    { data: p, refetch: O } = oe(),
    { data: g, refetch: k } = le();
  re(i.productionId, { skip: !i.productionId });
  const { data: j, refetch: Ne } = ce(i.collectionId, {
      skip: !i.collectionId
    }),
    [I, Q] = o.useState([]),
    [v, V] = o.useState([]);
  o.useEffect(() => {
    g && Q(g.result.map((s, a) => ({ id: a + 1, ...s })));
  }, [g, k]),
    o.useEffect(() => {
      j && V(j.result.map((s, a) => ({ id: a + 1, ...s })));
    }, [j, k]),
    o.useEffect(() => {
      l && b(l.result.map((s, a) => ({ id: a + 1, ...s })));
    }, [l, y]),
    o.useEffect(() => {
      p && M(p.result.map((a, u) => ({ id: u + 1, ...a })));
      const s = D.map((a) => ({
        stockDetId: 0,
        stockId: 0,
        barcode: a.barcode,
        productName: a.productName,
        quantity: a.quantity,
        uom: a.uom,
        remarks: a.remarks
      }));
      f({ ...i, bxStockReceivingDetails: s });
    }, [p, O, i.collectionId]),
    console.log('initialRows', C),
    console.log('fabricDetails', v);
  const r = (s) => {
      const { name: a, value: u } = s.target;
      a === 'collectionId'
        ? (I.find((ee) => ee.collectionId === parseInt(u)),
          f({ ...i, collectionId: u }))
        : f({ ...i, [a]: u });
    },
    X = async () => {
      console.log('stockData', l),
        y(),
        l && b(l.result.map((s, a) => ({ id: a + 1, ...s })));
    },
    Y = async () => {
      console.log('stockData', l);
      try {
        const s = await he.post(
          'http://100.42.177.77:81/api/BxStockReceiving/SaveBxStockReceiving',
          i
        );
        console.log('Save response:', s.data),
          s.data.success
            ? x('Dyeing saved successfully!', {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (x(`${s.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', s.data.message));
      } catch (s) {
        console.error('Error saving data:', s),
          x('Dyeing not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
  console.log('formData', i);
  const [$, S] = o.useState(!1),
    [U, w] = o.useState(!1),
    F = (s) => {
      d(s), S(!0);
    },
    J = (s) => {
      d(s), w(!0);
    },
    B = () => {
      S(!1), d({});
    },
    R = () => {
      w(!1), d({});
    },
    K = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'issuanceNo', headerName: 'Issuance No' },
      { field: 'issuanceName', headerName: 'Issuance Name' },
      { field: 'noOfItems', headerName: 'No. Of Items' },
      { field: 'status', headerName: 'Status' },
      {
        field: 'issuanceDate',
        headerName: 'Issuance Date',
        valueGetter: (s) =>
          new Date(s).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      {
        field: 'View',
        headerName: 'View Details',
        renderCell: (s) =>
          e.jsx('div', {
            style: { display: 'flex', justifyContent: 'space-around' },
            children: e.jsxs(pe, {
              variant: 'text',
              size: 'small',
              children: [
                e.jsx(m, {
                  color: 'primary',
                  onClick: () => F(s.row),
                  children: e.jsx(L, {})
                }),
                e.jsx(m, {
                  color: 'primary',
                  onClick: () => J(s.row),
                  children: e.jsx(xe, {})
                })
              ]
            })
          })
      }
    ],
    Z = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'barcode', headerName: 'Barcode' },
      { field: 'designNo', headerName: 'Design' },
      { field: 'productName', headerName: 'Product Name' },
      { field: 'quantity', headerName: 'Quantity' },
      { field: 'uom', headerName: 'uom' },
      { field: 'remarks', headerName: 'remarks' }
    ],
    z = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'fabric', headerName: 'Fabric Name' },
      { field: 'total', headerName: 'Quantity from Planning' }
    ];
  return e.jsxs(de, {
    sx: { width: '100%', typography: 'body1' },
    children: [
      e.jsxs(ue, {
        variant: 'outlined',
        children: [
          e.jsx(fe, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Stock Receiving',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          e.jsxs(n, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              e.jsx(n, {
                item: !0,
                xs: 12,
                textAlign: 'right',
                sx: { mt: 2 },
                children: e.jsx(q, {
                  variant: 'contained',
                  size: 'small',
                  onClick: X,
                  children: 'Fetch'
                })
              }),
              e.jsxs(n, {
                item: !0,
                xs: 12,
                children: [
                  e.jsx(h, {
                    initialRows: C,
                    iColumns: K,
                    setIsEdit: _,
                    hideAction: !0
                  }),
                  e.jsxs(E, {
                    open: $,
                    onClose: B,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(H, {
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
                          e.jsx(W, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'View Details'
                          }),
                          e.jsx(m, {
                            onClick: B,
                            sx: { color: '#ffffff' },
                            children: e.jsx(A, {})
                          })
                        ]
                      }),
                      e.jsxs(P, {
                        children: [
                          e.jsx(G, { id: 'alert-dialog-slide-description' }),
                          e.jsxs(n, {
                            container: !0,
                            spacing: 1,
                            width: 'Inherit',
                            sx: { paddingY: 2, paddingX: 2 },
                            children: [
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(c, {
                                  label: 'Issuance No',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'issuanceNo',
                                  onChange: r,
                                  value: i.issuanceNo,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(c, {
                                  label: 'Issuance Name',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'issuanceName',
                                  onChange: r,
                                  value: i.issuanceName,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(c, {
                                  size: 'small',
                                  label: 'Issuance Date',
                                  name: 'issuanceDate',
                                  value: i.issuanceDate,
                                  onChange: r,
                                  fullWidth: !0,
                                  disabled: !0,
                                  InputLabelProps: {
                                    shrink: !0,
                                    sx: { color: 'black' }
                                  }
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(h, {
                                  initialRows: D,
                                  iColumns: Z,
                                  hideAction: !0
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 3,
                                children: e.jsx(c, {
                                  label: 'Collection',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'collectionId',
                                  onChange: r,
                                  value: i.collectionId,
                                  required: !0,
                                  select: !0,
                                  children: I.map((s) =>
                                    e.jsx(
                                      T,
                                      {
                                        value: s.collectionId,
                                        children: s.collectionName
                                      },
                                      s.collectionId
                                    )
                                  )
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 9,
                                textAlign: 'right',
                                sx: { mt: 2 },
                                children: e.jsx(q, {
                                  variant: 'contained',
                                  size: 'small',
                                  onClick: Y,
                                  children: 'Save'
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(h, {
                                  initialRows: v,
                                  iColumns: z,
                                  hideAction: !0
                                })
                              })
                            ]
                          }),
                          ' '
                        ]
                      })
                    ]
                  }),
                  e.jsxs(E, {
                    open: U,
                    onClose: R,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(H, {
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
                          e.jsx(W, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Receiving View'
                          }),
                          e.jsx(m, {
                            onClick: R,
                            sx: { color: '#ffffff' },
                            children: e.jsx(A, {})
                          })
                        ]
                      }),
                      e.jsxs(P, {
                        children: [
                          e.jsx(G, { id: 'alert-dialog-slide-description' }),
                          e.jsxs(n, {
                            container: !0,
                            spacing: 1,
                            width: 'Inherit',
                            sx: { paddingY: 2, paddingX: 2 },
                            children: [
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 3,
                                children: e.jsx(c, {
                                  label: 'Collection',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'collectionId',
                                  onChange: r,
                                  value: i.collectionId,
                                  required: !0,
                                  select: !0,
                                  children: I.map((s) =>
                                    e.jsx(
                                      T,
                                      {
                                        value: s.collectionId,
                                        children: s.collectionName
                                      },
                                      s.collectionId
                                    )
                                  )
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(c, {
                                  size: 'small',
                                  label: 'Issuance Date',
                                  name: 'issuanceDate',
                                  value: i.issuanceDate,
                                  onChange: r,
                                  fullWidth: !0,
                                  disabled: !0,
                                  InputLabelProps: {
                                    shrink: !0,
                                    sx: { color: 'black' }
                                  }
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(c, {
                                  label: 'Issuance Name',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'issuanceName',
                                  onChange: r,
                                  value: i.issuanceName,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(n, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(h, {
                                  initialRows: v,
                                  iColumns: z,
                                  hideAction: !0
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
          }),
          ' '
        ]
      }),
      e.jsx(me, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } })
    ]
  });
};
export { Re as default };
