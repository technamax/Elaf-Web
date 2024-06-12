import{u as C,c as M,r as l,b as R,j as e,C as W,d as k,B as I,G as o,T as f,M as z}from"./index-C9WX4c-1.js";import{a as i}from"./axios-BWHFMaIN.js";import{F as $}from"./EditAbleDataGrid-BiCA0Ju3.js";import{T as A,a as O,b as j,d as Q,c as _,e as b}from"./AddCircle-C9-pjoiy.js";import{T as r,B as q}from"./TextField-MycDRbzs.js";import{M as c}from"./Skeleton-DYWKFd7F.js";import"./DataGrid-BQJGe_WI.js";const ae=()=>{const{data:V,error:X,isLoading:J,refetch:y}=C(),{data:d}=C();M(),l.useState(!0);const{enqueueSnackbar:h}=R(),P=(d==null?void 0:d.result)||[],[a,m]=l.useState({collectionName:"",collectionId:"",plannedCollectionId:"",plannedDesignedId:"",designId:"",poPcs:"",batchNo:"",createdBy:0,createdOn:new Date().toISOString()}),[v,D]=l.useState([]),[x,B]=l.useState([]),[S,N]=l.useState([]),[G,p]=l.useState([]),u=l.useCallback(async()=>{try{const n=await i.get(`https://gecxc.com:4041/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${a.plannedDesignedId}`);console.log("DataGridResponse",n);const t=n.data.result.map((g,L)=>({...g,id:L+1}));p(t)}catch(n){console.error("Error fetching data:",n),p([])}},[a.plannedDesignedId]);l.useEffect(()=>{u()},[u]);const H=[{field:"collectionName",headerName:"Collection",editable:!0,flex:2},{field:"batchNo",headerName:"Batch#",flex:1,editable:!0},{field:"designNo",headerName:"Design Number",flex:1,editable:!0},{field:"Status",headerName:"Status",flex:1,editable:!0}],[w,F]=l.useState("1"),T=(n,t)=>{F(t)},s=async n=>{const{name:t,value:g}=n.target;m({...a,[t]:g})},E=async()=>{console.log(a);try{const n=await i.post("https://gecxc.com:4041/api/PrePlanning/SavePrePlanningHeader",a);console.log("Form data saved:",n.data),h("Planning Batch saved successfully!",{variant:"success",autoHideDuration:5e3}),m({collectionName:"",collectionId:"",designId:"",poPcs:"",batchNo:""}),y()}catch(n){console.error("Error saving data:",n),h("Planning Batch not saved successfully!",{variant:"error",autoHideDuration:5e3})}};return l.useEffect(()=>{(async()=>{if(a.collectionId)try{const t=await i.get(`https://gecxc.com:4041/API/DesignRegistration/GetDesignListByCollectionId?CollectionId=${a.collectionId}`);console.log(a.collectionId),console.log(t),D(t.data.result)}catch(t){console.error("Error fetching design options:",t)}})()},[a.collectionId]),l.useEffect(()=>{(async()=>{try{const t=await i.get("https://gecxc.com:4041/api/PrePlanning/GetCollectionListFromPlanningHeader");console.log("GetCollectionFromPlanningHeader",t),B(t.data.result)}catch(t){console.error("Error fetching design options:",t)}})()},[]),l.useEffect(()=>{(async()=>{if(a.plannedCollectionId)try{const t=await i.get(`https://gecxc.com:4041/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${a.plannedCollectionId}`);console.log("GetDesignFromPlanningHeaderByCollectionId",t),N(t.data.result)}catch(t){console.error("Error fetching design options:",t)}})()},[a.plannedCollectionId]),console.log("formData",a),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:10,borderRadius:7,width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto",padding:5},children:e.jsxs(W,{variant:"outlined",children:[e.jsx(k,{className:"css-4rfrnx-MuiCardHeader-root",title:"Create Batch Planning",titleTypographyProps:{style:{color:"white"}}}),e.jsx(I,{sx:{width:"100%",typography:"body1"},children:e.jsxs(A,{value:w,children:[e.jsx(I,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(O,{onChange:T,"aria-label":"lab API tabs example",children:[e.jsx(j,{icon:e.jsx(Q,{}),label:"Add Collection",value:"1",sx:n=>({"& .MuiTouchRipple-child":{backgroundColor:`${n.palette.primary.main} !important`}})}),e.jsx(j,{icon:e.jsx(_,{}),label:"Search Collection",value:"2",sx:n=>({"& .MuiTouchRipple-child":{backgroundColor:`${n.palette.primary.main} !important`}})})]})}),e.jsx(b,{value:"1",children:e.jsxs(o,{container:!0,spacing:2,width:"inherit",sx:{paddingX:2},children:[e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:a.collectionId,onChange:s,size:"small",children:P.map(n=>e.jsx(c,{value:n.collectionId,children:n.collectionName},n.collectionId))})}),e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Select Design",name:"designId",value:a.designId,onChange:s,size:"small",children:v.map(n=>e.jsx(c,{value:n.designId,children:n.designNo},n.designId))})}),e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(r,{label:"Po PCs",fullWidth:!0,size:"small",name:"poPcs",value:a.poPcs,onChange:s})}),e.jsx(o,{item:!0,xs:12,md:12,textAlign:"right",sx:{marginBottom:2},children:e.jsx(q,{variant:"contained",size:"small",onClick:E,children:"Save"})})]})}),e.jsx(b,{value:"2",children:e.jsx(o,{container:!0,spacing:2,width:"inherit",children:e.jsx(o,{item:!0,xs:9,md:9,children:e.jsx(f,{variant:"h3",gutterBottom:!0,children:"Search Collection"})})})})]})})]})}),e.jsx(z,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23"},children:e.jsxs(o,{container:!0,spacing:2,width:"inherit",children:[e.jsx(o,{item:!0,xs:12,md:12,children:e.jsx(f,{variant:"h4",gutterBottom:!0,children:"Search"})}),e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Select Collection",name:"plannedCollectionId",value:a.plannedCollectionId,onChange:s,size:"small",children:x.length>0?x.map(n=>e.jsx(c,{id:"ddlCollection",value:n.collectionId,children:n.collectionName},n.planningHeaderId)):e.jsx(c,{disabled:!0,children:"No Collections Available"})})}),e.jsx(o,{item:!0,xs:12,md:4,children:e.jsx(r,{fullWidth:!0,select:!0,label:"Design",name:"plannedDesignedId",value:a.plannedDesignedId,onChange:s,size:"small",children:S.map(n=>e.jsx(c,{value:n.designId,children:n.designNo},n.planningHeaderId))})}),e.jsx(o,{item:!0,xs:12,paddingTop:1,children:e.jsx($,{initialRows:G,ncolumns:H,formData:a,fetchData:u})})]})})]})};export{ae as default};