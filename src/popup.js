import React, {useState} from 'react'
import generateSnippet from './speculationRules/generateSnippet'

function Popup() {

    const [entries, setEntries] = useState('Add Folder Name Here...')
    const [eagerness, setEagerness] = useState('immediate')

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

      </form>
    </div>
  </div>
  )
}

export default Popup