import{u as L,a as F,r as i,b as G,j as e,M as U,B as b,F as E,G as t,T as C,D}from"./index-5-KS9U5a.js";import{a as M}from"./axios-C61keMiO.js";import{T as H,a as Y,b as y,d as $,c as Q,e as N}from"./AddCircle-BB2HmhJ-.js";import{F as S}from"./EditAbleDataGrid-Bw1H5Q9D.js";import{B as I,T as s}from"./TextField-WQpxwAfx.js";import{M as d}from"./Skeleton-B9-G0ACm.js";import"./DataGrid-Bi9adOVz.js";const se=()=>{const{data:c,error:_,isLoading:q,refetch:u}=L(),{data:r}=F(),[h,P]=i.useState([]),[x,O]=i.useState([]),[a,p]=i.useState({collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isReapetCollection:"No",noOfDesigns:"",noOfColors:"",poPcs:"",appId:1,createdBy:0,createdOn:new Date().toISOString(),lastUpdatedBy:0,lastUpdatedOn:new Date().toISOString()}),[V,w]=i.useState("");console.log("formData",a),console.log("lookupData",r);const[T,k]=i.useState("1"),{enqueueSnackbar:g}=G(),z=(l,o)=>{k(o)},[B,R]=i.useState([]);i.useEffect(()=>{if(r){const l=r.result[0];P(l.brandList),O(l.seasonList)}u()},[r]),console.log("brands",h),console.log("seasons",x),i.useEffect(()=>{w(a.noOfColors*a.poPcs)},[a.noOfColors,a.poPcs]),i.useEffect(()=>{if(c){const l=c.result.map((o,m)=>({...o,id:m+1,planningDate:new Date(o.planningDate),launchDate:new Date(o.launchDate)}));R(l)}u()},[c]);const f=B,v=[{field:"collectionName",headerName:"Collection",editable:!0,flex:2},{field:"volume",headerName:"Volume",flex:1,editable:!0,type:"singleSelect",valueOptions:["Volume 1","Volume 2","Volume 3","Volume 4","Volume 5"]},{field:"planningDate",headerName:"Planning Date",type:"date",flex:1,editable:!0,valueGetter:l=>l?new Date(l):null,valueFormatter:l=>{const o=l;return o?o.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"launchDate",headerName:"Launch Date",type:"date",flex:1,editable:!0,valueGetter:l=>l?new Date(l):null,valueFormatter:l=>{const o=l;return o?o.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"isReapetCollection",headerName:"Repeat",flex:1,editable:!0,type:"singleSelect",valueOptions:["No","Yes"]},{field:"noOfColors",headerName:"No. Of Colors",editable:!0,flex:1},{field:"noOfDesigns",headerName:"No Of Designs",editable:!0,flex:1}],W=[{value:"Volume 1",label:"Volume 1"},{value:"Volume 2",label:"Volume 2"},{value:"Volume 3",label:"Volume 3"},{value:"Volume 4",label:"Volume 4"},{value:"Volume 5",label:"Volume 5"}],A=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],n=l=>{const{name:o,value:m}=l.target;p({...a,[o]:m})},j=async()=>{console.log(a);try{const l=await M.post("https://gecxc.com:4041/API/CollectionRegistration/SaveCollection",a);g("Collection saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Form data saved:",l.data),p({collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isReapetCollection:"",noOfDesigns:"",noOfColors:"",poPcs:""}),u()}catch(l){console.error("Error saving data:",l),g("Collection not saved !",{variant:"error",autoHideDuration:5e3})}};return e.jsx(U,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(b,{sx:{width:"100%",typography:"body1"},children:e.jsxs(H,{value:T,children:[e.jsx(b,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(Y,{onChange:z,"aria-label":"lab API tabs example",children:[e.jsx(y,{icon:e.jsx($,{}),label:"Add Collection",value:"1",sx:l=>({"& .MuiTouchRipple-child":{backgroundColor:`${l.palette.primary.main} !important`}})}),e.jsx(y,{icon:e.jsx(Q,{}),label:"Search Collection",value:"2",sx:l=>({"& .MuiTouchRipple-child":{backgroundColor:`${l.palette.primary.main} !important`}})})]})}),e.jsxs(N,{value:"1",children:[e.jsx(E,{children:e.jsxs(t,{container:!0,spacing:2,width:"inherit",children:[e.jsx(t,{item:!0,xs:9,md:9,children:e.jsx(C,{variant:"h3",gutterBottom:!0,children:"Create New Collection"})}),e.jsx(t,{item:!0,xs:3,textAlign:"right",children:e.jsx(I,{variant:"contained",size:"small",onClick:j,children:"Save"})}),e.jsx(t,{item:!0,xs:12,md:2,children:e.jsx(s,{fullWidth:!0,select:!0,label:"Season Name",name:"seasonId",value:a.seasonId,onChange:n,size:"small",children:x.map(l=>e.jsx(d,{value:l.lookUpId,children:l.lookUpName},l.lookUpId))})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{fullWidth:!0,select:!0,label:"Brand Name",name:"brandId",value:a.brandId,onChange:n,size:"small",children:h.map(l=>e.jsx(d,{value:l.lookUpId,children:l.lookUpName},l.lookUpId))})}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(s,{label:"Collection Name",fullWidth:!0,size:"small",name:"collectionName",onChange:n,value:a.collectionName})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{fullWidth:!0,select:!0,label:"Volume",name:"volume",value:a.volume,onChange:n,size:"small",children:W.map(l=>e.jsx(d,{value:l.value,children:l.label},l.value))})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{size:"small",type:"date",label:"Planning Date",name:"planningDate",value:a.planningDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{size:"small",type:"date",label:"Launch Date",name:"launchDate",value:a.launchDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{fullWidth:!0,select:!0,label:"Repeat Collection?",name:"isReapetCollection",defaultValue:"No",value:a.isReapetCollection,onChange:n,size:"small",children:A.map(l=>e.jsx(d,{value:l.value,children:l.label},l.value))})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{label:"No. of Colors/Articles",fullWidth:!0,size:"small",name:"noOfColors",onChange:n,value:a.noOfColors})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{label:"No. of Designs",fullWidth:!0,size:"small",name:"noOfDesigns",onChange:n,value:a.noOfDesigns})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{label:"Po. Pieces",fullWidth:!0,size:"small",name:"poPcs",onChange:n,value:a.poPcs})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsx(s,{label:"Total Pieces",fullWidth:!0,size:"small",name:"totalPcs",value:V,disabled:!0})}),e.jsx(t,{item:!0,sm:12,children:e.jsx(D,{color:"#cc8587",sx:{height:2,width:"100%"}})})]})}),e.jsx(t,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(S,{initialRows:f,ncolumns:v,formData:a,deleteApi:"https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=",deleteBy:"collectionId",editAPi:"https://gecxc.com:4041/API/CollectionRegistration/SaveCollection"})})})]}),e.jsxs(N,{value:"2",children:[e.jsxs(t,{container:!0,spacing:2,width:"inherit",children:[e.jsx(t,{item:!0,xs:9,md:9,children:e.jsx(C,{variant:"h3",gutterBottom:!0,children:"Search Collection"})}),e.jsx(t,{item:!0,xs:3,textAlign:"right",children:e.jsx(I,{variant:"contained",size:"small",onClick:j,children:"Search"})}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(s,{size:"small",type:"date",label:"Date From",name:"planningDate",value:a.planningDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(s,{size:"small",type:"date",label:"Date to",name:"launchDate",value:a.launchDate,onChange:n,fullWidth:!0,focused:!0})}),e.jsx(t,{item:!0,sm:12,children:e.jsx(D,{color:"#cc8587",sx:{height:2,width:"100%"}})})]}),e.jsx(t,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(S,{initialRows:f,ncolumns:v,formData:a,disableAddRecord:!0})})})]})]})})})};export{se as default};
