import {
  u as M,
  g as Y,
  F as q,
  j as e,
  B as W,
  C as b,
  G as r,
  D as z,
  d as O,
  H,
  M as P,
  T as X
} from './index-CzwspkkF.js';
import { r as l } from './vendor-BXCbSo2_.js';
import { B as L, a as T, I as E } from './axios-lonJZgKi.js';
import { d as Q } from './Close-BQBfEc69.js';
import { d as F } from './VisibilityOutlined-D9xuAg3y.js';
import {
  R as G,
  a as V,
  b as _,
  c as $,
  d as J
} from './ReuseableDataGrid-I9L9E5Xk.js';
import { d as K } from './PersonAddAlt1Outlined-CtPtpl_k.js';
import { T as i } from './TextField-Djr8gt34.js';
import { M as w } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
const Z = ({
    userData: d,
    setAdditionalProcessData: t,
    refetchUsers: D,
    handleClickOpen: A
  }) => {
    console.log('userData', d);
    const { user: m } = M(),
      [s, g] = l.useState([]),
      [B, I] = l.useState(!1),
      [o, p] = l.useState({
        userRoleId: 0,
        userName: d.userName,
        roleId: '',
        startDate: '',
        endDate: '',
        empId: d.empId,
        isMainRole: '',
        enabled: '',
        createdOn: new Date().toISOString(),
        createdBy: m.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: m.empId
      }),
      x = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
      ];
    l.useEffect(() => {
      p({
        userRoleId: (s == null ? void 0 : s.userRoleId) || 0,
        userName: d.userName,
        roleId: (s == null ? void 0 : s.roleId) || '',
        startDate: (s == null ? void 0 : s.startDate) || '',
        endDate: (s == null ? void 0 : s.endDate) || '',
        empId: d.empId || '',
        isMainRole: (s == null ? void 0 : s.isMainRole) || '',
        enabled: (s == null ? void 0 : s.enabled) || '',
        createdOn:
          (s == null ? void 0 : s.createdOn) || new Date().toISOString(),
        createdBy: (s == null ? void 0 : s.createdBy) || m.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: m.empId
      });
    }, [s]);
    const [c, C] = l.useState([]);
    l.useState(!1);
    const { data: j, refetch: v } = Y(),
      { data: N, refetch: y } = q(o.empId, { skip: !o.empId }),
      [R, S] = l.useState([]);
    l.useEffect(() => {
      j && S(j.result.map((a, h) => ({ id: h, ...a })));
    }, [j, v]),
      l.useEffect(() => {
        N && C(N.result.map((a, h) => ({ id: h, ...a })));
      }, [N, v]),
      console.log('initialRows', c);
    const u = (a) => {
        const { name: h, value: k } = a.target;
        p({ ...o, [h]: k });
      },
      n = async () => {
        console.log('formData', o);
        try {
          const a = await T.post(
            'http://100.42.177.77:81/api/Users/AssignUserRole',
            o
          );
          console.log('Save response:', a.data),
            p((h) => ({
              userRoleId: 0,
              userName: d.userName,
              roleId: '',
              startDate: '',
              endDate: '',
              empId: d.empId,
              isMainRole: '',
              enabled: '',
              createdOn: new Date().toISOString(),
              createdBy: m.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: m.empId
            })),
            y(),
            v(),
            I(!1);
        } catch (a) {
          console.error('Error saving data:', a);
        }
      };
    console.log('formData', o);
    const f = [
        { field: 'userName', headerName: 'User Name', flex: 1 },
        { field: 'roleName', headerName: 'Role', flex: 1 },
        {
          field: 'startDate',
          headerName: 'Start Date',
          flex: 1,
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        {
          field: 'endDate',
          headerName: 'End Date',
          flex: 1,
          valueGetter: (a) =>
            new Date(a).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'isMainRole', headerName: 'isMAinRole', flex: 1 },
        { field: 'enabled', headerName: 'Enabled', flex: 1 }
      ],
      U = `assignedUserRoles${new Date().toISOString()}`;
    return e.jsxs(W, {
      sx: { width: '100%', typography: 'body1', paddingTop: 2 },
      children: [
        e.jsxs(b, {
          variant: 'outlined',
          children: [
            e.jsxs(r, {
              container: !0,
              spacing: 1,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: [
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    label: 'User Name',
                    fullWidth: !0,
                    size: 'small',
                    name: 'userName',
                    onChange: u,
                    value: o.userName,
                    required: !0,
                    disabled: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Role',
                    name: 'roleId',
                    value: o.roleId,
                    onChange: u,
                    size: 'small',
                    children: R.map((a) =>
                      e.jsx(
                        w,
                        { value: a.roleId, children: a.roleName },
                        a.roleId
                      )
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    size: 'small',
                    type: 'date',
                    label: 'Start Date',
                    name: 'startDate',
                    value: o.startDate,
                    onChange: u,
                    fullWidth: !0,
                    focused: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    size: 'small',
                    type: 'date',
                    label: 'End Date',
                    name: 'endDate',
                    value: o.endDate,
                    onChange: u,
                    fullWidth: !0,
                    focused: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Is Main Role',
                    name: 'isMainRole',
                    value: o.isMainRole,
                    onChange: u,
                    size: 'small',
                    children: x.map((a) =>
                      e.jsx(w, { value: a.value, children: a.label }, a.value)
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 2,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Enabled',
                    name: 'enabled',
                    value: o.enabled,
                    onChange: u,
                    size: 'small',
                    children: x.map((a) =>
                      e.jsx(w, { value: a.value, children: a.label }, a.value)
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: {},
                  children: e.jsx(L, {
                    variant: 'contained',
                    size: 'small',
                    onClick: n,
                    children: 'Save'
                  })
                })
              ]
            }),
            ' '
          ]
        }),
        e.jsx(z, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
        e.jsxs(b, {
          variant: 'outlined',
          children: [
            e.jsx(O, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(F, {}),
              title: 'View User Roles ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsx(r, {
                item: !0,
                xs: 12,
                children: e.jsx(G, {
                  initialRows: c,
                  iColumns: f,
                  disableDelete: !0,
                  setInitialData: g,
                  setIsEdit: I,
                  fileName: U
                })
              })
            }),
            ' '
          ]
        })
      ]
    });
  },
  ee = Z;
function ce() {
  const { user: d } = M(),
    [t, D] = l.useState([]);
  console.log('initialData', t);
  const [A, m] = l.useState(!1),
    [s, g] = l.useState({
      Id: 0,
      empId: 0,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      isActive: '',
      appId: d.appId,
      createdOn: new Date().toISOString(),
      createdBy: d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    }),
    B = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ];
  l.useEffect(() => {
    g({
      Id: (t == null ? void 0 : t.id) || 0,
      empId: (t == null ? void 0 : t.empId) || 0,
      firstName: (t == null ? void 0 : t.firstName) || '',
      lastName: (t == null ? void 0 : t.lastName) || '',
      userName: (t == null ? void 0 : t.userName) || '',
      password: (t == null ? void 0 : t.password) || '',
      isActive: (t == null ? void 0 : t.isActive) || '',
      appId: (t == null ? void 0 : t.appId) || d.appId,
      createdOn: (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
      createdBy: (t == null ? void 0 : t.createdBy) || d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    });
  }, [t]);
  const [I, o] = l.useState([]);
  l.useState(!1);
  const { data: p, refetch: x } = H();
  l.useEffect(() => {
    p && o(p.result.map((n, f) => ({ id: f, ...n })));
  }, [p, x]),
    console.log('initialRows', I);
  const c = (n) => {
      const { name: f, value: U } = n.target;
      g({ ...s, [f]: U });
    },
    C = async () => {
      console.log('formData', s);
      try {
        const n = await T.post(
          'http://100.42.177.77:81/api/Users/SaveUsers',
          s
        );
        console.log('Save response:', n.data),
          g((f) => ({
            Id: 0,
            empId: 0,
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            isActive: '',
            appId: d.appId,
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          })),
          x(),
          m(!1);
      } catch (n) {
        console.error('Error saving data:', n);
      }
    };
  console.log('formData', s);
  const [j, v] = l.useState({}),
    [N, y] = l.useState(!1),
    R = (n) => {
      v(n), y(!0);
    },
    S = () => {
      y(!1);
    },
    u = [
      { field: 'empId', headerName: 'Employee Id', flex: 1 },
      { field: 'firstName', headerName: 'First Name', flex: 1 },
      { field: 'lastName', headerName: 'Last Name', flex: 1 },
      { field: 'userName', headerName: 'User Name', flex: 1 },
      { field: 'password', headerName: 'Password', flex: 1 },
      { field: 'isActive', headerName: 'Is Active', flex: 1 },
      {
        field: 'AssignRole',
        headerName: 'Assign Role',
        renderCell: (n) =>
          e.jsx('div', {
            style: { display: 'flex', justifyContent: 'space-around' },
            children: e.jsx(E, {
              color: 'primary',
              onClick: () => R(n.row),
              children: e.jsx(K, {})
            })
          })
      }
    ];
  return e.jsx(P, {
    style: {
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23',
      width: 'auto',
      maxHeight: { xs: '80vh', md: 'auto' },
      overflow: 'auto'
    },
    children: e.jsxs(W, {
      sx: { width: '100%', typography: 'body1' },
      children: [
        e.jsxs(b, {
          variant: 'outlined',
          children: [
            e.jsx(O, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              title: 'Add User ',
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
                  children: e.jsx(i, {
                    label: 'Employee ID',
                    fullWidth: !0,
                    size: 'small',
                    type: 'number',
                    name: 'empId',
                    onChange: c,
                    value: s.empId,
                    required: !0,
                    disabled: A
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'First Name',
                    fullWidth: !0,
                    size: 'small',
                    name: 'firstName',
                    onChange: c,
                    value: s.firstName,
                    required: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Last Name',
                    fullWidth: !0,
                    size: 'small',
                    name: 'lastName',
                    onChange: c,
                    value: s.lastName,
                    required: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'User Name',
                    fullWidth: !0,
                    size: 'small',
                    name: 'userName',
                    onChange: c,
                    value: s.userName,
                    required: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    label: 'Password',
                    fullWidth: !0,
                    size: 'small',
                    name: 'password',
                    onChange: c,
                    value: s.password,
                    required: !0
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  md: 3,
                  children: e.jsx(i, {
                    fullWidth: !0,
                    select: !0,
                    label: 'Is Active',
                    name: 'isActive',
                    value: s.isActive,
                    onChange: c,
                    size: 'small',
                    children: B.map((n) =>
                      e.jsx(w, { value: n.value, children: n.label }, n.value)
                    )
                  })
                }),
                e.jsx(r, {
                  item: !0,
                  xs: 12,
                  textAlign: 'right',
                  sx: { mt: 2 },
                  children: e.jsx(L, {
                    variant: 'contained',
                    size: 'small',
                    onClick: C,
                    children: 'Save'
                  })
                })
              ]
            }),
            ' '
          ]
        }),
        e.jsx(z, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
        e.jsxs(b, {
          variant: 'outlined',
          children: [
            e.jsx(O, {
              className: 'css-4rfrnx-MuiCardHeader-root',
              avatar: e.jsx(F, {}),
              title: 'View Users ',
              titleTypographyProps: { style: { color: 'white' } }
            }),
            e.jsx(r, {
              container: !0,
              spacing: 2,
              width: 'Inherit',
              sx: { paddingY: 2, paddingX: 2 },
              children: e.jsxs(r, {
                item: !0,
                xs: 12,
                children: [
                  e.jsx(G, {
                    initialRows: I,
                    iColumns: u,
                    disableDelete: !0,
                    setInitialData: D,
                    setIsEdit: m
                  }),
                  e.jsxs(V, {
                    open: N,
                    onClose: S,
                    fullWidth: !0,
                    maxWidth: 'lg',
                    children: [
                      e.jsxs(_, {
                        sx: {
                          backgroundColor: '#A11F23',
                          color: '#ffffff',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        },
                        children: [
                          e.jsx(X, {
                            variant: 'h6',
                            component: 'div',
                            color: '#ffffff',
                            children: 'Assign Role '
                          }),
                          e.jsx(E, {
                            onClick: S,
                            sx: { color: '#ffffff' },
                            children: e.jsx(Q, {})
                          })
                        ]
                      }),
                      e.jsxs($, {
                        children: [
                          e.jsx(J, { id: 'alert-dialog-slide-description' }),
                          e.jsx(ee, { userData: j, refetchUsers: x })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            ' '
          ]
        })
      ]
    })
  });
}
export { ce as default };
