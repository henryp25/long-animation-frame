import React, {useState} from 'react'

function Popup() {

    const [entries, setEntries] = useState('')
    const handleSubmit = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT_TEXT', test: inputValue} );
        })
    };


  return (
    <div className='App'>
    <div>
      <h2>Speculation Rules</h2>
      <form>
        <label>
          Sub Folder Name:
          <input type='text' name='name' value={setEntries} onChange={(e) => setEntries(e.target.value) } />
        </label>
        <label>Level of Eagerness</label>
        <select>
          <option value='low'>Low</option>
          <option value='moderate'>Moderate</option>
          <option value='high'>High</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Popup