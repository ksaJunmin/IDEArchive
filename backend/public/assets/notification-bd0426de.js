import{h as l,u as N,r as i,o as b,a as d,b as s,c,d as t,q,w as B,F as u,g as C,n as D,e as F,t as V}from"./index-04519f8d.js";const _="http://localhost:3000/notifications";class S{async createNotification(e,o){return(await l.post(_,{userId:e,message:o})).data}async getNotifications(e){return(await l.get(`${_}`,{headers:{Authorization:`Bearer ${e}`}})).data}}const O=t("h3",null,"알림",-1),$={class:"grid"},j={class:"col-12"},z={class:"card"},A={class:"grid grid-nogutter"},I=["onClick"],R={class:"flex flex-column justify-content-between flex-1"},E={class:"flex flex-row justify-content-between align-items-start gap-2"},L={class:"flex items-center"},M=t("div",null,"채택됨!",-1),P={class:"min-w-0"},T={class:"text-lg font-medium text-900 mt-2 ellipsis"},G={key:1},Q={__name:"notification",setup(v){const e=new S,o=N(),a=i(null),p=i("list"),f=i(-1),h=i("date"),g=localStorage.getItem("token");b(()=>{e.getNotifications(g).then(n=>{a.value=n})});const m=n=>{o.push("/request/"+n)};return(n,H)=>{const x=d("Divider"),y=d("DataView");return s(),c(u,null,[O,t("div",$,[t("div",j,[t("div",z,[a.value?(s(),q(y,{key:0,value:a.value,layout:p.value,paginator:!0,rows:9,sortOrder:f.value,sortField:h.value},{list:B(w=>[t("div",A,[(s(!0),c(u,null,C(w.items,(r,k)=>(s(),c("div",{key:r._id,class:"col-12"},[t("div",{class:D(["flex flex-column p-4 gap-3 cursor-pointer",{"border-top-1 surface-border":k!==0}]),onClick:J=>m(r.request._id)},[t("div",R,[t("div",E,[t("div",L,[M,F(x,{layout:"vertical"}),t("div",P,[t("div",T,V(r.request.title),1)])])])])],10,I)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])):(s(),c("div",G," 알림 없음 "))])])])],64)}}};export{Q as default};