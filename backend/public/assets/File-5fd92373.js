import{m as c,b as d,c as l,d as i,e,f as s}from"./index-016ea813.js";const n={class:"grid"},m={class:"col-12"},_={class:"card"},p=e("h5",null,"Advanced",-1),r=e("h5",null,"Basic",-1),v={__name:"File",setup(u){const t=c(),o=()=>{t.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})};return(h,U)=>{const a=d("FileUpload");return l(),i("div",n,[e("div",m,[e("div",_,[p,s(a,{name:"demo[]",onUploader:o,multiple:!0,accept:"image/*",maxFileSize:1e6,customUpload:""}),r,s(a,{mode:"basic",name:"demo[]",accept:"image/*",maxFileSize:1e6,onUploader:o,customUpload:""})])])])}}};export{v as default};
