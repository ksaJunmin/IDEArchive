import{p as le,r,q as ae,o as oe,s as se,b as d,c as v,d as m,e as l,f as o,g as s,i as y,t as p,v as S,n as I}from"./index-fa082ab6.js";import{P as ie}from"./ProductService-a07f9b02.js";const ne={class:"grid"},de={class:"col-12"},ue={class:"card"},re={class:"my-2"},ce={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},ve=l("h5",{class:"m-0"},"Manage Products",-1),me=l("span",{class:"p-column-title"},"Code",-1),pe=l("span",{class:"p-column-title"},"Name",-1),_e=l("span",{class:"p-column-title"},"Image",-1),ye=["src","alt"],fe=l("span",{class:"p-column-title"},"Price",-1),ge=l("span",{class:"p-column-title"},"Category",-1),he=l("span",{class:"p-column-title"},"Rating",-1),be=l("span",{class:"p-column-title"},"Status",-1),Se=["src","alt"],we={class:"field"},ke=l("label",{for:"name"},"Name",-1),Ce={key:0,class:"p-invalid"},Ve={class:"field"},xe=l("label",{for:"description"},"Description",-1),Pe={class:"field"},Ue=l("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1),De={key:0},Ie={key:1},Te={key:2},Ne={class:"field"},Le=l("label",{class:"mb-3"},"Category",-1),Fe={class:"formgrid grid"},qe={class:"field-radiobutton col-6"},Be=l("label",{for:"category1"},"Accessories",-1),Me={class:"field-radiobutton col-6"},Re=l("label",{for:"category2"},"Clothing",-1),Oe={class:"field-radiobutton col-6"},Ae=l("label",{for:"category3"},"Electronics",-1),Ke={class:"field-radiobutton col-6"},ze=l("label",{for:"category4"},"Fitness",-1),Ee={class:"formgrid grid"},je={class:"field col"},$e=l("label",{for:"price"},"Price",-1),Ye={key:0,class:"p-invalid"},Qe={class:"field col"},We=l("label",{for:"quantity"},"Quantity",-1),Ge={class:"flex align-items-center justify-content-center"},He=l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Je={key:0},Xe={class:"flex align-items-center justify-content-center"},Ze=l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),et={key:0},ot={__name:"Crud",setup(tt){const w=le(),u=r(null),f=r(!1),h=r(!1),b=r(!1),t=r({}),g=r(null),x=r(null),k=r({}),_=r(!1),T=r([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),N=new ie,L=i=>{switch(i.toLowerCase()){case"instock":return"success";case"lowstock":return"warning";case"outofstock":return"danger";default:return"info"}};ae(()=>{$()}),oe(()=>{N.getProducts().then(i=>u.value=i)});const F=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD"}),q=()=>{t.value={},_.value=!1,f.value=!0},B=()=>{f.value=!1,_.value=!1},M=()=>{_.value=!0,t.value.name&&t.value.name.trim()&&t.value.price&&(t.value.id?(t.value.inventoryStatus=t.value.inventoryStatus.value?t.value.inventoryStatus.value:t.value.inventoryStatus,u.value[K(t.value.id)]=t.value,w.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(t.value.id=P(),t.value.code=P(),t.value.image="product-placeholder.svg",t.value.inventoryStatus=t.value.inventoryStatus?t.value.inventoryStatus.value:"INSTOCK",u.value.push(t.value),w.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),f.value=!1,t.value={})},R=i=>{t.value={...i},f.value=!0},O=i=>{t.value=i,h.value=!0},A=()=>{u.value=u.value.filter(i=>i.id!==t.value.id),h.value=!1,t.value={},w.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},K=i=>{let a=-1;for(let n=0;n<u.value.length;n++)if(u.value[n].id===i){a=n;break}return a},P=()=>{let i="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<5;n++)i+=a.charAt(Math.floor(Math.random()*a.length));return i},z=()=>{x.value.exportCSV()},E=()=>{b.value=!0},j=()=>{u.value=u.value.filter(i=>!g.value.includes(i)),b.value=!1,g.value=null,w.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},$=()=>{k.value={global:{value:null,matchMode:se.CONTAINS}}};return(i,a)=>{const n=d("Button"),Y=d("FileUpload"),Q=d("Toolbar"),W=d("InputIcon"),U=d("InputText"),G=d("IconField"),c=d("Column"),H=d("Rating"),J=d("Tag"),X=d("DataTable"),Z=d("Textarea"),ee=d("Dropdown"),C=d("RadioButton"),D=d("InputNumber"),V=d("Dialog");return v(),m("div",ne,[l("div",de,[l("div",ue,[o(Q,{class:"mb-4"},{start:s(()=>[l("div",re,[o(n,{label:"New",icon:"pi pi-plus",class:"mr-2",severity:"success",onClick:q}),o(n,{label:"Delete",icon:"pi pi-trash",severity:"danger",onClick:E,disabled:!g.value||!g.value.length},null,8,["disabled"])])]),end:s(()=>[o(Y,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),o(n,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:a[0]||(a[0]=e=>z(e))})]),_:1}),o(X,{ref_key:"dt",ref:x,value:u.value,selection:g.value,"onUpdate:selection":a[2]||(a[2]=e=>g.value=e),dataKey:"id",paginator:!0,rows:10,filters:k.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:s(()=>[l("div",ce,[ve,o(G,{iconPosition:"left",class:"block mt-2 md:mt-0"},{default:s(()=>[o(W,{class:"pi pi-search"}),o(U,{class:"w-full sm:w-auto",modelValue:k.value.global.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value.global.value=e),placeholder:"Search..."},null,8,["modelValue"])]),_:1})])]),default:s(()=>[o(c,{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(c,{field:"code",header:"Code",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[me,y(" "+p(e.data.code),1)]),_:1}),o(c,{field:"name",header:"Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[pe,y(" "+p(e.data.name),1)]),_:1}),o(c,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[_e,l("img",{src:"/demo/images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,ye)]),_:1}),o(c,{field:"price",header:"Price",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:s(e=>[fe,y(" "+p(F(e.data.price)),1)]),_:1}),o(c,{field:"category",header:"Category",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[ge,y(" "+p(e.data.category),1)]),_:1}),o(c,{field:"rating",header:"Reviews",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[he,o(H,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),_:1}),o(c,{field:"inventoryStatus",header:"Status",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:s(e=>[be,o(J,{severity:L(e.data.inventoryStatus)},{default:s(()=>[y(p(e.data.inventoryStatus),1)]),_:2},1032,["severity"])]),_:1}),o(c,{headerStyle:"min-width:10rem;"},{body:s(e=>[o(n,{icon:"pi pi-pencil",class:"mr-2",severity:"success",rounded:"",onClick:te=>R(e.data)},null,8,["onClick"]),o(n,{icon:"pi pi-trash",class:"mt-2",severity:"warning",rounded:"",onClick:te=>O(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","filters"]),o(V,{visible:f.value,"onUpdate:visible":a[12]||(a[12]=e=>f.value=e),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:s(()=>[o(n,{label:"Cancel",icon:"pi pi-times",text:"",onClick:B}),o(n,{label:"Save",icon:"pi pi-check",text:"",onClick:M})]),default:s(()=>[t.value.image?(v(),m("img",{key:0,src:"/demo/images/product/"+t.value.image,alt:t.value.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,Se)):S("",!0),l("div",we,[ke,o(U,{id:"name",modelValue:t.value.name,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:_.value&&!t.value.name},null,8,["modelValue","invalid"]),_.value&&!t.value.name?(v(),m("small",Ce,"Name is required.")):S("",!0)]),l("div",Ve,[xe,o(Z,{id:"description",modelValue:t.value.description,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value.description=e),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),l("div",Pe,[Ue,o(ee,{id:"inventoryStatus",modelValue:t.value.inventoryStatus,"onUpdate:modelValue":a[5]||(a[5]=e=>t.value.inventoryStatus=e),options:T.value,optionLabel:"label",placeholder:"Select a Status"},{value:s(e=>[e.value&&e.value.value?(v(),m("div",De,[l("span",{class:I("product-badge status-"+e.value.value)},p(e.value.label),3)])):e.value&&!e.value.value?(v(),m("div",Ie,[l("span",{class:I("product-badge status-"+e.value.toLowerCase())},p(e.value),3)])):(v(),m("span",Te,p(e.placeholder),1))]),_:1},8,["modelValue","options"])]),l("div",Ne,[Le,l("div",Fe,[l("div",qe,[o(C,{id:"category1",name:"category",value:"Accessories",modelValue:t.value.category,"onUpdate:modelValue":a[6]||(a[6]=e=>t.value.category=e)},null,8,["modelValue"]),Be]),l("div",Me,[o(C,{id:"category2",name:"category",value:"Clothing",modelValue:t.value.category,"onUpdate:modelValue":a[7]||(a[7]=e=>t.value.category=e)},null,8,["modelValue"]),Re]),l("div",Oe,[o(C,{id:"category3",name:"category",value:"Electronics",modelValue:t.value.category,"onUpdate:modelValue":a[8]||(a[8]=e=>t.value.category=e)},null,8,["modelValue"]),Ae]),l("div",Ke,[o(C,{id:"category4",name:"category",value:"Fitness",modelValue:t.value.category,"onUpdate:modelValue":a[9]||(a[9]=e=>t.value.category=e)},null,8,["modelValue"]),ze])])]),l("div",Ee,[l("div",je,[$e,o(D,{id:"price",modelValue:t.value.price,"onUpdate:modelValue":a[10]||(a[10]=e=>t.value.price=e),mode:"currency",currency:"USD",locale:"en-US",invalid:_.value&&!t.value.price,required:!0},null,8,["modelValue","invalid"]),_.value&&!t.value.price?(v(),m("small",Ye,"Price is required.")):S("",!0)]),l("div",Qe,[We,o(D,{id:"quantity",modelValue:t.value.quantity,"onUpdate:modelValue":a[11]||(a[11]=e=>t.value.quantity=e),integeronly:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),o(V,{visible:h.value,"onUpdate:visible":a[14]||(a[14]=e=>h.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:s(()=>[o(n,{label:"No",icon:"pi pi-times",text:"",onClick:a[13]||(a[13]=e=>h.value=!1)}),o(n,{label:"Yes",icon:"pi pi-check",text:"",onClick:A})]),default:s(()=>[l("div",Ge,[He,t.value?(v(),m("span",Je,[y("Are you sure you want to delete "),l("b",null,p(t.value.name),1),y("?")])):S("",!0)])]),_:1},8,["visible"]),o(V,{visible:b.value,"onUpdate:visible":a[16]||(a[16]=e=>b.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:s(()=>[o(n,{label:"No",icon:"pi pi-times",text:"",onClick:a[15]||(a[15]=e=>b.value=!1)}),o(n,{label:"Yes",icon:"pi pi-check",text:"",onClick:j})]),default:s(()=>[l("div",Xe,[Ze,t.value?(v(),m("span",et,"Are you sure you want to delete the selected products?")):S("",!0)])]),_:1},8,["visible"])])])])}}};export{ot as default};
