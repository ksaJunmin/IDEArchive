import{x as I,r as u,b as c,c as v,d as f,e,A as k,f as s,F as b,m as w,t as S,_ as F,y as T,z as C,l as P}from"./index-bdf73b52.js";const i=a=>(T("data-v-7be46aa6"),a=a(),C(),a),U={class:"grid justify-content-center"},q={class:"col-12 md:col-10"},N=i(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),R={class:"field"},j=i(()=>e("label",{for:"title"},"제목",-1)),z={class:"field"},A=i(()=>e("label",{for:"body"},"본문",-1)),D={class:"field"},E=i(()=>e("label",{class:"mb-3"},"분류",-1)),L={class:"formgrid grid"},M=["for"],$={class:"button-group"},G={__name:"addpost",setup(a){const l=u(""),n=u(""),d=u(""),y=["수학","정보","물리","화학","생물","지구과학","인문","기타"],h=async()=>{const p={title:l.value,content:n.value,category:d.value};try{await P.post("http://localhost:3000/posts/add",p),_(),alert("Post added successfully!")}catch(t){console.error(t),alert("Failed to add post")}},_=()=>{l.value="",n.value="",d.value=""};return(p,t)=>{const g=c("InputText"),V=c("Textarea"),x=c("RadioButton"),m=c("Button");return v(),f(b,null,[e("div",U,[e("div",q,[e("div",null,[N,e("form",{onSubmit:k(h,["prevent"])},[e("div",R,[j,s(g,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",z,[A,s(V,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",D,[E,e("div",L,[(v(),f(b,null,w(y,(o,r)=>e("div",{class:"field-radiobutton col-6",key:r},[s(x,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=B=>d.value=B),id:"category"+r,name:"category",value:o},null,8,["modelValue","id","value"]),e("label",{for:"category"+r},S(o),9,M)])),64))])]),e("div",$,[s(m,{label:"취소",icon:"pi pi-times",text:"",onClick:_}),s(m,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),s(F,{simple:""})],64)}}},J=I(G,[["__scopeId","data-v-7be46aa6"]]);export{J as default};
