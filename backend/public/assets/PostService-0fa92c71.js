import{h as s}from"./index-9f4cf9f0.js";const r="http://localhost:3000/posts";class c{async getPosts(){return(await s.get(r)).data}async getPostById(t){return(await s.get(`${r}/${t}`)).data}async addPost(t,e){try{return(await s.post(`${r}/add`,t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}})).data}catch(a){throw new Error(a.response?a.response.data:a.message)}}async updateLike(t,e){return(await s.patch(`${r}/${e}/like`,{},{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}})).data}}export{c as P};
