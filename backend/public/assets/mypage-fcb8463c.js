import{U as m}from"./UserService-b2241d62.js";import{_ as g,r as y,o as k,a as i,b as l,c as n,d as e,e as _,w as u,f as o,t,p as b,k as w}from"./index-04519f8d.js";const I="/assets/profile.png";const r=c=>(b("data-v-fced44b3"),c=c(),w(),c),x={class:"grid"},S={class:"col-12 md:col-3"},B=r(()=>e("div",{class:"flex align-items-center justify-content-between mb-0"},[e("h5",null,[e("strong",null,"나의 프로필")])],-1)),C=r(()=>e("img",{src:I,alt:"Image",style:{"max-width":"100%",height:"auto"}},null,-1)),D={class:"col-12 md:col-9"},M={class:"card p-fluid"},N=r(()=>e("h5",null,"기본정보",-1)),P={key:0},V={class:"field"},U={for:"name",class:"large-font"},E={class:"field"},L={for:"schoolID",class:"large-font"},R={class:"field"},j={for:"email",class:"large-font"},q={key:1},H={class:"col-12 md:col-12"},T={class:"card p-fluid"},z={class:"stats"},A={class:"col-12"},F={class:"card"},G={key:0},J={class:"grid"},K={class:"col"},O={key:1},Q={__name:"mypage",setup(c){const s=y(null),v=new m;return k(async()=>{const a=localStorage.getItem("token");if(a)try{const d=await v.fetchUser(a);s.value=d}catch(d){console.error("Error fetching user:",d)}else console.error("No token found")}),(a,d)=>{const h=i("Menu"),p=i("Card"),f=i("ProgressBar");return l(),n("div",x,[e("div",S,[_(p,null,{title:u(()=>[B,_(h,{id:"config_menu",ref:"menuRef",model:a.cardMenu,popup:!0},null,8,["model"])]),content:u(()=>[C]),_:1})]),e("div",D,[e("div",M,[N,s.value?(l(),n("div",P,[e("div",V,[e("label",U,[o("이름: "),e("strong",null,t(s.value.name),1)])]),e("div",E,[e("label",L,[o("학번: "),e("strong",null,t(s.value.schoolID),1)])]),e("div",R,[e("label",j,[o("이메일: "),e("strong",null,t(s.value.email),1)])])])):(l(),n("div",q," Loading... "))])]),e("div",H,[e("div",T,[e("div",z,[e("div",null,[o("'도와줘요'에 쓴 글 수: "),e("div",null,[e("strong",null,t(s.value.numHowto),1)])]),e("div",null,[o("'해줘요'에 쓴 글 수: "),e("div",null,[e("strong",null,t(s.value.numReq),1)])])])])]),e("div",A,[e("div",F,[s.value?(l(),n("div",G,[e("h5",null,[o("나의 포인트: "),e("strong",null,t(s.value.points),1),o(" point")]),e("div",J,[e("div",K,[_(f,{value:s.value.points/100,showValue:!1},null,8,["value"])])])])):(l(),n("div",O," Loading... "))])])])}}},Z=g(Q,[["__scopeId","data-v-fced44b3"]]);export{Z as default};