console.log("I'm the options page.");

//communication between popup & background.js
chrome.runtime.sendMessage({
    from: 'options',
    message: "hello"
}, function (response) {
    console.log(response);
})
//---