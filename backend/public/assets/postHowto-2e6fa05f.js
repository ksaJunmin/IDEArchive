import{h as C,i as A,j as H,r as _,o as T,a as S,b as o,c as a,d as e,t as s,e as i,F as D,g as E,w as P,k as V,f as g,p as U,l as z}from"./index-3aea470c.js";import{P as F}from"./PostService-71fc9cf5.js";import{_ as M}from"./MathRenderer-d20d46bc.js";const b="http://localhost:3000/comments";class q{async fetchComments(r){return(await C.get(`${b}/${r}`)).data}async addComment(r,c,v){return(await C.post(`${b}/${r}`,{content:c},{headers:{Authorization:`Bearer ${v}`}})).data}async addReply(r,c,v){return(await C.post(`${b}/${r}/reply`,{content:c},{headers:{Authorization:`Bearer ${v}`}})).data}}const $=p=>(U("data-v-1ff090c6"),p=p(),z(),p),G={class:"grid"},J={class:"col-12"},K={class:"card"},O={key:0},Q={class:"flex flex-row gap-2 mt-4 align-items-center"},W={class:"text-gray-500"},X={class:"surface-100 p-1",style:{"border-radius":"30px"}},Y={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Z={class:"text-900 font-medium text-sm"},ee=$(()=>e("i",{class:"pi pi-thumbs-up"},null,-1)),te={key:0,class:"font-medium"},oe={key:1,class:"font-medium"},ae={class:"flex flex-column mt-4 align-items-center justify-center"},se={class:"flex gap-2"},ne=$(()=>e("h3",null,"댓글",-1)),le={key:0},re={key:0},ce={key:0},ie={key:1},de=$(()=>e("p",null,"로그인 후 댓글을 작성할 수 있습니다.",-1)),ue=[de],_e={__name:"postHowto",setup(p){const r=new F,c=new q,v=H(),u=_(v.params.postId),n=_(null),f=localStorage.getItem("token"),R=async()=>{try{const t=await r.updateLike(f,u.value);n.value=t}catch(t){console.error("Error updating like:",t)}},B=_([]),h=_(""),m=_({}),x=_(!1),w=async()=>{try{B.value=await c.fetchComments(u.value)}catch(t){console.error("Error fetching comments:",t)}},N=async()=>{if(h.value)try{await c.addComment(u.value,h.value,f),h.value="",await w()}catch(t){console.error("Error adding comment:",t)}},j=async t=>{if(m.value[t])try{await c.addReply(t,m.value[t],f),m.value[t]="",await w()}catch(y){console.error("Error adding reply:",y)}};return T(async()=>{try{const t=await r.getPostById(u.value);n.value=t}catch(t){console.error("Error fetching post:",t)}try{await w(),x.value=!!f}catch(t){console.error("Error fetching comments:",t)}}),(t,y)=>{const I=S("Divider"),k=S("Button"),L=S("Textarea");return o(),a("div",G,[e("div",J,[e("div",K,[n.value?(o(),a("div",O,[e("h2",null,s(n.value.title),1),e("div",null,[e("div",Q,[e("div",W,s(new Date(n.value.date).toLocaleString()),1),e("div",X,[e("div",Y,[e("div",Z,s(n.value.like),1),ee])])]),e("div",null,s(n.value.author.schoolID)+" "+s(n.value.author.name),1)]),i(I),n.value.islatex==1?(o(),a("div",te,[i(M,{content:n.value.content},null,8,["content"])])):(o(),a("div",oe,s(n.value.content),1)),e("div",null,[e("div",ae,[e("div",se,[i(k,{label:t.isLiked?"좋아요 취소":"좋아요",icon:"pi pi-thumbs-up",onClick:R},null,8,["label"])])])]),i(I),e("div",null,[ne,e("div",null,[(o(!0),a(D,null,E(B.value,l=>(o(),a("div",{key:l._id},[l.isReply?V("",!0):(o(),a("div",le,[e("p",null,[e("strong",null,s(l.author.name)+":",1),g(" "+s(l.content),1)]),e("small",null,s(new Date(l.date).toLocaleString()),1),(o(!0),a(D,null,E(l.replies,d=>(o(),a("div",{key:d._id,class:"reply"},[e("p",null,[e("strong",null,s(d.author.name)+":",1),g(" "+s(d.content),1)]),e("small",null,s(new Date(d.date).toLocaleString()),1)]))),128)),x.value?(o(),a("div",re,[i(L,{modelValue:m.value[l._id],"onUpdate:modelValue":d=>m.value[l._id]=d,placeholder:"답글을 입력하세요"},null,8,["modelValue","onUpdate:modelValue"]),i(k,{onClick:d=>j(l._id)},{default:P(()=>[g("답글 추가")]),_:2},1032,["onClick"])])):V("",!0)]))]))),128))]),x.value?(o(),a("div",ce,[i(L,{modelValue:h.value,"onUpdate:modelValue":y[0]||(y[0]=l=>h.value=l),placeholder:"댓글을 입력하세요"},null,8,["modelValue"]),i(k,{onClick:N},{default:P(()=>[g("댓글 추가")]),_:1})])):(o(),a("div",ie,ue))])])):V("",!0)])])])}}},me=A(_e,[["__scopeId","data-v-1ff090c6"]]);export{me as default};
