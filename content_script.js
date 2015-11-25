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
              var oldStyle = window.getComputedStyle(els[i])['font-family'];
              if (oldStyle.indexOf(newFont) === -1) {
                  els[i].style.fontFamily = "'" + newFont + "', " + window.getComputedStyle(els[i])['font-family'];
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
