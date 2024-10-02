import{c as Ce,u as he,E as we,ao as Te,a6 as et,j as e,B as X,G as n,al as tt,T as W,s as at,ap as st,aq as rt,n as nt,ae as ot,v as it,ar as lt,as as dt,at as ct,C as ve,d as De,e as _,D as ut,M as mt}from"./index-k9GWQJOu.js";import{r as a,R as re}from"./vendor-BXCbSo2_.js";import{d as ft}from"./AddCircleOutlineOutlined-DpKzaeF_.js";import{d as $}from"./AssignmentOutlined-DQJc0R_Q.js";import{u as Pe,D as ke,R as fe,a as ne,b as oe,c as ie,d as le,B as ht}from"./ReuseableDataGrid-D6KGNruf.js";import{B as z,a as Fe,I as de}from"./axios-CaswPiu6.js";import{d as ce}from"./Close-CwC_dym4.js";import xt from"./Reports-BgemgIcq.js";import{S as ue}from"./StatusChip-DQNIzaKK.js";import{d as pt}from"./VisibilityOutlined-6VCp2fDn.js";import{T as u}from"./TextField-Bw61L3Ab.js";import{M as Y}from"./MenuItem-BJ2KxKJk.js";import{T as gt,a as yt,b as U,c as V}from"./TabPanel-CYIvsX5V.js";import"./Skeleton-C1-xTFDk.js";const bt=({vId:o,handleClose:l})=>{const[y,C]=a.useState([]),[P,m]=a.useState([]),h=Pe(),{enqueueSnackbar:c}=Ce(),{user:A}=he(),[B,O]=a.useState([]),[k,p]=a.useState([]),[S,s]=a.useState({categoryId:0,vendorId:o.vendorId,poId:o.poId}),{data:v}=we(),{data:E,refetch:M}=Te(o.poId,{skip:!o.poId}),{data:j,refetch:G}=et({vId:o.vendorId,categoryId:S.categoryId},{skip:!o||!S.categoryId});a.useEffect(()=>{v&&O(v.result.map((d,D)=>({id:D+1,...d})))},[v]),console.log("columnsData",j),a.useEffect(()=>{if((j==null?void 0:j.result)===null){p([]);return}j!=null&&j.result&&p(j.result.filter(d=>!P.some(D=>D.id===d.id)).map((d,D)=>({id:D+1,...d})))},[j,P,G]);const i=d=>{const{name:D,value:R}=d.target;s({...S,[D]:R})},b=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions",flex:1}],T=()=>{h.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};re.useEffect(()=>{T()});const[F,g]=a.useState([]),I=re.useCallback(d=>{C(d);const D=d.map(R=>{const L=h.current.getRow(R);return console.log("rowData",L),L?{...L,vendorPoId:0,poId:0,appId:A.appId,createdOn:new Date().toISOString(),createdBy:A.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:A.empId}:null}).filter(R=>R!==null);console.log("selectedDesigns",D),g(D)},[h]);a.useEffect(()=>{k.filter(d=>y.includes(d.id)),s(d=>({...d,vendorPoAssignTermsList:F}))},[k,y]),console.log("formData",S),re.useEffect(()=>{h.current&&console.log("API ref is ready:",h.current)},[h]),console.log("selectedDesigns:",F);const q=async()=>{if(F.length===0){c("No terms are selected. Please select at least one term.",{variant:"warning",autoHideDuration:5e3});return}try{const d=await Fe.post("http://100.42.177.77:8091/api/PO/AssignTermToDyeingPo",S);d.data.success?(c(`${d.data.message} !`,{variant:"success",autoHideDuration:5e3}),m(D=>[...D,...F])):c(`${d.data.message} !`,{variant:"error",autoHideDuration:5e3}),M(),l()}catch(d){console.error("Error saving data:",d),c("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};return e.jsx(X,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",mt:2,width:"Inherit"},children:e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,label:"Vendor",name:"vendorId",value:o.vendorName,disabled:!0,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Category",name:"categoryId",value:S.categoryId,onChange:i,size:"small",children:B.map(d=>e.jsx(Y,{value:d.categoryId,children:d.description},d.categoryId))})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(ke,{rows:k,columns:b,apiRef:h,disableRowSelectionOnClick:!0,checkboxSelection:!0,onRowSelectionModelChange:I,rowSelectionModel:y})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(z,{variant:"contained",size:"small",onClick:q,children:"Assign Terms"})})]})})},St=({vId:o})=>{const[l,y]=a.useState([]),[C,P]=a.useState([]),{data:m,refetch:h}=tt(o.poId,{skip:!o.poId}),{data:c,refetch:A}=Te(o.poId,{skip:!o.poId});a.useEffect(()=>{if((m==null?void 0:m.result)===null){y([]);return}m&&y(m.result.map((i,b)=>({id:b+1,...i})))},[m,h]),a.useEffect(()=>{if((c==null?void 0:c.result)===null){P([]);return}if(c){const i=c.result.reduce((b,T)=>b.find(g=>g.termCondDesc===T.termCondDesc)?b:b.concat([T]),[]);P(i.map((b,T)=>({id:T+1,...b})))}},[c,A]),console.log("vId",o);const[B,O]=a.useState(0),[k,p]=a.useState(0),[S,s]=a.useState(0),[v,E]=a.useState(0);a.useEffect(()=>{const i=l.reduce((g,I)=>g+(I.planningQty??0),0).toFixed(2),b=l.reduce((g,I)=>g+(I.quantity??0),0).toFixed(2),T=l.reduce((g,I)=>g+(I.totalBeforeTax??0),0).toFixed(2),F=l.reduce((g,I)=>g+(I.totalAfterTax??0),0).toFixed(2);O(parseFloat(i).toLocaleString()),p(parseFloat(b).toLocaleString()),s(parseFloat(T).toLocaleString()),E(parseFloat(F).toLocaleString())},[l]);const M=[...l,{id:"TOTAL_SUMMARY",planningQty:B,quantity:k,totalBeforeTax:S,totalAfterTax:v}],j=[{field:"id",headerName:"Sr#",colSpan:(i,b)=>b.id==="TOTAL_SUMMARY"?4:void 0,renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"black",fontWeight:"bold"},children:"Total Summary"}):i.value},{field:"designNo",headerName:"Design"},{field:"baseColor",headerName:"Base Color"},{field:"colorName",headerName:"Color"},{field:"vendorName",headerName:"Vendor"},{field:"uomName",headerName:"UOM"},{field:"planningQty",headerName:"Planned Qty",renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value.toLocaleString()},{field:"quantity",headerName:"Assigned Qty",renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value.toLocaleString()},{field:"rate",headerName:"Rate"},{field:"tax",headerName:"Tax"},{field:"totalBeforeTax",headerName:"Total",valueGetter:i=>i.toLocaleString(),renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value},{field:"totalAfterTax",headerName:"Total After Tax",valueGetter:i=>i.toLocaleString(),renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value}],G=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions"}];return console.log("assignedTerms",C),e.jsxs("div",{children:[e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Production",name:"productionId",value:o.collectionName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Process Type",name:"productionId",value:o.processTypeName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",label:"Issuance Date",name:"issuanceDate",value:new Date(o.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",label:"Planning Date",name:"expectedReturnDate",value:new Date(o.expectedReturnDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Fabric",name:"fabricId",value:o.fabricName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Vendor",name:"vendorId",value:o.vendorName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Shrinkage",fullWidth:!0,disabled:!0,size:"small",name:"shrinkage",value:o.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Wastage",fullWidth:!0,disabled:!0,size:"small",name:"wastage",value:o.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Location",name:"locationId",value:o.fullLocation,size:"small"})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(W,{variant:"h2",children:"Details"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(fe,{initialRows:M,iColumns:j,hideAction:!0,pageSize:10})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(W,{variant:"h2",children:"Terms and Conditions"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(fe,{initialRows:C,iColumns:G,hideAction:!0,pageSize:10})})]})]})},me=at(u)(({theme:o})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),jt=()=>{const[o,l]=a.useState([]),y=Pe(),{enqueueSnackbar:C}=Ce(),P=st(),[m,h]=a.useState([]),{user:c}=he(),[A,B]=a.useState([]),[O,k]=a.useState(!1),[p,S]=a.useState(new Set),[s,v]=a.useState({poId:0,productionId:"",issuanceDate:"",expectedReturnDate:"",processTypeId:1223,fabricId:"",pxQty:0,vendorId:"",shrinkage:"",wastage:"",rate:0,tax:0,locationId:"",remarks:"",appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:c.empId}),[E,M]=a.useState([]),[j,G]=a.useState([]),[i,b]=a.useState([]),[T,F]=a.useState([]),{data:g,refetch:I}=rt({productionId:s.productionId,status:7},{skip:!s.productionId}),{data:q,refetch:d}=nt(),{data:D,refetch:R}=ot(),{data:L,refetch:It}=it(),{data:J,refetch:Ne}=lt(s.productionId,{skip:!s.productionId}),{data:K,refetch:Ae}=dt(s.fabricId,{skip:!s.fabricId}),{data:Z,refetch:xe}=ct({fabricId:s.fabricId,productionId:s.productionId},{skip:!s.fabricId||!s.productionId}),[Oe,Re]=a.useState([]);a.useEffect(()=>{g&&(I(),M(g.result.map((t,r)=>({id:r+1,...t}))))},[g,I]),a.useEffect(()=>{J&&G(J.result.map((t,r)=>({id:r+1,...t})))},[J,Ne]),a.useEffect(()=>{Z&&h(Z.result.map((t,r)=>({id:r+1,...t})))},[Z,xe]),a.useEffect(()=>{K&&b(K.result.map((t,r)=>({id:r+1,...t})))},[K,Ae]),a.useEffect(()=>{L&&F(L.result.map((t,r)=>({id:r+1,...t})))},[L]),a.useEffect(()=>{q&&Re(q.result.map((t,r)=>({id:r,...t})))},[q,d]);const pe=m.reduce((t,r)=>t+(r.availableQty??0),0).toFixed(2),Qe=m.reduce((t,r)=>t+(r.quantity??0),0).toFixed(2),Be=m.reduce((t,r)=>t+(r.prevoiusPoQty??0),0).toFixed(2);a.useEffect(()=>{v(t=>({...s,overallQty:pe}))},[h,m]),a.useEffect(()=>{v(t=>({...s,overallQty:pe,remainingQuantity:(t.overallQty-Be-Qe).toFixed(2)||0}))},[h,m]),console.log("initialRows",E),console.log("poHeaderData",g);const w=t=>{const{name:r,value:x}=t.target;if(r==="vendorId"){const f=i.find(N=>N.vendorId===parseInt(x));v({...s,vendorId:x,shrinkage:f?f.shrinkage:"",wastage:f?f.wastage:""})}else if(r==="fabricId"){const f=j.find(N=>N.fabricId===parseInt(x));v({...s,fabricId:x,pxQty:f?f.pxQty:0,vendorId:"",shrinkage:"",wastage:""})}else v({...s,[r]:x})},Le=async()=>{if(o.length===0){C("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}console.log("formData",s);try{const t=await Fe.post("http://100.42.177.77:8091/api/PO/SavePOHeader",{...s});console.log("Save response:",t.data),R(),I(),t.data.success?(C("Data saved successfully!",{variant:"success",autoHideDuration:5e3}),S(r=>new Set([...r,...o])),v({...s,issuanceDate:"",expectedReturnDate:"",fabricId:"",processTypeId:1223,vendorId:"",shrinkage:"",wastage:"",locationId:"",appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:c.empId}),h([]),R(),I(),l([]),xe(),k(!1)):C(`Save failed: ${t.data.message}`,{variant:"error",autoHideDuration:5e3})}catch(t){console.error("Error saving data:",t),C("Failed to save data. Please try again.",{variant:"error",autoHideDuration:5e3})}};console.log("formData",s);const[ze,ge]=a.useState(!1),[We,ye]=a.useState(!1),[ee,be]=a.useState(!1),Ee=async t=>{be(t),ge(!0)},Me=async t=>{ye(!0),be(t)};console.log("terms condition",ee);const te=()=>{ge(!1)},Se=()=>{ye(!1)},Ge=t=>{P("/Production/Issuance",{state:{data:t,tab:1}})},[qe,je]=a.useState(!1),[He,Ue]=a.useState(!1),Ve=async t=>{Ue(t),je(!0)},Ie=()=>{je(!1)},Ye=[{field:"id",headerName:"Sr#"},{field:"poIdName",headerName:"PO ID"},{field:"collectionName",headerName:"Collection Name"},{field:"fabricName",headerName:"Fabric Name"},{field:"vendorName",headerName:"Vendor"},{field:"createdOn",headerName:"PO Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"fabricCount",headerName:"Fabrics"},{field:"statusName",headerName:"Status",renderCell:t=>e.jsx(ue,{label:t.row.statusName,status:"Pending"})},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(ht,{variant:"text",size:"small",children:[e.jsx(z,{size:"small",color:"primary",onClick:()=>Ee(t.row),children:"Assign Terms"}),e.jsx(z,{size:"small",color:"primary",onClick:()=>Me(t.row),children:"View"}),e.jsx(z,{size:"small",color:"primary",onClick:()=>Ge(t.row),children:"Issuance"}),e.jsx(z,{size:"small",color:"primary",onClick:()=>Ve(t.row),children:"PO Report"})]})})}];a.useEffect(()=>{h(m.map(t=>({...t,rate:s.rate,tax:s.tax,totalBeforeTax:s.rate*t.quantity,totalAfterTax:s.rate*t.quantity+s.rate*t.quantity*(s.tax/100)})))},[s.rate,s.tax]);const ae=a.useCallback(t=>{const{id:r,field:x,value:f}=t;console.log("Editing cell:",t),h(N=>N.map(se=>{if(se.id===r){const Q={...se,[x]:f,poId:0,poDetId:0,appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:c.empId};return x==="quantity"&&(Q.totalBeforeTax=Q.rate*Q.quantity,Q.totalAfterTax=Q.totalBeforeTax+Q.totalBeforeTax*(Q.tax/100)),x==="quantity"&&f>0&&l(H=>H.includes(r)?H:[...H,r]),x==="quantity"&&(f===""||f===0)&&l(H=>H.filter(Ze=>Ze!==r)),Q}return se}))},[h,c.appId,c.empId,s.rate]),_e=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"colorName",headerName:"Color"},{field:"availableQty",headerName:"Planned Qty",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(ue,{label:t.row.availableQty.toLocaleString(),status:"Inspected"})},{field:"prevoiusPoQty",headerName:"Prevoius PO.Qty",valueGetter:t=>t.toLocaleString(),renderCell:t=>e.jsx(ue,{label:t.row.prevoiusPoQty.toLocaleString(),status:"Received"})},{field:"remaining",headerName:"Remaining Qty",valueGetter:(t,r)=>(r.availableQty-r.prevoiusPoQty).toLocaleString(),renderCell:t=>{const r=t.row.availableQty-t.row.prevoiusPoQty;return e.jsx(_,{label:r.toLocaleString(),sx:{backgroundColor:"#FF0000",color:"#FFFFFF"}})}},{field:"quantity",headerName:"Assigned Qty",renderCell:t=>e.jsx(me,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:t.row.quantity||"",onChange:r=>ae({id:t.id,field:"quantity",value:Number(r.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"totalBeforeTax",headerName:"Total",renderCell:t=>{const x=(t.row.totalBeforeTax||0).toLocaleString();return e.jsx(me,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:x,onChange:f=>{const N=Number(f.target.value.replace(/,/g,""));ae({id:t.id,field:"totalBeforeTax",value:N})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}},{field:"totalAfterTax",headerName:"Total After Tax",renderCell:t=>{const x=(t.row.totalAfterTax||0).toLocaleString();return e.jsx(me,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:x,onChange:f=>{const N=Number(f.target.value.replace(/,/g,""));ae({id:t.id,field:"totalAfterTax",value:N})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}}],$e=()=>{y.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};a.useEffect(()=>{$e()});const[Xe,Je]=a.useState([]),Ke=a.useCallback(t=>{l(t);const r=t.map(x=>{const f=y.current.getRow(x);return console.log("rowData",f),f?{...f}:null}).filter(x=>x!==null);console.log("selectedDesigns",r),Je(r)},[y]);return a.useEffect(()=>{const t=m.filter(r=>o.includes(r.id));v(r=>({...r,dyeingPoDetailsList:t}))},[m,o]),console.log("fabrics",m),a.useEffect(()=>{y.current&&console.log("API ref is ready:",y.current)},[y]),console.log("selectedDesigns:",Xe),e.jsxs(X,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(ve,{variant:"outlined",children:[e.jsx(De,{className:"css-4rfrnx-MuiCardHeader-root",title:"Dyeing Production Order",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:s.productionId,onChange:w,size:"small",children:Oe.map(t=>e.jsx(Y,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",type:"date",label:"Issuance Date",name:"issuanceDate",value:s.issuanceDate,onChange:w,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",type:"date",label:"Planning Date",name:"expectedReturnDate",value:s.expectedReturnDate,onChange:w,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Fabric",name:"fabricId",value:s.fabricId,onChange:w,size:"small",children:j.map(t=>e.jsx(Y,{value:t.fabricId,children:t.fabricName},t.fabricId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Vendor",name:"vendorId",value:s.vendorId,onChange:w,size:"small",children:i.map(t=>e.jsx(Y,{value:t.vendorId,children:t.vendorName},t.vendorId))})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Shrinkage",fullWidth:!0,size:"small",name:"shrinkage",onChange:w,value:s.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Wastage",fullWidth:!0,size:"small",name:"wastage",onChange:w,value:s.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Rate",type:"number",fullWidth:!0,size:"small",name:"rate",onChange:w,value:s.rate,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Tax",fullWidth:!0,type:"number",size:"small",name:"tax",onChange:w,value:s.tax,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Location",name:"locationId",value:s.locationId,onChange:w,size:"small",children:T.map(t=>e.jsx(Y,{value:t.locationId,children:t.section+"."+t.aisle+"."+t.rack+"."+t.bin},t.locationId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{label:"Remarks",fullWidth:!0,size:"small",name:"remarks",onChange:w,value:s.remarks,required:!0})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",children:e.jsxs(W,{variant:"overline",sx:{display:"block",fontWeight:"bold",fontSize:15},children:["Assign Quantity"," ",e.jsx(_,{label:s.pxQty,sx:{backgroundColor:"#008000",color:"#FFFFFF"}}),"| planned Quantity"," ",e.jsx(_,{label:s.overallQty,sx:{backgroundColor:"#0000FF",color:"#FFFFFF"}})," ","| Remaining Quantity"," ",e.jsx(_,{label:s.remainingQuantity,sx:{backgroundColor:"#FF0000",color:"#FFFFFF"}})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(ke,{rows:m,columns:_e,pageSize:10,apiRef:y,disableRowSelectionOnClick:!0,checkboxSelection:!0,isRowSelectable:t=>t.row.prevoiusPoQty<t.row.availableQty&&t.row.prevoiusPoQty!==t.row.availableQty,onRowSelectionModelChange:Ke,rowSelectionModel:o})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",children:e.jsx(z,{variant:"contained",size:"small",onClick:Le,disabled:m.every(t=>t.prevoiusPoQty>=t.availableQty),children:"Save"})})]})," "]}),e.jsx(ut,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(ve,{variant:"outlined",children:[e.jsx(De,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(pt,{}),title:"Assign TCs & Issuance",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsxs(n,{item:!0,xs:12,children:[e.jsx(fe,{initialRows:E,iColumns:Ye,pageSize:10,setInitialData:B,hideAction:!0}),e.jsxs(ne,{open:ze,onClose:te,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(oe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(W,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Assign Terms  And Conditions"}),e.jsx(de,{onClick:te,sx:{color:"#ffffff"},children:e.jsx(ce,{})})]}),e.jsxs(ie,{children:[e.jsx(le,{id:"alert-dialog-slide-description"}),e.jsx(bt,{vId:ee,handleClose:te})]})]}),e.jsxs(ne,{open:We,onClose:Se,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(oe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(W,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Production Order"}),e.jsx(de,{onClick:Se,sx:{color:"#ffffff"},children:e.jsx(ce,{})})]}),e.jsxs(ie,{children:[e.jsx(le,{id:"alert-dialog-slide-description"}),e.jsx(St,{vId:ee})]})]}),e.jsxs(ne,{open:qe,onClose:Ie,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(oe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(W,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Inspection"}),e.jsx(de,{onClick:Ie,sx:{color:"#ffffff"},children:e.jsx(ce,{})})]}),e.jsxs(ie,{children:[e.jsx(le,{id:"alert-dialog-slide-description"}),e.jsx(xt,{rId:20,PO:{ParamPoIdName:He.poIdName}})]})]})]})})," "]})]})},Lt=()=>{const{user:o}=he(),[l,y]=a.useState([]);a.useState(!1);const[C,P]=a.useState({categoryId:0,description:"",enabled:"",appId:o.appId,createdOn:new Date().toISOString(),createdBy:o.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:o.empId}),[m,h]=a.useState("1"),c=(p,S)=>{h(S)};a.useEffect(()=>{P({categoryId:(l==null?void 0:l.categoryId)||0,description:(l==null?void 0:l.description)||"",enabled:(l==null?void 0:l.enabled)||"",appId:(l==null?void 0:l.appId)||o.appId,createdOn:(l==null?void 0:l.createdOn)||new Date().toISOString(),createdBy:(l==null?void 0:l.createdBy)||o.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:o.empId})},[l]);const[A,B]=a.useState([]);a.useState(!1);const{data:O,refetch:k}=we();return a.useEffect(()=>{O&&B(O.result.map((p,S)=>({id:S+1,...p})))},[O,k]),console.log("initialRows",A),console.log("formData",C),e.jsx(mt,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(X,{sx:{width:"100%",typography:"body1"},children:e.jsxs(gt,{value:m,children:[e.jsx(X,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(yt,{onChange:c,"aria-label":"lab API tabs example",children:[e.jsx(U,{icon:e.jsx(ft,{}),label:"Dyeing PO",value:"1",sx:p=>({"& .MuiTouchRipple-child":{backgroundColor:`${p.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Embroidery PO",value:"2",sx:p=>({"& .MuiTouchRipple-child":{backgroundColor:`${p.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Schiffili PO",value:"3",sx:p=>({"& .MuiTouchRipple-child":{backgroundColor:`${p.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Additional Process PO",value:"4",sx:p=>({"& .MuiTouchRipple-child":{backgroundColor:`${p.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Additional Services PO",value:"5",sx:p=>({"& .MuiTouchRipple-child":{backgroundColor:`${p.palette.primary.main} !important`}})})]})}),e.jsx(V,{value:"1",children:e.jsx(jt,{})}),e.jsx(V,{value:"2"}),e.jsx(V,{value:"3"}),e.jsx(V,{value:"4"}),e.jsx(V,{value:"5"})]})})})};export{Lt as default};
