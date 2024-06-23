import{_ as b,s as h,r as t,m as y,u as k,a as c,b as S,c as I,d as e,l as V,e as d,p as B,k as U}from"./index-67ebd75a.js";import{U as E}from"./UserService-595f47bb.js";const i=o=>(B("data-v-02261ec5"),o=o(),U(),o),P={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},C={class:"flex flex-column align-items-center justify-content-center"},T=["src"],j={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},M={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},N=i(()=>e("div",{class:"text-center"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"아이디어 아카이브 로그인"),e("span",{class:"text-600 font-medium"},"계속하려면 로그인하세요")],-1)),L=i(()=>e("label",{for:"email",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),R=i(()=>e("label",{for:"password",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),$={__name:"login",setup(o){const u=new E,{layoutConfig:m}=h(),l=t(""),a=t("");t(!1);const p=y(()=>`/layout/images/${m.darkTheme.value?"logo-white":"logo-dark"}.svg`),_=k(),f=t(null),g=async()=>{try{const s=(await u.login(l.value,a.value)).token;localStorage.setItem("token",s),_.push("/")}catch(n){f.value="Invalid email or password",console.error("Error logging in:",n)}};return(n,s)=>{const x=c("InputText"),v=c("Password"),w=c("Button");return S(),I("div",P,[e("div",C,[e("img",{src:p.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,T),e("div",j,[e("div",M,[N,e("form",{onSubmit:V(g,["prevent"])},[L,d(x,{id:"email",type:"email",placeholder:"example@ksa.hs.kr",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r)},null,8,["modelValue"]),R,d(v,{type:"password",id:"password",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r),feedback:!1,placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),d(w,{label:"로그인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])])}}},A=b($,[["__scopeId","data-v-02261ec5"]]);export{A as default};
