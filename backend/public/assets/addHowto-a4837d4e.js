import{i as F,u as I,r as _,a as r,b as v,c as f,d as e,m as C,e as s,F as b,g as P,t as T,_ as q,p as D,l as H}from"./index-549d6619.js";import{P as R}from"./PostService-1cd7d31b.js";const a=n=>(D("data-v-1c70b9b2"),n=n(),H(),n),U={class:"grid justify-content-center"},N={class:"col-12 md:col-10"},j=a(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),E={class:"field"},L=a(()=>e("label",{for:"title"},"제목",-1)),M={class:"field"},$=a(()=>e("label",{for:"body"},"본문",-1)),z={class:"field"},A=a(()=>e("label",{class:"mb-3"},"분류",-1)),G={class:"formgrid grid"},J=["for"],K=a(()=>e("label",{for:"file"},"File",-1)),O={class:"button-group"},Q={__name:"addHowto",setup(n){const g=new R,h=I(),d=_(""),c=_(""),i=_(""),y=["수학","정보","물리","화학","생물","지구과학","인문","기타"],V=o=>{file.value=o.target.files[0]},w=async()=>{const o=new FormData;o.append("title",d.value),o.append("content",c.value),o.append("category",i.value),o.append("islatex",!1),o.append("file",file.value);try{const t=localStorage.getItem("token");await g.addPost(o,t),alert("Post added successfully!"),p(),h.push("/howto")}catch(t){console.error(t),alert("Failed to add post")}},p=()=>{d.value="",c.value="",i.value=""};return(o,t)=>{const x=r("InputText"),S=r("Textarea"),k=r("RadioButton"),m=r("Button");return v(),f(b,null,[e("div",U,[e("div",N,[e("div",null,[j,e("form",{onSubmit:C(w,["prevent"])},[e("div",E,[L,s(x,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",M,[$,s(S,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=l=>c.value=l),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",z,[A,e("div",G,[(v(),f(b,null,P(y,(l,u)=>e("div",{class:"field-radiobutton col-6",key:u},[s(k,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=B=>i.value=B),id:"category"+u,name:"category",value:l},null,8,["modelValue","id","value"]),e("label",{for:"category"+u},T(l),9,J)])),64))])]),e("div",null,[K,e("input",{type:"file",onChange:V,required:""},null,32)]),e("div",O,[s(m,{label:"취소",icon:"pi pi-times",text:"",onClick:p}),s(m,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),s(q,{simple:""})],64)}}},Y=F(Q,[["__scopeId","data-v-1c70b9b2"]]);export{Y as default};
