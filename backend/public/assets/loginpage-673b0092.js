import{v as b,u as h,r,H as w,k as y,b as n,c as k,d as V,e,f as o,F as C,_ as I,y as B,z as S}from"./index-c8331373.js";const l=a=>(B("data-v-68f266aa"),a=a(),S(),a),P={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},T={class:"flex flex-column align-items-center justify-content-center"},U=["src"],j={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},$={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},E=l(()=>e("div",{class:"text-center"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"아이디어 아카이브 로그인"),e("span",{class:"text-600 font-medium"},"계속하려면 로그인하세요")],-1)),F=l(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),M=l(()=>e("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),N={class:"flex align-items-center justify-content-between mb-5 gap-5"},z={class:"flex align-items-center"},H=l(()=>e("label",{for:"rememberme1"},"로그인 유지",-1)),L=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"비밀번호를 잊으셨나요?",-1)),R={__name:"loginpage",setup(a){const{layoutConfig:m}=h(),d=r(""),c=r(""),i=r(!1),u=w(()=>`/layout/images/${m.darkTheme.value?"logo-white":"logo-dark"}.svg`),p=y(),_=()=>{p.push("/")};return(q,s)=>{const f=n("InputText"),x=n("Password"),g=n("Checkbox"),v=n("Button");return k(),V(C,null,[e("div",P,[e("div",T,[e("img",{src:u.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,U),e("div",j,[e("div",$,[E,e("div",null,[F,o(f,{id:"email1",type:"text",placeholder:"example@ksa.hs.kr",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=t=>d.value=t)},null,8,["modelValue"]),M,o(x,{id:"password1",modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=t=>c.value=t),feedback:!1,placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),e("div",N,[e("div",z,[o(g,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=t=>i.value=t),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),H]),L]),o(v,{label:"로그인",class:"w-full p-3 text-xl",onClick:s[3]||(s[3]=t=>_())})])])])])]),o(I,{simple:""})],64)}}},D=b(R,[["__scopeId","data-v-68f266aa"]]);export{D as default};
