import{m as V,r as c,b as u,c as m,d as p,e,f as a,g as _,T as I,F as x,l as T,C as E,i as M,t as $}from"./index-23897971.js";const B={class:"grid"},S={class:"col-12 lg:col-6"},D={class:"card"},U=e("h5",null,"Toast",-1),W={class:"col-12 lg:col-6"},q={class:"card"},N=e("h5",null,"Messages",-1),F={class:"col-12 lg:col-8"},G={class:"card"},H=e("h5",null,"Inline",-1),L={class:"field grid"},P=e("label",{for:"username1",class:"col-fixed w-9rem"},"Username",-1),j={class:"col"},z={class:"field grid"},A=e("label",{for:"email",class:"col-fixed w-9rem"},"Email",-1),J={class:"col"},K={class:"col-12 lg:col-4"},O={class:"card"},Q=e("h5",null,"Help Text",-1),R={class:"field p-fluid"},X=e("label",{for:"username2"},"Username",-1),Y=e("small",{id:"username-help",class:"p-error"},"Enter your username to reset your password.",-1),se={__name:"Messages",setup(Z){const r=V(),o=c([]),f=c(null),g=c(null),i=c(0),d=n=>{n==="success"?o.value=[{severity:"success",detail:"Success Message",content:"Message sent",id:i.value++}]:n==="info"?o.value=[{severity:"info",detail:"Info Message",content:"PrimeVue rocks",id:i.value++}]:n==="warn"?o.value=[{severity:"warn",detail:"Warn Message",content:"There are unsaved changes",id:i.value++}]:n==="error"&&(o.value=[{severity:"error",detail:"Error Message",content:"Validation failed",id:i.value++}])},h=()=>{r.add({severity:"success",summary:"Success Message",detail:"Message Detail",life:3e3})},b=()=>{r.add({severity:"info",summary:"Info Message",detail:"Message Detail",life:3e3})},w=()=>{r.add({severity:"warn",summary:"Warn Message",detail:"Message Detail",life:3e3})},k=()=>{r.add({severity:"error",summary:"Error Message",detail:"Message Detail",life:3e3})};return(n,s)=>{const t=u("Button"),C=u("Message"),v=u("InputText"),y=u("InlineMessage");return m(),p("div",B,[e("div",S,[e("div",D,[U,a(t,{onClick:s[0]||(s[0]=l=>h()),label:"Success",class:"mr-2",severity:"success"}),a(t,{onClick:s[1]||(s[1]=l=>b()),label:"Info",class:"mr-2",severity:"info"}),a(t,{onClick:s[2]||(s[2]=l=>w()),label:"Warn",class:"mr-2",severity:"warning"}),a(t,{onClick:s[3]||(s[3]=l=>k()),label:"Error",class:"mr-2",severity:"danger"})])]),e("div",W,[e("div",q,[N,a(t,{label:"Success",onClick:s[4]||(s[4]=l=>d("success")),class:"mr-2",severity:"success"}),a(t,{label:"Info",onClick:s[5]||(s[5]=l=>d("info")),class:"mr-2",severity:"info"}),a(t,{label:"Warn",onClick:s[6]||(s[6]=l=>d("warn")),class:"mr-2",severity:"warning"}),a(t,{label:"Error",onClick:s[7]||(s[7]=l=>d("error")),class:"mr-2",severity:"danger"}),a(I,{name:"p-message",tag:"div"},{default:_(()=>[(m(!0),p(x,null,T(o.value,l=>(m(),E(C,{severity:l.severity,key:l.content},{default:_(()=>[M($(l.content),1)]),_:2},1032,["severity"]))),128))]),_:1})])]),e("div",F,[e("div",G,[H,e("div",L,[P,e("div",j,[a(v,{id:"username1",modelValue:f.value,"onUpdate:modelValue":s[8]||(s[8]=l=>f.value=l),required:!0,invalid:"",class:"mr-2"},null,8,["modelValue"]),a(y,null,{default:_(()=>[M("Username is required")]),_:1})])]),e("div",z,[A,e("div",J,[a(v,{id:"email",modelValue:g.value,"onUpdate:modelValue":s[9]||(s[9]=l=>g.value=l),required:!0,invalid:"",class:"mr-2"},null,8,["modelValue"]),a(y)])])])]),e("div",K,[e("div",O,[Q,e("div",R,[X,a(v,{id:"username2",type:"username",class:"p-error","aria-describedby":"username-help"}),Y])])])])}}};export{se as default};
