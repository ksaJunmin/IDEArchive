import{l as C,_ as A,m as T,r as _,o as U,a as b,b as o,c as a,e,t as n,d as i,F as D,g as E,w as P,j as S,f as g,p as z,h as F}from"./index-1e35e92b.js";import{P as M}from"./PostService-3b3208c7.js";import{_ as q}from"./MathRenderer-93ece093.js";const V="http://localhost:3000/comments";class G{async fetchComments(r){return(await C.get(`${V}/${r}`)).data}async addComment(r,c,v){return(await C.post(`${V}/${r}`,{content:c},{headers:{Authorization:`Bearer ${v}`}})).data}async addReply(r,c,v){return(await C.post(`${V}/${r}/reply`,{content:c},{headers:{Authorization:`Bearer ${v}`}})).data}}const $=p=>(z("data-v-b0ace38a"),p=p(),F(),p),H={class:"grid"},J={class:"col-12"},K={class:"card"},O={key:0},Q={class:"flex flex-row gap-2 mt-4 align-items-center"},W={class:"text-gray-500"},X={class:"surface-100 p-1",style:{"border-radius":"30px"}},Y={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Z={class:"text-900 font-medium text-sm"},ee=$(()=>e("i",{class:"pi pi-thumbs-up"},null,-1)),te={key:0},oe={key:1},ae={key:0,class:"font-medium"},se={key:1,class:"font-medium"},ne={class:"flex flex-column mt-4 align-items-center justify-center"},le={class:"flex gap-2"},re=$(()=>e("h3",null,"댓글",-1)),ce={key:0},ie={key:0},de={key:0},ue={key:1},_e=$(()=>e("p",null,"로그인 후 댓글을 작성할 수 있습니다.",-1)),pe=[_e],ve={__name:"post",setup(p){const r=new M,c=new G,v=T(),u=_(v.params.postId),s=_(null),y=localStorage.getItem("token"),R=async()=>{try{const t=await r.updateLike(y,u.value);s.value=t}catch(t){console.error("Error updating like:",t)}},B=_([]),h=_(""),m=_({}),x=_(!1),k=async()=>{try{B.value=await c.fetchComments(u.value)}catch(t){console.error("Error fetching comments:",t)}},N=async()=>{if(h.value)try{await c.addComment(u.value,h.value,y),h.value="",await k()}catch(t){console.error("Error adding comment:",t)}},j=async t=>{if(m.value[t])try{await c.addReply(t,m.value[t],y),m.value[t]="",await k()}catch(f){console.error("Error adding reply:",f)}};return U(async()=>{try{const t=await r.getPostById(u.value);s.value=t}catch(t){console.error("Error fetching post:",t)}try{await k(),x.value=!!y}catch(t){console.error("Error fetching comments:",t)}}),(t,f)=>{const I=b("Divider"),w=b("Button"),L=b("Textarea");return o(),a("div",H,[e("div",J,[e("div",K,[s.value?(o(),a("div",O,[e("h2",null,n(s.value.title),1),e("div",null,[e("div",Q,[e("div",W,n(new Date(s.value.date).toLocaleString()),1),e("div",X,[e("div",Y,[e("div",Z,n(s.value.like),1),ee])]),s.value.author?(o(),a("div",te,n(s.value.author.schoolID)+" "+n(s.value.author.name),1)):(o(),a("div",oe," 옛날 글 "))])]),i(I),s.value.islatex==1?(o(),a("div",ae,[i(q,{content:s.value.content},null,8,["content"])])):(o(),a("div",se,n(s.value.content),1)),e("div",null,[e("div",ne,[e("div",le,[i(w,{label:t.isLiked?"좋아요 취소":"좋아요",icon:"pi pi-thumbs-up",onClick:R},null,8,["label"])])])]),i(I),e("div",null,[re,e("div",null,[(o(!0),a(D,null,E(B.value,l=>(o(),a("div",{key:l._id},[l.isReply?S("",!0):(o(),a("div",ce,[e("p",null,[e("strong",null,n(l.author.name)+":",1),g(" "+n(l.content),1)]),e("small",null,n(new Date(l.date).toLocaleString()),1),(o(!0),a(D,null,E(l.replies,d=>(o(),a("div",{key:d._id,class:"reply"},[e("p",null,[e("strong",null,n(d.author.name)+":",1),g(" "+n(d.content),1)]),e("small",null,n(new Date(d.date).toLocaleString()),1)]))),128)),x.value?(o(),a("div",ie,[i(L,{modelValue:m.value[l._id],"onUpdate:modelValue":d=>m.value[l._id]=d,placeholder:"답글을 입력하세요"},null,8,["modelValue","onUpdate:modelValue"]),i(w,{onClick:d=>j(l._id)},{default:P(()=>[g("답글 추가")]),_:2},1032,["onClick"])])):S("",!0)]))]))),128))]),x.value?(o(),a("div",de,[i(L,{modelValue:h.value,"onUpdate:modelValue":f[0]||(f[0]=l=>h.value=l),placeholder:"댓글을 입력하세요"},null,8,["modelValue"]),i(w,{onClick:N},{default:P(()=>[g("댓글 추가")]),_:1})])):(o(),a("div",ue,pe))])])):S("",!0)])])])}}},fe=A(ve,[["__scopeId","data-v-b0ace38a"]]);export{fe as default};
