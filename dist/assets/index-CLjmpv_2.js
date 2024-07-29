const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-SIxOXH5x.js',
      'assets/vendor-BXCbSo2_.js',
      'assets/Skeleton-Ceiu9GHN.js',
      'assets/TextField-DG1slWXT.js',
      'assets/NewCollection-BPIGKMqf.js',
      'assets/axios-SrXXOFpt.js',
      'assets/AddCircle-CI1h8bkx.js',
      'assets/dayjs.min-DO4_1a-m.js',
      'assets/ReuseableDataGrid-BmbazgSl.js',
      'assets/VisibilityOutlined-EY3Hfrir.js',
      'assets/LoopOutlined-CqBXh8vt.js',
      'assets/TabPanel-BPtSHQyI.js',
      'assets/NewDesign-COPzwJ8f.js',
      'assets/PlanningProcess-BX0abGFq.js',
      'assets/Fabrication-BEZufaAZ.js',
      'assets/PersonAddAlt1Outlined-DIFSZ7au.js',
      'assets/Roles-DZltLpdR.js',
      'assets/MainMenu-teOchg_6.js',
      'assets/SubMenu-D-A4ZvtL.js',
      'assets/Users-D1_ILS5v.js',
      'assets/PrePlanningCreation-Cp0_awfK.js',
      'assets/index-pu6ueIKI.js',
      'assets/WelcomePage-BO0kIUTU.js',
      'assets/Login3-DpAqR3z5.js'
    ])
) => i.map((i) => d[i]);
var Dw = Object.defineProperty;
var Iw = (e, t, r) =>
  t in e
    ? Dw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var pc = (e, t, r) => Iw(e, typeof t != 'symbol' ? t + '' : t, r);
import {
  r as w,
  a as rd,
  b as ko,
  R as de,
  d as Lw,
  g as Kg,
  e as Dr,
  f as bi,
  c as $w
} from './vendor-BXCbSo2_.js';
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
var Yg = { exports: {} },
  cl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jw = w,
  Bw = Symbol.for('react.element'),
  Nw = Symbol.for('react.fragment'),
  Fw = Object.prototype.hasOwnProperty,
  Vw = jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ww = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) Fw.call(t, n) && !Ww.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Bw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Vw.current
  };
}
cl.Fragment = Nw;
cl.jsx = Gg;
cl.jsxs = Gg;
Yg.exports = cl;
var P = Yg.exports,
  Xg,
  Jf = rd;
(Xg = Jf.createRoot), Jf.hydrateRoot;
function mt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var zw = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  ep = zw,
  hc = () => Math.random().toString(36).substring(7).split('').join('.'),
  Uw = {
    INIT: `@@redux/INIT${hc()}`,
    REPLACE: `@@redux/REPLACE${hc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${hc()}`
  },
  Pa = Uw;
function Or(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Qg(e, t, r) {
  if (typeof e != 'function') throw new Error(mt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(mt(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(mt(1));
    return r(Qg)(e, t);
  }
  let n = e,
    o = t,
    i = new Map(),
    s = i,
    a = 0,
    l = !1;
  function c() {
    s === i &&
      ((s = new Map()),
      i.forEach((v, x) => {
        s.set(x, v);
      }));
  }
  function u() {
    if (l) throw new Error(mt(3));
    return o;
  }
  function f(v) {
    if (typeof v != 'function') throw new Error(mt(4));
    if (l) throw new Error(mt(5));
    let x = !0;
    c();
    const b = a++;
    return (
      s.set(b, v),
      function () {
        if (x) {
          if (l) throw new Error(mt(6));
          (x = !1), c(), s.delete(b), (i = null);
        }
      }
    );
  }
  function d(v) {
    if (!Or(v)) throw new Error(mt(7));
    if (typeof v.type > 'u') throw new Error(mt(8));
    if (typeof v.type != 'string') throw new Error(mt(17));
    if (l) throw new Error(mt(9));
    try {
      (l = !0), (o = n(o, v));
    } finally {
      l = !1;
    }
    return (
      (i = s).forEach((b) => {
        b();
      }),
      v
    );
  }
  function m(v) {
    if (typeof v != 'function') throw new Error(mt(10));
    (n = v), d({ type: Pa.REPLACE });
  }
  function p() {
    const v = f;
    return {
      subscribe(x) {
        if (typeof x != 'object' || x === null) throw new Error(mt(11));
        function b() {
          const y = x;
          y.next && y.next(u());
        }
        return b(), { unsubscribe: v(b) };
      },
      [ep]() {
        return this;
      }
    };
  }
  return (
    d({ type: Pa.INIT }),
    { dispatch: d, subscribe: f, getState: u, replaceReducer: m, [ep]: p }
  );
}
function Hw(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: Pa.INIT }) > 'u') throw new Error(mt(12));
    if (typeof r(void 0, { type: Pa.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(mt(13));
  });
}
function nd(e) {
  const t = Object.keys(e),
    r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == 'function' && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  try {
    Hw(r);
  } catch (i) {
    o = i;
  }
  return function (s = {}, a) {
    if (o) throw o;
    let l = !1;
    const c = {};
    for (let u = 0; u < n.length; u++) {
      const f = n[u],
        d = r[f],
        m = s[f],
        p = d(m, a);
      if (typeof p > 'u') throw (a && a.type, new Error(mt(14)));
      (c[f] = p), (l = l || p !== m);
    }
    return (l = l || n.length !== Object.keys(s).length), l ? c : s;
  };
}
function Ta(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n))
        );
}
function qw(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(mt(15));
    };
    const s = { getState: o.getState, dispatch: (l, ...c) => i(l, ...c) },
      a = e.map((l) => l(s));
    return (i = Ta(...a)(o.dispatch)), { ...o, dispatch: i };
  };
}
function Zg(e) {
  return Or(e) && 'type' in e && typeof e.type == 'string';
}
var od = Symbol.for('immer-nothing'),
  Ti = Symbol.for('immer-draftable'),
  Nt = Symbol.for('immer-state');
function bt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Nn = Object.getPrototypeOf;
function xr(e) {
  return !!e && !!e[Nt];
}
function wr(e) {
  var t;
  return e
    ? Jg(e) ||
        Array.isArray(e) ||
        !!e[Ti] ||
        !!((t = e.constructor) != null && t[Ti]) ||
        ds(e) ||
        fs(e)
    : !1;
}
var Kw = Object.prototype.constructor.toString();
function Jg(e) {
  if (!e || typeof e != 'object') return !1;
  const t = Nn(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === Kw;
}
function Yw(e) {
  return xr(e) || bt(15, e), e[Nt].base_;
}
function Fi(e, t) {
  Fn(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function Fn(e) {
  const t = e[Nt];
  return t ? t.type_ : Array.isArray(e) ? 1 : ds(e) ? 2 : fs(e) ? 3 : 0;
}
function Vi(e, t) {
  return Fn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function mc(e, t) {
  return Fn(e) === 2 ? e.get(t) : e[t];
}
function ev(e, t, r) {
  const n = Fn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Gw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ds(e) {
  return e instanceof Map;
}
function fs(e) {
  return e instanceof Set;
}
function wn(e) {
  return e.copy_ || e.base_;
}
function tu(e, t) {
  if (ds(e)) return new Map(e);
  if (fs(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Jg(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Nt];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const s = o[i],
        a = n[s];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (n[s] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[s]
          });
    }
    return Object.create(Nn(e), n);
  } else {
    const n = Nn(e);
    if (n !== null && r) return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function id(e, t = !1) {
  return (
    ul(e) ||
      xr(e) ||
      !wr(e) ||
      (Fn(e) > 1 && (e.set = e.add = e.clear = e.delete = Xw),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => id(n, !0))),
    e
  );
}
function Xw() {
  bt(2);
}
function ul(e) {
  return Object.isFrozen(e);
}
var ru = {};
function Vn(e) {
  const t = ru[e];
  return t || bt(0, e), t;
}
function Qw(e, t) {
  ru[e] || (ru[e] = t);
}
var Wi;
function tv() {
  return Wi;
}
function Zw(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function tp(e, t) {
  t &&
    (Vn('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function nu(e) {
  ou(e), e.drafts_.forEach(Jw), (e.drafts_ = null);
}
function ou(e) {
  e === Wi && (Wi = e.parent_);
}
function rp(e) {
  return (Wi = Zw(Wi, e));
}
function Jw(e) {
  const t = e[Nt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function np(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[Nt].modified_ && (nu(t), bt(4)),
        wr(e) && ((e = Ra(t, e)), t.parent_ || ka(t, e)),
        t.patches_ &&
          Vn('Patches').generateReplacementPatches_(
            r[Nt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ra(t, r, [])),
    nu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== od ? e : void 0
  );
}
function Ra(e, t, r) {
  if (ul(t)) return t;
  const n = t[Nt];
  if (!n) return Fi(t, (o, i) => op(e, n, t, o, i, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return ka(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o,
      s = !1;
    n.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      Fi(i, (a, l) => op(e, n, o, a, l, r, s)),
      ka(e, o, !1),
      r &&
        e.patches_ &&
        Vn('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function op(e, t, r, n, o, i, s) {
  if (xr(o)) {
    const a =
        i && t && t.type_ !== 3 && !Vi(t.assigned_, n) ? i.concat(n) : void 0,
      l = Ra(e, o, a);
    if ((ev(r, n, l), xr(l))) e.canAutoFreeze_ = !1;
    else return;
  } else s && r.add(o);
  if (wr(o) && !ul(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ra(e, o),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        ka(e, o);
  }
}
function ka(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && id(t, r);
}
function e1(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : tv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    };
  let o = n,
    i = sd;
  r && ((o = [n]), (i = zi));
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return (n.draft_ = a), (n.revoke_ = s), a;
}
var sd = {
    get(e, t) {
      if (t === Nt) return e;
      const r = wn(e);
      if (!Vi(r, t)) return t1(e, r, t);
      const n = r[t];
      return e.finalized_ || !wr(n)
        ? n
        : n === gc(e.base_, t)
          ? (vc(e), (e.copy_[t] = su(n, e)))
          : n;
    },
    has(e, t) {
      return t in wn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(wn(e));
    },
    set(e, t, r) {
      const n = rv(wn(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const o = gc(wn(e), t),
          i = o == null ? void 0 : o[Nt];
        if (i && i.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (Gw(r, o) && (r !== void 0 || Vi(e.base_, t))) return !0;
        vc(e), iu(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        gc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), vc(e), iu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = wn(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t]
        }
      );
    },
    defineProperty() {
      bt(11);
    },
    getPrototypeOf(e) {
      return Nn(e.base_);
    },
    setPrototypeOf() {
      bt(12);
    }
  },
  zi = {};
Fi(sd, (e, t) => {
  zi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
zi.deleteProperty = function (e, t) {
  return zi.set.call(this, e, t, void 0);
};
zi.set = function (e, t, r) {
  return sd.set.call(this, e[0], t, r, e[0]);
};
function gc(e, t) {
  const r = e[Nt];
  return (r ? wn(r) : e)[t];
}
function t1(e, t, r) {
  var o;
  const n = rv(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (o = n.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function rv(e, t) {
  if (!(t in e)) return;
  let r = Nn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Nn(r);
  }
}
function iu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && iu(e.parent_));
}
function vc(e) {
  e.copy_ || (e.copy_ = tu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var r1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const i = r;
          r = t;
          const s = this;
          return function (l = i, ...c) {
            return s.produce(l, (u) => r.call(this, u, ...c));
          };
        }
        typeof r != 'function' && bt(6),
          n !== void 0 && typeof n != 'function' && bt(7);
        let o;
        if (wr(t)) {
          const i = rp(this),
            s = su(t, void 0);
          let a = !0;
          try {
            (o = r(s)), (a = !1);
          } finally {
            a ? nu(i) : ou(i);
          }
          return tp(i, n), np(o, i);
        } else if (!t || typeof t != 'object') {
          if (
            ((o = r(t)),
            o === void 0 && (o = t),
            o === od && (o = void 0),
            this.autoFreeze_ && id(o, !0),
            n)
          ) {
            const i = [],
              s = [];
            Vn('Patches').generateReplacementPatches_(t, o, i, s), n(i, s);
          }
          return o;
        } else bt(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
        let n, o;
        return [
          this.produce(t, r, (s, a) => {
            (n = s), (o = a);
          }),
          n,
          o
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    wr(e) || bt(8), xr(e) && (e = nv(e));
    const t = rp(this),
      r = su(e, void 0);
    return (r[Nt].isManual_ = !0), ou(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Nt];
    (!r || !r.isManual_) && bt(9);
    const { scope_: n } = r;
    return tp(n, t), np(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Vn('Patches').applyPatches_;
    return xr(e) ? n(e, t) : this.produce(e, (o) => n(o, t));
  }
};
function su(e, t) {
  const r = ds(e)
    ? Vn('MapSet').proxyMap_(e, t)
    : fs(e)
      ? Vn('MapSet').proxySet_(e, t)
      : e1(e, t);
  return (t ? t.scope_ : tv()).drafts_.push(r), r;
}
function nv(e) {
  return xr(e) || bt(10, e), ov(e);
}
function ov(e) {
  if (!wr(e) || ul(e)) return e;
  const t = e[Nt];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = tu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = tu(e, !0);
  return (
    Fi(r, (n, o) => {
      ev(r, n, ov(o));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function n1() {
  const t = 'replace',
    r = 'add',
    n = 'remove';
  function o(d, m, p, h) {
    switch (d.type_) {
      case 0:
      case 2:
        return s(d, m, p, h);
      case 1:
        return i(d, m, p, h);
      case 3:
        return a(d, m, p, h);
    }
  }
  function i(d, m, p, h) {
    let { base_: v, assigned_: x } = d,
      b = d.copy_;
    b.length < v.length && (([v, b] = [b, v]), ([p, h] = [h, p]));
    for (let g = 0; g < v.length; g++)
      if (x[g] && b[g] !== v[g]) {
        const y = m.concat([g]);
        p.push({ op: t, path: y, value: f(b[g]) }),
          h.push({ op: t, path: y, value: f(v[g]) });
      }
    for (let g = v.length; g < b.length; g++) {
      const y = m.concat([g]);
      p.push({ op: r, path: y, value: f(b[g]) });
    }
    for (let g = b.length - 1; v.length <= g; --g) {
      const y = m.concat([g]);
      h.push({ op: n, path: y });
    }
  }
  function s(d, m, p, h) {
    const { base_: v, copy_: x } = d;
    Fi(d.assigned_, (b, g) => {
      const y = mc(v, b),
        E = mc(x, b),
        S = g ? (Vi(v, b) ? t : r) : n;
      if (y === E && S === t) return;
      const C = m.concat(b);
      p.push(S === n ? { op: S, path: C } : { op: S, path: C, value: E }),
        h.push(
          S === r
            ? { op: n, path: C }
            : S === n
              ? { op: r, path: C, value: f(y) }
              : { op: t, path: C, value: f(y) }
        );
    });
  }
  function a(d, m, p, h) {
    let { base_: v, copy_: x } = d,
      b = 0;
    v.forEach((g) => {
      if (!x.has(g)) {
        const y = m.concat([b]);
        p.push({ op: n, path: y, value: g }),
          h.unshift({ op: r, path: y, value: g });
      }
      b++;
    }),
      (b = 0),
      x.forEach((g) => {
        if (!v.has(g)) {
          const y = m.concat([b]);
          p.push({ op: r, path: y, value: g }),
            h.unshift({ op: n, path: y, value: g });
        }
        b++;
      });
  }
  function l(d, m, p, h) {
    p.push({ op: t, path: [], value: m === od ? void 0 : m }),
      h.push({ op: t, path: [], value: d });
  }
  function c(d, m) {
    return (
      m.forEach((p) => {
        const { path: h, op: v } = p;
        let x = d;
        for (let E = 0; E < h.length - 1; E++) {
          const S = Fn(x);
          let C = h[E];
          typeof C != 'string' && typeof C != 'number' && (C = '' + C),
            (S === 0 || S === 1) &&
              (C === '__proto__' || C === 'constructor') &&
              bt(19),
            typeof x == 'function' && C === 'prototype' && bt(19),
            (x = mc(x, C)),
            typeof x != 'object' && bt(18, h.join('/'));
        }
        const b = Fn(x),
          g = u(p.value),
          y = h[h.length - 1];
        switch (v) {
          case t:
            switch (b) {
              case 2:
                return x.set(y, g);
              case 3:
                bt(16);
              default:
                return (x[y] = g);
            }
          case r:
            switch (b) {
              case 1:
                return y === '-' ? x.push(g) : x.splice(y, 0, g);
              case 2:
                return x.set(y, g);
              case 3:
                return x.add(g);
              default:
                return (x[y] = g);
            }
          case n:
            switch (b) {
              case 1:
                return x.splice(y, 1);
              case 2:
                return x.delete(y);
              case 3:
                return x.delete(p.value);
              default:
                return delete x[y];
            }
          default:
            bt(17, v);
        }
      }),
      d
    );
  }
  function u(d) {
    if (!wr(d)) return d;
    if (Array.isArray(d)) return d.map(u);
    if (ds(d))
      return new Map(Array.from(d.entries()).map(([p, h]) => [p, u(h)]));
    if (fs(d)) return new Set(Array.from(d).map(u));
    const m = Object.create(Nn(d));
    for (const p in d) m[p] = u(d[p]);
    return Vi(d, Ti) && (m[Ti] = d[Ti]), m;
  }
  function f(d) {
    return xr(d) ? u(d) : d;
  }
  Qw('Patches', {
    applyPatches_: c,
    generatePatches_: o,
    generateReplacementPatches_: l
  });
}
var Zt = new r1(),
  ps = Zt.produce,
  iv = Zt.produceWithPatches.bind(Zt);
Zt.setAutoFreeze.bind(Zt);
Zt.setUseStrictShallowCopy.bind(Zt);
var ip = Zt.applyPatches.bind(Zt);
Zt.createDraft.bind(Zt);
Zt.finishDraft.bind(Zt);
function o1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t);
}
function i1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t);
}
function s1(
  e,
  t = 'expected all items to be functions, instead received the following types: '
) {
  if (!e.every((r) => typeof r == 'function')) {
    const r = e
      .map((n) =>
        typeof n == 'function' ? `function ${n.name || 'unnamed'}()` : typeof n
      )
      .join(', ');
    throw new TypeError(`${t}[${r}]`);
  }
}
var sp = (e) => (Array.isArray(e) ? e : [e]);
function a1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    s1(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  );
}
function l1(e, t) {
  const r = [],
    { length: n } = e;
  for (let o = 0; o < n; o++) r.push(e[o].apply(null, t));
  return r;
}
var c1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  u1 = typeof WeakRef < 'u' ? WeakRef : c1,
  d1 = 0,
  ap = 1;
function Us() {
  return { s: d1, v: void 0, o: null, p: null };
}
function Ui(e, t = {}) {
  let r = Us();
  const { resultEqualityCheck: n } = t;
  let o,
    i = 0;
  function s() {
    var f;
    let a = r;
    const { length: l } = arguments;
    for (let d = 0, m = l; d < m; d++) {
      const p = arguments[d];
      if (typeof p == 'function' || (typeof p == 'object' && p !== null)) {
        let h = a.o;
        h === null && (a.o = h = new WeakMap());
        const v = h.get(p);
        v === void 0 ? ((a = Us()), h.set(p, a)) : (a = v);
      } else {
        let h = a.p;
        h === null && (a.p = h = new Map());
        const v = h.get(p);
        v === void 0 ? ((a = Us()), h.set(p, a)) : (a = v);
      }
    }
    const c = a;
    let u;
    if (a.s === ap) u = a.v;
    else if (((u = e.apply(null, arguments)), i++, n)) {
      const d =
        ((f = o == null ? void 0 : o.deref) == null ? void 0 : f.call(o)) ?? o;
      d != null && n(d, u) && ((u = d), i !== 0 && i--),
        (o =
          (typeof u == 'object' && u !== null) || typeof u == 'function'
            ? new u1(u)
            : u);
    }
    return (c.s = ap), (c.v = u), u;
  }
  return (
    (s.clearCache = () => {
      (r = Us()), s.resetResultsCount();
    }),
    (s.resultsCount = () => i),
    (s.resetResultsCount = () => {
      i = 0;
    }),
    s
  );
}
function sv(e, ...t) {
  const r = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    n = (...o) => {
      let i = 0,
        s = 0,
        a,
        l = {},
        c = o.pop();
      typeof c == 'object' && ((l = c), (c = o.pop())),
        o1(
          c,
          `createSelector expects an output function after the inputs, but received: [${typeof c}]`
        );
      const u = { ...r, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: m = Ui,
          argsMemoizeOptions: p = [],
          devModeChecks: h = {}
        } = u,
        v = sp(d),
        x = sp(p),
        b = a1(o),
        g = f(
          function () {
            return i++, c.apply(null, arguments);
          },
          ...v
        ),
        y = m(
          function () {
            s++;
            const S = l1(b, arguments);
            return (a = g.apply(null, S)), a;
          },
          ...x
        );
      return Object.assign(y, {
        resultFunc: c,
        memoizedResultFunc: g,
        dependencies: b,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: f,
        argsMemoize: m
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var ad = sv(Ui),
  f1 = Object.assign(
    (e, t = ad) => {
      i1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        n = r.map((i) => e[i]);
      return t(n, (...i) => i.reduce((s, a, l) => ((s[r[l]] = a), s), {}));
    },
    { withTypes: () => f1 }
  );
function av(e) {
  return ({ dispatch: r, getState: n }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(r, n, e) : o(i);
}
var p1 = av(),
  h1 = av,
  m1 = (...e) => {
    const t = sv(...e),
      r = Object.assign(
        (...n) => {
          const o = t(...n),
            i = (s, ...a) => o(xr(s) ? nv(s) : s, ...a);
          return Object.assign(i, o), i;
        },
        { withTypes: () => r }
      );
    return r;
  };
m1(Ui);
var g1 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Ta
              : Ta.apply(null, arguments);
        },
  v1 = (e) => e && typeof e.match == 'function';
function _t(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o) throw new Error(Rt(0));
      return {
        type: e,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error })
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Zg(n) && n.type === e),
    r
  );
}
var lv = class xi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, xi.prototype);
  }
  static get [Symbol.species]() {
    return xi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new xi(...t[0].concat(this))
      : new xi(...t.concat(this));
  }
};
function lp(e) {
  return wr(e) ? ps(e, () => {}) : e;
}
function cp(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && ((o = r.update(o, t, e)), e.set(t, o)), o;
  }
  if (!r.insert) throw new Error(Rt(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function y1(e) {
  return typeof e == 'boolean';
}
var b1 = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0
      } = t ?? {};
      let s = new lv();
      return r && (y1(r) ? s.push(p1) : s.push(h1(r.extraArgument))), s;
    },
  mo = 'RTK_autoBatch',
  oi = () => (e) => ({ payload: e, meta: { [mo]: !0 } }),
  cv = (e) => (t) => {
    setTimeout(t, e);
  },
  x1 =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : cv(10),
  w1 =
    (e = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let o = !0,
        i = !1,
        s = !1;
      const a = new Set(),
        l =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? x1
              : e.type === 'callback'
                ? e.queueNotification
                : cv(e.timeout),
        c = () => {
          (s = !1), i && ((i = !1), a.forEach((u) => u()));
        };
      return Object.assign({}, n, {
        subscribe(u) {
          const f = () => o && u(),
            d = n.subscribe(f);
          return (
            a.add(u),
            () => {
              d(), a.delete(u);
            }
          );
        },
        dispatch(u) {
          var f;
          try {
            return (
              (o = !((f = u == null ? void 0 : u.meta) != null && f[mo])),
              (i = !o),
              i && (s || ((s = !0), l(c))),
              n.dispatch(u)
            );
          } finally {
            o = !0;
          }
        }
      });
    },
  S1 = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let o = new lv(e);
      return n && o.push(w1(typeof n == 'object' ? n : void 0)), o;
    },
  E1 = !0;
function C1(e) {
  const t = b1(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0
    } = e || {};
  let a;
  if (typeof r == 'function') a = r;
  else if (Or(r)) a = nd(r);
  else throw new Error(Rt(1));
  let l;
  typeof n == 'function' ? (l = n(t)) : (l = t());
  let c = Ta;
  o && (c = g1({ trace: !E1, ...(typeof o == 'object' && o) }));
  const u = qw(...l),
    f = S1(u);
  let d = typeof s == 'function' ? s(f) : f();
  const m = c(...d);
  return Qg(a, i, m);
}
function uv(e) {
  const t = {},
    r = [];
  let n;
  const o = {
    addCase(i, s) {
      const a = typeof i == 'string' ? i : i.type;
      if (!a) throw new Error(Rt(28));
      if (a in t) throw new Error(Rt(29));
      return (t[a] = s), o;
    },
    addMatcher(i, s) {
      return r.push({ matcher: i, reducer: s }), o;
    },
    addDefaultCase(i) {
      return (n = i), o;
    }
  };
  return e(o), [t, r, n];
}
function P1(e) {
  return typeof e == 'function';
}
function T1(e, t) {
  let [r, n, o] = uv(t),
    i;
  if (P1(e)) i = () => lp(e());
  else {
    const a = lp(e);
    i = () => a;
  }
  function s(a = i(), l) {
    let c = [
      r[l.type],
      ...n.filter(({ matcher: u }) => u(l)).map(({ reducer: u }) => u)
    ];
    return (
      c.filter((u) => !!u).length === 0 && (c = [o]),
      c.reduce((u, f) => {
        if (f)
          if (xr(u)) {
            const m = f(u, l);
            return m === void 0 ? u : m;
          } else {
            if (wr(u)) return ps(u, (d) => f(d, l));
            {
              const d = f(u, l);
              if (d === void 0) {
                if (u === null) return u;
                throw new Error(Rt(9));
              }
              return d;
            }
          }
        return u;
      }, a)
    );
  }
  return (s.getInitialState = i), s;
}
var R1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  ld = (e = 21) => {
    let t = '',
      r = e;
    for (; r--; ) t += R1[(Math.random() * 64) | 0];
    return t;
  },
  dv = (e, t) => (v1(e) ? e.match(t) : e(t));
function Ur(...e) {
  return (t) => e.some((r) => dv(r, t));
}
function Ri(...e) {
  return (t) => e.every((r) => dv(r, t));
}
function dl(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == 'string',
    n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function hs(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function cd(...e) {
  return e.length === 0
    ? (t) => dl(t, ['pending'])
    : hs(e)
      ? Ur(...e.map((t) => t.pending))
      : cd()(e[0]);
}
function Mo(...e) {
  return e.length === 0
    ? (t) => dl(t, ['rejected'])
    : hs(e)
      ? Ur(...e.map((t) => t.rejected))
      : Mo()(e[0]);
}
function fl(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? Ri(Mo(...e), t)
    : hs(e)
      ? Ri(Mo(...e), t)
      : fl()(e[0]);
}
function sn(...e) {
  return e.length === 0
    ? (t) => dl(t, ['fulfilled'])
    : hs(e)
      ? Ur(...e.map((t) => t.fulfilled))
      : sn()(e[0]);
}
function au(...e) {
  return e.length === 0
    ? (t) => dl(t, ['pending', 'fulfilled', 'rejected'])
    : hs(e)
      ? Ur(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : au()(e[0]);
}
var k1 = ['name', 'message', 'stack', 'code'],
  yc = class {
    constructor(e, t) {
      pc(this, '_type');
      (this.payload = e), (this.meta = t);
    }
  },
  up = class {
    constructor(e, t) {
      pc(this, '_type');
      (this.payload = e), (this.meta = t);
    }
  },
  M1 = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {};
      for (const r of k1) typeof e[r] == 'string' && (t[r] = e[r]);
      return t;
    }
    return { message: String(e) };
  },
  dp = (() => {
    function e(t, r, n) {
      const o = _t(t + '/fulfilled', (l, c, u, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: u,
            requestId: c,
            requestStatus: 'fulfilled'
          }
        })),
        i = _t(t + '/pending', (l, c, u) => ({
          payload: void 0,
          meta: { ...(u || {}), arg: c, requestId: l, requestStatus: 'pending' }
        })),
        s = _t(t + '/rejected', (l, c, u, f, d) => ({
          payload: f,
          error: ((n && n.serializeError) || M1)(l || 'Rejected'),
          meta: {
            ...(d || {}),
            arg: u,
            requestId: c,
            rejectedWithValue: !!f,
            requestStatus: 'rejected',
            aborted: (l == null ? void 0 : l.name) === 'AbortError',
            condition: (l == null ? void 0 : l.name) === 'ConditionError'
          }
        }));
      function a(l) {
        return (c, u, f) => {
          const d = n != null && n.idGenerator ? n.idGenerator(l) : ld(),
            m = new AbortController();
          let p, h;
          function v(b) {
            (h = b), m.abort();
          }
          const x = (async function () {
            var y, E;
            let b;
            try {
              let S =
                (y = n == null ? void 0 : n.condition) == null
                  ? void 0
                  : y.call(n, l, { getState: u, extra: f });
              if ((A1(S) && (S = await S), S === !1 || m.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                };
              const C = new Promise((T, R) => {
                (p = () => {
                  R({ name: 'AbortError', message: h || 'Aborted' });
                }),
                  m.signal.addEventListener('abort', p);
              });
              c(
                i(
                  d,
                  l,
                  (E = n == null ? void 0 : n.getPendingMeta) == null
                    ? void 0
                    : E.call(
                        n,
                        { requestId: d, arg: l },
                        { getState: u, extra: f }
                      )
                )
              ),
                (b = await Promise.race([
                  C,
                  Promise.resolve(
                    r(l, {
                      dispatch: c,
                      getState: u,
                      extra: f,
                      requestId: d,
                      signal: m.signal,
                      abort: v,
                      rejectWithValue: (T, R) => new yc(T, R),
                      fulfillWithValue: (T, R) => new up(T, R)
                    })
                  ).then((T) => {
                    if (T instanceof yc) throw T;
                    return T instanceof up
                      ? o(T.payload, d, l, T.meta)
                      : o(T, d, l);
                  })
                ]));
            } catch (S) {
              b =
                S instanceof yc ? s(null, d, l, S.payload, S.meta) : s(S, d, l);
            } finally {
              p && m.signal.removeEventListener('abort', p);
            }
            return (
              (n &&
                !n.dispatchConditionRejection &&
                s.match(b) &&
                b.meta.condition) ||
                c(b),
              b
            );
          })();
          return Object.assign(x, {
            abort: v,
            requestId: d,
            arg: l,
            unwrap() {
              return x.then(O1);
            }
          });
        };
      }
      return Object.assign(a, {
        pending: i,
        rejected: s,
        fulfilled: o,
        settled: Ur(s, o),
        typePrefix: t
      });
    }
    return (e.withTypes = () => e), e;
  })();
function O1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function A1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var _1 = Symbol.for('rtk-slice-createasyncthunk');
function D1(e, t) {
  return `${e}/${t}`;
}
function I1({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[_1];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(Rt(11));
    typeof process < 'u';
    const a =
        (typeof o.reducers == 'function' ? o.reducers($1()) : o.reducers) || {},
      l = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      u = {
        addCase(g, y) {
          const E = typeof g == 'string' ? g : g.type;
          if (!E) throw new Error(Rt(12));
          if (E in c.sliceCaseReducersByType) throw new Error(Rt(13));
          return (c.sliceCaseReducersByType[E] = y), u;
        },
        addMatcher(g, y) {
          return c.sliceMatchers.push({ matcher: g, reducer: y }), u;
        },
        exposeAction(g, y) {
          return (c.actionCreators[g] = y), u;
        },
        exposeCaseReducer(g, y) {
          return (c.sliceCaseReducersByName[g] = y), u;
        }
      };
    l.forEach((g) => {
      const y = a[g],
        E = {
          reducerName: g,
          type: D1(i, g),
          createNotation: typeof o.reducers == 'function'
        };
      B1(y) ? F1(E, y, u, t) : j1(E, y, u);
    });
    function f() {
      const [g = {}, y = [], E = void 0] =
          typeof o.extraReducers == 'function'
            ? uv(o.extraReducers)
            : [o.extraReducers],
        S = { ...g, ...c.sliceCaseReducersByType };
      return T1(o.initialState, (C) => {
        for (let T in S) C.addCase(T, S[T]);
        for (let T of c.sliceMatchers) C.addMatcher(T.matcher, T.reducer);
        for (let T of y) C.addMatcher(T.matcher, T.reducer);
        E && C.addDefaultCase(E);
      });
    }
    const d = (g) => g,
      m = new Map();
    let p;
    function h(g, y) {
      return p || (p = f()), p(g, y);
    }
    function v() {
      return p || (p = f()), p.getInitialState();
    }
    function x(g, y = !1) {
      function E(C) {
        let T = C[g];
        return typeof T > 'u' && y && (T = v()), T;
      }
      function S(C = d) {
        const T = cp(m, y, { insert: () => new WeakMap() });
        return cp(T, C, {
          insert: () => {
            const R = {};
            for (const [k, A] of Object.entries(o.selectors ?? {}))
              R[k] = L1(A, C, v, y);
            return R;
          }
        });
      }
      return {
        reducerPath: g,
        getSelectors: S,
        get selectors() {
          return S(E);
        },
        selectSlice: E
      };
    }
    const b = {
      name: i,
      reducer: h,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: v,
      ...x(s),
      injectInto(g, { reducerPath: y, ...E } = {}) {
        const S = y ?? s;
        return (
          g.inject({ reducerPath: S, reducer: h }, E), { ...b, ...x(S, !0) }
        );
      }
    };
    return b;
  };
}
function L1(e, t, r, n) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > 'u' && n && (a = r()), e(a, ...s);
  }
  return (o.unwrapped = e), o;
}
var Jn = I1();
function $1() {
  function e(t, r) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            }
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: r
        };
      },
      asyncThunk: e
    }
  );
}
function j1({ type: e, reducerName: t, createNotation: r }, n, o) {
  let i, s;
  if ('reducer' in n) {
    if (r && !N1(n)) throw new Error(Rt(17));
    (i = n.reducer), (s = n.prepare);
  } else i = n;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? _t(e, s) : _t(e));
}
function B1(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function N1(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function F1({ type: e, reducerName: t }, r, n, o) {
  if (!o) throw new Error(Rt(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: a,
      rejected: l,
      settled: c,
      options: u
    } = r,
    f = o(e, i, u);
  n.exposeAction(t, f),
    s && n.addCase(f.fulfilled, s),
    a && n.addCase(f.pending, a),
    l && n.addCase(f.rejected, l),
    c && n.addMatcher(f.settled, c),
    n.exposeCaseReducer(t, {
      fulfilled: s || Hs,
      pending: a || Hs,
      rejected: l || Hs,
      settled: c || Hs
    });
}
function Hs() {}
var V1 = (e, t) => {
    if (typeof e != 'function') throw new Error(Rt(32));
  },
  ud = 'listenerMiddleware',
  W1 = (e) => {
    let { type: t, actionCreator: r, matcher: n, predicate: o, effect: i } = e;
    if (t) o = _t(t).match;
    else if (r) (t = r.type), (o = r.match);
    else if (n) o = n;
    else if (!o) throw new Error(Rt(21));
    return V1(i), { predicate: o, type: t, effect: i };
  },
  z1 = Object.assign(
    (e) => {
      const { type: t, predicate: r, effect: n } = W1(e);
      return {
        id: ld(),
        effect: n,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Rt(22));
        }
      };
    },
    { withTypes: () => z1 }
  ),
  U1 = Object.assign(_t(`${ud}/add`), { withTypes: () => U1 });
_t(`${ud}/removeAll`);
var H1 = Object.assign(_t(`${ud}/remove`), { withTypes: () => H1 });
function Rt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var fv = { exports: {} },
  pv = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = w;
function q1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var K1 = typeof Object.is == 'function' ? Object.is : q1,
  Y1 = ms.useSyncExternalStore,
  G1 = ms.useRef,
  X1 = ms.useEffect,
  Q1 = ms.useMemo,
  Z1 = ms.useDebugValue;
pv.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = G1(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = Q1(
    function () {
      function l(m) {
        if (!c) {
          if (((c = !0), (u = m), (m = n(m)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, m)) return (f = p);
          }
          return (f = m);
        }
        if (((p = f), K1(u, m))) return p;
        var h = n(m);
        return o !== void 0 && o(p, h) ? p : ((u = m), (f = h));
      }
      var c = !1,
        u,
        f,
        d = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            }
      ];
    },
    [t, r, n, o]
  );
  var a = Y1(e, i[0], i[1]);
  return (
    X1(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    Z1(a),
    a
  );
};
fv.exports = pv;
var J1 = fv.exports,
  Xt = 'default' in ko ? de : ko,
  fp = Symbol.for('react-redux-context'),
  pp = typeof globalThis < 'u' ? globalThis : {};
function eS() {
  if (!Xt.createContext) return {};
  const e = pp[fp] ?? (pp[fp] = new Map());
  let t = e.get(Xt.createContext);
  return t || ((t = Xt.createContext(null)), e.set(Xt.createContext, t)), t;
}
var an = eS(),
  tS = () => {
    throw new Error('uSES not initialized!');
  };
function dd(e = an) {
  return function () {
    return Xt.useContext(e);
  };
}
var hv = dd(),
  mv = tS,
  rS = (e) => {
    mv = e;
  },
  nS = (e, t) => e === t;
function oS(e = an) {
  const t = e === an ? hv : dd(e),
    r = (n, o = {}) => {
      const { equalityFn: i = nS, devModeChecks: s = {} } =
          typeof o == 'function' ? { equalityFn: o } : o,
        {
          store: a,
          subscription: l,
          getServerState: c,
          stabilityCheck: u,
          identityFunctionCheck: f
        } = t();
      Xt.useRef(!0);
      const d = Xt.useCallback(
          {
            [n.name](p) {
              return n(p);
            }
          }[n.name],
          [n, u, s.stabilityCheck]
        ),
        m = mv(l.addNestedSub, a.getState, c || a.getState, d, i);
      return Xt.useDebugValue(m), m;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var dn = oS();
function gv(e) {
  e();
}
function iS() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      gv(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) r.push(n), (n = n.next);
      return r;
    },
    subscribe(r) {
      let n = !0;
      const o = (t = { callback: r, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    }
  };
}
var hp = { notify() {}, get: () => [] };
function sS(e, t) {
  let r,
    n = hp,
    o = 0,
    i = !1;
  function s(h) {
    u();
    const v = n.subscribe(h);
    let x = !1;
    return () => {
      x || ((x = !0), v(), f());
    };
  }
  function a() {
    n.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function c() {
    return i;
  }
  function u() {
    o++, r || ((r = e.subscribe(l)), (n = iS()));
  }
  function f() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = hp));
  }
  function d() {
    i || ((i = !0), u());
  }
  function m() {
    i && ((i = !1), f());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return p;
}
var aS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  lS = typeof navigator < 'u' && navigator.product === 'ReactNative',
  cS = aS || lS ? Xt.useLayoutEffect : Xt.useEffect;
function mp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ki(e, t) {
  if (mp(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !mp(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function uS({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = 'once',
  identityFunctionCheck: i = 'once'
}) {
  const s = Xt.useMemo(() => {
      const c = sS(e);
      return {
        store: e,
        subscription: c,
        getServerState: n ? () => n : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i
      };
    }, [e, n, o, i]),
    a = Xt.useMemo(() => e.getState(), [e]);
  cS(() => {
    const { subscription: c } = s;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || an;
  return Xt.createElement(l.Provider, { value: s }, r);
}
var dS = uS;
function vv(e = an) {
  const t = e === an ? hv : dd(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var yv = vv();
function fS(e = an) {
  const t = e === an ? yv : vv(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Wo = fS(),
  pS = gv;
rS(J1.useSyncExternalStoreWithSelector);
var bv = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(bv || {});
function hS(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  };
}
function mS(e) {
  return new RegExp('(^|:)//').test(e);
}
var gS = (e) => e.replace(/\/$/, ''),
  vS = (e) => e.replace(/^\//, '');
function yS(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (mS(t)) return t;
  const r = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = gS(e)), (t = vS(t)), `${e}${r}${t}`;
}
var gp = (e) => [].concat(...e);
function bS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function xS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var vp = Or;
function xv(e, t) {
  if (e === t || !((vp(e) && vp(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const r = Object.keys(t),
    n = Object.keys(e);
  let o = r.length === n.length;
  const i = Array.isArray(t) ? [] : {};
  for (const s of r) (i[s] = xv(e[s], t[s])), o && (o = e[s] === i[s]);
  return o ? e : i;
}
var yp = (...e) => fetch(...e),
  wS = (e) => e.status >= 200 && e.status <= 299,
  SS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '');
function bp(e) {
  if (!Or(e)) return e;
  const t = { ...e };
  for (const [r, n] of Object.entries(t)) n === void 0 && delete t[r];
  return t;
}
function zo({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: r = yp,
  paramsSerializer: n,
  isJsonContentType: o = SS,
  jsonContentType: i = 'application/json',
  jsonReplacer: s,
  timeout: a,
  responseHandler: l,
  validateStatus: c,
  ...u
} = {}) {
  return (
    typeof fetch > 'u' &&
      r === yp &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (d, m) => {
      const {
        signal: p,
        getState: h,
        extra: v,
        endpoint: x,
        forced: b,
        type: g
      } = m;
      let y,
        {
          url: E,
          headers: S = new Headers(u.headers),
          params: C = void 0,
          responseHandler: T = l ?? 'json',
          validateStatus: R = c ?? wS,
          timeout: k = a,
          ...A
        } = typeof d == 'string' ? { url: d } : d,
        I = { ...u, signal: p, ...A };
      (S = new Headers(bp(S))),
        (I.headers =
          (await t(S, {
            getState: h,
            extra: v,
            endpoint: x,
            forced: b,
            type: g
          })) || S);
      const L = (J) =>
        typeof J == 'object' &&
        (Or(J) || Array.isArray(J) || typeof J.toJSON == 'function');
      if (
        (!I.headers.has('content-type') &&
          L(I.body) &&
          I.headers.set('content-type', i),
        L(I.body) && o(I.headers) && (I.body = JSON.stringify(I.body, s)),
        C)
      ) {
        const J = ~E.indexOf('?') ? '&' : '?',
          ae = n ? n(C) : new URLSearchParams(bp(C));
        E += J + ae;
      }
      E = yS(e, E);
      const D = new Request(E, I);
      y = { request: new Request(E, I) };
      let B,
        j = !1,
        F =
          k &&
          setTimeout(() => {
            (j = !0), m.abort();
          }, k);
      try {
        B = await r(D);
      } catch (J) {
        return {
          error: {
            status: j ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(J)
          },
          meta: y
        };
      } finally {
        F && clearTimeout(F);
      }
      const z = B.clone();
      y.response = z;
      let q,
        fe = '';
      try {
        let J;
        if (
          (await Promise.all([
            f(B, T).then(
              (ae) => (q = ae),
              (ae) => (J = ae)
            ),
            z.text().then(
              (ae) => (fe = ae),
              () => {}
            )
          ]),
          J)
        )
          throw J;
      } catch (J) {
        return {
          error: {
            status: 'PARSING_ERROR',
            originalStatus: B.status,
            data: fe,
            error: String(J)
          },
          meta: y
        };
      }
      return R(B, q)
        ? { data: q, meta: y }
        : { error: { status: B.status, data: q }, meta: y };
    }
  );
  async function f(d, m) {
    if (typeof m == 'function') return m(d);
    if (
      (m === 'content-type' && (m = o(d.headers) ? 'json' : 'text'),
      m === 'json')
    ) {
      const p = await d.text();
      return p.length ? JSON.parse(p) : null;
    }
    return d.text();
  }
}
var xp = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  fd = _t('__rtkq/focused'),
  wv = _t('__rtkq/unfocused'),
  pd = _t('__rtkq/online'),
  Sv = _t('__rtkq/offline');
function Ev(e) {
  return e.type === 'query';
}
function ES(e) {
  return e.type === 'mutation';
}
function hd(e, t, r, n, o, i) {
  return CS(e)
    ? e(t, r, n, o).map(lu).map(i)
    : Array.isArray(e)
      ? e.map(lu).map(i)
      : [];
}
function CS(e) {
  return typeof e == 'function';
}
function lu(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function wp(e) {
  return e != null;
}
function Eo(e) {
  let t = 0;
  for (const r in e) t++;
  return t;
}
function PS(e, t) {
  return e.catch(t);
}
var Hi = Symbol('forceQueryFn'),
  cu = (e) => typeof e[Hi] == 'function';
function TS({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: r,
  api: n,
  context: o
}) {
  const i = new Map(),
    s = new Map(),
    {
      unsubscribeQueryResult: a,
      removeMutationResult: l,
      updateSubscriptionOptions: c
    } = n.internalActions;
  return {
    buildInitiateQuery: p,
    buildInitiateMutation: h,
    getRunningQueryThunk: u,
    getRunningMutationThunk: f,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: m
  };
  function u(v, x) {
    return (b) => {
      var E;
      const g = o.endpointDefinitions[v],
        y = e({ queryArgs: x, endpointDefinition: g, endpointName: v });
      return (E = i.get(b)) == null ? void 0 : E[y];
    };
  }
  function f(v, x) {
    return (b) => {
      var g;
      return (g = s.get(b)) == null ? void 0 : g[x];
    };
  }
  function d() {
    return (v) => Object.values(i.get(v) || {}).filter(wp);
  }
  function m() {
    return (v) => Object.values(s.get(v) || {}).filter(wp);
  }
  function p(v, x) {
    const b =
      (
        g,
        {
          subscribe: y = !0,
          forceRefetch: E,
          subscriptionOptions: S,
          [Hi]: C,
          ...T
        } = {}
      ) =>
      (R, k) => {
        var J;
        const A = e({ queryArgs: g, endpointDefinition: x, endpointName: v }),
          I = t({
            ...T,
            type: 'query',
            subscribe: y,
            forceRefetch: E,
            subscriptionOptions: S,
            endpointName: v,
            originalArgs: g,
            queryCacheKey: A,
            [Hi]: C
          }),
          L = n.endpoints[v].select(g),
          D = R(I),
          N = L(k()),
          { requestId: B, abort: j } = D,
          F = N.requestId !== B,
          z = (J = i.get(R)) == null ? void 0 : J[A],
          q = () => L(k()),
          fe = Object.assign(
            C
              ? D.then(q)
              : F && !z
                ? Promise.resolve(N)
                : Promise.all([z, D]).then(q),
            {
              arg: g,
              requestId: B,
              subscriptionOptions: S,
              queryCacheKey: A,
              abort: j,
              async unwrap() {
                const ae = await fe;
                if (ae.isError) throw ae.error;
                return ae.data;
              },
              refetch: () => R(b(g, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                y && R(a({ queryCacheKey: A, requestId: B }));
              },
              updateSubscriptionOptions(ae) {
                (fe.subscriptionOptions = ae),
                  R(
                    c({
                      endpointName: v,
                      requestId: B,
                      queryCacheKey: A,
                      options: ae
                    })
                  );
              }
            }
          );
        if (!z && !F && !C) {
          const ae = i.get(R) || {};
          (ae[A] = fe),
            i.set(R, ae),
            fe.then(() => {
              delete ae[A], Eo(ae) || i.delete(R);
            });
        }
        return fe;
      };
    return b;
  }
  function h(v) {
    return (x, { track: b = !0, fixedCacheKey: g } = {}) =>
      (y, E) => {
        const S = r({
            type: 'mutation',
            endpointName: v,
            originalArgs: x,
            track: b,
            fixedCacheKey: g
          }),
          C = y(S),
          { requestId: T, abort: R, unwrap: k } = C,
          A = PS(
            C.unwrap().then((N) => ({ data: N })),
            (N) => ({ error: N })
          ),
          I = () => {
            y(l({ requestId: T, fixedCacheKey: g }));
          },
          L = Object.assign(A, {
            arg: C.arg,
            requestId: T,
            abort: R,
            unwrap: k,
            reset: I
          }),
          D = s.get(y) || {};
        return (
          s.set(y, D),
          (D[T] = L),
          L.then(() => {
            delete D[T], Eo(D) || s.delete(y);
          }),
          g &&
            ((D[g] = L),
            L.then(() => {
              D[g] === L && (delete D[g], Eo(D) || s.delete(y));
            })),
          L
        );
      };
  }
}
function Sp(e) {
  return e;
}
function RS({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: r },
  serializeQueryArgs: n,
  api: o,
  assertTagType: i
}) {
  const s = (b, g, y, E) => (S, C) => {
      const T = r[b],
        R = n({ queryArgs: g, endpointDefinition: T, endpointName: b });
      if (
        (S(
          o.internalActions.queryResultPatched({ queryCacheKey: R, patches: y })
        ),
        !E)
      )
        return;
      const k = o.endpoints[b].select(g)(C()),
        A = hd(T.providesTags, k.data, void 0, g, {}, i);
      S(
        o.internalActions.updateProvidedBy({
          queryCacheKey: R,
          providedTags: A
        })
      );
    },
    a =
      (b, g, y, E = !0) =>
      (S, C) => {
        const R = o.endpoints[b].select(g)(C());
        let k = {
          patches: [],
          inversePatches: [],
          undo: () => S(o.util.patchQueryData(b, g, k.inversePatches, E))
        };
        if (R.status === 'uninitialized') return k;
        let A;
        if ('data' in R)
          if (wr(R.data)) {
            const [I, L, D] = iv(R.data, y);
            k.patches.push(...L), k.inversePatches.push(...D), (A = I);
          } else
            (A = y(R.data)),
              k.patches.push({ op: 'replace', path: [], value: A }),
              k.inversePatches.push({ op: 'replace', path: [], value: R.data });
        return (
          k.patches.length === 0 ||
            S(o.util.patchQueryData(b, g, k.patches, E)),
          k
        );
      },
    l = (b, g, y) => (E) =>
      E(
        o.endpoints[b].initiate(g, {
          subscribe: !1,
          forceRefetch: !0,
          [Hi]: () => ({ data: y })
        })
      ),
    c = async (
      b,
      {
        signal: g,
        abort: y,
        rejectWithValue: E,
        fulfillWithValue: S,
        dispatch: C,
        getState: T,
        extra: R
      }
    ) => {
      const k = r[b.endpointName];
      try {
        let A = Sp,
          I;
        const L = {
            signal: g,
            abort: y,
            dispatch: C,
            getState: T,
            extra: R,
            endpoint: b.endpointName,
            type: b.type,
            forced: b.type === 'query' ? u(b, T()) : void 0
          },
          D = b.type === 'query' ? b[Hi] : void 0;
        if (
          (D
            ? (I = D())
            : k.query
              ? ((I = await t(k.query(b.originalArgs), L, k.extraOptions)),
                k.transformResponse && (A = k.transformResponse))
              : (I = await k.queryFn(b.originalArgs, L, k.extraOptions, (N) =>
                  t(N, L, k.extraOptions)
                )),
          typeof process < 'u',
          I.error)
        )
          throw new xp(I.error, I.meta);
        return S(await A(I.data, I.meta, b.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: I.meta,
          [mo]: !0
        });
      } catch (A) {
        let I = A;
        if (I instanceof xp) {
          let L = Sp;
          k.query && k.transformErrorResponse && (L = k.transformErrorResponse);
          try {
            return E(await L(I.value, I.meta, b.originalArgs), {
              baseQueryMeta: I.meta,
              [mo]: !0
            });
          } catch (D) {
            I = D;
          }
        }
        throw (typeof process < 'u', console.error(I), I);
      }
    };
  function u(b, g) {
    var T, R, k;
    const y =
        (R = (T = g[e]) == null ? void 0 : T.queries) == null
          ? void 0
          : R[b.queryCacheKey],
      E = (k = g[e]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      S = y == null ? void 0 : y.fulfilledTimeStamp,
      C = b.forceRefetch ?? (b.subscribe && E);
    return C ? C === !0 || (Number(new Date()) - Number(S)) / 1e3 >= C : !1;
  }
  const f = dp(`${e}/executeQuery`, c, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [mo]: !0 };
      },
      condition(b, { getState: g }) {
        var k, A, I;
        const y = g(),
          E =
            (A = (k = y[e]) == null ? void 0 : k.queries) == null
              ? void 0
              : A[b.queryCacheKey],
          S = E == null ? void 0 : E.fulfilledTimeStamp,
          C = b.originalArgs,
          T = E == null ? void 0 : E.originalArgs,
          R = r[b.endpointName];
        return cu(b)
          ? !0
          : (E == null ? void 0 : E.status) === 'pending'
            ? !1
            : u(b, y) ||
                (Ev(R) &&
                  (I = R == null ? void 0 : R.forceRefetch) != null &&
                  I.call(R, {
                    currentArg: C,
                    previousArg: T,
                    endpointState: E,
                    state: y
                  }))
              ? !0
              : !S;
      },
      dispatchConditionRejection: !0
    }),
    d = dp(`${e}/executeMutation`, c, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [mo]: !0 };
      }
    }),
    m = (b) => 'force' in b,
    p = (b) => 'ifOlderThan' in b,
    h = (b, g, y) => (E, S) => {
      const C = m(y) && y.force,
        T = p(y) && y.ifOlderThan,
        R = (A = !0) => {
          const I = { forceRefetch: A, isPrefetch: !0 };
          return o.endpoints[b].initiate(g, I);
        },
        k = o.endpoints[b].select(g)(S());
      if (C) E(R());
      else if (T) {
        const A = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!A) {
          E(R());
          return;
        }
        (Number(new Date()) - Number(new Date(A))) / 1e3 >= T && E(R());
      } else E(R(!1));
    };
  function v(b) {
    return (g) => {
      var y, E;
      return (
        ((E = (y = g == null ? void 0 : g.meta) == null ? void 0 : y.arg) ==
        null
          ? void 0
          : E.endpointName) === b
      );
    };
  }
  function x(b, g) {
    return {
      matchPending: Ri(cd(b), v(g)),
      matchFulfilled: Ri(sn(b), v(g)),
      matchRejected: Ri(Mo(b), v(g))
    };
  }
  return {
    queryThunk: f,
    mutationThunk: d,
    prefetch: h,
    updateQueryData: a,
    upsertQueryData: l,
    patchQueryData: s,
    buildMatchThunkActions: x
  };
}
function Cv(e, t, r, n) {
  return hd(
    r[e.meta.arg.endpointName][t],
    sn(e) ? e.payload : void 0,
    fl(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    n
  );
}
function qs(e, t, r) {
  const n = e[t];
  n && r(n);
}
function qi(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ep(e, t, r) {
  const n = e[qi(t)];
  n && r(n);
}
var ii = {};
function kS({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: o,
    extractRehydrationInfo: i,
    hasRehydrationInfo: s
  },
  assertTagType: a,
  config: l
}) {
  const c = _t(`${e}/resetApiState`),
    u = Jn({
      name: `${e}/queries`,
      initialState: ii,
      reducers: {
        removeQueryResult: {
          reducer(g, { payload: { queryCacheKey: y } }) {
            delete g[y];
          },
          prepare: oi()
        },
        queryResultPatched: {
          reducer(g, { payload: { queryCacheKey: y, patches: E } }) {
            qs(g, y, (S) => {
              S.data = ip(S.data, E.concat());
            });
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(t.pending, (y, { meta: E, meta: { arg: S } }) => {
          var T;
          const C = cu(S);
          y[(T = S.queryCacheKey)] ??
            (y[T] = { status: 'uninitialized', endpointName: S.endpointName }),
            qs(y, S.queryCacheKey, (R) => {
              (R.status = 'pending'),
                (R.requestId = C && R.requestId ? R.requestId : E.requestId),
                S.originalArgs !== void 0 && (R.originalArgs = S.originalArgs),
                (R.startedTimeStamp = E.startedTimeStamp);
            });
        })
          .addCase(t.fulfilled, (y, { meta: E, payload: S }) => {
            qs(y, E.arg.queryCacheKey, (C) => {
              if (C.requestId !== E.requestId && !cu(E.arg)) return;
              const { merge: T } = n[E.arg.endpointName];
              if (((C.status = 'fulfilled'), T))
                if (C.data !== void 0) {
                  const {
                    fulfilledTimeStamp: R,
                    arg: k,
                    baseQueryMeta: A,
                    requestId: I
                  } = E;
                  let L = ps(C.data, (D) =>
                    T(D, S, {
                      arg: k.originalArgs,
                      baseQueryMeta: A,
                      fulfilledTimeStamp: R,
                      requestId: I
                    })
                  );
                  C.data = L;
                } else C.data = S;
              else
                C.data =
                  n[E.arg.endpointName].structuralSharing ?? !0
                    ? xv(xr(C.data) ? Yw(C.data) : C.data, S)
                    : S;
              delete C.error, (C.fulfilledTimeStamp = E.fulfilledTimeStamp);
            });
          })
          .addCase(
            t.rejected,
            (
              y,
              {
                meta: { condition: E, arg: S, requestId: C },
                error: T,
                payload: R
              }
            ) => {
              qs(y, S.queryCacheKey, (k) => {
                if (!E) {
                  if (k.requestId !== C) return;
                  (k.status = 'rejected'), (k.error = R ?? T);
                }
              });
            }
          )
          .addMatcher(s, (y, E) => {
            const { queries: S } = i(E);
            for (const [C, T] of Object.entries(S))
              ((T == null ? void 0 : T.status) === 'fulfilled' ||
                (T == null ? void 0 : T.status) === 'rejected') &&
                (y[C] = T);
          });
      }
    }),
    f = Jn({
      name: `${e}/mutations`,
      initialState: ii,
      reducers: {
        removeMutationResult: {
          reducer(g, { payload: y }) {
            const E = qi(y);
            E in g && delete g[E];
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(
          r.pending,
          (
            y,
            { meta: E, meta: { requestId: S, arg: C, startedTimeStamp: T } }
          ) => {
            C.track &&
              (y[qi(E)] = {
                requestId: S,
                status: 'pending',
                endpointName: C.endpointName,
                startedTimeStamp: T
              });
          }
        )
          .addCase(r.fulfilled, (y, { payload: E, meta: S }) => {
            S.arg.track &&
              Ep(y, S, (C) => {
                C.requestId === S.requestId &&
                  ((C.status = 'fulfilled'),
                  (C.data = E),
                  (C.fulfilledTimeStamp = S.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, (y, { payload: E, error: S, meta: C }) => {
            C.arg.track &&
              Ep(y, C, (T) => {
                T.requestId === C.requestId &&
                  ((T.status = 'rejected'), (T.error = E ?? S));
              });
          })
          .addMatcher(s, (y, E) => {
            const { mutations: S } = i(E);
            for (const [C, T] of Object.entries(S))
              ((T == null ? void 0 : T.status) === 'fulfilled' ||
                (T == null ? void 0 : T.status) === 'rejected') &&
                C !== (T == null ? void 0 : T.requestId) &&
                (y[C] = T);
          });
      }
    }),
    d = Jn({
      name: `${e}/invalidation`,
      initialState: ii,
      reducers: {
        updateProvidedBy: {
          reducer(g, y) {
            var C, T;
            const { queryCacheKey: E, providedTags: S } = y.payload;
            for (const R of Object.values(g))
              for (const k of Object.values(R)) {
                const A = k.indexOf(E);
                A !== -1 && k.splice(A, 1);
              }
            for (const { type: R, id: k } of S) {
              const A =
                (C = g[R] ?? (g[R] = {}))[(T = k || '__internal_without_id')] ??
                (C[T] = []);
              A.includes(E) || A.push(E);
            }
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(
          u.actions.removeQueryResult,
          (y, { payload: { queryCacheKey: E } }) => {
            for (const S of Object.values(y))
              for (const C of Object.values(S)) {
                const T = C.indexOf(E);
                T !== -1 && C.splice(T, 1);
              }
          }
        )
          .addMatcher(s, (y, E) => {
            var C, T;
            const { provided: S } = i(E);
            for (const [R, k] of Object.entries(S))
              for (const [A, I] of Object.entries(k)) {
                const L =
                  (C = y[R] ?? (y[R] = {}))[
                    (T = A || '__internal_without_id')
                  ] ?? (C[T] = []);
                for (const D of I) L.includes(D) || L.push(D);
              }
          })
          .addMatcher(Ur(sn(t), fl(t)), (y, E) => {
            const S = Cv(E, 'providesTags', n, a),
              { queryCacheKey: C } = E.meta.arg;
            d.caseReducers.updateProvidedBy(
              y,
              d.actions.updateProvidedBy({ queryCacheKey: C, providedTags: S })
            );
          });
      }
    }),
    m = Jn({
      name: `${e}/subscriptions`,
      initialState: ii,
      reducers: {
        updateSubscriptionOptions(g, y) {},
        unsubscribeQueryResult(g, y) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    p = Jn({
      name: `${e}/internalSubscriptions`,
      initialState: ii,
      reducers: {
        subscriptionsUpdated: {
          reducer(g, y) {
            return ip(g, y.payload);
          },
          prepare: oi()
        }
      }
    }),
    h = Jn({
      name: `${e}/config`,
      initialState: {
        online: bS(),
        focused: xS(),
        middlewareRegistered: !1,
        ...l
      },
      reducers: {
        middlewareRegistered(g, { payload: y }) {
          g.middlewareRegistered =
            g.middlewareRegistered === 'conflict' || o !== y ? 'conflict' : !0;
        }
      },
      extraReducers: (g) => {
        g.addCase(pd, (y) => {
          y.online = !0;
        })
          .addCase(Sv, (y) => {
            y.online = !1;
          })
          .addCase(fd, (y) => {
            y.focused = !0;
          })
          .addCase(wv, (y) => {
            y.focused = !1;
          })
          .addMatcher(s, (y) => ({ ...y }));
      }
    }),
    v = nd({
      queries: u.reducer,
      mutations: f.reducer,
      provided: d.reducer,
      subscriptions: p.reducer,
      config: h.reducer
    }),
    x = (g, y) => v(c.match(y) ? void 0 : g, y),
    b = {
      ...h.actions,
      ...u.actions,
      ...m.actions,
      ...p.actions,
      ...f.actions,
      ...d.actions,
      resetApiState: c
    };
  return { reducer: x, actions: b };
}
var Mn = Symbol.for('RTKQ/skipToken'),
  Pv = { status: 'uninitialized' },
  Cp = ps(Pv, () => {}),
  Pp = ps(Pv, () => {});
function MS({ serializeQueryArgs: e, reducerPath: t, createSelector: r }) {
  const n = (f) => Cp,
    o = (f) => Pp;
  return {
    buildQuerySelector: a,
    buildMutationSelector: l,
    selectInvalidatedBy: c,
    selectCachedArgsForQuery: u
  };
  function i(f) {
    return { ...f, ...hS(f.status) };
  }
  function s(f) {
    return f[t];
  }
  function a(f, d) {
    return (m) => {
      const p = e({ queryArgs: m, endpointDefinition: d, endpointName: f });
      return r(
        m === Mn
          ? n
          : (x) => {
              var b, g;
              return (
                ((g = (b = s(x)) == null ? void 0 : b.queries) == null
                  ? void 0
                  : g[p]) ?? Cp
              );
            },
        i
      );
    };
  }
  function l() {
    return (f) => {
      let d;
      return (
        typeof f == 'object' ? (d = qi(f) ?? Mn) : (d = f),
        r(
          d === Mn
            ? o
            : (h) => {
                var v, x;
                return (
                  ((x = (v = s(h)) == null ? void 0 : v.mutations) == null
                    ? void 0
                    : x[d]) ?? Pp
                );
              },
          i
        )
      );
    };
  }
  function c(f, d) {
    const m = f[t],
      p = new Set();
    for (const h of d.map(lu)) {
      const v = m.provided[h.type];
      if (!v) continue;
      let x = (h.id !== void 0 ? v[h.id] : gp(Object.values(v))) ?? [];
      for (const b of x) p.add(b);
    }
    return gp(
      Array.from(p.values()).map((h) => {
        const v = m.queries[h];
        return v
          ? [
              {
                queryCacheKey: h,
                endpointName: v.endpointName,
                originalArgs: v.originalArgs
              }
            ]
          : [];
      })
    );
  }
  function u(f, d) {
    return Object.values(f[t].queries)
      .filter(
        (m) =>
          (m == null ? void 0 : m.endpointName) === d &&
          m.status !== 'uninitialized'
      )
      .map((m) => m.originalArgs);
  }
}
var eo = WeakMap ? new WeakMap() : void 0,
  Tp = ({ endpointName: e, queryArgs: t }) => {
    let r = '';
    const n = eo == null ? void 0 : eo.get(t);
    if (typeof n == 'string') r = n;
    else {
      const o = JSON.stringify(
        t,
        (i, s) => (
          (s = typeof s == 'bigint' ? { $bigint: s.toString() } : s),
          (s = Or(s)
            ? Object.keys(s)
                .sort()
                .reduce((a, l) => ((a[l] = s[l]), a), {})
            : s),
          s
        )
      );
      Or(t) && (eo == null || eo.set(t, o)), (r = o);
    }
    return `${e}(${r})`;
  };
function OS(...e) {
  return function (r) {
    const n = Ui((c) => {
        var u;
        return (u = r.extractRehydrationInfo) == null
          ? void 0
          : u.call(r, c, { reducerPath: r.reducerPath ?? 'api' });
      }),
      o = {
        reducerPath: 'api',
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: 'delayed',
        ...r,
        extractRehydrationInfo: n,
        serializeQueryArgs(c) {
          let u = Tp;
          if ('serializeQueryArgs' in c.endpointDefinition) {
            const f = c.endpointDefinition.serializeQueryArgs;
            u = (d) => {
              const m = f(d);
              return typeof m == 'string' ? m : Tp({ ...d, queryArgs: m });
            };
          } else r.serializeQueryArgs && (u = r.serializeQueryArgs);
          return u(c);
        },
        tagTypes: [...(r.tagTypes || [])]
      },
      i = {
        endpointDefinitions: {},
        batch(c) {
          c();
        },
        apiUid: ld(),
        extractRehydrationInfo: n,
        hasRehydrationInfo: Ui((c) => n(c) != null)
      },
      s = {
        injectEndpoints: l,
        enhanceEndpoints({ addTagTypes: c, endpoints: u }) {
          if (c)
            for (const f of c) o.tagTypes.includes(f) || o.tagTypes.push(f);
          if (u)
            for (const [f, d] of Object.entries(u))
              typeof d == 'function'
                ? d(i.endpointDefinitions[f])
                : Object.assign(i.endpointDefinitions[f] || {}, d);
          return s;
        }
      },
      a = e.map((c) => c.init(s, o, i));
    function l(c) {
      const u = c.endpoints({
        query: (f) => ({ ...f, type: 'query' }),
        mutation: (f) => ({ ...f, type: 'mutation' })
      });
      for (const [f, d] of Object.entries(u)) {
        if (c.overrideExisting !== !0 && f in i.endpointDefinitions) {
          if (c.overrideExisting === 'throw') throw new Error(Rt(39));
          typeof process < 'u';
          continue;
        }
        i.endpointDefinitions[f] = d;
        for (const m of a) m.injectEndpoint(f, d);
      }
      return s;
    }
    return s.injectEndpoints({ endpoints: r.endpoints });
  };
}
function AS(e) {
  for (let t in e) return !1;
  return !0;
}
var _S = 2147483647 / 1e3 - 1,
  DS = ({
    reducerPath: e,
    api: t,
    queryThunk: r,
    context: n,
    internalState: o
  }) => {
    const { removeQueryResult: i, unsubscribeQueryResult: s } =
        t.internalActions,
      a = Ur(s.match, r.fulfilled, r.rejected);
    function l(d) {
      const m = o.currentSubscriptions[d];
      return !!m && !AS(m);
    }
    const c = {},
      u = (d, m, p) => {
        var h;
        if (a(d)) {
          const v = m.getState()[e],
            { queryCacheKey: x } = s.match(d) ? d.payload : d.meta.arg;
          f(
            x,
            (h = v.queries[x]) == null ? void 0 : h.endpointName,
            m,
            v.config
          );
        }
        if (t.util.resetApiState.match(d))
          for (const [v, x] of Object.entries(c))
            x && clearTimeout(x), delete c[v];
        if (n.hasRehydrationInfo(d)) {
          const v = m.getState()[e],
            { queries: x } = n.extractRehydrationInfo(d);
          for (const [b, g] of Object.entries(x))
            f(b, g == null ? void 0 : g.endpointName, m, v.config);
        }
      };
    function f(d, m, p, h) {
      const v = n.endpointDefinitions[m],
        x = (v == null ? void 0 : v.keepUnusedDataFor) ?? h.keepUnusedDataFor;
      if (x === 1 / 0) return;
      const b = Math.max(0, Math.min(x, _S));
      if (!l(d)) {
        const g = c[d];
        g && clearTimeout(g),
          (c[d] = setTimeout(() => {
            l(d) || p.dispatch(i({ queryCacheKey: d })), delete c[d];
          }, b * 1e3));
      }
    }
    return u;
  },
  IS = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: r },
    mutationThunk: n,
    queryThunk: o,
    api: i,
    assertTagType: s,
    refetchQuery: a,
    internalState: l
  }) => {
    const { removeQueryResult: c } = i.internalActions,
      u = Ur(sn(n), fl(n)),
      f = Ur(sn(n, o), Mo(n, o));
    let d = [];
    const m = (v, x) => {
      u(v)
        ? h(Cv(v, 'invalidatesTags', r, s), x)
        : f(v)
          ? h([], x)
          : i.util.invalidateTags.match(v) &&
            h(hd(v.payload, void 0, void 0, void 0, void 0, s), x);
    };
    function p(v) {
      var x, b;
      for (const g in v.queries)
        if (((x = v.queries[g]) == null ? void 0 : x.status) === 'pending')
          return !0;
      for (const g in v.mutations)
        if (((b = v.mutations[g]) == null ? void 0 : b.status) === 'pending')
          return !0;
      return !1;
    }
    function h(v, x) {
      const b = x.getState(),
        g = b[e];
      if ((d.push(...v), g.config.invalidationBehavior === 'delayed' && p(g)))
        return;
      const y = d;
      if (((d = []), y.length === 0)) return;
      const E = i.util.selectInvalidatedBy(b, y);
      t.batch(() => {
        const S = Array.from(E.values());
        for (const { queryCacheKey: C } of S) {
          const T = g.queries[C],
            R = l.currentSubscriptions[C] ?? {};
          T &&
            (Eo(R) === 0
              ? x.dispatch(c({ queryCacheKey: C }))
              : T.status !== 'uninitialized' && x.dispatch(a(T, C)));
        }
      });
    }
    return m;
  },
  LS = ({
    reducerPath: e,
    queryThunk: t,
    api: r,
    refetchQuery: n,
    internalState: o
  }) => {
    const i = {},
      s = (d, m) => {
        (r.internalActions.updateSubscriptionOptions.match(d) ||
          r.internalActions.unsubscribeQueryResult.match(d)) &&
          l(d.payload, m),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            l(d.meta.arg, m),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            a(d.meta.arg, m),
          r.util.resetApiState.match(d) && u();
      };
    function a({ queryCacheKey: d }, m) {
      const p = m.getState()[e],
        h = p.queries[d],
        v = o.currentSubscriptions[d];
      if (!h || h.status === 'uninitialized') return;
      const { lowestPollingInterval: x, skipPollingIfUnfocused: b } = f(v);
      if (!Number.isFinite(x)) return;
      const g = i[d];
      g != null && g.timeout && (clearTimeout(g.timeout), (g.timeout = void 0));
      const y = Date.now() + x;
      i[d] = {
        nextPollTimestamp: y,
        pollingInterval: x,
        timeout: setTimeout(() => {
          (p.config.focused || !b) && m.dispatch(n(h, d)),
            a({ queryCacheKey: d }, m);
        }, x)
      };
    }
    function l({ queryCacheKey: d }, m) {
      const h = m.getState()[e].queries[d],
        v = o.currentSubscriptions[d];
      if (!h || h.status === 'uninitialized') return;
      const { lowestPollingInterval: x } = f(v);
      if (!Number.isFinite(x)) {
        c(d);
        return;
      }
      const b = i[d],
        g = Date.now() + x;
      (!b || g < b.nextPollTimestamp) && a({ queryCacheKey: d }, m);
    }
    function c(d) {
      const m = i[d];
      m != null && m.timeout && clearTimeout(m.timeout), delete i[d];
    }
    function u() {
      for (const d of Object.keys(i)) c(d);
    }
    function f(d = {}) {
      let m = !1,
        p = Number.POSITIVE_INFINITY;
      for (let h in d)
        d[h].pollingInterval &&
          ((p = Math.min(d[h].pollingInterval, p)),
          (m = d[h].skipPollingIfUnfocused || m));
      return { lowestPollingInterval: p, skipPollingIfUnfocused: m };
    }
    return s;
  },
  $S = ({
    reducerPath: e,
    context: t,
    api: r,
    refetchQuery: n,
    internalState: o
  }) => {
    const { removeQueryResult: i } = r.internalActions,
      s = (l, c) => {
        fd.match(l) && a(c, 'refetchOnFocus'),
          pd.match(l) && a(c, 'refetchOnReconnect');
      };
    function a(l, c) {
      const u = l.getState()[e],
        f = u.queries,
        d = o.currentSubscriptions;
      t.batch(() => {
        for (const m of Object.keys(d)) {
          const p = f[m],
            h = d[m];
          if (!h || !p) continue;
          (Object.values(h).some((x) => x[c] === !0) ||
            (Object.values(h).every((x) => x[c] === void 0) && u.config[c])) &&
            (Eo(h) === 0
              ? l.dispatch(i({ queryCacheKey: m }))
              : p.status !== 'uninitialized' && l.dispatch(n(p, m)));
        }
      });
    }
    return s;
  },
  Rp = new Error('Promise never resolved before cacheEntryRemoved.'),
  jS = ({
    api: e,
    reducerPath: t,
    context: r,
    queryThunk: n,
    mutationThunk: o,
    internalState: i
  }) => {
    const s = au(n),
      a = au(o),
      l = sn(n, o),
      c = {},
      u = (m, p, h) => {
        const v = f(m);
        if (n.pending.match(m)) {
          const x = h[t].queries[v],
            b = p.getState()[t].queries[v];
          !x &&
            b &&
            d(
              m.meta.arg.endpointName,
              m.meta.arg.originalArgs,
              v,
              p,
              m.meta.requestId
            );
        } else if (o.pending.match(m))
          p.getState()[t].mutations[v] &&
            d(
              m.meta.arg.endpointName,
              m.meta.arg.originalArgs,
              v,
              p,
              m.meta.requestId
            );
        else if (l(m)) {
          const x = c[v];
          x != null &&
            x.valueResolved &&
            (x.valueResolved({ data: m.payload, meta: m.meta.baseQueryMeta }),
            delete x.valueResolved);
        } else if (
          e.internalActions.removeQueryResult.match(m) ||
          e.internalActions.removeMutationResult.match(m)
        ) {
          const x = c[v];
          x && (delete c[v], x.cacheEntryRemoved());
        } else if (e.util.resetApiState.match(m))
          for (const [x, b] of Object.entries(c))
            delete c[x], b.cacheEntryRemoved();
      };
    function f(m) {
      return s(m)
        ? m.meta.arg.queryCacheKey
        : a(m)
          ? m.meta.arg.fixedCacheKey ?? m.meta.requestId
          : e.internalActions.removeQueryResult.match(m)
            ? m.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(m)
              ? qi(m.payload)
              : '';
    }
    function d(m, p, h, v, x) {
      const b = r.endpointDefinitions[m],
        g = b == null ? void 0 : b.onCacheEntryAdded;
      if (!g) return;
      let y = {};
      const E = new Promise((A) => {
          y.cacheEntryRemoved = A;
        }),
        S = Promise.race([
          new Promise((A) => {
            y.valueResolved = A;
          }),
          E.then(() => {
            throw Rp;
          })
        ]);
      S.catch(() => {}), (c[h] = y);
      const C = e.endpoints[m].select(b.type === 'query' ? p : h),
        T = v.dispatch((A, I, L) => L),
        R = {
          ...v,
          getCacheEntry: () => C(v.getState()),
          requestId: x,
          extra: T,
          updateCachedData:
            b.type === 'query'
              ? (A) => v.dispatch(e.util.updateQueryData(m, p, A))
              : void 0,
          cacheDataLoaded: S,
          cacheEntryRemoved: E
        },
        k = g(p, R);
      Promise.resolve(k).catch((A) => {
        if (A !== Rp) throw A;
      });
    }
    return u;
  },
  BS = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
    const o = cd(r, n),
      i = Mo(r, n),
      s = sn(r, n),
      a = {};
    return (c, u) => {
      var f, d;
      if (o(c)) {
        const {
            requestId: m,
            arg: { endpointName: p, originalArgs: h }
          } = c.meta,
          v = t.endpointDefinitions[p],
          x = v == null ? void 0 : v.onQueryStarted;
        if (x) {
          const b = {},
            g = new Promise((C, T) => {
              (b.resolve = C), (b.reject = T);
            });
          g.catch(() => {}), (a[m] = b);
          const y = e.endpoints[p].select(v.type === 'query' ? h : m),
            E = u.dispatch((C, T, R) => R),
            S = {
              ...u,
              getCacheEntry: () => y(u.getState()),
              requestId: m,
              extra: E,
              updateCachedData:
                v.type === 'query'
                  ? (C) => u.dispatch(e.util.updateQueryData(p, h, C))
                  : void 0,
              queryFulfilled: g
            };
          x(h, S);
        }
      } else if (s(c)) {
        const { requestId: m, baseQueryMeta: p } = c.meta;
        (f = a[m]) == null || f.resolve({ data: c.payload, meta: p }),
          delete a[m];
      } else if (i(c)) {
        const { requestId: m, rejectedWithValue: p, baseQueryMeta: h } = c.meta;
        (d = a[m]) == null ||
          d.reject({
            error: c.payload ?? c.error,
            isUnhandledError: !p,
            meta: h
          }),
          delete a[m];
      }
    };
  },
  NS =
    ({ api: e, context: { apiUid: t }, reducerPath: r }) =>
    (n, o) => {
      e.util.resetApiState.match(n) &&
        o.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u';
    },
  FS = ({ api: e, queryThunk: t, internalState: r }) => {
    const n = `${e.reducerPath}/subscriptions`;
    let o = null,
      i = null;
    const { updateSubscriptionOptions: s, unsubscribeQueryResult: a } =
        e.internalActions,
      l = (m, p) => {
        var v, x, b;
        if (s.match(p)) {
          const { queryCacheKey: g, requestId: y, options: E } = p.payload;
          return (
            (v = m == null ? void 0 : m[g]) != null && v[y] && (m[g][y] = E), !0
          );
        }
        if (a.match(p)) {
          const { queryCacheKey: g, requestId: y } = p.payload;
          return m[g] && delete m[g][y], !0;
        }
        if (e.internalActions.removeQueryResult.match(p))
          return delete m[p.payload.queryCacheKey], !0;
        if (t.pending.match(p)) {
          const {
              meta: { arg: g, requestId: y }
            } = p,
            E = m[(x = g.queryCacheKey)] ?? (m[x] = {});
          return (
            (E[`${y}_running`] = {}),
            g.subscribe && (E[y] = g.subscriptionOptions ?? E[y] ?? {}),
            !0
          );
        }
        let h = !1;
        if (t.fulfilled.match(p) || t.rejected.match(p)) {
          const g = m[p.meta.arg.queryCacheKey] || {},
            y = `${p.meta.requestId}_running`;
          h || (h = !!g[y]), delete g[y];
        }
        if (t.rejected.match(p)) {
          const {
            meta: { condition: g, arg: y, requestId: E }
          } = p;
          if (g && y.subscribe) {
            const S = m[(b = y.queryCacheKey)] ?? (m[b] = {});
            (S[E] = y.subscriptionOptions ?? S[E] ?? {}), (h = !0);
          }
        }
        return h;
      },
      c = () => r.currentSubscriptions,
      d = {
        getSubscriptions: c,
        getSubscriptionCount: (m) => {
          const h = c()[m] ?? {};
          return Eo(h);
        },
        isRequestSubscribed: (m, p) => {
          var v;
          const h = c();
          return !!((v = h == null ? void 0 : h[m]) != null && v[p]);
        }
      };
    return (m, p) => {
      if (
        (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        e.util.resetApiState.match(m))
      )
        return (o = r.currentSubscriptions = {}), (i = null), [!0, !1];
      if (e.internalActions.internal_getRTKQSubscriptions.match(m))
        return [!1, d];
      const h = l(r.currentSubscriptions, m);
      let v = !0;
      if (h) {
        i ||
          (i = setTimeout(() => {
            const g = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              [, y] = iv(o, () => g);
            p.next(e.internalActions.subscriptionsUpdated(y)),
              (o = g),
              (i = null);
          }, 500));
        const x = typeof m.type == 'string' && !!m.type.startsWith(n),
          b = t.rejected.match(m) && m.meta.condition && !!m.meta.arg.subscribe;
        v = !x && !b;
      }
      return [v, !1];
    };
  };
function VS(e) {
  const { reducerPath: t, queryThunk: r, api: n, context: o } = e,
    { apiUid: i } = o,
    s = { invalidateTags: _t(`${t}/invalidateTags`) },
    a = (f) => f.type.startsWith(`${t}/`),
    l = [NS, DS, IS, LS, jS, BS];
  return {
    middleware: (f) => {
      let d = !1;
      const p = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: u,
          isThisApiSliceAction: a
        },
        h = l.map((b) => b(p)),
        v = FS(p),
        x = $S(p);
      return (b) => (g) => {
        if (!Zg(g)) return b(g);
        d || ((d = !0), f.dispatch(n.internalActions.middlewareRegistered(i)));
        const y = { ...f, next: b },
          E = f.getState(),
          [S, C] = v(g, y, E);
        let T;
        if (
          (S ? (T = b(g)) : (T = C),
          f.getState()[t] && (x(g, y, E), a(g) || o.hasRehydrationInfo(g)))
        )
          for (let R of h) R(g, y, E);
        return T;
      };
    },
    actions: s
  };
  function u(f, d, m = {}) {
    return r({
      type: 'query',
      endpointName: f.endpointName,
      originalArgs: f.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: d,
      ...m
    });
  }
}
function Qr(e, ...t) {
  return Object.assign(e, ...t);
}
var kp = Symbol(),
  WS = ({ createSelector: e = ad } = {}) => ({
    name: kp,
    init(
      t,
      {
        baseQuery: r,
        tagTypes: n,
        reducerPath: o,
        serializeQueryArgs: i,
        keepUnusedDataFor: s,
        refetchOnMountOrArgChange: a,
        refetchOnFocus: l,
        refetchOnReconnect: c,
        invalidationBehavior: u
      },
      f
    ) {
      n1();
      const d = (F) => (typeof process < 'u', F);
      Object.assign(t, {
        reducerPath: o,
        endpoints: {},
        internalActions: {
          onOnline: pd,
          onOffline: Sv,
          onFocus: fd,
          onFocusLost: wv
        },
        util: {}
      });
      const {
          queryThunk: m,
          mutationThunk: p,
          patchQueryData: h,
          updateQueryData: v,
          upsertQueryData: x,
          prefetch: b,
          buildMatchThunkActions: g
        } = RS({
          baseQuery: r,
          reducerPath: o,
          context: f,
          api: t,
          serializeQueryArgs: i,
          assertTagType: d
        }),
        { reducer: y, actions: E } = kS({
          context: f,
          queryThunk: m,
          mutationThunk: p,
          reducerPath: o,
          assertTagType: d,
          config: {
            refetchOnFocus: l,
            refetchOnReconnect: c,
            refetchOnMountOrArgChange: a,
            keepUnusedDataFor: s,
            reducerPath: o,
            invalidationBehavior: u
          }
        });
      Qr(t.util, {
        patchQueryData: h,
        updateQueryData: v,
        upsertQueryData: x,
        prefetch: b,
        resetApiState: E.resetApiState
      }),
        Qr(t.internalActions, E);
      const { middleware: S, actions: C } = VS({
        reducerPath: o,
        context: f,
        queryThunk: m,
        mutationThunk: p,
        api: t,
        assertTagType: d
      });
      Qr(t.util, C), Qr(t, { reducer: y, middleware: S });
      const {
        buildQuerySelector: T,
        buildMutationSelector: R,
        selectInvalidatedBy: k,
        selectCachedArgsForQuery: A
      } = MS({ serializeQueryArgs: i, reducerPath: o, createSelector: e });
      Qr(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: A });
      const {
        buildInitiateQuery: I,
        buildInitiateMutation: L,
        getRunningMutationThunk: D,
        getRunningMutationsThunk: N,
        getRunningQueriesThunk: B,
        getRunningQueryThunk: j
      } = TS({
        queryThunk: m,
        mutationThunk: p,
        api: t,
        serializeQueryArgs: i,
        context: f
      });
      return (
        Qr(t.util, {
          getRunningMutationThunk: D,
          getRunningMutationsThunk: N,
          getRunningQueryThunk: j,
          getRunningQueriesThunk: B
        }),
        {
          name: kp,
          injectEndpoint(F, z) {
            var fe;
            const q = t;
            (fe = q.endpoints)[F] ?? (fe[F] = {}),
              Ev(z)
                ? Qr(
                    q.endpoints[F],
                    { name: F, select: T(F, z), initiate: I(F, z) },
                    g(m, F)
                  )
                : ES(z) &&
                  Qr(
                    q.endpoints[F],
                    { name: F, select: R(), initiate: L(F) },
                    g(p, F)
                  );
          }
        }
      );
    }
  });
function zS(e) {
  return e.type === 'query';
}
function US(e) {
  return e.type === 'mutation';
}
function Ks(e, ...t) {
  return Object.assign(e, ...t);
}
function bc(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var to = WeakMap ? new WeakMap() : void 0,
  HS = ({ endpointName: e, queryArgs: t }) => {
    let r = '';
    const n = to == null ? void 0 : to.get(t);
    if (typeof n == 'string') r = n;
    else {
      const o = JSON.stringify(
        t,
        (i, s) => (
          (s = typeof s == 'bigint' ? { $bigint: s.toString() } : s),
          (s = Or(s)
            ? Object.keys(s)
                .sort()
                .reduce((a, l) => ((a[l] = s[l]), a), {})
            : s),
          s
        )
      );
      Or(t) && (to == null || to.set(t, o)), (r = o);
    }
    return `${e}(${r})`;
  },
  xc = Symbol();
function Mp(e, t, r, n) {
  const o = w.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: r, endpointName: n })
            : e
      }),
      [e, t, r, n]
    ),
    i = w.useRef(o);
  return (
    w.useEffect(() => {
      i.current.serialized !== o.serialized && (i.current = o);
    }, [o]),
    i.current.serialized === o.serialized ? i.current.queryArgs : e
  );
}
function wc(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      ki(t.current, e) || (t.current = e);
    }, [e]),
    ki(t.current, e) ? t.current : e
  );
}
var qS = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  KS = qS(),
  YS = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  GS = YS(),
  XS = () => (KS || GS ? w.useLayoutEffect : w.useEffect),
  QS = XS(),
  ZS = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: bv.pending
        }
      : e;
function JS({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: r, useSelector: n, useStore: o },
    unstable__sideEffectsInRender: i,
    createSelector: s
  },
  serializeQueryArgs: a,
  context: l
}) {
  const c = i ? (p) => p() : w.useEffect;
  return { buildQueryHooks: d, buildMutationHook: m, usePrefetch: f };
  function u(p, h, v) {
    if (h != null && h.endpointName && p.isUninitialized) {
      const { endpointName: S } = h,
        C = l.endpointDefinitions[S];
      a({
        queryArgs: h.originalArgs,
        endpointDefinition: C,
        endpointName: S
      }) === a({ queryArgs: v, endpointDefinition: C, endpointName: S }) &&
        (h = void 0);
    }
    let x = p.isSuccess ? p.data : h == null ? void 0 : h.data;
    x === void 0 && (x = p.data);
    const b = x !== void 0,
      g = p.isLoading,
      y = (!h || h.isLoading || h.isUninitialized) && !b && g,
      E = p.isSuccess || (g && b);
    return {
      ...p,
      data: x,
      currentData: p.data,
      isFetching: g,
      isLoading: y,
      isSuccess: E
    };
  }
  function f(p, h) {
    const v = r(),
      x = wc(h);
    return w.useCallback(
      (b, g) => v(e.util.prefetch(p, b, { ...x, ...g })),
      [p, v, x]
    );
  }
  function d(p) {
    const h = (
        b,
        {
          refetchOnReconnect: g,
          refetchOnFocus: y,
          refetchOnMountOrArgChange: E,
          skip: S = !1,
          pollingInterval: C = 0,
          skipPollingIfUnfocused: T = !1
        } = {}
      ) => {
        const { initiate: R } = e.endpoints[p],
          k = r(),
          A = w.useRef(void 0);
        if (!A.current) {
          const q = k(e.internalActions.internal_getRTKQSubscriptions());
          A.current = q;
        }
        const I = Mp(S ? Mn : b, HS, l.endpointDefinitions[p], p),
          L = wc({
            refetchOnReconnect: g,
            refetchOnFocus: y,
            pollingInterval: C,
            skipPollingIfUnfocused: T
          }),
          D = w.useRef(!1),
          N = w.useRef(void 0);
        let { queryCacheKey: B, requestId: j } = N.current || {},
          F = !1;
        B && j && (F = A.current.isRequestSubscribed(B, j));
        const z = !F && D.current;
        return (
          c(() => {
            D.current = F;
          }),
          c(() => {
            z && (N.current = void 0);
          }, [z]),
          c(() => {
            var J;
            const q = N.current;
            if ((typeof process < 'u', I === Mn)) {
              q == null || q.unsubscribe(), (N.current = void 0);
              return;
            }
            const fe = (J = N.current) == null ? void 0 : J.subscriptionOptions;
            if (!q || q.arg !== I) {
              q == null || q.unsubscribe();
              const ae = k(R(I, { subscriptionOptions: L, forceRefetch: E }));
              N.current = ae;
            } else L !== fe && q.updateSubscriptionOptions(L);
          }, [k, R, E, I, L, z]),
          w.useEffect(
            () => () => {
              var q;
              (q = N.current) == null || q.unsubscribe(), (N.current = void 0);
            },
            []
          ),
          w.useMemo(
            () => ({
              refetch: () => {
                var q;
                if (!N.current) throw new Error(Rt(38));
                return (q = N.current) == null ? void 0 : q.refetch();
              }
            }),
            []
          )
        );
      },
      v = ({
        refetchOnReconnect: b,
        refetchOnFocus: g,
        pollingInterval: y = 0,
        skipPollingIfUnfocused: E = !1
      } = {}) => {
        const { initiate: S } = e.endpoints[p],
          C = r(),
          [T, R] = w.useState(xc),
          k = w.useRef(void 0),
          A = wc({
            refetchOnReconnect: b,
            refetchOnFocus: g,
            pollingInterval: y,
            skipPollingIfUnfocused: E
          });
        c(() => {
          var N, B;
          const D = (N = k.current) == null ? void 0 : N.subscriptionOptions;
          A !== D &&
            ((B = k.current) == null || B.updateSubscriptionOptions(A));
        }, [A]);
        const I = w.useRef(A);
        c(() => {
          I.current = A;
        }, [A]);
        const L = w.useCallback(
          function (D, N = !1) {
            let B;
            return (
              t(() => {
                var j;
                (j = k.current) == null || j.unsubscribe(),
                  (k.current = B =
                    C(
                      S(D, { subscriptionOptions: I.current, forceRefetch: !N })
                    )),
                  R(D);
              }),
              B
            );
          },
          [C, S]
        );
        return (
          w.useEffect(
            () => () => {
              var D;
              (D = k == null ? void 0 : k.current) == null || D.unsubscribe();
            },
            []
          ),
          w.useEffect(() => {
            T !== xc && !k.current && L(T, !0);
          }, [T, L]),
          w.useMemo(() => [L, T], [L, T])
        );
      },
      x = (b, { skip: g = !1, selectFromResult: y } = {}) => {
        const { select: E } = e.endpoints[p],
          S = Mp(g ? Mn : b, a, l.endpointDefinitions[p], p),
          C = w.useRef(void 0),
          T = w.useMemo(
            () =>
              s([E(S), (L, D) => D, (L) => S], u, {
                memoizeOptions: { resultEqualityCheck: ki }
              }),
            [E, S]
          ),
          R = w.useMemo(
            () =>
              y
                ? s([T], y, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : T,
            [T, y]
          ),
          k = n((L) => R(L, C.current), ki),
          A = o(),
          I = T(A.getState(), C.current);
        return (
          QS(() => {
            C.current = I;
          }, [I]),
          k
        );
      };
    return {
      useQueryState: x,
      useQuerySubscription: h,
      useLazyQuerySubscription: v,
      useLazyQuery(b) {
        const [g, y] = v(b),
          E = x(y, { ...b, skip: y === xc }),
          S = w.useMemo(() => ({ lastArg: y }), [y]);
        return w.useMemo(() => [g, E, S], [g, E, S]);
      },
      useQuery(b, g) {
        const y = h(b, g),
          E = x(b, {
            selectFromResult: b === Mn || (g != null && g.skip) ? void 0 : ZS,
            ...g
          }),
          {
            data: S,
            status: C,
            isLoading: T,
            isSuccess: R,
            isError: k,
            error: A
          } = E;
        return (
          w.useDebugValue({
            data: S,
            status: C,
            isLoading: T,
            isSuccess: R,
            isError: k,
            error: A
          }),
          w.useMemo(() => ({ ...E, ...y }), [E, y])
        );
      }
    };
  }
  function m(p) {
    return ({ selectFromResult: h, fixedCacheKey: v } = {}) => {
      const { select: x, initiate: b } = e.endpoints[p],
        g = r(),
        [y, E] = w.useState();
      w.useEffect(
        () => () => {
          (y != null && y.arg.fixedCacheKey) || y == null || y.reset();
        },
        [y]
      );
      const S = w.useCallback(
          function (fe) {
            const J = g(b(fe, { fixedCacheKey: v }));
            return E(J), J;
          },
          [g, b, v]
        ),
        { requestId: C } = y || {},
        T = w.useMemo(
          () =>
            x({
              fixedCacheKey: v,
              requestId: y == null ? void 0 : y.requestId
            }),
          [v, y, x]
        ),
        R = w.useMemo(() => (h ? s([T], h) : T), [h, T]),
        k = n(R, ki),
        A = v == null ? (y == null ? void 0 : y.arg.originalArgs) : void 0,
        I = w.useCallback(() => {
          t(() => {
            y && E(void 0),
              v &&
                g(
                  e.internalActions.removeMutationResult({
                    requestId: C,
                    fixedCacheKey: v
                  })
                );
          });
        }, [g, v, y, C]),
        {
          endpointName: L,
          data: D,
          status: N,
          isLoading: B,
          isSuccess: j,
          isError: F,
          error: z
        } = k;
      w.useDebugValue({
        endpointName: L,
        data: D,
        status: N,
        isLoading: B,
        isSuccess: j,
        isError: F,
        error: z
      });
      const q = w.useMemo(
        () => ({ ...k, originalArgs: A, reset: I }),
        [k, A, I]
      );
      return w.useMemo(() => [S, q], [S, q]);
    };
  }
}
var eE = Symbol(),
  tE = ({
    batch: e = pS,
    hooks: t = { useDispatch: Wo, useSelector: dn, useStore: yv },
    createSelector: r = ad,
    unstable__sideEffectsInRender: n = !1,
    ...o
  } = {}) => ({
    name: eE,
    init(i, { serializeQueryArgs: s }, a) {
      const l = i,
        {
          buildQueryHooks: c,
          buildMutationHook: u,
          usePrefetch: f
        } = JS({
          api: i,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: n,
            createSelector: r
          },
          serializeQueryArgs: s,
          context: a
        });
      return (
        Ks(l, { usePrefetch: f }),
        Ks(a, { batch: e }),
        {
          injectEndpoint(d, m) {
            if (zS(m)) {
              const {
                useQuery: p,
                useLazyQuery: h,
                useLazyQuerySubscription: v,
                useQueryState: x,
                useQuerySubscription: b
              } = c(d);
              Ks(l.endpoints[d], {
                useQuery: p,
                useLazyQuery: h,
                useLazyQuerySubscription: v,
                useQueryState: x,
                useQuerySubscription: b
              }),
                (i[`use${bc(d)}Query`] = p),
                (i[`useLazy${bc(d)}Query`] = h);
            } else if (US(m)) {
              const p = u(d);
              Ks(l.endpoints[d], { useMutation: p }),
                (i[`use${bc(d)}Mutation`] = p);
            }
          }
        }
      );
    }
  }),
  Uo = OS(WS(), tE());
const Ma = Uo({
    reducerPath: 'collectionApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getCollectionList: e.query({
        query: () => 'CollectionRegistration/GetCollectionList?appId=1'
      }),
      getCollectionById: e.query({
        query: (t) =>
          `CollectionRegistration/GetCollectionByCollectionId?collectionId=${t}`
      }),
      deleteCollectionById: e.mutation({
        query: (t) => ({
          url: `CollectionRegistration/DeleteCollectionByCollectionId?collectionId=${t}`,
          method: 'DELETE'
        })
      }),
      saveCollection: e.mutation({
        query: (t) => ({
          url: 'CollectionRegistration/SaveCollection',
          method: 'POST',
          body: t
        })
      })
    })
  }),
  {
    useGetCollectionListQuery: SV,
    useGetCollectionByIdQuery: EV,
    useDeleteCollectionByIdMutation: CV,
    useSaveCollectionMutation: PV
  } = Ma,
  Oa = Uo({
    reducerPath: 'designApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getDesignListByCollectionId: e.query({
        query: (t) =>
          `DesignRegistration/GetDesignListByCollectionId?Collectionid=${t}`
      })
    })
  }),
  { useGetDesignListByCollectionIdQuery: TV } = Oa,
  Aa = Uo({
    reducerPath: 'lookupApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getLookUpList: e.query({ query: () => 'Common/GetLookUpList?appId=1' })
    })
  }),
  { useGetLookUpListQuery: RV } = Aa,
  _a = Uo({
    reducerPath: 'prePlanningHeaderApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getCollectionFromPlanningHeader: e.query({
        query: () => 'PrePlanning/GetCollectionListFromPlanningHeader'
      }),
      getDesignFromPlanningHeaderByCollectionId: e.query({
        query: (t) =>
          `PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${t}`
      }),
      getPrePlanningHeaderByDesignId: e.query({
        query: (t) => `PrePlanning/GetPrePlanningHeaderByDesignId?designId=${t}`
      }),
      getFabricFromPrePlanningByBatchNo: e.query({
        query: ({ batchNo: t, processType: r }) =>
          `Fabrication/GetFabricFromPrePlanningByBatchNo?batchNo=${t}&processType=${r}`
      }),
      getFabricRequisitionListByBatchNo: e.query({
        query: (t) =>
          `Fabrication/GetFabricRequisitionListByBatchNo?batchNo=${t}`
      }),
      getComponentsByBatchNo: e.query({
        query: (t) => `Embroidery/GetComponentsByBatchNo?batchNo=${t}`
      }),
      getFabricByComponentsAndBatchNo: e.query({
        query: ({ batchNo: t, componentId: r }) =>
          `Embroidery/GetFabricByComponentsAndBatchNo?batchNo=${t}&componentId=${r}`
      }),
      getFabricColorByComponentsBatchNoAndFabricId: e.query({
        query: ({ batchNo: t, componentId: r, fabricId: n }) =>
          `Embroidery/GetFabricColorByComponentsBatchNoAndFabricId?batchNo=${t}&componentId=${r}&fabricId=${n}`
      }),
      getEmbroideryListByBatchNo: e.query({
        query: (t) => `Embroidery/GetEmbroideryListByBatchNo?batchNo=${t}`
      }),
      getSchffiliListByBatchNo: e.query({
        query: (t) => `Schiffli/GetSchffiliListByBatchNo?batchNo=${t}`
      }),
      getFabricColorFromPrePlanningByFabricId: e.query({
        query: ({ fabricId: t, planningHeaderId: r }) =>
          `DyeingPrinting/GetFabricColorFromPrePlanningByFabricId?fabricId=${t}&PlanningHeaderId=${r}`
      }),
      getDyeingPrintingListByBatchNo: e.query({
        query: (t) =>
          `DyeingPrinting/GetDyeingPrintingListByBatchNo?batchNo=${t}`
      }),
      getPrePlanningByPlanningHeaderId: e.query({
        query: (t) =>
          `PrePlanning/GetPrePlanningByPlanningHeaderId?planningHeaderId=${t}`
      }),
      getAdditionalProcessListByBatchNo: e.query({
        query: (t) =>
          `AdditionalProcess/GetAdditionalProcessListByBatchNo?batchNo=${t}`
      }),
      getAdditionalProcessDetailsByAdditionalProcessId: e.query({
        query: (t) =>
          `AdditionalProcess/GetAdditionalProcessDetailsByAdditionalProcessId?additionalProcessId=${t}`
      }),
      getDyeingPrintingDetailsByDpId: e.query({
        query: (t) => `DyeingPrinting/GetDyeingPrintingDetailsByDpId?dpId=${t}`
      }),
      getEmbroideryDetailsListByEmbroideryId: e.query({
        query: (t) =>
          `Embroidery/GetEmbroideryDetailsListByEmbroideryId?embroideryId=${t}`
      })
    })
  }),
  {
    useGetCollectionFromPlanningHeaderQuery: kV,
    useGetDesignFromPlanningHeaderByCollectionIdQuery: MV,
    useGetPrePlanningHeaderByDesignIdQuery: OV,
    useGetFabricFromPrePlanningByBatchNoQuery: AV,
    useGetFabricRequisitionListByBatchNoQuery: _V,
    useGetComponentsByBatchNoQuery: DV,
    useGetFabricByComponentsAndBatchNoQuery: IV,
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery: LV,
    useGetEmbroideryListByBatchNoQuery: $V,
    useGetSchffiliListByBatchNoQuery: jV,
    useGetFabricColorFromPrePlanningByFabricIdQuery: BV,
    useGetDyeingPrintingListByBatchNoQuery: NV,
    useGetPrePlanningByPlanningHeaderIdQuery: FV,
    useGetAdditionalProcessListByBatchNoQuery: VV,
    useGetAdditionalProcessDetailsByAdditionalProcessIdQuery: WV,
    useGetDyeingPrintingDetailsByDpIdQuery: zV,
    useGetEmbroideryDetailsListByEmbroideryIdQuery: UV
  } = _a,
  Da = Uo({
    reducerPath: 'userManagementApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getRoleList: e.query({ query: () => 'Role/GetRoleList?appId=1' }),
      getMainMenuList: e.query({ query: () => 'Menu/GetMainMenuList' }),
      getSubMenuList: e.query({ query: () => 'Menu/GetSubMenuList' }),
      getUsersList: e.query({ query: () => 'Users/GetUsersList' }),
      getAssignedRolesByEmpId: e.query({
        query: (t) => `Users/GetAssignedRolesByEmpId?appId=1&empId=${t}`
      })
    })
  }),
  {
    useGetRoleListQuery: HV,
    useGetMainMenuListQuery: qV,
    useGetSubMenuListQuery: KV,
    useGetUsersListQuery: YV,
    useGetAssignedRolesByEmpIdQuery: GV
  } = Da,
  Ia = Uo({
    reducerPath: 'dashboardApi',
    baseQuery: zo({ baseUrl: 'https://gecxc.com:449/api/' }),
    endpoints: (e) => ({
      getPlanningDashboardByYear: e.query({
        query: () => 'Dashboard/GetPlanningDashboardByYear?year=2024'
      })
    })
  }),
  { useGetPlanningDashboardByYearQuery: XV } = Ia,
  uu = {
    basename: '/Elaf',
    defaultPath: '/dashboard',
    fontFamily: "'Roboto', sans-serif",
    borderRadius: 12
  },
  md = '@customization/SET_MENU',
  La = '@customization/MENU_OPEN',
  Tv = '@customization/SET_FONT_FAMILY',
  Rv = '@customization/SET_BORDER_RADIUS',
  rE = {
    isOpen: [],
    defaultId: 'default',
    fontFamily: uu.fontFamily,
    borderRadius: uu.borderRadius,
    opened: !0
  },
  nE = (e = rE, t) => {
    let r;
    switch (t.type) {
      case La:
        return (r = t.id), { ...e, isOpen: [r] };
      case md:
        return { ...e, opened: t.opened };
      case Tv:
        return { ...e, fontFamily: t.fontFamily };
      case Rv:
        return { ...e, borderRadius: t.borderRadius };
      default:
        return e;
    }
  },
  oE = nd({
    customization: nE,
    [Ma.reducerPath]: Ma.reducer,
    [Oa.reducerPath]: Oa.reducer,
    [Aa.reducerPath]: Aa.reducer,
    [_a.reducerPath]: _a.reducer,
    [Da.reducerPath]: Da.reducer,
    [Ia.reducerPath]: Ia.reducer
  }),
  iE = C1({
    reducer: oE,
    middleware: (e) =>
      e()
        .concat(Ma.middleware)
        .concat(Oa.middleware)
        .concat(Aa.middleware)
        .concat(_a.middleware)
        .concat(Da.middleware)
        .concat(Ia.middleware)
  }),
  kv = w.createContext(),
  sE = ({ children: e }) => {
    const [t, r] = w.useState(() => {
      const n = localStorage.getItem('user');
      return n ? JSON.parse(n) : null;
    });
    return (
      w.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(t));
      }, [t]),
      P.jsx(kv.Provider, { value: { user: t, setUser: r }, children: e })
    );
  },
  aE = () => {
    const e = w.useContext(kv);
    if (!e) throw new Error('useUser must be used within a UserProvider');
    return e;
  };
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qe() {
  return (
    (qe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qe.apply(this, arguments)
  );
}
var nt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(nt || (nt = {}));
const Op = 'popstate';
function Mv(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: s, hash: a } = n.location;
    return Ki(
      '',
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function r(n, o) {
    return typeof o == 'string' ? o : Wn(o);
  }
  return cE(t, r, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Oo(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function lE() {
  return Math.random().toString(36).substr(2, 8);
}
function Ap(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ki(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    qe(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? fn(t) : t,
      { state: r, key: (t && t.key) || n || lE() }
    )
  );
}
function Wn(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function fn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function cE(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    s = o.history,
    a = nt.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(qe({}, s.state, { idx: c }), ''));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = nt.Pop;
    let v = u(),
      x = v == null ? null : v - c;
    (c = v), l && l({ action: a, location: h.location, delta: x });
  }
  function d(v, x) {
    a = nt.Push;
    let b = Ki(h.location, v, x);
    c = u() + 1;
    let g = Ap(b, c),
      y = h.createHref(b);
    try {
      s.pushState(g, '', y);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      o.location.assign(y);
    }
    i && l && l({ action: a, location: h.location, delta: 1 });
  }
  function m(v, x) {
    a = nt.Replace;
    let b = Ki(h.location, v, x);
    c = u();
    let g = Ap(b, c),
      y = h.createHref(b);
    s.replaceState(g, '', y),
      i && l && l({ action: a, location: h.location, delta: 0 });
  }
  function p(v) {
    let x = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      b = typeof v == 'string' ? v : Wn(v);
    return (
      (b = b.replace(/ $/, '%20')),
      ge(
        x,
        'No window.location.(origin|href) available to create URL for href: ' +
          b
      ),
      new URL(b, x)
    );
  }
  let h = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(v) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Op, f),
        (l = v),
        () => {
          o.removeEventListener(Op, f), (l = null);
        }
      );
    },
    createHref(v) {
      return t(o, v);
    },
    createURL: p,
    encodeLocation(v) {
      let x = p(v);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: d,
    replace: m,
    go(v) {
      return s.go(v);
    }
  };
  return h;
}
var Ne;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Ne || (Ne = {}));
const uE = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children'
]);
function dE(e) {
  return e.index === !0;
}
function Yi(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let s = [...r, String(i)],
        a = typeof o.id == 'string' ? o.id : s.join('-');
      if (
        (ge(
          o.index !== !0 || !o.children,
          'Cannot specify children on an index route'
        ),
        ge(
          !n[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        dE(o))
      ) {
        let l = qe({}, o, t(o), { id: a });
        return (n[a] = l), l;
      } else {
        let l = qe({}, o, t(o), { id: a, children: void 0 });
        return (
          (n[a] = l), o.children && (l.children = Yi(o.children, t, s, n)), l
        );
      }
    })
  );
}
function Rn(e, t, r) {
  return r === void 0 && (r = '/'), fa(e, t, r, !1);
}
function fa(e, t, r, n) {
  let o = typeof t == 'string' ? fn(t) : t,
    i = Ho(o.pathname || '/', r);
  if (i == null) return null;
  let s = Ov(e);
  pE(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = CE(i);
    a = SE(s[l], c, n);
  }
  return a;
}
function fE(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function Ov(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '');
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    l.relativePath.startsWith('/') &&
      (ge(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let c = Fr([n, l.relativePath]),
      u = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ge(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".')
      ),
      Ov(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: xE(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, s);
      else for (let l of Av(i.path)) o(i, s, l);
    }),
    t
  );
}
function Av(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '');
  if (n.length === 0) return o ? [i, ''] : [i];
  let s = Av(n.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function pE(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : wE(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const hE = /^:[\w-]+$/,
  mE = 3,
  gE = 2,
  vE = 1,
  yE = 10,
  bE = -2,
  _p = (e) => e === '*';
function xE(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(_p) && (n += bE),
    t && (n += gE),
    r
      .filter((o) => !_p(o))
      .reduce((o, i) => o + (hE.test(i) ? mE : i === '' ? vE : yE), n)
  );
}
function wE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function SE(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    o = {},
    i = '/',
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      f = Dp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u
      ),
      d = l.route;
    if (
      (!f &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (f = Dp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Fr([i, f.pathname]),
        pathnameBase: RE(Fr([i, f.pathnameBase])),
        route: d
      }),
      f.pathnameBase !== '/' && (i = Fr([i, f.pathnameBase]));
  }
  return s;
}
function Dp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = EE(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: n.reduce((c, u, f) => {
      let { paramName: d, isOptional: m } = u;
      if (d === '*') {
        let h = a[f] || '';
        s = i.slice(0, i.length - h.length).replace(/(.)\/+$/, '$1');
      }
      const p = a[f];
      return (
        m && !p ? (c[d] = void 0) : (c[d] = (p || '').replace(/%2F/g, '/')), c
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function EE(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Oo(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), n]
  );
}
function CE(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Oo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Ho(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function PE(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: o = ''
  } = typeof e == 'string' ? fn(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : TE(r, t)) : t,
    search: kE(n),
    hash: ME(o)
  };
}
function TE(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Sc(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _v(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function pl(e, t) {
  let r = _v(e);
  return t
    ? r.map((n, o) => (o === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function hl(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == 'string'
    ? (o = fn(e))
    : ((o = qe({}, e)),
      ge(
        !o.pathname || !o.pathname.includes('?'),
        Sc('?', 'pathname', 'search', o)
      ),
      ge(
        !o.pathname || !o.pathname.includes('#'),
        Sc('#', 'pathname', 'hash', o)
      ),
      ge(!o.search || !o.search.includes('#'), Sc('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    s = i ? '/' : o.pathname,
    a;
  if (s == null) a = r;
  else {
    let f = t.length - 1;
    if (!n && s.startsWith('..')) {
      let d = s.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      o.pathname = d.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let l = PE(o, a),
    c = s && s !== '/' && s.endsWith('/'),
    u = (i || s === '.') && r.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const Fr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  RE = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  kE = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  ME = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class gd {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function ml(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Dv = ['post', 'put', 'patch', 'delete'],
  OE = new Set(Dv),
  AE = ['get', ...Dv],
  _E = new Set(AE),
  DE = new Set([301, 302, 303, 307, 308]),
  IE = new Set([307, 308]),
  Ec = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  LE = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  si = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $E = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Iv = 'remix-router-transitions';
function jE(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    n = !r;
  ge(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let O = e.detectErrorBoundary;
    o = (_) => ({ hasErrorBoundary: O(_) });
  } else o = $E;
  let i = {},
    s = Yi(e.routes, o, void 0, i),
    a,
    l = e.basename || '/',
    c = e.unstable_dataStrategy || WE,
    u = e.unstable_patchRoutesOnMiss,
    f = qe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1
      },
      e.future
    ),
    d = null,
    m = new Set(),
    p = null,
    h = null,
    v = null,
    x = e.hydrationData != null,
    b = Rn(s, e.history.location, l),
    g = null;
  if (b == null && !u) {
    let O = At(404, { pathname: e.history.location.pathname }),
      { matches: _, route: $ } = zp(s);
    (b = _), (g = { [$.id]: O });
  }
  b && u && fc(b, s, e.history.location.pathname).active && (b = null);
  let y;
  if (!b) (y = !1), (b = []);
  else if (b.some((O) => O.route.lazy)) y = !1;
  else if (!b.some((O) => O.route.loader)) y = !0;
  else if (f.v7_partialHydration) {
    let O = e.hydrationData ? e.hydrationData.loaderData : null,
      _ = e.hydrationData ? e.hydrationData.errors : null,
      $ = (V) =>
        V.route.loader
          ? typeof V.route.loader == 'function' && V.route.loader.hydrate === !0
            ? !1
            : (O && O[V.route.id] !== void 0) || (_ && _[V.route.id] !== void 0)
          : !0;
    if (_) {
      let V = b.findIndex((H) => _[H.route.id] !== void 0);
      y = b.slice(0, V + 1).every($);
    } else y = b.every($);
  } else y = e.hydrationData != null;
  let E,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: y,
      navigation: Ec,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map()
    },
    C = nt.Pop,
    T = !1,
    R,
    k = !1,
    A = new Map(),
    I = null,
    L = !1,
    D = !1,
    N = [],
    B = [],
    j = new Map(),
    F = 0,
    z = -1,
    q = new Map(),
    fe = new Set(),
    J = new Map(),
    ae = new Map(),
    ve = new Set(),
    ye = new Map(),
    G = new Map(),
    Ae = new Map(),
    Re = !1;
  function _e() {
    if (
      ((d = e.history.listen((O) => {
        let { action: _, location: $, delta: V } = O;
        if (Re) {
          Re = !1;
          return;
        }
        Oo(
          G.size === 0 || V != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let H = Gf({
          currentLocation: S.location,
          nextLocation: $,
          historyAction: _
        });
        if (H && V != null) {
          (Re = !0),
            e.history.go(V * -1),
            Bs(H, {
              state: 'blocked',
              location: $,
              proceed() {
                Bs(H, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: $
                }),
                  e.history.go(V);
              },
              reset() {
                let X = new Map(S.blockers);
                X.set(H, si), je({ blockers: X });
              }
            });
          return;
        }
        return xt(_, $);
      })),
      r)
    ) {
      tC(t, A);
      let O = () => rC(t, A);
      t.addEventListener('pagehide', O),
        (I = () => t.removeEventListener('pagehide', O));
    }
    return S.initialized || xt(nt.Pop, S.location, { initialHydration: !0 }), E;
  }
  function ft() {
    d && d(),
      I && I(),
      m.clear(),
      R && R.abort(),
      S.fetchers.forEach((O, _) => xe(_)),
      S.blockers.forEach((O, _) => Yf(_));
  }
  function It(O) {
    return m.add(O), () => m.delete(O);
  }
  function je(O, _) {
    _ === void 0 && (_ = {}), (S = qe({}, S, O));
    let $ = [],
      V = [];
    f.v7_fetcherPersist &&
      S.fetchers.forEach((H, X) => {
        H.state === 'idle' && (ve.has(X) ? V.push(X) : $.push(X));
      }),
      [...m].forEach((H) =>
        H(S, {
          deletedFetchers: V,
          unstable_viewTransitionOpts: _.viewTransitionOpts,
          unstable_flushSync: _.flushSync === !0
        })
      ),
      f.v7_fetcherPersist &&
        ($.forEach((H) => S.fetchers.delete(H)), V.forEach((H) => xe(H)));
  }
  function Qe(O, _, $) {
    var V, H;
    let { flushSync: X } = $ === void 0 ? {} : $,
      se =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        br(S.navigation.formMethod) &&
        S.navigation.state === 'loading' &&
        ((V = O.state) == null ? void 0 : V._isRedirect) !== !0,
      U;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? (U = _.actionData)
        : (U = null)
      : se
        ? (U = S.actionData)
        : (U = null);
    let pe = _.loaderData
        ? Vp(S.loaderData, _.loaderData, _.matches || [], _.errors)
        : S.loaderData,
      te = S.blockers;
    te.size > 0 && ((te = new Map(te)), te.forEach((Ee, Le) => te.set(Le, si)));
    let re =
      T === !0 ||
      (S.navigation.formMethod != null &&
        br(S.navigation.formMethod) &&
        ((H = O.state) == null ? void 0 : H._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      L ||
        C === nt.Pop ||
        (C === nt.Push
          ? e.history.push(O, O.state)
          : C === nt.Replace && e.history.replace(O, O.state));
    let De;
    if (C === nt.Pop) {
      let Ee = A.get(S.location.pathname);
      Ee && Ee.has(O.pathname)
        ? (De = { currentLocation: S.location, nextLocation: O })
        : A.has(O.pathname) &&
          (De = { currentLocation: O, nextLocation: S.location });
    } else if (k) {
      let Ee = A.get(S.location.pathname);
      Ee
        ? Ee.add(O.pathname)
        : ((Ee = new Set([O.pathname])), A.set(S.location.pathname, Ee)),
        (De = { currentLocation: S.location, nextLocation: O });
    }
    je(
      qe({}, _, {
        actionData: U,
        loaderData: pe,
        historyAction: C,
        location: O,
        initialized: !0,
        navigation: Ec,
        revalidation: 'idle',
        restoreScrollPosition: Qf(O, _.matches || S.matches),
        preventScrollReset: re,
        blockers: te
      }),
      { viewTransitionOpts: De, flushSync: X === !0 }
    ),
      (C = nt.Pop),
      (T = !1),
      (k = !1),
      (L = !1),
      (D = !1),
      (N = []),
      (B = []);
  }
  async function pt(O, _) {
    if (typeof O == 'number') {
      e.history.go(O);
      return;
    }
    let $ = du(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        O,
        f.v7_relativeSplatPath,
        _ == null ? void 0 : _.fromRouteId,
        _ == null ? void 0 : _.relative
      ),
      {
        path: V,
        submission: H,
        error: X
      } = Ip(f.v7_normalizeFormMethod, !1, $, _),
      se = S.location,
      U = Ki(S.location, V, _ && _.state);
    U = qe({}, U, e.history.encodeLocation(U));
    let pe = _ && _.replace != null ? _.replace : void 0,
      te = nt.Push;
    pe === !0
      ? (te = nt.Replace)
      : pe === !1 ||
        (H != null &&
          br(H.formMethod) &&
          H.formAction === S.location.pathname + S.location.search &&
          (te = nt.Replace));
    let re =
        _ && 'preventScrollReset' in _ ? _.preventScrollReset === !0 : void 0,
      De = (_ && _.unstable_flushSync) === !0,
      Ee = Gf({ currentLocation: se, nextLocation: U, historyAction: te });
    if (Ee) {
      Bs(Ee, {
        state: 'blocked',
        location: U,
        proceed() {
          Bs(Ee, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: U
          }),
            pt(O, _);
        },
        reset() {
          let Le = new Map(S.blockers);
          Le.set(Ee, si), je({ blockers: Le });
        }
      });
      return;
    }
    return await xt(te, U, {
      submission: H,
      pendingError: X,
      preventScrollReset: re,
      replace: _ && _.replace,
      enableViewTransition: _ && _.unstable_viewTransition,
      flushSync: De
    });
  }
  function bn() {
    if (
      (ee(),
      je({ revalidation: 'loading' }),
      S.navigation.state !== 'submitting')
    ) {
      if (S.navigation.state === 'idle') {
        xt(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      xt(C || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation
      });
    }
  }
  async function xt(O, _, $) {
    R && R.abort(),
      (R = null),
      (C = O),
      (L = ($ && $.startUninterruptedRevalidation) === !0),
      Mw(S.location, S.matches),
      (T = ($ && $.preventScrollReset) === !0),
      (k = ($ && $.enableViewTransition) === !0);
    let V = a || s,
      H = $ && $.overrideNavigation,
      X = Rn(V, _, l),
      se = ($ && $.flushSync) === !0,
      U = fc(X, V, _.pathname);
    if ((U.active && U.matches && (X = U.matches), !X)) {
      let { error: Te, notFoundMatches: ht, route: rt } = uc(_.pathname);
      Qe(
        _,
        { matches: ht, loaderData: {}, errors: { [rt.id]: Te } },
        { flushSync: se }
      );
      return;
    }
    if (
      S.initialized &&
      !D &&
      YE(S.location, _) &&
      !($ && $.submission && br($.submission.formMethod))
    ) {
      Qe(_, { matches: X }, { flushSync: se });
      return;
    }
    R = new AbortController();
    let pe = ro(e.history, _, R.signal, $ && $.submission),
      te;
    if ($ && $.pendingError)
      te = [Mi(X).route.id, { type: Ne.error, error: $.pendingError }];
    else if ($ && $.submission && br($.submission.formMethod)) {
      let Te = await or(pe, _, $.submission, X, U.active, {
        replace: $.replace,
        flushSync: se
      });
      if (Te.shortCircuited) return;
      if (Te.pendingActionResult) {
        let [ht, rt] = Te.pendingActionResult;
        if (Yt(rt) && ml(rt.error) && rt.error.status === 404) {
          (R = null),
            Qe(_, {
              matches: Te.matches,
              loaderData: {},
              errors: { [ht]: rt.error }
            });
          return;
        }
      }
      (X = Te.matches || X),
        (te = Te.pendingActionResult),
        (H = Cc(_, $.submission)),
        (se = !1),
        (U.active = !1),
        (pe = ro(e.history, pe.url, pe.signal));
    }
    let {
      shortCircuited: re,
      matches: De,
      loaderData: Ee,
      errors: Le
    } = await Ir(
      pe,
      _,
      X,
      U.active,
      H,
      $ && $.submission,
      $ && $.fetcherSubmission,
      $ && $.replace,
      $ && $.initialHydration === !0,
      se,
      te
    );
    re ||
      ((R = null),
      Qe(_, qe({ matches: De || X }, Wp(te), { loaderData: Ee, errors: Le })));
  }
  async function or(O, _, $, V, H, X) {
    X === void 0 && (X = {}), ee();
    let se = JE(_, $);
    if ((je({ navigation: se }, { flushSync: X.flushSync === !0 }), H)) {
      let te = await Fs(V, _.pathname, O.signal);
      if (te.type === 'aborted') return { shortCircuited: !0 };
      if (te.type === 'error') {
        let { error: re, notFoundMatches: De, route: Ee } = Ns(_.pathname, te);
        return {
          matches: De,
          pendingActionResult: [Ee.id, { type: Ne.error, error: re }]
        };
      } else if (te.matches) V = te.matches;
      else {
        let { notFoundMatches: re, error: De, route: Ee } = uc(_.pathname);
        return {
          matches: re,
          pendingActionResult: [Ee.id, { type: Ne.error, error: De }]
        };
      }
    }
    let U,
      pe = wi(V, _);
    if (!pe.route.action && !pe.route.lazy)
      U = {
        type: Ne.error,
        error: At(405, {
          method: O.method,
          pathname: _.pathname,
          routeId: pe.route.id
        })
      };
    else if (((U = (await ne('action', O, [pe], V))[0]), O.signal.aborted))
      return { shortCircuited: !0 };
    if (An(U)) {
      let te;
      return (
        X && X.replace != null
          ? (te = X.replace)
          : (te =
              Bp(U.response.headers.get('Location'), new URL(O.url), l) ===
              S.location.pathname + S.location.search),
        await st(O, U, { submission: $, replace: te }),
        { shortCircuited: !0 }
      );
    }
    if (On(U)) throw At(400, { type: 'defer-action' });
    if (Yt(U)) {
      let te = Mi(V, pe.route.id);
      return (
        (X && X.replace) !== !0 && (C = nt.Push),
        { matches: V, pendingActionResult: [te.route.id, U] }
      );
    }
    return { matches: V, pendingActionResult: [pe.route.id, U] };
  }
  async function Ir(O, _, $, V, H, X, se, U, pe, te, re) {
    let De = H || Cc(_, X),
      Ee = X || se || qp(De),
      Le = !L && (!f.v7_partialHydration || !pe);
    if (V) {
      if (Le) {
        let Ye = Gr(re);
        je(qe({ navigation: De }, Ye !== void 0 ? { actionData: Ye } : {}), {
          flushSync: te
        });
      }
      let me = await Fs($, _.pathname, O.signal);
      if (me.type === 'aborted') return { shortCircuited: !0 };
      if (me.type === 'error') {
        let { error: Ye, notFoundMatches: Kt, route: Be } = Ns(_.pathname, me);
        return { matches: Kt, loaderData: {}, errors: { [Be.id]: Ye } };
      } else if (me.matches) $ = me.matches;
      else {
        let { error: Ye, notFoundMatches: Kt, route: Be } = uc(_.pathname);
        return { matches: Kt, loaderData: {}, errors: { [Be.id]: Ye } };
      }
    }
    let Te = a || s,
      [ht, rt] = Lp(
        e.history,
        S,
        $,
        Ee,
        _,
        f.v7_partialHydration && pe === !0,
        f.unstable_skipActionErrorRevalidation,
        D,
        N,
        B,
        ve,
        J,
        fe,
        Te,
        l,
        re
      );
    if (
      (dc(
        (me) =>
          !($ && $.some((Ye) => Ye.route.id === me)) ||
          (ht && ht.some((Ye) => Ye.route.id === me))
      ),
      (z = ++F),
      ht.length === 0 && rt.length === 0)
    ) {
      let me = ri();
      return (
        Qe(
          _,
          qe(
            {
              matches: $,
              loaderData: {},
              errors: re && Yt(re[1]) ? { [re[0]]: re[1].error } : null
            },
            Wp(re),
            me ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: te }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Le) {
      let me = {};
      if (!V) {
        me.navigation = De;
        let Ye = Gr(re);
        Ye !== void 0 && (me.actionData = Ye);
      }
      rt.length > 0 && (me.fetchers = wt(rt)), je(me, { flushSync: te });
    }
    rt.forEach((me) => {
      j.has(me.key) && tt(me.key),
        me.controller && j.set(me.key, me.controller);
    });
    let ni = () => rt.forEach((me) => tt(me.key));
    R && R.signal.addEventListener('abort', ni);
    let { loaderResults: Xr, fetcherResults: Xn } = await be(
      S.matches,
      $,
      ht,
      rt,
      O
    );
    if (O.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener('abort', ni),
      rt.forEach((me) => j.delete(me.key));
    let Qn = Up([...Xr, ...Xn]);
    if (Qn) {
      if (Qn.idx >= ht.length) {
        let me = rt[Qn.idx - ht.length].key;
        fe.add(me);
      }
      return await st(O, Qn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: Zn, errors: Sr } = Fp(S, $, ht, Xr, re, rt, Xn, ye);
    ye.forEach((me, Ye) => {
      me.subscribe((Kt) => {
        (Kt || me.done) && ye.delete(Ye);
      });
    }),
      f.v7_partialHydration &&
        pe &&
        S.errors &&
        Object.entries(S.errors)
          .filter((me) => {
            let [Ye] = me;
            return !ht.some((Kt) => Kt.route.id === Ye);
          })
          .forEach((me) => {
            let [Ye, Kt] = me;
            Sr = Object.assign(Sr || {}, { [Ye]: Kt });
          });
    let Vs = ri(),
      Ws = Kf(z),
      zs = Vs || Ws || rt.length > 0;
    return qe(
      { matches: $, loaderData: Zn, errors: Sr },
      zs ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Gr(O) {
    if (O && !Yt(O[1])) return { [O[0]]: O[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function wt(O) {
    return (
      O.forEach((_) => {
        let $ = S.fetchers.get(_.key),
          V = ai(void 0, $ ? $.data : void 0);
        S.fetchers.set(_.key, V);
      }),
      new Map(S.fetchers)
    );
  }
  function Ht(O, _, $, V) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(O) && tt(O);
    let H = (V && V.unstable_flushSync) === !0,
      X = a || s,
      se = du(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        $,
        f.v7_relativeSplatPath,
        _,
        V == null ? void 0 : V.relative
      ),
      U = Rn(X, se, l),
      pe = fc(U, X, se);
    if ((pe.active && pe.matches && (U = pe.matches), !U)) {
      Y(O, _, At(404, { pathname: se }), { flushSync: H });
      return;
    }
    let {
      path: te,
      submission: re,
      error: De
    } = Ip(f.v7_normalizeFormMethod, !0, se, V);
    if (De) {
      Y(O, _, De, { flushSync: H });
      return;
    }
    let Ee = wi(U, te);
    if (((T = (V && V.preventScrollReset) === !0), re && br(re.formMethod))) {
      at(O, _, te, Ee, U, pe.active, H, re);
      return;
    }
    J.set(O, { routeId: _, path: te }), qt(O, _, te, Ee, U, pe.active, H, re);
  }
  async function at(O, _, $, V, H, X, se, U) {
    ee(), J.delete(O);
    function pe(Be) {
      if (!Be.route.action && !Be.route.lazy) {
        let Lr = At(405, { method: U.formMethod, pathname: $, routeId: _ });
        return Y(O, _, Lr, { flushSync: se }), !0;
      }
      return !1;
    }
    if (!X && pe(V)) return;
    let te = S.fetchers.get(O);
    he(O, eC(U, te), { flushSync: se });
    let re = new AbortController(),
      De = ro(e.history, $, re.signal, U);
    if (X) {
      let Be = await Fs(H, $, De.signal);
      if (Be.type === 'aborted') return;
      if (Be.type === 'error') {
        let { error: Lr } = Ns($, Be);
        Y(O, _, Lr, { flushSync: se });
        return;
      } else if (Be.matches) {
        if (((H = Be.matches), (V = wi(H, $)), pe(V))) return;
      } else {
        Y(O, _, At(404, { pathname: $ }), { flushSync: se });
        return;
      }
    }
    j.set(O, re);
    let Ee = F,
      Te = (await ne('action', De, [V], H))[0];
    if (De.signal.aborted) {
      j.get(O) === re && j.delete(O);
      return;
    }
    if (f.v7_fetcherPersist && ve.has(O)) {
      if (An(Te) || Yt(Te)) {
        he(O, Zr(void 0));
        return;
      }
    } else {
      if (An(Te))
        if ((j.delete(O), z > Ee)) {
          he(O, Zr(void 0));
          return;
        } else
          return fe.add(O), he(O, ai(U)), st(De, Te, { fetcherSubmission: U });
      if (Yt(Te)) {
        Y(O, _, Te.error);
        return;
      }
    }
    if (On(Te)) throw At(400, { type: 'defer-action' });
    let ht = S.navigation.location || S.location,
      rt = ro(e.history, ht, re.signal),
      ni = a || s,
      Xr =
        S.navigation.state !== 'idle'
          ? Rn(ni, S.navigation.location, l)
          : S.matches;
    ge(Xr, "Didn't find any matches after fetcher action");
    let Xn = ++F;
    q.set(O, Xn);
    let Qn = ai(U, Te.data);
    S.fetchers.set(O, Qn);
    let [Zn, Sr] = Lp(
      e.history,
      S,
      Xr,
      U,
      ht,
      !1,
      f.unstable_skipActionErrorRevalidation,
      D,
      N,
      B,
      ve,
      J,
      fe,
      ni,
      l,
      [V.route.id, Te]
    );
    Sr.filter((Be) => Be.key !== O).forEach((Be) => {
      let Lr = Be.key,
        Zf = S.fetchers.get(Lr),
        _w = ai(void 0, Zf ? Zf.data : void 0);
      S.fetchers.set(Lr, _w),
        j.has(Lr) && tt(Lr),
        Be.controller && j.set(Lr, Be.controller);
    }),
      je({ fetchers: new Map(S.fetchers) });
    let Vs = () => Sr.forEach((Be) => tt(Be.key));
    re.signal.addEventListener('abort', Vs);
    let { loaderResults: Ws, fetcherResults: zs } = await be(
      S.matches,
      Xr,
      Zn,
      Sr,
      rt
    );
    if (re.signal.aborted) return;
    re.signal.removeEventListener('abort', Vs),
      q.delete(O),
      j.delete(O),
      Sr.forEach((Be) => j.delete(Be.key));
    let me = Up([...Ws, ...zs]);
    if (me) {
      if (me.idx >= Zn.length) {
        let Be = Sr[me.idx - Zn.length].key;
        fe.add(Be);
      }
      return st(rt, me.result);
    }
    let { loaderData: Ye, errors: Kt } = Fp(
      S,
      S.matches,
      Zn,
      Ws,
      void 0,
      Sr,
      zs,
      ye
    );
    if (S.fetchers.has(O)) {
      let Be = Zr(Te.data);
      S.fetchers.set(O, Be);
    }
    Kf(Xn),
      S.navigation.state === 'loading' && Xn > z
        ? (ge(C, 'Expected pending action'),
          R && R.abort(),
          Qe(S.navigation.location, {
            matches: Xr,
            loaderData: Ye,
            errors: Kt,
            fetchers: new Map(S.fetchers)
          }))
        : (je({
            errors: Kt,
            loaderData: Vp(S.loaderData, Ye, Xr, Kt),
            fetchers: new Map(S.fetchers)
          }),
          (D = !1));
  }
  async function qt(O, _, $, V, H, X, se, U) {
    let pe = S.fetchers.get(O);
    he(O, ai(U, pe ? pe.data : void 0), { flushSync: se });
    let te = new AbortController(),
      re = ro(e.history, $, te.signal);
    if (X) {
      let Te = await Fs(H, $, re.signal);
      if (Te.type === 'aborted') return;
      if (Te.type === 'error') {
        let { error: ht } = Ns($, Te);
        Y(O, _, ht, { flushSync: se });
        return;
      } else if (Te.matches) (H = Te.matches), (V = wi(H, $));
      else {
        Y(O, _, At(404, { pathname: $ }), { flushSync: se });
        return;
      }
    }
    j.set(O, te);
    let De = F,
      Le = (await ne('loader', re, [V], H))[0];
    if (
      (On(Le) && (Le = (await Nv(Le, re.signal, !0)) || Le),
      j.get(O) === te && j.delete(O),
      !re.signal.aborted)
    ) {
      if (ve.has(O)) {
        he(O, Zr(void 0));
        return;
      }
      if (An(Le))
        if (z > De) {
          he(O, Zr(void 0));
          return;
        } else {
          fe.add(O), await st(re, Le);
          return;
        }
      if (Yt(Le)) {
        Y(O, _, Le.error);
        return;
      }
      ge(!On(Le), 'Unhandled fetcher deferred data'), he(O, Zr(Le.data));
    }
  }
  async function st(O, _, $) {
    let {
      submission: V,
      fetcherSubmission: H,
      replace: X
    } = $ === void 0 ? {} : $;
    _.response.headers.has('X-Remix-Revalidate') && (D = !0);
    let se = _.response.headers.get('Location');
    ge(se, 'Expected a Location header on the redirect Response'),
      (se = Bp(se, new URL(O.url), l));
    let U = Ki(S.location, se, { _isRedirect: !0 });
    if (r) {
      let Le = !1;
      if (_.response.headers.has('X-Remix-Reload-Document')) Le = !0;
      else if (vd.test(se)) {
        const Te = e.history.createURL(se);
        Le = Te.origin !== t.location.origin || Ho(Te.pathname, l) == null;
      }
      if (Le) {
        X ? t.location.replace(se) : t.location.assign(se);
        return;
      }
    }
    R = null;
    let pe = X === !0 ? nt.Replace : nt.Push,
      { formMethod: te, formAction: re, formEncType: De } = S.navigation;
    !V && !H && te && re && De && (V = qp(S.navigation));
    let Ee = V || H;
    if (IE.has(_.response.status) && Ee && br(Ee.formMethod))
      await xt(pe, U, {
        submission: qe({}, Ee, { formAction: se }),
        preventScrollReset: T
      });
    else {
      let Le = Cc(U, V);
      await xt(pe, U, {
        overrideNavigation: Le,
        fetcherSubmission: H,
        preventScrollReset: T
      });
    }
  }
  async function ne(O, _, $, V) {
    try {
      let H = await zE(c, O, _, $, V, i, o);
      return await Promise.all(
        H.map((X, se) => {
          if (XE(X)) {
            let U = X.result;
            return {
              type: Ne.redirect,
              response: qE(U, _, $[se].route.id, V, l, f.v7_relativeSplatPath)
            };
          }
          return HE(X);
        })
      );
    } catch (H) {
      return $.map(() => ({ type: Ne.error, error: H }));
    }
  }
  async function be(O, _, $, V, H) {
    let [X, ...se] = await Promise.all([
      $.length ? ne('loader', H, $, _) : [],
      ...V.map((U) => {
        if (U.matches && U.match && U.controller) {
          let pe = ro(e.history, U.path, U.controller.signal);
          return ne('loader', pe, [U.match], U.matches).then((te) => te[0]);
        } else
          return Promise.resolve({
            type: Ne.error,
            error: At(404, { pathname: U.path })
          });
      })
    ]);
    return (
      await Promise.all([
        Hp(
          O,
          $,
          X,
          X.map(() => H.signal),
          !1,
          S.loaderData
        ),
        Hp(
          O,
          V.map((U) => U.match),
          se,
          V.map((U) => (U.controller ? U.controller.signal : null)),
          !0
        )
      ]),
      { loaderResults: X, fetcherResults: se }
    );
  }
  function ee() {
    (D = !0),
      N.push(...dc()),
      J.forEach((O, _) => {
        j.has(_) && (B.push(_), tt(_));
      });
  }
  function he(O, _, $) {
    $ === void 0 && ($ = {}),
      S.fetchers.set(O, _),
      je(
        { fetchers: new Map(S.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 }
      );
  }
  function Y(O, _, $, V) {
    V === void 0 && (V = {});
    let H = Mi(S.matches, _);
    xe(O),
      je(
        { errors: { [H.route.id]: $ }, fetchers: new Map(S.fetchers) },
        { flushSync: (V && V.flushSync) === !0 }
      );
  }
  function St(O) {
    return (
      f.v7_fetcherPersist &&
        (ae.set(O, (ae.get(O) || 0) + 1), ve.has(O) && ve.delete(O)),
      S.fetchers.get(O) || LE
    );
  }
  function xe(O) {
    let _ = S.fetchers.get(O);
    j.has(O) && !(_ && _.state === 'loading' && q.has(O)) && tt(O),
      J.delete(O),
      q.delete(O),
      fe.delete(O),
      ve.delete(O),
      S.fetchers.delete(O);
  }
  function oe(O) {
    if (f.v7_fetcherPersist) {
      let _ = (ae.get(O) || 0) - 1;
      _ <= 0 ? (ae.delete(O), ve.add(O)) : ae.set(O, _);
    } else xe(O);
    je({ fetchers: new Map(S.fetchers) });
  }
  function tt(O) {
    let _ = j.get(O);
    ge(_, 'Expected fetch controller: ' + O), _.abort(), j.delete(O);
  }
  function Gn(O) {
    for (let _ of O) {
      let $ = St(_),
        V = Zr($.data);
      S.fetchers.set(_, V);
    }
  }
  function ri() {
    let O = [],
      _ = !1;
    for (let $ of fe) {
      let V = S.fetchers.get($);
      ge(V, 'Expected fetcher: ' + $),
        V.state === 'loading' && (fe.delete($), O.push($), (_ = !0));
    }
    return Gn(O), _;
  }
  function Kf(O) {
    let _ = [];
    for (let [$, V] of q)
      if (V < O) {
        let H = S.fetchers.get($);
        ge(H, 'Expected fetcher: ' + $),
          H.state === 'loading' && (tt($), q.delete($), _.push($));
      }
    return Gn(_), _.length > 0;
  }
  function Rw(O, _) {
    let $ = S.blockers.get(O) || si;
    return G.get(O) !== _ && G.set(O, _), $;
  }
  function Yf(O) {
    S.blockers.delete(O), G.delete(O);
  }
  function Bs(O, _) {
    let $ = S.blockers.get(O) || si;
    ge(
      ($.state === 'unblocked' && _.state === 'blocked') ||
        ($.state === 'blocked' && _.state === 'blocked') ||
        ($.state === 'blocked' && _.state === 'proceeding') ||
        ($.state === 'blocked' && _.state === 'unblocked') ||
        ($.state === 'proceeding' && _.state === 'unblocked'),
      'Invalid blocker state transition: ' + $.state + ' -> ' + _.state
    );
    let V = new Map(S.blockers);
    V.set(O, _), je({ blockers: V });
  }
  function Gf(O) {
    let { currentLocation: _, nextLocation: $, historyAction: V } = O;
    if (G.size === 0) return;
    G.size > 1 && Oo(!1, 'A router only supports one blocker at a time');
    let H = Array.from(G.entries()),
      [X, se] = H[H.length - 1],
      U = S.blockers.get(X);
    if (
      !(U && U.state === 'proceeding') &&
      se({ currentLocation: _, nextLocation: $, historyAction: V })
    )
      return X;
  }
  function uc(O) {
    let _ = At(404, { pathname: O }),
      $ = a || s,
      { matches: V, route: H } = zp($);
    return dc(), { notFoundMatches: V, route: H, error: _ };
  }
  function Ns(O, _) {
    let $ = _.partialMatches,
      V = $[$.length - 1].route,
      H = At(400, {
        type: 'route-discovery',
        routeId: V.id,
        pathname: O,
        message:
          _.error != null && 'message' in _.error ? _.error : String(_.error)
      });
    return { notFoundMatches: $, route: V, error: H };
  }
  function dc(O) {
    let _ = [];
    return (
      ye.forEach(($, V) => {
        (!O || O(V)) && ($.cancel(), _.push(V), ye.delete(V));
      }),
      _
    );
  }
  function kw(O, _, $) {
    if (((p = O), (v = _), (h = $ || null), !x && S.navigation === Ec)) {
      x = !0;
      let V = Qf(S.location, S.matches);
      V != null && je({ restoreScrollPosition: V });
    }
    return () => {
      (p = null), (v = null), (h = null);
    };
  }
  function Xf(O, _) {
    return (
      (h &&
        h(
          O,
          _.map((V) => fE(V, S.loaderData))
        )) ||
      O.key
    );
  }
  function Mw(O, _) {
    if (p && v) {
      let $ = Xf(O, _);
      p[$] = v();
    }
  }
  function Qf(O, _) {
    if (p) {
      let $ = Xf(O, _),
        V = p[$];
      if (typeof V == 'number') return V;
    }
    return null;
  }
  function fc(O, _, $) {
    if (u)
      if (O) {
        let V = O[O.length - 1].route;
        if (V.path && (V.path === '*' || V.path.endsWith('/*')))
          return { active: !0, matches: fa(_, $, l, !0) };
      } else return { active: !0, matches: fa(_, $, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Fs(O, _, $) {
    let V = O,
      H = V.length > 0 ? V[V.length - 1].route : null;
    for (;;) {
      let X = a == null,
        se = a || s;
      try {
        await VE(u, _, V, se, i, o, Ae, $);
      } catch (re) {
        return { type: 'error', error: re, partialMatches: V };
      } finally {
        X && (s = [...s]);
      }
      if ($.aborted) return { type: 'aborted' };
      let U = Rn(se, _, l),
        pe = !1;
      if (U) {
        let re = U[U.length - 1].route;
        if (re.index) return { type: 'success', matches: U };
        if (re.path && re.path.length > 0)
          if (re.path === '*') pe = !0;
          else return { type: 'success', matches: U };
      }
      let te = fa(se, _, l, !0);
      if (
        !te ||
        V.map((re) => re.route.id).join('-') ===
          te.map((re) => re.route.id).join('-')
      )
        return { type: 'success', matches: pe ? U : null };
      if (((V = te), (H = V[V.length - 1].route), H.path === '*'))
        return { type: 'success', matches: V };
    }
  }
  function Ow(O) {
    (i = {}), (a = Yi(O, o, void 0, i));
  }
  function Aw(O, _) {
    let $ = a == null;
    $v(O, _, a || s, i, o), $ && ((s = [...s]), je({}));
  }
  return (
    (E = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return S;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: _e,
      subscribe: It,
      enableScrollRestoration: kw,
      navigate: pt,
      fetch: Ht,
      revalidate: bn,
      createHref: (O) => e.history.createHref(O),
      encodeLocation: (O) => e.history.encodeLocation(O),
      getFetcher: St,
      deleteFetcher: oe,
      dispose: ft,
      getBlocker: Rw,
      deleteBlocker: Yf,
      patchRoutes: Aw,
      _internalFetchControllers: j,
      _internalActiveDeferreds: ye,
      _internalSetRoutes: Ow
    }),
    E
  );
}
function BE(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function du(e, t, r, n, o, i, s, a) {
  let l, c;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        c = f;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = hl(o || '.', pl(l, i), Ho(e.pathname, r) || e.pathname, a === 'path');
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      c &&
      c.route.index &&
      !yd(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    n &&
      r !== '/' &&
      (u.pathname = u.pathname === '/' ? r : Fr([r, u.pathname])),
    Wn(u)
  );
}
function Ip(e, t, r, n) {
  if (!n || !BE(n)) return { path: r };
  if (n.formMethod && !ZE(n.formMethod))
    return { path: r, error: At(405, { method: n.formMethod }) };
  let o = () => ({ path: r, error: At(400, { type: 'invalid-body' }) }),
    i = n.formMethod || 'get',
    s = e ? i.toUpperCase() : i.toLowerCase(),
    a = jv(r);
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!br(s)) return o();
      let d =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((m, p) => {
                let [h, v] = p;
                return (
                  '' +
                  m +
                  h +
                  '=' +
                  v +
                  `
`
                );
              }, '')
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: d
        }
      };
    } else if (n.formEncType === 'application/json') {
      if (!br(s)) return o();
      try {
        let d = typeof n.body == 'string' ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: d,
            text: void 0
          }
        };
      } catch {
        return o();
      }
    }
  }
  ge(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let l, c;
  if (n.formData) (l = fu(n.formData)), (c = n.formData);
  else if (n.body instanceof FormData) (l = fu(n.body)), (c = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (c = Np(l));
  else if (n.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (c = Np(l));
    } catch {
      return o();
    }
  let u = {
    formMethod: s,
    formAction: a,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: c,
    json: void 0,
    text: void 0
  };
  if (br(u.formMethod)) return { path: r, submission: u };
  let f = fn(r);
  return (
    t && f.search && yd(f.search) && l.append('index', ''),
    (f.search = '?' + l),
    { path: Wn(f), submission: u }
  );
}
function NE(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Lp(e, t, r, n, o, i, s, a, l, c, u, f, d, m, p, h) {
  let v = h ? (Yt(h[1]) ? h[1].error : h[1].data) : void 0,
    x = e.createURL(t.location),
    b = e.createURL(o),
    g = h && Yt(h[1]) ? h[0] : void 0,
    y = g ? NE(r, g) : r,
    E = h ? h[1].statusCode : void 0,
    S = s && E && E >= 400,
    C = y.filter((R, k) => {
      let { route: A } = R;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (i)
        return typeof A.loader != 'function' || A.loader.hydrate
          ? !0
          : t.loaderData[A.id] === void 0 &&
              (!t.errors || t.errors[A.id] === void 0);
      if (FE(t.loaderData, t.matches[k], R) || l.some((D) => D === R.route.id))
        return !0;
      let I = t.matches[k],
        L = R;
      return $p(
        R,
        qe(
          {
            currentUrl: x,
            currentParams: I.params,
            nextUrl: b,
            nextParams: L.params
          },
          n,
          {
            actionResult: v,
            unstable_actionStatus: E,
            defaultShouldRevalidate: S
              ? !1
              : a ||
                x.pathname + x.search === b.pathname + b.search ||
                x.search !== b.search ||
                Lv(I, L)
          }
        )
      );
    }),
    T = [];
  return (
    f.forEach((R, k) => {
      if (i || !r.some((N) => N.route.id === R.routeId) || u.has(k)) return;
      let A = Rn(m, R.path, p);
      if (!A) {
        T.push({
          key: k,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null
        });
        return;
      }
      let I = t.fetchers.get(k),
        L = wi(A, R.path),
        D = !1;
      d.has(k)
        ? (D = !1)
        : c.includes(k)
          ? (D = !0)
          : I && I.state !== 'idle' && I.data === void 0
            ? (D = a)
            : (D = $p(
                L,
                qe(
                  {
                    currentUrl: x,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: b,
                    nextParams: r[r.length - 1].params
                  },
                  n,
                  {
                    actionResult: v,
                    unstable_actionStatus: E,
                    defaultShouldRevalidate: S ? !1 : a
                  }
                )
              )),
        D &&
          T.push({
            key: k,
            routeId: R.routeId,
            path: R.path,
            matches: A,
            match: L,
            controller: new AbortController()
          });
    }),
    [C, T]
  );
}
function FE(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function Lv(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function $p(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
async function VE(e, t, r, n, o, i, s, a) {
  let l = [t, ...r.map((c) => c.route.id)].join('-');
  try {
    let c = s.get(l);
    c ||
      ((c = e({
        path: t,
        matches: r,
        patch: (u, f) => {
          a.aborted || $v(u, f, n, o, i);
        }
      })),
      s.set(l, c)),
      c && GE(c) && (await c);
  } finally {
    s.delete(l);
  }
}
function $v(e, t, r, n, o) {
  if (e) {
    var i;
    let s = n[e];
    ge(s, 'No route found to patch children into: routeId = ' + e);
    let a = Yi(
      t,
      o,
      [
        e,
        'patch',
        String(((i = s.children) == null ? void 0 : i.length) || '0')
      ],
      n
    );
    s.children ? s.children.push(...a) : (s.children = a);
  } else {
    let s = Yi(t, o, ['patch', String(r.length || '0')], n);
    r.push(...s);
  }
}
async function jp(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let o = r[e.id];
  ge(o, 'No route found in manifest');
  let i = {};
  for (let s in n) {
    let l = o[s] !== void 0 && s !== 'hasErrorBoundary';
    Oo(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !uE.has(s) && (i[s] = n[s]);
  }
  Object.assign(o, i), Object.assign(o, qe({}, t(o), { lazy: void 0 }));
}
function WE(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function zE(e, t, r, n, o, i, s, a) {
  let l = n.reduce((f, d) => f.add(d.route.id), new Set()),
    c = new Set(),
    u = await e({
      matches: o.map((f) => {
        let d = l.has(f.route.id);
        return qe({}, f, {
          shouldLoad: d,
          resolve: (p) => (
            c.add(f.route.id),
            d
              ? UE(t, r, f, i, s, p, a)
              : Promise.resolve({ type: Ne.data, result: void 0 })
          )
        });
      }),
      request: r,
      params: o[0].params,
      context: a
    });
  return (
    o.forEach((f) =>
      ge(
        c.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    u.filter((f, d) => l.has(o[d].route.id))
  );
}
async function UE(e, t, r, n, o, i, s) {
  let a,
    l,
    c = (u) => {
      let f,
        d = new Promise((h, v) => (f = v));
      (l = () => f()), t.signal.addEventListener('abort', l);
      let m = (h) =>
          typeof u != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + r.route.id + ']')
                )
              )
            : u(
                { request: t, params: r.params, context: s },
                ...(h !== void 0 ? [h] : [])
              ),
        p;
      return (
        i
          ? (p = i((h) => m(h)))
          : (p = (async () => {
              try {
                return { type: 'data', result: await m() };
              } catch (h) {
                return { type: 'error', result: h };
              }
            })()),
        Promise.race([p, d])
      );
    };
  try {
    let u = r.route[e];
    if (r.route.lazy)
      if (u) {
        let f,
          [d] = await Promise.all([
            c(u).catch((m) => {
              f = m;
            }),
            jp(r.route, o, n)
          ]);
        if (f !== void 0) throw f;
        a = d;
      } else if ((await jp(r.route, o, n), (u = r.route[e]), u)) a = await c(u);
      else if (e === 'action') {
        let f = new URL(t.url),
          d = f.pathname + f.search;
        throw At(405, { method: t.method, pathname: d, routeId: r.route.id });
      } else return { type: Ne.data, result: void 0 };
    else if (u) a = await c(u);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw At(404, { pathname: d });
    }
    ge(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          r.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (u) {
    return { type: Ne.error, result: u };
  } finally {
    l && t.signal.removeEventListener('abort', l);
  }
  return a;
}
async function HE(e) {
  let { result: t, type: r, status: n } = e;
  if (Bv(t)) {
    let s;
    try {
      let a = t.headers.get('Content-Type');
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (a) {
      return { type: Ne.error, error: a };
    }
    return r === Ne.error
      ? {
          type: Ne.error,
          error: new gd(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers
        }
      : { type: Ne.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (r === Ne.error)
    return { type: Ne.error, error: t, statusCode: ml(t) ? t.status : n };
  if (QE(t)) {
    var o, i;
    return {
      type: Ne.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers)
    };
  }
  return { type: Ne.data, data: t, statusCode: n };
}
function qE(e, t, r, n, o, i) {
  let s = e.headers.get('Location');
  if (
    (ge(
      s,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !vd.test(s))
  ) {
    let a = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (s = du(new URL(t.url), a, o, !0, s, i)), e.headers.set('Location', s);
  }
  return e;
}
function Bp(e, t, r) {
  if (vd.test(e)) {
    let n = e,
      o = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      i = Ho(o.pathname, r) != null;
    if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
  }
  return e;
}
function ro(e, t, r, n) {
  let o = e.createURL(jv(t)).toString(),
    i = { signal: r };
  if (n && br(n.formMethod)) {
    let { formMethod: s, formEncType: a } = n;
    (i.method = s.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(n.json)))
        : a === 'text/plain'
          ? (i.body = n.text)
          : a === 'application/x-www-form-urlencoded' && n.formData
            ? (i.body = fu(n.formData))
            : (i.body = n.formData);
  }
  return new Request(o, i);
}
function fu(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function Np(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function KE(e, t, r, n, o, i) {
  let s = {},
    a = null,
    l,
    c = !1,
    u = {},
    f = n && Yt(n[1]) ? n[1].error : void 0;
  return (
    r.forEach((d, m) => {
      let p = t[m].route.id;
      if (
        (ge(!An(d), 'Cannot handle redirect results in processLoaderData'),
        Yt(d))
      ) {
        let h = d.error;
        f !== void 0 && ((h = f), (f = void 0)), (a = a || {});
        {
          let v = Mi(e, p);
          a[v.route.id] == null && (a[v.route.id] = h);
        }
        (s[p] = void 0),
          c || ((c = !0), (l = ml(d.error) ? d.error.status : 500)),
          d.headers && (u[p] = d.headers);
      } else
        On(d)
          ? (o.set(p, d.deferredData),
            (s[p] = d.deferredData.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !c &&
              (l = d.statusCode),
            d.headers && (u[p] = d.headers))
          : ((s[p] = d.data),
            d.statusCode && d.statusCode !== 200 && !c && (l = d.statusCode),
            d.headers && (u[p] = d.headers));
    }),
    f !== void 0 && n && ((a = { [n[0]]: f }), (s[n[0]] = void 0)),
    { loaderData: s, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function Fp(e, t, r, n, o, i, s, a) {
  let { loaderData: l, errors: c } = KE(t, r, n, o, a);
  for (let u = 0; u < i.length; u++) {
    let { key: f, match: d, controller: m } = i[u];
    ge(
      s !== void 0 && s[u] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let p = s[u];
    if (!(m && m.signal.aborted))
      if (Yt(p)) {
        let h = Mi(e.matches, d == null ? void 0 : d.route.id);
        (c && c[h.route.id]) || (c = qe({}, c, { [h.route.id]: p.error })),
          e.fetchers.delete(f);
      } else if (An(p)) ge(!1, 'Unhandled fetcher revalidation redirect');
      else if (On(p)) ge(!1, 'Unhandled fetcher deferred data');
      else {
        let h = Zr(p.data);
        e.fetchers.set(f, h);
      }
  }
  return { loaderData: l, errors: c };
}
function Vp(e, t, r, n) {
  let o = qe({}, t);
  for (let i of r) {
    let s = i.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (o[s] = t[s])
        : e[s] !== void 0 && i.route.loader && (o[s] = e[s]),
      n && n.hasOwnProperty(s))
    )
      break;
  }
  return o;
}
function Wp(e) {
  return e
    ? Yt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Mi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function zp(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__'
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t
  };
}
function At(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: o,
      type: i,
      message: s
    } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i === 'route-discovery'
          ? (l =
              'Unable to match URL "' +
              r +
              '" - the `children()` function for ' +
              ('route `' + n + '` threw the following error:\n' + s))
          : o && r && n
            ? (l =
                'You made a ' +
                o +
                ' request to "' +
                r +
                '" but ' +
                ('did not provide a `loader` for route "' + n + '", ') +
                'so there is no way to handle the request.')
            : i === 'defer-action'
              ? (l = 'defer() is not supported in actions')
              : i === 'invalid-body' &&
                (l = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'),
          (l = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((a = 'Not Found'), (l = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            o && r && n
              ? (l =
                  'You made a ' +
                  o.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  'so there is no way to handle the request.')
              : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new gd(e || 500, a, new Error(l), !0)
  );
}
function Up(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (An(r)) return { result: r, idx: t };
  }
}
function jv(e) {
  let t = typeof e == 'string' ? fn(e) : e;
  return Wn(qe({}, t, { hash: '' }));
}
function YE(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function GE(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function XE(e) {
  return Bv(e.result) && DE.has(e.result.status);
}
function On(e) {
  return e.type === Ne.deferred;
}
function Yt(e) {
  return e.type === Ne.error;
}
function An(e) {
  return (e && e.type) === Ne.redirect;
}
function QE(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Bv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function ZE(e) {
  return _E.has(e.toLowerCase());
}
function br(e) {
  return OE.has(e.toLowerCase());
}
async function Hp(e, t, r, n, o, i) {
  for (let s = 0; s < r.length; s++) {
    let a = r[s],
      l = t[s];
    if (!l) continue;
    let c = e.find((f) => f.route.id === l.route.id),
      u = c != null && !Lv(c, l) && (i && i[l.route.id]) !== void 0;
    if (On(a) && (o || u)) {
      let f = n[s];
      ge(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Nv(a, f, o).then((d) => {
          d && (r[s] = d || r[s]);
        });
    }
  }
}
async function Nv(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Ne.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Ne.error, error: o };
      }
    return { type: Ne.data, data: e.deferredData.data };
  }
}
function yd(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function wi(e, t) {
  let r = typeof t == 'string' ? fn(t).search : t.search;
  if (e[e.length - 1].route.index && yd(r || '')) return e[e.length - 1];
  let n = _v(e);
  return n[n.length - 1];
}
function qp(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: o,
    formData: i,
    json: s
  } = e;
  if (!(!t || !r || !n)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: o
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: s,
        text: void 0
      };
  }
}
function Cc(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
      };
}
function JE(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function ai(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
      };
}
function eC(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Zr(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function tC(e, t) {
  try {
    let r = e.sessionStorage.getItem(Iv);
    if (r) {
      let n = JSON.parse(r);
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function rC(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, o] of t) r[n] = [...o];
    try {
      e.sessionStorage.setItem(Iv, JSON.stringify(r));
    } catch (n) {
      Oo(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + n + ').'
      );
    }
  }
}
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $a() {
  return (
    ($a = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $a.apply(this, arguments)
  );
}
const gl = w.createContext(null),
  Fv = w.createContext(null),
  pn = w.createContext(null),
  bd = w.createContext(null),
  Yr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vv = w.createContext(null);
function nC(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  qo() || ge(!1);
  let { basename: n, navigator: o } = w.useContext(pn),
    { hash: i, pathname: s, search: a } = zv(e, { relative: r }),
    l = s;
  return (
    n !== '/' && (l = s === '/' ? n : Fr([n, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function qo() {
  return w.useContext(bd) != null;
}
function hn() {
  return qo() || ge(!1), w.useContext(bd).location;
}
function Wv(e) {
  w.useContext(pn).static || w.useLayoutEffect(e);
}
function gs() {
  let { isDataRoute: e } = w.useContext(Yr);
  return e ? vC() : oC();
}
function oC() {
  qo() || ge(!1);
  let e = w.useContext(gl),
    { basename: t, future: r, navigator: n } = w.useContext(pn),
    { matches: o } = w.useContext(Yr),
    { pathname: i } = hn(),
    s = JSON.stringify(pl(o, r.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    Wv(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == 'number') {
          n.go(c);
          return;
        }
        let f = hl(c, JSON.parse(s), i, u.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Fr([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, s, i, e]
    )
  );
}
const iC = w.createContext(null);
function sC(e) {
  let t = w.useContext(Yr).outlet;
  return t && w.createElement(iC.Provider, { value: e }, t);
}
function zv(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = w.useContext(pn),
    { matches: o } = w.useContext(Yr),
    { pathname: i } = hn(),
    s = JSON.stringify(pl(o, n.v7_relativeSplatPath));
  return w.useMemo(() => hl(e, JSON.parse(s), i, r === 'path'), [e, s, i, r]);
}
function aC(e, t, r, n) {
  qo() || ge(!1);
  let { navigator: o } = w.useContext(pn),
    { matches: i } = w.useContext(Yr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : '/';
  s && s.route;
  let c = hn(),
    u;
  u = c;
  let f = u.pathname || '/',
    d = f;
  if (l !== '/') {
    let h = l.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let m = Rn(e, { pathname: d });
  return fC(
    m &&
      m.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, a, h.params),
          pathname: Fr([
            l,
            o.encodeLocation
              ? o.encodeLocation(h.pathname).pathname
              : h.pathname
          ]),
          pathnameBase:
            h.pathnameBase === '/'
              ? l
              : Fr([
                  l,
                  o.encodeLocation
                    ? o.encodeLocation(h.pathnameBase).pathname
                    : h.pathnameBase
                ])
        })
      ),
    i,
    r,
    n
  );
}
function lC() {
  let e = gC(),
    t = ml(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement('h2', null, 'Unexpected Application Error!'),
    w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? w.createElement('pre', { style: o }, r) : null,
    null
  );
}
const cC = w.createElement(lC, null);
class uC extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation
        };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Yr.Provider,
          { value: this.props.routeContext },
          w.createElement(Vv.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children;
  }
}
function dC(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = w.useContext(gl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Yr.Provider, { value: t }, n)
  );
}
function fC(e, t, r, n) {
  var o;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if ((i = r) != null && i.errors) e = r.matches;
    else return null;
  }
  let s = e,
    a = (o = r) == null ? void 0 : o.errors;
  if (a != null) {
    let u = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    u >= 0 || ge(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let f = s[u];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = u),
        f.route.id)
      ) {
        let { loaderData: d, errors: m } = r,
          p =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || p) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, f, d) => {
    let m,
      p = !1,
      h = null,
      v = null;
    r &&
      ((m = a && f.route.id ? a[f.route.id] : void 0),
      (h = f.route.errorElement || cC),
      l &&
        (c < 0 && d === 0
          ? (yC('route-fallback'), (p = !0), (v = null))
          : c === d &&
            ((p = !0), (v = f.route.hydrateFallbackElement || null))));
    let x = t.concat(s.slice(0, d + 1)),
      b = () => {
        let g;
        return (
          m
            ? (g = h)
            : p
              ? (g = v)
              : f.route.Component
                ? (g = w.createElement(f.route.Component, null))
                : f.route.element
                  ? (g = f.route.element)
                  : (g = u),
          w.createElement(dC, {
            match: f,
            routeContext: { outlet: u, matches: x, isDataRoute: r != null },
            children: g
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? w.createElement(uC, {
          location: r.location,
          revalidation: r.revalidation,
          component: h,
          error: m,
          children: b(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 }
        })
      : b();
  }, null);
}
var Uv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Uv || {}),
  ja = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ja || {});
function pC(e) {
  let t = w.useContext(gl);
  return t || ge(!1), t;
}
function hC(e) {
  let t = w.useContext(Fv);
  return t || ge(!1), t;
}
function mC(e) {
  let t = w.useContext(Yr);
  return t || ge(!1), t;
}
function Hv(e) {
  let t = mC(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || ge(!1), r.route.id;
}
function gC() {
  var e;
  let t = w.useContext(Vv),
    r = hC(ja.UseRouteError),
    n = Hv(ja.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function vC() {
  let { router: e } = pC(Uv.UseNavigateStable),
    t = Hv(ja.UseNavigateStable),
    r = w.useRef(!1);
  return (
    Wv(() => {
      r.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, $a({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Kp = {};
function yC(e, t, r) {
  Kp[e] || (Kp[e] = !0);
}
function bC(e) {
  let { to: t, replace: r, state: n, relative: o } = e;
  qo() || ge(!1);
  let { future: i, static: s } = w.useContext(pn),
    { matches: a } = w.useContext(Yr),
    { pathname: l } = hn(),
    c = gs(),
    u = hl(t, pl(a, i.v7_relativeSplatPath), l, o === 'path'),
    f = JSON.stringify(u);
  return (
    w.useEffect(
      () => c(JSON.parse(f), { replace: r, state: n, relative: o }),
      [c, f, o, r, n]
    ),
    null
  );
}
function qv(e) {
  return sC(e.context);
}
function Kv(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = nt.Pop,
    navigator: i,
    static: s = !1,
    future: a
  } = e;
  qo() && ge(!1);
  let l = t.replace(/^\/*/, '/'),
    c = w.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: $a({ v7_relativeSplatPath: !1 }, a)
      }),
      [l, a, i, s]
    );
  typeof n == 'string' && (n = fn(n));
  let {
      pathname: u = '/',
      search: f = '',
      hash: d = '',
      state: m = null,
      key: p = 'default'
    } = n,
    h = w.useMemo(() => {
      let v = Ho(u, l);
      return v == null
        ? null
        : {
            location: { pathname: v, search: f, hash: d, state: m, key: p },
            navigationType: o
          };
    }, [l, u, f, d, m, p, o]);
  return h == null
    ? null
    : w.createElement(
        pn.Provider,
        { value: c },
        w.createElement(bd.Provider, { children: r, value: h })
      );
}
new Promise(() => {});
function xC(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
      }),
    t
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gi() {
  return (
    (Gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gi.apply(this, arguments)
  );
}
function wC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function SC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function EC(e, t) {
  return e.button === 0 && (!t || t === '_self') && !SC(e);
}
const CC = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition'
  ],
  PC = '6';
try {
  window.__reactRouterVersion = PC;
} catch {}
function TC(e, t) {
  return jE({
    basename: t == null ? void 0 : t.basename,
    future: Gi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Mv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || RC(),
    routes: e,
    mapRouteProperties: xC,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnMiss:
      t == null ? void 0 : t.unstable_patchRoutesOnMiss,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function RC() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Gi({}, t, { errors: kC(t.errors) })), t;
}
function kC(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      r[n] = new gd(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == 'function')
          try {
            let s = new i(o.message);
            (s.stack = ''), (r[n] = s);
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(o.message);
        (i.stack = ''), (r[n] = i);
      }
    } else r[n] = o;
  return r;
}
const MC = w.createContext({ isTransitioning: !1 }),
  OC = w.createContext(new Map()),
  AC = 'startTransition',
  Ba = ko[AC],
  _C = 'flushSync',
  Yp = Lw[_C];
function DC(e) {
  Ba ? Ba(e) : e();
}
function li(e) {
  Yp ? Yp(e) : e();
}
class IC {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, r) => {
        (this.resolve = (n) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(n));
        }),
          (this.reject = (n) => {
            this.status === 'pending' && ((this.status = 'rejected'), r(n));
          });
      }));
  }
}
function Yv(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [o, i] = w.useState(r.state),
    [s, a] = w.useState(),
    [l, c] = w.useState({ isTransitioning: !1 }),
    [u, f] = w.useState(),
    [d, m] = w.useState(),
    [p, h] = w.useState(),
    v = w.useRef(new Map()),
    { v7_startTransition: x } = n || {},
    b = w.useCallback(
      (C) => {
        x ? DC(C) : C();
      },
      [x]
    ),
    g = w.useCallback(
      (C, T) => {
        let {
          deletedFetchers: R,
          unstable_flushSync: k,
          unstable_viewTransitionOpts: A
        } = T;
        R.forEach((L) => v.current.delete(L)),
          C.fetchers.forEach((L, D) => {
            L.data !== void 0 && v.current.set(D, L.data);
          });
        let I =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != 'function';
        if (!A || I) {
          k ? li(() => i(C)) : b(() => i(C));
          return;
        }
        if (k) {
          li(() => {
            d && (u && u.resolve(), d.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: A.currentLocation,
                nextLocation: A.nextLocation
              });
          });
          let L = r.window.document.startViewTransition(() => {
            li(() => i(C));
          });
          L.finished.finally(() => {
            li(() => {
              f(void 0), m(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            li(() => m(L));
          return;
        }
        d
          ? (u && u.resolve(),
            d.skipTransition(),
            h({
              state: C,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation
            }))
          : (a(C),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation
            }));
      },
      [r.window, d, u, v, b]
    );
  w.useLayoutEffect(() => r.subscribe(g), [r, g]),
    w.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new IC());
    }, [l]),
    w.useEffect(() => {
      if (u && s && r.window) {
        let C = s,
          T = u.promise,
          R = r.window.document.startViewTransition(async () => {
            b(() => i(C)), await T;
          });
        R.finished.finally(() => {
          f(void 0), m(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          m(R);
      }
    }, [b, s, u, r.window]),
    w.useEffect(() => {
      u && s && o.location.key === s.location.key && u.resolve();
    }, [u, d, o.location, s]),
    w.useEffect(() => {
      !l.isTransitioning &&
        p &&
        (a(p.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: p.currentLocation,
          nextLocation: p.nextLocation
        }),
        h(void 0));
    }, [l.isTransitioning, p]),
    w.useEffect(() => {}, []);
  let y = w.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (C) => r.navigate(C),
        push: (C, T, R) =>
          r.navigate(C, {
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset
          }),
        replace: (C, T, R) =>
          r.navigate(C, {
            replace: !0,
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset
          })
      }),
      [r]
    ),
    E = r.basename || '/',
    S = w.useMemo(
      () => ({ router: r, navigator: y, static: !1, basename: E }),
      [r, y, E]
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      gl.Provider,
      { value: S },
      w.createElement(
        Fv.Provider,
        { value: o },
        w.createElement(
          OC.Provider,
          { value: v.current },
          w.createElement(
            MC.Provider,
            { value: l },
            w.createElement(
              Kv,
              {
                basename: E,
                location: o.location,
                navigationType: o.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath }
              },
              o.initialized || r.future.v7_partialHydration
                ? w.createElement(LC, {
                    routes: r.routes,
                    future: r.future,
                    state: o
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function LC(e) {
  let { routes: t, future: r, state: n } = e;
  return aC(t, void 0, n, r);
}
function $C(e) {
  let { basename: t, children: r, future: n, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = Mv({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = n || {},
    u = w.useCallback(
      (f) => {
        c && Ba ? Ba(() => l(f)) : l(f);
      },
      [l, c]
    );
  return (
    w.useLayoutEffect(() => s.listen(u), [s, u]),
    w.createElement(Kv, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: n
    })
  );
}
const jC =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  BC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _n = w.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
        unstable_viewTransition: f
      } = t,
      d = wC(t, CC),
      { basename: m } = w.useContext(pn),
      p,
      h = !1;
    if (typeof c == 'string' && BC.test(c) && ((p = c), jC))
      try {
        let g = new URL(window.location.href),
          y = c.startsWith('//') ? new URL(g.protocol + c) : new URL(c),
          E = Ho(y.pathname, m);
        y.origin === g.origin && E != null
          ? (c = E + y.search + y.hash)
          : (h = !0);
      } catch {}
    let v = nC(c, { relative: o }),
      x = NC(c, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: o,
        unstable_viewTransition: f
      });
    function b(g) {
      n && n(g), g.defaultPrevented || x(g);
    }
    return w.createElement(
      'a',
      Gi({}, d, { href: p || v, onClick: h || i ? n : b, ref: r, target: l })
    );
  });
var Gp;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Gp || (Gp = {}));
var Xp;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Xp || (Xp = {}));
function NC(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a
    } = t === void 0 ? {} : t,
    l = gs(),
    c = hn(),
    u = zv(e, { relative: s });
  return w.useCallback(
    (f) => {
      if (EC(f, r)) {
        f.preventDefault();
        let d = n !== void 0 ? n : Wn(c) === Wn(u);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a
        });
      }
    },
    [c, l, u, n, o, r, e, i, s, a]
  );
}
function Xi(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const FC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xi },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ao = '$$material';
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    M.apply(null, arguments)
  );
}
function Z(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Gv(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var VC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  WC = Gv(function (e) {
    return (
      VC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function zC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function UC(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var HC = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(UC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = zC(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Et = '-ms-',
  Na = '-moz-',
  Ce = '-webkit-',
  Xv = 'comm',
  xd = 'rule',
  wd = 'decl',
  qC = '@import',
  Qv = '@keyframes',
  KC = '@layer',
  YC = Math.abs,
  vl = String.fromCharCode,
  GC = Object.assign;
function XC(e, t) {
  return yt(e, 0) ^ 45
    ? (((((((t << 2) ^ yt(e, 0)) << 2) ^ yt(e, 1)) << 2) ^ yt(e, 2)) << 2) ^
        yt(e, 3)
    : 0;
}
function Zv(e) {
  return e.trim();
}
function QC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Pe(e, t, r) {
  return e.replace(t, r);
}
function pu(e, t) {
  return e.indexOf(t);
}
function yt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qi(e, t, r) {
  return e.slice(t, r);
}
function Er(e) {
  return e.length;
}
function Sd(e) {
  return e.length;
}
function Ys(e, t) {
  return t.push(e), e;
}
function ZC(e, t) {
  return e.map(t).join('');
}
var yl = 1,
  _o = 1,
  Jv = 0,
  Ft = 0,
  it = 0,
  Ko = '';
function bl(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: yl,
    column: _o,
    length: s,
    return: ''
  };
}
function ci(e, t) {
  return GC(bl('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function JC() {
  return it;
}
function eP() {
  return (
    (it = Ft > 0 ? yt(Ko, --Ft) : 0), _o--, it === 10 && ((_o = 1), yl--), it
  );
}
function Qt() {
  return (
    (it = Ft < Jv ? yt(Ko, Ft++) : 0), _o++, it === 10 && ((_o = 1), yl++), it
  );
}
function Rr() {
  return yt(Ko, Ft);
}
function pa() {
  return Ft;
}
function vs(e, t) {
  return Qi(Ko, e, t);
}
function Zi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ey(e) {
  return (yl = _o = 1), (Jv = Er((Ko = e))), (Ft = 0), [];
}
function ty(e) {
  return (Ko = ''), e;
}
function ha(e) {
  return Zv(vs(Ft - 1, hu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tP(e) {
  for (; (it = Rr()) && it < 33; ) Qt();
  return Zi(e) > 2 || Zi(it) > 3 ? '' : ' ';
}
function rP(e, t) {
  for (
    ;
    --t &&
    Qt() &&
    !(it < 48 || it > 102 || (it > 57 && it < 65) || (it > 70 && it < 97));

  );
  return vs(e, pa() + (t < 6 && Rr() == 32 && Qt() == 32));
}
function hu(e) {
  for (; Qt(); )
    switch (it) {
      case e:
        return Ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hu(it);
        break;
      case 40:
        e === 41 && hu(e);
        break;
      case 92:
        Qt();
        break;
    }
  return Ft;
}
function nP(e, t) {
  for (; Qt() && e + it !== 57; ) if (e + it === 84 && Rr() === 47) break;
  return '/*' + vs(t, Ft - 1) + '*' + vl(e === 47 ? e : Qt());
}
function oP(e) {
  for (; !Zi(Rr()); ) Qt();
  return vs(e, Ft);
}
function iP(e) {
  return ty(ma('', null, null, null, [''], (e = ey(e)), 0, [0], e));
}
function ma(e, t, r, n, o, i, s, a, l) {
  for (
    var c = 0,
      u = 0,
      f = s,
      d = 0,
      m = 0,
      p = 0,
      h = 1,
      v = 1,
      x = 1,
      b = 0,
      g = '',
      y = o,
      E = i,
      S = n,
      C = g;
    v;

  )
    switch (((p = b), (b = Qt()))) {
      case 40:
        if (p != 108 && yt(C, f - 1) == 58) {
          pu((C += Pe(ha(b), '&', '&\f')), '&\f') != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += ha(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += tP(p);
        break;
      case 92:
        C += rP(pa() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            Ys(sP(nP(Qt(), pa()), t, r), l);
            break;
          default:
            C += '/';
        }
        break;
      case 123 * h:
        a[c++] = Er(C) * x;
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            x == -1 && (C = Pe(C, /\f/g, '')),
              m > 0 &&
                Er(C) - f &&
                Ys(
                  m > 32
                    ? Zp(C + ';', n, r, f - 1)
                    : Zp(Pe(C, ' ', '') + ';', n, r, f - 2),
                  l
                );
            break;
          case 59:
            C += ';';
          default:
            if (
              (Ys((S = Qp(C, t, r, c, u, o, a, g, (y = []), (E = []), f)), i),
              b === 123)
            )
              if (u === 0) ma(C, t, S, S, y, i, f, a, E);
              else
                switch (d === 99 && yt(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ma(
                      e,
                      S,
                      S,
                      n && Ys(Qp(e, S, S, 0, 0, o, a, g, o, (y = []), f), E),
                      o,
                      E,
                      f,
                      a,
                      n ? y : E
                    );
                    break;
                  default:
                    ma(C, S, S, S, [''], E, 0, a, E);
                }
        }
        (c = u = m = 0), (h = x = 1), (g = C = ''), (f = s);
        break;
      case 58:
        (f = 1 + Er(C)), (m = p);
      default:
        if (h < 1) {
          if (b == 123) --h;
          else if (b == 125 && h++ == 0 && eP() == 125) continue;
        }
        switch (((C += vl(b)), b * h)) {
          case 38:
            x = u > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (a[c++] = (Er(C) - 1) * x), (x = 1);
            break;
          case 64:
            Rr() === 45 && (C += ha(Qt())),
              (d = Rr()),
              (u = f = Er((g = C += oP(pa())))),
              b++;
            break;
          case 45:
            p === 45 && Er(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Qp(e, t, r, n, o, i, s, a, l, c, u) {
  for (
    var f = o - 1, d = o === 0 ? i : [''], m = Sd(d), p = 0, h = 0, v = 0;
    p < n;
    ++p
  )
    for (var x = 0, b = Qi(e, f + 1, (f = YC((h = s[p])))), g = e; x < m; ++x)
      (g = Zv(h > 0 ? d[x] + ' ' + b : Pe(b, /&\f/g, d[x]))) && (l[v++] = g);
  return bl(e, t, r, o === 0 ? xd : a, l, c, u);
}
function sP(e, t, r) {
  return bl(e, t, r, Xv, vl(JC()), Qi(e, 2, -2), 0);
}
function Zp(e, t, r, n) {
  return bl(e, t, r, wd, Qi(e, 0, n), Qi(e, n + 1, -1), n);
}
function Co(e, t) {
  for (var r = '', n = Sd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function aP(e, t, r, n) {
  switch (e.type) {
    case KC:
      if (e.children.length) break;
    case qC:
    case wd:
      return (e.return = e.return || e.value);
    case Xv:
      return '';
    case Qv:
      return (e.return = e.value + '{' + Co(e.children, n) + '}');
    case xd:
      e.value = e.props.join(',');
  }
  return Er((r = Co(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function lP(e) {
  var t = Sd(e);
  return function (r, n, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, o, i) || '';
    return s;
  };
}
function cP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var uP = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Rr()), o === 38 && i === 12 && (r[n] = 1), !Zi(i);

    )
      Qt();
    return vs(t, Ft);
  },
  dP = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Zi(o)) {
        case 0:
          o === 38 && Rr() === 12 && (r[n] = 1), (t[n] += uP(Ft - 1, r, n));
          break;
        case 2:
          t[n] += ha(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Rr() === 58 ? '&\f' : ''), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += vl(o);
      }
    while ((o = Qt()));
    return t;
  },
  fP = function (t, r) {
    return ty(dP(ey(t), r));
  },
  Jp = new WeakMap(),
  pP = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Jp.get(n)) &&
        !o
      ) {
        Jp.set(t, !0);
        for (
          var i = [], s = fP(r, i), a = n.props, l = 0, c = 0;
          l < s.length;
          l++
        )
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + ' ' + s[l];
      }
    }
  },
  hP = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function ry(e, t) {
  switch (XC(e, t)) {
    case 5103:
      return Ce + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ce + e + Na + e + Et + e + e;
    case 6828:
    case 4268:
      return Ce + e + Et + e + e;
    case 6165:
      return Ce + e + Et + 'flex-' + e + e;
    case 5187:
      return (
        Ce + e + Pe(e, /(\w+).+(:[^]+)/, Ce + 'box-$1$2' + Et + 'flex-$1$2') + e
      );
    case 5443:
      return Ce + e + Et + 'flex-item-' + Pe(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Ce +
        e +
        Et +
        'flex-line-pack' +
        Pe(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Ce + e + Et + Pe(e, 'shrink', 'negative') + e;
    case 5292:
      return Ce + e + Et + Pe(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Ce +
        'box-' +
        Pe(e, '-grow', '') +
        Ce +
        e +
        Et +
        Pe(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Ce + Pe(e, /([^-])(transform)/g, '$1' + Ce + '$2') + e;
    case 6187:
      return (
        Pe(
          Pe(Pe(e, /(zoom-|grab)/, Ce + '$1'), /(image-set)/, Ce + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return Pe(e, /(image-set\([^]*)/, Ce + '$1$`$1');
    case 4968:
      return (
        Pe(
          Pe(e, /(.+:)(flex-)?(.*)/, Ce + 'box-pack:$3' + Et + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Ce +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Pe(e, /(.+)-inline(.+)/, Ce + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Er(e) - 1 - t > 6)
        switch (yt(e, t + 1)) {
          case 109:
            if (yt(e, t + 4) !== 45) break;
          case 102:
            return (
              Pe(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Ce +
                  '$2-$3$1' +
                  Na +
                  (yt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~pu(e, 'stretch')
              ? ry(Pe(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (yt(e, t + 1) !== 115) break;
    case 6444:
      switch (yt(e, Er(e) - 3 - (~pu(e, '!important') && 10))) {
        case 107:
          return Pe(e, ':', ':' + Ce) + e;
        case 101:
          return (
            Pe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Ce +
                (yt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Ce +
                '$2$3$1' +
                Et +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (yt(e, t + 11)) {
        case 114:
          return Ce + e + Et + Pe(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Ce + e + Et + Pe(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Ce + e + Et + Pe(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Ce + e + Et + e + e;
  }
  return e;
}
var mP = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case wd:
          t.return = ry(t.value, t.length);
          break;
        case Qv:
          return Co([ci(t, { value: Pe(t.value, '@', '@' + Ce) })], o);
        case xd:
          if (t.length)
            return ZC(t.props, function (i) {
              switch (QC(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Co(
                    [ci(t, { props: [Pe(i, /:(read-\w+)/, ':' + Na + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return Co(
                    [
                      ci(t, {
                        props: [Pe(i, /:(plac\w+)/, ':' + Ce + 'input-$1')]
                      }),
                      ci(t, { props: [Pe(i, /:(plac\w+)/, ':' + Na + '$1')] }),
                      ci(t, { props: [Pe(i, /:(plac\w+)/, Et + 'input-$1')] })
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  gP = [mP],
  ny = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (h) {
        var v = h.getAttribute('data-emotion');
        v.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || gP,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (h) {
          for (
            var v = h.getAttribute('data-emotion').split(' '), x = 1;
            x < v.length;
            x++
          )
            i[v[x]] = !0;
          a.push(h);
        }
      );
    var l,
      c = [pP, hP];
    {
      var u,
        f = [
          aP,
          cP(function (h) {
            u.insert(h);
          })
        ],
        d = lP(c.concat(o, f)),
        m = function (v) {
          return Co(iP(v), d);
        };
      l = function (v, x, b, g) {
        (u = b),
          m(v ? v + '{' + x.styles + '}' : x.styles),
          g && (p.inserted[x.name] = !0);
      };
    }
    var p = {
      key: r,
      sheet: new HC({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l
    };
    return p.sheet.hydrate(a), p;
  },
  oy = { exports: {} },
  Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ut = typeof Symbol == 'function' && Symbol.for,
  Ed = ut ? Symbol.for('react.element') : 60103,
  Cd = ut ? Symbol.for('react.portal') : 60106,
  xl = ut ? Symbol.for('react.fragment') : 60107,
  wl = ut ? Symbol.for('react.strict_mode') : 60108,
  Sl = ut ? Symbol.for('react.profiler') : 60114,
  El = ut ? Symbol.for('react.provider') : 60109,
  Cl = ut ? Symbol.for('react.context') : 60110,
  Pd = ut ? Symbol.for('react.async_mode') : 60111,
  Pl = ut ? Symbol.for('react.concurrent_mode') : 60111,
  Tl = ut ? Symbol.for('react.forward_ref') : 60112,
  Rl = ut ? Symbol.for('react.suspense') : 60113,
  vP = ut ? Symbol.for('react.suspense_list') : 60120,
  kl = ut ? Symbol.for('react.memo') : 60115,
  Ml = ut ? Symbol.for('react.lazy') : 60116,
  yP = ut ? Symbol.for('react.block') : 60121,
  bP = ut ? Symbol.for('react.fundamental') : 60117,
  xP = ut ? Symbol.for('react.responder') : 60118,
  wP = ut ? Symbol.for('react.scope') : 60119;
function tr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ed:
        switch (((e = e.type), e)) {
          case Pd:
          case Pl:
          case xl:
          case Sl:
          case wl:
          case Rl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cl:
              case Tl:
              case Ml:
              case kl:
              case El:
                return e;
              default:
                return t;
            }
        }
      case Cd:
        return t;
    }
  }
}
function iy(e) {
  return tr(e) === Pl;
}
Me.AsyncMode = Pd;
Me.ConcurrentMode = Pl;
Me.ContextConsumer = Cl;
Me.ContextProvider = El;
Me.Element = Ed;
Me.ForwardRef = Tl;
Me.Fragment = xl;
Me.Lazy = Ml;
Me.Memo = kl;
Me.Portal = Cd;
Me.Profiler = Sl;
Me.StrictMode = wl;
Me.Suspense = Rl;
Me.isAsyncMode = function (e) {
  return iy(e) || tr(e) === Pd;
};
Me.isConcurrentMode = iy;
Me.isContextConsumer = function (e) {
  return tr(e) === Cl;
};
Me.isContextProvider = function (e) {
  return tr(e) === El;
};
Me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ed;
};
Me.isForwardRef = function (e) {
  return tr(e) === Tl;
};
Me.isFragment = function (e) {
  return tr(e) === xl;
};
Me.isLazy = function (e) {
  return tr(e) === Ml;
};
Me.isMemo = function (e) {
  return tr(e) === kl;
};
Me.isPortal = function (e) {
  return tr(e) === Cd;
};
Me.isProfiler = function (e) {
  return tr(e) === Sl;
};
Me.isStrictMode = function (e) {
  return tr(e) === wl;
};
Me.isSuspense = function (e) {
  return tr(e) === Rl;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === xl ||
    e === Pl ||
    e === Sl ||
    e === wl ||
    e === Rl ||
    e === vP ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ml ||
        e.$$typeof === kl ||
        e.$$typeof === El ||
        e.$$typeof === Cl ||
        e.$$typeof === Tl ||
        e.$$typeof === bP ||
        e.$$typeof === xP ||
        e.$$typeof === wP ||
        e.$$typeof === yP))
  );
};
Me.typeOf = tr;
oy.exports = Me;
var SP = oy.exports,
  sy = SP,
  EP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  CP = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  ay = {};
ay[sy.ForwardRef] = EP;
ay[sy.Memo] = CP;
var PP = !0;
function TP(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ');
    }),
    n
  );
}
var ly = function (t, r, n) {
    var o = t.key + '-' + r.name;
    (n === !1 || PP === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  cy = function (t, r, n) {
    ly(t, r, n);
    var o = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function RP(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var kP = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  MP = /[A-Z]|^ms/g,
  OP = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  uy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  eh = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Pc = Gv(function (e) {
    return uy(e) ? e : e.replace(MP, '-$&').toLowerCase();
  }),
  th = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(OP, function (n, o, i) {
            return (Cr = { name: o, styles: i, next: Cr }), o;
          });
    }
    return kP[t] !== 1 && !uy(t) && typeof r == 'number' && r !== 0
      ? r + 'px'
      : r;
  };
function Ji(e, t, r) {
  if (r == null) return '';
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      if (r.anim === 1)
        return (Cr = { name: r.name, styles: r.styles, next: Cr }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Cr = { name: n.name, styles: n.styles, next: Cr }), (n = n.next);
        var o = r.styles + ';';
        return o;
      }
      return AP(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var i = Cr,
          s = r(e);
        return (Cr = i), Ji(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function AP(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Ji(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != 'object')
        t != null && t[s] !== void 0
          ? (n += i + '{' + t[s] + '}')
          : eh(s) && (n += Pc(i) + ':' + th(i, s) + ';');
      else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          eh(s[a]) && (n += Pc(i) + ':' + th(i, s[a]) + ';');
      else {
        var l = Ji(e, t, s);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += Pc(i) + ':' + l + ';';
            break;
          }
          default:
            n += i + '{' + l + '}';
        }
      }
    }
  return n;
}
var rh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Cr,
  Td = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    Cr = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Ji(n, r, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Ji(n, r, t[a])), o && (i += s[a]);
    rh.lastIndex = 0;
    for (var l = '', c; (c = rh.exec(i)) !== null; ) l += '-' + c[1];
    var u = RP(i) + l;
    return { name: u, styles: i, next: Cr };
  },
  _P = function (t) {
    return t();
  },
  dy = ko.useInsertionEffect ? ko.useInsertionEffect : !1,
  DP = dy || _P,
  nh = dy || w.useLayoutEffect,
  fy = w.createContext(typeof HTMLElement < 'u' ? ny({ key: 'css' }) : null),
  IP = fy.Provider,
  py = function (t) {
    return w.forwardRef(function (r, n) {
      var o = w.useContext(fy);
      return t(r, o, n);
    });
  },
  ys = w.createContext({}),
  Tc = { exports: {} },
  oh;
function hy() {
  return (
    oh ||
      ((oh = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (r) {
                    for (var n = 1; n < arguments.length; n++) {
                      var o = arguments[n];
                      for (var i in o)
                        ({}).hasOwnProperty.call(o, i) && (r[i] = o[i]);
                    }
                    return r;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Tc)),
    Tc.exports
  );
}
hy();
var LP = py(function (e, t) {
  var r = e.styles,
    n = Td([r], void 0, w.useContext(ys)),
    o = w.useRef();
  return (
    nh(
      function () {
        var i = t.key + '-global',
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + ' ' + n.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    nh(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((n.next !== void 0 && cy(t, n.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert('', n, s, !1);
      },
      [t, n.name]
    ),
    null
  );
});
function bs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Td(t);
}
var Hn = function () {
    var t = bs.apply(void 0, arguments),
      r = 'animation-' + t.name;
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      }
    };
  },
  $P = WC,
  jP = function (t) {
    return t !== 'theme';
  },
  ih = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? $P : jP;
  },
  sh = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o;
  },
  BP = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      ly(r, n, o),
      DP(function () {
        return cy(r, n, o);
      }),
      null
    );
  },
  NP = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = sh(t, r, n),
      l = a || ih(o),
      c = !l('as');
    return function () {
      var u = arguments,
        f =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push('label:' + i + ';'),
        u[0] == null || u[0].raw === void 0)
      )
        f.push.apply(f, u);
      else {
        f.push(u[0][0]);
        for (var d = u.length, m = 1; m < d; m++) f.push(u[m], u[0][m]);
      }
      var p = py(function (h, v, x) {
        var b = (c && h.as) || o,
          g = '',
          y = [],
          E = h;
        if (h.theme == null) {
          E = {};
          for (var S in h) E[S] = h[S];
          E.theme = w.useContext(ys);
        }
        typeof h.className == 'string'
          ? (g = TP(v.registered, y, h.className))
          : h.className != null && (g = h.className + ' ');
        var C = Td(f.concat(y), v.registered, E);
        (g += v.key + '-' + C.name), s !== void 0 && (g += ' ' + s);
        var T = c && a === void 0 ? ih(b) : l,
          R = {};
        for (var k in h) (c && k === 'as') || (T(k) && (R[k] = h[k]));
        return (
          (R.className = g),
          (R.ref = x),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(BP, {
              cache: v,
              serialized: C,
              isStringTag: typeof b == 'string'
            }),
            w.createElement(b, R)
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = f),
        (p.__emotion_forwardProp = a),
        Object.defineProperty(p, 'toString', {
          value: function () {
            return '.' + s;
          }
        }),
        (p.withComponent = function (h, v) {
          return e(h, M({}, r, v, { shouldForwardProp: sh(p, v, !0) })).apply(
            void 0,
            f
          );
        }),
        p
      );
    };
  },
  FP = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  mu = NP.bind();
FP.forEach(function (e) {
  mu[e] = mu(e);
});
var my = { exports: {} },
  VP = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  WP = VP,
  zP = WP;
function gy() {}
function vy() {}
vy.resetWarningCache = gy;
var UP = function () {
  function e(n, o, i, s, a, l) {
    if (l !== zP) {
      var c = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((c.name = 'Invariant Violation'), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: vy,
    resetWarningCache: gy
  };
  return (r.PropTypes = r), r;
};
my.exports = UP();
var yy = my.exports;
const W = Kg(yy);
let gu;
typeof document == 'object' && (gu = ny({ key: 'css', prepend: !0 }));
function by(e) {
  const { injectFirst: t, children: r } = e;
  return t && gu ? P.jsx(IP, { value: gu, children: r }) : r;
}
function HP(e) {
  return e == null || Object.keys(e).length === 0;
}
function xy(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    n = typeof t == 'function' ? (o) => t(HP(o) ? r : o) : t;
  return P.jsx(LP, { styles: n });
}
function Rd(e, t) {
  return mu(e, t);
}
const wy = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  qP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: xy,
        StyledEngineProvider: by,
        ThemeContext: ys,
        css: bs,
        default: Rd,
        internal_processStyles: wy,
        keyframes: Hn
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Br(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Sy(e) {
  if (!Br(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Sy(e[r]);
    }),
    t
  );
}
function dr(e, t, r = { clone: !0 }) {
  const n = r.clone ? M({}, e) : e;
  return (
    Br(e) &&
      Br(t) &&
      Object.keys(t).forEach((o) => {
        Br(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Br(e[o])
          ? (n[o] = dr(e[o], t[o], r))
          : r.clone
            ? (n[o] = Br(t[o]) ? Sy(t[o]) : t[o])
            : (n[o] = t[o]);
      }),
    n
  );
}
const KP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dr, isPlainObject: Br },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  YP = ['values', 'unit', 'step'],
  GP = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return (
      t.sort((r, n) => r.val - n.val),
      t.reduce((r, n) => M({}, r, { [n.key]: n.val }), {})
    );
  };
function Ey(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = 'px',
      step: n = 5
    } = e,
    o = Z(e, YP),
    i = GP(t),
    s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${r})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == 'number' ? t[d] : d) - n / 100}${r})`;
  }
  function c(d, m) {
    const p = s.indexOf(m);
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${r}) and (max-width:${(p !== -1 && typeof t[s[p]] == 'number' ? t[s[p]] : m) - n / 100}${r})`;
  }
  function u(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const m = s.indexOf(d);
    return m === 0
      ? a(s[1])
      : m === s.length - 1
        ? l(s[m])
        : c(d, s[s.indexOf(d) + 1]).replace('@media', '@media not all and');
  }
  return M(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: c,
      only: u,
      not: f,
      unit: r
    },
    o
  );
}
const XP = { borderRadius: 4 };
function Oi(e, t) {
  return t ? dr(e, t, { clone: !1 }) : e;
}
const kd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ah = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${kd[e]}px)`
  };
function Vt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ah;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = r(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = n.breakpoints || ah;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || kd).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = r(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Cy(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((n, o) => {
          const i = e.up(o);
          return (n[i] = {}), n;
        }, {})) || {}
  );
}
function Py(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function QP(e, ...t) {
  const r = Cy(e),
    n = [r, ...t].reduce((o, i) => dr(o, i), {});
  return Py(Object.keys(r), n);
}
function ZP(e, t) {
  if (typeof e != 'object') return {};
  const r = {},
    n = Object.keys(t);
  return (
    Array.isArray(e)
      ? n.forEach((o, i) => {
          i < e.length && (r[o] = !0);
        })
      : n.forEach((o) => {
          e[o] != null && (r[o] = !0);
        }),
    r
  );
}
function Ln({ values: e, breakpoints: t, base: r }) {
  const n = r || ZP(e, t),
    o = Object.keys(n);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == 'object'
          ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
          : (s[a] = e),
      s
    ),
    {}
  );
}
function Q(e) {
  if (typeof e != 'string') throw new Error(Xi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const JP = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Q }, Symbol.toStringTag, {
    value: 'Module'
  })
);
function Ol(e, t, r = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (n != null) return n;
  }
  return t.split('.').reduce((n, o) => (n && n[o] != null ? n[o] : null), e);
}
function Fa(e, t, r, n = r) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(r))
      : Array.isArray(e)
        ? (o = e[r] || n)
        : (o = Ol(e, r) || n),
    t && (o = t(o, n, e)),
    o
  );
}
function Je(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        c = Ol(l, n) || {};
      return Vt(s, a, (f) => {
        let d = Fa(c, o, f);
        return (
          f === d &&
            typeof f == 'string' &&
            (d = Fa(c, o, `${t}${f === 'default' ? '' : Q(f)}`, f)),
          r === !1 ? d : { [r]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function eT(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const tT = { m: 'margin', p: 'padding' },
  rT = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  lh = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  nT = eT((e) => {
    if (e.length > 2)
      if (lh[e]) e = lh[e];
      else return [e];
    const [t, r] = e.split(''),
      n = tT[t],
      o = rT[r] || '';
    return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
  }),
  Md = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd'
  ],
  Od = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd'
  ];
[...Md, ...Od];
function xs(e, t, r, n) {
  var o;
  const i = (o = Ol(e, t, !1)) != null ? o : r;
  return typeof i == 'number'
    ? (s) => (typeof s == 'string' ? s : i * s)
    : Array.isArray(i)
      ? (s) => (typeof s == 'string' ? s : i[s])
      : typeof i == 'function'
        ? i
        : () => {};
}
function Ad(e) {
  return xs(e, 'spacing', 8);
}
function zn(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const r = Math.abs(t),
    n = e(r);
  return t >= 0 ? n : typeof n == 'number' ? -n : `-${n}`;
}
function oT(e, t) {
  return (r) => e.reduce((n, o) => ((n[o] = zn(t, r)), n), {});
}
function iT(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const o = nT(r),
    i = oT(o, n),
    s = e[r];
  return Vt(e, s, i);
}
function Ty(e, t) {
  const r = Ad(e.theme);
  return Object.keys(e)
    .map((n) => iT(e, t, n, r))
    .reduce(Oi, {});
}
function Ge(e) {
  return Ty(e, Md);
}
Ge.propTypes = {};
Ge.filterProps = Md;
function Xe(e) {
  return Ty(e, Od);
}
Xe.propTypes = {};
Xe.filterProps = Od;
function sT(e = 8) {
  if (e.mui) return e;
  const t = Ad({ spacing: e }),
    r = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((i) => {
          const s = t(i);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (r.mui = !0), r;
}
function Al(...e) {
  const t = e.reduce(
      (n, o) => (
        o.filterProps.forEach((i) => {
          n[i] = o;
        }),
        n
      ),
      {}
    ),
    r = (n) => Object.keys(n).reduce((o, i) => (t[i] ? Oi(o, t[i](n)) : o), {});
  return (
    (r.propTypes = {}),
    (r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), [])),
    r
  );
}
function ur(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function gr(e, t) {
  return Je({ prop: e, themeKey: 'borders', transform: t });
}
const aT = gr('border', ur),
  lT = gr('borderTop', ur),
  cT = gr('borderRight', ur),
  uT = gr('borderBottom', ur),
  dT = gr('borderLeft', ur),
  fT = gr('borderColor'),
  pT = gr('borderTopColor'),
  hT = gr('borderRightColor'),
  mT = gr('borderBottomColor'),
  gT = gr('borderLeftColor'),
  vT = gr('outline', ur),
  yT = gr('outlineColor'),
  _l = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xs(e.theme, 'shape.borderRadius', 4),
        r = (n) => ({ borderRadius: zn(t, n) });
      return Vt(e, e.borderRadius, r);
    }
    return null;
  };
_l.propTypes = {};
_l.filterProps = ['borderRadius'];
Al(aT, lT, cT, uT, dT, fT, pT, hT, mT, gT, _l, vT, yT);
const Dl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ gap: zn(t, n) });
    return Vt(e, e.gap, r);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ['gap'];
const Il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ columnGap: zn(t, n) });
    return Vt(e, e.columnGap, r);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ['columnGap'];
const Ll = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ rowGap: zn(t, n) });
    return Vt(e, e.rowGap, r);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ['rowGap'];
const bT = Je({ prop: 'gridColumn' }),
  xT = Je({ prop: 'gridRow' }),
  wT = Je({ prop: 'gridAutoFlow' }),
  ST = Je({ prop: 'gridAutoColumns' }),
  ET = Je({ prop: 'gridAutoRows' }),
  CT = Je({ prop: 'gridTemplateColumns' }),
  PT = Je({ prop: 'gridTemplateRows' }),
  TT = Je({ prop: 'gridTemplateAreas' }),
  RT = Je({ prop: 'gridArea' });
Al(Dl, Il, Ll, bT, xT, wT, ST, ET, CT, PT, TT, RT);
function Po(e, t) {
  return t === 'grey' ? t : e;
}
const kT = Je({ prop: 'color', themeKey: 'palette', transform: Po }),
  MT = Je({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Po
  }),
  OT = Je({ prop: 'backgroundColor', themeKey: 'palette', transform: Po });
Al(kT, MT, OT);
function Gt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const AT = Je({ prop: 'width', transform: Gt }),
  _d = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, o;
        const i =
          ((n = e.theme) == null ||
          (n = n.breakpoints) == null ||
          (n = n.values) == null
            ? void 0
            : n[r]) || kd[r];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Gt(r) };
      };
      return Vt(e, e.maxWidth, t);
    }
    return null;
  };
_d.filterProps = ['maxWidth'];
const _T = Je({ prop: 'minWidth', transform: Gt }),
  DT = Je({ prop: 'height', transform: Gt }),
  IT = Je({ prop: 'maxHeight', transform: Gt }),
  LT = Je({ prop: 'minHeight', transform: Gt });
Je({ prop: 'size', cssProperty: 'width', transform: Gt });
Je({ prop: 'size', cssProperty: 'height', transform: Gt });
const $T = Je({ prop: 'boxSizing' });
Al(AT, _d, _T, DT, IT, LT, $T);
const ws = {
  border: { themeKey: 'borders', transform: ur },
  borderTop: { themeKey: 'borders', transform: ur },
  borderRight: { themeKey: 'borders', transform: ur },
  borderBottom: { themeKey: 'borders', transform: ur },
  borderLeft: { themeKey: 'borders', transform: ur },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: ur },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: _l },
  color: { themeKey: 'palette', transform: Po },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: Po
  },
  backgroundColor: { themeKey: 'palette', transform: Po },
  p: { style: Xe },
  pt: { style: Xe },
  pr: { style: Xe },
  pb: { style: Xe },
  pl: { style: Xe },
  px: { style: Xe },
  py: { style: Xe },
  padding: { style: Xe },
  paddingTop: { style: Xe },
  paddingRight: { style: Xe },
  paddingBottom: { style: Xe },
  paddingLeft: { style: Xe },
  paddingX: { style: Xe },
  paddingY: { style: Xe },
  paddingInline: { style: Xe },
  paddingInlineStart: { style: Xe },
  paddingInlineEnd: { style: Xe },
  paddingBlock: { style: Xe },
  paddingBlockStart: { style: Xe },
  paddingBlockEnd: { style: Xe },
  m: { style: Ge },
  mt: { style: Ge },
  mr: { style: Ge },
  mb: { style: Ge },
  ml: { style: Ge },
  mx: { style: Ge },
  my: { style: Ge },
  margin: { style: Ge },
  marginTop: { style: Ge },
  marginRight: { style: Ge },
  marginBottom: { style: Ge },
  marginLeft: { style: Ge },
  marginX: { style: Ge },
  marginY: { style: Ge },
  marginInline: { style: Ge },
  marginInlineStart: { style: Ge },
  marginInlineEnd: { style: Ge },
  marginBlock: { style: Ge },
  marginBlockStart: { style: Ge },
  marginBlockEnd: { style: Ge },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Dl },
  rowGap: { style: Ll },
  columnGap: { style: Il },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Gt },
  maxWidth: { style: _d },
  minWidth: { transform: Gt },
  height: { transform: Gt },
  maxHeight: { transform: Gt },
  minHeight: { transform: Gt },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' }
};
function jT(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function BT(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Ry() {
  function e(r, n, o, i) {
    const s = { [r]: n, theme: o },
      a = i[r];
    if (!a) return { [r]: n };
    const { cssProperty: l = r, themeKey: c, transform: u, style: f } = a;
    if (n == null) return null;
    if (c === 'typography' && n === 'inherit') return { [r]: n };
    const d = Ol(o, c) || {};
    return f
      ? f(s)
      : Vt(s, n, (p) => {
          let h = Fa(d, u, p);
          return (
            p === h &&
              typeof p == 'string' &&
              (h = Fa(d, u, `${r}${p === 'default' ? '' : Q(p)}`, p)),
            l === !1 ? h : { [l]: h }
          );
        });
  }
  function t(r) {
    var n;
    const { sx: o, theme: i = {} } = r || {};
    if (!o) return null;
    const s = (n = i.unstable_sxConfig) != null ? n : ws;
    function a(l) {
      let c = l;
      if (typeof l == 'function') c = l(i);
      else if (typeof l != 'object') return l;
      if (!c) return null;
      const u = Cy(i.breakpoints),
        f = Object.keys(u);
      let d = u;
      return (
        Object.keys(c).forEach((m) => {
          const p = BT(c[m], i);
          if (p != null)
            if (typeof p == 'object')
              if (s[m]) d = Oi(d, e(m, p, i, s));
              else {
                const h = Vt({ theme: i }, p, (v) => ({ [m]: v }));
                jT(h, p) ? (d[m] = t({ sx: p, theme: i })) : (d = Oi(d, h));
              }
            else d = Oi(d, e(m, p, i, s));
        }),
        Py(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Yo = Ry();
Yo.filterProps = ['sx'];
function ky(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == 'function'
    ? {
        [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t
      }
    : r.palette.mode === e
      ? t
      : {};
}
const NT = ['breakpoints', 'palette', 'spacing', 'shape'];
function Ss(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {} } = e,
    s = Z(e, NT),
    a = Ey(r),
    l = sT(o);
  let c = dr(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: M({ mode: 'light' }, n),
      spacing: l,
      shape: M({}, XP, i)
    },
    s
  );
  return (
    (c.applyStyles = ky),
    (c = t.reduce((u, f) => dr(u, f), c)),
    (c.unstable_sxConfig = M({}, ws, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Yo({ sx: f, theme: this });
    }),
    c
  );
}
const FT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ss,
      private_createBreakpoints: Ey,
      unstable_applyStyles: ky
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function VT(e) {
  return Object.keys(e).length === 0;
}
function Dd(e = null) {
  const t = w.useContext(ys);
  return !t || VT(t) ? e : t;
}
const WT = Ss();
function $l(e = WT) {
  return Dd(e);
}
function zT({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const n = $l(r),
    o = typeof e == 'function' ? e((t && n[t]) || n) : e;
  return P.jsx(xy, { styles: o });
}
const UT = ['sx'],
  HT = (e) => {
    var t, r;
    const n = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) !=
        null
          ? t
          : ws;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (n.systemProps[i] = e[i]) : (n.otherProps[i] = e[i]);
      }),
      n
    );
  };
function Es(e) {
  const { sx: t } = e,
    r = Z(e, UT),
    { systemProps: n, otherProps: o } = HT(r);
  let i;
  return (
    Array.isArray(t)
      ? (i = [n, ...t])
      : typeof t == 'function'
        ? (i = (...s) => {
            const a = t(...s);
            return Br(a) ? M({}, n, a) : n;
          })
        : (i = M({}, n, t)),
    M({}, o, { sx: i })
  );
}
const qT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Yo,
        extendSxProp: Es,
        unstable_createStyleFunctionSx: Ry,
        unstable_defaultSxConfig: ws
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ch = (e) => e,
  KT = () => {
    let e = ch;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = ch;
      }
    };
  },
  Id = KT();
function My(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = My(e[t])) && (n && (n += ' '), (n += r));
    } else for (r in e) e[r] && (n && (n += ' '), (n += r));
  return n;
}
function ue() {
  for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = My(e)) && (n && (n += ' '), (n += t));
  return n;
}
const YT = ['className', 'component'];
function GT(e = {}) {
  const {
      themeId: t,
      defaultTheme: r,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: o
    } = e,
    i = Rd('div', {
      shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as'
    })(Yo);
  return w.forwardRef(function (l, c) {
    const u = $l(r),
      f = Es(l),
      { className: d, component: m = 'div' } = f,
      p = Z(f, YT);
    return P.jsx(
      i,
      M(
        {
          as: m,
          ref: c,
          className: ue(d, o ? o(n) : n),
          theme: (t && u[t]) || u
        },
        p
      )
    );
  });
}
const Oy = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function Ve(e, t, r = 'Mui') {
  const n = Oy[t];
  return n ? `${r}-${n}` : `${Id.generate(e)}-${t}`;
}
function We(e, t, r = 'Mui') {
  const n = {};
  return (
    t.forEach((o) => {
      n[o] = Ve(e, o, r);
    }),
    n
  );
}
var Ay = { exports: {} },
  Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld = Symbol.for('react.element'),
  $d = Symbol.for('react.portal'),
  jl = Symbol.for('react.fragment'),
  Bl = Symbol.for('react.strict_mode'),
  Nl = Symbol.for('react.profiler'),
  Fl = Symbol.for('react.provider'),
  Vl = Symbol.for('react.context'),
  XT = Symbol.for('react.server_context'),
  Wl = Symbol.for('react.forward_ref'),
  zl = Symbol.for('react.suspense'),
  Ul = Symbol.for('react.suspense_list'),
  Hl = Symbol.for('react.memo'),
  ql = Symbol.for('react.lazy'),
  QT = Symbol.for('react.offscreen'),
  _y;
_y = Symbol.for('react.module.reference');
function vr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ld:
        switch (((e = e.type), e)) {
          case jl:
          case Nl:
          case Bl:
          case zl:
          case Ul:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case XT:
              case Vl:
              case Wl:
              case ql:
              case Hl:
              case Fl:
                return e;
              default:
                return t;
            }
        }
      case $d:
        return t;
    }
  }
}
Oe.ContextConsumer = Vl;
Oe.ContextProvider = Fl;
Oe.Element = Ld;
Oe.ForwardRef = Wl;
Oe.Fragment = jl;
Oe.Lazy = ql;
Oe.Memo = Hl;
Oe.Portal = $d;
Oe.Profiler = Nl;
Oe.StrictMode = Bl;
Oe.Suspense = zl;
Oe.SuspenseList = Ul;
Oe.isAsyncMode = function () {
  return !1;
};
Oe.isConcurrentMode = function () {
  return !1;
};
Oe.isContextConsumer = function (e) {
  return vr(e) === Vl;
};
Oe.isContextProvider = function (e) {
  return vr(e) === Fl;
};
Oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ld;
};
Oe.isForwardRef = function (e) {
  return vr(e) === Wl;
};
Oe.isFragment = function (e) {
  return vr(e) === jl;
};
Oe.isLazy = function (e) {
  return vr(e) === ql;
};
Oe.isMemo = function (e) {
  return vr(e) === Hl;
};
Oe.isPortal = function (e) {
  return vr(e) === $d;
};
Oe.isProfiler = function (e) {
  return vr(e) === Nl;
};
Oe.isStrictMode = function (e) {
  return vr(e) === Bl;
};
Oe.isSuspense = function (e) {
  return vr(e) === zl;
};
Oe.isSuspenseList = function (e) {
  return vr(e) === Ul;
};
Oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === jl ||
    e === Nl ||
    e === Bl ||
    e === zl ||
    e === Ul ||
    e === QT ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ql ||
        e.$$typeof === Hl ||
        e.$$typeof === Fl ||
        e.$$typeof === Vl ||
        e.$$typeof === Wl ||
        e.$$typeof === _y ||
        e.getModuleId !== void 0))
  );
};
Oe.typeOf = vr;
Ay.exports = Oe;
var uh = Ay.exports;
const ZT = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Dy(e) {
  const t = `${e}`.match(ZT);
  return (t && t[1]) || '';
}
function Iy(e, t = '') {
  return e.displayName || e.name || Dy(e) || t;
}
function dh(e, t, r) {
  const n = Iy(t);
  return e.displayName || (n !== '' ? `${r}(${n})` : r);
}
function JT(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return Iy(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case uh.ForwardRef:
          return dh(e, e.render, 'ForwardRef');
        case uh.Memo:
          return dh(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const eR = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: JT, getFunctionName: Dy },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tR = ['ownerState'],
  rR = ['variants'],
  nR = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function oR(e) {
  return Object.keys(e).length === 0;
}
function iR(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Rc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const sR = Ss(),
  aR = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Gs({ defaultTheme: e, theme: t, themeId: r }) {
  return oR(t) ? e : t[r] || t;
}
function lR(e) {
  return e ? (t, r) => r[e] : null;
}
function ga(e, t) {
  let { ownerState: r } = t,
    n = Z(t, tR);
  const o = typeof e == 'function' ? e(M({ ownerState: r }, n)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => ga(i, M({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = Z(o, rR);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == 'function'
          ? (c = l.props(M({ ownerState: r }, n, r)))
          : Object.keys(l.props).forEach((u) => {
              (r == null ? void 0 : r[u]) !== l.props[u] &&
                n[u] !== l.props[u] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style(M({ ownerState: r }, n, r))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function cR(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = sR,
      rootShouldForwardProp: n = Rc,
      slotShouldForwardProp: o = Rc
    } = e,
    i = (s) =>
      Yo(M({}, s, { theme: Gs(M({}, s, { defaultTheme: r, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      wy(s, (E) => E.filter((S) => !(S != null && S.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = lR(aR(c))
        } = a,
        m = Z(a, nR),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = Rc;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : iR(s) && (x = void 0);
      const b = Rd(s, M({ shouldForwardProp: x, label: v }, m)),
        g = (E) =>
          (typeof E == 'function' && E.__emotion_real !== E) || Br(E)
            ? (S) =>
                ga(
                  E,
                  M({}, S, {
                    theme: Gs({ theme: S.theme, defaultTheme: r, themeId: t })
                  })
                )
            : E,
        y = (E, ...S) => {
          let C = g(E);
          const T = S ? S.map(g) : [];
          l &&
            d &&
            T.push((A) => {
              const I = Gs(M({}, A, { defaultTheme: r, themeId: t }));
              if (
                !I.components ||
                !I.components[l] ||
                !I.components[l].styleOverrides
              )
                return null;
              const L = I.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(L).forEach(([N, B]) => {
                  D[N] = ga(B, M({}, A, { theme: I }));
                }),
                d(A, D)
              );
            }),
            l &&
              !p &&
              T.push((A) => {
                var I;
                const L = Gs(M({}, A, { defaultTheme: r, themeId: t })),
                  D =
                    L == null ||
                    (I = L.components) == null ||
                    (I = I[l]) == null
                      ? void 0
                      : I.variants;
                return ga({ variants: D }, M({}, A, { theme: L }));
              }),
            h || T.push(i);
          const R = T.length - S.length;
          if (Array.isArray(E) && R > 0) {
            const A = new Array(R).fill('');
            (C = [...E, ...A]), (C.raw = [...E.raw, ...A]);
          }
          const k = b(C, ...T);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return b.withConfig && (y.withConfig = b.withConfig), y;
    }
  );
}
const uR = cR();
function Va(e, t) {
  const r = M({}, t);
  return (
    Object.keys(e).forEach((n) => {
      if (n.toString().match(/^(components|slots)$/)) r[n] = M({}, e[n], r[n]);
      else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[n] || {},
          i = t[n];
        (r[n] = {}),
          !i || !Object.keys(i)
            ? (r[n] = o)
            : !o || !Object.keys(o)
              ? (r[n] = i)
              : ((r[n] = M({}, i)),
                Object.keys(o).forEach((s) => {
                  r[n][s] = Va(o[s], i[s]);
                }));
      } else r[n] === void 0 && (r[n] = e[n]);
    }),
    r
  );
}
function Ly(e) {
  const { theme: t, name: r, props: n } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? n
    : Va(t.components[r].defaultProps, n);
}
function dR({ props: e, name: t, defaultTheme: r, themeId: n }) {
  let o = $l(r);
  return n && (o = o[n] || o), Ly({ theme: o, name: t, props: e });
}
const ln = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function fR(e, t, r, n, o) {
  const [i, s] = w.useState(() =>
    o && r ? r(e).matches : n ? n(e).matches : t
  );
  return (
    ln(() => {
      let a = !0;
      if (!r) return;
      const l = r(e),
        c = () => {
          a && s(l.matches);
        };
      return (
        c(),
        l.addListener(c),
        () => {
          (a = !1), l.removeListener(c);
        }
      );
    }, [e, r]),
    i
  );
}
const $y = w.useSyncExternalStore;
function pR(e, t, r, n, o) {
  const i = w.useCallback(() => t, [t]),
    s = w.useMemo(() => {
      if (o && r) return () => r(e).matches;
      if (n !== null) {
        const { matches: u } = n(e);
        return () => u;
      }
      return i;
    }, [i, e, n, o, r]),
    [a, l] = w.useMemo(() => {
      if (r === null) return [i, () => () => {}];
      const u = r(e);
      return [
        () => u.matches,
        (f) => (
          u.addListener(f),
          () => {
            u.removeListener(f);
          }
        )
      ];
    }, [i, r, e]);
  return $y(l, a, s);
}
function es(e, t = {}) {
  const r = Dd(),
    n = typeof window < 'u' && typeof window.matchMedia < 'u',
    {
      defaultMatches: o = !1,
      matchMedia: i = n ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1
    } = Ly({ name: 'MuiUseMediaQuery', props: t, theme: r });
  let l = typeof e == 'function' ? e(r) : e;
  return (
    (l = l.replace(/^@media( ?)/m, '')),
    ($y !== void 0 ? pR : fR)(l, o, i, s, a)
  );
}
function hR(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const mR = Object.freeze(
  Object.defineProperty({ __proto__: null, default: hR }, Symbol.toStringTag, {
    value: 'Module'
  })
);
function vu(...e) {
  return e.reduce(
    (t, r) =>
      r == null
        ? t
        : function (...o) {
            t.apply(this, o), r.apply(this, o);
          },
    () => {}
  );
}
function jy(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), (r = setTimeout(i, t));
  }
  return (
    (n.clear = () => {
      clearTimeout(r);
    }),
    n
  );
}
function gR(e, t) {
  return () => null;
}
function vR(e, t) {
  var r, n;
  return (
    w.isValidElement(e) &&
    t.indexOf(
      (r = e.type.muiName) != null
        ? r
        : (n = e.type) == null ||
            (n = n._payload) == null ||
            (n = n.value) == null
          ? void 0
          : n.muiName
    ) !== -1
  );
}
function $t(e) {
  return (e && e.ownerDocument) || document;
}
function Go(e) {
  return $t(e).defaultView || window;
}
function yR(e, t) {
  return () => null;
}
function Wa(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
let fh = 0;
function bR(e) {
  const [t, r] = w.useState(e),
    n = e || t;
  return (
    w.useEffect(() => {
      t == null && ((fh += 1), r(`mui-${fh}`));
    }, [t]),
    n
  );
}
const ph = ko.useId;
function xR(e) {
  if (ph !== void 0) {
    const t = ph();
    return e ?? t;
  }
  return bR(e);
}
function wR(e, t, r, n, o) {
  return null;
}
function SR({ controlled: e, default: t, name: r, state: n = 'value' }) {
  const { current: o } = w.useRef(e !== void 0),
    [i, s] = w.useState(t),
    a = o ? e : i,
    l = w.useCallback((c) => {
      o || s(c);
    }, []);
  return [a, l];
}
function tn(e) {
  const t = w.useRef(e);
  return (
    ln(() => {
      t.current = e;
    }),
    w.useRef((...r) => (0, t.current)(...r)).current
  );
}
function ct(...e) {
  return w.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((r) => {
              Wa(r, t);
            });
          },
    e
  );
}
const hh = {};
function ER(e, t) {
  const r = w.useRef(hh);
  return r.current === hh && (r.current = e(t)), r;
}
const CR = [];
function PR(e) {
  w.useEffect(e, CR);
}
class Kl {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Kl();
  }
  start(t, r) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), r();
      }, t));
  }
}
function jd() {
  const e = ER(Kl.create).current;
  return PR(e.disposeEffect), e;
}
let Yl = !0,
  yu = !1;
const TR = new Kl(),
  RR = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    'datetime-local': !0
  };
function kR(e) {
  const { type: t, tagName: r } = e;
  return !!(
    (r === 'INPUT' && RR[t] && !e.readOnly) ||
    (r === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function MR(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Yl = !0);
}
function kc() {
  Yl = !1;
}
function OR() {
  this.visibilityState === 'hidden' && yu && (Yl = !0);
}
function AR(e) {
  e.addEventListener('keydown', MR, !0),
    e.addEventListener('mousedown', kc, !0),
    e.addEventListener('pointerdown', kc, !0),
    e.addEventListener('touchstart', kc, !0),
    e.addEventListener('visibilitychange', OR, !0);
}
function _R(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Yl || kR(t);
}
function By() {
  const e = w.useCallback((o) => {
      o != null && AR(o.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function r() {
    return t.current
      ? ((yu = !0),
        TR.start(100, () => {
          yu = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function n(o) {
    return _R(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: n, onBlur: r, ref: e };
}
function DR(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ze(e, t, r = void 0) {
  const n = {};
  return (
    Object.keys(e).forEach((o) => {
      n[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== '' && i.push(a), r && r[s] && i.push(r[s]);
          }
          return i;
        }, [])
        .join(' ');
    }),
    n
  );
}
const Ny = w.createContext(null);
function Fy() {
  return w.useContext(Ny);
}
const IR = typeof Symbol == 'function' && Symbol.for,
  LR = IR ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function $R(e, t) {
  return typeof t == 'function' ? t(e) : M({}, e, t);
}
function jR(e) {
  const { children: t, theme: r } = e,
    n = Fy(),
    o = w.useMemo(() => {
      const i = n === null ? r : $R(n, r);
      return i != null && (i[LR] = n !== null), i;
    }, [r, n]);
  return P.jsx(Ny.Provider, { value: o, children: t });
}
const BR = ['value'],
  Vy = w.createContext();
function NR(e) {
  let { value: t } = e,
    r = Z(e, BR);
  return P.jsx(Vy.Provider, M({ value: t ?? !0 }, r));
}
const Wy = () => {
    const e = w.useContext(Vy);
    return e ?? !1;
  },
  zy = w.createContext(void 0);
function FR({ value: e, children: t }) {
  return P.jsx(zy.Provider, { value: e, children: t });
}
function VR(e) {
  const { theme: t, name: r, props: n } = e;
  if (!t || !t.components || !t.components[r]) return n;
  const o = t.components[r];
  return o.defaultProps
    ? Va(o.defaultProps, n)
    : !o.styleOverrides && !o.variants
      ? Va(o, n)
      : n;
}
function WR({ props: e, name: t }) {
  const r = w.useContext(zy);
  return VR({ props: e, name: t, theme: { components: r } });
}
const mh = {};
function gh(e, t, r, n = !1) {
  return w.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof r == 'function') {
      const i = r(o),
        s = e ? M({}, t, { [e]: i }) : i;
      return n ? () => s : s;
    }
    return e ? M({}, t, { [e]: r }) : M({}, t, r);
  }, [e, t, r, n]);
}
function zR(e) {
  const { children: t, theme: r, themeId: n } = e,
    o = Dd(mh),
    i = Fy() || mh,
    s = gh(n, o, r),
    a = gh(n, i, r, !0),
    l = s.direction === 'rtl';
  return P.jsx(jR, {
    theme: a,
    children: P.jsx(ys.Provider, {
      value: s,
      children: P.jsx(NR, {
        value: l,
        children: P.jsx(FR, {
          value: s == null ? void 0 : s.components,
          children: t
        })
      })
    })
  });
}
const UR = [
    'component',
    'direction',
    'spacing',
    'divider',
    'children',
    'className',
    'useFlexGap'
  ],
  HR = Ss(),
  qR = uR('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  });
function KR(e) {
  return dR({ props: e, name: 'MuiStack', defaultTheme: HR });
}
function YR(e, t) {
  const r = w.Children.toArray(e).filter(Boolean);
  return r.reduce(
    (n, o, i) => (
      n.push(o),
      i < r.length - 1 && n.push(w.cloneElement(t, { key: `separator-${i}` })),
      n
    ),
    []
  );
}
const GR = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom'
    })[e],
  XR = ({ ownerState: e, theme: t }) => {
    let r = M(
      { display: 'flex', flexDirection: 'column' },
      Vt(
        { theme: t },
        Ln({ values: e.direction, breakpoints: t.breakpoints.values }),
        (n) => ({ flexDirection: n })
      )
    );
    if (e.spacing) {
      const n = Ad(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == 'object' && e.spacing[c] != null) ||
              (typeof e.direction == 'object' && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        i = Ln({ values: e.direction, base: o }),
        s = Ln({ values: e.spacing, base: o });
      typeof i == 'object' &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const d = c > 0 ? i[u[c - 1]] : 'column';
            i[l] = d;
          }
        }),
        (r = dr(
          r,
          Vt({ theme: t }, s, (l, c) =>
            e.useFlexGap
              ? { gap: zn(n, l) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    [`margin${GR(c ? i[c] : e.direction)}`]: zn(n, l)
                  }
                }
          )
        ));
    }
    return (r = QP(t.breakpoints, r)), r;
  };
function QR(e = {}) {
  const {
      createStyledComponent: t = qR,
      useThemeProps: r = KR,
      componentName: n = 'MuiStack'
    } = e,
    o = () => ze({ root: ['root'] }, (l) => Ve(n, l), {}),
    i = t(XR);
  return w.forwardRef(function (l, c) {
    const u = r(l),
      f = Es(u),
      {
        component: d = 'div',
        direction: m = 'column',
        spacing: p = 0,
        divider: h,
        children: v,
        className: x,
        useFlexGap: b = !1
      } = f,
      g = Z(f, UR),
      y = { direction: m, spacing: p, useFlexGap: b },
      E = o();
    return P.jsx(
      i,
      M({ as: d, ownerState: y, ref: c, className: ue(E.root, x) }, g, {
        children: h ? YR(v, h) : v
      })
    );
  });
}
function ZR(e, t) {
  return M(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 }
      }
    },
    t
  );
}
var et = {},
  Uy = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Uy);
var qn = Uy.exports;
const JR = Dr(FC),
  ek = Dr(mR);
var Hy = qn;
Object.defineProperty(et, '__esModule', { value: !0 });
var vt = (et.alpha = Qy);
et.blend = dk;
et.colorChannel = void 0;
var qy = (et.darken = Nd);
et.decomposeColor = pr;
var vh = (et.emphasize = Zy),
  tk = (et.getContrastRatio = sk);
et.getLuminance = za;
et.hexToRgb = Yy;
et.hslToRgb = Xy;
var Ky = (et.lighten = Fd);
et.private_safeAlpha = ak;
et.private_safeColorChannel = void 0;
et.private_safeDarken = lk;
et.private_safeEmphasize = uk;
et.private_safeLighten = ck;
et.recomposeColor = Xo;
et.rgbToHex = ik;
var yh = Hy(JR),
  rk = Hy(ek);
function Bd(e, t = 0, r = 1) {
  return (0, rk.default)(e, t, r);
}
function Yy(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((n) => n + n)),
    r
      ? `rgb${r.length === 4 ? 'a' : ''}(${r.map((n, o) => (o < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function nk(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function pr(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return pr(Yy(e));
  const t = e.indexOf('('),
    r = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(r) === -1)
    throw new Error((0, yh.default)(9, e));
  let n = e.substring(t + 1, e.length - 1),
    o;
  if (r === 'color') {
    if (
      ((n = n.split(' ')),
      (o = n.shift()),
      n.length === 4 && n[3].charAt(0) === '/' && (n[3] = n[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, yh.default)(10, o));
  } else n = n.split(',');
  return (
    (n = n.map((i) => parseFloat(i))), { type: r, values: n, colorSpace: o }
  );
}
const Gy = (e) => {
  const t = pr(e);
  return t.values
    .slice(0, 3)
    .map((r, n) => (t.type.indexOf('hsl') !== -1 && n !== 0 ? `${r}%` : r))
    .join(' ');
};
et.colorChannel = Gy;
const ok = (e, t) => {
  try {
    return Gy(e);
  } catch {
    return e;
  }
};
et.private_safeColorChannel = ok;
function Xo(e) {
  const { type: t, colorSpace: r } = e;
  let { values: n } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (n = n.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.indexOf('color') !== -1
      ? (n = `${r} ${n.join(' ')}`)
      : (n = `${n.join(', ')}`),
    `${t}(${n})`
  );
}
function ik(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = pr(e);
  return `#${t.map((r, n) => nk(n === 3 ? Math.round(255 * r) : r)).join('')}`;
}
function Xy(e) {
  e = pr(e);
  const { values: t } = e,
    r = t[0],
    n = t[1] / 100,
    o = t[2] / 100,
    i = n * Math.min(o, 1 - o),
    s = (c, u = (c + r / 30) % 12) =>
      o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = 'rgb';
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255)
  ];
  return (
    e.type === 'hsla' && ((a += 'a'), l.push(t[3])), Xo({ type: a, values: l })
  );
}
function za(e) {
  e = pr(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? pr(Xy(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== 'color' && (r /= 255),
        r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function sk(e, t) {
  const r = za(e),
    n = za(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Qy(e, t) {
  return (
    (e = pr(e)),
    (t = Bd(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Xo(e)
  );
}
function ak(e, t, r) {
  try {
    return Qy(e, t);
  } catch {
    return e;
  }
}
function Nd(e, t) {
  if (((e = pr(e)), (t = Bd(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return Xo(e);
}
function lk(e, t, r) {
  try {
    return Nd(e, t);
  } catch {
    return e;
  }
}
function Fd(e, t) {
  if (((e = pr(e)), (t = Bd(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return Xo(e);
}
function ck(e, t, r) {
  try {
    return Fd(e, t);
  } catch {
    return e;
  }
}
function Zy(e, t = 0.15) {
  return za(e) > 0.5 ? Nd(e, t) : Fd(e, t);
}
function uk(e, t, r) {
  try {
    return Zy(e, t);
  } catch {
    return e;
  }
}
function dk(e, t, r, n = 1) {
  const o = (l, c) =>
      Math.round((l ** (1 / n) * (1 - r) + c ** (1 / n) * r) ** n),
    i = pr(e),
    s = pr(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2])
    ];
  return Xo({ type: 'rgb', values: a });
}
const ts = { black: '#000', white: '#fff' },
  fk = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  },
  no = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  },
  oo = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  },
  ui = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  },
  io = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  },
  so = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  },
  ao = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  },
  pk = ['mode', 'contrastThreshold', 'tonalOffset'],
  bh = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: ts.white, default: ts.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  Mc = {
    text: {
      primary: ts.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: ts.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
function xh(e, t, r, n) {
  const o = n.light || n,
    i = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === 'light'
        ? (e.light = Ky(e.main, o))
        : t === 'dark' && (e.dark = qy(e.main, i)));
}
function hk(e = 'light') {
  return e === 'dark'
    ? { main: io[200], light: io[50], dark: io[400] }
    : { main: io[700], light: io[400], dark: io[800] };
}
function mk(e = 'light') {
  return e === 'dark'
    ? { main: no[200], light: no[50], dark: no[400] }
    : { main: no[500], light: no[300], dark: no[700] };
}
function gk(e = 'light') {
  return e === 'dark'
    ? { main: oo[500], light: oo[300], dark: oo[700] }
    : { main: oo[700], light: oo[400], dark: oo[800] };
}
function vk(e = 'light') {
  return e === 'dark'
    ? { main: so[400], light: so[300], dark: so[700] }
    : { main: so[700], light: so[500], dark: so[900] };
}
function yk(e = 'light') {
  return e === 'dark'
    ? { main: ao[400], light: ao[300], dark: ao[700] }
    : { main: ao[800], light: ao[500], dark: ao[900] };
}
function bk(e = 'light') {
  return e === 'dark'
    ? { main: ui[400], light: ui[300], dark: ui[700] }
    : { main: '#ed6c02', light: ui[500], dark: ui[900] };
}
function xk(e) {
  const {
      mode: t = 'light',
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2
    } = e,
    o = Z(e, pk),
    i = e.primary || hk(t),
    s = e.secondary || mk(t),
    a = e.error || gk(t),
    l = e.info || vk(t),
    c = e.success || yk(t),
    u = e.warning || bk(t);
  function f(h) {
    return tk(h, Mc.text.primary) >= r ? Mc.text.primary : bh.text.primary;
  }
  const d = ({
      color: h,
      name: v,
      mainShade: x = 500,
      lightShade: b = 300,
      darkShade: g = 700
    }) => {
      if (
        ((h = M({}, h)),
        !h.main && h[x] && (h.main = h[x]),
        !h.hasOwnProperty('main'))
      )
        throw new Error(Xi(11, v ? ` (${v})` : '', x));
      if (typeof h.main != 'string')
        throw new Error(Xi(12, v ? ` (${v})` : '', JSON.stringify(h.main)));
      return (
        xh(h, 'light', b, n),
        xh(h, 'dark', g, n),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    m = { dark: Mc, light: bh };
  return dr(
    M(
      {
        common: M({}, ts),
        mode: t,
        primary: d({ color: i, name: 'primary' }),
        secondary: d({
          color: s,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700'
        }),
        error: d({ color: a, name: 'error' }),
        warning: d({ color: u, name: 'warning' }),
        info: d({ color: l, name: 'info' }),
        success: d({ color: c, name: 'success' }),
        grey: fk,
        contrastThreshold: r,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: n
      },
      m[t]
    ),
    o
  );
}
const wk = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem'
];
function Sk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wh = { textTransform: 'uppercase' },
  Sh = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ek(e, t) {
  const r = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: n = Sh,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: f
    } = r,
    d = Z(r, wk),
    m = o / 14,
    p = f || ((x) => `${(x / c) * m}rem`),
    h = (x, b, g, y, E) =>
      M(
        { fontFamily: n, fontWeight: x, fontSize: p(b), lineHeight: g },
        n === Sh ? { letterSpacing: `${Sk(y / b)}em` } : {},
        E,
        u
      ),
    v = {
      h1: h(i, 96, 1.167, -1.5),
      h2: h(i, 60, 1.2, -0.5),
      h3: h(s, 48, 1.167, 0),
      h4: h(s, 34, 1.235, 0.25),
      h5: h(s, 24, 1.334, 0),
      h6: h(a, 20, 1.6, 0.15),
      subtitle1: h(s, 16, 1.75, 0.15),
      subtitle2: h(a, 14, 1.57, 0.1),
      body1: h(s, 16, 1.5, 0.15),
      body2: h(s, 14, 1.43, 0.15),
      button: h(a, 14, 1.75, 0.4, wh),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, wh),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    };
  return dr(
    M(
      {
        htmlFontSize: c,
        pxToRem: p,
        fontFamily: n,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l
      },
      v
    ),
    d,
    { clone: !1 }
  );
}
const Ck = 0.2,
  Pk = 0.14,
  Tk = 0.12;
function Ue(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ck})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Pk})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Tk})`
  ].join(',');
}
const Rk = [
    'none',
    Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ],
  kk = ['duration', 'easing', 'delay'],
  Mk = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  Jy = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
function Eh(e) {
  return `${Math.round(e)}ms`;
}
function Ok(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ak(e) {
  const t = M({}, Mk, e.easing),
    r = M({}, Jy, e.duration);
  return M(
    {
      getAutoHeightDuration: Ok,
      create: (o = ['all'], i = {}) => {
        const {
          duration: s = r.standard,
          easing: a = t.easeInOut,
          delay: l = 0
        } = i;
        return (
          Z(i, kk),
          (Array.isArray(o) ? o : [o])
            .map(
              (c) =>
                `${c} ${typeof s == 'string' ? s : Eh(s)} ${a} ${typeof l == 'string' ? l : Eh(l)}`
            )
            .join(',')
        );
      }
    },
    e,
    { easing: t, duration: r }
  );
}
const _k = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  Dk = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape'
  ];
function Vd(e = {}, ...t) {
  const {
      mixins: r = {},
      palette: n = {},
      transitions: o = {},
      typography: i = {}
    } = e,
    s = Z(e, Dk);
  if (e.vars) throw new Error(Xi(18));
  const a = xk(n),
    l = Ss(e);
  let c = dr(l, {
    mixins: ZR(l.breakpoints, r),
    palette: a,
    shadows: Rk.slice(),
    typography: Ek(a, i),
    transitions: Ak(o),
    zIndex: M({}, _k)
  });
  return (
    (c = dr(c, s)),
    (c = t.reduce((u, f) => dr(u, f), c)),
    (c.unstable_sxConfig = M({}, ws, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Yo({ sx: f, theme: this });
    }),
    c
  );
}
const Wd = Vd();
function dt() {
  const e = $l(Wd);
  return e[Ao] || e;
}
var Cs = {},
  Oc = { exports: {} },
  Ch;
function Ik() {
  return (
    Ch ||
      ((Ch = 1),
      (function (e) {
        function t(r, n) {
          if (r == null) return {};
          var o = {};
          for (var i in r)
            if ({}.hasOwnProperty.call(r, i)) {
              if (n.indexOf(i) >= 0) continue;
              o[i] = r[i];
            }
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Oc)),
    Oc.exports
  );
}
const eb = Dr(qP),
  Lk = Dr(KP),
  $k = Dr(JP),
  jk = Dr(eR),
  Bk = Dr(FT),
  Nk = Dr(qT);
var Qo = qn;
Object.defineProperty(Cs, '__esModule', { value: !0 });
var Fk = (Cs.default = Jk);
Cs.shouldForwardProp = va;
Cs.systemDefaultTheme = void 0;
var lr = Qo(hy()),
  bu = Qo(Ik()),
  Ph = Kk(eb),
  Vk = Lk;
Qo($k);
Qo(jk);
var Wk = Qo(Bk),
  zk = Qo(Nk);
const Uk = ['ownerState'],
  Hk = ['variants'],
  qk = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function tb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (tb = function (n) {
    return n ? r : t;
  })(e);
}
function Kk(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = tb(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function Yk(e) {
  return Object.keys(e).length === 0;
}
function Gk(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function va(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Xk = (Cs.systemDefaultTheme = (0, Wk.default)()),
  Qk = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Xs({ defaultTheme: e, theme: t, themeId: r }) {
  return Yk(t) ? e : t[r] || t;
}
function Zk(e) {
  return e ? (t, r) => r[e] : null;
}
function ya(e, t) {
  let { ownerState: r } = t,
    n = (0, bu.default)(t, Uk);
  const o =
    typeof e == 'function' ? e((0, lr.default)({ ownerState: r }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => ya(i, (0, lr.default)({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, bu.default)(o, Hk);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == 'function'
          ? (c = l.props((0, lr.default)({ ownerState: r }, n, r)))
          : Object.keys(l.props).forEach((u) => {
              (r == null ? void 0 : r[u]) !== l.props[u] &&
                n[u] !== l.props[u] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style((0, lr.default)({ ownerState: r }, n, r))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function Jk(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = Xk,
      rootShouldForwardProp: n = va,
      slotShouldForwardProp: o = va
    } = e,
    i = (s) =>
      (0, zk.default)(
        (0, lr.default)({}, s, {
          theme: Xs((0, lr.default)({}, s, { defaultTheme: r, themeId: t }))
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Ph.internal_processStyles)(s, (E) =>
        E.filter((S) => !(S != null && S.__mui_systemSx))
      );
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = Zk(Qk(c))
        } = a,
        m = (0, bu.default)(a, qk),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = va;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : Gk(s) && (x = void 0);
      const b = (0, Ph.default)(
          s,
          (0, lr.default)({ shouldForwardProp: x, label: v }, m)
        ),
        g = (E) =>
          (typeof E == 'function' && E.__emotion_real !== E) ||
          (0, Vk.isPlainObject)(E)
            ? (S) =>
                ya(
                  E,
                  (0, lr.default)({}, S, {
                    theme: Xs({ theme: S.theme, defaultTheme: r, themeId: t })
                  })
                )
            : E,
        y = (E, ...S) => {
          let C = g(E);
          const T = S ? S.map(g) : [];
          l &&
            d &&
            T.push((A) => {
              const I = Xs(
                (0, lr.default)({}, A, { defaultTheme: r, themeId: t })
              );
              if (
                !I.components ||
                !I.components[l] ||
                !I.components[l].styleOverrides
              )
                return null;
              const L = I.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(L).forEach(([N, B]) => {
                  D[N] = ya(B, (0, lr.default)({}, A, { theme: I }));
                }),
                d(A, D)
              );
            }),
            l &&
              !p &&
              T.push((A) => {
                var I;
                const L = Xs(
                    (0, lr.default)({}, A, { defaultTheme: r, themeId: t })
                  ),
                  D =
                    L == null ||
                    (I = L.components) == null ||
                    (I = I[l]) == null
                      ? void 0
                      : I.variants;
                return ya(
                  { variants: D },
                  (0, lr.default)({}, A, { theme: L })
                );
              }),
            h || T.push(i);
          const R = T.length - S.length;
          if (Array.isArray(E) && R > 0) {
            const A = new Array(R).fill('');
            (C = [...E, ...A]), (C.raw = [...E.raw, ...A]);
          }
          const k = b(C, ...T);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return b.withConfig && (y.withConfig = b.withConfig), y;
    }
  );
}
function eM(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const zd = (e) => eM(e) && e !== 'classes',
  le = Fk({ themeId: Ao, defaultTheme: Wd, rootShouldForwardProp: zd }),
  tM = ['theme'];
function rM(e) {
  let { theme: t } = e,
    r = Z(e, tM);
  const n = t[Ao];
  return P.jsx(zR, M({}, r, { themeId: n ? Ao : void 0, theme: n || t }));
}
const Th = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function $e(e) {
  return WR(e);
}
function nM(e) {
  return Ve('MuiSvgIcon', e);
}
We('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge'
]);
const oM = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox'
  ],
  iM = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${Q(t)}`, `fontSize${Q(r)}`]
      };
    return ze(o, nM, n);
  },
  sM = le('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== 'inherit' && t[`color${Q(r.color)}`],
        t[`fontSize${Q(r.fontSize)}`]
      ];
    }
  })(({ theme: e, ownerState: t }) => {
    var r, n, o, i, s, a, l, c, u, f, d, m, p;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (r = e.transitions) == null || (n = r.create) == null
          ? void 0
          : n.call(r, 'fill', {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || '1.25rem',
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || '1.5rem',
        large:
          ((c = e.typography) == null || (u = c.pxToRem) == null
            ? void 0
            : u.call(c, 35)) || '2.1875rem'
      }[t.fontSize],
      color:
        (f =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? f
          : {
              action:
                (m = (e.vars || e).palette) == null || (m = m.action) == null
                  ? void 0
                  : m.active,
              disabled:
                (p = (e.vars || e).palette) == null || (p = p.action) == null
                  ? void 0
                  : p.disabled,
              inherit: void 0
            }[t.color]
    };
  }),
  xu = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: a = 'svg',
        fontSize: l = 'medium',
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: f,
        viewBox: d = '0 0 24 24'
      } = n,
      m = Z(n, oM),
      p = w.isValidElement(o) && o.type === 'svg',
      h = M({}, n, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: d,
        hasSvgAsChild: p
      }),
      v = {};
    u || (v.viewBox = d);
    const x = iM(h);
    return P.jsxs(
      sM,
      M(
        {
          as: a,
          className: ue(x.root, i),
          focusable: 'false',
          color: c,
          'aria-hidden': f ? void 0 : !0,
          role: f ? 'img' : void 0,
          ref: r
        },
        v,
        m,
        p && o.props,
        {
          ownerState: h,
          children: [
            p ? o.props.children : o,
            f ? P.jsx('title', { children: f }) : null
          ]
        }
      )
    );
  });
xu.muiName = 'SvgIcon';
function Gl(e, t) {
  function r(n, o) {
    return P.jsx(
      xu,
      M({ 'data-testid': `${t}Icon`, ref: o }, n, { children: e })
    );
  }
  return (r.muiName = xu.muiName), w.memo(w.forwardRef(r));
}
const aM = {
    configure: (e) => {
      Id.configure(e);
    }
  },
  lM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: Q,
        createChainedFunction: vu,
        createSvgIcon: Gl,
        debounce: jy,
        deprecatedPropType: gR,
        isMuiElement: vR,
        ownerDocument: $t,
        ownerWindow: Go,
        requirePropFactory: yR,
        setRef: Wa,
        unstable_ClassNameGenerator: aM,
        unstable_useEnhancedEffect: ln,
        unstable_useId: xR,
        unsupportedProp: wR,
        useControlled: SR,
        useEventCallback: tn,
        useForkRef: ct,
        useIsFocusVisible: By
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function wu(e, t) {
  return (
    (wu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    wu(e, t)
  );
}
function rb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    wu(e, t);
}
const Rh = { disabled: !1 },
  Ua = de.createContext(null);
var cM = function (t) {
    return t.scrollTop;
  },
  Si = 'unmounted',
  Sn = 'exited',
  En = 'entering',
  po = 'entered',
  Su = 'exiting',
  rr = (function (e) {
    rb(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = o,
        a = s && !s.isMounting ? n.enter : n.appear,
        l;
      return (
        (i.appearStatus = null),
        n.in
          ? a
            ? ((l = Sn), (i.appearStatus = En))
            : (l = po)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Si)
            : (l = Sn),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Si ? { status: Sn } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== En && s !== po && (i = En)
            : (s === En || s === po) && (i = Su);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (r.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === En)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : bi.findDOMNode(this);
              s && cM(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Sn &&
            this.setState({ status: Si });
      }),
      (r.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [bi.findDOMNode(this), a],
          c = l[0],
          u = l[1],
          f = this.getTimeouts(),
          d = a ? f.appear : f.enter;
        if ((!o && !s) || Rh.disabled) {
          this.safeSetState({ status: po }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: En }, function () {
            i.props.onEntering(c, u),
              i.onTransitionEnd(d, function () {
                i.safeSetState({ status: po }, function () {
                  i.props.onEntered(c, u);
                });
              });
          });
      }),
      (r.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : bi.findDOMNode(this);
        if (!i || Rh.disabled) {
          this.safeSetState({ status: Sn }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Su }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Sn }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (r.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : bi.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (r.render = function () {
        var o = this.state.status;
        if (o === Si) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = Z(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef'
        ]);
        return de.createElement(
          Ua.Provider,
          { value: null },
          typeof s == 'function'
            ? s(o, a)
            : de.cloneElement(de.Children.only(s), a)
        );
      }),
      t
    );
  })(de.Component);
rr.contextType = Ua;
rr.propTypes = {};
function lo() {}
rr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: lo,
  onEntering: lo,
  onEntered: lo,
  onExit: lo,
  onExiting: lo,
  onExited: lo
};
rr.UNMOUNTED = Si;
rr.EXITED = Sn;
rr.ENTERING = En;
rr.ENTERED = po;
rr.EXITING = Su;
function uM(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ud(e, t) {
  var r = function (i) {
      return t && w.isValidElement(i) ? t(i) : i;
    },
    n = Object.create(null);
  return (
    e &&
      w.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        n[o.key] = r(o);
      }),
    n
  );
}
function dM(e, t) {
  (e = e || {}), (t = t || {});
  function r(u) {
    return u in t ? t[u] : e[u];
  }
  var n = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((n[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var c = n[l][s];
        a[n[l][s]] = r(c);
      }
    a[l] = r(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = r(o[s]);
  return a;
}
function Dn(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function fM(e, t) {
  return Ud(e.children, function (r) {
    return w.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Dn(r, 'appear', e),
      enter: Dn(r, 'enter', e),
      exit: Dn(r, 'exit', e)
    });
  });
}
function pM(e, t, r) {
  var n = Ud(e.children),
    o = dM(t, n);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (w.isValidElement(s)) {
        var a = i in t,
          l = i in n,
          c = t[i],
          u = w.isValidElement(c) && !c.props.in;
        l && (!a || u)
          ? (o[i] = w.cloneElement(s, {
              onExited: r.bind(null, s),
              in: !0,
              exit: Dn(s, 'exit', e),
              enter: Dn(s, 'enter', e)
            }))
          : !l && a && !u
            ? (o[i] = w.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              w.isValidElement(c) &&
              (o[i] = w.cloneElement(s, {
                onExited: r.bind(null, s),
                in: c.props.in,
                exit: Dn(s, 'exit', e),
                enter: Dn(s, 'enter', e)
              }));
      }
    }),
    o
  );
}
var hM =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  mM = {
    component: 'div',
    childFactory: function (t) {
      return t;
    }
  },
  Hd = (function (e) {
    rb(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = i.handleExited.bind(uM(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0
        }),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (r.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? fM(o, a) : pM(o, s, a), firstRender: !1 };
      }),
      (r.handleExited = function (o, i) {
        var s = Ud(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = M({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (r.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = Z(o, ['component', 'childFactory']),
          l = this.state.contextValue,
          c = hM(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? de.createElement(Ua.Provider, { value: l }, c)
            : de.createElement(
                Ua.Provider,
                { value: l },
                de.createElement(i, a, c)
              )
        );
      }),
      t
    );
  })(de.Component);
Hd.propTypes = {};
Hd.defaultProps = mM;
const Xl = (e) => e.scrollTop;
function Ar(e, t) {
  var r, n;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (r = s.transitionDuration) != null
        ? r
        : typeof o == 'number'
          ? o
          : o[t.mode] || 0,
    easing:
      (n = s.transitionTimingFunction) != null
        ? n
        : typeof i == 'object'
          ? i[t.mode]
          : i,
    delay: s.transitionDelay
  };
}
function gM(e) {
  return Ve('MuiCollapse', e);
}
We('MuiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'entered',
  'hidden',
  'wrapper',
  'wrapperInner'
]);
const vM = [
    'addEndListener',
    'children',
    'className',
    'collapsedSize',
    'component',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'orientation',
    'style',
    'timeout',
    'TransitionComponent'
  ],
  yM = (e) => {
    const { orientation: t, classes: r } = e,
      n = {
        root: ['root', `${t}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${t}`],
        wrapperInner: ['wrapperInner', `${t}`]
      };
    return ze(n, gM, r);
  },
  bM = le('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.orientation],
        r.state === 'entered' && t.entered,
        r.state === 'exited' && !r.in && r.collapsedSize === '0px' && t.hidden
      ];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        height: 0,
        overflow: 'hidden',
        transition: e.transitions.create('height')
      },
      t.orientation === 'horizontal' && {
        height: 'auto',
        width: 0,
        transition: e.transitions.create('width')
      },
      t.state === 'entered' &&
        M(
          { height: 'auto', overflow: 'visible' },
          t.orientation === 'horizontal' && { width: 'auto' }
        ),
      t.state === 'exited' &&
        !t.in &&
        t.collapsedSize === '0px' && { visibility: 'hidden' }
    )
  ),
  xM = le('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (e, t) => t.wrapper
  })(({ ownerState: e }) =>
    M(
      { display: 'flex', width: '100%' },
      e.orientation === 'horizontal' && { width: 'auto', height: '100%' }
    )
  ),
  wM = le('div', {
    name: 'MuiCollapse',
    slot: 'WrapperInner',
    overridesResolver: (e, t) => t.wrapperInner
  })(({ ownerState: e }) =>
    M(
      { width: '100%' },
      e.orientation === 'horizontal' && { width: 'auto', height: '100%' }
    )
  ),
  Ql = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCollapse' }),
      {
        addEndListener: o,
        children: i,
        className: s,
        collapsedSize: a = '0px',
        component: l,
        easing: c,
        in: u,
        onEnter: f,
        onEntered: d,
        onEntering: m,
        onExit: p,
        onExited: h,
        onExiting: v,
        orientation: x = 'vertical',
        style: b,
        timeout: g = Jy.standard,
        TransitionComponent: y = rr
      } = n,
      E = Z(n, vM),
      S = M({}, n, { orientation: x, collapsedSize: a }),
      C = yM(S),
      T = dt(),
      R = jd(),
      k = w.useRef(null),
      A = w.useRef(),
      I = typeof a == 'number' ? `${a}px` : a,
      L = x === 'horizontal',
      D = L ? 'width' : 'height',
      N = w.useRef(null),
      B = ct(r, N),
      j = (G) => (Ae) => {
        if (G) {
          const Re = N.current;
          Ae === void 0 ? G(Re) : G(Re, Ae);
        }
      },
      F = () => (k.current ? k.current[L ? 'clientWidth' : 'clientHeight'] : 0),
      z = j((G, Ae) => {
        k.current && L && (k.current.style.position = 'absolute'),
          (G.style[D] = I),
          f && f(G, Ae);
      }),
      q = j((G, Ae) => {
        const Re = F();
        k.current && L && (k.current.style.position = '');
        const { duration: _e, easing: ft } = Ar(
          { style: b, timeout: g, easing: c },
          { mode: 'enter' }
        );
        if (g === 'auto') {
          const It = T.transitions.getAutoHeightDuration(Re);
          (G.style.transitionDuration = `${It}ms`), (A.current = It);
        } else
          G.style.transitionDuration = typeof _e == 'string' ? _e : `${_e}ms`;
        (G.style[D] = `${Re}px`),
          (G.style.transitionTimingFunction = ft),
          m && m(G, Ae);
      }),
      fe = j((G, Ae) => {
        (G.style[D] = 'auto'), d && d(G, Ae);
      }),
      J = j((G) => {
        (G.style[D] = `${F()}px`), p && p(G);
      }),
      ae = j(h),
      ve = j((G) => {
        const Ae = F(),
          { duration: Re, easing: _e } = Ar(
            { style: b, timeout: g, easing: c },
            { mode: 'exit' }
          );
        if (g === 'auto') {
          const ft = T.transitions.getAutoHeightDuration(Ae);
          (G.style.transitionDuration = `${ft}ms`), (A.current = ft);
        } else
          G.style.transitionDuration = typeof Re == 'string' ? Re : `${Re}ms`;
        (G.style[D] = I), (G.style.transitionTimingFunction = _e), v && v(G);
      }),
      ye = (G) => {
        g === 'auto' && R.start(A.current || 0, G), o && o(N.current, G);
      };
    return P.jsx(
      y,
      M(
        {
          in: u,
          onEnter: z,
          onEntered: fe,
          onEntering: q,
          onExit: J,
          onExited: ae,
          onExiting: ve,
          addEndListener: ye,
          nodeRef: N,
          timeout: g === 'auto' ? null : g
        },
        E,
        {
          children: (G, Ae) =>
            P.jsx(
              bM,
              M(
                {
                  as: l,
                  className: ue(
                    C.root,
                    s,
                    {
                      entered: C.entered,
                      exited: !u && I === '0px' && C.hidden
                    }[G]
                  ),
                  style: M({ [L ? 'minWidth' : 'minHeight']: I }, b),
                  ref: B
                },
                Ae,
                {
                  ownerState: M({}, S, { state: G }),
                  children: P.jsx(xM, {
                    ownerState: M({}, S, { state: G }),
                    className: C.wrapper,
                    ref: k,
                    children: P.jsx(wM, {
                      ownerState: M({}, S, { state: G }),
                      className: C.wrapperInner,
                      children: i
                    })
                  })
                }
              )
            )
        }
      )
    );
  });
Ql.muiSupportAuto = !0;
function SM(e) {
  return Ve('MuiPaper', e);
}
We('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24'
]);
const EM = ['className', 'component', 'elevation', 'square', 'variant'],
  CM = (e) => {
    const { square: t, elevation: r, variant: n, classes: o } = e,
      i = {
        root: ['root', n, !t && 'rounded', n === 'elevation' && `elevation${r}`]
      };
    return ze(i, SM, o);
  },
  PM = le('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        !r.square && t.rounded,
        r.variant === 'elevation' && t[`elevation${r.elevation}`]
      ];
    }
  })(({ theme: e, ownerState: t }) => {
    var r;
    return M(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create('box-shadow')
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === 'outlined' && {
        border: `1px solid ${(e.vars || e).palette.divider}`
      },
      t.variant === 'elevation' &&
        M(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === 'dark' && {
              backgroundImage: `linear-gradient(${vt('#fff', Th(t.elevation))}, ${vt('#fff', Th(t.elevation))})`
            },
          e.vars && {
            backgroundImage:
              (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
          }
        )
    );
  }),
  Zl = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiPaper' }),
      {
        className: o,
        component: i = 'div',
        elevation: s = 1,
        square: a = !1,
        variant: l = 'elevation'
      } = n,
      c = Z(n, EM),
      u = M({}, n, { component: i, elevation: s, square: a, variant: l }),
      f = CM(u);
    return P.jsx(
      PM,
      M({ as: i, ownerState: u, className: ue(f.root, o), ref: r }, c)
    );
  });
function TM(e) {
  return typeof e == 'string';
}
function nb(e, t, r) {
  return e === void 0 || TM(e)
    ? t
    : M({}, t, { ownerState: M({}, t.ownerState, r) });
}
const RM = { disableDefaultClasses: !1 },
  kM = w.createContext(RM);
function MM(e) {
  const { disableDefaultClasses: t } = w.useContext(kM);
  return (r) => (t ? '' : e(r));
}
function ob(e, t = []) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter(
        (n) =>
          n.match(/^on[A-Z]/) && typeof e[n] == 'function' && !t.includes(n)
      )
      .forEach((n) => {
        r[n] = e[n];
      }),
    r
  );
}
function ib(e, t, r) {
  return typeof e == 'function' ? e(t, r) : e;
}
function kh(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == 'function'))
      .forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
function sb(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const m = ue(
        r == null ? void 0 : r.className,
        i,
        o == null ? void 0 : o.className,
        n == null ? void 0 : n.className
      ),
      p = M(
        {},
        r == null ? void 0 : r.style,
        o == null ? void 0 : o.style,
        n == null ? void 0 : n.style
      ),
      h = M({}, r, o, n);
    return (
      m.length > 0 && (h.className = m),
      Object.keys(p).length > 0 && (h.style = p),
      { props: h, internalRef: void 0 }
    );
  }
  const s = ob(M({}, o, n)),
    a = kh(n),
    l = kh(o),
    c = t(s),
    u = ue(
      c == null ? void 0 : c.className,
      r == null ? void 0 : r.className,
      i,
      o == null ? void 0 : o.className,
      n == null ? void 0 : n.className
    ),
    f = M(
      {},
      c == null ? void 0 : c.style,
      r == null ? void 0 : r.style,
      o == null ? void 0 : o.style,
      n == null ? void 0 : n.style
    ),
    d = M({}, c, r, l, a);
  return (
    u.length > 0 && (d.className = u),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: c.ref }
  );
}
const OM = [
  'elementType',
  'externalSlotProps',
  'ownerState',
  'skipResolvingSlotProps'
];
function Ha(e) {
  var t;
  const {
      elementType: r,
      externalSlotProps: n,
      ownerState: o,
      skipResolvingSlotProps: i = !1
    } = e,
    s = Z(e, OM),
    a = i ? {} : ib(n, o),
    { props: l, internalRef: c } = sb(M({}, s, { externalSlotProps: a })),
    u = ct(
      c,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return nb(r, M({}, l, { ref: u }), o);
}
const AM = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps'
  ],
  _M = ['component', 'slots', 'slotProps'],
  DM = ['component'];
function IM(e, t) {
  const {
      className: r,
      elementType: n,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a
    } = t,
    l = Z(t, AM),
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: f = { [e]: void 0 }
    } = i,
    d = Z(i, _M),
    m = u[e] || n,
    p = ib(f[e], o),
    h = sb(
      M({ className: r }, l, {
        externalForwardedProps: e === 'root' ? d : void 0,
        externalSlotProps: p
      })
    ),
    {
      props: { component: v },
      internalRef: x
    } = h,
    b = Z(h.props, DM),
    g = ct(x, p == null ? void 0 : p.ref, t.ref),
    y = s ? s(b) : {},
    E = M({}, o, y),
    S = e === 'root' ? v || c : v,
    C = nb(
      m,
      M(
        {},
        e === 'root' && !c && !u[e] && a,
        e !== 'root' && !u[e] && a,
        b,
        S && { as: S },
        { ref: g }
      ),
      E
    );
  return (
    Object.keys(y).forEach((T) => {
      delete C[T];
    }),
    [m, C]
  );
}
function LM(e) {
  const {
      className: t,
      classes: r,
      pulsate: n = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: c
    } = e,
    [u, f] = w.useState(!1),
    d = ue(t, r.ripple, r.rippleVisible, n && r.ripplePulsate),
    m = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    p = ue(r.child, u && r.childLeaving, n && r.childPulsate);
  return (
    !a && !u && f(!0),
    w.useEffect(() => {
      if (!a && l != null) {
        const h = setTimeout(l, c);
        return () => {
          clearTimeout(h);
        };
      }
    }, [l, a, c]),
    P.jsx('span', {
      className: d,
      style: m,
      children: P.jsx('span', { className: p })
    })
  );
}
const cr = We('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
  ]),
  $M = ['center', 'classes', 'className'];
let Jl = (e) => e,
  Mh,
  Oh,
  Ah,
  _h;
const Eu = 550,
  jM = 80,
  BM = Hn(
    Mh ||
      (Mh = Jl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  NM = Hn(
    Oh ||
      (Oh = Jl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  FM = Hn(
    Ah ||
      (Ah = Jl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  VM = le('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  }),
  WM = le(LM, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    _h ||
      (_h = Jl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    cr.rippleVisible,
    BM,
    Eu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    cr.child,
    cr.childLeaving,
    NM,
    Eu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.childPulsate,
    FM,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  zM = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s } = n,
      a = Z(n, $M),
      [l, c] = w.useState([]),
      u = w.useRef(0),
      f = w.useRef(null);
    w.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const d = w.useRef(!1),
      m = jd(),
      p = w.useRef(null),
      h = w.useRef(null),
      v = w.useCallback(
        (y) => {
          const {
            pulsate: E,
            rippleX: S,
            rippleY: C,
            rippleSize: T,
            cb: R
          } = y;
          c((k) => [
            ...k,
            P.jsx(
              WM,
              {
                classes: {
                  ripple: ue(i.ripple, cr.ripple),
                  rippleVisible: ue(i.rippleVisible, cr.rippleVisible),
                  ripplePulsate: ue(i.ripplePulsate, cr.ripplePulsate),
                  child: ue(i.child, cr.child),
                  childLeaving: ue(i.childLeaving, cr.childLeaving),
                  childPulsate: ue(i.childPulsate, cr.childPulsate)
                },
                timeout: Eu,
                pulsate: E,
                rippleX: S,
                rippleY: C,
                rippleSize: T
              },
              u.current
            )
          ]),
            (u.current += 1),
            (f.current = R);
        },
        [i]
      ),
      x = w.useCallback(
        (y = {}, E = {}, S = () => {}) => {
          const {
            pulsate: C = !1,
            center: T = o || E.pulsate,
            fakeElement: R = !1
          } = E;
          if ((y == null ? void 0 : y.type) === 'mousedown' && d.current) {
            d.current = !1;
            return;
          }
          (y == null ? void 0 : y.type) === 'touchstart' && (d.current = !0);
          const k = R ? null : h.current,
            A = k
              ? k.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let I, L, D;
          if (
            T ||
            y === void 0 ||
            (y.clientX === 0 && y.clientY === 0) ||
            (!y.clientX && !y.touches)
          )
            (I = Math.round(A.width / 2)), (L = Math.round(A.height / 2));
          else {
            const { clientX: N, clientY: B } =
              y.touches && y.touches.length > 0 ? y.touches[0] : y;
            (I = Math.round(N - A.left)), (L = Math.round(B - A.top));
          }
          if (T)
            (D = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const N =
                Math.max(Math.abs((k ? k.clientWidth : 0) - I), I) * 2 + 2,
              B = Math.max(Math.abs((k ? k.clientHeight : 0) - L), L) * 2 + 2;
            D = Math.sqrt(N ** 2 + B ** 2);
          }
          y != null && y.touches
            ? p.current === null &&
              ((p.current = () => {
                v({ pulsate: C, rippleX: I, rippleY: L, rippleSize: D, cb: S });
              }),
              m.start(jM, () => {
                p.current && (p.current(), (p.current = null));
              }))
            : v({ pulsate: C, rippleX: I, rippleY: L, rippleSize: D, cb: S });
        },
        [o, v, m]
      ),
      b = w.useCallback(() => {
        x({}, { pulsate: !0 });
      }, [x]),
      g = w.useCallback(
        (y, E) => {
          if (
            (m.clear(),
            (y == null ? void 0 : y.type) === 'touchend' && p.current)
          ) {
            p.current(),
              (p.current = null),
              m.start(0, () => {
                g(y, E);
              });
            return;
          }
          (p.current = null),
            c((S) => (S.length > 0 ? S.slice(1) : S)),
            (f.current = E);
        },
        [m]
      );
    return (
      w.useImperativeHandle(r, () => ({ pulsate: b, start: x, stop: g }), [
        b,
        x,
        g
      ]),
      P.jsx(
        VM,
        M({ className: ue(cr.root, i.root, s), ref: h }, a, {
          children: P.jsx(Hd, { component: null, exit: !0, children: l })
        })
      )
    );
  });
function UM(e) {
  return Ve('MuiButtonBase', e);
}
const HM = We('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  qM = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type'
  ],
  KM = (e) => {
    const {
        disabled: t,
        focusVisible: r,
        focusVisibleClassName: n,
        classes: o
      } = e,
      s = ze({ root: ['root', t && 'disabled', r && 'focusVisible'] }, UM, o);
    return r && n && (s.root += ` ${n}`), s;
  },
  YM = le('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
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
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${HM.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  Do = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = 'button',
        disabled: c = !1,
        disableRipple: u = !1,
        disableTouchRipple: f = !1,
        focusRipple: d = !1,
        LinkComponent: m = 'a',
        onBlur: p,
        onClick: h,
        onContextMenu: v,
        onDragLeave: x,
        onFocus: b,
        onFocusVisible: g,
        onKeyDown: y,
        onKeyUp: E,
        onMouseDown: S,
        onMouseLeave: C,
        onMouseUp: T,
        onTouchEnd: R,
        onTouchMove: k,
        onTouchStart: A,
        tabIndex: I = 0,
        TouchRippleProps: L,
        touchRippleRef: D,
        type: N
      } = n,
      B = Z(n, qM),
      j = w.useRef(null),
      F = w.useRef(null),
      z = ct(F, D),
      { isFocusVisibleRef: q, onFocus: fe, onBlur: J, ref: ae } = By(),
      [ve, ye] = w.useState(!1);
    c && ve && ye(!1),
      w.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ye(!0), j.current.focus();
          }
        }),
        []
      );
    const [G, Ae] = w.useState(!1);
    w.useEffect(() => {
      Ae(!0);
    }, []);
    const Re = G && !u && !c;
    w.useEffect(() => {
      ve && d && !u && G && F.current.pulsate();
    }, [u, d, ve, G]);
    function _e(Y, St, xe = f) {
      return tn(
        (oe) => (St && St(oe), !xe && F.current && F.current[Y](oe), !0)
      );
    }
    const ft = _e('start', S),
      It = _e('stop', v),
      je = _e('stop', x),
      Qe = _e('stop', T),
      pt = _e('stop', (Y) => {
        ve && Y.preventDefault(), C && C(Y);
      }),
      bn = _e('start', A),
      xt = _e('stop', R),
      or = _e('stop', k),
      Ir = _e(
        'stop',
        (Y) => {
          J(Y), q.current === !1 && ye(!1), p && p(Y);
        },
        !1
      ),
      Gr = tn((Y) => {
        j.current || (j.current = Y.currentTarget),
          fe(Y),
          q.current === !0 && (ye(!0), g && g(Y)),
          b && b(Y);
      }),
      wt = () => {
        const Y = j.current;
        return l && l !== 'button' && !(Y.tagName === 'A' && Y.href);
      },
      Ht = w.useRef(!1),
      at = tn((Y) => {
        d &&
          !Ht.current &&
          ve &&
          F.current &&
          Y.key === ' ' &&
          ((Ht.current = !0),
          F.current.stop(Y, () => {
            F.current.start(Y);
          })),
          Y.target === Y.currentTarget &&
            wt() &&
            Y.key === ' ' &&
            Y.preventDefault(),
          y && y(Y),
          Y.target === Y.currentTarget &&
            wt() &&
            Y.key === 'Enter' &&
            !c &&
            (Y.preventDefault(), h && h(Y));
      }),
      qt = tn((Y) => {
        d &&
          Y.key === ' ' &&
          F.current &&
          ve &&
          !Y.defaultPrevented &&
          ((Ht.current = !1),
          F.current.stop(Y, () => {
            F.current.pulsate(Y);
          })),
          E && E(Y),
          h &&
            Y.target === Y.currentTarget &&
            wt() &&
            Y.key === ' ' &&
            !Y.defaultPrevented &&
            h(Y);
      });
    let st = l;
    st === 'button' && (B.href || B.to) && (st = m);
    const ne = {};
    st === 'button'
      ? ((ne.type = N === void 0 ? 'button' : N), (ne.disabled = c))
      : (!B.href && !B.to && (ne.role = 'button'),
        c && (ne['aria-disabled'] = c));
    const be = ct(r, ae, j),
      ee = M({}, n, {
        centerRipple: i,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: I,
        focusVisible: ve
      }),
      he = KM(ee);
    return P.jsxs(
      YM,
      M(
        {
          as: st,
          className: ue(he.root, a),
          ownerState: ee,
          onBlur: Ir,
          onClick: h,
          onContextMenu: It,
          onFocus: Gr,
          onKeyDown: at,
          onKeyUp: qt,
          onMouseDown: ft,
          onMouseLeave: pt,
          onMouseUp: Qe,
          onDragLeave: je,
          onTouchEnd: xt,
          onTouchMove: or,
          onTouchStart: bn,
          ref: be,
          tabIndex: c ? -1 : I,
          type: N
        },
        ne,
        B,
        { children: [s, Re ? P.jsx(zM, M({ ref: z, center: i }, L)) : null] }
      )
    );
  });
function GM(e) {
  return Ve('MuiTypography', e);
}
We('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph'
]);
const XM = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  QM = (e) => {
    const {
        align: t,
        gutterBottom: r,
        noWrap: n,
        paragraph: o,
        variant: i,
        classes: s
      } = e,
      a = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${Q(t)}`,
          r && 'gutterBottom',
          n && 'noWrap',
          o && 'paragraph'
        ]
      };
    return ze(a, GM, s);
  },
  ZM = le('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.variant && t[r.variant],
        r.align !== 'inherit' && t[`align${Q(r.align)}`],
        r.noWrap && t.noWrap,
        r.gutterBottom && t.gutterBottom,
        r.paragraph && t.paragraph
      ];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      { margin: 0 },
      t.variant === 'inherit' && { font: 'inherit' },
      t.variant !== 'inherit' && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Dh = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  },
  JM = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  eO = (e) => JM[e] || e,
  Se = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTypography' }),
      o = eO(n.color),
      i = Es(M({}, n, { color: o })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: c = !1,
        noWrap: u = !1,
        paragraph: f = !1,
        variant: d = 'body1',
        variantMapping: m = Dh
      } = i,
      p = Z(i, XM),
      h = M({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: c,
        noWrap: u,
        paragraph: f,
        variant: d,
        variantMapping: m
      }),
      v = l || (f ? 'p' : m[d] || Dh[d]) || 'span',
      x = QM(h);
    return P.jsx(
      ZM,
      M({ as: v, ref: r, ownerState: h, className: ue(x.root, a) }, p)
    );
  });
function tO(e) {
  return Ve('MuiAppBar', e);
}
We('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning'
]);
const rO = ['className', 'color', 'enableColorOnDark', 'position'],
  nO = (e) => {
    const { color: t, position: r, classes: n } = e,
      o = { root: ['root', `color${Q(t)}`, `position${Q(r)}`] };
    return ze(o, tO, n);
  },
  Qs = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  oO = le(Zl, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`position${Q(r.position)}`], t[`color${Q(r.color)}`]];
    }
  })(({ theme: e, ownerState: t }) => {
    const r =
      e.palette.mode === 'light' ? e.palette.grey[100] : e.palette.grey[900];
    return M(
      {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0
      },
      t.position === 'fixed' && {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
        '@media print': { position: 'absolute' }
      },
      t.position === 'absolute' && {
        position: 'absolute',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0
      },
      t.position === 'sticky' && {
        position: 'sticky',
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0
      },
      t.position === 'static' && { position: 'static' },
      t.position === 'relative' && { position: 'relative' },
      !e.vars &&
        M(
          {},
          t.color === 'default' && {
            backgroundColor: r,
            color: e.palette.getContrastText(r)
          },
          t.color &&
            t.color !== 'default' &&
            t.color !== 'inherit' &&
            t.color !== 'transparent' && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText
            },
          t.color === 'inherit' && { color: 'inherit' },
          e.palette.mode === 'dark' &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === 'transparent' &&
            M(
              { backgroundColor: 'transparent', color: 'inherit' },
              e.palette.mode === 'dark' && { backgroundImage: 'none' }
            )
        ),
      e.vars &&
        M(
          {},
          t.color === 'default' && {
            '--AppBar-background': t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Qs(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            '--AppBar-color': t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Qs(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              '--AppBar-background': t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Qs(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              '--AppBar-color': t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Qs(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  )
            },
          {
            backgroundColor: 'var(--AppBar-background)',
            color: t.color === 'inherit' ? 'inherit' : 'var(--AppBar-color)'
          },
          t.color === 'transparent' && {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            color: 'inherit'
          }
        )
    );
  }),
  iO = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiAppBar' }),
      {
        className: o,
        color: i = 'primary',
        enableColorOnDark: s = !1,
        position: a = 'fixed'
      } = n,
      l = Z(n, rO),
      c = M({}, n, { color: i, position: a, enableColorOnDark: s }),
      u = nO(c);
    return P.jsx(
      oO,
      M(
        {
          square: !0,
          component: 'header',
          ownerState: c,
          elevation: 4,
          className: ue(u.root, o, a === 'fixed' && 'mui-fixed'),
          ref: r
        },
        l
      )
    );
  }),
  ab = 'base';
function sO(e) {
  return `${ab}--${e}`;
}
function aO(e, t) {
  return `${ab}-${e}-${t}`;
}
function lb(e, t) {
  const r = Oy[t];
  return r ? sO(r) : aO(e, t);
}
function lO(e, t) {
  const r = {};
  return (
    t.forEach((n) => {
      r[n] = lb(e, n);
    }),
    r
  );
}
function Ih(e) {
  return e.substring(2).toLowerCase();
}
function cO(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function uO(e) {
  const {
      children: t,
      disableReactTree: r = !1,
      mouseEvent: n = 'onClick',
      onClickAway: o,
      touchEvent: i = 'onTouchEnd'
    } = e,
    s = w.useRef(!1),
    a = w.useRef(null),
    l = w.useRef(!1),
    c = w.useRef(!1);
  w.useEffect(
    () => (
      setTimeout(() => {
        l.current = !0;
      }, 0),
      () => {
        l.current = !1;
      }
    ),
    []
  );
  const u = ct(t.ref, a),
    f = tn((p) => {
      const h = c.current;
      c.current = !1;
      const v = $t(a.current);
      if (!l.current || !a.current || ('clientX' in p && cO(p, v))) return;
      if (s.current) {
        s.current = !1;
        return;
      }
      let x;
      p.composedPath
        ? (x = p.composedPath().indexOf(a.current) > -1)
        : (x =
            !v.documentElement.contains(p.target) ||
            a.current.contains(p.target)),
        !x && (r || !h) && o(p);
    }),
    d = (p) => (h) => {
      c.current = !0;
      const v = t.props[p];
      v && v(h);
    },
    m = { ref: u };
  return (
    i !== !1 && (m[i] = d(i)),
    w.useEffect(() => {
      if (i !== !1) {
        const p = Ih(i),
          h = $t(a.current),
          v = () => {
            s.current = !0;
          };
        return (
          h.addEventListener(p, f),
          h.addEventListener('touchmove', v),
          () => {
            h.removeEventListener(p, f), h.removeEventListener('touchmove', v);
          }
        );
      }
    }, [f, i]),
    n !== !1 && (m[n] = d(n)),
    w.useEffect(() => {
      if (n !== !1) {
        const p = Ih(n),
          h = $t(a.current);
        return (
          h.addEventListener(p, f),
          () => {
            h.removeEventListener(p, f);
          }
        );
      }
    }, [f, n]),
    P.jsx(w.Fragment, { children: w.cloneElement(t, m) })
  );
}
const dO = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])'
].join(',');
function fO(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' ||
        e.nodeName === 'VIDEO' ||
        e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t;
}
function pO(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function hO(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    pO(e)
  );
}
function mO(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(dO)).forEach((n, o) => {
      const i = fO(n);
      i === -1 ||
        !hO(n) ||
        (i === 0
          ? t.push(n)
          : r.push({ documentOrder: o, tabIndex: i, node: n }));
    }),
    r
      .sort((n, o) =>
        n.tabIndex === o.tabIndex
          ? n.documentOrder - o.documentOrder
          : n.tabIndex - o.tabIndex
      )
      .map((n) => n.node)
      .concat(t)
  );
}
function gO() {
  return !0;
}
function vO(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = mO,
      isEnabled: s = gO,
      open: a
    } = e,
    l = w.useRef(!1),
    c = w.useRef(null),
    u = w.useRef(null),
    f = w.useRef(null),
    d = w.useRef(null),
    m = w.useRef(!1),
    p = w.useRef(null),
    h = ct(t.ref, p),
    v = w.useRef(null);
  w.useEffect(() => {
    !a || !p.current || (m.current = !r);
  }, [r, a]),
    w.useEffect(() => {
      if (!a || !p.current) return;
      const g = $t(p.current);
      return (
        p.current.contains(g.activeElement) ||
          (p.current.hasAttribute('tabIndex') ||
            p.current.setAttribute('tabIndex', '-1'),
          m.current && p.current.focus()),
        () => {
          o ||
            (f.current &&
              f.current.focus &&
              ((l.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [a]),
    w.useEffect(() => {
      if (!a || !p.current) return;
      const g = $t(p.current),
        y = (C) => {
          (v.current = C),
            !(n || !s() || C.key !== 'Tab') &&
              g.activeElement === p.current &&
              C.shiftKey &&
              ((l.current = !0), u.current && u.current.focus());
        },
        E = () => {
          const C = p.current;
          if (C === null) return;
          if (!g.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            C.contains(g.activeElement) ||
            (n &&
              g.activeElement !== c.current &&
              g.activeElement !== u.current)
          )
            return;
          if (g.activeElement !== d.current) d.current = null;
          else if (d.current !== null) return;
          if (!m.current) return;
          let T = [];
          if (
            ((g.activeElement === c.current || g.activeElement === u.current) &&
              (T = i(p.current)),
            T.length > 0)
          ) {
            var R, k;
            const A = !!(
                (R = v.current) != null &&
                R.shiftKey &&
                ((k = v.current) == null ? void 0 : k.key) === 'Tab'
              ),
              I = T[0],
              L = T[T.length - 1];
            typeof I != 'string' &&
              typeof L != 'string' &&
              (A ? L.focus() : I.focus());
          } else C.focus();
        };
      g.addEventListener('focusin', E), g.addEventListener('keydown', y, !0);
      const S = setInterval(() => {
        g.activeElement && g.activeElement.tagName === 'BODY' && E();
      }, 50);
      return () => {
        clearInterval(S),
          g.removeEventListener('focusin', E),
          g.removeEventListener('keydown', y, !0);
      };
    }, [r, n, o, s, a, i]);
  const x = (g) => {
      f.current === null && (f.current = g.relatedTarget),
        (m.current = !0),
        (d.current = g.target);
      const y = t.props.onFocus;
      y && y(g);
    },
    b = (g) => {
      f.current === null && (f.current = g.relatedTarget), (m.current = !0);
    };
  return P.jsxs(w.Fragment, {
    children: [
      P.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: b,
        ref: c,
        'data-testid': 'sentinelStart'
      }),
      w.cloneElement(t, { ref: h, onFocus: x }),
      P.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: b,
        ref: u,
        'data-testid': 'sentinelEnd'
      })
    ]
  });
}
function yO(e) {
  return typeof e == 'function' ? e() : e;
}
const cb = w.forwardRef(function (t, r) {
  const { children: n, container: o, disablePortal: i = !1 } = t,
    [s, a] = w.useState(null),
    l = ct(w.isValidElement(n) ? n.ref : null, r);
  if (
    (ln(() => {
      i || a(yO(o) || document.body);
    }, [o, i]),
    ln(() => {
      if (s && !i)
        return (
          Wa(r, s),
          () => {
            Wa(r, null);
          }
        );
    }, [r, s, i]),
    i)
  ) {
    if (w.isValidElement(n)) {
      const c = { ref: l };
      return w.cloneElement(n, c);
    }
    return P.jsx(w.Fragment, { children: n });
  }
  return P.jsx(w.Fragment, { children: s && rd.createPortal(n, s) });
});
function bO(e) {
  const t = $t(e);
  return t.body === e
    ? Go(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ai(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function Lh(e) {
  return parseInt(Go(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function xO(e) {
  const r =
      [
        'TEMPLATE',
        'SCRIPT',
        'STYLE',
        'LINK',
        'MAP',
        'META',
        'NOSCRIPT',
        'PICTURE',
        'COL',
        'COLGROUP',
        'PARAM',
        'SLOT',
        'SOURCE',
        'TRACK'
      ].indexOf(e.tagName) !== -1,
    n = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return r || n;
}
function $h(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !xO(s);
    a && l && Ai(s, o);
  });
}
function Ac(e, t) {
  let r = -1;
  return e.some((n, o) => (t(n) ? ((r = o), !0) : !1)), r;
}
function wO(e, t) {
  const r = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (bO(n)) {
      const s = DR($t(n));
      r.push({ value: n.style.paddingRight, property: 'padding-right', el: n }),
        (n.style.paddingRight = `${Lh(n) + s}px`);
      const a = $t(n).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: 'padding-right',
          el: l
        }),
          (l.style.paddingRight = `${Lh(l) + s}px`);
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment) i = $t(n).body;
    else {
      const s = n.parentElement,
        a = Go(n);
      i =
        (s == null ? void 0 : s.nodeName) === 'HTML' &&
        a.getComputedStyle(s).overflowY === 'scroll'
          ? s
          : n;
    }
    r.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i }
    ),
      (i.style.overflow = 'hidden');
  }
  return () => {
    r.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function SO(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute('aria-hidden') === 'true' && t.push(r);
    }),
    t
  );
}
class EO {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1) return n;
    (n = this.modals.length),
      this.modals.push(t),
      t.modalRef && Ai(t.modalRef, !1);
    const o = SO(r);
    $h(r, t.mount, t.modalRef, o, !0);
    const i = Ac(this.containers, (s) => s.container === r);
    return i !== -1
      ? (this.containers[i].modals.push(t), n)
      : (this.containers.push({
          modals: [t],
          container: r,
          restore: null,
          hiddenSiblings: o
        }),
        n);
  }
  mount(t, r) {
    const n = Ac(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[n];
    o.restore || (o.restore = wO(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1) return n;
    const o = Ac(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(n, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Ai(t.modalRef, r),
        $h(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ai(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function CO(e) {
  return typeof e == 'function' ? e() : e;
}
function PO(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const TO = new EO();
function RO(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: n = !1,
      manager: o = TO,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: c,
      open: u,
      rootRef: f
    } = e,
    d = w.useRef({}),
    m = w.useRef(null),
    p = w.useRef(null),
    h = ct(p, f),
    [v, x] = w.useState(!u),
    b = PO(l);
  let g = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1);
  const y = () => $t(m.current),
    E = () => (
      (d.current.modalRef = p.current), (d.current.mount = m.current), d.current
    ),
    S = () => {
      o.mount(E(), { disableScrollLock: n }),
        p.current && (p.current.scrollTop = 0);
    },
    C = tn(() => {
      const B = CO(t) || y().body;
      o.add(E(), B), p.current && S();
    }),
    T = w.useCallback(() => o.isTopModal(E()), [o]),
    R = tn((B) => {
      (m.current = B), B && (u && T() ? S() : p.current && Ai(p.current, g));
    }),
    k = w.useCallback(() => {
      o.remove(E(), g);
    }, [g, o]);
  w.useEffect(
    () => () => {
      k();
    },
    [k]
  ),
    w.useEffect(() => {
      u ? C() : (!b || !i) && k();
    }, [u, k, b, i, C]);
  const A = (B) => (j) => {
      var F;
      (F = B.onKeyDown) == null || F.call(B, j),
        !(j.key !== 'Escape' || j.which === 229 || !T()) &&
          (r || (j.stopPropagation(), c && c(j, 'escapeKeyDown')));
    },
    I = (B) => (j) => {
      var F;
      (F = B.onClick) == null || F.call(B, j),
        j.target === j.currentTarget && c && c(j, 'backdropClick');
    };
  return {
    getRootProps: (B = {}) => {
      const j = ob(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const F = M({}, j, B);
      return M({ role: 'presentation' }, F, { onKeyDown: A(F), ref: h });
    },
    getBackdropProps: (B = {}) => {
      const j = B;
      return M({ 'aria-hidden': !0 }, j, { onClick: I(j), open: u });
    },
    getTransitionProps: () => {
      const B = () => {
          x(!1), s && s();
        },
        j = () => {
          x(!0), a && a(), i && k();
        };
      return {
        onEnter: vu(B, l == null ? void 0 : l.props.onEnter),
        onExited: vu(j, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: h,
    portalRef: R,
    isTopModal: T,
    exited: v,
    hasTransition: b
  };
}
var jt = 'top',
  hr = 'bottom',
  mr = 'right',
  Bt = 'left',
  qd = 'auto',
  Ps = [jt, hr, mr, Bt],
  Io = 'start',
  rs = 'end',
  kO = 'clippingParents',
  ub = 'viewport',
  di = 'popper',
  MO = 'reference',
  jh = Ps.reduce(function (e, t) {
    return e.concat([t + '-' + Io, t + '-' + rs]);
  }, []),
  db = [].concat(Ps, [qd]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Io, t + '-' + rs]);
  }, []),
  OO = 'beforeRead',
  AO = 'read',
  _O = 'afterRead',
  DO = 'beforeMain',
  IO = 'main',
  LO = 'afterMain',
  $O = 'beforeWrite',
  jO = 'write',
  BO = 'afterWrite',
  NO = [OO, AO, _O, DO, IO, LO, $O, jO, BO];
function _r(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function Jt(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Un(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function fr(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Kd(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function FO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      i = t.elements[r];
    !fr(i) ||
      !_r(i) ||
      (Object.assign(i.style, n),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? '' : a);
      }));
  });
}
function VO(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: { position: 'absolute' },
      reference: {}
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          i = t.attributes[n] || {},
          s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          a = s.reduce(function (l, c) {
            return (l[c] = ''), l;
          }, {});
        !fr(o) ||
          !_r(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const WO = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: FO,
  effect: VO,
  requires: ['computeStyles']
};
function kr(e) {
  return e.split('-')[0];
}
var $n = Math.max,
  qa = Math.min,
  Lo = Math.round;
function Cu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function fb() {
  return !/^((?!chrome|android).)*safari/i.test(Cu());
}
function $o(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    fr(e) &&
    ((o = (e.offsetWidth > 0 && Lo(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Lo(n.height) / e.offsetHeight) || 1));
  var s = Un(e) ? Jt(e) : window,
    a = s.visualViewport,
    l = !fb() && r,
    c = (n.left + (l && a ? a.offsetLeft : 0)) / o,
    u = (n.top + (l && a ? a.offsetTop : 0)) / i,
    f = n.width / o,
    d = n.height / i;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function Yd(e) {
  var t = $o(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function pb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Kd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Hr(e) {
  return Jt(e).getComputedStyle(e);
}
function zO(e) {
  return ['table', 'td', 'th'].indexOf(_r(e)) >= 0;
}
function mn(e) {
  return ((Un(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ec(e) {
  return _r(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Kd(e) ? e.host : null) || mn(e);
}
function Bh(e) {
  return !fr(e) || Hr(e).position === 'fixed' ? null : e.offsetParent;
}
function UO(e) {
  var t = /firefox/i.test(Cu()),
    r = /Trident/i.test(Cu());
  if (r && fr(e)) {
    var n = Hr(e);
    if (n.position === 'fixed') return null;
  }
  var o = ec(e);
  for (Kd(o) && (o = o.host); fr(o) && ['html', 'body'].indexOf(_r(o)) < 0; ) {
    var i = Hr(o);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ts(e) {
  for (var t = Jt(e), r = Bh(e); r && zO(r) && Hr(r).position === 'static'; )
    r = Bh(r);
  return r &&
    (_r(r) === 'html' || (_r(r) === 'body' && Hr(r).position === 'static'))
    ? t
    : r || UO(e) || t;
}
function Gd(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function _i(e, t, r) {
  return $n(e, qa(t, r));
}
function HO(e, t, r) {
  var n = _i(e, t, r);
  return n > r ? r : n;
}
function hb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mb(e) {
  return Object.assign({}, hb(), e);
}
function gb(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var qO = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    mb(typeof t != 'number' ? t : gb(t, Ps))
  );
};
function KO(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    i = r.elements.arrow,
    s = r.modifiersData.popperOffsets,
    a = kr(r.placement),
    l = Gd(a),
    c = [Bt, mr].indexOf(a) >= 0,
    u = c ? 'height' : 'width';
  if (!(!i || !s)) {
    var f = qO(o.padding, r),
      d = Yd(i),
      m = l === 'y' ? jt : Bt,
      p = l === 'y' ? hr : mr,
      h =
        r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u],
      v = s[l] - r.rects.reference[l],
      x = Ts(i),
      b = x ? (l === 'y' ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      g = h / 2 - v / 2,
      y = f[m],
      E = b - d[u] - f[p],
      S = b / 2 - d[u] / 2 + g,
      C = _i(y, S, E),
      T = l;
    r.modifiersData[n] = ((t = {}), (t[T] = C), (t.centerOffset = C - S), t);
  }
}
function YO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (pb(t.elements.popper, o) && (t.elements.arrow = o)));
}
const GO = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: KO,
  effect: YO,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function jo(e) {
  return e.split('-')[1];
}
var XO = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function QO(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Lo(r * o) / o || 0, y: Lo(n * o) / o || 0 };
}
function Nh(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    i = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    f = e.isFixed,
    d = s.x,
    m = d === void 0 ? 0 : d,
    p = s.y,
    h = p === void 0 ? 0 : p,
    v = typeof u == 'function' ? u({ x: m, y: h }) : { x: m, y: h };
  (m = v.x), (h = v.y);
  var x = s.hasOwnProperty('x'),
    b = s.hasOwnProperty('y'),
    g = Bt,
    y = jt,
    E = window;
  if (c) {
    var S = Ts(r),
      C = 'clientHeight',
      T = 'clientWidth';
    if (
      (S === Jt(r) &&
        ((S = mn(r)),
        Hr(S).position !== 'static' &&
          a === 'absolute' &&
          ((C = 'scrollHeight'), (T = 'scrollWidth'))),
      (S = S),
      o === jt || ((o === Bt || o === mr) && i === rs))
    ) {
      y = hr;
      var R = f && S === E && E.visualViewport ? E.visualViewport.height : S[C];
      (h -= R - n.height), (h *= l ? 1 : -1);
    }
    if (o === Bt || ((o === jt || o === hr) && i === rs)) {
      g = mr;
      var k = f && S === E && E.visualViewport ? E.visualViewport.width : S[T];
      (m -= k - n.width), (m *= l ? 1 : -1);
    }
  }
  var A = Object.assign({ position: a }, c && XO),
    I = u === !0 ? QO({ x: m, y: h }, Jt(r)) : { x: m, y: h };
  if (((m = I.x), (h = I.y), l)) {
    var L;
    return Object.assign(
      {},
      A,
      ((L = {}),
      (L[y] = b ? '0' : ''),
      (L[g] = x ? '0' : ''),
      (L.transform =
        (E.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + h + 'px)'
          : 'translate3d(' + m + 'px, ' + h + 'px, 0)'),
      L)
    );
  }
  return Object.assign(
    {},
    A,
    ((t = {}),
    (t[y] = b ? h + 'px' : ''),
    (t[g] = x ? m + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function ZO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    i = r.adaptive,
    s = i === void 0 ? !0 : i,
    a = r.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: kr(t.placement),
      variation: jo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed'
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Nh(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Nh(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }));
}
const JO = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: ZO,
  data: {}
};
var Zs = { passive: !0 };
function e2(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    i = o === void 0 ? !0 : o,
    s = n.resize,
    a = s === void 0 ? !0 : s,
    l = Jt(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener('scroll', r.update, Zs);
      }),
    a && l.addEventListener('resize', r.update, Zs),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', r.update, Zs);
        }),
        a && l.removeEventListener('resize', r.update, Zs);
    }
  );
}
const t2 = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: e2,
  data: {}
};
var r2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function ba(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return r2[t];
  });
}
var n2 = { start: 'end', end: 'start' };
function Fh(e) {
  return e.replace(/start|end/g, function (t) {
    return n2[t];
  });
}
function Xd(e) {
  var t = Jt(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Qd(e) {
  return $o(mn(e)).left + Xd(e).scrollLeft;
}
function o2(e, t) {
  var r = Jt(e),
    n = mn(e),
    o = r.visualViewport,
    i = n.clientWidth,
    s = n.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var c = fb();
    (c || (!c && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + Qd(e), y: l };
}
function i2(e) {
  var t,
    r = mn(e),
    n = Xd(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = $n(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = $n(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -n.scrollLeft + Qd(e),
    l = -n.scrollTop;
  return (
    Hr(o || r).direction === 'rtl' &&
      (a += $n(r.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function Zd(e) {
  var t = Hr(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function vb(e) {
  return ['html', 'body', '#document'].indexOf(_r(e)) >= 0
    ? e.ownerDocument.body
    : fr(e) && Zd(e)
      ? e
      : vb(ec(e));
}
function Di(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vb(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Jt(n),
    s = o ? [i].concat(i.visualViewport || [], Zd(n) ? n : []) : n,
    a = t.concat(s);
  return o ? a : a.concat(Di(ec(s)));
}
function Pu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function s2(e, t) {
  var r = $o(e, !1, t === 'fixed');
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Vh(e, t, r) {
  return t === ub ? Pu(o2(e, r)) : Un(t) ? s2(t, r) : Pu(i2(mn(e)));
}
function a2(e) {
  var t = Di(ec(e)),
    r = ['absolute', 'fixed'].indexOf(Hr(e).position) >= 0,
    n = r && fr(e) ? Ts(e) : e;
  return Un(n)
    ? t.filter(function (o) {
        return Un(o) && pb(o, n) && _r(o) !== 'body';
      })
    : [];
}
function l2(e, t, r, n) {
  var o = t === 'clippingParents' ? a2(e) : [].concat(t),
    i = [].concat(o, [r]),
    s = i[0],
    a = i.reduce(
      function (l, c) {
        var u = Vh(e, c, n);
        return (
          (l.top = $n(u.top, l.top)),
          (l.right = qa(u.right, l.right)),
          (l.bottom = qa(u.bottom, l.bottom)),
          (l.left = $n(u.left, l.left)),
          l
        );
      },
      Vh(e, s, n)
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function yb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? kr(n) : null,
    i = n ? jo(n) : null,
    s = t.x + t.width / 2 - r.width / 2,
    a = t.y + t.height / 2 - r.height / 2,
    l;
  switch (o) {
    case jt:
      l = { x: s, y: t.y - r.height };
      break;
    case hr:
      l = { x: s, y: t.y + t.height };
      break;
    case mr:
      l = { x: t.x + t.width, y: a };
      break;
    case Bt:
      l = { x: t.x - r.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Gd(o) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (i) {
      case Io:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case rs:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function ns(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    i = r.strategy,
    s = i === void 0 ? e.strategy : i,
    a = r.boundary,
    l = a === void 0 ? kO : a,
    c = r.rootBoundary,
    u = c === void 0 ? ub : c,
    f = r.elementContext,
    d = f === void 0 ? di : f,
    m = r.altBoundary,
    p = m === void 0 ? !1 : m,
    h = r.padding,
    v = h === void 0 ? 0 : h,
    x = mb(typeof v != 'number' ? v : gb(v, Ps)),
    b = d === di ? MO : di,
    g = e.rects.popper,
    y = e.elements[p ? b : d],
    E = l2(Un(y) ? y : y.contextElement || mn(e.elements.popper), l, u, s),
    S = $o(e.elements.reference),
    C = yb({ reference: S, element: g, strategy: 'absolute', placement: o }),
    T = Pu(Object.assign({}, g, C)),
    R = d === di ? T : S,
    k = {
      top: E.top - R.top + x.top,
      bottom: R.bottom - E.bottom + x.bottom,
      left: E.left - R.left + x.left,
      right: R.right - E.right + x.right
    },
    A = e.modifiersData.offset;
  if (d === di && A) {
    var I = A[o];
    Object.keys(k).forEach(function (L) {
      var D = [mr, hr].indexOf(L) >= 0 ? 1 : -1,
        N = [jt, hr].indexOf(L) >= 0 ? 'y' : 'x';
      k[L] += I[N] * D;
    });
  }
  return k;
}
function c2(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    i = r.rootBoundary,
    s = r.padding,
    a = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? db : l,
    u = jo(n),
    f = u
      ? a
        ? jh
        : jh.filter(function (p) {
            return jo(p) === u;
          })
      : Ps,
    d = f.filter(function (p) {
      return c.indexOf(p) >= 0;
    });
  d.length === 0 && (d = f);
  var m = d.reduce(function (p, h) {
    return (
      (p[h] = ns(e, { placement: h, boundary: o, rootBoundary: i, padding: s })[
        kr(h)
      ]),
      p
    );
  }, {});
  return Object.keys(m).sort(function (p, h) {
    return m[p] - m[h];
  });
}
function u2(e) {
  if (kr(e) === qd) return [];
  var t = ba(e);
  return [Fh(e), t, Fh(t)];
}
function d2(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        i = o === void 0 ? !0 : o,
        s = r.altAxis,
        a = s === void 0 ? !0 : s,
        l = r.fallbackPlacements,
        c = r.padding,
        u = r.boundary,
        f = r.rootBoundary,
        d = r.altBoundary,
        m = r.flipVariations,
        p = m === void 0 ? !0 : m,
        h = r.allowedAutoPlacements,
        v = t.options.placement,
        x = kr(v),
        b = x === v,
        g = l || (b || !p ? [ba(v)] : u2(v)),
        y = [v].concat(g).reduce(function (ve, ye) {
          return ve.concat(
            kr(ye) === qd
              ? c2(t, {
                  placement: ye,
                  boundary: u,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: p,
                  allowedAutoPlacements: h
                })
              : ye
          );
        }, []),
        E = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        T = !0,
        R = y[0],
        k = 0;
      k < y.length;
      k++
    ) {
      var A = y[k],
        I = kr(A),
        L = jo(A) === Io,
        D = [jt, hr].indexOf(I) >= 0,
        N = D ? 'width' : 'height',
        B = ns(t, {
          placement: A,
          boundary: u,
          rootBoundary: f,
          altBoundary: d,
          padding: c
        }),
        j = D ? (L ? mr : Bt) : L ? hr : jt;
      E[N] > S[N] && (j = ba(j));
      var F = ba(j),
        z = [];
      if (
        (i && z.push(B[I] <= 0),
        a && z.push(B[j] <= 0, B[F] <= 0),
        z.every(function (ve) {
          return ve;
        }))
      ) {
        (R = A), (T = !1);
        break;
      }
      C.set(A, z);
    }
    if (T)
      for (
        var q = p ? 3 : 1,
          fe = function (ye) {
            var G = y.find(function (Ae) {
              var Re = C.get(Ae);
              if (Re)
                return Re.slice(0, ye).every(function (_e) {
                  return _e;
                });
            });
            if (G) return (R = G), 'break';
          },
          J = q;
        J > 0;
        J--
      ) {
        var ae = fe(J);
        if (ae === 'break') break;
      }
    t.placement !== R &&
      ((t.modifiersData[n]._skip = !0), (t.placement = R), (t.reset = !0));
  }
}
const f2 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: d2,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
};
function Wh(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x
    }
  );
}
function zh(e) {
  return [jt, mr, hr, Bt].some(function (t) {
    return e[t] >= 0;
  });
}
function p2(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = ns(t, { elementContext: 'reference' }),
    a = ns(t, { altBoundary: !0 }),
    l = Wh(s, n),
    c = Wh(a, o, i),
    u = zh(l),
    f = zh(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': f
    }));
}
const h2 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: p2
};
function m2(e, t, r) {
  var n = kr(e),
    o = [Bt, jt].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0),
    (a = (a || 0) * o),
    [Bt, mr].indexOf(n) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function g2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    i = o === void 0 ? [0, 0] : o,
    s = db.reduce(function (u, f) {
      return (u[f] = m2(f, t.rects, i)), u;
    }, {}),
    a = s[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = s);
}
const v2 = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: g2
};
function y2(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = yb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  });
}
const b2 = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: y2,
  data: {}
};
function x2(e) {
  return e === 'x' ? 'y' : 'x';
}
function w2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    i = o === void 0 ? !0 : o,
    s = r.altAxis,
    a = s === void 0 ? !1 : s,
    l = r.boundary,
    c = r.rootBoundary,
    u = r.altBoundary,
    f = r.padding,
    d = r.tether,
    m = d === void 0 ? !0 : d,
    p = r.tetherOffset,
    h = p === void 0 ? 0 : p,
    v = ns(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
    x = kr(t.placement),
    b = jo(t.placement),
    g = !b,
    y = Gd(x),
    E = x2(y),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    T = t.rects.popper,
    R =
      typeof h == 'function'
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    k =
      typeof R == 'number'
        ? { mainAxis: R, altAxis: R }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
    A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 };
  if (S) {
    if (i) {
      var L,
        D = y === 'y' ? jt : Bt,
        N = y === 'y' ? hr : mr,
        B = y === 'y' ? 'height' : 'width',
        j = S[y],
        F = j + v[D],
        z = j - v[N],
        q = m ? -T[B] / 2 : 0,
        fe = b === Io ? C[B] : T[B],
        J = b === Io ? -T[B] : -C[B],
        ae = t.elements.arrow,
        ve = m && ae ? Yd(ae) : { width: 0, height: 0 },
        ye = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : hb(),
        G = ye[D],
        Ae = ye[N],
        Re = _i(0, C[B], ve[B]),
        _e = g ? C[B] / 2 - q - Re - G - k.mainAxis : fe - Re - G - k.mainAxis,
        ft = g
          ? -C[B] / 2 + q + Re + Ae + k.mainAxis
          : J + Re + Ae + k.mainAxis,
        It = t.elements.arrow && Ts(t.elements.arrow),
        je = It ? (y === 'y' ? It.clientTop || 0 : It.clientLeft || 0) : 0,
        Qe = (L = A == null ? void 0 : A[y]) != null ? L : 0,
        pt = j + _e - Qe - je,
        bn = j + ft - Qe,
        xt = _i(m ? qa(F, pt) : F, j, m ? $n(z, bn) : z);
      (S[y] = xt), (I[y] = xt - j);
    }
    if (a) {
      var or,
        Ir = y === 'x' ? jt : Bt,
        Gr = y === 'x' ? hr : mr,
        wt = S[E],
        Ht = E === 'y' ? 'height' : 'width',
        at = wt + v[Ir],
        qt = wt - v[Gr],
        st = [jt, Bt].indexOf(x) !== -1,
        ne = (or = A == null ? void 0 : A[E]) != null ? or : 0,
        be = st ? at : wt - C[Ht] - T[Ht] - ne + k.altAxis,
        ee = st ? wt + C[Ht] + T[Ht] - ne - k.altAxis : qt,
        he = m && st ? HO(be, wt, ee) : _i(m ? be : at, wt, m ? ee : qt);
      (S[E] = he), (I[E] = he - wt);
    }
    t.modifiersData[n] = I;
  }
}
const S2 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: w2,
  requiresIfExists: ['offset']
};
function E2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function C2(e) {
  return e === Jt(e) || !fr(e) ? Xd(e) : E2(e);
}
function P2(e) {
  var t = e.getBoundingClientRect(),
    r = Lo(t.width) / e.offsetWidth || 1,
    n = Lo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function T2(e, t, r) {
  r === void 0 && (r = !1);
  var n = fr(t),
    o = fr(t) && P2(t),
    i = mn(t),
    s = $o(e, o, r),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((_r(t) !== 'body' || Zd(i)) && (a = C2(t)),
      fr(t)
        ? ((l = $o(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Qd(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height
    }
  );
}
function R2(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function (a) {
      if (!r.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || o(i);
    }),
    n
  );
}
function k2(e) {
  var t = R2(e);
  return NO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function M2(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function O2(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name];
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data)
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Uh = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Hh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function A2(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    i = o === void 0 ? Uh : o;
  return function (a, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Uh, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {}
      },
      f = [],
      d = !1,
      m = {
        state: u,
        setOptions: function (x) {
          var b = typeof x == 'function' ? x(u.options) : x;
          h(),
            (u.options = Object.assign({}, i, u.options, b)),
            (u.scrollParents = {
              reference: Un(a)
                ? Di(a)
                : a.contextElement
                  ? Di(a.contextElement)
                  : [],
              popper: Di(l)
            });
          var g = k2(O2([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = g.filter(function (y) {
              return y.enabled;
            })),
            p(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var x = u.elements,
              b = x.reference,
              g = x.popper;
            if (Hh(b, g)) {
              (u.rects = {
                reference: T2(b, Ts(g), u.options.strategy === 'fixed'),
                popper: Yd(g)
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (k) {
                  return (u.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var y = 0; y < u.orderedModifiers.length; y++) {
                if (u.reset === !0) {
                  (u.reset = !1), (y = -1);
                  continue;
                }
                var E = u.orderedModifiers[y],
                  S = E.fn,
                  C = E.options,
                  T = C === void 0 ? {} : C,
                  R = E.name;
                typeof S == 'function' &&
                  (u = S({ state: u, options: T, name: R, instance: m }) || u);
              }
            }
          }
        },
        update: M2(function () {
          return new Promise(function (v) {
            m.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          h(), (d = !0);
        }
      };
    if (!Hh(a, l)) return m;
    m.setOptions(c).then(function (v) {
      !d && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function p() {
      u.orderedModifiers.forEach(function (v) {
        var x = v.name,
          b = v.options,
          g = b === void 0 ? {} : b,
          y = v.effect;
        if (typeof y == 'function') {
          var E = y({ state: u, name: x, instance: m, options: g }),
            S = function () {};
          f.push(E || S);
        }
      });
    }
    function h() {
      f.forEach(function (v) {
        return v();
      }),
        (f = []);
    }
    return m;
  };
}
var _2 = [t2, b2, JO, WO, v2, f2, S2, GO, h2],
  D2 = A2({ defaultModifiers: _2 });
const bb = 'Popper';
function I2(e) {
  return lb(bb, e);
}
lO(bb, ['root']);
const L2 = [
    'anchorEl',
    'children',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'slotProps',
    'slots',
    'TransitionProps',
    'ownerState'
  ],
  $2 = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
    'slotProps',
    'slots'
  ];
function j2(e, t) {
  if (t === 'ltr') return e;
  switch (e) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return e;
  }
}
function Tu(e) {
  return typeof e == 'function' ? e() : e;
}
function B2(e) {
  return e.nodeType !== void 0;
}
const N2 = () => ze({ root: ['root'] }, MM(I2)),
  F2 = {},
  V2 = w.forwardRef(function (t, r) {
    var n;
    const {
        anchorEl: o,
        children: i,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: c,
        placement: u,
        popperOptions: f,
        popperRef: d,
        slotProps: m = {},
        slots: p = {},
        TransitionProps: h
      } = t,
      v = Z(t, L2),
      x = w.useRef(null),
      b = ct(x, r),
      g = w.useRef(null),
      y = ct(g, d),
      E = w.useRef(y);
    ln(() => {
      E.current = y;
    }, [y]),
      w.useImperativeHandle(d, () => g.current, []);
    const S = j2(u, s),
      [C, T] = w.useState(S),
      [R, k] = w.useState(Tu(o));
    w.useEffect(() => {
      g.current && g.current.forceUpdate();
    }),
      w.useEffect(() => {
        o && k(Tu(o));
      }, [o]),
      ln(() => {
        if (!R || !c) return;
        const N = (F) => {
          T(F.placement);
        };
        let B = [
          { name: 'preventOverflow', options: { altBoundary: a } },
          { name: 'flip', options: { altBoundary: a } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: F }) => {
              N(F);
            }
          }
        ];
        l != null && (B = B.concat(l)),
          f && f.modifiers != null && (B = B.concat(f.modifiers));
        const j = D2(R, x.current, M({ placement: S }, f, { modifiers: B }));
        return (
          E.current(j),
          () => {
            j.destroy(), E.current(null);
          }
        );
      }, [R, a, l, c, f, S]);
    const A = { placement: C };
    h !== null && (A.TransitionProps = h);
    const I = N2(),
      L = (n = p.root) != null ? n : 'div',
      D = Ha({
        elementType: L,
        externalSlotProps: m.root,
        externalForwardedProps: v,
        additionalProps: { role: 'tooltip', ref: b },
        ownerState: t,
        className: I.root
      });
    return P.jsx(L, M({}, D, { children: typeof i == 'function' ? i(A) : i }));
  }),
  W2 = w.forwardRef(function (t, r) {
    const {
        anchorEl: n,
        children: o,
        container: i,
        direction: s = 'ltr',
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: f = 'bottom',
        popperOptions: d = F2,
        popperRef: m,
        style: p,
        transition: h = !1,
        slotProps: v = {},
        slots: x = {}
      } = t,
      b = Z(t, $2),
      [g, y] = w.useState(!0),
      E = () => {
        y(!1);
      },
      S = () => {
        y(!0);
      };
    if (!l && !u && (!h || g)) return null;
    let C;
    if (i) C = i;
    else if (n) {
      const k = Tu(n);
      C = k && B2(k) ? $t(k).body : $t(null).body;
    }
    const T = !u && l && (!h || g) ? 'none' : void 0,
      R = h ? { in: u, onEnter: E, onExited: S } : void 0;
    return P.jsx(cb, {
      disablePortal: a,
      container: C,
      children: P.jsx(
        V2,
        M(
          {
            anchorEl: n,
            direction: s,
            disablePortal: a,
            modifiers: c,
            ref: r,
            open: h ? !g : u,
            placement: f,
            popperOptions: d,
            popperRef: m,
            slotProps: v,
            slots: x
          },
          b,
          {
            style: M({ position: 'fixed', top: 0, left: 0, display: T }, p),
            TransitionProps: R,
            children: o
          }
        )
      )
    });
  });
var Jd = {};
Object.defineProperty(Jd, '__esModule', { value: !0 });
var xb = (Jd.default = void 0),
  z2 = H2(w),
  U2 = eb;
function wb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (wb = function (n) {
    return n ? r : t;
  })(e);
}
function H2(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = wb(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function q2(e) {
  return Object.keys(e).length === 0;
}
function K2(e = null) {
  const t = z2.useContext(U2.ThemeContext);
  return !t || q2(t) ? e : t;
}
xb = Jd.default = K2;
const Y2 = [
    'anchorEl',
    'component',
    'components',
    'componentsProps',
    'container',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'transition',
    'slots',
    'slotProps'
  ],
  G2 = le(W2, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({}),
  X2 = w.forwardRef(function (t, r) {
    var n;
    const o = xb(),
      i = $e({ props: t, name: 'MuiPopper' }),
      {
        anchorEl: s,
        component: a,
        components: l,
        componentsProps: c,
        container: u,
        disablePortal: f,
        keepMounted: d,
        modifiers: m,
        open: p,
        placement: h,
        popperOptions: v,
        popperRef: x,
        transition: b,
        slots: g,
        slotProps: y
      } = i,
      E = Z(i, Y2),
      S =
        (n = g == null ? void 0 : g.root) != null
          ? n
          : l == null
            ? void 0
            : l.Root,
      C = M(
        {
          anchorEl: s,
          container: u,
          disablePortal: f,
          keepMounted: d,
          modifiers: m,
          open: p,
          placement: h,
          popperOptions: v,
          popperRef: x,
          transition: b
        },
        E
      );
    return P.jsx(
      G2,
      M(
        {
          as: a,
          direction: o == null ? void 0 : o.direction,
          slots: { root: S },
          slotProps: y ?? c
        },
        C,
        { ref: r }
      )
    );
  }),
  Q2 = Gl(
    P.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
    }),
    'Cancel'
  );
function Z2(e) {
  return Ve('MuiChip', e);
}
const we = We('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible'
  ]),
  J2 = [
    'avatar',
    'className',
    'clickable',
    'color',
    'component',
    'deleteIcon',
    'disabled',
    'icon',
    'label',
    'onClick',
    'onDelete',
    'onKeyDown',
    'onKeyUp',
    'size',
    'variant',
    'tabIndex',
    'skipFocusWhenDisabled'
  ],
  eA = (e) => {
    const {
        classes: t,
        disabled: r,
        size: n,
        color: o,
        iconColor: i,
        onDelete: s,
        clickable: a,
        variant: l
      } = e,
      c = {
        root: [
          'root',
          l,
          r && 'disabled',
          `size${Q(n)}`,
          `color${Q(o)}`,
          a && 'clickable',
          a && `clickableColor${Q(o)}`,
          s && 'deletable',
          s && `deletableColor${Q(o)}`,
          `${l}${Q(o)}`
        ],
        label: ['label', `label${Q(n)}`],
        avatar: ['avatar', `avatar${Q(n)}`, `avatarColor${Q(o)}`],
        icon: ['icon', `icon${Q(n)}`, `iconColor${Q(i)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${Q(n)}`,
          `deleteIconColor${Q(o)}`,
          `deleteIcon${Q(l)}Color${Q(o)}`
        ]
      };
    return ze(c, Z2, t);
  },
  tA = le('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        {
          color: n,
          iconColor: o,
          clickable: i,
          onDelete: s,
          size: a,
          variant: l
        } = r;
      return [
        { [`& .${we.avatar}`]: t.avatar },
        { [`& .${we.avatar}`]: t[`avatar${Q(a)}`] },
        { [`& .${we.avatar}`]: t[`avatarColor${Q(n)}`] },
        { [`& .${we.icon}`]: t.icon },
        { [`& .${we.icon}`]: t[`icon${Q(a)}`] },
        { [`& .${we.icon}`]: t[`iconColor${Q(o)}`] },
        { [`& .${we.deleteIcon}`]: t.deleteIcon },
        { [`& .${we.deleteIcon}`]: t[`deleteIcon${Q(a)}`] },
        { [`& .${we.deleteIcon}`]: t[`deleteIconColor${Q(n)}`] },
        { [`& .${we.deleteIcon}`]: t[`deleteIcon${Q(l)}Color${Q(n)}`] },
        t.root,
        t[`size${Q(a)}`],
        t[`color${Q(n)}`],
        i && t.clickable,
        i && n !== 'default' && t[`clickableColor${Q(n)})`],
        s && t.deletable,
        s && n !== 'default' && t[`deletableColor${Q(n)}`],
        t[l],
        t[`${l}${Q(n)}`]
      ];
    }
  })(
    ({ theme: e, ownerState: t }) => {
      const r =
        e.palette.mode === 'light' ? e.palette.grey[700] : e.palette.grey[300];
      return M(
        {
          maxWidth: '100%',
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: 'nowrap',
          transition: e.transitions.create(['background-color', 'box-shadow']),
          cursor: 'unset',
          outline: 0,
          textDecoration: 'none',
          border: 0,
          padding: 0,
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          [`&.${we.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: 'none'
          },
          [`& .${we.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
            fontSize: e.typography.pxToRem(12)
          },
          [`& .${we.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark
          },
          [`& .${we.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark
          },
          [`& .${we.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10)
          },
          [`& .${we.icon}`]: M(
            { marginLeft: 5, marginRight: -6 },
            t.size === 'small' && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            t.iconColor === t.color &&
              M(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : r },
                t.color !== 'default' && { color: 'inherit' }
              )
          ),
          [`& .${we.deleteIcon}`]: M(
            {
              WebkitTapHighlightColor: 'transparent',
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : vt(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : vt(e.palette.text.primary, 0.4)
              }
            },
            t.size === 'small' && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            },
            t.color !== 'default' && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : vt(e.palette[t.color].contrastText, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].contrastText
              }
            }
          )
        },
        t.size === 'small' && { height: 24 },
        t.color !== 'default' && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText
        },
        t.onDelete && {
          [`&.${we.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : vt(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                )
          }
        },
        t.onDelete &&
          t.color !== 'default' && {
            [`&.${we.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark
            }
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      M(
        {},
        t.clickable && {
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : vt(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                )
          },
          [`&.${we.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : vt(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                )
          },
          '&:active': { boxShadow: (e.vars || e).shadows[1] }
        },
        t.clickable &&
          t.color !== 'default' && {
            [`&:hover, &.${we.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark
            }
          }
      ),
    ({ theme: e, ownerState: t }) =>
      M(
        {},
        t.variant === 'outlined' && {
          backgroundColor: 'transparent',
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${e.palette.mode === 'light' ? e.palette.grey[400] : e.palette.grey[700]}`,
          [`&.${we.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover
          },
          [`&.${we.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          },
          [`& .${we.avatar}`]: { marginLeft: 4 },
          [`& .${we.avatarSmall}`]: { marginLeft: 2 },
          [`& .${we.icon}`]: { marginLeft: 4 },
          [`& .${we.iconSmall}`]: { marginLeft: 2 },
          [`& .${we.deleteIcon}`]: { marginRight: 5 },
          [`& .${we.deleteIconSmall}`]: { marginRight: 3 }
        },
        t.variant === 'outlined' &&
          t.color !== 'default' && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : vt(e.palette[t.color].main, 0.7)}`,
            [`&.${we.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : vt(e.palette[t.color].main, e.palette.action.hoverOpacity)
            },
            [`&.${we.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                : vt(e.palette[t.color].main, e.palette.action.focusOpacity)
            },
            [`& .${we.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : vt(e.palette[t.color].main, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].main
              }
            }
          }
      )
  ),
  rA = le('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        { size: n } = r;
      return [t.label, t[`label${Q(n)}`]];
    }
  })(({ ownerState: e }) =>
    M(
      {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: 'nowrap'
      },
      e.variant === 'outlined' && { paddingLeft: 11, paddingRight: 11 },
      e.size === 'small' && { paddingLeft: 8, paddingRight: 8 },
      e.size === 'small' &&
        e.variant === 'outlined' && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function qh(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const Sb = w.forwardRef(function (t, r) {
  const n = $e({ props: t, name: 'MuiChip' }),
    {
      avatar: o,
      className: i,
      clickable: s,
      color: a = 'default',
      component: l,
      deleteIcon: c,
      disabled: u = !1,
      icon: f,
      label: d,
      onClick: m,
      onDelete: p,
      onKeyDown: h,
      onKeyUp: v,
      size: x = 'medium',
      variant: b = 'filled',
      tabIndex: g,
      skipFocusWhenDisabled: y = !1
    } = n,
    E = Z(n, J2),
    S = w.useRef(null),
    C = ct(S, r),
    T = (z) => {
      z.stopPropagation(), p && p(z);
    },
    R = (z) => {
      z.currentTarget === z.target && qh(z) && z.preventDefault(), h && h(z);
    },
    k = (z) => {
      z.currentTarget === z.target &&
        (p && qh(z)
          ? p(z)
          : z.key === 'Escape' && S.current && S.current.blur()),
        v && v(z);
    },
    A = s !== !1 && m ? !0 : s,
    I = A || p ? Do : l || 'div',
    L = M({}, n, {
      component: I,
      disabled: u,
      size: x,
      color: a,
      iconColor: (w.isValidElement(f) && f.props.color) || a,
      onDelete: !!p,
      clickable: A,
      variant: b
    }),
    D = eA(L),
    N =
      I === Do
        ? M(
            { component: l || 'div', focusVisibleClassName: D.focusVisible },
            p && { disableRipple: !0 }
          )
        : {};
  let B = null;
  p &&
    (B =
      c && w.isValidElement(c)
        ? w.cloneElement(c, {
            className: ue(c.props.className, D.deleteIcon),
            onClick: T
          })
        : P.jsx(Q2, { className: ue(D.deleteIcon), onClick: T }));
  let j = null;
  o &&
    w.isValidElement(o) &&
    (j = w.cloneElement(o, { className: ue(D.avatar, o.props.className) }));
  let F = null;
  return (
    f &&
      w.isValidElement(f) &&
      (F = w.cloneElement(f, { className: ue(D.icon, f.props.className) })),
    P.jsxs(
      tA,
      M(
        {
          as: I,
          className: ue(D.root, i),
          disabled: A && u ? !0 : void 0,
          onClick: m,
          onKeyDown: R,
          onKeyUp: k,
          ref: C,
          tabIndex: y && u ? -1 : g,
          ownerState: L
        },
        N,
        E,
        {
          children: [
            j || F,
            P.jsx(rA, { className: ue(D.label), ownerState: L, children: d }),
            B
          ]
        }
      )
    )
  );
});
function nA(e) {
  return P.jsx(zT, M({}, e, { defaultTheme: Wd, themeId: Ao }));
}
const oA = Gl(
  P.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
  }),
  'Person'
);
function iA(e) {
  return Ve('MuiAvatar', e);
}
We('MuiAvatar', [
  'root',
  'colorDefault',
  'circular',
  'rounded',
  'square',
  'img',
  'fallback'
]);
const sA = [
    'alt',
    'children',
    'className',
    'component',
    'slots',
    'slotProps',
    'imgProps',
    'sizes',
    'src',
    'srcSet',
    'variant'
  ],
  aA = (e) => {
    const { classes: t, variant: r, colorDefault: n } = e;
    return ze(
      {
        root: ['root', r, n && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback']
      },
      iA,
      t
    );
  },
  lA = le('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
    }
  })(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
    variants: [
      {
        props: { variant: 'rounded' },
        style: { borderRadius: (e.vars || e).shape.borderRadius }
      },
      { props: { variant: 'square' }, style: { borderRadius: 0 } },
      {
        props: { colorDefault: !0 },
        style: M(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : M(
                { backgroundColor: e.palette.grey[400] },
                e.applyStyles('dark', { backgroundColor: e.palette.grey[600] })
              )
        )
      }
    ]
  })),
  cA = le('img', {
    name: 'MuiAvatar',
    slot: 'Img',
    overridesResolver: (e, t) => t.img
  })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4
  }),
  uA = le(oA, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback
  })({ width: '75%', height: '75%' });
function dA({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: n }) {
  const [o, i] = w.useState(!1);
  return (
    w.useEffect(() => {
      if (!r && !n) return;
      i(!1);
      let s = !0;
      const a = new Image();
      return (
        (a.onload = () => {
          s && i('loaded');
        }),
        (a.onerror = () => {
          s && i('error');
        }),
        (a.crossOrigin = e),
        (a.referrerPolicy = t),
        (a.src = r),
        n && (a.srcset = n),
        () => {
          s = !1;
        }
      );
    }, [e, t, r, n]),
    o
  );
}
const tc = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiAvatar' }),
      {
        alt: o,
        children: i,
        className: s,
        component: a = 'div',
        slots: l = {},
        slotProps: c = {},
        imgProps: u,
        sizes: f,
        src: d,
        srcSet: m,
        variant: p = 'circular'
      } = n,
      h = Z(n, sA);
    let v = null;
    const x = dA(M({}, u, { src: d, srcSet: m })),
      b = d || m,
      g = b && x !== 'error',
      y = M({}, n, { colorDefault: !g, component: a, variant: p }),
      E = aA(y),
      [S, C] = IM('img', {
        className: E.img,
        elementType: cA,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: M({}, u, c.img) }
        },
        additionalProps: { alt: o, src: d, srcSet: m, sizes: f },
        ownerState: y
      });
    return (
      g
        ? (v = P.jsx(S, M({}, C)))
        : i || i === 0
          ? (v = i)
          : b && o
            ? (v = o[0])
            : (v = P.jsx(uA, { ownerState: y, className: E.fallback })),
      P.jsx(
        lA,
        M({ as: a, ownerState: y, className: ue(E.root, s), ref: r }, h, {
          children: v
        })
      )
    );
  }),
  fA = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent'
  ],
  pA = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Eb = w.forwardRef(function (t, r) {
    const n = dt(),
      o = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: f,
        onEntering: d,
        onExit: m,
        onExited: p,
        onExiting: h,
        style: v,
        timeout: x = o,
        TransitionComponent: b = rr
      } = t,
      g = Z(t, fA),
      y = w.useRef(null),
      E = ct(y, a.ref, r),
      S = (D) => (N) => {
        if (D) {
          const B = y.current;
          N === void 0 ? D(B) : D(B, N);
        }
      },
      C = S(d),
      T = S((D, N) => {
        Xl(D);
        const B = Ar({ style: v, timeout: x, easing: l }, { mode: 'enter' });
        (D.style.webkitTransition = n.transitions.create('opacity', B)),
          (D.style.transition = n.transitions.create('opacity', B)),
          u && u(D, N);
      }),
      R = S(f),
      k = S(h),
      A = S((D) => {
        const N = Ar({ style: v, timeout: x, easing: l }, { mode: 'exit' });
        (D.style.webkitTransition = n.transitions.create('opacity', N)),
          (D.style.transition = n.transitions.create('opacity', N)),
          m && m(D);
      }),
      I = S(p),
      L = (D) => {
        i && i(y.current, D);
      };
    return P.jsx(
      b,
      M(
        {
          appear: s,
          in: c,
          nodeRef: y,
          onEnter: T,
          onEntered: R,
          onEntering: C,
          onExit: A,
          onExited: I,
          onExiting: k,
          addEndListener: L,
          timeout: x
        },
        g,
        {
          children: (D, N) =>
            w.cloneElement(
              a,
              M(
                {
                  style: M(
                    {
                      opacity: 0,
                      visibility: D === 'exited' && !c ? 'hidden' : void 0
                    },
                    pA[D],
                    v,
                    a.props.style
                  ),
                  ref: E
                },
                N
              )
            )
        }
      )
    );
  });
function hA(e) {
  return Ve('MuiBackdrop', e);
}
We('MuiBackdrop', ['root', 'invisible']);
const mA = [
    'children',
    'className',
    'component',
    'components',
    'componentsProps',
    'invisible',
    'open',
    'slotProps',
    'slots',
    'TransitionComponent',
    'transitionDuration'
  ],
  gA = (e) => {
    const { classes: t, invisible: r } = e;
    return ze({ root: ['root', r && 'invisible'] }, hA, t);
  },
  vA = le('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.invisible && t.invisible];
    }
  })(({ ownerState: e }) =>
    M(
      {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        WebkitTapHighlightColor: 'transparent'
      },
      e.invisible && { backgroundColor: 'transparent' }
    )
  ),
  yA = w.forwardRef(function (t, r) {
    var n, o, i;
    const s = $e({ props: t, name: 'MuiBackdrop' }),
      {
        children: a,
        className: l,
        component: c = 'div',
        components: u = {},
        componentsProps: f = {},
        invisible: d = !1,
        open: m,
        slotProps: p = {},
        slots: h = {},
        TransitionComponent: v = Eb,
        transitionDuration: x
      } = s,
      b = Z(s, mA),
      g = M({}, s, { component: c, invisible: d }),
      y = gA(g),
      E = (n = p.root) != null ? n : f.root;
    return P.jsx(
      v,
      M({ in: m, timeout: x }, b, {
        children: P.jsx(
          vA,
          M({ 'aria-hidden': !0 }, E, {
            as: (o = (i = h.root) != null ? i : u.Root) != null ? o : c,
            className: ue(y.root, l, E == null ? void 0 : E.className),
            ownerState: M({}, g, E == null ? void 0 : E.ownerState),
            classes: y,
            ref: r,
            children: a
          })
        )
      })
    );
  }),
  bA = We('MuiBox', ['root']),
  xA = Vd(),
  lt = GT({
    themeId: Ao,
    defaultTheme: xA,
    defaultClassName: bA.root,
    generateClassName: Id.generate
  }),
  wA = Gl(
    P.jsx('path', {
      d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    }),
    'MoreHoriz'
  ),
  SA = ['slots', 'slotProps'],
  EA = le(Do)(({ theme: e }) =>
    M(
      {
        display: 'flex',
        marginLeft: `calc(${e.spacing(1)} * 0.5)`,
        marginRight: `calc(${e.spacing(1)} * 0.5)`
      },
      e.palette.mode === 'light'
        ? { backgroundColor: e.palette.grey[100], color: e.palette.grey[700] }
        : { backgroundColor: e.palette.grey[700], color: e.palette.grey[100] },
      {
        borderRadius: 2,
        '&:hover, &:focus': M(
          {},
          e.palette.mode === 'light'
            ? { backgroundColor: e.palette.grey[200] }
            : { backgroundColor: e.palette.grey[600] }
        ),
        '&:active': M(
          { boxShadow: e.shadows[0] },
          e.palette.mode === 'light'
            ? { backgroundColor: vh(e.palette.grey[200], 0.12) }
            : { backgroundColor: vh(e.palette.grey[600], 0.12) }
        )
      }
    )
  ),
  CA = le(wA)({ width: 24, height: 16 });
function PA(e) {
  const { slots: t = {}, slotProps: r = {} } = e,
    n = Z(e, SA),
    o = e;
  return P.jsx('li', {
    children: P.jsx(
      EA,
      M({ focusRipple: !0 }, n, {
        ownerState: o,
        children: P.jsx(
          CA,
          M({ as: t.CollapsedIcon, ownerState: o }, r.collapsedIcon)
        )
      })
    )
  });
}
function TA(e) {
  return Ve('MuiBreadcrumbs', e);
}
const RA = We('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']),
  kA = [
    'children',
    'className',
    'component',
    'slots',
    'slotProps',
    'expandText',
    'itemsAfterCollapse',
    'itemsBeforeCollapse',
    'maxItems',
    'separator'
  ],
  MA = (e) => {
    const { classes: t } = e;
    return ze(
      { root: ['root'], li: ['li'], ol: ['ol'], separator: ['separator'] },
      TA,
      t
    );
  },
  OA = le(Se, {
    name: 'MuiBreadcrumbs',
    slot: 'Root',
    overridesResolver: (e, t) => [{ [`& .${RA.li}`]: t.li }, t.root]
  })({}),
  AA = le('ol', {
    name: 'MuiBreadcrumbs',
    slot: 'Ol',
    overridesResolver: (e, t) => t.ol
  })({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }),
  _A = le('li', {
    name: 'MuiBreadcrumbs',
    slot: 'Separator',
    overridesResolver: (e, t) => t.separator
  })({ display: 'flex', userSelect: 'none', marginLeft: 8, marginRight: 8 });
function DA(e, t, r, n) {
  return e.reduce(
    (o, i, s) => (
      s < e.length - 1
        ? (o = o.concat(
            i,
            P.jsx(
              _A,
              { 'aria-hidden': !0, className: t, ownerState: n, children: r },
              `separator-${s}`
            )
          ))
        : o.push(i),
      o
    ),
    []
  );
}
const _c = w.forwardRef(function (t, r) {
  const n = $e({ props: t, name: 'MuiBreadcrumbs' }),
    {
      children: o,
      className: i,
      component: s = 'nav',
      slots: a = {},
      slotProps: l = {},
      expandText: c = 'Show path',
      itemsAfterCollapse: u = 1,
      itemsBeforeCollapse: f = 1,
      maxItems: d = 8,
      separator: m = '/'
    } = n,
    p = Z(n, kA),
    [h, v] = w.useState(!1),
    x = M({}, n, {
      component: s,
      expanded: h,
      expandText: c,
      itemsAfterCollapse: u,
      itemsBeforeCollapse: f,
      maxItems: d,
      separator: m
    }),
    b = MA(x),
    g = Ha({
      elementType: a.CollapsedIcon,
      externalSlotProps: l.collapsedIcon,
      ownerState: x
    }),
    y = w.useRef(null),
    E = (C) => {
      const T = () => {
        v(!0);
        const R = y.current.querySelector('a[href],button,[tabindex]');
        R && R.focus();
      };
      return f + u >= C.length
        ? C
        : [
            ...C.slice(0, f),
            P.jsx(
              PA,
              {
                'aria-label': c,
                slots: { CollapsedIcon: a.CollapsedIcon },
                slotProps: { collapsedIcon: g },
                onClick: T
              },
              'ellipsis'
            ),
            ...C.slice(C.length - u, C.length)
          ];
    },
    S = w.Children.toArray(o)
      .filter((C) => w.isValidElement(C))
      .map((C, T) =>
        P.jsx('li', { className: b.li, children: C }, `child-${T}`)
      );
  return P.jsx(
    OA,
    M(
      {
        ref: r,
        component: s,
        color: 'text.secondary',
        className: ue(b.root, i),
        ownerState: x
      },
      p,
      {
        children: P.jsx(AA, {
          className: b.ol,
          ref: y,
          ownerState: x,
          children: DA(h || (d && S.length <= d) ? S : E(S), b.separator, m, x)
        })
      }
    )
  );
});
function IA(e) {
  return Ve('MuiCard', e);
}
We('MuiCard', ['root']);
const LA = ['className', 'raised'],
  $A = (e) => {
    const { classes: t } = e;
    return ze({ root: ['root'] }, IA, t);
  },
  jA = le(Zl, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ overflow: 'hidden' })),
  Ka = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCard' }),
      { className: o, raised: i = !1 } = n,
      s = Z(n, LA),
      a = M({}, n, { raised: i }),
      l = $A(a);
    return P.jsx(
      jA,
      M(
        {
          className: ue(l.root, o),
          elevation: i ? 8 : void 0,
          ref: r,
          ownerState: a
        },
        s
      )
    );
  });
function BA(e) {
  return Ve('MuiCardContent', e);
}
We('MuiCardContent', ['root']);
const NA = ['className', 'component'],
  FA = (e) => {
    const { classes: t } = e;
    return ze({ root: ['root'] }, BA, t);
  },
  VA = le('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  Cb = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCardContent' }),
      { className: o, component: i = 'div' } = n,
      s = Z(n, NA),
      a = M({}, n, { component: i }),
      l = FA(a);
    return P.jsx(
      VA,
      M({ as: i, className: ue(l.root, o), ownerState: a, ref: r }, s)
    );
  });
function WA(e) {
  return Ve('MuiCardHeader', e);
}
const Kh = We('MuiCardHeader', [
    'root',
    'avatar',
    'action',
    'content',
    'title',
    'subheader'
  ]),
  zA = [
    'action',
    'avatar',
    'className',
    'component',
    'disableTypography',
    'subheader',
    'subheaderTypographyProps',
    'title',
    'titleTypographyProps'
  ],
  UA = (e) => {
    const { classes: t } = e;
    return ze(
      {
        root: ['root'],
        avatar: ['avatar'],
        action: ['action'],
        content: ['content'],
        title: ['title'],
        subheader: ['subheader']
      },
      WA,
      t
    );
  },
  HA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Root',
    overridesResolver: (e, t) =>
      M(
        { [`& .${Kh.title}`]: t.title, [`& .${Kh.subheader}`]: t.subheader },
        t.root
      )
  })({ display: 'flex', alignItems: 'center', padding: 16 }),
  qA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Avatar',
    overridesResolver: (e, t) => t.avatar
  })({ display: 'flex', flex: '0 0 auto', marginRight: 16 }),
  KA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Action',
    overridesResolver: (e, t) => t.action
  })({
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -4,
    marginRight: -8,
    marginBottom: -4
  }),
  YA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Content',
    overridesResolver: (e, t) => t.content
  })({ flex: '1 1 auto' }),
  Ya = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCardHeader' }),
      {
        action: o,
        avatar: i,
        className: s,
        component: a = 'div',
        disableTypography: l = !1,
        subheader: c,
        subheaderTypographyProps: u,
        title: f,
        titleTypographyProps: d
      } = n,
      m = Z(n, zA),
      p = M({}, n, { component: a, disableTypography: l }),
      h = UA(p);
    let v = f;
    v != null &&
      v.type !== Se &&
      !l &&
      (v = P.jsx(
        Se,
        M(
          {
            variant: i ? 'body2' : 'h5',
            className: h.title,
            component: 'span',
            display: 'block'
          },
          d,
          { children: v }
        )
      ));
    let x = c;
    return (
      x != null &&
        x.type !== Se &&
        !l &&
        (x = P.jsx(
          Se,
          M(
            {
              variant: i ? 'body2' : 'body1',
              className: h.subheader,
              color: 'text.secondary',
              component: 'span',
              display: 'block'
            },
            u,
            { children: x }
          )
        )),
      P.jsxs(
        HA,
        M({ className: ue(h.root, s), as: a, ref: r, ownerState: p }, m, {
          children: [
            i && P.jsx(qA, { className: h.avatar, ownerState: p, children: i }),
            P.jsxs(YA, {
              className: h.content,
              ownerState: p,
              children: [v, x]
            }),
            o && P.jsx(KA, { className: h.action, ownerState: p, children: o })
          ]
        })
      )
    );
  }),
  GA = (e, t) =>
    M(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%'
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  XA = (e) =>
    M({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white }
    }),
  QA = (e, t = !1) => {
    var r;
    const n = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        n[e.getColorSchemeSelector(s).replace(/\s*&/, '')] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode
        };
      });
    let o = M(
      {
        html: GA(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: M({ margin: 0 }, XA(e), {
          '&::backdrop': {
            backgroundColor: (e.vars || e).palette.background.default
          }
        })
      },
      n
    );
    const i =
      (r = e.components) == null || (r = r.MuiCssBaseline) == null
        ? void 0
        : r.styleOverrides;
    return i && (o = [o, i]), o;
  };
function Pb(e) {
  const t = $e({ props: e, name: 'MuiCssBaseline' }),
    { children: r, enableColorScheme: n = !1 } = t;
  return P.jsxs(w.Fragment, {
    children: [P.jsx(nA, { styles: (o) => QA(o, n) }), r]
  });
}
function ZA(e) {
  return Ve('MuiModal', e);
}
We('MuiModal', ['root', 'hidden', 'backdrop']);
const JA = [
    'BackdropComponent',
    'BackdropProps',
    'classes',
    'className',
    'closeAfterTransition',
    'children',
    'container',
    'component',
    'components',
    'componentsProps',
    'disableAutoFocus',
    'disableEnforceFocus',
    'disableEscapeKeyDown',
    'disablePortal',
    'disableRestoreFocus',
    'disableScrollLock',
    'hideBackdrop',
    'keepMounted',
    'onBackdropClick',
    'onClose',
    'onTransitionEnter',
    'onTransitionExited',
    'open',
    'slotProps',
    'slots',
    'theme'
  ],
  e_ = (e) => {
    const { open: t, exited: r, classes: n } = e;
    return ze(
      { root: ['root', !t && r && 'hidden'], backdrop: ['backdrop'] },
      ZA,
      n
    );
  },
  t_ = le('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.open && r.exited && t.hidden];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        position: 'fixed',
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },
      !t.open && t.exited && { visibility: 'hidden' }
    )
  ),
  r_ = le(yA, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, t) => t.backdrop
  })({ zIndex: -1 }),
  n_ = w.forwardRef(function (t, r) {
    var n, o, i, s, a, l;
    const c = $e({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: u = r_,
        BackdropProps: f,
        className: d,
        closeAfterTransition: m = !1,
        children: p,
        container: h,
        component: v,
        components: x = {},
        componentsProps: b = {},
        disableAutoFocus: g = !1,
        disableEnforceFocus: y = !1,
        disableEscapeKeyDown: E = !1,
        disablePortal: S = !1,
        disableRestoreFocus: C = !1,
        disableScrollLock: T = !1,
        hideBackdrop: R = !1,
        keepMounted: k = !1,
        onBackdropClick: A,
        open: I,
        slotProps: L,
        slots: D
      } = c,
      N = Z(c, JA),
      B = M({}, c, {
        closeAfterTransition: m,
        disableAutoFocus: g,
        disableEnforceFocus: y,
        disableEscapeKeyDown: E,
        disablePortal: S,
        disableRestoreFocus: C,
        disableScrollLock: T,
        hideBackdrop: R,
        keepMounted: k
      }),
      {
        getRootProps: j,
        getBackdropProps: F,
        getTransitionProps: z,
        portalRef: q,
        isTopModal: fe,
        exited: J,
        hasTransition: ae
      } = RO(M({}, B, { rootRef: r })),
      ve = M({}, B, { exited: J }),
      ye = e_(ve),
      G = {};
    if ((p.props.tabIndex === void 0 && (G.tabIndex = '-1'), ae)) {
      const { onEnter: Qe, onExited: pt } = z();
      (G.onEnter = Qe), (G.onExited = pt);
    }
    const Ae =
        (n = (o = D == null ? void 0 : D.root) != null ? o : x.Root) != null
          ? n
          : t_,
      Re =
        (i = (s = D == null ? void 0 : D.backdrop) != null ? s : x.Backdrop) !=
        null
          ? i
          : u,
      _e = (a = L == null ? void 0 : L.root) != null ? a : b.root,
      ft = (l = L == null ? void 0 : L.backdrop) != null ? l : b.backdrop,
      It = Ha({
        elementType: Ae,
        externalSlotProps: _e,
        externalForwardedProps: N,
        getSlotProps: j,
        additionalProps: { ref: r, as: v },
        ownerState: ve,
        className: ue(
          d,
          _e == null ? void 0 : _e.className,
          ye == null ? void 0 : ye.root,
          !ve.open && ve.exited && (ye == null ? void 0 : ye.hidden)
        )
      }),
      je = Ha({
        elementType: Re,
        externalSlotProps: ft,
        additionalProps: f,
        getSlotProps: (Qe) =>
          F(
            M({}, Qe, {
              onClick: (pt) => {
                A && A(pt), Qe != null && Qe.onClick && Qe.onClick(pt);
              }
            })
          ),
        className: ue(
          ft == null ? void 0 : ft.className,
          f == null ? void 0 : f.className,
          ye == null ? void 0 : ye.backdrop
        ),
        ownerState: ve
      });
    return !k && !I && (!ae || J)
      ? null
      : P.jsx(cb, {
          ref: q,
          container: h,
          disablePortal: S,
          children: P.jsxs(
            Ae,
            M({}, It, {
              children: [
                !R && u ? P.jsx(Re, M({}, je)) : null,
                P.jsx(vO, {
                  disableEnforceFocus: y,
                  disableAutoFocus: g,
                  disableRestoreFocus: C,
                  isEnabled: fe,
                  open: I,
                  children: w.cloneElement(p, G)
                })
              ]
            })
          )
        });
  });
function o_(e) {
  return Ve('MuiDivider', e);
}
const QV = We('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical'
  ]),
  i_ = [
    'absolute',
    'children',
    'className',
    'component',
    'flexItem',
    'light',
    'orientation',
    'role',
    'textAlign',
    'variant'
  ],
  s_ = (e) => {
    const {
      absolute: t,
      children: r,
      classes: n,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l
    } = e;
    return ze(
      {
        root: [
          'root',
          t && 'absolute',
          l,
          i && 'light',
          s === 'vertical' && 'vertical',
          o && 'flexItem',
          r && 'withChildren',
          r && s === 'vertical' && 'withChildrenVertical',
          a === 'right' && s !== 'vertical' && 'textAlignRight',
          a === 'left' && s !== 'vertical' && 'textAlignLeft'
        ],
        wrapper: ['wrapper', s === 'vertical' && 'wrapperVertical']
      },
      o_,
      n
    );
  },
  a_ = le('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.absolute && t.absolute,
        t[r.variant],
        r.light && t.light,
        r.orientation === 'vertical' && t.vertical,
        r.flexItem && t.flexItem,
        r.children && t.withChildren,
        r.children && r.orientation === 'vertical' && t.withChildrenVertical,
        r.textAlign === 'right' &&
          r.orientation !== 'vertical' &&
          t.textAlignRight,
        r.textAlign === 'left' &&
          r.orientation !== 'vertical' &&
          t.textAlignLeft
      ];
    }
  })(
    ({ theme: e, ownerState: t }) =>
      M(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: 'thin'
        },
        t.absolute && {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%'
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : vt(e.palette.divider, 0.08)
        },
        t.variant === 'inset' && { marginLeft: 72 },
        t.variant === 'middle' &&
          t.orientation === 'horizontal' && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2)
          },
        t.variant === 'middle' &&
          t.orientation === 'vertical' && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1)
          },
        t.orientation === 'vertical' && {
          height: '100%',
          borderBottomWidth: 0,
          borderRightWidth: 'thin'
        },
        t.flexItem && { alignSelf: 'stretch', height: 'auto' }
      ),
    ({ ownerState: e }) =>
      M(
        {},
        e.children && {
          display: 'flex',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          border: 0,
          '&::before, &::after': { content: '""', alignSelf: 'center' }
        }
      ),
    ({ theme: e, ownerState: t }) =>
      M(
        {},
        t.children &&
          t.orientation !== 'vertical' && {
            '&::before, &::after': {
              width: '100%',
              borderTop: `thin solid ${(e.vars || e).palette.divider}`
            }
          }
      ),
    ({ theme: e, ownerState: t }) =>
      M(
        {},
        t.children &&
          t.orientation === 'vertical' && {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`
            }
          }
      ),
    ({ ownerState: e }) =>
      M(
        {},
        e.textAlign === 'right' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '90%' },
            '&::after': { width: '10%' }
          },
        e.textAlign === 'left' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '10%' },
            '&::after': { width: '90%' }
          }
      )
  ),
  l_ = le('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.wrapper, r.orientation === 'vertical' && t.wrapperVertical];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        display: 'inline-block',
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`
      },
      t.orientation === 'vertical' && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`
      }
    )
  ),
  Bo = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiDivider' }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? 'div' : 'hr',
        flexItem: l = !1,
        light: c = !1,
        orientation: u = 'horizontal',
        role: f = a !== 'hr' ? 'separator' : void 0,
        textAlign: d = 'center',
        variant: m = 'fullWidth'
      } = n,
      p = Z(n, i_),
      h = M({}, n, {
        absolute: o,
        component: a,
        flexItem: l,
        light: c,
        orientation: u,
        role: f,
        textAlign: d,
        variant: m
      }),
      v = s_(h);
    return P.jsx(
      a_,
      M(
        { as: a, className: ue(v.root, s), role: f, ref: r, ownerState: h },
        p,
        {
          children: i
            ? P.jsx(l_, { className: v.wrapper, ownerState: h, children: i })
            : null
        }
      )
    );
  });
Bo.muiSkipListHighlight = !0;
const c_ = [
  'addEndListener',
  'appear',
  'children',
  'container',
  'direction',
  'easing',
  'in',
  'onEnter',
  'onEntered',
  'onEntering',
  'onExit',
  'onExited',
  'onExiting',
  'style',
  'timeout',
  'TransitionComponent'
];
function u_(e, t, r) {
  const n = t.getBoundingClientRect(),
    o = r && r.getBoundingClientRect(),
    i = Go(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const c = i.getComputedStyle(t);
    s =
      c.getPropertyValue('-webkit-transform') ||
      c.getPropertyValue('transform');
  }
  let a = 0,
    l = 0;
  if (s && s !== 'none' && typeof s == 'string') {
    const c = s.split('(')[1].split(')')[0].split(',');
    (a = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === 'left'
    ? o
      ? `translateX(${o.right + a - n.left}px)`
      : `translateX(${i.innerWidth + a - n.left}px)`
    : e === 'right'
      ? o
        ? `translateX(-${n.right - o.left - a}px)`
        : `translateX(-${n.left + n.width - a}px)`
      : e === 'up'
        ? o
          ? `translateY(${o.bottom + l - n.top}px)`
          : `translateY(${i.innerHeight + l - n.top}px)`
        : o
          ? `translateY(-${n.top - o.top + n.height - l}px)`
          : `translateY(-${n.top + n.height - l}px)`;
}
function d_(e) {
  return typeof e == 'function' ? e() : e;
}
function Js(e, t, r) {
  const n = d_(r),
    o = u_(e, t, n);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const Tb = w.forwardRef(function (t, r) {
  const n = dt(),
    o = {
      enter: n.transitions.easing.easeOut,
      exit: n.transitions.easing.sharp
    },
    i = {
      enter: n.transitions.duration.enteringScreen,
      exit: n.transitions.duration.leavingScreen
    },
    {
      addEndListener: s,
      appear: a = !0,
      children: l,
      container: c,
      direction: u = 'down',
      easing: f = o,
      in: d,
      onEnter: m,
      onEntered: p,
      onEntering: h,
      onExit: v,
      onExited: x,
      onExiting: b,
      style: g,
      timeout: y = i,
      TransitionComponent: E = rr
    } = t,
    S = Z(t, c_),
    C = w.useRef(null),
    T = ct(l.ref, C, r),
    R = (F) => (z) => {
      F && (z === void 0 ? F(C.current) : F(C.current, z));
    },
    k = R((F, z) => {
      Js(u, F, c), Xl(F), m && m(F, z);
    }),
    A = R((F, z) => {
      const q = Ar({ timeout: y, style: g, easing: f }, { mode: 'enter' });
      (F.style.webkitTransition = n.transitions.create(
        '-webkit-transform',
        M({}, q)
      )),
        (F.style.transition = n.transitions.create('transform', M({}, q))),
        (F.style.webkitTransform = 'none'),
        (F.style.transform = 'none'),
        h && h(F, z);
    }),
    I = R(p),
    L = R(b),
    D = R((F) => {
      const z = Ar({ timeout: y, style: g, easing: f }, { mode: 'exit' });
      (F.style.webkitTransition = n.transitions.create('-webkit-transform', z)),
        (F.style.transition = n.transitions.create('transform', z)),
        Js(u, F, c),
        v && v(F);
    }),
    N = R((F) => {
      (F.style.webkitTransition = ''), (F.style.transition = ''), x && x(F);
    }),
    B = (F) => {
      s && s(C.current, F);
    },
    j = w.useCallback(() => {
      C.current && Js(u, C.current, c);
    }, [u, c]);
  return (
    w.useEffect(() => {
      if (d || u === 'down' || u === 'right') return;
      const F = jy(() => {
          C.current && Js(u, C.current, c);
        }),
        z = Go(C.current);
      return (
        z.addEventListener('resize', F),
        () => {
          F.clear(), z.removeEventListener('resize', F);
        }
      );
    }, [u, d, c]),
    w.useEffect(() => {
      d || j();
    }, [d, j]),
    P.jsx(
      E,
      M(
        {
          nodeRef: C,
          onEnter: k,
          onEntered: I,
          onEntering: A,
          onExit: D,
          onExited: N,
          onExiting: L,
          addEndListener: B,
          appear: a,
          in: d,
          timeout: y
        },
        S,
        {
          children: (F, z) =>
            w.cloneElement(
              l,
              M(
                {
                  ref: T,
                  style: M(
                    { visibility: F === 'exited' && !d ? 'hidden' : void 0 },
                    g,
                    l.props.style
                  )
                },
                z
              )
            )
        }
      )
    )
  );
});
function f_(e) {
  return Ve('MuiDrawer', e);
}
We('MuiDrawer', [
  'root',
  'docked',
  'paper',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal'
]);
const p_ = ['BackdropProps'],
  h_ = [
    'anchor',
    'BackdropProps',
    'children',
    'className',
    'elevation',
    'hideBackdrop',
    'ModalProps',
    'onClose',
    'open',
    'PaperProps',
    'SlideProps',
    'TransitionComponent',
    'transitionDuration',
    'variant'
  ],
  Rb = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === 'permanent' || r.variant === 'persistent') && t.docked,
      t.modal
    ];
  },
  m_ = (e) => {
    const { classes: t, anchor: r, variant: n } = e,
      o = {
        root: ['root'],
        docked: [(n === 'permanent' || n === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: [
          'paper',
          `paperAnchor${Q(r)}`,
          n !== 'temporary' && `paperAnchorDocked${Q(r)}`
        ]
      };
    return ze(o, f_, t);
  },
  g_ = le(n_, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Rb })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Yh = le('div', {
    shouldForwardProp: zd,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Rb
  })({ flex: '0 0 auto' }),
  v_ = le(Zl, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`paperAnchor${Q(r.anchor)}`],
        r.variant !== 'temporary' && t[`paperAnchorDocked${Q(r.anchor)}`]
      ];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: '1 0 auto',
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: 'touch',
        position: 'fixed',
        top: 0,
        outline: 0
      },
      t.anchor === 'left' && { left: 0 },
      t.anchor === 'top' && {
        top: 0,
        left: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%'
      },
      t.anchor === 'right' && { right: 0 },
      t.anchor === 'bottom' && {
        top: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%'
      },
      t.anchor === 'left' &&
        t.variant !== 'temporary' && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`
        },
      t.anchor === 'top' &&
        t.variant !== 'temporary' && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`
        },
      t.anchor === 'right' &&
        t.variant !== 'temporary' && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`
        },
      t.anchor === 'bottom' &&
        t.variant !== 'temporary' && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`
        }
    )
  ),
  kb = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function y_(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function b_({ direction: e }, t) {
  return e === 'rtl' && y_(t) ? kb[t] : t;
}
const x_ = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiDrawer' }),
      o = dt(),
      i = Wy(),
      s = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen
      },
      {
        anchor: a = 'left',
        BackdropProps: l,
        children: c,
        className: u,
        elevation: f = 16,
        hideBackdrop: d = !1,
        ModalProps: { BackdropProps: m } = {},
        onClose: p,
        open: h = !1,
        PaperProps: v = {},
        SlideProps: x,
        TransitionComponent: b = Tb,
        transitionDuration: g = s,
        variant: y = 'temporary'
      } = n,
      E = Z(n.ModalProps, p_),
      S = Z(n, h_),
      C = w.useRef(!1);
    w.useEffect(() => {
      C.current = !0;
    }, []);
    const T = b_({ direction: i ? 'rtl' : 'ltr' }, a),
      k = M({}, n, { anchor: a, elevation: f, open: h, variant: y }, S),
      A = m_(k),
      I = P.jsx(
        v_,
        M({ elevation: y === 'temporary' ? f : 0, square: !0 }, v, {
          className: ue(A.paper, v.className),
          ownerState: k,
          children: c
        })
      );
    if (y === 'permanent')
      return P.jsx(
        Yh,
        M({ className: ue(A.root, A.docked, u), ownerState: k, ref: r }, S, {
          children: I
        })
      );
    const L = P.jsx(
      b,
      M({ in: h, direction: kb[T], timeout: g, appear: C.current }, x, {
        children: I
      })
    );
    return y === 'persistent'
      ? P.jsx(
          Yh,
          M({ className: ue(A.root, A.docked, u), ownerState: k, ref: r }, S, {
            children: L
          })
        )
      : P.jsx(
          g_,
          M(
            {
              BackdropProps: M({}, l, m, { transitionDuration: g }),
              className: ue(A.root, A.modal, u),
              open: h,
              ownerState: k,
              onClose: p,
              hideBackdrop: d,
              ref: r
            },
            S,
            E,
            { children: L }
          )
        );
  }),
  Gh = QR({
    createStyledComponent: le('div', {
      name: 'MuiStack',
      slot: 'Root',
      overridesResolver: (e, t) => t.root
    }),
    useThemeProps: (e) => $e({ props: e, name: 'MuiStack' })
  }),
  Xh = w.createContext();
function w_(e) {
  return Ve('MuiGrid', e);
}
const S_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  E_ = ['column-reverse', 'column', 'row-reverse', 'row'],
  C_ = ['nowrap', 'wrap-reverse', 'wrap'],
  fi = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  os = We('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...S_.map((e) => `spacing-xs-${e}`),
    ...E_.map((e) => `direction-xs-${e}`),
    ...C_.map((e) => `wrap-xs-${e}`),
    ...fi.map((e) => `grid-xs-${e}`),
    ...fi.map((e) => `grid-sm-${e}`),
    ...fi.map((e) => `grid-md-${e}`),
    ...fi.map((e) => `grid-lg-${e}`),
    ...fi.map((e) => `grid-xl-${e}`)
  ]),
  P_ = [
    'className',
    'columns',
    'columnSpacing',
    'component',
    'container',
    'direction',
    'item',
    'rowSpacing',
    'spacing',
    'wrap',
    'zeroMinWidth'
  ];
function To(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), '') || 'px'}`;
}
function T_({ theme: e, ownerState: t }) {
  let r;
  return e.breakpoints.keys.reduce((n, o) => {
    let i = {};
    if ((t[o] && (r = t[o]), !r)) return n;
    if (r === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' };
    else if (r === 'auto')
      i = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    else {
      const s = Ln({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == 'object' ? s[o] : s;
      if (a == null) return n;
      const l = `${Math.round((r / a) * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== '0px') {
          const f = `calc(${l} + ${To(u)})`;
          c = { flexBasis: f, maxWidth: f };
        }
      }
      i = M({ flexBasis: l, flexGrow: 0, maxWidth: l }, c);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(n, i)
        : (n[e.breakpoints.up(o)] = i),
      n
    );
  }, {});
}
function R_({ theme: e, ownerState: t }) {
  const r = Ln({ values: t.direction, breakpoints: e.breakpoints.values });
  return Vt({ theme: e }, r, (n) => {
    const o = { flexDirection: n };
    return (
      n.indexOf('column') === 0 &&
        (o[`& > .${os.item}`] = { maxWidth: 'none' }),
      o
    );
  });
}
function Mb({ breakpoints: e, values: t }) {
  let r = '';
  Object.keys(t).forEach((o) => {
    r === '' && t[o] !== 0 && (r = o);
  });
  const n = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return n.slice(0, n.indexOf(r));
}
function k_({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = Ln({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Mb({ breakpoints: e.breakpoints.values, values: i })),
      (o = Vt({ theme: e }, i, (a, l) => {
        var c;
        const u = e.spacing(a);
        return u !== '0px'
          ? {
              marginTop: `-${To(u)}`,
              [`& > .${os.item}`]: { paddingTop: To(u) }
            }
          : (c = s) != null && c.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${os.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function M_({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = Ln({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Mb({ breakpoints: e.breakpoints.values, values: i })),
      (o = Vt({ theme: e }, i, (a, l) => {
        var c;
        const u = e.spacing(a);
        return u !== '0px'
          ? {
              width: `calc(100% + ${To(u)})`,
              marginLeft: `-${To(u)}`,
              [`& > .${os.item}`]: { paddingLeft: To(u) }
            }
          : (c = s) != null && c.includes(l)
            ? {}
            : {
                width: '100%',
                marginLeft: 0,
                [`& > .${os.item}`]: { paddingLeft: 0 }
              };
      }));
  }
  return o;
}
function O_(e, t, r = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [r[`spacing-xs-${String(e)}`]];
  const n = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && n.push(r[`spacing-${o}-${String(i)}`]);
    }),
    n
  );
}
const A_ = le('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (e, t) => {
    const { ownerState: r } = e,
      {
        container: n,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: c
      } = r;
    let u = [];
    n && (u = O_(s, c, t));
    const f = [];
    return (
      c.forEach((d) => {
        const m = r[d];
        m && f.push(t[`grid-${d}-${String(m)}`]);
      }),
      [
        t.root,
        n && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...u,
        o !== 'row' && t[`direction-xs-${String(o)}`],
        a !== 'wrap' && t[`wrap-xs-${String(a)}`],
        ...f
      ]
    );
  }
})(
  ({ ownerState: e }) =>
    M(
      { boxSizing: 'border-box' },
      e.container && { display: 'flex', flexWrap: 'wrap', width: '100%' },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== 'wrap' && { flexWrap: e.wrap }
    ),
  R_,
  k_,
  M_,
  T_
);
function __(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [`spacing-xs-${String(e)}`];
  const r = [];
  return (
    t.forEach((n) => {
      const o = e[n];
      if (Number(o) > 0) {
        const i = `spacing-${n}-${String(o)}`;
        r.push(i);
      }
    }),
    r
  );
}
const D_ = (e) => {
    const {
      classes: t,
      container: r,
      direction: n,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l
    } = e;
    let c = [];
    r && (c = __(i, l));
    const u = [];
    l.forEach((d) => {
      const m = e[d];
      m && u.push(`grid-${d}-${String(m)}`);
    });
    const f = {
      root: [
        'root',
        r && 'container',
        o && 'item',
        a && 'zeroMinWidth',
        ...c,
        n !== 'row' && `direction-xs-${String(n)}`,
        s !== 'wrap' && `wrap-xs-${String(s)}`,
        ...u
      ]
    };
    return ze(f, w_, t);
  },
  Ei = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiGrid' }),
      { breakpoints: o } = dt(),
      i = Es(n),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: c = 'div',
        container: u = !1,
        direction: f = 'row',
        item: d = !1,
        rowSpacing: m,
        spacing: p = 0,
        wrap: h = 'wrap',
        zeroMinWidth: v = !1
      } = i,
      x = Z(i, P_),
      b = m || p,
      g = l || p,
      y = w.useContext(Xh),
      E = u ? a || 12 : y,
      S = {},
      C = M({}, x);
    o.keys.forEach((k) => {
      x[k] != null && ((S[k] = x[k]), delete C[k]);
    });
    const T = M(
        {},
        i,
        {
          columns: E,
          container: u,
          direction: f,
          item: d,
          rowSpacing: b,
          columnSpacing: g,
          wrap: h,
          zeroMinWidth: v,
          spacing: p
        },
        S,
        { breakpoints: o.keys }
      ),
      R = D_(T);
    return P.jsx(Xh.Provider, {
      value: E,
      children: P.jsx(
        A_,
        M({ ownerState: T, className: ue(R.root, s), as: c, ref: r }, C)
      )
    });
  }),
  I_ = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent'
  ];
function Ru(e) {
  return `scale(${e}, ${e ** 2})`;
}
const L_ = {
    entering: { opacity: 1, transform: Ru(1) },
    entered: { opacity: 1, transform: 'none' }
  },
  Dc =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Ob = w.forwardRef(function (t, r) {
    const {
        addEndListener: n,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: c,
        onEntering: u,
        onExit: f,
        onExited: d,
        onExiting: m,
        style: p,
        timeout: h = 'auto',
        TransitionComponent: v = rr
      } = t,
      x = Z(t, I_),
      b = jd(),
      g = w.useRef(),
      y = dt(),
      E = w.useRef(null),
      S = ct(E, i.ref, r),
      C = (N) => (B) => {
        if (N) {
          const j = E.current;
          B === void 0 ? N(j) : N(j, B);
        }
      },
      T = C(u),
      R = C((N, B) => {
        Xl(N);
        const {
          duration: j,
          delay: F,
          easing: z
        } = Ar({ style: p, timeout: h, easing: s }, { mode: 'enter' });
        let q;
        h === 'auto'
          ? ((q = y.transitions.getAutoHeightDuration(N.clientHeight)),
            (g.current = q))
          : (q = j),
          (N.style.transition = [
            y.transitions.create('opacity', { duration: q, delay: F }),
            y.transitions.create('transform', {
              duration: Dc ? q : q * 0.666,
              delay: F,
              easing: z
            })
          ].join(',')),
          l && l(N, B);
      }),
      k = C(c),
      A = C(m),
      I = C((N) => {
        const {
          duration: B,
          delay: j,
          easing: F
        } = Ar({ style: p, timeout: h, easing: s }, { mode: 'exit' });
        let z;
        h === 'auto'
          ? ((z = y.transitions.getAutoHeightDuration(N.clientHeight)),
            (g.current = z))
          : (z = B),
          (N.style.transition = [
            y.transitions.create('opacity', { duration: z, delay: j }),
            y.transitions.create('transform', {
              duration: Dc ? z : z * 0.666,
              delay: Dc ? j : j || z * 0.333,
              easing: F
            })
          ].join(',')),
          (N.style.opacity = 0),
          (N.style.transform = Ru(0.75)),
          f && f(N);
      }),
      L = C(d),
      D = (N) => {
        h === 'auto' && b.start(g.current || 0, N), n && n(E.current, N);
      };
    return P.jsx(
      v,
      M(
        {
          appear: o,
          in: a,
          nodeRef: E,
          onEnter: R,
          onEntered: k,
          onEntering: T,
          onExit: I,
          onExited: L,
          onExiting: A,
          addEndListener: D,
          timeout: h === 'auto' ? null : h
        },
        x,
        {
          children: (N, B) =>
            w.cloneElement(
              i,
              M(
                {
                  style: M(
                    {
                      opacity: 0,
                      transform: Ru(0.75),
                      visibility: N === 'exited' && !a ? 'hidden' : void 0
                    },
                    L_[N],
                    p,
                    i.props.style
                  ),
                  ref: S
                },
                B
              )
            )
        }
      )
    );
  });
Ob.muiSupportAuto = !0;
function $_(e) {
  return Ve('MuiLinearProgress', e);
}
We('MuiLinearProgress', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'determinate',
  'indeterminate',
  'buffer',
  'query',
  'dashed',
  'dashedColorPrimary',
  'dashedColorSecondary',
  'bar',
  'barColorPrimary',
  'barColorSecondary',
  'bar1Indeterminate',
  'bar1Determinate',
  'bar1Buffer',
  'bar2Indeterminate',
  'bar2Buffer'
]);
const j_ = ['className', 'color', 'value', 'valueBuffer', 'variant'];
let Zo = (e) => e,
  Qh,
  Zh,
  Jh,
  em,
  tm,
  rm;
const ku = 4,
  B_ = Hn(
    Qh ||
      (Qh = Zo`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)
  ),
  N_ = Hn(
    Zh ||
      (Zh = Zo`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)
  ),
  F_ = Hn(
    Jh ||
      (Jh = Zo`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)
  ),
  V_ = (e) => {
    const { classes: t, variant: r, color: n } = e,
      o = {
        root: ['root', `color${Q(n)}`, r],
        dashed: ['dashed', `dashedColor${Q(n)}`],
        bar1: [
          'bar',
          `barColor${Q(n)}`,
          (r === 'indeterminate' || r === 'query') && 'bar1Indeterminate',
          r === 'determinate' && 'bar1Determinate',
          r === 'buffer' && 'bar1Buffer'
        ],
        bar2: [
          'bar',
          r !== 'buffer' && `barColor${Q(n)}`,
          r === 'buffer' && `color${Q(n)}`,
          (r === 'indeterminate' || r === 'query') && 'bar2Indeterminate',
          r === 'buffer' && 'bar2Buffer'
        ]
      };
    return ze(o, $_, t);
  },
  ef = (e, t) =>
    t === 'inherit'
      ? 'currentColor'
      : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === 'light'
          ? Ky(e.palette[t].main, 0.62)
          : qy(e.palette[t].main, 0.5),
  W_ = le('span', {
    name: 'MuiLinearProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`color${Q(r.color)}`], t[r.variant]];
    }
  })(({ ownerState: e, theme: t }) =>
    M(
      {
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        height: 4,
        zIndex: 0,
        '@media print': { colorAdjust: 'exact' },
        backgroundColor: ef(t, e.color)
      },
      e.color === 'inherit' &&
        e.variant !== 'buffer' && {
          backgroundColor: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'currentColor',
            opacity: 0.3
          }
        },
      e.variant === 'buffer' && { backgroundColor: 'transparent' },
      e.variant === 'query' && { transform: 'rotate(180deg)' }
    )
  ),
  z_ = le('span', {
    name: 'MuiLinearProgress',
    slot: 'Dashed',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.dashed, t[`dashedColor${Q(r.color)}`]];
    }
  })(
    ({ ownerState: e, theme: t }) => {
      const r = ef(t, e.color);
      return M(
        { position: 'absolute', marginTop: 0, height: '100%', width: '100%' },
        e.color === 'inherit' && { opacity: 0.3 },
        {
          backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,
          backgroundSize: '10px 10px',
          backgroundPosition: '0 -23px'
        }
      );
    },
    bs(
      em ||
        (em = Zo`
    animation: ${0} 3s infinite linear;
  `),
      F_
    )
  ),
  U_ = le('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar1',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t[`barColor${Q(r.color)}`],
        (r.variant === 'indeterminate' || r.variant === 'query') &&
          t.bar1Indeterminate,
        r.variant === 'determinate' && t.bar1Determinate,
        r.variant === 'buffer' && t.bar1Buffer
      ];
    }
  })(
    ({ ownerState: e, theme: t }) =>
      M(
        {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          transition: 'transform 0.2s linear',
          transformOrigin: 'left',
          backgroundColor:
            e.color === 'inherit'
              ? 'currentColor'
              : (t.vars || t).palette[e.color].main
        },
        e.variant === 'determinate' && {
          transition: `transform .${ku}s linear`
        },
        e.variant === 'buffer' && {
          zIndex: 1,
          transition: `transform .${ku}s linear`
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      bs(
        tm ||
          (tm = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
        B_
      )
  ),
  H_ = le('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar2',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t[`barColor${Q(r.color)}`],
        (r.variant === 'indeterminate' || r.variant === 'query') &&
          t.bar2Indeterminate,
        r.variant === 'buffer' && t.bar2Buffer
      ];
    }
  })(
    ({ ownerState: e, theme: t }) =>
      M(
        {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          transition: 'transform 0.2s linear',
          transformOrigin: 'left'
        },
        e.variant !== 'buffer' && {
          backgroundColor:
            e.color === 'inherit'
              ? 'currentColor'
              : (t.vars || t).palette[e.color].main
        },
        e.color === 'inherit' && { opacity: 0.3 },
        e.variant === 'buffer' && {
          backgroundColor: ef(t, e.color),
          transition: `transform .${ku}s linear`
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      bs(
        rm ||
          (rm = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
        N_
      )
  ),
  q_ = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiLinearProgress' }),
      {
        className: o,
        color: i = 'primary',
        value: s,
        valueBuffer: a,
        variant: l = 'indeterminate'
      } = n,
      c = Z(n, j_),
      u = M({}, n, { color: i, variant: l }),
      f = V_(u),
      d = Wy(),
      m = {},
      p = { bar1: {}, bar2: {} };
    if ((l === 'determinate' || l === 'buffer') && s !== void 0) {
      (m['aria-valuenow'] = Math.round(s)),
        (m['aria-valuemin'] = 0),
        (m['aria-valuemax'] = 100);
      let h = s - 100;
      d && (h = -h), (p.bar1.transform = `translateX(${h}%)`);
    }
    if (l === 'buffer' && a !== void 0) {
      let h = (a || 0) - 100;
      d && (h = -h), (p.bar2.transform = `translateX(${h}%)`);
    }
    return P.jsxs(
      W_,
      M(
        { className: ue(f.root, o), ownerState: u, role: 'progressbar' },
        m,
        { ref: r },
        c,
        {
          children: [
            l === 'buffer'
              ? P.jsx(z_, { className: f.dashed, ownerState: u })
              : null,
            P.jsx(U_, { className: f.bar1, ownerState: u, style: p.bar1 }),
            l === 'determinate'
              ? null
              : P.jsx(H_, { className: f.bar2, ownerState: u, style: p.bar2 })
          ]
        }
      )
    );
  }),
  is = w.createContext({});
function K_(e) {
  return Ve('MuiList', e);
}
We('MuiList', ['root', 'padding', 'dense', 'subheader']);
const Y_ = [
    'children',
    'className',
    'component',
    'dense',
    'disablePadding',
    'subheader'
  ],
  G_ = (e) => {
    const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
    return ze(
      { root: ['root', !r && 'padding', n && 'dense', o && 'subheader'] },
      K_,
      t
    );
  },
  X_ = le('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disablePadding && t.padding,
        r.dense && t.dense,
        r.subheader && t.subheader
      ];
    }
  })(({ ownerState: e }) =>
    M(
      { listStyle: 'none', margin: 0, padding: 0, position: 'relative' },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  tf = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: a = !1,
        disablePadding: l = !1,
        subheader: c
      } = n,
      u = Z(n, Y_),
      f = w.useMemo(() => ({ dense: a }), [a]),
      d = M({}, n, { component: s, dense: a, disablePadding: l }),
      m = G_(d);
    return P.jsx(is.Provider, {
      value: f,
      children: P.jsxs(
        X_,
        M({ as: s, className: ue(m.root, i), ref: r, ownerState: d }, u, {
          children: [c, o]
        })
      )
    });
  });
function Q_(e) {
  return Ve('MuiListItemButton', e);
}
const pi = We('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected'
  ]),
  Z_ = [
    'alignItems',
    'autoFocus',
    'component',
    'children',
    'dense',
    'disableGutters',
    'divider',
    'focusVisibleClassName',
    'selected',
    'className'
  ],
  J_ = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters
    ];
  },
  eD = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: n,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a
      } = e,
      c = ze(
        {
          root: [
            'root',
            n && 'dense',
            !i && 'gutters',
            s && 'divider',
            o && 'disabled',
            t === 'flex-start' && 'alignItemsFlexStart',
            a && 'selected'
          ]
        },
        Q_,
        r
      );
    return M({}, r, c);
  },
  tD = le(Do, {
    shouldForwardProp: (e) => zd(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: J_
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minWidth: 0,
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shortest
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' }
        },
        [`&.${pi.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : vt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${pi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : vt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                )
          }
        },
        [`&.${pi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : vt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : vt(e.palette.primary.main, e.palette.action.selectedOpacity)
          }
        },
        [`&.${pi.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`&.${pi.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity
        }
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box'
      },
      t.alignItems === 'flex-start' && { alignItems: 'flex-start' },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  ss = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiListItemButton' }),
      {
        alignItems: o = 'center',
        autoFocus: i = !1,
        component: s = 'div',
        children: a,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: f,
        selected: d = !1,
        className: m
      } = n,
      p = Z(n, Z_),
      h = w.useContext(is),
      v = w.useMemo(
        () => ({ dense: l || h.dense || !1, alignItems: o, disableGutters: c }),
        [o, h.dense, l, c]
      ),
      x = w.useRef(null);
    ln(() => {
      i && x.current && x.current.focus();
    }, [i]);
    const b = M({}, n, {
        alignItems: o,
        dense: v.dense,
        disableGutters: c,
        divider: u,
        selected: d
      }),
      g = eD(b),
      y = ct(x, r);
    return P.jsx(is.Provider, {
      value: v,
      children: P.jsx(
        tD,
        M(
          {
            ref: y,
            href: p.href || p.to,
            component: (p.href || p.to) && s === 'div' ? 'button' : s,
            focusVisibleClassName: ue(g.focusVisible, f),
            ownerState: b,
            className: ue(g.root, m)
          },
          p,
          { classes: g, children: a }
        )
      )
    });
  });
function rD(e) {
  return Ve('MuiListItemIcon', e);
}
const ZV = We('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  nD = ['className'],
  oD = (e) => {
    const { alignItems: t, classes: r } = e;
    return ze(
      { root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] },
      rD,
      r
    );
  },
  iD = le('div', {
    name: 'MuiListItemIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.alignItems === 'flex-start' && t.alignItemsFlexStart];
    }
  })(({ theme: e, ownerState: t }) =>
    M(
      {
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: 'inline-flex'
      },
      t.alignItems === 'flex-start' && { marginTop: 8 }
    )
  ),
  Ga = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiListItemIcon' }),
      { className: o } = n,
      i = Z(n, nD),
      s = w.useContext(is),
      a = M({}, n, { alignItems: s.alignItems }),
      l = oD(a);
    return P.jsx(iD, M({ className: ue(l.root, o), ownerState: a, ref: r }, i));
  });
function sD(e) {
  return Ve('MuiListItemText', e);
}
const nm = We('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
  ]),
  aD = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps'
  ],
  lD = (e) => {
    const { classes: t, inset: r, primary: n, secondary: o, dense: i } = e;
    return ze(
      {
        root: ['root', r && 'inset', i && 'dense', n && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary']
      },
      sD,
      t
    );
  },
  cD = le('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${nm.primary}`]: t.primary },
        { [`& .${nm.secondary}`]: t.secondary },
        t.root,
        r.inset && t.inset,
        r.primary && r.secondary && t.multiline,
        r.dense && t.dense
      ];
    }
  })(({ ownerState: e }) =>
    M(
      { flex: '1 1 auto', minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  Xa = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiListItemText' }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: f
      } = n,
      d = Z(n, aD),
      { dense: m } = w.useContext(is);
    let p = l ?? o,
      h = u;
    const v = M({}, n, {
        disableTypography: s,
        inset: a,
        primary: !!p,
        secondary: !!h,
        dense: m
      }),
      x = lD(v);
    return (
      p != null &&
        p.type !== Se &&
        !s &&
        (p = P.jsx(
          Se,
          M(
            {
              variant: m ? 'body2' : 'body1',
              className: x.primary,
              component: c != null && c.variant ? void 0 : 'span',
              display: 'block'
            },
            c,
            { children: p }
          )
        )),
      h != null &&
        h.type !== Se &&
        !s &&
        (h = P.jsx(
          Se,
          M(
            {
              variant: 'body2',
              className: x.secondary,
              color: 'text.secondary',
              display: 'block'
            },
            f,
            { children: h }
          )
        )),
      P.jsxs(
        cD,
        M({ className: ue(x.root, i), ownerState: v, ref: r }, d, {
          children: [p, h]
        })
      )
    );
  }),
  uD = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent'
  ],
  dD = { entering: { transform: 'none' }, entered: { transform: 'none' } },
  fD = w.forwardRef(function (t, r) {
    const n = dt(),
      o = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: f,
        onEntering: d,
        onExit: m,
        onExited: p,
        onExiting: h,
        style: v,
        timeout: x = o,
        TransitionComponent: b = rr
      } = t,
      g = Z(t, uD),
      y = w.useRef(null),
      E = ct(y, a.ref, r),
      S = (D) => (N) => {
        if (D) {
          const B = y.current;
          N === void 0 ? D(B) : D(B, N);
        }
      },
      C = S(d),
      T = S((D, N) => {
        Xl(D);
        const B = Ar({ style: v, timeout: x, easing: l }, { mode: 'enter' });
        (D.style.webkitTransition = n.transitions.create('transform', B)),
          (D.style.transition = n.transitions.create('transform', B)),
          u && u(D, N);
      }),
      R = S(f),
      k = S(h),
      A = S((D) => {
        const N = Ar({ style: v, timeout: x, easing: l }, { mode: 'exit' });
        (D.style.webkitTransition = n.transitions.create('transform', N)),
          (D.style.transition = n.transitions.create('transform', N)),
          m && m(D);
      }),
      I = S(p),
      L = (D) => {
        i && i(y.current, D);
      };
    return P.jsx(
      b,
      M(
        {
          appear: s,
          in: c,
          nodeRef: y,
          onEnter: T,
          onEntered: R,
          onEntering: C,
          onExit: A,
          onExited: I,
          onExiting: k,
          addEndListener: L,
          timeout: x
        },
        g,
        {
          children: (D, N) =>
            w.cloneElement(
              a,
              M(
                {
                  style: M(
                    {
                      transform: 'scale(0)',
                      visibility: D === 'exited' && !c ? 'hidden' : void 0
                    },
                    dD[D],
                    v,
                    a.props.style
                  ),
                  ref: E
                },
                N
              )
            )
        }
      )
    );
  });
function pD(e) {
  return Ve('MuiToolbar', e);
}
We('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const hD = ['className', 'component', 'disableGutters', 'variant'],
  mD = (e) => {
    const { classes: t, disableGutters: r, variant: n } = e;
    return ze({ root: ['root', !r && 'gutters', n] }, pD, t);
  },
  gD = le('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
    }
  })(
    ({ theme: e, ownerState: t }) =>
      M(
        { position: 'relative', display: 'flex', alignItems: 'center' },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up('sm')]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3)
          }
        },
        t.variant === 'dense' && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === 'regular' && e.mixins.toolbar
  ),
  vD = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiToolbar' }),
      {
        className: o,
        component: i = 'div',
        disableGutters: s = !1,
        variant: a = 'regular'
      } = n,
      l = Z(n, hD),
      c = M({}, n, { component: i, disableGutters: s, variant: a }),
      u = mD(c);
    return P.jsx(
      gD,
      M({ as: i, className: ue(u.root, o), ref: r, ownerState: c }, l)
    );
  }),
  yD = 'modulepreload',
  bD = function (e) {
    return '/' + e;
  },
  om = {},
  zt = function (t, r, n) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        s =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.all(
        r.map((a) => {
          if (((a = bD(a)), a in om)) return;
          om[a] = !0;
          const l = a.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = l ? 'stylesheet' : yD),
            l || ((u.as = 'script'), (u.crossOrigin = '')),
            (u.href = a),
            s && u.setAttribute('nonce', s),
            document.head.appendChild(u),
            l)
          )
            return new Promise((f, d) => {
              u.addEventListener('load', f),
                u.addEventListener('error', () =>
                  d(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event('vite:preloadError', { cancelable: !0 });
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i;
      });
  },
  xD = '/assets/elogocropped-ArxxZuCO.png',
  wD = () => (dt(), P.jsx('img', { src: xD, alt: 'Berry', width: '100' })),
  Ab = () => {
    const e = dn((r) => r.customization.defaultId),
      t = Wo();
    return P.jsx(Do, {
      disableRipple: !0,
      onClick: () => t({ type: La, id: e }),
      component: _n,
      to: uu.defaultPath,
      children: P.jsx(wD, {})
    });
  };
function hi(e) {
  if (typeof window > 'u') return e;
  const t = w.useRef(null);
  return (
    w.useLayoutEffect(() => {
      t.current = e;
    }),
    w.useCallback((...r) => {
      var n;
      (n = t.current) === null || n === void 0 || n.call(t, ...r);
    }, [])
  );
}
const im = {};
function SD(e, t) {
  im[e] ||
    ((im[e] = !0), console.error('[material-ui-popup-state] WARNING', t));
}
const ED = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1
};
function CD({
  parentPopupState: e,
  popupId: t,
  variant: r,
  disableAutoFocus: n
}) {
  const o = w.useRef(!0);
  w.useEffect(
    () => (
      (o.current = !0),
      () => {
        o.current = !1;
      }
    ),
    []
  );
  const [i, s] = w.useState(ED),
    a = w.useCallback((b) => {
      o.current && s(b);
    }, []),
    l = w.useCallback(
      (b) => a((g) => ({ ...g, setAnchorElUsed: !0, anchorEl: b ?? void 0 })),
      []
    ),
    c = hi((b) => (i.isOpen ? d(b) : u(b), i)),
    u = hi((b) => {
      const g = b instanceof Element ? void 0 : b,
        y =
          b instanceof Element
            ? b
            : (b == null ? void 0 : b.currentTarget) instanceof Element
              ? b.currentTarget
              : void 0;
      if ((g == null ? void 0 : g.type) === 'touchstart') {
        a((R) => ({ ...R, _deferNextOpen: !0 }));
        return;
      }
      const E = g == null ? void 0 : g.clientX,
        S = g == null ? void 0 : g.clientY,
        C =
          typeof E == 'number' && typeof S == 'number'
            ? { left: E, top: S }
            : void 0,
        T = (R) => {
          if (
            (!b &&
              !R.setAnchorElUsed &&
              r !== 'dialog' &&
              SD(
                'missingEventOrAnchorEl',
                'eventOrAnchorEl should be defined if setAnchorEl is not used'
              ),
            e)
          ) {
            if (!e.isOpen) return R;
            setTimeout(() => e._setChildPopupState(x));
          }
          const k = {
            ...R,
            isOpen: !0,
            anchorPosition: C,
            hovered: (g == null ? void 0 : g.type) === 'mouseover' || R.hovered,
            focused: (g == null ? void 0 : g.type) === 'focus' || R.focused,
            _openEventType: g == null ? void 0 : g.type
          };
          return (
            R.setAnchorElUsed ||
              (g != null && g.currentTarget
                ? (k.anchorEl = g == null ? void 0 : g.currentTarget)
                : y && (k.anchorEl = y)),
            k
          );
        };
      a((R) =>
        R._deferNextOpen
          ? (setTimeout(() => a(T), 0), { ...R, _deferNextOpen: !1 })
          : T(R)
      );
    }),
    f = (b) => {
      const { _childPopupState: g } = b;
      return (
        setTimeout(() => {
          g == null || g.close(), e == null || e._setChildPopupState(null);
        }),
        { ...b, isOpen: !1, hovered: !1, focused: !1 }
      );
    },
    d = hi((b) => {
      const g = b instanceof Element ? void 0 : b;
      if ((g == null ? void 0 : g.type) === 'touchstart') {
        a((y) => ({ ...y, _deferNextClose: !0 }));
        return;
      }
      a((y) =>
        y._deferNextClose
          ? (setTimeout(() => a(f), 0), { ...y, _deferNextClose: !1 })
          : f(y)
      );
    }),
    m = w.useCallback((b, g) => {
      b ? u(g) : d(g);
    }, []),
    p = hi((b) => {
      const { relatedTarget: g } = b;
      a((y) =>
        y.hovered && !(g instanceof Element && Mu(g, x))
          ? y.focused
            ? { ...y, hovered: !1 }
            : f(y)
          : y
      );
    }),
    h = hi((b) => {
      if (!b) return;
      const { relatedTarget: g } = b;
      a((y) =>
        y.focused && !(g instanceof Element && Mu(g, x))
          ? y.hovered
            ? { ...y, focused: !1 }
            : f(y)
          : y
      );
    }),
    v = w.useCallback((b) => a((g) => ({ ...g, _childPopupState: b })), []),
    x = {
      ...i,
      setAnchorEl: l,
      popupId: t,
      variant: r,
      open: u,
      close: d,
      toggle: c,
      setOpen: m,
      onBlur: h,
      onMouseLeave: p,
      disableAutoFocus: n ?? !!(i.hovered || i.focused),
      _setChildPopupState: v
    };
  return x;
}
function PD(e, { popupId: t }) {
  if (!t) return null;
  const r = typeof e.getRootNode == 'function' ? e.getRootNode() : document;
  return typeof r.getElementById == 'function' ? r.getElementById(t) : null;
}
function Mu(e, t) {
  const { anchorEl: r, _childPopupState: n } = t;
  return sm(r, e) || sm(PD(e, t), e) || (n != null && Mu(e, n));
}
function sm(e, t) {
  if (!e) return !1;
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
function _b({
  children: e,
  popupId: t,
  variant: r,
  parentPopupState: n,
  disableAutoFocus: o
}) {
  const i = CD({
      popupId: t,
      variant: r,
      parentPopupState: n,
      disableAutoFocus: o
    }),
    s = e(i);
  return s ?? null;
}
_b.propTypes = {
  children: W.func.isRequired,
  popupId: W.string,
  variant: W.oneOf(['popover', 'popper']).isRequired,
  parentPopupState: W.object,
  disableAutoFocus: W.bool
};
const rf = de.forwardRef(
  ({ children: e, position: t, type: r, direction: n, ...o }, i) => {
    let s = { transformOrigin: '0 0 0' };
    switch (t) {
      case 'top-right':
        s = { transformOrigin: 'top right' };
        break;
      case 'top':
        s = { transformOrigin: 'top' };
        break;
      case 'bottom-left':
        s = { transformOrigin: 'bottom left' };
        break;
      case 'bottom-right':
        s = { transformOrigin: 'bottom right' };
        break;
      case 'bottom':
        s = { transformOrigin: 'bottom' };
        break;
      case 'top-left':
      default:
        s = { transformOrigin: '0 0 0' };
        break;
    }
    return P.jsxs(lt, {
      ref: i,
      children: [
        r === 'grow' &&
          P.jsx(Ob, { ...o, children: P.jsx(lt, { sx: s, children: e }) }),
        r === 'collapse' && P.jsx(Ql, { ...o, sx: s, children: e }),
        r === 'fade' &&
          P.jsx(Eb, {
            ...o,
            timeout: { appear: 500, enter: 600, exit: 400 },
            children: P.jsx(lt, { sx: s, children: e })
          }),
        r === 'slide' &&
          P.jsx(Tb, {
            ...o,
            timeout: { appear: 0, enter: 400, exit: 200 },
            direction: n,
            children: P.jsx(lt, { sx: s, children: e })
          }),
        r === 'zoom' &&
          P.jsx(fD, { ...o, children: P.jsx(lt, { sx: s, children: e }) })
      ]
    });
  }
);
rf.propTypes = {
  children: W.node,
  type: W.oneOf(['grow', 'fade', 'collapse', 'slide', 'zoom']),
  position: W.oneOf([
    'top-left',
    'top-right',
    'top',
    'bottom-left',
    'bottom-right',
    'bottom'
  ]),
  direction: W.oneOf(['up', 'down', 'left', 'right'])
};
rf.defaultProps = { type: 'grow', position: 'top-left', direction: 'up' };
var TD = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  },
  RD = Object.defineProperty,
  kD = Object.defineProperties,
  MD = Object.getOwnPropertyDescriptors,
  Qa = Object.getOwnPropertySymbols,
  Db = Object.prototype.hasOwnProperty,
  Ib = Object.prototype.propertyIsEnumerable,
  am = (e, t, r) =>
    t in e
      ? RD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lm = (e, t) => {
    for (var r in t || (t = {})) Db.call(t, r) && am(e, r, t[r]);
    if (Qa) for (var r of Qa(t)) Ib.call(t, r) && am(e, r, t[r]);
    return e;
  },
  OD = (e, t) => kD(e, MD(t)),
  AD = (e, t) => {
    var r = {};
    for (var n in e) Db.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Qa)
      for (var n of Qa(e)) t.indexOf(n) < 0 && Ib.call(e, n) && (r[n] = e[n]);
    return r;
  },
  Dt = (e, t, r) => {
    const n = w.forwardRef((o, i) => {
      var s = o,
        {
          color: a = 'currentColor',
          size: l = 24,
          stroke: c = 2,
          children: u
        } = s,
        f = AD(s, ['color', 'size', 'stroke', 'children']);
      return w.createElement(
        'svg',
        lm(
          OD(lm({ ref: i }, TD), {
            width: l,
            height: l,
            stroke: a,
            strokeWidth: c,
            className: `tabler-icon tabler-icon-${e}`
          }),
          f
        ),
        [...r.map(([d, m]) => w.createElement(d, m)), ...(u || [])]
      );
    });
    return (
      (n.propTypes = {
        color: W.string,
        size: W.oneOfType([W.string, W.number]),
        stroke: W.oneOfType([W.string, W.number])
      }),
      (n.displayName = `${t}`),
      n
    );
  },
  _D = Dt('brand-chrome', 'IconBrandChrome', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0', key: 'svg-1' }],
    ['path', { d: 'M12 9h8.4', key: 'svg-2' }],
    ['path', { d: 'M14.598 13.5l-4.2 7.275', key: 'svg-3' }],
    ['path', { d: 'M9.402 13.5l-4.2 -7.275', key: 'svg-4' }]
  ]),
  DD = Dt('chevron-down', 'IconChevronDown', [
    ['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]
  ]),
  Lb = Dt('chevron-right', 'IconChevronRight', [
    ['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]
  ]),
  ID = Dt('chevron-up', 'IconChevronUp', [
    ['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]
  ]),
  LD = Dt('dashboard', 'IconDashboard', [
    ['path', { d: 'M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-0' }],
    ['path', { d: 'M13.45 11.55l2.05 -2.05', key: 'svg-1' }],
    ['path', { d: 'M6.4 20a9 9 0 1 1 11.2 0z', key: 'svg-2' }]
  ]),
  $D = Dt('help', 'IconHelp', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 17l0 .01', key: 'svg-1' }],
    [
      'path',
      { d: 'M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4', key: 'svg-2' }
    ]
  ]),
  jD = Dt('key', 'IconKey', [
    [
      'path',
      {
        d: 'M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M15 9h.01', key: 'svg-1' }]
  ]),
  BD = Dt('logout', 'IconLogout', [
    [
      'path',
      {
        d: 'M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M9 12h12l-3 -3', key: 'svg-1' }],
    ['path', { d: 'M18 15l3 -3', key: 'svg-2' }]
  ]),
  ND = Dt('menu-2', 'IconMenu2', [
    ['path', { d: 'M4 6l16 0', key: 'svg-0' }],
    ['path', { d: 'M4 12l16 0', key: 'svg-1' }],
    ['path', { d: 'M4 18l16 0', key: 'svg-2' }]
  ]),
  FD = Dt('palette', 'IconPalette', [
    [
      'path',
      {
        d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25',
        key: 'svg-0'
      }
    ],
    [
      'path',
      { d: 'M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }
    ],
    [
      'path',
      { d: 'M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }
    ],
    [
      'path',
      { d: 'M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }
    ]
  ]),
  cm = Dt('settings', 'IconSettings', [
    [
      'path',
      {
        d: 'M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0', key: 'svg-1' }]
  ]),
  VD = Dt('shadow', 'IconShadow', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M13 12h5', key: 'svg-1' }],
    ['path', { d: 'M13 15h4', key: 'svg-2' }],
    ['path', { d: 'M13 18h1', key: 'svg-3' }],
    ['path', { d: 'M13 9h4', key: 'svg-4' }],
    ['path', { d: 'M13 6h1', key: 'svg-5' }]
  ]),
  WD = Dt('tallymark-1', 'IconTallymark1', [
    ['path', { d: 'M12 5l0 14', key: 'svg-0' }]
  ]),
  zD = Dt('typography', 'IconTypography', [
    ['path', { d: 'M4 20l3 0', key: 'svg-0' }],
    ['path', { d: 'M14 20l7 0', key: 'svg-1' }],
    ['path', { d: 'M6.9 15l6.9 0', key: 'svg-2' }],
    ['path', { d: 'M10.2 6.3l5.8 13.7', key: 'svg-3' }],
    ['path', { d: 'M5 20l6 -16l2 0l7 16', key: 'svg-4' }]
  ]),
  UD = Dt('windmill', 'IconWindmill', [
    [
      'path',
      { d: 'M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z', key: 'svg-0' }
    ],
    [
      'path',
      { d: 'M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z', key: 'svg-1' }
    ],
    [
      'path',
      { d: 'M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z', key: 'svg-2' }
    ],
    [
      'path',
      { d: 'M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z', key: 'svg-3' }
    ]
  ]);
const HD = w.forwardRef(({ children: e, ...t }, r) => {
  const n = dt();
  return P.jsx(tc, {
    ref: r,
    variant: 'rounded',
    sx: {
      ...n.typography.commonAvatar,
      ...n.typography.mediumAvatar,
      bgcolor: 'secondary.light',
      color: 'secondary.dark',
      '&:hover': { bgcolor: 'secondary.dark', color: 'secondary.light' }
    },
    ...t,
    children: e
  });
});
HD.propTypes = { children: W.node };
W.string, W.func;
var Ou = { exports: {} },
  Au = { exports: {} };
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ function Tr(e) {
  return getComputedStyle(e);
}
function Lt(e, t) {
  for (var r in t) {
    var n = t[r];
    typeof n == 'number' && (n = n + 'px'), (e.style[r] = n);
  }
  return e;
}
function ea(e) {
  var t = document.createElement('div');
  return (t.className = e), t;
}
var um =
  typeof Element < 'u' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);
function rn(e, t) {
  if (!um) throw new Error('No element matching method supported');
  return um.call(e, t);
}
function go(e) {
  e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
}
function dm(e, t) {
  return Array.prototype.filter.call(e.children, function (r) {
    return rn(r, t);
  });
}
var ot = {
    main: 'ps',
    rtl: 'ps__rtl',
    element: {
      thumb: function (e) {
        return 'ps__thumb-' + e;
      },
      rail: function (e) {
        return 'ps__rail-' + e;
      },
      consuming: 'ps__child--consume'
    },
    state: {
      focus: 'ps--focus',
      clicking: 'ps--clicking',
      active: function (e) {
        return 'ps--active-' + e;
      },
      scrolling: function (e) {
        return 'ps--scrolling-' + e;
      }
    }
  },
  $b = { x: null, y: null };
function jb(e, t) {
  var r = e.element.classList,
    n = ot.state.scrolling(t);
  r.contains(n) ? clearTimeout($b[t]) : r.add(n);
}
function Bb(e, t) {
  $b[t] = setTimeout(function () {
    return e.isAlive && e.element.classList.remove(ot.state.scrolling(t));
  }, e.settings.scrollingThreshold);
}
function qD(e, t) {
  jb(e, t), Bb(e, t);
}
var Rs = function (t) {
    (this.element = t), (this.handlers = {});
  },
  Nb = { isEmpty: { configurable: !0 } };
Rs.prototype.bind = function (t, r) {
  typeof this.handlers[t] > 'u' && (this.handlers[t] = []),
    this.handlers[t].push(r),
    this.element.addEventListener(t, r, !1);
};
Rs.prototype.unbind = function (t, r) {
  var n = this;
  this.handlers[t] = this.handlers[t].filter(function (o) {
    return r && o !== r ? !0 : (n.element.removeEventListener(t, o, !1), !1);
  });
};
Rs.prototype.unbindAll = function () {
  for (var t in this.handlers) this.unbind(t);
};
Nb.isEmpty.get = function () {
  var e = this;
  return Object.keys(this.handlers).every(function (t) {
    return e.handlers[t].length === 0;
  });
};
Object.defineProperties(Rs.prototype, Nb);
var Jo = function () {
  this.eventElements = [];
};
Jo.prototype.eventElement = function (t) {
  var r = this.eventElements.filter(function (n) {
    return n.element === t;
  })[0];
  return r || ((r = new Rs(t)), this.eventElements.push(r)), r;
};
Jo.prototype.bind = function (t, r, n) {
  this.eventElement(t).bind(r, n);
};
Jo.prototype.unbind = function (t, r, n) {
  var o = this.eventElement(t);
  o.unbind(r, n),
    o.isEmpty && this.eventElements.splice(this.eventElements.indexOf(o), 1);
};
Jo.prototype.unbindAll = function () {
  this.eventElements.forEach(function (t) {
    return t.unbindAll();
  }),
    (this.eventElements = []);
};
Jo.prototype.once = function (t, r, n) {
  var o = this.eventElement(t),
    i = function (s) {
      o.unbind(r, i), n(s);
    };
  o.bind(r, i);
};
function ta(e) {
  if (typeof window.CustomEvent == 'function') return new CustomEvent(e);
  var t = document.createEvent('CustomEvent');
  return t.initCustomEvent(e, !1, !1, void 0), t;
}
function Za(e, t, r, n, o) {
  n === void 0 && (n = !0), o === void 0 && (o = !1);
  var i;
  if (t === 'top')
    i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
  else if (t === 'left')
    i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
  else throw new Error('A proper axis should be provided');
  KD(e, r, i, n, o);
}
function KD(e, t, r, n, o) {
  var i = r[0],
    s = r[1],
    a = r[2],
    l = r[3],
    c = r[4],
    u = r[5];
  n === void 0 && (n = !0), o === void 0 && (o = !1);
  var f = e.element;
  (e.reach[l] = null),
    f[a] < 1 && (e.reach[l] = 'start'),
    f[a] > e[i] - e[s] - 1 && (e.reach[l] = 'end'),
    t &&
      (f.dispatchEvent(ta('ps-scroll-' + l)),
      t < 0
        ? f.dispatchEvent(ta('ps-scroll-' + c))
        : t > 0 && f.dispatchEvent(ta('ps-scroll-' + u)),
      n && qD(e, l)),
    e.reach[l] &&
      (t || o) &&
      f.dispatchEvent(ta('ps-' + l + '-reach-' + e.reach[l]));
}
function He(e) {
  return parseInt(e, 10) || 0;
}
function YD(e) {
  return (
    rn(e, 'input,[contenteditable]') ||
    rn(e, 'select,[contenteditable]') ||
    rn(e, 'textarea,[contenteditable]') ||
    rn(e, 'button,[contenteditable]')
  );
}
function GD(e) {
  var t = Tr(e);
  return (
    He(t.width) +
    He(t.paddingLeft) +
    He(t.paddingRight) +
    He(t.borderLeftWidth) +
    He(t.borderRightWidth)
  );
}
var ho = {
  isWebKit:
    typeof document < 'u' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window < 'u' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer: typeof navigator < 'u' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator < 'u' && /Chrome/i.test(navigator && navigator.userAgent)
};
function qr(e) {
  var t = e.element,
    r = Math.floor(t.scrollTop),
    n = t.getBoundingClientRect();
  (e.containerWidth = Math.round(n.width)),
    (e.containerHeight = Math.round(n.height)),
    (e.contentWidth = t.scrollWidth),
    (e.contentHeight = t.scrollHeight),
    t.contains(e.scrollbarXRail) ||
      (dm(t, ot.element.rail('x')).forEach(function (o) {
        return go(o);
      }),
      t.appendChild(e.scrollbarXRail)),
    t.contains(e.scrollbarYRail) ||
      (dm(t, ot.element.rail('y')).forEach(function (o) {
        return go(o);
      }),
      t.appendChild(e.scrollbarYRail)),
    !e.settings.suppressScrollX &&
    e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
      ? ((e.scrollbarXActive = !0),
        (e.railXWidth = e.containerWidth - e.railXMarginWidth),
        (e.railXRatio = e.containerWidth / e.railXWidth),
        (e.scrollbarXWidth = fm(
          e,
          He((e.railXWidth * e.containerWidth) / e.contentWidth)
        )),
        (e.scrollbarXLeft = He(
          ((e.negativeScrollAdjustment + t.scrollLeft) *
            (e.railXWidth - e.scrollbarXWidth)) /
            (e.contentWidth - e.containerWidth)
        )))
      : (e.scrollbarXActive = !1),
    !e.settings.suppressScrollY &&
    e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
      ? ((e.scrollbarYActive = !0),
        (e.railYHeight = e.containerHeight - e.railYMarginHeight),
        (e.railYRatio = e.containerHeight / e.railYHeight),
        (e.scrollbarYHeight = fm(
          e,
          He((e.railYHeight * e.containerHeight) / e.contentHeight)
        )),
        (e.scrollbarYTop = He(
          (r * (e.railYHeight - e.scrollbarYHeight)) /
            (e.contentHeight - e.containerHeight)
        )))
      : (e.scrollbarYActive = !1),
    e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
      (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
    e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
      (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
    XD(t, e),
    e.scrollbarXActive
      ? t.classList.add(ot.state.active('x'))
      : (t.classList.remove(ot.state.active('x')),
        (e.scrollbarXWidth = 0),
        (e.scrollbarXLeft = 0),
        (t.scrollLeft = e.isRtl === !0 ? e.contentWidth : 0)),
    e.scrollbarYActive
      ? t.classList.add(ot.state.active('y'))
      : (t.classList.remove(ot.state.active('y')),
        (e.scrollbarYHeight = 0),
        (e.scrollbarYTop = 0),
        (t.scrollTop = 0));
}
function fm(e, t) {
  return (
    e.settings.minScrollbarLength &&
      (t = Math.max(t, e.settings.minScrollbarLength)),
    e.settings.maxScrollbarLength &&
      (t = Math.min(t, e.settings.maxScrollbarLength)),
    t
  );
}
function XD(e, t) {
  var r = { width: t.railXWidth },
    n = Math.floor(e.scrollTop);
  t.isRtl
    ? (r.left =
        t.negativeScrollAdjustment +
        e.scrollLeft +
        t.containerWidth -
        t.contentWidth)
    : (r.left = e.scrollLeft),
    t.isScrollbarXUsingBottom
      ? (r.bottom = t.scrollbarXBottom - n)
      : (r.top = t.scrollbarXTop + n),
    Lt(t.scrollbarXRail, r);
  var o = { top: n, height: t.railYHeight };
  t.isScrollbarYUsingRight
    ? t.isRtl
      ? (o.right =
          t.contentWidth -
          (t.negativeScrollAdjustment + e.scrollLeft) -
          t.scrollbarYRight -
          t.scrollbarYOuterWidth -
          9)
      : (o.right = t.scrollbarYRight - e.scrollLeft)
    : t.isRtl
      ? (o.left =
          t.negativeScrollAdjustment +
          e.scrollLeft +
          t.containerWidth * 2 -
          t.contentWidth -
          t.scrollbarYLeft -
          t.scrollbarYOuterWidth)
      : (o.left = t.scrollbarYLeft + e.scrollLeft),
    Lt(t.scrollbarYRail, o),
    Lt(t.scrollbarX, {
      left: t.scrollbarXLeft,
      width: t.scrollbarXWidth - t.railBorderXWidth
    }),
    Lt(t.scrollbarY, {
      top: t.scrollbarYTop,
      height: t.scrollbarYHeight - t.railBorderYWidth
    });
}
function QD(e) {
  e.element,
    e.event.bind(e.scrollbarY, 'mousedown', function (t) {
      return t.stopPropagation();
    }),
    e.event.bind(e.scrollbarYRail, 'mousedown', function (t) {
      var r =
          t.pageY -
          window.pageYOffset -
          e.scrollbarYRail.getBoundingClientRect().top,
        n = r > e.scrollbarYTop ? 1 : -1;
      (e.element.scrollTop += n * e.containerHeight),
        qr(e),
        t.stopPropagation();
    }),
    e.event.bind(e.scrollbarX, 'mousedown', function (t) {
      return t.stopPropagation();
    }),
    e.event.bind(e.scrollbarXRail, 'mousedown', function (t) {
      var r =
          t.pageX -
          window.pageXOffset -
          e.scrollbarXRail.getBoundingClientRect().left,
        n = r > e.scrollbarXLeft ? 1 : -1;
      (e.element.scrollLeft += n * e.containerWidth),
        qr(e),
        t.stopPropagation();
    });
}
function ZD(e) {
  pm(e, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail'
  ]),
    pm(e, [
      'containerHeight',
      'contentHeight',
      'pageY',
      'railYHeight',
      'scrollbarY',
      'scrollbarYHeight',
      'scrollTop',
      'y',
      'scrollbarYRail'
    ]);
}
function pm(e, t) {
  var r = t[0],
    n = t[1],
    o = t[2],
    i = t[3],
    s = t[4],
    a = t[5],
    l = t[6],
    c = t[7],
    u = t[8],
    f = e.element,
    d = null,
    m = null,
    p = null;
  function h(b) {
    b.touches && b.touches[0] && (b[o] = b.touches[0].pageY),
      (f[l] = d + p * (b[o] - m)),
      jb(e, c),
      qr(e),
      b.stopPropagation(),
      b.type.startsWith('touch') &&
        b.changedTouches.length > 1 &&
        b.preventDefault();
  }
  function v() {
    Bb(e, c),
      e[u].classList.remove(ot.state.clicking),
      e.event.unbind(e.ownerDocument, 'mousemove', h);
  }
  function x(b, g) {
    (d = f[l]),
      g && b.touches && (b[o] = b.touches[0].pageY),
      (m = b[o]),
      (p = (e[n] - e[r]) / (e[i] - e[a])),
      g
        ? e.event.bind(e.ownerDocument, 'touchmove', h)
        : (e.event.bind(e.ownerDocument, 'mousemove', h),
          e.event.once(e.ownerDocument, 'mouseup', v),
          b.preventDefault()),
      e[u].classList.add(ot.state.clicking),
      b.stopPropagation();
  }
  e.event.bind(e[s], 'mousedown', function (b) {
    x(b);
  }),
    e.event.bind(e[s], 'touchstart', function (b) {
      x(b, !0);
    });
}
function JD(e) {
  var t = e.element,
    r = function () {
      return rn(t, ':hover');
    },
    n = function () {
      return rn(e.scrollbarX, ':focus') || rn(e.scrollbarY, ':focus');
    };
  function o(i, s) {
    var a = Math.floor(t.scrollTop);
    if (i === 0) {
      if (!e.scrollbarYActive) return !1;
      if (
        (a === 0 && s > 0) ||
        (a >= e.contentHeight - e.containerHeight && s < 0)
      )
        return !e.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (s === 0) {
      if (!e.scrollbarXActive) return !1;
      if (
        (l === 0 && i < 0) ||
        (l >= e.contentWidth - e.containerWidth && i > 0)
      )
        return !e.settings.wheelPropagation;
    }
    return !0;
  }
  e.event.bind(e.ownerDocument, 'keydown', function (i) {
    if (
      !(
        (i.isDefaultPrevented && i.isDefaultPrevented()) ||
        i.defaultPrevented
      ) &&
      !(!r() && !n())
    ) {
      var s = document.activeElement
        ? document.activeElement
        : e.ownerDocument.activeElement;
      if (s) {
        if (s.tagName === 'IFRAME') s = s.contentDocument.activeElement;
        else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
        if (YD(s)) return;
      }
      var a = 0,
        l = 0;
      switch (i.which) {
        case 37:
          i.metaKey
            ? (a = -e.contentWidth)
            : i.altKey
              ? (a = -e.containerWidth)
              : (a = -30);
          break;
        case 38:
          i.metaKey
            ? (l = e.contentHeight)
            : i.altKey
              ? (l = e.containerHeight)
              : (l = 30);
          break;
        case 39:
          i.metaKey
            ? (a = e.contentWidth)
            : i.altKey
              ? (a = e.containerWidth)
              : (a = 30);
          break;
        case 40:
          i.metaKey
            ? (l = -e.contentHeight)
            : i.altKey
              ? (l = -e.containerHeight)
              : (l = -30);
          break;
        case 32:
          i.shiftKey ? (l = e.containerHeight) : (l = -e.containerHeight);
          break;
        case 33:
          l = e.containerHeight;
          break;
        case 34:
          l = -e.containerHeight;
          break;
        case 36:
          l = e.contentHeight;
          break;
        case 35:
          l = -e.contentHeight;
          break;
        default:
          return;
      }
      (e.settings.suppressScrollX && a !== 0) ||
        (e.settings.suppressScrollY && l !== 0) ||
        ((t.scrollTop -= l),
        (t.scrollLeft += a),
        qr(e),
        o(a, l) && i.preventDefault());
    }
  });
}
function eI(e) {
  var t = e.element;
  function r(s, a) {
    var l = Math.floor(t.scrollTop),
      c = t.scrollTop === 0,
      u = l + t.offsetHeight === t.scrollHeight,
      f = t.scrollLeft === 0,
      d = t.scrollLeft + t.offsetWidth === t.scrollWidth,
      m;
    return (
      Math.abs(a) > Math.abs(s) ? (m = c || u) : (m = f || d),
      m ? !e.settings.wheelPropagation : !0
    );
  }
  function n(s) {
    var a = s.deltaX,
      l = -1 * s.deltaY;
    return (
      (typeof a > 'u' || typeof l > 'u') &&
        ((a = (-1 * s.wheelDeltaX) / 6), (l = s.wheelDeltaY / 6)),
      s.deltaMode && s.deltaMode === 1 && ((a *= 10), (l *= 10)),
      a !== a && l !== l && ((a = 0), (l = s.wheelDelta)),
      s.shiftKey ? [-l, -a] : [a, l]
    );
  }
  function o(s, a, l) {
    if (!ho.isWebKit && t.querySelector('select:focus')) return !0;
    if (!t.contains(s)) return !1;
    for (var c = s; c && c !== t; ) {
      if (c.classList.contains(ot.element.consuming)) return !0;
      var u = Tr(c);
      if (l && u.overflowY.match(/(scroll|auto)/)) {
        var f = c.scrollHeight - c.clientHeight;
        if (f > 0 && ((c.scrollTop > 0 && l < 0) || (c.scrollTop < f && l > 0)))
          return !0;
      }
      if (a && u.overflowX.match(/(scroll|auto)/)) {
        var d = c.scrollWidth - c.clientWidth;
        if (
          d > 0 &&
          ((c.scrollLeft > 0 && a < 0) || (c.scrollLeft < d && a > 0))
        )
          return !0;
      }
      c = c.parentNode;
    }
    return !1;
  }
  function i(s) {
    var a = n(s),
      l = a[0],
      c = a[1];
    if (!o(s.target, l, c)) {
      var u = !1;
      e.settings.useBothWheelAxes
        ? e.scrollbarYActive && !e.scrollbarXActive
          ? (c
              ? (t.scrollTop -= c * e.settings.wheelSpeed)
              : (t.scrollTop += l * e.settings.wheelSpeed),
            (u = !0))
          : e.scrollbarXActive &&
            !e.scrollbarYActive &&
            (l
              ? (t.scrollLeft += l * e.settings.wheelSpeed)
              : (t.scrollLeft -= c * e.settings.wheelSpeed),
            (u = !0))
        : ((t.scrollTop -= c * e.settings.wheelSpeed),
          (t.scrollLeft += l * e.settings.wheelSpeed)),
        qr(e),
        (u = u || r(l, c)),
        u && !s.ctrlKey && (s.stopPropagation(), s.preventDefault());
    }
  }
  typeof window.onwheel < 'u'
    ? e.event.bind(t, 'wheel', i)
    : typeof window.onmousewheel < 'u' && e.event.bind(t, 'mousewheel', i);
}
function tI(e) {
  if (!ho.supportsTouch && !ho.supportsIePointer) return;
  var t = e.element;
  function r(p, h) {
    var v = Math.floor(t.scrollTop),
      x = t.scrollLeft,
      b = Math.abs(p),
      g = Math.abs(h);
    if (g > b) {
      if (
        (h < 0 && v === e.contentHeight - e.containerHeight) ||
        (h > 0 && v === 0)
      )
        return window.scrollY === 0 && h > 0 && ho.isChrome;
    } else if (
      b > g &&
      ((p < 0 && x === e.contentWidth - e.containerWidth) || (p > 0 && x === 0))
    )
      return !0;
    return !0;
  }
  function n(p, h) {
    (t.scrollTop -= h), (t.scrollLeft -= p), qr(e);
  }
  var o = {},
    i = 0,
    s = {},
    a = null;
  function l(p) {
    return p.targetTouches ? p.targetTouches[0] : p;
  }
  function c(p) {
    return p.pointerType && p.pointerType === 'pen' && p.buttons === 0
      ? !1
      : !!(
          (p.targetTouches && p.targetTouches.length === 1) ||
          (p.pointerType &&
            p.pointerType !== 'mouse' &&
            p.pointerType !== p.MSPOINTER_TYPE_MOUSE)
        );
  }
  function u(p) {
    if (c(p)) {
      var h = l(p);
      (o.pageX = h.pageX),
        (o.pageY = h.pageY),
        (i = new Date().getTime()),
        a !== null && clearInterval(a);
    }
  }
  function f(p, h, v) {
    if (!t.contains(p)) return !1;
    for (var x = p; x && x !== t; ) {
      if (x.classList.contains(ot.element.consuming)) return !0;
      var b = Tr(x);
      if (v && b.overflowY.match(/(scroll|auto)/)) {
        var g = x.scrollHeight - x.clientHeight;
        if (g > 0 && ((x.scrollTop > 0 && v < 0) || (x.scrollTop < g && v > 0)))
          return !0;
      }
      if (h && b.overflowX.match(/(scroll|auto)/)) {
        var y = x.scrollWidth - x.clientWidth;
        if (
          y > 0 &&
          ((x.scrollLeft > 0 && h < 0) || (x.scrollLeft < y && h > 0))
        )
          return !0;
      }
      x = x.parentNode;
    }
    return !1;
  }
  function d(p) {
    if (c(p)) {
      var h = l(p),
        v = { pageX: h.pageX, pageY: h.pageY },
        x = v.pageX - o.pageX,
        b = v.pageY - o.pageY;
      if (f(p.target, x, b)) return;
      n(x, b), (o = v);
      var g = new Date().getTime(),
        y = g - i;
      y > 0 && ((s.x = x / y), (s.y = b / y), (i = g)),
        r(x, b) && p.preventDefault();
    }
  }
  function m() {
    e.settings.swipeEasing &&
      (clearInterval(a),
      (a = setInterval(function () {
        if (e.isInitialized) {
          clearInterval(a);
          return;
        }
        if (!s.x && !s.y) {
          clearInterval(a);
          return;
        }
        if (Math.abs(s.x) < 0.01 && Math.abs(s.y) < 0.01) {
          clearInterval(a);
          return;
        }
        if (!e.element) {
          clearInterval(a);
          return;
        }
        n(s.x * 30, s.y * 30), (s.x *= 0.8), (s.y *= 0.8);
      }, 10)));
  }
  ho.supportsTouch
    ? (e.event.bind(t, 'touchstart', u),
      e.event.bind(t, 'touchmove', d),
      e.event.bind(t, 'touchend', m))
    : ho.supportsIePointer &&
      (window.PointerEvent
        ? (e.event.bind(t, 'pointerdown', u),
          e.event.bind(t, 'pointermove', d),
          e.event.bind(t, 'pointerup', m))
        : window.MSPointerEvent &&
          (e.event.bind(t, 'MSPointerDown', u),
          e.event.bind(t, 'MSPointerMove', d),
          e.event.bind(t, 'MSPointerUp', m)));
}
var rI = function () {
    return {
      handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    };
  },
  nI = {
    'click-rail': QD,
    'drag-thumb': ZD,
    keyboard: JD,
    wheel: eI,
    touch: tI
  },
  ks = function (t, r) {
    var n = this;
    if (
      (r === void 0 && (r = {}),
      typeof t == 'string' && (t = document.querySelector(t)),
      !t || !t.nodeName)
    )
      throw new Error('no element is specified to initialize PerfectScrollbar');
    (this.element = t), t.classList.add(ot.main), (this.settings = rI());
    for (var o in r) this.settings[o] = r[o];
    (this.containerWidth = null),
      (this.containerHeight = null),
      (this.contentWidth = null),
      (this.contentHeight = null);
    var i = function () {
        return t.classList.add(ot.state.focus);
      },
      s = function () {
        return t.classList.remove(ot.state.focus);
      };
    (this.isRtl = Tr(t).direction === 'rtl'),
      this.isRtl === !0 && t.classList.add(ot.rtl),
      (this.isNegativeScroll = (function () {
        var c = t.scrollLeft,
          u = null;
        return (
          (t.scrollLeft = -1), (u = t.scrollLeft < 0), (t.scrollLeft = c), u
        );
      })()),
      (this.negativeScrollAdjustment = this.isNegativeScroll
        ? t.scrollWidth - t.clientWidth
        : 0),
      (this.event = new Jo()),
      (this.ownerDocument = t.ownerDocument || document),
      (this.scrollbarXRail = ea(ot.element.rail('x'))),
      t.appendChild(this.scrollbarXRail),
      (this.scrollbarX = ea(ot.element.thumb('x'))),
      this.scrollbarXRail.appendChild(this.scrollbarX),
      this.scrollbarX.setAttribute('tabindex', 0),
      this.event.bind(this.scrollbarX, 'focus', i),
      this.event.bind(this.scrollbarX, 'blur', s),
      (this.scrollbarXActive = null),
      (this.scrollbarXWidth = null),
      (this.scrollbarXLeft = null);
    var a = Tr(this.scrollbarXRail);
    (this.scrollbarXBottom = parseInt(a.bottom, 10)),
      isNaN(this.scrollbarXBottom)
        ? ((this.isScrollbarXUsingBottom = !1),
          (this.scrollbarXTop = He(a.top)))
        : (this.isScrollbarXUsingBottom = !0),
      (this.railBorderXWidth = He(a.borderLeftWidth) + He(a.borderRightWidth)),
      Lt(this.scrollbarXRail, { display: 'block' }),
      (this.railXMarginWidth = He(a.marginLeft) + He(a.marginRight)),
      Lt(this.scrollbarXRail, { display: '' }),
      (this.railXWidth = null),
      (this.railXRatio = null),
      (this.scrollbarYRail = ea(ot.element.rail('y'))),
      t.appendChild(this.scrollbarYRail),
      (this.scrollbarY = ea(ot.element.thumb('y'))),
      this.scrollbarYRail.appendChild(this.scrollbarY),
      this.scrollbarY.setAttribute('tabindex', 0),
      this.event.bind(this.scrollbarY, 'focus', i),
      this.event.bind(this.scrollbarY, 'blur', s),
      (this.scrollbarYActive = null),
      (this.scrollbarYHeight = null),
      (this.scrollbarYTop = null);
    var l = Tr(this.scrollbarYRail);
    (this.scrollbarYRight = parseInt(l.right, 10)),
      isNaN(this.scrollbarYRight)
        ? ((this.isScrollbarYUsingRight = !1),
          (this.scrollbarYLeft = He(l.left)))
        : (this.isScrollbarYUsingRight = !0),
      (this.scrollbarYOuterWidth = this.isRtl ? GD(this.scrollbarY) : null),
      (this.railBorderYWidth = He(l.borderTopWidth) + He(l.borderBottomWidth)),
      Lt(this.scrollbarYRail, { display: 'block' }),
      (this.railYMarginHeight = He(l.marginTop) + He(l.marginBottom)),
      Lt(this.scrollbarYRail, { display: '' }),
      (this.railYHeight = null),
      (this.railYRatio = null),
      (this.reach = {
        x:
          t.scrollLeft <= 0
            ? 'start'
            : t.scrollLeft >= this.contentWidth - this.containerWidth
              ? 'end'
              : null,
        y:
          t.scrollTop <= 0
            ? 'start'
            : t.scrollTop >= this.contentHeight - this.containerHeight
              ? 'end'
              : null
      }),
      (this.isAlive = !0),
      this.settings.handlers.forEach(function (c) {
        return nI[c](n);
      }),
      (this.lastScrollTop = Math.floor(t.scrollTop)),
      (this.lastScrollLeft = t.scrollLeft),
      this.event.bind(this.element, 'scroll', function (c) {
        return n.onScroll(c);
      }),
      qr(this);
  };
ks.prototype.update = function () {
  this.isAlive &&
    ((this.negativeScrollAdjustment = this.isNegativeScroll
      ? this.element.scrollWidth - this.element.clientWidth
      : 0),
    Lt(this.scrollbarXRail, { display: 'block' }),
    Lt(this.scrollbarYRail, { display: 'block' }),
    (this.railXMarginWidth =
      He(Tr(this.scrollbarXRail).marginLeft) +
      He(Tr(this.scrollbarXRail).marginRight)),
    (this.railYMarginHeight =
      He(Tr(this.scrollbarYRail).marginTop) +
      He(Tr(this.scrollbarYRail).marginBottom)),
    Lt(this.scrollbarXRail, { display: 'none' }),
    Lt(this.scrollbarYRail, { display: 'none' }),
    qr(this),
    Za(this, 'top', 0, !1, !0),
    Za(this, 'left', 0, !1, !0),
    Lt(this.scrollbarXRail, { display: '' }),
    Lt(this.scrollbarYRail, { display: '' }));
};
ks.prototype.onScroll = function (t) {
  this.isAlive &&
    (qr(this),
    Za(this, 'top', this.element.scrollTop - this.lastScrollTop),
    Za(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
    (this.lastScrollTop = Math.floor(this.element.scrollTop)),
    (this.lastScrollLeft = this.element.scrollLeft));
};
ks.prototype.destroy = function () {
  this.isAlive &&
    (this.event.unbindAll(),
    go(this.scrollbarX),
    go(this.scrollbarY),
    go(this.scrollbarXRail),
    go(this.scrollbarYRail),
    this.removePsClasses(),
    (this.element = null),
    (this.scrollbarX = null),
    (this.scrollbarY = null),
    (this.scrollbarXRail = null),
    (this.scrollbarYRail = null),
    (this.isAlive = !1));
};
ks.prototype.removePsClasses = function () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    })
    .join(' ');
};
const oI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ks },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  iI = Dr(oI);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r =
      Object.assign ||
      function (v) {
        for (var x = 1; x < arguments.length; x++) {
          var b = arguments[x];
          for (var g in b)
            Object.prototype.hasOwnProperty.call(b, g) && (v[g] = b[g]);
        }
        return v;
      },
    n = (function () {
      function v(x, b) {
        for (var g = 0; g < b.length; g++) {
          var y = b[g];
          (y.enumerable = y.enumerable || !1),
            (y.configurable = !0),
            'value' in y && (y.writable = !0),
            Object.defineProperty(x, y.key, y);
        }
      }
      return function (x, b, g) {
        return b && v(x.prototype, b), g && v(x, g), x;
      };
    })(),
    o = w,
    i = c(o),
    s = yy,
    a = iI,
    l = c(a);
  function c(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u(v, x) {
    var b = {};
    for (var g in v)
      x.indexOf(g) >= 0 ||
        (Object.prototype.hasOwnProperty.call(v, g) && (b[g] = v[g]));
    return b;
  }
  function f(v, x) {
    if (!(v instanceof x))
      throw new TypeError('Cannot call a class as a function');
  }
  function d(v, x) {
    if (!v)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return x && (typeof x == 'object' || typeof x == 'function') ? x : v;
  }
  function m(v, x) {
    if (typeof x != 'function' && x !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof x
      );
    (v.prototype = Object.create(x && x.prototype, {
      constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 }
    })),
      x &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(v, x)
          : (v.__proto__ = x));
  }
  var p = {
    'ps-scroll-y': 'onScrollY',
    'ps-scroll-x': 'onScrollX',
    'ps-scroll-up': 'onScrollUp',
    'ps-scroll-down': 'onScrollDown',
    'ps-scroll-left': 'onScrollLeft',
    'ps-scroll-right': 'onScrollRight',
    'ps-y-reach-start': 'onYReachStart',
    'ps-y-reach-end': 'onYReachEnd',
    'ps-x-reach-start': 'onXReachStart',
    'ps-x-reach-end': 'onXReachEnd'
  };
  Object.freeze(p);
  var h = (function (v) {
    m(x, v);
    function x(b) {
      f(this, x);
      var g = d(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, b));
      return (g.handleRef = g.handleRef.bind(g)), (g._handlerByEvent = {}), g;
    }
    return (
      n(x, [
        {
          key: 'componentDidMount',
          value: function () {
            this.props.option &&
              console.warn(
                'react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'
              ),
              (this._ps = new l.default(
                this._container,
                this.props.options || this.props.option
              )),
              this._updateEventHook(),
              this._updateClassName();
          }
        },
        {
          key: 'componentDidUpdate',
          value: function (g) {
            this._updateEventHook(g),
              this.updateScroll(),
              g.className !== this.props.className && this._updateClassName();
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var g = this;
            Object.keys(this._handlerByEvent).forEach(function (y) {
              var E = g._handlerByEvent[y];
              E && g._container.removeEventListener(y, E, !1);
            }),
              (this._handlerByEvent = {}),
              this._ps.destroy(),
              (this._ps = null);
          }
        },
        {
          key: '_updateEventHook',
          value: function () {
            var g = this,
              y =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
            Object.keys(p).forEach(function (E) {
              var S = g.props[p[E]],
                C = y[p[E]];
              if (S !== C) {
                if (C) {
                  var T = g._handlerByEvent[E];
                  g._container.removeEventListener(E, T, !1),
                    (g._handlerByEvent[E] = null);
                }
                if (S) {
                  var R = function () {
                    return S(g._container);
                  };
                  g._container.addEventListener(E, R, !1),
                    (g._handlerByEvent[E] = R);
                }
              }
            });
          }
        },
        {
          key: '_updateClassName',
          value: function () {
            var g = this.props.className,
              y = this._container.className
                .split(' ')
                .filter(function (E) {
                  return E.match(/^ps([-_].+|)$/);
                })
                .join(' ');
            this._container &&
              (this._container.className =
                'scrollbar-container' +
                (g ? ' ' + g : '') +
                (y ? ' ' + y : ''));
          }
        },
        {
          key: 'updateScroll',
          value: function () {
            this.props.onSync(this._ps);
          }
        },
        {
          key: 'handleRef',
          value: function (g) {
            (this._container = g), this.props.containerRef(g);
          }
        },
        {
          key: 'render',
          value: function () {
            var g = this.props;
            g.className;
            var y = g.style;
            g.option,
              g.options,
              g.containerRef,
              g.onScrollY,
              g.onScrollX,
              g.onScrollUp,
              g.onScrollDown,
              g.onScrollLeft,
              g.onScrollRight,
              g.onYReachStart,
              g.onYReachEnd,
              g.onXReachStart,
              g.onXReachEnd;
            var E = g.component;
            g.onSync;
            var S = g.children,
              C = u(g, [
                'className',
                'style',
                'option',
                'options',
                'containerRef',
                'onScrollY',
                'onScrollX',
                'onScrollUp',
                'onScrollDown',
                'onScrollLeft',
                'onScrollRight',
                'onYReachStart',
                'onYReachEnd',
                'onXReachStart',
                'onXReachEnd',
                'component',
                'onSync',
                'children'
              ]),
              T = E;
            return i.default.createElement(
              T,
              r({ style: y, ref: this.handleRef }, C),
              S
            );
          }
        }
      ]),
      x
    );
  })(o.Component);
  (t.default = h),
    (h.defaultProps = {
      className: '',
      style: void 0,
      option: void 0,
      options: void 0,
      containerRef: function () {},
      onScrollY: void 0,
      onScrollX: void 0,
      onScrollUp: void 0,
      onScrollDown: void 0,
      onScrollLeft: void 0,
      onScrollRight: void 0,
      onYReachStart: void 0,
      onYReachEnd: void 0,
      onXReachStart: void 0,
      onXReachEnd: void 0,
      onSync: function (x) {
        return x.update();
      },
      component: 'div'
    }),
    (h.propTypes = {
      children: s.PropTypes.node.isRequired,
      className: s.PropTypes.string,
      style: s.PropTypes.object,
      option: s.PropTypes.object,
      options: s.PropTypes.object,
      containerRef: s.PropTypes.func,
      onScrollY: s.PropTypes.func,
      onScrollX: s.PropTypes.func,
      onScrollUp: s.PropTypes.func,
      onScrollDown: s.PropTypes.func,
      onScrollLeft: s.PropTypes.func,
      onScrollRight: s.PropTypes.func,
      onYReachStart: s.PropTypes.func,
      onYReachEnd: s.PropTypes.func,
      onXReachStart: s.PropTypes.func,
      onXReachEnd: s.PropTypes.func,
      onSync: s.PropTypes.func,
      component: s.PropTypes.string
    }),
    (e.exports = t.default);
})(Au, Au.exports);
var sI = Au.exports;
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = sI,
    n = o(r);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  (t.default = n.default), (e.exports = t.default);
})(Ou, Ou.exports);
var aI = Ou.exports;
const Fb = Kg(aI),
  hm = { '& .MuiCardHeader-action': { mr: 0 } },
  Vb = de.forwardRef(
    (
      {
        border: e = !1,
        boxShadow: t,
        children: r,
        content: n = !0,
        contentClass: o = '',
        contentSX: i = {},
        darkTitle: s,
        secondary: a,
        shadow: l,
        sx: c = {},
        title: u,
        ...f
      },
      d
    ) =>
      P.jsxs(Ka, {
        ref: d,
        ...f,
        sx: {
          border: e ? '1px solid' : 'none',
          borderColor: 'divider',
          ':hover': {
            boxShadow: t ? l || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
          },
          ...c
        },
        children: [
          !s && u && P.jsx(Ya, { sx: hm, title: u, action: a }),
          s &&
            u &&
            P.jsx(Ya, {
              sx: hm,
              title: P.jsx(Se, { variant: 'h3', children: u }),
              action: a
            }),
          u && P.jsx(Bo, {}),
          n && P.jsx(Cb, { sx: i, className: o, children: r }),
          !n && r
        ]
      })
  );
Vb.propTypes = {
  border: W.bool,
  boxShadow: W.bool,
  children: W.node,
  content: W.bool,
  contentClass: W.string,
  contentSX: W.object,
  darkTitle: W.bool,
  secondary: W.oneOfType([W.node, W.string, W.object]),
  shadow: W.oneOfType([W.string, W.number]),
  sx: W.object,
  title: W.oneOfType([W.node, W.string, W.object])
};
W.object, W.string, W.string, W.bool;
W.node;
const lI = '/assets/ELogo-Bf5vj95-.png',
  cI = (e) => {
    const t = dt(),
      r = dn((v) => v.customization),
      n = gs();
    console.log(e);
    const [o, i] = w.useState(-1),
      [s, a] = w.useState(!1),
      { user: l, setUser: c } = aE(),
      u = w.useRef(null),
      f = () => {
        console.log('Logout'),
          localStorage.removeItem('authToken'),
          localStorage.removeItem('empId'),
          localStorage.removeItem('isLoggedIn'),
          c(null),
          n('/');
      },
      d = (v) => {
        (u.current && u.current.contains(v.target)) || a(!1);
      },
      m = (v, x, b = '') => {
        i(x), d(v), b && b !== '' && n(b);
      },
      p = () => {
        a((v) => !v);
      },
      h = w.useRef(s);
    return (
      w.useEffect(() => {
        h.current === !0 && s === !1 && u.current.focus(), (h.current = s);
      }, [s]),
      P.jsxs(P.Fragment, {
        children: [
          P.jsx(Sb, {
            sx: {
              height: '48px',
              alignItems: 'center',
              borderRadius: '27px',
              transition: 'all .2s ease-in-out',
              borderColor: t.palette.primary.light,
              '&[aria-controls="menu-list-grow"], &:hover': {
                borderColor: t.palette.primary.main,
                background: `${t.palette.primary.main}!important`,
                '& svg': { stroke: t.palette.primary.light }
              },
              '& .MuiChip-label': { lineHeight: 0 }
            },
            icon: P.jsx(tc, {
              src: lI,
              sx: {
                ...t.typography.mediumAvatar,
                backgroundColor: 'white',
                margin: '8px 0 8px 8px !important',
                cursor: 'pointer'
              },
              ref: u,
              'aria-controls': s ? 'menu-list-grow' : void 0,
              'aria-haspopup': 'true'
            }),
            label: P.jsx(cm, {
              stroke: 1.5,
              size: '1.5rem',
              color: t.palette.primary.main
            }),
            variant: 'outlined',
            ref: u,
            'aria-controls': s ? 'menu-list-grow' : void 0,
            'aria-haspopup': 'true',
            onClick: p
          }),
          P.jsx(X2, {
            placement: 'bottom-end',
            open: s,
            anchorEl: u.current,
            role: void 0,
            transition: !0,
            disablePortal: !0,
            popperOptions: {
              modifiers: [{ name: 'offset', options: { offset: [0, 14] } }]
            },
            children: ({ TransitionProps: v }) =>
              P.jsx(rf, {
                in: s,
                ...v,
                children: P.jsx(Zl, {
                  children: P.jsx(uO, {
                    onClickAway: d,
                    children: P.jsxs(Vb, {
                      border: !1,
                      elevation: 16,
                      content: !1,
                      boxShadow: !0,
                      shadow: t.shadows[16],
                      children: [
                        P.jsxs(lt, {
                          sx: { p: 2, pb: 0 },
                          children: [
                            P.jsx(Gh, {
                              children: P.jsxs(Gh, {
                                direction: 'row',
                                spacing: 0.5,
                                alignItems: 'center',
                                children: [
                                  P.jsx(Se, {
                                    variant: 'h4',
                                    children: 'Good Morning,'
                                  }),
                                  P.jsx(Se, {
                                    component: 'span',
                                    variant: 'h4',
                                    sx: { fontWeight: 400 },
                                    children: l.firstName
                                  })
                                ]
                              })
                            }),
                            P.jsx(Bo, {})
                          ]
                        }),
                        P.jsx(Fb, {
                          style: {
                            height: '100%',
                            maxHeight: 'calc(100vh - 250px)',
                            overflowX: 'hidden'
                          },
                          children: P.jsx(lt, {
                            sx: { p: 2, pt: 0 },
                            children: P.jsxs(tf, {
                              component: 'nav',
                              sx: {
                                width: '100%',
                                maxWidth: 350,
                                minWidth: 300,
                                borderRadius: '10px',
                                [t.breakpoints.down('md')]: {
                                  minWidth: '100%'
                                },
                                '& .MuiListItemButton-root': { mt: 0.5 }
                              },
                              children: [
                                P.jsxs(ss, {
                                  sx: { borderRadius: `${r.borderRadius}px` },
                                  selected: o === 0,
                                  onClick: (x) => m(x, 0, '#'),
                                  children: [
                                    P.jsx(Ga, {
                                      children: P.jsx(cm, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    P.jsx(Xa, {
                                      primary: P.jsx(Se, {
                                        variant: 'body2',
                                        children: 'Account Settings'
                                      })
                                    })
                                  ]
                                }),
                                P.jsxs(ss, {
                                  sx: { borderRadius: `${r.borderRadius}px` },
                                  selected: o === 4,
                                  onClick: f,
                                  children: [
                                    P.jsx(Ga, {
                                      children: P.jsx(BD, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    P.jsx(Xa, {
                                      primary: P.jsx(Se, {
                                        variant: 'body2',
                                        children: 'Logout'
                                      })
                                    })
                                  ]
                                })
                              ]
                            })
                          })
                        })
                      ]
                    })
                  })
                })
              })
          })
        ]
      })
    );
  },
  Wb = ({ handleLeftDrawerToggle: e }) => {
    const t = dt();
    return P.jsxs(P.Fragment, {
      children: [
        P.jsxs(lt, {
          sx: {
            width: 228,
            display: 'flex',
            [t.breakpoints.down('md')]: { width: 'auto' }
          },
          children: [
            P.jsx(lt, {
              component: 'span',
              sx: { display: { xs: 'none', md: 'block' }, flexGrow: 1 },
              children: P.jsx(Ab, {})
            }),
            P.jsx(Do, {
              sx: { borderRadius: '8px', overflow: 'hidden' },
              children: P.jsx(tc, {
                variant: 'rounded',
                sx: {
                  ...t.typography.commonAvatar,
                  ...t.typography.mediumAvatar,
                  transition: 'all .2s ease-in-out',
                  background: t.palette.secondary.light,
                  color: t.palette.secondary.dark,
                  '&:hover': {
                    background: t.palette.secondary.dark,
                    color: t.palette.secondary.light
                  }
                },
                onClick: e,
                color: 'inherit',
                children: P.jsx(ND, { stroke: 1.5, size: '1.3rem' })
              })
            })
          ]
        }),
        P.jsx(lt, { sx: { flexGrow: 1 } }),
        P.jsx(lt, { sx: { flexGrow: 1 } }),
        P.jsx(cI, {})
      ]
    });
  };
Wb.propTypes = { handleLeftDrawerToggle: W.func };
var K = {},
  _u = { exports: {} };
(function (e, t) {
  (function (r, n) {
    var o = '1.0.38',
      i = '',
      s = '?',
      a = 'function',
      l = 'undefined',
      c = 'object',
      u = 'string',
      f = 'major',
      d = 'model',
      m = 'name',
      p = 'type',
      h = 'vendor',
      v = 'version',
      x = 'architecture',
      b = 'console',
      g = 'mobile',
      y = 'tablet',
      E = 'smarttv',
      S = 'wearable',
      C = 'embedded',
      T = 500,
      R = 'Amazon',
      k = 'Apple',
      A = 'ASUS',
      I = 'BlackBerry',
      L = 'Browser',
      D = 'Chrome',
      N = 'Edge',
      B = 'Firefox',
      j = 'Google',
      F = 'Huawei',
      z = 'LG',
      q = 'Microsoft',
      fe = 'Motorola',
      J = 'Opera',
      ae = 'Samsung',
      ve = 'Sharp',
      ye = 'Sony',
      G = 'Xiaomi',
      Ae = 'Zebra',
      Re = 'Facebook',
      _e = 'Chromium OS',
      ft = 'Mac OS',
      It = function (ne, be) {
        var ee = {};
        for (var he in ne)
          be[he] && be[he].length % 2 === 0
            ? (ee[he] = be[he].concat(ne[he]))
            : (ee[he] = ne[he]);
        return ee;
      },
      je = function (ne) {
        for (var be = {}, ee = 0; ee < ne.length; ee++)
          be[ne[ee].toUpperCase()] = ne[ee];
        return be;
      },
      Qe = function (ne, be) {
        return typeof ne === u ? pt(be).indexOf(pt(ne)) !== -1 : !1;
      },
      pt = function (ne) {
        return ne.toLowerCase();
      },
      bn = function (ne) {
        return typeof ne === u ? ne.replace(/[^\d\.]/g, i).split('.')[0] : n;
      },
      xt = function (ne, be) {
        if (typeof ne === u)
          return (
            (ne = ne.replace(/^\s\s*/, i)),
            typeof be === l ? ne : ne.substring(0, T)
          );
      },
      or = function (ne, be) {
        for (var ee = 0, he, Y, St, xe, oe, tt; ee < be.length && !oe; ) {
          var Gn = be[ee],
            ri = be[ee + 1];
          for (he = Y = 0; he < Gn.length && !oe && Gn[he]; )
            if (((oe = Gn[he++].exec(ne)), oe))
              for (St = 0; St < ri.length; St++)
                (tt = oe[++Y]),
                  (xe = ri[St]),
                  typeof xe === c && xe.length > 0
                    ? xe.length === 2
                      ? typeof xe[1] == a
                        ? (this[xe[0]] = xe[1].call(this, tt))
                        : (this[xe[0]] = xe[1])
                      : xe.length === 3
                        ? typeof xe[1] === a && !(xe[1].exec && xe[1].test)
                          ? (this[xe[0]] = tt ? xe[1].call(this, tt, xe[2]) : n)
                          : (this[xe[0]] = tt ? tt.replace(xe[1], xe[2]) : n)
                        : xe.length === 4 &&
                          (this[xe[0]] = tt
                            ? xe[3].call(this, tt.replace(xe[1], xe[2]))
                            : n)
                    : (this[xe] = tt || n);
          ee += 2;
        }
      },
      Ir = function (ne, be) {
        for (var ee in be)
          if (typeof be[ee] === c && be[ee].length > 0) {
            for (var he = 0; he < be[ee].length; he++)
              if (Qe(be[ee][he], ne)) return ee === s ? n : ee;
          } else if (Qe(be[ee], ne)) return ee === s ? n : ee;
        return ne;
      },
      Gr = {
        '1.0': '/8',
        1.2: '/1',
        1.3: '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/'
      },
      wt = {
        ME: '4.90',
        'NT 3.11': 'NT3.51',
        'NT 4.0': 'NT4.0',
        2e3: 'NT 5.0',
        XP: ['NT 5.1', 'NT 5.2'],
        Vista: 'NT 6.0',
        7: 'NT 6.1',
        8: 'NT 6.2',
        8.1: 'NT 6.3',
        10: ['NT 6.4', 'NT 10.0'],
        RT: 'ARM'
      },
      Ht = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [v, [m, 'Chrome']],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [v, [m, 'Edge']],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          ],
          [m, v],
          [/opios[\/ ]+([\w\.]+)/i],
          [v, [m, J + ' Mini']],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [v, [m, J + ' GX']],
          [/\bopr\/([\w\.]+)/i],
          [v, [m, J]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [v, [m, 'Baidu']],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            /(heytap|ovi)browser\/([\d\.]+)/i,
            /(weibo)__([\d\.]+)/i
          ],
          [m, v],
          [/\bddg\/([\w\.]+)/i],
          [v, [m, 'DuckDuckGo']],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [v, [m, 'UC' + L]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
          ],
          [v, [m, 'WeChat']],
          [/konqueror\/([\w\.]+)/i],
          [v, [m, 'Konqueror']],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [v, [m, 'IE']],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [v, [m, 'Yandex']],
          [/slbrowser\/([\w\.]+)/i],
          [v, [m, 'Smart Lenovo ' + L]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[m, /(.+)/, '$1 Secure ' + L], v],
          [/\bfocus\/([\w\.]+)/i],
          [v, [m, B + ' Focus']],
          [/\bopt\/([\w\.]+)/i],
          [v, [m, J + ' Touch']],
          [/coc_coc\w+\/([\w\.]+)/i],
          [v, [m, 'Coc Coc']],
          [/dolfin\/([\w\.]+)/i],
          [v, [m, 'Dolphin']],
          [/coast\/([\w\.]+)/i],
          [v, [m, J + ' Coast']],
          [/miuibrowser\/([\w\.]+)/i],
          [v, [m, 'MIUI ' + L]],
          [/fxios\/([-\w\.]+)/i],
          [v, [m, B]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[m, '360 ' + L]],
          [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
          [[m, /(.+)/, '$1 ' + L], v],
          [/samsungbrowser\/([\w\.]+)/i],
          [v, [m, ae + ' Internet']],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[m, /_/g, ' '], v],
          [/metasr[\/ ]?([\d\.]+)/i],
          [v, [m, 'Sogou Explorer']],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[m, 'Sogou Mobile'], v],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
          ],
          [m, v],
          [/(lbbrowser)/i, /\[(linkedin)app\]/i],
          [m],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[m, Re], v],
          [
            /(Klarna)\/([\w\.]+)/i,
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(alipay)client\/([\w\.]+)/i,
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
          ],
          [m, v],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [v, [m, 'GSA']],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [v, [m, 'TikTok']],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [v, [m, D + ' Headless']],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[m, D + ' WebView'], v],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [v, [m, 'Android ' + L]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [m, v],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [v, [m, 'Mobile Safari']],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [v, m],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [m, [v, Ir, Gr]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [m, v],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[m, 'Netscape'], v],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [v, [m, B + ' Reality']],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
            /panasonic;(viera)/i
          ],
          [m, v],
          [/(cobalt)\/([\w\.]+)/i],
          [m, [v, /master.|lts./, '']]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[x, 'amd64']],
          [/(ia32(?=;))/i],
          [[x, pt]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[x, 'ia32']],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[x, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[x, 'armhf']],
          [/windows (ce|mobile); ppc;/i],
          [[x, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[x, /ower/, i, pt]],
          [/(sun4\w)[;\)]/i],
          [[x, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          ],
          [[x, pt]]
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [d, [h, ae], [p, y]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [d, [h, ae], [p, g]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [d, [h, k], [p, g]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [d, [h, k], [p, y]],
          [/(macintosh);/i],
          [d, [h, k]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [d, [h, ve], [p, g]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [d, [h, F], [p, y]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [d, [h, F], [p, g]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
          ],
          [
            [d, /_/g, ' '],
            [h, G],
            [p, g]
          ],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          ],
          [
            [d, /_/g, ' '],
            [h, G],
            [p, y]
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [d, [h, 'OPPO'], [p, g]],
          [/\b(opd2\d{3}a?) bui/i],
          [d, [h, 'OPPO'], [p, y]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [d, [h, 'Vivo'], [p, g]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [d, [h, 'Realme'], [p, g]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [d, [h, fe], [p, g]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [d, [h, fe], [p, y]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [d, [h, z], [p, y]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [d, [h, z], [p, g]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [d, [h, 'Lenovo'], [p, y]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [d, /_/g, ' '],
            [h, 'Nokia'],
            [p, g]
          ],
          [/(pixel c)\b/i],
          [d, [h, j], [p, y]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [d, [h, j], [p, g]],
          [
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [d, [h, ye], [p, g]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [d, 'Xperia Tablet'],
            [h, ye],
            [p, y]
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [d, [h, 'OnePlus'], [p, g]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i
          ],
          [d, [h, R], [p, y]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [d, /(.+)/g, 'Fire Phone $1'],
            [h, R],
            [p, g]
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [d, h, [p, y]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [d, [h, I], [p, g]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [d, [h, A], [p, y]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [d, [h, A], [p, g]],
          [/(nexus 9)/i],
          [d, [h, 'HTC'], [p, y]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
          ],
          [h, [d, /_/g, ' '], [p, g]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [d, [h, 'Acer'], [p, y]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [d, [h, 'Meizu'], [p, g]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [d, [h, 'Ulefone'], [p, g]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i
          ],
          [h, d, [p, g]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i
          ],
          [h, d, [p, y]],
          [/(surface duo)/i],
          [d, [h, q], [p, y]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [d, [h, 'Fairphone'], [p, g]],
          [/(u304aa)/i],
          [d, [h, 'AT&T'], [p, g]],
          [/\bsie-(\w*)/i],
          [d, [h, 'Siemens'], [p, g]],
          [/\b(rct\w+) b/i],
          [d, [h, 'RCA'], [p, y]],
          [/\b(venue[\d ]{2,7}) b/i],
          [d, [h, 'Dell'], [p, y]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [d, [h, 'Verizon'], [p, y]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [d, [h, 'Barnes & Noble'], [p, y]],
          [/\b(tm\d{3}\w+) b/i],
          [d, [h, 'NuVision'], [p, y]],
          [/\b(k88) b/i],
          [d, [h, 'ZTE'], [p, y]],
          [/\b(nx\d{3}j) b/i],
          [d, [h, 'ZTE'], [p, g]],
          [/\b(gen\d{3}) b.+49h/i],
          [d, [h, 'Swiss'], [p, g]],
          [/\b(zur\d{3}) b/i],
          [d, [h, 'Swiss'], [p, y]],
          [/\b((zeki)?tb.*\b) b/i],
          [d, [h, 'Zeki'], [p, y]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[h, 'Dragon Touch'], d, [p, y]],
          [/\b(ns-?\w{0,9}) b/i],
          [d, [h, 'Insignia'], [p, y]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [d, [h, 'NextBook'], [p, y]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[h, 'Voice'], d, [p, g]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[h, 'LvTel'], d, [p, g]],
          [/\b(ph-1) /i],
          [d, [h, 'Essential'], [p, g]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [d, [h, 'Envizen'], [p, y]],
          [/\b(trio[-\w\. ]+) b/i],
          [d, [h, 'MachSpeed'], [p, y]],
          [/\btu_(1491) b/i],
          [d, [h, 'Rotor'], [p, y]],
          [/(shield[\w ]+) b/i],
          [d, [h, 'Nvidia'], [p, y]],
          [/(sprint) (\w+)/i],
          [h, d, [p, g]],
          [/(kin\.[onetw]{3})/i],
          [
            [d, /\./g, ' '],
            [h, q],
            [p, g]
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [d, [h, Ae], [p, y]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [d, [h, Ae], [p, g]],
          [/smart-tv.+(samsung)/i],
          [h, [p, E]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [d, /^/, 'SmartTV'],
            [h, ae],
            [p, E]
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [h, z],
            [p, E]
          ],
          [/(apple) ?tv/i],
          [h, [d, k + ' TV'], [p, E]],
          [/crkey/i],
          [
            [d, D + 'cast'],
            [h, j],
            [p, E]
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [d, [h, R], [p, E]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [d, [h, ve], [p, E]],
          [/(bravia[\w ]+)( bui|\))/i],
          [d, [h, ye], [p, E]],
          [/(mitv-\w{5}) bui/i],
          [d, [h, G], [p, E]],
          [/Hbbtv.*(technisat) (.*);/i],
          [h, d, [p, E]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          ],
          [
            [h, xt],
            [d, xt],
            [p, E]
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[p, E]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [h, d, [p, b]],
          [/droid.+; (shield) bui/i],
          [d, [h, 'Nvidia'], [p, b]],
          [/(playstation [345portablevi]+)/i],
          [d, [h, ye], [p, b]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [d, [h, q], [p, b]],
          [/((pebble))app/i],
          [h, d, [p, S]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [d, [h, k], [p, S]],
          [/droid.+; (glass) \d/i],
          [d, [h, j], [p, S]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [d, [h, Ae], [p, S]],
          [/(quest( \d| pro)?)/i],
          [d, [h, Re], [p, S]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [h, [p, C]],
          [/(aeobc)\b/i],
          [d, [h, R], [p, C]],
          [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
          [d, [p, g]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [d, [p, y]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[p, y]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[p, g]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [d, [h, 'Generic']]
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [v, [m, N + 'HTML']],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [v, [m, 'Blink']],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i
          ],
          [m, v],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [v, m]
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [m, v],
          [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
          [m, [v, Ir, wt]],
          [
            /windows nt 6\.2; (arm)/i,
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [
            [v, Ir, wt],
            [m, 'Windows']
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [
            [v, /_/g, '.'],
            [m, 'iOS']
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [m, ft],
            [v, /_/g, '.']
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [v, m],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i
          ],
          [m, v],
          [/\(bb(10);/i],
          [v, [m, I]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [v, [m, 'Symbian']],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          ],
          [v, [m, B + ' OS']],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [v, [m, 'webOS']],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [v, [m, 'watchOS']],
          [/crkey\/([\d\.]+)/i],
          [v, [m, D + 'cast']],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [[m, _e], v],
          [
            /panasonic;(viera)/i,
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i
          ],
          [m, v],
          [/(sunos) ?([\w\.\d]*)/i],
          [[m, 'Solaris'], v],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i
          ],
          [m, v]
        ]
      },
      at = function (ne, be) {
        if ((typeof ne === c && ((be = ne), (ne = n)), !(this instanceof at)))
          return new at(ne, be).getResult();
        var ee = typeof r !== l && r.navigator ? r.navigator : n,
          he = ne || (ee && ee.userAgent ? ee.userAgent : i),
          Y = ee && ee.userAgentData ? ee.userAgentData : n,
          St = be ? It(Ht, be) : Ht,
          xe = ee && ee.userAgent == he;
        return (
          (this.getBrowser = function () {
            var oe = {};
            return (
              (oe[m] = n),
              (oe[v] = n),
              or.call(oe, he, St.browser),
              (oe[f] = bn(oe[v])),
              xe &&
                ee &&
                ee.brave &&
                typeof ee.brave.isBrave == a &&
                (oe[m] = 'Brave'),
              oe
            );
          }),
          (this.getCPU = function () {
            var oe = {};
            return (oe[x] = n), or.call(oe, he, St.cpu), oe;
          }),
          (this.getDevice = function () {
            var oe = {};
            return (
              (oe[h] = n),
              (oe[d] = n),
              (oe[p] = n),
              or.call(oe, he, St.device),
              xe && !oe[p] && Y && Y.mobile && (oe[p] = g),
              xe &&
                oe[d] == 'Macintosh' &&
                ee &&
                typeof ee.standalone !== l &&
                ee.maxTouchPoints &&
                ee.maxTouchPoints > 2 &&
                ((oe[d] = 'iPad'), (oe[p] = y)),
              oe
            );
          }),
          (this.getEngine = function () {
            var oe = {};
            return (oe[m] = n), (oe[v] = n), or.call(oe, he, St.engine), oe;
          }),
          (this.getOS = function () {
            var oe = {};
            return (
              (oe[m] = n),
              (oe[v] = n),
              or.call(oe, he, St.os),
              xe &&
                !oe[m] &&
                Y &&
                Y.platform &&
                Y.platform != 'Unknown' &&
                (oe[m] = Y.platform
                  .replace(/chrome os/i, _e)
                  .replace(/macos/i, ft)),
              oe
            );
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          }),
          (this.getUA = function () {
            return he;
          }),
          (this.setUA = function (oe) {
            return (
              (he = typeof oe === u && oe.length > T ? xt(oe, T) : oe), this
            );
          }),
          this.setUA(he),
          this
        );
      };
    (at.VERSION = o),
      (at.BROWSER = je([m, v, f])),
      (at.CPU = je([x])),
      (at.DEVICE = je([d, h, p, b, g, E, y, S, C])),
      (at.ENGINE = at.OS = je([m, v])),
      e.exports && (t = e.exports = at),
      (t.UAParser = at);
    var qt = typeof r !== l && (r.jQuery || r.Zepto);
    if (qt && !qt.ua) {
      var st = new at();
      (qt.ua = st.getResult()),
        (qt.ua.get = function () {
          return st.getUA();
        }),
        (qt.ua.set = function (ne) {
          st.setUA(ne);
          var be = st.getResult();
          for (var ee in be) qt.ua[ee] = be[ee];
        });
    }
  })(typeof window == 'object' ? window : $w);
})(_u, _u.exports);
var uI = _u.exports;
Object.defineProperty(K, '__esModule', { value: !0 });
function dI(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var kt = w,
  Fe = dI(kt),
  zb = uI,
  gn = new zb(),
  Ot = gn.getBrowser(),
  fI = gn.getCPU(),
  nr = gn.getDevice(),
  nf = gn.getEngine(),
  vn = gn.getOS(),
  Ms = gn.getUA(),
  Ub = function (t) {
    return gn.setUA(t);
  },
  Os = function (t) {
    if (!t) {
      console.error('No userAgent string was provided');
      return;
    }
    var r = new zb(t);
    return {
      UA: r,
      browser: r.getBrowser(),
      cpu: r.getCPU(),
      device: r.getDevice(),
      engine: r.getEngine(),
      os: r.getOS(),
      ua: r.getUA(),
      setUserAgent: function (o) {
        return r.setUA(o);
      }
    };
  },
  Hb = Object.freeze({
    ClientUAInstance: gn,
    browser: Ot,
    cpu: fI,
    device: nr,
    engine: nf,
    os: vn,
    ua: Ms,
    setUa: Ub,
    parseUserAgent: Os
  });
function mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mm(Object(r), !0).forEach(function (n) {
          vI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ii(e) {
  '@babel/helpers - typeof';
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Ii = function (t) {
          return typeof t;
        })
      : (Ii = function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        }),
    Ii(e)
  );
}
function hI(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function mI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function gI(e, t, r) {
  return t && mI(e.prototype, t), e;
}
function vI(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
function Du() {
  return (
    (Du =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Du.apply(this, arguments)
  );
}
function yI(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && Lu(e, t);
}
function Iu(e) {
  return (
    (Iu = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Iu(e)
  );
}
function Lu(e, t) {
  return (
    (Lu =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Lu(e, t)
  );
}
function bI(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function yr(e, t) {
  if (e == null) return {};
  var r = bI(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function xI(e, t) {
  if (t && (typeof t == 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return xa(e);
}
function wI(e, t) {
  return SI(e) || EI(e, t) || CI(e, t) || PI();
}
function SI(e) {
  if (Array.isArray(e)) return e;
}
function EI(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (r != null) {
    var n = [],
      o = !0,
      i = !1,
      s,
      a;
    try {
      for (
        r = r.call(e);
        !(o = (s = r.next()).done) && (n.push(s.value), !(t && n.length === t));
        o = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function CI(e, t) {
  if (e) {
    if (typeof e == 'string') return gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gm(e, t);
  }
}
function gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Pt = {
    Mobile: 'mobile',
    Tablet: 'tablet',
    SmartTv: 'smarttv',
    Console: 'console',
    Wearable: 'wearable',
    Embedded: 'embedded',
    Browser: void 0
  },
  Wt = {
    Chrome: 'Chrome',
    Firefox: 'Firefox',
    Opera: 'Opera',
    Yandex: 'Yandex',
    Safari: 'Safari',
    InternetExplorer: 'Internet Explorer',
    Edge: 'Edge',
    Chromium: 'Chromium',
    Ie: 'IE',
    MobileSafari: 'Mobile Safari',
    EdgeChromium: 'Edge Chromium',
    MIUI: 'MIUI Browser',
    SamsungBrowser: 'Samsung Browser'
  },
  ei = {
    IOS: 'iOS',
    Android: 'Android',
    WindowsPhone: 'Windows Phone',
    Windows: 'Windows',
    MAC_OS: 'Mac OS'
  },
  TI = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1
  },
  RI = function (t) {
    switch (t) {
      case Pt.Mobile:
        return { isMobile: !0 };
      case Pt.Tablet:
        return { isTablet: !0 };
      case Pt.SmartTv:
        return { isSmartTV: !0 };
      case Pt.Console:
        return { isConsole: !0 };
      case Pt.Wearable:
        return { isWearable: !0 };
      case Pt.Browser:
        return { isBrowser: !0 };
      case Pt.Embedded:
        return { isEmbedded: !0 };
      default:
        return TI;
    }
  },
  kI = function (t) {
    return Ub(t);
  },
  ce = function (t) {
    var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'none';
    return t || r;
  },
  of = function () {
    return typeof window < 'u' && (window.navigator || navigator)
      ? window.navigator || navigator
      : !1;
  },
  sf = function (t) {
    var r = of();
    return (
      r &&
      r.platform &&
      (r.platform.indexOf(t) !== -1 ||
        (r.platform === 'MacIntel' && r.maxTouchPoints > 1 && !window.MSStream))
    );
  },
  MI = function (t, r, n, o, i) {
    return {
      isBrowser: t,
      browserMajorVersion: ce(r.major),
      browserFullVersion: ce(r.version),
      browserName: ce(r.name),
      engineName: ce(n.name),
      engineVersion: ce(n.version),
      osName: ce(o.name),
      osVersion: ce(o.version),
      userAgent: ce(i)
    };
  },
  vm = function (t, r, n, o) {
    return pI({}, t, {
      vendor: ce(r.vendor),
      model: ce(r.model),
      os: ce(n.name),
      osVersion: ce(n.version),
      ua: ce(o)
    });
  },
  OI = function (t, r, n, o) {
    return {
      isSmartTV: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  AI = function (t, r, n, o) {
    return {
      isConsole: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  _I = function (t, r, n, o) {
    return {
      isWearable: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  DI = function (t, r, n, o, i) {
    return {
      isEmbedded: t,
      vendor: ce(r.vendor),
      model: ce(r.model),
      engineName: ce(n.name),
      engineVersion: ce(n.version),
      osName: ce(o.name),
      osVersion: ce(o.version),
      userAgent: ce(i)
    };
  };
function II(e) {
  var t = e ? Os(e) : Hb,
    r = t.device,
    n = t.browser,
    o = t.engine,
    i = t.os,
    s = t.ua,
    a = RI(r.type),
    l = a.isBrowser,
    c = a.isMobile,
    u = a.isTablet,
    f = a.isSmartTV,
    d = a.isConsole,
    m = a.isWearable,
    p = a.isEmbedded;
  if (l) return MI(l, n, o, i, s);
  if (f) return OI(f, o, i, s);
  if (d) return AI(d, o, i, s);
  if (c || u) return vm(a, r, i, s);
  if (m) return _I(m, o, i, s);
  if (p) return DI(p, r, o, i, s);
}
var qb = function (t) {
    var r = t.type;
    return r === Pt.Mobile;
  },
  Kb = function (t) {
    var r = t.type;
    return r === Pt.Tablet;
  },
  Yb = function (t) {
    var r = t.type;
    return r === Pt.Mobile || r === Pt.Tablet;
  },
  Gb = function (t) {
    var r = t.type;
    return r === Pt.SmartTv;
  },
  Ja = function (t) {
    var r = t.type;
    return r === Pt.Browser;
  },
  Xb = function (t) {
    var r = t.type;
    return r === Pt.Wearable;
  },
  Qb = function (t) {
    var r = t.type;
    return r === Pt.Console;
  },
  Zb = function (t) {
    var r = t.type;
    return r === Pt.Embedded;
  },
  Jb = function (t) {
    var r = t.vendor;
    return ce(r);
  },
  e0 = function (t) {
    var r = t.model;
    return ce(r);
  },
  t0 = function (t) {
    var r = t.type;
    return ce(r, 'browser');
  },
  r0 = function (t) {
    var r = t.name;
    return r === ei.Android;
  },
  n0 = function (t) {
    var r = t.name;
    return r === ei.Windows;
  },
  o0 = function (t) {
    var r = t.name;
    return r === ei.MAC_OS;
  },
  i0 = function (t) {
    var r = t.name;
    return r === ei.WindowsPhone;
  },
  s0 = function (t) {
    var r = t.name;
    return r === ei.IOS;
  },
  a0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  l0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  c0 = function (t) {
    var r = t.name;
    return r === Wt.Chrome;
  },
  u0 = function (t) {
    var r = t.name;
    return r === Wt.Firefox;
  },
  d0 = function (t) {
    var r = t.name;
    return r === Wt.Chromium;
  },
  el = function (t) {
    var r = t.name;
    return r === Wt.Edge;
  },
  f0 = function (t) {
    var r = t.name;
    return r === Wt.Yandex;
  },
  p0 = function (t) {
    var r = t.name;
    return r === Wt.Safari || r === Wt.MobileSafari;
  },
  h0 = function (t) {
    var r = t.name;
    return r === Wt.MobileSafari;
  },
  m0 = function (t) {
    var r = t.name;
    return r === Wt.Opera;
  },
  g0 = function (t) {
    var r = t.name;
    return r === Wt.InternetExplorer || r === Wt.Ie;
  },
  v0 = function (t) {
    var r = t.name;
    return r === Wt.MIUI;
  },
  y0 = function (t) {
    var r = t.name;
    return r === Wt.SamsungBrowser;
  },
  b0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  x0 = function (t) {
    var r = t.major;
    return ce(r);
  },
  w0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  S0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  E0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  C0 = function () {
    var t = of(),
      r = t && t.userAgent && t.userAgent.toLowerCase();
    return typeof r == 'string' ? /electron/.test(r) : !1;
  },
  Ro = function (t) {
    return typeof t == 'string' && t.indexOf('Edg/') !== -1;
  },
  P0 = function () {
    var t = of();
    return (
      t &&
      (/iPad|iPhone|iPod/.test(t.platform) ||
        (t.platform === 'MacIntel' && t.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  },
  Pr = function () {
    return sf('iPad');
  },
  T0 = function () {
    return sf('iPhone');
  },
  R0 = function () {
    return sf('iPod');
  },
  k0 = function (t) {
    return ce(t);
  };
function M0(e) {
  var t = e || Hb,
    r = t.device,
    n = t.browser,
    o = t.os,
    i = t.engine,
    s = t.ua;
  return {
    isSmartTV: Gb(r),
    isConsole: Qb(r),
    isWearable: Xb(r),
    isEmbedded: Zb(r),
    isMobileSafari: h0(n) || Pr(),
    isChromium: d0(n),
    isMobile: Yb(r) || Pr(),
    isMobileOnly: qb(r),
    isTablet: Kb(r) || Pr(),
    isBrowser: Ja(r),
    isDesktop: Ja(r),
    isAndroid: r0(o),
    isWinPhone: i0(o),
    isIOS: s0(o) || Pr(),
    isChrome: c0(n),
    isFirefox: u0(n),
    isSafari: p0(n),
    isOpera: m0(n),
    isIE: g0(n),
    osVersion: a0(o),
    osName: l0(o),
    fullBrowserVersion: b0(n),
    browserVersion: x0(n),
    browserName: w0(n),
    mobileVendor: Jb(r),
    mobileModel: e0(r),
    engineName: S0(i),
    engineVersion: E0(i),
    getUA: k0(s),
    isEdge: el(n) || Ro(s),
    isYandex: f0(n),
    deviceType: t0(r),
    isIOS13: P0(),
    isIPad13: Pr(),
    isIPhone13: T0(),
    isIPod13: R0(),
    isElectron: C0(),
    isEdgeChromium: Ro(s),
    isLegacyEdge: el(n) && !Ro(s),
    isWindows: n0(o),
    isMacOs: o0(o),
    isMIUI: v0(n),
    isSamsungBrowser: y0(n)
  };
}
var O0 = Gb(nr),
  A0 = Qb(nr),
  _0 = Xb(nr),
  LI = Zb(nr),
  $I = h0(Ot) || Pr(),
  jI = d0(Ot),
  rc = Yb(nr) || Pr(),
  D0 = qb(nr),
  I0 = Kb(nr) || Pr(),
  L0 = Ja(nr),
  BI = Ja(nr),
  $0 = r0(vn),
  j0 = i0(vn),
  B0 = s0(vn) || Pr(),
  NI = c0(Ot),
  FI = u0(Ot),
  VI = p0(Ot),
  WI = m0(Ot),
  N0 = g0(Ot),
  zI = a0(vn),
  UI = l0(vn),
  HI = b0(Ot),
  qI = x0(Ot),
  KI = w0(Ot),
  YI = Jb(nr),
  GI = e0(nr),
  XI = S0(nf),
  QI = E0(nf),
  ZI = k0(Ms),
  JI = el(Ot) || Ro(Ms),
  eL = f0(Ot),
  tL = t0(nr),
  rL = P0(),
  nL = Pr(),
  oL = T0(),
  iL = R0(),
  sL = C0(),
  aL = Ro(Ms),
  lL = el(Ot) && !Ro(Ms),
  cL = n0(vn),
  uL = o0(vn),
  dL = v0(Ot),
  fL = y0(Ot),
  pL = function (t) {
    if (!t || typeof t != 'string') {
      console.error('No valid user agent string was provided');
      return;
    }
    var r = Os(t),
      n = r.device,
      o = r.browser,
      i = r.os,
      s = r.engine,
      a = r.ua;
    return M0({ device: n, browser: o, os: i, engine: s, ua: a });
  },
  hL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return $0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  mL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return L0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  gL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return N0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  vL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return B0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  yL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return rc
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  bL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return I0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  xL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return j0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  wL = function (t) {
    var r = t.renderWithFragment,
      n = t.children;
    t.viewClassName, t.style;
    var o = yr(t, ['renderWithFragment', 'children', 'viewClassName', 'style']);
    return D0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  SL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return O0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  EL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return A0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  CL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return _0
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  PL = function (t) {
    var r = t.renderWithFragment,
      n = t.children;
    t.viewClassName, t.style;
    var o = t.condition,
      i = yr(t, [
        'renderWithFragment',
        'children',
        'viewClassName',
        'style',
        'condition'
      ]);
    return o
      ? r
        ? Fe.createElement(kt.Fragment, null, n)
        : Fe.createElement('div', i, n)
      : null;
  };
function TL(e) {
  return (function (t) {
    yI(r, t);
    function r(n) {
      var o;
      return (
        hI(this, r),
        (o = xI(this, Iu(r).call(this, n))),
        (o.isEventListenerAdded = !1),
        (o.handleOrientationChange = o.handleOrientationChange.bind(xa(o))),
        (o.onOrientationChange = o.onOrientationChange.bind(xa(o))),
        (o.onPageLoad = o.onPageLoad.bind(xa(o))),
        (o.state = { isLandscape: !1, isPortrait: !1 }),
        o
      );
    }
    return (
      gI(r, [
        {
          key: 'handleOrientationChange',
          value: function () {
            this.isEventListenerAdded || (this.isEventListenerAdded = !0);
            var o = window.innerWidth > window.innerHeight ? 90 : 0;
            this.setState({ isPortrait: o === 0, isLandscape: o === 90 });
          }
        },
        {
          key: 'onOrientationChange',
          value: function () {
            this.handleOrientationChange();
          }
        },
        {
          key: 'onPageLoad',
          value: function () {
            this.handleOrientationChange();
          }
        },
        {
          key: 'componentDidMount',
          value: function () {
            (typeof window > 'u' ? 'undefined' : Ii(window)) !== void 0 &&
              rc &&
              (this.isEventListenerAdded
                ? window.removeEventListener('load', this.onPageLoad, !1)
                : (this.handleOrientationChange(),
                  window.addEventListener('load', this.onPageLoad, !1)),
              window.addEventListener('resize', this.onOrientationChange, !1));
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            window.removeEventListener('resize', this.onOrientationChange, !1);
          }
        },
        {
          key: 'render',
          value: function () {
            return Fe.createElement(
              e,
              Du({}, this.props, {
                isLandscape: this.state.isLandscape,
                isPortrait: this.state.isPortrait
              })
            );
          }
        }
      ]),
      r
    );
  })(Fe.Component);
}
function RL() {
  var e = kt.useState(function () {
      var i = window.innerWidth > window.innerHeight ? 90 : 0;
      return {
        isPortrait: i === 0,
        isLandscape: i === 90,
        orientation: i === 0 ? 'portrait' : 'landscape'
      };
    }),
    t = wI(e, 2),
    r = t[0],
    n = t[1],
    o = kt.useCallback(
      function () {
        var i = window.innerWidth > window.innerHeight ? 90 : 0,
          s = {
            isPortrait: i === 0,
            isLandscape: i === 90,
            orientation: i === 0 ? 'portrait' : 'landscape'
          };
        r.orientation !== s.orientation && n(s);
      },
      [r.orientation]
    );
  return (
    kt.useEffect(
      function () {
        return (
          (typeof window > 'u' ? 'undefined' : Ii(window)) !== void 0 &&
            rc &&
            (o(),
            window.addEventListener('load', o, !1),
            window.addEventListener('resize', o, !1)),
          function () {
            window.removeEventListener('resize', o, !1),
              window.removeEventListener('load', o, !1);
          }
        );
      },
      [o]
    ),
    r
  );
}
function F0(e) {
  var t = e || window.navigator.userAgent;
  return Os(t);
}
function kL(e) {
  var t = e || window.navigator.userAgent,
    r = F0(t),
    n = M0(r);
  return [n, r];
}
K.AndroidView = hL;
K.BrowserTypes = Wt;
var ML = (K.BrowserView = mL);
K.ConsoleView = EL;
K.CustomView = PL;
K.IEView = gL;
K.IOSView = vL;
K.MobileOnlyView = wL;
var OL = (K.MobileView = yL);
K.OsTypes = ei;
K.SmartTVView = SL;
K.TabletView = bL;
K.WearableView = CL;
K.WinPhoneView = xL;
K.browserName = KI;
K.browserVersion = qI;
K.deviceDetect = II;
K.deviceType = tL;
K.engineName = XI;
K.engineVersion = QI;
K.fullBrowserVersion = HI;
K.getSelectorsByUserAgent = pL;
K.getUA = ZI;
K.isAndroid = $0;
K.isBrowser = L0;
K.isChrome = NI;
K.isChromium = jI;
K.isConsole = A0;
K.isDesktop = BI;
K.isEdge = JI;
K.isEdgeChromium = aL;
K.isElectron = sL;
K.isEmbedded = LI;
K.isFirefox = FI;
K.isIE = N0;
K.isIOS = B0;
K.isIOS13 = rL;
K.isIPad13 = nL;
K.isIPhone13 = oL;
K.isIPod13 = iL;
K.isLegacyEdge = lL;
K.isMIUI = dL;
K.isMacOs = uL;
K.isMobile = rc;
K.isMobileOnly = D0;
K.isMobileSafari = $I;
K.isOpera = WI;
K.isSafari = VI;
K.isSamsungBrowser = fL;
K.isSmartTV = O0;
K.isTablet = I0;
K.isWearable = _0;
K.isWinPhone = j0;
K.isWindows = cL;
K.isYandex = eL;
K.mobileModel = GI;
K.mobileVendor = YI;
K.osName = UI;
K.osVersion = zI;
K.parseUserAgent = Os;
K.setUserAgent = kI;
K.useDeviceData = F0;
K.useDeviceSelectors = kL;
K.useMobileOrientation = RL;
K.withOrientationChange = TL;
var Ic = {};
const AL = Dr(lM);
var ym;
function As() {
  return (
    ym ||
      ((ym = 1),
      (function (e) {
        'use client';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            }
          });
        var t = AL;
      })(Ic)),
    Ic
  );
}
var af = {},
  _L = qn;
Object.defineProperty(af, '__esModule', { value: !0 });
var $u = (af.default = void 0),
  DL = _L(As()),
  IL = P;
$u = af.default = (0, DL.default)(
  (0, IL.jsx)('path', { d: 'm7 10 5 5 5-5z' }),
  'ArrowDropDownOutlined'
);
var lf = {},
  LL = qn;
Object.defineProperty(lf, '__esModule', { value: !0 });
var cf = (lf.default = void 0),
  $L = LL(As()),
  jL = P;
cf = lf.default = (0, $L.default)(
  (0, jL.jsx)('circle', { cx: '12', cy: '12', r: '8' }),
  'FiberManualRecord'
);
const uf = ({ item: e, level: t }) => {
  const r = dt(),
    n = Wo(),
    { pathname: o } = hn(),
    i = dn((c) => c.customization),
    s = es(r.breakpoints.down('lg'));
  e.icon
    ? e.icon
    : (i.isOpen.findIndex((c) => c === (e == null ? void 0 : e.id)) > -1,
      i.isOpen.findIndex((c) => c === (e == null ? void 0 : e.id)) > -1,
      t > 0);
  let a = '_self';
  e.target && (a = '_blank'),
    w.forwardRef((c, u) => P.jsx(_n, { ref: u, ...c, to: e.url, target: a })),
    e != null && e.external && e.url;
  const l = (c) => {
    n({ type: La, id: c }), s && n({ type: md, opened: !1 });
  };
  return (
    w.useEffect(() => {
      o.includes(e.url) && n({ type: La, id: e.id });
    }, [o, e.id, e.url, n]),
    P.jsxs(ss, {
      component: w.forwardRef((c, u) => P.jsx(_n, { ref: u, ...c, to: e.url })),
      sx: {
        borderRadius: `${i.borderRadius}px`,
        alignItems: 'flex-start',
        backgroundColor: t > 1 ? 'transparent !important' : 'inherit',
        py: t > 1 ? 1 : 1.25,
        pl: `${t * 24}px`
      },
      selected: i.isOpen.findIndex((c) => c === e.id) > -1,
      onClick: () => l(e.id),
      children: [
        e.icon &&
          P.jsx(Ga, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18, fontSize: 'large' },
            children: P.jsx('i', { class: e.icon })
          }),
        P.jsx(Xa, {
          primary: P.jsx(Se, {
            variant:
              i.isOpen.findIndex((c) => c === e.id) > -1 ? 'h5' : 'body1',
            color: 'inherit',
            children: e.title
          }),
          secondary:
            e.caption &&
            P.jsx(Se, {
              variant: 'caption',
              sx: { ...r.typography.subMenuCaption },
              display: 'block',
              gutterBottom: !0,
              children: e.caption
            })
        }),
        e.chip &&
          P.jsx(Sb, {
            color: e.chip.color,
            variant: e.chip.variant,
            size: e.chip.size,
            label: e.chip.label,
            avatar: e.chip.avatar && P.jsx(tc, { children: e.chip.avatar })
          })
      ]
    })
  );
};
uf.propTypes = { item: W.object.isRequired, level: W.number.isRequired };
const df = ({ menu: e, level: t }) => {
  var p;
  const r = dt(),
    n = dn((h) => h.customization);
  gs(), Wo(), es(r.breakpoints.down('lg'));
  const [o, i] = w.useState(!1),
    [s, a] = w.useState(null),
    l = () => {
      i(!o), a(s ? null : e.id), e == null || e.id;
    },
    { pathname: c } = hn(),
    u = (h, v) => {
      h.forEach((x) => {
        x.url === c && (i(!0), a(v));
      });
    };
  w.useEffect(() => {
    i(!1),
      a(null),
      e.children &&
        e.children.forEach((h) => {
          var v;
          (v = h.children) != null && v.length && u(h.children, e.id),
            h.url === c && (a(e.id), i(!0));
        });
  }, [c, e.children]);
  const f =
      (p = e.children) == null
        ? void 0
        : p.map((h) => {
            switch (h.type) {
              case 'collapse':
                return P.jsx(df, { menu: h, level: t + 1 }, h.id);
              case 'item':
                return P.jsx(uf, { item: h, level: t + 1 }, h.id);
              default:
                return P.jsx(
                  Se,
                  {
                    variant: 'h6',
                    color: 'error',
                    align: 'center',
                    children: 'Menu Items Error'
                  },
                  h.id
                );
            }
          }),
    d = e.icon,
    m = e.icon
      ? P.jsx(d, {
          strokeWidth: 1.5,
          size: '1.3rem',
          style: { marginTop: 'auto', marginBottom: 'auto' }
        })
      : P.jsx(cf, {
          sx: { width: s === e.id ? 8 : 6, height: s === e.id ? 8 : 6 },
          fontSize: t > 0 ? 'inherit' : 'medium'
        });
  return P.jsxs(P.Fragment, {
    children: [
      P.jsxs(ss, {
        sx: {
          borderRadius: `${n.borderRadius}px`,
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: t > 1 ? 'transparent !important' : 'inherit',
          py: t > 1 ? 1 : 1.25,
          pl: `${t * 24}px`
        },
        selected: s === e.id,
        onClick: l,
        children: [
          P.jsx(Ga, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18 },
            children: m
          }),
          P.jsx(Xa, {
            primary: P.jsx(Se, {
              variant: s === e.id ? 'h5' : 'body1',
              color: 'inherit',
              sx: { my: 'auto' },
              children: e.title
            }),
            secondary:
              e.caption &&
              P.jsx(Se, {
                variant: 'caption',
                sx: { ...r.typography.subMenuCaption },
                display: 'block',
                gutterBottom: !0,
                children: e.caption
              })
          }),
          o
            ? P.jsx(ID, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
            : P.jsx(DD, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
        ]
      }),
      P.jsx(Ql, {
        in: o,
        timeout: 'auto',
        unmountOnExit: !0,
        children: P.jsx(tf, {
          component: 'div',
          disablePadding: !0,
          sx: {
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '32px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: r.palette.primary.light
            }
          },
          children: f
        })
      })
    ]
  });
};
df.propTypes = { menu: W.object, level: W.number };
const V0 = ({ item: e }) => {
  var i, s, a;
  dt();
  const [t, r] = de.useState(!1),
    n = () => {
      r(!t);
    },
    o =
      (i = e.children) == null
        ? void 0
        : i.map((l) => {
            switch (l.type) {
              case 'collapse':
                return P.jsx(df, { menu: l, level: 1 }, l.id);
              case 'item':
                return P.jsx(uf, { item: l, level: 1 }, l.id);
              default:
                return P.jsx(
                  Se,
                  {
                    variant: 'h6',
                    color: 'error',
                    align: 'center',
                    children: 'Menu Items Error'
                  },
                  l.id
                );
            }
          });
  return P.jsx(P.Fragment, {
    children: P.jsxs(tf, {
      children: [
        ((s = e.children) == null ? void 0 : s.length) > 1 &&
          P.jsxs(ss, {
            onClick: n,
            children: [
              P.jsx(Se, { variant: 'body1', children: e.title }),
              t
                ? P.jsx($u, { fontSize: 'small' })
                : P.jsx($u, { fontSize: 'small' })
            ]
          }),
        ((a = e.children) == null ? void 0 : a.length) === 1 && o,
        ' ',
        t &&
          P.jsx(Ql, { in: t, timeout: 'auto', unmountOnExit: !0, children: o })
      ]
    })
  });
};
V0.propTypes = { item: W.object };
const BL = { IconDashboard: LD },
  NL = {
    id: 'dashboard',
    type: 'group',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: BL.IconDashboard,
        breadcrumbs: !1
      }
    ]
  },
  FL = { IconKey: jD },
  VL = {
    id: 'pages',
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: FL.IconKey,
        children: [
          {
            id: 'login3',
            title: 'Login',
            type: 'item',
            url: '/pages/login/login3',
            target: !0
          },
          {
            id: 'register3',
            title: 'Register',
            type: 'item',
            url: '/pages/register/register3',
            target: !0
          }
        ]
      }
    ]
  },
  WL = { IconBrandChrome: _D, IconHelp: $D },
  zL = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: WL.IconBrandChrome,
        breadcrumbs: !1
      }
    ]
  },
  UL = {
    IconTypography: zD,
    IconPalette: FD,
    IconShadow: VD,
    IconWindmill: UD
  },
  HL = {
    id: 'planning',
    caption: 'Start a New Process',
    type: 'group',
    children: [
      {
        title: 'Planning',
        type: 'collapse',
        icon: UL.IconKey,
        children: [
          {
            id: 'NewCollection',
            title: 'Collections ',
            type: 'item',
            url: '/Planning/NewCollection',
            breadcrumbs: !1
          },
          {
            id: 'NewDesign',
            title: 'Create New Design ',
            type: 'item',
            url: '/Planning/NewDesign',
            breadcrumbs: !1
          },
          {
            id: 'PlanningProcess',
            title: 'Create New Process ',
            type: 'item',
            url: '/Planning/PlanningProcess',
            breadcrumbs: !1
          }
        ]
      }
    ]
  },
  Lc = { items: [NL, HL, zL, VL] },
  qL = async (e, t) => {
    try {
      const r = await fetch(
        `https://gecxc.com:449/api/Menu/GetUserMenuByEmpId?empId=${e}`,
        { headers: { Authorization: `Bearer ${t}` } }
      );
      if (!r.ok) throw new Error('Failed to fetch menu items');
      const n = await r.json();
      return console.log('Fetched data:', n.result), n.result;
    } catch (r) {
      throw (console.error('Failed to fetch menu items:', r.message), r);
    }
  },
  bm = ({ empId: e, token: t }) => {
    const [r, n] = w.useState([]),
      [o, i] = w.useState(!0),
      [s, a] = w.useState(null),
      l = gs();
    if (
      (w.useEffect(() => {
        (async () => {
          try {
            const f = await qL(e, t);
            n(f.mainMenuModel),
              i(!1),
              f.mainMenuModel.some((m) => m.defaultUrl === null) &&
                l('/welcome');
          } catch (f) {
            a(f.message), i(!1);
          }
        })();
      }, [e, t, l]),
      o)
    )
      return P.jsx(Se, {
        variant: 'h6',
        align: 'center',
        children: 'Loading...'
      });
    if (s)
      return P.jsx(Se, {
        variant: 'h6',
        color: 'error',
        align: 'center',
        children: s
      });
    const c = r.map((u) => {
      const f = u.subMenus.map((m) => ({
          id: m.subMenuId,
          title: m.subMenuDesc,
          type: 'item',
          url: m.link,
          icon: m.icon
        })),
        d = {
          id: u.mainMenuId,
          title: u.mainMenuDesc,
          type: 'group',
          icon: u.icon,
          children: f
        };
      return P.jsx(V0, { item: d }, d.id);
    });
    return P.jsx(P.Fragment, { children: c });
  },
  JV = 3,
  vo = 260,
  W0 = ({ drawerOpen: e, drawerToggle: t, window: r, empId: n, token: o }) => {
    const i = dt(),
      s = es(i.breakpoints.up('md'));
    console.log(o);
    const a = P.jsxs(P.Fragment, {
        children: [
          P.jsx(lt, {
            sx: { display: { xs: 'block', md: 'none' } },
            children: P.jsx(Ab, {})
          }),
          P.jsx(ML, {
            children: P.jsx(Fb, {
              component: 'div',
              style: {
                height: s ? 'calc(100vh - 88px)' : 'calc(100vh - 56px)',
                paddingLeft: '16px',
                paddingRight: '16px'
              },
              children: P.jsx(bm, { empId: n, token: o })
            })
          }),
          P.jsx(OL, {
            children: P.jsx(lt, {
              sx: { px: 2 },
              children: P.jsx(bm, { empId: n, token: o })
            })
          })
        ]
      }),
      l = r !== void 0 ? () => r.document.body : void 0;
    return P.jsx(lt, {
      component: 'nav',
      sx: {
        backgroundImage:
          'url("https://cdn11.bigcommerce.com/s-hv21hhsv/images/stencil/700x700/products/38611/284805/2e6462c221260668bf7516fe2121ad54__84353.1704082180.jpg?c=2")',
        backgroundSize: 'contain',
        flexShrink: { md: 0 },
        width: s ? vo : 'auto'
      },
      'aria-label': 'mailbox folders',
      children: P.jsx(x_, {
        container: l,
        variant: 'persistent',
        anchor: 'left',
        open: e,
        onClose: t,
        sx: {
          '& .MuiDrawer-paper': {
            width: vo,
            background: i.palette.background.default,
            color: i.palette.text.white,
            backgroundColor: 'darkred',
            backgroundImage:
              'url("https://cdn11.bigcommerce.com/s-hv21hhsv/images/stencil/700x700/products/38611/284805/2e6462c221260668bf7516fe2121ad54__84353.1704082180.jpg?c=2")',
            backgroundSize: 'contain',
            position: 'absolute',
            backgroundRepeat: 'repeat-y',
            height: '100%',
            borderRadius: '17px',
            borderRight: 'none',
            [i.breakpoints.up('xs')]: { top: '84px' }
          }
        },
        ModalProps: { keepMounted: !0 },
        color: 'inherit',
        children: a
      })
    });
  };
W0.propTypes = {
  drawerOpen: W.bool,
  drawerToggle: W.func,
  window: W.object,
  empId: W.string.isRequired,
  token: W.string.isRequired
};
var ff = {},
  KL = qn;
Object.defineProperty(ff, '__esModule', { value: !0 });
var wa = (ff.default = void 0),
  YL = KL(As()),
  xm = P;
wa = ff.default = (0, YL.default)(
  [
    (0, xm.jsx)(
      'path',
      {
        d: 'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z'
      },
      '0'
    ),
    (0, xm.jsx)(
      'path',
      { d: 'M7 5v4H4V5zm13 0v4h-3V5zm0 10v4h-3v-4z', opacity: '.3' },
      '1'
    )
  ],
  'AccountTreeTwoTone'
);
var pf = {},
  GL = qn;
Object.defineProperty(pf, '__esModule', { value: !0 });
var ju = (pf.default = void 0),
  XL = GL(As()),
  QL = P;
ju = pf.default = (0, XL.default)(
  (0, QL.jsx)('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }),
  'Home'
);
var hf = {},
  ZL = qn;
Object.defineProperty(hf, '__esModule', { value: !0 });
var Bu = (hf.default = void 0),
  JL = ZL(As()),
  wm = P;
Bu = hf.default = (0, JL.default)(
  [
    (0, wm.jsx)(
      'path',
      {
        d: 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5z'
      },
      '0'
    ),
    (0, wm.jsx)(
      'path',
      { d: 'M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z', opacity: '.3' },
      '1'
    )
  ],
  'HomeTwoTone'
);
const Ci = ({ title: e }) =>
  P.jsx(Ei, {
    item: !0,
    children: P.jsx(Se, { variant: 'h3', sx: { fontWeight: 500 }, children: e })
  });
Ci.propTypes = { title: W.oneOfType([W.string, W.object]) };
const z0 = ({
  card: e,
  custom: t = !1,
  divider: r = !1,
  heading: n,
  icon: o = !0,
  icons: i,
  links: s,
  maxItems: a,
  rightAlign: l = !0,
  separator: c = Lb,
  title: u = !0,
  titleBottom: f,
  sx: d,
  ...m
}) => {
  const p = dt(),
    h = hn(),
    [v, x] = w.useState(),
    [b, g] = w.useState(),
    y = {
      marginRight: 6,
      marginTop: -2,
      width: '1rem',
      height: '1rem',
      color: p.palette.secondary.main
    },
    E = {
      display: 'flex',
      color: 'grey.900',
      textDecoration: 'none',
      alignContent: 'center',
      alignItems: 'center'
    };
  let S = h.pathname;
  w.useEffect(() => {
    var B;
    (B = Lc == null ? void 0 : Lc.items) == null ||
      B.map(
        (j) => (
          j.type &&
            j.type === 'group' &&
            (j != null && j.url && j.url === S ? (x(j), g(j)) : C(j)),
          !1
        )
      );
  });
  const C = (B) => {
      !t &&
        B.children &&
        B.children.filter(
          (j) => (
            j.type && j.type === 'collapse'
              ? (C(j), j.url === S && (x(j), g(j)))
              : j.type && j.type === 'item' && S === j.url && (x(B), g(j)),
            !1
          )
        );
    },
    T = c,
    R = c
      ? P.jsx(T, { stroke: 1.5, size: '16px' })
      : P.jsx(WD, { stroke: 1.5, size: '16px' });
  let k,
    A,
    I = P.jsx(Se, {}),
    L = '',
    D,
    N;
  if (
    (v &&
      v.type === 'collapse' &&
      ((D = v.icon ? v.icon : wa),
      (k = P.jsxs(Se, {
        ...(v.url && { component: _n, to: v.url }),
        variant: 'subtitle1',
        sx: E,
        color:
          window.location.pathname === v.url
            ? 'text.primary'
            : 'text.secondary',
        children: [i && P.jsx(D, { style: y }), v.title]
      }))),
    !t &&
      v &&
      v.type === 'collapse' &&
      v.breadcrumbs === !0 &&
      (I = P.jsxs(Ka, {
        sx:
          e === !1
            ? { mb: 3, bgcolor: 'transparent', ...d }
            : { mb: 3, bgcolor: 'background.default', ...d },
        ...m,
        children: [
          P.jsx(lt, {
            sx: { p: 2, pl: e === !1 ? 0 : 2 },
            children: P.jsxs(Ei, {
              container: !0,
              direction: l ? 'row' : 'column',
              justifyContent: l ? 'space-between' : 'flex-start',
              alignItems: l ? 'center' : 'flex-start',
              spacing: 1,
              children: [
                u && !f && P.jsx(Ci, { title: v.title }),
                P.jsx(Ei, {
                  item: !0,
                  children: P.jsxs(_c, {
                    'aria-label': 'breadcrumb',
                    maxItems: a || 8,
                    separator: R,
                    sx: {
                      '& .MuiBreadcrumbs-separator': {
                        width: 16,
                        ml: 1.25,
                        mr: 1.25
                      }
                    },
                    children: [
                      P.jsxs(Se, {
                        component: _n,
                        to: '/',
                        color: 'textSecondary',
                        variant: 'subtitle1',
                        sx: E,
                        children: [
                          i && P.jsx(Bu, { style: y }),
                          o &&
                            !i &&
                            P.jsx(ju, { style: { ...y, marginRight: 0 } }),
                          (!o || i) && 'Dashboard'
                        ]
                      }),
                      k
                    ]
                  })
                }),
                u && f && P.jsx(Ci, { title: v.title })
              ]
            })
          }),
          e === !1 && r !== !1 && P.jsx(Bo, { sx: { mt: 2 } })
        ]
      })),
    (b && b.type === 'item') ||
      ((b == null ? void 0 : b.type) === 'group' && b != null && b.url) ||
      t)
  ) {
    (L = b == null ? void 0 : b.title),
      (N = b != null && b.icon ? b.icon : wa),
      (A = P.jsxs(Se, {
        variant: 'subtitle1',
        sx: { ...E, color: 'text.secondary' },
        children: [i && P.jsx(N, { style: y }), L]
      }));
    let B = P.jsxs(_c, {
      'aria-label': 'breadcrumb',
      maxItems: a || 8,
      separator: R,
      sx: { '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } },
      children: [
        P.jsxs(Se, {
          component: _n,
          to: '/',
          color: 'textSecondary',
          variant: 'subtitle1',
          sx: E,
          children: [
            i && P.jsx(Bu, { style: y }),
            o && !i && P.jsx(ju, { style: { ...y, marginRight: 0 } }),
            (!o || i) && 'Dashboard'
          ]
        }),
        k,
        A
      ]
    });
    t &&
      s &&
      (s == null ? void 0 : s.length) > 0 &&
      (B = P.jsx(_c, {
        'aria-label': 'breadcrumb',
        maxItems: a || 8,
        separator: R,
        sx: {
          '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 }
        },
        children:
          s == null
            ? void 0
            : s.map(
                (j, F) => (
                  (D = j.icon ? j.icon : wa),
                  P.jsxs(
                    Se,
                    {
                      ...(j.to && { component: _n, to: j.to }),
                      variant: 'subtitle1',
                      sx: E,
                      color: j.to ? 'text.secondary' : 'text.primary',
                      children: [j.icon && P.jsx(D, { style: y }), j.title]
                    },
                    F
                  )
                )
              )
      })),
      ((b == null ? void 0 : b.breadcrumbs) !== !1 || t) &&
        (I = P.jsxs(Ka, {
          sx:
            e === !1
              ? { mb: 3, bgcolor: 'transparent', ...d }
              : { mb: 3, bgcolor: 'background.default', ...d },
          ...m,
          children: [
            P.jsx(lt, {
              sx: { p: 2, pl: e === !1 ? 0 : 2 },
              children: P.jsxs(Ei, {
                container: !0,
                direction: l ? 'row' : 'column',
                justifyContent: l ? 'space-between' : 'flex-start',
                alignItems: l ? 'center' : 'flex-start',
                spacing: 1,
                children: [
                  u &&
                    !f &&
                    P.jsx(Ci, { title: t ? n : b == null ? void 0 : b.title }),
                  P.jsx(Ei, { item: !0, children: B }),
                  u &&
                    f &&
                    P.jsx(Ci, { title: t ? n : b == null ? void 0 : b.title })
                ]
              })
            }),
            e === !1 && r !== !1 && P.jsx(Bo, { sx: { mt: 2 } })
          ]
        }));
  }
  return I;
};
z0.propTypes = {
  sx: W.object,
  custom: W.bool,
  heading: W.string,
  card: W.bool,
  divider: W.bool,
  icon: W.bool,
  icons: W.bool,
  maxItems: W.number,
  navigation: W.object,
  rightAlign: W.bool,
  separator: W.oneOfType([W.func, W.object]),
  title: W.bool,
  titleBottom: W.bool,
  links: W.array
};
const e$ = le('main', {
    shouldForwardProp: (e) => e !== 'open' && e !== 'theme'
  })(({ theme: e, open: t }) => ({
    ...e.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: e.transitions.create(
      'margin',
      t
        ? {
            easing: e.transitions.easing.easeOut,
            duration: e.transitions.duration.enteringScreen
          }
        : {
            easing: e.transitions.easing.sharp,
            duration: e.transitions.duration.leavingScreen
          }
    ),
    [e.breakpoints.up('md')]: {
      marginLeft: t ? 0 : -(vo - 20),
      width: `calc(100% - ${vo}px)`
    },
    [e.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${vo}px)`,
      padding: '16px'
    },
    [e.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${vo}px)`,
      padding: '16px',
      marginRight: '10px'
    },
    '&::-webkit-scrollbar': { width: '0px', height: '0px' }
  })),
  t$ = () => {
    const e = localStorage.getItem('empId'),
      t = dt(),
      r = es(t.breakpoints.down('md'));
    es(t.breakpoints.down('sm'));
    const n = dn((l) => l.customization.opened),
      o = Wo(),
      i = () => {
        o({ type: md, opened: !n });
      },
      [s, a] = w.useState('');
    return (
      console.log(e, s),
      w.useEffect(() => {
        localStorage.getItem('empId');
        const l = localStorage.getItem('authToken');
        l
          ? (a(l), console.log('Retrieved authToken:', l))
          : console.error('No authToken found in localStorage');
      }, []),
      console.log(s),
      P.jsxs(lt, {
        sx: {
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        children: [
          P.jsx(Pb, {}),
          P.jsx(iO, {
            className: '.css-h4y409-MuiList-root ',
            position: 'absolute',
            color: 'transparent',
            elevation: 0,
            sx: {
              bgcolor: t.palette.background.error,
              transition: n ? t.transitions.create('width') : 'none'
            },
            children: P.jsx(vD, {
              children: P.jsx(Wb, { handleLeftDrawerToggle: i })
            })
          }),
          P.jsx(W0, {
            drawerOpen: r ? !n : n,
            drawerToggle: i,
            empId: e,
            token: s
          }),
          P.jsxs(e$, {
            theme: t,
            open: n,
            children: [
              P.jsx(z0, {
                separator: Lb,
                navigation,
                icon: !0,
                title: !0,
                rightAlign: !0
              }),
              P.jsx(qv, {})
            ]
          })
        ]
      })
    );
  },
  r$ = () =>
    P.jsx(lt, {
      sx: { position: 'fixed', top: 0, left: 0, zIndex: 1301, width: '100%' },
      children: P.jsx(q_, { color: 'primary' })
    }),
  Ut = (e) => (t) =>
    P.jsx(w.Suspense, {
      fallback: P.jsx(r$, {}),
      children: P.jsx(e, { ...t })
    }),
  n$ = () => !!localStorage.getItem('authToken'),
  ir = ({ element: e, ...t }) =>
    n$() ? P.jsx(e, { ...t }) : P.jsx(bC, { to: '/' }),
  o$ = Ut(
    w.lazy(() =>
      zt(() => import('./index-SIxOXH5x.js'), __vite__mapDeps([0, 1, 2, 3]))
    )
  ),
  i$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./NewCollection-BPIGKMqf.js'),
        __vite__mapDeps([4, 1, 5, 3, 6, 7, 8, 2, 9, 10, 11])
      )
    )
  ),
  s$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./NewDesign-COPzwJ8f.js'),
        __vite__mapDeps([12, 1, 5, 3, 6, 10, 7, 8, 2, 9, 11])
      )
    )
  ),
  a$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./PlanningProcess-BX0abGFq.js'),
        __vite__mapDeps([13, 1, 5, 3, 14, 8, 2, 9, 15, 7])
      )
    )
  ),
  l$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./Roles-DZltLpdR.js'),
        __vite__mapDeps([16, 1, 5, 3, 9, 8, 2])
      )
    )
  ),
  c$ = Ut(w.lazy(() => zt(() => Promise.resolve().then(() => yV), void 0))),
  u$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./MainMenu-teOchg_6.js'),
        __vite__mapDeps([17, 1, 5, 3, 9, 8, 2, 18, 11])
      )
    )
  ),
  d$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./SubMenu-D-A4ZvtL.js'),
        __vite__mapDeps([18, 1, 5, 3, 9, 8, 2])
      )
    )
  ),
  f$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./Users-D1_ILS5v.js'),
        __vite__mapDeps([19, 1, 5, 3, 15, 9, 8, 2])
      )
    )
  ),
  p$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./PrePlanningCreation-Cp0_awfK.js'),
        __vite__mapDeps([20, 1, 5, 3, 7, 8, 2, 6, 11])
      )
    )
  ),
  h$ = Ut(
    w.lazy(() =>
      zt(
        () => import('./index-pu6ueIKI.js'),
        __vite__mapDeps([21, 1, 14, 5, 3, 8, 2, 9])
      )
    )
  ),
  m$ = Ut(
    w.lazy(() =>
      zt(() => import('./WelcomePage-BO0kIUTU.js'), __vite__mapDeps([22, 1]))
    )
  ),
  g$ = {
    path: '/',
    element: P.jsx(t$, {}),
    children: [
      { path: 'dashboard', element: P.jsx(ir, { element: o$ }) },
      {
        path: 'UserManagement',
        children: [
          { path: 'Role', element: P.jsx(ir, { element: l$ }) },
          { path: 'Application', element: P.jsx(ir, { element: c$ }) },
          { path: 'MainMenu', element: P.jsx(ir, { element: u$ }) },
          { path: 'SubMenu', element: P.jsx(ir, { element: d$ }) },
          { path: 'Users', element: P.jsx(ir, { element: f$ }) }
        ]
      },
      {
        path: 'Planning',
        children: [
          { path: 'NewCollection', element: P.jsx(ir, { element: i$ }) },
          { path: 'NewDesign', element: P.jsx(ir, { element: s$ }) },
          { path: 'PlanningProcess', element: P.jsx(ir, { element: a$ }) },
          { path: 'PrePlanningCreation', element: P.jsx(ir, { element: p$ }) }
        ]
      },
      { path: 'sample-page', element: P.jsx(ir, { element: h$ }) },
      { path: 'welcome', element: P.jsx(ir, { element: m$ }) }
    ]
  },
  U0 = de.forwardRef(
    (
      {
        children: e,
        content: t,
        contentClass: r,
        darkTitle: n,
        secondary: o,
        sx: i = {},
        contentSX: s = {},
        title: a,
        ...l
      },
      c
    ) =>
      P.jsxs(Ka, {
        ref: c,
        sx: {
          border: '1px solid',
          borderColor: 'divider',
          ':hover': { boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)' },
          ...i
        },
        ...l,
        children: [
          !n &&
            a &&
            P.jsx(Ya, {
              sx: { p: 2.5 },
              title: P.jsx(Se, { variant: 'h5', children: a }),
              action: o
            }),
          n &&
            a &&
            P.jsx(Ya, {
              sx: { p: 2.5 },
              title: P.jsx(Se, { variant: 'h4', children: a }),
              action: o
            }),
          a && P.jsx(Bo, {}),
          t &&
            P.jsx(Cb, {
              sx: { p: 2.5, ...s },
              className: r || '',
              children: e
            }),
          !t && e
        ]
      })
  );
U0.propTypes = {
  children: W.node,
  content: W.bool,
  contentClass: W.string,
  darkTitle: W.bool,
  secondary: W.oneOfType([W.node, W.string, W.object]),
  sx: W.object,
  contentSX: W.object,
  title: W.oneOfType([W.node, W.string, W.object])
};
U0.defaultProps = { content: !0 };
const H0 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  nc = w.createContext({}),
  mf = w.createContext(null),
  gf = typeof document < 'u',
  v$ = gf ? w.useLayoutEffect : w.useEffect,
  q0 = w.createContext({ strict: !1 }),
  vf = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  y$ = 'framerAppearId',
  K0 = 'data-' + vf(y$),
  b$ = { skipAnimations: !1, useManualTiming: !1 };
class Sm {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function x$(e) {
  let t = new Sm(),
    r = new Sm(),
    n = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        const f = u && o,
          d = f ? t : r;
        return c && s.add(l), d.add(l) && f && o && (n = t.order.length), l;
      },
      cancel: (l) => {
        r.remove(l), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let c = 0; c < n; c++) {
            const u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (o = !1), i && ((i = !1), a.process(l));
      }
    };
  return a;
}
const ra = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender'
  ],
  w$ = 40;
function Y0(e, t) {
  let r = !1,
    n = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ra.reduce((f, d) => ((f[d] = x$(() => (r = !0))), f), {}),
    s = (f) => {
      i[f].process(o);
    },
    a = () => {
      const f = performance.now();
      (r = !1),
        (o.delta = n ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, w$), 1)),
        (o.timestamp = f),
        (o.isProcessing = !0),
        ra.forEach(s),
        (o.isProcessing = !1),
        r && t && ((n = !1), e(a));
    },
    l = () => {
      (r = !0), (n = !0), o.isProcessing || e(a);
    };
  return {
    schedule: ra.reduce((f, d) => {
      const m = i[d];
      return (f[d] = (p, h = !1, v = !1) => (r || l(), m.schedule(p, h, v))), f;
    }, {}),
    cancel: (f) => ra.forEach((d) => i[d].cancel(f)),
    state: o,
    steps: i
  };
}
const { schedule: yf, cancel: e3 } = Y0(queueMicrotask, !1);
function yo(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
const G0 = w.createContext({});
let Em = !1;
function S$(e, t, r, n, o) {
  const { visualElement: i } = w.useContext(nc),
    s = w.useContext(q0),
    a = w.useContext(mf),
    l = w.useContext(H0).reducedMotion,
    c = w.useRef();
  (n = n || s.renderer),
    !c.current &&
      n &&
      (c.current = n(e, {
        visualState: t,
        parent: i,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
      }));
  const u = c.current,
    f = w.useContext(G0);
  u &&
    !u.projection &&
    o &&
    (u.type === 'html' || u.type === 'svg') &&
    C$(c.current, r, o, f),
    w.useInsertionEffect(() => {
      u && u.update(r, a);
    });
  const d = w.useRef(!!(r[K0] && !window.HandoffComplete));
  return (
    v$(() => {
      u &&
        (u.updateFeatures(),
        yf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), Em || ((Em = !0), queueMicrotask(E$))));
    }),
    u
  );
}
function E$() {
  window.HandoffComplete = !0;
}
function C$(e, t, r, n) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c
  } = t;
  (e.projection = new r(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : X0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && yo(a)),
      visualElement: e,
      scheduleRender: () => e.scheduleRender(),
      animationType: typeof i == 'string' ? i : 'both',
      initialPromotionConfig: n,
      layoutScroll: l,
      layoutRoot: c
    });
}
function X0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : X0(e.parent);
}
function P$(e, t, r) {
  return w.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : yo(r) && (r.current = n));
    },
    [t]
  );
}
function as(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function oc(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const bf = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit'
  ],
  xf = ['initial', ...bf];
function ic(e) {
  return oc(e.animate) || xf.some((t) => as(e[t]));
}
function Q0(e) {
  return !!(ic(e) || e.variants);
}
function T$(e, t) {
  if (ic(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || as(r) ? r : void 0,
      animate: as(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function R$(e) {
  const { initial: t, animate: r } = T$(e, w.useContext(nc));
  return w.useMemo(() => ({ initial: t, animate: r }), [Cm(t), Cm(r)]);
}
function Cm(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Pm = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag'
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId']
  },
  No = {};
for (const e in Pm) No[e] = { isEnabled: (t) => Pm[e].some((r) => !!t[r]) };
function k$(e) {
  for (const t in e) No[t] = { ...No[t], ...e[t] };
}
const Z0 = w.createContext({}),
  M$ = Symbol.for('motionComponentSymbol'),
  Mt = (e) => e;
let Nu = Mt;
function O$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o
}) {
  e && k$(e);
  function i(a, l) {
    let c;
    const u = { ...w.useContext(H0), ...a, layoutId: A$(a) },
      { isStatic: f } = u,
      d = R$(a),
      m = n(a, f);
    if (!f && gf) {
      _$();
      const p = D$(u);
      (c = p.MeasureLayout),
        (d.visualElement = S$(o, m, u, t, p.ProjectionNode));
    }
    return P.jsxs(nc.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? P.jsx(c, { visualElement: d.visualElement, ...u })
          : null,
        r(o, a, P$(m, d.visualElement, l), m, f, d.visualElement)
      ]
    });
  }
  const s = w.forwardRef(i);
  return (s[M$] = o), s;
}
function A$({ layoutId: e }) {
  const t = w.useContext(Z0).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function _$(e, t) {
  w.useContext(q0).strict;
}
function D$(e) {
  const { drag: t, layout: r } = No;
  if (!t && !r) return {};
  const n = { ...t, ...r };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? n.MeasureLayout
        : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
function I$(e) {
  function t(n, o = {}) {
    return O$(e(n, o));
  }
  if (typeof Proxy > 'u') return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const L$ = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
];
function wf(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(L$.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const tl = {};
function $$(e) {
  Object.assign(tl, e);
}
const _s = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  Kn = new Set(_s);
function J0(e, { layout: t, layoutId: r }) {
  return (
    Kn.has(e) ||
    e.startsWith('origin') ||
    ((t || r !== void 0) && (!!tl[e] || e === 'opacity'))
  );
}
const Tt = (e) => !!(e && e.getVelocity),
  j$ = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  B$ = _s.length;
function N$(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o
) {
  let i = '';
  for (let s = 0; s < B$; s++) {
    const a = _s[s];
    if (e[a] !== void 0) {
      const l = j$[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, n ? '' : i)) : r && n && (i = 'none'),
    i
  );
}
const ex = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  tx = ex('--'),
  F$ = ex('var(--'),
  Sf = (e) => (F$(e) ? V$.test(e.split('/*')[0].trim()) : !1),
  V$ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  W$ = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  cn = (e, t, r) => (r > t ? t : r < e ? e : r),
  ti = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e
  },
  Li = { ...ti, transform: (e) => cn(0, 1, e) },
  na = { ...ti, default: 1 },
  $i = (e) => Math.round(e * 1e5) / 1e5,
  Ef = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  z$ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  U$ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ds(e) {
  return typeof e == 'string';
}
function H$(e) {
  return e == null;
}
const Is = (e) => ({
    test: (t) => Ds(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }),
  Jr = Is('deg'),
  Mr = Is('%'),
  ie = Is('px'),
  q$ = Is('vh'),
  K$ = Is('vw'),
  Tm = {
    ...Mr,
    parse: (e) => Mr.parse(e) / 100,
    transform: (e) => Mr.transform(e * 100)
  },
  Rm = { ...ti, transform: Math.round },
  rx = {
    borderWidth: ie,
    borderTopWidth: ie,
    borderRightWidth: ie,
    borderBottomWidth: ie,
    borderLeftWidth: ie,
    borderRadius: ie,
    radius: ie,
    borderTopLeftRadius: ie,
    borderTopRightRadius: ie,
    borderBottomRightRadius: ie,
    borderBottomLeftRadius: ie,
    width: ie,
    maxWidth: ie,
    height: ie,
    maxHeight: ie,
    size: ie,
    top: ie,
    right: ie,
    bottom: ie,
    left: ie,
    padding: ie,
    paddingTop: ie,
    paddingRight: ie,
    paddingBottom: ie,
    paddingLeft: ie,
    margin: ie,
    marginTop: ie,
    marginRight: ie,
    marginBottom: ie,
    marginLeft: ie,
    rotate: Jr,
    rotateX: Jr,
    rotateY: Jr,
    rotateZ: Jr,
    scale: na,
    scaleX: na,
    scaleY: na,
    scaleZ: na,
    skew: Jr,
    skewX: Jr,
    skewY: Jr,
    distance: ie,
    translateX: ie,
    translateY: ie,
    translateZ: ie,
    x: ie,
    y: ie,
    z: ie,
    perspective: ie,
    transformPerspective: ie,
    opacity: Li,
    originX: Tm,
    originY: Tm,
    originZ: ie,
    zIndex: Rm,
    backgroundPositionX: ie,
    backgroundPositionY: ie,
    fillOpacity: Li,
    strokeOpacity: Li,
    numOctaves: Rm
  };
function Cf(e, t, r, n) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    c = !1,
    u = !0;
  for (const f in t) {
    const d = t[f];
    if (tx(f)) {
      i[f] = d;
      continue;
    }
    const m = rx[f],
      p = W$(d, m);
    if (Kn.has(f)) {
      if (((l = !0), (s[f] = p), !u)) continue;
      d !== (m.default || 0) && (u = !1);
    } else f.startsWith('origin') ? ((c = !0), (a[f] = p)) : (o[f] = p);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = N$(e.transform, r, u, n))
        : o.transform && (o.transform = 'none')),
    c)
  ) {
    const { originX: f = '50%', originY: d = '50%', originZ: m = 0 } = a;
    o.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Pf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function nx(e, t, r) {
  for (const n in t) !Tt(t[n]) && !J0(n, r) && (e[n] = t[n]);
}
function Y$({ transformTemplate: e }, t, r) {
  return w.useMemo(() => {
    const n = Pf();
    return (
      Cf(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function G$(e, t, r) {
  const n = e.style || {},
    o = {};
  return nx(o, n, e), Object.assign(o, Y$(e, t, r)), o;
}
function X$(e, t, r) {
  const n = {},
    o = G$(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = o),
    n
  );
}
const Q$ = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport'
]);
function rl(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    Q$.has(e)
  );
}
let ox = (e) => !rl(e);
function Z$(e) {
  e && (ox = (t) => (t.startsWith('on') ? !rl(t) : e(t)));
}
try {
  Z$(require('@emotion/is-prop-valid').default);
} catch {}
function J$(e, t, r) {
  const n = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((ox(o) ||
        (r === !0 && rl(o)) ||
        (!t && !rl(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]));
  return n;
}
function km(e, t, r) {
  return typeof e == 'string' ? e : ie.transform(t + r * e);
}
function ej(e, t, r) {
  const n = km(t, e.x, e.width),
    o = km(r, e.y, e.height);
  return `${n} ${o}`;
}
const tj = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  rj = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function nj(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? tj : rj;
  e[i.offset] = ie.transform(-n);
  const s = ie.transform(t),
    a = ie.transform(r);
  e[i.array] = `${s} ${a}`;
}
function Tf(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: n,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Cf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: p, dimensions: h } = e;
  m.transform && (h && (p.transform = m.transform), delete m.transform),
    h &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = ej(
        h,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    r !== void 0 && (m.y = r),
    n !== void 0 && (m.scale = n),
    s !== void 0 && nj(m, s, a, l, !1);
}
const ix = () => ({ ...Pf(), attrs: {} }),
  Rf = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function oj(e, t, r, n) {
  const o = w.useMemo(() => {
    const i = ix();
    return (
      Tf(i, t, { enableHardwareAcceleration: !1 }, Rf(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    nx(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function ij(e = !1) {
  return (r, n, o, { latestValues: i }, s) => {
    const l = (wf(r) ? oj : X$)(n, i, s, r),
      c = J$(n, typeof r == 'string', e),
      u = r !== w.Fragment ? { ...c, ...l, ref: o } : {},
      { children: f } = n,
      d = w.useMemo(() => (Tt(f) ? f.get() : f), [f]);
    return w.createElement(r, { ...u, children: d });
  };
}
function sx(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const ax = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
]);
function lx(e, t, r, n) {
  sx(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(ax.has(o) ? o : vf(o), t.attrs[o]);
}
function kf(e, t, r) {
  var n;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Tt(o[s]) ||
      (t.style && Tt(t.style[s])) ||
      J0(s, e) ||
      ((n = r == null ? void 0 : r.getValue(s)) === null || n === void 0
        ? void 0
        : n.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function cx(e, t, r) {
  const n = kf(e, t, r);
  for (const o in e)
    if (Tt(e[o]) || Tt(t[o])) {
      const i =
        _s.indexOf(o) !== -1
          ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      n[i] = e[o];
    }
  return n;
}
function Mm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function Mf(e, t, r, n) {
  if (typeof t == 'function') {
    const [o, i] = Mm(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [o, i] = Mm(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  return t;
}
function sj(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fu = (e) => Array.isArray(e),
  aj = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  lj = (e) => (Fu(e) ? e[e.length - 1] || 0 : e);
function Sa(e) {
  const t = Tt(e) ? e.get() : e;
  return aj(t) ? t.toValue() : t;
}
function cj(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i
) {
  const s = { latestValues: uj(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const ux = (e) => (t, r) => {
  const n = w.useContext(nc),
    o = w.useContext(mf),
    i = () => cj(e, t, n, o);
  return r ? i() : sj(i);
};
function uj(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const d in i) o[d] = Sa(i[d]);
  let { initial: s, animate: a } = e;
  const l = ic(e),
    c = Q0(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || s === !1;
  const f = u ? a : s;
  return (
    f &&
      typeof f != 'boolean' &&
      !oc(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const p = Mf(e, m);
        if (!p) return;
        const { transitionEnd: h, transition: v, ...x } = p;
        for (const b in x) {
          let g = x[b];
          if (Array.isArray(g)) {
            const y = u ? g.length - 1 : 0;
            g = g[y];
          }
          g !== null && (o[b] = g);
        }
        for (const b in h) o[b] = h[b];
      }),
    o
  );
}
const {
    schedule: ke,
    cancel: Kr,
    state: gt,
    steps: $c
  } = Y0(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Mt, !0),
  dj = {
    useVisualState: ux({
      scrapeMotionValuesFromProps: cx,
      createRenderState: ix,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        ke.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ke.render(() => {
            Tf(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              Rf(t.tagName),
              e.transformTemplate
            ),
              lx(t, r);
          });
      }
    })
  },
  fj = {
    useVisualState: ux({
      scrapeMotionValuesFromProps: kf,
      createRenderState: Pf
    })
  };
function pj(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(wf(e) ? dj : fj),
    preloadedFeatures: r,
    useRender: ij(t),
    createVisualElement: n,
    Component: e
  };
}
function Nr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const dx = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1;
function sc(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const hj = (e) => (t) => dx(t) && e(t, sc(t));
function Vr(e, t, r, n) {
  return Nr(e, t, hj(r), n);
}
const mj = (e, t) => (r) => t(e(r)),
  Wr = (...e) => e.reduce(mj);
function fx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const Om = fx('dragHorizontal'),
  Am = fx('dragVertical');
function px(e) {
  let t = !1;
  if (e === 'y') t = Am();
  else if (e === 'x') t = Om();
  else {
    const r = Om(),
      n = Am();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function hx() {
  const e = px(!0);
  return e ? (e(), !1) : !0;
}
class yn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function _m(e, t) {
  const r = t ? 'pointerenter' : 'pointerleave',
    n = t ? 'onHoverStart' : 'onHoverEnd',
    o = (i, s) => {
      if (i.pointerType === 'touch' || hx()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive('whileHover', t);
      const l = a[n];
      l && ke.postRender(() => l(i, s));
    };
  return Vr(e.current, r, o, { passive: !e.getProps()[n] });
}
class gj extends yn {
  mount() {
    this.unmount = Wr(_m(this.node, !0), _m(this.node, !1));
  }
  unmount() {}
}
class vj extends yn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Wr(
      Nr(this.node.current, 'focus', () => this.onFocus()),
      Nr(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const mx = (e, t) => (t ? (e === t ? !0 : mx(e, t.parentElement)) : !1);
function jc(e, t) {
  if (!t) return;
  const r = new PointerEvent('pointer' + e);
  t(r, sc(r));
}
class yj extends yn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Mt),
      (this.removeEndListeners = Mt),
      (this.removeAccessibleListeners = Mt),
      (this.startPointerPress = (t, r) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const n = this.node.getProps(),
          i = Vr(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: c,
                  onTapCancel: u,
                  globalTapTarget: f
                } = this.node.getProps(),
                d = !f && !mx(this.node.current, a.target) ? u : c;
              d && ke.update(() => d(a, l));
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          s = Vr(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(n.onTapCancel || n.onPointerCancel)
          });
        (this.removeEndListeners = Wr(i, s)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return;
            const s = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                jc('up', (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && ke.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Nr(this.node.current, 'keyup', s)),
              jc('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          r = Nr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && jc('cancel', (i, s) => this.cancelPress(i, s));
          },
          o = Nr(this.node.current, 'blur', n);
        this.removeAccessibleListeners = Wr(r, o);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      n && ke.postRender(() => n(t, r));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !hx()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && ke.postRender(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(),
      r = Vr(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      n = Nr(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = Wr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Vu = new WeakMap(),
  Bc = new WeakMap(),
  bj = (e) => {
    const t = Vu.get(e.target);
    t && t(e);
  },
  xj = (e) => {
    e.forEach(bj);
  };
function wj({ root: e, ...t }) {
  const r = e || document;
  Bc.has(r) || Bc.set(r, {});
  const n = Bc.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(xj, { root: e, ...t })), n[o];
}
function Sj(e, t, r) {
  const n = wj(t);
  return (
    Vu.set(e, r),
    n.observe(e),
    () => {
      Vu.delete(e), n.unobserve(e);
    }
  );
}
const Ej = { some: 0, all: 1 };
class Cj extends yn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = 'some', once: i } = t,
      s = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == 'number' ? o : Ej[o]
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', c);
        const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
          d = c ? u : f;
        d && d(l);
      };
    return Sj(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: r } = this.node;
    ['amount', 'margin', 'root'].some(Pj(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Pj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Tj = {
  inView: { Feature: Cj },
  tap: { Feature: yj },
  focus: { Feature: vj },
  hover: { Feature: gj }
};
function gx(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function ac(e, t, r) {
  const n = e.getProps();
  return Mf(n, t, r !== void 0 ? r : n.custom, e);
}
const nn = (e) => e * 1e3,
  zr = (e) => e / 1e3,
  Rj = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  kj = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Mj = { type: 'keyframes', duration: 0.8 },
  Oj = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Aj = (e, { keyframes: t }) =>
    t.length > 2
      ? Mj
      : Kn.has(e)
        ? e.startsWith('scale')
          ? kj(t[1])
          : Rj
        : Oj;
function _j({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Of(e, t) {
  return e[t] || e.default || e;
}
const Dj = (e) => e !== null;
function lc(e, { repeat: t, repeatType: r = 'loop' }, n) {
  const o = e.filter(Dj),
    i = t && r !== 'loop' && t % 2 === 1 ? 0 : o.length - 1;
  return !i || n === void 0 ? o[i] : n;
}
let Ea;
function Ij() {
  Ea = void 0;
}
const on = {
    now: () => (
      Ea === void 0 &&
        on.set(
          gt.isProcessing || b$.useManualTiming
            ? gt.timestamp
            : performance.now()
        ),
      Ea
    ),
    set: (e) => {
      (Ea = e), queueMicrotask(Ij);
    }
  },
  vx = (e) => /^0[^.\s]+$/u.test(e);
function Lj(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
      ? e === 'none' || e === '0' || vx(e)
      : !0;
}
const yx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  $j = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jj(e) {
  const t = $j.exec(e);
  if (!t) return [,];
  const [, r, n, o] = t;
  return [`--${r ?? n}`, o];
}
function bx(e, t, r = 1) {
  const [n, o] = jj(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const s = i.trim();
    return yx(s) ? parseFloat(s) : s;
  }
  return Sf(o) ? bx(o, t, r + 1) : o;
}
const Bj = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY'
  ]),
  Dm = (e) => e === ti || e === ie,
  Im = (e, t) => parseFloat(e.split(', ')[t]),
  Lm =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/u);
      if (o) return Im(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/u);
        return i ? Im(i[1], e) : 0;
      }
    },
  Nj = new Set(['x', 'y', 'z']),
  Fj = _s.filter((e) => !Nj.has(e));
function Vj(e) {
  const t = [];
  return (
    Fj.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const Fo = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Lm(4, 13),
  y: Lm(5, 14)
};
Fo.translateX = Fo.x;
Fo.translateY = Fo.y;
const xx = (e) => (t) => t.test(e),
  Wj = { test: (e) => e === 'auto', parse: (e) => e },
  wx = [ti, ie, Mr, Jr, K$, q$, Wj],
  $m = (e) => wx.find(xx(e)),
  jn = new Set();
let Wu = !1,
  zu = !1;
function Sx() {
  if (zu) {
    const e = Array.from(jn).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const o = Vj(n);
      o.length && (r.set(n, o), n.render());
    }),
      e.forEach((n) => n.measureInitialState()),
      t.forEach((n) => {
        n.render();
        const o = r.get(n);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = n.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((n) => n.measureEndState()),
      e.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      });
  }
  (zu = !1), (Wu = !1), jn.forEach((e) => e.complete()), jn.clear();
}
function Ex() {
  jn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (zu = !0);
  });
}
function zj() {
  Ex(), Sx();
}
class Af {
  constructor(t, r, n, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = n),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (jn.add(this),
          Wu || ((Wu = !0), ke.read(Ex), ke.resolveKeyframes(Sx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: n,
      motionValue: o
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (n && r) {
            const l = n.readValue(r, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      jn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), jn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const _f = (e, t) => (r) =>
    !!(
      (Ds(r) && U$.test(r) && r.startsWith(e)) ||
      (t && !H$(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Cx = (e, t, r) => (n) => {
    if (!Ds(n)) return n;
    const [o, i, s, a] = n.match(Ef);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  },
  Uj = (e) => cn(0, 255, e),
  Nc = { ...ti, transform: (e) => Math.round(Uj(e)) },
  In = {
    test: _f('rgb', 'red'),
    parse: Cx('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      Nc.transform(e) +
      ', ' +
      Nc.transform(t) +
      ', ' +
      Nc.transform(r) +
      ', ' +
      $i(Li.transform(n)) +
      ')'
  };
function Hj(e) {
  let t = '',
    r = '',
    n = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1
    }
  );
}
const Uu = { test: _f('#'), parse: Hj, transform: In.transform },
  bo = {
    test: _f('hsl', 'hue'),
    parse: Cx('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Mr.transform($i(t)) +
      ', ' +
      Mr.transform($i(r)) +
      ', ' +
      $i(Li.transform(n)) +
      ')'
  },
  Ct = {
    test: (e) => In.test(e) || Uu.test(e) || bo.test(e),
    parse: (e) =>
      In.test(e) ? In.parse(e) : bo.test(e) ? bo.parse(e) : Uu.parse(e),
    transform: (e) =>
      Ds(e) ? e : e.hasOwnProperty('red') ? In.transform(e) : bo.transform(e)
  };
function qj(e) {
  var t, r;
  return (
    isNaN(e) &&
    Ds(e) &&
    (((t = e.match(Ef)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(z$)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const Px = 'number',
  Tx = 'color',
  Kj = 'var',
  Yj = 'var(',
  jm = '${}',
  Gj =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ls(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      Gj,
      (l) => (
        Ct.test(l)
          ? (n.color.push(i), o.push(Tx), r.push(Ct.parse(l)))
          : l.startsWith(Yj)
            ? (n.var.push(i), o.push(Kj), r.push(l))
            : (n.number.push(i), o.push(Px), r.push(parseFloat(l))),
        ++i,
        jm
      )
    )
    .split(jm);
  return { values: r, split: a, indexes: n, types: o };
}
function Rx(e) {
  return ls(e).values;
}
function kx(e) {
  const { split: t, types: r } = ls(e),
    n = t.length;
  return (o) => {
    let i = '';
    for (let s = 0; s < n; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = r[s];
        a === Px
          ? (i += $i(o[s]))
          : a === Tx
            ? (i += Ct.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const Xj = (e) => (typeof e == 'number' ? 0 : e);
function Qj(e) {
  const t = Rx(e);
  return kx(e)(t.map(Xj));
}
const un = {
    test: qj,
    parse: Rx,
    createTransformer: kx,
    getAnimatableNone: Qj
  },
  Zj = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Jj(e) {
  const [t, r] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [n] = r.match(Ef) || [];
  if (!n) return e;
  const o = r.replace(n, '');
  let i = Zj.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + '(' + i + o + ')';
}
const eB = /\b([a-z-]*)\(.*?\)/gu,
  Hu = {
    ...un,
    getAnimatableNone: (e) => {
      const t = e.match(eB);
      return t ? t.map(Jj).join(' ') : e;
    }
  },
  tB = {
    ...rx,
    color: Ct,
    backgroundColor: Ct,
    outlineColor: Ct,
    fill: Ct,
    stroke: Ct,
    borderColor: Ct,
    borderTopColor: Ct,
    borderRightColor: Ct,
    borderBottomColor: Ct,
    borderLeftColor: Ct,
    filter: Hu,
    WebkitFilter: Hu
  },
  Df = (e) => tB[e];
function Mx(e, t) {
  let r = Df(e);
  return (
    r !== Hu && (r = un), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const rB = new Set(['auto', 'none', '0']);
function nB(e, t, r) {
  let n = 0,
    o;
  for (; n < e.length && !o; ) {
    const i = e[n];
    typeof i == 'string' && !rB.has(i) && ls(i).values.length && (o = e[n]),
      n++;
  }
  if (o && r) for (const i of t) e[i] = Mx(r, o);
}
class Ox extends Af {
  constructor(t, r, n, o) {
    super(t, r, n, o, o == null ? void 0 : o.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == 'string' && ((c = c.trim()), Sf(c))) {
        const u = bx(c, r.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Bj.has(n) || t.length !== 2)) return;
    const [o, i] = t,
      s = $m(o),
      a = $m(i);
    if (s !== a)
      if (Dm(s) && Dm(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == 'string' && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let o = 0; o < t.length; o++) Lj(t[o]) && n.push(o);
    n.length && nB(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t.current) return;
    n === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Fo[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (r[0] = this.measuredOrigin);
    const o = r[r.length - 1];
    o !== void 0 && t.getValue(n, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: n, unresolvedKeyframes: o } = this;
    if (!r.current) return;
    const i = r.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = Fo[n](r.measureViewportBox(), window.getComputedStyle(r.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          r.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ax(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Bm = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' &&
          (un.test(e) || e === '0') &&
          !e.startsWith('url('))
      );
function oB(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function iB(e, t, r, n) {
  const o = e[0];
  if (o === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const i = e[e.length - 1],
    s = Bm(o, t),
    a = Bm(i, t);
  return !s || !a ? !1 : oB(e) || (r === 'spring' && n);
}
class _x {
  constructor({
    autoplay: t = !0,
    delay: r = 0,
    type: n = 'keyframes',
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = 'loop',
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: r,
        type: n,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && zj(), this._resolved;
  }
  onKeyframesResolved(t, r) {
    this.hasAttemptedResolve = !0;
    const {
      name: n,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: c
    } = this.options;
    if (!c && !iB(t, n, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(lc(t, this.options, r)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, r);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: r, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Dx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sB = 5;
function Ix(e, t, r) {
  const n = Math.max(t - sB, 0);
  return Dx(r - e(n), t - n);
}
const Fc = 0.001,
  aB = 0.01,
  lB = 10,
  cB = 0.05,
  uB = 1;
function dB({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1
}) {
  let o,
    i,
    s = 1 - t;
  (s = cn(cB, uB, s)),
    (e = cn(aB, lB, zr(e))),
    s < 1
      ? ((o = (c) => {
          const u = c * s,
            f = u * e,
            d = u - r,
            m = qu(c, s),
            p = Math.exp(-f);
          return Fc - (d / m) * p;
        }),
        (i = (c) => {
          const f = c * s * e,
            d = f * r + r,
            m = Math.pow(s, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-f),
            h = qu(Math.pow(c, 2), s);
          return ((-o(c) + Fc > 0 ? -1 : 1) * ((d - m) * p)) / h;
        }))
      : ((o = (c) => {
          const u = Math.exp(-c * e),
            f = (c - r) * e + 1;
          return -Fc + u * f;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            f = (r - c) * (e * e);
          return u * f;
        }));
  const a = 5 / e,
    l = pB(o, i, a);
  if (((e = nn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: s * 2 * Math.sqrt(n * c), duration: e };
  }
}
const fB = 12;
function pB(e, t, r) {
  let n = r;
  for (let o = 1; o < fB; o++) n = n - e(n) / t(n);
  return n;
}
function qu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hB = ['duration', 'bounce'],
  mB = ['stiffness', 'damping', 'mass'];
function Nm(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function gB(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Nm(e, mB) && Nm(e, hB)) {
    const r = dB(e);
    (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Lx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d
    } = gB({ ...n, velocity: -zr(n.velocity || 0) }),
    m = f || 0,
    p = l / (2 * Math.sqrt(a * c)),
    h = i - o,
    v = zr(Math.sqrt(a / c)),
    x = Math.abs(h) < 5;
  r || (r = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
  let b;
  if (p < 1) {
    const g = qu(v, p);
    b = (y) => {
      const E = Math.exp(-p * v * y);
      return (
        i - E * (((m + p * v * h) / g) * Math.sin(g * y) + h * Math.cos(g * y))
      );
    };
  } else if (p === 1) b = (g) => i - Math.exp(-v * g) * (h + (m + v * h) * g);
  else {
    const g = v * Math.sqrt(p * p - 1);
    b = (y) => {
      const E = Math.exp(-p * v * y),
        S = Math.min(g * y, 300);
      return (
        i - (E * ((m + p * v * h) * Math.sinh(S) + g * h * Math.cosh(S))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (g) => {
      const y = b(g);
      if (d) s.done = g >= u;
      else {
        let E = m;
        g !== 0 && (p < 1 ? (E = Ix(b, g, y)) : (E = 0));
        const S = Math.abs(E) <= r,
          C = Math.abs(i - y) <= t;
        s.done = S && C;
      }
      return (s.value = s.done ? i : y), s;
    }
  };
}
function Fm({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    p = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let h = r * t;
  const v = f + h,
    x = s === void 0 ? v : s(v);
  x !== v && (h = x - f);
  const b = (T) => -h * Math.exp(-T / n),
    g = (T) => x + b(T),
    y = (T) => {
      const R = b(T),
        k = g(T);
      (d.done = Math.abs(R) <= c), (d.value = d.done ? x : k);
    };
  let E, S;
  const C = (T) => {
    m(d.value) &&
      ((E = T),
      (S = Lx({
        keyframes: [d.value, p(d.value)],
        velocity: Ix(g, T, d.value),
        damping: o,
        stiffness: i,
        restDelta: c,
        restSpeed: u
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !S && E === void 0 && ((R = !0), y(T), C(T)),
          E !== void 0 && T >= E ? S.next(T - E) : (!R && y(T), d)
        );
      }
    }
  );
}
const $x = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  vB = 1e-7,
  yB = 12;
function bB(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = $x(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > vB && ++a < yB);
  return s;
}
function Ls(e, t, r, n) {
  if (e === t && r === n) return Mt;
  const o = (i) => bB(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : $x(o(i), t, n));
}
const xB = Ls(0.42, 0, 1, 1),
  wB = Ls(0, 0, 0.58, 1),
  jx = Ls(0.42, 0, 0.58, 1),
  SB = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Bx = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Nx = (e) => (t) => 1 - e(1 - t),
  If = (e) => 1 - Math.sin(Math.acos(e)),
  Fx = Nx(If),
  EB = Bx(If),
  Vx = Ls(0.33, 1.53, 0.69, 0.99),
  Lf = Nx(Vx),
  CB = Bx(Lf),
  PB = (e) =>
    (e *= 2) < 1 ? 0.5 * Lf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Vm = {
    linear: Mt,
    easeIn: xB,
    easeInOut: jx,
    easeOut: wB,
    circIn: If,
    circInOut: EB,
    circOut: Fx,
    backIn: Lf,
    backInOut: CB,
    backOut: Vx,
    anticipate: PB
  },
  Wm = (e) => {
    if (Array.isArray(e)) {
      Nu(e.length === 4);
      const [t, r, n, o] = e;
      return Ls(t, r, n, o);
    } else if (typeof e == 'string') return Nu(Vm[e] !== void 0), Vm[e];
    return e;
  },
  cs = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  Ke = (e, t, r) => e + (t - e) * r;
function Vc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function TB({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (o = Vc(l, a, e + 1 / 3)), (i = Vc(l, a, e)), (s = Vc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n
  };
}
function nl(e, t) {
  return (r) => (r > 0 ? t : e);
}
const Wc = (e, t, r) => {
    const n = e * e,
      o = r * (t * t - n) + n;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  RB = [Uu, In, bo],
  kB = (e) => RB.find((t) => t.test(e));
function zm(e) {
  const t = kB(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === bo && (r = TB(r)), r;
}
const Um = (e, t) => {
    const r = zm(e),
      n = zm(t);
    if (!r || !n) return nl(e, t);
    const o = { ...r };
    return (i) => (
      (o.red = Wc(r.red, n.red, i)),
      (o.green = Wc(r.green, n.green, i)),
      (o.blue = Wc(r.blue, n.blue, i)),
      (o.alpha = Ke(r.alpha, n.alpha, i)),
      In.transform(o)
    );
  },
  Ku = new Set(['none', 'hidden']);
function MB(e, t) {
  return Ku.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function OB(e, t) {
  return (r) => Ke(e, t, r);
}
function $f(e) {
  return typeof e == 'number'
    ? OB
    : typeof e == 'string'
      ? Sf(e)
        ? nl
        : Ct.test(e)
          ? Um
          : DB
      : Array.isArray(e)
        ? Wx
        : typeof e == 'object'
          ? Ct.test(e)
            ? Um
            : AB
          : nl;
}
function Wx(e, t) {
  const r = [...e],
    n = r.length,
    o = e.map((i, s) => $f(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < n; s++) r[s] = o[s](i);
    return r;
  };
}
function AB(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = $f(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n) r[i] = n[i](o);
    return r;
  };
}
function _B(e, t) {
  var r;
  const n = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (r = e.values[a]) !== null && r !== void 0 ? r : 0;
    (n[i] = l), o[s]++;
  }
  return n;
}
const DB = (e, t) => {
  const r = un.createTransformer(t),
    n = ls(e),
    o = ls(t);
  return n.indexes.var.length === o.indexes.var.length &&
    n.indexes.color.length === o.indexes.color.length &&
    n.indexes.number.length >= o.indexes.number.length
    ? (Ku.has(e) && !o.values.length) || (Ku.has(t) && !n.values.length)
      ? MB(e, t)
      : Wr(Wx(_B(n, o), o.values), r)
    : nl(e, t);
};
function zx(e, t, r) {
  return typeof e == 'number' && typeof t == 'number' && typeof r == 'number'
    ? Ke(e, t, r)
    : $f(e)(e, t);
}
function IB(e, t, r) {
  const n = [],
    o = r || zx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Mt : t;
      a = Wr(l, a);
    }
    n.push(a);
  }
  return n;
}
function LB(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ((Nu(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = IB(t, n, o),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const f = cs(e[u], e[u + 1], c);
      return s[u](f);
    };
  return r ? (c) => l(cn(e[0], e[i - 1], c)) : l;
}
function $B(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = cs(0, t, n);
    e.push(Ke(r, 1, o));
  }
}
function jB(e) {
  const t = [0];
  return $B(t, e.length - 1), t;
}
function BB(e, t) {
  return e.map((r) => r * t);
}
function NB(e, t) {
  return e.map(() => t || jx).splice(0, e.length - 1);
}
function ol({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = 'easeInOut'
}) {
  const o = SB(n) ? n.map(Wm) : Wm(n),
    i = { done: !1, value: t[0] },
    s = BB(r && r.length === t.length ? r : jB(t), e),
    a = LB(s, t, { ease: Array.isArray(o) ? o : NB(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i)
  };
}
const Hm = 2e4;
function FB(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Hm; ) (t += r), (n = e.next(t));
  return t >= Hm ? 1 / 0 : t;
}
const VB = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => ke.update(t, !0),
      stop: () => Kr(t),
      now: () => (gt.isProcessing ? gt.timestamp : on.now())
    };
  },
  WB = { decay: Fm, inertia: Fm, tween: ol, keyframes: ol, spring: Lx },
  zB = (e) => e / 100;
class jf extends _x {
  constructor({ KeyframeResolver: t = Af, ...r }) {
    super(r),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.state = 'idle'),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: o, keyframes: i } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    n && o && o.owner
      ? (this.resolver = o.owner.resolveKeyframes(i, s, n, o))
      : (this.resolver = new t(i, s, n, o)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: r = 'keyframes',
        repeat: n = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0
      } = this.options,
      a = WB[r] || ol;
    let l, c;
    a !== ol &&
      typeof t[0] != 'number' &&
      ((l = Wr(zB, zx(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === 'mirror' &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = FB(u));
    const { calculatedDuration: f } = u,
      d = f + o,
      m = d * (n + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, r = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: f
    } = n;
    if (this.startTime === null) return i.next(0);
    const {
      delay: d,
      repeat: m,
      repeatType: p,
      repeatDelay: h,
      onUpdate: v
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      r
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const x = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      b = this.speed >= 0 ? x < 0 : x > u;
    (this.currentTime = Math.max(x, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = u);
    let g = this.currentTime,
      y = i;
    if (m) {
      const T = Math.min(this.currentTime, u) / f;
      let R = Math.floor(T),
        k = T % 1;
      !k && T >= 1 && (k = 1),
        k === 1 && R--,
        (R = Math.min(R, m + 1)),
        !!(R % 2) &&
          (p === 'reverse'
            ? ((k = 1 - k), h && (k -= h / f))
            : p === 'mirror' && (y = s)),
        (g = cn(0, 1, k) * f);
    }
    const E = b ? { done: !1, value: l[0] } : y.next(g);
    a && (E.value = a(E.value));
    let { done: S } = E;
    !b &&
      c !== null &&
      (S = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && S));
    return (
      C && o !== void 0 && (E.value = lc(l, this.options, o)),
      v && v(E.value),
      C && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? zr(t.calculatedDuration) : 0;
  }
  get time() {
    return zr(this.currentTime);
  }
  set time(t) {
    (t = nn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = zr(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = VB, onPlay: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), r && r();
    const n = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = n - this.holdTime)
      : (!this.startTime || this.state === 'finished') && (this.startTime = n),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Ux = (e) => Array.isArray(e) && typeof e[0] == 'number';
function Hx(e) {
  return !!(
    !e ||
    (typeof e == 'string' && e in Bf) ||
    Ux(e) ||
    (Array.isArray(e) && e.every(Hx))
  );
}
const Pi = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Bf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Pi([0, 0.65, 0.55, 1]),
    circOut: Pi([0.55, 0, 1, 0.45]),
    backIn: Pi([0.31, 0.01, 0.66, -0.59]),
    backOut: Pi([0.33, 1.53, 0.69, 0.99])
  };
function UB(e) {
  return qx(e) || Bf.easeOut;
}
function qx(e) {
  if (e) return Ux(e) ? Pi(e) : Array.isArray(e) ? e.map(UB) : Bf[e];
}
function HB(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = 'loop',
    ease: a,
    times: l
  } = {}
) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = qx(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: n,
      duration: o,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: i + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal'
    })
  );
}
const qB = Ax(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  KB = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  il = 10,
  YB = 2e4;
function GB(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !Hx(e.ease);
}
function XB(e, t) {
  const r = new jf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let n = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !n.done && i < YB; ) (n = r.sample(i)), o.push(n.value), (i += il);
  return { times: void 0, keyframes: o, duration: i - il, ease: 'linear' };
}
class qm extends _x {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, keyframes: o } = this.options;
    (this.resolver = new Ox(o, (i, s) => this.onKeyframesResolved(i, s), r, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var n;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: c
    } = this.options;
    if (!(!((n = l.owner) === null || n === void 0) && n.current)) return !1;
    if (GB(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: m, ...p } = this.options,
        h = XB(t, p);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (i = h.times),
        (s = h.ease),
        (a = 'keyframes');
    }
    const u = HB(l.owner.current, c, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s
    });
    return (
      (u.startTime = on.now()),
      this.pendingTimeline
        ? ((u.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(lc(t, this.options, r)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: r } = t;
    return zr(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: r } = t;
    return zr(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.currentTime = nn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: r } = t;
    return r.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r) return Mt;
      const { animation: n } = r;
      (n.timeline = t), (n.onfinish = null);
    }
    return Mt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.playState === 'finished' && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: r,
      keyframes: n,
      duration: o,
      type: i,
      ease: s,
      times: a
    } = t;
    if (!(r.playState === 'idle' || r.playState === 'finished')) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: c,
            onComplete: u,
            ...f
          } = this.options,
          d = new jf({
            ...f,
            keyframes: n,
            duration: o,
            type: i,
            ease: s,
            times: a,
            isGenerator: !0
          }),
          m = nn(this.time);
        l.setWithVelocity(d.sample(m - il).value, d.sample(m).value, il);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: r,
      name: n,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a
    } = t;
    return (
      qB() &&
      n &&
      KB.has(n) &&
      r &&
      r.owner &&
      r.owner.current instanceof HTMLElement &&
      !r.owner.getProps().onUpdate &&
      !o &&
      i !== 'mirror' &&
      s !== 0 &&
      a !== 'inertia'
    );
  }
}
function QB(e, t) {
  let r;
  const n = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    r !== s && e(s), (r = s);
  };
  return ke.update(n, !0), () => Kr(n);
}
const ZB = Ax(() => window.ScrollTimeline !== void 0);
class JB {
  constructor(t) {
    (this.stop = () => this.runAll('stop')),
      (this.animations = t.filter(Boolean));
  }
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = r;
  }
  attachTimeline(t) {
    const r = this.animations.map((n) => {
      if (ZB() && n.attachTimeline) n.attachTimeline(t);
      else
        return (
          n.pause(),
          QB((o) => {
            n.time = n.duration * o;
          }, t)
        );
    });
    return () => {
      r.forEach((n, o) => {
        n && n(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(t) {
    this.setAll('time', t);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(t) {
    this.setAll('speed', t);
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
const Nf =
  (e, t, r, n = {}, o, i) =>
  (s) => {
    const a = Of(n, e) || {},
      l = a.delay || n.delay || 0;
    let { elapsed: c = 0 } = n;
    c = c - nn(l);
    let u = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o
    };
    _j(a) || (u = { ...u, ...Aj(e, u) }),
      u.duration && (u.duration = nn(u.duration)),
      u.repeatDelay && (u.repeatDelay = nn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const d = lc(u.keyframes, a);
      if (d !== void 0)
        return (
          ke.update(() => {
            u.onUpdate(d), u.onComplete();
          }),
          new JB([])
        );
    }
    return !i && qm.supports(u) ? new qm(u) : new jf(u);
  };
function sl(e) {
  return !!(Tt(e) && e.add);
}
function Ff(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vf(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Wf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ff(this.subscriptions, t), () => Vf(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Km = 30,
  eN = (e) => !isNaN(parseFloat(e));
class tN {
  constructor(t, r = {}) {
    (this.version = '11.2.13'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        const i = on.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = on.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = eN(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Wf());
    const n = this.events[t].add(r);
    return t === 'change'
      ? () => {
          n(),
            ke.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t, r = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = on.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Km
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Km);
    return Dx(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function us(e, t) {
  return new tN(e, t);
}
function rN(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, us(r));
}
function nN(e, t) {
  const r = ac(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r || {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = lj(i[s]);
    rN(e, s, a);
  }
}
function Kx(e) {
  return e.getProps()[K0];
}
function oN({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function Yx(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const c = e.getValue('willChange');
  n && (s = n);
  const u = [],
    f = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const m = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      p = l[d];
    if (p === void 0 || (f && oN(f, d))) continue;
    const h = { delay: r, elapsed: 0, ...Of(s || {}, d) };
    let v = !1;
    if (window.HandoffAppearAnimations) {
      const b = Kx(e);
      if (b) {
        const g = window.HandoffAppearAnimations(b, d, m, ke);
        g !== null && ((h.elapsed = g), (v = !0));
      }
    }
    m.start(
      Nf(d, m, p, e.shouldReduceMotion && Kn.has(d) ? { type: !1 } : h, e, v)
    );
    const x = m.animation;
    x && (sl(c) && (c.add(d), x.then(() => c.remove(d))), u.push(x));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        ke.update(() => {
          a && nN(e, a);
        });
      }),
    u
  );
}
function Yu(e, t, r = {}) {
  var n;
  const o = ac(
    e,
    t,
    r.type === 'exit'
      ? (n = e.presenceContext) === null || n === void 0
        ? void 0
        : n.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (i = r.transitionOverride);
  const s = o ? () => Promise.all(Yx(e, o, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d
            } = i;
            return iN(e, t, u + c, f, d, r);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(r.delay)]);
}
function iN(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (c = 0) => c * n : (c = 0) => a - c * n;
  return (
    Array.from(e.variantChildren)
      .sort(sN)
      .forEach((c, u) => {
        c.notify('AnimationStart', t),
          s.push(
            Yu(c, t, { ...i, delay: r + l(u) }).then(() =>
              c.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(s)
  );
}
function sN(e, t) {
  return e.sortNodePosition(t);
}
function aN(e, t, r = {}) {
  e.notify('AnimationStart', t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Yu(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == 'string') n = Yu(e, t, r);
  else {
    const o = typeof t == 'function' ? ac(e, t, r.custom) : t;
    n = Promise.all(Yx(e, o, r));
  }
  return n.then(() => {
    ke.postRender(() => {
      e.notify('AnimationComplete', t);
    });
  });
}
const lN = [...bf].reverse(),
  cN = bf.length;
function uN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => aN(e, r, n)));
}
function dN(e) {
  let t = uN(e),
    r = Ym(),
    n = !0;
  const o = (l) => (c, u) => {
    var f;
    const d = ac(
      e,
      u,
      l === 'exit'
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: m, transitionEnd: p, ...h } = d;
      c = { ...c, ...h, ...p };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set();
    let m = {},
      p = 1 / 0;
    for (let v = 0; v < cN; v++) {
      const x = lN[v],
        b = r[x],
        g = c[x] !== void 0 ? c[x] : u[x],
        y = as(g),
        E = x === l ? b.isActive : null;
      E === !1 && (p = v);
      let S = g === u[x] && g !== c[x] && y;
      if (
        (S && n && e.manuallyAnimateOnMount && (S = !1),
        (b.protectedKeys = { ...m }),
        (!b.isActive && E === null) ||
          (!g && !b.prevProp) ||
          oc(g) ||
          typeof g == 'boolean')
      )
        continue;
      let T =
          fN(b.prevProp, g) ||
          (x === l && b.isActive && !S && y) ||
          (v > p && y),
        R = !1;
      const k = Array.isArray(g) ? g : [g];
      let A = k.reduce(o(x), {});
      E === !1 && (A = {});
      const { prevResolvedValues: I = {} } = b,
        L = { ...I, ...A },
        D = (N) => {
          (T = !0),
            d.has(N) && ((R = !0), d.delete(N)),
            (b.needsAnimating[N] = !0);
          const B = e.getValue(N);
          B && (B.liveStyle = !1);
        };
      for (const N in L) {
        const B = A[N],
          j = I[N];
        if (m.hasOwnProperty(N)) continue;
        let F = !1;
        Fu(B) && Fu(j) ? (F = !gx(B, j)) : (F = B !== j),
          F
            ? B != null
              ? D(N)
              : d.add(N)
            : B !== void 0 && d.has(N)
              ? D(N)
              : (b.protectedKeys[N] = !0);
      }
      (b.prevProp = g),
        (b.prevResolvedValues = A),
        b.isActive && (m = { ...m, ...A }),
        n && e.blockInitialAnimation && (T = !1),
        T &&
          (!S || R) &&
          f.push(...k.map((N) => ({ animation: N, options: { type: x } })));
    }
    if (d.size) {
      const v = {};
      d.forEach((x) => {
        const b = e.getBaseTarget(x),
          g = e.getValue(x);
        g && (g.liveStyle = !0), (v[x] = b ?? null);
      }),
        f.push({ animation: v });
    }
    let h = !!f.length;
    return (
      n &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (h = !1),
      (n = !1),
      h ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (r[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, c);
      }),
      (r[l].isActive = c);
    const f = s(l);
    for (const d in r) r[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
    reset: () => {
      (r = Ym()), (n = !0);
    }
  };
}
function fN(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !gx(t, e) : !1;
}
function xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ym() {
  return {
    animate: xn(!0),
    whileInView: xn(),
    whileHover: xn(),
    whileTap: xn(),
    whileDrag: xn(),
    whileFocus: xn(),
    exit: xn()
  };
}
class pN extends yn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    oc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let hN = 0;
class mN extends yn {
  constructor() {
    super(...arguments), (this.id = hN++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n) return;
    const o = this.node.animationState.setActive('exit', !t);
    r && !t && o.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const gN = { animation: { Feature: pN }, exit: { Feature: mN } },
  Gm = (e, t) => Math.abs(e - t);
function vN(e, t) {
  const r = Gm(e.x, t.x),
    n = Gm(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Gx {
  constructor(
    t,
    r,
    { transformPagePoint: n, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Uc(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = vN(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: p } = f,
          { timestamp: h } = gt;
        this.history.push({ ...p, timestamp: h });
        const { onStart: v, onMove: x } = this.handlers;
        d ||
          (v && v(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = zc(d, this.transformPagePoint)),
          ke.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: p, resumeAnimation: h } = this.handlers;
        if (
          (this.dragSnapToOrigin && h && h(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = Uc(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : zc(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(f, v), p && p(f, v);
      }),
      !dx(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.contextWindow = o || window);
    const s = sc(t),
      a = zc(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = gt;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = r;
    u && u(t, Uc(a, this.history)),
      (this.removeListeners = Wr(
        Vr(this.contextWindow, 'pointermove', this.handlePointerMove),
        Vr(this.contextWindow, 'pointerup', this.handlePointerUp),
        Vr(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Kr(this.updatePoint);
  }
}
function zc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Uc({ point: e }, t) {
  return {
    point: e,
    delta: Xm(e, Xx(t)),
    offset: Xm(e, yN(t)),
    velocity: bN(t, 0.1)
  };
}
function yN(e) {
  return e[0];
}
function Xx(e) {
  return e[e.length - 1];
}
function bN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = Xx(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > nn(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = zr(o.timestamp - n.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function er(e) {
  return e.max - e.min;
}
function Gu(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Qm(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = Ke(t.min, t.max, e.origin)),
    (e.scale = er(r) / er(t)),
    (Gu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Ke(r.min, r.max, e.origin) - e.originPoint),
    (Gu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ji(e, t, r, n) {
  Qm(e.x, t.x, r.x, n ? n.originX : void 0),
    Qm(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Zm(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + er(t));
}
function xN(e, t, r) {
  Zm(e.x, t.x, r.x), Zm(e.y, t.y, r.y);
}
function Jm(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + er(t));
}
function Bi(e, t, r) {
  Jm(e.x, t.x, r.x), Jm(e.y, t.y, r.y);
}
function wN(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? Ke(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? Ke(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function eg(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function SN(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: eg(e.x, r, o), y: eg(e.y, t, n) };
}
function tg(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function EN(e, t) {
  return { x: tg(e.x, t.x), y: tg(e.y, t.y) };
}
function CN(e, t) {
  let r = 0.5;
  const n = er(e),
    o = er(t);
  return (
    o > n
      ? (r = cs(t.min, t.max - n, e.min))
      : n > o && (r = cs(e.min, e.max - o, t.min)),
    cn(0, 1, r)
  );
}
function PN(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Xu = 0.35;
function TN(e = Xu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Xu),
    { x: rg(e, 'left', 'right'), y: rg(e, 'top', 'bottom') }
  );
}
function rg(e, t, r) {
  return { min: ng(e, t), max: ng(e, r) };
}
function ng(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const og = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  xo = () => ({ x: og(), y: og() }),
  ig = () => ({ min: 0, max: 0 }),
  Ze = () => ({ x: ig(), y: ig() });
function ar(e) {
  return [e('x'), e('y')];
}
function Qx({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function RN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function kN(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Hc(e) {
  return e === void 0 || e === 1;
}
function Qu({ scale: e, scaleX: t, scaleY: r }) {
  return !Hc(e) || !Hc(t) || !Hc(r);
}
function Cn(e) {
  return (
    Qu(e) ||
    Zx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Zx(e) {
  return sg(e.x) || sg(e.y);
}
function sg(e) {
  return e && e !== '0%';
}
function al(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function ag(e, t, r, n, o) {
  return o !== void 0 && (e = al(e, o, n)), al(e, r, n) + t;
}
function Zu(e, t = 0, r = 1, n, o) {
  (e.min = ag(e.min, t, r, n, o)), (e.max = ag(e.max, t, r, n, o));
}
function Jx(e, { x: t, y: r }) {
  Zu(e.x, t.translate, t.scale, t.originPoint),
    Zu(e.y, r.translate, r.scale, r.originPoint);
}
function MN(e, t, r, n = !1) {
  const o = r.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = r[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === 'contents') ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        wo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Jx(e, s)),
      n && Cn(i.latestValues) && wo(e, i.latestValues));
  }
  (t.x = lg(t.x)), (t.y = lg(t.y));
}
function lg(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function en(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function cg(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = Ke(e.min, e.max, i);
  Zu(e, t[r], t[n], s, t.scale);
}
const ON = ['x', 'scaleX', 'originX'],
  AN = ['y', 'scaleY', 'originY'];
function wo(e, t) {
  cg(e.x, t, ON), cg(e.y, t, AN);
}
function ew(e, t) {
  return Qx(kN(e.getBoundingClientRect(), t));
}
function _N(e, t, r) {
  const n = ew(e, r),
    { scroll: o } = t;
  return o && (en(n.x, o.offset.x), en(n.y, o.offset.y)), n;
}
const tw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  DN = new WeakMap();
class IN {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ze()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (u) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(sc(u, 'page').point);
      },
      i = (u, f) => {
        const { drag: d, dragPropagation: m, onDragStart: p } = this.getProps();
        if (
          d &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = px(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ar((v) => {
            let x = this.getAxisMotionValue(v).get() || 0;
            if (Mr.test(x)) {
              const { projection: b } = this.visualElement;
              if (b && b.layout) {
                const g = b.layout.layoutBox[v];
                g && (x = er(g) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[v] = x;
          }),
          p && ke.postRender(() => p(u, f));
        const { animationState: h } = this.visualElement;
        h && h.setActive('whileDrag', !0);
      },
      s = (u, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: p,
          onDrag: h
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: v } = f;
        if (m && this.currentDirection === null) {
          (this.currentDirection = LN(v)),
            this.currentDirection !== null && p && p(this.currentDirection);
          return;
        }
        this.updateAxis('x', f.point, v),
          this.updateAxis('y', f.point, v),
          this.visualElement.render(),
          h && h(u, f);
      },
      a = (u, f) => this.stop(u, f),
      l = () =>
        ar((u) => {
          var f;
          return (
            this.getAnimationState(u) === 'paused' &&
            ((f = this.getAxisMotionValue(u).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Gx(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: tw(this.visualElement)
      }
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ke.postRender(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive('whileDrag', !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !oa(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (s = wN(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    r && yo(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && o
        ? (this.constraints = SN(o.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = TN(n)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ar((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = PN(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !yo(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = _N(n, o.root, this.visualElement.getTransformPagePoint());
    let s = EN(o.layout.layoutBox, i);
    if (r) {
      const a = r(RN(s));
      (this.hasMutatedConstraints = !!a), a && (s = Qx(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a
      } = this.getProps(),
      l = this.constraints || {},
      c = ar((u) => {
        if (!oa(u, r, this.currentDirection)) return;
        let f = (l && l[u]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          p = {
            type: 'inertia',
            velocity: n ? t[u] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f
          };
        return this.startAxisValueAnimation(u, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Nf(t, n, 0, r, this.visualElement));
  }
  stopAnimation() {
    ar((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ar((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      n = this.visualElement.getProps(),
      o = n[r];
    return (
      o ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ar((r) => {
      const { drag: n } = this.getProps();
      if (!oa(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - Ke(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!yo(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ar((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = CN({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      ar((s) => {
        if (!oa(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(Ke(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    DN.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Vr(t, 'pointerdown', (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        yo(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ke.read(n);
    const s = Nr(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (ar((u) => {
              const f = this.getAxisMotionValue(u);
              f &&
                ((this.originPoint[u] += l[u].translate),
                f.set(f.get() + l[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), r(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Xu,
        dragMomentum: a = !0
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function oa(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function LN(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
class $N extends yn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Mt),
      (this.removeListeners = Mt),
      (this.controls = new IN(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Mt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ug = (e) => (t, r) => {
  e && ke.postRender(() => e(t, r));
};
class jN extends yn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Mt);
  }
  onPointerDown(t) {
    this.session = new Gx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: tw(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: o
    } = this.node.getProps();
    return {
      onSessionStart: ug(t),
      onStart: ug(r),
      onMove: n,
      onEnd: (i, s) => {
        delete this.session, o && ke.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Vr(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function BN() {
  const e = w.useContext(mf);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = w.useId();
  return w.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const Ca = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function dg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const mi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (ie.test(e)) e = parseFloat(e);
        else return e;
      const r = dg(e, t.target.x),
        n = dg(e, t.target.y);
      return `${r}% ${n}%`;
    }
  },
  NN = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = un.parse(e);
      if (o.length > 5) return n;
      const i = un.createTransformer(e),
        s = typeof o[0] != 'number' ? 1 : 0,
        a = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = Ke(a, l, 0.5);
      return (
        typeof o[2 + s] == 'number' && (o[2 + s] /= c),
        typeof o[3 + s] == 'number' && (o[3 + s] /= c),
        i(o)
      );
    }
  };
class FN extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o
      } = this.props,
      { projection: i } = t;
    $$(VN),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove()
        })),
      (Ca.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: o,
        isPresent: i
      } = this.props,
      s = n.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== r || r === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ke.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      yf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function rw(e) {
  const [t, r] = BN(),
    n = w.useContext(Z0);
  return P.jsx(FN, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: w.useContext(G0),
    isPresent: t,
    safeToRemove: r
  });
}
const VN = {
    borderRadius: {
      ...mi,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: mi,
    borderTopRightRadius: mi,
    borderBottomLeftRadius: mi,
    borderBottomRightRadius: mi,
    boxShadow: NN
  },
  nw = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  WN = nw.length,
  fg = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  pg = (e) => typeof e == 'number' || ie.test(e);
function zN(e, t, r, n, o, i) {
  o
    ? ((e.opacity = Ke(0, r.opacity !== void 0 ? r.opacity : 1, UN(n))),
      (e.opacityExit = Ke(t.opacity !== void 0 ? t.opacity : 1, 0, HN(n))))
    : i &&
      (e.opacity = Ke(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let s = 0; s < WN; s++) {
    const a = `border${nw[s]}Radius`;
    let l = hg(t, a),
      c = hg(r, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || pg(l) === pg(c)
        ? ((e[a] = Math.max(Ke(fg(l), fg(c), n), 0)),
          (Mr.test(c) || Mr.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || r.rotate) && (e.rotate = Ke(t.rotate || 0, r.rotate || 0, n));
}
function hg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const UN = ow(0, 0.5, Fx),
  HN = ow(0.5, 0.95, Mt);
function ow(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(cs(e, t, n)));
}
function mg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function sr(e, t) {
  mg(e.x, t.x), mg(e.y, t.y);
}
function gg(e, t, r, n, o) {
  return (
    (e -= t), (e = al(e, 1 / r, n)), o !== void 0 && (e = al(e, 1 / o, n)), e
  );
}
function qN(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (Mr.test(t) &&
      ((t = parseFloat(t)), (t = Ke(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Ke(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = gg(e.min, t, r, a, o)),
    (e.max = gg(e.max, t, r, a, o));
}
function vg(e, t, [r, n, o], i, s) {
  qN(e, t[r], t[n], t[o], t.scale, i, s);
}
const KN = ['x', 'scaleX', 'originX'],
  YN = ['y', 'scaleY', 'originY'];
function yg(e, t, r, n) {
  vg(e.x, t, KN, r ? r.x : void 0, n ? n.x : void 0),
    vg(e.y, t, YN, r ? r.y : void 0, n ? n.y : void 0);
}
function bg(e) {
  return e.translate === 0 && e.scale === 1;
}
function iw(e) {
  return bg(e.x) && bg(e.y);
}
function GN(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function sw(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function xg(e) {
  return er(e.x) / er(e.y);
}
class XN {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ff(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Vf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0) return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function wg(e, t, r) {
  let n = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (r == null ? void 0 : r.z) || 0;
  if (
    ((o || i || s) && (n = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: m,
      skewY: p
    } = r;
    c && (n = `perspective(${c}px) ${n}`),
      u && (n += `rotate(${u}deg) `),
      f && (n += `rotateX(${f}deg) `),
      d && (n += `rotateY(${d}deg) `),
      m && (n += `skewX(${m}deg) `),
      p && (n += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (n += `scale(${a}, ${l})`), n || 'none';
}
const QN = (e, t) => e.depth - t.depth;
class ZN {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ff(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Vf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(QN),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function JN(e, t) {
  const r = on.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (Kr(n), e(i - t));
    };
  return ke.read(n, !0), () => Kr(n);
}
function eF(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function tF(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function rF(e, t, r) {
  const n = Tt(e) ? e : us(e);
  return n.start(Nf('', n, t, r)), n.animation;
}
const qc = ['', 'X', 'Y', 'Z'],
  nF = { visibility: 'hidden' },
  Sg = 1e3;
let oF = 0;
const Pn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Kc(e, t, r, n) {
  const { latestValues: o } = t;
  o[e] && ((r[e] = o[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function aw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? Kx(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
        ? aw(e.parent)
        : !1
    : !1;
}
function lw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = oF++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Pn.totalNodes =
              Pn.resolvedTargetDeltas =
              Pn.recalculatedProjection =
                0),
            this.nodes.forEach(aF),
            this.nodes.forEach(fF),
            this.nodes.forEach(pF),
            this.nodes.forEach(lF),
            eF(Pn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ZN());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Wf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = tF(s)), (this.instance = s);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = JN(d, 250)),
            Ca.hasAnimatedSinceResize &&
              ((Ca.hasAnimatedSinceResize = !1), this.nodes.forEach(Cg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: p
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const h =
                  this.options.transition || u.getDefaultTransition() || yF,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: x } =
                  u.getProps(),
                b = !this.targetLayout || !sw(this.targetLayout, p) || m,
                g = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (b || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const y = { ...Of(h, 'layout'), onPlay: v, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y);
              } else
                d || Cg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Kr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(hF),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          aw(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Eg);
        return;
      }
      this.isUpdating || this.nodes.forEach(uF),
        (this.isUpdating = !1),
        this.nodes.forEach(dF),
        this.nodes.forEach(iF),
        this.nodes.forEach(sF),
        this.clearAllSnapshots();
      const a = on.now();
      (gt.delta = cn(0, 1e3 / 60, a - gt.timestamp)),
        (gt.timestamp = a),
        (gt.isProcessing = !0),
        $c.update.process(gt),
        $c.preRender.process(gt),
        $c.render.process(gt),
        (gt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), yf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cF), this.sharedNodes.forEach(mF);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ke.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ke.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: n(this.instance),
            offset: r(this.instance)
          });
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !iw(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || Cn(this.latestValues) || u) &&
        (o(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        bF(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return Ze();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (en(a.x, l.offset.x), en(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = Ze();
      sr(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            sr(a, s);
            const { scroll: d } = this.root;
            d && (en(a.x, -d.offset.x), en(a.y, -d.offset.y));
          }
          en(a.x, u.offset.x), en(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Ze();
      sr(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          wo(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Cn(u.latestValues) && wo(l, u.latestValues);
      }
      return Cn(this.latestValues) && wo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ze();
      sr(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Cn(c.latestValues)) continue;
        Qu(c.latestValues) && c.updateSnapshot();
        const u = Ze(),
          f = c.measurePageBox();
        sr(u, f),
          yg(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Cn(this.latestValues) && yg(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== gt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = gt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ze()),
              (this.relativeTargetOrigin = Ze()),
              Bi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              sr(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ze()), (this.targetWithTransforms = Ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                xN(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : sr(this.target, this.layout.layoutBox),
                  Jx(this.target, this.targetDelta))
                : sr(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ze()),
                (this.relativeTargetOrigin = Ze()),
                Bi(this.relativeTargetOrigin, this.target, m.target),
                sr(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Pn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qu(this.parent.latestValues) ||
          Zx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === gt.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      sr(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      MN(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ze()));
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = xo()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = xo()),
        (this.projectionDeltaWithTransform = xo()));
      const h = this.projectionTransform;
      ji(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = wg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== h ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', p)),
        Pn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = xo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = Ze(),
        m = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        h = m !== p,
        v = this.getStack(),
        x = !v || v.members.length <= 1,
        b = !!(h && !x && this.options.crossfade === !0 && !this.path.some(vF));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (y) => {
        const E = y / 1e3;
        Pg(f.x, s.x, E),
          Pg(f.y, s.y, E),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Bi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            gF(this.relativeTarget, this.relativeTargetOrigin, d, E),
            g && GN(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ze()),
            sr(g, this.relativeTarget)),
          h &&
            ((this.animationValues = u), zN(u, c, this.latestValues, E, b, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Kr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ke.update(() => {
          (Ca.hasAnimatedSinceResize = !0),
            (this.currentAnimation = rF(0, Sg, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              }
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Sg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u
      } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          cw(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Ze();
          const f = er(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = er(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        sr(a, l),
          wo(a, u),
          ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new XN()),
        this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Kc('z', s, c, this.animationValues);
      for (let u = 0; u < qc.length; u++)
        Kc(`rotate${qc[u]}`, s, c, this.animationValues),
          Kc(`skew${qc[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return nF;
      const c = { visibility: '' },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ''),
          (c.pointerEvents = Sa(s == null ? void 0 : s.pointerEvents) || ''),
          (c.transform = u ? u(this.latestValues, '') : 'none'),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const h = {};
        return (
          this.options.layoutId &&
            ((h.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (h.pointerEvents = Sa(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !Cn(this.latestValues) &&
            ((h.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          h
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = wg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      const { x: m, y: p } = this.projectionDelta;
      (c.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const h in tl) {
        if (d[h] === void 0) continue;
        const { correct: v, applyTo: x } = tl[h],
          b = c.transform === 'none' ? d[h] : v(d[h], f);
        if (x) {
          const g = x.length;
          for (let y = 0; y < g; y++) c[x[y]] = b;
        } else c[h] = b;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? Sa(s == null ? void 0 : s.pointerEvents) || ''
              : 'none'),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Eg),
        this.root.sharedNodes.clear();
    }
  };
}
function iF(e) {
  e.updateLayout();
}
function sF(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = r.source !== e.layout.source;
    i === 'size'
      ? ar((f) => {
          const d = s ? r.measuredBox[f] : r.layoutBox[f],
            m = er(d);
          (d.min = n[f].min), (d.max = d.min + m);
        })
      : cw(i, r.layoutBox, n) &&
        ar((f) => {
          const d = s ? r.measuredBox[f] : r.layoutBox[f],
            m = er(n[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const a = xo();
    ji(a, n, r.layoutBox);
    const l = xo();
    s ? ji(l, e.applyTransform(o, !0), r.measuredBox) : ji(l, n, r.layoutBox);
    const c = !iw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const p = Ze();
          Bi(p, r.layoutBox, d.layoutBox);
          const h = Ze();
          Bi(h, n, m.layoutBox),
            sw(p, h) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = h),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function aF(e) {
  Pn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function lF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cF(e) {
  e.clearSnapshot();
}
function Eg(e) {
  e.clearMeasurements();
}
function uF(e) {
  e.isLayoutDirty = !1;
}
function dF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Cg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function fF(e) {
  e.resolveTargetDelta();
}
function pF(e) {
  e.calcProjection();
}
function hF(e) {
  e.resetSkewAndRotation();
}
function mF(e) {
  e.removeLeadSnapshot();
}
function Pg(e, t, r) {
  (e.translate = Ke(t.translate, 0, r)),
    (e.scale = Ke(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Tg(e, t, r, n) {
  (e.min = Ke(t.min, r.min, n)), (e.max = Ke(t.max, r.max, n));
}
function gF(e, t, r, n) {
  Tg(e.x, t.x, r.x, n), Tg(e.y, t.y, r.y, n);
}
function vF(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const yF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Rg = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  kg = Rg('applewebkit/') && !Rg('chrome/') ? Math.round : Mt;
function Mg(e) {
  (e.min = kg(e.min)), (e.max = kg(e.max));
}
function bF(e) {
  Mg(e.x), Mg(e.y);
}
function cw(e, t, r) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Gu(xg(t), xg(r), 0.2))
  );
}
const xF = lw({
    attachResizeListener: (e, t) => Nr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Yc = { current: void 0 },
  uw = lw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Yc.current) {
        const e = new xF({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Yc.current = e);
      }
      return Yc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed'
  }),
  wF = {
    pan: { Feature: jN },
    drag: { Feature: $N, ProjectionNode: uw, MeasureLayout: rw }
  },
  Ju = { current: null },
  dw = { current: !1 };
function SF() {
  if (((dw.current = !0), !!gf))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Ju.current = e.matches);
      e.addListener(t), t();
    } else Ju.current = !1;
}
function EF(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      s = r[o];
    if (Tt(i)) e.addValue(o, i), sl(n) && n.add(o);
    else if (Tt(s)) e.addValue(o, us(i, { owner: e })), sl(n) && n.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, us(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Og = new WeakMap(),
  CF = [...wx, Ct, un],
  PF = (e) => CF.find(xx(e)),
  Ag = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ],
  TF = xf.length;
class RF {
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s
    },
    a = {}
  ) {
    (this.resolveKeyframes = (d, m, p, h) =>
      new this.KeyframeResolver(d, m, p, h, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Af),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ke.render(this.render, !1, !0));
    const { latestValues: l, renderState: c } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = r.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = ic(r)),
      (this.isVariantNode = Q0(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const d in f) {
      const m = f[d];
      l[d] !== void 0 && Tt(m) && (m.set(l[d], !1), sl(u) && u.add(d));
    }
  }
  mount(t) {
    (this.current = t),
      Og.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      dw.current || SF(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Ju.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Og.delete(this.current),
      this.projection && this.projection.unmount(),
      Kr(this.notifyUpdate),
      Kr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Kn.has(t),
      o = r.on('change', (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ke.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = r.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in No) {
      const r = No[t];
      if (!r) continue;
      const { isEnabled: n, Feature: o } = r;
      if (
        (!this.features[t] &&
          o &&
          n(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < Ag.length; n++) {
      const o = Ag[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = 'on' + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = EF(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < TF; n++) {
      const o = xf[n],
        i = this.props[o];
      (as(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n &&
      (n && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = us(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, n)),
      n
    );
  }
  readValue(t, r) {
    var n;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
            n !== void 0
          ? n
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == 'string' && (yx(o) || vx(o))
          ? (o = parseFloat(o))
          : !PF(o) && un.test(r) && (o = Mx(t, r)),
        this.setBaseTarget(t, Tt(o) ? o.get() : o)),
      Tt(o) ? o.get() : o
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props;
    let o;
    if (typeof n == 'string' || typeof n == 'object') {
      const s = Mf(
        this.props,
        n,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      s && (o = s[t]);
    }
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Tt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Wf()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class fw extends RF {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Ox);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
}
function kF(e) {
  return window.getComputedStyle(e);
}
class MF extends fw {
  constructor() {
    super(...arguments), (this.type = 'html');
  }
  readValueFromInstance(t, r) {
    if (Kn.has(r)) {
      const n = Df(r);
      return (n && n.default) || 0;
    } else {
      const n = kF(t),
        o = (tx(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return ew(t, r);
  }
  build(t, r, n, o) {
    Cf(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return kf(t, r, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Tt(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    sx(t, r, n, o);
  }
}
class OF extends fw {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Kn.has(r)) {
      const n = Df(r);
      return (n && n.default) || 0;
    }
    return (r = ax.has(r) ? r : vf(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Ze();
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return cx(t, r, n);
  }
  build(t, r, n, o) {
    Tf(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    lx(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Rf(t.tagName)), super.mount(t);
  }
}
const AF = (e, t) =>
    wf(e)
      ? new OF(t, { enableHardwareAcceleration: !1 })
      : new MF(t, {
          allowProjection: e !== w.Fragment,
          enableHardwareAcceleration: !0
        }),
  _F = { layout: { ProjectionNode: uw, MeasureLayout: rw } },
  DF = { ...gN, ...Tj, ...wF, ..._F },
  ia = I$((e, t) => pj(e, t, DF, AF)),
  IF = (e, t, r) => {
    const n = t - e;
    return ((((r - e) % n) + n) % n) + e;
  };
function _g(...e) {
  const t = w.useRef(0),
    [r, n] = w.useState(e[t.current]),
    o = w.useCallback(
      (i) => {
        (t.current = typeof i != 'number' ? IF(0, e.length, t.current + 1) : i),
          n(e[t.current]);
      },
      [e.length, ...e]
    );
  return [r, o];
}
const pw = de.forwardRef(
  ({ children: e, type: t, direction: r, offset: n, scale: o }, i) => {
    let s, a;
    switch (r) {
      case 'up':
      case 'left':
        (s = n), (a = 0);
        break;
      case 'right':
      case 'down':
      default:
        (s = 0), (a = n);
        break;
    }
    const [l, c] = _g(s, a),
      [u, f] = _g(s, a);
    switch (t) {
      case 'rotate':
        return P.jsx(ia.div, {
          ref: i,
          animate: { rotate: 360 },
          transition: {
            repeat: 1 / 0,
            repeatType: 'loop',
            duration: 2,
            repeatDelay: 0
          },
          children: e
        });
      case 'slide':
        return r === 'up' || r === 'down'
          ? P.jsx(ia.div, {
              ref: i,
              animate: { y: u !== void 0 ? u : '' },
              onHoverEnd: () => f(),
              onHoverStart: () => f(),
              children: e
            })
          : P.jsx(ia.div, {
              ref: i,
              animate: { x: l !== void 0 ? l : '' },
              onHoverEnd: () => c(),
              onHoverStart: () => c(),
              children: e
            });
      case 'scale':
      default:
        return (
          typeof o == 'number' && (o = { hover: o, tap: o }),
          P.jsx(ia.div, {
            ref: i,
            whileHover: { scale: o == null ? void 0 : o.hover },
            whileTap: { scale: o == null ? void 0 : o.tap },
            children: e
          })
        );
    }
  }
);
pw.propTypes = {
  children: W.node,
  offset: W.number,
  type: W.oneOf(['slide', 'scale', 'rotate']),
  direction: W.oneOf(['up', 'down', 'left', 'right']),
  scale: W.oneOfType([W.number, W.object])
};
pw.defaultProps = {
  type: 'scale',
  offset: 10,
  direction: 'right',
  scale: { hover: 1, tap: 0.9 }
};
const LF = () => {
    dt();
    const e = Wo(),
      t = dn((a) => a.customization);
    w.useState(!1);
    const [r, n] = w.useState(t.borderRadius);
    w.useEffect(() => {
      e({ type: Rv, borderRadius: r });
    }, [e, r]);
    let o;
    switch (t.fontFamily) {
      case "'Inter', sans-serif":
        o = 'Inter';
        break;
      case "'Poppins', sans-serif":
        o = 'Poppins';
        break;
      case "'Roboto', sans-serif":
      default:
        o = 'Roboto';
        break;
    }
    const [i, s] = w.useState(o);
    return (
      w.useEffect(() => {
        let a;
        switch (i) {
          case 'Inter':
            a = "'Inter', sans-serif";
            break;
          case 'Poppins':
            a = "'Poppins', sans-serif";
            break;
          case 'Roboto':
          default:
            a = "'Roboto', sans-serif";
            break;
        }
        e({ type: Tv, fontFamily: a });
      }, [e, i]),
      P.jsx(P.Fragment, {})
    );
  },
  $F = () => P.jsxs(P.Fragment, { children: [P.jsx(qv, {}), P.jsx(LF, {})] }),
  Dg = Ut(
    w.lazy(() =>
      zt(() => import('./Login3-DpAqR3z5.js'), __vite__mapDeps([23, 1, 5, 3]))
    )
  ),
  jF = Ut(w.lazy(() => zt(() => Promise.resolve().then(() => bV), void 0))),
  BF = {
    path: '/',
    element: P.jsx($F, {}),
    children: [
      { path: '', element: P.jsx(Dg, {}) },
      { path: 'pages/login/login3', element: P.jsx(Dg, {}) },
      { path: 'pages/register/register3', element: P.jsx(jF, {}) }
    ]
  },
  zf = TC([BF, g$], { basename: '' });
console.log(zf.basename);
bi.render(
  P.jsx(de.StrictMode, {
    children: P.jsx($C, {
      basename: '/Elaf',
      children: P.jsx(Yv, { router: zf })
    })
  }),
  document.getElementById('root')
);
const NF = '#e0e0e0',
  FF = '#ffffff',
  VF = '#90caf9',
  WF = '#a31f23',
  zF = '#1e88e5',
  UF = '#1565c0',
  HF = '#ffcccc',
  qF = '#b39ddb',
  KF = '#1e88e5',
  YF = '#a31f23',
  GF = '#4527a0',
  XF = '#b9f6ca',
  QF = '#69f0ae',
  ZF = '#00e676',
  JF = '#00c853',
  e5 = '#ef9a9a',
  t5 = '#a31f23',
  r5 = '#c62828',
  n5 = '#fbe9e7',
  o5 = '#ffab91',
  i5 = '#d84315',
  s5 = '#fff8e1',
  a5 = '#ffe57f',
  l5 = '#ffc107',
  c5 = '#f8fafc',
  u5 = '#eef2f6',
  d5 = '#e3e8ef',
  f5 = '#cdd5df',
  p5 = '#697586',
  h5 = '#4b5565',
  m5 = '#364152',
  g5 = '#121926',
  v5 = '#000000',
  y5 = '#000000',
  b5 = '#000000',
  x5 = '#000000',
  w5 = '#d7dcec',
  S5 = '#bdc8f0',
  E5 = '#8492c4',
  C5 = '#eef2f6',
  P5 = '#2196f3',
  T5 = '#1e88e5',
  R5 = '#90caf9',
  k5 = '#1565c0',
  M5 = '#d1c4e9',
  O5 = '#7c4dff',
  A5 = '#651fff',
  _5 = '#b39ddb',
  D5 = '#6200ea',
  I5 = {
    paper: NF,
    primaryLight: FF,
    primary200: VF,
    primaryMain: WF,
    primaryDark: zF,
    primary800: UF,
    secondaryLight: HF,
    secondary200: qF,
    secondaryMain: KF,
    secondaryDark: YF,
    secondary800: GF,
    successLight: XF,
    success200: QF,
    successMain: ZF,
    successDark: JF,
    errorLight: e5,
    errorMain: t5,
    errorDark: r5,
    orangeLight: n5,
    orangeMain: o5,
    orangeDark: i5,
    warningLight: s5,
    warningMain: a5,
    warningDark: l5,
    grey50: c5,
    grey100: u5,
    grey200: d5,
    grey300: f5,
    grey500: p5,
    grey600: h5,
    grey700: m5,
    grey900: g5,
    darkPaper: v5,
    darkBackground: y5,
    darkLevel1: b5,
    darkLevel2: x5,
    darkTextTitle: w5,
    darkTextPrimary: S5,
    darkTextSecondary: E5,
    darkPrimaryLight: C5,
    darkPrimaryMain: P5,
    darkPrimaryDark: T5,
    darkPrimary200: R5,
    darkPrimary800: k5,
    darkSecondaryLight: M5,
    darkSecondaryMain: O5,
    darkSecondaryDark: A5,
    darkSecondary200: _5,
    darkSecondary800: D5
  };
function L5(e) {
  var r, n, o, i, s, a, l, c, u, f, d, m, p;
  const t = (r = e.colors) == null ? void 0 : r.grey50;
  return {
    MuiButton: {
      styleOverrides: { root: { fontWeight: 500, borderRadius: '4px' } }
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
        rounded: {
          borderRadius: `${(n = e == null ? void 0 : e.customization) == null ? void 0 : n.borderRadius}px`
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: (o = e.colors) == null ? void 0 : o.textDark,
          padding: '24px'
        },
        title: { fontSize: '1.125rem' }
      }
    },
    MuiCardContent: { styleOverrides: { root: { padding: '24px' } } },
    MuiCardActions: { styleOverrides: { root: { padding: '24px' } } },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: e.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: e.menuSelected,
            backgroundColor: e.menuSelectedBack,
            '&:hover': { backgroundColor: e.menuSelectedBack },
            '& .MuiListItemIcon-root': { color: e.menuSelected }
          },
          '&:hover': {
            backgroundColor: e.menuSelectedBack,
            color: e.menuSelected,
            '& .MuiListItemIcon-root': { color: e.menuSelected }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: { root: { color: e.darkTextPrimary, minWidth: '36px' } }
    },
    MuiListItemText: { styleOverrides: { primary: { color: e.textDark } } },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: e.textDark,
          '&::placeholder': { color: e.darkTextSecondary, fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: t,
          borderRadius: `${(i = e == null ? void 0 : e.customization) == null ? void 0 : i.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: (s = e.colors) == null ? void 0 : s.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: (a = e.colors) == null ? void 0 : a.primaryLight
          },
          '&.MuiInputBase-multiline': { padding: 1 }
        },
        input: {
          fontWeight: 500,
          background: t,
          padding: '15.5px 14px',
          borderRadius: `${(l = e == null ? void 0 : e.customization) == null ? void 0 : l.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': { paddingLeft: 0 }
          }
        },
        inputAdornedStart: { paddingLeft: 4 },
        notchedOutline: {
          borderRadius: `${(c = e == null ? void 0 : e.customization) == null ? void 0 : c.borderRadius}px`
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: (u = e.colors) == null ? void 0 : u.grey300
          }
        },
        mark: { backgroundColor: e.paper, width: '4px' },
        valueLabel: {
          color:
            (f = e == null ? void 0 : e.colors) == null
              ? void 0
              : f.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: e.divider, opacity: 1 } }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: (d = e.colors) == null ? void 0 : d.primaryDark,
          background: (m = e.colors) == null ? void 0 : m.primary200
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': { color: 'inherit' }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: e.paper,
          background: (p = e.colors) == null ? void 0 : p.grey700
        }
      }
    }
  };
}
function $5(e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    l,
    c,
    u,
    f,
    d,
    m,
    p,
    h,
    v,
    x,
    b,
    g,
    y,
    E,
    S,
    C,
    T,
    R,
    k,
    A,
    I,
    L,
    D,
    N,
    B,
    j,
    F,
    z,
    q,
    fe,
    J,
    ae,
    ve,
    ye;
  return {
    mode:
      (t = e == null ? void 0 : e.customization) == null ? void 0 : t.navType,
    common: { black: (r = e.colors) == null ? void 0 : r.darkPaper },
    primary: {
      light: (n = e.colors) == null ? void 0 : n.primaryLight,
      main: (o = e.colors) == null ? void 0 : o.primaryMain,
      dark: (i = e.colors) == null ? void 0 : i.primaryDark,
      200: (s = e.colors) == null ? void 0 : s.primary200,
      800: (a = e.colors) == null ? void 0 : a.primary800
    },
    secondary: {
      light: (l = e.colors) == null ? void 0 : l.secondaryLight,
      main: (c = e.colors) == null ? void 0 : c.secondaryMain,
      dark: (u = e.colors) == null ? void 0 : u.secondaryDark,
      200: (f = e.colors) == null ? void 0 : f.secondary200,
      800: (d = e.colors) == null ? void 0 : d.secondary800
    },
    error: {
      light: (m = e.colors) == null ? void 0 : m.errorLight,
      main: (p = e.colors) == null ? void 0 : p.errorMain,
      dark: (h = e.colors) == null ? void 0 : h.errorDark
    },
    orange: {
      light: (v = e.colors) == null ? void 0 : v.orangeLight,
      main: (x = e.colors) == null ? void 0 : x.orangeMain,
      dark: (b = e.colors) == null ? void 0 : b.orangeDark
    },
    warning: {
      light: (g = e.colors) == null ? void 0 : g.warningLight,
      main: (y = e.colors) == null ? void 0 : y.warningMain,
      dark: (E = e.colors) == null ? void 0 : E.warningDark
    },
    success: {
      light: (S = e.colors) == null ? void 0 : S.successLight,
      200: (C = e.colors) == null ? void 0 : C.success200,
      main: (T = e.colors) == null ? void 0 : T.successMain,
      dark: (R = e.colors) == null ? void 0 : R.successDark
    },
    grey: {
      50: (k = e.colors) == null ? void 0 : k.grey50,
      100: (A = e.colors) == null ? void 0 : A.grey100,
      500: e.darkTextSecondary,
      600: e.heading,
      700: e.darkTextPrimary,
      900: e.textDark
    },
    dark: {
      light: (I = e.colors) == null ? void 0 : I.darkTextPrimary,
      main: (L = e.colors) == null ? void 0 : L.darkLevel1,
      dark: (D = e.colors) == null ? void 0 : D.darkLevel2,
      800: (N = e.colors) == null ? void 0 : N.darkBackground,
      900: (B = e.colors) == null ? void 0 : B.darkPaper
    },
    text: {
      primary: e.darkTextPrimary,
      secondary: e.darkTextSecondary,
      dark: e.textDark,
      hint: (j = e.colors) == null ? void 0 : j.grey100
    },
    background: { paper: e.paper, default: e.backgroundDefault },
    red: {
      primary: (F = e.colors) == null ? void 0 : F.red,
      dark: (z = e.colors) == null ? void 0 : z.redDark,
      light: (q = e.colors) == null ? void 0 : q.redLight
    },
    primary1: {
      light: (fe = e.colors) == null ? void 0 : fe.primaryLight,
      main: (J = e.colors) == null ? void 0 : J.red,
      dark: (ae = e.colors) == null ? void 0 : ae.primaryDark,
      200: (ve = e.colors) == null ? void 0 : ve.primary200,
      800: (ye = e.colors) == null ? void 0 : ye.primary800
    }
  };
}
function j5(e) {
  var t, r;
  return {
    fontFamily:
      (t = e == null ? void 0 : e.customization) == null
        ? void 0
        : t.fontFamily,
    h6: { fontWeight: 500, color: e.heading, fontSize: '0.75rem' },
    h5: { fontSize: '0.875rem', color: e.heading, fontWeight: 500 },
    h4: { fontSize: '1rem', color: e.heading, fontWeight: 600 },
    h3: { fontSize: '1.25rem', color: e.heading, fontWeight: 600 },
    h2: { fontSize: '1.5rem', color: e.heading, fontWeight: 700 },
    h1: { fontSize: '2.125rem', color: e.heading, fontWeight: 700 },
    subtitle1: { fontSize: '0.875rem', fontWeight: 500, color: e.textDark },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: e.darkTextSecondary
    },
    caption: {
      fontSize: '0.75rem',
      color: e.darkTextSecondary,
      fontWeight: 400
    },
    body1: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.334em' },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: e.darkTextPrimary
    },
    button: { textTransform: 'capitalize' },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        color: e.grey500,
        '&[data-shrink="false"]': { top: 5 }
      },
      '& > div > input': { padding: '30.5px 14px 11.5px !important' },
      '& legend': { display: 'none' },
      '& fieldset': { top: 0 }
    },
    mainContent: {
      backgroundColor: e.background,
      width: '100%',
      minHeight: 'calc(100vh - 88px)',
      flexGrow: 1,
      padding: '20px',
      marginTop: '88px',
      marginRight: '20px',
      borderRadius: `${(r = e == null ? void 0 : e.customization) == null ? void 0 : r.borderRadius}px`
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: e.heading,
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px'
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: e.darkTextSecondary,
      textTransform: 'capitalize'
    },
    commonAvatar: { cursor: 'pointer', borderRadius: '8px' },
    smallAvatar: { width: '22px', height: '22px', fontSize: '1rem' },
    mediumAvatar: { width: '34px', height: '34px', fontSize: '1.2rem' },
    largeAvatar: { width: '44px', height: '44px', fontSize: '1.5rem' }
  };
}
const B5 = (e) => {
    const t = I5,
      r = {
        colors: t,
        heading: t.grey900,
        paper: t.paper,
        backgroundDefault: t.paper,
        background: t.primaryLight,
        darkTextPrimary: t.grey700,
        darkTextSecondary: t.grey500,
        textDark: t.grey900,
        menuSelected: t.secondaryDark,
        menuSelectedBack: t.secondaryLight,
        divider: t.grey200,
        customization: e
      },
      n = {
        direction: 'ltr',
        palette: $5(r),
        mixins: {
          toolbar: {
            minHeight: '48px',
            padding: '16px',
            '@media (min-width: 600px)': { minHeight: '48px' }
          }
        },
        typography: j5(r)
      },
      o = Vd(n);
    return (o.components = L5(r)), o;
  },
  hw = ({ children: e }) => (
    w.useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []),
    e || null
  );
hw.propTypes = { children: W.node };
const N5 = () => {
  const e = dn((t) => t.customization);
  return P.jsx(by, {
    injectFirst: !0,
    children: P.jsxs(rM, {
      theme: B5(e),
      children: [
        P.jsx(Pb, {}),
        P.jsx(hw, { children: P.jsx(Yv, { router: zf }) })
      ]
    })
  });
};
function mw(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = mw(e[t])) && (n && (n += ' '), (n += r));
    else for (t in e) e[t] && (n && (n += ' '), (n += t));
  return n;
}
function Yn() {
  for (var e, t, r = 0, n = ''; r < arguments.length; )
    (e = arguments[r++]) && (t = mw(e)) && (n && (n += ' '), (n += t));
  return n;
}
let F5 = { data: '' },
  V5 = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || F5,
  W5 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  z5 = /\/\*[^]*?\*\/|  +/g,
  Ig = /\n+/g,
  kn = (e, t) => {
    let r = '',
      n = '',
      o = '';
    for (let i in e) {
      let s = e[i];
      i[0] == '@'
        ? i[1] == 'i'
          ? (r = i + ' ' + s + ';')
          : (n +=
              i[1] == 'f'
                ? kn(s, i)
                : i + '{' + kn(s, i[1] == 'k' ? '' : t) + '}')
        : typeof s == 'object'
          ? (n += kn(
              s,
              t
                ? t.replace(/([^,])+/g, (a) =>
                    i.replace(/(^:.*)|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, a) : a ? a + ' ' + l : l
                    )
                  )
                : i
            ))
          : s != null &&
            ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, '-$&').toLowerCase()),
            (o += kn.p ? kn.p(i, s) : i + ':' + s + ';'));
    }
    return r + (t && o ? t + '{' + o + '}' : o) + n;
  },
  $r = {},
  gw = (e) => {
    if (typeof e == 'object') {
      let t = '';
      for (let r in e) t += r + gw(e[r]);
      return t;
    }
    return e;
  },
  U5 = (e, t, r, n, o) => {
    let i = gw(e),
      s =
        $r[i] ||
        ($r[i] = ((l) => {
          let c = 0,
            u = 11;
          for (; c < l.length; ) u = (101 * u + l.charCodeAt(c++)) >>> 0;
          return 'go' + u;
        })(i));
    if (!$r[s]) {
      let l =
        i !== e
          ? e
          : ((c) => {
              let u,
                f,
                d = [{}];
              for (; (u = W5.exec(c.replace(z5, ''))); )
                u[4]
                  ? d.shift()
                  : u[3]
                    ? ((f = u[3].replace(Ig, ' ').trim()),
                      d.unshift((d[0][f] = d[0][f] || {})))
                    : (d[0][u[1]] = u[2].replace(Ig, ' ').trim());
              return d[0];
            })(e);
      $r[s] = kn(o ? { ['@keyframes ' + s]: l } : l, r ? '' : '.' + s);
    }
    let a = r && $r.g ? $r.g : null;
    return (
      r && ($r.g = $r[s]),
      ((l, c, u, f) => {
        f
          ? (c.data = c.data.replace(f, l))
          : c.data.indexOf(l) === -1 && (c.data = u ? l + c.data : c.data + l);
      })($r[s], t, n, a),
      s
    );
  },
  H5 = (e, t, r) =>
    e.reduce((n, o, i) => {
      let s = t[i];
      if (s && s.call) {
        let a = s(r),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        s = l
          ? '.' + l
          : a && typeof a == 'object'
            ? a.props
              ? ''
              : kn(a, '')
            : a === !1
              ? ''
              : a;
      }
      return n + o + (s ?? '');
    }, '');
function Uf(e) {
  let t = this || {},
    r = e.call ? e(t.p) : e;
  return U5(
    r.unshift
      ? r.raw
        ? H5(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {})
      : r,
    V5(t.target),
    t.g,
    t.o,
    t.k
  );
}
Uf.bind({ g: 1 });
Uf.bind({ k: 1 });
function q5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function vw(e, t, r) {
  return t && q5(e.prototype, t), e;
}
function Ie() {
  return (
    (Ie =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ie.apply(this, arguments)
  );
}
function yw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function $s(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Lg(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
var $g = function () {
    return '';
  },
  bw = de.createContext({ enqueueSnackbar: $g, closeSnackbar: $g }),
  Tn = {
    downXs: '@media (max-width:599.95px)',
    upSm: '@media (min-width:600px)'
  },
  jg = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Hf = function (t) {
    return '' + jg(t.vertical) + jg(t.horizontal);
  },
  sa = function (t) {
    return !!t || t === 0;
  },
  aa = 'unmounted',
  co = 'exited',
  uo = 'entering',
  gi = 'entered',
  Bg = 'exiting',
  qf = (function (e) {
    yw(t, e);
    function t(n) {
      var o;
      o = e.call(this, n) || this;
      var i = n.appear,
        s;
      return (
        (o.appearStatus = null),
        n.in
          ? i
            ? ((s = co), (o.appearStatus = uo))
            : (s = gi)
          : n.unmountOnExit || n.mountOnEnter
            ? (s = aa)
            : (s = co),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === aa ? { status: co } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== uo && s !== gi && (i = uo)
            : (s === uo || s === gi) && (i = Bg);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var o = this.props.timeout,
          i = o,
          s = o;
        return (
          o != null &&
            typeof o != 'number' &&
            typeof o != 'string' &&
            ((s = o.exit), (i = o.enter)),
          { exit: s, enter: i }
        );
      }),
      (r.updateStatus = function (o, i) {
        o === void 0 && (o = !1),
          i !== null
            ? (this.cancelNextCallback(),
              i === uo ? this.performEnter(o) : this.performExit())
            : this.props.unmountOnExit &&
              this.state.status === co &&
              this.setState({ status: aa });
      }),
      (r.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = o,
          l = this.getTimeouts();
        if (!o && !s) {
          this.safeSetState({ status: gi }, function () {
            i.props.onEntered && i.props.onEntered(i.node, a);
          });
          return;
        }
        this.props.onEnter && this.props.onEnter(this.node, a),
          this.safeSetState({ status: uo }, function () {
            i.props.onEntering && i.props.onEntering(i.node, a),
              i.onTransitionEnd(l.enter, function () {
                i.safeSetState({ status: gi }, function () {
                  i.props.onEntered && i.props.onEntered(i.node, a);
                });
              });
          });
      }),
      (r.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts();
        if (!i) {
          this.safeSetState({ status: co }, function () {
            o.props.onExited && o.props.onExited(o.node);
          });
          return;
        }
        this.props.onExit && this.props.onExit(this.node),
          this.safeSetState({ status: Bg }, function () {
            o.props.onExiting && o.props.onExiting(o.node),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: co }, function () {
                  o.props.onExited && o.props.onExited(o.node);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          this.nextCallback.cancel &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (r.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function () {
            s && ((s = !1), (i.nextCallback = null), o());
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = o == null && !this.props.addEndListener;
        if (!this.node || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        this.props.addEndListener &&
          this.props.addEndListener(this.node, this.nextCallback),
          o != null && setTimeout(this.nextCallback, o);
      }),
      (r.render = function () {
        var o = this.state.status;
        if (o === aa) return null;
        var i = this.props,
          s = i.children,
          a = $s(i, [
            'children',
            'in',
            'mountOnEnter',
            'unmountOnExit',
            'appear',
            'enter',
            'exit',
            'timeout',
            'addEndListener',
            'onEnter',
            'onEntering',
            'onEntered',
            'onExit',
            'onExiting',
            'onExited',
            'nodeRef'
          ]);
        return s(o, a);
      }),
      vw(t, [
        {
          key: 'node',
          get: function () {
            var o,
              i =
                (o = this.props.nodeRef) === null || o === void 0
                  ? void 0
                  : o.current;
            if (!i)
              throw new Error(
                'notistack - Custom snackbar is not refForwarding'
              );
            return i;
          }
        }
      ]),
      t
    );
  })(de.Component);
function fo() {}
qf.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: fo,
  onEntering: fo,
  onEntered: fo,
  onExit: fo,
  onExiting: fo,
  onExited: fo
};
function Ng(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function ed(e, t) {
  return w.useMemo(
    function () {
      return e == null && t == null
        ? null
        : function (r) {
            Ng(e, r), Ng(t, r);
          };
    },
    [e, t]
  );
}
function ll(e) {
  var t = e.timeout,
    r = e.style,
    n = r === void 0 ? {} : r,
    o = e.mode;
  return {
    duration: typeof t == 'object' ? t[o] || 0 : t,
    easing: n.transitionTimingFunction,
    delay: n.transitionDelay
  };
}
var td = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  xw = function (t) {
    t.scrollTop = t.scrollTop;
  },
  Fg = function (t) {
    return Math.round(t) + 'ms';
  };
function So(e, t) {
  e === void 0 && (e = ['all']);
  var r = t || {},
    n = r.duration,
    o = n === void 0 ? 300 : n,
    i = r.easing,
    s = i === void 0 ? td.easeInOut : i,
    a = r.delay,
    l = a === void 0 ? 0 : a,
    c = Array.isArray(e) ? e : [e];
  return c
    .map(function (u) {
      var f = typeof o == 'string' ? o : Fg(o),
        d = typeof l == 'string' ? l : Fg(l);
      return u + ' ' + f + ' ' + s + ' ' + d;
    })
    .join(',');
}
function K5(e) {
  return (e && e.ownerDocument) || document;
}
function ww(e) {
  var t = K5(e);
  return t.defaultView || window;
}
function Y5(e, t) {
  t === void 0 && (t = 166);
  var r;
  function n() {
    for (
      var o = this, i = arguments.length, s = new Array(i), a = 0;
      a < i;
      a++
    )
      s[a] = arguments[a];
    var l = function () {
      e.apply(o, s);
    };
    clearTimeout(r), (r = setTimeout(l, t));
  }
  return (
    (n.clear = function () {
      clearTimeout(r);
    }),
    n
  );
}
function G5(e, t) {
  var r = t.getBoundingClientRect(),
    n = ww(t),
    o;
  if (t.fakeTransform) o = t.fakeTransform;
  else {
    var i = n.getComputedStyle(t);
    o =
      i.getPropertyValue('-webkit-transform') ||
      i.getPropertyValue('transform');
  }
  var s = 0,
    a = 0;
  if (o && o !== 'none' && typeof o == 'string') {
    var l = o.split('(')[1].split(')')[0].split(',');
    (s = parseInt(l[4], 10)), (a = parseInt(l[5], 10));
  }
  switch (e) {
    case 'left':
      return 'translateX(' + (n.innerWidth + s - r.left) + 'px)';
    case 'right':
      return 'translateX(-' + (r.left + r.width - s) + 'px)';
    case 'up':
      return 'translateY(' + (n.innerHeight + a - r.top) + 'px)';
    default:
      return 'translateY(-' + (r.top + r.height - a) + 'px)';
  }
}
function la(e, t) {
  if (t) {
    var r = G5(e, t);
    r && ((t.style.webkitTransform = r), (t.style.transform = r));
  }
}
var Sw = w.forwardRef(function (e, t) {
  var r = e.children,
    n = e.direction,
    o = n === void 0 ? 'down' : n,
    i = e.in,
    s = e.style,
    a = e.timeout,
    l = a === void 0 ? 0 : a,
    c = e.onEnter,
    u = e.onEntered,
    f = e.onExit,
    d = e.onExited,
    m = $s(e, [
      'children',
      'direction',
      'in',
      'style',
      'timeout',
      'onEnter',
      'onEntered',
      'onExit',
      'onExited'
    ]),
    p = w.useRef(null),
    h = ed(r.ref, p),
    v = ed(h, t),
    x = function (C, T) {
      la(o, C), xw(C), c && c(C, T);
    },
    b = function (C) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || td.easeOut,
        R = ll({
          timeout: l,
          mode: 'enter',
          style: Ie({}, s, { transitionTimingFunction: T })
        });
      (C.style.webkitTransition = So('-webkit-transform', R)),
        (C.style.transition = So('transform', R)),
        (C.style.webkitTransform = 'none'),
        (C.style.transform = 'none');
    },
    g = function (C) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || td.sharp,
        R = ll({
          timeout: l,
          mode: 'exit',
          style: Ie({}, s, { transitionTimingFunction: T })
        });
      (C.style.webkitTransition = So('-webkit-transform', R)),
        (C.style.transition = So('transform', R)),
        la(o, C),
        f && f(C);
    },
    y = function (C) {
      (C.style.webkitTransition = ''), (C.style.transition = ''), d && d(C);
    },
    E = w.useCallback(
      function () {
        p.current && la(o, p.current);
      },
      [o]
    );
  return (
    w.useEffect(
      function () {
        if (!(i || o === 'down' || o === 'right')) {
          var S = Y5(function () {
              p.current && la(o, p.current);
            }),
            C = ww(p.current);
          return (
            C.addEventListener('resize', S),
            function () {
              S.clear(), C.removeEventListener('resize', S);
            }
          );
        }
      },
      [o, i]
    ),
    w.useEffect(
      function () {
        i || E();
      },
      [i, E]
    ),
    w.createElement(
      qf,
      Object.assign(
        {
          appear: !0,
          nodeRef: p,
          onEnter: x,
          onEntered: u,
          onEntering: b,
          onExit: g,
          onExited: y,
          in: i,
          timeout: l
        },
        m
      ),
      function (S, C) {
        return w.cloneElement(
          r,
          Ie(
            {
              ref: v,
              style: Ie(
                { visibility: S === 'exited' && !i ? 'hidden' : void 0 },
                s,
                {},
                r.props.style
              )
            },
            C
          )
        );
      }
    )
  );
});
Sw.displayName = 'Slide';
var cc = function (t) {
    return de.createElement(
      'svg',
      Object.assign(
        {
          viewBox: '0 0 24 24',
          focusable: 'false',
          style: {
            fontSize: 20,
            marginInlineEnd: 8,
            userSelect: 'none',
            width: '1em',
            height: '1em',
            display: 'inline-block',
            fill: 'currentColor',
            flexShrink: 0
          }
        },
        t
      )
    );
  },
  X5 = function () {
    return de.createElement(
      cc,
      null,
      de.createElement('path', {
        d: `M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`
      })
    );
  },
  Q5 = function () {
    return de.createElement(
      cc,
      null,
      de.createElement('path', {
        d: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z'
      })
    );
  },
  Z5 = function () {
    return de.createElement(
      cc,
      null,
      de.createElement('path', {
        d: `M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`
      })
    );
  },
  J5 = function () {
    return de.createElement(
      cc,
      null,
      de.createElement('path', {
        d: `M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`
      })
    );
  },
  eV = {
    default: void 0,
    success: de.createElement(X5, null),
    warning: de.createElement(Q5, null),
    error: de.createElement(Z5, null),
    info: de.createElement(J5, null)
  },
  Bn = {
    maxSnack: 3,
    persist: !1,
    hideIconVariant: !1,
    disableWindowBlurListener: !1,
    variant: 'default',
    autoHideDuration: 5e3,
    iconVariant: eV,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    TransitionComponent: Sw,
    transitionDuration: { enter: 225, exit: 195 }
  },
  tV = function (t, r) {
    var n = function (i) {
      return typeof i == 'number' || i === null;
    };
    return n(t) ? t : n(r) ? r : Bn.autoHideDuration;
  },
  rV = function (t, r) {
    var n = function (i, s) {
      return s.some(function (a) {
        return typeof i === a;
      });
    };
    return n(t, ['string', 'number'])
      ? t
      : n(t, ['object'])
        ? Ie({}, Bn.transitionDuration, {}, n(r, ['object']) && r, {}, t)
        : n(r, ['string', 'number'])
          ? r
          : n(r, ['object'])
            ? Ie({}, Bn.transitionDuration, {}, r)
            : Bn.transitionDuration;
  },
  nV = function (t, r) {
    return function (n, o) {
      return (
        o === void 0 && (o = !1),
        o
          ? Ie({}, Bn[n], {}, r[n], {}, t[n])
          : n === 'autoHideDuration'
            ? tV(t.autoHideDuration, r.autoHideDuration)
            : n === 'transitionDuration'
              ? rV(t.transitionDuration, r.transitionDuration)
              : t[n] || r[n] || Bn[n]
      );
    };
  };
function js(e) {
  return Object.entries(e).reduce(function (t, r) {
    var n,
      o = r[0],
      i = r[1];
    return Ie({}, t, ((n = {}), (n[o] = Uf(i)), n));
  }, {});
}
var Vo = {
    SnackbarContainer: 'notistack-SnackbarContainer',
    Snackbar: 'notistack-Snackbar',
    CollapseWrapper: 'notistack-CollapseWrapper',
    MuiContent: 'notistack-MuiContent',
    MuiContentVariant: function (t) {
      return 'notistack-MuiContent-' + t;
    }
  },
  Vg = js({ root: { height: 0 }, entered: { height: 'auto' } }),
  Gc = '0px',
  Xc = 175,
  Ew = w.forwardRef(function (e, t) {
    var r = e.children,
      n = e.in,
      o = e.onExited,
      i = w.useRef(null),
      s = w.useRef(null),
      a = ed(t, s),
      l = function () {
        return i.current ? i.current.clientHeight : 0;
      },
      c = function (h) {
        h.style.height = Gc;
      },
      u = function (h) {
        var v = l(),
          x = ll({ timeout: Xc, mode: 'enter' }),
          b = x.duration,
          g = x.easing;
        (h.style.transitionDuration = typeof b == 'string' ? b : b + 'ms'),
          (h.style.height = v + 'px'),
          (h.style.transitionTimingFunction = g || '');
      },
      f = function (h) {
        h.style.height = 'auto';
      },
      d = function (h) {
        h.style.height = l() + 'px';
      },
      m = function (h) {
        xw(h);
        var v = ll({ timeout: Xc, mode: 'exit' }),
          x = v.duration,
          b = v.easing;
        (h.style.transitionDuration = typeof x == 'string' ? x : x + 'ms'),
          (h.style.height = Gc),
          (h.style.transitionTimingFunction = b || '');
      };
    return w.createElement(
      qf,
      {
        in: n,
        unmountOnExit: !0,
        onEnter: c,
        onEntered: f,
        onEntering: u,
        onExit: d,
        onExited: o,
        onExiting: m,
        nodeRef: s,
        timeout: Xc
      },
      function (p, h) {
        return w.createElement(
          'div',
          Object.assign(
            {
              ref: a,
              className: Yn(Vg.root, p === 'entered' && Vg.entered),
              style: Ie(
                {
                  pointerEvents: 'all',
                  overflow: 'hidden',
                  minHeight: Gc,
                  transition: So('height')
                },
                p === 'entered' && { overflow: 'visible' },
                {},
                p === 'exited' && !n && { visibility: 'hidden' }
              )
            },
            h
          ),
          w.createElement(
            'div',
            {
              ref: i,
              className: Vo.CollapseWrapper,
              style: { display: 'flex', width: '100%' }
            },
            r
          )
        );
      }
    );
  });
Ew.displayName = 'Collapse';
var Wg = { right: 'left', left: 'right', bottom: 'up', top: 'down' },
  oV = function (t) {
    return t.horizontal !== 'center' ? Wg[t.horizontal] : Wg[t.vertical];
  },
  iV = function (t) {
    return 'anchorOrigin' + Hf(t);
  },
  sV = function (t) {
    t === void 0 && (t = {});
    var r = {
      containerRoot: !0,
      containerAnchorOriginTopCenter: !0,
      containerAnchorOriginBottomCenter: !0,
      containerAnchorOriginTopRight: !0,
      containerAnchorOriginBottomRight: !0,
      containerAnchorOriginTopLeft: !0,
      containerAnchorOriginBottomLeft: !0
    };
    return Object.keys(t)
      .filter(function (n) {
        return !r[n];
      })
      .reduce(function (n, o) {
        var i;
        return Ie({}, n, ((i = {}), (i[o] = t[o]), i));
      }, {});
  },
  aV = function () {};
function Ni(e, t) {
  return e.reduce(function (r, n) {
    return n == null
      ? r
      : function () {
          for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
            s[a] = arguments[a];
          var l = [].concat(s);
          t && l.indexOf(t) === -1 && l.push(t),
            r.apply(this, l),
            n.apply(this, l);
        };
  }, aV);
}
var lV = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function zg(e) {
  var t = w.useRef(e);
  return (
    lV(function () {
      t.current = e;
    }),
    w.useCallback(function () {
      return t.current.apply(void 0, arguments);
    }, [])
  );
}
var Cw = w.forwardRef(function (e, t) {
  var r = e.children,
    n = e.className,
    o = e.autoHideDuration,
    i = e.disableWindowBlurListener,
    s = i === void 0 ? !1 : i,
    a = e.onClose,
    l = e.id,
    c = e.open,
    u = e.SnackbarProps,
    f = u === void 0 ? {} : u,
    d = w.useRef(),
    m = zg(function () {
      a && a.apply(void 0, arguments);
    }),
    p = zg(function (g) {
      !a ||
        g == null ||
        (d.current && clearTimeout(d.current),
        (d.current = setTimeout(function () {
          m(null, 'timeout', l);
        }, g)));
    });
  w.useEffect(
    function () {
      return (
        c && p(o),
        function () {
          d.current && clearTimeout(d.current);
        }
      );
    },
    [c, o, p]
  );
  var h = function () {
      d.current && clearTimeout(d.current);
    },
    v = w.useCallback(
      function () {
        o != null && p(o * 0.5);
      },
      [o, p]
    ),
    x = function (y) {
      f.onMouseEnter && f.onMouseEnter(y), h();
    },
    b = function (y) {
      f.onMouseLeave && f.onMouseLeave(y), v();
    };
  return (
    w.useEffect(
      function () {
        if (!s && c)
          return (
            window.addEventListener('focus', v),
            window.addEventListener('blur', h),
            function () {
              window.removeEventListener('focus', v),
                window.removeEventListener('blur', h);
            }
          );
      },
      [s, v, c]
    ),
    w.createElement(
      'div',
      Object.assign({ ref: t }, f, {
        className: Yn(Vo.Snackbar, n),
        onMouseEnter: x,
        onMouseLeave: b
      }),
      r
    )
  );
});
Cw.displayName = 'Snackbar';
var Qc,
  cV = js({
    root:
      ((Qc = { display: 'flex', flexWrap: 'wrap', flexGrow: 1 }),
      (Qc[Tn.upSm] = { flexGrow: 'initial', minWidth: '288px' }),
      Qc)
  }),
  Pw = w.forwardRef(function (e, t) {
    var r = e.className,
      n = $s(e, ['className']);
    return de.createElement(
      'div',
      Object.assign({ ref: t, className: Yn(cV.root, r) }, n)
    );
  });
Pw.displayName = 'SnackbarContent';
var vi = js({
    root: {
      backgroundColor: '#313131',
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      color: '#fff',
      alignItems: 'center',
      padding: '6px 16px',
      borderRadius: '4px',
      boxShadow:
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    },
    lessPadding: { paddingLeft: 8 * 2.5 + 'px' },
    default: { backgroundColor: '#313131' },
    success: { backgroundColor: '#43a047' },
    error: { backgroundColor: '#d32f2f' },
    warning: { backgroundColor: '#ff9800' },
    info: { backgroundColor: '#2196f3' },
    message: { display: 'flex', alignItems: 'center', padding: '8px 0' },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: '16px',
      marginRight: '-8px'
    }
  }),
  Ug = 'notistack-snackbar',
  Tw = w.forwardRef(function (e, t) {
    var r = e.id,
      n = e.message,
      o = e.action,
      i = e.iconVariant,
      s = e.variant,
      a = e.hideIconVariant,
      l = e.style,
      c = e.className,
      u = i[s],
      f = o;
    return (
      typeof f == 'function' && (f = f(r)),
      de.createElement(
        Pw,
        {
          ref: t,
          role: 'alert',
          'aria-describedby': Ug,
          style: l,
          className: Yn(
            Vo.MuiContent,
            Vo.MuiContentVariant(s),
            vi.root,
            vi[s],
            c,
            !a && u && vi.lessPadding
          )
        },
        de.createElement(
          'div',
          { id: Ug, className: vi.message },
          a ? null : u,
          n
        ),
        f && de.createElement('div', { className: vi.action }, f)
      )
    );
  });
Tw.displayName = 'MaterialDesignContent';
var uV = w.memo(Tw),
  dV = js({
    wrappedRoot: {
      width: '100%',
      position: 'relative',
      transform: 'translateX(0)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      minWidth: '288px'
    }
  }),
  fV = function (t) {
    var r = w.useRef(),
      n = w.useState(!0),
      o = n[0],
      i = n[1],
      s = Ni([t.snack.onClose, t.onClose]),
      a = function () {
        t.snack.requestClose && s(null, 'instructed', t.snack.id);
      },
      l = w.useCallback(function () {
        r.current = setTimeout(function () {
          i(function (R) {
            return !R;
          });
        }, 125);
      }, []);
    w.useEffect(function () {
      return function () {
        r.current && clearTimeout(r.current);
      };
    }, []);
    var c = t.snack,
      u = t.classes,
      f = t.Component,
      d = f === void 0 ? uV : f,
      m = w.useMemo(
        function () {
          return sV(u);
        },
        [u]
      ),
      p = c.open,
      h = c.SnackbarProps,
      v = c.TransitionComponent,
      x = c.TransitionProps,
      b = c.transitionDuration,
      g = c.disableWindowBlurListener,
      y = c.content,
      E = $s(c, [
        'open',
        'SnackbarProps',
        'TransitionComponent',
        'TransitionProps',
        'transitionDuration',
        'disableWindowBlurListener',
        'content',
        'entered',
        'requestClose',
        'onEnter',
        'onEntered',
        'onExit',
        'onExited'
      ]),
      S = Ie({ direction: oV(E.anchorOrigin), timeout: b }, x),
      C = y;
    typeof C == 'function' && (C = C(E.id, E.message));
    var T = ['onEnter', 'onEntered', 'onExit', 'onExited'].reduce(function (
      R,
      k
    ) {
      var A;
      return Ie({}, R, ((A = {}), (A[k] = Ni([t.snack[k], t[k]], E.id)), A));
    }, {});
    return de.createElement(
      Ew,
      { in: o, onExited: T.onExited },
      de.createElement(
        Cw,
        {
          open: p,
          id: E.id,
          disableWindowBlurListener: g,
          autoHideDuration: E.autoHideDuration,
          className: Yn(dV.wrappedRoot, m.root, m[iV(E.anchorOrigin)]),
          SnackbarProps: h,
          onClose: s
        },
        de.createElement(
          v,
          Object.assign({}, S, {
            appear: !0,
            in: p,
            onExit: T.onExit,
            onExited: l,
            onEnter: T.onEnter,
            onEntered: Ni([T.onEntered, a], E.id)
          }),
          C || de.createElement(d, Object.assign({}, E))
        )
      )
    );
  },
  yi,
  Zc,
  ca,
  ua,
  Jc,
  jr = { view: { default: 20, dense: 4 }, snackbar: { default: 6, dense: 2 } },
  Hg = '.' + Vo.CollapseWrapper,
  eu = 16,
  da = js({
    root:
      ((yi = {
        boxSizing: 'border-box',
        display: 'flex',
        maxHeight: '100%',
        position: 'fixed',
        zIndex: 1400,
        height: 'auto',
        width: 'auto',
        transition: So(['top', 'right', 'bottom', 'left', 'max-width'], {
          duration: 300,
          easing: 'ease'
        }),
        pointerEvents: 'none'
      }),
      (yi[Hg] = {
        padding: jr.snackbar.default + 'px 0px',
        transition: 'padding 300ms ease 0ms'
      }),
      (yi.maxWidth = 'calc(100% - ' + jr.view.default * 2 + 'px)'),
      (yi[Tn.downXs] = {
        width: '100%',
        maxWidth: 'calc(100% - ' + eu * 2 + 'px)'
      }),
      yi),
    rootDense:
      ((Zc = {}), (Zc[Hg] = { padding: jr.snackbar.dense + 'px 0px' }), Zc),
    top: {
      top: jr.view.default - jr.snackbar.default + 'px',
      flexDirection: 'column'
    },
    bottom: {
      bottom: jr.view.default - jr.snackbar.default + 'px',
      flexDirection: 'column-reverse'
    },
    left:
      ((ca = { left: jr.view.default + 'px' }),
      (ca[Tn.upSm] = { alignItems: 'flex-start' }),
      (ca[Tn.downXs] = { left: eu + 'px' }),
      ca),
    right:
      ((ua = { right: jr.view.default + 'px' }),
      (ua[Tn.upSm] = { alignItems: 'flex-end' }),
      (ua[Tn.downXs] = { right: eu + 'px' }),
      ua),
    center:
      ((Jc = { left: '50%', transform: 'translateX(-50%)' }),
      (Jc[Tn.upSm] = { alignItems: 'center' }),
      Jc)
  }),
  pV = function (t) {
    var r = t.classes,
      n = r === void 0 ? {} : r,
      o = t.anchorOrigin,
      i = t.dense,
      s = t.children,
      a = Yn(
        Vo.SnackbarContainer,
        da[o.vertical],
        da[o.horizontal],
        da.root,
        n.containerRoot,
        n['containerAnchorOrigin' + Hf(o)],
        i && da.rootDense
      );
    return de.createElement('div', { className: a }, s);
  },
  hV = w.memo(pV),
  qg = function (t) {
    var r = typeof t == 'string' || w.isValidElement(t);
    return !r;
  },
  mV = (function (e) {
    yw(t, e);
    function t(n) {
      var o;
      return (
        (o = e.call(this, n) || this),
        (o.enqueueSnackbar = function (i, s) {
          if ((s === void 0 && (s = {}), i == null))
            throw new Error('enqueueSnackbar called with invalid argument');
          var a = qg(i) ? i : s,
            l = qg(i) ? i.message : i,
            c = a.key,
            u = a.preventDuplicate,
            f = $s(a, ['key', 'preventDuplicate']),
            d = sa(c),
            m = d ? c : new Date().getTime() + Math.random(),
            p = nV(f, o.props),
            h = Ie({ id: m }, f, {
              message: l,
              open: !0,
              entered: !1,
              requestClose: !1,
              persist: p('persist'),
              action: p('action'),
              content: p('content'),
              variant: p('variant'),
              anchorOrigin: p('anchorOrigin'),
              disableWindowBlurListener: p('disableWindowBlurListener'),
              autoHideDuration: p('autoHideDuration'),
              hideIconVariant: p('hideIconVariant'),
              TransitionComponent: p('TransitionComponent'),
              transitionDuration: p('transitionDuration'),
              TransitionProps: p('TransitionProps', !0),
              iconVariant: p('iconVariant', !0),
              style: p('style', !0),
              SnackbarProps: p('SnackbarProps', !0),
              className: Yn(o.props.className, f.className)
            });
          return (
            h.persist && (h.autoHideDuration = void 0),
            o.setState(function (v) {
              if ((u === void 0 && o.props.preventDuplicate) || u) {
                var x = function (E) {
                    return d ? E.id === m : E.message === l;
                  },
                  b = v.queue.findIndex(x) > -1,
                  g = v.snacks.findIndex(x) > -1;
                if (b || g) return v;
              }
              return o.handleDisplaySnack(
                Ie({}, v, { queue: [].concat(v.queue, [h]) })
              );
            }),
            m
          );
        }),
        (o.handleDisplaySnack = function (i) {
          var s = i.snacks;
          return s.length >= o.maxSnack
            ? o.handleDismissOldest(i)
            : o.processQueue(i);
        }),
        (o.processQueue = function (i) {
          var s = i.queue,
            a = i.snacks;
          return s.length > 0
            ? Ie({}, i, {
                snacks: [].concat(a, [s[0]]),
                queue: s.slice(1, s.length)
              })
            : i;
        }),
        (o.handleDismissOldest = function (i) {
          if (
            i.snacks.some(function (u) {
              return !u.open || u.requestClose;
            })
          )
            return i;
          var s = !1,
            a = !1,
            l = i.snacks.reduce(function (u, f) {
              return u + (f.open && f.persist ? 1 : 0);
            }, 0);
          l === o.maxSnack && (a = !0);
          var c = i.snacks.map(function (u) {
            return !s && (!u.persist || a)
              ? ((s = !0),
                u.entered
                  ? (u.onClose && u.onClose(null, 'maxsnack', u.id),
                    o.props.onClose && o.props.onClose(null, 'maxsnack', u.id),
                    Ie({}, u, { open: !1 }))
                  : Ie({}, u, { requestClose: !0 }))
              : Ie({}, u);
          });
          return Ie({}, i, { snacks: c });
        }),
        (o.handleEnteredSnack = function (i, s, a) {
          if (!sa(a))
            throw new Error(
              'handleEnteredSnack Cannot be called with undefined key'
            );
          o.setState(function (l) {
            var c = l.snacks;
            return {
              snacks: c.map(function (u) {
                return u.id === a ? Ie({}, u, { entered: !0 }) : Ie({}, u);
              })
            };
          });
        }),
        (o.handleCloseSnack = function (i, s, a) {
          o.props.onClose && o.props.onClose(i, s, a);
          var l = a === void 0;
          o.setState(function (c) {
            var u = c.snacks,
              f = c.queue;
            return {
              snacks: u.map(function (d) {
                return !l && d.id !== a
                  ? Ie({}, d)
                  : d.entered
                    ? Ie({}, d, { open: !1 })
                    : Ie({}, d, { requestClose: !0 });
              }),
              queue: f.filter(function (d) {
                return d.id !== a;
              })
            };
          });
        }),
        (o.closeSnackbar = function (i) {
          var s = o.state.snacks.find(function (a) {
            return a.id === i;
          });
          sa(i) && s && s.onClose && s.onClose(null, 'instructed', i),
            o.handleCloseSnack(null, 'instructed', i);
        }),
        (o.handleExitedSnack = function (i, s) {
          if (!sa(s))
            throw new Error(
              'handleExitedSnack Cannot be called with undefined key'
            );
          o.setState(function (a) {
            var l = o.processQueue(
              Ie({}, a, {
                snacks: a.snacks.filter(function (c) {
                  return c.id !== s;
                })
              })
            );
            return l.queue.length === 0 ? l : o.handleDismissOldest(l);
          });
        }),
        o.enqueueSnackbar,
        o.closeSnackbar,
        (o.state = {
          snacks: [],
          queue: [],
          contextValue: {
            enqueueSnackbar: o.enqueueSnackbar.bind(Lg(o)),
            closeSnackbar: o.closeSnackbar.bind(Lg(o))
          }
        }),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        var o = this,
          i = this.state.contextValue,
          s = this.props,
          a = s.domRoot,
          l = s.children,
          c = s.dense,
          u = c === void 0 ? !1 : c,
          f = s.Components,
          d = f === void 0 ? {} : f,
          m = s.classes,
          p = this.state.snacks.reduce(function (v, x) {
            var b,
              g = Hf(x.anchorOrigin),
              y = v[g] || [];
            return Ie({}, v, ((b = {}), (b[g] = [].concat(y, [x])), b));
          }, {}),
          h = Object.keys(p).map(function (v) {
            var x = p[v],
              b = x[0];
            return de.createElement(
              hV,
              { key: v, dense: u, anchorOrigin: b.anchorOrigin, classes: m },
              x.map(function (g) {
                return de.createElement(fV, {
                  key: g.id,
                  snack: g,
                  classes: m,
                  Component: d[g.variant],
                  onClose: o.handleCloseSnack,
                  onEnter: o.props.onEnter,
                  onExit: o.props.onExit,
                  onExited: Ni([o.handleExitedSnack, o.props.onExited], g.id),
                  onEntered: Ni([o.handleEnteredSnack, o.props.onEntered], g.id)
                });
              })
            );
          });
        return de.createElement(
          bw.Provider,
          { value: i },
          l,
          a ? rd.createPortal(h, a) : h
        );
      }),
      vw(t, [
        {
          key: 'maxSnack',
          get: function () {
            return this.props.maxSnack || Bn.maxSnack;
          }
        }
      ]),
      t
    );
  })(w.Component),
  r3 = function () {
    return w.useContext(bw);
  };
const gV = document.getElementById('root'),
  vV = Xg(gV);
vV.render(
  P.jsx(dS, {
    store: iE,
    children: P.jsx(mV, { children: P.jsx(sE, { children: P.jsx(N5, {}) }) })
  })
);
const yV = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  bV = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  );
export {
  jy as $,
  $e as A,
  lt as B,
  Ka as C,
  Bo as D,
  Z as E,
  ln as F,
  Ei as G,
  ct as H,
  ue as I,
  ze as J,
  Hn as K,
  is as L,
  Vb as M,
  bs as N,
  Ol as O,
  Q as P,
  By as Q,
  W as R,
  dt as S,
  Se as T,
  es as U,
  gs as V,
  pw as W,
  Gh as X,
  _n as Y,
  wD as Z,
  M as _,
  SV as a,
  uO as a$,
  Go as a0,
  Wy as a1,
  Ha as a2,
  tn as a3,
  $t as a4,
  zV as a5,
  UV as a6,
  kV as a7,
  MV as a8,
  OV as a9,
  tf as aA,
  n_ as aB,
  Ob as aC,
  eM as aD,
  xR as aE,
  pi as aF,
  Cb as aG,
  XV as aH,
  yy as aI,
  JV as aJ,
  Xa as aK,
  Va as aL,
  dR as aM,
  Wd as aN,
  Ao as aO,
  Wa as aP,
  X2 as aQ,
  yA as aR,
  Eb as aS,
  jd as aT,
  nb as aU,
  Kl as aV,
  Ky as aW,
  qy as aX,
  vD as aY,
  ER as aZ,
  PR as a_,
  IV as aa,
  LV as ab,
  $V as ac,
  DV as ad,
  tc as ae,
  FV as af,
  AV as ag,
  BV as ah,
  NV as ai,
  jV as aj,
  WV as ak,
  VV as al,
  Tb as am,
  mu as an,
  Zl as ao,
  SR as ap,
  IM as aq,
  Ql as ar,
  Gl as as,
  xu as at,
  _V as au,
  TM as av,
  nA as aw,
  dr as ax,
  vR as ay,
  DR as az,
  RV as b,
  uR as b0,
  Ga as b1,
  vO as b2,
  q_ as b3,
  r3 as c,
  Ya as d,
  Sb as e,
  TV as f,
  HV as g,
  KV as h,
  qV as i,
  P as j,
  qn as k,
  GV as l,
  YV as m,
  Xi as n,
  hR as o,
  We as p,
  Ve as q,
  As as r,
  le as s,
  Do as t,
  aE as u,
  zd as v,
  vt as w,
  QV as x,
  nm as y,
  ZV as z
};
