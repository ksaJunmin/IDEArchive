import{_ as F,u as P,r as _,a as p,b,c as g,e,k as C,d as a,F as h,g as T,t as D,i as R,p as U,h as q}from"./index-1e35e92b.js";import{P as N}from"./PostService-3b3208c7.js";const n=d=>(U("data-v-fb9eb746"),d=d(),q(),d),j={class:"grid justify-content-center"},E={class:"col-12 md:col-10"},L=n(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),M={class:"field"},$=n(()=>e("label",{for:"title"},"제목",-1)),z={class:"field"},A=n(()=>e("label",{for:"body"},"본문",-1)),G={class:"field"},H=n(()=>e("label",{class:"mb-3"},"분류",-1)),J={class:"formgrid grid"},K=["for"],O={class:"field"},Q=n(()=>e("label",{for:"file"},"파일 업로드",-1)),W={class:"button-group"},X={__name:"addpost",setup(d){const y=new N,V=P(),c=_(""),i=_(""),r=_(""),u=_(null),k=["수학","정보","물리","화학","생물","지구과학","인문","기타"],x=s=>{u.value=s.target.files[0]},S=async()=>{const s={title:c.value,content:i.value,category:r.value};try{const t=localStorage.getItem("token"),o=new FormData;o.append("title",s.title),o.append("content",s.content),o.append("category",s.category),u.value&&o.append("file",u.value),await y.addPost(o,t),alert("Post added successfully!"),v(),V.push("/board/1")}catch(t){console.error(t),alert("Failed to add post")}},v=()=>{c.value="",i.value="",r.value="",u.value=null};return(s,t)=>{const o=p("InputText"),w=p("Textarea"),B=p("RadioButton"),f=p("Button");return b(),g(h,null,[e("div",j,[e("div",E,[e("div",null,[L,e("form",{onSubmit:C(S,["prevent"])},[e("div",M,[$,a(o,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",z,[A,a(w,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",G,[H,e("div",J,[(b(),g(h,null,T(k,(l,m)=>e("div",{class:"field-radiobutton col-6",key:m},[a(B,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=I=>r.value=I),id:"category"+m,name:"category",value:l},null,8,["modelValue","id","value"]),e("label",{for:"category"+m},D(l),9,K)])),64))])]),e("div",O,[Q,e("input",{type:"file",id:"file",onChange:x},null,32)]),e("div",W,[a(f,{label:"취소",icon:"pi pi-times",text:"",onClick:v}),a(f,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),a(R,{simple:""})],64)}}},ee=F(X,[["__scopeId","data-v-fb9eb746"]]);export{ee as default};
