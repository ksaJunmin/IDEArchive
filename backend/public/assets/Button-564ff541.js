import{r as b,b as d,c as p,d as v,e as l,f as e,g as m}from"./index-30d81b77.js";const y="/demo/images/logo-white.svg",_="/demo/images/logo.svg",h={class:"grid"},g={class:"col-12 md:col-6"},f={class:"card"},S=l("h5",null,"Default",-1),k={class:"card"},x=l("h5",null,"Severities",-1),w={class:"card"},B=l("h5",null,"Text",-1),C={class:"card"},D=l("h5",null,"Outlined",-1),P={class:"card"},I=l("h5",null,"Button Group",-1),H={class:"card"},R=l("h5",null,"SplitButton",-1),W={class:"card"},T=l("h5",null,"Templating",-1),$={class:"flex flex-wrap gap-2"},G=l("img",{alt:"logo",src:y,style:{width:"1.5rem"}},null,-1),V=l("img",{alt:"logo",src:_,style:{width:"1.5rem"}},null,-1),L=l("span",{class:"ml-2 text-bold"},"PrimeVue",-1),N={class:"col-12 md:col-6"},O={class:"card"},E=l("h5",null,"Icons",-1),U={class:"card"},j=l("h5",null,"Raised",-1),q={class:"card"},z=l("h5",null,"Rounded",-1),A={class:"card"},F=l("h5",null,"Rounded Icons",-1),J={class:"card"},K=l("h5",null,"Rounded Text",-1),M={class:"card"},Q=l("h5",null,"Rounded Outlined",-1),X={class:"card"},Y=l("h5",null,"Loading",-1),se={__name:"Button",setup(Z){const a=b([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),t=b([!1,!1,!1]),o=n=>{t.value[n]=!0,setTimeout(()=>t.value[n]=!1,1e3)};return(n,i)=>{const s=d("Button",!0),u=d("ButtonGroup"),r=d("SplitButton");return p(),v("div",h,[l("div",g,[l("div",f,[S,e(s,{label:"Submit",class:"mr-2 mb-2"}),e(s,{label:"Disabled",class:"mr-2 mb-2",disabled:!0}),e(s,{label:"Link",class:"p-button-link mr-2 mb-2"})]),l("div",k,[x,e(s,{label:"Primary",class:"mb-2 mr-2"}),e(s,{label:"Secondary",severity:"secondary",class:"mb-2 mr-2"}),e(s,{label:"Success",severity:"success",class:"mb-2 mr-2"}),e(s,{label:"Info",severity:"info",class:"mb-2 mr-2"}),e(s,{label:"Warning",severity:"warning",class:"mb-2 mr-2"}),e(s,{label:"Help",severity:"help",class:"mb-2 mr-2"}),e(s,{label:"Danger",severity:"danger",class:"mb-2 mr-2"}),e(s,{label:"Contrast",severity:"contrast",class:"mb-2 mr-2"})]),l("div",w,[B,e(s,{label:"Primary",text:"",class:"mb-2 mr-2"}),e(s,{label:"Secondary",severity:"secondary",text:"",class:"mb-2 mr-2"}),e(s,{label:"Success",severity:"success",text:"",class:"mb-2 mr-2"}),e(s,{label:"Info",severity:"info",text:"",class:"mb-2 mr-2"}),e(s,{label:"Warning",severity:"warning",text:"",class:"mb-2 mr-2"}),e(s,{label:"Help",severity:"help",text:"",class:"mb-2 mr-2"}),e(s,{label:"Danger",severity:"danger",text:"",class:"mb-2 mr-2"}),e(s,{label:"Plain",plain:"",text:"",class:"mb-2 mr-2"})]),l("div",C,[D,e(s,{label:"Primary",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Secondary",severity:"secondary",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Success",severity:"success",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Info",severity:"info",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Warning",severity:"warning",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Help",severity:"help",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Danger",severity:"danger",outlined:"",class:"mb-2 mr-2"}),e(s,{label:"Contrast",severity:"contrast",outlined:"",class:"mb-2 mr-2"})]),l("div",P,[I,e(u,null,{default:m(()=>[e(s,{label:"Save",icon:"pi pi-check"}),e(s,{label:"Delete",icon:"pi pi-trash"}),e(s,{label:"Cancel",icon:"pi pi-times"})]),_:1})]),l("div",H,[R,e(r,{label:"Save",model:a.value,class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"secondary",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"success",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"info",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"warning",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"help",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"danger",class:"mb-2 mr-2"},null,8,["model"]),e(r,{label:"Save",model:a.value,severity:"contrast",class:"mb-2 mr-2"},null,8,["model"])]),l("div",W,[T,l("div",$,[e(s,{type:"button"},{default:m(()=>[G]),_:1}),e(s,{type:"button",outlined:"",severity:"success"},{default:m(()=>[V,L]),_:1})])])]),l("div",N,[l("div",O,[E,e(s,{icon:"pi pi-star-fill",class:"mr-2 mb-2"}),e(s,{label:"Bookmark",icon:"pi pi-bookmark",class:"mr-2 mb-2"}),e(s,{label:"Bookmark",icon:"pi pi-bookmark",iconPos:"right",class:"mr-2 mb-2"})]),l("div",U,[j,e(s,{label:"Primary",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Secondary",severity:"secondary",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Success",severity:"success",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Info",severity:"info",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Warning",severity:"warning",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Help",severity:"help",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Danger",severity:"danger",raised:"",class:"mb-2 mr-2"}),e(s,{label:"Contrast",severity:"contrast",raised:"",class:"mb-2 mr-2"})]),l("div",q,[z,e(s,{label:"Primary",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Secondary",severity:"secondary",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Success",severity:"success",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Info",severity:"info",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Warning",severity:"warning",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Help",severity:"help",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Danger",severity:"danger",rounded:"",class:"mb-2 mr-2"}),e(s,{label:"Contrast",severity:"contrast",rounded:"",class:"mb-2 mr-2"})]),l("div",A,[F,e(s,{icon:"pi pi-check",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bookmark",severity:"secondary",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-search",severity:"success",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-user",severity:"info",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bell",severity:"warning",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-heart",severity:"help",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-times",severity:"danger",rounded:"",class:"mb-2 mr-2"})]),l("div",J,[K,e(s,{icon:"pi pi-check",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bookmark",severity:"secondary",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-search",severity:"success",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-user",severity:"info",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bell",severity:"warning",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-heart",severity:"help",text:"",raised:"",rounded:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-times",severity:"danger",text:"",raised:"",rounded:"",class:"mb-2 mr-2"})]),l("div",M,[Q,e(s,{icon:"pi pi-check",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bookmark",severity:"secondary",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-search",severity:"success",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-user",severity:"info",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-bell",severity:"warning",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-heart",severity:"help",rounded:"",outlined:"",class:"mb-2 mr-2"}),e(s,{icon:"pi pi-times",severity:"danger",rounded:"",outlined:"",class:"mb-2 mr-2"})]),l("div",X,[Y,e(s,{type:"button",class:"mr-2 mb-2",label:"Search",icon:"pi pi-search",loading:t.value[0],onClick:i[0]||(i[0]=c=>o(0))},null,8,["loading"]),e(s,{type:"button",class:"mr-2 mb-2",label:"Search",icon:"pi pi-search",iconPos:"right",loading:t.value[1],onClick:i[1]||(i[1]=c=>o(1))},null,8,["loading"]),e(s,{type:"button",class:"mr-2 mb-2",icon:"pi pi-search",loading:t.value[2],onClick:i[2]||(i[2]=c=>o(2))},null,8,["loading"]),e(s,{type:"button",class:"mr-2 mb-2",label:"Search",loading:t.value[3],onClick:i[3]||(i[3]=c=>o(3))},null,8,["loading"])])])])}}};export{se as default};
