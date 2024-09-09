import{y as ze,z as Ge,j as e,s as Se,u as ne,c as ve,G as u,b as be,aj as Qe,ak as Ee,o as je,C as we,d as De,T as re,al as Re,v as Fe,t as Le,am as Ue,B as fe,D as Ae,a2 as qe,n as Me,M as We}from"./index-CZjWfJ9S.js";import{r as a}from"./vendor-BXCbSo2_.js";import{B as $,a as M,I as te}from"./axios--CKk_8iX.js";import{d as Ve}from"./AddCircleOutlineOutlined-Bh5Pb8Bm.js";import{d as $e}from"./CategoryOutlined-CkdYBdZt.js";import{u as Ne,D as Be,R as ie,a as he,b as xe,c as ge,d as Ie,B as Oe}from"./ReuseableDataGrid-D1pMcJDs.js";import{d as ye}from"./Close-BtpqQMIF.js";import{d as Pe}from"./VisibilityOutlined-BPW8ryPe.js";import{T as j}from"./TextField-C0yoPlRE.js";import{M as X}from"./MenuItem-EYddAVor.js";import{T as Xe,a as Ye,b as ke,c as me}from"./TabPanel-HMB-4Jgp.js";import"./Skeleton-B3PPDIKO.js";var Ce={},_e=Ge;Object.defineProperty(Ce,"__esModule",{value:!0});var He=Ce.default=void 0,Je=_e(ze()),Ke=e;He=Ce.default=(0,Je.default)((0,Ke.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z"}),"MoveToInbox");const ee=Se(j)(({theme:o})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),Ze=({fabrics:o,setFabrics:g,stockId:n,handleClose:A,refetchStockData:Q})=>{const{user:k}=ne(),{enqueueSnackbar:D}=ve();a.useState([]);const[E,B]=a.useState({stockId:n});console.log("receiveFormData",E),a.useState({});const N=Ne(),d=o.filter(c=>c.itpQuantity>0);console.log("fabrics",o),console.log("fFabrics",d);const I=c=>{const{id:i,field:h,value:y}=c;console.log("Editing cell:",c),g(S=>S.map(T=>{if(T.id===i){const v={...T,[h]:y,quantity:T.itpQuantity,productName:T.fabricName,appId:k.appId,createdOn:new Date().toISOString(),createdBy:k.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:k.empId};return(h==="rate"||h==="quantity")&&(v.amount=v.rate*v.quantity),(h==="tax"||h==="rate"||h==="quantity")&&(v.amountAfterTax=v.amount+v.amount*(v.tax/100)),v}return T}))};a.useEffect(()=>{B({...E,stockReceivingDetails:o.filter(c=>c.itpQuantity>0)})},[o,g]),console.log("fabrics",o);const O=[{field:"id",headerName:"Sr#"},{field:"fabricName",headerName:"Fabric"},{field:"barcode",headerName:"Barcode"},{field:"uomName",headerName:"UOM"},{field:"assignQty",headerName:"Assigned Qty",valueGetter:c=>c.toLocaleString()},{field:"itpQuantity",headerName:"itp Qty Received",valueGetter:c=>c.toLocaleString()},{field:"quantity",headerName:"add qty",renderCell:c=>e.jsx(ee,{variant:"outlined",disabled:!0,size:"small",sx:{mt:1,width:"100%"},value:c.row.itpQuantity||"",onChange:i=>I({id:c.id,field:"quantity",value:Number(i.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"rate",headerName:"Rate",renderCell:c=>e.jsx(ee,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:c.row.rate||"",onChange:i=>I({id:c.id,field:"rate",value:Number(i.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"tax",headerName:"Tax",renderCell:c=>e.jsx(ee,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:c.row.tax||"",onChange:i=>I({id:c.id,field:"tax",value:Number(i.target.value)}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"amount",headerName:"Amount",renderCell:c=>{const h=(c.row.rate*c.row.quantity||0).toLocaleString();return e.jsx(ee,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:h,type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}},{field:"amountAfterTax",headerName:"Amount After Tax",renderCell:c=>{const h=(c.row.amountAfterTax||0).toLocaleString();return e.jsx(ee,{variant:"outlined",size:"small",sx:{mt:1,width:"100%"},value:h,onChange:y=>{const S=Number(y.target.value.replace(/,/g,""));I({id:c.id,field:"amountAfterTax",value:S})},type:"text",InputProps:{style:{fontSize:"0.875rem"}}})}}],H=()=>{N.current.autosizeColumns({includeHeaders:!0,includeOutliers:!0})};a.useEffect(()=>{H()});const x=async()=>{if(d.some(i=>i.rate===void 0||i.rate===0)){D("Please enter rate for all fabrics before saving!",{variant:"warning",autoHideDuration:5e3});return}try{const i=await M.post("http://100.42.177.77:83/api/StockReceiving/SaveStockReceivingDetails",E);console.log("Save response:",i.data),i.data.success?D(`${i.data.message} !`,{variant:"success",autoHideDuration:5e3}):(D(`${i.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",i.data.message)),Q(),A()}catch(i){console.error("Error saving data:",i),D("FAILED: Unable to save",{variant:"error",autoHideDuration:5e3})}};return e.jsxs(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(u,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(Be,{rows:d,columns:O,pageSize:10,apiRef:N,disableRowSelectionOnClick:!0})})}),e.jsx(u,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx($,{variant:"contained",size:"small",onClick:x,children:"Receive"})})," "]})};Se(j)(({theme:o})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"}));const et=()=>{const{enqueueSnackbar:o}=ve(),{user:g}=ne(),[n,A]=a.useState([]),[Q,k]=a.useState([]);a.useState([]),Ne();const[D,E]=a.useState(!1),[B,N]=a.useState([]),[d,I]=a.useState([]);a.useState(!1);const[O,H]=a.useState([]),[x,c]=a.useState([]);console.log("responseData",x);const[i,h]=a.useState({productionId:0,productionHeaderId:0,processTypeId:1222,itpId:"",status:2,startDate:new Date().toISOString(),appId:g.appId,createdOn:new Date().toISOString(),createdBy:g.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:g.empId}),[y,S]=a.useState({issuanceNo:n.issuanceNo||0,issuanceName:n.issuanceName||"",barcode:n.barcode||"",itpQuantity:x.itpQuantity||"",requiredQuantity:n.quantity||"",uom:x.uomName||"",issuanceDate:n.issuanceDate||"",fabricName:n.fabricName||"",rate:x.rate||"",tax:x.tax||"",amount:x.amount||"",amountAfterTax:"",remarks:"",createdOn:new Date().toISOString(),createdBy:g.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:g.empId});a.useEffect(()=>{S({stockId:n.stockId||0,itpDetId:x.itpDetId,issuanceNo:n.issuanceNo||0,issuanceName:n.issuanceName||"",barcode:n.barcode||"",quantity:x.itpQuantity||"",requiredQuantity:n.quantity||"",uom:x.uomName||"",uomId:x.uomId||"",issuanceDate:n.issuanceDate||"",productName:n.fabricName||"",fabricId:n.fabricId||"",rate:x.rate||"",tax:x.tax||"",amount:x.amount||"",amountAfterTax:"",remarks:"",createdOn:new Date().toISOString(),createdBy:g.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:g.empId})},[n,x]),console.log("addForm:",y);const[T,v]=a.useState([]);a.useState([]),a.useState(!1);const{data:z}=be();a.useEffect(()=>{if(z){const t=z.result[0];N(t.productionProcessList),I(t.vendorList)}},[z]);const[R,Y]=a.useState([]),{data:C}=Qe(i.collectionId,{skip:!i.collectionId}),{data:F,refetch:P}=Ee(i.productionHeaderId,{skip:!i.productionHeaderId});a.useEffect(()=>{if(C){const t=C.result;Y(t)}},[C]);const{data:G}=je(),[U,_]=a.useState([]);a.useEffect(()=>{G&&(G.result[0],_(G.result.map((t,r)=>({id:r+1,...t}))))},[G]),a.useEffect(()=>{F&&v(F.result.map((t,r)=>({id:r+1,...t})))},[F,P,i.productionHeaderId]);const l=t=>{const{name:r,value:m}=t.target;if(r==="productionId"){const b=U.find(q=>q.productionId===parseInt(m));h({...i,productionId:m,productionHeaderId:b?b.productionHeaderId:""})}else if(r==="itpId"){const b=O.find(q=>q.itpId===parseInt(m));h({...i,itpId:m,noOfItems:b?b.noOfItems:"",issuanceDate:b?b.issuanceDate:"",issuanceName:b?b.issuanceName:""})}else h({...i,[r]:m}),S({...y,[r]:m})};console.log("formData",i),console.log("productioncollectionList",U),a.useEffect(()=>{const t=()=>{const Z=parseFloat(y.rate)||0,pe=parseFloat(y.quantity)||0;return(Z*pe).toFixed(2)},r=(Z,pe)=>(Z*(1+pe/100)).toFixed(2),m=t(),b=parseFloat(y.tax)||0,q=r(m,b);S(Z=>({...Z,amount:m,amountAfterTax:q}))},[y.rate,y.itpQuantity,y.tax]);const w=async()=>{try{const t=await M.get("http://100.42.177.77:83/api/StockReceiving/FetchItpByAppIdList?appId=1");H(t.data.result.map((r,m)=>({id:m+1,...r})))}catch(t){console.error("Error fetching ITP:",t)}},L=async()=>{try{const t=await M.post("http://100.42.177.77:83/api/StockReceiving/SaveStockReceivingHeader",i);console.log("Save response:",t.data),P(),v(t.data.result.map((r,m)=>({id:m+1,...r}))),t.data.success?o(`${t.data.message} !`,{variant:"success",autoHideDuration:5e3}):(o(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message))}catch(t){console.error("Error saving data:",t),o("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};console.log("itps",O);const[J,W]=a.useState(!1),[ae,se]=a.useState(!1),[de,le]=a.useState(null),[oe,ce]=a.useState(null),ue=async t=>{A(t),le(t.stockId);try{const r=await M.get(`http://100.42.177.77:83/api/Production/GetProductionFabricDetailByProductionHeaderId?productionHeaderId=${t.productionHeaderId}&status=2`);k(r.data.result.map((m,b)=>({id:b+1,...m})))}catch(r){console.error("Error fetching ITP:",r)}W(!0)},V=async t=>{console.log("rowdata",t);try{const r=await M.get(`http://100.42.177.77:83/api/StockReceiving/GetStockByStatusList?productionId=${t.productionId}&status=8`);console.log("response",r);const m=r.data.result;console.log("API Data Result:",m),ce(m.map((b,q)=>({id:q+1,...b})))}catch(r){console.error("Error fetching ITP:",r)}se(!0)};console.log("stockView",oe);const K=()=>{W(!1),A({})},s=()=>{se(!1)},p=[{field:"id",headerName:"Sr#"},{field:"collectionName",headerName:"Production"},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"issuanceName",headerName:"ITP"},{field:"statusDesc",headerName:"Status"},{field:"View",headerName:"View Details",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(Oe,{variant:"text",size:"small",children:[e.jsx(te,{color:"primary",onClick:()=>ue(t.row),disabled:t.row.statusId===8,children:e.jsx(He,{})}),e.jsx(te,{color:"primary",onClick:()=>V(t.row),children:e.jsx(Pe,{})})]})})}],f=[{field:"id",headerName:"Sr#"},{field:"fabricName",headerName:"Fabric"},{field:"barcode",headerName:"Barcode"},{field:"uomName",headerName:"UOM"},{field:"quantity",headerName:"Quantity Received",valueGetter:t=>t.toLocaleString()},{field:"rate",headerName:"Rate",valueGetter:t=>t.toLocaleString()},{field:"tax",headerName:"Tax"},{field:"amount",headerName:"Amount",valueGetter:t=>t.toLocaleString()},{field:"amountAfterTax",headerName:"Amount After Tax",valueGetter:t=>t.toLocaleString()}];return e.jsxs(we,{variant:"outlined",children:[e.jsx(De,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(Pe,{}),title:"Fabric Receiving from ITP",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(u,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(u,{item:!0,xs:12,textAlign:"right",sx:{mt:1},children:e.jsx($,{variant:"contained",size:"small",onClick:w,color:"success",children:"Fetch ITP"})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{label:"Production",fullWidth:!0,select:!0,size:"small",name:"productionId",onChange:l,value:i.productionId,required:!0,disabled:D,InputLabelProps:{shrink:!0,sx:{color:"black"}},children:U.map(t=>e.jsx(X,{value:t.productionId,children:t.collectionName},t.id))})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{size:"small",type:"date",label:"Start Date",name:"startDate",value:i.startDate,onChange:l,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{fullWidth:!0,select:!0,label:"Select ITP",name:"itpId",value:i.itpId,onChange:l,size:"small",InputLabelProps:{shrink:!0,sx:{color:"black"}},children:O.map(t=>e.jsx(X,{value:t.itpId,children:t.collectionName},t.id))})}),e.jsx(u,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx($,{variant:"contained",size:"small",onClick:L,children:"start Process"})}),e.jsxs(u,{item:!0,xs:12,children:[e.jsx(ie,{initialRows:T,iColumns:p,hideAction:!0}),e.jsxs(he,{open:J,onClose:K,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(xe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(re,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Save Details"}),e.jsx(te,{onClick:K,sx:{color:"#ffffff"},children:e.jsx(ye,{})})]}),e.jsxs(ge,{children:[e.jsx(Ie,{id:"alert-dialog-slide-description"}),e.jsx(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(u,{item:!0,xs:12,children:e.jsx(Ze,{fabrics:Q,setFabrics:k,stockId:de,handleClose:K,refetchStockData:P})})})]})]}),e.jsxs(he,{open:ae,onClose:s,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(xe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(re,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Stock Receiving Details"}),e.jsx(te,{onClick:s,sx:{color:"#ffffff"},children:e.jsx(ye,{})})]}),e.jsxs(ge,{children:[e.jsx(Ie,{id:"alert-dialog-slide-description"}),e.jsx(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(u,{item:!0,xs:12,children:e.jsx(ie,{initialRows:oe,iColumns:f,hideAction:!0})})})]})]})]})]})]})},Te=()=>{ne(),a.useState([]),a.useState(!1);const[o,g]=a.useState({}),[n,A]=a.useState({productionId:0,processType:"",status:o==null?void 0:o.statusId,collectionName:(o==null?void 0:o.collectionName)||0,processTypeName:(o==null?void 0:o.processTypeName)||"",startDate:new Date(o==null?void 0:o.startDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,statusName:(o==null?void 0:o.statusName)||"",productionHeaderId:(o==null?void 0:o.productionHeaderId)||""});a.useEffect(()=>{A({...n,collectionName:(o==null?void 0:o.collectionName)||0,processTypeName:(o==null?void 0:o.processTypeName)||"",startDate:new Date(o==null?void 0:o.startDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,statusName:(o==null?void 0:o.statusName)||"",productionHeaderId:(o==null?void 0:o.productionHeaderId)||""})},[o,g]);const[Q,k]=a.useState([]);a.useState(!1);const{data:D,refetch:E}=Re({productionId:n.productionId,status:n.status},{skip:!n.productionId||!n.status}),{data:B,refetch:N}=Fe();be();const{data:d}=Le(),{data:I,refetch:O}=Ue({productionHeaderId:n.productionHeaderId,status:n.status},{skip:!n.productionHeaderId||!n.status}),{data:H,refetch:x}=je(),[c,i]=a.useState([]),[h,y]=a.useState([]),[S,T]=a.useState([]),[v,z]=a.useState([]);console.log("processesList",S),a.useEffect(()=>{d&&T(d.result)},[d]),a.useEffect(()=>{I&&y(I.result.map((l,w)=>({id:w+1,...l})))},[I,O]),a.useEffect(()=>{if(H){const l=new Set,w=H.result.filter(L=>l.has(L.collectionName)?!1:(l.add(L.collectionName),!0)).map((L,J)=>({id:J+1,...L}));z(w)}},[H,x]),a.useEffect(()=>{D&&k(D.result.map((l,w)=>({id:w+1,...l})))},[D,E]),a.useEffect(()=>{B&&i(B.result.map((l,w)=>({id:w,...l})))},[B,N]),console.log("initialRows",Q);const R=l=>{const{name:w,value:L}=l.target;A({...n,[w]:L})};console.log("formData",n);const[Y,C]=a.useState(!1),F=l=>{g(l),C(!0)},P=()=>{C(!1),g({})},G=()=>{console.log("handleIssuance: route to dyeingIssuance")},U=[{field:"id",headerName:"Sr#"},{field:"collectionName",headerName:"Production Batch"},{field:"processTypeName",headerName:"Process Type"},{field:"orderNumber",headerName:"Order Number"},{field:"startDate",headerName:"Start Date",valueGetter:l=>new Date(l).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"statusName",headerName:"Status"},{field:"action",headerName:"Action",flex:1,renderCell:l=>e.jsxs(Oe,{variant:"outlined",size:"small","aria-label":"outlined primary button group",children:[e.jsx($,{onClick:()=>F(l.row),children:"View"}),e.jsx($,{onClick:G,children:"Issuance"})]}),sortable:!1,filterable:!1}],_=[{field:"id",headerName:"Sr#"},{field:"fabricName",headerName:"Fabric"},{field:"uomName",headerName:"UOM"},{field:"assignQty",headerName:"PX Assigned Qty",valueGetter:l=>l.toLocaleString()},{field:"rate",headerName:"Rate"},{field:"tax",headerName:"Tax"},{field:"totalBeforeTax",headerName:"Total Before Tax"},{field:"totalAfterTax",headerName:"Total After Tax"}];return e.jsxs(fe,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(we,{variant:"outlined",children:[e.jsx(De,{className:"css-4rfrnx-MuiCardHeader-root",title:"View Production Process ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{fullWidth:!0,select:!0,label:"Production",name:"productionId",value:n.productionId,onChange:R,size:"small",children:v.map(l=>e.jsx(X,{value:l.productionId,children:l.collectionName},l.productionId))})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{fullWidth:!0,select:!0,label:"status",name:"status",value:n.status,onChange:R,size:"small",children:S.map(l=>e.jsx(X,{value:l.statusId,children:l.statusDesc},l.statusId))})}),e.jsxs(u,{item:!0,xs:12,children:[e.jsx(ie,{initialRows:Q,iColumns:U,hideAction:!0}),e.jsxs(he,{open:Y,onClose:P,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(xe,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(re,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Issuance View"}),e.jsx(te,{onClick:P,sx:{color:"#ffffff"},children:e.jsx(ye,{})})]}),e.jsxs(ge,{children:[e.jsx(Ie,{id:"alert-dialog-slide-description"}),e.jsxs(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{label:"Issuance",fullWidth:!0,size:"small",name:"collectionName",onChange:R,value:n.collectionName,required:!0,disabled:!0})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{label:"ProcessType",fullWidth:!0,size:"small",name:"processTypeName",onChange:R,value:n.processTypeName,required:!0,disabled:!0})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{size:"small",label:"Start Date",name:"startDate",value:n.startDate,onChange:R,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{label:"Status",fullWidth:!0,size:"small",name:"statusName",onChange:R,value:n.statusName,required:!0,disabled:!0})}),e.jsx(u,{item:!0,xs:12,children:e.jsx(ie,{initialRows:h,iColumns:_,hideAction:!0})})]})," "]})]})]})]})]}),e.jsx(Ae,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}})]})},tt=Se(j)(({theme:o})=>({"& .MuiInputBase-input":{fontSize:"0.875rem",padding:"4px 6px"},width:"auto",height:"auto",minWidth:"100px",minHeight:"30px"})),ft=()=>{const{user:o}=ne(),[g,n]=a.useState([]),[A,Q]=a.useState(!1),[k,D]=a.useState([]),[E,B]=a.useState(!1),{enqueueSnackbar:N}=ve(),[d,I]=a.useState({productionId:0,collectionId:"",viewCollectionId:"",processType:"",AssignQty:"",status:"",startDate:new Date().toISOString(),appId:o.appId,createdOn:new Date().toISOString(),createdBy:o.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:o.empId,ViewStatus:""});console.log("Form Data:",d);const[O,H]=a.useState("1"),x=(s,p)=>{H(p)};a.useEffect(()=>{I({})},[g]);const[c,i]=a.useState([]),[h,y]=a.useState([]);a.useState(!1);const{data:S}=Le(),[T,v]=a.useState([]);a.useEffect(()=>{if(S){const s=Array.isArray(S.result[0])?S.result[0]:S.result;v(s)}},[S]);const{data:z}=be();a.useEffect(()=>{if(z){const p=z.result[0].productionProcessList.filter(f=>f.lookUpName==="Fabrication");D(p)}},[z]),qe();const[R,Y]=a.useState([]),{data:C,refetch:F}=Me();a.useEffect(()=>{if(C){const s=C.result[0];Y(C.result.map((p,f)=>({id:f+1,...p}))),s&&s.productionId&&I(p=>({...p,productionId:s.productionId}))}},[C,F]);const{data:P,refetch:G}=je(),[U,_]=a.useState([]);a.useEffect(()=>{P&&(P.result[0],_(P.result.map((s,p)=>({id:p+1,...s}))))},[P,G]);const l=s=>{const{name:p,value:f}=s.target;if(p==="collectionId"){const t=R.find(r=>r.collectionId===parseInt(f));I({...d,collectionId:f,productionId:t?t.productionId:""}),w(1,f)}else if(p==="viewCollectionId"){const t=U.find(r=>r.collectionId===parseInt(f));I(r=>({...r,viewCollectionId:f,ViewStatus:t?t.status:"",productionId:t?t.productionId:""})),ae()}else I({...d,[p]:f})},w=async(s,p)=>{B(!0);try{const f=await M.get(`http://100.42.177.77:83/api/Production/GetFabricForProductionByCollectionId?appId=${s}&collectionid=${p}`);if(f.data.success){const t=f.data.result.map((r,m)=>({...r,id:r.fabricId,sr:m+1}));i(t)}else console.error(f.data.message)}catch(f){console.error("Failed to fetch fabric for production data",f)}finally{B(!1)}},[L,J]=a.useState([]),{data:W,refetch:ae}=Re({productionId:d.productionId,status:d.ViewStatus},{skip:!d.productionId||!d.ViewStatus});a.useEffect(()=>{W&&J(W.result.map((s,p)=>({...s,id:s.productionHeaderId,sr:p+1})))},[W,ae]),console.log(L);const se=s=>{const{id:p,field:f,value:t}=s;console.log("Editing cell:",s),f==="AssignQty"&&i(r=>r.map(m=>m.id===p?{...m,AssignQty:t}:m))},de=[{field:"sr",headerName:"Sr#",flex:1},{field:"collectionName",headerName:"Collection Name",flex:1},{field:"fabricName",headerName:"Fabric Name",flex:1},{field:"quantity",headerName:"Quantity",flex:1,valueGetter:s=>s.toLocaleString(),renderCell:s=>e.jsx(re,{sx:{fontWeight:"bold",mt:2},children:s.value})},{field:"AssignQty",headerName:"Assign Quantity",flex:1,renderCell:s=>e.jsx(tt,{variant:"outlined",size:"small",sx:{mt:1,width:100},value:s.row.AssignQty||"",onChange:p=>se({id:s.id,field:"AssignQty",value:p.target.value}),type:"number",InputProps:{style:{fontSize:"0.875rem"}}})},{field:"bxQuantity",headerName:"BX Quantity",flex:1,valueGetter:s=>s.toLocaleString()},{field:"uomName",headerName:"UOM",flex:1}];console.log("Selected Rows:",h);const le=s=>{y(s),console.log("New Selection:",s)},[oe,ce]=a.useState([]),ue=async()=>{if(h.length===0){N("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}try{console.log("FormData:",d),console.log("Selected Rows:",h),console.log("Initial Rows:",c);const p=c.filter(r=>h.includes(r.id)).map(r=>({productionHeaderDetId:0,productionHeaderId:d.productionId||0,fabricId:r.fabricId,totalQuantity:r.quantity||0,assignQty:r.AssignQty||"0",status:"",uomId:r.uomId||0,createdBy:d.createdBy||0,createdOn:d.createdOn||new Date().toISOString(),lastUpdatedBy:d.lastUpdatedBy||0,lastUpdatedOn:d.lastUpdatedOn||new Date().toISOString(),rate:r.rate||0,tax:r.tax||0,totalBeforeTax:r.totalBeforeTax||0,totalAfterTax:r.totalAfterTax||0})),f={productionHeaderId:d.productionId||0,productionId:d.productionId||0,processTypeId:d.processType||0,status:d.status,startDate:d.startDate||new Date().toISOString(),createdOn:d.createdOn||new Date().toISOString(),createdBy:d.createdBy||0,lastUpdatedOn:d.lastUpdatedOn||new Date().toISOString(),lastUpdatedBy:d.lastUpdatedBy||0,productionDetails:p};console.log("Payload:",f);const t=await M.post("http://100.42.177.77:83/api/Production/StartProductionProcess",f);t.data.success?(N("Production process started successfully!",{variant:"success",autoHideDuration:5e3}),console.log("API saved successfully"),console.log("Response:",t),ce(r=>[...r,...h]),G()):(console.error(t.data.message),N("Failed to start production process",{variant:"error",autoHideDuration:5e3}))}catch(s){console.error("Error starting production process",s),N("An error occurred while starting the production process",{variant:"error",autoHideDuration:5e3})}},V=Ne(),K=s=>{V.current&&V.current.autosizeColumns&&V.current.autosizeColumns({includeOutliers:!0,includeHeaders:!0})};return e.jsx(We,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(fe,{sx:{width:"100%",typography:"body1"},children:e.jsxs(Xe,{value:O,children:[e.jsx(fe,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(Ye,{onChange:x,"aria-label":"lab API tabs example",children:[e.jsx(ke,{icon:e.jsx($e,{}),label:"Production Process Fabrication",value:"1",sx:s=>({"& .MuiTouchRipple-child":{backgroundColor:`${s.palette.primary.main} !important`}})}),e.jsx(ke,{icon:e.jsx(Ve,{}),label:"Fabric Receving",value:"2",sx:s=>({"& .MuiTouchRipple-child":{backgroundColor:`${s.palette.primary.main} !important`}})})]})}),e.jsxs(me,{value:"1",children:[e.jsxs(we,{variant:"outlined",children:[e.jsx(De,{className:"css-4rfrnx-MuiCardHeader-root",title:"Production Process > Fabrication",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(u,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{label:"Collection",fullWidth:!0,select:!0,size:"small",name:"collectionId",onChange:l,value:d.collectionId,required:!0,disabled:A,InputLabelProps:{shrink:!0,sx:{color:"black"}},children:R.map(s=>e.jsx(X,{value:s.collectionId,children:s.collectionName},s.collectionId))})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{fullWidth:!0,select:!0,label:"Select Process",name:"processType",value:d.processType,onChange:l,size:"small",InputLabelProps:{shrink:!0,sx:{color:"black"}},children:k.map(s=>e.jsx(X,{value:s.lookUpId,children:s.lookUpName},s.lookUpId))})}),e.jsx(u,{item:!0,xs:12,md:3,children:e.jsx(j,{size:"small",type:"date",label:"Start Date",name:"startDate",value:d.startDate,onChange:l,fullWidth:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(u,{item:!0,xs:3,textAlign:"right",sx:{mt:1},children:e.jsx($,{variant:"contained",size:"small",onClick:ue,color:"success",children:"Start Process"})}),e.jsx(u,{item:!0,xs:12,mt:1,children:e.jsx(Be,{rows:c.filter(s=>!oe.includes(s.id)),checkboxSelection:!0,columns:de,disableDelete:!0,getRowId:s=>s.id,disableRowSelectionOnClick:!0,autosizeOnMount:!0,apiRef:V,onStateChange:K,onRowSelectionModelChange:s=>le(s),sx:{"--DataGrid-rowBorderColor":"rgb(255 255 255)","& .css-1kyxv1r-MuiDataGrid-root":{color:"white",backgroundColor:"#323232"},"& .MuiDataGrid-container--top [role=row]":{color:"white",backgroundColor:"#323232"},"& .MuiDataGrid-columnSeparator":{color:"white"},"& .MuiDataGrid-iconButtonContainer":{color:"white"},"& .MuiDataGrid-sortIcon":{color:"white"},"& .css-ptiqhd-MuiSvgIcon-root ":{color:"white"},"& .MuiDataGrid-row":{"&.total-summary-row":{backgroundColor:"darkgray"}}}})})]})]}),e.jsx(Ae,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsx(Te,{})]}),e.jsx(me,{value:"2",children:e.jsx(et,{})}),e.jsx(me,{value:"3",children:e.jsx(Te,{})})]})})})};export{ft as default};
