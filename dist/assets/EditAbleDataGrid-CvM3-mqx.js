import{q as ue,t as fe,s as U,v as Fe,k as He,_ as v,E as be,l as H,n as W,j as c,h as pe,I as bt,m as Ue,ag as Ve,ah as Xe,ai as de,Q as pt,aj as Ce,ak as ht,r as he,i as ve,L as vt,u as mt,B as xt}from"./index-AmyHuagJ.js";import{r as n}from"./vendor-BXCbSo2_.js";import{K as St,p as Ct,a as gt,q as ne,D as wt,n as yt,r as Mt}from"./DataGrid-CJTwKQXF.js";import{d as Bt,a as It,E as Tt}from"./ExcelExport-Dm_zY6Hg.js";import{d as Et}from"./dayjs.min-BDDVprXY.js";import{a as Le}from"./axios-DGlyNUmx.js";import{M as Rt}from"./Skeleton-C1XBKFJE.js";import{B as Pt}from"./TextField-TQSsXG4K.js";let ee;function qe(){if(ee)return ee;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),ee="reverse",e.scrollLeft>0?ee="default":(e.scrollLeft=1,e.scrollLeft===0&&(ee="negative")),document.body.removeChild(e),ee}function jt(e,t){const o=e.scrollLeft;if(t!=="rtl")return o;switch(qe()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function kt(e){return fe("MuiTab",e)}const K=ue("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),$t=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],_t=e=>{const{classes:t,textColor:o,fullWidth:s,wrapped:a,icon:i,label:h,selected:f,disabled:p}=e,w={root:["root",i&&h&&"labelIcon",`textColor${He(o)}`,s&&"fullWidth",a&&"wrapped",f&&"selected",p&&"disabled"],iconWrapper:["iconWrapper"]};return pe(w,kt,t)},zt=U(Fe,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${He(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>v({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${K.iconWrapper}`]:v({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${K.selected}`]:{opacity:1},[`&.${K.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${K.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${K.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${K.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),$o=n.forwardRef(function(t,o){const s=be({props:t,name:"MuiTab"}),{className:a,disabled:i=!1,disableFocusRipple:h=!1,fullWidth:f,icon:p,iconPosition:w="top",indicator:S,label:x,onChange:m,onClick:y,onFocus:I,selected:P,selectionFollowsFocus:B,textColor:L="inherit",value:$,wrapped:te=!1}=s,O=H(s,$t),V=v({},s,{disabled:i,disableFocusRipple:h,selected:P,icon:!!p,iconPosition:w,label:!!x,fullWidth:f,textColor:L,wrapped:te}),D=_t(V),z=p&&x&&n.isValidElement(p)?n.cloneElement(p,{className:W(D.iconWrapper,p.props.className)}):p,Q=C=>{!P&&m&&m(C,$),y&&y(C)},d=C=>{B&&!P&&m&&m(C,$),I&&I(C)};return c.jsxs(zt,v({focusRipple:!h,className:W(D.root,a),ref:o,role:"tab","aria-selected":P,disabled:i,onClick:Q,onFocus:d,ownerState:V,tabIndex:P?0:-1},O,{children:[w==="top"||w==="start"?c.jsxs(n.Fragment,{children:[z,x]}):c.jsxs(n.Fragment,{children:[x,z]}),S]}))});function Nt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Wt(e,t,o,s={},a=()=>{}){const{ease:i=Nt,duration:h=300}=s;let f=null;const p=t[e];let w=!1;const S=()=>{w=!0},x=m=>{if(w){a(new Error("Animation cancelled"));return}f===null&&(f=m);const y=Math.min(1,(m-f)/h);if(t[e]=i(y)*(o-p)+p,y>=1){requestAnimationFrame(()=>{a(null)});return}requestAnimationFrame(x)};return p===o?(a(new Error("Element already at target position")),S):(requestAnimationFrame(x),S)}const Lt=["onChange"],Ot={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Dt(e){const{onChange:t}=e,o=H(e,Lt),s=n.useRef(),a=n.useRef(null),i=()=>{s.current=a.current.offsetHeight-a.current.clientHeight};return bt(()=>{const h=Ue(()=>{const p=s.current;i(),p!==s.current&&t(s.current)}),f=Ve(a.current);return f.addEventListener("resize",h),()=>{h.clear(),f.removeEventListener("resize",h)}},[t]),n.useEffect(()=>{i(),t(s.current)},[t]),c.jsx("div",v({style:Ot,ref:a},o))}function At(e){return fe("MuiTabScrollButton",e)}const Ft=ue("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ht=["className","slots","slotProps","direction","orientation","disabled"],Ut=e=>{const{classes:t,orientation:o,disabled:s}=e;return pe({root:["root",o,s&&"disabled"]},At,t)},Vt=U(Fe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})(({ownerState:e})=>v({width:40,flexShrink:0,opacity:.8,[`&.${Ft.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Xt=n.forwardRef(function(t,o){var s,a;const i=be({props:t,name:"MuiTabScrollButton"}),{className:h,slots:f={},slotProps:p={},direction:w}=i,S=H(i,Ht),x=Xe(),m=v({isRtl:x},i),y=Ut(m),I=(s=f.StartScrollButtonIcon)!=null?s:St,P=(a=f.EndScrollButtonIcon)!=null?a:Ct,B=de({elementType:I,externalSlotProps:p.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),L=de({elementType:P,externalSlotProps:p.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return c.jsx(Vt,v({component:"div",className:W(y.root,h),ref:o,role:null,ownerState:m,tabIndex:null},S,{children:w==="left"?c.jsx(I,v({},B)):c.jsx(P,v({},L))}))});function qt(e){return fe("MuiTabs",e)}const ge=ue("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Yt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Oe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,De=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,ie=(e,t,o)=>{let s=!1,a=o(e,t);for(;a;){if(a===e.firstChild){if(s)return;s=!0}const i=a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||i)a=o(e,a);else{a.focus();return}}},Gt=e=>{const{vertical:t,fixed:o,hideScrollbar:s,scrollableX:a,scrollableY:i,centered:h,scrollButtonsHideMobile:f,classes:p}=e;return pe({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",s&&"hideScrollbar",a&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[a&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},qt,p)},Kt=U("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${ge.scrollButtons}`]:t.scrollButtons},{[`& .${ge.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>v({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${ge.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Qt=U("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})(({ownerState:e})=>v({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Jt=U("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})(({ownerState:e})=>v({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Zt=U("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>v({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),eo=U(Dt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Ae={},to=n.forwardRef(function(t,o){const s=be({props:t,name:"MuiTabs"}),a=pt(),i=Xe(),{"aria-label":h,"aria-labelledby":f,action:p,centered:w=!1,children:S,className:x,component:m="div",allowScrollButtonsMobile:y=!1,indicatorColor:I="primary",onChange:P,orientation:B="horizontal",ScrollButtonComponent:L=Xt,scrollButtons:$="auto",selectionFollowsFocus:te,slots:O={},slotProps:V={},TabIndicatorProps:D={},TabScrollButtonProps:z={},textColor:Q="primary",value:d,variant:C="standard",visibleScrollbar:M=!1}=s,j=H(s,Yt),T=C==="scrollable",E=B==="vertical",k=E?"scrollTop":"scrollLeft",X=E?"top":"left",J=E?"bottom":"right",Z=E?"clientHeight":"clientWidth",oe=E?"height":"width",q=v({},s,{component:m,allowScrollButtonsMobile:y,indicatorColor:I,orientation:B,vertical:E,scrollButtons:$,textColor:Q,variant:C,visibleScrollbar:M,fixed:!T,hideScrollbar:T&&!M,scrollableX:T&&!E,scrollableY:T&&E,centered:w&&!T,scrollButtonsHideMobile:!y}),A=Gt(q),et=de({elementType:O.StartScrollButtonIcon,externalSlotProps:V.startScrollButtonIcon,ownerState:q}),tt=de({elementType:O.EndScrollButtonIcon,externalSlotProps:V.endScrollButtonIcon,ownerState:q}),[Ie,ot]=n.useState(!1),[Y,Te]=n.useState(Ae),[Ee,lt]=n.useState(!1),[Re,rt]=n.useState(!1),[Pe,nt]=n.useState(!1),[je,st]=n.useState({overflow:"hidden",scrollbarWidth:0}),ke=new Map,N=n.useRef(null),G=n.useRef(null),$e=()=>{const l=N.current;let r;if(l){const u=l.getBoundingClientRect();r={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollLeftNormalized:jt(l,i?"rtl":"ltr"),scrollWidth:l.scrollWidth,top:u.top,bottom:u.bottom,left:u.left,right:u.right}}let b;if(l&&d!==!1){const u=G.current.children;if(u.length>0){const g=u[ke.get(d)];b=g?g.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:b}},le=Ce(()=>{const{tabsMeta:l,tabMeta:r}=$e();let b=0,u;if(E)u="top",r&&l&&(b=r.top-l.top+l.scrollTop);else if(u=i?"right":"left",r&&l){const R=i?l.scrollLeftNormalized+l.clientWidth-l.scrollWidth:l.scrollLeft;b=(i?-1:1)*(r[u]-l[u]+R)}const g={[u]:b,[oe]:r?r[oe]:0};if(isNaN(Y[u])||isNaN(Y[oe]))Te(g);else{const R=Math.abs(Y[u]-g[u]),_=Math.abs(Y[oe]-g[oe]);(R>=1||_>=1)&&Te(g)}}),me=(l,{animation:r=!0}={})=>{r?Wt(k,N.current,l,{duration:a.transitions.duration.standard}):N.current[k]=l},_e=l=>{let r=N.current[k];E?r+=l:(r+=l*(i?-1:1),r*=i&&qe()==="reverse"?-1:1),me(r)},ze=()=>{const l=N.current[Z];let r=0;const b=Array.from(G.current.children);for(let u=0;u<b.length;u+=1){const g=b[u];if(r+g[Z]>l){u===0&&(r=l);break}r+=g[Z]}return r},at=()=>{_e(-1*ze())},it=()=>{_e(ze())},ct=n.useCallback(l=>{st({overflow:null,scrollbarWidth:l})},[]),dt=()=>{const l={};l.scrollbarSizeListener=T?c.jsx(eo,{onChange:ct,className:W(A.scrollableX,A.hideScrollbar)}):null;const b=T&&($==="auto"&&(Ee||Re)||$===!0);return l.scrollButtonStart=b?c.jsx(L,v({slots:{StartScrollButtonIcon:O.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:et},orientation:B,direction:i?"right":"left",onClick:at,disabled:!Ee},z,{className:W(A.scrollButtons,z.className)})):null,l.scrollButtonEnd=b?c.jsx(L,v({slots:{EndScrollButtonIcon:O.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:tt},orientation:B,direction:i?"left":"right",onClick:it,disabled:!Re},z,{className:W(A.scrollButtons,z.className)})):null,l},Ne=Ce(l=>{const{tabsMeta:r,tabMeta:b}=$e();if(!(!b||!r)){if(b[X]<r[X]){const u=r[k]+(b[X]-r[X]);me(u,{animation:l})}else if(b[J]>r[J]){const u=r[k]+(b[J]-r[J]);me(u,{animation:l})}}}),se=Ce(()=>{T&&$!==!1&&nt(!Pe)});n.useEffect(()=>{const l=Ue(()=>{N.current&&le()});let r;const b=R=>{R.forEach(_=>{_.removedNodes.forEach(re=>{var F;(F=r)==null||F.unobserve(re)}),_.addedNodes.forEach(re=>{var F;(F=r)==null||F.observe(re)})}),l(),se()},u=Ve(N.current);u.addEventListener("resize",l);let g;return typeof ResizeObserver<"u"&&(r=new ResizeObserver(l),Array.from(G.current.children).forEach(R=>{r.observe(R)})),typeof MutationObserver<"u"&&(g=new MutationObserver(b),g.observe(G.current,{childList:!0})),()=>{var R,_;l.clear(),u.removeEventListener("resize",l),(R=g)==null||R.disconnect(),(_=r)==null||_.disconnect()}},[le,se]),n.useEffect(()=>{const l=Array.from(G.current.children),r=l.length;if(typeof IntersectionObserver<"u"&&r>0&&T&&$!==!1){const b=l[0],u=l[r-1],g={root:N.current,threshold:.99},R=Se=>{lt(!Se[0].isIntersecting)},_=new IntersectionObserver(R,g);_.observe(b);const re=Se=>{rt(!Se[0].isIntersecting)},F=new IntersectionObserver(re,g);return F.observe(u),()=>{_.disconnect(),F.disconnect()}}},[T,$,Pe,S==null?void 0:S.length]),n.useEffect(()=>{ot(!0)},[]),n.useEffect(()=>{le()}),n.useEffect(()=>{Ne(Ae!==Y)},[Ne,Y]),n.useImperativeHandle(p,()=>({updateIndicator:le,updateScrollButtons:se}),[le,se]);const We=c.jsx(Zt,v({},D,{className:W(A.indicator,D.className),ownerState:q,style:v({},Y,D.style)}));let ae=0;const ut=n.Children.map(S,l=>{if(!n.isValidElement(l))return null;const r=l.props.value===void 0?ae:l.props.value;ke.set(r,ae);const b=r===d;return ae+=1,n.cloneElement(l,v({fullWidth:C==="fullWidth",indicator:b&&!Ie&&We,selected:b,selectionFollowsFocus:te,onChange:P,textColor:Q,value:r},ae===1&&d===!1&&!l.props.tabIndex?{tabIndex:0}:{}))}),ft=l=>{const r=G.current,b=ht(r).activeElement;if(b.getAttribute("role")!=="tab")return;let g=B==="horizontal"?"ArrowLeft":"ArrowUp",R=B==="horizontal"?"ArrowRight":"ArrowDown";switch(B==="horizontal"&&i&&(g="ArrowRight",R="ArrowLeft"),l.key){case g:l.preventDefault(),ie(r,b,De);break;case R:l.preventDefault(),ie(r,b,Oe);break;case"Home":l.preventDefault(),ie(r,null,Oe);break;case"End":l.preventDefault(),ie(r,null,De);break}},xe=dt();return c.jsxs(Kt,v({className:W(A.root,x),ownerState:q,ref:o,as:m},j,{children:[xe.scrollButtonStart,xe.scrollbarSizeListener,c.jsxs(Qt,{className:A.scroller,ownerState:q,style:{overflow:je.overflow,[E?`margin${i?"Left":"Right"}`:"marginBottom"]:M?void 0:-je.scrollbarWidth},ref:N,children:[c.jsx(Jt,{"aria-label":h,"aria-labelledby":f,"aria-orientation":B==="vertical"?"vertical":null,className:A.flexContainer,ownerState:q,onKeyDown:ft,ref:G,role:"tablist",children:ut}),Ie&&We]}),xe.scrollButtonEnd]}))}),Ye=n.createContext(null);function oo(){const[e,t]=n.useState(null);return n.useEffect(()=>{t(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function _o(e){const{children:t,value:o}=e,s=oo(),a=n.useMemo(()=>({idPrefix:s,value:o}),[s,o]);return c.jsx(Ye.Provider,{value:a,children:t})}function Ge(){return n.useContext(Ye)}function Ke(e,t){const{idPrefix:o}=e;return o===null?null:`${e.idPrefix}-P-${t}`}function Qe(e,t){const{idPrefix:o}=e;return o===null?null:`${e.idPrefix}-T-${t}`}const lo=["children"],zo=n.forwardRef(function(t,o){const{children:s}=t,a=H(t,lo),i=Ge();if(i===null)throw new TypeError("No TabContext provided");const h=n.Children.map(s,f=>n.isValidElement(f)?n.cloneElement(f,{"aria-controls":Ke(i,f.props.value),id:Qe(i,f.props.value)}):null);return c.jsx(to,v({},a,{ref:o,value:i.value,children:h}))});function ro(e){return fe("MuiTabPanel",e)}ue("MuiTabPanel",["root"]);const no=["children","className","value"],so=e=>{const{classes:t}=e;return pe({root:["root"]},ro,t)},ao=U("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(3)})),No=n.forwardRef(function(t,o){const s=be({props:t,name:"MuiTabPanel"}),{children:a,className:i,value:h}=s,f=H(s,no),p=v({},s),w=so(p),S=Ge();if(S===null)throw new TypeError("No TabContext provided");const x=Ke(S,h),m=Qe(S,h);return c.jsx(ao,v({"aria-labelledby":m,className:W(w.root,i),hidden:h!==S.value,id:x,ref:o,role:"tabpanel",ownerState:p},f,{children:h===S.value&&a}))});var we={},io=ve;Object.defineProperty(we,"__esModule",{value:!0});var co=we.default=void 0,uo=io(he()),fo=c;co=we.default=(0,uo.default)((0,fo.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var ye={},bo=ve;Object.defineProperty(ye,"__esModule",{value:!0});var po=ye.default=void 0,ho=bo(he()),vo=c;po=ye.default=(0,ho.default)((0,vo.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddCircle");var Me={},mo=ve;Object.defineProperty(Me,"__esModule",{value:!0});var Je=Me.default=void 0,xo=mo(he()),So=c;Je=Me.default=(0,xo.default)((0,So.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");var Be={},Co=ve;Object.defineProperty(Be,"__esModule",{value:!0});var Ze=Be.default=void 0,go=Co(he()),wo=c;Ze=Be.default=(0,go.default)((0,wo.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");const yo=["label","icon","showInMenu","onClick"],Mo=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],ce=n.forwardRef((e,t)=>{var S;const o=gt();if(!e.showInMenu){const{label:x,icon:m,onClick:y}=e,I=H(e,yo),P=B=>{y==null||y(B)};return c.jsx(o.slots.baseIconButton,v({ref:t,size:"small",role:"menuitem","aria-label":x},I,{onClick:P},(S=o.slotProps)==null?void 0:S.baseIconButton,{children:n.cloneElement(m,{fontSize:"small"})}))}const{label:s,icon:a,onClick:i,closeMenuOnClick:h=!0,closeMenu:f}=e,p=H(e,Mo),w=x=>{i==null||i(x),h&&(f==null||f())};return c.jsxs(Rt,v({ref:t},p,{onClick:w,children:[a&&c.jsx(vt,{children:a}),s]}))});function Wo({initialRows:e,ncolumns:t,formData:o,deleteApi:s,disableDelete:a,deleteBy:i,editAPi:h,disableEdit:f,disableAddRecord:p,refetch:w}){const{user:S}=mt(),[x,m]=n.useState(e),[y,I]=n.useState({});n.useEffect(()=>{m(e)},[e]);function P(d){const{setRows:C,setRowModesModel:M}=d,j=()=>{const T=x.length+1,E={id:T,...o,isNew:!0};C(k=>[...k,E]),M(k=>({...k,[T]:{mode:ne.Edit,fieldToFocus:"collectionName"}}))};return c.jsxs(yt,{sx:{justifyContent:"space-between"},children:[c.jsx(Pt,{color:"primary",startIcon:c.jsx(Je,{}),onClick:j,disabled:p,disab:!0,children:"Add record"}),c.jsx(Tt,{data:e,fileName:"collection"})]})}const B=(d,C)=>{d.reason===Mt.rowFocusOut&&(C.defaultMuiPrevented=!0)},L=d=>()=>{I({...y,[d]:{mode:ne.Edit}})},$=d=>async()=>{const M=x.find(j=>j.id===d)[i];try{await Le.delete(`${s}${M}`),m(x.filter(j=>j.id!==d))}catch(j){console.error("Error deleting data:",j)}},te=d=>()=>{I({...y,[d]:{mode:ne.View,ignoreModifications:!0}}),x.find(M=>M.id===d).isNew&&m(x.filter(M=>M.id!==d))},O=async(d,C)=>{console.log("newRow",d);try{const{id:M,...j}=d;console.log("formattedRow",j);const T={lastUpdatedBy:S.empId,lastUpdatedOn:new Date().toISOString()},E={...j,...T},k=await Le.post(h,E),X={...k.data.result,id:d.id};return m(J=>J.map(Z=>Z.id===d.id?X:Z)),console.log("response.data:",k.data),X;w()}catch(M){throw console.error("Error updating data:",M),M}},V=d=>{I(d)},D=d=>async()=>{I(C=>({...C,[d]:{mode:ne.View}}))},z=[...t,{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:({id:d})=>{var M;return((M=y[d])==null?void 0:M.mode)===ne.Edit?[c.jsx(ce,{icon:c.jsx(Ze,{}),label:"Save",sx:{color:"primary.main"},onClick:D(d)}),c.jsx(ce,{icon:c.jsx(Et,{}),label:"Cancel",className:"textPrimary",onClick:te(d),color:"inherit",sx:{color:"error.dark"}})]:[c.jsx(ce,{icon:c.jsx(Bt,{}),label:"Edit",className:"textPrimary",onClick:L(d),color:"inherit",sx:{color:"secondary.dark"},disabled:f}),c.jsx(ce,{icon:c.jsx(It,{}),label:"Delete",onClick:$(d),color:"inherit",sx:{color:"error.dark"},disabled:a})]}}],Q=(d,C)=>{C.defaultMuiPrevented=!0};return c.jsx(xt,{sx:{height:500,width:"inherit","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"}},children:c.jsx(wt,{rows:x,columns:z,editMode:"row",rowModesModel:y,onRowModesModelChange:V,onRowEditStop:B,processRowUpdate:O,slots:{toolbar:P},slotProps:{toolbar:{setRows:m,setRowModesModel:I}},getRowId:d=>d.id,onCellDoubleClick:Q})})}export{Wo as F,_o as T,zo as a,$o as b,co as c,po as d,No as e};
