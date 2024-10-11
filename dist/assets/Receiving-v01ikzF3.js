import{c as fe,u as me,I as he,J as xe,K as ge,j as e,B as O,C as V,d as X,G as d,T as N,e as je,L as ve,M as ye}from"./index-CCiAG5C1.js";import{r as a}from"./vendor-BXCbSo2_.js";import{d as Ie}from"./CategoryOutlined-BCVSmA5u.js";import{d as j}from"./AssignmentOutlined-GokGPIwe.js";import{I as P,a as Ce,B as v}from"./axios-CLUzUAy4.js";import{d as G}from"./Close-CbUD_sON.js";import{R as be}from"./ReceivingDetails-Cb-Lrswc.js";import{R as Y,a as k,b as T,c as B,d as L,B as U}from"./ReuseableDataGrid-C7a_wyFC.js";import _ from"./Reports-bC7wit9n.js";import{S as y}from"./StatusChip-BGjKR3Q3.js";import{T as q}from"./TextField-bTJ-RHX7.js";import{M as J}from"./MenuItem-BJQIokW6.js";import{T as Se,a as De,b as h,c}from"./TabPanel-DzXrDXvS.js";import"./Skeleton-CxVgYQtC.js";const we=()=>{const{enqueueSnackbar:o}=fe(),{user:n}=me();a.useState([]),a.useState(!1);const[s,u]=a.useState({issuanceId:"",poId:"",productionId:"",ogpNumber:"",appId:n.appId,createdOn:new Date().toISOString(),createdBy:n.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:n.empId}),[p,I]=a.useState([]),[f,x]=a.useState([]),[l,r]=a.useState(null),[C,K]=a.useState([]);a.useState(!1);const{data:b,error:Re,isLoading:Ne,refetch:Z}=he(s.productionId,{skip:!s.productionId}),{data:S,refetch:ee}=xe(),{data:g,refetch:A}=ge({issuanceId:l,processTypename:"Dyeing"},{skip:!l});console.log("receivingData",g);const[te,ae]=a.useState([]);a.useEffect(()=>{S&&ae(S.result.map((t,i)=>({id:i,...t})))},[S,ee]),a.useEffect(()=>{b&&x(b.result.map((t,i)=>({id:i+1,...t})))},[b,Z]),a.useEffect(()=>{g&&K(g.result.map((t,i)=>({id:i+1,...t})))},[g,A]),console.log("issId",l),console.log("initialRows",p);const Q=t=>{const{name:i,value:m}=t.target;if(i==="poId"){const F=f.find(pe=>pe.poId===parseInt(m));u({...s,poId:m,issuanceId:F?F.issuanceId:""})}else u({...s,[i]:m})},W=async()=>{try{const t=await Ce.get(`http://100.42.177.77:83/api/Receiving/GetIssuanceByPoIdAndOGPNumber?poId=${s.poId}`);console.log("Save response:",t.data),t.data.success?(o(`${t.data.message} !`,{variant:"success",autoHideDuration:5e3}),I(t.data.result.map((i,m)=>({id:m+1,...i})))):(o(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message))}catch(t){console.error("Error saving data:",t),o("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};a.useEffect(()=>(W(),()=>{}),[s.poId]),console.log("formData",s);const[se,z]=a.useState(!1),[ie,E]=a.useState(!1),[re,M]=a.useState(!1),[D,w]=a.useState(!1),oe=async t=>{w(t),z(!0)},ne=async t=>{E(!0),w(t)},le=async t=>{M(!0),w(t)},R=()=>{z(!1)},$=()=>{E(!1)},H=()=>{M(!1)},de=async t=>{r(t.issuanceId),A()},ce=[{field:"id",headerName:"Sr#"},{field:"issuanceId",headerName:"Issuance#"},{field:"vendorName",headerName:"Vendor"},{field:"issuanceQuantity",headerName:"Total",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(je,{label:t.value.toLocaleString(),sx:{backgroundColor:"primary.dark",color:"white"}})},{field:"dispatchedQuantity",headerName:"Dispatched",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(y,{label:t.row.dispatchedQuantity.toLocaleString(),status:"Issued"})},{field:"receivedQty",headerName:"Received",renderCell:t=>e.jsx(y,{label:t.row.receivedQty.toLocaleString(),status:"Received"})},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(U,{variant:"text",size:"small",sx:{mt:1},children:[e.jsx(v,{size:"small",color:"primary",onClick:()=>oe(t.row),disabled:t.row.status!==9||t.row.dispatchedQuantity===t.row.receivedQty,children:"Generate IGP"}),e.jsx(v,{size:"small",color:"primary",onClick:()=>de(t.row),children:"View Receivings"}),e.jsx(v,{size:"small",color:"primary",onClick:()=>ne(t.row),children:"Receiving Report"})]})})}],ue=[{field:"id",headerName:"Sr #"},{field:"collectionName",headerName:"Collection Name"},{field:"poName",headerName:"PO"},{field:"igpNumber",headerName:"IGP Number"},{field:"igpDate",headerName:"IGP Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"receivingDate",headerName:"Receiving Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"receivedQty",headerName:"Received",renderCell:t=>e.jsx(y,{label:t.row.receivedQty.toLocaleString(),status:"Received"})},{field:"processTypename",headerName:"Process Type"},{field:"statusName",headerName:"Status",renderCell:t=>e.jsx(y,{label:t.value,status:t.value})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(U,{variant:"text",size:"small",sx:{mt:1},children:e.jsx(v,{size:"small",color:"primary",onClick:()=>le(t.row),children:"IGP"})})})}];return e.jsxs(O,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(V,{variant:"outlined",children:[e.jsx(X,{className:"css-4rfrnx-MuiCardHeader-root",title:"Pending Receivables",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(d,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(d,{item:!0,xs:12,md:3,children:e.jsx(q,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:s.productionId,onChange:Q,size:"small",children:te.map(t=>e.jsx(J,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(d,{item:!0,xs:12,md:3,children:e.jsx(q,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:s.poId,onChange:Q,size:"small",children:f.map(t=>e.jsx(J,{value:t.poId,children:t.poIdName},t.poId))})}),e.jsxs(d,{item:!0,xs:12,children:[e.jsx(Y,{initialRows:p,iColumns:ce,onRowDoubleClick:t=>r(t.row.issuanceId),hideAction:!0}),e.jsxs(k,{open:se,onClose:R,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(T,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(N,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Receiving Details"}),e.jsx(P,{onClick:R,sx:{color:"#ffffff"},children:e.jsx(G,{})})]}),e.jsxs(B,{children:[e.jsx(L,{id:"alert-dialog-slide-description"}),e.jsx(be,{iss:D,handleClose:R,refetchIssuanceData:W})]})]}),e.jsxs(k,{open:ie,onClose:$,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(T,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(N,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx(P,{onClick:$,sx:{color:"#ffffff"},children:e.jsx(G,{})})]}),e.jsxs(B,{children:[e.jsx(L,{id:"alert-dialog-slide-description"}),e.jsx(_,{rId:16,receiving:{paramIssuanceId:D.issuanceId}})]})]})]})]})]}),e.jsxs(V,{variant:"outlined",sx:{marginTop:2},children:[e.jsx(X,{className:"css-4rfrnx-MuiCardHeader-root",title:"View Receivings",titleTypographyProps:{style:{color:"white"}}}),e.jsx(d,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsxs(d,{item:!0,xs:12,children:[e.jsx(Y,{initialRows:C,iColumns:ue,hideAction:!0}),e.jsxs(k,{open:re,onClose:H,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(T,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(N,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx(P,{onClick:H,sx:{color:"#ffffff"},children:e.jsx(G,{})})]}),e.jsxs(B,{children:[e.jsx(L,{id:"alert-dialog-slide-description"}),e.jsx(_,{rId:14,igpReport:{ParamIGPNumber:D.igpNumber}})]})]})]})})]})]})},He=()=>{var f,x,l;const o=ve(),n=(f=o.state)==null?void 0:f.data,s=(l=(x=o.state)==null?void 0:x.tab)==null?void 0:l.toString();console.log("rowData",n),console.log("tab",s);const[u,p]=a.useState("1"),I=(r,C)=>{p(C),console.log("value",u)};return a.useEffect(()=>{s&&p(s)},[s]),e.jsx(ye,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(O,{sx:{width:"100%",typography:"body1"},children:e.jsxs(Se,{value:u,children:[e.jsx(O,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(De,{onChange:I,children:[e.jsx(h,{icon:e.jsx(Ie,{}),label:"Dyeing Receiving",value:"1",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(h,{icon:e.jsx(j,{}),label:"Embroidery Receiving",value:"2",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(h,{icon:e.jsx(j,{}),label:"Schiffili Receiving",value:"3",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(h,{icon:e.jsx(j,{}),label:"Additional Process Receiving",value:"4",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(h,{icon:e.jsx(j,{}),label:"Additional Services Receiving",value:"5",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})})]})}),e.jsx(c,{value:"1",children:e.jsx(we,{rowData:n})}),e.jsx(c,{value:"2"}),e.jsx(c,{value:"3"}),e.jsx(c,{value:"4"}),e.jsx(c,{value:"5"}),e.jsx(c,{value:"6"})]})})})};export{He as default};
