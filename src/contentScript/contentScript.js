chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === 'tab-loaded') {
      (async () => {
        const data = [];
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            data.push(Math.round(entry.renderTime));
            console.log('LCP entry:', data[0])
            chrome.runtime.sendMessage({ type: 'core-web-vitals-data', data });
          });
        });
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        
        setTimeout(() => {
          lcpObserver.disconnect();
        }, 5000); // Adjust the timeout as needed to collect the data
      })();
    }
  });
  