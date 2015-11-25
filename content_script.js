// When we trigger the popup, this will run.

chrome.runtime.onMessage.addListener(
  function(request, sender, updateIcon) {
    if (request.extensionStorage) {
      // Here you specify the fonts that you don't want to change, so as not to conflict with icon fonts, etc.
      var excludedFonts = JSON.parse(request.extensionStorage.excludesList);
      // Here you specify your new font for everything else
      var newFont = request.extensionStorage.replacementFont;

      // Wrap the changer as a function
      var changeFont = function () {
          // Here be dragons. Lots of DOM traversal
          var els = document.querySelectorAll('body *');

          for (var i=0;i<els.length;i++) {
              var elementFonts = window.getComputedStyle(els[i],null).getPropertyValue("font-family").split(',');
              var changeFont = true;
              for (var _i=0;_i<elementFonts.length;_i++) {
                  for (var __i=0;__i<excludedFonts.length;__i++) {
                      var elementFont = elementFonts[_i].toLowerCase().trim();
                      var excludeFont = excludedFonts[__i].toLowerCase().trim();
                      if ( elementFont === excludeFont ) {
                          changeFont = false;
                      }
                  }
              }
              if (changeFont) {
                  els[i].style.fontFamily = newFont;
              }
          }
      };

      // Set up the MutationObserver
      var target = document.querySelectorAll('body')[0];
      var observer = new MutationObserver(function(changes) {
          changes.forEach(function(change) {
              changeFont();
          });
      });
      observer.observe(target, { attributes: true, childList: true});

      // And then call changeFont for good measure
      changeFont();
      updateIcon();
    }
  }
);
