import {
  s as q,
  u as X,
  l as _,
  m as J,
  n as K,
  b as Z,
  j as a,
  B as ee,
  C as B,
  d as L,
  G as u,
  D as te
} from './index-a8gvI6HS.js';
import { r as o } from './vendor-BXCbSo2_.js';
import { B as ae, a as se } from './axios-BAxkGnGK.js';
import { d as re } from './VisibilityOutlined-7xGDXOA6.js';
import { u as ne, D as oe, R as ie } from './ReuseableDataGrid-Bo304H0A.js';
import { T as m } from './TextField-CsNxJIZ0.js';
import { M as R } from './Skeleton-C1EQF4m0.js';
const O = q(m)(({ theme: p }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  xe = () => {
    const [p, U] = o.useState([]),
      c = ne(),
      { user: g } = X(),
      [t, F] = o.useState([]),
      [de, b] = o.useState(!1),
      [i, h] = o.useState({
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
      G = [
        { value: 'Vendor', label: 'Vendor' },
        { value: 'Fabric', label: 'Fabric' }
      ];
    o.useEffect(() => {
      const e = (s) => {
        const r = new Date(s),
          l = r.getFullYear(),
          d = String(r.getMonth() + 1).padStart(2, '0'),
          n = String(r.getDate()).padStart(2, '0');
        return `${l}-${d}-${n}`;
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
    const [C, z] = o.useState([]);
    o.useState(!1), _();
    const { data: y, refetch: I } = J();
    K(i.categoryId, { skip: !i.categoryId });
    const { data: S } = Z(),
      [k, w] = o.useState([]),
      [D, P] = o.useState([]),
      [f, v] = o.useState([]);
    o.useEffect(() => {
      if (S) {
        const e = S.result[0];
        P(e.vendorList), v(e.fabricList.map((s, r) => ({ id: r + 1, ...s })));
      }
    }, [S]),
      o.useEffect(() => {
        y && z(y.result.map((e, s) => ({ id: s + 1, ...e })));
      }, [y, I]),
      o.useEffect(() => {
        i.configurationType === 'Vendor' && w(D),
          i.configurationType === 'Fabric' && w(f);
      }, [i.configurationType]),
      console.log('initialRows', C);
    const x = (e) => {
        const { name: s, value: r } = e.target;
        if (s === 'vendorId') {
          const l = k.find((d) => d.lookUpId === parseInt(r));
          h({ ...i, vendorId: r, entityName: l ? l.lookUpName : '' });
        } else h({ ...i, [s]: r });
      },
      M = async () => {
        console.log('formData', i);
        try {
          const e = await se.post(
            'http://100.42.177.77:81/api/Configurations/SaveShrinkageWastageConfiguration',
            i
          );
          console.log('Save response:', e.data),
            h((s) => ({
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
    console.log('formData', i),
      console.log('vendors', D),
      console.log('fabrics', f),
      console.log('categories', k);
    const V = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'configurationType', headerName: 'Configuration Type' },
      { field: 'entityName', headerName: 'Name' },
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
        const { id: s, field: r, value: l } = e;
        console.log('Editing cell:', e),
          r === 'wastage'
            ? v((d) => d.map((n) => (n.id === s ? { ...n, wastage: l } : n)))
            : r === 'shrikage' &&
              v((d) => d.map((n) => (n.id === s ? { ...n, shrikage: l } : n)));
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
              onChange: (s) =>
                j({
                  id: e.id,
                  field: 'wastage',
                  value: Number(s.target.value)
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
              onChange: (s) =>
                j({
                  id: e.id,
                  field: 'shrikage',
                  value: Number(s.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        }
      ],
      H = () => {
        c.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    o.useEffect(() => {
      H();
    });
    const [N, T] = o.useState([]),
      [E, W] = o.useState([]),
      [Q, $] = o.useState([]),
      Y = o.useCallback(
        (e) => {
          U(e);
          const s = e
              .map((d) => {
                const n = c.current.getRow(d);
                return console.log('rowData', n), n ? n.shrikage : null;
              })
              .filter((d) => d !== null),
            r = e
              .map((d) => {
                const n = c.current.getRow(d);
                return console.log('rowData', n), n ? n.wastage : null;
              })
              .filter((d) => d !== null),
            l = e
              .map((d) => {
                const n = c.current.getRow(d);
                return console.log('rowData', n), n ? n.lookUpId : null;
              })
              .filter((d) => d !== null);
          console.log('poPcsLists', r), T(s), W(r), $(l);
        },
        [c]
      );
    return (
      o.useEffect(() => {
        const e = p.map((r) => {
            const l = c.current.getRow(r);
            return l && l.shrikage !== void 0 ? l.shrikage : 0;
          }),
          s = p.map((r) => {
            const l = c.current.getRow(r);
            return l && l.wastage !== void 0 ? l.wastage : 0;
          });
        T(e), W(s), h((r) => ({ ...r, shrinkage: e, wastage: s }));
      }, [f, p]),
      o.useEffect(() => {
        h({ ...i, fabricId: Q, shrinkage: N, wastage: E });
      }, [N, E]),
      o.useEffect(() => {
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
                      value: i.configurationType,
                      onChange: x,
                      size: 'small',
                      children: G.map((e) =>
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
                        i.configurationType === 'Vendor'
                          ? 'Vendor'
                          : i.configurationType === 'Fabric'
                            ? 'Fabric'
                            : 'Select',
                      name: 'vendorId',
                      value: i.vendorId,
                      onChange: x,
                      size: 'small',
                      disabled: i.configurationType === 'Fabric',
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
                      value: i.startDate,
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
                      value: i.endDate,
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
                      value: i.remarks,
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
                avatar: a.jsx(re, {}),
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
export { xe as default };
