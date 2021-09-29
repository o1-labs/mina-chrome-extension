// window.addEventListener('mina:demoevent', function (e) {
//   console.log('EXTENSION content.js: mina:demoevent received.', e.detail);
// });

/**
 * content.js runs immediately on page load. It can interact with the DOM, which
 * background.js cannot do.
 **/

console.log('content.js here');

// chrome.runtime.onMessage.addListener(function (message, callback) {
//   if (message == 'changeColor') {
//     chrome.tabs.executeScript({
//       code: 'document.body.style.backgroundColor="orange"'
//     });
//   }
// });

/**
 * Listeners
 **/

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   //
// });
