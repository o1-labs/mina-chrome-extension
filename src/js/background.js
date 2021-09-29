window.addEventListener('mina:demoevent', function (e) {
  console.log('EXTENSION background.js: mina:demoevent received.', e.detail);
});

console.log('background.js');

// chrome.browserAction.onClicked.addListener((tab) => {
//   const url = tab.url;
//   console.log('background.js click handler. url', url);

//   chrome.tabs.sendMessage(tab.id, { text: 'foo' }, (response) => response);
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['js/content-script.js']
//   });
// });

// chrome.runtime.onMessage.addListener(function (message, callback) {
//   // if (message == 'runContentScript') {
//   chrome.tabs.executeScript({
//     file: 'contentScript.js'
//   });
//   // }
// });

chrome.runtime.onMessage.addListener(function (message, callback) {
  // if (message == 'changeColor') {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="orange"'
  });
  // }
});

chrome.runtime.onMessage.addListener(function (message, callback) {
  // if (message == "runContentScript"){
  chrome.tabs.executeScript({
    file: 'content-script.js'
  });
  // }
});
