import{P as f}from"./ProductService-a07f9b02.js";import{r as i,o as y,b as o,c as w,d as O,e,f as n,g as c,t as d}from"./index-637ffe5f.js";class k{getImages(){return fetch("/demo/data/photos.json",{headers:{"Cache-Control":"no-cache"}}).then(s=>s.json()).then(s=>s.data)}}const V={class:"grid p-fluid"},C={class:"col-12"},I={class:"card"},T=e("h5",null,"Carousel",-1),j={class:"border-1 surface-border border-round m-2 p-3"},B={class:"mb-3"},G={class:"relative mx-auto"},K=["src","alt"],N={class:"mb-3 font-medium"},M={class:"flex justify-content-between align-items-center"},R={class:"mt-0 font-semibold text-xl"},D={class:"col-12"},E={class:"card"},F=e("h5",null,"Image",-1),L={class:"flex justify-content-center"},U={class:"col-12"},W={class:"card"},$=e("h5",null,"Galleria",-1),q=["src","alt"],z=["src","alt"],Q={__name:"Media",setup(u){const s=i([]),l=i([]),m=i([{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]),_=i([{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]),p=new f,h=new k;y(()=>{p.getProductsSmall().then(a=>s.value=a),h.getImages().then(a=>l.value=a)});const v=a=>{switch(a){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}};return(a,A)=>{const g=o("Tag"),r=o("Button"),b=o("Carousel"),x=o("Image"),S=o("Galleria");return w(),O("div",V,[e("div",C,[e("div",I,[T,n(b,{value:s.value,numVisible:3,numScroll:3,responsiveOptions:_.value},{item:c(t=>[e("div",j,[e("div",B,[e("div",G,[e("img",{src:"/demo/images/product/"+t.data.image,alt:t.data.name,class:"w-full border-round"},null,8,K),n(g,{value:t.data.inventoryStatus,severity:v(t.data.inventoryStatus),class:"absolute",style:{left:"5px",top:"5px"}},null,8,["value","severity"])])]),e("div",N,d(t.data.name),1),e("div",M,[e("div",R,"$"+d(t.data.price),1),e("span",null,[n(r,{icon:"pi pi-heart",severity:"secondary",outlined:""}),n(r,{icon:"pi pi-shopping-cart",class:"ml-2"})])])])]),_:1},8,["value","responsiveOptions"])])]),e("div",D,[e("div",E,[F,e("div",L,[n(x,{src:"/demo/images/galleria/galleria11.jpg",alt:"Image",width:"250",preview:""})])])]),e("div",U,[e("div",W,[$,n(S,{value:l.value,responsiveOptions:m.value,numVisible:7,circular:!0,containerStyle:"max-width: 800px; margin: auto"},{item:c(t=>[e("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,q)]),thumbnail:c(t=>[e("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,tyle:"width: 100%; display: block;"},null,8,z)]),_:1},8,["value","responsiveOptions"])])])])}}};export{Q as default};
