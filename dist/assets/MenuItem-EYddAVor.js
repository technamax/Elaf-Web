import{F as j,H as F,s as L,I as G,J as T,_ as r,K as d,L as C,N as x,O as $,P as U,Q as _,R as I,S as w,U as E,j as M,V as O,W as H}from"./index-CZjWfJ9S.js";import{r as c}from"./vendor-BXCbSo2_.js";function S(e){return F("MuiMenuItem",e)}const n=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),D=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},z=e=>{const{disabled:s,dense:a,divider:t,disableGutters:l,selected:p,classes:o}=e,i=H({root:["root",a&&"dense",s&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},S,o);return r({},o,i)},J=L(G,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:s})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${C.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${C.inset}`]:{marginLeft:52},[`& .${x.root}`]:{marginTop:0,marginBottom:0},[`& .${x.inset}`]:{paddingLeft:36},[`& .${$.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${$.root} svg`]:{fontSize:"1.25rem"}}))),q=c.forwardRef(function(s,a){const t=U({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:R,role:k="menuitem",tabIndex:v,className:V}=t,B=_(t,D),f=c.useContext(I),m=c.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=c.useRef(null);w(()=>{l&&u.current&&u.current.focus()},[l]);const N=r({},t,{dense:m.dense,divider:g,disableGutters:i}),b=z(t),P=E(u,a);let y;return t.disabled||(y=v!==void 0?v:-1),M.jsx(I.Provider,{value:m,children:M.jsx(J,r({ref:P,role:k,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,R),className:O(b.root,V)},B,{ownerState:N,classes:b}))})});export{q as M};