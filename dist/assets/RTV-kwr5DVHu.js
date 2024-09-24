import{c as U,u as X,R as Y,S as _,j as e,B as C,C as q,d as J,G as b,T as D,e as K,L as Z,M as ee}from"./index-BQnKJm_U.js";import{r as o}from"./vendor-BXCbSo2_.js";import{d as te}from"./CategoryOutlined-Bcv7mrwf.js";import{d as h}from"./AssignmentOutlined-CvXohB2J.js";import"./ReceivingDetails-COipxSuI.js";import{R as ae,a as w,b as k,c as N,d as B,B as oe}from"./ReuseableDataGrid-DM_ExMFu.js";import{d as V}from"./Close-BQnbGXeb.js";import{D as se}from"./DyeingIssuanceView-HBd52KnQ.js";import{T as ie}from"./TextField-B9bDqCXW.js";import{M as re}from"./MenuItem-CqoynPPu.js";import{I as O,B as P}from"./axios-CIHeZEXI.js";import{T as ne,a as le,b as c,c as l}from"./TabPanel-eD93EyWL.js";import"./Skeleton-B93ZyZJN.js";const de=()=>{U();const{user:n}=X(),[s,r]=o.useState({issuanceId:"",poId:"",ogpNumber:"",appId:n.appId,createdOn:new Date().toISOString(),createdBy:n.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:n.empId}),[d,u]=o.useState([]),[p,f]=o.useState([]),[x,m]=o.useState([]),{data:a,error:v,isLoading:ce,refetch:I}=Y(s.poId,{skip:!s.poId}),{data:j,refetch:M}=_();o.useEffect(()=>{a&&u(a.result.map((t,i)=>({id:i+1,...t})))},[a,I]),o.useEffect(()=>{j&&f(j.result.map((t,i)=>({id:i+1,...t})))},[j,M]),console.log("initialRows",d);const G=t=>{const{name:i,value:y}=t.target;if(i==="poId"){const S=p.find(Q=>Q.poId===parseInt(y));r({...s,poId:y,issuanceId:S?S.issuanceId:""})}else r({...s,[i]:y})};console.log("formData",s);const[W,R]=o.useState(!1),[A,L]=o.useState(!1),[$,z]=o.useState(!1),E=async t=>{z(t),R(!0)},g=()=>{R(!1)},T=()=>{L(!1)},F=async t=>{m(t.issuanceId)},H=[{field:"id",headerName:"Sr#"},{field:"rtvNo",headerName:"RTV#"},{field:"fabricName",headerName:"Fabric"},{field:"vendorName",headerName:"Vendor"},{field:"receivedQty",headerName:"Received"},{field:"rejectedQty",headerName:"Rejected"},{field:"rejectionReason",headerName:"Reason"},{field:"rejectionDate",headerName:"Rejected On",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"actionTaken",headerName:"Status",renderCell:t=>e.jsx(K,{label:t.value,sx:{backgroundColor:"primary.dark",color:"white"},color:void 0})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(oe,{variant:"text",size:"small",sx:{mt:1},children:[e.jsx(P,{size:"small",color:"primary",onClick:()=>E(t.row),children:"Receive"}),e.jsx(P,{size:"small",color:"primary",onClick:()=>F(t.row),children:"POST"})]})})}];return e.jsx(C,{sx:{width:"100%",typography:"body1"},children:e.jsxs(q,{variant:"outlined",children:[e.jsx(J,{className:"css-4rfrnx-MuiCardHeader-root",title:"Receiving",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(b,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(b,{item:!0,xs:12,md:3,children:e.jsx(ie,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:s.poId,onChange:G,size:"small",children:p.map(t=>e.jsx(re,{value:t.poId,children:t.poIdName},t.poId))})}),e.jsxs(b,{item:!0,xs:12,children:[e.jsx(ae,{initialRows:d,iColumns:H,hideAction:!0}),e.jsxs(w,{open:W,onClose:g,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(k,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(D,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Details"}),e.jsx(O,{onClick:g,sx:{color:"#ffffff"},children:e.jsx(V,{})})]}),e.jsxs(N,{children:[e.jsx(B,{id:"alert-dialog-slide-description"}),e.jsx(se,{iss:$,handleClose:g,refetchData:I,isRejected:!0})]})]}),e.jsxs(w,{open:A,onClose:T,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(k,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(D,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx(O,{onClick:T,sx:{color:"#ffffff"},children:e.jsx(V,{})})]}),e.jsx(N,{children:e.jsx(B,{id:"alert-dialog-slide-description"})})]})]})]})]})})},Re=()=>{var f,x,m;const n=Z(),s=(f=n.state)==null?void 0:f.data,r=(m=(x=n.state)==null?void 0:x.tab)==null?void 0:m.toString();console.log("rowData",s),console.log("tab",r);const[d,u]=o.useState("1"),p=(a,v)=>{u(v),console.log("value",d)};return o.useEffect(()=>{r&&u(r)},[r]),e.jsx(ee,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(C,{sx:{width:"100%",typography:"body1"},children:e.jsxs(ne,{value:d,children:[e.jsx(C,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(le,{onChange:p,children:[e.jsx(c,{icon:e.jsx(te,{}),label:"Dyeing RTV",value:"1",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(h,{}),label:"Embroidery RTV",value:"2",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(h,{}),label:"Schiffili RTV",value:"3",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(h,{}),label:"Additional Process RTV",value:"4",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(c,{icon:e.jsx(h,{}),label:"Additional Services RTV",value:"5",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})})]})}),e.jsx(l,{value:"1",children:e.jsx(de,{})}),e.jsx(l,{value:"2"}),e.jsx(l,{value:"3"}),e.jsx(l,{value:"4"}),e.jsx(l,{value:"5"}),e.jsx(l,{value:"6"})]})})})};export{Re as default};