import{C as D}from"./CountryService-74a64663.js";import{r as u,o as F,b as a,c as B,d as R,e,f as o,g as s}from"./index-108aca6d.js";const q={class:"card"},P=e("h5",null,"Float Label",-1),Y={class:"grid p-fluid mt-3"},E={class:"field col-12 md:col-4"},O=e("label",{for:"inputtext"},"InputText",-1),j={class:"field col-12 md:col-4"},z=e("label",{for:"autocomplete"},"AutoComplete",-1),H={class:"field col-12 md:col-4"},J=e("label",{for:"calendar"},"Calendar",-1),K={class:"field col-12 md:col-4"},Q=e("label",{for:"chips"},"Chips",-1),W={class:"field col-12 md:col-4"},X=e("label",{for:"inputmask"},"InputMask",-1),Z={class:"field col-12 md:col-4"},$=e("label",{for:"inputnumber"},"InputNumber",-1),ll={class:"field col-12 md:col-4"},el=e("i",{class:"pi pi-user"},null,-1),ol=e("label",{for:"inputgroup"},"InputGroup",-1),tl={class:"field col-12 md:col-4"},nl=e("label",{for:"dropdown"},"Dropdown",-1),ul={class:"field col-12 md:col-4"},al=e("label",{for:"multiselect"},"MultiSelect",-1),sl={class:"field col-12 md:col-4"},dl=e("label",{for:"textarea"},"Textarea",-1),ml={__name:"FloatLabel",setup(il){const p=u([]),m=u([{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]),r=u(null),_=u(null),v=u(null),f=u(null),V=u(null),b=u(null),C=u(null),I=u(null),x=u(null),h=u(null),w=u(null),g=new D;F(()=>{g.getCountries().then(d=>p.value=d)});const L=d=>{const l=[],i=d.query;for(let n=0;n<p.value.length;n++){const c=p.value[n];c.name.toLowerCase().indexOf(i.toLowerCase())==0&&l.push(c)}r.value=l};return(d,l)=>{const i=a("InputText"),n=a("FloatLabel",!0),c=a("AutoComplete"),U=a("Calendar"),k=a("Chips"),y=a("InputMask"),M=a("InputNumber"),N=a("InputGroupAddon"),S=a("InputGroup"),T=a("Dropdown"),A=a("MultiSelect"),G=a("Textarea");return B(),R("div",q,[P,e("div",Y,[e("div",E,[o(n,null,{default:s(()=>[o(i,{type:"text",id:"inputtext",modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=t=>_.value=t)},null,8,["modelValue"]),O]),_:1})]),e("div",j,[o(n,null,{default:s(()=>[o(c,{id:"autocomplete",modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=t=>v.value=t),suggestions:r.value,onComplete:l[2]||(l[2]=t=>L(t)),field:"name"},null,8,["modelValue","suggestions"]),z]),_:1})]),e("div",H,[o(n,null,{default:s(()=>[o(U,{inputId:"calendar",modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=t=>f.value=t)},null,8,["modelValue"]),J]),_:1})]),e("div",K,[o(n,null,{default:s(()=>[o(k,{inputId:"chips",modelValue:V.value,"onUpdate:modelValue":l[4]||(l[4]=t=>V.value=t)},null,8,["modelValue"]),Q]),_:1})]),e("div",W,[o(n,null,{default:s(()=>[o(y,{id:"inputmask",mask:"99/99/9999",modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=t=>b.value=t)},null,8,["modelValue"]),X]),_:1})]),e("div",Z,[o(n,null,{default:s(()=>[o(M,{id:"inputnumber",modelValue:C.value,"onUpdate:modelValue":l[6]||(l[6]=t=>C.value=t)},null,8,["modelValue"]),$]),_:1})]),e("div",ll,[o(S,null,{default:s(()=>[o(N,null,{default:s(()=>[el]),_:1}),o(n,null,{default:s(()=>[o(i,{type:"text",id:"inputgroup",modelValue:I.value,"onUpdate:modelValue":l[7]||(l[7]=t=>I.value=t)},null,8,["modelValue"]),ol]),_:1})]),_:1})]),e("div",tl,[o(n,null,{default:s(()=>[o(T,{id:"dropdown",options:m.value,modelValue:x.value,"onUpdate:modelValue":l[8]||(l[8]=t=>x.value=t),optionLabel:"name"},null,8,["options","modelValue"]),nl]),_:1})]),e("div",ul,[o(n,null,{default:s(()=>[o(A,{id:"multiselect",options:m.value,modelValue:h.value,"onUpdate:modelValue":l[9]||(l[9]=t=>h.value=t),optionLabel:"name",filter:!1},null,8,["options","modelValue"]),al]),_:1})]),e("div",sl,[o(n,null,{default:s(()=>[o(G,{inputId:"textarea",rows:"3",cols:"30",modelValue:w.value,"onUpdate:modelValue":l[10]||(l[10]=t=>w.value=t)},null,8,["modelValue"]),dl]),_:1})])])])}}};export{ml as default};
