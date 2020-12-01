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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsInNob3dBZnRlciIsInB1c2giLCJyZW1vdmVBbGwiLCJzZXRWaXNpYmxlIiwicmVzdGFydCIsInBhcmFncmFwaEVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjdXJyZW50Q2hvaWNlcyIsImZvckVhY2giLCJjaG9pY2UiLCJjaG9pY2VQYXJhZ3JhcGhFbGVtZW50IiwidGV4dCIsImNob2ljZUFuY2hvckVsIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiQ2hvb3NlQ2hvaWNlSW5kZXgiLCJpbmRleCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsRG93biIsIlJlc2V0U3RhdGUiLCJzY3JvbGxUbyIsImVsIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRhcmdldCIsImxpbWl0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJzY3JvbGxUb3AiLCJkaXN0IiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdGVwIiwidGltZSIsInQiLCJsZXJwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYm90dG9tRWxlbWVudCIsImxhc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzZWxlY3RvciIsImFsbEVsZW1lbnRzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlzaWJsZSIsInByb3BlcnR5U3BsaXRJZHgiLCJpbmRleE9mIiwic3Vic3RyIiwidHJpbSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RvcnlDb250ZW50IiwibmV3U3RvcnkiLCJpbmt5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUUzQjtBQUYyQixrQkFHREMsc0RBQVEsQ0FBQyxJQUFELENBSFA7QUFBQSxNQUdwQkMsS0FIb0I7QUFBQSxNQUdiQyxRQUhhLGlCQUszQjs7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCLENBTjJCLENBUTNCOztBQUNBLE1BQU1DLGNBQWMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQzs7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsUUFBSSxTQUFTTixLQUFULElBQWtCQSxLQUFLLENBQUNPLFdBQTVCLEVBQXlDO0FBQ3JDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FULFdBQUssQ0FBQ1UsUUFBTjtBQUNIO0FBQ0osR0FMRDs7QUFPQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBZTtBQUVqQyxRQUFJQyxjQUFjLEdBQUcsQ0FBckI7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QzhGLFFBQUQsQ0FBUjtBQUNILEtBVkw7QUFXSCxHQVpRLEVBWU4sRUFaTSxDQUFULENBeE4yQixDQXNPM0I7O0FBQ0FMLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksU0FBUzFGLEtBQWIsRUFBb0I7QUFDaEJXLG1CQUFhO0FBQ2hCO0FBQ0osR0FKUSxFQUlOLENBQUNYLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQWdDLFdBQUcsRUFBRUssb0JBQXJDO0FBQUEsK0JBQ0k7QUFBSyxZQUFFLEVBQUMsT0FBUjtBQUFnQixhQUFHLEVBQUVGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0E1UHVCTCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNhNTI4ZDhiMzk0OTcwYWRjOTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICogYXMgaW5reSBmcm9tICdpbmtqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICAvLyBJbiBsaWZlY3ljbGUgdmFyc1xuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBTdGF0aWMgdmFyc1xuICAgIGxldCBnbG9iYWxUYWdzID0gbnVsbDtcblxuICAgIC8vIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHN0b3J5Q29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG91dGVyU2Nyb2xsQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgY3VzdG9tQ29udGludWVTdG9yeSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5ICYmIHN0b3J5LmNhbkNvbnRpbnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiBjb250aW51XCIpO1xuICAgICAgICAgICAgc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRpbnVlU3RvcnkgPSAoZmlyc3RUaW1lKSA9PiB7XG5cbiAgICAgICAgdmFyIHBhcmFncmFwaEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRlbGF5ID0gMC4wO1xuXG4gICAgICAgIC8vIERvbid0IG92ZXItc2Nyb2xsIHBhc3QgbmV3IGNvbnRlbnRcbiAgICAgICAgdmFyIHByZXZpb3VzQm90dG9tRWRnZSA9IGZpcnN0VGltZSA/IDAgOiBjb250ZW50Qm90dG9tRWRnZVkoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBzdG9yeSB0ZXh0IC0gbG9vcCB0aHJvdWdoIGF2YWlsYWJsZSBjb250ZW50XG4gICAgICAgIHdoaWxlIChzdG9yeS5jYW5Db250aW51ZSkge1xuXG4gICAgICAgICAgICAvLyBHZXQgaW5rIHRvIGdlbmVyYXRlIHRoZSBuZXh0IHBhcmFncmFwaFxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaFRleHQgPSBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICAgICAgdmFyIHRhZ3MgPSBzdG9yeS5jdXJyZW50VGFncztcblxuICAgICAgICAgICAgLy8gQW55IHNwZWNpYWwgdGFncyBpbmNsdWRlZCB3aXRoIHRoaXMgbGluZVxuICAgICAgICAgICAgdmFyIGN1c3RvbUNsYXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IHRhZ3Mgb2YgdGhlIGZvcm0gXCJYOiBZXCIuIEN1cnJlbnRseSB1c2VkIGZvciBJTUFHRSBhbmQgQ0xBU1MgYnV0IGNvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gY3VzdG9taXNlZCB0byBiZSB1c2VkIGZvciBvdGhlciB0aGluZ3MgdG9vLlxuICAgICAgICAgICAgICAgIHZhciBzcGxpdFRhZyA9IHNwbGl0UHJvcGVydHlUYWcodGFnKTtcblxuICAgICAgICAgICAgICAgIC8vIElNQUdFOiBzcmNcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNwbGl0VGFnLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc3RvcnlDb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ0xBU1M6IGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNwbGl0VGFnICYmIHNwbGl0VGFnLnByb3BlcnR5ID09IFwiQ0xBU1NcIikge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzc2VzLnB1c2goc3BsaXRUYWcudmFsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEVBUiAtIHJlbW92ZXMgYWxsIGV4aXN0aW5nIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgLy8gUkVTVEFSVCAtIGNsZWFycyBldmVyeXRoaW5nIGFuZCByZXN0YXJ0cyB0aGUgc3RvcnkgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnID09IFwiQ0xFQVJcIiB8fCB0YWcgPT0gXCJSRVNUQVJUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWxsKFwiaW1nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBpZiB5b3Ugd2FudCB0byBsZWF2ZSB0aGUgaGVhZGVyIHZpc2libGUgd2hlbiBjbGVhcmluZ1xuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PSBcIlJFU1RBUlRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcGFyYWdyYXBoIGVsZW1lbnQgKGluaXRpYWxseSBoaWRkZW4pXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gcGFyYWdyYXBoVGV4dDtcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhbnkgY3VzdG9tIGNsYXNzZXMgZGVyaXZlZCBmcm9tIGluayB0YWdzXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1c3RvbUNsYXNzZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKGN1c3RvbUNsYXNzZXNbaV0pO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGluIHBhcmFncmFwaCBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIHBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgSFRNTCBjaG9pY2VzIGZyb20gaW5rIGNob2ljZXNcbiAgICAgICAgc3RvcnkuY3VycmVudENob2ljZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlKSB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggd2l0aCBhbmNob3IgZWxlbWVudFxuICAgICAgICAgICAgdmFyIGNob2ljZVBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaG9pY2VcIik7XG4gICAgICAgICAgICBjaG9pY2VQYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPScjJz4ke2Nob2ljZS50ZXh0fTwvYT5gXG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGNob2ljZSBpbiBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG5cbiAgICAgICAgICAgIC8vIENsaWNrIG9uIGNob2ljZVxuICAgICAgICAgICAgdmFyIGNob2ljZUFuY2hvckVsID0gY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVswXTtcbiAgICAgICAgICAgIGNob2ljZUFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvbGxvdyA8YT4gbGlua1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGNob2ljZXNcbiAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwLmNob2ljZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFRlbGwgdGhlIHN0b3J5IHdoZXJlIHRvIGdvIG5leHRcbiAgICAgICAgICAgICAgICBzdG9yeS5DaG9vc2VDaG9pY2VJbmRleChjaG9pY2UuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWFhbmQgbG9vcFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRlbmQgaGVpZ2h0IHRvIGZpdFxuICAgICAgICAvLyBXZSBkbyB0aGlzIG1hbnVhbGx5IHNvIHRoYXQgcmVtb3ZpbmcgZWxlbWVudHMgYW5kIGNyZWF0aW5nIG5ldyBvbmVzIGRvZXNuJ3RcbiAgICAgICAgLy8gY2F1c2UgdGhlIGhlaWdodCAoYW5kIHRoZXJlZm9yZSBzY3JvbGwpIHRvIGp1bXAgYmFja3dhcmRzIHRlbXBvcmFyaWx5LlxuICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRCb3R0b21FZGdlWSgpICsgXCJweFwiO1xuXG4gICAgICAgIGlmICghZmlyc3RUaW1lKVxuICAgICAgICAgICAgc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHN0b3J5LlJlc2V0U3RhdGUoKTtcblxuICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCB0cnVlKTtcblxuICAgICAgICBjb250aW51ZVN0b3J5KHRydWUpO1xuXG4gICAgICAgIG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgLy8gRmFkZXMgaW4gYW4gZWxlbWVudCBhZnRlciBhIHNwZWNpZmllZCBkZWxheVxuICAgIGNvbnN0IHNob3dBZnRlciA9IChkZWxheSwgZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xscyB0aGUgcGFnZSBkb3duLCBidXQgbm8gZnVydGhlciB0aGFuIHRoZSBib3R0b20gZWRnZSBvZiB3aGF0IHlvdSBjb3VsZFxuICAgIC8vIHNlZSBwcmV2aW91c2x5LCBzbyBpdCBkb2Vzbid0IGdvIHRvbyBmYXIuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpIHtcblxuICAgICAgICAvLyBMaW5lIHVwIHRvcCBvZiBzY3JlZW4gd2l0aCB0aGUgYm90dG9tIG9mIHdoZXJlIHRoZSBwcmV2aW91cyBjb250ZW50IGVuZGVkXG4gICAgICAgIHZhciB0YXJnZXQgPSBwcmV2aW91c0JvdHRvbUVkZ2U7XG5cbiAgICAgICAgLy8gQ2FuJ3QgZ28gZnVydGhlciB0aGFuIHRoZSB2ZXJ5IGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICB2YXIgbGltaXQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbEhlaWdodCAtIG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAodGFyZ2V0ID4gbGltaXQpIHRhcmdldCA9IGxpbWl0O1xuXG4gICAgICAgIHZhciBzdGFydCA9IG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHZhciBkaXN0ID0gdGFyZ2V0IC0gc3RhcnQ7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDMwMCArIDMwMCAqIGRpc3QgLyAxMDA7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcbiAgICAgICAgICAgIGlmIChzdGFydFRpbWUgPT0gbnVsbCkgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgbGVycCA9IDMgKiB0ICogdCAtIDIgKiB0ICogdCAqIHQ7IC8vIGVhc2UgaW4vb3V0XG4gICAgICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbFRvKDAsICgxLjAgLSBsZXJwKSAqIHN0YXJ0ICsgbGVycCAqIHRhcmdldCk7XG4gICAgICAgICAgICBpZiAodCA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIGVuZCBvZiBhbGwgdGhlIHN0b3J5IGNvbnRlbnQsIHVzZWRcbiAgICAvLyBmb3IgZ3Jvd2luZyB0aGUgY29udGFpbmVyLCBhbmQgZGVjaWRpbmcgaG93IGZhciB0byBzY3JvbGwuXG4gICAgZnVuY3Rpb24gY29udGVudEJvdHRvbUVkZ2VZKCkge1xuICAgICAgICB2YXIgYm90dG9tRWxlbWVudCA9IHN0b3J5Q29udGFpbmVyLmN1cnJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgcmV0dXJuIGJvdHRvbUVsZW1lbnQgPyBib3R0b21FbGVtZW50Lm9mZnNldFRvcCArIGJvdHRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHNlbGVjdG9yLiBVc2VkIGZvciByZW1vdmluZyBjaG9pY2VzIGFmdGVyXG4gICAgLy8geW91J3ZlIHBpY2tlZCBvbmUsIGFzIHdlbGwgYXMgZm9yIHRoZSBDTEVBUiBhbmQgUkVTVEFSVCB0YWdzLlxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgYWxsRWxlbWVudHMgPSBzdG9yeUNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBhbGxFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3IgaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBoZWFkZXIgd2hlbiB5b3UgQ0xFQVIgb3IgUkVTVEFSVCB0aGUgc3RvcnkgcmVzcGVjdGl2ZWx5LlxuICAgIGZ1bmN0aW9uIHNldFZpc2libGUoc2VsZWN0b3IsIHZpc2libGUpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIGZvciBwYXJzaW5nIG91dCB0YWdzIG9mIHRoZSBmb3JtOlxuICAgIC8vICAjIFBST1BFUlRZOiB2YWx1ZVxuICAgIC8vIGUuZy4gSU1BR0U6IHNvdXJjZSBwYXRoXG4gICAgZnVuY3Rpb24gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5U3BsaXRJZHggPSB0YWcuaW5kZXhPZihcIjpcIik7XG4gICAgICAgIGlmIChwcm9wZXJ0eVNwbGl0SWR4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHRhZy5zdWJzdHIoMCwgcHJvcGVydHlTcGxpdElkeCkudHJpbSgpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRhZy5zdWJzdHIocHJvcGVydHlTcGxpdElkeCArIDEpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbDogdmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJzdG9yeS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3J5IGZpbGUgZm91bmRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RvcnlDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdG9yeSBmaWxlIGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RvcnkgPSBuZXcgaW5reS5TdG9yeShzdG9yeUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGluayBzdG9yeSBjcmVhdGVkXCIpXG4gICAgICAgICAgICAgICAgc2V0U3RvcnkobmV3U3RvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pXG5cbiAgICAvLyBBZnRlciBzdG9yeSBpcyBsb2FkZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobnVsbCAhPT0gc3RvcnkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgfVxuICAgIH0sIFtzdG9yeV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRhdGluZyBTaW08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8aDE+RGF0aW5nIFNpbTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ29udGFpbmVyXCIgcmVmPXtvdXRlclNjcm9sbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdG9yeVwiIHJlZj17c3RvcnlDb250YWluZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==