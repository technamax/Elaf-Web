import{u as L,k as z,m as $,j as e,B as U,C as b,d as w,G as n,D as P,b as X,T as J,M as K}from"./index-Ck0MIkUq.js";import{r as s}from"./vendor-BXCbSo2_.js";import{B as W,a as Y}from"./axios-CgIVMX8t.js";import{d as Z}from"./AddCircleOutlineOutlined-D8j0rvJ_.js";import{d as ee,a as te}from"./AssignmentOutlined-DlQHzdPz.js";import{d as G}from"./VisibilityOutlined-Ds6HNaPA.js";import{R as H,u as se,d as ae}from"./ReuseableDataGrid-CdgPKZaX.js";import{T as f}from"./TextField-BujPyVEk.js";import{M as C}from"./Skeleton-DFEmEML1.js";import{T as re,a as de,b as k,c as M}from"./TabPanel-CBwhICZn.js";const oe=()=>{const{user:a}=L(),[t,T]=s.useState([]),[F,x]=s.useState(!1),[l,p]=s.useState({tcId:0,categoryId:"",termCondDesc:"",enabled:"",appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId}),i=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}];s.useEffect(()=>{p({tcId:(t==null?void 0:t.tcId)||0,categoryId:(t==null?void 0:t.categoryId)||"",termCondDesc:(t==null?void 0:t.termCondDesc)||"",enabled:(t==null?void 0:t.enabled)||"",appId:(t==null?void 0:t.appId)||a.appId,createdOn:(t==null?void 0:t.createdOn)||new Date().toISOString(),createdBy:(t==null?void 0:t.createdBy)||a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId})},[t]);const[u,O]=s.useState([]);s.useState(!1);const{data:h,refetch:S}=z(),{data:g,refetch:m}=$(l.categoryId,{skip:!l.categoryId}),[I,D]=s.useState([]);s.useEffect(()=>{g&&O(g.result.map((r,c)=>({id:c+1,...r})))},[g,m]),s.useEffect(()=>{h&&D(h.result.map((r,c)=>({id:c,...r})))},[h,S]),console.log("initialRows",u);const y=r=>{const{name:c,value:N}=r.target;p({...l,[c]:N})},B=async()=>{console.log("formData",l);try{const r=await Y.post("http://100.42.177.77:83/api/TermsConditions/SaveTermsConditions",l);console.log("Save response:",r.data),p(c=>({tcId:0,categoryId:c.categoryId,termCondDesc:"",enabled:"",appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId})),m(),x(!1)}catch(r){console.error("Error saving data:",r)}};console.log("formData",l);const o=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Term and Condition",flex:1},{field:"enabled",headerName:"Enabled"}];return e.jsxs(U,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Terms and Conditions ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"Category",name:"categoryId",value:l.categoryId,onChange:y,size:"small",children:I.map(r=>e.jsx(C,{value:r.categoryId,children:r.description},r.categoryId))})}),e.jsx(n,{item:!0,xs:12,md:6,children:e.jsx(f,{label:"Term and condition",fullWidth:!0,size:"small",name:"termCondDesc",onChange:y,value:l.termCondDesc,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"Enabled",name:"enabled",value:l.enabled,onChange:y,size:"small",children:i.map(r=>e.jsx(C,{value:r.value,children:r.label},r.value))})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(W,{variant:"contained",size:"small",onClick:B,children:"Save"})})]})," "]}),e.jsx(P,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(G,{}),title:"View Terms And Conditions ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsx(n,{item:!0,xs:12,children:e.jsx(H,{initialRows:u,iColumns:o,disableDelete:!0,setInitialData:T,setIsEdit:x})})})," "]})]})},ne=()=>{const{user:a}=L(),[t,T]=s.useState([]),[F,x]=s.useState(!1),[l,p]=s.useState([]),[i,u]=s.useState({assignId:0,vedorId:"",categoryId:"",assignTermsDetails:[l],appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId}),O=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}];s.useEffect(()=>{u({assignId:(t==null?void 0:t.assignId)||0,categoryId:(t==null?void 0:t.categoryId)||"",categoryId:(t==null?void 0:t.categoryId)||"",appId:(t==null?void 0:t.appId)||a.appId,createdOn:(t==null?void 0:t.createdOn)||new Date().toISOString(),createdBy:(t==null?void 0:t.createdBy)||a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId})},[t]);const[h,S]=s.useState([]);s.useState(!1);const{data:g}=X(),{data:m}=z(),{data:I,refetch:D}=$(i.categoryId,{skip:!i.categoryId}),[y,B]=s.useState([]),[o,r]=s.useState([]);s.useEffect(()=>{if(g){const d=g.result[0];r(d.vendorList)}},[g]),s.useEffect(()=>{I&&S(I.result.map((d,j)=>({id:j+1,...d})))},[I]),s.useEffect(()=>{m&&B(m.result.map((d,j)=>({id:j,...d})))},[m]),console.log("initialRows",h);const c=d=>{const{name:j,value:A}=d.target;u({...i,[j]:A})},N=async()=>{console.log("formData",i);try{const d=await Y.post("http://100.42.177.77:83/api/TermsConditions/SaveAssignTerms",i);console.log("Save response:",d.data),u(j=>({assignId:0,vedorId:"",categoryId:"",appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:a.empId})),x(!1)}catch(d){console.error("Error saving data:",d)}};console.log("formData",i);const V=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Term and Condition Description",flex:1},{field:"enabled",headerName:"Enabled",flex:1},{field:"description",headerName:"Description",flex:1}],[_,q]=s.useState([]),v=se(),Q=s.useCallback(d=>{q(d);const A=d.map(E=>{const R=v.current.getRow(E);return console.log("rowData",R),R?R.tcId:null}).filter(E=>E!==null).map(E=>({assignDetId:0,assignedId:0,tcId:E,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedBy:a.empId,lastUpdatedOn:new Date().toISOString()}));p(A)},[v]);return s.useEffect(()=>{u({...i,assignTermsDetails:l})},[l]),s.useEffect(()=>{v.current&&console.log("API ref is ready:",v.current)},[v]),console.log("selectedTerms:",l),e.jsxs(U,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",title:"Assign Terms and Conditions ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"Vendors",size:"small",name:"vedorId",value:i.vedorId,onChange:c,required:!0,children:o.map(d=>e.jsx(C,{value:d.lookUpId,children:d.lookUpName},d.lookUpId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"Category",name:"categoryId",value:i.categoryId,onChange:c,size:"small",children:y.map(d=>e.jsx(C,{value:d.categoryId,children:d.description},d.categoryId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"Enabled ?",name:"enabled",value:i.enabled,onChange:c,size:"small",children:O.map(d=>e.jsx(C,{value:d.value,children:d.label},d.value))})}),e.jsxs(n,{item:!0,xs:12,mt:2,children:[e.jsx(J,{variant:"h4",children:"Terms And Conditions:"})," "]}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{width:"100%"},children:e.jsx(ae,{rows:h,columns:V,apiRef:v,checkboxSelection:!0,onRowSelectionModelChange:Q,rowSelectionModel:_})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(W,{variant:"contained",size:"small",onClick:N,children:"Save"})})]})," "]}),e.jsx(P,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(G,{}),title:"View Assigned Terms And Conditions ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsx(n,{item:!0,xs:12,children:e.jsx(H,{initialRows:h,iColumns:V,disableDelete:!0,setInitialData:T,setIsEdit:x})})})," "]})]})},fe=()=>{const{user:a}=L(),[t,T]=s.useState([]),[F,x]=s.useState(!1),[l,p]=s.useState({categoryId:0,description:"",enabled:"",appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:a.empId}),i=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],[u,O]=s.useState("1"),h=(o,r)=>{O(r)};s.useEffect(()=>{p({categoryId:(t==null?void 0:t.categoryId)||0,description:(t==null?void 0:t.description)||"",enabled:(t==null?void 0:t.enabled)||"",appId:(t==null?void 0:t.appId)||a.appId,createdOn:(t==null?void 0:t.createdOn)||new Date().toISOString(),createdBy:(t==null?void 0:t.createdBy)||a.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:a.empId})},[t]);const[S,g]=s.useState([]);s.useState(!1);const{data:m,refetch:I}=z();s.useEffect(()=>{m&&g(m.result.map((o,r)=>({id:r+1,...o})))},[m,I]),console.log("initialRows",S);const D=o=>{const{name:r,value:c}=o.target;p({...l,[r]:c})},y=async()=>{console.log("formData",l);try{const o=await Y.post("http://100.42.177.77:83/api/TermsConditions/SaveCategory",l);console.log("Save response:",o.data),p(r=>({categoryId:0,description:"",enabled:"",appId:a.appId,createdOn:new Date().toISOString(),createdBy:a.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:a.empId})),I(),x(!1)}catch(o){console.error("Error saving data:",o)}};console.log("formData",l);const B=[{field:"id",headerName:"Sr#"},{field:"description",headerName:"Description",flex:1},{field:"enabled",headerName:"Enabled"}];return e.jsx(K,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(U,{sx:{width:"100%",typography:"body1"},children:e.jsxs(re,{value:u,children:[e.jsx(U,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(de,{onChange:h,"aria-label":"lab API tabs example",children:[e.jsx(k,{icon:e.jsx(ee,{}),label:"Add Categories",value:"1",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(k,{icon:e.jsx(Z,{}),label:"Add Terms and Conditions",value:"2",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(k,{icon:e.jsx(te,{}),label:"Assign Terms and Conditions",value:"3",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})})]})}),e.jsxs(M,{value:"1",children:[e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Categories ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:9,children:e.jsx(f,{label:"Description",fullWidth:!0,size:"small",name:"description",onChange:D,value:l.description,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"enabled",name:"enabled",value:l.enabled,onChange:D,size:"small",children:i.map(o=>e.jsx(C,{value:o.value,children:o.label},o.value))})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(W,{variant:"contained",size:"small",onClick:y,children:"Save"})})]})," "]}),e.jsx(P,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(b,{variant:"outlined",children:[e.jsx(w,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(G,{}),title:"View Categories",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsx(n,{item:!0,xs:12,children:e.jsx(H,{initialRows:S,iColumns:B,disableDelete:!0,setInitialData:T,setIsEdit:x})})})]})]}),e.jsx(M,{value:"2",children:e.jsx(oe,{})}),e.jsx(M,{value:"3",children:e.jsx(ne,{})})]})})})};export{fe as default};
