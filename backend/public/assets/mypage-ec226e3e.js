import{v as f,r as g,o as m,b as c,c as v,d as y,e as s,f as a,g as d,i as e,t as i,x,y as b,z as w}from"./index-8ee00ae0.js";const B="/assets/profile-db3797af.png";const t=l=>(b("data-v-6968e8cd"),l=l(),w(),l),I={class:"grid"},k={class:"col-12 md:col-3"},C={class:"flex align-items-center justify-content-between mb-0"},P=t(()=>s("h5",null,[s("strong",null,"나의 프로필")],-1)),S=t(()=>s("img",{src:B,alt:"Image",style:{"max-width":"100%",height:"auto"}},null,-1)),M={class:"col-12 md:col-9"},N={class:"card p-fluid"},V=t(()=>s("h5",null,"기본정보",-1)),D={class:"field"},E={for:"name",class:"large-font"},z={class:"field"},U={for:"schoolID",class:"large-font"},j={class:"field"},A={for:"email",class:"large-font"},R=t(()=>s("div",{class:"col-12 md:col-12"},[s("div",{class:"card p-fluid"},[s("div",{class:"stats"},[s("div",null,[e("내가 작성한 글의 수: "),s("strong",null,"10")]),s("div",null,[e("내가 의뢰한 수: "),s("strong",null,"5")])])])],-1)),T={class:"col-12"},$={class:"card"},q=t(()=>s("h5",null,[e("나의 포인트: "),s("strong",null,"500"),e(" point")],-1)),F={class:"grid"},G={class:"col"},H={__name:"mypage",setup(l){const n=g(null);return m(async()=>{try{const o=localStorage.getItem("token");if(!o)throw new Error("No token found");const r=await x.get("http://localhost:3000/users/myprofile",{headers:{Authorization:`Bearer ${o}`}});n.value=r.data}catch(o){console.error("Error fetching user profile:",o)}}),(o,r)=>{const _=c("Button"),u=c("Menu"),h=c("Card"),p=c("ProgressBar");return v(),y("div",I,[s("div",k,[a(h,null,{title:d(()=>[s("div",C,[P,a(_,{icon:"pi pi-plus",class:"p-button-text",onClick:o.toggle},null,8,["onClick"])]),a(u,{id:"config_menu",ref:"menuRef",model:o.cardMenu,popup:!0},null,8,["model"])]),content:d(()=>[S]),_:1})]),s("div",M,[s("div",N,[V,s("div",null,[s("div",D,[s("label",E,[e("이름: "),s("strong",null,i(n.value.name),1)])]),s("div",z,[s("label",U,[e("학번: "),s("strong",null,i(n.value.schoolID),1)])]),s("div",j,[s("label",A,[e("이메일: "),s("strong",null,i(n.value.email),1)])])])])]),R,s("div",T,[s("div",$,[q,s("div",F,[s("div",G,[a(p,{value:50,showValue:!1})])])])])])}}},L=f(H,[["__scopeId","data-v-6968e8cd"]]);export{L as default};
