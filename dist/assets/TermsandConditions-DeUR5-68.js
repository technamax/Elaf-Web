import {
  u as z,
  x as G,
  z as Q,
  j as e,
  B as N,
  C as w,
  d as T,
  G as n,
  D as P,
  b as te,
  a2 as se,
  T as ae,
  M as re
} from './index-CzwspkkF.js';
import { r as s } from './vendor-BXCbSo2_.js';
import { B as W, a as Y } from './axios-lonJZgKi.js';
import { d as de } from './AddCircleOutlineOutlined-BaHny51-.js';
import { d as oe } from './CategoryOutlined-CACb1ZLu.js';
import { d as ne } from './AssignmentOutlined-BFpRNIkb.js';
import { d as H } from './VisibilityOutlined-D9xuAg3y.js';
import { R as V, u as le, D as ie } from './ReuseableDataGrid-I9L9E5Xk.js';
import { T as y } from './TextField-Djr8gt34.js';
import { M as b } from './MenuItem-ZWEe2ZC6.js';
import { T as ce, a as ue, b as M, c as L } from './TabPanel-Cg-Z_Qr2.js';
import './Skeleton-DdLL8d67.js';
const me = () => {
    const { user: r } = z(),
      [t, E] = s.useState([]),
      [$, j] = s.useState(!1),
      [l, u] = s.useState({
        tcId: 0,
        categoryId: '',
        termCondDesc: '',
        enabled: '',
        appId: r.appId,
        createdOn: new Date().toISOString(),
        createdBy: r.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: r.empId
      }),
      i = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ];
    s.useEffect(() => {
      u({
        tcId: (t == null ? void 0 : t.tcId) || 0,
        categoryId: (t == null ? void 0 : t.categoryId) || '',
        termCondDesc: (t == null ? void 0 : t.termCondDesc) || '',
        enabled: (t == null ? void 0 : t.enabled) || '',
        appId: (t == null ? void 0 : t.appId) || r.appId,
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || r.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: r.empId
      });
    }, [t]);
    const [h, O] = s.useState([]);
    s.useState(!1);
    const { data: g, refetch: C } = G(),
      { data: v, refetch: m } = Q(l.categoryId, { skip: !l.categoryId }),
      [x, I] = s.useState([]);
    s.useEffect(() => {
      v && O(v.result.map((o, c) => ({ id: c + 1, ...o })));
    }, [v, m]),
      s.useEffect(() => {
        g && I(g.result.map((o, c) => ({ id: c, ...o })));
      }, [g, C]),
      console.log('initialRows', h);
    const p = (o) => {
        const { name: c, value: U } = o.target;
        u({ ...l, [c]: U });
      },
      B = async () => {
        console.log('formData', l);
        try {
          const o = await Y.post(
            'http://100.42.177.77:81/api/TermsConditions/SaveTermsConditions',
            l
          );
          console.log('Save response:', o.data),
            u((c) => ({
              tcId: 0,
              categoryId: c.categoryId,
              termCondDesc: '',
              enabled: '',
              appId: r.appId,
              createdOn: new Date().toISOString(),
              createdBy: r.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: r.empId
            })),
            m(),
            j(!1);
        } catch (o) {
          console.error('Error saving data:', o);
        }
      };
    console.log('formData', l);
    const a = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'termCondDesc', headerName: 'Term and Condition', flex: 1 },
      { field: 'enabled', headerName: 'Enabled' }
    ];
    return e.jsxs(N, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(w, {
          variant: 'outlined',
          children: [
            e.jsx(T, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Add Terms and Conditions ',
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
                  md: 3,
                  children: e.jsx(y, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Category',
                    name: 'categoryId',
                    value: l.categoryId,
                    onChange: p,
                    size: 'small',
                    children: x.map((o) =>
                      e.jsx(
                        b,
                        { value: o.categoryId, children: o.description },
                        o.categoryId
                      )
                    )
                  })
                }),
                e.jsx(n, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: e.jsx(y, {
                    label: 'Term and condition',
                    fullWidth: !0,
                    size: 'small',
                    name: 'termCondDesc',
                    onChange: p,
                    value: l.termCondDesc,
                    required: !0
                  })
                }),
                e.jsx(n, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(y, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Enabled',
                    name: 'enabled',
                    value: l.enabled,
                    onChange: p,
                    size: 'small',
                    children: i.map((o) =>
                      e.jsx(b, { value: o.value, children: o.label }, o.value)
                    )
                  })
                }),
                e.jsx(n, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(W, {
                    variant: 'contained',
                    size: 'small',
                    onClick: B,
                    children: 'Save'
                  })
                })
              ]
            }),
            ' '
          ]
        }),
        e.jsx(P, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
        e.jsxs(w, {
          variant: 'outlined',
          children: [
            e.jsx(T, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(H, {}),
              title: 'View Terms And Conditions ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(n, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              children: e.jsx(n, {
                item: !0,
                xs: 12,
                children: e.jsx(V, {
                  initialRows: h,
                  iColumns: a,
                  disableDelete: !0,
                  setInitialData: E,
                  setIsEdit: j
                })
              })
            }),
            ' '
          ]
        })
      ]
    });
  },
  pe = () => {
    const { user: r } = z(),
      [t, E] = s.useState([]),
      [$, j] = s.useState(!1),
      [l, u] = s.useState([]),
      [i, h] = s.useState({
        assignId: 0,
        vendorId: '',
        categoryId: '',
        assignTermsDetails: [l],
        appId: r.appId,
        createdOn: new Date().toISOString(),
        createdBy: r.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: r.empId
      }),
      O = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ];
    s.useEffect(() => {
      h({
        assignId: (t == null ? void 0 : t.assignId) || 0,
        vendorId: (t == null ? void 0 : t.vendorId) || '',
        categoryId: (t == null ? void 0 : t.categoryId) || '',
        appId: (t == null ? void 0 : t.appId) || r.appId,
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || r.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: r.empId
      });
    }, [t]);
    const [g, C] = s.useState([]),
      [v, m] = s.useState([]),
      { data: x } = te(),
      { data: I } = G(),
      { data: p, refetch: B } = Q(i.categoryId, { skip: !i.categoryId }),
      { data: a, refetch: o } = se(
        { vId: i.vendorId, categoryId: i.categoryId },
        { skip: !i.vendorId || !i.categoryId }
      ),
      [c, U] = s.useState([]),
      [_, q] = s.useState([]);
    s.useEffect(() => {
      if (x) {
        const d = x.result[0];
        q(d.vendorList);
      }
    }, [x]),
      s.useEffect(() => {
        p && C(p.result.map((d, f) => ({ id: f + 1, ...d })));
      }, [p]),
      s.useEffect(() => {
        if ((a == null ? void 0 : a.result) === null) {
          m([]);
          return;
        }
        a != null &&
          a.result &&
          m(a.result.map((d, f) => ({ id: f + 1, ...d })));
      }, [a, o]),
      console.log('termsData', a),
      s.useEffect(() => {
        I && U(I.result.map((d, f) => ({ id: f, ...d })));
      }, [I]),
      console.log('initialRows', g);
    const A = (d) => {
        const { name: f, value: R } = d.target;
        h({ ...i, [f]: R });
      },
      X = async () => {
        console.log('formData', i);
        try {
          const d = await Y.post(
            'http://100.42.177.77:81/api/TermsConditions/SaveAssignTerms',
            i
          );
          console.log('Save response:', d.data), o(), j(!1), F([]);
        } catch (d) {
          console.error('Error saving data:', d);
        }
      };
    console.log('formData', i);
    const J = [
        { field: 'id', headerName: 'Sr#' },
        {
          field: 'termCondDesc',
          headerName: 'Term and Condition Description',
          flex: 1
        },
        { field: 'enabled', headerName: 'Enabled', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 }
      ],
      K = [
        { field: 'id', headerName: 'Sr#' },
        {
          field: 'termCondDesc',
          headerName: 'Term and Condition Description',
          flex: 1
        }
      ],
      [Z, F] = s.useState([]),
      S = le(),
      ee = s.useCallback(
        (d) => {
          F(d);
          const R = d
            .map((D) => {
              const k = S.current.getRow(D);
              return console.log('rowData', k), k ? k.tcId : null;
            })
            .filter((D) => D !== null)
            .map((D) => ({
              assignDetId: 0,
              assignedId: 0,
              tcId: D,
              createdOn: new Date().toISOString(),
              createdBy: r.empId,
              lastUpdatedBy: r.empId,
              lastUpdatedOn: new Date().toISOString()
            }));
          u(R);
        },
        [S]
      );
    return (
      s.useEffect(() => {
        h({ ...i, assignTermsDetails: l });
      }, [l]),
      s.useEffect(() => {
        S.current && console.log('API ref is ready:', S.current);
      }, [S]),
      console.log('selectedTerms:', l),
      e.jsxs(N, {
        sx: { width: '100%', typography: 'body1' },
        children: [
          e.jsxs(w, {
            variant: 'outlined',
            children: [
              e.jsx(T, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                title: 'Assign Terms and Conditions ',
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
                    md: 3,
                    children: e.jsx(y, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Vendors',
                      size: 'small',
                      name: 'vendorId',
                      value: i.vendorId,
                      onChange: A,
                      required: !0,
                      children: _.map((d) =>
                        e.jsx(
                          b,
                          { value: d.lookUpId, children: d.lookUpName },
                          d.lookUpId
                        )
                      )
                    })
                  }),
                  e.jsx(n, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(y, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Category',
                      name: 'categoryId',
                      value: i.categoryId,
                      onChange: A,
                      size: 'small',
                      children: c.map((d) =>
                        e.jsx(
                          b,
                          { value: d.categoryId, children: d.description },
                          d.categoryId
                        )
                      )
                    })
                  }),
                  e.jsx(n, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: e.jsx(y, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Enabled ?',
                      name: 'enabled',
                      value: i.enabled,
                      onChange: A,
                      size: 'small',
                      children: O.map((d) =>
                        e.jsx(b, { value: d.value, children: d.label }, d.value)
                      )
                    })
                  }),
                  e.jsxs(n, {
                    item: !0,
                    xs: 12,
                    mt: 2,
                    children: [
                      e.jsx(ae, {
                        variant: 'h4',
                        children: 'Terms And Conditions:'
                      }),
                      ' '
                    ]
                  }),
                  e.jsx(n, {
                    item: !0,
                    xs: 12,
                    children: e.jsx('div', {
                      style: { width: '100%' },
                      children: e.jsx(ie, {
                        rows: g,
                        columns: J,
                        apiRef: S,
                        checkboxSelection: !0,
                        onRowSelectionModelChange: ee,
                        rowSelectionModel: Z
                      })
                    })
                  }),
                  e.jsx(n, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    sx: { mt: 2 },
                    children: e.jsx(W, {
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
          e.jsx(P, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          }),
          e.jsxs(w, {
            variant: 'outlined',
            children: [
              e.jsx(T, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: e.jsx(H, {}),
                title: 'View Assigned Terms And Conditions ',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              e.jsx(n, {
                container: !0,
                spacing: 2,
                width: 'Inherit',
                children: e.jsx(n, {
                  item: !0,
                  xs: 12,
                  children: e.jsx(V, {
                    initialRows: v,
                    iColumns: K,
                    hideAction: !0
                  })
                })
              }),
              ' '
            ]
          })
        ]
      })
    );
  },
  Te = () => {
    const { user: r } = z(),
      [t, E] = s.useState([]),
      [$, j] = s.useState(!1),
      [l, u] = s.useState({
        categoryId: 0,
        description: '',
        enabled: '',
        appId: r.appId,
        createdOn: new Date().toISOString(),
        createdBy: r.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: r.empId
      }),
      i = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ],
      [h, O] = s.useState('1'),
      g = (a, o) => {
        O(o);
      };
    s.useEffect(() => {
      u({
        categoryId: (t == null ? void 0 : t.categoryId) || 0,
        description: (t == null ? void 0 : t.description) || '',
        enabled: (t == null ? void 0 : t.enabled) || '',
        appId: (t == null ? void 0 : t.appId) || r.appId,
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || r.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: r.empId
      });
    }, [t]);
    const [C, v] = s.useState([]);
    s.useState(!1);
    const { data: m, refetch: x } = G();
    s.useEffect(() => {
      m && v(m.result.map((a, o) => ({ id: o + 1, ...a })));
    }, [m, x]),
      console.log('initialRows', C);
    const I = (a) => {
        const { name: o, value: c } = a.target;
        u({ ...l, [o]: c });
      },
      p = async () => {
        console.log('formData', l);
        try {
          const a = await Y.post(
            'http://100.42.177.77:81/api/TermsConditions/SaveCategory',
            l
          );
          console.log('Save response:', a.data),
            u((o) => ({
              categoryId: 0,
              description: '',
              enabled: '',
              appId: r.appId,
              createdOn: new Date().toISOString(),
              createdBy: r.empId,
              lastUpdatedOn: new Date().toISOString(),
              lastUpdatedBy: r.empId
            })),
            x(),
            j(!1);
        } catch (a) {
          console.error('Error saving data:', a);
        }
      };
    console.log('formData', l);
    const B = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'description', headerName: 'Description', flex: 1 },
      { field: 'enabled', headerName: 'Enabled' }
    ];
    return e.jsx(re, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(N, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(ce, {
          value: h,
          children: [
            e.jsx(N, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(ue, {
                onChange: g,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(M, {
                    icon: e.jsx(oe, {}),
                    label: 'Add Categories',
                    value: '1',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(M, {
                    icon: e.jsx(de, {}),
                    label: 'Add Terms and Conditions',
                    value: '2',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(M, {
                    icon: e.jsx(ne, {}),
                    label: 'Assign Terms and Conditions',
                    value: '3',
                    sx: (a) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${a.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsxs(L, {
              value: '1',
              children: [
                e.jsxs(w, {
                  variant: 'outlined',
                  children: [
                    e.jsx(T, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Add Categories ',
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
                          md: 9,
                          children: e.jsx(y, {
                            label: 'Description',
                            fullWidth: !0,
                            size: 'small',
                            name: 'description',
                            onChange: I,
                            value: l.description,
                            required: !0
                          })
                        }),
                        e.jsx(n, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(y, {
                            fullWidth: !0,
                            select: !0,
                            label: 'enabled',
                            name: 'enabled',
                            value: l.enabled,
                            onChange: I,
                            size: 'small',
                            children: i.map((a) =>
                              e.jsx(
                                b,
                                { value: a.value, children: a.label },
                                a.value
                              )
                            )
                          })
                        }),
                        e.jsx(n, {
                          item: !0,
                          xs: 12,
                          textAlign: 'right',
                          sx: { mt: 2 },
                          children: e.jsx(W, {
                            variant: 'contained',
                            size: 'small',
                            onClick: p,
                            children: 'Save'
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                }),
                e.jsx(P, {
                  color: '#cc8587',
                  sx: { height: 1, width: '100%', mt: 2 }
                }),
                e.jsxs(w, {
                  variant: 'outlined',
                  children: [
                    e.jsx(T, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      avatar: e.jsx(H, {}),
                      title: 'View Categories',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsx(n, {
                      container: !0,
                      spacing: 2,
                      width: 'Inherit',
                      children: e.jsx(n, {
                        item: !0,
                        xs: 12,
                        children: e.jsx(V, {
                          initialRows: C,
                          iColumns: B,
                          disableDelete: !0,
                          setInitialData: E,
                          setIsEdit: j
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsx(L, { value: '2', children: e.jsx(me, {}) }),
            e.jsx(L, { value: '3', children: e.jsx(pe, {}) })
          ]
        })
      })
    });
  };
export { Te as default };
