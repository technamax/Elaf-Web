import {
  s as q,
  u as X,
  x as _,
  y as J,
  z as K,
  b as Z,
  j as a,
  B as ee,
  C as B,
  d as L,
  G as u,
  D as te
} from './index-CzwspkkF.js';
import { r as i } from './vendor-BXCbSo2_.js';
import { B as ae, a as re } from './axios-lonJZgKi.js';
import { d as se } from './VisibilityOutlined-D9xuAg3y.js';
import { u as ne, D as oe, R as ie } from './ReuseableDataGrid-I9L9E5Xk.js';
import { T as m } from './TextField-Djr8gt34.js';
import { M as R } from './MenuItem-ZWEe2ZC6.js';
import './Skeleton-DdLL8d67.js';
const O = q(m)(({ theme: p }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  ye = () => {
    const [p, U] = i.useState([]),
      c = ne(),
      { user: g } = X(),
      [t, F] = i.useState([]),
      [de, b] = i.useState(!1),
      [s, h] = i.useState({
        configurationId: 0,
        vendorId: 0,
        startDate: '',
        endDate: null,
        shrinkage: '',
        wastage: '',
        remarks: '',
        entityName: '',
        configurationType: '',
        appId: g.appId,
        createdOn: new Date().toISOString(),
        createdBy: g.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: g.empId
      }),
      z = [
        { value: 'Vendor', label: 'Vendor' },
        { value: 'Fabric', label: 'Fabric' }
      ];
    i.useEffect(() => {
      const e = (r) => {
        const n = new Date(r),
          l = n.getFullYear(),
          d = String(n.getMonth() + 1).padStart(2, '0'),
          o = String(n.getDate()).padStart(2, '0');
        return `${l}-${d}-${o}`;
      };
      h({
        configurationId: (t == null ? void 0 : t.configurationId) || 0,
        vendorId: (t == null ? void 0 : t.vendorId) || 0,
        startDate: t != null && t.startDate ? e(t.startDate) : '',
        endDate: t != null && t.endDate ? e(t.endDate) : null,
        shrinkage: (t == null ? void 0 : t.shrinkage) || '',
        wastage: (t == null ? void 0 : t.wastage) || '',
        remarks: (t == null ? void 0 : t.remarks) || '',
        configurationType: (t == null ? void 0 : t.configurationType) || '',
        entityName: (t == null ? void 0 : t.entityName) || '',
        appId: (t == null ? void 0 : t.appId) || g.appId,
        createdOn:
          (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
        createdBy: (t == null ? void 0 : t.createdBy) || g.empId,
        lastUpdatedOn: new Date().toISOString(),
        LastUpdatedBy: g.empId
      });
    }, [t]);
    const [C, G] = i.useState([]);
    i.useState(!1), _();
    const { data: y, refetch: I } = J(s.vendorId, { skip: !s.vendorId });
    K(s.categoryId, { skip: !s.categoryId });
    const { data: S } = Z(),
      [k, w] = i.useState([]),
      [D, P] = i.useState([]),
      [f, v] = i.useState([]);
    i.useEffect(() => {
      if (S) {
        const e = S.result[0];
        P(e.vendorList), v(e.fabricList.map((r, n) => ({ id: n + 1, ...r })));
      }
    }, [S]),
      i.useEffect(() => {
        y && G(y.result.map((e, r) => ({ id: r + 1, ...e })));
      }, [y, I]),
      i.useEffect(() => {
        s.configurationType === 'Vendor' && w(D),
          s.configurationType === 'Fabric' && w(f);
      }, [s.configurationType]),
      console.log('initialRows', C);
    const x = (e) => {
        const { name: r, value: n } = e.target;
        if (r === 'vendorId') {
          const l = k.find((d) => d.lookUpId === parseInt(n));
          h({ ...s, vendorId: n, entityName: l ? l.lookUpName : '' });
        } else h({ ...s, [r]: n });
      },
      M = async () => {
        console.log('formData', s);
        try {
          const e = await re.post(
            'http://100.42.177.77:81/api/Configurations/SaveShrinkageWastageConfiguration',
            s
          );
          console.log('Save response:', e.data),
            h((r) => ({
              configurationId: 0,
              vendorId: 0,
              entityName: '',
              startDate: '',
              endDate: null,
              shrinkage: '',
              wastage: '',
              remarks: '',
              configurationType: '',
              appId: g.appId,
              createdOn: new Date().toISOString(),
              createdBy: g.empId,
              lastUpdatedOn: new Date().toISOString(),
              LastUpdatedBy: g.empId
            })),
            I(),
            b(!1),
            w([]);
        } catch (e) {
          console.error('Error saving data:', e);
        }
      };
    console.log('formData', s),
      console.log('vendors', D),
      console.log('fabrics', f),
      console.log('categories', k);
    const V = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'configurationType', headerName: 'Configuration Type' },
      { field: 'fabricName', headerName: 'Name' },
      {
        field: 'startDate',
        headerName: 'Start Date',
        valueGetter: (e) => {
          if (e !== null)
            return new Date(e).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            });
        }
      },
      {
        field: 'endDate',
        headerName: 'End Date',
        valueGetter: (e) => {
          if (e)
            return new Date(e).toLocaleDateString('en-GB', {
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
    console.log('fabrics', f);
    const j = (e) => {
        const { id: r, field: n, value: l } = e;
        console.log('Editing cell:', e),
          n === 'wastage'
            ? v((d) => d.map((o) => (o.id === r ? { ...o, wastage: l } : o)))
            : n === 'shrikage' &&
              v((d) => d.map((o) => (o.id === r ? { ...o, shrikage: l } : o)));
      },
      A = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'lookUpName', headerName: 'Fabric' },
        {
          field: 'wastage',
          headerName: 'Wastage',
          width: 'auto',
          renderCell: (e) =>
            a.jsx(O, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.wastage || '',
              onChange: (r) =>
                j({
                  id: e.id,
                  field: 'wastage',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'shrikage',
          headerName: 'Shrinkage',
          width: 'auto',
          renderCell: (e) =>
            a.jsx(O, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.shrikage || '',
              onChange: (r) =>
                j({
                  id: e.id,
                  field: 'shrikage',
                  value: Number(r.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        }
      ],
      H = () => {
        c.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    i.useEffect(() => {
      H();
    });
    const [N, T] = i.useState([]),
      [E, W] = i.useState([]),
      [Q, $] = i.useState([]),
      Y = i.useCallback(
        (e) => {
          U(e);
          const r = e
              .map((d) => {
                const o = c.current.getRow(d);
                return console.log('rowData', o), o ? o.shrikage : null;
              })
              .filter((d) => d !== null),
            n = e
              .map((d) => {
                const o = c.current.getRow(d);
                return console.log('rowData', o), o ? o.wastage : null;
              })
              .filter((d) => d !== null),
            l = e
              .map((d) => {
                const o = c.current.getRow(d);
                return console.log('rowData', o), o ? o.lookUpId : null;
              })
              .filter((d) => d !== null);
          console.log('poPcsLists', n), T(r), W(n), $(l);
        },
        [c]
      );
    return (
      i.useEffect(() => {
        const e = p.map((n) => {
            const l = c.current.getRow(n);
            return l && l.shrikage !== void 0 ? l.shrikage : 0;
          }),
          r = p.map((n) => {
            const l = c.current.getRow(n);
            return l && l.wastage !== void 0 ? l.wastage : 0;
          });
        T(e), W(r), h((n) => ({ ...n, shrinkage: e, wastage: r }));
      }, [f, p]),
      i.useEffect(() => {
        h({ ...s, fabricId: Q, shrinkage: N, wastage: E });
      }, [N, E]),
      i.useEffect(() => {
        c.current && console.log('API ref is ready:', c.current);
      }, [c]),
      a.jsxs(ee, {
        sx: { width: '100%', typography: 'body1' },
        children: [
          a.jsxs(B, {
            variant: 'outlined',
            children: [
              a.jsx(L, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                title: 'Shrinkage & Wastage Configurations',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              a.jsxs(u, {
                container: !0,
                spacing: 1,
                width: 'Inherit',
                sx: { paddingY: 2, paddingX: 2 },
                children: [
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: a.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label: 'Configuration Type',
                      name: 'configurationType',
                      value: s.configurationType,
                      onChange: x,
                      size: 'small',
                      children: z.map((e) =>
                        a.jsx(R, { value: e.value, children: e.label }, e.value)
                      )
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: a.jsx(m, {
                      fullWidth: !0,
                      select: !0,
                      label:
                        s.configurationType === 'Vendor'
                          ? 'Vendor'
                          : s.configurationType === 'Fabric'
                            ? 'Fabric'
                            : 'Select',
                      name: 'vendorId',
                      value: s.vendorId,
                      onChange: x,
                      size: 'small',
                      disabled: s.configurationType === 'Fabric',
                      children: k.map((e) =>
                        a.jsx(
                          R,
                          { value: e.lookUpId, children: e.lookUpName },
                          e.lookUpId
                        )
                      )
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: a.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'Start Date',
                      name: 'startDate',
                      value: s.startDate,
                      onChange: x,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    md: 3,
                    children: a.jsx(m, {
                      size: 'small',
                      type: 'date',
                      label: 'End Date',
                      name: 'endDate',
                      value: s.endDate,
                      onChange: x,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: a.jsx(m, {
                      label: 'Remarks',
                      fullWidth: !0,
                      size: 'small',
                      name: 'remarks',
                      value: s.remarks,
                      onChange: x,
                      required: !0
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    children: a.jsx('div', {
                      style: { height: 400, width: '100%' },
                      children: a.jsx(oe, {
                        rows: f,
                        columns: A,
                        apiRef: c,
                        disableRowSelectionOnClick: !0,
                        checkboxSelection: !0,
                        onRowSelectionModelChange: Y,
                        rowSelectionModel: p
                      })
                    })
                  }),
                  a.jsx(u, {
                    item: !0,
                    xs: 12,
                    textAlign: 'right',
                    sx: { mt: 2 },
                    children: a.jsx(ae, {
                      variant: 'contained',
                      size: 'small',
                      onClick: M,
                      children: 'Save'
                    })
                  })
                ]
              }),
              ' '
            ]
          }),
          a.jsx(te, {
            color: '#cc8587',
            sx: { height: 1, width: '100%', mt: 2 }
          }),
          a.jsxs(B, {
            variant: 'outlined',
            children: [
              a.jsx(L, {
                className: 'css-4rfrnx-MuiCardHeader-root',
                avatar: a.jsx(se, {}),
                title: 'View Shrinkage wastage',
                titleTypographyProps: { style: { color: 'white' } }
              }),
              a.jsx(u, {
                container: !0,
                spacing: 2,
                width: 'Inherit',
                children: a.jsx(u, {
                  item: !0,
                  xs: 12,
                  children: a.jsx(ie, {
                    initialRows: C,
                    iColumns: V,
                    setInitialData: F,
                    setIsEdit: b,
                    deleteApi:
                      'http://100.42.177.77:81/api/Configurations/DeleteShrinkageWastageConfigurationById?configurationId=',
                    deleteBy: 'configurationId',
                    refetch: I
                  })
                })
              }),
              ' '
            ]
          })
        ]
      })
    );
  };
export { ye as default };
