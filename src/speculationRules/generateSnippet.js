import React from 'react';

function generateSnippet(userInput, userSelection) {

  const urlSelection = userInput.split(',').map((url) => url.trim());
  // Define your speculation rules here
  const speculationRules = {
    "prerender":[{
        "where":{"href_matches": urlSelection},
        "eagerness":`${userSelection}`
    }]
  };

  // Check for browser support
  if (!HTMLScriptElement.supports?.('speculationrules')) {
    console.error("Speculation Rules API not supported by your browser.");
    return;
  }

  // Add script to document HEAD
  const script = document.createElement("script");
  script.type = "speculationrules";
  const rulesJSON = JSON.stringify(speculationRules);
  script.textContent = rulesJSON;
  document.head.appendChild(script);
};

export default generateSnippet;