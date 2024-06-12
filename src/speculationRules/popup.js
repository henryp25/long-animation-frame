import React, {useState} from 'react'
import generateSnippet from './generateSnippet'

function Popup() {

    const [entries, setEntries] = useState('/example, /example/test')
    const [eagerness, setEagerness] = useState('immediate')
    const [coreWebVitalsData, setCoreWebVitalsData] = useState([])

    const handleSubmit = async () => {
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
    document.addEventListener('DOMContentLoaded', () => {
      chrome.runtime.sendMessage({ message: 'get-core-web-vitals' }, (response) => {
        const dataContainer = document.getElementById('data-container');
        if (response && response.length > 0) {
          response.forEach((time, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `LCP: ${time}`;
            dataContainer.appendChild(listItem);
          });
        } else {
          dataContainer.textContent = 'No data available';
        }
      });
    });
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

          </ul>
        </div>

      </form>
    </div>
  </div>
  )
}

export default Popup