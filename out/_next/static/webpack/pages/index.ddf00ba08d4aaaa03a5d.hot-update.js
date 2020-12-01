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
    var delay = 2; // Don't over-scroll past new content

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
    outerScrollContainer.current.scrollTo(0, 0);
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

    var limit = outerScrollContainer.current.scrollHeight - outerScrollContainer.current.clientHeight;
    if (target > limit) target = limit;
    var start = outerScrollContainer.current.scrollTop;
    var dist = target - start;
    var duration = 300 + 300 * dist / 100;
    var startTime = null;

    function step(time) {
      if (startTime == null) startTime = time;
      var t = (time - startTime) / duration;
      var lerp = 3 * t * t - 2 * t * t * t; // ease in/out

      outerScrollContainer.current.scrollTo(0, (1.0 - lerp) * start + lerp * target);
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
    fetch("story1.json").then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsInNob3dBZnRlciIsInB1c2giLCJyZW1vdmVBbGwiLCJzZXRWaXNpYmxlIiwicmVzdGFydCIsInBhcmFncmFwaEVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjdXJyZW50Q2hvaWNlcyIsImZvckVhY2giLCJjaG9pY2UiLCJjaG9pY2VQYXJhZ3JhcGhFbGVtZW50IiwidGV4dCIsImNob2ljZUFuY2hvckVsIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiQ2hvb3NlQ2hvaWNlSW5kZXgiLCJpbmRleCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsRG93biIsIlJlc2V0U3RhdGUiLCJzY3JvbGxUbyIsImVsIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRhcmdldCIsImxpbWl0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJzY3JvbGxUb3AiLCJkaXN0IiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdGVwIiwidGltZSIsInQiLCJsZXJwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYm90dG9tRWxlbWVudCIsImxhc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzZWxlY3RvciIsImFsbEVsZW1lbnRzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlzaWJsZSIsInByb3BlcnR5U3BsaXRJZHgiLCJpbmRleE9mIiwic3Vic3RyIiwidHJpbSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RvcnlDb250ZW50IiwibmV3U3RvcnkiLCJpbmt5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUUzQjtBQUYyQixrQkFHREMsc0RBQVEsQ0FBQyxJQUFELENBSFA7QUFBQSxNQUdwQkMsS0FIb0I7QUFBQSxNQUdiQyxRQUhhLGlCQUszQjs7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCLENBTjJCLENBUTNCOztBQUNBLE1BQU1DLGNBQWMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQzs7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsUUFBSSxTQUFTTixLQUFULElBQWtCQSxLQUFLLENBQUNPLFdBQTVCLEVBQXlDO0FBQ3JDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FULFdBQUssQ0FBQ1UsUUFBTjtBQUNIO0FBQ0osR0FMRDs7QUFPQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUVqQyxRQUFJQyxjQUFjLEdBQUcsQ0FBckI7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QzhGLFFBQUQsQ0FBUjtBQUNILEtBVkw7QUFXSCxHQVpRLEVBWU4sRUFaTSxDQUFULENBeE4yQixDQXNPM0I7O0FBQ0FMLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksU0FBUzFGLEtBQWIsRUFBb0I7QUFDaEJXLG1CQUFhO0FBQ2hCO0FBQ0osR0FKUSxFQUlOLENBQUNYLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQWdDLFdBQUcsRUFBRUssb0JBQXJDO0FBQUEsK0JBQ0k7QUFBSyxZQUFFLEVBQUMsT0FBUjtBQUFnQixhQUFHLEVBQUVGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0E1UHVCTCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkZjAwYmEwOGQ0YWFhYTAzYTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICogYXMgaW5reSBmcm9tICdpbmtqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICAvLyBJbiBsaWZlY3ljbGUgdmFyc1xuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBTdGF0aWMgdmFyc1xuICAgIGxldCBnbG9iYWxUYWdzID0gbnVsbDtcblxuICAgIC8vIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHN0b3J5Q29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG91dGVyU2Nyb2xsQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgY3VzdG9tQ29udGludWVTdG9yeSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5ICYmIHN0b3J5LmNhbkNvbnRpbnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiBjb250aW51XCIpO1xuICAgICAgICAgICAgc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRpbnVlU3RvcnkgPSAoZmlyc3RUaW1lKSA9PiB7XG5cbiAgICAgICAgdmFyIHBhcmFncmFwaEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRlbGF5ID0gMjtcblxuICAgICAgICAvLyBEb24ndCBvdmVyLXNjcm9sbCBwYXN0IG5ldyBjb250ZW50XG4gICAgICAgIHZhciBwcmV2aW91c0JvdHRvbUVkZ2UgPSBmaXJzdFRpbWUgPyAwIDogY29udGVudEJvdHRvbUVkZ2VZKCk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgc3RvcnkgdGV4dCAtIGxvb3AgdGhyb3VnaCBhdmFpbGFibGUgY29udGVudFxuICAgICAgICB3aGlsZSAoc3RvcnkuY2FuQ29udGludWUpIHtcblxuICAgICAgICAgICAgLy8gR2V0IGluayB0byBnZW5lcmF0ZSB0aGUgbmV4dCBwYXJhZ3JhcGhcbiAgICAgICAgICAgIHZhciBwYXJhZ3JhcGhUZXh0ID0gc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgICAgIHZhciB0YWdzID0gc3RvcnkuY3VycmVudFRhZ3M7XG5cbiAgICAgICAgICAgIC8vIEFueSBzcGVjaWFsIHRhZ3MgaW5jbHVkZWQgd2l0aCB0aGlzIGxpbmVcbiAgICAgICAgICAgIHZhciBjdXN0b21DbGFzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gdGFnc1tpXTtcblxuICAgICAgICAgICAgICAgIC8vIERldGVjdCB0YWdzIG9mIHRoZSBmb3JtIFwiWDogWVwiLiBDdXJyZW50bHkgdXNlZCBmb3IgSU1BR0UgYW5kIENMQVNTIGJ1dCBjb3VsZCBiZVxuICAgICAgICAgICAgICAgIC8vIGN1c3RvbWlzZWQgdG8gYmUgdXNlZCBmb3Igb3RoZXIgdGhpbmdzIHRvby5cbiAgICAgICAgICAgICAgICB2YXIgc3BsaXRUYWcgPSBzcGxpdFByb3BlcnR5VGFnKHRhZyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJTUFHRTogc3JjXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0VGFnICYmIHNwbGl0VGFnLnByb3BlcnR5ID09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcGxpdFRhZy52YWw7XG4gICAgICAgICAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGltYWdlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMQVNTOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIkNMQVNTXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3Nlcy5wdXNoKHNwbGl0VGFnLnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ0xFQVIgLSByZW1vdmVzIGFsbCBleGlzdGluZyBjb250ZW50LlxuICAgICAgICAgICAgICAgIC8vIFJFU1RBUlQgLSBjbGVhcnMgZXZlcnl0aGluZyBhbmQgcmVzdGFydHMgdGhlIHN0b3J5IGZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSBcIkNMRUFSXCIgfHwgdGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcImltZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgaWYgeW91IHdhbnQgdG8gbGVhdmUgdGhlIGhlYWRlciB2aXNpYmxlIHdoZW4gY2xlYXJpbmdcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT0gXCJSRVNUQVJUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCBlbGVtZW50IChpbml0aWFsbHkgaGlkZGVuKVxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IHBhcmFncmFwaFRleHQ7XG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYW55IGN1c3RvbSBjbGFzc2VzIGRlcml2ZWQgZnJvbSBpbmsgdGFnc1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXN0b21DbGFzc2VzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjdXN0b21DbGFzc2VzW2ldKTtcblxuICAgICAgICAgICAgLy8gRmFkZSBpbiBwYXJhZ3JhcGggYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBwYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIEhUTUwgY2hvaWNlcyBmcm9tIGluayBjaG9pY2VzXG4gICAgICAgIHN0b3J5LmN1cnJlbnRDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcGFyYWdyYXBoIHdpdGggYW5jaG9yIGVsZW1lbnRcbiAgICAgICAgICAgIHZhciBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hvaWNlXCIpO1xuICAgICAgICAgICAgY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj0nIyc+JHtjaG9pY2UudGV4dH08L2E+YFxuICAgICAgICAgICAgc3RvcnlDb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZChjaG9pY2VQYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gRmFkZSBjaG9pY2UgaW4gYWZ0ZXIgYSBzaG9ydCBkZWxheVxuICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuXG4gICAgICAgICAgICAvLyBDbGljayBvbiBjaG9pY2VcbiAgICAgICAgICAgIHZhciBjaG9pY2VBbmNob3JFbCA9IGNob2ljZVBhcmFncmFwaEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilbMF07XG4gICAgICAgICAgICBjaG9pY2VBbmNob3JFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBmb2xsb3cgPGE+IGxpbmtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBjaG9pY2VzXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwicC5jaG9pY2VcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBUZWxsIHRoZSBzdG9yeSB3aGVyZSB0byBnbyBuZXh0XG4gICAgICAgICAgICAgICAgc3RvcnkuQ2hvb3NlQ2hvaWNlSW5kZXgoY2hvaWNlLmluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIEFhYW5kIGxvb3BcbiAgICAgICAgICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXh0ZW5kIGhlaWdodCB0byBmaXRcbiAgICAgICAgLy8gV2UgZG8gdGhpcyBtYW51YWxseSBzbyB0aGF0IHJlbW92aW5nIGVsZW1lbnRzIGFuZCBjcmVhdGluZyBuZXcgb25lcyBkb2Vzbid0XG4gICAgICAgIC8vIGNhdXNlIHRoZSBoZWlnaHQgKGFuZCB0aGVyZWZvcmUgc2Nyb2xsKSB0byBqdW1wIGJhY2t3YXJkcyB0ZW1wb3JhcmlseS5cbiAgICAgICAgc3RvcnlDb250YWluZXIuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50Qm90dG9tRWRnZVkoKSArIFwicHhcIjtcblxuICAgICAgICBpZiAoIWZpcnN0VGltZSlcbiAgICAgICAgICAgIHNjcm9sbERvd24ocHJldmlvdXNCb3R0b21FZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzdG9yeS5SZXNldFN0YXRlKCk7XG5cbiAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY29udGludWVTdG9yeSh0cnVlKTtcblxuICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIC8vIEZhZGVzIGluIGFuIGVsZW1lbnQgYWZ0ZXIgYSBzcGVjaWZpZWQgZGVsYXlcbiAgICBjb25zdCBzaG93QWZ0ZXIgPSAoZGVsYXksIGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8vIFNjcm9sbHMgdGhlIHBhZ2UgZG93biwgYnV0IG5vIGZ1cnRoZXIgdGhhbiB0aGUgYm90dG9tIGVkZ2Ugb2Ygd2hhdCB5b3UgY291bGRcbiAgICAvLyBzZWUgcHJldmlvdXNseSwgc28gaXQgZG9lc24ndCBnbyB0b28gZmFyLlxuICAgIGZ1bmN0aW9uIHNjcm9sbERvd24ocHJldmlvdXNCb3R0b21FZGdlKSB7XG5cbiAgICAgICAgLy8gTGluZSB1cCB0b3Agb2Ygc2NyZWVuIHdpdGggdGhlIGJvdHRvbSBvZiB3aGVyZSB0aGUgcHJldmlvdXMgY29udGVudCBlbmRlZFxuICAgICAgICB2YXIgdGFyZ2V0ID0gcHJldmlvdXNCb3R0b21FZGdlO1xuXG4gICAgICAgIC8vIENhbid0IGdvIGZ1cnRoZXIgdGhhbiB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHBhZ2VcbiAgICAgICAgdmFyIGxpbWl0ID0gb3V0ZXJTY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHRhcmdldCA+IGxpbWl0KSB0YXJnZXQgPSBsaW1pdDtcblxuICAgICAgICB2YXIgc3RhcnQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbFRvcDtcblxuICAgICAgICB2YXIgZGlzdCA9IHRhcmdldCAtIHN0YXJ0O1xuICAgICAgICB2YXIgZHVyYXRpb24gPSAzMDAgKyAzMDAgKiBkaXN0IC8gMTAwO1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgZnVuY3Rpb24gc3RlcCh0aW1lKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRUaW1lID09IG51bGwpIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB2YXIgdCA9ICh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIGxlcnAgPSAzICogdCAqIHQgLSAyICogdCAqIHQgKiB0OyAvLyBlYXNlIGluL291dFxuICAgICAgICAgICAgb3V0ZXJTY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxUbygwLCAoMS4wIC0gbGVycCkgKiBzdGFydCArIGxlcnAgKiB0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHQgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cblxuICAgIC8vIFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBlbmQgb2YgYWxsIHRoZSBzdG9yeSBjb250ZW50LCB1c2VkXG4gICAgLy8gZm9yIGdyb3dpbmcgdGhlIGNvbnRhaW5lciwgYW5kIGRlY2lkaW5nIGhvdyBmYXIgdG8gc2Nyb2xsLlxuICAgIGZ1bmN0aW9uIGNvbnRlbnRCb3R0b21FZGdlWSgpIHtcbiAgICAgICAgdmFyIGJvdHRvbUVsZW1lbnQgPSBzdG9yeUNvbnRhaW5lci5jdXJyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHJldHVybiBib3R0b21FbGVtZW50ID8gYm90dG9tRWxlbWVudC5vZmZzZXRUb3AgKyBib3R0b21FbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBnaXZlbiBzZWxlY3Rvci4gVXNlZCBmb3IgcmVtb3ZpbmcgY2hvaWNlcyBhZnRlclxuICAgIC8vIHlvdSd2ZSBwaWNrZWQgb25lLCBhcyB3ZWxsIGFzIGZvciB0aGUgQ0xFQVIgYW5kIFJFU1RBUlQgdGFncy5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgZm9yIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgaGVhZGVyIHdoZW4geW91IENMRUFSIG9yIFJFU1RBUlQgdGhlIHN0b3J5IHJlc3BlY3RpdmVseS5cbiAgICBmdW5jdGlvbiBzZXRWaXNpYmxlKHNlbGVjdG9yLCB2aXNpYmxlKSB7XG4gICAgICAgIHZhciBhbGxFbGVtZW50cyA9IHN0b3J5Q29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGFsbEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciBmb3IgcGFyc2luZyBvdXQgdGFncyBvZiB0aGUgZm9ybTpcbiAgICAvLyAgIyBQUk9QRVJUWTogdmFsdWVcbiAgICAvLyBlLmcuIElNQUdFOiBzb3VyY2UgcGF0aFxuICAgIGZ1bmN0aW9uIHNwbGl0UHJvcGVydHlUYWcodGFnKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eVNwbGl0SWR4ID0gdGFnLmluZGV4T2YoXCI6XCIpO1xuICAgICAgICBpZiAocHJvcGVydHlTcGxpdElkeCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0YWcuc3Vic3RyKDAsIHByb3BlcnR5U3BsaXRJZHgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0YWcuc3Vic3RyKHByb3BlcnR5U3BsaXRJZHggKyAxKS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICB2YWw6IHZhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwic3RvcnkxLmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcnkgZmlsZSBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdG9yeUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3J5IGZpbGUgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTdG9yeSA9IG5ldyBpbmt5LlN0b3J5KHN0b3J5Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgaW5rIHN0b3J5IGNyZWF0ZWRcIilcbiAgICAgICAgICAgICAgICBzZXRTdG9yeShuZXdTdG9yeSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSlcblxuICAgIC8vIEFmdGVyIHN0b3J5IGlzIGxvYWRlZFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChudWxsICE9PSBzdG9yeSkge1xuICAgICAgICAgICAgY29udGludWVTdG9yeSgpO1xuICAgICAgICB9XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF0aW5nIFNpbTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxoMT5EYXRpbmcgU2ltPC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJDb250YWluZXJcIiByZWY9e291dGVyU2Nyb2xsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0b3J5XCIgcmVmPXtzdG9yeUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9