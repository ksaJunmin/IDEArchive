import{B as f,r as u,o as g,w as b,b as l,c as _,d as v,e,t as n,f as a,v as y}from"./index-bdf73b52.js";import{P as k}from"./PostService-a3845178.js";const w={class:"grid"},B={class:"col-12"},V={class:"card"},C={key:0},D={class:"flex flex-row gap-2 mt-4 align-items-center"},E={class:"text-gray-500"},I={class:"surface-100 p-1",style:{"border-radius":"30px"}},N={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},P={class:"text-900 font-medium text-sm"},S=e("i",{class:"pi pi-thumbs-up"},null,-1),j={class:"font-medium"},L={class:"flex flex-column mt-4 align-items-center justify-center"},R={class:"flex gap-2"},T=e("div",{class:"text-gray-500"},"댓글 0",-1),$={class:"flex gap-2"},A={__name:"post",setup(z){const c=new k,m=f(),r=u(m.params.postId),t=u(null),d=o=>{c.updateLike(r.value,t.value.like+o).then(s=>{t.value=s}).catch(s=>{console.error("Error updating like:",s)})};return g(async()=>{try{const o=await c.getPostById(r.value);t.value=o}catch(o){console.error("Error fetching post:",o)}}),b(t,(o,s)=>{}),(o,s)=>{const p=l("Divider"),i=l("Button"),x=l("Textarea");return _(),v("div",w,[e("div",B,[e("div",V,[t.value?(_(),v("div",C,[e("h2",null,n(t.value.title),1),e("div",null,[e("div",D,[e("div",E,n(t.value.date),1),e("div",I,[e("div",N,[e("div",P,n(t.value.like),1),S])])])]),a(p),e("div",j,n(t.value.content),1),e("div",null,[e("div",L,[e("div",R,[a(i,{label:"좋아요",icon:"pi pi-thumbs-up",onClick:s[0]||(s[0]=h=>d(1))}),a(i,{label:"싫어요",icon:"pi pi-thumbs-down",outlined:"",onClick:s[1]||(s[1]=h=>d(-1))})])])]),a(p),T,e("div",$,[a(x,{placeholder:"댓글을 입력하세요",autoResize:!0,rows:"1",cols:"50"}),a(i,{label:"입력",class:"mr-10 mb-10"})])])):y("",!0)])])])}}};export{A as default};
