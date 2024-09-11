import{c as ge,u as re,x as Ie,ae as ye,a1 as Fe,j as e,B as V,G as n,a8 as Me,T as U,s as He,af as Ve,o as Ue,a7 as qe,aa as Qe,ab as $e,ac as Xe,ag as Ye,C as de,d as ce,D as _e,M as Je}from"./index-CFVVvMCv.js";import{r as a,R as ae}from"./vendor-BXCbSo2_.js";import{d as Ke}from"./AddCircleOutlineOutlined-l4-P_O2L.js";import{d as H}from"./AssignmentOutlined-BrwFvefQ.js";import{u as je,D as be,R as se,a as ue,b as me,c as fe,d as he,B as Ze}from"./ReuseableDataGrid-CFuFh_7m.js";import{B as G,a as ve,I as xe}from"./axios-qW6zj_I1.js";import{d as pe}from"./Close-2KGTeAX4.js";import{d as et}from"./VisibilityOutlined-J7s5itFi.js";import{T as u}from"./TextField-BrYEIcy4.js";import{M as F}from"./MenuItem-DgPC5BfG.js";import{T as tt,a as at,b as L,c as W}from"./TabPanel-CgnMXqCJ.js";import"./Skeleton-CkF-SxFD.js";const st=({vId:s,handleClose:o})=>{const[g,j]=a.useState([]),[D,I]=a.useState([]),x=je(),{enqueueSnackbar:l}=ge(),{user:S}=re(),[N,C]=a.useState([]),[m,c]=a.useState([]),[h,d]=a.useState({categoryId:0,vendorId:s.vendorId,poId:s.poId}),{data:v}=Ie(),{data:q,refetch:Q}=ye(s.poId,{skip:!s.poId}),{data:b,refetch:$}=Fe({vId:s.vendorId,categoryId:h.categoryId},{skip:!s||!h.categoryId});a.useEffect(()=>{v&&C(v.result.map((i,p)=>({id:p+1,...i})))},[v]),console.log("columnsData",b),a.useEffect(()=>{if((b==null?void 0:b.result)===null){c([]);return}b!=null&&b.result&&c(b.result.filter(i=>!D.some(p=>p.id===i.id)).map((i,p)=>({id:p+1,...i})))},[b,D,$]);const M=i=>{const{name:p,value:B}=i.target;d({...h,[p]:B})},X=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions",flex:1}],Y=()=>{x.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};ae.useEffect(()=>{Y()});const[O,z]=a.useState([]),_=ae.useCallback(i=>{j(i);const p=i.map(B=>{const P=x.current.getRow(B);return console.log("rowData",P),P?{...P,vendorPoId:0,poId:0,appId:S.appId,createdOn:new Date().toISOString(),createdBy:S.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:S.empId}:null}).filter(B=>B!==null);console.log("selectedDesigns",p),z(p)},[x]);a.useEffect(()=>{m.filter(i=>g.includes(i.id)),d(i=>({...i,vendorPoAssignTermsList:O}))},[m,g]),console.log("formData",h),ae.useEffect(()=>{x.current&&console.log("API ref is ready:",x.current)},[x]),console.log("selectedDesigns:",O);const R=async()=>{if(O.length===0){l("No terms are selected. Please select at least one term.",{variant:"warning",autoHideDuration:5e3});return}try{const i=await ve.post("http://100.42.177.77:81/api/PO/AssignTermToDyeingPo",h);i.data.success?(l(`${i.data.message} !`,{variant:"success",autoHideDuration:5e3}),I(p=>[...p,...O])):l(`${i.data.message} !`,{variant:"error",autoHideDuration:5e3}),Q(),o()}catch(i){console.error("Error saving data:",i),l("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};return e.jsx(V,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",mt:2,width:"Inherit"},children:e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,label:"Vendor",name:"vendorId",value:s.vendorName,disabled:!0,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Category",name:"categoryId",value:h.categoryId,onChange:M,size:"small",children:N.map(i=>e.jsx(F,{value:i.categoryId,children:i.description},i.categoryId))})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(be,{rows:m,columns:X,apiRef:x,disableRowSelectionOnClick:!0,checkboxSelection:!0,onRowSelectionModelChange:_,rowSelectionModel:g})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(G,{variant:"contained",size:"small",onClick:R,children:"Assign Terms"})})]})})},rt=({vId:s})=>{const[o,g]=a.useState([]),[j,D]=a.useState([]),{data:I,refetch:x}=Me(s.poId,{skip:!s.poId}),{data:l,refetch:S}=ye(s.poId,{skip:!s.poId});a.useEffect(()=>{if((I==null?void 0:I.result)===null){g([]);return}I&&g(I.result.map((m,c)=>({id:c+1,...m})))},[I,x]),a.useEffect(()=>{if((l==null?void 0:l.result)===null){D([]);return}if(l){const m=l.result.reduce((c,h)=>c.find(v=>v.termCondDesc===h.termCondDesc)?c:c.concat([h]),[]);D(m.map((c,h)=>({id:h+1,...c})))}},[l,S]),console.log("vId",s);const N=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"baseColor",headerName:"Base Color"},{field:"colorName",headerName:"Color"},{field:"vendorName",headerName:"Vendor"},{field:"uomName",headerName:"UOM"},{field:"total",headerName:"Planned Qty",valueGetter:m=>m.toLocaleString()},{field:"quantity",headerName:"Assigned Qty",valueGetter:m=>m.toLocaleString()},{field:"rate",headerName:"Rate"},{field:"tax",headerName:"Tax"},{field:"totalBeforeTax",headerName:"Total",valueGetter:m=>m.toLocaleString()},{field:"totalAfterTax",headerName:"Total After Tax",valueGetter:m=>m.toLocaleString()}],C=[{field:"id",headerName:"Sr#"},{field:"termCondDesc",headerName:"Terms and Conditions"},{field:"processType",headerName:"Process Type"}];return console.log("assignedTerms",j),e.jsxs("div",{children:[e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Production",name:"productionId",value:s.collectionName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Process Type",name:"productionId",value:s.processTypeName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",label:"Issuance Date",name:"issuanceDate",value:new Date(s.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",label:"Planning Date",name:"expectedReturnDate",value:new Date(s.expectedReturnDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}),fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Fabric",name:"fabricId",value:s.fabricName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Vendor",name:"vendorId",value:s.vendorName,size:"small"})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Shrinkage",fullWidth:!0,disabled:!0,size:"small",name:"shrinkage",value:s.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:1.5,children:e.jsx(u,{label:"Wastage",fullWidth:!0,disabled:!0,size:"small",name:"wastage",value:s.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,disabled:!0,label:"Location",name:"locationId",value:s.fullLocation,size:"small"})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(U,{variant:"h2",children:"Details"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(se,{initialRows:o,iColumns:N,hideAction:!0,pageSize:10})})]}),e.jsxs(n,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(U,{variant:"h2",children:"Terms and Conditions"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(se,{initialRows:j,iColumns:C,hideAction:!0,pageSize:10})})]})]})},E=He(u)(({theme:s})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),nt=()=>{const[s,o]=a.useState([]),g=je(),{enqueueSnackbar:j}=ge(),D=Ve(),[I,x]=a.useState([]),{user:l}=re(),[S,N]=a.useState([]),[C,m]=a.useState(!1),[c,h]=a.useState(new Set),[d,v]=a.useState({poId:0,productionId:"",issuanceDate:"",expectedReturnDate:"",processTypeId:1223,fabricId:"",vendorId:"",shrinkage:"",wastage:"",locationId:"",appId:l.appId,createdOn:new Date().toISOString(),createdBy:l.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:l.empId}),[q,Q]=a.useState([]),[b,$]=a.useState([]),[M,X]=a.useState([]),[Y,O]=a.useState([]),{data:z,refetch:_}=Ue(),{data:R,refetch:i}=qe(),{data:p,refetch:B}=Qe(),{data:P,refetch:De}=$e(d.productionId,{skip:!d.productionId}),{data:J,refetch:Se}=Xe(d.fabricId,{skip:!d.fabricId}),{data:K,refetch:Ce}=Ye({fabricId:d.fabricId,productionId:d.productionId},{skip:!d.fabricId||!d.productionId}),[we,Te]=a.useState([]);a.useEffect(()=>{R&&Q(R.result.map((t,r)=>({id:r+1,...t})))},[R,i]),a.useEffect(()=>{P&&$(P.result.map((t,r)=>({id:r+1,...t})))},[P,De]),a.useEffect(()=>{K&&x(K.result.map((t,r)=>({id:r+1,...t})))},[K,Ce]),a.useEffect(()=>{J&&X(J.result.map((t,r)=>({id:r+1,...t})))},[J,Se]),a.useEffect(()=>{p&&O(p.result.map((t,r)=>({id:r+1,...t})))},[p]),a.useEffect(()=>{z&&Te(z.result.map((t,r)=>({id:r,...t})))},[z,_]),console.log("initialRows",q);const w=t=>{const{name:r,value:f}=t.target;if(r==="vendorId"){const y=M.find(k=>k.vendorId===parseInt(f));v({...d,vendorId:f,shrinkage:y?y.shrinkage:"",wastage:y?y.wastage:""})}else v({...d,[r]:f})},Ne=async()=>{if(s.length===0){j("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}console.log("formData",d);try{const t=await ve.post("http://100.42.177.77:81/api/PO/SavePOHeader",d);console.log("Save response:",t.data),t.data.success?(j("Data saved successfully!",{variant:"success",autoHideDuration:5e3}),h(r=>new Set([...r,...s])),v({poId:0,productionId:"",issuanceDate:"",expectedReturnDate:"",fabricId:"",processTypeId:1223,vendorId:"",shrinkage:"",wastage:"",locationId:"",appId:l.appId,createdOn:new Date().toISOString(),createdBy:l.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:l.empId}),x([]),i(),o([]),m(!1)):j(`Save failed: ${t.data.message}`,{variant:"error",autoHideDuration:5e3})}catch(t){console.error("Error saving data:",t),j("Failed to save data. Please try again.",{variant:"error",autoHideDuration:5e3})}};console.log("formData",d);const[Pe,ne]=a.useState(!1),[ke,ie]=a.useState(!1),[Z,oe]=a.useState(!1),Oe=async t=>{oe(t),ne(!0)},Be=async t=>{ie(!0),oe(t)};console.log("terms condition",Z);const ee=()=>{ne(!1)},le=()=>{ie(!1)},ze=t=>{D("/Production/Issuance",{state:{data:t,tab:1}})},Re=[{field:"id",headerName:"Sr#"},{field:"poIdName",headerName:"PO ID"},{field:"collectionName",headerName:"Collection Name"},{field:"fabricName",headerName:"Fabric Name"},{field:"vendorName",headerName:"Vendor"},{field:"createdOn",headerName:"PO Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"expectedReturnDate",headerName:"Expected Return Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"fabricCount",headerName:"Fabrics"},{field:"statusName",headerName:"Status"},{field:"Actions",headerName:"Actions",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(Ze,{variant:"text",size:"small",children:[e.jsx(G,{size:"small",color:"primary",onClick:()=>Oe(t.row),children:"Assign Terms"}),e.jsx(G,{size:"small",color:"primary",onClick:()=>Be(t.row),children:"View"}),e.jsx(G,{size:"small",color:"primary",onClick:()=>ze(t.row),children:"Issuance"})]})})}],A=a.useCallback(t=>{const{id:r,field:f,value:y}=t;console.log("Editing cell:",t),x(k=>k.map(te=>{if(te.id===r){const T={...te,[f]:y,poId:0,poDetId:0,appId:l.appId,createdOn:new Date().toISOString(),createdBy:l.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:l.empId};return(f==="rate"||f==="quantity")&&(T.totalBeforeTax=T.rate*T.quantity),(f==="tax"||f==="rate"||f==="quantity")&&(T.totalAfterTax=T.totalBeforeTax+T.totalBeforeTax*(T.tax/100)),T}return te}))},[x,l.appId,l.empId]),Ae=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"color",headerName:"Color"},{field:"total",headerName:"Planned Qty",valueGetter:t=>t.toLocaleString()},{field:"quantity",headerName:"Assigned Qty",renderCell:t=>e.jsx(E,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:t.row.quantity||"",onChange:r=>A({id:t.id,field:"quantity",value:Number(r.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"rate",headerName:"Rate",renderCell:t=>e.jsx(E,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:t.row.rate||"",onChange:r=>A({id:t.id,field:"rate",value:Number(r.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"tax",headerName:"Tax",renderCell:t=>e.jsx(E,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:t.row.tax||"",onChange:r=>A({id:t.id,field:"tax",value:Number(r.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"totalBeforeTax",headerName:"Total",renderCell:t=>{const f=(t.row.totalBeforeTax||0).toLocaleString();return e.jsx(E,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:f,onChange:y=>{const k=Number(y.target.value.replace(/,/g,""));A({id:t.id,field:"totalBeforeTax",value:k})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}},{field:"totalAfterTax",headerName:"Total After Tax",renderCell:t=>{const f=(t.row.totalAfterTax||0).toLocaleString();return e.jsx(E,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:f,onChange:y=>{const k=Number(y.target.value.replace(/,/g,""));A({id:t.id,field:"totalAfterTax",value:k})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}}],Le=()=>{g.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};a.useEffect(()=>{Le()});const[We,Ee]=a.useState([]),Ge=a.useCallback(t=>{o(t);const r=t.map(f=>{const y=g.current.getRow(f);return console.log("rowData",y),y?{...y}:null}).filter(f=>f!==null);console.log("selectedDesigns",r),Ee(r)},[g]);return a.useEffect(()=>{const t=I.filter(r=>s.includes(r.id));v(r=>({...r,dyeingPoDetailsList:t}))},[I,s]),console.log("fabrics",I),a.useEffect(()=>{g.current&&console.log("API ref is ready:",g.current)},[g]),console.log("selectedDesigns:",We),e.jsxs(V,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(de,{variant:"outlined",children:[e.jsx(ce,{className:"css-4rfrnx-MuiCardHeader-root",title:"Dyeing Production Order",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:d.productionId,onChange:w,size:"small",children:we.map(t=>e.jsx(F,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",type:"date",label:"Issuance Date",name:"issuanceDate",value:d.issuanceDate,onChange:w,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{size:"small",type:"date",label:"Planning Date",name:"expectedReturnDate",value:d.expectedReturnDate,onChange:w,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Fabric",name:"fabricId",value:d.fabricId,onChange:w,size:"small",children:b.map(t=>e.jsx(F,{value:t.fabricId,children:t.fabricName},t.fabricId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Vendor",name:"vendorId",value:d.vendorId,onChange:w,size:"small",children:M.map(t=>e.jsx(F,{value:t.vendorId,children:t.vendorName},t.vendorId))})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{label:"Shrinkage",fullWidth:!0,size:"small",name:"shrinkage",onChange:w,value:d.shrinkage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{label:"Wastage",fullWidth:!0,size:"small",name:"wastage",onChange:w,value:d.wastage,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(u,{fullWidth:!0,select:!0,label:"Select Location",name:"locationId",value:d.locationId,onChange:w,size:"small",children:Y.map(t=>e.jsx(F,{value:t.locationId,children:t.section+"."+t.aisle+"."+t.rack+"."+t.bin},t.locationId))})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(be,{rows:I,columns:Ae,pageSize:10,apiRef:g,disableRowSelectionOnClick:!0,checkboxSelection:!0,onRowSelectionModelChange:Ge,rowSelectionModel:s})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(G,{variant:"contained",size:"small",onClick:Ne,children:"Save"})})]})," "]}),e.jsx(_e,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(de,{variant:"outlined",children:[e.jsx(ce,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(et,{}),title:"Assign TCs & Issuance",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsxs(n,{item:!0,xs:12,children:[e.jsx(se,{initialRows:q,iColumns:Re,pageSize:10,setInitialData:N,hideAction:!0}),e.jsxs(ue,{open:Pe,onClose:ee,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(me,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(U,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Assign Terms  And Conditions"}),e.jsx(xe,{onClick:ee,sx:{color:"#ffffff"},children:e.jsx(pe,{})})]}),e.jsxs(fe,{children:[e.jsx(he,{id:"alert-dialog-slide-description"}),e.jsx(st,{vId:Z,handleClose:ee})]})]}),e.jsxs(ue,{open:ke,onClose:le,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(me,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(U,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Production Order"}),e.jsx(xe,{onClick:le,sx:{color:"#ffffff"},children:e.jsx(pe,{})})]}),e.jsxs(fe,{children:[e.jsx(he,{id:"alert-dialog-slide-description"}),e.jsx(rt,{vId:Z})]})]})]})})," "]})]})},It=()=>{const{user:s}=re(),[o,g]=a.useState([]);a.useState(!1);const[j,D]=a.useState({categoryId:0,description:"",enabled:"",appId:s.appId,createdOn:new Date().toISOString(),createdBy:s.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:s.empId}),[I,x]=a.useState("1"),l=(c,h)=>{x(h)};a.useEffect(()=>{D({categoryId:(o==null?void 0:o.categoryId)||0,description:(o==null?void 0:o.description)||"",enabled:(o==null?void 0:o.enabled)||"",appId:(o==null?void 0:o.appId)||s.appId,createdOn:(o==null?void 0:o.createdOn)||new Date().toISOString(),createdBy:(o==null?void 0:o.createdBy)||s.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:s.empId})},[o]);const[S,N]=a.useState([]);a.useState(!1);const{data:C,refetch:m}=Ie();return a.useEffect(()=>{C&&N(C.result.map((c,h)=>({id:h+1,...c})))},[C,m]),console.log("initialRows",S),console.log("formData",j),e.jsx(Je,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(V,{sx:{width:"100%",typography:"body1"},children:e.jsxs(tt,{value:I,children:[e.jsx(V,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(at,{onChange:l,"aria-label":"lab API tabs example",children:[e.jsx(L,{icon:e.jsx(Ke,{}),label:"Dyeing PO",value:"1",sx:c=>({"& .MuiTouchRipple-child":{backgroundColor:`${c.palette.primary.main} !important`}})}),e.jsx(L,{icon:e.jsx(H,{}),label:"Embroidery PO",value:"2",sx:c=>({"& .MuiTouchRipple-child":{backgroundColor:`${c.palette.primary.main} !important`}})}),e.jsx(L,{icon:e.jsx(H,{}),label:"Schiffili PO",value:"3",sx:c=>({"& .MuiTouchRipple-child":{backgroundColor:`${c.palette.primary.main} !important`}})}),e.jsx(L,{icon:e.jsx(H,{}),label:"Additional Process PO",value:"4",sx:c=>({"& .MuiTouchRipple-child":{backgroundColor:`${c.palette.primary.main} !important`}})}),e.jsx(L,{icon:e.jsx(H,{}),label:"Additional Services PO",value:"5",sx:c=>({"& .MuiTouchRipple-child":{backgroundColor:`${c.palette.primary.main} !important`}})})]})}),e.jsx(W,{value:"1",children:e.jsx(nt,{})}),e.jsx(W,{value:"2"}),e.jsx(W,{value:"3"}),e.jsx(W,{value:"4"}),e.jsx(W,{value:"5"})]})})})};export{It as default};
