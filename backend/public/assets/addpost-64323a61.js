import{_ as S,u as w,r as u,a as c,b as v,c as f,e,j as P,d as s,F as h,g as T,t as C,i as F,p as R,h as U}from"./index-6eee48c1.js";import{a as j}from"./axios-9cbf0d09.js";const i=a=>(R("data-v-cdc72176"),a=a(),U(),a),A={class:"grid justify-content-center"},q={class:"col-12 md:col-10"},L=i(()=>e("h2",null,[e("strong",null,"새 글 작성")],-1)),N={class:"field"},$=i(()=>e("label",{for:"title"},"제목",-1)),z={class:"field"},D=i(()=>e("label",{for:"body"},"본문",-1)),E={class:"field"},M=i(()=>e("label",{class:"mb-3"},"분류",-1)),G={class:"formgrid grid"},H=["for"],J={class:"button-group"},K={__name:"addpost",setup(a){const g={}.API_URL,y=w(),l=u(""),n=u(""),d=u(""),b=["수학","정보","물리","화학","생물","지구과학","인문","기타"],V=async()=>{const p={title:l.value,content:n.value,category:d.value};try{const t=localStorage.getItem("token");await j.post(g+"/posts/add",p,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}),alert("Post added successfully!"),_(),y.push("/board/1")}catch(t){console.error(t),alert("Failed to add post")}},_=()=>{l.value="",n.value="",d.value=""};return(p,t)=>{const x=c("InputText"),I=c("Textarea"),B=c("RadioButton"),m=c("Button");return v(),f(h,null,[e("div",A,[e("div",q,[e("div",null,[L,e("form",{onSubmit:P(V,["prevent"])},[e("div",N,[$,s(x,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),id:"title",required:"",autofocus:""},null,8,["modelValue"])]),e("div",z,[D,s(I,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",E,[M,e("div",G,[(v(),f(h,null,T(b,(o,r)=>e("div",{class:"field-radiobutton col-6",key:r},[s(B,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=k=>d.value=k),id:"category"+r,name:"category",value:o},null,8,["modelValue","id","value"]),e("label",{for:"category"+r},C(o),9,H)])),64))])]),e("div",J,[s(m,{label:"취소",icon:"pi pi-times",text:"",onClick:_}),s(m,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),s(F,{simple:""})],64)}}},W=S(K,[["__scopeId","data-v-cdc72176"]]);export{W as default};
