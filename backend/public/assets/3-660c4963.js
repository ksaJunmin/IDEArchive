import{C as u}from"./CountryService-74a64663.js";import{r as e,o as i,b as r,c as _,d as m,e as o,f as p}from"./index-fa082ab6.js";const v={class:"grid p-fluid"},f={class:"col"},h={class:"card"},x=o("h5",null,"게시판 글쓰기",-1),I={class:"p-fluid grid"},N={class:"col-12 md:col-12"},V={class:"field"},C=o("label",{for:"inputtext"},"InputText",-1),g={__name:"3",setup(S){const s=e(null);e(null);const n=e(null);e(null),e(null),e(null),e(null),e(null),e(null),e(null),e(null),e(null),e([{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]);const a=new u;return i(()=>{a.getCountries().then(l=>{s.value=l})}),(l,t)=>{const c=r("InputText");return _(),m("div",v,[o("div",f,[o("div",h,[x,o("div",I,[o("div",N,[o("div",V,[C,p(c,{id:"inputtext",type:"text",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d),invalid:""},null,8,["modelValue"])])])])])])])}}};export{g as default};
