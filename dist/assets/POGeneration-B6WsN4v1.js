import{c as ve,u as re,z as Ie,an as Se,a8 as Ue,j as e,B as X,G as n,ah as qe,T as _,s as He,ao as Ve,n as Ye,S as _e,aj as $e,ak as Xe,al as Je,ap as Ke,C as ue,d as me,D as Ze,M as et}from"./index-BQnKJm_U.js";import{r as a,R as ae}from"./vendor-BXCbSo2_.js";import{d as tt}from"./AddCircleOutlineOutlined--UbPWSAk.js";import{d as $}from"./AssignmentOutlined-CvXohB2J.js";import{u as be,D as je,R as se,a as fe,b as he,c as xe,d as pe,B as at}from"./ReuseableDataGrid-DM_ExMFu.js";import{B as V,a as De,I as ge}from"./axios-CIHeZEXI.js";import{d as ye}from"./Close-BQnbGXeb.js";import{d as st}from"./VisibilityOutlined-DhBBgDuL.js";import{T as m}from"./TextField-B9bDqCXW.js";import{M as Y}from"./MenuItem-CqoynPPu.js";import{T as rt,a as nt,b as U,c as q}from"./TabPanel-eD93EyWL.js";import"./Skeleton-B93ZyZJN.js";const it=({vId:r,handleClose:l})=>{const[y,D]=a.useState([]),[C,u]=a.useState([]),h=be(),{enqueueSnackbar:c}=ve(),{user:O}=re(),[Q,B]=a.useState([]),[P,x]=a.useState([]),[S,o]=a.useState({categoryId:0,vendorId:r.vendorId,poId:r.poId}),{data:j}=Ie(),{data:W,refetch:F}=Se(r.poId,{skip:!r.poId}),{data:b,refetch:M}=Ue({vId:r.vendorId,categoryId:S.categoryId},{skip:!r||!S.categoryId});a.useEffect(()=>{j&&B(j.result.map((d,g)=>({id:g+1,...d})))},[j]),console.log("columnsData",b),a.useEffect(()=>{if((b==null?void 0:b.result)===null){x([]);return}b!=null&&b.result&&x(b.result.filter(d=>!C.some(g=>g.id===d.id)).map((d,g)=>({id:g+1,...d})))},[b,C,M]);const i=d=>{const{name:g,value:L}=d.target;o({...S,[g]:L})},v=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions",flex:1}],w=()=>{h.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};ae.useEffect(()=>{w()});const[N,I]=a.useState([]),T=ae.useCallback(d=>{D(d);const g=d.map(L=>{const z=h.current.getRow(L);return console.log("rowData",z),z?{...z,vendorPoId:0,poId:0,appId:O.appId,createdOn:new Date().toISOString(),createdBy:O.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:O.empId}:null}).filter(L=>L!==null);console.log("selectedDesigns",g),I(g)},[h]);a.useEffect(()=>{P.filter(d=>y.includes(d.id)),o(d=>({...d,vendorPoAssignTermsList:N}))},[P,y]),console.log("formData",S),ae.useEffect(()=>{h.current&&console.log("API ref is ready:",h.current)},[h]),console.log("selectedDesigns:",N);const E=async()=>{if(N.length===0){c("No terms are selected. Please select at least one term.",{variant:"warning",autoHideDuration:5e3});return}try{const d=await De.post("http://100.42.177.77:83/api/PO/AssignTermToDyeingPo",S);d.data.success?(c(`${d.data.message} !`,{variant:"success",autoHideDuration:5e3}),u(g=>[...g,...N])):c(`${d.data.message} !`,{variant:"error",autoHideDuration:5e3}),F(),l()}catch(d){console.error("Error saving data:",d),c("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};return e.jsx(X,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",mt:2,width:"Inherit"},children:e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,label:"Vendor",name:"vendorId",value:r.vendorName,disabled:!0,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,select:!0,label:"Category",name:"categoryId",value:S.categoryId,onChange:i,size:"small",children:Q.map(d=>e.jsx(Y,{value:d.categoryId,children:d.description},d.categoryId))})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(je,{rows:P,columns:v,apiRef:h,disableRowSelectionOnClick:!0,checkboxSelection:!0,onRowSelectionModelChange:T,rowSelectionModel:y})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(V,{variant:"contained",size:"small",onClick:E,children:"Assign Terms"})})]})})},ot=({vId:r})=>{const[l,y]=a.useState([]),[D,C]=a.useState([]),{data:u,refetch:h}=qe(r.poId,{skip:!r.poId}),{data:c,refetch:O}=Se(r.poId,{skip:!r.poId});a.useEffect(()=>{if((u==null?void 0:u.result)===null){y([]);return}u&&y(u.result.map((i,v)=>({id:v+1,...i})))},[u,h]),a.useEffect(()=>{if((c==null?void 0:c.result)===null){C([]);return}if(c){const i=c.result.reduce((v,w)=>v.find(I=>I.termCondDesc===w.termCondDesc)?v:v.concat([w]),[]);C(i.map((v,w)=>({id:w+1,...v})))}},[c,O]),console.log("vId",r);const[Q,B]=a.useState(0),[P,x]=a.useState(0),[S,o]=a.useState(0),[j,W]=a.useState(0);a.useEffect(()=>{const i=l.reduce((I,T)=>I+(T.planningQty??0),0).toFixed(2),v=l.reduce((I,T)=>I+(T.quantity??0),0).toFixed(2),w=l.reduce((I,T)=>I+(T.totalBeforeTax??0),0).toFixed(2),N=l.reduce((I,T)=>I+(T.totalAfterTax??0),0).toFixed(2);B(parseFloat(i).toLocaleString()),x(parseFloat(v).toLocaleString()),o(parseFloat(w).toLocaleString()),W(parseFloat(N).toLocaleString())},[l]);const F=[...l,{id:"TOTAL_SUMMARY",planningQty:Q,quantity:P,totalBeforeTax:S,totalAfterTax:j}],b=[{field:"id",headerName:"Sr#",colSpan:(i,v)=>v.id==="TOTAL_SUMMARY"?4:void 0,renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"black",fontWeight:"bold"},children:"Total Summary"}):i.value},{field:"designNo",headerName:"Design"},{field:"baseColor",headerName:"Base Color"},{field:"colorName",headerName:"Color"},{field:"vendorName",headerName:"Vendor"},{field:"uomName",headerName:"UOM"},{field:"planningQty",headerName:"Planned Qty",renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value},{field:"quantity",headerName:"Assigned Qty",renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value},{field:"rate",headerName:"Rate"},{field:"tax",headerName:"Tax"},{field:"totalBeforeTax",headerName:"Total",valueGetter:i=>i.toLocaleString(),renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value},{field:"totalAfterTax",headerName:"Total After Tax",valueGetter:i=>i.toLocaleString(),renderCell:i=>i.row.id==="TOTAL_SUMMARY"?e.jsx("span",{style:{color:"#a11f23",fontWeight:"bold"},children:i.value}):i.value}],M=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions"},{field:"processType",headerName:"Process Type"}];return console.log("assignedTerms",D),e.jsxs("div",{children:[e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,disabled:!0,label:"Production",name:"productionId",value:r.collectionName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,disabled:!0,label:"Process Type",name:"productionId",value:r.processTypeName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{size:"small",label:"Issuance Date",name:"issuanceDate",value:new Date(r.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{size:"small",label:"Planning Date",name:"expectedReturnDate",value:new Date(r.expectedReturnDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,disabled:!0,label:"Fabric",name:"fabricId",value:r.fabricName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,disabled:!0,label:"Vendor",name:"vendorId",value:r.vendorName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(m,{label:"Shrinkage",fullWidth:!0,disabled:!0,size:"small",name:"shrinkage",value:r.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(m,{label:"Wastage",fullWidth:!0,disabled:!0,size:"small",name:"wastage",value:r.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,disabled:!0,label:"Location",name:"locationId",value:r.fullLocation,size:"small"})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(_,{variant:"h2",children:"Details"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(se,{initialRows:F,iColumns:b,hideAction:!0,pageSize:10})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(_,{variant:"h2",children:"Terms and Conditions"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(se,{initialRows:D,iColumns:M,hideAction:!0,pageSize:10})})]})]})},H=He(m)(({theme:r})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),lt=()=>{const[r,l]=a.useState([]),y=be(),{enqueueSnackbar:D}=ve(),C=Ve(),[u,h]=a.useState([]),{user:c}=re(),[O,Q]=a.useState([]),[B,P]=a.useState(!1),[x,S]=a.useState(new Set),[o,j]=a.useState({poId:0,productionId:"",issuanceDate:"",expectedReturnDate:"",processTypeId:1223,fabricId:"",pxQty:0,vendorId:"",shrinkage:"",wastage:"",locationId:"",remarks:"",appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:c.empId}),[W,F]=a.useState([]),[b,M]=a.useState([]),[i,v]=a.useState([]),[w,N]=a.useState([]),{data:I,refetch:T}=Ye(),{data:E,refetch:d}=_e(),{data:g,refetch:L}=$e(),{data:z,refetch:Te}=Xe(o.productionId,{skip:!o.productionId}),{data:J,refetch:we}=Je(o.fabricId,{skip:!o.fabricId}),{data:K,refetch:ne}=Ke({fabricId:o.fabricId,productionId:o.productionId},{skip:!o.fabricId||!o.productionId}),[Ce,Pe]=a.useState([]);a.useEffect(()=>{E&&F(E.result.map((t,s)=>({id:s+1,...t})))},[E,d]),a.useEffect(()=>{z&&M(z.result.map((t,s)=>({id:s+1,...t})))},[z,Te]),a.useEffect(()=>{K&&h(K.result.map((t,s)=>({id:s+1,...t})))},[K,ne]),a.useEffect(()=>{J&&v(J.result.map((t,s)=>({id:s+1,...t})))},[J,we]),a.useEffect(()=>{g&&N(g.result.map((t,s)=>({id:s+1,...t})))},[g]),a.useEffect(()=>{I&&Pe(I.result.map((t,s)=>({id:s,...t})))},[I,T]);const ie=u.reduce((t,s)=>t+(s.availableQty??0),0).toFixed(2),Ne=u.reduce((t,s)=>t+(s.quantity??0),0).toFixed(2),Ae=u.reduce((t,s)=>t+(s.prevoiusPoQty??0),0).toFixed(2);a.useEffect(()=>{j(t=>({...o,overallQty:ie}))},[h,u]),a.useEffect(()=>{j(t=>({...o,overallQty:ie,remainingQuantity:(t.overallQty-Ae-Ne).toFixed(2)||0}))},[h,u]),console.log("initialRows",W);const A=t=>{const{name:s,value:f}=t.target;if(s==="vendorId"){const p=i.find(k=>k.vendorId===parseInt(f));j({...o,vendorId:f,shrinkage:p?p.shrinkage:"",wastage:p?p.wastage:""})}else if(s==="fabricId"){const p=b.find(k=>k.fabricId===parseInt(f));j({...o,fabricId:f,pxQty:p?p.pxQty:"",vendorId:"",shrinkage:"",wastage:""})}else j({...o,[s]:f})},ke=async()=>{if(r.length===0){D("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}console.log("formData",o);try{const t=await De.post("http://100.42.177.77:83/api/PO/SavePOHeader",o);console.log("Save response:",t.data),t.data.success?(D("Data saved successfully!",{variant:"success",autoHideDuration:5e3}),S(s=>new Set([...s,...r])),j({poId:0,productionId:"",issuanceDate:"",expectedReturnDate:"",fabricId:"",processTypeId:1223,vendorId:"",shrinkage:"",wastage:"",locationId:"",appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:c.empId}),h([]),d(),l([]),ne(),P(!1)):D(`Save failed: ${t.data.message}`,{variant:"error",autoHideDuration:5e3})}catch(t){console.error("Error saving data:",t),D("Failed to save data. Please try again.",{variant:"error",autoHideDuration:5e3})}};console.log("formData",o);const[Oe,oe]=a.useState(!1),[Be,le]=a.useState(!1),[Z,de]=a.useState(!1),Re=async t=>{de(t),oe(!0)},Qe=async t=>{le(!0),de(t)};console.log("terms condition",Z);const ee=()=>{oe(!1)},ce=()=>{le(!1)},ze=t=>{C("/Production/Issuance",{state:{data:t,tab:1}})},Le=[{field:"id",headerName:"Sr#"},{field:"poIdName",headerName:"PO ID"},{field:"collectionName",headerName:"Collection Name"},{field:"fabricName",headerName:"Fabric Name"},{field:"vendorName",headerName:"Vendor"},{field:"createdOn",headerName:"PO Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"fabricCount",headerName:"Fabrics"},{field:"statusName",headerName:"Status"},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(at,{variant:"text",size:"small",children:[e.jsx(V,{size:"small",color:"primary",onClick:()=>Re(t.row),children:"Assign Terms"}),e.jsx(V,{size:"small",color:"primary",onClick:()=>Qe(t.row),children:"View"}),e.jsx(V,{size:"small",color:"primary",onClick:()=>ze(t.row),children:"Issuance"})]})})}],G=a.useCallback(t=>{const{id:s,field:f,value:p}=t;console.log("Editing cell:",t),h(k=>k.map(te=>{if(te.id===s){const R={...te,[f]:p,poId:0,poDetId:0,appId:c.appId,createdOn:new Date().toISOString(),createdBy:c.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:c.empId};return(f==="rate"||f==="quantity")&&(R.totalBeforeTax=R.rate*R.quantity),(f==="tax"||f==="rate"||f==="quantity")&&(R.totalAfterTax=R.totalBeforeTax+R.totalBeforeTax*(R.tax/100)),R}return te}))},[h,c.appId,c.empId]),We=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"colorName",headerName:"Color"},{field:"availableQty",headerName:"Planned Qty",valueGetter:t=>t.toLocaleString()},{field:"prevoiusPoQty",headerName:"Prevoius PO.Qty",valueGetter:t=>t.toLocaleString()},{field:"remaining",headerName:"Remaining Qty",valueGetter:(t,s)=>(s.availableQty-s.prevoiusPoQty).toLocaleString()},{field:"quantity",headerName:"Assigned Qty",renderCell:t=>e.jsx(H,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:t.row.quantity||"",onChange:s=>G({id:t.id,field:"quantity",value:Number(s.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"rate",headerName:"Rate",renderCell:t=>e.jsx(H,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:t.row.rate||"",onChange:s=>G({id:t.id,field:"rate",value:Number(s.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"tax",headerName:"Tax",renderCell:t=>e.jsx(H,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:t.row.tax||"",onChange:s=>G({id:t.id,field:"tax",value:Number(s.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"totalBeforeTax",headerName:"Total",renderCell:t=>{const f=(t.row.totalBeforeTax||0).toLocaleString();return e.jsx(H,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:f,onChange:p=>{const k=Number(p.target.value.replace(/,/g,""));G({id:t.id,field:"totalBeforeTax",value:k})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}},{field:"totalAfterTax",headerName:"Total After Tax",renderCell:t=>{const f=(t.row.totalAfterTax||0).toLocaleString();return e.jsx(H,{variant:"outlined",size:"small",sx:{mt:1,width:"50px"},value:f,onChange:p=>{const k=Number(p.target.value.replace(/,/g,""));G({id:t.id,field:"totalAfterTax",value:k})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}}],Fe=()=>{y.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};a.useEffect(()=>{Fe()});const[Me,Ee]=a.useState([]),Ge=a.useCallback(t=>{l(t);const s=t.map(f=>{const p=y.current.getRow(f);return console.log("rowData",p),p?{...p}:null}).filter(f=>f!==null);console.log("selectedDesigns",s),Ee(s)},[y]);return a.useEffect(()=>{const t=u.filter(s=>r.includes(s.id));j(s=>({...s,dyeingPoDetailsList:t}))},[u,r]),console.log("fabrics",u),a.useEffect(()=>{y.current&&console.log("API ref is ready:",y.current)},[y]),console.log("selectedDesigns:",Me),e.jsxs(X,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(ue,{variant:"outlined",children:[e.jsx(me,{className:"css-4rfrnx-MuiCardHeader-root",title:"Dyeing Production Order",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:o.productionId,onChange:A,size:"small",children:Ce.map(t=>e.jsx(Y,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{size:"small",type:"date",label:"Issuance Date",name:"issuanceDate",value:o.issuanceDate,onChange:A,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{size:"small",type:"date",label:"Planning Date",name:"expectedReturnDate",value:o.expectedReturnDate,onChange:A,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,select:!0,label:"Select Fabric",name:"fabricId",value:o.fabricId,onChange:A,size:"small",children:b.map(t=>e.jsx(Y,{value:t.fabricId,children:t.fabricName},t.fabricId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,select:!0,label:"Select Vendor",name:"vendorId",value:o.vendorId,onChange:A,size:"small",children:i.map(t=>e.jsx(Y,{value:t.vendorId,children:t.vendorName},t.vendorId))})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(m,{label:"Shrinkage",fullWidth:!0,size:"small",name:"shrinkage",onChange:A,value:o.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(m,{label:"Wastage",fullWidth:!0,size:"small",name:"wastage",onChange:A,value:o.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{fullWidth:!0,select:!0,label:"Select Location",name:"locationId",value:o.locationId,onChange:A,size:"small",children:w.map(t=>e.jsx(Y,{value:t.locationId,children:t.section+"."+t.aisle+"."+t.rack+"."+t.bin},t.locationId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(m,{label:"Remarks",fullWidth:!0,size:"small",name:"remarks",onChange:A,value:o.remarks,required:!0})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",children:e.jsxs(_,{variant:"overline",sx:{display:"block",fontWeight:"bold",fontSize:15},children:["Assign Quantity : ",o.pxQty," | planned Quantity :"," ",o.overallQty," | Remaining Quantity :"," ",o.remainingQuantity]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(je,{rows:u,columns:We,pageSize:10,apiRef:y,disableRowSelectionOnClick:!0,checkboxSelection:!0,isRowSelectable:t=>t.row.prevoiusPoQty<t.row.availableQty&&t.row.prevoiusPoQty!==t.row.availableQty,onRowSelectionModelChange:Ge,rowSelectionModel:r})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(V,{variant:"contained",size:"small",onClick:ke,disabled:u.every(t=>t.prevoiusPoQty>=t.availableQty),children:"Save"})})]})," "]}),e.jsx(Ze,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(ue,{variant:"outlined",children:[e.jsx(me,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(st,{}),title:"Assign TCs & Issuance",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsxs(n,{item:!0,xs:12,children:[e.jsx(se,{initialRows:W,iColumns:Le,pageSize:10,setInitialData:Q,hideAction:!0}),e.jsxs(fe,{open:Oe,onClose:ee,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(he,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(_,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Assign Terms  And Conditions"}),e.jsx(ge,{onClick:ee,sx:{color:"#ffffff"},children:e.jsx(ye,{})})]}),e.jsxs(xe,{children:[e.jsx(pe,{id:"alert-dialog-slide-description"}),e.jsx(it,{vId:Z,handleClose:ee})]})]}),e.jsxs(fe,{open:Be,onClose:ce,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(he,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(_,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Production Order"}),e.jsx(ge,{onClick:ce,sx:{color:"#ffffff"},children:e.jsx(ye,{})})]}),e.jsxs(xe,{children:[e.jsx(pe,{id:"alert-dialog-slide-description"}),e.jsx(ot,{vId:Z})]})]})]})})," "]})]})},St=()=>{const{user:r}=re(),[l,y]=a.useState([]);a.useState(!1);const[D,C]=a.useState({categoryId:0,description:"",enabled:"",appId:r.appId,createdOn:new Date().toISOString(),createdBy:r.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:r.empId}),[u,h]=a.useState("1"),c=(x,S)=>{h(S)};a.useEffect(()=>{C({categoryId:(l==null?void 0:l.categoryId)||0,description:(l==null?void 0:l.description)||"",enabled:(l==null?void 0:l.enabled)||"",appId:(l==null?void 0:l.appId)||r.appId,createdOn:(l==null?void 0:l.createdOn)||new Date().toISOString(),createdBy:(l==null?void 0:l.createdBy)||r.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:r.empId})},[l]);const[O,Q]=a.useState([]);a.useState(!1);const{data:B,refetch:P}=Ie();return a.useEffect(()=>{B&&Q(B.result.map((x,S)=>({id:S+1,...x})))},[B,P]),console.log("initialRows",O),console.log("formData",D),e.jsx(et,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(X,{sx:{width:"100%",typography:"body1"},children:e.jsxs(rt,{value:u,children:[e.jsx(X,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(nt,{onChange:c,"aria-label":"lab API tabs example",children:[e.jsx(U,{icon:e.jsx(tt,{}),label:"Dyeing PO",value:"1",sx:x=>({"& .MuiTouchRipple-child":{backgroundColor:`${x.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Embroidery PO",value:"2",sx:x=>({"& .MuiTouchRipple-child":{backgroundColor:`${x.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Schiffili PO",value:"3",sx:x=>({"& .MuiTouchRipple-child":{backgroundColor:`${x.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Additional Process PO",value:"4",sx:x=>({"& .MuiTouchRipple-child":{backgroundColor:`${x.palette.primary.main} !important`}})}),e.jsx(U,{icon:e.jsx($,{}),label:"Additional Services PO",value:"5",sx:x=>({"& .MuiTouchRipple-child":{backgroundColor:`${x.palette.primary.main} !important`}})})]})}),e.jsx(q,{value:"1",children:e.jsx(lt,{})}),e.jsx(q,{value:"2"}),e.jsx(q,{value:"3"}),e.jsx(q,{value:"4"}),e.jsx(q,{value:"5"})]})})})};export{St as default};
