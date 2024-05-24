chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'INPUT_TEXT') {
      console.log('INPUT_TEXT....');
    }
  });