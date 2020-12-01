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

  var story = null;

  var customContinueStory = function customContinueStory() {
    if (null !== story && story.canContinue) {
      console.log("can continu");
      story.Continue();
    }
  };

  function continueStory(firstTime) {
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
  }

  var displayText = function displayText() {
    var text = inkjs__WEBPACK_IMPORTED_MODULE_3__["getText"]();
  };

  var restart = function restart() {
    story.ResetState();
    setVisible(".header", true);
    continueStory(true);
    outerScrollContainer.scrollTo(0, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(inkjs);
    fetch("story.json").then(function (response) {
      console.log(response);
      return response.text();
    }).then(function (storyContent) {
      console.log(storyContent);
      story = new inkjs__WEBPACK_IMPORTED_MODULE_3__["Story"](storyContent);
      console.log(story);
      continueStory();
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outerContainer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "story"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 9
  }, this);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInN0b3J5IiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsInN0b3J5Q29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJzaG93QWZ0ZXIiLCJwdXNoIiwicmVtb3ZlQWxsIiwic2V0VmlzaWJsZSIsInJlc3RhcnQiLCJwYXJhZ3JhcGhFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VycmVudENob2ljZXMiLCJmb3JFYWNoIiwiY2hvaWNlIiwiY2hvaWNlUGFyYWdyYXBoRWxlbWVudCIsInRleHQiLCJjaG9pY2VBbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkNob29zZUNob2ljZUluZGV4IiwiaW5kZXgiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbERvd24iLCJkaXNwbGF5VGV4dCIsImlua3kiLCJSZXNldFN0YXRlIiwib3V0ZXJTY3JvbGxDb250YWluZXIiLCJzY3JvbGxUbyIsInVzZUVmZmVjdCIsImlua2pzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdG9yeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBdEt1QlAsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmEyNmUzMzdlM2ViNzA0Y2E5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCAqIGFzIGlua3kgZnJvbSAnaW5ranMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgbGV0IHN0b3J5ID0gbnVsbDtcblxuXG4gICAgY29uc3QgY3VzdG9tQ29udGludWVTdG9yeSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5ICYmIHN0b3J5LmNhbkNvbnRpbnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiBjb250aW51XCIpO1xuICAgICAgICAgICAgc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRpbnVlU3RvcnkoZmlyc3RUaW1lKSB7XG5cbiAgICAgICAgdmFyIHBhcmFncmFwaEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRlbGF5ID0gMC4wO1xuXG4gICAgICAgIC8vIERvbid0IG92ZXItc2Nyb2xsIHBhc3QgbmV3IGNvbnRlbnRcbiAgICAgICAgdmFyIHByZXZpb3VzQm90dG9tRWRnZSA9IGZpcnN0VGltZSA/IDAgOiBjb250ZW50Qm90dG9tRWRnZVkoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBzdG9yeSB0ZXh0IC0gbG9vcCB0aHJvdWdoIGF2YWlsYWJsZSBjb250ZW50XG4gICAgICAgIHdoaWxlIChzdG9yeS5jYW5Db250aW51ZSkge1xuXG4gICAgICAgICAgICAvLyBHZXQgaW5rIHRvIGdlbmVyYXRlIHRoZSBuZXh0IHBhcmFncmFwaFxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaFRleHQgPSBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICAgICAgdmFyIHRhZ3MgPSBzdG9yeS5jdXJyZW50VGFncztcblxuICAgICAgICAgICAgLy8gQW55IHNwZWNpYWwgdGFncyBpbmNsdWRlZCB3aXRoIHRoaXMgbGluZVxuICAgICAgICAgICAgdmFyIGN1c3RvbUNsYXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IHRhZ3Mgb2YgdGhlIGZvcm0gXCJYOiBZXCIuIEN1cnJlbnRseSB1c2VkIGZvciBJTUFHRSBhbmQgQ0xBU1MgYnV0IGNvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gY3VzdG9taXNlZCB0byBiZSB1c2VkIGZvciBvdGhlciB0aGluZ3MgdG9vLlxuICAgICAgICAgICAgICAgIHZhciBzcGxpdFRhZyA9IHNwbGl0UHJvcGVydHlUYWcodGFnKTtcblxuICAgICAgICAgICAgICAgIC8vIElNQUdFOiBzcmNcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNwbGl0VGFnLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGltYWdlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMQVNTOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIkNMQVNTXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3Nlcy5wdXNoKHNwbGl0VGFnLnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ0xFQVIgLSByZW1vdmVzIGFsbCBleGlzdGluZyBjb250ZW50LlxuICAgICAgICAgICAgICAgIC8vIFJFU1RBUlQgLSBjbGVhcnMgZXZlcnl0aGluZyBhbmQgcmVzdGFydHMgdGhlIHN0b3J5IGZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSBcIkNMRUFSXCIgfHwgdGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcImltZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgaWYgeW91IHdhbnQgdG8gbGVhdmUgdGhlIGhlYWRlciB2aXNpYmxlIHdoZW4gY2xlYXJpbmdcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT0gXCJSRVNUQVJUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCBlbGVtZW50IChpbml0aWFsbHkgaGlkZGVuKVxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IHBhcmFncmFwaFRleHQ7XG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY2xhc3NlcyBkZXJpdmVkIGZyb20gaW5rIHRhZ3NcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3VzdG9tQ2xhc3Nlc1tpXSk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgaW4gcGFyYWdyYXBoIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgcGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBIVE1MIGNob2ljZXMgZnJvbSBpbmsgY2hvaWNlc1xuICAgICAgICBzdG9yeS5jdXJyZW50Q2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCB3aXRoIGFuY2hvciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9JyMnPiR7Y2hvaWNlLnRleHR9PC9hPmBcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGNob2ljZSBpbiBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG5cbiAgICAgICAgICAgIC8vIENsaWNrIG9uIGNob2ljZVxuICAgICAgICAgICAgdmFyIGNob2ljZUFuY2hvckVsID0gY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVswXTtcbiAgICAgICAgICAgIGNob2ljZUFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvbGxvdyA8YT4gbGlua1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGNob2ljZXNcbiAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwLmNob2ljZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFRlbGwgdGhlIHN0b3J5IHdoZXJlIHRvIGdvIG5leHRcbiAgICAgICAgICAgICAgICBzdG9yeS5DaG9vc2VDaG9pY2VJbmRleChjaG9pY2UuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWFhbmQgbG9vcFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRlbmQgaGVpZ2h0IHRvIGZpdFxuICAgICAgICAvLyBXZSBkbyB0aGlzIG1hbnVhbGx5IHNvIHRoYXQgcmVtb3ZpbmcgZWxlbWVudHMgYW5kIGNyZWF0aW5nIG5ldyBvbmVzIGRvZXNuJ3RcbiAgICAgICAgLy8gY2F1c2UgdGhlIGhlaWdodCAoYW5kIHRoZXJlZm9yZSBzY3JvbGwpIHRvIGp1bXAgYmFja3dhcmRzIHRlbXBvcmFyaWx5LlxuICAgICAgICBzdG9yeUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjb250ZW50Qm90dG9tRWRnZVkoKSArIFwicHhcIjtcblxuICAgICAgICBpZiAoIWZpcnN0VGltZSlcbiAgICAgICAgICAgIHNjcm9sbERvd24ocHJldmlvdXNCb3R0b21FZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGV4dCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSBpbmt5LmdldFRleHQoKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHN0b3J5LlJlc2V0U3RhdGUoKTtcblxuICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCB0cnVlKTtcblxuICAgICAgICBjb250aW51ZVN0b3J5KHRydWUpO1xuXG4gICAgICAgIG91dGVyU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlua2pzKTtcbiAgICAgICAgZmV0Y2goXCJzdG9yeS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RvcnlDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcnlDb250ZW50KTtcbiAgICAgICAgICAgICAgICBzdG9yeSA9IG5ldyBpbmt5LlN0b3J5KHN0b3J5Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcnkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRhdGluZyBTaW08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8aDE+RGF0aW5nIFNpbTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=