import{P as B}from"./PostService-8207b5ff.js";import{U as E}from"./UserService-5d8085b5.js";import{u as I,r as l,o as L,a as g,b as c,c as d,d as _,w as p,e as t,F as v,f as y,g as w,t as e}from"./index-d50fb964.js";const N=t("h3",null,[t("strong",null,"IDEArchive"),y("에 오신 걸 환영합니다!")],-1),$={class:"grid"},R={class:"col-12"},T={class:"card"},U=t("h5",null,"추천순 상위 3개",-1),A={class:"grid grid-nogutter"},M=["onClick"],q={class:"flex flex-row justify-content-between align-items-start"},z={class:"min-w-0"},G={class:"text-lg font-medium text-900 mt-2 ellipsis"},H={class:"font-medium text-secondary text-sm ellipsis"},J={class:"surface-100 p-1",style:{"border-radius":"30px"}},K={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Q={class:"text-900 font-medium text-sm"},W=t("i",{class:"pi pi-thumbs-up"},null,-1),X={class:"flex flex-row justify-content-between align-items-start mt-4"},Y={class:"text-sm text-gray-500"},Z={class:"grid"},tt={class:"col-12"},st={class:"card"},et=t("h5",null,"최신순 상위 3개",-1),ot={class:"grid grid-nogutter"},lt=["onClick"],nt={class:"flex flex-row justify-content-between align-items-start gap-2"},rt={class:"min-w-0"},it={class:"text-lg font-medium text-900 mt-2 ellipsis"},at={class:"font-medium text-secondary text-sm ellipsis"},ct={class:"surface-100 p-1",style:{"border-radius":"30px"}},dt={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},ut={class:"text-900 font-medium text-sm"},_t=t("i",{class:"pi pi-thumbs-up"},null,-1),pt={class:"flex flex-row justify-content-between align-items-start mt-4"},vt={class:"text-sm text-gray-500"},gt={__name:"home",setup(xt){const b=I(),x=l(null),h=l(null),m=l("grid"),k=l(null),D=l(null),F=l(null),S=l(null),C=new B,V=new E,j=l(null);L(()=>{C.getPosts().then(n=>{const r=n.sort((a,o)=>o.like-a.like);x.value=r.slice(0,3);const i=n.sort((a,o)=>o._id-a._id);h.value=i.slice(0,3)})});const f=n=>{b.push("/post/"+n)},O=n=>{const r=localStorage.getItem("token");if(!r)throw new Error("No token found");V.updatePoints(r,n).then(i=>{j.value=i}).catch(i=>{console.error("Error updating points:",i)})};return(n,r)=>{const i=g("Button"),a=g("DataView");return c(),d(v,null,[_(i,{onClick:r[0]||(r[0]=o=>O(100))},{default:p(()=>[y(" submit ")]),_:1}),N,t("div",$,[t("div",R,[t("div",T,[_(a,{value:x.value,layout:m.value,paginator:!1,rows:3,sortOrder:k.value,sortField:F.value},{grid:p(o=>[U,t("div",A,[(c(!0),d(v,null,w(o.items,(s,u)=>(c(),d("div",{key:u,class:"col-12 sm:col-6 md:col-4 p-2"},[t("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:P=>f(s._id)},[t("div",null,[t("div",q,[t("div",z,[t("div",G,e(s.title),1),t("div",H,e(s.content),1)]),t("div",J,[t("div",K,[t("div",Q,e(s.like),1),W])])]),t("div",X,[t("div",Y,e(new Date(s.date).toLocaleString()),1),t("div",null,e(s.author.schoolID)+" "+e(s.author.name),1)])])],8,M)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),t("div",Z,[t("div",tt,[t("div",st,[_(a,{value:h.value,layout:m.value,paginator:!1,rows:3,sortOrder:D.value,sortField:S.value},{grid:p(o=>[et,t("div",ot,[(c(!0),d(v,null,w(o.items,(s,u)=>(c(),d("div",{key:u,class:"col-12 sm:col-6 md:col-4 p-2"},[t("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:P=>f(s._id)},[t("div",null,[t("div",nt,[t("div",rt,[t("div",it,e(s.title),1),t("div",at,e(s.content),1)]),t("div",ct,[t("div",dt,[t("div",ut,e(s.like),1),_t])])]),t("div",pt,[t("div",vt,e(new Date(s.date).toLocaleString()),1),t("div",null,e(s.author.schoolID)+" "+e(s.author.name),1)])])],8,lt)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])])],64)}}};export{gt as default};
