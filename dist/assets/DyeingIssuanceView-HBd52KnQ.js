import{u as U,c as E,w as P,b as w,x as B,y as O,j as e,G as s,T as A}from"./index-BQnKJm_U.js";import{r as l}from"./vendor-BXCbSo2_.js";import{R as H}from"./ReuseableDataGrid-DM_ExMFu.js";import{B as M,a as V}from"./axios-CIHeZEXI.js";import{T as r}from"./TextField-B9bDqCXW.js";import{M as o}from"./MenuItem-CqoynPPu.js";const _=({iss:a,handleClose:j,refetchData:v,isRejected:y})=>{const{user:b}=U(),[i,k]=l.useState({poId:a.poId,issuanceId:a.issuanceId,rejectionId:a.rejectionId||null,processTypeId:a.processTypeId||1223,dispatchedQuantity:"",dispatchFrom:"",destination:"",isRejectedOGP:y?"Y":"N",remarks:"",truckId:"",driverId:"",createdBy:b.empId}),{enqueueSnackbar:m}=E(),[g,x]=l.useState([]),[f,N]=l.useState([]),[D,L]=l.useState([]),[G,Q]=l.useState([]),[z,F]=l.useState([]),{data:d,refetch:I}=P({poId:a.poId,issuanceId:a.issuanceId},{skip:!a.poId||!a.issuanceId}),{data:c,refetch:Y}=w(),{data:h,refetch:R}=B(),{data:p,refetch:T}=O();l.useEffect(()=>{if((d==null?void 0:d.result)===null){x([]);return}d&&x(d.result.map((t,n)=>({id:n+1,...t})))},[d,I]),l.useEffect(()=>{h&&Q(h.result.map((t,n)=>({id:n+1,...t})))},[h,R]),l.useEffect(()=>{p&&F(p.result.map((t,n)=>({id:n+1,...t})))},[p,T]),l.useEffect(()=>{c&&(N(c.result[0].destination.map((t,n)=>({id:n+1,...t}))),L(c.result[0].dispatchFrom.map((t,n)=>({id:n+1,...t}))))},[c,I]),console.log("iss",a),console.log("formData",i),console.log("destinantionsList",f),console.log("dispatchFromList",D);const u=t=>{const{name:n,value:C}=t.target;k({...i,[n]:C})},S=[{field:"id",headerName:"Sr#"},{field:"fabricName",headerName:"Fabric"},{field:"colorName",headerName:"Color"},{field:"issuanceQuantity",headerName:"Issuance Quantity"},{field:"rate",headerName:"Rate"},{field:"uomName",headerName:"UOM"},{field:"vendorName",headerName:"Fabric"}],W=async()=>{try{const t=await V.post("http://100.42.177.77:83/api/Issuance/GenerateOGP",i);v(),t.data.success?m(`${t.data.message} !`,{variant:"success",autoHideDuration:5e3}):(m(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message)),console.log("Save response:",t.data),j()}catch(t){console.error("Error saving data:",t),m("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};return e.jsxs("div",{children:[e.jsxs(s,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,disabled:!0,label:"Production",name:"productionId",value:a.collectionName,size:"small"})}),e.jsx(s,{item:!0,xs:12,md:1.5,children:e.jsx(r,{fullWidth:!0,disabled:!0,label:"Vendor",name:"vendorId",value:a.vendorName,size:"small"})}),e.jsx(s,{item:!0,xs:12,md:1.5,children:e.jsx(r,{fullWidth:!0,disabled:!0,label:"Process Type",name:"processTypename",value:a.processTypename,size:"small"})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{size:"small",type:a.issuanceDate?null:"Date",label:"Issuance Date",name:"issuanceDate",value:a.issuanceDate?new Date(a.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):i.issuanceDate,fullWidth:!0,disabled:a.issuanceDate,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{size:"small",type:a.issuanceDate?null:"Date",label:"ExpectedReturn Date",name:"expectedReturnDate",value:a.expectedReturnDate?new Date(a.expectedReturnDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):i.expectedReturnDate,fullWidth:!0,disabled:a.expectedReturnDate,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Dispatch From",name:"dispatchFrom",value:i.dispatchFrom,onChange:u,size:"small",children:D.map(t=>e.jsx(o,{value:t.lookUpId,children:t.lookUpName},t.lookUpId))})}),e.jsx(s,{item:!0,xs:12,md:1.5,children:e.jsx(r,{fullWidth:!0,disabled:!0,label:"Issuance Quantity",name:"issuanceQuantity",value:a.issuanceQuantity||a.rejectedQty,size:"small"})}),e.jsx(s,{item:!0,xs:12,md:1.5,children:e.jsx(r,{fullWidth:!0,type:"Number",label:"DispatchedQuantity",name:"dispatchedQuantity",value:i.dispatchedQuantity,onChange:u,size:"small"})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Destination",name:"destination",value:i.destination,onChange:u,size:"small",children:f.map(t=>e.jsx(o,{value:t.lookUpId,children:t.lookUpName},t.lookUpId))})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Drivers",name:"driverId",value:i.driverId,onChange:u,size:"small",children:G.map(t=>e.jsx(o,{value:t.driverId,children:t.driverName},t.driverId))})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Trucks",name:"truckId",value:i.truckId,onChange:u,size:"small",children:z.map(t=>e.jsx(o,{value:t.truckId,children:t.truckNumber},t.truckId))})}),e.jsx(s,{item:!0,xs:12,md:3,children:e.jsx(r,{fullWidth:!0,label:"Remarks",name:"remarks",value:i.remarks,onChange:u,size:"small"})})]}),e.jsxs(s,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(A,{variant:"h2",children:"Details"})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(H,{initialRows:g,iColumns:S,hideAction:!0})}),e.jsx(s,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(M,{variant:"contained",size:"small",onClick:W,disabled:a.status===9,children:"Generate OGP"})})]})]})};export{_ as D};