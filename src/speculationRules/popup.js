import React, {useState, useEffect} from 'react'
import generateSnippet from './generateSnippet'

function Popup() {

    const [entries, setEntries] = useState('/example, /example/test')
    const [eagerness, setEagerness] = useState('immediate')
    const [coreWebVitalsData, setCoreWebVitalsData] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Entries:', entries)
        let tabs = await chrome.tabs.query( {active:true});
        const tab = tabs[0]
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: generateSnippet,
          args: [entries,eagerness], // Pass the entries as an argument
        });


    };


    
    useEffect(() => {
      document.addEventListener('DOMContentLoaded', () => {

          chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.message === 'get-core-web-vitals') {
              console.log('Core Web Vitals data:', response)
              setCoreWebVitalsData(response);
            } else {
              setCoreWebVitalsData([]);
            }
          });
      }
    );
  }, []);

  return (
    <div className='App'>
    <div>
      <h2>Speculation Rules</h2>
      <form className='inputField'>
        <label>
          Sub Folder Name:
          <input type='text' name='name' value={entries} onChange={(e) => {
            setEntries(e.target.value);
            }} />
        </label>
        <label>Level of Eagerness</label>
        <select onChange={(e) => {
          setEagerness(e.target.value);
        }}>
          <option value='immediate'>Immediate</option>
          <option value='moderate'>Moderate</option>
          <option value='eager'>Eager</option>
          <option value='conservative'>Conservative</option>
        </select>
        <div className='generateButton'>
          <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <h3>Core Web Vitals Data</h3>
          <ul id='data-container'>
            <li>LCP Data: {coreWebVitalsData}
            </li>
          </ul>
        </div>

      </form>
    </div>
  </div>
  )
}

export default Popup