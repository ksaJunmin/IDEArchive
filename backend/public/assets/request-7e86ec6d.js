import{_ as S,m as B,u as R,r as l,o as b,a as y,b as o,c as n,e,t as c,d as r,F as D,g as E,w as g,k as u,f as h,p as L,h as N}from"./index-270258cf.js";import{R as V}from"./RequestService-555ca0f9.js";import{_ as $}from"./MathRenderer-b6a6b89e.js";const F=i=>(L("data-v-0d56350a"),i=i(),N(),i),j={class:"grid"},M={class:"col-12"},T={class:"card"},z={key:0},G={class:"flex flex-row gap-2 mt-4 align-items-center"},H={key:0},J={key:1},K={key:0,class:"font-medium"},O={key:1,class:"font-medium text-xl"},P={class:"flex flex-column mt-4 align-items-center justify-center"},Q={class:"flex gap-2"},U=F(()=>e("h3",null,"답변",-1)),W={class:"grid"},X={class:"col-12"},Y={class:"card"},Z={key:0},ee={key:1},te={key:0},se={__name:"request",setup(i){const _=new V,w=B(),x=R(),d=l(w.params.requestId),s=l(null),q=localStorage.getItem("token"),m=l([]),p=l(!1);l(null);const I=async()=>{try{m.value=await _.fetchAnswers(d.value)}catch(t){console.error("Error fetching comments:",t)}},A=t=>{x.push(`/request/${t}/answer`)},C=async t=>{await _.chooseAnswer(d.value,t)};return b(async()=>{try{const t=await _.getRequestById(d.value);s.value=t}catch(t){console.error("Error fetching post:",t)}try{await I(),p.value=!!q}catch(t){console.error("Error fetching comments:",t)}}),(t,f)=>{const k=y("Divider"),v=y("Button");return o(),n("div",j,[e("div",M,[e("div",T,[s.value?(o(),n("div",z,[e("h2",null,c(s.value.title),1),e("div",null,[e("div",G,[s.value.author?(o(),n("div",H,c(s.value.author.schoolID)+" "+c(s.value.author.name),1)):(o(),n("div",J," 옛날 글 "))])]),r(k),s.value.islatex==1?(o(),n("div",K,[r($,{content:s.value.content},null,8,["content"])])):(o(),n("div",O,c(s.value.content),1)),e("div",null,[e("div",P,[e("div",Q,[r(v,{label:t.isLiked?"좋아요 취소":"좋아요",icon:"pi pi-thumbs-up",onClick:t.handleLike},null,8,["label","onClick"])])])]),r(k),e("div",null,[U,e("div",W,[e("div",X,[(o(!0),n(D,null,E(m.value,a=>(o(),n("div",{key:a._id},[e("div",Y,[s.value.chosenAnswer==a._id?(o(),n("div",Z," 채택되었습니다! ")):u("",!0),e("p",null,[e("strong",null,c(a.author.name)+":",1),h(" "+c(a.content),1)]),s.value.chosenAnswer?u("",!0):(o(),n("div",ee,[r(v,{onClick:oe=>C(a._id)},{default:g(()=>[h(" 채택하기 ")]),_:2},1032,["onClick"])]))])]))),128))])]),p.value&&!s.value.chosenAnswer?(o(),n("div",te,[r(v,{onClick:f[0]||(f[0]=a=>A(d.value))},{default:g(()=>[h("답변 추가하기")]),_:1})])):u("",!0)])])):u("",!0)])])])}}},re=S(se,[["__scopeId","data-v-0d56350a"]]);export{re as default};
