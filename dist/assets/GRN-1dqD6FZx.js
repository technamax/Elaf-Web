import{u as Y,c as _,a9 as Z,b as ee,x as ae,y as te,j as e,G as l,e as q,aa as se,B,C as re,d as oe,T as E,L as ie,M as le}from"./index-BQnKJm_U.js";import{r as t}from"./vendor-BXCbSo2_.js";import{d as ne}from"./CategoryOutlined-Bcv7mrwf.js";import{d as T}from"./AssignmentOutlined-CvXohB2J.js";import"./ReceivingDetails-COipxSuI.js";import{R as J,a as H,b as M,c as $,d as U,B as de}from"./ReuseableDataGrid-DM_ExMFu.js";import{d as V}from"./Close-BQnbGXeb.js";import ce from"./Reports-hRs1Vcia.js";import{B as A,a as ue,I as X}from"./axios-CIHeZEXI.js";import{T as f}from"./TextField-B9bDqCXW.js";import{M as me}from"./MenuItem-CqoynPPu.js";import{T as pe,a as fe,b as C,c as v}from"./TabPanel-eD93EyWL.js";import"./Skeleton-B93ZyZJN.js";const he=({iss:s,handleClose:u,refetchData:d})=>{const{user:m}=Y(),[n,h]=t.useState({grnHeader:{grnId:0,grnNumber:"",...s,createdBy:m.empId,remarks:""}}),{enqueueSnackbar:x}=_(),[g,j]=t.useState([]),[o,R]=t.useState([]),[W,S]=t.useState([]),[z,L]=t.useState([]),[P,Q]=t.useState([]),{data:p,refetch:D}=Z(s.inspectionId,{skip:!s.inspectionId}),{data:y,refetch:O}=ee(),{data:b,refetch:G}=ae(),{data:N,refetch:w}=te();t.useEffect(()=>{if((p==null?void 0:p.result)===null){j([]);return}p&&j(p.result.map((a,i)=>({id:i+1,...a})))},[p,D]),t.useEffect(()=>{b&&L(b.result.map((a,i)=>({id:i+1,...a})))},[b,G]),t.useEffect(()=>{N&&Q(N.result.map((a,i)=>({id:i+1,...a})))},[N,w]),t.useEffect(()=>{y&&(R(y.result[0].destination.map((a,i)=>({id:i+1,...a}))),S(y.result[0].dispatchFrom.map((a,i)=>({id:i+1,...a}))))},[y]),console.log("iss",s),console.log("formData",n),console.log("GRNList",g),console.log("dispatchFromList",W);const r=a=>{const{name:i,value:K}=a.target;h(F=>({...F,grnHeader:{...F.grnHeader,[i]:K}}))},c=g.map(a=>({...a,grnId:0,grnItemId:0,total:a.gradeAQty*a.rate,acceptedQty:a.gradeAQty,grnaQty:a.gradeAQty,grnbQty:a.gradeBQty,grncpQty:a.gradeCPQty,bGradetotal:a.gradeBQty*a.rate*a.bGradeRate}));console.log("calRows",c),t.useEffect(()=>{h({...n,grnDetailsList:[...c]})},[g]),console.log("formData",n);const I=[{field:"id",headerName:"Sr#"},{field:"designNo",headerName:"Design"},{field:"fabricName",headerName:"Fabric"},{field:"colorName",headerName:"Color"},{field:"gradeAQty",headerName:"Grade A"},{field:"rate",headerName:"Rate"},{field:"total",headerName:"Total"},{field:"gradeBQty",headerName:"Grade B"},{field:"bGradeRate",headerName:"BGrade Rate",valueGetter:(a,i)=>a*i.rate},{field:"bGradetotal",headerName:"BGradeTotal"},{field:"gradeCPQty",headerName:"GradeCP"},{field:"rejectedQty",headerName:"Rejected",renderCell:a=>{const i="error.dark";if(a.value!==0)return e.jsx(q,{label:a.value,sx:{backgroundColor:i,color:"white"},color:void 0})}},{field:"remarks",headerName:"Remarks"},{field:"shortageQty",headerName:"Shortage"}],k=async()=>{try{const a=await ue.post("http://100.42.177.77:83/api/GRN/SaveGRN",n);d(),a.data.success?x(`${a.data.message} !`,{variant:"success",autoHideDuration:5e3}):(x(`${a.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",a.data.message)),console.log("Save response:",a.data),u()}catch(a){console.error("Error saving data:",a),x("FAILED: Unable to start Process",{variant:"error",autoHideDuration:5e3})}};return e.jsxs("div",{children:[e.jsxs(l,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"Production",name:"productionId",value:s.collectionName,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"PO",name:"poName",value:s.poName,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"Issuance",name:"issuanceId",value:s.issuanceId,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"IGP",name:"igpNumber",value:s.igpNumber,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:1.5,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"Proces Type",name:"processTypeName",value:s.processTypeName,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,disabled:!0,label:"Vendor",name:"vendorName",value:s.vendorName,size:"small"})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(f,{label:"Remarks",fullWidth:!0,size:"small",name:"remarks",onChange:r,value:n.grnHeader.remarks,required:!0})})]}),e.jsxs(l,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(l,{item:!0,xs:12,children:e.jsx(J,{initialRows:c,iColumns:I,hideAction:!0})}),e.jsx(l,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(A,{variant:"contained",size:"small",onClick:k,disabled:s.status===9,children:"Save"})})]})]})},xe=()=>{_();const{user:s}=Y(),[u,d]=t.useState({issuanceId:"",poId:"",ogpNumber:"",appId:s.appId,createdOn:new Date().toISOString(),createdBy:s.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:s.empId}),[m,n]=t.useState([]),[h,x]=t.useState([]),[g,j]=t.useState([]),{data:o,error:R,isLoading:W,refetch:S}=se();t.useEffect(()=>{o&&n(o.result.map((r,c)=>({id:c+1,...r})))},[o,S]),console.log("initialRows",m),console.log("initialRows",m);const z=r=>{const{name:c,value:I}=r.target;if(c==="poId"){const k=h.find(a=>a.poId===parseInt(I));d({...u,poId:I,issuanceId:k?k.issuanceId:""})}else d({...u,[c]:I})};console.log("formData",u);const[L,P]=t.useState(!1),[Q,p]=t.useState(!1),[D,y]=t.useState(!1),O=async r=>{y(r),P(!0)},b=()=>{P(!1)},G=()=>{p(!1)},N=async r=>{j(r.issuanceId)},w=[{field:"id",headerName:"Sr#"},{field:"issuanceId",headerName:"issuance#"},{field:"poName",headerName:"PO#"},{field:"igpNumber",headerName:"IGP#"},{field:"collectionName",headerName:"Production"},{field:"processTypeName",headerName:"Process"},{field:"statusName",headerName:"Status",renderCell:r=>e.jsx(q,{label:r.value,sx:{backgroundColor:"primary.dark",color:"white"},color:void 0})},{field:"Actions",headerName:"Actions",renderCell:r=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsxs(de,{variant:"text",size:"small",sx:{mt:1},children:[e.jsx(A,{size:"small",color:"primary",onClick:()=>O(r.row),children:"Receive"}),e.jsx(A,{size:"small",color:"primary",onClick:()=>N(r.row),children:"POST"})]})})}];return e.jsx(B,{sx:{width:"100%",typography:"body1"},children:e.jsxs(re,{variant:"outlined",children:[e.jsx(oe,{className:"css-4rfrnx-MuiCardHeader-root",title:"Receiving",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(l,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(f,{fullWidth:!0,select:!0,label:"PO#",name:"poId",value:u.poId,onChange:z,size:"small",children:h.map(r=>e.jsx(me,{value:r.poId,children:r.poName},r.poId))})}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(J,{initialRows:m,iColumns:w,hideAction:!0}),e.jsxs(H,{open:L,onClose:b,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(M,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(E,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Details"}),e.jsx(X,{onClick:b,sx:{color:"#ffffff"},children:e.jsx(V,{})})]}),e.jsxs($,{children:[e.jsx(U,{id:"alert-dialog-slide-description"}),e.jsx(he,{iss:D,handleClose:b,refetchData:S})]})]}),e.jsxs(H,{open:Q,onClose:G,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(M,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px",mb:2.5},children:[e.jsx(E,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Create OGP"}),e.jsx(X,{onClick:G,sx:{color:"#ffffff"},children:e.jsx(V,{})})]}),e.jsxs($,{children:[e.jsx(U,{id:"alert-dialog-slide-description"}),e.jsx(ce,{rId:14,OGPNumber:D.igpNumber})]})]})]})]})]})})},Te=()=>{var x,g,j;const s=ie(),u=(x=s.state)==null?void 0:x.data,d=(j=(g=s.state)==null?void 0:g.tab)==null?void 0:j.toString();console.log("rowData",u),console.log("tab",d);const[m,n]=t.useState("1"),h=(o,R)=>{n(R),console.log("value",m)};return t.useEffect(()=>{d&&n(d)},[d]),e.jsx(le,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(B,{sx:{width:"100%",typography:"body1"},children:e.jsxs(pe,{value:m,children:[e.jsx(B,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(fe,{onChange:h,children:[e.jsx(C,{icon:e.jsx(ne,{}),label:"Dyeing GRN",value:"1",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(C,{icon:e.jsx(T,{}),label:"Embroidery GRN",value:"2",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(C,{icon:e.jsx(T,{}),label:"Schiffili GRN",value:"3",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(C,{icon:e.jsx(T,{}),label:"Additional Process GRN",value:"4",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})}),e.jsx(C,{icon:e.jsx(T,{}),label:"Additional Services GRN",value:"5",sx:o=>({"& .MuiTouchRipple-child":{backgroundColor:`${o.palette.primary.main} !important`}})})]})}),e.jsx(v,{value:"1",children:e.jsx(xe,{})}),e.jsx(v,{value:"2"}),e.jsx(v,{value:"3"}),e.jsx(v,{value:"4"}),e.jsx(v,{value:"5"}),e.jsx(v,{value:"6"})]})})})};export{Te as default};
