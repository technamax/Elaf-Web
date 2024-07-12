import {
  r as Z,
  i as ee,
  j as e,
  A as V,
  _ as q,
  N as le,
  u as te,
  B as O,
  a as ie,
  e as re,
  c as de,
  M as ce,
  C as U,
  d as Q,
  G as c,
  D as X
} from './index-C7VmP1sn.js';
import { r as l } from './vendor-BXCbSo2_.js';
import { B as oe, a as j } from './axios-sajpI7HX.js';
import {
  u as ue,
  G as E,
  d as he,
  a as me,
  D as pe,
  b as ge,
  E as xe,
  c as fe
} from './ExcelExport-DggV9N9r.js';
import { d as Ce } from './Close-D_kvijF0.js';
import './dayjs.min-DO4_1a-m.js';
import { M as D } from './Skeleton-BTBpQPPV.js';
import { d as be, a as Ie } from './AddCircle-BE525nno.js';
import { T as je, a as ve, b as Y, c as J } from './TabPanel-BEdfmz8f.js';
import { T as R } from './TextField-47SmC6NA.js';
var F = {},
  Pe = ee;
Object.defineProperty(F, '__esModule', { value: !0 });
var ne = (F.default = void 0),
  we = Pe(Z()),
  ye = e;
ne = F.default = (0, we.default)(
  (0, ye.jsx)('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z' }),
  'Add'
);
var z = {},
  De = ee;
Object.defineProperty(z, '__esModule', { value: !0 });
var ae = (z.default = void 0),
  Me = De(Z()),
  Se = e;
ae = z.default = (0, Me.default)(
  (0, Se.jsx)('path', {
    d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z'
  }),
  'Save'
);
const ke = ['label', 'icon', 'showInMenu', 'onClick'],
  Ee = [
    'label',
    'icon',
    'showInMenu',
    'onClick',
    'closeMenuOnClick',
    'closeMenu'
  ],
  T = l.forwardRef((i, f) => {
    var u;
    const g = ue();
    if (!i.showInMenu) {
      const { label: r, icon: h, onClick: d } = i,
        m = V(i, ke),
        M = (S) => {
          d == null || d(S);
        };
      return e.jsx(
        g.slots.baseIconButton,
        q(
          { ref: f, size: 'small', role: 'menuitem', 'aria-label': r },
          m,
          { onClick: M },
          (u = g.slotProps) == null ? void 0 : u.baseIconButton,
          { children: l.cloneElement(h, { fontSize: 'small' }) }
        )
      );
    }
    const {
        label: v,
        icon: P,
        onClick: x,
        closeMenuOnClick: N = !0,
        closeMenu: C
      } = i,
      w = V(i, Ee),
      a = (r) => {
        x == null || x(r), N && (C == null || C());
      };
    return e.jsxs(
      D,
      q({ ref: f }, w, {
        onClick: a,
        children: [P && e.jsx(le, { children: P }), v]
      })
    );
  });
function K({
  initialRows: i,
  ncolumns: f,
  formData: g,
  deleteApi: v,
  disableDelete: P,
  deleteBy: x,
  editAPi: N,
  disableEdit: C,
  disableAddRecord: w,
  refetch: a
}) {
  const { user: u } = te(),
    [r, h] = l.useState(i),
    [d, m] = l.useState({});
  l.useEffect(() => {
    h(i);
  }, [i]);
  function M(n) {
    const { setRows: t, setRowModesModel: o } = n,
      s = () => {
        const p = r.length + 1,
          k = { id: p, ...g, isNew: !0 };
        t((y) => [...y, k]),
          o((y) => ({
            ...y,
            [p]: { mode: E.Edit, fieldToFocus: 'collectionName' }
          }));
      };
    return e.jsxs(ge, {
      sx: { justifyContent: 'space-between' },
      children: [
        e.jsx(oe, {
          color: 'primary',
          startIcon: e.jsx(ne, {}),
          onClick: s,
          disabled: w,
          disab: !0,
          children: 'Add record'
        }),
        e.jsx(xe, { data: i, fileName: 'collection' })
      ]
    });
  }
  const S = (n, t) => {
      n.reason === fe.rowFocusOut && (t.defaultMuiPrevented = !0);
    },
    B = (n) => () => {
      m({ ...d, [n]: { mode: E.Edit } });
    },
    G = (n) => async () => {
      const o = r.find((s) => s.id === n)[x];
      try {
        await j.delete(`${v}${o}`), h(r.filter((s) => s.id !== n));
      } catch (s) {
        console.error('Error deleting data:', s);
      }
    },
    H = (n) => () => {
      m({ ...d, [n]: { mode: E.View, ignoreModifications: !0 } }),
        r.find((o) => o.id === n).isNew && h(r.filter((o) => o.id !== n));
    },
    L = async (n, t) => {
      console.log('newRow', n);
      try {
        const { id: o, ...s } = n;
        console.log('formattedRow', s);
        const p = {
            lastUpdatedBy: u.empId,
            lastUpdatedOn: new Date().toISOString()
          },
          k = { ...s, ...p },
          y = await j.post(N, k),
          A = { ...y.data.result, id: n.id };
        return (
          h((se) => se.map((W) => (W.id === n.id ? A : W))),
          console.log('response.data:', y.data),
          A
        );
        a();
      } catch (o) {
        throw (console.error('Error updating data:', o), o);
      }
    },
    b = (n) => {
      m(n);
    },
    _ = (n) => async () => {
      m((t) => ({ ...t, [n]: { mode: E.View } }));
    },
    $ = [
      ...f,
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id: n }) => {
          var o;
          return ((o = d[n]) == null ? void 0 : o.mode) === E.Edit
            ? [
                e.jsx(T, {
                  icon: e.jsx(ae, {}),
                  label: 'Save',
                  sx: { color: 'primary.main' },
                  onClick: _(n)
                }),
                e.jsx(T, {
                  icon: e.jsx(Ce, {}),
                  label: 'Cancel',
                  className: 'textPrimary',
                  onClick: H(n),
                  color: 'inherit',
                  sx: { color: 'error.dark' }
                })
              ]
            : [
                e.jsx(T, {
                  icon: e.jsx(he, {}),
                  label: 'Edit',
                  className: 'textPrimary',
                  onClick: B(n),
                  color: 'inherit',
                  sx: { color: 'secondary.dark' },
                  disabled: C
                }),
                e.jsx(T, {
                  icon: e.jsx(me, {}),
                  label: 'Delete',
                  onClick: G(n),
                  color: 'inherit',
                  sx: { color: 'error.dark' },
                  disabled: P
                })
              ];
        }
      }
    ],
    I = (n, t) => {
      t.defaultMuiPrevented = !0;
    };
  return e.jsx(O, {
    sx: {
      height: 500,
      width: 'inherit',
      '& .actions': { color: 'text.secondary' },
      '& .textPrimary': { color: 'text.primary' }
    },
    children: e.jsx(pe, {
      sx: { '--DataGrid-rowBorderColor': 'rgb(255 255 255)' },
      rows: r,
      columns: $,
      editMode: 'row',
      rowModesModel: d,
      onRowModesModelChange: b,
      onRowEditStop: S,
      processRowUpdate: L,
      slots: { toolbar: M },
      slotProps: { toolbar: { setRows: h, setRowModesModel: m } },
      getRowId: (n) => n.id,
      onCellDoubleClick: I
    })
  });
}
const Fe = () => {
  const { data: i, refetch: f } = ie(),
    { data: g, refetch: v } = re(),
    { user: P } = te(),
    { enqueueSnackbar: x } = de(),
    [N, C] = l.useState([]);
  l.useEffect(() => {
    g && (C(g.result), v());
  }, [g]);
  const w = (i == null ? void 0 : i.result) || [],
    [a, u] = l.useState({
      collectionName: '',
      collectionId: '',
      plannedCollectionId: '',
      plannedDesignedId: '',
      designId: '',
      poPcs: '',
      batchNo: '',
      createdBy: P.empId,
      createdOn: new Date().toISOString()
    }),
    [r, h] = l.useState([]),
    [d, m] = l.useState([]),
    [M, S] = l.useState([]),
    [B, G] = l.useState([]),
    [H, L] = l.useState('1'),
    b = l.useCallback(async () => {
      try {
        if (a.plannedDesignedId) {
          const o = (
            await j.get(
              `https://gecxc.com:4041/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${a.plannedDesignedId}`
            )
          ).data.result.map((s, p) => ({ ...s, id: p + 1 }));
          G(o), v();
        }
      } catch (t) {
        console.error('Error fetching data:', t), G([]);
      }
    }, [a.plannedDesignedId]);
  l.useEffect(() => {
    b();
  }, [b]);
  const _ = [
      {
        field: 'collectionName',
        headerName: 'Collection',
        editable: !0,
        flex: 2
      },
      { field: 'batchNo', headerName: 'Batch#', flex: 1, editable: !0 },
      { field: 'poPcs', headerName: 'Po Pcs', flex: 1, editable: !0 },
      { field: 'designNo', headerName: 'Design Number', flex: 1, editable: !0 },
      { field: 'batchStatus', headerName: 'Status', flex: 1, editable: !0 }
    ],
    $ = (t, o) => {
      L(o);
    },
    I = async (t) => {
      const { name: o, value: s } = t.target;
      if (o === 'collectionId') {
        const p = w.find((k) => k.collectionId === parseInt(s));
        u({ ...a, collectionId: s, poPcs: p ? p.poPcs : '' });
      } else
        u(
          o === 'designId'
            ? { ...a, designId: s, plannedDesignedId: s }
            : { ...a, [o]: s }
        );
    },
    n = async () => {
      try {
        const t = await j.post(
          'https://gecxc.com:4041/api/PrePlanning/SavePrePlanningHeader',
          a
        );
        x('Planning Batch saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          u({ ...a, designId: '', poPcs: '', batchNo: '' }),
          await f(),
          await b();
      } catch (t) {
        console.error('Error saving data:', t),
          x('Planning Batch not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
  return (
    l.useEffect(() => {
      (async () => {
        if (a.collectionId)
          try {
            const o = await j.get(
              `https://gecxc.com:4041/api/DesignRegistration/GetDesignListByCollectionId?CollectionId=${a.collectionId}`
            );
            h(o.data.result);
          } catch (o) {
            console.error('Error fetching design options:', o);
          }
      })();
    }, [a.collectionId]),
    l.useEffect(() => {
      (async () => {
        try {
          const o = await j.get(
            'https://gecxc.com:4041/api/PrePlanning/GetCollectionListFromPlanningHeader'
          );
          m(o.data.result);
        } catch (o) {
          console.error('Error fetching planned collections:', o);
        }
      })();
    }, []),
    l.useEffect(() => {
      (async () => {
        if (a.plannedCollectionId)
          try {
            const o = await j.get(
              `https://gecxc.com:4041/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${a.plannedCollectionId}`
            );
            S(o.data.result);
          } catch (o) {
            console.error('Error fetching planned designs:', o);
          }
      })();
    }, [a.plannedCollectionId]),
    e.jsx(ce, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(O, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(je, {
          value: H,
          children: [
            e.jsx(O, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(ve, {
                onChange: $,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(Y, {
                    icon: e.jsx(be, {}),
                    label: 'Add Collection',
                    value: '1',
                    sx: (t) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${t.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(Y, {
                    icon: e.jsx(Ie, {}),
                    label: 'Search Collection',
                    value: '2',
                    sx: (t) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${t.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsx(J, {
              value: '1',
              children: e.jsxs(U, {
                variant: 'outlined',
                children: [
                  e.jsx(Q, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Create Batch Planning',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsxs(c, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(R, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Collection',
                          name: 'collectionId',
                          value: a.collectionId,
                          onChange: I,
                          size: 'small',
                          InputLabelProps: { sx: { color: 'black' } },
                          children: w.map((t) =>
                            e.jsx(
                              D,
                              {
                                value: t.collectionId,
                                children: t.collectionName
                              },
                              t.collectionId
                            )
                          )
                        })
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(R, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Design',
                          name: 'designId',
                          value: a.designId,
                          onChange: I,
                          size: 'small',
                          InputLabelProps: { sx: { color: 'black' } },
                          children: r.map((t) =>
                            e.jsx(
                              D,
                              { value: t.designId, children: t.designNo },
                              t.designId
                            )
                          )
                        })
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(R, {
                          label: 'Po PCs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: a.poPcs,
                          onChange: I,
                          sx: (t) => ({
                            ...(a.poPcs !== '' && {
                              '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                                { backgroundColor: '#c9c9c9 !important' }
                            }),
                            '& .MuiInputBase-input.Mui-disabled': {
                              WebkitTextFillColor: 'black'
                            },
                            '& .MuiInputBase-root.Mui-disabled': {
                              backgroundColor: '#f9f9f9'
                            },
                            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                              {},
                            '& .MuiInputLabel-root.Mui-disabled': {
                              color: 'rgba(0, 0, 0, 0.87)'
                            }
                          }),
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        textAlign: 'right',
                        sx: { marginBottom: 2 },
                        children: e.jsx(oe, {
                          variant: 'contained',
                          size: 'small',
                          onClick: n,
                          children: 'Save'
                        })
                      }),
                      e.jsx(X, {
                        color: '#cc8587',
                        sx: { height: 2, width: '100%', mt: 2 }
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        paddingTop: 1,
                        children: e.jsx(K, {
                          initialRows: B,
                          ncolumns: _,
                          formData: a,
                          fetchData: b,
                          refetch: f
                        })
                      })
                    ]
                  })
                ]
              })
            }),
            e.jsx(J, {
              value: '2',
              children: e.jsxs(U, {
                variant: 'outlined',
                children: [
                  e.jsx(Q, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Searc Batch Planning',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsxs(c, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(R, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Collection',
                          name: 'plannedCollectionId',
                          value: a.plannedCollectionId,
                          onChange: I,
                          size: 'small',
                          children:
                            d.length > 0
                              ? d.map((t) =>
                                  e.jsx(
                                    D,
                                    {
                                      id: 'ddlCollection',
                                      value: t.collectionId,
                                      children: t.collectionName
                                    },
                                    t.planningHeaderId
                                  )
                                )
                              : e.jsx(D, {
                                  disabled: !0,
                                  children: 'No Collections Available'
                                })
                        })
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(R, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Design',
                          name: 'plannedDesignedId',
                          value: a.plannedDesignedId,
                          onChange: I,
                          size: 'small',
                          children: M.map((t) =>
                            e.jsx(
                              D,
                              { value: t.designId, children: t.designNo },
                              t.planningHeaderId
                            )
                          )
                        })
                      }),
                      e.jsx(X, {
                        color: '#cc8587',
                        sx: { height: 2, width: '100%', mt: 2 }
                      }),
                      e.jsx(c, {
                        item: !0,
                        xs: 12,
                        paddingTop: 1,
                        children: e.jsx(K, {
                          initialRows: B,
                          ncolumns: _,
                          formData: a,
                          fetchData: b
                        })
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      })
    })
  );
};
export { Fe as default };
