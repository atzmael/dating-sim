webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inkjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inkjs */ "./node_modules/inkjs/dist/ink-es2015.js");
/* harmony import */ var inkjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inkjs__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\mael\\Documents\\Cours\\mini-projet-2\\app\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  // In lifecycle vars
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      story = _useState[0],
      setStory = _useState[1]; // Static vars


  var globalTags = null; // DOM elements

  var storyContainer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var outerScrollContainer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var customContinueStory = function customContinueStory() {
    if (null !== story && story.canContinue) {
      console.log("can continu");
      story.Continue();
    }
  };

  var continueStory = function continueStory(firstTime) {
    var paragraphIndex = 0;
    var delay = 0.0; // Don't over-scroll past new content

    var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY(); // Generate story text - loop through available content

    while (story.canContinue) {
      // Get ink to generate the next paragraph
      var paragraphText = story.Continue();
      var tags = story.currentTags; // Any special tags included with this line

      var customClasses = [];

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]; // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
        // customised to be used for other things too.

        var splitTag = splitPropertyTag(tag); // IMAGE: src

        if (splitTag && splitTag.property == "IMAGE") {
          var imageElement = document.createElement('img');
          imageElement.src = splitTag.val;
          storyContainer.appendChild(imageElement);
          showAfter(delay, imageElement);
          delay += 200.0;
        } // CLASS: className
        else if (splitTag && splitTag.property == "CLASS") {
            customClasses.push(splitTag.val);
          } // CLEAR - removes all existing content.
          // RESTART - clears everything and restarts the story from the beginning
          else if (tag == "CLEAR" || tag == "RESTART") {
              removeAll("p");
              removeAll("img"); // Comment out this line if you want to leave the header visible when clearing

              setVisible(".header", false);

              if (tag == "RESTART") {
                restart();
                return;
              }
            }
      } // Create paragraph element (initially hidden)


      var paragraphElement = document.createElement('p');
      paragraphElement.innerHTML = paragraphText;
      storyContainer.appendChild(paragraphElement); // Add any custom classes derived from ink tags

      for (var i = 0; i < customClasses.length; i++) {
        paragraphElement.classList.add(customClasses[i]);
      } // Fade in paragraph after a short delay


      showAfter(delay, paragraphElement);
      delay += 200.0;
    } // Create HTML choices from ink choices


    story.currentChoices.forEach(function (choice) {
      // Create paragraph with anchor element
      var choiceParagraphElement = document.createElement('p');
      choiceParagraphElement.classList.add("choice");
      choiceParagraphElement.innerHTML = "<a href='#'>".concat(choice.text, "</a>");
      storyContainer.appendChild(choiceParagraphElement); // Fade choice in after a short delay

      showAfter(delay, choiceParagraphElement);
      delay += 200.0; // Click on choice

      var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
      choiceAnchorEl.addEventListener("click", function (event) {
        // Don't follow <a> link
        event.preventDefault(); // Remove all existing choices

        removeAll("p.choice"); // Tell the story where to go next

        story.ChooseChoiceIndex(choice.index); // Aaand loop

        continueStory();
      });
    }); // Extend height to fit
    // We do this manually so that removing elements and creating new ones doesn't
    // cause the height (and therefore scroll) to jump backwards temporarily.

    storyContainer.style.height = contentBottomEdgeY() + "px";
    if (!firstTime) scrollDown(previousBottomEdge);
  };

  var restart = function restart() {
    story.ResetState();
    setVisible(".header", true);
    continueStory(true);
    outerScrollContainer.scrollTo(0, 0);
  }; // Fades in an element after a specified delay


  var showAfter = function showAfter(delay, el) {
    el.classList.add("hide");
    setTimeout(function () {
      el.classList.remove("hide");
    }, delay);
  }; // Scrolls the page down, but no further than the bottom edge of what you could
  // see previously, so it doesn't go too far.


  function scrollDown(previousBottomEdge) {
    // Line up top of screen with the bottom of where the previous content ended
    var target = previousBottomEdge; // Can't go further than the very bottom of the page

    var limit = outerScrollContainer.scrollHeight - outerScrollContainer.clientHeight;
    if (target > limit) target = limit;
    var start = outerScrollContainer.scrollTop;
    var dist = target - start;
    var duration = 300 + 300 * dist / 100;
    var startTime = null;

    function step(time) {
      if (startTime == null) startTime = time;
      var t = (time - startTime) / duration;
      var lerp = 3 * t * t - 2 * t * t * t; // ease in/out

      outerScrollContainer.scrollTo(0, (1.0 - lerp) * start + lerp * target);
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  } // The Y coordinate of the bottom end of all the story content, used
  // for growing the container, and deciding how far to scroll.


  function contentBottomEdgeY() {
    var bottomElement = storyContainer.lastElementChild;
    return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
  } // Remove all elements that match the given selector. Used for removing choices after
  // you've picked one, as well as for the CLEAR and RESTART tags.


  function removeAll(selector) {
    var allElements = storyContainer.querySelectorAll(selector);

    for (var i = 0; i < allElements.length; i++) {
      var el = allElements[i];
      el.parentNode.removeChild(el);
    }
  } // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.


  function setVisible(selector, visible) {
    var allElements = storyContainer.querySelectorAll(selector);

    for (var i = 0; i < allElements.length; i++) {
      var el = allElements[i];
      if (!visible) el.classList.add("invisible");else el.classList.remove("invisible");
    }
  } // Helper for parsing out tags of the form:
  //  # PROPERTY: value
  // e.g. IMAGE: source path


  function splitPropertyTag(tag) {
    var propertySplitIdx = tag.indexOf(":");

    if (propertySplitIdx != null) {
      var property = tag.substr(0, propertySplitIdx).trim();
      var val = tag.substr(propertySplitIdx + 1).trim();
      return {
        property: property,
        val: val
      };
    }

    return null;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch("story.json").then(function (response) {
      console.log("Story found");
      return response.text();
    }).then(function (storyContent) {
      console.log(storyContent);
      var newStory = new inkjs__WEBPACK_IMPORTED_MODULE_3__["Story"](storyContent);
      setStory(newStory);
    });
  }, []); // After story is loaded

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    continueStory();
  }, [story]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outerContainer",
        ref: outerScrollContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "story",
          ref: storyContainer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 243,
    columnNumber: 9
  }, this);
}

_s(Home, "bBrRHsu/hFrdZrgnmQ8CAWNO0pk=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImFwcGVuZENoaWxkIiwic2hvd0FmdGVyIiwicHVzaCIsInJlbW92ZUFsbCIsInNldFZpc2libGUiLCJyZXN0YXJ0IiwicGFyYWdyYXBoRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRDaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImNob2ljZVBhcmFncmFwaEVsZW1lbnQiLCJ0ZXh0IiwiY2hvaWNlQW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDaG9vc2VDaG9pY2VJbmRleCIsImluZGV4Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxEb3duIiwiUmVzZXRTdGF0ZSIsInNjcm9sbFRvIiwiZWwiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGFyZ2V0IiwibGltaXQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGFydCIsInNjcm9sbFRvcCIsImRpc3QiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInN0ZXAiLCJ0aW1lIiwidCIsImxlcnAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib3R0b21FbGVtZW50IiwibGFzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInNlbGVjdG9yIiwiYWxsRWxlbWVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aXNpYmxlIiwicHJvcGVydHlTcGxpdElkeCIsImluZGV4T2YiLCJzdWJzdHIiLCJ0cmltIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdG9yeUNvbnRlbnQiLCJuZXdTdG9yeSIsImlua3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTNCO0FBRjJCLGtCQUdEQyxzREFBUSxDQUFDLElBQUQsQ0FIUDtBQUFBLE1BR3BCQyxLQUhvQjtBQUFBLE1BR2JDLFFBSGEsaUJBSzNCOzs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBakIsQ0FOMkIsQ0FRM0I7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5DOztBQUVBLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixRQUFJLFNBQVNOLEtBQVQsSUFBa0JBLEtBQUssQ0FBQ08sV0FBNUIsRUFBeUM7QUFDckNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQVQsV0FBSyxDQUFDVSxRQUFOO0FBQ0g7QUFDSixHQUxEOztBQU9BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBRWpDLFFBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLFFBQUlD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFHLEVBQUVLLG9CQUFyQztBQUFBLCtCQUNJO0FBQUssWUFBRSxFQUFDLE9BQVI7QUFBZ0IsYUFBRyxFQUFFRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBM1B1QkwsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZWE0MTEyNWVjZTM2YWQ3ZWExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCAqIGFzIGlua3kgZnJvbSAnaW5ranMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgLy8gSW4gbGlmZWN5Y2xlIHZhcnNcbiAgICBjb25zdCBbc3RvcnksIHNldFN0b3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gU3RhdGljIHZhcnNcbiAgICBsZXQgZ2xvYmFsVGFncyA9IG51bGw7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICBjb25zdCBzdG9yeUNvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvdXRlclNjcm9sbENvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGN1c3RvbUNvbnRpbnVlU3RvcnkgPSAoKSA9PiB7XG4gICAgICAgIGlmIChudWxsICE9PSBzdG9yeSAmJiBzdG9yeS5jYW5Db250aW51ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4gY29udGludVwiKTtcbiAgICAgICAgICAgIHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250aW51ZVN0b3J5ID0gKGZpcnN0VGltZSkgPT4ge1xuXG4gICAgICAgIHZhciBwYXJhZ3JhcGhJbmRleCA9IDA7XG4gICAgICAgIHZhciBkZWxheSA9IDAuMDtcblxuICAgICAgICAvLyBEb24ndCBvdmVyLXNjcm9sbCBwYXN0IG5ldyBjb250ZW50XG4gICAgICAgIHZhciBwcmV2aW91c0JvdHRvbUVkZ2UgPSBmaXJzdFRpbWUgPyAwIDogY29udGVudEJvdHRvbUVkZ2VZKCk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgc3RvcnkgdGV4dCAtIGxvb3AgdGhyb3VnaCBhdmFpbGFibGUgY29udGVudFxuICAgICAgICB3aGlsZSAoc3RvcnkuY2FuQ29udGludWUpIHtcblxuICAgICAgICAgICAgLy8gR2V0IGluayB0byBnZW5lcmF0ZSB0aGUgbmV4dCBwYXJhZ3JhcGhcbiAgICAgICAgICAgIHZhciBwYXJhZ3JhcGhUZXh0ID0gc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgICAgIHZhciB0YWdzID0gc3RvcnkuY3VycmVudFRhZ3M7XG5cbiAgICAgICAgICAgIC8vIEFueSBzcGVjaWFsIHRhZ3MgaW5jbHVkZWQgd2l0aCB0aGlzIGxpbmVcbiAgICAgICAgICAgIHZhciBjdXN0b21DbGFzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gdGFnc1tpXTtcblxuICAgICAgICAgICAgICAgIC8vIERldGVjdCB0YWdzIG9mIHRoZSBmb3JtIFwiWDogWVwiLiBDdXJyZW50bHkgdXNlZCBmb3IgSU1BR0UgYW5kIENMQVNTIGJ1dCBjb3VsZCBiZVxuICAgICAgICAgICAgICAgIC8vIGN1c3RvbWlzZWQgdG8gYmUgdXNlZCBmb3Igb3RoZXIgdGhpbmdzIHRvby5cbiAgICAgICAgICAgICAgICB2YXIgc3BsaXRUYWcgPSBzcGxpdFByb3BlcnR5VGFnKHRhZyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJTUFHRTogc3JjXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0VGFnICYmIHNwbGl0VGFnLnByb3BlcnR5ID09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcGxpdFRhZy52YWw7XG4gICAgICAgICAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEFTUzogY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJDTEFTU1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzZXMucHVzaChzcGxpdFRhZy52YWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMRUFSIC0gcmVtb3ZlcyBhbGwgZXhpc3RpbmcgY29udGVudC5cbiAgICAgICAgICAgICAgICAvLyBSRVNUQVJUIC0gY2xlYXJzIGV2ZXJ5dGhpbmcgYW5kIHJlc3RhcnRzIHRoZSBzdG9yeSBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gXCJDTEVBUlwiIHx8IHRhZyA9PSBcIlJFU1RBUlRcIikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJpbWdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBvdXQgdGhpcyBsaW5lIGlmIHlvdSB3YW50IHRvIGxlYXZlIHRoZSBoZWFkZXIgdmlzaWJsZSB3aGVuIGNsZWFyaW5nXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCIuaGVhZGVyXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggZWxlbWVudCAoaW5pdGlhbGx5IGhpZGRlbilcbiAgICAgICAgICAgIHZhciBwYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgPSBwYXJhZ3JhcGhUZXh0O1xuICAgICAgICAgICAgc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhbnkgY3VzdG9tIGNsYXNzZXMgZGVyaXZlZCBmcm9tIGluayB0YWdzXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1c3RvbUNsYXNzZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKGN1c3RvbUNsYXNzZXNbaV0pO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGluIHBhcmFncmFwaCBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIHBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgSFRNTCBjaG9pY2VzIGZyb20gaW5rIGNob2ljZXNcbiAgICAgICAgc3RvcnkuY3VycmVudENob2ljZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggd2l0aCBhbmNob3IgZWxlbWVudFxuICAgICAgICAgICAgdmFyIGNob2ljZVBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaG9pY2VcIik7XG4gICAgICAgICAgICBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPScjJz4ke2Nob2ljZS50ZXh0fTwvYT5gXG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaG9pY2VQYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gRmFkZSBjaG9pY2UgaW4gYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuXG4gICAgICAgICAgICAvLyBDbGljayBvbiBjaG9pY2VcbiAgICAgICAgICAgIHZhciBjaG9pY2VBbmNob3JFbCA9IGNob2ljZVBhcmFncmFwaEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilbMF07XG4gICAgICAgICAgICBjaG9pY2VBbmNob3JFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBmb2xsb3cgPGE+IGxpbmtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBjaG9pY2VzXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwicC5jaG9pY2VcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBUZWxsIHRoZSBzdG9yeSB3aGVyZSB0byBnbyBuZXh0XG4gICAgICAgICAgICAgICAgc3RvcnkuQ2hvb3NlQ2hvaWNlSW5kZXgoY2hvaWNlLmluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIEFhYW5kIGxvb3BcbiAgICAgICAgICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXh0ZW5kIGhlaWdodCB0byBmaXRcbiAgICAgICAgLy8gV2UgZG8gdGhpcyBtYW51YWxseSBzbyB0aGF0IHJlbW92aW5nIGVsZW1lbnRzIGFuZCBjcmVhdGluZyBuZXcgb25lcyBkb2Vzbid0XG4gICAgICAgIC8vIGNhdXNlIHRoZSBoZWlnaHQgKGFuZCB0aGVyZWZvcmUgc2Nyb2xsKSB0byBqdW1wIGJhY2t3YXJkcyB0ZW1wb3JhcmlseS5cbiAgICAgICAgc3RvcnlDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY29udGVudEJvdHRvbUVkZ2VZKCkgKyBcInB4XCI7XG5cbiAgICAgICAgaWYgKCFmaXJzdFRpbWUpXG4gICAgICAgICAgICBzY3JvbGxEb3duKHByZXZpb3VzQm90dG9tRWRnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc3RvcnkuUmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIHNldFZpc2libGUoXCIuaGVhZGVyXCIsIHRydWUpO1xuXG4gICAgICAgIGNvbnRpbnVlU3RvcnkodHJ1ZSk7XG5cbiAgICAgICAgb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgLy8gRmFkZXMgaW4gYW4gZWxlbWVudCBhZnRlciBhIHNwZWNpZmllZCBkZWxheVxuICAgIGNvbnN0IHNob3dBZnRlciA9IChkZWxheSwgZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvLyBTY3JvbGxzIHRoZSBwYWdlIGRvd24sIGJ1dCBubyBmdXJ0aGVyIHRoYW4gdGhlIGJvdHRvbSBlZGdlIG9mIHdoYXQgeW91IGNvdWxkXG4gICAgLy8gc2VlIHByZXZpb3VzbHksIHNvIGl0IGRvZXNuJ3QgZ28gdG9vIGZhci5cbiAgICBmdW5jdGlvbiBzY3JvbGxEb3duKHByZXZpb3VzQm90dG9tRWRnZSkge1xuXG4gICAgICAgIC8vIExpbmUgdXAgdG9wIG9mIHNjcmVlbiB3aXRoIHRoZSBib3R0b20gb2Ygd2hlcmUgdGhlIHByZXZpb3VzIGNvbnRlbnQgZW5kZWRcbiAgICAgICAgdmFyIHRhcmdldCA9IHByZXZpb3VzQm90dG9tRWRnZTtcbiAgICAgICAgXG4gICAgICAgIC8vIENhbid0IGdvIGZ1cnRoZXIgdGhhbiB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHBhZ2VcbiAgICAgICAgdmFyIGxpbWl0ID0gb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gb3V0ZXJTY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiggdGFyZ2V0ID4gbGltaXQgKSB0YXJnZXQgPSBsaW1pdDtcblxuICAgICAgICB2YXIgc3RhcnQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgICAgICAgdmFyIGRpc3QgPSB0YXJnZXQgLSBzdGFydDtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMzAwICsgMzAwKmRpc3QvMTAwO1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgZnVuY3Rpb24gc3RlcCh0aW1lKSB7XG4gICAgICAgICAgICBpZiggc3RhcnRUaW1lID09IG51bGwgKSBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdmFyIHQgPSAodGltZS1zdGFydFRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgbGVycCA9IDMqdCp0IC0gMip0KnQqdDsgLy8gZWFzZSBpbi9vdXRcbiAgICAgICAgICAgIG91dGVyU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKDAsICgxLjAtbGVycCkqc3RhcnQgKyBsZXJwKnRhcmdldCk7XG4gICAgICAgICAgICBpZiggdCA8IDEgKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cblxuICAgIC8vIFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBlbmQgb2YgYWxsIHRoZSBzdG9yeSBjb250ZW50LCB1c2VkXG4gICAgLy8gZm9yIGdyb3dpbmcgdGhlIGNvbnRhaW5lciwgYW5kIGRlY2lkaW5nIGhvdyBmYXIgdG8gc2Nyb2xsLlxuICAgIGZ1bmN0aW9uIGNvbnRlbnRCb3R0b21FZGdlWSgpIHtcbiAgICAgICAgdmFyIGJvdHRvbUVsZW1lbnQgPSBzdG9yeUNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICByZXR1cm4gYm90dG9tRWxlbWVudCA/IGJvdHRvbUVsZW1lbnQub2Zmc2V0VG9wICsgYm90dG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gc2VsZWN0b3IuIFVzZWQgZm9yIHJlbW92aW5nIGNob2ljZXMgYWZ0ZXJcbiAgICAvLyB5b3UndmUgcGlja2VkIG9uZSwgYXMgd2VsbCBhcyBmb3IgdGhlIENMRUFSIGFuZCBSRVNUQVJUIHRhZ3MuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKHNlbGVjdG9yKVxuICAgIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBhbGxFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3IgaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBoZWFkZXIgd2hlbiB5b3UgQ0xFQVIgb3IgUkVTVEFSVCB0aGUgc3RvcnkgcmVzcGVjdGl2ZWx5LlxuICAgIGZ1bmN0aW9uIHNldFZpc2libGUoc2VsZWN0b3IsIHZpc2libGUpXG4gICAge1xuICAgICAgICB2YXIgYWxsRWxlbWVudHMgPSBzdG9yeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YWxsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGFsbEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYoICF2aXNpYmxlIClcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZm9yIHBhcnNpbmcgb3V0IHRhZ3Mgb2YgdGhlIGZvcm06XG4gICAgLy8gICMgUFJPUEVSVFk6IHZhbHVlXG4gICAgLy8gZS5nLiBJTUFHRTogc291cmNlIHBhdGhcbiAgICBmdW5jdGlvbiBzcGxpdFByb3BlcnR5VGFnKHRhZykge1xuICAgICAgICB2YXIgcHJvcGVydHlTcGxpdElkeCA9IHRhZy5pbmRleE9mKFwiOlwiKTtcbiAgICAgICAgaWYoIHByb3BlcnR5U3BsaXRJZHggIT0gbnVsbCApIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHRhZy5zdWJzdHIoMCwgcHJvcGVydHlTcGxpdElkeCkudHJpbSgpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRhZy5zdWJzdHIocHJvcGVydHlTcGxpdElkeCsxKS50cmltKCk7IFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICAgICAgICAgICAgdmFsOiB2YWxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcInN0b3J5Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcnkgZm91bmRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RvcnlDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcnlDb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RvcnkgPSBuZXcgaW5reS5TdG9yeShzdG9yeUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHNldFN0b3J5KG5ld1N0b3J5KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtdKVxuXG4gICAgLy8gQWZ0ZXIgc3RvcnkgaXMgbG9hZGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29udGludWVTdG9yeSgpO1xuICAgIH0sIFtzdG9yeV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRhdGluZyBTaW08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8aDE+RGF0aW5nIFNpbTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ29udGFpbmVyXCIgcmVmPXtvdXRlclNjcm9sbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdG9yeVwiIHJlZj17c3RvcnlDb250YWluZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==