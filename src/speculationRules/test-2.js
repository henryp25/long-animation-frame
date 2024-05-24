import React from 'react'
import { useState, useEffect } from 'react';


function generateLCP( ) {
  let lastLcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    for (const entry of entries) {
      if (entry.startTime !== lastLcp) {
        console.log(
          `New LCP: ${entry.startTime}ms
              Size: ${entry.size} px^2
              HTML: ${entry.element ? entry.element .outerHTML.slice(0, 80): "(no element)"}`
                  );
        lastLcp = entry.startTime;
      }
    }
  });

  po.observe({ type: "largest-contentful-paint", buffered: true });
}

function generateSnippet(userInput) {
    const [entries, setEntries] = useState('')
    useEffect(() => {
      const speculationRules = {
        "prerender":[{
            "where":{"href_matches":"`*/${userInput}`"},
            "eagerness":"moderate"
        }]
      };
      if (!HTMLScriptElement.supports?.('speculationrules')) {
        console.error("Speculation Rules API not supported by your browser.");
        return;
      }
      const script = document.createElement("script");
      script.type = "speculationrules";
      const rulesJSON = JSON.stringify(speculationRules);
      script.textContent = rulesJSON;
      document.head.appendChild(script);
    })

  return (
    <div>generateSnippet</div>
  )
}

// export default {generateSnippet, generateLCP};

