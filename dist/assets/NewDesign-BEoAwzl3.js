import{u as A,r as i,c as E,b as M,j as e,M as H,B as b,G as a,T as y,D as N}from"./index-C9WX4c-1.js";import{a as P}from"./axios-BWHFMaIN.js";import{T as $,a as Q,b as S,d as _,c as q,e as O}from"./AddCircle-C9-pjoiy.js";import{F as w}from"./EditAbleDataGrid-BiCA0Ju3.js";import{B,T as o}from"./TextField-MycDRbzs.js";import{M as k}from"./Skeleton-DYWKFd7F.js";import"./DataGrid-BQJGe_WI.js";const te=()=>{const{data:d}=A(),[h,T]=i.useState(""),{data:c,refetch:x}=E(h,{skip:!h}),{enqueueSnackbar:p}=M(),[g,f]=i.useState([]),[j,U]=i.useState([]),[z,L]=i.useState("1"),R=(t,n)=>{L(n)};i.useEffect(()=>{c&&(f(c.result),x())},[c]),i.useEffect(()=>{(async()=>{try{const r=(await P.get(" https://gecxc.com:4041/api/Common/GetLookUpByDomain?lookupDomain=COLOURS")).data.result;U(r)}catch(n){console.error("Error fetching pre-planning lookup data:",n)}})()},[]);const u=(d==null?void 0:d.result)||[],[l,m]=i.useState({collectionId:"",designNo:"",designerName:"",poPcs:"",dateOfPlanning:"",colorId:"",appId:1,createdBy:0,createdOn:new Date().toISOString(),lastUpdatedBy:0,lastUpdatedOn:new Date().toISOString()}),s=t=>{const{name:n,value:r}=t.target;if(n==="collectionId"){const C=u.find(G=>G.collectionId===parseInt(r));T(r),m({...l,collectionId:r,poPcs:C?C.poPcs:""})}else m({...l,[n]:r})},v=g.map((t,n)=>({id:n+1,designId:t.designId,collectionId:t.collectionId,designNo:t.designNo,designerName:t.designerName,poPcs:t.poPcs,dateOfPlanning:t.dateOfPlanning,colorId:t.colorId,appId:t.appId,createdBy:t.createdBy,createdOn:t.createdOn,lastUpdatedBy:t.lastUpdatedBy,lastUpdatedOn:t.lastUpdatedOn}));console.log("initialRows",v);const I=[{field:"collectionId",headerName:"Collection ID",editable:!0,flex:2,type:"singleSelect",valueOptions:u.map(t=>({value:t.collectionId,label:t.collectionName}))},{field:"designNo",headerName:"Design No",flex:1,editable:!0},{field:"designerName",headerName:"Designer Name",flex:1,editable:!0},{field:"poPcs",headerName:"Po PCs",flex:1,editable:!0},{field:"dateOfPlanning",headerName:"Date of Planning",type:"date",flex:1,editable:!0,valueGetter:t=>t?new Date(t):null,valueFormatter:t=>{const n=t;return n?n.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"colorId",headerName:"Color",flex:1,editable:!0,type:"singleSelect",valueOptions:j.map(t=>({value:t.lookUpId,label:t.lookUpName}))}],W=async()=>{console.log(l);try{const t=await P.post("https://gecxc.com:4041/API/DesignRegistration/SaveDesign",l);p("Design saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Form data saved:",t.data),f([...g,t.data]),m({collectionId:"",designNo:"",designerName:"",poPcs:"",dateOfPlanning:"",colorId:""}),x()}catch(t){console.error("Error saving data:",t),p("Design not saved successfully!",{variant:"error",autoHideDuration:5e3})}},D="https://gecxc.com:4041/API/DesignRegistration/SaveDesign",F=()=>{};return e.jsx(H,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(b,{sx:{width:"100%",typography:"body1"},children:e.jsxs($,{value:z,children:[e.jsx(b,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(Q,{onChange:R,children:[e.jsx(S,{icon:e.jsx(_,{}),label:"Add Design",value:"1",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})}),e.jsx(S,{icon:e.jsx(q,{}),label:"Search Design",value:"2",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})})]})}),e.jsxs(O,{value:"1",children:[e.jsxs(a,{container:!0,spacing:2,width:"Inherit",children:[e.jsx(a,{item:!0,xs:9,md:9,children:e.jsx(y,{variant:"h3",gutterBottom:!0,children:"Create New Design"})}),e.jsx(a,{item:!0,xs:3,md:3,textAlign:"right",children:e.jsx(B,{variant:"contained",size:"small",onClick:W,children:"Save"})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:l.collectionId,onChange:s,size:"small",children:u.map(t=>e.jsx(k,{value:t.collectionId,children:t.collectionName},t.collectionId))})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Design No.",name:"designNo",fullWidth:!0,size:"small",value:l.designNo,onChange:s})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Designer Name",fullWidth:!0,size:"small",name:"designerName",value:l.designerName,onChange:s})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{size:"small",type:"date",label:"Planning Date",name:"dateOfPlanning",value:l.dateOfPlanning,onChange:s,fullWidth:!0,focused:!0})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{label:"Po PCs",fullWidth:!0,size:"small",name:"poPcs",type:"number",value:l.poPcs,onChange:s})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(o,{fullWidth:!0,select:!0,label:"Color",size:"small",name:"colorId",value:l.colorId,onChange:s,children:j.map(t=>e.jsx(k,{value:t.lookUpId,children:t.lookUpName},t.lookUpId))})})]}),e.jsx(N,{}),e.jsx(a,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(a,{item:!0,xs:12,md:12,children:e.jsx(w,{initialRows:v,ncolumns:I,formData:l,editAPi:D})})})]}),e.jsxs(O,{value:"2",children:[e.jsxs(a,{container:!0,spacing:2,width:"inherit",children:[e.jsx(a,{item:!0,xs:9,md:9,children:e.jsx(y,{variant:"h3",gutterBottom:!0,children:"Search Design"})}),e.jsx(a,{item:!0,xs:3,textAlign:"right",children:e.jsx(B,{variant:"contained",size:"small",onClick:F,children:"Search"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(o,{size:"small",type:"date",label:"Date From",name:"planningDate",value:l.planningDate,onChange:s,fullWidth:!0,focused:!0})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(o,{size:"small",type:"date",label:"Date to",name:"launchDate",value:l.launchDate,onChange:s,fullWidth:!0,focused:!0})}),e.jsx(a,{item:!0,sm:12,children:e.jsx(N,{color:"#cc8587",sx:{height:2,width:"100%"}})})]}),e.jsx(a,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(a,{item:!0,xs:12,children:e.jsx(w,{initialRows:[],ncolumns:I,formData:l,editAPi:D})})})]})]})})})};export{te as default};