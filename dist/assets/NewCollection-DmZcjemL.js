import {
  u as de,
  a as ue,
  b as me,
  c as he,
  j as e,
  M as pe,
  B as w,
  C as L,
  d as T,
  G as l,
  D as B,
  T as xe
} from './index-C7VmP1sn.js';
import { r } from './vendor-BXCbSo2_.js';
import { I as ge, B as R, a as M } from './axios-sajpI7HX.js';
import { d as fe, a as be } from './AddCircle-BE525nno.js';
import './dayjs.min-DO4_1a-m.js';
import './ExcelExport-DggV9N9r.js';
import { d as De, R as F } from './ReuseableDataGrid-D6nBr4pK.js';
import { d as Ie } from './LoopOutlined-CvBfNFYZ.js';
import { T as Ce, a as ve, b as V, c as U } from './TabPanel-BEdfmz8f.js';
import { F as je, T as i } from './TextField-47SmC6NA.js';
import { M as b } from './Skeleton-BTBpQPPV.js';
const Fe = () => {
  const { user: u } = de(),
    [W, z] = r.useState(!0),
    [t, E] = r.useState([]),
    { data: D, error: Pe, refetch: x } = ue(),
    { data: g } = me(),
    [P, $] = r.useState([]),
    [O, G] = r.useState([]),
    [m, H] = r.useState({
      searchPlanningDateFrom: '',
      searchPlanningDateTo: ''
    }),
    [q, S] = r.useState(!0);
  r.useEffect(() => {
    const { searchPlanningDateFrom: a, searchPlanningDateTo: n } = m;
    a && n && new Date(n) < new Date(a)
      ? (S(!1),
        h('Date To cannot be earlier than Date From', {
          variant: 'error',
          autoHideDuration: 5e3
        }))
      : S(!0);
  }, [m]);
  const [o, f] = r.useState({
    collectionId: 0,
    collectionName: '',
    brandId: '',
    seasonId: '',
    volume: '',
    planningDate: '',
    launchDate: '',
    isRepeatCollection: 'No',
    noOfDesigns: '',
    noOfColors: '',
    poPcs: '',
    appId: 1,
    createdBy: u.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: u.empId,
    lastUpdatedOn: new Date().toISOString()
  });
  r.useEffect(() => {
    const a = (n) => {
      const s = new Date(n),
        C = s.getFullYear(),
        p = String(s.getMonth() + 1).padStart(2, '0'),
        v = String(s.getDate()).padStart(2, '0');
      return `${C}-${p}-${v}`;
    };
    f({
      collectionId: (t == null ? void 0 : t.collectionId) || 0,
      collectionName: (t == null ? void 0 : t.collectionName) || '',
      brandId: (t == null ? void 0 : t.brandId) || 0,
      seasonId: (t == null ? void 0 : t.seasonId) || '',
      volume: (t == null ? void 0 : t.volume) || '',
      planningDate: t != null && t.planningDate ? a(t.planningDate) : '',
      launchDate: t != null && t.launchDate ? a(t.launchDate) : '',
      isRepeatCollection: (t == null ? void 0 : t.isRepeatCollection) || '',
      noOfDesigns: (t == null ? void 0 : t.noOfDesigns) || '',
      noOfColors: (t == null ? void 0 : t.noOfColors) || '',
      poPcs: (t == null ? void 0 : t.poPcs) || '',
      appId: (t == null ? void 0 : t.appId) || u.appId,
      createdOn: (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
      createdBy: (t == null ? void 0 : t.createdBy) || u.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: u.empId
    });
  }, [t]);
  const [A, Y] = r.useState('');
  console.log('formData', o), console.log('lookupData', g);
  const [_, Q] = r.useState('1'),
    { enqueueSnackbar: h } = he(),
    X = (a, n) => {
      Q(n);
    },
    [c, I] = r.useState({}),
    [y, J] = r.useState([]);
  r.useEffect(() => {
    if (g) {
      const a = g.result[0];
      $(a.brandList), G(a.seasonList);
    }
    x();
  }, [g]),
    console.log('brands', P),
    console.log('seasons', O),
    r.useEffect(() => {
      Y(o.noOfColors * o.poPcs);
    }, [o.noOfColors, o.poPcs]),
    r.useEffect(() => {
      if (D) {
        const a = D.result.map((n, s) => ({
          ...n,
          id: s + 1,
          planningDate: new Date(n.planningDate),
          launchDate: new Date(n.launchDate)
        }));
        J(a), z(!1);
      }
      x();
    }, [D]);
  const K = y,
    N = [
      { field: 'collectionName', headerName: 'Collection' },
      { field: 'brandName', headerName: 'Brand' },
      { field: 'seasonName', headerName: 'Season' },
      { field: 'volume', headerName: 'Volume' },
      {
        field: 'planningDate',
        headerName: 'Planning Date',
        valueGetter: (a) =>
          new Date(a).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      {
        field: 'launchDate',
        headerName: 'Launch Date',
        valueGetter: (a) =>
          new Date(a).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      { field: 'isRepeatCollection', headerName: 'Repeat' },
      { field: 'noOfColors', headerName: 'No. Of Colors' },
      { field: 'noOfDesigns', headerName: 'No Of Designs' },
      { field: 'poPcs', headerName: 'Po Pcs' }
    ],
    Z = [
      { value: 'Volume 1', label: 'Volume 1' },
      { value: 'Volume 2', label: 'Volume 2' },
      { value: 'Volume 3', label: 'Volume 3' },
      { value: 'Volume 4', label: 'Volume 4' },
      { value: 'Volume 5', label: 'Volume 5' }
    ],
    ee = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ],
    d = (a) => {
      const { name: n, value: s } = a.target;
      f((C) => {
        const p = { ...C, [n]: s };
        if (n === 'planningDate' || n === 'launchDate') {
          const v = new Date(p.planningDate),
            ie = new Date(p.launchDate);
          v > ie
            ? I((j) => ({
                ...j,
                launchDate: 'Launch Date cannot be earlier than Planning Date'
              }))
            : I((j) => ({ ...j, launchDate: '' }));
        }
        return p;
      });
    },
    k = (a) => {
      const { name: n, value: s } = a.target;
      H({ ...m, [n]: s });
    },
    ae = () => {
      const a = {};
      return (
        o.collectionName.trim() ||
          (a.collectionName = 'collectionName is required'),
        o.seasonId || (a.seasonId = 'seasonId  is required'),
        o.brandId || (a.brandId = 'brandId  is required'),
        o.planningDate || (a.planningDate = 'planningDate  is required'),
        o.launchDate || (a.launchDate = 'launchDate  is required'),
        o.noOfDesigns || (a.noOfDesigns = 'noOfDesigns  is required'),
        o.noOfColors || (a.noOfColors = 'noOfColors  is required'),
        o.poPcs || (a.poPcs = 'poPcs  is required'),
        a
      );
    },
    te = async () => {
      console.log(o);
      const a = ae();
      if (Object.keys(a).length > 0) {
        I(a);
        return;
      }
      if (
        y.some((s) => s.collectionName === o.collectionName) &&
        o.collectionId === 0
      ) {
        h('collection already exists!', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const s = await M.post(
          'https://gecxc.com:4041/api/CollectionRegistration/SaveCollection',
          o
        );
        h('Collection saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Form data saved:', s.data),
          f({
            collectionId: 0,
            collectionName: '',
            brandId: '',
            seasonId: '',
            volume: '',
            planningDate: '',
            launchDate: '',
            isRepeatCollection: '',
            noOfDesigns: '',
            noOfColors: '',
            poPcs: '',
            createdOn: new Date().toISOString(),
            createdBy: u.empId,
            lastUpdatedOn: new Date().toISOString(),
            lastUpdatedBy: u.empId
          }),
          x();
      } catch (s) {
        console.error('Error saving data:', s),
          h('Collection not saved !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    [oe, le] = r.useState([]),
    ne = async () => {
      try {
        const a = await M.get(
          `https://gecxc.com:4041/api/CollectionRegistration/GetCollectionListByPlanningDate?startDate=${m.searchPlanningDateFrom}&endDate=${m.searchPlanningDateTo}&appId=1`
        );
        h('Collection Search successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Response Data:', a.data),
          le(a.data.result.map((n, s) => ({ id: s, ...n })));
      } catch (a) {
        console.error('Error saving data:', a),
          h('Collection Search Failed!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    se = `CollectionList${new Date().toISOString()}`;
  console.log('searchData', m);
  const re =
      'https://gecxc.com:4041/api/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=',
    ce = () => {
      f({
        collectionId: 0,
        collectionName: '',
        brandId: '',
        seasonId: '',
        volume: '',
        planningDate: '',
        launchDate: '',
        isRepeatCollection: '',
        noOfDesigns: '',
        noOfColors: '',
        poPcs: '',
        createdOn: new Date().toISOString(),
        createdBy: u.empId,
        lastUpdatedOn: new Date().toISOString(),
        lastUpdatedBy: u.empId
      });
    };
  return e.jsx(pe, {
    style: {
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23',
      width: 'auto',
      maxHeight: { xs: '80vh', md: 'auto' },
      overflow: 'auto'
    },
    children: e.jsx(w, {
      sx: { width: '100%', typography: 'body1' },
      children: e.jsxs(Ce, {
        value: _,
        children: [
          e.jsx(w, {
            sx: { borderBottom: 1, borderColor: 'divider' },
            children: e.jsxs(ve, {
              onChange: X,
              'aria-label': 'lab API tabs example',
              children: [
                e.jsx(V, {
                  icon: e.jsx(fe, {}),
                  label: 'Add Collection',
                  value: '1',
                  sx: (a) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${a.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(V, {
                  icon: e.jsx(be, {}),
                  label: 'Search Collection',
                  value: '2',
                  sx: (a) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${a.palette.primary.main} !important`
                    }
                  })
                })
              ]
            })
          }),
          e.jsxs(U, {
            value: '1',
            children: [
              e.jsx(je, {
                children: e.jsxs(L, {
                  variant: 'outlined',
                  children: [
                    e.jsx(T, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Add Collection ',
                      titleTypographyProps: { style: { color: 'white' } },
                      action: e.jsx(ge, {
                        'aria-label': 'reset',
                        sx: { color: 'white', mt: -2 },
                        onClick: () => ce(),
                        children: e.jsx(Ie, {})
                      })
                    }),
                    e.jsxs(l, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: '* Season Name',
                            name: 'seasonId',
                            value: o.seasonId,
                            onChange: d,
                            size: 'small',
                            error: !!c.seasonId,
                            helperText: c.seasonId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: O.map((a) =>
                              e.jsx(
                                b,
                                { value: a.lookUpId, children: a.lookUpName },
                                a.lookUpId
                              )
                            )
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Brand Name',
                            name: 'brandId',
                            value: o.brandId,
                            onChange: d,
                            size: 'small',
                            error: !!c.brandId,
                            helperText: c.brandId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: P.map((a) =>
                              e.jsx(
                                b,
                                { value: a.lookUpId, children: a.lookUpName },
                                a.lookUpId
                              )
                            )
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 6,
                          children: e.jsx(i, {
                            label: '* Collection Name',
                            fullWidth: !0,
                            size: 'small',
                            name: 'collectionName',
                            onChange: d,
                            value: o.collectionName,
                            error: !!c.collectionName,
                            helperText: c.collectionName,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Volume',
                            name: 'volume',
                            value: o.volume,
                            onChange: d,
                            size: 'small',
                            InputLabelProps: { sx: { color: 'black' } },
                            children: Z.map((a) =>
                              e.jsx(
                                b,
                                { value: a.value, children: a.label },
                                a.value
                              )
                            )
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            size: 'small',
                            type: 'date',
                            label: 'Planning Date',
                            name: 'planningDate',
                            value: o.planningDate,
                            onChange: d,
                            fullWidth: !0,
                            error: !!c.planningDate,
                            helperText: c.planningDate,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            size: 'small',
                            type: 'date',
                            label: 'Launch Date',
                            name: 'launchDate',
                            value: o.launchDate,
                            onChange: d,
                            fullWidth: !0,
                            error: !!c.launchDate,
                            helperText: c.launchDate,
                            InputLabelProps: {
                              shrink: !0,
                              sx: { color: 'black' }
                            }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Repeat Collection?',
                            name: 'isRepeatCollection',
                            defaultValue: 'No',
                            value: o.isRepeatCollection,
                            onChange: d,
                            size: 'small',
                            InputLabelProps: { sx: { color: 'black' } },
                            children: ee.map((a) =>
                              e.jsx(
                                b,
                                { value: a.value, children: a.label },
                                a.value
                              )
                            )
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            label: 'No. of Colors/Articles',
                            fullWidth: !0,
                            size: 'small',
                            name: 'noOfColors',
                            type: 'number',
                            onChange: d,
                            value: o.noOfColors,
                            error: !!c.noOfColors,
                            helperText: c.noOfColors,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            label: 'No. of Designs',
                            fullWidth: !0,
                            size: 'small',
                            name: 'noOfDesigns',
                            type: 'number',
                            onChange: d,
                            value: o.noOfDesigns,
                            error: !!c.noOfDesigns,
                            helperText: c.noOfDesigns,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            label: 'Po. Pieces',
                            fullWidth: !0,
                            size: 'small',
                            name: 'poPcs',
                            type: 'number',
                            onChange: d,
                            value: o.poPcs,
                            error: !!c.poPcs,
                            helperText: c.poPcs,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: e.jsx(i, {
                            label: 'Total Pieces',
                            fullWidth: !0,
                            size: 'small',
                            name: 'totalPcs',
                            type: 'number',
                            value: A,
                            disabled: !0,
                            sx: (a) => ({
                              ...(o.totalPcs !== '' && {
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
                        e.jsx(l, {
                          item: !0,
                          xs: 12,
                          textAlign: 'right',
                          sx: { mt: 2 },
                          children: e.jsx(R, {
                            variant: 'contained',
                            size: 'small',
                            onClick: te,
                            children: 'Save'
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                })
              }),
              e.jsx(B, {
                color: '#cc8587',
                sx: { height: 1, width: '100%', mt: 2 }
              }),
              e.jsxs(L, {
                variant: 'outlined',
                children: [
                  e.jsx(T, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    avatar: e.jsx(De, {}),
                    title: 'View Collections ',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsx(l, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: e.jsx(l, {
                      item: !0,
                      xs: 12,
                      children: e.jsx(F, {
                        initialRows: K,
                        iColumns: N,
                        setInitialData: E,
                        formData: o,
                        deleteApi: re,
                        deleteBy: 'collectionId',
                        refetch: x,
                        fileName: se,
                        isLoading: W
                      })
                    })
                  }),
                  ' '
                ]
              })
            ]
          }),
          e.jsxs(U, {
            value: '2',
            children: [
              e.jsxs(l, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                children: [
                  e.jsx(l, {
                    item: !0,
                    xs: 9,
                    md: 9,
                    children: e.jsx(xe, {
                      variant: 'h3',
                      gutterBottom: !0,
                      children: 'Search Collection'
                    })
                  }),
                  e.jsx(l, {
                    item: !0,
                    xs: 3,
                    textAlign: 'right',
                    children: e.jsx(R, {
                      variant: 'contained',
                      size: 'small',
                      onClick: ne,
                      disabled: !q,
                      children: 'Search'
                    })
                  }),
                  e.jsx(l, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: e.jsx(i, {
                      size: 'small',
                      type: 'date',
                      label: 'Date From',
                      name: 'searchPlanningDateFrom',
                      value: m.searchPlanningDateFrom,
                      onChange: k,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(l, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: e.jsx(i, {
                      size: 'small',
                      type: 'date',
                      label: 'Date to',
                      name: 'searchPlanningDateTo',
                      value: m.searchPlanningDateTo,
                      onChange: k,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(l, {
                    item: !0,
                    sm: 12,
                    children: e.jsx(B, {
                      color: '#cc8587',
                      sx: { height: 2, width: '100%' }
                    })
                  })
                ]
              }),
              e.jsx(l, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                paddingTop: 2,
                children: e.jsx(l, {
                  item: !0,
                  xs: 12,
                  children: e.jsx(F, {
                    initialRows: oe,
                    iColumns: N,
                    disableEdit: !0,
                    disableDelete: !0
                  })
                })
              })
            ]
          })
        ]
      })
    })
  });
};
export { Fe as default };
