(()=>{chrome.tabs.onUpdated.addListener(((e,s,a)=>{"complete"===s.status&&(console.log("Tab loaded:",e),chrome.tabs.sendMessage(e,{message:"tab-loaded"}))}));let e=[];chrome.runtime.onMessage.addListener(((s,a,t)=>{"core-web-vitals-data"===s.type&&(console.log("Core Web Vitals data:",s.data),e=s.data,t({status:"success"}))})),chrome.runtime.onMessage.addListener(((s,a,t)=>{console.log("Message received:",s),"get-core-web-vitals"===s.message&&t(e)})),chrome.runtime.lastError})();