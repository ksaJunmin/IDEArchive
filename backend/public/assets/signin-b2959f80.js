import{r as l,k as v,b as n,c as h,d as b,e,f as o,J as x}from"./index-016ea813.js";const g={class:"grid"},w={class:"col-12 md:col-12"},k={class:"card p-fluid"},y=e("h5",null,"회원가입",-1),B={class:"field"},V=e("label",{for:"name1"},"이름",-1),I={class:"field"},C=e("label",{for:"email1"},"학번",-1),D={class:"field"},N=e("label",{for:"age1"},"이메일",-1),P={class:"field"},T=e("label",{for:"age1"},"비밀번호",-1),J={__name:"signin",setup(U){const d=l(""),i=l(""),r=l(""),_=l(""),u=async()=>{try{const s=await x.post("/users",{name:d.value,schoolID:i.value,email:r.value,password:_.value});console.log(s.data),alert("회원가입이 완료되었습니다."),p.push("/")}catch(s){console.error("회원가입 중 오류가 발생했습니다:",s),alert("회원가입에 실패했습니다.")}},p=v();return(s,t)=>{const a=n("InputText"),m=n("Password"),f=n("Button");return h(),b("div",g,[e("div",w,[e("div",k,[y,e("div",B,[V,o(a,{id:"name1",type:"text"})]),e("div",I,[C,o(a,{id:"id1",type:"text"})]),e("div",D,[N,o(a,{id:"email1",type:"text"})]),e("div",P,[T,o(m,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=c=>s.value=c),feedback:!1,variant:"filled",label:"비밀번호를 입력하세요"},null,8,["modelValue"])]),o(f,{label:"확인",class:"w-full p-3 text-xl",onClick:t[1]||(t[1]=c=>u())})])])])}}};export{J as default};
