import{u as R,r as c,o as B,a as u,b as n,c as i,e,d as r,w as p,F as b,g as w,n as T,t as a,i as K}from"./index-b933d539.js";import{R as U}from"./RequestService-54d84e17.js";const $=e("h3",null,"해줘요 게시판",-1),I={class:"grid"},N={class:"col-12"},P={class:"card"},z={class:"my-2"},A={class:"grid grid-nogutter"},E={class:"col-6 text-left"},M={class:"col-6 text-right"},G={class:"grid grid-nogutter"},H=["onClick"],J={class:"flex flex-column justify-content-between flex-1"},Q={class:"flex flex-row justify-content-between align-items-start gap-2"},W={class:"min-w-0"},X={class:"text-lg font-medium text-900 mt-2 ellipsis"},Y={class:"font-medium text-secondary text-sm ellipsis"},Z={class:"surface-100 p-1",style:{"border-radius":"30px"}},ee={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},te={class:"text-900 font-medium text-sm"},se=e("i",{class:"pi pi-thumbs-up"},null,-1),oe={class:"flex flex-row justify-content-between align-items-start mt-4"},le={class:"text-sm text-gray-500"},ae={key:0},ne={key:1},ie={class:"grid grid-nogutter"},de=["onClick"],re={class:"flex flex-row justify-content-between align-items-start gap-2"},ce={class:"min-w-0"},ue={class:"text-lg font-medium text-900 mt-2 ellipsis"},_e={class:"font-medium text-secondary text-sm ellipsis"},pe={class:"surface-100 p-1",style:{"border-radius":"30px"}},ve={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},xe={class:"text-900 font-medium text-sm"},me=e("i",{class:"pi pi-thumbs-up"},null,-1),he={class:"flex flex-row justify-content-between align-items-start mt-4"},be={class:"text-sm text-gray-500"},ge={key:0},fe={key:1},Ve={__name:"3",setup(ye){const g=R(),_=c(null),v=c("list"),x=c(-1),m=c("_id"),k=c([{label:"최신순",value:"!date"},{label:"오래된 순",value:"date"},{label:"추천 높은 순",value:"!like"},{label:"추천 낮은 순",value:"like"}]),V=c([{label:"전체",value:"전체"},{label:"수학",value:"수학"},{label:"화학",value:"화학"},{label:"정보",value:"정보"},{label:"생물",value:"생물"},{label:"물리",value:"물리"},{label:"지구과학",value:"지구과학"},{label:"인문",value:"인문"},{label:"기타",value:"기타"}]),S=new U;B(()=>{S.getRequests().then(o=>{_.value=o})});const j=o=>{const t=o.value.value,d=o.value;t.indexOf("!")===0?(x.value=-1,m.value=t.substring(1,t.length),sortKey.value=d):(x.value=1,m.value=t,sortKey.value=d)},C=o=>{const t=o.value.value;postService.getPosts().then(d=>{t==="전체"?_.value=d:_.value=d.filter(h=>h.category===t)})},D=o=>{g.push("/request/"+o)},q=()=>{g.push("/requestForm")};return(o,t)=>{const d=u("Button"),h=u("Toolbar"),f=u("Dropdown"),L=u("DataViewLayoutOptions"),O=u("DataView");return n(),i(b,null,[$,e("div",I,[e("div",N,[e("div",P,[r(h,{class:"mb-4"},{start:p(()=>[e("div",z,[r(d,{label:"글쓰기",icon:"pi pi-plus",class:"mr-2",severity:"success",onClick:q})])]),_:1}),r(O,{value:_.value,layout:v.value,paginator:!0,rows:9,sortOrder:x.value,sortField:m.value},{header:p(()=>[e("div",A,[e("div",E,[r(f,{modelValue:o.sortKey,"onUpdate:modelValue":t[0]||(t[0]=l=>o.sortKey=l),options:k.value,optionLabel:"label",placeholder:"최신순",onChange:t[1]||(t[1]=l=>j(l))},null,8,["modelValue","options"]),r(f,{modelValue:o.selectedSubject,"onUpdate:modelValue":t[2]||(t[2]=l=>o.selectedSubject=l),options:V.value,optionLabel:"label",placeholder:"전체",onChange:t[3]||(t[3]=l=>C(l))},null,8,["modelValue","options"])]),e("div",M,[r(L,{modelValue:v.value,"onUpdate:modelValue":t[4]||(t[4]=l=>v.value=l)},null,8,["modelValue"])])])]),list:p(l=>[e("div",G,[(n(!0),i(b,null,w(l.items,(s,y)=>(n(),i("div",{key:s._id,class:"col-12"},[e("div",{class:T(["flex flex-column p-4 gap-3 cursor-pointer",{"border-top-1 surface-border":y!==0}]),onClick:F=>D(s._id)},[e("div",J,[e("div",Q,[e("div",W,[e("div",X,a(s.title),1),e("div",Y,a(s.content),1)]),e("div",Z,[e("div",ee,[e("div",te,a(s.like),1),se])])]),e("div",oe,[e("div",le,a(new Date(s.date).toLocaleString()),1),s.author?(n(),i("div",ae,a(s.author.schoolID)+" "+a(s.author.name),1)):(n(),i("div",ne," 옛날 글 "))])])],10,H)]))),128))])]),grid:p(l=>[e("div",ie,[(n(!0),i(b,null,w(l.items,(s,y)=>(n(),i("div",{key:o._id,class:"col-12 sm:col-6 md:col-4 p-2"},[e("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:F=>o.goToPost(s._id)},[e("div",null,[e("div",re,[e("div",ce,[e("div",ue,a(s.title),1),e("div",_e,a(s.content),1)]),e("div",null,[e("div",pe,[e("div",ve,[e("div",xe,a(s.like),1),me])])])]),e("div",he,[e("div",be,a(new Date(s.date).toLocaleString()),1),s.author?(n(),i("div",ge,a(s.author.schoolID)+" "+a(s.author.name),1)):(n(),i("div",fe," 옛날 글 "))])])],8,de)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),r(K,{simple:""})],64)}}};export{Ve as default};
