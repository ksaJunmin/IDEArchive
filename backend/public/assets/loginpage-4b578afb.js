import{_ as w,s as y,r as n,x as k,u as V,a as r,b as I,c as S,e,j as B,d as t,F as C,i as P,p as j,h as E}from"./index-6eee48c1.js";import{a as U}from"./axios-9cbf0d09.js";const l=a=>(j("data-v-546130f4"),a=a(),E(),a),T={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},F={class:"flex flex-column align-items-center justify-content-center"},M=["src"],N={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},$={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},A=l(()=>e("div",{class:"text-center"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"아이디어 아카이브 로그인"),e("span",{class:"text-600 font-medium"},"계속하려면 로그인하세요")],-1)),L=l(()=>e("label",{for:"email",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),R=l(()=>e("label",{for:"password",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),q={class:"flex align-items-center justify-content-between mb-5 gap-5"},z={class:"flex align-items-center"},D=l(()=>e("label",{for:"rememberme1"},"로그인 유지",-1)),G=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"비밀번호를 잊으셨나요?",-1)),H={__name:"loginpage",setup(a){const{layoutConfig:u}=y(),i=n(""),c=n(""),m=n(!1),p=k(()=>`/layout/images/${u.darkTheme.value?"logo-white":"logo-dark"}.svg`),_=V(),f=n(null),g=async()=>{try{const s=(await U.post(API+"/users/login",{email:i.value,password:c.value})).data.token;localStorage.setItem("token",s),_.push("/")}catch(d){f.value="Invalid email or password",console.error("Error logging in:",d)}};return(d,s)=>{const x=r("InputText"),v=r("Password"),b=r("Checkbox"),h=r("Button");return I(),S(C,null,[e("div",T,[e("div",F,[e("img",{src:p.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,M),e("div",N,[e("div",$,[A,e("form",{onSubmit:B(g,["prevent"])},[L,t(x,{id:"email",type:"email",placeholder:"example@ksa.hs.kr",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=o=>i.value=o)},null,8,["modelValue"]),R,t(v,{type:"password",id:"password",modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=o=>c.value=o),feedback:!1,placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),e("div",q,[e("div",z,[t(b,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),D]),G]),t(h,{label:"로그인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])]),t(P,{simple:""})],64)}}},O=w(H,[["__scopeId","data-v-546130f4"]]);export{O as default};
