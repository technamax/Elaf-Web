import {
  u as w,
  g as N,
  j as e,
  M as R,
  B as U,
  C as x,
  d as f,
  G as s,
  D as C
} from './index-CzwspkkF.js';
import { r as l } from './vendor-BXCbSo2_.js';
import { B as O, a as B } from './axios-lonJZgKi.js';
import { d as D } from './VisibilityOutlined-D9xuAg3y.js';
import { R as E } from './ReuseableDataGrid-I9L9E5Xk.js';
import { T as i } from './TextField-Djr8gt34.js';
import { M as L } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
function F() {
  const { user: d } = w(),
    [t, g] = l.useState([]),
    [j, m] = l.useState(!1),
    [a, c] = l.useState({
      roleId: 0,
      roleName: '',
      description: '',
      defaultUrl: '',
      enabled: '',
      createdOn: new Date().toISOString(),
      createdBy: d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    }),
    b = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ];
  l.useEffect(() => {
    c({
      roleId: (t == null ? void 0 : t.roleId) || 0,
      roleName: (t == null ? void 0 : t.roleName) || '',
      description: (t == null ? void 0 : t.description) || '',
      defaultUrl: (t == null ? void 0 : t.defaultUrl) || '',
      enabled: (t == null ? void 0 : t.enabled) || '',
      createdOn: (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
      createdBy: (t == null ? void 0 : t.createdBy) || d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    });
  }, [t]);
  const [p, v] = l.useState([]);
  l.useState(!1);
  const { data: u, refetch: h } = N();
  l.useEffect(() => {
    u && v(u.result.map((r, n) => ({ id: n, ...r })));
  }, [u, h]),
    console.log('initialRows', p);
  const o = (r) => {
      const { name: n, value: y } = r.target;
      c({ ...a, [n]: y });
    },
    I = async () => {
      console.log('formData', a);
      try {
        const r = await B.post('http://100.42.177.77:81/api/Role/SaveRole', a);
        console.log('Save response:', r.data),
          c((n) => ({
            roleId: 0,
            roleName: '',
            description: '',
            defaultUrl: '',
            enabled: '',
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          })),
          h(),
          m(!1);
      } catch (r) {
        console.error('Error saving data:', r);
      }
    };
  console.log('formData', a);
  const S = [
    { field: 'roleName', headerName: 'Role', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'defaultUrl', headerName: 'Default URL', flex: 1 },
    { field: 'enabled', headerName: 'Enabled', flex: 1 }
  ];
  return e.jsx(R, {
    style: {
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23',
      width: 'auto',
      maxHeight: { xs: '80vh', md: 'auto' },
      overflow: 'auto'
    },
    children: e.jsxs(U, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(x, {
          variant: 'outlined',
          children: [
            e.jsx(f, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Add Role ',
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
                  children: e.jsx(i, {
                    label: 'Role Name',
                    fullWidth: !0,
                    size: 'small',
                    name: 'roleName',
                    onChange: o,
                    value: a.roleName,
                    required: !0,
                    disabled: j
                  })
                }),
                e.jsx(s, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Description',
                    fullWidth: !0,
                    size: 'small',
                    name: 'description',
                    onChange: o,
                    value: a.description,
                    required: !0
                  })
                }),
                e.jsx(s, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Default URL',
                    fullWidth: !0,
                    size: 'small',
                    name: 'defaultUrl',
                    onChange: o,
                    value: a.defaultUrl,
                    required: !0
                  })
                }),
                e.jsx(s, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'enabled',
                    name: 'enabled',
                    value: a.enabled,
                    onChange: o,
                    size: 'small',
                    children: b.map((r) =>
                      e.jsx(L, { value: r.value, children: r.label }, r.value)
                    )
                  })
                }),
                e.jsx(s, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(O, {
                    variant: 'contained',
                    size: 'small',
                    onClick: I,
                    children: 'Save'
                  })
                })
              ]
            }),
            ' '
          ]
        }),
        e.jsx(C, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
        e.jsxs(x, {
          variant: 'outlined',
          children: [
            e.jsx(f, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(D, {}),
              title: 'View Roles ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(s, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsx(s, {
                item: !0,
                xs: 12,
                children: e.jsx(E, {
                  initialRows: p,
                  iColumns: S,
                  disableDelete: !0,
                  setInitialData: g,
                  setIsEdit: m
                })
              })
            }),
            ' '
          ]
        })
      ]
    })
  });
}
export { F as default };
