import{P as V}from"./PostService-4c86bdd9.js";import{u as j,r as o,o as C,a as O,b as a,c as i,d as t,e as m,w as f,F as d,f as S,g,t as e}from"./index-255db261.js";const I=t("h3",null,[t("strong",null,"IDEArchive"),S("에 오신 걸 환영합니다!")],-1),L={class:"grid"},P={class:"col-12"},B={class:"card"},N=t("h5",null,"추천순 상위 3개",-1),E={class:"grid grid-nogutter"},R=["onClick"],T={class:"flex flex-row justify-content-between align-items-start"},$={class:"min-w-0"},A={class:"text-lg font-medium text-900 mt-2 ellipsis"},M={class:"font-medium text-secondary text-sm ellipsis"},q={class:"surface-100 p-1",style:{"border-radius":"30px"}},z={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},G={class:"text-900 font-medium text-sm"},H=t("i",{class:"pi pi-thumbs-up"},null,-1),J={class:"flex flex-row justify-content-between align-items-start mt-4"},K={class:"text-sm text-gray-500"},Q={class:"grid"},U={class:"col-12"},W={class:"card"},X=t("h5",null,"최신순 상위 3개",-1),Y={class:"grid grid-nogutter"},Z=["onClick"],tt={class:"flex flex-row justify-content-between align-items-start gap-2"},st={class:"min-w-0"},et={class:"text-lg font-medium text-900 mt-2 ellipsis"},ot={class:"font-medium text-secondary text-sm ellipsis"},lt={class:"surface-100 p-1",style:{"border-radius":"30px"}},nt={class:"surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2",style:{"border-radius":"30px","box-shadow":"0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"}},at={class:"text-900 font-medium text-sm"},it=t("i",{class:"pi pi-thumbs-up"},null,-1),rt={class:"flex flex-row justify-content-between align-items-start mt-4"},ct={class:"text-sm text-gray-500"},pt={__name:"home",setup(dt){const u=j(),_=o(null),p=o(null),x=o("grid"),y=o(null),w=o(null),b=o(null),k=o(null),D=new V;o(null),D.getPosts().then(n=>{const h=[...n].sort((l,s)=>s.like-l.like);_.value=h.slice(0,3);const r=[...n].sort((l,s)=>new Date(s.date)-new Date(l.date));p.value=r.slice(0,3)});const v=n=>{u.push("/howto/"+n)};return C(async()=>{localStorage.getItem("token")||u.push("/landing")}),(n,h)=>{const r=O("DataView");return a(),i(d,null,[I,t("div",L,[t("div",P,[t("div",B,[m(r,{value:_.value,layout:x.value,paginator:!1,rows:3,sortOrder:y.value,sortField:b.value},{grid:f(l=>[N,t("div",E,[(a(!0),i(d,null,g(l.items,(s,c)=>(a(),i("div",{key:c,class:"col-12 sm:col-6 md:col-4 p-2"},[t("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:F=>v(s._id)},[t("div",null,[t("div",T,[t("div",$,[t("div",A,e(s.title),1),t("div",M,e(s.content),1)]),t("div",q,[t("div",z,[t("div",G,e(s.like),1),H])])]),t("div",J,[t("div",K,e(new Date(s.date).toLocaleString()),1),t("div",null,e(s.author.schoolID)+" "+e(s.author.name),1)])])],8,R)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])]),t("div",Q,[t("div",U,[t("div",W,[m(r,{value:p.value,layout:x.value,paginator:!1,rows:3,sortOrder:w.value,sortField:k.value},{grid:f(l=>[X,t("div",Y,[(a(!0),i(d,null,g(l.items,(s,c)=>(a(),i("div",{key:c,class:"col-12 sm:col-6 md:col-4 p-2"},[t("div",{class:"p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer",onClick:F=>v(s._id)},[t("div",null,[t("div",tt,[t("div",st,[t("div",et,e(s.title),1),t("div",ot,e(s.content),1)]),t("div",lt,[t("div",nt,[t("div",at,e(s.like),1),it])])]),t("div",rt,[t("div",ct,e(new Date(s.date).toLocaleString()),1),t("div",null,e(s.author.schoolID)+" "+e(s.author.name),1)])])],8,Z)]))),128))])]),_:1},8,["value","layout","sortOrder","sortField"])])])])],64)}}};export{pt as default};
