import{l as s}from"./index-270258cf.js";const r="http://localhost:3000/posts";class c{async getPosts(){return(await s.get(r)).data}async getPostById(t){return(await s.get(`${r}/${t}`)).data}async addPost(t,a){try{return(await s.post(`${r}/add`,t,{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}})).data}catch(e){throw new Error(e.response?e.response.data:e.message)}}async updateLike(t,a){return(await s.patch(`${r}/${a}/like`,{},{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}})).data}}export{c as P};
