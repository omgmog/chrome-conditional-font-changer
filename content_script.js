// When we trigger the popup, this will run.

chrome.runtime.onMessage.addListener(
  function(request, sender, updateIcon) {
    if (request.extensionStorage) {
      // Here you specify your new font
      var newFont = request.extensionStorage.replacementFont;

      // Wrap the changer as a function
      var changeFont = function () {
        // Here be dragons. Lots of DOM traversal
        var els = document.querySelectorAll('body, body *');

        for (var i=0;i<els.length;i++) {
          var oldStyle = window.getComputedStyle(els[i]).fontFamily;
          if ([0,1].indexOf(oldStyle.indexOf(newFont)) === -1) {
            // newFont is not the first font, add it
            els[i].style.fontFamily = "'" + newFont + "', " + oldStyle;
          }
        }
      };

      // Set up the MutationObserver
      var target = document.querySelectorAll('body')[0];

      var observer, callback;

      callback = function(changes) {
        changes.forEach(function(change) {
          changeFont();
        });
      };

      observer = new MutationObserver(callback);

      observer.observe(target, { attributes: true, childList: true});

      // And then call changeFont for good measure
      changeFont();
      updateIcon();
    }
  }
);
