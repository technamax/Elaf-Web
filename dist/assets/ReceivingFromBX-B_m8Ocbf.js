import{u as U,c as $,l as _,m as J,n as K,o as Z,j as e,B as F,C as ee,d as se,G as r,T as C,D as te}from"./index-CzwspkkF.js";import{r as i}from"./vendor-BXCbSo2_.js";import{I as p,B as ae,a as D}from"./axios-lonJZgKi.js";import{d as ie}from"./VisibilityOutlined-D9xuAg3y.js";import{R as g,a as k,b as w,c as B,d as R}from"./ReuseableDataGrid-I9L9E5Xk.js";import{d as P}from"./Close-BQBfEc69.js";import{T as c}from"./TextField-Djr8gt34.js";import{M as ne}from"./MenuItem-ZWEe2ZC6.js";import"./Skeleton-DdLL8d67.js";const Ie=()=>{U(),i.useState([]);const{enqueueSnackbar:d}=$(),[s,l]=i.useState({});console.log("initialFormData",s);const[re,T]=i.useState(!1),[a,j]=i.useState({issuanceNo:(s==null?void 0:s.issuanceNo)||0,status:"",issuanceName:(s==null?void 0:s.issuanceName)||"",issuanceDate:new Date(s==null?void 0:s.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,collectionId:(s==null?void 0:s.collectionId)||"",productionId:(s==null?void 0:s.productionId)||""});i.useEffect(()=>{j({...a,issuanceNo:(s==null?void 0:s.issuanceNo)||0,issuanceName:(s==null?void 0:s.issuanceName)||"",issuanceDate:new Date(s==null?void 0:s.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,collectionId:(s==null?void 0:s.collectionId)||"",productionId:(s==null?void 0:s.productionId)||""})},[s,l]);const[I,G]=i.useState([]),{data:u,refetch:oe}=_(a.productionId,{skip:!a.productionId}),{data:f,refetch:ce}=J(a.collectionId,{skip:!a.collectionId}),{data:m,refetch:le}=K(a.status,{skip:!a.status}),{data:h}=Z(),[L,N]=i.useState([]),[W,E]=i.useState([]),[y,z]=i.useState([]);i.useEffect(()=>{m&&G(m.result.map((t,n)=>({id:n+1,...t})))},[m]),i.useEffect(()=>{h&&E(h.result.map((t,n)=>({id:n+1,...t})))},[h]),i.useEffect(()=>{u&&N(u.result.map((t,n)=>({id:n+1,...t})))},[u,a.productionId]),i.useEffect(()=>{f&&z(f.result.map((t,n)=>({id:n+1,...t})))},[f]),console.log("initialRows",I),console.log("fabricDetails",y);const o=t=>{const{name:n,value:x}=t.target;j({...a,[n]:x})},Q=async()=>{try{const t=await D.post("http://100.42.177.77:83/api/BxStockReceiving/SaveBxStockReceiving",a);console.log("Save response:",t.data),t.data.success?d("Dyeing saved successfully!",{variant:"success",autoHideDuration:5e3}):(d(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message))}catch(t){console.error("Error saving data:",t),d("Dyeing not saved successfully!",{variant:"error",autoHideDuration:5e3})}};console.log("formData",a);const[A,O]=i.useState(!1),[X,S]=i.useState(!1),q=async t=>{l(t);try{const n=await D.get(`http://100.42.177.77:83/api/ITP/GetITPDetailsByITPId?itpId=${t.itpId}`);N(n.data.result.map((x,M)=>({id:M+1,...x})))}catch(n){console.error("Error fetching ITP:",n)}S(!0)},b=()=>{O(!1),l({})},v=()=>{S(!1),l({})},H=[{field:"id",headerName:"Sr#"},{field:"issuanceNo",headerName:"Issuance No"},{field:"issuanceName",headerName:"Issuance Name"},{field:"noOfItems",headerName:"No. Of Items"},{field:"status",headerName:"Status"},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"View",headerName:"View Details",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(p,{color:"primary",onClick:()=>q(t.row),children:e.jsx(ie,{})})})}],V=[{field:"id",headerName:"Sr#"},{field:"fabric",headerName:"Fabric Name"},{field:"total",headerName:"Quantity from Planning"}],Y=[{field:"id",headerName:"Sr#"},{field:"barcode",headerName:"Barcode"},{field:"productName",headerName:"Product Name"},{field:"itpQuantity",headerName:"Quantity"},{field:"uomName",headerName:"UOM"},{field:"remarks",headerName:"Remarks"}];return e.jsxs(F,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(ee,{variant:"outlined",children:[e.jsx(se,{className:"css-4rfrnx-MuiCardHeader-root",title:"Stock Receiving",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,md:3,children:e.jsx(c,{label:"Status",fullWidth:!0,size:"small",name:"status",onChange:o,value:a.status,required:!0,select:!0,children:W.map(t=>e.jsx(ne,{value:t.statusId,children:t.statusDesc},t.statusId))})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(g,{initialRows:I,iColumns:H,setIsEdit:T,hideAction:!0}),e.jsxs(k,{open:A,onClose:b,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(w,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(C,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Details"}),e.jsx(p,{onClick:b,sx:{color:"#ffffff"},children:e.jsx(P,{})})]}),e.jsxs(B,{children:[e.jsx(R,{id:"alert-dialog-slide-description"}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Issuance No",fullWidth:!0,size:"small",name:"issuanceNo",onChange:o,value:a.issuanceNo,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Issuance Name",fullWidth:!0,size:"small",name:"issuanceName",onChange:o,value:a.issuanceName,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{size:"small",label:"Issuance Date",name:"issuanceDate",value:a.issuanceDate,onChange:o,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(r,{item:!0,xs:9,textAlign:"right",sx:{mt:2},children:e.jsx(ae,{variant:"contained",size:"small",onClick:Q,children:"Save"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(g,{initialRows:y,iColumns:V,hideAction:!0})})]})," "]})]}),e.jsxs(k,{open:X,onClose:v,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(w,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(C,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Receiving View"}),e.jsx(p,{onClick:v,sx:{color:"#ffffff"},children:e.jsx(P,{})})]}),e.jsxs(B,{children:[e.jsx(R,{id:"alert-dialog-slide-description"}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{size:"small",label:"Issuance Date",name:"issuanceDate",value:a.issuanceDate,onChange:o,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Receiving Date",fullWidth:!0,size:"small",name:"issuanceName",onChange:o,value:a.issuanceName,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(g,{initialRows:L,iColumns:Y,hideAction:!0})})]})]})]})]})]})," "]}),e.jsx(te,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}})]})};export{Ie as default};