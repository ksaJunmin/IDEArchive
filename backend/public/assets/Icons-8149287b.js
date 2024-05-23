import{x as d,r as p,J as u,o as f,b as m,c as o,d as n,f as v,e as r,F as h,m as g,h as _,n as y,t as x}from"./index-d417d33b.js";const q={class:"card"},k=_(`<h2 data-v-c9f92717>Icons</h2><p data-v-c9f92717> PrimeVue components internally use <a href="https://github.com/primefaces/primeicons" class="font-medium text-primary hover:underline" data-v-c9f92717>PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr" class="font-medium text-primary hover:underline" data-v-c9f92717>PrimeTek</a>. </p><h4 data-v-c9f92717>Download</h4><p data-v-c9f92717>PrimeIcons is available at npm, run the following command to download it to your project.</p><pre class="app-code" data-v-c9f92717><code data-v-c9f92717>npm install primeicons --save</code></pre><h4 data-v-c9f92717>Getting Started</h4><p data-v-c9f92717>PrimeIcons use the <strong data-v-c9f92717>pi pi-{icon}</strong> syntax such as <strong data-v-c9f92717>pi pi-check</strong>. A standalone icon can be displayed using an element like <i data-v-c9f92717>i</i> or <i data-v-c9f92717>span</i></p><pre class="app-code" data-v-c9f92717><code data-v-c9f92717>&lt;i class=&quot;pi pi-check&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;pi pi-times&quot;&gt;&lt;/i&gt;</code></pre><i class="pi pi-check" style="margin-right:0.5rem;" data-v-c9f92717></i><i class="pi pi-times" data-v-c9f92717></i><h4 data-v-c9f92717>Size</h4><p data-v-c9f92717>Size of the icons can easily be changed using font-size property.</p><pre class="app-code" data-v-c9f92717><code data-v-c9f92717>&lt;i class=&quot;pi pi-check&quot;&gt;&lt;/i&gt;</code></pre><i class="pi pi-check" data-v-c9f92717></i><pre class="app-code" data-v-c9f92717><code data-v-c9f92717>&lt;i class=&quot;pi pi-check&quot; style=&quot;font-size: 2rem&quot;&gt;&lt;/i&gt;</code></pre><i class="pi pi-check" style="font-size:2rem;" data-v-c9f92717></i><h4 data-v-c9f92717>Spinning Animation</h4><p data-v-c9f92717>Special pi-spin class applies continuous rotation to an icon.</p><pre class="app-code" data-v-c9f92717><code data-v-c9f92717>&lt;i class=&quot;pi pi-spin pi-spinner&quot; style=&quot;font-size: 2rem&quot;&gt;&lt;/i&gt;</code></pre><i class="pi pi-spin pi-spinner" style="font-size:2rem;" data-v-c9f92717></i><h4 data-v-c9f92717>List of Icons</h4><p data-v-c9f92717> Here is the current list of PrimeIcons, more icons are added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues" class="font-medium text-primary hover:underline" data-v-c9f92717>request new icons</a> at the issue tracker. </p>`,22),I={class:"grid icons-list text-center"},b={__name:"Icons",setup(w){const c=p(null),i=p(null),l=u(()=>i.value?c.value.filter(t=>t.properties.name.indexOf(i.value.toLowerCase())>-1):c.value);return f(()=>{fetch("/demo/data/icons.json",{headers:{"Cache-Control":"no-cache"}}).then(t=>t.json()).then(t=>{let s=t.icons.filter(a=>a.icon.tags.indexOf("deprecate")===-1);s.sort((a,e)=>a.properties.name<e.properties.name?-1:a.properties.name>e.properties.name?1:0),c.value=s})}),(t,s)=>{const a=m("InputText");return o(),n("div",q,[k,v(a,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e),class:"w-full p-3 mt-3 mb-5",placeholder:"Search an icon"},null,8,["modelValue"]),r("div",I,[(o(!0),n(h,null,g(l.value,e=>(o(),n("div",{class:"col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",key:e.properties.name},[r("i",{class:y("text-2xl mb-2 pi pi-"+e.properties.name)},null,2),r("div",null,"pi-"+x(e.properties.name),1)]))),128))])])}}},S=d(b,[["__scopeId","data-v-c9f92717"]]);export{S as default};
