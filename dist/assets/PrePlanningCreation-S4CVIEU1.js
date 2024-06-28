import{a as O,e as Q,u as X,c as Y,j as e,M as _,B as v,C as D,d as S,G as s,D as w}from"./index-DnIh2Wd7.js";import{r as l}from"./vendor-BXCbSo2_.js";import{a as c,B as q}from"./axios-DRu-V1sv.js";import{d as U,a as V,F as B}from"./EditAbleDataGrid-Ci0NbZgN.js";import{T as J,a as K,b as N,c as H}from"./TabPanel-CEFDlmRA.js";import{T as d}from"./TextField-NjIbNAS4.js";import{M as u}from"./Skeleton-CxEcuNdD.js";import"./ExcelExport-DdhRZJhP.js";import"./Close-ec_L8JKK.js";import"./dayjs.min-DO4_1a-m.js";const de=()=>{const{data:m,refetch:x}=O(),{data:p,refetch:f}=Q(),{user:G}=X(),{enqueueSnackbar:I}=Y(),[Z,T]=l.useState([]);l.useEffect(()=>{p&&(T(p.result),f())},[p]);const C=(m==null?void 0:m.result)||[],[n,g]=l.useState({collectionName:"",collectionId:"",plannedCollectionId:"",plannedDesignedId:"",designId:"",poPcs:"",batchNo:"",createdBy:G.empId,createdOn:new Date().toISOString()}),[E,F]=l.useState([]),[j,L]=l.useState([]),[M,W]=l.useState([]),[P,b]=l.useState([]),[k,z]=l.useState("1"),o=l.useCallback(async()=>{try{if(n.plannedDesignedId){const a=(await c.get(`https://gecxc.com:4041/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${n.plannedDesignedId}`)).data.result.map((i,h)=>({...i,id:h+1}));b(a),f()}}catch(t){console.error("Error fetching data:",t),b([])}},[n.plannedDesignedId]);l.useEffect(()=>{o()},[o]);const y=[{field:"collectionName",headerName:"Collection",editable:!0,flex:2},{field:"batchNo",headerName:"Batch#",flex:1,editable:!0},{field:"designNo",headerName:"Design Number",flex:1,editable:!0},{field:"Status",headerName:"Status",flex:1,editable:!0}],R=(t,a)=>{z(a)},r=async t=>{const{name:a,value:i}=t.target;if(a==="collectionId"){const h=C.find(A=>A.collectionId===parseInt(i));g({...n,collectionId:i,poPcs:h?h.poPcs:""})}else g(a==="designId"?{...n,designId:i,plannedDesignedId:i}:{...n,[a]:i})},$=async()=>{try{const t=await c.post("https://gecxc.com:4041/api/PrePlanning/SavePrePlanningHeader",n);I("Planning Batch saved successfully!",{variant:"success",autoHideDuration:5e3}),g({...n,designId:"",poPcs:"",batchNo:""}),await x(),await o()}catch(t){console.error("Error saving data:",t),I("Planning Batch not saved successfully!",{variant:"error",autoHideDuration:5e3})}};return l.useEffect(()=>{(async()=>{if(n.collectionId)try{const a=await c.get(`https://gecxc.com:4041/API/DesignRegistration/GetDesignListByCollectionId?CollectionId=${n.collectionId}`);F(a.data.result)}catch(a){console.error("Error fetching design options:",a)}})()},[n.collectionId]),l.useEffect(()=>{(async()=>{try{const a=await c.get("https://gecxc.com:4041/api/PrePlanning/GetCollectionListFromPlanningHeader");L(a.data.result)}catch(a){console.error("Error fetching planned collections:",a)}})()},[]),l.useEffect(()=>{(async()=>{if(n.plannedCollectionId)try{const a=await c.get(`https://gecxc.com:4041/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${n.plannedCollectionId}`);W(a.data.result)}catch(a){console.error("Error fetching planned designs:",a)}})()},[n.plannedCollectionId]),e.jsx(_,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(v,{sx:{width:"100%",typography:"body1"},children:e.jsxs(J,{value:k,children:[e.jsx(v,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(K,{onChange:R,"aria-label":"lab API tabs example",children:[e.jsx(N,{icon:e.jsx(U,{}),label:"Add Collection",value:"1",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})}),e.jsx(N,{icon:e.jsx(V,{}),label:"Search Collection",value:"2",sx:t=>({"& .MuiTouchRipple-child":{backgroundColor:`${t.palette.primary.main} !important`}})})]})}),e.jsx(H,{value:"1",children:e.jsxs(D,{variant:"outlined",children:[e.jsx(S,{className:"css-4rfrnx-MuiCardHeader-root",title:"Create Batch Planning",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(s,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Select Collection",name:"collectionId",value:n.collectionId,onChange:r,size:"small",children:C.map(t=>e.jsx(u,{value:t.collectionId,children:t.collectionName},t.collectionId))})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Select Design",name:"designId",value:n.designId,onChange:r,size:"small",children:E.map(t=>e.jsx(u,{value:t.designId,children:t.designNo},t.designId))})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(d,{label:"Po PCs",fullWidth:!0,size:"small",name:"poPcs",value:n.poPcs,onChange:r})}),e.jsx(s,{item:!0,xs:12,md:12,textAlign:"right",sx:{marginBottom:2},children:e.jsx(q,{variant:"contained",size:"small",onClick:$,children:"Save"})}),e.jsx(w,{color:"#cc8587",sx:{height:2,width:"100%",mt:2}}),e.jsx(s,{item:!0,xs:12,paddingTop:1,children:e.jsx(B,{initialRows:P,ncolumns:y,formData:n,fetchData:o,refetch:x})})]})]})}),e.jsx(H,{value:"2",children:e.jsxs(D,{variant:"outlined",children:[e.jsx(S,{className:"css-4rfrnx-MuiCardHeader-root",title:"Searc Batch Planning",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(s,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Select Collection",name:"plannedCollectionId",value:n.plannedCollectionId,onChange:r,size:"small",children:j.length>0?j.map(t=>e.jsx(u,{id:"ddlCollection",value:t.collectionId,children:t.collectionName},t.planningHeaderId)):e.jsx(u,{disabled:!0,children:"No Collections Available"})})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Design",name:"plannedDesignedId",value:n.plannedDesignedId,onChange:r,size:"small",children:M.map(t=>e.jsx(u,{value:t.designId,children:t.designNo},t.planningHeaderId))})}),e.jsx(w,{color:"#cc8587",sx:{height:2,width:"100%",mt:2}}),e.jsx(s,{item:!0,xs:12,paddingTop:1,children:e.jsx(B,{initialRows:P,ncolumns:y,formData:n,fetchData:o})})]})]})})]})})})};export{de as default};
