import{P as B}from"./ProductService-a07f9b02.js";import{j as N,k as T,r as o,o as E,b,c as i,d as n,e as s,f as _,g as p,t as e,F as v,i as k,l as w}from"./index-f9d7bb6e.js";const I=s("div",{class:"home"},[s("form",{action:"/users",method:"POST"},[s("input",{type:"text",name:"id"}),s("input",{type:"text",name:"password"}),s("input",{type:"submit"})])],-1),L={key:0},M={key:1},R=s("h3",null,[s("strong",null,"IDEArchive"),k("에 오신 걸 환영합니다!")],-1),$={class:"grid"},A={class:"col-12"},q={class:"card"},z=s("h5",null,"추천순 상위 3개",-1),G={class:"grid grid-nogutter"},H=["onClick"],J={class:"flex flex-row justify-content-between align-items-start"},K={class:"min-w-0"},Q={class:"text-lg font-medium text-900 mt-2 ellipsis"},U={class:"font-medium text-secondary text-sm ellipsis"},W={class:"surface-100 p-1",style:{"border-radius":"30px"}},X={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},Y={class:"text-900 font-medium text-sm"},Z=s("i",{class:"pi pi-thumbs-up"},null,-1),ss={class:"flex flex-column gap-2 mt-4"},ts={class:"text-sm text-gray-500"},es={class:"grid"},os={class:"col-12"},ls={class:"card"},is=s("h5",null,"최신순 상위 3개",-1),ns={class:"grid grid-nogutter"},as=["onClick"],cs={class:"flex flex-row justify-content-between align-items-start gap-2"},rs={class:"min-w-0"},ds={class:"text-lg font-medium text-900 mt-2 ellipsis"},us={class:"font-medium text-secondary text-sm ellipsis"},_s={class:"surface-100 p-1",style:{"border-radius":"30px"}},ps={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},vs={class:"text-900 font-medium text-sm"},xs=s("i",{class:"pi pi-thumbs-up"},null,-1),ms={class:"flex flex-column gap-2 mt-4"},hs={class:"text-sm text-gray-500"},bs={__name:"home",setup(gs){const F=N("http"),C=T(),x=o(null),m=o(null),h=o("grid"),O=o(null),P=o(null),V=o(null),j=o(null),g=new B;E(()=>{Promise.all([g.getProductsSmall1(),g.getProductsSmall2()]).then(([a,y])=>{const r=[...a,...y],d=r.sort((t,l)=>l.rating-t.rating);x.value=d.slice(0,3);const c=r.sort((t,l)=>l.id-t.id);m.value=c.slice(0,3)})});const f=a=>{C.push("/post/"+a)},u=o(""),D=()=>{F.get("/users").then(a=>{u.value=a.data})};return(a,y)=>{const r=b("Button"),d=b("DataView");return i(),n(v,null,[s("div",null,[_(r,{onClick:D},{default:p(()=>[k(" submit ")]),_:1}),I,u.value?(i(),n("p",L,e(u.value),1)):(i(),n("p",M,"No users available."))]),R,s("div",$,[s("div",A,[s("div",q,[_(d,{value:x.value,layout:h.value,paginator:!1,rows:3,sortOrder:O.value,sortField:V.value},{grid:p(c=>[z,s("div",G,[(i(!0),n(v,null,w(c.items,(t,l)=>(i(),n("div",{key:l,class:"col-12 sm:col-6 md:col-4 p-2"},[s("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:S=>f(t.id)},[s("div",null,[s("div",J,[s("div",K,[s("div",Q,e(t.name),1),s("div",U,e(t.description),1)]),s("div",W,[s("div",X,[s("div",Y,e(t.rating),1),Z])])]),s("div",ss,[s("div",ts,e(t.time),1)])])],8,H)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),s("div",es,[s("div",os,[s("div",ls,[_(d,{value:m.value,layout:h.value,paginator:!1,rows:3,sortOrder:P.value,sortField:j.value},{grid:p(c=>[is,s("div",ns,[(i(!0),n(v,null,w(c.items,(t,l)=>(i(),n("div",{key:l,class:"col-12 sm:col-6 md:col-4 p-2"},[s("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:S=>f(t.id)},[s("div",null,[s("div",cs,[s("div",rs,[s("div",ds,e(t.name),1),s("div",us,e(t.description),1)]),s("div",_s,[s("div",ps,[s("div",vs,e(t.rating),1),xs])])]),s("div",ms,[s("div",hs,e(t.time),1)])])],8,as)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])])],64)}}};export{bs as default};
