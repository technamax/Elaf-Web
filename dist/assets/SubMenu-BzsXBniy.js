import{j as e,B as p,G as n,D as b}from"./index-BzFTEBLW.js";import{r as s}from"./vendor-BXCbSo2_.js";import{a as m}from"./axios-DN29wjEB.js";import{T as o,B as x}from"./TextField-Bnav32tL.js";import{M as g}from"./Skeleton-ZoXsi-9Q.js";import{D as f}from"./DataGrid-CstS1tab.js";import{G as j}from"./GridToolbar-JSRCxa7l.js";function D({onSaveSuccess:r}){const u=[{value:"Yes",label:"Yes"},{value:"No",label:"No"}],[t,d]=s.useState({subMenuDesc:"",link:"",icon:"",orderNo:0,enabled:""}),i=a=>{const{name:c,value:h}=a.target;d({...t,[c]:h})},l=async()=>{console.log(t);try{const a=await m.post("https://gecxc.com:4041/api/Menu/SaveSubMenu",t);console.log("Form data saved:",a.data),d({subMenuDesc:"",link:"",icon:"",orderNo:0,enabled:""}),r&&r()}catch(a){console.error("Error saving data:",a)}};return e.jsx("div",{children:e.jsx(p,{m:3,pt:4,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"inherit"}},noValidate:!0,autoComplete:"off",children:e.jsxs(n,{container:!0,children:[e.jsx(n,{item:!0,md:4,width:"inherit",paddingX:1,children:e.jsx(o,{id:"outlined-required",label:"Sub Menu Description",name:"subMenuDesc",value:t.subMenuDesc,onChange:i,size:"small",required:!0})}),e.jsx(n,{item:!0,md:4,width:"inherit",paddingX:1,children:e.jsx(o,{id:"outlined-select-option",select:!0,label:"Enabled",helperText:"Please select an option",variant:"outlined",size:"small",name:"enabled",value:t.enabled,onChange:i,fullWidth:!0,children:u.map(a=>e.jsx(g,{value:a.value,children:a.label},a.value))})}),e.jsx(n,{item:!0,md:4,width:"inherit",paddingX:1,children:e.jsx(o,{id:"outlined-required",label:"Order No.",name:"orderNo",size:"small",value:t.orderNo,onChange:i,required:!0})}),e.jsx(n,{item:!0,md:4,width:"inherit",paddingX:1,children:e.jsx(o,{id:"outlined-required",label:"Link",name:"link",size:"small",value:t.link,onChange:i,required:!0})}),e.jsx(n,{item:!0,md:4,width:"inherit",paddingX:1,children:e.jsx(o,{id:"outlined-required",label:"Icon",name:"icon",value:t.icon,onChange:i,size:"small",required:!0})}),e.jsx(n,{item:!0,md:12,width:"inherit",paddingX:1,textAlign:"right",children:e.jsx(x,{variant:"contained",color:"primary",size:"small",onClick:l,children:"Save"})})]})})})}function v(){const[r,u]=s.useState([]),t=s.useCallback(async()=>{try{console.log("Fetching data...");const i=await m.get("https://gecxc.com:4041/api/Menu/GetSubMenuList");console.log("Data fetched:",i.data);const l=i.data.result.map((a,c)=>({id:c,...a}));console.log("Data with ID:",l),u(l)}catch(i){console.error("Error fetching data:",i)}},[]);s.useEffect(()=>{t()},[t]);const d=[{field:"subMenuDesc",headerName:"Sub Menu Description",width:200,flex:1},{field:"link",headerName:"Link",minWidth:120},{field:"icon",headerName:"Icon",minWidth:120},{field:"orderNo",headerName:"Order No.",minWidth:120},{field:"enabled",headerName:"Enabled",minWidth:120},{field:"createdBy",headerName:"Created By",minWidth:120},{field:"createdOn",headerName:"Created On",minWidth:120}];return e.jsx("div",{style:{height:"auto",width:"100%"},children:e.jsx(f,{rows:r,columns:d,autoHeight:!0,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10,15],localeText:{toolbarDensity:"Size",toolbarDensityLabel:"Size",toolbarDensityCompact:"Small",toolbarDensityStandard:"Medium",toolbarDensityComfortable:"Large"},components:{Toolbar:j}})})}function k(r){return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(b,{}),e.jsx(v,{fetchData:r})]})}export{k as default};
