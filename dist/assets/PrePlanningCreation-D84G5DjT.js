import {
  s as le,
  u as ae,
  a as se,
  f as oe,
  k as ie,
  c as re,
  j as e,
  M as de,
  B as M,
  C as L,
  d as k,
  G as d,
  D as G
} from './index-a8gvI6HS.js';
import { r as a } from './vendor-BXCbSo2_.js';
import { B as ce, a as P } from './axios-BAxkGnGK.js';
import './dayjs.min-DO4_1a-m.js';
import { u as ue, D as pe, R as T } from './ReuseableDataGrid-Bo304H0A.js';
import { d as he, a as ge } from './AddCircle-DRScWp7c.js';
import { T as p } from './TextField-CsNxJIZ0.js';
import { T as me, a as xe, b as E, c as R } from './TabPanel-CcXhfPsy.js';
import { M as g } from './Skeleton-C1EQF4m0.js';
const fe = le(p)(({ theme: b }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  Be = () => {
    const [b, O] = a.useState([]),
      c = ue(),
      { user: F } = ae(),
      [l, u] = a.useState({
        planningHeaderId: 0,
        collectionId: '',
        poPcs: '',
        createdBy: F.empId,
        createdOn: new Date().toISOString()
      }),
      [o, C] = a.useState([]);
    a.useEffect(() => {
      u({
        ...l,
        collectionId: (o == null ? void 0 : o.collectionId) || '',
        planningHeaderId: (o == null ? void 0 : o.planningHeaderId) || 0,
        poPcs: (o == null ? void 0 : o.poPcs) || ''
      });
    }, [o]);
    const { data: m, refetch: z } = se(),
      { data: x, refetch: Ie } = oe(l.collectionId, { skip: !l.collectionId }),
      { data: f, refetch: A } = ie(l.collectionId, { skip: !l.collectionId }),
      { enqueueSnackbar: j } = re(),
      [y, v] = a.useState([]),
      [D, W] = a.useState([]);
    a.useEffect(() => {
      x && v(x.result.map((t, n) => ({ id: n + 1, ...t })));
    }, [x, l.collectionId]),
      a.useEffect(() => {
        f && W(f.result.map((t, n) => ({ id: n + 1, ...t })));
      }, [f]);
    const S = (m == null ? void 0 : m.result) || [],
      [N, $] = a.useState([]),
      [Q, X] = a.useState([]),
      [Y, _] = a.useState('1');
    console.log('designOptions', y);
    const w = [
        {
          field: 'collectionName',
          headerName: 'Collection',
          editable: !0,
          flex: 2
        },
        { field: 'batchNo', headerName: 'Batch#', flex: 1, editable: !0 },
        { field: 'poPcs', headerName: 'Po Pcs', flex: 1, editable: !0 },
        {
          field: 'designNo',
          headerName: 'Design Number',
          flex: 1,
          editable: !0
        },
        { field: 'batchStatus', headerName: 'Status', flex: 1, editable: !0 }
      ],
      q = (t) => {
        const { id: n, field: r, value: s } = t;
        console.log('Editing cell:', t),
          r === 'poPcs' &&
            v((i) => i.map((I) => (I.id === n ? { ...I, poPcs: s } : I)));
      },
      U = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'orderNumber', flex: 1, headerName: 'Order Number' },
        { field: 'designNo', flex: 1, headerName: 'Design' },
        { field: 'designerName', flex: 1, headerName: 'Designer' },
        {
          field: 'poPcs',
          headerName: 'Po Pcs',
          flex: 1,
          renderCell: (t) =>
            e.jsx(fe, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: t.row.poPcs || '',
              onChange: (n) =>
                q({ id: t.id, field: 'poPcs', value: Number(n.target.value) }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'dateOfPlanning',
          flex: 1,
          headerName: 'Date Of Planning',
          valueGetter: (t) =>
            new Date(t).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: '2-digit'
            })
        },
        { field: 'colorName', flex: 1, headerName: 'colorName' }
      ],
      V = (t, n) => {
        _(n);
      },
      [B, J] = a.useState('');
    console.log('pcs', B);
    const h = async (t) => {
        const { name: n, value: r } = t.target;
        if (n === 'collectionId') {
          const s = S.find((i) => i.collectionId === parseInt(r));
          J(s.poPcs), u({ ...l, collectionId: r, poPcs: s ? s.poPcs : '' });
        } else
          u(
            n === 'designId'
              ? { ...l, designId: r, poPcs: B, plannedDesignedId: r }
              : { ...l, [n]: r }
          );
      },
      K = async () => {
        try {
          const t = await P.post(
            'http://100.42.177.77:81/api/PrePlanning/SavePrePlanningHeader',
            l
          );
          j('Planning Batch saved successfully!', {
            variant: 'success',
            autoHideDuration: 5e3
          }),
            u({ ...l, designId: '', poPcs: '', batchNo: '' });
        } catch (t) {
          console.error('Error saving data:', t),
            j('Planning Batch not saved successfully!', {
              variant: 'error',
              autoHideDuration: 5e3
            });
        }
      };
    a.useEffect(() => {
      (async () => {
        try {
          const n = await P.get(
            'http://100.42.177.77:81/api/PrePlanning/GetCollectionListFromPlanningHeader'
          );
          $(n.data.result);
        } catch (n) {
          console.error('Error fetching planned collections:', n);
        }
      })();
    }, []),
      a.useEffect(() => {
        (async () => {
          if (l.plannedCollectionId)
            try {
              const n = await P.get(
                `http://100.42.177.77:81/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${l.plannedCollectionId}`
              );
              X(n.data.result);
            } catch (n) {
              console.error('Error fetching planned designs:', n);
            }
        })();
      }, [l.plannedCollectionId]),
      console.log('formdata', l),
      console.log('InitialData', o);
    const [H, Z] = a.useState([]),
      [ee, te] = a.useState([]),
      ne = a.useCallback(
        (t) => {
          O(t);
          const n = t
              .map((s) => {
                const i = c.current.getRow(s);
                return console.log('rowData', i), i ? i.designId : null;
              })
              .filter((s) => s !== null),
            r = t
              .map((s) => {
                const i = c.current.getRow(s);
                return console.log('rowData', i), i ? i.poPcs : null;
              })
              .filter((s) => s !== null);
          console.log('poPcsLists', r), Z(n), te(r);
        },
        [c]
      );
    return (
      a.useEffect(() => {
        u({ ...l, designIdList: H, poPcsList: ee });
      }, [H]),
      a.useEffect(() => {
        c.current && console.log('API ref is ready:', c.current);
      }, [c]),
      e.jsx(de, {
        style: {
          borderWidth: 1,
          borderStyle: 'dotted',
          borderColor: '#a11f23',
          width: 'auto',
          maxHeight: { xs: '80vh', md: 'auto' },
          overflow: 'auto'
        },
        children: e.jsx(M, {
          sx: { width: '100%', typography: 'body1' },
          children: e.jsxs(me, {
            value: Y,
            children: [
              e.jsx(M, {
                sx: { borderBottom: 1, borderColor: 'divider' },
                children: e.jsxs(xe, {
                  onChange: V,
                  'aria-label': 'lab API tabs example',
                  children: [
                    e.jsx(E, {
                      icon: e.jsx(he, {}),
                      label: 'Add Collection',
                      value: '1',
                      sx: (t) => ({
                        '& .MuiTouchRipple-child': {
                          backgroundColor: `${t.palette.primary.main} !important`
                        }
                      })
                    }),
                    e.jsx(E, {
                      icon: e.jsx(ge, {}),
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
              e.jsx(R, {
                value: '1',
                children: e.jsxs(L, {
                  variant: 'outlined',
                  children: [
                    e.jsx(k, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Create Batch Planning',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsxs(d, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(p, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Select Collection',
                            name: 'collectionId',
                            value: l.collectionId,
                            onChange: h,
                            size: 'small',
                            InputLabelProps: { sx: { color: 'black' } },
                            children: S.map((t) =>
                              e.jsx(
                                g,
                                {
                                  value: t.collectionId,
                                  children: t.collectionName
                                },
                                t.collectionId
                              )
                            )
                          })
                        }),
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(p, {
                            label: 'Po PCs',
                            fullWidth: !0,
                            size: 'small',
                            name: 'poPcs',
                            value: l.poPcs,
                            onChange: h,
                            sx: (t) => ({
                              ...(l.poPcs !== '' && {
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
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          children: e.jsx('div', {
                            style: { height: 400, width: '100%' },
                            children: e.jsx(pe, {
                              rows: y,
                              columns: U,
                              apiRef: c,
                              disableRowSelectionOnClick: !0,
                              checkboxSelection: !0,
                              onRowSelectionModelChange: ne,
                              rowSelectionModel: b
                            })
                          })
                        }),
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          md: 12,
                          textAlign: 'right',
                          sx: { marginBottom: 2 },
                          children: e.jsx(ce, {
                            variant: 'contained',
                            size: 'small',
                            onClick: K,
                            children: 'Save'
                          })
                        }),
                        e.jsx(G, {
                          color: '#cc8587',
                          sx: { height: 2, width: '100%', mt: 2 }
                        }),
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          paddingTop: 1,
                          children: e.jsx(T, {
                            initialRows: D,
                            iColumns: w,
                            formData: l,
                            deleteApi:
                              'http://100.42.177.77:81/api/PrePlanning/DeletePlanningHeaderIdByPlanningId?planningHeaderId=',
                            deleteBy: 'planningHeaderId',
                            refetch: A,
                            setInitialData: C
                          })
                        })
                      ]
                    })
                  ]
                })
              }),
              e.jsx(R, {
                value: '2',
                children: e.jsxs(L, {
                  variant: 'outlined',
                  children: [
                    e.jsx(k, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Searc Batch Planning',
                      titleTypographyProps: { style: { color: 'white' } }
                    }),
                    e.jsxs(d, {
                      container: !0,
                      spacing: 2,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(p, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Select Collection',
                            name: 'plannedCollectionId',
                            value: l.plannedCollectionId,
                            onChange: h,
                            size: 'small',
                            children:
                              N.length > 0
                                ? N.map((t) =>
                                    e.jsx(
                                      g,
                                      {
                                        id: 'ddlCollection',
                                        value: t.collectionId,
                                        children: t.collectionName
                                      },
                                      t.planningHeaderId
                                    )
                                  )
                                : e.jsx(g, {
                                    disabled: !0,
                                    children: 'No Collections Available'
                                  })
                          })
                        }),
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          md: 4,
                          children: e.jsx(p, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Design',
                            name: 'plannedDesignedId',
                            value: l.plannedDesignedId,
                            onChange: h,
                            size: 'small',
                            children: Q.map((t) =>
                              e.jsx(
                                g,
                                { value: t.designId, children: t.designNo },
                                t.planningHeaderId
                              )
                            )
                          })
                        }),
                        e.jsx(G, {
                          color: '#cc8587',
                          sx: { height: 2, width: '100%', mt: 2 }
                        }),
                        e.jsx(d, {
                          item: !0,
                          xs: 12,
                          paddingTop: 1,
                          children: e.jsx(T, {
                            initialRows: D,
                            iColumns: w,
                            formData: l,
                            refetch: z,
                            setInitialData: C
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
export { Be as default };
