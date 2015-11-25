(function () {
  'use strict';
  var defaultReplacementFont = "ComicSansMS";
  var optionsForm = document.querySelectorAll('#form')[0];
  var replacementFontInput = document.querySelectorAll('#replacementFont')[0];

  var updateFonts = function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          extensionStorage: localStorage
        },
        function(response) {
          chrome.pageAction.setIcon(
            {
              tabId: tabs[0].id,
              path: 'icon_enabled.png'
            }
          );
        }
      );
    });
  };

  var saveOptions = function () {
    var replacementFont = replacementFontInput.value || defaultReplacementFont;

    localStorage.replacementFont = replacementFont;

    updateFonts();
  };

  var loadOptions = function () {
    var replacementFont = localStorage.replacementFont || defaultReplacementFont;

    replacementFontInput.value = replacementFont;
  };

  var setupBinds = function () {
    optionsForm.addEventListener('submit', function () {
      saveOptions();
      return false;
    });
  };

  var init = function () {
    loadOptions();
    setupBinds();
  };

  init();
}());
