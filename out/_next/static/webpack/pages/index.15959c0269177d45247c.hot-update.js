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
          storyContainer.current.appendChild(imageElement);
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
      storyContainer.current.appendChild(paragraphElement); // Add any custom classes derived from ink tags

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
      storyContainer.current.appendChild(choiceParagraphElement); // Fade choice in after a short delay

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

    storyContainer.current.style.height = contentBottomEdgeY() + "px";
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
    var bottomElement = storyContainer.current.lastElementChild;
    return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
  } // Remove all elements that match the given selector. Used for removing choices after
  // you've picked one, as well as for the CLEAR and RESTART tags.


  function removeAll(selector) {
    var allElements = storyContainer.current.querySelectorAll(selector);

    for (var i = 0; i < allElements.length; i++) {
      var el = allElements[i];
      el.parentNode.removeChild(el);
    }
  } // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.


  function setVisible(selector, visible) {
    var allElements = storyContainer.current.querySelectorAll(selector);

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
      console.log("New ink story created");
      setStory(newStory);
    });
  }, []); // After story is loaded

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (null !== story) {
      continueStory();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsInNob3dBZnRlciIsInB1c2giLCJyZW1vdmVBbGwiLCJzZXRWaXNpYmxlIiwicmVzdGFydCIsInBhcmFncmFwaEVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjdXJyZW50Q2hvaWNlcyIsImZvckVhY2giLCJjaG9pY2UiLCJjaG9pY2VQYXJhZ3JhcGhFbGVtZW50IiwidGV4dCIsImNob2ljZUFuY2hvckVsIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiQ2hvb3NlQ2hvaWNlSW5kZXgiLCJpbmRleCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsRG93biIsIlJlc2V0U3RhdGUiLCJzY3JvbGxUbyIsImVsIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRhcmdldCIsImxpbWl0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJzY3JvbGxUb3AiLCJkaXN0IiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdGVwIiwidGltZSIsInQiLCJsZXJwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYm90dG9tRWxlbWVudCIsImxhc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzZWxlY3RvciIsImFsbEVsZW1lbnRzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlzaWJsZSIsInByb3BlcnR5U3BsaXRJZHgiLCJpbmRleE9mIiwic3Vic3RyIiwidHJpbSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RvcnlDb250ZW50IiwibmV3U3RvcnkiLCJpbmt5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUUzQjtBQUYyQixrQkFHREMsc0RBQVEsQ0FBQyxJQUFELENBSFA7QUFBQSxNQUdwQkMsS0FIb0I7QUFBQSxNQUdiQyxRQUhhLGlCQUszQjs7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCLENBTjJCLENBUTNCOztBQUNBLE1BQU1DLGNBQWMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQzs7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsUUFBSSxTQUFTTixLQUFULElBQWtCQSxLQUFLLENBQUNPLFdBQTVCLEVBQXlDO0FBQ3JDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FULFdBQUssQ0FBQ1UsUUFBTjtBQUNIO0FBQ0osR0FMRDs7QUFPQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUVqQyxRQUFJQyxjQUFjLEdBQUcsQ0FBckI7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eURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxTQUFTMUYsS0FBYixFQUFvQjtBQUNoQlcsbUJBQWE7QUFDaEI7QUFDSixHQUpRLEVBSU4sQ0FBQ1gsS0FBRCxDQUpNLENBQVQ7QUFNQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBRyxFQUFFSyxvQkFBckM7QUFBQSwrQkFDSTtBQUFLLFlBQUUsRUFBQyxPQUFSO0FBQWdCLGFBQUcsRUFBRUY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQTVQdUJMLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTU5NTljMDI2OTE3N2Q0NTI0N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBpbmt5IGZyb20gJ2lua2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIC8vIEluIGxpZmVjeWNsZSB2YXJzXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIFN0YXRpYyB2YXJzXG4gICAgbGV0IGdsb2JhbFRhZ3MgPSBudWxsO1xuXG4gICAgLy8gRE9NIGVsZW1lbnRzXG4gICAgY29uc3Qgc3RvcnlDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb3V0ZXJTY3JvbGxDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBjdXN0b21Db250aW51ZVN0b3J5ID0gKCkgPT4ge1xuICAgICAgICBpZiAobnVsbCAhPT0gc3RvcnkgJiYgc3RvcnkuY2FuQ29udGludWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIGNvbnRpbnVcIik7XG4gICAgICAgICAgICBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGludWVTdG9yeSA9IChmaXJzdFRpbWUpID0+IHtcblxuICAgICAgICB2YXIgcGFyYWdyYXBoSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGVsYXkgPSAwLjA7XG5cbiAgICAgICAgLy8gRG9uJ3Qgb3Zlci1zY3JvbGwgcGFzdCBuZXcgY29udGVudFxuICAgICAgICB2YXIgcHJldmlvdXNCb3R0b21FZGdlID0gZmlyc3RUaW1lID8gMCA6IGNvbnRlbnRCb3R0b21FZGdlWSgpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHN0b3J5IHRleHQgLSBsb29wIHRocm91Z2ggYXZhaWxhYmxlIGNvbnRlbnRcbiAgICAgICAgd2hpbGUgKHN0b3J5LmNhbkNvbnRpbnVlKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCBpbmsgdG8gZ2VuZXJhdGUgdGhlIG5leHQgcGFyYWdyYXBoXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoVGV4dCA9IHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgICAgICB2YXIgdGFncyA9IHN0b3J5LmN1cnJlbnRUYWdzO1xuXG4gICAgICAgICAgICAvLyBBbnkgc3BlY2lhbCB0YWdzIGluY2x1ZGVkIHdpdGggdGhpcyBsaW5lXG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2xhc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IHRhZ3NbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgdGFncyBvZiB0aGUgZm9ybSBcIlg6IFlcIi4gQ3VycmVudGx5IHVzZWQgZm9yIElNQUdFIGFuZCBDTEFTUyBidXQgY291bGQgYmVcbiAgICAgICAgICAgICAgICAvLyBjdXN0b21pc2VkIHRvIGJlIHVzZWQgZm9yIG90aGVyIHRoaW5ncyB0b28uXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0VGFnID0gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpO1xuXG4gICAgICAgICAgICAgICAgLy8gSU1BR0U6IHNyY1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3BsaXRUYWcudmFsO1xuICAgICAgICAgICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEFTUzogY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJDTEFTU1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzZXMucHVzaChzcGxpdFRhZy52YWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMRUFSIC0gcmVtb3ZlcyBhbGwgZXhpc3RpbmcgY29udGVudC5cbiAgICAgICAgICAgICAgICAvLyBSRVNUQVJUIC0gY2xlYXJzIGV2ZXJ5dGhpbmcgYW5kIHJlc3RhcnRzIHRoZSBzdG9yeSBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gXCJDTEVBUlwiIHx8IHRhZyA9PSBcIlJFU1RBUlRcIikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJpbWdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBvdXQgdGhpcyBsaW5lIGlmIHlvdSB3YW50IHRvIGxlYXZlIHRoZSBoZWFkZXIgdmlzaWJsZSB3aGVuIGNsZWFyaW5nXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCIuaGVhZGVyXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggZWxlbWVudCAoaW5pdGlhbGx5IGhpZGRlbilcbiAgICAgICAgICAgIHZhciBwYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgPSBwYXJhZ3JhcGhUZXh0O1xuICAgICAgICAgICAgc3RvcnlDb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY2xhc3NlcyBkZXJpdmVkIGZyb20gaW5rIHRhZ3NcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3VzdG9tQ2xhc3Nlc1tpXSk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgaW4gcGFyYWdyYXBoIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgcGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBIVE1MIGNob2ljZXMgZnJvbSBpbmsgY2hvaWNlc1xuICAgICAgICBzdG9yeS5jdXJyZW50Q2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCB3aXRoIGFuY2hvciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9JyMnPiR7Y2hvaWNlLnRleHR9PC9hPmBcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQoY2hvaWNlUGFyYWdyYXBoRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgY2hvaWNlIGluIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcblxuICAgICAgICAgICAgLy8gQ2xpY2sgb24gY2hvaWNlXG4gICAgICAgICAgICB2YXIgY2hvaWNlQW5jaG9yRWwgPSBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpWzBdO1xuICAgICAgICAgICAgY2hvaWNlQW5jaG9yRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZm9sbG93IDxhPiBsaW5rXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgY2hvaWNlc1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInAuY2hvaWNlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVGVsbCB0aGUgc3Rvcnkgd2hlcmUgdG8gZ28gbmV4dFxuICAgICAgICAgICAgICAgIHN0b3J5LkNob29zZUNob2ljZUluZGV4KGNob2ljZS5pbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBYWFuZCBsb29wXG4gICAgICAgICAgICAgICAgY29udGludWVTdG9yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEV4dGVuZCBoZWlnaHQgdG8gZml0XG4gICAgICAgIC8vIFdlIGRvIHRoaXMgbWFudWFsbHkgc28gdGhhdCByZW1vdmluZyBlbGVtZW50cyBhbmQgY3JlYXRpbmcgbmV3IG9uZXMgZG9lc24ndFxuICAgICAgICAvLyBjYXVzZSB0aGUgaGVpZ2h0IChhbmQgdGhlcmVmb3JlIHNjcm9sbCkgdG8ganVtcCBiYWNrd2FyZHMgdGVtcG9yYXJpbHkuXG4gICAgICAgIHN0b3J5Q29udGFpbmVyLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEJvdHRvbUVkZ2VZKCkgKyBcInB4XCI7XG5cbiAgICAgICAgaWYgKCFmaXJzdFRpbWUpXG4gICAgICAgICAgICBzY3JvbGxEb3duKHByZXZpb3VzQm90dG9tRWRnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc3RvcnkuUmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIHNldFZpc2libGUoXCIuaGVhZGVyXCIsIHRydWUpO1xuXG4gICAgICAgIGNvbnRpbnVlU3RvcnkodHJ1ZSk7XG5cbiAgICAgICAgb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgLy8gRmFkZXMgaW4gYW4gZWxlbWVudCBhZnRlciBhIHNwZWNpZmllZCBkZWxheVxuICAgIGNvbnN0IHNob3dBZnRlciA9IChkZWxheSwgZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xscyB0aGUgcGFnZSBkb3duLCBidXQgbm8gZnVydGhlciB0aGFuIHRoZSBib3R0b20gZWRnZSBvZiB3aGF0IHlvdSBjb3VsZFxuICAgIC8vIHNlZSBwcmV2aW91c2x5LCBzbyBpdCBkb2Vzbid0IGdvIHRvbyBmYXIuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpIHtcblxuICAgICAgICAvLyBMaW5lIHVwIHRvcCBvZiBzY3JlZW4gd2l0aCB0aGUgYm90dG9tIG9mIHdoZXJlIHRoZSBwcmV2aW91cyBjb250ZW50IGVuZGVkXG4gICAgICAgIHZhciB0YXJnZXQgPSBwcmV2aW91c0JvdHRvbUVkZ2U7XG5cbiAgICAgICAgLy8gQ2FuJ3QgZ28gZnVydGhlciB0aGFuIHRoZSB2ZXJ5IGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICB2YXIgbGltaXQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSBvdXRlclNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmICh0YXJnZXQgPiBsaW1pdCkgdGFyZ2V0ID0gbGltaXQ7XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHZhciBkaXN0ID0gdGFyZ2V0IC0gc3RhcnQ7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDMwMCArIDMwMCAqIGRpc3QgLyAxMDA7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcbiAgICAgICAgICAgIGlmIChzdGFydFRpbWUgPT0gbnVsbCkgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgbGVycCA9IDMgKiB0ICogdCAtIDIgKiB0ICogdCAqIHQ7IC8vIGVhc2UgaW4vb3V0XG4gICAgICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxUbygwLCAoMS4wIC0gbGVycCkgKiBzdGFydCArIGxlcnAgKiB0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHQgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cblxuICAgIC8vIFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBlbmQgb2YgYWxsIHRoZSBzdG9yeSBjb250ZW50LCB1c2VkXG4gICAgLy8gZm9yIGdyb3dpbmcgdGhlIGNvbnRhaW5lciwgYW5kIGRlY2lkaW5nIGhvdyBmYXIgdG8gc2Nyb2xsLlxuICAgIGZ1bmN0aW9uIGNvbnRlbnRCb3R0b21FZGdlWSgpIHtcbiAgICAgICAgdmFyIGJvdHRvbUVsZW1lbnQgPSBzdG9yeUNvbnRhaW5lci5jdXJyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHJldHVybiBib3R0b21FbGVtZW50ID8gYm90dG9tRWxlbWVudC5vZmZzZXRUb3AgKyBib3R0b21FbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBnaXZlbiBzZWxlY3Rvci4gVXNlZCBmb3IgcmVtb3ZpbmcgY2hvaWNlcyBhZnRlclxuICAgIC8vIHlvdSd2ZSBwaWNrZWQgb25lLCBhcyB3ZWxsIGFzIGZvciB0aGUgQ0xFQVIgYW5kIFJFU1RBUlQgdGFncy5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgZm9yIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgaGVhZGVyIHdoZW4geW91IENMRUFSIG9yIFJFU1RBUlQgdGhlIHN0b3J5IHJlc3BlY3RpdmVseS5cbiAgICBmdW5jdGlvbiBzZXRWaXNpYmxlKHNlbGVjdG9yLCB2aXNpYmxlKSB7XG4gICAgICAgIHZhciBhbGxFbGVtZW50cyA9IHN0b3J5Q29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGFsbEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciBmb3IgcGFyc2luZyBvdXQgdGFncyBvZiB0aGUgZm9ybTpcbiAgICAvLyAgIyBQUk9QRVJUWTogdmFsdWVcbiAgICAvLyBlLmcuIElNQUdFOiBzb3VyY2UgcGF0aFxuICAgIGZ1bmN0aW9uIHNwbGl0UHJvcGVydHlUYWcodGFnKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eVNwbGl0SWR4ID0gdGFnLmluZGV4T2YoXCI6XCIpO1xuICAgICAgICBpZiAocHJvcGVydHlTcGxpdElkeCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0YWcuc3Vic3RyKDAsIHByb3BlcnR5U3BsaXRJZHgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0YWcuc3Vic3RyKHByb3BlcnR5U3BsaXRJZHggKyAxKS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICB2YWw6IHZhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwic3RvcnkuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdG9yeSBmaWxlIGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0b3J5Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcnkgZmlsZSBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0b3J5ID0gbmV3IGlua3kuU3Rvcnkoc3RvcnlDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBpbmsgc3RvcnkgY3JlYXRlZFwiKVxuICAgICAgICAgICAgICAgIHNldFN0b3J5KG5ld1N0b3J5KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtdKVxuXG4gICAgLy8gQWZ0ZXIgc3RvcnkgaXMgbG9hZGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5KSB7XG4gICAgICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RvcnldKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRpbmcgU2ltPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGgxPkRhdGluZyBTaW08L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlckNvbnRhaW5lclwiIHJlZj17b3V0ZXJTY3JvbGxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RvcnlcIiByZWY9e3N0b3J5Q29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=