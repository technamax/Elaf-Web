import{j as e,B as n,G as p,T as l}from"./index-P63s4xo1.js";import{r as o}from"./vendor-BXCbSo2_.js";import{S as b,a as P,b as B,F as f}from"./Fabrication-wcbxccPe.js";import{T as F}from"./TextField-BsV9VrK2.js";import{B as a}from"./axios-Csp6NEuH.js";import"./ExcelExport-DPVX8EPO.js";import"./DataGrid--PoTrKUE.js";import"./Skeleton-_785vHRP.js";import"./VisibilityOutlined-DdvVQzSI.js";const x=["Fabrication","Dyeing/Printing  ","MultiHead ","Schiffli","name6","name7","name8","name9","name10","name11","name12"];function N(){const[s,r]=o.useState(0),[d,h]=o.useState(new Set),c=t=>t===1,m=t=>d.has(t),S=()=>{let t=d;m(s)&&(t=new Set(t.values()),t.delete(s)),r(i=>i+1),h(t)},k=()=>{r(t=>t-1)},g=()=>{if(!c(s))throw new Error("You can't skip a step that isn't optional.");r(t=>t+1),h(t=>{const i=new Set(t.values());return i.add(s),i})},w=()=>{r(0)};return e.jsxs(n,{sx:{width:"100%"},children:[e.jsxs(p,{container:!0,spacing:0,width:"Inherit",children:[e.jsx(p,{item:!0,sm:6,children:e.jsx(l,{variant:"h2",gutterBottom:!0,children:"Planning Process"})}),e.jsx(p,{item:!0,sm:6,textAlign:"right",children:e.jsx(F,{fullWidth:!0,select:!0,label:"Select Collection",defaultValue:"",helperText:"Please Select Collection",size:"small"})})]}),e.jsx(b,{activeStep:s,children:x.map((t,i)=>{const u={},j={};return c(i)&&(j.optional=e.jsx(l,{variant:"caption",children:"Optional"})),m(i)&&(u.completed=!1),e.jsx(P,{...u,children:e.jsx(B,{...j,children:t})},t)})}),s===x.length?e.jsxs(o.Fragment,{children:[e.jsx(l,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(a,{onClick:w,children:"Reset"})]})]}):e.jsxs(o.Fragment,{children:[e.jsxs(l,{sx:{mt:2,mb:1},children:["Step ",s+1]}),s===0&&e.jsx(f,{}),s===1&&e.jsx(f,{}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(a,{color:"inherit",disabled:s===0,onClick:k,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),c(s)&&e.jsx(a,{color:"inherit",onClick:g,sx:{mr:1},children:"Skip"}),e.jsx(a,{onClick:S,children:s===x.length-1?"Finish":"Next"})]})]})]})}export{N as default};
