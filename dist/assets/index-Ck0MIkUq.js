const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-BKqxiHO_.js',
      'assets/vendor-BXCbSo2_.js',
      'assets/Skeleton-DFEmEML1.js',
      'assets/TextField-BujPyVEk.js',
      'assets/NewCollection-nprn4FEa.js',
      'assets/axios-CgIVMX8t.js',
      'assets/AddCircle-B9Pz-WR_.js',
      'assets/dayjs.min-DO4_1a-m.js',
      'assets/ReuseableDataGrid-CdgPKZaX.js',
      'assets/VisibilityOutlined-Ds6HNaPA.js',
      'assets/LoopOutlined-0F2z_ats.js',
      'assets/TabPanel-CBwhICZn.js',
      'assets/NewDesign-DdB9wTr8.js',
      'assets/PlanningProcess-D3BOLvlK.js',
      'assets/Fabrication-Bwy62yIh.js',
      'assets/Close-DJFnbESS.js',
      'assets/PersonAddAlt1Outlined-BNyL5czE.js',
      'assets/Roles-mOdQgmBg.js',
      'assets/MainMenu-Cqs04K83.js',
      'assets/SubMenu-eVVL6Dk_.js',
      'assets/Users-2Lxpfb-s.js',
      'assets/PrePlanningCreation-DxeSRUog.js',
      'assets/TermsandConditions-C0Wxk2QK.js',
      'assets/AddCircleOutlineOutlined-D8j0rvJ_.js',
      'assets/AssignmentOutlined-DlQHzdPz.js',
      'assets/ProductionBatch-BFbr2S9g.js',
      'assets/ProductionProcess-D_xgju11.js',
      'assets/ShrinkageWastageConfiguration-DBzK8Za5.js',
      'assets/index-8Krrw-YO.js',
      'assets/WelcomePage-CqMuPjmD.js',
      'assets/Login3-COlIy4hQ.js'
    ])
) => i.map((i) => d[i]);
var Nw = Object.defineProperty;
var Fw = (e, t, r) =>
  t in e
    ? Nw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var mc = (e, t, r) => Fw(e, typeof t != 'symbol' ? t + '' : t, r);
import {
  r as w,
  a as od,
  b as Oo,
  R as de,
  d as Vw,
  g as Yg,
  e as Dr,
  f as bi,
  c as Ww
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
var Xg = { exports: {} },
  dl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zw = w,
  Uw = Symbol.for('react.element'),
  Hw = Symbol.for('react.fragment'),
  qw = Object.prototype.hasOwnProperty,
  Gw = zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qg(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) qw.call(t, n) && !Kw.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Uw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Gw.current
  };
}
dl.Fragment = Hw;
dl.jsx = Qg;
dl.jsxs = Qg;
Xg.exports = dl;
var P = Xg.exports,
  Zg,
  tp = od;
(Zg = tp.createRoot), tp.hydrateRoot;
function vt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Yw = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  rp = Yw,
  gc = () => Math.random().toString(36).substring(7).split('').join('.'),
  Xw = {
    INIT: `@@redux/INIT${gc()}`,
    REPLACE: `@@redux/REPLACE${gc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${gc()}`
  },
  Pa = Xw;
function Or(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Jg(e, t, r) {
  if (typeof e != 'function') throw new Error(vt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(vt(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(vt(1));
    return r(Jg)(e, t);
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
    if (l) throw new Error(vt(3));
    return o;
  }
  function f(v) {
    if (typeof v != 'function') throw new Error(vt(4));
    if (l) throw new Error(vt(5));
    let x = !0;
    c();
    const b = a++;
    return (
      s.set(b, v),
      function () {
        if (x) {
          if (l) throw new Error(vt(6));
          (x = !1), c(), s.delete(b), (i = null);
        }
      }
    );
  }
  function d(v) {
    if (!Or(v)) throw new Error(vt(7));
    if (typeof v.type > 'u') throw new Error(vt(8));
    if (typeof v.type != 'string') throw new Error(vt(17));
    if (l) throw new Error(vt(9));
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
    if (typeof v != 'function') throw new Error(vt(10));
    (n = v), d({ type: Pa.REPLACE });
  }
  function p() {
    const v = f;
    return {
      subscribe(x) {
        if (typeof x != 'object' || x === null) throw new Error(vt(11));
        function b() {
          const y = x;
          y.next && y.next(u());
        }
        return b(), { unsubscribe: v(b) };
      },
      [rp]() {
        return this;
      }
    };
  }
  return (
    d({ type: Pa.INIT }),
    { dispatch: d, subscribe: f, getState: u, replaceReducer: m, [rp]: p }
  );
}
function Qw(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: Pa.INIT }) > 'u') throw new Error(vt(12));
    if (typeof r(void 0, { type: Pa.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(vt(13));
  });
}
function id(e) {
  const t = Object.keys(e),
    r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == 'function' && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  try {
    Qw(r);
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
      if (typeof p > 'u') throw (a && a.type, new Error(vt(14)));
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
function Zw(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(vt(15));
    };
    const s = { getState: o.getState, dispatch: (l, ...c) => i(l, ...c) },
      a = e.map((l) => l(s));
    return (i = Ta(...a)(o.dispatch)), { ...o, dispatch: i };
  };
}
function ev(e) {
  return Or(e) && 'type' in e && typeof e.type == 'string';
}
var sd = Symbol.for('immer-nothing'),
  Ti = Symbol.for('immer-draftable'),
  Wt = Symbol.for('immer-state');
function wt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Vn = Object.getPrototypeOf;
function xr(e) {
  return !!e && !!e[Wt];
}
function wr(e) {
  var t;
  return e
    ? tv(e) ||
        Array.isArray(e) ||
        !!e[Ti] ||
        !!((t = e.constructor) != null && t[Ti]) ||
        ds(e) ||
        fs(e)
    : !1;
}
var Jw = Object.prototype.constructor.toString();
function tv(e) {
  if (!e || typeof e != 'object') return !1;
  const t = Vn(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === Jw;
}
function e1(e) {
  return xr(e) || wt(15, e), e[Wt].base_;
}
function Fi(e, t) {
  Wn(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function Wn(e) {
  const t = e[Wt];
  return t ? t.type_ : Array.isArray(e) ? 1 : ds(e) ? 2 : fs(e) ? 3 : 0;
}
function Vi(e, t) {
  return Wn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function vc(e, t) {
  return Wn(e) === 2 ? e.get(t) : e[t];
}
function rv(e, t, r) {
  const n = Wn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function t1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ds(e) {
  return e instanceof Map;
}
function fs(e) {
  return e instanceof Set;
}
function En(e) {
  return e.copy_ || e.base_;
}
function nu(e, t) {
  if (ds(e)) return new Map(e);
  if (fs(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = tv(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Wt];
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
    return Object.create(Vn(e), n);
  } else {
    const n = Vn(e);
    if (n !== null && r) return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function ad(e, t = !1) {
  return (
    fl(e) ||
      xr(e) ||
      !wr(e) ||
      (Wn(e) > 1 && (e.set = e.add = e.clear = e.delete = r1),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => ad(n, !0))),
    e
  );
}
function r1() {
  wt(2);
}
function fl(e) {
  return Object.isFrozen(e);
}
var ou = {};
function zn(e) {
  const t = ou[e];
  return t || wt(0, e), t;
}
function n1(e, t) {
  ou[e] || (ou[e] = t);
}
var Wi;
function nv() {
  return Wi;
}
function o1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function np(e, t) {
  t &&
    (zn('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function iu(e) {
  su(e), e.drafts_.forEach(i1), (e.drafts_ = null);
}
function su(e) {
  e === Wi && (Wi = e.parent_);
}
function op(e) {
  return (Wi = o1(Wi, e));
}
function i1(e) {
  const t = e[Wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ip(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[Wt].modified_ && (iu(t), wt(4)),
        wr(e) && ((e = Ra(t, e)), t.parent_ || ka(t, e)),
        t.patches_ &&
          zn('Patches').generateReplacementPatches_(
            r[Wt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ra(t, r, [])),
    iu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== sd ? e : void 0
  );
}
function Ra(e, t, r) {
  if (fl(t)) return t;
  const n = t[Wt];
  if (!n) return Fi(t, (o, i) => sp(e, n, t, o, i, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return ka(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o,
      s = !1;
    n.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      Fi(i, (a, l) => sp(e, n, o, a, l, r, s)),
      ka(e, o, !1),
      r &&
        e.patches_ &&
        zn('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function sp(e, t, r, n, o, i, s) {
  if (xr(o)) {
    const a =
        i && t && t.type_ !== 3 && !Vi(t.assigned_, n) ? i.concat(n) : void 0,
      l = Ra(e, o, a);
    if ((rv(r, n, l), xr(l))) e.canAutoFreeze_ = !1;
    else return;
  } else s && r.add(o);
  if (wr(o) && !fl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ra(e, o),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        ka(e, o);
  }
}
function ka(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ad(t, r);
}
function s1(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : nv(),
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
    i = ld;
  r && ((o = [n]), (i = zi));
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return (n.draft_ = a), (n.revoke_ = s), a;
}
var ld = {
    get(e, t) {
      if (t === Wt) return e;
      const r = En(e);
      if (!Vi(r, t)) return a1(e, r, t);
      const n = r[t];
      return e.finalized_ || !wr(n)
        ? n
        : n === yc(e.base_, t)
          ? (bc(e), (e.copy_[t] = lu(n, e)))
          : n;
    },
    has(e, t) {
      return t in En(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(En(e));
    },
    set(e, t, r) {
      const n = ov(En(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const o = yc(En(e), t),
          i = o == null ? void 0 : o[Wt];
        if (i && i.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (t1(r, o) && (r !== void 0 || Vi(e.base_, t))) return !0;
        bc(e), au(e);
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
        yc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), bc(e), au(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = En(e),
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
      wt(11);
    },
    getPrototypeOf(e) {
      return Vn(e.base_);
    },
    setPrototypeOf() {
      wt(12);
    }
  },
  zi = {};
Fi(ld, (e, t) => {
  zi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
zi.deleteProperty = function (e, t) {
  return zi.set.call(this, e, t, void 0);
};
zi.set = function (e, t, r) {
  return ld.set.call(this, e[0], t, r, e[0]);
};
function yc(e, t) {
  const r = e[Wt];
  return (r ? En(r) : e)[t];
}
function a1(e, t, r) {
  var o;
  const n = ov(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (o = n.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function ov(e, t) {
  if (!(t in e)) return;
  let r = Vn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Vn(r);
  }
}
function au(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && au(e.parent_));
}
function bc(e) {
  e.copy_ || (e.copy_ = nu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var l1 = class {
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
        typeof r != 'function' && wt(6),
          n !== void 0 && typeof n != 'function' && wt(7);
        let o;
        if (wr(t)) {
          const i = op(this),
            s = lu(t, void 0);
          let a = !0;
          try {
            (o = r(s)), (a = !1);
          } finally {
            a ? iu(i) : su(i);
          }
          return np(i, n), ip(o, i);
        } else if (!t || typeof t != 'object') {
          if (
            ((o = r(t)),
            o === void 0 && (o = t),
            o === sd && (o = void 0),
            this.autoFreeze_ && ad(o, !0),
            n)
          ) {
            const i = [],
              s = [];
            zn('Patches').generateReplacementPatches_(t, o, i, s), n(i, s);
          }
          return o;
        } else wt(1, t);
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
    wr(e) || wt(8), xr(e) && (e = iv(e));
    const t = op(this),
      r = lu(e, void 0);
    return (r[Wt].isManual_ = !0), su(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Wt];
    (!r || !r.isManual_) && wt(9);
    const { scope_: n } = r;
    return np(n, t), ip(void 0, n);
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
    const n = zn('Patches').applyPatches_;
    return xr(e) ? n(e, t) : this.produce(e, (o) => n(o, t));
  }
};
function lu(e, t) {
  const r = ds(e)
    ? zn('MapSet').proxyMap_(e, t)
    : fs(e)
      ? zn('MapSet').proxySet_(e, t)
      : s1(e, t);
  return (t ? t.scope_ : nv()).drafts_.push(r), r;
}
function iv(e) {
  return xr(e) || wt(10, e), sv(e);
}
function sv(e) {
  if (!wr(e) || fl(e)) return e;
  const t = e[Wt];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = nu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = nu(e, !0);
  return (
    Fi(r, (n, o) => {
      rv(r, n, sv(o));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function c1() {
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
      const y = vc(v, b),
        E = vc(x, b),
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
    p.push({ op: t, path: [], value: m === sd ? void 0 : m }),
      h.push({ op: t, path: [], value: d });
  }
  function c(d, m) {
    return (
      m.forEach((p) => {
        const { path: h, op: v } = p;
        let x = d;
        for (let E = 0; E < h.length - 1; E++) {
          const S = Wn(x);
          let C = h[E];
          typeof C != 'string' && typeof C != 'number' && (C = '' + C),
            (S === 0 || S === 1) &&
              (C === '__proto__' || C === 'constructor') &&
              wt(19),
            typeof x == 'function' && C === 'prototype' && wt(19),
            (x = vc(x, C)),
            typeof x != 'object' && wt(18, h.join('/'));
        }
        const b = Wn(x),
          g = u(p.value),
          y = h[h.length - 1];
        switch (v) {
          case t:
            switch (b) {
              case 2:
                return x.set(y, g);
              case 3:
                wt(16);
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
            wt(17, v);
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
    const m = Object.create(Vn(d));
    for (const p in d) m[p] = u(d[p]);
    return Vi(d, Ti) && (m[Ti] = d[Ti]), m;
  }
  function f(d) {
    return xr(d) ? u(d) : d;
  }
  n1('Patches', {
    applyPatches_: c,
    generatePatches_: o,
    generateReplacementPatches_: l
  });
}
var Jt = new l1(),
  ps = Jt.produce,
  av = Jt.produceWithPatches.bind(Jt);
Jt.setAutoFreeze.bind(Jt);
Jt.setUseStrictShallowCopy.bind(Jt);
var ap = Jt.applyPatches.bind(Jt);
Jt.createDraft.bind(Jt);
Jt.finishDraft.bind(Jt);
function u1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t);
}
function d1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t);
}
function f1(
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
var lp = (e) => (Array.isArray(e) ? e : [e]);
function p1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    f1(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  );
}
function h1(e, t) {
  const r = [],
    { length: n } = e;
  for (let o = 0; o < n; o++) r.push(e[o].apply(null, t));
  return r;
}
var m1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  g1 = typeof WeakRef < 'u' ? WeakRef : m1,
  v1 = 0,
  cp = 1;
function Us() {
  return { s: v1, v: void 0, o: null, p: null };
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
    if (a.s === cp) u = a.v;
    else if (((u = e.apply(null, arguments)), i++, n)) {
      const d =
        ((f = o == null ? void 0 : o.deref) == null ? void 0 : f.call(o)) ?? o;
      d != null && n(d, u) && ((u = d), i !== 0 && i--),
        (o =
          (typeof u == 'object' && u !== null) || typeof u == 'function'
            ? new g1(u)
            : u);
    }
    return (c.s = cp), (c.v = u), u;
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
function lv(e, ...t) {
  const r = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    n = (...o) => {
      let i = 0,
        s = 0,
        a,
        l = {},
        c = o.pop();
      typeof c == 'object' && ((l = c), (c = o.pop())),
        u1(
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
        v = lp(d),
        x = lp(p),
        b = p1(o),
        g = f(
          function () {
            return i++, c.apply(null, arguments);
          },
          ...v
        ),
        y = m(
          function () {
            s++;
            const S = h1(b, arguments);
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
var cd = lv(Ui),
  y1 = Object.assign(
    (e, t = cd) => {
      d1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        n = r.map((i) => e[i]);
      return t(n, (...i) => i.reduce((s, a, l) => ((s[r[l]] = a), s), {}));
    },
    { withTypes: () => y1 }
  );
function cv(e) {
  return ({ dispatch: r, getState: n }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(r, n, e) : o(i);
}
var b1 = cv(),
  x1 = cv,
  w1 = (...e) => {
    const t = lv(...e),
      r = Object.assign(
        (...n) => {
          const o = t(...n),
            i = (s, ...a) => o(xr(s) ? iv(s) : s, ...a);
          return Object.assign(i, o), i;
        },
        { withTypes: () => r }
      );
    return r;
  };
w1(Ui);
var S1 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Ta
              : Ta.apply(null, arguments);
        },
  E1 = (e) => e && typeof e.match == 'function';
function Lt(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o) throw new Error(Ot(0));
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
    (r.match = (n) => ev(n) && n.type === e),
    r
  );
}
var uv = class xi extends Array {
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
function up(e) {
  return wr(e) ? ps(e, () => {}) : e;
}
function dp(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && ((o = r.update(o, t, e)), e.set(t, o)), o;
  }
  if (!r.insert) throw new Error(Ot(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function C1(e) {
  return typeof e == 'boolean';
}
var P1 = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0
      } = t ?? {};
      let s = new uv();
      return r && (C1(r) ? s.push(b1) : s.push(x1(r.extraArgument))), s;
    },
  vo = 'RTK_autoBatch',
  oi = () => (e) => ({ payload: e, meta: { [vo]: !0 } }),
  dv = (e) => (t) => {
    setTimeout(t, e);
  },
  T1 =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : dv(10),
  R1 =
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
              ? T1
              : e.type === 'callback'
                ? e.queueNotification
                : dv(e.timeout),
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
              (o = !((f = u == null ? void 0 : u.meta) != null && f[vo])),
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
  k1 = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let o = new uv(e);
      return n && o.push(R1(typeof n == 'object' ? n : void 0)), o;
    },
  M1 = !0;
function O1(e) {
  const t = P1(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0
    } = e || {};
  let a;
  if (typeof r == 'function') a = r;
  else if (Or(r)) a = id(r);
  else throw new Error(Ot(1));
  let l;
  typeof n == 'function' ? (l = n(t)) : (l = t());
  let c = Ta;
  o && (c = S1({ trace: !M1, ...(typeof o == 'object' && o) }));
  const u = Zw(...l),
    f = k1(u);
  let d = typeof s == 'function' ? s(f) : f();
  const m = c(...d);
  return Jg(a, i, m);
}
function fv(e) {
  const t = {},
    r = [];
  let n;
  const o = {
    addCase(i, s) {
      const a = typeof i == 'string' ? i : i.type;
      if (!a) throw new Error(Ot(28));
      if (a in t) throw new Error(Ot(29));
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
function A1(e) {
  return typeof e == 'function';
}
function _1(e, t) {
  let [r, n, o] = fv(t),
    i;
  if (A1(e)) i = () => up(e());
  else {
    const a = up(e);
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
                throw new Error(Ot(9));
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
var D1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  ud = (e = 21) => {
    let t = '',
      r = e;
    for (; r--; ) t += D1[(Math.random() * 64) | 0];
    return t;
  },
  pv = (e, t) => (E1(e) ? e.match(t) : e(t));
function Ur(...e) {
  return (t) => e.some((r) => pv(r, t));
}
function Ri(...e) {
  return (t) => e.every((r) => pv(r, t));
}
function pl(e, t) {
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
function dd(...e) {
  return e.length === 0
    ? (t) => pl(t, ['pending'])
    : hs(e)
      ? Ur(...e.map((t) => t.pending))
      : dd()(e[0]);
}
function Ao(...e) {
  return e.length === 0
    ? (t) => pl(t, ['rejected'])
    : hs(e)
      ? Ur(...e.map((t) => t.rejected))
      : Ao()(e[0]);
}
function hl(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? Ri(Ao(...e), t)
    : hs(e)
      ? Ri(Ao(...e), t)
      : hl()(e[0]);
}
function sn(...e) {
  return e.length === 0
    ? (t) => pl(t, ['fulfilled'])
    : hs(e)
      ? Ur(...e.map((t) => t.fulfilled))
      : sn()(e[0]);
}
function cu(...e) {
  return e.length === 0
    ? (t) => pl(t, ['pending', 'fulfilled', 'rejected'])
    : hs(e)
      ? Ur(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : cu()(e[0]);
}
var I1 = ['name', 'message', 'stack', 'code'],
  xc = class {
    constructor(e, t) {
      mc(this, '_type');
      (this.payload = e), (this.meta = t);
    }
  },
  fp = class {
    constructor(e, t) {
      mc(this, '_type');
      (this.payload = e), (this.meta = t);
    }
  },
  L1 = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {};
      for (const r of I1) typeof e[r] == 'string' && (t[r] = e[r]);
      return t;
    }
    return { message: String(e) };
  },
  pp = (() => {
    function e(t, r, n) {
      const o = Lt(t + '/fulfilled', (l, c, u, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: u,
            requestId: c,
            requestStatus: 'fulfilled'
          }
        })),
        i = Lt(t + '/pending', (l, c, u) => ({
          payload: void 0,
          meta: { ...(u || {}), arg: c, requestId: l, requestStatus: 'pending' }
        })),
        s = Lt(t + '/rejected', (l, c, u, f, d) => ({
          payload: f,
          error: ((n && n.serializeError) || L1)(l || 'Rejected'),
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
          const d = n != null && n.idGenerator ? n.idGenerator(l) : ud(),
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
              if ((j1(S) && (S = await S), S === !1 || m.signal.aborted))
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
                      rejectWithValue: (T, R) => new xc(T, R),
                      fulfillWithValue: (T, R) => new fp(T, R)
                    })
                  ).then((T) => {
                    if (T instanceof xc) throw T;
                    return T instanceof fp
                      ? o(T.payload, d, l, T.meta)
                      : o(T, d, l);
                  })
                ]));
            } catch (S) {
              b =
                S instanceof xc ? s(null, d, l, S.payload, S.meta) : s(S, d, l);
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
              return x.then($1);
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
function $1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function j1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var B1 = Symbol.for('rtk-slice-createasyncthunk');
function N1(e, t) {
  return `${e}/${t}`;
}
function F1({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[B1];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(Ot(11));
    typeof process < 'u';
    const a =
        (typeof o.reducers == 'function' ? o.reducers(W1()) : o.reducers) || {},
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
          if (!E) throw new Error(Ot(12));
          if (E in c.sliceCaseReducersByType) throw new Error(Ot(13));
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
          type: N1(i, g),
          createNotation: typeof o.reducers == 'function'
        };
      U1(y) ? q1(E, y, u, t) : z1(E, y, u);
    });
    function f() {
      const [g = {}, y = [], E = void 0] =
          typeof o.extraReducers == 'function'
            ? fv(o.extraReducers)
            : [o.extraReducers],
        S = { ...g, ...c.sliceCaseReducersByType };
      return _1(o.initialState, (C) => {
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
        const T = dp(m, y, { insert: () => new WeakMap() });
        return dp(T, C, {
          insert: () => {
            const R = {};
            for (const [k, A] of Object.entries(o.selectors ?? {}))
              R[k] = V1(A, C, v, y);
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
function V1(e, t, r, n) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > 'u' && n && (a = r()), e(a, ...s);
  }
  return (o.unwrapped = e), o;
}
var to = F1();
function W1() {
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
function z1({ type: e, reducerName: t, createNotation: r }, n, o) {
  let i, s;
  if ('reducer' in n) {
    if (r && !H1(n)) throw new Error(Ot(17));
    (i = n.reducer), (s = n.prepare);
  } else i = n;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? Lt(e, s) : Lt(e));
}
function U1(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function H1(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function q1({ type: e, reducerName: t }, r, n, o) {
  if (!o) throw new Error(Ot(18));
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
var G1 = (e, t) => {
    if (typeof e != 'function') throw new Error(Ot(32));
  },
  fd = 'listenerMiddleware',
  K1 = (e) => {
    let { type: t, actionCreator: r, matcher: n, predicate: o, effect: i } = e;
    if (t) o = Lt(t).match;
    else if (r) (t = r.type), (o = r.match);
    else if (n) o = n;
    else if (!o) throw new Error(Ot(21));
    return G1(i), { predicate: o, type: t, effect: i };
  },
  Y1 = Object.assign(
    (e) => {
      const { type: t, predicate: r, effect: n } = K1(e);
      return {
        id: ud(),
        effect: n,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ot(22));
        }
      };
    },
    { withTypes: () => Y1 }
  ),
  X1 = Object.assign(Lt(`${fd}/add`), { withTypes: () => X1 });
Lt(`${fd}/removeAll`);
var Q1 = Object.assign(Lt(`${fd}/remove`), { withTypes: () => Q1 });
function Ot(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var hv = { exports: {} },
  mv = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = w;
function Z1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var J1 = typeof Object.is == 'function' ? Object.is : Z1,
  eS = ms.useSyncExternalStore,
  tS = ms.useRef,
  rS = ms.useEffect,
  nS = ms.useMemo,
  oS = ms.useDebugValue;
mv.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = tS(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = nS(
    function () {
      function l(m) {
        if (!c) {
          if (((c = !0), (u = m), (m = n(m)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, m)) return (f = p);
          }
          return (f = m);
        }
        if (((p = f), J1(u, m))) return p;
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
  var a = eS(e, i[0], i[1]);
  return (
    rS(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    oS(a),
    a
  );
};
hv.exports = mv;
var iS = hv.exports,
  Qt = 'default' in Oo ? de : Oo,
  hp = Symbol.for('react-redux-context'),
  mp = typeof globalThis < 'u' ? globalThis : {};
function sS() {
  if (!Qt.createContext) return {};
  const e = mp[hp] ?? (mp[hp] = new Map());
  let t = e.get(Qt.createContext);
  return t || ((t = Qt.createContext(null)), e.set(Qt.createContext, t)), t;
}
var an = sS(),
  aS = () => {
    throw new Error('uSES not initialized!');
  };
function pd(e = an) {
  return function () {
    return Qt.useContext(e);
  };
}
var gv = pd(),
  vv = aS,
  lS = (e) => {
    vv = e;
  },
  cS = (e, t) => e === t;
function uS(e = an) {
  const t = e === an ? gv : pd(e),
    r = (n, o = {}) => {
      const { equalityFn: i = cS, devModeChecks: s = {} } =
          typeof o == 'function' ? { equalityFn: o } : o,
        {
          store: a,
          subscription: l,
          getServerState: c,
          stabilityCheck: u,
          identityFunctionCheck: f
        } = t();
      Qt.useRef(!0);
      const d = Qt.useCallback(
          {
            [n.name](p) {
              return n(p);
            }
          }[n.name],
          [n, u, s.stabilityCheck]
        ),
        m = vv(l.addNestedSub, a.getState, c || a.getState, d, i);
      return Qt.useDebugValue(m), m;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var dn = uS();
function yv(e) {
  e();
}
function dS() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      yv(() => {
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
var gp = { notify() {}, get: () => [] };
function fS(e, t) {
  let r,
    n = gp,
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
    o++, r || ((r = e.subscribe(l)), (n = dS()));
  }
  function f() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = gp));
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
var pS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  hS = typeof navigator < 'u' && navigator.product === 'ReactNative',
  mS = pS || hS ? Qt.useLayoutEffect : Qt.useEffect;
function vp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ki(e, t) {
  if (vp(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !vp(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function gS({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = 'once',
  identityFunctionCheck: i = 'once'
}) {
  const s = Qt.useMemo(() => {
      const c = fS(e);
      return {
        store: e,
        subscription: c,
        getServerState: n ? () => n : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i
      };
    }, [e, n, o, i]),
    a = Qt.useMemo(() => e.getState(), [e]);
  mS(() => {
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
  return Qt.createElement(l.Provider, { value: s }, r);
}
var vS = gS;
function bv(e = an) {
  const t = e === an ? gv : pd(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var xv = bv();
function yS(e = an) {
  const t = e === an ? xv : bv(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Uo = yS(),
  bS = yv;
lS(iS.useSyncExternalStoreWithSelector);
var wv = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(wv || {});
function xS(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  };
}
function wS(e) {
  return new RegExp('(^|:)//').test(e);
}
var SS = (e) => e.replace(/\/$/, ''),
  ES = (e) => e.replace(/^\//, '');
function CS(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (wS(t)) return t;
  const r = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = SS(e)), (t = ES(t)), `${e}${r}${t}`;
}
var yp = (e) => [].concat(...e);
function PS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function TS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var bp = Or;
function Sv(e, t) {
  if (e === t || !((bp(e) && bp(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const r = Object.keys(t),
    n = Object.keys(e);
  let o = r.length === n.length;
  const i = Array.isArray(t) ? [] : {};
  for (const s of r) (i[s] = Sv(e[s], t[s])), o && (o = e[s] === i[s]);
  return o ? e : i;
}
var xp = (...e) => fetch(...e),
  RS = (e) => e.status >= 200 && e.status <= 299,
  kS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '');
function wp(e) {
  if (!Or(e)) return e;
  const t = { ...e };
  for (const [r, n] of Object.entries(t)) n === void 0 && delete t[r];
  return t;
}
function fn({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: r = xp,
  paramsSerializer: n,
  isJsonContentType: o = kS,
  jsonContentType: i = 'application/json',
  jsonReplacer: s,
  timeout: a,
  responseHandler: l,
  validateStatus: c,
  ...u
} = {}) {
  return (
    typeof fetch > 'u' &&
      r === xp &&
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
          validateStatus: R = c ?? RS,
          timeout: k = a,
          ...A
        } = typeof d == 'string' ? { url: d } : d,
        I = { ...u, signal: p, ...A };
      (S = new Headers(wp(S))),
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
          ae = n ? n(C) : new URLSearchParams(wp(C));
        E += J + ae;
      }
      E = CS(e, E);
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
var Sp = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  hd = Lt('__rtkq/focused'),
  Ev = Lt('__rtkq/unfocused'),
  md = Lt('__rtkq/online'),
  Cv = Lt('__rtkq/offline');
function Pv(e) {
  return e.type === 'query';
}
function MS(e) {
  return e.type === 'mutation';
}
function gd(e, t, r, n, o, i) {
  return OS(e)
    ? e(t, r, n, o).map(uu).map(i)
    : Array.isArray(e)
      ? e.map(uu).map(i)
      : [];
}
function OS(e) {
  return typeof e == 'function';
}
function uu(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function Ep(e) {
  return e != null;
}
function Po(e) {
  let t = 0;
  for (const r in e) t++;
  return t;
}
function AS(e, t) {
  return e.catch(t);
}
var Hi = Symbol('forceQueryFn'),
  du = (e) => typeof e[Hi] == 'function';
function _S({
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
    return (v) => Object.values(i.get(v) || {}).filter(Ep);
  }
  function m() {
    return (v) => Object.values(s.get(v) || {}).filter(Ep);
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
              delete ae[A], Po(ae) || i.delete(R);
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
          A = AS(
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
            delete D[T], Po(D) || s.delete(y);
          }),
          g &&
            ((D[g] = L),
            L.then(() => {
              D[g] === L && (delete D[g], Po(D) || s.delete(y));
            })),
          L
        );
      };
  }
}
function Cp(e) {
  return e;
}
function DS({
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
        A = gd(T.providesTags, k.data, void 0, g, {}, i);
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
            const [I, L, D] = av(R.data, y);
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
        let A = Cp,
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
          throw new Sp(I.error, I.meta);
        return S(await A(I.data, I.meta, b.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: I.meta,
          [vo]: !0
        });
      } catch (A) {
        let I = A;
        if (I instanceof Sp) {
          let L = Cp;
          k.query && k.transformErrorResponse && (L = k.transformErrorResponse);
          try {
            return E(await L(I.value, I.meta, b.originalArgs), {
              baseQueryMeta: I.meta,
              [vo]: !0
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
  const f = pp(`${e}/executeQuery`, c, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [vo]: !0 };
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
        return du(b)
          ? !0
          : (E == null ? void 0 : E.status) === 'pending'
            ? !1
            : u(b, y) ||
                (Pv(R) &&
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
    d = pp(`${e}/executeMutation`, c, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [vo]: !0 };
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
      matchPending: Ri(dd(b), v(g)),
      matchFulfilled: Ri(sn(b), v(g)),
      matchRejected: Ri(Ao(b), v(g))
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
function Tv(e, t, r, n) {
  return gd(
    r[e.meta.arg.endpointName][t],
    sn(e) ? e.payload : void 0,
    hl(e) ? e.payload : void 0,
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
function Pp(e, t, r) {
  const n = e[qi(t)];
  n && r(n);
}
var ii = {};
function IS({
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
  const c = Lt(`${e}/resetApiState`),
    u = to({
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
              S.data = ap(S.data, E.concat());
            });
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(t.pending, (y, { meta: E, meta: { arg: S } }) => {
          var T;
          const C = du(S);
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
              if (C.requestId !== E.requestId && !du(E.arg)) return;
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
                    ? Sv(xr(C.data) ? e1(C.data) : C.data, S)
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
    f = to({
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
              Pp(y, S, (C) => {
                C.requestId === S.requestId &&
                  ((C.status = 'fulfilled'),
                  (C.data = E),
                  (C.fulfilledTimeStamp = S.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, (y, { payload: E, error: S, meta: C }) => {
            C.arg.track &&
              Pp(y, C, (T) => {
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
    d = to({
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
          .addMatcher(Ur(sn(t), hl(t)), (y, E) => {
            const S = Tv(E, 'providesTags', n, a),
              { queryCacheKey: C } = E.meta.arg;
            d.caseReducers.updateProvidedBy(
              y,
              d.actions.updateProvidedBy({ queryCacheKey: C, providedTags: S })
            );
          });
      }
    }),
    m = to({
      name: `${e}/subscriptions`,
      initialState: ii,
      reducers: {
        updateSubscriptionOptions(g, y) {},
        unsubscribeQueryResult(g, y) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    p = to({
      name: `${e}/internalSubscriptions`,
      initialState: ii,
      reducers: {
        subscriptionsUpdated: {
          reducer(g, y) {
            return ap(g, y.payload);
          },
          prepare: oi()
        }
      }
    }),
    h = to({
      name: `${e}/config`,
      initialState: {
        online: PS(),
        focused: TS(),
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
        g.addCase(md, (y) => {
          y.online = !0;
        })
          .addCase(Cv, (y) => {
            y.online = !1;
          })
          .addCase(hd, (y) => {
            y.focused = !0;
          })
          .addCase(Ev, (y) => {
            y.focused = !1;
          })
          .addMatcher(s, (y) => ({ ...y }));
      }
    }),
    v = id({
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
var An = Symbol.for('RTKQ/skipToken'),
  Rv = { status: 'uninitialized' },
  Tp = ps(Rv, () => {}),
  Rp = ps(Rv, () => {});
function LS({ serializeQueryArgs: e, reducerPath: t, createSelector: r }) {
  const n = (f) => Tp,
    o = (f) => Rp;
  return {
    buildQuerySelector: a,
    buildMutationSelector: l,
    selectInvalidatedBy: c,
    selectCachedArgsForQuery: u
  };
  function i(f) {
    return { ...f, ...xS(f.status) };
  }
  function s(f) {
    return f[t];
  }
  function a(f, d) {
    return (m) => {
      const p = e({ queryArgs: m, endpointDefinition: d, endpointName: f });
      return r(
        m === An
          ? n
          : (x) => {
              var b, g;
              return (
                ((g = (b = s(x)) == null ? void 0 : b.queries) == null
                  ? void 0
                  : g[p]) ?? Tp
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
        typeof f == 'object' ? (d = qi(f) ?? An) : (d = f),
        r(
          d === An
            ? o
            : (h) => {
                var v, x;
                return (
                  ((x = (v = s(h)) == null ? void 0 : v.mutations) == null
                    ? void 0
                    : x[d]) ?? Rp
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
    for (const h of d.map(uu)) {
      const v = m.provided[h.type];
      if (!v) continue;
      let x = (h.id !== void 0 ? v[h.id] : yp(Object.values(v))) ?? [];
      for (const b of x) p.add(b);
    }
    return yp(
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
var ro = WeakMap ? new WeakMap() : void 0,
  kp = ({ endpointName: e, queryArgs: t }) => {
    let r = '';
    const n = ro == null ? void 0 : ro.get(t);
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
      Or(t) && (ro == null || ro.set(t, o)), (r = o);
    }
    return `${e}(${r})`;
  };
function $S(...e) {
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
          let u = kp;
          if ('serializeQueryArgs' in c.endpointDefinition) {
            const f = c.endpointDefinition.serializeQueryArgs;
            u = (d) => {
              const m = f(d);
              return typeof m == 'string' ? m : kp({ ...d, queryArgs: m });
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
        apiUid: ud(),
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
          if (c.overrideExisting === 'throw') throw new Error(Ot(39));
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
function jS(e) {
  for (let t in e) return !1;
  return !0;
}
var BS = 2147483647 / 1e3 - 1,
  NS = ({
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
      return !!m && !jS(m);
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
      const b = Math.max(0, Math.min(x, BS));
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
  FS = ({
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
      u = Ur(sn(n), hl(n)),
      f = Ur(sn(n, o), Ao(n, o));
    let d = [];
    const m = (v, x) => {
      u(v)
        ? h(Tv(v, 'invalidatesTags', r, s), x)
        : f(v)
          ? h([], x)
          : i.util.invalidateTags.match(v) &&
            h(gd(v.payload, void 0, void 0, void 0, void 0, s), x);
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
            (Po(R) === 0
              ? x.dispatch(c({ queryCacheKey: C }))
              : T.status !== 'uninitialized' && x.dispatch(a(T, C)));
        }
      });
    }
    return m;
  },
  VS = ({
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
  WS = ({
    reducerPath: e,
    context: t,
    api: r,
    refetchQuery: n,
    internalState: o
  }) => {
    const { removeQueryResult: i } = r.internalActions,
      s = (l, c) => {
        hd.match(l) && a(c, 'refetchOnFocus'),
          md.match(l) && a(c, 'refetchOnReconnect');
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
            (Po(h) === 0
              ? l.dispatch(i({ queryCacheKey: m }))
              : p.status !== 'uninitialized' && l.dispatch(n(p, m)));
        }
      });
    }
    return s;
  },
  Mp = new Error('Promise never resolved before cacheEntryRemoved.'),
  zS = ({
    api: e,
    reducerPath: t,
    context: r,
    queryThunk: n,
    mutationThunk: o,
    internalState: i
  }) => {
    const s = cu(n),
      a = cu(o),
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
            throw Mp;
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
        if (A !== Mp) throw A;
      });
    }
    return u;
  },
  US = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
    const o = dd(r, n),
      i = Ao(r, n),
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
  HS =
    ({ api: e, context: { apiUid: t }, reducerPath: r }) =>
    (n, o) => {
      e.util.resetApiState.match(n) &&
        o.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u';
    },
  qS = ({ api: e, queryThunk: t, internalState: r }) => {
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
          return Po(h);
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
              [, y] = av(o, () => g);
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
function GS(e) {
  const { reducerPath: t, queryThunk: r, api: n, context: o } = e,
    { apiUid: i } = o,
    s = { invalidateTags: Lt(`${t}/invalidateTags`) },
    a = (f) => f.type.startsWith(`${t}/`),
    l = [HS, NS, FS, VS, zS, US];
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
        v = qS(p),
        x = WS(p);
      return (b) => (g) => {
        if (!ev(g)) return b(g);
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
var Op = Symbol(),
  KS = ({ createSelector: e = cd } = {}) => ({
    name: Op,
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
      c1();
      const d = (F) => (typeof process < 'u', F);
      Object.assign(t, {
        reducerPath: o,
        endpoints: {},
        internalActions: {
          onOnline: md,
          onOffline: Cv,
          onFocus: hd,
          onFocusLost: Ev
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
        } = DS({
          baseQuery: r,
          reducerPath: o,
          context: f,
          api: t,
          serializeQueryArgs: i,
          assertTagType: d
        }),
        { reducer: y, actions: E } = IS({
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
      const { middleware: S, actions: C } = GS({
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
      } = LS({ serializeQueryArgs: i, reducerPath: o, createSelector: e });
      Qr(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: A });
      const {
        buildInitiateQuery: I,
        buildInitiateMutation: L,
        getRunningMutationThunk: D,
        getRunningMutationsThunk: N,
        getRunningQueriesThunk: B,
        getRunningQueryThunk: j
      } = _S({
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
          name: Op,
          injectEndpoint(F, z) {
            var fe;
            const q = t;
            (fe = q.endpoints)[F] ?? (fe[F] = {}),
              Pv(z)
                ? Qr(
                    q.endpoints[F],
                    { name: F, select: T(F, z), initiate: I(F, z) },
                    g(m, F)
                  )
                : MS(z) &&
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
function YS(e) {
  return e.type === 'query';
}
function XS(e) {
  return e.type === 'mutation';
}
function Gs(e, ...t) {
  return Object.assign(e, ...t);
}
function wc(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var no = WeakMap ? new WeakMap() : void 0,
  QS = ({ endpointName: e, queryArgs: t }) => {
    let r = '';
    const n = no == null ? void 0 : no.get(t);
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
      Or(t) && (no == null || no.set(t, o)), (r = o);
    }
    return `${e}(${r})`;
  },
  Sc = Symbol();
function Ap(e, t, r, n) {
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
function Ec(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      ki(t.current, e) || (t.current = e);
    }, [e]),
    ki(t.current, e) ? t.current : e
  );
}
var ZS = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  JS = ZS(),
  eE = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  tE = eE(),
  rE = () => (JS || tE ? w.useLayoutEffect : w.useEffect),
  nE = rE(),
  oE = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: wv.pending
        }
      : e;
function iE({
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
      x = Ec(h);
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
        const I = Ap(S ? An : b, QS, l.endpointDefinitions[p], p),
          L = Ec({
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
            if ((typeof process < 'u', I === An)) {
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
                if (!N.current) throw new Error(Ot(38));
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
          [T, R] = w.useState(Sc),
          k = w.useRef(void 0),
          A = Ec({
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
            T !== Sc && !k.current && L(T, !0);
          }, [T, L]),
          w.useMemo(() => [L, T], [L, T])
        );
      },
      x = (b, { skip: g = !1, selectFromResult: y } = {}) => {
        const { select: E } = e.endpoints[p],
          S = Ap(g ? An : b, a, l.endpointDefinitions[p], p),
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
          nE(() => {
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
          E = x(y, { ...b, skip: y === Sc }),
          S = w.useMemo(() => ({ lastArg: y }), [y]);
        return w.useMemo(() => [g, E, S], [g, E, S]);
      },
      useQuery(b, g) {
        const y = h(b, g),
          E = x(b, {
            selectFromResult: b === An || (g != null && g.skip) ? void 0 : oE,
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
var sE = Symbol(),
  aE = ({
    batch: e = bS,
    hooks: t = { useDispatch: Uo, useSelector: dn, useStore: xv },
    createSelector: r = cd,
    unstable__sideEffectsInRender: n = !1,
    ...o
  } = {}) => ({
    name: sE,
    init(i, { serializeQueryArgs: s }, a) {
      const l = i,
        {
          buildQueryHooks: c,
          buildMutationHook: u,
          usePrefetch: f
        } = iE({
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
        Gs(l, { usePrefetch: f }),
        Gs(a, { batch: e }),
        {
          injectEndpoint(d, m) {
            if (YS(m)) {
              const {
                useQuery: p,
                useLazyQuery: h,
                useLazyQuerySubscription: v,
                useQueryState: x,
                useQuerySubscription: b
              } = c(d);
              Gs(l.endpoints[d], {
                useQuery: p,
                useLazyQuery: h,
                useLazyQuerySubscription: v,
                useQueryState: x,
                useQuerySubscription: b
              }),
                (i[`use${wc(d)}Query`] = p),
                (i[`useLazy${wc(d)}Query`] = h);
            } else if (XS(m)) {
              const p = u(d);
              Gs(l.endpoints[d], { useMutation: p }),
                (i[`use${wc(d)}Mutation`] = p);
            }
          }
        }
      );
    }
  }),
  pn = $S(KS(), aE());
const Ma = pn({
    reducerPath: 'collectionApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
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
    useGetCollectionListQuery: OV,
    useGetCollectionByIdQuery: AV,
    useDeleteCollectionByIdMutation: _V,
    useSaveCollectionMutation: DV
  } = Ma,
  Oa = pn({
    reducerPath: 'designApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getDesignListByCollectionId: e.query({
        query: (t) =>
          `DesignRegistration/GetDesignListByCollectionId?Collectionid=${t}`
      })
    })
  }),
  { useGetDesignListByCollectionIdQuery: IV } = Oa,
  Aa = pn({
    reducerPath: 'lookupApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getLookUpList: e.query({ query: () => 'Common/GetLookUpList?appId=1' }),
      getShrinkageWastageList: e.query({
        query: () => 'Configurations/GetShrinkageWastageList?appId=1'
      })
    })
  }),
  { useGetLookUpListQuery: LV, useGetShrinkageWastageListQuery: $V } = Aa,
  _a = pn({
    reducerPath: 'prePlanningHeaderApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
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
    useGetCollectionFromPlanningHeaderQuery: jV,
    useGetDesignFromPlanningHeaderByCollectionIdQuery: BV,
    useGetPrePlanningHeaderByDesignIdQuery: NV,
    useGetFabricFromPrePlanningByBatchNoQuery: FV,
    useGetFabricRequisitionListByBatchNoQuery: VV,
    useGetComponentsByBatchNoQuery: WV,
    useGetFabricByComponentsAndBatchNoQuery: zV,
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery: UV,
    useGetEmbroideryListByBatchNoQuery: HV,
    useGetSchffiliListByBatchNoQuery: qV,
    useGetFabricColorFromPrePlanningByFabricIdQuery: GV,
    useGetDyeingPrintingListByBatchNoQuery: KV,
    useGetPrePlanningByPlanningHeaderIdQuery: YV,
    useGetAdditionalProcessListByBatchNoQuery: XV,
    useGetAdditionalProcessDetailsByAdditionalProcessIdQuery: QV,
    useGetDyeingPrintingDetailsByDpIdQuery: ZV,
    useGetEmbroideryDetailsListByEmbroideryIdQuery: JV
  } = _a,
  Da = pn({
    reducerPath: 'userManagementApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
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
    useGetRoleListQuery: e3,
    useGetMainMenuListQuery: t3,
    useGetSubMenuListQuery: r3,
    useGetUsersListQuery: n3,
    useGetAssignedRolesByEmpIdQuery: o3
  } = Da,
  Ia = pn({
    reducerPath: 'dashboardApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getPlanningDashboardByYear: e.query({
        query: () => 'Dashboard/GetPlanningDashboardByYear?year=2024'
      })
    })
  }),
  { useGetPlanningDashboardByYearQuery: i3 } = Ia,
  La = pn({
    reducerPath: 'productionApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/Production/' }),
    endpoints: (e) => ({
      getCollectionListFromPlanningHeader: e.query({
        query: () => 'GetCollectionListFromPlanningHeader?appId=1'
      }),
      getDesignListFromCompletedCollectionId: e.query({
        query: (t) =>
          `GetDesignListFromCompletedCollectionId?appId=1&Collectionid=${t}`
      }),
      getProductionBatchForProcessing: e.query({
        query: () => 'GetProductionBatchForProcessing?appId=1'
      }),
      getProductionProcessList: e.query({
        query: () => 'GetProductionProcessList?appId=1'
      }),
      getProductionProcessByProductionId: e.query({
        query: ({ productionId: t, ViewStatus: r }) =>
          `GetProductionProcessByProductionId?appId=1&productionId=${t}&status=${r}`
      }),
      getFabricForProductionByCollectionId: e.query({
        query: (t) =>
          `GetFabricForProductionByCollectionId?appId=1&collectionid=${t}`
      }),
      getProductionBatchInProcess: e.query({
        query: (t) => 'GetProductionBatchInProcess?appId=1'
      }),
      getProductionBatchByProductionId: e.query({
        query: (t) => `GetProductionBatchByProductionId?ProductionId=${t}`
      })
    })
  }),
  {
    useGetCollectionListFromPlanningHeaderQuery: s3,
    useGetDesignListFromCompletedCollectionIdQuery: a3,
    useGetProductionProcessListQuery: l3,
    useGetProductionBatchForProcessingQuery: c3,
    useGetProductionProcessByProductionIdQuery: u3,
    useGetFabricForProductionByCollectionIdQuery: d3,
    useGetProductionBatchInProcessQuery: f3,
    useGetProductionBatchByProductionIdQuery: p3
  } = La,
  $a = pn({
    reducerPath: 'termsAndConditionsApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/TermsConditions/' }),
    endpoints: (e) => ({
      getCategoriesList: e.query({ query: () => 'GetCategoriesList?appid=1' }),
      getTermsConditionsList: e.query({
        query: (t) =>
          `http://100.42.177.77:81/api/TermsConditions/GetTermsConditionsList?categoryId=${t}`
      })
    })
  }),
  { useGetCategoriesListQuery: h3, useGetTermsConditionsListQuery: m3 } = $a,
  fu = {
    basename: '/Elaf',
    defaultPath: '/dashboard',
    fontFamily: "'Roboto', sans-serif",
    borderRadius: 12
  },
  vd = '@customization/SET_MENU',
  ja = '@customization/MENU_OPEN',
  kv = '@customization/SET_FONT_FAMILY',
  Mv = '@customization/SET_BORDER_RADIUS',
  lE = {
    isOpen: [],
    defaultId: 'default',
    fontFamily: fu.fontFamily,
    borderRadius: fu.borderRadius,
    opened: !0
  },
  cE = (e = lE, t) => {
    let r;
    switch (t.type) {
      case ja:
        return (r = t.id), { ...e, isOpen: [r] };
      case vd:
        return { ...e, opened: t.opened };
      case kv:
        return { ...e, fontFamily: t.fontFamily };
      case Mv:
        return { ...e, borderRadius: t.borderRadius };
      default:
        return e;
    }
  },
  uE = id({
    customization: cE,
    [Ma.reducerPath]: Ma.reducer,
    [Oa.reducerPath]: Oa.reducer,
    [Aa.reducerPath]: Aa.reducer,
    [_a.reducerPath]: _a.reducer,
    [Da.reducerPath]: Da.reducer,
    [Ia.reducerPath]: Ia.reducer,
    [La.reducerPath]: La.reducer,
    [$a.reducerPath]: $a.reducer
  }),
  dE = O1({
    reducer: uE,
    middleware: (e) =>
      e()
        .concat(Ma.middleware)
        .concat(Oa.middleware)
        .concat(Aa.middleware)
        .concat(_a.middleware)
        .concat(Da.middleware)
        .concat(Ia.middleware)
        .concat(La.middleware)
        .concat($a.middleware)
  }),
  Ov = w.createContext(),
  fE = ({ children: e }) => {
    const [t, r] = w.useState(() => {
      const n = localStorage.getItem('user');
      return n ? JSON.parse(n) : null;
    });
    return (
      w.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(t));
      }, [t]),
      P.jsx(Ov.Provider, { value: { user: t, setUser: r }, children: e })
    );
  },
  pE = () => {
    const e = w.useContext(Ov);
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
const _p = 'popstate';
function Av(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: s, hash: a } = n.location;
    return Gi(
      '',
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function r(n, o) {
    return typeof o == 'string' ? o : Un(o);
  }
  return mE(t, r, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function _o(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function hE() {
  return Math.random().toString(36).substr(2, 8);
}
function Dp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gi(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    qe(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? hn(t) : t,
      { state: r, key: (t && t.key) || n || hE() }
    )
  );
}
function Un(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function hn(e) {
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
function mE(e, t, r, n) {
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
    let b = Gi(h.location, v, x);
    c = u() + 1;
    let g = Dp(b, c),
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
    let b = Gi(h.location, v, x);
    c = u();
    let g = Dp(b, c),
      y = h.createHref(b);
    s.replaceState(g, '', y),
      i && l && l({ action: a, location: h.location, delta: 0 });
  }
  function p(v) {
    let x = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      b = typeof v == 'string' ? v : Un(v);
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
        o.addEventListener(_p, f),
        (l = v),
        () => {
          o.removeEventListener(_p, f), (l = null);
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
const gE = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children'
]);
function vE(e) {
  return e.index === !0;
}
function Ki(e, t, r, n) {
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
        vE(o))
      ) {
        let l = qe({}, o, t(o), { id: a });
        return (n[a] = l), l;
      } else {
        let l = qe({}, o, t(o), { id: a, children: void 0 });
        return (
          (n[a] = l), o.children && (l.children = Ki(o.children, t, s, n)), l
        );
      }
    })
  );
}
function Mn(e, t, r) {
  return r === void 0 && (r = '/'), fa(e, t, r, !1);
}
function fa(e, t, r, n) {
  let o = typeof t == 'string' ? hn(t) : t,
    i = Ho(o.pathname || '/', r);
  if (i == null) return null;
  let s = _v(e);
  bE(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = OE(i);
    a = kE(s[l], c, n);
  }
  return a;
}
function yE(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function _v(e, t, r, n) {
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
      _v(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: TE(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, s);
      else for (let l of Dv(i.path)) o(i, s, l);
    }),
    t
  );
}
function Dv(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '');
  if (n.length === 0) return o ? [i, ''] : [i];
  let s = Dv(n.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function bE(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : RE(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const xE = /^:[\w-]+$/,
  wE = 3,
  SE = 2,
  EE = 1,
  CE = 10,
  PE = -2,
  Ip = (e) => e === '*';
function TE(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Ip) && (n += PE),
    t && (n += SE),
    r
      .filter((o) => !Ip(o))
      .reduce((o, i) => o + (xE.test(i) ? wE : i === '' ? EE : CE), n)
  );
}
function RE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function kE(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    o = {},
    i = '/',
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      f = Lp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u
      ),
      d = l.route;
    if (
      (!f &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (f = Lp(
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
        pathnameBase: DE(Fr([i, f.pathnameBase])),
        route: d
      }),
      f.pathnameBase !== '/' && (i = Fr([i, f.pathnameBase]));
  }
  return s;
}
function Lp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = ME(e.path, e.caseSensitive, e.end),
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
function ME(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    _o(
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
function OE(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      _o(
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
function AE(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: o = ''
  } = typeof e == 'string' ? hn(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : _E(r, t)) : t,
    search: IE(n),
    hash: LE(o)
  };
}
function _E(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Cc(e, t, r, n) {
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
function Iv(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ml(e, t) {
  let r = Iv(e);
  return t
    ? r.map((n, o) => (o === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function gl(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == 'string'
    ? (o = hn(e))
    : ((o = qe({}, e)),
      ge(
        !o.pathname || !o.pathname.includes('?'),
        Cc('?', 'pathname', 'search', o)
      ),
      ge(
        !o.pathname || !o.pathname.includes('#'),
        Cc('#', 'pathname', 'hash', o)
      ),
      ge(!o.search || !o.search.includes('#'), Cc('#', 'search', 'hash', o)));
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
  let l = AE(o, a),
    c = s && s !== '/' && s.endsWith('/'),
    u = (i || s === '.') && r.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const Fr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  DE = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  IE = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  LE = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class yd {
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
function vl(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Lv = ['post', 'put', 'patch', 'delete'],
  $E = new Set(Lv),
  jE = ['get', ...Lv],
  BE = new Set(jE),
  NE = new Set([301, 302, 303, 307, 308]),
  FE = new Set([307, 308]),
  Pc = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  VE = {
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
  bd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  WE = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $v = 'remix-router-transitions';
function zE(e) {
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
  } else o = WE;
  let i = {},
    s = Ki(e.routes, o, void 0, i),
    a,
    l = e.basename || '/',
    c = e.unstable_dataStrategy || KE,
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
    b = Mn(s, e.history.location, l),
    g = null;
  if (b == null && !u) {
    let O = It(404, { pathname: e.history.location.pathname }),
      { matches: _, route: $ } = Hp(s);
    (b = _), (g = { [$.id]: O });
  }
  b && u && hc(b, s, e.history.location.pathname).active && (b = null);
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
      navigation: Pc,
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
    Y = new Map(),
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
        _o(
          Y.size === 0 || V != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let H = Qf({
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
        return St(_, $);
      })),
      r)
    ) {
      aC(t, A);
      let O = () => lC(t, A);
      t.addEventListener('pagehide', O),
        (I = () => t.removeEventListener('pagehide', O));
    }
    return S.initialized || St(nt.Pop, S.location, { initialHydration: !0 }), E;
  }
  function ht() {
    d && d(),
      I && I(),
      m.clear(),
      R && R.abort(),
      S.fetchers.forEach((O, _) => xe(_)),
      S.blockers.forEach((O, _) => Xf(_));
  }
  function jt(O) {
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
        ? zp(S.loaderData, _.loaderData, _.matches || [], _.errors)
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
        navigation: Pc,
        revalidation: 'idle',
        restoreScrollPosition: Jf(O, _.matches || S.matches),
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
  async function mt(O, _) {
    if (typeof O == 'number') {
      e.history.go(O);
      return;
    }
    let $ = pu(
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
      } = $p(f.v7_normalizeFormMethod, !1, $, _),
      se = S.location,
      U = Gi(S.location, V, _ && _.state);
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
      Ee = Qf({ currentLocation: se, nextLocation: U, historyAction: te });
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
            mt(O, _);
        },
        reset() {
          let Le = new Map(S.blockers);
          Le.set(Ee, si), je({ blockers: Le });
        }
      });
      return;
    }
    return await St(te, U, {
      submission: H,
      pendingError: X,
      preventScrollReset: re,
      replace: _ && _.replace,
      enableViewTransition: _ && _.unstable_viewTransition,
      flushSync: De
    });
  }
  function wn() {
    if (
      (ee(),
      je({ revalidation: 'loading' }),
      S.navigation.state !== 'submitting')
    ) {
      if (S.navigation.state === 'idle') {
        St(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      St(C || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation
      });
    }
  }
  async function St(O, _, $) {
    R && R.abort(),
      (R = null),
      (C = O),
      (L = ($ && $.startUninterruptedRevalidation) === !0),
      Lw(S.location, S.matches),
      (T = ($ && $.preventScrollReset) === !0),
      (k = ($ && $.enableViewTransition) === !0);
    let V = a || s,
      H = $ && $.overrideNavigation,
      X = Mn(V, _, l),
      se = ($ && $.flushSync) === !0,
      U = hc(X, V, _.pathname);
    if ((U.active && U.matches && (X = U.matches), !X)) {
      let { error: Te, notFoundMatches: gt, route: rt } = fc(_.pathname);
      Qe(
        _,
        { matches: gt, loaderData: {}, errors: { [rt.id]: Te } },
        { flushSync: se }
      );
      return;
    }
    if (
      S.initialized &&
      !D &&
      eC(S.location, _) &&
      !($ && $.submission && br($.submission.formMethod))
    ) {
      Qe(_, { matches: X }, { flushSync: se });
      return;
    }
    R = new AbortController();
    let pe = oo(e.history, _, R.signal, $ && $.submission),
      te;
    if ($ && $.pendingError)
      te = [Mi(X).route.id, { type: Ne.error, error: $.pendingError }];
    else if ($ && $.submission && br($.submission.formMethod)) {
      let Te = await ir(pe, _, $.submission, X, U.active, {
        replace: $.replace,
        flushSync: se
      });
      if (Te.shortCircuited) return;
      if (Te.pendingActionResult) {
        let [gt, rt] = Te.pendingActionResult;
        if (Yt(rt) && vl(rt.error) && rt.error.status === 404) {
          (R = null),
            Qe(_, {
              matches: Te.matches,
              loaderData: {},
              errors: { [gt]: rt.error }
            });
          return;
        }
      }
      (X = Te.matches || X),
        (te = Te.pendingActionResult),
        (H = Tc(_, $.submission)),
        (se = !1),
        (U.active = !1),
        (pe = oo(e.history, pe.url, pe.signal));
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
      Qe(_, qe({ matches: De || X }, Up(te), { loaderData: Ee, errors: Le })));
  }
  async function ir(O, _, $, V, H, X) {
    X === void 0 && (X = {}), ee();
    let se = iC(_, $);
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
        let { notFoundMatches: re, error: De, route: Ee } = fc(_.pathname);
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
        error: It(405, {
          method: O.method,
          pathname: _.pathname,
          routeId: pe.route.id
        })
      };
    else if (((U = (await ne('action', O, [pe], V))[0]), O.signal.aborted))
      return { shortCircuited: !0 };
    if (Dn(U)) {
      let te;
      return (
        X && X.replace != null
          ? (te = X.replace)
          : (te =
              Fp(U.response.headers.get('Location'), new URL(O.url), l) ===
              S.location.pathname + S.location.search),
        await st(O, U, { submission: $, replace: te }),
        { shortCircuited: !0 }
      );
    }
    if (_n(U)) throw It(400, { type: 'defer-action' });
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
    let De = H || Tc(_, X),
      Ee = X || se || Kp(De),
      Le = !L && (!f.v7_partialHydration || !pe);
    if (V) {
      if (Le) {
        let Ke = Yr(re);
        je(qe({ navigation: De }, Ke !== void 0 ? { actionData: Ke } : {}), {
          flushSync: te
        });
      }
      let me = await Fs($, _.pathname, O.signal);
      if (me.type === 'aborted') return { shortCircuited: !0 };
      if (me.type === 'error') {
        let { error: Ke, notFoundMatches: Kt, route: Be } = Ns(_.pathname, me);
        return { matches: Kt, loaderData: {}, errors: { [Be.id]: Ke } };
      } else if (me.matches) $ = me.matches;
      else {
        let { error: Ke, notFoundMatches: Kt, route: Be } = fc(_.pathname);
        return { matches: Kt, loaderData: {}, errors: { [Be.id]: Ke } };
      }
    }
    let Te = a || s,
      [gt, rt] = jp(
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
      (pc(
        (me) =>
          !($ && $.some((Ke) => Ke.route.id === me)) ||
          (gt && gt.some((Ke) => Ke.route.id === me))
      ),
      (z = ++F),
      gt.length === 0 && rt.length === 0)
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
            Up(re),
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
        let Ke = Yr(re);
        Ke !== void 0 && (me.actionData = Ke);
      }
      rt.length > 0 && (me.fetchers = Et(rt)), je(me, { flushSync: te });
    }
    rt.forEach((me) => {
      j.has(me.key) && tt(me.key),
        me.controller && j.set(me.key, me.controller);
    });
    let ni = () => rt.forEach((me) => tt(me.key));
    R && R.signal.addEventListener('abort', ni);
    let { loaderResults: Xr, fetcherResults: Zn } = await be(
      S.matches,
      $,
      gt,
      rt,
      O
    );
    if (O.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener('abort', ni),
      rt.forEach((me) => j.delete(me.key));
    let Jn = qp([...Xr, ...Zn]);
    if (Jn) {
      if (Jn.idx >= gt.length) {
        let me = rt[Jn.idx - gt.length].key;
        fe.add(me);
      }
      return await st(O, Jn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: eo, errors: Sr } = Wp(S, $, gt, Xr, re, rt, Zn, ye);
    ye.forEach((me, Ke) => {
      me.subscribe((Kt) => {
        (Kt || me.done) && ye.delete(Ke);
      });
    }),
      f.v7_partialHydration &&
        pe &&
        S.errors &&
        Object.entries(S.errors)
          .filter((me) => {
            let [Ke] = me;
            return !gt.some((Kt) => Kt.route.id === Ke);
          })
          .forEach((me) => {
            let [Ke, Kt] = me;
            Sr = Object.assign(Sr || {}, { [Ke]: Kt });
          });
    let Vs = ri(),
      Ws = Yf(z),
      zs = Vs || Ws || rt.length > 0;
    return qe(
      { matches: $, loaderData: eo, errors: Sr },
      zs ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Yr(O) {
    if (O && !Yt(O[1])) return { [O[0]]: O[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function Et(O) {
    return (
      O.forEach((_) => {
        let $ = S.fetchers.get(_.key),
          V = ai(void 0, $ ? $.data : void 0);
        S.fetchers.set(_.key, V);
      }),
      new Map(S.fetchers)
    );
  }
  function qt(O, _, $, V) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(O) && tt(O);
    let H = (V && V.unstable_flushSync) === !0,
      X = a || s,
      se = pu(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        $,
        f.v7_relativeSplatPath,
        _,
        V == null ? void 0 : V.relative
      ),
      U = Mn(X, se, l),
      pe = hc(U, X, se);
    if ((pe.active && pe.matches && (U = pe.matches), !U)) {
      K(O, _, It(404, { pathname: se }), { flushSync: H });
      return;
    }
    let {
      path: te,
      submission: re,
      error: De
    } = $p(f.v7_normalizeFormMethod, !0, se, V);
    if (De) {
      K(O, _, De, { flushSync: H });
      return;
    }
    let Ee = wi(U, te);
    if (((T = (V && V.preventScrollReset) === !0), re && br(re.formMethod))) {
      at(O, _, te, Ee, U, pe.active, H, re);
      return;
    }
    J.set(O, { routeId: _, path: te }), Gt(O, _, te, Ee, U, pe.active, H, re);
  }
  async function at(O, _, $, V, H, X, se, U) {
    ee(), J.delete(O);
    function pe(Be) {
      if (!Be.route.action && !Be.route.lazy) {
        let Lr = It(405, { method: U.formMethod, pathname: $, routeId: _ });
        return K(O, _, Lr, { flushSync: se }), !0;
      }
      return !1;
    }
    if (!X && pe(V)) return;
    let te = S.fetchers.get(O);
    he(O, sC(U, te), { flushSync: se });
    let re = new AbortController(),
      De = oo(e.history, $, re.signal, U);
    if (X) {
      let Be = await Fs(H, $, De.signal);
      if (Be.type === 'aborted') return;
      if (Be.type === 'error') {
        let { error: Lr } = Ns($, Be);
        K(O, _, Lr, { flushSync: se });
        return;
      } else if (Be.matches) {
        if (((H = Be.matches), (V = wi(H, $)), pe(V))) return;
      } else {
        K(O, _, It(404, { pathname: $ }), { flushSync: se });
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
      if (Dn(Te) || Yt(Te)) {
        he(O, Zr(void 0));
        return;
      }
    } else {
      if (Dn(Te))
        if ((j.delete(O), z > Ee)) {
          he(O, Zr(void 0));
          return;
        } else
          return fe.add(O), he(O, ai(U)), st(De, Te, { fetcherSubmission: U });
      if (Yt(Te)) {
        K(O, _, Te.error);
        return;
      }
    }
    if (_n(Te)) throw It(400, { type: 'defer-action' });
    let gt = S.navigation.location || S.location,
      rt = oo(e.history, gt, re.signal),
      ni = a || s,
      Xr =
        S.navigation.state !== 'idle'
          ? Mn(ni, S.navigation.location, l)
          : S.matches;
    ge(Xr, "Didn't find any matches after fetcher action");
    let Zn = ++F;
    q.set(O, Zn);
    let Jn = ai(U, Te.data);
    S.fetchers.set(O, Jn);
    let [eo, Sr] = jp(
      e.history,
      S,
      Xr,
      U,
      gt,
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
        ep = S.fetchers.get(Lr),
        Bw = ai(void 0, ep ? ep.data : void 0);
      S.fetchers.set(Lr, Bw),
        j.has(Lr) && tt(Lr),
        Be.controller && j.set(Lr, Be.controller);
    }),
      je({ fetchers: new Map(S.fetchers) });
    let Vs = () => Sr.forEach((Be) => tt(Be.key));
    re.signal.addEventListener('abort', Vs);
    let { loaderResults: Ws, fetcherResults: zs } = await be(
      S.matches,
      Xr,
      eo,
      Sr,
      rt
    );
    if (re.signal.aborted) return;
    re.signal.removeEventListener('abort', Vs),
      q.delete(O),
      j.delete(O),
      Sr.forEach((Be) => j.delete(Be.key));
    let me = qp([...Ws, ...zs]);
    if (me) {
      if (me.idx >= eo.length) {
        let Be = Sr[me.idx - eo.length].key;
        fe.add(Be);
      }
      return st(rt, me.result);
    }
    let { loaderData: Ke, errors: Kt } = Wp(
      S,
      S.matches,
      eo,
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
    Yf(Zn),
      S.navigation.state === 'loading' && Zn > z
        ? (ge(C, 'Expected pending action'),
          R && R.abort(),
          Qe(S.navigation.location, {
            matches: Xr,
            loaderData: Ke,
            errors: Kt,
            fetchers: new Map(S.fetchers)
          }))
        : (je({
            errors: Kt,
            loaderData: zp(S.loaderData, Ke, Xr, Kt),
            fetchers: new Map(S.fetchers)
          }),
          (D = !1));
  }
  async function Gt(O, _, $, V, H, X, se, U) {
    let pe = S.fetchers.get(O);
    he(O, ai(U, pe ? pe.data : void 0), { flushSync: se });
    let te = new AbortController(),
      re = oo(e.history, $, te.signal);
    if (X) {
      let Te = await Fs(H, $, re.signal);
      if (Te.type === 'aborted') return;
      if (Te.type === 'error') {
        let { error: gt } = Ns($, Te);
        K(O, _, gt, { flushSync: se });
        return;
      } else if (Te.matches) (H = Te.matches), (V = wi(H, $));
      else {
        K(O, _, It(404, { pathname: $ }), { flushSync: se });
        return;
      }
    }
    j.set(O, te);
    let De = F,
      Le = (await ne('loader', re, [V], H))[0];
    if (
      (_n(Le) && (Le = (await Vv(Le, re.signal, !0)) || Le),
      j.get(O) === te && j.delete(O),
      !re.signal.aborted)
    ) {
      if (ve.has(O)) {
        he(O, Zr(void 0));
        return;
      }
      if (Dn(Le))
        if (z > De) {
          he(O, Zr(void 0));
          return;
        } else {
          fe.add(O), await st(re, Le);
          return;
        }
      if (Yt(Le)) {
        K(O, _, Le.error);
        return;
      }
      ge(!_n(Le), 'Unhandled fetcher deferred data'), he(O, Zr(Le.data));
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
      (se = Fp(se, new URL(O.url), l));
    let U = Gi(S.location, se, { _isRedirect: !0 });
    if (r) {
      let Le = !1;
      if (_.response.headers.has('X-Remix-Reload-Document')) Le = !0;
      else if (bd.test(se)) {
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
    !V && !H && te && re && De && (V = Kp(S.navigation));
    let Ee = V || H;
    if (FE.has(_.response.status) && Ee && br(Ee.formMethod))
      await St(pe, U, {
        submission: qe({}, Ee, { formAction: se }),
        preventScrollReset: T
      });
    else {
      let Le = Tc(U, V);
      await St(pe, U, {
        overrideNavigation: Le,
        fetcherSubmission: H,
        preventScrollReset: T
      });
    }
  }
  async function ne(O, _, $, V) {
    try {
      let H = await YE(c, O, _, $, V, i, o);
      return await Promise.all(
        H.map((X, se) => {
          if (rC(X)) {
            let U = X.result;
            return {
              type: Ne.redirect,
              response: ZE(U, _, $[se].route.id, V, l, f.v7_relativeSplatPath)
            };
          }
          return QE(X);
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
          let pe = oo(e.history, U.path, U.controller.signal);
          return ne('loader', pe, [U.match], U.matches).then((te) => te[0]);
        } else
          return Promise.resolve({
            type: Ne.error,
            error: It(404, { pathname: U.path })
          });
      })
    ]);
    return (
      await Promise.all([
        Gp(
          O,
          $,
          X,
          X.map(() => H.signal),
          !1,
          S.loaderData
        ),
        Gp(
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
      N.push(...pc()),
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
  function K(O, _, $, V) {
    V === void 0 && (V = {});
    let H = Mi(S.matches, _);
    xe(O),
      je(
        { errors: { [H.route.id]: $ }, fetchers: new Map(S.fetchers) },
        { flushSync: (V && V.flushSync) === !0 }
      );
  }
  function Ct(O) {
    return (
      f.v7_fetcherPersist &&
        (ae.set(O, (ae.get(O) || 0) + 1), ve.has(O) && ve.delete(O)),
      S.fetchers.get(O) || VE
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
  function Qn(O) {
    for (let _ of O) {
      let $ = Ct(_),
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
    return Qn(O), _;
  }
  function Yf(O) {
    let _ = [];
    for (let [$, V] of q)
      if (V < O) {
        let H = S.fetchers.get($);
        ge(H, 'Expected fetcher: ' + $),
          H.state === 'loading' && (tt($), q.delete($), _.push($));
      }
    return Qn(_), _.length > 0;
  }
  function Dw(O, _) {
    let $ = S.blockers.get(O) || si;
    return Y.get(O) !== _ && Y.set(O, _), $;
  }
  function Xf(O) {
    S.blockers.delete(O), Y.delete(O);
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
  function Qf(O) {
    let { currentLocation: _, nextLocation: $, historyAction: V } = O;
    if (Y.size === 0) return;
    Y.size > 1 && _o(!1, 'A router only supports one blocker at a time');
    let H = Array.from(Y.entries()),
      [X, se] = H[H.length - 1],
      U = S.blockers.get(X);
    if (
      !(U && U.state === 'proceeding') &&
      se({ currentLocation: _, nextLocation: $, historyAction: V })
    )
      return X;
  }
  function fc(O) {
    let _ = It(404, { pathname: O }),
      $ = a || s,
      { matches: V, route: H } = Hp($);
    return pc(), { notFoundMatches: V, route: H, error: _ };
  }
  function Ns(O, _) {
    let $ = _.partialMatches,
      V = $[$.length - 1].route,
      H = It(400, {
        type: 'route-discovery',
        routeId: V.id,
        pathname: O,
        message:
          _.error != null && 'message' in _.error ? _.error : String(_.error)
      });
    return { notFoundMatches: $, route: V, error: H };
  }
  function pc(O) {
    let _ = [];
    return (
      ye.forEach(($, V) => {
        (!O || O(V)) && ($.cancel(), _.push(V), ye.delete(V));
      }),
      _
    );
  }
  function Iw(O, _, $) {
    if (((p = O), (v = _), (h = $ || null), !x && S.navigation === Pc)) {
      x = !0;
      let V = Jf(S.location, S.matches);
      V != null && je({ restoreScrollPosition: V });
    }
    return () => {
      (p = null), (v = null), (h = null);
    };
  }
  function Zf(O, _) {
    return (
      (h &&
        h(
          O,
          _.map((V) => yE(V, S.loaderData))
        )) ||
      O.key
    );
  }
  function Lw(O, _) {
    if (p && v) {
      let $ = Zf(O, _);
      p[$] = v();
    }
  }
  function Jf(O, _) {
    if (p) {
      let $ = Zf(O, _),
        V = p[$];
      if (typeof V == 'number') return V;
    }
    return null;
  }
  function hc(O, _, $) {
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
        await GE(u, _, V, se, i, o, Ae, $);
      } catch (re) {
        return { type: 'error', error: re, partialMatches: V };
      } finally {
        X && (s = [...s]);
      }
      if ($.aborted) return { type: 'aborted' };
      let U = Mn(se, _, l),
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
  function $w(O) {
    (i = {}), (a = Ki(O, o, void 0, i));
  }
  function jw(O, _) {
    let $ = a == null;
    Bv(O, _, a || s, i, o), $ && ((s = [...s]), je({}));
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
      subscribe: jt,
      enableScrollRestoration: Iw,
      navigate: mt,
      fetch: qt,
      revalidate: wn,
      createHref: (O) => e.history.createHref(O),
      encodeLocation: (O) => e.history.encodeLocation(O),
      getFetcher: Ct,
      deleteFetcher: oe,
      dispose: ht,
      getBlocker: Dw,
      deleteBlocker: Xf,
      patchRoutes: jw,
      _internalFetchControllers: j,
      _internalActiveDeferreds: ye,
      _internalSetRoutes: $w
    }),
    E
  );
}
function UE(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function pu(e, t, r, n, o, i, s, a) {
  let l, c;
  if (s) {
    l = [];
    for (let f of t)
      if ((l.push(f), f.route.id === s)) {
        c = f;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = gl(o || '.', ml(l, i), Ho(e.pathname, r) || e.pathname, a === 'path');
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      c &&
      c.route.index &&
      !xd(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    n &&
      r !== '/' &&
      (u.pathname = u.pathname === '/' ? r : Fr([r, u.pathname])),
    Un(u)
  );
}
function $p(e, t, r, n) {
  if (!n || !UE(n)) return { path: r };
  if (n.formMethod && !oC(n.formMethod))
    return { path: r, error: It(405, { method: n.formMethod }) };
  let o = () => ({ path: r, error: It(400, { type: 'invalid-body' }) }),
    i = n.formMethod || 'get',
    s = e ? i.toUpperCase() : i.toLowerCase(),
    a = Nv(r);
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
  if (n.formData) (l = hu(n.formData)), (c = n.formData);
  else if (n.body instanceof FormData) (l = hu(n.body)), (c = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (c = Vp(l));
  else if (n.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (c = Vp(l));
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
  let f = hn(r);
  return (
    t && f.search && xd(f.search) && l.append('index', ''),
    (f.search = '?' + l),
    { path: Un(f), submission: u }
  );
}
function HE(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function jp(e, t, r, n, o, i, s, a, l, c, u, f, d, m, p, h) {
  let v = h ? (Yt(h[1]) ? h[1].error : h[1].data) : void 0,
    x = e.createURL(t.location),
    b = e.createURL(o),
    g = h && Yt(h[1]) ? h[0] : void 0,
    y = g ? HE(r, g) : r,
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
      if (qE(t.loaderData, t.matches[k], R) || l.some((D) => D === R.route.id))
        return !0;
      let I = t.matches[k],
        L = R;
      return Bp(
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
                jv(I, L)
          }
        )
      );
    }),
    T = [];
  return (
    f.forEach((R, k) => {
      if (i || !r.some((N) => N.route.id === R.routeId) || u.has(k)) return;
      let A = Mn(m, R.path, p);
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
            : (D = Bp(
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
function qE(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function jv(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Bp(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
async function GE(e, t, r, n, o, i, s, a) {
  let l = [t, ...r.map((c) => c.route.id)].join('-');
  try {
    let c = s.get(l);
    c ||
      ((c = e({
        path: t,
        matches: r,
        patch: (u, f) => {
          a.aborted || Bv(u, f, n, o, i);
        }
      })),
      s.set(l, c)),
      c && tC(c) && (await c);
  } finally {
    s.delete(l);
  }
}
function Bv(e, t, r, n, o) {
  if (e) {
    var i;
    let s = n[e];
    ge(s, 'No route found to patch children into: routeId = ' + e);
    let a = Ki(
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
    let s = Ki(t, o, ['patch', String(r.length || '0')], n);
    r.push(...s);
  }
}
async function Np(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let o = r[e.id];
  ge(o, 'No route found in manifest');
  let i = {};
  for (let s in n) {
    let l = o[s] !== void 0 && s !== 'hasErrorBoundary';
    _o(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !gE.has(s) && (i[s] = n[s]);
  }
  Object.assign(o, i), Object.assign(o, qe({}, t(o), { lazy: void 0 }));
}
function KE(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function YE(e, t, r, n, o, i, s, a) {
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
              ? XE(t, r, f, i, s, p, a)
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
async function XE(e, t, r, n, o, i, s) {
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
            Np(r.route, o, n)
          ]);
        if (f !== void 0) throw f;
        a = d;
      } else if ((await Np(r.route, o, n), (u = r.route[e]), u)) a = await c(u);
      else if (e === 'action') {
        let f = new URL(t.url),
          d = f.pathname + f.search;
        throw It(405, { method: t.method, pathname: d, routeId: r.route.id });
      } else return { type: Ne.data, result: void 0 };
    else if (u) a = await c(u);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw It(404, { pathname: d });
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
async function QE(e) {
  let { result: t, type: r, status: n } = e;
  if (Fv(t)) {
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
          error: new yd(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers
        }
      : { type: Ne.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (r === Ne.error)
    return { type: Ne.error, error: t, statusCode: vl(t) ? t.status : n };
  if (nC(t)) {
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
function ZE(e, t, r, n, o, i) {
  let s = e.headers.get('Location');
  if (
    (ge(
      s,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !bd.test(s))
  ) {
    let a = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (s = pu(new URL(t.url), a, o, !0, s, i)), e.headers.set('Location', s);
  }
  return e;
}
function Fp(e, t, r) {
  if (bd.test(e)) {
    let n = e,
      o = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      i = Ho(o.pathname, r) != null;
    if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
  }
  return e;
}
function oo(e, t, r, n) {
  let o = e.createURL(Nv(t)).toString(),
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
            ? (i.body = hu(n.formData))
            : (i.body = n.formData);
  }
  return new Request(o, i);
}
function hu(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function Vp(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function JE(e, t, r, n, o, i) {
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
        (ge(!Dn(d), 'Cannot handle redirect results in processLoaderData'),
        Yt(d))
      ) {
        let h = d.error;
        f !== void 0 && ((h = f), (f = void 0)), (a = a || {});
        {
          let v = Mi(e, p);
          a[v.route.id] == null && (a[v.route.id] = h);
        }
        (s[p] = void 0),
          c || ((c = !0), (l = vl(d.error) ? d.error.status : 500)),
          d.headers && (u[p] = d.headers);
      } else
        _n(d)
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
function Wp(e, t, r, n, o, i, s, a) {
  let { loaderData: l, errors: c } = JE(t, r, n, o, a);
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
      } else if (Dn(p)) ge(!1, 'Unhandled fetcher revalidation redirect');
      else if (_n(p)) ge(!1, 'Unhandled fetcher deferred data');
      else {
        let h = Zr(p.data);
        e.fetchers.set(f, h);
      }
  }
  return { loaderData: l, errors: c };
}
function zp(e, t, r, n) {
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
function Up(e) {
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
function Hp(e) {
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
function It(e, t) {
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
    new yd(e || 500, a, new Error(l), !0)
  );
}
function qp(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (Dn(r)) return { result: r, idx: t };
  }
}
function Nv(e) {
  let t = typeof e == 'string' ? hn(e) : e;
  return Un(qe({}, t, { hash: '' }));
}
function eC(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function tC(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function rC(e) {
  return Fv(e.result) && NE.has(e.result.status);
}
function _n(e) {
  return e.type === Ne.deferred;
}
function Yt(e) {
  return e.type === Ne.error;
}
function Dn(e) {
  return (e && e.type) === Ne.redirect;
}
function nC(e) {
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
function Fv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function oC(e) {
  return BE.has(e.toLowerCase());
}
function br(e) {
  return $E.has(e.toLowerCase());
}
async function Gp(e, t, r, n, o, i) {
  for (let s = 0; s < r.length; s++) {
    let a = r[s],
      l = t[s];
    if (!l) continue;
    let c = e.find((f) => f.route.id === l.route.id),
      u = c != null && !jv(c, l) && (i && i[l.route.id]) !== void 0;
    if (_n(a) && (o || u)) {
      let f = n[s];
      ge(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Vv(a, f, o).then((d) => {
          d && (r[s] = d || r[s]);
        });
    }
  }
}
async function Vv(e, t, r) {
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
function xd(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function wi(e, t) {
  let r = typeof t == 'string' ? hn(t).search : t.search;
  if (e[e.length - 1].route.index && xd(r || '')) return e[e.length - 1];
  let n = Iv(e);
  return n[n.length - 1];
}
function Kp(e) {
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
function Tc(e, t) {
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
function iC(e, t) {
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
function sC(e, t) {
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
function aC(e, t) {
  try {
    let r = e.sessionStorage.getItem($v);
    if (r) {
      let n = JSON.parse(r);
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function lC(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, o] of t) r[n] = [...o];
    try {
      e.sessionStorage.setItem($v, JSON.stringify(r));
    } catch (n) {
      _o(
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
 */ function Ba() {
  return (
    (Ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ba.apply(this, arguments)
  );
}
const yl = w.createContext(null),
  Wv = w.createContext(null),
  mn = w.createContext(null),
  wd = w.createContext(null),
  Kr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zv = w.createContext(null);
function cC(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  qo() || ge(!1);
  let { basename: n, navigator: o } = w.useContext(mn),
    { hash: i, pathname: s, search: a } = Hv(e, { relative: r }),
    l = s;
  return (
    n !== '/' && (l = s === '/' ? n : Fr([n, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function qo() {
  return w.useContext(wd) != null;
}
function gn() {
  return qo() || ge(!1), w.useContext(wd).location;
}
function Uv(e) {
  w.useContext(mn).static || w.useLayoutEffect(e);
}
function gs() {
  let { isDataRoute: e } = w.useContext(Kr);
  return e ? EC() : uC();
}
function uC() {
  qo() || ge(!1);
  let e = w.useContext(yl),
    { basename: t, future: r, navigator: n } = w.useContext(mn),
    { matches: o } = w.useContext(Kr),
    { pathname: i } = gn(),
    s = JSON.stringify(ml(o, r.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    Uv(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == 'number') {
          n.go(c);
          return;
        }
        let f = gl(c, JSON.parse(s), i, u.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Fr([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u);
      },
      [t, n, s, i, e]
    )
  );
}
const dC = w.createContext(null);
function fC(e) {
  let t = w.useContext(Kr).outlet;
  return t && w.createElement(dC.Provider, { value: e }, t);
}
function Hv(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = w.useContext(mn),
    { matches: o } = w.useContext(Kr),
    { pathname: i } = gn(),
    s = JSON.stringify(ml(o, n.v7_relativeSplatPath));
  return w.useMemo(() => gl(e, JSON.parse(s), i, r === 'path'), [e, s, i, r]);
}
function pC(e, t, r, n) {
  qo() || ge(!1);
  let { navigator: o } = w.useContext(mn),
    { matches: i } = w.useContext(Kr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : '/';
  s && s.route;
  let c = gn(),
    u;
  u = c;
  let f = u.pathname || '/',
    d = f;
  if (l !== '/') {
    let h = l.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let m = Mn(e, { pathname: d });
  return yC(
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
function hC() {
  let e = SC(),
    t = vl(e)
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
const mC = w.createElement(hC, null);
class gC extends w.Component {
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
          Kr.Provider,
          { value: this.props.routeContext },
          w.createElement(zv.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children;
  }
}
function vC(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = w.useContext(yl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Kr.Provider, { value: t }, n)
  );
}
function yC(e, t, r, n) {
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
      (h = f.route.errorElement || mC),
      l &&
        (c < 0 && d === 0
          ? (CC('route-fallback'), (p = !0), (v = null))
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
          w.createElement(vC, {
            match: f,
            routeContext: { outlet: u, matches: x, isDataRoute: r != null },
            children: g
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? w.createElement(gC, {
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
var qv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(qv || {}),
  Na = (function (e) {
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
  })(Na || {});
function bC(e) {
  let t = w.useContext(yl);
  return t || ge(!1), t;
}
function xC(e) {
  let t = w.useContext(Wv);
  return t || ge(!1), t;
}
function wC(e) {
  let t = w.useContext(Kr);
  return t || ge(!1), t;
}
function Gv(e) {
  let t = wC(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || ge(!1), r.route.id;
}
function SC() {
  var e;
  let t = w.useContext(zv),
    r = xC(Na.UseRouteError),
    n = Gv(Na.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function EC() {
  let { router: e } = bC(qv.UseNavigateStable),
    t = Gv(Na.UseNavigateStable),
    r = w.useRef(!1);
  return (
    Uv(() => {
      r.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Ba({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Yp = {};
function CC(e, t, r) {
  Yp[e] || (Yp[e] = !0);
}
function PC(e) {
  let { to: t, replace: r, state: n, relative: o } = e;
  qo() || ge(!1);
  let { future: i, static: s } = w.useContext(mn),
    { matches: a } = w.useContext(Kr),
    { pathname: l } = gn(),
    c = gs(),
    u = gl(t, ml(a, i.v7_relativeSplatPath), l, o === 'path'),
    f = JSON.stringify(u);
  return (
    w.useEffect(
      () => c(JSON.parse(f), { replace: r, state: n, relative: o }),
      [c, f, o, r, n]
    ),
    null
  );
}
function Kv(e) {
  return fC(e.context);
}
function Yv(e) {
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
        future: Ba({ v7_relativeSplatPath: !1 }, a)
      }),
      [l, a, i, s]
    );
  typeof n == 'string' && (n = hn(n));
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
        mn.Provider,
        { value: c },
        w.createElement(wd.Provider, { children: r, value: h })
      );
}
new Promise(() => {});
function TC(e) {
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
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
function RC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function kC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function MC(e, t) {
  return e.button === 0 && (!t || t === '_self') && !kC(e);
}
const OC = [
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
  AC = '6';
try {
  window.__reactRouterVersion = AC;
} catch {}
function _C(e, t) {
  return zE({
    basename: t == null ? void 0 : t.basename,
    future: Yi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Av({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || DC(),
    routes: e,
    mapRouteProperties: TC,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnMiss:
      t == null ? void 0 : t.unstable_patchRoutesOnMiss,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function DC() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Yi({}, t, { errors: IC(t.errors) })), t;
}
function IC(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      r[n] = new yd(o.status, o.statusText, o.data, o.internal === !0);
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
const LC = w.createContext({ isTransitioning: !1 }),
  $C = w.createContext(new Map()),
  jC = 'startTransition',
  Fa = Oo[jC],
  BC = 'flushSync',
  Xp = Vw[BC];
function NC(e) {
  Fa ? Fa(e) : e();
}
function li(e) {
  Xp ? Xp(e) : e();
}
class FC {
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
function Xv(e) {
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
        x ? NC(C) : C();
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
      l.isTransitioning && !l.flushSync && f(new FC());
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
      yl.Provider,
      { value: S },
      w.createElement(
        Wv.Provider,
        { value: o },
        w.createElement(
          $C.Provider,
          { value: v.current },
          w.createElement(
            LC.Provider,
            { value: l },
            w.createElement(
              Yv,
              {
                basename: E,
                location: o.location,
                navigationType: o.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath }
              },
              o.initialized || r.future.v7_partialHydration
                ? w.createElement(VC, {
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
function VC(e) {
  let { routes: t, future: r, state: n } = e;
  return pC(t, void 0, n, r);
}
function WC(e) {
  let { basename: t, children: r, future: n, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = Av({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = n || {},
    u = w.useCallback(
      (f) => {
        c && Fa ? Fa(() => l(f)) : l(f);
      },
      [l, c]
    );
  return (
    w.useLayoutEffect(() => s.listen(u), [s, u]),
    w.createElement(Yv, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: n
    })
  );
}
const zC =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  UC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  In = w.forwardRef(function (t, r) {
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
      d = RC(t, OC),
      { basename: m } = w.useContext(mn),
      p,
      h = !1;
    if (typeof c == 'string' && UC.test(c) && ((p = c), zC))
      try {
        let g = new URL(window.location.href),
          y = c.startsWith('//') ? new URL(g.protocol + c) : new URL(c),
          E = Ho(y.pathname, m);
        y.origin === g.origin && E != null
          ? (c = E + y.search + y.hash)
          : (h = !0);
      } catch {}
    let v = cC(c, { relative: o }),
      x = HC(c, {
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
      Yi({}, d, { href: p || v, onClick: h || i ? n : b, ref: r, target: l })
    );
  });
var Qp;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Qp || (Qp = {}));
var Zp;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Zp || (Zp = {}));
function HC(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a
    } = t === void 0 ? {} : t,
    l = gs(),
    c = gn(),
    u = Hv(e, { relative: s });
  return w.useCallback(
    (f) => {
      if (MC(f, r)) {
        f.preventDefault();
        let d = n !== void 0 ? n : Un(c) === Un(u);
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
const qC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xi },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Do = '$$material';
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
function Qv(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var GC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  KC = Qv(function (e) {
    return (
      GC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function YC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function XC(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var QC = (function () {
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
          this._insertTag(XC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = YC(o);
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
  Tt = '-ms-',
  Va = '-moz-',
  Ce = '-webkit-',
  Zv = 'comm',
  Sd = 'rule',
  Ed = 'decl',
  ZC = '@import',
  Jv = '@keyframes',
  JC = '@layer',
  eP = Math.abs,
  bl = String.fromCharCode,
  tP = Object.assign;
function rP(e, t) {
  return xt(e, 0) ^ 45
    ? (((((((t << 2) ^ xt(e, 0)) << 2) ^ xt(e, 1)) << 2) ^ xt(e, 2)) << 2) ^
        xt(e, 3)
    : 0;
}
function ey(e) {
  return e.trim();
}
function nP(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Pe(e, t, r) {
  return e.replace(t, r);
}
function mu(e, t) {
  return e.indexOf(t);
}
function xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qi(e, t, r) {
  return e.slice(t, r);
}
function Er(e) {
  return e.length;
}
function Cd(e) {
  return e.length;
}
function Ks(e, t) {
  return t.push(e), e;
}
function oP(e, t) {
  return e.map(t).join('');
}
var xl = 1,
  Io = 1,
  ty = 0,
  zt = 0,
  it = 0,
  Go = '';
function wl(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: xl,
    column: Io,
    length: s,
    return: ''
  };
}
function ci(e, t) {
  return tP(wl('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function iP() {
  return it;
}
function sP() {
  return (
    (it = zt > 0 ? xt(Go, --zt) : 0), Io--, it === 10 && ((Io = 1), xl--), it
  );
}
function Zt() {
  return (
    (it = zt < ty ? xt(Go, zt++) : 0), Io++, it === 10 && ((Io = 1), xl++), it
  );
}
function Rr() {
  return xt(Go, zt);
}
function pa() {
  return zt;
}
function vs(e, t) {
  return Qi(Go, e, t);
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
function ry(e) {
  return (xl = Io = 1), (ty = Er((Go = e))), (zt = 0), [];
}
function ny(e) {
  return (Go = ''), e;
}
function ha(e) {
  return ey(vs(zt - 1, gu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function aP(e) {
  for (; (it = Rr()) && it < 33; ) Zt();
  return Zi(e) > 2 || Zi(it) > 3 ? '' : ' ';
}
function lP(e, t) {
  for (
    ;
    --t &&
    Zt() &&
    !(it < 48 || it > 102 || (it > 57 && it < 65) || (it > 70 && it < 97));

  );
  return vs(e, pa() + (t < 6 && Rr() == 32 && Zt() == 32));
}
function gu(e) {
  for (; Zt(); )
    switch (it) {
      case e:
        return zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gu(it);
        break;
      case 40:
        e === 41 && gu(e);
        break;
      case 92:
        Zt();
        break;
    }
  return zt;
}
function cP(e, t) {
  for (; Zt() && e + it !== 57; ) if (e + it === 84 && Rr() === 47) break;
  return '/*' + vs(t, zt - 1) + '*' + bl(e === 47 ? e : Zt());
}
function uP(e) {
  for (; !Zi(Rr()); ) Zt();
  return vs(e, zt);
}
function dP(e) {
  return ny(ma('', null, null, null, [''], (e = ry(e)), 0, [0], e));
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
    switch (((p = b), (b = Zt()))) {
      case 40:
        if (p != 108 && xt(C, f - 1) == 58) {
          mu((C += Pe(ha(b), '&', '&\f')), '&\f') != -1 && (x = -1);
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
        C += aP(p);
        break;
      case 92:
        C += lP(pa() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            Ks(fP(cP(Zt(), pa()), t, r), l);
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
                Ks(
                  m > 32
                    ? eh(C + ';', n, r, f - 1)
                    : eh(Pe(C, ' ', '') + ';', n, r, f - 2),
                  l
                );
            break;
          case 59:
            C += ';';
          default:
            if (
              (Ks((S = Jp(C, t, r, c, u, o, a, g, (y = []), (E = []), f)), i),
              b === 123)
            )
              if (u === 0) ma(C, t, S, S, y, i, f, a, E);
              else
                switch (d === 99 && xt(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ma(
                      e,
                      S,
                      S,
                      n && Ks(Jp(e, S, S, 0, 0, o, a, g, o, (y = []), f), E),
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
          else if (b == 125 && h++ == 0 && sP() == 125) continue;
        }
        switch (((C += bl(b)), b * h)) {
          case 38:
            x = u > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (a[c++] = (Er(C) - 1) * x), (x = 1);
            break;
          case 64:
            Rr() === 45 && (C += ha(Zt())),
              (d = Rr()),
              (u = f = Er((g = C += uP(pa())))),
              b++;
            break;
          case 45:
            p === 45 && Er(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Jp(e, t, r, n, o, i, s, a, l, c, u) {
  for (
    var f = o - 1, d = o === 0 ? i : [''], m = Cd(d), p = 0, h = 0, v = 0;
    p < n;
    ++p
  )
    for (var x = 0, b = Qi(e, f + 1, (f = eP((h = s[p])))), g = e; x < m; ++x)
      (g = ey(h > 0 ? d[x] + ' ' + b : Pe(b, /&\f/g, d[x]))) && (l[v++] = g);
  return wl(e, t, r, o === 0 ? Sd : a, l, c, u);
}
function fP(e, t, r) {
  return wl(e, t, r, Zv, bl(iP()), Qi(e, 2, -2), 0);
}
function eh(e, t, r, n) {
  return wl(e, t, r, Ed, Qi(e, 0, n), Qi(e, n + 1, -1), n);
}
function To(e, t) {
  for (var r = '', n = Cd(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function pP(e, t, r, n) {
  switch (e.type) {
    case JC:
      if (e.children.length) break;
    case ZC:
    case Ed:
      return (e.return = e.return || e.value);
    case Zv:
      return '';
    case Jv:
      return (e.return = e.value + '{' + To(e.children, n) + '}');
    case Sd:
      e.value = e.props.join(',');
  }
  return Er((r = To(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function hP(e) {
  var t = Cd(e);
  return function (r, n, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, o, i) || '';
    return s;
  };
}
function mP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var gP = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Rr()), o === 38 && i === 12 && (r[n] = 1), !Zi(i);

    )
      Zt();
    return vs(t, zt);
  },
  vP = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Zi(o)) {
        case 0:
          o === 38 && Rr() === 12 && (r[n] = 1), (t[n] += gP(zt - 1, r, n));
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
          t[n] += bl(o);
      }
    while ((o = Zt()));
    return t;
  },
  yP = function (t, r) {
    return ny(vP(ry(t), r));
  },
  th = new WeakMap(),
  bP = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !th.get(n)) &&
        !o
      ) {
        th.set(t, !0);
        for (
          var i = [], s = yP(r, i), a = n.props, l = 0, c = 0;
          l < s.length;
          l++
        )
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + ' ' + s[l];
      }
    }
  },
  xP = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function oy(e, t) {
  switch (rP(e, t)) {
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
      return Ce + e + Va + e + Tt + e + e;
    case 6828:
    case 4268:
      return Ce + e + Tt + e + e;
    case 6165:
      return Ce + e + Tt + 'flex-' + e + e;
    case 5187:
      return (
        Ce + e + Pe(e, /(\w+).+(:[^]+)/, Ce + 'box-$1$2' + Tt + 'flex-$1$2') + e
      );
    case 5443:
      return Ce + e + Tt + 'flex-item-' + Pe(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Ce +
        e +
        Tt +
        'flex-line-pack' +
        Pe(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Ce + e + Tt + Pe(e, 'shrink', 'negative') + e;
    case 5292:
      return Ce + e + Tt + Pe(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Ce +
        'box-' +
        Pe(e, '-grow', '') +
        Ce +
        e +
        Tt +
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
          Pe(e, /(.+:)(flex-)?(.*)/, Ce + 'box-pack:$3' + Tt + 'flex-pack:$3'),
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
        switch (xt(e, t + 1)) {
          case 109:
            if (xt(e, t + 4) !== 45) break;
          case 102:
            return (
              Pe(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Ce +
                  '$2-$3$1' +
                  Va +
                  (xt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~mu(e, 'stretch')
              ? oy(Pe(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (xt(e, t + 1) !== 115) break;
    case 6444:
      switch (xt(e, Er(e) - 3 - (~mu(e, '!important') && 10))) {
        case 107:
          return Pe(e, ':', ':' + Ce) + e;
        case 101:
          return (
            Pe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Ce +
                (xt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Ce +
                '$2$3$1' +
                Tt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (xt(e, t + 11)) {
        case 114:
          return Ce + e + Tt + Pe(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Ce + e + Tt + Pe(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Ce + e + Tt + Pe(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Ce + e + Tt + e + e;
  }
  return e;
}
var wP = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ed:
          t.return = oy(t.value, t.length);
          break;
        case Jv:
          return To([ci(t, { value: Pe(t.value, '@', '@' + Ce) })], o);
        case Sd:
          if (t.length)
            return oP(t.props, function (i) {
              switch (nP(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return To(
                    [ci(t, { props: [Pe(i, /:(read-\w+)/, ':' + Va + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return To(
                    [
                      ci(t, {
                        props: [Pe(i, /:(plac\w+)/, ':' + Ce + 'input-$1')]
                      }),
                      ci(t, { props: [Pe(i, /:(plac\w+)/, ':' + Va + '$1')] }),
                      ci(t, { props: [Pe(i, /:(plac\w+)/, Tt + 'input-$1')] })
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  SP = [wP],
  iy = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (h) {
        var v = h.getAttribute('data-emotion');
        v.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || SP,
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
      c = [bP, xP];
    {
      var u,
        f = [
          pP,
          mP(function (h) {
            u.insert(h);
          })
        ],
        d = hP(c.concat(o, f)),
        m = function (v) {
          return To(dP(v), d);
        };
      l = function (v, x, b, g) {
        (u = b),
          m(v ? v + '{' + x.styles + '}' : x.styles),
          g && (p.inserted[x.name] = !0);
      };
    }
    var p = {
      key: r,
      sheet: new QC({
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
  sy = { exports: {} },
  Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ut = typeof Symbol == 'function' && Symbol.for,
  Pd = ut ? Symbol.for('react.element') : 60103,
  Td = ut ? Symbol.for('react.portal') : 60106,
  Sl = ut ? Symbol.for('react.fragment') : 60107,
  El = ut ? Symbol.for('react.strict_mode') : 60108,
  Cl = ut ? Symbol.for('react.profiler') : 60114,
  Pl = ut ? Symbol.for('react.provider') : 60109,
  Tl = ut ? Symbol.for('react.context') : 60110,
  Rd = ut ? Symbol.for('react.async_mode') : 60111,
  Rl = ut ? Symbol.for('react.concurrent_mode') : 60111,
  kl = ut ? Symbol.for('react.forward_ref') : 60112,
  Ml = ut ? Symbol.for('react.suspense') : 60113,
  EP = ut ? Symbol.for('react.suspense_list') : 60120,
  Ol = ut ? Symbol.for('react.memo') : 60115,
  Al = ut ? Symbol.for('react.lazy') : 60116,
  CP = ut ? Symbol.for('react.block') : 60121,
  PP = ut ? Symbol.for('react.fundamental') : 60117,
  TP = ut ? Symbol.for('react.responder') : 60118,
  RP = ut ? Symbol.for('react.scope') : 60119;
function rr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Pd:
        switch (((e = e.type), e)) {
          case Rd:
          case Rl:
          case Sl:
          case Cl:
          case El:
          case Ml:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tl:
              case kl:
              case Al:
              case Ol:
              case Pl:
                return e;
              default:
                return t;
            }
        }
      case Td:
        return t;
    }
  }
}
function ay(e) {
  return rr(e) === Rl;
}
Me.AsyncMode = Rd;
Me.ConcurrentMode = Rl;
Me.ContextConsumer = Tl;
Me.ContextProvider = Pl;
Me.Element = Pd;
Me.ForwardRef = kl;
Me.Fragment = Sl;
Me.Lazy = Al;
Me.Memo = Ol;
Me.Portal = Td;
Me.Profiler = Cl;
Me.StrictMode = El;
Me.Suspense = Ml;
Me.isAsyncMode = function (e) {
  return ay(e) || rr(e) === Rd;
};
Me.isConcurrentMode = ay;
Me.isContextConsumer = function (e) {
  return rr(e) === Tl;
};
Me.isContextProvider = function (e) {
  return rr(e) === Pl;
};
Me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Pd;
};
Me.isForwardRef = function (e) {
  return rr(e) === kl;
};
Me.isFragment = function (e) {
  return rr(e) === Sl;
};
Me.isLazy = function (e) {
  return rr(e) === Al;
};
Me.isMemo = function (e) {
  return rr(e) === Ol;
};
Me.isPortal = function (e) {
  return rr(e) === Td;
};
Me.isProfiler = function (e) {
  return rr(e) === Cl;
};
Me.isStrictMode = function (e) {
  return rr(e) === El;
};
Me.isSuspense = function (e) {
  return rr(e) === Ml;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Sl ||
    e === Rl ||
    e === Cl ||
    e === El ||
    e === Ml ||
    e === EP ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Al ||
        e.$$typeof === Ol ||
        e.$$typeof === Pl ||
        e.$$typeof === Tl ||
        e.$$typeof === kl ||
        e.$$typeof === PP ||
        e.$$typeof === TP ||
        e.$$typeof === RP ||
        e.$$typeof === CP))
  );
};
Me.typeOf = rr;
sy.exports = Me;
var kP = sy.exports,
  ly = kP,
  MP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  OP = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  cy = {};
cy[ly.ForwardRef] = MP;
cy[ly.Memo] = OP;
var AP = !0;
function _P(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ');
    }),
    n
  );
}
var uy = function (t, r, n) {
    var o = t.key + '-' + r.name;
    (n === !1 || AP === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  dy = function (t, r, n) {
    uy(t, r, n);
    var o = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function DP(e) {
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
var IP = {
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
  LP = /[A-Z]|^ms/g,
  $P = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  rh = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Rc = Qv(function (e) {
    return fy(e) ? e : e.replace(LP, '-$&').toLowerCase();
  }),
  nh = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace($P, function (n, o, i) {
            return (Cr = { name: o, styles: i, next: Cr }), o;
          });
    }
    return IP[t] !== 1 && !fy(t) && typeof r == 'number' && r !== 0
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
      return jP(e, t, r);
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
function jP(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Ji(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != 'object')
        t != null && t[s] !== void 0
          ? (n += i + '{' + t[s] + '}')
          : rh(s) && (n += Rc(i) + ':' + nh(i, s) + ';');
      else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          rh(s[a]) && (n += Rc(i) + ':' + nh(i, s[a]) + ';');
      else {
        var l = Ji(e, t, s);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += Rc(i) + ':' + l + ';';
            break;
          }
          default:
            n += i + '{' + l + '}';
        }
      }
    }
  return n;
}
var oh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Cr,
  kd = function (t, r, n) {
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
    oh.lastIndex = 0;
    for (var l = '', c; (c = oh.exec(i)) !== null; ) l += '-' + c[1];
    var u = DP(i) + l;
    return { name: u, styles: i, next: Cr };
  },
  BP = function (t) {
    return t();
  },
  py = Oo.useInsertionEffect ? Oo.useInsertionEffect : !1,
  NP = py || BP,
  ih = py || w.useLayoutEffect,
  hy = w.createContext(typeof HTMLElement < 'u' ? iy({ key: 'css' }) : null),
  FP = hy.Provider,
  my = function (t) {
    return w.forwardRef(function (r, n) {
      var o = w.useContext(hy);
      return t(r, o, n);
    });
  },
  ys = w.createContext({}),
  kc = { exports: {} },
  sh;
function gy() {
  return (
    sh ||
      ((sh = 1),
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
      })(kc)),
    kc.exports
  );
}
gy();
var VP = my(function (e, t) {
  var r = e.styles,
    n = kd([r], void 0, w.useContext(ys)),
    o = w.useRef();
  return (
    ih(
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
    ih(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((n.next !== void 0 && dy(t, n.next, !0), s.tags.length)) {
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
  return kd(t);
}
var Gn = function () {
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
  WP = KC,
  zP = function (t) {
    return t !== 'theme';
  },
  ah = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? WP : zP;
  },
  lh = function (t, r, n) {
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
  UP = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      uy(r, n, o),
      NP(function () {
        return dy(r, n, o);
      }),
      null
    );
  },
  HP = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = lh(t, r, n),
      l = a || ah(o),
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
      var p = my(function (h, v, x) {
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
          ? (g = _P(v.registered, y, h.className))
          : h.className != null && (g = h.className + ' ');
        var C = kd(f.concat(y), v.registered, E);
        (g += v.key + '-' + C.name), s !== void 0 && (g += ' ' + s);
        var T = c && a === void 0 ? ah(b) : l,
          R = {};
        for (var k in h) (c && k === 'as') || (T(k) && (R[k] = h[k]));
        return (
          (R.className = g),
          (R.ref = x),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(UP, {
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
          return e(h, M({}, r, v, { shouldForwardProp: lh(p, v, !0) })).apply(
            void 0,
            f
          );
        }),
        p
      );
    };
  },
  qP = [
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
  vu = HP.bind();
qP.forEach(function (e) {
  vu[e] = vu(e);
});
var vy = { exports: {} },
  GP = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  KP = GP,
  YP = KP;
function yy() {}
function by() {}
by.resetWarningCache = yy;
var XP = function () {
  function e(n, o, i, s, a, l) {
    if (l !== YP) {
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
    checkPropTypes: by,
    resetWarningCache: yy
  };
  return (r.PropTypes = r), r;
};
vy.exports = XP();
var xy = vy.exports;
const W = Yg(xy);
let yu;
typeof document == 'object' && (yu = iy({ key: 'css', prepend: !0 }));
function wy(e) {
  const { injectFirst: t, children: r } = e;
  return t && yu ? P.jsx(FP, { value: yu, children: r }) : r;
}
function QP(e) {
  return e == null || Object.keys(e).length === 0;
}
function Sy(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    n = typeof t == 'function' ? (o) => t(QP(o) ? r : o) : t;
  return P.jsx(VP, { styles: n });
}
function Md(e, t) {
  return vu(e, t);
}
const Ey = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  ZP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Sy,
        StyledEngineProvider: wy,
        ThemeContext: ys,
        css: bs,
        default: Md,
        internal_processStyles: Ey,
        keyframes: Gn
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
function Cy(e) {
  if (!Br(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Cy(e[r]);
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
            ? (n[o] = Br(t[o]) ? Cy(t[o]) : t[o])
            : (n[o] = t[o]);
      }),
    n
  );
}
const JP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dr, isPlainObject: Br },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  eT = ['values', 'unit', 'step'],
  tT = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return (
      t.sort((r, n) => r.val - n.val),
      t.reduce((r, n) => M({}, r, { [n.key]: n.val }), {})
    );
  };
function Py(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = 'px',
      step: n = 5
    } = e,
    o = Z(e, eT),
    i = tT(t),
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
const rT = { borderRadius: 4 };
function Oi(e, t) {
  return t ? dr(e, t, { clone: !1 }) : e;
}
const Od = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ch = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Od[e]}px)`
  };
function Ut(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ch;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = r(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = n.breakpoints || ch;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Od).indexOf(a) !== -1) {
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
function Ty(e = {}) {
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
function Ry(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function nT(e, ...t) {
  const r = Ty(e),
    n = [r, ...t].reduce((o, i) => dr(o, i), {});
  return Ry(Object.keys(r), n);
}
function oT(e, t) {
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
function jn({ values: e, breakpoints: t, base: r }) {
  const n = r || oT(e, t),
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
const iT = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Q }, Symbol.toStringTag, {
    value: 'Module'
  })
);
function _l(e, t, r = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (n != null) return n;
  }
  return t.split('.').reduce((n, o) => (n && n[o] != null ? n[o] : null), e);
}
function Wa(e, t, r, n = r) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(r))
      : Array.isArray(e)
        ? (o = e[r] || n)
        : (o = _l(e, r) || n),
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
        c = _l(l, n) || {};
      return Ut(s, a, (f) => {
        let d = Wa(c, o, f);
        return (
          f === d &&
            typeof f == 'string' &&
            (d = Wa(c, o, `${t}${f === 'default' ? '' : Q(f)}`, f)),
          r === !1 ? d : { [r]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function sT(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const aT = { m: 'margin', p: 'padding' },
  lT = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  uh = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  cT = sT((e) => {
    if (e.length > 2)
      if (uh[e]) e = uh[e];
      else return [e];
    const [t, r] = e.split(''),
      n = aT[t],
      o = lT[r] || '';
    return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
  }),
  Ad = [
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
  _d = [
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
[...Ad, ..._d];
function xs(e, t, r, n) {
  var o;
  const i = (o = _l(e, t, !1)) != null ? o : r;
  return typeof i == 'number'
    ? (s) => (typeof s == 'string' ? s : i * s)
    : Array.isArray(i)
      ? (s) => (typeof s == 'string' ? s : i[s])
      : typeof i == 'function'
        ? i
        : () => {};
}
function Dd(e) {
  return xs(e, 'spacing', 8);
}
function Hn(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const r = Math.abs(t),
    n = e(r);
  return t >= 0 ? n : typeof n == 'number' ? -n : `-${n}`;
}
function uT(e, t) {
  return (r) => e.reduce((n, o) => ((n[o] = Hn(t, r)), n), {});
}
function dT(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const o = cT(r),
    i = uT(o, n),
    s = e[r];
  return Ut(e, s, i);
}
function ky(e, t) {
  const r = Dd(e.theme);
  return Object.keys(e)
    .map((n) => dT(e, t, n, r))
    .reduce(Oi, {});
}
function Ye(e) {
  return ky(e, Ad);
}
Ye.propTypes = {};
Ye.filterProps = Ad;
function Xe(e) {
  return ky(e, _d);
}
Xe.propTypes = {};
Xe.filterProps = _d;
function fT(e = 8) {
  if (e.mui) return e;
  const t = Dd({ spacing: e }),
    r = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((i) => {
          const s = t(i);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (r.mui = !0), r;
}
function Dl(...e) {
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
const pT = gr('border', ur),
  hT = gr('borderTop', ur),
  mT = gr('borderRight', ur),
  gT = gr('borderBottom', ur),
  vT = gr('borderLeft', ur),
  yT = gr('borderColor'),
  bT = gr('borderTopColor'),
  xT = gr('borderRightColor'),
  wT = gr('borderBottomColor'),
  ST = gr('borderLeftColor'),
  ET = gr('outline', ur),
  CT = gr('outlineColor'),
  Il = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xs(e.theme, 'shape.borderRadius', 4),
        r = (n) => ({ borderRadius: Hn(t, n) });
      return Ut(e, e.borderRadius, r);
    }
    return null;
  };
Il.propTypes = {};
Il.filterProps = ['borderRadius'];
Dl(pT, hT, mT, gT, vT, yT, bT, xT, wT, ST, Il, ET, CT);
const Ll = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ gap: Hn(t, n) });
    return Ut(e, e.gap, r);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ['gap'];
const $l = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ columnGap: Hn(t, n) });
    return Ut(e, e.columnGap, r);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ['columnGap'];
const jl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = xs(e.theme, 'spacing', 8),
      r = (n) => ({ rowGap: Hn(t, n) });
    return Ut(e, e.rowGap, r);
  }
  return null;
};
jl.propTypes = {};
jl.filterProps = ['rowGap'];
const PT = Je({ prop: 'gridColumn' }),
  TT = Je({ prop: 'gridRow' }),
  RT = Je({ prop: 'gridAutoFlow' }),
  kT = Je({ prop: 'gridAutoColumns' }),
  MT = Je({ prop: 'gridAutoRows' }),
  OT = Je({ prop: 'gridTemplateColumns' }),
  AT = Je({ prop: 'gridTemplateRows' }),
  _T = Je({ prop: 'gridTemplateAreas' }),
  DT = Je({ prop: 'gridArea' });
Dl(Ll, $l, jl, PT, TT, RT, kT, MT, OT, AT, _T, DT);
function Ro(e, t) {
  return t === 'grey' ? t : e;
}
const IT = Je({ prop: 'color', themeKey: 'palette', transform: Ro }),
  LT = Je({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Ro
  }),
  $T = Je({ prop: 'backgroundColor', themeKey: 'palette', transform: Ro });
Dl(IT, LT, $T);
function Xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jT = Je({ prop: 'width', transform: Xt }),
  Id = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, o;
        const i =
          ((n = e.theme) == null ||
          (n = n.breakpoints) == null ||
          (n = n.values) == null
            ? void 0
            : n[r]) || Od[r];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Xt(r) };
      };
      return Ut(e, e.maxWidth, t);
    }
    return null;
  };
Id.filterProps = ['maxWidth'];
const BT = Je({ prop: 'minWidth', transform: Xt }),
  NT = Je({ prop: 'height', transform: Xt }),
  FT = Je({ prop: 'maxHeight', transform: Xt }),
  VT = Je({ prop: 'minHeight', transform: Xt });
Je({ prop: 'size', cssProperty: 'width', transform: Xt });
Je({ prop: 'size', cssProperty: 'height', transform: Xt });
const WT = Je({ prop: 'boxSizing' });
Dl(jT, Id, BT, NT, FT, VT, WT);
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
  borderRadius: { themeKey: 'shape.borderRadius', style: Il },
  color: { themeKey: 'palette', transform: Ro },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: Ro
  },
  backgroundColor: { themeKey: 'palette', transform: Ro },
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
  m: { style: Ye },
  mt: { style: Ye },
  mr: { style: Ye },
  mb: { style: Ye },
  ml: { style: Ye },
  mx: { style: Ye },
  my: { style: Ye },
  margin: { style: Ye },
  marginTop: { style: Ye },
  marginRight: { style: Ye },
  marginBottom: { style: Ye },
  marginLeft: { style: Ye },
  marginX: { style: Ye },
  marginY: { style: Ye },
  marginInline: { style: Ye },
  marginInlineStart: { style: Ye },
  marginInlineEnd: { style: Ye },
  marginBlock: { style: Ye },
  marginBlockStart: { style: Ye },
  marginBlockEnd: { style: Ye },
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
  gap: { style: Ll },
  rowGap: { style: jl },
  columnGap: { style: $l },
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
  width: { transform: Xt },
  maxWidth: { style: Id },
  minWidth: { transform: Xt },
  height: { transform: Xt },
  maxHeight: { transform: Xt },
  minHeight: { transform: Xt },
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
function zT(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function UT(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function My() {
  function e(r, n, o, i) {
    const s = { [r]: n, theme: o },
      a = i[r];
    if (!a) return { [r]: n };
    const { cssProperty: l = r, themeKey: c, transform: u, style: f } = a;
    if (n == null) return null;
    if (c === 'typography' && n === 'inherit') return { [r]: n };
    const d = _l(o, c) || {};
    return f
      ? f(s)
      : Ut(s, n, (p) => {
          let h = Wa(d, u, p);
          return (
            p === h &&
              typeof p == 'string' &&
              (h = Wa(d, u, `${r}${p === 'default' ? '' : Q(p)}`, p)),
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
      const u = Ty(i.breakpoints),
        f = Object.keys(u);
      let d = u;
      return (
        Object.keys(c).forEach((m) => {
          const p = UT(c[m], i);
          if (p != null)
            if (typeof p == 'object')
              if (s[m]) d = Oi(d, e(m, p, i, s));
              else {
                const h = Ut({ theme: i }, p, (v) => ({ [m]: v }));
                zT(h, p) ? (d[m] = t({ sx: p, theme: i })) : (d = Oi(d, h));
              }
            else d = Oi(d, e(m, p, i, s));
        }),
        Ry(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Ko = My();
Ko.filterProps = ['sx'];
function Oy(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == 'function'
    ? {
        [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t
      }
    : r.palette.mode === e
      ? t
      : {};
}
const HT = ['breakpoints', 'palette', 'spacing', 'shape'];
function Ss(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {} } = e,
    s = Z(e, HT),
    a = Py(r),
    l = fT(o);
  let c = dr(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: M({ mode: 'light' }, n),
      spacing: l,
      shape: M({}, rT, i)
    },
    s
  );
  return (
    (c.applyStyles = Oy),
    (c = t.reduce((u, f) => dr(u, f), c)),
    (c.unstable_sxConfig = M({}, ws, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Ko({ sx: f, theme: this });
    }),
    c
  );
}
const qT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ss,
      private_createBreakpoints: Py,
      unstable_applyStyles: Oy
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function GT(e) {
  return Object.keys(e).length === 0;
}
function Ld(e = null) {
  const t = w.useContext(ys);
  return !t || GT(t) ? e : t;
}
const KT = Ss();
function Bl(e = KT) {
  return Ld(e);
}
function YT({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const n = Bl(r),
    o = typeof e == 'function' ? e((t && n[t]) || n) : e;
  return P.jsx(Sy, { styles: o });
}
const XT = ['sx'],
  QT = (e) => {
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
    r = Z(e, XT),
    { systemProps: n, otherProps: o } = QT(r);
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
const ZT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ko,
        extendSxProp: Es,
        unstable_createStyleFunctionSx: My,
        unstable_defaultSxConfig: ws
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  dh = (e) => e,
  JT = () => {
    let e = dh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = dh;
      }
    };
  },
  $d = JT();
function Ay(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Ay(e[t])) && (n && (n += ' '), (n += r));
    } else for (r in e) e[r] && (n && (n += ' '), (n += r));
  return n;
}
function ue() {
  for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Ay(e)) && (n && (n += ' '), (n += t));
  return n;
}
const eR = ['className', 'component'];
function tR(e = {}) {
  const {
      themeId: t,
      defaultTheme: r,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: o
    } = e,
    i = Md('div', {
      shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as'
    })(Ko);
  return w.forwardRef(function (l, c) {
    const u = Bl(r),
      f = Es(l),
      { className: d, component: m = 'div' } = f,
      p = Z(f, eR);
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
const _y = {
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
  const n = _y[t];
  return n ? `${r}-${n}` : `${$d.generate(e)}-${t}`;
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
var Dy = { exports: {} },
  Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = Symbol.for('react.element'),
  Bd = Symbol.for('react.portal'),
  Nl = Symbol.for('react.fragment'),
  Fl = Symbol.for('react.strict_mode'),
  Vl = Symbol.for('react.profiler'),
  Wl = Symbol.for('react.provider'),
  zl = Symbol.for('react.context'),
  rR = Symbol.for('react.server_context'),
  Ul = Symbol.for('react.forward_ref'),
  Hl = Symbol.for('react.suspense'),
  ql = Symbol.for('react.suspense_list'),
  Gl = Symbol.for('react.memo'),
  Kl = Symbol.for('react.lazy'),
  nR = Symbol.for('react.offscreen'),
  Iy;
Iy = Symbol.for('react.module.reference');
function vr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case jd:
        switch (((e = e.type), e)) {
          case Nl:
          case Vl:
          case Fl:
          case Hl:
          case ql:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case rR:
              case zl:
              case Ul:
              case Kl:
              case Gl:
              case Wl:
                return e;
              default:
                return t;
            }
        }
      case Bd:
        return t;
    }
  }
}
Oe.ContextConsumer = zl;
Oe.ContextProvider = Wl;
Oe.Element = jd;
Oe.ForwardRef = Ul;
Oe.Fragment = Nl;
Oe.Lazy = Kl;
Oe.Memo = Gl;
Oe.Portal = Bd;
Oe.Profiler = Vl;
Oe.StrictMode = Fl;
Oe.Suspense = Hl;
Oe.SuspenseList = ql;
Oe.isAsyncMode = function () {
  return !1;
};
Oe.isConcurrentMode = function () {
  return !1;
};
Oe.isContextConsumer = function (e) {
  return vr(e) === zl;
};
Oe.isContextProvider = function (e) {
  return vr(e) === Wl;
};
Oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === jd;
};
Oe.isForwardRef = function (e) {
  return vr(e) === Ul;
};
Oe.isFragment = function (e) {
  return vr(e) === Nl;
};
Oe.isLazy = function (e) {
  return vr(e) === Kl;
};
Oe.isMemo = function (e) {
  return vr(e) === Gl;
};
Oe.isPortal = function (e) {
  return vr(e) === Bd;
};
Oe.isProfiler = function (e) {
  return vr(e) === Vl;
};
Oe.isStrictMode = function (e) {
  return vr(e) === Fl;
};
Oe.isSuspense = function (e) {
  return vr(e) === Hl;
};
Oe.isSuspenseList = function (e) {
  return vr(e) === ql;
};
Oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Nl ||
    e === Vl ||
    e === Fl ||
    e === Hl ||
    e === ql ||
    e === nR ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Kl ||
        e.$$typeof === Gl ||
        e.$$typeof === Wl ||
        e.$$typeof === zl ||
        e.$$typeof === Ul ||
        e.$$typeof === Iy ||
        e.getModuleId !== void 0))
  );
};
Oe.typeOf = vr;
Dy.exports = Oe;
var fh = Dy.exports;
const oR = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ly(e) {
  const t = `${e}`.match(oR);
  return (t && t[1]) || '';
}
function $y(e, t = '') {
  return e.displayName || e.name || Ly(e) || t;
}
function ph(e, t, r) {
  const n = $y(t);
  return e.displayName || (n !== '' ? `${r}(${n})` : r);
}
function iR(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return $y(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case fh.ForwardRef:
          return ph(e, e.render, 'ForwardRef');
        case fh.Memo:
          return ph(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const sR = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iR, getFunctionName: Ly },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  aR = ['ownerState'],
  lR = ['variants'],
  cR = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function uR(e) {
  return Object.keys(e).length === 0;
}
function dR(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Mc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const fR = Ss(),
  pR = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ys({ defaultTheme: e, theme: t, themeId: r }) {
  return uR(t) ? e : t[r] || t;
}
function hR(e) {
  return e ? (t, r) => r[e] : null;
}
function ga(e, t) {
  let { ownerState: r } = t,
    n = Z(t, aR);
  const o = typeof e == 'function' ? e(M({ ownerState: r }, n)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => ga(i, M({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = Z(o, lR);
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
function mR(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = fR,
      rootShouldForwardProp: n = Mc,
      slotShouldForwardProp: o = Mc
    } = e,
    i = (s) =>
      Ko(M({}, s, { theme: Ys(M({}, s, { defaultTheme: r, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      Ey(s, (E) => E.filter((S) => !(S != null && S.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = hR(pR(c))
        } = a,
        m = Z(a, cR),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = Mc;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : dR(s) && (x = void 0);
      const b = Md(s, M({ shouldForwardProp: x, label: v }, m)),
        g = (E) =>
          (typeof E == 'function' && E.__emotion_real !== E) || Br(E)
            ? (S) =>
                ga(
                  E,
                  M({}, S, {
                    theme: Ys({ theme: S.theme, defaultTheme: r, themeId: t })
                  })
                )
            : E,
        y = (E, ...S) => {
          let C = g(E);
          const T = S ? S.map(g) : [];
          l &&
            d &&
            T.push((A) => {
              const I = Ys(M({}, A, { defaultTheme: r, themeId: t }));
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
                const L = Ys(M({}, A, { defaultTheme: r, themeId: t })),
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
const gR = mR();
function za(e, t) {
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
                  r[n][s] = za(o[s], i[s]);
                }));
      } else r[n] === void 0 && (r[n] = e[n]);
    }),
    r
  );
}
function jy(e) {
  const { theme: t, name: r, props: n } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? n
    : za(t.components[r].defaultProps, n);
}
function vR({ props: e, name: t, defaultTheme: r, themeId: n }) {
  let o = Bl(r);
  return n && (o = o[n] || o), jy({ theme: o, name: t, props: e });
}
const ln = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function yR(e, t, r, n, o) {
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
const By = w.useSyncExternalStore;
function bR(e, t, r, n, o) {
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
  return By(l, a, s);
}
function es(e, t = {}) {
  const r = Ld(),
    n = typeof window < 'u' && typeof window.matchMedia < 'u',
    {
      defaultMatches: o = !1,
      matchMedia: i = n ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1
    } = jy({ name: 'MuiUseMediaQuery', props: t, theme: r });
  let l = typeof e == 'function' ? e(r) : e;
  return (
    (l = l.replace(/^@media( ?)/m, '')),
    (By !== void 0 ? bR : yR)(l, o, i, s, a)
  );
}
function xR(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const wR = Object.freeze(
  Object.defineProperty({ __proto__: null, default: xR }, Symbol.toStringTag, {
    value: 'Module'
  })
);
function bu(...e) {
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
function Ny(e, t = 166) {
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
function SR(e, t) {
  return () => null;
}
function ER(e, t) {
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
function Nt(e) {
  return (e && e.ownerDocument) || document;
}
function Yo(e) {
  return Nt(e).defaultView || window;
}
function CR(e, t) {
  return () => null;
}
function Ua(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
let hh = 0;
function PR(e) {
  const [t, r] = w.useState(e),
    n = e || t;
  return (
    w.useEffect(() => {
      t == null && ((hh += 1), r(`mui-${hh}`));
    }, [t]),
    n
  );
}
const mh = Oo.useId;
function TR(e) {
  if (mh !== void 0) {
    const t = mh();
    return e ?? t;
  }
  return PR(e);
}
function RR(e, t, r, n, o) {
  return null;
}
function kR({ controlled: e, default: t, name: r, state: n = 'value' }) {
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
              Ua(r, t);
            });
          },
    e
  );
}
const gh = {};
function MR(e, t) {
  const r = w.useRef(gh);
  return r.current === gh && (r.current = e(t)), r;
}
const OR = [];
function AR(e) {
  w.useEffect(e, OR);
}
class Yl {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Yl();
  }
  start(t, r) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), r();
      }, t));
  }
}
function Nd() {
  const e = MR(Yl.create).current;
  return AR(e.disposeEffect), e;
}
let Xl = !0,
  xu = !1;
const _R = new Yl(),
  DR = {
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
function IR(e) {
  const { type: t, tagName: r } = e;
  return !!(
    (r === 'INPUT' && DR[t] && !e.readOnly) ||
    (r === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function LR(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Xl = !0);
}
function Oc() {
  Xl = !1;
}
function $R() {
  this.visibilityState === 'hidden' && xu && (Xl = !0);
}
function jR(e) {
  e.addEventListener('keydown', LR, !0),
    e.addEventListener('mousedown', Oc, !0),
    e.addEventListener('pointerdown', Oc, !0),
    e.addEventListener('touchstart', Oc, !0),
    e.addEventListener('visibilitychange', $R, !0);
}
function BR(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Xl || IR(t);
}
function Fy() {
  const e = w.useCallback((o) => {
      o != null && jR(o.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function r() {
    return t.current
      ? ((xu = !0),
        _R.start(100, () => {
          xu = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function n(o) {
    return BR(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: n, onBlur: r, ref: e };
}
function NR(e) {
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
const Vy = w.createContext(null);
function Wy() {
  return w.useContext(Vy);
}
const FR = typeof Symbol == 'function' && Symbol.for,
  VR = FR ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function WR(e, t) {
  return typeof t == 'function' ? t(e) : M({}, e, t);
}
function zR(e) {
  const { children: t, theme: r } = e,
    n = Wy(),
    o = w.useMemo(() => {
      const i = n === null ? r : WR(n, r);
      return i != null && (i[VR] = n !== null), i;
    }, [r, n]);
  return P.jsx(Vy.Provider, { value: o, children: t });
}
const UR = ['value'],
  zy = w.createContext();
function HR(e) {
  let { value: t } = e,
    r = Z(e, UR);
  return P.jsx(zy.Provider, M({ value: t ?? !0 }, r));
}
const Uy = () => {
    const e = w.useContext(zy);
    return e ?? !1;
  },
  Hy = w.createContext(void 0);
function qR({ value: e, children: t }) {
  return P.jsx(Hy.Provider, { value: e, children: t });
}
function GR(e) {
  const { theme: t, name: r, props: n } = e;
  if (!t || !t.components || !t.components[r]) return n;
  const o = t.components[r];
  return o.defaultProps
    ? za(o.defaultProps, n)
    : !o.styleOverrides && !o.variants
      ? za(o, n)
      : n;
}
function KR({ props: e, name: t }) {
  const r = w.useContext(Hy);
  return GR({ props: e, name: t, theme: { components: r } });
}
const vh = {};
function yh(e, t, r, n = !1) {
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
function YR(e) {
  const { children: t, theme: r, themeId: n } = e,
    o = Ld(vh),
    i = Wy() || vh,
    s = yh(n, o, r),
    a = yh(n, i, r, !0),
    l = s.direction === 'rtl';
  return P.jsx(zR, {
    theme: a,
    children: P.jsx(ys.Provider, {
      value: s,
      children: P.jsx(HR, {
        value: l,
        children: P.jsx(qR, {
          value: s == null ? void 0 : s.components,
          children: t
        })
      })
    })
  });
}
const XR = [
    'component',
    'direction',
    'spacing',
    'divider',
    'children',
    'className',
    'useFlexGap'
  ],
  QR = Ss(),
  ZR = gR('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  });
function JR(e) {
  return vR({ props: e, name: 'MuiStack', defaultTheme: QR });
}
function ek(e, t) {
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
const tk = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom'
    })[e],
  rk = ({ ownerState: e, theme: t }) => {
    let r = M(
      { display: 'flex', flexDirection: 'column' },
      Ut(
        { theme: t },
        jn({ values: e.direction, breakpoints: t.breakpoints.values }),
        (n) => ({ flexDirection: n })
      )
    );
    if (e.spacing) {
      const n = Dd(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == 'object' && e.spacing[c] != null) ||
              (typeof e.direction == 'object' && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        i = jn({ values: e.direction, base: o }),
        s = jn({ values: e.spacing, base: o });
      typeof i == 'object' &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const d = c > 0 ? i[u[c - 1]] : 'column';
            i[l] = d;
          }
        }),
        (r = dr(
          r,
          Ut({ theme: t }, s, (l, c) =>
            e.useFlexGap
              ? { gap: Hn(n, l) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    [`margin${tk(c ? i[c] : e.direction)}`]: Hn(n, l)
                  }
                }
          )
        ));
    }
    return (r = nT(t.breakpoints, r)), r;
  };
function nk(e = {}) {
  const {
      createStyledComponent: t = ZR,
      useThemeProps: r = JR,
      componentName: n = 'MuiStack'
    } = e,
    o = () => ze({ root: ['root'] }, (l) => Ve(n, l), {}),
    i = t(rk);
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
      g = Z(f, XR),
      y = { direction: m, spacing: p, useFlexGap: b },
      E = o();
    return P.jsx(
      i,
      M({ as: d, ownerState: y, ref: c, className: ue(E.root, x) }, g, {
        children: h ? ek(v, h) : v
      })
    );
  });
}
function ok(e, t) {
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
  qy = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(qy);
var Kn = qy.exports;
const ik = Dr(qC),
  sk = Dr(wR);
var Gy = Kn;
Object.defineProperty(et, '__esModule', { value: !0 });
var bt = (et.alpha = Jy);
et.blend = vk;
et.colorChannel = void 0;
var Ky = (et.darken = Vd);
et.decomposeColor = pr;
var bh = (et.emphasize = eb),
  ak = (et.getContrastRatio = fk);
et.getLuminance = Ha;
et.hexToRgb = Xy;
et.hslToRgb = Zy;
var Yy = (et.lighten = Wd);
et.private_safeAlpha = pk;
et.private_safeColorChannel = void 0;
et.private_safeDarken = hk;
et.private_safeEmphasize = gk;
et.private_safeLighten = mk;
et.recomposeColor = Xo;
et.rgbToHex = dk;
var xh = Gy(ik),
  lk = Gy(sk);
function Fd(e, t = 0, r = 1) {
  return (0, lk.default)(e, t, r);
}
function Xy(e) {
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
function ck(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function pr(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return pr(Xy(e));
  const t = e.indexOf('('),
    r = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(r) === -1)
    throw new Error((0, xh.default)(9, e));
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
      throw new Error((0, xh.default)(10, o));
  } else n = n.split(',');
  return (
    (n = n.map((i) => parseFloat(i))), { type: r, values: n, colorSpace: o }
  );
}
const Qy = (e) => {
  const t = pr(e);
  return t.values
    .slice(0, 3)
    .map((r, n) => (t.type.indexOf('hsl') !== -1 && n !== 0 ? `${r}%` : r))
    .join(' ');
};
et.colorChannel = Qy;
const uk = (e, t) => {
  try {
    return Qy(e);
  } catch {
    return e;
  }
};
et.private_safeColorChannel = uk;
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
function dk(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = pr(e);
  return `#${t.map((r, n) => ck(n === 3 ? Math.round(255 * r) : r)).join('')}`;
}
function Zy(e) {
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
function Ha(e) {
  e = pr(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? pr(Zy(e)).values : e.values;
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
function fk(e, t) {
  const r = Ha(e),
    n = Ha(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Jy(e, t) {
  return (
    (e = pr(e)),
    (t = Fd(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Xo(e)
  );
}
function pk(e, t, r) {
  try {
    return Jy(e, t);
  } catch {
    return e;
  }
}
function Vd(e, t) {
  if (((e = pr(e)), (t = Fd(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return Xo(e);
}
function hk(e, t, r) {
  try {
    return Vd(e, t);
  } catch {
    return e;
  }
}
function Wd(e, t) {
  if (((e = pr(e)), (t = Fd(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return Xo(e);
}
function mk(e, t, r) {
  try {
    return Wd(e, t);
  } catch {
    return e;
  }
}
function eb(e, t = 0.15) {
  return Ha(e) > 0.5 ? Vd(e, t) : Wd(e, t);
}
function gk(e, t, r) {
  try {
    return eb(e, t);
  } catch {
    return e;
  }
}
function vk(e, t, r, n = 1) {
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
  yk = {
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
  io = {
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
  so = {
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
  ao = {
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
  lo = {
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
  co = {
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
  bk = ['mode', 'contrastThreshold', 'tonalOffset'],
  wh = {
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
  Ac = {
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
function Sh(e, t, r, n) {
  const o = n.light || n,
    i = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === 'light'
        ? (e.light = Yy(e.main, o))
        : t === 'dark' && (e.dark = Ky(e.main, i)));
}
function xk(e = 'light') {
  return e === 'dark'
    ? { main: ao[200], light: ao[50], dark: ao[400] }
    : { main: ao[700], light: ao[400], dark: ao[800] };
}
function wk(e = 'light') {
  return e === 'dark'
    ? { main: io[200], light: io[50], dark: io[400] }
    : { main: io[500], light: io[300], dark: io[700] };
}
function Sk(e = 'light') {
  return e === 'dark'
    ? { main: so[500], light: so[300], dark: so[700] }
    : { main: so[700], light: so[400], dark: so[800] };
}
function Ek(e = 'light') {
  return e === 'dark'
    ? { main: lo[400], light: lo[300], dark: lo[700] }
    : { main: lo[700], light: lo[500], dark: lo[900] };
}
function Ck(e = 'light') {
  return e === 'dark'
    ? { main: co[400], light: co[300], dark: co[700] }
    : { main: co[800], light: co[500], dark: co[900] };
}
function Pk(e = 'light') {
  return e === 'dark'
    ? { main: ui[400], light: ui[300], dark: ui[700] }
    : { main: '#ed6c02', light: ui[500], dark: ui[900] };
}
function Tk(e) {
  const {
      mode: t = 'light',
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2
    } = e,
    o = Z(e, bk),
    i = e.primary || xk(t),
    s = e.secondary || wk(t),
    a = e.error || Sk(t),
    l = e.info || Ek(t),
    c = e.success || Ck(t),
    u = e.warning || Pk(t);
  function f(h) {
    return ak(h, Ac.text.primary) >= r ? Ac.text.primary : wh.text.primary;
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
        Sh(h, 'light', b, n),
        Sh(h, 'dark', g, n),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    m = { dark: Ac, light: wh };
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
        grey: yk,
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
const Rk = [
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
function kk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eh = { textTransform: 'uppercase' },
  Ch = '"Roboto", "Helvetica", "Arial", sans-serif';
function Mk(e, t) {
  const r = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: n = Ch,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: f
    } = r,
    d = Z(r, Rk),
    m = o / 14,
    p = f || ((x) => `${(x / c) * m}rem`),
    h = (x, b, g, y, E) =>
      M(
        { fontFamily: n, fontWeight: x, fontSize: p(b), lineHeight: g },
        n === Ch ? { letterSpacing: `${kk(y / b)}em` } : {},
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
      button: h(a, 14, 1.75, 0.4, Eh),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, Eh),
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
const Ok = 0.2,
  Ak = 0.14,
  _k = 0.12;
function Ue(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ok})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ak})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_k})`
  ].join(',');
}
const Dk = [
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
  Ik = ['duration', 'easing', 'delay'],
  Lk = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  tb = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
function Ph(e) {
  return `${Math.round(e)}ms`;
}
function $k(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function jk(e) {
  const t = M({}, Lk, e.easing),
    r = M({}, tb, e.duration);
  return M(
    {
      getAutoHeightDuration: $k,
      create: (o = ['all'], i = {}) => {
        const {
          duration: s = r.standard,
          easing: a = t.easeInOut,
          delay: l = 0
        } = i;
        return (
          Z(i, Ik),
          (Array.isArray(o) ? o : [o])
            .map(
              (c) =>
                `${c} ${typeof s == 'string' ? s : Ph(s)} ${a} ${typeof l == 'string' ? l : Ph(l)}`
            )
            .join(',')
        );
      }
    },
    e,
    { easing: t, duration: r }
  );
}
const Bk = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  Nk = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape'
  ];
function zd(e = {}, ...t) {
  const {
      mixins: r = {},
      palette: n = {},
      transitions: o = {},
      typography: i = {}
    } = e,
    s = Z(e, Nk);
  if (e.vars) throw new Error(Xi(18));
  const a = Tk(n),
    l = Ss(e);
  let c = dr(l, {
    mixins: ok(l.breakpoints, r),
    palette: a,
    shadows: Dk.slice(),
    typography: Mk(a, i),
    transitions: jk(o),
    zIndex: M({}, Bk)
  });
  return (
    (c = dr(c, s)),
    (c = t.reduce((u, f) => dr(u, f), c)),
    (c.unstable_sxConfig = M({}, ws, s == null ? void 0 : s.unstable_sxConfig)),
    (c.unstable_sx = function (f) {
      return Ko({ sx: f, theme: this });
    }),
    c
  );
}
const Ud = zd();
function dt() {
  const e = Bl(Ud);
  return e[Do] || e;
}
var Cs = {},
  _c = { exports: {} },
  Th;
function Fk() {
  return (
    Th ||
      ((Th = 1),
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
      })(_c)),
    _c.exports
  );
}
const rb = Dr(ZP),
  Vk = Dr(JP),
  Wk = Dr(iT),
  zk = Dr(sR),
  Uk = Dr(qT),
  Hk = Dr(ZT);
var Qo = Kn;
Object.defineProperty(Cs, '__esModule', { value: !0 });
var qk = (Cs.default = iM);
Cs.shouldForwardProp = va;
Cs.systemDefaultTheme = void 0;
var lr = Qo(gy()),
  wu = Qo(Fk()),
  Rh = Jk(rb),
  Gk = Vk;
Qo(Wk);
Qo(zk);
var Kk = Qo(Uk),
  Yk = Qo(Hk);
const Xk = ['ownerState'],
  Qk = ['variants'],
  Zk = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function nb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (nb = function (n) {
    return n ? r : t;
  })(e);
}
function Jk(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = nb(t);
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
function eM(e) {
  return Object.keys(e).length === 0;
}
function tM(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function va(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const rM = (Cs.systemDefaultTheme = (0, Kk.default)()),
  nM = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Xs({ defaultTheme: e, theme: t, themeId: r }) {
  return eM(t) ? e : t[r] || t;
}
function oM(e) {
  return e ? (t, r) => r[e] : null;
}
function ya(e, t) {
  let { ownerState: r } = t,
    n = (0, wu.default)(t, Xk);
  const o =
    typeof e == 'function' ? e((0, lr.default)({ ownerState: r }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => ya(i, (0, lr.default)({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, wu.default)(o, Qk);
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
function iM(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = rM,
      rootShouldForwardProp: n = va,
      slotShouldForwardProp: o = va
    } = e,
    i = (s) =>
      (0, Yk.default)(
        (0, lr.default)({}, s, {
          theme: Xs((0, lr.default)({}, s, { defaultTheme: r, themeId: t }))
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Rh.internal_processStyles)(s, (E) =>
        E.filter((S) => !(S != null && S.__mui_systemSx))
      );
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = oM(nM(c))
        } = a,
        m = (0, wu.default)(a, Zk),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = va;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : tM(s) && (x = void 0);
      const b = (0, Rh.default)(
          s,
          (0, lr.default)({ shouldForwardProp: x, label: v }, m)
        ),
        g = (E) =>
          (typeof E == 'function' && E.__emotion_real !== E) ||
          (0, Gk.isPlainObject)(E)
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
function sM(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Hd = (e) => sM(e) && e !== 'classes',
  le = qk({ themeId: Do, defaultTheme: Ud, rootShouldForwardProp: Hd }),
  aM = ['theme'];
function lM(e) {
  let { theme: t } = e,
    r = Z(e, aM);
  const n = t[Do];
  return P.jsx(YR, M({}, r, { themeId: n ? Do : void 0, theme: n || t }));
}
const kh = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function $e(e) {
  return KR(e);
}
function cM(e) {
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
const uM = [
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
  dM = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${Q(t)}`, `fontSize${Q(r)}`]
      };
    return ze(o, cM, n);
  },
  fM = le('svg', {
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
  Su = w.forwardRef(function (t, r) {
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
      m = Z(n, uM),
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
    const x = dM(h);
    return P.jsxs(
      fM,
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
Su.muiName = 'SvgIcon';
function Ql(e, t) {
  function r(n, o) {
    return P.jsx(
      Su,
      M({ 'data-testid': `${t}Icon`, ref: o }, n, { children: e })
    );
  }
  return (r.muiName = Su.muiName), w.memo(w.forwardRef(r));
}
const pM = {
    configure: (e) => {
      $d.configure(e);
    }
  },
  hM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: Q,
        createChainedFunction: bu,
        createSvgIcon: Ql,
        debounce: Ny,
        deprecatedPropType: SR,
        isMuiElement: ER,
        ownerDocument: Nt,
        ownerWindow: Yo,
        requirePropFactory: CR,
        setRef: Ua,
        unstable_ClassNameGenerator: pM,
        unstable_useEnhancedEffect: ln,
        unstable_useId: TR,
        unsupportedProp: RR,
        useControlled: kR,
        useEventCallback: tn,
        useForkRef: ct,
        useIsFocusVisible: Fy
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Eu(e, t) {
  return (
    (Eu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Eu(e, t)
  );
}
function ob(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Eu(e, t);
}
const Mh = { disabled: !1 },
  qa = de.createContext(null);
var mM = function (t) {
    return t.scrollTop;
  },
  Si = 'unmounted',
  Cn = 'exited',
  Pn = 'entering',
  mo = 'entered',
  Cu = 'exiting',
  nr = (function (e) {
    ob(t, e);
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
            ? ((l = Cn), (i.appearStatus = Pn))
            : (l = mo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Si)
            : (l = Cn),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Si ? { status: Cn } : null;
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
            ? s !== Pn && s !== mo && (i = Pn)
            : (s === Pn || s === mo) && (i = Cu);
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
          if ((this.cancelNextCallback(), i === Pn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : bi.findDOMNode(this);
              s && mM(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Cn &&
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
        if ((!o && !s) || Mh.disabled) {
          this.safeSetState({ status: mo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Pn }, function () {
            i.props.onEntering(c, u),
              i.onTransitionEnd(d, function () {
                i.safeSetState({ status: mo }, function () {
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
        if (!i || Mh.disabled) {
          this.safeSetState({ status: Cn }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Cu }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Cn }, function () {
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
          qa.Provider,
          { value: null },
          typeof s == 'function'
            ? s(o, a)
            : de.cloneElement(de.Children.only(s), a)
        );
      }),
      t
    );
  })(de.Component);
nr.contextType = qa;
nr.propTypes = {};
function uo() {}
nr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: uo,
  onEntering: uo,
  onEntered: uo,
  onExit: uo,
  onExiting: uo,
  onExited: uo
};
nr.UNMOUNTED = Si;
nr.EXITED = Cn;
nr.ENTERING = Pn;
nr.ENTERED = mo;
nr.EXITING = Cu;
function gM(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function qd(e, t) {
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
function vM(e, t) {
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
function Ln(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function yM(e, t) {
  return qd(e.children, function (r) {
    return w.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ln(r, 'appear', e),
      enter: Ln(r, 'enter', e),
      exit: Ln(r, 'exit', e)
    });
  });
}
function bM(e, t, r) {
  var n = qd(e.children),
    o = vM(t, n);
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
              exit: Ln(s, 'exit', e),
              enter: Ln(s, 'enter', e)
            }))
          : !l && a && !u
            ? (o[i] = w.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              w.isValidElement(c) &&
              (o[i] = w.cloneElement(s, {
                onExited: r.bind(null, s),
                in: c.props.in,
                exit: Ln(s, 'exit', e),
                enter: Ln(s, 'enter', e)
              }));
      }
    }),
    o
  );
}
var xM =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  wM = {
    component: 'div',
    childFactory: function (t) {
      return t;
    }
  },
  Gd = (function (e) {
    ob(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = i.handleExited.bind(gM(i));
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
        return { children: l ? yM(o, a) : bM(o, s, a), firstRender: !1 };
      }),
      (r.handleExited = function (o, i) {
        var s = qd(this.props.children);
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
          c = xM(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? de.createElement(qa.Provider, { value: l }, c)
            : de.createElement(
                qa.Provider,
                { value: l },
                de.createElement(i, a, c)
              )
        );
      }),
      t
    );
  })(de.Component);
Gd.propTypes = {};
Gd.defaultProps = wM;
const Zl = (e) => e.scrollTop;
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
function SM(e) {
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
const EM = [
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
  CM = (e) => {
    const { orientation: t, classes: r } = e,
      n = {
        root: ['root', `${t}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${t}`],
        wrapperInner: ['wrapperInner', `${t}`]
      };
    return ze(n, SM, r);
  },
  PM = le('div', {
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
  TM = le('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (e, t) => t.wrapper
  })(({ ownerState: e }) =>
    M(
      { display: 'flex', width: '100%' },
      e.orientation === 'horizontal' && { width: 'auto', height: '100%' }
    )
  ),
  RM = le('div', {
    name: 'MuiCollapse',
    slot: 'WrapperInner',
    overridesResolver: (e, t) => t.wrapperInner
  })(({ ownerState: e }) =>
    M(
      { width: '100%' },
      e.orientation === 'horizontal' && { width: 'auto', height: '100%' }
    )
  ),
  Jl = w.forwardRef(function (t, r) {
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
        timeout: g = tb.standard,
        TransitionComponent: y = nr
      } = n,
      E = Z(n, EM),
      S = M({}, n, { orientation: x, collapsedSize: a }),
      C = CM(S),
      T = dt(),
      R = Nd(),
      k = w.useRef(null),
      A = w.useRef(),
      I = typeof a == 'number' ? `${a}px` : a,
      L = x === 'horizontal',
      D = L ? 'width' : 'height',
      N = w.useRef(null),
      B = ct(r, N),
      j = (Y) => (Ae) => {
        if (Y) {
          const Re = N.current;
          Ae === void 0 ? Y(Re) : Y(Re, Ae);
        }
      },
      F = () => (k.current ? k.current[L ? 'clientWidth' : 'clientHeight'] : 0),
      z = j((Y, Ae) => {
        k.current && L && (k.current.style.position = 'absolute'),
          (Y.style[D] = I),
          f && f(Y, Ae);
      }),
      q = j((Y, Ae) => {
        const Re = F();
        k.current && L && (k.current.style.position = '');
        const { duration: _e, easing: ht } = Ar(
          { style: b, timeout: g, easing: c },
          { mode: 'enter' }
        );
        if (g === 'auto') {
          const jt = T.transitions.getAutoHeightDuration(Re);
          (Y.style.transitionDuration = `${jt}ms`), (A.current = jt);
        } else
          Y.style.transitionDuration = typeof _e == 'string' ? _e : `${_e}ms`;
        (Y.style[D] = `${Re}px`),
          (Y.style.transitionTimingFunction = ht),
          m && m(Y, Ae);
      }),
      fe = j((Y, Ae) => {
        (Y.style[D] = 'auto'), d && d(Y, Ae);
      }),
      J = j((Y) => {
        (Y.style[D] = `${F()}px`), p && p(Y);
      }),
      ae = j(h),
      ve = j((Y) => {
        const Ae = F(),
          { duration: Re, easing: _e } = Ar(
            { style: b, timeout: g, easing: c },
            { mode: 'exit' }
          );
        if (g === 'auto') {
          const ht = T.transitions.getAutoHeightDuration(Ae);
          (Y.style.transitionDuration = `${ht}ms`), (A.current = ht);
        } else
          Y.style.transitionDuration = typeof Re == 'string' ? Re : `${Re}ms`;
        (Y.style[D] = I), (Y.style.transitionTimingFunction = _e), v && v(Y);
      }),
      ye = (Y) => {
        g === 'auto' && R.start(A.current || 0, Y), o && o(N.current, Y);
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
          children: (Y, Ae) =>
            P.jsx(
              PM,
              M(
                {
                  as: l,
                  className: ue(
                    C.root,
                    s,
                    {
                      entered: C.entered,
                      exited: !u && I === '0px' && C.hidden
                    }[Y]
                  ),
                  style: M({ [L ? 'minWidth' : 'minHeight']: I }, b),
                  ref: B
                },
                Ae,
                {
                  ownerState: M({}, S, { state: Y }),
                  children: P.jsx(TM, {
                    ownerState: M({}, S, { state: Y }),
                    className: C.wrapper,
                    ref: k,
                    children: P.jsx(RM, {
                      ownerState: M({}, S, { state: Y }),
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
Jl.muiSupportAuto = !0;
function kM(e) {
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
const MM = ['className', 'component', 'elevation', 'square', 'variant'],
  OM = (e) => {
    const { square: t, elevation: r, variant: n, classes: o } = e,
      i = {
        root: ['root', n, !t && 'rounded', n === 'elevation' && `elevation${r}`]
      };
    return ze(i, kM, o);
  },
  AM = le('div', {
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
              backgroundImage: `linear-gradient(${bt('#fff', kh(t.elevation))}, ${bt('#fff', kh(t.elevation))})`
            },
          e.vars && {
            backgroundImage:
              (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
          }
        )
    );
  }),
  ec = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiPaper' }),
      {
        className: o,
        component: i = 'div',
        elevation: s = 1,
        square: a = !1,
        variant: l = 'elevation'
      } = n,
      c = Z(n, MM),
      u = M({}, n, { component: i, elevation: s, square: a, variant: l }),
      f = OM(u);
    return P.jsx(
      AM,
      M({ as: i, ownerState: u, className: ue(f.root, o), ref: r }, c)
    );
  });
function _M(e) {
  return typeof e == 'string';
}
function ib(e, t, r) {
  return e === void 0 || _M(e)
    ? t
    : M({}, t, { ownerState: M({}, t.ownerState, r) });
}
const DM = { disableDefaultClasses: !1 },
  IM = w.createContext(DM);
function LM(e) {
  const { disableDefaultClasses: t } = w.useContext(IM);
  return (r) => (t ? '' : e(r));
}
function sb(e, t = []) {
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
function ab(e, t, r) {
  return typeof e == 'function' ? e(t, r) : e;
}
function Oh(e) {
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
function lb(e) {
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
  const s = sb(M({}, o, n)),
    a = Oh(n),
    l = Oh(o),
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
const $M = [
  'elementType',
  'externalSlotProps',
  'ownerState',
  'skipResolvingSlotProps'
];
function Ga(e) {
  var t;
  const {
      elementType: r,
      externalSlotProps: n,
      ownerState: o,
      skipResolvingSlotProps: i = !1
    } = e,
    s = Z(e, $M),
    a = i ? {} : ab(n, o),
    { props: l, internalRef: c } = lb(M({}, s, { externalSlotProps: a })),
    u = ct(
      c,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return ib(r, M({}, l, { ref: u }), o);
}
const jM = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps'
  ],
  BM = ['component', 'slots', 'slotProps'],
  NM = ['component'];
function FM(e, t) {
  const {
      className: r,
      elementType: n,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a
    } = t,
    l = Z(t, jM),
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: f = { [e]: void 0 }
    } = i,
    d = Z(i, BM),
    m = u[e] || n,
    p = ab(f[e], o),
    h = lb(
      M({ className: r }, l, {
        externalForwardedProps: e === 'root' ? d : void 0,
        externalSlotProps: p
      })
    ),
    {
      props: { component: v },
      internalRef: x
    } = h,
    b = Z(h.props, NM),
    g = ct(x, p == null ? void 0 : p.ref, t.ref),
    y = s ? s(b) : {},
    E = M({}, o, y),
    S = e === 'root' ? v || c : v,
    C = ib(
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
function VM(e) {
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
  WM = ['center', 'classes', 'className'];
let tc = (e) => e,
  Ah,
  _h,
  Dh,
  Ih;
const Pu = 550,
  zM = 80,
  UM = Gn(
    Ah ||
      (Ah = tc`
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
  HM = Gn(
    _h ||
      (_h = tc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  qM = Gn(
    Dh ||
      (Dh = tc`
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
  GM = le('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  KM = le(VM, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Ih ||
      (Ih = tc`
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
    UM,
    Pu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    cr.child,
    cr.childLeaving,
    HM,
    Pu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.childPulsate,
    qM,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  YM = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s } = n,
      a = Z(n, WM),
      [l, c] = w.useState([]),
      u = w.useRef(0),
      f = w.useRef(null);
    w.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const d = w.useRef(!1),
      m = Nd(),
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
              KM,
              {
                classes: {
                  ripple: ue(i.ripple, cr.ripple),
                  rippleVisible: ue(i.rippleVisible, cr.rippleVisible),
                  ripplePulsate: ue(i.ripplePulsate, cr.ripplePulsate),
                  child: ue(i.child, cr.child),
                  childLeaving: ue(i.childLeaving, cr.childLeaving),
                  childPulsate: ue(i.childPulsate, cr.childPulsate)
                },
                timeout: Pu,
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
              m.start(zM, () => {
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
        GM,
        M({ className: ue(cr.root, i.root, s), ref: h }, a, {
          children: P.jsx(Gd, { component: null, exit: !0, children: l })
        })
      )
    );
  });
function XM(e) {
  return Ve('MuiButtonBase', e);
}
const QM = We('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  ZM = [
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
  JM = (e) => {
    const {
        disabled: t,
        focusVisible: r,
        focusVisibleClassName: n,
        classes: o
      } = e,
      s = ze({ root: ['root', t && 'disabled', r && 'focusVisible'] }, XM, o);
    return r && n && (s.root += ` ${n}`), s;
  },
  eO = le('button', {
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
    [`&.${QM.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  Lo = w.forwardRef(function (t, r) {
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
      B = Z(n, ZM),
      j = w.useRef(null),
      F = w.useRef(null),
      z = ct(F, D),
      { isFocusVisibleRef: q, onFocus: fe, onBlur: J, ref: ae } = Fy(),
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
    const [Y, Ae] = w.useState(!1);
    w.useEffect(() => {
      Ae(!0);
    }, []);
    const Re = Y && !u && !c;
    w.useEffect(() => {
      ve && d && !u && Y && F.current.pulsate();
    }, [u, d, ve, Y]);
    function _e(K, Ct, xe = f) {
      return tn(
        (oe) => (Ct && Ct(oe), !xe && F.current && F.current[K](oe), !0)
      );
    }
    const ht = _e('start', S),
      jt = _e('stop', v),
      je = _e('stop', x),
      Qe = _e('stop', T),
      mt = _e('stop', (K) => {
        ve && K.preventDefault(), C && C(K);
      }),
      wn = _e('start', A),
      St = _e('stop', R),
      ir = _e('stop', k),
      Ir = _e(
        'stop',
        (K) => {
          J(K), q.current === !1 && ye(!1), p && p(K);
        },
        !1
      ),
      Yr = tn((K) => {
        j.current || (j.current = K.currentTarget),
          fe(K),
          q.current === !0 && (ye(!0), g && g(K)),
          b && b(K);
      }),
      Et = () => {
        const K = j.current;
        return l && l !== 'button' && !(K.tagName === 'A' && K.href);
      },
      qt = w.useRef(!1),
      at = tn((K) => {
        d &&
          !qt.current &&
          ve &&
          F.current &&
          K.key === ' ' &&
          ((qt.current = !0),
          F.current.stop(K, () => {
            F.current.start(K);
          })),
          K.target === K.currentTarget &&
            Et() &&
            K.key === ' ' &&
            K.preventDefault(),
          y && y(K),
          K.target === K.currentTarget &&
            Et() &&
            K.key === 'Enter' &&
            !c &&
            (K.preventDefault(), h && h(K));
      }),
      Gt = tn((K) => {
        d &&
          K.key === ' ' &&
          F.current &&
          ve &&
          !K.defaultPrevented &&
          ((qt.current = !1),
          F.current.stop(K, () => {
            F.current.pulsate(K);
          })),
          E && E(K),
          h &&
            K.target === K.currentTarget &&
            Et() &&
            K.key === ' ' &&
            !K.defaultPrevented &&
            h(K);
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
      he = JM(ee);
    return P.jsxs(
      eO,
      M(
        {
          as: st,
          className: ue(he.root, a),
          ownerState: ee,
          onBlur: Ir,
          onClick: h,
          onContextMenu: jt,
          onFocus: Yr,
          onKeyDown: at,
          onKeyUp: Gt,
          onMouseDown: ht,
          onMouseLeave: mt,
          onMouseUp: Qe,
          onDragLeave: je,
          onTouchEnd: St,
          onTouchMove: ir,
          onTouchStart: wn,
          ref: be,
          tabIndex: c ? -1 : I,
          type: N
        },
        ne,
        B,
        { children: [s, Re ? P.jsx(YM, M({ ref: z, center: i }, L)) : null] }
      )
    );
  });
function tO(e) {
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
const rO = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  nO = (e) => {
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
    return ze(a, tO, s);
  },
  oO = le('span', {
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
  Lh = {
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
  iO = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  sO = (e) => iO[e] || e,
  Se = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTypography' }),
      o = sO(n.color),
      i = Es(M({}, n, { color: o })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: c = !1,
        noWrap: u = !1,
        paragraph: f = !1,
        variant: d = 'body1',
        variantMapping: m = Lh
      } = i,
      p = Z(i, rO),
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
      v = l || (f ? 'p' : m[d] || Lh[d]) || 'span',
      x = nO(h);
    return P.jsx(
      oO,
      M({ as: v, ref: r, ownerState: h, className: ue(x.root, a) }, p)
    );
  });
function aO(e) {
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
const lO = ['className', 'color', 'enableColorOnDark', 'position'],
  cO = (e) => {
    const { color: t, position: r, classes: n } = e,
      o = { root: ['root', `color${Q(t)}`, `position${Q(r)}`] };
    return ze(o, aO, n);
  },
  Qs = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  uO = le(ec, {
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
  dO = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiAppBar' }),
      {
        className: o,
        color: i = 'primary',
        enableColorOnDark: s = !1,
        position: a = 'fixed'
      } = n,
      l = Z(n, lO),
      c = M({}, n, { color: i, position: a, enableColorOnDark: s }),
      u = cO(c);
    return P.jsx(
      uO,
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
  cb = 'base';
function fO(e) {
  return `${cb}--${e}`;
}
function pO(e, t) {
  return `${cb}-${e}-${t}`;
}
function ub(e, t) {
  const r = _y[t];
  return r ? fO(r) : pO(e, t);
}
function hO(e, t) {
  const r = {};
  return (
    t.forEach((n) => {
      r[n] = ub(e, n);
    }),
    r
  );
}
function $h(e) {
  return e.substring(2).toLowerCase();
}
function mO(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function gO(e) {
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
      const v = Nt(a.current);
      if (!l.current || !a.current || ('clientX' in p && mO(p, v))) return;
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
        const p = $h(i),
          h = Nt(a.current),
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
        const p = $h(n),
          h = Nt(a.current);
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
const vO = [
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
function yO(e) {
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
function bO(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function xO(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    bO(e)
  );
}
function wO(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(vO)).forEach((n, o) => {
      const i = yO(n);
      i === -1 ||
        !xO(n) ||
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
function SO() {
  return !0;
}
function EO(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = wO,
      isEnabled: s = SO,
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
      const g = Nt(p.current);
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
      const g = Nt(p.current),
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
function CO(e) {
  return typeof e == 'function' ? e() : e;
}
const db = w.forwardRef(function (t, r) {
  const { children: n, container: o, disablePortal: i = !1 } = t,
    [s, a] = w.useState(null),
    l = ct(w.isValidElement(n) ? n.ref : null, r);
  if (
    (ln(() => {
      i || a(CO(o) || document.body);
    }, [o, i]),
    ln(() => {
      if (s && !i)
        return (
          Ua(r, s),
          () => {
            Ua(r, null);
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
  return P.jsx(w.Fragment, { children: s && od.createPortal(n, s) });
});
function PO(e) {
  const t = Nt(e);
  return t.body === e
    ? Yo(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ai(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function jh(e) {
  return parseInt(Yo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function TO(e) {
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
function Bh(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !TO(s);
    a && l && Ai(s, o);
  });
}
function Dc(e, t) {
  let r = -1;
  return e.some((n, o) => (t(n) ? ((r = o), !0) : !1)), r;
}
function RO(e, t) {
  const r = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (PO(n)) {
      const s = NR(Nt(n));
      r.push({ value: n.style.paddingRight, property: 'padding-right', el: n }),
        (n.style.paddingRight = `${jh(n) + s}px`);
      const a = Nt(n).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: 'padding-right',
          el: l
        }),
          (l.style.paddingRight = `${jh(l) + s}px`);
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment) i = Nt(n).body;
    else {
      const s = n.parentElement,
        a = Yo(n);
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
function kO(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute('aria-hidden') === 'true' && t.push(r);
    }),
    t
  );
}
class MO {
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
    const o = kO(r);
    Bh(r, t.mount, t.modalRef, o, !0);
    const i = Dc(this.containers, (s) => s.container === r);
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
    const n = Dc(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[n];
    o.restore || (o.restore = RO(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1) return n;
    const o = Dc(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(n, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Ai(t.modalRef, r),
        Bh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
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
function OO(e) {
  return typeof e == 'function' ? e() : e;
}
function AO(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const _O = new MO();
function DO(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: n = !1,
      manager: o = _O,
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
    b = AO(l);
  let g = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1);
  const y = () => Nt(m.current),
    E = () => (
      (d.current.modalRef = p.current), (d.current.mount = m.current), d.current
    ),
    S = () => {
      o.mount(E(), { disableScrollLock: n }),
        p.current && (p.current.scrollTop = 0);
    },
    C = tn(() => {
      const B = OO(t) || y().body;
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
      const j = sb(e);
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
        onEnter: bu(B, l == null ? void 0 : l.props.onEnter),
        onExited: bu(j, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: h,
    portalRef: R,
    isTopModal: T,
    exited: v,
    hasTransition: b
  };
}
var Ft = 'top',
  hr = 'bottom',
  mr = 'right',
  Vt = 'left',
  Kd = 'auto',
  Ps = [Ft, hr, mr, Vt],
  $o = 'start',
  rs = 'end',
  IO = 'clippingParents',
  fb = 'viewport',
  di = 'popper',
  LO = 'reference',
  Nh = Ps.reduce(function (e, t) {
    return e.concat([t + '-' + $o, t + '-' + rs]);
  }, []),
  pb = [].concat(Ps, [Kd]).reduce(function (e, t) {
    return e.concat([t, t + '-' + $o, t + '-' + rs]);
  }, []),
  $O = 'beforeRead',
  jO = 'read',
  BO = 'afterRead',
  NO = 'beforeMain',
  FO = 'main',
  VO = 'afterMain',
  WO = 'beforeWrite',
  zO = 'write',
  UO = 'afterWrite',
  HO = [$O, jO, BO, NO, FO, VO, WO, zO, UO];
function _r(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function er(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function qn(e) {
  var t = er(e).Element;
  return e instanceof t || e instanceof Element;
}
function fr(e) {
  var t = er(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yd(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = er(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qO(e) {
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
function GO(e) {
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
const KO = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: qO,
  effect: GO,
  requires: ['computeStyles']
};
function kr(e) {
  return e.split('-')[0];
}
var Bn = Math.max,
  Ka = Math.min,
  jo = Math.round;
function Tu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function hb() {
  return !/^((?!chrome|android).)*safari/i.test(Tu());
}
function Bo(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    fr(e) &&
    ((o = (e.offsetWidth > 0 && jo(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && jo(n.height) / e.offsetHeight) || 1));
  var s = qn(e) ? er(e) : window,
    a = s.visualViewport,
    l = !hb() && r,
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
function Xd(e) {
  var t = Bo(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function mb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Yd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Hr(e) {
  return er(e).getComputedStyle(e);
}
function YO(e) {
  return ['table', 'td', 'th'].indexOf(_r(e)) >= 0;
}
function vn(e) {
  return ((qn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function rc(e) {
  return _r(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Yd(e) ? e.host : null) || vn(e);
}
function Fh(e) {
  return !fr(e) || Hr(e).position === 'fixed' ? null : e.offsetParent;
}
function XO(e) {
  var t = /firefox/i.test(Tu()),
    r = /Trident/i.test(Tu());
  if (r && fr(e)) {
    var n = Hr(e);
    if (n.position === 'fixed') return null;
  }
  var o = rc(e);
  for (Yd(o) && (o = o.host); fr(o) && ['html', 'body'].indexOf(_r(o)) < 0; ) {
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
  for (var t = er(e), r = Fh(e); r && YO(r) && Hr(r).position === 'static'; )
    r = Fh(r);
  return r &&
    (_r(r) === 'html' || (_r(r) === 'body' && Hr(r).position === 'static'))
    ? t
    : r || XO(e) || t;
}
function Qd(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function _i(e, t, r) {
  return Bn(e, Ka(t, r));
}
function QO(e, t, r) {
  var n = _i(e, t, r);
  return n > r ? r : n;
}
function gb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function vb(e) {
  return Object.assign({}, gb(), e);
}
function yb(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var ZO = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    vb(typeof t != 'number' ? t : yb(t, Ps))
  );
};
function JO(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    i = r.elements.arrow,
    s = r.modifiersData.popperOffsets,
    a = kr(r.placement),
    l = Qd(a),
    c = [Vt, mr].indexOf(a) >= 0,
    u = c ? 'height' : 'width';
  if (!(!i || !s)) {
    var f = ZO(o.padding, r),
      d = Xd(i),
      m = l === 'y' ? Ft : Vt,
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
function e2(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (mb(t.elements.popper, o) && (t.elements.arrow = o)));
}
const t2 = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: JO,
  effect: e2,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function No(e) {
  return e.split('-')[1];
}
var r2 = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function n2(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1;
  return { x: jo(r * o) / o || 0, y: jo(n * o) / o || 0 };
}
function Vh(e) {
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
    g = Vt,
    y = Ft,
    E = window;
  if (c) {
    var S = Ts(r),
      C = 'clientHeight',
      T = 'clientWidth';
    if (
      (S === er(r) &&
        ((S = vn(r)),
        Hr(S).position !== 'static' &&
          a === 'absolute' &&
          ((C = 'scrollHeight'), (T = 'scrollWidth'))),
      (S = S),
      o === Ft || ((o === Vt || o === mr) && i === rs))
    ) {
      y = hr;
      var R = f && S === E && E.visualViewport ? E.visualViewport.height : S[C];
      (h -= R - n.height), (h *= l ? 1 : -1);
    }
    if (o === Vt || ((o === Ft || o === hr) && i === rs)) {
      g = mr;
      var k = f && S === E && E.visualViewport ? E.visualViewport.width : S[T];
      (m -= k - n.width), (m *= l ? 1 : -1);
    }
  }
  var A = Object.assign({ position: a }, c && r2),
    I = u === !0 ? n2({ x: m, y: h }, er(r)) : { x: m, y: h };
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
function o2(e) {
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
      variation: No(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed'
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Vh(
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
        Vh(
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
const i2 = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: o2,
  data: {}
};
var Zs = { passive: !0 };
function s2(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    i = o === void 0 ? !0 : o,
    s = n.resize,
    a = s === void 0 ? !0 : s,
    l = er(t.elements.popper),
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
const a2 = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: s2,
  data: {}
};
var l2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function ba(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return l2[t];
  });
}
var c2 = { start: 'end', end: 'start' };
function Wh(e) {
  return e.replace(/start|end/g, function (t) {
    return c2[t];
  });
}
function Zd(e) {
  var t = er(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Jd(e) {
  return Bo(vn(e)).left + Zd(e).scrollLeft;
}
function u2(e, t) {
  var r = er(e),
    n = vn(e),
    o = r.visualViewport,
    i = n.clientWidth,
    s = n.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var c = hb();
    (c || (!c && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + Jd(e), y: l };
}
function d2(e) {
  var t,
    r = vn(e),
    n = Zd(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Bn(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = Bn(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -n.scrollLeft + Jd(e),
    l = -n.scrollTop;
  return (
    Hr(o || r).direction === 'rtl' &&
      (a += Bn(r.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function ef(e) {
  var t = Hr(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function bb(e) {
  return ['html', 'body', '#document'].indexOf(_r(e)) >= 0
    ? e.ownerDocument.body
    : fr(e) && ef(e)
      ? e
      : bb(rc(e));
}
function Di(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = bb(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = er(n),
    s = o ? [i].concat(i.visualViewport || [], ef(n) ? n : []) : n,
    a = t.concat(s);
  return o ? a : a.concat(Di(rc(s)));
}
function Ru(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function f2(e, t) {
  var r = Bo(e, !1, t === 'fixed');
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
function zh(e, t, r) {
  return t === fb ? Ru(u2(e, r)) : qn(t) ? f2(t, r) : Ru(d2(vn(e)));
}
function p2(e) {
  var t = Di(rc(e)),
    r = ['absolute', 'fixed'].indexOf(Hr(e).position) >= 0,
    n = r && fr(e) ? Ts(e) : e;
  return qn(n)
    ? t.filter(function (o) {
        return qn(o) && mb(o, n) && _r(o) !== 'body';
      })
    : [];
}
function h2(e, t, r, n) {
  var o = t === 'clippingParents' ? p2(e) : [].concat(t),
    i = [].concat(o, [r]),
    s = i[0],
    a = i.reduce(
      function (l, c) {
        var u = zh(e, c, n);
        return (
          (l.top = Bn(u.top, l.top)),
          (l.right = Ka(u.right, l.right)),
          (l.bottom = Ka(u.bottom, l.bottom)),
          (l.left = Bn(u.left, l.left)),
          l
        );
      },
      zh(e, s, n)
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function xb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? kr(n) : null,
    i = n ? No(n) : null,
    s = t.x + t.width / 2 - r.width / 2,
    a = t.y + t.height / 2 - r.height / 2,
    l;
  switch (o) {
    case Ft:
      l = { x: s, y: t.y - r.height };
      break;
    case hr:
      l = { x: s, y: t.y + t.height };
      break;
    case mr:
      l = { x: t.x + t.width, y: a };
      break;
    case Vt:
      l = { x: t.x - r.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Qd(o) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (i) {
      case $o:
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
    l = a === void 0 ? IO : a,
    c = r.rootBoundary,
    u = c === void 0 ? fb : c,
    f = r.elementContext,
    d = f === void 0 ? di : f,
    m = r.altBoundary,
    p = m === void 0 ? !1 : m,
    h = r.padding,
    v = h === void 0 ? 0 : h,
    x = vb(typeof v != 'number' ? v : yb(v, Ps)),
    b = d === di ? LO : di,
    g = e.rects.popper,
    y = e.elements[p ? b : d],
    E = h2(qn(y) ? y : y.contextElement || vn(e.elements.popper), l, u, s),
    S = Bo(e.elements.reference),
    C = xb({ reference: S, element: g, strategy: 'absolute', placement: o }),
    T = Ru(Object.assign({}, g, C)),
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
        N = [Ft, hr].indexOf(L) >= 0 ? 'y' : 'x';
      k[L] += I[N] * D;
    });
  }
  return k;
}
function m2(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    i = r.rootBoundary,
    s = r.padding,
    a = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? pb : l,
    u = No(n),
    f = u
      ? a
        ? Nh
        : Nh.filter(function (p) {
            return No(p) === u;
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
function g2(e) {
  if (kr(e) === Kd) return [];
  var t = ba(e);
  return [Wh(e), t, Wh(t)];
}
function v2(e) {
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
        g = l || (b || !p ? [ba(v)] : g2(v)),
        y = [v].concat(g).reduce(function (ve, ye) {
          return ve.concat(
            kr(ye) === Kd
              ? m2(t, {
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
        L = No(A) === $o,
        D = [Ft, hr].indexOf(I) >= 0,
        N = D ? 'width' : 'height',
        B = ns(t, {
          placement: A,
          boundary: u,
          rootBoundary: f,
          altBoundary: d,
          padding: c
        }),
        j = D ? (L ? mr : Vt) : L ? hr : Ft;
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
            var Y = y.find(function (Ae) {
              var Re = C.get(Ae);
              if (Re)
                return Re.slice(0, ye).every(function (_e) {
                  return _e;
                });
            });
            if (Y) return (R = Y), 'break';
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
const y2 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: v2,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
};
function Uh(e, t, r) {
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
function Hh(e) {
  return [Ft, mr, hr, Vt].some(function (t) {
    return e[t] >= 0;
  });
}
function b2(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = ns(t, { elementContext: 'reference' }),
    a = ns(t, { altBoundary: !0 }),
    l = Uh(s, n),
    c = Uh(a, o, i),
    u = Hh(l),
    f = Hh(c);
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
const x2 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: b2
};
function w2(e, t, r) {
  var n = kr(e),
    o = [Vt, Ft].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0),
    (a = (a || 0) * o),
    [Vt, mr].indexOf(n) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function S2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    i = o === void 0 ? [0, 0] : o,
    s = pb.reduce(function (u, f) {
      return (u[f] = w2(f, t.rects, i)), u;
    }, {}),
    a = s[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = s);
}
const E2 = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: S2
};
function C2(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = xb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  });
}
const P2 = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: C2,
  data: {}
};
function T2(e) {
  return e === 'x' ? 'y' : 'x';
}
function R2(e) {
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
    b = No(t.placement),
    g = !b,
    y = Qd(x),
    E = T2(y),
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
        D = y === 'y' ? Ft : Vt,
        N = y === 'y' ? hr : mr,
        B = y === 'y' ? 'height' : 'width',
        j = S[y],
        F = j + v[D],
        z = j - v[N],
        q = m ? -T[B] / 2 : 0,
        fe = b === $o ? C[B] : T[B],
        J = b === $o ? -T[B] : -C[B],
        ae = t.elements.arrow,
        ve = m && ae ? Xd(ae) : { width: 0, height: 0 },
        ye = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : gb(),
        Y = ye[D],
        Ae = ye[N],
        Re = _i(0, C[B], ve[B]),
        _e = g ? C[B] / 2 - q - Re - Y - k.mainAxis : fe - Re - Y - k.mainAxis,
        ht = g
          ? -C[B] / 2 + q + Re + Ae + k.mainAxis
          : J + Re + Ae + k.mainAxis,
        jt = t.elements.arrow && Ts(t.elements.arrow),
        je = jt ? (y === 'y' ? jt.clientTop || 0 : jt.clientLeft || 0) : 0,
        Qe = (L = A == null ? void 0 : A[y]) != null ? L : 0,
        mt = j + _e - Qe - je,
        wn = j + ht - Qe,
        St = _i(m ? Ka(F, mt) : F, j, m ? Bn(z, wn) : z);
      (S[y] = St), (I[y] = St - j);
    }
    if (a) {
      var ir,
        Ir = y === 'x' ? Ft : Vt,
        Yr = y === 'x' ? hr : mr,
        Et = S[E],
        qt = E === 'y' ? 'height' : 'width',
        at = Et + v[Ir],
        Gt = Et - v[Yr],
        st = [Ft, Vt].indexOf(x) !== -1,
        ne = (ir = A == null ? void 0 : A[E]) != null ? ir : 0,
        be = st ? at : Et - C[qt] - T[qt] - ne + k.altAxis,
        ee = st ? Et + C[qt] + T[qt] - ne - k.altAxis : Gt,
        he = m && st ? QO(be, Et, ee) : _i(m ? be : at, Et, m ? ee : Gt);
      (S[E] = he), (I[E] = he - Et);
    }
    t.modifiersData[n] = I;
  }
}
const k2 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: R2,
  requiresIfExists: ['offset']
};
function M2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function O2(e) {
  return e === er(e) || !fr(e) ? Zd(e) : M2(e);
}
function A2(e) {
  var t = e.getBoundingClientRect(),
    r = jo(t.width) / e.offsetWidth || 1,
    n = jo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function _2(e, t, r) {
  r === void 0 && (r = !1);
  var n = fr(t),
    o = fr(t) && A2(t),
    i = vn(t),
    s = Bo(e, o, r),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((_r(t) !== 'body' || ef(i)) && (a = O2(t)),
      fr(t)
        ? ((l = Bo(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Jd(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height
    }
  );
}
function D2(e) {
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
function I2(e) {
  var t = D2(e);
  return HO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function L2(e) {
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
function $2(e) {
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
var qh = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Gh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function j2(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    i = o === void 0 ? qh : o;
  return function (a, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, qh, i),
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
              reference: qn(a)
                ? Di(a)
                : a.contextElement
                  ? Di(a.contextElement)
                  : [],
              popper: Di(l)
            });
          var g = I2($2([].concat(n, u.options.modifiers)));
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
            if (Gh(b, g)) {
              (u.rects = {
                reference: _2(b, Ts(g), u.options.strategy === 'fixed'),
                popper: Xd(g)
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
        update: L2(function () {
          return new Promise(function (v) {
            m.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          h(), (d = !0);
        }
      };
    if (!Gh(a, l)) return m;
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
var B2 = [a2, P2, i2, KO, E2, y2, k2, t2, x2],
  N2 = j2({ defaultModifiers: B2 });
const wb = 'Popper';
function F2(e) {
  return ub(wb, e);
}
hO(wb, ['root']);
const V2 = [
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
  W2 = [
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
function z2(e, t) {
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
function ku(e) {
  return typeof e == 'function' ? e() : e;
}
function U2(e) {
  return e.nodeType !== void 0;
}
const H2 = () => ze({ root: ['root'] }, LM(F2)),
  q2 = {},
  G2 = w.forwardRef(function (t, r) {
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
      v = Z(t, V2),
      x = w.useRef(null),
      b = ct(x, r),
      g = w.useRef(null),
      y = ct(g, d),
      E = w.useRef(y);
    ln(() => {
      E.current = y;
    }, [y]),
      w.useImperativeHandle(d, () => g.current, []);
    const S = z2(u, s),
      [C, T] = w.useState(S),
      [R, k] = w.useState(ku(o));
    w.useEffect(() => {
      g.current && g.current.forceUpdate();
    }),
      w.useEffect(() => {
        o && k(ku(o));
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
        const j = N2(R, x.current, M({ placement: S }, f, { modifiers: B }));
        return (
          E.current(j),
          () => {
            j.destroy(), E.current(null);
          }
        );
      }, [R, a, l, c, f, S]);
    const A = { placement: C };
    h !== null && (A.TransitionProps = h);
    const I = H2(),
      L = (n = p.root) != null ? n : 'div',
      D = Ga({
        elementType: L,
        externalSlotProps: m.root,
        externalForwardedProps: v,
        additionalProps: { role: 'tooltip', ref: b },
        ownerState: t,
        className: I.root
      });
    return P.jsx(L, M({}, D, { children: typeof i == 'function' ? i(A) : i }));
  }),
  K2 = w.forwardRef(function (t, r) {
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
        popperOptions: d = q2,
        popperRef: m,
        style: p,
        transition: h = !1,
        slotProps: v = {},
        slots: x = {}
      } = t,
      b = Z(t, W2),
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
      const k = ku(n);
      C = k && U2(k) ? Nt(k).body : Nt(null).body;
    }
    const T = !u && l && (!h || g) ? 'none' : void 0,
      R = h ? { in: u, onEnter: E, onExited: S } : void 0;
    return P.jsx(db, {
      disablePortal: a,
      container: C,
      children: P.jsx(
        G2,
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
var tf = {};
Object.defineProperty(tf, '__esModule', { value: !0 });
var Sb = (tf.default = void 0),
  Y2 = Q2(w),
  X2 = rb;
function Eb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Eb = function (n) {
    return n ? r : t;
  })(e);
}
function Q2(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = Eb(t);
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
function Z2(e) {
  return Object.keys(e).length === 0;
}
function J2(e = null) {
  const t = Y2.useContext(X2.ThemeContext);
  return !t || Z2(t) ? e : t;
}
Sb = tf.default = J2;
const eA = [
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
  tA = le(K2, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({}),
  rA = w.forwardRef(function (t, r) {
    var n;
    const o = Sb(),
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
      E = Z(i, eA),
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
      tA,
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
  nA = Ql(
    P.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
    }),
    'Cancel'
  );
function oA(e) {
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
  iA = [
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
  sA = (e) => {
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
    return ze(c, oA, t);
  },
  aA = le('div', {
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
                : bt(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : bt(e.palette.text.primary, 0.4)
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
                : bt(e.palette[t.color].contrastText, 0.7),
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
              : bt(
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
              : bt(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                )
          },
          [`&.${we.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : bt(
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
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : bt(e.palette[t.color].main, 0.7)}`,
            [`&.${we.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : bt(e.palette[t.color].main, e.palette.action.hoverOpacity)
            },
            [`&.${we.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                : bt(e.palette[t.color].main, e.palette.action.focusOpacity)
            },
            [`& .${we.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : bt(e.palette[t.color].main, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].main
              }
            }
          }
      )
  ),
  lA = le('span', {
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
function Kh(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const Cb = w.forwardRef(function (t, r) {
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
    E = Z(n, iA),
    S = w.useRef(null),
    C = ct(S, r),
    T = (z) => {
      z.stopPropagation(), p && p(z);
    },
    R = (z) => {
      z.currentTarget === z.target && Kh(z) && z.preventDefault(), h && h(z);
    },
    k = (z) => {
      z.currentTarget === z.target &&
        (p && Kh(z)
          ? p(z)
          : z.key === 'Escape' && S.current && S.current.blur()),
        v && v(z);
    },
    A = s !== !1 && m ? !0 : s,
    I = A || p ? Lo : l || 'div',
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
    D = sA(L),
    N =
      I === Lo
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
        : P.jsx(nA, { className: ue(D.deleteIcon), onClick: T }));
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
      aA,
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
            P.jsx(lA, { className: ue(D.label), ownerState: L, children: d }),
            B
          ]
        }
      )
    )
  );
});
function cA(e) {
  return P.jsx(YT, M({}, e, { defaultTheme: Ud, themeId: Do }));
}
const uA = Ql(
  P.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
  }),
  'Person'
);
function dA(e) {
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
const fA = [
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
  pA = (e) => {
    const { classes: t, variant: r, colorDefault: n } = e;
    return ze(
      {
        root: ['root', r, n && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback']
      },
      dA,
      t
    );
  },
  hA = le('div', {
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
  mA = le('img', {
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
  gA = le(uA, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback
  })({ width: '75%', height: '75%' });
function vA({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: n }) {
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
const nc = w.forwardRef(function (t, r) {
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
      h = Z(n, fA);
    let v = null;
    const x = vA(M({}, u, { src: d, srcSet: m })),
      b = d || m,
      g = b && x !== 'error',
      y = M({}, n, { colorDefault: !g, component: a, variant: p }),
      E = pA(y),
      [S, C] = FM('img', {
        className: E.img,
        elementType: mA,
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
            : (v = P.jsx(gA, { ownerState: y, className: E.fallback })),
      P.jsx(
        hA,
        M({ as: a, ownerState: y, className: ue(E.root, s), ref: r }, h, {
          children: v
        })
      )
    );
  }),
  yA = [
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
  bA = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Pb = w.forwardRef(function (t, r) {
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
        TransitionComponent: b = nr
      } = t,
      g = Z(t, yA),
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
        Zl(D);
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
                    bA[D],
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
function xA(e) {
  return Ve('MuiBackdrop', e);
}
We('MuiBackdrop', ['root', 'invisible']);
const wA = [
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
  SA = (e) => {
    const { classes: t, invisible: r } = e;
    return ze({ root: ['root', r && 'invisible'] }, xA, t);
  },
  EA = le('div', {
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
  CA = w.forwardRef(function (t, r) {
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
        TransitionComponent: v = Pb,
        transitionDuration: x
      } = s,
      b = Z(s, wA),
      g = M({}, s, { component: c, invisible: d }),
      y = SA(g),
      E = (n = p.root) != null ? n : f.root;
    return P.jsx(
      v,
      M({ in: m, timeout: x }, b, {
        children: P.jsx(
          EA,
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
  PA = We('MuiBox', ['root']),
  TA = zd(),
  lt = tR({
    themeId: Do,
    defaultTheme: TA,
    defaultClassName: PA.root,
    generateClassName: $d.generate
  }),
  RA = Ql(
    P.jsx('path', {
      d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    }),
    'MoreHoriz'
  ),
  kA = ['slots', 'slotProps'],
  MA = le(Lo)(({ theme: e }) =>
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
            ? { backgroundColor: bh(e.palette.grey[200], 0.12) }
            : { backgroundColor: bh(e.palette.grey[600], 0.12) }
        )
      }
    )
  ),
  OA = le(RA)({ width: 24, height: 16 });
function AA(e) {
  const { slots: t = {}, slotProps: r = {} } = e,
    n = Z(e, kA),
    o = e;
  return P.jsx('li', {
    children: P.jsx(
      MA,
      M({ focusRipple: !0 }, n, {
        ownerState: o,
        children: P.jsx(
          OA,
          M({ as: t.CollapsedIcon, ownerState: o }, r.collapsedIcon)
        )
      })
    )
  });
}
function _A(e) {
  return Ve('MuiBreadcrumbs', e);
}
const DA = We('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']),
  IA = [
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
  LA = (e) => {
    const { classes: t } = e;
    return ze(
      { root: ['root'], li: ['li'], ol: ['ol'], separator: ['separator'] },
      _A,
      t
    );
  },
  $A = le(Se, {
    name: 'MuiBreadcrumbs',
    slot: 'Root',
    overridesResolver: (e, t) => [{ [`& .${DA.li}`]: t.li }, t.root]
  })({}),
  jA = le('ol', {
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
  BA = le('li', {
    name: 'MuiBreadcrumbs',
    slot: 'Separator',
    overridesResolver: (e, t) => t.separator
  })({ display: 'flex', userSelect: 'none', marginLeft: 8, marginRight: 8 });
function NA(e, t, r, n) {
  return e.reduce(
    (o, i, s) => (
      s < e.length - 1
        ? (o = o.concat(
            i,
            P.jsx(
              BA,
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
const Ic = w.forwardRef(function (t, r) {
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
    p = Z(n, IA),
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
    b = LA(x),
    g = Ga({
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
              AA,
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
    $A,
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
        children: P.jsx(jA, {
          className: b.ol,
          ref: y,
          ownerState: x,
          children: NA(h || (d && S.length <= d) ? S : E(S), b.separator, m, x)
        })
      }
    )
  );
});
function FA(e) {
  return Ve('MuiCard', e);
}
We('MuiCard', ['root']);
const VA = ['className', 'raised'],
  WA = (e) => {
    const { classes: t } = e;
    return ze({ root: ['root'] }, FA, t);
  },
  zA = le(ec, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ overflow: 'hidden' })),
  Ya = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCard' }),
      { className: o, raised: i = !1 } = n,
      s = Z(n, VA),
      a = M({}, n, { raised: i }),
      l = WA(a);
    return P.jsx(
      zA,
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
function UA(e) {
  return Ve('MuiCardContent', e);
}
We('MuiCardContent', ['root']);
const HA = ['className', 'component'],
  qA = (e) => {
    const { classes: t } = e;
    return ze({ root: ['root'] }, UA, t);
  },
  GA = le('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  Tb = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCardContent' }),
      { className: o, component: i = 'div' } = n,
      s = Z(n, HA),
      a = M({}, n, { component: i }),
      l = qA(a);
    return P.jsx(
      GA,
      M({ as: i, className: ue(l.root, o), ownerState: a, ref: r }, s)
    );
  });
function KA(e) {
  return Ve('MuiCardHeader', e);
}
const Yh = We('MuiCardHeader', [
    'root',
    'avatar',
    'action',
    'content',
    'title',
    'subheader'
  ]),
  YA = [
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
  XA = (e) => {
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
      KA,
      t
    );
  },
  QA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Root',
    overridesResolver: (e, t) =>
      M(
        { [`& .${Yh.title}`]: t.title, [`& .${Yh.subheader}`]: t.subheader },
        t.root
      )
  })({ display: 'flex', alignItems: 'center', padding: 16 }),
  ZA = le('div', {
    name: 'MuiCardHeader',
    slot: 'Avatar',
    overridesResolver: (e, t) => t.avatar
  })({ display: 'flex', flex: '0 0 auto', marginRight: 16 }),
  JA = le('div', {
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
  e_ = le('div', {
    name: 'MuiCardHeader',
    slot: 'Content',
    overridesResolver: (e, t) => t.content
  })({ flex: '1 1 auto' }),
  Xa = w.forwardRef(function (t, r) {
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
      m = Z(n, YA),
      p = M({}, n, { component: a, disableTypography: l }),
      h = XA(p);
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
        QA,
        M({ className: ue(h.root, s), as: a, ref: r, ownerState: p }, m, {
          children: [
            i && P.jsx(ZA, { className: h.avatar, ownerState: p, children: i }),
            P.jsxs(e_, {
              className: h.content,
              ownerState: p,
              children: [v, x]
            }),
            o && P.jsx(JA, { className: h.action, ownerState: p, children: o })
          ]
        })
      )
    );
  }),
  t_ = (e, t) =>
    M(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%'
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  r_ = (e) =>
    M({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white }
    }),
  n_ = (e, t = !1) => {
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
        html: t_(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: M({ margin: 0 }, r_(e), {
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
function Rb(e) {
  const t = $e({ props: e, name: 'MuiCssBaseline' }),
    { children: r, enableColorScheme: n = !1 } = t;
  return P.jsxs(w.Fragment, {
    children: [P.jsx(cA, { styles: (o) => n_(o, n) }), r]
  });
}
function o_(e) {
  return Ve('MuiModal', e);
}
We('MuiModal', ['root', 'hidden', 'backdrop']);
const i_ = [
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
  s_ = (e) => {
    const { open: t, exited: r, classes: n } = e;
    return ze(
      { root: ['root', !t && r && 'hidden'], backdrop: ['backdrop'] },
      o_,
      n
    );
  },
  a_ = le('div', {
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
  l_ = le(CA, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, t) => t.backdrop
  })({ zIndex: -1 }),
  c_ = w.forwardRef(function (t, r) {
    var n, o, i, s, a, l;
    const c = $e({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: u = l_,
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
      N = Z(c, i_),
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
      } = DO(M({}, B, { rootRef: r })),
      ve = M({}, B, { exited: J }),
      ye = s_(ve),
      Y = {};
    if ((p.props.tabIndex === void 0 && (Y.tabIndex = '-1'), ae)) {
      const { onEnter: Qe, onExited: mt } = z();
      (Y.onEnter = Qe), (Y.onExited = mt);
    }
    const Ae =
        (n = (o = D == null ? void 0 : D.root) != null ? o : x.Root) != null
          ? n
          : a_,
      Re =
        (i = (s = D == null ? void 0 : D.backdrop) != null ? s : x.Backdrop) !=
        null
          ? i
          : u,
      _e = (a = L == null ? void 0 : L.root) != null ? a : b.root,
      ht = (l = L == null ? void 0 : L.backdrop) != null ? l : b.backdrop,
      jt = Ga({
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
      je = Ga({
        elementType: Re,
        externalSlotProps: ht,
        additionalProps: f,
        getSlotProps: (Qe) =>
          F(
            M({}, Qe, {
              onClick: (mt) => {
                A && A(mt), Qe != null && Qe.onClick && Qe.onClick(mt);
              }
            })
          ),
        className: ue(
          ht == null ? void 0 : ht.className,
          f == null ? void 0 : f.className,
          ye == null ? void 0 : ye.backdrop
        ),
        ownerState: ve
      });
    return !k && !I && (!ae || J)
      ? null
      : P.jsx(db, {
          ref: q,
          container: h,
          disablePortal: S,
          children: P.jsxs(
            Ae,
            M({}, jt, {
              children: [
                !R && u ? P.jsx(Re, M({}, je)) : null,
                P.jsx(EO, {
                  disableEnforceFocus: y,
                  disableAutoFocus: g,
                  disableRestoreFocus: C,
                  isEnabled: fe,
                  open: I,
                  children: w.cloneElement(p, Y)
                })
              ]
            })
          )
        });
  });
function u_(e) {
  return Ve('MuiDivider', e);
}
const g3 = We('MuiDivider', [
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
  d_ = [
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
  f_ = (e) => {
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
      u_,
      n
    );
  },
  p_ = le('div', {
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
            : bt(e.palette.divider, 0.08)
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
  h_ = le('span', {
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
  Fo = w.forwardRef(function (t, r) {
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
      p = Z(n, d_),
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
      v = f_(h);
    return P.jsx(
      p_,
      M(
        { as: a, className: ue(v.root, s), role: f, ref: r, ownerState: h },
        p,
        {
          children: i
            ? P.jsx(h_, { className: v.wrapper, ownerState: h, children: i })
            : null
        }
      )
    );
  });
Fo.muiSkipListHighlight = !0;
const m_ = [
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
function g_(e, t, r) {
  const n = t.getBoundingClientRect(),
    o = r && r.getBoundingClientRect(),
    i = Yo(t);
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
function v_(e) {
  return typeof e == 'function' ? e() : e;
}
function Js(e, t, r) {
  const n = v_(r),
    o = g_(e, t, n);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const kb = w.forwardRef(function (t, r) {
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
      TransitionComponent: E = nr
    } = t,
    S = Z(t, m_),
    C = w.useRef(null),
    T = ct(l.ref, C, r),
    R = (F) => (z) => {
      F && (z === void 0 ? F(C.current) : F(C.current, z));
    },
    k = R((F, z) => {
      Js(u, F, c), Zl(F), m && m(F, z);
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
      const F = Ny(() => {
          C.current && Js(u, C.current, c);
        }),
        z = Yo(C.current);
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
function y_(e) {
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
const b_ = ['BackdropProps'],
  x_ = [
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
  Mb = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === 'permanent' || r.variant === 'persistent') && t.docked,
      t.modal
    ];
  },
  w_ = (e) => {
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
    return ze(o, y_, t);
  },
  S_ = le(c_, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Mb })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Xh = le('div', {
    shouldForwardProp: Hd,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Mb
  })({ flex: '0 0 auto' }),
  E_ = le(ec, {
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
  Ob = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function C_(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function P_({ direction: e }, t) {
  return e === 'rtl' && C_(t) ? Ob[t] : t;
}
const T_ = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiDrawer' }),
      o = dt(),
      i = Uy(),
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
        TransitionComponent: b = kb,
        transitionDuration: g = s,
        variant: y = 'temporary'
      } = n,
      E = Z(n.ModalProps, b_),
      S = Z(n, x_),
      C = w.useRef(!1);
    w.useEffect(() => {
      C.current = !0;
    }, []);
    const T = P_({ direction: i ? 'rtl' : 'ltr' }, a),
      k = M({}, n, { anchor: a, elevation: f, open: h, variant: y }, S),
      A = w_(k),
      I = P.jsx(
        E_,
        M({ elevation: y === 'temporary' ? f : 0, square: !0 }, v, {
          className: ue(A.paper, v.className),
          ownerState: k,
          children: c
        })
      );
    if (y === 'permanent')
      return P.jsx(
        Xh,
        M({ className: ue(A.root, A.docked, u), ownerState: k, ref: r }, S, {
          children: I
        })
      );
    const L = P.jsx(
      b,
      M({ in: h, direction: Ob[T], timeout: g, appear: C.current }, x, {
        children: I
      })
    );
    return y === 'persistent'
      ? P.jsx(
          Xh,
          M({ className: ue(A.root, A.docked, u), ownerState: k, ref: r }, S, {
            children: L
          })
        )
      : P.jsx(
          S_,
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
  Qh = nk({
    createStyledComponent: le('div', {
      name: 'MuiStack',
      slot: 'Root',
      overridesResolver: (e, t) => t.root
    }),
    useThemeProps: (e) => $e({ props: e, name: 'MuiStack' })
  }),
  Zh = w.createContext();
function R_(e) {
  return Ve('MuiGrid', e);
}
const k_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  M_ = ['column-reverse', 'column', 'row-reverse', 'row'],
  O_ = ['nowrap', 'wrap-reverse', 'wrap'],
  fi = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  os = We('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...k_.map((e) => `spacing-xs-${e}`),
    ...M_.map((e) => `direction-xs-${e}`),
    ...O_.map((e) => `wrap-xs-${e}`),
    ...fi.map((e) => `grid-xs-${e}`),
    ...fi.map((e) => `grid-sm-${e}`),
    ...fi.map((e) => `grid-md-${e}`),
    ...fi.map((e) => `grid-lg-${e}`),
    ...fi.map((e) => `grid-xl-${e}`)
  ]),
  A_ = [
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
function ko(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), '') || 'px'}`;
}
function __({ theme: e, ownerState: t }) {
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
      const s = jn({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == 'object' ? s[o] : s;
      if (a == null) return n;
      const l = `${Math.round((r / a) * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== '0px') {
          const f = `calc(${l} + ${ko(u)})`;
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
function D_({ theme: e, ownerState: t }) {
  const r = jn({ values: t.direction, breakpoints: e.breakpoints.values });
  return Ut({ theme: e }, r, (n) => {
    const o = { flexDirection: n };
    return (
      n.indexOf('column') === 0 &&
        (o[`& > .${os.item}`] = { maxWidth: 'none' }),
      o
    );
  });
}
function Ab({ breakpoints: e, values: t }) {
  let r = '';
  Object.keys(t).forEach((o) => {
    r === '' && t[o] !== 0 && (r = o);
  });
  const n = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return n.slice(0, n.indexOf(r));
}
function I_({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = jn({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Ab({ breakpoints: e.breakpoints.values, values: i })),
      (o = Ut({ theme: e }, i, (a, l) => {
        var c;
        const u = e.spacing(a);
        return u !== '0px'
          ? {
              marginTop: `-${ko(u)}`,
              [`& > .${os.item}`]: { paddingTop: ko(u) }
            }
          : (c = s) != null && c.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${os.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function L_({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = jn({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Ab({ breakpoints: e.breakpoints.values, values: i })),
      (o = Ut({ theme: e }, i, (a, l) => {
        var c;
        const u = e.spacing(a);
        return u !== '0px'
          ? {
              width: `calc(100% + ${ko(u)})`,
              marginLeft: `-${ko(u)}`,
              [`& > .${os.item}`]: { paddingLeft: ko(u) }
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
function $_(e, t, r = {}) {
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
const j_ = le('div', {
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
    n && (u = $_(s, c, t));
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
  D_,
  I_,
  L_,
  __
);
function B_(e, t) {
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
const N_ = (e) => {
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
    r && (c = B_(i, l));
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
    return ze(f, R_, t);
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
      x = Z(i, A_),
      b = m || p,
      g = l || p,
      y = w.useContext(Zh),
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
      R = N_(T);
    return P.jsx(Zh.Provider, {
      value: E,
      children: P.jsx(
        j_,
        M({ ownerState: T, className: ue(R.root, s), as: c, ref: r }, C)
      )
    });
  }),
  F_ = [
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
function Mu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const V_ = {
    entering: { opacity: 1, transform: Mu(1) },
    entered: { opacity: 1, transform: 'none' }
  },
  Lc =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  _b = w.forwardRef(function (t, r) {
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
        TransitionComponent: v = nr
      } = t,
      x = Z(t, F_),
      b = Nd(),
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
        Zl(N);
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
              duration: Lc ? q : q * 0.666,
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
              duration: Lc ? z : z * 0.666,
              delay: Lc ? j : j || z * 0.333,
              easing: F
            })
          ].join(',')),
          (N.style.opacity = 0),
          (N.style.transform = Mu(0.75)),
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
                      transform: Mu(0.75),
                      visibility: N === 'exited' && !a ? 'hidden' : void 0
                    },
                    V_[N],
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
_b.muiSupportAuto = !0;
function W_(e) {
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
const z_ = ['className', 'color', 'value', 'valueBuffer', 'variant'];
let Zo = (e) => e,
  Jh,
  em,
  tm,
  rm,
  nm,
  om;
const Ou = 4,
  U_ = Gn(
    Jh ||
      (Jh = Zo`
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
  H_ = Gn(
    em ||
      (em = Zo`
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
  q_ = Gn(
    tm ||
      (tm = Zo`
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
  G_ = (e) => {
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
    return ze(o, W_, t);
  },
  rf = (e, t) =>
    t === 'inherit'
      ? 'currentColor'
      : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === 'light'
          ? Yy(e.palette[t].main, 0.62)
          : Ky(e.palette[t].main, 0.5),
  K_ = le('span', {
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
        backgroundColor: rf(t, e.color)
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
  Y_ = le('span', {
    name: 'MuiLinearProgress',
    slot: 'Dashed',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.dashed, t[`dashedColor${Q(r.color)}`]];
    }
  })(
    ({ ownerState: e, theme: t }) => {
      const r = rf(t, e.color);
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
      rm ||
        (rm = Zo`
    animation: ${0} 3s infinite linear;
  `),
      q_
    )
  ),
  X_ = le('span', {
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
          transition: `transform .${Ou}s linear`
        },
        e.variant === 'buffer' && {
          zIndex: 1,
          transition: `transform .${Ou}s linear`
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      bs(
        nm ||
          (nm = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
        U_
      )
  ),
  Q_ = le('span', {
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
          backgroundColor: rf(t, e.color),
          transition: `transform .${Ou}s linear`
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === 'indeterminate' || e.variant === 'query') &&
      bs(
        om ||
          (om = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
        H_
      )
  ),
  Z_ = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiLinearProgress' }),
      {
        className: o,
        color: i = 'primary',
        value: s,
        valueBuffer: a,
        variant: l = 'indeterminate'
      } = n,
      c = Z(n, z_),
      u = M({}, n, { color: i, variant: l }),
      f = G_(u),
      d = Uy(),
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
      K_,
      M(
        { className: ue(f.root, o), ownerState: u, role: 'progressbar' },
        m,
        { ref: r },
        c,
        {
          children: [
            l === 'buffer'
              ? P.jsx(Y_, { className: f.dashed, ownerState: u })
              : null,
            P.jsx(X_, { className: f.bar1, ownerState: u, style: p.bar1 }),
            l === 'determinate'
              ? null
              : P.jsx(Q_, { className: f.bar2, ownerState: u, style: p.bar2 })
          ]
        }
      )
    );
  }),
  is = w.createContext({});
function J_(e) {
  return Ve('MuiList', e);
}
We('MuiList', ['root', 'padding', 'dense', 'subheader']);
const eD = [
    'children',
    'className',
    'component',
    'dense',
    'disablePadding',
    'subheader'
  ],
  tD = (e) => {
    const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
    return ze(
      { root: ['root', !r && 'padding', n && 'dense', o && 'subheader'] },
      J_,
      t
    );
  },
  rD = le('ul', {
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
  nf = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: a = !1,
        disablePadding: l = !1,
        subheader: c
      } = n,
      u = Z(n, eD),
      f = w.useMemo(() => ({ dense: a }), [a]),
      d = M({}, n, { component: s, dense: a, disablePadding: l }),
      m = tD(d);
    return P.jsx(is.Provider, {
      value: f,
      children: P.jsxs(
        rD,
        M({ as: s, className: ue(m.root, i), ref: r, ownerState: d }, u, {
          children: [c, o]
        })
      )
    });
  });
function nD(e) {
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
  oD = [
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
  iD = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters
    ];
  },
  sD = (e) => {
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
        nD,
        r
      );
    return M({}, r, c);
  },
  aD = le(Lo, {
    shouldForwardProp: (e) => Hd(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: iD
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
            : bt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${pi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : bt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                )
          }
        },
        [`&.${pi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : bt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : bt(e.palette.primary.main, e.palette.action.selectedOpacity)
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
      p = Z(n, oD),
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
      g = sD(b),
      y = ct(x, r);
    return P.jsx(is.Provider, {
      value: v,
      children: P.jsx(
        aD,
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
function lD(e) {
  return Ve('MuiListItemIcon', e);
}
const v3 = We('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  cD = ['className'],
  uD = (e) => {
    const { alignItems: t, classes: r } = e;
    return ze(
      { root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] },
      lD,
      r
    );
  },
  dD = le('div', {
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
  Qa = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiListItemIcon' }),
      { className: o } = n,
      i = Z(n, cD),
      s = w.useContext(is),
      a = M({}, n, { alignItems: s.alignItems }),
      l = uD(a);
    return P.jsx(dD, M({ className: ue(l.root, o), ownerState: a, ref: r }, i));
  });
function fD(e) {
  return Ve('MuiListItemText', e);
}
const im = We('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
  ]),
  pD = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps'
  ],
  hD = (e) => {
    const { classes: t, inset: r, primary: n, secondary: o, dense: i } = e;
    return ze(
      {
        root: ['root', r && 'inset', i && 'dense', n && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary']
      },
      fD,
      t
    );
  },
  mD = le('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${im.primary}`]: t.primary },
        { [`& .${im.secondary}`]: t.secondary },
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
  Za = w.forwardRef(function (t, r) {
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
      d = Z(n, pD),
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
      x = hD(v);
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
        mD,
        M({ className: ue(x.root, i), ownerState: v, ref: r }, d, {
          children: [p, h]
        })
      )
    );
  }),
  gD = [
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
  vD = { entering: { transform: 'none' }, entered: { transform: 'none' } },
  yD = w.forwardRef(function (t, r) {
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
        TransitionComponent: b = nr
      } = t,
      g = Z(t, gD),
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
        Zl(D);
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
                    vD[D],
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
function bD(e) {
  return Ve('MuiToolbar', e);
}
We('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const xD = ['className', 'component', 'disableGutters', 'variant'],
  wD = (e) => {
    const { classes: t, disableGutters: r, variant: n } = e;
    return ze({ root: ['root', !r && 'gutters', n] }, bD, t);
  },
  SD = le('div', {
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
  ED = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiToolbar' }),
      {
        className: o,
        component: i = 'div',
        disableGutters: s = !1,
        variant: a = 'regular'
      } = n,
      l = Z(n, xD),
      c = M({}, n, { component: i, disableGutters: s, variant: a }),
      u = wD(c);
    return P.jsx(
      SD,
      M({ as: i, className: ue(u.root, o), ref: r, ownerState: c }, l)
    );
  }),
  CD = 'modulepreload',
  PD = function (e) {
    return '/' + e;
  },
  sm = {},
  ft = function (t, r, n) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        s =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.all(
        r.map((a) => {
          if (((a = PD(a)), a in sm)) return;
          sm[a] = !0;
          const l = a.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = l ? 'stylesheet' : CD),
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
  TD = '/assets/elogocropped-ArxxZuCO.png',
  RD = () => (dt(), P.jsx('img', { src: TD, alt: 'Berry', width: '100' })),
  Db = () => {
    const e = dn((r) => r.customization.defaultId),
      t = Uo();
    return P.jsx(Lo, {
      disableRipple: !0,
      onClick: () => t({ type: ja, id: e }),
      component: In,
      to: fu.defaultPath,
      children: P.jsx(RD, {})
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
const am = {};
function kD(e, t) {
  am[e] ||
    ((am[e] = !0), console.error('[material-ui-popup-state] WARNING', t));
}
const MD = {
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
function OD({
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
  const [i, s] = w.useState(MD),
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
              kD(
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
        y.hovered && !(g instanceof Element && Au(g, x))
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
        y.focused && !(g instanceof Element && Au(g, x))
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
function AD(e, { popupId: t }) {
  if (!t) return null;
  const r = typeof e.getRootNode == 'function' ? e.getRootNode() : document;
  return typeof r.getElementById == 'function' ? r.getElementById(t) : null;
}
function Au(e, t) {
  const { anchorEl: r, _childPopupState: n } = t;
  return lm(r, e) || lm(AD(e, t), e) || (n != null && Au(e, n));
}
function lm(e, t) {
  if (!e) return !1;
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
function Ib({
  children: e,
  popupId: t,
  variant: r,
  parentPopupState: n,
  disableAutoFocus: o
}) {
  const i = OD({
      popupId: t,
      variant: r,
      parentPopupState: n,
      disableAutoFocus: o
    }),
    s = e(i);
  return s ?? null;
}
Ib.propTypes = {
  children: W.func.isRequired,
  popupId: W.string,
  variant: W.oneOf(['popover', 'popper']).isRequired,
  parentPopupState: W.object,
  disableAutoFocus: W.bool
};
const of = de.forwardRef(
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
          P.jsx(_b, { ...o, children: P.jsx(lt, { sx: s, children: e }) }),
        r === 'collapse' && P.jsx(Jl, { ...o, sx: s, children: e }),
        r === 'fade' &&
          P.jsx(Pb, {
            ...o,
            timeout: { appear: 500, enter: 600, exit: 400 },
            children: P.jsx(lt, { sx: s, children: e })
          }),
        r === 'slide' &&
          P.jsx(kb, {
            ...o,
            timeout: { appear: 0, enter: 400, exit: 200 },
            direction: n,
            children: P.jsx(lt, { sx: s, children: e })
          }),
        r === 'zoom' &&
          P.jsx(yD, { ...o, children: P.jsx(lt, { sx: s, children: e }) })
      ]
    });
  }
);
of.propTypes = {
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
of.defaultProps = { type: 'grow', position: 'top-left', direction: 'up' };
var _D = {
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
  DD = Object.defineProperty,
  ID = Object.defineProperties,
  LD = Object.getOwnPropertyDescriptors,
  Ja = Object.getOwnPropertySymbols,
  Lb = Object.prototype.hasOwnProperty,
  $b = Object.prototype.propertyIsEnumerable,
  cm = (e, t, r) =>
    t in e
      ? DD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  um = (e, t) => {
    for (var r in t || (t = {})) Lb.call(t, r) && cm(e, r, t[r]);
    if (Ja) for (var r of Ja(t)) $b.call(t, r) && cm(e, r, t[r]);
    return e;
  },
  $D = (e, t) => ID(e, LD(t)),
  jD = (e, t) => {
    var r = {};
    for (var n in e) Lb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ja)
      for (var n of Ja(e)) t.indexOf(n) < 0 && $b.call(e, n) && (r[n] = e[n]);
    return r;
  },
  $t = (e, t, r) => {
    const n = w.forwardRef((o, i) => {
      var s = o,
        {
          color: a = 'currentColor',
          size: l = 24,
          stroke: c = 2,
          children: u
        } = s,
        f = jD(s, ['color', 'size', 'stroke', 'children']);
      return w.createElement(
        'svg',
        um(
          $D(um({ ref: i }, _D), {
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
  BD = $t('brand-chrome', 'IconBrandChrome', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0', key: 'svg-1' }],
    ['path', { d: 'M12 9h8.4', key: 'svg-2' }],
    ['path', { d: 'M14.598 13.5l-4.2 7.275', key: 'svg-3' }],
    ['path', { d: 'M9.402 13.5l-4.2 -7.275', key: 'svg-4' }]
  ]),
  ND = $t('chevron-down', 'IconChevronDown', [
    ['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]
  ]),
  jb = $t('chevron-right', 'IconChevronRight', [
    ['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]
  ]),
  FD = $t('chevron-up', 'IconChevronUp', [
    ['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]
  ]),
  VD = $t('dashboard', 'IconDashboard', [
    ['path', { d: 'M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-0' }],
    ['path', { d: 'M13.45 11.55l2.05 -2.05', key: 'svg-1' }],
    ['path', { d: 'M6.4 20a9 9 0 1 1 11.2 0z', key: 'svg-2' }]
  ]),
  WD = $t('help', 'IconHelp', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 17l0 .01', key: 'svg-1' }],
    [
      'path',
      { d: 'M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4', key: 'svg-2' }
    ]
  ]),
  zD = $t('key', 'IconKey', [
    [
      'path',
      {
        d: 'M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M15 9h.01', key: 'svg-1' }]
  ]),
  UD = $t('logout', 'IconLogout', [
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
  HD = $t('menu-2', 'IconMenu2', [
    ['path', { d: 'M4 6l16 0', key: 'svg-0' }],
    ['path', { d: 'M4 12l16 0', key: 'svg-1' }],
    ['path', { d: 'M4 18l16 0', key: 'svg-2' }]
  ]),
  Bb = $t('palette', 'IconPalette', [
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
  dm = $t('settings', 'IconSettings', [
    [
      'path',
      {
        d: 'M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0', key: 'svg-1' }]
  ]),
  Nb = $t('shadow', 'IconShadow', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M13 12h5', key: 'svg-1' }],
    ['path', { d: 'M13 15h4', key: 'svg-2' }],
    ['path', { d: 'M13 18h1', key: 'svg-3' }],
    ['path', { d: 'M13 9h4', key: 'svg-4' }],
    ['path', { d: 'M13 6h1', key: 'svg-5' }]
  ]),
  qD = $t('tallymark-1', 'IconTallymark1', [
    ['path', { d: 'M12 5l0 14', key: 'svg-0' }]
  ]),
  Fb = $t('typography', 'IconTypography', [
    ['path', { d: 'M4 20l3 0', key: 'svg-0' }],
    ['path', { d: 'M14 20l7 0', key: 'svg-1' }],
    ['path', { d: 'M6.9 15l6.9 0', key: 'svg-2' }],
    ['path', { d: 'M10.2 6.3l5.8 13.7', key: 'svg-3' }],
    ['path', { d: 'M5 20l6 -16l2 0l7 16', key: 'svg-4' }]
  ]),
  Vb = $t('windmill', 'IconWindmill', [
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
const GD = w.forwardRef(({ children: e, ...t }, r) => {
  const n = dt();
  return P.jsx(nc, {
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
GD.propTypes = { children: W.node };
W.string, W.func;
var _u = { exports: {} },
  Du = { exports: {} };
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ function Tr(e) {
  return getComputedStyle(e);
}
function Bt(e, t) {
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
var fm =
  typeof Element < 'u' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);
function rn(e, t) {
  if (!fm) throw new Error('No element matching method supported');
  return fm.call(e, t);
}
function yo(e) {
  e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
}
function pm(e, t) {
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
  Wb = { x: null, y: null };
function zb(e, t) {
  var r = e.element.classList,
    n = ot.state.scrolling(t);
  r.contains(n) ? clearTimeout(Wb[t]) : r.add(n);
}
function Ub(e, t) {
  Wb[t] = setTimeout(function () {
    return e.isAlive && e.element.classList.remove(ot.state.scrolling(t));
  }, e.settings.scrollingThreshold);
}
function KD(e, t) {
  zb(e, t), Ub(e, t);
}
var Rs = function (t) {
    (this.element = t), (this.handlers = {});
  },
  Hb = { isEmpty: { configurable: !0 } };
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
Hb.isEmpty.get = function () {
  var e = this;
  return Object.keys(this.handlers).every(function (t) {
    return e.handlers[t].length === 0;
  });
};
Object.defineProperties(Rs.prototype, Hb);
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
function el(e, t, r, n, o) {
  n === void 0 && (n = !0), o === void 0 && (o = !1);
  var i;
  if (t === 'top')
    i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
  else if (t === 'left')
    i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
  else throw new Error('A proper axis should be provided');
  YD(e, r, i, n, o);
}
function YD(e, t, r, n, o) {
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
      n && KD(e, l)),
    e.reach[l] &&
      (t || o) &&
      f.dispatchEvent(ta('ps-' + l + '-reach-' + e.reach[l]));
}
function He(e) {
  return parseInt(e, 10) || 0;
}
function XD(e) {
  return (
    rn(e, 'input,[contenteditable]') ||
    rn(e, 'select,[contenteditable]') ||
    rn(e, 'textarea,[contenteditable]') ||
    rn(e, 'button,[contenteditable]')
  );
}
function QD(e) {
  var t = Tr(e);
  return (
    He(t.width) +
    He(t.paddingLeft) +
    He(t.paddingRight) +
    He(t.borderLeftWidth) +
    He(t.borderRightWidth)
  );
}
var go = {
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
      (pm(t, ot.element.rail('x')).forEach(function (o) {
        return yo(o);
      }),
      t.appendChild(e.scrollbarXRail)),
    t.contains(e.scrollbarYRail) ||
      (pm(t, ot.element.rail('y')).forEach(function (o) {
        return yo(o);
      }),
      t.appendChild(e.scrollbarYRail)),
    !e.settings.suppressScrollX &&
    e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
      ? ((e.scrollbarXActive = !0),
        (e.railXWidth = e.containerWidth - e.railXMarginWidth),
        (e.railXRatio = e.containerWidth / e.railXWidth),
        (e.scrollbarXWidth = hm(
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
        (e.scrollbarYHeight = hm(
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
    ZD(t, e),
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
function hm(e, t) {
  return (
    e.settings.minScrollbarLength &&
      (t = Math.max(t, e.settings.minScrollbarLength)),
    e.settings.maxScrollbarLength &&
      (t = Math.min(t, e.settings.maxScrollbarLength)),
    t
  );
}
function ZD(e, t) {
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
    Bt(t.scrollbarXRail, r);
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
    Bt(t.scrollbarYRail, o),
    Bt(t.scrollbarX, {
      left: t.scrollbarXLeft,
      width: t.scrollbarXWidth - t.railBorderXWidth
    }),
    Bt(t.scrollbarY, {
      top: t.scrollbarYTop,
      height: t.scrollbarYHeight - t.railBorderYWidth
    });
}
function JD(e) {
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
function eI(e) {
  mm(e, [
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
    mm(e, [
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
function mm(e, t) {
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
      zb(e, c),
      qr(e),
      b.stopPropagation(),
      b.type.startsWith('touch') &&
        b.changedTouches.length > 1 &&
        b.preventDefault();
  }
  function v() {
    Ub(e, c),
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
function tI(e) {
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
        if (XD(s)) return;
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
function rI(e) {
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
    if (!go.isWebKit && t.querySelector('select:focus')) return !0;
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
function nI(e) {
  if (!go.supportsTouch && !go.supportsIePointer) return;
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
        return window.scrollY === 0 && h > 0 && go.isChrome;
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
  go.supportsTouch
    ? (e.event.bind(t, 'touchstart', u),
      e.event.bind(t, 'touchmove', d),
      e.event.bind(t, 'touchend', m))
    : go.supportsIePointer &&
      (window.PointerEvent
        ? (e.event.bind(t, 'pointerdown', u),
          e.event.bind(t, 'pointermove', d),
          e.event.bind(t, 'pointerup', m))
        : window.MSPointerEvent &&
          (e.event.bind(t, 'MSPointerDown', u),
          e.event.bind(t, 'MSPointerMove', d),
          e.event.bind(t, 'MSPointerUp', m)));
}
var oI = function () {
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
  iI = {
    'click-rail': JD,
    'drag-thumb': eI,
    keyboard: tI,
    wheel: rI,
    touch: nI
  },
  ks = function (t, r) {
    var n = this;
    if (
      (r === void 0 && (r = {}),
      typeof t == 'string' && (t = document.querySelector(t)),
      !t || !t.nodeName)
    )
      throw new Error('no element is specified to initialize PerfectScrollbar');
    (this.element = t), t.classList.add(ot.main), (this.settings = oI());
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
      Bt(this.scrollbarXRail, { display: 'block' }),
      (this.railXMarginWidth = He(a.marginLeft) + He(a.marginRight)),
      Bt(this.scrollbarXRail, { display: '' }),
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
      (this.scrollbarYOuterWidth = this.isRtl ? QD(this.scrollbarY) : null),
      (this.railBorderYWidth = He(l.borderTopWidth) + He(l.borderBottomWidth)),
      Bt(this.scrollbarYRail, { display: 'block' }),
      (this.railYMarginHeight = He(l.marginTop) + He(l.marginBottom)),
      Bt(this.scrollbarYRail, { display: '' }),
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
        return iI[c](n);
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
    Bt(this.scrollbarXRail, { display: 'block' }),
    Bt(this.scrollbarYRail, { display: 'block' }),
    (this.railXMarginWidth =
      He(Tr(this.scrollbarXRail).marginLeft) +
      He(Tr(this.scrollbarXRail).marginRight)),
    (this.railYMarginHeight =
      He(Tr(this.scrollbarYRail).marginTop) +
      He(Tr(this.scrollbarYRail).marginBottom)),
    Bt(this.scrollbarXRail, { display: 'none' }),
    Bt(this.scrollbarYRail, { display: 'none' }),
    qr(this),
    el(this, 'top', 0, !1, !0),
    el(this, 'left', 0, !1, !0),
    Bt(this.scrollbarXRail, { display: '' }),
    Bt(this.scrollbarYRail, { display: '' }));
};
ks.prototype.onScroll = function (t) {
  this.isAlive &&
    (qr(this),
    el(this, 'top', this.element.scrollTop - this.lastScrollTop),
    el(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
    (this.lastScrollTop = Math.floor(this.element.scrollTop)),
    (this.lastScrollLeft = this.element.scrollLeft));
};
ks.prototype.destroy = function () {
  this.isAlive &&
    (this.event.unbindAll(),
    yo(this.scrollbarX),
    yo(this.scrollbarY),
    yo(this.scrollbarXRail),
    yo(this.scrollbarYRail),
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
const sI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ks },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  aI = Dr(sI);
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
    s = xy,
    a = aI,
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
})(Du, Du.exports);
var lI = Du.exports;
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = lI,
    n = o(r);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  (t.default = n.default), (e.exports = t.default);
})(_u, _u.exports);
var cI = _u.exports;
const qb = Yg(cI),
  gm = { '& .MuiCardHeader-action': { mr: 0 } },
  Gb = de.forwardRef(
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
      P.jsxs(Ya, {
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
          !s && u && P.jsx(Xa, { sx: gm, title: u, action: a }),
          s &&
            u &&
            P.jsx(Xa, {
              sx: gm,
              title: P.jsx(Se, { variant: 'h3', children: u }),
              action: a
            }),
          u && P.jsx(Fo, {}),
          n && P.jsx(Tb, { sx: i, className: o, children: r }),
          !n && r
        ]
      })
  );
Gb.propTypes = {
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
const uI = '/assets/ELogo-Bf5vj95-.png',
  dI = (e) => {
    const t = dt(),
      r = dn((v) => v.customization),
      n = gs();
    console.log(e);
    const [o, i] = w.useState(-1),
      [s, a] = w.useState(!1),
      { user: l, setUser: c } = pE(),
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
          P.jsx(Cb, {
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
            icon: P.jsx(nc, {
              src: uI,
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
            label: P.jsx(dm, {
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
          P.jsx(rA, {
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
              P.jsx(of, {
                in: s,
                ...v,
                children: P.jsx(ec, {
                  children: P.jsx(gO, {
                    onClickAway: d,
                    children: P.jsxs(Gb, {
                      border: !1,
                      elevation: 16,
                      content: !1,
                      boxShadow: !0,
                      shadow: t.shadows[16],
                      children: [
                        P.jsxs(lt, {
                          sx: { p: 2, pb: 0 },
                          children: [
                            P.jsx(Qh, {
                              children: P.jsxs(Qh, {
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
                            P.jsx(Fo, {})
                          ]
                        }),
                        P.jsx(qb, {
                          style: {
                            height: '100%',
                            maxHeight: 'calc(100vh - 250px)',
                            overflowX: 'hidden'
                          },
                          children: P.jsx(lt, {
                            sx: { p: 2, pt: 0 },
                            children: P.jsxs(nf, {
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
                                    P.jsx(Qa, {
                                      children: P.jsx(dm, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    P.jsx(Za, {
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
                                    P.jsx(Qa, {
                                      children: P.jsx(UD, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    P.jsx(Za, {
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
  Kb = ({ handleLeftDrawerToggle: e }) => {
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
              children: P.jsx(Db, {})
            }),
            P.jsx(Lo, {
              sx: { borderRadius: '8px', overflow: 'hidden' },
              children: P.jsx(nc, {
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
                children: P.jsx(HD, { stroke: 1.5, size: '1.3rem' })
              })
            })
          ]
        }),
        P.jsx(lt, { sx: { flexGrow: 1 } }),
        P.jsx(lt, { sx: { flexGrow: 1 } }),
        P.jsx(dI, {})
      ]
    });
  };
Kb.propTypes = { handleLeftDrawerToggle: W.func };
var G = {},
  Iu = { exports: {} };
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
      Y = 'Xiaomi',
      Ae = 'Zebra',
      Re = 'Facebook',
      _e = 'Chromium OS',
      ht = 'Mac OS',
      jt = function (ne, be) {
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
        return typeof ne === u ? mt(be).indexOf(mt(ne)) !== -1 : !1;
      },
      mt = function (ne) {
        return ne.toLowerCase();
      },
      wn = function (ne) {
        return typeof ne === u ? ne.replace(/[^\d\.]/g, i).split('.')[0] : n;
      },
      St = function (ne, be) {
        if (typeof ne === u)
          return (
            (ne = ne.replace(/^\s\s*/, i)),
            typeof be === l ? ne : ne.substring(0, T)
          );
      },
      ir = function (ne, be) {
        for (var ee = 0, he, K, Ct, xe, oe, tt; ee < be.length && !oe; ) {
          var Qn = be[ee],
            ri = be[ee + 1];
          for (he = K = 0; he < Qn.length && !oe && Qn[he]; )
            if (((oe = Qn[he++].exec(ne)), oe))
              for (Ct = 0; Ct < ri.length; Ct++)
                (tt = oe[++K]),
                  (xe = ri[Ct]),
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
      Yr = {
        '1.0': '/8',
        1.2: '/1',
        1.3: '/3',
        '2.0': '/412',
        '2.0.2': '/416',
        '2.0.3': '/417',
        '2.0.4': '/419',
        '?': '/'
      },
      Et = {
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
      qt = {
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
          [m, [v, Ir, Yr]],
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
          [[x, mt]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[x, 'ia32']],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[x, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[x, 'armhf']],
          [/windows (ce|mobile); ppc;/i],
          [[x, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[x, /ower/, i, mt]],
          [/(sun4\w)[;\)]/i],
          [[x, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          ],
          [[x, mt]]
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
            [h, Y],
            [p, g]
          ],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          ],
          [
            [d, /_/g, ' '],
            [h, Y],
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
          [d, [h, Y], [p, E]],
          [/Hbbtv.*(technisat) (.*);/i],
          [h, d, [p, E]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          ],
          [
            [h, St],
            [d, St],
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
          [m, [v, Ir, Et]],
          [
            /windows nt 6\.2; (arm)/i,
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [
            [v, Ir, Et],
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
            [m, ht],
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
          K = ee && ee.userAgentData ? ee.userAgentData : n,
          Ct = be ? jt(qt, be) : qt,
          xe = ee && ee.userAgent == he;
        return (
          (this.getBrowser = function () {
            var oe = {};
            return (
              (oe[m] = n),
              (oe[v] = n),
              ir.call(oe, he, Ct.browser),
              (oe[f] = wn(oe[v])),
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
            return (oe[x] = n), ir.call(oe, he, Ct.cpu), oe;
          }),
          (this.getDevice = function () {
            var oe = {};
            return (
              (oe[h] = n),
              (oe[d] = n),
              (oe[p] = n),
              ir.call(oe, he, Ct.device),
              xe && !oe[p] && K && K.mobile && (oe[p] = g),
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
            return (oe[m] = n), (oe[v] = n), ir.call(oe, he, Ct.engine), oe;
          }),
          (this.getOS = function () {
            var oe = {};
            return (
              (oe[m] = n),
              (oe[v] = n),
              ir.call(oe, he, Ct.os),
              xe &&
                !oe[m] &&
                K &&
                K.platform &&
                K.platform != 'Unknown' &&
                (oe[m] = K.platform
                  .replace(/chrome os/i, _e)
                  .replace(/macos/i, ht)),
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
              (he = typeof oe === u && oe.length > T ? St(oe, T) : oe), this
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
    var Gt = typeof r !== l && (r.jQuery || r.Zepto);
    if (Gt && !Gt.ua) {
      var st = new at();
      (Gt.ua = st.getResult()),
        (Gt.ua.get = function () {
          return st.getUA();
        }),
        (Gt.ua.set = function (ne) {
          st.setUA(ne);
          var be = st.getResult();
          for (var ee in be) Gt.ua[ee] = be[ee];
        });
    }
  })(typeof window == 'object' ? window : Ww);
})(Iu, Iu.exports);
var fI = Iu.exports;
Object.defineProperty(G, '__esModule', { value: !0 });
function pI(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var At = w,
  Fe = pI(At),
  Yb = fI,
  yn = new Yb(),
  Dt = yn.getBrowser(),
  hI = yn.getCPU(),
  or = yn.getDevice(),
  sf = yn.getEngine(),
  bn = yn.getOS(),
  Ms = yn.getUA(),
  Xb = function (t) {
    return yn.setUA(t);
  },
  Os = function (t) {
    if (!t) {
      console.error('No userAgent string was provided');
      return;
    }
    var r = new Yb(t);
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
  Qb = Object.freeze({
    ClientUAInstance: yn,
    browser: Dt,
    cpu: hI,
    device: or,
    engine: sf,
    os: bn,
    ua: Ms,
    setUa: Xb,
    parseUserAgent: Os
  });
function vm(e, t) {
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
function mI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vm(Object(r), !0).forEach(function (n) {
          bI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vm(Object(r)).forEach(function (n) {
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
function gI(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function vI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function yI(e, t, r) {
  return t && vI(e.prototype, t), e;
}
function bI(e, t, r) {
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
function Lu() {
  return (
    (Lu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Lu.apply(this, arguments)
  );
}
function xI(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && ju(e, t);
}
function $u(e) {
  return (
    ($u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $u(e)
  );
}
function ju(e, t) {
  return (
    (ju =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    ju(e, t)
  );
}
function wI(e, t) {
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
  var r = wI(e, t),
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
function SI(e, t) {
  if (t && (typeof t == 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return xa(e);
}
function EI(e, t) {
  return CI(e) || PI(e, t) || TI(e, t) || RI();
}
function CI(e) {
  if (Array.isArray(e)) return e;
}
function PI(e, t) {
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
function TI(e, t) {
  if (e) {
    if (typeof e == 'string') return ym(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ym(e, t);
  }
}
function ym(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var kt = {
    Mobile: 'mobile',
    Tablet: 'tablet',
    SmartTv: 'smarttv',
    Console: 'console',
    Wearable: 'wearable',
    Embedded: 'embedded',
    Browser: void 0
  },
  Ht = {
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
  kI = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1
  },
  MI = function (t) {
    switch (t) {
      case kt.Mobile:
        return { isMobile: !0 };
      case kt.Tablet:
        return { isTablet: !0 };
      case kt.SmartTv:
        return { isSmartTV: !0 };
      case kt.Console:
        return { isConsole: !0 };
      case kt.Wearable:
        return { isWearable: !0 };
      case kt.Browser:
        return { isBrowser: !0 };
      case kt.Embedded:
        return { isEmbedded: !0 };
      default:
        return kI;
    }
  },
  OI = function (t) {
    return Xb(t);
  },
  ce = function (t) {
    var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'none';
    return t || r;
  },
  af = function () {
    return typeof window < 'u' && (window.navigator || navigator)
      ? window.navigator || navigator
      : !1;
  },
  lf = function (t) {
    var r = af();
    return (
      r &&
      r.platform &&
      (r.platform.indexOf(t) !== -1 ||
        (r.platform === 'MacIntel' && r.maxTouchPoints > 1 && !window.MSStream))
    );
  },
  AI = function (t, r, n, o, i) {
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
  bm = function (t, r, n, o) {
    return mI({}, t, {
      vendor: ce(r.vendor),
      model: ce(r.model),
      os: ce(n.name),
      osVersion: ce(n.version),
      ua: ce(o)
    });
  },
  _I = function (t, r, n, o) {
    return {
      isSmartTV: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  DI = function (t, r, n, o) {
    return {
      isConsole: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  II = function (t, r, n, o) {
    return {
      isWearable: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  LI = function (t, r, n, o, i) {
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
function $I(e) {
  var t = e ? Os(e) : Qb,
    r = t.device,
    n = t.browser,
    o = t.engine,
    i = t.os,
    s = t.ua,
    a = MI(r.type),
    l = a.isBrowser,
    c = a.isMobile,
    u = a.isTablet,
    f = a.isSmartTV,
    d = a.isConsole,
    m = a.isWearable,
    p = a.isEmbedded;
  if (l) return AI(l, n, o, i, s);
  if (f) return _I(f, o, i, s);
  if (d) return DI(d, o, i, s);
  if (c || u) return bm(a, r, i, s);
  if (m) return II(m, o, i, s);
  if (p) return LI(p, r, o, i, s);
}
var Zb = function (t) {
    var r = t.type;
    return r === kt.Mobile;
  },
  Jb = function (t) {
    var r = t.type;
    return r === kt.Tablet;
  },
  e0 = function (t) {
    var r = t.type;
    return r === kt.Mobile || r === kt.Tablet;
  },
  t0 = function (t) {
    var r = t.type;
    return r === kt.SmartTv;
  },
  tl = function (t) {
    var r = t.type;
    return r === kt.Browser;
  },
  r0 = function (t) {
    var r = t.type;
    return r === kt.Wearable;
  },
  n0 = function (t) {
    var r = t.type;
    return r === kt.Console;
  },
  o0 = function (t) {
    var r = t.type;
    return r === kt.Embedded;
  },
  i0 = function (t) {
    var r = t.vendor;
    return ce(r);
  },
  s0 = function (t) {
    var r = t.model;
    return ce(r);
  },
  a0 = function (t) {
    var r = t.type;
    return ce(r, 'browser');
  },
  l0 = function (t) {
    var r = t.name;
    return r === ei.Android;
  },
  c0 = function (t) {
    var r = t.name;
    return r === ei.Windows;
  },
  u0 = function (t) {
    var r = t.name;
    return r === ei.MAC_OS;
  },
  d0 = function (t) {
    var r = t.name;
    return r === ei.WindowsPhone;
  },
  f0 = function (t) {
    var r = t.name;
    return r === ei.IOS;
  },
  p0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  h0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  m0 = function (t) {
    var r = t.name;
    return r === Ht.Chrome;
  },
  g0 = function (t) {
    var r = t.name;
    return r === Ht.Firefox;
  },
  v0 = function (t) {
    var r = t.name;
    return r === Ht.Chromium;
  },
  rl = function (t) {
    var r = t.name;
    return r === Ht.Edge;
  },
  y0 = function (t) {
    var r = t.name;
    return r === Ht.Yandex;
  },
  b0 = function (t) {
    var r = t.name;
    return r === Ht.Safari || r === Ht.MobileSafari;
  },
  x0 = function (t) {
    var r = t.name;
    return r === Ht.MobileSafari;
  },
  w0 = function (t) {
    var r = t.name;
    return r === Ht.Opera;
  },
  S0 = function (t) {
    var r = t.name;
    return r === Ht.InternetExplorer || r === Ht.Ie;
  },
  E0 = function (t) {
    var r = t.name;
    return r === Ht.MIUI;
  },
  C0 = function (t) {
    var r = t.name;
    return r === Ht.SamsungBrowser;
  },
  P0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  T0 = function (t) {
    var r = t.major;
    return ce(r);
  },
  R0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  k0 = function (t) {
    var r = t.name;
    return ce(r);
  },
  M0 = function (t) {
    var r = t.version;
    return ce(r);
  },
  O0 = function () {
    var t = af(),
      r = t && t.userAgent && t.userAgent.toLowerCase();
    return typeof r == 'string' ? /electron/.test(r) : !1;
  },
  Mo = function (t) {
    return typeof t == 'string' && t.indexOf('Edg/') !== -1;
  },
  A0 = function () {
    var t = af();
    return (
      t &&
      (/iPad|iPhone|iPod/.test(t.platform) ||
        (t.platform === 'MacIntel' && t.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  },
  Pr = function () {
    return lf('iPad');
  },
  _0 = function () {
    return lf('iPhone');
  },
  D0 = function () {
    return lf('iPod');
  },
  I0 = function (t) {
    return ce(t);
  };
function L0(e) {
  var t = e || Qb,
    r = t.device,
    n = t.browser,
    o = t.os,
    i = t.engine,
    s = t.ua;
  return {
    isSmartTV: t0(r),
    isConsole: n0(r),
    isWearable: r0(r),
    isEmbedded: o0(r),
    isMobileSafari: x0(n) || Pr(),
    isChromium: v0(n),
    isMobile: e0(r) || Pr(),
    isMobileOnly: Zb(r),
    isTablet: Jb(r) || Pr(),
    isBrowser: tl(r),
    isDesktop: tl(r),
    isAndroid: l0(o),
    isWinPhone: d0(o),
    isIOS: f0(o) || Pr(),
    isChrome: m0(n),
    isFirefox: g0(n),
    isSafari: b0(n),
    isOpera: w0(n),
    isIE: S0(n),
    osVersion: p0(o),
    osName: h0(o),
    fullBrowserVersion: P0(n),
    browserVersion: T0(n),
    browserName: R0(n),
    mobileVendor: i0(r),
    mobileModel: s0(r),
    engineName: k0(i),
    engineVersion: M0(i),
    getUA: I0(s),
    isEdge: rl(n) || Mo(s),
    isYandex: y0(n),
    deviceType: a0(r),
    isIOS13: A0(),
    isIPad13: Pr(),
    isIPhone13: _0(),
    isIPod13: D0(),
    isElectron: O0(),
    isEdgeChromium: Mo(s),
    isLegacyEdge: rl(n) && !Mo(s),
    isWindows: c0(o),
    isMacOs: u0(o),
    isMIUI: E0(n),
    isSamsungBrowser: C0(n)
  };
}
var $0 = t0(or),
  j0 = n0(or),
  B0 = r0(or),
  jI = o0(or),
  BI = x0(Dt) || Pr(),
  NI = v0(Dt),
  oc = e0(or) || Pr(),
  N0 = Zb(or),
  F0 = Jb(or) || Pr(),
  V0 = tl(or),
  FI = tl(or),
  W0 = l0(bn),
  z0 = d0(bn),
  U0 = f0(bn) || Pr(),
  VI = m0(Dt),
  WI = g0(Dt),
  zI = b0(Dt),
  UI = w0(Dt),
  H0 = S0(Dt),
  HI = p0(bn),
  qI = h0(bn),
  GI = P0(Dt),
  KI = T0(Dt),
  YI = R0(Dt),
  XI = i0(or),
  QI = s0(or),
  ZI = k0(sf),
  JI = M0(sf),
  eL = I0(Ms),
  tL = rl(Dt) || Mo(Ms),
  rL = y0(Dt),
  nL = a0(or),
  oL = A0(),
  iL = Pr(),
  sL = _0(),
  aL = D0(),
  lL = O0(),
  cL = Mo(Ms),
  uL = rl(Dt) && !Mo(Ms),
  dL = c0(bn),
  fL = u0(bn),
  pL = E0(Dt),
  hL = C0(Dt),
  mL = function (t) {
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
    return L0({ device: n, browser: o, os: i, engine: s, ua: a });
  },
  gL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return W0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  vL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return V0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  yL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return H0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  bL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return U0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  xL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return oc
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  wL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return F0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  SL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return z0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  EL = function (t) {
    var r = t.renderWithFragment,
      n = t.children;
    t.viewClassName, t.style;
    var o = yr(t, ['renderWithFragment', 'children', 'viewClassName', 'style']);
    return N0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  CL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return $0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  PL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return j0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  TL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return B0
      ? r
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', o, n)
      : null;
  },
  RL = function (t) {
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
        ? Fe.createElement(At.Fragment, null, n)
        : Fe.createElement('div', i, n)
      : null;
  };
function kL(e) {
  return (function (t) {
    xI(r, t);
    function r(n) {
      var o;
      return (
        gI(this, r),
        (o = SI(this, $u(r).call(this, n))),
        (o.isEventListenerAdded = !1),
        (o.handleOrientationChange = o.handleOrientationChange.bind(xa(o))),
        (o.onOrientationChange = o.onOrientationChange.bind(xa(o))),
        (o.onPageLoad = o.onPageLoad.bind(xa(o))),
        (o.state = { isLandscape: !1, isPortrait: !1 }),
        o
      );
    }
    return (
      yI(r, [
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
              oc &&
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
              Lu({}, this.props, {
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
function ML() {
  var e = At.useState(function () {
      var i = window.innerWidth > window.innerHeight ? 90 : 0;
      return {
        isPortrait: i === 0,
        isLandscape: i === 90,
        orientation: i === 0 ? 'portrait' : 'landscape'
      };
    }),
    t = EI(e, 2),
    r = t[0],
    n = t[1],
    o = At.useCallback(
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
    At.useEffect(
      function () {
        return (
          (typeof window > 'u' ? 'undefined' : Ii(window)) !== void 0 &&
            oc &&
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
function q0(e) {
  var t = e || window.navigator.userAgent;
  return Os(t);
}
function OL(e) {
  var t = e || window.navigator.userAgent,
    r = q0(t),
    n = L0(r);
  return [n, r];
}
G.AndroidView = gL;
G.BrowserTypes = Ht;
var AL = (G.BrowserView = vL);
G.ConsoleView = PL;
G.CustomView = RL;
G.IEView = yL;
G.IOSView = bL;
G.MobileOnlyView = EL;
var _L = (G.MobileView = xL);
G.OsTypes = ei;
G.SmartTVView = CL;
G.TabletView = wL;
G.WearableView = TL;
G.WinPhoneView = SL;
G.browserName = YI;
G.browserVersion = KI;
G.deviceDetect = $I;
G.deviceType = nL;
G.engineName = ZI;
G.engineVersion = JI;
G.fullBrowserVersion = GI;
G.getSelectorsByUserAgent = mL;
G.getUA = eL;
G.isAndroid = W0;
G.isBrowser = V0;
G.isChrome = VI;
G.isChromium = NI;
G.isConsole = j0;
G.isDesktop = FI;
G.isEdge = tL;
G.isEdgeChromium = cL;
G.isElectron = lL;
G.isEmbedded = jI;
G.isFirefox = WI;
G.isIE = H0;
G.isIOS = U0;
G.isIOS13 = oL;
G.isIPad13 = iL;
G.isIPhone13 = sL;
G.isIPod13 = aL;
G.isLegacyEdge = uL;
G.isMIUI = pL;
G.isMacOs = fL;
G.isMobile = oc;
G.isMobileOnly = N0;
G.isMobileSafari = BI;
G.isOpera = UI;
G.isSafari = zI;
G.isSamsungBrowser = hL;
G.isSmartTV = $0;
G.isTablet = F0;
G.isWearable = B0;
G.isWinPhone = z0;
G.isWindows = dL;
G.isYandex = rL;
G.mobileModel = QI;
G.mobileVendor = XI;
G.osName = qI;
G.osVersion = HI;
G.parseUserAgent = Os;
G.setUserAgent = OI;
G.useDeviceData = q0;
G.useDeviceSelectors = OL;
G.useMobileOrientation = ML;
G.withOrientationChange = kL;
var $c = {};
const DL = Dr(hM);
var xm;
function As() {
  return (
    xm ||
      ((xm = 1),
      (function (e) {
        'use client';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            }
          });
        var t = DL;
      })($c)),
    $c
  );
}
var cf = {},
  IL = Kn;
Object.defineProperty(cf, '__esModule', { value: !0 });
var Bu = (cf.default = void 0),
  LL = IL(As()),
  $L = P;
Bu = cf.default = (0, LL.default)(
  (0, $L.jsx)('path', { d: 'm7 10 5 5 5-5z' }),
  'ArrowDropDownOutlined'
);
var uf = {},
  jL = Kn;
Object.defineProperty(uf, '__esModule', { value: !0 });
var df = (uf.default = void 0),
  BL = jL(As()),
  NL = P;
df = uf.default = (0, BL.default)(
  (0, NL.jsx)('circle', { cx: '12', cy: '12', r: '8' }),
  'FiberManualRecord'
);
const ff = ({ item: e, level: t }) => {
  const r = dt(),
    n = Uo(),
    { pathname: o } = gn(),
    i = dn((c) => c.customization),
    s = es(r.breakpoints.down('lg'));
  e.icon
    ? e.icon
    : (i.isOpen.findIndex((c) => c === (e == null ? void 0 : e.id)) > -1,
      i.isOpen.findIndex((c) => c === (e == null ? void 0 : e.id)) > -1,
      t > 0);
  let a = '_self';
  e.target && (a = '_blank'),
    w.forwardRef((c, u) => P.jsx(In, { ref: u, ...c, to: e.url, target: a })),
    e != null && e.external && e.url;
  const l = (c) => {
    n({ type: ja, id: c }), s && n({ type: vd, opened: !1 });
  };
  return (
    w.useEffect(() => {
      o.includes(e.url) && n({ type: ja, id: e.id });
    }, [o, e.id, e.url, n]),
    P.jsxs(ss, {
      component: w.forwardRef((c, u) => P.jsx(In, { ref: u, ...c, to: e.url })),
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
          P.jsx(Qa, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18, fontSize: 'large' },
            children: P.jsx('i', { class: e.icon })
          }),
        P.jsx(Za, {
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
          P.jsx(Cb, {
            color: e.chip.color,
            variant: e.chip.variant,
            size: e.chip.size,
            label: e.chip.label,
            avatar: e.chip.avatar && P.jsx(nc, { children: e.chip.avatar })
          })
      ]
    })
  );
};
ff.propTypes = { item: W.object.isRequired, level: W.number.isRequired };
const pf = ({ menu: e, level: t }) => {
  var p;
  const r = dt(),
    n = dn((h) => h.customization);
  gs(), Uo(), es(r.breakpoints.down('lg'));
  const [o, i] = w.useState(!1),
    [s, a] = w.useState(null),
    l = () => {
      i(!o), a(s ? null : e.id), e == null || e.id;
    },
    { pathname: c } = gn(),
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
                return P.jsx(pf, { menu: h, level: t + 1 }, h.id);
              case 'item':
                return P.jsx(ff, { item: h, level: t + 1 }, h.id);
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
      : P.jsx(df, {
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
          P.jsx(Qa, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18 },
            children: m
          }),
          P.jsx(Za, {
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
            ? P.jsx(FD, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
            : P.jsx(ND, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
        ]
      }),
      P.jsx(Jl, {
        in: o,
        timeout: 'auto',
        unmountOnExit: !0,
        children: P.jsx(nf, {
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
pf.propTypes = { menu: W.object, level: W.number };
const G0 = ({ item: e }) => {
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
                return P.jsx(pf, { menu: l, level: 1 }, l.id);
              case 'item':
                return P.jsx(ff, { item: l, level: 1 }, l.id);
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
    children: P.jsxs(nf, {
      children: [
        ((s = e.children) == null ? void 0 : s.length) > 0 &&
          P.jsxs(ss, {
            onClick: n,
            children: [
              P.jsx(Se, { variant: 'body1', children: e.title }),
              t
                ? P.jsx(Bu, { fontSize: 'small' })
                : P.jsx(Bu, { fontSize: 'small' })
            ]
          }),
        ((a = e.children) == null ? void 0 : a.length) === 0 && o,
        ' ',
        t &&
          P.jsx(Jl, { in: t, timeout: 'auto', unmountOnExit: !0, children: o })
      ]
    })
  });
};
G0.propTypes = { item: W.object };
const FL = { IconDashboard: VD },
  VL = {
    id: 'dashboard',
    type: 'group',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: FL.IconDashboard,
        breadcrumbs: !1
      }
    ]
  },
  WL = { IconKey: zD },
  zL = {
    id: 'pages',
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: WL.IconKey,
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
  UL = { IconBrandChrome: BD, IconHelp: WD },
  HL = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: UL.IconBrandChrome,
        breadcrumbs: !1
      }
    ]
  },
  qL = {
    IconTypography: Fb,
    IconPalette: Bb,
    IconShadow: Nb,
    IconWindmill: Vb
  },
  GL = {
    id: 'planning',
    caption: 'Start a New Process',
    type: 'group',
    children: [
      {
        title: 'Planning',
        type: 'collapse',
        icon: qL.IconKey,
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
  KL = {
    IconTypography: Fb,
    IconPalette: Bb,
    IconShadow: Nb,
    IconWindmill: Vb
  },
  YL = {
    id: 'Production',
    caption: 'Start a New Process',
    type: 'group',
    children: [
      {
        title: 'Production',
        type: 'collapse',
        icon: KL.IconKey,
        children: [
          {
            id: 'TermsandConditions',
            title: 'Terms and Conditions ',
            type: 'item',
            url: '/Production/TermsandConditions',
            breadcrumbs: !1
          }
        ]
      }
    ]
  },
  jc = { items: [VL, GL, YL, HL, zL] },
  XL = async (e, t) => {
    try {
      const r = await fetch(
        `http://100.42.177.77:81/api/Menu/GetUserMenuByEmpId?empId=${e}`,
        { headers: { Authorization: `Bearer ${t}` } }
      );
      if (!r.ok) throw new Error('Failed to fetch menu items');
      const n = await r.json();
      return console.log('Fetched data:', n.result), n.result;
    } catch (r) {
      throw (console.error('Failed to fetch menu items:', r.message), r);
    }
  },
  wm = ({ empId: e, token: t }) => {
    const [r, n] = w.useState([]),
      [o, i] = w.useState(!0),
      [s, a] = w.useState(null),
      l = gs();
    if (
      (w.useEffect(() => {
        (async () => {
          try {
            const f = await XL(e, t);
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
      return P.jsx(G0, { item: d }, d.id);
    });
    return P.jsx(P.Fragment, { children: c });
  },
  y3 = 3,
  bo = 260,
  K0 = ({ drawerOpen: e, drawerToggle: t, window: r, empId: n, token: o }) => {
    const i = dt(),
      s = es(i.breakpoints.up('md'));
    console.log(o);
    const a = P.jsxs(P.Fragment, {
        children: [
          P.jsx(lt, {
            sx: { display: { xs: 'block', md: 'none' } },
            children: P.jsx(Db, {})
          }),
          P.jsx(AL, {
            children: P.jsx(qb, {
              component: 'div',
              style: {
                height: s ? 'calc(100vh - 88px)' : 'calc(100vh - 56px)',
                paddingLeft: '16px',
                paddingRight: '16px'
              },
              children: P.jsx(wm, { empId: n, token: o })
            })
          }),
          P.jsx(_L, {
            children: P.jsx(lt, {
              sx: { px: 2 },
              children: P.jsx(wm, { empId: n, token: o })
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
        width: s ? bo : 'auto'
      },
      'aria-label': 'mailbox folders',
      children: P.jsx(T_, {
        container: l,
        variant: 'persistent',
        anchor: 'left',
        open: e,
        onClose: t,
        sx: {
          '& .MuiDrawer-paper': {
            width: bo,
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
K0.propTypes = {
  drawerOpen: W.bool,
  drawerToggle: W.func,
  window: W.object,
  empId: W.string.isRequired,
  token: W.string.isRequired
};
var hf = {},
  QL = Kn;
Object.defineProperty(hf, '__esModule', { value: !0 });
var wa = (hf.default = void 0),
  ZL = QL(As()),
  Sm = P;
wa = hf.default = (0, ZL.default)(
  [
    (0, Sm.jsx)(
      'path',
      {
        d: 'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z'
      },
      '0'
    ),
    (0, Sm.jsx)(
      'path',
      { d: 'M7 5v4H4V5zm13 0v4h-3V5zm0 10v4h-3v-4z', opacity: '.3' },
      '1'
    )
  ],
  'AccountTreeTwoTone'
);
var mf = {},
  JL = Kn;
Object.defineProperty(mf, '__esModule', { value: !0 });
var Nu = (mf.default = void 0),
  e$ = JL(As()),
  t$ = P;
Nu = mf.default = (0, e$.default)(
  (0, t$.jsx)('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }),
  'Home'
);
var gf = {},
  r$ = Kn;
Object.defineProperty(gf, '__esModule', { value: !0 });
var Fu = (gf.default = void 0),
  n$ = r$(As()),
  Em = P;
Fu = gf.default = (0, n$.default)(
  [
    (0, Em.jsx)(
      'path',
      {
        d: 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5z'
      },
      '0'
    ),
    (0, Em.jsx)(
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
const Y0 = ({
  card: e,
  custom: t = !1,
  divider: r = !1,
  heading: n,
  icon: o = !0,
  icons: i,
  links: s,
  maxItems: a,
  rightAlign: l = !0,
  separator: c = jb,
  title: u = !0,
  titleBottom: f,
  sx: d,
  ...m
}) => {
  const p = dt(),
    h = gn(),
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
    (B = jc == null ? void 0 : jc.items) == null ||
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
      : P.jsx(qD, { stroke: 1.5, size: '16px' });
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
        ...(v.url && { component: In, to: v.url }),
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
      (I = P.jsxs(Ya, {
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
                  children: P.jsxs(Ic, {
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
                        component: In,
                        to: '/',
                        color: 'textSecondary',
                        variant: 'subtitle1',
                        sx: E,
                        children: [
                          i && P.jsx(Fu, { style: y }),
                          o &&
                            !i &&
                            P.jsx(Nu, { style: { ...y, marginRight: 0 } }),
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
          e === !1 && r !== !1 && P.jsx(Fo, { sx: { mt: 2 } })
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
    let B = P.jsxs(Ic, {
      'aria-label': 'breadcrumb',
      maxItems: a || 8,
      separator: R,
      sx: { '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } },
      children: [
        P.jsxs(Se, {
          component: In,
          to: '/',
          color: 'textSecondary',
          variant: 'subtitle1',
          sx: E,
          children: [
            i && P.jsx(Fu, { style: y }),
            o && !i && P.jsx(Nu, { style: { ...y, marginRight: 0 } }),
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
      (B = P.jsx(Ic, {
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
                      ...(j.to && { component: In, to: j.to }),
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
        (I = P.jsxs(Ya, {
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
            e === !1 && r !== !1 && P.jsx(Fo, { sx: { mt: 2 } })
          ]
        }));
  }
  return I;
};
Y0.propTypes = {
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
const o$ = le('main', {
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
      marginLeft: t ? 0 : -(bo - 20),
      width: `calc(100% - ${bo}px)`
    },
    [e.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${bo}px)`,
      padding: '16px'
    },
    [e.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${bo}px)`,
      padding: '16px',
      marginRight: '10px'
    },
    '&::-webkit-scrollbar': { width: '0px', height: '0px' }
  })),
  i$ = () => {
    const e = localStorage.getItem('empId'),
      t = dt(),
      r = es(t.breakpoints.down('md'));
    es(t.breakpoints.down('sm'));
    const n = dn((l) => l.customization.opened),
      o = Uo(),
      i = () => {
        o({ type: vd, opened: !n });
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
          P.jsx(Rb, {}),
          P.jsx(dO, {
            className: '.css-h4y409-MuiList-root ',
            position: 'absolute',
            color: 'transparent',
            elevation: 0,
            sx: {
              bgcolor: t.palette.background.error,
              transition: n ? t.transitions.create('width') : 'none'
            },
            children: P.jsx(ED, {
              children: P.jsx(Kb, { handleLeftDrawerToggle: i })
            })
          }),
          P.jsx(K0, {
            drawerOpen: r ? !n : n,
            drawerToggle: i,
            empId: e,
            token: s
          }),
          P.jsxs(o$, {
            theme: t,
            open: n,
            children: [
              P.jsx(Y0, {
                separator: jb,
                navigation,
                icon: !0,
                title: !0,
                rightAlign: !0
              }),
              P.jsx(Kv, {})
            ]
          })
        ]
      })
    );
  },
  s$ = () =>
    P.jsx(lt, {
      sx: { position: 'fixed', top: 0, left: 0, zIndex: 1301, width: '100%' },
      children: P.jsx(Z_, { color: 'primary' })
    }),
  pt = (e) => (t) =>
    P.jsx(w.Suspense, {
      fallback: P.jsx(s$, {}),
      children: P.jsx(e, { ...t })
    }),
  a$ = () => !!localStorage.getItem('authToken'),
  Pt = ({ element: e, ...t }) =>
    a$() ? P.jsx(e, { ...t }) : P.jsx(PC, { to: '/' }),
  l$ = pt(
    w.lazy(() =>
      ft(() => import('./index-BKqxiHO_.js'), __vite__mapDeps([0, 1, 2, 3]))
    )
  ),
  c$ = pt(
    w.lazy(() =>
      ft(
        () => import('./NewCollection-nprn4FEa.js'),
        __vite__mapDeps([4, 1, 5, 3, 6, 7, 8, 2, 9, 10, 11])
      )
    )
  ),
  u$ = pt(
    w.lazy(() =>
      ft(
        () => import('./NewDesign-DdB9wTr8.js'),
        __vite__mapDeps([12, 1, 5, 3, 6, 10, 7, 8, 2, 9, 11])
      )
    )
  ),
  d$ = pt(
    w.lazy(() =>
      ft(
        () => import('./PlanningProcess-D3BOLvlK.js'),
        __vite__mapDeps([13, 1, 5, 3, 14, 8, 2, 9, 15, 16, 7])
      )
    )
  ),
  f$ = pt(
    w.lazy(() =>
      ft(
        () => import('./Roles-mOdQgmBg.js'),
        __vite__mapDeps([17, 1, 5, 3, 9, 8, 2])
      )
    )
  ),
  p$ = pt(w.lazy(() => ft(() => Promise.resolve().then(() => TV), void 0))),
  h$ = pt(
    w.lazy(() =>
      ft(
        () => import('./MainMenu-Cqs04K83.js'),
        __vite__mapDeps([18, 1, 5, 3, 9, 8, 2, 19, 11])
      )
    )
  ),
  m$ = pt(
    w.lazy(() =>
      ft(
        () => import('./SubMenu-eVVL6Dk_.js'),
        __vite__mapDeps([19, 1, 5, 3, 9, 8, 2])
      )
    )
  ),
  g$ = pt(
    w.lazy(() =>
      ft(
        () => import('./Users-2Lxpfb-s.js'),
        __vite__mapDeps([20, 1, 5, 3, 15, 9, 8, 2, 16])
      )
    )
  ),
  v$ = pt(
    w.lazy(() =>
      ft(
        () => import('./PrePlanningCreation-DxeSRUog.js'),
        __vite__mapDeps([21, 1, 5, 3, 7, 8, 2, 6, 11])
      )
    )
  ),
  y$ = pt(
    w.lazy(() =>
      ft(
        () => import('./TermsandConditions-C0Wxk2QK.js'),
        __vite__mapDeps([22, 1, 5, 3, 23, 24, 9, 8, 2, 11])
      )
    )
  ),
  b$ = pt(
    w.lazy(() =>
      ft(
        () => import('./ProductionBatch-BFbr2S9g.js'),
        __vite__mapDeps([25, 1, 5, 3, 23, 8, 2, 9, 15, 11])
      )
    )
  ),
  x$ = pt(
    w.lazy(() =>
      ft(
        () => import('./ProductionProcess-D_xgju11.js'),
        __vite__mapDeps([26, 1, 5, 3, 23, 24, 9, 8, 2, 11])
      )
    )
  ),
  w$ = pt(
    w.lazy(() =>
      ft(
        () => import('./ShrinkageWastageConfiguration-DBzK8Za5.js'),
        __vite__mapDeps([27, 1, 5, 3, 9, 8, 2])
      )
    )
  ),
  S$ = pt(
    w.lazy(() =>
      ft(
        () => import('./index-8Krrw-YO.js'),
        __vite__mapDeps([28, 1, 14, 5, 3, 8, 2, 9])
      )
    )
  ),
  E$ = pt(
    w.lazy(() =>
      ft(() => import('./WelcomePage-CqMuPjmD.js'), __vite__mapDeps([29, 1]))
    )
  ),
  C$ = {
    path: '/',
    element: P.jsx(i$, {}),
    children: [
      { path: 'dashboard', element: P.jsx(Pt, { element: l$ }) },
      {
        path: 'UserManagement',
        children: [
          { path: 'Role', element: P.jsx(Pt, { element: f$ }) },
          { path: 'Application', element: P.jsx(Pt, { element: p$ }) },
          { path: 'MainMenu', element: P.jsx(Pt, { element: h$ }) },
          { path: 'SubMenu', element: P.jsx(Pt, { element: m$ }) },
          { path: 'Users', element: P.jsx(Pt, { element: g$ }) }
        ]
      },
      {
        path: 'Planning',
        children: [
          { path: 'NewCollection', element: P.jsx(Pt, { element: c$ }) },
          { path: 'NewDesign', element: P.jsx(Pt, { element: u$ }) },
          { path: 'PlanningProcess', element: P.jsx(Pt, { element: d$ }) },
          { path: 'PrePlanningCreation', element: P.jsx(Pt, { element: v$ }) }
        ]
      },
      {
        path: 'Production',
        children: [
          { path: 'ProductionBatch', element: P.jsx(Pt, { element: b$ }) },
          { path: 'ProductionProcess', element: P.jsx(Pt, { element: x$ }) }
        ]
      },
      {
        path: 'Configuration',
        children: [
          {
            path: 'ShrinkageWastageConfiguration',
            element: P.jsx(Pt, { element: w$ })
          },
          { path: 'TermsandConditions', element: P.jsx(Pt, { element: y$ }) }
        ]
      },
      { path: 'sample-page', element: P.jsx(Pt, { element: S$ }) },
      { path: 'welcome', element: P.jsx(Pt, { element: E$ }) }
    ]
  },
  X0 = de.forwardRef(
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
      P.jsxs(Ya, {
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
            P.jsx(Xa, {
              sx: { p: 2.5 },
              title: P.jsx(Se, { variant: 'h5', children: a }),
              action: o
            }),
          n &&
            a &&
            P.jsx(Xa, {
              sx: { p: 2.5 },
              title: P.jsx(Se, { variant: 'h4', children: a }),
              action: o
            }),
          a && P.jsx(Fo, {}),
          t &&
            P.jsx(Tb, {
              sx: { p: 2.5, ...s },
              className: r || '',
              children: e
            }),
          !t && e
        ]
      })
  );
X0.propTypes = {
  children: W.node,
  content: W.bool,
  contentClass: W.string,
  darkTitle: W.bool,
  secondary: W.oneOfType([W.node, W.string, W.object]),
  sx: W.object,
  contentSX: W.object,
  title: W.oneOfType([W.node, W.string, W.object])
};
X0.defaultProps = { content: !0 };
const Q0 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  ic = w.createContext({}),
  vf = w.createContext(null),
  yf = typeof document < 'u',
  P$ = yf ? w.useLayoutEffect : w.useEffect,
  Z0 = w.createContext({ strict: !1 }),
  bf = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  T$ = 'framerAppearId',
  J0 = 'data-' + bf(T$),
  R$ = { skipAnimations: !1, useManualTiming: !1 };
class Cm {
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
function k$(e) {
  let t = new Cm(),
    r = new Cm(),
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
  M$ = 40;
function ex(e, t) {
  let r = !1,
    n = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ra.reduce((f, d) => ((f[d] = k$(() => (r = !0))), f), {}),
    s = (f) => {
      i[f].process(o);
    },
    a = () => {
      const f = performance.now();
      (r = !1),
        (o.delta = n ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, M$), 1)),
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
const { schedule: xf, cancel: b3 } = ex(queueMicrotask, !1);
function xo(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
const tx = w.createContext({});
let Pm = !1;
function O$(e, t, r, n, o) {
  const { visualElement: i } = w.useContext(ic),
    s = w.useContext(Z0),
    a = w.useContext(vf),
    l = w.useContext(Q0).reducedMotion,
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
    f = w.useContext(tx);
  u &&
    !u.projection &&
    o &&
    (u.type === 'html' || u.type === 'svg') &&
    _$(c.current, r, o, f),
    w.useInsertionEffect(() => {
      u && u.update(r, a);
    });
  const d = w.useRef(!!(r[J0] && !window.HandoffComplete));
  return (
    P$(() => {
      u &&
        (u.updateFeatures(),
        xf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), Pm || ((Pm = !0), queueMicrotask(A$))));
    }),
    u
  );
}
function A$() {
  window.HandoffComplete = !0;
}
function _$(e, t, r, n) {
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
    t['data-framer-portal-id'] ? void 0 : rx(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && xo(a)),
      visualElement: e,
      scheduleRender: () => e.scheduleRender(),
      animationType: typeof i == 'string' ? i : 'both',
      initialPromotionConfig: n,
      layoutScroll: l,
      layoutRoot: c
    });
}
function rx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rx(e.parent);
}
function D$(e, t, r) {
  return w.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : xo(r) && (r.current = n));
    },
    [t]
  );
}
function as(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function sc(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const wf = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit'
  ],
  Sf = ['initial', ...wf];
function ac(e) {
  return sc(e.animate) || Sf.some((t) => as(e[t]));
}
function nx(e) {
  return !!(ac(e) || e.variants);
}
function I$(e, t) {
  if (ac(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || as(r) ? r : void 0,
      animate: as(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function L$(e) {
  const { initial: t, animate: r } = I$(e, w.useContext(ic));
  return w.useMemo(() => ({ initial: t, animate: r }), [Tm(t), Tm(r)]);
}
function Tm(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Rm = {
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
  Vo = {};
for (const e in Rm) Vo[e] = { isEnabled: (t) => Rm[e].some((r) => !!t[r]) };
function $$(e) {
  for (const t in e) Vo[t] = { ...Vo[t], ...e[t] };
}
const ox = w.createContext({}),
  j$ = Symbol.for('motionComponentSymbol'),
  _t = (e) => e;
let Vu = _t;
function B$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o
}) {
  e && $$(e);
  function i(a, l) {
    let c;
    const u = { ...w.useContext(Q0), ...a, layoutId: N$(a) },
      { isStatic: f } = u,
      d = L$(a),
      m = n(a, f);
    if (!f && yf) {
      F$();
      const p = V$(u);
      (c = p.MeasureLayout),
        (d.visualElement = O$(o, m, u, t, p.ProjectionNode));
    }
    return P.jsxs(ic.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? P.jsx(c, { visualElement: d.visualElement, ...u })
          : null,
        r(o, a, D$(m, d.visualElement, l), m, f, d.visualElement)
      ]
    });
  }
  const s = w.forwardRef(i);
  return (s[j$] = o), s;
}
function N$({ layoutId: e }) {
  const t = w.useContext(ox).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function F$(e, t) {
  w.useContext(Z0).strict;
}
function V$(e) {
  const { drag: t, layout: r } = Vo;
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
function W$(e) {
  function t(n, o = {}) {
    return B$(e(n, o));
  }
  if (typeof Proxy > 'u') return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const z$ = [
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
function Ef(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(z$.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const nl = {};
function U$(e) {
  Object.assign(nl, e);
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
  Yn = new Set(_s);
function ix(e, { layout: t, layoutId: r }) {
  return (
    Yn.has(e) ||
    e.startsWith('origin') ||
    ((t || r !== void 0) && (!!nl[e] || e === 'opacity'))
  );
}
const Mt = (e) => !!(e && e.getVelocity),
  H$ = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  q$ = _s.length;
function G$(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o
) {
  let i = '';
  for (let s = 0; s < q$; s++) {
    const a = _s[s];
    if (e[a] !== void 0) {
      const l = H$[a] || a;
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
const sx = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  ax = sx('--'),
  K$ = sx('var(--'),
  Cf = (e) => (K$(e) ? Y$.test(e.split('/*')[0].trim()) : !1),
  Y$ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  X$ = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  cn = (e, t, r) => (r > t ? t : r < e ? e : r),
  ti = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e
  },
  Li = { ...ti, transform: (e) => cn(0, 1, e) },
  na = { ...ti, default: 1 },
  $i = (e) => Math.round(e * 1e5) / 1e5,
  Pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  Q$ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  Z$ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ds(e) {
  return typeof e == 'string';
}
function J$(e) {
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
  ej = Is('vh'),
  tj = Is('vw'),
  km = {
    ...Mr,
    parse: (e) => Mr.parse(e) / 100,
    transform: (e) => Mr.transform(e * 100)
  },
  Mm = { ...ti, transform: Math.round },
  lx = {
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
    originX: km,
    originY: km,
    originZ: ie,
    zIndex: Mm,
    backgroundPositionX: ie,
    backgroundPositionY: ie,
    fillOpacity: Li,
    strokeOpacity: Li,
    numOctaves: Mm
  };
function Tf(e, t, r, n) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    c = !1,
    u = !0;
  for (const f in t) {
    const d = t[f];
    if (ax(f)) {
      i[f] = d;
      continue;
    }
    const m = lx[f],
      p = X$(d, m);
    if (Yn.has(f)) {
      if (((l = !0), (s[f] = p), !u)) continue;
      d !== (m.default || 0) && (u = !1);
    } else f.startsWith('origin') ? ((c = !0), (a[f] = p)) : (o[f] = p);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = G$(e.transform, r, u, n))
        : o.transform && (o.transform = 'none')),
    c)
  ) {
    const { originX: f = '50%', originY: d = '50%', originZ: m = 0 } = a;
    o.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Rf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function cx(e, t, r) {
  for (const n in t) !Mt(t[n]) && !ix(n, r) && (e[n] = t[n]);
}
function rj({ transformTemplate: e }, t, r) {
  return w.useMemo(() => {
    const n = Rf();
    return (
      Tf(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function nj(e, t, r) {
  const n = e.style || {},
    o = {};
  return cx(o, n, e), Object.assign(o, rj(e, t, r)), o;
}
function oj(e, t, r) {
  const n = {},
    o = nj(e, t, r);
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
const ij = new Set([
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
function ol(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    ij.has(e)
  );
}
let ux = (e) => !ol(e);
function sj(e) {
  e && (ux = (t) => (t.startsWith('on') ? !ol(t) : e(t)));
}
try {
  sj(require('@emotion/is-prop-valid').default);
} catch {}
function aj(e, t, r) {
  const n = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((ux(o) ||
        (r === !0 && ol(o)) ||
        (!t && !ol(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]));
  return n;
}
function Om(e, t, r) {
  return typeof e == 'string' ? e : ie.transform(t + r * e);
}
function lj(e, t, r) {
  const n = Om(t, e.x, e.width),
    o = Om(r, e.y, e.height);
  return `${n} ${o}`;
}
const cj = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  uj = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function dj(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? cj : uj;
  e[i.offset] = ie.transform(-n);
  const s = ie.transform(t),
    a = ie.transform(r);
  e[i.array] = `${s} ${a}`;
}
function kf(
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
  if ((Tf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: p, dimensions: h } = e;
  m.transform && (h && (p.transform = m.transform), delete m.transform),
    h &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = lj(
        h,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    r !== void 0 && (m.y = r),
    n !== void 0 && (m.scale = n),
    s !== void 0 && dj(m, s, a, l, !1);
}
const dx = () => ({ ...Rf(), attrs: {} }),
  Mf = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function fj(e, t, r, n) {
  const o = w.useMemo(() => {
    const i = dx();
    return (
      kf(i, t, { enableHardwareAcceleration: !1 }, Mf(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    cx(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function pj(e = !1) {
  return (r, n, o, { latestValues: i }, s) => {
    const l = (Ef(r) ? fj : oj)(n, i, s, r),
      c = aj(n, typeof r == 'string', e),
      u = r !== w.Fragment ? { ...c, ...l, ref: o } : {},
      { children: f } = n,
      d = w.useMemo(() => (Mt(f) ? f.get() : f), [f]);
    return w.createElement(r, { ...u, children: d });
  };
}
function fx(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const px = new Set([
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
function hx(e, t, r, n) {
  fx(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(px.has(o) ? o : bf(o), t.attrs[o]);
}
function Of(e, t, r) {
  var n;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Mt(o[s]) ||
      (t.style && Mt(t.style[s])) ||
      ix(s, e) ||
      ((n = r == null ? void 0 : r.getValue(s)) === null || n === void 0
        ? void 0
        : n.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function mx(e, t, r) {
  const n = Of(e, t, r);
  for (const o in e)
    if (Mt(e[o]) || Mt(t[o])) {
      const i =
        _s.indexOf(o) !== -1
          ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      n[i] = e[o];
    }
  return n;
}
function Am(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function Af(e, t, r, n) {
  if (typeof t == 'function') {
    const [o, i] = Am(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [o, i] = Am(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  return t;
}
function hj(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wu = (e) => Array.isArray(e),
  mj = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  gj = (e) => (Wu(e) ? e[e.length - 1] || 0 : e);
function Sa(e) {
  const t = Mt(e) ? e.get() : e;
  return mj(t) ? t.toValue() : t;
}
function vj(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i
) {
  const s = { latestValues: yj(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const gx = (e) => (t, r) => {
  const n = w.useContext(ic),
    o = w.useContext(vf),
    i = () => vj(e, t, n, o);
  return r ? i() : hj(i);
};
function yj(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const d in i) o[d] = Sa(i[d]);
  let { initial: s, animate: a } = e;
  const l = ac(e),
    c = nx(e);
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
      !sc(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const p = Af(e, m);
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
    cancel: Gr,
    state: yt,
    steps: Bc
  } = ex(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : _t, !0),
  bj = {
    useVisualState: gx({
      scrapeMotionValuesFromProps: mx,
      createRenderState: dx,
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
            kf(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              Mf(t.tagName),
              e.transformTemplate
            ),
              hx(t, r);
          });
      }
    })
  },
  xj = {
    useVisualState: gx({
      scrapeMotionValuesFromProps: Of,
      createRenderState: Rf
    })
  };
function wj(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Ef(e) ? bj : xj),
    preloadedFeatures: r,
    useRender: pj(t),
    createVisualElement: n,
    Component: e
  };
}
function Nr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const vx = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1;
function lc(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Sj = (e) => (t) => vx(t) && e(t, lc(t));
function Vr(e, t, r, n) {
  return Nr(e, t, Sj(r), n);
}
const Ej = (e, t) => (r) => t(e(r)),
  Wr = (...e) => e.reduce(Ej);
function yx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const _m = yx('dragHorizontal'),
  Dm = yx('dragVertical');
function bx(e) {
  let t = !1;
  if (e === 'y') t = Dm();
  else if (e === 'x') t = _m();
  else {
    const r = _m(),
      n = Dm();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function xx() {
  const e = bx(!0);
  return e ? (e(), !1) : !0;
}
class xn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Im(e, t) {
  const r = t ? 'pointerenter' : 'pointerleave',
    n = t ? 'onHoverStart' : 'onHoverEnd',
    o = (i, s) => {
      if (i.pointerType === 'touch' || xx()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive('whileHover', t);
      const l = a[n];
      l && ke.postRender(() => l(i, s));
    };
  return Vr(e.current, r, o, { passive: !e.getProps()[n] });
}
class Cj extends xn {
  mount() {
    this.unmount = Wr(Im(this.node, !0), Im(this.node, !1));
  }
  unmount() {}
}
class Pj extends xn {
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
const wx = (e, t) => (t ? (e === t ? !0 : wx(e, t.parentElement)) : !1);
function Nc(e, t) {
  if (!t) return;
  const r = new PointerEvent('pointer' + e);
  t(r, lc(r));
}
class Tj extends xn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = _t),
      (this.removeEndListeners = _t),
      (this.removeAccessibleListeners = _t),
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
                d = !f && !wx(this.node.current, a.target) ? u : c;
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
                Nc('up', (l, c) => {
                  const { onTap: u } = this.node.getProps();
                  u && ke.postRender(() => u(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Nr(this.node.current, 'keyup', s)),
              Nc('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          r = Nr(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && Nc('cancel', (i, s) => this.cancelPress(i, s));
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
      !xx()
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
const zu = new WeakMap(),
  Fc = new WeakMap(),
  Rj = (e) => {
    const t = zu.get(e.target);
    t && t(e);
  },
  kj = (e) => {
    e.forEach(Rj);
  };
function Mj({ root: e, ...t }) {
  const r = e || document;
  Fc.has(r) || Fc.set(r, {});
  const n = Fc.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(kj, { root: e, ...t })), n[o];
}
function Oj(e, t, r) {
  const n = Mj(t);
  return (
    zu.set(e, r),
    n.observe(e),
    () => {
      zu.delete(e), n.unobserve(e);
    }
  );
}
const Aj = { some: 0, all: 1 };
class _j extends xn {
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
        threshold: typeof o == 'number' ? o : Aj[o]
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
    return Oj(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: r } = this.node;
    ['amount', 'margin', 'root'].some(Dj(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Dj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Ij = {
  inView: { Feature: _j },
  tap: { Feature: Tj },
  focus: { Feature: Pj },
  hover: { Feature: Cj }
};
function Sx(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function cc(e, t, r) {
  const n = e.getProps();
  return Af(n, t, r !== void 0 ? r : n.custom, e);
}
const nn = (e) => e * 1e3,
  zr = (e) => e / 1e3,
  Lj = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  $j = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  jj = { type: 'keyframes', duration: 0.8 },
  Bj = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Nj = (e, { keyframes: t }) =>
    t.length > 2
      ? jj
      : Yn.has(e)
        ? e.startsWith('scale')
          ? $j(t[1])
          : Lj
        : Bj;
function Fj({
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
function _f(e, t) {
  return e[t] || e.default || e;
}
const Vj = (e) => e !== null;
function uc(e, { repeat: t, repeatType: r = 'loop' }, n) {
  const o = e.filter(Vj),
    i = t && r !== 'loop' && t % 2 === 1 ? 0 : o.length - 1;
  return !i || n === void 0 ? o[i] : n;
}
let Ea;
function Wj() {
  Ea = void 0;
}
const on = {
    now: () => (
      Ea === void 0 &&
        on.set(
          yt.isProcessing || R$.useManualTiming
            ? yt.timestamp
            : performance.now()
        ),
      Ea
    ),
    set: (e) => {
      (Ea = e), queueMicrotask(Wj);
    }
  },
  Ex = (e) => /^0[^.\s]+$/u.test(e);
function zj(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
      ? e === 'none' || e === '0' || Ex(e)
      : !0;
}
const Cx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Uj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Hj(e) {
  const t = Uj.exec(e);
  if (!t) return [,];
  const [, r, n, o] = t;
  return [`--${r ?? n}`, o];
}
function Px(e, t, r = 1) {
  const [n, o] = Hj(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const s = i.trim();
    return Cx(s) ? parseFloat(s) : s;
  }
  return Cf(o) ? Px(o, t, r + 1) : o;
}
const qj = new Set([
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
  Lm = (e) => e === ti || e === ie,
  $m = (e, t) => parseFloat(e.split(', ')[t]),
  jm =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/u);
      if (o) return $m(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/u);
        return i ? $m(i[1], e) : 0;
      }
    },
  Gj = new Set(['x', 'y', 'z']),
  Kj = _s.filter((e) => !Gj.has(e));
function Yj(e) {
  const t = [];
  return (
    Kj.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const Wo = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: jm(4, 13),
  y: jm(5, 14)
};
Wo.translateX = Wo.x;
Wo.translateY = Wo.y;
const Tx = (e) => (t) => t.test(e),
  Xj = { test: (e) => e === 'auto', parse: (e) => e },
  Rx = [ti, ie, Mr, Jr, tj, ej, Xj],
  Bm = (e) => Rx.find(Tx(e)),
  Nn = new Set();
let Uu = !1,
  Hu = !1;
function kx() {
  if (Hu) {
    const e = Array.from(Nn).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const o = Yj(n);
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
  (Hu = !1), (Uu = !1), Nn.forEach((e) => e.complete()), Nn.clear();
}
function Mx() {
  Nn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hu = !0);
  });
}
function Qj() {
  Mx(), kx();
}
class Df {
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
        ? (Nn.add(this),
          Uu || ((Uu = !0), ke.read(Mx), ke.resolveKeyframes(kx)))
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
      Nn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Nn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const If = (e, t) => (r) =>
    !!(
      (Ds(r) && Z$.test(r) && r.startsWith(e)) ||
      (t && !J$(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Ox = (e, t, r) => (n) => {
    if (!Ds(n)) return n;
    const [o, i, s, a] = n.match(Pf);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  },
  Zj = (e) => cn(0, 255, e),
  Vc = { ...ti, transform: (e) => Math.round(Zj(e)) },
  $n = {
    test: If('rgb', 'red'),
    parse: Ox('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      Vc.transform(e) +
      ', ' +
      Vc.transform(t) +
      ', ' +
      Vc.transform(r) +
      ', ' +
      $i(Li.transform(n)) +
      ')'
  };
function Jj(e) {
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
const qu = { test: If('#'), parse: Jj, transform: $n.transform },
  wo = {
    test: If('hsl', 'hue'),
    parse: Ox('hue', 'saturation', 'lightness'),
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
  Rt = {
    test: (e) => $n.test(e) || qu.test(e) || wo.test(e),
    parse: (e) =>
      $n.test(e) ? $n.parse(e) : wo.test(e) ? wo.parse(e) : qu.parse(e),
    transform: (e) =>
      Ds(e) ? e : e.hasOwnProperty('red') ? $n.transform(e) : wo.transform(e)
  };
function eB(e) {
  var t, r;
  return (
    isNaN(e) &&
    Ds(e) &&
    (((t = e.match(Pf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Q$)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const Ax = 'number',
  _x = 'color',
  tB = 'var',
  rB = 'var(',
  Nm = '${}',
  nB =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ls(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      nB,
      (l) => (
        Rt.test(l)
          ? (n.color.push(i), o.push(_x), r.push(Rt.parse(l)))
          : l.startsWith(rB)
            ? (n.var.push(i), o.push(tB), r.push(l))
            : (n.number.push(i), o.push(Ax), r.push(parseFloat(l))),
        ++i,
        Nm
      )
    )
    .split(Nm);
  return { values: r, split: a, indexes: n, types: o };
}
function Dx(e) {
  return ls(e).values;
}
function Ix(e) {
  const { split: t, types: r } = ls(e),
    n = t.length;
  return (o) => {
    let i = '';
    for (let s = 0; s < n; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = r[s];
        a === Ax
          ? (i += $i(o[s]))
          : a === _x
            ? (i += Rt.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const oB = (e) => (typeof e == 'number' ? 0 : e);
function iB(e) {
  const t = Dx(e);
  return Ix(e)(t.map(oB));
}
const un = {
    test: eB,
    parse: Dx,
    createTransformer: Ix,
    getAnimatableNone: iB
  },
  sB = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function aB(e) {
  const [t, r] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [n] = r.match(Pf) || [];
  if (!n) return e;
  const o = r.replace(n, '');
  let i = sB.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + '(' + i + o + ')';
}
const lB = /\b([a-z-]*)\(.*?\)/gu,
  Gu = {
    ...un,
    getAnimatableNone: (e) => {
      const t = e.match(lB);
      return t ? t.map(aB).join(' ') : e;
    }
  },
  cB = {
    ...lx,
    color: Rt,
    backgroundColor: Rt,
    outlineColor: Rt,
    fill: Rt,
    stroke: Rt,
    borderColor: Rt,
    borderTopColor: Rt,
    borderRightColor: Rt,
    borderBottomColor: Rt,
    borderLeftColor: Rt,
    filter: Gu,
    WebkitFilter: Gu
  },
  Lf = (e) => cB[e];
function Lx(e, t) {
  let r = Lf(e);
  return (
    r !== Gu && (r = un), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const uB = new Set(['auto', 'none', '0']);
function dB(e, t, r) {
  let n = 0,
    o;
  for (; n < e.length && !o; ) {
    const i = e[n];
    typeof i == 'string' && !uB.has(i) && ls(i).values.length && (o = e[n]),
      n++;
  }
  if (o && r) for (const i of t) e[i] = Lx(r, o);
}
class $x extends Df {
  constructor(t, r, n, o) {
    super(t, r, n, o, o == null ? void 0 : o.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == 'string' && ((c = c.trim()), Cf(c))) {
        const u = Px(c, r.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !qj.has(n) || t.length !== 2)) return;
    const [o, i] = t,
      s = Bm(o),
      a = Bm(i);
    if (s !== a)
      if (Lm(s) && Lm(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == 'string' && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let o = 0; o < t.length; o++) zj(t[o]) && n.push(o);
    n.length && dB(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t.current) return;
    n === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Wo[n](
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
    (o[s] = Wo[n](r.measureViewportBox(), window.getComputedStyle(r.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          r.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function jx(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Fm = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' &&
          (un.test(e) || e === '0') &&
          !e.startsWith('url('))
      );
function fB(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function pB(e, t, r, n) {
  const o = e[0];
  if (o === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const i = e[e.length - 1],
    s = Fm(o, t),
    a = Fm(i, t);
  return !s || !a ? !1 : fB(e) || (r === 'spring' && n);
}
class Bx {
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
    return !this._resolved && !this.hasAttemptedResolve && Qj(), this._resolved;
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
    if (!c && !pB(t, n, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(uc(t, this.options, r)),
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
function Nx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hB = 5;
function Fx(e, t, r) {
  const n = Math.max(t - hB, 0);
  return Nx(r - e(n), t - n);
}
const Wc = 0.001,
  mB = 0.01,
  gB = 10,
  vB = 0.05,
  yB = 1;
function bB({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1
}) {
  let o,
    i,
    s = 1 - t;
  (s = cn(vB, yB, s)),
    (e = cn(mB, gB, zr(e))),
    s < 1
      ? ((o = (c) => {
          const u = c * s,
            f = u * e,
            d = u - r,
            m = Ku(c, s),
            p = Math.exp(-f);
          return Wc - (d / m) * p;
        }),
        (i = (c) => {
          const f = c * s * e,
            d = f * r + r,
            m = Math.pow(s, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-f),
            h = Ku(Math.pow(c, 2), s);
          return ((-o(c) + Wc > 0 ? -1 : 1) * ((d - m) * p)) / h;
        }))
      : ((o = (c) => {
          const u = Math.exp(-c * e),
            f = (c - r) * e + 1;
          return -Wc + u * f;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            f = (r - c) * (e * e);
          return u * f;
        }));
  const a = 5 / e,
    l = wB(o, i, a);
  if (((e = nn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: s * 2 * Math.sqrt(n * c), duration: e };
  }
}
const xB = 12;
function wB(e, t, r) {
  let n = r;
  for (let o = 1; o < xB; o++) n = n - e(n) / t(n);
  return n;
}
function Ku(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const SB = ['duration', 'bounce'],
  EB = ['stiffness', 'damping', 'mass'];
function Vm(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function CB(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vm(e, EB) && Vm(e, SB)) {
    const r = bB(e);
    (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Vx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
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
    } = CB({ ...n, velocity: -zr(n.velocity || 0) }),
    m = f || 0,
    p = l / (2 * Math.sqrt(a * c)),
    h = i - o,
    v = zr(Math.sqrt(a / c)),
    x = Math.abs(h) < 5;
  r || (r = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
  let b;
  if (p < 1) {
    const g = Ku(v, p);
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
        g !== 0 && (p < 1 ? (E = Fx(b, g, y)) : (E = 0));
        const S = Math.abs(E) <= r,
          C = Math.abs(i - y) <= t;
        s.done = S && C;
      }
      return (s.value = s.done ? i : y), s;
    }
  };
}
function Wm({
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
      (S = Vx({
        keyframes: [d.value, p(d.value)],
        velocity: Fx(g, T, d.value),
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
const Wx = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  PB = 1e-7,
  TB = 12;
function RB(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = Wx(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > PB && ++a < TB);
  return s;
}
function Ls(e, t, r, n) {
  if (e === t && r === n) return _t;
  const o = (i) => RB(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : Wx(o(i), t, n));
}
const kB = Ls(0.42, 0, 1, 1),
  MB = Ls(0, 0, 0.58, 1),
  zx = Ls(0.42, 0, 0.58, 1),
  OB = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Ux = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Hx = (e) => (t) => 1 - e(1 - t),
  $f = (e) => 1 - Math.sin(Math.acos(e)),
  qx = Hx($f),
  AB = Ux($f),
  Gx = Ls(0.33, 1.53, 0.69, 0.99),
  jf = Hx(Gx),
  _B = Ux(jf),
  DB = (e) =>
    (e *= 2) < 1 ? 0.5 * jf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  zm = {
    linear: _t,
    easeIn: kB,
    easeInOut: zx,
    easeOut: MB,
    circIn: $f,
    circInOut: AB,
    circOut: qx,
    backIn: jf,
    backInOut: _B,
    backOut: Gx,
    anticipate: DB
  },
  Um = (e) => {
    if (Array.isArray(e)) {
      Vu(e.length === 4);
      const [t, r, n, o] = e;
      return Ls(t, r, n, o);
    } else if (typeof e == 'string') return Vu(zm[e] !== void 0), zm[e];
    return e;
  },
  cs = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  Ge = (e, t, r) => e + (t - e) * r;
function zc(e, t, r) {
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
function IB({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (o = zc(l, a, e + 1 / 3)), (i = zc(l, a, e)), (s = zc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n
  };
}
function il(e, t) {
  return (r) => (r > 0 ? t : e);
}
const Uc = (e, t, r) => {
    const n = e * e,
      o = r * (t * t - n) + n;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  LB = [qu, $n, wo],
  $B = (e) => LB.find((t) => t.test(e));
function Hm(e) {
  const t = $B(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === wo && (r = IB(r)), r;
}
const qm = (e, t) => {
    const r = Hm(e),
      n = Hm(t);
    if (!r || !n) return il(e, t);
    const o = { ...r };
    return (i) => (
      (o.red = Uc(r.red, n.red, i)),
      (o.green = Uc(r.green, n.green, i)),
      (o.blue = Uc(r.blue, n.blue, i)),
      (o.alpha = Ge(r.alpha, n.alpha, i)),
      $n.transform(o)
    );
  },
  Yu = new Set(['none', 'hidden']);
function jB(e, t) {
  return Yu.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function BB(e, t) {
  return (r) => Ge(e, t, r);
}
function Bf(e) {
  return typeof e == 'number'
    ? BB
    : typeof e == 'string'
      ? Cf(e)
        ? il
        : Rt.test(e)
          ? qm
          : VB
      : Array.isArray(e)
        ? Kx
        : typeof e == 'object'
          ? Rt.test(e)
            ? qm
            : NB
          : il;
}
function Kx(e, t) {
  const r = [...e],
    n = r.length,
    o = e.map((i, s) => Bf(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < n; s++) r[s] = o[s](i);
    return r;
  };
}
function NB(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Bf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n) r[i] = n[i](o);
    return r;
  };
}
function FB(e, t) {
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
const VB = (e, t) => {
  const r = un.createTransformer(t),
    n = ls(e),
    o = ls(t);
  return n.indexes.var.length === o.indexes.var.length &&
    n.indexes.color.length === o.indexes.color.length &&
    n.indexes.number.length >= o.indexes.number.length
    ? (Yu.has(e) && !o.values.length) || (Yu.has(t) && !n.values.length)
      ? jB(e, t)
      : Wr(Kx(FB(n, o), o.values), r)
    : il(e, t);
};
function Yx(e, t, r) {
  return typeof e == 'number' && typeof t == 'number' && typeof r == 'number'
    ? Ge(e, t, r)
    : Bf(e)(e, t);
}
function WB(e, t, r) {
  const n = [],
    o = r || Yx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || _t : t;
      a = Wr(l, a);
    }
    n.push(a);
  }
  return n;
}
function zB(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ((Vu(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = WB(t, n, o),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const f = cs(e[u], e[u + 1], c);
      return s[u](f);
    };
  return r ? (c) => l(cn(e[0], e[i - 1], c)) : l;
}
function UB(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = cs(0, t, n);
    e.push(Ge(r, 1, o));
  }
}
function HB(e) {
  const t = [0];
  return UB(t, e.length - 1), t;
}
function qB(e, t) {
  return e.map((r) => r * t);
}
function GB(e, t) {
  return e.map(() => t || zx).splice(0, e.length - 1);
}
function sl({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = 'easeInOut'
}) {
  const o = OB(n) ? n.map(Um) : Um(n),
    i = { done: !1, value: t[0] },
    s = qB(r && r.length === t.length ? r : HB(t), e),
    a = zB(s, t, { ease: Array.isArray(o) ? o : GB(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i)
  };
}
const Gm = 2e4;
function KB(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Gm; ) (t += r), (n = e.next(t));
  return t >= Gm ? 1 / 0 : t;
}
const YB = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => ke.update(t, !0),
      stop: () => Gr(t),
      now: () => (yt.isProcessing ? yt.timestamp : on.now())
    };
  },
  XB = { decay: Wm, inertia: Wm, tween: sl, keyframes: sl, spring: Vx },
  QB = (e) => e / 100;
class Nf extends Bx {
  constructor({ KeyframeResolver: t = Df, ...r }) {
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
      a = XB[r] || sl;
    let l, c;
    a !== sl &&
      typeof t[0] != 'number' &&
      ((l = Wr(QB, Yx(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === 'mirror' &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = KB(u));
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
      C && o !== void 0 && (E.value = uc(l, this.options, o)),
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
    const { driver: t = YB, onPlay: r } = this.options;
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
const Xx = (e) => Array.isArray(e) && typeof e[0] == 'number';
function Qx(e) {
  return !!(
    !e ||
    (typeof e == 'string' && e in Ff) ||
    Xx(e) ||
    (Array.isArray(e) && e.every(Qx))
  );
}
const Pi = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Ff = {
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
function ZB(e) {
  return Zx(e) || Ff.easeOut;
}
function Zx(e) {
  if (e) return Xx(e) ? Pi(e) : Array.isArray(e) ? e.map(ZB) : Ff[e];
}
function JB(
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
  const u = Zx(a);
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
const eN = jx(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  tN = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  al = 10,
  rN = 2e4;
function nN(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !Qx(e.ease);
}
function oN(e, t) {
  const r = new Nf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let n = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !n.done && i < rN; ) (n = r.sample(i)), o.push(n.value), (i += al);
  return { times: void 0, keyframes: o, duration: i - al, ease: 'linear' };
}
class Km extends Bx {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, keyframes: o } = this.options;
    (this.resolver = new $x(o, (i, s) => this.onKeyframesResolved(i, s), r, n)),
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
    if (nN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: m, ...p } = this.options,
        h = oN(t, p);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (i = h.times),
        (s = h.ease),
        (a = 'keyframes');
    }
    const u = JB(l.owner.current, c, t, {
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
            l.set(uc(t, this.options, r)),
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
      if (!r) return _t;
      const { animation: n } = r;
      (n.timeline = t), (n.onfinish = null);
    }
    return _t;
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
          d = new Nf({
            ...f,
            keyframes: n,
            duration: o,
            type: i,
            ease: s,
            times: a,
            isGenerator: !0
          }),
          m = nn(this.time);
        l.setWithVelocity(d.sample(m - al).value, d.sample(m).value, al);
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
      eN() &&
      n &&
      tN.has(n) &&
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
function iN(e, t) {
  let r;
  const n = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    r !== s && e(s), (r = s);
  };
  return ke.update(n, !0), () => Gr(n);
}
const sN = jx(() => window.ScrollTimeline !== void 0);
class aN {
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
      if (sN() && n.attachTimeline) n.attachTimeline(t);
      else
        return (
          n.pause(),
          iN((o) => {
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
const Vf =
  (e, t, r, n = {}, o, i) =>
  (s) => {
    const a = _f(n, e) || {},
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
    Fj(a) || (u = { ...u, ...Nj(e, u) }),
      u.duration && (u.duration = nn(u.duration)),
      u.repeatDelay && (u.repeatDelay = nn(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const d = uc(u.keyframes, a);
      if (d !== void 0)
        return (
          ke.update(() => {
            u.onUpdate(d), u.onComplete();
          }),
          new aN([])
        );
    }
    return !i && Km.supports(u) ? new Km(u) : new Nf(u);
  };
function ll(e) {
  return !!(Mt(e) && e.add);
}
function Wf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function zf(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Uf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wf(this.subscriptions, t), () => zf(this.subscriptions, t);
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
const Ym = 30,
  lN = (e) => !isNaN(parseFloat(e));
class cN {
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
        (this.canTrackVelocity = lN(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Uf());
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
      t - this.updatedAt > Ym
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ym);
    return Nx(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
  return new cN(e, t);
}
function uN(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, us(r));
}
function dN(e, t) {
  const r = cc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r || {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = gj(i[s]);
    uN(e, s, a);
  }
}
function Jx(e) {
  return e.getProps()[J0];
}
function fN({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function ew(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
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
    if (p === void 0 || (f && fN(f, d))) continue;
    const h = { delay: r, elapsed: 0, ..._f(s || {}, d) };
    let v = !1;
    if (window.HandoffAppearAnimations) {
      const b = Jx(e);
      if (b) {
        const g = window.HandoffAppearAnimations(b, d, m, ke);
        g !== null && ((h.elapsed = g), (v = !0));
      }
    }
    m.start(
      Vf(d, m, p, e.shouldReduceMotion && Yn.has(d) ? { type: !1 } : h, e, v)
    );
    const x = m.animation;
    x && (ll(c) && (c.add(d), x.then(() => c.remove(d))), u.push(x));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        ke.update(() => {
          a && dN(e, a);
        });
      }),
    u
  );
}
function Xu(e, t, r = {}) {
  var n;
  const o = cc(
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
  const s = o ? () => Promise.all(ew(e, o, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d
            } = i;
            return pN(e, t, u + c, f, d, r);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(r.delay)]);
}
function pN(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (c = 0) => c * n : (c = 0) => a - c * n;
  return (
    Array.from(e.variantChildren)
      .sort(hN)
      .forEach((c, u) => {
        c.notify('AnimationStart', t),
          s.push(
            Xu(c, t, { ...i, delay: r + l(u) }).then(() =>
              c.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(s)
  );
}
function hN(e, t) {
  return e.sortNodePosition(t);
}
function mN(e, t, r = {}) {
  e.notify('AnimationStart', t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Xu(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == 'string') n = Xu(e, t, r);
  else {
    const o = typeof t == 'function' ? cc(e, t, r.custom) : t;
    n = Promise.all(ew(e, o, r));
  }
  return n.then(() => {
    ke.postRender(() => {
      e.notify('AnimationComplete', t);
    });
  });
}
const gN = [...wf].reverse(),
  vN = wf.length;
function yN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => mN(e, r, n)));
}
function bN(e) {
  let t = yN(e),
    r = Xm(),
    n = !0;
  const o = (l) => (c, u) => {
    var f;
    const d = cc(
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
    for (let v = 0; v < vN; v++) {
      const x = gN[v],
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
          sc(g) ||
          typeof g == 'boolean')
      )
        continue;
      let T =
          xN(b.prevProp, g) ||
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
        Wu(B) && Wu(j) ? (F = !Sx(B, j)) : (F = B !== j),
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
      (r = Xm()), (n = !0);
    }
  };
}
function xN(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Sx(t, e) : !1;
}
function Sn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Xm() {
  return {
    animate: Sn(!0),
    whileInView: Sn(),
    whileHover: Sn(),
    whileTap: Sn(),
    whileDrag: Sn(),
    whileFocus: Sn(),
    exit: Sn()
  };
}
class wN extends xn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = bN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    sc(t) && (this.unmountControls = t.subscribe(this.node));
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
let SN = 0;
class EN extends xn {
  constructor() {
    super(...arguments), (this.id = SN++);
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
const CN = { animation: { Feature: wN }, exit: { Feature: EN } },
  Qm = (e, t) => Math.abs(e - t);
function PN(e, t) {
  const r = Qm(e.x, t.x),
    n = Qm(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class tw {
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
        const f = qc(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = PN(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: p } = f,
          { timestamp: h } = yt;
        this.history.push({ ...p, timestamp: h });
        const { onStart: v, onMove: x } = this.handlers;
        d ||
          (v && v(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Hc(d, this.transformPagePoint)),
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
        const v = qc(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : Hc(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(f, v), p && p(f, v);
      }),
      !vx(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.contextWindow = o || window);
    const s = lc(t),
      a = Hc(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = yt;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = r;
    u && u(t, qc(a, this.history)),
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
    this.removeListeners && this.removeListeners(), Gr(this.updatePoint);
  }
}
function Hc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qc({ point: e }, t) {
  return {
    point: e,
    delta: Zm(e, rw(t)),
    offset: Zm(e, TN(t)),
    velocity: RN(t, 0.1)
  };
}
function TN(e) {
  return e[0];
}
function rw(e) {
  return e[e.length - 1];
}
function RN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = rw(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > nn(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = zr(o.timestamp - n.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function tr(e) {
  return e.max - e.min;
}
function Qu(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Jm(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = Ge(t.min, t.max, e.origin)),
    (e.scale = tr(r) / tr(t)),
    (Qu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Ge(r.min, r.max, e.origin) - e.originPoint),
    (Qu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ji(e, t, r, n) {
  Jm(e.x, t.x, r.x, n ? n.originX : void 0),
    Jm(e.y, t.y, r.y, n ? n.originY : void 0);
}
function eg(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + tr(t));
}
function kN(e, t, r) {
  eg(e.x, t.x, r.x), eg(e.y, t.y, r.y);
}
function tg(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + tr(t));
}
function Bi(e, t, r) {
  tg(e.x, t.x, r.x), tg(e.y, t.y, r.y);
}
function MN(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? Ge(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? Ge(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function rg(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function ON(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: rg(e.x, r, o), y: rg(e.y, t, n) };
}
function ng(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function AN(e, t) {
  return { x: ng(e.x, t.x), y: ng(e.y, t.y) };
}
function _N(e, t) {
  let r = 0.5;
  const n = tr(e),
    o = tr(t);
  return (
    o > n
      ? (r = cs(t.min, t.max - n, e.min))
      : n > o && (r = cs(e.min, e.max - o, t.min)),
    cn(0, 1, r)
  );
}
function DN(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Zu = 0.35;
function IN(e = Zu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Zu),
    { x: og(e, 'left', 'right'), y: og(e, 'top', 'bottom') }
  );
}
function og(e, t, r) {
  return { min: ig(e, t), max: ig(e, r) };
}
function ig(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const sg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  So = () => ({ x: sg(), y: sg() }),
  ag = () => ({ min: 0, max: 0 }),
  Ze = () => ({ x: ag(), y: ag() });
function ar(e) {
  return [e('x'), e('y')];
}
function nw({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function LN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $N(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Gc(e) {
  return e === void 0 || e === 1;
}
function Ju({ scale: e, scaleX: t, scaleY: r }) {
  return !Gc(e) || !Gc(t) || !Gc(r);
}
function Tn(e) {
  return (
    Ju(e) ||
    ow(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ow(e) {
  return lg(e.x) || lg(e.y);
}
function lg(e) {
  return e && e !== '0%';
}
function cl(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function cg(e, t, r, n, o) {
  return o !== void 0 && (e = cl(e, o, n)), cl(e, r, n) + t;
}
function ed(e, t = 0, r = 1, n, o) {
  (e.min = cg(e.min, t, r, n, o)), (e.max = cg(e.max, t, r, n, o));
}
function iw(e, { x: t, y: r }) {
  ed(e.x, t.translate, t.scale, t.originPoint),
    ed(e.y, r.translate, r.scale, r.originPoint);
}
function jN(e, t, r, n = !1) {
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
        Eo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), iw(e, s)),
      n && Tn(i.latestValues) && Eo(e, i.latestValues));
  }
  (t.x = ug(t.x)), (t.y = ug(t.y));
}
function ug(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function en(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function dg(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = Ge(e.min, e.max, i);
  ed(e, t[r], t[n], s, t.scale);
}
const BN = ['x', 'scaleX', 'originX'],
  NN = ['y', 'scaleY', 'originY'];
function Eo(e, t) {
  dg(e.x, t, BN), dg(e.y, t, NN);
}
function sw(e, t) {
  return nw($N(e.getBoundingClientRect(), t));
}
function FN(e, t, r) {
  const n = sw(e, r),
    { scroll: o } = t;
  return o && (en(n.x, o.offset.x), en(n.y, o.offset.y)), n;
}
const aw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  VN = new WeakMap();
class WN {
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
          r && this.snapToCursor(lc(u, 'page').point);
      },
      i = (u, f) => {
        const { drag: d, dragPropagation: m, onDragStart: p } = this.getProps();
        if (
          d &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = bx(d)),
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
                g && (x = tr(g) * (parseFloat(x) / 100));
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
          (this.currentDirection = zN(v)),
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
    this.panSession = new tw(
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
        contextWindow: aw(this.visualElement)
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
      (s = MN(s, this.constraints[t], this.elastic[t])),
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
    r && xo(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && o
        ? (this.constraints = ON(o.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = IN(n)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ar((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = DN(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !xo(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = FN(n, o.root, this.visualElement.getTransformPagePoint());
    let s = AN(o.layout.layoutBox, i);
    if (r) {
      const a = r(LN(s));
      (this.hasMutatedConstraints = !!a), a && (s = nw(a));
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
    return n.start(Vf(t, n, 0, r, this.visualElement));
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
        i.set(t[r] - Ge(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!xo(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ar((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = _N({ min: l, max: l }, this.constraints[s]);
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
        a.set(Ge(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    VN.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Vr(t, 'pointerdown', (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        xo(l) && l.current && (this.constraints = this.resolveRefConstraints());
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
        dragElastic: s = Zu,
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
function zN(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
class UN extends xn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = _t),
      (this.removeListeners = _t),
      (this.controls = new WN(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || _t);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fg = (e) => (t, r) => {
  e && ke.postRender(() => e(t, r));
};
class HN extends xn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = _t);
  }
  onPointerDown(t) {
    this.session = new tw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: aw(this.node)
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
      onSessionStart: fg(t),
      onStart: fg(r),
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
function qN() {
  const e = w.useContext(vf);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = w.useId();
  return w.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const Ca = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function pg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const mi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (ie.test(e)) e = parseFloat(e);
        else return e;
      const r = pg(e, t.target.x),
        n = pg(e, t.target.y);
      return `${r}% ${n}%`;
    }
  },
  GN = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = un.parse(e);
      if (o.length > 5) return n;
      const i = un.createTransformer(e),
        s = typeof o[0] != 'number' ? 1 : 0,
        a = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = Ge(a, l, 0.5);
      return (
        typeof o[2 + s] == 'number' && (o[2 + s] /= c),
        typeof o[3 + s] == 'number' && (o[3 + s] /= c),
        i(o)
      );
    }
  };
class KN extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o
      } = this.props,
      { projection: i } = t;
    U$(YN),
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
      xf.postRender(() => {
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
function lw(e) {
  const [t, r] = qN(),
    n = w.useContext(ox);
  return P.jsx(KN, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: w.useContext(tx),
    isPresent: t,
    safeToRemove: r
  });
}
const YN = {
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
    boxShadow: GN
  },
  cw = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  XN = cw.length,
  hg = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  mg = (e) => typeof e == 'number' || ie.test(e);
function QN(e, t, r, n, o, i) {
  o
    ? ((e.opacity = Ge(0, r.opacity !== void 0 ? r.opacity : 1, ZN(n))),
      (e.opacityExit = Ge(t.opacity !== void 0 ? t.opacity : 1, 0, JN(n))))
    : i &&
      (e.opacity = Ge(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let s = 0; s < XN; s++) {
    const a = `border${cw[s]}Radius`;
    let l = gg(t, a),
      c = gg(r, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || mg(l) === mg(c)
        ? ((e[a] = Math.max(Ge(hg(l), hg(c), n), 0)),
          (Mr.test(c) || Mr.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || r.rotate) && (e.rotate = Ge(t.rotate || 0, r.rotate || 0, n));
}
function gg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ZN = uw(0, 0.5, qx),
  JN = uw(0.5, 0.95, _t);
function uw(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(cs(e, t, n)));
}
function vg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function sr(e, t) {
  vg(e.x, t.x), vg(e.y, t.y);
}
function yg(e, t, r, n, o) {
  return (
    (e -= t), (e = cl(e, 1 / r, n)), o !== void 0 && (e = cl(e, 1 / o, n)), e
  );
}
function eF(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (Mr.test(t) &&
      ((t = parseFloat(t)), (t = Ge(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Ge(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = yg(e.min, t, r, a, o)),
    (e.max = yg(e.max, t, r, a, o));
}
function bg(e, t, [r, n, o], i, s) {
  eF(e, t[r], t[n], t[o], t.scale, i, s);
}
const tF = ['x', 'scaleX', 'originX'],
  rF = ['y', 'scaleY', 'originY'];
function xg(e, t, r, n) {
  bg(e.x, t, tF, r ? r.x : void 0, n ? n.x : void 0),
    bg(e.y, t, rF, r ? r.y : void 0, n ? n.y : void 0);
}
function wg(e) {
  return e.translate === 0 && e.scale === 1;
}
function dw(e) {
  return wg(e.x) && wg(e.y);
}
function nF(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function fw(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Sg(e) {
  return tr(e.x) / tr(e.y);
}
class oF {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (zf(this.members, t),
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
function Eg(e, t, r) {
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
const iF = (e, t) => e.depth - t.depth;
class sF {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Wf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    zf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(iF),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function aF(e, t) {
  const r = on.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (Gr(n), e(i - t));
    };
  return ke.read(n, !0), () => Gr(n);
}
function lF(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function cF(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function uF(e, t, r) {
  const n = Mt(e) ? e : us(e);
  return n.start(Vf('', n, t, r)), n.animation;
}
const Kc = ['', 'X', 'Y', 'Z'],
  dF = { visibility: 'hidden' },
  Cg = 1e3;
let fF = 0;
const Rn = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Yc(e, t, r, n) {
  const { latestValues: o } = t;
  o[e] && ((r[e] = o[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function pw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? Jx(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
        ? pw(e.parent)
        : !1
    : !1;
}
function hw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = fF++),
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
            (Rn.totalNodes =
              Rn.resolvedTargetDeltas =
              Rn.recalculatedProjection =
                0),
            this.nodes.forEach(mF),
            this.nodes.forEach(xF),
            this.nodes.forEach(wF),
            this.nodes.forEach(gF),
            lF(Rn);
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
      this.root === this && (this.nodes = new sF());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Uf()),
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
      (this.isSVG = cF(s)), (this.instance = s);
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
            (f = aF(d, 250)),
            Ca.hasAnimatedSinceResize &&
              ((Ca.hasAnimatedSinceResize = !1), this.nodes.forEach(Tg));
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
                  this.options.transition || u.getDefaultTransition() || TF,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: x } =
                  u.getProps(),
                b = !this.targetLayout || !fw(this.targetLayout, p) || m,
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
                const y = { ..._f(h, 'layout'), onPlay: v, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y);
              } else
                d || Tg(this),
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
        Gr(this.updateProjection);
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
        this.nodes && this.nodes.forEach(SF),
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
          pw(this) &&
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Pg);
        return;
      }
      this.isUpdating || this.nodes.forEach(yF),
        (this.isUpdating = !1),
        this.nodes.forEach(bF),
        this.nodes.forEach(pF),
        this.nodes.forEach(hF),
        this.clearAllSnapshots();
      const a = on.now();
      (yt.delta = cn(0, 1e3 / 60, a - yt.timestamp)),
        (yt.timestamp = a),
        (yt.isProcessing = !0),
        Bc.update.process(yt),
        Bc.preRender.process(yt),
        Bc.render.process(yt),
        (yt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), xf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(vF), this.sharedNodes.forEach(EF);
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
        a = this.projectionDelta && !dw(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || Tn(this.latestValues) || u) &&
        (o(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        RF(l),
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
          Eo(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Tn(u.latestValues) && Eo(l, u.latestValues);
      }
      return Tn(this.latestValues) && Eo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ze();
      sr(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Tn(c.latestValues)) continue;
        Ju(c.latestValues) && c.updateSnapshot();
        const u = Ze(),
          f = c.measurePageBox();
        sr(u, f),
          xg(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Tn(this.latestValues) && xg(a, this.latestValues), a;
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
        this.relativeParent.resolvedRelativeTargetAt !== yt.timestamp &&
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
          ((this.resolvedRelativeTargetAt = yt.timestamp),
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
                kN(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : sr(this.target, this.layout.layoutBox),
                  iw(this.target, this.targetDelta))
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
          Rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ju(this.parent.latestValues) ||
          ow(this.parent.latestValues)
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
        this.resolvedRelativeTargetAt === yt.timestamp && (c = !1),
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
      jN(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ze()));
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = So()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = So()),
        (this.projectionDeltaWithTransform = So()));
      const h = this.projectionTransform;
      ji(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = Eg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== h ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', p)),
        Rn.recalculatedProjection++;
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
        f = So();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = Ze(),
        m = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        h = m !== p,
        v = this.getStack(),
        x = !v || v.members.length <= 1,
        b = !!(h && !x && this.options.crossfade === !0 && !this.path.some(PF));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (y) => {
        const E = y / 1e3;
        Rg(f.x, s.x, E),
          Rg(f.y, s.y, E),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Bi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            CF(this.relativeTarget, this.relativeTargetOrigin, d, E),
            g && nF(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ze()),
            sr(g, this.relativeTarget)),
          h &&
            ((this.animationValues = u), QN(u, c, this.latestValues, E, b, x)),
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
          (Gr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ke.update(() => {
          (Ca.hasAnimatedSinceResize = !0),
            (this.currentAnimation = uF(0, Cg, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Cg),
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
          mw(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Ze();
          const f = tr(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = tr(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        sr(a, l),
          Eo(a, u),
          ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new oF()),
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
      l.z && Yc('z', s, c, this.animationValues);
      for (let u = 0; u < Kc.length; u++)
        Yc(`rotate${Kc[u]}`, s, c, this.animationValues),
          Yc(`skew${Kc[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return dF;
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
            !Tn(this.latestValues) &&
            ((h.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          h
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Eg(
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
      for (const h in nl) {
        if (d[h] === void 0) continue;
        const { correct: v, applyTo: x } = nl[h],
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
        this.root.nodes.forEach(Pg),
        this.root.sharedNodes.clear();
    }
  };
}
function pF(e) {
  e.updateLayout();
}
function hF(e) {
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
            m = tr(d);
          (d.min = n[f].min), (d.max = d.min + m);
        })
      : mw(i, r.layoutBox, n) &&
        ar((f) => {
          const d = s ? r.measuredBox[f] : r.layoutBox[f],
            m = tr(n[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const a = So();
    ji(a, n, r.layoutBox);
    const l = So();
    s ? ji(l, e.applyTransform(o, !0), r.measuredBox) : ji(l, n, r.layoutBox);
    const c = !dw(a);
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
            fw(p, h) || (u = !0),
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
function mF(e) {
  Rn.totalNodes++,
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
function gF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function vF(e) {
  e.clearSnapshot();
}
function Pg(e) {
  e.clearMeasurements();
}
function yF(e) {
  e.isLayoutDirty = !1;
}
function bF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Tg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function xF(e) {
  e.resolveTargetDelta();
}
function wF(e) {
  e.calcProjection();
}
function SF(e) {
  e.resetSkewAndRotation();
}
function EF(e) {
  e.removeLeadSnapshot();
}
function Rg(e, t, r) {
  (e.translate = Ge(t.translate, 0, r)),
    (e.scale = Ge(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function kg(e, t, r, n) {
  (e.min = Ge(t.min, r.min, n)), (e.max = Ge(t.max, r.max, n));
}
function CF(e, t, r, n) {
  kg(e.x, t.x, r.x, n), kg(e.y, t.y, r.y, n);
}
function PF(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const TF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Mg = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Og = Mg('applewebkit/') && !Mg('chrome/') ? Math.round : _t;
function Ag(e) {
  (e.min = Og(e.min)), (e.max = Og(e.max));
}
function RF(e) {
  Ag(e.x), Ag(e.y);
}
function mw(e, t, r) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Qu(Sg(t), Sg(r), 0.2))
  );
}
const kF = hw({
    attachResizeListener: (e, t) => Nr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Xc = { current: void 0 },
  gw = hw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Xc.current) {
        const e = new kF({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Xc.current = e);
      }
      return Xc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed'
  }),
  MF = {
    pan: { Feature: HN },
    drag: { Feature: UN, ProjectionNode: gw, MeasureLayout: lw }
  },
  td = { current: null },
  vw = { current: !1 };
function OF() {
  if (((vw.current = !0), !!yf))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (td.current = e.matches);
      e.addListener(t), t();
    } else td.current = !1;
}
function AF(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      s = r[o];
    if (Mt(i)) e.addValue(o, i), ll(n) && n.add(o);
    else if (Mt(s)) e.addValue(o, us(i, { owner: e })), ll(n) && n.remove(o);
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
const _g = new WeakMap(),
  _F = [...Rx, Rt, un],
  DF = (e) => _F.find(Tx(e)),
  Dg = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ],
  IF = Sf.length;
class LF {
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
      (this.KeyframeResolver = Df),
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
      (this.isControllingVariants = ac(r)),
      (this.isVariantNode = nx(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const d in f) {
      const m = f[d];
      l[d] !== void 0 && Mt(m) && (m.set(l[d], !1), ll(u) && u.add(d));
    }
  }
  mount(t) {
    (this.current = t),
      _g.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      vw.current || OF(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : td.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    _g.delete(this.current),
      this.projection && this.projection.unmount(),
      Gr(this.notifyUpdate),
      Gr(this.render),
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
    const n = Yn.has(t),
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
    for (t in Vo) {
      const r = Vo[t];
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
    for (let n = 0; n < Dg.length; n++) {
      const o = Dg[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = 'on' + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = AF(
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
    for (let n = 0; n < IF; n++) {
      const o = Sf[n],
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
        (typeof o == 'string' && (Cx(o) || Ex(o))
          ? (o = parseFloat(o))
          : !DF(o) && un.test(r) && (o = Lx(t, r)),
        this.setBaseTarget(t, Mt(o) ? o.get() : o)),
      Mt(o) ? o.get() : o
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
      const s = Af(
        this.props,
        n,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      s && (o = s[t]);
    }
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Mt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Uf()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class yw extends LF {
  constructor() {
    super(...arguments), (this.KeyframeResolver = $x);
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
function $F(e) {
  return window.getComputedStyle(e);
}
class jF extends yw {
  constructor() {
    super(...arguments), (this.type = 'html');
  }
  readValueFromInstance(t, r) {
    if (Yn.has(r)) {
      const n = Lf(r);
      return (n && n.default) || 0;
    } else {
      const n = $F(t),
        o = (ax(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return sw(t, r);
  }
  build(t, r, n, o) {
    Tf(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Of(t, r, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Mt(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    fx(t, r, n, o);
  }
}
class BF extends yw {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Yn.has(r)) {
      const n = Lf(r);
      return (n && n.default) || 0;
    }
    return (r = px.has(r) ? r : bf(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Ze();
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return mx(t, r, n);
  }
  build(t, r, n, o) {
    kf(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    hx(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Mf(t.tagName)), super.mount(t);
  }
}
const NF = (e, t) =>
    Ef(e)
      ? new BF(t, { enableHardwareAcceleration: !1 })
      : new jF(t, {
          allowProjection: e !== w.Fragment,
          enableHardwareAcceleration: !0
        }),
  FF = { layout: { ProjectionNode: gw, MeasureLayout: lw } },
  VF = { ...CN, ...Ij, ...MF, ...FF },
  ia = W$((e, t) => wj(e, t, VF, NF)),
  WF = (e, t, r) => {
    const n = t - e;
    return ((((r - e) % n) + n) % n) + e;
  };
function Ig(...e) {
  const t = w.useRef(0),
    [r, n] = w.useState(e[t.current]),
    o = w.useCallback(
      (i) => {
        (t.current = typeof i != 'number' ? WF(0, e.length, t.current + 1) : i),
          n(e[t.current]);
      },
      [e.length, ...e]
    );
  return [r, o];
}
const bw = de.forwardRef(
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
    const [l, c] = Ig(s, a),
      [u, f] = Ig(s, a);
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
bw.propTypes = {
  children: W.node,
  offset: W.number,
  type: W.oneOf(['slide', 'scale', 'rotate']),
  direction: W.oneOf(['up', 'down', 'left', 'right']),
  scale: W.oneOfType([W.number, W.object])
};
bw.defaultProps = {
  type: 'scale',
  offset: 10,
  direction: 'right',
  scale: { hover: 1, tap: 0.9 }
};
const zF = () => {
    dt();
    const e = Uo(),
      t = dn((a) => a.customization);
    w.useState(!1);
    const [r, n] = w.useState(t.borderRadius);
    w.useEffect(() => {
      e({ type: Mv, borderRadius: r });
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
        e({ type: kv, fontFamily: a });
      }, [e, i]),
      P.jsx(P.Fragment, {})
    );
  },
  UF = () => P.jsxs(P.Fragment, { children: [P.jsx(Kv, {}), P.jsx(zF, {})] }),
  Lg = pt(
    w.lazy(() =>
      ft(() => import('./Login3-COlIy4hQ.js'), __vite__mapDeps([30, 1, 5, 3]))
    )
  ),
  HF = pt(w.lazy(() => ft(() => Promise.resolve().then(() => RV), void 0))),
  qF = {
    path: '/',
    element: P.jsx(UF, {}),
    children: [
      { path: '', element: P.jsx(Lg, {}) },
      { path: 'pages/login/login3', element: P.jsx(Lg, {}) },
      { path: 'pages/register/register3', element: P.jsx(HF, {}) }
    ]
  },
  Hf = _C([qF, C$], { basename: '' });
console.log(Hf.basename);
bi.render(
  P.jsx(de.StrictMode, {
    children: P.jsx(WC, {
      basename: '/Elaf',
      children: P.jsx(Xv, { router: Hf })
    })
  }),
  document.getElementById('root')
);
const GF = '#e0e0e0',
  KF = '#ffffff',
  YF = '#90caf9',
  XF = '#a31f23',
  QF = '#1e88e5',
  ZF = '#1565c0',
  JF = '#ffcccc',
  e5 = '#b39ddb',
  t5 = '#1e88e5',
  r5 = '#a31f23',
  n5 = '#4527a0',
  o5 = '#b9f6ca',
  i5 = '#69f0ae',
  s5 = '#00e676',
  a5 = '#00c853',
  l5 = '#ef9a9a',
  c5 = '#a31f23',
  u5 = '#c62828',
  d5 = '#fbe9e7',
  f5 = '#ffab91',
  p5 = '#d84315',
  h5 = '#fff8e1',
  m5 = '#ffe57f',
  g5 = '#ffc107',
  v5 = '#f8fafc',
  y5 = '#eef2f6',
  b5 = '#e3e8ef',
  x5 = '#cdd5df',
  w5 = '#697586',
  S5 = '#4b5565',
  E5 = '#364152',
  C5 = '#121926',
  P5 = '#000000',
  T5 = '#000000',
  R5 = '#000000',
  k5 = '#000000',
  M5 = '#d7dcec',
  O5 = '#bdc8f0',
  A5 = '#8492c4',
  _5 = '#eef2f6',
  D5 = '#2196f3',
  I5 = '#1e88e5',
  L5 = '#90caf9',
  $5 = '#1565c0',
  j5 = '#d1c4e9',
  B5 = '#7c4dff',
  N5 = '#651fff',
  F5 = '#b39ddb',
  V5 = '#6200ea',
  W5 = {
    paper: GF,
    primaryLight: KF,
    primary200: YF,
    primaryMain: XF,
    primaryDark: QF,
    primary800: ZF,
    secondaryLight: JF,
    secondary200: e5,
    secondaryMain: t5,
    secondaryDark: r5,
    secondary800: n5,
    successLight: o5,
    success200: i5,
    successMain: s5,
    successDark: a5,
    errorLight: l5,
    errorMain: c5,
    errorDark: u5,
    orangeLight: d5,
    orangeMain: f5,
    orangeDark: p5,
    warningLight: h5,
    warningMain: m5,
    warningDark: g5,
    grey50: v5,
    grey100: y5,
    grey200: b5,
    grey300: x5,
    grey500: w5,
    grey600: S5,
    grey700: E5,
    grey900: C5,
    darkPaper: P5,
    darkBackground: T5,
    darkLevel1: R5,
    darkLevel2: k5,
    darkTextTitle: M5,
    darkTextPrimary: O5,
    darkTextSecondary: A5,
    darkPrimaryLight: _5,
    darkPrimaryMain: D5,
    darkPrimaryDark: I5,
    darkPrimary200: L5,
    darkPrimary800: $5,
    darkSecondaryLight: j5,
    darkSecondaryMain: B5,
    darkSecondaryDark: N5,
    darkSecondary200: F5,
    darkSecondary800: V5
  };
function z5(e) {
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
function U5(e) {
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
function H5(e) {
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
const q5 = (e) => {
    const t = W5,
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
        palette: U5(r),
        mixins: {
          toolbar: {
            minHeight: '48px',
            padding: '16px',
            '@media (min-width: 600px)': { minHeight: '48px' }
          }
        },
        typography: H5(r)
      },
      o = zd(n);
    return (o.components = z5(r)), o;
  },
  xw = ({ children: e }) => (
    w.useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []),
    e || null
  );
xw.propTypes = { children: W.node };
const G5 = () => {
  const e = dn((t) => t.customization);
  return P.jsx(wy, {
    injectFirst: !0,
    children: P.jsxs(lM, {
      theme: q5(e),
      children: [
        P.jsx(Rb, {}),
        P.jsx(xw, { children: P.jsx(Xv, { router: Hf }) })
      ]
    })
  });
};
function ww(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ww(e[t])) && (n && (n += ' '), (n += r));
    else for (t in e) e[t] && (n && (n += ' '), (n += t));
  return n;
}
function Xn() {
  for (var e, t, r = 0, n = ''; r < arguments.length; )
    (e = arguments[r++]) && (t = ww(e)) && (n && (n += ' '), (n += t));
  return n;
}
let K5 = { data: '' },
  Y5 = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || K5,
  X5 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Q5 = /\/\*[^]*?\*\/|  +/g,
  $g = /\n+/g,
  On = (e, t) => {
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
                ? On(s, i)
                : i + '{' + On(s, i[1] == 'k' ? '' : t) + '}')
        : typeof s == 'object'
          ? (n += On(
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
            (o += On.p ? On.p(i, s) : i + ':' + s + ';'));
    }
    return r + (t && o ? t + '{' + o + '}' : o) + n;
  },
  $r = {},
  Sw = (e) => {
    if (typeof e == 'object') {
      let t = '';
      for (let r in e) t += r + Sw(e[r]);
      return t;
    }
    return e;
  },
  Z5 = (e, t, r, n, o) => {
    let i = Sw(e),
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
              for (; (u = X5.exec(c.replace(Q5, ''))); )
                u[4]
                  ? d.shift()
                  : u[3]
                    ? ((f = u[3].replace($g, ' ').trim()),
                      d.unshift((d[0][f] = d[0][f] || {})))
                    : (d[0][u[1]] = u[2].replace($g, ' ').trim());
              return d[0];
            })(e);
      $r[s] = On(o ? { ['@keyframes ' + s]: l } : l, r ? '' : '.' + s);
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
  J5 = (e, t, r) =>
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
              : On(a, '')
            : a === !1
              ? ''
              : a;
      }
      return n + o + (s ?? '');
    }, '');
function qf(e) {
  let t = this || {},
    r = e.call ? e(t.p) : e;
  return Z5(
    r.unshift
      ? r.raw
        ? J5(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {})
      : r,
    Y5(t.target),
    t.g,
    t.o,
    t.k
  );
}
qf.bind({ g: 1 });
qf.bind({ k: 1 });
function eV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Ew(e, t, r) {
  return t && eV(e.prototype, t), e;
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
function Cw(e, t) {
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
function jg(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
var Bg = function () {
    return '';
  },
  Pw = de.createContext({ enqueueSnackbar: Bg, closeSnackbar: Bg }),
  kn = {
    downXs: '@media (max-width:599.95px)',
    upSm: '@media (min-width:600px)'
  },
  Ng = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Gf = function (t) {
    return '' + Ng(t.vertical) + Ng(t.horizontal);
  },
  sa = function (t) {
    return !!t || t === 0;
  },
  aa = 'unmounted',
  fo = 'exited',
  po = 'entering',
  gi = 'entered',
  Fg = 'exiting',
  Kf = (function (e) {
    Cw(t, e);
    function t(n) {
      var o;
      o = e.call(this, n) || this;
      var i = n.appear,
        s;
      return (
        (o.appearStatus = null),
        n.in
          ? i
            ? ((s = fo), (o.appearStatus = po))
            : (s = gi)
          : n.unmountOnExit || n.mountOnEnter
            ? (s = aa)
            : (s = fo),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === aa ? { status: fo } : null;
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
            ? s !== po && s !== gi && (i = po)
            : (s === po || s === gi) && (i = Fg);
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
              i === po ? this.performEnter(o) : this.performExit())
            : this.props.unmountOnExit &&
              this.state.status === fo &&
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
          this.safeSetState({ status: po }, function () {
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
          this.safeSetState({ status: fo }, function () {
            o.props.onExited && o.props.onExited(o.node);
          });
          return;
        }
        this.props.onExit && this.props.onExit(this.node),
          this.safeSetState({ status: Fg }, function () {
            o.props.onExiting && o.props.onExiting(o.node),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: fo }, function () {
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
      Ew(t, [
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
function ho() {}
Kf.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ho,
  onEntering: ho,
  onEntered: ho,
  onExit: ho,
  onExiting: ho,
  onExited: ho
};
function Vg(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function rd(e, t) {
  return w.useMemo(
    function () {
      return e == null && t == null
        ? null
        : function (r) {
            Vg(e, r), Vg(t, r);
          };
    },
    [e, t]
  );
}
function ul(e) {
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
var nd = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  Tw = function (t) {
    t.scrollTop = t.scrollTop;
  },
  Wg = function (t) {
    return Math.round(t) + 'ms';
  };
function Co(e, t) {
  e === void 0 && (e = ['all']);
  var r = t || {},
    n = r.duration,
    o = n === void 0 ? 300 : n,
    i = r.easing,
    s = i === void 0 ? nd.easeInOut : i,
    a = r.delay,
    l = a === void 0 ? 0 : a,
    c = Array.isArray(e) ? e : [e];
  return c
    .map(function (u) {
      var f = typeof o == 'string' ? o : Wg(o),
        d = typeof l == 'string' ? l : Wg(l);
      return u + ' ' + f + ' ' + s + ' ' + d;
    })
    .join(',');
}
function tV(e) {
  return (e && e.ownerDocument) || document;
}
function Rw(e) {
  var t = tV(e);
  return t.defaultView || window;
}
function rV(e, t) {
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
function nV(e, t) {
  var r = t.getBoundingClientRect(),
    n = Rw(t),
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
    var r = nV(e, t);
    r && ((t.style.webkitTransform = r), (t.style.transform = r));
  }
}
var kw = w.forwardRef(function (e, t) {
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
    h = rd(r.ref, p),
    v = rd(h, t),
    x = function (C, T) {
      la(o, C), Tw(C), c && c(C, T);
    },
    b = function (C) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || nd.easeOut,
        R = ul({
          timeout: l,
          mode: 'enter',
          style: Ie({}, s, { transitionTimingFunction: T })
        });
      (C.style.webkitTransition = Co('-webkit-transform', R)),
        (C.style.transition = Co('transform', R)),
        (C.style.webkitTransform = 'none'),
        (C.style.transform = 'none');
    },
    g = function (C) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || nd.sharp,
        R = ul({
          timeout: l,
          mode: 'exit',
          style: Ie({}, s, { transitionTimingFunction: T })
        });
      (C.style.webkitTransition = Co('-webkit-transform', R)),
        (C.style.transition = Co('transform', R)),
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
          var S = rV(function () {
              p.current && la(o, p.current);
            }),
            C = Rw(p.current);
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
      Kf,
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
kw.displayName = 'Slide';
var dc = function (t) {
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
  oV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: `M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`
      })
    );
  },
  iV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z'
      })
    );
  },
  sV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: `M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`
      })
    );
  },
  aV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: `M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`
      })
    );
  },
  lV = {
    default: void 0,
    success: de.createElement(oV, null),
    warning: de.createElement(iV, null),
    error: de.createElement(sV, null),
    info: de.createElement(aV, null)
  },
  Fn = {
    maxSnack: 3,
    persist: !1,
    hideIconVariant: !1,
    disableWindowBlurListener: !1,
    variant: 'default',
    autoHideDuration: 5e3,
    iconVariant: lV,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    TransitionComponent: kw,
    transitionDuration: { enter: 225, exit: 195 }
  },
  cV = function (t, r) {
    var n = function (i) {
      return typeof i == 'number' || i === null;
    };
    return n(t) ? t : n(r) ? r : Fn.autoHideDuration;
  },
  uV = function (t, r) {
    var n = function (i, s) {
      return s.some(function (a) {
        return typeof i === a;
      });
    };
    return n(t, ['string', 'number'])
      ? t
      : n(t, ['object'])
        ? Ie({}, Fn.transitionDuration, {}, n(r, ['object']) && r, {}, t)
        : n(r, ['string', 'number'])
          ? r
          : n(r, ['object'])
            ? Ie({}, Fn.transitionDuration, {}, r)
            : Fn.transitionDuration;
  },
  dV = function (t, r) {
    return function (n, o) {
      return (
        o === void 0 && (o = !1),
        o
          ? Ie({}, Fn[n], {}, r[n], {}, t[n])
          : n === 'autoHideDuration'
            ? cV(t.autoHideDuration, r.autoHideDuration)
            : n === 'transitionDuration'
              ? uV(t.transitionDuration, r.transitionDuration)
              : t[n] || r[n] || Fn[n]
      );
    };
  };
function js(e) {
  return Object.entries(e).reduce(function (t, r) {
    var n,
      o = r[0],
      i = r[1];
    return Ie({}, t, ((n = {}), (n[o] = qf(i)), n));
  }, {});
}
var zo = {
    SnackbarContainer: 'notistack-SnackbarContainer',
    Snackbar: 'notistack-Snackbar',
    CollapseWrapper: 'notistack-CollapseWrapper',
    MuiContent: 'notistack-MuiContent',
    MuiContentVariant: function (t) {
      return 'notistack-MuiContent-' + t;
    }
  },
  zg = js({ root: { height: 0 }, entered: { height: 'auto' } }),
  Qc = '0px',
  Zc = 175,
  Mw = w.forwardRef(function (e, t) {
    var r = e.children,
      n = e.in,
      o = e.onExited,
      i = w.useRef(null),
      s = w.useRef(null),
      a = rd(t, s),
      l = function () {
        return i.current ? i.current.clientHeight : 0;
      },
      c = function (h) {
        h.style.height = Qc;
      },
      u = function (h) {
        var v = l(),
          x = ul({ timeout: Zc, mode: 'enter' }),
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
        Tw(h);
        var v = ul({ timeout: Zc, mode: 'exit' }),
          x = v.duration,
          b = v.easing;
        (h.style.transitionDuration = typeof x == 'string' ? x : x + 'ms'),
          (h.style.height = Qc),
          (h.style.transitionTimingFunction = b || '');
      };
    return w.createElement(
      Kf,
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
        timeout: Zc
      },
      function (p, h) {
        return w.createElement(
          'div',
          Object.assign(
            {
              ref: a,
              className: Xn(zg.root, p === 'entered' && zg.entered),
              style: Ie(
                {
                  pointerEvents: 'all',
                  overflow: 'hidden',
                  minHeight: Qc,
                  transition: Co('height')
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
              className: zo.CollapseWrapper,
              style: { display: 'flex', width: '100%' }
            },
            r
          )
        );
      }
    );
  });
Mw.displayName = 'Collapse';
var Ug = { right: 'left', left: 'right', bottom: 'up', top: 'down' },
  fV = function (t) {
    return t.horizontal !== 'center' ? Ug[t.horizontal] : Ug[t.vertical];
  },
  pV = function (t) {
    return 'anchorOrigin' + Gf(t);
  },
  hV = function (t) {
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
  mV = function () {};
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
  }, mV);
}
var gV = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function Hg(e) {
  var t = w.useRef(e);
  return (
    gV(function () {
      t.current = e;
    }),
    w.useCallback(function () {
      return t.current.apply(void 0, arguments);
    }, [])
  );
}
var Ow = w.forwardRef(function (e, t) {
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
    m = Hg(function () {
      a && a.apply(void 0, arguments);
    }),
    p = Hg(function (g) {
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
        className: Xn(zo.Snackbar, n),
        onMouseEnter: x,
        onMouseLeave: b
      }),
      r
    )
  );
});
Ow.displayName = 'Snackbar';
var Jc,
  vV = js({
    root:
      ((Jc = { display: 'flex', flexWrap: 'wrap', flexGrow: 1 }),
      (Jc[kn.upSm] = { flexGrow: 'initial', minWidth: '288px' }),
      Jc)
  }),
  Aw = w.forwardRef(function (e, t) {
    var r = e.className,
      n = $s(e, ['className']);
    return de.createElement(
      'div',
      Object.assign({ ref: t, className: Xn(vV.root, r) }, n)
    );
  });
Aw.displayName = 'SnackbarContent';
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
  qg = 'notistack-snackbar',
  _w = w.forwardRef(function (e, t) {
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
        Aw,
        {
          ref: t,
          role: 'alert',
          'aria-describedby': qg,
          style: l,
          className: Xn(
            zo.MuiContent,
            zo.MuiContentVariant(s),
            vi.root,
            vi[s],
            c,
            !a && u && vi.lessPadding
          )
        },
        de.createElement(
          'div',
          { id: qg, className: vi.message },
          a ? null : u,
          n
        ),
        f && de.createElement('div', { className: vi.action }, f)
      )
    );
  });
_w.displayName = 'MaterialDesignContent';
var yV = w.memo(_w),
  bV = js({
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
  xV = function (t) {
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
      d = f === void 0 ? yV : f,
      m = w.useMemo(
        function () {
          return hV(u);
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
      S = Ie({ direction: fV(E.anchorOrigin), timeout: b }, x),
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
      Mw,
      { in: o, onExited: T.onExited },
      de.createElement(
        Ow,
        {
          open: p,
          id: E.id,
          disableWindowBlurListener: g,
          autoHideDuration: E.autoHideDuration,
          className: Xn(bV.wrappedRoot, m.root, m[pV(E.anchorOrigin)]),
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
  eu,
  ca,
  ua,
  tu,
  jr = { view: { default: 20, dense: 4 }, snackbar: { default: 6, dense: 2 } },
  Gg = '.' + zo.CollapseWrapper,
  ru = 16,
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
        transition: Co(['top', 'right', 'bottom', 'left', 'max-width'], {
          duration: 300,
          easing: 'ease'
        }),
        pointerEvents: 'none'
      }),
      (yi[Gg] = {
        padding: jr.snackbar.default + 'px 0px',
        transition: 'padding 300ms ease 0ms'
      }),
      (yi.maxWidth = 'calc(100% - ' + jr.view.default * 2 + 'px)'),
      (yi[kn.downXs] = {
        width: '100%',
        maxWidth: 'calc(100% - ' + ru * 2 + 'px)'
      }),
      yi),
    rootDense:
      ((eu = {}), (eu[Gg] = { padding: jr.snackbar.dense + 'px 0px' }), eu),
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
      (ca[kn.upSm] = { alignItems: 'flex-start' }),
      (ca[kn.downXs] = { left: ru + 'px' }),
      ca),
    right:
      ((ua = { right: jr.view.default + 'px' }),
      (ua[kn.upSm] = { alignItems: 'flex-end' }),
      (ua[kn.downXs] = { right: ru + 'px' }),
      ua),
    center:
      ((tu = { left: '50%', transform: 'translateX(-50%)' }),
      (tu[kn.upSm] = { alignItems: 'center' }),
      tu)
  }),
  wV = function (t) {
    var r = t.classes,
      n = r === void 0 ? {} : r,
      o = t.anchorOrigin,
      i = t.dense,
      s = t.children,
      a = Xn(
        zo.SnackbarContainer,
        da[o.vertical],
        da[o.horizontal],
        da.root,
        n.containerRoot,
        n['containerAnchorOrigin' + Gf(o)],
        i && da.rootDense
      );
    return de.createElement('div', { className: a }, s);
  },
  SV = w.memo(wV),
  Kg = function (t) {
    var r = typeof t == 'string' || w.isValidElement(t);
    return !r;
  },
  EV = (function (e) {
    Cw(t, e);
    function t(n) {
      var o;
      return (
        (o = e.call(this, n) || this),
        (o.enqueueSnackbar = function (i, s) {
          if ((s === void 0 && (s = {}), i == null))
            throw new Error('enqueueSnackbar called with invalid argument');
          var a = Kg(i) ? i : s,
            l = Kg(i) ? i.message : i,
            c = a.key,
            u = a.preventDuplicate,
            f = $s(a, ['key', 'preventDuplicate']),
            d = sa(c),
            m = d ? c : new Date().getTime() + Math.random(),
            p = dV(f, o.props),
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
              className: Xn(o.props.className, f.className)
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
            enqueueSnackbar: o.enqueueSnackbar.bind(jg(o)),
            closeSnackbar: o.closeSnackbar.bind(jg(o))
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
              g = Gf(x.anchorOrigin),
              y = v[g] || [];
            return Ie({}, v, ((b = {}), (b[g] = [].concat(y, [x])), b));
          }, {}),
          h = Object.keys(p).map(function (v) {
            var x = p[v],
              b = x[0];
            return de.createElement(
              SV,
              { key: v, dense: u, anchorOrigin: b.anchorOrigin, classes: m },
              x.map(function (g) {
                return de.createElement(xV, {
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
          Pw.Provider,
          { value: i },
          l,
          a ? od.createPortal(h, a) : h
        );
      }),
      Ew(t, [
        {
          key: 'maxSnack',
          get: function () {
            return this.props.maxSnack || Fn.maxSnack;
          }
        }
      ]),
      t
    );
  })(w.Component),
  w3 = function () {
    return w.useContext(Pw);
  };
const CV = document.getElementById('root'),
  PV = Zg(CV);
PV.render(
  P.jsx(vS, {
    store: dE,
    children: P.jsx(EV, { children: P.jsx(fE, { children: P.jsx(G5, {}) }) })
  })
);
const TV = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  RV = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  );
export {
  Q as $,
  Xi as A,
  lt as B,
  Ya as C,
  Fo as D,
  xR as E,
  We as F,
  Ei as G,
  Ve as H,
  Lo as I,
  Hd as J,
  bt as K,
  g3 as L,
  Gb as M,
  im as N,
  v3 as O,
  $e as P,
  Z as Q,
  is as R,
  ln as S,
  Se as T,
  ct as U,
  ue as V,
  ze as W,
  Gn as X,
  bs as Y,
  _l as Z,
  M as _,
  OV as a,
  CA as a$,
  Fy as a0,
  W as a1,
  dt as a2,
  es as a3,
  gs as a4,
  bw as a5,
  Qh as a6,
  In as a7,
  RD as a8,
  Ny as a9,
  FM as aA,
  Jl as aB,
  Ql as aC,
  Su as aD,
  VV as aE,
  _M as aF,
  cA as aG,
  dr as aH,
  ER as aI,
  NR as aJ,
  nf as aK,
  c_ as aL,
  _b as aM,
  sM as aN,
  TR as aO,
  pi as aP,
  Tb as aQ,
  i3 as aR,
  xy as aS,
  y3 as aT,
  Za as aU,
  za as aV,
  vR as aW,
  Ud as aX,
  Do as aY,
  Ua as aZ,
  rA as a_,
  Yo as aa,
  Uy as ab,
  Ga as ac,
  tn as ad,
  Nt as ae,
  ZV as af,
  JV as ag,
  jV as ah,
  BV as ai,
  NV as aj,
  zV as ak,
  UV as al,
  HV as am,
  WV as an,
  nc as ao,
  YV as ap,
  FV as aq,
  GV as ar,
  KV as as,
  qV as at,
  QV as au,
  XV as av,
  kb as aw,
  vu as ax,
  ec as ay,
  kR as az,
  LV as b,
  Pb as b0,
  Nd as b1,
  ib as b2,
  Yl as b3,
  Yy as b4,
  Ky as b5,
  ED as b6,
  MR as b7,
  AR as b8,
  gO as b9,
  gR as ba,
  Qa as bb,
  EO as bc,
  Z_ as bd,
  w3 as c,
  Xa as d,
  Cb as e,
  IV as f,
  e3 as g,
  r3 as h,
  t3 as i,
  P as j,
  h3 as k,
  $V as l,
  m3 as m,
  Kn as n,
  o3 as o,
  n3 as p,
  d3 as q,
  As as r,
  l3 as s,
  le as t,
  pE as u,
  s3 as v,
  c3 as w,
  u3 as x,
  f3 as y,
  a3 as z
};
