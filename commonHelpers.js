import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as F}from"./assets/vendor-651d7991.js";const t=document.querySelector("button"),b=document.querySelector("input"),p=document.querySelector(".value[ data-days]"),C=document.querySelector(".value[ data-hours]"),S=document.querySelector(".value[ data-minutes]"),v=document.querySelector(".value[ data-seconds]");t.disabled=!0;let r,o,i;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<Date.now()?F.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(t.disabled=!1,t.style.background="#4E75FF",t.style.color="#FFF")}};h("#datetime-picker",g);t.addEventListener("click",()=>{t.disabled=!0,b.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898",o=r-Date.now(),d(c(o)),i=setInterval(()=>{o-=1e3,d(c(o)),k(o)},1e3)});function c(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:y}}function d({days:e,hours:a,minutes:s,seconds:u}){p.textContent=`${n(e)}`,C.textContent=`${n(a)}`,S.textContent=`${n(s)}`,v.textContent=`${n(u)}`}function k(e){e<=1e3&&clearInterval(i)}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
