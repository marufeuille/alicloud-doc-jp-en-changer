chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, "changeLang");
});

function check(url){
  // on
  if(url.match(/(.*?)alibabacloud.com\/help\/doc-detail\/(.*?)/i)){
    chrome.browserAction.setIcon({path:"img/16x16.png"});
  }
  // off
  else{
    chrome.browserAction.setIcon({path:"img/16x16off.png"});
  }
}
chrome.tabs.onSelectionChanged.addListener(function(tabid){
  chrome.tabs.get(tabid, function(tab){
      var url = tab.url;
    check(url);
  });
});
chrome.tabs.onUpdated.addListener(function(tabid){
  chrome.tabs.get(tabid, function(tab){
      var url = tab.url;
    check(url);
  });
});
chrome.windows.onFocusChanged.addListener(function(winid){
  chrome.tabs.getSelected(winid, function(tab){
      var url = tab.url;
    check(url);
  });
});
