chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var url1;
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    url1 = tabs[0].url;
     if(request.greeting=="hello")
    	sendResponse({farewell:url1});
});
return true;
});
