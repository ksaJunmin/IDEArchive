import{_ as A,k as U,r as u,o as j,a as k,b as s,c as a,e,t as o,d as m,F as D,g as I,l as L,v as E,m as V,f as P,p as F,h as M}from"./index-ea7af0e3.js";import{P as q}from"./PostService-b4e04818.js";import{a as C}from"./axios-9cbf0d09.js";const b="https://port-0-idearchive-ss7z32llwmxnho4.sel5.cloudtype.app:3000";class G{async fetchComments(l){return(await C.get(`${b}/comments/${l}`)).data}async addComment(l,c,p){return(await C.post(`${b}/comments/${l}`,{content:c},{headers:{Authorization:`Bearer ${p}`}})).data}async addReply(l,c,p){return(await C.post(`${b}/comments/${l}/reply`,{content:c},{headers:{Authorization:`Bearer ${p}`}})).data}}const y=_=>(F("data-v-c0614607"),_=_(),M(),_),H={class:"grid"},J={class:"col-12"},K={class:"card"},O={key:0},Q={class:"flex flex-row gap-2 mt-4 align-items-center"},W={class:"text-gray-500"},X={class:"surface-100 p-1",style:{"border-radius":"30px"}},Y={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Z={class:"text-900 font-medium text-sm"},ee=y(()=>e("i",{class:"pi pi-thumbs-up"},null,-1)),te={key:0},oe={key:1},se={class:"font-medium"},ae={class:"flex flex-column mt-4 align-items-center justify-center"},ne={class:"flex gap-2"},re=y(()=>e("div",{class:"text-gray-500"},"댓글 0",-1)),le={class:"flex gap-2"},ce=y(()=>e("h3",null,".",-1)),ie=y(()=>e("h3",null,"댓글",-1)),de={key:0},ue=["onUpdate:modelValue"],_e=["onClick"],pe={key:0},ve={key:1},he=y(()=>e("p",null,"로그인 후 댓글을 작성할 수 있습니다.",-1)),me=[he],ye={__name:"post",setup(_){const l=new q,c=new G,p=U(),d=u(p.params.postId),n=u(null),x=localStorage.getItem("token"),R=async()=>{try{const t=await l.updateLike(x,d.value);n.value=t}catch(t){console.error("Error updating like:",t)}},S=u([]),v=u(""),h=u({}),f=u(!1),w=async()=>{try{S.value=await c.fetchComments(d.value)}catch(t){console.error("Error fetching comments:",t)}},z=async()=>{if(v.value)try{await c.addComment(d.value,v.value,x),v.value="",await w()}catch(t){console.error("Error adding comment:",t)}},N=async t=>{if(h.value[t])try{await c.addReply(t,h.value[t],x),h.value[t]="",await w()}catch(g){console.error("Error adding reply:",g)}};return j(async()=>{try{const t=await l.getPostById(d.value);n.value=t}catch(t){console.error("Error fetching post:",t)}try{await w(),f.value=!!x}catch(t){console.error("Error fetching comments:",t)}}),(t,g)=>{const $=k("Divider"),B=k("Button"),T=k("Textarea");return s(),a("div",H,[e("div",J,[e("div",K,[n.value?(s(),a("div",O,[e("h2",null,o(n.value.title),1),e("div",null,[e("div",Q,[e("div",W,o(new Date(n.value.date).toLocaleString()),1),e("div",X,[e("div",Y,[e("div",Z,o(n.value.like),1),ee])]),n.value.author?(s(),a("div",te,o(n.value.author.schoolID)+" "+o(n.value.author.name),1)):(s(),a("div",oe," 옛날 글 "))])]),m($),e("div",se,o(n.value.content),1),e("div",null,[e("div",ae,[e("div",ne,[m(B,{label:t.isLiked?"좋아요 취소":"좋아요",icon:"pi pi-thumbs-up",onClick:R},null,8,["label"])])])]),m($),re,e("div",le,[m(T,{placeholder:"댓글을 입력하세요",autoResize:!0,rows:"1",cols:"50"}),m(B,{label:"입력",class:"mr-10 mb-10"})]),e("div",null,[ce,ie,e("div",null,[(s(!0),a(D,null,I(S.value,r=>(s(),a("div",{key:r._id},[e("p",null,[e("strong",null,o(r.author.name)+":",1),P(" "+o(r.content),1)]),e("small",null,o(new Date(r.date).toLocaleString()),1),(s(!0),a(D,null,I(r.replies,i=>(s(),a("div",{key:i._id,class:"reply"},[e("p",null,[e("strong",null,o(i.author.name)+":",1),P(" "+o(i.content),1)]),e("small",null,o(new Date(i.date).toLocaleString()),1)]))),128)),f.value?(s(),a("div",de,[L(e("textarea",{"onUpdate:modelValue":i=>h.value[r._id]=i,placeholder:"답글을 입력하세요"},null,8,ue),[[E,h.value[r._id]]]),e("button",{onClick:i=>N(r._id)},"답글 추가",8,_e)])):V("",!0)]))),128))]),f.value?(s(),a("div",pe,[L(e("textarea",{"onUpdate:modelValue":g[0]||(g[0]=r=>v.value=r),placeholder:"댓글을 입력하세요"},null,512),[[E,v.value]]),e("button",{onClick:z},"댓글 추가")])):(s(),a("div",ve,me))])])):V("",!0)])])])}}},we=A(ye,[["__scopeId","data-v-c0614607"]]);export{we as default};
