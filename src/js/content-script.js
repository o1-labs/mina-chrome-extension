document.body.style.backgroundColor = 'orange';

window.addEventListener('mina:demoevent', function (e) {
  console.log('EXTENSION background.js: mina:demoevent received.', e.detail);
});
