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
      console.log("Story file found");
      return response.text();
    }).then(function (storyContent) {
      console.log("Story file loaded");
      var newStory = new inkjs__WEBPACK_IMPORTED_MODULE_3__["Story"](storyContent);
      console.log("new ink story created");
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
        lineNumber: 246,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outerContainer",
        ref: outerScrollContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "story",
          ref: storyContainer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 244,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImFwcGVuZENoaWxkIiwic2hvd0FmdGVyIiwicHVzaCIsInJlbW92ZUFsbCIsInNldFZpc2libGUiLCJyZXN0YXJ0IiwicGFyYWdyYXBoRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRDaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImNob2ljZVBhcmFncmFwaEVsZW1lbnQiLCJ0ZXh0IiwiY2hvaWNlQW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDaG9vc2VDaG9pY2VJbmRleCIsImluZGV4Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxEb3duIiwiUmVzZXRTdGF0ZSIsInNjcm9sbFRvIiwiZWwiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGFyZ2V0IiwibGltaXQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGFydCIsInNjcm9sbFRvcCIsImRpc3QiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInN0ZXAiLCJ0aW1lIiwidCIsImxlcnAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib3R0b21FbGVtZW50IiwibGFzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInNlbGVjdG9yIiwiYWxsRWxlbWVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aXNpYmxlIiwicHJvcGVydHlTcGxpdElkeCIsImluZGV4T2YiLCJzdWJzdHIiLCJ0cmltIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdG9yeUNvbnRlbnQiLCJuZXdTdG9yeSIsImlua3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTNCO0FBRjJCLGtCQUdEQyxzREFBUSxDQUFDLElBQUQsQ0FIUDtBQUFBLE1BR3BCQyxLQUhvQjtBQUFBLE1BR2JDLFFBSGEsaUJBSzNCOzs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBakIsQ0FOMkIsQ0FRM0I7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5DOztBQUVBLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixRQUFJLFNBQVNOLEtBQVQsSUFBa0JBLEtBQUssQ0FBQ08sV0FBNUIsRUFBeUM7QUFDckNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQVQsV0FBSyxDQUFDVSxRQUFOO0FBQ0g7QUFDSixHQUxEOztBQU9BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBRWpDLFFBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLFFBQUlD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBRyxFQUFFSyxvQkFBckM7QUFBQSwrQkFDSTtBQUFLLFlBQUUsRUFBQyxPQUFSO0FBQWdCLGFBQUcsRUFBRUY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQTVQdUJMLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2U1ODg2NTQ1ZjBmYmY4OTI2ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBpbmt5IGZyb20gJ2lua2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIC8vIEluIGxpZmVjeWNsZSB2YXJzXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIFN0YXRpYyB2YXJzXG4gICAgbGV0IGdsb2JhbFRhZ3MgPSBudWxsO1xuXG4gICAgLy8gRE9NIGVsZW1lbnRzXG4gICAgY29uc3Qgc3RvcnlDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb3V0ZXJTY3JvbGxDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBjdXN0b21Db250aW51ZVN0b3J5ID0gKCkgPT4ge1xuICAgICAgICBpZiAobnVsbCAhPT0gc3RvcnkgJiYgc3RvcnkuY2FuQ29udGludWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIGNvbnRpbnVcIik7XG4gICAgICAgICAgICBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGludWVTdG9yeSA9IChmaXJzdFRpbWUpID0+IHtcblxuICAgICAgICB2YXIgcGFyYWdyYXBoSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGVsYXkgPSAwLjA7XG5cbiAgICAgICAgLy8gRG9uJ3Qgb3Zlci1zY3JvbGwgcGFzdCBuZXcgY29udGVudFxuICAgICAgICB2YXIgcHJldmlvdXNCb3R0b21FZGdlID0gZmlyc3RUaW1lID8gMCA6IGNvbnRlbnRCb3R0b21FZGdlWSgpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHN0b3J5IHRleHQgLSBsb29wIHRocm91Z2ggYXZhaWxhYmxlIGNvbnRlbnRcbiAgICAgICAgd2hpbGUgKHN0b3J5LmNhbkNvbnRpbnVlKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCBpbmsgdG8gZ2VuZXJhdGUgdGhlIG5leHQgcGFyYWdyYXBoXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoVGV4dCA9IHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgICAgICB2YXIgdGFncyA9IHN0b3J5LmN1cnJlbnRUYWdzO1xuXG4gICAgICAgICAgICAvLyBBbnkgc3BlY2lhbCB0YWdzIGluY2x1ZGVkIHdpdGggdGhpcyBsaW5lXG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2xhc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IHRhZ3NbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgdGFncyBvZiB0aGUgZm9ybSBcIlg6IFlcIi4gQ3VycmVudGx5IHVzZWQgZm9yIElNQUdFIGFuZCBDTEFTUyBidXQgY291bGQgYmVcbiAgICAgICAgICAgICAgICAvLyBjdXN0b21pc2VkIHRvIGJlIHVzZWQgZm9yIG90aGVyIHRoaW5ncyB0b28uXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0VGFnID0gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpO1xuXG4gICAgICAgICAgICAgICAgLy8gSU1BR0U6IHNyY1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3BsaXRUYWcudmFsO1xuICAgICAgICAgICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ0xBU1M6IGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNwbGl0VGFnICYmIHNwbGl0VGFnLnByb3BlcnR5ID09IFwiQ0xBU1NcIikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzc2VzLnB1c2goc3BsaXRUYWcudmFsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEVBUiAtIHJlbW92ZXMgYWxsIGV4aXN0aW5nIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgLy8gUkVTVEFSVCAtIGNsZWFycyBldmVyeXRoaW5nIGFuZCByZXN0YXJ0cyB0aGUgc3RvcnkgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnID09IFwiQ0xFQVJcIiB8fCB0YWcgPT0gXCJSRVNUQVJUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwiaW1nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBpZiB5b3Ugd2FudCB0byBsZWF2ZSB0aGUgaGVhZGVyIHZpc2libGUgd2hlbiBjbGVhcmluZ1xuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PSBcIlJFU1RBUlRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcGFyYWdyYXBoIGVsZW1lbnQgKGluaXRpYWxseSBoaWRkZW4pXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gcGFyYWdyYXBoVGV4dDtcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYW55IGN1c3RvbSBjbGFzc2VzIGRlcml2ZWQgZnJvbSBpbmsgdGFnc1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXN0b21DbGFzc2VzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjdXN0b21DbGFzc2VzW2ldKTtcblxuICAgICAgICAgICAgLy8gRmFkZSBpbiBwYXJhZ3JhcGggYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBwYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIEhUTUwgY2hvaWNlcyBmcm9tIGluayBjaG9pY2VzXG4gICAgICAgIHN0b3J5LmN1cnJlbnRDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcGFyYWdyYXBoIHdpdGggYW5jaG9yIGVsZW1lbnRcbiAgICAgICAgICAgIHZhciBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hvaWNlXCIpO1xuICAgICAgICAgICAgY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj0nIyc+JHtjaG9pY2UudGV4dH08L2E+YFxuICAgICAgICAgICAgc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hvaWNlUGFyYWdyYXBoRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgY2hvaWNlIGluIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcblxuICAgICAgICAgICAgLy8gQ2xpY2sgb24gY2hvaWNlXG4gICAgICAgICAgICB2YXIgY2hvaWNlQW5jaG9yRWwgPSBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpWzBdO1xuICAgICAgICAgICAgY2hvaWNlQW5jaG9yRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZm9sbG93IDxhPiBsaW5rXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgY2hvaWNlc1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInAuY2hvaWNlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVGVsbCB0aGUgc3Rvcnkgd2hlcmUgdG8gZ28gbmV4dFxuICAgICAgICAgICAgICAgIHN0b3J5LkNob29zZUNob2ljZUluZGV4KGNob2ljZS5pbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBYWFuZCBsb29wXG4gICAgICAgICAgICAgICAgY29udGludWVTdG9yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEV4dGVuZCBoZWlnaHQgdG8gZml0XG4gICAgICAgIC8vIFdlIGRvIHRoaXMgbWFudWFsbHkgc28gdGhhdCByZW1vdmluZyBlbGVtZW50cyBhbmQgY3JlYXRpbmcgbmV3IG9uZXMgZG9lc24ndFxuICAgICAgICAvLyBjYXVzZSB0aGUgaGVpZ2h0IChhbmQgdGhlcmVmb3JlIHNjcm9sbCkgdG8ganVtcCBiYWNrd2FyZHMgdGVtcG9yYXJpbHkuXG4gICAgICAgIHN0b3J5Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRCb3R0b21FZGdlWSgpICsgXCJweFwiO1xuXG4gICAgICAgIGlmICghZmlyc3RUaW1lKVxuICAgICAgICAgICAgc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHN0b3J5LlJlc2V0U3RhdGUoKTtcblxuICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCB0cnVlKTtcblxuICAgICAgICBjb250aW51ZVN0b3J5KHRydWUpO1xuXG4gICAgICAgIG91dGVyU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIC8vIEZhZGVzIGluIGFuIGVsZW1lbnQgYWZ0ZXIgYSBzcGVjaWZpZWQgZGVsYXlcbiAgICBjb25zdCBzaG93QWZ0ZXIgPSAoZGVsYXksIGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xscyB0aGUgcGFnZSBkb3duLCBidXQgbm8gZnVydGhlciB0aGFuIHRoZSBib3R0b20gZWRnZSBvZiB3aGF0IHlvdSBjb3VsZFxuICAgIC8vIHNlZSBwcmV2aW91c2x5LCBzbyBpdCBkb2Vzbid0IGdvIHRvbyBmYXIuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpIHtcblxuICAgICAgICAvLyBMaW5lIHVwIHRvcCBvZiBzY3JlZW4gd2l0aCB0aGUgYm90dG9tIG9mIHdoZXJlIHRoZSBwcmV2aW91cyBjb250ZW50IGVuZGVkXG4gICAgICAgIHZhciB0YXJnZXQgPSBwcmV2aW91c0JvdHRvbUVkZ2U7XG4gICAgICAgIFxuICAgICAgICAvLyBDYW4ndCBnbyBmdXJ0aGVyIHRoYW4gdGhlIHZlcnkgYm90dG9tIG9mIHRoZSBwYWdlXG4gICAgICAgIHZhciBsaW1pdCA9IG91dGVyU2Nyb2xsQ29udGFpbmVyLnNjcm9sbEhlaWdodCAtIG91dGVyU2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYoIHRhcmdldCA+IGxpbWl0ICkgdGFyZ2V0ID0gbGltaXQ7XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHZhciBkaXN0ID0gdGFyZ2V0IC0gc3RhcnQ7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDMwMCArIDMwMCpkaXN0LzEwMDtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAodGltZSkge1xuICAgICAgICAgICAgaWYoIHN0YXJ0VGltZSA9PSBudWxsICkgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gKHRpbWUtc3RhcnRUaW1lKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIGxlcnAgPSAzKnQqdCAtIDIqdCp0KnQ7IC8vIGVhc2UgaW4vb3V0XG4gICAgICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxUbygwLCAoMS4wLWxlcnApKnN0YXJ0ICsgbGVycCp0YXJnZXQpO1xuICAgICAgICAgICAgaWYoIHQgPCAxICkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gZW5kIG9mIGFsbCB0aGUgc3RvcnkgY29udGVudCwgdXNlZFxuICAgIC8vIGZvciBncm93aW5nIHRoZSBjb250YWluZXIsIGFuZCBkZWNpZGluZyBob3cgZmFyIHRvIHNjcm9sbC5cbiAgICBmdW5jdGlvbiBjb250ZW50Qm90dG9tRWRnZVkoKSB7XG4gICAgICAgIHZhciBib3R0b21FbGVtZW50ID0gc3RvcnlDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgcmV0dXJuIGJvdHRvbUVsZW1lbnQgPyBib3R0b21FbGVtZW50Lm9mZnNldFRvcCArIGJvdHRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHNlbGVjdG9yLiBVc2VkIGZvciByZW1vdmluZyBjaG9pY2VzIGFmdGVyXG4gICAgLy8geW91J3ZlIHBpY2tlZCBvbmUsIGFzIHdlbGwgYXMgZm9yIHRoZSBDTEVBUiBhbmQgUkVTVEFSVCB0YWdzLlxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbChzZWxlY3RvcilcbiAgICB7XG4gICAgICAgIHZhciBhbGxFbGVtZW50cyA9IHN0b3J5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgZm9yIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgaGVhZGVyIHdoZW4geW91IENMRUFSIG9yIFJFU1RBUlQgdGhlIHN0b3J5IHJlc3BlY3RpdmVseS5cbiAgICBmdW5jdGlvbiBzZXRWaXNpYmxlKHNlbGVjdG9yLCB2aXNpYmxlKVxuICAgIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBhbGxFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGlmKCAhdmlzaWJsZSApXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIGZvciBwYXJzaW5nIG91dCB0YWdzIG9mIHRoZSBmb3JtOlxuICAgIC8vICAjIFBST1BFUlRZOiB2YWx1ZVxuICAgIC8vIGUuZy4gSU1BR0U6IHNvdXJjZSBwYXRoXG4gICAgZnVuY3Rpb24gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5U3BsaXRJZHggPSB0YWcuaW5kZXhPZihcIjpcIik7XG4gICAgICAgIGlmKCBwcm9wZXJ0eVNwbGl0SWR4ICE9IG51bGwgKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0YWcuc3Vic3RyKDAsIHByb3BlcnR5U3BsaXRJZHgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0YWcuc3Vic3RyKHByb3BlcnR5U3BsaXRJZHgrMSkudHJpbSgpOyBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbDogdmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJzdG9yeS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3J5IGZpbGUgZm91bmRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RvcnlDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdG9yeSBmaWxlIGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RvcnkgPSBuZXcgaW5reS5TdG9yeShzdG9yeUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGluayBzdG9yeSBjcmVhdGVkXCIpXG4gICAgICAgICAgICAgICAgc2V0U3RvcnkobmV3U3RvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pXG5cbiAgICAvLyBBZnRlciBzdG9yeSBpcyBsb2FkZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF0aW5nIFNpbTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxoMT5EYXRpbmcgU2ltPC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJDb250YWluZXJcIiByZWY9e291dGVyU2Nyb2xsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0b3J5XCIgcmVmPXtzdG9yeUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9