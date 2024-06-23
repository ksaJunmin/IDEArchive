import{R as y}from"./RequestService-2f98bcfc.js";import{U as R}from"./UserService-07fecba8.js";import{_ as I,r as i,u as w,o as U,a as d,b as f,c as g,d as o,e as l,t as B,j as C,p as N,k as T}from"./index-9f4cf9f0.js";const c=a=>(N("data-v-a7774670"),a=a(),T(),a),E={class:"p-fluid"},M={class:"p-field p-grid"},D=c(()=>o("h2",null,[o("strong",null,"의뢰 작성")],-1)),j=c(()=>o("label",{for:"title"},"제목",-1)),F={class:"p-field p-grid"},P=c(()=>o("label",{for:"content"},"내용",-1)),$={class:"p-field p-grid"},z=c(()=>o("label",{for:"points"},"포인트",-1)),A={key:0},G={class:"button-group"},H={__name:"addRequest",setup(a){const r=i(null),h=w(),k=localStorage.getItem("token"),q=new y,x=new R,e=i({title:"",content:"",points:""}),V=async()=>{try{e.value.points>r.value.points?u.value=`포인트는 최대 ${r.value.points}까지 입력할 수 있습니다.`:(u.value="",await q.postRequest(e.value,k),p(),h.push("/request"))}catch(s){console.error("Error creating request: ",s.message)}},p=()=>{e.value.title="",e.value.content="",e.value.points=""},S=async()=>{const s=localStorage.getItem("token");if(s)try{const t=await x.fetchUser(s);r.value=t}catch(t){console.error("Error fetching user:",t)}else console.error("No token found")},u=i("");return U(S),(s,t)=>{var v;const _=d("InputText"),b=d("Textarea"),m=d("Button");return f(),g("div",E,[o("div",M,[D,j,l(_,{id:"title",modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=n=>e.value.title=n),required:"",autofocus:""},null,8,["modelValue"])]),o("div",F,[P,l(b,{modelValue:e.value.content,"onUpdate:modelValue":t[1]||(t[1]=n=>e.value.content=n),id:"content",required:"",rows:"12",cols:"120",class:"full"},null,8,["modelValue"])]),o("div",$,[z,l(_,{type:"number",id:"points",min:"1",max:(v=r.value)==null?void 0:v.points,modelValue:e.value.points,"onUpdate:modelValue":t[2]||(t[2]=n=>e.value.points=n),modelModifiers:{number:!0}},null,8,["max","modelValue"]),u.value?(f(),g("p",A,B(u.value),1)):C("",!0)]),o("div",G,[l(m,{label:"취소",icon:"pi pi-times",text:"",onClick:p}),l(m,{label:"저장",icon:"pi pi-check",text:"",onClick:V})])])}}},O=I(H,[["__scopeId","data-v-a7774670"]]);export{O as default};
