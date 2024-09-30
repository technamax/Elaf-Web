import{c as W,u as F,Q as H,R as U,n as _,j as e,B as C,C as X,d as Y,G as f,T as q,P as J,M as K}from"./index-39l8sM5Y.js";import{r as s}from"./vendor-BXCbSo2_.js";import{d as Z}from"./CategoryOutlined-BFUgLYEY.js";import{d as x}from"./AssignmentOutlined-gcmYWm7Z.js";import"./ReceivingDetails-CuQLLjUI.js";import{R as ee,a as te,b as ae,c as se,d as oe,B as re}from"./ReuseableDataGrid-BPyget6h.js";import{d as ie}from"./Close-wcyf3mqg.js";import{S as v}from"./StatusChip-CqVTwn9e.js";import{D as ne}from"./DyeingIssuanceView-BjvOVeno.js";import{T as N}from"./TextField-B7IP_ndE.js";import{M as P}from"./MenuItem-qJMJ5sWO.js";import{I as de,B}from"./axios-BWUwFnln.js";import{T as le,a as ce,b as c,c as d}from"./TabPanel-BsG9cIUb.js";import"./Skeleton-_4TR0oIL.js";const ue=()=>{W();const{user:n}=F(),[o,i]=s.useState({issuanceId:"",poId:"",productionId:"",ogpNumber:"",appId:n.appId,createdOn:new Date().toISOString(),createdBy:n.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:n.empId}),[l,u]=s.useState([]),[p,m]=s.useState([]),[j,h]=s.useState([]),{data:a,error:R,isLoading:pe,refetch:T}=H(o.poId,{skip:!o.poId}),{data:g,refetch:k}=U(o.productionId,{skip:!o.productionId}),{data:y,refetch:V}=_(),[O,G]=s.useState([]);s.useEffect(()=>{y&&G(y.result.map((t,r)=>({id:r,...t})))},[y,V]),s.useEffect(()=>{a&&u(a.result.map((t,r)=>({id:r+1,...t})))},[a,T]),s.useEffect(()=>{g&&m(g.result.map((t,r)=>({id:r+1,...t})))},[g,k]),console.log("initialRows",l);const S=t=>{const{name:r,value:b}=t.target;if(r==="poId"){const w=p.find(L=>L.poId===parseInt(b));i({...o,poId:b,issuanceId:w?w.issuanceId:""})}else i({...o,[r]:b})};console.log("formData",o);const[M,D]=s.useState(!1);s.useState(!1);const[Q,E]=s.useState(!1),$=async t=>{E(t),D(!0)},I=()=>{D(!1)},z=async t=>{h(t.issuanceId)},A=[{field:"id",headerName:"Sr#"},{field:"rtvNo",headerName:"RTV#"},{field:"fabricName",headerName:"Fabric"},{field:"vendorName",headerName:"Vendor"},{field:"receivedQty",headerName:"Received",renderCell:t=>e.jsx(v,{label:t.row.receivedQty,status:"Received"})},{field:"rejectedQty",headerName:"Rejected",renderCell:t=>e.jsx(v,{label:t.row.rejectedQty,status:"Rejected"})},{field:"rejectionReason",headerName:"Reason"},{field:"rejectionDate",headerName:"Rejected On",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"actionTaken",headerName:"Status",renderCell:t=>e.jsx(v,{label:t.row.actionTaken,status:"Rejected"})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(re,{variant:"text",size:"small",sx:{mt:1},children:[e.jsx(B,{size:"small",color:"primary",onClick:()=>$(t.row),children:"RTV"}),e.jsx(B,{size:"small",color:"primary",onClick:()=>z(t.row),children:"POST"})]})})}];return e.jsx(C,{sx:{width:"100%",typography:"body1"},children:e.jsxs(X,{variant:"outlined",children:[e.jsx(Y,{className:"css-4rfrnx-MuiCardHeader-root",title:"Return To Vendor",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(f,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(f,{item:!0,xs:12,md:3,children:e.jsx(N,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:o.productionId,onChange:S,size:"small",children:O.map(t=>e.jsx(P,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(f,{item:!0,xs:12,md:3,children:e.jsx(N,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:o.poId,onChange:S,size:"small",children:p.map(t=>e.jsx(P,{value:t.poId,children:t.poIdName},t.poId))})}),e.jsxs(f,{item:!0,xs:12,children:[e.jsx(ee,{initialRows:l,iColumns:A,hideAction:!0}),e.jsxs(te,{open:M,onClose:I,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(ae,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(q,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Rejection OGP"}),e.jsx(de,{onClick:I,sx:{color:"#ffffff"},children:e.jsx(ie,{})})]}),e.jsxs(se,{children:[e.jsx(oe,{id:"alert-dialog-slide-description"}),e.jsx(ne,{iss:Q,handleClose:I,refetchData:T,isRejected:!0})]})]})]})]})]})})},De=()=>{var m,j,h;const n=J(),o=(m=n.state)==null?void 0:m.data,i=(h=(j=n.state)==null?void 0:j.tab)==null?void 0:h.toString();console.log("rowData",o),console.log("tab",i);const[l,u]=s.useState("1"),p=(a,R)=>{u(R),console.log("value",l)};return s.useEffect(()=>{i&&u(i)},[i]),e.jsx(K,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(C,{sx:{width:"100%",typography:"body1"},children:e.jsxs(le,{value:l,children:[e.jsx(C,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(ce,{onChange:p,children:[e.jsx(c,{icon:e.jsx(Z,{}),label:"Dyeing RTV",value:"1",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(x,{}),label:"Embroidery RTV",value:"2",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(x,{}),label:"Schiffili RTV",value:"3",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(x,{}),label:"Additional Process RTV",value:"4",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(x,{}),label:"Additional Services RTV",value:"5",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})})]})}),e.jsx(d,{value:"1",children:e.jsx(ue,{})}),e.jsx(d,{value:"2"}),e.jsx(d,{value:"3"}),e.jsx(d,{value:"4"}),e.jsx(d,{value:"5"}),e.jsx(d,{value:"6"})]})})})};export{De as default};
