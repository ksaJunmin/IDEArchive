import{i as w,u as g,j as y,r as c,o as x,a as _,b as q,c as I,d as e,f as S,t as b,m as k,e as l,F as B,_ as V,p as R,l as A}from"./index-255db261.js";import{R as F}from"./RequestService-31371661.js";const N=o=>(R("data-v-d33d6380"),o=o(),A(),o),T={class:"grid justify-content-center"},j={class:"col-12 md:col-10"},C=N(()=>e("h2",null,[e("strong",null,"새 답변 작성")],-1)),M={class:"field"},D={class:"button-group"},E={__name:"letmedo",setup(o){const r=new F,p=g(),m=y(),s=c(m.params.requestId),d=c(null),a=c(""),v=async()=>{const n={content:a.value};try{console.log(s.value);const t=localStorage.getItem("token");await r.addAnswer(s.value,n,t),alert("Answer added successfully!"),u(),p.push("/request/"+s.value)}catch(t){console.error(t),alert("Failed to add answer")}};x(()=>{r.getRequestById(s.value).then(n=>{d.value=n})});const u=()=>{a.value=""};return(n,t)=>{const f=_("Textarea"),i=_("Button");return q(),I(B,null,[e("div",T,[e("div",j,[S(b(d.value.content)+" ",1),e("div",null,[C,e("form",{onSubmit:k(v,["prevent"])},[e("div",M,[l(f,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=h=>a.value=h),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",D,[l(i,{label:"취소",icon:"pi pi-times",text:"",onClick:u}),l(i,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),l(V,{simple:""})],64)}}},z=w(E,[["__scopeId","data-v-d33d6380"]]);export{z as default};
