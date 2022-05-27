console.log("I'm the options page.");

chrome.runtime.sendmessage({
    message: "hello"
}, function (response) {
    console.log(response);
}

)