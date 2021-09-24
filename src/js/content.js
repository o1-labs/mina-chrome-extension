/**
 * content.js runs immediately on page load. It can interact with the DOM, which
 * background.js cannot do.
 **/

console.log('content.js here');

/**
 * Listeners
 **/

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  //
});
