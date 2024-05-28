import React from 'react';

import {useEffect, useState} from 'react';

function generateCWV(userInput) {
  const {entries, setEntries} = useState('')
    const handleEntries = (list) => {
        const newEntries = list.getEntries.map((entry => ({
          name: entry.name,
          blockedDuration: entry.duration,
          startTime: entry.startTime,
        })));
        setEntries(prevEntries => [...prevEntries, ...newEntries]);
        console.log('Test Run')
    };
   
    const observer = new PerformanceObserver(handleEntries);
    observer.observe({ type: "long-animation-frame", buffered: true });

    return () => {
      observer.disconnect();
    };
  };