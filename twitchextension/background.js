let current_active_tabId = null;

console.log("I'm the background script");

// Keeping track of where the user is
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    current_active_tabId = tabId;

    
    if (changeInfo.status === 'complete' && tab.url.includes('http')){
        chrome.tabs.insertCSS(current_active_tabId, {file: './foreground.css'}, function () {
            chrome.tabs.executeScript(current_active_tabId, {file: './foreground.js'}, function() {
                console.log("injected and executed.");
                
                setTimeout(() => {
                    chrome.tabs.sendMessage(current_active_tabId, {
                        message: "Hello, I'm thebackground script"
                    }, function (response) {
                        console.log(response);                   
                    });
                }, 6000)
            });
        });
    }
});

chrome.tabs.onActivated.addListener(function (activeInfo, windowId) {
    current_active_tabId = activeInfo.tabId;
});

//communication between options and popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    setTimeout(() => {
        sendResponse({
            message: "i got your message"
        });
    }, 5000);
    return true;

}); 
