chrome.browserAction.onClicked.addListener((tab) => {
  const url = tab.url;
  console.log('background.js click handler. url', url);

  chrome.tabs.sendMessage(tab.id, { text: 'foo' }, (response) => response);
});
