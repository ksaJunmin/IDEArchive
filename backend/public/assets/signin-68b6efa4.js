import{k as V,r as p,b as c,c as r,d as n,e as o,A as g,f as d,t as i,v as u,l as I}from"./index-bdf73b52.js";const y={class:"grid"},D={class:"col-12 md:col-12"},b={class:"card p-fluid"},x=o("h5",null,"회원가입",-1),k={class:"field"},B=o("label",{for:"name"},"이름",-1),U={key:0,class:"p-error"},M={class:"field"},N=o("label",{for:"schoolID"},"학번",-1),R={key:0,class:"p-error"},C={class:"field"},P=o("label",{for:"email"},"이메일",-1),S={key:0,class:"p-error"},T={class:"field"},A=o("label",{for:"password"},"비밀번호",-1),E={key:0,class:"p-error"},F={key:0,class:"error-message"},q={__name:"signin",setup($){const v=V(),s=p({name:"",schoolID:"",email:"",password:""}),e=p({name:"",schoolID:"",email:"",password:""}),_=()=>{let l=!0;return s.value.name===""?(e.value.name="이름을 입력하세요",l=!1):e.value.name="",s.value.schoolID.length!==6?(e.value.schoolID="학번은 6자리여야 합니다",l=!1):e.value.schoolID="",/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value.email)?e.value.email="":(e.value.email="유효한 이메일 주소를 입력하세요",l=!1),s.value.password.length<8?(e.value.password="비밀번호는 8자 이상이어야 합니다",l=!1):e.value.password="",l},f=async()=>{if(_())try{v.push("/");const l=await I.post("http://localhost:3000/users/signin",s.value)}catch(l){alert("사용자 등록 오류: "+(l.response?l.response.data:l.message))}};return(l,a)=>{const m=c("InputText"),h=c("Password"),w=c("Button");return r(),n("div",y,[o("div",D,[o("div",b,[o("form",{onSubmit:g(f,["prevent"])},[x,o("div",k,[B,d(m,{id:"name",modelValue:s.value.name,"onUpdate:modelValue":a[0]||(a[0]=t=>s.value.name=t),type:"text"},null,8,["modelValue"]),e.value.name?(r(),n("small",U,i(e.value.name),1)):u("",!0)]),o("div",M,[N,d(m,{id:"schoolID",modelValue:s.value.schoolID,"onUpdate:modelValue":a[1]||(a[1]=t=>s.value.schoolID=t),type:"text"},null,8,["modelValue"]),e.value.schoolID?(r(),n("small",R,i(e.value.schoolID),1)):u("",!0)]),o("div",C,[P,d(m,{id:"email",modelValue:s.value.email,"onUpdate:modelValue":a[2]||(a[2]=t=>s.value.email=t),type:"text"},null,8,["modelValue"]),e.value.email?(r(),n("small",S,i(e.value.email),1)):u("",!0)]),o("div",T,[A,d(h,{modelValue:s.value.password,"onUpdate:modelValue":a[3]||(a[3]=t=>s.value.password=t),feedback:!1,variant:"filled",label:"비밀번호를 입력하세요"},null,8,["modelValue"]),e.value.password?(r(),n("small",E,i(e.value.password),1)):u("",!0)]),d(w,{label:"확인",class:"w-full p-3 text-xl",type:"submit"})],32),l.errorMessage?(r(),n("div",F,i(l.errorMessage),1)):u("",!0)])])])}}};export{q as default};
