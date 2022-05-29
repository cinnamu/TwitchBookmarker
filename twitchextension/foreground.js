// separated js from foreground.html to allow the viewer to see this

const DIV_chrome_ext = document.createElement('div');

//manipulating any webpage that has 'http'
DIV_chrome_ext.id = 'chrome_ext';
DIV_chrome_ext.textContent = "A Beginners Guide to Chrome extensions.";

document.querySelector('body').appendChild(DIV_chrome_ext);

console.log("I'm the foreground page.")
// ---

// communicating to the background
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);

    sendResponse({
        message: "I'm the foreground. I got your message."
    });
});

setTimeout(() => {
    chrome.runtime.sendMessage({
    from: "foreground",
    message: "I'm a new message from the foreground."
    })
}, 7000)
//---