import{y as K,z as Z,j as e,u as V,a0 as F,a1 as ee,B as G,C as U,d as _,G as n,T as te,D as A,c as ae,a2 as re,a3 as se,M as oe}from"./index-CZjWfJ9S.js";import{r}from"./vendor-BXCbSo2_.js";import{I as z,B as ne,a as de}from"./axios--CKk_8iX.js";import{d as le}from"./AddCircleOutlineOutlined-Bh5Pb8Bm.js";import{R as M,a as ce,b as ie,c as ue,d as me,u as he,D as pe}from"./ReuseableDataGrid-D1pMcJDs.js";import{d as fe}from"./VisibilityOutlined-BPW8ryPe.js";import{d as xe}from"./Close-BtpqQMIF.js";import{T as u}from"./TextField-C0yoPlRE.js";import{T as ge,a as Ie,b as W,c as q}from"./TabPanel-HMB-4Jgp.js";import{M as be}from"./MenuItem-EYddAVor.js";import"./Skeleton-B3PPDIKO.js";var T={},Ne=Z;Object.defineProperty(T,"__esModule",{value:!0});var $=T.default=void 0,je=Ne(K()),De=e;$=T.default=(0,je.default)((0,De.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"PreviewOutlined");const Se=()=>{V(),r.useState([]);const[t,a]=r.useState({});console.log("initialFormData",t);const[Q,C]=r.useState(!1),[i,m]=r.useState({fromDate:"",toDate:"",productionId:(t==null?void 0:t.productionId)||0,collectionId:(t==null?void 0:t.collectionName)||"",orderNumber:(t==null?void 0:t.orderNumber)||"",launchDate:(t==null?void 0:t.launchDate)||"",status:(t==null?void 0:t.statusName)||"",remarks:(t==null?void 0:t.remarks)||""});r.useEffect(()=>{m({productionId:(t==null?void 0:t.productionId)||0,collectionId:(t==null?void 0:t.collectionName)||"",orderNumber:(t==null?void 0:t.orderNumber)||"",launchDate:new Date(t==null?void 0:t.launchDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||"",status:(t==null?void 0:t.statusName)||"",remarks:(t==null?void 0:t.remarks)||""})},[t,a]);const[w,P]=r.useState([]),[k,B]=r.useState([]),{data:b,refetch:h}=F(),{data:f,refetch:l}=ee(i.productionId,{skip:!i.productionId}),[x,H]=r.useState([]);r.useEffect(()=>{b&&P(b.result.map((o,c)=>({id:c+1,...o})))},[b,h]),r.useEffect(()=>{f&&B(f.result.map((o,c)=>({id:c+1,...o})))},[f,l]),console.log("initialRows",w),console.log("batchDetailsRows",k);const g=o=>{const{name:c,value:v}=o.target;if(c==="collectionId"){const I=x.find(E=>E.collectionId===parseInt(v));m({...i,collectionId:v,orderNumber:I?I.orderNumber:""})}else m({...i,[c]:v})};console.log("formData",i);const[R,D]=r.useState(!1),O=o=>{a(o),D(!0)},N=()=>{D(!1),a({})},L=[{field:"id",headerName:"Sr#"},{field:"productionId",headerName:"Production Id"},{field:"collectionName",headerName:"Collection Name"},{field:"brandName",headerName:"Brand Name"},{field:"seasonName",headerName:"Season Name"},{field:"launchDate",headerName:"Launch Date",valueGetter:o=>new Date(o).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"remarks",headerName:"Remarks"},{field:"statusName",headerName:"Status"},{field:"View",headerName:"View Details",renderCell:o=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(z,{color:"primary",onClick:()=>O(o.row),children:e.jsx(fe,{})})})}],S=[{field:"id",headerName:"Sr#"},{field:"productionId",headerName:"Production Id"},{field:"designNo",headerName:"Design"},{field:"designerName",headerName:"Designer Name"},{field:"poPcs",headerName:"POPcs"},{field:"colorName",headerName:"Color"},{field:"planningDate",headerName:"Planning Date",valueGetter:o=>new Date(o).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"launchDate",headerName:"Launch Date",valueGetter:o=>new Date(o).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"remarks",headerName:"Remarks"},{field:"status",headerName:"statusName"},{field:"designCount",headerName:"Design Count"},{field:"brandName",headerName:"Brand Name"},{field:"seasonName",headerName:"Season Name"},{field:"volume",headerName:"Volume"}];return e.jsxs(G,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(U,{variant:"outlined",children:[e.jsx(_,{className:"css-4rfrnx-MuiCardHeader-root",title:"View Production Batches",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsxs(n,{item:!0,xs:12,children:[e.jsx(M,{initialRows:w,iColumns:L,setIsEdit:C,hideAction:!0}),e.jsxs(ce,{open:R,onClose:N,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(ie,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(te,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Details"}),e.jsx(z,{onClick:N,sx:{color:"#ffffff"},children:e.jsx(xe,{})})]}),e.jsxs(ue,{children:[e.jsx(me,{id:"alert-dialog-slide-description"}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{label:"Collection",fullWidth:!0,size:"small",name:"collectionId",onChange:g,value:i.collectionId,required:!0,disabled:!0})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{label:"Order Number",fullWidth:!0,size:"small",name:"orderNumber",onChange:g,value:i.orderNumber,required:!0,disabled:!0})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{size:"small",label:"Launch Date",name:"launchDate",value:i.launchDate,onChange:g,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:8,children:e.jsx(u,{label:"Remarks",fullWidth:!0,size:"small",name:"remarks",onChange:g,value:i.remarks,disabled:!0,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{label:"Status",fullWidth:!0,size:"small",name:"status",onChange:g,value:i.status,required:!0,disabled:!0})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(M,{initialRows:k,iColumns:S})})]})," "]})]})]})})," "]}),e.jsx(A,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}})]})},Ge=()=>{const{user:t}=V(),[a,Q]=r.useState([]),[C,i]=r.useState(!1),[m,w]=r.useState([]),[P,k]=r.useState({}),[B,b]=r.useState([]),h=he(),{enqueueSnackbar:f}=ae(),[l,x]=r.useState({productionId:0,collectionId:"",orderNumber:"",launchDate:"",remarks:"",productionBatchDetails:[m],appId:t.appId,createdOn:new Date().toISOString(),createdBy:t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId});console.log("formData",l);const[H,g]=r.useState("1"),R=(s,d)=>{g(d)};r.useEffect(()=>{x({productionId:(a==null?void 0:a.productionId)||0,collectionId:(a==null?void 0:a.collectionId)||"",orderNumber:(a==null?void 0:a.orderNumber)||"",launchDate:(a==null?void 0:a.launchDate)||"",remarks:(a==null?void 0:a.remarks)||"",appId:(a==null?void 0:a.appId)||t.appId,createdOn:(a==null?void 0:a.createdOn)||new Date().toISOString(),createdBy:(a==null?void 0:a.createdBy)||t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId})},[a]);const[D,O]=r.useState([]);r.useState(!1);const{data:N,refetch:L}=re(),{data:S,refetch:o}=se(l.collectionId,{skip:!l.collectionId}),[c,v]=r.useState([]);r.useEffect(()=>{N&&v(N.result.map((s,d)=>({id:d+1,...s})))},[N,L]),r.useEffect(()=>{S&&O(S.result.map((s,d)=>({id:d+1,...s})))},[S,o]),console.log("initialRows",D);const I=s=>{const{name:d,value:j}=s.target;if(d==="collectionId"){const p=c.find(y=>y.collectionId===parseInt(j));x({...l,collectionId:j,orderNumber:p?p.orderNumber:""})}else x({...l,[d]:j})},E=()=>{const s={};return l.launchDate||(s.launchDate="Launch Date is required"),s},X=async()=>{const s=E();if(Object.keys(s).length>0){k(s);return}if(B.length===0){f("Please select at least one row before saving!",{variant:"warning",autoHideDuration:5e3});return}try{const d=await de.post("http://100.42.177.77:83/api/Production/SaveProductionBatchHeader",l);f("Production Header saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Save response:",d.data),x(j=>({productionId:0,collectionId:"",orderNumber:"",launchDate:"",remarks:"",appId:t.appId,createdOn:new Date().toISOString(),createdBy:t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId})),b([]),O([]),o()}catch(d){console.error("Error saving data:",d),f("Production Header not saved !",{variant:"error",autoHideDuration:5e3})}};console.log("formData",l);const Y=[{field:"id",headerName:"Sr#"},{field:"orderNumber",headerName:"Order Number"},{field:"designNo",headerName:"Design No."},{field:"designerName",headerName:"DesignerName"},{field:"poPcs",headerName:"PO Pcs.."},{field:"planningDate",headerName:"Date Of Planning",valueGetter:s=>new Date(s).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"colorName",headerName:"Color"}],J=r.useCallback(s=>{b(s);const d=s.map(p=>{const y=h.current.getRow(p);return console.log("rowData",y),y?y.planningHeaderId:null}).filter(p=>p!==null);console.log("planningHeaderIds",d);const j=d.map(p=>({prodctionDetId:0,productionId:0,planningHeaderId:p,createdOn:new Date().toISOString(),createdBy:t.empId,lastUpdatedBy:t.empId,lastUpdatedOn:new Date().toISOString()}));w(j)},[h]);return r.useEffect(()=>{x({...l,productionBatchDetails:m})},[m]),r.useEffect(()=>{h.current&&console.log("API ref is ready:",h.current)},[h]),console.log("selectedDesigns:",m),e.jsx(oe,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(G,{sx:{width:"100%",typography:"body1"},children:e.jsxs(ge,{value:H,children:[e.jsx(G,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(Ie,{onChange:R,"aria-label":"lab API tabs example",children:[e.jsx(W,{icon:e.jsx(le,{}),label:"Production Initialization",value:"1",sx:s=>({"& .MuiTouchRipple-child":{backgroundColor:`${s.palette.primary.main} !important`}})}),e.jsx(W,{icon:e.jsx($,{}),label:"View Production Batches",value:"2",sx:s=>({"& .MuiTouchRipple-child":{backgroundColor:`${s.palette.primary.main} !important`}})})]})}),e.jsxs(q,{value:"1",children:[e.jsxs(U,{variant:"outlined",children:[e.jsx(_,{className:"css-4rfrnx-MuiCardHeader-root",title:"Production Batch",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{label:"Collection",fullWidth:!0,select:!0,size:"small",name:"collectionId",onChange:I,value:l.collectionId,required:!0,disabled:C,children:c.map(s=>e.jsx(be,{value:s.collectionId,children:s.collectionName},s.collectionId))})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{label:"Order Number",fullWidth:!0,size:"small",name:"orderNumber",onChange:I,value:l.orderNumber,required:!0,disabled:C})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(u,{size:"small",type:"date",label:"Launch Date",name:"launchDate",value:l.launchDate,onChange:I,fullWidth:!0,error:!!P.launchDate,helperText:P.launchDate,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,md:8,children:e.jsx(u,{label:"Remarks",fullWidth:!0,size:"small",name:"remarks",onChange:I,value:l.remarks,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(n,{item:!0,xs:12,children:e.jsx("div",{style:{height:400,width:"100%"},children:e.jsx(pe,{rows:D,columns:Y,apiRef:h,checkboxSelection:!0,onRowSelectionModelChange:J,rowSelectionModel:B})})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(ne,{variant:"contained",size:"small",onClick:X,children:"Save"})})]})," "]}),e.jsx(A,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit"})]}),e.jsx(q,{value:"2",children:e.jsx(Se,{})})]})})})};export{Ge as default};
