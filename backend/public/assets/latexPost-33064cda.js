import{_ as I,u as w,r as u,a,b as _,c as p,e,k as C,d as o,j as F,F as h,g as T,t as D,i as N,p as R,h as U}from"./index-5b6f585e.js";import{P as j}from"./PostService-a8a455fc.js";import{_ as q}from"./MathRenderer-bb3fdd56.js";const n=c=>(R("data-v-97062c6a"),c=c(),U(),c),$={class:"grid justify-content-center"},E={class:"col-12 md:col-10"},L=n(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),M={class:"field"},z=n(()=>e("label",{for:"title"},"제목",-1)),A={class:"field"},G=n(()=>e("label",{for:"body"},"본문",-1)),H={key:0},J=n(()=>e("h3",null,"미리보기:",-1)),K={class:"field"},O=n(()=>e("label",{class:"mb-3"},"분류",-1)),Q={class:"formgrid grid"},W=["for"],X={class:"button-group"},Y={__name:"latexPost",setup(c){const g=new j,y=w(),d=u(""),s=u(""),i=u(""),b=["수학","정보","물리","화학","생물","지구과학","인문","기타"],x=async()=>{const v={title:d.value,content:s.value,category:i.value,islatex:1};try{const t=localStorage.getItem("token");await g.addPost(v,t),alert("Post added successfully!"),m(),y.push("/board/1")}catch(t){console.error(t),alert("Failed to add post")}},m=()=>{d.value="",s.value="",i.value=""};return(v,t)=>{const V=a("InputText"),k=a("Textarea"),P=a("Divider"),S=a("RadioButton"),f=a("Button");return _(),p(h,null,[e("div",$,[e("div",E,[e("div",null,[L,e("form",{onSubmit:C(x,["prevent"])},[e("div",M,[z,o(V,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",A,[G,o(k,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),s.value?(_(),p("div",H,[J,o(q,{content:s.value},null,8,["content"])])):F("",!0),o(P),e("div",K,[O,e("div",Q,[(_(),p(h,null,T(b,(l,r)=>e("div",{class:"field-radiobutton col-6",key:r},[o(S,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=B=>i.value=B),id:"category"+r,name:"category",value:l},null,8,["modelValue","id","value"]),e("label",{for:"category"+r},D(l),9,W)])),64))])]),e("div",X,[o(f,{label:"취소",icon:"pi pi-times",text:"",onClick:m}),o(f,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),o(N,{simple:""})],64)}}},oe=I(Y,[["__scopeId","data-v-97062c6a"]]);export{oe as default};
