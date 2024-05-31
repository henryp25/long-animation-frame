import React from 'react';
import {useEffect, useState} from 'react';



function CoreWebVitals() {
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      entries.forEach(entry => {
        console.log('LCP:', entry.renderTime);
      })
    });
    lcpObserver.observe({type: 'largest-contentful-paint', buffered: true})

  }

  CoreWebVitals();

export default CoreWebVitals;




