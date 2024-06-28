import{k as S,l as K,m as A,n as L,s as P,o as q,p as J,_ as o,q as _,t as f,v as j,w as B,x as G,y as H,L as E,z as Q,A as Y,j as $,E as k,F as W,H as X,I as F}from"./index-C1TTrB0-.js";import{r as c}from"./vendor-BXCbSo2_.js";function O(e,t=0,a=1){return K(e,t,a)}function Z(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let a=e.match(t);return a&&a[0].length===1&&(a=a.map(s=>s+s)),a?`rgb${a.length===4?"a":""}(${a.map((s,n)=>n<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function h(e){if(e.type)return e;if(e.charAt(0)==="#")return h(Z(e));const t=e.indexOf("("),a=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(S(9,e));let s=e.substring(t+1,e.length-1),n;if(a==="color"){if(s=s.split(" "),n=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n)===-1)throw new Error(S(10,n))}else s=s.split(",");return s=s.map(i=>parseFloat(i)),{type:a,values:s,colorSpace:n}}function w(e){const{type:t,colorSpace:a}=e;let{values:s}=e;return t.indexOf("rgb")!==-1?s=s.map((n,i)=>i<3?parseInt(n,10):n):t.indexOf("hsl")!==-1&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),t.indexOf("color")!==-1?s=`${a} ${s.join(" ")}`:s=`${s.join(", ")}`,`${t}(${s})`}function ee(e,t){return e=h(e),t=O(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,w(e)}function he(e,t){if(e=h(e),t=O(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)e.values[a]*=1-t;return w(e)}function me(e,t){if(e=h(e),t=O(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let a=0;a<3;a+=1)e.values[a]+=(255-e.values[a])*t;else if(e.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)e.values[a]+=(1-e.values[a])*t;return w(e)}function te(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ae(e){return parseFloat(e)}function se(e){return L("MuiMenuItem",e)}const u=A("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ne=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ie=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},re=e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:i,classes:r}=e,l=W({root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",i&&"selected"]},se,r);return o({},r,l)},oe=P(q,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ie})(({theme:e,ownerState:t})=>o({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:f(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:f(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:f(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:f(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${j.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${j.inset}`]:{marginLeft:52},[`& .${B.root}`]:{marginTop:0,marginBottom:0},[`& .${B.inset}`]:{paddingLeft:36},[`& .${_.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&o({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_.root} svg`]:{fontSize:"1.25rem"}}))),ve=c.forwardRef(function(t,a){const s=G({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:i="li",dense:r=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:m,role:v="menuitem",tabIndex:p,className:g}=s,y=H(s,ne),I=c.useContext(E),M=c.useMemo(()=>({dense:r||I.dense||!1,disableGutters:l}),[I.dense,r,l]),x=c.useRef(null);Q(()=>{n&&x.current&&x.current.focus()},[n]);const z=o({},s,{dense:M.dense,divider:d,disableGutters:l}),C=re(s),D=Y(x,a);let R;return s.disabled||(R=p!==void 0?p:-1),$.jsx(E.Provider,{value:M,children:$.jsx(oe,o({ref:D,role:v,tabIndex:R,component:i,focusVisibleClassName:k(C.focusVisible,m),className:k(C.root,g)},y,{ownerState:z,classes:C}))})});function le(e){return L("MuiSkeleton",e)}A("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const de=["animation","className","component","height","style","variant","width"];let b=e=>e,N,U,T,V;const pe=e=>{const{classes:t,variant:a,animation:s,hasChildren:n,width:i,height:r}=e;return W({root:["root",a,s,n&&"withChildren",n&&!i&&"fitContent",n&&!r&&"heightAuto"]},le,t)},ue=X(N||(N=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ce=X(U||(U=b`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ge=P("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const a=te(e.shape.borderRadius)||"px",s=ae(e.shape.borderRadius);return o({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:ee(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&F(T||(T=b`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ue),({ownerState:e,theme:t})=>e.animation==="wave"&&F(V||(V=b`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ce,(t.vars||t).palette.action.hover)),ye=c.forwardRef(function(t,a){const s=G({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:i,component:r="span",height:d,style:l,variant:m="text",width:v}=s,p=H(s,de),g=o({},s,{animation:n,component:r,variant:m,hasChildren:!!p.children}),y=pe(g);return $.jsx(ge,o({as:r,ref:a,className:k(y.root,i),ownerState:g},p,{style:o({width:v,height:d},l)}))});export{ve as M,ye as S,ee as a,he as b,h as d,me as l,w as r};
