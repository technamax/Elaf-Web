import{r as I,l as S,j as e,u as H,h as q,M as U,B as f,C as M,d as b,G as n,D as $}from"./index-DnIh2Wd7.js";import{r as o}from"./vendor-BXCbSo2_.js";import{B as A,a as P}from"./axios-DRu-V1sv.js";import{d as W}from"./VisibilityOutlined-zghBNVnL.js";import{R as G}from"./ReuseableDataGrid-DFNlQ0al.js";import V from"./SubMenu-Bu8qPlWz.js";import{T as k,a as F,b as j,c as g}from"./TabPanel-CEFDlmRA.js";import{T as i}from"./TextField-NjIbNAS4.js";import{M as L}from"./Skeleton-CxEcuNdD.js";import"./ExcelExport-DdhRZJhP.js";var m={},Y=S;Object.defineProperty(m,"__esModule",{value:!0});var y=m.default=void 0,Q=Y(I()),X=e;y=m.default=(0,Q.default)((0,X.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");var p={},J=S;Object.defineProperty(p,"__esModule",{value:!0});var C=p.default=void 0,K=J(I()),Z=e;C=p.default=(0,K.default)((0,Z.jsx)("path",{d:"M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z"}),"MenuOpen");function ue(){const{user:t}=H(),[a,w]=o.useState([]),[O,h]=o.useState(!1),[s,u]=o.useState({mainMenuId:0,appId:t.appId,mainMenuDesc:"",orderNo:"",enabled:"",icon:"",createdOn:new Date().toISOString(),createdBy:t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId}),N=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],[D,R]=o.useState("1"),_=(r,d)=>{R(d)};o.useEffect(()=>{u({mainMenuId:(a==null?void 0:a.mainMenuId)||0,appId:(a==null?void 0:a.appId)||t.appId,mainMenuDesc:(a==null?void 0:a.mainMenuDesc)||"",orderNo:(a==null?void 0:a.orderNo)||"",enabled:(a==null?void 0:a.enabled)||"",icon:(a==null?void 0:a.icon)||"",createdOn:(a==null?void 0:a.createdOn)||new Date().toISOString(),createdBy:(a==null?void 0:a.createdBy)||t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId})},[a]);const[x,z]=o.useState([]);o.useState(!1);const{data:c,refetch:v}=q();o.useEffect(()=>{c&&z(c.result.map((r,d)=>({id:d,...r})))},[c,v]),console.log("initialRows",x);const l=r=>{const{name:d,value:E}=r.target;u({...s,[d]:E})},B=async()=>{console.log("formData",s);try{const r=await P.post("https://gecxc.com:4041/api/Menu/SaveMainMenu",s);console.log("Save response:",r.data),u(d=>({mainMenuId:0,mainMenuDesc:"",orderNo:"",enabled:"",icon:"",appId:t.appId,createdOn:new Date().toISOString(),createdBy:t.empId,lastUpdatedOn:new Date().toISOString(),lastUpdatedBy:t.empId})),v(),h(!1)}catch(r){console.error("Error saving data:",r)}};console.log("formData",s);const T=[{field:"mainMenuDesc",headerName:"MainMenu",flex:1},{field:"orderNo",headerName:"Order No.",flex:1},{field:"icon",headerName:"icon",flex:1},{field:"enabled",headerName:"Enabled",flex:1}];return e.jsx(U,{style:{borderWidth:1,borderStyle:"dotted",borderColor:"#a11f23",width:"auto",maxHeight:{xs:"80vh",md:"auto"},overflow:"auto"},children:e.jsx(f,{sx:{width:"100%",typography:"body1"},children:e.jsxs(k,{value:D,children:[e.jsx(f,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(F,{onChange:_,"aria-label":"lab API tabs example",children:[e.jsx(j,{icon:e.jsx(y,{}),label:"Add Main Menu",value:"1",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})}),e.jsx(j,{icon:e.jsx(C,{}),label:"Add Sub Menus",value:"2",sx:r=>({"& .MuiTouchRipple-child":{backgroundColor:`${r.palette.primary.main} !important`}})})]})}),e.jsxs(g,{value:"1",children:[e.jsxs(M,{variant:"outlined",children:[e.jsx(b,{className:"css-4rfrnx-MuiCardHeader-root",title:"Add Main Menu ",titleTypographyProps:{style:{color:"white"}}}),e.jsxs(n,{container:!0,spacing:1,width:"Inherit",sx:{paddingY:2,paddingX:2},children:[e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"MainMenu Description",fullWidth:!0,size:"small",name:"mainMenuDesc",onChange:l,value:s.mainMenuDesc,required:!0,disabled:O})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"Order No.",fullWidth:!0,size:"small",name:"orderNo",onChange:l,value:s.orderNo,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(i,{label:"Icon",fullWidth:!0,size:"small",name:"icon",onChange:l,value:s.icon,required:!0})}),e.jsx(n,{item:!0,xs:12,md:3,children:e.jsx(i,{fullWidth:!0,select:!0,label:"enabled",name:"enabled",value:s.enabled,onChange:l,size:"small",children:N.map(r=>e.jsx(L,{value:r.value,children:r.label},r.value))})}),e.jsx(n,{item:!0,xs:12,textAlign:"right",sx:{mt:2},children:e.jsx(A,{variant:"contained",size:"small",onClick:B,children:"Save"})})]})," "]}),e.jsx($,{color:"#cc8587",sx:{height:1,width:"100%",mt:2}}),e.jsxs(M,{variant:"outlined",children:[e.jsx(b,{className:"css-4rfrnx-MuiCardHeader-root",avatar:e.jsx(W,{}),title:"View Main Menus ",titleTypographyProps:{style:{color:"white"}}}),e.jsx(n,{container:!0,spacing:2,width:"Inherit",children:e.jsx(n,{item:!0,xs:12,children:e.jsx(G,{initialRows:x,iColumns:T,disableDelete:!0,setInitialData:w,setIsEdit:h})})})]})]}),e.jsx(g,{value:"2",children:e.jsx(V,{})})]})})})}export{ue as default};
