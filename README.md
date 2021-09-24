# README

Chrome extension for Mina prototyping.

## Overview

- `manifest.json` is required for Chrome Extensions.
- `package.json` allows us to run Jest unit tests.
- Note: Chrome extensions cannot run NPM packages, so either use a bundler or
  manually copy files into `lib`.

## How to load

1. Visit `chrome://extensions/`
2. Enable `Developer mode` in top right.
3. Click `Load unpacked` in top left.
4. During development, it's necessary to click the `refresh` icon at
   `chrome://extensions/` after making code changes, before it takes effect.
5. To view logs, visit `chrome://extensions/` and click
   `Inspect views src/html/background.html` to view logs.

## Notes for developers

- I'm using Chrome manifest v2 because v3 is not well documented, as of
  mid-2021. v2 works great. Just keep it.
- Docs: <https://developer.chrome.com/docs/extensions/mv2/getstarted/>
- How to use ES6 imports in a Chrome Extension:
  <https://github.com/otiai10/chrome-extension-es6-import>
