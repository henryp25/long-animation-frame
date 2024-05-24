import './App.css';
import React from 'react';

import {useEffect, useState} from 'react';

function Appppp() {
  const {entries, setEntries} = useState('')
  useEffect(() => {
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
  }, []);

  const handleClicks = () => {
    console.log('Butoon Clicks')
  }
  return (
    <div className='App' >
      <h1>Long Task API</h1>
      <button onClick={handleClicks}>Start</button>
    </div>
  );
}

export default Apppp;
