import{l as s}from"./index-aea6fc2e.js";const t="http://localhost:3000/users";class c{async register(e){try{return(await s.post(`${t}/signin`,e)).data}catch(r){throw new Error(r.response?r.response.data:r.message)}}async login(e,r){try{return(await s.post(`${t}/login`,{email:e,password:r})).data}catch(o){throw new Error(o.response?o.response.data:o.message)}}async fetchUser(e){if(!e)throw new Error("No token found");try{return(await s.get(t+"/info",{headers:{Authorization:`Bearer ${e}`}})).data}catch(r){throw console.error("Error fetching user profile:",r),r}}async updatePoints(e,r){try{return(await s.patch(t+"/points",{point:r},{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}})).data}catch(o){throw console.error("Error updating user points:",o),o}}}export{c as U};
