import{k as m,r as p,b as n,c as _,d as f,e,J as v,f as a,K as h}from"./index-92182bd7.js";const V={class:"grid"},b={class:"col-12 md:col-12"},x={class:"card p-fluid"},w=e("h5",null,"회원가입",-1),I={class:"field"},y=e("label",{for:"name"},"이름",-1),B={class:"field"},D=e("label",{for:"schoolID"},"학번",-1),g={class:"field"},k=e("label",{for:"email"},"이메일",-1),U={class:"field"},N=e("label",{for:"password"},"비밀번호",-1),C={__name:"signin",setup(P){const i=m(),o=p({name:"",schoolID:"",email:"",password:""}),r=async()=>{try{const t=await h.post("http://localhost:3000/users",o.value);alert(t.data),i.push("/")}catch(t){alert("사용자 등록 오류: "+(t.response?t.response.data:t.message))}};return(t,s)=>{const d=n("InputText"),u=n("Password"),c=n("Button");return _(),f("div",V,[e("div",b,[e("div",x,[e("form",{onSubmit:v(r,["prevent"])},[w,e("div",I,[y,a(d,{id:"name",modelValue:o.value.name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.name=l),type:"text"},null,8,["modelValue"])]),e("div",B,[D,a(d,{id:"schoolID",modelValue:o.value.schoolID,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.schoolID=l),type:"text"},null,8,["modelValue"])]),e("div",g,[k,a(d,{id:"email",modelValue:o.value.email,"onUpdate:modelValue":s[2]||(s[2]=l=>o.value.email=l),type:"text"},null,8,["modelValue"])]),e("div",U,[N,a(u,{modelValue:o.value.password,"onUpdate:modelValue":s[3]||(s[3]=l=>o.value.password=l),feedback:!1,variant:"filled",label:"비밀번호를 입력하세요"},null,8,["modelValue"])]),a(c,{label:"확인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])}}};export{C as default};
