import React from 'react';
import {useEffect, useState} from 'react';


function CoreWebVitals() {
  const [data, setData] = useState([]);
  console.log('Core Web Vitals component loaded');

  useEffect(() => {
    console.log('Core Web Vitals component mounted');
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('LCP entry:', entry);
        setData((prevData) => [...prevData, entry.renderTime]);
      });
    });

    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // Clean up the observer when the component unmounts
    return () => {
      lcpObserver.disconnect();
    };
  }, []);

  // Send data to popup.js or background script
  useEffect(() => {
    if (data.length > 0) {
      chrome.runtime.sendMessage({ type: 'core-web-vitals-data', data });
    }
  }, [
    
  ]);

  return null; // This component does not render anything
}

export default CoreWebVitals;


