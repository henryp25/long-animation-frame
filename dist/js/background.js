chrome.runtime.onInstalled.addListener((()=>{console.log("onInstalled....")})),chrome.bookmarks.onCreated.addListener(((e,o)=>{console.log("onCreated....")}));