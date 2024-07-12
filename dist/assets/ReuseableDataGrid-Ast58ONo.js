import{o as z,p as E,s as m,_ as r,v as oo,z as G,A as _,j as a,H as y,P as c,I as F,an as to,ao as eo,ap as X,S as io,aq as ao,ar as ro,T as V,t as no,r as so,i as lo,B as co}from"./index-BNJRzY36.js";import{r as p}from"./vendor-BXCbSo2_.js";import{d as uo,a as po,D as go,b as xo,E as ho}from"./ExcelExport-CskTXQIo.js";import{c as vo,d as bo,I as q,B as Y,a as fo}from"./axios-6bxm8tWY.js";function mo(t){return p.Children.toArray(t).filter(o=>p.isValidElement(o))}function Co(t){return E("MuiButtonGroup",t)}const u=z("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),Bo=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],$o=(t,o)=>{const{ownerState:e}=t;return[{[`& .${u.grouped}`]:o.grouped},{[`& .${u.grouped}`]:o[`grouped${c(e.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${c(e.variant)}`]},{[`& .${u.grouped}`]:o[`grouped${c(e.variant)}${c(e.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${c(e.variant)}${c(e.color)}`]},{[`& .${u.firstButton}`]:o.firstButton},{[`& .${u.lastButton}`]:o.lastButton},{[`& .${u.middleButton}`]:o.middleButton},o.root,o[e.variant],e.disableElevation===!0&&o.disableElevation,e.fullWidth&&o.fullWidth,e.orientation==="vertical"&&o.vertical]},Do=t=>{const{classes:o,color:e,disabled:i,disableElevation:d,fullWidth:s,orientation:n,variant:l}=t,g={root:["root",l,n==="vertical"&&"vertical",s&&"fullWidth",d&&"disableElevation"],grouped:["grouped",`grouped${c(n)}`,`grouped${c(l)}`,`grouped${c(l)}${c(n)}`,`grouped${c(l)}${c(e)}`,i&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return F(g,Co,o)},yo=m("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:$o})(({theme:t,ownerState:o})=>r({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${u.grouped}`]:r({minWidth:40,"&:hover":r({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"}),[`& .${u.firstButton},& .${u.middleButton}`]:r({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${u.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${u.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:oo(t.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${u.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${u.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(t.vars||t).palette[o.color].dark},{"&:hover":r({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${u.lastButton},& .${u.middleButton}`]:r({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1})})),Ro=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiButtonGroup"}),{children:d,className:s,color:n="primary",component:l="div",disabled:g=!1,disableElevation:f=!1,disableFocusRipple:R=!1,disableRipple:C=!1,fullWidth:B=!1,orientation:I="horizontal",size:v="medium",variant:k="outlined"}=i,W=_(i,Bo),T=r({},i,{color:n,component:l,disabled:g,disableElevation:f,disableFocusRipple:R,disableRipple:C,fullWidth:B,orientation:I,size:v,variant:k}),h=Do(T),j=p.useMemo(()=>({className:h.grouped,color:n,disabled:g,disableElevation:f,disableFocusRipple:R,disableRipple:C,fullWidth:B,size:v,variant:k}),[n,g,f,R,C,B,v,k,h.grouped]),M=mo(d),$=M.length,U=D=>{const b=D===0,P=D===$-1;return b&&P?"":b?h.firstButton:P?h.lastButton:h.middleButton};return a.jsx(yo,r({as:l,role:"group",className:y(h.root,s),ref:e,ownerState:T},W,{children:a.jsx(vo.Provider,{value:j,children:M.map((D,b)=>a.jsx(bo.Provider,{value:U(b),children:D},b))})}))});function ko(t){return E("MuiDialog",t)}const S=z("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),K=p.createContext({}),Wo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],To=m(to,{name:"MuiDialog",slot:"Backdrop",overrides:(t,o)=>o.backdrop})({zIndex:-1}),jo=t=>{const{classes:o,scroll:e,maxWidth:i,fullWidth:d,fullScreen:s}=t,n={root:["root"],container:["container",`scroll${c(e)}`],paper:["paper",`paperScroll${c(e)}`,`paperWidth${c(String(i))}`,d&&"paperFullWidth",s&&"paperFullScreen"]};return F(n,ko,o)},Mo=m(eo,{name:"MuiDialog",slot:"Root",overridesResolver:(t,o)=>o.root})({"@media print":{position:"absolute !important"}}),Po=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.container,o[`scroll${c(e.scroll)}`]]}})(({ownerState:t})=>r({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Ao=m(X,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`scrollPaper${c(e.scroll)}`],o[`paperWidth${c(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(({theme:t,ownerState:o})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${S.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`,[`&.${S.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${S.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),No=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiDialog"}),d=io(),s={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:g,BackdropProps:f,children:R,className:C,disableEscapeKeyDown:B=!1,fullScreen:I=!1,fullWidth:v=!1,maxWidth:k="sm",onBackdropClick:W,onClick:T,onClose:h,open:j,PaperComponent:M=X,PaperProps:$={},scroll:U="paper",TransitionComponent:D=ro,transitionDuration:b=s,TransitionProps:P}=i,x=_(i,Wo),A=r({},i,{disableEscapeKeyDown:B,fullScreen:I,fullWidth:v,maxWidth:k,scroll:U}),O=jo(A),L=p.useRef(),J=N=>{L.current=N.target===N.currentTarget},Q=N=>{T&&T(N),L.current&&(L.current=null,W&&W(N),h&&h(N,"backdropClick"))},w=ao(l),Z=p.useMemo(()=>({titleId:w}),[w]);return a.jsx(Mo,r({className:y(O.root,C),closeAfterTransition:!0,components:{Backdrop:To},componentsProps:{backdrop:r({transitionDuration:b,as:g},f)},disableEscapeKeyDown:B,onClose:h,open:j,ref:e,onClick:Q,ownerState:A},x,{children:a.jsx(D,r({appear:!0,in:j,timeout:b,role:"presentation"},P,{children:a.jsx(Po,{className:y(O.container),onMouseDown:J,ownerState:A,children:a.jsx(Ao,r({as:M,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":w},$,{className:y(O.paper,$.className),ownerState:A,children:a.jsx(K.Provider,{value:Z,children:R})}))})}))}))});function zo(t){return E("MuiDialogActions",t)}z("MuiDialogActions",["root","spacing"]);const Eo=["className","disableSpacing"],Go=t=>{const{classes:o,disableSpacing:e}=t;return F({root:["root",!e&&"spacing"]},zo,o)},_o=m("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableSpacing&&o.spacing]}})(({ownerState:t})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Fo=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiDialogActions"}),{className:d,disableSpacing:s=!1}=i,n=_(i,Eo),l=r({},i,{disableSpacing:s}),g=Go(l);return a.jsx(_o,r({className:y(g.root,d),ownerState:l,ref:e},n))});function Io(t){return E("MuiDialogContent",t)}z("MuiDialogContent",["root","dividers"]);function Uo(t){return E("MuiDialogTitle",t)}const Oo=z("MuiDialogTitle",["root"]),Lo=["className","dividers"],wo=t=>{const{classes:o,dividers:e}=t;return F({root:["root",e&&"dividers"]},Io,o)},So=m("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.dividers&&o.dividers]}})(({theme:t,ownerState:o})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Oo.root} + &`]:{paddingTop:0}})),Vo=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiDialogContent"}),{className:d,dividers:s=!1}=i,n=_(i,Lo),l=r({},i,{dividers:s}),g=wo(l);return a.jsx(So,r({className:y(g.root,d),ownerState:l,ref:e},n))});function Ho(t){return E("MuiDialogContentText",t)}z("MuiDialogContentText",["root"]);const qo=["children","className"],Yo=t=>{const{classes:o}=t,i=F({root:["root"]},Ho,o);return r({},o,i)},Xo=m(V,{shouldForwardProp:t=>no(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Ko=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiDialogContentText"}),{className:d}=i,s=_(i,qo),n=Yo(s);return a.jsx(Xo,r({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:s,className:y(n.root,d)},i,{classes:n}))}),Jo=["className","id"],Qo=t=>{const{classes:o}=t;return F({root:["root"]},Uo,o)},Zo=m(V,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),ot=p.forwardRef(function(o,e){const i=G({props:o,name:"MuiDialogTitle"}),{className:d,id:s}=i,n=_(i,Jo),l=i,g=Qo(l),{titleId:f=s}=p.useContext(K);return a.jsx(Zo,r({component:"h2",className:y(g.root,d),ownerState:l,ref:e,variant:"h6",id:s??f},n))}),tt=()=>p.useRef({});var H={},et=lo;Object.defineProperty(H,"__esModule",{value:!0});var it=H.default=void 0,at=et(so()),rt=a;it=H.default=(0,at.default)((0,rt.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined");const nt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20width='200'%20height='200'%20style='shape-rendering:%20auto;%20display:%20block;%20background:%20transparent;'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath%20style='transform:scale(0.8);transform-origin:50px%2050px'%20stroke-linecap='round'%20d='M24.3%2030C11.4%2030%205%2043.3%205%2050s6.4%2020%2019.3%2020c19.3%200%2032.1-40%2051.4-40%20C88.6%2030%2095%2043.3%2095%2050s-6.4%2020-19.3%2020C56.4%2070%2043.6%2030%2024.3%2030z'%20stroke-dasharray='42.76482137044271%2042.76482137044271'%20stroke-width='8'%20stroke='%23a31f23'%20fill='none'%3e%3canimate%20values='0;256.58892822265625'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20attributeName='stroke-dashoffset'%3e%3c/animate%3e%3c/path%3e%3cg%3e%3c/g%3e%3c/g%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io%20--%3e%3c/svg%3e",st=({iColumns:t,initialRows:o,setInitialData:e,deleteApi:i,deleteBy:d,refetch:s,setAccordionExpanded:n,getCellClassName:l,fileName:g,disableEdit:f,disableDelete:R,setIsEdit:C,autoSizeColumns:B,isLoading:I})=>{const v=tt(),[k,W]=p.useState(!1),[T,h]=p.useState(null);function j(){return a.jsx(xo,{sx:{justifyContent:"end"},children:a.jsx(ho,{data:o,fileName:g})})}const M=x=>{h(x),W(!0)},$=()=>{W(!1),h(null)},U=x=>{if(window.scrollTo({top:100,behavior:"smooth"}),x.embroideryId){const A=x.threadAdditional?x.threadAdditional.split(",").map(O=>O.trim()):[];e({...x,threadAdditional:A})}else n&&n(!0),C&&C(!0),e(x)},D=async()=>{try{await fo.delete(`${i}${T}`),s()}catch(x){console.error("Error deleting data:",x)}$()},b=[...t,{field:"Action",headerName:"Actions",renderCell:x=>a.jsx("div",{style:{display:"flex"},children:a.jsxs(Ro,{size:"small",variant:"text",children:[f?null:a.jsx(q,{"aria-label":"Edit",onClick:()=>U(x.row),children:a.jsx(uo,{})}),R?null:a.jsx(q,{"aria-label":"delete",color:"primary",onClick:()=>M(x.row[d]),children:a.jsx(po,{})})]})})}],P=x=>{v.current&&v.current.autosizeColumns&&v.current.autosizeColumns({columns:B,includeOutliers:!0,includeHeaders:!0})};return I?a.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[a.jsx("img",{src:nt,alt:"Loading",style:{width:200,height:200}}),a.jsx(V,{alignItems:"center",children:"Please Select The Required Fields"})]}):a.jsxs(co,{sx:{height:500,width:"inherit","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"},"& .bold":{fontWeight:600}},children:[a.jsx(go,{rows:o,columns:b,apiRef:v,autosizeOnMount:!0,getCellClassName:l,onStateChange:P,slots:{toolbar:j},sx:{"--DataGrid-rowBorderColor":"rgb(255 255 255)"}}),a.jsxs(No,{open:k,onClose:$,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[a.jsx(ot,{id:"alert-dialog-title",children:"Confirm Delete"}),a.jsx(Vo,{children:a.jsx(Ko,{id:"alert-dialog-description",children:"Are you sure you want to delete this item?"})}),a.jsxs(Fo,{children:[a.jsx(Y,{onClick:$,children:"Disagree"}),a.jsx(Y,{onClick:D,autoFocus:!0,children:"Agree"})]})]})]})},pt=st;export{Ro as B,No as D,pt as R,ot as a,Vo as b,Ko as c,it as d};
