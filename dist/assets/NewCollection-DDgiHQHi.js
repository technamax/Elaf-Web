import{u as X,a as J,b as K,c as Z,j as e,M as ee,B as j,F as ae,C as y,d as I,G as l,D as P,T as te}from"./index-AmyHuagJ.js";import{r}from"./vendor-BXCbSo2_.js";import{a as N}from"./axios-DGlyNUmx.js";import{T as le,a as oe,b as S,d as se,c as ne,e as O,F as T}from"./EditAbleDataGrid-CvM3-mqx.js";import{d as re}from"./VisibilityOutlined-jThwWf5t.js";import{T as n,B as w}from"./TextField-TQSsXG4K.js";import{M as p}from"./Skeleton-C1XBKFJE.js";import"./DataGrid-CJTwKQXF.js";import"./ExcelExport-Dm_zY6Hg.js";import"./dayjs.min-BDDVprXY.js";const je=()=>{const{user:u}=X(),{data:x,error:ie,isLoading:de,refetch:g}=J(),{data:m}=K(),[f,k]=r.useState([]),[v,R]=r.useState([]),[c,V]=r.useState({searchPlanningDateFrom:"",searchPlanningDateTo:""}),[t,D]=r.useState({collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isRepeatCollection:"No",noOfDesigns:"",noOfColors:"",poPcs:"",appId:1,createdBy:u.empId,createdOn:new Date().toISOString(),lastUpdatedBy:u.empId,lastUpdatedOn:new Date().toISOString()}),[B,F]=r.useState("");console.log("formData",t),console.log("lookupData",m);const[U,z]=r.useState("1"),{enqueueSnackbar:h}=Z(),A=(a,o)=>{z(o)},[s,W]=r.useState({}),[L,G]=r.useState([]);r.useEffect(()=>{if(m){const a=m.result[0];k(a.brandList),R(a.seasonList)}g()},[m]),console.log("brands",f),console.log("seasons",v),r.useEffect(()=>{F(t.noOfColors*t.poPcs)},[t.noOfColors,t.poPcs]),r.useEffect(()=>{if(x){const a=x.result.map((o,d)=>({...o,id:d+1,planningDate:new Date(o.planningDate),launchDate:new Date(o.launchDate)}));G(a)}g()},[x]);const q=L,b=[{field:"collectionName",headerName:"Collection",editable:!0,flex:2},{field:"brandId",headerName:"Brand",editable:!0,flex:1,type:"singleSelect",valueOptions:f.map(a=>({value:a.lookUpId,label:a.lookUpName}))},{field:"seasonId",headerName:"Season",editable:!0,flex:1,type:"singleSelect",valueOptions:v.map(a=>({value:a.lookUpId,label:a.lookUpName}))},{field:"volume",headerName:"Volume",flex:1,editable:!0,type:"singleSelect",valueOptions:["Volume 1","Volume 2","Volume 3","Volume 4","Volume 5"]},{field:"planningDate",headerName:"Planning Date",type:"date",flex:1,editable:!0,valueGetter:a=>a?new Date(a):null,valueFormatter:a=>{const o=a;return o?o.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"launchDate",headerName:"Launch Date",type:"date",flex:1,editable:!0,valueGetter:a=>a?new Date(a):null,valueFormatter:a=>{const o=a;return o?o.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}):""}},{field:"isRepeatCollection",headerName:"Repeat",flex:1,editable:!0,type:"singleSelect",valueOptions:["No","Yes"]},{field:"noOfColors",headerName:"No. Of Colors",editable:!0,flex:1},{field:"noOfDesigns",headerName:"No Of Designs",editable:!0,flex:1},{field:"poPcs",headerName:"Po Pcs",editable:!0,flex:1}],E=[{value:"Volume 1",label:"Volume 1"},{value:"Volume 2",label:"Volume 2"},{value:"Volume 3",label:"Volume 3"},{value:"Volume 4",label:"Volume 4"},{value:"Volume 5",label:"Volume 5"}],H=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],i=a=>{const{name:o,value:d}=a.target;D({...t,[o]:d})},C=a=>{const{name:o,value:d}=a.target;V({...c,[o]:d})},M=()=>{const a={};return t.collectionName.trim()||(a.collectionName="collectionName is required"),t.seasonId||(a.seasonId="seasonId  is required"),t.brandId||(a.brandId="brandId  is required"),t.planningDate||(a.planningDate="planningDate  is required"),t.launchDate||(a.launchDate="launchDate  is required"),t.noOfDesigns||(a.noOfDesigns="noOfDesigns  is required"),t.noOfColors||(a.noOfColors="noOfColors  is required"),t.poPcs||(a.poPcs="poPcs  is required"),a},$=async()=>{console.log(t);const a=M();if(Object.keys(a).length>0){W(a);return}try{const o=await N.post("https://gecxc.com:4041/API/CollectionRegistration/SaveCollection",t);h("Collection saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Form data saved:",o.data),D({collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isRepeatCollection:"",noOfDesigns:"",noOfColors:"",poPcs:"",createdOn:new Date().toISOString(),createdBy:u.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:u.empId}),g()}catch(o){console.error("Error saving data:",o),h("Collection not saved !",{variant:"error",autoHideDuration:5e3})}},[Y,_]=r.useState([]),Q=async()=>{try{const a=await N.get(`https://gecxc.com:4041/API/CollectionRegistration/GetCollectionListByPlanningDate?startDate=${c.searchPlanningDateFrom}&endDate=${c.searchPlanningDateTo}&appId=1`);h("Collection saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Response Data:",a.data),_(a.data.result.map((o,d)=>({id:d,...o})))}catch(a){console.error("Error saving data:",a),h("Collection not saved !",{variant:"error",autoHideDuration:5e3})}};return console.log("searchData",c),e.jsx(ee,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(j,{sx:{width:"100%",typography:"body1"},children:e.jsxs(le,{value:U,children:[e.jsx(j,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(oe,{onChange:A,"aria-label":"lab API tabs example",children:[e.jsx(S,{icon:e.jsx(se,{}),label:"Add Collection",value:"1",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(S,{icon:e.jsx(ne,{}),label:"Search Collection",value:"2",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})})]})}),e.jsxs(O,{value:"1",children:[e.jsx(ae,{children:e.jsxs(y,{variant:"outlined",children:[e.jsx(I,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Collection ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(l,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{fullWidth:!0,select:!0,label:"* Season Name",name:"seasonId",value:t.seasonId,onChange:i,size:"small",error:!!s.seasonId,helperText:s.seasonId,children:v.map(a=>e.jsx(p,{value:a.lookUpId,children:a.lookUpName},a.lookUpId))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{fullWidth:!0,select:!0,label:"Brand Name",name:"brandId",value:t.brandId,onChange:i,size:"small",error:!!s.brandId,helperText:s.brandId,children:f.map(a=>e.jsx(p,{value:a.lookUpId,children:a.lookUpName},a.lookUpId))})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(n,{label:"* Collection Name",fullWidth:!0,size:"small",name:"collectionName",onChange:i,value:t.collectionName,error:!!s.collectionName,helperText:s.collectionName})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{fullWidth:!0,select:!0,label:"Volume",name:"volume",value:t.volume,onChange:i,size:"small",children:E.map(a=>e.jsx(p,{value:a.value,children:a.label},a.value))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{size:"small",type:"date",label:"Planning Date",name:"planningDate",value:t.planningDate,onChange:i,fullWidth:!0,focused:!0,error:!!s.planningDate,helperText:s.planningDate})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{size:"small",type:"date",label:"Launch Date",name:"launchDate",value:t.launchDate,onChange:i,fullWidth:!0,focused:!0,error:!!s.launchDate,helperText:s.launchDate})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{fullWidth:!0,select:!0,label:"Repeat Collection?",name:"isRepeatCollection",defaultValue:"No",value:t.isRepeatCollection,onChange:i,size:"small",children:H.map(a=>e.jsx(p,{value:a.value,children:a.label},a.value))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{label:"No. of Colors/Articles",fullWidth:!0,size:"small",name:"noOfColors",type:"number",onChange:i,value:t.noOfColors,error:!!s.noOfColors,helperText:s.noOfColors})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{label:"No. of Designs",fullWidth:!0,size:"small",name:"noOfDesigns",type:"number",onChange:i,value:t.noOfDesigns,error:!!s.noOfDesigns,helperText:s.noOfDesigns})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{label:"Po. Pieces",fullWidth:!0,size:"small",name:"poPcs",type:"number",onChange:i,value:t.poPcs,error:!!s.poPcs,helperText:s.poPcs})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(n,{label:"Total Pieces",fullWidth:!0,size:"small",name:"totalPcs",type:"number",value:B,disabled:!0})}),e.jsx(l,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(w,{variant:"contained",size:"small",onClick:$,children:"Save"})})]})," "]})}),e.jsx(P,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(y,{variant:"outlined",children:[e.jsx(I,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(re,{}),title:"View Collections ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(l,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(l,{item:!0,xs:12,children:e.jsx(T,{initialRows:q,ncolumns:b,formData:t,deleteApi:"https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=",deleteBy:"collectionId",editAPi:"https://gecxc.com:4041/API/CollectionRegistration/SaveCollection"})})})," "]})]}),e.jsxs(O,{value:"2",children:[e.jsxs(l,{container:!0,spacing:2,width:"inherit",children:[e.jsx(l,{item:!0,xs:9,md:9,children:e.jsx(te,{variant:"h3",gutterBottom:!0,children:"Search Collection"})}),e.jsx(l,{item:!0,xs:3,textAlign:"right",children:e.jsx(w,{variant:"contained",size:"small",onClick:Q,children:"Search"})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(n,{size:"small",type:"date",label:"Date From",name:"searchPlanningDateFrom",value:c.searchPlanningDateFrom,onChange:C,fullWidth:!0,focused:!0})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(n,{size:"small",type:"date",label:"Date to",name:"searchPlanningDateTo",value:c.searchPlanningDateTo,onChange:C,fullWidth:!0,focused:!0})}),e.jsx(l,{item:!0,sm:12,children:e.jsx(P,{color:"#cc8587",sx:{height:2,width:"100%"}})})]}),e.jsx(l,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(T,{initialRows:Y,ncolumns:b,formData:t,disableAddRecord:!0})})})]})]})})})};export{je as default};
