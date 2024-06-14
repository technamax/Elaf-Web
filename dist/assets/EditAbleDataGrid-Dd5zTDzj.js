import{q as be,t as pe,s as U,v as He,k as Ue,_ as v,r as n,E as he,l as H,n as W,j as c,i as ve,I as ht,m as Ve,af as Xe,ag as qe,ah as fe,Q as vt,ai as Ce,aj as mt,$ as se,a0 as ae,L as xt,u as St,B as Ct}from"./index-7mdCI5AO.js";import{K as gt,p as wt,a as yt,q as ne,D as Mt,n as Bt,r as It}from"./DataGrid-B0JDEeH2.js";import{d as Tt,a as Rt,E as Et}from"./ExcelExport-BG4snXb9.js";import{a as Oe}from"./axios-BilD9Akj.js";import"./dayjs.min-Vz5l8yyd.js";import{M as Pt}from"./Skeleton-D0EipdCo.js";import{B as jt}from"./TextField-BQWcWP_b.js";let ee;function Ye(){if(ee)return ee;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),ee="reverse",e.scrollLeft>0?ee="default":(e.scrollLeft=1,e.scrollLeft===0&&(ee="negative")),document.body.removeChild(e),ee}function $t(e,t){const o=e.scrollLeft;if(t!=="rtl")return o;switch(Ye()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function kt(e){return pe("MuiTab",e)}const K=be("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),_t=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],zt=e=>{const{classes:t,textColor:o,fullWidth:s,wrapped:a,icon:i,label:h,selected:f,disabled:p}=e,w={root:["root",i&&h&&"labelIcon",`textColor${Ue(o)}`,s&&"fullWidth",a&&"wrapped",f&&"selected",p&&"disabled"],iconWrapper:["iconWrapper"]};return ve(w,kt,t)},Nt=U(He,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${Ue(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>v({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${K.iconWrapper}`]:v({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${K.selected}`]:{opacity:1},[`&.${K.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${K.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${K.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),No=n.forwardRef(function(t,o){const s=he({props:t,name:"MuiTab"}),{className:a,disabled:i=!1,disableFocusRipple:h=!1,fullWidth:f,icon:p,iconPosition:w="top",indicator:S,label:x,onChange:m,onClick:y,onFocus:I,selected:P,selectionFollowsFocus:B,textColor:L="inherit",value:k,wrapped:te=!1}=s,O=H(s,_t),V=v({},s,{disabled:i,disableFocusRipple:h,selected:P,icon:!!p,iconPosition:w,label:!!x,fullWidth:f,textColor:L,wrapped:te}),D=zt(V),z=p&&x&&n.isValidElement(p)?n.cloneElement(p,{className:W(D.iconWrapper,p.props.className)}):p,Q=C=>{!P&&m&&m(C,k),y&&y(C)},d=C=>{B&&!P&&m&&m(C,k),I&&I(C)};return c.jsxs(Nt,v({focusRipple:!h,className:W(D.root,a),ref:o,role:"tab","aria-selected":P,disabled:i,onClick:Q,onFocus:d,ownerState:V,tabIndex:P?0:-1},O,{children:[w==="top"||w==="start"?c.jsxs(n.Fragment,{children:[z,x]}):c.jsxs(n.Fragment,{children:[x,z]}),S]}))});function Wt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Lt(e,t,o,s={},a=()=>{}){const{ease:i=Wt,duration:h=300}=s;let f=null;const p=t[e];let w=!1;const S=()=>{w=!0},x=m=>{if(w){a(new Error("Animation cancelled"));return}f===null&&(f=m);const y=Math.min(1,(m-f)/h);if(t[e]=i(y)*(o-p)+p,y>=1){requestAnimationFrame(()=>{a(null)});return}requestAnimationFrame(x)};return p===o?(a(new Error("Element already at target position")),S):(requestAnimationFrame(x),S)}const Ot=["onChange"],Dt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function At(e){const{onChange:t}=e,o=H(e,Ot),s=n.useRef(),a=n.useRef(null),i=()=>{s.current=a.current.offsetHeight-a.current.clientHeight};return ht(()=>{const h=Ve(()=>{const p=s.current;i(),p!==s.current&&t(s.current)}),f=Xe(a.current);return f.addEventListener("resize",h),()=>{h.clear(),f.removeEventListener("resize",h)}},[t]),n.useEffect(()=>{i(),t(s.current)},[t]),c.jsx("div",v({style:Dt,ref:a},o))}function Ft(e){return pe("MuiTabScrollButton",e)}const Ht=be("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ut=["className","slots","slotProps","direction","orientation","disabled"],Vt=e=>{const{classes:t,orientation:o,disabled:s}=e;return ve({root:["root",o,s&&"disabled"]},Ft,t)},Xt=U(He,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})(({ownerState:e})=>v({width:40,flexShrink:0,opacity:.8,[`&.${Ht.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),qt=n.forwardRef(function(t,o){var s,a;const i=he({props:t,name:"MuiTabScrollButton"}),{className:h,slots:f={},slotProps:p={},direction:w}=i,S=H(i,Ut),x=qe(),m=v({isRtl:x},i),y=Vt(m),I=(s=f.StartScrollButtonIcon)!=null?s:gt,P=(a=f.EndScrollButtonIcon)!=null?a:wt,B=fe({elementType:I,externalSlotProps:p.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),L=fe({elementType:P,externalSlotProps:p.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return c.jsx(Xt,v({component:"div",className:W(y.root,h),ref:o,role:null,ownerState:m,tabIndex:null},S,{children:w==="left"?c.jsx(I,v({},B)):c.jsx(P,v({},L))}))});function Yt(e){return pe("MuiTabs",e)}const ge=be("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Gt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],De=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Ae=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,de=(e,t,o)=>{let s=!1,a=o(e,t);for(;a;){if(a===e.firstChild){if(s)return;s=!0}const i=a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||i)a=o(e,a);else{a.focus();return}}},Kt=e=>{const{vertical:t,fixed:o,hideScrollbar:s,scrollableX:a,scrollableY:i,centered:h,scrollButtonsHideMobile:f,classes:p}=e;return ve({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",s&&"hideScrollbar",a&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[a&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Yt,p)},Qt=U("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${ge.scrollButtons}`]:t.scrollButtons},{[`& .${ge.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>v({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${ge.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Jt=U("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})(({ownerState:e})=>v({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Zt=U("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})(({ownerState:e})=>v({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),eo=U("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>v({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),to=U(At)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Fe={},oo=n.forwardRef(function(t,o){const s=he({props:t,name:"MuiTabs"}),a=vt(),i=qe(),{"aria-label":h,"aria-labelledby":f,action:p,centered:w=!1,children:S,className:x,component:m="div",allowScrollButtonsMobile:y=!1,indicatorColor:I="primary",onChange:P,orientation:B="horizontal",ScrollButtonComponent:L=qt,scrollButtons:k="auto",selectionFollowsFocus:te,slots:O={},slotProps:V={},TabIndicatorProps:D={},TabScrollButtonProps:z={},textColor:Q="primary",value:d,variant:C="standard",visibleScrollbar:M=!1}=s,j=H(s,Gt),T=C==="scrollable",R=B==="vertical",$=R?"scrollTop":"scrollLeft",X=R?"top":"left",J=R?"bottom":"right",Z=R?"clientHeight":"clientWidth",oe=R?"height":"width",q=v({},s,{component:m,allowScrollButtonsMobile:y,indicatorColor:I,orientation:B,vertical:R,scrollButtons:k,textColor:Q,variant:C,visibleScrollbar:M,fixed:!T,hideScrollbar:T&&!M,scrollableX:T&&!R,scrollableY:T&&R,centered:w&&!T,scrollButtonsHideMobile:!y}),A=Kt(q),ot=fe({elementType:O.StartScrollButtonIcon,externalSlotProps:V.startScrollButtonIcon,ownerState:q}),lt=fe({elementType:O.EndScrollButtonIcon,externalSlotProps:V.endScrollButtonIcon,ownerState:q}),[Te,rt]=n.useState(!1),[Y,Re]=n.useState(Fe),[Ee,nt]=n.useState(!1),[Pe,st]=n.useState(!1),[je,at]=n.useState(!1),[$e,it]=n.useState({overflow:"hidden",scrollbarWidth:0}),ke=new Map,N=n.useRef(null),G=n.useRef(null),_e=()=>{const l=N.current;let r;if(l){const u=l.getBoundingClientRect();r={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollLeftNormalized:$t(l,i?"rtl":"ltr"),scrollWidth:l.scrollWidth,top:u.top,bottom:u.bottom,left:u.left,right:u.right}}let b;if(l&&d!==!1){const u=G.current.children;if(u.length>0){const g=u[ke.get(d)];b=g?g.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:b}},le=Ce(()=>{const{tabsMeta:l,tabMeta:r}=_e();let b=0,u;if(R)u="top",r&&l&&(b=r.top-l.top+l.scrollTop);else if(u=i?"right":"left",r&&l){const E=i?l.scrollLeftNormalized+l.clientWidth-l.scrollWidth:l.scrollLeft;b=(i?-1:1)*(r[u]-l[u]+E)}const g={[u]:b,[oe]:r?r[oe]:0};if(isNaN(Y[u])||isNaN(Y[oe]))Re(g);else{const E=Math.abs(Y[u]-g[u]),_=Math.abs(Y[oe]-g[oe]);(E>=1||_>=1)&&Re(g)}}),me=(l,{animation:r=!0}={})=>{r?Lt($,N.current,l,{duration:a.transitions.duration.standard}):N.current[$]=l},ze=l=>{let r=N.current[$];R?r+=l:(r+=l*(i?-1:1),r*=i&&Ye()==="reverse"?-1:1),me(r)},Ne=()=>{const l=N.current[Z];let r=0;const b=Array.from(G.current.children);for(let u=0;u<b.length;u+=1){const g=b[u];if(r+g[Z]>l){u===0&&(r=l);break}r+=g[Z]}return r},ct=()=>{ze(-1*Ne())},dt=()=>{ze(Ne())},ut=n.useCallback(l=>{it({overflow:null,scrollbarWidth:l})},[]),ft=()=>{const l={};l.scrollbarSizeListener=T?c.jsx(to,{onChange:ut,className:W(A.scrollableX,A.hideScrollbar)}):null;const b=T&&(k==="auto"&&(Ee||Pe)||k===!0);return l.scrollButtonStart=b?c.jsx(L,v({slots:{StartScrollButtonIcon:O.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ot},orientation:B,direction:i?"right":"left",onClick:ct,disabled:!Ee},z,{className:W(A.scrollButtons,z.className)})):null,l.scrollButtonEnd=b?c.jsx(L,v({slots:{EndScrollButtonIcon:O.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:lt},orientation:B,direction:i?"left":"right",onClick:dt,disabled:!Pe},z,{className:W(A.scrollButtons,z.className)})):null,l},We=Ce(l=>{const{tabsMeta:r,tabMeta:b}=_e();if(!(!b||!r)){if(b[X]<r[X]){const u=r[$]+(b[X]-r[X]);me(u,{animation:l})}else if(b[J]>r[J]){const u=r[$]+(b[J]-r[J]);me(u,{animation:l})}}}),ie=Ce(()=>{T&&k!==!1&&at(!je)});n.useEffect(()=>{const l=Ve(()=>{N.current&&le()});let r;const b=E=>{E.forEach(_=>{_.removedNodes.forEach(re=>{var F;(F=r)==null||F.unobserve(re)}),_.addedNodes.forEach(re=>{var F;(F=r)==null||F.observe(re)})}),l(),ie()},u=Xe(N.current);u.addEventListener("resize",l);let g;return typeof ResizeObserver<"u"&&(r=new ResizeObserver(l),Array.from(G.current.children).forEach(E=>{r.observe(E)})),typeof MutationObserver<"u"&&(g=new MutationObserver(b),g.observe(G.current,{childList:!0})),()=>{var E,_;l.clear(),u.removeEventListener("resize",l),(E=g)==null||E.disconnect(),(_=r)==null||_.disconnect()}},[le,ie]),n.useEffect(()=>{const l=Array.from(G.current.children),r=l.length;if(typeof IntersectionObserver<"u"&&r>0&&T&&k!==!1){const b=l[0],u=l[r-1],g={root:N.current,threshold:.99},E=Se=>{nt(!Se[0].isIntersecting)},_=new IntersectionObserver(E,g);_.observe(b);const re=Se=>{st(!Se[0].isIntersecting)},F=new IntersectionObserver(re,g);return F.observe(u),()=>{_.disconnect(),F.disconnect()}}},[T,k,je,S==null?void 0:S.length]),n.useEffect(()=>{rt(!0)},[]),n.useEffect(()=>{le()}),n.useEffect(()=>{We(Fe!==Y)},[We,Y]),n.useImperativeHandle(p,()=>({updateIndicator:le,updateScrollButtons:ie}),[le,ie]);const Le=c.jsx(eo,v({},D,{className:W(A.indicator,D.className),ownerState:q,style:v({},Y,D.style)}));let ce=0;const bt=n.Children.map(S,l=>{if(!n.isValidElement(l))return null;const r=l.props.value===void 0?ce:l.props.value;ke.set(r,ce);const b=r===d;return ce+=1,n.cloneElement(l,v({fullWidth:C==="fullWidth",indicator:b&&!Te&&Le,selected:b,selectionFollowsFocus:te,onChange:P,textColor:Q,value:r},ce===1&&d===!1&&!l.props.tabIndex?{tabIndex:0}:{}))}),pt=l=>{const r=G.current,b=mt(r).activeElement;if(b.getAttribute("role")!=="tab")return;let g=B==="horizontal"?"ArrowLeft":"ArrowUp",E=B==="horizontal"?"ArrowRight":"ArrowDown";switch(B==="horizontal"&&i&&(g="ArrowRight",E="ArrowLeft"),l.key){case g:l.preventDefault(),de(r,b,Ae);break;case E:l.preventDefault(),de(r,b,De);break;case"Home":l.preventDefault(),de(r,null,De);break;case"End":l.preventDefault(),de(r,null,Ae);break}},xe=ft();return c.jsxs(Qt,v({className:W(A.root,x),ownerState:q,ref:o,as:m},j,{children:[xe.scrollButtonStart,xe.scrollbarSizeListener,c.jsxs(Jt,{className:A.scroller,ownerState:q,style:{overflow:$e.overflow,[R?`margin${i?"Left":"Right"}`:"marginBottom"]:M?void 0:-$e.scrollbarWidth},ref:N,children:[c.jsx(Zt,{"aria-label":h,"aria-labelledby":f,"aria-orientation":B==="vertical"?"vertical":null,className:A.flexContainer,ownerState:q,onKeyDown:pt,ref:G,role:"tablist",children:bt}),Te&&Le]}),xe.scrollButtonEnd]}))}),Ge=n.createContext(null);function lo(){const[e,t]=n.useState(null);return n.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function Wo(e){const{children:t,value:o}=e,s=lo(),a=n.useMemo(()=>({idPrefix:s,value:o}),[s,o]);return c.jsx(Ge.Provider,{value:a,children:t})}function Ke(){return n.useContext(Ge)}function Qe(e,t){const{idPrefix:o}=e;return o===null?null:`${e.idPrefix}-P-${t}`}function Je(e,t){const{idPrefix:o}=e;return o===null?null:`${e.idPrefix}-T-${t}`}const ro=["children"],Lo=n.forwardRef(function(t,o){const{children:s}=t,a=H(t,ro),i=Ke();if(i===null)throw new TypeError("No TabContext provided");const h=n.Children.map(s,f=>n.isValidElement(f)?n.cloneElement(f,{"aria-controls":Qe(i,f.props.value),id:Je(i,f.props.value)}):null);return c.jsx(oo,v({},a,{ref:o,value:i.value,children:h}))});function no(e){return pe("MuiTabPanel",e)}be("MuiTabPanel",["root"]);const so=["children","className","value"],ao=e=>{const{classes:t}=e;return ve({root:["root"]},no,t)},io=U("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),Oo=n.forwardRef(function(t,o){const s=he({props:t,name:"MuiTabPanel"}),{children:a,className:i,value:h}=s,f=H(s,so),p=v({},s),w=ao(p),S=Ke();if(S===null)throw new TypeError("No TabContext provided");const x=Qe(S,h),m=Je(S,h);return c.jsx(io,v({"aria-labelledby":m,className:W(w.root,i),hidden:h!==S.value,id:x,ref:o,role:"tabpanel",ownerState:p},f,{children:h===S.value&&a}))});var we={},co=ae;Object.defineProperty(we,"__esModule",{value:!0});var uo=we.default=void 0,fo=co(se()),bo=c;uo=we.default=(0,fo.default)((0,bo.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var ye={},po=ae;Object.defineProperty(ye,"__esModule",{value:!0});var ho=ye.default=void 0,vo=po(se()),mo=c;ho=ye.default=(0,vo.default)((0,mo.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");var Me={},xo=ae;Object.defineProperty(Me,"__esModule",{value:!0});var Ze=Me.default=void 0,So=xo(se()),Co=c;Ze=Me.default=(0,So.default)((0,Co.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var Be={},go=ae;Object.defineProperty(Be,"__esModule",{value:!0});var et=Be.default=void 0,wo=go(se()),yo=c;et=Be.default=(0,wo.default)((0,yo.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");var Ie={},Mo=ae;Object.defineProperty(Ie,"__esModule",{value:!0});var tt=Ie.default=void 0,Bo=Mo(se()),Io=c;tt=Ie.default=(0,Bo.default)((0,Io.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const To=["label","icon","showInMenu","onClick"],Ro=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],ue=n.forwardRef((e,t)=>{var S;const o=yt();if(!e.showInMenu){const{label:x,icon:m,onClick:y}=e,I=H(e,To),P=B=>{y==null||y(B)};return c.jsx(o.slots.baseIconButton,v({ref:t,size:"small",role:"menuitem","aria-label":x},I,{onClick:P},(S=o.slotProps)==null?void 0:S.baseIconButton,{children:n.cloneElement(m,{fontSize:"small"})}))}const{label:s,icon:a,onClick:i,closeMenuOnClick:h=!0,closeMenu:f}=e,p=H(e,Ro),w=x=>{i==null||i(x),h&&(f==null||f())};return c.jsxs(Pt,v({ref:t},p,{onClick:w,children:[a&&c.jsx(xt,{children:a}),s]}))});function Do({initialRows:e,ncolumns:t,formData:o,deleteApi:s,disableDelete:a,deleteBy:i,editAPi:h,disableEdit:f,disableAddRecord:p,refetch:w}){const{user:S}=St(),[x,m]=n.useState(e),[y,I]=n.useState({});n.useEffect(()=>{m(e)},[e]);function P(d){const{setRows:C,setRowModesModel:M}=d,j=()=>{const T=x.length+1,R={id:T,...o,isNew:!0};C($=>[...$,R]),M($=>({...$,[T]:{mode:ne.Edit,fieldToFocus:"collectionName"}}))};return c.jsxs(Bt,{sx:{justifyContent:"space-between"},children:[c.jsx(jt,{color:"primary",startIcon:c.jsx(Ze,{}),onClick:j,disabled:p,disab:!0,children:"Add record"}),c.jsx(Et,{data:e,fileName:"collection"})]})}const B=(d,C)=>{d.reason===It.rowFocusOut&&(C.defaultMuiPrevented=!0)},L=d=>()=>{I({...y,[d]:{mode:ne.Edit}})},k=d=>async()=>{const M=x.find(j=>j.id===d)[i];try{await Oe.delete(`${s}${M}`),m(x.filter(j=>j.id!==d))}catch(j){console.error("Error deleting data:",j)}},te=d=>()=>{I({...y,[d]:{mode:ne.View,ignoreModifications:!0}}),x.find(M=>M.id===d).isNew&&m(x.filter(M=>M.id!==d))},O=async(d,C)=>{console.log("newRow",d);try{const{id:M,...j}=d;console.log("formattedRow",j);const T={lastUpdatedBy:S.empId,lastUpdatedOn:new Date().toISOString()},R={...j,...T},$=await Oe.post(h,R),X={...$.data.result,id:d.id};return m(J=>J.map(Z=>Z.id===d.id?X:Z)),console.log("response.data:",$.data),X;w()}catch(M){throw console.error("Error updating data:",M),M}},V=d=>{I(d)},D=d=>async()=>{I(C=>({...C,[d]:{mode:ne.View}}))},z=[...t,{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:({id:d})=>{var M;return((M=y[d])==null?void 0:M.mode)===ne.Edit?[c.jsx(ue,{icon:c.jsx(et,{}),label:"Save",sx:{color:"primary.main"},onClick:D(d)}),c.jsx(ue,{icon:c.jsx(tt,{}),label:"Cancel",className:"textPrimary",onClick:te(d),color:"inherit",sx:{color:"error.dark"}})]:[c.jsx(ue,{icon:c.jsx(Tt,{}),label:"Edit",className:"textPrimary",onClick:L(d),color:"inherit",sx:{color:"secondary.dark"},disabled:f}),c.jsx(ue,{icon:c.jsx(Rt,{}),label:"Delete",onClick:k(d),color:"inherit",sx:{color:"error.dark"},disabled:a})]}}],Q=(d,C)=>{C.defaultMuiPrevented=!0};return c.jsx(Ct,{sx:{height:500,width:"inherit","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"}},children:c.jsx(Mt,{rows:x,columns:z,editMode:"row",rowModesModel:y,onRowModesModelChange:V,onRowEditStop:B,processRowUpdate:O,slots:{toolbar:P},slotProps:{toolbar:{setRows:m,setRowModesModel:I}},getRowId:d=>d.id,onCellDoubleClick:Q})})}export{Do as F,Wo as T,Lo as a,No as b,uo as c,ho as d,Oo as e};