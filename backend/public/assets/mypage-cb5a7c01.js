import{v as g,r as m,o as h,x as b,b as s,c as x,d as y,e,f as o,g as d,h as B,y as I,z as k,i as f}from"./index-23897971.js";const w="/assets/profile-db3797af.png";const l=a=>(I("data-v-fe2f2f5c"),a=a(),k(),a),C={class:"grid"},M={class:"col-12 md:col-3"},V={class:"flex align-items-center justify-content-between mb-0"},N=l(()=>e("h5",null,[e("strong",null,"나의 프로필")],-1)),P=l(()=>e("img",{src:w,alt:"Image",style:{"max-width":"100%",height:"auto"}},null,-1)),S=B('<div class="col-12 md:col-9" data-v-fe2f2f5c><div class="card p-fluid" data-v-fe2f2f5c><h5 data-v-fe2f2f5c>기본정보</h5><div class="field" data-v-fe2f2f5c><label for="name1" class="large-font" data-v-fe2f2f5c>이름: <strong data-v-fe2f2f5c>홍정우</strong></label></div><div class="field" data-v-fe2f2f5c><label for="email1" class="large-font" data-v-fe2f2f5c>학번: <strong data-v-fe2f2f5c>23-129</strong></label></div><div class="field" data-v-fe2f2f5c><label for="age1" class="large-font" data-v-fe2f2f5c>이메일: <strong data-v-fe2f2f5c>23-129@ksa.hs.kr</strong></label></div></div></div><div class="col-12 md:col-12" data-v-fe2f2f5c><div class="card p-fluid" data-v-fe2f2f5c><div class="stats" data-v-fe2f2f5c><div data-v-fe2f2f5c>내가 작성한 글의 수: <strong data-v-fe2f2f5c>10</strong></div><div data-v-fe2f2f5c>내가 의뢰한 수: <strong data-v-fe2f2f5c>5</strong></div></div></div></div>',2),j={class:"col-12"},z={class:"card"},E=l(()=>e("h5",null,[f("나의 포인트: "),e("strong",null,"500"),f(" point")],-1)),R={class:"grid"},T={class:"col"},U={__name:"mypage",setup(a){const n=m(0);let c=null;const i=()=>{c=setInterval(()=>{let t=n.value+Math.floor(Math.random()*10)+1;t>=100&&(t=100),n.value=t},2e3)},r=()=>{clearInterval(c),c=null};return h(()=>{i()}),b(()=>{r()}),(t,q)=>{const v=s("Button"),_=s("Menu"),u=s("Card"),p=s("ProgressBar");return x(),y("div",C,[e("div",M,[o(u,null,{title:d(()=>[e("div",V,[N,o(v,{icon:"pi pi-plus",class:"p-button-text",onClick:t.toggle},null,8,["onClick"])]),o(_,{id:"config_menu",ref:"menuRef",model:t.cardMenu,popup:!0},null,8,["model"])]),content:d(()=>[P]),_:1})]),S,e("div",j,[e("div",z,[E,e("div",R,[e("div",T,[o(p,{value:50,showValue:!1})])])])])])}}},D=g(U,[["__scopeId","data-v-fe2f2f5c"]]);export{D as default};
