import{q as N,s as U,Q as F,y as _,t as I,T as x,R as T,_ as C,r as d,E as z,H as q,S as G,J as Q,j as e,K as J,N as K,U as O,M as X,B as v,V as Y,W as V,X as Z,Y as ee,b as te,Z as ne,$ as se,a0 as B,G as r,a1 as oe,a2 as re}from"./index-CBw2d3eb.js";import{I as ae,a as ie}from"./axios-CSRHvA_j.js";import{T as D,B as le}from"./TextField-ClGwskUy.js";function ce(n){return U("MuiLink",n)}const ue=N("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},de=n=>P[n]||n,me=({theme:n,ownerState:t})=>{const o=de(t.color),a=F(n,`palette.${o}`,!1)||t.color,c=F(n,`palette.${o}Channel`);return"vars"in n&&c?`rgba(${c} / 0.4)`:_(a,.4)},pe=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],he=n=>{const{classes:t,component:o,focusVisible:a,underline:c}=n,i={root:["root",`underline${T(c)}`,o==="button"&&"button",a&&"focusVisible"]};return K(i,ce,t)},xe=I(x,{name:"MuiLink",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`underline${T(o.underline)}`],o.component==="button"&&t.button]}})(({theme:n,ownerState:t})=>C({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&C({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:me({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ue.focusVisible}`]:{outline:"auto"}})),L=d.forwardRef(function(t,o){const a=z({props:t,name:"MuiLink"}),{className:c,color:i="primary",component:m="a",onBlur:f,onFocus:l,TypographyClasses:w,underline:g="always",variant:b="inherit",sx:p}=a,k=q(a,pe),{isFocusVisibleRef:s,onBlur:u,onFocus:y,ref:j}=G(),[M,S]=d.useState(!1),W=Q(o,j),E=h=>{u(h),s.current===!1&&S(!1),f&&f(h)},H=h=>{y(h),s.current===!0&&S(!0),l&&l(h)},A=C({},a,{color:i,component:m,focusVisible:M,underline:g,variant:b}),$=he(A);return e.jsx(xe,C({color:i,className:J($.root,c),classes:w,component:m,onBlur:E,onFocus:H,ref:W,ownerState:A,variant:b,sx:[...Object.keys(P).includes(i)?[]:[{color:i}],...Array.isArray(p)?p:[p]]},k))}),fe=I("div")(({theme:n})=>({backgroundColor:n.palette.grey[300],minHeight:"100vh"})),R=({children:n,...t})=>e.jsx(X,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...t,children:e.jsx(v,{sx:{p:{xs:2,sm:3,xl:5}},children:n})});R.propTypes={children:O.node};const ge=({...n})=>{const t=Y();V(t.breakpoints.down("md")),Z(s=>s.customization),d.useState(!0);const[o,a]=d.useState(""),c=ee(),{enqueueSnackbar:i}=te(),[m,f]=d.useState(!1),[l,w]=d.useState({username:"",password:""}),g=s=>{w({...l,[s.target.name]:s.target.value})},b=async s=>{s.preventDefault(),console.log("Submitting form with values:",l);try{const u=await ie.post("https://gecxc.com:4041/api/Users/authenticate",{username:l.username,password:l.password});if(i("Login successful!",{variant:"success",autoHideDuration:5e3}),console.log("Full response:",u),u.data){const{token:y,empId:j}=u.data;localStorage.setItem("authToken",y),localStorage.setItem("empId",j),console.log("Stored empId:",j),console.log("Stored token:",y),c("/dashboard"),console.log("Authentication successful",u.data)}else throw new Error("No data in response")}catch(u){console.error("Authentication failed",u.response.data),a("Authentication failed. Please check your credentials."),i("Login Failed!",{variant:"error",autoHideDuration:5e3})}},p=()=>{f(!m)},k=s=>{s.preventDefault()};return e.jsx(v,{sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs(v,{component:"form",noValidate:!0,sx:{mt:1},onSubmit:b,children:[e.jsx(D,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:l.username,onChange:g}),e.jsx(D,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:m?"text":"password",id:"password",autoComplete:"current-password",value:l.password,onChange:g,InputProps:{endAdornment:e.jsx(ae,{position:"end",children:e.jsx(ne,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:k})})}}),e.jsx(v,{sx:{mt:2},children:e.jsx(se,{children:e.jsx(le,{sx:{borderRadius:10},disableElevation:!0,fullWidth:!0,type:"submit",variant:"contained",color:"error",children:"Sign in"})})})]})})},be=()=>e.jsxs(B,{direction:"row",justifyContent:"space-between",children:[e.jsx(x,{variant:"subtitle2",component:L,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"Elaf"}),e.jsx(x,{variant:"subtitle2",component:L,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"© Premium"})]}),Ce=()=>{const n=V(t=>t.breakpoints.down("md"));return e.jsx(fe,{children:e.jsxs(r,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(r,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(R,{children:e.jsxs(r,{container:!0,spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(r,{item:!0,sx:{mb:1},children:e.jsx(oe,{to:"#","aria-label":"logo",children:e.jsx(re,{})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(r,{item:!0,children:e.jsxs(B,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(x,{color:"error",gutterBottom:!0,variant:n?"h3":"h2",children:"Welcome to ELAF"}),e.jsx(x,{color:"grey[600]",variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"}),e.jsx(ge,{})]})})})})]})})})})}),e.jsx(r,{item:!0,xs:6,sx:{m:3,mt:1},children:e.jsx(be,{})})]})})};export{Ce as default};
