import{_ as I,u as w,r as u,a as c,b as v,c as f,e,k as P,d as s,F as g,g as F,t as T,i as C,p as R,h as U}from"./index-ed7979c5.js";import{P as q}from"./PostService-1cc927fd.js";const i=l=>(R("data-v-80f459de"),l=l(),U(),l),N={class:"grid justify-content-center"},j={class:"col-12 md:col-10"},D=i(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),E={class:"field"},L=i(()=>e("label",{for:"title"},"제목",-1)),M={class:"field"},$=i(()=>e("label",{for:"body"},"본문",-1)),z={class:"field"},A=i(()=>e("label",{class:"mb-3"},"분류",-1)),G={class:"formgrid grid"},H=["for"],J={class:"button-group"},K={__name:"addpost",setup(l){const b=new q,h=w(),a=u(""),n=u(""),d=u(""),y=["수학","정보","물리","화학","생물","지구과학","인문","기타"],V=async()=>{const p={title:a.value,content:n.value,category:d.value};try{const t=localStorage.getItem("token");await b.addPost(p,t),alert("Post added successfully!"),_(),h.push("/board/1")}catch(t){console.error(t),alert("Failed to add post")}},_=()=>{a.value="",n.value="",d.value=""};return(p,t)=>{const k=c("InputText"),x=c("Textarea"),S=c("RadioButton"),m=c("Button");return v(),f(g,null,[e("div",N,[e("div",j,[e("div",null,[D,e("form",{onSubmit:P(V,["prevent"])},[e("div",E,[L,s(k,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",M,[$,s(x,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",z,[A,e("div",G,[(v(),f(g,null,F(y,(o,r)=>e("div",{class:"field-radiobutton col-6",key:r},[s(S,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=B=>d.value=B),id:"category"+r,name:"category",value:o},null,8,["modelValue","id","value"]),e("label",{for:"category"+r},T(o),9,H)])),64))])]),e("div",J,[s(m,{label:"취소",icon:"pi pi-times",text:"",onClick:_}),s(m,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),s(C,{simple:""})],64)}}},W=I(K,[["__scopeId","data-v-80f459de"]]);export{W as default};
