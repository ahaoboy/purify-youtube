// ==UserScript==
// @name         purify-youtube
// @namespace    http://tampermonkey.net/
// @version      2024-04-16
// @description  purify-youtube
// @author       ahaoboy
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const styleTag = document.createElement('style');
  const customStyles = `
    #bottom-grid {
      display: none !important
    }
`;
  styleTag.innerHTML = customStyles;
  document.body.appendChild(styleTag);
})();