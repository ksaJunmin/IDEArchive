import{l as t}from"./index-b6d81238.js";const o="http://localhost:3000/requests";class p{async getRequests(){try{return(await t.get(o)).data}catch(r){throw Error(`API Error: ${r.response.statusText}`)}}async getRequestById(r){try{return(await t.get(`${o}/${r}`)).data}catch(e){throw Error(`API Error: ${e.response.statusText}`)}}async postRequest(r,e){try{return(await t.post(o,r,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}})).data}catch(s){throw Error(`API Error: ${s.response.statusText}`)}}async fetchAnswers(r){return(await t.get(`${o}/${r}/answers`)).data}async addAnswer(r,e,s){try{return(await t.post(o+`/${r}/answers`,e,{headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"}})).data}catch(a){throw Error(`API Error: ${a.response.statusText}`)}}async chooseAnswer(r,e){try{return(await t.patch(`${o}/${r}/choose-answer/${e}`)).data}catch(s){throw Error(`API Error: ${s.response.statusText}`)}}}export{p as R};
