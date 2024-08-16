import {
  u as U,
  k as E,
  l as G,
  m as F,
  b as z,
  j as t,
  B as R,
  C as v,
  d as C,
  G as n,
  D as V
} from './index-Ck0MIkUq.js';
import { r as s } from './vendor-BXCbSo2_.js';
import { B as M, a as A } from './axios-CgIVMX8t.js';
import { d as P } from './VisibilityOutlined-Ds6HNaPA.js';
import { R as Q } from './ReuseableDataGrid-CdgPKZaX.js';
import { T as c } from './TextField-BujPyVEk.js';
import { M as w } from './Skeleton-DFEmEML1.js';
const ee = () => {
  const { user: o } = U(),
    [e, b] = s.useState([]),
    [q, I] = s.useState(!1),
    [r, u] = s.useState({
      configurationId: 0,
      entityId: '',
      startDate: '',
      endDate: null,
      shrinkage: '',
      wastage: '',
      remarks: '',
      entityName: '',
      configurationType: '',
      appId: o.appId,
      createdOn: new Date().toISOString(),
      createdBy: o.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: o.empId
    }),
    D = [
      { value: 'Vendor', label: 'Vendor' },
      { value: 'Fabric', label: 'Fabric' }
    ];
  s.useEffect(() => {
    const a = (d) => {
      const l = new Date(d),
        g = l.getFullYear(),
        x = String(l.getMonth() + 1).padStart(2, '0'),
        O = String(l.getDate()).padStart(2, '0');
      return `${g}-${x}-${O}`;
    };
    u({
      configurationId: (e == null ? void 0 : e.configurationId) || 0,
      entityId: (e == null ? void 0 : e.entityId) || '',
      startDate: e != null && e.startDate ? a(e.startDate) : '',
      endDate: e != null && e.endDate ? a(e.endDate) : null,
      shrinkage: (e == null ? void 0 : e.shrinkage) || '',
      wastage: (e == null ? void 0 : e.wastage) || '',
      remarks: (e == null ? void 0 : e.remarks) || '',
      configurationType: (e == null ? void 0 : e.configurationType) || '',
      entityName: (e == null ? void 0 : e.entityName) || '',
      appId: (e == null ? void 0 : e.appId) || o.appId,
      createdOn: (e == null ? void 0 : e.createdOn) || new Date().toISOString(),
      createdBy: (e == null ? void 0 : e.createdBy) || o.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: o.empId
    });
  }, [e]);
  const [S, T] = s.useState([]);
  s.useState(!1), E();
  const { data: m, refetch: h } = G();
  F(r.categoryId, { skip: !r.categoryId });
  const { data: p } = z(),
    [f, y] = s.useState([]),
    [k, N] = s.useState([]),
    [j, W] = s.useState([]);
  s.useEffect(() => {
    if (p) {
      const a = p.result[0];
      N(a.vendorList), W(a.fabricList);
    }
  }, [p]),
    s.useEffect(() => {
      m && T(m.result.map((a, d) => ({ id: d + 1, ...a })));
    }, [m, h]),
    s.useEffect(() => {
      r.configurationType === 'Vendor' && y(k),
        r.configurationType === 'Fabric' && y(j);
    }, [r.configurationType]),
    console.log('initialRows', S);
  const i = (a) => {
      const { name: d, value: l } = a.target;
      if (d === 'entityId') {
        const g = f.find((x) => x.lookUpId === parseInt(l));
        u({ ...r, entityId: l, entityName: g ? g.lookUpName : '' });
      } else u({ ...r, [d]: l });
    },
    B = async () => {
      console.log('formData', r);
      try {
        const a = await A.post(
          'http://100.42.177.77:81/api/Configurations/SaveShrinkageWastageConfiguration',
          r
        );
        console.log('Save response:', a.data),
          u((d) => ({
            configurationId: 0,
            entityId: '',
            entityName: '',
            startDate: '',
            endDate: null,
            shrinkage: '',
            wastage: '',
            remarks: '',
            configurationType: '',
            appId: o.appId,
            createdOn: new Date().toISOString(),
            createdBy: o.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: o.empId
          })),
          h(),
          I(!1),
          y([]);
      } catch (a) {
        console.error('Error saving data:', a);
      }
    };
  console.log('formData', r),
    console.log('vendors', k),
    console.log('fabrics', j),
    console.log('categories', f);
  const L = [
    { field: 'id', headerName: 'Sr#' },
    { field: 'configurationType', headerName: 'Configuration Type' },
    { field: 'entityName', headerName: 'Name' },
    {
      field: 'startDate',
      headerName: 'Start Date',
      valueGetter: (a) => {
        if (a !== null)
          return new Date(a).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          });
      }
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      valueGetter: (a) => {
        if (a)
          return new Date(a).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          });
      }
    },
    { field: 'shrinkage', headerName: 'Shrinkage %' },
    { field: 'wastage', headerName: 'Wastage %' },
    { field: 'remarks', headerName: 'Remarks' }
  ];
  return t.jsxs(R, {
    sx: { width: '100%', typography: 'body1' },
    children: [
      t.jsxs(v, {
        variant: 'outlined',
        children: [
          t.jsx(C, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            title: 'Shrinkage & Wastage Configurations',
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
                md: 3,
                children: t.jsx(c, {
                  fullWidth: !0,
                  select: !0,
                  label: 'Configuration Type',
                  name: 'configurationType',
                  value: r.configurationType,
                  onChange: i,
                  size: 'small',
                  children: D.map((a) =>
                    t.jsx(w, { value: a.value, children: a.label }, a.value)
                  )
                })
              }),
              t.jsx(n, {
                item: !0,
                xs: 12,
                md: 3,
                children: t.jsx(c, {
                  fullWidth: !0,
                  select: !0,
                  label:
                    r.configurationType === 'Vendor'
                      ? 'Vendor'
                      : r.configurationType === 'Fabric'
                        ? 'Fabric'
                        : 'Select',
                  name: 'entityId',
                  value: r.entityId,
                  onChange: i,
                  size: 'small',
                  children: f.map((a) =>
                    t.jsx(
                      w,
                      { value: a.lookUpId, children: a.lookUpName },
                      a.lookUpId
                    )
                  )
                })
              }),
              t.jsx(n, {
                item: !0,
                xs: 12,
                md: 3,
                children: t.jsx(c, {
                  size: 'small',
                  type: 'date',
                  label: 'Start Date',
                  name: 'startDate',
                  value: r.startDate,
                  onChange: i,
                  fullWidth: !0,
                  InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                })
              }),
              t.jsx(n, {
                item: !0,
                xs: 12,
                md: 3,
                children: t.jsx(c, {
                  size: 'small',
                  type: 'date',
                  label: 'End Date',
                  name: 'endDate',
                  value: r.endDate,
                  onChange: i,
                  fullWidth: !0,
                  InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                })
              }),
              t.jsxs(n, {
                item: !0,
                xs: 12,
                md: 3,
                children: [
                  t.jsx(c, {
                    label: 'Shrinkage',
                    fullWidth: !0,
                    size: 'small',
                    name: 'shrinkage',
                    value: r.shrinkage,
                    onChange: i,
                    required: !0
                  }),
                  ' '
                ]
              }),
              t.jsxs(n, {
                item: !0,
                xs: 12,
                md: 3,
                children: [
                  t.jsx(c, {
                    label: 'Wastage',
                    fullWidth: !0,
                    size: 'small',
                    name: 'wastage',
                    value: r.wastage,
                    onChange: i,
                    required: !0
                  }),
                  ' '
                ]
              }),
              t.jsx(n, {
                item: !0,
                xs: 12,
                md: 6,
                children: t.jsx(c, {
                  label: 'Remarks',
                  fullWidth: !0,
                  size: 'small',
                  name: 'remarks',
                  value: r.remarks,
                  onChange: i,
                  required: !0
                })
              }),
              t.jsx(n, {
                item: !0,
                xs: 12,
                textAlign: 'right',
                sx: { mt: 2 },
                children: t.jsx(M, {
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
      t.jsx(V, { color: '#cc8587', sx: { height: 1, width: '100%', mt: 2 } }),
      t.jsxs(v, {
        variant: 'outlined',
        children: [
          t.jsx(C, {
            className: 'css-4rfrnx-MuiCardHeader-root',
            avatar: t.jsx(P, {}),
            title: 'View Terms And Conditions ',
            titleTypographyProps: { style: { color: 'white' } }
          }),
          t.jsx(n, {
            container: !0,
            spacing: 2,
            width: 'Inherit',
            children: t.jsx(n, {
              item: !0,
              xs: 12,
              children: t.jsx(Q, {
                initialRows: S,
                iColumns: L,
                setInitialData: b,
                setIsEdit: I,
                deleteApi:
                  'http://100.42.177.77:81/api/Configurations/DeleteShrinkageWastageConfigurationById?configurationId=',
                deleteBy: 'configurationId',
                refetch: h
              })
            })
          }),
          ' '
        ]
      })
    ]
  });
};
export { ee as default };
