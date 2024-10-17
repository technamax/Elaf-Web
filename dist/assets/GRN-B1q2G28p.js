import {
  u as me,
  c as fe,
  a7 as he,
  b as ge,
  v as je,
  w as be,
  j as e,
  G as o,
  T as m,
  e as y,
  a8 as ye,
  J as Fe,
  I as ve,
  B as se,
  C as Ce,
  d as Se,
  L as Ie,
  M as Ne
} from './index-CzwspkkF.js';
import { r } from './vendor-BXCbSo2_.js';
import { d as Ge } from './CategoryOutlined-CACb1ZLu.js';
import { d as O } from './AssignmentOutlined-BFpRNIkb.js';
import './ReceivingDetails-CDLbn-lM.js';
import {
  R as xe,
  a as q,
  b as J,
  c as K,
  d as Z,
  B as ke
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { d as ee } from './Close-BQBfEc69.js';
import ce from './Reports-CL7Yzt2u.js';
import { B as E, a as Re, I as te } from './axios-lonJZgKi.js';
import { T as p } from './TextField-Djr8gt34.js';
import { S as ae } from './StatusChip-C_oGlGq1.js';
import { M as ue } from './MenuItem-ZWEe2ZC6.js';
import { T as De, a as Qe, b as D, c as I } from './TabPanel-Cg-Z_Qr2.js';
import './Skeleton-DdLL8d67.js';
const Le = ({ iss: l, handleClose: c, refetchData: f }) => {
    var d, S, R, z, le, ie, ne;
    const { user: F } = me(),
      [i, x] = r.useState({
        grnHeader: {
          grnId: 0,
          grnNumber: '',
          ...l,
          createdBy: F.empId,
          remarks: '',
          totalQuantity: l.gradeAQty,
          totalValue: l.gradeAQty * l.rate
        }
      }),
      { enqueueSnackbar: h } = fe(),
      [g, j] = r.useState([]),
      [n, Q] = r.useState([]),
      [re, L] = r.useState([]),
      [T, H] = r.useState([]),
      [P, M] = r.useState([]),
      { data: b, refetch: $ } = he(l.inspectionId, { skip: !l.inspectionId }),
      { data: v, refetch: oe } = ge(),
      { data: C, refetch: U } = je(),
      { data: N, refetch: G } = be();
    r.useEffect(() => {
      if ((b == null ? void 0 : b.result) === null) {
        j([]);
        return;
      }
      b && j(b.result.map((t, s) => ({ id: s + 1, ...t })));
    }, [b, $]),
      r.useEffect(() => {
        C && H(C.result.map((t, s) => ({ id: s + 1, ...t })));
      }, [C, U]),
      r.useEffect(() => {
        N && M(N.result.map((t, s) => ({ id: s + 1, ...t })));
      }, [N, G]),
      r.useEffect(() => {
        v &&
          (Q(v.result[0].destination.map((t, s) => ({ id: s + 1, ...t }))),
          L(v.result[0].dispatchFrom.map((t, s) => ({ id: s + 1, ...t }))));
      }, [v]),
      console.log('iss', l),
      console.log('formData', i),
      console.log('GRNList', g),
      console.log('dispatchFromList', re);
    const w = (t) => {
        const { name: s, value: pe } = t.target;
        x((de) => ({ ...de, grnHeader: { ...de.grnHeader, [s]: pe } }));
      },
      u = g.map((t) => ({
        ...t,
        grnId: 0,
        grnItemId: 0,
        total: t.gradeAQty * t.rate,
        acceptedQty: t.gradeAQty,
        grnaQty: t.gradeAQty,
        grnbQty: t.gradeBQty,
        grncpQty: t.gradeCPQty,
        bGradetotal: t.gradeBQty * t.rate * t.bGradeRate
      }));
    console.log('calRows', u),
      r.useEffect(() => {
        x({ ...i, grnDetailsList: [...u] });
      }, [g]);
    const k = u.reduce((t, s) => t + (s.gradeAQty ?? 0), 0).toFixed(2),
      B = u.reduce((t, s) => t + (s.total ?? 0), 0).toFixed(2),
      X = u.reduce((t, s) => t + (s.gradeBQty ?? 0), 0).toFixed(2),
      Y = u.reduce((t, s) => t + (s.gradeCPQty ?? 0), 0).toFixed(2),
      A = u.reduce((t, s) => t + (s.rejectedQty ?? 0), 0).toFixed(2),
      V = u.reduce((t, s) => t + (s.shortageQty ?? 0), 0).toFixed(2),
      W = u.reduce((t, s) => t + (s.bGradetotal ?? 0), 0).toFixed(2);
    r.useEffect(() => {
      x({
        ...i,
        grnDetailsList: [...u],
        gradeASum: k,
        overallTotal: B,
        bGradeSum: X,
        cpGradeSum: Y,
        rejectedSum: A,
        bGradeTotal: W,
        shortageSum: V
      });
    }, [g, j]),
      console.log('formData', i);
    const _ = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'gradeAQty', headerName: 'Grade A' },
        { field: 'rate', headerName: 'Rate' },
        {
          field: 'total',
          headerName: 'Total',
          renderCell: (t) => t.row.total.toLocaleString()
        },
        { field: 'gradeBQty', headerName: 'Grade B' },
        {
          field: 'bGradeRate',
          headerName: 'BGrade Rate',
          valueGetter: (t, s) => t * s.rate
        },
        {
          field: 'bGradetotal',
          headerName: 'BGradeTotal',
          renderCell: (t) => t.row.bGradetotal.toLocaleString()
        },
        { field: 'gradeCPQty', headerName: 'GradeCP' },
        {
          field: 'rejectedQty',
          headerName: 'Rejected',
          renderCell: (t) =>
            e.jsx(y, {
              label: t.value.toLocaleString(),
              sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
            })
        },
        { field: 'remarks', headerName: 'Remarks' },
        { field: 'shortageQty', headerName: 'Shortage' }
      ],
      a = async () => {
        try {
          const t = await Re.post('http://100.42.177.77:81/api/GRN/SaveGRN', i);
          f(),
            t.data.success
              ? h(`${t.data.message} !`, {
                  variant: 'success',
                  autoHideDuration: 5e3
                })
              : (h(`${t.data.message} !`, {
                  variant: 'error',
                  autoHideDuration: 5e3
                }),
                console.log('response.message', t.data.message)),
            console.log('Save response:', t.data),
            c();
        } catch (t) {
          console.error('Error saving data:', t),
            h('FAILED: Unable to start Process', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    return e.jsxs('div', {
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
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'Production',
                name: 'productionId',
                value: l.collectionName,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'PO',
                name: 'poName',
                value: l.poName,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'Issuance',
                name: 'issuanceId',
                value: l.issuanceId,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'IGP',
                name: 'igpNumber',
                value: l.igpNumber,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 1.5,
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'Proces Type',
                name: 'processTypeName',
                value: l.processTypeName,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(p, {
                fullWidth: !0,
                disabled: !0,
                label: 'Vendor',
                name: 'vendorName',
                value: l.vendorName,
                size: 'small'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 3,
              children: e.jsx(p, {
                label: 'Remarks',
                fullWidth: !0,
                size: 'small',
                name: 'remarks',
                onChange: w,
                value: i.grnHeader.remarks,
                required: !0
              })
            })
          ]
        }),
        e.jsxs(o, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          children: [
            e.jsx(o, {
              item: !0,
              xs: 12,
              children: e.jsx(xe, {
                initialRows: u,
                iColumns: _,
                hideAction: !0
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              sx: {},
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'OverAll Total :',
                  e.jsx(y, {
                    label:
                      (d = Number(i.overallTotal)) == null
                        ? void 0
                        : d.toLocaleString(),
                    sx: { backgroundColor: '#0000FF', color: '#FFFFFF' }
                  }),
                  ' '
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Grade B Total :',
                  e.jsx(y, {
                    label:
                      (S = Number(i.bGradeTotal)) == null
                        ? void 0
                        : S.toLocaleString(),
                    sx: { backgroundColor: '#0000FF', color: '#FFFFFF' }
                  })
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Shortage Quantity :',
                  e.jsx(y, {
                    label:
                      (R = Number(i.shortageSum)) == null
                        ? void 0
                        : R.toLocaleString(),
                    sx: { backgroundColor: '#0000FF', color: '#FFFFFF' }
                  })
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Grade A Quantity :',
                  e.jsx(y, {
                    label:
                      (z = i.gradeASum) == null ? void 0 : z.toLocaleString(),
                    sx: { backgroundColor: '#008000', color: '#FFFFFF' }
                  })
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 2,
              textAlign: 'right',
              children: e.jsx(E, {
                variant: 'contained',
                size: 'small',
                onClick: a,
                disabled: l.status === 9,
                children: 'Save'
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Grade B Quantity :',
                  e.jsx(y, {
                    label:
                      (le = i.bGradeSum) == null ? void 0 : le.toLocaleString(),
                    sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
                  }),
                  ' '
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Grade Cp Quantity :',
                  e.jsx(y, {
                    label:
                      (ie = i.cpGradeSum) == null
                        ? void 0
                        : ie.toLocaleString(),
                    sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
                  })
                ]
              })
            }),
            e.jsx(o, {
              item: !0,
              xs: 12,
              md: 2.5,
              children: e.jsxs(m, {
                variant: 'overline',
                sx: {
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 13,
                  justifyContent: 'space-between',
                  display: 'flex'
                },
                children: [
                  'Rejected Quantity :',
                  e.jsx(y, {
                    label:
                      (ne = i.rejectedSum) == null
                        ? void 0
                        : ne.toLocaleString(),
                    sx: { backgroundColor: '#FF0000', color: '#FFFFFF' }
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  },
  Te = () => {
    fe();
    const { user: l } = me(),
      [c, f] = r.useState({
        issuanceId: '',
        poId: '',
        productionId: '',
        ogpNumber: '',
        appId: l.appId,
        createdOn: new Date().toISOString(),
        createdBy: l.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: l.empId
      }),
      [F, i] = r.useState([]),
      [x, h] = r.useState([]),
      [g, j] = r.useState([]),
      {
        data: n,
        error: Q,
        isLoading: re,
        refetch: L
      } = ye(c.poId, { skip: !c.poId }),
      { data: T, refetch: H } = Fe(),
      { data: P, refetch: M } = ve(c.productionId, { skip: !c.productionId }),
      [b, $] = r.useState([]);
    r.useEffect(() => {
      T && $(T.result.map((a, d) => ({ id: d, ...a })));
    }, [T, H]),
      r.useEffect(() => {
        n && i(n.result.map((a, d) => ({ id: d + 1, ...a })));
      }, [n, L]),
      r.useEffect(() => {
        P && h(P.result.map((a, d) => ({ id: d + 1, ...a })));
      }, [P, M]),
      console.log('polist', x),
      console.log('initialRows', F);
    const v = (a) => {
      const { name: d, value: S } = a.target;
      if (d === 'poId') {
        const R = x.find((z) => z.poId === parseInt(S));
        f({ ...c, poId: S, issuanceId: R ? R.issuanceId : '' });
      } else f({ ...c, [d]: S });
    };
    console.log('formData', c);
    const [oe, C] = r.useState(!1),
      [U, N] = r.useState(!1),
      [G, w] = r.useState(!1),
      u = async (a) => {
        w(a), C(!0);
      },
      k = () => {
        C(!1);
      },
      B = () => {
        N(!1);
      },
      X = async (a) => {
        j(a.issuanceId);
      },
      [Y, A] = r.useState(!1),
      V = async (a) => {
        w(a), A(!0);
      },
      W = () => {
        A(!1);
      },
      _ = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'issuanceId', headerName: 'issuance#' },
        { field: 'poName', headerName: 'PO#' },
        { field: 'igpNumber', headerName: 'IGP#' },
        { field: 'collectionName', headerName: 'Production' },
        { field: 'processTypeName', headerName: 'Process' },
        {
          field: 'rate',
          headerName: 'Rate',
          renderCell: (a) => e.jsx(ae, { label: a.row.rate, status: 'Pending' })
        },
        {
          field: 'gradeAQty',
          headerName: 'GradeA',
          renderCell: (a) => {
            var d;
            return e.jsx(ae, {
              label:
                (d = a.row.gradeAQty) == null ? void 0 : d.toLocaleString(),
              status: 'Received'
            });
          }
        },
        {
          field: 'statusName',
          headerName: 'Status',
          renderCell: (a) => e.jsx(ae, { label: a.value, status: a.value })
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          renderCell: (a) =>
            e.jsx('div', {
              style: { display: 'flex', justifyContent: 'space-around' },
              children: e.jsxs(ke, {
                variant: 'text',
                size: 'small',
                sx: { mt: 1 },
                children: [
                  e.jsx(E, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => u(a.row),
                    disabled: a.row.status === 3,
                    children: 'Receive'
                  }),
                  e.jsx(E, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => X(a.row),
                    children: 'POST'
                  }),
                  e.jsx(E, {
                    size: 'small',
                    color: 'primary',
                    onClick: () => V(a.row),
                    children: 'GRN Report'
                  })
                ]
              })
            })
        }
      ];
    return e.jsx(se, {
      sx: { width: '100%', typography: 'body1' },
      children: e.jsxs(Ce, {
        variant: 'outlined',
        children: [
          e.jsx(Se, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'GRN',
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
                md: 3,
                children: e.jsx(p, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Production',
                  name: 'productionId',
                  value: c.productionId,
                  onChange: v,
                  size: 'small',
                  children: b.map((a) =>
                    e.jsx(
                      ue,
                      { value: a.productionId, children: a.collectionName },
                      a.productionId
                    )
                  )
                })
              }),
              e.jsx(o, {
                item: !0,
                xs: 12,
                md: 3,
                children: e.jsx(p, {
                  fullWidth: !0,
                  select: !0,
                  label: 'PO#',
                  name: 'poId',
                  value: c.poId,
                  onChange: v,
                  size: 'small',
                  children: x.map((a) =>
                    e.jsx(ue, { value: a.poId, children: a.poIdName }, a.poId)
                  )
                })
              }),
              e.jsxs(o, {
                item: !0,
                xs: 12,
                children: [
                  e.jsx(xe, { initialRows: F, iColumns: _, hideAction: !0 }),
                  e.jsxs(q, {
                    open: oe,
                    onClose: k,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(J, {
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
                          e.jsx(m, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'GRN Details'
                          }),
                          e.jsx(te, {
                            onClick: k,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ee, {})
                          })
                        ]
                      }),
                      e.jsxs(K, {
                        children: [
                          e.jsx(Z, { id: 'alert-dialog-slide-description' }),
                          e.jsx(Le, { iss: G, handleClose: k, refetchData: L })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(q, {
                    open: U,
                    onClose: B,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(J, {
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
                          e.jsx(m, {
                            variant: 'h4',
                            component: 'div',
                            color: '#ffffff',
                            gutterBottom: !0,
                            fontSize: 20,
                            fontWeight: 2,
                            fontStyle: 'normal',
                            children: 'Create OGP'
                          }),
                          e.jsx(te, {
                            onClick: B,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ee, {})
                          })
                        ]
                      }),
                      e.jsxs(K, {
                        children: [
                          e.jsx(Z, { id: 'alert-dialog-slide-description' }),
                          e.jsx(ce, { rId: 14, OGPNumber: G.igpNumber })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(q, {
                    open: Y,
                    onClose: W,
                    fullWidth: !0,
                    maxWidth: 'xl',
                    children: [
                      e.jsxs(J, {
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
                          e.jsx(m, {
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
                            onClick: W,
                            sx: { color: '#ffffff' },
                            children: e.jsx(ee, {})
                          })
                        ]
                      }),
                      e.jsxs(K, {
                        children: [
                          e.jsx(Z, { id: 'alert-dialog-slide-description' }),
                          e.jsx(ce, {
                            rId: 18,
                            GRN: { ParamInspectionId: G.inspectionId }
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
  Ve = () => {
    var h, g, j;
    const l = Ie(),
      c = (h = l.state) == null ? void 0 : h.data,
      f =
        (j = (g = l.state) == null ? void 0 : g.tab) == null
          ? void 0
          : j.toString();
    console.log('rowData', c), console.log('tab', f);
    const [F, i] = r.useState('1'),
      x = (n, Q) => {
        i(Q), console.log('value', F);
      };
    return (
      r.useEffect(() => {
        f && i(f);
      }, [f]),
      e.jsx(Ne, {
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
          children: e.jsxs(De, {
            value: F,
            children: [
              e.jsx(se, {
                sx: { borderBottom: 1, borderColor: 'divider' },
                children: e.jsxs(Qe, {
                  onChange: x,
                  children: [
                    e.jsx(D, {
                      icon: e.jsx(Ge, {}),
                      label: 'Dyeing GRN',
                      value: '1',
                      sx: (n) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${n.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(D, {
                      icon: e.jsx(O, {}),
                      label: 'Embroidery GRN',
                      value: '2',
                      sx: (n) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${n.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(D, {
                      icon: e.jsx(O, {}),
                      label: 'Schiffili GRN',
                      value: '3',
                      sx: (n) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${n.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(D, {
                      icon: e.jsx(O, {}),
                      label: 'Additional Process GRN',
                      value: '4',
                      sx: (n) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${n.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(D, {
                      icon: e.jsx(O, {}),
                      label: 'Additional Services GRN',
                      value: '5',
                      sx: (n) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${n.palette.primary.main} !important`
                        }
                      })
                    })
                  ]
                })
              }),
              e.jsx(I, { value: '1', children: e.jsx(Te, {}) }),
              e.jsx(I, { value: '2' }),
              e.jsx(I, { value: '3' }),
              e.jsx(I, { value: '4' }),
              e.jsx(I, { value: '5' }),
              e.jsx(I, { value: '6' })
            ]
          })
        })
      })
    );
  };
export { Ve as default };
