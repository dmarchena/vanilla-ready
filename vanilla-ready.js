/* @preserve vanilla-ready: execute a callback function when the DOM is fully loaded. [c]2016 @dmarchena. (Based on https://gist.github.com/raymonschouwenaar/84bc7def8fbfa06ffd84 by Raymon Schouwenaar). Licensed MIT */
!function(document) {

  HTMLDocument.prototype['ready'] = function (fn) {
    if (document.attachEvent) {
      // IE <= 8, using attachEvent to detect browser instead of addEventListener in order to avoid errors caused by polyfills.
      // Execute callback only with 'complete'. 'interactive' can cause some malfunctions.
      if (document.readyState === 'complete') fn();
      else document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') fn();
      });
    } else { // modern browsers
      if (document.readyState !== 'loading' && fn != undefined) fn();
      else if (document.addEventListener) document.addEventListener('DOMContentLoaded', fn);
    }
  };

}(document);
