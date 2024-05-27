import{R as y}from"./RequestService-54d84e17.js";import{U as I}from"./UserService-aec5223f.js";import{_ as w,r as i,u as R,o as U,a as d,b as f,c as g,e as o,d as l,t as B,j as C,p as F,h as N}from"./index-b933d539.js";const u=r=>(F("data-v-16c95049"),r=r(),N(),r),T={class:"p-fluid"},E={class:"p-field p-grid"},M=u(()=>o("h2",null,[o("strong",null,"의뢰 작성")],-1)),D=u(()=>o("label",{for:"title"},"제목",-1)),j={class:"p-field p-grid"},P=u(()=>o("label",{for:"content"},"내용",-1)),$={class:"p-field p-grid"},z=u(()=>o("label",{for:"points"},"포인트",-1)),A={key:0},G={class:"button-group"},H={__name:"requestForm",setup(r){const a=i(null),h=R(),x=localStorage.getItem("token"),V=new y,k=new I,e=i({title:"",content:"",points:""}),q=async()=>{try{e.value.points>a.value.points?c.value=`포인트는 최대 ${a.value.points}까지 입력할 수 있습니다.`:(c.value="",await V.postRequest(e.value,x),p(),h.push("/board/3"))}catch(s){console.error("Error creating request: ",s.message)}},p=()=>{e.value.title="",e.value.content="",e.value.points=""},b=async()=>{const s=localStorage.getItem("token");if(s)try{const t=await k.fetchUser(s);a.value=t}catch(t){console.error("Error fetching user:",t)}else console.error("No token found")},c=i("");return U(b),(s,t)=>{var v;const _=d("InputText"),S=d("Textarea"),m=d("Button");return f(),g("div",T,[o("div",E,[M,D,l(_,{id:"title",modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=n=>e.value.title=n),required:"",autofocus:""},null,8,["modelValue"])]),o("div",j,[P,l(S,{modelValue:e.value.content,"onUpdate:modelValue":t[1]||(t[1]=n=>e.value.content=n),id:"content",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),o("div",$,[z,l(_,{type:"number",id:"points",min:"1",max:(v=a.value)==null?void 0:v.points,modelValue:e.value.points,"onUpdate:modelValue":t[2]||(t[2]=n=>e.value.points=n),modelModifiers:{number:!0}},null,8,["max","modelValue"]),c.value?(f(),g("p",A,B(c.value),1)):C("",!0)]),o("div",G,[l(m,{label:"취소",icon:"pi pi-times",text:"",onClick:p}),l(m,{label:"저장",icon:"pi pi-check",text:"",onClick:q})])])}}},O=w(H,[["__scopeId","data-v-16c95049"]]);export{O as default};
