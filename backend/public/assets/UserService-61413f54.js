import{k as o}from"./index-ad04c7bb.js";const t="https://port-0-idearchive-ss7z32llwmxnho4.sel5.cloudtype.app/users";class i{async register(e){try{return(await o.post(`${t}/signin`,e)).data}catch(r){throw new Error(r.response?r.response.data:r.message)}}async login(e,r){try{return(await o.post(`${t}/login`,{email:e,password:r})).data}catch(s){throw new Error(s.response?s.response.data:s.message)}}async fetchUser(e){if(!e)throw new Error("No token found");try{return(await o.get(t+"/info",{headers:{Authorization:`Bearer ${e}`}})).data}catch(r){throw console.error("Error fetching user profile:",r),r}}async updatePoints(e,r){try{return(await o.patch(t+"/points",{point:r},{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}})).data}catch(s){throw console.error("Error updating user points:",s),s}}}export{i as U};
