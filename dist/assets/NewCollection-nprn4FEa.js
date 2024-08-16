import {
  u as xe,
  a as ge,
  b as fe,
  c as be,
  j as t,
  M as De,
  B as L,
  C as M,
  d as R,
  G as s,
  D as w,
  T as Ce,
  e as Ie
} from './index-Ck0MIkUq.js';
import { r } from './vendor-BXCbSo2_.js';
import { I as ve, B, a as U } from './axios-CgIVMX8t.js';
import { d as Pe, a as je } from './AddCircle-B9Pz-WR_.js';
import './dayjs.min-DO4_1a-m.js';
import { R as F } from './ReuseableDataGrid-CdgPKZaX.js';
import { d as Se } from './VisibilityOutlined-Ds6HNaPA.js';
import { d as Oe } from './LoopOutlined-0F2z_ats.js';
import { T as ye, a as Te, b as A, c as W } from './TabPanel-CBwhICZn.js';
import { F as Ne, T as i } from './TextField-BujPyVEk.js';
import { M as C } from './Skeleton-DFEmEML1.js';
const Ee = () => {
  const { user: u } = xe(),
    [V, z] = r.useState(!0),
    [a, E] = r.useState([]),
    { data: I, error: ke, refetch: f } = ge(),
    { data: b } = fe(),
    [S, G] = r.useState([]),
    [O, Y] = r.useState([]),
    [h, _] = r.useState({
      searchPlanningDateFrom: '',
      searchPlanningDateTo: ''
    }),
    [$, y] = r.useState(!0);
  r.useEffect(() => {
    const { searchPlanningDateFrom: e, searchPlanningDateTo: o } = h;
    e && o && new Date(o) < new Date(e)
      ? (y(!1),
        m('Date To cannot be earlier than Date From', {
          variant: 'error',
          autoHideDuration: 5e3
        }))
      : y(!0);
  }, [h]);
  const [l, D] = r.useState({
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
    const e = (o) => {
      const n = new Date(o),
        x = n.getFullYear(),
        g = String(n.getMonth() + 1).padStart(2, '0'),
        P = String(n.getDate()).padStart(2, '0');
      return `${x}-${g}-${P}`;
    };
    D({
      collectionId: (a == null ? void 0 : a.collectionId) || 0,
      collectionName: (a == null ? void 0 : a.collectionName) || '',
      brandId: (a == null ? void 0 : a.brandId) || 0,
      seasonId: (a == null ? void 0 : a.seasonId) || '',
      volume: (a == null ? void 0 : a.volume) || '',
      planningDate: a != null && a.planningDate ? e(a.planningDate) : '',
      launchDate: a != null && a.launchDate ? e(a.launchDate) : '',
      isRepeatCollection: (a == null ? void 0 : a.isRepeatCollection) || '',
      noOfDesigns: (a == null ? void 0 : a.noOfDesigns) || '',
      noOfColors: (a == null ? void 0 : a.noOfColors) || '',
      poPcs: (a == null ? void 0 : a.poPcs) || '',
      appId: (a == null ? void 0 : a.appId) || u.appId,
      createdOn: (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
      createdBy: (a == null ? void 0 : a.createdBy) || u.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: u.empId
    });
  }, [a]);
  const [H, q] = r.useState('');
  console.log('formData', l), console.log('lookupData', b);
  const [Q, X] = r.useState('1'),
    { enqueueSnackbar: m } = be(),
    J = (e, o) => {
      X(o);
    },
    [c, v] = r.useState({}),
    [T, K] = r.useState([]);
  r.useEffect(() => {
    if (b) {
      const e = b.result[0];
      G(e.brandList), Y(e.seasonList);
    }
    f();
  }, [b]),
    console.log('brands', S),
    console.log('seasons', O),
    r.useEffect(() => {
      q(l.noOfColors * l.poPcs);
    }, [l.noOfColors, l.poPcs]),
    r.useEffect(() => {
      if (I) {
        const e = I.result.map((o, n) => ({
          ...o,
          id: n + 1,
          planningDate: new Date(o.planningDate),
          launchDate: new Date(o.launchDate)
        }));
        K(e), z(!1);
      }
      f();
    }, [I]);
  const p = T,
    [Z, ee] = r.useState(0),
    [te, ae] = r.useState(0);
  r.useEffect(() => {
    const e = p.reduce((o, n) => o + (n.poPcs ?? 0), 0).toFixed(2);
    ee(parseFloat(e).toLocaleString());
  }, [p]),
    r.useEffect(() => {
      const e = p
        .reduce(
          (o, n) => o + (Number(n.poPcs) || 0) * (Number(n.noOfColors) || 0),
          0
        )
        .toFixed(2);
      ae(parseFloat(e).toLocaleString()), console.log('totalPoPcsSum', e);
    }, [p]);
  const oe = [...p, { id: 'TOTAL_SUMMARY', poPcs: Z, totalPoPcs: te }],
    N = [
      {
        field: 'id',
        headerName: 'Sr#',
        colSpan: (e, o) => (o.id === 'TOTAL_SUMMARY' ? 8 : void 0),
        renderCell: (e) =>
          e.row.id === 'TOTAL_SUMMARY'
            ? t.jsx('span', {
                style: { color: 'black', fontWeight: 'bold' },
                children: 'Total Summary'
              })
            : e.value
      },
      { field: 'collectionName', headerName: 'Collection' },
      {
        field: 'brandName',
        headerName: 'Brand',
        renderCell: (e) =>
          t.jsx(Ie, {
            label: e.value,
            sx: { backgroundColor: 'primary.dark', color: 'white' },
            color: void 0
          })
      },
      { field: 'seasonName', headerName: 'Season' },
      { field: 'volume', headerName: 'Volume' },
      {
        field: 'planningDate',
        headerName: 'Planning Date',
        valueGetter: (e) =>
          new Date(e).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      {
        field: 'launchDate',
        headerName: 'Launch Date',
        valueGetter: (e) =>
          new Date(e).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      { field: 'isRepeatCollection', headerName: 'Repeat' },
      { field: 'noOfColors', headerName: 'No. Of Colors' },
      { field: 'noOfDesigns', headerName: 'No Of Designs' },
      {
        field: 'poPcs',
        headerName: ' Po Pcs',
        colSpan: (e, o) => (o.id === 'TOTAL_SUMMARY' ? 0 : void 0),
        valueGetter: (e) => e,
        renderCell: (e) =>
          e.row.id === 'TOTAL_SUMMARY'
            ? t.jsx('span', {
                style: { color: '#a11f23', fontWeight: 'bold' },
                children: e.value
              })
            : e.value
      },
      {
        field: 'totalPoPcs',
        headerName: 'Total Pcs',
        valueGetter: (e, o) => {
          const n = (o == null ? void 0 : o.noOfColors) || 0,
            x = (o == null ? void 0 : o.poPcs) || 0;
          return n * x;
        },
        renderCell: (e) =>
          e.row.id === 'TOTAL_SUMMARY'
            ? t.jsx('span', {
                style: { color: '#a11f23', fontWeight: 'bold' },
                children: e.row.totalPoPcs
              })
            : e.value,
        colSpan: (e, o) => (o.id === 'TOTAL_SUMMARY' ? 2 : void 0)
      }
    ],
    le = [
      { value: 'Volume 1', label: 'Volume 1' },
      { value: 'Volume 2', label: 'Volume 2' },
      { value: 'Volume 3', label: 'Volume 3' },
      { value: 'Volume 4', label: 'Volume 4' },
      { value: 'Volume 5', label: 'Volume 5' }
    ],
    ne = [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ],
    d = (e) => {
      const { name: o, value: n } = e.target;
      D((x) => {
        const g = { ...x, [o]: n };
        if (o === 'planningDate' || o === 'launchDate') {
          const P = new Date(g.planningDate),
            pe = new Date(g.launchDate);
          P > pe
            ? v((j) => ({
                ...j,
                launchDate: 'Launch Date cannot be earlier than Planning Date'
              }))
            : v((j) => ({ ...j, launchDate: '' }));
        }
        return g;
      });
    },
    k = (e) => {
      const { name: o, value: n } = e.target;
      _({ ...h, [o]: n });
    },
    se = () => {
      const e = {};
      return (
        l.collectionName.trim() ||
          (e.collectionName = 'collectionName is required'),
        l.seasonId || (e.seasonId = 'seasonId  is required'),
        l.brandId || (e.brandId = 'brandId  is required'),
        l.planningDate || (e.planningDate = 'planningDate  is required'),
        l.launchDate || (e.launchDate = 'launchDate  is required'),
        l.noOfDesigns || (e.noOfDesigns = 'noOfDesigns  is required'),
        l.noOfColors || (e.noOfColors = 'noOfColors  is required'),
        l.poPcs || (e.poPcs = 'poPcs  is required'),
        e
      );
    },
    re = async () => {
      console.log(l);
      const e = se();
      if (Object.keys(e).length > 0) {
        v(e);
        return;
      }
      if (
        T.some((n) => n.collectionName === l.collectionName) &&
        l.collectionId === 0
      ) {
        m('collection already exists!', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const n = await U.post(
          'http://100.42.177.77:81/api/CollectionRegistration/SaveCollection',
          l
        );
        m('Collection saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Form data saved:', n.data),
          D({
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
          f();
      } catch (n) {
        console.error('Error saving data:', n),
          m('Collection not saved !', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    [ce, ie] = r.useState([]),
    de = async () => {
      try {
        const e = await U.get(
          `http://100.42.177.77:81/api/CollectionRegistration/GetCollectionListByPlanningDate?startDate=${h.searchPlanningDateFrom}&endDate=${h.searchPlanningDateTo}&appId=1`
        );
        m('Collection Search successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Response Data:', e.data),
          ie(e.data.result.map((o, n) => ({ id: n, ...o })));
      } catch (e) {
        console.error('Error saving data:', e),
          m('Collection Search Failed!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    ue = `CollectionList${new Date().toISOString()}`;
  console.log('searchData', h);
  const he =
      'http://100.42.177.77:81/api/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=',
    me = () => {
      D({
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
  return t.jsx(De, {
    style: {
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23',
      width: 'auto',
      maxHeight: { xs: '80vh', md: 'auto' },
      overflow: 'auto'
    },
    children: t.jsx(L, {
      sx: { width: '100%', typography: 'body1' },
      children: t.jsxs(ye, {
        value: Q,
        children: [
          t.jsx(L, {
            sx: { borderBottom: 1, borderColor: 'divider' },
            children: t.jsxs(Te, {
              onChange: J,
              'aria-label': 'lab API tabs example',
              children: [
                t.jsx(A, {
                  icon: t.jsx(Pe, {}),
                  label: 'Add Collection',
                  value: '1',
                  sx: (e) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${e.palette.primary.main} !important`
                    }
                  })
                }),
                t.jsx(A, {
                  icon: t.jsx(je, {}),
                  label: 'Search Collection',
                  value: '2',
                  sx: (e) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${e.palette.primary.main} !important`
                    }
                  })
                })
              ]
            })
          }),
          t.jsxs(W, {
            value: '1',
            children: [
              t.jsx(Ne, {
                children: t.jsxs(M, {
                  variant: 'outlined',
                  children: [
                    t.jsx(R, {
                      className: 'css-4rfrnx-MuiCardHeader-root',
                      title: 'Add Collection ',
                      titleTypographyProps: { style: { color: 'white' } },
                      action: t.jsx(ve, {
                        'aria-label': 'reset',
                        sx: { color: 'white', mt: -2 },
                        onClick: () => me(),
                        children: t.jsx(Oe, {})
                      })
                    }),
                    t.jsxs(s, {
                      container: !0,
                      spacing: 1,
                      width: 'Inherit',
                      sx: { paddingY: 2, paddingX: 2 },
                      children: [
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: '* Season Name',
                            name: 'seasonId',
                            value: l.seasonId,
                            onChange: d,
                            size: 'small',
                            error: !!c.seasonId,
                            helperText: c.seasonId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: O.map((e) =>
                              t.jsx(
                                C,
                                { value: e.lookUpId, children: e.lookUpName },
                                e.lookUpId
                              )
                            )
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Brand Name',
                            name: 'brandId',
                            value: l.brandId,
                            onChange: d,
                            size: 'small',
                            error: !!c.brandId,
                            helperText: c.brandId,
                            InputLabelProps: { sx: { color: 'black' } },
                            children: S.map((e) =>
                              t.jsx(
                                C,
                                { value: e.lookUpId, children: e.lookUpName },
                                e.lookUpId
                              )
                            )
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 6,
                          children: t.jsx(i, {
                            label: '* Collection Name',
                            fullWidth: !0,
                            size: 'small',
                            name: 'collectionName',
                            onChange: d,
                            value: l.collectionName,
                            error: !!c.collectionName,
                            helperText: c.collectionName,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Volume',
                            name: 'volume',
                            value: l.volume,
                            onChange: d,
                            size: 'small',
                            InputLabelProps: { sx: { color: 'black' } },
                            children: le.map((e) =>
                              t.jsx(
                                C,
                                { value: e.value, children: e.label },
                                e.value
                              )
                            )
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            size: 'small',
                            type: 'date',
                            label: 'Planning Date',
                            name: 'planningDate',
                            value: l.planningDate,
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
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            size: 'small',
                            type: 'date',
                            label: 'Launch Date',
                            name: 'launchDate',
                            value: l.launchDate,
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
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            fullWidth: !0,
                            select: !0,
                            label: 'Repeat Collection?',
                            name: 'isRepeatCollection',
                            defaultValue: 'No',
                            value: l.isRepeatCollection,
                            onChange: d,
                            size: 'small',
                            InputLabelProps: { sx: { color: 'black' } },
                            children: ne.map((e) =>
                              t.jsx(
                                C,
                                { value: e.value, children: e.label },
                                e.value
                              )
                            )
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            label: 'No. of Colors/Articles',
                            fullWidth: !0,
                            size: 'small',
                            name: 'noOfColors',
                            type: 'number',
                            onChange: d,
                            value: l.noOfColors,
                            error: !!c.noOfColors,
                            helperText: c.noOfColors,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            label: 'No. of Designs',
                            fullWidth: !0,
                            size: 'small',
                            name: 'noOfDesigns',
                            type: 'number',
                            onChange: d,
                            value: l.noOfDesigns,
                            error: !!c.noOfDesigns,
                            helperText: c.noOfDesigns,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            label: 'Po. Pieces',
                            fullWidth: !0,
                            size: 'small',
                            name: 'poPcs',
                            type: 'number',
                            onChange: d,
                            value: l.poPcs,
                            error: !!c.poPcs,
                            helperText: c.poPcs,
                            InputLabelProps: { sx: { color: 'black' } }
                          })
                        }),
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          md: 3,
                          children: t.jsx(i, {
                            label: 'Total Pieces',
                            fullWidth: !0,
                            size: 'small',
                            name: 'totalPcs',
                            type: 'number',
                            value: H,
                            disabled: !0,
                            sx: (e) => ({
                              ...(l.totalPcs !== '' && {
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
                        t.jsx(s, {
                          item: !0,
                          xs: 12,
                          textAlign: 'right',
                          sx: { mt: 2 },
                          children: t.jsx(B, {
                            variant: 'contained',
                            size: 'small',
                            onClick: re,
                            children: 'Save'
                          })
                        })
                      ]
                    }),
                    ' '
                  ]
                })
              }),
              t.jsx(w, {
                color: '#cc8587',
                sx: { height: 1, width: '100%', mt: 2 }
              }),
              t.jsxs(M, {
                variant: 'outlined',
                children: [
                  t.jsx(R, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    avatar: t.jsx(Se, {}),
                    title: 'View Collections ',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  t.jsx(s, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: t.jsx(s, {
                      item: !0,
                      xs: 12,
                      children: t.jsx(F, {
                        initialRows: oe,
                        iColumns: N,
                        setInitialData: E,
                        formData: l,
                        deleteApi: he,
                        deleteBy: 'collectionId',
                        refetch: f,
                        fileName: ue,
                        isLoading: V
                      })
                    })
                  }),
                  ' '
                ]
              })
            ]
          }),
          t.jsxs(W, {
            value: '2',
            children: [
              t.jsxs(s, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                children: [
                  t.jsx(s, {
                    item: !0,
                    xs: 9,
                    md: 9,
                    children: t.jsx(Ce, {
                      variant: 'h3',
                      gutterBottom: !0,
                      children: 'Search Collection'
                    })
                  }),
                  t.jsx(s, {
                    item: !0,
                    xs: 3,
                    textAlign: 'right',
                    children: t.jsx(B, {
                      variant: 'contained',
                      size: 'small',
                      onClick: de,
                      disabled: !$,
                      children: 'Search'
                    })
                  }),
                  t.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: t.jsx(i, {
                      size: 'small',
                      type: 'date',
                      label: 'Date From',
                      name: 'searchPlanningDateFrom',
                      value: h.searchPlanningDateFrom,
                      onChange: k,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  t.jsx(s, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: t.jsx(i, {
                      size: 'small',
                      type: 'date',
                      label: 'Date to',
                      name: 'searchPlanningDateTo',
                      value: h.searchPlanningDateTo,
                      onChange: k,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  t.jsx(s, {
                    item: !0,
                    sm: 12,
                    children: t.jsx(w, {
                      color: '#cc8587',
                      sx: { height: 2, width: '100%' }
                    })
                  })
                ]
              }),
              t.jsx(s, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                paddingTop: 2,
                children: t.jsx(s, {
                  item: !0,
                  xs: 12,
                  children: t.jsx(F, {
                    initialRows: ce,
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
export { Ee as default };
