chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
  
  chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });
  
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });