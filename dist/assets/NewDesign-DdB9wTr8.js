import {
  u as ae,
  a as se,
  f as ne,
  c as oe,
  b as re,
  j as e,
  M as le,
  B as w,
  C as B,
  d as L,
  G as o,
  D as T,
  T as ie
} from './index-Ck0MIkUq.js';
import { r } from './vendor-BXCbSo2_.js';
import { I as de, B as M, a as j } from './axios-CgIVMX8t.js';
import { d as ce, a as ue } from './AddCircle-B9Pz-WR_.js';
import { d as ge } from './LoopOutlined-0F2z_ats.js';
import './dayjs.min-DO4_1a-m.js';
import { R } from './ReuseableDataGrid-CdgPKZaX.js';
import { d as pe } from './VisibilityOutlined-Ds6HNaPA.js';
import { T as me, a as he, b as U, c as F } from './TabPanel-CBwhICZn.js';
import { T as c } from './TextField-BujPyVEk.js';
import { M as S } from './Skeleton-DFEmEML1.js';
const ke = () => {
  const { user: i } = ae(),
    [E, z] = r.useState(!0),
    [a, G] = r.useState([]),
    { data: h } = se(),
    [y, W] = r.useState(''),
    { data: x, refetch: I } = ne(y, { skip: !y }),
    { enqueueSnackbar: g } = oe(),
    [f, P] = r.useState([]),
    [$, H] = r.useState([]),
    [C, A] = r.useState([]),
    [V, _] = r.useState('1');
  r.useState(!1);
  const { data: b } = re(),
    Q = (t, s) => {
      _(s);
    };
  r.useEffect(() => {
    if (b) {
      const t = b.result[0];
      A(t.designerList);
    }
  }, [b]),
    console.log('designers', C),
    r.useEffect(() => {
      x && (z(!1), P(x.result.map((t, s) => ({ id: s + 1, ...t }))), I());
    }, [x]),
    r.useEffect(() => {
      (async () => {
        try {
          const l = (
            await j.get(
              ' http://100.42.177.77:81/api/Common/GetLookUpByDomain?lookupDomain=COLOURS'
            )
          ).data.result;
          H(l);
        } catch (s) {
          console.error('Error fetching pre-planning lookup data:', s);
        }
      })();
    }, []);
  const v = (h == null ? void 0 : h.result) || [],
    [d, Y] = r.useState({
      searchPlanningDateFrom: '',
      searchPlanningDateTo: ''
    }),
    [xe, N] = r.useState(!0);
  r.useEffect(() => {
    const { searchPlanningDateFrom: t, searchPlanningDateTo: s } = d;
    t && s && new Date(s) < new Date(t) ? N(!1) : N(!0);
  }, [d]);
  const [n, p] = r.useState({
    designId: 0,
    collectionId: '',
    designNo: '',
    designerName: '',
    designerid: '',
    poPcs: '',
    dateOfPlanning: '',
    colorId: '',
    appId: i.appId,
    createdBy: i.empId,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: i.empId,
    lastUpdatedOn: new Date().toISOString()
  });
  r.useEffect(() => {
    const t = (s) => {
      const l = new Date(s),
        m = l.getFullYear(),
        D = String(l.getMonth() + 1).padStart(2, '0'),
        te = String(l.getDate()).padStart(2, '0');
      return `${m}-${D}-${te}`;
    };
    p({
      designId: (a == null ? void 0 : a.designId) || 0,
      collectionId: (a == null ? void 0 : a.collectionId) || '',
      designNo: (a == null ? void 0 : a.designNo) || 0,
      designerName: (a == null ? void 0 : a.designerName) || '',
      poPcs: (a == null ? void 0 : a.poPcs) || '',
      dateOfPlanning: a != null && a.dateOfPlanning ? t(a.dateOfPlanning) : '',
      colorId: (a == null ? void 0 : a.colorId) || '',
      appId: (a == null ? void 0 : a.appId) || i.appId,
      createdOn: (a == null ? void 0 : a.createdOn) || new Date().toISOString(),
      createdBy: (a == null ? void 0 : a.createdBy) || i.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: i.empId
    });
  }, [a]),
    console.log('initialData', a),
    console.log('formData', n);
  const u = (t) => {
    const { name: s, value: l } = t.target;
    if (s === 'collectionId') {
      const m = v.find((D) => D.collectionId === parseInt(l));
      W(l),
        p({
          ...n,
          collectionId: l,
          poPcs: m ? m.poPcs : '',
          designNo: '',
          designerName: '',
          dateOfPlanning: '',
          colorId: ''
        });
    } else p({ ...n, [s]: l });
  };
  console.log('initialRows', f);
  const k = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'collectionName', headerName: 'Collection Name', editable: !0 },
      { field: 'designNo', headerName: 'Design No' },
      { field: 'designerName', headerName: 'Designer Name' },
      { field: 'poPcs', headerName: 'Po PCs' },
      {
        field: 'dateOfPlanning',
        headerName: 'Date of Planning',
        valueGetter: (t) =>
          new Date(t).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      { field: 'colorName', headerName: 'Color' }
    ],
    O = (t) => {
      const { name: s, value: l } = t.target;
      Y({ ...d, [s]: l });
    },
    X = async () => {
      if (
        (console.log(n),
        f.some((s) => s.designNo === n.designNo) && n.designId === 0)
      ) {
        g('Design number already exists!', {
          variant: 'error',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const s = await j.post(
          'http://100.42.177.77:81/api/DesignRegistration/SaveDesign',
          n
        );
        g('Design saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Form data saved:', s.data),
          p({
            ...n,
            designId: 0,
            designNo: '',
            designerName: '',
            poPcs: '',
            dateOfPlanning: '',
            colorId: '',
            createdOn: new Date().toISOString(),
            createdBy: i.empId,
            lastUpdatedOn: new Date().toISOString(),
            LastUpdatedBy: i.empId
          }),
          I();
      } catch (s) {
        console.error('Error saving data:', s),
          g('Design not saved successfully!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
  console.log('searchData', d);
  const q =
      'http://100.42.177.77:81/api/DesignRegistration/DeleteDesignById?designId=',
    [J, K] = r.useState([]),
    Z = async () => {
      try {
        const t = await j.get(
          `http://100.42.177.77:81/api/DesignRegistration/GetDesignListByDateOfPlanning?appId=1&startDate=${d.searchPlanningDateFrom}&endDate=${d.searchPlanningDateTo}`
        );
        g('Design Search successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Response Data:', t.data),
          K(t.data.result.map((s, l) => ({ id: l, ...s })));
      } catch (t) {
        console.error('Error saving data:', t),
          g('Design Search Failed!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    ee = () => {
      p({
        designId: 0,
        collectionId: '',
        designNo: '',
        designerName: '',
        poPcs: '',
        dateOfPlanning: '',
        colorId: '',
        appId: i.appId,
        createdBy: i.empId,
        createdOn: new Date().toISOString(),
        lastUpdatedBy: i.empId,
        lastUpdatedOn: new Date().toISOString()
      }),
        P([]);
    };
  return e.jsx(le, {
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
      children: e.jsxs(me, {
        value: V,
        children: [
          e.jsx(w, {
            sx: { borderBottom: 1, borderColor: 'divider' },
            children: e.jsxs(he, {
              onChange: Q,
              children: [
                e.jsx(U, {
                  icon: e.jsx(ce, {}),
                  label: 'Add Design',
                  value: '1',
                  sx: (t) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${t.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(U, {
                  icon: e.jsx(ue, {}),
                  label: 'Search Design',
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
          e.jsxs(F, {
            value: '1',
            children: [
              e.jsxs(B, {
                variant: 'outlined',
                children: [
                  e.jsx(L, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Add Design ',
                    titleTypographyProps: { style: { color: 'white' } },
                    action: e.jsx(de, {
                      'aria-label': 'reset',
                      sx: { color: 'white', mt: -2 },
                      onClick: () => ee(),
                      children: e.jsx(ge, {})
                    })
                  }),
                  e.jsxs(o, {
                    container: !0,
                    spacing: 1,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: [
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Select Collection',
                          name: 'collectionId',
                          value: n.collectionId,
                          onChange: u,
                          size: 'small',
                          InputLabelProps: { sx: { color: 'black' } },
                          children: v.map((t) =>
                            e.jsx(
                              S,
                              {
                                value: t.collectionId,
                                children: t.collectionName
                              },
                              t.collectionId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Design No.',
                          name: 'designNo',
                          fullWidth: !0,
                          size: 'small',
                          value: n.designNo,
                          onChange: u,
                          disabled: !n.collectionId,
                          InputLabelProps: { sx: { color: 'black' } }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Designer Name',
                          size: 'small',
                          name: 'designerName',
                          value: n.designerName,
                          onChange: u,
                          disabled: !n.collectionId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: C.map((t) =>
                            e.jsx(
                              S,
                              { value: t.lookUpName, children: t.lookUpName },
                              t.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          size: 'small',
                          type: 'date',
                          label: 'Planning Date',
                          name: 'dateOfPlanning',
                          value: n.dateOfPlanning,
                          onChange: u,
                          fullWidth: !0,
                          InputLabelProps: {
                            shrink: !0,
                            sx: { color: 'black' }
                          }
                        })
                      }),
                      e.jsx(o, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: e.jsx(c, {
                          label: 'Po PCs',
                          fullWidth: !0,
                          size: 'small',
                          name: 'poPcs',
                          type: 'number',
                          value: n.poPcs,
                          disabled: !0,
                          onChange: u,
                          sx: (t) => ({
                            ...(n.poPcs !== '' && {
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
                        md: 4,
                        children: e.jsx(c, {
                          fullWidth: !0,
                          select: !0,
                          label: 'Color',
                          size: 'small',
                          name: 'colorId',
                          value: n.colorId,
                          onChange: u,
                          disabled: !n.collectionId,
                          InputLabelProps: { sx: { color: 'black' } },
                          children: $.map((t) =>
                            e.jsx(
                              S,
                              { value: t.lookUpId, children: t.lookUpName },
                              t.lookUpId
                            )
                          )
                        })
                      }),
                      e.jsxs(o, {
                        item: !0,
                        xs: 12,
                        textAlign: 'right',
                        sx: { mt: 2 },
                        children: [
                          e.jsx(M, {
                            variant: 'contained',
                            size: 'small',
                            onClick: X,
                            children: 'Save'
                          }),
                          ' '
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsx(T, {
                color: '#cc8587',
                sx: { height: 1, width: '100%', mt: 2 }
              }),
              e.jsxs(B, {
                variant: 'outlined',
                children: [
                  e.jsx(L, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    avatar: e.jsx(pe, {}),
                    title: 'View Designs ',
                    titleTypographyProps: { style: { color: 'white' } }
                  }),
                  e.jsx(o, {
                    container: !0,
                    spacing: 2,
                    width: 'Inherit',
                    sx: { paddingY: 2, paddingX: 2 },
                    children: e.jsx(o, {
                      item: !0,
                      xs: 12,
                      md: 12,
                      children: e.jsx(R, {
                        iColumns: k,
                        initialRows: f,
                        setInitialData: G,
                        deleteApi: q,
                        deleteBy: 'designId',
                        refetch: I,
                        fileName: 'DesignList',
                        isLoading: E
                      })
                    })
                  })
                ]
              })
            ]
          }),
          e.jsxs(F, {
            value: '2',
            children: [
              e.jsxs(o, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                children: [
                  e.jsx(o, {
                    item: !0,
                    xs: 9,
                    md: 9,
                    children: e.jsx(ie, {
                      variant: 'h3',
                      gutterBottom: !0,
                      children: 'Search Design'
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 3,
                    textAlign: 'right',
                    children: e.jsx(M, {
                      variant: 'contained',
                      size: 'small',
                      onClick: Z,
                      children: 'Search'
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: e.jsx(c, {
                      size: 'small',
                      type: 'date',
                      label: 'Date From',
                      name: 'searchPlanningDateFrom',
                      value: d.searchPlanningDateFrom,
                      onChange: O,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    children: e.jsx(c, {
                      size: 'small',
                      type: 'date',
                      label: 'Date to',
                      name: 'searchPlanningDateTo',
                      value: d.searchPlanningDateTo,
                      onChange: O,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    sm: 12,
                    children: e.jsx(T, {
                      color: '#cc8587',
                      sx: { height: 2, width: '100%' }
                    })
                  })
                ]
              }),
              e.jsx(o, {
                container: !0,
                spacing: 2,
                width: 'inherit',
                paddingTop: 2,
                children: e.jsx(o, {
                  item: !0,
                  xs: 12,
                  children: e.jsx(R, {
                    initialRows: J,
                    iColumns: k,
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
export { ke as default };
