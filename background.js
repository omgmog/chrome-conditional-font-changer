// This tells Chrome to show the extension icon in the address bar

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId);
});