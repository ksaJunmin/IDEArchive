import{u as L,r,o as S,a as c,b as a,c as i,d as e,e as d,w as _,F as h,g as y,n as B,t as s,_ as F}from"./index-00f62c0d.js";import{R as T}from"./RequestService-aec1fcca.js";const K=e("h3",null,"해줘요 게시판",-1),$={class:"grid"},I={class:"col-12"},N={class:"card"},U={class:"my-2"},z={class:"grid grid-nogutter"},A={class:"col-6 text-left"},E={class:"col-6 text-right"},M={class:"grid grid-nogutter"},P=["onClick"],G={class:"flex flex-column justify-content-between flex-1"},H={class:"flex flex-row justify-content-between align-items-start gap-2"},J={class:"min-w-0"},Q={class:"text-lg font-medium text-900 mt-2 ellipsis"},W={class:"font-medium text-secondary text-sm ellipsis"},X={class:"surface-100 p-1",style:{"border-radius":"30px"}},Y={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Z={class:"text-900 font-medium text-sm"},ee=e("i",{class:"pi pi-thumbs-up"},null,-1),te={class:"flex flex-row justify-content-between align-items-start mt-4"},se={class:"text-sm text-gray-500"},oe={key:0},le={key:1},ne={class:"grid grid-nogutter"},ae=["onClick"],ie={class:"flex flex-row justify-content-between align-items-start gap-2"},de={class:"min-w-0"},re={class:"text-lg font-medium text-900 mt-2 ellipsis"},ce={class:"font-medium text-secondary text-sm ellipsis"},ue={class:"surface-100 p-1",style:{"border-radius":"30px"}},_e={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},pe={class:"text-900 font-medium text-sm"},ve=e("i",{class:"pi pi-thumbs-up"},null,-1),xe={class:"flex flex-row justify-content-between align-items-start mt-4"},he={class:"text-sm text-gray-500"},me={key:0},fe={key:1},we={__name:"boardRequest",setup(ge){const m=L(),f=r(null),p=r("list"),v=r(-1),x=r("_id"),b=r([{label:"최신순",value:"!date"},{label:"오래된 순",value:"date"},{label:"추천 높은 순",value:"!like"},{label:"추천 낮은 순",value:"like"}]),w=new T;S(()=>{w.getRequests().then(o=>{f.value=o})});const k=o=>{const l=o.value.value,u=o.value;l.indexOf("!")===0?(v.value=-1,x.value=l.substring(1,l.length),sortKey.value=u):(v.value=1,x.value=l,sortKey.value=u)},V=o=>{m.push("/request/"+o)},D=()=>{m.push("/request/add")};return(o,l)=>{const u=c("Button"),C=c("Toolbar"),q=c("Dropdown"),R=c("DataViewLayoutOptions"),j=c("DataView");return a(),i(h,null,[K,e("div",$,[e("div",I,[e("div",N,[d(C,{class:"mb-4"},{start:_(()=>[e("div",U,[d(u,{label:"글쓰기",icon:"pi pi-plus",class:"mr-2",severity:"success",onClick:D})])]),_:1}),d(j,{value:f.value,layout:p.value,paginator:!0,rows:9,sortOrder:v.value,sortField:x.value},{header:_(()=>[e("div",z,[e("div",A,[d(q,{modelValue:o.sortKey,"onUpdate:modelValue":l[0]||(l[0]=n=>o.sortKey=n),options:b.value,optionLabel:"label",placeholder:"최신순",onChange:l[1]||(l[1]=n=>k(n))},null,8,["modelValue","options"])]),e("div",E,[d(R,{modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=n=>p.value=n)},null,8,["modelValue"])])])]),list:_(n=>[e("div",M,[(a(!0),i(h,null,y(n.items,(t,g)=>(a(),i("div",{key:t._id,class:"col-12"},[e("div",{class:B(["flex flex-column p-4 gap-3 cursor-pointer",{"border-top-1 surface-border":g!==0}]),onClick:O=>V(t._id)},[e("div",G,[e("div",H,[e("div",J,[e("div",Q,s(t.title),1),e("div",W,s(t.content),1)]),e("div",X,[e("div",Y,[e("div",Z,s(t.like),1),ee])])]),e("div",te,[e("div",se,s(new Date(t.date).toLocaleString()),1),t.author?(a(),i("div",oe,s(t.author.schoolID)+" "+s(t.author.name),1)):(a(),i("div",le," 옛날 글 "))])])],10,P)]))),128))])]),grid:_(n=>[e("div",ne,[(a(!0),i(h,null,y(n.items,(t,g)=>(a(),i("div",{key:o._id,class:"col-12 sm:col-6 md:col-4 p-2"},[e("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:O=>o.goToPost(t._id)},[e("div",null,[e("div",ie,[e("div",de,[e("div",re,s(t.title),1),e("div",ce,s(t.content),1)]),e("div",null,[e("div",ue,[e("div",_e,[e("div",pe,s(t.like),1),ve])])])]),e("div",xe,[e("div",he,s(new Date(t.date).toLocaleString()),1),t.author?(a(),i("div",me,s(t.author.schoolID)+" "+s(t.author.name),1)):(a(),i("div",fe," 옛날 글 "))])])],8,ae)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),d(F,{simple:""})],64)}}};export{we as default};