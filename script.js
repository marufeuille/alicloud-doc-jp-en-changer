chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("event set")
    if (request == "changeLang") {
        changeLang();
    }
}); 

function changeLang() {
   const curr = location.href;
   if (curr.startsWith("https://www")) {
      const post = curr.split("https://www")[1]
      window.open('https://jp' + post, '_blank')
   }
   else {
      const post = curr.split("https://jp")[1]
      window.open('https://www' + post)
   }
}

