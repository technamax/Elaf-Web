import{r as l,j as e,B as n,G as p,T as a}from"./index-oJHoRO-l.js";import{S as b,a as P,b as B,F as S}from"./Fabrication-CX1bRrNU.js";import{T as F,B as o}from"./TextField-Dn70Puqt.js";import"./axios-5ESieq6f.js";import"./ExcelExport-CwvQUnW3.js";import"./DataGrid-DFDKUqut.js";import"./Skeleton-BJFayy2B.js";const x=["Fabrication","Dyeing/Printing  ","MultiHead ","Schiffli","name6","name7","name8","name9","name10","name11","name12"];function R(){const[s,r]=l.useState(0),[d,h]=l.useState(new Set),c=t=>t===1,m=t=>d.has(t),f=()=>{let t=d;m(s)&&(t=new Set(t.values()),t.delete(s)),r(i=>i+1),h(t)},k=()=>{r(t=>t-1)},g=()=>{if(!c(s))throw new Error("You can't skip a step that isn't optional.");r(t=>t+1),h(t=>{const i=new Set(t.values());return i.add(s),i})},w=()=>{r(0)};return e.jsxs(n,{sx:{width:"100%"},children:[e.jsxs(p,{container:!0,spacing:0,width:"Inherit",children:[e.jsx(p,{item:!0,sm:6,children:e.jsx(a,{variant:"h2",gutterBottom:!0,children:"Planning Process"})}),e.jsx(p,{item:!0,sm:6,textAlign:"right",children:e.jsx(F,{fullWidth:!0,select:!0,label:"Select Collection",defaultValue:"",helperText:"Please Select Collection",size:"small"})})]}),e.jsx(b,{activeStep:s,children:x.map((t,i)=>{const u={},j={};return c(i)&&(j.optional=e.jsx(a,{variant:"caption",children:"Optional"})),m(i)&&(u.completed=!1),e.jsx(P,{...u,children:e.jsx(B,{...j,children:t})},t)})}),s===x.length?e.jsxs(l.Fragment,{children:[e.jsx(a,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(n,{sx:{flex:"1 1 auto"}}),e.jsx(o,{onClick:w,children:"Reset"})]})]}):e.jsxs(l.Fragment,{children:[e.jsxs(a,{sx:{mt:2,mb:1},children:["Step ",s+1]}),s===0&&e.jsx(S,{}),s===1&&e.jsx(S,{}),e.jsxs(n,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(o,{color:"inherit",disabled:s===0,onClick:k,sx:{mr:1},children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),c(s)&&e.jsx(o,{color:"inherit",onClick:g,sx:{mr:1},children:"Skip"}),e.jsx(o,{onClick:f,children:s===x.length-1?"Finish":"Next"})]})]})]})}export{R as default};
