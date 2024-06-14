import{r as d,j as e,B as u,G as r,D as f}from"./index-7mdCI5AO.js";import{a as p}from"./axios-BilD9Akj.js";import{T as l,B as x}from"./TextField-BQWcWP_b.js";import{M as g}from"./Skeleton-D0EipdCo.js";import{D}from"./DataGrid-B0JDEeH2.js";import{G as b}from"./GridToolbar-BVL0SYS8.js";function j({onSaveSuccess:n}){const s=[{value:"yes",label:"yes"},{value:"no",label:"no"}],[t,o]=d.useState({appName:"",startDate:"",endDate:"",enabled:"",createdBy:0,createdOn:new Date().toISOString()}),i=async a=>{const{name:m,value:h}=a.target;o({...t,[m]:h})},c=async()=>{console.log(t);try{const a=await p.post("https://gecxc.com:4041/api/ApplicationConfig/SaveApplication",t);console.log("Form data saved:",a.data),o({appName:"",startDate:"",endDate:"",enabled:""}),n&&n()}catch(a){console.error("Error saving data:",a)}};return e.jsx("div",{children:e.jsx(u,{m:3,pt:4,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"inherit"}},noValidate:!0,autoComplete:"off",children:e.jsxs(r,{container:!0,children:[e.jsx(r,{item:!0,md:3,width:"inherit",paddingX:1,children:e.jsx(l,{fullWidth:!0,label:"App name",name:"appName",value:t.appName,onChange:i,size:"small"})}),e.jsx(r,{item:!0,md:3,width:"inherit",paddingX:1,children:e.jsx(l,{size:"small",type:"date",label:"Start Date",name:"startDate",value:t.startDate,onChange:i,fullWidth:!0,focused:!0})}),e.jsx(r,{item:!0,md:3,width:"inherit",paddingX:1,children:e.jsx(l,{size:"small",type:"date",label:"End Date",name:"endDate",value:t.endDate,onChange:i,fullWidth:!0,focused:!0})}),e.jsx(r,{item:!0,md:3,width:"inherit",paddingX:1,children:e.jsx(l,{id:"outlined-select-option",select:!0,label:"Enabled",name:"enabled",defaultValue:"yes",helperText:"Please select an option",variant:"outlined",value:t.enabled,onChange:i,size:"small",fullWidth:!0,children:s.map(a=>e.jsx(g,{value:a.value,children:a.label},a.value))})}),e.jsx(r,{item:!0,md:12,width:"inherit",paddingX:1,textAlign:"right",children:e.jsx(x,{variant:"contained",color:"primary",size:"small",onClick:c,children:"Save"})})]})})})}function v(){const[n,s]=d.useState([]),t=d.useCallback(async()=>{try{const c=(await p.get("https://gecxc.com:4041/api/ApplicationConfig/GetApplicationList")).data.result.map((a,m)=>({id:m,...a}));s(c)}catch(i){console.error("Error fetching data:",i)}},[]);d.useEffect(()=>{t()},[t]);const o=[{field:"appName",headerName:"App Name",width:150},{field:"startDate",headerName:"Start Date",width:300},{field:"endDate",headerName:"End Date",width:300},{field:"enabled",headerName:"Enabled",minWidth:120},{field:"action",headerName:"Action",minWidth:120}];return e.jsx("div",{style:{height:"auto",width:"100%"},children:e.jsx(D,{rows:n,columns:o,fetchData:t,autoHeight:!0,getRowId:i=>i.id,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10,15],localeText:{toolbarDensity:"Size",toolbarDensityLabel:"Size",toolbarDensityCompact:"Small",toolbarDensityStandard:"Medium",toolbarDensityComfortable:"Large"},components:{Toolbar:b}})})}function z(n){return e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(f,{}),e.jsx(v,{fetchData:n})]})}export{z as default};
