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
        lineNumber: 159,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInN0b3J5IiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsInN0b3J5Q29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJzaG93QWZ0ZXIiLCJwdXNoIiwicmVtb3ZlQWxsIiwic2V0VmlzaWJsZSIsInJlc3RhcnQiLCJwYXJhZ3JhcGhFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VycmVudENob2ljZXMiLCJmb3JFYWNoIiwiY2hvaWNlIiwiY2hvaWNlUGFyYWdyYXBoRWxlbWVudCIsInRleHQiLCJjaG9pY2VBbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkNob29zZUNob2ljZUluZGV4IiwiaW5kZXgiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbERvd24iLCJkaXNwbGF5VGV4dCIsImlua3kiLCJSZXNldFN0YXRlIiwib3V0ZXJTY3JvbGxDb250YWluZXIiLCJzY3JvbGxUbyIsInVzZUVmZmVjdCIsImlua2pzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdG9yeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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NDUyZWMyNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBpbmt5IGZyb20gJ2lua2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIGxldCBzdG9yeSA9IG51bGw7XG5cbiAgICBjb25zdCBjdXN0b21Db250aW51ZVN0b3J5ID0gKCkgPT4ge1xuICAgICAgICBpZihudWxsICE9PSBzdG9yeSAmJiBzdG9yeS5jYW5Db250aW51ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4gY29udGludVwiKTtcbiAgICAgICAgICAgIHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250aW51ZVN0b3J5KGZpcnN0VGltZSkge1xuXG4gICAgICAgIHZhciBwYXJhZ3JhcGhJbmRleCA9IDA7XG4gICAgICAgIHZhciBkZWxheSA9IDAuMDtcbiAgICAgICAgXG4gICAgICAgIC8vIERvbid0IG92ZXItc2Nyb2xsIHBhc3QgbmV3IGNvbnRlbnRcbiAgICAgICAgdmFyIHByZXZpb3VzQm90dG9tRWRnZSA9IGZpcnN0VGltZSA/IDAgOiBjb250ZW50Qm90dG9tRWRnZVkoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBzdG9yeSB0ZXh0IC0gbG9vcCB0aHJvdWdoIGF2YWlsYWJsZSBjb250ZW50XG4gICAgICAgIHdoaWxlKHN0b3J5LmNhbkNvbnRpbnVlKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCBpbmsgdG8gZ2VuZXJhdGUgdGhlIG5leHQgcGFyYWdyYXBoXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoVGV4dCA9IHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgICAgICB2YXIgdGFncyA9IHN0b3J5LmN1cnJlbnRUYWdzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBbnkgc3BlY2lhbCB0YWdzIGluY2x1ZGVkIHdpdGggdGhpcyBsaW5lXG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2xhc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IHRhZ3Mgb2YgdGhlIGZvcm0gXCJYOiBZXCIuIEN1cnJlbnRseSB1c2VkIGZvciBJTUFHRSBhbmQgQ0xBU1MgYnV0IGNvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gY3VzdG9taXNlZCB0byBiZSB1c2VkIGZvciBvdGhlciB0aGluZ3MgdG9vLlxuICAgICAgICAgICAgICAgIHZhciBzcGxpdFRhZyA9IHNwbGl0UHJvcGVydHlUYWcodGFnKTtcblxuICAgICAgICAgICAgICAgIC8vIElNQUdFOiBzcmNcbiAgICAgICAgICAgICAgICBpZiggc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJJTUFHRVwiICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcGxpdFRhZy52YWw7XG4gICAgICAgICAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEFTUzogY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJDTEFTU1wiICkge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzc2VzLnB1c2goc3BsaXRUYWcudmFsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEVBUiAtIHJlbW92ZXMgYWxsIGV4aXN0aW5nIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgLy8gUkVTVEFSVCAtIGNsZWFycyBldmVyeXRoaW5nIGFuZCByZXN0YXJ0cyB0aGUgc3RvcnkgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgZWxzZSBpZiggdGFnID09IFwiQ0xFQVJcIiB8fCB0YWcgPT0gXCJSRVNUQVJUXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBpZiB5b3Ugd2FudCB0byBsZWF2ZSB0aGUgaGVhZGVyIHZpc2libGUgd2hlbiBjbGVhcmluZ1xuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIHRhZyA9PSBcIlJFU1RBUlRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCBlbGVtZW50IChpbml0aWFsbHkgaGlkZGVuKVxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IHBhcmFncmFwaFRleHQ7XG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY2xhc3NlcyBkZXJpdmVkIGZyb20gaW5rIHRhZ3NcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGN1c3RvbUNsYXNzZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5jbGFzc0xpc3QuYWRkKGN1c3RvbUNsYXNzZXNbaV0pO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGluIHBhcmFncmFwaCBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIHBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgSFRNTCBjaG9pY2VzIGZyb20gaW5rIGNob2ljZXNcbiAgICAgICAgc3RvcnkuY3VycmVudENob2ljZXMuZm9yRWFjaChmdW5jdGlvbihjaG9pY2UpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCB3aXRoIGFuY2hvciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9JyMnPiR7Y2hvaWNlLnRleHR9PC9hPmBcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGNob2ljZSBpbiBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG5cbiAgICAgICAgICAgIC8vIENsaWNrIG9uIGNob2ljZVxuICAgICAgICAgICAgdmFyIGNob2ljZUFuY2hvckVsID0gY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVswXTtcbiAgICAgICAgICAgIGNob2ljZUFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZm9sbG93IDxhPiBsaW5rXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgY2hvaWNlc1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInAuY2hvaWNlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVGVsbCB0aGUgc3Rvcnkgd2hlcmUgdG8gZ28gbmV4dFxuICAgICAgICAgICAgICAgIHN0b3J5LkNob29zZUNob2ljZUluZGV4KGNob2ljZS5pbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBYWFuZCBsb29wXG4gICAgICAgICAgICAgICAgY29udGludWVTdG9yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEV4dGVuZCBoZWlnaHQgdG8gZml0XG4gICAgICAgIC8vIFdlIGRvIHRoaXMgbWFudWFsbHkgc28gdGhhdCByZW1vdmluZyBlbGVtZW50cyBhbmQgY3JlYXRpbmcgbmV3IG9uZXMgZG9lc24ndFxuICAgICAgICAvLyBjYXVzZSB0aGUgaGVpZ2h0IChhbmQgdGhlcmVmb3JlIHNjcm9sbCkgdG8ganVtcCBiYWNrd2FyZHMgdGVtcG9yYXJpbHkuXG4gICAgICAgIHN0b3J5Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRCb3R0b21FZGdlWSgpK1wicHhcIjtcblxuICAgICAgICBpZiggIWZpcnN0VGltZSApXG4gICAgICAgICAgICBzY3JvbGxEb3duKHByZXZpb3VzQm90dG9tRWRnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRleHQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gaW5reS5nZXRUZXh0KCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzdG9yeS5SZXNldFN0YXRlKCk7XG5cbiAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY29udGludWVTdG9yeSh0cnVlKTtcblxuICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmtqcyk7XG4gICAgICAgIGZldGNoKFwic3RvcnkuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0b3J5Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3J5Q29udGVudCk7XG4gICAgICAgICAgICAgICAgc3RvcnkgPSBuZXcgaW5reS5TdG9yeShzdG9yeUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3J5KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRpbmcgU2ltPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGgxPkRhdGluZyBTaW08L2gxPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9