import{x as w,u as y,r as n,J as k,k as V,b as r,c as I,d as S,e,A as B,f as t,F as C,_ as E,y as P,z as U,l as j}from"./index-92666c68.js";const l=a=>(P("data-v-92185fea"),a=a(),U(),a),T={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},F={class:"flex flex-column align-items-center justify-content-center"},M=["src"],N={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},$={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},z=l(()=>e("div",{class:"text-center"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"아이디어 아카이브 로그인"),e("span",{class:"text-600 font-medium"},"계속하려면 로그인하세요")],-1)),A=l(()=>e("label",{for:"email",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),J=l(()=>e("label",{for:"password",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),L={class:"flex align-items-center justify-content-between mb-5 gap-5"},R={class:"flex align-items-center"},q=l(()=>e("label",{for:"rememberme1"},"로그인 유지",-1)),D=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"비밀번호를 잊으셨나요?",-1)),G={__name:"loginpage",setup(a){const{layoutConfig:u}=y(),c=n(""),i=n(""),m=n(!1),p=k(()=>`/layout/images/${u.darkTheme.value?"logo-white":"logo-dark"}.svg`),_=V(),f=n(null),g=async()=>{try{const s=(await j.post("http://localhost:3000/users/login",{email:c.value,password:i.value})).data.token;localStorage.setItem("token",s),_.push("/")}catch(d){f.value="Invalid email or password",console.error("Error logging in:",d)}};return(d,s)=>{const x=r("InputText"),v=r("Password"),b=r("Checkbox"),h=r("Button");return I(),S(C,null,[e("div",T,[e("div",F,[e("img",{src:p.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,M),e("div",N,[e("div",$,[z,e("form",{onSubmit:B(g,["prevent"])},[A,t(x,{id:"email",type:"email",placeholder:"example@ksa.hs.kr",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=o=>c.value=o)},null,8,["modelValue"]),J,t(v,{type:"password",id:"password",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),feedback:!1,placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),e("div",L,[e("div",R,[t(b,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),q]),D]),t(h,{label:"로그인",class:"w-full p-3 text-xl",type:"submit"})],32)])])])]),t(E,{simple:""})],64)}}},K=w(G,[["__scopeId","data-v-92185fea"]]);export{K as default};
