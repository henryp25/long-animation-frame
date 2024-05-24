chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled....');
});
chrome.bookmarks.onCreated.addListener((id, bookmark) => {
    console.log('onCreated....');
});
