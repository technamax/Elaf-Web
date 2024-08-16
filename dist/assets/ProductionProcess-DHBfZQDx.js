import {
  u as V,
  b as H,
  t as ue,
  v as K,
  j as e,
  C as O,
  d as U,
  G as r,
  l as pe,
  n as he,
  B as A,
  D as Z,
  s as me,
  w as xe,
  x as fe,
  y as Ie,
  M as ge,
  T as be
} from './index-a8gvI6HS.js';
import { r as a } from './vendor-BXCbSo2_.js';
import { B as E, a as _ } from './axios-BAxkGnGK.js';
import { d as ye } from './AddCircleOutlineOutlined-rt-o6Sk6.js';
import { d as Se, a as je } from './AssignmentOutlined-JXC2IVJR.js';
import { d as ee } from './VisibilityOutlined-7xGDXOA6.js';
import {
  R as Ce,
  u as we,
  D as J,
  B as De
} from './ReuseableDataGrid-Bo304H0A.js';
import { T as d } from './TextField-CsNxJIZ0.js';
import { M as f } from './Skeleton-C1EQF4m0.js';
import { T as ve, a as ke, b as W, c as Q } from './TabPanel-CcXhfPsy.js';
const Pe = () => {
    const { user: I } = V();
    a.useState([]);
    const [P, q] = a.useState(!1),
      [C, g] = a.useState([]),
      [N, k] = a.useState([]);
    a.useState(!1);
    const [c, b] = a.useState({
      productionId: 0,
      collectionId: '',
      processType: '',
      fabricId: '',
      shrinkage: '',
      wastage: '',
      requiredStock: '',
      avaliableStock: '',
      vendorName: '',
      issuanceDate: new Date().toISOString(),
      returnDate: new Date().toISOString(),
      appId: I.appId,
      createdOn: new Date().toISOString(),
      createdBy: I.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: I.empId
    });
    console.log('Form Data:', c),
      a.useState([]),
      a.useState([]),
      a.useState(!1);
    const { data: s } = H();
    a.useEffect(() => {
      if (s) {
        const o = s.result[0];
        g(o.productionProcessList), k(o.vendorList);
      }
    }, [s]);
    const [m, w] = a.useState([]),
      { data: y } = ue(c.collectionId, { skip: !c.collectionId });
    a.useEffect(() => {
      if (y) {
        const o = y.result;
        w(o);
      }
    }, [y]);
    const { data: S } = K(),
      [D, v] = a.useState([]);
    a.useEffect(() => {
      S && (S.result[0], v(S.result.map((o, x) => ({ id: x + 1, ...o }))));
    }, [S]);
    const p = (o) => {
      const { name: x, value: u } = o.target;
      b(x === 'collectionId' ? { ...c, collectionId: u } : { ...c, [x]: u });
    };
    return e.jsxs(O, {
      variant: 'outlined',
      children: [
        e.jsx(U, {
          className: 'css-4rfrnx-MuiCardHeader-root',
          avatar: e.jsx(ee, {}),
          title: 'Issuance',
          titleTypographyProps: { style: { color: 'white' } }
        }),
        e.jsxs(r, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                label: 'Collection',
                fullWidth: !0,
                select: !0,
                size: 'small',
                name: 'collectionId',
                onChange: p,
                value: c.collectionId,
                required: !0,
                disabled: P,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: D.map((o) =>
                  e.jsx(
                    f,
                    { value: o.collectionId, children: o.collectionName },
                    o.id
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                fullWidth: !0,
                select: !0,
                label: 'Select Process',
                name: 'processType',
                value: c.processType,
                onChange: p,
                size: 'small',
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: C.map((o) =>
                  e.jsx(
                    f,
                    { value: o.lookUpId, children: o.lookUpName },
                    o.lookUpId
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                fullWidth: !0,
                select: !0,
                label: 'Select Vendor',
                name: 'vendorName',
                value: c.vendorName,
                onChange: p,
                size: 'small',
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: N.map((o) =>
                  e.jsx(
                    f,
                    { value: o.lookUpId, children: o.lookUpName },
                    o.lookUpId
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                fullWidth: !0,
                select: !0,
                label: 'Select Fabric',
                name: 'fabricId',
                value: c.fabricId,
                onChange: p,
                size: 'small',
                InputLabelProps: { shrink: !0, sx: { color: 'black' } },
                children: m.map((o) =>
                  e.jsx(
                    f,
                    { value: o.fabricId, children: o.fabricName },
                    o.fabricId
                  )
                )
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                type: 'date',
                label: 'Issuance Date',
                name: 'issuanceDate',
                value: c.issuanceDate,
                onChange: p,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                type: 'date',
                label: 'Return Date',
                name: 'returnDate',
                value: c.returnDate,
                onChange: p,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                label: 'Shrinkage',
                name: 'shrinkage',
                value: c.shrinkage,
                onChange: p,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                label: 'Wastage',
                name: 'wastage',
                value: c.wastage,
                onChange: p,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                label: 'Required Stock',
                name: 'requiredStock',
                value: c.requiredStock,
                onChange: p,
                fullWidth: !0,
                disabled: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            e.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(d, {
                size: 'small',
                label: 'Avaliable Stock',
                name: 'avaliableStock',
                value: c.avaliableStock,
                onChange: p,
                fullWidth: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            })
          ]
        })
      ]
    });
  },
  Ne = () => {
    V();
    const [I, P] = a.useState([]),
      [q, C] = a.useState(!1),
      [g, N] = a.useState({ productionId: 0, processType: '' }),
      [k, c] = a.useState([]);
    a.useState(!1);
    const { data: b, refetch: s } = pe(),
      { data: m } = H(),
      { data: w, refetch: y } = he(g.categoryId, { skip: !g.categoryId }),
      [S, D] = a.useState([]),
      [v, p] = a.useState([]);
    console.log('processesList', v),
      a.useEffect(() => {
        m && p(m.result[0].planningTypeProcessList);
      }, [m]),
      a.useEffect(() => {
        w && c(w.result.map((u, j) => ({ id: j + 1, ...u })));
      }, [w, y]),
      a.useEffect(() => {
        b && D(b.result.map((u, j) => ({ id: j, ...u })));
      }, [b, s]),
      console.log('initialRows', k);
    const o = (u) => {
      const { name: j, value: G } = u.target;
      N({ ...g, [j]: G });
    };
    console.log('formData', g);
    const x = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'vendorName', headerName: 'Vendor' },
      { field: 'totalInMeter', headerName: 'Total in Meters' },
      { field: 'issuanceDate', headerName: 'Issuance Date' },
      { field: 'expectedReturnDate', headerName: 'Expected Return Date' },
      { field: 'fabricCount', headerName: 'Fabrics' },
      { field: 'status', headerName: 'Status' }
    ];
    return e.jsxs(A, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(O, {
          variant: 'outlined',
          children: [
            e.jsx(U, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Add Terms and Conditions ',
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
                  children: e.jsx(d, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Production',
                    name: 'productionId',
                    value: g.productionId,
                    onChange: o,
                    size: 'small',
                    children: S.map((u) =>
                      e.jsx(
                        f,
                        { value: u.categoryId, children: u.description },
                        u.categoryId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(d, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Process Type',
                    name: 'processType',
                    value: g.processType,
                    onChange: o,
                    size: 'small',
                    children: v.map((u) =>
                      e.jsx(
                        f,
                        { value: u.lookUpId, children: u.lookUpName },
                        u.lookUpId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  children: e.jsx(Ce, {
                    initialRows: k,
                    iColumns: x,
                    disableDelete: !0,
                    setInitialData: P,
                    setIsEdit: C
                  })
                })
              ]
            }),
            ' '
          ]
        }),
        e.jsx(Z, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } })
      ]
    });
  },
  Te = me(d)(({ theme: I }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  We = () => {
    const { user: I } = V(),
      [P, q] = a.useState([]),
      [C, g] = a.useState(!1),
      [N, k] = a.useState([]),
      [c, b] = a.useState(!1),
      [s, m] = a.useState({
        productionId: 0,
        collectionId: '',
        viewCollectionId: '',
        processType: '',
        AssignQty: '',
        status: '',
        startDate: new Date().toISOString(),
        appId: I.appId,
        createdOn: new Date().toISOString(),
        createdBy: I.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: I.empId,
        ViewStatus: ''
      });
    console.log('Form Data:', s);
    const [w, y] = a.useState('1'),
      S = (t, l) => {
        y(l);
      };
    a.useEffect(() => {
      m({});
    }, [P]);
    const [D, v] = a.useState([]),
      [p, o] = a.useState([]);
    a.useState(!1);
    const { data: x } = H();
    a.useEffect(() => {
      if (x) {
        const l = x.result[0].productionProcessList.filter(
          (i) => i.lookUpName === 'Fabrication'
        );
        k(l);
      }
    }, [x]);
    const { data: u, refetch: j } = xe(),
      [G, te] = a.useState([]),
      { data: R } = fe();
    a.useEffect(() => {
      if (R) {
        const t = R.result[0];
        te(R.result.map((l, i) => ({ id: i + 1, ...l }))),
          t &&
            t.productionId &&
            m((l) => ({ ...l, productionId: t.productionId }));
      }
    }, [R, j]);
    const { data: M } = K(),
      [z, ae] = a.useState([]);
    a.useEffect(() => {
      M && (M.result[0], ae(M.result.map((t, l) => ({ id: l + 1, ...t }))));
    }, [M, j]);
    const T = (t) => {
        const { name: l, value: i } = t.target;
        if (l === 'collectionId') {
          const h = G.find((n) => n.collectionId === parseInt(i));
          m({ ...s, collectionId: i, productionId: h ? h.productionId : '' }),
            se(1, i);
        } else if (l === 'viewCollectionId') {
          const h = z.find((n) => n.collectionId === parseInt(i));
          m({
            ...s,
            viewCollectionId: i,
            ViewStatus: h ? h.status : '',
            productionId: h ? h.productionId : ''
          }),
            X();
        } else m({ ...s, [l]: i });
      },
      se = async (t, l) => {
        b(!0);
        try {
          const i = await _.get(
            `http://100.42.177.77:81/api/Production/GetFabricForProductionByCollectionId?appId=${t}&collectionid=${l}`
          );
          if (i.data.success) {
            const h = i.data.result.map((n, B) => ({
              ...n,
              id: n.fabricId,
              sr: B + 1
            }));
            v(h);
          } else console.error(i.data.message);
        } catch (i) {
          console.error('Failed to fetch fabric for production data', i);
        } finally {
          b(!1);
        }
      },
      [$, oe] = a.useState([]),
      { data: F, refetch: X } = Ie(
        { productionId: s.productionId, ViewStatus: s.ViewStatus },
        { skip: !s.productionId, skip: !s.ViewStatus }
      );
    a.useEffect(() => {
      F &&
        oe(
          F.result.map((t, l) => ({
            ...t,
            id: t.productionHeaderId,
            sr: l + 1
          }))
        );
    }, [F, X]),
      console.log($);
    const re = (t) => {
        const { id: l, field: i, value: h } = t;
        console.log('Editing cell:', t),
          i === 'AssignQty' &&
            v((n) => n.map((B) => (B.id === l ? { ...B, AssignQty: h } : B)));
      },
      le = [
        { field: 'sr', headerName: 'Sr#', flex: 1 },
        { field: 'collectionName', headerName: 'Collection Name', flex: 1 },
        { field: 'fabricName', headerName: 'Fabric Name', flex: 1 },
        {
          field: 'quantity',
          headerName: 'Quantity',
          flex: 1,
          renderCell: (t) =>
            e.jsx(be, { sx: { fontWeight: 'bold', mt: 2 }, children: t.value })
        },
        {
          field: 'AssignQty',
          headerName: 'Assign Quantity',
          flex: 1,
          renderCell: (t) =>
            e.jsx(Te, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: 100 },
              value: t.row.AssignQty || '',
              onChange: (l) =>
                re({ id: t.id, field: 'AssignQty', value: l.target.value }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        { field: 'bxQuantity', headerName: 'BX Quantity', flex: 1 },
        { field: 'uomName', headerName: 'UOM', flex: 1 }
      ],
      Y = (t) => {
        y(t);
      },
      ie = [
        { field: 'sr', headerName: 'Sr#' },
        { field: 'collectionName', headerName: 'Collection Name', flex: 1 },
        { field: 'orderNumber', headerName: 'Order Number', flex: 1 },
        { field: 'processTypeName', headerName: 'Process Type', flex: 1 },
        {
          field: 'startDate',
          headerName: 'Start Date',
          flex: 1,
          valueGetter: (t) =>
            new Date(t).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'status', headerName: 'Status', flex: 1 },
        { field: 'designCount', headerName: 'Design Count', flex: 1 },
        {
          field: 'action',
          headerName: 'Action',
          flex: 1,
          renderCell: (t) =>
            e.jsxs(De, {
              variant: 'outlined',
              size: 'small',
              'aria-label': 'outlined primary button group',
              children: [
                e.jsx(E, { onClick: () => Y('2'), children: 'Issuance' }),
                e.jsx(E, { onClick: () => Y('3'), children: 'Recieving' })
              ]
            }),
          sortable: !1,
          filterable: !1
        }
      ];
    console.log('Selected Rows:', p);
    const ne = (t) => {
        o(t), console.log('New Selection:', t);
      },
      ce = async () => {
        try {
          console.log('FormData:', s),
            console.log('Selected Rows:', p),
            console.log('Initial Rows:', D);
          const l = D.filter((n) => p.includes(n.id)).map((n) => ({
              productionHeaderDetId: 0,
              productionHeaderId: s.productionId || 0,
              fabricId: n.fabricId,
              totalQuantity: n.quantity || 0,
              assignQty: n.AssignQty || '0',
              status: '',
              uomId: n.uomId || 0,
              createdBy: s.createdBy || 0,
              createdOn: s.createdOn || new Date().toISOString(),
              lastUpdatedBy: s.lastUpdatedBy || 0,
              lastUpdatedOn: s.lastUpdatedOn || new Date().toISOString(),
              rate: n.rate || 0,
              tax: n.tax || 0,
              totalBeforeTax: n.totalBeforeTax || 0,
              totalAfterTax: n.totalAfterTax || 0
            })),
            i = {
              productionHeaderId: s.productionId || 0,
              productionId: s.productionId || 0,
              processTypeId: s.processType || 0,
              status: s.status,
              startDate: s.startDate || new Date().toISOString(),
              createdOn: s.createdOn || new Date().toISOString(),
              createdBy: s.createdBy || 0,
              lastUpdatedOn: s.lastUpdatedOn || new Date().toISOString(),
              lastUpdatedBy: s.lastUpdatedBy || 0,
              productionDetails: l
            };
          console.log('Payload:', i);
          const h = await _.post(
            'http://100.42.177.77:81/api/Production/StartProductionProcess',
            i
          );
          h.data.success
            ? (alert('Production process started successfully!'),
              console.log('API saved successfully'),
              console.log('Response:', h))
            : (console.error(h.data.message),
              alert('Failed to start production process'));
        } catch (t) {
          console.error('Error starting production process', t),
            alert('An error occurred while starting the production process');
        }
      },
      L = we(),
      de = (t) => {
        L.current &&
          L.current.autosizeColumns &&
          L.current.autosizeColumns({
            includeOutliers: !0,
            includeHeaders: !0
          });
      };
    return e.jsx(ge, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(A, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(ve, {
          value: w,
          children: [
            e.jsx(A, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(ke, {
                onChange: S,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(W, {
                    icon: e.jsx(Se, {}),
                    label: 'Production Process ',
                    value: '1',
                    sx: (t) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${t.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(W, {
                    icon: e.jsx(ye, {}),
                    label: 'Issuance/Po',
                    value: '2',
                    sx: (t) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${t.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(W, {
                    icon: e.jsx(je, {}),
                    label: 'Issuance Details/OGP',
                    value: '3',
                    sx: (t) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${t.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsxs(Q, {
              value: '1',
              children: [
                e.jsxs(O, {
                  variant: 'outlined',
                  children: [
                    e.jsx(U, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Production Process > Fabtication',
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
                          children: e.jsx(d, {
                            label: 'Collection',
                            fullWidth: !0,
                            select: !0,
                            size: 'small',
                            name: 'collectionId',
                            onChange: T,
                            value: s.collectionId,
                            required: !0,
                            disabled: C,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: G.map((t) =>
                              e.jsx(
                                f,
                                {
                                  value: t.collectionId,
                                  children: t.collectionName
                                },
                                t.collectionId
                              )
                            )
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(d, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Select Process',
                            name: 'processType',
                            value: s.processType,
                            onChange: T,
                            size: 'small',
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: N.map((t) =>
                              e.jsx(
                                f,
                                { value: t.lookUpId, children: t.lookUpName },
                                t.lookUpId
                              )
                            )
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(d, {
                            size: 'small',
                            type: 'date',
                            label: 'Start Date',
                            name: 'startDate',
                            value: s.startDate,
                            onChange: T,
                            fullWidth: !0,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            }
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 3,
                          textAlign: 'right',
                          sx: { mt: 1 },
                          children: e.jsx(E, {
                            variant: 'contained',
                            size: 'small',
                            onClick: ce,
                            color: 'success',
                            children: 'Start Process'
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          mt: 1,
                          children: e.jsx(J, {
                            rows: D,
                            checkboxSelection: !0,
                            columns: le,
                            disableDelete: !0,
                            getRowId: (t) => t.id,
                            disableRowSelectionOnClick: !0,
                            autosizeOnMount: !0,
                            apiRef: L,
                            onStateChange: de,
                            onRowSelectionModelChange: (t) => ne(t),
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
                e.jsx(Z, {
                  color: '#cc8587',
                  sx: { height: 1, width: '100%', mt: 2 }
                }),
                e.jsxs(O, {
                  variant: 'outlined',
                  children: [
                    e.jsx(U, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      avatar: e.jsx(ee, {}),
                      title: 'View Production Process',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsxs(r, {
                      container: !0,
                      spacing: 2,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(d, {
                            label: 'Collection',
                            fullWidth: !0,
                            select: !0,
                            size: 'small',
                            name: 'viewCollectionId',
                            onChange: T,
                            value: s.viewCollectionId,
                            required: !0,
                            disabled: C,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: z.map((t) =>
                              e.jsx(
                                f,
                                {
                                  value: t.collectionId,
                                  children: t.collectionName
                                },
                                t.collectionId
                              )
                            )
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(d, {
                            label: 'Status',
                            fullWidth: !0,
                            select: !0,
                            size: 'small',
                            name: 'ViewStatus',
                            onChange: T,
                            value: s.ViewStatus,
                            required: !0,
                            disabled: C,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            },
                            children: z.map((t) =>
                              e.jsx(
                                f,
                                { value: t.status, children: t.status },
                                t.productionHeaderId
                              )
                            )
                          })
                        }),
                        e.jsx(r, {
                          item: !0,
                          xs: 12,
                          mt: 2,
                          children: e.jsx(J, {
                            rows: $,
                            columns: ie,
                            disableDelete: !0,
                            disableRowSelectionOnClick: !0,
                            autosizeOnMount: !0,
                            apiRef: L,
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
                })
              ]
            }),
            e.jsx(Q, { value: '2', children: e.jsx(Pe, {}) }),
            e.jsx(Q, { value: '3', children: e.jsx(Ne, {}) })
          ]
        })
      })
    });
  };
export { We as default };
