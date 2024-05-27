import{_ as y,s as k,r as n,q as V,u as S,a as r,b as I,c as U,e,k as B,d as t,F as C,i as E,p as P,h as j}from"./index-df1d3216.js";import{U as T}from"./UserService-27b84fac.js";const l=a=>(P("data-v-738096ed"),a=a(),j(),a),F={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},M={class:"flex flex-column align-items-center justify-content-center"},N=["src"],$={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},q={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},L=l(()=>e("div",{class:"text-center"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"아이디어 아카이브 로그인"),e("span",{class:"text-600 font-medium"},"계속하려면 로그인하세요")],-1)),R=l(()=>e("label",{for:"email",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),z=l(()=>e("label",{for:"password",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),A={class:"flex align-items-center justify-content-between mb-5 gap-5"},D={class:"flex align-items-center"},G=l(()=>e("label",{for:"rememberme1"},"로그인 유지",-1)),H=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"비밀번호를 잊으셨나요?",-1)),J={__name:"loginpage",setup(a){const u=new T,{layoutConfig:p}=k(),c=n(""),i=n(""),m=n(!1),_=V(()=>`/layout/images/${p.darkTheme.value?"logo-white":"logo-dark"}.svg`),g=S(),f=n(null),x=async()=>{try{const s=(await u.login(c.value,i.value)).token;localStorage.setItem("token",s),g.push("/")}catch(d){f.value="Invalid email or password",console.error("Error logging in:",d)}};return(d,s)=>{const v=r("InputText"),b=r("Password"),h=r("Checkbox"),w=r("Button");return I(),U(C,null,[e("div",F,[e("div",M,[e("img",{src:_.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,N),e("div",$,[e("div",q,[L,e("form",{onSubmit:B(x,["prevent"])},[R,t(v,{id:"email",type:"email",placeholder:"example@ksa.hs.kr",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=o=>c.value=o)},null,8,["modelValue"]),z,t(b,{type:"password",id:"password",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),feedback:!1,placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),e("div",A,[e("div",D,[t(h,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),G]),H]),t(w,{label:"로그인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])]),t(E,{simple:""})],64)}}},Q=y(J,[["__scopeId","data-v-738096ed"]]);export{Q as default};
