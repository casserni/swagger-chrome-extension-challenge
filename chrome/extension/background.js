chrome.runtime.onMessage.addListener(({ swagger }) => {
  if (swagger) {
    chrome.storage.local.set({ swagger });
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.pageAction.show(tabs[0].id);
    });
  }
});
