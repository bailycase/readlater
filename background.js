chrome.contextMenus.create({
  id: 'SaveContext',
  title: 'Save for Later',
  contexts: ['all'],
});
chrome.contextMenus.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const { url, title } = tabs[0];
    chrome.storage.sync.get({ itemUrls: [] }, (result) => {
      const urls = result.itemUrls;
      urls.push({ url, title });
      chrome.storage.sync.set({ itemUrls: urls, title });
    });
  });
});
