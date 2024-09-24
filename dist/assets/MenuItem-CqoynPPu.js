import{U as P,V as F,s as G,W as L,X as T,_ as r,Y as d,Z as C,$ as x,a0 as $,a1 as U,a2 as _,a3 as I,a4 as w,a5 as E,j as M,a6 as O,a7 as D}from"./index-BQnKJm_U.js";import{r as c}from"./vendor-BXCbSo2_.js";function H(e){return F("MuiMenuItem",e)}const n=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,a)=>{const{ownerState:s}=e;return[a.root,s.dense&&a.dense,s.divider&&a.divider,!s.disableGutters&&a.gutters]},z=e=>{const{disabled:a,dense:s,divider:t,disableGutters:l,selected:p,classes:o}=e,i=D({root:["root",s&&"dense",a&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},H,o);return r({},o,i)},X=G(L,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:a})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${C.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${C.inset}`]:{marginLeft:52},[`& .${x.root}`]:{marginTop:0,marginBottom:0},[`& .${x.inset}`]:{paddingLeft:36},[`& .${$.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${$.root} svg`]:{fontSize:"1.25rem"}}))),q=c.forwardRef(function(a,s){const t=U({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:v,className:V}=t,B=_(t,S),f=c.useContext(I),m=c.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=c.useRef(null);w(()=>{l&&u.current&&u.current.focus()},[l]);const j=r({},t,{dense:m.dense,divider:g,disableGutters:i}),b=z(t),N=E(u,s);let y;return t.disabled||(y=v!==void 0?v:-1),M.jsx(I.Provider,{value:m,children:M.jsx(X,r({ref:N,role:R,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,k),className:O(b.root,V)},B,{ownerState:j,classes:b}))})});export{q as M};