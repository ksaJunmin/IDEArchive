import{A as x,r as u,o as f,w as h,b as l,c as p,d as _,e,t as i,f as s,s as g}from"./index-2fe15684.js";import{P as b}from"./ProductService-a07f9b02.js";const w={class:"grid"},y={class:"col-12"},B={class:"card"},S={key:0},V={class:"flex flex-row gap-2 mt-4 align-items-center"},P={class:"text-gray-500"},k={class:"surface-100 p-1",style:{"border-radius":"30px"}},D={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},N={class:"text-900 font-medium text-sm"},j=e("i",{class:"pi pi-thumbs-up"},null,-1),C={class:"font-medium"},R={class:"flex flex-column mt-4 align-items-center justify-center"},T={class:"flex gap-2"},z=e("div",{class:"text-gray-500"},"댓글 0",-1),A={class:"flex gap-2"},q={__name:"post",setup(E){const d=new b,m=x(),r=u(m.params.id),t=u(null);return f(async()=>{const c=await d.getProductsSmall1();if(t.value=c.find(o=>o.id===r.value),t.value===void 0){const o=await d.getProductsSmall2();t.value=o.find(a=>a.id===r.value)}}),h(t,(c,o)=>{}),(c,o)=>{const a=l("Divider"),n=l("Button"),v=l("Textarea");return p(),_("div",w,[e("div",y,[e("div",B,[t.value?(p(),_("div",S,[e("h2",null,i(t.value.name),1),e("div",null,[e("div",V,[e("div",P,i(t.value.time),1),e("div",k,[e("div",D,[e("div",N,i(t.value.rating),1),j])])])]),s(a),e("div",C,i(t.value.description),1),e("div",null,[e("div",R,[e("div",T,[s(n,{label:"좋아요",icon:"pi pi-thumbs-up"}),s(n,{label:"싫어요",icon:"pi pi-thumbs-down",outlined:""})])])]),s(a),z,e("div",A,[s(v,{placeholder:"댓글을 입력하세요",autoResize:!0,rows:"1",cols:"50"}),s(n,{label:"입력",class:"mr-10 mb-10"})])])):g("",!0)])])])}}};export{q as default};
