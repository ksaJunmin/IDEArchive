import{i as t}from"./index-7629130b.js";class n{async fetchUser(o){if(!o)throw new Error("No token found");try{return(await t.get("http://localhost:3000/users/info",{headers:{Authorization:`Bearer ${o}`}})).data}catch(r){throw console.error("Error fetching user profile:",r),r}}async updatePoints(o,r){try{return(await t.patch("http://localhost:3000/users/points",{point:r},{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}})).data}catch(e){throw console.error("Error updating user points:",e),e}}}export{n as U};
