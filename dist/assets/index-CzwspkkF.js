const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-Vm8B-lbi.js',
      'assets/vendor-BXCbSo2_.js',
      'assets/Skeleton-DdLL8d67.js',
      'assets/TextField-Djr8gt34.js',
      'assets/MenuItem-ZWEe2ZC6.js',
      'assets/NewCollection-CAXCeX1E.js',
      'assets/axios-lonJZgKi.js',
      'assets/AddCircle-BZEFrEKU.js',
      'assets/dayjs.min-DO4_1a-m.js',
      'assets/ReuseableDataGrid-I9L9E5Xk.js',
      'assets/VisibilityOutlined-D9xuAg3y.js',
      'assets/LoopOutlined-D9YdCQQq.js',
      'assets/TabPanel-Cg-Z_Qr2.js',
      'assets/NewDesign-CxyMp35_.js',
      'assets/PlanningProcess-7356rjQz.js',
      'assets/Fabrication-Dh1xOLcd.js',
      'assets/Close-BQBfEc69.js',
      'assets/PersonAddAlt1Outlined-CtPtpl_k.js',
      'assets/StatusChip-C_oGlGq1.js',
      'assets/Roles-D7V6_sBo.js',
      'assets/MainMenu-BNllsTsz.js',
      'assets/SubMenu-Cjdn0Arr.js',
      'assets/Users-SGps0aUI.js',
      'assets/PrePlanningCreation-Bn-kg2zU.js',
      'assets/TermsandConditions-DeUR5-68.js',
      'assets/AddCircleOutlineOutlined-BaHny51-.js',
      'assets/CategoryOutlined-CACb1ZLu.js',
      'assets/AssignmentOutlined-BFpRNIkb.js',
      'assets/ProductionBatch-B1mE3M7j.js',
      'assets/FabricationSelectionIssuance-CN3U16pF.js',
      'assets/Receive-Dy1jfxAA.js',
      'assets/Inspection-BQvqMIZZ.js',
      'assets/ReceivingDetails-CDLbn-lM.js',
      'assets/Reports-CL7Yzt2u.js',
      'assets/GRN-B1q2G28p.js',
      'assets/ReceivingFromBX-B_m8Ocbf.js',
      'assets/Receiving-BnSDDwxH.js',
      'assets/Issuance-CoUd143h.js',
      'assets/DyeingIssuanceView-BMdlTzfl.js',
      'assets/RTV-C74wod1S.js',
      'assets/ProductionReceiving-DVvc4rbh.js',
      'assets/ShrinkageWastageConfiguration-BQe9zBMk.js',
      'assets/POGeneration-BfOWOVEY.js',
      'assets/index-CPcRkg-t.js',
      'assets/WelcomePage-JS92WGV3.js',
      'assets/Login3-B2DE2CP-.js'
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
var C = Xg.exports,
  Zg,
  tp = od;
(Zg = tp.createRoot), tp.hydrateRoot;
function yt(e) {
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
  Ca = Xw;
function Or(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Jg(e, t, r) {
  if (typeof e != 'function') throw new Error(yt(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(yt(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(yt(1));
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
    if (l) throw new Error(yt(3));
    return o;
  }
  function f(v) {
    if (typeof v != 'function') throw new Error(yt(4));
    if (l) throw new Error(yt(5));
    let x = !0;
    c();
    const b = a++;
    return (
      s.set(b, v),
      function () {
        if (x) {
          if (l) throw new Error(yt(6));
          (x = !1), c(), s.delete(b), (i = null);
        }
      }
    );
  }
  function d(v) {
    if (!Or(v)) throw new Error(yt(7));
    if (typeof v.type > 'u') throw new Error(yt(8));
    if (typeof v.type != 'string') throw new Error(yt(17));
    if (l) throw new Error(yt(9));
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
    if (typeof v != 'function') throw new Error(yt(10));
    (n = v), d({ type: Ca.REPLACE });
  }
  function p() {
    const v = f;
    return {
      subscribe(x) {
        if (typeof x != 'object' || x === null) throw new Error(yt(11));
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
    d({ type: Ca.INIT }),
    { dispatch: d, subscribe: f, getState: u, replaceReducer: m, [rp]: p }
  );
}
function Qw(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: Ca.INIT }) > 'u') throw new Error(yt(12));
    if (typeof r(void 0, { type: Ca.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(yt(13));
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
      if (typeof p > 'u') throw (a && a.type, new Error(yt(14)));
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
      throw new Error(yt(15));
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
function St(e, ...t) {
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
  return xr(e) || St(15, e), e[Wt].base_;
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
function Pn(e) {
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
  St(2);
}
function fl(e) {
  return Object.isFrozen(e);
}
var ou = {};
function zn(e) {
  const t = ou[e];
  return t || St(0, e), t;
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
      ? (r[Wt].modified_ && (iu(t), St(4)),
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
      const r = Pn(e);
      if (!Vi(r, t)) return a1(e, r, t);
      const n = r[t];
      return e.finalized_ || !wr(n)
        ? n
        : n === yc(e.base_, t)
          ? (bc(e), (e.copy_[t] = lu(n, e)))
          : n;
    },
    has(e, t) {
      return t in Pn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Pn(e));
    },
    set(e, t, r) {
      const n = ov(Pn(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const o = yc(Pn(e), t),
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
      const r = Pn(e),
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
      St(11);
    },
    getPrototypeOf(e) {
      return Vn(e.base_);
    },
    setPrototypeOf() {
      St(12);
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
  return (r ? Pn(r) : e)[t];
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
        typeof r != 'function' && St(6),
          n !== void 0 && typeof n != 'function' && St(7);
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
        } else St(1, t);
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
    wr(e) || St(8), xr(e) && (e = iv(e));
    const t = op(this),
      r = lu(e, void 0);
    return (r[Wt].isManual_ = !0), su(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Wt];
    (!r || !r.isManual_) && St(9);
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
  return xr(e) || St(10, e), sv(e);
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
        P = vc(x, b),
        S = g ? (Vi(v, b) ? t : r) : n;
      if (y === P && S === t) return;
      const E = m.concat(b);
      p.push(S === n ? { op: S, path: E } : { op: S, path: E, value: P }),
        h.push(
          S === r
            ? { op: n, path: E }
            : S === n
              ? { op: r, path: E, value: f(y) }
              : { op: t, path: E, value: f(y) }
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
        for (let P = 0; P < h.length - 1; P++) {
          const S = Wn(x);
          let E = h[P];
          typeof E != 'string' && typeof E != 'number' && (E = '' + E),
            (S === 0 || S === 1) &&
              (E === '__proto__' || E === 'constructor') &&
              St(19),
            typeof x == 'function' && E === 'prototype' && St(19),
            (x = vc(x, E)),
            typeof x != 'object' && St(18, h.join('/'));
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
                St(16);
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
            St(17, v);
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
  P1 = (e) => e && typeof e.match == 'function';
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
function E1(e) {
  return typeof e == 'boolean';
}
var C1 = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0
      } = t ?? {};
      let s = new uv();
      return r && (E1(r) ? s.push(b1) : s.push(x1(r.extraArgument))), s;
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
  const t = C1(),
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
function I1(e) {
  return typeof e == 'function';
}
function A1(e, t) {
  let [r, n, o] = fv(t),
    i;
  if (I1(e)) i = () => up(e());
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
  pv = (e, t) => (P1(e) ? e.match(t) : e(t));
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
function Io(...e) {
  return e.length === 0
    ? (t) => pl(t, ['rejected'])
    : hs(e)
      ? Ur(...e.map((t) => t.rejected))
      : Io()(e[0]);
}
function hl(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? Ri(Io(...e), t)
    : hs(e)
      ? Ri(Io(...e), t)
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
var _1 = ['name', 'message', 'stack', 'code'],
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
      for (const r of _1) typeof e[r] == 'string' && (t[r] = e[r]);
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
            var y, P;
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
              const E = new Promise((T, R) => {
                (p = () => {
                  R({ name: 'AbortError', message: h || 'Aborted' });
                }),
                  m.signal.addEventListener('abort', p);
              });
              c(
                i(
                  d,
                  l,
                  (P = n == null ? void 0 : n.getPendingMeta) == null
                    ? void 0
                    : P.call(
                        n,
                        { requestId: d, arg: l },
                        { getState: u, extra: f }
                      )
                )
              ),
                (b = await Promise.race([
                  E,
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
          const P = typeof g == 'string' ? g : g.type;
          if (!P) throw new Error(Ot(12));
          if (P in c.sliceCaseReducersByType) throw new Error(Ot(13));
          return (c.sliceCaseReducersByType[P] = y), u;
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
        P = {
          reducerName: g,
          type: N1(i, g),
          createNotation: typeof o.reducers == 'function'
        };
      U1(y) ? q1(P, y, u, t) : z1(P, y, u);
    });
    function f() {
      const [g = {}, y = [], P = void 0] =
          typeof o.extraReducers == 'function'
            ? fv(o.extraReducers)
            : [o.extraReducers],
        S = { ...g, ...c.sliceCaseReducersByType };
      return A1(o.initialState, (E) => {
        for (let T in S) E.addCase(T, S[T]);
        for (let T of c.sliceMatchers) E.addMatcher(T.matcher, T.reducer);
        for (let T of y) E.addMatcher(T.matcher, T.reducer);
        P && E.addDefaultCase(P);
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
      function P(E) {
        let T = E[g];
        return typeof T > 'u' && y && (T = v()), T;
      }
      function S(E = d) {
        const T = dp(m, y, { insert: () => new WeakMap() });
        return dp(T, E, {
          insert: () => {
            const R = {};
            for (const [k, I] of Object.entries(o.selectors ?? {}))
              R[k] = V1(I, E, v, y);
            return R;
          }
        });
      }
      return {
        reducerPath: g,
        getSelectors: S,
        get selectors() {
          return S(P);
        },
        selectSlice: P
      };
    }
    const b = {
      name: i,
      reducer: h,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: v,
      ...x(s),
      injectInto(g, { reducerPath: y, ...P } = {}) {
        const S = y ?? s;
        return (
          g.inject({ reducerPath: S, reducer: h }, P), { ...b, ...x(S, !0) }
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
  PS = (e) => e.replace(/^\//, '');
function ES(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (wS(t)) return t;
  const r = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
  return (e = SS(e)), (t = PS(t)), `${e}${r}${t}`;
}
var yp = (e) => [].concat(...e);
function CS() {
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
          url: P,
          headers: S = new Headers(u.headers),
          params: E = void 0,
          responseHandler: T = l ?? 'json',
          validateStatus: R = c ?? RS,
          timeout: k = a,
          ...I
        } = typeof d == 'string' ? { url: d } : d,
        _ = { ...u, signal: p, ...I };
      (S = new Headers(wp(S))),
        (_.headers =
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
        (!_.headers.has('content-type') &&
          L(_.body) &&
          _.headers.set('content-type', i),
        L(_.body) && o(_.headers) && (_.body = JSON.stringify(_.body, s)),
        E)
      ) {
        const J = ~P.indexOf('?') ? '&' : '?',
          ae = n ? n(E) : new URLSearchParams(wp(E));
        P += J + ae;
      }
      P = ES(e, P);
      const D = new Request(P, _);
      y = { request: new Request(P, _) };
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
  Pv = Lt('__rtkq/unfocused'),
  md = Lt('__rtkq/online'),
  Ev = Lt('__rtkq/offline');
function Cv(e) {
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
function Pp(e) {
  return e != null;
}
function Co(e) {
  let t = 0;
  for (const r in e) t++;
  return t;
}
function IS(e, t) {
  return e.catch(t);
}
var Hi = Symbol('forceQueryFn'),
  du = (e) => typeof e[Hi] == 'function';
function AS({
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
      var P;
      const g = o.endpointDefinitions[v],
        y = e({ queryArgs: x, endpointDefinition: g, endpointName: v });
      return (P = i.get(b)) == null ? void 0 : P[y];
    };
  }
  function f(v, x) {
    return (b) => {
      var g;
      return (g = s.get(b)) == null ? void 0 : g[x];
    };
  }
  function d() {
    return (v) => Object.values(i.get(v) || {}).filter(Pp);
  }
  function m() {
    return (v) => Object.values(s.get(v) || {}).filter(Pp);
  }
  function p(v, x) {
    const b =
      (
        g,
        {
          subscribe: y = !0,
          forceRefetch: P,
          subscriptionOptions: S,
          [Hi]: E,
          ...T
        } = {}
      ) =>
      (R, k) => {
        var J;
        const I = e({ queryArgs: g, endpointDefinition: x, endpointName: v }),
          _ = t({
            ...T,
            type: 'query',
            subscribe: y,
            forceRefetch: P,
            subscriptionOptions: S,
            endpointName: v,
            originalArgs: g,
            queryCacheKey: I,
            [Hi]: E
          }),
          L = n.endpoints[v].select(g),
          D = R(_),
          N = L(k()),
          { requestId: B, abort: j } = D,
          F = N.requestId !== B,
          z = (J = i.get(R)) == null ? void 0 : J[I],
          q = () => L(k()),
          fe = Object.assign(
            E
              ? D.then(q)
              : F && !z
                ? Promise.resolve(N)
                : Promise.all([z, D]).then(q),
            {
              arg: g,
              requestId: B,
              subscriptionOptions: S,
              queryCacheKey: I,
              abort: j,
              async unwrap() {
                const ae = await fe;
                if (ae.isError) throw ae.error;
                return ae.data;
              },
              refetch: () => R(b(g, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                y && R(a({ queryCacheKey: I, requestId: B }));
              },
              updateSubscriptionOptions(ae) {
                (fe.subscriptionOptions = ae),
                  R(
                    c({
                      endpointName: v,
                      requestId: B,
                      queryCacheKey: I,
                      options: ae
                    })
                  );
              }
            }
          );
        if (!z && !F && !E) {
          const ae = i.get(R) || {};
          (ae[I] = fe),
            i.set(R, ae),
            fe.then(() => {
              delete ae[I], Co(ae) || i.delete(R);
            });
        }
        return fe;
      };
    return b;
  }
  function h(v) {
    return (x, { track: b = !0, fixedCacheKey: g } = {}) =>
      (y, P) => {
        const S = r({
            type: 'mutation',
            endpointName: v,
            originalArgs: x,
            track: b,
            fixedCacheKey: g
          }),
          E = y(S),
          { requestId: T, abort: R, unwrap: k } = E,
          I = IS(
            E.unwrap().then((N) => ({ data: N })),
            (N) => ({ error: N })
          ),
          _ = () => {
            y(l({ requestId: T, fixedCacheKey: g }));
          },
          L = Object.assign(I, {
            arg: E.arg,
            requestId: T,
            abort: R,
            unwrap: k,
            reset: _
          }),
          D = s.get(y) || {};
        return (
          s.set(y, D),
          (D[T] = L),
          L.then(() => {
            delete D[T], Co(D) || s.delete(y);
          }),
          g &&
            ((D[g] = L),
            L.then(() => {
              D[g] === L && (delete D[g], Co(D) || s.delete(y));
            })),
          L
        );
      };
  }
}
function Ep(e) {
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
  const s = (b, g, y, P) => (S, E) => {
      const T = r[b],
        R = n({ queryArgs: g, endpointDefinition: T, endpointName: b });
      if (
        (S(
          o.internalActions.queryResultPatched({ queryCacheKey: R, patches: y })
        ),
        !P)
      )
        return;
      const k = o.endpoints[b].select(g)(E()),
        I = gd(T.providesTags, k.data, void 0, g, {}, i);
      S(
        o.internalActions.updateProvidedBy({
          queryCacheKey: R,
          providedTags: I
        })
      );
    },
    a =
      (b, g, y, P = !0) =>
      (S, E) => {
        const R = o.endpoints[b].select(g)(E());
        let k = {
          patches: [],
          inversePatches: [],
          undo: () => S(o.util.patchQueryData(b, g, k.inversePatches, P))
        };
        if (R.status === 'uninitialized') return k;
        let I;
        if ('data' in R)
          if (wr(R.data)) {
            const [_, L, D] = av(R.data, y);
            k.patches.push(...L), k.inversePatches.push(...D), (I = _);
          } else
            (I = y(R.data)),
              k.patches.push({ op: 'replace', path: [], value: I }),
              k.inversePatches.push({ op: 'replace', path: [], value: R.data });
        return (
          k.patches.length === 0 ||
            S(o.util.patchQueryData(b, g, k.patches, P)),
          k
        );
      },
    l = (b, g, y) => (P) =>
      P(
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
        rejectWithValue: P,
        fulfillWithValue: S,
        dispatch: E,
        getState: T,
        extra: R
      }
    ) => {
      const k = r[b.endpointName];
      try {
        let I = Ep,
          _;
        const L = {
            signal: g,
            abort: y,
            dispatch: E,
            getState: T,
            extra: R,
            endpoint: b.endpointName,
            type: b.type,
            forced: b.type === 'query' ? u(b, T()) : void 0
          },
          D = b.type === 'query' ? b[Hi] : void 0;
        if (
          (D
            ? (_ = D())
            : k.query
              ? ((_ = await t(k.query(b.originalArgs), L, k.extraOptions)),
                k.transformResponse && (I = k.transformResponse))
              : (_ = await k.queryFn(b.originalArgs, L, k.extraOptions, (N) =>
                  t(N, L, k.extraOptions)
                )),
          typeof process < 'u',
          _.error)
        )
          throw new Sp(_.error, _.meta);
        return S(await I(_.data, _.meta, b.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: _.meta,
          [vo]: !0
        });
      } catch (I) {
        let _ = I;
        if (_ instanceof Sp) {
          let L = Ep;
          k.query && k.transformErrorResponse && (L = k.transformErrorResponse);
          try {
            return P(await L(_.value, _.meta, b.originalArgs), {
              baseQueryMeta: _.meta,
              [vo]: !0
            });
          } catch (D) {
            _ = D;
          }
        }
        throw (typeof process < 'u', console.error(_), _);
      }
    };
  function u(b, g) {
    var T, R, k;
    const y =
        (R = (T = g[e]) == null ? void 0 : T.queries) == null
          ? void 0
          : R[b.queryCacheKey],
      P = (k = g[e]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      S = y == null ? void 0 : y.fulfilledTimeStamp,
      E = b.forceRefetch ?? (b.subscribe && P);
    return E ? E === !0 || (Number(new Date()) - Number(S)) / 1e3 >= E : !1;
  }
  const f = pp(`${e}/executeQuery`, c, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [vo]: !0 };
      },
      condition(b, { getState: g }) {
        var k, I, _;
        const y = g(),
          P =
            (I = (k = y[e]) == null ? void 0 : k.queries) == null
              ? void 0
              : I[b.queryCacheKey],
          S = P == null ? void 0 : P.fulfilledTimeStamp,
          E = b.originalArgs,
          T = P == null ? void 0 : P.originalArgs,
          R = r[b.endpointName];
        return du(b)
          ? !0
          : (P == null ? void 0 : P.status) === 'pending'
            ? !1
            : u(b, y) ||
                (Cv(R) &&
                  (_ = R == null ? void 0 : R.forceRefetch) != null &&
                  _.call(R, {
                    currentArg: E,
                    previousArg: T,
                    endpointState: P,
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
    h = (b, g, y) => (P, S) => {
      const E = m(y) && y.force,
        T = p(y) && y.ifOlderThan,
        R = (I = !0) => {
          const _ = { forceRefetch: I, isPrefetch: !0 };
          return o.endpoints[b].initiate(g, _);
        },
        k = o.endpoints[b].select(g)(S());
      if (E) P(R());
      else if (T) {
        const I = k == null ? void 0 : k.fulfilledTimeStamp;
        if (!I) {
          P(R());
          return;
        }
        (Number(new Date()) - Number(new Date(I))) / 1e3 >= T && P(R());
      } else P(R(!1));
    };
  function v(b) {
    return (g) => {
      var y, P;
      return (
        ((P = (y = g == null ? void 0 : g.meta) == null ? void 0 : y.arg) ==
        null
          ? void 0
          : P.endpointName) === b
      );
    };
  }
  function x(b, g) {
    return {
      matchPending: Ri(dd(b), v(g)),
      matchFulfilled: Ri(sn(b), v(g)),
      matchRejected: Ri(Io(b), v(g))
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
function Cp(e, t, r) {
  const n = e[qi(t)];
  n && r(n);
}
var ii = {};
function _S({
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
          reducer(g, { payload: { queryCacheKey: y, patches: P } }) {
            qs(g, y, (S) => {
              S.data = ap(S.data, P.concat());
            });
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(t.pending, (y, { meta: P, meta: { arg: S } }) => {
          var T;
          const E = du(S);
          y[(T = S.queryCacheKey)] ??
            (y[T] = { status: 'uninitialized', endpointName: S.endpointName }),
            qs(y, S.queryCacheKey, (R) => {
              (R.status = 'pending'),
                (R.requestId = E && R.requestId ? R.requestId : P.requestId),
                S.originalArgs !== void 0 && (R.originalArgs = S.originalArgs),
                (R.startedTimeStamp = P.startedTimeStamp);
            });
        })
          .addCase(t.fulfilled, (y, { meta: P, payload: S }) => {
            qs(y, P.arg.queryCacheKey, (E) => {
              if (E.requestId !== P.requestId && !du(P.arg)) return;
              const { merge: T } = n[P.arg.endpointName];
              if (((E.status = 'fulfilled'), T))
                if (E.data !== void 0) {
                  const {
                    fulfilledTimeStamp: R,
                    arg: k,
                    baseQueryMeta: I,
                    requestId: _
                  } = P;
                  let L = ps(E.data, (D) =>
                    T(D, S, {
                      arg: k.originalArgs,
                      baseQueryMeta: I,
                      fulfilledTimeStamp: R,
                      requestId: _
                    })
                  );
                  E.data = L;
                } else E.data = S;
              else
                E.data =
                  n[P.arg.endpointName].structuralSharing ?? !0
                    ? Sv(xr(E.data) ? e1(E.data) : E.data, S)
                    : S;
              delete E.error, (E.fulfilledTimeStamp = P.fulfilledTimeStamp);
            });
          })
          .addCase(
            t.rejected,
            (
              y,
              {
                meta: { condition: P, arg: S, requestId: E },
                error: T,
                payload: R
              }
            ) => {
              qs(y, S.queryCacheKey, (k) => {
                if (!P) {
                  if (k.requestId !== E) return;
                  (k.status = 'rejected'), (k.error = R ?? T);
                }
              });
            }
          )
          .addMatcher(s, (y, P) => {
            const { queries: S } = i(P);
            for (const [E, T] of Object.entries(S))
              ((T == null ? void 0 : T.status) === 'fulfilled' ||
                (T == null ? void 0 : T.status) === 'rejected') &&
                (y[E] = T);
          });
      }
    }),
    f = to({
      name: `${e}/mutations`,
      initialState: ii,
      reducers: {
        removeMutationResult: {
          reducer(g, { payload: y }) {
            const P = qi(y);
            P in g && delete g[P];
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(
          r.pending,
          (
            y,
            { meta: P, meta: { requestId: S, arg: E, startedTimeStamp: T } }
          ) => {
            E.track &&
              (y[qi(P)] = {
                requestId: S,
                status: 'pending',
                endpointName: E.endpointName,
                startedTimeStamp: T
              });
          }
        )
          .addCase(r.fulfilled, (y, { payload: P, meta: S }) => {
            S.arg.track &&
              Cp(y, S, (E) => {
                E.requestId === S.requestId &&
                  ((E.status = 'fulfilled'),
                  (E.data = P),
                  (E.fulfilledTimeStamp = S.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, (y, { payload: P, error: S, meta: E }) => {
            E.arg.track &&
              Cp(y, E, (T) => {
                T.requestId === E.requestId &&
                  ((T.status = 'rejected'), (T.error = P ?? S));
              });
          })
          .addMatcher(s, (y, P) => {
            const { mutations: S } = i(P);
            for (const [E, T] of Object.entries(S))
              ((T == null ? void 0 : T.status) === 'fulfilled' ||
                (T == null ? void 0 : T.status) === 'rejected') &&
                E !== (T == null ? void 0 : T.requestId) &&
                (y[E] = T);
          });
      }
    }),
    d = to({
      name: `${e}/invalidation`,
      initialState: ii,
      reducers: {
        updateProvidedBy: {
          reducer(g, y) {
            var E, T;
            const { queryCacheKey: P, providedTags: S } = y.payload;
            for (const R of Object.values(g))
              for (const k of Object.values(R)) {
                const I = k.indexOf(P);
                I !== -1 && k.splice(I, 1);
              }
            for (const { type: R, id: k } of S) {
              const I =
                (E = g[R] ?? (g[R] = {}))[(T = k || '__internal_without_id')] ??
                (E[T] = []);
              I.includes(P) || I.push(P);
            }
          },
          prepare: oi()
        }
      },
      extraReducers(g) {
        g.addCase(
          u.actions.removeQueryResult,
          (y, { payload: { queryCacheKey: P } }) => {
            for (const S of Object.values(y))
              for (const E of Object.values(S)) {
                const T = E.indexOf(P);
                T !== -1 && E.splice(T, 1);
              }
          }
        )
          .addMatcher(s, (y, P) => {
            var E, T;
            const { provided: S } = i(P);
            for (const [R, k] of Object.entries(S))
              for (const [I, _] of Object.entries(k)) {
                const L =
                  (E = y[R] ?? (y[R] = {}))[
                    (T = I || '__internal_without_id')
                  ] ?? (E[T] = []);
                for (const D of _) L.includes(D) || L.push(D);
              }
          })
          .addMatcher(Ur(sn(t), hl(t)), (y, P) => {
            const S = Tv(P, 'providesTags', n, a),
              { queryCacheKey: E } = P.meta.arg;
            d.caseReducers.updateProvidedBy(
              y,
              d.actions.updateProvidedBy({ queryCacheKey: E, providedTags: S })
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
        online: CS(),
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
          .addCase(Ev, (y) => {
            y.online = !1;
          })
          .addCase(hd, (y) => {
            y.focused = !0;
          })
          .addCase(Pv, (y) => {
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
var In = Symbol.for('RTKQ/skipToken'),
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
        m === In
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
        typeof f == 'object' ? (d = qi(f) ?? In) : (d = f),
        r(
          d === In
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
      f = Ur(sn(n, o), Io(n, o));
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
      const P = i.util.selectInvalidatedBy(b, y);
      t.batch(() => {
        const S = Array.from(P.values());
        for (const { queryCacheKey: E } of S) {
          const T = g.queries[E],
            R = l.currentSubscriptions[E] ?? {};
          T &&
            (Co(R) === 0
              ? x.dispatch(c({ queryCacheKey: E }))
              : T.status !== 'uninitialized' && x.dispatch(a(T, E)));
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
            (Co(h) === 0
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
      const P = new Promise((I) => {
          y.cacheEntryRemoved = I;
        }),
        S = Promise.race([
          new Promise((I) => {
            y.valueResolved = I;
          }),
          P.then(() => {
            throw Mp;
          })
        ]);
      S.catch(() => {}), (c[h] = y);
      const E = e.endpoints[m].select(b.type === 'query' ? p : h),
        T = v.dispatch((I, _, L) => L),
        R = {
          ...v,
          getCacheEntry: () => E(v.getState()),
          requestId: x,
          extra: T,
          updateCachedData:
            b.type === 'query'
              ? (I) => v.dispatch(e.util.updateQueryData(m, p, I))
              : void 0,
          cacheDataLoaded: S,
          cacheEntryRemoved: P
        },
        k = g(p, R);
      Promise.resolve(k).catch((I) => {
        if (I !== Mp) throw I;
      });
    }
    return u;
  },
  US = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
    const o = dd(r, n),
      i = Io(r, n),
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
            g = new Promise((E, T) => {
              (b.resolve = E), (b.reject = T);
            });
          g.catch(() => {}), (a[m] = b);
          const y = e.endpoints[p].select(v.type === 'query' ? h : m),
            P = u.dispatch((E, T, R) => R),
            S = {
              ...u,
              getCacheEntry: () => y(u.getState()),
              requestId: m,
              extra: P,
              updateCachedData:
                v.type === 'query'
                  ? (E) => u.dispatch(e.util.updateQueryData(p, h, E))
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
          const { queryCacheKey: g, requestId: y, options: P } = p.payload;
          return (
            (v = m == null ? void 0 : m[g]) != null && v[y] && (m[g][y] = P), !0
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
            P = m[(x = g.queryCacheKey)] ?? (m[x] = {});
          return (
            (P[`${y}_running`] = {}),
            g.subscribe && (P[y] = g.subscriptionOptions ?? P[y] ?? {}),
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
            meta: { condition: g, arg: y, requestId: P }
          } = p;
          if (g && y.subscribe) {
            const S = m[(b = y.queryCacheKey)] ?? (m[b] = {});
            (S[P] = y.subscriptionOptions ?? S[P] ?? {}), (h = !0);
          }
        }
        return h;
      },
      c = () => r.currentSubscriptions,
      d = {
        getSubscriptions: c,
        getSubscriptionCount: (m) => {
          const h = c()[m] ?? {};
          return Co(h);
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
          P = f.getState(),
          [S, E] = v(g, y, P);
        let T;
        if (
          (S ? (T = b(g)) : (T = E),
          f.getState()[t] && (x(g, y, P), a(g) || o.hasRehydrationInfo(g)))
        )
          for (let R of h) R(g, y, P);
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
          onOffline: Ev,
          onFocus: hd,
          onFocusLost: Pv
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
        { reducer: y, actions: P } = _S({
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
        resetApiState: P.resetApiState
      }),
        Qr(t.internalActions, P);
      const { middleware: S, actions: E } = GS({
        reducerPath: o,
        context: f,
        queryThunk: m,
        mutationThunk: p,
        api: t,
        assertTagType: d
      });
      Qr(t.util, E), Qr(t, { reducer: y, middleware: S });
      const {
        buildQuerySelector: T,
        buildMutationSelector: R,
        selectInvalidatedBy: k,
        selectCachedArgsForQuery: I
      } = LS({ serializeQueryArgs: i, reducerPath: o, createSelector: e });
      Qr(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: I });
      const {
        buildInitiateQuery: _,
        buildInitiateMutation: L,
        getRunningMutationThunk: D,
        getRunningMutationsThunk: N,
        getRunningQueriesThunk: B,
        getRunningQueryThunk: j
      } = AS({
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
              Cv(z)
                ? Qr(
                    q.endpoints[F],
                    { name: F, select: T(F, z), initiate: _(F, z) },
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
function Ip(e, t, r, n) {
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
function Pc(e) {
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
  eP = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  tP = eP(),
  rP = () => (JS || tP ? w.useLayoutEffect : w.useEffect),
  nP = rP(),
  oP = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: wv.pending
        }
      : e;
function iP({
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
        E = l.endpointDefinitions[S];
      a({
        queryArgs: h.originalArgs,
        endpointDefinition: E,
        endpointName: S
      }) === a({ queryArgs: v, endpointDefinition: E, endpointName: S }) &&
        (h = void 0);
    }
    let x = p.isSuccess ? p.data : h == null ? void 0 : h.data;
    x === void 0 && (x = p.data);
    const b = x !== void 0,
      g = p.isLoading,
      y = (!h || h.isLoading || h.isUninitialized) && !b && g,
      P = p.isSuccess || (g && b);
    return {
      ...p,
      data: x,
      currentData: p.data,
      isFetching: g,
      isLoading: y,
      isSuccess: P
    };
  }
  function f(p, h) {
    const v = r(),
      x = Pc(h);
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
          refetchOnMountOrArgChange: P,
          skip: S = !1,
          pollingInterval: E = 0,
          skipPollingIfUnfocused: T = !1
        } = {}
      ) => {
        const { initiate: R } = e.endpoints[p],
          k = r(),
          I = w.useRef(void 0);
        if (!I.current) {
          const q = k(e.internalActions.internal_getRTKQSubscriptions());
          I.current = q;
        }
        const _ = Ip(S ? In : b, QS, l.endpointDefinitions[p], p),
          L = Pc({
            refetchOnReconnect: g,
            refetchOnFocus: y,
            pollingInterval: E,
            skipPollingIfUnfocused: T
          }),
          D = w.useRef(!1),
          N = w.useRef(void 0);
        let { queryCacheKey: B, requestId: j } = N.current || {},
          F = !1;
        B && j && (F = I.current.isRequestSubscribed(B, j));
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
            if ((typeof process < 'u', _ === In)) {
              q == null || q.unsubscribe(), (N.current = void 0);
              return;
            }
            const fe = (J = N.current) == null ? void 0 : J.subscriptionOptions;
            if (!q || q.arg !== _) {
              q == null || q.unsubscribe();
              const ae = k(R(_, { subscriptionOptions: L, forceRefetch: P }));
              N.current = ae;
            } else L !== fe && q.updateSubscriptionOptions(L);
          }, [k, R, P, _, L, z]),
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
        skipPollingIfUnfocused: P = !1
      } = {}) => {
        const { initiate: S } = e.endpoints[p],
          E = r(),
          [T, R] = w.useState(Sc),
          k = w.useRef(void 0),
          I = Pc({
            refetchOnReconnect: b,
            refetchOnFocus: g,
            pollingInterval: y,
            skipPollingIfUnfocused: P
          });
        c(() => {
          var N, B;
          const D = (N = k.current) == null ? void 0 : N.subscriptionOptions;
          I !== D &&
            ((B = k.current) == null || B.updateSubscriptionOptions(I));
        }, [I]);
        const _ = w.useRef(I);
        c(() => {
          _.current = I;
        }, [I]);
        const L = w.useCallback(
          function (D, N = !1) {
            let B;
            return (
              t(() => {
                var j;
                (j = k.current) == null || j.unsubscribe(),
                  (k.current = B =
                    E(
                      S(D, { subscriptionOptions: _.current, forceRefetch: !N })
                    )),
                  R(D);
              }),
              B
            );
          },
          [E, S]
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
        const { select: P } = e.endpoints[p],
          S = Ip(g ? In : b, a, l.endpointDefinitions[p], p),
          E = w.useRef(void 0),
          T = w.useMemo(
            () =>
              s([P(S), (L, D) => D, (L) => S], u, {
                memoizeOptions: { resultEqualityCheck: ki }
              }),
            [P, S]
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
          k = n((L) => R(L, E.current), ki),
          I = o(),
          _ = T(I.getState(), E.current);
        return (
          nP(() => {
            E.current = _;
          }, [_]),
          k
        );
      };
    return {
      useQueryState: x,
      useQuerySubscription: h,
      useLazyQuerySubscription: v,
      useLazyQuery(b) {
        const [g, y] = v(b),
          P = x(y, { ...b, skip: y === Sc }),
          S = w.useMemo(() => ({ lastArg: y }), [y]);
        return w.useMemo(() => [g, P, S], [g, P, S]);
      },
      useQuery(b, g) {
        const y = h(b, g),
          P = x(b, {
            selectFromResult: b === In || (g != null && g.skip) ? void 0 : oP,
            ...g
          }),
          {
            data: S,
            status: E,
            isLoading: T,
            isSuccess: R,
            isError: k,
            error: I
          } = P;
        return (
          w.useDebugValue({
            data: S,
            status: E,
            isLoading: T,
            isSuccess: R,
            isError: k,
            error: I
          }),
          w.useMemo(() => ({ ...P, ...y }), [P, y])
        );
      }
    };
  }
  function m(p) {
    return ({ selectFromResult: h, fixedCacheKey: v } = {}) => {
      const { select: x, initiate: b } = e.endpoints[p],
        g = r(),
        [y, P] = w.useState();
      w.useEffect(
        () => () => {
          (y != null && y.arg.fixedCacheKey) || y == null || y.reset();
        },
        [y]
      );
      const S = w.useCallback(
          function (fe) {
            const J = g(b(fe, { fixedCacheKey: v }));
            return P(J), J;
          },
          [g, b, v]
        ),
        { requestId: E } = y || {},
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
        I = v == null ? (y == null ? void 0 : y.arg.originalArgs) : void 0,
        _ = w.useCallback(() => {
          t(() => {
            y && P(void 0),
              v &&
                g(
                  e.internalActions.removeMutationResult({
                    requestId: E,
                    fixedCacheKey: v
                  })
                );
          });
        }, [g, v, y, E]),
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
        () => ({ ...k, originalArgs: I, reset: _ }),
        [k, I, _]
      );
      return w.useMemo(() => [S, q], [S, q]);
    };
  }
}
var sP = Symbol(),
  aP = ({
    batch: e = bS,
    hooks: t = { useDispatch: Uo, useSelector: dn, useStore: xv },
    createSelector: r = cd,
    unstable__sideEffectsInRender: n = !1,
    ...o
  } = {}) => ({
    name: sP,
    init(i, { serializeQueryArgs: s }, a) {
      const l = i,
        {
          buildQueryHooks: c,
          buildMutationHook: u,
          usePrefetch: f
        } = iP({
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
  pn = $S(KS(), aP());
const Ma = pn({
    reducerPath: 'collectionApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getCollectionList: e.query({
        query: () => 'CollectionRegistration/GetCollectionList?appId=1'
      }),
      getDistinctCollections: e.query({
        query: (t) => `PrePlanning/GetDistinctCollections?collectionId=${t}`
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
    useGetCollectionListQuery: jV,
    useGetDistinctCollectionsQuery: BV,
    useGetCollectionByIdQuery: NV,
    useDeleteCollectionByIdMutation: FV,
    useSaveCollectionMutation: VV
  } = Ma,
  Oa = pn({
    reducerPath: 'designApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getDesignListByCollectionId: e.query({
        query: (t) =>
          `DesignRegistration/GetDesignListByCollectionId?Collectionid=${t}`
      }),
      getPlanningHeaderListByCollectionId: e.query({
        query: (t) =>
          `PrePlanning/GetPlanningHeaderListByCollectionId?collectionId=${t}`
      })
    })
  }),
  {
    useGetDesignListByCollectionIdQuery: WV,
    useGetPlanningHeaderListByCollectionIdQuery: zV
  } = Oa,
  Ia = pn({
    reducerPath: 'lookupApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getLookUpList: e.query({ query: () => 'Common/GetLookUpList?appId=1' }),
      GetStatusLookUp: e.query({
        query: () => 'Common/GetStatusLookUp?appId=1'
      }),
      getShrinkageWastageList: e.query({
        query: (t) => `Configurations/GetShrinkageWastageList?vendorID=${t}`
      }),
      getWareHouseLocations: e.query({
        query: () => 'Common/GetLocationsbyAppId?appId=1'
      }),
      getTruckInfo: e.query({ query: () => 'Common/GetTruckInfo' }),
      getDriverInfo: e.query({ query: () => 'Common/GetDriverInfo' })
    })
  }),
  {
    useGetLookUpListQuery: UV,
    useGetShrinkageWastageListQuery: HV,
    useGetStatusLookUpQuery: qV,
    useGetWareHouseLocationsQuery: GV,
    useGetTruckInfoQuery: KV,
    useGetDriverInfoQuery: YV
  } = Ia,
  Aa = pn({
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
      }),
      getDistinctCollections: e.query({
        query: (t) => `PrePlanning/GetDistinctCollections?collectionId=${t}`
      }),
      getSummaryByCollection: e.query({
        query: ({ collectionId: t, collectionBatchId: r }) =>
          `PrePlanning/SummaryByCollection?collectionId=${t}&collectionBatchId=${r}`
      })
    })
  }),
  {
    useGetCollectionFromPlanningHeaderQuery: XV,
    useGetDesignFromPlanningHeaderByCollectionIdQuery: QV,
    useGetPrePlanningHeaderByDesignIdQuery: ZV,
    useGetFabricFromPrePlanningByBatchNoQuery: JV,
    useGetFabricRequisitionListByBatchNoQuery: e3,
    useGetComponentsByBatchNoQuery: t3,
    useGetFabricByComponentsAndBatchNoQuery: r3,
    useGetFabricColorByComponentsBatchNoAndFabricIdQuery: n3,
    useGetEmbroideryListByBatchNoQuery: o3,
    useGetSchffiliListByBatchNoQuery: i3,
    useGetFabricColorFromPrePlanningByFabricIdQuery: s3,
    useGetDyeingPrintingListByBatchNoQuery: a3,
    useGetPrePlanningByPlanningHeaderIdQuery: l3,
    useGetAdditionalProcessListByBatchNoQuery: c3,
    useGetAdditionalProcessDetailsByAdditionalProcessIdQuery: u3,
    useGetDyeingPrintingDetailsByDpIdQuery: d3,
    useGetEmbroideryDetailsListByEmbroideryIdQuery: f3,
    useGetDistinctCollectionsQuery: p3,
    useGetSummaryByCollectionQuery: h3
  } = Aa,
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
    useGetRoleListQuery: m3,
    useGetMainMenuListQuery: g3,
    useGetSubMenuListQuery: v3,
    useGetUsersListQuery: y3,
    useGetAssignedRolesByEmpIdQuery: b3
  } = Da,
  _a = pn({
    reducerPath: 'dashboardApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getPlanningDashboardByYear: e.query({
        query: () => 'Dashboard/GetPlanningDashboardByYear?year=2024'
      })
    })
  }),
  { useGetPlanningDashboardByYearQuery: x3 } = _a,
  La = pn({
    reducerPath: 'productionApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/' }),
    endpoints: (e) => ({
      getCollectionListFromPlanningHeader: e.query({
        query: () => 'Production/GetCollectionListFromPlanningHeader?appId=1'
      }),
      getDesignListFromCompletedCollectionId: e.query({
        query: (t) =>
          `Production/GetDesignListFromCompletedCollectionId?appId=1&Collectionid=${t}`
      }),
      getProductionBatchForProcessing: e.query({
        query: () => 'Production/GetProductionBatchForProcessing?appId=1'
      }),
      getProductionProcessList: e.query({
        query: (t) => `Production/GetProductionProcessList?appId=1&status=${t}`
      }),
      getProductionProcessByProductionId: e.query({
        query: ({ productionId: t, status: r }) =>
          `Production/GetProductionProcessByProductionId?appId=1&productionId=${t}&status=${r}`
      }),
      getFabricForProductionByCollectionId: e.query({
        query: (t) =>
          `Production/GetFabricForProductionByCollectionId?appId=1&collectionid=${t}`
      }),
      getProductionBatchInProcess: e.query({
        query: (t) => 'Production/GetProductionBatchInProcess?appId=1'
      }),
      getProductionBatchDetailsByProductionid: e.query({
        query: (t) =>
          `Production/GetProductionBatchDetailsByProductionid?ProductionId=${t}`
      }),
      getBxStockHeaderList: e.query({
        query: () => 'BxStockReceiving/GetBxStockHeaderList'
      }),
      getBxStockHeaderDetailList: e.query({
        query: () => 'BxStockReceiving/GetBxStockHeaderDetailList'
      }),
      getPrePlanningFabricFromCollectionId: e.query({
        query: (t) =>
          `Production/GetPrePlanningFabricFromCollectionId?appId=1&collectionId=${t}`
      }),
      GetVBxStockReceivingList: e.query({
        query: (t) =>
          `BxStockReceiving/GetVBxStockReceivingList?productionId=${t}`
      }),
      GetProductionFabricDetailList: e.query({
        query: ({ productionHeaderId: t, status: r }) =>
          `Production/GetProductionFabricDetailList?productionHeaderId=${t}&Status=${r}`
      }),
      getStockReceivingByProductionHeaderId: e.query({
        query: (t) =>
          `StockReceiving/GetStockReceivingHeader?productionHeaderId=${t}`
      }),
      GetITPListByStatus: e.query({
        query: (t) => `ITP/GetITPListByStatus?status=${t}`
      }),
      getFabricForProductionByProductionId: e.query({
        query: (t) =>
          `Production/GetFabricForProductionByProductionId?productionId=${t}&appId=1`
      }),
      getVendorsByFabricID: e.query({
        query: (t) => `Configurations/GetVendorsByFabricID?fabricId=${t}`
      }),
      getProductionPODesignByFabricAndProductionId: e.query({
        query: ({ fabricId: t, productionId: r }) =>
          `Production/GetProductionPODesignByFabricAndProductionId?fabricId=${t}&productionId=${r}`
      }),
      getDyeingPoHeaderList: e.query({
        query: () => 'PO/GetDyeingPoHeaderList?appId=1'
      }),
      getDyeingPODetailsPoId: e.query({
        query: (t) => `PO/GetDyeingPODetailsPoId?PoId=${t}`
      }),
      dyeingPoAssignTermDetailsByPoId: e.query({
        query: (t) => `PO/DyeingPoAssignTermDetailsByPoId?PoId=${t}`
      }),
      getDyeingPoHeaderListbyPoId: e.query({
        query: (t) => `PO/GetDyeingPoHeaderListbyPoId?PoId=${t}`
      }),
      getProductionFabricDetailByProductionIdandStatus: e.query({
        query: ({ productionId: t, fabricId: r }) =>
          `Production/GetProductionFabricDetailByProductionIdandStatus?productionId=${t}&status=2&fabricId=${r}`
      }),
      getIssuanceByPoId: e.query({
        query: (t) => `Issuance/GetIssuanceByPoId?poId=${t}&appId=1`
      }),
      getIssuanceDetailByPoId: e.query({
        query: ({ poId: t, issuanceId: r }) =>
          `Issuance/GetIssuanceDetailByPoId?poId=${t}&issuanceId=${r}`
      }),
      getIssuanceList: e.query({
        query: (t) => `Receiving/GetIssuanceList?PoId=${t}`
      }),
      getIssuanceDetailsByIssuanceId: e.query({
        query: (t) => `Receiving/GetIssuanceDetailsByIssuanceId?issuanceId=${t}`
      }),
      getReceivingDetailsForInspection: e.query({
        query: (t) =>
          `Receiving/GetReceivingDetailsForInspection?receivingId=${t}&status=8`
      }),
      getInspectionDetails: e.query({
        query: (t) => `Receiving/GetInspectionDetails?receivingId=${t}`
      }),
      getIssuanceOGPById: e.query({
        query: ({ poId: t, issuanceId: r }) =>
          `Issuance/GetIssuanceOGPById?poId=${t}&issuanceId=${r}`
      }),
      getDyeingPoList: e.query({
        query: () => 'Receiving/GetDyeingPoList?AppId=1'
      }),
      getReceivingHeader: e.query({
        query: ({ poId: t, processTypename: r, status: n }) =>
          `Receiving/GetReceivingHeader?poId=${t}&processTypename=${r}&status=${n}`
      }),
      viewReceivings: e.query({
        query: ({ issuanceId: t, processTypename: r }) =>
          `Receiving/ViewReceivings?issuanceId=${t}&processTypename=${r}`
      }),
      getInspectionForGRNHeader: e.query({
        query: (t) => `GRN/GetInspectionForGRNHeader?poId=${t}&appId=1`
      }),
      GetInspectionForGRNDetailbyInspectionId: e.query({
        query: (t) =>
          `GRN/GetInspectionForGRNDetailbyInspectionId?inspectionId=${t}`
      }),
      getRejectionByPoId: e.query({
        query: (t) => `GRN/GetRejectionByPoId?PoId=${t}`
      }),
      getDyeingPoHeaderByProductionId: e.query({
        query: (t) =>
          `PO/GetDyeingPoHeaderByProductionId?appId=1&productionId=${t}`
      }),
      getDyeingPoHeaderbyProductionIdAndStatus: e.query({
        query: ({ productionId: t, status: r }) =>
          `PO/GetDyeingPoHeaderbyProductionIdAndStatus?appId=1&productionId=${t}&status=${r}`
      }),
      getInspectionHeader: e.query({
        query: (t) => `Receiving/GetInspectionHeaderByPoId?poId=${t}`
      }),
      getRejectionDetailsByIssuanceId: e.query({
        query: (t) => `GRN/GetRejectionDetailsByIssuanceId?issuanceId=${t}`
      }),
      getPOSummaryByProcessTypeId: e.query({
        query: (t) =>
          `PO/GetPOSummaryByProcessTypeId?appId=1&processTypeId=${t}`
      }),
      POShortfallDetails: e.query({
        query: (t) => `PO/POShortfallDetails?poId=${t}`
      }),
      getDebitNoteInfoByPoId: e.query({
        query: (t) => `PO/GetDebitNoteInfoByPoId?poId=${t}`
      })
    })
  }),
  {
    useGetCollectionListFromPlanningHeaderQuery: w3,
    useGetDesignListFromCompletedCollectionIdQuery: S3,
    useGetProductionProcessListQuery: P3,
    useGetProductionBatchForProcessingQuery: E3,
    useGetProductionProcessByProductionIdQuery: C3,
    useGetFabricForProductionByCollectionIdQuery: T3,
    useGetProductionBatchInProcessQuery: R3,
    useGetProductionBatchDetailsByProductionidQuery: k3,
    useGetBxStockHeaderListQuery: M3,
    useGetBxStockHeaderDetailListQuery: O3,
    useGetPrePlanningFabricFromCollectionIdQuery: I3,
    useGetVBxStockReceivingListQuery: A3,
    useGetStockReceivingByProductionHeaderIdQuery: D3,
    useGetProductionFabricDetailListQuery: _3,
    useGetITPListByStatusQuery: L3,
    useGetFabricForProductionByProductionIdQuery: $3,
    useGetVendorsByFabricIDQuery: j3,
    useGetProductionPODesignByFabricAndProductionIdQuery: B3,
    useGetDyeingPoHeaderListQuery: N3,
    useGetDyeingPODetailsPoIdQuery: F3,
    useDyeingPoAssignTermDetailsByPoIdQuery: V3,
    useGetDyeingPoHeaderListbyPoIdQuery: W3,
    useGetProductionFabricDetailByProductionIdandStatusQuery: z3,
    useGetIssuanceByPoIdQuery: U3,
    useGetIssuanceDetailByPoIdQuery: H3,
    useGetIssuanceListQuery: q3,
    useGetIssuanceDetailsByIssuanceIdQuery: G3,
    useGetReceivingDetailsForInspectionQuery: K3,
    useGetInspectionDetailsQuery: Y3,
    useGetIssuanceOGPByIdQuery: X3,
    useGetDyeingPoListQuery: Q3,
    useGetReceivingHeaderQuery: Z3,
    useViewReceivingsQuery: J3,
    useGetInspectionForGRNHeaderQuery: e4,
    useGetInspectionForGRNDetailbyInspectionIdQuery: t4,
    useGetRejectionByPoIdQuery: r4,
    useGetDyeingPoHeaderByProductionIdQuery: n4,
    useGetDyeingPoHeaderbyProductionIdAndStatusQuery: o4,
    useGetInspectionHeaderQuery: i4,
    useGetRejectionDetailsByIssuanceIdQuery: s4,
    useGetPOSummaryByProcessTypeIdQuery: a4,
    usePOShortfallDetailsQuery: l4,
    useGetDebitNoteInfoByPoIdQuery: c4
  } = La,
  $a = pn({
    reducerPath: 'termsAndConditionsApi',
    baseQuery: fn({ baseUrl: 'http://100.42.177.77:81/api/TermsConditions/' }),
    endpoints: (e) => ({
      getCategoriesList: e.query({ query: () => 'GetCategoriesList?appid=1' }),
      getTermsConditionsList: e.query({
        query: (t) => `GetTermsConditionsList?categoryId=${t}`
      }),
      getTermsByVendorId: e.query({
        query: ({ vId: t, categoryId: r }) =>
          `GetTermsByVendorId?vendorId=${t}&categoryId=${r}`
      })
    })
  }),
  {
    useGetCategoriesListQuery: u4,
    useGetTermsConditionsListQuery: d4,
    useGetTermsByVendorIdQuery: f4
  } = $a,
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
  lP = {
    isOpen: [],
    defaultId: 'default',
    fontFamily: fu.fontFamily,
    borderRadius: fu.borderRadius,
    opened: !0
  },
  cP = (e = lP, t) => {
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
  uP = id({
    customization: cP,
    [Ma.reducerPath]: Ma.reducer,
    [Oa.reducerPath]: Oa.reducer,
    [Ia.reducerPath]: Ia.reducer,
    [Aa.reducerPath]: Aa.reducer,
    [Da.reducerPath]: Da.reducer,
    [_a.reducerPath]: _a.reducer,
    [La.reducerPath]: La.reducer,
    [$a.reducerPath]: $a.reducer
  }),
  dP = O1({
    reducer: uP,
    middleware: (e) =>
      e()
        .concat(Ma.middleware)
        .concat(Oa.middleware)
        .concat(Ia.middleware)
        .concat(Aa.middleware)
        .concat(Da.middleware)
        .concat(_a.middleware)
        .concat(La.middleware)
        .concat($a.middleware)
  }),
  Ov = w.createContext(),
  fP = ({ children: e }) => {
    const [t, r] = w.useState(() => {
      const n = localStorage.getItem('user');
      return n ? JSON.parse(n) : null;
    });
    return (
      w.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(t));
      }, [t]),
      C.jsx(Ov.Provider, { value: { user: t, setUser: r }, children: e })
    );
  },
  pP = () => {
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
 */ function Ye() {
  return (
    (Ye = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ye.apply(this, arguments)
  );
}
var st;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(st || (st = {}));
const Ap = 'popstate';
function Iv(e) {
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
  return mP(t, r, null, e);
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ao(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function hP() {
  return Math.random().toString(36).substr(2, 8);
}
function Dp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gi(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Ye(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? hn(t) : t,
      { state: r, key: (t && t.key) || n || hP() }
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
function mP(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    s = o.history,
    a = st.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(Ye({}, s.state, { idx: c }), ''));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = st.Pop;
    let v = u(),
      x = v == null ? null : v - c;
    (c = v), l && l({ action: a, location: h.location, delta: x });
  }
  function d(v, x) {
    a = st.Push;
    let b = Gi(h.location, v, x);
    c = u() + 1;
    let g = Dp(b, c),
      y = h.createHref(b);
    try {
      s.pushState(g, '', y);
    } catch (P) {
      if (P instanceof DOMException && P.name === 'DataCloneError') throw P;
      o.location.assign(y);
    }
    i && l && l({ action: a, location: h.location, delta: 1 });
  }
  function m(v, x) {
    a = st.Replace;
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
        o.addEventListener(Ap, f),
        (l = v),
        () => {
          o.removeEventListener(Ap, f), (l = null);
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
var We;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(We || (We = {}));
const gP = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children'
]);
function vP(e) {
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
        vP(o))
      ) {
        let l = Ye({}, o, t(o), { id: a });
        return (n[a] = l), l;
      } else {
        let l = Ye({}, o, t(o), { id: a, children: void 0 });
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
  let s = Av(e);
  bP(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = OP(i);
    a = kP(s[l], c, n);
  }
  return a;
}
function yP(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function Av(e, t, r, n) {
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
      Av(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: TP(c, i.index), routesMeta: u });
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
function bP(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : RP(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const xP = /^:[\w-]+$/,
  wP = 3,
  SP = 2,
  PP = 1,
  EP = 10,
  CP = -2,
  _p = (e) => e === '*';
function TP(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(_p) && (n += CP),
    t && (n += SP),
    r
      .filter((o) => !_p(o))
      .reduce((o, i) => o + (xP.test(i) ? wP : i === '' ? PP : EP), n)
  );
}
function RP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function kP(e, t, r) {
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
        pathnameBase: DP(Fr([i, f.pathnameBase])),
        route: d
      }),
      f.pathnameBase !== '/' && (i = Fr([i, f.pathnameBase]));
  }
  return s;
}
function Lp(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = MP(e.path, e.caseSensitive, e.end),
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
function MP(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ao(
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
function OP(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ao(
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
function IP(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: o = ''
  } = typeof e == 'string' ? hn(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : AP(r, t)) : t,
    search: _P(n),
    hash: LP(o)
  };
}
function AP(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Ec(e, t, r, n) {
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
function ml(e, t) {
  let r = _v(e);
  return t
    ? r.map((n, o) => (o === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function gl(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == 'string'
    ? (o = hn(e))
    : ((o = Ye({}, e)),
      ge(
        !o.pathname || !o.pathname.includes('?'),
        Ec('?', 'pathname', 'search', o)
      ),
      ge(
        !o.pathname || !o.pathname.includes('#'),
        Ec('#', 'pathname', 'hash', o)
      ),
      ge(!o.search || !o.search.includes('#'), Ec('#', 'search', 'hash', o)));
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
  let l = IP(o, a),
    c = s && s !== '/' && s.endsWith('/'),
    u = (i || s === '.') && r.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const Fr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  DP = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  _P = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  LP = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
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
  $P = new Set(Lv),
  jP = ['get', ...Lv],
  BP = new Set(jP),
  NP = new Set([301, 302, 303, 307, 308]),
  FP = new Set([307, 308]),
  Cc = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  VP = {
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
  WP = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $v = 'remix-router-transitions';
function zP(e) {
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
    o = (A) => ({ hasErrorBoundary: O(A) });
  } else o = WP;
  let i = {},
    s = Ki(e.routes, o, void 0, i),
    a,
    l = e.basename || '/',
    c = e.unstable_dataStrategy || KP,
    u = e.unstable_patchRoutesOnMiss,
    f = Ye(
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
    let O = _t(404, { pathname: e.history.location.pathname }),
      { matches: A, route: $ } = Hp(s);
    (b = A), (g = { [$.id]: O });
  }
  b && u && hc(b, s, e.history.location.pathname).active && (b = null);
  let y;
  if (!b) (y = !1), (b = []);
  else if (b.some((O) => O.route.lazy)) y = !1;
  else if (!b.some((O) => O.route.loader)) y = !0;
  else if (f.v7_partialHydration) {
    let O = e.hydrationData ? e.hydrationData.loaderData : null,
      A = e.hydrationData ? e.hydrationData.errors : null,
      $ = (V) =>
        V.route.loader
          ? typeof V.route.loader == 'function' && V.route.loader.hydrate === !0
            ? !1
            : (O && O[V.route.id] !== void 0) || (A && A[V.route.id] !== void 0)
          : !0;
    if (A) {
      let V = b.findIndex((H) => A[H.route.id] !== void 0);
      y = b.slice(0, V + 1).every($);
    } else y = b.every($);
  } else y = e.hydrationData != null;
  let P,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: y,
      navigation: Cc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map()
    },
    E = st.Pop,
    T = !1,
    R,
    k = !1,
    I = new Map(),
    _ = null,
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
    Ie = new Map(),
    Re = !1;
  function Ae() {
    if (
      ((d = e.history.listen((O) => {
        let { action: A, location: $, delta: V } = O;
        if (Re) {
          Re = !1;
          return;
        }
        Ao(
          Y.size === 0 || V != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let H = Qf({
          currentLocation: S.location,
          nextLocation: $,
          historyAction: A
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
                X.set(H, si), Ne({ blockers: X });
              }
            });
          return;
        }
        return Pt(A, $);
      })),
      r)
    ) {
      aE(t, I);
      let O = () => lE(t, I);
      t.addEventListener('pagehide', O),
        (_ = () => t.removeEventListener('pagehide', O));
    }
    return S.initialized || Pt(st.Pop, S.location, { initialHydration: !0 }), P;
  }
  function mt() {
    d && d(),
      _ && _(),
      m.clear(),
      R && R.abort(),
      S.fetchers.forEach((O, A) => xe(A)),
      S.blockers.forEach((O, A) => Xf(A));
  }
  function jt(O) {
    return m.add(O), () => m.delete(O);
  }
  function Ne(O, A) {
    A === void 0 && (A = {}), (S = Ye({}, S, O));
    let $ = [],
      V = [];
    f.v7_fetcherPersist &&
      S.fetchers.forEach((H, X) => {
        H.state === 'idle' && (ve.has(X) ? V.push(X) : $.push(X));
      }),
      [...m].forEach((H) =>
        H(S, {
          deletedFetchers: V,
          unstable_viewTransitionOpts: A.viewTransitionOpts,
          unstable_flushSync: A.flushSync === !0
        })
      ),
      f.v7_fetcherPersist &&
        ($.forEach((H) => S.fetchers.delete(H)), V.forEach((H) => xe(H)));
  }
  function et(O, A, $) {
    var V, H;
    let { flushSync: X } = $ === void 0 ? {} : $,
      se =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        br(S.navigation.formMethod) &&
        S.navigation.state === 'loading' &&
        ((V = O.state) == null ? void 0 : V._isRedirect) !== !0,
      U;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (U = A.actionData)
        : (U = null)
      : se
        ? (U = S.actionData)
        : (U = null);
    let pe = A.loaderData
        ? zp(S.loaderData, A.loaderData, A.matches || [], A.errors)
        : S.loaderData,
      te = S.blockers;
    te.size > 0 && ((te = new Map(te)), te.forEach((Pe, Le) => te.set(Le, si)));
    let re =
      T === !0 ||
      (S.navigation.formMethod != null &&
        br(S.navigation.formMethod) &&
        ((H = O.state) == null ? void 0 : H._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      L ||
        E === st.Pop ||
        (E === st.Push
          ? e.history.push(O, O.state)
          : E === st.Replace && e.history.replace(O, O.state));
    let De;
    if (E === st.Pop) {
      let Pe = I.get(S.location.pathname);
      Pe && Pe.has(O.pathname)
        ? (De = { currentLocation: S.location, nextLocation: O })
        : I.has(O.pathname) &&
          (De = { currentLocation: O, nextLocation: S.location });
    } else if (k) {
      let Pe = I.get(S.location.pathname);
      Pe
        ? Pe.add(O.pathname)
        : ((Pe = new Set([O.pathname])), I.set(S.location.pathname, Pe)),
        (De = { currentLocation: S.location, nextLocation: O });
    }
    Ne(
      Ye({}, A, {
        actionData: U,
        loaderData: pe,
        historyAction: E,
        location: O,
        initialized: !0,
        navigation: Cc,
        revalidation: 'idle',
        restoreScrollPosition: Jf(O, A.matches || S.matches),
        preventScrollReset: re,
        blockers: te
      }),
      { viewTransitionOpts: De, flushSync: X === !0 }
    ),
      (E = st.Pop),
      (T = !1),
      (k = !1),
      (L = !1),
      (D = !1),
      (N = []),
      (B = []);
  }
  async function gt(O, A) {
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
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative
      ),
      {
        path: V,
        submission: H,
        error: X
      } = $p(f.v7_normalizeFormMethod, !1, $, A),
      se = S.location,
      U = Gi(S.location, V, A && A.state);
    U = Ye({}, U, e.history.encodeLocation(U));
    let pe = A && A.replace != null ? A.replace : void 0,
      te = st.Push;
    pe === !0
      ? (te = st.Replace)
      : pe === !1 ||
        (H != null &&
          br(H.formMethod) &&
          H.formAction === S.location.pathname + S.location.search &&
          (te = st.Replace));
    let re =
        A && 'preventScrollReset' in A ? A.preventScrollReset === !0 : void 0,
      De = (A && A.unstable_flushSync) === !0,
      Pe = Qf({ currentLocation: se, nextLocation: U, historyAction: te });
    if (Pe) {
      Bs(Pe, {
        state: 'blocked',
        location: U,
        proceed() {
          Bs(Pe, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: U
          }),
            gt(O, A);
        },
        reset() {
          let Le = new Map(S.blockers);
          Le.set(Pe, si), Ne({ blockers: Le });
        }
      });
      return;
    }
    return await Pt(te, U, {
      submission: H,
      pendingError: X,
      preventScrollReset: re,
      replace: A && A.replace,
      enableViewTransition: A && A.unstable_viewTransition,
      flushSync: De
    });
  }
  function wn() {
    if (
      (ee(),
      Ne({ revalidation: 'loading' }),
      S.navigation.state !== 'submitting')
    ) {
      if (S.navigation.state === 'idle') {
        Pt(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Pt(E || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation
      });
    }
  }
  async function Pt(O, A, $) {
    R && R.abort(),
      (R = null),
      (E = O),
      (L = ($ && $.startUninterruptedRevalidation) === !0),
      Lw(S.location, S.matches),
      (T = ($ && $.preventScrollReset) === !0),
      (k = ($ && $.enableViewTransition) === !0);
    let V = a || s,
      H = $ && $.overrideNavigation,
      X = Mn(V, A, l),
      se = ($ && $.flushSync) === !0,
      U = hc(X, V, A.pathname);
    if ((U.active && U.matches && (X = U.matches), !X)) {
      let { error: Te, notFoundMatches: vt, route: it } = fc(A.pathname);
      et(
        A,
        { matches: vt, loaderData: {}, errors: { [it.id]: Te } },
        { flushSync: se }
      );
      return;
    }
    if (
      S.initialized &&
      !D &&
      eE(S.location, A) &&
      !($ && $.submission && br($.submission.formMethod))
    ) {
      et(A, { matches: X }, { flushSync: se });
      return;
    }
    R = new AbortController();
    let pe = oo(e.history, A, R.signal, $ && $.submission),
      te;
    if ($ && $.pendingError)
      te = [Mi(X).route.id, { type: We.error, error: $.pendingError }];
    else if ($ && $.submission && br($.submission.formMethod)) {
      let Te = await ir(pe, A, $.submission, X, U.active, {
        replace: $.replace,
        flushSync: se
      });
      if (Te.shortCircuited) return;
      if (Te.pendingActionResult) {
        let [vt, it] = Te.pendingActionResult;
        if (Yt(it) && vl(it.error) && it.error.status === 404) {
          (R = null),
            et(A, {
              matches: Te.matches,
              loaderData: {},
              errors: { [vt]: it.error }
            });
          return;
        }
      }
      (X = Te.matches || X),
        (te = Te.pendingActionResult),
        (H = Tc(A, $.submission)),
        (se = !1),
        (U.active = !1),
        (pe = oo(e.history, pe.url, pe.signal));
    }
    let {
      shortCircuited: re,
      matches: De,
      loaderData: Pe,
      errors: Le
    } = await _r(
      pe,
      A,
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
      et(A, Ye({ matches: De || X }, Up(te), { loaderData: Pe, errors: Le })));
  }
  async function ir(O, A, $, V, H, X) {
    X === void 0 && (X = {}), ee();
    let se = iE(A, $);
    if ((Ne({ navigation: se }, { flushSync: X.flushSync === !0 }), H)) {
      let te = await Fs(V, A.pathname, O.signal);
      if (te.type === 'aborted') return { shortCircuited: !0 };
      if (te.type === 'error') {
        let { error: re, notFoundMatches: De, route: Pe } = Ns(A.pathname, te);
        return {
          matches: De,
          pendingActionResult: [Pe.id, { type: We.error, error: re }]
        };
      } else if (te.matches) V = te.matches;
      else {
        let { notFoundMatches: re, error: De, route: Pe } = fc(A.pathname);
        return {
          matches: re,
          pendingActionResult: [Pe.id, { type: We.error, error: De }]
        };
      }
    }
    let U,
      pe = wi(V, A);
    if (!pe.route.action && !pe.route.lazy)
      U = {
        type: We.error,
        error: _t(405, {
          method: O.method,
          pathname: A.pathname,
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
        await ct(O, U, { submission: $, replace: te }),
        { shortCircuited: !0 }
      );
    }
    if (An(U)) throw _t(400, { type: 'defer-action' });
    if (Yt(U)) {
      let te = Mi(V, pe.route.id);
      return (
        (X && X.replace) !== !0 && (E = st.Push),
        { matches: V, pendingActionResult: [te.route.id, U] }
      );
    }
    return { matches: V, pendingActionResult: [pe.route.id, U] };
  }
  async function _r(O, A, $, V, H, X, se, U, pe, te, re) {
    let De = H || Tc(A, X),
      Pe = X || se || Kp(De),
      Le = !L && (!f.v7_partialHydration || !pe);
    if (V) {
      if (Le) {
        let Qe = Yr(re);
        Ne(Ye({ navigation: De }, Qe !== void 0 ? { actionData: Qe } : {}), {
          flushSync: te
        });
      }
      let me = await Fs($, A.pathname, O.signal);
      if (me.type === 'aborted') return { shortCircuited: !0 };
      if (me.type === 'error') {
        let { error: Qe, notFoundMatches: Kt, route: Fe } = Ns(A.pathname, me);
        return { matches: Kt, loaderData: {}, errors: { [Fe.id]: Qe } };
      } else if (me.matches) $ = me.matches;
      else {
        let { error: Qe, notFoundMatches: Kt, route: Fe } = fc(A.pathname);
        return { matches: Kt, loaderData: {}, errors: { [Fe.id]: Qe } };
      }
    }
    let Te = a || s,
      [vt, it] = jp(
        e.history,
        S,
        $,
        Pe,
        A,
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
          !($ && $.some((Qe) => Qe.route.id === me)) ||
          (vt && vt.some((Qe) => Qe.route.id === me))
      ),
      (z = ++F),
      vt.length === 0 && it.length === 0)
    ) {
      let me = ri();
      return (
        et(
          A,
          Ye(
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
        let Qe = Yr(re);
        Qe !== void 0 && (me.actionData = Qe);
      }
      it.length > 0 && (me.fetchers = Et(it)), Ne(me, { flushSync: te });
    }
    it.forEach((me) => {
      j.has(me.key) && ot(me.key),
        me.controller && j.set(me.key, me.controller);
    });
    let ni = () => it.forEach((me) => ot(me.key));
    R && R.signal.addEventListener('abort', ni);
    let { loaderResults: Xr, fetcherResults: Zn } = await be(
      S.matches,
      $,
      vt,
      it,
      O
    );
    if (O.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener('abort', ni),
      it.forEach((me) => j.delete(me.key));
    let Jn = qp([...Xr, ...Zn]);
    if (Jn) {
      if (Jn.idx >= vt.length) {
        let me = it[Jn.idx - vt.length].key;
        fe.add(me);
      }
      return await ct(O, Jn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: eo, errors: Sr } = Wp(S, $, vt, Xr, re, it, Zn, ye);
    ye.forEach((me, Qe) => {
      me.subscribe((Kt) => {
        (Kt || me.done) && ye.delete(Qe);
      });
    }),
      f.v7_partialHydration &&
        pe &&
        S.errors &&
        Object.entries(S.errors)
          .filter((me) => {
            let [Qe] = me;
            return !vt.some((Kt) => Kt.route.id === Qe);
          })
          .forEach((me) => {
            let [Qe, Kt] = me;
            Sr = Object.assign(Sr || {}, { [Qe]: Kt });
          });
    let Vs = ri(),
      Ws = Yf(z),
      zs = Vs || Ws || it.length > 0;
    return Ye(
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
      O.forEach((A) => {
        let $ = S.fetchers.get(A.key),
          V = ai(void 0, $ ? $.data : void 0);
        S.fetchers.set(A.key, V);
      }),
      new Map(S.fetchers)
    );
  }
  function qt(O, A, $, V) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(O) && ot(O);
    let H = (V && V.unstable_flushSync) === !0,
      X = a || s,
      se = pu(
        S.location,
        S.matches,
        l,
        f.v7_prependBasename,
        $,
        f.v7_relativeSplatPath,
        A,
        V == null ? void 0 : V.relative
      ),
      U = Mn(X, se, l),
      pe = hc(U, X, se);
    if ((pe.active && pe.matches && (U = pe.matches), !U)) {
      K(O, A, _t(404, { pathname: se }), { flushSync: H });
      return;
    }
    let {
      path: te,
      submission: re,
      error: De
    } = $p(f.v7_normalizeFormMethod, !0, se, V);
    if (De) {
      K(O, A, De, { flushSync: H });
      return;
    }
    let Pe = wi(U, te);
    if (((T = (V && V.preventScrollReset) === !0), re && br(re.formMethod))) {
      ut(O, A, te, Pe, U, pe.active, H, re);
      return;
    }
    J.set(O, { routeId: A, path: te }), Gt(O, A, te, Pe, U, pe.active, H, re);
  }
  async function ut(O, A, $, V, H, X, se, U) {
    ee(), J.delete(O);
    function pe(Fe) {
      if (!Fe.route.action && !Fe.route.lazy) {
        let Lr = _t(405, { method: U.formMethod, pathname: $, routeId: A });
        return K(O, A, Lr, { flushSync: se }), !0;
      }
      return !1;
    }
    if (!X && pe(V)) return;
    let te = S.fetchers.get(O);
    he(O, sE(U, te), { flushSync: se });
    let re = new AbortController(),
      De = oo(e.history, $, re.signal, U);
    if (X) {
      let Fe = await Fs(H, $, De.signal);
      if (Fe.type === 'aborted') return;
      if (Fe.type === 'error') {
        let { error: Lr } = Ns($, Fe);
        K(O, A, Lr, { flushSync: se });
        return;
      } else if (Fe.matches) {
        if (((H = Fe.matches), (V = wi(H, $)), pe(V))) return;
      } else {
        K(O, A, _t(404, { pathname: $ }), { flushSync: se });
        return;
      }
    }
    j.set(O, re);
    let Pe = F,
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
        if ((j.delete(O), z > Pe)) {
          he(O, Zr(void 0));
          return;
        } else
          return fe.add(O), he(O, ai(U)), ct(De, Te, { fetcherSubmission: U });
      if (Yt(Te)) {
        K(O, A, Te.error);
        return;
      }
    }
    if (An(Te)) throw _t(400, { type: 'defer-action' });
    let vt = S.navigation.location || S.location,
      it = oo(e.history, vt, re.signal),
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
      vt,
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
    Sr.filter((Fe) => Fe.key !== O).forEach((Fe) => {
      let Lr = Fe.key,
        ep = S.fetchers.get(Lr),
        Bw = ai(void 0, ep ? ep.data : void 0);
      S.fetchers.set(Lr, Bw),
        j.has(Lr) && ot(Lr),
        Fe.controller && j.set(Lr, Fe.controller);
    }),
      Ne({ fetchers: new Map(S.fetchers) });
    let Vs = () => Sr.forEach((Fe) => ot(Fe.key));
    re.signal.addEventListener('abort', Vs);
    let { loaderResults: Ws, fetcherResults: zs } = await be(
      S.matches,
      Xr,
      eo,
      Sr,
      it
    );
    if (re.signal.aborted) return;
    re.signal.removeEventListener('abort', Vs),
      q.delete(O),
      j.delete(O),
      Sr.forEach((Fe) => j.delete(Fe.key));
    let me = qp([...Ws, ...zs]);
    if (me) {
      if (me.idx >= eo.length) {
        let Fe = Sr[me.idx - eo.length].key;
        fe.add(Fe);
      }
      return ct(it, me.result);
    }
    let { loaderData: Qe, errors: Kt } = Wp(
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
      let Fe = Zr(Te.data);
      S.fetchers.set(O, Fe);
    }
    Yf(Zn),
      S.navigation.state === 'loading' && Zn > z
        ? (ge(E, 'Expected pending action'),
          R && R.abort(),
          et(S.navigation.location, {
            matches: Xr,
            loaderData: Qe,
            errors: Kt,
            fetchers: new Map(S.fetchers)
          }))
        : (Ne({
            errors: Kt,
            loaderData: zp(S.loaderData, Qe, Xr, Kt),
            fetchers: new Map(S.fetchers)
          }),
          (D = !1));
  }
  async function Gt(O, A, $, V, H, X, se, U) {
    let pe = S.fetchers.get(O);
    he(O, ai(U, pe ? pe.data : void 0), { flushSync: se });
    let te = new AbortController(),
      re = oo(e.history, $, te.signal);
    if (X) {
      let Te = await Fs(H, $, re.signal);
      if (Te.type === 'aborted') return;
      if (Te.type === 'error') {
        let { error: vt } = Ns($, Te);
        K(O, A, vt, { flushSync: se });
        return;
      } else if (Te.matches) (H = Te.matches), (V = wi(H, $));
      else {
        K(O, A, _t(404, { pathname: $ }), { flushSync: se });
        return;
      }
    }
    j.set(O, te);
    let De = F,
      Le = (await ne('loader', re, [V], H))[0];
    if (
      (An(Le) && (Le = (await Vv(Le, re.signal, !0)) || Le),
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
          fe.add(O), await ct(re, Le);
          return;
        }
      if (Yt(Le)) {
        K(O, A, Le.error);
        return;
      }
      ge(!An(Le), 'Unhandled fetcher deferred data'), he(O, Zr(Le.data));
    }
  }
  async function ct(O, A, $) {
    let {
      submission: V,
      fetcherSubmission: H,
      replace: X
    } = $ === void 0 ? {} : $;
    A.response.headers.has('X-Remix-Revalidate') && (D = !0);
    let se = A.response.headers.get('Location');
    ge(se, 'Expected a Location header on the redirect Response'),
      (se = Fp(se, new URL(O.url), l));
    let U = Gi(S.location, se, { _isRedirect: !0 });
    if (r) {
      let Le = !1;
      if (A.response.headers.has('X-Remix-Reload-Document')) Le = !0;
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
    let pe = X === !0 ? st.Replace : st.Push,
      { formMethod: te, formAction: re, formEncType: De } = S.navigation;
    !V && !H && te && re && De && (V = Kp(S.navigation));
    let Pe = V || H;
    if (FP.has(A.response.status) && Pe && br(Pe.formMethod))
      await Pt(pe, U, {
        submission: Ye({}, Pe, { formAction: se }),
        preventScrollReset: T
      });
    else {
      let Le = Tc(U, V);
      await Pt(pe, U, {
        overrideNavigation: Le,
        fetcherSubmission: H,
        preventScrollReset: T
      });
    }
  }
  async function ne(O, A, $, V) {
    try {
      let H = await YP(c, O, A, $, V, i, o);
      return await Promise.all(
        H.map((X, se) => {
          if (rE(X)) {
            let U = X.result;
            return {
              type: We.redirect,
              response: ZP(U, A, $[se].route.id, V, l, f.v7_relativeSplatPath)
            };
          }
          return QP(X);
        })
      );
    } catch (H) {
      return $.map(() => ({ type: We.error, error: H }));
    }
  }
  async function be(O, A, $, V, H) {
    let [X, ...se] = await Promise.all([
      $.length ? ne('loader', H, $, A) : [],
      ...V.map((U) => {
        if (U.matches && U.match && U.controller) {
          let pe = oo(e.history, U.path, U.controller.signal);
          return ne('loader', pe, [U.match], U.matches).then((te) => te[0]);
        } else
          return Promise.resolve({
            type: We.error,
            error: _t(404, { pathname: U.path })
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
      J.forEach((O, A) => {
        j.has(A) && (B.push(A), ot(A));
      });
  }
  function he(O, A, $) {
    $ === void 0 && ($ = {}),
      S.fetchers.set(O, A),
      Ne(
        { fetchers: new Map(S.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 }
      );
  }
  function K(O, A, $, V) {
    V === void 0 && (V = {});
    let H = Mi(S.matches, A);
    xe(O),
      Ne(
        { errors: { [H.route.id]: $ }, fetchers: new Map(S.fetchers) },
        { flushSync: (V && V.flushSync) === !0 }
      );
  }
  function Ct(O) {
    return (
      f.v7_fetcherPersist &&
        (ae.set(O, (ae.get(O) || 0) + 1), ve.has(O) && ve.delete(O)),
      S.fetchers.get(O) || VP
    );
  }
  function xe(O) {
    let A = S.fetchers.get(O);
    j.has(O) && !(A && A.state === 'loading' && q.has(O)) && ot(O),
      J.delete(O),
      q.delete(O),
      fe.delete(O),
      ve.delete(O),
      S.fetchers.delete(O);
  }
  function oe(O) {
    if (f.v7_fetcherPersist) {
      let A = (ae.get(O) || 0) - 1;
      A <= 0 ? (ae.delete(O), ve.add(O)) : ae.set(O, A);
    } else xe(O);
    Ne({ fetchers: new Map(S.fetchers) });
  }
  function ot(O) {
    let A = j.get(O);
    ge(A, 'Expected fetch controller: ' + O), A.abort(), j.delete(O);
  }
  function Qn(O) {
    for (let A of O) {
      let $ = Ct(A),
        V = Zr($.data);
      S.fetchers.set(A, V);
    }
  }
  function ri() {
    let O = [],
      A = !1;
    for (let $ of fe) {
      let V = S.fetchers.get($);
      ge(V, 'Expected fetcher: ' + $),
        V.state === 'loading' && (fe.delete($), O.push($), (A = !0));
    }
    return Qn(O), A;
  }
  function Yf(O) {
    let A = [];
    for (let [$, V] of q)
      if (V < O) {
        let H = S.fetchers.get($);
        ge(H, 'Expected fetcher: ' + $),
          H.state === 'loading' && (ot($), q.delete($), A.push($));
      }
    return Qn(A), A.length > 0;
  }
  function Dw(O, A) {
    let $ = S.blockers.get(O) || si;
    return Y.get(O) !== A && Y.set(O, A), $;
  }
  function Xf(O) {
    S.blockers.delete(O), Y.delete(O);
  }
  function Bs(O, A) {
    let $ = S.blockers.get(O) || si;
    ge(
      ($.state === 'unblocked' && A.state === 'blocked') ||
        ($.state === 'blocked' && A.state === 'blocked') ||
        ($.state === 'blocked' && A.state === 'proceeding') ||
        ($.state === 'blocked' && A.state === 'unblocked') ||
        ($.state === 'proceeding' && A.state === 'unblocked'),
      'Invalid blocker state transition: ' + $.state + ' -> ' + A.state
    );
    let V = new Map(S.blockers);
    V.set(O, A), Ne({ blockers: V });
  }
  function Qf(O) {
    let { currentLocation: A, nextLocation: $, historyAction: V } = O;
    if (Y.size === 0) return;
    Y.size > 1 && Ao(!1, 'A router only supports one blocker at a time');
    let H = Array.from(Y.entries()),
      [X, se] = H[H.length - 1],
      U = S.blockers.get(X);
    if (
      !(U && U.state === 'proceeding') &&
      se({ currentLocation: A, nextLocation: $, historyAction: V })
    )
      return X;
  }
  function fc(O) {
    let A = _t(404, { pathname: O }),
      $ = a || s,
      { matches: V, route: H } = Hp($);
    return pc(), { notFoundMatches: V, route: H, error: A };
  }
  function Ns(O, A) {
    let $ = A.partialMatches,
      V = $[$.length - 1].route,
      H = _t(400, {
        type: 'route-discovery',
        routeId: V.id,
        pathname: O,
        message:
          A.error != null && 'message' in A.error ? A.error : String(A.error)
      });
    return { notFoundMatches: $, route: V, error: H };
  }
  function pc(O) {
    let A = [];
    return (
      ye.forEach(($, V) => {
        (!O || O(V)) && ($.cancel(), A.push(V), ye.delete(V));
      }),
      A
    );
  }
  function _w(O, A, $) {
    if (((p = O), (v = A), (h = $ || null), !x && S.navigation === Cc)) {
      x = !0;
      let V = Jf(S.location, S.matches);
      V != null && Ne({ restoreScrollPosition: V });
    }
    return () => {
      (p = null), (v = null), (h = null);
    };
  }
  function Zf(O, A) {
    return (
      (h &&
        h(
          O,
          A.map((V) => yP(V, S.loaderData))
        )) ||
      O.key
    );
  }
  function Lw(O, A) {
    if (p && v) {
      let $ = Zf(O, A);
      p[$] = v();
    }
  }
  function Jf(O, A) {
    if (p) {
      let $ = Zf(O, A),
        V = p[$];
      if (typeof V == 'number') return V;
    }
    return null;
  }
  function hc(O, A, $) {
    if (u)
      if (O) {
        let V = O[O.length - 1].route;
        if (V.path && (V.path === '*' || V.path.endsWith('/*')))
          return { active: !0, matches: fa(A, $, l, !0) };
      } else return { active: !0, matches: fa(A, $, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Fs(O, A, $) {
    let V = O,
      H = V.length > 0 ? V[V.length - 1].route : null;
    for (;;) {
      let X = a == null,
        se = a || s;
      try {
        await GP(u, A, V, se, i, o, Ie, $);
      } catch (re) {
        return { type: 'error', error: re, partialMatches: V };
      } finally {
        X && (s = [...s]);
      }
      if ($.aborted) return { type: 'aborted' };
      let U = Mn(se, A, l),
        pe = !1;
      if (U) {
        let re = U[U.length - 1].route;
        if (re.index) return { type: 'success', matches: U };
        if (re.path && re.path.length > 0)
          if (re.path === '*') pe = !0;
          else return { type: 'success', matches: U };
      }
      let te = fa(se, A, l, !0);
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
  function jw(O, A) {
    let $ = a == null;
    Bv(O, A, a || s, i, o), $ && ((s = [...s]), Ne({}));
  }
  return (
    (P = {
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
      initialize: Ae,
      subscribe: jt,
      enableScrollRestoration: _w,
      navigate: gt,
      fetch: qt,
      revalidate: wn,
      createHref: (O) => e.history.createHref(O),
      encodeLocation: (O) => e.history.encodeLocation(O),
      getFetcher: Ct,
      deleteFetcher: oe,
      dispose: mt,
      getBlocker: Dw,
      deleteBlocker: Xf,
      patchRoutes: jw,
      _internalFetchControllers: j,
      _internalActiveDeferreds: ye,
      _internalSetRoutes: $w
    }),
    P
  );
}
function UP(e) {
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
  if (!n || !UP(n)) return { path: r };
  if (n.formMethod && !oE(n.formMethod))
    return { path: r, error: _t(405, { method: n.formMethod }) };
  let o = () => ({ path: r, error: _t(400, { type: 'invalid-body' }) }),
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
function HP(e, t) {
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
    y = g ? HP(r, g) : r,
    P = h ? h[1].statusCode : void 0,
    S = s && P && P >= 400,
    E = y.filter((R, k) => {
      let { route: I } = R;
      if (I.lazy) return !0;
      if (I.loader == null) return !1;
      if (i)
        return typeof I.loader != 'function' || I.loader.hydrate
          ? !0
          : t.loaderData[I.id] === void 0 &&
              (!t.errors || t.errors[I.id] === void 0);
      if (qP(t.loaderData, t.matches[k], R) || l.some((D) => D === R.route.id))
        return !0;
      let _ = t.matches[k],
        L = R;
      return Bp(
        R,
        Ye(
          {
            currentUrl: x,
            currentParams: _.params,
            nextUrl: b,
            nextParams: L.params
          },
          n,
          {
            actionResult: v,
            unstable_actionStatus: P,
            defaultShouldRevalidate: S
              ? !1
              : a ||
                x.pathname + x.search === b.pathname + b.search ||
                x.search !== b.search ||
                jv(_, L)
          }
        )
      );
    }),
    T = [];
  return (
    f.forEach((R, k) => {
      if (i || !r.some((N) => N.route.id === R.routeId) || u.has(k)) return;
      let I = Mn(m, R.path, p);
      if (!I) {
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
      let _ = t.fetchers.get(k),
        L = wi(I, R.path),
        D = !1;
      d.has(k)
        ? (D = !1)
        : c.includes(k)
          ? (D = !0)
          : _ && _.state !== 'idle' && _.data === void 0
            ? (D = a)
            : (D = Bp(
                L,
                Ye(
                  {
                    currentUrl: x,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: b,
                    nextParams: r[r.length - 1].params
                  },
                  n,
                  {
                    actionResult: v,
                    unstable_actionStatus: P,
                    defaultShouldRevalidate: S ? !1 : a
                  }
                )
              )),
        D &&
          T.push({
            key: k,
            routeId: R.routeId,
            path: R.path,
            matches: I,
            match: L,
            controller: new AbortController()
          });
    }),
    [E, T]
  );
}
function qP(e, t, r) {
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
async function GP(e, t, r, n, o, i, s, a) {
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
      c && tE(c) && (await c);
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
    Ao(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !gP.has(s) && (i[s] = n[s]);
  }
  Object.assign(o, i), Object.assign(o, Ye({}, t(o), { lazy: void 0 }));
}
function KP(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function YP(e, t, r, n, o, i, s, a) {
  let l = n.reduce((f, d) => f.add(d.route.id), new Set()),
    c = new Set(),
    u = await e({
      matches: o.map((f) => {
        let d = l.has(f.route.id);
        return Ye({}, f, {
          shouldLoad: d,
          resolve: (p) => (
            c.add(f.route.id),
            d
              ? XP(t, r, f, i, s, p, a)
              : Promise.resolve({ type: We.data, result: void 0 })
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
async function XP(e, t, r, n, o, i, s) {
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
        throw _t(405, { method: t.method, pathname: d, routeId: r.route.id });
      } else return { type: We.data, result: void 0 };
    else if (u) a = await c(u);
    else {
      let f = new URL(t.url),
        d = f.pathname + f.search;
      throw _t(404, { pathname: d });
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
    return { type: We.error, result: u };
  } finally {
    l && t.signal.removeEventListener('abort', l);
  }
  return a;
}
async function QP(e) {
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
      return { type: We.error, error: a };
    }
    return r === We.error
      ? {
          type: We.error,
          error: new yd(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers
        }
      : { type: We.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (r === We.error)
    return { type: We.error, error: t, statusCode: vl(t) ? t.status : n };
  if (nE(t)) {
    var o, i;
    return {
      type: We.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers)
    };
  }
  return { type: We.data, data: t, statusCode: n };
}
function ZP(e, t, r, n, o, i) {
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
function JP(e, t, r, n, o, i) {
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
        An(d)
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
  let { loaderData: l, errors: c } = JP(t, r, n, o, a);
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
        (c && c[h.route.id]) || (c = Ye({}, c, { [h.route.id]: p.error })),
          e.fetchers.delete(f);
      } else if (Dn(p)) ge(!1, 'Unhandled fetcher revalidation redirect');
      else if (An(p)) ge(!1, 'Unhandled fetcher deferred data');
      else {
        let h = Zr(p.data);
        e.fetchers.set(f, h);
      }
  }
  return { loaderData: l, errors: c };
}
function zp(e, t, r, n) {
  let o = Ye({}, t);
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
function _t(e, t) {
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
  return Un(Ye({}, t, { hash: '' }));
}
function eE(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function tE(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function rE(e) {
  return Fv(e.result) && NP.has(e.result.status);
}
function An(e) {
  return e.type === We.deferred;
}
function Yt(e) {
  return e.type === We.error;
}
function Dn(e) {
  return (e && e.type) === We.redirect;
}
function nE(e) {
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
function oE(e) {
  return BP.has(e.toLowerCase());
}
function br(e) {
  return $P.has(e.toLowerCase());
}
async function Gp(e, t, r, n, o, i) {
  for (let s = 0; s < r.length; s++) {
    let a = r[s],
      l = t[s];
    if (!l) continue;
    let c = e.find((f) => f.route.id === l.route.id),
      u = c != null && !jv(c, l) && (i && i[l.route.id]) !== void 0;
    if (An(a) && (o || u)) {
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
        return { type: We.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: We.error, error: o };
      }
    return { type: We.data, data: e.deferredData.data };
  }
}
function xd(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function wi(e, t) {
  let r = typeof t == 'string' ? hn(t).search : t.search;
  if (e[e.length - 1].route.index && xd(r || '')) return e[e.length - 1];
  let n = _v(e);
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
function iE(e, t) {
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
function sE(e, t) {
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
function aE(e, t) {
  try {
    let r = e.sessionStorage.getItem($v);
    if (r) {
      let n = JSON.parse(r);
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function lE(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, o] of t) r[n] = [...o];
    try {
      e.sessionStorage.setItem($v, JSON.stringify(r));
    } catch (n) {
      Ao(
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
function cE(e, t) {
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
  return e ? PE() : uE();
}
function uE() {
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
const dE = w.createContext(null);
function fE(e) {
  let t = w.useContext(Kr).outlet;
  return t && w.createElement(dE.Provider, { value: e }, t);
}
function Hv(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = w.useContext(mn),
    { matches: o } = w.useContext(Kr),
    { pathname: i } = gn(),
    s = JSON.stringify(ml(o, n.v7_relativeSplatPath));
  return w.useMemo(() => gl(e, JSON.parse(s), i, r === 'path'), [e, s, i, r]);
}
function pE(e, t, r, n) {
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
  return yE(
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
function hE() {
  let e = SE(),
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
const mE = w.createElement(hE, null);
class gE extends w.Component {
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
function vE(e) {
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
function yE(e, t, r, n) {
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
      (h = f.route.errorElement || mE),
      l &&
        (c < 0 && d === 0
          ? ((p = !0), (v = null))
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
          w.createElement(vE, {
            match: f,
            routeContext: { outlet: u, matches: x, isDataRoute: r != null },
            children: g
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? w.createElement(gE, {
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
function bE(e) {
  let t = w.useContext(yl);
  return t || ge(!1), t;
}
function xE(e) {
  let t = w.useContext(Wv);
  return t || ge(!1), t;
}
function wE(e) {
  let t = w.useContext(Kr);
  return t || ge(!1), t;
}
function Gv(e) {
  let t = wE(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || ge(!1), r.route.id;
}
function SE() {
  var e;
  let t = w.useContext(zv),
    r = xE(Na.UseRouteError),
    n = Gv(Na.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function PE() {
  let { router: e } = bE(qv.UseNavigateStable),
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
function EE(e) {
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
  return fE(e.context);
}
function Yv(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = st.Pop,
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
function CE(e) {
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
function TE(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function RE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kE(e, t) {
  return e.button === 0 && (!t || t === '_self') && !RE(e);
}
const ME = [
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
  OE = '6';
try {
  window.__reactRouterVersion = OE;
} catch {}
function IE(e, t) {
  return zP({
    basename: t == null ? void 0 : t.basename,
    future: Yi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Iv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || AE(),
    routes: e,
    mapRouteProperties: CE,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnMiss:
      t == null ? void 0 : t.unstable_patchRoutesOnMiss,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function AE() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Yi({}, t, { errors: DE(t.errors) })), t;
}
function DE(e) {
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
const _E = w.createContext({ isTransitioning: !1 }),
  LE = w.createContext(new Map()),
  $E = 'startTransition',
  Fa = Oo[$E],
  jE = 'flushSync',
  Yp = Vw[jE];
function BE(e) {
  Fa ? Fa(e) : e();
}
function li(e) {
  Yp ? Yp(e) : e();
}
class NE {
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
      (E) => {
        x ? BE(E) : E();
      },
      [x]
    ),
    g = w.useCallback(
      (E, T) => {
        let {
          deletedFetchers: R,
          unstable_flushSync: k,
          unstable_viewTransitionOpts: I
        } = T;
        R.forEach((L) => v.current.delete(L)),
          E.fetchers.forEach((L, D) => {
            L.data !== void 0 && v.current.set(D, L.data);
          });
        let _ =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != 'function';
        if (!I || _) {
          k ? li(() => i(E)) : b(() => i(E));
          return;
        }
        if (k) {
          li(() => {
            d && (u && u.resolve(), d.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: I.currentLocation,
                nextLocation: I.nextLocation
              });
          });
          let L = r.window.document.startViewTransition(() => {
            li(() => i(E));
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
              state: E,
              currentLocation: I.currentLocation,
              nextLocation: I.nextLocation
            }))
          : (a(E),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: I.currentLocation,
              nextLocation: I.nextLocation
            }));
      },
      [r.window, d, u, v, b]
    );
  w.useLayoutEffect(() => r.subscribe(g), [r, g]),
    w.useEffect(() => {
      l.isTransitioning && !l.flushSync && f(new NE());
    }, [l]),
    w.useEffect(() => {
      if (u && s && r.window) {
        let E = s,
          T = u.promise,
          R = r.window.document.startViewTransition(async () => {
            b(() => i(E)), await T;
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
        go: (E) => r.navigate(E),
        push: (E, T, R) =>
          r.navigate(E, {
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset
          }),
        replace: (E, T, R) =>
          r.navigate(E, {
            replace: !0,
            state: T,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset
          })
      }),
      [r]
    ),
    P = r.basename || '/',
    S = w.useMemo(
      () => ({ router: r, navigator: y, static: !1, basename: P }),
      [r, y, P]
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
          LE.Provider,
          { value: v.current },
          w.createElement(
            _E.Provider,
            { value: l },
            w.createElement(
              Yv,
              {
                basename: P,
                location: o.location,
                navigationType: o.historyAction,
                navigator: y,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath }
              },
              o.initialized || r.future.v7_partialHydration
                ? w.createElement(FE, {
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
function FE(e) {
  let { routes: t, future: r, state: n } = e;
  return pE(t, void 0, n, r);
}
function VE(e) {
  let { basename: t, children: r, future: n, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = Iv({ window: o, v5Compat: !0 }));
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
const WE =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  zE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
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
      d = TE(t, ME),
      { basename: m } = w.useContext(mn),
      p,
      h = !1;
    if (typeof c == 'string' && zE.test(c) && ((p = c), WE))
      try {
        let g = new URL(window.location.href),
          y = c.startsWith('//') ? new URL(g.protocol + c) : new URL(c),
          P = Ho(y.pathname, m);
        y.origin === g.origin && P != null
          ? (c = P + y.search + y.hash)
          : (h = !0);
      } catch {}
    let v = cE(c, { relative: o }),
      x = UE(c, {
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
var Xp;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Xp || (Xp = {}));
var Qp;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Qp || (Qp = {}));
function UE(e, t) {
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
      if (kE(f, r)) {
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
const HE = Object.freeze(
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
var qE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  GE = Qv(function (e) {
    return (
      qE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function KE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function YE(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var XE = (function () {
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
          this._insertTag(YE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = KE(o);
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
  Ee = '-webkit-',
  Zv = 'comm',
  Sd = 'rule',
  Pd = 'decl',
  QE = '@import',
  Jv = '@keyframes',
  ZE = '@layer',
  JE = Math.abs,
  bl = String.fromCharCode,
  eC = Object.assign;
function tC(e, t) {
  return wt(e, 0) ^ 45
    ? (((((((t << 2) ^ wt(e, 0)) << 2) ^ wt(e, 1)) << 2) ^ wt(e, 2)) << 2) ^
        wt(e, 3)
    : 0;
}
function ey(e) {
  return e.trim();
}
function rC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ce(e, t, r) {
  return e.replace(t, r);
}
function mu(e, t) {
  return e.indexOf(t);
}
function wt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qi(e, t, r) {
  return e.slice(t, r);
}
function Pr(e) {
  return e.length;
}
function Ed(e) {
  return e.length;
}
function Ks(e, t) {
  return t.push(e), e;
}
function nC(e, t) {
  return e.map(t).join('');
}
var xl = 1,
  _o = 1,
  ty = 0,
  zt = 0,
  lt = 0,
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
    column: _o,
    length: s,
    return: ''
  };
}
function ci(e, t) {
  return eC(wl('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function oC() {
  return lt;
}
function iC() {
  return (
    (lt = zt > 0 ? wt(Go, --zt) : 0), _o--, lt === 10 && ((_o = 1), xl--), lt
  );
}
function Zt() {
  return (
    (lt = zt < ty ? wt(Go, zt++) : 0), _o++, lt === 10 && ((_o = 1), xl++), lt
  );
}
function Rr() {
  return wt(Go, zt);
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
  return (xl = _o = 1), (ty = Pr((Go = e))), (zt = 0), [];
}
function ny(e) {
  return (Go = ''), e;
}
function ha(e) {
  return ey(vs(zt - 1, gu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sC(e) {
  for (; (lt = Rr()) && lt < 33; ) Zt();
  return Zi(e) > 2 || Zi(lt) > 3 ? '' : ' ';
}
function aC(e, t) {
  for (
    ;
    --t &&
    Zt() &&
    !(lt < 48 || lt > 102 || (lt > 57 && lt < 65) || (lt > 70 && lt < 97));

  );
  return vs(e, pa() + (t < 6 && Rr() == 32 && Zt() == 32));
}
function gu(e) {
  for (; Zt(); )
    switch (lt) {
      case e:
        return zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gu(lt);
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
function lC(e, t) {
  for (; Zt() && e + lt !== 57; ) if (e + lt === 84 && Rr() === 47) break;
  return '/*' + vs(t, zt - 1) + '*' + bl(e === 47 ? e : Zt());
}
function cC(e) {
  for (; !Zi(Rr()); ) Zt();
  return vs(e, zt);
}
function uC(e) {
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
      P = i,
      S = n,
      E = g;
    v;

  )
    switch (((p = b), (b = Zt()))) {
      case 40:
        if (p != 108 && wt(E, f - 1) == 58) {
          mu((E += Ce(ha(b), '&', '&\f')), '&\f') != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ha(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += sC(p);
        break;
      case 92:
        E += aC(pa() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            Ks(dC(lC(Zt(), pa()), t, r), l);
            break;
          default:
            E += '/';
        }
        break;
      case 123 * h:
        a[c++] = Pr(E) * x;
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            x == -1 && (E = Ce(E, /\f/g, '')),
              m > 0 &&
                Pr(E) - f &&
                Ks(
                  m > 32
                    ? Jp(E + ';', n, r, f - 1)
                    : Jp(Ce(E, ' ', '') + ';', n, r, f - 2),
                  l
                );
            break;
          case 59:
            E += ';';
          default:
            if (
              (Ks((S = Zp(E, t, r, c, u, o, a, g, (y = []), (P = []), f)), i),
              b === 123)
            )
              if (u === 0) ma(E, t, S, S, y, i, f, a, P);
              else
                switch (d === 99 && wt(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ma(
                      e,
                      S,
                      S,
                      n && Ks(Zp(e, S, S, 0, 0, o, a, g, o, (y = []), f), P),
                      o,
                      P,
                      f,
                      a,
                      n ? y : P
                    );
                    break;
                  default:
                    ma(E, S, S, S, [''], P, 0, a, P);
                }
        }
        (c = u = m = 0), (h = x = 1), (g = E = ''), (f = s);
        break;
      case 58:
        (f = 1 + Pr(E)), (m = p);
      default:
        if (h < 1) {
          if (b == 123) --h;
          else if (b == 125 && h++ == 0 && iC() == 125) continue;
        }
        switch (((E += bl(b)), b * h)) {
          case 38:
            x = u > 0 ? 1 : ((E += '\f'), -1);
            break;
          case 44:
            (a[c++] = (Pr(E) - 1) * x), (x = 1);
            break;
          case 64:
            Rr() === 45 && (E += ha(Zt())),
              (d = Rr()),
              (u = f = Pr((g = E += cC(pa())))),
              b++;
            break;
          case 45:
            p === 45 && Pr(E) == 2 && (h = 0);
        }
    }
  return i;
}
function Zp(e, t, r, n, o, i, s, a, l, c, u) {
  for (
    var f = o - 1, d = o === 0 ? i : [''], m = Ed(d), p = 0, h = 0, v = 0;
    p < n;
    ++p
  )
    for (var x = 0, b = Qi(e, f + 1, (f = JE((h = s[p])))), g = e; x < m; ++x)
      (g = ey(h > 0 ? d[x] + ' ' + b : Ce(b, /&\f/g, d[x]))) && (l[v++] = g);
  return wl(e, t, r, o === 0 ? Sd : a, l, c, u);
}
function dC(e, t, r) {
  return wl(e, t, r, Zv, bl(oC()), Qi(e, 2, -2), 0);
}
function Jp(e, t, r, n) {
  return wl(e, t, r, Pd, Qi(e, 0, n), Qi(e, n + 1, -1), n);
}
function To(e, t) {
  for (var r = '', n = Ed(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function fC(e, t, r, n) {
  switch (e.type) {
    case ZE:
      if (e.children.length) break;
    case QE:
    case Pd:
      return (e.return = e.return || e.value);
    case Zv:
      return '';
    case Jv:
      return (e.return = e.value + '{' + To(e.children, n) + '}');
    case Sd:
      e.value = e.props.join(',');
  }
  return Pr((r = To(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function pC(e) {
  var t = Ed(e);
  return function (r, n, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, o, i) || '';
    return s;
  };
}
function hC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var mC = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Rr()), o === 38 && i === 12 && (r[n] = 1), !Zi(i);

    )
      Zt();
    return vs(t, zt);
  },
  gC = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Zi(o)) {
        case 0:
          o === 38 && Rr() === 12 && (r[n] = 1), (t[n] += mC(zt - 1, r, n));
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
  vC = function (t, r) {
    return ny(gC(ry(t), r));
  },
  eh = new WeakMap(),
  yC = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !eh.get(n)) &&
        !o
      ) {
        eh.set(t, !0);
        for (
          var i = [], s = vC(r, i), a = n.props, l = 0, c = 0;
          l < s.length;
          l++
        )
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + ' ' + s[l];
      }
    }
  },
  bC = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function oy(e, t) {
  switch (tC(e, t)) {
    case 5103:
      return Ee + 'print-' + e + e;
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
      return Ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + Va + e + Tt + e + e;
    case 6828:
    case 4268:
      return Ee + e + Tt + e + e;
    case 6165:
      return Ee + e + Tt + 'flex-' + e + e;
    case 5187:
      return (
        Ee + e + Ce(e, /(\w+).+(:[^]+)/, Ee + 'box-$1$2' + Tt + 'flex-$1$2') + e
      );
    case 5443:
      return Ee + e + Tt + 'flex-item-' + Ce(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Ee +
        e +
        Tt +
        'flex-line-pack' +
        Ce(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Ee + e + Tt + Ce(e, 'shrink', 'negative') + e;
    case 5292:
      return Ee + e + Tt + Ce(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Ee +
        'box-' +
        Ce(e, '-grow', '') +
        Ee +
        e +
        Tt +
        Ce(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Ee + Ce(e, /([^-])(transform)/g, '$1' + Ee + '$2') + e;
    case 6187:
      return (
        Ce(
          Ce(Ce(e, /(zoom-|grab)/, Ee + '$1'), /(image-set)/, Ee + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return Ce(e, /(image-set\([^]*)/, Ee + '$1$`$1');
    case 4968:
      return (
        Ce(
          Ce(e, /(.+:)(flex-)?(.*)/, Ee + 'box-pack:$3' + Tt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Ee +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ce(e, /(.+)-inline(.+)/, Ee + '$1$2') + e;
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
      if (Pr(e) - 1 - t > 6)
        switch (wt(e, t + 1)) {
          case 109:
            if (wt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ce(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Ee +
                  '$2-$3$1' +
                  Va +
                  (wt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~mu(e, 'stretch')
              ? oy(Ce(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (wt(e, t + 1) !== 115) break;
    case 6444:
      switch (wt(e, Pr(e) - 3 - (~mu(e, '!important') && 10))) {
        case 107:
          return Ce(e, ':', ':' + Ee) + e;
        case 101:
          return (
            Ce(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Ee +
                (wt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Ee +
                '$2$3$1' +
                Tt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (wt(e, t + 11)) {
        case 114:
          return Ee + e + Tt + Ce(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Ee + e + Tt + Ce(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Ee + e + Tt + Ce(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Ee + e + Tt + e + e;
  }
  return e;
}
var xC = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Pd:
          t.return = oy(t.value, t.length);
          break;
        case Jv:
          return To([ci(t, { value: Ce(t.value, '@', '@' + Ee) })], o);
        case Sd:
          if (t.length)
            return nC(t.props, function (i) {
              switch (rC(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return To(
                    [ci(t, { props: [Ce(i, /:(read-\w+)/, ':' + Va + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return To(
                    [
                      ci(t, {
                        props: [Ce(i, /:(plac\w+)/, ':' + Ee + 'input-$1')]
                      }),
                      ci(t, { props: [Ce(i, /:(plac\w+)/, ':' + Va + '$1')] }),
                      ci(t, { props: [Ce(i, /:(plac\w+)/, Tt + 'input-$1')] })
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  wC = [xC],
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
    var o = t.stylisPlugins || wC,
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
      c = [yC, bC];
    {
      var u,
        f = [
          fC,
          hC(function (h) {
            u.insert(h);
          })
        ],
        d = pC(c.concat(o, f)),
        m = function (v) {
          return To(uC(v), d);
        };
      l = function (v, x, b, g) {
        (u = b),
          m(v ? v + '{' + x.styles + '}' : x.styles),
          g && (p.inserted[x.name] = !0);
      };
    }
    var p = {
      key: r,
      sheet: new XE({
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
 */ var pt = typeof Symbol == 'function' && Symbol.for,
  Cd = pt ? Symbol.for('react.element') : 60103,
  Td = pt ? Symbol.for('react.portal') : 60106,
  Sl = pt ? Symbol.for('react.fragment') : 60107,
  Pl = pt ? Symbol.for('react.strict_mode') : 60108,
  El = pt ? Symbol.for('react.profiler') : 60114,
  Cl = pt ? Symbol.for('react.provider') : 60109,
  Tl = pt ? Symbol.for('react.context') : 60110,
  Rd = pt ? Symbol.for('react.async_mode') : 60111,
  Rl = pt ? Symbol.for('react.concurrent_mode') : 60111,
  kl = pt ? Symbol.for('react.forward_ref') : 60112,
  Ml = pt ? Symbol.for('react.suspense') : 60113,
  SC = pt ? Symbol.for('react.suspense_list') : 60120,
  Ol = pt ? Symbol.for('react.memo') : 60115,
  Il = pt ? Symbol.for('react.lazy') : 60116,
  PC = pt ? Symbol.for('react.block') : 60121,
  EC = pt ? Symbol.for('react.fundamental') : 60117,
  CC = pt ? Symbol.for('react.responder') : 60118,
  TC = pt ? Symbol.for('react.scope') : 60119;
function rr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cd:
        switch (((e = e.type), e)) {
          case Rd:
          case Rl:
          case Sl:
          case El:
          case Pl:
          case Ml:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tl:
              case kl:
              case Il:
              case Ol:
              case Cl:
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
Me.ContextProvider = Cl;
Me.Element = Cd;
Me.ForwardRef = kl;
Me.Fragment = Sl;
Me.Lazy = Il;
Me.Memo = Ol;
Me.Portal = Td;
Me.Profiler = El;
Me.StrictMode = Pl;
Me.Suspense = Ml;
Me.isAsyncMode = function (e) {
  return ay(e) || rr(e) === Rd;
};
Me.isConcurrentMode = ay;
Me.isContextConsumer = function (e) {
  return rr(e) === Tl;
};
Me.isContextProvider = function (e) {
  return rr(e) === Cl;
};
Me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Cd;
};
Me.isForwardRef = function (e) {
  return rr(e) === kl;
};
Me.isFragment = function (e) {
  return rr(e) === Sl;
};
Me.isLazy = function (e) {
  return rr(e) === Il;
};
Me.isMemo = function (e) {
  return rr(e) === Ol;
};
Me.isPortal = function (e) {
  return rr(e) === Td;
};
Me.isProfiler = function (e) {
  return rr(e) === El;
};
Me.isStrictMode = function (e) {
  return rr(e) === Pl;
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
    e === El ||
    e === Pl ||
    e === Ml ||
    e === SC ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Il ||
        e.$$typeof === Ol ||
        e.$$typeof === Cl ||
        e.$$typeof === Tl ||
        e.$$typeof === kl ||
        e.$$typeof === EC ||
        e.$$typeof === CC ||
        e.$$typeof === TC ||
        e.$$typeof === PC))
  );
};
Me.typeOf = rr;
sy.exports = Me;
var RC = sy.exports,
  ly = RC,
  kC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  MC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  cy = {};
cy[ly.ForwardRef] = kC;
cy[ly.Memo] = MC;
var OC = !0;
function IC(e, t, r) {
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
    (n === !1 || OC === !1) &&
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
function AC(e) {
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
var DC = {
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
  _C = /[A-Z]|^ms/g,
  LC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  th = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Rc = Qv(function (e) {
    return fy(e) ? e : e.replace(_C, '-$&').toLowerCase();
  }),
  rh = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(LC, function (n, o, i) {
            return (Er = { name: o, styles: i, next: Er }), o;
          });
    }
    return DC[t] !== 1 && !fy(t) && typeof r == 'number' && r !== 0
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
        return (Er = { name: r.name, styles: r.styles, next: Er }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Er = { name: n.name, styles: n.styles, next: Er }), (n = n.next);
        var o = r.styles + ';';
        return o;
      }
      return $C(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var i = Er,
          s = r(e);
        return (Er = i), Ji(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function $C(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Ji(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != 'object')
        t != null && t[s] !== void 0
          ? (n += i + '{' + t[s] + '}')
          : th(s) && (n += Rc(i) + ':' + rh(i, s) + ';');
      else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          th(s[a]) && (n += Rc(i) + ':' + rh(i, s[a]) + ';');
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
var nh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Er,
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
    Er = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Ji(n, r, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Ji(n, r, t[a])), o && (i += s[a]);
    nh.lastIndex = 0;
    for (var l = '', c; (c = nh.exec(i)) !== null; ) l += '-' + c[1];
    var u = AC(i) + l;
    return { name: u, styles: i, next: Er };
  },
  jC = function (t) {
    return t();
  },
  py = Oo.useInsertionEffect ? Oo.useInsertionEffect : !1,
  BC = py || jC,
  oh = py || w.useLayoutEffect,
  hy = w.createContext(typeof HTMLElement < 'u' ? iy({ key: 'css' }) : null),
  NC = hy.Provider,
  my = function (t) {
    return w.forwardRef(function (r, n) {
      var o = w.useContext(hy);
      return t(r, o, n);
    });
  },
  ys = w.createContext({}),
  kc = { exports: {} },
  ih;
function gy() {
  return (
    ih ||
      ((ih = 1),
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
var FC = my(function (e, t) {
  var r = e.styles,
    n = kd([r], void 0, w.useContext(ys)),
    o = w.useRef();
  return (
    oh(
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
    oh(
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
  VC = GE,
  WC = function (t) {
    return t !== 'theme';
  },
  sh = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? VC : WC;
  },
  ah = function (t, r, n) {
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
  zC = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      uy(r, n, o),
      BC(function () {
        return dy(r, n, o);
      }),
      null
    );
  },
  UC = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = ah(t, r, n),
      l = a || sh(o),
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
          P = h;
        if (h.theme == null) {
          P = {};
          for (var S in h) P[S] = h[S];
          P.theme = w.useContext(ys);
        }
        typeof h.className == 'string'
          ? (g = IC(v.registered, y, h.className))
          : h.className != null && (g = h.className + ' ');
        var E = kd(f.concat(y), v.registered, P);
        (g += v.key + '-' + E.name), s !== void 0 && (g += ' ' + s);
        var T = c && a === void 0 ? sh(b) : l,
          R = {};
        for (var k in h) (c && k === 'as') || (T(k) && (R[k] = h[k]));
        return (
          (R.className = g),
          (R.ref = x),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(zC, {
              cache: v,
              serialized: E,
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
          return e(h, M({}, r, v, { shouldForwardProp: ah(p, v, !0) })).apply(
            void 0,
            f
          );
        }),
        p
      );
    };
  },
  HC = [
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
  vu = UC.bind();
HC.forEach(function (e) {
  vu[e] = vu(e);
});
var vy = { exports: {} },
  qC = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  GC = qC,
  KC = GC;
function yy() {}
function by() {}
by.resetWarningCache = yy;
var YC = function () {
  function e(n, o, i, s, a, l) {
    if (l !== KC) {
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
vy.exports = YC();
var xy = vy.exports;
const W = Yg(xy);
let yu;
typeof document == 'object' && (yu = iy({ key: 'css', prepend: !0 }));
function wy(e) {
  const { injectFirst: t, children: r } = e;
  return t && yu ? C.jsx(NC, { value: yu, children: r }) : r;
}
function XC(e) {
  return e == null || Object.keys(e).length === 0;
}
function Sy(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    n = typeof t == 'function' ? (o) => t(XC(o) ? r : o) : t;
  return C.jsx(FC, { styles: n });
}
function Md(e, t) {
  return vu(e, t);
}
const Py = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  QC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Sy,
        StyledEngineProvider: wy,
        ThemeContext: ys,
        css: bs,
        default: Md,
        internal_processStyles: Py,
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
function Ey(e) {
  if (!Br(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Ey(e[r]);
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
            ? (n[o] = Br(t[o]) ? Ey(t[o]) : t[o])
            : (n[o] = t[o]);
      }),
    n
  );
}
const ZC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dr, isPlainObject: Br },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  JC = ['values', 'unit', 'step'],
  eT = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return (
      t.sort((r, n) => r.val - n.val),
      t.reduce((r, n) => M({}, r, { [n.key]: n.val }), {})
    );
  };
function Cy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = 'px',
      step: n = 5
    } = e,
    o = Z(e, JC),
    i = eT(t),
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
const tT = { borderRadius: 4 };
function Oi(e, t) {
  return t ? dr(e, t, { clone: !1 }) : e;
}
const Od = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  lh = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Od[e]}px)`
  };
function Ut(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || lh;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = r(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = n.breakpoints || lh;
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
function rT(e, ...t) {
  const r = Ty(e),
    n = [r, ...t].reduce((o, i) => dr(o, i), {});
  return Ry(Object.keys(r), n);
}
function nT(e, t) {
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
  const n = r || nT(e, t),
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
const oT = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Q }, Symbol.toStringTag, {
    value: 'Module'
  })
);
function Al(e, t, r = !0) {
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
        : (o = Al(e, r) || n),
    t && (o = t(o, n, e)),
    o
  );
}
function rt(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        c = Al(l, n) || {};
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
function iT(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const sT = { m: 'margin', p: 'padding' },
  aT = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  },
  ch = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  lT = iT((e) => {
    if (e.length > 2)
      if (ch[e]) e = ch[e];
      else return [e];
    const [t, r] = e.split(''),
      n = sT[t],
      o = aT[r] || '';
    return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
  }),
  Id = [
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
  Ad = [
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
[...Id, ...Ad];
function xs(e, t, r, n) {
  var o;
  const i = (o = Al(e, t, !1)) != null ? o : r;
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
function cT(e, t) {
  return (r) => e.reduce((n, o) => ((n[o] = Hn(t, r)), n), {});
}
function uT(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const o = lT(r),
    i = cT(o, n),
    s = e[r];
  return Ut(e, s, i);
}
function ky(e, t) {
  const r = Dd(e.theme);
  return Object.keys(e)
    .map((n) => uT(e, t, n, r))
    .reduce(Oi, {});
}
function Ze(e) {
  return ky(e, Id);
}
Ze.propTypes = {};
Ze.filterProps = Id;
function Je(e) {
  return ky(e, Ad);
}
Je.propTypes = {};
Je.filterProps = Ad;
function dT(e = 8) {
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
  return rt({ prop: e, themeKey: 'borders', transform: t });
}
const fT = gr('border', ur),
  pT = gr('borderTop', ur),
  hT = gr('borderRight', ur),
  mT = gr('borderBottom', ur),
  gT = gr('borderLeft', ur),
  vT = gr('borderColor'),
  yT = gr('borderTopColor'),
  bT = gr('borderRightColor'),
  xT = gr('borderBottomColor'),
  wT = gr('borderLeftColor'),
  ST = gr('outline', ur),
  PT = gr('outlineColor'),
  _l = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xs(e.theme, 'shape.borderRadius', 4),
        r = (n) => ({ borderRadius: Hn(t, n) });
      return Ut(e, e.borderRadius, r);
    }
    return null;
  };
_l.propTypes = {};
_l.filterProps = ['borderRadius'];
Dl(fT, pT, hT, mT, gT, vT, yT, bT, xT, wT, _l, ST, PT);
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
const ET = rt({ prop: 'gridColumn' }),
  CT = rt({ prop: 'gridRow' }),
  TT = rt({ prop: 'gridAutoFlow' }),
  RT = rt({ prop: 'gridAutoColumns' }),
  kT = rt({ prop: 'gridAutoRows' }),
  MT = rt({ prop: 'gridTemplateColumns' }),
  OT = rt({ prop: 'gridTemplateRows' }),
  IT = rt({ prop: 'gridTemplateAreas' }),
  AT = rt({ prop: 'gridArea' });
Dl(Ll, $l, jl, ET, CT, TT, RT, kT, MT, OT, IT, AT);
function Ro(e, t) {
  return t === 'grey' ? t : e;
}
const DT = rt({ prop: 'color', themeKey: 'palette', transform: Ro }),
  _T = rt({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Ro
  }),
  LT = rt({ prop: 'backgroundColor', themeKey: 'palette', transform: Ro });
Dl(DT, _T, LT);
function Xt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $T = rt({ prop: 'width', transform: Xt }),
  _d = (e) => {
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
_d.filterProps = ['maxWidth'];
const jT = rt({ prop: 'minWidth', transform: Xt }),
  BT = rt({ prop: 'height', transform: Xt }),
  NT = rt({ prop: 'maxHeight', transform: Xt }),
  FT = rt({ prop: 'minHeight', transform: Xt });
rt({ prop: 'size', cssProperty: 'width', transform: Xt });
rt({ prop: 'size', cssProperty: 'height', transform: Xt });
const VT = rt({ prop: 'boxSizing' });
Dl($T, _d, jT, BT, NT, FT, VT);
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
  color: { themeKey: 'palette', transform: Ro },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: Ro
  },
  backgroundColor: { themeKey: 'palette', transform: Ro },
  p: { style: Je },
  pt: { style: Je },
  pr: { style: Je },
  pb: { style: Je },
  pl: { style: Je },
  px: { style: Je },
  py: { style: Je },
  padding: { style: Je },
  paddingTop: { style: Je },
  paddingRight: { style: Je },
  paddingBottom: { style: Je },
  paddingLeft: { style: Je },
  paddingX: { style: Je },
  paddingY: { style: Je },
  paddingInline: { style: Je },
  paddingInlineStart: { style: Je },
  paddingInlineEnd: { style: Je },
  paddingBlock: { style: Je },
  paddingBlockStart: { style: Je },
  paddingBlockEnd: { style: Je },
  m: { style: Ze },
  mt: { style: Ze },
  mr: { style: Ze },
  mb: { style: Ze },
  ml: { style: Ze },
  mx: { style: Ze },
  my: { style: Ze },
  margin: { style: Ze },
  marginTop: { style: Ze },
  marginRight: { style: Ze },
  marginBottom: { style: Ze },
  marginLeft: { style: Ze },
  marginX: { style: Ze },
  marginY: { style: Ze },
  marginInline: { style: Ze },
  marginInlineStart: { style: Ze },
  marginInlineEnd: { style: Ze },
  marginBlock: { style: Ze },
  marginBlockStart: { style: Ze },
  marginBlockEnd: { style: Ze },
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
  maxWidth: { style: _d },
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
function WT(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function zT(e, t) {
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
    const d = Al(o, c) || {};
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
          const p = zT(c[m], i);
          if (p != null)
            if (typeof p == 'object')
              if (s[m]) d = Oi(d, e(m, p, i, s));
              else {
                const h = Ut({ theme: i }, p, (v) => ({ [m]: v }));
                WT(h, p) ? (d[m] = t({ sx: p, theme: i })) : (d = Oi(d, h));
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
const UT = ['breakpoints', 'palette', 'spacing', 'shape'];
function Ss(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {} } = e,
    s = Z(e, UT),
    a = Cy(r),
    l = dT(o);
  let c = dr(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: M({ mode: 'light' }, n),
      spacing: l,
      shape: M({}, tT, i)
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
const HT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ss,
      private_createBreakpoints: Cy,
      unstable_applyStyles: Oy
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function qT(e) {
  return Object.keys(e).length === 0;
}
function Ld(e = null) {
  const t = w.useContext(ys);
  return !t || qT(t) ? e : t;
}
const GT = Ss();
function Bl(e = GT) {
  return Ld(e);
}
function KT({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const n = Bl(r),
    o = typeof e == 'function' ? e((t && n[t]) || n) : e;
  return C.jsx(Sy, { styles: o });
}
const YT = ['sx'],
  XT = (e) => {
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
function Ps(e) {
  const { sx: t } = e,
    r = Z(e, YT),
    { systemProps: n, otherProps: o } = XT(r);
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
const QT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ko,
        extendSxProp: Ps,
        unstable_createStyleFunctionSx: My,
        unstable_defaultSxConfig: ws
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  uh = (e) => e,
  ZT = () => {
    let e = uh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = uh;
      }
    };
  },
  $d = ZT();
function Iy(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Iy(e[t])) && (n && (n += ' '), (n += r));
    } else for (r in e) e[r] && (n && (n += ' '), (n += r));
  return n;
}
function ue() {
  for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Iy(e)) && (n && (n += ' '), (n += t));
  return n;
}
const JT = ['className', 'component'];
function eR(e = {}) {
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
      f = Ps(l),
      { className: d, component: m = 'div' } = f,
      p = Z(f, JT);
    return C.jsx(
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
const Ay = {
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
function Ue(e, t, r = 'Mui') {
  const n = Ay[t];
  return n ? `${r}-${n}` : `${$d.generate(e)}-${t}`;
}
function He(e, t, r = 'Mui') {
  const n = {};
  return (
    t.forEach((o) => {
      n[o] = Ue(e, o, r);
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
  tR = Symbol.for('react.server_context'),
  Ul = Symbol.for('react.forward_ref'),
  Hl = Symbol.for('react.suspense'),
  ql = Symbol.for('react.suspense_list'),
  Gl = Symbol.for('react.memo'),
  Kl = Symbol.for('react.lazy'),
  rR = Symbol.for('react.offscreen'),
  _y;
_y = Symbol.for('react.module.reference');
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
              case tR:
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
    e === rR ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Kl ||
        e.$$typeof === Gl ||
        e.$$typeof === Wl ||
        e.$$typeof === zl ||
        e.$$typeof === Ul ||
        e.$$typeof === _y ||
        e.getModuleId !== void 0))
  );
};
Oe.typeOf = vr;
Dy.exports = Oe;
var dh = Dy.exports;
const nR = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ly(e) {
  const t = `${e}`.match(nR);
  return (t && t[1]) || '';
}
function $y(e, t = '') {
  return e.displayName || e.name || Ly(e) || t;
}
function fh(e, t, r) {
  const n = $y(t);
  return e.displayName || (n !== '' ? `${r}(${n})` : r);
}
function oR(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return $y(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case dh.ForwardRef:
          return fh(e, e.render, 'ForwardRef');
        case dh.Memo:
          return fh(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const iR = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: oR, getFunctionName: Ly },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  sR = ['ownerState'],
  aR = ['variants'],
  lR = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function cR(e) {
  return Object.keys(e).length === 0;
}
function uR(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Mc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const dR = Ss(),
  fR = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ys({ defaultTheme: e, theme: t, themeId: r }) {
  return cR(t) ? e : t[r] || t;
}
function pR(e) {
  return e ? (t, r) => r[e] : null;
}
function ga(e, t) {
  let { ownerState: r } = t,
    n = Z(t, sR);
  const o = typeof e == 'function' ? e(M({ ownerState: r }, n)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => ga(i, M({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = Z(o, aR);
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
function hR(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = dR,
      rootShouldForwardProp: n = Mc,
      slotShouldForwardProp: o = Mc
    } = e,
    i = (s) =>
      Ko(M({}, s, { theme: Ys(M({}, s, { defaultTheme: r, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      Py(s, (P) => P.filter((S) => !(S != null && S.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = pR(fR(c))
        } = a,
        m = Z(a, lR),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = Mc;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : uR(s) && (x = void 0);
      const b = Md(s, M({ shouldForwardProp: x, label: v }, m)),
        g = (P) =>
          (typeof P == 'function' && P.__emotion_real !== P) || Br(P)
            ? (S) =>
                ga(
                  P,
                  M({}, S, {
                    theme: Ys({ theme: S.theme, defaultTheme: r, themeId: t })
                  })
                )
            : P,
        y = (P, ...S) => {
          let E = g(P);
          const T = S ? S.map(g) : [];
          l &&
            d &&
            T.push((I) => {
              const _ = Ys(M({}, I, { defaultTheme: r, themeId: t }));
              if (
                !_.components ||
                !_.components[l] ||
                !_.components[l].styleOverrides
              )
                return null;
              const L = _.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(L).forEach(([N, B]) => {
                  D[N] = ga(B, M({}, I, { theme: _ }));
                }),
                d(I, D)
              );
            }),
            l &&
              !p &&
              T.push((I) => {
                var _;
                const L = Ys(M({}, I, { defaultTheme: r, themeId: t })),
                  D =
                    L == null ||
                    (_ = L.components) == null ||
                    (_ = _[l]) == null
                      ? void 0
                      : _.variants;
                return ga({ variants: D }, M({}, I, { theme: L }));
              }),
            h || T.push(i);
          const R = T.length - S.length;
          if (Array.isArray(P) && R > 0) {
            const I = new Array(R).fill('');
            (E = [...P, ...I]), (E.raw = [...P.raw, ...I]);
          }
          const k = b(E, ...T);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return b.withConfig && (y.withConfig = b.withConfig), y;
    }
  );
}
const mR = hR();
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
function gR({ props: e, name: t, defaultTheme: r, themeId: n }) {
  let o = Bl(r);
  return n && (o = o[n] || o), jy({ theme: o, name: t, props: e });
}
const ln = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function vR(e, t, r, n, o) {
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
function yR(e, t, r, n, o) {
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
    (By !== void 0 ? yR : vR)(l, o, i, s, a)
  );
}
function bR(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const xR = Object.freeze(
  Object.defineProperty({ __proto__: null, default: bR }, Symbol.toStringTag, {
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
function wR(e, t) {
  return () => null;
}
function SR(e, t) {
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
function PR(e, t) {
  return () => null;
}
function Ua(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
let ph = 0;
function ER(e) {
  const [t, r] = w.useState(e),
    n = e || t;
  return (
    w.useEffect(() => {
      t == null && ((ph += 1), r(`mui-${ph}`));
    }, [t]),
    n
  );
}
const hh = Oo.useId;
function CR(e) {
  if (hh !== void 0) {
    const t = hh();
    return e ?? t;
  }
  return ER(e);
}
function TR(e, t, r, n, o) {
  return null;
}
function RR({ controlled: e, default: t, name: r, state: n = 'value' }) {
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
function ft(...e) {
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
const mh = {};
function kR(e, t) {
  const r = w.useRef(mh);
  return r.current === mh && (r.current = e(t)), r;
}
const MR = [];
function OR(e) {
  w.useEffect(e, MR);
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
  const e = kR(Yl.create).current;
  return OR(e.disposeEffect), e;
}
let Xl = !0,
  xu = !1;
const IR = new Yl(),
  AR = {
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
function DR(e) {
  const { type: t, tagName: r } = e;
  return !!(
    (r === 'INPUT' && AR[t] && !e.readOnly) ||
    (r === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function _R(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Xl = !0);
}
function Oc() {
  Xl = !1;
}
function LR() {
  this.visibilityState === 'hidden' && xu && (Xl = !0);
}
function $R(e) {
  e.addEventListener('keydown', _R, !0),
    e.addEventListener('mousedown', Oc, !0),
    e.addEventListener('pointerdown', Oc, !0),
    e.addEventListener('touchstart', Oc, !0),
    e.addEventListener('visibilitychange', LR, !0);
}
function jR(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Xl || DR(t);
}
function Fy() {
  const e = w.useCallback((o) => {
      o != null && $R(o.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function r() {
    return t.current
      ? ((xu = !0),
        IR.start(100, () => {
          xu = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function n(o) {
    return jR(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: n, onBlur: r, ref: e };
}
function BR(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function qe(e, t, r = void 0) {
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
const NR = typeof Symbol == 'function' && Symbol.for,
  FR = NR ? Symbol.for('mui.nested') : '__THEME_NESTED__';
function VR(e, t) {
  return typeof t == 'function' ? t(e) : M({}, e, t);
}
function WR(e) {
  const { children: t, theme: r } = e,
    n = Wy(),
    o = w.useMemo(() => {
      const i = n === null ? r : VR(n, r);
      return i != null && (i[FR] = n !== null), i;
    }, [r, n]);
  return C.jsx(Vy.Provider, { value: o, children: t });
}
const zR = ['value'],
  zy = w.createContext();
function UR(e) {
  let { value: t } = e,
    r = Z(e, zR);
  return C.jsx(zy.Provider, M({ value: t ?? !0 }, r));
}
const Uy = () => {
    const e = w.useContext(zy);
    return e ?? !1;
  },
  Hy = w.createContext(void 0);
function HR({ value: e, children: t }) {
  return C.jsx(Hy.Provider, { value: e, children: t });
}
function qR(e) {
  const { theme: t, name: r, props: n } = e;
  if (!t || !t.components || !t.components[r]) return n;
  const o = t.components[r];
  return o.defaultProps
    ? za(o.defaultProps, n)
    : !o.styleOverrides && !o.variants
      ? za(o, n)
      : n;
}
function GR({ props: e, name: t }) {
  const r = w.useContext(Hy);
  return qR({ props: e, name: t, theme: { components: r } });
}
const gh = {};
function vh(e, t, r, n = !1) {
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
function KR(e) {
  const { children: t, theme: r, themeId: n } = e,
    o = Ld(gh),
    i = Wy() || gh,
    s = vh(n, o, r),
    a = vh(n, i, r, !0),
    l = s.direction === 'rtl';
  return C.jsx(WR, {
    theme: a,
    children: C.jsx(ys.Provider, {
      value: s,
      children: C.jsx(UR, {
        value: l,
        children: C.jsx(HR, {
          value: s == null ? void 0 : s.components,
          children: t
        })
      })
    })
  });
}
const YR = [
    'component',
    'direction',
    'spacing',
    'divider',
    'children',
    'className',
    'useFlexGap'
  ],
  XR = Ss(),
  QR = mR('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  });
function ZR(e) {
  return gR({ props: e, name: 'MuiStack', defaultTheme: XR });
}
function JR(e, t) {
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
const ek = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom'
    })[e],
  tk = ({ ownerState: e, theme: t }) => {
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
                    [`margin${ek(c ? i[c] : e.direction)}`]: Hn(n, l)
                  }
                }
          )
        ));
    }
    return (r = rT(t.breakpoints, r)), r;
  };
function rk(e = {}) {
  const {
      createStyledComponent: t = QR,
      useThemeProps: r = ZR,
      componentName: n = 'MuiStack'
    } = e,
    o = () => qe({ root: ['root'] }, (l) => Ue(n, l), {}),
    i = t(tk);
  return w.forwardRef(function (l, c) {
    const u = r(l),
      f = Ps(u),
      {
        component: d = 'div',
        direction: m = 'column',
        spacing: p = 0,
        divider: h,
        children: v,
        className: x,
        useFlexGap: b = !1
      } = f,
      g = Z(f, YR),
      y = { direction: m, spacing: p, useFlexGap: b },
      P = o();
    return C.jsx(
      i,
      M({ as: d, ownerState: y, ref: c, className: ue(P.root, x) }, g, {
        children: h ? JR(v, h) : v
      })
    );
  });
}
function nk(e, t) {
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
var nt = {},
  qy = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(qy);
var Kn = qy.exports;
const ok = Dr(HE),
  ik = Dr(xR);
var Gy = Kn;
Object.defineProperty(nt, '__esModule', { value: !0 });
var xt = (nt.alpha = Jy);
nt.blend = gk;
nt.colorChannel = void 0;
var Ky = (nt.darken = Vd);
nt.decomposeColor = pr;
var yh = (nt.emphasize = eb),
  sk = (nt.getContrastRatio = dk);
nt.getLuminance = Ha;
nt.hexToRgb = Xy;
nt.hslToRgb = Zy;
var Yy = (nt.lighten = Wd);
nt.private_safeAlpha = fk;
nt.private_safeColorChannel = void 0;
nt.private_safeDarken = pk;
nt.private_safeEmphasize = mk;
nt.private_safeLighten = hk;
nt.recomposeColor = Xo;
nt.rgbToHex = uk;
var bh = Gy(ok),
  ak = Gy(ik);
function Fd(e, t = 0, r = 1) {
  return (0, ak.default)(e, t, r);
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
function lk(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function pr(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return pr(Xy(e));
  const t = e.indexOf('('),
    r = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(r) === -1)
    throw new Error((0, bh.default)(9, e));
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
      throw new Error((0, bh.default)(10, o));
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
nt.colorChannel = Qy;
const ck = (e, t) => {
  try {
    return Qy(e);
  } catch {
    return e;
  }
};
nt.private_safeColorChannel = ck;
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
function uk(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = pr(e);
  return `#${t.map((r, n) => lk(n === 3 ? Math.round(255 * r) : r)).join('')}`;
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
function dk(e, t) {
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
function fk(e, t, r) {
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
function pk(e, t, r) {
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
function hk(e, t, r) {
  try {
    return Wd(e, t);
  } catch {
    return e;
  }
}
function eb(e, t = 0.15) {
  return Ha(e) > 0.5 ? Vd(e, t) : Wd(e, t);
}
function mk(e, t, r) {
  try {
    return eb(e, t);
  } catch {
    return e;
  }
}
function gk(e, t, r, n = 1) {
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
  vk = {
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
  yk = ['mode', 'contrastThreshold', 'tonalOffset'],
  xh = {
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
  Ic = {
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
function wh(e, t, r, n) {
  const o = n.light || n,
    i = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === 'light'
        ? (e.light = Yy(e.main, o))
        : t === 'dark' && (e.dark = Ky(e.main, i)));
}
function bk(e = 'light') {
  return e === 'dark'
    ? { main: ao[200], light: ao[50], dark: ao[400] }
    : { main: ao[700], light: ao[400], dark: ao[800] };
}
function xk(e = 'light') {
  return e === 'dark'
    ? { main: io[200], light: io[50], dark: io[400] }
    : { main: io[500], light: io[300], dark: io[700] };
}
function wk(e = 'light') {
  return e === 'dark'
    ? { main: so[500], light: so[300], dark: so[700] }
    : { main: so[700], light: so[400], dark: so[800] };
}
function Sk(e = 'light') {
  return e === 'dark'
    ? { main: lo[400], light: lo[300], dark: lo[700] }
    : { main: lo[700], light: lo[500], dark: lo[900] };
}
function Pk(e = 'light') {
  return e === 'dark'
    ? { main: co[400], light: co[300], dark: co[700] }
    : { main: co[800], light: co[500], dark: co[900] };
}
function Ek(e = 'light') {
  return e === 'dark'
    ? { main: ui[400], light: ui[300], dark: ui[700] }
    : { main: '#ed6c02', light: ui[500], dark: ui[900] };
}
function Ck(e) {
  const {
      mode: t = 'light',
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2
    } = e,
    o = Z(e, yk),
    i = e.primary || bk(t),
    s = e.secondary || xk(t),
    a = e.error || wk(t),
    l = e.info || Sk(t),
    c = e.success || Pk(t),
    u = e.warning || Ek(t);
  function f(h) {
    return sk(h, Ic.text.primary) >= r ? Ic.text.primary : xh.text.primary;
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
        wh(h, 'light', b, n),
        wh(h, 'dark', g, n),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    m = { dark: Ic, light: xh };
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
        grey: vk,
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
const Tk = [
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
function Rk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Sh = { textTransform: 'uppercase' },
  Ph = '"Roboto", "Helvetica", "Arial", sans-serif';
function kk(e, t) {
  const r = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: n = Ph,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: f
    } = r,
    d = Z(r, Tk),
    m = o / 14,
    p = f || ((x) => `${(x / c) * m}rem`),
    h = (x, b, g, y, P) =>
      M(
        { fontFamily: n, fontWeight: x, fontSize: p(b), lineHeight: g },
        n === Ph ? { letterSpacing: `${Rk(y / b)}em` } : {},
        P,
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
      button: h(a, 14, 1.75, 0.4, Sh),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, Sh),
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
const Mk = 0.2,
  Ok = 0.14,
  Ik = 0.12;
function Ge(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mk})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ok})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ik})`
  ].join(',');
}
const Ak = [
    'none',
    Ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ],
  Dk = ['duration', 'easing', 'delay'],
  _k = {
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
function Eh(e) {
  return `${Math.round(e)}ms`;
}
function Lk(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function $k(e) {
  const t = M({}, _k, e.easing),
    r = M({}, tb, e.duration);
  return M(
    {
      getAutoHeightDuration: Lk,
      create: (o = ['all'], i = {}) => {
        const {
          duration: s = r.standard,
          easing: a = t.easeInOut,
          delay: l = 0
        } = i;
        return (
          Z(i, Dk),
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
const jk = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  Bk = [
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
    s = Z(e, Bk);
  if (e.vars) throw new Error(Xi(18));
  const a = Ck(n),
    l = Ss(e);
  let c = dr(l, {
    mixins: nk(l.breakpoints, r),
    palette: a,
    shadows: Ak.slice(),
    typography: kk(a, i),
    transitions: $k(o),
    zIndex: M({}, jk)
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
function ht() {
  const e = Bl(Ud);
  return e[Do] || e;
}
var Es = {},
  Ac = { exports: {} },
  Ch;
function Nk() {
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
      })(Ac)),
    Ac.exports
  );
}
const rb = Dr(QC),
  Fk = Dr(ZC),
  Vk = Dr(oT),
  Wk = Dr(iR),
  zk = Dr(HT),
  Uk = Dr(QT);
var Qo = Kn;
Object.defineProperty(Es, '__esModule', { value: !0 });
var Hk = (Es.default = oM);
Es.shouldForwardProp = va;
Es.systemDefaultTheme = void 0;
var lr = Qo(gy()),
  wu = Qo(Nk()),
  Th = Zk(rb),
  qk = Fk;
Qo(Vk);
Qo(Wk);
var Gk = Qo(zk),
  Kk = Qo(Uk);
const Yk = ['ownerState'],
  Xk = ['variants'],
  Qk = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function nb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (nb = function (n) {
    return n ? r : t;
  })(e);
}
function Zk(e, t) {
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
function Jk(e) {
  return Object.keys(e).length === 0;
}
function eM(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function va(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const tM = (Es.systemDefaultTheme = (0, Gk.default)()),
  rM = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Xs({ defaultTheme: e, theme: t, themeId: r }) {
  return Jk(t) ? e : t[r] || t;
}
function nM(e) {
  return e ? (t, r) => r[e] : null;
}
function ya(e, t) {
  let { ownerState: r } = t,
    n = (0, wu.default)(t, Yk);
  const o =
    typeof e == 'function' ? e((0, lr.default)({ ownerState: r }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => ya(i, (0, lr.default)({ ownerState: r }, n)));
  if (o && typeof o == 'object' && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, wu.default)(o, Xk);
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
function oM(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = tM,
      rootShouldForwardProp: n = va,
      slotShouldForwardProp: o = va
    } = e,
    i = (s) =>
      (0, Kk.default)(
        (0, lr.default)({}, s, {
          theme: Xs((0, lr.default)({}, s, { defaultTheme: r, themeId: t }))
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Th.internal_processStyles)(s, (P) =>
        P.filter((S) => !(S != null && S.__mui_systemSx))
      );
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: f,
          overridesResolver: d = nM(rM(c))
        } = a,
        m = (0, wu.default)(a, Qk),
        p = u !== void 0 ? u : (c && c !== 'Root' && c !== 'root') || !1,
        h = f || !1;
      let v,
        x = va;
      c === 'Root' || c === 'root'
        ? (x = n)
        : c
          ? (x = o)
          : eM(s) && (x = void 0);
      const b = (0, Th.default)(
          s,
          (0, lr.default)({ shouldForwardProp: x, label: v }, m)
        ),
        g = (P) =>
          (typeof P == 'function' && P.__emotion_real !== P) ||
          (0, qk.isPlainObject)(P)
            ? (S) =>
                ya(
                  P,
                  (0, lr.default)({}, S, {
                    theme: Xs({ theme: S.theme, defaultTheme: r, themeId: t })
                  })
                )
            : P,
        y = (P, ...S) => {
          let E = g(P);
          const T = S ? S.map(g) : [];
          l &&
            d &&
            T.push((I) => {
              const _ = Xs(
                (0, lr.default)({}, I, { defaultTheme: r, themeId: t })
              );
              if (
                !_.components ||
                !_.components[l] ||
                !_.components[l].styleOverrides
              )
                return null;
              const L = _.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(L).forEach(([N, B]) => {
                  D[N] = ya(B, (0, lr.default)({}, I, { theme: _ }));
                }),
                d(I, D)
              );
            }),
            l &&
              !p &&
              T.push((I) => {
                var _;
                const L = Xs(
                    (0, lr.default)({}, I, { defaultTheme: r, themeId: t })
                  ),
                  D =
                    L == null ||
                    (_ = L.components) == null ||
                    (_ = _[l]) == null
                      ? void 0
                      : _.variants;
                return ya(
                  { variants: D },
                  (0, lr.default)({}, I, { theme: L })
                );
              }),
            h || T.push(i);
          const R = T.length - S.length;
          if (Array.isArray(P) && R > 0) {
            const I = new Array(R).fill('');
            (E = [...P, ...I]), (E.raw = [...P.raw, ...I]);
          }
          const k = b(E, ...T);
          return s.muiName && (k.muiName = s.muiName), k;
        };
      return b.withConfig && (y.withConfig = b.withConfig), y;
    }
  );
}
function iM(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const Hd = (e) => iM(e) && e !== 'classes',
  le = Hk({ themeId: Do, defaultTheme: Ud, rootShouldForwardProp: Hd }),
  sM = ['theme'];
function aM(e) {
  let { theme: t } = e,
    r = Z(e, sM);
  const n = t[Do];
  return C.jsx(KR, M({}, r, { themeId: n ? Do : void 0, theme: n || t }));
}
const Rh = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function $e(e) {
  return GR(e);
}
function lM(e) {
  return Ue('MuiSvgIcon', e);
}
He('MuiSvgIcon', [
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
const cM = [
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
  uM = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${Q(t)}`, `fontSize${Q(r)}`]
      };
    return qe(o, lM, n);
  },
  dM = le('svg', {
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
      m = Z(n, cM),
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
    const x = uM(h);
    return C.jsxs(
      dM,
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
            f ? C.jsx('title', { children: f }) : null
          ]
        }
      )
    );
  });
Su.muiName = 'SvgIcon';
function Ql(e, t) {
  function r(n, o) {
    return C.jsx(
      Su,
      M({ 'data-testid': `${t}Icon`, ref: o }, n, { children: e })
    );
  }
  return (r.muiName = Su.muiName), w.memo(w.forwardRef(r));
}
const fM = {
    configure: (e) => {
      $d.configure(e);
    }
  },
  pM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: Q,
        createChainedFunction: bu,
        createSvgIcon: Ql,
        debounce: Ny,
        deprecatedPropType: wR,
        isMuiElement: SR,
        ownerDocument: Nt,
        ownerWindow: Yo,
        requirePropFactory: PR,
        setRef: Ua,
        unstable_ClassNameGenerator: fM,
        unstable_useEnhancedEffect: ln,
        unstable_useId: CR,
        unsupportedProp: TR,
        useControlled: RR,
        useEventCallback: tn,
        useForkRef: ft,
        useIsFocusVisible: Fy
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Pu(e, t) {
  return (
    (Pu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Pu(e, t)
  );
}
function ob(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Pu(e, t);
}
const kh = { disabled: !1 },
  qa = de.createContext(null);
var hM = function (t) {
    return t.scrollTop;
  },
  Si = 'unmounted',
  En = 'exited',
  Cn = 'entering',
  mo = 'entered',
  Eu = 'exiting',
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
            ? ((l = En), (i.appearStatus = Cn))
            : (l = mo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Si)
            : (l = En),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Si ? { status: En } : null;
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
            ? s !== Cn && s !== mo && (i = Cn)
            : (s === Cn || s === mo) && (i = Eu);
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
          if ((this.cancelNextCallback(), i === Cn)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : bi.findDOMNode(this);
              s && hM(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === En &&
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
        if ((!o && !s) || kh.disabled) {
          this.safeSetState({ status: mo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Cn }, function () {
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
        if (!i || kh.disabled) {
          this.safeSetState({ status: En }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Eu }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: En }, function () {
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
nr.EXITED = En;
nr.ENTERING = Cn;
nr.ENTERED = mo;
nr.EXITING = Eu;
function mM(e) {
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
function gM(e, t) {
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
function vM(e, t) {
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
function yM(e, t, r) {
  var n = qd(e.children),
    o = gM(t, n);
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
var bM =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  xM = {
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
      var s = i.handleExited.bind(mM(i));
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
        return { children: l ? vM(o, a) : yM(o, s, a), firstRender: !1 };
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
          c = bM(this.state.children).map(s);
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
Gd.defaultProps = xM;
const Zl = (e) => e.scrollTop;
function Ir(e, t) {
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
function wM(e) {
  return Ue('MuiCollapse', e);
}
He('MuiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'entered',
  'hidden',
  'wrapper',
  'wrapperInner'
]);
const SM = [
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
  PM = (e) => {
    const { orientation: t, classes: r } = e,
      n = {
        root: ['root', `${t}`],
        entered: ['entered'],
        hidden: ['hidden'],
        wrapper: ['wrapper', `${t}`],
        wrapperInner: ['wrapperInner', `${t}`]
      };
    return qe(n, wM, r);
  },
  EM = le('div', {
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
  CM = le('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (e, t) => t.wrapper
  })(({ ownerState: e }) =>
    M(
      { display: 'flex', width: '100%' },
      e.orientation === 'horizontal' && { width: 'auto', height: '100%' }
    )
  ),
  TM = le('div', {
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
      P = Z(n, SM),
      S = M({}, n, { orientation: x, collapsedSize: a }),
      E = PM(S),
      T = ht(),
      R = Nd(),
      k = w.useRef(null),
      I = w.useRef(),
      _ = typeof a == 'number' ? `${a}px` : a,
      L = x === 'horizontal',
      D = L ? 'width' : 'height',
      N = w.useRef(null),
      B = ft(r, N),
      j = (Y) => (Ie) => {
        if (Y) {
          const Re = N.current;
          Ie === void 0 ? Y(Re) : Y(Re, Ie);
        }
      },
      F = () => (k.current ? k.current[L ? 'clientWidth' : 'clientHeight'] : 0),
      z = j((Y, Ie) => {
        k.current && L && (k.current.style.position = 'absolute'),
          (Y.style[D] = _),
          f && f(Y, Ie);
      }),
      q = j((Y, Ie) => {
        const Re = F();
        k.current && L && (k.current.style.position = '');
        const { duration: Ae, easing: mt } = Ir(
          { style: b, timeout: g, easing: c },
          { mode: 'enter' }
        );
        if (g === 'auto') {
          const jt = T.transitions.getAutoHeightDuration(Re);
          (Y.style.transitionDuration = `${jt}ms`), (I.current = jt);
        } else
          Y.style.transitionDuration = typeof Ae == 'string' ? Ae : `${Ae}ms`;
        (Y.style[D] = `${Re}px`),
          (Y.style.transitionTimingFunction = mt),
          m && m(Y, Ie);
      }),
      fe = j((Y, Ie) => {
        (Y.style[D] = 'auto'), d && d(Y, Ie);
      }),
      J = j((Y) => {
        (Y.style[D] = `${F()}px`), p && p(Y);
      }),
      ae = j(h),
      ve = j((Y) => {
        const Ie = F(),
          { duration: Re, easing: Ae } = Ir(
            { style: b, timeout: g, easing: c },
            { mode: 'exit' }
          );
        if (g === 'auto') {
          const mt = T.transitions.getAutoHeightDuration(Ie);
          (Y.style.transitionDuration = `${mt}ms`), (I.current = mt);
        } else
          Y.style.transitionDuration = typeof Re == 'string' ? Re : `${Re}ms`;
        (Y.style[D] = _), (Y.style.transitionTimingFunction = Ae), v && v(Y);
      }),
      ye = (Y) => {
        g === 'auto' && R.start(I.current || 0, Y), o && o(N.current, Y);
      };
    return C.jsx(
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
        P,
        {
          children: (Y, Ie) =>
            C.jsx(
              EM,
              M(
                {
                  as: l,
                  className: ue(
                    E.root,
                    s,
                    {
                      entered: E.entered,
                      exited: !u && _ === '0px' && E.hidden
                    }[Y]
                  ),
                  style: M({ [L ? 'minWidth' : 'minHeight']: _ }, b),
                  ref: B
                },
                Ie,
                {
                  ownerState: M({}, S, { state: Y }),
                  children: C.jsx(CM, {
                    ownerState: M({}, S, { state: Y }),
                    className: E.wrapper,
                    ref: k,
                    children: C.jsx(TM, {
                      ownerState: M({}, S, { state: Y }),
                      className: E.wrapperInner,
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
function RM(e) {
  return Ue('MuiPaper', e);
}
He('MuiPaper', [
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
const kM = ['className', 'component', 'elevation', 'square', 'variant'],
  MM = (e) => {
    const { square: t, elevation: r, variant: n, classes: o } = e,
      i = {
        root: ['root', n, !t && 'rounded', n === 'elevation' && `elevation${r}`]
      };
    return qe(i, RM, o);
  },
  OM = le('div', {
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
              backgroundImage: `linear-gradient(${xt('#fff', Rh(t.elevation))}, ${xt('#fff', Rh(t.elevation))})`
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
      c = Z(n, kM),
      u = M({}, n, { component: i, elevation: s, square: a, variant: l }),
      f = MM(u);
    return C.jsx(
      OM,
      M({ as: i, ownerState: u, className: ue(f.root, o), ref: r }, c)
    );
  });
function IM(e) {
  return typeof e == 'string';
}
function ib(e, t, r) {
  return e === void 0 || IM(e)
    ? t
    : M({}, t, { ownerState: M({}, t.ownerState, r) });
}
const AM = { disableDefaultClasses: !1 },
  DM = w.createContext(AM);
function _M(e) {
  const { disableDefaultClasses: t } = w.useContext(DM);
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
function Mh(e) {
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
    a = Mh(n),
    l = Mh(o),
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
const LM = [
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
    s = Z(e, LM),
    a = i ? {} : ab(n, o),
    { props: l, internalRef: c } = lb(M({}, s, { externalSlotProps: a })),
    u = ft(
      c,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return ib(r, M({}, l, { ref: u }), o);
}
const $M = [
    'className',
    'elementType',
    'ownerState',
    'externalForwardedProps',
    'getSlotOwnerState',
    'internalForwardedProps'
  ],
  jM = ['component', 'slots', 'slotProps'],
  BM = ['component'];
function NM(e, t) {
  const {
      className: r,
      elementType: n,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a
    } = t,
    l = Z(t, $M),
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: f = { [e]: void 0 }
    } = i,
    d = Z(i, jM),
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
    b = Z(h.props, BM),
    g = ft(x, p == null ? void 0 : p.ref, t.ref),
    y = s ? s(b) : {},
    P = M({}, o, y),
    S = e === 'root' ? v || c : v,
    E = ib(
      m,
      M(
        {},
        e === 'root' && !c && !u[e] && a,
        e !== 'root' && !u[e] && a,
        b,
        S && { as: S },
        { ref: g }
      ),
      P
    );
  return (
    Object.keys(y).forEach((T) => {
      delete E[T];
    }),
    [m, E]
  );
}
function FM(e) {
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
    C.jsx('span', {
      className: d,
      style: m,
      children: C.jsx('span', { className: p })
    })
  );
}
const cr = He('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
  ]),
  VM = ['center', 'classes', 'className'];
let tc = (e) => e,
  Oh,
  Ih,
  Ah,
  Dh;
const Cu = 550,
  WM = 80,
  zM = Gn(
    Oh ||
      (Oh = tc`
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
  UM = Gn(
    Ih ||
      (Ih = tc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  HM = Gn(
    Ah ||
      (Ah = tc`
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
  qM = le('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  GM = le(FM, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Dh ||
      (Dh = tc`
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
    zM,
    Cu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    cr.child,
    cr.childLeaving,
    UM,
    Cu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    cr.childPulsate,
    HM,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  KM = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s } = n,
      a = Z(n, VM),
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
            pulsate: P,
            rippleX: S,
            rippleY: E,
            rippleSize: T,
            cb: R
          } = y;
          c((k) => [
            ...k,
            C.jsx(
              GM,
              {
                classes: {
                  ripple: ue(i.ripple, cr.ripple),
                  rippleVisible: ue(i.rippleVisible, cr.rippleVisible),
                  ripplePulsate: ue(i.ripplePulsate, cr.ripplePulsate),
                  child: ue(i.child, cr.child),
                  childLeaving: ue(i.childLeaving, cr.childLeaving),
                  childPulsate: ue(i.childPulsate, cr.childPulsate)
                },
                timeout: Cu,
                pulsate: P,
                rippleX: S,
                rippleY: E,
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
        (y = {}, P = {}, S = () => {}) => {
          const {
            pulsate: E = !1,
            center: T = o || P.pulsate,
            fakeElement: R = !1
          } = P;
          if ((y == null ? void 0 : y.type) === 'mousedown' && d.current) {
            d.current = !1;
            return;
          }
          (y == null ? void 0 : y.type) === 'touchstart' && (d.current = !0);
          const k = R ? null : h.current,
            I = k
              ? k.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let _, L, D;
          if (
            T ||
            y === void 0 ||
            (y.clientX === 0 && y.clientY === 0) ||
            (!y.clientX && !y.touches)
          )
            (_ = Math.round(I.width / 2)), (L = Math.round(I.height / 2));
          else {
            const { clientX: N, clientY: B } =
              y.touches && y.touches.length > 0 ? y.touches[0] : y;
            (_ = Math.round(N - I.left)), (L = Math.round(B - I.top));
          }
          if (T)
            (D = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const N =
                Math.max(Math.abs((k ? k.clientWidth : 0) - _), _) * 2 + 2,
              B = Math.max(Math.abs((k ? k.clientHeight : 0) - L), L) * 2 + 2;
            D = Math.sqrt(N ** 2 + B ** 2);
          }
          y != null && y.touches
            ? p.current === null &&
              ((p.current = () => {
                v({ pulsate: E, rippleX: _, rippleY: L, rippleSize: D, cb: S });
              }),
              m.start(WM, () => {
                p.current && (p.current(), (p.current = null));
              }))
            : v({ pulsate: E, rippleX: _, rippleY: L, rippleSize: D, cb: S });
        },
        [o, v, m]
      ),
      b = w.useCallback(() => {
        x({}, { pulsate: !0 });
      }, [x]),
      g = w.useCallback(
        (y, P) => {
          if (
            (m.clear(),
            (y == null ? void 0 : y.type) === 'touchend' && p.current)
          ) {
            p.current(),
              (p.current = null),
              m.start(0, () => {
                g(y, P);
              });
            return;
          }
          (p.current = null),
            c((S) => (S.length > 0 ? S.slice(1) : S)),
            (f.current = P);
        },
        [m]
      );
    return (
      w.useImperativeHandle(r, () => ({ pulsate: b, start: x, stop: g }), [
        b,
        x,
        g
      ]),
      C.jsx(
        qM,
        M({ className: ue(cr.root, i.root, s), ref: h }, a, {
          children: C.jsx(Gd, { component: null, exit: !0, children: l })
        })
      )
    );
  });
function YM(e) {
  return Ue('MuiButtonBase', e);
}
const XM = He('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  QM = [
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
  ZM = (e) => {
    const {
        disabled: t,
        focusVisible: r,
        focusVisibleClassName: n,
        classes: o
      } = e,
      s = qe({ root: ['root', t && 'disabled', r && 'focusVisible'] }, YM, o);
    return r && n && (s.root += ` ${n}`), s;
  },
  JM = le('button', {
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
    [`&.${XM.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
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
        onKeyUp: P,
        onMouseDown: S,
        onMouseLeave: E,
        onMouseUp: T,
        onTouchEnd: R,
        onTouchMove: k,
        onTouchStart: I,
        tabIndex: _ = 0,
        TouchRippleProps: L,
        touchRippleRef: D,
        type: N
      } = n,
      B = Z(n, QM),
      j = w.useRef(null),
      F = w.useRef(null),
      z = ft(F, D),
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
    const [Y, Ie] = w.useState(!1);
    w.useEffect(() => {
      Ie(!0);
    }, []);
    const Re = Y && !u && !c;
    w.useEffect(() => {
      ve && d && !u && Y && F.current.pulsate();
    }, [u, d, ve, Y]);
    function Ae(K, Ct, xe = f) {
      return tn(
        (oe) => (Ct && Ct(oe), !xe && F.current && F.current[K](oe), !0)
      );
    }
    const mt = Ae('start', S),
      jt = Ae('stop', v),
      Ne = Ae('stop', x),
      et = Ae('stop', T),
      gt = Ae('stop', (K) => {
        ve && K.preventDefault(), E && E(K);
      }),
      wn = Ae('start', I),
      Pt = Ae('stop', R),
      ir = Ae('stop', k),
      _r = Ae(
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
      ut = tn((K) => {
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
          P && P(K),
          h &&
            K.target === K.currentTarget &&
            Et() &&
            K.key === ' ' &&
            !K.defaultPrevented &&
            h(K);
      });
    let ct = l;
    ct === 'button' && (B.href || B.to) && (ct = m);
    const ne = {};
    ct === 'button'
      ? ((ne.type = N === void 0 ? 'button' : N), (ne.disabled = c))
      : (!B.href && !B.to && (ne.role = 'button'),
        c && (ne['aria-disabled'] = c));
    const be = ft(r, ae, j),
      ee = M({}, n, {
        centerRipple: i,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: _,
        focusVisible: ve
      }),
      he = ZM(ee);
    return C.jsxs(
      JM,
      M(
        {
          as: ct,
          className: ue(he.root, a),
          ownerState: ee,
          onBlur: _r,
          onClick: h,
          onContextMenu: jt,
          onFocus: Yr,
          onKeyDown: ut,
          onKeyUp: Gt,
          onMouseDown: mt,
          onMouseLeave: gt,
          onMouseUp: et,
          onDragLeave: Ne,
          onTouchEnd: Pt,
          onTouchMove: ir,
          onTouchStart: wn,
          ref: be,
          tabIndex: c ? -1 : _,
          type: N
        },
        ne,
        B,
        { children: [s, Re ? C.jsx(KM, M({ ref: z, center: i }, L)) : null] }
      )
    );
  });
function eO(e) {
  return Ue('MuiTypography', e);
}
He('MuiTypography', [
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
const tO = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping'
  ],
  rO = (e) => {
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
    return qe(a, eO, s);
  },
  nO = le('span', {
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
  _h = {
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
  oO = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  },
  iO = (e) => oO[e] || e,
  Se = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiTypography' }),
      o = iO(n.color),
      i = Ps(M({}, n, { color: o })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: c = !1,
        noWrap: u = !1,
        paragraph: f = !1,
        variant: d = 'body1',
        variantMapping: m = _h
      } = i,
      p = Z(i, tO),
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
      v = l || (f ? 'p' : m[d] || _h[d]) || 'span',
      x = rO(h);
    return C.jsx(
      nO,
      M({ as: v, ref: r, ownerState: h, className: ue(x.root, a) }, p)
    );
  });
function sO(e) {
  return Ue('MuiAppBar', e);
}
He('MuiAppBar', [
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
const aO = ['className', 'color', 'enableColorOnDark', 'position'],
  lO = (e) => {
    const { color: t, position: r, classes: n } = e,
      o = { root: ['root', `color${Q(t)}`, `position${Q(r)}`] };
    return qe(o, sO, n);
  },
  Qs = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  cO = le(ec, {
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
  uO = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiAppBar' }),
      {
        className: o,
        color: i = 'primary',
        enableColorOnDark: s = !1,
        position: a = 'fixed'
      } = n,
      l = Z(n, aO),
      c = M({}, n, { color: i, position: a, enableColorOnDark: s }),
      u = lO(c);
    return C.jsx(
      cO,
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
function dO(e) {
  return `${cb}--${e}`;
}
function fO(e, t) {
  return `${cb}-${e}-${t}`;
}
function ub(e, t) {
  const r = Ay[t];
  return r ? dO(r) : fO(e, t);
}
function pO(e, t) {
  const r = {};
  return (
    t.forEach((n) => {
      r[n] = ub(e, n);
    }),
    r
  );
}
function Lh(e) {
  return e.substring(2).toLowerCase();
}
function hO(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function mO(e) {
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
  const u = ft(t.ref, a),
    f = tn((p) => {
      const h = c.current;
      c.current = !1;
      const v = Nt(a.current);
      if (!l.current || !a.current || ('clientX' in p && hO(p, v))) return;
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
        const p = Lh(i),
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
        const p = Lh(n),
          h = Nt(a.current);
        return (
          h.addEventListener(p, f),
          () => {
            h.removeEventListener(p, f);
          }
        );
      }
    }, [f, n]),
    C.jsx(w.Fragment, { children: w.cloneElement(t, m) })
  );
}
const gO = [
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
function vO(e) {
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
function yO(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function bO(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    yO(e)
  );
}
function xO(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(gO)).forEach((n, o) => {
      const i = vO(n);
      i === -1 ||
        !bO(n) ||
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
function wO() {
  return !0;
}
function SO(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = xO,
      isEnabled: s = wO,
      open: a
    } = e,
    l = w.useRef(!1),
    c = w.useRef(null),
    u = w.useRef(null),
    f = w.useRef(null),
    d = w.useRef(null),
    m = w.useRef(!1),
    p = w.useRef(null),
    h = ft(t.ref, p),
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
        y = (E) => {
          (v.current = E),
            !(n || !s() || E.key !== 'Tab') &&
              g.activeElement === p.current &&
              E.shiftKey &&
              ((l.current = !0), u.current && u.current.focus());
        },
        P = () => {
          const E = p.current;
          if (E === null) return;
          if (!g.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            E.contains(g.activeElement) ||
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
            const I = !!(
                (R = v.current) != null &&
                R.shiftKey &&
                ((k = v.current) == null ? void 0 : k.key) === 'Tab'
              ),
              _ = T[0],
              L = T[T.length - 1];
            typeof _ != 'string' &&
              typeof L != 'string' &&
              (I ? L.focus() : _.focus());
          } else E.focus();
        };
      g.addEventListener('focusin', P), g.addEventListener('keydown', y, !0);
      const S = setInterval(() => {
        g.activeElement && g.activeElement.tagName === 'BODY' && P();
      }, 50);
      return () => {
        clearInterval(S),
          g.removeEventListener('focusin', P),
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
  return C.jsxs(w.Fragment, {
    children: [
      C.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: b,
        ref: c,
        'data-testid': 'sentinelStart'
      }),
      w.cloneElement(t, { ref: h, onFocus: x }),
      C.jsx('div', {
        tabIndex: a ? 0 : -1,
        onFocus: b,
        ref: u,
        'data-testid': 'sentinelEnd'
      })
    ]
  });
}
function PO(e) {
  return typeof e == 'function' ? e() : e;
}
const db = w.forwardRef(function (t, r) {
  const { children: n, container: o, disablePortal: i = !1 } = t,
    [s, a] = w.useState(null),
    l = ft(w.isValidElement(n) ? n.ref : null, r);
  if (
    (ln(() => {
      i || a(PO(o) || document.body);
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
    return C.jsx(w.Fragment, { children: n });
  }
  return C.jsx(w.Fragment, { children: s && od.createPortal(n, s) });
});
function EO(e) {
  const t = Nt(e);
  return t.body === e
    ? Yo(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ii(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function $h(e) {
  return parseInt(Yo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function CO(e) {
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
function jh(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !CO(s);
    a && l && Ii(s, o);
  });
}
function Dc(e, t) {
  let r = -1;
  return e.some((n, o) => (t(n) ? ((r = o), !0) : !1)), r;
}
function TO(e, t) {
  const r = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (EO(n)) {
      const s = BR(Nt(n));
      r.push({ value: n.style.paddingRight, property: 'padding-right', el: n }),
        (n.style.paddingRight = `${$h(n) + s}px`);
      const a = Nt(n).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: 'padding-right',
          el: l
        }),
          (l.style.paddingRight = `${$h(l) + s}px`);
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
function RO(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute('aria-hidden') === 'true' && t.push(r);
    }),
    t
  );
}
class kO {
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
      t.modalRef && Ii(t.modalRef, !1);
    const o = RO(r);
    jh(r, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = TO(o, r));
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
        t.modalRef && Ii(t.modalRef, r),
        jh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ii(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function MO(e) {
  return typeof e == 'function' ? e() : e;
}
function OO(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const IO = new kO();
function AO(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: n = !1,
      manager: o = IO,
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
    h = ft(p, f),
    [v, x] = w.useState(!u),
    b = OO(l);
  let g = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1);
  const y = () => Nt(m.current),
    P = () => (
      (d.current.modalRef = p.current), (d.current.mount = m.current), d.current
    ),
    S = () => {
      o.mount(P(), { disableScrollLock: n }),
        p.current && (p.current.scrollTop = 0);
    },
    E = tn(() => {
      const B = MO(t) || y().body;
      o.add(P(), B), p.current && S();
    }),
    T = w.useCallback(() => o.isTopModal(P()), [o]),
    R = tn((B) => {
      (m.current = B), B && (u && T() ? S() : p.current && Ii(p.current, g));
    }),
    k = w.useCallback(() => {
      o.remove(P(), g);
    }, [g, o]);
  w.useEffect(
    () => () => {
      k();
    },
    [k]
  ),
    w.useEffect(() => {
      u ? E() : (!b || !i) && k();
    }, [u, k, b, i, E]);
  const I = (B) => (j) => {
      var F;
      (F = B.onKeyDown) == null || F.call(B, j),
        !(j.key !== 'Escape' || j.which === 229 || !T()) &&
          (r || (j.stopPropagation(), c && c(j, 'escapeKeyDown')));
    },
    _ = (B) => (j) => {
      var F;
      (F = B.onClick) == null || F.call(B, j),
        j.target === j.currentTarget && c && c(j, 'backdropClick');
    };
  return {
    getRootProps: (B = {}) => {
      const j = sb(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const F = M({}, j, B);
      return M({ role: 'presentation' }, F, { onKeyDown: I(F), ref: h });
    },
    getBackdropProps: (B = {}) => {
      const j = B;
      return M({ 'aria-hidden': !0 }, j, { onClick: _(j), open: u });
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
  Cs = [Ft, hr, mr, Vt],
  $o = 'start',
  rs = 'end',
  DO = 'clippingParents',
  fb = 'viewport',
  di = 'popper',
  _O = 'reference',
  Bh = Cs.reduce(function (e, t) {
    return e.concat([t + '-' + $o, t + '-' + rs]);
  }, []),
  pb = [].concat(Cs, [Kd]).reduce(function (e, t) {
    return e.concat([t, t + '-' + $o, t + '-' + rs]);
  }, []),
  LO = 'beforeRead',
  $O = 'read',
  jO = 'afterRead',
  BO = 'beforeMain',
  NO = 'main',
  FO = 'afterMain',
  VO = 'beforeWrite',
  WO = 'write',
  zO = 'afterWrite',
  UO = [LO, $O, jO, BO, NO, FO, VO, WO, zO];
function Ar(e) {
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
function HO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      i = t.elements[r];
    !fr(i) ||
      !Ar(i) ||
      (Object.assign(i.style, n),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? '' : a);
      }));
  });
}
function qO(e) {
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
          !Ar(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const GO = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: HO,
  effect: qO,
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
function KO(e) {
  return ['table', 'td', 'th'].indexOf(Ar(e)) >= 0;
}
function vn(e) {
  return ((qn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function rc(e) {
  return Ar(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Yd(e) ? e.host : null) || vn(e);
}
function Nh(e) {
  return !fr(e) || Hr(e).position === 'fixed' ? null : e.offsetParent;
}
function YO(e) {
  var t = /firefox/i.test(Tu()),
    r = /Trident/i.test(Tu());
  if (r && fr(e)) {
    var n = Hr(e);
    if (n.position === 'fixed') return null;
  }
  var o = rc(e);
  for (Yd(o) && (o = o.host); fr(o) && ['html', 'body'].indexOf(Ar(o)) < 0; ) {
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
  for (var t = er(e), r = Nh(e); r && KO(r) && Hr(r).position === 'static'; )
    r = Nh(r);
  return r &&
    (Ar(r) === 'html' || (Ar(r) === 'body' && Hr(r).position === 'static'))
    ? t
    : r || YO(e) || t;
}
function Qd(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Ai(e, t, r) {
  return Bn(e, Ka(t, r));
}
function XO(e, t, r) {
  var n = Ai(e, t, r);
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
var QO = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    vb(typeof t != 'number' ? t : yb(t, Cs))
  );
};
function ZO(e) {
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
    var f = QO(o.padding, r),
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
      P = b - d[u] - f[p],
      S = b / 2 - d[u] / 2 + g,
      E = Ai(y, S, P),
      T = l;
    r.modifiersData[n] = ((t = {}), (t[T] = E), (t.centerOffset = E - S), t);
  }
}
function JO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (mb(t.elements.popper, o) && (t.elements.arrow = o)));
}
const eI = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: ZO,
  effect: JO,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function No(e) {
  return e.split('-')[1];
}
var tI = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function rI(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1;
  return { x: jo(r * o) / o || 0, y: jo(n * o) / o || 0 };
}
function Fh(e) {
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
    P = window;
  if (c) {
    var S = Ts(r),
      E = 'clientHeight',
      T = 'clientWidth';
    if (
      (S === er(r) &&
        ((S = vn(r)),
        Hr(S).position !== 'static' &&
          a === 'absolute' &&
          ((E = 'scrollHeight'), (T = 'scrollWidth'))),
      (S = S),
      o === Ft || ((o === Vt || o === mr) && i === rs))
    ) {
      y = hr;
      var R = f && S === P && P.visualViewport ? P.visualViewport.height : S[E];
      (h -= R - n.height), (h *= l ? 1 : -1);
    }
    if (o === Vt || ((o === Ft || o === hr) && i === rs)) {
      g = mr;
      var k = f && S === P && P.visualViewport ? P.visualViewport.width : S[T];
      (m -= k - n.width), (m *= l ? 1 : -1);
    }
  }
  var I = Object.assign({ position: a }, c && tI),
    _ = u === !0 ? rI({ x: m, y: h }, er(r)) : { x: m, y: h };
  if (((m = _.x), (h = _.y), l)) {
    var L;
    return Object.assign(
      {},
      I,
      ((L = {}),
      (L[y] = b ? '0' : ''),
      (L[g] = x ? '0' : ''),
      (L.transform =
        (P.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + h + 'px)'
          : 'translate3d(' + m + 'px, ' + h + 'px, 0)'),
      L)
    );
  }
  return Object.assign(
    {},
    I,
    ((t = {}),
    (t[y] = b ? h + 'px' : ''),
    (t[g] = x ? m + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function nI(e) {
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
      Fh(
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
        Fh(
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
const oI = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: nI,
  data: {}
};
var Zs = { passive: !0 };
function iI(e) {
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
const sI = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: iI,
  data: {}
};
var aI = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function ba(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return aI[t];
  });
}
var lI = { start: 'end', end: 'start' };
function Vh(e) {
  return e.replace(/start|end/g, function (t) {
    return lI[t];
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
function cI(e, t) {
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
function uI(e) {
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
  return ['html', 'body', '#document'].indexOf(Ar(e)) >= 0
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
function dI(e, t) {
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
function Wh(e, t, r) {
  return t === fb ? Ru(cI(e, r)) : qn(t) ? dI(t, r) : Ru(uI(vn(e)));
}
function fI(e) {
  var t = Di(rc(e)),
    r = ['absolute', 'fixed'].indexOf(Hr(e).position) >= 0,
    n = r && fr(e) ? Ts(e) : e;
  return qn(n)
    ? t.filter(function (o) {
        return qn(o) && mb(o, n) && Ar(o) !== 'body';
      })
    : [];
}
function pI(e, t, r, n) {
  var o = t === 'clippingParents' ? fI(e) : [].concat(t),
    i = [].concat(o, [r]),
    s = i[0],
    a = i.reduce(
      function (l, c) {
        var u = Wh(e, c, n);
        return (
          (l.top = Bn(u.top, l.top)),
          (l.right = Ka(u.right, l.right)),
          (l.bottom = Ka(u.bottom, l.bottom)),
          (l.left = Bn(u.left, l.left)),
          l
        );
      },
      Wh(e, s, n)
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
    l = a === void 0 ? DO : a,
    c = r.rootBoundary,
    u = c === void 0 ? fb : c,
    f = r.elementContext,
    d = f === void 0 ? di : f,
    m = r.altBoundary,
    p = m === void 0 ? !1 : m,
    h = r.padding,
    v = h === void 0 ? 0 : h,
    x = vb(typeof v != 'number' ? v : yb(v, Cs)),
    b = d === di ? _O : di,
    g = e.rects.popper,
    y = e.elements[p ? b : d],
    P = pI(qn(y) ? y : y.contextElement || vn(e.elements.popper), l, u, s),
    S = Bo(e.elements.reference),
    E = xb({ reference: S, element: g, strategy: 'absolute', placement: o }),
    T = Ru(Object.assign({}, g, E)),
    R = d === di ? T : S,
    k = {
      top: P.top - R.top + x.top,
      bottom: R.bottom - P.bottom + x.bottom,
      left: P.left - R.left + x.left,
      right: R.right - P.right + x.right
    },
    I = e.modifiersData.offset;
  if (d === di && I) {
    var _ = I[o];
    Object.keys(k).forEach(function (L) {
      var D = [mr, hr].indexOf(L) >= 0 ? 1 : -1,
        N = [Ft, hr].indexOf(L) >= 0 ? 'y' : 'x';
      k[L] += _[N] * D;
    });
  }
  return k;
}
function hI(e, t) {
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
        ? Bh
        : Bh.filter(function (p) {
            return No(p) === u;
          })
      : Cs,
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
function mI(e) {
  if (kr(e) === Kd) return [];
  var t = ba(e);
  return [Vh(e), t, Vh(t)];
}
function gI(e) {
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
        g = l || (b || !p ? [ba(v)] : mI(v)),
        y = [v].concat(g).reduce(function (ve, ye) {
          return ve.concat(
            kr(ye) === Kd
              ? hI(t, {
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
        P = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        T = !0,
        R = y[0],
        k = 0;
      k < y.length;
      k++
    ) {
      var I = y[k],
        _ = kr(I),
        L = No(I) === $o,
        D = [Ft, hr].indexOf(_) >= 0,
        N = D ? 'width' : 'height',
        B = ns(t, {
          placement: I,
          boundary: u,
          rootBoundary: f,
          altBoundary: d,
          padding: c
        }),
        j = D ? (L ? mr : Vt) : L ? hr : Ft;
      P[N] > S[N] && (j = ba(j));
      var F = ba(j),
        z = [];
      if (
        (i && z.push(B[_] <= 0),
        a && z.push(B[j] <= 0, B[F] <= 0),
        z.every(function (ve) {
          return ve;
        }))
      ) {
        (R = I), (T = !1);
        break;
      }
      E.set(I, z);
    }
    if (T)
      for (
        var q = p ? 3 : 1,
          fe = function (ye) {
            var Y = y.find(function (Ie) {
              var Re = E.get(Ie);
              if (Re)
                return Re.slice(0, ye).every(function (Ae) {
                  return Ae;
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
const vI = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: gI,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
};
function zh(e, t, r) {
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
function Uh(e) {
  return [Ft, mr, hr, Vt].some(function (t) {
    return e[t] >= 0;
  });
}
function yI(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = ns(t, { elementContext: 'reference' }),
    a = ns(t, { altBoundary: !0 }),
    l = zh(s, n),
    c = zh(a, o, i),
    u = Uh(l),
    f = Uh(c);
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
const bI = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: yI
};
function xI(e, t, r) {
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
function wI(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    i = o === void 0 ? [0, 0] : o,
    s = pb.reduce(function (u, f) {
      return (u[f] = xI(f, t.rects, i)), u;
    }, {}),
    a = s[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = s);
}
const SI = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: wI
};
function PI(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = xb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  });
}
const EI = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: PI,
  data: {}
};
function CI(e) {
  return e === 'x' ? 'y' : 'x';
}
function TI(e) {
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
    P = CI(y),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    T = t.rects.popper,
    R =
      typeof h == 'function'
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    k =
      typeof R == 'number'
        ? { mainAxis: R, altAxis: R }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
    I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    _ = { x: 0, y: 0 };
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
        fe = b === $o ? E[B] : T[B],
        J = b === $o ? -T[B] : -E[B],
        ae = t.elements.arrow,
        ve = m && ae ? Xd(ae) : { width: 0, height: 0 },
        ye = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : gb(),
        Y = ye[D],
        Ie = ye[N],
        Re = Ai(0, E[B], ve[B]),
        Ae = g ? E[B] / 2 - q - Re - Y - k.mainAxis : fe - Re - Y - k.mainAxis,
        mt = g
          ? -E[B] / 2 + q + Re + Ie + k.mainAxis
          : J + Re + Ie + k.mainAxis,
        jt = t.elements.arrow && Ts(t.elements.arrow),
        Ne = jt ? (y === 'y' ? jt.clientTop || 0 : jt.clientLeft || 0) : 0,
        et = (L = I == null ? void 0 : I[y]) != null ? L : 0,
        gt = j + Ae - et - Ne,
        wn = j + mt - et,
        Pt = Ai(m ? Ka(F, gt) : F, j, m ? Bn(z, wn) : z);
      (S[y] = Pt), (_[y] = Pt - j);
    }
    if (a) {
      var ir,
        _r = y === 'x' ? Ft : Vt,
        Yr = y === 'x' ? hr : mr,
        Et = S[P],
        qt = P === 'y' ? 'height' : 'width',
        ut = Et + v[_r],
        Gt = Et - v[Yr],
        ct = [Ft, Vt].indexOf(x) !== -1,
        ne = (ir = I == null ? void 0 : I[P]) != null ? ir : 0,
        be = ct ? ut : Et - E[qt] - T[qt] - ne + k.altAxis,
        ee = ct ? Et + E[qt] + T[qt] - ne - k.altAxis : Gt,
        he = m && ct ? XO(be, Et, ee) : Ai(m ? be : ut, Et, m ? ee : Gt);
      (S[P] = he), (_[P] = he - Et);
    }
    t.modifiersData[n] = _;
  }
}
const RI = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: TI,
  requiresIfExists: ['offset']
};
function kI(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function MI(e) {
  return e === er(e) || !fr(e) ? Zd(e) : kI(e);
}
function OI(e) {
  var t = e.getBoundingClientRect(),
    r = jo(t.width) / e.offsetWidth || 1,
    n = jo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function II(e, t, r) {
  r === void 0 && (r = !1);
  var n = fr(t),
    o = fr(t) && OI(t),
    i = vn(t),
    s = Bo(e, o, r),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Ar(t) !== 'body' || ef(i)) && (a = MI(t)),
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
function AI(e) {
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
function DI(e) {
  var t = AI(e);
  return UO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function _I(e) {
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
function LI(e) {
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
var Hh = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function qh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function $I(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    i = o === void 0 ? Hh : o;
  return function (a, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Hh, i),
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
          var g = DI(LI([].concat(n, u.options.modifiers)));
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
            if (qh(b, g)) {
              (u.rects = {
                reference: II(b, Ts(g), u.options.strategy === 'fixed'),
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
                var P = u.orderedModifiers[y],
                  S = P.fn,
                  E = P.options,
                  T = E === void 0 ? {} : E,
                  R = P.name;
                typeof S == 'function' &&
                  (u = S({ state: u, options: T, name: R, instance: m }) || u);
              }
            }
          }
        },
        update: _I(function () {
          return new Promise(function (v) {
            m.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          h(), (d = !0);
        }
      };
    if (!qh(a, l)) return m;
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
          var P = y({ state: u, name: x, instance: m, options: g }),
            S = function () {};
          f.push(P || S);
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
var jI = [sI, EI, oI, GO, SI, vI, RI, eI, bI],
  BI = $I({ defaultModifiers: jI });
const wb = 'Popper';
function NI(e) {
  return ub(wb, e);
}
pO(wb, ['root']);
const FI = [
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
  VI = [
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
function WI(e, t) {
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
function zI(e) {
  return e.nodeType !== void 0;
}
const UI = () => qe({ root: ['root'] }, _M(NI)),
  HI = {},
  qI = w.forwardRef(function (t, r) {
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
      v = Z(t, FI),
      x = w.useRef(null),
      b = ft(x, r),
      g = w.useRef(null),
      y = ft(g, d),
      P = w.useRef(y);
    ln(() => {
      P.current = y;
    }, [y]),
      w.useImperativeHandle(d, () => g.current, []);
    const S = WI(u, s),
      [E, T] = w.useState(S),
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
        const j = BI(R, x.current, M({ placement: S }, f, { modifiers: B }));
        return (
          P.current(j),
          () => {
            j.destroy(), P.current(null);
          }
        );
      }, [R, a, l, c, f, S]);
    const I = { placement: E };
    h !== null && (I.TransitionProps = h);
    const _ = UI(),
      L = (n = p.root) != null ? n : 'div',
      D = Ga({
        elementType: L,
        externalSlotProps: m.root,
        externalForwardedProps: v,
        additionalProps: { role: 'tooltip', ref: b },
        ownerState: t,
        className: _.root
      });
    return C.jsx(L, M({}, D, { children: typeof i == 'function' ? i(I) : i }));
  }),
  GI = w.forwardRef(function (t, r) {
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
        popperOptions: d = HI,
        popperRef: m,
        style: p,
        transition: h = !1,
        slotProps: v = {},
        slots: x = {}
      } = t,
      b = Z(t, VI),
      [g, y] = w.useState(!0),
      P = () => {
        y(!1);
      },
      S = () => {
        y(!0);
      };
    if (!l && !u && (!h || g)) return null;
    let E;
    if (i) E = i;
    else if (n) {
      const k = ku(n);
      E = k && zI(k) ? Nt(k).body : Nt(null).body;
    }
    const T = !u && l && (!h || g) ? 'none' : void 0,
      R = h ? { in: u, onEnter: P, onExited: S } : void 0;
    return C.jsx(db, {
      disablePortal: a,
      container: E,
      children: C.jsx(
        qI,
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
  KI = XI(w),
  YI = rb;
function Pb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Pb = function (n) {
    return n ? r : t;
  })(e);
}
function XI(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var r = Pb(t);
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
function QI(e) {
  return Object.keys(e).length === 0;
}
function ZI(e = null) {
  const t = KI.useContext(YI.ThemeContext);
  return !t || QI(t) ? e : t;
}
Sb = tf.default = ZI;
const JI = [
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
  e2 = le(GI, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({}),
  t2 = w.forwardRef(function (t, r) {
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
      P = Z(i, JI),
      S =
        (n = g == null ? void 0 : g.root) != null
          ? n
          : l == null
            ? void 0
            : l.Root,
      E = M(
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
        P
      );
    return C.jsx(
      e2,
      M(
        {
          as: a,
          direction: o == null ? void 0 : o.direction,
          slots: { root: S },
          slotProps: y ?? c
        },
        E,
        { ref: r }
      )
    );
  }),
  r2 = Ql(
    C.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
    }),
    'Cancel'
  );
function n2(e) {
  return Ue('MuiChip', e);
}
const we = He('MuiChip', [
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
  o2 = [
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
  i2 = (e) => {
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
    return qe(c, n2, t);
  },
  s2 = le('div', {
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
                : xt(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : xt(e.palette.text.primary, 0.4)
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
                : xt(e.palette[t.color].contrastText, 0.7),
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
              : xt(
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
              : xt(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                )
          },
          [`&.${we.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : xt(
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
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : xt(e.palette[t.color].main, 0.7)}`,
            [`&.${we.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : xt(e.palette[t.color].main, e.palette.action.hoverOpacity)
            },
            [`&.${we.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                : xt(e.palette[t.color].main, e.palette.action.focusOpacity)
            },
            [`& .${we.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : xt(e.palette[t.color].main, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].main
              }
            }
          }
      )
  ),
  a2 = le('span', {
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
function Gh(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const Eb = w.forwardRef(function (t, r) {
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
    P = Z(n, o2),
    S = w.useRef(null),
    E = ft(S, r),
    T = (z) => {
      z.stopPropagation(), p && p(z);
    },
    R = (z) => {
      z.currentTarget === z.target && Gh(z) && z.preventDefault(), h && h(z);
    },
    k = (z) => {
      z.currentTarget === z.target &&
        (p && Gh(z)
          ? p(z)
          : z.key === 'Escape' && S.current && S.current.blur()),
        v && v(z);
    },
    I = s !== !1 && m ? !0 : s,
    _ = I || p ? Lo : l || 'div',
    L = M({}, n, {
      component: _,
      disabled: u,
      size: x,
      color: a,
      iconColor: (w.isValidElement(f) && f.props.color) || a,
      onDelete: !!p,
      clickable: I,
      variant: b
    }),
    D = i2(L),
    N =
      _ === Lo
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
        : C.jsx(r2, { className: ue(D.deleteIcon), onClick: T }));
  let j = null;
  o &&
    w.isValidElement(o) &&
    (j = w.cloneElement(o, { className: ue(D.avatar, o.props.className) }));
  let F = null;
  return (
    f &&
      w.isValidElement(f) &&
      (F = w.cloneElement(f, { className: ue(D.icon, f.props.className) })),
    C.jsxs(
      s2,
      M(
        {
          as: _,
          className: ue(D.root, i),
          disabled: I && u ? !0 : void 0,
          onClick: m,
          onKeyDown: R,
          onKeyUp: k,
          ref: E,
          tabIndex: y && u ? -1 : g,
          ownerState: L
        },
        N,
        P,
        {
          children: [
            j || F,
            C.jsx(a2, { className: ue(D.label), ownerState: L, children: d }),
            B
          ]
        }
      )
    )
  );
});
function l2(e) {
  return C.jsx(KT, M({}, e, { defaultTheme: Ud, themeId: Do }));
}
const c2 = Ql(
  C.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
  }),
  'Person'
);
function u2(e) {
  return Ue('MuiAvatar', e);
}
He('MuiAvatar', [
  'root',
  'colorDefault',
  'circular',
  'rounded',
  'square',
  'img',
  'fallback'
]);
const d2 = [
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
  f2 = (e) => {
    const { classes: t, variant: r, colorDefault: n } = e;
    return qe(
      {
        root: ['root', r, n && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback']
      },
      u2,
      t
    );
  },
  p2 = le('div', {
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
  h2 = le('img', {
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
  m2 = le(c2, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback
  })({ width: '75%', height: '75%' });
function g2({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: n }) {
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
      h = Z(n, d2);
    let v = null;
    const x = g2(M({}, u, { src: d, srcSet: m })),
      b = d || m,
      g = b && x !== 'error',
      y = M({}, n, { colorDefault: !g, component: a, variant: p }),
      P = f2(y),
      [S, E] = NM('img', {
        className: P.img,
        elementType: h2,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: M({}, u, c.img) }
        },
        additionalProps: { alt: o, src: d, srcSet: m, sizes: f },
        ownerState: y
      });
    return (
      g
        ? (v = C.jsx(S, M({}, E)))
        : i || i === 0
          ? (v = i)
          : b && o
            ? (v = o[0])
            : (v = C.jsx(m2, { ownerState: y, className: P.fallback })),
      C.jsx(
        p2,
        M({ as: a, ownerState: y, className: ue(P.root, s), ref: r }, h, {
          children: v
        })
      )
    );
  }),
  v2 = [
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
  y2 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Cb = w.forwardRef(function (t, r) {
    const n = ht(),
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
      g = Z(t, v2),
      y = w.useRef(null),
      P = ft(y, a.ref, r),
      S = (D) => (N) => {
        if (D) {
          const B = y.current;
          N === void 0 ? D(B) : D(B, N);
        }
      },
      E = S(d),
      T = S((D, N) => {
        Zl(D);
        const B = Ir({ style: v, timeout: x, easing: l }, { mode: 'enter' });
        (D.style.webkitTransition = n.transitions.create('opacity', B)),
          (D.style.transition = n.transitions.create('opacity', B)),
          u && u(D, N);
      }),
      R = S(f),
      k = S(h),
      I = S((D) => {
        const N = Ir({ style: v, timeout: x, easing: l }, { mode: 'exit' });
        (D.style.webkitTransition = n.transitions.create('opacity', N)),
          (D.style.transition = n.transitions.create('opacity', N)),
          m && m(D);
      }),
      _ = S(p),
      L = (D) => {
        i && i(y.current, D);
      };
    return C.jsx(
      b,
      M(
        {
          appear: s,
          in: c,
          nodeRef: y,
          onEnter: T,
          onEntered: R,
          onEntering: E,
          onExit: I,
          onExited: _,
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
                    y2[D],
                    v,
                    a.props.style
                  ),
                  ref: P
                },
                N
              )
            )
        }
      )
    );
  });
function b2(e) {
  return Ue('MuiBackdrop', e);
}
He('MuiBackdrop', ['root', 'invisible']);
const x2 = [
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
  w2 = (e) => {
    const { classes: t, invisible: r } = e;
    return qe({ root: ['root', r && 'invisible'] }, b2, t);
  },
  S2 = le('div', {
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
  P2 = w.forwardRef(function (t, r) {
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
        TransitionComponent: v = Cb,
        transitionDuration: x
      } = s,
      b = Z(s, x2),
      g = M({}, s, { component: c, invisible: d }),
      y = w2(g),
      P = (n = p.root) != null ? n : f.root;
    return C.jsx(
      v,
      M({ in: m, timeout: x }, b, {
        children: C.jsx(
          S2,
          M({ 'aria-hidden': !0 }, P, {
            as: (o = (i = h.root) != null ? i : u.Root) != null ? o : c,
            className: ue(y.root, l, P == null ? void 0 : P.className),
            ownerState: M({}, g, P == null ? void 0 : P.ownerState),
            classes: y,
            ref: r,
            children: a
          })
        )
      })
    );
  }),
  E2 = He('MuiBox', ['root']),
  C2 = zd(),
  dt = eR({
    themeId: Do,
    defaultTheme: C2,
    defaultClassName: E2.root,
    generateClassName: $d.generate
  }),
  T2 = Ql(
    C.jsx('path', {
      d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    }),
    'MoreHoriz'
  ),
  R2 = ['slots', 'slotProps'],
  k2 = le(Lo)(({ theme: e }) =>
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
            ? { backgroundColor: yh(e.palette.grey[200], 0.12) }
            : { backgroundColor: yh(e.palette.grey[600], 0.12) }
        )
      }
    )
  ),
  M2 = le(T2)({ width: 24, height: 16 });
function O2(e) {
  const { slots: t = {}, slotProps: r = {} } = e,
    n = Z(e, R2),
    o = e;
  return C.jsx('li', {
    children: C.jsx(
      k2,
      M({ focusRipple: !0 }, n, {
        ownerState: o,
        children: C.jsx(
          M2,
          M({ as: t.CollapsedIcon, ownerState: o }, r.collapsedIcon)
        )
      })
    )
  });
}
function I2(e) {
  return Ue('MuiBreadcrumbs', e);
}
const A2 = He('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']),
  D2 = [
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
  _2 = (e) => {
    const { classes: t } = e;
    return qe(
      { root: ['root'], li: ['li'], ol: ['ol'], separator: ['separator'] },
      I2,
      t
    );
  },
  L2 = le(Se, {
    name: 'MuiBreadcrumbs',
    slot: 'Root',
    overridesResolver: (e, t) => [{ [`& .${A2.li}`]: t.li }, t.root]
  })({}),
  $2 = le('ol', {
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
  j2 = le('li', {
    name: 'MuiBreadcrumbs',
    slot: 'Separator',
    overridesResolver: (e, t) => t.separator
  })({ display: 'flex', userSelect: 'none', marginLeft: 8, marginRight: 8 });
function B2(e, t, r, n) {
  return e.reduce(
    (o, i, s) => (
      s < e.length - 1
        ? (o = o.concat(
            i,
            C.jsx(
              j2,
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
    p = Z(n, D2),
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
    b = _2(x),
    g = Ga({
      elementType: a.CollapsedIcon,
      externalSlotProps: l.collapsedIcon,
      ownerState: x
    }),
    y = w.useRef(null),
    P = (E) => {
      const T = () => {
        v(!0);
        const R = y.current.querySelector('a[href],button,[tabindex]');
        R && R.focus();
      };
      return f + u >= E.length
        ? E
        : [
            ...E.slice(0, f),
            C.jsx(
              O2,
              {
                'aria-label': c,
                slots: { CollapsedIcon: a.CollapsedIcon },
                slotProps: { collapsedIcon: g },
                onClick: T
              },
              'ellipsis'
            ),
            ...E.slice(E.length - u, E.length)
          ];
    },
    S = w.Children.toArray(o)
      .filter((E) => w.isValidElement(E))
      .map((E, T) =>
        C.jsx('li', { className: b.li, children: E }, `child-${T}`)
      );
  return C.jsx(
    L2,
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
        children: C.jsx($2, {
          className: b.ol,
          ref: y,
          ownerState: x,
          children: B2(h || (d && S.length <= d) ? S : P(S), b.separator, m, x)
        })
      }
    )
  );
});
function N2(e) {
  return Ue('MuiCard', e);
}
He('MuiCard', ['root']);
const F2 = ['className', 'raised'],
  V2 = (e) => {
    const { classes: t } = e;
    return qe({ root: ['root'] }, N2, t);
  },
  W2 = le(ec, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ overflow: 'hidden' })),
  Ya = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCard' }),
      { className: o, raised: i = !1 } = n,
      s = Z(n, F2),
      a = M({}, n, { raised: i }),
      l = V2(a);
    return C.jsx(
      W2,
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
function z2(e) {
  return Ue('MuiCardContent', e);
}
He('MuiCardContent', ['root']);
const U2 = ['className', 'component'],
  H2 = (e) => {
    const { classes: t } = e;
    return qe({ root: ['root'] }, z2, t);
  },
  q2 = le('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })(() => ({ padding: 16, '&:last-child': { paddingBottom: 24 } })),
  Tb = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiCardContent' }),
      { className: o, component: i = 'div' } = n,
      s = Z(n, U2),
      a = M({}, n, { component: i }),
      l = H2(a);
    return C.jsx(
      q2,
      M({ as: i, className: ue(l.root, o), ownerState: a, ref: r }, s)
    );
  });
function G2(e) {
  return Ue('MuiCardHeader', e);
}
const Kh = He('MuiCardHeader', [
    'root',
    'avatar',
    'action',
    'content',
    'title',
    'subheader'
  ]),
  K2 = [
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
  Y2 = (e) => {
    const { classes: t } = e;
    return qe(
      {
        root: ['root'],
        avatar: ['avatar'],
        action: ['action'],
        content: ['content'],
        title: ['title'],
        subheader: ['subheader']
      },
      G2,
      t
    );
  },
  X2 = le('div', {
    name: 'MuiCardHeader',
    slot: 'Root',
    overridesResolver: (e, t) =>
      M(
        { [`& .${Kh.title}`]: t.title, [`& .${Kh.subheader}`]: t.subheader },
        t.root
      )
  })({ display: 'flex', alignItems: 'center', padding: 16 }),
  Q2 = le('div', {
    name: 'MuiCardHeader',
    slot: 'Avatar',
    overridesResolver: (e, t) => t.avatar
  })({ display: 'flex', flex: '0 0 auto', marginRight: 16 }),
  Z2 = le('div', {
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
  J2 = le('div', {
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
      m = Z(n, K2),
      p = M({}, n, { component: a, disableTypography: l }),
      h = Y2(p);
    let v = f;
    v != null &&
      v.type !== Se &&
      !l &&
      (v = C.jsx(
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
        (x = C.jsx(
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
      C.jsxs(
        X2,
        M({ className: ue(h.root, s), as: a, ref: r, ownerState: p }, m, {
          children: [
            i && C.jsx(Q2, { className: h.avatar, ownerState: p, children: i }),
            C.jsxs(J2, {
              className: h.content,
              ownerState: p,
              children: [v, x]
            }),
            o && C.jsx(Z2, { className: h.action, ownerState: p, children: o })
          ]
        })
      )
    );
  }),
  eA = (e, t) =>
    M(
      {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitTextSizeAdjust: '100%'
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  tA = (e) =>
    M({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      '@media print': { backgroundColor: (e.vars || e).palette.common.white }
    }),
  rA = (e, t = !1) => {
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
        html: eA(e, t),
        '*, *::before, *::after': { boxSizing: 'inherit' },
        'strong, b': { fontWeight: e.typography.fontWeightBold },
        body: M({ margin: 0 }, tA(e), {
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
  return C.jsxs(w.Fragment, {
    children: [C.jsx(l2, { styles: (o) => rA(o, n) }), r]
  });
}
function nA(e) {
  return Ue('MuiModal', e);
}
He('MuiModal', ['root', 'hidden', 'backdrop']);
const oA = [
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
  iA = (e) => {
    const { open: t, exited: r, classes: n } = e;
    return qe(
      { root: ['root', !t && r && 'hidden'], backdrop: ['backdrop'] },
      nA,
      n
    );
  },
  sA = le('div', {
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
  aA = le(P2, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, t) => t.backdrop
  })({ zIndex: -1 }),
  lA = w.forwardRef(function (t, r) {
    var n, o, i, s, a, l;
    const c = $e({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: u = aA,
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
        disableEscapeKeyDown: P = !1,
        disablePortal: S = !1,
        disableRestoreFocus: E = !1,
        disableScrollLock: T = !1,
        hideBackdrop: R = !1,
        keepMounted: k = !1,
        onBackdropClick: I,
        open: _,
        slotProps: L,
        slots: D
      } = c,
      N = Z(c, oA),
      B = M({}, c, {
        closeAfterTransition: m,
        disableAutoFocus: g,
        disableEnforceFocus: y,
        disableEscapeKeyDown: P,
        disablePortal: S,
        disableRestoreFocus: E,
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
      } = AO(M({}, B, { rootRef: r })),
      ve = M({}, B, { exited: J }),
      ye = iA(ve),
      Y = {};
    if ((p.props.tabIndex === void 0 && (Y.tabIndex = '-1'), ae)) {
      const { onEnter: et, onExited: gt } = z();
      (Y.onEnter = et), (Y.onExited = gt);
    }
    const Ie =
        (n = (o = D == null ? void 0 : D.root) != null ? o : x.Root) != null
          ? n
          : sA,
      Re =
        (i = (s = D == null ? void 0 : D.backdrop) != null ? s : x.Backdrop) !=
        null
          ? i
          : u,
      Ae = (a = L == null ? void 0 : L.root) != null ? a : b.root,
      mt = (l = L == null ? void 0 : L.backdrop) != null ? l : b.backdrop,
      jt = Ga({
        elementType: Ie,
        externalSlotProps: Ae,
        externalForwardedProps: N,
        getSlotProps: j,
        additionalProps: { ref: r, as: v },
        ownerState: ve,
        className: ue(
          d,
          Ae == null ? void 0 : Ae.className,
          ye == null ? void 0 : ye.root,
          !ve.open && ve.exited && (ye == null ? void 0 : ye.hidden)
        )
      }),
      Ne = Ga({
        elementType: Re,
        externalSlotProps: mt,
        additionalProps: f,
        getSlotProps: (et) =>
          F(
            M({}, et, {
              onClick: (gt) => {
                I && I(gt), et != null && et.onClick && et.onClick(gt);
              }
            })
          ),
        className: ue(
          mt == null ? void 0 : mt.className,
          f == null ? void 0 : f.className,
          ye == null ? void 0 : ye.backdrop
        ),
        ownerState: ve
      });
    return !k && !_ && (!ae || J)
      ? null
      : C.jsx(db, {
          ref: q,
          container: h,
          disablePortal: S,
          children: C.jsxs(
            Ie,
            M({}, jt, {
              children: [
                !R && u ? C.jsx(Re, M({}, Ne)) : null,
                C.jsx(SO, {
                  disableEnforceFocus: y,
                  disableAutoFocus: g,
                  disableRestoreFocus: E,
                  isEnabled: fe,
                  open: _,
                  children: w.cloneElement(p, Y)
                })
              ]
            })
          )
        });
  });
function cA(e) {
  return Ue('MuiDivider', e);
}
const p4 = He('MuiDivider', [
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
  uA = [
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
  dA = (e) => {
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
    return qe(
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
      cA,
      n
    );
  },
  fA = le('div', {
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
            : xt(e.palette.divider, 0.08)
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
  pA = le('span', {
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
      p = Z(n, uA),
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
      v = dA(h);
    return C.jsx(
      fA,
      M(
        { as: a, className: ue(v.root, s), role: f, ref: r, ownerState: h },
        p,
        {
          children: i
            ? C.jsx(pA, { className: v.wrapper, ownerState: h, children: i })
            : null
        }
      )
    );
  });
Fo.muiSkipListHighlight = !0;
const hA = [
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
function mA(e, t, r) {
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
function gA(e) {
  return typeof e == 'function' ? e() : e;
}
function Js(e, t, r) {
  const n = gA(r),
    o = mA(e, t, n);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const kb = w.forwardRef(function (t, r) {
  const n = ht(),
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
      TransitionComponent: P = nr
    } = t,
    S = Z(t, hA),
    E = w.useRef(null),
    T = ft(l.ref, E, r),
    R = (F) => (z) => {
      F && (z === void 0 ? F(E.current) : F(E.current, z));
    },
    k = R((F, z) => {
      Js(u, F, c), Zl(F), m && m(F, z);
    }),
    I = R((F, z) => {
      const q = Ir({ timeout: y, style: g, easing: f }, { mode: 'enter' });
      (F.style.webkitTransition = n.transitions.create(
        '-webkit-transform',
        M({}, q)
      )),
        (F.style.transition = n.transitions.create('transform', M({}, q))),
        (F.style.webkitTransform = 'none'),
        (F.style.transform = 'none'),
        h && h(F, z);
    }),
    _ = R(p),
    L = R(b),
    D = R((F) => {
      const z = Ir({ timeout: y, style: g, easing: f }, { mode: 'exit' });
      (F.style.webkitTransition = n.transitions.create('-webkit-transform', z)),
        (F.style.transition = n.transitions.create('transform', z)),
        Js(u, F, c),
        v && v(F);
    }),
    N = R((F) => {
      (F.style.webkitTransition = ''), (F.style.transition = ''), x && x(F);
    }),
    B = (F) => {
      s && s(E.current, F);
    },
    j = w.useCallback(() => {
      E.current && Js(u, E.current, c);
    }, [u, c]);
  return (
    w.useEffect(() => {
      if (d || u === 'down' || u === 'right') return;
      const F = Ny(() => {
          E.current && Js(u, E.current, c);
        }),
        z = Yo(E.current);
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
    C.jsx(
      P,
      M(
        {
          nodeRef: E,
          onEnter: k,
          onEntered: _,
          onEntering: I,
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
function vA(e) {
  return Ue('MuiDrawer', e);
}
He('MuiDrawer', [
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
const yA = ['BackdropProps'],
  bA = [
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
  xA = (e) => {
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
    return qe(o, vA, t);
  },
  wA = le(lA, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Mb })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Yh = le('div', {
    shouldForwardProp: Hd,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Mb
  })({ flex: '0 0 auto' }),
  SA = le(ec, {
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
function PA(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function EA({ direction: e }, t) {
  return e === 'rtl' && PA(t) ? Ob[t] : t;
}
const CA = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiDrawer' }),
      o = ht(),
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
      P = Z(n.ModalProps, yA),
      S = Z(n, bA),
      E = w.useRef(!1);
    w.useEffect(() => {
      E.current = !0;
    }, []);
    const T = EA({ direction: i ? 'rtl' : 'ltr' }, a),
      k = M({}, n, { anchor: a, elevation: f, open: h, variant: y }, S),
      I = xA(k),
      _ = C.jsx(
        SA,
        M({ elevation: y === 'temporary' ? f : 0, square: !0 }, v, {
          className: ue(I.paper, v.className),
          ownerState: k,
          children: c
        })
      );
    if (y === 'permanent')
      return C.jsx(
        Yh,
        M({ className: ue(I.root, I.docked, u), ownerState: k, ref: r }, S, {
          children: _
        })
      );
    const L = C.jsx(
      b,
      M({ in: h, direction: Ob[T], timeout: g, appear: E.current }, x, {
        children: _
      })
    );
    return y === 'persistent'
      ? C.jsx(
          Yh,
          M({ className: ue(I.root, I.docked, u), ownerState: k, ref: r }, S, {
            children: L
          })
        )
      : C.jsx(
          wA,
          M(
            {
              BackdropProps: M({}, l, m, { transitionDuration: g }),
              className: ue(I.root, I.modal, u),
              open: h,
              ownerState: k,
              onClose: p,
              hideBackdrop: d,
              ref: r
            },
            S,
            P,
            { children: L }
          )
        );
  }),
  Xh = rk({
    createStyledComponent: le('div', {
      name: 'MuiStack',
      slot: 'Root',
      overridesResolver: (e, t) => t.root
    }),
    useThemeProps: (e) => $e({ props: e, name: 'MuiStack' })
  }),
  Qh = w.createContext();
function TA(e) {
  return Ue('MuiGrid', e);
}
const RA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  kA = ['column-reverse', 'column', 'row-reverse', 'row'],
  MA = ['nowrap', 'wrap-reverse', 'wrap'],
  fi = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  os = He('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...RA.map((e) => `spacing-xs-${e}`),
    ...kA.map((e) => `direction-xs-${e}`),
    ...MA.map((e) => `wrap-xs-${e}`),
    ...fi.map((e) => `grid-xs-${e}`),
    ...fi.map((e) => `grid-sm-${e}`),
    ...fi.map((e) => `grid-md-${e}`),
    ...fi.map((e) => `grid-lg-${e}`),
    ...fi.map((e) => `grid-xl-${e}`)
  ]),
  OA = [
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
function IA({ theme: e, ownerState: t }) {
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
function AA({ theme: e, ownerState: t }) {
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
function Ib({ breakpoints: e, values: t }) {
  let r = '';
  Object.keys(t).forEach((o) => {
    r === '' && t[o] !== 0 && (r = o);
  });
  const n = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return n.slice(0, n.indexOf(r));
}
function DA({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = jn({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Ib({ breakpoints: e.breakpoints.values, values: i })),
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
function _A({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: n } = t;
  let o = {};
  if (r && n !== 0) {
    const i = jn({ values: n, breakpoints: e.breakpoints.values });
    let s;
    typeof i == 'object' &&
      (s = Ib({ breakpoints: e.breakpoints.values, values: i })),
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
function LA(e, t, r = {}) {
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
const $A = le('div', {
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
    n && (u = LA(s, c, t));
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
  AA,
  DA,
  _A,
  IA
);
function jA(e, t) {
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
const BA = (e) => {
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
    r && (c = jA(i, l));
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
    return qe(f, TA, t);
  },
  Pi = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiGrid' }),
      { breakpoints: o } = ht(),
      i = Ps(n),
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
      x = Z(i, OA),
      b = m || p,
      g = l || p,
      y = w.useContext(Qh),
      P = u ? a || 12 : y,
      S = {},
      E = M({}, x);
    o.keys.forEach((k) => {
      x[k] != null && ((S[k] = x[k]), delete E[k]);
    });
    const T = M(
        {},
        i,
        {
          columns: P,
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
      R = BA(T);
    return C.jsx(Qh.Provider, {
      value: P,
      children: C.jsx(
        $A,
        M({ ownerState: T, className: ue(R.root, s), as: c, ref: r }, E)
      )
    });
  }),
  NA = [
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
const FA = {
    entering: { opacity: 1, transform: Mu(1) },
    entered: { opacity: 1, transform: 'none' }
  },
  Lc =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Ab = w.forwardRef(function (t, r) {
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
      x = Z(t, NA),
      b = Nd(),
      g = w.useRef(),
      y = ht(),
      P = w.useRef(null),
      S = ft(P, i.ref, r),
      E = (N) => (B) => {
        if (N) {
          const j = P.current;
          B === void 0 ? N(j) : N(j, B);
        }
      },
      T = E(u),
      R = E((N, B) => {
        Zl(N);
        const {
          duration: j,
          delay: F,
          easing: z
        } = Ir({ style: p, timeout: h, easing: s }, { mode: 'enter' });
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
      k = E(c),
      I = E(m),
      _ = E((N) => {
        const {
          duration: B,
          delay: j,
          easing: F
        } = Ir({ style: p, timeout: h, easing: s }, { mode: 'exit' });
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
      L = E(d),
      D = (N) => {
        h === 'auto' && b.start(g.current || 0, N), n && n(P.current, N);
      };
    return C.jsx(
      v,
      M(
        {
          appear: o,
          in: a,
          nodeRef: P,
          onEnter: R,
          onEntered: k,
          onEntering: T,
          onExit: _,
          onExited: L,
          onExiting: I,
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
                    FA[N],
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
Ab.muiSupportAuto = !0;
function VA(e) {
  return Ue('MuiLinearProgress', e);
}
He('MuiLinearProgress', [
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
const WA = ['className', 'color', 'value', 'valueBuffer', 'variant'];
let Zo = (e) => e,
  Zh,
  Jh,
  em,
  tm,
  rm,
  nm;
const Ou = 4,
  zA = Gn(
    Zh ||
      (Zh = Zo`
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
  UA = Gn(
    Jh ||
      (Jh = Zo`
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
  HA = Gn(
    em ||
      (em = Zo`
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
  qA = (e) => {
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
    return qe(o, VA, t);
  },
  rf = (e, t) =>
    t === 'inherit'
      ? 'currentColor'
      : e.vars
        ? e.vars.palette.LinearProgress[`${t}Bg`]
        : e.palette.mode === 'light'
          ? Yy(e.palette[t].main, 0.62)
          : Ky(e.palette[t].main, 0.5),
  GA = le('span', {
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
  KA = le('span', {
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
      tm ||
        (tm = Zo`
    animation: ${0} 3s infinite linear;
  `),
      HA
    )
  ),
  YA = le('span', {
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
        rm ||
          (rm = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
        zA
      )
  ),
  XA = le('span', {
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
        nm ||
          (nm = Zo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
        UA
      )
  ),
  QA = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiLinearProgress' }),
      {
        className: o,
        color: i = 'primary',
        value: s,
        valueBuffer: a,
        variant: l = 'indeterminate'
      } = n,
      c = Z(n, WA),
      u = M({}, n, { color: i, variant: l }),
      f = qA(u),
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
    return C.jsxs(
      GA,
      M(
        { className: ue(f.root, o), ownerState: u, role: 'progressbar' },
        m,
        { ref: r },
        c,
        {
          children: [
            l === 'buffer'
              ? C.jsx(KA, { className: f.dashed, ownerState: u })
              : null,
            C.jsx(YA, { className: f.bar1, ownerState: u, style: p.bar1 }),
            l === 'determinate'
              ? null
              : C.jsx(XA, { className: f.bar2, ownerState: u, style: p.bar2 })
          ]
        }
      )
    );
  }),
  is = w.createContext({});
function ZA(e) {
  return Ue('MuiList', e);
}
He('MuiList', ['root', 'padding', 'dense', 'subheader']);
const JA = [
    'children',
    'className',
    'component',
    'dense',
    'disablePadding',
    'subheader'
  ],
  eD = (e) => {
    const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
    return qe(
      { root: ['root', !r && 'padding', n && 'dense', o && 'subheader'] },
      ZA,
      t
    );
  },
  tD = le('ul', {
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
      u = Z(n, JA),
      f = w.useMemo(() => ({ dense: a }), [a]),
      d = M({}, n, { component: s, dense: a, disablePadding: l }),
      m = eD(d);
    return C.jsx(is.Provider, {
      value: f,
      children: C.jsxs(
        tD,
        M({ as: s, className: ue(m.root, i), ref: r, ownerState: d }, u, {
          children: [c, o]
        })
      )
    });
  });
function rD(e) {
  return Ue('MuiListItemButton', e);
}
const pi = He('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected'
  ]),
  nD = [
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
  oD = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters
    ];
  },
  iD = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: n,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a
      } = e,
      c = qe(
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
        rD,
        r
      );
    return M({}, r, c);
  },
  sD = le(Lo, {
    shouldForwardProp: (e) => Hd(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: oD
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
            : xt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${pi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : xt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                )
          }
        },
        [`&.${pi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : xt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : xt(e.palette.primary.main, e.palette.action.selectedOpacity)
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
      p = Z(n, nD),
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
      g = iD(b),
      y = ft(x, r);
    return C.jsx(is.Provider, {
      value: v,
      children: C.jsx(
        sD,
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
function aD(e) {
  return Ue('MuiListItemIcon', e);
}
const h4 = He('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  lD = ['className'],
  cD = (e) => {
    const { alignItems: t, classes: r } = e;
    return qe(
      { root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] },
      aD,
      r
    );
  },
  uD = le('div', {
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
      i = Z(n, lD),
      s = w.useContext(is),
      a = M({}, n, { alignItems: s.alignItems }),
      l = cD(a);
    return C.jsx(uD, M({ className: ue(l.root, o), ownerState: a, ref: r }, i));
  });
function dD(e) {
  return Ue('MuiListItemText', e);
}
const om = He('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
  ]),
  fD = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps'
  ],
  pD = (e) => {
    const { classes: t, inset: r, primary: n, secondary: o, dense: i } = e;
    return qe(
      {
        root: ['root', r && 'inset', i && 'dense', n && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary']
      },
      dD,
      t
    );
  },
  hD = le('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${om.primary}`]: t.primary },
        { [`& .${om.secondary}`]: t.secondary },
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
      d = Z(n, fD),
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
      x = pD(v);
    return (
      p != null &&
        p.type !== Se &&
        !s &&
        (p = C.jsx(
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
        (h = C.jsx(
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
      C.jsxs(
        hD,
        M({ className: ue(x.root, i), ownerState: v, ref: r }, d, {
          children: [p, h]
        })
      )
    );
  }),
  mD = [
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
  gD = { entering: { transform: 'none' }, entered: { transform: 'none' } },
  vD = w.forwardRef(function (t, r) {
    const n = ht(),
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
      g = Z(t, mD),
      y = w.useRef(null),
      P = ft(y, a.ref, r),
      S = (D) => (N) => {
        if (D) {
          const B = y.current;
          N === void 0 ? D(B) : D(B, N);
        }
      },
      E = S(d),
      T = S((D, N) => {
        Zl(D);
        const B = Ir({ style: v, timeout: x, easing: l }, { mode: 'enter' });
        (D.style.webkitTransition = n.transitions.create('transform', B)),
          (D.style.transition = n.transitions.create('transform', B)),
          u && u(D, N);
      }),
      R = S(f),
      k = S(h),
      I = S((D) => {
        const N = Ir({ style: v, timeout: x, easing: l }, { mode: 'exit' });
        (D.style.webkitTransition = n.transitions.create('transform', N)),
          (D.style.transition = n.transitions.create('transform', N)),
          m && m(D);
      }),
      _ = S(p),
      L = (D) => {
        i && i(y.current, D);
      };
    return C.jsx(
      b,
      M(
        {
          appear: s,
          in: c,
          nodeRef: y,
          onEnter: T,
          onEntered: R,
          onEntering: E,
          onExit: I,
          onExited: _,
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
                    gD[D],
                    v,
                    a.props.style
                  ),
                  ref: P
                },
                N
              )
            )
        }
      )
    );
  });
function yD(e) {
  return Ue('MuiToolbar', e);
}
He('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const bD = ['className', 'component', 'disableGutters', 'variant'],
  xD = (e) => {
    const { classes: t, disableGutters: r, variant: n } = e;
    return qe({ root: ['root', !r && 'gutters', n] }, yD, t);
  },
  wD = le('div', {
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
  SD = w.forwardRef(function (t, r) {
    const n = $e({ props: t, name: 'MuiToolbar' }),
      {
        className: o,
        component: i = 'div',
        disableGutters: s = !1,
        variant: a = 'regular'
      } = n,
      l = Z(n, bD),
      c = M({}, n, { component: i, disableGutters: s, variant: a }),
      u = xD(c);
    return C.jsx(
      wD,
      M({ as: i, className: ue(u.root, o), ref: r, ownerState: c }, l)
    );
  }),
  PD = 'modulepreload',
  ED = function (e) {
    return '/' + e;
  },
  im = {},
  je = function (t, r, n) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        s =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      o = Promise.all(
        r.map((a) => {
          if (((a = ED(a)), a in im)) return;
          im[a] = !0;
          const l = a.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = l ? 'stylesheet' : PD),
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
  CD = '/assets/elogocropped-ArxxZuCO.png',
  TD = () => (ht(), C.jsx('img', { src: CD, alt: 'Berry', width: '100' })),
  Db = () => {
    const e = dn((r) => r.customization.defaultId),
      t = Uo();
    return C.jsx(Lo, {
      disableRipple: !0,
      onClick: () => t({ type: ja, id: e }),
      component: _n,
      to: fu.defaultPath,
      children: C.jsx(TD, {})
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
const sm = {};
function RD(e, t) {
  sm[e] ||
    ((sm[e] = !0), console.error('[material-ui-popup-state] WARNING', t));
}
const kD = {
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
function MD({
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
  const [i, s] = w.useState(kD),
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
      const P = g == null ? void 0 : g.clientX,
        S = g == null ? void 0 : g.clientY,
        E =
          typeof P == 'number' && typeof S == 'number'
            ? { left: P, top: S }
            : void 0,
        T = (R) => {
          if (
            (!b &&
              !R.setAnchorElUsed &&
              r !== 'dialog' &&
              RD(
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
            anchorPosition: E,
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
        y.hovered && !(g instanceof Element && Iu(g, x))
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
        y.focused && !(g instanceof Element && Iu(g, x))
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
function OD(e, { popupId: t }) {
  if (!t) return null;
  const r = typeof e.getRootNode == 'function' ? e.getRootNode() : document;
  return typeof r.getElementById == 'function' ? r.getElementById(t) : null;
}
function Iu(e, t) {
  const { anchorEl: r, _childPopupState: n } = t;
  return am(r, e) || am(OD(e, t), e) || (n != null && Iu(e, n));
}
function am(e, t) {
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
  const i = MD({
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
    return C.jsxs(dt, {
      ref: i,
      children: [
        r === 'grow' &&
          C.jsx(Ab, { ...o, children: C.jsx(dt, { sx: s, children: e }) }),
        r === 'collapse' && C.jsx(Jl, { ...o, sx: s, children: e }),
        r === 'fade' &&
          C.jsx(Cb, {
            ...o,
            timeout: { appear: 500, enter: 600, exit: 400 },
            children: C.jsx(dt, { sx: s, children: e })
          }),
        r === 'slide' &&
          C.jsx(kb, {
            ...o,
            timeout: { appear: 0, enter: 400, exit: 200 },
            direction: n,
            children: C.jsx(dt, { sx: s, children: e })
          }),
        r === 'zoom' &&
          C.jsx(vD, { ...o, children: C.jsx(dt, { sx: s, children: e }) })
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
var ID = {
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
  AD = Object.defineProperty,
  DD = Object.defineProperties,
  _D = Object.getOwnPropertyDescriptors,
  Ja = Object.getOwnPropertySymbols,
  Lb = Object.prototype.hasOwnProperty,
  $b = Object.prototype.propertyIsEnumerable,
  lm = (e, t, r) =>
    t in e
      ? AD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  cm = (e, t) => {
    for (var r in t || (t = {})) Lb.call(t, r) && lm(e, r, t[r]);
    if (Ja) for (var r of Ja(t)) $b.call(t, r) && lm(e, r, t[r]);
    return e;
  },
  LD = (e, t) => DD(e, _D(t)),
  $D = (e, t) => {
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
        f = $D(s, ['color', 'size', 'stroke', 'children']);
      return w.createElement(
        'svg',
        cm(
          LD(cm({ ref: i }, ID), {
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
  jD = $t('brand-chrome', 'IconBrandChrome', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0', key: 'svg-1' }],
    ['path', { d: 'M12 9h8.4', key: 'svg-2' }],
    ['path', { d: 'M14.598 13.5l-4.2 7.275', key: 'svg-3' }],
    ['path', { d: 'M9.402 13.5l-4.2 -7.275', key: 'svg-4' }]
  ]),
  BD = $t('chevron-down', 'IconChevronDown', [
    ['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]
  ]),
  jb = $t('chevron-right', 'IconChevronRight', [
    ['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]
  ]),
  ND = $t('chevron-up', 'IconChevronUp', [
    ['path', { d: 'M6 15l6 -6l6 6', key: 'svg-0' }]
  ]),
  FD = $t('dashboard', 'IconDashboard', [
    ['path', { d: 'M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-0' }],
    ['path', { d: 'M13.45 11.55l2.05 -2.05', key: 'svg-1' }],
    ['path', { d: 'M6.4 20a9 9 0 1 1 11.2 0z', key: 'svg-2' }]
  ]),
  VD = $t('help', 'IconHelp', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 17l0 .01', key: 'svg-1' }],
    [
      'path',
      { d: 'M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4', key: 'svg-2' }
    ]
  ]),
  WD = $t('key', 'IconKey', [
    [
      'path',
      {
        d: 'M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z',
        key: 'svg-0'
      }
    ],
    ['path', { d: 'M15 9h.01', key: 'svg-1' }]
  ]),
  zD = $t('logout', 'IconLogout', [
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
  UD = $t('menu-2', 'IconMenu2', [
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
  um = $t('settings', 'IconSettings', [
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
  HD = $t('tallymark-1', 'IconTallymark1', [
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
const qD = w.forwardRef(({ children: e, ...t }, r) => {
  const n = ht();
  return C.jsx(nc, {
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
qD.propTypes = { children: W.node };
W.string, W.func;
var Au = { exports: {} },
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
var dm =
  typeof Element < 'u' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);
function rn(e, t) {
  if (!dm) throw new Error('No element matching method supported');
  return dm.call(e, t);
}
function yo(e) {
  e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
}
function fm(e, t) {
  return Array.prototype.filter.call(e.children, function (r) {
    return rn(r, t);
  });
}
var at = {
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
    n = at.state.scrolling(t);
  r.contains(n) ? clearTimeout(Wb[t]) : r.add(n);
}
function Ub(e, t) {
  Wb[t] = setTimeout(function () {
    return e.isAlive && e.element.classList.remove(at.state.scrolling(t));
  }, e.settings.scrollingThreshold);
}
function GD(e, t) {
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
      n && GD(e, l)),
    e.reach[l] &&
      (t || o) &&
      f.dispatchEvent(ta('ps-' + l + '-reach-' + e.reach[l]));
}
function Ke(e) {
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
function XD(e) {
  var t = Tr(e);
  return (
    Ke(t.width) +
    Ke(t.paddingLeft) +
    Ke(t.paddingRight) +
    Ke(t.borderLeftWidth) +
    Ke(t.borderRightWidth)
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
      (fm(t, at.element.rail('x')).forEach(function (o) {
        return yo(o);
      }),
      t.appendChild(e.scrollbarXRail)),
    t.contains(e.scrollbarYRail) ||
      (fm(t, at.element.rail('y')).forEach(function (o) {
        return yo(o);
      }),
      t.appendChild(e.scrollbarYRail)),
    !e.settings.suppressScrollX &&
    e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
      ? ((e.scrollbarXActive = !0),
        (e.railXWidth = e.containerWidth - e.railXMarginWidth),
        (e.railXRatio = e.containerWidth / e.railXWidth),
        (e.scrollbarXWidth = pm(
          e,
          Ke((e.railXWidth * e.containerWidth) / e.contentWidth)
        )),
        (e.scrollbarXLeft = Ke(
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
        (e.scrollbarYHeight = pm(
          e,
          Ke((e.railYHeight * e.containerHeight) / e.contentHeight)
        )),
        (e.scrollbarYTop = Ke(
          (r * (e.railYHeight - e.scrollbarYHeight)) /
            (e.contentHeight - e.containerHeight)
        )))
      : (e.scrollbarYActive = !1),
    e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
      (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
    e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
      (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
    QD(t, e),
    e.scrollbarXActive
      ? t.classList.add(at.state.active('x'))
      : (t.classList.remove(at.state.active('x')),
        (e.scrollbarXWidth = 0),
        (e.scrollbarXLeft = 0),
        (t.scrollLeft = e.isRtl === !0 ? e.contentWidth : 0)),
    e.scrollbarYActive
      ? t.classList.add(at.state.active('y'))
      : (t.classList.remove(at.state.active('y')),
        (e.scrollbarYHeight = 0),
        (e.scrollbarYTop = 0),
        (t.scrollTop = 0));
}
function pm(e, t) {
  return (
    e.settings.minScrollbarLength &&
      (t = Math.max(t, e.settings.minScrollbarLength)),
    e.settings.maxScrollbarLength &&
      (t = Math.min(t, e.settings.maxScrollbarLength)),
    t
  );
}
function QD(e, t) {
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
function ZD(e) {
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
function JD(e) {
  hm(e, [
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
    hm(e, [
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
function hm(e, t) {
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
      e[u].classList.remove(at.state.clicking),
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
      e[u].classList.add(at.state.clicking),
      b.stopPropagation();
  }
  e.event.bind(e[s], 'mousedown', function (b) {
    x(b);
  }),
    e.event.bind(e[s], 'touchstart', function (b) {
      x(b, !0);
    });
}
function e_(e) {
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
function t_(e) {
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
      if (c.classList.contains(at.element.consuming)) return !0;
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
function r_(e) {
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
      if (x.classList.contains(at.element.consuming)) return !0;
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
var n_ = function () {
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
  o_ = {
    'click-rail': ZD,
    'drag-thumb': JD,
    keyboard: e_,
    wheel: t_,
    touch: r_
  },
  ks = function (t, r) {
    var n = this;
    if (
      (r === void 0 && (r = {}),
      typeof t == 'string' && (t = document.querySelector(t)),
      !t || !t.nodeName)
    )
      throw new Error('no element is specified to initialize PerfectScrollbar');
    (this.element = t), t.classList.add(at.main), (this.settings = n_());
    for (var o in r) this.settings[o] = r[o];
    (this.containerWidth = null),
      (this.containerHeight = null),
      (this.contentWidth = null),
      (this.contentHeight = null);
    var i = function () {
        return t.classList.add(at.state.focus);
      },
      s = function () {
        return t.classList.remove(at.state.focus);
      };
    (this.isRtl = Tr(t).direction === 'rtl'),
      this.isRtl === !0 && t.classList.add(at.rtl),
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
      (this.scrollbarXRail = ea(at.element.rail('x'))),
      t.appendChild(this.scrollbarXRail),
      (this.scrollbarX = ea(at.element.thumb('x'))),
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
          (this.scrollbarXTop = Ke(a.top)))
        : (this.isScrollbarXUsingBottom = !0),
      (this.railBorderXWidth = Ke(a.borderLeftWidth) + Ke(a.borderRightWidth)),
      Bt(this.scrollbarXRail, { display: 'block' }),
      (this.railXMarginWidth = Ke(a.marginLeft) + Ke(a.marginRight)),
      Bt(this.scrollbarXRail, { display: '' }),
      (this.railXWidth = null),
      (this.railXRatio = null),
      (this.scrollbarYRail = ea(at.element.rail('y'))),
      t.appendChild(this.scrollbarYRail),
      (this.scrollbarY = ea(at.element.thumb('y'))),
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
          (this.scrollbarYLeft = Ke(l.left)))
        : (this.isScrollbarYUsingRight = !0),
      (this.scrollbarYOuterWidth = this.isRtl ? XD(this.scrollbarY) : null),
      (this.railBorderYWidth = Ke(l.borderTopWidth) + Ke(l.borderBottomWidth)),
      Bt(this.scrollbarYRail, { display: 'block' }),
      (this.railYMarginHeight = Ke(l.marginTop) + Ke(l.marginBottom)),
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
        return o_[c](n);
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
      Ke(Tr(this.scrollbarXRail).marginLeft) +
      Ke(Tr(this.scrollbarXRail).marginRight)),
    (this.railYMarginHeight =
      Ke(Tr(this.scrollbarYRail).marginTop) +
      Ke(Tr(this.scrollbarYRail).marginBottom)),
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
const i_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ks },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  s_ = Dr(i_);
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
    a = s_,
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
              var P = g._handlerByEvent[y];
              P && g._container.removeEventListener(y, P, !1);
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
            Object.keys(p).forEach(function (P) {
              var S = g.props[p[P]],
                E = y[p[P]];
              if (S !== E) {
                if (E) {
                  var T = g._handlerByEvent[P];
                  g._container.removeEventListener(P, T, !1),
                    (g._handlerByEvent[P] = null);
                }
                if (S) {
                  var R = function () {
                    return S(g._container);
                  };
                  g._container.addEventListener(P, R, !1),
                    (g._handlerByEvent[P] = R);
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
                .filter(function (P) {
                  return P.match(/^ps([-_].+|)$/);
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
            var P = g.component;
            g.onSync;
            var S = g.children,
              E = u(g, [
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
              T = P;
            return i.default.createElement(
              T,
              r({ style: y, ref: this.handleRef }, E),
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
var a_ = Du.exports;
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = a_,
    n = o(r);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  (t.default = n.default), (e.exports = t.default);
})(Au, Au.exports);
var l_ = Au.exports;
const qb = Yg(l_),
  mm = { '& .MuiCardHeader-action': { mr: 0 } },
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
      C.jsxs(Ya, {
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
          !s && u && C.jsx(Xa, { sx: mm, title: u, action: a }),
          s &&
            u &&
            C.jsx(Xa, {
              sx: mm,
              title: C.jsx(Se, { variant: 'h3', children: u }),
              action: a
            }),
          u && C.jsx(Fo, {}),
          n && C.jsx(Tb, { sx: i, className: o, children: r }),
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
const c_ = '/assets/ELogo-Bf5vj95-.png',
  u_ = (e) => {
    const t = ht(),
      r = dn((v) => v.customization),
      n = gs();
    console.log(e);
    const [o, i] = w.useState(-1),
      [s, a] = w.useState(!1),
      { user: l, setUser: c } = pP(),
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
      C.jsxs(C.Fragment, {
        children: [
          C.jsx(Eb, {
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
            icon: C.jsx(nc, {
              src: c_,
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
            label: C.jsx(um, {
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
          C.jsx(t2, {
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
              C.jsx(of, {
                in: s,
                ...v,
                children: C.jsx(ec, {
                  children: C.jsx(mO, {
                    onClickAway: d,
                    children: C.jsxs(Gb, {
                      border: !1,
                      elevation: 16,
                      content: !1,
                      boxShadow: !0,
                      shadow: t.shadows[16],
                      children: [
                        C.jsxs(dt, {
                          sx: { p: 2, pb: 0 },
                          children: [
                            C.jsx(Xh, {
                              children: C.jsxs(Xh, {
                                direction: 'row',
                                spacing: 0.5,
                                alignItems: 'center',
                                children: [
                                  C.jsx(Se, {
                                    variant: 'h4',
                                    children: 'Good Morning,'
                                  }),
                                  C.jsx(Se, {
                                    component: 'span',
                                    variant: 'h4',
                                    sx: { fontWeight: 400 },
                                    children: l.firstName
                                  })
                                ]
                              })
                            }),
                            C.jsx(Fo, {})
                          ]
                        }),
                        C.jsx(qb, {
                          style: {
                            height: '100%',
                            maxHeight: 'calc(100vh - 250px)',
                            overflowX: 'hidden'
                          },
                          children: C.jsx(dt, {
                            sx: { p: 2, pt: 0 },
                            children: C.jsxs(nf, {
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
                                C.jsxs(ss, {
                                  sx: { borderRadius: `${r.borderRadius}px` },
                                  selected: o === 0,
                                  onClick: (x) => m(x, 0, '#'),
                                  children: [
                                    C.jsx(Qa, {
                                      children: C.jsx(um, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    C.jsx(Za, {
                                      primary: C.jsx(Se, {
                                        variant: 'body2',
                                        children: 'Account Settings'
                                      })
                                    })
                                  ]
                                }),
                                C.jsxs(ss, {
                                  sx: { borderRadius: `${r.borderRadius}px` },
                                  selected: o === 4,
                                  onClick: f,
                                  children: [
                                    C.jsx(Qa, {
                                      children: C.jsx(zD, {
                                        stroke: 1.5,
                                        size: '1.3rem'
                                      })
                                    }),
                                    C.jsx(Za, {
                                      primary: C.jsx(Se, {
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
    const t = ht();
    return C.jsxs(C.Fragment, {
      children: [
        C.jsxs(dt, {
          sx: {
            width: 228,
            display: 'flex',
            [t.breakpoints.down('md')]: { width: 'auto' }
          },
          children: [
            C.jsx(dt, {
              component: 'span',
              sx: { display: { xs: 'none', md: 'block' }, flexGrow: 1 },
              children: C.jsx(Db, {})
            }),
            C.jsx(Lo, {
              sx: { borderRadius: '8px', overflow: 'hidden' },
              children: C.jsx(nc, {
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
                children: C.jsx(UD, { stroke: 1.5, size: '1.3rem' })
              })
            })
          ]
        }),
        C.jsx(dt, { sx: { flexGrow: 1 } }),
        C.jsx(dt, { sx: { flexGrow: 1 } }),
        C.jsx(u_, {})
      ]
    });
  };
Kb.propTypes = { handleLeftDrawerToggle: W.func };
var G = {},
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
      P = 'smarttv',
      S = 'wearable',
      E = 'embedded',
      T = 500,
      R = 'Amazon',
      k = 'Apple',
      I = 'ASUS',
      _ = 'BlackBerry',
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
      Ie = 'Zebra',
      Re = 'Facebook',
      Ae = 'Chromium OS',
      mt = 'Mac OS',
      jt = function (ne, be) {
        var ee = {};
        for (var he in ne)
          be[he] && be[he].length % 2 === 0
            ? (ee[he] = be[he].concat(ne[he]))
            : (ee[he] = ne[he]);
        return ee;
      },
      Ne = function (ne) {
        for (var be = {}, ee = 0; ee < ne.length; ee++)
          be[ne[ee].toUpperCase()] = ne[ee];
        return be;
      },
      et = function (ne, be) {
        return typeof ne === u ? gt(be).indexOf(gt(ne)) !== -1 : !1;
      },
      gt = function (ne) {
        return ne.toLowerCase();
      },
      wn = function (ne) {
        return typeof ne === u ? ne.replace(/[^\d\.]/g, i).split('.')[0] : n;
      },
      Pt = function (ne, be) {
        if (typeof ne === u)
          return (
            (ne = ne.replace(/^\s\s*/, i)),
            typeof be === l ? ne : ne.substring(0, T)
          );
      },
      ir = function (ne, be) {
        for (var ee = 0, he, K, Ct, xe, oe, ot; ee < be.length && !oe; ) {
          var Qn = be[ee],
            ri = be[ee + 1];
          for (he = K = 0; he < Qn.length && !oe && Qn[he]; )
            if (((oe = Qn[he++].exec(ne)), oe))
              for (Ct = 0; Ct < ri.length; Ct++)
                (ot = oe[++K]),
                  (xe = ri[Ct]),
                  typeof xe === c && xe.length > 0
                    ? xe.length === 2
                      ? typeof xe[1] == a
                        ? (this[xe[0]] = xe[1].call(this, ot))
                        : (this[xe[0]] = xe[1])
                      : xe.length === 3
                        ? typeof xe[1] === a && !(xe[1].exec && xe[1].test)
                          ? (this[xe[0]] = ot ? xe[1].call(this, ot, xe[2]) : n)
                          : (this[xe[0]] = ot ? ot.replace(xe[1], xe[2]) : n)
                        : xe.length === 4 &&
                          (this[xe[0]] = ot
                            ? xe[3].call(this, ot.replace(xe[1], xe[2]))
                            : n)
                    : (this[xe] = ot || n);
          ee += 2;
        }
      },
      _r = function (ne, be) {
        for (var ee in be)
          if (typeof be[ee] === c && be[ee].length > 0) {
            for (var he = 0; he < be[ee].length; he++)
              if (et(be[ee][he], ne)) return ee === s ? n : ee;
          } else if (et(be[ee], ne)) return ee === s ? n : ee;
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
          [m, [v, _r, Yr]],
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
          [[x, gt]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[x, 'ia32']],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[x, 'arm64']],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[x, 'armhf']],
          [/windows (ce|mobile); ppc;/i],
          [[x, 'arm']],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[x, /ower/, i, gt]],
          [/(sun4\w)[;\)]/i],
          [[x, 'sparc']],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          ],
          [[x, gt]]
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
          [d, [h, _], [p, g]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [d, [h, I], [p, y]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [d, [h, I], [p, g]],
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
          [d, [h, Ie], [p, y]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [d, [h, Ie], [p, g]],
          [/smart-tv.+(samsung)/i],
          [h, [p, P]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [d, /^/, 'SmartTV'],
            [h, ae],
            [p, P]
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [h, z],
            [p, P]
          ],
          [/(apple) ?tv/i],
          [h, [d, k + ' TV'], [p, P]],
          [/crkey/i],
          [
            [d, D + 'cast'],
            [h, j],
            [p, P]
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [d, [h, R], [p, P]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [d, [h, ve], [p, P]],
          [/(bravia[\w ]+)( bui|\))/i],
          [d, [h, ye], [p, P]],
          [/(mitv-\w{5}) bui/i],
          [d, [h, Y], [p, P]],
          [/Hbbtv.*(technisat) (.*);/i],
          [h, d, [p, P]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          ],
          [
            [h, Pt],
            [d, Pt],
            [p, P]
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[p, P]],
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
          [d, [h, Ie], [p, S]],
          [/(quest( \d| pro)?)/i],
          [d, [h, Re], [p, S]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [h, [p, E]],
          [/(aeobc)\b/i],
          [d, [h, R], [p, E]],
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
          [m, [v, _r, Et]],
          [
            /windows nt 6\.2; (arm)/i,
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [
            [v, _r, Et],
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
            [m, mt],
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
          [v, [m, _]],
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
          [[m, Ae], v],
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
      ut = function (ne, be) {
        if ((typeof ne === c && ((be = ne), (ne = n)), !(this instanceof ut)))
          return new ut(ne, be).getResult();
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
                  .replace(/chrome os/i, Ae)
                  .replace(/macos/i, mt)),
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
              (he = typeof oe === u && oe.length > T ? Pt(oe, T) : oe), this
            );
          }),
          this.setUA(he),
          this
        );
      };
    (ut.VERSION = o),
      (ut.BROWSER = Ne([m, v, f])),
      (ut.CPU = Ne([x])),
      (ut.DEVICE = Ne([d, h, p, b, g, P, y, S, E])),
      (ut.ENGINE = ut.OS = Ne([m, v])),
      e.exports && (t = e.exports = ut),
      (t.UAParser = ut);
    var Gt = typeof r !== l && (r.jQuery || r.Zepto);
    if (Gt && !Gt.ua) {
      var ct = new ut();
      (Gt.ua = ct.getResult()),
        (Gt.ua.get = function () {
          return ct.getUA();
        }),
        (Gt.ua.set = function (ne) {
          ct.setUA(ne);
          var be = ct.getResult();
          for (var ee in be) Gt.ua[ee] = be[ee];
        });
    }
  })(typeof window == 'object' ? window : Ww);
})(_u, _u.exports);
var d_ = _u.exports;
Object.defineProperty(G, '__esModule', { value: !0 });
function f_(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e;
}
var It = w,
  ze = f_(It),
  Yb = d_,
  yn = new Yb(),
  Dt = yn.getBrowser(),
  p_ = yn.getCPU(),
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
    cpu: p_,
    device: or,
    engine: sf,
    os: bn,
    ua: Ms,
    setUa: Xb,
    parseUserAgent: Os
  });
function gm(e, t) {
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
function h_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gm(Object(r), !0).forEach(function (n) {
          y_(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _i(e) {
  '@babel/helpers - typeof';
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (_i = function (t) {
          return typeof t;
        })
      : (_i = function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        }),
    _i(e)
  );
}
function m_(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function g_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function v_(e, t, r) {
  return t && g_(e.prototype, t), e;
}
function y_(e, t, r) {
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
function b_(e, t) {
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
function x_(e, t) {
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
  var r = x_(e, t),
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
function w_(e, t) {
  if (t && (typeof t == 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return xa(e);
}
function S_(e, t) {
  return P_(e) || E_(e, t) || C_(e, t) || T_();
}
function P_(e) {
  if (Array.isArray(e)) return e;
}
function E_(e, t) {
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
function C_(e, t) {
  if (e) {
    if (typeof e == 'string') return vm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vm(e, t);
  }
}
function vm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function T_() {
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
  R_ = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1
  },
  k_ = function (t) {
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
        return R_;
    }
  },
  M_ = function (t) {
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
  O_ = function (t, r, n, o, i) {
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
  ym = function (t, r, n, o) {
    return h_({}, t, {
      vendor: ce(r.vendor),
      model: ce(r.model),
      os: ce(n.name),
      osVersion: ce(n.version),
      ua: ce(o)
    });
  },
  I_ = function (t, r, n, o) {
    return {
      isSmartTV: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  A_ = function (t, r, n, o) {
    return {
      isConsole: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  D_ = function (t, r, n, o) {
    return {
      isWearable: t,
      engineName: ce(r.name),
      engineVersion: ce(r.version),
      osName: ce(n.name),
      osVersion: ce(n.version),
      userAgent: ce(o)
    };
  },
  __ = function (t, r, n, o, i) {
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
function L_(e) {
  var t = e ? Os(e) : Qb,
    r = t.device,
    n = t.browser,
    o = t.engine,
    i = t.os,
    s = t.ua,
    a = k_(r.type),
    l = a.isBrowser,
    c = a.isMobile,
    u = a.isTablet,
    f = a.isSmartTV,
    d = a.isConsole,
    m = a.isWearable,
    p = a.isEmbedded;
  if (l) return O_(l, n, o, i, s);
  if (f) return I_(f, o, i, s);
  if (d) return A_(d, o, i, s);
  if (c || u) return ym(a, r, i, s);
  if (m) return D_(m, o, i, s);
  if (p) return __(p, r, o, i, s);
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
  P0 = function (t) {
    var r = t.name;
    return r === Ht.MIUI;
  },
  E0 = function (t) {
    var r = t.name;
    return r === Ht.SamsungBrowser;
  },
  C0 = function (t) {
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
  I0 = function () {
    var t = af();
    return (
      t &&
      (/iPad|iPhone|iPod/.test(t.platform) ||
        (t.platform === 'MacIntel' && t.maxTouchPoints > 1)) &&
      !window.MSStream
    );
  },
  Cr = function () {
    return lf('iPad');
  },
  A0 = function () {
    return lf('iPhone');
  },
  D0 = function () {
    return lf('iPod');
  },
  _0 = function (t) {
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
    isMobileSafari: x0(n) || Cr(),
    isChromium: v0(n),
    isMobile: e0(r) || Cr(),
    isMobileOnly: Zb(r),
    isTablet: Jb(r) || Cr(),
    isBrowser: tl(r),
    isDesktop: tl(r),
    isAndroid: l0(o),
    isWinPhone: d0(o),
    isIOS: f0(o) || Cr(),
    isChrome: m0(n),
    isFirefox: g0(n),
    isSafari: b0(n),
    isOpera: w0(n),
    isIE: S0(n),
    osVersion: p0(o),
    osName: h0(o),
    fullBrowserVersion: C0(n),
    browserVersion: T0(n),
    browserName: R0(n),
    mobileVendor: i0(r),
    mobileModel: s0(r),
    engineName: k0(i),
    engineVersion: M0(i),
    getUA: _0(s),
    isEdge: rl(n) || Mo(s),
    isYandex: y0(n),
    deviceType: a0(r),
    isIOS13: I0(),
    isIPad13: Cr(),
    isIPhone13: A0(),
    isIPod13: D0(),
    isElectron: O0(),
    isEdgeChromium: Mo(s),
    isLegacyEdge: rl(n) && !Mo(s),
    isWindows: c0(o),
    isMacOs: u0(o),
    isMIUI: P0(n),
    isSamsungBrowser: E0(n)
  };
}
var $0 = t0(or),
  j0 = n0(or),
  B0 = r0(or),
  $_ = o0(or),
  j_ = x0(Dt) || Cr(),
  B_ = v0(Dt),
  oc = e0(or) || Cr(),
  N0 = Zb(or),
  F0 = Jb(or) || Cr(),
  V0 = tl(or),
  N_ = tl(or),
  W0 = l0(bn),
  z0 = d0(bn),
  U0 = f0(bn) || Cr(),
  F_ = m0(Dt),
  V_ = g0(Dt),
  W_ = b0(Dt),
  z_ = w0(Dt),
  H0 = S0(Dt),
  U_ = p0(bn),
  H_ = h0(bn),
  q_ = C0(Dt),
  G_ = T0(Dt),
  K_ = R0(Dt),
  Y_ = i0(or),
  X_ = s0(or),
  Q_ = k0(sf),
  Z_ = M0(sf),
  J_ = _0(Ms),
  eL = rl(Dt) || Mo(Ms),
  tL = y0(Dt),
  rL = a0(or),
  nL = I0(),
  oL = Cr(),
  iL = A0(),
  sL = D0(),
  aL = O0(),
  lL = Mo(Ms),
  cL = rl(Dt) && !Mo(Ms),
  uL = c0(bn),
  dL = u0(bn),
  fL = P0(Dt),
  pL = E0(Dt),
  hL = function (t) {
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
  mL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return W0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  gL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return V0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  vL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return H0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  yL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return U0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  bL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return oc
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  xL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return F0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  wL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return z0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  SL = function (t) {
    var r = t.renderWithFragment,
      n = t.children;
    t.viewClassName, t.style;
    var o = yr(t, ['renderWithFragment', 'children', 'viewClassName', 'style']);
    return N0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  PL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return $0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  EL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return j0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  CL = function (t) {
    var r = t.renderWithFragment,
      n = t.children,
      o = yr(t, ['renderWithFragment', 'children']);
    return B0
      ? r
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', o, n)
      : null;
  },
  TL = function (t) {
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
        ? ze.createElement(It.Fragment, null, n)
        : ze.createElement('div', i, n)
      : null;
  };
function RL(e) {
  return (function (t) {
    b_(r, t);
    function r(n) {
      var o;
      return (
        m_(this, r),
        (o = w_(this, $u(r).call(this, n))),
        (o.isEventListenerAdded = !1),
        (o.handleOrientationChange = o.handleOrientationChange.bind(xa(o))),
        (o.onOrientationChange = o.onOrientationChange.bind(xa(o))),
        (o.onPageLoad = o.onPageLoad.bind(xa(o))),
        (o.state = { isLandscape: !1, isPortrait: !1 }),
        o
      );
    }
    return (
      v_(r, [
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
            (typeof window > 'u' ? 'undefined' : _i(window)) !== void 0 &&
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
            return ze.createElement(
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
  })(ze.Component);
}
function kL() {
  var e = It.useState(function () {
      var i = window.innerWidth > window.innerHeight ? 90 : 0;
      return {
        isPortrait: i === 0,
        isLandscape: i === 90,
        orientation: i === 0 ? 'portrait' : 'landscape'
      };
    }),
    t = S_(e, 2),
    r = t[0],
    n = t[1],
    o = It.useCallback(
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
    It.useEffect(
      function () {
        return (
          (typeof window > 'u' ? 'undefined' : _i(window)) !== void 0 &&
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
function ML(e) {
  var t = e || window.navigator.userAgent,
    r = q0(t),
    n = L0(r);
  return [n, r];
}
G.AndroidView = mL;
G.BrowserTypes = Ht;
var OL = (G.BrowserView = gL);
G.ConsoleView = EL;
G.CustomView = TL;
G.IEView = vL;
G.IOSView = yL;
G.MobileOnlyView = SL;
var IL = (G.MobileView = bL);
G.OsTypes = ei;
G.SmartTVView = PL;
G.TabletView = xL;
G.WearableView = CL;
G.WinPhoneView = wL;
G.browserName = K_;
G.browserVersion = G_;
G.deviceDetect = L_;
G.deviceType = rL;
G.engineName = Q_;
G.engineVersion = Z_;
G.fullBrowserVersion = q_;
G.getSelectorsByUserAgent = hL;
G.getUA = J_;
G.isAndroid = W0;
G.isBrowser = V0;
G.isChrome = F_;
G.isChromium = B_;
G.isConsole = j0;
G.isDesktop = N_;
G.isEdge = eL;
G.isEdgeChromium = lL;
G.isElectron = aL;
G.isEmbedded = $_;
G.isFirefox = V_;
G.isIE = H0;
G.isIOS = U0;
G.isIOS13 = nL;
G.isIPad13 = oL;
G.isIPhone13 = iL;
G.isIPod13 = sL;
G.isLegacyEdge = cL;
G.isMIUI = fL;
G.isMacOs = dL;
G.isMobile = oc;
G.isMobileOnly = N0;
G.isMobileSafari = j_;
G.isOpera = z_;
G.isSafari = W_;
G.isSamsungBrowser = pL;
G.isSmartTV = $0;
G.isTablet = F0;
G.isWearable = B0;
G.isWinPhone = z0;
G.isWindows = uL;
G.isYandex = tL;
G.mobileModel = X_;
G.mobileVendor = Y_;
G.osName = H_;
G.osVersion = U_;
G.parseUserAgent = Os;
G.setUserAgent = M_;
G.useDeviceData = q0;
G.useDeviceSelectors = ML;
G.useMobileOrientation = kL;
G.withOrientationChange = RL;
var $c = {};
const AL = Dr(pM);
var bm;
function Is() {
  return (
    bm ||
      ((bm = 1),
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
      })($c)),
    $c
  );
}
var cf = {},
  DL = Kn;
Object.defineProperty(cf, '__esModule', { value: !0 });
var Bu = (cf.default = void 0),
  _L = DL(Is()),
  LL = C;
Bu = cf.default = (0, _L.default)(
  (0, LL.jsx)('path', { d: 'm7 10 5 5 5-5z' }),
  'ArrowDropDownOutlined'
);
var uf = {},
  $L = Kn;
Object.defineProperty(uf, '__esModule', { value: !0 });
var df = (uf.default = void 0),
  jL = $L(Is()),
  BL = C;
df = uf.default = (0, jL.default)(
  (0, BL.jsx)('circle', { cx: '12', cy: '12', r: '8' }),
  'FiberManualRecord'
);
const ff = ({ item: e, level: t }) => {
  const r = ht(),
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
    w.forwardRef((c, u) => C.jsx(_n, { ref: u, ...c, to: e.url, target: a })),
    e != null && e.external && e.url;
  const l = (c) => {
    n({ type: ja, id: c }), s && n({ type: vd, opened: !1 });
  };
  return (
    w.useEffect(() => {
      o.includes(e.url) && n({ type: ja, id: e.id });
    }, [o, e.id, e.url, n]),
    C.jsxs(ss, {
      component: w.forwardRef((c, u) => C.jsx(_n, { ref: u, ...c, to: e.url })),
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
          C.jsx(Qa, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18, fontSize: 'large' },
            children: C.jsx('i', { class: e.icon })
          }),
        C.jsx(Za, {
          primary: C.jsx(Se, {
            variant:
              i.isOpen.findIndex((c) => c === e.id) > -1 ? 'h5' : 'body1',
            color: 'inherit',
            children: e.title
          }),
          secondary:
            e.caption &&
            C.jsx(Se, {
              variant: 'caption',
              sx: { ...r.typography.subMenuCaption },
              display: 'block',
              gutterBottom: !0,
              children: e.caption
            })
        }),
        e.chip &&
          C.jsx(Eb, {
            color: e.chip.color,
            variant: e.chip.variant,
            size: e.chip.size,
            label: e.chip.label,
            avatar: e.chip.avatar && C.jsx(nc, { children: e.chip.avatar })
          })
      ]
    })
  );
};
ff.propTypes = { item: W.object.isRequired, level: W.number.isRequired };
const pf = ({ menu: e, level: t }) => {
  var p;
  const r = ht(),
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
                return C.jsx(pf, { menu: h, level: t + 1 }, h.id);
              case 'item':
                return C.jsx(ff, { item: h, level: t + 1 }, h.id);
              default:
                return C.jsx(
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
      ? C.jsx(d, {
          strokeWidth: 1.5,
          size: '1.3rem',
          style: { marginTop: 'auto', marginBottom: 'auto' }
        })
      : C.jsx(df, {
          sx: { width: s === e.id ? 8 : 6, height: s === e.id ? 8 : 6 },
          fontSize: t > 0 ? 'inherit' : 'medium'
        });
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs(ss, {
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
          C.jsx(Qa, {
            sx: { my: 'auto', minWidth: e.icon ? 36 : 18 },
            children: m
          }),
          C.jsx(Za, {
            primary: C.jsx(Se, {
              variant: s === e.id ? 'h5' : 'body1',
              color: 'inherit',
              sx: { my: 'auto' },
              children: e.title
            }),
            secondary:
              e.caption &&
              C.jsx(Se, {
                variant: 'caption',
                sx: { ...r.typography.subMenuCaption },
                display: 'block',
                gutterBottom: !0,
                children: e.caption
              })
          }),
          o
            ? C.jsx(ND, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
            : C.jsx(BD, {
                stroke: 1.5,
                size: 'small',
                style: { marginTop: 'auto', marginBottom: 'auto' }
              })
        ]
      }),
      C.jsx(Jl, {
        in: o,
        timeout: 'auto',
        unmountOnExit: !0,
        children: C.jsx(nf, {
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
  ht();
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
                return C.jsx(pf, { menu: l, level: 1 }, l.id);
              case 'item':
                return C.jsx(ff, { item: l, level: 1 }, l.id);
              default:
                return C.jsx(
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
  return C.jsx(C.Fragment, {
    children: C.jsxs(nf, {
      children: [
        ((s = e.children) == null ? void 0 : s.length) > 0 &&
          C.jsxs(ss, {
            onClick: n,
            children: [
              C.jsx(Se, { variant: 'body1', children: e.title }),
              t
                ? C.jsx(Bu, { fontSize: 'small' })
                : C.jsx(Bu, { fontSize: 'small' })
            ]
          }),
        ((a = e.children) == null ? void 0 : a.length) === 0 && o,
        ' ',
        t &&
          C.jsx(Jl, { in: t, timeout: 'auto', unmountOnExit: !0, children: o })
      ]
    })
  });
};
G0.propTypes = { item: W.object };
const NL = { IconDashboard: FD },
  FL = {
    id: 'dashboard',
    type: 'group',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: NL.IconDashboard,
        breadcrumbs: !1
      }
    ]
  },
  VL = { IconKey: WD },
  WL = {
    id: 'pages',
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: VL.IconKey,
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
  zL = { IconBrandChrome: jD, IconHelp: VD },
  UL = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: zL.IconBrandChrome,
        breadcrumbs: !1
      }
    ]
  },
  HL = {
    IconTypography: Fb,
    IconPalette: Bb,
    IconShadow: Nb,
    IconWindmill: Vb
  },
  qL = {
    id: 'planning',
    caption: 'Start a New Process',
    type: 'group',
    children: [
      {
        title: 'Planning',
        type: 'collapse',
        icon: HL.IconKey,
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
  GL = {
    IconTypography: Fb,
    IconPalette: Bb,
    IconShadow: Nb,
    IconWindmill: Vb
  },
  KL = {
    id: 'Production',
    caption: 'Start a New Process',
    type: 'group',
    children: [
      {
        title: 'Production',
        type: 'collapse',
        icon: GL.IconKey,
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
  jc = { items: [FL, qL, KL, UL, WL] },
  YL = async (e, t) => {
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
  xm = ({ empId: e, token: t }) => {
    const [r, n] = w.useState([]),
      [o, i] = w.useState(!0),
      [s, a] = w.useState(null),
      l = gs();
    if (
      (w.useEffect(() => {
        (async () => {
          try {
            const f = await YL(e, t);
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
      return C.jsx(Se, {
        variant: 'h6',
        align: 'center',
        children: 'Loading...'
      });
    if (s)
      return C.jsx(Se, {
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
      return C.jsx(G0, { item: d }, d.id);
    });
    return C.jsx(C.Fragment, { children: c });
  },
  m4 = 3,
  bo = 260,
  K0 = ({ drawerOpen: e, drawerToggle: t, window: r, empId: n, token: o }) => {
    const i = ht(),
      s = es(i.breakpoints.up('md'));
    console.log(o);
    const a = C.jsxs(C.Fragment, {
        children: [
          C.jsx(dt, {
            sx: { display: { xs: 'block', md: 'none' } },
            children: C.jsx(Db, {})
          }),
          C.jsx(OL, {
            children: C.jsx(qb, {
              component: 'div',
              style: {
                height: s ? 'calc(100vh - 88px)' : 'calc(100vh - 56px)',
                paddingLeft: '16px',
                paddingRight: '16px'
              },
              children: C.jsx(xm, { empId: n, token: o })
            })
          }),
          C.jsx(IL, {
            children: C.jsx(dt, {
              sx: { px: 2 },
              children: C.jsx(xm, { empId: n, token: o })
            })
          })
        ]
      }),
      l = r !== void 0 ? () => r.document.body : void 0;
    return C.jsx(dt, {
      component: 'nav',
      sx: {
        backgroundImage:
          'url("https://cdn11.bigcommerce.com/s-hv21hhsv/images/stencil/700x700/products/38611/284805/2e6462c221260668bf7516fe2121ad54__84353.1704082180.jpg?c=2")',
        backgroundSize: 'contain',
        flexShrink: { md: 0 },
        width: s ? bo : 'auto'
      },
      'aria-label': 'mailbox folders',
      children: C.jsx(CA, {
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
  XL = Kn;
Object.defineProperty(hf, '__esModule', { value: !0 });
var wa = (hf.default = void 0),
  QL = XL(Is()),
  wm = C;
wa = hf.default = (0, QL.default)(
  [
    (0, wm.jsx)(
      'path',
      {
        d: 'M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z'
      },
      '0'
    ),
    (0, wm.jsx)(
      'path',
      { d: 'M7 5v4H4V5zm13 0v4h-3V5zm0 10v4h-3v-4z', opacity: '.3' },
      '1'
    )
  ],
  'AccountTreeTwoTone'
);
var mf = {},
  ZL = Kn;
Object.defineProperty(mf, '__esModule', { value: !0 });
var Nu = (mf.default = void 0),
  JL = ZL(Is()),
  e$ = C;
Nu = mf.default = (0, JL.default)(
  (0, e$.jsx)('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }),
  'Home'
);
var gf = {},
  t$ = Kn;
Object.defineProperty(gf, '__esModule', { value: !0 });
var Fu = (gf.default = void 0),
  r$ = t$(Is()),
  Sm = C;
Fu = gf.default = (0, r$.default)(
  [
    (0, Sm.jsx)(
      'path',
      {
        d: 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5z'
      },
      '0'
    ),
    (0, Sm.jsx)(
      'path',
      { d: 'M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z', opacity: '.3' },
      '1'
    )
  ],
  'HomeTwoTone'
);
const Ei = ({ title: e }) =>
  C.jsx(Pi, {
    item: !0,
    children: C.jsx(Se, { variant: 'h3', sx: { fontWeight: 500 }, children: e })
  });
Ei.propTypes = { title: W.oneOfType([W.string, W.object]) };
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
  const p = ht(),
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
    P = {
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
            (j != null && j.url && j.url === S ? (x(j), g(j)) : E(j)),
          !1
        )
      );
  });
  const E = (B) => {
      !t &&
        B.children &&
        B.children.filter(
          (j) => (
            j.type && j.type === 'collapse'
              ? (E(j), j.url === S && (x(j), g(j)))
              : j.type && j.type === 'item' && S === j.url && (x(B), g(j)),
            !1
          )
        );
    },
    T = c,
    R = c
      ? C.jsx(T, { stroke: 1.5, size: '16px' })
      : C.jsx(HD, { stroke: 1.5, size: '16px' });
  let k,
    I,
    _ = C.jsx(Se, {}),
    L = '',
    D,
    N;
  if (
    (v &&
      v.type === 'collapse' &&
      ((D = v.icon ? v.icon : wa),
      (k = C.jsxs(Se, {
        ...(v.url && { component: _n, to: v.url }),
        variant: 'subtitle1',
        sx: P,
        color:
          window.location.pathname === v.url
            ? 'text.primary'
            : 'text.secondary',
        children: [i && C.jsx(D, { style: y }), v.title]
      }))),
    !t &&
      v &&
      v.type === 'collapse' &&
      v.breadcrumbs === !0 &&
      (_ = C.jsxs(Ya, {
        sx:
          e === !1
            ? { mb: 3, bgcolor: 'transparent', ...d }
            : { mb: 3, bgcolor: 'background.default', ...d },
        ...m,
        children: [
          C.jsx(dt, {
            sx: { p: 2, pl: e === !1 ? 0 : 2 },
            children: C.jsxs(Pi, {
              container: !0,
              direction: l ? 'row' : 'column',
              justifyContent: l ? 'space-between' : 'flex-start',
              alignItems: l ? 'center' : 'flex-start',
              spacing: 1,
              children: [
                u && !f && C.jsx(Ei, { title: v.title }),
                C.jsx(Pi, {
                  item: !0,
                  children: C.jsxs(_c, {
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
                      C.jsxs(Se, {
                        component: _n,
                        to: '/',
                        color: 'textSecondary',
                        variant: 'subtitle1',
                        sx: P,
                        children: [
                          i && C.jsx(Fu, { style: y }),
                          o &&
                            !i &&
                            C.jsx(Nu, { style: { ...y, marginRight: 0 } }),
                          (!o || i) && 'Dashboard'
                        ]
                      }),
                      k
                    ]
                  })
                }),
                u && f && C.jsx(Ei, { title: v.title })
              ]
            })
          }),
          e === !1 && r !== !1 && C.jsx(Fo, { sx: { mt: 2 } })
        ]
      })),
    (b && b.type === 'item') ||
      ((b == null ? void 0 : b.type) === 'group' && b != null && b.url) ||
      t)
  ) {
    (L = b == null ? void 0 : b.title),
      (N = b != null && b.icon ? b.icon : wa),
      (I = C.jsxs(Se, {
        variant: 'subtitle1',
        sx: { ...P, color: 'text.secondary' },
        children: [i && C.jsx(N, { style: y }), L]
      }));
    let B = C.jsxs(_c, {
      'aria-label': 'breadcrumb',
      maxItems: a || 8,
      separator: R,
      sx: { '& .MuiBreadcrumbs-separator': { width: 16, ml: 1.25, mr: 1.25 } },
      children: [
        C.jsxs(Se, {
          component: _n,
          to: '/',
          color: 'textSecondary',
          variant: 'subtitle1',
          sx: P,
          children: [
            i && C.jsx(Fu, { style: y }),
            o && !i && C.jsx(Nu, { style: { ...y, marginRight: 0 } }),
            (!o || i) && 'Dashboard'
          ]
        }),
        k,
        I
      ]
    });
    t &&
      s &&
      (s == null ? void 0 : s.length) > 0 &&
      (B = C.jsx(_c, {
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
                  C.jsxs(
                    Se,
                    {
                      ...(j.to && { component: _n, to: j.to }),
                      variant: 'subtitle1',
                      sx: P,
                      color: j.to ? 'text.secondary' : 'text.primary',
                      children: [j.icon && C.jsx(D, { style: y }), j.title]
                    },
                    F
                  )
                )
              )
      })),
      ((b == null ? void 0 : b.breadcrumbs) !== !1 || t) &&
        (_ = C.jsxs(Ya, {
          sx:
            e === !1
              ? { mb: 3, bgcolor: 'transparent', ...d }
              : { mb: 3, bgcolor: 'background.default', ...d },
          ...m,
          children: [
            C.jsx(dt, {
              sx: { p: 2, pl: e === !1 ? 0 : 2 },
              children: C.jsxs(Pi, {
                container: !0,
                direction: l ? 'row' : 'column',
                justifyContent: l ? 'space-between' : 'flex-start',
                alignItems: l ? 'center' : 'flex-start',
                spacing: 1,
                children: [
                  u &&
                    !f &&
                    C.jsx(Ei, { title: t ? n : b == null ? void 0 : b.title }),
                  C.jsx(Pi, { item: !0, children: B }),
                  u &&
                    f &&
                    C.jsx(Ei, { title: t ? n : b == null ? void 0 : b.title })
                ]
              })
            }),
            e === !1 && r !== !1 && C.jsx(Fo, { sx: { mt: 2 } })
          ]
        }));
  }
  return _;
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
const n$ = le('main', {
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
  o$ = () => {
    const e = localStorage.getItem('empId'),
      t = ht(),
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
      C.jsxs(dt, {
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
          C.jsx(Rb, {}),
          C.jsx(uO, {
            className: '.css-h4y409-MuiList-root ',
            position: 'absolute',
            color: 'transparent',
            elevation: 0,
            sx: {
              bgcolor: t.palette.background.error,
              transition: n ? t.transitions.create('width') : 'none'
            },
            children: C.jsx(SD, {
              children: C.jsx(Kb, { handleLeftDrawerToggle: i })
            })
          }),
          C.jsx(K0, {
            drawerOpen: r ? !n : n,
            drawerToggle: i,
            empId: e,
            token: s
          }),
          C.jsxs(n$, {
            theme: t,
            open: n,
            children: [
              C.jsx(Y0, {
                separator: jb,
                navigation,
                icon: !0,
                title: !0,
                rightAlign: !0
              }),
              C.jsx(Kv, {})
            ]
          })
        ]
      })
    );
  },
  i$ = () =>
    C.jsx(dt, {
      sx: { position: 'fixed', top: 0, left: 0, zIndex: 1301, width: '100%' },
      children: C.jsx(QA, { color: 'primary' })
    }),
  Be = (e) => (t) =>
    C.jsx(w.Suspense, {
      fallback: C.jsx(i$, {}),
      children: C.jsx(e, { ...t })
    }),
  s$ = () => !!localStorage.getItem('authToken'),
  Ve = ({ element: e, ...t }) =>
    s$() ? C.jsx(e, { ...t }) : C.jsx(EE, { to: '/' }),
  a$ = Be(
    w.lazy(() =>
      je(() => import('./index-Vm8B-lbi.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    )
  ),
  l$ = Be(
    w.lazy(() =>
      je(
        () => import('./NewCollection-CAXCeX1E.js'),
        __vite__mapDeps([5, 1, 6, 3, 7, 8, 9, 4, 2, 10, 11, 12])
      )
    )
  ),
  c$ = Be(
    w.lazy(() =>
      je(
        () => import('./NewDesign-CxyMp35_.js'),
        __vite__mapDeps([13, 1, 6, 3, 7, 11, 8, 9, 4, 2, 10, 12])
      )
    )
  ),
  u$ = Be(
    w.lazy(() =>
      je(
        () => import('./PlanningProcess-7356rjQz.js'),
        __vite__mapDeps([14, 1, 6, 3, 15, 9, 4, 2, 10, 16, 17, 18, 8])
      )
    )
  ),
  d$ = Be(
    w.lazy(() =>
      je(
        () => import('./Roles-D7V6_sBo.js'),
        __vite__mapDeps([19, 1, 6, 3, 10, 9, 4, 2])
      )
    )
  ),
  f$ = Be(w.lazy(() => je(() => Promise.resolve().then(() => DV), void 0))),
  p$ = Be(
    w.lazy(() =>
      je(
        () => import('./MainMenu-BNllsTsz.js'),
        __vite__mapDeps([20, 1, 6, 3, 10, 9, 4, 2, 21, 19, 22, 16, 17, 12])
      )
    )
  ),
  h$ = Be(
    w.lazy(() =>
      je(
        () => import('./SubMenu-Cjdn0Arr.js'),
        __vite__mapDeps([21, 1, 6, 3, 10, 9, 4, 2])
      )
    )
  ),
  m$ = Be(
    w.lazy(() =>
      je(
        () => import('./Users-SGps0aUI.js'),
        __vite__mapDeps([22, 1, 6, 3, 16, 10, 9, 4, 2, 17])
      )
    )
  ),
  g$ = Be(
    w.lazy(() =>
      je(
        () => import('./PrePlanningCreation-Bn-kg2zU.js'),
        __vite__mapDeps([23, 1, 6, 3, 8, 9, 4, 2, 7, 12])
      )
    )
  ),
  Pm = Be(
    w.lazy(() =>
      je(
        () => import('./TermsandConditions-DeUR5-68.js'),
        __vite__mapDeps([24, 1, 6, 3, 25, 26, 27, 10, 9, 4, 2, 12])
      )
    )
  ),
  v$ = Be(
    w.lazy(() =>
      je(
        () => import('./ProductionBatch-B1mE3M7j.js'),
        __vite__mapDeps([28, 1, 6, 3, 25, 9, 4, 2, 10, 18, 16, 12])
      )
    )
  ),
  y$ = Be(
    w.lazy(() =>
      je(
        () => import('./FabricationSelectionIssuance-CN3U16pF.js'),
        __vite__mapDeps([29, 1, 6, 3, 25, 26, 9, 4, 2, 16, 18, 10, 30, 12])
      )
    )
  ),
  b$ = Be(
    w.lazy(() =>
      je(
        () => import('./Inspection-BQvqMIZZ.js'),
        __vite__mapDeps([31, 1, 26, 27, 16, 32, 9, 6, 3, 4, 2, 18, 30, 33, 12])
      )
    )
  ),
  x$ = Be(
    w.lazy(() =>
      je(
        () => import('./GRN-B1q2G28p.js'),
        __vite__mapDeps([34, 1, 26, 27, 32, 9, 6, 3, 4, 2, 16, 33, 18, 12])
      )
    )
  ),
  w$ = Be(
    w.lazy(() =>
      je(
        () => import('./ReceivingFromBX-B_m8Ocbf.js'),
        __vite__mapDeps([35, 1, 6, 3, 10, 9, 4, 2, 16])
      )
    )
  ),
  S$ = Be(
    w.lazy(() =>
      je(
        () => import('./Receiving-BnSDDwxH.js'),
        __vite__mapDeps([36, 1, 26, 27, 6, 3, 16, 32, 9, 4, 2, 33, 18, 12])
      )
    )
  ),
  P$ = Be(
    w.lazy(() =>
      je(
        () => import('./Issuance-CoUd143h.js'),
        __vite__mapDeps([37, 1, 26, 27, 6, 3, 16, 18, 33, 4, 10, 9, 2, 38, 12])
      )
    )
  ),
  E$ = Be(
    w.lazy(() =>
      je(
        () => import('./RTV-C74wod1S.js'),
        __vite__mapDeps([39, 1, 26, 27, 32, 9, 6, 3, 4, 2, 16, 18, 38, 12])
      )
    )
  ),
  C$ = Be(
    w.lazy(() =>
      je(
        () => import('./ProductionReceiving-DVvc4rbh.js'),
        __vite__mapDeps([40, 1])
      )
    )
  ),
  T$ = Be(
    w.lazy(() =>
      je(
        () => import('./ShrinkageWastageConfiguration-BQe9zBMk.js'),
        __vite__mapDeps([41, 1, 6, 3, 10, 9, 4, 2])
      )
    )
  ),
  R$ = Be(
    w.lazy(() =>
      je(
        () => import('./POGeneration-BfOWOVEY.js'),
        __vite__mapDeps([42, 1, 25, 27, 9, 6, 3, 4, 2, 16, 33, 18, 10, 30, 12])
      )
    )
  ),
  k$ = Be(
    w.lazy(() =>
      je(() => import('./Reports-CL7Yzt2u.js'), __vite__mapDeps([33, 1, 3, 4]))
    )
  ),
  M$ = Be(
    w.lazy(() =>
      je(
        () => import('./index-CPcRkg-t.js'),
        __vite__mapDeps([43, 1, 15, 6, 3, 9, 4, 2, 10])
      )
    )
  ),
  O$ = Be(
    w.lazy(() =>
      je(() => import('./WelcomePage-JS92WGV3.js'), __vite__mapDeps([44, 1]))
    )
  ),
  I$ = {
    path: '/',
    element: C.jsx(o$, {}),
    children: [
      { path: 'dashboard', element: C.jsx(Ve, { element: a$ }) },
      {
        path: 'UserManagement',
        children: [
          { path: 'Role', element: C.jsx(Ve, { element: d$ }) },
          { path: 'Application', element: C.jsx(Ve, { element: f$ }) },
          { path: 'MainMenu', element: C.jsx(Ve, { element: p$ }) },
          { path: 'SubMenu', element: C.jsx(Ve, { element: h$ }) },
          { path: 'Users', element: C.jsx(Ve, { element: m$ }) }
        ]
      },
      {
        path: 'Planning',
        children: [
          { path: 'NewCollection', element: C.jsx(Ve, { element: l$ }) },
          { path: 'NewDesign', element: C.jsx(Ve, { element: c$ }) },
          { path: 'PlanningProcess', element: C.jsx(Ve, { element: u$ }) },
          { path: 'PrePlanningCreation', element: C.jsx(Ve, { element: g$ }) }
        ]
      },
      {
        path: 'Production',
        children: [
          { path: 'ProductionBatch', element: C.jsx(Ve, { element: v$ }) },
          { path: 'ReceivingFromBX', element: C.jsx(Ve, { element: w$ }) },
          { path: 'Receiving', element: C.jsx(Ve, { element: S$ }) },
          {
            path: 'FabricationSelectionIssuance',
            element: C.jsx(Ve, { element: y$ })
          },
          { path: 'Issuance', element: C.jsx(Ve, { element: P$ }) },
          { path: 'ProductionReceiving', element: C.jsx(Ve, { element: C$ }) },
          { path: 'POGeneration', element: C.jsx(Ve, { element: R$ }) },
          { path: 'Inspection', element: C.jsx(Ve, { element: b$ }) },
          { path: 'GRN', element: C.jsx(Ve, { element: x$ }) },
          { path: 'RTV', element: C.jsx(Ve, { element: E$ }) }
        ]
      },
      {
        path: 'Configuration',
        children: [
          {
            path: 'ShrinkageWastageConfiguration',
            element: C.jsx(Ve, { element: T$ })
          },
          { path: 'TermsandConditions', element: C.jsx(Ve, { element: Pm }) }
        ]
      },
      {
        path: 'DetailedReports',
        children: [
          { path: 'Reports', element: C.jsx(Ve, { element: k$ }) },
          { path: 'TermsandConditions', element: C.jsx(Ve, { element: Pm }) }
        ]
      },
      { path: 'sample-page', element: C.jsx(Ve, { element: M$ }) },
      { path: 'welcome', element: C.jsx(Ve, { element: O$ }) }
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
      C.jsxs(Ya, {
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
            C.jsx(Xa, {
              sx: { p: 2.5 },
              title: C.jsx(Se, { variant: 'h5', children: a }),
              action: o
            }),
          n &&
            a &&
            C.jsx(Xa, {
              sx: { p: 2.5 },
              title: C.jsx(Se, { variant: 'h4', children: a }),
              action: o
            }),
          a && C.jsx(Fo, {}),
          t &&
            C.jsx(Tb, {
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
  A$ = yf ? w.useLayoutEffect : w.useEffect,
  Z0 = w.createContext({ strict: !1 }),
  bf = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  D$ = 'framerAppearId',
  J0 = 'data-' + bf(D$),
  _$ = { skipAnimations: !1, useManualTiming: !1 };
class Em {
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
function L$(e) {
  let t = new Em(),
    r = new Em(),
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
  $$ = 40;
function ex(e, t) {
  let r = !1,
    n = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ra.reduce((f, d) => ((f[d] = L$(() => (r = !0))), f), {}),
    s = (f) => {
      i[f].process(o);
    },
    a = () => {
      const f = performance.now();
      (r = !1),
        (o.delta = n ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, $$), 1)),
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
const { schedule: xf, cancel: g4 } = ex(queueMicrotask, !1);
function xo(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
const tx = w.createContext({});
let Cm = !1;
function j$(e, t, r, n, o) {
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
    N$(c.current, r, o, f),
    w.useInsertionEffect(() => {
      u && u.update(r, a);
    });
  const d = w.useRef(!!(r[J0] && !window.HandoffComplete));
  return (
    A$(() => {
      u &&
        (u.updateFeatures(),
        xf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), Cm || ((Cm = !0), queueMicrotask(B$))));
    }),
    u
  );
}
function B$() {
  window.HandoffComplete = !0;
}
function N$(e, t, r, n) {
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
function F$(e, t, r) {
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
function V$(e, t) {
  if (ac(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || as(r) ? r : void 0,
      animate: as(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function W$(e) {
  const { initial: t, animate: r } = V$(e, w.useContext(ic));
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
function z$(e) {
  for (const t in e) Vo[t] = { ...Vo[t], ...e[t] };
}
const ox = w.createContext({}),
  U$ = Symbol.for('motionComponentSymbol'),
  At = (e) => e;
let Vu = At;
function H$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o
}) {
  e && z$(e);
  function i(a, l) {
    let c;
    const u = { ...w.useContext(Q0), ...a, layoutId: q$(a) },
      { isStatic: f } = u,
      d = W$(a),
      m = n(a, f);
    if (!f && yf) {
      G$();
      const p = K$(u);
      (c = p.MeasureLayout),
        (d.visualElement = j$(o, m, u, t, p.ProjectionNode));
    }
    return C.jsxs(ic.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C.jsx(c, { visualElement: d.visualElement, ...u })
          : null,
        r(o, a, F$(m, d.visualElement, l), m, f, d.visualElement)
      ]
    });
  }
  const s = w.forwardRef(i);
  return (s[U$] = o), s;
}
function q$({ layoutId: e }) {
  const t = w.useContext(ox).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function G$(e, t) {
  w.useContext(Z0).strict;
}
function K$(e) {
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
function Y$(e) {
  function t(n, o = {}) {
    return H$(e(n, o));
  }
  if (typeof Proxy > 'u') return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const X$ = [
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
function Pf(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(X$.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const nl = {};
function Q$(e) {
  Object.assign(nl, e);
}
const As = [
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
  Yn = new Set(As);
function ix(e, { layout: t, layoutId: r }) {
  return (
    Yn.has(e) ||
    e.startsWith('origin') ||
    ((t || r !== void 0) && (!!nl[e] || e === 'opacity'))
  );
}
const Mt = (e) => !!(e && e.getVelocity),
  Z$ = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  J$ = As.length;
function ej(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o
) {
  let i = '';
  for (let s = 0; s < J$; s++) {
    const a = As[s];
    if (e[a] !== void 0) {
      const l = Z$[a] || a;
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
  tj = sx('var(--'),
  Ef = (e) => (tj(e) ? rj.test(e.split('/*')[0].trim()) : !1),
  rj =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  nj = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  cn = (e, t, r) => (r > t ? t : r < e ? e : r),
  ti = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e
  },
  Li = { ...ti, transform: (e) => cn(0, 1, e) },
  na = { ...ti, default: 1 },
  $i = (e) => Math.round(e * 1e5) / 1e5,
  Cf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  oj =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  ij =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ds(e) {
  return typeof e == 'string';
}
function sj(e) {
  return e == null;
}
const _s = (e) => ({
    test: (t) => Ds(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }),
  Jr = _s('deg'),
  Mr = _s('%'),
  ie = _s('px'),
  aj = _s('vh'),
  lj = _s('vw'),
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
      p = nj(d, m);
    if (Yn.has(f)) {
      if (((l = !0), (s[f] = p), !u)) continue;
      d !== (m.default || 0) && (u = !1);
    } else f.startsWith('origin') ? ((c = !0), (a[f] = p)) : (o[f] = p);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = ej(e.transform, r, u, n))
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
function cj({ transformTemplate: e }, t, r) {
  return w.useMemo(() => {
    const n = Rf();
    return (
      Tf(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function uj(e, t, r) {
  const n = e.style || {},
    o = {};
  return cx(o, n, e), Object.assign(o, cj(e, t, r)), o;
}
function dj(e, t, r) {
  const n = {},
    o = uj(e, t, r);
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
const fj = new Set([
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
    fj.has(e)
  );
}
let ux = (e) => !ol(e);
function pj(e) {
  e && (ux = (t) => (t.startsWith('on') ? !ol(t) : e(t)));
}
try {
  pj(require('@emotion/is-prop-valid').default);
} catch {}
function hj(e, t, r) {
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
function mj(e, t, r) {
  const n = Om(t, e.x, e.width),
    o = Om(r, e.y, e.height);
  return `${n} ${o}`;
}
const gj = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  vj = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function yj(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? gj : vj;
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
      (p.transformOrigin = mj(
        h,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    r !== void 0 && (m.y = r),
    n !== void 0 && (m.scale = n),
    s !== void 0 && yj(m, s, a, l, !1);
}
const dx = () => ({ ...Rf(), attrs: {} }),
  Mf = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function bj(e, t, r, n) {
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
function xj(e = !1) {
  return (r, n, o, { latestValues: i }, s) => {
    const l = (Pf(r) ? bj : dj)(n, i, s, r),
      c = hj(n, typeof r == 'string', e),
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
        As.indexOf(o) !== -1
          ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      n[i] = e[o];
    }
  return n;
}
function Im(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((r, n) => {
        (t[0][n] = r.get()), (t[1][n] = r.getVelocity());
      }),
    t
  );
}
function If(e, t, r, n) {
  if (typeof t == 'function') {
    const [o, i] = Im(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [o, i] = Im(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  return t;
}
function wj(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wu = (e) => Array.isArray(e),
  Sj = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  Pj = (e) => (Wu(e) ? e[e.length - 1] || 0 : e);
function Sa(e) {
  const t = Mt(e) ? e.get() : e;
  return Sj(t) ? t.toValue() : t;
}
function Ej(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i
) {
  const s = { latestValues: Cj(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const gx = (e) => (t, r) => {
  const n = w.useContext(ic),
    o = w.useContext(vf),
    i = () => Ej(e, t, n, o);
  return r ? i() : wj(i);
};
function Cj(e, t, r, n) {
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
        const p = If(e, m);
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
    state: bt,
    steps: Bc
  } = ex(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : At, !0),
  Tj = {
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
  Rj = {
    useVisualState: gx({
      scrapeMotionValuesFromProps: Of,
      createRenderState: Rf
    })
  };
function kj(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Pf(e) ? Tj : Rj),
    preloadedFeatures: r,
    useRender: xj(t),
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
const Mj = (e) => (t) => vx(t) && e(t, lc(t));
function Vr(e, t, r, n) {
  return Nr(e, t, Mj(r), n);
}
const Oj = (e, t) => (r) => t(e(r)),
  Wr = (...e) => e.reduce(Oj);
function yx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const Am = yx('dragHorizontal'),
  Dm = yx('dragVertical');
function bx(e) {
  let t = !1;
  if (e === 'y') t = Dm();
  else if (e === 'x') t = Am();
  else {
    const r = Am(),
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
function _m(e, t) {
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
class Ij extends xn {
  mount() {
    this.unmount = Wr(_m(this.node, !0), _m(this.node, !1));
  }
  unmount() {}
}
class Aj extends xn {
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
class Dj extends xn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = At),
      (this.removeEndListeners = At),
      (this.removeAccessibleListeners = At),
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
  _j = (e) => {
    const t = zu.get(e.target);
    t && t(e);
  },
  Lj = (e) => {
    e.forEach(_j);
  };
function $j({ root: e, ...t }) {
  const r = e || document;
  Fc.has(r) || Fc.set(r, {});
  const n = Fc.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(Lj, { root: e, ...t })), n[o];
}
function jj(e, t, r) {
  const n = $j(t);
  return (
    zu.set(e, r),
    n.observe(e),
    () => {
      zu.delete(e), n.unobserve(e);
    }
  );
}
const Bj = { some: 0, all: 1 };
class Nj extends xn {
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
        threshold: typeof o == 'number' ? o : Bj[o]
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
    return jj(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: r } = this.node;
    ['amount', 'margin', 'root'].some(Fj(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Fj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const Vj = {
  inView: { Feature: Nj },
  tap: { Feature: Dj },
  focus: { Feature: Aj },
  hover: { Feature: Ij }
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
  return If(n, t, r !== void 0 ? r : n.custom, e);
}
const nn = (e) => e * 1e3,
  zr = (e) => e / 1e3,
  Wj = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  zj = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Uj = { type: 'keyframes', duration: 0.8 },
  Hj = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qj = (e, { keyframes: t }) =>
    t.length > 2
      ? Uj
      : Yn.has(e)
        ? e.startsWith('scale')
          ? zj(t[1])
          : Wj
        : Hj;
function Gj({
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
function Af(e, t) {
  return e[t] || e.default || e;
}
const Kj = (e) => e !== null;
function uc(e, { repeat: t, repeatType: r = 'loop' }, n) {
  const o = e.filter(Kj),
    i = t && r !== 'loop' && t % 2 === 1 ? 0 : o.length - 1;
  return !i || n === void 0 ? o[i] : n;
}
let Pa;
function Yj() {
  Pa = void 0;
}
const on = {
    now: () => (
      Pa === void 0 &&
        on.set(
          bt.isProcessing || _$.useManualTiming
            ? bt.timestamp
            : performance.now()
        ),
      Pa
    ),
    set: (e) => {
      (Pa = e), queueMicrotask(Yj);
    }
  },
  Px = (e) => /^0[^.\s]+$/u.test(e);
function Xj(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
      ? e === 'none' || e === '0' || Px(e)
      : !0;
}
const Ex = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Qj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zj(e) {
  const t = Qj.exec(e);
  if (!t) return [,];
  const [, r, n, o] = t;
  return [`--${r ?? n}`, o];
}
function Cx(e, t, r = 1) {
  const [n, o] = Zj(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const s = i.trim();
    return Ex(s) ? parseFloat(s) : s;
  }
  return Ef(o) ? Cx(o, t, r + 1) : o;
}
const Jj = new Set([
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
  eB = new Set(['x', 'y', 'z']),
  tB = As.filter((e) => !eB.has(e));
function rB(e) {
  const t = [];
  return (
    tB.forEach((r) => {
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
  nB = { test: (e) => e === 'auto', parse: (e) => e },
  Rx = [ti, ie, Mr, Jr, lj, aj, nB],
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
      const o = rB(n);
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
function oB() {
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
const _f = (e, t) => (r) =>
    !!(
      (Ds(r) && ij.test(r) && r.startsWith(e)) ||
      (t && !sj(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Ox = (e, t, r) => (n) => {
    if (!Ds(n)) return n;
    const [o, i, s, a] = n.match(Cf);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  },
  iB = (e) => cn(0, 255, e),
  Vc = { ...ti, transform: (e) => Math.round(iB(e)) },
  $n = {
    test: _f('rgb', 'red'),
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
function sB(e) {
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
const qu = { test: _f('#'), parse: sB, transform: $n.transform },
  wo = {
    test: _f('hsl', 'hue'),
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
function aB(e) {
  var t, r;
  return (
    isNaN(e) &&
    Ds(e) &&
    (((t = e.match(Cf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(oj)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const Ix = 'number',
  Ax = 'color',
  lB = 'var',
  cB = 'var(',
  Nm = '${}',
  uB =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ls(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      uB,
      (l) => (
        Rt.test(l)
          ? (n.color.push(i), o.push(Ax), r.push(Rt.parse(l)))
          : l.startsWith(cB)
            ? (n.var.push(i), o.push(lB), r.push(l))
            : (n.number.push(i), o.push(Ix), r.push(parseFloat(l))),
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
function _x(e) {
  const { split: t, types: r } = ls(e),
    n = t.length;
  return (o) => {
    let i = '';
    for (let s = 0; s < n; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = r[s];
        a === Ix
          ? (i += $i(o[s]))
          : a === Ax
            ? (i += Rt.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const dB = (e) => (typeof e == 'number' ? 0 : e);
function fB(e) {
  const t = Dx(e);
  return _x(e)(t.map(dB));
}
const un = {
    test: aB,
    parse: Dx,
    createTransformer: _x,
    getAnimatableNone: fB
  },
  pB = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function hB(e) {
  const [t, r] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [n] = r.match(Cf) || [];
  if (!n) return e;
  const o = r.replace(n, '');
  let i = pB.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + '(' + i + o + ')';
}
const mB = /\b([a-z-]*)\(.*?\)/gu,
  Gu = {
    ...un,
    getAnimatableNone: (e) => {
      const t = e.match(mB);
      return t ? t.map(hB).join(' ') : e;
    }
  },
  gB = {
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
  Lf = (e) => gB[e];
function Lx(e, t) {
  let r = Lf(e);
  return (
    r !== Gu && (r = un), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const vB = new Set(['auto', 'none', '0']);
function yB(e, t, r) {
  let n = 0,
    o;
  for (; n < e.length && !o; ) {
    const i = e[n];
    typeof i == 'string' && !vB.has(i) && ls(i).values.length && (o = e[n]),
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
      if (typeof c == 'string' && ((c = c.trim()), Ef(c))) {
        const u = Cx(c, r.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Jj.has(n) || t.length !== 2)) return;
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
    for (let o = 0; o < t.length; o++) Xj(t[o]) && n.push(o);
    n.length && yB(t, n, r);
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
function bB(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function xB(e, t, r, n) {
  const o = e[0];
  if (o === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const i = e[e.length - 1],
    s = Fm(o, t),
    a = Fm(i, t);
  return !s || !a ? !1 : bB(e) || (r === 'spring' && n);
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
    return !this._resolved && !this.hasAttemptedResolve && oB(), this._resolved;
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
    if (!c && !xB(t, n, o, i))
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
const wB = 5;
function Fx(e, t, r) {
  const n = Math.max(t - wB, 0);
  return Nx(r - e(n), t - n);
}
const Wc = 0.001,
  SB = 0.01,
  PB = 10,
  EB = 0.05,
  CB = 1;
function TB({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1
}) {
  let o,
    i,
    s = 1 - t;
  (s = cn(EB, CB, s)),
    (e = cn(SB, PB, zr(e))),
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
    l = kB(o, i, a);
  if (((e = nn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * n;
    return { stiffness: c, damping: s * 2 * Math.sqrt(n * c), duration: e };
  }
}
const RB = 12;
function kB(e, t, r) {
  let n = r;
  for (let o = 1; o < RB; o++) n = n - e(n) / t(n);
  return n;
}
function Ku(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const MB = ['duration', 'bounce'],
  OB = ['stiffness', 'damping', 'mass'];
function Vm(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function IB(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vm(e, OB) && Vm(e, MB)) {
    const r = TB(e);
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
    } = IB({ ...n, velocity: -zr(n.velocity || 0) }),
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
      const P = Math.exp(-p * v * y);
      return (
        i - P * (((m + p * v * h) / g) * Math.sin(g * y) + h * Math.cos(g * y))
      );
    };
  } else if (p === 1) b = (g) => i - Math.exp(-v * g) * (h + (m + v * h) * g);
  else {
    const g = v * Math.sqrt(p * p - 1);
    b = (y) => {
      const P = Math.exp(-p * v * y),
        S = Math.min(g * y, 300);
      return (
        i - (P * ((m + p * v * h) * Math.sinh(S) + g * h * Math.cosh(S))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (g) => {
      const y = b(g);
      if (d) s.done = g >= u;
      else {
        let P = m;
        g !== 0 && (p < 1 ? (P = Fx(b, g, y)) : (P = 0));
        const S = Math.abs(P) <= r,
          E = Math.abs(i - y) <= t;
        s.done = S && E;
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
  let P, S;
  const E = (T) => {
    m(d.value) &&
      ((P = T),
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
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !S && P === void 0 && ((R = !0), y(T), E(T)),
          P !== void 0 && T >= P ? S.next(T - P) : (!R && y(T), d)
        );
      }
    }
  );
}
const Wx = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  AB = 1e-7,
  DB = 12;
function _B(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = Wx(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > AB && ++a < DB);
  return s;
}
function Ls(e, t, r, n) {
  if (e === t && r === n) return At;
  const o = (i) => _B(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : Wx(o(i), t, n));
}
const LB = Ls(0.42, 0, 1, 1),
  $B = Ls(0, 0, 0.58, 1),
  zx = Ls(0.42, 0, 0.58, 1),
  jB = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Ux = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Hx = (e) => (t) => 1 - e(1 - t),
  $f = (e) => 1 - Math.sin(Math.acos(e)),
  qx = Hx($f),
  BB = Ux($f),
  Gx = Ls(0.33, 1.53, 0.69, 0.99),
  jf = Hx(Gx),
  NB = Ux(jf),
  FB = (e) =>
    (e *= 2) < 1 ? 0.5 * jf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  zm = {
    linear: At,
    easeIn: LB,
    easeInOut: zx,
    easeOut: $B,
    circIn: $f,
    circInOut: BB,
    circOut: qx,
    backIn: jf,
    backInOut: NB,
    backOut: Gx,
    anticipate: FB
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
  Xe = (e, t, r) => e + (t - e) * r;
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
function VB({ hue: e, saturation: t, lightness: r, alpha: n }) {
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
  WB = [qu, $n, wo],
  zB = (e) => WB.find((t) => t.test(e));
function Hm(e) {
  const t = zB(e);
  if (!t) return !1;
  let r = t.parse(e);
  return t === wo && (r = VB(r)), r;
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
      (o.alpha = Xe(r.alpha, n.alpha, i)),
      $n.transform(o)
    );
  },
  Yu = new Set(['none', 'hidden']);
function UB(e, t) {
  return Yu.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function HB(e, t) {
  return (r) => Xe(e, t, r);
}
function Bf(e) {
  return typeof e == 'number'
    ? HB
    : typeof e == 'string'
      ? Ef(e)
        ? il
        : Rt.test(e)
          ? qm
          : KB
      : Array.isArray(e)
        ? Kx
        : typeof e == 'object'
          ? Rt.test(e)
            ? qm
            : qB
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
function qB(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Bf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n) r[i] = n[i](o);
    return r;
  };
}
function GB(e, t) {
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
const KB = (e, t) => {
  const r = un.createTransformer(t),
    n = ls(e),
    o = ls(t);
  return n.indexes.var.length === o.indexes.var.length &&
    n.indexes.color.length === o.indexes.color.length &&
    n.indexes.number.length >= o.indexes.number.length
    ? (Yu.has(e) && !o.values.length) || (Yu.has(t) && !n.values.length)
      ? UB(e, t)
      : Wr(Kx(GB(n, o), o.values), r)
    : il(e, t);
};
function Yx(e, t, r) {
  return typeof e == 'number' && typeof t == 'number' && typeof r == 'number'
    ? Xe(e, t, r)
    : Bf(e)(e, t);
}
function YB(e, t, r) {
  const n = [],
    o = r || Yx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || At : t;
      a = Wr(l, a);
    }
    n.push(a);
  }
  return n;
}
function XB(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ((Vu(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = YB(t, n, o),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      const f = cs(e[u], e[u + 1], c);
      return s[u](f);
    };
  return r ? (c) => l(cn(e[0], e[i - 1], c)) : l;
}
function QB(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = cs(0, t, n);
    e.push(Xe(r, 1, o));
  }
}
function ZB(e) {
  const t = [0];
  return QB(t, e.length - 1), t;
}
function JB(e, t) {
  return e.map((r) => r * t);
}
function eN(e, t) {
  return e.map(() => t || zx).splice(0, e.length - 1);
}
function sl({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = 'easeInOut'
}) {
  const o = jB(n) ? n.map(Um) : Um(n),
    i = { done: !1, value: t[0] },
    s = JB(r && r.length === t.length ? r : ZB(t), e),
    a = XB(s, t, { ease: Array.isArray(o) ? o : eN(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i)
  };
}
const Gm = 2e4;
function tN(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Gm; ) (t += r), (n = e.next(t));
  return t >= Gm ? 1 / 0 : t;
}
const rN = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => ke.update(t, !0),
      stop: () => Gr(t),
      now: () => (bt.isProcessing ? bt.timestamp : on.now())
    };
  },
  nN = { decay: Wm, inertia: Wm, tween: sl, keyframes: sl, spring: Vx },
  oN = (e) => e / 100;
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
      a = nN[r] || sl;
    let l, c;
    a !== sl &&
      typeof t[0] != 'number' &&
      ((l = Wr(oN, Yx(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === 'mirror' &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = tN(u));
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
    const P = b ? { done: !1, value: l[0] } : y.next(g);
    a && (P.value = a(P.value));
    let { done: S } = P;
    !b &&
      c !== null &&
      (S = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && S));
    return (
      E && o !== void 0 && (P.value = uc(l, this.options, o)),
      v && v(P.value),
      E && this.finish(),
      P
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
    const { driver: t = rN, onPlay: r } = this.options;
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
const Ci = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Ff = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Ci([0, 0.65, 0.55, 1]),
    circOut: Ci([0.55, 0, 1, 0.45]),
    backIn: Ci([0.31, 0.01, 0.66, -0.59]),
    backOut: Ci([0.33, 1.53, 0.69, 0.99])
  };
function iN(e) {
  return Zx(e) || Ff.easeOut;
}
function Zx(e) {
  if (e) return Xx(e) ? Ci(e) : Array.isArray(e) ? e.map(iN) : Ff[e];
}
function sN(
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
const aN = jx(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  lN = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  al = 10,
  cN = 2e4;
function uN(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !Qx(e.ease);
}
function dN(e, t) {
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
  for (; !n.done && i < cN; ) (n = r.sample(i)), o.push(n.value), (i += al);
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
    if (uN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: m, ...p } = this.options,
        h = dN(t, p);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (i = h.times),
        (s = h.ease),
        (a = 'keyframes');
    }
    const u = sN(l.owner.current, c, t, {
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
      if (!r) return At;
      const { animation: n } = r;
      (n.timeline = t), (n.onfinish = null);
    }
    return At;
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
      aN() &&
      n &&
      lN.has(n) &&
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
function fN(e, t) {
  let r;
  const n = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    r !== s && e(s), (r = s);
  };
  return ke.update(n, !0), () => Gr(n);
}
const pN = jx(() => window.ScrollTimeline !== void 0);
class hN {
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
      if (pN() && n.attachTimeline) n.attachTimeline(t);
      else
        return (
          n.pause(),
          fN((o) => {
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
    const a = Af(n, e) || {},
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
    Gj(a) || (u = { ...u, ...qj(e, u) }),
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
          new hN([])
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
  mN = (e) => !isNaN(parseFloat(e));
class gN {
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
        (this.canTrackVelocity = mN(this.current));
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
  return new gN(e, t);
}
function vN(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, us(r));
}
function yN(e, t) {
  const r = cc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r || {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = Pj(i[s]);
    vN(e, s, a);
  }
}
function Jx(e) {
  return e.getProps()[J0];
}
function bN({ protectedKeys: e, needsAnimating: t }, r) {
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
    if (p === void 0 || (f && bN(f, d))) continue;
    const h = { delay: r, elapsed: 0, ...Af(s || {}, d) };
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
          a && yN(e, a);
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
            return xN(e, t, u + c, f, d, r);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(r.delay)]);
}
function xN(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (c = 0) => c * n : (c = 0) => a - c * n;
  return (
    Array.from(e.variantChildren)
      .sort(wN)
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
function wN(e, t) {
  return e.sortNodePosition(t);
}
function SN(e, t, r = {}) {
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
const PN = [...wf].reverse(),
  EN = wf.length;
function CN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => SN(e, r, n)));
}
function TN(e) {
  let t = CN(e),
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
    for (let v = 0; v < EN; v++) {
      const x = PN[v],
        b = r[x],
        g = c[x] !== void 0 ? c[x] : u[x],
        y = as(g),
        P = x === l ? b.isActive : null;
      P === !1 && (p = v);
      let S = g === u[x] && g !== c[x] && y;
      if (
        (S && n && e.manuallyAnimateOnMount && (S = !1),
        (b.protectedKeys = { ...m }),
        (!b.isActive && P === null) ||
          (!g && !b.prevProp) ||
          sc(g) ||
          typeof g == 'boolean')
      )
        continue;
      let T =
          RN(b.prevProp, g) ||
          (x === l && b.isActive && !S && y) ||
          (v > p && y),
        R = !1;
      const k = Array.isArray(g) ? g : [g];
      let I = k.reduce(o(x), {});
      P === !1 && (I = {});
      const { prevResolvedValues: _ = {} } = b,
        L = { ..._, ...I },
        D = (N) => {
          (T = !0),
            d.has(N) && ((R = !0), d.delete(N)),
            (b.needsAnimating[N] = !0);
          const B = e.getValue(N);
          B && (B.liveStyle = !1);
        };
      for (const N in L) {
        const B = I[N],
          j = _[N];
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
        (b.prevResolvedValues = I),
        b.isActive && (m = { ...m, ...I }),
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
function RN(e, t) {
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
class kN extends xn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = TN(t));
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
let MN = 0;
class ON extends xn {
  constructor() {
    super(...arguments), (this.id = MN++);
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
const IN = { animation: { Feature: kN }, exit: { Feature: ON } },
  Qm = (e, t) => Math.abs(e - t);
function AN(e, t) {
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
          m = AN(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: p } = f,
          { timestamp: h } = bt;
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
      { timestamp: c } = bt;
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
    offset: Zm(e, DN(t)),
    velocity: _N(t, 0.1)
  };
}
function DN(e) {
  return e[0];
}
function rw(e) {
  return e[e.length - 1];
}
function _N(e, t) {
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
    (e.originPoint = Xe(t.min, t.max, e.origin)),
    (e.scale = tr(r) / tr(t)),
    (Qu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Xe(r.min, r.max, e.origin) - e.originPoint),
    (Qu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ji(e, t, r, n) {
  Jm(e.x, t.x, r.x, n ? n.originX : void 0),
    Jm(e.y, t.y, r.y, n ? n.originY : void 0);
}
function eg(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + tr(t));
}
function LN(e, t, r) {
  eg(e.x, t.x, r.x), eg(e.y, t.y, r.y);
}
function tg(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + tr(t));
}
function Bi(e, t, r) {
  tg(e.x, t.x, r.x), tg(e.y, t.y, r.y);
}
function $N(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? Xe(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? Xe(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function rg(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function jN(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: rg(e.x, r, o), y: rg(e.y, t, n) };
}
function ng(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function BN(e, t) {
  return { x: ng(e.x, t.x), y: ng(e.y, t.y) };
}
function NN(e, t) {
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
function FN(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Zu = 0.35;
function VN(e = Zu) {
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
  tt = () => ({ x: ag(), y: ag() });
function ar(e) {
  return [e('x'), e('y')];
}
function nw({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function WN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zN(e, t) {
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
function UN(e, t, r, n = !1) {
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
        Po(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), iw(e, s)),
      n && Tn(i.latestValues) && Po(e, i.latestValues));
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
    s = Xe(e.min, e.max, i);
  ed(e, t[r], t[n], s, t.scale);
}
const HN = ['x', 'scaleX', 'originX'],
  qN = ['y', 'scaleY', 'originY'];
function Po(e, t) {
  dg(e.x, t, HN), dg(e.y, t, qN);
}
function sw(e, t) {
  return nw(zN(e.getBoundingClientRect(), t));
}
function GN(e, t, r) {
  const n = sw(e, r),
    { scroll: o } = t;
  return o && (en(n.x, o.offset.x), en(n.y, o.offset.y)), n;
}
const aw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  KN = new WeakMap();
class YN {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = tt()),
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
          (this.currentDirection = XN(v)),
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
      (s = $N(s, this.constraints[t], this.elastic[t])),
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
        ? (this.constraints = jN(o.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = VN(n)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ar((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = FN(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !xo(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = GN(n, o.root, this.visualElement.getTransformPagePoint());
    let s = BN(o.layout.layoutBox, i);
    if (r) {
      const a = r(WN(s));
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
        i.set(t[r] - Xe(s, a, 0.5));
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
        o[s] = NN({ min: l, max: l }, this.constraints[s]);
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
        a.set(Xe(l, c, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    KN.set(this.visualElement, this);
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
function XN(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
class QN extends xn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = At),
      (this.removeListeners = At),
      (this.controls = new YN(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || At);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fg = (e) => (t, r) => {
  e && ke.postRender(() => e(t, r));
};
class ZN extends xn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = At);
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
function JN() {
  const e = w.useContext(vf);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = w.useId();
  return w.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const Ea = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
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
  eF = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = un.parse(e);
      if (o.length > 5) return n;
      const i = un.createTransformer(e),
        s = typeof o[0] != 'number' ? 1 : 0,
        a = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const c = Xe(a, l, 0.5);
      return (
        typeof o[2 + s] == 'number' && (o[2 + s] /= c),
        typeof o[3 + s] == 'number' && (o[3 + s] /= c),
        i(o)
      );
    }
  };
class tF extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o
      } = this.props,
      { projection: i } = t;
    Q$(rF),
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
      (Ea.hasEverUpdated = !0);
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
  const [t, r] = JN(),
    n = w.useContext(ox);
  return C.jsx(tF, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: w.useContext(tx),
    isPresent: t,
    safeToRemove: r
  });
}
const rF = {
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
    boxShadow: eF
  },
  cw = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  nF = cw.length,
  hg = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  mg = (e) => typeof e == 'number' || ie.test(e);
function oF(e, t, r, n, o, i) {
  o
    ? ((e.opacity = Xe(0, r.opacity !== void 0 ? r.opacity : 1, iF(n))),
      (e.opacityExit = Xe(t.opacity !== void 0 ? t.opacity : 1, 0, sF(n))))
    : i &&
      (e.opacity = Xe(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let s = 0; s < nF; s++) {
    const a = `border${cw[s]}Radius`;
    let l = gg(t, a),
      c = gg(r, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || mg(l) === mg(c)
        ? ((e[a] = Math.max(Xe(hg(l), hg(c), n), 0)),
          (Mr.test(c) || Mr.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || r.rotate) && (e.rotate = Xe(t.rotate || 0, r.rotate || 0, n));
}
function gg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const iF = uw(0, 0.5, qx),
  sF = uw(0.5, 0.95, At);
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
function aF(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (Mr.test(t) &&
      ((t = parseFloat(t)), (t = Xe(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Xe(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = yg(e.min, t, r, a, o)),
    (e.max = yg(e.max, t, r, a, o));
}
function bg(e, t, [r, n, o], i, s) {
  aF(e, t[r], t[n], t[o], t.scale, i, s);
}
const lF = ['x', 'scaleX', 'originX'],
  cF = ['y', 'scaleY', 'originY'];
function xg(e, t, r, n) {
  bg(e.x, t, lF, r ? r.x : void 0, n ? n.x : void 0),
    bg(e.y, t, cF, r ? r.y : void 0, n ? n.y : void 0);
}
function wg(e) {
  return e.translate === 0 && e.scale === 1;
}
function dw(e) {
  return wg(e.x) && wg(e.y);
}
function uF(e, t) {
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
class dF {
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
function Pg(e, t, r) {
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
const fF = (e, t) => e.depth - t.depth;
class pF {
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
    this.isDirty && this.children.sort(fF),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function hF(e, t) {
  const r = on.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (Gr(n), e(i - t));
    };
  return ke.read(n, !0), () => Gr(n);
}
function mF(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function gF(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function vF(e, t, r) {
  const n = Mt(e) ? e : us(e);
  return n.start(Vf('', n, t, r)), n.animation;
}
const Kc = ['', 'X', 'Y', 'Z'],
  yF = { visibility: 'hidden' },
  Eg = 1e3;
let bF = 0;
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
      (this.id = bF++),
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
            this.nodes.forEach(SF),
            this.nodes.forEach(RF),
            this.nodes.forEach(kF),
            this.nodes.forEach(PF),
            mF(Rn);
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
      this.root === this && (this.nodes = new pF());
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
      (this.isSVG = gF(s)), (this.instance = s);
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
            (f = hF(d, 250)),
            Ea.hasAnimatedSinceResize &&
              ((Ea.hasAnimatedSinceResize = !1), this.nodes.forEach(Tg));
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
                  this.options.transition || u.getDefaultTransition() || DF,
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
                const y = { ...Af(h, 'layout'), onPlay: v, onComplete: x };
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
        this.nodes && this.nodes.forEach(MF),
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Cg);
        return;
      }
      this.isUpdating || this.nodes.forEach(CF),
        (this.isUpdating = !1),
        this.nodes.forEach(TF),
        this.nodes.forEach(xF),
        this.nodes.forEach(wF),
        this.clearAllSnapshots();
      const a = on.now();
      (bt.delta = cn(0, 1e3 / 60, a - bt.timestamp)),
        (bt.timestamp = a),
        (bt.isProcessing = !0),
        Bc.update.process(bt),
        Bc.preRender.process(bt),
        Bc.render.process(bt),
        (bt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), xf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(EF), this.sharedNodes.forEach(OF);
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
        (this.layoutCorrected = tt()),
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
        _F(l),
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
      if (!s) return tt();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (en(a.x, l.offset.x), en(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = tt();
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
      const l = tt();
      sr(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Po(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Tn(u.latestValues) && Po(l, u.latestValues);
      }
      return Tn(this.latestValues) && Po(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = tt();
      sr(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Tn(c.latestValues)) continue;
        Ju(c.latestValues) && c.updateSnapshot();
        const u = tt(),
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
        this.relativeParent.resolvedRelativeTargetAt !== bt.timestamp &&
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
          ((this.resolvedRelativeTargetAt = bt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = tt()),
              (this.relativeTargetOrigin = tt()),
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
              ((this.target = tt()), (this.targetWithTransforms = tt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                LN(
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
                (this.relativeTarget = tt()),
                (this.relativeTargetOrigin = tt()),
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
        this.resolvedRelativeTargetAt === bt.timestamp && (c = !1),
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
      UN(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = tt()));
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
        (this.projectionTransform = Pg(this.projectionDelta, this.treeScale)),
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
      const d = tt(),
        m = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        h = m !== p,
        v = this.getStack(),
        x = !v || v.members.length <= 1,
        b = !!(h && !x && this.options.crossfade === !0 && !this.path.some(AF));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (y) => {
        const P = y / 1e3;
        Rg(f.x, s.x, P),
          Rg(f.y, s.y, P),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Bi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            IF(this.relativeTarget, this.relativeTargetOrigin, d, P),
            g && uF(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = tt()),
            sr(g, this.relativeTarget)),
          h &&
            ((this.animationValues = u), oF(u, c, this.latestValues, P, b, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
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
          (Ea.hasAnimatedSinceResize = !0),
            (this.currentAnimation = vF(0, Eg, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Eg),
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
          l = this.target || tt();
          const f = tr(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = tr(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        sr(a, l),
          Po(a, u),
          ji(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new dF()),
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
      if (!this.isVisible) return yF;
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
        (c.transform = Pg(
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
        this.root.nodes.forEach(Cg),
        this.root.sharedNodes.clear();
    }
  };
}
function xF(e) {
  e.updateLayout();
}
function wF(e) {
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
          const p = tt();
          Bi(p, r.layoutBox, d.layoutBox);
          const h = tt();
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
function SF(e) {
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
function PF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function EF(e) {
  e.clearSnapshot();
}
function Cg(e) {
  e.clearMeasurements();
}
function CF(e) {
  e.isLayoutDirty = !1;
}
function TF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Tg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function RF(e) {
  e.resolveTargetDelta();
}
function kF(e) {
  e.calcProjection();
}
function MF(e) {
  e.resetSkewAndRotation();
}
function OF(e) {
  e.removeLeadSnapshot();
}
function Rg(e, t, r) {
  (e.translate = Xe(t.translate, 0, r)),
    (e.scale = Xe(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function kg(e, t, r, n) {
  (e.min = Xe(t.min, r.min, n)), (e.max = Xe(t.max, r.max, n));
}
function IF(e, t, r, n) {
  kg(e.x, t.x, r.x, n), kg(e.y, t.y, r.y, n);
}
function AF(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const DF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Mg = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Og = Mg('applewebkit/') && !Mg('chrome/') ? Math.round : At;
function Ig(e) {
  (e.min = Og(e.min)), (e.max = Og(e.max));
}
function _F(e) {
  Ig(e.x), Ig(e.y);
}
function mw(e, t, r) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Qu(Sg(t), Sg(r), 0.2))
  );
}
const LF = hw({
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
        const e = new LF({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Xc.current = e);
      }
      return Xc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed'
  }),
  $F = {
    pan: { Feature: ZN },
    drag: { Feature: QN, ProjectionNode: gw, MeasureLayout: lw }
  },
  td = { current: null },
  vw = { current: !1 };
function jF() {
  if (((vw.current = !0), !!yf))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (td.current = e.matches);
      e.addListener(t), t();
    } else td.current = !1;
}
function BF(e, t, r) {
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
const Ag = new WeakMap(),
  NF = [...Rx, Rt, un],
  FF = (e) => NF.find(Tx(e)),
  Dg = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ],
  VF = Sf.length;
class WF {
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
      Ag.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      vw.current || jF(),
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
    Ag.delete(this.current),
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
      : tt();
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
    (this.prevMotionValues = BF(
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
    for (let n = 0; n < VF; n++) {
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
        (typeof o == 'string' && (Ex(o) || Px(o))
          ? (o = parseFloat(o))
          : !FF(o) && un.test(r) && (o = Lx(t, r)),
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
      const s = If(
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
class yw extends WF {
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
function zF(e) {
  return window.getComputedStyle(e);
}
class UF extends yw {
  constructor() {
    super(...arguments), (this.type = 'html');
  }
  readValueFromInstance(t, r) {
    if (Yn.has(r)) {
      const n = Lf(r);
      return (n && n.default) || 0;
    } else {
      const n = zF(t),
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
class HF extends yw {
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
    return tt();
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
const qF = (e, t) =>
    Pf(e)
      ? new HF(t, { enableHardwareAcceleration: !1 })
      : new UF(t, {
          allowProjection: e !== w.Fragment,
          enableHardwareAcceleration: !0
        }),
  GF = { layout: { ProjectionNode: gw, MeasureLayout: lw } },
  KF = { ...IN, ...Vj, ...$F, ...GF },
  ia = Y$((e, t) => kj(e, t, KF, qF)),
  YF = (e, t, r) => {
    const n = t - e;
    return ((((r - e) % n) + n) % n) + e;
  };
function _g(...e) {
  const t = w.useRef(0),
    [r, n] = w.useState(e[t.current]),
    o = w.useCallback(
      (i) => {
        (t.current = typeof i != 'number' ? YF(0, e.length, t.current + 1) : i),
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
    const [l, c] = _g(s, a),
      [u, f] = _g(s, a);
    switch (t) {
      case 'rotate':
        return C.jsx(ia.div, {
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
          ? C.jsx(ia.div, {
              ref: i,
              animate: { y: u !== void 0 ? u : '' },
              onHoverEnd: () => f(),
              onHoverStart: () => f(),
              children: e
            })
          : C.jsx(ia.div, {
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
          C.jsx(ia.div, {
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
const XF = () => {
    ht();
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
      C.jsx(C.Fragment, {})
    );
  },
  QF = () => C.jsxs(C.Fragment, { children: [C.jsx(Kv, {}), C.jsx(XF, {})] }),
  Lg = Be(
    w.lazy(() =>
      je(() => import('./Login3-B2DE2CP-.js'), __vite__mapDeps([45, 1, 6, 3]))
    )
  ),
  ZF = Be(w.lazy(() => je(() => Promise.resolve().then(() => _V), void 0))),
  JF = {
    path: '/',
    element: C.jsx(QF, {}),
    children: [
      { path: '', element: C.jsx(Lg, {}) },
      { path: 'pages/login/login3', element: C.jsx(Lg, {}) },
      { path: 'pages/register/register3', element: C.jsx(ZF, {}) }
    ]
  },
  Hf = IE([JF, I$], { basename: '' });
console.log(Hf.basename);
bi.render(
  C.jsx(de.StrictMode, {
    children: C.jsx(VE, {
      basename: '/Elaf',
      children: C.jsx(Xv, { router: Hf })
    })
  }),
  document.getElementById('root')
);
const e5 = '#e0e0e0',
  t5 = '#ffffff',
  r5 = '#90caf9',
  n5 = '#a31f23',
  o5 = '#1e88e5',
  i5 = '#1565c0',
  s5 = '#ffcccc',
  a5 = '#b39ddb',
  l5 = '#1e88e5',
  c5 = '#a31f23',
  u5 = '#4527a0',
  d5 = '#b9f6ca',
  f5 = '#69f0ae',
  p5 = '#00e676',
  h5 = '#00c853',
  m5 = '#ef9a9a',
  g5 = '#a31f23',
  v5 = '#c62828',
  y5 = '#fbe9e7',
  b5 = '#ffab91',
  x5 = '#d84315',
  w5 = '#fff8e1',
  S5 = '#ffe57f',
  P5 = '#ffc107',
  E5 = '#f8fafc',
  C5 = '#eef2f6',
  T5 = '#e3e8ef',
  R5 = '#cdd5df',
  k5 = '#697586',
  M5 = '#4b5565',
  O5 = '#364152',
  I5 = '#121926',
  A5 = '#000000',
  D5 = '#000000',
  _5 = '#000000',
  L5 = '#000000',
  $5 = '#d7dcec',
  j5 = '#bdc8f0',
  B5 = '#8492c4',
  N5 = '#eef2f6',
  F5 = '#2196f3',
  V5 = '#1e88e5',
  W5 = '#90caf9',
  z5 = '#1565c0',
  U5 = '#d1c4e9',
  H5 = '#7c4dff',
  q5 = '#651fff',
  G5 = '#b39ddb',
  K5 = '#6200ea',
  Y5 = {
    paper: e5,
    primaryLight: t5,
    primary200: r5,
    primaryMain: n5,
    primaryDark: o5,
    primary800: i5,
    secondaryLight: s5,
    secondary200: a5,
    secondaryMain: l5,
    secondaryDark: c5,
    secondary800: u5,
    successLight: d5,
    success200: f5,
    successMain: p5,
    successDark: h5,
    errorLight: m5,
    errorMain: g5,
    errorDark: v5,
    orangeLight: y5,
    orangeMain: b5,
    orangeDark: x5,
    warningLight: w5,
    warningMain: S5,
    warningDark: P5,
    grey50: E5,
    grey100: C5,
    grey200: T5,
    grey300: R5,
    grey500: k5,
    grey600: M5,
    grey700: O5,
    grey900: I5,
    darkPaper: A5,
    darkBackground: D5,
    darkLevel1: _5,
    darkLevel2: L5,
    darkTextTitle: $5,
    darkTextPrimary: j5,
    darkTextSecondary: B5,
    darkPrimaryLight: N5,
    darkPrimaryMain: F5,
    darkPrimaryDark: V5,
    darkPrimary200: W5,
    darkPrimary800: z5,
    darkSecondaryLight: U5,
    darkSecondaryMain: H5,
    darkSecondaryDark: q5,
    darkSecondary200: G5,
    darkSecondary800: K5
  };
function X5(e) {
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
function Q5(e) {
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
    P,
    S,
    E,
    T,
    R,
    k,
    I,
    _,
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
      dark: (P = e.colors) == null ? void 0 : P.warningDark
    },
    success: {
      light: (S = e.colors) == null ? void 0 : S.successLight,
      200: (E = e.colors) == null ? void 0 : E.success200,
      main: (T = e.colors) == null ? void 0 : T.successMain,
      dark: (R = e.colors) == null ? void 0 : R.successDark
    },
    grey: {
      50: (k = e.colors) == null ? void 0 : k.grey50,
      100: (I = e.colors) == null ? void 0 : I.grey100,
      500: e.darkTextSecondary,
      600: e.heading,
      700: e.darkTextPrimary,
      900: e.textDark
    },
    dark: {
      light: (_ = e.colors) == null ? void 0 : _.darkTextPrimary,
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
function Z5(e) {
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
const J5 = (e) => {
    const t = Y5,
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
        palette: Q5(r),
        mixins: {
          toolbar: {
            minHeight: '48px',
            padding: '16px',
            '@media (min-width: 600px)': { minHeight: '48px' }
          }
        },
        typography: Z5(r)
      },
      o = zd(n);
    return (o.components = X5(r)), o;
  },
  xw = ({ children: e }) => (
    w.useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []),
    e || null
  );
xw.propTypes = { children: W.node };
const eV = () => {
  const e = dn((t) => t.customization);
  return C.jsx(wy, {
    injectFirst: !0,
    children: C.jsxs(aM, {
      theme: J5(e),
      children: [
        C.jsx(Rb, {}),
        C.jsx(xw, { children: C.jsx(Xv, { router: Hf }) })
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
let tV = { data: '' },
  rV = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || tV,
  nV = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  oV = /\/\*[^]*?\*\/|  +/g,
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
  iV = (e, t, r, n, o) => {
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
              for (; (u = nV.exec(c.replace(oV, ''))); )
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
  sV = (e, t, r) =>
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
  return iV(
    r.unshift
      ? r.raw
        ? sV(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {})
      : r,
    rV(t.target),
    t.g,
    t.o,
    t.k
  );
}
qf.bind({ g: 1 });
qf.bind({ k: 1 });
function aV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Pw(e, t, r) {
  return t && aV(e.prototype, t), e;
}
function _e() {
  return (
    (_e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    _e.apply(this, arguments)
  );
}
function Ew(e, t) {
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
  Cw = de.createContext({ enqueueSnackbar: Bg, closeSnackbar: Bg }),
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
    Ew(t, e);
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
      Pw(t, [
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
function Eo(e, t) {
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
function lV(e) {
  return (e && e.ownerDocument) || document;
}
function Rw(e) {
  var t = lV(e);
  return t.defaultView || window;
}
function cV(e, t) {
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
function uV(e, t) {
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
    var r = uV(e, t);
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
    x = function (E, T) {
      la(o, E), Tw(E), c && c(E, T);
    },
    b = function (E) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || nd.easeOut,
        R = ul({
          timeout: l,
          mode: 'enter',
          style: _e({}, s, { transitionTimingFunction: T })
        });
      (E.style.webkitTransition = Eo('-webkit-transform', R)),
        (E.style.transition = Eo('transform', R)),
        (E.style.webkitTransform = 'none'),
        (E.style.transform = 'none');
    },
    g = function (E) {
      var T = (s == null ? void 0 : s.transitionTimingFunction) || nd.sharp,
        R = ul({
          timeout: l,
          mode: 'exit',
          style: _e({}, s, { transitionTimingFunction: T })
        });
      (E.style.webkitTransition = Eo('-webkit-transform', R)),
        (E.style.transition = Eo('transform', R)),
        la(o, E),
        f && f(E);
    },
    y = function (E) {
      (E.style.webkitTransition = ''), (E.style.transition = ''), d && d(E);
    },
    P = w.useCallback(
      function () {
        p.current && la(o, p.current);
      },
      [o]
    );
  return (
    w.useEffect(
      function () {
        if (!(i || o === 'down' || o === 'right')) {
          var S = cV(function () {
              p.current && la(o, p.current);
            }),
            E = Rw(p.current);
          return (
            E.addEventListener('resize', S),
            function () {
              S.clear(), E.removeEventListener('resize', S);
            }
          );
        }
      },
      [o, i]
    ),
    w.useEffect(
      function () {
        i || P();
      },
      [i, P]
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
      function (S, E) {
        return w.cloneElement(
          r,
          _e(
            {
              ref: v,
              style: _e(
                { visibility: S === 'exited' && !i ? 'hidden' : void 0 },
                s,
                {},
                r.props.style
              )
            },
            E
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
  dV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: `M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`
      })
    );
  },
  fV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z'
      })
    );
  },
  pV = function () {
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
  hV = function () {
    return de.createElement(
      dc,
      null,
      de.createElement('path', {
        d: `M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`
      })
    );
  },
  mV = {
    default: void 0,
    success: de.createElement(dV, null),
    warning: de.createElement(fV, null),
    error: de.createElement(pV, null),
    info: de.createElement(hV, null)
  },
  Fn = {
    maxSnack: 3,
    persist: !1,
    hideIconVariant: !1,
    disableWindowBlurListener: !1,
    variant: 'default',
    autoHideDuration: 5e3,
    iconVariant: mV,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    TransitionComponent: kw,
    transitionDuration: { enter: 225, exit: 195 }
  },
  gV = function (t, r) {
    var n = function (i) {
      return typeof i == 'number' || i === null;
    };
    return n(t) ? t : n(r) ? r : Fn.autoHideDuration;
  },
  vV = function (t, r) {
    var n = function (i, s) {
      return s.some(function (a) {
        return typeof i === a;
      });
    };
    return n(t, ['string', 'number'])
      ? t
      : n(t, ['object'])
        ? _e({}, Fn.transitionDuration, {}, n(r, ['object']) && r, {}, t)
        : n(r, ['string', 'number'])
          ? r
          : n(r, ['object'])
            ? _e({}, Fn.transitionDuration, {}, r)
            : Fn.transitionDuration;
  },
  yV = function (t, r) {
    return function (n, o) {
      return (
        o === void 0 && (o = !1),
        o
          ? _e({}, Fn[n], {}, r[n], {}, t[n])
          : n === 'autoHideDuration'
            ? gV(t.autoHideDuration, r.autoHideDuration)
            : n === 'transitionDuration'
              ? vV(t.transitionDuration, r.transitionDuration)
              : t[n] || r[n] || Fn[n]
      );
    };
  };
function js(e) {
  return Object.entries(e).reduce(function (t, r) {
    var n,
      o = r[0],
      i = r[1];
    return _e({}, t, ((n = {}), (n[o] = qf(i)), n));
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
              style: _e(
                {
                  pointerEvents: 'all',
                  overflow: 'hidden',
                  minHeight: Qc,
                  transition: Eo('height')
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
  bV = function (t) {
    return t.horizontal !== 'center' ? Ug[t.horizontal] : Ug[t.vertical];
  },
  xV = function (t) {
    return 'anchorOrigin' + Gf(t);
  },
  wV = function (t) {
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
        return _e({}, n, ((i = {}), (i[o] = t[o]), i));
      }, {});
  },
  SV = function () {};
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
  }, SV);
}
var PV = typeof window < 'u' ? w.useLayoutEffect : w.useEffect;
function Hg(e) {
  var t = w.useRef(e);
  return (
    PV(function () {
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
  EV = js({
    root:
      ((Jc = { display: 'flex', flexWrap: 'wrap', flexGrow: 1 }),
      (Jc[kn.upSm] = { flexGrow: 'initial', minWidth: '288px' }),
      Jc)
  }),
  Iw = w.forwardRef(function (e, t) {
    var r = e.className,
      n = $s(e, ['className']);
    return de.createElement(
      'div',
      Object.assign({ ref: t, className: Xn(EV.root, r) }, n)
    );
  });
Iw.displayName = 'SnackbarContent';
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
  Aw = w.forwardRef(function (e, t) {
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
        Iw,
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
Aw.displayName = 'MaterialDesignContent';
var CV = w.memo(Aw),
  TV = js({
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
  RV = function (t) {
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
      d = f === void 0 ? CV : f,
      m = w.useMemo(
        function () {
          return wV(u);
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
      P = $s(c, [
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
      S = _e({ direction: bV(P.anchorOrigin), timeout: b }, x),
      E = y;
    typeof E == 'function' && (E = E(P.id, P.message));
    var T = ['onEnter', 'onEntered', 'onExit', 'onExited'].reduce(function (
      R,
      k
    ) {
      var I;
      return _e({}, R, ((I = {}), (I[k] = Ni([t.snack[k], t[k]], P.id)), I));
    }, {});
    return de.createElement(
      Mw,
      { in: o, onExited: T.onExited },
      de.createElement(
        Ow,
        {
          open: p,
          id: P.id,
          disableWindowBlurListener: g,
          autoHideDuration: P.autoHideDuration,
          className: Xn(TV.wrappedRoot, m.root, m[xV(P.anchorOrigin)]),
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
            onEntered: Ni([T.onEntered, a], P.id)
          }),
          E || de.createElement(d, Object.assign({}, P))
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
        transition: Eo(['top', 'right', 'bottom', 'left', 'max-width'], {
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
  kV = function (t) {
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
  MV = w.memo(kV),
  Kg = function (t) {
    var r = typeof t == 'string' || w.isValidElement(t);
    return !r;
  },
  OV = (function (e) {
    Ew(t, e);
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
            p = yV(f, o.props),
            h = _e({ id: m }, f, {
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
                var x = function (P) {
                    return d ? P.id === m : P.message === l;
                  },
                  b = v.queue.findIndex(x) > -1,
                  g = v.snacks.findIndex(x) > -1;
                if (b || g) return v;
              }
              return o.handleDisplaySnack(
                _e({}, v, { queue: [].concat(v.queue, [h]) })
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
            ? _e({}, i, {
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
                    _e({}, u, { open: !1 }))
                  : _e({}, u, { requestClose: !0 }))
              : _e({}, u);
          });
          return _e({}, i, { snacks: c });
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
                return u.id === a ? _e({}, u, { entered: !0 }) : _e({}, u);
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
                  ? _e({}, d)
                  : d.entered
                    ? _e({}, d, { open: !1 })
                    : _e({}, d, { requestClose: !0 });
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
              _e({}, a, {
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
            return _e({}, v, ((b = {}), (b[g] = [].concat(y, [x])), b));
          }, {}),
          h = Object.keys(p).map(function (v) {
            var x = p[v],
              b = x[0];
            return de.createElement(
              MV,
              { key: v, dense: u, anchorOrigin: b.anchorOrigin, classes: m },
              x.map(function (g) {
                return de.createElement(RV, {
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
          Cw.Provider,
          { value: i },
          l,
          a ? od.createPortal(h, a) : h
        );
      }),
      Pw(t, [
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
  y4 = function () {
    return w.useContext(Cw);
  };
const IV = document.getElementById('root'),
  AV = Zg(IV);
AV.render(
  C.jsx(vS, {
    store: dP,
    children: C.jsx(OV, { children: C.jsx(fP, { children: C.jsx(eV, {}) }) })
  })
);
const DV = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  _V = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  );
export {
  ft as $,
  Is as A,
  dt as B,
  Ya as C,
  Fo as D,
  Kn as E,
  b3 as F,
  Pi as G,
  y3 as H,
  n4 as I,
  E3 as J,
  J3 as K,
  gn as L,
  Gb as M,
  He as N,
  Ue as O,
  Lo as P,
  Hd as Q,
  xt as R,
  p4 as S,
  Se as T,
  om as U,
  h4 as V,
  $e as W,
  Z as X,
  is as Y,
  ln as Z,
  M as _,
  jV as a,
  nc as a$,
  ue as a0,
  qe as a1,
  f4 as a2,
  Z3 as a3,
  K3 as a4,
  i4 as a5,
  Y3 as a6,
  t4 as a7,
  e4 as a8,
  r4 as a9,
  Al as aA,
  Q as aB,
  Fy as aC,
  W as aD,
  ht as aE,
  es as aF,
  bw as aG,
  Xh as aH,
  _n as aI,
  TD as aJ,
  Ny as aK,
  Yo as aL,
  Uy as aM,
  Ga as aN,
  tn as aO,
  Nt as aP,
  ec as aQ,
  RR as aR,
  NM as aS,
  Jl as aT,
  Ql as aU,
  Su as aV,
  XV as aW,
  QV as aX,
  ZV as aY,
  JV as aZ,
  e3 as a_,
  N3 as aa,
  R3 as ab,
  k3 as ac,
  w3 as ad,
  S3 as ae,
  X3 as af,
  W3 as ag,
  F3 as ah,
  U3 as ai,
  Xi as aj,
  bR as ak,
  Gn as al,
  bs as am,
  D3 as an,
  P3 as ao,
  C3 as ap,
  _3 as aq,
  V3 as ar,
  gs as as,
  o4 as at,
  $3 as au,
  j3 as av,
  B3 as aw,
  c4 as ax,
  a4 as ay,
  l4 as az,
  UV as b,
  IM as b0,
  l2 as b1,
  dr as b2,
  SR as b3,
  BR as b4,
  nf as b5,
  lA as b6,
  Ab as b7,
  iM as b8,
  CR as b9,
  Ua as bA,
  t2 as bB,
  P2 as bC,
  Cb as bD,
  Nd as bE,
  ib as bF,
  Yl as bG,
  Yy as bH,
  Ky as bI,
  SD as bJ,
  kR as bK,
  OR as bL,
  mO as bM,
  mR as bN,
  Qa as bO,
  SO as bP,
  QA as bQ,
  pi as ba,
  Tb as bb,
  x3 as bc,
  xy as bd,
  m4 as be,
  Za as bf,
  vu as bg,
  za as bh,
  d3 as bi,
  f3 as bj,
  r3 as bk,
  n3 as bl,
  o3 as bm,
  t3 as bn,
  l3 as bo,
  s3 as bp,
  a3 as bq,
  i3 as br,
  u3 as bs,
  c3 as bt,
  kb as bu,
  p3 as bv,
  h3 as bw,
  gR as bx,
  Ud as by,
  Do as bz,
  y4 as c,
  Xa as d,
  Eb as e,
  WV as f,
  m3 as g,
  v3 as h,
  g3 as i,
  C as j,
  zV as k,
  A3 as l,
  I3 as m,
  L3 as n,
  qV as o,
  GV as p,
  G3 as q,
  H3 as r,
  le as s,
  s4 as t,
  pP as u,
  YV as v,
  KV as w,
  u4 as x,
  HV as y,
  d4 as z
};
