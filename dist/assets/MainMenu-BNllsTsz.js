import {
  A as m,
  E as p,
  j as e,
  u as U,
  i as P,
  M as V,
  B as y,
  C,
  d as _,
  G as n,
  D as k
} from './index-CzwspkkF.js';
import { r as o } from './vendor-BXCbSo2_.js';
import { B as G, a as W } from './axios-lonJZgKi.js';
import { d as F } from './VisibilityOutlined-D9xuAg3y.js';
import { R as L } from './ReuseableDataGrid-I9L9E5Xk.js';
import Y from './SubMenu-Cjdn0Arr.js';
import Q from './Roles-D7V6_sBo.js';
import X from './Users-SGps0aUI.js';
import { T as J, a as K, b as d, c as i } from './TabPanel-Cg-Z_Qr2.js';
import { T as c } from './TextField-Djr8gt34.js';
import { M as Z } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
import './Close-BQBfEc69.js';
import './PersonAddAlt1Outlined-CtPtpl_k.js';
var f = {},
  ee = p;
Object.defineProperty(f, '__esModule', { value: !0 });
var R = (f.default = void 0),
  ae = ee(m()),
  re = e;
R = f.default = (0, ae.default)(
  (0, re.jsx)('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' }),
  'Menu'
);
var j = {},
  te = p;
Object.defineProperty(j, '__esModule', { value: !0 });
var O = (j.default = void 0),
  se = te(m()),
  ne = e;
O = j.default = (0, se.default)(
  (0, ne.jsx)('path', {
    d: 'M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z'
  }),
  'MenuOpen'
);
var M = {},
  oe = p;
Object.defineProperty(M, '__esModule', { value: !0 });
var w = (M.default = void 0),
  le = oe(m()),
  de = e;
w = M.default = (0, le.default)(
  (0, de.jsx)('path', {
    d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5'
  }),
  'GroupRounded'
);
var b = {},
  ie = p;
Object.defineProperty(b, '__esModule', { value: !0 });
var v = (b.default = void 0),
  ue = ie(m()),
  ce = e;
v = b.default = (0, ue.default)(
  (0, ce.jsx)('path', {
    d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1z'
  }),
  'AssignmentInd'
);
function _e() {
  const { user: t } = U(),
    [a, $] = o.useState([]),
    [N, g] = o.useState(!1),
    [s, x] = o.useState({
      mainMenuId: 0,
      appId: t.appId,
      mainMenuDesc: '',
      orderNo: '',
      enabled: '',
      icon: '',
      createdOn: new Date().toISOString(),
      createdBy: t.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: t.empId
    }),
    D = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ],
    [T, z] = o.useState('1'),
    B = (r, l) => {
      z(l);
    };
  o.useEffect(() => {
    x({
      mainMenuId: (a == null ? void 0 : a.mainMenuId) || 0,
      appId: (a == null ? void 0 : a.appId) || t.appId,
      mainMenuDesc: (a == null ? void 0 : a.mainMenuDesc) || '',
      orderNo: (a == null ? void 0 : a.orderNo) || '',
      enabled: (a == null ? void 0 : a.enabled) || '',
      icon: (a == null ? void 0 : a.icon) || '',
      createdOn: (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
      createdBy: (a == null ? void 0 : a.createdBy) || t.empId,
      lastUpdatedOn: new Date().toISOString(),
      lastUpdatedBy: t.empId
    });
  }, [a]);
  const [I, H] = o.useState([]);
  o.useState(!1);
  const { data: h, refetch: S } = P();
  o.useEffect(() => {
    h && H(h.result.map((r, l) => ({ id: l, ...r })));
  }, [h, S]),
    console.log('initialRows', I);
  const u = (r) => {
      const { name: l, value: q } = r.target;
      x({ ...s, [l]: q });
    },
    A = async () => {
      console.log('formData', s);
      try {
        const r = await W.post(
          'http://100.42.177.77:81/api/Menu/SaveMainMenu',
          s
        );
        console.log('Save response:', r.data),
          x((l) => ({
            mainMenuId: 0,
            mainMenuDesc: '',
            orderNo: '',
            enabled: '',
            icon: '',
            appId: t.appId,
            createdOn: new Date().toISOString(),
            createdBy: t.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: t.empId
          })),
          S(),
          g(!1);
      } catch (r) {
        console.error('Error saving data:', r);
      }
    };
  console.log('formData', s);
  const E = [
    { field: 'mainMenuDesc', headerName: 'MainMenu', flex: 1 },
    { field: 'orderNo', headerName: 'Order No.', flex: 1 },
    { field: 'icon', headerName: 'icon', flex: 1 },
    { field: 'enabled', headerName: 'Enabled', flex: 1 }
  ];
  return e.jsx(V, {
    style: {
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23',
      width: 'auto',
      maxHeight: { xs: '80vh', md: 'auto' },
      overflow: 'auto'
    },
    children: e.jsx(y, {
      sx: { width: '100%', typography: 'body1' },
      children: e.jsxs(J, {
        value: T,
        children: [
          e.jsx(y, {
            sx: { borderBottom: 1, borderColor: 'divider' },
            children: e.jsxs(K, {
              onChange: B,
              'aria-label': 'lab API tabs example',
              children: [
                e.jsx(d, {
                  icon: e.jsx(R, {}),
                  label: 'Add Main Menu',
                  value: '1',
                  sx: (r) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${r.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(d, {
                  icon: e.jsx(O, {}),
                  label: 'Add Sub Menus',
                  value: '2',
                  sx: (r) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${r.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(d, {
                  icon: e.jsx(v, {}),
                  label: 'Roles',
                  value: '3',
                  sx: (r) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${r.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(d, {
                  icon: e.jsx(w, {}),
                  label: 'Users',
                  value: '4',
                  sx: (r) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${r.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(d, {
                  icon: e.jsx(v, {}),
                  label: 'Assign Menus',
                  value: '5',
                  sx: (r) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${r.palette.primary.main} !important`
                    }
                  })
                })
              ]
            })
          }),
          e.jsxs(i, {
            value: '1',
            children: [
              e.jsxs(C, {
                variant: 'outlined',
                children: [
                  e.jsx(_, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Add Main Menu ',
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
                        children: e.jsx(c, {
                          label: 'MainMenu Description',
                          fullWidth: !0,
                          size: 'small',
                          name: 'mainMenuDesc',
                          onChange: u,
                          value: s.mainMenuDesc,
                          required: !0,
                          disabled: N
                        })
                      }),
                      e.jsx(n, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(c, {
                          label: 'Order No.',
                          fullWidth: !0,
                          size: 'small',
                          name: 'orderNo',
                          onChange: u,
                          value: s.orderNo,
                          required: !0
                        })
                      }),
                      e.jsx(n, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(c, {
                          label: 'Icon',
                          fullWidth: !0,
                          size: 'small',
                          name: 'icon',
                          onChange: u,
                          value: s.icon,
                          required: !0
                        })
                      }),
                      e.jsx(n, {
                        item: !0,
                        xs: 12,
                        md: 3,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'enabled',
                          name: 'enabled',
                          value: s.enabled,
                          onChange: u,
                          size: 'small',
                          children: D.map((r) =>
                            e.jsx(
                              Z,
                              { value: r.value, children: r.label },
                              r.value
                            )
                          )
                        })
                      }),
                      e.jsx(n, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        sx: { mt: 2 },
                        children: e.jsx(G, {
                          variant: 'contained',
                          size: 'small',
                          onClick: A,
                          children: 'Save'
                        })
                      })
                    ]
                  }),
                  ' '
                ]
              }),
              e.jsx(k, {
                color: '#cc8587',
                sx: { height: 1, width: '100%', mt: 2 }
              }),
              e.jsxs(C, {
                variant: 'outlined',
                children: [
                  e.jsx(_, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    avatar: e.jsx(F, {}),
                    title: 'View Main Menus ',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsx(n, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    children: e.jsx(n, {
                      item: !0,
                      xs: 12,
                      children: e.jsx(L, {
                        initialRows: I,
                        iColumns: E,
                        disableDelete: !0,
                        setInitialData: $,
                        setIsEdit: g
                      })
                    })
                  })
                ]
              })
            ]
          }),
          e.jsx(i, { value: '2', children: e.jsx(Y, {}) }),
          e.jsx(i, { value: '3', children: e.jsx(Q, {}) }),
          e.jsx(i, { value: '4', children: e.jsx(X, {}) }),
          e.jsx(i, { value: '5' })
        ]
      })
    })
  });
}
export { _e as default };
