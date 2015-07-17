(function () {
  'use strict';
  var defaultExcludesList = ["FontAwesome", "Icomoon", "Fontelico", "octicons", "Entypo", "Typicons", "Sitepoint"];
  var defaultReplacementFont = "ComicSansMS";
  var optionsForm = document.querySelectorAll('#form')[0];
  var excludesListInput = document.querySelectorAll('#excludesList')[0];
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
    var excludesList = excludesListInput.value.split(/\s*,\s*/) || defaultExcludesList;
    var replacementFont = replacementFontInput.value || defaultReplacementFont;

    localStorage.excludesList = JSON.stringify(excludesList);
    localStorage.replacementFont = replacementFont;

    updateFonts();
  };

  var loadOptions = function () {
    var excludesList = JSON.parse(localStorage.excludesList || JSON.stringify(defaultExcludesList));
    var replacementFont = localStorage.replacementFont || defaultReplacementFont;

    excludesListInput.value = excludesList.join(', ');
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