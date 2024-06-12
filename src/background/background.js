chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        console.log('Tab loaded:', tabId);
      chrome.tabs.sendMessage(tabId, { message: 'tab-loaded' });
    }
  });
  
  let coreWebVitalsData = [];
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'core-web-vitals-data') {
        console.log('Core Web Vitals data:', request.data)
      coreWebVitalsData = request.data;
      sendResponse({ status: 'success' });
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received:', request);
    if (request.message === 'get-core-web-vitals') {
      sendResponse(coreWebVitalsData);
    }
  });
  
  chrome.runtime.lastError;