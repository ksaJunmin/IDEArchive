class n{getPosts(){return fetch("http://localhost:3000/posts").then(t=>t.json()).then(t=>t)}getPostById(t){return fetch("http://localhost:3000/posts/"+t).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e)}updateLike(t,e){return fetch("http://localhost:3000/posts/"+t+"/like",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({like:e})}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>o)}getProductsSmall2(){return fetch("/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>t.data2)}getProducts(){return fetch("/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>t.data)}getProductsMixed(){return fetch("/demo/data/products-mixed.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>t.data)}getProductsWithOrdersSmall(){return fetch("/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>t.data)}getProductsWithOrdersLarge(){return fetch("/demo/data/products-orders.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>t.data)}}export{n as P};