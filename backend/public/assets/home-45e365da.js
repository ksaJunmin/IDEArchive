import{P as S}from"./ProductService-a07f9b02.js";import{j as N,k as E,r as o,o as I,b,c as i,d as a,e as s,f as _,g as p,t as e,F as v,i as k,l as w}from"./index-2cc40576.js";const L={key:0},R={key:1},T=s("h3",null,[s("strong",null,"IDEArchive"),k("에 오신 걸 환영합니다!")],-1),$={class:"grid"},A={class:"col-12"},M={class:"card"},q=s("h5",null,"추천순 상위 3개",-1),z={class:"grid grid-nogutter"},G=["onClick"],H={class:"flex flex-row justify-content-between align-items-start"},J={class:"min-w-0"},K={class:"text-lg font-medium text-900 mt-2 ellipsis"},Q={class:"font-medium text-secondary text-sm ellipsis"},U={class:"surface-100 p-1",style:{"border-radius":"30px"}},W={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},X={class:"text-900 font-medium text-sm"},Y=s("i",{class:"pi pi-thumbs-up"},null,-1),Z={class:"flex flex-column gap-2 mt-4"},ss={class:"text-sm text-gray-500"},ts={class:"grid"},es={class:"col-12"},os={class:"card"},ls=s("h5",null,"최신순 상위 3개",-1),is={class:"grid grid-nogutter"},as=["onClick"],ns={class:"flex flex-row justify-content-between align-items-start gap-2"},cs={class:"min-w-0"},rs={class:"text-lg font-medium text-900 mt-2 ellipsis"},ds={class:"font-medium text-secondary text-sm ellipsis"},us={class:"surface-100 p-1",style:{"border-radius":"30px"}},_s={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},ps={class:"text-900 font-medium text-sm"},vs=s("i",{class:"pi pi-thumbs-up"},null,-1),xs={class:"flex flex-column gap-2 mt-4"},ms={class:"text-sm text-gray-500"},ys={__name:"home",setup(hs){const F=N("http"),C=E(),x=o(null),m=o(null),h=o("grid"),V=o(null),j=o(null),D=o(null),O=o(null),g=new S;I(()=>{Promise.all([g.getProductsSmall1(),g.getProductsSmall2()]).then(([n,y])=>{const r=[...n,...y],d=r.sort((t,l)=>l.rating-t.rating);x.value=d.slice(0,3);const c=r.sort((t,l)=>l.id-t.id);m.value=c.slice(0,3)})});const f=n=>{C.push("/post/"+n)},u=o(),P=()=>{F.get("/users").then(n=>{u.value=n.data})};return(n,y)=>{const r=b("Button"),d=b("DataView");return i(),a(v,null,[s("div",null,[_(r,{onClick:P},{default:p(()=>[k(" submit ")]),_:1}),u.value.length>0?(i(),a("p",L,e(u.value.value),1)):(i(),a("p",R,"No users available."))]),T,s("div",$,[s("div",A,[s("div",M,[_(d,{value:x.value,layout:h.value,paginator:!1,rows:3,sortOrder:V.value,sortField:D.value},{grid:p(c=>[q,s("div",z,[(i(!0),a(v,null,w(c.items,(t,l)=>(i(),a("div",{key:l,class:"col-12 sm:col-6 md:col-4 p-2"},[s("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:B=>f(t.id)},[s("div",null,[s("div",H,[s("div",J,[s("div",K,e(t.name),1),s("div",Q,e(t.description),1)]),s("div",U,[s("div",W,[s("div",X,e(t.rating),1),Y])])]),s("div",Z,[s("div",ss,e(t.time),1)])])],8,G)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),s("div",ts,[s("div",es,[s("div",os,[_(d,{value:m.value,layout:h.value,paginator:!1,rows:3,sortOrder:j.value,sortField:O.value},{grid:p(c=>[ls,s("div",is,[(i(!0),a(v,null,w(c.items,(t,l)=>(i(),a("div",{key:l,class:"col-12 sm:col-6 md:col-4 p-2"},[s("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:B=>f(t.id)},[s("div",null,[s("div",ns,[s("div",cs,[s("div",rs,e(t.name),1),s("div",ds,e(t.description),1)]),s("div",us,[s("div",_s,[s("div",ps,e(t.rating),1),vs])])]),s("div",xs,[s("div",ms,e(t.time),1)])])],8,as)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])])],64)}}};export{ys as default};
