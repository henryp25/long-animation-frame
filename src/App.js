import './App.css';

import {useEffect, useState} from 'react';


useEffect(() => {
    const {entry, getEntries} = useState('')
    const observer = new PerformanceObserver((list) => {
        if (list.getEntries()) {
            list.getEntries().forEach((entry) => {
                const name = `Name: ${entry.name}`;
                const blockedDuration = `Blocked Duration: ${entry.blockedDuration}`;
                const duration = `Duration: ${entry.duration}`;
                getEntries(`${name}, ${blockedDuration}, ${duration}`)
            });
            
        }
    });
    console.log(entry)
    observer.observe({ type: "long-animation-frame", buffered: true });
}
, []);

function App() {
  return (
    <div className='App' >
      Hello World
    </div>
  );
}

export default App;
