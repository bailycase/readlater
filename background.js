chrome.contextMenus.create({
  id: 'SaveContext',
  title: 'Save for Later',
  contexts: ['all'],
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: {color: '#f06292', darkMode: false}})
}); 
chrome.contextMenus.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const { url, title } = tabs[0];
    chrome.storage.sync.get({ storage: [] }, (result) => {
      const urls = result.storage;
      urls.push({ url, title });
      chrome.storage.sync.set({ storage: urls });
    });
  });
});
