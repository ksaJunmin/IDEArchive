import{U as f}from"./UserService-058f12ab.js";import{i as y,r as k,o as b,a as i,b as l,c as n,d as s,e as d,w as u,f as e,t as _,p as w,l as I}from"./index-3aea470c.js";const x="/assets/profile-db3797af.png";const r=c=>(w("data-v-3a688813"),c=c(),I(),c),B={class:"grid"},S={class:"col-12 md:col-3"},C={class:"flex align-items-center justify-content-between mb-0"},D=r(()=>s("h5",null,[s("strong",null,"나의 프로필")],-1)),M=r(()=>s("img",{src:x,alt:"Image",style:{"max-width":"100%",height:"auto"}},null,-1)),N={class:"col-12 md:col-9"},P={class:"card p-fluid"},V=r(()=>s("h5",null,"기본정보",-1)),U={key:0},E={class:"field"},L={for:"name",class:"large-font"},j={class:"field"},R={for:"schoolID",class:"large-font"},T={class:"field"},q={for:"email",class:"large-font"},z={key:1},A=r(()=>s("div",{class:"col-12 md:col-12"},[s("div",{class:"card p-fluid"},[s("div",{class:"stats"},[s("div",null,[e("내가 작성한 글의 수: "),s("strong",null,"10")]),s("div",null,[e("내가 의뢰한 수: "),s("strong",null,"5")])])])],-1)),F={class:"col-12"},G={class:"card"},H={key:0},J={class:"grid"},K={class:"col"},O={key:1},Q={__name:"mypage",setup(c){const o=k(null),p=new f;return b(async()=>{const t=localStorage.getItem("token");if(t)try{const a=await p.fetchUser(t);o.value=a}catch(a){console.error("Error fetching user:",a)}else console.error("No token found")}),(t,a)=>{const h=i("Button"),v=i("Menu"),g=i("Card"),m=i("ProgressBar");return l(),n("div",B,[s("div",S,[d(g,null,{title:u(()=>[s("div",C,[D,d(h,{icon:"pi pi-plus",class:"p-button-text",onClick:t.toggle},null,8,["onClick"])]),d(v,{id:"config_menu",ref:"menuRef",model:t.cardMenu,popup:!0},null,8,["model"])]),content:u(()=>[M]),_:1})]),s("div",N,[s("div",P,[V,o.value?(l(),n("div",U,[s("div",E,[s("label",L,[e("이름: "),s("strong",null,_(o.value.name),1)])]),s("div",j,[s("label",R,[e("학번: "),s("strong",null,_(o.value.schoolID),1)])]),s("div",T,[s("label",q,[e("이메일: "),s("strong",null,_(o.value.email),1)])])])):(l(),n("div",z," Loading... "))])]),A,s("div",F,[s("div",G,[o.value?(l(),n("div",H,[s("h5",null,[e("나의 포인트: "),s("strong",null,_(o.value.points),1),e(" point")]),s("div",J,[s("div",K,[d(m,{value:o.value.points/100,showValue:!1},null,8,["value"])])])])):(l(),n("div",O," Loading... "))])])])}}},Z=y(Q,[["__scopeId","data-v-3a688813"]]);export{Z as default};
