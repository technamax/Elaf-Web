import {
  r as Z,
  n as F,
  j as e,
  u as G,
  y as ee,
  z as q,
  B as L,
  C as U,
  d as V,
  G as o,
  T as te,
  D as _,
  c as re,
  v as se,
  M as ae
} from './index-Ck0MIkUq.js';
import { r as s } from './vendor-BXCbSo2_.js';
import { I as H, B as oe, a as ne } from './axios-CgIVMX8t.js';
import { d as le } from './AddCircleOutlineOutlined-D8j0rvJ_.js';
import {
  R as z,
  D as de,
  a as ce,
  b as ie,
  c as ue,
  u as he,
  d as me
} from './ReuseableDataGrid-CdgPKZaX.js';
import { d as pe } from './VisibilityOutlined-Ds6HNaPA.js';
import { d as fe } from './Close-DJFnbESS.js';
import { T as h } from './TextField-BujPyVEk.js';
import { T as xe, a as ge, b as M, c as W } from './TabPanel-CBwhICZn.js';
import { M as Ie } from './Skeleton-DFEmEML1.js';
var T = {},
  be = F;
Object.defineProperty(T, '__esModule', { value: !0 });
var A = (T.default = void 0),
  je = be(Z()),
  ve = e;
A = T.default = (0, je.default)(
  (0, ve.jsx)('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5'
  }),
  'PreviewOutlined'
);
const Se = () => {
    G(), s.useState([]);
    const [t, r] = s.useState({}),
      [$, y] = s.useState(!1),
      [c, m] = s.useState({
        fromDate: '',
        toDate: '',
        collectionId: '',
        productionId: (t == null ? void 0 : t.productionId) || 0,
        collectionId: (t == null ? void 0 : t.collectionId) || '',
        orderNumber: (t == null ? void 0 : t.orderNumber) || '',
        launchDate: (t == null ? void 0 : t.launchDate) || '',
        status: (t == null ? void 0 : t.status) || '',
        remarks: (t == null ? void 0 : t.remarks) || ''
      });
    s.useEffect(() => {
      m({
        productionId: (t == null ? void 0 : t.productionId) || 0,
        collectionId: (t == null ? void 0 : t.collectionId) || '',
        orderNumber: (t == null ? void 0 : t.orderNumber) || '',
        launchDate: (t == null ? void 0 : t.launchDate) || '',
        status: (t == null ? void 0 : t.status) || '',
        remarks: (t == null ? void 0 : t.remarks) || ''
      });
    }, [t, r]);
    const [b, N] = s.useState([]),
      { data: p, refetch: B } = ee(),
      { data: O, refetch: f } = q(c.collectionId, { skip: !c.collectionId }),
      [w, n] = s.useState([]);
    s.useEffect(() => {
      p && n(p.result.map((l, u) => ({ id: u + 1, ...l })));
    }, [p, B]),
      s.useEffect(() => {
        p && N(p.result.map((l, u) => ({ id: u + 1, ...l })));
      }, [p, f]),
      console.log('initialRows', b);
    const i = (l) => {
      const { name: u, value: g } = l.target;
      if (u === 'collectionId') {
        const S = w.find((k) => k.collectionId === parseInt(g));
        m({ ...c, collectionId: g, orderNumber: S ? S.orderNumber : '' });
      } else m({ ...c, [u]: g });
    };
    console.log('formData', c);
    const [R, D] = s.useState(!1),
      E = (l) => {
        r(l), D(!0);
      },
      j = () => {
        D(!1), r({});
      },
      v = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'productionId', headerName: 'Production Id' },
        { field: 'collectionName', headerName: 'Collection Name' },
        { field: 'brandName', headerName: 'Brand Name' },
        { field: 'seasonName', headerName: 'Season Name' },
        {
          field: 'launchDate',
          headerName: 'Launch Date',
          valueGetter: (l) =>
            new Date(l).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'remarks', headerName: 'Remarks' },
        { field: 'status', headerName: 'Status' },
        {
          field: 'View',
          headerName: 'View Details',
          renderCell: (l) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsx(H, {
                color: 'primary',
                onClick: () => E(l.row),
                children: e.jsx(pe, {})
              })
            })
        }
      ];
    return e.jsxs(L, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(U, {
          variant: 'outlined',
          children: [
            e.jsx(V, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'View Production Batches',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(o, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(o, {
                item: !0,
                xs: 12,
                children: [
                  e.jsx(z, {
                    initialRows: b,
                    iColumns: v,
                    setIsEdit: y,
                    hideAction: !0
                  }),
                  e.jsxs(de, {
                    open: R,
                    onClose: j,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(ce, {
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
                          e.jsx(te, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'View Details'
                          }),
                          e.jsx(H, {
                            onClick: j,
                            sx: { color: '#ffffff' },
                            children: e.jsx(fe, {})
                          })
                        ]
                      }),
                      e.jsxs(ie, {
                        children: [
                          e.jsx(ue, { id: 'alert-dialog-slide-description' }),
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
                                children: e.jsx(h, {
                                  label: 'Collection',
                                  fullWidth: !0,
                                  select: !0,
                                  size: 'small',
                                  name: 'collectionId',
                                  onChange: i,
                                  value: c.collectionId,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(o, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(h, {
                                  label: 'Order Number',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'orderNumber',
                                  onChange: i,
                                  value: c.orderNumber,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(o, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(h, {
                                  size: 'small',
                                  type: 'date',
                                  label: 'Launch Date',
                                  name: 'launchDate',
                                  value: c.launchDate,
                                  onChange: i,
                                  fullWidth: !0,
                                  disabled: !0,
                                  InputLabelProps: {
                                    shrink: !0,
                                    sx: { color: 'black' }
                                  }
                                })
                              }),
                              e.jsx(o, {
                                item: !0,
                                xs: 12,
                                md: 8,
                                children: e.jsx(h, {
                                  label: 'Remarks',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'remarks',
                                  onChange: i,
                                  value: c.remarks,
                                  disabled: !0,
                                  InputLabelProps: { sx: { color: 'black' } }
                                })
                              }),
                              e.jsx(o, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: e.jsx(h, {
                                  label: 'Status',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'status',
                                  onChange: i,
                                  value: c.status,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              e.jsx(o, {
                                item: !0,
                                xs: 12,
                                children: e.jsx(z, {
                                  initialRows: b,
                                  iColumns: v
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
            }),
            ' '
          ]
        }),
        e.jsx(_, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } })
      ]
    });
  },
  Ee = () => {
    const { user: t } = G(),
      [r, $] = s.useState([]),
      [y, c] = s.useState(!1),
      [m, b] = s.useState([]),
      [N, p] = s.useState({}),
      [B, O] = s.useState([]),
      f = he(),
      { enqueueSnackbar: w } = re(),
      [n, i] = s.useState({
        productionId: 0,
        collectionId: '',
        orderNumber: '',
        launchDate: '',
        remarks: '',
        productionBatchDetails: [m],
        appId: t.appId,
        createdOn: new Date().toISOString(),
        createdBy: t.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: t.empId
      });
    console.log('formData', n);
    const [R, D] = s.useState('1'),
      E = (a, d) => {
        D(d);
      };
    s.useEffect(() => {
      i({
        productionId: (r == null ? void 0 : r.productionId) || 0,
        collectionId: (r == null ? void 0 : r.collectionId) || '',
        orderNumber: (r == null ? void 0 : r.orderNumber) || '',
        launchDate: (r == null ? void 0 : r.launchDate) || '',
        remarks: (r == null ? void 0 : r.remarks) || '',
        appId: (r == null ? void 0 : r.appId) || t.appId,
        createdOn:
          (r == null ? void 0 : r.createdOn) || new Date().toISOString(),
        createdBy: (r == null ? void 0 : r.createdBy) || t.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: t.empId
      });
    }, [r]);
    const [j, v] = s.useState([]);
    s.useState(!1);
    const { data: l, refetch: u } = se(),
      { data: g, refetch: S } = q(n.collectionId, { skip: !n.collectionId }),
      [k, X] = s.useState([]);
    s.useEffect(() => {
      l && X(l.result.map((a, d) => ({ id: d + 1, ...a })));
    }, [l, u]),
      s.useEffect(() => {
        g && v(g.result.map((a, d) => ({ id: d + 1, ...a })));
      }, [g, S]),
      console.log('initialRows', j);
    const P = (a) => {
        const { name: d, value: I } = a.target;
        if (d === 'collectionId') {
          const x = k.find((C) => C.collectionId === parseInt(I));
          i({ ...n, collectionId: I, orderNumber: x ? x.orderNumber : '' });
        } else i({ ...n, [d]: I });
      },
      Y = () => {
        const a = {};
        return n.launchDate || (a.launchDate = 'Launch Date is required'), a;
      },
      Q = async () => {
        const a = Y();
        if (Object.keys(a).length > 0) {
          p(a);
          return;
        }
        try {
          const d = await ne.post(
            'http://100.42.177.77:81/api/Production/SaveProductionBatchHeader',
            n
          );
          w('Production Header saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
            console.log('Save response:', d.data),
            i((I) => ({
              productionId: 0,
              collectionId: '',
              orderNumber: '',
              launchDate: '',
              remarks: '',
              appId: t.appId,
              createdOn: new Date().toISOString(),
              createdBy: t.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: t.empId
            })),
            O([]),
            v([]),
            S();
        } catch (d) {
          console.error('Error saving data:', d),
            w('Production Header not saved !', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('formData', n);
    const J = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'orderNumber', headerName: 'Order Number' },
        { field: 'designNo', headerName: 'Design No.' },
        { field: 'designerName', headerName: 'DesignerName' },
        { field: 'poPcs', headerName: 'PO Pcs..' },
        {
          field: 'planningDate',
          headerName: 'Date Of Planning',
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'colorName', headerName: 'Color' }
      ],
      K = s.useCallback(
        (a) => {
          O(a);
          const I = a
            .map((x) => {
              const C = f.current.getRow(x);
              return console.log('rowData', C), C ? C.planningHeaderId : null;
            })
            .filter((x) => x !== null)
            .map((x) => ({
              prodctionDetId: 0,
              productionId: 0,
              planningHeaderId: x,
              createdOn: new Date().toISOString(),
              createdBy: t.empId,
              lastUpdatedBy: t.empId,
              lastUpdatedOn: new Date().toISOString()
            }));
          b(I);
        },
        [f]
      );
    return (
      s.useEffect(() => {
        i({ ...n, productionBatchDetails: m });
      }, [m]),
      s.useEffect(() => {
        f.current && console.log('API ref is ready:', f.current);
      }, [f]),
      console.log('selectedDesigns:', m),
      e.jsx(ae, {
        style: {
          borderWidth: 1,
          borderStyle: 'dotted',
          borderColor: '#a11f23',
          width: 'auto',
          maxHeight: { xs: '80vh', md: 'auto' },
          overflow: 'auto'
        },
        children: e.jsx(L, {
          sx: { width: '100%', typography: 'body1' },
          children: e.jsxs(xe, {
            value: R,
            children: [
              e.jsx(L, {
                sx: { borderBottom: 1, borderColor: 'divider' },
                children: e.jsxs(ge, {
                  onChange: E,
                  'aria-label': 'lab API tabs example',
                  children: [
                    e.jsx(M, {
                      icon: e.jsx(le, {}),
                      label: 'Production Initialization',
                      value: '1',
                      sx: (a) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${a.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(M, {
                      icon: e.jsx(A, {}),
                      label: 'View Production Batches',
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
              e.jsxs(W, {
                value: '1',
                children: [
                  e.jsxs(U, {
                    variant: 'outlined',
                    children: [
                      e.jsx(V, {
                        className: 'css-4rfrnx-MuiCardHeader-root',
                        title: 'Production Batch',
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
                            children: e.jsx(h, {
                              label: 'Collection',
                              fullWidth: !0,
                              select: !0,
                              size: 'small',
                              name: 'collectionId',
                              onChange: P,
                              value: n.collectionId,
                              required: !0,
                              disabled: y,
                              children: k.map((a) =>
                                e.jsx(
                                  Ie,
                                  {
                                    value: a.collectionId,
                                    children: a.collectionName
                                  },
                                  a.collectionId
                                )
                              )
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: e.jsx(h, {
                              label: 'Order Number',
                              fullWidth: !0,
                              size: 'small',
                              name: 'orderNumber',
                              onChange: P,
                              value: n.orderNumber,
                              required: !0,
                              disabled: y
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: e.jsx(h, {
                              size: 'small',
                              type: 'date',
                              label: 'Launch Date',
                              name: 'launchDate',
                              value: n.launchDate,
                              onChange: P,
                              fullWidth: !0,
                              error: !!N.launchDate,
                              helperText: N.launchDate,
                              InputLabelProps: {
                                shrink: !0,
                                sx: { color: 'black' }
                              }
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            md: 8,
                            children: e.jsx(h, {
                              label: 'Remarks',
                              fullWidth: !0,
                              size: 'small',
                              name: 'remarks',
                              onChange: P,
                              value: n.remarks,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            children: e.jsx('div', {
                              style: { height: 400, width: '100%' },
                              children: e.jsx(me, {
                                rows: j,
                                columns: J,
                                apiRef: f,
                                checkboxSelection: !0,
                                onRowSelectionModelChange: K,
                                rowSelectionModel: B
                              })
                            })
                          }),
                          e.jsx(o, {
                            item: !0,
                            xs: 12,
                            textAlign: 'right',
                            sx: { mt: 2 },
                            children: e.jsx(oe, {
                              variant: 'contained',
                              size: 'small',
                              onClick: Q,
                              children: 'Save'
                            })
                          })
                        ]
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(_, {
                    color: '#cc8587',
                    sx: { height: 1, width: '100%', mt: 2 }
                  }),
                  e.jsx(o, { container: !0, spacing: 2, width: 'Inherit' })
                ]
              }),
              e.jsx(W, { value: '2', children: e.jsx(Se, {}) })
            ]
          })
        })
      })
    );
  };
export { Ee as default };
