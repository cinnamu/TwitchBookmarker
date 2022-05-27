console.log("I'm the background script");

chrome.runtime.onMessage.addlistener(function (request, sender, sendResponse) {
    console.log(request);
    return true;

})   
