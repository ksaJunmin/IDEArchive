import{_ as h,u as g,m as y,r as l,o as x,a as _,b as q,c as I,e,f as S,t as b,k,d as c,F as B,i as V,p as R,h as A}from"./index-aea6fc2e.js";import{R as F}from"./RequestService-dbfe6a3e.js";const N=s=>(R("data-v-6d32e204"),s=s(),A(),s),T={class:"grid justify-content-center"},C={class:"col-12 md:col-10"},M=N(()=>e("h2",null,[e("strong",null,"새 답변 작성")],-1)),j={class:"field"},D={class:"button-group"},E={__name:"answer",setup(s){const r=new F,p=g(),m=y(),o=l(m.params.requestId),u=l(null),a=l(""),v=async()=>{const n={content:a.value};try{console.log(o.value);const t=localStorage.getItem("token");await r.addAnswer(o.value,n,t),alert("Answer added successfully!"),d(),p.push("/request/"+o.value)}catch(t){console.error(t),alert("Failed to add answer")}};x(()=>{r.getRequestById(o.value).then(n=>{u.value=n})});const d=()=>{a.value=""};return(n,t)=>{const f=_("Textarea"),i=_("Button");return q(),I(B,null,[e("div",T,[e("div",C,[S(b(u.value.content)+" ",1),e("div",null,[M,e("form",{onSubmit:k(v,["prevent"])},[e("div",j,[c(f,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=w=>a.value=w),id:"body",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),e("div",D,[c(i,{label:"취소",icon:"pi pi-times",text:"",onClick:d}),c(i,{label:"저장",icon:"pi pi-check",text:"",type:"submit"})])],32)])])]),c(V,{simple:""})],64)}}},z=h(E,[["__scopeId","data-v-6d32e204"]]);export{z as default};
