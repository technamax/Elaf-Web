import{u as fe,c as me,l as he,m as xe,n as pe,o as ge,p as Ie,q as je,r as Ne,t as ye,j as e,B as Se,C as De,d as be,G as r,T,D as ke}from"./index-CZjWfJ9S.js";import{r as o}from"./vendor-BXCbSo2_.js";import{B as z,I as k,a as Q}from"./axios--CKk_8iX.js";import{d as Ce}from"./VisibilityOutlined-BPW8ryPe.js";import{R as h,a as q,b as A,c as H,d as O}from"./ReuseableDataGrid-D1pMcJDs.js";import{d as X}from"./Close-BtpqQMIF.js";import{T as c}from"./TextField-C0yoPlRE.js";import{M as C}from"./MenuItem-EYddAVor.js";import"./Skeleton-B3PPDIKO.js";const Ae=()=>{fe(),o.useState([]);const{enqueueSnackbar:x}=me(),[s,u]=o.useState({});console.log("initialFormData",s);const[ve,V]=o.useState(!1),[i,f]=o.useState({issuanceNo:(s==null?void 0:s.issuanceNo)||0,status:"",issuanceName:(s==null?void 0:s.issuanceName)||"",issuanceDate:new Date(s==null?void 0:s.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,collectionId:(s==null?void 0:s.collectionId)||"",productionId:(s==null?void 0:s.productionId)||""});o.useEffect(()=>{f({...i,issuanceNo:(s==null?void 0:s.issuanceNo)||0,issuanceName:(s==null?void 0:s.issuanceName)||"",issuanceDate:new Date(s==null?void 0:s.issuanceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})||null,collectionId:(s==null?void 0:s.collectionId)||"",productionId:(s==null?void 0:s.productionId)||""})},[s,u]);const[v,p]=o.useState([]),[w,Y]=o.useState([]),{data:l,refetch:B}=he(),{data:g,refetch:M}=xe(),{data:I,refetch:j}=pe(),{data:N,refetch:U}=ge(),{data:y,refetch:we}=Ie(i.productionId,{skip:!i.productionId}),{data:S,refetch:Be}=je(i.collectionId,{skip:!i.collectionId}),{data:D,refetch:Pe}=Ne(i.status,{skip:!i.status}),{data:b}=ye(),[P,$]=o.useState([]),[_,J]=o.useState([]),[K,R]=o.useState([]),[Z,F]=o.useState([]),[L,ee]=o.useState([]);o.useEffect(()=>{I&&$(I.result.map((t,a)=>({id:a+1,...t})))},[I,j]),o.useEffect(()=>{D&&p(D.result.map((t,a)=>({id:a+1,...t})))},[D,j]),o.useEffect(()=>{b&&F(b.result.map((t,a)=>({id:a+1,...t})))},[b]),o.useEffect(()=>{N&&J(N.result.map((t,a)=>({id:a+1,...t})))},[N,U]),o.useEffect(()=>{y&&R(y.result.map((t,a)=>({id:a+1,...t})))},[y,i.productionId]),o.useEffect(()=>{S&&ee(S.result.map((t,a)=>({id:a+1,...t})))},[S,j]),o.useEffect(()=>{l&&p(l.result.map((t,a)=>({id:a+1,...t})))},[l,B]),o.useEffect(()=>{g&&Y(g.result.map((a,d)=>({id:d+1,...a})));const t=w.map(a=>({stockDetId:0,stockId:0,barcode:a.barcode,productName:a.productName,quantity:a.quantity,uom:a.uom,remarks:a.remarks}));f({...i,bxStockReceivingDetails:t})},[g,M,i.collectionId]),console.log("initialRows",v),console.log("fabricDetails",L);const n=t=>{const{name:a,value:d}=t.target;if(a==="collectionId"){const m=P.find(ue=>ue.collectionId===parseInt(d));f({...i,collectionId:d,productionId:m?m.productionId:""})}else f({...i,[a]:d})},te=async()=>{console.log("stockData",l),B(),l&&p(l.result.map((t,a)=>({id:a+1,...t})))},se=async()=>{console.log("stockData",l);try{const t=await Q.post("http://100.42.177.77:83/api/BxStockReceiving/SaveBxStockReceiving",i);console.log("Save response:",t.data),t.data.success?x("Dyeing saved successfully!",{variant:"success",autoHideDuration:5e3}):(x(`${t.data.message} !`,{variant:"error",autoHideDuration:5e3}),console.log("response.message",t.data.message))}catch(t){console.error("Error saving data:",t),x("Dyeing not saved successfully!",{variant:"error",autoHideDuration:5e3})}};console.log("formData",i);const[ae,ie]=o.useState(!1),[oe,G]=o.useState(!1),re=async t=>{u(t);try{const a=await Q.get(`http://100.42.177.77:83/api/ITP/GetITPDetailsByITPId?itpId=${t.itpId}`);R(a.data.result.map((d,m)=>({id:m+1,...d})))}catch(a){console.error("Error fetching ITP:",a)}G(!0)},E=()=>{ie(!1),u({})},W=()=>{G(!1),u({})},ne=[{field:"id",headerName:"Sr#"},{field:"issuanceNo",headerName:"Issuance No"},{field:"issuanceName",headerName:"Issuance Name"},{field:"noOfItems",headerName:"No. Of Items"},{field:"status",headerName:"Status"},{field:"issuanceDate",headerName:"Issuance Date",valueGetter:t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"View",headerName:"View Details",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:e.jsx(k,{color:"primary",onClick:()=>re(t.row),children:e.jsx(Ce,{})})})}],ce=[{field:"id",headerName:"Sr#"},{field:"barcode",headerName:"Barcode"},{field:"designNo",headerName:"Design"},{field:"productName",headerName:"Product Name"},{field:"quantity",headerName:"Quantity"},{field:"uom",headerName:"uom"},{field:"remarks",headerName:"remarks"}],le=[{field:"id",headerName:"Sr#"},{field:"fabric",headerName:"Fabric Name"},{field:"total",headerName:"Quantity from Planning"}],de=[{field:"id",headerName:"Sr#"},{field:"barcode",headerName:"Barcode"},{field:"productName",headerName:"Product Name"},{field:"itpQuantity",headerName:"Quantity"},{field:"uomName",headerName:"UOM"},{field:"remarks",headerName:"Remarks"}];return e.jsxs(Se,{sx:{width:"100%",typography:"body1"},children:[e.jsxs(De,{variant:"outlined",children:[e.jsx(be,{className:"css-4rfrnx-MuiCardHeader-root",title:"Stock Receiving",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(z,{variant:"contained",size:"small",onClick:te,children:"Fetch"})}),e.jsx(r,{item:!0,xs:12,md:3,children:e.jsx(c,{label:"Status",fullWidth:!0,size:"small",name:"status",onChange:n,value:i.status,required:!0,select:!0,children:Z.map(t=>e.jsx(C,{value:t.statusId,children:t.statusDesc},t.statusId))})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(h,{initialRows:v,iColumns:ne,setIsEdit:V,hideAction:!0}),e.jsxs(q,{open:ae,onClose:E,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(A,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(T,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"View Details"}),e.jsx(k,{onClick:E,sx:{color:"#ffffff"},children:e.jsx(X,{})})]}),e.jsxs(H,{children:[e.jsx(O,{id:"alert-dialog-slide-description"}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Issuance No",fullWidth:!0,size:"small",name:"issuanceNo",onChange:n,value:i.issuanceNo,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Issuance Name",fullWidth:!0,size:"small",name:"issuanceName",onChange:n,value:i.issuanceName,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{size:"small",label:"Issuance Date",name:"issuanceDate",value:i.issuanceDate,onChange:n,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(h,{initialRows:w,iColumns:ce,hideAction:!0})}),e.jsx(r,{item:!0,xs:12,md:3,children:e.jsx(c,{label:"Collection",fullWidth:!0,size:"small",name:"collectionId",onChange:n,value:i.collectionId,required:!0,select:!0,children:P.map(t=>e.jsx(C,{value:t.collectionId,children:t.collectionName},t.collectionId))})}),e.jsx(r,{item:!0,xs:9,textAlign:"right",sx:{mt:2},children:e.jsx(z,{variant:"contained",size:"small",onClick:se,children:"Save"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(h,{initialRows:L,iColumns:le,hideAction:!0})})]})," "]})]}),e.jsxs(q,{open:oe,onClose:W,fullWidth:!0,maxWidth:"xl",children:[e.jsxs(A,{sx:{backgroundColor:"#A11F23",color:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"24px",paddingY:"4px"},children:[e.jsx(T,{variant:"h4",component:"div",color:"#ffffff",gutterBottom:!0,fontSize:20,fontWeight:2,fontStyle:"normal",children:"Receiving View"}),e.jsx(k,{onClick:W,sx:{color:"#ffffff"},children:e.jsx(X,{})})]}),e.jsxs(H,{children:[e.jsx(O,{id:"alert-dialog-slide-description"}),e.jsxs(r,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(r,{item:!0,xs:12,md:3,children:e.jsx(c,{label:"Production",fullWidth:!0,size:"small",name:"productionId",onChange:n,value:i.productionId,required:!0,select:!0,children:_.map(t=>e.jsx(C,{value:t.productionId,children:t.collectionName},t.productionId))})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{size:"small",label:"Issuance Date",name:"issuanceDate",value:i.issuanceDate,onChange:n,fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0,sx:{color:"black"}}})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsx(c,{label:"Receiving Date",fullWidth:!0,size:"small",name:"issuanceName",onChange:n,value:i.issuanceName,required:!0,disabled:!0})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(h,{initialRows:K,iColumns:de,hideAction:!0})})]})]})]})]})]})," "]}),e.jsx(ke,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}})]})};export{Ae as default};
