import{k as r,r as c,b as n,c as p,d as _,e,J as f,f as t,K as v}from"./index-4af7f0ee.js";const h={class:"grid"},V={class:"col-12 md:col-12"},b={class:"card p-fluid"},x=e("h5",null,"회원가입",-1),w={class:"field"},I=e("label",{for:"name"},"이름",-1),g={class:"field"},y=e("label",{for:"schoolID"},"학번",-1),B={class:"field"},D=e("label",{for:"email"},"이메일",-1),k={class:"field"},U=e("label",{for:"password"},"비밀번호",-1),C={__name:"signin",setup(N){const d=r(),o=c({name:"",schoolID:"",email:"",password:""}),i=async()=>{await v.post("http://localhost:3000/users",o.value),console.log("response"),d.push({name:"Home"}),console.log("moved")};return(P,l)=>{const a=n("InputText"),u=n("Password"),m=n("Button");return p(),_("div",h,[e("div",V,[e("div",b,[e("form",{onSubmit:f(i,["prevent"])},[x,e("div",w,[I,t(a,{id:"name",modelValue:o.value.name,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value.name=s),type:"text"},null,8,["modelValue"])]),e("div",g,[y,t(a,{id:"schoolID",modelValue:o.value.schoolID,"onUpdate:modelValue":l[1]||(l[1]=s=>o.value.schoolID=s),type:"text"},null,8,["modelValue"])]),e("div",B,[D,t(a,{id:"email",modelValue:o.value.email,"onUpdate:modelValue":l[2]||(l[2]=s=>o.value.email=s),type:"text"},null,8,["modelValue"])]),e("div",k,[U,t(u,{modelValue:o.value.password,"onUpdate:modelValue":l[3]||(l[3]=s=>o.value.password=s),feedback:!1,variant:"filled",label:"비밀번호를 입력하세요"},null,8,["modelValue"])]),t(m,{label:"확인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])}}};export{C as default};