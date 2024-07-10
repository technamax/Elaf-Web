import{o as O,p as z,s as j,ap as Me,z as D,A as H,as as Te,_ as b,at as Be,au as Fe,j as o,H as U,I as $,q as Ge,av as ge,aw as we,P as ve,r as he,i as Ie,u as ke,c as Ue,a7 as qe,b as Ee,a8 as Oe,a9 as ze,ag as De,ax as He,C as oe,d as ae,ae as $e,G as S,D as We}from"./index-C7VmP1sn.js";import{r as l}from"./vendor-BXCbSo2_.js";import{I as Ve,B as _e,a as Ye}from"./axios-sajpI7HX.js";import{d as Je,R as Qe}from"./ReuseableDataGrid-D6nBr4pK.js";import{T as B}from"./TextField-47SmC6NA.js";import{M as V}from"./Skeleton-BTBpQPPV.js";const Ce=l.createContext({});function Xe(e){return z("MuiAccordion",e)}const J=O("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Ke=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Ze=e=>{const{classes:t,square:r,expanded:i,disabled:c,disableGutters:s}=e;return $({root:["root",!r&&"rounded",i&&"expanded",c&&"disabled",!s&&"gutters"],region:["region"]},Xe,t)},et=j(Me,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${J.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${J.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${J.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${J.expanded}`]:{margin:"16px 0"}}}]})),tt=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiAccordion"}),{children:c,className:s,defaultExpanded:f=!1,disabled:a=!1,disableGutters:d=!1,expanded:g,onChange:x,square:p=!1,slots:v={},slotProps:F={},TransitionComponent:N,TransitionProps:h}=i,y=H(i,Ke),[I,P]=Te({controlled:g,default:f,name:"Accordion",state:"expanded"}),L=l.useCallback(K=>{P(!I),x&&x(K,!I)},[I,x,P]),[w,...R]=l.Children.toArray(c),q=l.useMemo(()=>({expanded:I,disabled:a,disableGutters:d,toggle:L}),[I,a,d,L]),A=b({},i,{square:p,disabled:a,disableGutters:d,expanded:I}),M=Ze(A),G=b({transition:N},v),_=b({transition:h},F),[X,Y]=Be("transition",{elementType:Fe,externalForwardedProps:{slots:G,slotProps:_},ownerState:A});return o.jsxs(et,b({className:U(M.root,s),ref:r,ownerState:A,square:p},y,{children:[o.jsx(Ce.Provider,{value:q,children:w}),o.jsx(X,b({in:I,timeout:"auto"},Y,{children:o.jsx("div",{"aria-labelledby":w.props.id,id:w.props["aria-controls"],role:"region",className:M.region,children:R})}))]}))});function ot(e){return z("MuiAccordionDetails",e)}O("MuiAccordionDetails",["root"]);const at=["className"],rt=e=>{const{classes:t}=e;return $({root:["root"]},ot,t)},nt=j("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),st=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiAccordionDetails"}),{className:c}=i,s=H(i,at),f=i,a=rt(f);return o.jsx(nt,b({className:U(a.root,c),ref:r,ownerState:f},s))});function it(e){return z("MuiAccordionSummary",e)}const W=O("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),lt=["children","className","expandIcon","focusVisibleClassName","onClick"],ct=e=>{const{classes:t,expanded:r,disabled:i,disableGutters:c}=e;return $({root:["root",r&&"expanded",i&&"disabled",!c&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!c&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},it,t)},dt=j(Ge,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${W.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${W.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${W.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${W.expanded}`]:{minHeight:64}}}]}}),ut=j("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${W.expanded}`]:{margin:"20px 0"}}}]})),pt=j("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${W.expanded}`]:{transform:"rotate(180deg)"}})),bt=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiAccordionSummary"}),{children:c,className:s,expandIcon:f,focusVisibleClassName:a,onClick:d}=i,g=H(i,lt),{disabled:x=!1,disableGutters:p,expanded:v,toggle:F}=l.useContext(Ce),N=I=>{F&&F(I),d&&d(I)},h=b({},i,{expanded:v,disabled:x,disableGutters:p}),y=ct(h);return o.jsxs(dt,b({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":v,className:U(y.root,s),focusVisibleClassName:U(y.focusVisible,a),onClick:N,ref:r,ownerState:h},g,{children:[o.jsx(ut,{className:y.content,ownerState:h,children:c}),f&&o.jsx(pt,{className:y.expandIconWrapper,ownerState:h,children:f})]}))}),Q=l.createContext({}),ie=l.createContext({});function mt(e){return z("MuiStep",e)}O("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const ft=["active","children","className","component","completed","disabled","expanded","index","last"],xt=e=>{const{classes:t,orientation:r,alternativeLabel:i,completed:c}=e;return $({root:["root",r,i&&"alternativeLabel",c&&"completed"]},mt,t)},gt=j("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(({ownerState:e})=>b({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),no=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiStep"}),{active:c,children:s,className:f,component:a="div",completed:d,disabled:g,expanded:x=!1,index:p,last:v}=i,F=H(i,ft),{activeStep:N,connector:h,alternativeLabel:y,orientation:I,nonLinear:P}=l.useContext(Q);let[L=!1,w=!1,R=!1]=[c,d,g];N===p?L=c!==void 0?c:!0:!P&&N>p?w=d!==void 0?d:!0:!P&&N<p&&(R=g!==void 0?g:!0);const q=l.useMemo(()=>({index:p,last:v,expanded:x,icon:p+1,active:L,completed:w,disabled:R}),[p,v,x,L,w,R]),A=b({},i,{active:L,orientation:I,alternativeLabel:y,completed:w,disabled:R,expanded:x,component:a}),M=xt(A),G=o.jsxs(gt,b({as:a,className:U(M.root,f),ref:r,ownerState:A},F,{children:[h&&y&&p!==0?h:null,s]}));return o.jsx(ie.Provider,{value:q,children:h&&!y&&p!==0?o.jsxs(l.Fragment,{children:[h,G]}):G})}),vt=ge(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),ht=ge(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function It(e){return z("MuiStepIcon",e)}const re=O("MuiStepIcon",["root","active","completed","error","text"]);var xe;const Ct=["active","className","completed","error","icon"],St=e=>{const{classes:t,active:r,completed:i,error:c}=e;return $({root:["root",r&&"active",i&&"completed",c&&"error"],text:["text"]},It,t)},ne=j(we,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${re.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${re.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${re.error}`]:{color:(e.vars||e).palette.error.main}})),yt=j("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Lt=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiStepIcon"}),{active:c=!1,className:s,completed:f=!1,error:a=!1,icon:d}=i,g=H(i,Ct),x=b({},i,{active:c,completed:f,error:a}),p=St(x);if(typeof d=="number"||typeof d=="string"){const v=U(s,p.root);return a?o.jsx(ne,b({as:ht,className:v,ref:r,ownerState:x},g)):f?o.jsx(ne,b({as:vt,className:v,ref:r,ownerState:x},g)):o.jsxs(ne,b({className:v,ref:r,ownerState:x},g,{children:[xe||(xe=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx(yt,{className:p.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:x,children:d})]}))}return d});function At(e){return z("MuiStepLabel",e)}const E=O("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),jt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Nt=e=>{const{classes:t,orientation:r,active:i,completed:c,error:s,disabled:f,alternativeLabel:a}=e;return $({root:["root",r,s&&"error",f&&"disabled",a&&"alternativeLabel"],label:["label",i&&"active",c&&"completed",s&&"error",f&&"disabled",a&&"alternativeLabel"],iconContainer:["iconContainer",i&&"active",c&&"completed",s&&"error",f&&"disabled",a&&"alternativeLabel"],labelContainer:["labelContainer",a&&"alternativeLabel"]},At,t)},Pt=j("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation]]}})(({ownerState:e})=>b({display:"flex",alignItems:"center",[`&.${E.alternativeLabel}`]:{flexDirection:"column"},[`&.${E.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Rt=j("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>b({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${E.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.alternativeLabel}`]:{marginTop:16},[`&.${E.error}`]:{color:(e.vars||e).palette.error.main}})),Mt=j("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${E.alternativeLabel}`]:{paddingRight:0}})),Tt=j("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${E.alternativeLabel}`]:{textAlign:"center"}})),Bt=l.forwardRef(function(t,r){var i;const c=D({props:t,name:"MuiStepLabel"}),{children:s,className:f,componentsProps:a={},error:d=!1,icon:g,optional:x,slotProps:p={},StepIconComponent:v,StepIconProps:F}=c,N=H(c,jt),{alternativeLabel:h,orientation:y}=l.useContext(Q),{active:I,disabled:P,completed:L,icon:w}=l.useContext(ie),R=g||w;let q=v;R&&!q&&(q=Lt);const A=b({},c,{active:I,alternativeLabel:h,completed:L,disabled:P,error:d,orientation:y}),M=Nt(A),G=(i=p.label)!=null?i:a.label;return o.jsxs(Pt,b({className:U(M.root,f),ref:r,ownerState:A},N,{children:[R||q?o.jsx(Mt,{className:M.iconContainer,ownerState:A,children:o.jsx(q,b({completed:L,active:I,error:d,icon:R},F))}):null,o.jsxs(Tt,{className:M.labelContainer,ownerState:A,children:[s?o.jsx(Rt,b({ownerState:A},G,{className:U(M.label,G==null?void 0:G.className),children:s})):null,x]})]}))});Bt.muiName="StepLabel";function Ft(e){return z("MuiStepConnector",e)}O("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Gt=["className"],wt=e=>{const{classes:t,orientation:r,alternativeLabel:i,active:c,completed:s,disabled:f}=e,a={root:["root",r,i&&"alternativeLabel",c&&"active",s&&"completed",f&&"disabled"],line:["line",`line${ve(r)}`]};return $(a,Ft,t)},kt=j("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(({ownerState:e})=>b({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Ut=j("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.line,t[`line${ve(r.orientation)}`]]}})(({ownerState:e,theme:t})=>{const r=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return b({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:r},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),qt=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiStepConnector"}),{className:c}=i,s=H(i,Gt),{alternativeLabel:f,orientation:a="horizontal"}=l.useContext(Q),{active:d,disabled:g,completed:x}=l.useContext(ie),p=b({},i,{alternativeLabel:f,orientation:a,active:d,completed:x,disabled:g}),v=wt(p);return o.jsx(kt,b({className:U(v.root,c),ref:r,ownerState:p},s,{children:o.jsx(Ut,{className:v.line,ownerState:p})}))});function Et(e){return z("MuiStepper",e)}O("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const Ot=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],zt=e=>{const{orientation:t,nonLinear:r,alternativeLabel:i,classes:c}=e;return $({root:["root",t,r&&"nonLinear",i&&"alternativeLabel"]},Et,c)},Dt=j("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.nonLinear&&t.nonLinear]}})(({ownerState:e})=>b({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),Ht=o.jsx(qt,{}),so=l.forwardRef(function(t,r){const i=D({props:t,name:"MuiStepper"}),{activeStep:c=0,alternativeLabel:s=!1,children:f,className:a,component:d="div",connector:g=Ht,nonLinear:x=!1,orientation:p="horizontal"}=i,v=H(i,Ot),F=b({},i,{nonLinear:x,alternativeLabel:s,orientation:p,component:d}),N=zt(F),h=l.Children.toArray(f).filter(Boolean),y=h.map((P,L)=>l.cloneElement(P,b({index:L,last:L+1===h.length},P.props))),I=l.useMemo(()=>({activeStep:c,alternativeLabel:s,connector:g,nonLinear:x,orientation:p}),[c,s,g,x,p]);return o.jsx(Q.Provider,{value:I,children:o.jsx(Dt,b({as:d,ownerState:F,className:U(N.root,a),ref:r},v,{children:y}))})});var le={},$t=Ie;Object.defineProperty(le,"__esModule",{value:!0});var Se=le.default=void 0,Wt=$t(he()),Vt=o;Se=le.default=(0,Wt.default)((0,Vt.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined");var ce={},_t=Ie;Object.defineProperty(ce,"__esModule",{value:!0});var se=ce.default=void 0,Yt=_t(he()),Jt=o;se=ce.default=(0,Yt.default)((0,Jt.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");const Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1ElEQVR4nO2bsU5UQRSGpxELXGNhI2AMYNRYWeojQFS0E30CBU0IjfEdTDBWGB+AGOwUCjtJjFgYExJFa1/AhYbI+pmT/ZeMu2B2752d2YX5yrs75z/zn7kzd3PPOpfJZDIdAJwFZoFV4BuwTXts6/srwAww4voJYBhYBH4ThhrwCjjneh3gJlBV4jvAEnAHuAgMthljUN+f1niLg+LecL0K8FDVQhUbDRR3DFj2VsOs69HK14BdYK5LGvOKX+uplUD9nm8s+7kua5kJxi/gjOsFgJeNZR9J77X0FmPotXPU7WqjGo2kOS49O2WGY2geiM55Y8lFRJus8SCmbgt6WDGmXUSAe9J9E1O3BeCHEjnvIqLnBGMzpm4LwJYSOeEiYnrS3Yqp20LjWdUdMe09sgHCHTHtnjQAWCMMa4WTOCQG0JcGhCAbILrnWEC6oZ0NEEmrkFI7GyCSViGldjZAJK1CSu1sgEhahZTa2QCRtAoptbMBImkVUmpnA0TSKqTUzgaIpFVIqZ0NEEEcA46ra+RjBw1Szdhb4E/AZOlqlZxPRwPUNPGFsEz2hQHUK9+YvLW7TQGVggkNAI8Va71UshENeORN/lSApCqKVy2VbEQD1nV5KkBCtgKeNK+Ag0xJYUBVYyr7vDL/Z9mXfHPzB5jwYl3V9Y3UBnzXmAv/M6WEATs6RSaaYj3X50/DTL24ASvNLTJK2LgVMjkv/hUZY81Zl1MbMNPcJOU1Tm2G2AT3mfxPxV8IGbuoASNqV7OKjHkb12fPhNvAyZLtMNe07Bt9w++AY0VjBjPAAF5o3LJ3bcgzISRm9kI3Jl/GgCFv45v3rg/oFvngnQxFsLEbtuGFvueDGGBY87LXLL1nQr9R2ABv82u0y1s/77g7SgYYwHV1cqMNy1pa7wKXYvcSJjHAAE4DzwL+ZSY6LgTUfxLfB94CX0tuhDF5H8SATCaTybjDw18JVhz+QhIOiQAAAABJRU5ErkJggg==",Xt=()=>{const{user:e}=ke(),[t,r]=l.useState({}),[i,c]=l.useState(!0),[s,f]=l.useState([]),[a,d]=l.useState({fabricationId:0,designId:"",planningHeaderId:"",batchNo:"",baseColorId:"",baseColorName:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",createdOn:new Date().toISOString(),createdBy:e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId});l.useEffect(()=>{d({fabricationId:s.fabricationId||0,designId:s.designId||"",planningHeaderId:s.planningHeaderId||"",batchNo:s.batchNo||"",baseColorId:s.baseColorId||"",baseColorName:s.baseColorName||"",fabricId:s.fabricId||"",poPcs:s.poPcs||"",quantity:s.quantity||"",rate:s.rate||"",uomId:s.uomId||"",total:s.total||"",unitPrice:s.unitPrice||"0",gst:s.gst||"",totalInclGst:s.totalInclGst||"",createdOn:(s==null?void 0:s.createdOn)||new Date().toISOString(),createdBy:(s==null?void 0:s.createdBy)||e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId})},[s]);const{enqueueSnackbar:g}=Ue(),[x,p]=l.useState(!1),v=(n,u)=>{p(!x)},[F,N]=l.useState(!1),{data:h}=qe();console.log(h);const[y,I]=l.useState(""),{data:P}=Ee(),{data:L,refetch:w}=Oe(y,{skip:!y}),{data:R,refetch:q}=ze(a.designId,{skip:!a.designId}),{data:A}=De({batchNo:a.planningHeaderId,processType:"PrePlanning"},{skip:!a.planningHeaderId}),{data:M,refetch:G}=He(a.planningHeaderId,{skip:!a.planningHeaderId});console.log("fabricRequisitionData",M);const[_,X]=l.useState([]),[Y,K]=l.useState([]),[Z,ye]=l.useState([]),[Le,Ae]=l.useState([]),[ee,te]=l.useState([]);console.log("planningHeaderId",a.planningHeaderId),console.log("Fabrications",Z),l.useEffect(()=>{L&&X(L.result)},[L]),l.useEffect(()=>{R&&K(R.result)},[R]),l.useEffect(()=>{A&&ye(A.result)},[A]),l.useEffect(()=>{M&&(c(!1),te(M.result.map((n,u)=>({id:u,...n}))))},[M,G]),l.useEffect(()=>{if(P){const n=P.result[0];Ae(n.uomList)}},[P]);const de=(h==null?void 0:h.result)||[];l.useEffect(()=>{const n=()=>{const m=parseFloat(a.quantity)||0,k=parseFloat(a.rate)||0;return(m*k).toFixed(2)};d(m=>({...m,total:n()}));const u=()=>{const m=parseFloat(a.total)||0,k=parseFloat(a.gst)||0;return(m*(1+k/100)).toFixed(2)};d(m=>({...m,totalInclGst:u()}));const C=()=>{const m=parseFloat(a.total)||0,k=parseFloat(a.poPcs)||0,fe=(m/k).toFixed(2);return isNaN(fe)?0:fe};d(m=>({...m,unitPrice:C()}))},[a.quantity,a.rate,a.total,a.gst]);const T=n=>{const{name:u,value:C}=n.target;if(u==="collectionId")de.find(m=>m.collectionId===parseInt(C)),I(C),N(!0),te([]),c(!0),d({...a,designId:"",baseColorId:"",planningHeaderId:"",batchNo:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",collectionId:C});else if(u==="designId"){const m=_.find(k=>k.designId===parseInt(C));te([]),c(!0),d({...a,planningHeaderId:"",batchNo:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",designId:C,baseColorId:m?m.colorId:"",baseColorName:m?m.colorName:""})}else if(u==="batchNo"){const m=Y.find(k=>k.batchNo===C);d({...a,fabricId:"",quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",batchNo:C,planningHeaderId:m?m.planningHeaderId:"",poPcs:m?m.poPcs:""}),p(!0),N(!1)}else if(u==="fabricId"){const m=Z.find(k=>k.fabricId===C);d({...a,fabricId:C,quantity:m?m.total:""})}else d({...a,[u]:C}),r(m=>({...m,[u]:""}))},ue=ee.reduce((n,u)=>n+(parseFloat(u.total)||0),0).toFixed(2),pe=parseFloat(ue).toLocaleString(),be=ee.reduce((n,u)=>n+(parseFloat(u.totalInclGst)||0),0).toFixed(2),me=parseFloat(be).toLocaleString();console.log("overallTotal",ue),console.log("overallTotalIncGst",be),console.log("localizedTotal",pe),console.log("localizedTotalIncGst",me);const je=[...ee,{id:"TOTAL_FABRIC",label:"Total",total:pe,totalInclGst:me}],Ne=[{field:"designNo",headerName:"Design",colSpan:(n,u)=>{if(u.id==="TOTAL_FABRIC")return 6},valueGetter:(n,u)=>u.id==="TOTAL_FABRIC"?u.label:n},{field:"fabricName",headerName:"Fabric"},{field:"poPcs",headerName:"PO. Pieces"},{field:"quantity",headerName:"Quantity"},{field:"rate",headerName:"Rate"},{field:"uomName",headerName:"UOM"},{field:"total",headerName:"Total",valueGetter:n=>n.toLocaleString()},{field:"unitPrice",headerName:"Unit Price",colSpan:(n,u)=>{if(u.id==="TOTAL_FABRIC")return 2},valueGetter:(n,u)=>u.id==="TOTAL_FABRIC"?"Total Including GST":n},{field:"gst",headerName:"GST"},{field:"totalInclGst",headerName:"Total Inc. GST",valueGetter:n=>n.toLocaleString(),colSpan:(n,u)=>{if(u.id==="TOTAL_FABRIC")return 2}}],Pe=async()=>{const n=Re();if(Object.keys(n).length>0){r(n);return}try{const u=await Ye.post("https://gecxc.com:449/api/Fabrication/SaveFabrication",a);console.log("Save response:",u.data),u.data.success?g("Fabrication saved successfully!",{variant:"success",autoHideDuration:5e3}):(g(`${u.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",u.data.message)),d(C=>({designId:C.designId,batchNo:C.batchNo,planningHeaderId:C.planningHeaderId,fabricationId:0,baseColorId:C.baseColorId,baseColorName:C.baseColorName,fabricId:"",poPcs:C.poPcs,quantity:"",rate:"",uomId:"",total:"",unitPrice:"0",gst:"",totalInclGst:"",createdOn:new Date().toISOString(),createdBy:e.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:e.empId})),G()}catch(u){console.error("Error saving data:",u),g("Fabrication not saved successfully!",{variant:"error",autoHideDuration:5e3})}},Re=()=>{const n={};return a.fabricId||(n.fabricId="fabricId is required"),a.gst||(n.gst="gst is required"),a.uomId||(n.uomId="uomId is required"),a.rate||(n.rate="rate is required"),n};return console.log("formData",a),o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"CardHeader",children:o.jsxs(oe,{variant:"outlined",children:[o.jsx(ae,{className:"css-4rfrnx-MuiCardHeader-root",avatar:o.jsx($e,{src:Qt,sx:{background:"transparent"}}),title:"Fabric Requisition",titleTypographyProps:{style:{color:"white"}}}),o.jsxs(S,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[o.jsxs(S,{item:!0,xs:12,md:3,children:[o.jsx(B,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:y,onChange:T,size:"small",required:!0,InputLabelProps:{sx:{color:"black"}},children:de.map(n=>o.jsx(V,{value:n.collectionId,children:n.collectionName},n.collectionId))})," "]}),o.jsx(S,{item:!0,xs:12,md:3,children:o.jsx(B,{fullWidth:!0,select:!0,label:"Select Design",name:"designId",value:a.designId,onChange:T,size:"small",required:!0,InputLabelProps:{sx:{color:"black"}},children:_.map(n=>o.jsx(V,{value:n.designId,children:n.designNo},n.designId))})}),o.jsxs(S,{item:!0,xs:12,md:3,children:[o.jsx(B,{fullWidth:!0,select:!0,label:"Batch No.",name:"batchNo",value:a.batchNo,onChange:T,size:"small",required:!0,InputLabelProps:{sx:{color:"black"}},children:Y.map(n=>o.jsx(V,{value:n.batchNo,children:n.batchNo},n.batchNo))})," "]}),o.jsx(S,{item:!0,xs:12,md:3,children:o.jsx(B,{label:"Base Color",fullWidth:!0,size:"small",name:"baseColorName",value:a.baseColorName,onChange:T,disabled:!0,sx:n=>({...a.baseColorName!==""&&{".css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input":{backgroundColor:"#c9c9c9 !important"}},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"black"},"& .MuiInputBase-root.Mui-disabled":{backgroundColor:"#f9f9f9"},"& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:"gray"},"& .MuiInputLabel-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.87)"}})})})]})]})}),o.jsxs(oe,{variant:"outlined",children:[o.jsx(ae,{className:"css-4rfrnx-MuiCardHeader-root",avatar:o.jsx(Se,{}),title:"Add Fabric Requisition",titleTypographyProps:{style:{color:"white"}},action:o.jsx(Ve,{onClick:v,sx:{mt:"-18px"},children:o.jsx(se,{style:{color:"white"}})}),sx:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),o.jsxs(tt,{expanded:x,onChange:v,sx:{},children:[o.jsx(bt,{expandIcon:o.jsx(se,{}),"aria-controls":"panel1-content",id:"panel1-header",sx:{display:"none"}}),o.jsx(st,{children:o.jsxs(S,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[o.jsx(S,{item:!0,xs:12,md:3,children:o.jsx(B,{fullWidth:!0,select:!0,label:"Select Fabric",defaultValue:"",size:"small",name:"fabricId",value:a.fabricId,onChange:T,required:!0,error:!!t.fabricId,helperText:t.fabricId,InputLabelProps:{sx:{color:"black"}},children:Z.map(n=>o.jsx(V,{value:n.fabricId,children:n.fabric},n.fabricId))})}),o.jsx(S,{item:!0,xs:12,md:3,children:o.jsx(B,{fullWidth:!0,select:!0,label:"UOM",defaultValue:"",size:"small",name:"uomId",value:a.uomId,onChange:T,required:!0,error:!!t.uomId,helperText:t.uomId,InputLabelProps:{sx:{color:"black"}},children:Le.map(n=>o.jsx(V,{value:n.lookUpId,children:n.lookUpName},n.lookUpId))})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"Po Pcs",fullWidth:!0,type:"number",size:"small",name:"poPcs",value:a.poPcs,onChange:T,disabled:!0,sx:n=>({...a.poPcs!==""&&{".css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input":{backgroundColor:"#c9c9c9 !important"}},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"black"},"& .MuiInputBase-root.Mui-disabled":{backgroundColor:"#f9f9f9"},"& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:"gray"},"& .MuiInputLabel-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.87)"}})})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"Quantity",fullWidth:!0,size:"small",type:"number",name:"quantity",value:a.quantity,onChange:T,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"Rate",fullWidth:!0,size:"small",type:"number",name:"rate",value:a.rate,onChange:T,required:!0,error:!!t.rate,helperText:t.rate,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"Total",fullWidth:!0,size:"small",type:"number",name:"total",value:a.total,onChange:T,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"Unit Price",fullWidth:!0,size:"small",name:"unitPrice",value:a.unitPrice,onChange:T,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,md:1.5,children:o.jsx(B,{label:"GST",fullWidth:!0,size:"small",type:"number",name:"gst",value:a.gst,onChange:T,required:!0,error:!!t.gst,helperText:t.gst,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,md:3,children:o.jsx(B,{label:"Total Inc GST.",fullWidth:!0,size:"small",type:"number",name:"totalInclGst",value:a.totalInclGst,onChange:T,InputLabelProps:{sx:{color:"black"}}})}),o.jsx(S,{item:!0,xs:12,textAlign:"right",children:o.jsx(_e,{variant:"contained",size:"small",onClick:Pe,children:"Save"})})]})})]})]}),o.jsx(S,{item:!0,xs:12,md:12,children:o.jsx(We,{sx:{height:1,width:"100%",marginTop:1,marginBottom:0}})}),o.jsxs(oe,{variant:"outlined",children:[o.jsx(ae,{className:"css-4rfrnx-MuiCardHeader-root",avatar:o.jsx(Je,{}),title:"View",titleTypographyProps:{style:{color:"white"}}}),o.jsx(S,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:o.jsx(S,{sx:{marginTop:2},item:!0,xs:12,children:o.jsx(Qe,{iColumns:Ne,initialRows:je,setInitialData:f,deleteApi:"https://gecxc.com:449/api/Fabrication/DeleteFabricByFabricId?fabricationId=",deleteBy:"fabricationId",refetch:G,setAccordionExpanded:p,fileName:"Fabrication Requistion List",isLoading:i})})})]})]})},io=Xt;export{tt as A,io as F,so as S,no as a,Bt as b,se as c,Se as d,bt as e,st as f};
