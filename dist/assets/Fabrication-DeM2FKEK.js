import{m as D,n as $,s as R,am as Pe,y as k,ao as Te,_ as p,ap as Me,aq as Ge,j as a,E as q,ar as se,F as H,o as Fe,x as _,as as ge,at as Be,N as xe,r as ve,i as he,u as we,c as Ue,a4 as Ee,b as qe,a5 as ze,a6 as De,ad as $e,au as ke,C as ee,d as te,ab as He,G as C,D as Oe}from"./index-C1TTrB0-.js";import{r as i}from"./vendor-BXCbSo2_.js";import{b as We,B as Ve,a as _e}from"./axios-B7wrOyLZ.js";import{l as Ye,R as Je}from"./ReuseableDataGrid-HhNFiKBw.js";import{d as Qe}from"./VisibilityOutlined-D5GutfOA.js";import{T as G}from"./TextField-B7aHXDX8.js";import{M as V}from"./Skeleton-CDhxNUY7.js";const Ie=i.createContext({});function Xe(e){return $("MuiAccordion",e)}const J=D("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Ke=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Ze=se(),et=e=>{const{classes:t,square:s,expanded:r,disabled:l,disableGutters:o}=e;return H({root:["root",!s&&"rounded",r&&"expanded",l&&"disabled",!o&&"gutters"],region:["region"]},Xe,t)},tt=R(Pe,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${J.region}`]:t.region},t.root,!s.square&&t.rounded,!s.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${J.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${J.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${J.expanded}`]:{margin:"16px 0"}}}]})),at=i.forwardRef(function(t,s){const r=Ze({props:t,name:"MuiAccordion"}),{children:l,className:o,defaultExpanded:c=!1,disabled:u=!1,disableGutters:b=!1,expanded:x,onChange:f,square:m=!1,slots:v={},slotProps:j={},TransitionComponent:N,TransitionProps:S}=r,y=k(r,Ke),[h,B]=Te({controlled:x,default:c,name:"Accordion",state:"expanded"}),A=i.useCallback(K=>{B(!h),f&&f(K,!h)},[h,f,B]),[w,...P]=i.Children.toArray(l),T=i.useMemo(()=>({expanded:h,disabled:u,disableGutters:b,toggle:A}),[h,u,b,A]),L=p({},r,{square:m,disabled:u,disableGutters:b,expanded:h}),F=et(L),E=p({transition:N},v),Y=p({transition:S},j),[X,W]=Me("transition",{elementType:Ge,externalForwardedProps:{slots:E,slotProps:Y},ownerState:L});return a.jsxs(tt,p({className:q(F.root,o),ref:s,ownerState:L,square:m},y,{children:[a.jsx(Ie.Provider,{value:T,children:w}),a.jsx(X,p({in:h,timeout:"auto"},W,{children:a.jsx("div",{"aria-labelledby":w.props.id,id:w.props["aria-controls"],role:"region",className:F.region,children:P})}))]}))});function ot(e){return $("MuiAccordionDetails",e)}D("MuiAccordionDetails",["root"]);const rt=["className"],st=se(),nt=e=>{const{classes:t}=e;return H({root:["root"]},ot,t)},it=R("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),lt=i.forwardRef(function(t,s){const r=st({props:t,name:"MuiAccordionDetails"}),{className:l}=r,o=k(r,rt),c=r,u=nt(c);return a.jsx(it,p({className:q(u.root,l),ref:s,ownerState:c},o))});function ct(e){return $("MuiAccordionSummary",e)}const O=D("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),dt=["children","className","expandIcon","focusVisibleClassName","onClick"],ut=se(),pt=e=>{const{classes:t,expanded:s,disabled:r,disableGutters:l}=e;return H({root:["root",s&&"expanded",r&&"disabled",!l&&"gutters"],focusVisible:["focusVisible"],content:["content",s&&"expanded",!l&&"contentGutters"],expandIconWrapper:["expandIconWrapper",s&&"expanded"]},ct,t)},mt=R(Fe,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${O.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${O.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${O.disabled})`]:{cursor:"pointer"},variants:[{props:s=>!s.disableGutters,style:{[`&.${O.expanded}`]:{minHeight:64}}}]}}),bt=R("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${O.expanded}`]:{margin:"20px 0"}}}]})),ft=R("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${O.expanded}`]:{transform:"rotate(180deg)"}})),gt=i.forwardRef(function(t,s){const r=ut({props:t,name:"MuiAccordionSummary"}),{children:l,className:o,expandIcon:c,focusVisibleClassName:u,onClick:b}=r,x=k(r,dt),{disabled:f=!1,disableGutters:m,expanded:v,toggle:j}=i.useContext(Ie),N=h=>{j&&j(h),b&&b(h)},S=p({},r,{expanded:v,disabled:f,disableGutters:m}),y=pt(S);return a.jsxs(mt,p({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":v,className:q(y.root,o),focusVisibleClassName:q(y.focusVisible,u),onClick:N,ref:s,ownerState:S},x,{children:[a.jsx(bt,{className:y.content,ownerState:S,children:l}),c&&a.jsx(ft,{className:y.expandIconWrapper,ownerState:S,children:c})]}))}),Q=i.createContext({}),ne=i.createContext({});function xt(e){return $("MuiStep",e)}D("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const vt=["active","children","className","component","completed","disabled","expanded","index","last"],ht=e=>{const{classes:t,orientation:s,alternativeLabel:r,completed:l}=e;return H({root:["root",s,r&&"alternativeLabel",l&&"completed"]},xt,t)},It=R("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation],s.alternativeLabel&&t.alternativeLabel,s.completed&&t.completed]}})(({ownerState:e})=>p({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),ca=i.forwardRef(function(t,s){const r=_({props:t,name:"MuiStep"}),{active:l,children:o,className:c,component:u="div",completed:b,disabled:x,expanded:f=!1,index:m,last:v}=r,j=k(r,vt),{activeStep:N,connector:S,alternativeLabel:y,orientation:h,nonLinear:B}=i.useContext(Q);let[A=!1,w=!1,P=!1]=[l,b,x];N===m?A=l!==void 0?l:!0:!B&&N>m?w=b!==void 0?b:!0:!B&&N<m&&(P=x!==void 0?x:!0);const T=i.useMemo(()=>({index:m,last:v,expanded:f,icon:m+1,active:A,completed:w,disabled:P}),[m,v,f,A,w,P]),L=p({},r,{active:A,orientation:h,alternativeLabel:y,completed:w,disabled:P,expanded:f,component:u}),F=ht(L),E=a.jsxs(It,p({as:u,className:q(F.root,c),ref:s,ownerState:L},j,{children:[S&&y&&m!==0?S:null,o]}));return a.jsx(ne.Provider,{value:T,children:S&&!y&&m!==0?a.jsxs(i.Fragment,{children:[S,E]}):E})}),Ct=ge(a.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),St=ge(a.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function yt(e){return $("MuiStepIcon",e)}const ae=D("MuiStepIcon",["root","active","completed","error","text"]);var fe;const At=["active","className","completed","error","icon"],jt=e=>{const{classes:t,active:s,completed:r,error:l}=e;return H({root:["root",s&&"active",r&&"completed",l&&"error"],text:["text"]},yt,t)},oe=R(Be,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${ae.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${ae.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${ae.error}`]:{color:(e.vars||e).palette.error.main}})),Lt=R("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Nt=i.forwardRef(function(t,s){const r=_({props:t,name:"MuiStepIcon"}),{active:l=!1,className:o,completed:c=!1,error:u=!1,icon:b}=r,x=k(r,At),f=p({},r,{active:l,completed:c,error:u}),m=jt(f);if(typeof b=="number"||typeof b=="string"){const v=q(o,m.root);return u?a.jsx(oe,p({as:St,className:v,ref:s,ownerState:f},x)):c?a.jsx(oe,p({as:Ct,className:v,ref:s,ownerState:f},x)):a.jsxs(oe,p({className:v,ref:s,ownerState:f},x,{children:[fe||(fe=a.jsx("circle",{cx:"12",cy:"12",r:"12"})),a.jsx(Lt,{className:m.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:f,children:b})]}))}return b});function Rt(e){return $("MuiStepLabel",e)}const z=D("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Pt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Tt=e=>{const{classes:t,orientation:s,active:r,completed:l,error:o,disabled:c,alternativeLabel:u}=e;return H({root:["root",s,o&&"error",c&&"disabled",u&&"alternativeLabel"],label:["label",r&&"active",l&&"completed",o&&"error",c&&"disabled",u&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",l&&"completed",o&&"error",c&&"disabled",u&&"alternativeLabel"],labelContainer:["labelContainer",u&&"alternativeLabel"]},Rt,t)},Mt=R("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation]]}})(({ownerState:e})=>p({display:"flex",alignItems:"center",[`&.${z.alternativeLabel}`]:{flexDirection:"column"},[`&.${z.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Gt=R("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>p({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${z.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.alternativeLabel}`]:{marginTop:16},[`&.${z.error}`]:{color:(e.vars||e).palette.error.main}})),Ft=R("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${z.alternativeLabel}`]:{paddingRight:0}})),Bt=R("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${z.alternativeLabel}`]:{textAlign:"center"}})),wt=i.forwardRef(function(t,s){var r;const l=_({props:t,name:"MuiStepLabel"}),{children:o,className:c,componentsProps:u={},error:b=!1,icon:x,optional:f,slotProps:m={},StepIconComponent:v,StepIconProps:j}=l,N=k(l,Pt),{alternativeLabel:S,orientation:y}=i.useContext(Q),{active:h,disabled:B,completed:A,icon:w}=i.useContext(ne),P=x||w;let T=v;P&&!T&&(T=Nt);const L=p({},l,{active:h,alternativeLabel:S,completed:A,disabled:B,error:b,orientation:y}),F=Tt(L),E=(r=m.label)!=null?r:u.label;return a.jsxs(Mt,p({className:q(F.root,c),ref:s,ownerState:L},N,{children:[P||T?a.jsx(Ft,{className:F.iconContainer,ownerState:L,children:a.jsx(T,p({completed:A,active:h,error:b,icon:P},j))}):null,a.jsxs(Bt,{className:F.labelContainer,ownerState:L,children:[o?a.jsx(Gt,p({ownerState:L},E,{className:q(F.label,E==null?void 0:E.className),children:o})):null,f]})]}))});wt.muiName="StepLabel";function Ut(e){return $("MuiStepConnector",e)}D("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Et=["className"],qt=e=>{const{classes:t,orientation:s,alternativeLabel:r,active:l,completed:o,disabled:c}=e,u={root:["root",s,r&&"alternativeLabel",l&&"active",o&&"completed",c&&"disabled"],line:["line",`line${xe(s)}`]};return H(u,Ut,t)},zt=R("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation],s.alternativeLabel&&t.alternativeLabel,s.completed&&t.completed]}})(({ownerState:e})=>p({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Dt=R("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.line,t[`line${xe(s.orientation)}`]]}})(({ownerState:e,theme:t})=>{const s=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return p({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:s},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),$t=i.forwardRef(function(t,s){const r=_({props:t,name:"MuiStepConnector"}),{className:l}=r,o=k(r,Et),{alternativeLabel:c,orientation:u="horizontal"}=i.useContext(Q),{active:b,disabled:x,completed:f}=i.useContext(ne),m=p({},r,{alternativeLabel:c,orientation:u,active:b,completed:f,disabled:x}),v=qt(m);return a.jsx(zt,p({className:q(v.root,l),ref:s,ownerState:m},o,{children:a.jsx(Dt,{className:v.line,ownerState:m})}))});function kt(e){return $("MuiStepper",e)}D("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Ht=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Ot=e=>{const{orientation:t,alternativeLabel:s,classes:r}=e;return H({root:["root",t,s&&"alternativeLabel"]},kt,r)},Wt=R("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation],s.alternativeLabel&&t.alternativeLabel]}})(({ownerState:e})=>p({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),Vt=a.jsx($t,{}),da=i.forwardRef(function(t,s){const r=_({props:t,name:"MuiStepper"}),{activeStep:l=0,alternativeLabel:o=!1,children:c,className:u,component:b="div",connector:x=Vt,nonLinear:f=!1,orientation:m="horizontal"}=r,v=k(r,Ht),j=p({},r,{alternativeLabel:o,orientation:m,component:b}),N=Ot(j),S=i.Children.toArray(c).filter(Boolean),y=S.map((B,A)=>i.cloneElement(B,p({index:A,last:A+1===S.length},B.props))),h=i.useMemo(()=>({activeStep:l,alternativeLabel:o,connector:x,nonLinear:f,orientation:m}),[l,o,x,f,m]);return a.jsx(Q.Provider,{value:h,children:a.jsx(Wt,p({as:b,ownerState:j,className:q(N.root,u),ref:s},v,{children:y}))})});var ie={},_t=he;Object.defineProperty(ie,"__esModule",{value:!0});var Ce=ie.default=void 0,Yt=_t(ve()),Jt=a;Ce=ie.default=(0,Yt.default)((0,Jt.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined");var le={},Qt=he;Object.defineProperty(le,"__esModule",{value:!0});var re=le.default=void 0,Xt=Qt(ve()),Kt=a;re=le.default=(0,Xt.default)((0,Kt.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");const Zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1ElEQVR4nO2bsU5UQRSGpxELXGNhI2AMYNRYWeojQFS0E30CBU0IjfEdTDBWGB+AGOwUCjtJjFgYExJFa1/AhYbI+pmT/ZeMu2B2752d2YX5yrs75z/zn7kzd3PPOpfJZDIdAJwFZoFV4BuwTXts6/srwAww4voJYBhYBH4ThhrwCjjneh3gJlBV4jvAEnAHuAgMthljUN+f1niLg+LecL0K8FDVQhUbDRR3DFj2VsOs69HK14BdYK5LGvOKX+uplUD9nm8s+7kua5kJxi/gjOsFgJeNZR9J77X0FmPotXPU7WqjGo2kOS49O2WGY2geiM55Y8lFRJus8SCmbgt6WDGmXUSAe9J9E1O3BeCHEjnvIqLnBGMzpm4LwJYSOeEiYnrS3Yqp20LjWdUdMe09sgHCHTHtnjQAWCMMa4WTOCQG0JcGhCAbILrnWEC6oZ0NEEmrkFI7GyCSViGldjZAJK1CSu1sgEhahZTa2QCRtAoptbMBImkVUmpnA0TSKqTUzgaIpFVIqZ0NEEEcA46ra+RjBw1Szdhb4E/AZOlqlZxPRwPUNPGFsEz2hQHUK9+YvLW7TQGVggkNAI8Va71UshENeORN/lSApCqKVy2VbEQD1nV5KkBCtgKeNK+Ag0xJYUBVYyr7vDL/Z9mXfHPzB5jwYl3V9Y3UBnzXmAv/M6WEATs6RSaaYj3X50/DTL24ASvNLTJK2LgVMjkv/hUZY81Zl1MbMNPcJOU1Tm2G2AT3mfxPxV8IGbuoASNqV7OKjHkb12fPhNvAyZLtMNe07Bt9w++AY0VjBjPAAF5o3LJ3bcgzISRm9kI3Jl/GgCFv45v3rg/oFvngnQxFsLEbtuGFvueDGGBY87LXLL1nQr9R2ABv82u0y1s/77g7SgYYwHV1cqMNy1pa7wKXYvcSJjHAAE4DzwL+ZSY6LgTUfxLfB94CX0tuhDF5H8SATCaTybjDw18JVhz+QhIOiQAAAABJRU5ErkJggg==",ea=()=>{const{user:e}=we(),[t,s]=i.useState({}),[r,l]=i.useState([]),[o,c]=i.useState({fabricationId:0,designId:"",planningHeaderId:"",batchNo:"",baseColorId:"",baseColorName:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",createdOn:new Date().toISOString(),createdBy:e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId});i.useEffect(()=>{c({fabricationId:r.fabricationId||0,designId:r.designId||"",planningHeaderId:r.planningHeaderId||"",batchNo:r.batchNo||"",baseColorId:r.baseColorId||"",baseColorName:r.baseColorName||"",fabricId:r.fabricId||"",poPcs:r.poPcs||"",quantity:r.quantity||"",rate:r.rate||"",uomId:r.uomId||"",total:r.total||"",unitPrice:r.unitPrice||"0",gst:r.gst||"",totalInclGst:r.totalInclGst||"",createdOn:(r==null?void 0:r.createdOn)||new Date().toISOString(),createdBy:(r==null?void 0:r.createdBy)||e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId})},[r]);const{enqueueSnackbar:u}=Ue(),[b,x]=i.useState(!1),f=(n,d)=>{x(!b)},[m,v]=i.useState(!1),{data:j}=Ee();console.log(j);const[N,S]=i.useState(""),{data:y}=qe(),{data:h,refetch:B}=ze(N,{skip:!N}),{data:A,refetch:w}=De(o.designId,{skip:!o.designId}),{data:P}=$e(o.planningHeaderId,{skip:!o.planningHeaderId}),{data:T,refetch:L}=ke(o.planningHeaderId,{skip:!o.planningHeaderId});console.log("fabricRequisitionData",T);const[F,E]=i.useState([]),[Y,X]=i.useState([]),[W,K]=i.useState([]),[Se,ye]=i.useState([]),[Z,Ae]=i.useState([]);console.log("planningHeaderId",o.planningHeaderId),console.log("Fabrications",W),i.useEffect(()=>{h&&E(h.result)},[h]),i.useEffect(()=>{A&&X(A.result)},[A]),i.useEffect(()=>{P&&K(P.result)},[P]),i.useEffect(()=>{T&&Ae(T.result.map((n,d)=>({id:d,...n})))},[T,L]),i.useEffect(()=>{if(y){const n=y.result[0];ye(n.uomList)}},[y]);const ce=(j==null?void 0:j.result)||[];i.useEffect(()=>{const n=()=>{const g=parseFloat(o.quantity)||0,U=parseFloat(o.rate)||0;return(g*U).toFixed(2)};c(g=>({...g,total:n()}));const d=()=>{const g=parseFloat(o.total)||0,U=parseFloat(o.gst)||0;return(g*(1+U/100)).toFixed(2)};c(g=>({...g,totalInclGst:d()}));const I=()=>{const g=parseFloat(o.total)||0,U=parseFloat(o.poPcs)||0,be=(g/U).toFixed(2);return isNaN(be)?0:be};c(g=>({...g,unitPrice:I()}))},[o.quantity,o.rate,o.total,o.gst]);const M=n=>{const{name:d,value:I}=n.target;if(d==="collectionId")ce.find(g=>g.collectionId===parseInt(I)),S(I),v(!0),c({...o,designId:"",baseColorId:"",planningHeaderId:"",batchNo:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",collectionId:I});else if(d==="designId"){const g=F.find(U=>U.designId===parseInt(I));c({...o,planningHeaderId:"",batchNo:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",designId:I,baseColorId:g?g.colorId:"",baseColorName:g?g.colorName:""})}else if(d==="batchNo"){const g=Y.find(U=>U.batchNo===I);c({...o,fabricId:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",batchNo:I,planningHeaderId:g?g.planningHeaderId:"",poPcs:g?g.poPcs:""}),x(!0),v(!1)}else if(d==="fabricId"){const g=W.find(U=>U.fabricId===I);c({...o,fabricId:I,quantity:g?g.total:""})}else c({...o,[d]:I})},de=Z.reduce((n,d)=>n+(parseFloat(d.total)||0),0).toFixed(2),ue=parseFloat(de).toLocaleString(),pe=Z.reduce((n,d)=>n+(parseFloat(d.totalInclGst)||0),0).toFixed(2),me=parseFloat(pe).toLocaleString();console.log("overallTotal",de),console.log("overallTotalIncGst",pe),console.log("localizedTotal",ue),console.log("localizedTotalIncGst",me);const je=[...Z,{id:"TOTAL_FABRIC",label:"Total",total:ue,totalInclGst:me}],Le=[{field:"designNo",headerName:"Design",colSpan:(n,d)=>{if(d.id==="TOTAL_FABRIC")return 6},valueGetter:(n,d)=>d.id==="TOTAL_FABRIC"?d.label:n},{field:"fabricName",headerName:"Fabric"},{field:"poPcs",headerName:"PO. Pieces"},{field:"quantity",headerName:"Quantity"},{field:"rate",headerName:"Rate"},{field:"uomName",headerName:"UOM"},{field:"total",headerName:"Total",valueGetter:n=>n.toLocaleString()},{field:"unitPrice",headerName:"Unit Price",colSpan:(n,d)=>{if(d.id==="TOTAL_FABRIC")return 2},valueGetter:(n,d)=>d.id==="TOTAL_FABRIC"?"Total Including GST":n},{field:"gst",headerName:"GST"},{field:"totalInclGst",headerName:"Total Inc. GST",valueGetter:n=>n.toLocaleString(),colSpan:(n,d)=>{if(d.id==="TOTAL_FABRIC")return 2}}],Ne=async()=>{const n=Re();if(Object.keys(n).length>0){s(n);return}try{const d=await _e.post("https://gecxc.com:4041/api/Fabrication/SaveFabrication",o);console.log("Save response:",d.data),d.data.success?u("Fabrication saved successfully!",{variant:"success",autoHideDuration:5e3}):(u(`${d.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",d.data.message)),c(I=>({designId:I.designId,batchNo:I.batchNo,planningHeaderId:I.planningHeaderId,fabricationId:0,baseColorId:I.baseColorId,baseColorName:I.baseColorName,fabricId:"",poPcs:I.poPcs,quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",createdOn:new Date().toISOString(),createdBy:e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId})),L()}catch(d){console.error("Error saving data:",d),u("Fabrication not saved successfully!",{variant:"error",autoHideDuration:5e3})}},Re=()=>{const n={};return o.fabricId||(n.fabricId="fabricId is required"),o.gst||(n.gst="gst is required"),o.uomId||(n.uomId="uomId is required"),o.rate||(n.rate="rate is required"),n};return console.log("formData",o),a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"CardHeader",children:a.jsxs(ee,{variant:"outlined",children:[a.jsx(te,{className:"css-4rfrnx-MuiCardHeader-root",avatar:a.jsx(He,{src:Zt,sx:{background:"transparent"}}),title:"Fabric Requisition",titleTypographyProps:{style:{color:"white"}}}),a.jsxs(C,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[a.jsxs(C,{item:!0,xs:12,md:3,children:[a.jsx(G,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:N,onChange:M,size:"small",required:!0,children:ce.map(n=>a.jsx(V,{value:n.collectionId,children:n.collectionName},n.collectionId))})," "]}),a.jsx(C,{item:!0,xs:12,md:3,children:a.jsx(G,{fullWidth:!0,select:!0,label:"Select Design",name:"designId",value:o.designId,onChange:M,size:"small",required:!0,children:F.map(n=>a.jsx(V,{value:n.designId,children:n.designNo},n.designId))})}),a.jsxs(C,{item:!0,xs:12,md:3,children:[a.jsx(G,{fullWidth:!0,select:!0,label:"Batch No.",name:"batchNo",value:o.batchNo,onChange:M,size:"small",required:!0,children:Y.map(n=>a.jsx(V,{value:n.batchNo,children:n.batchNo},n.batchNo))})," "]}),a.jsx(C,{item:!0,xs:12,md:3,children:a.jsx(G,{label:"Base Color",fullWidth:!0,size:"small",name:"baseColorName",value:o.baseColorName,onChange:M,disabled:!0})})]})]})}),a.jsxs(ee,{variant:"outlined",children:[a.jsx(te,{className:"css-4rfrnx-MuiCardHeader-root",avatar:a.jsx(Ce,{}),title:"Add Fabric Requisition",titleTypographyProps:{style:{color:"white"}},action:a.jsx(We,{onClick:f,sx:{mt:"-18px"},children:a.jsx(re,{style:{color:"white"}})}),sx:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),a.jsxs(at,{expanded:b,onChange:f,sx:{},children:[a.jsx(gt,{expandIcon:a.jsx(re,{}),"aria-controls":"panel1-content",id:"panel1-header",sx:{display:"none"}}),a.jsx(lt,{children:a.jsxs(C,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[a.jsx(C,{item:!0,xs:12,md:3,children:a.jsx(G,{fullWidth:!0,select:!0,label:"Select Fabric",defaultValue:"",size:"small",name:"fabricId",value:o.fabricId,onChange:M,required:!0,error:!!t.fabricId,helperText:t.fabricId,children:W.map(n=>a.jsx(V,{value:n.fabricId,children:n.fabric},n.fabricId))})}),a.jsx(C,{item:!0,xs:12,md:3,children:a.jsx(G,{fullWidth:!0,select:!0,label:"UOM",defaultValue:"",size:"small",name:"uomId",value:o.uomId,onChange:M,required:!0,error:!!t.uomId,helperText:t.uomId,children:Se.map(n=>a.jsx(V,{value:n.lookUpId,children:n.lookUpName},n.lookUpId))})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"Po Pcs",fullWidth:!0,type:"number",size:"small",name:"poPcs",value:o.poPcs,onChange:M,disabled:!0})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"Quantity",fullWidth:!0,size:"small",type:"number",name:"quantity",value:o.quantity,onChange:M})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"Rate",fullWidth:!0,size:"small",type:"number",name:"rate",value:o.rate,onChange:M,required:!0,error:!!t.rate,helperText:t.rate})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"Total",fullWidth:!0,size:"small",type:"number",name:"total",value:o.total,onChange:M})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"Unit Price",fullWidth:!0,size:"small",name:"unitPrice",value:o.unitPrice,onChange:M})}),a.jsx(C,{item:!0,xs:12,md:1.5,children:a.jsx(G,{label:"GST",fullWidth:!0,size:"small",type:"number",name:"gst",value:o.gst,onChange:M,required:!0,error:!!t.gst,helperText:t.gst})}),a.jsx(C,{item:!0,xs:12,md:3,children:a.jsx(G,{label:"Total Inc GST.",fullWidth:!0,size:"small",type:"number",name:"totalInclGst",value:o.totalInclGst,onChange:M})}),a.jsx(C,{item:!0,xs:12,textAlign:"right",children:a.jsx(Ve,{variant:"contained",size:"small",onClick:Ne,children:"Save"})})]})})]})]}),a.jsx(C,{item:!0,xs:12,md:12,children:a.jsx(Oe,{sx:{height:1,width:"100%",marginTop:1,marginBottom:0}})}),a.jsxs(ee,{variant:"outlined",children:[a.jsx(te,{className:"css-4rfrnx-MuiCardHeader-root",avatar:a.jsx(Qe,{}),title:"View",titleTypographyProps:{style:{color:"white"}}}),a.jsx(C,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:a.jsx(C,{sx:{marginTop:2},item:!0,xs:12,children:m?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsx("img",{src:Ye,alt:"Loading",style:{width:200,height:200}})}):a.jsx(Je,{iColumns:Le,initialRows:je,setInitialData:l,deleteApi:"https://gecxc.com:4041/api/Fabrication/DeleteFabricByFabricId?fabricationId=",deleteBy:"fabricationId",refetch:L,setAccordionExpanded:x,fileName:"Fabrication Requistion List"})})})]})]})},ua=ea;export{at as A,ua as F,da as S,ca as a,wt as b,re as c,Ce as d,gt as e,lt as f};
