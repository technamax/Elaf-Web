import{u as ce,a as ie,b as de,c as ue,j as e,M as me,B as k,C as T,d as L,G as l,D as B,T as he}from"./index-D_mF4B5t.js";import{r as c}from"./vendor-BXCbSo2_.js";import{I as pe,B as R,a as M}from"./axios-DMod4shj.js";import{d as xe,a as ge}from"./AddCircle-p_5yTfPx.js";import"./dayjs.min-DO4_1a-m.js";import"./ExcelExport-COFPiD_X.js";import{d as fe,R as F}from"./ReuseableDataGrid-w8BqS-IT.js";import{d as be}from"./LoopOutlined-CRDn47d-.js";import{T as De,a as Ie,b as V,c as U}from"./TabPanel-DRxCH0vW.js";import{F as Ce,T as i}from"./TextField-9z7gW76p.js";import{M as b}from"./Skeleton-0kTGRzah.js";const Me=()=>{const{user:u}=ce(),[t,W]=c.useState([]),{data:D,error:ve,isLoading:je,refetch:x}=ie(),{data:g}=de(),[P,z]=c.useState([]),[O,E]=c.useState([]),[m,$]=c.useState({searchPlanningDateFrom:"",searchPlanningDateTo:""}),[A,S]=c.useState(!0);c.useEffect(()=>{const{searchPlanningDateFrom:a,searchPlanningDateTo:n}=m;a&&n&&new Date(n)<new Date(a)?(S(!1),h("Date To cannot be earlier than Date From",{variant:"error",autoHideDuration:5e3})):S(!0)},[m]);const[o,f]=c.useState({collectionId:0,collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isRepeatCollection:"No",noOfDesigns:"",noOfColors:"",poPcs:"",appId:1,createdBy:u.empId,createdOn:new Date().toISOString(),lastUpdatedBy:u.empId,lastUpdatedOn:new Date().toISOString()});c.useEffect(()=>{const a=n=>{const s=new Date(n),C=s.getFullYear(),p=String(s.getMonth()+1).padStart(2,"0"),v=String(s.getDate()).padStart(2,"0");return`${C}-${p}-${v}`};f({collectionId:(t==null?void 0:t.collectionId)||0,collectionName:(t==null?void 0:t.collectionName)||"",brandId:(t==null?void 0:t.brandId)||0,seasonId:(t==null?void 0:t.seasonId)||"",volume:(t==null?void 0:t.volume)||"",planningDate:t!=null&&t.planningDate?a(t.planningDate):"",launchDate:t!=null&&t.launchDate?a(t.launchDate):"",isRepeatCollection:(t==null?void 0:t.isRepeatCollection)||"",noOfDesigns:(t==null?void 0:t.noOfDesigns)||"",noOfColors:(t==null?void 0:t.noOfColors)||"",poPcs:(t==null?void 0:t.poPcs)||"",appId:(t==null?void 0:t.appId)||u.appId,createdOn:(t==null?void 0:t.createdOn)||new Date().toISOString(),createdBy:(t==null?void 0:t.createdBy)||u.empId,lastUpdatedOn:new Date().toISOString(),LastUpdatedBy:u.empId})},[t]);const[G,H]=c.useState("");console.log("formData",o),console.log("lookupData",g);const[q,Y]=c.useState("1"),{enqueueSnackbar:h}=ue(),_=(a,n)=>{Y(n)},[r,I]=c.useState({}),[y,Q]=c.useState([]);c.useEffect(()=>{if(g){const a=g.result[0];z(a.brandList),E(a.seasonList)}x()},[g]),console.log("brands",P),console.log("seasons",O),c.useEffect(()=>{H(o.noOfColors*o.poPcs)},[o.noOfColors,o.poPcs]),c.useEffect(()=>{if(D){const a=D.result.map((n,s)=>({...n,id:s+1,planningDate:new Date(n.planningDate),launchDate:new Date(n.launchDate)}));Q(a)}x()},[D]);const X=y,N=[{field:"collectionName",headerName:"Collection"},{field:"brandName",headerName:"Brand"},{field:"seasonName",headerName:"Season"},{field:"volume",headerName:"Volume"},{field:"planningDate",headerName:"Planning Date",valueGetter:a=>new Date(a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"launchDate",headerName:"Launch Date",valueGetter:a=>new Date(a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"})},{field:"isRepeatCollection",headerName:"Repeat"},{field:"noOfColors",headerName:"No. Of Colors"},{field:"noOfDesigns",headerName:"No Of Designs"},{field:"poPcs",headerName:"Po Pcs"}],J=[{value:"Volume 1",label:"Volume 1"},{value:"Volume 2",label:"Volume 2"},{value:"Volume 3",label:"Volume 3"},{value:"Volume 4",label:"Volume 4"},{value:"Volume 5",label:"Volume 5"}],K=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],d=a=>{const{name:n,value:s}=a.target;f(C=>{const p={...C,[n]:s};if(n==="planningDate"||n==="launchDate"){const v=new Date(p.planningDate),re=new Date(p.launchDate);v>re?I(j=>({...j,launchDate:"Launch Date cannot be earlier than Planning Date"})):I(j=>({...j,launchDate:""}))}return p})},w=a=>{const{name:n,value:s}=a.target;$({...m,[n]:s})},Z=()=>{const a={};return o.collectionName.trim()||(a.collectionName="collectionName is required"),o.seasonId||(a.seasonId="seasonId  is required"),o.brandId||(a.brandId="brandId  is required"),o.planningDate||(a.planningDate="planningDate  is required"),o.launchDate||(a.launchDate="launchDate  is required"),o.noOfDesigns||(a.noOfDesigns="noOfDesigns  is required"),o.noOfColors||(a.noOfColors="noOfColors  is required"),o.poPcs||(a.poPcs="poPcs  is required"),a},ee=async()=>{console.log(o);const a=Z();if(Object.keys(a).length>0){I(a);return}if(y.some(s=>s.collectionName===o.collectionName)&&o.collectionId===0){h("collection already exists!",{variant:"error",autoHideDuration:5e3});return}try{const s=await M.post("https://gecxc.com:4041/API/CollectionRegistration/SaveCollection",o);h("Collection saved successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Form data saved:",s.data),f({collectionId:0,collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isRepeatCollection:"",noOfDesigns:"",noOfColors:"",poPcs:"",createdOn:new Date().toISOString(),createdBy:u.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:u.empId}),x()}catch(s){console.error("Error saving data:",s),h("Collection not saved !",{variant:"error",autoHideDuration:5e3})}},[ae,te]=c.useState([]),oe=async()=>{try{const a=await M.get(`https://gecxc.com:4041/API/CollectionRegistration/GetCollectionListByPlanningDate?startDate=${m.searchPlanningDateFrom}&endDate=${m.searchPlanningDateTo}&appId=1`);h("Collection Search successfully!",{variant:"success",autoHideDuration:5e3}),console.log("Response Data:",a.data),te(a.data.result.map((n,s)=>({id:s,...n})))}catch(a){console.error("Error saving data:",a),h("Collection Search Failed!",{variant:"error",autoHideDuration:5e3})}},le=`CollectionList${new Date().toISOString()}`;console.log("searchData",m);const ne="https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=",se=()=>{f({collectionId:0,collectionName:"",brandId:"",seasonId:"",volume:"",planningDate:"",launchDate:"",isRepeatCollection:"",noOfDesigns:"",noOfColors:"",poPcs:"",createdOn:new Date().toISOString(),createdBy:u.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:u.empId})};return e.jsx(me,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(k,{sx:{width:"100%",typography:"body1"},children:e.jsxs(De,{value:q,children:[e.jsx(k,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(Ie,{onChange:_,"aria-label":"lab API tabs example",children:[e.jsx(V,{icon:e.jsx(xe,{}),label:"Add Collection",value:"1",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})}),e.jsx(V,{icon:e.jsx(ge,{}),label:"Search Collection",value:"2",sx:a=>({"& .MuiTouchRipple-child":{backgroundColor:`${a.palette.primary.main} !important`}})})]})}),e.jsxs(U,{value:"1",children:[e.jsx(Ce,{children:e.jsxs(T,{variant:"outlined",children:[e.jsx(L,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Collection ",titleTypographyProps:{style:{color:"white"}},action:e.jsx(pe,{"aria-label":"reset",sx:{color:"white",mt:-2},onClick:()=>se(),children:e.jsx(be,{})})}),e.jsxs(l,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{fullWidth:!0,select:!0,label:"* Season Name",name:"seasonId",value:o.seasonId,onChange:d,size:"small",error:!!r.seasonId,helperText:r.seasonId,InputLabelProps:{sx:{color:"black"}},children:O.map(a=>e.jsx(b,{value:a.lookUpId,children:a.lookUpName},a.lookUpId))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{fullWidth:!0,select:!0,label:"Brand Name",name:"brandId",value:o.brandId,onChange:d,size:"small",error:!!r.brandId,helperText:r.brandId,InputLabelProps:{sx:{color:"black"}},children:P.map(a=>e.jsx(b,{value:a.lookUpId,children:a.lookUpName},a.lookUpId))})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(i,{label:"* Collection Name",fullWidth:!0,size:"small",name:"collectionName",onChange:d,value:o.collectionName,error:!!r.collectionName,helperText:r.collectionName,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{fullWidth:!0,select:!0,label:"Volume",name:"volume",value:o.volume,onChange:d,size:"small",InputLabelProps:{sx:{color:"black"}},children:J.map(a=>e.jsx(b,{value:a.value,children:a.label},a.value))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{size:"small",type:"date",label:"Planning Date",name:"planningDate",value:o.planningDate,onChange:d,fullWidth:!0,focused:!0,error:!!r.planningDate,helperText:r.planningDate,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{size:"small",type:"date",label:"Launch Date",name:"launchDate",value:o.launchDate,onChange:d,fullWidth:!0,focused:!0,error:!!r.launchDate,helperText:r.launchDate,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{fullWidth:!0,select:!0,label:"Repeat Collection?",name:"isRepeatCollection",defaultValue:"No",value:o.isRepeatCollection,onChange:d,size:"small",InputLabelProps:{sx:{color:"black"}},children:K.map(a=>e.jsx(b,{value:a.value,children:a.label},a.value))})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"No. of Colors/Articles",fullWidth:!0,size:"small",name:"noOfColors",type:"number",onChange:d,value:o.noOfColors,error:!!r.noOfColors,helperText:r.noOfColors,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"No. of Designs",fullWidth:!0,size:"small",name:"noOfDesigns",type:"number",onChange:d,value:o.noOfDesigns,error:!!r.noOfDesigns,helperText:r.noOfDesigns,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"Po. Pieces",fullWidth:!0,size:"small",name:"poPcs",type:"number",onChange:d,value:o.poPcs,error:!!r.poPcs,helperText:r.poPcs,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"Total Pieces",fullWidth:!0,size:"small",name:"totalPcs",type:"number",value:G,disabled:!0,sx:a=>({...o.totalPcs!==""&&{".css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input":{backgroundColor:"#c9c9c9 !important"}},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"black"},"& .MuiInputBase-root.Mui-disabled":{backgroundColor:"#f9f9f9"},"& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{},"& .MuiInputLabel-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.87)"}}),InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(R,{variant:"contained",size:"small",onClick:ee,children:"Save"})})]})," "]})}),e.jsx(B,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(T,{variant:"outlined",children:[e.jsx(L,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(fe,{}),title:"View Collections ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(l,{container:!0,spacing:2,width:"Inherit",sx:{paddingY:2,paddingX:2},children:e.jsx(l,{item:!0,xs:12,children:e.jsx(F,{initialRows:X,iColumns:N,setInitialData:W,formData:o,deleteApi:ne,deleteBy:"collectionId",refetch:x,fileName:le})})})," "]})]}),e.jsxs(U,{value:"2",children:[e.jsxs(l,{container:!0,spacing:2,width:"inherit",children:[e.jsx(l,{item:!0,xs:9,md:9,children:e.jsx(he,{variant:"h3",gutterBottom:!0,children:"Search Collection"})}),e.jsx(l,{item:!0,xs:3,textAlign:"right",children:e.jsx(R,{variant:"contained",size:"small",onClick:oe,disabled:!A,children:"Search"})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(i,{size:"small",type:"date",label:"Date From",name:"searchPlanningDateFrom",value:m.searchPlanningDateFrom,onChange:w,fullWidth:!0,focused:!0,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(i,{size:"small",type:"date",label:"Date to",name:"searchPlanningDateTo",value:m.searchPlanningDateTo,onChange:w,fullWidth:!0,focused:!0,InputLabelProps:{sx:{color:"black"}}})}),e.jsx(l,{item:!0,sm:12,children:e.jsx(B,{color:"#cc8587",sx:{height:2,width:"100%"}})})]}),e.jsx(l,{container:!0,spacing:2,width:"inherit",paddingTop:2,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(F,{initialRows:ae,iColumns:N,disableEdit:!0,disableDelete:!0})})})]})]})})})};export{Me as default};
