import{v as ne,r as m,a as M,n as oe,p,B as w,b as c,c as F,d as R,e as l,f as t,g as a,i as d,t as s,q as x,C as se,y as ie,z as re}from"./index-74b571b9.js";import{P as de}from"./ProductService-a07f9b02.js";const k="/demo/images/flag/flag_placeholder.png";class ce{getCustomersSmall(){return fetch("/demo/data/customers-small.json",{headers:{"Cache-Control":"no-cache"}}).then(u=>u.json()).then(u=>u.data)}getCustomersMedium(){return fetch("/demo/data/customers-medium.json",{headers:{"Cache-Control":"no-cache"}}).then(u=>u.json()).then(u=>u.data)}getCustomersLarge(){return fetch("/demo/data/customers-large.json",{headers:{"Cache-Control":"no-cache"}}).then(u=>u.json()).then(u=>u.data)}}const S=y=>(ie("data-v-b9b98c3c"),y=y(),re(),y),ue={class:"grid"},me={class:"col-12"},pe={class:"card"},he=S(()=>l("h5",null,"Filter Menu",-1)),ve={class:"flex justify-content-between flex-column sm:flex-row"},ye={class:"flex align-items-center gap-2"},_e={class:"flex align-items-center gap-2"},ge=["alt","src"],fe=S(()=>l("div",{class:"mb-3 text-bold"},"Agent Picker",-1)),be={class:"p-multiselect-representative-option"},we=["alt","src"],xe={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},Se={key:1},Ce={class:"flex align-items-center justify-content-between px-2"},Ve={class:"col-12"},Ue={class:"card"},Ie=S(()=>l("h5",null,"Frozen Columns",-1)),Te={class:"flex align-items-center gap-2"},Ae={class:"flex align-items-center gap-2"},Fe=["alt","src"],ke={class:"text-bold"},De={class:"col-12"},Be={class:"card"},Ne=S(()=>l("h5",null,"Row Expand",-1)),Le=["src","alt"],Me={class:"p-3"},Re={class:"col-12"},Ee={class:"card"},ze=S(()=>l("h5",null,"Subheader Grouping",-1)),je={class:"flex align-items-center gap-2"},$e={class:"flex align-items-center gap-2"},Oe=["alt","src"],qe={style:{"text-align":"right"},class:"text-bold pr-6"},He={__name:"Table",setup(y){const u=m(null),D=m(null),C=m(null),_=m(null),B=m(null),N=m(null),U=m(!1),I=m(null),V=m([]),E=M(["unqualified","qualified","new","negotiation","renewal","proposal"]),z=M([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),T=new ce,j=new de,$=i=>{switch(i.toLowerCase()){case"instock":return"success";case"lowstock":return"warning";case"outofstock":return"danger";default:return"info"}},g=i=>{switch(i){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}};oe(()=>{j.getProductsWithOrdersSmall().then(i=>I.value=i),T.getCustomersLarge().then(i=>{u.value=i,B.value=!1,u.value.forEach(r=>r.date=new Date(r.date))}),T.getCustomersLarge().then(i=>D.value=i),T.getCustomersMedium().then(i=>C.value=i),N.value=!1,L()});const L=()=>{_.value={global:{value:null,matchMode:p.CONTAINS},name:{operator:w.AND,constraints:[{value:null,matchMode:p.STARTS_WITH}]},"country.name":{operator:w.AND,constraints:[{value:null,matchMode:p.STARTS_WITH}]},representative:{value:null,matchMode:p.IN},date:{operator:w.AND,constraints:[{value:null,matchMode:p.DATE_IS}]},balance:{operator:w.AND,constraints:[{value:null,matchMode:p.EQUALS}]},status:{operator:w.OR,constraints:[{value:null,matchMode:p.EQUALS}]},activity:{value:[0,100],matchMode:p.BETWEEN},verified:{value:null,matchMode:p.EQUALS}}},O=()=>{L()},q=()=>{V.value=I.value.reduce((i,r)=>(i[r.id]=!0)&&i,{})},H=()=>{V.value=null},f=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD"}),W=i=>i.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),G=i=>{let r=0;if(C.value)for(let h of C.value)h.representative.name===i&&r++;return r};return(i,r)=>{const h=c("Button"),K=c("InputIcon"),A=c("InputText"),Q=c("IconField"),o=c("Column"),X=c("MultiSelect"),J=c("Calendar"),Y=c("InputNumber"),v=c("Tag"),Z=c("Dropdown"),P=c("ProgressBar"),ee=c("Slider"),te=c("TriStateCheckbox"),b=c("DataTable"),ae=c("ToggleButton"),le=c("Rating");return F(),R("div",ue,[l("div",me,[l("div",pe,[he,t(b,{value:u.value,paginator:!0,rows:10,dataKey:"id",rowHover:!0,filters:_.value,"onUpdate:filters":r[2]||(r[2]=e=>_.value=e),filterDisplay:"menu",loading:B.value,globalFilterFields:["name","country.name","representative.name","balance","status"],showGridlines:""},{header:a(()=>[l("div",ve,[t(h,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:"",onClick:r[0]||(r[0]=e=>O())}),t(Q,{iconPosition:"left"},{default:a(()=>[t(K,{class:"pi pi-search"}),t(A,{modelValue:_.value.global.value,"onUpdate:modelValue":r[1]||(r[1]=e=>_.value.global.value=e),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])]),_:1})])]),empty:a(()=>[d(" No customers found. ")]),loading:a(()=>[d(" Loading customers data. Please wait. ")]),default:a(()=>[t(o,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:a(({data:e})=>[d(s(e.name),1)]),filter:a(({filterModel:e})=>[t(A,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(o,{header:"Country",filterField:"country.name",style:{"min-width":"12rem"}},{body:a(({data:e})=>[l("div",ye,[l("img",{alt:"flag",src:k,class:x(`flag flag-${e.country.code}`),style:{width:"24px"}},null,2),l("span",null,s(e.country.name),1)])]),filter:a(({filterModel:e})=>[t(A,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:a(({filterCallback:e})=>[t(h,{type:"button",icon:"pi pi-times",onClick:n=>e(),severity:"secondary"},null,8,["onClick"])]),filterapply:a(({filterCallback:e})=>[t(h,{type:"button",icon:"pi pi-check",onClick:n=>e(),severity:"success"},null,8,["onClick"])]),_:1}),t(o,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:a(({data:e})=>[l("div",_e,[l("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${e.representative.image}`,style:{width:"32px"}},null,8,ge),l("span",null,s(e.representative.name),1)])]),filter:a(({filterModel:e})=>[fe,t(X,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:z,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:a(n=>[l("div",be,[l("img",{alt:n.option.name,src:"/demo/images/avatar/"+n.option.image,width:"32",style:{"vertical-align":"middle"}},null,8,we),l("span",xe,s(n.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(o,{header:"Date",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:a(({data:e})=>[d(s(W(e.date)),1)]),filter:a(({filterModel:e})=>[t(J,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(o,{header:"Balance",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:a(({data:e})=>[d(s(f(e.balance)),1)]),filter:a(({filterModel:e})=>[t(Y,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(o,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:a(({data:e})=>[t(v,{severity:g(e.status)},{default:a(()=>[d(s(e.status.toUpperCase()),1)]),_:2},1032,["severity"])]),filter:a(({filterModel:e})=>[t(Z,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:E,placeholder:"Any",class:"p-column-filter",showClear:!0},{value:a(n=>[n.value?(F(),se(v,{key:0,severity:g(n.value)},{default:a(()=>[d(s(n.value),1)]),_:2},1032,["severity"])):(F(),R("span",Se,s(n.placeholder),1))]),option:a(n=>[t(v,{severity:g(n.option)},{default:a(()=>[d(s(n.option.toUpperCase()),1)]),_:2},1032,["severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(o,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:a(({data:e})=>[t(P,{value:e.activity,showValue:!1,style:{height:"0.5rem"}},null,8,["value"])]),filter:a(({filterModel:e})=>[t(ee,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,range:!0,class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),l("div",Ce,[l("span",null,s(e.value?e.value[0]:0),1),l("span",null,s(e.value?e.value[1]:100),1)])]),_:1}),t(o,{field:"verified",header:"Verified",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:a(({data:e})=>[l("i",{class:x(["pi",{"text-green-500 pi-check-circle":e.verified,"text-pink-500 pi-times-circle":!e.verified}])},null,2)]),filter:a(({filterModel:e})=>[t(te,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value","filters","loading","globalFilterFields"])])]),l("div",Ve,[l("div",Ue,[Ie,t(ae,{modelValue:U.value,"onUpdate:modelValue":r[3]||(r[3]=e=>U.value=e),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Id",offLabel:"Freeze Id",style:{width:"10rem"}},null,8,["modelValue"]),t(b,{value:D.value,scrollable:!0,scrollHeight:"400px",loading:N.value,scrollDirection:"both",class:"mt-3"},{default:a(()=>[t(o,{field:"name",header:"Name",style:{"min-width":"200px"},frozen:""}),t(o,{field:"id",header:"Id",style:{"min-width":"100px"},frozen:U.value},null,8,["frozen"]),t(o,{field:"country.name",header:"Country",style:{width:"200px"}},{body:a(({data:e})=>[l("div",Te,[l("img",{alt:"flag",src:k,class:x(`flag flag-${e.country.code}`),style:{width:"24px"}},null,2),l("span",null,s(e.country.name),1)])]),_:1}),t(o,{field:"date",header:"Date",style:{"min-width":"200px"}}),t(o,{field:"company",header:"Company",style:{"min-width":"200px"}}),t(o,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:a(({data:e})=>[t(v,{severity:g(e.status)},{default:a(()=>[d(s(e.status.toUpperCase()),1)]),_:2},1032,["severity"])]),_:1}),t(o,{field:"activity",header:"Activity",style:{"min-width":"200px"}}),t(o,{field:"representative.name",header:"Representative",style:{"min-width":"200px"}},{body:a(({data:e})=>[l("div",Ae,[l("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${e.representative.image}`,style:{width:"32px"}},null,8,Fe),l("span",null,s(e.representative.name),1)])]),_:1}),t(o,{field:"balance",header:"Balance",style:{"min-width":"200px"},frozen:"",alignFrozen:"right"},{body:a(({data:e})=>[l("span",ke,s(f(e.balance)),1)]),_:1})]),_:1},8,["value","loading"])])]),l("div",De,[l("div",Be,[Ne,t(b,{value:I.value,expandedRows:V.value,"onUpdate:expandedRows":r[4]||(r[4]=e=>V.value=e),dataKey:"id",tableStyle:"min-width: 60rem"},{header:a(()=>[l("div",null,[t(h,{icon:"pi pi-plus",label:"Expand All",onClick:q,class:"mr-2 mb-2"}),t(h,{icon:"pi pi-minus",label:"Collapse All",onClick:H,class:"mb-2"})])]),expansion:a(e=>[l("div",Me,[l("h5",null,"Orders for "+s(e.data.name),1),t(b,{value:e.data.orders},{default:a(()=>[t(o,{field:"id",header:"Id",sortable:!0},{body:a(n=>[d(s(n.data.id),1)]),_:2},1024),t(o,{field:"customer",header:"Customer",sortable:!0},{body:a(n=>[d(s(n.data.customer),1)]),_:2},1024),t(o,{field:"date",header:"Date",sortable:!0},{body:a(n=>[d(s(n.data.date),1)]),_:2},1024),t(o,{field:"amount",header:"Amount",sortable:!0},{body:a(n=>[d(s(f(n.data.amount)),1)]),_:2},1024),t(o,{field:"status",header:"Status",sortable:!0},{body:a(n=>[l("span",{class:x("order-badge order-"+(n.data.status?n.data.status.toLowerCase():""))},s(n.data.status),3)]),_:2},1024),t(o,{headerStyle:"width:4rem"},{body:a(()=>[t(h,{icon:"pi pi-search"})]),_:1})]),_:2},1032,["value"])])]),default:a(()=>[t(o,{expander:!0,headerStyle:"width: 3rem"}),t(o,{field:"name",header:"Name",sortable:!0},{body:a(e=>[d(s(e.data.name),1)]),_:1}),t(o,{header:"Image"},{body:a(e=>[l("img",{src:"/demo/images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,Le)]),_:1}),t(o,{field:"price",header:"Price",sortable:!0},{body:a(e=>[d(s(f(e.data.price)),1)]),_:1}),t(o,{field:"category",header:"Category",sortable:!0},{body:a(e=>[d(s(f(e.data.category)),1)]),_:1}),t(o,{field:"rating",header:"Reviews",sortable:!0},{body:a(e=>[t(le,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),_:1}),t(o,{field:"inventoryStatus",header:"Status",sortable:!0},{body:a(e=>[t(v,{severity:$(e.data.inventoryStatus)},{default:a(()=>[d(s(e.data.inventoryStatus),1)]),_:2},1032,["severity"])]),_:1})]),_:1},8,["value","expandedRows"])])]),l("div",Re,[l("div",Ee,[ze,t(b,{value:C.value,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px"},{groupheader:a(e=>[l("div",$e,[l("img",{alt:e.data.representative.name,src:"/demo/images/avatar/"+e.data.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,Oe),l("span",null,s(e.data.representative.name),1)])]),groupfooter:a(e=>[l("td",qe,"Total Customers: "+s(G(e.data.representative.name)),1)]),default:a(()=>[t(o,{field:"representative.name",header:"Representative"}),t(o,{field:"name",header:"Name",style:{"min-width":"200px"}}),t(o,{field:"country",header:"Country",style:{"min-width":"200px"}},{body:a(({data:e})=>[l("div",je,[l("img",{alt:"flag",src:k,class:x(`flag flag-${e.country.code}`),style:{width:"24px"}},null,2),l("span",null,s(e.country.name),1)])]),_:1}),t(o,{field:"company",header:"Company",style:{"min-width":"200px"}}),t(o,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:a(e=>[t(v,{severity:g(e.data.status)},{default:a(()=>[d(s(e.data.status.toUpperCase()),1)]),_:2},1032,["severity"])]),_:1}),t(o,{field:"date",header:"Date",style:{"min-width":"200px"}})]),_:1},8,["value"])])])])}}},Ke=ne(He,[["__scopeId","data-v-b9b98c3c"]]);export{Ke as default};
