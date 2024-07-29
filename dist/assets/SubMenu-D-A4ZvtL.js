import {
  u as O,
  h as C,
  i as B,
  j as s,
  B as k,
  C as M,
  d as p,
  G as a,
  D as E
} from './index-CLjmpv_2.js';
import { r as t } from './vendor-BXCbSo2_.js';
import { B as D, a as z } from './axios-SrXXOFpt.js';
import { d as L } from './VisibilityOutlined-EY3Hfrir.js';
import { R as U } from './ReuseableDataGrid-BmbazgSl.js';
import { T as o } from './TextField-DG1slWXT.js';
import { M as b } from './Skeleton-Ceiu9GHN.js';
function A() {
  const { user: d } = O(),
    [e, I] = t.useState([]),
    [R, x] = t.useState(!1),
    [r, i] = t.useState({
      subMenuId: 0,
      subMenuDesc: '',
      orderNo: '',
      enabled: '',
      link: '',
      icon: '',
      mainMenuId: '',
      createdOn: new Date().toISOString(),
      createdBy: d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    }),
    g = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ];
  t.useEffect(() => {
    i({
      subMenuId: (e == null ? void 0 : e.subMenuId) || 0,
      subMenuDesc: (e == null ? void 0 : e.subMenuDesc) || '',
      orderNo: (e == null ? void 0 : e.orderNo) || '',
      enabled: (e == null ? void 0 : e.enabled) || '',
      link: (e == null ? void 0 : e.link) || '',
      icon: (e == null ? void 0 : e.icon) || '',
      mainMenuId: (e == null ? void 0 : e.mainMenuId) || '',
      createdOn: (e == null ? void 0 : e.createdOn) || new Date().toISOString(),
      createdBy: (e == null ? void 0 : e.createdBy) || d.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: d.empId
    });
  }, [e]);
  const [f, j] = t.useState([]);
  t.useState(!1);
  const { data: c, refetch: m } = C(),
    { data: h } = B(),
    [S, v] = t.useState([]);
  t.useEffect(() => {
    c && j(c.result.map((n, u) => ({ id: u, ...n })));
  }, [c, m]),
    t.useEffect(() => {
      h && v(h.result.map((n, u) => ({ id: u, ...n })));
    }, [h, m]),
    console.log('initialRows', f);
  const l = (n) => {
      const { name: u, value: w } = n.target;
      i({ ...r, [u]: w });
    },
    y = async () => {
      console.log('formData', r);
      try {
        const n = await z.post('https://gecxc.com:449/api/Menu/SaveSubMenu', r);
        console.log('Save response:', n.data),
          i((u) => ({
            subMenuId: 0,
            subMenuDesc: '',
            orderNo: '',
            enabled: '',
            link: '',
            icon: '',
            mainMenuId: '',
            createdOn: new Date().toISOString(),
            createdBy: d.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: d.empId
          })),
          m(),
          x(!1);
      } catch (n) {
        console.error('Error saving data:', n);
      }
    };
  console.log('formData', r);
  const N = [
    { field: 'mainMenuId', headerName: 'Main Menu', flex: 1 },
    { field: 'subMenuDesc', headerName: 'Sub Menu', flex: 1 },
    { field: 'orderNo', headerName: 'Order No.', flex: 1 },
    { field: 'enabled', headerName: 'Enabled', flex: 1 },
    { field: 'link', headerName: 'Link', flex: 1 },
    { field: 'icon', headerName: 'Icon', flex: 1 }
  ];
  return s.jsxs(k, {
    sx: { width: '100%', typography: 'body1' },
    children: [
      s.jsxs(M, {
        variant: 'outlined',
        children: [
          s.jsx(p, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Add Sub Menus ',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          s.jsxs(a, {
            container: !0,
            spacing: 1,
            width: 'Inherit',
            sx: { paddingY: 2, paddingX: 2 },
            children: [
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Main Menu',
                  name: 'mainMenuId',
                  value: r.mainMenuId,
                  onChange: l,
                  size: 'small',
                  children: S.map((n) =>
                    s.jsx(
                      b,
                      { value: n.mainMenuId, children: n.mainMenuDesc },
                      n.mainMenuId
                    )
                  )
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  label: 'Sub Menu',
                  fullWidth: !0,
                  size: 'small',
                  name: 'subMenuDesc',
                  onChange: l,
                  value: r.subMenuDesc,
                  required: !0
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Enabled',
                  name: 'enabled',
                  value: r.enabled,
                  onChange: l,
                  size: 'small',
                  children: g.map((n) =>
                    s.jsx(b, { value: n.value, children: n.label }, n.value)
                  )
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  label: 'Order No.',
                  fullWidth: !0,
                  size: 'small',
                  name: 'orderNo',
                  onChange: l,
                  value: r.orderNo,
                  required: !0
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  label: 'Icon',
                  fullWidth: !0,
                  size: 'small',
                  name: 'icon',
                  onChange: l,
                  value: r.icon,
                  required: !0
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                md: 2,
                children: s.jsx(o, {
                  label: 'Link',
                  fullWidth: !0,
                  size: 'small',
                  name: 'link',
                  onChange: l,
                  value: r.link,
                  required: !0
                })
              }),
              s.jsx(a, {
                item: !0,
                xs: 12,
                textAlign: 'right',
                sx: { mt: 2 },
                children: s.jsx(D, {
                  variant: 'contained',
                  size: 'small',
                  onClick: y,
                  children: 'Save'
                })
              })
            ]
          }),
          ' '
        ]
      }),
      s.jsx(E, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      s.jsxs(M, {
        variant: 'outlined',
        children: [
          s.jsx(p, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            avatar: s.jsx(L, {}),
            title: 'View Sub Menus ',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          s.jsx(a, {
            container: !0,
            spacing: 2,
            width: 'Inherit',
            children: s.jsx(a, {
              item: !0,
              xs: 12,
              children: s.jsx(U, {
                initialRows: f,
                iColumns: N,
                disableDelete: !0,
                setInitialData: I,
                setIsEdit: x
              })
            })
          }),
          ' '
        ]
      })
    ]
  });
}
export { A as default };
