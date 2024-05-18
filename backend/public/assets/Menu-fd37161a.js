import{r as t,b as i,c as N,d as K,e,f as l,g as u,i as L}from"./index-3af807de.js";const E={class:"grid p-fluid"},R={class:"col-12"},A={class:"card card-w-title"},D=e("h5",null,"Menubar",-1),W={class:"col-12"},H={class:"card card-w-title"},Q=e("h5",null,"Breadcrumb",-1),U={class:"col-12 md:col-6"},z={class:"card card-w-title"},j=e("h5",null,"Steps",-1),q=e("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),G={class:"col-12 md:col-6"},J={class:"card card-w-title"},X=e("h5",null,"TabMenu",-1),Y=e("p",null,"Steps and TabMenu are integrated with the same child routes.",-1),Z={class:"col-12 md:col-4"},$={class:"card"},ee=e("h5",null,"Tiered Menu",-1),le={class:"col-12 md:col-4"},ie={class:"card"},te=e("h5",null,"Plain Menu",-1),oe={class:"col-12 md:col-4"},ae={class:"card"},ne=e("h5",null,"Overlay Menu",-1),se=e("h5",null,"ContextMenu",-1),pe={class:"col-12 md:col-6"},ce={class:"card"},me=e("h5",null,"MegaMenu - Horizontal",-1),re=e("h5",{style:{"margin-top":"1.55em"}},"MegaMenu - Vertical",-1),ue={class:"col-12 md:col-6"},de={class:"card"},be=e("h5",null,"PanelMenu",-1),we={__name:"Menu",setup(_e){const a=t(null),n=t(null),d=t([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),b=t({icon:"pi pi-home",to:"/"}),_=t([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),s=t([{label:"Personal",to:"/uikit/menu"},{label:"Seat",to:"/uikit/menu/seat"},{label:"Payment",to:"/uikit/menu/payment"},{label:"Confirmation",to:"/uikit/menu/confirmation"}]),h=t([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),f=t([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),w=t([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),I=t([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),p=t([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),g=t([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]),v=o=>{a.value.toggle(o)},M=o=>{n.value.show(o)};return(o,he)=>{const C=i("InputIcon"),k=i("InputText"),S=i("IconField"),T=i("Menubar"),B=i("Breadcrumb"),x=i("Steps"),c=i("router-view"),y=i("TabMenu"),O=i("TieredMenu"),m=i("Menu",!0),V=i("Button"),P=i("ContextMenu"),r=i("MegaMenu"),F=i("PanelMenu");return N(),K("div",E,[e("div",R,[e("div",A,[D,l(T,{model:d.value},{end:u(()=>[l(S,{iconPosition:"left"},{default:u(()=>[l(C,{class:"pi pi-search"}),l(k,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])])]),e("div",W,[e("div",H,[Q,l(B,{home:b.value,model:_.value},null,8,["home","model"])])]),e("div",U,[e("div",z,[j,q,l(x,{model:s.value,readonly:!1},null,8,["model"]),l(c)])]),e("div",G,[e("div",J,[X,Y,l(y,{model:s.value},null,8,["model"]),l(c)])]),e("div",Z,[e("div",$,[ee,l(O,{model:h.value},null,8,["model"])])]),e("div",le,[e("div",ie,[te,l(m,{model:w.value},null,8,["model"])])]),e("div",oe,[e("div",ae,[ne,l(m,{ref_key:"menu",ref:a,model:f.value,popup:!0},null,8,["model"]),l(V,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:v,style:{width:"auto"}})]),e("div",{class:"card",onContextmenu:M},[se,L(" Right click to display. "),l(P,{ref_key:"contextMenu",ref:n,model:I.value},null,8,["model"])],32)]),e("div",pe,[e("div",ce,[me,l(r,{model:p.value},null,8,["model"]),re,l(r,{model:p.value,orientation:"vertical"},null,8,["model"])])]),e("div",ue,[e("div",de,[be,l(F,{model:g.value},null,8,["model"])])])])}}};export{we as default};
