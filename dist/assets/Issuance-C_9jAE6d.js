import{u as me,c as fe,af as He,j as e,G as l,T as L,s as Ae,J as Me,I as Ve,ag as $e,ah as Ue,ai as Ye,B as D,C as de,d as oe,D as Xe,M as pe,e as ue,L as _e}from"./index-DJPkcup3.js";import{r,R as ce}from"./vendor-BXCbSo2_.js";import{d as xe}from"./CategoryOutlined-CFhNiT5Q.js";import{d as O}from"./AssignmentOutlined-CxLFN9gI.js";import{I as Y,B as T,a as Je}from"./axios-CQzI3tFU.js";import{d as X}from"./Close-DuX-VUqy.js";import{S as N}from"./StatusChip-BP_18oYL.js";import ge from"./Reports-obzmdtZR.js";import{d as Ke}from"./VisibilityOutlined-BDIK9gej.js";import{R as ye,a as _,b as J,c as K,d as Z,B as Ie,u as Ze,D as et}from"./ReuseableDataGrid-By_VSTB5.js";import{D as tt}from"./DyeingIssuanceView-B_PnuS4O.js";import{T as h}from"./TextField-w7DeMdjH.js";import{M as he}from"./MenuItem-DByn7IQn.js";import{T as je,a as be,b as Q,c as S}from"./TabPanel-p0STosia.js";import"./Skeleton-Dfk4bixl.js";const st=({po:a,handleClose:v,refetchIssuanceData:b,issId:x})=>{var R,W;me();const[d,g]=r.useState({poId:a||0,issuanceId:x||""});fe();const[o,y]=r.useState([]),{data:j,refetch:f}=He({poId:d==null?void 0:d.poId,issuanceId:d==null?void 0:d.issuanceId},{skip:!(d!=null&&d.poId)||!(d!=null&&d.issuanceId)});r.useEffect(()=>{if((j==null?void 0:j.result)===null){y([]);return}j&&y(j.result.map((u,P)=>({id:P+1,...u})))},[j,f]),console.log("formData",d);const[C,w]=ce.useState(!1),[n,I]=ce.useState(!1),H=async u=>{I(!0),w(u)},z=()=>{I(!1)},B=[{field:"id",headerName:"Sr#"},{field:"ogpNumber",headerName:"OGP"},{field:"issuanceId",headerName:"Issuance"},{field:"vendorName",headerName:"Vendor"},{field:"isRejectedOGP",headerName:"IsRejected"},{field:"createdByName",headerName:"Created By"},{field:"dispatchedQuantity",headerName:"Dispatch",renderCell:u=>e.jsx(N,{label:u.row.dispatchedQuantity.toLocaleString(),status:"Issued"})},{field:"issuanceDate",headerName:"Issued On",valueGetter:u=>new Date(u).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return",valueGetter:u=>new Date(u).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"statusName",headerName:"Status",renderCell:u=>e.jsx(N,{label:u.value,status:u.value})},{field:"Actions",headerName:"Actions",renderCell:u=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(Ie,{variant:"text",size:"small",sx:{marginTop:1},children:e.jsx(T,{size:"small",color:"primary",onClick:()=>H(u.row),children:"OGP"})})})}];return e.jsxs("div",{children:[e.jsx(l,{container:!0,spacing:1,width:"Inherit",children:e.jsx(l,{item:!0,xs:12,textAlign:"",children:e.jsxs(L,{variant:"subtitle2",sx:{display:"block",fontWeight:"bold",fontSize:15},children:["Issuance ID : ",((R=o[0])==null?void 0:R.issuanceId)||0," | Issuance Quantity :"," ",((W=o[0])==null?void 0:W.issuanceQuantity.toLocaleString())||0," Meters"]})})}),e.jsx(l,{container:!0,width:"Inherit",children:e.jsxs(l,{item:!0,xs:12,children:[e.jsx(ye,{initialRows:o,iColumns:B,hideAction:!0}),e.jsxs(_,{open:n,onClose:z,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(J,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(L,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx(Y,{onClick:z,sx:{color:"#ffffff"},children:e.jsx(X,{})})]}),e.jsxs(K,{children:[e.jsx(Z,{id:"alert-dialog-slide-description"}),e.jsx(ge,{rId:C.isRejectedOGP==="Y"?19:13,ogpView:{paramIssuanceId:C.issuanceId,ogpNumber:C.ogpNumber},paramRejectionId:C.rejectionId})]})]})]})})]})},at=Ae(h)(({theme:a})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),nt=({rowData:a})=>{var le;const[v,b]=r.useState([]),x=Ze(),{enqueueSnackbar:d}=fe(),{user:g}=me(),[o,y]=r.useState([]),[j,f]=r.useState([]),C=o.reduce((t,s)=>t+(s.quantity??0),0).toFixed(2);console.log("Quantity",C);const w=o.reduce((t,s)=>t+(s.issuanceQuantity??0),0).toFixed(2),[n,I]=r.useState({issuanceId:0,poId:(a==null?void 0:a.poId)||0,productionId:(a==null?void 0:a.productionId)||"",issuanceDate:"",expectedReturnDate:(a==null?void 0:a.expectedReturnDate)||"",processTypeId:"",processTypeName:"",fabricId:(a==null?void 0:a.fabricId)||"",fabricName:(a==null?void 0:a.fabricName)||"",vendorId:(a==null?void 0:a.vendorId)||"",vendorName:(a==null?void 0:a.vendorName)||"",shrinkage:(a==null?void 0:a.shrinkage)||"",wastage:(a==null?void 0:a.wastage)||"",locationId:(a==null?void 0:a.locationId)||"",fullLocation:(a==null?void 0:a.fullLocation)||"",poQuantity:0,assignQuantity:0,stockReceived:0,remainingQuantity:0,quantity:0,balance:0,remarks:"",appId:g.appId,createdOn:new Date().toISOString(),createdBy:g.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:g.empId}),[H,z]=r.useState([]),[B,R]=r.useState("1"),W=(t,s)=>{R(s),console.log("value",B)},{data:u,refetch:P}=Me(),{data:A,refetch:ve}=Ve(n.productionId,{skip:!n.productionId}),{data:c,refetch:Ce}=$e(n.poId,{skip:!n.poId}),{data:k,refetch:ee}=Ue(n.poId,{skip:!n.poId}),{data:M,refetch:F}=Ye(n.poId,{skip:!n.poId});r.useEffect(()=>{I(t=>({...t,remainingQuantity:t.quantity-t.issuanceQty||0}))},[a,o,c]),r.useEffect(()=>{I(t=>({...t,balance:t.remainingQuantity-w||0}))},[a,o,c,n.remainingQuantity]);const[q,Se]=r.useState([]);r.useEffect(()=>{c&&I({...n,shrinkage:c.result[0].shrinkage,productionHeaderId:c.result[0].productionHeaderId,expectedReturnDate:c.result[0].expectedReturnDate,fabricId:c.result[0].fabricId,vendorId:c.result[0].vendorId,locationId:c.result[0].locationId,fullLocation:c.result[0].fullLocation,fabricName:c.result[0].fabricName,vendorName:c.result[0].vendorName,wastage:c.result[0].wastage,issuanceQty:c.result[0].issuanceQty,stockInHandQty:c.result[0].stockInHandQty,quantity:c.result[0].quantity})},[c,Ce]);const[Ne,Qe]=r.useState([]);r.useEffect(()=>{u&&Qe(u.result.map((t,s)=>({id:s,...t})))},[u,P]),r.useEffect(()=>{if((k==null?void 0:k.result)===null){y([]);return}k&&y(k.result.map((t,s)=>({id:s+1,...t})))},[k,ee]),r.useEffect(()=>{M&&z(M.result.map((t,s)=>({id:s+1,...t})))},[M,F]),r.useEffect(()=>{A&&Se(A.result.map((t,s)=>({id:s,...t})))},[A,ve]);const m=t=>{const{name:s,value:p}=t.target;if(s==="poId"){const i=q.find($=>$.poId===parseInt(p));I({...n,poId:p,shrinkage:i?i.shrinkage:"",processTypeId:i?i.processTypeId:"",processTypeName:i?i.processTypeName:"",expectedReturnDate:i?i.expectedReturnDate:"",fabricId:i?i.fabricId:"",vendorId:i?i.vendorId:"",locationId:i?i.locationId:"",fullLocation:i?i.fullLocation:"",fabricName:i?i.fabricName:"",vendorName:i?i.vendorName:"",wastage:i?i.wastage:""})}else s==="productionId"?(q.find(i=>i.productionId===parseInt(p)),y([]),I({...n,productionId:p,poId:""})):I({...n,[s]:p})};console.log("handleDisabled",(()=>{let t=!1;for(let s of o)s.quantity>=s.assignQuantity&&(t=!0);return t})());const ke=async()=>{if(v.length===0){d("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}for(let t of o)if(t.issuanceQuantity>t.remaining){d("Error:Iissuance quantity cannot be greater than remaining quantity!",{variant:"error",autoHideDuration:5e3});return}console.log("formData",n);try{const t=await Je.post("http://100.42.177.77:81/api/Issuance/IssuanceToVendor",n);console.log("Save response:",t.data),d("Data saved successfully!",{variant:"success"}),f(s=>[...s,...n.issuanceTransactionDetails]),F(),ee()}catch(t){console.error("Error saving data:",t),d("Error saving data!",{variant:"error"})}};console.log("formData",n),console.log("dyeingPOs",q);const te=r.useCallback(t=>{const{id:s,field:p,value:i}=t;y($=>$.map(G=>{if(G.id===s){const Ee=G.quantity-G.assignQuantity,we={...G,[p]:i,issuanceId:0,issuanceDetId:0,remaining:Number(Ee),appId:g.appId,createdOn:new Date().toISOString(),createdBy:g.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:g.empId};return p==="issuanceQuantity"&&i>0&&b(U=>U.includes(s)?U:[...U,s]),we}return G}))},[y,b,g.appId,g.empId]);r.useEffect(()=>{I(t=>({...n}))},[te]);const Re=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"colorName",headerName:"Color"},{field:"quantity",headerName:"Total Qty",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(N,{label:t.row.quantity.toLocaleString(),status:"Completed"})},{field:"assignQuantity",headerName:"Assigned Quantity",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(N,{label:t.row.quantity.toLocaleString(),status:"Issued"})},{field:"remaining",headerName:"Remaining Qty",valueGetter:(t,s)=>(s.quantity-s.assignQuantity).toLocaleString(),renderCell:t=>{const s=t.row.quantity-t.row.assignQuantity;return e.jsx(ue,{label:s.toLocaleString(),sx:{backgroundColor:"#FF0000",color:"#FFFFFF"}})}},{field:"issuanceQuantity",headerName:"Issuance Qty",renderCell:t=>e.jsx(at,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:t.row.issuanceQuantity||"",onChange:s=>te({id:t.id,field:"issuanceQuantity",value:Number(s.target.value)}),type:"number",disabled:t.row.quantity===t.row.assignQuantity,InputProps:{style:{fontSize:"0.875rem"}}})}],Pe=()=>{x.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};r.useEffect(()=>{Pe()});const[lt,Ge]=r.useState([]),Oe=r.useCallback(t=>{b(t);const s=t.map(p=>{const i=x.current.getRow(p);return console.log("rowData",i),i?{...i}:null}).filter(p=>p!==null);console.log("selectedDesigns",s),Ge(s)},[x]);r.useEffect(()=>{const t=o.filter(s=>v.includes(s.id));I(s=>({...s,issuanceTransactionDetails:t}))},[o,v]),console.log("poDetails",o),r.useEffect(()=>{x.current&&console.log("API ref is ready:",x.current)},[x]);const[Te,se]=r.useState(!1),[Le,ae]=r.useState(!1),[ne,ie]=r.useState(!1),De=async t=>{ie(t),se(!0)},V=()=>{se(!1)},ze=async t=>{ae(!0),ie(t)},re=()=>{ae(!1)},E=t=>t==null||isNaN(t)?"":new Intl.NumberFormat().format(t),[Be,We]=r.useState(null),Fe=t=>{R("2"),We(t.issuanceId)},qe=[{field:"id",headerName:"Sr#"},{field:"issuanceId",headerName:"Issuance"},{field:"vendorName",headerName:"Vendor"},{field:"issuanceQuantity",headerName:"Issuance",renderCell:t=>e.jsx(N,{label:t.row.issuanceQuantity.toLocaleString(),status:"Received"})},{field:"dispatchedQuantity",headerName:"Dispatch",renderCell:t=>e.jsx(N,{label:t.row.dispatchedQuantity.toLocaleString(),status:"Issued"})},{field:"remaining",headerName:"Remaining Qty",valueGetter:(t,s)=>(s.issuanceQuantity-s.dispatchedQuantity).toLocaleString(),renderCell:t=>{const s=t.row.issuanceQuantity-t.row.dispatchedQuantity;return e.jsx(ue,{label:s.toLocaleString(),sx:{backgroundColor:"#FF0000",color:"#FFFFFF"}})}},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"fabricCount",headerName:"Fabrics"},{field:"statusName",headerName:"Status",renderCell:t=>e.jsx(N,{label:t.value,status:t.value})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(Ie,{variant:"text",size:"small",sx:{marginTop:1},children:[e.jsx(T,{size:"small",color:"primary",onClick:()=>De(t.row),disabled:t.row.issuanceQuantity<=t.row.dispatchedQuantity,children:"Generate OGP"}),e.jsx(T,{size:"small",color:"primary",onClick:()=>Fe(t.row),children:"View OGP"}),e.jsx(T,{size:"small",color:"primary",onClick:()=>ze(t.row),children:"View Issuance"})]})})}];return e.jsxs(D,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(de,{variant:"outlined",children:[e.jsx(oe,{className:"css-4rfrnx-MuiCardHeader-root",title:"Dyeing Issuance",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(l,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:n.productionId,onChange:m,size:"small",children:Ne.map(t=>e.jsx(he,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:n.poId,onChange:m,size:"small",children:q.map(t=>e.jsx(he,{value:t.poId,children:t.poIdName},t.poId))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{size:"small",type:"date",label:"Issuance Date",name:"issuanceDate",value:n.issuanceDate,onChange:m,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{size:"small",disabled:!0,label:"Expected Return",name:"expectedReturnDate",value:n.expectedReturnDate?new Date(n.expectedReturnDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):null,onChange:m,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,disabled:!0,label:"Process",name:"processTypeName",value:n.processTypeName,onChange:m,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,disabled:!0,label:"Select Fabric",name:"fabricName",value:n.fabricName,onChange:m,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{label:"Vendor",disabled:!0,fullWidth:!0,size:"small",name:"vendorName",onChange:m,value:n.vendorName,required:!0})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(h,{label:"Shrinkage",fullWidth:!0,disabled:!0,size:"small",name:"shrinkage",onChange:m,value:n.shrinkage,required:!0})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(h,{label:"Wastage",fullWidth:!0,disabled:!0,size:"small",name:"wastage",onChange:m,value:n.wastage,required:!0})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,disabled:!0,label:"Select Location",name:"fullLocation",value:n.fullLocation,onChange:m,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,label:"PO Quantity",name:"quantity",value:E(n.quantity),onChange:m,size:"small",disabled:!0})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,label:"Issued Quantity",name:"issuanceQty",value:E(n.issuanceQty),onChange:m,size:"small",disabled:!0})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,label:"Remaining Quantity",name:"remainingQuantity",value:E(n.remainingQuantity),onChange:m,size:"small",disabled:!0})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(h,{fullWidth:!0,label:"Stock In HAnd",name:"stockInHandQty",value:E(n.stockInHandQty),onChange:m,size:"small",disabled:!0})}),e.jsx(l,{item:!0,xs:9,children:e.jsx(h,{label:"Remarks",fullWidth:!0,size:"small",multiline:!0,maxRows:3,name:"remarks",onChange:m,value:n.remarks,required:!0})}),e.jsx(l,{item:!0,xs:3,textAlign:"right",children:e.jsxs(L,{variant:"overline",sx:{display:"block",fontWeight:"bold",fontSize:15},children:["Balance : ",(le=n.balance)==null?void 0:le.toLocaleString()]})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(et,{rows:o,columns:Re,apiRef:x,disableRowSelectionOnClick:!0,checkboxSelection:!0,isRowSelectable:t=>t.row.quantity!==t.row.assignQuantity,onRowSelectionModelChange:Oe,rowSelectionModel:v})}),e.jsx(l,{item:!0,xs:12,textAlign:"right",children:e.jsx(T,{variant:"contained",size:"small",onClick:ke,disabled:o.every(t=>t.quantity<=t.assignQuantity),children:"Save"})})]})]}),e.jsx(Xe,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(de,{variant:"outlined",children:[e.jsx(oe,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(Ke,{}),title:"View Issuance",titleTypographyProps:{style:{color:"white"}}}),e.jsx(pe,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(D,{sx:{width:"100%",typography:"body1"},children:e.jsxs(je,{value:B,children:[e.jsx(D,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(be,{onChange:W,children:[e.jsx(Q,{icon:e.jsx(xe,{}),label:"Issuance",value:"1",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})}),e.jsx(Q,{icon:e.jsx(O,{}),label:"OGP",value:"2",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})})]})}),e.jsx(S,{value:"1",children:e.jsx(l,{container:!0,spacing:2,width:"Inherit",children:e.jsxs(l,{item:!0,xs:12,children:[e.jsx(ye,{initialRows:H,iColumns:qe,hideAction:!0,height:!0,refetchIssuanceData:F}),e.jsxs(_,{open:Te,onClose:V,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(J,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(L,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Generate OGP"}),e.jsx(Y,{onClick:V,sx:{color:"#ffffff"},children:e.jsx(X,{})})]}),e.jsxs(K,{children:[e.jsx(Z,{id:"alert-dialog-slide-description"}),e.jsx(tt,{iss:ne,handleClose:V,refetchData:F})]})]}),e.jsxs(_,{open:Le,onClose:re,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(J,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(L,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Issuance Report"}),e.jsx(Y,{onClick:re,sx:{color:"#ffffff"},children:e.jsx(X,{})})]}),e.jsxs(K,{children:[e.jsx(Z,{id:"alert-dialog-slide-description"}),e.jsx(ge,{rId:15,DyeingIssuance:{paramIssuanceId:ne.issuanceId}})]})]})]})})}),e.jsx(S,{value:"2",children:e.jsx(st,{po:n.poId,issId:Be})})]})})})]})]})},it=()=>e.jsx("div",{children:e.jsx("h1",{children:"SSRS Report Viewer"})}),Ct=()=>{var o,y,j;const a=_e(),v=(o=a.state)==null?void 0:o.data,b=(j=(y=a.state)==null?void 0:y.tab)==null?void 0:j.toString();console.log("rowData",v),console.log("tab",b);const[x,d]=r.useState("1"),g=(f,C)=>{d(C),console.log("value",x)};return r.useEffect(()=>{b&&d(b)},[b]),e.jsx(pe,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(D,{sx:{width:"100%",typography:"body1"},children:e.jsxs(je,{value:x,children:[e.jsx(D,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(be,{onChange:g,children:[e.jsx(Q,{icon:e.jsx(xe,{}),label:"Dyeing Issuance",value:"1",sx:f=>({"& .MuiTouchRipple-child":{backgroundColor:`${f.palette.primary.main} !important`}})}),e.jsx(Q,{icon:e.jsx(O,{}),label:"Embroidery Issuance",value:"2",sx:f=>({"& .MuiTouchRipple-child":{backgroundColor:`${f.palette.primary.main} !important`}})}),e.jsx(Q,{icon:e.jsx(O,{}),label:"Schiffili Issuance",value:"3",sx:f=>({"& .MuiTouchRipple-child":{backgroundColor:`${f.palette.primary.main} !important`}})}),e.jsx(Q,{icon:e.jsx(O,{}),label:"Additional Process Issuance",value:"4",sx:f=>({"& .MuiTouchRipple-child":{backgroundColor:`${f.palette.primary.main} !important`}})}),e.jsx(Q,{icon:e.jsx(O,{}),label:"Additional Services Issuance",value:"5",sx:f=>({"& .MuiTouchRipple-child":{backgroundColor:`${f.palette.primary.main} !important`}})})]})}),e.jsx(S,{value:"1",children:e.jsx(nt,{rowData:v})}),e.jsx(S,{value:"2",children:e.jsx(it,{})}),e.jsx(S,{value:"3"}),e.jsx(S,{value:"4"}),e.jsx(S,{value:"5"}),e.jsx(S,{value:"6"})]})})})};export{Ct as default};
