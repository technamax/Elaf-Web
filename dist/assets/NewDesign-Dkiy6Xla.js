import {
  u as ee,
  a as te,
  e as ae,
  c as se,
  j as e,
  M as ne,
  B as O,
  C as w,
  d as k,
  G as o,
  D as B,
  T as oe
} from './index-C7VmP1sn.js';
import { r } from './vendor-BXCbSo2_.js';
import { I as re, B as L, a as D } from './axios-sajpI7HX.js';
import { d as le, a as ie } from './AddCircle-BE525nno.js';
import { d as de } from './LoopOutlined-CvBfNFYZ.js';
import './dayjs.min-DO4_1a-m.js';
import './ExcelExport-DggV9N9r.js';
import { d as ce, R as T } from './ReuseableDataGrid-D6nBr4pK.js';
import { T as ue, a as ge, b as M, c as R } from './TabPanel-BEdfmz8f.js';
import { T as c } from './TextField-47SmC6NA.js';
import { M as U } from './Skeleton-BTBpQPPV.js';
const Ce = () => {
  const { user: i } = ee(),
    [F, z] = r.useState(!0),
    [t, E] = r.useState([]),
    { data: h } = te(),
    [j, W] = r.useState(''),
    { data: x, refetch: I } = ae(j, { skip: !j }),
    { enqueueSnackbar: g } = se(),
    [f, y] = r.useState([]),
    [$, G] = r.useState([]),
    [H, A] = r.useState('1');
  r.useState(!1);
  const V = (a, s) => {
    A(s);
  };
  r.useEffect(() => {
    x && (z(!1), y(x.result), I());
  }, [x]),
    r.useEffect(() => {
      (async () => {
        try {
          const l = (
            await D.get(
              ' https://gecxc.com:4041/api/Common/GetLookUpByDomain?lookupDomain=COLOURS'
            )
          ).data.result;
          G(l);
        } catch (s) {
          console.error('Error fetching pre-planning lookup data:', s);
        }
      })();
    }, []);
  const P = (h == null ? void 0 : h.result) || [],
    [d, _] = r.useState({
      searchPlanningDateFrom: '',
      searchPlanningDateTo: ''
    }),
    [pe, S] = r.useState(!0);
  r.useEffect(() => {
    const { searchPlanningDateFrom: a, searchPlanningDateTo: s } = d;
    a && s && new Date(s) < new Date(a) ? S(!1) : S(!0);
  }, [d]);
  const [n, p] = r.useState({
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
  });
  r.useEffect(() => {
    const a = (s) => {
      const l = new Date(s),
        m = l.getFullYear(),
        b = String(l.getMonth() + 1).padStart(2, '0'),
        Z = String(l.getDate()).padStart(2, '0');
      return `${m}-${b}-${Z}`;
    };
    p({
      designId: (t == null ? void 0 : t.designId) || 0,
      collectionId: (t == null ? void 0 : t.collectionId) || '',
      designNo: (t == null ? void 0 : t.designNo) || 0,
      designerName: (t == null ? void 0 : t.designerName) || '',
      poPcs: (t == null ? void 0 : t.poPcs) || '',
      dateOfPlanning: t != null && t.dateOfPlanning ? a(t.dateOfPlanning) : '',
      colorId: (t == null ? void 0 : t.colorId) || '',
      appId: (t == null ? void 0 : t.appId) || i.appId,
      createdOn: (t == null ? void 0 : t.createdOn) || new Date().toISOString(),
      createdBy: (t == null ? void 0 : t.createdBy) || i.empId,
      lastUpdatedOn: new Date().toISOString(),
      LastUpdatedBy: i.empId
    });
  }, [t]),
    console.log('initialData', t),
    console.log('formData', n);
  const u = (a) => {
      const { name: s, value: l } = a.target;
      if (s === 'collectionId') {
        const m = P.find((b) => b.collectionId === parseInt(l));
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
    },
    C = f.map((a, s) => ({ id: s + 1, ...a }));
  console.log('initialRows', C);
  const v = [
      { field: 'collectionId', headerName: 'Collection ID', editable: !0 },
      { field: 'designNo', headerName: 'Design No' },
      { field: 'designerName', headerName: 'Designer Name' },
      { field: 'poPcs', headerName: 'Po PCs' },
      {
        field: 'dateOfPlanning',
        headerName: 'Date of Planning',
        valueGetter: (a) =>
          new Date(a).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
          })
      },
      { field: 'colorName', headerName: 'Color' }
    ],
    N = (a) => {
      const { name: s, value: l } = a.target;
      _({ ...d, [s]: l });
    },
    Y = async () => {
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
        const s = await D.post(
          'https://gecxc.com:4041/api/DesignRegistration/SaveDesign',
          n
        );
        g('Design saved successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Form data saved:', s.data),
          y([...f, s.data]),
          p({
            ...n,
            collectionId: '',
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
  const Q =
      'https://gecxc.com:4041/api/DesignRegistration/DeleteDesignById?designId=',
    [X, q] = r.useState([]),
    J = async () => {
      try {
        const a = await D.get(
          `https://gecxc.com:4041/api/DesignRegistration/GetDesignListByDateOfPlanning?appId=1&startDate=${d.searchPlanningDateFrom}&endDate=${d.searchPlanningDateTo}`
        );
        g('Design Search successfully!', {
          variant: 'success',
          autoHideDuration: 5e3
        }),
          console.log('Response Data:', a.data),
          q(a.data.result.map((s, l) => ({ id: l, ...s })));
      } catch (a) {
        console.error('Error saving data:', a),
          g('Design Search Failed!', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    },
    K = () => {
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
      });
    };
  return e.jsx(ne, {
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
      children: e.jsxs(ue, {
        value: H,
        children: [
          e.jsx(O, {
            sx: { borderBottom: 1, borderColor: 'divider' },
            children: e.jsxs(ge, {
              onChange: V,
              children: [
                e.jsx(M, {
                  icon: e.jsx(le, {}),
                  label: 'Add Design',
                  value: '1',
                  sx: (a) => ({
                    '& .MuiTouchRipple-child': {
                      backgroundColor: `${a.palette.primary.main} !important`
                    }
                  })
                }),
                e.jsx(M, {
                  icon: e.jsx(ie, {}),
                  label: 'Search Design',
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
          e.jsxs(R, {
            value: '1',
            children: [
              e.jsxs(w, {
                variant: 'outlined',
                children: [
                  e.jsx(k, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    title: 'Add Design ',
                    titleTypographyProps: { style: { color: 'white' } },
                    action: e.jsx(re, {
                      'aria-label': 'reset',
                      sx: { color: 'white', mt: -2 },
                      onClick: () => K(),
                      children: e.jsx(de, {})
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
                          children: P.map((a) =>
                            e.jsx(
                              U,
                              {
                                value: a.collectionId,
                                children: a.collectionName
                              },
                              a.collectionId
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
                          label: 'Designer Name',
                          fullWidth: !0,
                          size: 'small',
                          name: 'designerName',
                          value: n.designerName,
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
                          sx: (a) => ({
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
                          children: $.map((a) =>
                            e.jsx(
                              U,
                              { value: a.lookUpId, children: a.lookUpName },
                              a.lookUpId
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
                          e.jsx(L, {
                            variant: 'contained',
                            size: 'small',
                            onClick: Y,
                            children: 'Save'
                          }),
                          ' '
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsx(B, {
                color: '#cc8587',
                sx: { height: 1, width: '100%', mt: 2 }
              }),
              e.jsxs(w, {
                variant: 'outlined',
                children: [
                  e.jsx(k, {
                    className: 'css-4rfrnx-MuiCardHeader-root',
                    avatar: e.jsx(ce, {}),
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
                      children: e.jsx(T, {
                        iColumns: v,
                        initialRows: C,
                        setInitialData: E,
                        deleteApi: Q,
                        deleteBy: 'designId',
                        refetch: I,
                        fileName: 'DesignList',
                        isLoading: F
                      })
                    })
                  })
                ]
              })
            ]
          }),
          e.jsxs(R, {
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
                    children: e.jsx(oe, {
                      variant: 'h3',
                      gutterBottom: !0,
                      children: 'Search Design'
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    xs: 3,
                    textAlign: 'right',
                    children: e.jsx(L, {
                      variant: 'contained',
                      size: 'small',
                      onClick: J,
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
                      onChange: N,
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
                      onChange: N,
                      fullWidth: !0,
                      InputLabelProps: { shrink: !0, sx: { color: 'black' } }
                    })
                  }),
                  e.jsx(o, {
                    item: !0,
                    sm: 12,
                    children: e.jsx(B, {
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
                  children: e.jsx(T, {
                    initialRows: X,
                    iColumns: v,
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
export { Ce as default };
