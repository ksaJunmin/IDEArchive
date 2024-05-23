import{P as R}from"./ProductService-a07f9b02.js";import{r as n,o as K,b as d,c as r,d as u,e,f as l,g as i,F as O,m as L,n as N,t as a,i as h}from"./index-c2dc1d0c.js";const U={class:"grid"},j={class:"col-12"},I={class:"card"},$=e("h5",null,"DataView",-1),M={class:"grid grid-nogutter"},H={class:"col-6 text-left"},z={class:"col-6 text-right"},E={class:"grid grid-nogutter"},W={class:"md:w-10rem relative"},q=["src","alt"],A={class:"flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"},G={class:"flex flex-row md:flex-column justify-content-between align-items-start gap-2"},J={class:"font-medium text-secondary text-sm"},Q={class:"text-lg font-medium text-900 mt-2"},X={class:"surface-100 p-1",style:{"border-radius":"30px"}},Y={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Z={class:"text-900 font-medium text-sm"},ee=e("i",{class:"pi pi-star-fill text-yellow-500"},null,-1),te={class:"flex flex-column md:align-items-end gap-5"},se={class:"text-xl font-semibold text-900"},oe={class:"flex flex-row-reverse md:flex-row gap-2"},le={class:"grid grid-nogutter"},ae={class:"p-4 border-1 surface-border surface-card border-round flex flex-column"},ne={class:"surface-50 flex justify-content-center border-round p-3"},ie={class:"relative mx-auto"},ce=["src","alt"],de={class:"pt-4"},re={class:"flex flex-row justify-content-between align-items-start gap-2"},ue={class:"font-medium text-secondary text-sm"},pe={class:"text-lg font-medium text-900 mt-1"},me={class:"surface-100 p-1",style:{"border-radius":"30px"}},_e={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},xe={class:"text-900 font-medium text-sm"},ve=e("i",{class:"pi pi-star-fill text-yellow-500"},null,-1),ge={class:"flex flex-column gap-4 mt-4"},fe={class:"text-2xl font-semibold text-900"},he={class:"flex gap-2"},ye={class:"col-12 lg:col-8"},be={class:"card"},we=e("h5",null,"PickList",-1),Se={class:"col-12 lg:col-4"},Ve={class:"card"},Oe=e("h5",null,"OrderList",-1),Ce={__name:"List",setup(Le){const y=n([[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],[]]),b=n([{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}]),w=n(null),v=n("grid"),p=n(null),g=n(null),f=n(null),B=n([{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]),T=new R;K(()=>{T.getProductsSmall().then(c=>w.value=c)});const C=c=>{const o=c.value.value,m=c.value;o.indexOf("!")===0?(g.value=-1,f.value=o.substring(1,o.length),p.value=m):(g.value=1,f.value=o,p.value=m)},S=c=>{switch(c.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}};return(c,o)=>{const m=d("Dropdown"),F=d("DataViewLayoutOptions"),V=d("Tag"),_=d("Button"),P=d("DataView"),k=d("PickList"),D=d("OrderList");return r(),u("div",U,[e("div",j,[e("div",I,[$,l(P,{value:w.value,layout:v.value,paginator:!0,rows:9,sortOrder:g.value,sortField:f.value},{header:i(()=>[e("div",M,[e("div",H,[l(m,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=s=>p.value=s),options:B.value,optionLabel:"label",placeholder:"Sort By Price",onChange:o[1]||(o[1]=s=>C(s))},null,8,["modelValue","options"])]),e("div",z,[l(F,{modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=s=>v.value=s)},null,8,["modelValue"])])])]),list:i(s=>[e("div",E,[(r(!0),u(O,null,L(s.items,(t,x)=>(r(),u("div",{key:x,class:"col-12"},[e("div",{class:N(["flex flex-column sm:flex-row sm:align-items-center p-4 gap-3",{"border-top-1 surface-border":x!==0}])},[e("div",W,[e("img",{class:"block xl:block mx-auto border-round w-full",src:`https://primefaces.org/cdn/primevue/images/product/${t.image}`,alt:t.name},null,8,q),l(V,{value:t.inventoryStatus,severity:S(t),class:"absolute",style:{left:"4px",top:"4px"}},null,8,["value","severity"])]),e("div",A,[e("div",G,[e("div",null,[e("span",J,a(t.category),1),e("div",Q,a(t.name),1)]),e("div",X,[e("div",Y,[e("span",Z,a(t.rating),1),ee])])]),e("div",te,[e("span",se,"$"+a(t.price),1),e("div",oe,[l(_,{icon:"pi pi-heart",outlined:""}),l(_,{icon:"pi pi-shopping-cart",label:"Buy Now",disabled:t.inventoryStatus==="OUTOFSTOCK",class:"flex-auto md:flex-initial white-space-nowrap"},null,8,["disabled"])])])])],2)]))),128))])]),grid:i(s=>[e("div",le,[(r(!0),u(O,null,L(s.items,(t,x)=>(r(),u("div",{key:x,class:"col-12 sm:col-6 md:col-4 p-2"},[e("div",ae,[e("div",ne,[e("div",ie,[e("img",{class:"border-round w-full",src:`https://primefaces.org/cdn/primevue/images/product/${t.image}`,alt:t.name,style:{"max-width":"300px"}},null,8,ce),l(V,{value:t.inventoryStatus,severity:S(t),class:"absolute",style:{left:"4px",top:"4px"}},null,8,["value","severity"])])]),e("div",de,[e("div",re,[e("div",null,[e("span",ue,a(t.category),1),e("div",pe,a(t.name),1)]),e("div",me,[e("div",_e,[e("span",xe,a(t.rating),1),ve])])]),e("div",ge,[e("span",fe,"$"+a(t.price),1),e("div",he,[l(_,{icon:"pi pi-shopping-cart",label:"Buy Now",disabled:t.inventoryStatus==="OUTOFSTOCK",class:"flex-auto white-space-nowrap"},null,8,["disabled"]),l(_,{icon:"pi pi-heart",outlined:""})])])])])]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])]),e("div",ye,[e("div",be,[we,l(k,{modelValue:y.value,"onUpdate:modelValue":o[3]||(o[3]=s=>y.value=s),listStyle:"height:250px",dataKey:"code"},{sourceheader:i(()=>[h(" From ")]),targetheader:i(()=>[h(" To ")]),item:i(s=>[e("div",null,a(s.item.name),1)]),_:1},8,["modelValue"])])]),e("div",Se,[e("div",Ve,[Oe,l(D,{modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=s=>b.value=s),listStyle:"height:250px",dataKey:"code",rows:10},{header:i(()=>[h(" Cities ")]),item:i(s=>[e("div",null,a(s.item.name),1)]),_:1},8,["modelValue"])])])])}}};export{Ce as default};
