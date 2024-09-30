import{c as pe,u as me,L as he,n as fe,N as xe,O as ge,j as e,B as w,C as Q,d as M,G as d,T as z,e as ve,P as ye,M as je}from"./index-39l8sM5Y.js";import{r as a}from"./vendor-BXCbSo2_.js";import{d as Ie}from"./CategoryOutlined-BFUgLYEY.js";import{d as v}from"./AssignmentOutlined-gcmYWm7Z.js";import{I as $,a as Ce,B as y}from"./axios-BWUwFnln.js";import{d as W}from"./Close-wcyf3mqg.js";import{R as be}from"./ReceivingDetails-CuQLLjUI.js";import{R as H,a as V,b as F,c as U,d as X,B as Y}from"./ReuseableDataGrid-BPyget6h.js";import De from"./Reports-J93Kn4dG.js";import{S}from"./StatusChip-CqVTwn9e.js";import{T as _}from"./TextField-B7IP_ndE.js";import{M as q}from"./MenuItem-qJMJ5sWO.js";import{T as Se,a as we,b as f,c}from"./TabPanel-BsG9cIUb.js";import"./Skeleton-_4TR0oIL.js";const Re=()=>{const{enqueueSnackbar:o}=pe(),{user:n}=me();a.useState([]),a.useState(!1);const[s,u]=a.useState({issuanceId:"",poId:"",productionId:"",ogpNumber:"",appId:n.appId,createdOn:new Date().toISOString(),createdBy:n.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:n.empId}),[p,j]=a.useState([]),[m,x]=a.useState([]),[l,r]=a.useState(null),[R,J]=a.useState([]),[K,Z]=a.useState([]);a.useState(!1);const{data:I,error:Ne,isLoading:Pe,refetch:ee}=he(s.productionId,{skip:!s.productionId}),{data:C,refetch:te}=fe(),{data:b,refetch:ae}=xe(s.poId,{skip:!s.poId}),{data:g,refetch:N}=ge({issuanceId:l,processTypename:"Dyeing"},{skip:!l});console.log("receivingData",g);const[se,ie]=a.useState([]);a.useEffect(()=>{C&&ie(C.result.map((t,i)=>({id:i,...t})))},[C,te]),a.useEffect(()=>{I&&x(I.result.map((t,i)=>({id:i+1,...t})))},[I,ee]),a.useEffect(()=>{g&&Z(g.result.map((t,i)=>({id:i+1,...t})))},[g,N]),console.log("issId",l),a.useEffect(()=>{b&&J(b.result.map((t,i)=>({id:i,...t})))},[b,ae]),console.log("initialRows",p);const P=t=>{const{name:i,value:h}=t.target;if(i==="poId"){const E=m.find(ue=>ue.poId===parseInt(h));u({...s,poId:h,issuanceId:E?E.issuanceId:""})}else u({...s,[i]:h})},G=async()=>{try{const t=await Ce.get(`http://100.42.177.77:83/api/Receiving/GetIssuanceByPoIdAndOGPNumber?poId=${s.poId}`);console.log("Save response:",t.data),t.data.success?(o(`${t.data.message} !`,{variant:"success",autoHideDuration:5e3}),j(t.data.result.map((i,h)=>({id:h+1,...i})))):(o(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message))}catch(t){console.error("Error saving data:",t),o("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};a.useEffect(()=>(G(),()=>{}),[s.poId]),console.log("formData",s);const[re,T]=a.useState(!1),[oe,k]=a.useState(!1),[B,L]=a.useState(!1),ne=async t=>{L(t),T(!0)},O=async t=>{k(!0),L(t)},D=()=>{T(!1)},A=()=>{k(!1)},le=async t=>{r(t.issuanceId),N()},de=[{field:"id",headerName:"Sr#"},{field:"issuanceId",headerName:"Issuance#"},{field:"vendorName",headerName:"Vendor"},{field:"issuanceQuantity",headerName:"Total",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(ve,{label:t.value,sx:{backgroundColor:"primary.dark",color:"white"}})},{field:"dispatchedQuantity",headerName:"Dispatched",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(S,{label:t.row.dispatchedQuantity,status:"Issued"})},{field:"receivedQty",headerName:"Received",renderCell:t=>e.jsx(S,{label:t.row.receivedQty,status:"Received"})},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(Y,{variant:"text",size:"small",sx:{mt:1},children:[e.jsx(y,{size:"small",color:"primary",onClick:()=>ne(t.row),disabled:t.row.status!==9||t.row.dispatchedQuantity===t.row.receivedQty,children:"Generate IGP"}),e.jsx(y,{size:"small",color:"primary",onClick:()=>le(t.row),children:"View Receivings"}),e.jsx(y,{size:"small",color:"primary",onClick:()=>O(t.row),children:"Receiving Report"})]})})}],ce=[{field:"id",headerName:"Sr #"},{field:"collectionName",headerName:"Collection Name"},{field:"poName",headerName:"PO"},{field:"igpNumber",headerName:"IGP Number"},{field:"igpDate",headerName:"IGP Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"receivingDate",headerName:"Receiving Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"receivedQty",headerName:"Received"},{field:"processTypename",headerName:"Process Type"},{field:"statusName",headerName:"Status",renderCell:t=>e.jsx(S,{label:t.value,status:t.value})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(Y,{variant:"text",size:"small",sx:{mt:1},children:e.jsx(y,{size:"small",color:"primary",onClick:()=>O(t.row),children:"IGP"})})})}];return e.jsxs(w,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(Q,{variant:"outlined",children:[e.jsx(M,{className:"css-4rfrnx-MuiCardHeader-root",title:"Pending Receivables",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(d,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(d,{item:!0,xs:12,md:3,children:e.jsx(_,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:s.productionId,onChange:P,size:"small",children:se.map(t=>e.jsx(q,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(d,{item:!0,xs:12,md:3,children:e.jsx(_,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:s.poId,onChange:P,size:"small",children:m.map(t=>e.jsx(q,{value:t.poId,children:t.poIdName},t.poId))})}),e.jsxs(d,{item:!0,xs:12,children:[e.jsx(H,{initialRows:p,iColumns:de,onRowDoubleClick:t=>r(t.row.issuanceId),hideAction:!0}),e.jsxs(V,{open:re,onClose:D,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(F,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(z,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Receiving Details"}),e.jsx($,{onClick:D,sx:{color:"#ffffff"},children:e.jsx(W,{})})]}),e.jsxs(U,{children:[e.jsx(X,{id:"alert-dialog-slide-description"}),e.jsx(be,{iss:B,handleClose:D,refetchIssuanceData:G})]})]}),e.jsxs(V,{open:oe,onClose:A,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(F,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(z,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx($,{onClick:A,sx:{color:"#ffffff"},children:e.jsx(W,{})})]}),e.jsxs(U,{children:[e.jsx(X,{id:"alert-dialog-slide-description"}),e.jsx(De,{rId:16,receiving:{paramIssuanceId:B.issuanceId}})]})]})]})]})]}),e.jsxs(Q,{variant:"outlined",sx:{marginTop:2},children:[e.jsx(M,{className:"css-4rfrnx-MuiCardHeader-root",title:"View Receivings",titleTypographyProps:{style:{color:"white"}}}),e.jsx(d,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(d,{item:!0,xs:12,children:e.jsx(H,{initialRows:K,iColumns:ce,hideAction:!0})})})]})]})},Ve=()=>{var m,x,l;const o=ye(),n=(m=o.state)==null?void 0:m.data,s=(l=(x=o.state)==null?void 0:x.tab)==null?void 0:l.toString();console.log("rowData",n),console.log("tab",s);const[u,p]=a.useState("1"),j=(r,R)=>{p(R),console.log("value",u)};return a.useEffect(()=>{s&&p(s)},[s]),e.jsx(je,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(w,{sx:{width:"100%",typography:"body1"},children:e.jsxs(Se,{value:u,children:[e.jsx(w,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(we,{onChange:j,children:[e.jsx(f,{icon:e.jsx(Ie,{}),label:"Dyeing Receiving",value:"1",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(f,{icon:e.jsx(v,{}),label:"Embroidery Receiving",value:"2",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(f,{icon:e.jsx(v,{}),label:"Schiffili Receiving",value:"3",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(f,{icon:e.jsx(v,{}),label:"Additional Process Receiving",value:"4",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(f,{icon:e.jsx(v,{}),label:"Additional Services Receiving",value:"5",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})})]})}),e.jsx(c,{value:"1",children:e.jsx(Re,{rowData:n})}),e.jsx(c,{value:"2"}),e.jsx(c,{value:"3"}),e.jsx(c,{value:"4"}),e.jsx(c,{value:"5"}),e.jsx(c,{value:"6"})]})})})};export{Ve as default};
