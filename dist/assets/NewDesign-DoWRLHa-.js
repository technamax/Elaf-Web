import{a as H,e as E,c as $,j as e,M as _,B as b,C,d as N,G as l,D as P,T as Q}from"./index-CsWv3HX5.js";import{r as i}from"./vendor-BXCbSo2_.js";import{B as S,a as w}from"./axios-uGUsbY1x.js";import{T as V,a as X,b as O,d as Y,c as q,e as B,F as k}from"./EditAbleDataGrid-D0nSJvCR.js";import{d as J}from"./VisibilityOutlined-DOjPdcjl.js";import{T as o}from"./TextField-D_1a3A_1.js";import{M as T}from"./Skeleton-O8UzV6mH.js";import"./DataGrid-D32CN7U9.js";import"./ExcelExport-D0hCkIKa.js";import"./dayjs.min-DJ4XDS0M.js";const re=()=>{const{data:d}=H(),[x,U]=i.useState(""),{data:c,refetch:u}=E(x,{skip:!x}),{enqueueSnackbar:m}=$(),[h,f]=i.useState([]),[j,R]=i.useState([]),[z,A]=i.useState("1");i.useState(!1);const L=(t,s)=>{A(s)};i.useEffect(()=>{c&&(f(c.result),u())},[c]),i.useEffect(()=>{(async()=>{try{const r=(await w.get(" https://gecxc.com:4041/api/Common/GetLookUpByDomain?lookupDomain=COLOURS")).data.result;R(r)}catch(s){console.error("Error fetching pre-planning lookup data:",s)}})()},[]);const g=(d==null?void 0:d.result)||[],[a,p]=i.useState({collectionId:"",designNo:"",designerName:"",poPcs:"",dateOfPlanning:"",colorId:"",appId:1,createdBy:0,createdOn:new Date().toISOString(),lastUpdatedBy:0,lastUpdatedOn:new Date().toISOString()}),n=t=>{const{name:s,value:r}=t.target;if(s==="collectionId"){const y=g.find(M=>M.collectionId===parseInt(r));U(r),p({...a,collectionId:r,poPcs:y?y.poPcs:"",designNo:"",designerName:"",dateOfPlanning:"",colorId:""})}else p({...a,[s]:r})},D=h.map((t,s)=>({id:s+1,designId:t.designId,collectionId:t.collectionId,designNo:t.designNo,designerName:t.designerName,poPcs:t.poPcs,dateOfPlanning:t.dateOfPlanning,colorId:t.colorId,appId:t.appId,createdBy:t.createdBy,createdOn:t.createdOn,lastUpdatedBy:t.lastUpdatedBy,lastUpdatedOn:t.lastUpdatedOn}));console.log("initialRows",D);const I=[{field:"collectionId",headerName:"Collection ID",editable:!0,flex:2,type:"singleSelect",valueOptions:g.map(t=>({value:t.collectionId,label:t.collectionName}))},{field:"designNo",headerName:"Design No",flex:1,editable:!0},{field:"designerName",headerName:"Designer Name",flex:1,editable:!0},{field:"poPcs",headerName:"Po PCs",flex:1,editable:!0},{field:"dateOfPlanning",headerName:"Date of Planning",type:"date",flex:1,editable:!0,valueGetter:t=>t?new Date(t):null,valueFormatter:t=>{const s=t;return s?s.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"colorId",headerName:"Color",flex:1,editable:!0,type:"singleSelect",valueOptions:j.map(t=>({value:t.lookUpId,label:t.lookUpName}))}],W=async()=>{if(console.log(a),h.some(s=>s.designNo===a.designNo)){m("Design number already exists!",{variant:"error",autoHideDuration:5e3});return}try{const s=await w.post("https://gecxc.com:4041/API/DesignRegistration/SaveDesign",a);m("Design saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Form data saved:",s.data),f([...h,s.data]),p({...a,designNo:"",designerName:"",poPcs:"",dateOfPlanning:"",colorId:""}),u()}catch(s){console.error("Error saving data:",s),m("Design not saved successfully!",{variant:"error",autoHideDuration:5e3})}},F="https://gecxc.com:4041/api/DesignRegistration/DeleteDesignById?designId=",v="https://gecxc.com:4041/API/DesignRegistration/SaveDesign",G=()=>{};return e.jsx(_,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(b,{sx:{width:"100%",typography:"body1"},children:e.jsxs(V,{value:z,children:[e.jsx(b,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(X,{onChange:L,children:[e.jsx(O,{icon:e.jsx(Y,{}),label:"Add Design",value:"1",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})}),e.jsx(O,{icon:e.jsx(q,{}),label:"Search Design",value:"2",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})})]})}),e.jsxs(B,{value:"1",children:[e.jsxs(C,{variant:"outlined",children:[e.jsx(N,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Design ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(l,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:a.collectionId,onChange:n,size:"small",children:g.map(t=>e.jsx(T,{value:t.collectionId,children:t.collectionName},t.collectionId))})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Design No.",name:"designNo",fullWidth:!0,size:"small",value:a.designNo,onChange:n,disabled:!a.collectionId})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Designer Name",fullWidth:!0,size:"small",name:"designerName",value:a.designerName,onChange:n,disabled:!a.collectionId})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{size:"small",type:"date",label:"Planning Date",name:"dateOfPlanning",value:a.dateOfPlanning,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Po PCs",fullWidth:!0,size:"small",name:"poPcs",type:"number",value:a.poPcs,disabled:!0,onChange:n})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsx(o,{fullWidth:!0,select:!0,label:"Color",size:"small",name:"colorId",value:a.colorId,onChange:n,disabled:!a.collectionId,children:j.map(t=>e.jsx(T,{value:t.lookUpId,children:t.lookUpName},t.lookUpId))})}),e.jsxs(l,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:[e.jsx(S,{variant:"contained",size:"small",onClick:W,children:"Save"})," "]})]})]}),e.jsx(P,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(C,{variant:"outlined",children:[e.jsx(N,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(J,{}),title:"View Designs ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(l,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(l,{item:!0,xs:12,md:12,children:e.jsx(k,{initialRows:D,ncolumns:I,formData:a,editAPi:v,deleteApi:F,deleteBy:"designId",refetch:u})})})]})]}),e.jsxs(B,{value:"2",children:[e.jsxs(l,{container:!0,spacing:2,width:"inherit",children:[e.jsx(l,{item:!0,xs:9,md:9,children:e.jsx(Q,{variant:"h3",gutterBottom:!0,children:"Search Design"})}),e.jsx(l,{item:!0,xs:3,textAlign:"right",children:e.jsx(S,{variant:"contained",size:"small",onClick:G,children:"Search"})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(o,{size:"small",type:"date",label:"Date From",name:"planningDate",value:a.planningDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(o,{size:"small",type:"date",label:"Date to",name:"launchDate",value:a.launchDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(l,{item:!0,sm:12,children:e.jsx(P,{color:"#cc8587",sx:{height:2,width:"100%"}})})]}),e.jsx(l,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(k,{initialRows:[],ncolumns:I,formData:a,editAPi:v,disableAddRecord:!0})})})]})]})})})};export{re as default};
