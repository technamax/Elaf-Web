import{r,p as W,o as k,s as F,_ as b,z as Y,i as H,j as a,l as w,g as O,a9 as X,aa as _,h as Z,Y as ee,a as te,Z as ae,$ as oe,a7 as ne,a2 as se,C as le,d as re,ab as ie,G as S,M as ce}from"./index-UoeC-e26.js";import{a as de}from"./axios-D07O1bWV.js";import{F as pe}from"./EditAbleDataGrid-D5o07o2-.js";import{T as j,B as ue}from"./TextField-dRB4SJvn.js";import{M as D}from"./Skeleton-DxWEYmQ_.js";const V=r.createContext({}),J=r.createContext({});function me(e){return W("MuiStep",e)}k("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const be=["active","children","className","component","completed","disabled","expanded","index","last"],ve=e=>{const{classes:t,orientation:o,alternativeLabel:s,completed:i}=e;return O({root:["root",o,s&&"alternativeLabel",i&&"completed"]},me,t)},he=F("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})(({ownerState:e})=>b({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),Ke=r.forwardRef(function(t,o){const s=Y({props:t,name:"MuiStep"}),{active:i,children:d,className:v,component:f="div",completed:u,disabled:I,expanded:h=!1,index:c,last:C}=s,N=H(s,be),{activeStep:R,connector:y,alternativeLabel:M,orientation:U,nonLinear:B}=r.useContext(V);let[L=!1,z=!1,P=!1]=[i,u,I];R===c?L=i!==void 0?i:!0:!B&&R>c?z=u!==void 0?u:!0:!B&&R<c&&(P=I!==void 0?I:!0);const G=r.useMemo(()=>({index:c,last:C,expanded:h,icon:c+1,active:L,completed:z,disabled:P}),[c,C,h,L,z,P]),A=b({},s,{active:L,orientation:U,alternativeLabel:M,completed:z,disabled:P,expanded:h,component:f}),x=ve(A),T=a.jsxs(he,b({as:f,className:w(x.root,v),ref:o,ownerState:A},N,{children:[y&&M&&c!==0?y:null,d]}));return a.jsx(J.Provider,{value:G,children:y&&!M&&c!==0?a.jsxs(r.Fragment,{children:[y,T]}):T})}),xe=X(a.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),fe=X(a.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function ge(e){return W("MuiStepIcon",e)}const q=k("MuiStepIcon",["root","active","completed","error","text"]);var Q;const Se=["active","className","completed","error","icon"],Ce=e=>{const{classes:t,active:o,completed:s,error:i}=e;return O({root:["root",o&&"active",s&&"completed",i&&"error"],text:["text"]},ge,t)},$=F(_,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${q.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${q.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${q.error}`]:{color:(e.vars||e).palette.error.main}})),Ie=F("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Le=r.forwardRef(function(t,o){const s=Y({props:t,name:"MuiStepIcon"}),{active:i=!1,className:d,completed:v=!1,error:f=!1,icon:u}=s,I=H(s,Se),h=b({},s,{active:i,completed:v,error:f}),c=Ce(h);if(typeof u=="number"||typeof u=="string"){const C=w(d,c.root);return f?a.jsx($,b({as:fe,className:C,ref:o,ownerState:h},I)):v?a.jsx($,b({as:xe,className:C,ref:o,ownerState:h},I)):a.jsxs($,b({className:C,ref:o,ownerState:h},I,{children:[Q||(Q=a.jsx("circle",{cx:"12",cy:"12",r:"12"})),a.jsx(Ie,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:u})]}))}return u});function je(e){return W("MuiStepLabel",e)}const E=k("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),ye=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Ae=e=>{const{classes:t,orientation:o,active:s,completed:i,error:d,disabled:v,alternativeLabel:f}=e;return O({root:["root",o,d&&"error",v&&"disabled",f&&"alternativeLabel"],label:["label",s&&"active",i&&"completed",d&&"error",v&&"disabled",f&&"alternativeLabel"],iconContainer:["iconContainer",s&&"active",i&&"completed",d&&"error",v&&"disabled",f&&"alternativeLabel"],labelContainer:["labelContainer",f&&"alternativeLabel"]},je,t)},Ne=F("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation]]}})(({ownerState:e})=>b({display:"flex",alignItems:"center",[`&.${E.alternativeLabel}`]:{flexDirection:"column"},[`&.${E.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Pe=F("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>b({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${E.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.alternativeLabel}`]:{marginTop:16},[`&.${E.error}`]:{color:(e.vars||e).palette.error.main}})),Fe=F("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${E.alternativeLabel}`]:{paddingRight:0}})),Re=F("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${E.alternativeLabel}`]:{textAlign:"center"}})),Me=r.forwardRef(function(t,o){var s;const i=Y({props:t,name:"MuiStepLabel"}),{children:d,className:v,componentsProps:f={},error:u=!1,icon:I,optional:h,slotProps:c={},StepIconComponent:C,StepIconProps:N}=i,R=H(i,ye),{alternativeLabel:y,orientation:M}=r.useContext(V),{active:U,disabled:B,completed:L,icon:z}=r.useContext(J),P=I||z;let G=C;P&&!G&&(G=Le);const A=b({},i,{active:U,alternativeLabel:y,completed:L,disabled:B,error:u,orientation:M}),x=Ae(A),T=(s=c.label)!=null?s:f.label;return a.jsxs(Ne,b({className:w(x.root,v),ref:o,ownerState:A},R,{children:[P||G?a.jsx(Fe,{className:x.iconContainer,ownerState:A,children:a.jsx(G,b({completed:L,active:U,error:u,icon:P},N))}):null,a.jsxs(Re,{className:x.labelContainer,ownerState:A,children:[d?a.jsx(Pe,b({ownerState:A},T,{className:w(x.label,T==null?void 0:T.className),children:d})):null,h]})]}))});Me.muiName="StepLabel";function Ue(e){return W("MuiStepConnector",e)}k("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Be=["className"],ze=e=>{const{classes:t,orientation:o,alternativeLabel:s,active:i,completed:d,disabled:v}=e,f={root:["root",o,s&&"alternativeLabel",i&&"active",d&&"completed",v&&"disabled"],line:["line",`line${Z(o)}`]};return O(f,Ue,t)},Ge=F("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})(({ownerState:e})=>b({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Te=F("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.line,t[`line${Z(o.orientation)}`]]}})(({ownerState:e,theme:t})=>{const o=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return b({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:o},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Ee=r.forwardRef(function(t,o){const s=Y({props:t,name:"MuiStepConnector"}),{className:i}=s,d=H(s,Be),{alternativeLabel:v,orientation:f="horizontal"}=r.useContext(V),{active:u,disabled:I,completed:h}=r.useContext(J),c=b({},s,{alternativeLabel:v,orientation:f,active:u,completed:h,disabled:I}),C=ze(c);return a.jsx(Ge,b({className:w(C.root,i),ref:o,ownerState:c},d,{children:a.jsx(Te,{className:C.line,ownerState:c})}))});function we(e){return W("MuiStepper",e)}k("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const De=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],We=e=>{const{orientation:t,alternativeLabel:o,classes:s}=e;return O({root:["root",t,o&&"alternativeLabel"]},we,s)},ke=F("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel]}})(({ownerState:e})=>b({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),Ye=a.jsx(Ee,{}),_e=r.forwardRef(function(t,o){const s=Y({props:t,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:d=!1,children:v,className:f,component:u="div",connector:I=Ye,nonLinear:h=!1,orientation:c="horizontal"}=s,C=H(s,De),N=b({},s,{alternativeLabel:d,orientation:c,component:u}),R=We(N),y=r.Children.toArray(v).filter(Boolean),M=y.map((B,L)=>r.cloneElement(B,b({index:L,last:L+1===y.length},B.props))),U=r.useMemo(()=>({activeStep:i,alternativeLabel:d,connector:I,nonLinear:h,orientation:c}),[i,d,I,h,c]);return a.jsx(V.Provider,{value:U,children:a.jsx(ke,b({as:u,ownerState:N,className:w(R.root,f),ref:o},C,{children:M}))})}),He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1ElEQVR4nO2bsU5UQRSGpxELXGNhI2AMYNRYWeojQFS0E30CBU0IjfEdTDBWGB+AGOwUCjtJjFgYExJFa1/AhYbI+pmT/ZeMu2B2752d2YX5yrs75z/zn7kzd3PPOpfJZDIdAJwFZoFV4BuwTXts6/srwAww4voJYBhYBH4ThhrwCjjneh3gJlBV4jvAEnAHuAgMthljUN+f1niLg+LecL0K8FDVQhUbDRR3DFj2VsOs69HK14BdYK5LGvOKX+uplUD9nm8s+7kua5kJxi/gjOsFgJeNZR9J77X0FmPotXPU7WqjGo2kOS49O2WGY2geiM55Y8lFRJus8SCmbgt6WDGmXUSAe9J9E1O3BeCHEjnvIqLnBGMzpm4LwJYSOeEiYnrS3Yqp20LjWdUdMe09sgHCHTHtnjQAWCMMa4WTOCQG0JcGhCAbILrnWEC6oZ0NEEmrkFI7GyCSViGldjZAJK1CSu1sgEhahZTa2QCRtAoptbMBImkVUmpnA0TSKqTUzgaIpFVIqZ0NEEEcA46ra+RjBw1Szdhb4E/AZOlqlZxPRwPUNPGFsEz2hQHUK9+YvLW7TQGVggkNAI8Va71UshENeORN/lSApCqKVy2VbEQD1nV5KkBCtgKeNK+Ag0xJYUBVYyr7vDL/Z9mXfHPzB5jwYl3V9Y3UBnzXmAv/M6WEATs6RSaaYj3X50/DTL24ASvNLTJK2LgVMjkv/hUZY81Zl1MbMNPcJOU1Tm2G2AT3mfxPxV8IGbuoASNqV7OKjHkb12fPhNvAyZLtMNe07Bt9w++AY0VjBjPAAF5o3LJ3bcgzISRm9kI3Jl/GgCFv45v3rg/oFvngnQxFsLEbtuGFvueDGGBY87LXLL1nQr9R2ABv82u0y1s/77g7SgYYwHV1cqMNy1pa7wKXYvcSJjHAAE4DzwL+ZSY6LgTUfxLfB94CX0tuhDF5H8SATCaTybjDw18JVhz+QhIOiQAAAABJRU5ErkJggg==",Oe=()=>{const[e,t]=r.useState({designId:"",batchNo:"",baseColorId:"",baseColorName:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"string",total:"",unitPrice:"",gst:"",totalInclGst:"",createdOn:new Date().toISOString(),createdBy:0,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:0}),{data:o}=ee();console.log(o);const[s,i]=r.useState(""),{data:d}=te(),{data:v,refetch:f}=ae(s,{skip:!s}),{data:u,refetch:I}=oe(e.designId,{skip:!e.designId}),{data:h}=ne(e.planningHeaderId,{skip:!e.planningHeaderId}),{data:c,refetch:C}=se(e.planningHeaderId,{skip:!e.planningHeaderId});console.log("fabricRequisitionData",c);const[N,R]=r.useState([]),[y,M]=r.useState([]),[U,B]=r.useState([]),[L,z]=r.useState([]),[P,G]=r.useState([]);r.useEffect(()=>{v&&R(v.result)},[v]),r.useEffect(()=>{u&&M(u.result)},[u]),r.useEffect(()=>{h&&B(h.result)},[h]),r.useEffect(()=>{c&&G(c.result.map((n,m)=>({id:m,...n})))},[c]),r.useEffect(()=>{if(d){const n=d.result[0];z(n.uomList)}},[d]);const A=(o==null?void 0:o.result)||[];r.useEffect(()=>{const n=()=>{const l=parseFloat(e.quantity)||0,p=parseFloat(e.rate)||0;return l*p};t(l=>({...l,total:n()}));const m=()=>{const l=parseFloat(e.total)||0,p=parseFloat(e.gst)||0;return l*(1+p/100)};t(l=>({...l,totalInclGst:m()}));const g=()=>{const l=parseFloat(e.total)||0,p=parseFloat(e.poPcs)||0;return l/p};t(l=>({...l,unitPrice:g()}))},[e.quantity,e.rate,e.total,e.gst]);const x=n=>{const{name:m,value:g}=n.target;if(m==="collectionId"){const l=A.find(p=>p.collectionId===parseInt(g));i(g),t({...e,collectionId:g,poPcs:l?l.poPcs:""})}else if(m==="designId"){const l=N.find(p=>p.designId===parseInt(g));t({...e,designId:g,baseColorId:l?l.colorId:"",baseColorName:l?l.colorName:""})}else if(m==="batchNo"){const l=y.find(p=>p.batchNo===g);t({...e,batchNo:g,planningHeaderId:l?l.planningHeaderId:""})}else if(m==="fabricId"){const l=U.find(p=>p.fabricId===g);t({...e,fabricId:g,quantity:l?l.total:""})}else t({...e,[m]:g})},T=[{field:"designId",headerName:"Design",editable:!0,flex:1,type:"singleSelect",valueOptions:N.map(n=>({value:n.designId,label:n.designNo}))},{field:"poPcs",headerName:"PO. Pieces",flex:1,editable:!0},{field:"quantity",headerName:"Quantity",flex:1,editable:!0},{field:"rate",headerName:"Rate",editable:!0,flex:1},{field:"uomId",headerName:"UOM",editable:!0,flex:1,type:"singleSelect",valueOptions:L.map(n=>({value:n.lookUpId,label:n.lookUpName}))},{field:"total",headerName:"Total",flex:1,editable:!0,valueSetter:(n,m)=>{const g=m.quantity??0,l=m.rate??0,p=g*l;return console.log("total",p),{...m,total:p}}},{field:"unitPrice",headerName:"Unit Price",flex:1,editable:!0,valueSetter:(n,m)=>{const g=m.total??0,l=m.poPcs??0,p=g/l;return console.log("unitPrice",p),{...m,unitPrice:p}}},{field:"gst",headerName:"GST",flex:1,editable:!0},{field:"totalInclGst",headerName:"Total Inc. GST",flex:1,editable:!0,valueSetter:(n,m)=>{const g=m.total??0,l=m.gst??0,p=g*(1+l/100);return console.log("totalInclGst",p),{...m,totalInclGst:p}}}],K=async()=>{try{const n=await de.post("https://gecxc.com:4041/api/Fabrication/SaveFabrication",e);console.log("Save response:",n.data),C(),t({designId:"",batchNo:"",baseColorId:"",baseColorName:"",fabricId:"",poPcs:"",quantity:"",rate:"",uomId:"string",total:"",unitPrice:"",gst:"",totalInclGst:"",createdOn:"2024-05-29T09:56:23.916Z",createdBy:0,lastUpdatedOn:"2024-05-29T09:56:23.916Z",LastUpdatedBy:0})}catch(n){console.error("Error saving data:",n)}};return console.log("formData",e),a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"CardHeader",children:a.jsxs(le,{variant:"outlined",children:[a.jsx(re,{className:"css-4rfrnx-MuiCardHeader-root",avatar:a.jsx(ie,{src:He,sx:{background:"transparent"}}),title:"Fabric Requisition",titleTypographyProps:{style:{color:"white"}}}),a.jsxs(S,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[a.jsxs(S,{item:!0,xs:12,md:3,children:[a.jsx(j,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:s,onChange:x,size:"small",children:A.map(n=>a.jsx(D,{value:n.collectionId,children:n.collectionName},n.collectionId))})," "]}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{fullWidth:!0,select:!0,label:"Select Design",name:"designId",value:e.designId,onChange:x,size:"small",children:N.map(n=>a.jsx(D,{value:n.designId,children:n.designNo},n.designId))})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Base Color",fullWidth:!0,size:"small",name:"baseColorName",value:e.baseColorName,onChange:x,disabled:!0})}),a.jsxs(S,{item:!0,xs:12,md:3,children:[a.jsx(j,{fullWidth:!0,select:!0,label:"Batch No.",name:"batchNo",value:e.batchNo,onChange:x,size:"small",children:y.map(n=>a.jsx(D,{value:n.batchNo,children:n.batchNo},n.batchNo))})," "]})]})]})}),a.jsxs(ce,{className:"MainCard",children:[a.jsxs(S,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{fullWidth:!0,select:!0,label:"Select Fabric",defaultValue:"",size:"small",name:"fabricId",value:e.fabricId,onChange:x,children:U.map(n=>a.jsx(D,{value:n.fabricId,children:n.fabric},n.fabricId))})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{fullWidth:!0,select:!0,label:"UOM",defaultValue:"",size:"small",name:"uomId",value:e.uomId,onChange:x,children:L.map(n=>a.jsx(D,{value:n.lookUpId,children:n.lookUpName},n.lookUpId))})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Po Pcs",fullWidth:!0,size:"small",name:"poPcs",value:e.poPcs,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Quantity",fullWidth:!0,size:"small",name:"quantity",value:e.quantity,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Rate",fullWidth:!0,size:"small",name:"rate",value:e.rate,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Total",fullWidth:!0,size:"small",name:"total",value:e.total,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:3,children:a.jsx(j,{label:"Unit Price",fullWidth:!0,size:"small",name:"unitPrice",value:e.unitPrice,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:1.5,children:a.jsx(j,{label:"GST",fullWidth:!0,size:"small",name:"gst",value:e.gst,onChange:x})}),a.jsx(S,{item:!0,xs:12,md:1.5,children:a.jsx(j,{label:"Total Inc GSt.",fullWidth:!0,size:"small",name:"totalInclGst",value:e.totalInclGst,onChange:x})}),a.jsx(S,{item:!0,xs:12,textAlign:"right",children:a.jsx(ue,{variant:"contained",size:"small",onClick:K,children:"Save"})})]}),a.jsx(S,{container:!0,spacing:2,width:"Inherit",children:a.jsx(S,{sx:{marginTop:2},item:!0,xs:12,children:a.jsx(pe,{ncolumns:T,initialRows:P,formData:e,editAPi:"https://gecxc.com:4041/api/Fabrication/SaveFabrication",refetch:C,deleteApi:"https://gecxc.com:4041/api/Fabrication/DeleteFabricByFabricId?fabricationId=",deleteBy:"fabricationId",disableAddRecord:!0})})})]})]})},et=Oe;export{et as F,_e as S,Ke as a,Me as b};