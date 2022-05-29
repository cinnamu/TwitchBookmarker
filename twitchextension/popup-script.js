console.log("I'm the popup page.")

//communication between options & background.js
chrome.runtime.sendMessage({
    from: 'popup',
    message: "Hello"
}, function (response) {
    console.log(response);
});
//---