import{P as G}from"./ProductService-a07f9b02.js";import{k as H,r as l,o as J,p as Q,q as W,s as X,b as c,c as r,d as p,e,f as n,g as v,F as y,m as D,n as Y,t as u,v as T,_ as Z}from"./index-6bca6b7a.js";const ee=e("h3",null,"도와줘요 게시판",-1),te={class:"grid"},se={class:"col-12"},oe={class:"card"},le={class:"my-2"},ae={class:"grid grid-nogutter"},ie={class:"col-6 text-left"},ne={class:"col-6 text-right"},de={class:"grid grid-nogutter"},ce=["onClick"],ue={class:"flex flex-column justify-content-between flex-1"},re={class:"flex flex-row justify-content-between align-items-start gap-2"},pe={class:"min-w-0"},ve={class:"text-lg font-medium text-900 mt-2 ellipsis"},me={class:"font-medium text-secondary text-sm ellipsis"},_e={class:"surface-100 p-1",style:{"border-radius":"30px"}},xe={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},fe={class:"text-900 font-medium text-sm"},ge=e("i",{class:"pi pi-thumbs-up"},null,-1),he={class:"flex flex-column gap-2 mt-4"},be={class:"text-sm text-gray-500"},ye={class:"grid grid-nogutter"},we=["onClick"],Ve={class:"flex flex-row justify-content-between align-items-start gap-2"},ke={class:"min-w-0"},Ce={class:"text-lg font-medium text-900 mt-2 ellipsis"},De={class:"font-medium text-secondary text-sm ellipsis"},Te={class:"surface-100 p-1",style:{"border-radius":"30px"}},Me={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Oe={class:"text-900 font-medium text-sm"},Fe=e("i",{class:"pi pi-thumbs-up"},null,-1),Pe={class:"flex flex-column gap-2 mt-4"},Se={class:"text-sm text-gray-500"},Be=["src","alt"],Ne={class:"field"},je=e("label",{for:"name"},"제목",-1),Ue={key:0,class:"p-invalid"},Ie={class:"field"},Le=e("label",{for:"description"},"본문",-1),ze={__name:"2",setup(qe){const M=H(),w=l(null),g=l("list"),x=l(null),h=l(-1),b=l("title"),O=l([{label:"최신순",value:"!title"},{label:"오래된 순",value:"title"},{label:"추천 높은 순",value:"!rating"},{label:"추천 낮은 순",value:"rating"}]),F=new G;J(()=>{F.getProductsSmall2().then(a=>(w.value=a,k.value=a))});const P=a=>{const t=a.value.value,d=a.value;t.indexOf("!")===0?(h.value=-1,b.value=t.substring(1,t.length),x.value=d):(h.value=1,b.value=t,x.value=d)},V=a=>{M.push("/post/"+a)},S=Q(),k=l(null),m=l(!1);l(!1),l(!1);const s=l({});l(null),l(null);const B=l({}),_=l(!1);W(()=>{I()});const N=()=>{s.value={},_.value=!1,m.value=!0},j=()=>{m.value=!1,_.value=!1},U=()=>{_.value=!0,s.value.name&&s.value.name.trim()&&(s.value.id=C(),s.value.code=C(),s.value.rating=0,s.value.time="2초 전",k.value.push(s.value),S.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3}),m.value=!1,s.value={})},C=()=>{let a="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let d=0;d<5;d++)a+=t.charAt(Math.floor(Math.random()*t.length));return a},I=()=>{B.value={global:{value:null,matchMode:X.CONTAINS}}};return(a,t)=>{const d=c("Button"),L=c("Toolbar"),q=c("Dropdown"),A=c("DataViewLayoutOptions"),$=c("DataView"),z=c("InputText"),E=c("Textarea"),K=c("Dialog");return r(),p(y,null,[ee,e("div",te,[e("div",se,[e("div",oe,[n(L,{class:"mb-4"},{start:v(()=>[e("div",le,[n(d,{label:"글쓰기",icon:"pi pi-plus",class:"mr-2",severity:"success",onClick:N})])]),_:1}),n($,{value:w.value,layout:g.value,paginator:!0,rows:9,sortOrder:h.value,sortField:b.value},{header:v(()=>[e("div",ae,[e("div",ie,[n(q,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=o=>x.value=o),options:O.value,optionLabel:"label",placeholder:"추천 순 정렬",onChange:t[1]||(t[1]=o=>P(o))},null,8,["modelValue","options"])]),e("div",ne,[n(A,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=o=>g.value=o)},null,8,["modelValue"])])])]),list:v(o=>[e("div",de,[(r(!0),p(y,null,D(o.items,(i,f)=>(r(),p("div",{key:f,class:"col-12"},[e("div",{class:Y(["flex flex-column p-4 gap-3 cursor-pointer",{"border-top-1 surface-border":f!==0}]),onClick:R=>V(i.id)},[e("div",ue,[e("div",re,[e("div",pe,[e("div",ve,u(i.name),1),e("div",me,u(i.description),1)]),e("div",_e,[e("div",xe,[e("div",fe,u(i.rating),1),ge])])]),e("div",he,[e("div",be,u(i.time),1)])])],10,ce)]))),128))])]),grid:v(o=>[e("div",ye,[(r(!0),p(y,null,D(o.items,(i,f)=>(r(),p("div",{key:f,class:"col-12 sm:col-6 md:col-4 p-2"},[e("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:R=>V(i.id)},[e("div",null,[e("div",Ve,[e("div",ke,[e("div",Ce,u(i.name),1),e("div",De,u(i.description),1)]),e("div",null,[e("div",Te,[e("div",Me,[e("div",Oe,u(i.rating),1),Fe])])])]),e("div",Pe,[e("div",Se,u(i.time),1)])])],8,we)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"]),n(K,{visible:m.value,"onUpdate:visible":t[5]||(t[5]=o=>m.value=o),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:v(()=>[n(d,{label:"취소",icon:"pi pi-times",text:"",onClick:j}),n(d,{label:"저장",icon:"pi pi-check",text:"",onClick:U})]),default:v(()=>[s.value.image?(r(),p("img",{key:0,src:"/demo/images/product/"+s.value.image,alt:s.value.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,Be)):T("",!0),e("div",Ne,[je,n(z,{id:"name",modelValue:s.value.name,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.name=o),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:_.value&&!s.value.name},null,8,["modelValue","invalid"]),_.value&&!s.value.name?(r(),p("small",Ue,"제목을 입력하세요.")):T("",!0)]),e("div",Ie,[Le,n(E,{id:"description",modelValue:s.value.description,"onUpdate:modelValue":t[4]||(t[4]=o=>s.value.description=o),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])])]),_:1},8,["visible"])])])]),n(Z,{simple:""})],64)}}};export{ze as default};
