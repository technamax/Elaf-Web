import {
  a as _,
  f as q,
  u as U,
  c as V,
  j as e,
  M as J,
  B as S,
  C as H,
  d as N,
  G as o,
  D as w
} from './index-CLjmpv_2.js';
import { r as a } from './vendor-BXCbSo2_.js';
import { a as g, B as K } from './axios-SrXXOFpt.js';
import './dayjs.min-DO4_1a-m.js';
import { R as M } from './ReuseableDataGrid-BmbazgSl.js';
import { d as Z, a as ee } from './AddCircle-CI1h8bkx.js';
import { T as ne, a as te, b as L, c as T } from './TabPanel-BPtSHQyI.js';
import { T as p } from './TextField-DG1slWXT.js';
import { M as h } from './Skeleton-Ceiu9GHN.js';
const he = () => {
  const { data: m, refetch: I } = _(),
    { data: x, refetch: f } = q(),
    { user: G } = U(),
    { enqueueSnackbar: C } = V(),
    [le, k] = a.useState([]);
  a.useEffect(() => {
    x && (k(x.result), f());
  }, [x]);
  const b = (m == null ? void 0 : m.result) || [],
    [t, r] = a.useState({
      collectionName: '',
      planningHeaderId: 0,
      collectionId: '',
      plannedCollectionId: '',
      plannedDesignedId: '',
      designId: '',
      poPcs: '',
      batchNo: '',
      createdBy: G.empId,
      createdOn: new Date().toISOString()
    }),
    [l, P] = a.useState([]);
  a.useEffect(() => {
    r({
      ...t,
      collectionId: (l == null ? void 0 : l.collectionId) || '',
      planningHeaderId: (l == null ? void 0 : l.planningHeaderId) || 0,
      plannedCollectionId: (l == null ? void 0 : l.plannedCollectionId) || '',
      plannedDesignedId: (l == null ? void 0 : l.plannedDesignedId) || '',
      designId: (l == null ? void 0 : l.designId) || '',
      poPcs: (l == null ? void 0 : l.poPcs) || '',
      batchNo: (l == null ? void 0 : l.batchNo) || ''
    });
  }, [l]);
  const [E, F] = a.useState([]),
    [j, O] = a.useState([]),
    [R, W] = a.useState([]),
    [y, v] = a.useState([]),
    [z, A] = a.useState('1'),
    d = a.useCallback(async () => {
      try {
        if (t.plannedDesignedId) {
          const s = (
            await g.get(
              `https://gecxc.com:449/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${t.plannedDesignedId}`
            )
          ).data.result.map((i, u) => ({ ...i, id: u + 1 }));
          v(s), f();
        }
      } catch (n) {
        console.error('Error fetching data:', n), v([]);
      }
    }, [t.plannedDesignedId]);
  a.useEffect(() => {
    d();
  }, [d]);
  const D = [
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
    $ = (n, s) => {
      A(s);
    },
    [B, Q] = a.useState('');
  console.log('pcs', B);
  const c = async (n) => {
      const { name: s, value: i } = n.target;
      if (s === 'collectionId') {
        const u = b.find((Y) => Y.collectionId === parseInt(i));
        Q(u.poPcs), r({ ...t, collectionId: i, poPcs: u ? u.poPcs : '' });
      } else
        r(
          s === 'designId'
            ? { ...t, designId: i, poPcs: B, plannedDesignedId: i }
            : { ...t, [s]: i }
        );
    },
    X = async () => {
      try {
        const n = await g.post(
          'https://gecxc.com:449/api/PrePlanning/SavePrePlanningHeader',
          t
        );
        C('Planning Batch saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          r({ ...t, designId: '', poPcs: '', batchNo: '' }),
          await I(),
          await d();
      } catch (n) {
        console.error('Error saving data:', n),
          C('Planning Batch not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
  return (
    a.useEffect(() => {
      (async () => {
        if (t.collectionId)
          try {
            const s = await g.get(
              `https://gecxc.com:449/api/DesignRegistration/GetDesignListByCollectionId?CollectionId=${t.collectionId}`
            );
            F(s.data.result);
          } catch (s) {
            console.error('Error fetching design options:', s);
          }
      })();
    }, [t.collectionId]),
    a.useEffect(() => {
      (async () => {
        try {
          const s = await g.get(
            'https://gecxc.com:449/api/PrePlanning/GetCollectionListFromPlanningHeader'
          );
          O(s.data.result);
        } catch (s) {
          console.error('Error fetching planned collections:', s);
        }
      })();
    }, []),
    a.useEffect(() => {
      (async () => {
        if (t.plannedCollectionId)
          try {
            const s = await g.get(
              `https://gecxc.com:449/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${t.plannedCollectionId}`
            );
            W(s.data.result);
          } catch (s) {
            console.error('Error fetching planned designs:', s);
          }
      })();
    }, [t.plannedCollectionId]),
    console.log('formdata', t),
    console.log('InitialData', l),
    e.jsx(J, {
      style: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      },
      children: e.jsx(S, {
        sx: { width: '100%', typography: 'body1' },
        children: e.jsxs(ne, {
          value: z,
          children: [
            e.jsx(S, {
              sx: { borderBottom: 1, borderColor: 'divider' },
              children: e.jsxs(te, {
                onChange: $,
                'aria-label': 'lab API tabs example',
                children: [
                  e.jsx(L, {
                    icon: e.jsx(Z, {}),
                    label: 'Add Collection',
                    value: '1',
                    sx: (n) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${n.palette.primary.main} !important`
                      }
                    })
                  }),
                  e.jsx(L, {
                    icon: e.jsx(ee, {}),
                    label: 'Search Collection',
                    value: '2',
                    sx: (n) => ({
                      '& .MuiTouchRipple-child': {
                        backgroundColor: `${n.palette.primary.main} !important`
                      }
                    })
                  })
                ]
              })
            }),
            e.jsx(T, {
              value: '1',
              children: e.jsxs(H, {
                variant: 'outlined',
                children: [
                  e.jsx(N, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Create Batch Planning',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsxs(o, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(p, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Collection',
                          name: 'collectionId',
                          value: t.collectionId,
                          onChange: c,
                          size: 'small',
                          InputLabelProps: { sx: { color: 'black' } },
                          children: b.map((n) =>
                            e.jsx(
                              h,
                              {
                                value: n.collectionId,
                                children: n.collectionName
                              },
                              n.collectionId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(p, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Design',
                          name: 'designId',
                          value: t.designId,
                          onChange: c,
                          size: 'small',
                          InputLabelProps: { sx: { color: 'black' } },
                          children: E.map((n) =>
                            e.jsx(
                              h,
                              { value: n.designId, children: n.designNo },
                              n.designId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(p, {
                          label: 'Po PCs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          value: t.poPcs,
                          onChange: c,
                          sx: (n) => ({
                            ...(t.poPcs !== '' && {
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
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 12,
                        textAlign: 'right',
                        sx: { marginBottom: 2 },
                        children: e.jsx(K, {
                          variant: 'contained',
                          size: 'small',
                          onClick: X,
                          children: 'Save'
                        })
                      }),
                      e.jsx(w, {
                        color: '#cc8587',
                        sx: { height: 2, width: '100%', mt: 2 }
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        paddingTop: 1,
                        children: e.jsx(M, {
                          initialRows: y,
                          iColumns: D,
                          formData: t,
                          deleteApi:
                            'https://gecxc.com:449/api/PrePlanning/DeletePlanningHeaderIdByPlanningId?planningHeaderId=',
                          deleteBy: 'planningHeaderId',
                          fetchData: d,
                          refetch: d,
                          setInitialData: P
                        })
                      })
                    ]
                  })
                ]
              })
            }),
            e.jsx(T, {
              value: '2',
              children: e.jsxs(H, {
                variant: 'outlined',
                children: [
                  e.jsx(N, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Searc Batch Planning',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsxs(o, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(p, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Collection',
                          name: 'plannedCollectionId',
                          value: t.plannedCollectionId,
                          onChange: c,
                          size: 'small',
                          children:
                            j.length > 0
                              ? j.map((n) =>
                                  e.jsx(
                                    h,
                                    {
                                      id: 'ddlCollection',
                                      value: n.collectionId,
                                      children: n.collectionName
                                    },
                                    n.planningHeaderId
                                  )
                                )
                              : e.jsx(h, {
                                  disabled: !0,
                                  children: 'No Collections Available'
                                })
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(p, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Design',
                          name: 'plannedDesignedId',
                          value: t.plannedDesignedId,
                          onChange: c,
                          size: 'small',
                          children: R.map((n) =>
                            e.jsx(
                              h,
                              { value: n.designId, children: n.designNo },
                              n.planningHeaderId
                            )
                          )
                        })
                      }),
                      e.jsx(w, {
                        color: '#cc8587',
                        sx: { height: 2, width: '100%', mt: 2 }
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        paddingTop: 1,
                        children: e.jsx(M, {
                          initialRows: y,
                          iColumns: D,
                          formData: t,
                          fetchData: d,
                          refetch: I,
                          setInitialData: P
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
export { he as default };
