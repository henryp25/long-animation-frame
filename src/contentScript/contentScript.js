import CoreWebVitals from '../speculationRules/coreWebVitals.js';
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.message === 'url-loaded') {
        chrome.scripting.executeScript({
            target: {tabId: sender.tab.id},
            function: CoreWebVitals
        });
    }
});