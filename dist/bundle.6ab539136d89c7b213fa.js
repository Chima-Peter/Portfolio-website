(()=>{"use strict";const e=function(){const e=document.querySelector("#nerror"),t=document.querySelector("#error"),n=document.querySelector("#terror"),i=t=>{if(0!=t.value.length)return t.id="valid",e.textContent="",!0;t.id="invalid",e.textContent="Please fill in this field"},r=e=>{if(0!=e.value.length)return e.id="valid",t.textContent="",!0;e.id="invalid",t.textContent="Please fill in this field"},l=e=>{if(0!=e.value.length)return e.id="valid",n.textContent="",!0;e.id="invalid",n.textContent="Please fill in this field"};return{testName:i,testEmail:r,testText:l,testForm:(e,t,n)=>!0===i(e)&&(!0===r(t)&&!0===l(n))}}();!function(){document.querySelector("#btn");const t=document.querySelector("#name"),n=document.querySelector("#email"),i=document.querySelector("#text"),r=document.querySelector("form");t.addEventListener("input",(()=>{e.testName(t)})),n.addEventListener("input",(()=>{e.testEmail(n)})),i.addEventListener("input",(()=>{e.testText(i)})),r.addEventListener("submit",(r=>{1==e.testForm(t,n,i)?console.log("ok"):r.preventDefault()}))}()})();
//# sourceMappingURL=bundle.6ab539136d89c7b213fa.js.map