import {
  L as H,
  N,
  a3 as L,
  Q as _,
  s as B,
  T as g,
  a4 as I,
  _ as v,
  V as z,
  W as q,
  a5 as G,
  Z as Q,
  j as e,
  $ as O,
  a0 as Z,
  a6 as J,
  M as K,
  B as j,
  u as X,
  a7 as Y,
  a8 as T,
  a9 as ee,
  c as te,
  aa as ne,
  ab as P,
  G as r,
  ac as se,
  ad as re
} from './index-a8gvI6HS.js';
import { r as d } from './vendor-BXCbSo2_.js';
import { b as oe, I as ae, B as ie, a as le } from './axios-BAxkGnGK.js';
import { T as S } from './TextField-CsNxJIZ0.js';
function ce(n) {
  return N('MuiLink', n);
}
const ue = H('MuiLink', [
    'root',
    'underlineNone',
    'underlineHover',
    'underlineAlways',
    'button',
    'focusVisible'
  ]),
  M = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  de = (n) => M[n] || n,
  me = ({ theme: n, ownerState: t }) => {
    const s = de(t.color),
      a = L(n, `palette.${s}`, !1) || t.color,
      i = L(n, `palette.${s}Channel`);
    return 'vars' in n && i ? `rgba(${i} / 0.4)` : _(a, 0.4);
  },
  pe = [
    'className',
    'color',
    'component',
    'onBlur',
    'onFocus',
    'TypographyClasses',
    'underline',
    'variant',
    'sx'
  ],
  he = (n) => {
    const { classes: t, component: s, focusVisible: a, underline: i } = n,
      l = {
        root: [
          'root',
          `underline${I(i)}`,
          s === 'button' && 'button',
          a && 'focusVisible'
        ]
      };
    return Z(l, ce, t);
  },
  xe = B(g, {
    name: 'MuiLink',
    slot: 'Root',
    overridesResolver: (n, t) => {
      const { ownerState: s } = n;
      return [
        t.root,
        t[`underline${I(s.underline)}`],
        s.component === 'button' && t.button
      ];
    }
  })(({ theme: n, ownerState: t }) =>
    v(
      {},
      t.underline === 'none' && { textDecoration: 'none' },
      t.underline === 'hover' && {
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' }
      },
      t.underline === 'always' &&
        v(
          { textDecoration: 'underline' },
          t.color !== 'inherit' && {
            textDecorationColor: me({ theme: n, ownerState: t })
          },
          { '&:hover': { textDecorationColor: 'inherit' } }
        ),
      t.component === 'button' && {
        position: 'relative',
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        '&::-moz-focus-inner': { borderStyle: 'none' },
        [`&.${ue.focusVisible}`]: { outline: 'auto' }
      }
    )
  ),
  V = d.forwardRef(function (t, s) {
    const a = z({ props: t, name: 'MuiLink' }),
      {
        className: i,
        color: l = 'primary',
        component: m = 'a',
        onBlur: p,
        onFocus: b,
        TypographyClasses: c,
        underline: C = 'always',
        variant: h = 'inherit',
        sx: x
      } = a,
      w = q(a, pe),
      { isFocusVisibleRef: y, onBlur: u, onFocus: o, ref: k } = G(),
      [A, D] = d.useState(!1),
      W = Q(s, k),
      E = (f) => {
        u(f), y.current === !1 && D(!1), p && p(f);
      },
      U = (f) => {
        o(f), y.current === !0 && D(!0), b && b(f);
      },
      F = v({}, a, {
        color: l,
        component: m,
        focusVisible: A,
        underline: C,
        variant: h
      }),
      $ = he(F);
    return e.jsx(
      xe,
      v(
        {
          color: l,
          className: O($.root, i),
          classes: c,
          component: m,
          onBlur: E,
          onFocus: U,
          ref: W,
          ownerState: F,
          variant: h,
          sx: [
            ...(Object.keys(M).includes(l) ? [] : [{ color: l }]),
            ...(Array.isArray(x) ? x : [x])
          ]
        },
        w
      )
    );
  }),
  fe = B('div')(({ theme: n }) => ({
    backgroundColor: n.palette.primary.light,
    minHeight: '100vh'
  })),
  R = ({ children: n, ...t }) =>
    e.jsx(K, {
      sx: {
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': { flexGrow: 1, flexBasis: '50%' }
      },
      content: !1,
      ...t,
      children: e.jsx(j, { sx: { p: { xs: 2, sm: 3, xl: 5 } }, children: n })
    });
R.propTypes = { children: J.node };
const ge = ({ ...n }) => {
    const { setUser: t } = X(),
      s = Y();
    T(s.breakpoints.down('md')), d.useState(!0);
    const [a, i] = d.useState(''),
      l = ee(),
      { enqueueSnackbar: m } = te(),
      [p, b] = d.useState(!1),
      [c, C] = d.useState({ username: '', password: '' }),
      h = (u) => {
        C({ ...c, [u.target.name]: u.target.value });
      },
      x = async (u) => {
        u.preventDefault(), console.log('Submitting form with values:', c);
        try {
          const o = await le.post(
            'http://100.42.177.77:81/api/Users/authenticate',
            { username: c.username, password: c.password }
          );
          if (
            (m('Login successful!', {
              variant: 'success',
              autoHideDuration: 5e3
            }),
            console.log('Full response:', o),
            o.data)
          ) {
            const { token: k, empId: A } = o.data;
            localStorage.setItem('authToken', k),
              localStorage.setItem('empId', A),
              t(o.data),
              l('/dashboard'),
              console.log('Authentication successful', o.data);
          } else throw new Error('No data in response');
        } catch (o) {
          console.error('Authentication failed', o.response.data),
            i('Authentication failed. Please check your credentials.'),
            m('Login Failed!', { variant: 'error', autoHideDuration: 5e3 });
        }
      },
      w = () => {
        b(!p);
      },
      y = (u) => {
        u.preventDefault();
      };
    return e.jsx(j, {
      sx: {
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: e.jsxs(j, {
        component: 'form',
        noValidate: !0,
        sx: { mt: 1 },
        onSubmit: x,
        children: [
          e.jsx(S, {
            margin: 'normal',
            required: !0,
            fullWidth: !0,
            id: 'username',
            label: 'Username',
            name: 'username',
            autoComplete: 'username',
            autoFocus: !0,
            value: c.username,
            onChange: h
          }),
          e.jsx(S, {
            margin: 'normal',
            required: !0,
            fullWidth: !0,
            name: 'password',
            label: 'Password',
            type: p ? 'text' : 'password',
            id: 'password',
            autoComplete: 'current-password',
            value: c.password,
            onChange: h,
            InputProps: {
              endAdornment: e.jsx(oe, {
                position: 'end',
                children: e.jsx(ae, {
                  'aria-label': 'toggle password visibility',
                  onClick: w,
                  onMouseDown: y
                })
              })
            }
          }),
          e.jsx(j, {
            sx: { mt: 2 },
            children: e.jsx(ne, {
              children: e.jsx(ie, {
                sx: { borderRadius: 10 },
                disableElevation: !0,
                fullWidth: !0,
                type: 'submit',
                variant: 'contained',
                color: 'error',
                children: 'Sign in'
              })
            })
          })
        ]
      })
    });
  },
  be = () =>
    e.jsxs(P, {
      direction: 'row',
      justifyContent: 'space-between',
      children: [
        e.jsx(g, {
          variant: 'subtitle2',
          component: V,
          href: 'https://berrydashboard.io',
          target: '_blank',
          underline: 'hover',
          children: 'Elaf'
        }),
        e.jsx(g, {
          variant: 'subtitle2',
          component: V,
          href: 'https://codedthemes.com',
          target: '_blank',
          underline: 'hover',
          children: '© Premium'
        })
      ]
    }),
  we = () => {
    const n = T((t) => t.breakpoints.down('md'));
    return e.jsx(fe, {
      children: e.jsxs(r, {
        container: !0,
        direction: 'column',
        justifyContent: 'flex-end',
        sx: { minHeight: '100vh' },
        children: [
          e.jsx(r, {
            item: !0,
            xs: 12,
            children: e.jsx(r, {
              container: !0,
              justifyContent: 'center',
              alignItems: 'center',
              sx: { minHeight: 'calc(100vh - 68px)' },
              children: e.jsx(r, {
                item: !0,
                sx: { m: { xs: 1, sm: 3 }, mb: 0 },
                children: e.jsx(R, {
                  children: e.jsxs(r, {
                    container: !0,
                    spacing: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    children: [
                      e.jsx(r, {
                        item: !0,
                        sx: { mb: 1 },
                        children: e.jsx(se, {
                          to: '#',
                          'aria-label': 'logo',
                          children: e.jsx(re, {})
                        })
                      }),
                      e.jsx(r, {
                        item: !0,
                        xs: 12,
                        children: e.jsx(r, {
                          container: !0,
                          direction: { xs: 'column-reverse', md: 'row' },
                          alignItems: 'center',
                          justifyContent: 'center',
                          children: e.jsx(r, {
                            item: !0,
                            children: e.jsxs(P, {
                              alignItems: 'center',
                              justifyContent: 'center',
                              spacing: 1,
                              children: [
                                e.jsx(g, {
                                  color: 'error',
                                  gutterBottom: !0,
                                  variant: n ? 'h3' : 'h2',
                                  children: 'Welcome to ELAF'
                                }),
                                e.jsx(g, {
                                  color: 'grey[600]',
                                  variant: 'caption',
                                  fontSize: '16px',
                                  textAlign: { xs: 'center', md: 'inherit' },
                                  children: 'Enter your credentials to continue'
                                }),
                                e.jsx(ge, {})
                              ]
                            })
                          })
                        })
                      })
                    ]
                  })
                })
              })
            })
          }),
          e.jsx(r, {
            item: !0,
            xs: 6,
            sx: { m: 3, mt: 1 },
            children: e.jsx(be, {})
          })
        ]
      })
    });
  };
export { we as default };
