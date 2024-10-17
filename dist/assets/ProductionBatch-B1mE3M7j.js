import {
  A as K,
  E as Z,
  j as t,
  u as q,
  ab as F,
  ac as ee,
  B as T,
  C as U,
  d as _,
  G as n,
  T as te,
  D as A,
  c as ae,
  ad as re,
  ae as oe,
  M as se
} from './index-CzwspkkF.js';
import { r } from './vendor-BXCbSo2_.js';
import { I as M, B as ne, a as de } from './axios-lonJZgKi.js';
import { d as le } from './AddCircleOutlineOutlined-BaHny51-.js';
import {
  R as z,
  a as ce,
  b as ie,
  c as ue,
  d as me,
  u as he,
  D as pe
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { d as fe } from './VisibilityOutlined-D9xuAg3y.js';
import { S as xe } from './StatusChip-C_oGlGq1.js';
import { d as ge } from './Close-BQBfEc69.js';
import { T as h } from './TextField-Djr8gt34.js';
import { T as Ie, a as be, b as W, c as V } from './TabPanel-Cg-Z_Qr2.js';
import { M as Ne } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
var H = {},
  je = Z;
Object.defineProperty(H, '__esModule', { value: !0 });
var $ = (H.default = void 0),
  De = je(K()),
  Se = t;
$ = H.default = (0, De.default)(
  (0, Se.jsx)('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5'
  }),
  'PreviewOutlined'
);
const ve = ({ handleChangeTabs: l }) => {
    q();
    const [e, w] = r.useState({});
    console.log('initialFormData', e);
    const [c, P] = r.useState({
      fromDate: '',
      toDate: '',
      productionId: (e == null ? void 0 : e.productionId) || 0,
      collectionId: (e == null ? void 0 : e.collectionName) || '',
      orderNumber: (e == null ? void 0 : e.orderNumber) || '',
      launchDate: (e == null ? void 0 : e.launchDate) || '',
      status: (e == null ? void 0 : e.statusName) || '',
      remarks: (e == null ? void 0 : e.remarks) || ''
    });
    r.useEffect(() => {
      P({
        productionId: (e == null ? void 0 : e.productionId) || 0,
        collectionId: (e == null ? void 0 : e.collectionName) || '',
        orderNumber: (e == null ? void 0 : e.orderNumber) || '',
        launchDate:
          new Date(e == null ? void 0 : e.launchDate).toLocaleDateString(
            'en-GB',
            { day: 'numeric', month: 'short', year: '2-digit' }
          ) || '',
        status: (e == null ? void 0 : e.statusName) || '',
        remarks: (e == null ? void 0 : e.remarks) || ''
      });
    }, [e, w]);
    const [p, R] = r.useState([]),
      [j, L] = r.useState([]),
      { data: f, refetch: k } = F(),
      { data: u, refetch: D } = ee(c.productionId, { skip: !c.productionId }),
      [d, x] = r.useState([]);
    r.useEffect(() => {
      f && R(f.result.map((o, i) => ({ id: i + 1, ...o })));
    }, [f, k, l]),
      r.useEffect(() => {
        u && L(u.result.map((o, i) => ({ id: i + 1, ...o })));
      }, [u, D]),
      console.log('initialRows', p),
      console.log('batchDetailsRows', j);
    const g = (o) => {
      const { name: i, value: I } = o.target;
      if (i === 'collectionId') {
        const O = d.find((b) => b.collectionId === parseInt(I));
        P({ ...c, collectionId: I, orderNumber: O ? O.orderNumber : '' });
      } else P({ ...c, [i]: I });
    };
    console.log('formData', c);
    const [G, S] = r.useState(!1),
      B = (o) => {
        w(o), S(!0);
      },
      v = () => {
        S(!1), w({});
      },
      C = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'productionId', headerName: 'Production Id' },
        { field: 'collectionName', headerName: 'Collection Name' },
        { field: 'brandName', headerName: 'Brand Name' },
        { field: 'seasonName', headerName: 'Season Name' },
        {
          field: 'launchDate',
          headerName: 'Launch Date',
          valueGetter: (o) =>
            new Date(o).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'remarks', headerName: 'Remarks' },
        {
          field: 'View',
          headerName: 'View Details',
          renderCell: (o) =>
            t.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: t.jsx(M, {
                color: 'primary',
                onClick: () => B(o.row),
                children: t.jsx(fe, {})
              })
            })
        }
      ],
      E = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'designerName', headerName: 'Designer Name' },
        { field: 'poPcs', headerName: 'POPcs' },
        { field: 'colorName', headerName: 'Color' },
        {
          field: 'planningDate',
          headerName: 'Planning Date',
          valueGetter: (o) =>
            new Date(o).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'launchDate',
          headerName: 'Launch Date',
          valueGetter: (o) =>
            new Date(o).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'remarks', headerName: 'Remarks' },
        {
          field: 'statusName',
          headerName: 'Status Name',
          renderCell: (o) =>
            t.jsx(xe, { label: o.row.statusName, status: 'In Process' })
        },
        { field: 'designCount', headerName: 'Design Count' },
        { field: 'brandName', headerName: 'Brand Name' },
        { field: 'seasonName', headerName: 'Season Name' },
        { field: 'volume', headerName: 'Volume' }
      ];
    return t.jsxs(T, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        t.jsxs(U, {
          variant: 'outlined',
          children: [
            t.jsx(_, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'View Production Batches',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            t.jsx(n, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: t.jsxs(n, {
                item: !0,
                xs: 12,
                children: [
                  t.jsx(z, { initialRows: p, iColumns: C, hideAction: !0 }),
                  t.jsxs(ce, {
                    open: G,
                    onClose: v,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      t.jsxs(ie, {
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
                          t.jsx(te, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'View Details'
                          }),
                          t.jsx(M, {
                            onClick: v,
                            sx: { color: '#ffffff' },
                            children: t.jsx(ge, {})
                          })
                        ]
                      }),
                      t.jsxs(ue, {
                        children: [
                          t.jsx(me, { id: 'alert-dialog-slide-description' }),
                          t.jsxs(n, {
                            container: !0,
                            spacing: 1,
                            width: 'Inherit',
                            sx: { paddingY: 2, paddingX: 2 },
                            children: [
                              t.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: t.jsx(h, {
                                  label: 'Collection',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'collectionId',
                                  onChange: g,
                                  value: c.collectionId,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              t.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: t.jsx(h, {
                                  label: 'Order Number',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'orderNumber',
                                  onChange: g,
                                  value: c.orderNumber,
                                  required: !0,
                                  disabled: !0
                                })
                              }),
                              t.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: t.jsx(h, {
                                  size: 'small',
                                  label: 'Launch Date',
                                  name: 'launchDate',
                                  value: c.launchDate,
                                  onChange: g,
                                  fullWidth: !0,
                                  disabled: !0,
                                  InputLabelProps: {
                                    shrink: !0,
                                    sx: { color: 'black' }
                                  }
                                })
                              }),
                              t.jsx(n, {
                                item: !0,
                                xs: 12,
                                md: 8,
                                children: t.jsx(h, {
                                  label: 'Remarks',
                                  fullWidth: !0,
                                  size: 'small',
                                  name: 'remarks',
                                  onChange: g,
                                  value: c.remarks,
                                  disabled: !0,
                                  InputLabelProps: { sx: { color: 'black' } }
                                })
                              }),
                              t.jsx(n, {
                                item: !0,
                                xs: 12,
                                children: t.jsx(z, {
                                  initialRows: j,
                                  iColumns: E,
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
            }),
            ' '
          ]
        }),
        t.jsx(A, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } })
      ]
    });
  },
  He = () => {
    const { user: l } = q(),
      [e, w] = r.useState([]),
      [c, P] = r.useState(!1),
      [p, R] = r.useState([]),
      [j, L] = r.useState({}),
      [f, k] = r.useState([]),
      u = he(),
      { enqueueSnackbar: D } = ae(),
      [d, x] = r.useState({
        productionId: 0,
        collectionId: '',
        orderNumber: '',
        launchDate: '',
        remarks: '',
        productionBatchDetails: [p],
        appId: l.appId,
        createdOn: new Date().toISOString(),
        createdBy: l.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: l.empId
      });
    console.log('formData', d);
    const [g, G] = r.useState('1'),
      S = (a, s) => {
        G(s);
      };
    r.useEffect(() => {
      x({
        productionId: (e == null ? void 0 : e.productionId) || 0,
        collectionId: (e == null ? void 0 : e.collectionId) || '',
        orderNumber: (e == null ? void 0 : e.orderNumber) || '',
        launchDate: (e == null ? void 0 : e.launchDate) || '',
        remarks: (e == null ? void 0 : e.remarks) || '',
        appId: (e == null ? void 0 : e.appId) || l.appId,
        createdOn:
          (e == null ? void 0 : e.createdOn) || new Date().toISOString(),
        createdBy: (e == null ? void 0 : e.createdBy) || l.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: l.empId
      });
    }, [e]);
    const [B, v] = r.useState([]);
    r.useState(!1);
    const { data: C, refetch: E } = re(),
      { data: o, refetch: i } = oe(d.collectionId, { skip: !d.collectionId }),
      [I, O] = r.useState([]);
    r.useEffect(() => {
      C && O(C.result.map((a, s) => ({ id: s + 1, ...a })));
    }, [C, E]),
      r.useEffect(() => {
        o && v(o.result.map((a, s) => ({ id: s + 1, ...a })));
      }, [o, i]),
      console.log('initialRows', B);
    const b = (a) => {
        const { name: s, value: N } = a.target;
        if (s === 'collectionId') {
          const m = I.find((y) => y.collectionId === parseInt(N));
          x({ ...d, collectionId: N, orderNumber: m ? m.orderNumber : '' });
        } else x({ ...d, [s]: N });
      },
      Q = () => {
        const a = {};
        return d.launchDate || (a.launchDate = 'Launch Date is required'), a;
      },
      X = async () => {
        const a = Q();
        if (Object.keys(a).length > 0) {
          L(a);
          return;
        }
        if (f.length === 0) {
          D('Please select at least one row before saving!', {
            variant: 'warning',
            autoHideDuration: 5e3
          });
          return;
        }
        try {
          const s = await de.post(
            'http://100.42.177.77:81/api/Production/SaveProductionBatchHeader',
            d
          );
          D('Production Header saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
            console.log('Save response:', s.data),
            x((N) => ({
              productionId: 0,
              collectionId: '',
              orderNumber: '',
              launchDate: '',
              remarks: '',
              appId: l.appId,
              createdOn: new Date().toISOString(),
              createdBy: l.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: l.empId
            })),
            k([]),
            v([]),
            i();
        } catch (s) {
          console.error('Error saving data:', s),
            D('Production Header not saved !', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    console.log('formData', d);
    const Y = [
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
      J = r.useCallback(
        (a) => {
          k(a);
          const s = a
            .map((m) => {
              const y = u.current.getRow(m);
              return console.log('rowData', y), y ? y.planningHeaderId : null;
            })
            .filter((m) => m !== null);
          console.log('planningHeaderIds', s);
          const N = s.map((m) => ({
            prodctionDetId: 0,
            productionId: 0,
            planningHeaderId: m,
            createdOn: new Date().toISOString(),
            createdBy: l.empId,
            lastUpdatedBy: l.empId,
            lastUpdatedOn: new Date().toISOString()
          }));
          R(N);
        },
        [u]
      );
    return (
      r.useEffect(() => {
        x({ ...d, productionBatchDetails: p });
      }, [p]),
      r.useEffect(() => {
        u.current && console.log('API ref is ready:', u.current);
      }, [u]),
      console.log('selectedDesigns:', p),
      t.jsx(se, {
        style: {
          borderWidth: 1,
          borderStyle: 'dotted',
          borderColor: '#a11f23',
          width: 'auto',
          maxHeight: { xs: '80vh', md: 'auto' },
          overflow: 'auto'
        },
        children: t.jsx(T, {
          sx: { width: '100%', typography: 'body1' },
          children: t.jsxs(Ie, {
            value: g,
            children: [
              t.jsx(T, {
                sx: { borderBottom: 1, borderColor: 'divider' },
                children: t.jsxs(be, {
                  onChange: S,
                  'aria-label': 'lab API tabs example',
                  children: [
                    t.jsx(W, {
                      icon: t.jsx(le, {}),
                      label: 'Production Initialization',
                      value: '1',
                      sx: (a) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${a.palette.primary.main} !important`
                        }
                      })
                    }),
                    t.jsx(W, {
                      icon: t.jsx($, {}),
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
              t.jsxs(V, {
                value: '1',
                children: [
                  t.jsxs(U, {
                    variant: 'outlined',
                    children: [
                      t.jsx(_, {
                        className: 'css-4rfrnx-MuiCardHeader-root',
                        title: 'Production Batch',
                        titleTypographyProps: { style: { color: 'white' } }
                      }),
                      t.jsxs(n, {
                        container: !0,
                        spacing: 1,
                        width: 'Inherit',
                        sx: { paddingY: 2, paddingX: 2 },
                        children: [
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: t.jsx(h, {
                              label: 'Collection',
                              fullWidth: !0,
                              select: !0,
                              size: 'small',
                              name: 'collectionId',
                              onChange: b,
                              value: d.collectionId,
                              required: !0,
                              disabled: c,
                              children: I.map((a) =>
                                t.jsx(
                                  Ne,
                                  {
                                    value: a.collectionId,
                                    children: a.collectionName
                                  },
                                  a.collectionId
                                )
                              )
                            })
                          }),
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: t.jsx(h, {
                              label: 'Order Number',
                              fullWidth: !0,
                              size: 'small',
                              name: 'orderNumber',
                              onChange: b,
                              value: d.orderNumber,
                              required: !0,
                              disabled: c
                            })
                          }),
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            children: t.jsx(h, {
                              size: 'small',
                              type: 'date',
                              label: 'Launch Date',
                              name: 'launchDate',
                              value: d.launchDate,
                              onChange: b,
                              fullWidth: !0,
                              error: !!j.launchDate,
                              helperText: j.launchDate,
                              InputLabelProps: {
                                shrink: !0,
                                sx: { color: 'black' }
                              }
                            })
                          }),
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            children: t.jsx(h, {
                              label: 'Remarks',
                              fullWidth: !0,
                              size: 'small',
                              name: 'remarks',
                              onChange: b,
                              value: d.remarks,
                              InputLabelProps: { sx: { color: 'black' } }
                            })
                          }),
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            children: t.jsx('div', {
                              style: { height: 400, width: '100%' },
                              children: t.jsx(pe, {
                                rows: B,
                                columns: Y,
                                apiRef: u,
                                checkboxSelection: !0,
                                onRowSelectionModelChange: J,
                                rowSelectionModel: f
                              })
                            })
                          }),
                          t.jsx(n, {
                            item: !0,
                            xs: 12,
                            textAlign: 'right',
                            sx: { mt: 2 },
                            children: t.jsx(ne, {
                              variant: 'contained',
                              size: 'small',
                              onClick: X,
                              children: 'Save'
                            })
                          })
                        ]
                      }),
                      ' '
                    ]
                  }),
                  t.jsx(A, {
                    color: '#cc8587',
                    sx: { height: 1, width: '100%', mt: 2 }
                  }),
                  t.jsx(n, { container: !0, spacing: 2, width: 'Inherit' })
                ]
              }),
              t.jsx(V, {
                value: '2',
                children: t.jsx(ve, { handleChangeTabs: S })
              })
            ]
          })
        })
      })
    );
  };
export { He as default };
